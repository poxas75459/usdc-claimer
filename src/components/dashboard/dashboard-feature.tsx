/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3z99fhF8Gfrr2wTWBeMNhJF8ub9tES2QKrTeHSsR3a72Zi6hyuSWqvekWAUPYRHLEeDkoZMfDrN3WSecoP9XBWcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMbsCbBoQPS6VK2qR2YVrM5XCDmhqNDijpkmpmwMo6fbdwNPkfxZBMfp55sKDdcyaZEtCuN2BZQofUKjuJHtipv",
  "key1": "5HqMAQTvtJ1bzsUbp8jn9zBbvkSJXZ5FVoo88d6VB8ZX737EvUTVvUKKuj8TEMiaKzNXc32GaMXSmXrEA7Mc6so7",
  "key2": "4sCbX1R36wn6Fj7gs3rauVGT1hrbMfKteU2WC2g26PedpdnhNhTua76u5EHHibkJMT2Jvjgnpw4tSHus3fiRniXi",
  "key3": "4ZPw9KbYVHHssLd1KgDH3brtuceumxAmCPEXFotcDCxPTHYoV8sEfBrTZCWiUSWzWasNjCZdh6Cp2ck1x8iNrTWD",
  "key4": "2h7SeHdvvZurfPVDfRrRHpAfzKi2uBRd5ERG4wmeDYfrNYmeE1gTZ6QDMNUapNTDTJCeCRXr5vynj98VJ6gsdAbo",
  "key5": "2HXE2SBYagpZBkTrvj5ZQmrZTwB5scykdk4pVDkENQcifv9zKW8L1Uf8y4a2RHjw1HtZYVdzt8aVR6RW3neZh9nx",
  "key6": "5T67A3HL6Jj2zUdM5tqnA7a6yMuwYCqS1zs3ZSXKv8hMGCvfVDf6iBbtJSoRHJzdorEKcfZFHNtxmQ7dCRideZhY",
  "key7": "4y1HiaYtGfh2TxeEXJfXftVLfg1bb8C8vd1T16pWfBEgWTXJ4a8S73P85EbkP6xdQ3MJUwWUuK6BqTbv5ubifVN9",
  "key8": "2NEGL3zUDN8bqiSC6uJX1TmK2XRAf5Aia2ZChrMTd5erkJYVsrZM2pMNu9KfF2mkAgbFcPiw6NZqkRUpmy88BNeo",
  "key9": "3qGZV1zq12BmG9mKNYa4tJszqQgyRiEp3qhDQh16GbjupNq9L2uA2B88CRnGfcVuog7pUuwY5YPVhZaAzzUd54ko",
  "key10": "7V6Z9dw1oT3aeuPajonN8aPGy2igupDJgsnRfDqT1Z6yX2cEAzpzdcPktwxRyjWpEX2NygZUAvuHjhhHpxRr9Z4",
  "key11": "2u5udoiHHNLR3PSQgtk1cexAYe6sTp8UVJhqibXdniZ3VWediRpJhByRXvDhKkVQbrowPx6bFq4N8Vds5jyr3ULL",
  "key12": "3xb4AvptLAJ6sKgWoMeiqhezZqzeVxgWkUA3rHaC9xH9RFeoRSevVMgwCP4EBfHGPFRKe3N8amC2jBSJ4aMT24pr",
  "key13": "35mtv733BotkyHjXhjE49Z7v9ranyusv4HkTU8v2ACDE2eE5dPnG9dgZWS5qhxCkp4Ez446WpbWUCQKB9MwdRShz",
  "key14": "4QxoR6sckXc4nj7bcu59626MpfXNKAvQ8XAZ9SP3nLMAhSaoJj4fa6ViGr1Er9CNBCzAD3YC2WKWBVaCq7EtmcXf",
  "key15": "2G37EjSZ33othxYuiKzsuVtHbj2nyPjc2GqA1uHVDVZpaku67UojDYSYasjEow8ZeQTjXnV5ujk4uQbcrWUA8tZt",
  "key16": "35zqPKDXGP9UREsYKM1knDeJ3TXoxpdtNNrZuv7FwjS7TPzJSARMV38rSp9zGNgfBL3ymo8VYStHt97vmncqWjgq",
  "key17": "2qmFf8R4msUWyJ9hLvVePQr16LxCPvCJyX6QHmycQbgLhXv4iqMjg6sjWbhqrf5jeRUDcBTvijLieSGUb3J4xqf4",
  "key18": "5k8F4DXEY9dT4ZC8ggApzzgrh3zeWfeRLktzoMVtxty8qbbLid4HwLUqdPdfQnohe7VQDPgU4SCe252mLhVtGMFK",
  "key19": "2ot5Lf3ZVsW8sqRS3csh3W92qLJEXJdeT15UQHVZ9S2K25XcrUCDJb4ZPwRk7LWE5J7ZKdwxzpnvf3cYBRvTxuRW",
  "key20": "4NT4GHj2RywpheuUY7ASwJiW2u7MJKMFi7KoVKeL6vwq8JZDCBBkuQiPphS943xrvHRz2EfXtffHEiPmrAeUNZxQ",
  "key21": "7r5oGFKN2JbuZUKxTgCYBnymPRHQF7Npcex2Q5nRpTTKPakYmX2LXzV9VGfAhWpdHxdqgwtH7qcVHUZVUwuAYoJ",
  "key22": "3Vt4zbuzfpbn7Wnk1GCwhCiffVCT5f4pTyaZi15o9c7QnA5USHPj7wnDia46WGU37yA2WLgZBDjhDt1WHu81F3Gf",
  "key23": "4kmAVL4Cu4YCFDDZa4ZGRwuC9SjVf4WuRm7L13p2cpBojQdJrES3JVLh1KrBNiVGePYS9XBmZ87yya3gPEGhFMJz",
  "key24": "x2zyW1ZVMGjEj4oEebSL5eQ7Zx81rs3NKWAjMCyQXbaQWGYabT9yeZvGerZ5mbg5P4hEcbPKEEndcFP7BLghLQg",
  "key25": "kZGes5WGRf3pKuj4RWZHKwXRgz71yyDM4XeEdDmhaUEjtc2ACgXBtEB93PxRDVvDEZjqJ3rvwLU3xS2ZQNe672V",
  "key26": "3DWqWo1aZJTznpUprsyNKbbNphYWDYZCPbFECtq8Vm2vYz8CkPTFRfScdwYbqevzH7BeA8XdRJDWzpk3jx9xxjRo",
  "key27": "582Z2YEKYEWGbEXaHJHK6VizYjmyS7sEv8mocAp5mz5yEZ3TZT5N4mHY5q8XDR9UDYTQT3yXP4W5BK317eZBQFrn",
  "key28": "3hzhgEWCCgdD6S4qumwiw6XStxQ5koLK9Luxx93Y65QHowG4apSE88qNBAUNtatrWsq9rXLPuE64DvXyZj42WXEo",
  "key29": "42nFDiZe9TntUmFEh1eLLo3KG6kpMxKpSc1cFLDQ2kr79BxvHgmUrc8KaRjCgiH3uJ5UDpvDTSYWKA2ML83roE4B",
  "key30": "5RnCRCJHcFGiQigBXh7BAC4mTqZxfxo732ASNrfHG4kvcZxZPbF3KfgCnd6HLn4RnM9VjucjCkXYpzX15CDXr2sK",
  "key31": "2gLMVxTtfWZ9812LmkJECX7TsAv6jEEj7dyyPsbYbjyofTsQPgo36SgQCxKeCKzQT2yqiZx6jurbWArJK9nfTBvV",
  "key32": "gMRV3msgZ82grxGyYuVxTd8QmR9EYpWc5m3hwWcs6JbwJ3t7f84r2hE76s3au1QH7YupFwwPve43uiqmZPovBoP",
  "key33": "21SRcFF1ycvYFwHTURS1JcB2tgJ3Rr7hTeVBjzmb392QTRo9aghDXx2SoeVxTVTJZnGCZ8gfzfMru4tvcjgazen8",
  "key34": "3RPWFsm7w2CrTWQXaev9XmwZ3qf1hyy5eoPGPhQGkuKiR32mFcnNQDUv4PJ9zWJ2Rx9N9Bf5WtFiPy4qqoJnhdGx",
  "key35": "5LUsgxJgqy4VQyxrnAZ1DzPr2jMV8LdeHJHWzgypBsSQHjEBb44bn57WCBWgu69kxwpHBUXvfWLfvowmwqJmpSQc",
  "key36": "3ejvZ8uRx32vQVmvYms5XCp6u56GSwa8M7v2WgAJj6pTQ7SWGAikctceUMs6qRC7hdBMh1u8nSPpUMU9TaqL21ci",
  "key37": "63NU5sXLDVGUutbqTQnBqaMWVGWZikiLqim7VWtn841i7cWW9KmiNQeCWSthCaajGnAxNGCGZS2Us4BY25aNFUPR",
  "key38": "55eJ61LTC2Svq2soF7vF2CuufKU3j98pQ5KrPKpPJAoodd6kDyYqqqV7My4YG9Zdb7nGSbiWM7qJbd6zYzFZugr7",
  "key39": "gGyhqAgukyxigXjeYFVfsN8B2YjtxYu8jo3sNeZXf5WuespxPyQTz9AbxkDMgg3umWrfStyvd75nmSTkCGEG4By",
  "key40": "4iGfp84fh7qb6VCu1ZxGgS5p3RxG41jwBHmYGt2A5PGYFErdGcnqsd33fT452a6dJi5m7giKGM76trP187YZvAwt",
  "key41": "2EyJM26nqebE7djBVL3UpWe263qc6JUzpr2Hqvgri1UtJntQNkTiGWdfeMwQrVLV2SrShHeR59coCF9961EML4ph",
  "key42": "3HcoVnoB6SKoHJZc3KZsaLmg5WeyNHwsUTjbk6nCeb7cUW9f1oPg3v9fj8AvV6yiJJV3SLi3ejd52zPKpj83gjzb",
  "key43": "5uNtrSMCZKod5Y356tUHwTAtSSfoB5a7S38AiXDu1KhJBo6cEASeciQZv1Ake3tRR12s53TheXacGaZt2jHcxh6Y",
  "key44": "4qsg9gGJ4HaFv83V2siHsgqv6hMZjxmmdvFHtBcjkbeTNNr7VqHbJccrmZP99ctkN1qyCrC8H4ArgF5wi1sTat2i",
  "key45": "46yXsou9K1Ec1H7ALTbjR6hfGiBbWcdPaChBuxRyva47fp1UDGda6TvVj9so4iq9FvWL7xTEBTdGaw8vYZ3nMjw4",
  "key46": "2SLyQSZTEY2ekGUQNk2gjWusuSig7ATPpLNndmHzVBY1GqH8kKMwYUkQXr6m2jgXB4uZeW5Yz4UUrc16MK34QZca",
  "key47": "3tv4Ccq9gvHU1jhfG7qboRgDR1nkxq5aXmGBt6Ppt2PxZqLNeHTt6bFgFJqLXvMGktGvEkpzrBrLYuCy9doJxZmn",
  "key48": "2C3kHNXyYN4dQtRiPq8dGs3bEZQJDsYrKCBHLggwPJw1qwq37Wb6YUrK5oMVH96n7VTpphbi9sTeiHSangaoYwTn"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

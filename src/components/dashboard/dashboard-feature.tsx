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
    "34p46dvwpejrZMT2Qp95YyCDGVSm8MW3YKWuMvvs4LBjmrYUVE8iWFbR282nAJYKaTRaWzDzAASJHPzzVecqtCzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKRAPab1wEhRG16CgXLgXUfauovLGeyPpgVxjLSFR926jhrYZD7zaQFHdtx2BLJn4gjzfKw75CphoM4Ff8Puimv",
  "key1": "XjxzWmjmcowUrfq6nBmrTPWmGbdUEByrQr7kHokPYNn1cTfXcj1nMDN83P5y29G1cjUvgyV8PZ9fdNziSehK278",
  "key2": "2W52zycndDubgBH6guhLMpSTJkDjJ4Lv5F9DzgP4iKpfkkye4Lt1WwpFWSfmoj99Tg3f9pmtsf1YY7VsJ5punK5B",
  "key3": "5XuxAKbJeYqyZ1VXhMmoe9fcYXDQY6ZAyZqNUu3T1P8TXGgNuvNy386EQCnvFhXhpyGfhMwZGjDexzwXfJVDjXBx",
  "key4": "293ZYPEz2ywFUybAVqjNdoCsUm5fbs6QVrWFnHrmHg9wSMKgSLcThe6ueFQ2gNRnhVM5kthBLXh6CCb22eLWbFus",
  "key5": "5fUrfgnPFfWR8reGkpwKhYuVydpPARRr2dEmaXxGNMKEUshUzMGvu6KjMmHkW5gNfH2UbZGkqrjNhcuEh7zoVZoo",
  "key6": "34V6docjGqYfkE83jyL8koWD8FdfteHh1gNmsRui385cxGbCXTsoqEnnd6pnAZX9F5yxjmPhsTzzheC18s7sLVW",
  "key7": "2ujAaUQ6z7zY1twZo7cL1DS33twhiU9DUzm5GsPL8fLT6uDXucdng2tAtdfeMNaFKSkaBAiJTduk3PdGRAQMbHMn",
  "key8": "2Hvc37Gf6HXiKpiUutewMGhDqhMcnxTFK9TJU3MJsoCdt6WdzvWEtyYD5ePu7LohgCBCut8qv6TXcVWpmDCQdnJf",
  "key9": "3tKmBmsbR3PRVYnVMqKqVsHeFcAcyRS9AoXddAXPC2NJYiyDqaRWraSHLaiGVuG82pwP9PFfxs2WZR7RvXrYrbNf",
  "key10": "45XzTADBzVKtxHvQ9cWmrZzUjYnecn8czWvcBMZd58Hv5T7XqTUnV8CN1rraZi9Z6f8j6KApSwtLQccfvm62Xb3S",
  "key11": "4t3PHjiz8xBba4C3v8F4fbGqirqeKo94mjRDxx5VgAHYMMYC6PqM7RDcC5dYk8VqJ8dCbM9aLyccwZ5e9WqXEHhP",
  "key12": "5BneqpRc396abjkwENwj3YEB79UX2fC4ccmsWQ8J6LSXPFHwSaNeEyeMNE8k1woYQTmvgniPA1yLpG6nePKLZfbB",
  "key13": "49bok1FcM71QKg625JWVCfDzYXt2siD1sixbwGGMSLhF9wf8mrPtF7VDVYgxbBz8UYTz5Yvzig7AuCwve9tbaCCh",
  "key14": "4RoCARAePuDp83GzFpJdyeRcHtqFmB5SRg2wyoHEz16N9UAVNVk1Z5SKFJFEGWmTQVvw5wcMD7HmcAmmFuGoa3FL",
  "key15": "5uQVmEHnBXoKFfD2evr4sLywHWJA3USdjf7sdagh8rmz2NJM2HgW7d84PsPyaLW9H8ZXVJR1sykkgU3aEK3MbuoS",
  "key16": "3kUGRx7D77oPU6hEfcLqx6paPMSjtWXXjdeunc4myLLPQm3rS96Cx4B444njfTwzSFBGW94Fvfj7ffqjDTKfc1v7",
  "key17": "2eXpmYmboSr4wmNqDYg39TZeqyHGek6ucNqB4mXLmtiScXo5pTT36awmzyaGdMC3CuJvMpbVVY8aXYtjm5d65tmb",
  "key18": "YeLanepMV9VHFSpC6huFcQvpUXBUPTzFCBYEgkKWSgrYLt16oDZD7b6K94yp8pyJR621wToDdtsFDs1RnLU2UpJ",
  "key19": "5oLRNAFeWG8bsCnUSozJkW95HsnRoNSzoGvLjQuSWenZrg9kMxRQ7ZQ3AVTVwFSBXSMBFLGuiNE9sBMqsu9wP53L",
  "key20": "2PvdC4wqvprY8CtcdrdpLKhgkRXLUCpuDEHxq6zeGDdkr7P5ptBxGNFEayhVNpCJad6hPJip6EE76A7G1rHydbQ",
  "key21": "5LCwWoKAbFvntbLkBvwy9AECkyCFzpbThCngoo4GkaGAu4Hrro9hjebME2vBdfBF1ELbi4QobZQi8AT9L7UayKMe",
  "key22": "FjhB5NpF4Nicn9J1B4xLpHBzx2oP38WJtmTaogN7XA318JaWrSk6DytvUfCXFPpmWFL4hwMZNrFSCpt8u3v45m4",
  "key23": "2KhcX5tGCwZMRyVFTEiMxpaNSE6RqUezZmU2F2P4yfyoSWWiovz9eaNKJmySCJiEXFLJ391npu8znbqRYDQsHAaM",
  "key24": "3icz32P6UYVGhu5v92kQc92TXFKkiTcDMCGiVSPvRhwy7Gi38i71o2TMwyxKPDWpwdwVC1NwVXfaTDM9AWfn4JZT",
  "key25": "4fT4QV6bzcgv7K874VyH5zLxmuSSA6F7CQheRiRRcMu6UXpiirE9WyJ4EASgb6g6mBLsapNriN1jt9KAr57U4XEv",
  "key26": "4kc2YNTQRVD5bnoLED4WxiSCP7JcGgwSDCLSGTJ1FZE9VFV7bfNcB3AQcw1y1TzkbLKWeRJFfVz1e1Buph8z2bxP",
  "key27": "5ARwGGySdb8p6UcqtUxqFpKrDGZuc9zyG6A3SpWDDbnz6di1QbBUhjmnNDCDvka3QsYbAwcdpi8J1Ehwemhog132",
  "key28": "3ct3mTF7cevyAGrqdLz68ngT2yWm1eA3yQa9RFi7bUxmfNCvkGPaLKWBFJ1uPrZxisbzHpSBa7pYKVL2iYafjGct",
  "key29": "3615bDx9RP1sE7YmMMuWbpqGrdP3uNWMp7qoy7xq9GZk3XGCY1mpgcKHiPcctGoya3HFKFViZ5NEdx9Y4huGrbTz",
  "key30": "F8etEc3emXh1mKLQnJmwbWdqyNmKqv2oumgGmpMFMDc1nR6kkXr8LNjJyc1suWMcG3fi8G1SKbwmqF4rjGWi3NE",
  "key31": "5g4ENTD6yvThX16hbsurv8fyCgZzaXHrmMHAZYAeThKKj49j8wnLwpbercHm8tgia8SAJ8iGsekHF6Kop7yspteh",
  "key32": "3PnS6deHk2gBFmhN8N6saqmQZ9iXrNkVHkXJBmpnnU6Pb26a9z785NcZC8mK9HWckNMdfKcJ5kAz44GybCjvJSLP",
  "key33": "nQ3w6PUXputgugqfYvLKQeoQ7zZdc475A7PBAYYXA7wBVGZ5UNEbLNAp2vPFfiPaniZHsLAHNYaw6QR5dopy9G2",
  "key34": "21f8EsqJDKxGK1Hpxc1nc7SEMDMTecyW6SRNyrsNBHxGjhoPRVMnmHNuL1pyDnETdMuHKj1XCm5qJP5dNCuskDqk",
  "key35": "4HfNgJwhPYHH8TAVEP1YotgArstqH7HYi7S4JZX5BheXijWv2nKFqhPMV17JMb7MKuBSzDD57bwdYEhyWaVxbMSU",
  "key36": "5qHpbP7sDppCqfSZtgB4vwMExtV31cQvzhuAwdZfhUrCHAJFJDkansaxa9QFMs3j6r5UpJmBAo9dM9e1RsZWNWCy",
  "key37": "4aW11ToJba8qbmhRRKsnbxRLf7VVjAAiVmstkV2my8o3NKZ9Z7i3bbJ6Qz7qXQC1nhp2t2W1xW6TogV4oHG61bNv",
  "key38": "4ASmvFcYmhxoU41AcbEjv7WQofE7TaXWC9T1zqg8K6w5YbbafyjJ2iD6tXrokK7atrmL6WwbmRhTZFmgYufqDk9G",
  "key39": "cNLaV8Qfu2RWrW81symWkbsvwxDLcV2KTGQM8jzEJsivZqNsMrYJLEinTtMT4DBzLKTjpSJ7VL1nZ2HAGEEdb6S",
  "key40": "QBxiNRaRgE827donp4FTJDXdL5eRTxc2Mw7nPhjxePxpDDCjriZ3MngeyvxHfoqRPbTwwiE1AYiEEouPh3TcNuL",
  "key41": "2vWKxghgqZSKq2ETppviRDSgUzV2Mnfjw9P93HvDmyH4aGZnZiYgCMVsSv4mVucpcmCJbDBqPP89HPf9ewCxSmwo",
  "key42": "3WKtEUVJe2ubG87UMAGomeojWtoexfPTdbcFVFGe8B7tZf5k73izJ7ZJFdS72atBh6RU8tx5uoesn3EdMLk1sCPx",
  "key43": "2Ka8c2WGXsvPXKw4qyRHRLXbWWJSMGCXzokkuA3P4HRHJKZXLXYmiKBgZkFKJGq7LAAZjUZh5NGF9hcZEY7FoB4F",
  "key44": "s2dPpG5zgb1CU8max3BZp7kNhc6NqDMPeXRnr3fKeQT8iqALVH27yDbuxwpg44x96CspSftBSeV9DoHddBiVR5B",
  "key45": "4omzoL2KEDwwtQ5bb7Yj4MpwPN2oAnBWHgX1LnzmnviygNwCMgrkszcmyBevBnzaPpPhZf1aQfZ1UoS6wUKQUAXh",
  "key46": "2b8Xq779gktu26znzhVKwYRDqBC85L7xpfQe2DDVRCMVzPyrXhmB9RABfK6eWdmsPUCPAvsQThsVvL38Jr3JfH9h"
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

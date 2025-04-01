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
    "4XJDZCi2ZymPey8ohZdG1ZDLnUTX15mC2UAjGtvQkM5UhYYXexbFz8Lc5TYAuLDovEqSj8ErauteGvcG9RM5Pzbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eZq8vB8Ct1Byrbz7Eepp8KT1EDDDAFyTTRgr4m2xKHAtqkYodvd1paxat1NbVWQ2dUi46yY9zKRYDmVVHbW9qja",
  "key1": "49Czw1wgH3DX8oS734taVZFKUwhcYqBLkh3yoPoTqdyk7XJjjMvdyGXRbiBjukDqiN1C9DW9WBqiT3qrnuhN3e9u",
  "key2": "44EvW2FN9fr8JUuiuaWLcNhe8E72V6yhsZjsgNANhvEDnuDvFKZZGeMF7FZzUvrwPKaduuYbPiB65X35RsngoSsn",
  "key3": "4iXGUEdKcvKXst1S3LbqzwjNAEgYAEPpaRZRZ4Y8AWKW4yw2HAyxkpKz3KjSUrmAPMLHDkkx6XiUi2kZaXGvxtSn",
  "key4": "2BwYfahgMb2xnSUmPnaWhtcqB9eTUjWNdEZsV923tpuBReGccHDu124EXPzw7hLsM46MHjeCNRuz8x3EEWeUFvmF",
  "key5": "4eDGvxx3iqAsQ1s5rvTczDUzcWmtGdaaojE4vvAnbsjTKdscQjnamciWVj4bukgrjcJ1JhuLMAm2dFKCigg7VhEi",
  "key6": "4PiFmdKEDbbGNz1frPooSuZYEHXUMmbpX5eLgvpDtg4Cf9ZeNh1GYUV7Vu9PNpBs6bJbcQMhQTDcFqfCWPBy8Ux5",
  "key7": "2xWF1GDqPWb67MvuxBiBeKzpFsKFucUAQrD9odoFW8bjw4BSC3obTo6EHd1GYx1bPvxNHcapRU3a1Q5vKMag6mb",
  "key8": "2CnQF52d8fHoCdgpEeeUqcfoKeiAyLe2JEGHM2HhiF1okAq4Fo9YSPGkRXuiiXt5qk3D8CPD4PFsLgtSiZDP8BKG",
  "key9": "3AzGVCuLDWBfez1ARn9Rxig3Chsp84PfZHpKtaFWDqHMtqdx2RAzp8gV3MgFBFDpTX6zSEx2yCHKncomAJz6FEQV",
  "key10": "3yJKU275CdUG1nkh1KTZUSsR5jKtoxGAx912MoqVP3W82xWaHsRW9eMhRQiQfzbmESqtb1dn7C3XXyQ4AZapyJHp",
  "key11": "2C6EKMj7huTyWeSPg3F9wkZ6j9SPpwurCPa8Hu9iiPgrHMgnjLJTrfMgCLzPUPd1TrDtRoRFoMm7QajV6Fc7jjPB",
  "key12": "2fGtSw8Zqx5uRrtuZTPGe2cFvTmk8nRBySXUftBxr6mJEHF7Nsiu3VapZ2ArEK6qcrWfmtxZxC5rBFYZ1csKUmXB",
  "key13": "4gKqBD1CsEg9H26TJ8CZMztDoK3kCD6SqaWzdNazW1n4fLBBxDfL7dMYTfE6m8wZAS3QwPLc4wtApfJvpMt4f3fb",
  "key14": "TNiWhvrJHhmWfXmzdMVedJScLpjTm1e8trSKK9xKiJL7uj27hAKg65BsqT55homUpzMsEWqPP7oTmpUJ2vwac4r",
  "key15": "5g8Mmz57MfQg7Bx5v7Pck9LnEMSzsY4Lg2Zvy1cR8SJPWw8gPfRR8mAZ6K3doPUD2p2zySajknEdjedGBe3KSyWW",
  "key16": "YV5rutbFd2mydAsnEmZ5UcHuj6ADhTLehK6eD6wnT1nBYeVUSoTAtieyprxgjL1ADMfokGCauR4kY5boyhTgci2",
  "key17": "aGcAxkaqmstxJE9oDSLviA2igVMw4Toy57mG1Cs6GzcLvBKokUG3SARSC4FAq1J4726gFC3ree25TahBigXfpwF",
  "key18": "45Mud4HNaJWcKPwXHL9ibFJxSJQbbAu6tT3Jdq8FiA4RjRVNqcEaDkrVp8xg8xftN2F8HRiUojD5qpQxULanWjaT",
  "key19": "3TVejqdFuQbbg2dvW9qDBQGovUBpdohu1iuqpY3ZH2E2fBMZCwm8jkM6hokiVWLBWfJSpEo61DEz3Nf972pBnGqi",
  "key20": "3ZoyPtVvmb7WZndFiamGfZhg7J43mDK2ryX9eKeuR3YDhyCEUvPsSeRAyxRQv6hVoguEZT4QE6xg5r9pBBdpLSke",
  "key21": "4mq4xzMZvGhMGpbDuSNBRZfj2X37T4d2eQTiRZYZHKTk4yZMxcBneFuWwq42vZtHPgFPJ4b23FrPKWNCHzHYhnUW",
  "key22": "4EQs6r8hMVhty9XxfrLLf2j7ALUvcxN3LZDcUhLdZuYQbHLX1A4sZ1rUy6rEHEPsHGTEEZmezsKkyfEhKcKpS7QR",
  "key23": "3GMUcqXJ9BFGpuCfE2qNGZburmZCJHukr25xBXG62cf6JQ3RM388xvDDM5sho2Sv1ThsR42fDrGJNcfVsLCEnrS5",
  "key24": "4phvw3uE9ZnEZtMnuKRNHSvKw6V2kjswEQYVh5rwxy1UgEWdyJnGZoiHmFUZRvtBmFBgf4XFFjP9dvmCVFLhKfUz",
  "key25": "3C8fmJbNVFob9fFTif7KQzaQYmszS493RnyxUbKwpH7fNSL8CbakHgVByK3ErsT9wJX8u6S17UbGswpPFUR6TRFW",
  "key26": "2RnA38Xb5rNaJDSAGqnRzFErxyQGydRj5F3kJNteeQB6WjfvS67rzVVSwTxdVKQCwv5buhgKiYnMRvkZCiMWBUmG",
  "key27": "2z2P2L2ggJZFXcF2gF4YpwjsKVfCjpjD8bXFYJc9akMJtcgXfsHBY2vYBbb1sgoUeJyJ9e2sADwi7mpTfARFnAqm",
  "key28": "2WMuitxBrMcNsEAPJVVzGuVqnDLNr5wNTgxwu1dzxYsA7MTN2rRb9a3AQ8oFEmBajPEjRKeC5D9MAZvD8VZJsZ6A",
  "key29": "KuhBGPgjTTjPJ5bhLHbGYz8qimjgvLJDeLUfSad9CG7A13CWxQ6a33FCqZnjFPYLCoQ6hDL4NvsKioVF8e7HSf4",
  "key30": "9NtPMLxqs42JqM6TFC3UgfYuUAQg2WnSESkVz8URnzjXG6osDpfTQn72DqCZPbvKuPzwNeKZMJjVdfqDdLNrqh8",
  "key31": "3ZTphP2U27qiFoTZNU4yKGVDWB3RPsnQEFEfGxQbcw2akswM3YMVPNxDq3b4GaEa9ds2jJWRJTjZEZsSaLbX2hDp",
  "key32": "63WFN3H9MyxqoXp5MgS47uVp56ra79t3xEUwgefcQzeWdAxTNwf5RkwefNvkTU2huY7mxvyjAyricmDXxf7K4jyG",
  "key33": "3hm8KCqSwK6jcDZk6pAqLEEqJtNra8sqCpXRRNAeM1rxmmLnjZoUi862waduV1AmHTTU4WwWMYuoEc5NKhYoMfB7",
  "key34": "2V5QhJcn3Lcgu1mPECxbvWdHYXhJpYZ1aiPkJDEUoznt6ivvR7durQr19M6WBr274ZvPYyKjbzi4VcHzhRYJVdWR",
  "key35": "51hRAJM7gVm8xEEsQVzwf2J5kQfwv9eT2AkyomLZYNyJYUhE2Syg3ZK7LSxAoxGKLTqkf8meLSNqvCJLpp47Rwt6",
  "key36": "2Jc6uQV7msX4fdCbNjgeF9u2m1iY9o8ebYE6Kcawc9fMgAWbKHzC35j2CppXtN3xPQy6KNTarA5qoLZxbu6auC6i",
  "key37": "2WZUawyWkwPYkB3jZHmVAr1bFS3RbvozsVCEqZCqH338GAM6SeTQj49LwxWXq9uxELW8w5oza2MRnZUA71jbWRPW",
  "key38": "2rGiMokZhx63JMc9NJLAUjBXkHHigcv7656HGhS716XTvhiK7Hi2Uw4BtSwNPBYZRftpJevx9GKgDcWCsr1y3nj8",
  "key39": "5aTirGLDY3dUcRZcYj9YuC7WBdEgNp8V6QXLaqchzQ3UU2yPhvoYnTB5BghZPeuigQS4yGAfKHQmKsvHWk6PYaTf",
  "key40": "2Hq8oe7YaL6EkBCy12geTpfqH2zv9xYjhD7JrJYWrNQcCe7pBSfeyPdfey8zwm9H9hzknVx8g8FpD2rcS6TkaeQc",
  "key41": "2xUvyRAshj2Hi6b6fV19AWZ45PmZed1xeL3EKB8bRb2Hu6SxiQ7hccK6juNTmfKR5i5EWBrV32Pbp4VvwRguxD2P",
  "key42": "5M6fyribm1rMcnzfBV2wJGW8x7npCwQxyhDHUhLdEBJgqUSaPLRPd2CTJUz7vYhwcEEiWrbDofjTh3wwWUD2hMhf",
  "key43": "4QNbqm3wha7wuwbrqePAo9seMDchbewmzxCsmysuf9bsUByru82W1jZUmf5nEVuq9a2PFDmR8Sc3N8SViwnt4Tqw",
  "key44": "5tr9WuGxsBTZYUuCXE2pobJDYDYoqEW2tV3saYK6tjSyJrsbsxbVKRUysqDUj1aiQ4rohErQEBv51qUKYkSSH7bG"
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

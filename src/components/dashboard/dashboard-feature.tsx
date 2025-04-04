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
    "2wdySwUrMUo3WbCDWVUMJ17PMNtWLbURPKHGWKnk3L6DyMrsJYuVhNUSDmRfrcq88GaW3nEGPmoK2wUAyWH5YzH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqwx1pmxhTN3s8cgSPMt2Xu7BMMBKwDabUscvEgb8ePZjpVV92USh2AA3Twes5izo99qVX9tnzmQPRKXpBmbmhc",
  "key1": "5YfK4PNMqfYWPAvLyc23UtuU7KiNJy6PaSPaNANbBSg1gGMcaW58hjkRrFx2kS2E6SDpsEiiHyWykxRnVHmxHWds",
  "key2": "ZETrEbhi8ooLFp5iSLU9FGj2eNEyoNNCLVNtfRjJs9zGxbbMHPhPtsUWWm1Vm3jZbCft3wqEiJH6tLwD4gCVTiz",
  "key3": "46DNhzPcoQRdPbyPLUQ5y8FMoLjjhuS6gee53EFVwRTfJ4UvBs1UN4Y8JVs68Jv2DNyqYxnNP5ame2Rfb4xpUof4",
  "key4": "5wzmzSHBX74auE1f7kKff4dGgcAES6DQT3QV9xTY38krXX9U63ciaKPrAauZsucSVHQHzUbiid2zVvvF3BphYAEx",
  "key5": "59DMTTqBvCEw2Wc1wh3u8WYjij6weao5Neo7YqVfmvqDghFcBNuziJEVvv8s7pjD856QCpWpqW8BfnQgFvvJpVmS",
  "key6": "4qkEBEmEEyAS8tGKotMqgEkck1NAcAHkR5BW6wdQ4cCEn6D1sVN6qmooFapHNeeQGXKoYbB9xAgZeZMqqi7UY5FN",
  "key7": "57kFrYUwohiMsuqiWQs9uPW6kE9hhJpc5VWMU6vAyCCAc2nzm4Jr1pQ8oiBHhyu5DzPPMokQZLUHdMSJXv6hPvpT",
  "key8": "3GpyE2bTjBYowNEr9YDphMJ42Py5AJSQ7vXbqYWQ5F2isi1DPE9EYkSpmV6eK7BV49yQcAMhyuRfwEk7FxSJWBy",
  "key9": "51BENQu27UQL1A7vp5RgCPFDUVL4sBZz4TGtrvN792APV8rpzUV54B47o73BcRpG1hQAzUMSRhxVtvaSypx7r5NU",
  "key10": "5LqzwFcR2BvSPCNby5kaQpFKyKUsTAhTxd5zKWhc4oix94ExEAM2qwZq5zbeZMuBPAmgUF95KMuZDiWTAxqDRZby",
  "key11": "3gA88VRTK42x79XzuAivexfcCeC2ZjaDPGQJrHsgeXFZCGgcv3WRgzyRKomXSN5UW7AoCBXbMDyd7dZvS2LzN48J",
  "key12": "2sCejfeRa9oFeQKc53ygZLrtzDqrPz13YN1542KBw3UaxYVttUw18p7gx71yJfa5THgC5LorFbugvc6eXfs2bimE",
  "key13": "2fsPiZ9JQ1VrwbDF8fWunfxkpvBGstiYiSQDYcBqyos4YLGn12GVxu6muJoRmecpuf6D29wZAgXJ2YCMXkwJVmbA",
  "key14": "J1TfrSWVfWmsonvNL8x5GB9XHPuxxHoVMJtn6qb92UW76xvho3JozDEVqPNk9KCj2AuYo9V5pK5r5FHFZutXSH2",
  "key15": "5B9Vhtt5RegaMpdwsDYpCLm8tLUjiDTEZ1VmUDKSNXQzRStsxLsJ1nh3aZFn5gJnvRujy3737NrEU8eVu6zDxjXe",
  "key16": "3kfE7gWh4cdwzVmsAhsQEmrPdyP2XiueEA4fZSZxwBoz3twugxBMGD9qobjaNvo4gUuFmPUmuQBsNSwGmSjVdkfV",
  "key17": "4d2fbhn5yzbV65fDM7g4DbY6z9LLaPgJwUgqGWgXvsw3PDA1YodDoBJJyCqCmURtuGV1BKCXrJ96CUkwdQa84mui",
  "key18": "2ZnDMQ93urqjiLMKKoY9fqL2TSudLdvTwpuhRjiQwnVahCnXMHmnsrCN8RLTUsGUtyH7SwW6jaQavFPVDvaTqWfx",
  "key19": "4BBgSTq42fHzoxnjGoFJqcyuBq5CUbJwiJ4twwTgerjqJ544E9sovXopoqAajKVraTdi3MYrAGbUpdw1y8oLyhr2",
  "key20": "Wrma4LYHdRvtC92j8s98g3z3xP144e3reHSqqu27v1PxJKhsppR8ELA3RYsdWdHpzPg6G9FDKb8FyqmJy684FU8",
  "key21": "2TrRZ5Nze6xbWccjHxLApnnnrXQ9Jf9rgQYf2JvWuT5VTTa5qLtdsbxiw5yJVK8LPCmkwacK76z6E6S6yS94UC7k",
  "key22": "HfbNaLnP8gkZtVgfHxnDSQBpqHdoV6SAxn5aunB5ptWsdtACH8uxEFRUe8zuPNk3CB1mKjh1en1kT4xZYkbeW1t",
  "key23": "28yEPkURadyHp3Qu4nugXxL6FF4SuFZ8MawGWdCkYbgPVmKTPRJscuA6zXrHqF8dBaVu4jxhsfCegWrt3ETGQhY5",
  "key24": "5HDWQMA74nje6T4PgWQm8TZL8oZ734ekf3JTQLDSDqazkEuNgTf2qFohWyq3p53Q8bvh2GsxPBK18vpw69w2zfSX",
  "key25": "hdC8EQ3ui9bNjRnPu98ch8Q4vpcvAYBF2v1KUJHDWrwiioKSsprkroHzX6iSUHxDwAKvfEgLwzCqEKaQppqHuu1",
  "key26": "26scdHtMYH1QbDTKK6Xrz2VRgb8gG5VRokaf1AgQoTF2e4NWQ2bxAvLovyMab5tLmLVYbtroAM3jzKuX4NkcCZTY",
  "key27": "4vPzdiVXSzUWtV4JqfVhJUiovGL6hgzHGpUBTD91Kd6dmLbtzExRqHuqmuVgXVfUK4R9hzZSYuMsq91ESvCJTZpz",
  "key28": "3MTG2JwLEbXA4yURyGSny6CFWc1NVPEnZ6Ehr2C2CcRZSSGbkozjSe2Ce5gxhFh19MPDtENHpnmGbzjMH9AcCZFe",
  "key29": "3sMFsvmr1Vbtv3h1HwbzRicikLSfj7SSDRQQfo8Qpiz9bztxXJd6iPc5AjN2ckfs2PcEMd6PdbH4Znyu9oAMbL1P",
  "key30": "4cvhAM5oVBAE4rEUD889ZRpEk53yiaenPS1pvf9SMmqMFArgbpzim1LFWnf6n26EMPPdQCKo9NH9DB8TB6zfAXJZ",
  "key31": "4DhiedbgHLpBgkUxAzRyfbMg1Uyop9SxqimMhB2vWJvrrCEosWPFQVVkugWKLbDUdRr9VBaauALckSxg6nY8xcbz",
  "key32": "37g2kqCiKodsqaGZiJQYUs21hSqyDFKhmohM6SVYEK1Q69VH4CByTEfZHV2R8rLqDb5YKK2YVq94bsneJvCJTxny",
  "key33": "5V4uDXmrhyZAcB5sGmYQCKtPrfw6vsqHvnFqVv6b9APnwJwE54rAdu9NvaU4Cz88ZUCjpZbHGmVvS7M1YK51NXPM",
  "key34": "2NKV6NERHmSFMo9mNTKMUM8a6cV3MG3px6Vft8CxKDvaSYJEXUpwxAxfq3rr1hPrz5yUQkCrss4dAsCK5haQ78Lj",
  "key35": "2iD7tiT5XES5VVMAmTjp2wLGijBBR4WHq9KhovDRN3TxCjyNRA4cQKADQABrbBA33HLVWTxdAquy1YHKtcST5a5B",
  "key36": "5AcJaKM7APh1sccsQghvvnJzuMP8yZVrnPkmGQEp6X6ajP5PDwM9cBJ6Vf3cerqJaX3z6uxdYdbU7L8v1pU3pR4r",
  "key37": "4YLC76crWtNv6gcvGQdT2DwG43Fdwry6BcJjYqF2GHjkrr6xK5ZxbXLMaHwSQw4Xx9tzro4LS9vjbZyrYhHDXHVr",
  "key38": "3bSNvGXPRTYr53QgjYJQtz5KGnZKeRuiL2y3Gera6UnDFRBe7qRLZZcXafZXVxksEzTowHv14TW33gebmFuBbdaJ",
  "key39": "BY4SacauvGRN8tU8H95dd7DhHq2Dk1kYmBwCXgXQbuDDEu5anMqDq4No4LqtsXZh8vnpyN3gasg7vkc6eKgqk5i",
  "key40": "2BJfcNEDqeEhxucfGQyi6syU92qwTspDd32X8RGtKTP6viRUoM8LxrVUg9XpFZBNPVo3LFi8qtf7C8K9jyGCmQqv"
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

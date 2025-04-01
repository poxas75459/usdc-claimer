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
    "4Dig2UAQjAsWAohBwqQc9Utpjy9Nzw5ewsoFTYvMkntA1JaAUAAYdChypVhtJVcuUPkiAN8F3y7pMB2acZgL3Bxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "htHwNpVJEG6GEq51865Mo7iayyUTh2dx5i2WiggSmsB4hxmxUdXjDrRsnUCLuLreMvNY4JSQYSxBLCBppvZAW6i",
  "key1": "bz4sXx6dEpfaRP6kED3GtaXBRYkJdfdG2Wi29f8D9joQ1NNyvEkGQFTRfZxLGvM2LkerQMiyKRoayrHqnkpX3ub",
  "key2": "4psxbeRWk28T5a1pimGwRKub4nZ7ku8UvKyfGMJBwvvHpn7FzGNsWBAPqB9uqhL2jsnM32pEifGx9xszi9A5QLK",
  "key3": "2MuTqrL4k1o5qtQHrKXSJBWgKs5JiDKhwgMJRzZYkXjD6CQR4nHenfxTmA8JKSjmC1J4mMxURUk5bwNF6acqRdmU",
  "key4": "4tQCe2GZBrWNXKgMEoNRmF91oFVDmkqi4CDnjZaxnzjkmwigmTDNb6ZBi1HjzNTip6es72orSXLaTt2gdXCBCmws",
  "key5": "4anjZ5DbWe7TRfnvYcEzErVnXztpXKoSXXbZAbEDGPPvQEX3ZFzx9tVproPNTBS6JY6bfPZ8zpAAYXHjhjxYvu4V",
  "key6": "4yEEFxNp1FJKeRFM8SucrcP3LAPWai9MAw22iy7Nk1nig7JnWfg5p8UYGH9M46oKuHY2M7i4MQTCtugvh4sWRmxm",
  "key7": "4nnfnS8SrTdj8rmsGfbQ8awabdumw2xwsNVqyfGqsYZ386mjennpdV2kZ7hr9tVV6bWnmpvnRtBqsPJsF4b6asZn",
  "key8": "4jV9ZDkdHMsiNdrsSqeauejABtyWJqjh6w57tRkWvj7CTEaj3udCnSvnvHDcCd7f1NG7MQu8xouW4gLcCq8ng7bh",
  "key9": "5YNNGYaob9KRrQLrtCZbJrGMNDV9axyhkepSxf2BJnFYCAU2g4C3NJraHoWPcqKFEDb2ZwdNYcqk6gSkTkNyTiot",
  "key10": "fHdYNPmSwVLeBasGDZ3BZcjNc4PHqDfXtAwzcPkncBQdtsZyh9DWZ7QXGF3Q699SQWTgz6LTL9qMykPeokAoA7R",
  "key11": "3F5cE4mVvtvntcQ1kaJbuQ7QCiFNM3yeVrfojaiBuu6rqBoXF6hn4c87ieGuzmiun92YBb2WeVhTi2qv4HVWWuaH",
  "key12": "3iALosr36WmdLkeRGHMvFVuDdVPJG4QPLeG7HukYej5CZDRj2nLwQvyMGE66AEYKxArX52u5T54zQKp9tTQfevbK",
  "key13": "529DKqnqBeDc3mSiWxNMeFSBp8tkNysEYfJjNnSLnks2D8MRfAkWssnz72KMgctzknx8nDVtp1n28m9czT8yW6pK",
  "key14": "5gyV1awLNF4uZBpmgXhr9oEUCcyYcotXYgvYZAAEzskvsuY3t2gtUyzPzeczDKVUjN7RxenRPpkm6rngBiYr29eU",
  "key15": "2aWPVfSRWSeTnut2pfeSpdWWqJ8UbH7qVAPKDm3dHfkaaqpbCJMZQh46P2ZuRi59nmYFBsM8NtwP3mGMsAccQhc9",
  "key16": "5r9p3inSH8u28kCeKTWC7i7ZpU243ngPFNJjVRtaMiEyBWHg2ExzT1QDHvMZBNNmvRnDy3Z5YaRncHSFRo4hdD1w",
  "key17": "2tzkVUYhzoXLWdgXhXW76Zx954LhWP58wcBTgJSy1HXBGUoC6TjXScRtKDX4PwpyFYtvsrPhP6biKhLmn4kEMngD",
  "key18": "3VTmUzo43LjPA8hACzUzkhZ9jiSk7RBC7HT61o9PHJJCC3DoigUJXcucD3McWMiVNmrTK9FbUM6fcQpzrXKyRbr",
  "key19": "4A5iJmqse6nG1ZkwP7ud45or9KsWpdoYQdBtHxtf7rkmPt12utF75hMboKftsKqBbXcg9Ak7UwwYrEnFTWXR9H7R",
  "key20": "4FBeb5Z7A28kWzExmMHDdgSMD2VoxHjVwxWomMB4nz8s5VYbqozvSMYxDKMML1ux9MXwgsZLgXYqeFwTYDN1ev2c",
  "key21": "aYCQK8DumRn26yXLj1K72Mf3zvBWYwSB9graFrQmXSUP8wWa3fHARfdkdAwccf63V46tAqT5vL3rUCUiF5PcFq5",
  "key22": "3MUgcUjh1oF32hYzQGpSUye7myt8PumHTnkiTJBSg4WDzgUC7XGYcmU1ELLEFqyBCswxxnHQ9tpv7Piw3QJJa4kH",
  "key23": "5zpRoqA9bUNWNhMoBeVQtTqnyrV9gwzNEZHRyP1RzeGCryvLgcAtynDejKdT2bihLimf4SvwbJW8Xi1izi4NUa6W",
  "key24": "2PwXdKF6dCvKescGaDH3ATko3KMeLbqaAsLyXSjygzd9dKSuLzeR1ezxcTqtvJx1HV3zSjLcHxBmvmC83qoPkoNL",
  "key25": "3LPuvJNe3gwjkJcHpzuB89ZG1f2nPkF3iuN8xA1WoyqWowp6HZgawdMDauVeERx8y1mQdtBUWJNTzcCtJZjaaUcd",
  "key26": "PnBfRXoHuF3R2WWcHuNNfXrxpiaZDZcEjqyp8Fx3GJqiMpfNaYjdsa6sYzB6KstWjrZvjazDH4MWdxKcirLRzKb",
  "key27": "5i2DCfaGq9ByMh5xBjY9UX2w88JdZb46GWXZrBvxMYmv36tC93GTwuK7ZfMqYcG8oeBUPZXXYwpzDQXjfrXE6tvb",
  "key28": "3K87PKTHTQjvyXVcoVCutSffz4LAT37N5UvqhosEu3uv4NziV2DKGSjn6QvGuAJBDaqxzNqfufgkb4sWFXN29XSZ",
  "key29": "3rBtQu1pNEcmJ7Xf3Uie8xGvYfn8oLtmyn1V9cMTJgDTrdv9qDF8vQdTzCestPZH8M6k9AipjKZGdPYDL1c7wZmh",
  "key30": "mxpZETtHr2JXzpeFVhM5zECLE9dJcZ2WF3zbqDbs5UuD5h9BTprbadQQCGbAjifquw3f9nnHpcX8nXiJdQdytPL",
  "key31": "5CPBw8gRuMesj8RJmX8f17xx54ggqmBQ7FzimfuywDPkxn3yHLdeRc9WKG8n7bwHxMsG7KW62fqQjR8KzXXECmED",
  "key32": "2CxD7dGe6pQQS2JhLx7DPqKApZywkGceRkesxMo22qdkmYjWXYrnpGb48CnouTMu8VvoPJyKqjTcRkTnBJUC4ueK",
  "key33": "489ZMts8qqtY72vEF9S5mJE8me7EQGRmqfa7W1AxnZSyiwtJtBWJrRSPfJvYvUZYp13442kuZB5D6cnVFbMytw4R",
  "key34": "66b9Nu5WYouiHvjaH9wkNxNiCqmP7neUQTs6JtZRRhtaxSn9LAZvEqzLF3TuEf8nsFxV6b2LSTzAzDwCWVzkhQSk",
  "key35": "VEVpF9pjahTPfS2ZhmhzqRuGEJvCd89Nr9kRWfVGHZ4Y84stjdfx9tkmkGJ7L8BHjDX5KCw6fLDiaVQcc4b1KPh",
  "key36": "cjs6gxKCPXDT9JnabqYrFotQifFus8UzeGcaPPJCDTE9vNE7Dqga757n2XYX2NVafhFkvS1mv7rtdoSH6V9jhSN",
  "key37": "3LV3P486sgcrUbiCMJKuGnEWenzan1PiVu3De72AmN312ykeuLHteyN4y6wxhtUfzEPiBqK6sACztYx68fzBbWFb",
  "key38": "BoHKByn8Zp7i6riadF3r3Hwfg3jZs56bFFBnznMF7d9wPMJy1MGeuQBKxoksujroTyHGiYV16bFZa67cECkLwAT",
  "key39": "NQ8drstDA2GrvJwv7w9wodQP288UCEKHKx5ah2TkPrAovugZLpqHT3gf7QzpD2rNebrwFbBYNRUkquDthqzbBjs"
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

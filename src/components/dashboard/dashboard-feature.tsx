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
    "2V2A2DgopQ5MsnsZQ3GmVyp1Luri9WZ85xcMo15J9DGHxRXFzEnzs5WU4qCEuswr6mqqgnGi8mysSZUY8n8F7iLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QsPmsuckGtfyyB7G5T96JE8zrQEC6jbwvh1WJ1q1MU9EyKCgKmRoHro5wfwLRy9q52r9YUJbywzhg5edKasN1BM",
  "key1": "y5YfxKNmfgzkCSvCZ1ZVm1GhERmrBptTqETfSEt63Y3rMScv5Qximc8sXDgWP8vC59vQSkPozYmwSFzvHHF6h9L",
  "key2": "3pvMmnKdWd9RFtRtoBqvbV4LDKC8H1FoLYQ2mfDX3uzQRpqfMasPodmtyrYU4NxbAGQT4ccVxSxP6uEdhwMcnA52",
  "key3": "4GRF1xvgN7MfqQiwD7CzN5BvFCwpqiqBnThPeUPkbhsb5AJi9hR8FjSRTHBzrwYZmBvTiPtHfjFVRfSYjFt4FMJ6",
  "key4": "4Z847YnMVtucSy8HKJg8KpQkmsEJYZfgTUTYzKz7ctvvvoLN3irM7fd4USXar5a46Hk7RFu7inoYCNSPTUb1hkhe",
  "key5": "5fKtdM2aL3JuHAksBSmjdQxDmMRxaoq2Z83JzG1vZDyNW4uKuN6jUQ3RaecXHuDjbEvcFicsm33doBcK4puxcXit",
  "key6": "4AQy62wE7wTxujnviJw5M1wj15C1WPid7x5GnjhBJtxhRS9wkqEQpnjbzp6Q7FAy6tWf3RRDwxaGwS5FyVfnWKWM",
  "key7": "2AnTEST6HpDeYiBUohTcqgJmXphQHAvBSv1YifuFBXvFHkj7Yqg1yqeA2VbHgwyxL3XPCRA1bBgbMYWHQNgyL2Lz",
  "key8": "xwqMwK7DZ1BfbBx5DHpCv1T1GrHz7bgRHWgPgG9Ni5FpR8k8qnsvE8JYxvVzHx3cM4jZsdNkhEJPpwUMJLzNh9y",
  "key9": "2SwyRtFvskoR4RGJrP5htm2opjb2jzpSuP39Lnsh6pZwgGDSNFF5mWupGv2rJH5FjBqWYrQJdLn8nbXCxLGUJzX2",
  "key10": "3Gsw7pcWawNYAwsuw953yFfzDTKZBT3HEGA4D97KZcqU9G6FPtZFRdBVfhmGG35xpYMhrLtUpHRmVJMAXi4Ld4nP",
  "key11": "56AFnzGDNxeHoDgZ8EqMkgnsy9eyRJa5pzu94pCB17ZBoRuMn5aBkZx8tV6DBBZnk91gHUZyykuRkVbEWgDiY6zn",
  "key12": "3wT1pCtxs15JvDmBzi8tBp8kq96qGUgmDQvbDByyeRKCvpXEJiSyJwF3nhR4tb3tuWvp9anNZjoXdhsnqcxA2dsS",
  "key13": "TkvYUwfe3Ga1QmweHMmYmVrW34q1nyxe3WSRzYMTNjdgyhKeuNbq9YjLzZb5XeY5zvu5pdF6wkqos5Uy6cyNoA2",
  "key14": "3xW8ApC8f584nZV2JyE77KvrfZVDriKHYaoupYaJvsdNDhTVK7s8JoqqyXu4sRCjRpdBy36FmPfeRiNHTJQSJ1Br",
  "key15": "nBbCsfDAyWe3VfyT5gKDJGbRVDtLqgWsMGjuUi8eDfQstyRAvTxNmEXsTTaLunE1jWPjo5faQpUP6eK8XPPsVwm",
  "key16": "5KRV12XBuXsSTryRDtbKiC1uP8yQk23rN5vLfTqqCAzDXgaJL2LBYZTRr4UFcAWcq6YqXWo7M1kuZgLv9TN2HETi",
  "key17": "4hNzNYe4gLf9sLYHhkAWUgw4yYk3EbVXU2icYmRq884PAXgpjhyu3npoyxmQMVhjHx8ta9M8N1Q2e8uHE9c78sz8",
  "key18": "2tdAZFnBPFbNaJ79j2Krd7PfmcUaq5VqSVjCujYoBrDxoiCQgbBEvAzdVKx2agAt2dLjbdNy8b4xG6v8aFo3ATDL",
  "key19": "4yMwFSKx3EVy6cThjzdfX2KHWXwhVjvvimdikNSX9SEnG8xynxJHHRbPkAqz27N21ScdbZvEPJKkcDzFit5sCRRC",
  "key20": "hBuKtbpwetjtXN6tdeWP1z4jA8MA6zBkngG1fxP1DbvN3MM3ZhJ3ePSPS433tebxsYwJJxvQZo7au9qvCbe5Hg2",
  "key21": "4P476AtsRXRHFvHKKZfBoqoK8gpiYctRgbsenJ9aBS9iPWC79vUvHQjx9acnbHdvugKdLXUzHr5LwcBrLiidqbTS",
  "key22": "WqvoNjWeGiHb8eaVH4MkfMam3Abm2x743iEMb4SN3Dfw8b5TBwVTBL5S3fLyrKuozU7jZ1P7AFKYxQU7UFKFqdF",
  "key23": "2wWb94AsDrsb3ri7eR1s1CAm5UExcfFAK8KUBC6dNRrvEi3NgvpfMXxeyGBMTVd1dWDEGXoj77gLNvsrAVLVav5v",
  "key24": "4j1Y1zcYGKjcwUrndEPhkcmwjr4XBT6XLFCftiZcpYuTXwRt6V7bVVb2DCzVkhuw7epdmyaU5xRYG7er47HC6Guq",
  "key25": "3iCzxA41cJq2T5KvMhFDQ8pr9bEhrtvQMXXX7jx3n4LpSy7p1emiwZDsYvWisJfY2mySG1K7WdDFrZ4Vxkv45xby",
  "key26": "54cXNUyxXSmc3fqyt26JiQNiNy7RKSM1MXx1S2ar9GxMcoPfYBpCQjuhxU2sZ7WegyWC31KTNT9bnBXfAcRNc15x",
  "key27": "38ucT2R5qpkoL93aM8Bq3umrc6xfcwnTsvvbTmqSLzP3Nb48DSzrDqvJCStRNv72LMoPrGp1ipckiXKV4T8o77tp",
  "key28": "45CY58smNv1MDoSjPqwhqH7wFy8oD1MEuQRWTv9EWKdLEbzfXj51owJuK2TT79GC1UncBJrHnLTQV4hkDsw6uE6N",
  "key29": "5ic6CYBJrev7XNUhtiYg2m9e28de8F2LmR9eKCqJ4Y4LCB6vGfJWwGR4SM14qpjeQjJZf4bRuexkAqtVhKCEW1M6",
  "key30": "3jq3aoie4C8o8NEZ8oJT6CgSvM27NJu29ufzBBBC5FfeBau1HrojRnMph1qeWR5wCiuWYVt35HgMvHa6AqKJ73eM",
  "key31": "3nj6Bc7jGtQmdhFLTHMTVFQYDW3ykE4A9YAFzYiBojUmkT77PBGwmo7E8g5CUB3KqnBPZP9touZS8crUMY9xNYYf",
  "key32": "3dk6uvVVGMWuvj7drwXgmEcMYNpZYAdPB6SUABUiSQEBZjqhZRP2CMS6B91dJwCprd2vrhtXNXVwj97FxNJrFADb",
  "key33": "4q4wcaxFTznUxyAS8CPe6HsJgjYpex4ssa4CRw1gMo8JoJM6FXLfxkhydZPPyECfV7cn7x2mPcANBmR5MeEowwdy"
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

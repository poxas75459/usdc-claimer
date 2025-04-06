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
    "3XNmda2Ep3Sbsf6z69vMBxuDb3XwuaKwMjADPidWuaWqRvMetpEMX1wsWRNMEzjetpT7odHTB8EUUm39X5pTpJEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W5f1YtPQNA8BnjzS6TWNZdVRSk3QtA2c68xQ3bnHGJMZKKgG1PzRZJSkVhBUGZcdUzs4NWstJ6fP5Gdxt9zovzY",
  "key1": "mhZuV92ggwkY8yQSiRHs2Mh6XHsEm2mTq8Y1pUcxT3wqhtBwgxxyQT4K3fYnCAM8Y1PkTgcTArM5BNKG5JZx5Dv",
  "key2": "3XnsE5eWVE8sdSbnwHgoWdcNGfYVGTD6otpHcaW1bYv6YvDWWVJhJtvgwJa8pz5JSVhbBwJUGgAWnnTD9KLPrHaS",
  "key3": "3q2AvE7oqNisgRNXf4oqmoywFRz68q3Xo8CMqRe48HaKEKBRCBGJEyvKNbWsm3ip8me1TNjFfgyHESeV2m4MCCnj",
  "key4": "4nFpBwhSGCbM16GuQaFXaPnx8BB6c6Xpyqz4TTbTB9MwiYYJLQg6fcEs9i756VosqxXffNHw3bo1Dxi5WWgU56pg",
  "key5": "3uVWhJYFbj4QvzwTHaJFTzo6HeGDnhVmpEq5uheLZtJa6RsEJBkeSm5VQnABZmwccknBWFdJXamremr6RxG2LXbT",
  "key6": "5gvWEkuh12CqUduZRhTy3wHFf94Gvu63JButrCmv2rgB6oLTYFzyyQ9UcHMS1hN33nesrHs99B7NTgmBmqKjjNSK",
  "key7": "4mEFPFTHKY14jTYp2tYaSNAxiag1sw6y59XfQWhXJquLYvp8Gf2WaZwXuq9MTwymKh1V5Zazhv9FeSjsrqqP5ic2",
  "key8": "4564QjEnzzv56Tj4exhCa3oT6tb9DuRX1a6EYXDP32KLzyH4UbqArx6oynXRme9oLhzu7DtuQ4iByASyuTtJWLHS",
  "key9": "21BZMjHgoBcBzaiKjG1sYX5uZTG5B9WqZAHLWqek9hfMnydG4YKJMPsYU69XoMB4bM9AngxSyo2mFUo8PzJM5ZAM",
  "key10": "4zeVu3xMUSPcu4Y2x5sU95RVy2vtHpoAZddGKxZ926ZDScuq5LjbEWF6HFirmubfP4PVBLk8qb7zNZKd7YeSKvdB",
  "key11": "63oexEKfGKi9tuhQpg3eRm9VUjzvLCYtQ6k3dGyw4jv8ggFHuFfcTpu4ngtACCrr8L8MqNQR9q6DzynxevSWwk7n",
  "key12": "5EW4CNM6ozLRfqeatDzjTJtrZkitHrnry8UpLvv8NvpGcfoQWXQpaYy4HjbCNq5JJLLvUh3pijxfhmScRkZo2TjL",
  "key13": "29vBB7VYBipz4gaVSiW1pAPwRW8Dp9XNPteeX67M1sPQeGGPLrogt2pfKAExec44Cxm5WdmMsMzrEz62FRqUmeyx",
  "key14": "3Hmyy8voWKUTozuRuPHRfpnuiozrUC2pj7koSGLQS3EWpxraC4zCq1NEcoav4LRuechg9QWH2r8nhyNp6ZzdUPUk",
  "key15": "5uvvdomUce8sHSXVmGmi7fHvSJETH64aC8GK1Sdj6tjFWi5LRJzMZaL3FkxKzAUtVJAP9MhHXJXQV6BFMEM7zxrQ",
  "key16": "4fLi6UGnxyHgJYEAKhekxEQxFj3nnatUFVeeMkTFhCw43pvgQJC1ezjbytYZCuAqKHVXyuEZqRC645S8FGAs6Zbj",
  "key17": "5owAymtK32Dw6mstYdCqx9AoFUHRPUVz25LRJVMzu3FZHzMavBMbMq3FgGuTjDDvB2PMwzxNzmJY4hSbkqxB4RJV",
  "key18": "58VNcWPe31d4VCCu6UtEvKpcHxnmAqmVoGZt6pZDWjrmA4AvxzvRN6GT2x8Sd47R8ehTtyAdpVozinH2KRaJTrLw",
  "key19": "2m48BqXGVF1Lu6Mvw8SgiYJiT38gm4uhw6cpcUkYaogcurQQjMrCEQc1AUnPTTCn9na8riVtYJyhjRfjrPuphoRV",
  "key20": "YXcFByqTwhvjmA62EikyxtgywmKbEg1ddBKDjaE56SSmx8G2u9aD2b6d7L1dn6hvPGkTeBGWiuGEGVW6Sjjpk4x",
  "key21": "2ihwxcCph5Pb6fhYhJHwPayfFLuLoQRLYWGDqUuvFYWCfhEerTgxT6Jum6MPHQhtFpGEf3dMu1cLW4sRjMBWfC1P",
  "key22": "36RCbzouCCNpmzrLP2wKK7HetPHtU3mhXQjEaZAUGA85xCPEgaQr3KQ5RRTUw5eLWHbAxYo55mPEG4YAM6zQC7vq",
  "key23": "4iw5DUdz4AsW5fFki5pics5kwkzgZiPcwQq3ZoWJKrHNBjTAkDidNuMjU1cAMcyZQUusb6vPQ3rEsdXHvkBrQirq",
  "key24": "3itjndSUGumqFGDWgtWL61aV29iiq8DAX27jUPWv6gCYAxivUWdhX4F39TFRmCN3qksEoJfmr3CYLwJf1rjhjYKa",
  "key25": "NCT11YYehsRhMYc37AiqynNU7YwA7r6z3AgdSEtAuvHakWM68cQW3S8DKDnVW1iHKafwdgffgQDf4r46i7zrmDD",
  "key26": "2mNW8VJrb3nhbNJK2pnoboKS1LiwpvrYLd1pavFwyV22asecxiDSsJKkCE5BdTNcarDBUDVUv4YuMb8yc1YNSd1V",
  "key27": "52mQ4e1nvS3NCJFSF9YKk3zUZLybASax69K9HuZY2E3RCtUDUNCPV7F5YiFQszJ43LmNrRUZdcKyzim5YXvZjwyq",
  "key28": "4ZWEsqMii7ot1qguauzMm6ZCzsTjBKcTu5pLG9gNnmcoGoyyU4cJg5ctJqyHNCeUNL79VkMHzym41ZtH16g9eGH7",
  "key29": "5kgbNVMDsLTpYanCTyumZ1AA1hF39oX5gjSkVFjUkFwWoaKFcrW4w8PrJgvGKuavQ9m6xmUwFRwUwSbBUHGM6oQK",
  "key30": "3kcHq2DPWhVjafZnnefNuENg4vfZdHRFtsj5VpByy1pLMqUj5tUnwdSpzjNyVft2QX2Z7VheWV9ufQt3caVZAUYK",
  "key31": "4bV7r1WKm8AFsT2afzNoLzbapXZjoK1MoW95KLEknLHd3pNN4ts1T9uECSx8ZtFnaanojGa8pRLCvamRfjmcqrVZ",
  "key32": "4brzSLyRvGAcpuPXWTE46idSnpyba5Se9FHjaCNSAiWCBhCM7ho8GmU3ixn8yTNcFdCPRur7E11G7MTNKaLK71Nw",
  "key33": "2aco22sjR2qXUKrdxFw8HskUvGieTLV6LtQe5asLRPqCRLTm6Y8UpTvSQ3wx1wYZsxcrnjreC5AvKYbTZt6nYbxs",
  "key34": "2vSgP1ixZv9wAnqQcpbV81KHZ6fmY7My435imEfQssr6gdtdHHF5iGDnraFDCAkXBqxHP6zUFkNZ7152bpvnwEMj",
  "key35": "4ZMgVwthvhz9k9hFVVzGazoG7VJciqWn5cpoAzCsHke2vwoMVJ4C9DFCh1AuKXftSKUvWMWTH6oexzsTEMc2ttrx",
  "key36": "2kxbHHybg173t2rFqRWwzz8TNoo6LyF3um6PHg5ba3W4Um3FfkWbRoX9tpLBz72ibQSGLSTm2gdZjgU2Evs5HE2a",
  "key37": "2S6nxHPGTmbwvur4fbstuXHMmt4atfjdqt91wtW3tHbDWUc4HXRiWiapNnbmKUoiqWCub29dGEWU5m67GwaeKHru",
  "key38": "4NtyYHKtgnnvWkT5kkNLEbHwFJNnh5bZQ7u7zeHJfXYDKk3UBPMo7QZFTiZmfu7SFCGRbDQ19mVfr5DhoK9D8oJQ",
  "key39": "3VKoW7ttUsvmUkh9dqYCag36StAipWJLF3M7EVQeFicZRhixZNhgyqyAqeQzx5wRXa4zZu6M8QmaHnnGmthWmmxg",
  "key40": "2AHEemGLymH7b5AunZ2MHuEnBrBanaEjq6w4LikP9n6qHXiAxXrcK9HKa9dS4CMp7wN4zAGBbf2Jh7mpLwHka25E",
  "key41": "4rVAQ2FxbG5RX9cAH5KuBbYeXkj7F53QQLeSch7fUfHHJdKLqbfvpiqtFoRvnUvyP1f8n5XANm7dbKmCPLf2Hftn",
  "key42": "4CuFvV96XZcQHNJGioiCcS24fkvaocjcfrx6D4YjWpMojMizE9nDB14eShqsZYG4hg2majP2AU3jmMyoUmy4NRjR",
  "key43": "3kHmimZ2pUJmRXdDMx11U7niQDBmoC3pXLGWa24XrPuY9iuhu8TeNrxxHmHnJW94WqskX7MDHKQX85yvd1YdPEv9",
  "key44": "3WgWSZZPftbkfrndNZsJtfVzFZ8UpkBDSdgnDFH1sPfZfTjB42JZkmdmjHH3r6aoHChypunnBkpkdMKGDVbwoTce",
  "key45": "5xj3PGG9WjmBejWvHe7aG4MknVoqZTg43LTCtq6mZHMZJHuSBEgWQoL3GmE6g8sGYyeT1asLSohpGETZJVrx4nZw",
  "key46": "4jdA1uK3PitAeWeT42p2w8vQAy9638p1phEZL5v4Kg3mxVsAyfX7vUdjNKiFykesASGEZzbpwH8HEPNNW893K6N5"
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

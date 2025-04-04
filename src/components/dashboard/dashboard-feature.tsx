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
    "2rHC117aoXB4WbQbBEJ9f3tXmmpEmZLeQ8DruFGoRoKAzVvKFdSJQ9Q5rkvYGZi334HWq5Yxq5iR12FkT2rcgDM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVgqEPjj7STMtp4QnmAbX3wKfi74hiCGT7BcuFX1nePjVowGq7AztZh7Y6Q3vGVzFdy2Ms215Db8SUaWMUogeQB",
  "key1": "3kJcXd3qykvWqkGwZVT1VJ7n82npwZHCPJLK1PY5XidngDDoydDECyn9DJY952Ti88LjuG9RjvcZVmKgHcyX1cPP",
  "key2": "4B1HgtcdzdHr1XY3wfUeFyjdtsyQ152CQgxRAZMgS4DwY3svp6RVEKtGsskUTrafvcQMfTF55u62sg2uUi3LVps2",
  "key3": "4FzUzDM6cFbRgoBMiT6NSsmq7yPeMyDbAcug9eVHTHpsVt2bT6Jc6FdbL9GK62nLMoqpqn3v92uwwisuCeTq12eZ",
  "key4": "2pRLikmup9bjwbwSdHLC9UnGLMvcaJjiDagU15TvCAxdZg2UHB4cpFkyeuxyv51wDeuJhrkG86vTdigh5UaJeoZB",
  "key5": "3xafeGf4VJxkwjK8RNLsezDQ1NH4DYH4i9gdtPPFKNzq9N3wBMjdY4q3eLnTNBupXyqKWW1CUD1TNRe1zvrZtq8w",
  "key6": "yaD8AuthaiJo3dpRC1VYa5prnXU3eJAscZicn5SGW1doEwaK4a7FPVKM3MoVz3y4ivsPZptdMuUjy4bgDsR28ve",
  "key7": "2CDvzjGaPE56am6Ab2mrVaU6wAG1FmJpVAwVTaUVgRhiUwiWMmxwcrLy8nU7T44T1rBVhAY4JSqNYk9M22ndaLYj",
  "key8": "EpqwbQdGZ8i31eaLzMYkcp2yG5tkpQaiymbqKgqHsYMC7kZuz1CdC5dNHrkyFsEBBHxMwyckqfkgcqyatAwVzjL",
  "key9": "DJmyrFf5bZnZ7nhzbrDZg2uasK6k5mcN9gbdHwj4X3512Eg66RHvtF3TaUAZqEdA4Xx7a29fi9YMkmGdsbGLnS3",
  "key10": "2UWGWVVKXaQ8CjLmn71aZm7z2B7wbHxqtgYKguzGP9ftoLoC4poc2NfvpZCVHZsNazVcMBUWqjGrHoYVk1HmuSHx",
  "key11": "dAFCvNZ3cnduxy6Gd7F1pHJviqm6MoTBDQREYK7pTRwKGNxdGuSoFJ2BbddLsB92KKDJWnRVijNc9QzmKQRKGJD",
  "key12": "EWSRx4jo1TTCm9rycoJttKbTrksNDM8NFL2xcSFDMsrPAtpBqecVKeUyK9xYMhGAxThEo2qPxJdiRWsZ1GpT7eg",
  "key13": "5UNixYEwmpBoqjACAdFcHoWDeXhTvSh3FQ1e3Mho5qjML3wFetQNu5yEfGAH6mWqQor8Zgc1iPJue7cHXKHqXuUV",
  "key14": "4D2peuLBXCYwpzR5pxoYaPmdpWh43FX1PhipZ6JHqiNcwVE317ez8Y3f9GzmQCtUBvUkTqCiMELtPvTrs7WsLqws",
  "key15": "waznY4c4iZPG51pb517EKD3ZtVcn1UJUHStdVdkXEXvWDUA5sLH2iAeuS5fuuoaqDFH3iC3WzQnx38MHL7pA61r",
  "key16": "32pb1sVTZ7jiJoa7BP3exFgTzWCMC94cBzbXN9nNBi9b4ZpVizLt5zH2j3CLK3FdUbT1LLeE49m6aWjh8WXptX8S",
  "key17": "5JvNPqnBrtWmmoMpchqQiympynm9m7HVtCkrzVTydfYWCRdzB2EdpBKhXJDsZNnL4HQ28EmPjvqxRvGKktN2kLP",
  "key18": "Tdv5dKzKuFE14wykpPkxeYqmHf7W1adzVSKndHVu9ygEmF8GzVkk5gxL7oUdNeyh4eeFbnKRksL1fBbPEXEtn6P",
  "key19": "3fPMUeWB5iUq5fC6oW2FFFY9txvLbF5Cp5YpqjEtRQ7zYjRp7bhmqfzRrC79kS5usA5rH9d2Us5ZWH1rvMeM7VwL",
  "key20": "1HoNop38GRbSm6BHQGNx6bvNPVA7DJXybepjTmeMmD37nqnZwWYLko9XnwKzchpfG2vedLUDJYurfp3jmvSfVLA",
  "key21": "2ViL7PSa3nTeSSdkLSK39yLULYGYt7oWsrD3h9LEv4sdUw1X6PY4fzKWydqkr8M3Mo7cXBQffNgje6mqfy6k3TdJ",
  "key22": "44WxxteyLNXWfLdYZ5p7Kf6R2gLKTGhdHnF4Wt8EdLaRCmcKNdv2Lps2uWr14tNc9DREHPRT3bstGf973T8fkdzC",
  "key23": "5aS5BdhXLX7pCz5G9jLVxc5yDjCRCg1qH3xDSmXriE8Ww23SMtBqHbqJedEUdtr4zAKLFWDMGss2sFYBdVp9DS7K",
  "key24": "3nVhtTTpFzfqihcdhJjvs9tkRT6gH2HF1Z4WGg3DrTqiZkCE8kLy3HRSaG71UnUc6BXxndfy4hPAq3X1PywGDZk",
  "key25": "4DR1tz6Nm7XtoWGS4go8YDhcHUzNCCzqNb338pmhdACWwHLtd9rXBoZhBvU2gcsvjAjXe5tRZniSDEF6oKdr9iBM",
  "key26": "3NjSx9Hg8qSqc7bUBJZhs3grHLdqj1o6yh3dru9JWyDDqJtPYsuMfuaTBAUEb86DXJjQijEXSnfbknK4haMh82yQ",
  "key27": "5Hu5H4J5RJmHQro5aZGSrv8ieAjU8oatHrqqmdpNqvveD7vGQ9XrMNj6DGJDmfAb3KLPE6Vp68V1pzzAsoML12ds",
  "key28": "226ZLUDteewerUjLbSrVxaRZTBgUbaxR1uqSQYAJHiYwRLfoqq1Xk7cMu12ZzytzE9nGmRhoXDCj3nJJR3gTdMEc",
  "key29": "kwkYLtmPiJyqcQJfZGDocusqveqYLs6HVDcQ2sXYHv9zUFNbEWDFuYkAH9572FyMzJbyTmHhKiK6JYTEsUQVVfA",
  "key30": "3221vzw6cA4SQEtp3FNLk9qA5nkjE3bzimGmxynRyZDg5qoaahFCVC8cXT11hnggd5RKU9Rux2zPC4Kzsvi4RSfH",
  "key31": "4awdPgUwTWeWVoGfzKewkqVXtP2yWXFjmw3VJQ5vqixDJhMqaHU76jox2gFqZ3JzsWojUEEB8oURjci3Wou9nq8",
  "key32": "tLcExSuvddMj9wXTeNLEHDcZif8vjA5cxdeb6XqudHtTrpUst1X4SdaNMVUmESrXHkTTSnQt36JLSKsFsK3Q9HK",
  "key33": "51hSS6K1UKXYx3CSTg6yGfPi4rvUbhrTDoof2myeBznF533ut1m2ztugAxXFHLKKyfjPF2v5KqsXkdG3i26THYmP",
  "key34": "3D84kNwRaUiBk2DNBpw99wLfK9qkZduVq1zsqCEyu69s4ayfmjh3McN4FmFADXcnLsXzLiaPkcMfrdYv6oHy6z66",
  "key35": "4yqdwFSYftJzhYFPJreguqA8JS2DnFPCxZMgLLXE5qNHqwCoSBFAX7khu8beFkEY76MbhpLQBFqgDPnwY6i1k24P",
  "key36": "3Q2ctvmSdwks4tdDcB4Jy194AdCmgYjQTiWfqawAzcdUjLzNDPv8XDkLcGUYWqKFXQje8vZcfWdQPCrMJRHwG9Q6",
  "key37": "2i18uYH2kQC7FBzGfQwPfA5XjZNkX7kDEZ4sKMyMCDb53SB3DgXmJBWs2ZwvzaZrmfE5FtQZxq24LVkis1knCTdc"
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

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
    "4d9171yRWQgsXuhaaUM7iHWdMAvqFhTB5m7GUUP3BPHBsXspb9VLV583rHh34dKYAsYpucL9DFq63nobFyxL2VLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crL1Ra7MYx9M22h1mfP7zMrpAb636bEdBiTvcYuVGGnt57qFrhMuH6TYXEjFbxy9eMX4XqY45LHYrP1cv3QPkYX",
  "key1": "59BHV1p7B2AHK1ppRnNzhmHCXm1k8EZaq25n7Tfakm4big6BFyUNU6PLtRxgaTD8BdR2XEG5mryA72Yi4p1WQ87T",
  "key2": "Fh9xqRYXCKkeErwu5zswtrjEupoCLJvpWTvAcgHxWEkwj5Nqbbdgq7hPisbpZ5v5ojAcHxBxwsGr36FfuHDEKyq",
  "key3": "4xzT6nbnpviq1WKbf1Gra7MggXnt7LohxCDB16cYSinowEXPq13Wh7snezqd3Rwe3S52U3Pwdd1nzkDihTxiHvLn",
  "key4": "3ycf7goFVYnf67uhCm98YBtZeXx57AWUss6nFTMahi7BAZseaxzY9Y6aASoQ4yTdCAqiz789GoScuGy1g3eUPeL9",
  "key5": "5RLoBkwTJ6yJySBkPR4Sc5cCGkQDF9P672EzZTKN6HjJRTt7bukgrBHY4t7zHRxmM5PkdKwrP7dDSyknVoxKTtqx",
  "key6": "59nRCSisvfATZGWkza92NqUgDyUWTTamSfwHj4sgbnZTn4n4jHgCtbuJLV6Un9iMvLMcihpjYAn86taJrPsXSow5",
  "key7": "gM1yW7QbxS99kz7Fre3ntHcK6nRQmkmgd82H6Z76akTjjpcmrfeUhQuL45n1fg1YrNeCVUqTEGdLEK1ixsJucQg",
  "key8": "hCPzEhwLH2SGmywRWQdsBmCN6SNycVhNeufkJ2nY2xvDfShTU66De8zHTEtPZv6MrfTmNPrsBcU6Psy6u6sjoRN",
  "key9": "46dJEYNhVBq2whTwqryfZVAjAMkhmPBdb7mAzRM1S4gRTrV9bGTYpgaSMNoEnVSSxxgLdN6fuJajtQY64mL8AWvm",
  "key10": "wjqwHrZqZMgkcYJaPfbTYf9HhiQexx8ASsf1hFnqfHbT7wGiMyrobY9vmt9DHhmyuqV85eHCDH73g5yv5tA68gD",
  "key11": "VEC5aq4ktfwaQ2m6TKSwBJ8636cu7XUXzMSJveo6eJkHSAZwY6Q4eR4Cdw8ygZMoDLxhN5rV7qJmvvdu5wVBxRA",
  "key12": "622jNP3QU1ErGwE9sHChTARqmg1iBGu2mnjBxejSPS5osoBbJG7axQtoNioX9qknSCxe3wH9UyCNeMudpZiPgbht",
  "key13": "hktFT33MYWTBQMzfRVE6y4kR2Am43Xk6HUMrTYempwabi7TpRg9tEvyXrif9S9sxuQ4atzLR1TzECfVUY1xXrXA",
  "key14": "2vp1i5dzfNoCZy6KFRUSQshQ5jA2JKdSXT2xTQkYo7iTthZqYCpRjxuoVdtRr5JcDvBwYEuKAxvGa9qkSNEQCQHK",
  "key15": "3eaBXFtVftFNkDhzkvTqkwGaue4GBbx6QJPn9GSDVrVrfv24FZJ3qerbUadQkgciYoh5EtfMu49RgQSEQ1hZ6vhG",
  "key16": "4FUannZEAZvHvh8pLBKExnyLRBdzbo2erGKG3fS8W1Vo4Wzcco3uSXAvTkLCbsCU5rVFvb8nETmWaNBSSSEsiNts",
  "key17": "5CkSfGvso1873tuH5tjroGmRMzfrioczjzwk7d2UJTZXPecL5xfYN8G1SLyqhwj8X7GLTa8Bp8fRCZ8aH4QFi3XQ",
  "key18": "4A58w2pkyiAXHgwifmHdom3GZJ8DSsHJfFmBdZJSh9pEUXHmDdssH1u8RQ7L5tX19b9NTb6TfN28dgML7jRqEZX7",
  "key19": "2kuiJQFZQ42GFMWp1jYyX9ToYxbayyx6irNTGHEwmZeFeEBq1dXnkTsxKQuNe3jJWdYZXGvECdrQuSk8w3GXm2mb",
  "key20": "yqneqvHT6Gb18t6R8frTRnaeyg3o3uHPZcoA52bWPKSg6u2UeK3cJWtzWJ5Yn5P7xDTE47zgcW8wwSWTAMgw6HT",
  "key21": "4EdWpfcnq5cVWL9hCtBpkXZkqHpDuf7khNk7h6UpAx7spPS6iTw4fzkKM5STvjQ5e8sLMGtmRqQUDcft9MjwMKmS",
  "key22": "4Dvp8YR3stn1KTD9Gt691FnDi8f97X3N7EdQWxQqMzaFVeejVuC2viAoPxbwf3fzAz2Y8sbxYUf3w1kiCYxs4Aep",
  "key23": "2GHycMHMXaz5bGDt2H6xCvEGoGnribJa9L6x9VhXk7L8bqQgWFrMViLHZMLVBZZhUCgTpf8RtYPVqfqSBXj6o9aE",
  "key24": "4qvvPE5NGi2GkFzBkmPiVFBRk1NjJLCnme2aLvaNr5nuACGKEhMxoKjUqb2TKR4iL4WBSY376qDP7231NhyJLG6q",
  "key25": "2mkZvbx3V71LDZLtuVgE6samUtivNE46EXGT92sW9AJxyyErzkQbUoA7y3Jw8A68dCMxgypBDJZE9HGQem8xJxmx"
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

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
    "2mLhQXdwyGEXrX9gTxw2tpxcUH1WeJUUP117yDSLZDAXvWQYbr1KShSnyaiJsSt1MsLXXuABsBWJBLRxN2ue8QSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K6BTbuNqRLCXino9FmGtn72Zmwbszy3uCManDUgHwGvFs7S8ymh6ComD7uxfmbgKRZX7eWenRNF1zeuZUL5L9Mc",
  "key1": "4uP1dkdYMj52fAJJxm9DMBWPuuh1raRHKT4d6vS46FJZuh6Df7J7Mq3vebEaYC9M7fhYLSRndMdNxQac8d98h38g",
  "key2": "4sBuWFoYZoCepeL3QP1SFknxz2fpt6Pwtvq6wB5N3pseUxw2FDtrPKsNd6emLRNfeerPrJiHdbcpJUnSkRhZeMYd",
  "key3": "4X1X98hAvW4LJQkBJEzu7Y1MfxTMy8LssVJA7d2HZbKwVdfYPpndpyAzoF2NtKYLg3kFj8Ak9T6Hnfx6rHs7cVTL",
  "key4": "FQCPzSaaWkHhfFdBLNh9NR51kBtZKTGDNHNSwfrxt1uxniqqF8ecu5W3EVSwmRFnVtXqqCEvHHYtNB2Uxaccmik",
  "key5": "wb5Cz78ZPWXRdqUY9XZpavwQg3foWmi9SSQet66VMBfyC387iK9dRFYk9ypkqKb46psnotdktt8NqVYggEhHLsd",
  "key6": "3onLrAtfgLW62DjAEqycRQMRUYdqA4DFkrUV6FTBZ8TVHdKZKx8h3cZxKSfG8C3hMuSPASTCDWFHRd2Vr1X1d4Gk",
  "key7": "2YWZ1kEyrLqo1GxRBYEpUoNe8KTWPkcZG4CeL7ZgU3fKjFv9Yr7PeDSJunBqZoYLZwUr1Hc2iZMtLUgAu53YahNW",
  "key8": "u1b7sSyMCyMNNP9dukJBuR3svwSAkfciz1L48RHPhJPdTaeLsRdBN3ruPaJ8Zg2UmDT9sfJvNVD1nrsgNcfH5DN",
  "key9": "3YMdhhcq3XsQ4SSQtfxzPNgR6YGCKuL3NWKkJpi5Y4ePradwfsXnAHYPFwY8e5XQ1SxWqzLWTVBShwHs9Hp4t7mq",
  "key10": "5nmbYjSRB8bvHd3EKzQdLWqUHrXRmMhZdvV4R2JbbPuquWVgTQ1GP1sJWUQ3rsfNJTbfktYjnBw9YZA2c5yX6PuS",
  "key11": "2sw2etEy5b28z5SAnSbq6BAUix6NkQsemzsN8WVmDUh1HZPhNpQwsbU92MN14AKt9EHayHJvfpyxnA6NzhP8cuC3",
  "key12": "3HdkwBaxNYwM6h4WFQJt77M8crFiCwBjNJmHLkQehRpJnjaSNLkEWhbe2bWhHpUFVGVfCkKCETg6bRuaUCCc7Vag",
  "key13": "3sXD9pTArPezR18Ewj2DzYP1Dkax9siXBmZq6JbhPcsv8K7PAm3oTGkeZ1CTekTRdX23VpKbwLUpaUYpQt4dqQ3e",
  "key14": "3PEU483tKWNiQCuyHrNRxXfC5n6qPeRJBoFRLB9GMqL1S84aeDC8LjmXH3XUzrHSeApFx8w9a1v1pBbr5SJ9sQSr",
  "key15": "4e7rtUR1yaRqxUtuzVgkoDH2jBjYvN2TGmiZ6DszohssuSANqfRC7iDksfMwmynWtF9i8tvMuQAtvABV9iHusw1y",
  "key16": "2VZTwET3q1sXjF2s6zWnwDGXD3gD6jc7g4rZYN9EmwJxj8nxwhNBvHSMPBiWzgE6hWCZKfuRKjg645fnQK3ps6DW",
  "key17": "5e1uPBJdEaqupv5rvzBPAhWENBJ1CJe6VHqcXXygi494QJHqJFmJgup6CadJMy1kjCMpuWtPdTmWeNW5K6dZ6dzw",
  "key18": "4L2cCvanjVrUcGDv1bNg23wgk9yYYpRr1PdKqem2dPUmcHydFTAdkhjL5VsiuwfT2At1JBGXX778p6XVYirMkjTe",
  "key19": "4TiVtNHeSvB9ZAFpQa6WJQ4D5DEjoezTTwtBTRMrgNDnuEcQhrS1UtbBTPzY4tNCisDFSZGVq22wyLdVmC5BevjH",
  "key20": "3pZ3rd5ceSb1HDu4H3d8RTX7FdUmBPZcHmkiEj3FDhtGkwFw3UobmGPHnVLodPXEeZ2xGMcpbSHA2zYZLjCH2edn",
  "key21": "36evmY9oH8y6NeaAJNCoW3ZXUqGvaatexBABeu4f5MToavqkFBFe73wUUqNAhvBwERw97rA8Pv8LDYjvmtSJmpf4",
  "key22": "5yEeh24JWmFoNFX8pDpRRXvK8cGy4XcG4iFhGhBF5KjxLtpBwv4NEYos2wiRgWVn3TaEHSECdn6MDqAySARty3SX",
  "key23": "67niMKNAw34CeGHmf6Z7CBSN7akvFj76UXLJwEcKJTBJKoGbD5nB2FPzfMPG1tEb6vJByQwXRpaBKLERmScPo1au",
  "key24": "4nKe4Q6TgCcgtCXTHAcKS9cP41efVACVa1QD8kgTuvxfDwSU8n6Hfmz2LVRBiMK2z95ygA3epWpDRky9ryAw1JPS",
  "key25": "iYwNuivqNJZ6gwKCfcsEMv1dp7M4ZnGrvezBSJrpTFnB1yrfW3v7H4no1BX4SqrSGC6SKBVJo4kawFFBES4oLkm"
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

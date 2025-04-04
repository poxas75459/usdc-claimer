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
    "2qozixHdygZqfxMXQRpC2duH8fBEFs5zwNFTbznBbtQX9zr9jLw7ZTm9gSmBH3E5RRQ1Jq7C9z259EaFk191DQ5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLMGVAXWK9PY5cEaxq76PnVyUMFXqyMH2RQQvDEiyf59ewpYQhCgdPETcq6Qzi7TwYEDsfqg3wa17QUATCK562j",
  "key1": "5xad4c7J8u2v1rDfbtcuacBTjsGSKYkvVr8Z5TRdgUiJAaVUaUEMEnbptejD4CypyBcqZskMjBiQKR7Sk2EvMiVQ",
  "key2": "48rHiVDmhSYgZyXJHWgcjcVLiLE3m8ZaVjU9dm7awWjWV3jRBX4UpYUHC5xGBn3X96DLAsd3XsrSMVA3nH8ALhN2",
  "key3": "DubP9RWx2W1Qs1S1x982Nru5xeh7xTL1kDL1TN2czMWpoPYuHF5A2c9qLrMs7TDcxUW1uHFiLpJF2LfzStzxDmQ",
  "key4": "5QDSwTKqkuUSb7d3Uj93b4o3DYCZQDX9ev7iHL6iVWv1VekxnkbTP3KExnvwD7PJAA818yZ1PArXxeB3umfWLdLH",
  "key5": "XwZpaksnHVzGq3Avp6aPZsCNJb9ExabnbCbzbmU2RG9oYi4M17DExkbHhGGmvzjNuuS6Y24PQHafrrjf4ubbKo1",
  "key6": "2asszUFmm7nQQQp4TnztuF5F5eaVd3W2PGNahYzng61NTBgBzzHZoBL2attEbbE8R1Wa11RocAGR6HifWEhMfJJM",
  "key7": "4vh7K8LmoWXJBbU3KdKcwk7eB7tJUpXLyth7rf3VHdv2wCBPUKcqa2H4jzKeqzP11Pa6AXsDoSZ1k2cqgj6v1dPD",
  "key8": "4Q2i96XSFpy7UHbZLVCwkTR7n2HBQDqzJg1fPCGzAJiUuGj7RaVFAjzFZTXPzWaVxZuRXD237pS2d8JfnzDzKGhi",
  "key9": "2W1kLi5HGaDk8JcHNyDAhy8s5hFJ87QsRDidz2suFCgCRFqd5WqT4mz3LXxwvyav6JRmLmUQzfZ62KPvtcLGABmQ",
  "key10": "2G8mVWtVxhssJvJSnV8p3LhwnHnmLawQT44GanrDZhpnXBbb38oZRZbUGoUbHDDfgfoVF5AscCfAJeDUHndpNJ5D",
  "key11": "39CzKCVftTMm1cLGFdWVee2jWq3LsMY9p1EczAB1qM1GnuYeYns797LvqcAgEzm4BxCBRKY7seEna6PPfPLDqSTY",
  "key12": "P7huuwTnxW1N398oQDWmgw6auGnpUjZ114xLgtW2m9vCdKNLsToKWR3ezb8v3D6YXNCJSZjmrpeno6fiH51FCLN",
  "key13": "2MushUPC23nRXpC62m62qNSN2QpnzFmYPq13mkkNdBTLifur6tzjcisMJHhdzjfzTrLkwfF7Y4EzmbcRR2tEB3ys",
  "key14": "3hquGMz3UKYgtTDji4kwaj2rnA3tDcLkNqL9ZiNAGrowhPryetV3fxraBLSyHzCixJacDu1oHxwG1XwcSrpf5dui",
  "key15": "nQ8VLf3ydVHn32tNHhKhfiphKJEANb79yo8HgARKU4TR6BfaVDAC2vEuVEYUBfTUmXaFwWqgGPDS8G2Qt4kEctz",
  "key16": "2wJtn3toNL4fzyK9LcfeFoKdsRLkSGBX3utWWsCbYuMBGmimYGPai4WgJw5usX6CkJ73K89EEBGde1BjX5TDKu56",
  "key17": "2P1ZVQJ8Gi2cBqcQjoHkVwQkk5UKXxENhKKuEAJxKoPDMJMNUEzLNr8yKsGr4sdaXvFTXvvQdUmcuTs4A9Eiq9i9",
  "key18": "3CJC7gTXt6omtewq4LH837DMbTKmphkpB1ZdzzmC615jCgsJbaCvWBYAxf6nWitCY2jzkb8NNLsAWoRoooso3zSp",
  "key19": "57QBViGphV7KPEwzXDG1g7hWUg3jokZ3s9udRgZuPSxQw8jc1nSkGHTgT451e8ogRjw8xJvkg8QWq8JpXnrizimk",
  "key20": "3AqbWaFFrcpNLfui1ChMuMAii4NL8f7gGv4Ej9DUfrP7mezVyZs6jNN6m3EUrNbLuQUbgVbE3apYCnhNhRMSFKuo",
  "key21": "3uVDSF4r7nm7f4YYf5NiXKDhbsRnuYkKPnLyv3rQNgKZuFEJyVBaada35no2CqsJShfwAGjNbZYRTUXYPCzimTo2",
  "key22": "m9vfrY4bQ3F54SoKzy6i9bV3w6ELPoMEBcERL8o3jeomMSCxauaZ6PBEtR7f52P7ZKzido2ntBjLcPxdijg5K8E",
  "key23": "2jCP7Cr9hiL2nzJfJVPwXBv3ZzR7nW9o2tH5iGsKaagWMWU1ToeK5zeQSk5ANHi9WUHRPkpRFGG5J5cfVt4qzaT4",
  "key24": "3Wzw1vTzMGBFVw4zAmsjCuqfEyGnn43joJ7hLhTzn3eZZSe6jHWpU2apUxnztj6EnmuoKhf4SsHKcRU1cCTVKK3N",
  "key25": "5jCzkJkRMeR8CaynECM5z4efYnzWSqfVzi3y8ZUgTQmZCA36pUnc4xRtFK6xw5v7bPieaogvJmj8tZ1pA55Tp26D",
  "key26": "5k1K4v7L3fXPFThBwWrrkjeFYijggvgXySd7Fzz4J9ueafdDkobDNvMgCuiYTEnDAGMH5LZk7rZ7wWhUSVmmbR5U",
  "key27": "43DmdaS2Aare1UAYzasH7nSYV2dZEZtvZgahZWwVipcS7479S8hN8sUxHcUqWTPAgWhnnFmzCaHsK5SHMYyZ33a",
  "key28": "2XE3agF5BzTaHyKvnA7cZchSiob43jPM1b8KVt2TkEfNEMJYAepLjgi3fyWkTgnFt2PCXFamfjqURfPT6a9FaD35",
  "key29": "rivwnNgigTtKe5m1YnUc8DzXLKdZtjrrKKkyDpdFqYuNTFjrT99NL9cuZXmPsgmhpkAvKrf7qiLWa2Rg1s8ku2f",
  "key30": "45y4xjEThAXxMqjN72eG6AqjaWmAHRzMRuHir7zVoEbEfdE4mMsZEeiEXMzoAMgGxvGy5dg5k8baQXWyPgWg8p5T",
  "key31": "2XSEe9APmQk4HfJfmJ4TTjZVep1AD9CRjVFUwx1gBZLNrwiseASNrUQb836M4V3cQViPgTv8VHDVWQ9X7pMHmswo",
  "key32": "4tcCdqBK9RkxH65GEHze69VF7XhJv7kMvzwv7HAf99cq3yvWZo51s6fXaNjgX1NS6UYPtjWwBfYLeJyPsrtWZquw",
  "key33": "5KVVgADmWUAj9UHGSewn6kRAE8tAZJYodRZ5YKK234V9iEm2GYxr4XexELLCmRv3j4p7XgqvgkHdWqwD96nyRdE5",
  "key34": "48YU6dcjcXbaqdiMewsyjH4SZhWcQc4tVum37vF3q35z89FDFSZZHm5Hg8WVzvzAjrU9wu5axXnpG1gZuFybtASC",
  "key35": "5fY5AmV1gWPiEhjoBX8F31ZuZffBSe2MzHZeN21cKLb82ya1A7ZAjiqC2FWgXCFUGpws6CBMLgDwN2MyG6f9riGG"
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

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
    "r3NzoPs4n8rcFRdou9fVwUoCa8Tr3DgZdgh6qBLgyEbbaD2L3zP99Yy1kitMTdS6WG8pKPj4oj5wsms23FkCVzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V66rnMpxwCFZ7Q1n249Jm5kAwzjaqcuDDBeqEFLHcNZ7rqZJu3ic6npkVYSsYoNtV6Ni63kTPQiD3n3LdnoenaK",
  "key1": "2T1F4zRz6TwXZGx1bQA6br7k6BTZuRSSypNwLPL8zXhE6DPmuLjNuiW2oWU3YjADiyHmGqUMosc3yNnhz1rdviYW",
  "key2": "4u7WqAr9fdWrvaBvLrhUAcfp2KM2XdgqfV8DmGGu69AGcLSD6Yt6LMRCpkLzyTSJUjF3nhrMjZ67szEvgQqyiHuz",
  "key3": "3WpAUhNVnFFXZGjVz5HbhVewCWREyeTfx67yX4ai2XXB4nKnCf3uswkJN75MybzaGiiA1rumDwTtJ1qb4E52AZiv",
  "key4": "NQRTp2gEcgm9ptJDYo4fR73aa9M14vm1Hmh7ry5gMbZPK9aRKzn1pXXNkpv3xQWRms1ET94XNQcGzgfVrVKyhVN",
  "key5": "3TPnvJxGSYeJbs1nC9Y18Etx8QqRnVWedFuWvHpJteZTbApjPCXqtxHtePRchpYkDeVnTN4yvQr9R2ykASERq1qD",
  "key6": "5pNjy8yxVjvn4RtoLs8xJGLoLGK41YjX4FncgXXyuApYa2gdyxi4Zie6hTpi3FpZcKeiK4mEDLTw14RtoNn93ei9",
  "key7": "2cf5YnkyLPp6CUdf5V7ZncYoJ8RLwpE2cryJfP1DPJBDh5tab1SPGWpfVEYSrdyMXocGUpjHSK9xr9oHGN6h2wVf",
  "key8": "4ptS9F3mMzDgpz9TA6bXtMW7feVgQD4563MnNWeEZF6yvwuUAdApq9gno8cbiGYGXusNUbgfQe7tj9yL5ranmYQu",
  "key9": "2RDnEcZ2USiHSYXcLnzc9DNa5NfvTTUSvepuR7fQxuMFPh8ULskD9TAsTmoiuyCCBnEb9qKcjWbe51dEQPReZ5m7",
  "key10": "4rar7ixLQyq7eASru2WzWzM3dPZsVPc4yVaN5xLYB7LXMjKKME2K4fURwsaJCXwkY4zpg5E4NPstAVXWQKviic6f",
  "key11": "Be7nJfV2rNMABe1ArsVhwaV1X5akeSYR6fYFNxJWAKzSthAcu9BQ8yFXKAwM6mEAwjpkhXjtFfwbLb8LVnCr392",
  "key12": "3SQcGyMsptx7vgeXsfxoojaDF3cLytj6gDVDV96qgoYu3hA4WskVvxgj62oygydMJ3PGC1vYckBYNKsEWWroDmtP",
  "key13": "3mfJS7S2rb5MdDvTKq3JqphHtfgEevaAcRjM3V2KPQ4e4TWrV3kFpV7wBnF8zWkuWTbwGBMWd59jZ6abDxjy3y6v",
  "key14": "3t1nnDWgwGRnM818jc1jt3YBgn47RPo5KcLvEcKFFpifC1q6rzsqen3YjQ7CE2iNPuQroBFectHpPRqAmg99FoMj",
  "key15": "wnM3MFeUTQeyYsTKKGfnyLmnBpncwR9uCKqDQ2MuD8gLL6jU5TyfqTqVmE3QpfgxwiertVybiPKMgNckpgdwdzB",
  "key16": "zvUiU3FU8nDENBjdKtJ6KJbGLbGDP1HPmMMmpTNt6gvyGYnig8zdxBY66sUTQpAh7fYjjV7YfizjSUA5mah8sRd",
  "key17": "5fp8EdewQomQdbGkRahr3MCZiH7SJdnbnsYxMESUdSP2LK1JRuFXRmf9JfxSygG2bJXA7LhS1xHv6Xd54QzpVqLX",
  "key18": "5Yxt4NP1Pi7Y5ZNpSJ2VTZFzzFQRWF62BeA9nkLM1HtQKfQXfd8WD2DHLfXLp9e81PTvmAXvAkxcYqnbB54Bd9sW",
  "key19": "3iB31wTNJbJTs1KDLbr9AdnNQn1oTLAsSNzTEJo86MDzg7B72fxjwGPCUQCeB99uQpgBKVxjStJN2T2gZSCvB9eb",
  "key20": "259dnUfGKVzH1fZwJYmAJ1mLj7KCymhJfjbNJfq8Rz2vpA2sD8PWBzkPaWqdArCiJjZq7M1yFjbiHrSdjCSV2Tcy",
  "key21": "5KVpk496cqTQuM1udzXZFenQmDdGA326j1ic3pDqUusGQ1oTCfh22CmnE85r7hpTfP4j4f86jwM4DJWNQ6E4urin",
  "key22": "4iTpYwwzSf5GXQDXSPc1YsUttUE5CT9hus614PBszwddarp5nwe3TBvExAQqyJHjnuRT9BSRvBHEwepekJC2ak6",
  "key23": "3X8Fi7XqJpGSAPaPsnUuVX1umMq3vfuwLuEuZQypVFuYRjmE4EStJdWNHh9UBh7S91T6QDfgjsxd615pSpVV1pRG",
  "key24": "388dNznAmbFoSp7G7CtveCfCxz7VFghFdU6ns9c8fgKpMPNQxGP3EmEnuV3qhLSoJ9UajJVcVitDWj1dsBpg8MBq",
  "key25": "2bShhtbs4RVnXNQrFkQ2jAEswb34GjABi23LuCvdQNrmi2a9qag3W8jbgDHqfj7ij8rdfxsy5jhQGkeJGNfdwjo3",
  "key26": "4ZFCoZPXTmXFt5WcX2GK7YRJ5JQBV1nifZxKhks4qDeE1aBhrBwAbdXoJpHv21vZdUusJeUGteBoDzWBfVripTi5",
  "key27": "2dprGGnWiXzA7NXymcg9UejsuPnAXJZdBnvnmS34DMqYtT6UnB4oDRC7sSCS6qGxPyDH7Zj6sTYRPwqWGfweEPi5",
  "key28": "5qsWJP3yQAqabq9hrcW6HxPmTMXwTbbJeHNHnCbvBwRHQqcdHVHaM3mNdn7wh7C5oVRHf3KN587iKJXZLnfM4DRC",
  "key29": "KCyKgjQRwvoC74FGPQxx1ES5PBsC6PAVjZDQGZMQcuttVmNvZgYXYDczVgDvaTi4QouDrT6WDhEjoHY5QDVss3A",
  "key30": "d5gfQEE8J7RBVgXRDLdc4GBrv8LnP4ucNVmnw2yhN4zKGFTar4JKN276a4GgMoAnCFonqooo7D4CJtTdvZY6Q9y",
  "key31": "PqinktKStQ73WhbYrmpVMjs7woCtMxWRnzMbRVREuoxoq17XgDCKPpAhAqtgNAdo2V4xC1ebhG8vViRaGSqRxHp",
  "key32": "4V7jt9LrhXcpcDhKKNaT7z3vcKUsXyNJk1Qzbdyi56b1B1q2n2aJgmkn9yF6z5ecCqJAKotunHmMVGsWuu1yxkv8",
  "key33": "qCTLwmbfDdLDmzJisEjGjDnw5HEoJ6VsosJ3awKYndKG8zuY7DEd9MxTRHShiyLzkcoUU6Kb9ntb2wio9MhC89j",
  "key34": "3J9JQW2ucxr6PMfpaqH3WQhLe6P5v2nwLN55Krt3vZTyqPZUsxjHc5WwWPoyqmF9gNG2FM2gnCJJAEgZFXvwJ9ab",
  "key35": "3msFx5h4Xq7EiMP9dwYxWi7osh7XJvc9oe5oem8e6HVpq5vAwkHQSt45HfZKqsufRuqcy8K7ujrXZYeaPtKouLXS",
  "key36": "4NZaZvF7RvaFEufQpqLXV6ytvHZcaA4vrGhdPntbjhqn4VAMwarktmgsVx1RZmMCDvFNVMxTDeZyETGjXh1xSAn3",
  "key37": "2cXapHV8PPcdi4HLvbfPVGmN764jp8S99vXRStZXuu2oGdGjjYqTvrz9pZfLy7xec5kiuX5dUjbNY9F7dXWfsu7N",
  "key38": "61wjK2r6spBerDvyQbcpxpUKXka4n3wbtjdSjVd3SzeKZndHLrW68yEqgmbf15ZnnTvs2BLWFaivWNK4p5b8v6YJ",
  "key39": "2vMXhCz9F3hhxALjumsGVqSuqHVNcqwAttdAiXvChQdvbGHuDifSxk3pTtxoHkKHFUMMJJksW44PET1ambrn1gWy",
  "key40": "4o8cvPDiuzYRH37oXnqCRuzhYUARmYvBAvUf4G5xYLM9eZWrxsoLZMtDAK3akgn1gcXSnaL6ppi9UDbVAc74iYww",
  "key41": "22FeNqwweBYe52Lske1om7PjSCwvPFE8xzccBqHxua71LsKVr8nHWwyD9xtmTeXCSxh3X1Q9cBhrzRxSEgkjtKYB",
  "key42": "4VQwf6SK1jaXQ7d3mqFBhcytd3KPSGjjpeA6fybMgPPw5KTsQseeQkQ497srh6by5KcTqfzYb3yfEmE6pMgRPJne"
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

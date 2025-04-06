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
    "3hVb7dBXwzNpeBFW2eBy6VXTajpeeUhuzqgguSKspu9vqSnrajiJnr7MriddUhvzWQwthCSCesvA8sjkPJZDP3Wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jZ5bArqbW4T9f6qBeqATGQdmFPDgxz16XjHWZnd5tv5wJCHMqFb2iae9oFLAcr4YwFqUQabEU6KAQdM6nYwLA3p",
  "key1": "4VeCFQEtFTisThaFVk3YcoLv5yAq64hu1w5ah18VtqUzboQ68UEoedumdmAapDwoCqS3TGz7BB137mRY3iMDqvHk",
  "key2": "4M3xR1fGEMCQfNZV26ynZ11vXWCEXosudJBHhQR6FvFDjV5b7AsQ6G1vS9iwWMhTbhNkV6ZRHPKSNFMbMvCZrtWQ",
  "key3": "2fUstkxX71RNuGQ8Zs9DoeP7UErmNUj6q6j4rzi7Cn6N2HPzbRGx3uCQkruPXP5NUqiaoTWaYzFybpjp5rNjeX6d",
  "key4": "5kG3pPN15JN7fwgnSA1horkSuLkCpu5yfjjK7ZAq4VNMrkTzCUpFi52FzyDEMhX2sT6wZE6QQ5KUofbKQULFLRTR",
  "key5": "67JfaqsDLiqQePTsMutbjBkyrj5nBHNiuCA4tXHQHjvV2v4oHBycS8GdkTgUeWdCVXeB3FTAFegpYEeW9YFgHCTj",
  "key6": "5zVrS1RN6Xjgb6ujysGj71Bm8mthxamtbnJ5bo8z3EHgQDwtSdotASC6dqEVHja7qqfVLYxMYdivzG2xWnKAh85r",
  "key7": "odeQXck1xQ5jCMweqSUPi6Vuzp8FDdMRhYctbUyiwSQwQUvvtaqBPgPBbFT9epKY1CQ94Ny6vE8kVJA2eMEH78a",
  "key8": "2CxYmLkQ3pxxCLSM18tNGi8J46QpXpg42VYjSXvhNWqpPW7xhQ6vEn1mSPajawGWcdBJipCHbWxayvSSA8MwpsHq",
  "key9": "5mAVQaFzpei3nzZ2d8arhDCr3Ya6ac4o5AdfoiKCjD6s4SV7ZxdM5hM2iEmPWMsA4i8NpmcZtKzJK4Lv6AUAJFBk",
  "key10": "saHKCkuU2gbJhedbPVrWmgtVWHEmjfV3Gyp41uipskm54yS9nhJ1VUe8jvphVku7BTMhEMTGCKx2To2RuYYtBVF",
  "key11": "4wmeRARnmwbXEc1uUatCBPf3rzuT8y53XbchFsCH6ZVN5Z9hCvfnniKoJj6JNF2BagJwsJMxgbmty7cWS2tjkXUR",
  "key12": "3D3CSQXzYRSSjZSdPRgd3HxLVF9QXgDJpTdzsyzgxwAb7DQSkKb2xdcJMtfaXVVAjdyq1vMLQzgYjZAtXFYDhcc2",
  "key13": "3AxmkvC4cjjQ6jDoEFootMXxWcA5FT3SdBQnbSwFztTUMJpkV6xL7hU2NUXPK4WA38yXKadLKey3FHx2Q2NNMJcu",
  "key14": "4W1dS22q1puCxwsb2he92o9wgsqFBjd8wZkai4qzLNUXq9MmGZxCStLUQpdB79jsYdueWoGUnpemMiYcDcAvGGTv",
  "key15": "4fWpoFyCFDjPdEZJMf24dYGrpSaicKBLxhRvkExhjwHKQJdhysgKWDMvqoXrmt1bPW1g1VxHXQwzQH4PQT2XPatw",
  "key16": "Zz5Ged9K1Wvcya8wSHikpXgyC1zdwj5SJBryEicbzbxWgLaPxHmBgPs2kC6LHfEnaCmmonYd1PN8W6ZuvFnZ6gd",
  "key17": "6y64EsC1dPunr5bB2fVMTBeiaPdZFcCzrp1JbNjVVra2egmfAutwZ7SZtiJxFs3rhsAZwsp5v2fe88Mg6YXp7GF",
  "key18": "4DunJJVhNkMQ7Z8igUWKF1kqkMLrEf1hJ94iv4RNxvyj9DW7L6WRAa5bR395KJ4VrM2sx7d7CCDxRaU7FRAotkMG",
  "key19": "3FHNYfo9zcPA5XJ88iUfkMxsVBZtCoHksg7Y77C6eww87fAp75NdvvPx2FKkQ7W7nJY2G719shFEQnyT73TW18Xk",
  "key20": "3Jqj8dRr7a2ADDwG2PJ2EDHGrFaym3gi6vdLsUaMhRXpMAaCgPNERdPBbL7RxhNL3MpjywW15Kqo23zetQv84H7j",
  "key21": "3ho1QPYBPVjUfsjDAi8iQXDucvxwj8zX9N4vjzS2bPMtWLnmabrDyQhyRsPRM8uqyEkQFZ17EmK4JajJn39JyPTn",
  "key22": "48hgceQrUeQJBabH21CELKgNVnrH7Nps3oCLTgb7suXmGWE4UX6wxCtahvKps37cQYfzw2bH28PfsyJJRJh2fsZ4",
  "key23": "4raZV9Jdk5Qnfx1BTYpeBxbynfBAz19mwu13mcHg3txb9RdN59GA6gnNEGcsXa8CZ7NwdAmDjaeYYyfafG74Z9g3",
  "key24": "2mvNLLHmofxLutSp3ogX6ZhQrS7DUfpkomPBKqbY9XCKGbjjVWd5VfVzsxPHeF2w5i9pNieTS8q4BtLxCgtc5sAk",
  "key25": "4nNxiL18zhNfXGxcNNdwfEyeJbVGE8ZRXb6cJ3cREW9L9pSX9cLdnRq7GCq9cfURsNWAJQaWKLHC4pCC8bte8wi4",
  "key26": "3jmYkvy9UXSQjUN2A4H8TLoWSDJztGdc6xGDjr92HEKwcK8JB9EX1n8uGBEkwW1tAH47t36HBGCyWiXciFkdMGVi",
  "key27": "rrcJWWoJcj1B7UjAe4TAfXhYvJFhmiYhsFyQ1ZfoGcZ1ZutA4jNZYE4TawJZ2xdCKxBqC5aBnjFdgWMfe6P2hJw",
  "key28": "5Hi4cNnESzJ3bG15Svp2eJejz6eKPoG36AozZxSiftCntSuU6KTErwy4AMyoeQ4Bby3WXHJDsWaJT4p9jH3EkQwb",
  "key29": "5Kj9VipdFficc4sdctHRGVSS2R1izoNtEyysrmB1uzjFzDE5UAxwRxTkyQ2HZrZWG4SVGz57HAv6m3cE851S5Bs8"
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

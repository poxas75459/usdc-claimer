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
    "4Ca2TPRCEN1WhH9nisW4RWcuYBFaS5sHmPPmQhVeeGPi7XrLMSb2Rg1WR6XdhvwfmME47H3mfNwQZy9a6SQ92wY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vhXa6ZqFXDte3oSQHrPJLQeJ1SHaaXBAyyF3zbzjxSuYeqBpKA7uyc1UaEKjwgjRvv7tL1ADrwE1mzXweWFzr7k",
  "key1": "2fq5emH8uvPyoZyxoKm77q1cAN3pffYXaGvNShJM8hhfB3xVL8hBn5vPMvVJcYeffGvaTdTpq5xZd1zKaXYYMTmj",
  "key2": "3iUjwUREKLJjG9GwoahTdmRUVakHK29kkqdxDLu3munoaU63t5JeiDG199fMyAb8EhaoozgDApYf7cmg86sWw2PA",
  "key3": "3vTNum2CADLg9ztWk873vbcHKTkh5VdFQkk2pUDcA8FF1x4pnGKbbADn5YMu1EZaoX8rsyNDsoJvtU82VWo4wYdn",
  "key4": "3GMkZ5rit5Z9bmrbUDcA5KA8bFop7bvbDnJM181SqoWg53uDmFKLpS7qVUgxNUWrydDfNQttL9uUGetwP3RB7dpN",
  "key5": "jHZsMrchXhWakgT39hLgtKBssGYYXkBEUkZnjLNgUv6V8HyTqMn73iJ4B16x82zrNDtYo9kuq8DRKSJHak5UwVo",
  "key6": "3DNLAiEiao6khobLNXeMoMKK4a24CBbHEDds8RLnaTW4c3wfyfeGJvdKjCYiZ8wcayG3EVXgJVZ7F8TFUujYfPqW",
  "key7": "D4UEA8T71Xs2dJWfyU9WPbEtP93rQsrq18UgMNf5mpcJJobvAVYbWNQBhTNMJSY9BEvzqZRJmU3P8cFDNK7gtGg",
  "key8": "3uZ3LG86SNfpwzbk94s1veCJ28JhdtMjYxnh8CmzmYZwzDJJmbqqJ5XnYBiBKmiorYHkfkiTQ2DwwvrTH3umuCqt",
  "key9": "53g4rZfGgjzBmRKbZ5GHKfr82di3dDzymSPehB1pstPj3k6tBqmDsxmLbiobKNrjp6U2mDTecvWyeHyNiQS5b5us",
  "key10": "25akiAT71azseSyrD1AdomYoAp2KWNqN9LpZAqG2QAwbQgLad2KfiEZmmrHrZjkhCXxZsASsUnLvr7Tsg3vbd1LC",
  "key11": "3C16yRowcFqDdc9FWMMQA51BV28yhSHpj2p9F9FABz4PAWE9SYDd3AQNQJJnXxyugnUrPMpEumb4hMFK21nQ8fu8",
  "key12": "2udSX3b2SexJNuxLc14vbthcMgX58kVn28SX9MQkupiRnSJ37EnWHpyEepyHEDAi44gnFTqW1SGCFYWQsKqW1tUA",
  "key13": "3vGpzTiKJJWrLUrwUKq2VhBhcvDAfLBEa7rFzRAf84jiwTreKkstaBFkd13g1tRA5QTcm99aHpNL6Pwwcq2ewh5F",
  "key14": "q62YLw34dcH3zGcUkboudE9dZJ27f7JjUoavzf4FxPDnyCmdGmW3z5HVmBzcuru4ShG5mknL7ukUk6NhX8EYwMT",
  "key15": "32bteXkxnmK9RNy7rcm9a6cQy8CY61817FqP6iyTutC19zi66QK5TYCLn1S7Pc4NrfVKp1u18toJPt7UZSahJh4u",
  "key16": "2L5gDSa9h8BLmvni2PYE8npqLhoZMMSvR1PAr5ZSLHEokehE1sdofKz5PmczCjrsdhi3ESREFaShRKbE9N6VsqAW",
  "key17": "2hqN9bcsxWtXMTAqy4RKezw7NyX4dThkkMZsAnt8KBV5t7wSv1Zorfy5CLUCcnSCG2gpxXHe7YKJeHC7ssiY5Ng7",
  "key18": "5Vd2iUaDh8SS3fiDUhaHiLzAJWnNw3Nv8uw1jEgYcfi2Mxbe4iRPC2kztiWNi9CBrrQDt5sqfhsP6EgybAbKvHnd",
  "key19": "E1RhTbdE716aZZGVooL1bJcrMYRZhsMa6WWLe314dZVhVLymN5xsqviRzzGxzv8QpNvCJpqojsb4ebZKiDhStZF",
  "key20": "5QaoEU32vB6A2bZ3kkn2g6ENxZtH6SjYuPXqnH13wMox9UoVvr4YuvpdbPsgPHbHpG2y716zoRsu2u3m2AtKB5ds",
  "key21": "467iY4x1mRGbADdgrUxXqQwzuxd2QgH7EjSVoqRP2QYehqrMPK8peKJqqEUHZXkAdFP1E9pKYGc7d7pPA264mto9",
  "key22": "5JyzvkFcDM53CfWWGwVzT748Ks6YAFDmSr4B1MmdSmiSrsiTQaPvQ3PLztJaWtAZypFdKcuCi42u8zZSDM5nG2EH",
  "key23": "2AYkePyrNn1LrR7dVCwhCogvMCAQfEFG8WghWwxF9qUsNwmzUujYawyQiboVc4wSA8VHXr9yQ34MtAuDhkqs6Fj7",
  "key24": "2PUGJE1Fj4aYEoHVapUYhp81QCjNWqoiVj5ahh4r1yCt6WscQFq8yhX1fYfn1cQgpYSKuUTefxZgibPN9emJkm6c",
  "key25": "4jtn6pCEj5vKts9wPQjuJ1ttSMzit8gvGJdQkHGJkJHkCNz3rB5noagWtRP7tWvjAM8Y8Yq54NjrTGgekEEzSS9t",
  "key26": "PCFze79epHw47jsXuAQjvreadzoHfhu5QbQqyzEvLvoBUKM9vnQAznXtbFQtiZWTrw39g8XjUyJv2aFLFbZvBKH",
  "key27": "3pXP3GjwWBakcdSajYdKUDqKmE46NFqmFFeZSwPNbV9JcDmmiZgVTcPBg51mDDgmcnbXerjz17rdHwACydRfEh9X",
  "key28": "4odbYxM3ETXkpSr3zzawp77ZKpbQErakpCV2ZAg4N5XbL8gE9CcnmuLLqXCTz3CWi3tm17CKczCPaQKcAWYKYrHH",
  "key29": "3TkvpLC2fbDAvYcgJg9eUqSZNywGtEmjfYh7bBkQ5uGTrNRnsVtEZSUsJKS8KHsD4V6CCsqjADiiACT4zjG64SrL",
  "key30": "2YZgUJyfXz8HxCj46igyPQXqaMWtkzQ4AbDNyRjMgdz6HcUUNrPp5GDrn7wjH4iJuQsGDqQvrQeUvdZTjL8e4f7x",
  "key31": "NBhNgFzPT7qR3PxVNduSARFVYVHFvAE9b6uCS2Ho4eZ6CP8QYYix8M98SG3wEcLR4MEAzXpBccrFqj1gnjk1hCu",
  "key32": "5mSELAmZwoAJRbfxcKq4vxiMcKNfNnng7vAP2jX4M2MXFAk7rYLSbQaMWZKjACn2fVU11nKQz5CACSTZX9eUiaGa",
  "key33": "3dkJxEWDVCNQ2xBNeRQZynaNgDurDqSP5AJLuM77Cvp1ATwuKu7dR5qEfsSTT6qTbAy7xvu5gvZJjaji4hxkrnPb",
  "key34": "5wQ8YW9wBRWuawZS4UeViPNTyr8G3K1Q7wp15cSk6dohAbbSE6tJg2gkp44btAMLePuPKdDPLKf4drDeBKBWPQaS",
  "key35": "5As7JZffNLoNJDbc1kkescEcWuB18vDtxrqfoLsMgp7aoC1YA6MG45cr5q6QajqLJQ6RqRMJARVkEa5aMnEkCBXb",
  "key36": "5Bftmmsmui4df8fk9S56UGUAgZ4gFteAE6xiRWH73Hd2LJnEPCEYGU4yGcCPWdWB4WT7MPeQLMNze1MQi2yPUTBH",
  "key37": "3SGnixKMPRndTx58xderPLpmjqg5Wj8Ht1Fn7nPbsx6HuLhkcPR5TWwLyYgxqWZXpyzCQfR4skun1SdAbJCxiVWS",
  "key38": "yQ7yQPRbf8EVAhfZGd9fQVR2DVo9BaUEqWkGKQFLFsPcre5MAgNaEhXv2CKVM29qrxmeDMAfEyHcR6Pu1ZmcgkK",
  "key39": "3jYWww3nYUjHKC5HMDASMxXZwZAJkkfo82TQyjFxNKUbxxFt8bFkiaPky9GNpu7yHTUbBrNd1st7Mjfmoka1ifZE",
  "key40": "jyvyyrntUnhsStCMMLa9GBZJ4LP2sjaZ9Crhy7QknWfDtBYZf2Qnt1Xkk6Gh6ieGF8R3X2bBLdCUE7dWxnCfkQj"
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

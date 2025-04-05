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
    "CY8GFG8Mm4hFS3mw6bz6cQPPpTiUQw3zk8LvVutv8Y8MDMkzNzbaWjqBLhnLNcr7PmhDrZRKo2qW4xkCeciKfJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmgsDSDkRCAg4239AbLrf3te5aRMgmu13AnXAjkB9Z9haSzUB9eeX6ggbeuCDtThf6Rp1eRexTgjBLYxXCkjZvb",
  "key1": "43nnBuU83f6eTTxSiEN1haKWLJ9JWpRhUxc3v2SG23ykmLDAiNip9Cf88nFXq7VKvqd7uWS3nXBaKHgZfNhJ6Eha",
  "key2": "4vA1VvLDjhMq9YM2BJcJj8QWVLREqvdL6zowu6VtmyD45rBfCWhY5BMtiHKQE3knYuHUFedAzEUGcsRVMKKEwneH",
  "key3": "32pKmnk1sdCrNB5mqfThMGfz7szF6rFzRgbv1KphsiDF7uRShjN17eiTX3D3YjJBPbLiaJD4LoevBGdwJHG2txHK",
  "key4": "28zJPUgb7HRFf2KqXzWPNxxnBB8WVgEYtjgiTBM4w1h8mE5CHvngqLm4vVeh6SzumPz5bjmqyBAbjLJNKi2RcqJ2",
  "key5": "2YSgeVpHvBx1xB9dMi7VYy6DVKaQjoJvzraavDHgJNFNFHnNwvK1QnExVuk7NaiTDesK2EW9RjEmfhS49bEjJbsx",
  "key6": "5kbqP5xaLyNxtnpeG8P6MT12PwsBKDH5pnYZ8uR3of249zJWpgYGBwDtjDwuWiZF8gP2UfVcycZrpGGefb6ugZeg",
  "key7": "4XRXCUGU4pnYdEkrHV6bEtFFkvztfpWirbDwts5U5nnwmDahUG9mvbSw7R4J15TYdQcbruN6uFJfJFj94fpSevkk",
  "key8": "2xtCKtKnF8nSRAeU4kZwBQUHrhD9dGEvhLthHTn5ikCVcbfCfGfVz8gKMtbMvzGnQAjUMezyokSS15Rq9KSkEbER",
  "key9": "5dFM1wtXBg5CZqc7uPgwSTMU1gNMoUVWKiXgMDq4B6UaKa6657k43nEXxWD7xRSbYS2Rp6yrpwyA4sGTUMCyiVm4",
  "key10": "5A6Ybnqyvz4qtkrZpqu41i623yfddbwBH7tUVuTLsK9QCD9cUXTYiVLxupsegy9MEHwfYJ83u5n4P3Vfj2sfdbTW",
  "key11": "3iunfnVYJpHYRmigeWiq2uxJF23ofFb7c7k4Z8R3zQbUkaVjB1tm1d29xuqDy9uvEB771JHfuL9tbP67457ZfMPJ",
  "key12": "2iy8vhN7FF4Z9wQxjFMYUXfEy8FCNk5faJFHBBwGkBx77fC5H6hDmrjJQKqQ8Re2QmmXRb9Lg1g1THieG4V6dgDL",
  "key13": "3SPcXMnRN8kqiTNAT5qbwVv17yW2R8ZhyWDDKNQg9Xy31gRuhR8HE6QTeHXMvSfNtcEJGpDQQ89GGoVcXFo4wfkw",
  "key14": "5HBbhtLdQsEHepM6qu6hVWTcpepvjHAUu5kB71vn81pV9NyuAPZpbktq6qVPdbmBfiKKr3V2mkCvCE4Pu9iRrt29",
  "key15": "eMSbhevpqxBaAof64h124CKY6KwWxLNRZgoXARVpWiBnUxDk3zyuSsuVr9cz4T9wahwBuwb2Q4vEJ2z3FJvKxmC",
  "key16": "E6pCdoLDCcgFampMB74o9N8uyCes5XiQ9KLAzftZUzjHJPWobzdrKEqXKi71VyfZ8RhpABKYeSemPqwfNv4QyEY",
  "key17": "4BkwKorZxd5Ft7tBaKGV1NCF3XipXBSret4GSpRxDDbSac7eWizcQdE7XakFFACHwKN4gpsdRv3X6BxtwJ7ToT5i",
  "key18": "46X9TQbzFEK4Qz31h4vU8DKh5ajZSGD6jF2wCTqYumxvsJMhh46xQyW5jVUYNKCGNRMurfcY4NTPzntynWXFvabw",
  "key19": "56MeGqxpZmGdcfvLVyETuyXmjsmKfEeFVQbM93RRc3sQGVM7GqqmvNMfe5CJ2xSjox2MTSy9XKpixtixDgqDpAm3",
  "key20": "24LpgYR7vuCEXp75g8NLxXJWSxCNCrXH174R1YB2RmdJ9WqHuMmKAhKwNEdfNbxJ2hLWSi56tzDHUdcxj6Medaer",
  "key21": "5NNag2PNpu3RRjxDxuf73P68GcMaV3wDMkXMg4hAbgxLjmppsAJ43VzWCAUfjtKkxBE3JZthRV9SzrNHqg4TLJWZ",
  "key22": "5Qy1SzEXChPrBeun9pRw7bfzosDpd4n6s6pDyCmjjFwkoSCHmbVzd4dvs731xs1LH5gkYpB8rRDB1uhNN1zctQNQ",
  "key23": "2mEPNXu5BtZwk5d27wz5qKqJcMvu9kNMmpU4TA8MEnqnacsdwQZig4QnsCsUtRd18fobnrYaDnQk9JrsWVJmJ48P",
  "key24": "3vWEEfLez3meMCu7Pmm72A37FvqXNaRK4pUoyNX54JyEePdvtsyXTYRAnKf8PaZWp2AxbV4gDmLhgQQ3oNzwActz",
  "key25": "3p7hgCFVaFsKjV4F8FShoLZTeYCgJXn1xMk6tSD5yZexRDiVpQFMKQpP4WqdGT8oGs8tGY9jqmXGJ8JVzjBAjbKh",
  "key26": "3wBpymyghtHW2nbiy9yXFPMgNt3xihmWqWdScvxRM6wnykEYjX8GqwzQafXgbVsseuugEnwWGhxmpUqYuRFR9Xco",
  "key27": "j5phSQyXYFHSuSwqAfuEuhTW6yEcpXifGj81SsNqTgEFE4snEjMCrpFEMcKGckx4pqJ5Zz1uqR38ek3z6j2Tx3v",
  "key28": "4unEgWyudTMm5T9ph2wxXy5iLvDSQCwwvHaxHaQrvd1ggcozYXZhxiM7kHswUfpWTtdr7QekCVmQdijpF8n2y35v",
  "key29": "iMtx37ggTT6WgJLDG91xnPy62CnzzyRh9ktA7Td2QdyBbT5pdsdoqabim7y4SjaU7rdBKLddZbc1yzsqn2eBNPi",
  "key30": "3jWCT9gcMHEq7nMD716EfXdFLKtqhfTX6vUyp8czXT6wQsNWpcTBwchh86xxpbpa8FQfZwHksjk1EydP6xNmQXjt",
  "key31": "4P7xGXMLy2MTbi33sQbWRPovWKAKCtBfzYTPmHSjsGqvHoXV1JEspbWLvaUR2K1Rs6xdSzfNhXyTiDKSyhkz5e9R",
  "key32": "5vTpeh4VVYJoNkLckVGvS84Un1RYDFZqeJYdeNPUskyPnaUWzFWih2wrDEd4tbbGLT5ceRoAATRk8WYy7dK99DXk",
  "key33": "4wwPsgcnoGyUS427sVUc9jYjJbZ2uy1mc8L1LUuYFJkeHKh9DFCEVKF6TAStJPYsTQd9JVCSaGDK98cGfwLRcpdX",
  "key34": "5vALrhRSeQjtEtVNEgRrCKfjuj2a9L95ELezMRkfvLzYZqUriqQWYrg4DU7ZQpxXbfUc8vDtRuJTSfDjc5E8mFau",
  "key35": "4Z68fayoEd8U5kc9zrAHxz8o6M5LWdtqheozKGyxPzawY22eyNZmZtbbKf5kRadeAWoNBrPJwZjVVCzpHsxbZKvT",
  "key36": "npqdgmAHnwvR614xUtHU9er1GKpgcVNyQKud9aWeUunxtSsYtbfyBDfkSwvhSQ55gZPXyRtzdvcADwVwPFuUcVi"
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

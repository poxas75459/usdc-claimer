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
    "3JKL3MyPsNtvVEXi6dhDFhqExSSVKxiyadxdVnmBakHPdUY4L7WHGUEKG1qwB9apjKjwtAQaNhfVmQvTdEbCfhRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "394hQ38s6FLdgB9w6oqxqihoNovGoxMbkitkv7VAZWTBieEkYfTAo34QYnv22ArUsPSvhGSiozuChQrqxw2UnubW",
  "key1": "4UpqW5W9K7piNxfmu1MuSnSUaSKUB95mEqPYZaxDA98vtRRyxLyFhD7Cpdk8ZrHbPuHCGtavRU5S7SJyjt43kEZw",
  "key2": "27hbTs7Z7tJhfeUNpXYLg7s7VHf9sWWKvWgDTus14ueZkboy9WmRGWhBdgJjP2GStD8aNU3nj5PJM7vEZ8qvjsKY",
  "key3": "4DVq1hX9vsj72QWaEEc4bgQS6zbCQJd1mJL89fAXFqogGydJYshhqrQGoeU6QYduSdRXCgkBMzVATg1Ur6HARPgP",
  "key4": "26kdK319ZnFyMqXZqBvR1Uzwrw2EYMTKgHwbmd9exrEcTdTVZD3n8PjJjEcMsaZiwGnrV6Yu1a9kVqmVVhSYMewA",
  "key5": "5CL4ru5u3AZ1SabXndf55x87rfDb17f2J4wV4Vb7XvxnSVbwgaUQXmdKmcJFBpjr8iuZ7ygc7neTuV9h9poNCKiP",
  "key6": "4PvyV3VDmjvqrgVcKk1b4zLLRPMzBknr72mDoDc2LJawj3shFvK2iu1wkvqo5HzFqvrXzWMWwTeRrQvdDfJdPK8c",
  "key7": "4J3KvFgS8RVGZm2HctZxLsgTdP5Tgj6btGbxckHHx5k6DKBeYeXDqR5kxue8L2oSynaF3FLEteADRKqGdcyguSju",
  "key8": "5F9JwfC45GcuJgiEArSFmHpvDT68KvVcwXVShuH93QCPfpMuAJCfbA4XWgXwAh9ue4D8DPHWuF9bHsJs9eqvq2GY",
  "key9": "RE4VdrU3ovB4HHCF79XdSztsfjVszcwh5JvUQhQ9pdTMCed38KEL2DasT4NjAKAYmvJKrrA24kvWrgHeyQt847N",
  "key10": "5vJNpsfgcV2bVcXFpmmnqpi8Bxsr4i34VbH84gr7puZ2UKxbdyGyqjNrVGthwP48g9tr2z4ShzjvRYbxT52FKpHU",
  "key11": "xxkMoKTGTnmCTvjhTEnvEd2YHktz2XRVXpqQ28qpg1jshCaaCg8Aqhn8u1bwdxbhFetZrgMXpELuazfiNSh8c1b",
  "key12": "4wTX3VHk39jp3CWfGM5z5v77yNHD9qXZ9zjm6XawEK82daNTBn5Li5khTCdt8yiPHocsH6VEjuFQfxREzz7LpvfA",
  "key13": "32s3ra68gZW49FvyqgFyCBjKwmtVwVeyKSmDLvMaMmw911gAFTGiqYfMBAXinur3UBx5smuEav975zX6t9WLJc6o",
  "key14": "37ddJiNjjtrR2EPT2Rddoqi968YoDq9MFk4rH2rdibFK8XwhPDcxJekAEbyDFd3QLS6oPSvfLNWvSuC8wLsw2Mci",
  "key15": "2dBFSnB3NnvVNSLWgdiEKCinM1o4ygC8XiiMaeqszyk6oGxybxteZWRr9GyBD4FsmewPFCCGpxk7dRPXKh7Nubkk",
  "key16": "5bg53GxRjXTA3294Z4wHK7PNfCZDUBfsQa14g3xAvB9Sktin2rUMPD42wqa5iHokz1nxwmmyBxZ4LG5KP229J6fe",
  "key17": "Ki8BCAsThMjmSLmVUAxC9U1dmdiWZLR8hULbkkNoj59A3VJaYcaeuaWnvatNbzNVLTg8fyUvZEewyon9hFQGKgU",
  "key18": "3WYtGvLRAD4rgfw5f99GD5PuaW4Fq4bmutgnbYWtHkGun6esZK4FCD4WfReAHMSopN4GEUpNSCNtdWTHfBSH6bkM",
  "key19": "4cSRhTc7LtpkvYJB6TUrTLL2rsdr3zrzj3w5uUWQenYsNWvtnN9LJ3GvoK1tghaeCMnG4z35jKpYmPrbNe7RAjEm",
  "key20": "AdgpExcpziDFUFCJAek1gE1jxB3nv8WHKunXfYz6hYm8bFH2NT88JWkcA12NGfidjF6VQb7xY5zUicznjk2DaeN",
  "key21": "483s6K1Pd4h7VN5KJNq79N4LsScUPKeKP2wENt4ohbiLm3wCqpTtm6vZFFRmUuFWyMYUk7jH3CnGCM4sgWk65eqh",
  "key22": "2MYdsSASXLp556ruph8PaGE2qPFQGH4mr8FX5FwjJ8JQndobfhHB5Qec6iacrzJPYdjKuavLr5vcHz1WjxKVWphf",
  "key23": "3DZNAk4jF59p8WvxWBGxS8VuSNutJ5jMjsNkSfRvH39rTkys8fs7kHScUEznhQrp6eAUohNmnfEnv1m5k8A9Zvsm",
  "key24": "2c9eeUGEx1XNqAdhJSMVy7x5xDzk4vw1qefuGGUKesxFFM3jCiF4Smo6PiLV6HE69xHnFk5D64kbwn6SLfKne6XQ",
  "key25": "2wnjYyqQ6wdRCSE2MGBSwVUmKK8j4Sed4rEDA24zSCWnEuZUvdfRzaWhg5d6zZQYSkpWk8nCjqJtZazBeRSihKxG",
  "key26": "5ukgYyjc8Gubq3bgFP9Qj6uYf3EiNrnLBi3Lv4TLkJKpHbCZbAjkPmw698SenN9YMjoMfdBt3J1yX765C3YEd5Xn",
  "key27": "2V9AHAQ3LiXLXvAZLd9P5tYagQ5Jbx7YHPAko7e8EvkQQQEQZJMuQhATNJ6bV2qeWGgFhYz6CyQmqKWFENyyCBLu",
  "key28": "4FCNQAzzi43K2D6oHxEkEJuAiJwanZ4ryZX6HkKeRTzBdYqSvFSHSqaYe8cvktZrsh9WCC3HZ6UteV7YQdustkRw",
  "key29": "4bw1fbZjJfo5kG1RooK16divh6AENJqkHvg2m47FeEpxBa22UwTjQMuV7zRTk8TUAxrTgNZ1xMYAHYYi618tVbVL",
  "key30": "29Pw3Wadt5c6QiEGA4nRa7RX3j6Wm8ANp9pFivRHoxk4HDCBat74tJjUYXTecHnms859CDF33ZTmfX5iVVYq6wxa",
  "key31": "249SunH3p5NPerPJNhRtCb5R3JFJXu1vDrQJ3Bm3kcKRgA4LtiVRMHfQpPfbHStY8G9ruvC54zd1mMmdMJeszWim",
  "key32": "44p8a9UWRQmhkuPZDVz6vg93upftPGyCubtQTCgidD6YBWHmG1rKgbRih23vxkFCX5MfdchxVMnt6aoU37PmNXup",
  "key33": "4oXyR9PBB8GyXhxQ3TXrN5tHBoWMSH2tPiWqEG8NnjZZTjU8kMSjbqLUVCjH13PKX1WjWjo24V5XicJYyVSYRGYL",
  "key34": "45Bbu4xH1pJngALS89sRVMdr6hfAPKD6tMHSJWgoymiSqKwbHKue79raaZikk1czvv1cDJUahVQ8vZTo9pCdvUC",
  "key35": "2Y8sRLz9nYAy3czqyNDZ3mjXenYtPX5mrqdNGgN7fgSXCYg9crj72mE7RdgGK8mEKSTZ6ZybwrLqXfyHAjpdbmXh",
  "key36": "RtbGT1fo1maPW1DKTfT1vwzp65c6u1DoHz3PTLjHs6VfohyWumPXK9gZ4aQnZH2izVdd7zs1u6h5jNDeR7ur9y3",
  "key37": "5bcqvF5uoV4wAkhtts64z4BpJhXWJkQn9uNzhj4rFdWUoGEjsN5zkD1e67iuw1J6TzFn7q94Bzu3DniRvZkv1nbH"
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

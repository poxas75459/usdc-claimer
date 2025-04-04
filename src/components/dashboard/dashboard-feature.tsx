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
    "55t4HPua9ZBRQFw7wHyHytspbcnQ4r1tGF2hXJtx9eQaqNU7SUDD3M5XtPFf1fXXKNAivFK6iBgSVo5frzXbzpsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sASK6WJCsiHtZeyLoyndibL2nfPAnh3uAzYitoJFpTmaiPmdb123JXYQesqh1qyLVRCVwd81tVsdV6Xw8CqpmBt",
  "key1": "3Wz3Qcon4uHS4zYL4LHaLWtZoQcgJydGBRiFyUPQ5QRy2XsmfDiKBAk3euPMEu15DcaysiB1yMn6PVz3e3iFhv5Z",
  "key2": "2Afy6ZABjmpqKUv8sR9xJNnBCmvdVY9ERidpp57xAEfDG9NxoBEf6MscgYDUv1SpXZZToWQNVVQjAT12YbhAVR5R",
  "key3": "5ynCPPxVcnB8yXm8kyWPbRHrNtbcam29jbAwK7rnLDT8yoJaVYcogqGxyhcqhzonqbJPcwta6AGzvjCM8QJiR2P",
  "key4": "4TydFMrMaaRmzaFJvUod6NUujqDq6VRWyCKPLHkkjXwqDgUJVrV4YFCxweHsA9XaRKspBHnsgHjRyeBguKKjuLE7",
  "key5": "2H5XxrSaMJRaZMxdpuM44ng9Tzt5sCNFyi6hCpGoJjQvKvYD9hN7uvbBFD2NuYxvAGvqaim3ZSR2qXzbKxHwm94L",
  "key6": "oYFbvVTGDsdFTXFPeoAtc7i2za9qNnidtE8zwzafL6eHFkEgAc7vaqX6Qp5LuvhsRt57AUeeQUTxrXECEkoos3t",
  "key7": "4v5FMVi9gsho1QReUWv1p7HbzEpcW68tm5iDdHPim86jcraxZf9BErb9KD6ndWhBjcbvhS7qRD9XUYGJtisdHrRx",
  "key8": "XqVGnCF8wDngJb7haxAa4FxVT1fw7Th7uGiCDYWKjgq1mXkSGsPbm7BS22ApDN5ny2uN2V8rtRELjSSCjNZa2aq",
  "key9": "5SzCFBKwn54Jktz5f1EL1A1dJDXg8nKpZXEnmKNK2ywh1WccKpUBpxPHfyEEZqjD1GcdPByVc7crJP81senREkWa",
  "key10": "4TCFoJgXDMgZiW55RAdv7eWWV5pRc77szc8q9yMaDkDfN1UvCLw6WUb2HTg5M4QSrfC8Gyph6Pqoy6wwzGgkTntM",
  "key11": "4YXkPPmKUc31eiwsti8cZeLEVjRL8USiBhm4ydgqkkt86bgtoN8iWBoxZeucaqKiNQhGDtJeq2qGToqN6wuK5ePZ",
  "key12": "5qJrBb8UX6fa2VDmKWR9ady2mU8SoXiVgUoTE1fysfUXmYXGf8QKRQ6Q8bvTXR9MEUjfUUdhgN52umkTmY5ZApsi",
  "key13": "8oFDRQe3TKRx66v1xbrUSK7UpXGatu3mHFDq6prmAoLFTjUBS5nYDViY657988P2V19jMiZgW3BJMPhvj6VjRVw",
  "key14": "5B8b6Dm2xUMujmsFLZrPmTqEaduzLUVVM7ctSYp2mUA6UvbckMhdvrtXj2D1AwN251xYa9ku6GjjeKYXjF9ZCxHX",
  "key15": "4ApJVKW2vHih3pY5k19DFzCHrpns5bk1z2igvsmRZcWiamgQw5ZrzHoHcQXM4n4nvAhdxKrr1dpfrVt6xHXWJgej",
  "key16": "2iiKt7ZjFvB5o2FKR6rhEBm8eDTubme1WSk8nAqxBHV9GHSSBtHe81zMHwQwChrmA6Y9DpUZckxUMpmGtNMkaioS",
  "key17": "45ZzUqjyhWA61Jv1UDtLMNh8aekk1CYourn3y5vrs4jd5w2y8ASyrLZWFBtzYuFpcpF9knnZMoZJExXpGaqK42Sm",
  "key18": "64y93CD8HP3Mw1r925kGDY5qXB4depwMPMW9GsdBvAGoXpWDKKFkXxadHZLQoettRS3zkHN5sZbUk39Mi3BNZknT",
  "key19": "2SGRTjzUEDz1ZirhYRdBTBgsaUnEC3nb2bzTM9DEy35CML2DP3h5aUqg2U3bx21Vsf3akU8MtLLhhrPoZPJNGNHT",
  "key20": "21bdagY3oYnTRZG4kM6x2VH6jw6qxph9pZq7RuYRFh162H46Z5JbVGAyMcBaGnW6x2jCKPXM77hHGJDR7yWzTRYW",
  "key21": "3Lw2Qm5mVuuPP5YoaPUrLLCQQ1Hp2zFrg9MgvkDhM3zLx4J6JyrLZsu2xXvpKd1rJVbEeEfCxesgRxogn97qWgsD",
  "key22": "3F9YwKQ9NxS7ZNq4QmVQ9TYzdmgBojJNMjeYRrbeYWcomcADCymkhFs2qdF6uP7wpk7XqzCq2wrKoC7xxZQZXvo7",
  "key23": "3iNccXBDMN9r6nrWRRsendjxoYa5idSMGSLfKvM9PBinXENqVfpLnnoi6RHPeSTH5V4Nduar75EHYpoArcAkFEGq",
  "key24": "5szG67FGfxQmGksDXPRjk2XpYmUgK4J2xgpHa9qKqE5qPRXo8tR7Whu2hTKt5rLH7yPo6e8WqG6C2TLhH5BTnRox",
  "key25": "5z4XgDyKATDbrCyjpNx5Vjp3RZM6Hs6pAz4HSpebRnKgtz4Jdiz3XsavgbZADu7i66Czx3vRTCykFCgEQ4UGfg17",
  "key26": "3VmGS232Xt1MULGrE7xJXYXH8v8yLTcUmcRMtoeCdNnwGgnbP9f1wQfAo5tHnzQVL3oLNcCXLp1qmUrH3Q8jshF7"
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

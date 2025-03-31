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
    "57nb68ybHKNDxwpCT7e9n1fvrxVZqjDDosFDd1c45BXiNSXurb9mbCQALg7WCqq9is41Ke6oiVutnmGQxBmrsJgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ya7Uat6vSAAGoQTDv2srcHKeW49pqg2dYqXtoSibjuYc8WbBBTXhNCjr4mQav3znpGr2xopN97T69GmXtiNheW8",
  "key1": "mZtpfjDzu8c5EYQZwAPJHyjc2qHREe5cfzkzvZG6RGPhaHkxNtJv8BBD9xbajzx3xraLsBo3H5ijJWFDvb74exq",
  "key2": "x1YYPD3w7CH6caR2pUpHEdPiYYieKBaKngPaZF9z7AVq7tk4YYVLbwxe6meJKgDuq5tXt3VHKqM92GYCKcYWVJe",
  "key3": "3raKmAgx3SawBNQttne91oTTxTuv4fzBNNRvYDXHAGSXG2y1hMN2RQcj3qMuzobpkWHCumEHsJMyiQadtmoN4uA7",
  "key4": "2UKQZxQDZjyovsVydP5a9m5XUwsWiyzWvHwqoWdoZk8EvvkDm9d4FhVCLjqXBxAmhAfTP9JXMPuJ8V2F8gDqwmoE",
  "key5": "4cDZzu9jE1f2GJJZE3cvkyBdmFJE7Ah28qn9rQ3vsyG622P5ZWh5x9bb44zQ3g1m9HyQ92BGWBrgyyesVTqgUBvW",
  "key6": "2TKnCpjABX7wmuZ6n61PSJWgsfBvRJzmTB2JaPWCLwjXRDt3UGeJTWbPHdQiXHfYErZn3bBXzNwgcL23JmhqmFCv",
  "key7": "3dwyuBRBasbwR5C2LGDr6DRX4M138p3tNocgMwfk28ThwZ1JXiwog9P56BJkqNy9MAkxcUp7EJVXcnj1EEKcC6Sa",
  "key8": "37Z7Cnhf4ixvg7kRm1XgKkSZ5FmCmomZXZC36LxJi7khB8YyxEWVUx1gRnQxFdJzmszAmKNQKRToyjEwSyqrX1mr",
  "key9": "5GB89KEcDEgZmPSjH9R1Uy5r1KfQG3WaWDNS5A7dQ5evanpQhWtxPNWE9Ei3mH5tufKePDbFyBKAr3yCXUAhKhwm",
  "key10": "3sM6aq1PRqDp9huBfN6K4v2Xwk8Xubk84RntBoCG3uarr1uHhdPHkFW3AxoYyU2xBvfG5LstYqRa13fnZ5DrxPjX",
  "key11": "3w4oZX2tEcMq9ZzLwa1jBhC4HKSZzYSzVpuDo5RiHU3AMbYp846tT23PqmtTvEqso3bYnr3ET2tCAA52H91smFVC",
  "key12": "4w2KkENKMzgY7mwjMFk9T7sfgTmDuKGjmBDqaTGtgSndweEr9x69pfaukF4rr8BhtdRY7EpdGyNat72eCvhnVuKb",
  "key13": "cwrRBLLVcYatBbucEqAYMih8AohwP815biEqt4z8CJPbPGaqi547UVqCDUaUZmGwGrKaPfPvU3BgRXMMh7vczMr",
  "key14": "2NJQWE6YVeevMgpzsF3gNuk6b5wdZVFCwnLSNrS46LcWhZUCMEK2HHGztBUUhMaQykgBJvPoM9grJYBCfKv1niB9",
  "key15": "5UqM3hwVF2D7595wfBG6JuuMHycftokmd8KuPb4pwsCD4gGHuY8TnPVXVgYwqcEzVHkigL9zAErdMUoeVgS23AHM",
  "key16": "bozaFi4CpCMHd3b3kX6FiPhB7ajHsEeZKwKLaAbHxGGe6sUZCaURERAK8ox4ZTEQAo1PcTcut5K3b4zfMBZ6yxd",
  "key17": "2b9TSt5AvthMfEcaN6Lk4HDHbn1ENGwg6MHuARdzum8wK8bzFCua2Ltuc4cSPBDyGttsnqua3mB9FUL9jJcxBuXe",
  "key18": "2PLAMkk7Ufj9wveeDjrsFrcievWc5xeD8D4iCBQcPz3R47nYaTMSEtKm3Pjz1kZwx5UrK3pSsSDJzSzvd9ymFcQB",
  "key19": "51PwYyHuBXk95BntmgTnZFvqgw2DKhMDCixBggiyEfBjpYF1wR2VbuwZ2i1NES3TjcPWW48uyfcsSNutTeKCpzJy",
  "key20": "5rhEpnLePQ3MZzEaCLEKXW5w6Mr5kCaeex77PFjF95A88evAWm6diEcDfTb9RBg9nz4ARZWuzaGUyrPvAVwMLLcs",
  "key21": "mF4cSCtLKaq2vui3d2GR5t9xigSb83mxkZjD1ZdRTqFCttcCvsdwsCmY1GjNg5oeL9ioGRQe7fMBLb6AMULSeAk",
  "key22": "2vP3oP3mLKXbpoBrXgvtD8TgL8S9PHENR7bd2k71dNrwUUNZ3R5CZR8c9GRsch2N9uUtFvw9iYnwAdvRR683HW8",
  "key23": "5MArwUPYXGBgnGjeBpoYfY2PpxMYMSBnYeNqdG1sHhbFz1RPpUWujSYt63oWzLTmS3r5WiHFRbt5JmXd71T7ScTo",
  "key24": "3eAqNhRpbf3qJ6yevTicn3aTanyQPXxyMuHd62Kn1j6CECm2TsQNMTYnUgxgMjFrQCot2qDWwBETZCNYwzSSn1jg",
  "key25": "4iMXV89XJY9aHzHroTvm255MwVGsaDNcBduHbVWjXtx8eJ5cXfpXKkEzKykyN5WCY1wPrfpSs4MwrZc3wRCwT54D",
  "key26": "3XxpPnnkLfgSRndobqDmLynv61RdmXQ5bR3UVbeqArHspRCZbrhZ7Zj8CumVDhgf3hFLn4DD1XnmnA8HoEWtcFUh",
  "key27": "29fDhyt4oe4LU9i1P2TLmXGFktWaGRPfqrY47Gi5KXgWgyXUmfFnHdocSraPB4Kb7rckKQGFTcjhctjU1CXXPXeA",
  "key28": "EWGz5t8xpYapJ4brMH1Lg3xnYr2ZxkxRKbeUz2dAEAXMoouDhJohRsQPWQQQcyrXmDPX9KrP5eqWCGVtVW2Uec4",
  "key29": "3GMkuysWkjr2JiVT3HQpQewiua4FSUqbAmPW4qeyRE2jaJjMgP4MYCz3sJoiUFhPAP33MFB9E4qK3wifuEyXAkp1",
  "key30": "2nAVY9UibzwPUBbkyKZYm4WBz9VGa3KcxsirMkDzJJHNotQ4x3pXxWtdpBzYdoxcckzRXpRifchJiVAnXYEBueVP",
  "key31": "75HN54qz7qivBQxoacGx81RSQfr1mVje3T87Z4tgD5UHgswtgskXtGe3j3YS3JUXWG5B55RmCPETtnYcoHgvycP",
  "key32": "7rWGpZoTs4vLtRaHS39GvM3Xi9diiG1QsvcfhabP1ftz6UhPqPJMteJgmRNsNrcncQhGbiyz3xsALNgRYPohKPA"
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

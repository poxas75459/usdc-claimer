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
    "5HZqW5hKJCKUxTRnDVJik9U8HzcL5Uswf8R9eKf5P666xXcchnqohfTf2vPqZWPaGU54VgdGNJubtLRUnFtjwwEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ep7kCRf6e85FmzRrL2ykBXVEd8yDVEEVfhqGC6gssFxZggiKcH5KACd1zJWTxo8Dr23au8mgWjWvGJtTZ9KVNdA",
  "key1": "3KaTowVARvpxDZv7tDsGjDoCBYZkPHvdRcqPxnU6jVnGHwxRKyyicHFN2PzZtwo6gJWDLha1LDjdiCkfMDaoPNis",
  "key2": "3MuVe2WCuoY3RcpNs1mNPRuvr8zr5ffddWSMSFdaMCwFWaedt8QuShH4T9MeHXrXWwTG4nsBqiegePQV6qqWPgpN",
  "key3": "4x5fB8JwAWTe4gFeUZHBnZn2gnnc9bXZzNrcNVzgzrfJij7XAJ1fmW65ykBtDHbjLh6ZJergNDy4RGsZXAHena7w",
  "key4": "AvFaZjvvqwMRUFhB2q2EpMSBMsfB9vyoTYwBp4MuLhdhhZQdhG5iq3yaNFwFTW5MaXLTimcwJG36cyDPMxEYx9G",
  "key5": "dctQjii1oLUKpk9MDLqfL4HxsqgfMnGR8ejYiKoeWnsvEjnPzfoiqYFGHfcPkiaRX6haV8A8KQzjmnrkGMmpcij",
  "key6": "2R7hMbmT9RA7BjufCmMVmxD2zNruMPqbbU2kmEveTbsDf1C9sJNE8WMRsdzqBB1DcD7Uk1nteBb97Ghj3FbakafU",
  "key7": "3VtB3gRzUhdPECerVSAED3nmtSZRwkUayjpD4d7we13R1kXRyqVfhBc8LGD6w9X7HearPVGghfqneq2BpZ9nHof5",
  "key8": "5kSSbeJUxgQMruqjpYvQHuES9jDqeeimRZSQJxwJWbcYwsomNRAEr6DFzKHBj596yasMaK4cuVgwpoMX9NL3DdJP",
  "key9": "43o1eKw4ERuMYEaf4vCpkHAkQMRszHZH836yFjUxADyJPoj8fdMZizawbKFVSi9r9coXUDK8E5D6LZymvb96EgEA",
  "key10": "3HLv2H29iLAs3NSSS7vRXPq5GeLU19kPrg8jGUbRWRZE5gaeQ2ao8ZJp4bxAcktZNoBcegfygAoMA9UkfkiFteSP",
  "key11": "2uM7GhShZWHiKYHfnX5KZvLZNEA6YU5QyPWoLSm4TodLLQEaYVntEtbiWvCrabA1VaWubY6rMNMr8HoJQQr8a1oY",
  "key12": "5f3qTTpZGWGEhn834p9aHZQygrnMohLSRQKMVneVhCVgmxsmn3vsv4MQ2wbNUfs44X99kawYrpBdW839SvRBEnVy",
  "key13": "M4FPECZoYydCC7PQcRr1SsbpcHDqP6MWUPNqSenAr5CktFhGEToRrJjtxRLodDELHabetKa3cDdDqBZN5zDQCDe",
  "key14": "3T9hZBSZ1qHvFNUdinE5dorkkTDwNsjxzqHDmNdUtMk1ww8ANn5MqgVRowbszbNMZnJMfTjw3LA84tFoREFXound",
  "key15": "284VstRjw5fxppoiscxhKE7Z5vTahjjvA5yUmnFNayaPhFkVZo6Yhi6Lxwe5MUqUWGnrBtoZk4LyfaZ1tjBUBL7w",
  "key16": "5vUpHYHWR6VmjazjGTs866UKv8RayiwkHYTeRmUmi6s6D2Q3Ped89Wuv4C9mC23tfYJLWYjvbnqpHJSmByE7f6BJ",
  "key17": "65hzy3n3gLiJxrQWAMBb85iZM8cdnUNZeGPQmM24LhZdSbjJBn64LAhUDmPPNDcm9ThmEUU5AaCDvyC8uaTae9Vn",
  "key18": "2Ny3FCSmAqWMCy8UHdaJaxG7wGCVVnoUDnxobZQaNtwp2YiutzMv4NeL3tXtZeesSBtZkmuSacUruUVxRDWetK2D",
  "key19": "2JUN28jTp9eAq3ed4nTRftax98N9Jhnm4vdcN6Q6hBStjxiJHKxuXDohKNZDWYEtJ16SMgzykKCN3nAezR6RpFPw",
  "key20": "3rcKqziEHMuUDGMMktNuMyE8JueRCFb4WetwEbptm2j2Bo7R8PrsERnBSwnNyBbbCV7rAftxjovaN2NBxk7JfWnZ",
  "key21": "3ykJeeB9Cc9E7PiYLhUWgcn76CpSUxy7GLEvxrVDjgsDAXcet7qvxSV45SMuN6xnhsJUZHK9xxMD3Ai9qcFvzSa4",
  "key22": "2q9qECmsZnw2D1K7T6UeLzrFxiEZg1Tdn5Qv8t79GhHoVqz9yaHnjMA1KwAe1sjyhYYRQV46zFUnL6AffaqgyLt3",
  "key23": "2GuLCpx9JoVqDT2qbMh12aDMoShnPBtEVc1MbMWG7GENPqLJqkbY8qUwiNHxgxH4Waei7hQhKsWxAThbay3xAJxW",
  "key24": "2NpxXg2C51TQNGF5QpGEkYT88riD996UfcLVaM92A4WxfxczgVShseoC7U7h3tWeep95bybq5BDnd9rKTWkuknzg"
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

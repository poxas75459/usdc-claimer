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
    "24rTatj42Qd2sxn9hmWveM7zEsCUWdUs2PRow46n6Jdd5rYV2BfzrLdyk53tE7V95cNWQrVxkfcw9VBJgHZ5Ry3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqebSBnMAFQzbMeer2jLhSGYpDHeCSTuCLfyzeNJMLqenPvQTiC987gFe71Y4usqotKxDHMRiE5mGvU6aF18ZUQ",
  "key1": "4BEbexRiAoRYZGLyqb4aTnbnXywQjEi9TqBJ7YoNK4eMqJHKEhymgSXngnZMvS7KFhcXwpyMNZRNHHTMpQGtZ7eH",
  "key2": "47kEVb9Noa6WK41SQHuqw4vFZkKQ6st3dyieoGjxyBFM3rU5H89tY9fTp4rKGmUf1jU3b2o2p8yqu1NYpwYxwXp7",
  "key3": "5MYfKWbvXHKsRvLJRpHVRG6nfEr3BRaxaKRy5X1KVcxco2BtxNNsbwWzoQJEqzJdgrzXU9u85RBF8qKXYS3GgUuW",
  "key4": "4G2kXa9asUyqf9iW3sXm5DkuNa4VK4MbMpm123iVWZ88ounSgxRbgJRNWtimsfWbbvpthxDogHDhiWeAct4p56Et",
  "key5": "T1XXJdLVFcHJooU7cXrBCd3RecbhPtUGiudq2JJTXcUW6B8kaHNu2hX1KxwnQWjAnqGyfAcuqN62cAgxi1j7Gh3",
  "key6": "3oADhvYvAHvhLopxXVxSmr23DPyor4T6dQARD6syFSg5BxFeJ4zwdPH4JtnfiJ7wyGsQc1QhFgfoiRNW3vZHCLSq",
  "key7": "4jXWhqU6fexmEoRrcFUT5vHKMS5tv9gCAQQtkEYKxyJ1d2qosUxy8hQMGCgXdM1bgzust7fi1EmcUqKVTyUsyd74",
  "key8": "5M6PtgxWj8DFLNqHNFLx9pvt6wzy6yPxo9126UoBtWxrRFWYNwL64PPTXGcF72fgS4P2gSbuwymJ9Eb43dFwTKFS",
  "key9": "3tENg6PJx58ytzNn5iVFTgCLsRxQdpxxxavrnGuRyy7Ty3MpkBG8MCnJuhqQpxdqJoa4m8bBgpV9KZ71S4ohnz9U",
  "key10": "4nS1262KrzFC4rRdXD6teXKwtZwm3t5BB5ffN34TzSpCoapdjb2SvR8TRTVyCzo3JETjAtmBbuiY8mSXdXoUucf9",
  "key11": "4nNFP39HxxAL1JPkjHbXPoaS3Uwn9N1ZsR4oQ4F4DKg8BGK6583DmdDYh9xdfqVeYi6yhSQPZc5VFWR3fLx1tcgP",
  "key12": "5vpgEmox4qtgmH2aKzqPKqFn5B4tJEMYszpzqLAwEk8jpco4ZTyUcHhx4LEdtZSmoEaUzy7RqBdtLzprWsS84Lj1",
  "key13": "2NeQycmAMeJdD2vszrDCYb3KT3F59QF9NA3FBNtbqcW1Ldxi9wPwGKoQcsUhJXy5Sk19yaVWvRtAHEg3YYTLfvZx",
  "key14": "5E6kjYDrnuW1qEXmEvsymi5YPfehEUhtqc9CVCycP6nzM9Ub1ekTKNn7kFYY7vwi5n4XTYoMqUSjwCdP63DJPXz5",
  "key15": "4RQiqNTeWArWCJqEEa21irbLytLkdUccBudJwXHGUYEQTC8kNTChSost8CbfPPUxAqpn2swySTLcMW1ZCVztZqdb",
  "key16": "4EezN7JQfCTLQJsqmfH61hg3XEyMaYvjQtQ6bDbLu9UrHhXRtW9zYUxQMtMfvq1G3JGP9JXw84wSzkKVqmcXpAeh",
  "key17": "5KPDRr9dkGBdthUHcBQQpcdfC2ad2PJjymhZYzvzLuddVS85DcYe6XaVrCRD8pheGSVwM17jbLFnSdAhZ896AZ5Z",
  "key18": "51C7fomZCryuda8YMtoZpv5weSvTSFA2hZBpj75B5BgHEs2wEp9BnKpvNZMWFj1bKk7PWdPViXnxwpT47aUD8G6T",
  "key19": "2ihc3pHq7udeUS2PSA9UYQFAMPVLszGxoSRoR3NpP9jkZ1sbjjQG9hMRNsWsGyLVUuPYkQM7ccTksi4kDKx1qkRd",
  "key20": "PX918m9uKMMgpEqQ6NLKAEv7XF4pjR53ExjWxE3C9xwKckjDf6sVTZXEB38gmVWnY5PePo624voRFWyhGeX62aN",
  "key21": "2wRPzRZ3Uzs1x4S2J89xfJ5PaERJeBBdZuocztXY3gBycKyRykm13Ek8byLLTReJggfM9dFcM2EgwisY3SYXoANh",
  "key22": "58CN9Yze87Z3dQpC6UBmbdDojYQitw8QKxRHdaBDTGgy4vgc9hLyPLybMYro7WFif6XrzFtiq1VApBSWFi9o4UY4",
  "key23": "5m9AsSrivwBa5v336qLTuz6yDX2XaVSmUechFM7KFFLCJN1zQ8gThDM6LhWx95DDc3EowPzPe2ePA8obMTF3prib",
  "key24": "5qD8kybksiBrnPyyHwVJyn1ELHJGWF2esoqCSPd4KNUT6VRVzwfU1uCLrDWUBTZupucxSvLbFaWGxWfjg4d1UqJg",
  "key25": "3snPcZh5N2nENLihJmrdEAFe2xMXMHTadKjsUTW5H5diBr47LkcrsekcfujLcnZW1NY4axonnr81tgjeACmqnTyU",
  "key26": "5mvJN4H9w274FGeSJzGF3Vq5PBEguEv3F3y22RFPgrHzH8pzVdsqbPukmECibE3heDTveGeBW48hs2TnQR7xUavu",
  "key27": "5EXCqZpJ2EvxwdtwrwrSxuAaHKm8uvRz8CDjChcA5YeMX6zXMoWaJXo2bQpbd6yW7pU8swjoppvjnhT1p9C37xF4",
  "key28": "55EWHjvrSgY9NvYYBPs6HbNMMUckgyKjyLsJzSH6QRyRpVPh3G1PpKsvfGVLJrcR7X47p6q4AReziz6P4wqbWAd8",
  "key29": "Q6gbytBhqoSQzNwthJjYcbJGSbNZCwRavutigLt2kW1oyy5hxovZXmsmpApsfYPQ1gZvnbqzJfZnctTkNFcqBoQ",
  "key30": "633eXvUC1DRTKo1StBzgGhGVBxnXqbLxZrAfWdVC6u35ZXkvjUZBFePjGgQKndqEZTyYNbR2Fzg81TTbdierWTwU",
  "key31": "2TCW84MzF2WEHnixEx5cKSxrBaD7uCGKVg6r2SkcNA3szBxD69G3rGBzYEpocqo6kTKN9g8FyaZGTMrS6EFaEVze",
  "key32": "22iApyg6dRfm7WQTX8QYEng9rbxNBPVsh1YEFKbs4SExc5m2pVax5kYKNx7FBo5aHcJWowJsA13JwRXtWsFnVMN2",
  "key33": "21whbPNQBqJ8nDvBuRcWA38MDDwPqExXG5G2aysBSJWzMX8RUA5ic5tzNoM5pX7E2W5tTZ9BuZhQakzRA7bKWgDS",
  "key34": "5uzWpxV2veNc7omrVNfqMVTCXTNNSPi1uRr2Hq3ddKvr2BkS1tvXoGmQoyPQguFdDBNFntMak1WJwvPjKa3UUiSa"
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

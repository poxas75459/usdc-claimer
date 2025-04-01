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
    "5rVFXJ2yZpA7d9i6FwQ9oJs3Ty6Ey9Z43BrFF9orMB268mVBUJTKJ9uVj6Q32snPikKGHsXfvoEZntRwfHKNCTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYdwZSmE7jEDcTkktFDs5xgjs4PAStFEWtX9ejeqryYVpHUn5vLcaP6qHu2fY1va9zrQgY9D5RW4sQJERuiF6Rv",
  "key1": "2yLYHSEbt2ZuL25VQ6a4hMHqAPq6HAHssAo7v34Kd7AGeQFvQ2YjJQzKwzCQNUr4MKnQk4pENkP7WDxhP4RRtMmK",
  "key2": "5vCfyJwSg8nCrWmbSspdbJdGgTc5XMWxM41WYajVypoaQJHAjnGaGvpvi4c3f2TJwStqA27c4yPNUd3vRvi3sgir",
  "key3": "jfidyFcW6xvPwDyiztbj8mQmq3VcEQuTmZrHRdhMzyEGxjFJEUhEcNBnxDJbfgDYPkL2AeFLw2m5ucHdHEU8sPM",
  "key4": "2jSXAf9MpnuTGMYUJGDhKbDjyaBEa3eYGPBYdTeotWn1f4Qvf7HwMwZyAqS7YsgeJABoqbXjRwn9DSsfZck5cYdf",
  "key5": "5GmqHtQgCYHUZGuaXgSpw91KZLq6PBBv1agsmj9trtjK4QnnDyvzbDVDRuttge4FjwhuZh7v9jsZmXVhp3JH4iBt",
  "key6": "26VHB42ZBQAydBdtChnKGefUh1JhxFyKo5GCR6v5dHRwEjUXRkMkf7VPH4BCjRiuvB2PXfPq1egtx23rv3eTiB73",
  "key7": "2Z4Lr1uTW1LLvAV3FXonTD6PboWRc1Sq5HFrSCBxAf8mobkvaQ8qLJexmY5UYersWumiFs2DwmijvxgNHiFkmWDz",
  "key8": "3dg8BM36bEzfcdZ1BYBfKzXMMoF66hQ6MpxN4ShbDq3S7Qyc9L3TGbiA1tXDmwSC74dfHT9goPeGkwJkSwRY4fsV",
  "key9": "34jk1MtxDM9zQsip3R8ii6wikqEYGon2NdtXC7ZG5hoMq511ddGeEfkLuP9HVqMsoxHmne1Rd3EEkubZAmJPtzdF",
  "key10": "5fBAcAX8HvNufnuKRtQBwfVyuW2r322UrxrKnbxWcQ4cCKFj5rNTVUEjqPY3wpKqRPZai8kHZvKY5qtETAocU7sb",
  "key11": "3GFzmocrGk9PcbCSa1RRzka1saQYUXpdBgkDcyh1YYZQHytcaqVMCj8LeSiBDAiw67GvT2nyTreD5t17X6EenfR1",
  "key12": "32tpb79zWnvnvnvQXSc39q2G4wibB6Se9eNh5XBHcPgx8QJZdu98Md8EL8viuDPTXdpPhrU8KTgg29J7J5EgiK3Y",
  "key13": "aWtcVa44ospCKRdP5GQtp3URFNwwwQPgAzkrbQJG7ujjrWaKuMGw51x94X2uddSZumQfEcG6ZqdHb2Wxg2MHVov",
  "key14": "3TKgXcxAYxa1pJUdgRznfYsGy13BvKEJNcLDWGWZnyyEpQgTjw1g89sTHiN1BAfGCLLChrkP25DQPRkyeaYAyMsw",
  "key15": "JgjGgzn8fdtZgrscUv4ThHp85WeUkVsqGVKyntJtvZgUzJRh2GuRNeGCDDWrT4h6AKFzRuuXrx8ATxp6zm3ceK4",
  "key16": "36NvBCeUVrjdeHt4joiWTFdgXJxuRgNQRa7WrqDQsUCCC6AkihioDRNEHVWN36v1SQU8vEV3tSroApkZ1XoibsWK",
  "key17": "3jy2UFkpVJuCfjNxrhJPtqGwxK1Wc29anXuQRvvzYNFfH718x3BChA5WiJ4Nb5ZrcahczsTjhdRm6oENZQ6nFyef",
  "key18": "3qEna9Gmum1Z1cbMYcagw38jVd4FQmUUyh5HTgdaZhkLM6JeWG3kSBkeT1QEvJoDF3Kyw3HqXgdUQ2jDLYV1vrBg",
  "key19": "2iYeZmSoRa7ybj37d2Dn3JLFzQfFbmxVHHsf7JJLhqg5TzeMNi4smyEn4i98jm3m5DKSXEuSB6dj4UiDBS1dMyWS",
  "key20": "58V6pC15UQHbZ5D5yqCtKD6uqYFLsEG2foVhm6VxrBzcacgTHZumsFKx6SLUpQVh1euQpcvjGC2L6vFeQYjL4j11",
  "key21": "sC6Kq8MMhT6HzKgFbY4q7JdA5C5Biru6rgQhAJzx2PJvbyRHMgBdnxJQP5BSnVhqSU4BuXQsvY2Lhp5sLeshyR5",
  "key22": "5cev5Yr2wpZHFtqUxHUJe2JxqgULx11FNGdJJaqRBdbVyJULC1XSRTzJUSCjahNYSaYt8kgFxhP4em51VtQ4LBxX",
  "key23": "2EpXCzeTcmSZ3EPwAYXqgunCn7Qzzv4o2F7WU3LkC5RMUhtnpaaEVeaBHg1mELrwA9ytB7vmHz2zfw6wKuu51eqb",
  "key24": "67RgiKQ8bgFSbomqbEQAzBPMTqyNczKKps2V5Pn1op8HahPo4mV9TEn92UujiED2BbG6izwJezCoFjju4M1tNMRR",
  "key25": "xy4XXCdeAhjZKuPJrSDNtJV1mf76XAUCzhFcALQbTjqRGuRstJLqDaEUbZtXGRkHokhGHnsVEyh8jq84aCd654p",
  "key26": "3bY75eMb5ragkHWZTUYZkWj1oguou3svYAgTGH9UKz9ksTmvmBLPQ3M9YfGPCT3SKEnSMiWRXnYMLagpWEweRZ6a",
  "key27": "5d7UMpMnEN8gewQo3kDWUUzsywrvfne7mgSWNidD8RzgBP46gUUaWnpD2qkPobhfy7Ge3pxrGMKc7PYuD6oAkJUf"
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

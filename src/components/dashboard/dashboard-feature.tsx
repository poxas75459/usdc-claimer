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
    "4xvDdMQ6kbzE6eQGd34xoJ6NdUenVSsyrMkQYu2RRqcYeNKLzx9dzjhxaDJqLaCbPd9uH8pyC3xNbALbGWNzP8VN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDbb8GtEqJYvBkQfK7WWfCABFxVdkVv1ziqE2Bs7s2H7xEpUoFE5g1cBKnNVdjxmVEGF4fn22qdN68UjwGw1pN4",
  "key1": "4YkuEtjXoAnPobu7de4na6qH5uRPuUSWB5QaSQCdpt7PEu6XXgeow3hZ59k5ADTkdfLpXNhZQBD3gMW51kMpZTZh",
  "key2": "2NtsAgaS3stbEXdCZWvctjXzaMU6b5eVqgu8XVW3TPa9wHJEusJHpMyHiNMkF95hfS9LbgLwEJdnY8xiW5vs34Sr",
  "key3": "onkNsBNiiQ5Cn5Lp9HcyvCbNXuYfu8rStTKpo9UWG3E8pZ1pQHfMqDVodiVuZ7iyK4JG9GGePaSSW2GbppXnheZ",
  "key4": "4NDP4Hpp7AhGn51RDvyxLFwj12fT6aRm93YrjrNRXqer4jq8QWELsdd5BrTNqF6VudxY9EPoYg6B1SRQiDwUGDND",
  "key5": "obGgnwdVFQ94KD79kVik6US7iLCeHpkcesRy7UTrJBRs6ai2kJvaJov35kKy2S88apXmuyEgcmnDquqTBNGLAo9",
  "key6": "2b1nB9q9F86cxu3xdE2yf7iCZhksRP2Mad4MBym1P7LoWWk3YByfW8k2yYGzesovzya275x79mKd38C6qdVaqo9c",
  "key7": "45t7Z8yW3DZMLq8bd3B5phk5HvFtu5mppev1AS6g484PCz4U4L7fpxzyrJ9RCnBp1kpy1ytryssgDxFzWCsvpEBA",
  "key8": "2nLnb55FzkAaw5oAGKhEQzh8wPWHpcy8biA8y185iv4oc1Bp26fijaW5QYJx15Jpsw2dPwoNatPpe8fToARyBjkp",
  "key9": "2QaqZw9wC1owbc7L5CPQYWA9FLmsN7EzrMebnAbCsDKcwWjuFsf1peDKsnbAWQ53bfFWh5szLphmKRSQjt285nWg",
  "key10": "HQ5GwAR1UNsqDkaGh7rMt2oxyF1nVBtAnDR7bWBhKrbMDyCPsPZdkjzd9EQDz5AC7QXh5WkDBzoV68RKd6pVpuP",
  "key11": "p2cTDWchfgVxq4utgd6PDY9YTTJg2ePviGenNpWip7n6fWnGsSmxSwUmJS6f1QW6hudLP6tCcTjbo7vNceCGC38",
  "key12": "37W6xQAsDzscgqeCydDUZSRnt5TKdQeGTsQQyiCHJZhkUL8GSgs4oWXkkdJgqReweYJtw5WVnuMhEBRs6utkjxoQ",
  "key13": "2umMxLL9zCviZCafHYFC7KfoHvf3UymUSSPNDEVoqbkEo8afkwdibhn7mH383vMZ1M9ZyLPWpccNYY8Y1tYsapzu",
  "key14": "4Tg86QYqMNmwrAdGtWF9xb7puVy4cLuYRM8g57rxGZHziF1uJUCcu1CET4tov1pps4qwjSCibjmz37CRifzhURD7",
  "key15": "2sUi7JLKTaWa1STtiY5VPTVE69FHKBRxsSVtgPjU6wnwFY353RPexvFnaG7zLRX16DtQ2XUKcs3qFKRJPTjzNWQH",
  "key16": "2PErvbnGr4EFdfSx3ZfXihDNJtupdrwM1beRjq8A5Hj8EgQr1rfwbHewUvznF8VW45xLatsWczSU2oQs693RxfsM",
  "key17": "48mNaUq8zNXzapV2cjzGXJ4YCH2VmVn7HVDWQkdtxUJNk6RsJYUgSpGypHkyMQc8NUeMCt8Vacrk1kdzczRonUuN",
  "key18": "2phzR7EB8krUF7a6pmi3z2FVjZaZww4qpHrfDE41C7qwz1ywypKd9JocpJC6pVbiNbDC1qNFcte8TNhC9m3TkvN",
  "key19": "U5BrDrmAdGS984q7EdoHdJX4G8jHqD13hY6FzLWX57mAJcZEAW17p13hVuxwmBWLD32ExqqXKVH8vmVo6kJyPdL",
  "key20": "4xW91kAZEmFyGCeawGFqqXoNNSBJEMnDT9NyoRBSw7WEz1dkSHr6y9aBBG6ZFh1P3W2BSdTqSwLDMReL51BevCS3",
  "key21": "4tL59XneBgnN1rTSUSAMjyVJhnvnEeun2icyPSNU436cwfR5t7iH3V7pC9G2nEATDWkc91KVxxay2VnnnGyWryUd",
  "key22": "mhEr2m7mse1ax6gVsF4EsdY5oxtSN1mRw4EnnfTTjBGEzQ4kfc8LypfC3svzdTetwaNi8PUe3JxeKEyZcgU6bJq",
  "key23": "3hmtNWxPggS1VbibeV34a28y4HkU4M3xH9QUnYo717sPCWZthvXWPid8NZEir29ybi4Vba4YJnx6oZDeDog1RiuY",
  "key24": "3xTfV2L2tDPvxUtjohgbXnzERJrwoof29EpHfH3X9mfyWa2RQwaL9qNanRTxWkkpnhXNm3iXnUDzbi8UTq46TsFY",
  "key25": "2akWK8bqDkenPy9YbzsvfvisEyTJDHgLSVgxtrewnYLBkxC1fCWZWZ1MnZA8KdnQyT9RkGfCAgzCjBJysARnEG17",
  "key26": "2idiSaVSa983br3dChW175xrwjgAMqvHmeX7WGcYNkikocgFqR7hKUbLs3hE8BhjEnhA2HmcxfGBZekFy3j7t8Cy",
  "key27": "2hsufeqPEB283VaTT4if5y4V5uHuCSV1ttonEsuimR6KLoMY29cqwr3eKsPhY9gAeCFe3gM49okPSayfgaxA6FYe",
  "key28": "33yifoUkuPAcmd8n9TRXRTnWTtf8c1rGGhxnLrKiUeABpJw9kCK2uqMK7AeCvbDAnPhgtu9HpfGbPqPZfDUdqHcR",
  "key29": "5Zs7dMRbQcc4VYG7RG6JYp1nF19zLVDtS9cdemSZ3ckskHVSgsXcZFgLzJnnBUCv2bMxtRskA2X5Mx2iXGyR2kDa",
  "key30": "3t7AGVs1oFt3uTHsuL4qurn5J6oSGyKiEF3NMDqUUGkvP4GpZE2cubVR9EYouvdQsXVmVQF1KqruuRk5UecQoqQM",
  "key31": "33GWXvKSTu4pgs9Jj3f3YWYUUhvNPD8k88tfLkoj9KG8Vskwf14FTKhwrWKTNZ9rrptcuvFGzcuDNwcRyjjZFQPP",
  "key32": "23JRo1S9Z8JsUUJNM6togQU2egrboV4oAvV1NAmnUWb87uxxUNmJK4aqTTSqBEbdUq6fTqWnU3wrHBQDssdeMxcK"
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

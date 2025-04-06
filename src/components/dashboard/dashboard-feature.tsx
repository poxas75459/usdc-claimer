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
    "KLZhNLah8bF5hn7PbdSeKDgHW59cXaeG47SuzgMGdYv3PJNr33816F2sPpUsy28mUm7Ve5DQv6NDPsXjkJy3BUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1uKkeDY1tSf7tRVwAnYbAdKiMYeCdtVxq7zNseM7XJi56ZduWVq9Z6bGkyQQWFBN2FLMjTb9uhHmFcRcjiTSqo",
  "key1": "5N1E5NBATucAVUNXKGafuGAdW4KHXhnaokjizXhKRkQt1QHiULHfxfprVqUVt977YsPag1WYZU98ApfAwitELhGq",
  "key2": "3HcD4r6CPHRXwHoPJ9xVyRPt5AmYwXWURvsx27Pw5ZYncsPexfJ641XYEANQWJfx8xY39XaXHW2sNPZ6KDz42NbM",
  "key3": "uv9J2CvBy1HnKRvJTh3T16s8dQFyKk7BoaEG12P7vJ3RmWok54dd1ik3boVNTnbByewfqu3SxGkE9MqY8TCjAKT",
  "key4": "5qbT5cWPDG63gwYgzp73YxeEyR1heoxzD612cHT8zzumDcz4U8xuRBfXfz2ozCiwXcXyS7KKELQfzHhg9esDSv1r",
  "key5": "2Fp4vZQMzKVSv6n3rU9ojuCHsyVingxS1SAWWx4kZT2FbdjnqwUgyJNUi4U7DvKpvjwfzxspogNp74fEe3NmRCoS",
  "key6": "pFQU5kaJPWAWir42AUHL29mPtPF1Fo7HMaTDWbt8f2RpT8AqbFJkW74vwccQUHKkxAwjaCVUY1PzgCabJrZNDGf",
  "key7": "3pm1FH5Hh4JKHrHfnNUx1Dksf7dqeHwwKyKqahWyW7gZVRexpFxVq3aFboXxyJiyjx2nZdsriQaXcUefCFXr9SpF",
  "key8": "5TUjytnUykueL7BfuRMtmTyvXp5MyBBVdZqHxSuogy6MVxjWmoTwi92LpGvLbGy16Q7cvYGJgTfLKijqmRPAWag6",
  "key9": "4Hxo936emU8JNmY9CEw2gXn4sRXwqdxsbjM2mjGoMpvSp4r2bkcA52B1XUYwDqr3MrnMfyvwEXuqijwKr5d1g96S",
  "key10": "23kJyVcqR7xKFvYjPC5eJGjbEptAG266iPNNwESGDi9FYyJgQ1zLEKytHi57kBafzdNUbkKciJdfqbTYRxJghZxa",
  "key11": "5fkb9bz19mk3DbQ3BGVh6suLuFgtK4qxgyJfuCdP7nWLqCguiS19Eh4DLHAZCEi1KmJhdj4JmqUN7xfmEd5RtYMf",
  "key12": "2o2GVhH2UTqHdHFfwcyTyQBhQCiNYtK2DaiphsNUDkEXw3jX5fcNSSPfWGjVrm9jfenskN37iyYegZDicLorPMNo",
  "key13": "5KTWPEX1wNYfNFzQpZara52qPBVJJ1YJz94Bmo9aqrFr8pw4XtfpDmBUENqNU4QvrSsQQABZT8pMPk1v8KHzXR3L",
  "key14": "D31MyR9kLRt3suCXXkryrVgxJNKjhoQKc3NyhW52wp3aSwRB9F7uANNbiVDSerSnPvn76q6uTZXeBRs8xCKdGXo",
  "key15": "6H1kct9LFedHqGYQoreXE43BMjRUPb2pVkKycths2kW826FAvynzzAqm4copQp466ij58DR4v3MiSwj7QNsWwu5",
  "key16": "3Y8gZ7gLXwgAM6RyXWwXRhdL6TPbuM6faqEsEmsNXA57GBhD5CRqj1fPt7n1bhtKmFeskd2CVWhBYJHhhRK3ktAL",
  "key17": "KMWTtcUfu92Em276MQSakT8pe5nKzijeVo26zjdK3NNU2VwDqYfKYnXBHNZYxYrJTdHE7qAxoSAvVbn24Ty93at",
  "key18": "4f5x4uJyNb9aV5vra2PBHZN91HSMcrxi9KueWdQh7PTc7XmyiMrGYsvXwWgZPPUsNPRzutB2EquWomje8ypCZEuy",
  "key19": "2j2WHTgnmeZwptYcgFWLrSRDXZn3b16yyNXMLEe8oboNpMQBRk2SbQ7vMTsC9MmbsTWCacePvhkmJo73ckzCYZ2b",
  "key20": "4JZWW3gS4QyPe3f6rc7EwxAbt6N5MTpTEAN9Qme1mYKJbMDe8YqzRibw8gSp5yXxAq6jq2u63xa4EjPnBbLWUTB4",
  "key21": "2YaiUuVq6XQ4yoPbvpDCXHtkDJakcgF38jFpu2K2CCXLLagEdKUnYcvSJvsWQqVSSPNkE6FZA7uZpnwMWbbwcsEf",
  "key22": "4nXMi8YqnDrDRqR1L1gQVsPV1RxPfJjfYPTR8voaqad8WF9m1Jh7Z1C6CmfS9wbFcoHk9gUiVYj862yyFnE2P66i",
  "key23": "4e7vCRCohGhJp8itz8oQx9mtfTTFEHeFj1EMBhgNU1wuXuAHcUNkfEDsD6KhSDxHbzLvuUA39JNJho4JVajmUYTN",
  "key24": "QXiEpeXu6aW33MzyNDNEXfSpnyMvbDsGo9bNc7DApx9fUaVq8Wn9EcrtKowGZTSQMdNtf11tPWF1AsgRQNr427B",
  "key25": "3u8c8nWEcWjrhowLh8jae1nuWdbYGkZQN8y1hsyHm9vUpseP8Du4wRuRTYWvuvKoYmNWoHZKYPYKVdFSYAk2ccCK",
  "key26": "fCKEHTi7yXHhN9HnXXh13Z9HmNUgtF3ZGQsX5MXmvouixcYrUi3EPnFANsQjLwTAfW2jJKMAzTVkCQNKc2QyrUg",
  "key27": "242iMv8XSdTviPCtwJMLPsVBSHj5rXLZx38g8P5qgCpACQZ5kwiBfee5wAikz4MUtXW1Ah85GdxXbY142dgWtcdw",
  "key28": "3JumrYMPMnw7nxhmkq3Xd7AXWQu6Dj6ZbpxHhB2tpbVjXyAevRuTAGyybi2HWLSWdU2kdkXKaEJoJ1c2ocAy9Z57",
  "key29": "4Cafzt1ZjNMyAj5w18aNoCeCLzCy9h4rtLQqN4AYkztFUfeo7BCUghdZ3sNmJA2mH7y33WXgK1xwRQxhcst9ZpQg"
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

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
    "4FpjGVUjc3irwCZb3zCXEkC8gx1maAXugMt9pLY4UJEo92eMdAsUtiwnta577Uom36zuBTZAM8Ry8Ha4Nbf417zz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FvA8DWtAWAAVhqvcC86DAFkYGjpwPBcyXdpknYn6fGK1bG5KaNkdWPpCHLqYSq3rj9pXwKRvEPoJn9bC4kR6JK6",
  "key1": "5u3FCN9zHubArHERq6utAW2QP9HLdBq4PZ1kGKX4HVLooHq4wxs4kNUnUBVYNfpXZsbj1yUsyHieB3yDdBHP8mEp",
  "key2": "2BCZtbdFdqcjRVEA6137rYGvrKi8YHXYFNbDHqXssimY3foTcgbDgfYTvmgBZydz2RrUQQLKEdKGeAgSeg4JP8vq",
  "key3": "4XKTvbqWTBXcTLEWXxaUSTaDF1kU3Yxb2ELRbY1Tig2s1ErKhVVhyJvVhP5MU1EzKQvV1PdwFfo4Soe2eaNX3qjk",
  "key4": "3rQCJFk2PFn1uF7U7QUz2nep81k62koTpzkH5pYVgHJvfzK2a1mU2Kpb8YRmUFXDaMHMUbpkAXFMhAA57N3ieaJn",
  "key5": "5LfrLuk3URjx5PtMUXVL89Q2V1U37BbsTBdS42b8fZk68qbE2w4mTVa2WUPuqLwGGbJNWLyUhBowcoWg6WVNgPGh",
  "key6": "2kXJuXadjBoeicxDAFbWMqkBFqasorr2kzP8zacmc2Vhuivfd3PHbMfFvykrCqYRCiqiQnMnrdaaoHx8XWctT6gr",
  "key7": "2LH1zy9KFASh2Cv71tRLKdNyGzA8d7uAZFd1CxnWT9XW2rUTAHyxfC3E4TJMRXHsxUg4rgGimAwdebmHs8CRi87g",
  "key8": "62XKi3mAhjv1iK9DRsgpK24njRgi4bKiyxY9iew2mMVZHVDcW2tnUVudupLeHJbkG4zFMuDu65NHctdfb41sjusE",
  "key9": "w8ad6kNSFjT8XsnxedfB3HLrRfqN8qsvNVqo6mNydW7JuuAdxtfVGox6oKeTLcm5pUXbm5EvepWgn8xicUfRg6E",
  "key10": "53EqfM7pyy8WPF3m9DEzExsk3pSPH9jY3Aceqw8hxVHDNwNG6uYEuegAk4iwP64BNimQGt1sp7AM7Px4JJt9ZRiN",
  "key11": "2Ea9wBmEQc5DC12yedY25jVgTMa1tTWkbiNUowCH5jRYNPwfFm3Gt2YG6ckHoCZ6SHJhfuSEE85kcsHLSdS1DBPa",
  "key12": "2g8FLs6e8xqZBRjHxQ5oVHUGEbSQXZiVmWM4twfve7uTmrJekV7nEceEpVgVmroHkng4ADXrXfEvo6KYP8frHMs9",
  "key13": "4Skr2TXZJaP3Vx4tHexC2Mx46WNHAXcQx5Nwr7tXj8od6axcpwiY1uBYrYRHsjZVs8gcyik7WkAXyzh32zHnqz84",
  "key14": "CVP71DLA3ALLhrwHxU4JWFN7qH4MfKpQ1vxNCgKfDuWoEjAgYC95Xz3MPVskDzciAuMKJmgrbott8ZzWtv7UqRR",
  "key15": "5F49GtVo1nWeVehSMiNpgUVEFpycwe6smXmwF4zGTL5zWQ3oRqK42zVjgzdrbGdRFbbr3mKo5MDkeAAqL8LFUP4T",
  "key16": "5GXscAMXF5k2KN8XenrQFTAMHKvxFNJrGsSSfEdPf8eJu4GvbyLhE1JK3HFCw31kVFxfWKZxreV2XwMWnxbTH2RU",
  "key17": "5NHvELiDqpDNEdRFhkbCkw2LG545uwFSH8PAHNyrt9TErV7s8QXmEuqhMVjCAK3KmfinbfXu8aQrioJVRtwkHPVr",
  "key18": "4GFmJWzHzvRsAQHfQAfhEnsWEJVy2hnhWGyiQKsPRNhwkiLRgbjJbX2ED7uQxWJne4ShTqE7HqzLNEJkEHmN3Frh",
  "key19": "2tr3krKjNXK86dxh6nUg22eZaRiQiN6rE6WTUfZuZLB3Y1xzYNUgruLB3qgu5miYwFv1iBPt5GrxCN6QMkmdsrRB",
  "key20": "4wadrL5NmFWaMTBDbkZqjbKNgfdvjgVTCbKJYiQfMeXyVczqeqQbkQVqx8eX9rGUMJwnEz1NbyvCVTnLu2nX6VxL",
  "key21": "2mZrRNfhpkGQxNQsEferEt7jPB4H9rjP2gYQuWWhM9vWMh4qdxCT3XagpSSXhB5kn1khTg1FRL92gEmx34qAxUNx",
  "key22": "5YKrfynEvcyhR6rsDuEzi2gHLghoSNSBK9mzUbXga6mhqsbkv7tGApzfsnkrRis1ch9cUBwTZQpBxHtPQZH2n2kR",
  "key23": "3AoM7w4p1h78hmxKUBwg5VJN9a7me5NQAg3yg4YFoXK7V65d2sWaA89Hi8tG6G8SHfPZmbvKsC9Qgg5sRnWehChB",
  "key24": "5oKcuDwiRkW2AhWbicMPkoSRMfXANSNhyqB3WoGTX7V7YAdXKvB4xCagsp7GL9jtPoBWdMWRmPX6aJyTbuea5tnN",
  "key25": "3HmazWgwVAtjXrfLFSAaY7ySf5sEVsKVZEwLERAbbvNKwpMQaB2vxBXc8ZXhhd6vLpgrL2jQp4SkbotxZrHfYYxj",
  "key26": "UiJE2Xdwic1RbR2o7bJCfZ1A9WSTYR871nbXL4Ag54Vpg6RfQTtmwxLsCZJXXavUai97FQYxgNsXEVdCWJcYtxS",
  "key27": "3osXh7KUPaZyxAg7JCxKE5UQGqCc1N6bzqwKCkJ4jSowzhqhENRZe4BW2KboXqbpbaePni3Upxfrt8C29BCbvkcb"
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

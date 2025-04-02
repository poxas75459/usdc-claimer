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
    "4uQnBH2J1uMjM75PKEmBqPVDi8nJq2baiG4Awm3zdY3WAvFrKMDaGF6HaQoDkQCZCFkCJksQZk2mgDaDVjSH53Zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ChUqodCm1Q9Jz7NaVfTXWL2xH5hEux8GeskstNgJNzv8NiKsdskYHt9786Cg9PznxKhphAyEmQzUPyef82kBcu3",
  "key1": "48XKJEoRHqK8LqSdXVw8SJki8qEKVLTCiH46mDSveG5tXgPDj85zbkdBZGVbjsGjEJMEtnm8bUEfL5Jybd15YzEA",
  "key2": "XPwEZmaKg7AwKEhwaD4ZGRgShMu3FjvZ8dYZMNPX9MFdVmmD3VE5BJDQmT9KBCNjkLq3k9zPTTMmaATdtKetRrL",
  "key3": "5VLtvenDztobq37kYDrAmA32oiHJjwSyutvdoTdhTV175fb16ogDPX9L8LzkioUpy2DmARaej7qfXNb1RRUK8S6d",
  "key4": "3tBu7fTPZZ55n4Znfe4Kj4pwMf3fM5jiY1hn3RuMHxVRPd8Kxyh4NkxJbFD41NRH379JVp1PoAf9Bf4uJL2dMtsE",
  "key5": "4T6sYJ1FkrtuoUupuxzg7zryKKfx4wZjC2iEwcVtApKHR7JmyNa6bQD5QxMBTfdJ4GEXSyGeEkrrw7vYe6Ng8dr3",
  "key6": "4kSxjRqb2kLyUSozP5onrwAG4nB9hPsbdCWGLzXRqM588MMRYew1CRVVKTrZEASY2ctcn4Lrh5kjGvDHBvtFBhTr",
  "key7": "4pUBLbvrpHc5g2WrgV4mrpeZ44NfGUtNBz6fNnSB9HtEYY7k5ts5vxcYnxgVjVyjwAhBbdM4LnKDsDT1MpjnmqGe",
  "key8": "3gLxXZt7TvUdqSkRhcaJiP1ex1f7YStNriPMyrmVi6zYyybAwSJzSGroXrhNioaVZMfUruWYRSVUJepwbMSHUHhh",
  "key9": "22snPtPv5xccxSfLSVp1R1MoFzKFBcREqFEGkvMhy3XQV2fc1vvoj5pDF9bTmbcovTWDCUrWbo6F38iV8BQeBYvQ",
  "key10": "2KgMtFEg3TzpiMwn7RZijM64NamGsgrmVKXs9NYzjA5JL18RnQqCyzrnqwokzv4wQStB2K9yW6j9SWYTHqh9dS7F",
  "key11": "5v8yb62rHGi6W84F7JQdf1wZwNGpJ4LYeMqmAqVuiwGJRE5VNpK7qki3RPGPtdPS6NLNNapwpXp6DZ7nNkzCje6C",
  "key12": "3yrxqK7RR196d77HYUjggZRECVpjazBsuAwY9vBDgqM6usnnoBYEZZeCiay1jocw64bLG86wHtzifYovZ95GKLjS",
  "key13": "5zTJyPGiznu1eZw1vmJa27CZuSjVyCLnBbiA3jcHrkVgSY7Q5vgtWg8xEkThtBjwyxXkvDYeWSokrmq6YKj4YVBC",
  "key14": "5KHU1aZbbVSa96G4CvT2Zgj17eBS75UitKbC85JotzJNEoS7SE4A5WKCKP8E2n8NQCLWSrhRjqR4uzHyPNugR9hk",
  "key15": "5oDGVq8DyESgwXtn7A23SSkqCNYQAPKnM9fgrTNmQPg9uuPYodRUjzAdUAMCExVjknyi4ebTu5THeYXGS16gewS6",
  "key16": "5zC6qa5fPHrEjqjTrodrAz2ghzwkm52EENc3VW4TJwrzYyQ2ToQ64gRue7f7SUP8f9KMAnbfX5pWwKX8NMMVAQ2Z",
  "key17": "41vgTGcEZJGspY4pQ87QVXVme7v4Z4Yt31R5FisV19WXKoVdeh7SRgWyL8TSENq2rpuq89wcEcvBZBzaxpW23W7N",
  "key18": "5BrfQNXvZdwS9GURt8qmB76ZuVPJ9rC9aBBG8cweT6zHonW1DJmVZ9fkRN21dfyuUeKJfjHyi3W8MoPBzfX7qxX7",
  "key19": "4jRhmnC8V869MWyndMn4xvY1ggxeaxymjFKKDNj2h5FGxbqCRTQ7jCt9xith8im1XzpWPAdEyX4m7yoruW4MUK26",
  "key20": "2irNdnLFMKFZrrbLeSHReen2UVkSFtAKG8oeKL8tqE4HX9yb5tX7S23Vbt3VJyhjhbDwvMrHDijJbKrQikzgSxMU",
  "key21": "BypthNgi56uAtcNndTWVgGqdLXPNx22WMx1DHrRyURXuGUGfLLWcBQXGyWHgNuXd531VBrBCQ7N7vkPQzxF69mj",
  "key22": "3kMMmCUaMtpPaup8Ec85FLxk1LgusAJevDKB1PvfWuwhXWwPkCjURcnHL3wgTmxas1YWwbi9TfMyoV26dpVVkhMb",
  "key23": "2NyRVqBMFib9Vae3bjQK5GbvULkjfPzXoUYorjZVnzBU4ZQUPSC2NiEZbvNyubokQN2skCwwysg7rgiDnwUMTVhu",
  "key24": "54GkiigUawL3bi9PDKpA9d1KPsNnHSfCrxLo4d7LPpoxBcwd3vF1icVsHuoeotwVruPFus6gybJF6FQac8h7nwoR",
  "key25": "4ujTdAtH8kW4EARdqpqohheYEkxq6KJq7vGGUDuwYgPxZoYkTHrHpesNkE7UEqzSEocV9Exz4DjULV3qMayDSsDZ",
  "key26": "37Br1Yvt3wt1fzyxHWw8FCxHaiYehSkq9Bvg1BdQVP3VeeJCTfoGHy9UoL29NpkFdEdwqJpbm79qwxLGDCHrfS47",
  "key27": "3uzJ3hcTmrqVn46MyREnxb3zXHY1Mbmj1FsWxTRd8fux42nWCVWtBM9CQYcKNrM8qsuQiNLd4MNRZAS9gZREVMvQ",
  "key28": "3fpsSkdFc6cYjXr3GQU7thW4dVaxWSWw866ed3ho6Bbe3vrwW4YwX2WmwcYdaQbzro7Urn2mnJQM4sydkL2YfWs3",
  "key29": "5tHSzXKWWDk7JBaWvjkf14h2BrhPxCpGdJeU1dVDxUNfSLTKCjfPbDGAFy3kiSumvzPCYdoDVQvDvvRFMixHuxDK",
  "key30": "epyChe94YDa7CAin3peR7BEfQnzw9z8ZbuZ7RqLqJb4zBjtkxMckoDX2TJZXbvLyG5bDtvxAvGxBrdFv1NTQ4TW",
  "key31": "5wGMGaAF1AAc7wt46W34Y2YxaMJ9Fps9tLzw6JLSyPtweCJ5H2kz94q2YhXvv4Nz4DLHKHb7a6ot2ugy8Qop4EWZ",
  "key32": "4t7H9AtUUio1RzQdmq43EMQZTyYKYn7rtp1CEANZEMosqHYwg62Lwao2ggweiBJbHadnrLnYNmci7syDmZrzrnwS",
  "key33": "5hybpMCZazbanWjZ82UaqWygEHzA9hkqYzLTisJbNjT2nczQfWUAvT9ozUJ5RpSe1cfsrXLJ57Gox5cRzdhQ44wX",
  "key34": "3oTe1NcJk8zfHUMpZMBAWZcbGevdDudKqgyLYcAxV4qk54Cqwsc53etzu83kgpTZ8BStnk7CP5T7oGGR1Qew9RN2",
  "key35": "4AJWkG6Uo6mWr8B1uVw7YMbG7oV4SXQo5Z6BK9UrMk6YMAcpAd7Hvka8L4x3fxZENv3xNZp4Efeuy5TdEwoWZ7Sk",
  "key36": "2XD43Pc4tots7K4DHGvVFYtm85UHRna4iNHL1yC2TdDywxGtVkQWp2h2Zrpy2X1TD7pKZYx3YBJwCUCXb4MfJgrA"
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

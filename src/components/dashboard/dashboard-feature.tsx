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
    "4v3gxA1Cw9pin47uo2Ku62KijSe5tcER4TfjZ3o88qrYZNvZnN1pgS9YBGiMhTNfYS6qiwCFrJFAGz9CNdp1DraL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iL2bauQyWBFEoPkV54F7NhndtmNH6ce8N6bJRnAtJ5BN1LxqJ25Ahs9Y9MRAvEk3jdcSFvqKwpZPm1iqEstJDK3",
  "key1": "31WhsZHQKXwcknpZ42KcR7sxVG7UTMmSGFRkuYbkryHAMXZSWswn9j6frwjwgBUZSsP1QrZBwcBFahMk81fJUj7c",
  "key2": "23wMjbPJPR541XYQJp8ia6yxzHcBDemTyQ3sTDpNxVtwZkZfW3RjLJo7R59RYGhe7aTsaNGdFywA6R8nWn25HJGn",
  "key3": "4RtJkE95jUec34aEmWbmCMKYhysPXexSYDyodXzdgLf5JH4N3w7PWzt9kF5DwvcKYWjoK56mpGpGzKGJgCpsdQZU",
  "key4": "4L4ckM8SPseSMLU3b9iEGoHczXvJZneaa2ci8m1DEVN2VscirWJ7K7txVnApoVGCqxYVTcG3Jjk8aef9UEb2uzWw",
  "key5": "4jAeiFXiyPvR3w3A6KxYKoGazfaa69YFwfDtK37CBfANbzNf9HnyPQjQ5divtAkEuP21EMzaRsLSSMJKj7xH6sMC",
  "key6": "2UZgVcC7eceaTJ1ZbKE8avb4cPd8zrYiWzuWnL5GQC2cjUq9rQLU4dHxZR2LntwGaUuw8eJpnJJjkQpRxwyPTMs4",
  "key7": "6EtBNpdccJ9dKicztskQaLFNXAunodp3wWdNaXK6qGMkBsEyo1wLb2YnjuzX4L54W11jbRfTizxLYsZeWPLNZLC",
  "key8": "5gzQtz5SP1Qz2C3yYrRR47xdgsg4YAwuPi5s5sfWkVLwYsqNbMkVjHfRVkEkrpZnCEJPnS6w5uNauUUyp2ado2Pq",
  "key9": "5UzTtfi14gwbwKLEEpRFG2V1Rx83MTzx8x74guqWxu6R7V9YJjiNi2QX9PL7pdbdvTyv7XpxUVZQJ6NNZSj1peNj",
  "key10": "28sLnRMWuMQ9KkvJH4Xzk9hTuq6pBDuYReDcT6aLvxwCipvxMecZ5yd8dbk1gr5vtGZy34cGL9P6S2XvpSgpHi4t",
  "key11": "32QYipfSBLkHwhykFJrRWK37hKLD5aL5eS4CLimeH8b6cJixJ5igQBE92Ge6hKGcbgHJk3nExePmUCvcgztRtDSt",
  "key12": "oxAP3f8JokaHjMWNgbR7QwsUWXVEry7bcC2v4SJkt1gHXahvcVRwwgKdApMCZTVqwMGf1NanrVCfJJKMXQZo8n3",
  "key13": "3W8TFAz5woNJEQeBfZ47fW8tJJdZGztUKF6PKKCgTjKFPdnD3S56WmE3A1zh83B9Xsft1eN84dF2fb9fSMpYR1hW",
  "key14": "5ifvVFWkSUgziWZwqsL6CuwHez9QESNCDqTjvYFqPXFx6b4DHCBtgnqjWMpFUUt6CMBwMCcB1yi6X15bfdjdFLcK",
  "key15": "5cLhpJTJ7WxirqBNrfL4UYpTmyWVLgCpEZrvHWnxRCuYP16TGbPamhMGm7TwjdhvD4ogRrqs2jEwkZ9JyuQWxQaV",
  "key16": "L1j129R6nkDNxSML8YLkFBkZWzAp6So1MC9goJHpP3tcUef2sDkX88x13HJuVig2ykKkn4GHJqRtKmiU1iqQ4Yb",
  "key17": "4H695fvivojaqELFN5H6HDNDMfE97bwnEGEKx6Li1ZbuUDxoh3kCnFQYF7UPZYy3FwCRZhRYk7ZfzyZ6ivMXMafN",
  "key18": "5TE8z3YRNtgfb4mco92CBRb9qDqyCjLyWZ11GuErDmYzhzsFVrnjgvr3f63v2yfDPhujfDXyjUk1wUKTJ4JRSt13",
  "key19": "3XfSJY69ECcZJZaS6AMGtzfU5zo7G8yTW8eK3wBRwVCe7AeLRKytLLDP6FREk5F1RSGASNDhifF6u4gW2cpopuxb",
  "key20": "38FLeS1ZvMLfWC8Q5y23hw5n1QU6BXZvhA6tmzYpGM7qE4dtY4W4zUuYUVYdVEJVZ5tzqhoUmQWCVBm25LCfLBzQ",
  "key21": "uafapNgsYyfFfcf83qsosMdU8moAUvdAzhMu1ftWbhV3J7KB4iqqH8PEPX9fTbSfXCymq4xHyJexvmVXQetPbFc",
  "key22": "4kcj9zvJS3wUz3Yz6JBMdYVxpFHU99ogffd2wqwiVnFZ6uf1DbhfZv3AjxMGp74cuWbHf2R9Rbn1KYcjCRTxGHXP",
  "key23": "5Ng5BgFSDaYExm2gxyw5Ct2DsgtLETGob7ooPmuhZbT5RBDyf4ugHym433p4KoG9XbXst1mmjoKR74EBUG85hvGX",
  "key24": "2ahDopDFD5wRFALwf5fRAtpb2MtiB7nagTmmWhqFFbGE6UYGjuB6ca58yCTcN7XWPMLvHddU5uG27ZNRtpXvwrqT",
  "key25": "2seWQtL6SmBmPit4sobKiTH8bEMjcdbDbrpCS26ehJXPtUT6UjypzUxXEZsR3jhutG69uFg8pDCBFa8LABDKnSTh",
  "key26": "2sTWe7qLJzVVP4BXLzZHZ3D9Ubm79yvimCeLLTezxXUGsDvXXitodeSbRUJQwSPA3hir1dyTjqBXAHYikWmmvMoq",
  "key27": "EpTmhLE8sna9kH8tXsoEJfrCxRD8J8uERQUU238xGRUUuSzM8Ryc3ncb2hyLweTkV9qJ2joU4ZrS77GsMTcbdoq",
  "key28": "3PzWf6FCiHZWi4X5udF19NWF5rTyDvLUJLjy7QJ8wZC3chHdv3vmvBnybuig8gERmXqrFYRbYDNsHzzCs4AU9qhj",
  "key29": "55jb4kcCdCorqeTDyvA3h9yJaowT5JEBeysuk8P1ebUh2mF6ZT4Ba16GkyXwTYSpjDhcVQBShhGcXsMPqACtu292",
  "key30": "gnRxPv1KbUML7i9S9knFDdH4Zf8BZ1BsNo6EXK4tmZrv5mYZsnGBeHZznDHucZDdCvyKuxu4wfv6yWKTsr88N2D",
  "key31": "4tq5pMe1i8Cixvtu9NnGjcHBejEGwHaQabDXQKyg8uTa7u4Axd6YCi5CAMoygQGfyAFjUECunumRHXskGSPN7vJX",
  "key32": "3KzxF4C1LVubykwM9PPfhcGFXJgWq58egG7VR7LMrRDY5XRUwvjNZaUAv4dsqPY7hTMLattWNzpssNSdrEtfBFQN",
  "key33": "2gmmCq54Y4FwJhFZeAUrZ8YuBJvqSJjPGV5hvKKCRmeVHXRG6HZoU9NpsktYePHyMtr34Tmo9BQQw26RSsTHBVaD",
  "key34": "38E8mv6QapvgaGDfzkbyLwLfSdvBKc4cuYd5T3NWXA7cfXLSKAuXMR2Q7hshpPUE4PgkXmwVcui8RsQysQCMAkeH",
  "key35": "2oqcBWAwiE6hgdVzpb443sMmZTUdzYHE29XSL7LU6KwRx9QUqMYh22m36fUkybrBrLtuY9jok4YqQBxViUXiDT8b",
  "key36": "5TVNW4SYZM4XjrSFajKAAWEZ9EX5c82bkXHqhWWamxiExCFTnupwnnqD3FgWJdryirTCKbt6BJSxWh9MDEGM814",
  "key37": "4mKXAAbBWhtMwTzEFKD1QNv6AVifpWZzLauBCVnL1qewWJEASaMbi52TXfNqCYE4nZMbCRmj2yci6ips2aFHyDDH",
  "key38": "3yH1Q9LYdwLtV1iQAgpHufdtn6TmHy9UEVpGKHMzQ1vsU1jUVUuBpjs2xwyaRTvFAXtDv5dTe4z5T3Jk8KLXRAo1",
  "key39": "yPy87QeVmdhdFGwhH3gav3TwTNHnQZ7M1fpi6Xuc1FpgsW8wCmPngpRUpYpkTBDScPtGzw5FAESE8wioyUm5sXY",
  "key40": "2UmLiPwjmfnm5BppHzb1W7DwkverMd8qjtkXFzfL4tVmVee9pEPkC6Q396MQNd59Nq8ocNDUyUBubv7JXGzTM4xf",
  "key41": "5npVzN6xrWCVx7WVhpnjuvUa8PZLmT5LwxurvXyUGcecdvCWc3ixzgTYjthBtqsja96vSPvUbohX61YUCdqZXc8S",
  "key42": "32HNteCHAd9VVxAnedpe9Aw7ev9FNvkL2bfdqcsKZH2Cw6tyy3xG8VNdW8jm3Mnu47jNKos7tkY4AmvNPZkPCunj"
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

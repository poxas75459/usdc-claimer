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
    "5w5wkW5Foy8ZsmaSjgRTU5wnTqdNSFzG9duGcYYmvnEiAco74gTfpRnbU3BkWXkSWJcRVwaBkCNFwDnankqJsYZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54GaNv7A1sN8CW727GZhFHmpJEVJVsQgF3WjaVDjsd5NLeTaBZGK8kgt1RtauAaQ9pP6L29oALbHmAx2YuSyeS8b",
  "key1": "3syBhX8wMrveJNb4zgp4cLZTTqLRSxwf1MJSngssSVe6ZMYY6H9QS6NBbj5dMkrPwt8cXAgCRH576VyUNTxnadmL",
  "key2": "3T4QPoqeQdjmH7zXDqQ9bYEeSMPF8S6rsd8zuSQ8eCaCMq1QNvJtMqJNB47z8Pi9mb15jo9JGrSmZ7KX2o7Vp3vu",
  "key3": "4nvYGSJDcvMHDseJs5kbd5JKJPo8hbxPbg1Px5T4ksjvSsyHpXpiFDNHByUXy1jZdVYCygSoH8vem3Z12xonjdiP",
  "key4": "4QR4oShWwYymYjfV6G6MrqQJycr9bQERvwb3xSGKSWWiv66zP2hmQJMk5RrdaWTjFenCyN5TrzX2qMLusACSVU3E",
  "key5": "4kV7KM965CixQWub3YP5vtJggDRh7aPHsVWhRVBHoDNKRYCxLjTAYUmo4k3RbB7atNXhhuT36gXCE6ZY3e1ub1QQ",
  "key6": "2w8Ua5RrWskdgjyPgUs4WhbYit7cZw1bqNSoXAbUemMishKzRgJDcjyGA1pAxQzkyKKN886cWa9aYyT6uibnpYTT",
  "key7": "2bePRoifqcec63GFaC3oiw8aGiV3Xj5mY69PgCtGYUjwL4R65ofuUVaKR7DfRo6jwqvs5k6upmgva1gmed8NwVmQ",
  "key8": "Z8K669DGoJpms9jrQffa3DY57yqcqxwbDtEU1M5RuKqF3jg795eiBebUTJeQ3f4XGVQcnmjSoJyN4sqBttFEG8r",
  "key9": "VCK8JSyYHkR6GvyUWD3sPzkY4swwZze9AojhqitqviTnaj3CE4sqhTNRx1DASti46MY5QiC7Tmp3Dg2ZWnH6J38",
  "key10": "2V3U3DMesjfdpKpY4rqhgQxhBcEPr68XKr72azHNbPX4aZE8UR6jaKujYfifBJo1zdRDiNtAjmvqyMejvoaSnKRd",
  "key11": "zjYnNhTryQ9EPx8ZSiznJq8x1zu6dBXLqj475XtoEyV8Kh6pZc8zTYAj87kMetfJ2aruHiqpq33QZkK77B6GreK",
  "key12": "4uoVyVF95tNCRWKZEmen3gkv43ukWRQPft7VdDBueiFbQRSbf4GeZo7BQHGvfwcKq3HRo9fkaaNZemCvbfx3ARAK",
  "key13": "34sqAyHg5oFZDDaobwKpuPAeNC59i3AVDhFUKSY9GdSCk2NG3aRYDkTpSAaqTdSDqecwqKLWFYVDgLVQcWnYdULo",
  "key14": "4XomPUMGkRK1LfGRUPHacqthWSuoLr9E4TEeUyTkcp6x698phB89eKSdxQABWMGEYTuUDijkt3EGZWpd3bM9u8ps",
  "key15": "3TD8VwXShnX1KYp1dDxgEDZyyr6WLmaDuKPbz6nqyWWbP4bDisen7g3oyfDj4ZN5TcqsWqvQVJBzASocTTYMBKfy",
  "key16": "5LwbEp5JZrwUZ9QqvT5SmXQYRbNCPuzYQTmXSGsQkSeHm6SXevQsq8pCYcNgjtsv6yVbg47WVKYA7oGmMBWcdC1C",
  "key17": "4abea4EoZP6dXTNj8pqBM3qf43jvDK95TTNH9RKFYAdnwjTfro26cgxWpUtkFmw4i4zrT1eNkxS2hFKm3fmGzKde",
  "key18": "4GUt7N4TxoJTX1CspXcmzTC5YqA4GYVVgMmKLB8e6iuxiUAq2H6RX2fnAQhUBrbv6kGcdCLWaNWEWwrTpHhKbwmu",
  "key19": "4br8nT5bQvASrXv1jXzoXNyMSPD8VN28rn3TcZtsbGYYqkDjSU74HGCQW4dGa4qJHrDi2x96tYi4ZYi7aZqjYFQs",
  "key20": "8f6zLTcrFYrVuTyKGW8vuysyL1ZkG5KKcuv4EWhgkeXWZL9ANmwauVSmar89xNqw3Yk9dwHpA5uYzehk4KPWMKx",
  "key21": "2A188WVikifaNzfYCNs8jpioD541416BnrujevPCPmjVqUoUtpzuw8fKhth3JPMAraP6THgGwc4uPFTGcn8CqsY3",
  "key22": "2BsT3vCcokGkcXWQMMAuxzf1cxt4A6oVb7hdEjLLgrKjKxt5U1W3JC6UkddMEboyfkPDwNNfFZNEkRyKLmAz8iBn",
  "key23": "5Rn25P2ngptq1hyWY7qP3USbbmmc5Si8b1fgDswjC4awvTsvAhKduCwYAvf9AJbFVstpMMEb2UebokuSPiYs2eSg",
  "key24": "39VTWwuLWXgi5VKaqRuSESUWn2giJCFyzZmBVgenBk1NRgxtRLbTdtBaqhXudo6Rfa5E6FK32cZvqNW5Tnq5DQWe",
  "key25": "H6KHugRMBrp6LosPAdv5XC9qWRzAeoRvfWKi2LDRjwzWs2o2174oCsjdMinWoqCFPv2S1Wd87wrx6x1wPVsYfrn",
  "key26": "2kNHEdSYRWQ9usEtacrtqPu6bFyWtQgErFnthZc2Nbkydwr9Hg6AHegb1qv8i4zWTzPy1vXQZVUHbdpgE8RzJyL5",
  "key27": "4cEhxbusrd7q84cdCtPGrFMbWoB2t3kT99L3VTQb3T3hwFYkNEtLPqRUXUrK484395jKkk3WBMHaxW7KYWXp4Mus",
  "key28": "2ZrNszWZo1C6hQ2NDat43BnEbMmLFaULDFfLqqb7xDnadMBWQUD8qULhR1SL92ysq2GBx7oPdbztWG2uUGTwnYWU",
  "key29": "2mazQsRJZkz9YXPY8qAdVRSyjfVrrd493ZKMyoqs4tX5d41uxT26UgmkivL5f3MvL2eTtvyQPDnikWdWtwiLRmiz",
  "key30": "5RzGnkfiYQ6PEgGd6FRxNg275maa1k9YHCeskS9wXDv7jHnQADxy3KsNUP3FH94An8ceNf2BN6FxjvEpDAAqocAW",
  "key31": "4trnPqgnNvB3iqoYwmaeSvD55t36R8JFmuVroVTUst8uND6ruvnvhVKQvvBznnuXNCyyn4sUrztJugnPDSsS68Af",
  "key32": "47deMKQkCavAZiSkCTopfrLas1i6CyVpKRTocZdn9PHRuuKF8SZokgvuFW7Rornsm3FvTMc3oD2yuGCjZ9Q7AUXz",
  "key33": "unpKKgtHZkbAfSSpVVZBrfQ6fXjGHdHUswX3bdLG7HvR87KcFwf8rx9z98z9z9mBy48HS3ezZuaLGvTKGBr3WUG",
  "key34": "DZEGZErBUNUitNNfwqG954HDMS4dmQD66Y4eRJcBAu14YY8ws7bXqzg7jA7Epgg2s8RMpZRRrUJCaaDfkooo6tv",
  "key35": "5txDyPHjcWVjsERLk7DAypPMiiA2c98k6QyPWWtwTLtPBXLTqtYZm7vpb3PX3N8PmbycqkoAv8Z3UcJLgJ6h7WbX",
  "key36": "3GqvQSvKcE7JnjSE3Eh9a34DZBmCx165C544V3RVpnEcCL6TKSkNqG8eELoByoUwMNh1syip8npjGRiDU8QQDPF3",
  "key37": "3XhBtWnsSqhqympBAmdXVu595BHDN59htLFfJLnEcsfbXpPUp9XZteeJpY4evRsDWDoXnXbnUoxbo2LDn4U7xReU",
  "key38": "5f9Hc6LHqEfjNpTjWxL3BSw6inW1bxUvkkfD68e9jb7grrL42PQC2Cu8aGpVFFzmnir4iFR8RtBjcJpdsi7XETJS",
  "key39": "6RRfrFPemmSjoaN37bwunJwjfHmG5CFheU7im2D8B1gNqLAnqyJ4CgftWCSY3ncgLqxcL8PSPJuPv4QfsUMbxQ2",
  "key40": "yfxHgp2gfuHCR5dr5KvXUj4ifeWABF9Z7PskkiDLKQFHoG9RqbBLWcnbRZHG4rSsfqkWwbJrkGn6nRbHXhaSH43",
  "key41": "4bqQ8z6onLiWmX4yAZN5uz66277oekQJKoUWXW59QbbYJsim4gb9kagyZBJnVjUAvcbyupA3AKhyeN9C9fH6Xm7s",
  "key42": "2gxtu3AhM4WnYruxtBbYn7dMaRTmKAT6sGgfJ2pazJ9KSF9EZfrEVn4E5LgL9VoAHbaBREz91KXnr546WxR6qYjv",
  "key43": "2tHk1N17ixQeGCTnggbWDPZwYrjCdPQdcYs9VaAdbsqZqy98EkqWpRSDAEr58gbc49P8n9fV94kaAm4JbfeZiCai",
  "key44": "5LsyWYJmU6yBhmEpLqqq83PvVvncXVDCSerw3tF57EuRjr6JBR7fNRasErTcb9b5kz3Vxq3re3ue3VVp9kxC2Usz"
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

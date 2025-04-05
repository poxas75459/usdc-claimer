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
    "4iyqeYNTCjjVfjQJVcAsJtkWEydfWS5Di1up5DCwJ4nqkJUwBf1SvYrJ42i46TParSG1vS2vzknREeFSrYitzXDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UU8YrLAVQm2t8sBkEMn63kR8dtUTVAEoBzZ4VCgnPSrnS8PAGaYS3V9Zr2JpBN1FpqzN8Ft3pNSvrKYE1y2eQ5m",
  "key1": "5NdL76Fd5NaA3GSg31bZXHGzx1zwtK35SAxtad1YZcddwcYXS7nq6EqpWoVwxppCDdn87iopZeeELHKZDi8NpkXU",
  "key2": "3YcWDdHtaLvxfrGBiLfx3tKwajoRM27tJ9d8GgvjcM3Tvqd8GCNszMcBRLiHzduC9ZdNFLMPxbxhjbUz2jGjEeHs",
  "key3": "5q87T63mD2qZ5zQjXdCpQH5exkKsK9JrGFzJKaf1RYSGHd3Vg8ogyao7gyMXFb1711uffea9FDU19ReM573LJvQH",
  "key4": "44G1VaPozCDgqMrbbKNCQJuMrfZEuc7zQu3ffSAsAULNYkvYxDyir7DJrojb37cz5z64NgXGmdGf3WYPpLHLNfkP",
  "key5": "SxjmkUT5QM7pzRqEhe2MzZz39CcibvAJtq7gyRQHW6bk7bw14C3LPfDi3r6z5pPmbjDBgbfEAYYzMhpipipsis1",
  "key6": "4teWAe7Sdy6G6acNurmQ13DsMi8XaQAAFfYNAHGbZEyUBCmZ729yQjh9UgwTjJiHWy7GdHK1Ke2urvfwjf1s1cZg",
  "key7": "2MS52o8aUmC7HjbQkqiMENEVCjT5d4ri2rNrxsfd2myFPt8Bh5AmoYPtMwwPZcQ3Xf5cWkzMshSwtA9hqktbAMp2",
  "key8": "3AauFv8NZbqWpoMzpgWUVihpUzyMw3ccNAXBE6sR9SrP9FrgrLMFFLcsuUp6Jag5YPcTc6B4hUfoga7J7wUZndqx",
  "key9": "2RDR5ygt2LgqH4FmoaWvtq247M47tEyNb5R4ubXLbd2mnLggxCALVk9yafLGX8GWwjtGJHbX2GbDK3KSdkRgY8cm",
  "key10": "3aH6xJmqYUyPtUSjMT28XzPmBJEnxhmqCcEC8AsS2ymMRJG2p8ysDsmQdCGAaHStc2A9YjzTynjAFNJUu2aQrdTp",
  "key11": "3UdBbEiGYBuC8hDmfF6kkojtH6WQDiMiJybuWvrjSD6T7U8o8Qpe4gKKmywn6EwbjFA4PzZST31HEQGQCsihFvGX",
  "key12": "3FBa3BeAoYtiUkVe3hadmhLzWBCqkB1i51m6gHQuJHWRraJXP5LyXVM5ZtseBNGSJQikqK9GW3x5ocdccTfcq6rT",
  "key13": "2NebrusqwNPaed3Xd99HB1iAJvpCYHhX84bK2XkcggQGgUoMoDKfWCJfEehjMNdHQdbhKAT8hDAJE5rXchsKxcht",
  "key14": "5ahYq8317v4R8go8ynHpBs5faKfxEbfP15uVYEvVZBjXfeienFxNgrceiBzhXXiPf9Yj43nYukv2DoTASThXuR7n",
  "key15": "2uWspLFzK4vuP5xzsN3Euq7bBsnmrj41iebD5gqXbHRYbwv2cfqexiq3XR6QXah4TGP85DPKTZkHjm5xNxWQxekp",
  "key16": "4bEXvYxsCppDmuCrEQDt6RiQh2n7rhPkwnAzFf1tRRgdDdSkkU6Ev98RSjZhRkx9N5BBACAmyoTPeu1uV7KDckZ7",
  "key17": "5c3YjBfExKhFTHxT97ftYszLhzuZ4SBQ1Hk8QeX2YTkQY7xys6e5aMLL5jqe8GmeSzz42evzPYrrkygduPyTjoQv",
  "key18": "2QVNKKjcUB6oHVfUviEBJtX6tTiqLiJWvxhdWivMysr5j5E6dAeDP9aq7xkH6NKyJHYokiucEU64ZgQt2wqsPLd9",
  "key19": "53NNu9mNVqdQwD92k2N6XWEYVohpmsE4ULwm6P96aBkRAsSWHuEGMaiZJ7KuDfpu1nDuk9MQ4rMq7sHeggmvghNw",
  "key20": "2yTYEmEHWXapquEY5yyPM6mv7QLyFsNRGaRGKDkWqAUzrBK89DtJtZQtN1t6iL678YSTeXGUZYa5K7Mrvmb4VbxX",
  "key21": "2KjuUnaZtKkAZhhbnuZ1FNZBKYagSpXNuqsM4shHQ9LcGxNzRGTbVrR6a3xKXA1crxFwdDdnq9kuzrc2zbrYTkS7",
  "key22": "3YN96BeeVG6o1VcbYpkern2WCZNHWUSWhURJYjQrpJ2doXhsnmVL7Trcb7HugjawJxxcuFfh9xSNeBKrpFozUYqy",
  "key23": "FcvJihHW2YLFkcZLHkdeEVP8JDr52SZTpPiFaJ3Jutc2jJ2N5Ve2Rq2H8WbVnxP7w7y88DS3Wu7m15jTuvbEPX3",
  "key24": "3gFm4FNKrDhjijH5ejdbCauuMV3FG9fbWHvfBUQSMCobLCfNTALFCjxXTt7KpRitoL5geJXw2J6j5MfSjB6vph6Z",
  "key25": "3AhiWCfCGL4hd1Cv9GzVCEYVRcuQBCGzyHCgfaAUS6QKKh6P7aQ5vKDa4RqRWk1VKHzxm6Zw7hkJEmz96F7GkcRL",
  "key26": "5QaJK9LmxEg5fHXWuw4pfPqh5qUtowLsgPzaFMvYSSRqNwpww12H4q5gBFoBd5Qy7iPAEyAwaRUmCSK8oegqF6xK",
  "key27": "3LjVwgGAPNeVQCXpxchsPHayR4JNAW92QMC6o53jL5396waCZRwmEXdFEecyqdnTDwgXBjaodJcNd8nQJB9e7w8g",
  "key28": "5BfqtKj3u7qYKkF1pSPtAWuaHYvQCeRGjaYj8afGqynfRQ4BjaV3bzqaw8SfXYcndQCWfGzcKWWkZaRjPyYxEmE",
  "key29": "aUPEX7msCytU1vyKkXfq5AKUWxYgLNxoLW4AZSWfsscHoqTWyrB4DiQ6CygLjUbhEFv7WaNSZQJ5S2WiPnj3JQK",
  "key30": "3EnXfwHYtRDsWZn5jAqh1Jp5B9aVVbhfaNV8rdFrxxcRGzmiz1Z73JQemN8fstCzF4uaF2m9XdF8huvaBpPHeyae",
  "key31": "3n2A2eUuaTnJ8VG5TQZBQ9EvfgvvSGVHeDPaDEqbAJPznwv5s8rXzwsgLR2VHP8rs5Bh43fthEpivjMi36aKvuC8",
  "key32": "2E7LgBBm8d76jYdJ9t9ZQiWs7m3NtAqi7V9DFw9ZHFuKsnNgjsXsbfsj1rDHCTMe7HAee9qs3uAGHLWSbtpnvSRj",
  "key33": "2VMCoN8CML9L9i6PkPxpRURjDJY7wZv4DoC7jg1cX8dwzu6ndmAYmgVBj5MtDxmKqzKT84RfGPHZs43FTwhz7j79",
  "key34": "53HMEPdetQwXM89R7amxSEQRZjgGCjehdcMraB2uSUjps7rGJ8P2rNNeMdGEv8VbJ4BcALChnoAVSHbdQD9Wpj1Y",
  "key35": "3ZWZHimFgyFpuni7DxueFHpqJhPLjVjrr1LzexowckLg3dkcNUgT8NXAYDv8FKjXh9QZJEwh5tU5EFUJmzYwfWpz"
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

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
    "9TSYsSrHPhE5nfiyeNY1dvtTG6VRA8C198AcBiZP3Y3dubbsReZN33YABNwWnoHk3EboGjJHyDJLBNK2SXrdksz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4URmk2EwmwDtTEtCbB77n9Q1tAWWAMhmzppi7M1Rb4hJcRGW19iMMF6Y2rucVk1Z14nFyQ4fyYuN3n3ZoMfadcHo",
  "key1": "xpQokWBfsi6cqDnW9rwTvyVhBQcruvLAHhgxkzDnyx8kcFPyQpPbfusfayQx21rxxzwG15QmFdzziiibUqjzkdz",
  "key2": "4tUhm13RPbyzAUnx9xhPuzBtsQdfNkkV7jgLGGhZstdDLVBFW7DFs7Wxh6zghpd8zR43n4TYHntABH5jTCCx7QR7",
  "key3": "4CFiAYQWdWL1Q7c2kjFCV6WzERzxw6PU3rL39R8ZrhGQWBRVGmepgeZ281gRLDKowQAwXPvDcEktiUyqHnoQaYyu",
  "key4": "2V1XjaVzQyTVXQu3gt5aeBKtvvohRWsS476mik7pXznKMEhnrSycwdRZKzJFPuztQrZkpE16WZqHT23MftiArLgm",
  "key5": "4TcvgGKnTWpqEHXSQBGynYErqShhdH9bWNnyAGux8jsCp1umhib9DkwZov8ESaRhrFRR7G3nddbRFj43KiCgXPU8",
  "key6": "5j8ZzPYhDoJZMfzZyyoBH17sxMum37cMJbpX1KXh3hTQ1YcRVjCNrCfG18asTRJ1u4jYLAhKEWzCfNgXzrmEZrJM",
  "key7": "2EbSdTF8kZtNioe5deJ5LWNBTFK1GGdeFKhh6q5g4x7Kt1i3FFXo9egQ1hCtHfdoXEuVZE6CazEoEXfikP3sygfY",
  "key8": "3zm8BnytY6V21mpNY9CqaSpxz8cNFPui2iXCVgijfHsk9HPxPFzaeG94BJZotbd5S1ZaW1ewS381o613nBzUqytg",
  "key9": "4SR2436UHHCWvfaMDDWYL5LPZu8ruJTRBZ42RJ3i4K9LsiDmLhzvtX3PmUU5sQ7jAVpuDusT4Bh3f7CanXw97zbT",
  "key10": "3nNRGKoVvNdjdGmDT21yHJzjUjhUqhuXhp2Ca594i4GZxvLMdsLtTMFkRKQB62EkJFcrZsjUFHzVVbHmzvb5GXNb",
  "key11": "HfzsxpZ66d5aTSFmwuvevpFGw8kEv6WrPLYkaxFwVafSudhG5zK8uyyc8C8CnQ9JSL4JpWJGenRswk5mYuNc8fx",
  "key12": "3BnKsbFfvVJq5Wo5zeZKPYTF2DLvSnrxvbBTTw85TVRMJkpBpPmNPP8CjLUijaTa7412jpwFNRpv9x7sQhd7Mz5u",
  "key13": "oXLo1PCywyUVUsmzn1R5s2NWySiYKX4iHfMx1Ue3zqmM1fD38GiCKhriocnMiXZt32fukAaFRcookwAeC6QA1fY",
  "key14": "3AtRDy4adeyCaVyMBRfi3em572sfyhkiLiZc8Pjmfi5DFu7PgfkXGYco29KCWFyxm553iKToe7FLpneZhmsZmWcc",
  "key15": "5wTzNeCEmDQtivWEarLLk8qYcxbYC5GFzCK7kP6j6YJuHoNAvW4hf5XAWKVc4kbSAx2DnG9jMdTosVCtomYb5BEG",
  "key16": "24YdVmYYqrV1GvfQTsbuTrC53a9cNMqokMMjr9foYkGb9EzwXfbYkAsiZzTjof4HhKKsJD91Gis7GQtgBi4CaSPC",
  "key17": "3zkYJp1ATeBSr2BTWQt1Bm5AwfapZveargwxrA6hTbPBySYgjHBunEBWHy8a3MZZUWyBMwYQSFiXEBt7H3RuXRXA",
  "key18": "4XTCUvtgBDQ2DGhf9NHqCiJpS5Ey6eKxVLa3wnXHdLxL6S31rA57AhgmY9sydik5gdk372cxdB3k7UPDqUfYoxY9",
  "key19": "3TBZveLDDzKS6DvC6oazAPBwkSq6MksxK4esgQ31wxzenwyLgFBMUcfpi42EgaqQm9gwr7Wt4JRJ7d6P6LymMUa6",
  "key20": "3iDsYcmp574GDwuWJq4iB8DwXd16aBvszLxztFAKV4mNmtFc9qKq1sP4tjE7NYWALQ6UpqCjheEBYEDnFCKSUUna",
  "key21": "SCjFc2s4WCSFtvX67uPAakLci5EMy4FSKfyLVRNBpJrcVCBoXbBDftHBCoEVpjTWTJhtEzANm9kz1kjPFGLaZkE",
  "key22": "2S3KRfWqXzuGXGUhosg9XP3HvX1kVkwYPtAc2aYCi3d7aTJVwvn3rz2P1h4TBD96kbu4PJywFu8itPgsDfjdGV1X",
  "key23": "2jYGQq2hHtc7fy6vcFgwLzv9x27TxSpXMZz4qDxkZDJGyDGDG6fWEEMetxd3oLxJuPNaMZ7EkWxBbKkADdVaPS1y",
  "key24": "2qjjDZAwMHMXnxK1bkxzraDgU74mLN2md2kwBRGNcooZ2Hu85XmfmVh8dHMSZXxsiBnBEfArsz6y4o3o54vxgCKS",
  "key25": "3HpRWNakoSjoYGjrByXCxZbxXABnuHwRhtG8ecqyGYKN4iRXoWSJURkbaE6LSMCiisgXgG6483scMtYCjhW9tNZZ",
  "key26": "cYBrWwM3H1H7jhVYcbxQ5dgjt4Su1UgH9K5qgZ2agD5pG6KwzYZWVcbaF6bcygrrnE6fgUg6XgGCp77os3VQRC9",
  "key27": "4fYnRSJrFtxTJJ279HvdvM1rUjpcHpk8ewSMSfuPmEZdthnDcaJwDqe4mtKHDCQRNPkPhY9WN6GjqdsHwneArxeF",
  "key28": "uvktCsJGBc8uSHJBWbQ5XXd7haxtta6wHmQcNiDaozSf6R7MM1dhRtFt5xXEEkeXWwFAXhHD2aXyamFWiPCB2yU",
  "key29": "2R6FPSWxxQ2AQn4Qp181Rhk3xQGkKymPt689n2fJrM3hQKKMExZTcuF4tjbgJSbNr3uRLfy2L6awSE4hLquZpbU1",
  "key30": "4ibDGVBAXMwpj3mWmDnmkoY3o9ebqNqBYLwumse1tQjfa1Tv9BZLgssMTrGLHLCHFzjhxrC1Sibq38ggN5i5Zt2g",
  "key31": "5hJ7TiTdtbdyYdTSc4nWxMMoJrSRPtbBVmMEKS3Sjfsr6zeNJRbYPdFUC48hKH4AhtLK4e8eZJmEFCQAZSTGyU8m",
  "key32": "4eywep5m2aTGc9NLCQMBpn1qWUc984gPiQmoYw8tpRwnYBfrrr9PT2FFH4SUQhWMWjAwsXUGXXmw6xojPTN8CzLv",
  "key33": "aTJcWkyXEg1zNNkZXPQ7f1v6kZhoRr6jyHy4TmnVR1LrPC9GcYjZkgvk3ADBLukf83vWHFGdSBd2bKoogp8mp7d",
  "key34": "67jXirED2uJDdKiXxwfa99EaPvMrhJzxkmHRktdbhN5TRRVRtZTF9SbQ1wwcv62MaovnwzaVVqm6qPcNo2HiWEV7",
  "key35": "V5V5Qt6ophgDnM7h7pPDxxh96Zq3MTN4UCWZUcjBgYFJuzCTQxjYytSdViGpPWvSv5CFgA4FFUTarGa2xBydJwm",
  "key36": "5g9KMYJ6iahVaQNuza2Ww36cfzSWg2tJurAeQrTDgXrcXQFwJFFqPMmWUmYNE7sfgsr4dAdZGAfFrqi8FMoKjJLJ",
  "key37": "4cBkS6TWqMEDS1LxSbwdba8vuYPkoJGdUvXkFWDn69CVj6K69XNk26ig379RaoJs54rnFterBKANWbGxvtwMfTdP",
  "key38": "3A3RbcxFFkLMDBL4LVczKyp1arwLA26ZQ665Hyeu5jZthTNM6dpAfSTXHL5SSzcXYkLvH121ty9h4vRXCcLKfWmw",
  "key39": "2FyccuAMddg6qSeJfmgrRwGj7ySaW5umJyYCeR79A5ZywCeVVmRuvi3xHq3jbMNBbp83amJrsNwrm6xzhZ9WMMeQ",
  "key40": "5CeFssS2JXCWY1QF5XbMj2rBy9SDveAk2pBJ1ARZJbD3NwdAgRmZFSJHyNpxuhZnxbE3sgVnjVZqnWJy3hHPR1yo",
  "key41": "2xxwhJLGbCRXaEZrZkAJtfEAXrW7KY9nQaEouF3SJmjWWuxGzmKVXs2ZAyvasWPdQu1dA3NvE8PySRCxYDh1YynJ",
  "key42": "3n669yz58nWLrdwsbTW8zZ9QGixcbxLnyW3CjaTYRdZUP8XQYEmnj5vbKb5Jn8N46WQhn8oQVPCeRUzJh6XZRqZ8"
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

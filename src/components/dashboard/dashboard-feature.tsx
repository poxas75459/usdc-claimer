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
    "oZwXgk7NwqFVd6tPEKgaY9SwTSeAMqPD3b7gkWcsiVruB5gY8mnrdzAR6CVtfujMsq7XyBZrH5VckpzEX39MU6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Njqy8uUmYtf93fm2r3MSqqq7F3aUYfg45zizPN6Nia4SYeHmtXVwd8AeKLv7WeFHREgNHrRp5GUcLZReQQ7x93H",
  "key1": "2tdbkWitXcE3he2cTQjGHsDU9MuRPuLdmX3Q51XPZqeBkgkd9Ts3SqvxYXFaE7PYrFUwAkaBkMczL26BTNkND7xw",
  "key2": "2gSEJKj5VBD2CmyHzCKNBB6YGeaqXVNndZeUytWR5vED9Yq7YN586zByJddoNKdxAS99uPsEXFQV9s5NYwPT2VeW",
  "key3": "zNfqWaXWzmvid6VDCSak7UsKw2x5umZ9R9jqpfD9VuRBzgpVCscssSPuw7MqKoZw4rv6Eg1AhV5W5WwY52WjonD",
  "key4": "sAZpdFrGSg4xWMFHMyzekKQ1GvtHDSk27HSCVzPZ1EQibwcMfqVSow88NrDGGTF1gu85Rry6bXY9iXV9uDgxxzd",
  "key5": "5C5Y4G4bq4qQywmMRBDj1cW6XHYoRXYvmfpkoCd23BAZBPa4oMyGCMscNgduSZi7YDb5JcyK6HQccdE2f6j7rVjs",
  "key6": "5QywGN9X5RBLYVN7wV4QZSuwrMgrMUKeTG5YeXVLw4Z6WTuUeFCzrBKYrJBZCG2EfvEPFqqVWTt8cD4T81D7xVrH",
  "key7": "ujYN1JAAX8KMhJuNdwerg15Q91FUQiRWneVmNC7EifQRQRZrkvSPPXqV5UnR2tVMzCJdy8uscRnLYCyzYFW32MT",
  "key8": "3JNSssqrty1GKPsHfJ78zdwA7j7wLnRRii3Dj7QAwt7hUYS6EukU4oFxkxr3r88tdi7odq3ehWJPhYSEyg1cJELP",
  "key9": "yr9aWLh68w1mpp4bTpHJZUQJu3Ko54JW3znvRQroNmpHu1LuRgVA5fpKKcoyLdsrsNxZXBMULowGsfzvXjpUeYm",
  "key10": "24tbpugdXoM363ciQ1n6EhUUitiD7DB2upxyWTq33sqMojQC2sSSr2DtaGhGkRdakC76jMvuKTuEDWiUMbdGUhnU",
  "key11": "3qCwxH6rg2H83nzPwAACZVFw8dnFLvgHh4MLJyeSZwr8TkKf3rTJ1udrBkUsKBxzQYqVzFKEQa9BPm6L6xCrfEEg",
  "key12": "4KwLB82bQf5hFLMfJ4ecjuvGdohWmG5LVcFGxTZMXgchf7bSkf4ULoDvCBKZLbsx9CgEQGZSQYYdpKC3fgoFV6hk",
  "key13": "37GJoLsuJh4f5ESBX1hW85brGTwe2fNnxgkimrDP8mGdtsdqjuc2muxdbsj9TwKF2HP8snwtMxr3GAUmaYz2ruxE",
  "key14": "4txHcHqREUK9xASoL8PBf4QnecwfzBphUnBYfJSZWWLPHqxrdgCvvXFrpohFzGAsVmEeNbaW4dohn5SReof6kkrk",
  "key15": "64ErdXNWLjNNbUYP8KZNbc35Sy3VFUr7YBoc8buDAk6dXhJckiMotCmCsjJJFrMhJFT5eAcjE9bcKHUgjZiZbkDH",
  "key16": "2DfpEoBhqezk4zCs5yZDAPS5mmTDnCv5y3xkkgL4ZfKxkmzaaJybsUV8KzMou7GfEumPT1SZHPH6pAmg5gCTLGbg",
  "key17": "5KwAXzmkKmBi6BFv9THfk9u1d76mb6ysqdmerqVWU62NYbhF3seWdSrYST2YaMoknhgmCyygtt4vLNn2YeHQUJ9h",
  "key18": "5EWpeasaXftYmWPVbHbaZuQjdzdT8Mox9R6zvCRK91JM5jpp122Rg6PtibEZGaYYNi2kz9rw8HwBpo8r2Aur6rFJ",
  "key19": "3aWTcVB6TBt34BsXr5TFzXBPZqDmRuzQoMfAhhmNcYnzJCtkqrFxNakPfN3gKFU4X75UWYq2xtHokGz8TkxczR9v",
  "key20": "53zw7vX9GjCML5oaRQ14UyBfypSbQbuCh3T1Z45U6Ekdgmy31m9jrGXXPwKVo72ZjPS3gWT24KdUCzqMLyDEvy3a",
  "key21": "5stxqVxV9spdGW5beHNwwAaWLgH9QcWtFUhtV8MBwyeffyfj1hmaa7tBuqmKywoR3Kt1EAJLpgKAeDKD6pjmhhNa",
  "key22": "61dKut67Bgm9nvQkjNLnEZfMmEAUkFH18Ek1gdvQ6aFDtSbBaqt6wk6z5kyrynHxMjDJRNAadDRgBLABoL1rt6Ad",
  "key23": "26x7QdHF6svJDUJ9ZdVAq45m3WM22cY5EQSSLaPyXCHRWx19NgxYW7YASia9ASGNf3yHTLmvW8yJMRU6MdQuGUJ4",
  "key24": "3B3f95a4Bk8f5Q8imMHScjZTTjYYPUJRBFx5QU4aipBbRTnsXEvgn2R4sgkibmzegJvv3mgQ9D6xfZi66eni81QF",
  "key25": "4fcKnYb8Kk1sp591AtXT1fGvZTtoMga66r92e1vyiEY5REB9yARhjuMp8dibqVqhhEDXYvxCwgP2KW6xQsJ9FsLy",
  "key26": "3DtdsTfhGfzdCyTiQ3SyvW9Gk1scPPDTwRs9MGd1uZAjvYrprKuNyfyNTKBoT6ofGEBpnMDxL52k1eEkUQzqU7oV",
  "key27": "25LHhigwCbBQRA5mwrjokPxnwR5EDuWjfMqP2s1f7xFffZTQfmC5BfW5LxjdHvCmgjBM1CLa9Gw3ww97MFmYD1WB",
  "key28": "4g4Es9ctW8SYx68yFreMfJbNo8t1fdR9Wtt9ATzcb3WYLExhE1B4SiSunmdnVqS41XyvdYzSos54xSSqwSkUBMh8",
  "key29": "4ckxvX7xZNJTAy27H4xzmhzuFLZbjyggjm5wfs685WSAf1kv1pXzNmZKnBhtNh6VbhKy6vEQzk3E8vzNDgtSamWn",
  "key30": "QzdELviqgX4T6zkx6fhTJkvZtRfmprKhojYewmMk4E232JLrhWHTvu2nrGffC3QfwJVqRKXxnhgkaaL2R7RBeRx",
  "key31": "328BHQZC4AwRqLpe49D3uWXvocJVtxLtabS1ULXmt8s5CmGMNNJFuDWLFGd19pLvXV5d6TZHp6fzPEgN4nPnvQun",
  "key32": "3Nt7nPvVHzUku4fygophM1t9jnJS4coyxHTnde6d6M3Qh2rjKQfUYMfvyUB3ZWLPVa15TsRN1jTwqT3YKm37WDUn",
  "key33": "4xbmUE2pWM5foA62BfdthAqjmvPS2hAzkCkLqr1cxJe7fZBY8TLdkbyxfkCVgwyeCqYTexceWdCgYCC6RXYzQPj",
  "key34": "4ZL2PkXwU15jE6K2NxkwNP5KJs3RUyYeNYK7jvLogY8wvYj2144dy1d5goH4rddJrcV9WfmAjcfMnchD958SYcnv",
  "key35": "58CRLZtGKnAZyT3GZtAfGt4rFCXnFqs22kbWNYKo5CNAhid4WP9SQo4sqXXsNSSyK77M4bm5t22LgEs5H7LceZX5",
  "key36": "3RjWmSuQAQLTSDpBJTeMz1aoPuX4yy8vCJtAbb7XojDoDn7YTYccVywNUQwPAjT63gMH5ER2JuXPfZpyziBdPZeb",
  "key37": "2kq5H2j8mEVzJN7xxnuKT9yEAfutbNbfXk924oBpKXJs8X6QmPTHKNG3z444gVEpydqDLVbwXzgrHLDv9mXRZEgT",
  "key38": "4XtRSBzG33nBeaNB5Vgf5z6srWyuKFEHfXmCawhnVp4N9c1WahX34uJuje1iHqqb3vV6KJHw56WzaXJkbegakALm",
  "key39": "4ugisakv9tnMhu9oQ2LTrCc4WPSDsTauGvS3EwodfBpR8iveJwbeNwkMB69GEcmvroH6ziti4tq4AndFnSwBVShf",
  "key40": "YwADL2umXDcRMU7FWh3pJczng5wU5NmbsbrGzkEUhrKZpYkBBV93jWoj7jb9bsbYzdFE47tTeGoNBpGRRATyWXG",
  "key41": "3YbpXhYKcNJRcDST9hdjsFeu4uk1QgnV2i98CUTr9CjDRGGkeegKQwGwZSRqMi99xngPFBdLK3Gv9jhyqcRn1fR3",
  "key42": "5fP1ARzvjcGiVBpdNxCXFubxK5Ef7h3etmJmQUBavxJjL5wmW1b9kC8pmjCkrjFJCaBtNGnJpDW8P1YDD7Pq9RfB"
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

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
    "2LbGFFEUb8kSRgwKmKWK4WgKHacyRfuj2JLWNcdb6MbayBjFyxtg8Yymzd6NfvA6hV317EYUnYszKxQaos6dwoaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ydmzgg87gE3BmxFBmUg7PwCnxdJAyWhLWXvtqoYARupj8w92AKAqd213QqngZQ46yqiTWepNAVtazpwizGsVkh",
  "key1": "3BSkx9apohNQ94ixYp5iTbK3tuouPNyxGe82SoZUNpeszYra3AGsaw6XWnNr6JwWUarL1e1TvX6wqHuTAsGxEDja",
  "key2": "47EzdxDv96eRyiwWBpzYQprMBhqcWyxFJRX1Spnqa6HEJ9HPgPogij8z7cTxdgQo6g3EWN2UKTo9VYX8yb1MWKJ6",
  "key3": "23911qJTiWL43Jb2MhAEccwHkBnznzzCAF4NH5xwN6n2iqNwSNJdJiLffgzQKanwKWapES2aHFZwbWm5NQKraa47",
  "key4": "innTtDnNgcfxMWicfMQYgZqr1XHAEz9faqWbEcpu3CJNMBz9ypyVxxRyt8gjcyPV6oWho2dm3WsMaaL7gXbSAtT",
  "key5": "5GwgQZJvjnGgwca43mDzySXt8ddXKRorp5ZZwHXjPqi9DpgTHszzjjoeV1CrWqFuxoEA8QXsidtXT7XTmNFK14Gx",
  "key6": "2vqz7NGMVcVATXBZqWX5CFMc9E9f4nJtskZ3Pyd1RyMPYP2JExwefUPG776ZjzhnQhhffzj7rdmUbFmRDXWs6xmw",
  "key7": "4gstxDwNTvPrnEhHpx8gUwPFXGpXxToB9AMLUEFG6AAYfdVYZnKsSVrpyu6zfiRDeQs9PZwiHWGxNLHvVycAG4QN",
  "key8": "3o2HMqX4zUkkDtjy7UPBssEY13UrdkQaU3ZESZKRSFf1ELgMdLtsL3rKSotLgSnLQe9Xw3yhQhQMdV1iEWRM5hbc",
  "key9": "72ALRRkXD3XgKuAnv5JKagohSXzhFSPjLQKoq71Ae16Vk2rDp4MUDpUJPyQtNa4wkKy8zTywmhjL4p8MWbHFCto",
  "key10": "372ALGmTwZHSVb9iPwSjRvaMVpKQBZ5MPck2RQa8TKBML9MwNpxx8brPKbct3BSzN28KXe6LFVJTJWntErqwMWyS",
  "key11": "3SZSoDuwoLgUWAQZpTuyk5u89sLRRJcuEHrK6qTHRfPhdTJ1bffCa1mcHBNBZpQw6NuAQSHiPUpobrbD6wLSD7d5",
  "key12": "5MP9kPbBHG5Zm1psrr1Ua3GJ1aCbVFWY4dqBUmLP74RWhQGUoLnQHDFbmQRTydFdF8uZp7NxzQXNkx7GYw2i239V",
  "key13": "3pfUpyaGmp63rX62dxTZ6dEY74A4Rh92vQwmgTWA1B5eiFNMa8DZ5i1NrfQxfZbhSzNZbV4zATHmsSvQnExp773e",
  "key14": "3PQAWD45gp7u82fBs4ts5knHCGVgZtbanm4sdjuDgBtWr8mnHxsW1caLW4CM7CBhmj4n13qNhBn4fMM9Ebj7DKGz",
  "key15": "5e3gvrWWBJtnkFLgMhvxAmg5AvemxvEcLTiEMgYQGPHfEC15iXJgeSwK3SD1wwJbKpNyTxeJZHVzUBPRP1FXmZ4b",
  "key16": "WkqbqMgRKhGiFSznMSVoCctf8sE7y88Hs4XZSsPJbc55javzchJKjp3C7w4sGC9oFcojAKyfzgEudSVN3VgoViL",
  "key17": "4Rvqz83cgAakT55hfRv3zVhoLpy3iCpZPDR8BSFUd2wmd17pTqQgt6WQKSpex2aJXyMV49Ft3bGmM2ZR9iZq4Mt7",
  "key18": "rYpydimA2H9QggMQYAkKbjXyVjbxPyfw2FzNn1ymoceVFEJXeukh2BimVrmSTjpKETAR4QEtz8MwqbDdpThSJCq",
  "key19": "5uQDRrrkq88QJBDu2szYbjZDuDBGTn1vEkj372vdF3EQLCjNUmbs96tNLybwvkEzN8Qr8cWjeKynVrAybhZFM6g7",
  "key20": "5NEhPv946rmsyvkBMezCioWb9a21aWAXxqGoD72ux1sHcbmW9eJ673vydFR6rutVmC8V5VGm4vc5DcCdBQG5Xxgv",
  "key21": "rsaYcvZbvvmmVNAP7BpPdAHvGjxu7cWejxp1xTaiSgPKD8ey39U3z1eSU7nHDuwvYKXdbVtwT8w2cCfQ2YpTrc2",
  "key22": "5bprXjeUF5SrgPgyqeqXtS4WDr6BcaNkVHXSvHVyuqK9KmrteX53cckFwCbWNKALZjxTGt2svLtgpBjjCkVYKM2H",
  "key23": "41mwXeZeTGMCcbjoZKNpNVuLSMsMcTmc77fhMs5rU2EddQhPmrCm82LsGUbPEZ9CVW6GPx3JsiwbVwBNK4gdHxeQ",
  "key24": "4HxWfQC8VoQwus1nzbg9GkY6apBQnUhcXCrf8ks8SdZs39K7iPVrS9nrYfqrms9ctMxa3BgcRM3YzYFqJZDuTDMo",
  "key25": "63a5b9NTDCoL6PsMpJDgp4Lb6eVymfgWrwkMdBiSewy9HkX5cQHB3hmffc94bdb1vkJqDjM49ad6s3pz8886Ap4J",
  "key26": "5LbPCiwaTERR1S2PSJaMaXjinCg7LDcaVaiHe1ys4Jpg9sxsveYNyCzpx3h6hwLqaWkNHvGuakAnsGAbQQY46JYV",
  "key27": "49YUfV9dV5X1MickpkEHP6x9K769KZBGS4LqpVMySYeSr4r5V1L7kSrsg7jBUro2PG7PRtHRJgaAwcprGBbYYPyd",
  "key28": "2TXXBLWzFRXbxQKZR7BZyveN1Gbb98Lr8To2iFL6F96tiGVApKpz5brEbQH5KKaw5DsRmnkJiFqGQr6WfUiYCdZQ",
  "key29": "Wy2Z959JfVzseVUpDGYkgWkkxsJhS4iYHMLqztEUiNtzDfwVgRc4c9oD77VqLdhw9swpo9YdJkPwypFWNSYNjUj",
  "key30": "4yRtGVH4fUYxfizazh7EJLaoxgbRnRSaqMqAXntw6VnEAFxXL1CoyRgLiWsKGKFCKkwkRM64HVXkPsU5RFFccCtN",
  "key31": "4HyUin3prsxbKQqs5AM1vecbyJBYJcZGjxdkvRdm7Eoqv2mSFVFCeXZegVsR72gjrZPqwcrrXfwg79bYDdhrDq1Q",
  "key32": "4beY3Uz9fBoa8TwvzScu3JnREpqTCXmBCjtXKAjWFcWcB8HKrb8uye3RyDJCWEbkrAKisr3gjvzumk2TfKrqEnd",
  "key33": "3CDugdHgnwTCqcTXD7EhDExvFRWzjzkkYuTuByrvFCEaZmxxEKvERSRwQvwUdNoJwpXAB92yPnNbFPRtXdHb9Cf7",
  "key34": "T9BYBFybkpNeQ22jExtYFHrXxnVMSgWTLRJkssczTZK1KHtPoSGjm8BhizYfmT4sqCpm6Z1B2mmDuZfWGYkoaph",
  "key35": "4ATpbfp1kfzThAaRTVU1JosTgDE2mkLig1EV1ddGmW1vxzPPZmbCGEAKXih4UxbueVEmqUpjutRJ4LdvTL5cS2mB",
  "key36": "CjS8ZLDV9dxfHaWEx86tWjwqcgfFZU4J9vv5ojqzeFy38LKBz3dEcvFR2L8t6GBtx1REcxuoDkY2vnBvoDLuh2a",
  "key37": "3zZ4QVD6UJHv5ydRfyunYcmLqfAStXrgeeXPQhk26Qvm7kiua8VUZEN98eMoeW6qkAo6BvTLd5YMaH1wFnVMTo2G",
  "key38": "4XuEE5qwQrrYpinTFYC3AjHBbRcJSvqb3TJQkPKahcUMgGZykXbkx6PSzTuBdRfY5XxyHiTPg2yuULwFtDEk9toY",
  "key39": "3g5UDaNhgpYm4gYbhSh1DbLFR6MXAx6a63KtouwvS55fLpVtLkA5WQY2e9hhmAyw1VuENy9Cq2rVmRd2gpbWsHes",
  "key40": "4oMHqTMoUN1odQ127xyRxKVxfP1i1AA2iynhK59L2qUKaM3v7FpnnUWwdzkzBhqWTtRbNH3JoMkWQVkkfjAQX1xb",
  "key41": "sn35AHboLRHhzbA3652n5qV5XVBXzQRxXJHtfmgbZ7MJxEu3kDQoCJaHjhx2L2Zyay3mDuQ5YUWifGcTJeDw8dJ",
  "key42": "563H9Sz5fxqAhF41KzEzWukVocQKkua7KbLxtCYYcNWQWSBzkowr3gtto6Xasg5NxEY6aPtCE2N6cte7DammUFSv"
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

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
    "2di2zD4nrXggUrJyRD1N3fg8KVrtLzySXFvYkCKynSBuMSzKrAEBYsnUcnieJcD14ddrWRKXQyX7b6U7B6kVGXNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "376dN7Q2XwoEPqTNL8ULHqJysTNnytjheUbzwwj2iDxUpY9eyiQxrHjcAk8bgNYFi94s2yC45SkmEF2FXkoE2Dqq",
  "key1": "5Qva5uGWmYHLgUnWKWYmKmNHcoyJP3pgr5Jt8rufsitv7jttYpQTtufCKko9QXUnKifnqBcZ3cSHqf6wqy7mGwiS",
  "key2": "5xKpoJtifpJM74BG2Ln1LTsFTf5KrVYfG3AVB2EaTvKEqidpxe931prrwEwii83mqAzVPSDNVtbXbsFsRnsvKSKe",
  "key3": "KtQSaxhcWtF53sQU7pyd3ZE8ED93DNPaf2ZuQDqovkQ6JCRsi96tYdAWig9AR3qZEuC4HzyvyydASYuLqfuZgFp",
  "key4": "3DdxZfztQjeLtmYEfT4Z26t3FwppVDL5kbSxmeXngfuGtJFvL2i3Uv7ANX7o3Hbc3JYSqurMzNkjiW9K7TXc53Vd",
  "key5": "5NSMAK5hnq9e6nDi1kmNorANSCaKCRX7vc5QQerHZpTTt2SFoW2FqV2KDs8AhoMRVCTsCDbX5JyixRAqDaCtLJQA",
  "key6": "i6cMRdZ42eP65Ftq5MvbS9RtNuVmmq66tiwjvPrxV6o45jSEKeiA2MkP83iqzkS6kwVHTJtmufPJMMw8sG7Jsy2",
  "key7": "397Evy1tjNnp2F5FKsurGrqa9yXfQFK5z965heFjjP8XmFLNQG5Bdh9ay9QuXyYKNfaX7tAhaYDjkoweZKtYCvUq",
  "key8": "AqYNYG4HgFNGTgqFspurYMNAsvGPPpiMQKbs1W63edxTMi5ALmMTAi4Sy3WmbaFqxGV7CtTmFywVZtBT5nhYuyq",
  "key9": "2NFTSTNKRUNhKfCv9ft2SVf8CQR92z4eyaAaD5E21uUBrrnKZkEYdYxVEACc6AfRH3vh7N1Ubyk61C6EywSx1KLX",
  "key10": "3Zkk1HVyJnktcJCAWtcnHsdt7uR2rUjcHLba7TtQ3sLQjLDacTavaXPUnbs4mqMK2DsBvSawSFuovremBZNa5jo7",
  "key11": "26Qx1FTu3PinN4TTsezYtFg95HPezieFD2RiTqjaLosqcX52SSdd8UNux4pEn38rJa1fii1TAjoLMxQzu9yk6PVK",
  "key12": "Mrneu76qtZYzoyHWxxy8uF3gAoaDT8F5x5RFLKyJ9bugAgSRYTfDYcvwQ1kxtHBUiiEdk9PdyL9GdXqh5QhX2F4",
  "key13": "4dSXGyaeLfxE9VAdyFsc9erzHHsWfLBJVBrEy85vTjAhCYyauwrtAMZGYUv5f29WkDjM3zFf8ASRrdLksgUCDE5X",
  "key14": "3UQHbeQV3e9te7v7LwsCLw5NP4Rki2fjqp1SmHNSZadeKXHTCTTrspybpu82TL7eCmD3AzamUiYhkbhqFnDmNT8C",
  "key15": "M1S3GA3QVyByj4zbNQoKmEM4MfJJn3Z8JDUqNv1GjbpJW2SW6VjECHvhTKJZWm75CE4HQsvVAWPuQ18LoerT2FE",
  "key16": "28Bns2UigfwePtT4afPph3TnSz6tEKA2EsiVLUsnNoZigpigFDtZGaPdSt65oPBhLHyFYbwe6BHiK342Qr3xwdDg",
  "key17": "deZLSsDLibx72GLsvqbusJXBYXxjoQomNf5uEH4bb2Amg8UsecY56H2FP7moG9E17zomT4FZ6q5ZXPva1WGhK43",
  "key18": "5weQZb4PJ2ELWnhahCCWoYmtg9vdcFMnUiCX54KomNrPkyFJUzKP11RSeDxeZpSb5vkW8ezn7Hp6FsY7pHfgaahp",
  "key19": "3Q5dNfa3SCLWKs5rvRbETo1JBhg2kLkbhfEvxfJmWW5MwKMgVRC2fbUKkwAdKPw4xrXAPvn6eswLb6PDU6XGtKrH",
  "key20": "5HgGEESkKUAyEW2ZQsQELdynPXxCUQHXXxAEmBdBNSs4wSBm7xve5cj4kf81jiCgPh1oynezQ1L8VSZbMAowAP1a",
  "key21": "4Mio3NYgjps5zVqqAs9AzLikRVAqciK48pytwvWjTV1rhjXYcrjavmwSmkY2Wud8XcGWRhAisiHVsH4aRCz5Rckr",
  "key22": "2VV8yKmD7RjNXSMjf9sjcCGCjSf7exXWpa88nTBvTJQXfMf2L8kBG6bhfuXSFeQrzDxfmS13Ec7ni1o8XAFNJBor",
  "key23": "3tqxZ2oTyKZLnSH299KtC4XLwpeZLYA9qBhajnZp2CVohx5BLNtPj9Wr2LJhefvywp3K3EaRrPyubci2f4Gz3yFd",
  "key24": "55rDEwiMrT1T67jr2nKBWM3VQYZ9f7Wp9xx4v43CnxE7C88WD5TAeefQawoqFks6pwBFqEMTFFVACeEE7WEXtmP8",
  "key25": "4oU5kLNTkwrG5P1J28irRV21uDh7J5the4uGvz5D37cSVucMwK4G1qJenCz3d71Q7exKKt3rRWAcXHk5sk4YSTqr",
  "key26": "2b4PsAHKJgooaUynL6AGBxHUd8B4mZJ6mj1r5E3HkkeqgAMFc5of47yTG3KnXNhnhjU6VBhBTsQ4mP8Fk23bQYAt",
  "key27": "26Vh81CcFVwzpd7QPXqzLhv7GHUbdoN5zdpWQY4r4q96JNozm7AaSSUssxeG8ajkSREhg4rH5WAHxriFkvxj7UdV",
  "key28": "2FHFoF4ro6zGzjDasTHqkJnYZW8r7eGvKhhYKagr43CaRGxeLQfRmsXwzLXc2vVfKxK8UPzESRv5JsSsTrJcbCjT",
  "key29": "h8pJCbzAr6u9gEpFA2rxFFsPzYGzyD9wZLxLVwAHBDSm8Qm7nxLheiuJiBZ82L3r6rqoo14t9LsJ9ahQiNeUPhJ",
  "key30": "sgT4ymVP9yT1DUCmahAZtrNFKWpsJk2rnqykjokybDCRLTHhuosf9p4SSz5tsMDU4H2dadbVTZ3YAoADWRkSsPH",
  "key31": "49v2328XkBLDNfrTFtZ9PaqoSCkJ1Wq4Fo85aUrDvZB7SPNyUiDdhyeMA3tmkyL8DQ5u4HErKEC3BZWMjH5portE",
  "key32": "Hxp2baR7MctbsZw48ijrABYmgqq24pifs7Qzpzwd5yVDRF89qL529oYwvDQKvLqSMidUa9TGqho8NZa9Wd71etG",
  "key33": "4deq2DJmP485s6dsaZpMsf18Bgddy8vWyDytsefg7ngpFHkYEii4hB6DZNUe62xVzVEmZnSBmUAyDeA8N13CYK5C",
  "key34": "3Q74jKHLS3wLFjReD862Ubrm7AfQrdP27oV1k23p2BSjMmm98qSFL2hPVWSz17cU72SFZ8bRZ78k8Mh2FNXBMRcw",
  "key35": "78WU5oNMu92EbMzthmoBSXq3QUZ6VmGV7H4MXoNNhKkM6NUcrLdYargVXtTXQrdNB6cweXcQhfUTh82RgmpWUoc",
  "key36": "4Ve7o7BGH1gEdx1rFoizqcyugUPW5eS798wpnbxxS47hv8Cgmz6wp3Jg7m6meMDV8sLj1z3tPnMQDwLVo1cgWZkY",
  "key37": "4psATMUGzhFFraXTpC5o5DokBQjNZf2oCsePZoqXyr5sUhs34Emy8zrpGCKykq13KF2mr5M3K8TxMrTkMUYrijXd",
  "key38": "32xTGtuEuGahcLPkSUNNgiNPub8TeT8uuhpKk5pbUvipsJDB93T4D4bfpKx521943B5SMLiu5LQWuMJFpTyfCntN"
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

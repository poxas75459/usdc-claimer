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
    "24z4mPHWFCSFqjWC79XLQphLRDPBCV845QjYGVB9m6ivg7ciTNGPiFj9QpfmuAdwe64aehAJ4hH2KugJqrcnfcRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31XNfPKrp7FttWo9afLsLffBWqE1TZmnok6rdnnL3BdaL7ZMaEsAAgabGkQC7F3NqPeqQxHzDt8hffKzHoa8cALe",
  "key1": "2b1xHEd5zaSLjineaQUe2DMdkFw9dusYsrdMxaVeM1VwPtZWKpYMvzuUHuV3THcQCENuqR2PWhbyY95oyn8EC2Yo",
  "key2": "4NsNLX2VGAdqs69WXFVfBcTpGWLSqn3fUcaDh9BKb21e6kR8cFGq7veNtyyMMVWc1A9518CFoGSyYJcWmBtMLHe3",
  "key3": "67fmAc9XhEWY5kePsdJ8BUrfEyHgQ3f8147BowSqz5X17FdNXANr15QxyrvmYiZ22zm3t2fTZkPp6BKDbVGZBjef",
  "key4": "2y9BL6DwkQgg81HaW2JWKmmLd5QZYChVZrNRuVWwkpRptJ4z4J6iFhEFCZ88XMqSbMpXpPQhLvWZz3Z9iMp3CK9c",
  "key5": "3Yus9sMdC5nry7B9oumTo5DjbU8rq4aSSsRDxfCqesmkSh9s3KtF12aMv1Wek8t73DMeNvQLWBiq2ensqSNbmkvK",
  "key6": "4vbu2Vq5HQoHduHKpQJMLubS4iHUihVVJ6NZhPPboJpRn5HYa25v7cUBwqXevpcRvenevgLXyDsNWKcJgj4T7Sht",
  "key7": "hnQ6yyeGb3q4DhJwfZQS5KKdP85uHiaBULtFM8VfoFc28B36RTMY9YGj6LgWwXS4TpkSx7HfM4U7PByrCxPbGAP",
  "key8": "41Jv1MRbLcQJEiF77R7tn6neVcQRvJa7ZEZQqSWigvDXFNqoUuL3aTL6vnuNLNfFUm68peqgcuJAqzoGwi9giXgN",
  "key9": "35LSvWHTysQvyuJ1ZC7NLmTbww84sTjoWidEZCo5UAVWrhzhWw8BUfoCdrr8wXPXrgZmy9o8q3fURen4A3j2b9aX",
  "key10": "5Tpuqupp3AqTkDBx6U7AMys9FkRxufzGPXddE8oMaRSqZcYmjHcmSDgEMZXUkq99ofhyijSrgLC3soGBYuFeVQGk",
  "key11": "3U14q1SxecmuLG8o37x4HNwzYBU7q8nBhbdkHj5HbVBjWmgQdsa2CUjeWwtcQg2eUp8ZBfm7hULDmfbfDEyMcGKL",
  "key12": "YAeATuEy5PhCXToVwzyVkBaB7WDwGJoaTTmHnwUvZPGKFXC7aNTbGvzjmPhXkvEFizaZPDpnhfB6UPSVinH9u4T",
  "key13": "ynj3AC4CTjJfPPXVVDLi4UzF2ey3MQyzYQywNk1M525KGCMwU8wKQMNfZ9XRfw8x34nQhxcAwam7EanKwNZgFrQ",
  "key14": "2REaVXsut1WFHWi8VnS7QXyatu4FsLC69T13Z4BRRLYLdEFH4FNRdzgeJzHcsAn2JDkukHQvqD4qnfBqnzyzkUSM",
  "key15": "QuJQAShrEHrULGr2YjQM5Dq5k9jN2HZRJTBvj1SjnKJqEvXeMPThFpNbHUZo19RBDowKqANdWgcRHSSs2X8Tf1d",
  "key16": "3377CuxTEvspckzN8oR6JnFvnLtYjdBuZdhjK6Q4CDTdjAu228NRpZ9F6Z2sog84g6qpvd6J1XZfboH6d668CkAv",
  "key17": "5J5sUXXjMmKev5wnG9KcLvvQUGaDRTmeVG8oPJXoVhSUd94eZ6eUDkng53K2jW1jao3rHsefapsFjWo1uKvFy3tc",
  "key18": "5tStLh2YkP7TnkKWzZKZhhRPWw6uZqi3EmiC6JkJdzL8XaeTyPoUFSGzazBKXX9ADsWeF7zXEJXnWn6PPwf5PF7q",
  "key19": "2c2mnPRPp4RhtHjoVw2588KeJkUxHqVuYSLyM23Txx7tdMLv85siYzwetcH7DConUJ7ADcq2dEvkqbn4E4pn9QmY",
  "key20": "4UFxhAj2pzdaZ9VNCinEgTyVUZBQRoFB7L7xXCU1mQCmRUmMfxVMzycEUm5aiDb4Teu5eKvQQFdCREe7sridSe8S",
  "key21": "5DTFF4tLqbDKcrrJrx6AteCZQwBoudcz6TfcbNQDUCwYF1wvmnnh9T6q8SUYy7KU95P4o8nZV4VJKsWZJ1sNbHU5",
  "key22": "4zBNHf19n4zugtweSB6JNkDWfXhUqM6NyfUeqSuCUNqHLWR32HhntkBh1CFHtZCgdXASv4nmHmanE5viC3EBsXp",
  "key23": "2Bs3zLvvbxAjCgqFEAXbuA6WJkUjjgdQDqh6mMH5hTw7F6xWJKoa79FdZACchEfRTgaJqo8ghi6sNxainRCi62Ni",
  "key24": "3bKqutNuPGsiYnSvhBuwvUBJuevfPuSxdKPSHHnoVLxM9QPJgsaLvoemsCTZ8Ho7wynmn9hTkTj9cYwkbGh2v1at",
  "key25": "2VRFNLLrNRjPztyvT4JcrVw1PX97LsdKc8bqwB4LZLpd5C35XPCHADa1m3DgxyjETFTXpc62ddssyu6Z8N6TXYLE",
  "key26": "SUMF2VPWgmKQ4WrejThxqPMajGApdtcAzDDD8xPMti5SmmEhHuJW6bHrbn58SYDF7bB84zw7VDYYuSy64iwRby7",
  "key27": "43G4USkrJTujQbZbhC3xWpDqhtBKWmxfwv9Q16kh8iuaympDELgfdZTfEYwoneYeqesPkdVBjLD7Uc8sFLeFDAFq",
  "key28": "4peVZPjzRuevJ5R7k5UNCcHexCHzvZ8aSV5FJv8sXsw5BgWcL5pzdFNBzNx2qCgbFKLqs5mwHwm9Xy4c99rtwwxs",
  "key29": "3Pe8CoEb9sFirPVw8Q2eZCrCN4ag6WejJR4dk7NkWz57Fwcw6SzMVhqu6mr8rjxWud7V3Z8Y1Ef2hweysQC4rTt8",
  "key30": "2MDbREwGSHrK4BVhCNF9WHE7FQQuCJS8KhW7meA2rFFudBQTzeWCE6BDZTjMSNP4sRPDJbYtTCqZWEGEsfYec8uf",
  "key31": "4Xtnz6DzQdsXz1b5kXV6XzkN5mvVqVwxGiTX5GLDo3qUAatXSik8S96WMuk4QCv8U3cmRNPRpfRhEwJ2gGp8EejF",
  "key32": "4R8KFUshk4wyRv8ZhjYh9q7XWYDnRzwqqYMA6AN3RBpJL3ihkpFKSukRjTMycjotjoLSVt1H4TDj19VXBVR1Ue7",
  "key33": "5CcdsCM1fLKmsZfJkDEKATyp2Y5BtcBsnr8rGbtPmZ9usWhGMb9i5MPhMhE5kNepMz6Za8hC59XNKwqHABGNMDNG",
  "key34": "2u8PZkdiwUPTdMA3cZdgivDzwKXfAnjz3jjHUHmhTi8zASWUVXLnXrJfeGkKS1rHMKLq3AZoeWN7FytLzqot2tB6",
  "key35": "3imkP2pp2dBcQcipe7ZqiBNAy7ibqiFW9P8BgWvBrzDjcos3dwEeVYRKWBErWb92GenX6D1Cb1WG4SQkNtonPV6n",
  "key36": "MUBEKuXf5boMGAERxTWX4cv63SixTMwKopJsF78xrcy2Tp4WjNBmwfn4ASkV2zsbUU2kCnbZULSpXyA79izVvCp",
  "key37": "4WACH6eXAUyeTKCxudjBqd4b8cu5gCXyddiaGRBtyhinBfR67fTiSocFKx4JDPjPUPy8ME5owhhGkgqeVdbEFVJD",
  "key38": "4CT6ejAoYa8tUjkJoja8uSCNvXJ6JJ9yLfRoumWHoM9dTzpoupVBJFCBjwTXDFZnE1GPGTzUpjnPUqQaSriFqJfe",
  "key39": "FgGkt5j4Tz7Vft9czmqogeG5raAe74X6XkN3JNMfVJgEqhNshrN8A7856ibq59pNHUv8Gd9wK9hJok4rNfQ8sS6",
  "key40": "DMQZoEAnJ5CRm2HKdXj9BBM8yg72gZvnBbxoxsPgZ2UDKsR2gxXSaGcD2q8veK8PZ14ADD95T9hdmtW5eMkNHrz",
  "key41": "4VqCezLNbiGcV2VD1r1keBgDxYYBd8qhuyWFFbouUGVpd5MZ77dqtbz32cFt8ZhKebPRA4xkHN159yfwHcc3Lttb",
  "key42": "jdsihCJskrdFBcNBNb9EXwAuJsw3qLxyW9Lzb2zDU9KuRgferHtHBdgaFcKUEQ5hYnmmvpG9qFQ45kLfRRQzQa5"
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

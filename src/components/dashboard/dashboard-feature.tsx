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
    "mHwoiFyqtgSsuBkhfoev7A7PXQCWQAZChEj69ausUznhDTqno59sBtutiHxtNaiseLt9TuV5T1btez4JSZz1v4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6PqZJ1CNCSpB7eRWCe47TUG8WfBuQcSMH8R61k9nKC8U3zrwrwmEgzNxqt7jTeTXfUZ5bdD6seQJs6oj91w8pe",
  "key1": "2ES4o6sJe9y3YkifiwBU2K27QCXXPs5SFVkaLi5TKZtvAcfWnMWZ385rnsfJQZuKMq41qVg7znGNh1Qi5nSNbdCL",
  "key2": "4DfjUY5YEGZVy2AsJnQJdS5ZgbgckwBCzcDJmCRmYz5CCpxXCKRYK7bMkvd3FMrHmG7GAP3Pva7yuYS8qVwi1YT2",
  "key3": "3NtNKDiH1j1HenN91HDb1jQtX6SqxDbbbCBRuv9WawTcQnpctoTrywuSt6JHfqdtkWoWV2RyUJTyHgG9WVXbgh7c",
  "key4": "H2GzfiRY9LkDRqUso8StFzX9ahgxmA1iYBxGa1k7XkkWC3fk9vdp5dXoNqMq6MqWJxi99vk4asT3bo18rndpYtn",
  "key5": "2jAGcx6mBLJPV2pcuXCE6FcqyVCkQYduELKQ7pEqxshXCAN1Jrv555ABzT8hAGhv3Sv9jctQqXCv6HTHzdu39N3z",
  "key6": "63k57btfhSFguUca93Jmx3gHfeSQ2vQoRtMwa5HyneDWsMTXEse4H3gZkVy9wWkkp27B52ygM9g8jU5FijNuvPQr",
  "key7": "4oUqxF6UTSTzXbzkeX118kLvpifRDSNd6a1yQaCj9FQPjxwhNjD7usoBNTYYqxUmR6ymnsBfFKA85j7n89G27Mby",
  "key8": "4iFB2rjtsusFV4BKZ2tFGCxj4G6k8tCYbijVJX26KvWQcAchzDiwFB6o3aDrYSjFb7QBEFGxAaGbTMEiPfE3wUDU",
  "key9": "HLLrRpwRWSW5Zc95WPydZBpbcT6uWo3j2jEmVVAC1Q9L7UnuKTUuju8mW7E4htxddB6wPXpRfsGYm4AF1rADyuC",
  "key10": "28L4kHgDtQnMZ9pmRS1rXqbYtguvQYPnd3Yn27kXrtAE8FkLhKEHb4vR1bUaSDQ8fjxgJcJ2kN5n2U4qsqKpKgJD",
  "key11": "NUrK724PRh6AoojcLZKqYeXr77rSYboWyv1pVzwfXQvbRACLf6KduRMDBzttTvpLd2yQp2YpmEYaH2NgWLs5zHQ",
  "key12": "Je6ojJ3PfjxeRXkJpswabo1Tz34ZtsJJcsWFjSPhH93G1fBsxXrnma4YGBDNyj7NX29S5dmM75YqJoZECYG2dn3",
  "key13": "4TRDr6F78pZtZQv1U9zUTupz328mRvtupv78mGFPT5GzkXpXPXDhbZ1whHNbxbRrxU6Rw37DE4Xm9cjSfgVzeKA7",
  "key14": "5dmA4wNZE2wbxRzZmSCkVgKjWQAD8XDdsunDyCB5kpd2ZEE4QRG42gMU9tZQERyKdYgS8fUyD2idcaSQJAtGMQ2R",
  "key15": "53KovT71Whsd1Vkd2z7GUrAvBVan5rJ9Unqs4YAThEMfEzP8wN9VdMJLUe1KQYL8xSpVLqfRLf46vBRAPsny3Mc7",
  "key16": "5bjuGFKua6wSaE68DN2xpNbgDkf3cXYHQT4KeafGWRg71JChmf69GTP7xP6eTZ2N4WJzYSV9JyBat6nWn9yBZbeo",
  "key17": "4eMhTD4qG8HwNhvrkjPwM5VxqJQ8bxikwPEciHTFrkragT2DyjqZ2VterZpvJrURuEZKG66x6W2YURpi5YiCyvPq",
  "key18": "63L2JApDj5fQPdk2wSfcHc5tvPh2bNwT69bXxq81gV83Y6ifJrAa5Wq1LvZiREnD8CtsE3hhfVUeBs2VVTuw9Hyt",
  "key19": "5i6ggYcd57TSRYygRJeT8Mo2GspXHGFHLviK9QTXyFN4GwfKmFeu5H3AYyaigbU7gYyhswxJetzhASuB3gf7bnD8",
  "key20": "4gaXpsBSfx94N3sqoyDsWj6XTaNiWXfTduoQKnjrn5PpCUVY5XHJ2xhUnvrmoWUSWBakbnD6QYBch7i9QtTpnBE5",
  "key21": "pJqDCid8pQozuwvon5CfAGqpwcTq89RJRPrTRfNUKAcjetmaKcDqTbqKv8aFGVCxQticosuoy1MeJy16y3LdUrP",
  "key22": "4SeEh6TG54z9k9reNyLWEvs2TMQX3SQh1i8XwR8pBxq4pDmEg1HBP7LABPDokMrmMfW5SxzWoLGzJpBmFk3SvBvf",
  "key23": "4vsJUpY5xVPy8m8uytCgio1KGBwFQJE3QowpwHLqRScgHBFPNmaTr6HhuTj9GdNoz1T49wSVkTLxWzZTadaPE2Kh",
  "key24": "5RTqxeXSGSAJaWbSfgRFmV89ajRGjEDesPkNR8jS8YvwXHptJmdjb7wjFwaN2pC6hrNQ3XStRP8sLh3qATeJhGXp",
  "key25": "63usBMD7AdmCFVGxPefZymZm4RTrwWqoi7w7ZP46xvxWAtEHBqAAY5rUSv2uh295hUHkSaKFNd7kUeyqxB1DuEEK",
  "key26": "THMnzfTAN9hpvhhdugw36n2aCaefLDqxcPUchMLpuBZt2JsdQ3cAQAgQ9EDUTpojKwCFodoDXwBVGxmhPpVH9wf",
  "key27": "4UGCFbyvGv1wQNjjVDPjYzCXCAE3fsJHx1KBjnDB7CR3Qjq22jN2Wy3JMDAf4SemKQ8rFQo8WKL1v4Rrhn4pYM8M",
  "key28": "233br1w4bJe3K8o799C6tF7CV9H2QkyMZG2hHpHzDqjUwf837T2CURwXMpvVLYKVKsfhyHrZUJtyksbu778y3Crj",
  "key29": "3SXoQcrkaHAdX1CKmVFmdzZf1XFsfLSqnnzxihMgxbLFoZZX2BhSXEchrQZRtMHcZnhNfFXC6AkLNhAXvbdTmUJd",
  "key30": "2jTbJmbFrVWVNUx5h4dGCo6bPtFcuxbz1mhQjTohKL3uDJ51Tc5XWj34YL9HZcWP5xjUPsaitnoc1T9K5ZPUWkqc",
  "key31": "23ktSTxTUYmt2RHxfzsMbXdRihckp4zrYYsiYDYap8jYmrNMNL9kXUNtQ3wtJfcEGjTJgxubBE3DBBzkmsUk79Zd",
  "key32": "3HP9455PG8sLfWxuXJo9dV6mbjv1X6V29SF5du3MSbMU13i6nfjzCQck8reEHMsJf52MS3AWp3evWw1DBw3bHKC9",
  "key33": "oPzPdf1TjHRK8hagotRr3g74TQkKS415RwEhvnhW3omF7aDP9J8npahTbZmX2L9K4d2yickaUAbXhZVgpwJeAot",
  "key34": "3DDb7feUYwgFUo7VckxnHxR6auS175NB8fyRi3wnqN5LjmZSwNGm8CSvYEnXCjSUDLLzN4aWnbsB6X1cXEiM4gAu",
  "key35": "5TjpuWvEjKUy9SAeWmqRVhL5ahZY6okjzQu6pgd65WvkqV62VRHnrTmQMqd6xsNEUqoE5PXiYiKdXjgEhojPfSuP",
  "key36": "Atp94eiyWBh4hHUSBQN2y2nDEafrK8iffsEZc34FpXKoMBvLBF377L7Z2SRJfiVvnNLSWMQ7nGah9kK9PaKwUvm",
  "key37": "B67qEvjqSozTH8ogeM4oJ4Vp3UQ6TJE5NJmRvAC84udtpG3D7uwedLhXweCUM7tso2VBPLQeoysC4SjZRVQDmF6",
  "key38": "6YH2DUe5NGcmUC69PLJFSepKRfQUar5Y8qnpnv5PAFWPN35RpL4VGeVor1KKEfC5UyZQCiACzUogJbLZ5LHfFcs",
  "key39": "fLmYtg3g9RRVssTMzzJRzV7YkxaYJXk66QU2gGgsfWsg8qjtSVJrVkmDzpbHr2UWxG4KYgL75XANzRAR6LrmwAs",
  "key40": "3ghHWCEnzEPM26U1BaLpBUszjmrdaQS85Swgbj2LkmRxAixexsHwshWHXwVHVHeyVTK2mco6WMXFNtaLbE2JX1BM",
  "key41": "33eN8uQqxReNdcm3K27JD9M67d622yELVc4VDgfVQqZ1LrQAD8bXB7WumkBogXSvkq3CR7FaCao1GELyMBwMJPJ3",
  "key42": "4n2pUjvwdcKz982WBGVvEpXn3DB71Xiy3gPgGr7fkiPtgEKFdB8RYU5WW5QWNPMBmhuv1r3Rh7r61B5RSoAkSiX9",
  "key43": "4UdUo5SWF5PGWN2AqmAahaD1v544h783LRdtT3AXHh1SaAxrVjKragKV2Bu25sdefD2gMmU6QZDQbmcsQyHAmQqJ"
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

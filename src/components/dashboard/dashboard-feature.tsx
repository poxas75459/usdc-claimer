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
    "3P3XTxwZ6VZjDbpjghfJztqd3rWVDGTJvRDNUnk3Mc96zuuSGp7cawYKoFHeRTm8T27m9R1s19jP3QnTQJbAWxMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bF3nsyznBJjAWrSyuNXGnbLbbJuo69Hd7ncjuz81M7muBpQtJm52u9r2YsJ78e9wgzTgXxegkTc4aUGrjbUBmh2",
  "key1": "2S6iefC5bNXwwhZpurug3pUF3LJdV5CGEeuCk7XMSGAV8KxKLgv6VK1GdAP6waVatdC2RFSTbVVUttpP6b5ZJRom",
  "key2": "4jSZFbZFuymkKULwM9WcUxTfCvmtCbKRbS3ApK7ktisqFjvYWEuy2jXmDaLqxxdniwCcPmEmySAiKeP4x1jfoLGq",
  "key3": "TBzWinrK2GSSoBGjDScXP5nkZq14b3R65FLKmDoirqKfG4CQhuvyTAkMvYkZsFDRndA9Qw78oA14phf1hQfmwvr",
  "key4": "29g6YtzUMuoVF7mR6MNN1c9ZHKRgwfhHVjgsUFWGwF4JCNeXXFXTfKotYngBC13A46E84qWoW9Nkj79qjvwqRRGQ",
  "key5": "3refuz5ebdREuCBtXTDxKjWzVHC7pDG1NWWDT2yQ5fUDEYC7yDctJodbowBDoPfqtoUmVpqm6735LyGHUSEJFTKU",
  "key6": "47WhYyqJsTVQguy9cneePqmnrGdFJPzRLqy7TQYdCMXeEgAVyCMd4QxkVebsteh4YzEf7L4H6xRjMA9dfPnnh66h",
  "key7": "4Q3bZFzZ9SD8Uv992wWpyJzEZ1xDgpWAvnqC5hLzeu7EN6neU7mXkAhEj4HXGfsffMTpqzi5KTACndC5Vr32CazF",
  "key8": "3i1EqSVU2rQqAjKkdJTPn6VStYQ2TERZ5nsRDGxWGz755qBJcvvbexZQXKKpzFGTf2wgEaqrk7smDcNvVpaJR1Lo",
  "key9": "5zfC863LzgXyWBih34F4N6WSATtFCrE3m4f9AourBUdk7EBRbMaY957eA1GUxU6FdZtXA7A4nyKRqSRizhXkxtV8",
  "key10": "8wLdKuV7HkUcn67j2ijM9shaSzduC33qTGhRP6ZSMAfv5UMweBJaFVBMffg5RNPnb5MgAtDW6VbEoRqBynQ1iML",
  "key11": "3gT9KzPREsci1Jgy4V8dhfAnDBanCxsJhbDpFr3bUyPKQZ4mw5p57rkhVVm8ir2JorpnjeD9BGcnQd17EJEAeGTD",
  "key12": "4h88YZXWR8hDVN4TiUDJRrUPxLi6KKhTrFsWghU7jLAw51juHzELxvCb6EmXDf76H1XGeN7HgnQ3EFnb31TjdboL",
  "key13": "5qvFd1GbuzbiLFgRvGLSWo2U34ypdfe6aSsA6tSimJaVW67MBHs6uXcVdbfSDaTHtugVJGc2szTZynEATJTYiN2m",
  "key14": "zha9QankWjKcoV1S47NkNvtV93qb7zr8cHNh9xHXJVk6XnwoTEutwDz5a4WYwapEBmtDFWidmwWC2hrhAjPpBYp",
  "key15": "4HA9LXpuJ6sEQoJFxQd7cSUB17CXB3VCDhFieiT4ybCKThjpYKSzbTyANJytzVbthpUnvKdTM5VLoMw1hQ5aNDhj",
  "key16": "39ZQHJApwicPuPZbMzgFgcDC4abaNHqv9erVd3hTJJF1UBcW8MrMmimpDxgWhz1AnowHxCHZtYNikUxPcW959EF8",
  "key17": "5CuzkGEC1fcUKVTPNoU6BBeWYFTdZaa3fQNoZUqyMrZ6DqkFuCm6MjPKK65cQgFP5f4yMGrjnxgzGJ4nUbUB6c3F",
  "key18": "3QtVLEnoWmgqyeXfY99xmBccSgZN9tqTqLWzdrTRGYCBxBkendhPkp6GuGxci2jQoUyyBSipitWKU7LReaJuUhP9",
  "key19": "66C2P7oyD4qsKARB35fgSmJspDnvFquHnWuuT2cCY1K5U8RUqndDb1yQHHEJ6BwaqC7TYNhVHKa1We2nTSS1Rsug",
  "key20": "icjMxMKFcsTKwKrhjwsHs84UagAkc8ftcfUGJExk4PgAkZezKTNBzZHH3fGKF9i5DvtFGhJpdAMFNQW3VWzkyko",
  "key21": "1ripwBwSbranXPUCiP5JyNZywGiKrAKJ15dkxmPyHXAF4eAHy5KXKDugRzo3RwuV5G6VNWVZZaWzYPzHXmkUoyX",
  "key22": "rcFhS5aCdti2KyN2ki7vZYS59krzzFoGzMcdKwme3Uu5xALTL3zEkdooK8zgunLRBj64UF9eTrYc72gpPBqSX6U",
  "key23": "45aQGsQfBZskvTQWiZ6ze1LzXSgQPunVHvS7Voy9yuPz1XkpYXmPUfbbMARkKXnm8r7sjSVSmUQgMcP7VHGQVxS8",
  "key24": "4bEohBvSafhqPBoSkb6DyyKk4srG5PK1TRqMtBLgsT1Vf8BUG7c4GTVNk77FbF1qsHjHqh3HhAmuDitW6UAMEmkx",
  "key25": "53dUMDLrkLopZjicPRvH4y9ZyAXe53bLgLxjAyPhMCQeqbb82nKDarFv1Q12B7suRuRzzrCY1ajtE8bxStibFwTp",
  "key26": "2gVWukp65wsy6YaJ1HDz1aaEU8mYnmGymgjzMfiZCC6pw1cxFwqtg7L4xuW3PVHEWwGoRQnWCSoqhrMNWLnSLwzu",
  "key27": "2cALTyHj22TCXDWniN9TdFGjcpbJDUifZzhu6gVzdoHJ2tMDMU6bufcELR7xK5sD29j768aypjmtqSQbFCGsWLVr",
  "key28": "XndGgcNnNhx5oj4RbfU6mupyqa7FPdbYB1LxhFRJoFCSbQbUFJcn9wKGHHZbqac7agieiwrEYjkWGhHG95JACR2",
  "key29": "5HzPANfZoHo8qiXYcjoqg2NmFwE46wb1mQnPao636u5X967fUNpM4UgzLSvz8jQ2wEN7QfdUfLZ8DYeiayJjaUuj",
  "key30": "576bEe6zowj6oNCfQbRPhaWHXM48iwJJrKjiA8fzAJhJqw39rWF2J8YPF3Jc57dxRJEgXpCZgk46ZWTxoqMGtaiW",
  "key31": "5HHRjKdosk1T5vZyNsq1KNYpTKjCrPsRdXPJmz5gognbPySQWmqtbEDyZsPwc9umDfHw1EXwDxj3XzyVfToT8XVu",
  "key32": "2j2rXNsQus18cnuAem6Xym9adj3DsKY8U6z6kiNf38q75SBm7LBufJ1W3AWD5vcHXu663p1jKnZhLjYGtSYGnUwp",
  "key33": "5AcLbG8Wdc1dAE7bJVh67XFJ7yi5Gybm4GBzQNuzV9R7Z8wyW7jRZQxDaeUZowKRWtryuQaowj2RSZbArKMmUABa",
  "key34": "5QreM1fbkgLtavQNrRDPdn2x58V36Et7d2qCREdCJccDFEBtmGKvkKCgTKFJ23b7o5QJAbzrNgQnXhrVrnRSMvsf"
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

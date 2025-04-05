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
    "5YzEXKYtLiwZSBEM59nzZLChcF8wgz8t1nyEPJFmXgXWdkZRvRgk8Ykzgs25rtXSLixcySkYWpCaxGo8jAsNUzio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrzuyEoPDiZaGwVhKYHi1icpa9XxopjLJzq4KGMsWhSarPyb5PMCKtfHDXpiqgUeCxWXYmKmxEG6cBEs3dSy7a",
  "key1": "FRPNgnRgUProW4h3Djp7ypV8DQ2jZFQ7w3MUHzt8pHkbi2skx35hYx1sAEuXCitr7f1d7srDdEr4qJVJxoYc63q",
  "key2": "5rmizjjPxpPeJrkAxEesN18KrfyMUnRZK7RbQwo4kHAxf2eYPHFVxWSSctc6bSW4T8WHY2aj9gtiibu7gi8QWE5K",
  "key3": "HP6q7MxkDs2GXzJTDcN4VsRWrg7xJ3DA614D1AmfFRXuaGcRDjMtavyBf8WRVq2yP2yi7oamPJJoST4TxERf8nY",
  "key4": "5nQCtaLfJLzD8f3awtC6hYgHCptQqpfTQ2N3ibEZqBbvgpxzyxvbXgpmbM9a8HJ13t8HGJvu8PNL9VHFNovTXF7H",
  "key5": "5ioHQeRES5zoZ4QbMAESY3VWiFzfTvUGzxnqwv4cRCZoWmMifzRBXNNaB9rrrxXkwwJAvnweRZnGPp4vwGnWjPXQ",
  "key6": "22FU4xrJSoRE9QHHFtDrzwFAkRwoCza9QzBNPbc5d1jE72Yy1gRsvH64opCc4e9n5mpom2duasvyYDKQgpAL62da",
  "key7": "eLfb1UV6B4VEGuEFiK2bqNB1xHwM8XZKBbQvVNEQVB5h2bA81oZwNXW4nX9Fr377gkS6YE7aFB5FssnidD4J74c",
  "key8": "36VmMUnUFm9pWvxXBLwNRXvu1Wij9RFncbhyTukFUm8K1Amv4DXSvYNfAGzcgRWYiK7AS5zSkBUj58bMJMrsPYXW",
  "key9": "613oTR6hDVFtDwJ4zJwJiWjeBFp73SNQJkbYWErSHYyRdoARmjsTLYcDHS71qAp2zoLVvEcDPbriQnbQEDXP3C7b",
  "key10": "2Eq2a2kgkdfkRHvFSH3G9hEfcQhvsqt4bB86VKfKwJwom2UURzy52Kx6TaCvNXwQyX4Vq8LsXYXTCnQzP7eN4TQb",
  "key11": "44fodtCdD8rnvG2n8qShXEsbQ6W5mJA6cuyCgDYbBMNH8SZqRMoNMdwjwUiYkr7RBqF9tV6godCeqE47PHmrKnsD",
  "key12": "2ikqdPc74eEzgrnDm13jPgbHfUWNAAxA5jTwXVi1krzvT8grWis4awaNY9sHWTVW92abshEBRPvqvXxUH5H7AwM4",
  "key13": "2fthntZ5b77c3ShuPqa3odbHR34JD3k27kpEFuQVFvNB1ALvGaT7LeWJSKwgUvpa86GHPpJAfvGaJzBT9K8h6QRu",
  "key14": "61Pj9ABhHLmc9Lvcp6wYMUGjQZhhL7PdGA5MYV6BjZQUKGqyT9QnAoqcJCwXBZYoeSZufdLgyZyMsvu2Rb2xGJFi",
  "key15": "NitFWjw7nGgSmF1NggvcLiZsESLH3ewvKrAEJ7ZBTpaiykGJP4iNUy2znYgPJburag6ruc4f3bBBgbV8JLs3x5k",
  "key16": "471ZvMbgMqsPUzamM3TW1Lofnpx7awSxhckc7TFQB7xvurn1pR6Tsrj6uDhePMNg7FeQ6oJPdqDjFwdKUhCXbfQN",
  "key17": "3X8axzp3zipBpSZjEnM3b5LT2BPcfAqRssbWVERjfV4ALJY35MG8vMX9r62nES8EgDjiyYLTta2Xm9Vod8xMm3Ym",
  "key18": "5K1wcLb5UnuUkzdyxBPgzNzDhA3bFRJPHVy4gQgxZUR4iUKPm64XvRwvwwptCb6hqKEB4PUwhe6mJb8LAhkPAn2R",
  "key19": "4veyh4s7fHf9kWVbfW2R6v3rDtyvcXxZqYn9tQv7t3dGyPzxWfT2zzQyHmi6V88iKXWqi41ARc7KNCwxTnedLY7m",
  "key20": "4MRxckd9MyZ4C93MAXWhhtY6MZpAYNH9WwF3BwBb7RSUTv2dp4BecYGcxkwYBvVT1DHE4B7AChrL2wcwhU3JHWUp",
  "key21": "2SwwJ8rxSEP2htHTBJpjGB7AJGtFLZHfZvBjwVRbQmUycHMyxYgCHzonT8MATwwDWX6PCrzKkxpb8Tw9EVaMvTir",
  "key22": "67pm8xH46T9FdnHpYQYSURJKLDx1PTvga1hsgDwu843qBLCsfE4fo6oMAgyp5h5JChv5nXp8JMjE8nExxLFUCZhG",
  "key23": "4xvQd8wqRjbPsu7WBjunjJ3u5EKVbwjVpNXQCeUbs8aqubb6tHz88fyzc93RrcZ8Sw2T9A7rXEvtZjboEV4djQ9o",
  "key24": "2gvabxeuo8eZ3q7dAkoGVsvFwpSrPCd7r24wnXGcVUNnV24Ggss2hDrJ34deqjBwdmTQEtEqpQ41sXbjdLZHQn2v",
  "key25": "4oAuFrFSF79rHfR61dNKF3kSkgdSeUd9jqVi7whZ7YRAS9vGAh2wmUBdtUpUxHN2Et6uzf8GEPUJNMFTgyn92uxY",
  "key26": "3xA2Qxf7rt2TDJ3EMkiksUsx1R5vjo9M84UKZ9uqLUQ9Sq4mk5WoA11zSbcjy72F911tnJgBZJHt9zthobWb1i9c",
  "key27": "4YsxLcJE3EnXJJzjvWD6TNaQaCEuvDG91kR9kbpjEeY8zH5xcbZBwrA9Ay6fpFEa6WeATHXSvXWGBWiaigXsfTWU",
  "key28": "5d41zVsHEieA4CmpsR9LKR2QibQv5wuf6Pxkc7zsSLNon5TwT9b2efJWEj4aUup1VCb3muA94qQy3HqEotcfyyyC",
  "key29": "2XdRw9izsRzKMoKFvfokuirUmwGHnTxZRrZfxyZAVXHco6usarfcxtNZwSxAu8xkpoGY2xRZya8DCEEGnz58MLrp",
  "key30": "3EaCbH1NgHzCYpaLgiV4GtwLXYKnoJM6YAuT7NZfREnYBqLRrTET6VfidG2m2S8ZKceKMTr9Lr8wnKaCtpsJrD7k",
  "key31": "364rLyEzDA4rcQTcz51ZqvGGdGU9kbGPW2KVyXjiyWQX5ct6dNhqqmgaLssmy9cjJbFLEhQroNcsNASpyRz6RQnu",
  "key32": "grt2pgHgTavJcVMTbjew2Fgues6mAaaTCZcPGL2STp8zRHD2TLTMeu9JeNcv5zGhFBpKb4UWScyeKaDWtxKtSEu",
  "key33": "44mXDUy5iA4sZg8BoWr7GARPWghwNN64j9N3CUseQS6F5RBcEeGEh79YpPwW4eHDRczGbtiw7CHvyayHbFocQAM5",
  "key34": "2SBwzeUrnRozgtMKfuYa3W11SxLEchUkunxxtgysAX9DFQnmqdThCBQdW3acRW7DR8xoegvfE1WD34YY3NMXwUAJ",
  "key35": "5k1WfCFQdsbHtQ728odkghee8m9Ptpj1WG8XomW5R9naPv3BAsE64t5nNrbsBxnQp9BAoL7Buh9pPs9VVYVCwJEW",
  "key36": "21Wr3DonQU62YN7kiBKTXSJYfErbnKoJ8LVQsMdwjfbfMPL74abrBF7Ga3gvadTuSeZyonLCSER1JRpsQLtMonKG",
  "key37": "5V6KiDz3zR8iNXy4TNUcgLNmxHSQvnfHfewwavCPEFvyVJaHgJ4CSP8y8Ct44DjURBabv98VnDn47LAVMrHnKZ95",
  "key38": "5yKtVLvVB7oZ3fkkgYC4YTkSRdLDDVYiFqsHpKTrB687kVmVscZfKkrtWqt7uRDSRDfyETTJAKnU1PUF2ZrpMhSw",
  "key39": "3BJY6V9FmhCN2ooynLGEKH5si8yFkpUhgpGK7dkuxYM85Ncp3bKEu8ZkLXpTe8nExHByDbkt6QSez6NzM9WTs65i",
  "key40": "34Hy82bZvwjLb1mkTa6fQU6Z2JLNVJi8VeTsjaUB6ogSU8NmQPAJmvfT8GbHcjFACmzDjHCwNSqVG89S5gJX1YCs"
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

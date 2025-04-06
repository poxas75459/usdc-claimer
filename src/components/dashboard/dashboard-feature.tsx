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
    "U9gjhqbZgZkczLKd773FY6eUz6Muh5P3wgg3xekXQ9HTyuRRavbTKMVCxqUojvxkS59YAJzDkPoHxQuYz43kteG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zc2i5vqrFhsWAsfLep6JZ88HbAcw9zso7HyqNN1X542ciZPbRNVHwQosi4ea4y56RKU9Yd5a1jAcBe8NwxiKnX9",
  "key1": "2v1eR597JZT8jTt8D5ShcT5cFf1Nu2QrXsGtgLDx8upwXW9p94JCkU9XWeMtKnWoF3Nm6jbSUTzUyQ7hYr9sZZUh",
  "key2": "34vksVNzhDtnrQnzUNjv4JhJSNchfqfBDCpFnv1b8qm38j3ei9yKR9xroiQJYipoeFjxgkyB2TKAzLdZdUNJ3n98",
  "key3": "5vibpVuV41ux8gCP9owBPkS1r6JAxSXpPuTGRUXVZw1ZqMSwXpfdjj584XjzLStp1v5YFuCy7RjzqmgbjtuL7VAj",
  "key4": "pMx4bZSj1hWrTHeawNdXsg3TTA9wkMZWsJBeqA4qGorZi7gWk456BcTnfWek86oJ2iR9bXULh4ovsVZiPXZCmFQ",
  "key5": "49xgJcewQJbyGJRii86RjbtqgJp1GnSZCF8eiC2JgRcpn7erL8YGAFoK9PkryCDMuFHB1pR3bkjLQoEDkdB3Vhkr",
  "key6": "4aReCoyBByQUyXHurTqQkxEgUekHM2W3v7MXiwAwBvs4BYqqrhhpfts1gYZMZB2Smjf3jzRGBhKCRa77ihUdMhoE",
  "key7": "5UXZSdpSLrh87KAYWeZRZx1LtnfVq5GXZRaU3GsvCnJkupbe3FU84T73eotJdUphvw4CMvUAks95fwWCcj3EMcKg",
  "key8": "4jbTBcUK6D9RiAsP4TkHywbB2RD9MSzwPPCP4vxBbaXBnLoTyxw2UikFK8U6UvtCmVPwYgxdopgpKrm9iteAKLvA",
  "key9": "2b6ng1DUwgiAE5gQ3oyr2FjBbR6ZFe3GZcskLwZqixcJj9ejCLPRes9YJmnyqdy1o5MukWRjH6KJmiCrLRimdzL3",
  "key10": "4bVW3wcdXEzLNaPDHqp3VhsXLjgMmFsQ3YLhVZFTuv5fWGAPMEjrjFhJLHSLcfBAkZFH9Cb1r7rGrcU9wQGnXQ61",
  "key11": "341qp8bx1dAcb5387SvtmbMZvovMiiqx1RZL9UcromY6FnVD8YCihRQ86ZJwf4oQsY72U9n52ZBTzTSC4TPLwPBh",
  "key12": "w9SGj3viELWa6N8kjD3vsZ8pR7N8CkcEzT74pc22kAgtGD1VmDbK9KavSmeJyETE6xo4vCPijHHfZGWjCAygbbv",
  "key13": "3gckermwMF7BDdEycpdm6r1CrywTZprSV3XXkvzcfuDDgm4pomef7rjwBxTRmtemAv8XcnAfaVFdc87vxzyq6KSu",
  "key14": "581vDfXaAfH88hy2AeGKJz8NqdJH2fXaoWRP6ZoKakpEUUNqFj7DuLnTrWGbTmKSP2NZU1wJiz8qgfV55nnGVZkz",
  "key15": "2TAUQbcnBoLXczZj7qVB6d6LzxUHW1ffuXXg9tFdMF5Z7tFeFhBshtEJX5T2gBND3oZKJVjkJn3TfjoGXiXzvpkG",
  "key16": "32GmqaQJBbKKxbqtEv6tykC517ZbnXeNvDXrTojk6BsVgz8zEogoRhTG4JsmwFNeNSQrvRyiKTsGZX6ExA9ZnkRk",
  "key17": "2YckEMT8XWj8z9vMskdQYK4QDz2CXBN5bUzxBKDu1NphjxZ7F23fTTzTbubJXxT3F4L6g3MtKc2bXGR6pq1BBUbB",
  "key18": "2ep2wE99wrzEppATR8p9vyzSMZ2Wz7sGXwPPhmCUwkSZNpMJ8wVW4syuSX4nu6KF55KnXGQEYx11oZChxdw8Cg1m",
  "key19": "3qmyBY1opYJsyxoNYxducbDwXyV63yeJS8v5CjrEZ8AS2BpSfXQA3YxrssZSBT2A6e9rFYw2237xecYBG2ffPNGq",
  "key20": "6QXc3MsELZqMeKMwBMeLvC7CUsqpPuHE8Xmke4Qp169XbN5Pqw528fSfVdAckfXe8g2MzhZJsNLeE8pLKGYddWh",
  "key21": "zjszWj5tcTdZUa4MWkJy1N8wXanjKdiQMRb8sFV7t29NDw7ELiRdQ1F6kGj8sVnJLo73wZWW9xyNA1tSRa7vHZW",
  "key22": "Hh97NoQex9XDdLccGgLgorAMCXvzaTPp9n8HFL5yDaktEFWTq4o1QcVoYSd6uwzyVeFhjF2MSXk2QU4iQx7HFgo",
  "key23": "3emgCmdJ7Ca41LLP6i2WEnjyMxsfaSQNLL9HZ6zFJVEy7st9eiJ5zeYPoXrU5mSQTHq7su9qCLVGT6R7odQVkuGo",
  "key24": "2VTNAUePCiRfXLHLcYhYeVRvVp9iuuJZBy3bsvjnbp9nCcHS87kxJRbKPpBfAFDsv37PJ54M8YDsVVJyMDgVUSSg",
  "key25": "4rFcPaeDzyrsbN4HgjpgCo41YfgJH92yKJGZTHpAvWuTfvy79PEiuooyZYjdJrgP7nG33RpiC6bEMrkdjxACtqXb",
  "key26": "5E9fbQbMgospJoQ1ucPeGiNCrdn1duCDBG8duKUQiPWHRENE6mB5b84q8Gc7r8ZWAq9CR5k4xWYgRzkGu8t3oE5S",
  "key27": "2s6aA6a5DhLLu8ydUQ8ZmsLUjiyqUK5nhYaGvH8xD2di9K57CN3B24nFkABJxYB4jFgKyWKkqYYQM1eLB6JBvhVi",
  "key28": "5Pk11gq5VUfPGLJXrT5a7jEaSEEfEccuFkUXGwzqawZ6PKDV8wXZLUeACvcZF3Rrw6LyHF3k1Hac7d8BQuA3MmKR",
  "key29": "36S7mvvT16nkEbBtGGCx5dVG8M9X5z6HbWqJ2fjRbpUz34MY2oyWEXz8kwsYznbwefsHN6QGS78ukdkQGthrHtdo",
  "key30": "3kn9fLGwqCuqN1upMh3htij2yqnYd7DzLNUpmAgZjVmXuUnhnk3jhUx6rcLiHiwBVVsj37uBiagm2S2cD5szyG3"
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

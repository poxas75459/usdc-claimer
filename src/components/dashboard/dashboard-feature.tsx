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
    "3QSkLqDeAooU91ttcVUiwFBcw1RH4zHY1Cruz3edgcYsCcqazM3wsBnh1F37F1pq3B7Z1hb6MqpKnsecAzSyCCKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ya6ny6RX19yEjT2T2xeRSyFJghpB7qkymSS3u47etxjzuCdfS7pdLaT6AVb4S1HEjQLCV2w7nFCn1KDCNfhsxUd",
  "key1": "2UddrYyrJ3mhHvpENZuV3i27ewLvVNG7hnjekp6aPfoHnybFVWo1RsgzDw7ZTdmwWhnCbcqH5T3GyYscmmm1MDdN",
  "key2": "2GnvCSyg9HaagqmSoqT55L3vQEFKDkj4qrtNn1eX5LEmAjphmvtx4PvRQrbCk2c7sDUGcWcXKikEiihzam8CkmyX",
  "key3": "3U45vrPx8ZdxzWjcB3M8bscGe1uHNc5Fci6XYrCZFm4aaj9C7EYSDqTDXYFjyNXfrYpbD9ssrHGyZ1wanCT3UR61",
  "key4": "4cwjzL72pLcobJ8URrwgwhX7K5iXxsQ6jsjhfvUgYsAdPyQN8HzWvYnpFebfHAtGkwAdyghjHb417qePNRysgq4n",
  "key5": "5bZVRrGpZik6Z9riFxmcLnqzpU3TYHMzwgN4Ud4jpg5dZeR1wMAhrRXPJrrmrsTUPn5n2ciFE9N8vrMf9XUGZNdz",
  "key6": "62u7kBCUQj9ZWM9TtQKDxMNvb9eUFPiZ2SAdtn2ECtAoGjxpL6unAgJwK3r7VAF46RTpGKdWnjhMehycyitqy71K",
  "key7": "2wMF9FhjEsq9P7X1QQTRtfTurVqkEHXoTbbYfE3Wvp9PDMT4GCNK6NU1YCiqnonwq24Chaf4wk3AVyxU8XLA4pUR",
  "key8": "4TwXVBERewsnCMkdSrZCMnJXLTgV3QaRACbNX5KBLvnAVDpGrocaVoPiMXhXckm5qaBvskGi4vrz67p5ga6r4agu",
  "key9": "5QqEU7XmP1kxX71554Hq1DaXJPZncmum9SbBXmizRUFv6gNj1fkrgygYDJa9BzXT7pi9YHZjyzWqdxojBBjZMoBX",
  "key10": "4WSVd1iZ7sEmr3XY2NbhJKg7ynKuyVcYz8BiCBkzXSYpVwBYLeXDR3W3gRVKAwjDv9aHJij5MfTVy7EM6f6ArnHr",
  "key11": "3iy5RxWJMs5DVvA74VerTqGTKbUMB5mZtjCpuNBb8f87dFXT6nPSyUjdo9TYUUTPF1NeeeGvSRGR917HXcXjUrYV",
  "key12": "5PaVJTXBXZ26ST3dQCjy456jJkXHgFp8jRsoUEMqo6phnDD799QLUZ29LBYR7NakevkSt7bqQzkKmADkeAgzHf3E",
  "key13": "3q1iY6eE5Veoxubnay7vegSgk5RMzApzxqHXajvbZBi2fAXtwPri5xcAYzfZCCqBFmkjHgo9CNRhEejMJqayQSn2",
  "key14": "47ZyDEEiv6sgKEBJYFh8M9k15J95WDejYJ1TLhehVnvXM4nRAi1LmPTT4Mt2FxeCRwoutmi6PaegF9B5YBXmUrpM",
  "key15": "4JrBxC8jyd9g1XbWFqfX6Z1XMUmrwJxKRoQ4ZRB7JLpsPzByUCDHmLxzy5Y9bVjxJyJDbTd31a3RbFGWmmSkFSru",
  "key16": "5qVskWFNFcNmrXx1TAQH3XUDcCDze85Fejy6TcmbdfXkrd6XzdPyefVxRUzRTpBqp9H872Cs8evftycy3wWmHtLg",
  "key17": "AwbWWsHxbJNaAT5jBuCKPgnM2okYpCcxGVCs51nh8dBT2URYtGT1NsaVukhiUK9gDciUsSD1jKY2eSmbtjfHbts",
  "key18": "Zcz9nQetD8p9R3nqhwCtMFQazUPpewMwPDBG2apYEWSmBAgivZyA2nvRE5egrXJLKwwG7BEAVJtSb2LA8aWmLWq",
  "key19": "2iuvC5SsJUHo6mnovuLoH7SPn4L1YJ84wopaZJqoE8ts2oLmprJBpWrzte6LzwUAfJY636XQkAtifdt9NDRpKP4X",
  "key20": "2nnuPuY9PybCkf1dtd7XhsKheeGRU5PpoeE8ef2wx2uHT6BzJniFHHT7Ka3iaH3T2DGxmeTnzB9zPyQJniLe8uWR",
  "key21": "4xDetu7zSQj5zh17hS8GwfhvReLYzu264CvUARvkrAbqZ7t7Lwg7pEJ6GpE6ks5zZzW6NHcMyvZdkBCzosGLqDGu",
  "key22": "5WKaV1DG5MdgbcgF9RARWBg3ZmGWJHZ1WZbMb6n3NzUF5znGobTKQ3hyhEyWUtWBmxWMM4Ug3gHmpCmEDXYyjEmK",
  "key23": "HJDibqRHeBkyiuRK75XAVzrtnubbaoNWavQZ9n7Kx23LgwzeGuM8tTiuDa9xi2uvFeZc1Ni3RsskQytC94pNeKf",
  "key24": "5x7Sj9Ju9LheehS7KS7PDV89WYvuhtnVKXM3hCemoKooAaT1RvaUHgukc675H3PzXM2rFZVPCeSY1xUwN851h8gg",
  "key25": "xJF12E2EZWRrmbYNrCvyq1d7qMUMGo3W9T7hrvdGV9UGpD1zQbYqtNbNP3ACDTJZzG1cLNKX6D1VCFeMi1aZiF9",
  "key26": "3EeSMjAvATSs3bhkDrDrAYri6hfQUCCbabDLe22Swcwc6rLbKkfvPVU7nJqqA562pJazZ5adpdPTC2o2we4BkEP4",
  "key27": "NX6zKZKAvvPj82iWBfqnwMXtpjBfgD6pBYAv5CocFhhANgrMpnZAXScBB3tYreFuyjANphNCWiVWWq2YowH3Zmn",
  "key28": "hiVBB8SjMwBfef3kEewbS8zpdg7dNDnjRG7iXZ7nCecSJhTr1mcuHAF85b6EcdNz3n6Ri1YgTazbvQKghtp4idR",
  "key29": "5g9cyUgC9BnDWezVxFuTwpvuiDnCGECfQ8pACibnXUFsm6DfaDdbFM8geenawn1NgBXdM3FMB9JDtUoqQgvDSUpR",
  "key30": "4LyK1hZFpq9MNB6aHWMtsjMx9tEJCe4XGNs7L4zSLUQPJGgZDFnoA5d94Mpa6eX5CksrmeNexBUazY2saWxnJyYY",
  "key31": "2JeHeyVGpr85GV4XZ3DWguTexyWt9BxQWfQzrCu8w8t5Ni8fRthzxRoxTQXtB7pDqXtopD4DzGjd47oa9K63YYcJ",
  "key32": "28qVFT5EDrwPWuMFENDYqLdriU4qB8MamCJnPtWmRMDLEsNdaJYUzBvWiaqJAEVWMZik5hkQvcAdteFsiAQVXngs",
  "key33": "5WSV3Jbja6FBzR8WsSdnQYwk3aDy2WGBZhUUxBw76v63hMSAUiJLwyT5VQJTLY6uPCnnivDScxNiZVAoPrh3xntT"
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

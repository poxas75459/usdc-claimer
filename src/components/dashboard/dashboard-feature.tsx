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
    "26tzG7dTcWUzqRDxfww1rPFHiQC2F92tBzQjmLmxoWsSd6mMRGL7tFzC4JYVPkzjQTVAd94wCT99qks32b9MURkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3huypgjR2Py1ZayG7SGD6Bv2qvFDfYWDShKzm7ENi3cvF4Em7LKDn2Z1AHpzXstbkAChvG1KNWVrAFRdTXsR7Ydr",
  "key1": "5K5aGRSfV1qYFyx3Sb3LNTG6Ti58vxVM66ayjSPYXcuxsYyidRZGvsmxjMQpW4Sxeenzu6vXGYVbJYGHcnmQFJvZ",
  "key2": "67aB2iJaBwqmavTZF9z62NSkoSbFA9V1dTcVNvjVcTLCnDrUjgNEDZb61Lqcg1T2v8sbpoHd7XCupR9RBAtmqwKy",
  "key3": "XUeeKNBX1yYq3KZ1tjPzvAnAwaxGmSMiM9wvQtaKj9xjZA5i2yX3ghKfd9pQyv7TEvQ3CFpgGZUgCkQATE125QR",
  "key4": "3XPJi2WAWinJUB4vAVbHzxmng2buZgnCk2QinQZwzTcvsqyddKDkDL9Eew1zt7GSejC2Xzc2oXvASDufBEsV1bCt",
  "key5": "4agWkYiPMCZHbZYAB3U1A7vBXLeppxvdwiW92Af9pfgoDsLCDei6KmaUbM4V8RrY8NaKcvJMfCzf78J8duHPz4gB",
  "key6": "3xZFhYkVTgnCmCDrJ7ucjaJy8zCsdqfpqbceqioHVZRucxsXFjozZe86no1LtGEggXCifaKZXQAGeyjpNwDaZBSz",
  "key7": "25ZYARhohKyBN17sjiWpW1Kkpbo5wQmH8v8RKYt4Pir6bk3TWkPMT5Q2J3gzW3UFACwsc24eECXu3KKQvkkQiuiP",
  "key8": "58eBYYkADdjwN8z65TnRgp33HDyZr3vTDuJzNTHnoJMraGU6hdzfM5uW4xa7uC8mgBGhqfL7G8xMZS3MbK2CCQuQ",
  "key9": "2DB7R6CXx3TYCAydEXJc6rZj82DJm39KnzLAnWXTALCXy39rePntKJXsWdoSfbhgTNakQobhWb17AtV6iYfCVoFo",
  "key10": "494VXwKmA4CgHGDWTswXjt3LPa2jtpwSQb5Wc7ZxeSJQRBN2Kx3e6jRB5TqVZJ1MU4MuMsuCPUqi8tFsuE6niVzZ",
  "key11": "2FMaWfMSbdX6yh3HPcmJL74N4AYggkQi8xHKsYpMAz2WvMrDkrqHfB55SpmA9vXUeKobD6fgpRz7HwEhucV2nm3E",
  "key12": "4d1T7n1nSxfUX5xAsEcVvAhxnNTKbCUL1XDTXhswKed2fj4SssggH6dmkdfxjVEhnvsDTH6o4p66NyQU56rrzUrH",
  "key13": "3JLC6nMzSTvEnhvbXgnSg5UdTMp7DD6PcY28Mc4zqwQ4Gu6UzmaVGvqGt1DjK1Uvbr1Y9TW9k7Szwd5rjT8NYTSb",
  "key14": "3T5SKsemVGDKCRdDxYzA6mSNyGE4XTN3VN7dn6mJkAjRVmgMZfcmW4vGJD2tENqcAsYYtYsS7A36vqstZSw2hXzK",
  "key15": "5wCUqnzr2y1cPtuY93fGEhQMyJN6MqBuDit4GQbMsA7LUD65zmxBH1aeFcV1WtLvAnmbuc3K3M9SiutpXJheZHzd",
  "key16": "3xi59D9oEKrwySrsNTYB51Tkpr8zv6qcXDfSVm1TvFaK5a7d8XDK7gpUX85Q5XZr92rnDqP9Wm4u8ApfH51d7rRj",
  "key17": "3SLEpqahkcwSwr1voe7ttVrUBMJcikKZwwDu95MHBmJEQjnpiDwtArCZ1etAVrCTjhZ37TJV9RuortbVJ7bqE2hv",
  "key18": "4fE258wDmge9yYtFYdNkNiHJMA8LESmGXsu9C9MKrv3Rcy3oL6Tiiz4s9Vc3tPCMCzCauMsJ7aKPm6jE2Y2EcZtF",
  "key19": "42aQtUSCWNxq64ym7kqAznskWkU7XAhEW72fQrBnnVH2Lv8i9LFXypsGiEt4Jjh1eVLSJhUPkdwFd47GawMfU99t",
  "key20": "66ZLZAwF9u8EjR7uH9k8PmsJscx6YumDh3y4xPXMRmY6JjLvKAGoV8bMNSXX1mjGbfRqbdBHo4nJJzPTR5mzHmDz",
  "key21": "5uUR8Y3srRKvBsFV6PA4FsFMeTzELYsGY2M3DJmGpMu4iKDoeiJcoausN8KGRA5RKyzfqUatFdWLQizJgYDASRYB",
  "key22": "2wieie82mq2wBRW7h5ihmvXA9sjQSgfJbfepMRr9fBdoM2dMY45wfXsHhEAhmc2DE3HY3QYdzHfZ5jXHXQ9fXmrr",
  "key23": "4qg98a47piGWtrmi6dPFFb2K5bS2yPBspSyD7JVCNqeuhRk2JFjm2HaRZwVnp1y6dB78NubzQNpJbb88VktZEZof",
  "key24": "46iWjC2K9D1LWX6nSkq4moVAroVNMZeittXr9suMbqevL18sfU46wxeAhXpFKac6MZCypktxmSWFFGEVtcipi7cW",
  "key25": "HiarwJx9FeZJre8JC31yK8DAdTxU3bmW7dM9cgDYdZVBJ7BuzCjsnUTHvb1o8Pe1MDZPYeCxkPks8k4i9Tx4PZz",
  "key26": "4B6QWpHf83Tcpwz1ayczx4gREBKWFg4QYjpnnLEpHm3kknREgAQVAuradkrhfx1tSd7dRMgjprLq3sv6C7VM4GxP",
  "key27": "62GcVjsHvYhvX7LU71s282hsCEvSszA51L8m88dAgFKih7LjAmM1SoVqW687rqG6Gv2yD1eCpUdqQDvJ5PfJVytW",
  "key28": "4LdCb8raGgscBFQZbap4o7ANsPLjU3BtbiYE4ymtfDvpeVycyFqaB3r8mSptpYmU13Tnvt7HkwNotjt2G6wKh2pL",
  "key29": "2VAJHDYee4h75x1Aauu9XCRNxDgMNqhGnibbwbyoWizi8TaCoxTvEMkwrDLuEaTmUoW4ZNHszz7ue4rFMBU3uzkN"
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

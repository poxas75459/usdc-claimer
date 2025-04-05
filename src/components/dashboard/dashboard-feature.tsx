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
    "2cd6RpCRW3JUSdwF8KuzvUcXvEo187LBtT9TTbCwLAfDyMwPppH5YxQQoEXVxLCcqU9qakfqLmtnw9YEuPztGuPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52i82CPBqXxgxpmba1iPE3GZYKAJT4j5FbiF7h9TtwtGeX7bpuxxEuZSGDnAYaM9RKMcRNvTr3mQVKNiX7ANGs9x",
  "key1": "63QFbLobTNd2sNBNERDZA9qWReeK3PehJ64rCFQvJaqiVJ5xZodoWaN8M3Adm3KNBDQJfRfuUUhaqVF2b59MuvB5",
  "key2": "22eC8VWwoQpDokLaMPQNH5P6iF4ZsBbLifozrvgu6VQKnFjgzytBGscdgeWUD3EUsJP8n3bEh2Y3BMgD5N4ciRMn",
  "key3": "53NhKVFkmpVv332TEmLjJtxcSiZkga6evLHy1qTajWuGKgNWoNRxBLZDY7mSngKAc5Pjd2PLZto5Nsi3wH93aM5z",
  "key4": "5YhVD3BCFg7ZRna8MGhf3czVbWUGiXopxgknv6D6jRJhKZABXPtjUoxHivyfKEHWzsEs5uS8hwbJfp1VgpsQ78gh",
  "key5": "4bNYfaPUYjoqksSPiF7NKwGM7WrK53seFrn8grAxZDi4LmboZsNK53HypSMKjnL1dF6sHTF2hDb26WE4LBqXAqn8",
  "key6": "2tQD9Whz4sPRPR72cSDDL4sutJTexLQtohzenaFYefnH9fkL2zqB6urTo19ouLT8kh4n8EiBpSfVwtgt8tasjK78",
  "key7": "3dmkapM7yThqpZ7CEDzWEuFPGsaAxcCUn8EMwY6yik4GKZabYHd8LjfHeFtGvzte2ZEJG8hsQ4ETG1qxwtbZ28FA",
  "key8": "31c1MTfFyB9jyda2pRGmWHhFtXiVPodrJc7wh2F35JxxxGvB3wh1SSQjjVDnXAQXi7PYQTSqD2F6tLNnGJXJpu4H",
  "key9": "3qMB5EWBGRe9gVQ7PjuNJR9dC8jZsnX98NDEc5udJAFhGrM1awZ9SvPKv3ZM3QN8xS72oDgM3daHw7s4y7KkodXk",
  "key10": "53yK6gyiu8EanWUiZ8m3b4rzDMwJ5eqvGX2V8isoMaPKELdujyXa3aohhf4EsMcw3gvDS5uqcTE448S6tXmrUVU6",
  "key11": "41ZDLhdmfMQfnztWd4Zr2SAbfK9nUosdbrbKdKJ6FVwivGcKkosS1Lw6xGFTxjE5h8d4KGzDtfmUhtDomqDRqngM",
  "key12": "45apbS7oMsenWbAxZWy9y9F4z7YqhL4kWbTnjz5WfnCJA4q2fnbAvpb78tjLa1mHqtZUb29meeM9oiDv5tQpC6u4",
  "key13": "5mvrYb2t2vYqA9tFYJ9whemjmEzSYMY23Rj1GNmpvbHYb6auAxooBtfJEeEoV9uZgcRYskoyz5GCzrBKKCtXBNRg",
  "key14": "32UtBEJ1bgpx2jtqTer9NuDz3ABEeL3AghN7GFotzUyBtedpGQMPF4DteTXNJKc2eivCvSS1KLqmGtjbBkKbrkXA",
  "key15": "5KX1WCEcdSGaWW7HvzfwUngWsewiuUJDvda9a3nqiXTavPeYdF7YQH2XbCTiPYs5EWo8P8xGm3MVbi6uko2YRr9G",
  "key16": "4PZkFahski2oRYRXciK9dvikgBKPo7MyqiJyK5pUwicA8tGetqoKGZVxctYvVNvCky1dEeC4J32XKPj2RRwaqaPM",
  "key17": "2neyxhjsxWbqQ9paVp5Gs7cRQjoYwoDXhFWccKaUzVFis2abEtDSNDXbmb9RdPxiZrCZ1qqtbary1zH41H8G9uG5",
  "key18": "2T1w65aV9bneM36NamCsp9Qg1pmqyMX8qzqkFiPzS7yt974S2Kd996oyTgV7KjymHgmM4cAjGbM9oqVV5XzCDrRU",
  "key19": "2pwVpNnbhXUWSH32EPPJyvQgqkaykKVK8yJTc8rHAoTHiFYTCoYxDBqQ9mfkffdWE2oeRyXCYPTQz54uhNbykX6V",
  "key20": "Tfvnww9zY3jkqZFL5yKGEk2NyjnDUB2sJGUUmaDziFtymUuGsxuFd3xuQMjhdmXoQ7NLhN7HVpbBVnERh9ZiCX4",
  "key21": "3wL4p6ZUPDEW4PpTM3RLGT7ALTmgRhVLu8DL3zVXMAa84e4SVca1yJ7V6C2x4CaDxCayBKsdPd99NPkj8B4shk3",
  "key22": "3GznvpoxEa3v6m9Mzm6EGnd5eRHUaPuMmLgwWM4hbozxb3tj3DAnH1EF9qYgRnZpsbqsL4CQ2vi158ET81McTEjw",
  "key23": "3Zv1cKFdjQrV5VQhTJuChwXqt2ykcxpyQsgSkuf12a5zquDrHeriRQLQSyY5JcZfrMfQU2o1YFZkZStAeScbzjz9",
  "key24": "3piDtP8Zxvt8fyacDGZvL92x52VNiNTCjgYJ44yWacLpY5ucbfQE3Vb9xYDmeGz5G4XCg1GJRbyDtzQ7yPx5gpR3"
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

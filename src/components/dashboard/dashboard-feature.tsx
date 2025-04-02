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
    "3P8yK9xyai2qVp8HkYAbjMZzahnQUncL8vq33HsCjgq2DB4PcQPz5Z4oqF3j81YAGbD1TwM7gLoecoRpZiyipToP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5172Yn2Dhs7dYATSmGGurx3MWzMywM8FkgxsTzfLtZCBMMa9CKx5JiLaJcvgMsHW6M5rxxJP3YnppUhRmF38fgDa",
  "key1": "1efhMawocdNND1orAmF2DczP9WVLFSx57U4aSgAaLSZriLQT6zbbNMTXs5Xu5K2HMHcyqGqnpkpZWEccnJvBLxn",
  "key2": "4zcWgpGbYjq8TCVg4bYFyAGn7Q5e8p1CScePDP2YpY9oGpwkVw6do16cQ2Zjas2titAB7NVT5LfAj4T7vKYvGYzx",
  "key3": "25s4YvgdScYCDtjGQthssfaadkqaBPpgc4kPfNF8SKJKWSSLG4rRNUnHLDfCxsVnwLo9kF2DXbn73qtRH6zUM1fa",
  "key4": "2jdedjt2qgAwePdizW1CxbvBLxseWiMfbNUudNbcM6wboSAfDJWGqC43px6Hu5qhc3nFyTv5B3EBq2uvwBTytthj",
  "key5": "5aScjtduzmSS6QpqAw1MzsJGa9KBddqHTbFkCXdW1gQXqBhgdckMJFD8B9R9koJZEc9pN8pK65rFPUt44S5kqocx",
  "key6": "3YFUj2Gxwgx49WWtfYfKrzcpJn9fy5iMJjM8VDupmb7nBZncAZGTd244AWwfFrCBskC7TxsZJ5uAoPGwSqPiKQm4",
  "key7": "5aVXgv4P111XbwTHzK6oVBckzfzp1LLL3gRhWTyn5nAjRvbnQkjnDxXkRg56c351nDFpyY4icJoRhkZcbJ1j3Hpd",
  "key8": "3HksMgKkLJRaHphqrLQuBAbsXQEMeG72kHFEQjvgiCVdsJULdVCBnniQ7Q7WsQi5phuNgUMR75LG3yeX5vCueUmg",
  "key9": "3i4rvJZUPkMGLyEvaePkP7D75Ek2mree82cS53SnpqpksapvKb5snUREVWLL25mhs6VzokbZ9c2Z2rrd9bQMkFev",
  "key10": "2xWfP8aCVJeAbwWSPRUqddCKW5kzvZGei4pz1gXZMR1GtbdBapVGqarV34k6K41WkBRe9JJiv3rkqFCwc1S2e6hu",
  "key11": "61AMraFT4xCXZTKhB8hcx6zD3LoGCwQ6t9JWp7J6DB1i9FcgrhvzdmhoZJ33eR7VtSgvNgrZbYWje8L6J1H1q6Cx",
  "key12": "2kp8Uvg1NsLefRo3xdX3PZt9BM5zcuhsQhsCYCW6xUojkmHjER3iriEPzm5ViQRdB3WDj7xuf3ctYb4WPpostK5T",
  "key13": "4TnoZ2uR8J6E5u2eWHw55Y4ZQ5e8YSDRMyHxGFciAeGJZwXm3RrwGbcmtn4cpoAs6s1fLX4STWrFA1ZF5Kh3cegw",
  "key14": "2wanpikz1xWZQeRdUQUYdFVsYqRpPAkXeG3NDqCYVWr3upvKbf6w95M9YGMQmrwCzexJpAZ42YrpoKQm17sQ1fSA",
  "key15": "BNFjrQ4Qxj5G5Ynxwcy2AMBw99ANqEEDNYfXBBQAL9KBEZGoHQ2SJP9co1nW9ZCtN2QHre6MqxjdGXSzEeimZZm",
  "key16": "5wWJzgJW5o6j6sjvB8P3H9cZqJVym8DGfxauVEcocBbT9nmGdjhGBE23Mo2grQD44D6CZZtnyvG7GXNn1Z7tcawC",
  "key17": "4agb4jFjtwP4xcsCLnnj6DvuHFKuaL5hThvXQ4xDq5QtCLUCH1v7AWrakexnA15raPusEyC5i3yPoGyX3hvcwNcY",
  "key18": "iT5K2LNUqaS5h6bkJKNc84KhdLSsDu7XELPxm9bAyQUvCb7cqajNDYWZaLpvXWvzmV4dUzXu5cg86Z34VPJyK28",
  "key19": "4aPoZER1w3MiB8S89sUVDJngZgwjxWRdfMJabrDvZ5YC6ADCv7UTHC7vWX11kkP8jQFTG6gQLSGAxNkPSBE5sSm3",
  "key20": "2e713e3hePwY9qTrjLivhcKKbAmzpp2puhB9Aahj1iQPoW36MSN9fsbJv4fpEdG6Ekcq7wsNdNyVVoCh73KLxNLR",
  "key21": "3UgroGkUPwR9nwmQ71NM9KBMiKt5b6eYcTty1GsDg5a1MnuabDb6SeyLeeHbBruPyPrbzqau5Nb3tvZ24b2dTz6D",
  "key22": "4xWYmcwfsSPjuUCdfpHr7euhbdBqRBrDfWqDP35AcgYaGQPTZmdKFBmrNQQwYQsuGo72Hy7koXtxAdwgEWp74nXn",
  "key23": "ubmWTeD7FCojgca7J2SKRgngvdBStRn7FPydBdKAFDvYwFHDHKMpBf8vFZeE6E3QdfCSypHtRj2GF68GKryXkNU",
  "key24": "2EP22qjhrszpaN8sFzM8eShrMpQMDAwKJ4oxueBKHV8kpcpn6zgrngjoRqKJtSMNzMVk1Z29tHB9kxeyHJzcuzm7",
  "key25": "5bxwRXZSJ6DXMKjptbskoMn6vuy8aCAig9ZzuUWWbHU2KAJXy33Z2WZwUU2JFwx8BAZQdiVfNknjXKG7ctfTgo8S",
  "key26": "2X6hy5eeacpL5pcQomyZJEVxnPCGA7a4d4n5FQp7az5vzHB8GGHiKKLfSHPLQ13nabBS91WZqbNdWGAdSfhWHevX",
  "key27": "46YxPSPoe4zZKkwzmVrGmd86CCE9K2E3FZ2xMoYSXTwqGtccy7yYmEMViDfZKy429u7BxbUiQQGvVp9RoJ1jtJa",
  "key28": "2kAJr2QVByPuVXFovs4gB1FjoVXcT7MRLCzDdhNMSonKxKrtpFLRxueWerAqHDBpg73e22nqFfKCUUey19XgieCW",
  "key29": "4PxXNQLxV9eBs73cQmmJuFo81UppEirSU958rR7D8ERAtd13TUQByYnVMUQbDpNBbT3wZTUgqLefafoZcLC35Xwk",
  "key30": "NT96zjhE7nNNgFUYxUpZj6uX5gfWq9jEeBM3Uh7YfETtQPf99FjovAKRCsFTwFTBxqhF8dCQHLQCLzVoL7W3QEv",
  "key31": "2zurRwwQPqNtEsAU9EU6sfRY1N4jYFTX83ZR4DYkfearWed4sef9rN4Gw9vLzdA4KXsSFE69fbMzGCPWXKo8mQnG",
  "key32": "rdC8oQe4Nr47ZRqAR842pgz9vch1LsZH5QxXxHXguSdTf4oKTKEzAcWbAoZScbxGEYQ9Gu1sqS2cbB2W8vR9jaU",
  "key33": "5BQjNyYqZYXgg5SC9bt84Ly8nT7dh4d1FiJ6fneR458tkZhwYGnLFfqjH22rBAT6MxLqz4rAC7U4YzHcq5Nkxmn2",
  "key34": "hFTnjXmUGQi3YYfM8BvwLi1Sdg8JSm8Kyymzieg1oTQmZcaXuan4eyTjf3C5wugWexAbZD7X2uZ6tribgHE4Mjm",
  "key35": "2JfZDnB3RiRu1j1xaXcMNZABHhFza51CeaNLtNZdDbpfWea6fjEPFe8nHzzDJwr6n5uNcbPsuRCmZYUUwHQg9xhg",
  "key36": "4Feb9pySXFsubFHPnXyrHQRqVVMjUvzpDkG12KCUSzi2Fj6wyCPazaL7kPTRuQebvoiCQXUbMZqjXDYggVft2k6c",
  "key37": "4HDLcDqby4Anf5wLbVe1dnL7CTJz4HMMqhyDwv4SJKMMtDgoLsbE6DXnL4aviKzFEtUPXyvNmgzVbfeNFDUKBHpd",
  "key38": "3GtHRVT4j6pczm2tmrpbjyAECcBdKKnGNKf6F9hdc1ZU8tbxMa8s8uSEtZT4TYUp9iTfXCr2cXq66hz7aR17N2VY"
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

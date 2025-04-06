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
    "5t8ZsFuwWRKcGBmcAhSPVK8cRUWBrTRFq9ruc3r9FU21NaqYiv39AgTTUUgsZnPvGJKkRQmgb6qt8yVEoKdmhJUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3neVyvvQT3oYZ4C5fdW73WAfSg8GySAn6gGVZVgPB4LS8bgvR3bfK1z2ytYC8rFeWi5gKFyunxbwjx9LT5B1uHYF",
  "key1": "2qduoSHhwa5FjtqTWq42aQ4z2ECTfFFNMuQy8YaEsLoLSUhfj3WoetPvMCcS3bQPfkSNugbGwB4xAnntxdMpYfUE",
  "key2": "sKNQGQbMEaJZzMdTtHedq9pLTD8YqnDNWzHgabStRqTDd1Pb3Ekn6UQZFchCyVJSSbEY6Q7XDoZiBBDGW6TPwpe",
  "key3": "4569eBQz1jUidJURTPUVY2rnZcjDbps7HxXUAeX81KkWCUJSSsXmEtwM4pxJvsAQAiBhs7SPxKQTjHtoFyy3RT8B",
  "key4": "5PvgnUEVHGzjRdKZk2yZkwjQ5wQRQ84TtDB4ecSmehjpM6HMHp1ZZhzyRnJbE1iNuYNFfGHqStEb89GpoqDCQzQV",
  "key5": "21RX3PtZDydELx4S5rpoawYhaZFh9YSomgFGNDeZnXgmGxn77YuhFHCBdzSig9QyASTAwVybR1NttXonX1AGgU14",
  "key6": "363ReMEi5SEuZb2Ut7LuGuVfvFUbHPUyBKCpAdNoxnxmE7LMRbo6uuHerBDFcRwEgMqZ4iwYXDSMZGZg8QE9iR9a",
  "key7": "gotaWuHbM81gKUqBTSYUZ3MXtB14qwGihayDujHPDo8Rtagd631NcFrQgGvA8ehP8iZtwFagk8dyuxCPzUAZYD8",
  "key8": "4CiGnYCaSWVkDfhwN8n8xH6wP818cgNEF8RCwvQUcwqLKMWx2258cEUwZir9HyqGNiKEYuc3S5y8b2Xm6fAftNFo",
  "key9": "2SX8LPaqjCV3p7WwZSACJ7JVQJ2nFoX3fCx8mbpbcM6qqEVb4VE2VNMJ2dgKUVM2kUAiwKmQZxkXa3RkwWAM827a",
  "key10": "6anCBeJcWVyioQHE3sRknZkYttynpeHZzxZSYi7hMVybo1LEoBn6fabxFg4aDAjEN8nwcVXmGfgLWPinciLRmqj",
  "key11": "3osAY7xFEqHtaFonWh54AtnqQDAcj2setFuuJaZ1MwcQPVZgzEkioDAGsiS2y76phrc7dnBVpzarGsywbHgsV2ta",
  "key12": "uF8A6MvxcTERBcTNTxYT5esn3ZTVarCjfUWy7oNXSdQN6TCFdW7q2N96SuBb8GHd7JjwdRxpVhV677cenmH57Jq",
  "key13": "NnNSR7msRVZuecdvJJRubmzCYaH5d4vhak2ogguaiyiFXz52BvrCHDihgTy3zhjzwVwr3392cR4YAEESKrMXf63",
  "key14": "a3BtcemNAroGhVCkzCc4uaf93pxN9ivh6Vd1vfvZLhGX6Rtz7D6FhuSGexQaVZmLHj9QzyUsojHdBQzTPPpvDRb",
  "key15": "3rYCZKuCVQEBRAk9NiufCMDTbxw4ig7rhDAJMyrCqMZsDqzdx65UTsv95x1nmkayy4QjULDuTDds3WoiTgjwh84W",
  "key16": "5doZ2VypWGpFbnAjs2vrL4BnMSkJrPHfVd5PdiXHMuqr2ba4wwFUoWZRPgyVP4Ge1mV7hA2ijmF2ThrwvkgdtdpK",
  "key17": "3Jr3kyhKpUE7Rng9H6CmiHTH3vqpVz5tp9iczhrPYrsXhj79LitjWbCe1vdGtoGqRKu2ecFkS7mfdLLdjTcjoHV8",
  "key18": "39bhCS9wFgdN52ewpZLoBb3sjawDvMJoMdDpjyc3kTsquLD6fqRCBrRrWzNQyfieu75zESvSdmBsWYwymzy7oEKn",
  "key19": "YuQ8Eoq9dbgszaS53KrFpbyhnXWDdwZXuTQsT6YyeCYfhgm7F6XjL3Fa32tD3YshRs8jLf7euqrUWHqYMieDzMZ",
  "key20": "5LDNff4ByaBRh918zoSE2NS1y7MfXAMomqDqWxoGyEoraWpqvZspANs7t6FJfvJh8Xo2cq44mq2eH4CCFdaKKjNX",
  "key21": "MQvRKCpxAu5ubzqGu1EQxfZ7pJJMQLbANdsbx7KrJVAbCyoG9J77k6BULUBU2B2HYzv3EjA5xDqJ7BXUVBCbEzC",
  "key22": "22vkEWotcgE3Y3hnVtC9yd8842a9H1rf6YxqmUwZ1BWKhongow4khRt6PiRRMYgdDgFvTm4CYZ8vhYXjjyZjBnXx",
  "key23": "4mx6S2xCQNncqimfUKacmbkTHAffwxF9UmJnFWT4obi7rq4WaAiR7h8QphovdaYVPW3jXppqTsAUjTc61MWKTWjf",
  "key24": "5f9mYtN2RVAf2dyUHqKQ65GnkxpBG9C2rw8Sg2A6CQqeo5obLwifcmdwBgXhT3KBb9jvZhZwCGDdraCM4Jhkbbm1",
  "key25": "uJmirzvuBjjSFhZTosUcR4DwhKqCZqFMDReJkQ4VrdUYSwWMeqs2HPuEJ1BiV9JHpcRX34tHkZxJaVUJzggzz2D",
  "key26": "2PyY3SAuiYURh5tY71agfhm4ESyKtgjVWBWXgVQnJadtmGTifbygr59PzD8uTyqyaMLBPC32kSjLLbwTR4tSqxhB",
  "key27": "5kDvxPKsTRUDZMMEknmbDjqqeJAPyyjfdVFmU99e8hkiFag6HqZZVXLKXmJiD6XxyQHDAopv7wEQXLxAYEUXqRJs",
  "key28": "5qVPpPxTDoVpJeHTtt6uhCfdTmT7f6Nj5AmxGvfrpfCRDTwY9sUjhSRcR2azkmdxx9i91hQcFVTKmsmdrUZRjtw2",
  "key29": "5zhoJ2uu2jRn3yiFjErqV6McipKiUCVP2KsGyX8PZewmHCdy8nog4BqMUHP1adGNEk2CzPGjmrQpZzfi3AEsuZSV",
  "key30": "46DeC6frc1a3YZmo8CC3iut22hofHAe8iaSTRcPMvRGhhqpJhsvqTbgTKm9rDaD8iJSGzHCfyApDLyBTx7XBDsPp",
  "key31": "4U1adg8jETuqWufLXaWuwTnR17XPMC9FZnjrvKZQFNd77NukPh6sD7cRcbgy4fjoqh4Q9A7ic4EfhfKXaKUVSfnQ",
  "key32": "4GCDnspNNBWkgUsgb3ocTRKS64ojVAWMKzS7UxquLRQsdQ4CNMSgTF3k4wbErGP44EsY7wbBjy4mgSvGYq2XYrgr",
  "key33": "2mKww42WEzCQHfJZWjXSsn1W3cdjerHLVZi26iyszwfvcQCAxAMg1byTk99gpJx4QjzQQ7tq3VM1hijqCPUWSWjd",
  "key34": "3RG1KxCNkQzySZrjc9uuJCXe42AtKszw6uvPbWR9i1MCwZg7VEFDa1prVVhCnm8Yn4voWKQLQio3YF1An84zBX9Z",
  "key35": "2JxXRzPK8h4HznN47wV7KYaSPTfv9LSJAePEUxbrVZCWx5qAJvX2Wdvpjmpic8ZvkGNNkURNRn3y4GWoRRfsDmTX",
  "key36": "4b84jE32PRc8Ypbw9FiwCTwmFfSEHbnF34mYdkwPY42cpUnP2DJvWuFijMvJMN5HGUpU9V3YXw33rRSfCzkGchJM",
  "key37": "HBJYkhjPxLpUi7VHQzq3JQt4b9wxsuUNH7txuHR5sWVkzb9uDP8dJzmtj5VjYpDEDq6FbaHxPPMAeCCG4Mk7iGL",
  "key38": "3xPB4M7rCHRTHoqbyQKsup2qggX5Z8129Xp4zabEjcdDuzwP6P2VCk1sTxGX8pv4v3hKaeYH84UXNnmWJTytriXy"
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

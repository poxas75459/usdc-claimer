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
    "3ewkVWMMiV75NxytK8GyiRvnd3EnmwrEkPQTrdEtUk4n6Cxe1efSuPrpBHMaoYc6KS89qhL6Fz3cSyBD68HCqzQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upcqXAaedDZjrnn5C7C7frbYwYFHqdTFr6ZjzNucecrn9tS3weWhBCbrEMcpC5iDcE6BqErN8Y9KYo13KvF8rsE",
  "key1": "GTznUtiyagEzxvXrwEYyxXyaFW9gWAYEt7WzuFHWCyVw1gUk7bM554Fhur1ZkEe8FinDG7kD5BoyXvE2bA8Yoap",
  "key2": "34sMnKKVktiPwVtYqH6fymUprkbhcQ7namYMuDHELu2mwLYpFnWUuXKkdrBjSHovdZvNuztrkNdaXdXSRUdg3rF2",
  "key3": "1GCkrw9HDCpjTiNfCnBGtxVEoorx652TS8UvEt8wScU6E95re7fzkrEJqtrqxzjmpRHA3HxJwvssRJNNNV4CQaM",
  "key4": "3C1k6kt3u34owZrdfVeHS4wNeH9c4xBydnhcVShKfyVwRsCdyRqa14oYkgNmqjVJfWnU4oePs25CutnPMWu3ajjR",
  "key5": "3hWKKJL6SkgJBu1x8tdvAxyNmtHNMTcz5VQ1VHxJoTwa4PZPjHSWSEkh55B3cyvTXre18RUQ1NenzzMy9Jj5Wxaf",
  "key6": "2VgoQroLyCuqLg4vf7bbnqezZsw2QkHBdoqbfEZwU4NGDpeQ9HnXbXqyDTmMeWWskrLzorugwdp9wh4hhj5LsX5c",
  "key7": "3bTWx51CCnfuVYSGgqjFeKpjbLHAywphQ9atUqWRcob8sRLDZwsx6kBcyS3Ra9vrxvA1DaHuRTXUYxu7ozwECb7m",
  "key8": "4ED5H6t6i72463HdrQdExHrfeYxtf7pfhj1PpXgbUc5kE9Ua9wrjNALXa28JjmauGN7gD9qXtgvE24KHUKPD5yNM",
  "key9": "49jivw5JdQpwskvFRbJucvfBpriFifDb9PKSaGAuGFaM87eG3fW2jp3Uc71Z3EmNj6SiNjVA3deb7pS1ietDpsWb",
  "key10": "5ay46MPuD28Avnx84XGXcrBM4rdtx8yxJhZCNjRB1gmkhKhG5tU8FAwXRnibHNGYzQGyA4VvdnYUewJRJhhzpY1N",
  "key11": "5TM9AZxd5iTzFUY5RNRj5Ze7K1b8mZcQx8XwdSM8UjKcqdnVUQKUAMpwdos6jvnFkP1QmWfxXPHNgLNkDkhWdiCq",
  "key12": "mtcwheWrgtCMM7DJxwsTsPY23YFF85eZiua4Ph3DDMe5BHY87a5e6a6LK84jTjBjDQicgyVL3QAwGdAFEqsnNWj",
  "key13": "51mpyVUAdqfxkjRE2vxWmiFvzQkutU4sn2gL82h2Uzaq1jsK7hp924bXFATFRArbJekwkWMxv1qSGCuPeFL7breY",
  "key14": "22hcoRgWeyf93fh2m9FrrMQSXguxVoBxubvjJYgp6MCVDEk4P4J2M3mynvzydWg8qttsfDEy7Dxtdk754q1cv9Jh",
  "key15": "51UPmqQE7eN3p3wVipEMEoReZZGhUwdz47LZnTvGYNmab6KBZr1isDcWwXnpK7gDRUm1z11REXnPhLuZQZ6cDcSk",
  "key16": "2NSrvn4GsqMePJiL3F711wc3hLQubPoCARsiybFxJAhiMXisXrjbk9WzTZGLEPCbD5w6cep39tg4tMG1ELRAjahB",
  "key17": "2EA4o1e4KYU7dV1xHscLPSLKHwoz655GzJRNxDv1E8oThWdGnyYjtkqBZbjhmBJ8ZTiMciSp6a3VxQhoiCmuDQS7",
  "key18": "HqeaSngSg5YF6RYv6m19uK95yQKpbRDsmeSVb4x3XLnKFGXnkSUYT7dCZ92176F6kM3YVBX16m3N552XDsoJk1m",
  "key19": "4T2nLBrtLsa1Sbki52ZvVREYGnXZHonoKUnQvqkRjRJjPMF4omNnodU6zJ6M9VADeJVshH9DAkxL6333eN5GVVyf",
  "key20": "4WmGpaBgT9TRjjRh6kw3C7gnh1XAe3cJXZ5L8yLo7ENFi3KM1oLX6iaQvBKndXSy59qA2P45viAEZA2S24Dhs6ve",
  "key21": "54uhrEAQMHJBZ9xHbWQtx6Aa8yj1J1SwHYKuQYYmSAm7ERNxDWLmr6EmVimEMLnxDuopAHxAqRpjRNP3esbE3JL5",
  "key22": "Hurr3zPjsqJ5uRfjzaz7wmDs6vkaraWt6XSuudyUjiu1anVwymjwFHTNMSctYqvbkqFSTZbBHceu2rhcTkHBiSV",
  "key23": "3xzd7kqrFksCrJGmxEorVfmYZ2wdPPJM9rDB3yeQhsR4srLH1oEM3nfGJA38Hc537zRSQtMYJsy85c7auJaf57WF",
  "key24": "3GEkfHL5KPEfvuDztV69zhXxis9UQJinhjS3QZok8kGzeawC9tzoVdgR7MEtQJT8VmCyuJhNSDbAqCGstr4iafcE",
  "key25": "9mZshU7QLzNSSxY6ewGhTtuzSJgqNCd3anpzzmatu1UFTZFCLiho3Axmbb5x1aHNno4RPfw4aNEDKgfRpuKuiGi",
  "key26": "5M8TCpgScKgxUoARWD8eYNoG2jt6KPJF8BnvZSaHZiK2fYw5YJe7MrXLoZKEjHNNpVCwRvp6pKhyjScXadRks2v",
  "key27": "25bgBmTh3qxkswYV4xyngr2r3U39Pdaqm1vfDTyUt1Nfyu4TU4eowQSKWyra2H7ozEau8KAnkaNncYC3odFrxBT6",
  "key28": "2wFut54syipAa5ZFgJoPoYXUeKCQT6fKpKftek7MA16dNvVhoiNH4WieBkXdsWpjTusFLBpHQ38MEW1VtQWboaui",
  "key29": "Z4QeP4hsAPrHamUsVHrC3fTtQJSujqQyLVZK1Lb2ywAN9yo6fkvt6YRKLA3jGsWk3ah21CoQcphh5U5es1dXEAP"
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

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
    "rGGTBDjAm92xfxRUwvM8unBWagqPnD2YPBkbtGNytnrDQb1pzLwpVeLgEoenzzEfEBrVvseQKE1hEZfkv9euh3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GtTu6aj6mzE5oWdXDhay2V8v1uaV52to5RdskX29wYYKQc9jSaUD7RkNQ6R5N1XuvawtxY6wdb5PdrRe5tfPssG",
  "key1": "5DTDQD4zi1Cje4sxYgijGN1ayT5oJ5tH4jfkjPhhnQ5YzeHaqBTVRcrkcEkbtfjPvsSSLQMKcJinmPTy4JHE4UaT",
  "key2": "sn4cpJfuD29x2PvH5KFNqf7iSzVz3VowocMv8poqVP7rASSLdbEQbZJDPxyv4v6DKgFZgwTGHTiDbyxWowXKP5C",
  "key3": "4bxZzK8q2svcw9GTkraW1bp8hdaZ2cQF6EMVWeWELiJnqiPRbALxm63JExpPQJi4XVEqSDbqdCZwPr7En5UBXLuq",
  "key4": "4wC1sAAsPToE7i76ipzFbkENDN8iyB2TZ7sHxcKPX1kc8SrFRunsDSzDvaum4F31sCqfx9nYMmNLXoK9FSjL8xqw",
  "key5": "5kiEKdA5Hgn6wRiFSayehBFP5QcsyMpCsDTz58aGEWY1dAx8qZ8jakfUcmmefjVdkviDGtQbwJYsnqkYLDeBeAXR",
  "key6": "64wTNz6GzJx6ipc5tJXCQsithQRr6QJVBRXRiiwc5UAboC6hbc4ayjEC4Fy2AchzD3W8gTvSjZuCSdQMYBMAKrTL",
  "key7": "24z8MduKq6UU57U5k43eJaSCPmfveTXpyELsakjYYNTsFpZ4C9A9MDCk4BsXdDVGXMwqXkPKbSHtSusk62NBq2JJ",
  "key8": "6YwmdZGM2hZs1cNn4zoo7Xq2chmnxD37brQRnvydvDnkzLq4cFSty7DcQHZ6ojB6EqQMWpdeTqPa5rXkqDNGWYx",
  "key9": "2D2QLTsb5SeKCXUb5u6dXHQ5S2igFcBc9giBLH8P5AaW6v7Cy2rEAr1nkwBbTRbM9arjyTWJvYR413FK8FgEfFSy",
  "key10": "5w8ngQR6pzMPKq8XN4T4CDMwqqY4K8ipafPSGZa3i5yxbSFtEKJb8LtGL1HgWbkpKbU2xnNuxpkRu5TgUVGPU7b5",
  "key11": "3Pcj5vD9g8Qr86nkvg8H1dZjgwboxrfrUq7wg4ftidC5anFUJxh4q3DmqgZLUVyQHTKtcaLnYkoxYAFMBfvrCApf",
  "key12": "4uJ9dtrpP5XdmiHVHZiapT1BgsnhcPTDG3XdGppL7tpwRZjKVHwkMjQ8ukMNrLAkDKALHZ9Mdagfns3fVpn6WTV3",
  "key13": "25bynEcLL9E6VoTAaW2uh5yTGSLrcvzJwsz48xKbyRELzEZhUxfSthc9CUQshFh5iasFeMQCwLN5pHDGqNVLbRFB",
  "key14": "cmU9xKCNtyCVH6CGtFBxd3kFoC2WFgJGy34V1Bkfqhu1hvTSb5wVUq9yPLgF8kaJsuC3HzMegwCes4vpucWzheM",
  "key15": "3hJM72dfsUJGC1gPfALpQu5yvJJCpiwsxniaKcngWyKYWDoF5ijYZuNXLSSPy4SsMuUGxWcfypXT5GoWGnRMC9Ev",
  "key16": "2gnwWTwyydakayiDpUsuMmfHPkJniv9s1wxw31K3MimZq9mwH3di5PV7Turq1hVgvF97JyMyAErTdFRvALwP7mkK",
  "key17": "2g3RW7BnJXeKVethJyLtQDeu9To9BfGbRZY8uBWo5JcfAnyt7ifaq6k22WUrcCLEm6tKSGDARQHYkNAmMegYTeMS",
  "key18": "2crDgozN5jkoQ4jgVarBdnSuvRXRikYn4U4ixXTNjFYGQBtC1xoKPaVtykWf9ZFmQ9hroxDJExFShbYFLw99WJCi",
  "key19": "2C8ggFs1BovgCLu7ZZ9NmXC59PnqAr2h4PrcLGtDtyfHDP4Kw6jLi3LEj3UfnEHk8iTxvRAK4RfzL7SkTPUkzprA",
  "key20": "4jNca4H3VL2YYZPup9MZYTwp4ekWUcE4P2xG8MSq84K7DiJRbsNc6tGiCaxngkJbtaKApwA7UCKQWeeQTNcXCBVD",
  "key21": "67ZjUfMW1TE13Hre3UZZSCktWtqgG4Ktkv1Gkjkpr7DhCcrbnpKDkgPQ6Cf2sdz25sW3SjyMe8YScw2RoCYWL3L9",
  "key22": "2CZYZZ7912KMRRUb2a3Cn18kQmBDVDuAWbGLAf9xhSqbe947KSz2T8DBSFf7qrAT5F4d92Wh2ugH7DjgcMW5Qy6A",
  "key23": "5fkxXFqT7kNSWUeJY73FiKnWACRP8sP5c2SDDiFRhv3aSzfemDQ8RhLiTXqcpCbA51pawEnpjczFVbuN9PUhFk18",
  "key24": "2yx9MuQJ52q8eAAh786ghRRRRNZKnRu3XoMGqbmHAdapWusDTJqUyhUnRGvhPyBxdmy5yhT1s6TkoMPeNakZoZpX",
  "key25": "2s5bfdZSuCe7tddmMehXzNx6aytD8YBHVt2tHy3YDmXkk6fo2cHrXLGjjdsfrYZYn5u4PT4osAkM5jMd7q33d8FM",
  "key26": "55Pv7YBomYUQQ4jEuTpMNhsuurN6G4stBghD61u17cC7jmJEhEWSchTgc7z3H8vjwuJkRpmBYEgo1qrP7feVjEgh",
  "key27": "3cVQrfuqBqwZJTok6z96DtG8KLF4ZRpKzhN4hM25TiMyj9ZKn3GiqbywwnxyCLa3JLVSb4CUsXpGXXG2WCqr2fr9",
  "key28": "439hAqpzQuA7piUEv3CqFqJ4kYv7qCsHdycRRz4HYz6ipRqjwYSxuLvbkgQsgfqzaDdpHNBFAHifWiGDAYDj85WD",
  "key29": "4d94CWJkBtb3hG4ER5hRQnEuL89sfHcZMTUoCt64m3et7SbSRCzdWeTrRgrydQnWGqjUrULCtBePmRJJt7XHfdgp",
  "key30": "7fejUXigHgS2et31472QQq4i5abX5GsKb9SP1vc2LJmnhJXEhhSy6eyR8GsEecakzTMdcPb5PKASZbpjfpkB8mW",
  "key31": "z3XNSv5Dgt89tU7c2SrVepHNiZDnNHr7E2mzKg8nrMFqnghfdznRsPJ47Mc3cM8u54Mc5yJy136MAaTddf3yTa3",
  "key32": "27mhdkNhvkjBa8VNpuPNcCwumU6RFAicTG3UoCgNN9HvzhXUDahpv52Uan8to8EnaYYFerRHz1gay5GPU9Epih1N",
  "key33": "hyjrEnBfMLg7QDCrvsZ7AkYfLUWAbLe854i3YzHZf9Niq2Xs8uUFmBvh4dss6H3zxRCm61bUUTkNuWxyKpM9zpq"
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

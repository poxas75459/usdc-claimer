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
    "5GfBS7o7pHrppJMiqnBUKsBqU7pZ5jDfELNtyR1a2bP4npNcWviZ3E89ihYNKKp38Wsr5KWMUCtRcUXaPqRfGCkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hRZc3nS7rzRjUKFwMXXSdHi1823fYwZwUbztBtjH6y51JX5D2XTJTJPZJQ8PEHax7Cyr7CfxEzui7cmYrCFxFkt",
  "key1": "rW68kgKt8W2oRVsQaUbBsKqrantEpJQrcmHi7C1bV5qy1L1AxnmUJt1SGJztwvQ5GgCSrshmTQbbqh5W9J5Cdjw",
  "key2": "3Mbd14Coq6275hDe2FCH7RW7ToEorRSBqNd66qKLjvv7zKKb3to8qYRH5bY2MUE1Uv4rdkYWy6sAN7vjPr6nfbZf",
  "key3": "BcnbyXfmAHeCbXBWZjkxgN5eRzQvyP8E2UaBQRH6Ljq5QqNKpQMNvzqEqZuF3veKi7qbspiBndH6oxsGVkJCSxi",
  "key4": "3R8R44weqz1Mg8U9CdGixkwBBB3SSD2B4GQvepuWfpxFS7dzJuCzuX9EYxHt2X6UXBvH6xXYCCNxt27wyPtvSEU4",
  "key5": "5TqJ725u6fgXVE3peDrh7CW8qPr2yzpxpuM1fbb878wtRQoWBP9Ay8hGTyBvaK8KHWKGCKnyzy95iLz9RCqQWgdM",
  "key6": "5JNpxEYog1gv7LZuAZ7q7xS7jog3f9tpcEZQpGJ1vM3XUNUgoo6hhU2DqMdRFuoo7vcQu8FGnuVhGCdyCFJw5qd9",
  "key7": "msXLebfgbSF39U3e7EQbjzQnNtpDB1qec9h9XL2u2AHjBGyqre4we9rKQa1dz6yeQWVdyNg6rwkZSvS1eA1Lxp6",
  "key8": "39h2EiHBQeprbTE1VrUGt6nMtEEcvGg9Qb2RV3NMkzFwQ58CQyvkRkvfU4tFj1BRSMa95ZAFoN9nsXTiE6RiqENv",
  "key9": "2hxC26d4rEqZncdBARMAnizQP5M2RH1ZTTPZwLFBQ2Z5G6NkfH1cyyESCrEHT6bezwpV63ZRCHTWsj8x1bo76VFY",
  "key10": "1Stu72K6tWFiFMDuosHei4QEjkjcJsyjwsaWByztknzqhKSwJpfkmPi6Y1TsFuqskJzY5rHjy7V8aAGAqDQpMxo",
  "key11": "5NECbBjPThgy597W4X6Z35sV7RdV1eMvhcFaxb9KLPDsE1SV2fpmpKuwQ63R9Tkaxc6qGoHSgS91VAx1owyqDcoE",
  "key12": "avdvAfDPp62n9JPNsziMpTKxVDXetbP1vknUkDMR4BEFPC8ttDM9CKoktkc2zQE6VC76vKd9mcsNwgffAz4MeeC",
  "key13": "25UTLyBcSNHrqBscxuk4rjdHGWcZ4WbF57tBB4T9aph9SyocyqudVSgcau4pCSB9622VNC4qE9SKsN9Fat9zvJDm",
  "key14": "37eUuQDbK56i989krspNtXMwghHstYQo5TkHghf4m97m23obz9VXgFq4XR91VStdddUiM583hSwCKqw8rfCQu8ck",
  "key15": "5uKU2a1La9b9yWNjaGPWYVntQLNu2KQjq3m26mQg4oQUvJbKiVn67F45pfx3BcyyTH6zEJomSmk5nvTLFw5EYoQc",
  "key16": "4LfKo8SptkgTzMhgbvgN6V72Lw3sVexZwcAvymCE8ByC9bmQSXKtHiod8CQfLsuh3LiAsqitGyoVLN5CXSC4K2uU",
  "key17": "3VP4CuxCnzwdZAcCj5WgKNiem3uyLypGGdfkgTgUvhCwbyjpjxGutGnAzavXZanCFkPteGdDJBtm1kJUsNR16FqR",
  "key18": "54ggX4eHuJbsqvsRmgP8BM34BQ18UTGdDV3nMqQTUwWo9LWwcbYojcvQDpiumUExzjCknvauLcoh6HK1gRdTasj8",
  "key19": "4f9MHR71JRQzDJdvZGrmbcpHPfkULxG6n1CcfBwScKHa1fy2RikvphqxHv1F9rqy5zbkUoXyxohg2u23wfwwCm7b",
  "key20": "3uDte3eCEHuWQeTwYG89VyRphwr4g4pri9xaHDhpHWhFaY1qsXseWUiE5mCYJAmbMokeN1XbL8bjjtP2jB3m1gqn",
  "key21": "2aoc9FNPARoFjD83EK4r7ZM2rHkxKHENT5vY89LrjhUA4cj3wfiAEUBA9DXGTBBCCL4TmvhGP8W3yDvzAwxXSoSU",
  "key22": "Vo12CfC9wsKiu9vwZPkzLcena2YDkwop1BNtTLrgEQpibQTFTGZ7pxiR5GMVM4MSjqmVv6S62ummA5Zm1zieEgk",
  "key23": "2HMWPWb5oL2x3iG3GqEc47DJ8NPQ16ymwuP5FKY51WhinV8bVqNPV7hD5bveVwchexZS9yNprtsipwcvgi7cAqhs",
  "key24": "3Qe5Ha9dY5EXW3ZHQs1Pz2Szc6rvsTt1ukEWeRXB97BU1vfdDeAA1EQTGe9yXjeS3qReebQfWuz7pwnAz4WCGPCi",
  "key25": "3RLr7wkSLRQQ837AZEsJNRtw1JzMcEgL4PSGPi2aSE6j59aJ2rq61qHs3X8X2uzqssa6ABkgin3EVAPJ1HuvicH1",
  "key26": "5VETQkdfcbxsvAP8XCVgNa5WLfodeU9Nyjt7Y9QMv6y1fU8NaBzR9nWa4MqYKnW345qE6VUnkkGRDJwVc7Femrph",
  "key27": "n1N7hf5EkmSzacudVuEqFbZSjYaLr4zPFKGEX7swtYUPaTWAwkcwowAeN84dAMpBF5heDhY6wx6n8uCoWQb1kFn",
  "key28": "4cpJ5SDZw8QDaREPsW1fVcaSLh2MX58zf5o4Bmpx1aML4CwGWqGdPfL53B3DczHTs8AtzV1W2PgQZcRectXoCxY8",
  "key29": "5hKdTvAhJ4FcSLhMhNZ4vg2hLr1SsaR4V4GMmERiv67tYzzRRiAsmRiZYY75ULvm8JLcVDHiib6igcDnE6mWyqpe",
  "key30": "3LSrsLV5HzvETfDYFcga8Us26U4At5qWDdYULJ3Ksmw2za4rGKExxt4xwkTJeYqEeso58ygTrVLaGfnSa2cEiatK"
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

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
    "2UMnnGLMXKMZoJYonpx5gu2m9f6PKEyjU7WYk71SFhnftGopXwprBrNQ3rjEV6pcEFGHcpmuDxmPQmgxgZ6ra7Af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33r7n53vdaYddk8LSsvMyRNtKv6Kssts3NJ3ikESHG8swK4jr6UqNqszFazHe3mgHb1nytBXMB4gpaiQTnNafNid",
  "key1": "g7y5vvg35UkPkYUWDXmQk5Nes5YSZmRso9t2bkms3PxkXGy1bDQPRCP67RCm8JXoM3wCdRFpEn2UnZXa8cefhoJ",
  "key2": "3nzC1yNv54xeYiecuNy66fnJSoZsbypihNx8rAUsRHVMVETtxp7WpSWGhhzbPK6DcvZgJgJoPQ8oHjNG2DxhXD7p",
  "key3": "tW59kUG6DUEEsddTXNRR8xyR5fk4Gy5VdZ8shvy9kxaGpz5CghpdG71iau3ZCN7apyooXKVVcFYWAuCAPY6Ww43",
  "key4": "4AJZmHC3iib221WUwBecpsgcjA9JB8MCrYPpp2joXLujSoxxMe9icK1wC42iNdi3jJRvLe2mViJ9fgXikJa8gE6p",
  "key5": "5GnQuadSrUHFgD8Pwp8QerPt8Vz9gguaHPLbmX168thtmuS26PuCU8gSBhn9LPASPgyngg7Je51bTuQNhZLfzAjV",
  "key6": "366pQCrxpcr8ycTuV5X9uXVz7Wk4QYjgYeN8kCqten5uLDnTf4JfMgd8hYwBAzJwfHAJdbw19uuUjJ7DJGhbjLJX",
  "key7": "2Qz1eZjBMghCYn5rPQbDATxeQFAh1oVZTn8ye1DgjTB1XWGCfCSivsY5K9xbdt44RFnktej8U9VCWrfBXaBDW2bV",
  "key8": "CoiPaghyxsnGELRr6JuRz9KKJ6iBqTvorMYwRaisnXpipLkWdnUY7fy8mwqcYKiKe2t7tTEmoccjrroYXmEyzhG",
  "key9": "2oDJu2K1r9xRrrtFzfAMZDBsmjeNJBnVt6WGMcoV5h3imQHumZ5N7BX3HLBomJqMbkBcPLPLrU5ifA8XpjDkKMb5",
  "key10": "4TERyDQDqYKcnJbivZJNjd4tB1sGzdC379iN3gfED81nNKCSHGxvY9oGMTSodgsjc8nkJnyZVjaXBbyNVdPUr1aa",
  "key11": "3wMPZsy8Rw9Yxn3nrqSqJUTyUs45cEpfpA3obMvY1y8gT8bbj4g8iZeGwvWepgWtxnXVJQab5kft5DB7pwaUqvLZ",
  "key12": "2uFffhiMXhdGTRdn4fZRfoADZW3sE9DiJ8ZsnVVGbZB275e914NFDniMqT4Y9PDa4Px9rNt4FvGpSTUDHp6WgiBR",
  "key13": "3CMauW6b5zd3iUXdNiFXdXLWLhATNVJnycA9K5vv3FBpw2gcLtsWrvqB6dRtJA1ZcJ4gkF1Avj4KqHSkLSF9Bcgi",
  "key14": "4xZWkgme4LLgKCfT7w6Xs9E37Lv11MkPhk8mkU2S4wS6RhwpfuFREBhqqH1yTCsXivLPMFssL3jmptjN1uacozbF",
  "key15": "xDsN9xPEmBRtdw7835Jd8i98gnLafrcEXtTC3Fp6iKbMEQkxNksdXvfkaro16WnBMegDPwBHTYJXaNdjrQH1V1p",
  "key16": "i58bMEk1FJMFuqKkF21sC8KX3ahoz9AzQKFos12tj3fcancZB2Ak6bspDxaXC38C6Muj8TskH67GGrp5D5kaQee",
  "key17": "5qgBVcfAqTF8Wf9YXHrcjZsHoC9kMU9tpo2jCfesjguMFH9LepKWH3bp2EnHUyX6eJRJjdCFKEeP6knWPGVQsvAE",
  "key18": "9oKipyXgHbfZUE1G8kNfkBp44eEfgthCRrpMfohCcvAMJuXyeBSrfjoA9vgaw1XzKMRDtTPreyJ5wExqaYn1YWf",
  "key19": "466b8UDuV8GRqgnMFnnB45t4SYdtrCGLy56kg1BaxJpoU1H5K5FfGBmUQb5VeDjxLRuzfXXYwhUnndT2XyCX2J8M",
  "key20": "5ZTzDa39Yis5pqPW9gDjmRkBEiU7wxhiAtAV2K8z3LxcXjT5DJWx9nz2LvsRuLzeKuzm6auCdqTS1QajozJxDZ96",
  "key21": "fWXHJFJVeEEF9pdV2sapUptutWaJvvPhjwLjzmTVPwjbcr2vmtBPRGCeDqEMrGU9w7MDFzhqFLLeizwvutobA8p",
  "key22": "4nkLuZx8N6X7iCmyBfneZtEDVQEvCufX6hXpuBWE6GZuj7en8sRqsMJe2o1NXCaxT5GXqb684Fj4mCTXYAaS6ZTV",
  "key23": "23r6TMXNS3yg5Vta62GKFHN6Kc8eKBN66qN9hrzSGGCEJqP6nZae2iXaFpKfNFfsTu5XQuNZcVnuaWyjZrmLBQku",
  "key24": "1c55wzZhE8EffSPk8kmdv9rysrQE2ksfCXsoZagvU7rCaE6tM7zj2xvSLgn1obNjppERCkUJkv5m9fTzuAM1ojE",
  "key25": "BT2ZbphqM6x2jTCVMdSGjuPNnDzS65dE7uQVYEfjtdeQzCB1bi1DGs4LTzDF218n2NqnvNTJNirVo5ruwbHdYx9",
  "key26": "5hyKsJf9o6614LLcBqgz25EcKaXZ6GT3VzN44xc4MDiEZL32UPW2puBwGNajJaajsCRASrBkWuG7zfcEe5B3kKcb",
  "key27": "7zrw35fBPMSygpfdG4UjsJAVAmfTy7Q8k7mhWEmFHhqcFELvW2s3KfsKKhSncY1cTTXRxNrmbQVyqDZYnsqe1nX",
  "key28": "3NgNzqZLwm15w24DNPAhjdUmxX5q6SeQac6V6Kru2UPsdSe2PCgE73ZKAiVQLrTYWMzFQV9jemhfhLk7JmmYsW5E",
  "key29": "2cuhmyMdRtTWxuWDBrHUJtB5WRymMTaSfQHe9mygWfe77eaU7uHSLBbwY4Wr9Ur7SXHeenxup3Z2Cx8bs7LzmDyM",
  "key30": "5ikGWG4BoWtJdzddBzVbqUz5TXWLrGQ7khUTHXFY8KD3BKmXHYduibrQv5PPncrNiBfzgL6Z2pBAeoiMpyRChggM",
  "key31": "4HKckn8iUTYkywjmqKE8St53eNFNu4yGC6LcfNRjGQ4J53LGoGry12LFoEuUeMtBUsZoWocmJeJSicnp5e19VidC",
  "key32": "CHnKqdQpjBqezDL8sevK6pXx2hJPTaMwFrXRwwT737UFdqkztnaUbHJvrH6hrWjvfRp8Pqxbr8b66DGhCxxJra1",
  "key33": "2ygEcJhQd4eJkDoAQcJSz1zsAUJyMirZY1vFqrvM5d6bZrdBbMH4KnFsCQVRiJ6PEnoiAgZ4NV2jxXQxXSVKYpkN",
  "key34": "4iNhTQfSTKPvuDYieSSoodJpLwdJqY3TZPgS1QN4sZwBh9qwkYheuQJynepx9eTQ2gfqngXckcGHjtZoVTBddkNW",
  "key35": "4VD7veEgwpwypGg1i1QvqGACgR7bjyu46WPWRm8tGwcjaX6g6UR981REvBtyJ7h4s65wjMN7sryncBiCYBu5vdnB",
  "key36": "42HTeGCo8huKca7v3bHXENo4e15qaLPoymfDL6bvEX8eEJ47HUN2KfNQReKGrT2WjgSx8B3gYPnQTbjU5ujeAiLF",
  "key37": "2rvtwGRxdanGBfPAgnAGreT853HVYA6CijNFzNWGQNHiu2DRnbeA65St37tx9sAKLho4KTCWjCFrDWNY53ePYqpT",
  "key38": "Yk6KGPYxSbAEZ63be2hYuM9JoXHsKDZwXegDp1giNPgWxjz65ERqMvFNotHVPB8NarnbD4Rzcv3MKZdzgLecN4Y"
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

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
    "66X8NJXcLuKwFcfHkmL2vwQTD1EfzwxRZBNGhzAqQU6khQGMurPZsVK7n3ETtPdasuKHsrGJxVKVzeNWK6avNVmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VsEWvRC3rn3dXTqbxjXtBa4xygnkqBmA9NDt3mfdR79qzqVetjSnu8io3oAJEbcrPCEgxVxUWRsCP16VYvEv1qh",
  "key1": "2M6vjE7Jj7UHvbFDAT2SrkSBMEWrK53a6Ze8Z6JicdHY52KDKkAc3XrfGK1FmWyLXWFmJy7Y4Rf3jepXGxLye9VQ",
  "key2": "2QV4a4Bip9yv3y85PMFLh3gpCo2s5fp8VVGyKNjfaFhXSMrHCdPmFVBqk6No9pxFeAxmeDQ5TbcoAtN7V9nSuJD9",
  "key3": "3RhRxF3sPqPLGVyNwbsSSwitwpGFV25akax5xiAM7wm8ZcEQMcVvAZC3T1T558rwLascqJ53WvREMi6Lvg8DvviD",
  "key4": "c1rMdnYL4ZAPitK9jLnik3Xz2mYDvdRopPBrNYDP3omMW3NuL1ospxj29XMY6Z4RsB7ria7mL49BxnYBoGgJUXW",
  "key5": "22djH6o7WBHnm8QNnjwFDEd2LC93S6sM2NZ3f1xwwYcnjMv8qePoVNxTcKkuz7yp7h8GtHzXY6DR5nhNvtzDoU5o",
  "key6": "3BNEdw9ji5dz7ApS2TJmdkPytrwsgqs6fCEH2DvrggWufiNsPUrgY5SRZwjnzyaPnzWsFUXqAu8osD83832UgAtn",
  "key7": "9anKCxJM2tbHS2CTjvomb9GDVNjm3gVyam1c7rHjmcEusNNkEoLj5yfWWpkKUiXy3esYpNv2Dem2JnuRu9a7qs3",
  "key8": "2RY61dbvtmfyxQdUPD8zDEcfPmbQWwM979Xch69oAirAzcQMehBFHx9CtR8h7HvJFc11sPtEXe6k62idZA29mVUn",
  "key9": "5Nzqz5DFX2pD37Es12wcFux2WZtxLhsuPjH5S4pSf6WPmUxDwGfE8MkcACXZb7SNmJt8mwc4r8CyFZhXZy1FdfRM",
  "key10": "3DxMvQE7p7GfxVozscqDWi6C4sbWfeVfRveHzM2PpnPAZZewXJioESp4NHre77LLR3ZjgKoACthqentPnxvi37YE",
  "key11": "5eWD6kLUTFKr6oLkgyiA2XkqBfScuMwZBNTUsUSAV3R2hULKBiyYtRj1BgKs955Z9diFXyvYJLPGS3URE91zqMuF",
  "key12": "2FsfebTUdjBRnhLMENAaRnWUBdotZS3AL2eiY2RfjmCAaVzjSuUBkiqM4vvxH386xwzfbHdwaSe9w2Ks6yi2Q3WA",
  "key13": "4RiC1Da7bBFghsK4Zuum3jiK6bTe53GWw1y777qNXtArTAsjycWzymJnEpPhKcaFVi6MqT8ZGN8QBReoCShXWJtZ",
  "key14": "62WaTWLqctTGkGt5dBXtVhr3PbUWKDEiRhEycoLUsrYBDS74FdB4CBurDuM3KMc8xE5BQd2D12VVEBWVoES5USqV",
  "key15": "3cYnz9Ffbv9f4TuKStDCYHJLHmMfqTBwpAbsNCChoLwAcEy1ZQQUEuKEDiFgsPCa4WLswCC93CuQuhxSPmQFjB1Q",
  "key16": "43rZ7W6pBPpXu1zsqwc3GVuoWpYY24qHvba5ChmbhpRPe6FW2kLCw3RxweLN6giAZm4B6zpVLAUyoYorWvda5Seb",
  "key17": "ZafSxG8SaGjzSQiYmg9UpefEBk38LyY9m1YRmSsxRgQbqzDP2y6YmVmcuMj6sQd8GPQKCagzEga7AbRfRdfmp7r",
  "key18": "3n5JpUjptemgx25HR5fWyCakrcyVZ2hk9H26St7ZRrV97Gmr9HrAxajamgKfv37RoUkNaKTb83q1KguZhhwsVxvQ",
  "key19": "pPXEgqnPKRTX4qdM7SEzCX4eJXAPV742XRsda4vP5nNRHcMY9vWM9vjHNMLTvzNesBQF2tQaeTPonAxgnpuabLi",
  "key20": "49Z5ywbhW1txvAne7LNeA939Rt2Cytg8ANWJXkBkPScKsrtuQYLLovNR9ZVq6BebBQTnMqVv3UUhdBXjCG3T5raH",
  "key21": "3N3DjcC4TZCfhckGmQMjFfpzSU1QEzqDnL8jG967BLpAK3b41SzRXfx7fidxFX35Rr4S3DDTqTPL8T7iqkX9uisB",
  "key22": "3bNVZVpXsyAfXXvAxF17uSaiutsX6JLb4T41pqNcA8KJe4315VpjcfZgpshXqEaKTfVwRm6inrfXYuCMdziUTEVa",
  "key23": "2iBws5j9cTxM3iUceS9zJfxJoYzLSgeX3JMxKMq4KdRFBibaWfvR4jymqrsL4NzpRF94UhVMyd3S5A6QsEUM689t",
  "key24": "4mWg42D8k1Do2UQBRX1X2TesgPFdxE3eTGUxEx7asX5259bCe7ri9EN6BdPjgKWRq1gAAnHhDwgLVC2uyxZM9uf3",
  "key25": "6eqYfi66sAuEr3AY51Q7kzVdmvJX82q5atvdNcMJQVLTVeLRsupiB4mEiRmYhZW9WmMW7BTFrB7mYYxDWQr7B6X",
  "key26": "2uPX9Tn35D8KxVVAhQpRndSMwdXzxuTXKdABaqgWqb8tJwTwHpBufbrrEFn5UVeKTMkKL2rBH6ayjnZAwVeS8MKc",
  "key27": "wZCS4Bi3bDbpYv9jExLW24iq4ctSKQxsGCs5ctfNtu7cFHNLYucW4tSvmXPKAQ8E9T8Xp983V89De39LFbrJUFf",
  "key28": "4hJ9UNqdSHao2Q8gNX22Hzf8mgXYDsaGMNXaXYRNMyKQ9E6mTfL3UULvhQwg479zNa45haeN3YS54sPgzEP2rJeR",
  "key29": "4ByNVWvEGzCUsq5WVEV4REM199sGsimG8tZGLWLKuKiHw1k3vRX7KKwnzep6VtwhPSsVYWNrufMABP2gTJpgZ2xW",
  "key30": "63Ahr1RGq1VkhyrWLjym1rzctDbcD6NC4X7qag1tHJYt8YqXdfF42E9bzot3r8dA8qG5LWDbXjTUnJ8Y59DByC6j",
  "key31": "4rL9nCafcjFBgSWPD1wX57TgvZxW4bcmPVabEB1snoesMdjdwmvSnGJu87aqKX2Qf4oFqGvu5EHc1Y7YMG4dsB5U",
  "key32": "V9AAagMr84dMQhBa7ALAbD1p8xrJeL5gr4biAacpuoMgPmJ6BtnrabAnaVf7qDdGHsZHFuCPgYDD2wGQFWCk6JP",
  "key33": "3xBTWT6e9s3dyM6TnR3n6Asghm6emJfpN9V1JBxN2r6Zi84SxjL63dkfcidTZmjnmFDQkAXU2pkACrtt7pXMzdfE",
  "key34": "4U1L6EQtgMtuYhGLeZ3UaU9yYs1s6cJQxZUv88reSr6kpVF1L7KQa1qyZsR7mzxqiMR8EMZZddUvdkRxktavijC5",
  "key35": "3EnmWT3oyZqpQbNvY8ZygD7rr97PioXwHjPsbZLUoMjy8wJ5HexMD6FWL9GPhMbE8kVQkfu97cEpwpie6oJYheFs",
  "key36": "3x83nWe2MWLCqqck2gdQgEt4oHBGHAL32WaEmzmgT5Hj1AfVi7VSVBbStzWgYVTdqbgKRYyDtdW2VVGoVgMniYvs",
  "key37": "5viQTRddTZdNUp7qjPK5MbdP3yV6UBjiJDdMVTiD8z2CZpkzvX2q1pLKbqNPKaYJ71CnLwtvT4uFJBUk6FTscGEr",
  "key38": "5Mj8ub9Khfuf2cQV1zuFrRhS38n3xLSQbRMH16WAw3DRJ8skGnDuv4psHBESnzZsWj2hqHss79fCS6KkDSpinDZz",
  "key39": "452hycWBwGPqG9mgd3LkLhZCZrgW9XZZ1hFqBgVf4it42u9rNNqxbBuwwxJmppBXDXD99d8EBszStYEKiD9sDAMt",
  "key40": "42jxsevBzW5DQ51qwPCNxC9dMQk6XpLiZCmbni9CLaQz72dcSaW1Rkw7gyBK1tez8bPUhqMQkppMbCDymp9bSN4Y",
  "key41": "5D8D9YiKigMw3SUrDp5EWkqZqck7yXcReJeWz4Qn6xc5LfonWpLshkZE1bvpiauyLcYXC8QVDxBurtPBRkTN8WL9",
  "key42": "3bGEcCRy5EzUEigC5Z639nwuCGv6cRku1KhjhJnuUGHf6F4kWTwBW2YibKrW4Guxp1X42UM4TdHhfx1wPEGebms4",
  "key43": "Y4YBJvoRtd6HgjGcBG74WqeGQC3evyoeYU8LwiFzRyGzp1PMJvXFg4hnEWkFeV4HuctGChGbirppESbmbh1aNrA",
  "key44": "3KdzUEmaaDaoRwTie493NfRdWngrBN5bVTc1bUrjeLT5VoMdiyF7YD3kAWsaCDmQAxmrCFTD9FfpgKDeuhLgKqCY",
  "key45": "4j2tFcqZXMZ1XFtRjiBrCqm3h7beCRoVcXJdkYU5Jd6mXVefWmLCeBwcrk27KtpumZ8UTGsRdL6h1RPkNTY5rhF9",
  "key46": "kBTuh4Pt1EuunNwGfRD9JZ39nZf1Ka4zchhVz4LkcAngMY7iqcVvNKqqoH4vDR6astPhgx8Ge56pAYNLvNg8N6L"
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

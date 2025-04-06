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
    "49aqsNPmrvdjneLnBE1hAzSezQ4tPKN9psgEWCqnHXh5vHSdCB5T9EErLzuxyhkv9FVTfgPXCRxvG78mMyoGXQVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vYXw4RzfKqPWVZfESrHd1FJWg6AFPAf2SSdLx8nyyu9J2rZ4TDEuWmoCJkUrFE9wBNT19xniT9n83fe88UyH8oz",
  "key1": "3DEb5e3HCv3NhLx982bTQoS8oTxxVLcvN8gVNofLeqNJVpysghtux6jUUTuDmSvrmWCLdYS9YZM21QXQ6MSqDnBZ",
  "key2": "3BkdTFYNV6VU8M5DBgF2zTsNL4dQ5bqhTfpYH1BmuzG5DdvYTX6NA7BXyxbmKWCpRwrCwUMR7hdJVg5VBUJVkgPL",
  "key3": "4rSwZTBTqa5kN1pf3FjhrZschEfkFhZuEXvnW1UQa5RfpK7osd5zqnePPuXaaQ86N7nU8Mp6Hg7EywqmH77R8apU",
  "key4": "3e9BKF2a2xr9citCoG636L7EC8VDhr5JiGWJDWFiXebt6gam2BcPmwve9iGWcC3mLbWdqcju3ntvGM1KmoK7Tu3i",
  "key5": "2YGYGgY4GSbUqgSFxMnciikCTpDmF2aKsRpbGYpcPAaxuy55zqf4oGF8szUmhaFuvJb3E3SB1boGMf8sxiQPbaDy",
  "key6": "5GYJ7ghyW5v6duceAk8f3fNFDVLq1hnoVx1QGLb5Ceuw4QsygQX5ppJuZY9sLK5x8dnSueh4S6FKG71yo9jFYR5i",
  "key7": "4esFfwj2jgNrspDnScfj4Gtu7qXGhNU9Nzrns9vMfxUSJ6wod8YTjgGn1EUhF9DpvqXwZBHZJAnMus5nZjzL5M2a",
  "key8": "43TGZHTZwtGb53WdNA6S4z62AWcvgwJDGG5HwzLBBvRPnbmcVJoSYpxW4sWsNFEM6FD1wWJoPcxmvLbPmq7EvY5G",
  "key9": "3L5xgWvGLji1YByAGt6WxSWtiPbygJnAfQYyvBVrtanc37F6csDFmkAae76mK3kaPj53GpWUoaS9gcPMhrh2i4zf",
  "key10": "5EdkkHTiJ7WSVuwrtesQsp1YcoEKmg31j9FgLnYYJXH9NkyDPM8oFrPF5VN2xK8a1SGmYFXHH1bQZocsU7HMsCCe",
  "key11": "3CRArChs6hV5RzH6AyRag58vMZi9xKbRUZaL6MhuJB7cP49CzFe1ZcPWUVBFMJtMojA2CoapYPedTbPTqk6xfni9",
  "key12": "3HZjfRc2M9HgVsSEEpk22r24WqUkxduXRZyyedAXNb92QdomPjKZkbYWwN1gHxJpWF9dXATwC88uRsEhP8ScftBs",
  "key13": "5hxj3Q4dXyEGW57x3YJqJKQ1QikpKV34DQhzpHAj53WNJCTKSpPhFMMUyPVEysY2YrRHUAga1BAf3BhaPwR1cf28",
  "key14": "4ufFDuuhes16pMjMkjxK76c7fuKTa4uu9n1FpjV3HqypFt97azchzm6JCS663Z3ZfCNRWb8AN2anL2dJzC4Rgg63",
  "key15": "jVzdkn6Lp7Dqrx4NLSeVktEBJBLr4iXJv7gBh8jz6DCGuqfixJypyRrRD54NbcFXNUxfwQ9ZLXDa2ztj9LeiSMa",
  "key16": "3BefGmwAsF3tbx5T66PVYBLTKMgwvLhoWLMSf4GthtRudr25YUe96wBrSo85U3NJx9YH52c6496jL7igZU67NtWW",
  "key17": "2h4sJMDXdJT3LGFxvNKLSF75hCg4xdna1PbMNCXTLHgrTiybu32oUgSsLtdfuAENaadfe4iw8vy5BkxTnsHUQDwX",
  "key18": "29FNQukNosqMxmJkGmGgzohkFGe4gDisEqYDCmmkSCpaAyLq4PSLK8xgP4JtHh5XmXMkDY6ngW3ngo5jEYXZVU4w",
  "key19": "3V8AaBWKKTdnQcLeUR6BSHuLDDN1JQYv7fLKLz4dLA7ocm8Aov8QqQQkuWqhvwXLjL4xkhZn4LZFLV62msXcBurc",
  "key20": "5jx3fL7STbd5bKMv55F4eiTva4Q2nq5sVuzZvyV51RCPyeojhby9SsygFmXVfHGvzUTiKz6JMASSgnN5Gap69ugy",
  "key21": "3KepuzEoeUBSiMoBd88K4ToHu6YV2NrfCWY7kf2WivqJhfcSMFHaLh4bufboHb9Bcrmn5jKafwpUNiWEF4qdLPnk",
  "key22": "2tR2dNkPRpHgtpkaHAwKfvavPoYqpKNv5An41mBh5ahMmxSYcabzH7kXhTe94uSy2umkujVSXFtPnLg8XqCmikwb",
  "key23": "4CpPSon2RPvjjhZmynBc1Xke7Acw3kJhMwLp86WpsKj89azs45mcTbqARwdQMtjR2kqXtLfxqCgSw1KraccSLvxu",
  "key24": "3ai4GpT63pxSX5R9jWJn9z6WMqCe5cAfS24nrdkKfqXW2ECcNUiNsJCozktoAcactY57Yd8UHLiZ92it5c9mRihQ",
  "key25": "QN95mmq5eFvkDJFWohbcy8mytvthfYm99Lemd9s6rfXAkfRA2BX4medZgNNXoBsv6MsyMuE5Wjrskzdw4AsQ1c2",
  "key26": "5tUrQ5AAfgewg9JZ8xmkAPfNvBsJzvjWafnuV3exQXSytwaV8fLPj9g7rgdqg9GimH22V4rMmoQwJSjAfmegfNG8",
  "key27": "qbcPn9Pejivq1Qxiux76MHKKe1ryJRTaGFekDxvFWyH1rQdxqry32H2Vdd7v1g2uj4ppZGGq5maXNUGEAHV9FBa",
  "key28": "nrYxMBwvazZrvkgxTJf86NVxVDv88HQ3G97XbqbRK12dogXRoMMN2CV2fVrniajcm4dnzXZA4ng2hkYjvViRrhM",
  "key29": "2nqpwTUkv5mC8QkCp4CVvz5RCtzasBsUijfj7sEEEhVyv3ie1im5PJQ1SEy1mXRKJuUb2AuvggtTPZqFfBqbgULH",
  "key30": "3NsYKioS73GeEQfQBfnLS6w4E7jRUcF2C2eKQynMdpLNvc5DsAzvQhihq9LZhiPThPuKim1ZxhVuMRaj7Ad1RQa9",
  "key31": "4iRQu4Whtv7gDbNHPEdhoyaB34GXJmE755EnnNMpiGeNQnCQmGtxg3F1TrXzgmRXC5uovb8ubqk2npDQnWWRcYeb",
  "key32": "4ueTiU4WtfhJq22DQsi3To3qJuwByiCA1tSdvHegTeX8b5suh9vmyKMtk4CWmYYHeqNUbqCs8Sq426rpkpPGdxjM",
  "key33": "oBnGpDVCojnq57tm24nTdW4XNwonYzpoqmb9Q43KegokSQcbLjkm68YHSi95JTnm1GMhbyM3zqmHMrcm4EopT9Y",
  "key34": "3QEgB84m5x6qjhvAecFDF67kg4vCSZs5pPBkLFiWNKmus3y1SazPhVgcVYTbqjcste3v13oK6QzdzagKordtHL3A",
  "key35": "5cBT9598VSk4r3EZHN7r6aYwGwgqkwK75KZA8kUzDsRzLgJo9W6M7PQS9Hri53gSjA1pmzg5bJ1PDSsXxaDAWqFF",
  "key36": "5EwABDXG2sCGV4KmiMADSxThqFFmNtGuUnN1Fo4ko4gaMjL3RevSZCzMhxaJr7GXGMcEGR2orT5ynnMFutFijzLe",
  "key37": "5a8GJxeoKRfckYgofB8mR8bXwmBz6fVpcXH3VDyWrqg7H6pCSTP9D4fpvZSUACqooJhTwTmge4kUBJ89vJxs1G7d",
  "key38": "CLvbyPUXkAwMNLVcVMWSgvW7ZbV5gXASqcqid3rALGKeu9cp4euLL2e745kPU1e9UXmnY9R1ApptEXQJ2WrDM4Q",
  "key39": "2dGLqefWQzk8s4EmCQMTto7Ah1x2PJTUS22zr4tFsZsiB1xKNZSEUNuXtV9QvHbeqLBQnv3jDY3XRF15t6hdRfoa",
  "key40": "2eR5sLUK4QP9W7HVdyGL6YJj2nTsePJ2t7vcrKgPBVihhiACDShjA4VZR4BV7qrvVbNwscAqGT7YJhpVZntzEtsz",
  "key41": "258NHLjPxdHWYYzDrxgLJGZU8H7JsVGhH7dVxi17htQ8G7FRjPoboRVcYQbvrpdMNvWThdEWYJMwjn16vZsaiHcm",
  "key42": "3uRc8dQbQGiG4Rc8DxLwvZuWFxDAhiCvTnQk8QTvhwG2HzihAVfeUkG3iF2vZ45HdbDB7eq4ee1PpCR2sWUbNDdb",
  "key43": "49FW76CqukWxjo9rKHkdai6LKy4rdWxJNVwyCeX7gdMYCDZBXyR2yvPTdDXLfZDfrAG6fMmqAA24K2vbstb8MNXS",
  "key44": "GzvkJ2rSEdxYbEiN88cCys4FYF6iBYWz1Ak65EJ6eUFNFujrSTfpxvtgTKjzRC2cL1jjJUD3bQuNPCPCqQ9Si7X",
  "key45": "5jmzZaRBmZ7xA3wjniCXEsR5SJHYGQbuwmBMetHq4Nhdg1BSfVCYxTPJTJBYmkbSfity9PpaWkrwDQ9ggr4Q7NDa",
  "key46": "NzQ4V4g2SFsoc1weqkG8qE5hq8YwKXHorpxhnJ6uMgvnmVsn6sQb5qGMbDtGFf731kENbYbtHg5sgwdewwkR3j4",
  "key47": "4LBtYcEP3vKuB8ncxsYw9jZFZG14CaN8c6BwCLDwYJdaoGTUEV6p3rkTPbJ5rJ45joRgj1VLQbXebtUR96mtPiiN",
  "key48": "21CVgkTUkXyDPNvfcd2wskAYizYDpA48wQT1M57AHv7Z2N5yFeW9oEMytHHPd9j3F8YLgTCTiaBRjetzaeq8a32g"
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

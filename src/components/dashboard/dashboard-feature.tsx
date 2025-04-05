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
    "4SD77pt1iLSA6r4SLw7YKVU1dn92qjifUuHCUHXUhwLKJ58NEKvVZUjfoizs5p4KZX4Fb2ZvXDTVHCjSC3veEV6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wekKcX3EUULT8FMydZSSgGtcLLXyFMBdymPY4uuxvuTxmWgsNhxGYscU4GVL8SzE7YSUTTDkqNgWJKqaxM1uHpa",
  "key1": "YoiUGQApG3o776yt422EWXeYsqxoArTZj5dQZghooCVCpueefQ4xqzLvVeWGjxWwChY7rNfwEYNA66wqU2FEtb1",
  "key2": "3CjJgUBptv1bcpnouj1AUP8zYtcmHvbhGBpvJSFyZufK7VEcnuqvNZQGDPsBpFj8zZ7Pp5DmH3p2Uam6nwZh56LG",
  "key3": "KXs1QSgtbDo1FHT2PyT8qXiqdaRZnuz7Xi66FW944a2Fqy7RKo5bUaEpgUgTrQvC5Q8FMxQkAfKskucyDFyu8VZ",
  "key4": "3HMP9kFmDXH5LrC44y2drMKHTbxpLHZzogT3sAM7WDDb2X7KaUe8EJDeteChvAXUCZpbCNGfEtA4VUFnVPWUep73",
  "key5": "5yoeYgz8xjJvwreQUtcEvMN55PUnqJN37K39qwV9UjLjqK7U4SBn251wfZ7bHhRWpdhLgRhaEtUQf8SknhiewzoT",
  "key6": "3Yixm3aqb5itdTkjSvZd5RTWRLQeG3TsszFPYnwiV9txdMiWSmqbrC2Q59rCyvBufFAbsUfyiJ9Re3BzpBqQMAfz",
  "key7": "3are8YT79Ut99SxMsZtvZW14dftjBPwZKNyQmQFEnRTAGydyeZKUWeX5BkJXtJmbqs1BPLb5ZcBMu5UZ3smFvbMx",
  "key8": "62NF5YKQWn5KQPPgST9gVAHuoeZL4Y25xDoq3ybVymKfC5vkWLsrfxJcnyAEvCvdc3NNM74ogbfrtp77awEsjTcu",
  "key9": "5J7Mej8AP7FWZHnCFDxcNYedtAp1JcZbVANZHDqNSBh4JQze5XREjxYaq6DhQazbiR2qYChK6uFTzTi6TnV5rXrg",
  "key10": "pJGu5dMrtdLqj5uyFCcy7dMshbNjhnBoCseqpjTkdpVNoraRJkyD2kYpX9vHTMDiE2KygsgpaCToWTiTnoVspxU",
  "key11": "3Jm2x7weVQLRQg9oJFibpZ7HoFcpBf4jBpAgnqUrYDDCe1hcrBKuAy8yyGHhcUv17xMZ4Q4HYCbkCUt15gY5rYyN",
  "key12": "43JwPykSy9tGLKwHSt3CZjYVNfwdwZSSbNG59trMA9Q9WHeoL8wKJhS83WGPYVYmaKiHiTpCqXFtfQxXp6Ukbrgm",
  "key13": "5UVsD6B41xkwwy4zVuixVNbsmTcQgddrxBpyP137WtSMwV1eZSDGw16fRs2GMFiXEtQirVNvVFjmxj8Le5Y2P7n2",
  "key14": "5wAG5YTYMusk1y5W6HVVfS8iW8kGhwvLXJTeEe1ZmxHtn92LRAsBRJPTMMLc2AG5qiH1dVSrKRfSmfBAjxmzP96C",
  "key15": "4BjR79LBPv1So6w6SiANeyoBkoM3CCNahpG652Cz338WuuTeLaHzR6jYekLWed18HfqRcaC2jLg4GpP2rjXRZJhU",
  "key16": "ncRXMQnPBi7vx2RE4MeeVW8MYJuHNidwxHsPm5Hp4jxCpgUx4hcFFwrFTfk8NQYtx9NiQXzxjr6irHu6Rk9ee66",
  "key17": "37JJxwag5jA4RS5YaY7xvTf2SxirpxdPQkX4nbYzdMaC5r44h2J3o7fE2h8Eyn1o8gneWFcoUfBG1HckUuYxqqWm",
  "key18": "63rUc4Hvx7htFv1L323izijBVdzS7KT5bqVLjkkFBQrCdDTzuQTFz7hVtcUkECqz8NGXNmHU23wsQMsCcW9P22Xy",
  "key19": "3EqreRuCkS64hBKRLT5iV18ANNQoxSf9fbY9x9CWN7Doh1NQruj4cSN79aTvzjcXpfYW4RPfvF26aKAGcPqCEBKU",
  "key20": "5UUM2gjwwQUscveNeLxuCMLCJMdZiQF2S7ML5Z8LgTez6JTysAEF2UV2Sdfs6vBW2MqgecwD1nE4WUWPcYxWCERa",
  "key21": "3zRjmqE9tVbtmC7NV2c9GAbbumfKeYAwzZN3CtyLaFRvckN63VW1DAwoX3MQUBYf9Te5uvCzzpof9AdJT7tKu3Q9",
  "key22": "2mfb4ZqrZqoqfsL8qxSRCTUz6APhTN8f54smS9xJ2aPDQTnyzVDAJUQHpEbVqegRrXSDa4WzmuuwWSCNwZ7SoEhS",
  "key23": "449YAta83MNVYHhiStzDiH4D5EcKWZS3eMmMMn2aEdcJGu7L3ayasZZsnFhKk1aSwzqTyU5sCQtFjuqWfvho9GNg",
  "key24": "2ZfctnoLtdur6TkzEdTTPBAyJPmoFku5ey4yoKrdLWYuXyXujRPdew88iT2dgBLLesJiy5zNJdB4haNEE9gTca6R",
  "key25": "5gS8xC6Usx951hYmcj9zucHKmN6FnzooGML9uARu93s1Tmpo7E4cci9zTfgiUKHj2QQapdh6dtcbF28sLSR83A51",
  "key26": "4FrxmquCgohMwsd1RERY8vV8Z2XjbS6Wwvh9uHh6so6K13k5kLJmA3nRYRMeNoLp6QgApSwBAEKTzthFnKDsbLj2",
  "key27": "4gFbXwG7ynxg7cgSLeBDrSpPE6pj7vpCBynwGX5rKtox6f4VsCAmUNmaSogj1ZRu5sUWtdm49xMArrLijUTbEKBS",
  "key28": "5rLHheMo2RgC8WYBh57B7u9TTCue6sL2X1kDxCTpN6pr3kmzeQDFMZoDQ97zt95XXKo2PTzV8VzEqbZ1vjDNZwjZ",
  "key29": "3YBuvgVSRBLMbSa9SeT1BkLuxW9aNNeqA3iMDMvbhangvzWDWCimSFQCk3Str783ZLPDcu9UcpcSWLwnVMHL2deE",
  "key30": "3oWPWGmxJbTGwoym7d4ft45KoBuKS1v56vg7KqMeurajcZUChtFyUh9WJsiZbgRweAUv6zYEGRMLqehxidEnq7qv",
  "key31": "4m4BKr6tNF5EJTFyiQkXDBKoScSVvyAqq7Tm3o8pTapXLCjyWgvsRGK1wBFXLkFYGeYGn7Eo1KtJjFNt1ct2YpF2",
  "key32": "3bngFQuhsHA6UecJ1dLYqGFuNYpDFPBa3vxsr3s4A3Cm3ErWujMf9SVUoCUEzUMhFSqCo1pTD1tmdBUJF8KpS7kk",
  "key33": "4YHUpZAy8uygdcnPcTQqxKT6KYzKefG5v4XYvZ2DWcMBbWp8HuJu6TGwgFJ9wuoMrL6WcRr9JpLEbugHhAgujY7k",
  "key34": "3LPCmBKq5NwE2WU4DjFLZPVwhKV4cLU8U4yHqP4EKbRP53byjsi8LUJXxLZmsxJGQtD7qNPrKo8KuNLa5g9jpnoJ",
  "key35": "2c4qjBPH2fbx3EdUx7jMTKB8Jsnw9npAv9eTMFBNLCAsJgRif6zw4b3EAbEeWq7LYTeERgpQkzs1TbEBLRRzUwwf",
  "key36": "5Doha6ux7n4SSNDxzKBJDbePPPFtdP3mSgqefCqEEAqPpW4YpxpWa5gBfVVfntY2TubuiwtMWSUJgHcihyUzcura",
  "key37": "4n6bjbLuydWRn9fd9rVjQRfF6pnqR4SyQhvdAqARPvHeiCuHJFzzhSmfRS7SGtR5apU7RREBZejR7QUwZPGD3Lei",
  "key38": "Z53rjKhtpVci4Er5Fad2e3RbZfLcmP8FBQ2TYn7W5HdSs7GQnXvghMqAq4mPiMnFCJqVhBeKz9zMEWs8o7NMqNj",
  "key39": "3WJq8PgKJJatN4uz1fYdn6roQY2M6gNg25W3ciXYefi4VzL42pTC8DDKxoqrAwRsu1vn1uMbRTHGzRvjme7Dx5Na",
  "key40": "2kXDWJ42M6WJiAKPY5Uey6Vy9LkWoKas3JPhtscTUH7sHw86kgF8SPQwBuju4LfCtquTTKc5kfXD7j3dkRE37BUz"
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

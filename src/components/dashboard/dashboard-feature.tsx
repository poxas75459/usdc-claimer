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
    "4fzRhkiJyQAp8BfaBGzqzwZVcaUWnmR2G5N4XkuBX7Wq7x89tnkVUKP1sCRkkvgzeA2XAtDWDk3iweJQnPimtJR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFqPPVP4nf4HYsUzRbcUu74aurzGMZmiHxW1U1pPE5VELRr9GbyeZSmV6oVpTqqsoykqv53M8niaQA5MF2o7eVS",
  "key1": "3FmcHvmxgN78wDeNn2FEWYg9ZFkPFhsaVB9hA3aPgmRsdTRrgDssaqnLE7GueRp1bBEQyzUAsSQHPQxRFqU7CCgt",
  "key2": "WpaGRu2dJkb3xNy3uqtDce6kxCkXadYRXKQNto5HS9G7UbDRUN7X9k9e6E1RBK8zsCgGfEmNPPfqEigP7j8W7WV",
  "key3": "3A7sH5mBzCZft4zYAHaVE6GE8Qo5L6bDmNqPxtcWoo3SfLo9zGp3SAQgxfsuCkwDi7D68nXR6BzuDDmSuP3q2XpF",
  "key4": "23iKYnjcjhZSphhPCSbFpi7tfBzC1ru5F45yGDUowUiTsVwRtwUt9Bhm9as31SSvcGhFGwTFmb4dZKK3ccrj3HM5",
  "key5": "3WvyQBDNrxx58eBaMgkF1rujgZ5VtW7wNnefqXMDV599Dei69pttqe9PuZncR5LK4Y9CVup83BZkV16ZHNXuwmVP",
  "key6": "4BTxKa2yasv9R9KB6WoJej7wWkVwWtu1j7PeSEyoZ38DDd8bXKMh1PbpLTj8oUw3T1C9TRY64DWz2CdQ1w3UTzFK",
  "key7": "3ydUsYjJiG333kkjJvUekf1tPf5itBsWagsB49hbQV2LRuSsBto57jG7KRLSooSzHS7cfQJJUcmBBwz2axj9CFVc",
  "key8": "3TvpkUKtNQ2H7ZTtsovYDio7Qy7yvmDDjbwV1TspkWaXsZ3WHFVnncDznPLoxvQZeKUTSNAcyf8yn7Q4RtHPjkSY",
  "key9": "JzZbVzqyV1md7qmdzvPVCQe3CuRMqrUNamCgFoME49AMCj9vLM46rfgMfs9dRPzM9PFCff4b6fvr1MUbdY6S574",
  "key10": "2S5B9Xde5pcoWpWkDYeTc49ZTViPDYjVRtJ6Y1BNjfsZJGmi72YHXVYeBCumyx3rWYxiHUYcVTjytJHARrKWxxTz",
  "key11": "5fh4oPDd2qnudHE861xbr5NB2PC7yjsrGkyireKSJ6xETAmb38V6dmY3aopZitm8NYs128p3wbfSemVe4mSmWrmQ",
  "key12": "2qmAEdgd7ccExNYM83fJdz23QYhV591BSL65v9XYFeXTo2iynAxZ7DwtHAdFosmJJ2DvWm2AoJ2jWuZ7EnHjDmcJ",
  "key13": "5BwbTgsFFpjx2V2XvaX3mHTLaHAu4YnPsdUwEHTRhCMn9m8EmuJtcjnxVb2D4vF2s2LNt99Mvhr17sRFAQJmunDQ",
  "key14": "5V2b2A2DoUxSXGys3Sth7MKyfrFSN3TEAo9ddTmh6MMp6NLgodVbfLCvrfvLiA8DyDcZuCwq2zkDRng5Z1fS2eUP",
  "key15": "47mATemNAcMc3BTnwQFnbtuve9aJ2QUDkR3NB6UvjuCwCxaKN2uYY2e2UA6P1isWrj9KKfEpi5e2ojgAgkavTTFR",
  "key16": "4P87qDpGh9qQgdf1QF6WaucAReSWS3nPt83YmYREvUBakVhL2tVRHS6sQLNdXfo8PkfyUN5z4B5Yq6s6yUnTzYni",
  "key17": "3zax6QMJjFHGp8QbyMgXAAUR6tkASrt8AG9XPD4pjp7k4aXusX5KELvo4LoDwSVaHhQnFjzfiroqc9XRgNrmcoTv",
  "key18": "2LPkBZxx8Htc6Qzt6sdmUNbKRq7YEJhpN8ZGEE4qYguvQjEnhSd4hWuhcZSyaUqYvwdZ3KsBaqQZsNsAL7hqhuvA",
  "key19": "pr8LZtj2Nx6jthfKCgzUifCSrJP3mMXSVNg2HYN61QC3mqxkSZbdKLjv2khvtcai9JXU7erS91nSpDEecBAuS2Q",
  "key20": "2KzjtfcuyzDzPTeAwhMtkJj869yeBzLPbLXm8vYacNCAScmmA93bzujyf6jqvWSdxqjPQbQw2CpiT1MZ6Jt3jQqT",
  "key21": "iFSW14yd9YcR8ksTfhGLWJdsPhk2DrJhFUJQwoZ8uGGEpeLQRRrjUV9ncn6d8qFK4G2g23tHf8DJb7x2bJcgxRQ",
  "key22": "LSuv4VmvZSzvQ7ohWHMkeeW5brdYcXro8b1YpxjfQoczEC5r7kff9y7Bjp6DGKpKoPXZ4ifgnUtuovmf5Whx6qM",
  "key23": "GpKUCeTVfRzBqVQFMJ5Uk5Rb6j8TmfX3TomKjPbovFKAa5MGziZVWuAon32G4i5gZWxyCJxiTBPSCtFQAV5NwU1",
  "key24": "4zy4f63Y6Pb1P2tJRYrG4Ff7zyFdNYaSMpLaddqW65TAa5V3oCDpYDzwiw8Sxui3zV4fwmJc16KzGpuRPM8oDos6",
  "key25": "3ca9dRj4DUc5xkCZQxzoyUC3LAbyuajAwfbU2g4R739xEHiQUndsNtn3coeZqW4KpQ4j4vRSLkTuwXwwdm7D2q4i",
  "key26": "2gwEU2HfEHmGPr37jTZtmZmYnAGwVKo2Huc9Ate1CaNzd4jGUUCi198WGDgWyPi85aNUibxpexNSMhNxwATdc2Pa",
  "key27": "4F3xnFibSN22FMaSx6tT9i9QrMu6FXizE3Qcft2Bs3zG1bRUuGpmosMc5dj7F4AuMY7C8SMAx1NquPxKb7ZDipQT",
  "key28": "3HBHJe3KN7APvw7uqVaKgQPkfE62xqFD5YGXLV6mBVRcrGQ7Vbb3yyKQ3A8FHeDB4tZm2kDbKNV4WTCRkwmDEUGW",
  "key29": "5rgkztRcJww5UbfeY6MPYr9SVMcR2kyFybXivDnPANEBvPfA9c4SdZMaF7TWJAt65h7MpcHDhwjpERhJPBq17J5h",
  "key30": "2dtVEiz7Sxr8Zqd5pxi6tsVTywxDELTGauT3pe8uBmsn4sQU676AQf3JnpNUy4oLxof5vmg5rFLu7x9KMkmbtYe",
  "key31": "2VTRiAdbpHBi8MDAvaix9GopCTrcGwk7a9QtbpZzmDYuyamx75xmjsASyFcr2FWUHfNXsi3DhDWWpfDjxzNmzJ8L",
  "key32": "3PJBKEjwvyHnk3Nm9NdLBTqFFyoE8s2TCuDH1mXBXNbce62nbZAEpLd1x9uJ2pMGH2Ex3BMNJsSci4HbJJAYyK1k",
  "key33": "8FfZDrWgv4WhNafXXM4rN8hznTvwUdTUkrPCbSi2oUyfVUSDnyoqQHaftWBu9ezQRCp4KRxW3XMDDpEAgzL8BtL",
  "key34": "6pjan7NnPXRr7hphGRmZHjv6iLxMoG3NrSCpN7VansonA5Eiuo3VFBMLdFvDDef2dDUcB7qQwxUsbiJefymcJBE",
  "key35": "yAanrgZUnqLdVfndqmZwJ4w72CfbSDiu1h2NSz3P36igwH1VbuqYrerVf9SoLcJ6xmaPVUr2QnTny1FKVAmbEoS",
  "key36": "4YRHUmi7eXMH6gzd98bHjmwfBXeeEt6V7RdnDhJqMX8iMtdiMawcoLr4urjvEpKtyX4YRLGmxdRmRGKAh6Y99aZc",
  "key37": "2oVdNUbrYkWPcyGQ74EMyAox8atFWsd71fB5tijze5A2H8TaPs3866WApfiu9bNr1v47J7xk2DbWXPtZtC7Ck1ZP",
  "key38": "5hL8oRxp9UydpnKkr7fj44awHU5FemjNfmEYiMTs9FdL9cDaGSLypmtYpKRtHo52as5ibPnuUYRfdqh31W1QPAnu",
  "key39": "aGYHssHhpnRPQkYzCX2TXyyDqo73sgNJAnH446BKY4rGhTNzQyfkt9vnNLvEdiZPPraaCAkba8WKDQdiqTsNCG7",
  "key40": "3p616y39u8kFh6HSpQPPmZDrGLGt6V5R3FXBafqbeTeTvNFSqsJZJXXdrZJfo2icfCcMjsaJ9g1eSQypytcNL6Cu",
  "key41": "3PLhD4oPPtVrEmndUaEn1PteaBnaomzXkwGXRxHreU76aZvChF8HsvULRWLwJpftmvDBCghBRGDUkhT6ucaCZXry",
  "key42": "5iXnJzrNtwAQLHLhMAJH9aXHvMrb36vSaCdfacG9KqjF8S3i4iM7pB8yaocegzo9CqZDcgictk4iBQ8Nje2kBtRk",
  "key43": "57wtFq88ToZTA17rYn7RJd5aufbwaVzgr8mAzbfx7oit48uyu4X8Wfg7g5TBN5nJkStTkp9FfczgHLvAJmMXMCpv",
  "key44": "65c4LbPKijWnpGd9ZfVag7k4t27kLuuyziiXymvRtdAh94aadgk6txMR9vfupUdv4PDpnFsLgJpWdrzjLNmxY3wr",
  "key45": "5N4Eat1cCBvysw1y65vjwnAZypYe3NRmvcdYDFrFat9MRb94EjhupcBDt5f6ixG4HS1sCdNUnEwp3DtdpQxUuEss",
  "key46": "5v5B9sfAXncPSwHpAh34XpWFtiaAi5BHWBP9rzAZZjMkckeJNYtUuHVgHRDWoSrHedC5xy3FSbQo9uEZPn51dswa",
  "key47": "46TvVGUyb3goJsNHJYeRaX7ti8fEgiwvVkAe8duMg7dWtm7L3i1WKtpkdSmpaDP8AB9qHyUr7dhTzQFYq6dH4HtW",
  "key48": "5x92rfvrrHbq5BHLa72C1Stv37r6LgCaq28F2pMTxZPRWXMQjnzp55tLcKXu6Jsmr3eZX1bSSnozX37uZDA4KkHX",
  "key49": "2pSBfU7eacq6TdxxeUgeK4Hunn7xU9GbmogczatNojfeSMJFrcB5S4c2MFdjB62YUfFbE24AdJxnpHvpJxU5DFf8"
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

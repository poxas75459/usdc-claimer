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
    "4mmY9sgkFFYfjmseosAKyiGsWvWiQVMbsNDTJ4YUnofotxvj6XYastwkgiMgzWtAPCRikf6Mmy5FNfH7W1MXXbqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdBKm3n1z4e4gm7ocoV9sGuirEpNqHHiNbJbo1jb76Fm8cMZvo8bCu37pzqnTX4bDc7aWaqkpbamf1tVfLMgZ7u",
  "key1": "2BkotoAt62FXCyBiZSzUYeyj4GkiPZyBHRx8oEPuF4cgZUDEWHLztawVWkvc327DZ5VG6uxpuG1ZLBgCNzp7uqrC",
  "key2": "3DLrwY8NYgzNKoE5DcCmsJv3LfTtYFu5oARSN9nUBXFLw193qEQqdmEHitCQx6L6S4w2aV2cwDMPLtNwSSpHJH9g",
  "key3": "2inUxx373RccYyRwzxqLUu37pHwhmxw77pDtqPukmP5xdWW22dgC8qwtHdZ8imcMaeBuLhVJ7zBCYvJGvn6RVUgk",
  "key4": "5fFxb9iHD2XQMEVyKVSc3bjF9TmyXgM9nXs2dgUYASeLr9nCww4Pj6TUZNfkVuzpkwqaqQJKWvbAnF5dHQ1iRpdN",
  "key5": "451G6WbFjwYJskH79u6MmEwT57W1YvHWX8Co6TXqM2RMfHVcQVyDQcmAfD8jt3zXcEhDsvj1jhWSbyBkMgiW1Hw2",
  "key6": "4yrxefooYLkGXvjUAT9EwMyuFskfA9Cj5LmaJJJjbhxFMXQWmpwo9JqCfKS8EN7vN18EfeX6giataED1XHU2xw6E",
  "key7": "ZGLyxuf6giMGXnJ8sENJGwKDX5ic6txNB4Gk5ZFVXCpitY8U8KrVfA37ob6UphENThiDsWAMkneE3knB9rgiDhG",
  "key8": "5gsQARb4uETvhBhPLgWL7uvHxHB3K3MRJdxVYmCvFk3WaHecvv2ShS8vZbF3W6ptpAp4ZdrnqbkaWpamM9XPBoDL",
  "key9": "4zqybGgiAQ872s9fw2BbSc2wAVFFZnx9oWMh4NDqupBKEMi34TAS1vbBves55mhfPiVNuzEHHnMZZXuCBNSY9KuJ",
  "key10": "4bbiux8i4ZkLKLfVqtTUWMc7Hy3E9gCioc3aX86SGnMbW8USWq4yf9dCCnxP7AdvT9YZMJpCBCbEr5HkVGanGhyA",
  "key11": "bN3XyMLDyD53aU5TNEjqYaNF88Xj6tm9dU2cLKJ2cyu2eVi8QFxJvTSvYtwZ3bUXvkA6vwm8GP4h3cb447Fd6hi",
  "key12": "2GGsCubzpv7tdEskjQMobZ85F8JQFogYbLkEVejnB98kidjH1n58Sjyp62CeUwtdgfGdynf4PmjaHKwx8A8xuAkF",
  "key13": "rtBW1k4fEPt1JJDEW6MXCJdCDN1YTG8GsCwnPmHeQv8nZ2uVTcJbaFVKyYpf9PVsyKEYsHLmo82ANuvY7sgNEJV",
  "key14": "5LNTzuG4mcTs9Anmm7J9RHWz1BMcrZwsf8WjSuhBq1Wvfcitp1UhHuAGANVFpxzMtuZMjXYQfpjzEH8WgqGH2Fx7",
  "key15": "2n3kpCeuWv4oobt2U13Nad7iHVk7UmhhpzTk3u3xbo9yKib91jZYt9acPD5s19a856nY24H3vDhtgr2wkNk5U8K6",
  "key16": "j7w5kum6JPfbVXUuPqfKMi4eRAE9vfYVaceHheCBFXXzKj5Ltop9Dau17kT89vaqnHe8JnQM1m3RFGHRYrissaL",
  "key17": "4M8kYnruChbSeaeQTUxy8Th5WzcTkBFsKN9wZHWuoFrHxBkAESgXAG5U7PJXarUHuyduPPM11REw9LjMnz438qCq",
  "key18": "4veq38tjDvhRieU4Nm6cgJ92NaN2v46mWYagDmLsYRavZc6bPKASodaY356zFRZcJZQ95exfQ2dsHVvFta8o2x35",
  "key19": "4cqRdjNuQLueUERBx8wdQJ8BhkatGUyJpzy8g4vcUgbUHG62A2qXUaPHJBnCvsp8fZGWqqMTYaZ1DbnYqynHxJiV",
  "key20": "ckVLYXnK9MFuK9c1ReSJ3qtzbcwZaq8ecif9pUtsUwsyYcUitRUDT5bsugYftH8C1pCyhmWQfQJZYRPYMsQJ6XY",
  "key21": "wsGAjVYvupQ6Rpkf6tZCe5u57z91hjfQ9mHqW9urNEzZKR1c35fUrXdV6PrZYMEER6WjfBkA2GRg9trWvJoHnLW",
  "key22": "4qBjJfxa5LTVN6MMt43knmhDpyc9X9k2c74KjzxY2CVuRJquwQnTc4DSjhK9sUvsk9vC5D539U11rgEWUnVqaHZi",
  "key23": "nrDiNYZEcbbdkx8isU4G1osBYJDDrC9mkuDbz9axX5QKfRJXowe7FnLHu5mqpz9NRViHgSe2aAuA82w2TzHxkLs",
  "key24": "4Sk15rvFtukTTSbhy577Dr4QYP8JHbCnSkoDbjQFPwVoMw9tE6QSviaunWUo7p9cEBQNi7ZxrcWYL9LpuEAfn8zp",
  "key25": "KMQ8BCad2TyMwCQMmnYCE8VHu8coZvSKeY3eUpqw952XfxJNZweG7WdZNjk28NzbEoGg3LrRqLcb4hcQwsVF3wR",
  "key26": "3kn6g5kZcg2wPewDbTVZkCeRLg9GvmVeLND2p84jkvPXMe7nGh3J4whjNaPSMZwaPSY1rqmZTdwShyP6xMCkHUSX",
  "key27": "csbfegNtMm5TzwAaA94rr3U26CyFMtzdAhbPVttJhexbdi1qE6r6nHTRtHBKE3xDqN8oT2pY7Mjb7JyVUGkdwJ6",
  "key28": "BGj6k61f4j2RcLwdCNAxSZxWPkSpGmiQtipex6hgDZKGSPSxZTMMx6W32hJzxdt9u5WLBFucFJMMvikQ4NDZBnC",
  "key29": "3kbcP7ZEwiV8zgX1TdTiArgDVpv7h4Q7KcWiBVGKFt5Mr1cXrCWFQRshweye2Kxwstb16LDv5ggXCMyi9tHkopGK",
  "key30": "38Apka9dPmH6HL8viiWTbXbgmkbjBpaPnoaFhSYzNHUz6zR2a2n4LcY5HDXXecKrc2j3DN8fGqR6DS65JjGj4RiC",
  "key31": "TTS2EqGGNmdQcLrWg5nMvcTAJ3hS1JSW5N4UqGcL2hCs7HrR1MCocLTthG7PRseNAXhC8H1AW8LS7p1zj1YjiLJ",
  "key32": "44Pqumh88VsWiEz7sPZFtbF5GARMjMoMiVf7pYUFiD2m9eEAr4mR6aNJ1tShaD253QXQALXp5Hw1AtBtkiRg38WB",
  "key33": "5RE4shC4pKgTJ7TB1QuNTeecTTQtShv9oZQksj6CxgZF3T2fqY2wD3cxhBZVXgjwZqR1aJb92APJh6dmpXYXHURZ",
  "key34": "4JE2Tn2AykGH8kayeXgos6tp8mMx4gh5vdZRpL8rs7T8REtJ2cAauhjo51BHV6q517JwcxznDxesLptcK8vv2ViH",
  "key35": "5FVPRprncpoivJEW9mEstytqRkVUaHdhFZXBogN1qdJResnetjBHjpZq9Gendc8fSk7zPtutECKELjUdenFAkGpc",
  "key36": "59LrdK8CYZnbxMjRsEV6f6zbiJXCjo12TTTirPTM8woDK41NAakZSUEkE6oTnxviCw8m1gURXKfckcxv7TSWAxbj",
  "key37": "4jGkSceZnWFUXGi49ZMiMfecGfxGAGuKbbiqzWvyJ727xJ3hPSf97CrYgMgz8SaE4deysZqDHh6x88RYDASGAaX6",
  "key38": "2DWnbewTff5GxoiFtgbvDVmiwsKWrWSbWoxcm81ygNdYBkAkfrmst6rFU2VKCjUZRZrSrcJLjm5XSaphof67FJ2W",
  "key39": "2nNtMVtPioFkRMfZK8skJqdtZP3WbakqkYt1qq8qRmTNg1cS42cqeqbND73evxgXEGdf25xk4raWAcfZFSchP1Rk",
  "key40": "5kVQJCmTqGhiMK4BVieCYX8fy37fCfj27Qh1sFkpGA4qrR18qQJnqW4opH8WH1Yxx1fzW1P1oYEi4rtxKcbqksLM",
  "key41": "3Xef5XwiqTqbcZzf1UP4tY4LVLzUMu4Po4ftFpEfn6LnPpkHogSKm3fLrtKNXQxySTesgAekGx59T3dBzkLzFxc2",
  "key42": "KxDaeQZDZaLe8yfG3H3T3MQbANRuaySbbbZXtmJX63XNhrgjFnT619stBPBDhJD4hRXApz94jncXmUxWCh7vYn3",
  "key43": "3Hbs3X62DhtNrsPu83YgCsTLFqSi3eWuKkSxVPBwMpGRumqAnDrHMTABFievJpmXUbiesqRAzJwj6ABZ6SetiR1F",
  "key44": "2HBG4Ef1e5NsEdAqtq2QqHeD9gaaYG5jt14HxUfQqZFGy6REPNAewWbjwGADMTsYeRfwAKqvaQLENE7xHU63wvAZ",
  "key45": "ZeuxeDnhQwbHUkeWaK6azkvJiBMvkLPT5Z3AFhWQHHwg7e8vnhTk97itHBZ7fadsLnfTbWRGciYpLUNvaCEmyei",
  "key46": "n8EeBsrxghCVbw5ArixhgxpExZAQTtNu6roxdgPPD96KXuof2invrmVtMfF73z75j74TvMc6mFNYB9ucoAwnVrm",
  "key47": "5UiLX8NqhKGEt1BbeYRaYXey8D1cUKGH4W6pbVb2vu8isyfFvDsDrEZF74NfjJn2NyTK2oJyrod6Aq5ZF3PWy72a",
  "key48": "3qk8mhc49v7xrCvnFoQU68aPEpsUQEc9dN9sURpBLQ8gC2fDGkbHViYYWhq97ayaRrg82HfGQDmLFKUhpzySPoBL",
  "key49": "2GapwgfE8gAHiVZWFNZzAbNkNsoE8HLwjux3bkzVmADJJnKfR6RuAZfyDuH5HrFffdAA1HaQdHqJL9MCB7CJ7ebM"
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

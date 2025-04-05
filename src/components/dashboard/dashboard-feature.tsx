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
    "4baHcZk62MyB3yCd3bEB3oxMfJn97d8PjhYiPMhcgvA9CXntKUby4rBaGwrt3ty1hjs5Es6ouWxmZcTGtDxn1BQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aw3Ah8jhHx4dAaTUjTQeBq2KBY2qU73iMSAxnG3RzkFNDz4AZLuPBGLoZoCkFmjYbdBaq7N2LeqTAuPSVnYM8L7",
  "key1": "3WXwbeViN6kqkSAPHqo2GYsEjp6qGVCo1nsemCP93U52saXn4a7Zjnqnpcscao1Tw7XR7WtfRmCP1GmsgU3a5crC",
  "key2": "Rbnx29LaV1AZPG6BQzMXVWKvsasDX75fkCfqEMrodPuiVTijPwXrYneQo8Xff6J23p7Ky3CY9UPRYpZdZaBaWwu",
  "key3": "3eLEvro35LriEF1gHAskpS81nkhbMvYrbXYrPmLiwcxWjVr1U7EPd7PhgkG4P8aAg4U887pSHqirNEX8tZKfN2QH",
  "key4": "5F3xi8gKsUDnhN5q9Ru1QQ54QH9J3nSjdetdm6fPrxzvrPki1vfwtbKbeM8hyVQL6nAiNsytF8qt3MCZNE4mBc2v",
  "key5": "2Hj8kytwhvWYqcM4Kx4ZXBagmK2bLNQZUiTT61t2nesxKvdSoAMTbUQqq2AQizukc7hQZUNWinBbDrViiRa24aTZ",
  "key6": "2Z4Mz59nRPqtsn8gRc2v62hr94AbfPjychsSmL9bQiZyKffwQiphyp7jnKufa7LQojCdhY63MRzD3GdKcP6Kata2",
  "key7": "ab8Shg6UKzxaHMCgyTeSa5daLBKpvAczcVgCXafWGYwuR8mNqCcRvvREtasmFGhNMns8oGryEnnpeE15imoEvpC",
  "key8": "39U3gzVe3eGg6H8D3X7LnEmUvoxGrsi7fLyWNar6vG5DSDfyzLftcygFrYBH96D1wJ2Z2ufRsXXHpQpkD2BfjeMq",
  "key9": "4DE4n4WtfP4EGPQTQiGbamJHoUCrtxVpNEgLkSLp3tb1rTkDqu6iWKKSDTcsYw9QzBBFBvNYMEgUgLavRkMwFe64",
  "key10": "2HBFHiRhXccrtWUWNEbMdEmquwNTqHBKEmSVdVyGSZMNWU119fGm9c41F9mvZhvoAMRusMAn8sLJACygL6e97HPm",
  "key11": "8enw6drxheKfw9Xc2eCVym3vc4bVkQJRnzvB5eBEv3wNkNZgnQp4Gac7YxV4k9ha8oKKKrkSjjqiXXZGiUNJ2u4",
  "key12": "jZevJkBuQqmqGaHkJ5ZTsYjLAcPf6Vfk5isBLbRLLTSKBtjh7Evq2DGNVy2oekVRjyUW1VfbTzJz4ofwx8CRvUQ",
  "key13": "56LQZkiE6AGtxuB9trahrYJdXvLmT42C3wrCTgpRXUaYEbgH2AGhiriLYTJtriSJSAoNffkC9wAjECGQat7ued8U",
  "key14": "CSzvzjiFcCKoUFY2oJUkENpoVZBbEqbh2JMbmfkwsfHdDn9WtSDgiCW2SJPuhp4b8oZTy9wdGR5ZdaiAU6Yg9LW",
  "key15": "2636awNhSqbeGF73WM2aWGSaQaXJNNhnbm6kWFDQ82d6V1vtWz1cWMvaJK3yoD4YAJtLNfwQckevRvBSzjHNdYAC",
  "key16": "5Daynuzj1rDX8pYcrDPwFhqxVVYUNM3L5kuG91tMCkGALXYCrhzueJkM4swJJ5J6oo66RukGkPGMSmj4irHpNZ1b",
  "key17": "anCzJAM7j3bTTctDZvmKzPmEd2A3G45YLogzvb9VzDznRy54ZDQf6SLAzxWMzLwGkFsKuHZxocfW2UAaCuvPKqQ",
  "key18": "4PhTF2vVUf3i4GHzRAxnz1erSQ5dy8TJyTX4p67XABcyuvhnUfp51B8927t6o91H7t5p9nzusRkgg5CtM8w5pfYb",
  "key19": "2e1bqnTSgdap9TJHLtdbmb3GtZUzj4Xi5725gQVoHwJJmpPSrWm2xAW3Vi9h3jy1EmTrb1VqB9duHmEXxNo2EFTu",
  "key20": "2jb1atGRAErNXNAkVHXbJTuGh4mwYcAYnC8smTMMo8RNGzvvn8QYN9zzxSTQtkjMumBKujJMNa2eefaVh6mETLLM",
  "key21": "4qg4TAd9MBLfEYoRMLzaMHKXH5R1XJU6CUsNp7b1HHoZb6TZ6xBbZLbCkfL4VGUHDU9ERzUY2EP8qqDorWx7LMcT",
  "key22": "2byNe5G78gsVCh1tTkyD4c3piY5NUJRLGqTkBdnh9xMqoM2JjnQD4LSUxkJ5qRFv8j9n2EAzr8hfVKXFxJWYDUaK",
  "key23": "5kyxXvhY7545WZAXuMkPbRSkqSBJY9Ev7q4PMCFhSq6RXnbPogWsFp4dQbB6cGJ346ragzMfnvUazbxgpaw5wipi",
  "key24": "3ew1ctGyHXHMD8EFwixSD9wuHaneav6AWN4CZCuLcgssDBYdPhhEHktZeojsfUeFtdYVioJSW5PncgiEvBrZ1PWt",
  "key25": "58vdPqFeDGShHK97hD81AtE7393PFfxb5xYKxnM4BWCiR5NDn6PoE29QMEYGjtHM53hKEKSi48njshk2zkfsqSfZ",
  "key26": "2x1G1Wdj2RBwHsK58TeS7suRS2v9mHGjuVE7yjrZ4gavy4Lga4FzsUCC4Ei9MaLVZfxnHqwg6o7XbsnnEeLciCjK",
  "key27": "556odkwMqGARb3Nmka3PFowz7QeBYukUumuPpoqmtkNNmoK62yvkMmUSuw3DLRYJEnNn6DDng1nrTr7afXccABJP",
  "key28": "a2TGYfjbyyvn118p24e1eL6fu5NfQC5Ba6j1v8v77aUhfpKq5vHP1VrCzN1YWDUDE71Hj4xJFfzQ5GeH6VUZJtB",
  "key29": "63gRZW5sSK1DunVw6TR31WfEEAZnDKczxxhnM67jELjFzhu1wHD4S6za4nX437n99rq8WWxJcveRNPixiRkogcVp",
  "key30": "2HgxTz4CzbztVvNPQBNBDvcNXWxbisnjus4eBK9hq3gDUGGZcLWnmTh6S3UozvqLr4ATT37DKmLJ7qEJZi74nX4A",
  "key31": "2QHrJ4TweB6RaPvTBSNtjUP1k3xG6GgnGzJVCRUUsFvTHfEsfAXUpP2hJMYBwGR8eYctnVNnUG5DfPXsXnPBcfwx",
  "key32": "4oMzE9L1fTUnZ6mJ3K7RcS3M5R6r7ZcqsBTh1Agmn2twkLKA63ZCcxjZ572xCCXo5dpSdfhTkrAwAcx1AehHYX5s",
  "key33": "5pbTPerfCtG5jnXL4ZFrAfhpZG3KVfV8eaJfeitgctGhLeX6BBeTBgJgWHe3bQYj9SUofLdfvFGrb9YejuozATji",
  "key34": "HpY3kQK4K2LQsMQhY4kpeXXepE8SEKDGWYpQXgTRa5i9VtL3PwUHKMN7jyHgaNijb4k5SKyJb181eb1bZQYKcAM",
  "key35": "5tEoChsjsLqX3BJv2k6CaZRem6JuWNieEeYFTi7kWdiM6JLWgfCMJqvSoRzx7J12rvudMX3qBJAwHDnT8vsrk2Uw",
  "key36": "2qJEkUmoRWZsvwb2uv25AqSHPBGvsPG5NAMjpkmk8UrC1SqGyLaJya6nvpAxyvgwAw42iup3GRXFw4fT6VQvMx9Z",
  "key37": "thErcfFs46SBvBEyi15pFnsE31ntRqUBfXgdyvDyFKc2sjgxs58YYJn1XAGQSSqXZSSP2x86ACkNqUGMz1UZGKF",
  "key38": "2W6ifL14kWntAiq8GXgLUmZxa3gHsoVqzGBDyaN8P7i1njUxGbeByF8tFFCJeMchFKxU5bKFZsiy545sCoMwYeci",
  "key39": "2mhuqM78y5fuqZghwe16a95NKbr8uvZ2mJ4b3WZZRZ3iEBsAFZnkMBnhGDp6AgZ8PP12ygiRnAk1oaxQyoLXdqDn",
  "key40": "3yYjJicCod74qFP28U6DCDKtJNWHx6SkN78dXydH88FPGXvapFbQptfTZATMEzaxdNHhDwDCUoGiyQpHXev7pyjR",
  "key41": "2Gd9CPEg2VnmTr4ysN1MeCibuPUqnjqU6V5fqyVa5dp6ZMdaZE57zeWKEE8F23SZ3ktw4EsXsi2jaZixr1SeZu27"
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

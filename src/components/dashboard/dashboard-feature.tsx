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
    "57AKcpfBvBb2sXUZRrYaSCgFK11m3jLYEEzYpzNf14Waf8XNjtWfCsXgonzE4ciPkpmC53s5TgTMkRpEPs3g67yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aimohp7Cvc2mfhkXsR4BotSmofCbnvntTCPuWgPTgXBawwhBM1Y85E969F6G4cXMfNXkZ7DeXgE5CsVPEJFPs4y",
  "key1": "5Yxw1Z94Baa2MhPxd659o4diie3Kq7b66aacqmbEQ6NveKNRkQJqG6Sge5uSqkEAKT5yD7kUKuynKeCirkywqGqu",
  "key2": "TFRsFz822FMNTZc7GJzEGb89SqqgiD1DB9UEUaGMrEXBQcehiqsnB6AZXbY3RCfnHGHucH3fWEFBf5LqnYSzoT9",
  "key3": "U9M96QcXgZvCch8vaTiLbFbidD9C1vNPxQzx3H7n6XLL9QyPi8NftE3BDTtCXLwsfWPKMFiMMSXmuP8sB6KfnN6",
  "key4": "4YdP2Q1BWpFZCNWQ7YnmHALEbDApgijCqiTFa5z3drxnazb1cG66QJgQpXRiDF9HNVsesKURBdUnujk9HFPEPLTW",
  "key5": "MxZXtuyiFhTUUfjFx4t1QzX3SESwtBnaLW44dSDWt9QXGCo24uBtKh7W7ZmqR8ZuWAXuisAYvjtEExFM7j3HT7u",
  "key6": "2Z6Hg5aob9HyznkPVY3EudouTtrHfjejBUVRf3SvRVhf6psbzEiVXumDuZj7bSVpM4AusknQ872JBhr99winGVSp",
  "key7": "66okb7zJ6cQc2J4oXfruvN3oa8Rk2cPqxy7CLzLXbEPUarwjp2wvFSbgSKjNmbhFPQs2Eq6fSURSePM68duMsYZ4",
  "key8": "T3Am6rFSphAMtBzFTWT6JHi8qAecJgFW1CqHM6EheMwnLkHuvUnQjKniCkEEB9fEvuivg67dxVpb5iftMWhNgvj",
  "key9": "313Hy4nQ9yfHYfheQ5HX8FzkbQGmLCk51Usatjk7HLa7EMS1hy8jFQzwvAEsKtoLtqWhXwMRfyAGC7tNU2ftcsHV",
  "key10": "4NeKgkWbfA4VCVLFrKP3cecEtMZnyKBUNec8ivB8KSwYr7uAjbgCeBqhTCXS5oHdeY6XU5Jve4XkN86DCyxUFAUr",
  "key11": "2AUFX2YnQ8WFTT2Bc7vm3eKPq1R3rk3wT5nQixaEhUmErVifx1toQF8bbaKZiPnjYDEKdxCu7qavTqTDZDyuXCoi",
  "key12": "2dufQeozn9ap8bj6yVDFbpg4TSVvynMarbiH9dBK6rbZbRgDiHJAZNBc5zkpQZJD6tXhyuRGX9DtBrWNSBEgBaXH",
  "key13": "4Z8L6n7vxTQ1Wwz1NyfnABJ6DtznxUDsnUu4hUbuR3x7Zo51fuAJnsqn1vo9rxe7Xor9zZ4UVD4wvpqcnfeKdG2U",
  "key14": "2n2ct2vBFXhin7XpBUJQ1suHCG9vcTxPSyDALqMMySAfJb9byzL66S5CSR8n8mBqMGL6GZyEKytGLXYgvGFKohAE",
  "key15": "5Cp434niDoNhP6mus7sX7EquoEGVW84gwbmt7rc2MusK8B5B9C8VhZSd9ZYhX3pDRvixMgcVUav3g44eWbwThD4i",
  "key16": "P4HtBUsxf7PhwN2hMALtyGuuZaiSb5hChAjoQPDgg3MtNKnvpDrmwfpXmfGWvSrnAmJMbby39M4Hb1wkv4U34TR",
  "key17": "3xfDjyhPhuKUgGWEFEJzitFqtJGuBuXR4fVYaRD9zeg8GG6Df9EU2po9oE6wRBm49bnbPXKH6BcwFkfp1zhDRJoc",
  "key18": "5tL7MmekkXpnmLVfBiMbUC3bKVwwgCKwnz8tQY8msnkqRK2LB62ZRKVJgmbbedNTFQQKoUsZE9TiYRBNjKdaBpv8",
  "key19": "evRbYS9zcxsetNJ5VFdNidDNSGYS285zbSy9FDrsPv5vyBEK1UM5mMCqpdReU5WRbWsHygdNa4GFzsq4A9CTyjB",
  "key20": "EevzPkeuvjuAP2dycnttXHGgwKBcKaPRj2FxJKVJUm8kMRBiuw5SKkmomZhRQFrRu4e54w1CpgtHHNWRpFdtqDA",
  "key21": "2Sbj6EThHXfZzVSXHfmmAvjjP6SBzswMHpGW8y6HEU2LdDaLWj8cGzwBe1D3n4jhvofyrs5vbLUdA5b3yRe2K2Nx",
  "key22": "4N3MynTWb2Wk49Qu3XWknA1ud9krzwVsjya7TXM3LqsCRik1z9DUMDqyePdzqtQYHebUr7Yt1QEjobSh4b1p6GHX",
  "key23": "3Yo5F8Frhdp8RzJVL9M5QLcibYPTYnKnvRpmcgfjYpJF8b5AS23uZSgy3Shki78gr1KoknK53qBk2ft4GZJzAQGM",
  "key24": "5Xnk1fE26bvKs7wVXvgpqKJZhqZYgHHe5KqhiQUY6LNnNG9Y5JZbXr5nnWe1Em53u57BbVUgjJ9HzkuHty4pajYQ",
  "key25": "5fjYZiXnnDHVAUBonHLVUWcirWBJgJ8rMBMtTTCKVwuH4smjGV1dipv2AnMhUT8zy3fGLaVocT6kMLFzaE3MN67B",
  "key26": "4DZy7iHAonBAFQbRLw42fKz45FDcC8d7W3hLmQ3ZoJzFvixeExrHoEWGb4cEfZVQkwqgvH3kd1ZBEUyj9cD9V12R",
  "key27": "3XRHaVS8WMgKLCEi12ksurtMEpdnHZYHeNNRSqs8dGg5EWtteMFNktfb6mqSJS5owJa3MKhR3EdR97wvCwwWkM5a",
  "key28": "fGKWPxayDq6GkgCG74QZtLQX24uscivWHPW52Poe17n5cn7xDMuZKjZ9xk1oSEqhVH2eMr5k6YrhnpKkciVQiX9",
  "key29": "JJpf6q58Ac72YyC4FmLk3XEURb8DrLtbfan14RNYJUKHziGD9fDUBZ45BHURrKfZd27fjMkgP2nK1qcNyJTeiPX",
  "key30": "47LgLF7AZ9PSFWsxMdZ6A2qPCHqLXKVQydsSKw1oagjVveiyTRbEn2utCmtjVrGXBV5CHZv19YvmZcWBDPq2XJ8C",
  "key31": "5dNu6nkQRUxmsp2zw4Hf3KtBkuFieBw5n7ebrSLe7C29ktqHGy2ECFE4pGymvhCuTdvoaQymeL78ByXkr2GoirbL",
  "key32": "3nVQkxoNcrydX6iu1GshZYyZuh2hw4XZQ2vb5uNc3KTqcxjTXVskAcFUuJwq5CxCqa2rnTTVXV7WuFdgLEd86eRU",
  "key33": "4XFtJaRCg2ETtmEEav57ymxZPPX3rJXv4mMVACety5Hc5Y2Fknh3XjroKajY5WiFDV8wRfgkSwzR9j7xbFWyN3bs",
  "key34": "2kuBJ42ATroe5Br8AbXxLiZGQSPvyP4jzHcZ8uujDzZMihkJ8aju27AuGDp6A7CGzTx1DNajHzD5ddzGQzwt8csJ",
  "key35": "4NmovbBrot2twk5ZESudJzDMq8oqF13uvBQH95XvwfcqU2humnM9R4mQqSDxSKEWGFX6HJ18Gvqw2Ryf6Ni6Zxtz",
  "key36": "39i21oaU9yBWHfNUx11NqVu36kT7MbA7Bitwy6dvY7w3NkA2j795Ck5EYJhPe3UtURsrAy9atguuw8KaMY9c6mAS",
  "key37": "4bAEswwdRgfEv9NTE8mBsRCmDWSovfiZvM9be8UKxuxVgunzsJWxyscuuMd5yCYBE9jQLEDJcmucBeVmCcaTJiEn",
  "key38": "4oW4BoU6V99BWraXD78KqeAnRo51HYqsyipq5bk2xR9W9Cse9XdPEVeAFBovR77mCJkhfZpdKnc4MDynHEDHaw8h",
  "key39": "4DKF1f86KpuJk4pyezdfQ7KHV7js8z9zB1x3FznWUfQsjnCyCoFqo3WgbHb3nzS2ieu7TWwC86pkagDYZJR1mPcT",
  "key40": "3aEMktMBHdk75dCgyCrp2UnPTrT1wwEa4dgzavBf8K8Kr7DyZbLS4r5pAeZ39g5dpX2SobYfBmiMru13tw2N9joY",
  "key41": "yRD1srkKu1mpxEBDpSpgcjZGpkeGY9vEyMdp3nxf455Tz7aFG5fvF5YeEh9rSP6S7wYu3S9yUrwZdoqb9E4AvQL",
  "key42": "3KCp8uBspbNsn1uMTumPxS7Uy3qka1v8EaqhizjNj5M2gDtB3eRZNgasWSkoVmAybHqxuoThnsqpJS7q8KMzJRvx",
  "key43": "3eepojqDza2XkU3ekdi6oc63c7VNRG4gVtvDRahYonGNPGn63miEumQ2DusWX8SL1vbpwocAiUBUaJEkKfxK1ZRH",
  "key44": "5asD3RWpNsJEukx5KQkY7oc1NcEuTi8hbrHhxWigpagBY4XS6crSYW7f5F9ccm91SiJshXbvfw82H3hDGGz4k9Rx"
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

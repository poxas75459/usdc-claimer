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
    "5Cxep1VV7uPS5ouGVKMyRsFnJytFbmgN2hwRfmdDZNBMdk33XdnA7LFsaF74V3wUNkYdyk2Ye33TPjo8iA8EbB6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mT74FVvzpNiMJgUiosTJU8xnGD6jiYHnNfxcUWwbzzKxHfQx5Yfd2uHpC5sCde5zzRjzbDj6aqLJwpo8QCSm8fh",
  "key1": "yxrN8o9Q44mczG9V58c3K6AKcU1Lf1qK3H29rNo4ouDi3qvFDqKFfxrTyNT3RUtJa2EorZcrAZSGwowynqMNSCw",
  "key2": "5ZqEM3iBxcQFsJpYqc2zj3bhGBJqmaTxZEzStz1xRN4Rtz4d5FAX3ixDsvrGewknwuhNjA6GHy5g3jocEARNKArz",
  "key3": "4VecPcxBh2fvtv8PAS6FuHQjL3UQ257gHrzjJRkDjBgZ9er2Q1kFQTkJWQNE66r8ip2ngesxHSc2qie2SsfsGhb5",
  "key4": "3oDNNqFhCboabPW6r3JDxkgEHwXRxxdqKqfB43KGsPndEEeUPHgJRVoYUEsA1pu22fGW71FbCJBQ3NiPNPeicVzQ",
  "key5": "63Pqaz3QsXLSNMi5wSTtV2C2DDh6h8WwVNta86QBRnyDa4CBaZScSunP81iDyyniPRiUt8Cdir1rLwqpGb1T1179",
  "key6": "54VD1tqb8EouUarcfYSxFEtpv61bsUSB5sW2i9r2UEDmYpnmKiT2FiBz4hCdJWHD4EhvLNNRGBQ2fiMmTwHbr18A",
  "key7": "2Ecs7dtxab4NpAiNhUEjUJwEKfZJFTWpnm7whrbYACT7nvVFxowR2byaB25y9sHwaXQabd4c8crGcwA3hGTfGbh7",
  "key8": "Tt6z5zuuowGVKyPNnfp9dx7bBHFs6crjGjTFVzhgveYuXVXeTgG1Fo5UbrBnKjzR7EjZR1PdQw1iDXqdQhAKMjv",
  "key9": "3BZzoga8vmhAWLRmHFR4aKJqd7ZvfPaA2jvnUVz8ZKpMvMrrbjqs5DYrQAw7Az8DzrsAuUmfGWvqt3kzYtR8uvEb",
  "key10": "5KtN5UKGTJCXzV7onnTotG3Dkj5mVwQo7KAqGGFHf87szbh3FRnPpFgSbEx6mVbDFhjeU5t3PGNSNNexYLjkKhHQ",
  "key11": "4CY4k8bsZSWaHD8XP48P65s6PnyiUxnE7fFFF2nQNJX3xr1UWsei46w4G8aNAqzKkaZLVNnp5o5QKB49disyNyX2",
  "key12": "4G9pJSAwLZyaqSeVAxD3Xc8ZCTorL33cR9pHVN7hQHkKoeKpXhtVh98ZMCnFzfF95STo228yZEiLBDAj1a3U5Jrs",
  "key13": "3R93wc9UaELU4SaFQ6Mv3CqTGSBY5NhJCxxbsXqTtgu3rYpZHuwTe2csHAoK268axixSKPR5Moid7UWWVPzeVDQa",
  "key14": "LWwV9NfBSHVorB2nedQ7zpC3jtxkYmW8qdtcWJtmsuT2dyumBW8PbPaWjNoWqQAXiSzUgfXEj3CBU1sho4AgrbN",
  "key15": "4dxFxEDZNz3zasSpa8VFpJt3v6GJgpwaTrHN5GkvdcgcFxjjsVMD1wikVGSm5pRWYxfpMgEB2CYkBYBesyQAGHmR",
  "key16": "41kwsc9uMYwtkvL2aqTidT4Fa95rAUJT1xPrVW52f9NJ6BwmKHnfqiCiWwUfEjFjXXLyd7b7PSdxSTWeFsQ6dTPN",
  "key17": "4XA9EH8LWFFifvrKXumsDY3Zt5naxjndxkYMFKjgZtu1PyWdWpZ9UoenCK3aU2qARQX23G4UWugtdHr9VearYPaU",
  "key18": "2onqo2ZvysHPQ43DQougkNWMh123ctJ1ATnU1DKThwAqqER9BVMWmXFWDDg6aBy8W5gzqqB25VPWXWkoDHPpxVBR",
  "key19": "5iJfv8vsaGSuPdnsRbzjLbeaYTx3RHYu5zCA7inG3MRRQbXhDipnqpoq4uA8wVQZSqDM9sNEshgthjHuXYNpgJ4S",
  "key20": "2viFwQxMzCFDX7Pb8bTEXzUauz9CeTu8iSmxuBSQAQY6zEBbHMfmU6sTTikQ3wTMCGiJRU43pfEyJG8cGgGGZjpJ",
  "key21": "4hzW5FfAydkGwGRVJ5rAJpcofQPuGvsWQryzGKX5eoq29fhz4rxw4BNNtF1Avw52zy2nXigeUSyuLhJ6jCZ6oU69",
  "key22": "4AVLs2uUX5zCwAotnqdBBrn2F8UfQ5a6xH64Ui5ZAGLMpwkP25Qs3v4hseAKd2ndXCQeaFniMyK1yLJ3VAXJPSmG",
  "key23": "FJcja5Qpm9C3NBCV7Hxk3dDUtVxDWBQTgHKbJrMQbgTvDyqy4Vv3T88e2HYDutp21aB88ibasjeWR4ZPC79dUf7",
  "key24": "4kTnH7Y2rwdEz9DJU2sHkxB5VjjvENwFhmoTphGveXSWvvZ17i96PUiBAo3B8aQtMsTQ4g46CjQzJBK5YcGADMiY",
  "key25": "BDUJWPbypNssya1arC7fUpsPNep4eRXxQ1D2qT6Lo1haf2jzJmcynko1swxCNV9KTpfapDgsRaV7B4c1uxvz3k6",
  "key26": "3BHUK5dyAUrCjLVmJhwwY5ABMdbW2yPcnZoxPpk3pdJXwXorM6Guj3WAd92QpGhVUNz34QXZ4gYcC6tJDaLU5uP3",
  "key27": "67qWFnUgj1VkYNS3va9aCv59UQR3JXeRL8qj4XSRPJbgkpPoUfRnGVc8xf6mV5CRQTQzNH9VzLAaELFfKtqRJhnk",
  "key28": "677Ms6cujRVv8eEiWMLnQgcYGfg1TTmi25BbHbkrYHy2msbNbUr1UuxVMCWcAMK13hZBDaDrozvUN3DRGasxtoSf",
  "key29": "3byKnQ6SFWiFS719y8se7feGpyjqu6PW1S4LSmKqS5xtrKpBXzTaSyfyrDGZNaMqm6jLvn6cMDgTXPC4gtQix7xT",
  "key30": "3BWsL7jv1mCHkDMvXNr6nGCCVmW8xaEEo1sDmewH6DaKtMFvRma7XrDGY5T3Hg4v6JsAdG7dPtMU45LYps2mqpCP",
  "key31": "4TPa7GDq4rDYBE7Bku7c6ZnxZ4zunPSV1dyQnneqCnMBhQ2ghMBU73WMbWy7b3hFbKEFoe6F7gfnG3rgZPzmxJat",
  "key32": "3urU2fmfBXJqaZpzch6CDcGFH5jVZpwvy4u5V6QZcwGwbA1jU1JGYvMt4Y6zzmtZw6KNN55RJZdmu5F9Bg1FYiec",
  "key33": "5YiSmFQq9Wh7Vw7viWznVdCtUF2zaYVtJ3dyV2v39ganZrsMj7nrr3dxXc7zZApqpiZaGRqon88MGLVyrjFEXGr3",
  "key34": "2KsL4MefUaxFXxdbnoUoNAXboXiD6rVp2zKAhiYYHt8KB9fbALL3eyKRvcTEqEdRwg324nY78HBPkN1oe7ZnsBaX",
  "key35": "BKfNAPHLtN7eCT47K6XELkVHBv6oNN9bJEoEjm9UuxAmavH5fa5tGqhcmY5Fe9mEFJCpQUQQMRgQdosXgCwz6nX",
  "key36": "3kafENvepcqA6yURd7EoyZCRRxbZkMsfmQUkQowBunxgPBiHLBJj4ok3gJtJzTXFgiS3MqJJcbQTynehY7ve7VTm",
  "key37": "3ziaMM4CA1uKiB4StfANq7n725NjnUSJG1ANY8EsRgK5Mt44nm2EH998yEemsUHxeR7YvpPwYphz7ty2uiaqRjJW"
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

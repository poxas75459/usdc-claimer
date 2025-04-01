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
    "5xwxTtEWhAk2q8nXU2frLmQ4kkDc9XqdrruDv4fjuP3k9Mewb9TqYPuvNuXYmdfnKkDyzUGAiVgqnNwgxZfruaY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMrshePWRYwTmGZbHgyAEFwgJ1aYmzcF8EXEomBf682bDAkg9DvRFGJvFfbiUhueMfub8C3RLpMKv1Hb6n4CfQp",
  "key1": "4Uzwput6xFihFkfoX5NWMdAD4QbVgZjiZAwoRxXh1GuukNMy3mVkrqnqXw2SpzU7fDCFwXwzmuwnJ75NB3EKv6LH",
  "key2": "3ieUeaAThVCBmvKRRc8qVZgKuvRSvJ5jPuYVLGzZQRRmufhGu1PnXi73FCV7hACzBSizZCzAvLLfg1FxSjyutNDX",
  "key3": "3RAk9qmAFwmxzHgjBW11BYPJuAjVBVQJJZ2gjYr6k7rjKwgDZiRCZBYHNJtByANzbKv4RoFkp1MrUEHn737BsxfX",
  "key4": "4afxZDt2T7p4H1rPvzLVR22cPx5PmcszqjbnRKL7BQ1kb1qF3qZXqDeT8mDvDEDGjokeaRkTpxg8E4PLFgYiFw6s",
  "key5": "2gEgoeEX2Vt3AziNYd84byWpbBtAS9qTvCEgJmkJYdCXrgDAKJzpe7NV3iECLnRHCnkwtrepc8qTm3KBVDwGojQx",
  "key6": "4zPPEUuqikX32q2CbfHuN3UDLgeLyfWas6nGhEF59jz1dQdR7waQZrQ15ve9p1h4hbihBrYcXRfrbnkVa3iak4CR",
  "key7": "52gnVspVbsQgDaeJ3ySf3saeUzxA4XPHE8ysrqf3NbNkSndnQHfb6x5XmwThFNab4eH7r5Wkg1m6AeMNyBRLQL5o",
  "key8": "4vPeq6ySd3qXnjqjDd4KhAGpa4WeVczkLKKX77ks3H8RRX4xxTyoYVVEbKPbrnzF2Z6svVeCB6WftL6EAHTRW7uT",
  "key9": "4wo8MSYwxWe9GPXg3hW9DJSHscPFZNVVHRzMJxtKNfxLMfERT5MMaGxe58nQ9nUv1DR4HV1SoY198yRnppyP1TrT",
  "key10": "5JngX7Pxbgk3VQWaenFUAtBoK9N76qkbgrGu2imKwXp2qWu24qsJE5XoYfHgkLV9GimwLnLYtCx15zUUSR6h9XCL",
  "key11": "3R8CvMu7EqChjrVxenjMq9n3yHhAiYQZNoHjGZ3NVAorELFi4bDijCU3sVekio1RuMhAuehhQYtaRfWnJQWPtxeY",
  "key12": "QCsn5NNiyYCq2xCt5xqnKUz33LYt4aSrjfxeTT55tu5FjTDmDxeUAUZsdTAPqKgN3GxSAxFje1FLyX2ybAXQXUb",
  "key13": "3RmxxEcRR4AkW29syS4VMJPoNWetZhWJ36AsmcnreK4ioPAcfAmsJQyqoiV3NDX8bG5A2WYayCXxf35hvTcKFMRA",
  "key14": "2xAhPCzFjvuMbLMSuMQBtMEhwyCsdFJbLNucSVat13mb86sZbatKs4B2JXyW6s2TywV4RGsseYrUqn1g9wKAgEZS",
  "key15": "3ckJxEw79dwyjPdKJQV1Gde5P1bXCgKPoZCuxZa6Qdedp84im5ykdXnuzy9yp7WPaxHY73HoeCXmhprw8X5RoBqt",
  "key16": "5PggKWSbFcmLWAuatxWh6rFPtvSryHrX5o9vv8K8MzYE5ueDNJbcV14NZwVMnCpS7fwkk4E94ufgHBRETEEqyiMF",
  "key17": "2dAzq4uY6mpjFK3AyK5mqtb1V4HmuLxQgt56Tc8pYy6dur6jHyXw1Em4mfAAUYZAkpt17e9RVHBeA3Yu9Dxg6gvo",
  "key18": "5Zvm3ikqrUxbDj2cXS9KYYchg6TJzxqoYi5y4p87pAXJpzf8kTazsST3qgCcgzuPdVMWcqpkcm33iBzcz3RZ9Shw",
  "key19": "33co1vNKWFUEAt1eM4yXLaJyjXov3xGW6fXBTFRaHE8ZzYBDEeGmLNt6s4GP17HYFpnFb6mGCEoSnupZpLQdaG9Y",
  "key20": "kkx8njPoy8eXhdUXZRdpFo3tUYdGEkim2gN2G5QSmh5rrRNxJtNVv3b316rjD2hzaf11zXWTt9oxJmRgrmntEmC",
  "key21": "5s2eCn3b6hVBca41B3fqXKzxP7j89CNysrJQo7NeBgyZ9Wq4x2euXcqqAdgTeQHMufnADaX4uxtpJU1bACWHHFYd",
  "key22": "3LWGHvoiAszqti1kjKeAeGpvmzKwtrPrqT8T5WJXN6Wco9Y7YD7Cy3YvZD3phBwuRZVYAoGpsBFSJURDdxm4mKVb",
  "key23": "3NjsZAX8AA9ymMfvTpsbSyXpSpZ1VT8vRTmhwfRLCu7wvw2UFtkNKdVdTDZAZsi4LQ5sheRoSSZvscc99ZrLQ5nN",
  "key24": "4ztgstbVTsiCoB92Ye5ywjJcHp9dW5zQ4foYYaW7UDuXpwr9igicqZo7cGBNXr9q1cRBpiM1xNCxzdTUHrt9pqeR",
  "key25": "2VjaiaxVtoxf5mLVM94Zr8hS13XKVdox7JSrUs83E5NWshPpgDF6nK3A48SsSVsUhjgU4PWZVyohK1xeMkumf14c",
  "key26": "3Hi4Ag4xw2vZ36abJkmw8isLUrCaCpS1FMkDogKgiwVcmrTVhCLxseur5pUjGYkAYKMyFRh7yEa9aimU8hnqKivX",
  "key27": "4nHHYXP56xg58UVgovMM5LGRUmLmEkk2pB6zKNLJneFHeHu7kwpzKL7NY9rN6VFmxhXGButX9ANBGfNciZHGyxKz",
  "key28": "5GbDuKnge4GGooZZWs9aKCRRL2F5aqPfFUaQZfXsyHCTDCQZx89R7y2Zi5WmuTA4RfXokbc7PrSLZMeUNZe8AKL2",
  "key29": "5UjrSQhuXfMLpvVL85mnKc8zraR4SmKY7EBuarLErgkjQJsCW8CWb64vbNb9dLwG58qN42gdaSh5BJfwTUfxwfhD",
  "key30": "3sqqbeN2rc6cxuvemvhdBMjmj5MYEGBt22pkKQqkPS11tmGt8Lrg8JcKo3abcF3USwcX64XJbdYEJCyUzQreL2KU",
  "key31": "4sYK1cpzkgTKJYX9NEuAuQFjd53tEtAq3SKht1hjV7rnSY87NS1cgF8jAy7snEbjjWjdnanyNTgbXPy39nHtaakn",
  "key32": "2EGgYM45VFvM31pv5Fg75cSGRyBWyMPqm12LQ8LaWfrbs2p1Q8invDH86tLHUnC6mkjAmEATJm198i4vU6vB9hFt",
  "key33": "5ctFZF18AEa4aQt1obf6dftERjAkgqZCzRMEVNfREXdoZ1xLcsASt68snxEcPmLfZaKXFDBZgDPz139nNQyR8oWC",
  "key34": "74PX3CPHnXZLh65zeJbgo8e1vJgKn7AHVoqhNJDzv1Rse6f7WCZJVnKktNtuBs33Ky3tvgDXvQaMNozvgr8pYiB",
  "key35": "8QUmE66NvZ1pNtbfDwfFoK3s6ZAwjA3KsHwdkUFqjZMMRsYyK31jqp9kASaBBNzyTWbszs3DEtKg6Z8HcJ4b41T",
  "key36": "2VbccqGddzd3wfj2J7VoxfJ4Hfqw9q5fiJ5DmM3eZ5PMorgwWsRZD4vrx7REjQq5yQ5p1WTQrbk5BH89XkSCwyU9",
  "key37": "4FjyRsrNx3unb95WUcVtvKZG6h3zMjfF4nF8MLfuyEP1RY2xnEwA7RUbPELY2t47JAhJb4f4e1AvZmbdVrV29QUA",
  "key38": "2EKuBXdfuiBr4SAQV5Me6T8z9xsk4VuGNZzxSWABnoGSEbbNZst8xvaF2sui2SNW6TZuC9i9tqbTtwu6XTaz62eY",
  "key39": "4UqUQKo6b1nmE32RmNZosZd5zxk3Hdwi7kypKmZe2BRV16zRAWJ1mWN3X4U3Y7Riym3WetRKkUNfC88pnWZ5m3hL",
  "key40": "2HKkasiJk7vrRR3m7tykPQfVeJCuQjNrdAM7uq9oaM3b5XMEsVWnu99qArgb6yDigKz7YBXjni3MZt9FfDQtKYi5",
  "key41": "3i3F9AfArC1DoCSaQVFRoJAjA2HAtqEUDzUisHsE9qWbt72M1nHETjGjG8LXFhJsS4iqLqHH9yVbYbSkW5AE56b",
  "key42": "2P5JcGy2sauieEYtbMfWFr6T7huNfvy5BKgiBU7UoMUiwB9qNAQczr8akfMdnWjphwr8EX5bepfdGkCTrfSL9CHu",
  "key43": "3jgXFHTrAbm2wJVtVkD76jBSo1FNQAQ5GhW4BVif665zupmk6u1HmrFvamCNjUA3762YfBeuqQYVcpQMEFUf2nH5",
  "key44": "5iDGx1o3jbPLoPDmCg9YysJUiK22Psbwt5yqzQA12rDNEPUVi1euQGBA9UV6nFZ7mSYgQYcDgxsaGmMu7odZPbp2",
  "key45": "9S49WSZJQqi8vXCuyzbgi2hppkrwv9eoyB1dFugKRMjpQRfC984Q39MkwkD6YEVyh9K9Gxmt4WsSihBA3uWZ7oD",
  "key46": "ruTPaTfx6NRfcWR7DJ81tyNLy1Qvg47TXPdyi9RZDejDTyjcWyhjD529Nf5hhmGaunfMJg8jveKe71wdZjCAjBP",
  "key47": "2KozfA4Eu99WPPQiWa9piEWjcizPEccj8us1MbsnDk53dvYSASKPHbXs15AmYRG7Ue6aRPPgz5PH9eGxgppmSj3a"
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

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
    "2LwKSi1wrJrv1Tg7sHtsA4r7gwJWmK7CuG4u3Yjf5Risgi6JTdEFhpDuNwQiddBmbEJeSDwPQMs8X1otgzGRsTPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xGRDDfFNxJZktT8GDd77M9kzhHosZhKnwxfuQaMnyj5mSffgy2JtDT2qBhi2t85t7eLgQiAfJdL2ZtbALbC5fcm",
  "key1": "2fUzKneXk8xdGi5mP7oP37eMu1BXqRYvh1ygVtzUUanKuP4P972zYFS1xDgryEmCUvqzS3jFASheJ2DWMU1MZCw",
  "key2": "5USeLDrcqrFQLK5RGyxxF3rVfXcu4Tqfn6mn3h76uD1gontrGHWzYDBEnYBwF9PHTEcyCbJprz9fawBaLcVEoV8W",
  "key3": "XRmcAHxdNVByMupijiLDSf1VYGoCLZXyefSqjjWqjdrm4YyHDXnqFo1cmj3NLWbCrvb3GHy9vj1jYknhiTNPytj",
  "key4": "u2KzpcVTJkRkWLAi967Re1HfSPcD9k3GELsKknBw6fxiHTAysUApUTNoaVQ6PGcN7RRSjYc4acvgFm7TAaxQV9s",
  "key5": "2Zz8nSoUNWaKRv7jgr2MqhQNQCRaLTjAQea2uVyRF2xNZXTJGRu35mCcXEAnivcj3DL9WMyGUbVP6jYw1uwHCZtt",
  "key6": "4wV1XJUVnueBPYhwF8kgdVgSPb4AyjnhPE75tX3mRvDjMK1hGJgiwDzir5HqMNKCuLFYg9kTi6Uziu6UVpb2YPKT",
  "key7": "2EvUu4KLQnbYpb1qQT3BVctacj3XWupNsBq5EJ6MMn6KHtPKAzJ5A3UstpZh4v7HHrgFS64BpZ57F5RRbGhoWsMq",
  "key8": "4DVmEBtYxMXSTBGsKQZdAeALphNcUPqayMnuHGkQW1GGDuMeviz5ssi9cCwSSu6JD7QGG3EJdnCnZT6xgYrFCyL1",
  "key9": "2KRKeJ1MyXrHzKVN2WmvWuW5xnVM77AFWQfqTa64uiGLtCQkYzEHdThvEdYKTRRxHGARaQ9VpYuejXavKMXhBbf9",
  "key10": "466r5tp9M3WHsmv5V9TW5TsQXEs5hj4k3ieSdsuzvA3HQ83wXVJQmZV9NyzvF9MG99RhHrTsnWircKuw9hCUBEhe",
  "key11": "edH862gaH2Re6CMQPMJQtMZFQ5RN6W9HufYuaYMeoRRdDQkMrQX9NLv22pz6DJSqrj4VegMKyd5tSTt66cWH71Q",
  "key12": "3S1TQtny61yiMTxmiczMqMQJshMCwvSNYVdrYkP4LGJPkv6o4R4Q3u9NSs8MdnBBFEAsQ59bkquJ87dJCWQBwQpU",
  "key13": "2UDqo3bmysq9Mmc4T5Ytbd6iuWHJDUoAdFeudgawFwCnfNQGNMSroPo4w6y4AiYmzu6skDiq1tYi7E3wFXPjRJye",
  "key14": "3oCumL6uUeFMMmQs8BnmKxV5dZMXVW9sAwptHSAmb7Lkfzt98SYUHgHQWqtYYaoumnjRnHvS9ePdBF5tLhu79Ay5",
  "key15": "2JtyhfQJjsB2VPtAoeMWNBPxX5yCpcUWTkuCgMVCQ3kQQe4aQGg3moveR8zBjetNXDCGG9b2PB1UV4Lp7YdCWx1f",
  "key16": "4jJEn8AD5jNbCzQYAtazfEDwnJqykCkhBzWPRSx3YmVWVWByZqqAY1cHP5TL2QpgYFdfTrHwemPgemX2KtJedEU8",
  "key17": "s6PiKrfECTAootyjxWG9xErDg46AyApowRWLFGQFGBJALM8ajM2SMBqGaQt6fXn4PoK99xFubyZyMYyCY9rhLDk",
  "key18": "3EQ8qa8BNcgMrJdYSNyhNLvrjVoQGkBvkkZDbCVr6XFxiCahPAapBApKW7ynn5D8ehzhqrjngNLWKtV2JxxQLxjV",
  "key19": "4gVvtutkFmJ474NhSiGXq5sM7e8LBjxQbfPdbuGMQpoGaitCRXiMzHDKN3HvuaPtUi6bRMtNtkcRRrRH73U35ot6",
  "key20": "2QRQN7MnixVVDzAxSkZvKUgmjnpRVC4g4brDX8dYwX6pMUvbyDp8HD4x2P7c1uTZWiWizTBHkAVabcRZZxqLk9sY",
  "key21": "27bLADh7ud6M81oghdt9cqcqtbBVA5Q9TywR5n8KcoPoKpU8w42oyDA25sVFXSGNwPXFJQyhRVMcdP3yn1vMRWjL",
  "key22": "UYm8ETwiCkmtt4DevQmhpNSWWLNt55hAfzg6bRLrZYTusRNRrc3VqPh6qzvr64BDUR9SsTEinZbz2jLfv6B6vVL",
  "key23": "615DPi4uoX3yjff9NQGrH4pg32CFuKcrvJff66esehVaSVLpgbmEWhF7gh84H6ezRCqhhcGhB8mXMNC4UcE2uFRo",
  "key24": "4r4F679Tr3j87iV4acraykDjbfFprv5azhqFrmVhyucga8X1Cu37fcuhBSwt93Rse9neJXA75Vk5EpNiu4mD63oM",
  "key25": "4mMr41NcY3ADdSiQPaH9DsF7ko8C8hGuASBfGW2CzEhB1fxNDmYsLyyJVkH46ZLTsUo3J4p5MSNhENZRfoJr7HvL",
  "key26": "w9gLPqVMNCaUGMS3rHkVtF2SPmC5EJNR5Rrhog6oHZbFmbxTSgUThW2hXEqtuyrMQ1m1CDcFAvmtxtniWvRGoB1",
  "key27": "3EwKic4ocDAQFEUCq7FLGfbyNuGsef77Pm8Ce2ZPs2ysRBVChcyJS5M1HD9J7psY76dnJmgrXGPdKu6244eaUPXX",
  "key28": "21MSu8E2sJmdNaa1M3HBDQgGtbX7u4HKo4wnqyjChw1JQd8b3bpwfCtqUkDMP5vXJRFQBcTWe7x7A6Dk87eAG88s",
  "key29": "477oRMYGbJJw1oWYvraCZFesGJeuAkUFczWXob8D9omWz5byCKcanoaqLkUKCNdJUC67BtsYsH4FykJaqDmEm4gK",
  "key30": "589k3QrwRYU4joh52WCQZa38s9Ywh8cQAaucTiDsJSMHBk3d3RbfM86ycZn7uoka4DiDzgPKRz5UsPR29TLcZDEQ",
  "key31": "5mhCFPKvkyb83QQG2ecDodEQQBXWxTVpRezD1m8CHqb5pR5DZ5jErwogj8PHVXZjh5gyfRDZh9qcsiyPGmZZpFcr",
  "key32": "3coT5x5rLZqc2yP5PhvRz4uLCpJppXr8JbDY81cSC3d9Ni9PbdsZpjt1NybH76megmmQgAPXJWNGVxBboWEkTe5w",
  "key33": "2xjT6ewapTgrvLSJwjJXhpxXkJgSUWotCbaobZVJfidW4hYPx9mWyAaWAnpMMRzL4aw5Xezey9rzBoFSe4zV55gp",
  "key34": "2LjgwTJorh4HJ9NQ9Q4PJGBKWpzGM82Q2BfULhdTnoA3ffRwp1JDcKHj8BXVrfwHJpMNbgek2MnFrwX9DHJR3xFQ",
  "key35": "2Jo9wZQk6ztSgPP7eWtcdiYAhjJsEjcehQ72RRLMUypVvquHJamDrXhKvyFj6TLb5Pj2R12kaRK61Kfn64WewMQs",
  "key36": "58hVXgyThZMR8teMQpDPcQYBdLTUcPNdLY8wnBfEFApKAzL8wofLLzGS3Wh9JTRV957CTNETC4ru41KcmSMri9mz",
  "key37": "38qF7ExQGTjr2MXRgwaVLzrQvxSWQjowVxKRXUazRDweazmYYZVhFufu9dVgUG81PdHt8tYojgjJiAbvdcknU2dz",
  "key38": "vZcmcTDwKmhGTXtZJdvqSHcCAA7pojT59RARm5meYLcDDpFMu7zPUJWvxJVWfUjjQS7JfCZLayRD8jUt5KoWxYY",
  "key39": "3vSXJcUrGXHMRP8VZ79i3km1GaLrttD3WRzn2nNpLESVnEqF7vW9GmzYRXNX3wAuxpSVgM57jHhfrDXqc1u34VLG",
  "key40": "4L14HNWUBT6sCvAR6EdXBecZwvQsbEgsDuajEo7e39NDRRkmQDeMvYJiHUjSC9pd86SENZkXZC95U2XwBXPgRiqC",
  "key41": "zG2eBtd7UzC4Ucf2Z2Fet1dAtLebpn47TDks7TTt13uVNn6QE6g8SoLSMFYLUQqDmKCm3T3FoRKEiTjkK5m1Sx2",
  "key42": "2wPgGXs3fC32W9oFt2iraXWS2GBrzNNS1zj7rou8Ux9CbqyjvwFUePYyMX3hd4sk1Yua4H25MtFtGMPCcVLBu2T7",
  "key43": "5K8Hg2UNUwAEREVb9uEK6AHhanZGcVzGHFxMVGLvjhzhrVCzpWCkMJLX9BAKmAZ6uZAndjBPVgRBKS4W5xRW5fce",
  "key44": "4stuUJRNWvx19QWBbTDHkuAsHM7RerHhKbW3JwmDxLbkqS8Ygobzhc8huHWrpVwDucqS6NvojR7bL3SukybB7UA5",
  "key45": "3ehk4fco9Zx65eCYi72k5iu9RzT4oQ5cXFKVryZzoU3E84yT5XySf1hCB9JAEdLEs67GKk3uwYuLp2Kuqxqc1Wy7",
  "key46": "5q69btzN6jCm6nxmAkpyxws4zLJR3VLyAmKow2qsTRXFxH9UoAoPq4i8GgmYpL4SdNpxmJ8sGbz9pMGuJtqDVHjM"
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

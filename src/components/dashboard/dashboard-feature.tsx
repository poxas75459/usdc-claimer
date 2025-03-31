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
    "2tL3DrfBfhqSaBPiGE54LmZbAAK1q2yUCTvyy2dBjAcc43jnhLAjNuvwH98zQhxj1n9122Bhx1LierhEgv76SgSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "557ENaSQfrC8Bz3fsFeZMFQYi8CmnMdUxg7F3SQkvALe5SyiksvG4gvzcYQPDgeaD97y87t9bKntGWB6dvi6mtaT",
  "key1": "3d6fehQEBtSRDhz3yQzZrsTbhhKfd9SLvMF4DZBaC72XGXZyezM61Da8sqVXqm1uvMCMMKjuJSug9EcPfzLYZGb",
  "key2": "4rffFXAAeH6XTtMHjNt2uvdSYbn8u5UdL7SfFL3xk88QzNYL6HTqVdcZSdeqFjweDZ4jkwLXWBHZooyDoZkW31C2",
  "key3": "5HSUTvs88EUnbsJNQEt5EDEvPP5H85Hs9LH3rLAzfc2ZZTVvQugnqo7F1fiVaCPy9H7TKgTLGbaWB6rn8xBUZv6",
  "key4": "3JgQQKyAaB3jrzbj51MoLdJQy8H8Whuk6SAzkndcJRJn8cGh6SrdpiDXLZ6WyDopa1wqmzhptMtf1L2bc4co3pCt",
  "key5": "ZvPw8Qc5dKA7MGTAwNG3VjqfZhWvzJxzPmppBqFLEbVUPFiFxtzQjQPyEEpUq8JMtvw7zwHCzPLknMZitK78QT4",
  "key6": "uXfmjgcogo5zcCgJDTVGUDU3B5QSrPDvBC8vidc6skqDvQ2mPRegsyeApZTXN4FQSbDoxLuEjUJ3YM1H3Ncu8g8",
  "key7": "5egDhG97xkjkgZwNYHeotSdXituZvu38xBLgbwRzowMb6rZtwuHLxdjy5hp3n4XNwsbcF4uJnYs5cYCDRotiW4ag",
  "key8": "59LcEdz1C2UG5VprxjTfGFicEHsGTDiNPBxp9KS2XBhpNGvHcgtQkks9vUY4hxhVtvdCcsggrZrWsDK7PaaiuWU1",
  "key9": "5hBFjeo9A5Gugkv7tVWeMnC681BGnqvzNeK23Ms5NJb95mDtEhcJ7gap2zAGgriJhpKQQCRhdJ3xyZq54CeQnsi2",
  "key10": "yh1AzSs26V1hDScvkhuqdWFVTqpnP7FmUqqPzCZ7vtvmTYkevKEac8Wgx9iuwxwoWcovH1kFVmJda1a4mfFKmRt",
  "key11": "hH9jwPou6ujbL8DLAbGiQ4yZSTSareHAe3x72jbvjZybMMMg7wrvx6bzpxXnyr3w5Bu4NF18y5onvH4NWLk8sJz",
  "key12": "5WurR3LfnW2tGd5ieFoMBRMyP4C9aVVnCEyKsKJn7anJNKEej2G2P3nKDZUrMLWaQrNxmvMmgiMUGeBZY8Dhqi4t",
  "key13": "2mFS5BsL6YQ93UhnuFFFwC3TXciBpjZv2MfdJHcyvi1BrU5DZn9HJR7w9p8wNWhUfkD4xVqp7oUUpRbZxWt7CgKv",
  "key14": "3irRKDYy1Yd6arv7agc7VuP9YzfTSTiZbiGSBMkGQA6V7teRKE8JVKPkR4DWptwEVK6W1wa4HJNovikaCkzPgGhT",
  "key15": "5FZrPy87PtGMaxBweAshJq1RwFGD4UrSHCPLRAzYDtP5DgcRp62knRTCLH5yoPdfbSsEL63aGVUT3JojyS6eZreh",
  "key16": "Vh3ZeeUp24QASZKaELqiLRtm14RP2kcBdrA3gwepz5H7o3AiqW9A6WEZyMT8Xh8f7FMptozoqdpubpvp79Pj3VY",
  "key17": "KqGmpGkKLpaZYEmphWm5c89psqnPiQTHSXidcwuWcafGCwPGhbJv9rykE6QBVF9Udh5wcY58N36JnZBWdXUazDY",
  "key18": "5QAG1ZjB9tTVZvvrwYpienvknHYp78GvmuKPgxUcCGcqR1aXp7oH9FepH9Nf25VLAAZdmDSi816UoHKbyzCj3U5R",
  "key19": "4P3PYSPiX7M2fEnudrFnrZX9zmLJvzPHCrP1YswHXFHMnkS35P6TXwBAQW6H6LERxoSFW3EQ1R78tpEdx6W3Sgte",
  "key20": "dG7R2NoHJgJwC8WKHZePMkoHKkSUtAjjaJwPpe4dM76WhrqARu3AxP5ZwYW4w7hbuKHkEnVahC4DVRHBVvwDLSZ",
  "key21": "518tEz5C5gfqp7S65YpCY6dFyutMmVpaRYtBjtTreN73epNMSfuCNgPCwXzsc2FtibRGL5rzZKc42RT1rgJsTtxA",
  "key22": "3EMT9csH2whtngzy5MtxL6ZR4ED9wNJSfXZ2zuzvmUgjM4EH8x3duRtn3SuovHJFeYFD9dnEkUdu5DmfF2Q1h3HN",
  "key23": "28MDhK5519fcMiMPopi14Ldo46Dk9CXVRShDprRvvh1CaNVtak54WLKko5NAyrVEfTpnbp94z9nETFyTgjMcyJk1",
  "key24": "2cfWTZXmjESsFJRPVpu1SzshzL4tQ9rDybHZg8dvwcHNHudHmrp2rQHdow8mJuUpLtyEKHHWTVy22pMkhJBS89SY",
  "key25": "4kzg86tRoKGEXuBQx7i2z5h4uYZtzzYwK5Wg8Cm7MPutVffNN8La5jYhJKUiYknapMxrvqvp2UQtFNMRL9qmT2aY",
  "key26": "2i31CAMqaZKdx3CaauqJAByyCJ924p7fqhdibA5M7bzmjLRdJieY1CMv1WzV8J8wgtKw3D9FgEkbN7RCvNKdughS",
  "key27": "4oACyUrjmACSFZRVM5N21X2MKuHk786pa1WXhRZYPHna2u19QNds8i9jD7bNgCyR77P2RBTA3sb7UoJUvBhxBor4",
  "key28": "Can3ke4UnG3qLiZbXt68sVefsYNCrJBkdPLZJJ4ZDKTp1k7eF3QYCnFVh4gw46D3gRHVCUxj9EnHEjDmmwEXSYQ",
  "key29": "4R6MfHYxAABVejyvFFLgnKoxmFzWJgv3BPvwJxrgLr2fSfsYA5BfpqmspTQLwypYGrq8sBUztM4PEcZx5F7bHH91",
  "key30": "34d6FSaLgSJrwjkN8tEJVg7SkQwbDboeiC7w67BofFh7KGuZjcPCDF5eoRYFb6wXoBgJWyeCtkUjJo1ZpJ7u4pui",
  "key31": "5iDAmxBUES7MbyBforgRnVmNfTMGPN71MQim59zLwJiTvDjJXfS3XooxadFm6t3ipGKEyNkFx6iqsibAYhCzb1ZC",
  "key32": "2StzaLSEp75VTsq3Z1zhGQWQ1vrscHCjAaBBMQEp1LkUNtkqyoYtAYUVEFWii1smXS4QBf1ked11okZXbRxdDA6b",
  "key33": "27szJJ52q9JsHZWVJqWNDND7UgescqnJVER2E2gJNm2TXHKqChHcbaaByaYaMvfA3gme5euesGCHT6rfyjP95Ne8",
  "key34": "3XRyCHhXyqEhryj5x6ca3tWwMGGXe6uHZuxcE8ajy3etbMqWRysuXAjqCnDjdoyTiZY5Hefzwqj6R7KG5jB6rdRx",
  "key35": "46JV3nYBYPMPkVSsPP86ns9H8s5bD8Lyss1Cqo6rXE8ZAK5TgGahDXyzgcRWUqdLoramuvd45WYut1BxszeHVDsr",
  "key36": "4zv5ZexxwgeQa6tBxZiLak7RfttD1sZQ3c2FJY5Ny3wbpz7JSA6KnY9dXVSAeJxRoVYZ2iyhuZ2HX2iEdoSHtLw5",
  "key37": "6228MTCWtz1LVZqSuGHznNeUpaanAzTh42GSFYyPCEBvAmHNHwWCEVuLp1g34efEN2jD3aqxdAxSXGpFjL53rZEv",
  "key38": "4Jq9i4CXqB7UVCpAjFRKkxrjpGeCm9A4NuQQHrxdTuUJSAHAvg36uaVUuWJKhiWkydqnxjXtpoJD7ETjvaDvtycb",
  "key39": "42RrF5TAQ3Lj2J8gyf5NzX1enrHe295JCh7EhszzURJAcf4Sr2wHHtRrSnZE3AFgveM4cHKwQAWFF3AvdeJLgnJZ",
  "key40": "61VhdCYfwpvKWQ7aGynsAeF6Bkd8frpkkZPAZCiZqn8FVWjVHLeVxCA1kt5VqC3VUpVtjgUmWd24t8cXWxBejLUJ",
  "key41": "3avxEyoYHYLryCuuVb8khaF1ZPDzYZj7twYKx3HGYPHPDYHyprZARTTJE7ySNbUMGXQGJrTALXiytZZ6Z4XAsgV9",
  "key42": "5yFpmAFtD5GvRwEsQtUmA1fThgi3kJAGHVanj7R4St94Hnkope6n8jB2UUdAVaxugWSVqioh1e5zDkhe3RnHyyuq",
  "key43": "4X3q6bfuc7uuWoMNV6gBZHdt6oubhKxHyY68uXhLogBt5QFEsT5BwRjepwAYYaFqRpwqVMaRUhFNErhJ788hNrps"
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

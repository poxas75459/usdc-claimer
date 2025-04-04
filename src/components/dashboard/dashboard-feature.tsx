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
    "5YjX7mBvkNHhc5sfbjMaAQqBR8yD7ajxqtdhug8X7xZ5mpecicwyakT1286rxq3EaXDou37hxS9m9Tm4uU64FB2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FCBhMUQ2gGgUmtjxP1YpNATb7Fk4J1yhX51MMGxjJ1jQrgTHWYEX7pL2paAsCJ9eCP3vA42zrD3EuSspj5TuR3M",
  "key1": "38bakoXzRRDQbFRukwwKv84e9hRtTiYkVv74jgQQ2gQUE5CdJhw7325imU749Pus9tx71UHWNV8CNk6tMWECo4qY",
  "key2": "33qMiL6vzb7DwmXHcxMYL51DsSm5aEhDXWBzQkiVjdbuGVTQv5uRsyhVjwWDdo4mAkDCZ4EjUh9CvTNnigRDuv8v",
  "key3": "Vmia2Yn7QV4zZvGNU3iLN9qWhavQwzqPDtKDRfrRo3HY8HHAQGPZyVoCDizKhx9Lq4GRJ7czcsRDkND4eMXi9q9",
  "key4": "3GSHMx5m6bBpokVDcdkaL66igCTXuyjVfKYMarLg8HqdXZK5gDvDCw1eLKhCwsTFc8AmB4W2bVzcnYDqP5pDFkim",
  "key5": "3vXiYM8ubPoDtLA9Zpep64SqGRyAynEep7qLi2uN7wBU4e9vXzzfgzV8pfS1uJPmb1mGDPjpQrRF1utEe1x8ArEX",
  "key6": "25kyBNcZCiKb1kKKtcSgkoo7awaWSsKm1uYmitehJVr1eWoXkhEQWLxmxVMFkUAgpSAutNCEh2As1G75puotTsRb",
  "key7": "9Mfo6D3NqcLxRp48eJDh1v334pr1rdoPyrsumib28TV57AfW2KLJpvsp4scLGn5FX78K8b8dunD1xVEwajRvny7",
  "key8": "4nLURMhw69eXFmB2Abuf7Hsqh1dMUMoZfJLmg832Q7jCZdEwXikR6RgLuLJs3uD72sqia69xJebuPjFna1hWWMsB",
  "key9": "azokKNyK59ZmQN68F4nAuqq12Py7dam6zpcHDTZPy3GcCKsbw7Jkdfi2a2VGLNVXPfj95r767UKDGU2sjwKddzW",
  "key10": "3oqYvxKRP3iAASErpx3aLoUoEPh44sNNXDUi7CCz6NsQrxyFLAPBt8MMeHyPjL63YVjifQidzhYcZZYvC9o9hLVv",
  "key11": "fTxY1JEcy8UDNsoYnA9h7yfXtvVTDBvwR3Y9mEFAqBczwsQzXihfDvYPHbyMPy5NUQsrD9KrYT4FDhvk2mkWsco",
  "key12": "3dxXp4F3cjpaS3Ldc4eNZmoDwe3xgPKs3GoqHeki7j1tFecj7XtAky245KhxPyFfNcDtEupqUi6U5PMirvJDvD6W",
  "key13": "3CTkxV3mgSgGVqVDoXZTBWjQnXh2NXypPjWRoJwqStfq3BnzNcTU5VaLCAAiwLCC9SEN9wRNaYApseAaV4PbYwAq",
  "key14": "RdvRoiZdTJoKuGZwen3h3Vq6snwj7Tpyno5VGMUnahJ73rvg41RzpfPebFQCvBYHYmZXyfURapMkFcYt28Xi2rE",
  "key15": "3vmLDmcEJjyB8Ny8pCSUf4wVoroCn3szjSApnNAw8wyweFbW78mSTnVBMzMhJW5YbKy1Djz84upcsgt8mFGHcPfp",
  "key16": "4DVzb7THCBLxqXHuUphvPCcxvsYTv7dCLzmfUhWUfrf2hEPRdk5edampSHnRzfFqBZeUZYJ8enrSn2Ji6hmkHCQS",
  "key17": "WUQ74jMdAeL5YuTj7LuLkjyw2GBi4dXcQNSHLW7hYg3g1GwsojRPCXhFi56PY4ap3nzGsftnZZKAuQ9Cc9rLhra",
  "key18": "2vTNc9NsSiZzQxzLT62Y8K2m4xYfq67n5jtetjnMuLFF3FtfG1nacEJ3qUrPcmJo1yGBhcUDqb3dSQxHfjAGZhQY",
  "key19": "2FxxUsAdjK6A2DkByM7hWtLYMDTqxmkttwFaCWFx4eF2tk5ZsL6sMkHbZHKJZHE5wAWAp3Gh5TpX1JJSfnPYURkm",
  "key20": "LDfjLKZxHPhfEjkAfBpbKgjeRsREhk4Kjninww3gTkZwtzDAoriF9mF5EfEtjXaHsxkrU1jm37prtELBfMtng8f",
  "key21": "33Cz1BQMmzgKefQRqnuf58tbfVW4wN2cE12Cwep4wZS5oZmSKxH5RVca6FxMpkxGLBr9NL6hEbxC4Gx3bYTPeyf4",
  "key22": "jAX4GRcNYejXN1uqoxfokyXn2iRswgQSYTYtiXcP9NV3ypBApcJNrkTryu6GzhaZyTM9kcifsZFhjVANHZEBHdB",
  "key23": "4HFwAntux8wXxXwYLaFG1SkfSQNCEvkwAryK5nt6wEdnbNG3TxJqcNtjBgcV8yPwujunGfUGsxRcK55vRujKS7zK",
  "key24": "2bq26mRzc54SMwsC5jxSMhUpcjX4MhmCRuwAcnovLZgLQmMf2hmo3qo5w37fW66tMqAEqTs4EnZwfQYQymfgwyuL",
  "key25": "3ekJW9csxfwyuyymXiBJn6V1JNHp6C7hND33BXM9GskVbeiPhMFXc5GhUMV3UQtMwxU4Huo5MERqDyTTgwhTMZJe",
  "key26": "3jr1wzUSLTcfg1AayAuxj9fUqppxbHcYpJ7yK9tmGpfT5UBQc2YFu1ia8ocgLoVz15d75iCcrCtVEeMxrtbcgcAp",
  "key27": "4mMWCF7g6t2917YKyrAxq9kWNWyu2bH8ExBGkKZNcNAS2WGR6B2A1E2AHov9tKb3nSsSJqAqtQrpEh7kwoppFx2p",
  "key28": "2S7fE736FneVSdR2MngxCxQzq18PZW2FG1WdLJ1FwQ28e2Wa9hEdfJbpuKWpiDxnT7V4vnNPr5TXCCg7x7vWxXKF",
  "key29": "i5RsL1P9Ta95zESfwNpx44z3NFyUSG9reZUMDsQ28PnA7ReuYLv28hRuZELpZcvd2coakg1UEjUaNTMLHvBRE5S",
  "key30": "2TT32McMVFTeAewUoamCeEtggzRtq48RvMA4uBuoAHDs6bcSsMEWwAHNXRzQ7XX553G5a1fqBpZVhw1JHJyFLngr"
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

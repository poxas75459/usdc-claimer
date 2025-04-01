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
    "3i5SeQwwSWnb7qraoK7cgJmQz8WtB9cojR7SnLiLguXWEPNzTSvANJZZNWJVQNNHgFiEFVJ1aKG4f3UPJF1k5tGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aEouaUqSzKjZDC5TxeHqDaha6H5NsTZoedTsGTqoqgteuX8LjfQDJwxmLgM2hzuB726hdspWbeC8Gf62weEqAdd",
  "key1": "NURfub6g2ea79EUyY3Mjd6tTzqtb4dRxK6gf2VdTk9QmZ9tswvaFnBZKwNCHoybFZoGhYCpxbAZwmmCniukZMgH",
  "key2": "2Ax8Nv7njNMj9ayyMzifPekTPc8EN2hQgoJ243towErvHoJCBVqcehGiW5pFQ1W5ehwezth98BvMvwssc9E7RLsd",
  "key3": "4pxsigpXSspqgPuajN22uh48TqVa6rt52R5M1VCK2hmNbQFoA3vneY32NUnkpAaRBv5ULFF7EEtXY9W2ta5mxT5W",
  "key4": "57o7XRN5ar9yaJRagqWXqPYpEj7wyp7gLjH95aCSytoScNs4oZR5rxmcCUYci29puK8Z9PuEg5cAdRNkeWyQc41w",
  "key5": "61vdf8zxbUh8wpHU54AcESPL8reFFBLJGCMrv6U9WaF5LbEu4jwvUFD2LVy9FTRaggGK5DXnfLSGf5pu8X6iNNzT",
  "key6": "21jS8gPiQKDWn2gE9suep65pyJcfLxo1BgGXNK7CXFdpu8DZ41tDRh26WTHxpSSTYeMfb39wtsjB1BGBRDBvHSRF",
  "key7": "29ff7E8GgvjT12RaiNBjhYcr7NPJLKKH2w2j9dperGdT3uE2MG1BjMwx3pyq6VoGKetdNrpQTzxghG9oUurvCnp9",
  "key8": "52g5UNzsDb6t6DtKqNUtYVJTANRw7BBooGhHrVH5hW8guCBShCvy9cCDCMY9tXxQu6RwxLuKWTPABrV2ZYzxfL7J",
  "key9": "3Fw1QWj86zeZMQP561M98jvL6xrS9Fu8KfyNUD6Kv5DibW7Sm6WhFjXQ3PFKg6cRzpxNd7W4yabv1U4TSdSTxV1C",
  "key10": "MQRhgkxvmNmuHRQyRBvuqJmyapkzCJYb8k1cZwfZKKCyW4z372KajKFCYjpdb18dGDnt3SVoodT15JruLbEgMqD",
  "key11": "3jHAMv74MzBECLpSUdtBEDs2797SozAPj8PfJ6HgXawmoCoQoL98jJkL3Y7DHTYMw9QLpPsN8dvSMas6qvNaUtaq",
  "key12": "2oWizF59Micu8mShnu3tCBqoA9hqVuuFYgFtYQtgM8X13poAVPkqDkwB6xagf1B7pYZ3f7SGgV4Jbdc1arLyEr7S",
  "key13": "eyFFsieYFz9HYAjK1skwQgyVBKYuMtiz9zPGQu3iFWvWD37vGc2tDnuejZDZ4UdKQ1SNu6uznGBUpvsYTemaGQs",
  "key14": "2Dr9B6c9msJG7nYYKaio5fgC8LZiXdQ7pcPL59FfM1v3tE8hkq9xfMZP7AMqCLvZGB3BA5J36Dx1Nw19rpHkPmwb",
  "key15": "4E1QgLkBX3yFq9qL1nd6fcw6oVQobKT7g3xFSnygTUsZ7YzKsHjnf5uqnPLLXbPNDoMxby9XQEwhZxsQ64hiMfR8",
  "key16": "43XLW22VQvnbNKCN3w2tXjbK19ZypSFGbogGkbPjJHa9DfGZp6EkpiDdAF45kQehsFjYEHr3fWgQ8SVobcusYyyo",
  "key17": "2Sms17haHQMmRkEdSvMLsBzDve5sYR6DeBxt3qFenuRdFTYi8Qmj9bp88ditPh9u8TrZtw8sBgghXEmG4Upqe2hH",
  "key18": "mdPUKJkwdgZrTRtWGXunV4FMGPtbGkXJMGN9qodExjJisTDhNZbM3aFxtuKtj5RuB43EhHAmCREjpq5cwaS9PqN",
  "key19": "422wFXZzr1FFHuH7SWJDmyfYjMt7eJroyMZ2cFDQuWf1rQP2tkY5YNWQ3XkconYqZdTNBwxW6NR2wMdCdsRTjPk",
  "key20": "533xmmahkZ7Aw4J6NS4DCHMGGuwjgGh7TAG88RwESkn5xJc8VpzoKm2ne8pxAUVykPL4KJiiYeN45KsAvVvrPv4g",
  "key21": "5qzm66QWfE8XYnDREi7HatBs9d9kefzw2mQHqTZ1LtjsrsorWNyZXqoE6PGAj6uyn5BQCZFrq1yiWWCF4UphsyAm",
  "key22": "4Hdqtdj2TBcoMB1JuEbjs4gsN7U2DaHpLSvcEr7FxCH6mAhNfhwzetVaDsNbHSgXTa8sMmX8KNsRd3Ce1rBcpGa5",
  "key23": "3NhdiDRdywa3JvHvPPfV6uz6KzQ7JkMpzg2fCTGWxYHWEVzyWm7M3zmUSnQkoKByK1EaPTV3mjVtFENi1LLboNjK",
  "key24": "4LYjN7yDGXxDn6KuLmV15yozpJAZZ79KX4YnYwtBmGyh8MjHRRyP3rJ9Pb28jgZRHgqVorhPRSQnXGQ5s8zPDf9z",
  "key25": "2dy9HXdv1dxZnvwJ5bg2u8YHahC2tBrwQescM3MvtPPWawXPFyKASpaRm7ztjZxdgAXycaXwZrf3nTujgkRngAbX",
  "key26": "2m2ZunnGQSFaRn36KbzcULMPGVDiSuEUx7nuHDiYg62P8SeA8vRMJfUcPCfLhdjnb6Wbio1qpztPMqHs9iJAcanu",
  "key27": "4LwZMiGcSVaB7E6QKjTFya5orKW7jywFMiUc6q1r3ybCfRVZdmcA3guxEGxU2Ps755EQLux1NPbLJdD1zPZYvqBb",
  "key28": "jDWBxnM87NQbopc32GKax45PQf7J7hvkJ8DBaB8W8b8TN38sTfQMhnF9KnjGVE8qBjz8hgW2n7FgmMfBZ8ovTV7",
  "key29": "2BkHnQtwTwerFiVKysY7uipCgvd364eBHSXMSyTkrKFzW2mMQqxdygdUoxkhhN7whh2P6zTWytZoaDtR2G8vdm7V",
  "key30": "5nh7JsPoR2uvqZMWXovvaMzKnGQYVSeALPwjdrAjhacr5AHvMoJawDV76iqJnNpNzg6Php3bjm5eUJaNz4Av4sbA",
  "key31": "2mvA6A9XrJ8qQnDCGTW2VUeQz5DKMaLfe6vRT2MV2y5FDKdphtEoBwH4EmZAUR2dZugWe5zFvrBV7HbfB6j7S4Au",
  "key32": "koJF1mmjCkapr4AmeegfEutFhdeR5jkDoq1QqrMKFgi75qZPvgesgTctxZm4BC7aN1tS9HmQmJ1aBdYwo5BJ5ut",
  "key33": "3QZw4VoK6ZSnhoC6pRJog3yoZV6h8TMCLYnGakBGVPv3Eh8NKJpPPmpnQGRLXdWGTg4xLpmBW2wKyYCmE6tiRpYF",
  "key34": "38Q3s7gommmZzGUZW9jHLzFdgTrn1y6ZYHtJKz6XaRMKDvZfGwoJ3CcVPvn225vgdgpgzbbEF3tGcDa3mA33KT8Q",
  "key35": "2KkDvqSpLkWbXsJwGGbGPxFK5gmkLnC6FMePUkf6ocJkAxxvGrGx3dHGguGoPiiNL2pK4Sy2EbCMWCLiFReq3ofC",
  "key36": "35WtpGFmRRQhXfFPAStR1Bhyri3R3MQCUYiARS6P27PpiLzjaTm9BLyoovjkag9bemMjiA9YiwBMrhJycMGBCsHn"
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

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
    "3mzPeHg6jELRDZmp8SkqDQ8VzFry8KVWpi2sxAiPuxsfYRPfJ6UCg8RGsFVn3PREWJQDtSrMLgHLsfrBbk9gVmmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h4SsBaW9bVhcvZKb7foD2yFiLZxv73XB31MYueYm7L47fLHAQvNMkkRRHQFutoCf4NMBc8wWAwYx3K8p5iVfdc2",
  "key1": "fHqmYGJnn6iCnaQosFMvNvKNWmAVFbA5zqGHs2rdenBYf5mX2i2oXdgkRCwgXjXEMdyMGeDphn2u2goAtoacCij",
  "key2": "2p2gMvGRmn4aJxHk9mjafZVZUqZzkpjEvuSaGdWRsSpzHc3JtZA8RamBQ3JbMFUSStDUWGjab7nK4zuMAjEF2hyg",
  "key3": "2S54hh5n8zcnAvyRoA44xVHGrW85irKijhUEFYK3QPyHKFdgmXwaapvm47JAPWMLZ58tiMjo7WZfQBDWikTZDtRv",
  "key4": "2211Nj7qYkYDWhfdYXuUeRwrcgmh6LE689bCkWUKJS6utTQdRyyENFk8sdPAjM7iCr4TursromKL6heGrPCipXNV",
  "key5": "4Pn3pEo2DD45XRQZBgF5poKzLkHsYCHNEqrW74RpEyv6RcBJFjmCnCHWpA2ByEu6KpgA7SScVEJ9xqJo1LNJnMBs",
  "key6": "3R9JZNE3WVcGRquPDeKK6Crg9hPVRAfcg62qqxBNVKwP9Vr8MaJdn8VFdj576RpdssZ37wAUfi6Ku9uG2VzRsCS2",
  "key7": "5epEGnaM2qDGFTi9ag1oW4Mhzf8YAAAhnv8xKRqQiQYiYiJio7Y35sjfD4rQxnUAzyqTSP5azW6c912Aa5Lk4vvi",
  "key8": "q9j8TH8s4bqSSnqWSvPTfgEmdcrswHgoUWhz7wLa357jbwB6odWjt5Sw8qnMKFi9K1vhEbgG4tsNnYRrP41obG7",
  "key9": "37WXFXwcAvtn46NaT6dqvdBNinXDESqF62B8ViJP3eb58vudcBummde7dsnC4t7xgq67LDFTGjU6QxMtpMo8MGu4",
  "key10": "2VspkXbzZPNjo9QKbmSentdCoEpoYLWm45mKZgXjAs3eensXQG92w3qnfcm4cpNNUre5AaRzAp5HHSH4cCnEmfcJ",
  "key11": "5oVYGKAXQqNJ3zGsjx2La5NBJTh754nFTsCUJXXQpKbdRQStZoEFPkuWfbyNV22RCWkGcNHQTtWRoezpWNRPEzL7",
  "key12": "3jubBMejFCS5Ef5w7AUCri5m5iJAUChqAqFMvaKjQD9USk8YBfa9vudnhofLtsiThHRxCdQc13dwSiyiV1UDBhWF",
  "key13": "qgerdNJTFwL3gju8mcPyu8T4JwDxb4SMYNrPvMLSN3bF6GEt34LykDfcqFs5B2bjubbLFXcbPe8r4joH3yR6ykR",
  "key14": "4YncFwHhZmdQkpYmdQGuoc1HgmuvyG5hvkdhPecGfbwKM7UzHqcyt4LQwKhnPLGWD2xV9ZrU7uhY4rYxzsmLJtEc",
  "key15": "L4hj8xC34qFSN4cgorrd38MszeB5PyYGgPtuVvanSTs9phHVVXEbouPRf2DQ9HYprFzWGcXR2PeRNxqQXUvX6it",
  "key16": "4mTZb5Wz9Wg7ESA31zmnD7aLzBeDWW85rhxu3oCagnh5tkDHFaPCwC5bywkgCzFNh2DVhr2USC1pFgZbxoJGjUWy",
  "key17": "5YK4kKaeyxi6kchWh1TFtegB52wHTxyDgMW4fyuDg9oy99gW7xF6CBGUq35p92MjJfTVwhKTfz62G4LdwGn1u1EV",
  "key18": "5riEoxr2EJMtP6TG7uz8EekEwU9gSJ64hwt1vR1HPoGMYqNVdhLgtYrW5n6xg5mXifb8DwsvvkumYXCS5aT5k6TK",
  "key19": "2Z7CX1CggC2Hntz9WVFi1kSfWHG9egpTH1XQtGF2MAx5MtkmePApGpj2jk12aLcCbb2ZwZ38L538osEotPh9kHMD",
  "key20": "5dJBzeEzmZAmNjst3PgfN1LQKHAP524ikQjs9TWZgjWxhSN2pSNkqDo8RHwZUwJ6XopkC25qonhLnNSq3YjNjYYb",
  "key21": "5Vzr73rv426RNwuS2NkyHsaUeyYuChMBvHmvR7axypAFwGKFSmnFsGf4V62hQjtyZKdkhQBKgckqEhVjjEbfiQoH",
  "key22": "2TnWAf5xfV44d69Xxvrtg9MvhVQQvauhyuUndDazqFYWPgf2KekifRJ7KnXeyUSeYT9kCkoRPzaQPVYZnVRwfqFP",
  "key23": "5YAjAz3MuzkLg3NyhLS981xJn8xM7giua1Fmi1T9sCTUFFm77FFrpddcoLqrn4Eo3oF95bsSQXvMARnQWjz7fyxE",
  "key24": "3mSeQAjCBg12FMgCT9b7c7kkQvejbeYnQ7JgW7hwskK8Po4DgBEKiqmzbh65kvmiVEhNH8dxSFwW8iUeXdguBbNk",
  "key25": "2deskDWhyEnfb9B4oyGF3Fq36hjYhdnuDkHsdfdT9GmeMAfCde84dpweTSXtY3e6aAMd3JMRb93QSEENHhSiynJA",
  "key26": "29zf3oJM9dcvSGGqWNNF8XaZxvH3uQSGkS2qUXV3EJ3RiRKNbh1FgAKLPuF1RF7ndyKPkRDjYDP11wgY6PcQoneE",
  "key27": "2CXzhWvKrGYK4AEQqi9cSD6foyrAb9daM3RutFtWJUp3kaTGMrFeaL2FJgmd7TmFk3k6jHQD3KuNscob2Qd98XAF",
  "key28": "3tTwhV2jdxSW2UAgWK1Es5HwqBqzt2jyVWg5ymw84qgH2eBL2zBWgcxB7jkqRSDbtQM6s9MjnnvxCVbaKe9QV4q6",
  "key29": "442szRLdAU6SCmFN6W3WViUG2KbbHpX7VNaDFfaD5XaJULupgkykKxNtp1q6aFnmuVYJw5ioZTmbyypHuSsFrQks",
  "key30": "34YoXVpot6oKwUYCEuGarZD3v8y6ur5Ap3q23F3oWiNvSTmBFDgbk2Q25AqxcKx8DqXx5MNcp3e96ACwr5pZUnMZ",
  "key31": "4J8B6L9FDr8DkfnmDM6JJvkNa5sPVQxsSTFZXJUVQ6x33mq9UA4mH6zRQAsV5ZTJHuCpM3hkMrCJrJDPRZ59i6ut",
  "key32": "5tPTovjePNfDeqLfaPg2TMfJ4xVtafJALYucmLGvptDxjnTv5QpgRHEzopQZFsYCdmGxVnSBnRQ7v7JwVqTuh4HG",
  "key33": "21QTPtHtJa9RpvXoQkei6DrjLMdH25quZiiACqAqT3FUhs9GD5ENmAda5aPyeEriMA7evnLoBgyytcukzXLTmTWQ",
  "key34": "51D3U8WcyusVCkn4c7C9wPMAxYMtFtDc6skNw2KdHjHDd6GQ3ZXc6AEA3m58TWGJLr8QDwWXnMyirkySpFFg1KB6",
  "key35": "68gPL4bGBZ8jiDVLup4k6ihCdvfdgGHPQFTWWJiBibfgzwCXnDnp9YgCMqLASaVGJp6g62yFCL3EpB7DRQLpUqy",
  "key36": "4YcSnVBmoFWPRD4uyru96js6bwVSeyrbym9hWt2XU1Q9iZmLR3wjfm6PQW3TA84ND6jzydkvQnBVXc7TnMaCFRND",
  "key37": "Wo51QCtE1GJTExJW7W4qq8TivLwfVEahiAvNuvsoV9znDqbT4Saby2Mppnt5a9et99FNbNE9WUMh3VGMPzmRFky",
  "key38": "2p84QbwnRzUc9Gm7pbdMVPy97w5HQyvGT6eGYyWGwvXR77kvySKwNyU1Zbo4FZbKTEwsXuuZeHV5ioWweGeAuC11",
  "key39": "T7Xzz4MYjeRPnX5S6vLhPPqYcptayh5x6fa1EDpaz6wT6m9JuJfeMYVKahjHDoC86RboVUTimLCXJUZyG4dfT6H",
  "key40": "4qKb8L2REhcTbbcufTRbHJTvpZGFX3cBbctXhbj7YQyeexvVdh2rGyquw3m6NtRqaCRXKEhJ7i6Kjsco1D7z95nW"
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

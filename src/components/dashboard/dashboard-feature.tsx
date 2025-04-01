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
    "39humY5XF1wcP6nyhis9EnySKbe19gptt434yAmyF8KRyxHaD18oiKciAhs1Jsg1k7CBStfADnr491zt65aYGM3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U8G5Gm5TnDFFXV4ExxndxP1kty5hG65NyxGCCCtbDxEzLmw8eLZh3EfomKh87wXcQS3KBBqvvXUjYnPrWBNQLRN",
  "key1": "3nm4p11zU1HTYbvZx4nkx3yWNte4w2szwYyN6F43ofg7hYh1JcbMLN5cnJZxxPn6eQXEzE4nTg5KFnEszKe8AvdQ",
  "key2": "43527vpuVqb14T6notw79yrBjiooatg2g5wfwaXMKJYzygtr2zFiBEwu36V1ZXDZEzPJrv1Ntf6LgWg5coJRWnPp",
  "key3": "2d5PvG6kCTtNEeDznVgwYLCoCFUADJbiK99EPbCUXBF3wuwV97mhMd42ico1SfmXNu6XqTeiwrFQvwjjSkguELBL",
  "key4": "54mFZcaFVJU4YZ551L5C5ZNpSx6RJjsDgAtNP4HSGemGm9yL1DwQKvbeQKrNuezutRHt4SvPRUmvtwPFRT98LrHB",
  "key5": "4RTygdDAcj5ZWDWbc8MstDsxe9ED2jUTfzEtwnknZY6B6tmD5koZgdZqqvSB5uWreES3KDN95UqQTr7E1CjcuNVi",
  "key6": "5ZXzJ4jEkgoCPDpdNVDG6e2FSPZnqgnJ5a8azf5CmZH712BtqJ7JN4sVTrLWMzLQWh42xV1pPkM2nPMuqmpxRAXM",
  "key7": "2BwDRnnvowDoT6T2PgZDcYKJRQHhRbUfMiQAqK4FhQ7ukbSKWWV4zugNWWuRChQG4pXffevPHjQH3oVwQ8WctPcU",
  "key8": "2TKHyPvb3uC7LQqbCsD8vSTT44sL8zzw1cgAP3sdTfMouzQ7YPMky8zPgfMDyUs1DQjyznDapT1AvWPzC6ooRjFb",
  "key9": "4uTSg4m5ABmCWTnMK9VTE6B3wqKY65pQAUPr2aVrbm5no2qnTXhmP2ME82sTHfUL3VhRcbJ9g7xWpCkDSLfcxVLH",
  "key10": "bhLG9uihwpiS9iAETBQA5SLpaya6cwudshHy9onc5XuRpkSTqZQedBEUwFstQBfQhPvb6xjx2maA3CWweW7WYk2",
  "key11": "5h2bUQk6YFoVE6yrjv75tiE5fLXnTuHk1vFk1W7wXL6AsGWHqECxWv6x4CZdBNZ75bJZRvDpzxzjEDFyXq4LiY8C",
  "key12": "5dx3pAiviyrepa6CBX2o54vE2KMM3WmT91LeyFMHSAD3FCuFZ5ssbogW7GgdymRaj6mx984zsk8wkHgFMvcCtg97",
  "key13": "4N8H95L71oAP9Z4v8v9HMEQaUCYVi1Q5p5zyhCKL6QCgjD7iEwJmFT5CXJNWzLr4BjZ8qu7PfGoao7GihEdqkdsb",
  "key14": "5pKowPy1t2eZBhXkHxZfhNZNYFYckLbzCdKs7PrZsPBqExsKKg5PKfecuTGKXAegnNpX4j6EccLwPZAjvG8CNwXL",
  "key15": "GenZCdvcjLvenzH9Ha6D1WLdApPCttDNA8cjjvy7rWomWjMUYumfYL7gcHM4EJAtYYdUeCQy5QA4uckeZD8mcUC",
  "key16": "L8eX8CoTGUVKTZSAH9jddBwKkRGAttDVjsyyk8nAvEtz7Qx3K9Woo1nPhK38frUf5aQHfdvAB6P51MS4Z2UQkAB",
  "key17": "JasxbMkp8GNHVEiv8iYpq6NNAMitbF3aWrot4TBfnA14NF5dQDp4gvPdipmx46BM1VwewqG2CtkxYYKdx2wbuNk",
  "key18": "4uUG3oRd65yHWRCJpuQppucfN6Gp3vrRs41ptyYpeEnArh4rYtYBHUtijVeHMa5pbMR5uNRua43inFVE2f23AzvA",
  "key19": "4q2TERjzr5LTLPyQXyCfoFQib1gT7HA1bjMfWbDmdTKtogE4tv6odt6CTW5Bmm3vQTmRkANUrkhYg4mgf5yoirXi",
  "key20": "3moSb5LgtLysU2r25N339bkxzZ6Uz34Z33z6GRBYuSe2pJ4d3WuX7wiW1U6Qy1ZsD4GpPxj1MHKHJ2nP52nkrqsA",
  "key21": "3tm2TuT53XxDgjYZgkeRQDa4ELVQSXxwiDn21SnsU4y3bitgSA1yEmQHQa8rgE4PM2yJsDy3r7dG21pq9TUdDP2h",
  "key22": "3n8bpLW7VtFVMYiLrSntMag5qKjxbr6KXKWsGWg3h33iWvEvS7hcanV6JFDxZjZ8Dvt1n5foS9PXugTADBZmFWhB",
  "key23": "4VVgNmnT33XPyoCfePSLcUN655bgT3hZnQKqeAPy3QWHUs4xSpDr1zpJ7xUsKx6dQjGF4KYysQGLFDzQ3WXDMAp9",
  "key24": "27B4CjZxUqET3z8esQsjzaVwPkmrYucaMZBua6hGkJL4aFfTAyNfLvvc9pRs4i6EKijsbHXbeDfkzjejpoZR1kw3",
  "key25": "3dtCVuoKM5WVoWkwTbLExYnSBFBAqQeQWznh86P64itoNP5J3wD6bTiCSsk1CK3Kh7GVq5ZSM487iDa46jKwPCs",
  "key26": "2sBYf7Aj8LYffgEEs9gCnk45S62HEZ6E9Tq4133T74nx5eGYgR4dnXF8MLePF7gk2ihLxFohggFjGCTs13syS5rC",
  "key27": "iWwwEJyBBbiptZ3mkSwvGJ6DNTcMc4hC4Q39sVtv4iJqw2Nk9XjxU4g7AidZkB1KZGkt1gfVn74wDRYbwBfpPUm",
  "key28": "4KL2EZEopi3zgVQ55bDHyc7eSLUTFnf4EyZidkU5utSYk8p5LxPunQSEb4xzZTmgMcP9nUyUyMMRSxLx9TnLHgmg",
  "key29": "64TSmEpHSuW4ZPv9hvUBbMuPzDniwCptAsDgYVfVSc9whyNVoaV15VVot93JzWYmpGEN8abUHji9hsYHMEuG8XR",
  "key30": "3J8zGApF79MimrggsYD3V3Nx2R48yCTH1DGza7qj6ZGBwRY4JBNtrqJR1CgFmBBLXeQebYnRuAWVS5zGH4xZEfco",
  "key31": "2ywxeWfUghzvhYWBMBLADYsVrxN8NcmSpaH4SdFRFMxo9oSFdedUj1E5FGB1zbXsLynDMJGknzKzVF5TYjyVXniZ",
  "key32": "322FuKsoxarW8kgTTWvBQVRzv6TE5cXseL28Y2GH98WsyVD6QtTopNmnjGAtvURL5KUiqUpjJVSyBYrncGFDbGzn"
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

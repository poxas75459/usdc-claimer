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
    "3hSd3wgGfVFCVsHBAKWjL4QuLvqA9Fw8By65FsynnvPMDMEoUrn5Z6Pyqe1nUEKZRYSySkMhSAyrRfNBvY22b4ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G4rGd1KrwER2ZskfsRGrnBgGYEawvrN3F4YUfafmGc5jNJNJbtu2DLSadvahrvXEQcFkxkGsKLye8gbmd8eCsHY",
  "key1": "yC2F6osUX7JPvXntwMeKMQFcNE1yjsqduVKLMWQvTYhi81YSj8wzMPsxKqy2M4UBUsVXq78WVbRBxGwyY2djQuB",
  "key2": "3PWCrFanbX7ndRaFXrvDMFCV8ptHarGrkaTxmFXVz77ufpt3bvnSJQ7A57Jsbpc3hzUTRewxHQqm8gRbjryKVHjk",
  "key3": "2iudohHZQTydPRqwiszEoSkcnJ2epXabW38Deus14wqU1wi3fUjbX2xJaD9D9UYxCRPYURrJHojDULUjEG6oFz7Q",
  "key4": "5y36ctbFnFdUJuuGm9FxTwrRuagBQJSiPGruj5r6kkXtPcAqe29TiFaJhdD3KYarS3WpL5eN8TGtyHA99GCTEHbC",
  "key5": "4eDk3qSsNr7wUbe9jnJhZ3cXpTDmunxjiacdxUgnDD3pfkWWHbBJ5LS9SLpq6zy9onM1Dp2qGGWm7vS19PteGfHG",
  "key6": "2B7q86hBBxyspr5R6sLWMqB6iBwZCXRi3cCHSZsLP4RkH2d4tn8cUbeefUQp2cgp569gdaiRGud4gTQBCZdeAasX",
  "key7": "EQBytuegnkP2ag6APeCfStkkqo1N3e3AdPdGzGzeAebQzsYfe7vFZMgoi5ucZkYU7jPqrpZbMKNzJAhJ2xQVDh1",
  "key8": "XG39ck83kaj4N5igw4JybU9yAfkurWVx61K4nFjexPwW53XM6gHzzwBUXQX551Wp2pCjqDS2jTW2ncYTL6RDFPt",
  "key9": "3hWbo9j9GWs8pzGwjkYwiZcAYLVqYVokGBn3pHMhDA639xfkCmJtDdbHinXgfC6o7EwEDuJ7rKuutRwgTqK4coFN",
  "key10": "3eUFpmfQMxT5jVGDJXXftjzHckhUJ7FDUoFKQdzf2TDK4vHt5hbXiWpG7ERTQ4G3NXfDzHWsxzyZ4FZAz7fh2d7S",
  "key11": "3etvZs7Q96ryW4VpQYe4VrNWNM9A748RzgUhVyfyzmghkLx2UHBsd7AzsvxUaFFBE5Yo8yvCNLhhX6apXrkbraGB",
  "key12": "3cE9kULtKQE4ETx3nZfDEEQ9ALY56f9tSinqXPKiEkocDd1Lmkf7AkemHCrk2BBy5owGPxWh5FiaDn63eFJ5WgPy",
  "key13": "2RhXffnNNFWnzrf5h3BfmQrqjxFUsw2zuBoDyjBLWiJ9BrhNi8SsAVwna82kLaDAhrcLLepUiDSgUL2wyfUhYZaK",
  "key14": "4dDqTgTaeyV8PFxyQznkMEfRWp3JUxs8BYoTL2SzwLM8r4vXEmAhmhw2fub4hamyVGtmgkuD8cyKWDYu2DvSQB5T",
  "key15": "35smnmL7yne6ncS4fepw8Dh546CeJoSbEhQs98AqLdXvv3QHyG5tKRpSb3v3pwmvtnRUHLJa9eosDhryLyWrWN3p",
  "key16": "cTdBz7HSU3vZwN7vdPnjb94r5MDB25usGvnBrZDXxu2gseRefPy16TDkm27rJFVminVmVpC5pobtZ2yZc7xbxLE",
  "key17": "2UK8LRx2mLoteJ2BsG874aCMdAAmf14addfYyormBMfkGJ9fTwktWarQqUkAzdV19BNqynEHUoPBbfAj11uGKzX2",
  "key18": "S89xopGWeeDcS3Xdj3dxtKvCp7Ppr82hgafNPHL3aXo1pStQEkKgMAoPnwmNhSjaZxRMUUAUxpwSSQBM4M5Ubxe",
  "key19": "3JwgoDwHFLdeRwvJPzqQNm7jh1GC7fWDutzgWEcfwTXE27RdTkURFoHp6ZiEtWyvoEeZsDB6Q5ZbwSdg6CDWuWgC",
  "key20": "4ZBpugQUfozSEheeWxYjCpY2WJzg93Aa4YHqjnTAK489DLNPft51QNniaQ6sAkknHeiJyTiZTaUdtQKHugowJZzV",
  "key21": "231QhRqHe1VtDgo7oejMN5jNwZpjFLxGfQMNT7LcGmzsS55Sz2BEnVAD3QyRZyvLQWpynEd3wBfNiNZZEzGCb9fQ",
  "key22": "5wsgfAQgvJtTRBjg5g6Rd3UF63wCRBAZsP2SQa2pZ5S8Te1AQducGQo9VZKq5DdZCyPtuTx8CLJYTFxnwztb72BA",
  "key23": "292M5E3MaEtRfCnYRT7Et7cCoW9VdGLdYabQpEDQ7RqTgafNW6ZNzMgap5iE8Mq1UqemyT335XPpFV8E3xx8UR4Q",
  "key24": "2Mz5PKMSjWp6YydqN5ZEpchzrxwwcWmV9dyCyezadySzN4yumB6uUxq7Rh9rSdi4nJ1S9oz4iqRJDoduFoUvmFz2",
  "key25": "ifug7YLJx9jhz33R1mPZ7A3z8XoqN9LoifvSbCUuFttioEauUQ7DFG7khEMcQ1J6n39VrD2woEQPrfPD1CCREBZ",
  "key26": "52rqAkHiHUdH9kbUe9KfraJbykXt1Zak38AsqD3vn4EyecQymsLGzCoEiJPUsiqqPT8g8UB1YDefzhNupyB3xbyF",
  "key27": "DCseUF7vzMdqtsQ3KfmLACNTzWiKwS2iTqK8c3zTn1Y4bD9UsCqz9gtKyiDcCsuK2vGx7MSrqfVkuBd16WkoMNi",
  "key28": "4YaQY2Q6Ma3x6jpfAxDKWproWkjuoLMzEVi96dTEsGDnBTgi3vPumYWsP83qiYtM1ngKdgcwcF6gFddNuVocwcq5",
  "key29": "3fv72wnJQkqVGJXhpNmU6vB4WU4xm9b9MiENvNfcPHobb3BGAP3BpwN1G5bMirULxWYcWNBJXNcwFTJXZTyoW8dv",
  "key30": "2yPdrKgW8ucE8U3kZvAGaP4m6kExUGV1vJMJZGiXVPiJWQmpAD7r1qanY9SAEiAsUGLLxgrfffdyud2TkD1wGDtZ",
  "key31": "2SfdTvLRX1j4ZNT51omY3mmnik7gme25iDYLhQJS3ZcuMrYmw4dCTY8cjQfF7ZePZRjK1JuE7iaYonmB7cqoFtP3",
  "key32": "5JBa2AvURyMnvAate7rbqFFTQ7wHLvhrNdVKJFQ6wjCgEniBc4mWp167CkaDQT6PBP7c1T5b7Ghqk65Ep3Mm3Y1C",
  "key33": "2JnC2NrwQr95SNq7ogJc5nczwa7JGbGvSCw6m3k571yJTmT1xsA3UbhYCk9VP5u5oFQQj7nfLQjzf7fJ3KdDnTg2"
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

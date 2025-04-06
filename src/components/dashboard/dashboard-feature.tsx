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
    "2qxgLupTfJBLWc6mpZNhd24bJo2ZzTG9fFGaQ1XzrVNaGUmgys3qvpTSaHU1JFauq5yF42BEffBrCKikkaUBL2J5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNPeAwaWwNUYqz3ZosuqHyUhiXKTT3eKV1tG9m9CEADsjyF2P7tzHV3ZrGQVKw5FZaYVeWHQiibECsYAPz7DW45",
  "key1": "Rtqoead3tGjmTbpTR55HHaqcfEPYEC1Lb6GD1YEWZYasEp7jJHQ6L7fzpDKKzFh37FQgEyRURMBzAQHywLyxeLH",
  "key2": "27ocn3xQkZFdVgu7zUG82t1SNoij4mXe11PVzwX7sipyJ7V7g48YDgJua9TjED4YBZ8dt23VD9wJRJtoy1YGGe2X",
  "key3": "m3mFzUXDk2xFSGVjbNfBGGNk2wGFsLhEuJpVXfVavbtrmSDHnGzGgL6CqKgasKwiPSjPVqDyuvM1JQG9iV4y6FU",
  "key4": "4QXxherEQbbEtqd7aWkhWSStBoANMCG5sHD1Ec2QKGgMo7ZYN98SJM1kpETEpk6ev6Fmkjt4rhjfJrq6MotDNn5Y",
  "key5": "5L4e1XsqbnroFEApRuGYhPfVkyGbpxUtP3ttvxwUiLnisu9shV8b174unX6WKs6UhL3aUKCyHoPDPgdkGYsp82US",
  "key6": "4vbyaapvvaRE37FpsQa9sAnJ6BXYprqKaxCWQR2CubM93xTxWB7YxRMKqvvSDhzRY3S9WbT1NKK8DphN51e7691n",
  "key7": "3UAou6fJoha7xyecchYUpBZuPCAYrb1uTCGWbKApaer1vMDr7Axb9nSuQPawvBTnkZoa5ZthNhw6sUqy7V8yF52A",
  "key8": "5gumx8F3ReLzbpyHdXo7oeq5bJFxCdKUBTaWGKLCZbbfRuZJdxK65RjDYPPDXA2VUqVGeV2Xm9fYrgMuU9B2peS4",
  "key9": "2tWVEspVhqYrxJEEwAWiPUaXSEf5s7wcivFFgMW3kG4yw9ECeaW7Mfa3amjMCVeMur6CGqkEgTTS6UN42ri8EieX",
  "key10": "2HpD2BcNhQDEVRPUaJS7ZvuEVQ6DM1mMhnzMWjr8tBVmR7SpZuidWpTgG5n7qZgZ8JhxGLicd4UxMNWTS4G64skw",
  "key11": "2RoCKr3nrVjdQiEYa5Y85RazQm6jVfwLzeWoJxxMPuTev9bxUyx54wE3xMGMxFhFKsYBKpyZWg5kRxGjqn21b3J5",
  "key12": "iSDYQ1bKvqNPf52zadg6nvffwjR4DfTHigjX2HnAkopBME1Mpv7gcwXKX98SR2TNuodRUgAz5BNa9XmE3vL643g",
  "key13": "4ThxY6nucckskQej3hHooLYHZAFeHjrhQBaWVxDqtENK6uYbLuJwfW7C1HkR49tzPgUaVrAuDWQ1yWwfnT5o2jBs",
  "key14": "5TUGXkSpPmggQzcTzgrTqMWT5BG1PZrTHCGWNkTPTi2MFphJq7QdH8YXCbogdmYL6aEanf1n7P1DgvB3wfu77ReJ",
  "key15": "29hz3MXS4Fm85SqMBbUkvJS6HLuK8fadEjLb6Uq2zQhFGG48fnSJtP6SqhbFLGU1jzYxjXAJ8JdKY8Ru4rKXgQog",
  "key16": "5wvp8MCysLy71NbpiXQGmQS4jthpAM5UmEFXByRNEGgsQR76FG9qeVSEUh17H5dLFUKUUPY6Vb7sHmCTL6sdFuUs",
  "key17": "67FycZJRLmYCPwJm2Y8sVxGqWLJEKPvsNuzyhBRoNTeZZUsgS4TwaHv85bmtndHdsJJ18eCGpKg2eakCxHDfnqt9",
  "key18": "3umM8SRrCTPRTcK9VEaXBZBQgEKJu33Ep3veQTNeAfhBNc49hSiudSqBoz8ELkf5mXXAKo4sFEfMdyqLsA5K8Sxg",
  "key19": "4ACLxJkYG9LAnpHo14zvdZ2zGjqJojFZDjSAmSogFGiLJKNsxxRhk9SSbuYB5nbhZybULH2XQxtq4ubGnZ7zTLPd",
  "key20": "4oxrAknk5Drvkf1QQdmNMyGtHntEv7HCdHwpwt5fC5y9KvqGBHGyej3j91x5Hxp8ozs5kVcj6cJ2eorSkdFL41Ba",
  "key21": "2EU1iEoV1XrVNBjznt8gZ7mpHRuk45DqDFsGUL3KivowjsrRZycvk3sJskZrFBgygXynwYfabZP6PWETnKgzixvv",
  "key22": "Ak8rBko6VFMF67YKua5EChLbm1GSHggiwa1oMXxa6a36DUx5NcHCrrtek3fCZ3XN7JbhPGReypiXYZ4arnQu6AC",
  "key23": "5mrQ5NpFekJCqc4uBBBWyT7QbnJTJ49p9SUqUrG3mq5YQKaiz5sdxnNSbyWHvf3yuWFZQqZbd8nQ76xWndrMmixm",
  "key24": "2FFmRZh64iF7LrExzKW9d5iwhqkVCA1ZmwM52qoJoTuAQAdiiujrVk62KpXhN2fRLpP8eEsprwJuL1kEtmsqaiV2",
  "key25": "2iKcVMRTmnda9QwzModKrSyvqnFC8Jnf6JmWvuhDiNwayCTvtzDS3XuB5CN5teRHbyFjzMUdFzBFsSzBtrCUotYd",
  "key26": "5eMAasxTCzjt65tUPuhmw4gs9nrUVKDvNDRLiEwbJpNeE7ffdq3xBR8GppPTn9oGyd7jsicKWDgYANvgnqGg4uQq",
  "key27": "2b4TieVzgnXGhNrzbdtFqDbiqtLcLL7tLQjWB6KC2pEVNpFx2DGpU4QnXmkD17Qt4f8HYiFknJxkjBEVRtbvfgrm"
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

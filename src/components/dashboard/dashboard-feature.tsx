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
    "5RxzHFY2KnnDuTWS4ewM8ASe5GQiQ9s8Da1Bk3zBuhJLDLUhSQNe4vgPpzYhQRXpzs2HAsdmRTAhGrsjwgsEzmS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jy2WkUCTDUEkj1eeWEwRDKPNNizx5SH6hzt21MECWaKs5GrfV8WJcbXmHS9uiCn8YY9YUQH3ybndL2dBFK1Wwjx",
  "key1": "wRFqrW3gHGv9TT8VPxAqjiGxaNBzprpp2Vt5Wq4JbHryPTK8X5t7moYVsuPe64pKjC31knVK8pJ9vLVm2GMWQdZ",
  "key2": "5hAvXyVac87Nvbtqq3hovPAP1vaUophsw9PR7cc7FpkWSGi3KMERDSeKsFKmxDqtJuu5HedxFzPRKZCitBUtciy5",
  "key3": "5R8jqrMxQL42yLs65VUUD7emMtXhovVV5FN2FVWb9tgwyoe7VXr4JT6KYGvARv9aTyHeWiXhi1W3W2FdP2RCax89",
  "key4": "5k8gpz9inEZEnEx88YjCGtoeveDptFsmLdRYEefiCBY7vnmM8LcdTfpf2RiuMWcEigvKzx3HZaDMr7BQYLoQCVQE",
  "key5": "3MLv7MrBvvje1aHCiPAQfvRVEwvb1P1gaHtNv4JUsZZpb4iZiCiZYQrZvYVJg5KQVmZQgQpeFeQ3ACyRoxbjYkfk",
  "key6": "5peMGKaoNLvsEgp36AeW7Mgk84hrwPoC41XPPErUufoHhyEMhhuuZMZTGQk9e7uf5jciaJzXYbUtGpvMv8FhU4LN",
  "key7": "4PEtWzzw3NykxcgBGpzGuR9mFRu4WyYSU9hPYhSkxwgELMkHPcyki24uwJA3YRV7s6VjuciwyYovDFAxeJG8kyv2",
  "key8": "3oswk1DQ3KEhzJFPPrSvqyHuT2EAM8rvuXZ24YHg2RPW7WeJHKjfUzBM51XNRModdCWoftWuKAwqxXLKh8XMXqnS",
  "key9": "2e712E1cfecTS9GGcTgNx7ZRcZquApfF7mebp25iPpwMkax6hB1LNqTbdmACBBxPNV52niFrCh8so6xwxxDMeZxS",
  "key10": "3AgnE5bgmYzRvXpBJB8iANGwVcYT6TeF8u7MD7NAY4cfQTqM8mneYdJpK3ocZ1tHqGuryq6KJo3TcF5TkoEi71ak",
  "key11": "5z9VtN9Ecncc33wL1w11EsGu222HARLHsMPNmpxUW6c69R1PjqG9J1vx6cqqciPi46G3fryDHbYwokKvv5kxLEof",
  "key12": "4kqJDUrp5puRRAEzD7HgxGhKKNXB1ocdPMTpK93bksAEhdQgiUE1grCtoV4iqxep2bCvKdhu7CfMokXpkzK2ukXH",
  "key13": "5xSDUapNrWBJH8T2horZXRTu6jTAnRZb4fJqNvsXbWzmo3gPUAve7sYjBhZfKXy8rATAEdzXV3YQcRupfawJ6uRu",
  "key14": "44L9FJ487Un35uSaC9XqwbuLjmkJ3ke3KbP3y7u4x56o7bzW1xGhZafqWv7639FmqTmFGLgN3qWHKQo6oVQCTmBv",
  "key15": "4Yk1mc8NUhAMZ9KTTC2EtVBQtzYR9kPMUwJtjoRQRZEXZoEYgtANY1b7LcAo6w5WTZJ4U4hXCD8WFhvyYwr97wwm",
  "key16": "3nUP83DJCHcyUbKzi3PV5Xd3YoWzfdodqgML2Y4MHJaWbzJX3j9MWDZkqdFQ68pYEL8eG28nNLsxwYgbx7KqxYHn",
  "key17": "pNK9PGRBccRghhkaFbAonDCR3wtKSyxtMH9GgMhmuFRZqzjbzkUWZyd2afoVypb5zMMqW4hTpCwxFBoxMgwePkP",
  "key18": "4MZA9Eapvgsh8NqDSXLQW33wCuDmn41v4mWCP2oYkZFKcVtYh9zhunseKqPBj93JoK37v7JsKQJADtMZ52yp57aK",
  "key19": "126CQ7ftxZs9LFWXgPyo5QJ5Xogipx3PAASZiKeWXGLgizZUwWfRA576U5RraVe8nS2bzumUY1Y56NsnYfFsZ66i",
  "key20": "48cixxbpPtosv5RAUJP1ojAp9LcCyR6vJ1Sf8gR6dafaGpJiFHXFmJDqb3VpqqBaYdzCeGARcFn7R8TUjKxGN2PK",
  "key21": "5DdXPXZVqaEjb4rAnwbWAMeoPhJpoU4kLnwN4pNigRNbbGGhcAChJSAyG66nyH4w3ZGkqJueKhk5SqSp3FfeGx6B",
  "key22": "3YVRJNWhiyH2fejjgCpo7oT2XwHK2GUA8tcAsZZDNcd3sNMBSVPTsp8d7S6zxRqzEkXuznx6nWcbDytBPUYL9ntT",
  "key23": "5C2PoyLD3XXys9zwVPRwkd15tyYs8B4EG87MyTkk4LCGuQb7ASQLUGNgH3kzcWLek8QHXB8rfj4rutJNbFXhak8W",
  "key24": "36tiwoGQ4CRa3sWChKukSJFjkLFDdZYjz47UtU3PuU2kPDhnW2KM18GCezH2YdYSQtb98NvUnLgnktmxbc8rYN8B"
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

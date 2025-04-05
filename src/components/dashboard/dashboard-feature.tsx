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
    "3SToPSMFZLmZaEKCjxfgEonvesg6QPUpNhAay6u9z6qhWGj51SVvUDarhGWE53C5w2ghiLkLDeftMVegQV9j5oBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HxAMaYf8oNFVcTnzKFwGifJUyaqfSTomu4dtDUAMUFuh78111BMxR7rAE9JSEi5x2LBNMeLmXEiRXKRPycBnKo8",
  "key1": "3PxzKGPBozCCp9rDtaG4kNy4N1jYoMaTSKJcVJRaKfeXjoELRwqSWkEqNGBHntG5WpP73Nv62wmssv8Sryt6Pi7g",
  "key2": "3bJ3xwcbNrTcsQj2VPAWHogxTMAF7dhMz9oCsnYkxkCHrzpftHMG3EN6n4ybLb2377qtbYVP9vwbSHWy4SuUike1",
  "key3": "5hXnFw9wxkSP13Lk5459K2EoAGvQB3i1xSxstCiHjFkgDHk4oG51vcDz57LT5ikMvzMjUJFYAWWaV41UNKF7csYA",
  "key4": "4t3Ho2ZNz2Cs65pjUqSjwUsYCUJFS4vZmM4rfCu19eXyUz3vD7pwtavTiHVHwsc5LFSsSHcbFcoWHddRYsuz2S4W",
  "key5": "3rWC9BoxpWqpXw8SZHpfq6vhp8Brhy2puMy7fs2j5Xgw7xzvtrZub3QkDUXGosQRQJB8itgoEH7YpQ7fFEaTnaqT",
  "key6": "3okJt8Uv8FvL7ZJugBxvpviyy774c5PRbf7hYveArUxe1WXpzuvztQgnqous86qEQKnRYKxmHDRhFmvTFeuJfdyi",
  "key7": "4r5W9bK86fBii1auxWd3oK3Fdz1YnpvpN5C9APGQ776uZsXx8TFWYuaqFKPaXDhqby7dtEB4pFsiQhZCup7dMhRm",
  "key8": "yXuuMweArRU2DB1Je3s9g46jF2By5w4vZCM5ePS47pgdrw1FUCNXaCYdUUxLYhwBWjHaF2Vek2L8S2jWCeS4eBh",
  "key9": "roW2jrGaZpXp4rzpjnd7CLsc4B2G2rPte2Y7mzzwSzMRiRDvqEqgvt9NYw5NzsXnMWQaYcAW3Hk4u3SZvaczRB8",
  "key10": "2SFtq4k4k9xPoMF52VwUf9MmZ28Gd217P4X32MB6kvYibrfiYoRKmtY6zZhvJSmD9sCE4C4GT5kir1dV75hsE8LD",
  "key11": "2wJofX9AuLoAxYRG5uyHywvNhBRfEugzFk82F8tP925ssrYzWMstTUdVR52Lpu3YbZgJqH5bNNkbWtqNy5MgHhZS",
  "key12": "4UNr29RHuaEqmhLkqQJWbk1JzJSgdAFLrZLQSnRKdmrpXCHfsfMkkF1s5v6fumSdQ16HwtxECZtygZt8TkZ9egBf",
  "key13": "jMn1zZ3xQq9zxRBiMxe9DXGRQuvejDFoYvtCrqXJQujc4oPYyimEnBhUexfxgNKvKE2TiE87e3K4qVZC1Yo7rMA",
  "key14": "2Mmse45j8Ly99D2uHH39JuXSExaCbC1qVhWK926M7B8DxRdZiwcHLuFv1dwYoMPBUtvNMH3x7N2jQKXnMaaSEaui",
  "key15": "5u4L7XA8tsqotawW4agKLUgmgRpuTKgcsTRAAHNRoT1LRvXMCUvjKFN9evtM1URK8XXweDgMw7jXYVQcrDwGAtBt",
  "key16": "2ViMNMNBP4EvXfKKQ1wg6Jay8AVu1R82ed4NFhvRJ7g2tqs6SCmWMV3KB4MGtWRDw1CG2zLGyn4yS7EtzVqjvkB9",
  "key17": "4ncGzAzEBYWq7r1DPTYAha4RRCqySmLBkaP5CEywg7ZLhimMGTSRwmvfDhVQWr9YKyeEAa9Ysb6BuupHGE7RHifP",
  "key18": "KvRYSZhPDj4X65HBJXNDp8taJTfMxTUNtfokt8f2PEnsNphrDQS41FgGhDcHx7r8WEBmkDXW4J8jEAHW5nuKgzA",
  "key19": "KRBrr3amMbkj7Y8Ed6cGfKnUoX2ymfRe839wjCrjwCE9LnSTBtZZFQmmFFYXuSyfjiyfD4QgmMo6L5PY9xhBmnr",
  "key20": "p81ZWnugX4NiyPzdPtkCk81XN53xDwsW2645MmtaRayim6zuwuW9Div3j3euBaLYirdf2itXHH3Wz6mjVntNmNG",
  "key21": "2f9JVhebTmoYqewmt8WbGhKSGDMWsmQvVCjR3emx9APijmdaJCV827CDNSGboxn7bjC3R3qtzDXyqxcusox6a4AS",
  "key22": "5bS8Fa79U6gfbEHRgLZB4bhthHNXFaBhm6ms1tsSrymZr4N739vYdwST6Uj9bfQydt7UKkPTEDWJ7hEqtQ6WbYb6",
  "key23": "PrvgCiKFbNFcjYtsgVGTmz8mJYTk8rswGFrNnGsYPU2U94fXz3k7kTMsUi384NAG9FKs45m7xkw5W9PbkNj9r2v",
  "key24": "3tQKrb2YCchaZGELwJ9VDefxnmTgJkCZKnZDWS4z3RQFBQ5kpxSJPEzw2PmM3D2V24s8JVt3bZU8aGZD7qZU1TyW",
  "key25": "4dWd6B7gs13qQjJZL981vDFXAS4775XQHRb2xr42HUvj5AsohLGbZ4Ps3tZXTkgD68Hb7Ro86mbQ9cCCjnqgvrFr",
  "key26": "4E7HG7xFodG15rEW61HDjM8wnjzAHd7icUM7JQvjJdfuZKfAqML1jNhVmErGD1GE6pASSNQpP1hiPdQctBsjQoLq"
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

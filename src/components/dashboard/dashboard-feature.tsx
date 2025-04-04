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
    "y7byybByD4iHzMbFbzi1GG88r7Yo3TajEK1RLf38sKJUsjA6r8q1pkeWosMwkoTiRdZTPDFyBMbpUFDwJAiYVLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jezBvh5DwfWP3uWJxEdgeo8J97h1d29VNzDWVyt6dN2BvdozYYxrx9KsNAKa39KTRz5DNY9xbcL2KGdRKMJUbWY",
  "key1": "526XWAjZhP957Rp9MztjbUjZiiZhKqVShgdz81rzFsSiHaKVT3EseFzDzLkRR6WwzcLb5AVG5RQX7TDBmxjHywdh",
  "key2": "Kw8ZHSkytV53EPPAvXa6aVJZ78t8ThbN3Yprj9N9ZqxyuS6R3Ah1NMqtgTA7Hhx6ZZt36ThDeyv6W7sBQJbRKbm",
  "key3": "2qXQGgE2NX9XbjvqeHf3HnZPiphcX4KSTegCh7iKhgykS6Udcrh1LtXqbWHh3BwFWsi89cJDTLDhGE5JuBgzUFir",
  "key4": "3eTAkX1uVtfoE4TgDNCdEwicxR2WGRGBTZ5dKvvDuaa5bfvfzBhydGoBydbq7VqFbVFuSzvHDfXtVTazik82Lxxu",
  "key5": "4KE2zZq8AoHx1ZdM9TcTR69Gerr1KauWYXMzKQ3hD2PfpkSn23ghgwu1bN7EpK4fyic3wnA5oUqTQFfNr6iTiNNE",
  "key6": "3VHVvaWuXaHssiCjFyRZmKjE83mAfK9XmhLvfmD7n3wRCxPdR59jJy2zvKay1yPiTKbj73XWSe8GDTQfMHwEs2eU",
  "key7": "3f78jcMF4GWHLiHCQpR12TZerfMBwdXMWuLuxn8xSzpsPBfHz4XvKgWVLBPJQ8f7mMqvAi3nC7Ayz1WcBSUw6UCG",
  "key8": "5JABBfQRptK2ybnEeAY4C4oz18b9xpPx7DQ1xMgNKzZ65BusYW9mZHfC44H1PEJyCnfHtbufD8ejUfB8317DfR4F",
  "key9": "4wgjsqDJ9s2YLSQ7X8cKyEeyza6d6cNeNNUj2AHhNedipry2CmMHewzH85u2JZtPnL1VrjjmQhsGouTMbsgGW14H",
  "key10": "4V7ugeyCsUSByWqV9PrFv1e1SG5JSgib26ghbGaukPiZEnHsVCu2Kqvwx7vBXi2QgzujzZbMmpAFQnp9PG1GKkLd",
  "key11": "4wjwiG7ShcbKpwrBxfXmnRDWXQzBRSv135qvQRvDz9fBbFCBDv7nS6gna8rNvizDeyL3D8tUMowbdomQmaA53nLH",
  "key12": "3XYNGoSdj2orL9xfmSKSWurvb7DQ5r64pcp1gxRv9zHJziyVFip8FJG1VGhvDdJGj5sgp98PavYCqazzKSq6AT3F",
  "key13": "3d37FLSnvRsPBbbumotgdAi6EPMLSZPg8sknYauy7JAuWfdXbrLWKHSKJ8MSYXwRkersesF2NEoUsY6kv6znLVWN",
  "key14": "3ezLKSkb9CwdR8gGXYVfHY5tmkDoQfGQSBuwBbpXS4b7agkPFpmLQpDoptLCMaLAouWqTTi2Z8yXEhjPWsxNrKtB",
  "key15": "5iHqc9ycq3KT8nKTk5bE3c6z7wWz5r4Xq9qmpSiNqtXKjLMccPrAcs3FxvgE18D6ZQ4aSCnnkctMLZ9ijiTigZ7F",
  "key16": "24wj9NRuWBcoZcAoEad9vdTCJexdjxLG4CpEPJDKMtJg8o6vhEH4EhwnPHkT8iqbCJCHM5ErxG85vPYEjPpfGHkE",
  "key17": "4r1qUmiXVkFpeMGF1McuYKj1o9DYwWtp9CeWWUiuksqQbzBWQw7dZHuBvWkTEhN5xX6vK3oL5TVMaX878jKygUf9",
  "key18": "i1PzbY9mYPZQqGsioa9UnFuRD315MjaZRo8Pfb8thmqWfikzizkV93QTEsbzyAfxWFWT6qLL1j9WANmZweXNJZu",
  "key19": "4mKvpAfv91poMbUrQJFuqpKV3U8f9tTP8HSjYhND231wa5P4PXLn2FnjBwfkiSCXv9Wnwg5D6YyEHmUPR9bnKPt8",
  "key20": "4gfkJe6GbiiexWFQna9WZ61DQjdr3ziB5BPcKZT343LCimkMQtxk4u4dnk5NLtdRdefLHDr8Yu6ehYtMukh1ERNj",
  "key21": "2RGFMNbdUnzhWwGD7AqPEb286MfeE9o6G1cTk2rpLsnY9TcCgF4Mu3aN7nNi2FDrjLhZkWKiftZ7RLsq3skuT9Pf",
  "key22": "3xm1YnogPoyQX6pRnyjHwXMwrU571quZo23c94ZNshtbqU7KTAA1Seu2sCCwbhBDpfJLEGUi6WRu4WfQRD4WwBCA",
  "key23": "32vp1ha7pozPGq36kvH9TuEiPGUXp93R2avJMPy3LADQBp4jKj36AXoAYYjDbvdHmY9aS3uitm8ZrFUXJuavbwjV",
  "key24": "4EQXfXhVoU6PrStr8fc1e8HgQr3pEmwJP37VjcKPrDFwkPV7TXy2puZUDjbd5xZiZRvyULLqHd5xAsFdzj7DJAiE",
  "key25": "5kdNRuZG6yRHSuipn4gLBtgti4rPyqvLubhDHBDWkD1V97rt1kMiJUG8ahTq7aVQm3gbk99BTdUd5CGVrcpau1nn",
  "key26": "4EsGXVnHaGX6vVP5yAeSnnBbXJUeW1A2KkYC2bEUpLX6d7oE2UjRcTDT4kLeJ11MbKUXQh6o9RUmSPkW9wFCnWMr"
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

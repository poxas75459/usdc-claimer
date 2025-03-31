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
    "5gEeHzwpy5edbY4NLAZLbT5D4c6rYKAShhZaeomfk6Rn4VMuVCCfxKrbpMeD9yqa3GH5s9oQ2AFYJhyMbt7qVP8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BWcPhMu9BAdRhaUwiv8txDnARC3NvL2wWQ9v8wmNnPjmCE4ueYsV7iMQECTYfEWkmMXZ7PS4L8Smfvs5jAGYRHf",
  "key1": "3qFckK3Hm78gnz1qs1XgcwndUcUCHPzGd1p9rsJQmzkUL45mbWBbry5ToyQowVPEYeYqvHWAwcA1pQSzQqbHhn3P",
  "key2": "5ZVvBxv8EPma6vdsEaS1GK4umUVs8vNCfRQta1xCz3dvRW7fHY9U4oHsiZRcYMsKqNpYtwtWtzBRmwpHKhrmcYvY",
  "key3": "4MoqHHcwg98gCycgetYspTXiGYQcjhXWEfx4PnpuHzqV9WobdPDdJTRYDithr9GQF19EHfqMVmtQRPjLtAWafstY",
  "key4": "3KWgt5zzQFDrGcRwZnJWPseEn6q4mwRMTaigVahUKCpVAnubiJjaK6xAhecz64gtoUQ4GTctYMVagkhiRY3BKHHB",
  "key5": "4m43UJzvVJkahYE1jr74uratfLt6fZyn18QXedBMSe9uasTF9eziFy6HJzGXe3FjusTEv88y2ASTjP2pg9qMtJuk",
  "key6": "4hhoesKH5CjND2ZF8iZuAiJyFVxAJ5W76yS2TCg4gGXmpiMr3UfNHoCViFw34ABMe2W4PU1drsdJpQAuHZGE1LLG",
  "key7": "23EcrnMoaNQTaC2TbzefF6EKBquiLvpT3E4CmWff4LqU3hYWeJofpQsQrjWdLk7qC5ZqgYMJPKi83u1PLRLYgF4Q",
  "key8": "2c9qAWyxyZRShMNHqgbobf6FdSQYSFoHR5zXpUPyp44BU457x7agqNzVMT4JjJRTybfzXLR7ZY78tcg4nFwMPNYA",
  "key9": "3jAE6Srr6FEUzrZ7hyjxK9bFoaGXqysTFe9m9KQgaZxAd29mnPHNNBAXpPYNcuDjoad2BasfhQqTJCLTAuP16XN6",
  "key10": "2uWxSMjtmgyi8WPr5BV9nXLmw6n4p7jTyvx9sJpZM32F5QWaHcttTPnXtof9tmPM6ucMTYopXstz97Q2Tg6xM9d1",
  "key11": "pJMzsExzbkARbovF5F5aBptKxse1tKPABbNgTuM341SK9oqJ5SKGYVYgkNwSjLYg9XUkgxFo7qgHjS9v7EefbGn",
  "key12": "5ACJ7RHmPUE1h4CJc85DWVGrsQoa2x8vE2oD2cB1S8sg6A4Nn5FVHnY93NNdhfi2hCCogx32m7HAeu6CrGvbGWvT",
  "key13": "27aSBcn2nX824LQULn1urC5P116kkB58AP2rEbjKmTaB1BKHydvwTk6efcwGrxDirHuKyrYhkrSQCsnkMedfETcP",
  "key14": "53n8D45Am6F4CX3HQ69CKXM6LSVP6rswMCX3Bk4wsmfmpfKqRfQtA8nYggt4PRu7fUmSHtghkBWuJLHpMpY1L6H7",
  "key15": "27VY3iCtERNYfxMwMbp9aBx4kyUVd1rA1RMMZfuDmXuCMKvitBWFSpGRxUva7XzWdzcWQcdvqTwnDPAwdBfdNQjL",
  "key16": "41763wdZzqPR9k9M5HZxRvArQ7Pwn3prqQu8ZNEihtTdmqy6utMmxhqAvomBbLXDpURxHSwPsE7KL8uP2enxfVwD",
  "key17": "2vdELKKJziHZg9NsSBBakLEpvxHobLpwTKrS8PjqBw7fBJsK3hSHRjRYHv7TbZTKyNJaAeMLm2vmAdTiSFhvqGAs",
  "key18": "5G4gKzTHG4fBhccz95zLWLMfGidXrkJybZHJi2MkktUx4GeVnVCwg8oLwXaX2Mwbqm11rUJwnuXJGb5vVSebegKg",
  "key19": "35FB4UmzdWTVwNmKUsp51t1k9covN8o4cBwVn4Ffayr6z8oHPDSMv1RwxfSfMcCztarsETEERZfeApAZLPbYoTny",
  "key20": "5tRnj9UDTosQr4uYKh7smQzubghGWiL6kYM3mmorMWt7v1LRh8s5icrdu8gkSoFDAFqndJty5V7sdVn9Pwfjxppt",
  "key21": "5h62TCRyurCd6w9TEAx1MQhypKEPLK3VxvWrdAaJrquQXDyicY1gPUaeRUxT82D6pegUD7ZBHkKydHaNKLsuNbfE",
  "key22": "QYQtykHiocYxqx1321KQGE2H1EdkhZzSBsiJU9W3vJHhagL7R4LHwhgvKaWXTDZ7H3v6TG5jbQ9TAhgrrRHDPrG",
  "key23": "3NBuKbsQEV6E7sm4goh1Yd4K345zAxc5ZPuk9sMimrfrgoCoQgr4yykE9UPp2uJsrZYL6WuV3FmA2gKnwpsVm1DC",
  "key24": "5VU962HZGpRCdjjgvaiZPPYwCzNDiNu7a2j4uD9RNf55VxFHZsy6EAMsL6acGTrRib3JrBgLfi8nHhTxhMEGiSsZ",
  "key25": "6u9TZARYBETvWbmFypTm8kEReFqdqf4NmeduDZgTqwaYZiGftQ5rZNRi1PSdo3pxrX9hEzGfxZ3epWrVAjvJAvs"
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

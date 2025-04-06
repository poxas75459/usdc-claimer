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
    "v268HG5nimNwPkjE9um6xvsqvmX24C7J8ADPdkRZFnyES5Ta3dD2xg76NeGSM6vT6UtasNPCze3vLKQ54ESK8yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXapusPW7HXU1Cda16cfTwDALFQB3ik3yX4JZLmcd1tXajzsPvigqkQsZrkDoPDcnY4RdMQD5YCyBEdGN6bKWtH",
  "key1": "251JobtwrjcBqWyvdhX9FBFjoNYvQ6Ks3LDq4d6ZSw9v5KbWMu2APYfPwfQPr1ArpP8G7WFYQM9RrQPHBH2waDWr",
  "key2": "26gktbkTAeYghUYL4326FHrUkyB1LwGYmEffiXgMzu2wStsK3KJuijoAdojfJFAvoDLBw1nwbXcD6EMDozZVKVQ5",
  "key3": "2W7tsNvkrKCTodwTdQNK34v4RqdojnpA7yCiNcJGRvvpYcy9vpRoKyGw2bbVCfgchTHYV8QKJnUVcAn3pkfCLPsr",
  "key4": "2tiYRBTBFWkLt3oCcn5ttQj39VfCsdGsSs8Wui4BRFnoyXKhGckW2UdVsmt1etReX2TuAK81c7VNUcZGUGFZyo4r",
  "key5": "4yDZEWuuLNu4kdrW9X4amW4qPJcVLies7yJvKqS1qYaKFkwRfXDN6gah4B6Ni6V3rYvwy6KLYX5QG9CvG1fu4hcE",
  "key6": "GxxwMuKero7aPEWFASEFBAxy7Rprmw3mpzW2cbNDVWw4hnMFhYuSCQ3BWcbsJXeDGrBMEbUnUQ2ADh8k8pP1QFk",
  "key7": "4pQXoneKsBE6yd29eDBQs6mWYoVRXB65y3oTJKsR5CiZw3EJRJimBiw88ii1N2mrV989rE6KQpU2bCoG8KfyfYB3",
  "key8": "3LsKoWs1k16vng5X2ThLGaRbh1jFp9S4qq3SQUGaqtqpZxunX9D7yVjyTytU739fjAmi2rghNLHhXj3bp9B9bhE",
  "key9": "3UQwnC8sz5b8NBcGJvHuZXeKa5vut5nd8cTYCkzKAEnarV27KKvYDX8EtAdwfdnWwFuGHdfbDJAqDu7h2FNLkSRr",
  "key10": "FjeDxHffp79xD63s9gqadZibVJMWuwxZo6jvF3Xe279gCWCR7vGa7S3HmpXyJy49rPK29mEBt8FXrcizmhjpHgX",
  "key11": "4DqEQ35r4cdrHdtBrM4hFbq4i9RPohA4CAkSZpuKQ5y5bdmfamkZQhkYmKE4kfinoLdqDkmmiPwBuejRk9vJ8GFg",
  "key12": "5h6rKMASNphzpjCWqb8eg29B44vusFUm5Ty2z4N34DTmjbgxYgjihX53UxuK1SF9VvPbdNhHHyxJKX7poHDmjwjQ",
  "key13": "kHbDCiRMeAvxsTErnz1j6hM7kD5rQkaoqwW8qbFoeSTQ2AUzx7ACAC5AB9KTGmNUA7Z8y33TQSbqtQ5VfPVkWAb",
  "key14": "44Y2mg3DWqvzFzxNz1uxDiMDKMH1yyyrCmJeLuZeXnPbts6vxzRrapLXTtpkiFiemXm5XWZmxQV2xsAvWBinAf1P",
  "key15": "jpQLfKJL5eitvLL4unUW5N9QJfpJZYmwnQts3upACtmcBQNmERcBqDzfrbkb2UGV8pQcoSNyLLN24n5bJRMaBoq",
  "key16": "5s5g69unu6qMz45sCu2zvC8FLoye9GFr65txRWPrpwhoskGvUBcvB8Z5TVGtSEHtHQaDVD2D9bSmxHPJFuQevj3b",
  "key17": "724WCEjwZ9CPZ1w3KzvfB6XBVTsxyxoZe9GWAHeJRfLgWmKiUgyAQbAf1wnyY6SUDj511nQPYRctpWYjnmNFFTr",
  "key18": "2nYCSnfUekcA7zXSx8uXB6bJy6dLFNK7rtHhtZQvBgcneAYmWbJ1ckVVAzki6xDpZhmt13TADVoauxujbnerTq1C",
  "key19": "2gb1c9SUU3z41Nw452if7WEBQBDFgmu38DTfjVDbnZABx8VxPs9D7oAEUW4xXVrzaJGv43ADRXGxLr3HrJR2qQ1A",
  "key20": "MqKExw2rwcBuNCZADWzhs3mjbm7BPmHHx52M4pUgBJDCNxCW5cheQJcwVX5RAsB6JbcXdHa7RbhziGXnLf2zQvT",
  "key21": "2MpAtw7Btfg8E63SSjsMTYBdXCV6aE73K6DaU9RsGR3Lh5BpxRG4YkhMetjMoyTkWcRb8kaqLC1Chp3xu7gsskA9",
  "key22": "MJ3ByN17ocPadWioUvYYYUcFLS32Bxz6y4LD6w1Uua5FSL9dJXDHJudDa72F7CCwULXd8G5WgUv5s4Lhy4sS5oC",
  "key23": "5qFUNktPJgXrxHDutU3bMWyLd1mgYCEzPMYP6DTRraKiXDVcp7pHmYjYxjVboMBjhae1zZKVgy1Ad8J8Z3MzpJGs",
  "key24": "59rJumjCNqf2sdAHjCQxcsvwu95abS8U9Md6GQZxcCyDpGg49kqgRCCkCftDBDi9xZpkDFNTsV142e8kyU3iexoN",
  "key25": "EQ2nbhZfQEww4gqgW7L8F2v9PJoSFZ7j1P2Aq7o5hw9cm1tCQL6gN2poLYqydpvDv7qubrF4BHLcVzpSkqQQxWd",
  "key26": "4e4BzGdH5paBJ3myA9bA2MRgBedGiQjNArfokp4vUqDarLkY2XYt5zT6vCprjWPuhpDbsJbjDKH6AbWuQowgyn2J",
  "key27": "2Vqxbm5bJ5nraJLRttKuPy5vutRvxNgvKeWTJcnXfZ9C3VedfLFrvRw2QcQfzd6UHU38ZjJNZ4j7TCAZVzSGx68U"
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

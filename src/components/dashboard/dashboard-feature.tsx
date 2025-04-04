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
    "5tWuhX8mA1XefDbBRr48E89kQUL41KDPJE1G5A7YhHoc9cLnQ8shcMgWGff33z78dn4nXYfoPgx4duQa6nVs1P4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p3XYri6B5V7XJFmhr3Tdnkqpd3zUqAZsUoKsNjWftUFTzyuQysdW4YS6qvDsEf3TfdLHwiSNth6RBfy2Kc5JG3o",
  "key1": "4VaoUiPgkfK695Utureq521DyCfgtozU5yy3Yba8uzpT94iyEwJHsrqE3RnzEpW2EjCvJNPSRXA3gFKXdpmgaDHv",
  "key2": "2XawS7id1gnk2CtrdW7qYf9i6w3HS5ucDwCu4FsSAcR7QhffhgWKjdYnNFyedMFBdEXHBgtn8Ax3cJAb5Ng2oHnM",
  "key3": "4LhX2knqZPQyUyyZDYubyuRnS3uGPd1n8vY7xDayT9Wen2P2V6Jnimrn7ZmK9zFa3vPYeCb6PxULHZY1qM9Atpqe",
  "key4": "3CDo8XmJVS6E7zfj8crfwkXDwNAFjFbjU6UvqqmBFvPMUzLmheMGh1HrUtnXkZz8wVfX5QJVDVtMpmbt4BciCsVx",
  "key5": "29f9steA38h1PYDXYH4BuFr1wN5SJxr5UF4hvK45wPFa47cj6aghK26kprGneH11yVosiMrmyxFe8uoMJGMgbiQb",
  "key6": "3f7fPYo7LiXyapcLGdVKXgzNacq7sESzL7sDYPLHyFQthhdg2c8uFHPvHtNBp9j2waMZ4w91ATWVCiRMCWJnwWmf",
  "key7": "3oA7dpDCmYRwgKVsUtfJqApRCdJAwPhCt4SaEt6uzSpJMnZvVbwn853jmtvhX6CB6DxSDDP2aew9juctGhEg46EJ",
  "key8": "4XbRCwVqnM5VWx2aofPds8UkJEeDP11Bq2mcaWFUQVaykaqMTq9arraYiRR2eYadovhe2Y1jWDy2kbpY7rmedscp",
  "key9": "2prgVLBrqG1tNE5m4rprQMQiyeNug9ExU8KxbeKLG1DRcVJYMFuav4B4uiYmAjjWx2qqgHADRi3MRkMPdeih4D6p",
  "key10": "3EuiSp17zLMjwmWxwtKkB1SXKuAv73WB2qn8VyyeBvzA5A9RMkAuXjG5mNgR46TQudBN6qNohGc2HCN75ouZcpvZ",
  "key11": "5KHd3mBNQFhNYTfgomZCUuy7ipPD8ZmNrRPeiNdyWW8SyeRyJxoXq3mgVa499SgtwWXxqcmVeMEpZA7Z5KogSrkY",
  "key12": "rMUAkzB7pRukW97Exd1bu7dMWtqk2L6bwS5iEhpZvzVg2LQ8Ga7PfvBpxvv1L1c48rgpSpxXnYA5pQaorAytRwM",
  "key13": "2LxWphHywjSVkkBthzto8pk88THQQGBKR6dbRRA5GtzL8nYL1Ttohhwx7JWwsH2ZDDtDVpYMLrTjr8b8RJ571fd6",
  "key14": "KXBmpWsocyponETbNBmUwVrQSkXL4aV4gNrSHYNDJyhPGwFKgV5gdWWLpYvsyt5Yj8K5pXU5oLHfKHUJ7EtY9Qw",
  "key15": "mbsP89udHDCe1jXUS5szLBdno9EJkqonnaCHJMBpbnBMfVwhQXayFjsAiLzq9ksM5svJhnJYw4GPYKazUdf8wdF",
  "key16": "n8PfyoDtygYcwKntZEBYavwdAKiQ1PRQsUDee4TaNb6wf6DZ7ysBQJvwQhptiwkJxQQ8eyVoMK7GFFHGQKZVjqD",
  "key17": "qBtQveg93PhD7d9pb4RjhVF4PsBk2eRb5enb2LsWV1KnjXky82udCNScohG9HZyG1HPu6j8SGuZoVZP6FSC8FbM",
  "key18": "4mU5AV7b2sBX3EaLczXkSLvi3p9oD7weZVPSpehADCU8FMgPUx6pcGpHVkdUw5Vc297DGsr1gCPueoLfbuvz1APy",
  "key19": "CHhgWJtUW7WVNM1f53CXATxHwfbqTW3FZfbzBq9f6ACozf6PMuGCFVoNLLvughzf3ugrtEeesskBRi4U5MZtcta",
  "key20": "2Ew9hsXGvzvaDMMTvVzSxtKMa7p4sufG7WLZEbWj5F3qLmrDjm67LgERivmoLH9RHHNjNPWwm1LLfZPRrjQ6Rkq6",
  "key21": "5nwR4HQ5uEB5biFXLqp73zpeWb1XrgHm8TFWtTU87JXhmryn552CAsxgNKTGcqQk3oRRhBiQUSEN2gANE4vDnpmi",
  "key22": "62cTz4FTQVb61rZZwEYD1gD7rHNLb2EdzDnFw2JbSUmV19ksx6fyfmNTQxUDqTR3cNiKt3nm15QTMSwUUgCuUPcq",
  "key23": "578re4cif8616USXGcGwM9G5TihJbj14DrNKej476A2ayRv9gDt8HEEjryae377QipDh94tMgiT8bnJXQEJge82s",
  "key24": "QixNoiURiijmW1oZK91phRpYDTVKuTHRF6gtZEDyVnx7t1GKWTVnX6yzsrsaccNL2EuqxYmC2M4ZyqCZ4AuYcHt",
  "key25": "3By13r8LVzuFUJg1no6YPoPDygb8MTJsCp6Ke6PhhemDpwv24KFa9s3wvK2Rcm16PAGLgZHDwH9YLmLodC9p69J5",
  "key26": "4yi9iz5j33HmvDHjAAhmFtLSGiZak5MyJZtoBc7QHebjuVRz8suX45MyHrUYLZ9mDxb91wU2L7TuCwht8pLce991",
  "key27": "54Xkeg8FBVMVMnqkTUsiMCwxqaaLbso4648iHSr4qTVZzZx6qWu7KupdEoDZT1XvA5VPuzFqf48dggxsTxGjt82f",
  "key28": "3wdLasebdX3c1NVNs8aGrNdCeUaAPRCVWZofkA9QwZ857Y9jrUHodu5LFGQaaXLbrZ7uhkyq2zZ86eTFVr2TVyzs",
  "key29": "2HSwqCFYj8GfABxmHCxsDVBN5BCBFxnLdyxuunAs12JJTqrAD5CnhgCmxCQtBcAfsgdTUvyjodi1vmDkJJTDuKBY"
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

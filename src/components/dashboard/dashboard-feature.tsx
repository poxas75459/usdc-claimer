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
    "2fpWEEjzXdQwZQFVbtGP36yS9sjXZbi6wXPfJzxyNCXB96FYN8gHCzrEJ3k9DnGqfgmmkkFUCcAyeK6dm7Juyjf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "695mtWJs4FNv53v9Dk6zkQLa12tM8Ru23w7j8UqLB4GLM5brBkWhqrGhAKrmBbEVMqxR3RfgtjC88xotHFRyBc5",
  "key1": "2o4VDHGC9zbETpzp3e4g1gXib6ficnUx5xUZeoeZUfuwMBxh1Gx89buvRFqGW7X8w3i5E48aKEKazqTpmpF2xc4K",
  "key2": "5idMDMvqikJ8rhk2MGpq9FozaHPJTiENxhaFHoZAgskqvsQWj87iAcsJuRfJRNufpKrzRcXcZAjVbhR7XAmMXP2F",
  "key3": "2f5B2js24EHsJ6GPL8P6xi2khaatP6TU5CGnhDuL7GEHVkhBGpREg1ruk61jpW8yg5HwoH76Grfwyeq8FKiyQKZw",
  "key4": "3BUDPPjbbZGN5rmqWdtmaPs4Adj72y7WfgFVRoY1gHryAwAgJHLQ1ynCNWr19Gs7ZMWs7A8xBHQXYrYEupZW2xey",
  "key5": "3Ar53wmtnfY6xuuxpxbwUY9uCGAzJ5vGhecX3XA5KnnjeAmyQfoyjpMn3TUvNq52rGz558W9MFifVHWvri2uovcM",
  "key6": "3oETjhLL43NYBqTQYHD8M8Mayd5Ss1r6LsWTawk4Dg7W9C4F9jcux7qSqtNyteAsyenaA9uMzg3Azb9rCzc587Vo",
  "key7": "3MrnrCAG57DKsRWpMpjG6jqhnAP6uzMpFhh4kLBx9KtGzUGebqCC9tFEW8FkUfFBsLMAwr7peYZKnEye8QEZDGza",
  "key8": "4fC2rDF5ALktV99QYVVW8zgFr6ZJ41Vnk5X5MJ6PbB4pUAbudkhpLws6bdCQoqaRXmHbuNQPRhyEXeuZukgsJm5N",
  "key9": "59B8rKWUnuRMX7X5e1BjG4N2XjsaYiGFL2VkbgHQkS12Xn97kSXsFNXtPeJSbSgt9Juh5yKYcgraWdy429HkSRbC",
  "key10": "4x8pz7fqPz9N5BNuXK7zjS2aUvfia83XkcpC36rH2KE5NYG468jwwe3es1Q2w9Qq14WdC83dGgMzkPKbY3jVptnF",
  "key11": "Cq8L3FQsNgCmrsYwcMahjScLMKjxGUfX3YJsW5wDxdQmUdr1AHRFZcsukhiceMu5CvTXniosTyvEcNAf8oBGtRk",
  "key12": "5wHGzyEfJnocPQAcdX7Pnio5k6Fy42Vdae5EfryWXURLdNpM7JVhcYyHhbxz46r2fPjqcroBwnGdoNnj5ZuAiaB",
  "key13": "29TzzUhFU69EwJfqaovgGMJoTshCtaCiHHsu1FmH9VFS9dv8DBeQRzE1gNkjX9HMzvfYbPwNSiWyk3AGBnFjsDif",
  "key14": "3Ug44sLRXksEpcAH8JM15Wa4UkypXS2eGspaL3qjfnLYdUmtMwwma3PDcSfqtxCc31DsKYLoQfboP5uKAkvfXQbj",
  "key15": "2fms7GdyNnGpXLskTDpf9CMCQeeXXUDvYMDguUj23cD3dn2J9r6z4jRSYxiAHhxGDzEc9DzqcpHdXs2fzWyg5gXA",
  "key16": "2kcwogz6XkTENsRqJuCoMcic1G2Mev2adYds3LB5P4V9NP9zbLrEkDEgxPR9Yteh8VRTyEii5vNrjkt6W78XzuLb",
  "key17": "GK884SY2fjoeFSio9T8McV3MnKh85vkzNCB7VqWqUZhGLpV2o6Y5fkvsSn1nXUXQu2PW5Pm4Yk7JBHwsNCzYNuV",
  "key18": "3PUELUPVGkPv6Ht3nAaGDaQs8yziXLoWf23uPdwknatm8fmbCQZCFoaF2C5BDupZuazN7h7jPpxXDGrNAEyiVjLa",
  "key19": "62SNNAawJtirSbwVkTgZjCsymwDDHR3r3fVhPcq9Ne7rx5ovQSGwEn9tDgsvj324C2hP9GnerSJxgvQToLw7dGcC",
  "key20": "37ZwASziCkWRo7iH7r8gtaWRMSHeTEY3Htg7KyetYNeBzYcDD3QgJEth5aVmEXofeJTpEWTbXgwoRDMVsha3AWfR",
  "key21": "35p2sDq1snZVDABhr1Nwc9N9ht6LoC42aij1NSzFRzGU6PvvbTuox3LVc3X8DnZNqrjmpMu7fEttPtYEi7Bdjewq",
  "key22": "2AhWhDfJKSWCqifX32oCNiEyeEv3sY4f2UmypGe5MZyjHQwQSaL4mygrzLdvDVZ6vVX7QynE25DbCgwdTMdidg6v",
  "key23": "3VBiuNkPAZEjK4ZUaTeMGnbTyrZXKPHdKYNdGqHmL1en2D7nepMdT8G8f8skaJNFqah9D5tTFcERDES2CBXXxwKC",
  "key24": "5uq2FP3pvwWq4uUsVoSAJKXvq2fLq4awCW9PMoUNE4Xxg1s46KXW9xDerigrtZ29XSCXj3GwWF57HEvr6hauGprR",
  "key25": "2NEZVXLT7qytXELPFVayJsXFHHAQZJXB3iEyPPXBENgNR2nYVvQt8pTTwZ5ke2Spnbmz1yY2KVjty9z2nZsfoVw3",
  "key26": "5X3a6UKQ4467kYzc2nZG7wKCzYmbJN7kx3opgSCAbW89Ya7hHmrMvsF88dddpEXNQ9fZfPKmyDdkSazNy6nLpcDm",
  "key27": "5pm55rciDJwnaXo4QnnqWgqMVxcjKGLKiDKTZPfzhNCNo4WMKfc6DVczccPPgbv53iWorGdeBXUNXf9FesqniaiU",
  "key28": "YBfiaVKPvfYL6wPf9UAySSK27CAf5HW2bx7yarS3SrsvWopCsWZLsah7cquBeKH7PJzviehcafHj9ToaRvZCtXM",
  "key29": "VYSpt1xHpXsAQk1iAvFVymUCJjbMYhuGWJcrZva8fQN195SYm3T9f6XKSgLqbyeqeSvUQa2S11coswCLBSsA7de",
  "key30": "5frPbtaKX9n3TPJVpNnP4Lvo5JNH9AmbcewgbaesiwJS1ErqdHgtZZYwQAvxvaRvUL3oWQSJhLM7cfWzbJ6MYpvb",
  "key31": "2jDM9K52yB1tqepcXPoUNPcuqfLtXpeGk8WcTfcNiVR8FcENQRYM8U5eCsCgkHBxuK6B2T5domKxmbAgsocDa7T2",
  "key32": "58BoNSsGf8PmQjoToKipJ6AviSGKpNF6vmck3ZibPp83xaPpFa2bdsvKpgrLKpCyfcWpm6czn5bmTkXgZjFPV7TD"
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

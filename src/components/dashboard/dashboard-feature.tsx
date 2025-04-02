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
    "5FJh19CJApAmA5qHRV8SSm3PvGqr7ZFncaXsG9Vvg8iTNtkvWK8fRQWseRvJ3XSAezj8uG1Kk8roDZJgjTN5Gtag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tX7bn6KsMmLkNX37xArq3Q1E5Ggjoic8upHryiM33UNNqwGTRXDYkYdQ2LJukZvNFEMY1HghwWd5CSeyB1EzYRL",
  "key1": "54bWquQqCZ3KRsTi41E1XV4K68RExSMatj4WW2AVKAghM1qEuobUf1WzDWHwz1Q2pnxu1gKV7dGhEzpN15Nhn2r3",
  "key2": "4HcTW9JW1s1Bwq1UP2HaBY3gut2pjJLMsGr6qxeZmPkQfKTbF6ud2eGB85DPpMWHbBGc3oVx4oBqNzAbLtiFrY4K",
  "key3": "FwH9UKdsTyhbjgcAqyuTDjAqwZCpFWg8nCxdK3GgAvw8nv8GvaER6UQTnChnbmvv6iRXHcGkn4cgPqQ2eRNB3sx",
  "key4": "2wkPWoZg7cRrFWA32FJmZLpcmSoeLC7FTEqrwrLtepz7WtveNMbMygBSN6htZbGax2BGVyepA4S94qwuE3P1Mg1p",
  "key5": "5NYEtNBUmArs4tAVmuk78yww1pT49QZ4qWhh2K8d9WEx5rF6gNdBiV6i7dZHv8QDa79iQrhGVbbQtjXMBHXdoUMg",
  "key6": "4FuvExxLpn2Ryip5Y6rqEVB7HNMuZLVMEwCBSstV3EZ111k8wPVmmJftGr7UduTU8cLtYM4xGUwb6rtiHYLnWHyK",
  "key7": "LCDfYumDQSCeZWKt6cAgPsd6cc5KHRbdg5n5UFAuCdexzgMYRetycCmov8GTrELEmfq28jQeU9LZEAbkaktLjbC",
  "key8": "4mCaT1C3gvcN8i1uJUQ8drzjPYZ4YCECy7HRYHJmaaJEYWTueAyupWQ23sQFGqmUgSYdDZB7PV8H2JU1phXpXget",
  "key9": "3X25Pgh9tUd82tZpgWEVFoUaJ6tfJoCE7SSiM8fWqKo5fSwjZK71aDeNWtNmjXqhnQC1TggYaasMXJqy5Z3eRsWN",
  "key10": "5LATdrChKzQbr3VKEYzD1vZhj48c1tF8VLBL9kFyMAbxwQTN9BHC3V6ccc28EuzHdGAUjRGYe8Uzqh257WLx2yLb",
  "key11": "4YVMKRtpt5kVy4N8RTyEd18iVNYKA6BxuFEVa78KAvynpigwVuHddyNcvoXKQ82bKSMzxidU3LASmQGvSPbspNzR",
  "key12": "2w2b4nJFDSoejXowq6YEXMCdkzqxED4CBbbGxAzWW5Hz54G539MudSQiC8sgci1ib98NcAnGKTNn3ZRpVZs8PL1",
  "key13": "3u2bu21NLLQDydHXBBoYVhZKiaPqyNF9TCwNvqjCQWRH6CeA673UAwKGB6SXbibJp6LGx8jcp4rMsYoY2tLTAQEm",
  "key14": "4tRfneTDZCAvVwetCf8CAsmHRHS7XkuYTVANFv9pPHKTA5Q1STBGVi7NTfDxG5hqysgKZZRsPYL6mvK8Y5Mcfnrn",
  "key15": "35DJwcA48aaNe9eAwjQUyNVXdYoVSMkHyBka4he4U7qjnrj4cUH728YUVz7eYtbX3QYMomcq1s3qX799sxcoMgmJ",
  "key16": "bCQYJDbX8JRueYRerEac8y6V34UD62SWRDiYdcbh2uYWsPsNFXfHCCYG7bfiPYFULKg2vGk14pEF7anpBFRGtE7",
  "key17": "Kv2e6ZeyNMNr2DcSy5WzChMr2qZJN119AiHdzVp77fEzdq4aQRyyrPzrTjFfxhdJsmxiEsnMtZF3BPG9eqzwF8C",
  "key18": "4gRMfks3UVXasAT6MSYzTV8vcZr4f6Cri3gtpSyE8Bf8gvS4roVQENfXou7Mr3eUTFhy7R7MsWeuTf4cS3apbEfr",
  "key19": "4U1FgMHzLbRQc1mRQTN2bMit4jBJCXdnr1YJwiPb4ydx8Wb4zypzp5Qy6ZTdGSg2B2SfK31dEH9TcUHLB8kvQmXQ",
  "key20": "kKStK4ShmzcQtQk7ZzdRFAagxYQeGguXkpaiQ26Tr4nECqv82uS32HYVs65fZv9cWU19bzTyEZj7uCscnv3jLtP",
  "key21": "gfYEgQtt2zvqqkiqonvvv6YDgSRTG4xDZqeWnng4xHos3RG1wztNZBgjdzSCbW4PfiQ5KsFcZFHNvkoUThTyjeQ",
  "key22": "4JPJtNCm13mW64v5XrNWPsvBYBTpAm4WekYqyvPS95zDH46vsB7MXjiGNvBHvxina8fkZF7xf7bJvqnnGMALBL1K",
  "key23": "55co2hi6SQuaLazZsVQRxDAH6NVecx3Ew9oe4F9faFagDDCbkZQjXjpgQC5qa8kqSYuW3ZCDPkEokgfR1vnsekrf",
  "key24": "hTSWNX1CtE7Vu14ira3cmpad6jsGGcT8WPaWyHYgymrxLHEvtE75ELs9euAqXBuWZN1nrfzv8TuwnKaoi53ty8h",
  "key25": "24wZ2r2hxgbLxk4j2fsXoBceoJZk9R7RnyDPmBcw7L8kPNxd4b4fzVFdkNQiNjoYFm3sMA9kqGnRqJCGayPFvXKQ",
  "key26": "4yEdbBJUWZ8WcNmqpVFSY1GtVm6KeM4gaiYjnCanZzcR4yZcKWVURB8hxM7CxJkmrjNHRXCcnziQ33diTxn9tv7E",
  "key27": "5o6t24VRAHc9yFS1zMqG1zd3bcVANfpobjaLLswuoyoNJ7LA5HnbhS53QAeuePVaidwqhNZUks5T7LAQqXaRr5kF",
  "key28": "2vQst33AU5Aw4ZQQnSfd8p4ws9Eo75Gtz9oRMx8Yr62azMFTPwLxkZbvYXKUi2ZxAsMsikETTx5MNncMkweX3UUE",
  "key29": "2LyLaCZUdhbnyjptkQewMKjwbnbWa9rxVQHZAiA7t3B7BHke9BupLE1ak232tkB7uVTE9Uz8DU5s4hp4Gx9iVuJq",
  "key30": "4mUPpAgVEauuQ5ntX7rPYjD7xGrfsX91VNpGNfnnH25cHrueSw8V4PA3P6ZjhjwHTZAekcpc4xy3Cyu9PPYa82T9",
  "key31": "5FKRk7CuigtcX8SpnZesXqPes6ZFHKHZ5QLU3ha4P6UX2B54qnHziNc2dTV7RrrmnxpM8yWHxwWP6wcWky2tsQU5",
  "key32": "2ZZ8feP8erVBxZWPycF3pBjVRGshVAuJSEDcMUGsg5Qx9QZkP6ebR18PPLo5qUKJeXZ7ZNzbjrQe1NBXec3JCWU7"
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

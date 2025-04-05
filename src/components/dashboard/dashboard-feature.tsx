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
    "4Xdf1WSHD5c2eDBVT4QjUuxo42gnzjWefBnWUQQWGBc33aKGZGRhptkvRUmUHhU78T8AvxcCAV25HKP3Dwr6ZoUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACUWQnXW8WvUsRVnaQ3t7VAScpd3pasoBneA5AkXb5Cgq7zNQMF22KMSRLSGFyLs8x8CmthKUN4ZVpmu8iprDBA",
  "key1": "4iyha6hjVHrDDMDTxcgHbYJkV4WHnbUjw3Rui57fsmCXYHd3reTzawoTWm6UCmhJ7Md2egRHJJ33n9iKYFuL74Y5",
  "key2": "32K9tVcSvrVJrXQNSmgF32nUGsaSANGVZEhqz7pjRt6nNpReL5Y34pwrRXt2j2GXuUN4xNT3NVBboksTwRRm1nZe",
  "key3": "VUAgLhYj7iNSWNdGtB6YvNyvn7u3UxfdvNLyPL7mzyZdJGfiEpkJq3Nt15MnEPiMGFpzggUZLk7eDoup11gqsJs",
  "key4": "3FP7RTzXN7Z8bqR5L7H8t83NW3K7KinBrx9sDdcEcsmweXpvPzLwDFXLSsZYyVZF3jofgjNEcv31pAyVWxJ24SeQ",
  "key5": "5gTnN5SKbtXqQWRdA2epD1Nw59QUz1aGMwnvGScd8QYTJfMyMyy6g7Xtm7aq1cMeWi68z6Y9fGJ5s4NXReKyKXP2",
  "key6": "3TWDMv2aHbmLKQgZVpXbkVPKzFTBQPEN4nMtFswFHTCFevR2GiUjDq4qo1r6yFNY3cLUmXbDBsSxbDPgAbvTCXPy",
  "key7": "3rTcS7Hcff1oJXTKPQkshojf84hAFRdo4UsfR8wg1Rr4pCBLvZ9T5arMaQTYB3VPAoHgS1iuMHrRqGzcrMDeNq2A",
  "key8": "3jD8V4FRE9Xm3zettNABM3mo2pPaq6QdbpfLHeXra2QnoDEs6Aa57GrE7LbzD9y1ycJ5Sgt4wHUtd8zkMjPxMcGw",
  "key9": "3YYcDzV4MbS9vWA846shr6cb4oFuHSn4bud2uVciCaxdUmxAFiKq1naCyoen7f6zjYdXLVHS4cvAPnMSWf7kHgHD",
  "key10": "5oQTv8hgDYwehy5dU7PER2jReu3oZmKKtCLTpgQpdv59ZJK9tELsh9gvkmX8hwgYJiuybR5G7gZHj6ejSCZdm8af",
  "key11": "3bTcHUazLXZAb56rXbEzp4Ly7MKNv8i4e3wNXVbhL1uzHc5S34HqigmZ5GD83cu8CmuN8DoZFcFycWwnqC7zC8rR",
  "key12": "3eeBCEn6zDyhMPAahGFutGiBbSLknMmWTU7UseRH9m7TQx4eEU4kBwar8yF5yagmYsRKwybekhhxVEaqgfAG2d1G",
  "key13": "6374k51e3nJfckRQGC1yDitz1EEpn1enWJCwtDQ9dWYDY2Mpkgy6cuuBScCsG7YqueSKwUn1NKS8dVgCCwLv2kLM",
  "key14": "4tuKZmqx7wwKirGL1cFUTZ3eMiZG8s4UF9Se84Nn7mpF9FE33wHnWUZejArXVKoASXGe2YyxE6wfT4CgyBA2vkxX",
  "key15": "5DdHjnbLWEkxDRccWAkwV2kUantjRmcBPtgp7oj1EcXQjMxv66j6TNqnUZV2a8acTnuXTbsqADb4PL1SpeMS8G5F",
  "key16": "dmHWnyGwWZDcwVtZ4tWXrektKY3BxKNFLuV4gBBpgLP2UfeFNktr3ZiJ8LLFWVtt5t7uHxohi1yBtbBBnnyGQzP",
  "key17": "4XYy8WxKdi47oezgQ54CqwH7PZZjzLPgPpXdSfqwVEENoccD4mki3W7xDxkdiEhZRTcxiwtDgzZsadUa5nPq3Q7W",
  "key18": "4JaGVQpdncRBfxUxtAbibzg1jeTsfZvo2ahbEPR1SNPUQDU7X2BzaPBJhuKensEExakf65avckSRkiT2FvjT7B5u",
  "key19": "22hthjuuxGX9dD8iNzrngHFQnwGTztHW6Y8n5ExFc4CEbsQcaK4s2bg5bZ6siGX8v5ggKAgRVtqStNPoApkBDjaj",
  "key20": "2bxwoZv9kmeFLri8pDaW742wjsHtiQtrZFttYD8MBBDAKQ4H7Fa98XcGBwEeMBvNzQnCxYfBjNhfWCvDQF7zWVvE",
  "key21": "3f6SBVfkKxuit1v62CU4747C6ZXXQCoD23a5jicfw1ohR6utvnEDU271YtBipeWJUDhFig7iSdeP1U3NFRQKPmPB",
  "key22": "JfhMfpPV1TDpvidTbmhRhp4V8KBePYAF9qkN6Wjfkc6Tvx4bi1Kc535ZfVnjzyCC7ZiX7TkGfSgignn5Bvrsrng",
  "key23": "34LaVob3uzqcTMYwbZ3657TgTnFbXCw4j2euzzexa9nZ2ZtVsJgTDPr9ErppUJ5W9hbKupqULxNkgQLXYoS53vk4",
  "key24": "2iaPxSorwpsooVLP8tAWELY5hkbkfdQw9mu6kCpDL7k9SnQsveqmStAGfxzi42pXT1jnfBLDUaG2JaMtLfhNsYLH",
  "key25": "53XSEhYSvNUTxqrcgzSDZtYEkgV99FEcNdvtsfUmtXPUYZi62rUScMDGAZ1a8KHfcyXyJVPip9PneDUaJwPPhmJd",
  "key26": "4H2j4A23bjbJCn2W3NUZaxqs7s73VJDEAXws5H4qe2mgWWGKot2s1VfRgaQwdZFwb2SL8f4unRwAvcFaoJn2zFvJ",
  "key27": "T1uJ88J3erKByHhah2XTRERKLEaT4Hd1PbhX5XUTvtbDEcnouHW1zjKZP5vVyu2XtWVGS7jKoV1VjNxk1XYhrau",
  "key28": "5k6evrtpC84xdVARBQ8PDR6fJY6Wdk1PLc1aq3XJNePhS3b1zbfwmSaK9JNHGwzTGr8vvUXRj7erig5QtzYmqscH",
  "key29": "VJVHqCxGAfQVRy5uTYfc7H1uByhaJyoz4SXrBsdkaua8Hs7VKHLUy6ybSSa4Z2kiNkFa9xbALctWJUM7KTXiigr",
  "key30": "3BTcuUzLQxQYx4PUkWWBtYBG4w35D8QGaLpragR2BSa5Q36BpfCewEHfm1exuKijDGo2SHXWvc8H8AYPPMT8hcFM",
  "key31": "5D9rhJomzL5BeTCpq1oriaWUhVQw1rFNtC88smQ3wbdKdvWeuqeD8rxZ4WYTtiSVuQkzdPsgNyhc3i91pKywd7zF",
  "key32": "45CMXFqQZhFBRwT4aBRDF47sYA8CwDDuJABqZUzqbbZmpvt5yi1w4KoeXxPThnqsxzXiVUzv9zbGhtPV8FYDpHNR",
  "key33": "UZ1GHXTL1SpkqnG1rXLucrGh8JvMsJthhMb46TZDuir6SZMCFNWzYPpX45GNHFccnaQ5E7wyKrtjAXacVSxJVaW",
  "key34": "5xNjnM3mcwHRGxwCQ6fTLACoC73J81QXp9RAd54e5NeLuFG8NkYqziitEFq2MqyjPzM8a8tcm4UQkH1ojKkYijmx",
  "key35": "4KWkYxXjZ2C2kGfQYvcbc79pB2BnAsbHc7CTkDXw384psBQswGxw9CNzp82c1qv2YmkYGXeZrwbXZfB8N63ZCLXC",
  "key36": "2M3oAvJnDTGBw9kzFhW3t6hZRRJCRhmGgGqVcPddxLc9N8HKCiBJqthzPMYiCTHVsNUGewHh1vkhLxtsWgpQNx4v"
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

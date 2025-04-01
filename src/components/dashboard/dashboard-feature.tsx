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
    "3oWVb1Lx8Xhb1crufktw3LhnsaBWaW2fCDvoeiKJCtDTHaxBgrHP5MXfJHUxdAU3n1KAXrSGnwQStkdWDHE3anwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NuUF5ZiUPdTPXp2f8NZAyhyKjw1f997LEKUyL8sxfLpVwuXoE5wjmXp87thvdBYCyLfpznxPQXM1fG2n2x1TNq5",
  "key1": "579qGirem6xjNS4ysxzHAQ3L2Wmq2p4nJW3KnhFqjzcU7r3eWjk1bZcC97XiC1ELeEJB1v797KkvFtC9T5hUUNph",
  "key2": "MJwSVHQEThB3JM1hLtqQvi2mJ74jW6rYRtuR9NGF89KhUZb6ueB4noJwa5M48HYeUmVL349yrSXzPo8vfsSdHQW",
  "key3": "3TKekLvK4ZozFSYM6S5t4QAstwyEmpjCcNiiFstxfzoomcXuhVyyiL2eiAt3j48etW1uW51PUhZasMNguarNfA6h",
  "key4": "4ekMQzTUhrJfgSBXDRcBayJfVaaL78DeCUtniTQRYhjB2uhDgLQnQd3UGguGTpf45HsofE7HdqoMDDKmMZauVfJh",
  "key5": "2tVaz2Q7eh299Rp6ePzZoDQhy8QatRebAb1E7bvCPG2Ue9EzBUaU7wShxNDe4L6NuKheRLeNRtdThnEc22a4Xmda",
  "key6": "Yf7SVukQuKakeQYAapXjMcvGkFGeRA7xTNxEqJKYnaSyLfjjABTzvd8uPRMMzNBCCxj7RmdsVmocTckiWXj6gbr",
  "key7": "4jQMsAto1wxF6m7P2ZEjG8SNr8MGUuVF5oRrWiAEGSFmMju66ZMKhCcsnxjnwy7P84zvSnND5wsMcKYUkVEmBbSP",
  "key8": "5gRXuTBcbKgK5axMaeMUu4kyXfxr1w4e3zswyCHMGpYF3CgZqKvWjJwuuyQv571523TGDDKLqw59RoeeogsqxfyK",
  "key9": "3mSt61CVpMbGvqu75od7B9x53jkchcpSPupw9VYAoYbbsYPg1PfVhA4CtjFybUH2Bdgs6JbRsHkKYKbga1JFXJT2",
  "key10": "WEvFPE4aVRmP1wG4cVZgnSyZW8YfjF5BG4fhfwboSK6YyoYKF4e5dFXyavwyeN6vAxwuZGNM8PTqP4pKMXtvVUg",
  "key11": "59JASFozaQZbCkZ2fXdPySjc4mAjU4mWvjrsWrAPcSZT8XQSByoUxieVfhk1wMgNQWixeacPFKFxZAspBmvcz5Cg",
  "key12": "2PeS9K4h8qXgRXcxWvREFZnjnVtaq9cL9P7gJ3ZwY9rCpVgZUV4obgiiEzbaz3pQeo46C5UQDhYP89BSdjUAXZqd",
  "key13": "2JoEEHdWdXpQJ6BjE2ghVanu363quZcCnVaFJFSUuHU33yoju3ntDe7EKMbfQ5aWh13pRPTpSA2nbuteapJMDrJE",
  "key14": "xToTfkqodgY7nCZ4hRzUYDEcRmNvW41FdA12XZtQCn8Q56DbMcpgUzJqbyqwYA3ydpigwqzeinTWYRZ2GWYWTB2",
  "key15": "46qymtg38ZhMYfEuYGt5nKW3ht9S5cqyw1FZRRgK1r3BDQ3aVzRSVxRstNM2ARaqnPybUB78HuQkmQMrXouf3YhG",
  "key16": "32YU2mA5s1oeEuJdJUHRzoX24TmUBCyqfxVj5sqsBu9uFYQDJwhBTGLrnPtR1Eu9eSjQyn3GwECsd3pcGq89KnVC",
  "key17": "3ZiNZfXMYEJJL32c5tNFxsL5eFUUvHu7ud6bSxbtJqiDpqMp9g9iz3YCZyqaZpUWfKfpa8kcW7yW4jPWB7TRvYHK",
  "key18": "4fdiBSNJPfAzpCd5BSo9kbmzQunAwDWxx7vXuUXsvF84XCq29137q3p8Q6zyegTizF3wqQ4A1KPAvvaPXTQAMrPC",
  "key19": "5GwrJt7G2yiSuv5xhdYNUxyFk6ZaoHNWzQyoNwD6BUWSu6YHse6mZK1QijqcG8Tdk6ch2j4Rpv6Zf59JaX71cE3w",
  "key20": "3pkkQB8izRNjfPYWM35zU2JaZXnDgKDR3Jv913iFePZTr4JwvbykyJNQRn4LKS2yWGSz42Y1ggGeEAttSVKUx33s",
  "key21": "62t2Mz3kB2FDXWbkSoA8T6q3LaZnEmMR9ynhFjPoYRJZm3Xbe4qba648taz14yxewztx5au1TjsZeyRvhrwRKK5h",
  "key22": "5pUAUKAGuSLMji9nT9CciwoUhfZHqZJwJPsCs9pEZdV1E13RxeD9NYtsFvfFwcNr2EWUXoRjwwg9yikYNPyeoiVF",
  "key23": "sGNPhN7NGfTpXW3mCuT2c3emqPtszcR6QUKazguQhKQUPcvn68JieQJrHxrrTM6rQtHBAW7ydrDHaNA6X2GeUGs",
  "key24": "4oe6M3iyQFrTpeK56j9XWagUemdK7GUVJUj8xc9zo9Vv5PeRQTKeMzghvcNBAuYjkpPSP4JxCLKYnkYGwWUFJcTA",
  "key25": "4ZRk7ifshtcxEt6UE3TYR2sPqYVMcU2NppSYpQebHvfLsVoTeMpXZHmZL2YutGAMZNDsSfJ9Q7HN6iyJoVYgnfUB",
  "key26": "uyuErNG1xbfZqDgrRj4hUwhjEYgfb9KfzYurtutGUDJKf3RPW8j1Hv4WPJX3Q4BAKd6APK8hJEmKh848ddwyWS2",
  "key27": "2PgTorRnW9zSyWSq4zVvREuxLegp4FqmenZEf6Rr51nyRwB9iE4nLhvecEZXdMctApAoV8dAAVgGvanqWpT7aHiJ",
  "key28": "2JJ1rEVasmAA7oXU64RgHRc2qMqsF8Sc5yPfLrBvn57imwbd81W6jzP4rz7Aqat43Fe4orstdH6C7sdm63zm2rYF",
  "key29": "5h91s3y5Fx8mzcWZ48oanSnY8uCfjuJxXFa3epZnENZQoe3TYCsQcbYidGjsAULBdc73uzY4Y5k9zXSwdkS4JTt6"
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

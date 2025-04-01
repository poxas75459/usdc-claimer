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
    "2QNTfQ7vycfsDET83Wi13dhXAEYetiMycVBazmYuTfzbvQAectH7nUYeDzs853moiCqem2rZrJcNheLiK4JJLP7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fEVW5UHrmhERGfa72nyMiUaYSYVc2nCPEzWdvExF2BpypYN2CEuxzidfcQ92wr4Lfucwxh8cJR5BDLFUqpcXVB9",
  "key1": "43PbLeYDLH4a66YNWTPCFEL9mQNBkjuP2WAgDQp1AnojfPJkh4PehZ4ZZ6TMoJDQZcHcv1ftB3TNP3Z9Ud9QnEuQ",
  "key2": "kkboecwz7m18tEVDPgcWeVWU7KS9knwPpwcY87FWeaC25M9sD2MZXBvQk5RkB9Ch9Fh3XqcY7bpZXh9RjzqbUo3",
  "key3": "5sTVtKrFpJUcyeXZdrXk8EnTUkj5F2RN3Sz3Nv8rUBWm8keitVZWGoQDiho21hUWVkWQRpcpXGXTRB4tECLSqfnU",
  "key4": "FswtW4c8PsrcUvv3E4sQSJhfBTYQdgw6NuyGbUeF1HxubaRXbtwokLrjqq7rtvZ6oXr7tZGbRQhHZ6uiEwSU2dn",
  "key5": "2UKqcAmipDmacxiZwvBr6frvmzdqM5W1MSiq3hp4JHj4yRy5TXto6aF86MGRcmT7f8cp1SimHBv7ivrE8S2ZjRY1",
  "key6": "4JJZykVdHcqaX12AenwKagbxPWSLrtCo1qFTvak7pfntaH3o2BpPF7P1aGPG8x5eGX84SCiYyAVtrr9Ze4dxAiKP",
  "key7": "EpiD3wbkJTwwEFuxzYKA9ncWgDJ8Ht2yhhhhSh4wXqpih8nrdU4dA93hyC78VuzCmY81vCPXEqgYhxKyJp1qrHd",
  "key8": "WjZLhWcvD14YVndg4yh6sNwDsoqwHvXbmDCAzT8Utn6NAtEK1jNzfg9d6wHd8rRCyTti5mVpfK5hcHcxaidTr12",
  "key9": "5ZQMAcd4u8GbGcaAofMKcixR4CmY5Wvm45uQ9YFka2xheKbjmitcYP9qnc5CMz9NWWBYjtVhLtZ74opywDMDtSGa",
  "key10": "2Wuegw5dtkpgp8n8Q8daKeXZHGeJggLJvMhmvu6bd1c8p3448Juq1e85Gcg4Dh7hxabH8vuPJNvpysBNcoBDd4G8",
  "key11": "32nxdxXghBt5wpD3wUpAmBe7FB4n8dK1RrHFk42YN5VTy72vPLunMXxpsN74MjWToPzKDN7meRwJQQwgs9RCgsVc",
  "key12": "4ae6RhYUBLCFtqWPvfyH3oJwiEot32qPDQuzVpaNiKjKUFE9XmGUPpJCoJHVirzMmpPVhakUgFaQeNtF2U5EPGbE",
  "key13": "4h9sTZ2rBxeW1K8Dy6gX2eRfvR4vEn1KKeMAhNvas6zNNjkEmHs8go5QNnbWNJ8NneBRHurAhG39VEQHW75q3uzj",
  "key14": "4BDbmbUQ8xVPi4meNSP8ZmExCfeRFp8rcdpiGYXdWrcjuuWesTVqznYdiWjhTW8ja9c26dRtxnjhWuerufDsUQZp",
  "key15": "3CTLZu14hP6xNLzQZ5gH5JpjbvchH8n4raxhPA5cTkrMgSwvD3mroqqkyAXpBiF3aBZvhMKRyskErBiQ9W3HY7RZ",
  "key16": "3NFd2S8t76C9gp9Zqb6Cn3iGn1T4CXEzahLsWxKJ6x6zRCD4JfwJhj7QLPzTFEf6kstAU6LacgCJ5VmGkd97Sr1U",
  "key17": "3R7T2w7whgSMUZFwM96VuCob7bz27SugBFArvpAgJn7QUXSaPqZzkBpYbLdxra3MgDTEdmZEsub9hHFbn9BYXkaX",
  "key18": "3EVViRzuXQC2ufJqHz566Yr9TKqUAGAvhz67y5dfGCkVZ77MkkoG3P6YtgEq49Vp6SKyK8nQhbgnfCiWFb1D8B5",
  "key19": "4hQXbQdmqpi4ZpP9TWuhdWMqJXBqc5tW9N637N2tK2tXE9447FEsscjoU3aDJAgPF8pUHf1yJAGeton8mNsS6CfD",
  "key20": "5Dd3oMkB1RNUDn3dPAoaaFeHwcJRQKVyrU51MyWxPHNjjuAin9arTgUZ6PQJMcLBRHRxfy7WzWVKWaernhKzUUPB",
  "key21": "5qdZ2jYZho3wUv1LUAJ6cKyQUB3APGcL4BjPW74YfkxH4txtF7uziuwEYQAZMxGYXFca1bkGVCkbh3Frw6pAvpwD",
  "key22": "3VXbb1KweqT9psXfK4ucuEBh8rwcbi2LYv1N43brVD8MbzoCDU1ZQaoPMosZ7w4uzdLcmyLHjqMfFamepec2bgvB",
  "key23": "5jaYb4syB1JZP4VuB3FNsCGcmADLP6APyTWwH1E9igTKvKtnoUQKgHjirsbJJ8mK7e2XJZJ1wyDgZivFV8s5dU6Q",
  "key24": "4nhjKtQ7XqXj4tADb5pfU5kUvQ4Ais1F1Erzx9q4KQJzuoYcsV8E4WyQbiWQv4oXfMip225Q3kcs6Q33JLN2rGfz",
  "key25": "5PEY45cXFutY6Qzb7y9SzfVQirGX89ddBsQeteZU5jZ8wcomGUTPmV3RhVMmCjCsA1kE4wa7UeWDgvVkQ3eghnwq",
  "key26": "PYCcQ1tGjR4vozr3HbrDJVb5k78nsF85d4is4kc3hjGStNeyVpz5Yus8XZmqzc4Xe1Jzcz5VeevTLSwKqQrDeqd",
  "key27": "MjQmFWVgnqJsUvUStSMUaSPykTey9Mpte5BaEf98hZx511SHtD3QFDfPGyGmXSykAb3ydJTmmennYSwJvpTavF8",
  "key28": "2KdfT3Y7d6ZWYAVospdGfkUw8yc44XzbtsmoLDUEuAzknPM5NYvZbwx5Ao6MumFc47YrFDhSX691CxdzJw4BzsEp",
  "key29": "Q2dnLH3jNbERqQyA5gmrZpVhgv8GNPLxRyuvRmnWDBHGWJiy3ajzwfLzx5RXMjqGU814nS9WRCGiZHDpUJHs5nf",
  "key30": "TiwLxG3a6uTG2xZ7PQxqKNzSv1TmWWtse7gJYiniVYC5igoaD1dEVLRw9jT4CxrGUF5KjXSekaEfAHhtqbSFtXi",
  "key31": "2LysJux2BMTX1tPpfFpsBwGPomxSknbRNkQ4oo3mb1S8MNGbbA1HKguPUz9GjQgQa92fUkMJXJStThXoxqrx3YWE",
  "key32": "5DbkHvnreNqHzPLrCSr3bijEDR7TZNY86TLBTTqiLeav1bsrY5sG3gkbPGHfZm8H9M4W3wnAS8e9gRTr94etdYbL",
  "key33": "4av8i8widekvUoj5CAAF1fhVyxcwdjavB6xVWY46YvdToUVrfdtpnbJibMpNXe44VDM1URQc8CPHCTpKANE4Lycz",
  "key34": "SS3xEN7rcLn8B2TMEKiqZ9tcxcJnZPvLXFhYyvbYymiRvr8pY3DuU4gmUxNgjxCQLp7f1cN9A94AGxdtqkqKswR",
  "key35": "9YPed258nxoJSvkwRGhdy7gJ6LsZS6XUWnNzT3GsbhPsFZiZ8PbDMiv5jo8UDcjbKJEgPj2feVaosvprMEF77FF",
  "key36": "NCSDc1dapJaXJiTnHbhMM91bCh7g96dHPcbBpYjYYjxayq2TXn6GKLS3Hh49s9bMKwKwfDYZz2KfW3o4cRwhW5u",
  "key37": "3w2MQXzaHsYtuMmSj2HnP1ioZAVNVowivBkfnDia3hLcsgu3grLRzAwkfCL1GEjEwzMur1JLoBT1pW3hkoKERTkQ",
  "key38": "4jzFg8mijY5SEtdW9v7MFq3BEMgpGeuV3s826Jy7BicqYzxGDizTWAJdfqhDYpgrAvZdTHzMELvmkWstYU8Fj4bn",
  "key39": "2Saxg1hzQjpRY9GXJS2SZKrZvG2TwqpW3MdW4zjE3YyHKWFrZXVxSJkEwrk8k75KJLMG2BU8y8yWZnZHSKutcyDu"
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

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
    "3f8fLf9QFyMGwtkQ5Rp2AXktJUjyrursdbwZPEetEpZ3wubaykkKeBvY4YqB8wUmFS5zjwPm7y7F1vQoyCboQGma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5188mE6WfEGuLBRZkbpwXB1naeGRtC5zbah45vyD2hZ3it1LH19rnY3GR7PwQ6tE5TfHGSC3cmCH9tjZD4qfFhmG",
  "key1": "3tgtvmsUAdcdtG4GJGLL2p52CxzhW7xMudVL6tXpqjZuNnEtA5i9xEwLQcL8MUaM2jfxQEcQjkaDEXVdCtvDarb7",
  "key2": "fihh3R9zjr8upUVKGHco1sKtsvdSBA7Vu6bVAp7RaJf7Lw5pTBGeHpYSCitECt2GqZRNVC2r1tPrcDdoaeou7Kd",
  "key3": "3errubpZHVbXQeUPbryckQ1sS8RzMGArbxG9YjtKSG8iHcGsDiqUZwwRWgCogHDyPxL5vZREj8z7LxrgjkuAuAp9",
  "key4": "583YpX9FQ4Mi7uQmMNjobarWtn2u5sb1LPxGQ9QQLQhMtZhzW3Av7kMwc3QvAkxoPSPUVCD3zj6StLYdL7Ysp7XG",
  "key5": "4Y3r1njSXUqhzgpqCJZM6z3f4KiaqDbToEaosPQY8HQgASo2oTouepf6vFD7N85mHhXtTgLs9hBm5mP1QjEhzvPJ",
  "key6": "65nCTptMHY27inJ8b9iJKLdZotRk3Z7GHS4wgStoKUHECJDMQUhrW2DTUz3LnFvTBuZtAEBwMFVonandEoC6NBos",
  "key7": "3F7B7ckEKArC8n3Yr5JBdk6qVRyhu3oQMt5MFz8Hjb1feh4wYd7KvC5CjpFanAyANCYuWoNvzs3T1NqefpAa58T4",
  "key8": "3nJ3Z8pDuadLZRTELpfnwQmdEBNeRChacvPi2ZhK2qF5yGjsszwrcjLGVdLEnujDzAuq9gqCWypwPZCCcgwBjbWA",
  "key9": "5UX2HTekkX2KcbSExxGPT8H9ggQWseJ3PZ9xq94k85RedZx8yias2q2k9QjVHX4uGNiaE65rvBr3KTfjxBMWxtn7",
  "key10": "5rjhjmjdB5YFjGg8apatwmquDe9nJ4uvHXa5hMw3QmPLGJEWXyNvM4sHEYN5qMma3zEGVfNNjfPUE8jmJWXcYW8Z",
  "key11": "4VoSPM7PUSRTuiLTmxmfJf53pmietKF9CeF4Ux7ypssPWRWhQkogGvjDvumhrHH9KGS9erAKkJnLoujpYDMFFVUF",
  "key12": "2PsvixefNhuM4hu8hkULFEtzMRfcDUVKm8HVgtfsnfVN5ZTB3SFDySXSRDqULyTt15MmyvRee1QRkex9742qggJU",
  "key13": "2midUyhgZsiL1BD1s5HzSt3RNkr4id2uF59RKYe4cTj9mok16aBKreEx3WQjZeesXWEwJbKBwrDtnxRSVaZeHAsR",
  "key14": "32vSTzDLErgo1UXKqfTFdzMen7R7HrAgC7KZd2eaMXW74ERttDh1gmFy9Qm1u81Qqax5Yg9xT9w8kz9L7kT8Dy5A",
  "key15": "4VoDJAhzNPt1NroLNQW3JRc6Ueb45PYNGomzBCFsxyyi6UpJpYoBbtoJ8oE9XmcCksQ3uRYxkLoMhfKD64bxue7M",
  "key16": "48WtShZdoNbhqMyPkBaXo1no4HBuVfiLytVCMJzBpWPPzcMhCx7taurpn7pnR5y95KRa9Ht4t1oFRTYqcCkwqPyH",
  "key17": "2omruAySGwiFX18vRkQmap61wMvp9LLrSCetcNJRVHmU6PWzjC48uzuhCk4Rk1QLEzNHZSrwZsnBJNkY9p7PfAhb",
  "key18": "4ezf6rvt8FeZtffHKwhoDWfVpbp2zPs3rVW3YxAtfkmHpgsgJ854Cb18NuKHLQ18H2RbJCP2oY2tqukEGfSg2y3b",
  "key19": "vBqjTWCCPeHknDPyqevnJDJVvv1W92BGiZEUyAMGZ523V16H3Ur98aXZgZbTNkXXE45wtFZurjpEtPRk4eB2mkY",
  "key20": "2wE1U9UfJV9A9WtnvGSuLesRS3yx9BJNsCYsbKAhf5aPqYSwpagieMigQni2sPZoBtvbhHQV8jwBiUSPitr3RKTw",
  "key21": "2U2zi7ou4uh5QAGntsi1HizVVCLRyxHdhkzNdvQsr2wQjof5wWd8Zd5DSeTxDvbq1GQwu8E1VMMkHA5i55WrsVNX",
  "key22": "3sZxGPNbmMVR4cfTSt1g3Quooui7UKdsBXN5hkSLhWVWyL7ohMBPDfD3jQeVNwGRpgc2DcfyX3SRfpnZtp1NEpe7",
  "key23": "63nSgLQZQCCswLLi3yHZ7J5Wz7NaFWmUYpGQGkG7dPXYKbrkvkzBEHiXon54VJXe4aFArG7dRxcMf8uE6kaaM84k",
  "key24": "2giKZqypf3QCw9nPGs4NUZ8TvfDZDe6vs2WkKZ39R4PX9cTEnoj5jWCpb82dx1B88tAWCLdjAaUqeGaGZjRuBdAM",
  "key25": "3hJkQ349BNPCHeF5KvEH83qsiCBYeNAygqLdh9mWNqVWuTUfiuuhro4XLvxYsfDR4tfde8kqqs7APYVUfjmPrBKd",
  "key26": "4m5LDdS2iXFMbxLereqDf2S7Cgg2ubKJpVoqgq7BshUmZ33vurKmnFgHu5NkkkwyyBJMW4yZDzi9HfDTpF9RqPty",
  "key27": "2XdQhARdZMADwnEn7fEWwWWhTrzyKsLQ7MnHy7g5sEap9GZRT5f2cJ9mZ29aas2aEb8UwdvhDpg2cCkPPEmkd9t5",
  "key28": "48PkcDFFZy5P7gHNpEquUPn8Y2k39uY1K2nG2na6V8eGVyWzNYGdoFb8YFcUys4pRVYKn9dVq7bQK4ogHsqQBaDn",
  "key29": "45MX2SygqpjvHvmqWgjtYZsCbw74RHnpWV7SgwT8jSpGvXWrdVqm9hRdrZBm7kwXzxDRdfbLanc21sKYomq2D4h2",
  "key30": "4UZvB5qB8gwM4MxbAT1e8jyfhhkoQuxnkjWfksukhuPs2oxLgVns3ZG8HPAVjmHiE7ze8rA6PfYfwyabi5fqQ3q",
  "key31": "132mfSBkFq22fjkCJx4DgPFTAwGKLSHweGPuSksPRA7p2sYPEjAmux5Daea3PZKgmqEXtf4AZfU3GzX9K15G3Ff",
  "key32": "28cXZihEyAFRaGFQaLNuZXWpAJKQpvWXE8k2pChrZX2dNn6W3h9VUxPCMuZgZdeZLzuZytmy29zxwHL15GYr2hgX"
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

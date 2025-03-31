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
    "3S5JTifbFpjx4sp1F3DApbWayyBSJ33ffZCh9NfLJCjcgSYqYX3MMU7tfRs8poeRMgd4ApHYko3XE3gAuzqiAoGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UieMFCXxf4Sb1sJwNh8yXRm5WpD6FyjVpsQ5NjKbGUaLAkh7ECJDA5PPbMEoAjU9CEM4YwyJyNjAoEiKtXXiBd3",
  "key1": "m9VzH1HuR1JXm3QMTK3XnQ4rxs2CQ2bnHntwVmQM4Fn5RpNdoywK4pNhRdxkX6QMNy6qgXgLiKp57sT8DLvnQ4p",
  "key2": "GEEFGcgJ4jpZ4oMr8ByiEDNA4CBQxeGv29Jut96d2W2afUG7ugtWqFnoLJCiwYmhJvDDwxfR5bSfTYQS9MMEVr8",
  "key3": "49EPiTeJrmX4N5fzAwBRKHLK9L6C89RDyYFV1ijcyux5AxWFyqAVMExzVMzXsVW7CurW736LWg9Wum3L5VpkhhsS",
  "key4": "5TbXbx7qBE5Vhe4feFyCoPRVurQfvzXrymLnArHPSuwEAMUamJkAjHbwKERNvLRFJm4VTZX7zGmaCZhb8GQTtESD",
  "key5": "2FZgkccvV86zZ59kQHxtSbJkkKVkk57gcoFNXFT7FdEidwq9Aa9THujt6xeDKwA9WRoeVRjmTbT3GARj6evL1zvL",
  "key6": "63zVXEmPzQWm5ftKiuQ9fRUpbLGGwwJUqxUUZvb2bJTvZpnTgJYCWXeAJewAYefXgBYyiZtR8NuPcRfDipBt8Lau",
  "key7": "5dZPDNbYBDQ1fmDWJD1QwjSbNoExUbF4tvPPo8JWCfgcvXKoEKn5QN2NW1dsZuFXTGe3Z8mvL3Hwi7MCkFQ8qBm8",
  "key8": "37ft754hWS9wuFHJb45asK5rbtvXnYfa85S7jwHescnReMMHM1ccCcY6PFV5vryAtwNYDjU6xJXQwndHeQoMKQxs",
  "key9": "Qq5dUUmboK4cjggYvFDE9Cj3PFDmWJcEwHdTEhXVvs1EDhSsQL8MprNg4GFFhEaWM6XvfWu5KaayrvrxkQ4dQps",
  "key10": "YE8jX7z5bFrtYDyGD3tNCeKTXLnZtZwVr3vc8KdhWQjXv6GH8JbzgUiKJheKCmZzXxKE9H2LL5QzRv5jtG9PKvA",
  "key11": "5UMExPGKJYAXPf3AeHhFsRaKoFd7Lpa13XVdNjdiUZhYHq1MhEgLfU6kQMWF2rBdHzXG6zhtWAdpxZ3TJx3xW4hX",
  "key12": "3QkHGiZrFhagMTHrtJcpDp3QJLPiR9PMziH3RLDVUqyVCQfCyKan8f1P2HWorsiBvd68RguMaRXdMJQktRP8kCaR",
  "key13": "Ku6Y4rCEeWjCWHfd3rcuBGjycqiiviE7Z1URajtxfB6M2BWNorFJTYtbiwmAiFWLVk7RC7XqhJ111jVWWy7M5mK",
  "key14": "isxpxWSGUv395i9fontMcE2fSfwiKyXStu5chXewsVPSR1pMAzS7rsRPMgX3c9J1Gb8HmjQj2fHT2E3dmbDh2zG",
  "key15": "27C2mfev2sFAZCyEcTfMxkKahp3V8wGRkTjgb2pe7b6gQ7dxcCS7W6ZgttX9u2SRTpvarR6EoPHMR9fgRUjahnLF",
  "key16": "9GoTR6XKqg81A8as4YYwbJtixMdRTSr4TsPV5u7YKGWjBGi8PcLFxsqb69YbfvLdn7smbBG4PcqFzQzQan2XsFh",
  "key17": "5CbgrefeHicqtF3UnBHyDYX5uDsLxidZzthsAMw4bdbuaHmpxCSWJGhd5M54h6otTduMGHXG9VhaiozvNmubzAfL",
  "key18": "3HWfD37yhs5xmVbkhaChpSNx2ZchCenfnzkDwN4VM86aB2E1Ns9G7zP2747D3kMRMS69AjsUcspvocme5cEDizTd",
  "key19": "5WDfDXtnQY4wbRchUyrsANuP1pJXqh2XsURmjqn2Zup7QJYLjKwJHwZfUDLcMGntpZhZduVfdeRr6yhkJ98eWZEA",
  "key20": "3hPXMgq2vwB4MT7R967wqg8unEd1T6WUuGC29SqA3vdVWBuSzoZJGcL1gMrMv44gxaXTyrYJNhXpRKLViZRyYgk9",
  "key21": "fdXcdFDWVQNeh8dihDnXbDJpD62ivkwL4nDi74eFJ6CFbDtZD9dbxpt5t2qQGwdzk83EpVxTXd77pWBt6EYxc8r",
  "key22": "5C2JrTTsmEFz9uBJVmETo9a34yqCQ5p43KYrBr84WbgSGC7jDRJnogbHeEda2QFBxYaqtvFQj5xrnWyZ3SjKR68N",
  "key23": "3pMvwhKNsGDxxSkjFqZzni4jMm9KB4fNmdghTiqEB9HqyE4KTcPbnTXMUq2vLTqZ8d6NYciQnFU6RfEyNCmajEEZ",
  "key24": "6nJS22Zu2mznUXTKMjQrqu2JJgmwesx3XK9sUjtRgmVxVTBuaLkuokCKDHMvFeur8xQzngRX2jfvKxMmYgvWRZD",
  "key25": "fF5o5uF37ovHHCWY5Knf3qvmGuzf2oe7mrKGQRjfg8aSXLrbdLFGAsH69kWC3UQxzDnjfMCjR6zqfFkXp7hnWne",
  "key26": "5ZMRAaFwweDqi9cVBTvozCA4u15pZAsn2QHpnTNfe2zX4qX7fLvshgsaNhAsr87aP33KqGHmn1EMPdn9SGv3oy1B",
  "key27": "29dZXgTnpyvRZaQwnVCVJGVW7ey7a7dVN6ifjdgJsndkR4fss5sNQx1MZktF9XRzwhtozG8nEQzi6vj3ar34h7Ca",
  "key28": "5w97GS2MrxUTU3E48k9ARZ6mWsjuwwMLfthqLyqyCXmHeVZFebyK1vq7iQTXCL7zwvrdW9akCWq35fYeWbQGFxdh",
  "key29": "2q6um8iZbhV9tKssQANPvz2owEH9yKAd2GKfDSRkarUsznubQN2nwqeMxUhzQr53uvxj5hM4D1RZPGYk9iz7LJ3v",
  "key30": "3o8ALjTcphDyKK8u7nVnkatCvW4RyTFj18k3NQw3bfqRrDQF8gcXbBdLMVboYL7dfQQhstv5krVCP1Kz1Rc2Gsjt",
  "key31": "5FAVyZBwBYL7TygnVDXL638sUjwXpARp6wt6hgZKXPU5nf4nVhHPqqYS7FewDXDDY2XpceRMG7Q9SKDmVfwVbv5m",
  "key32": "3AfDWZTpGnbShwQkjBCdaHs3ZFNU49wpPKDLvzJhqkQ9VFY2pkzGcvSbX7n4kBu5bsarHxxrGWJnzWiLEDkH3cCV",
  "key33": "v5wTBofqmW8LRQvzsR9TqE7vZymCLUaJSdWBXNwW1CcgDBsNb6jxLiXG7jbmZ2W8tsMJX7v6C1LBetKEiCY6rC6",
  "key34": "2pErJsBdU5ZpM94aQp19YGzjGVEHVA9N4mpuiTZKuqQErbdCcpSt9SwuhMTwvsyfcGKgRhVT9mMmu2UVqXKUmt4A",
  "key35": "42wK89hbc1FpoNgyo946rHJc8zvUnbR9c6CceooTztYJPbsv6xNCDpMHqJLnZYok3dp3i4TAbhHK3MuZCZE6AV9V",
  "key36": "w8qUbUNbg9f6E52L2QUr4uEWC119FdzZuB6vjFv2yjBNeLzJBRaRy9BKCa4cyEjzzNmvGWug4hz5QCa5gc8aPHm",
  "key37": "4MQ2cRijUNSv9P5kMBfdpc1PVLjx8tauo7rDAYmqHgZcya9z2M4KjvDBbJnyVWmYRWDuwkuDbKHq2bsBB2WGUCfE",
  "key38": "RRGCfodUhzaiJicijBe4XCLs6WPmakwQBeM33oF8vjjUG6bTPXqQKBGpuTJemxLYqkEkuujr4v5VhutPUED6YFs",
  "key39": "41taYZejNWaRWnc3iquA45Eqe69foLhvcg1gby9xjEMRLbXZphrjsvEAix5HVFWNjqTUEspaD9Yk8oqQHnfKhzVZ",
  "key40": "2J8Bo4S94F1AzsdaXue7jotDTH6qwR6mBH9ubCUet2WvsDUeqY2hKFgJ7KX661RnDHcjzEy4VtmpAEC7xS67zkeh",
  "key41": "5viCHCm7zuAqrcDXmkoZcKRY6dBHjT6oMi5kskDCfbbFQ2RxR7GH1juM5eswTBuRUQRkLLrGZWSbd7fGQp6D99mr",
  "key42": "dx2o8uj5CvfxuoN8P8yHgw33mUWsYqwiB618VbZD5tbDzEjic6SQgqUPM4Ds2FtQ2bhw2YGTjsAzPW4PnQnZcNA",
  "key43": "PWeGi68JaJ4o7ahw7YEckzMRUrgpJ9d3PiAqt8PAPV8c8hLnKKLbyjbFYAZ2orCSGrVqzJDCYLYCTjjshrgULee",
  "key44": "29pK7MGoTp5QHEaCoofqDHk5FVd1QL5KZSsTAkMnGc7HiF5uonrZh5cZqzLqm9cWdxzMT9KaSqKDoJL2kDz2xQGg",
  "key45": "5bhtBr6uEjtfQnqaJPtq6FTeR8CAckrNHCbbgX1EsEFDQM3EEBYzFs4ciWnVS8J3pkqF1xfJp1TeGC7mcVNsoLD9",
  "key46": "2mfvmDJXqgcsPD2dLYL9uFJt4HCyAVUod5LqUgCQLg9rJmmXggrjwCKdadd6XTfQj3Mt9ihHMkBgupMKRpYcZ54S"
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

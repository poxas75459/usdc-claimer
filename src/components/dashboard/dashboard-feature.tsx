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
    "3fnSZmkgYJYBVHqbsA8s296Jqz9JsJJjEGRKyDphxB4TZu8hV8wXhizhTaHnYR7aQ66RgA2eNQjCT8BAy5xCubZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ohVAwibbP9Mvjx3KR9CzGoYjNwn4hJL35kmMCNtHY9YZgPmCnUkXwJKZQJXTy9nKstkHFVJC3bV2XD2F4CF555",
  "key1": "12Auf6wDQVBebmxhmauc29gEsaf4B6yGKeTaWzZhnm4yPAypzEJmzSkvcs4uCAS75nqokwYekt6dFaqfLWDoBtH",
  "key2": "2vNaYbeWpbtxU5g9fFPPihYzHPyvsyEAoJ76PAbswtJSjeLxRnpYiPM3HyDN3uV9YYmjUxmnzAQiGhqtz75wV6eQ",
  "key3": "3frSuAttLfW2KEcB6g7WcV9QUhoJBvNnakw3jjV6qiq1bwvY6y2SXQdTUNta6ZaNEwusrX2nVCfMLogwUFi6x4m2",
  "key4": "5cmjZZTM23FnHnBQn2mmFAamPm3XFa9BVT9yUoHoJiRG3gk9Woprojs8TeajjLf3Eu2nmyH5QSmNhyrPZL67MExJ",
  "key5": "2vNUcZgBHh3bsHeK4oLWK36DVSSdbroHL4PHpp5KX66HpLyzKVCjep26QFCG9U5mGVVZUPXuZyFgSSWX5d1fUH7T",
  "key6": "4pGRed6dAL5HgvYoekTi8gfyhCcyGc3My13EUuE3kBqwKabuUXCWN4ThsePjz5pFuSY7K9APJNstBUqtUN6HWH1Z",
  "key7": "3nyN527eNzrkVgWDgHCD1eUmZS3hy4D12ba1NHsoSoUMnHbtWamEH4W6T1tmpEovXaPVKAbRyuBYbABx32bC7crx",
  "key8": "4efUEMtyAygBhcPy7pjUju1SYymXSgCsfMGQ5VZQ3WhTmM9dkj2VQzcXP6BxzW8nG8G4mnDytXr31P1zuPrRRKfJ",
  "key9": "L2JvQe7ohayCxbTQ2BfsMJFgyHXGjfPYJWZUCaLFcn4yjFb3TprrmCEYXQMcsUXgDYFKod6pTfjJpvDNUEUUrxw",
  "key10": "4d1dqpbotiFfc8G4hGnv8cKANCgwGka7h41FJep6ci5hkEbPD22BfgiN3KciDbf2grHWsKZC1qfwK5FGFeypGeUX",
  "key11": "2LcvogtbyPvwkanZ9mCRQsViKeriXta2DHvi4ppNgfa8V7RUKxzf9ccwjbeMh81u4Su9VrnAzesZYtakwpSsCZQf",
  "key12": "4EsEAFoQUz97KeeAJezFQspdYbYKbCHDr48jrknnA4d87RN8ds8rMWMqt64RZRmq5T9AQfgizu8w9bjtAUg6SB4",
  "key13": "5Lcs8udix2so3Ef4A6kX7jYzr8aFMF65kzp2Q35h4vpyvSAQ93egpTAVhNSmSUZ3D4SJeXvmMmQry1XP3cXzXTBA",
  "key14": "3dGEZvaksesdrGnRSTx5KkQEcR2ke3SFvBYVboKcNKLjQNLa1M8YR2j98QjRNt1i1rjpkEsnPpiBCxFrZtMxmkx4",
  "key15": "3Q5kCxN99gTBgm2dCbunG7zNVdb128P1ajA6aeYr911XNBejwwQX3vYqHsNHsHdscBM9gcUwtYC61gTeMq5bnkQ7",
  "key16": "21TKe3YULxBGeENjZHEuw36D3FY28RgrPukvAvMPwm9bWN7Swx3H6KriPLSqRYNg7BpkL16MqbsC6czK98FLYNWo",
  "key17": "3MXhwNNsxVybL9dJZC4UZ5HSBaShgSBPHFGNuuDqapN5DhcfUJmm2ehe4JD3mnNpmrdyRW8Pq5ebWaPd8QretJER",
  "key18": "5DqBLHmhpYyomowtugX8CU88CyvK4twwR56urqySRqdBRYv2xJvZUPoowDrnCeNzZ89TvihaZKx2r5gDzs4n1ZeR",
  "key19": "2bRbSY18RKMqKDQ3MqajzBGSdtBsTWVJCskv74uS1EGQ2iNVmvbfkqboT7nNiQLYbVH2qSkFW7tYz6TEYXPALLPz",
  "key20": "4xcbnQA7yMp1yNxqqct8uuZTeHrmiFHwhgYwtAHKU3wz1vKUKe4HK453MMnWADSz3GUrqPb9uJoDUoThZkzMZTxs",
  "key21": "31R5ZirfhD71Mg7agpizK6jT3B17fv1zuQ7qzQsHqLJNdgt2XsL35A3t5hMMv8FyWRvZiySxXGG5mTpfGakzREDK",
  "key22": "3Mdupk9NqWTpSuCyf7siw3qwziBfK7ebWidhkJyydqeGJ6MxihJQLTA4vtStdNTAMtcxk1xJLQEmqSMmm6i3hm6G",
  "key23": "4PdzBm9VPwtKbSyTwSk8cRWj3gXrTZPiZeYhWScXkXvtU62y6Svvvx19qhpHd1tAHpuZ6H6qKfFmDukLMxoHpXwT",
  "key24": "2JfQtaWXCobU8eBdUdTjfzud5unFUBQiYoKH3wtBMCKj43YHhqTr31s3DUR47xZjfM73DX6CKZVQxJNosyCeX9MJ",
  "key25": "5TxKq5kVJJ5GHRGhJcC2p4Uu8LefaijxaDBYcCfqwJ6kQqot1NsZ4RVqjZVwfsoVJojJC7XMVR1yR6igGhbKuYuE",
  "key26": "265e2PamyteVDqzqhNfhXHacd86DDHK232pY6G2kqXy7kc4f3KwvPrVwaZgU84XyqqizWqJ6NqdXoKa8hxKSR5EU",
  "key27": "Hn7fS6YuVEugWSMSTjUgE1mw2QHAqig8c52rnFUUNu7sbUtzMXJx1NU33qJ4rp4x4Da9pWVYKPaa7SQyDZgjCCq",
  "key28": "4gkxo12gBw1JMLjyrD3av72Nv747bp4vVBQDj5karnRNn36d7H25wZUYysxTSix61jFnxDNToGHUi2joXXb7H9oY",
  "key29": "48FAYh97BdqFWHEFv3ZiV8srZnk7tv1v8Xzj95aWxQuN2YBRk8wzxbpFxSjGUfpbpZ1Qz8iDQquYnHvF1iuLwx28",
  "key30": "4yE1gee4cRuS55CBwhH1NxX7McmkBjxWSwdkn2tqmRQhdcqRSWmK7ZvqdL7n7zKCpYfstxkgB8cnABGw98kPKfC4",
  "key31": "4ZzAuwUWRmddVhVwVDJgN2HMw7hzckDeUFCvdobQ4kAJ55QACUzHCVvawCAz4ytXVmfiuoptx7AVyt3u97Jsnzq2",
  "key32": "2j2UAdmBkYmkJX4z5eCbeZgF5GJFX4Jim6nz3Q7tt8oVZ3BuDsZQJtW4NVT7CwJc1BSXiD2Fsp9qizSTJJjKdaNo"
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

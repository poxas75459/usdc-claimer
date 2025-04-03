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
    "4XV4sngmMMxdLRwbGoEm6ev8oGXuukpkP2w5C6gkJJEnTkBd3doZiobGqJ2k6HG3M5M8bYmoHC6KLxiouUeb1HQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FW64thiH3gZvYvfNbkrc5PgVW2awyqeNrwF5zyvLrHn4WhkMKR6ZCNmhPriBppTuwGYWDKuwi3L5t4hPtP7Nya7",
  "key1": "3aZcEmz598D1FN9YWip95eN2hrKb5rgocTkTXiUsye9aBYeuoVLScEtzuw6T3xWGfpUeRJtKDD3NUS6mAddLgY2h",
  "key2": "3mSiyFYzShcRcyaDuQNjKNqCXcUsJ3WWb6t24P1RvZc4xSxRB2ZyKPy6nnZxYtiVTEEzkxUz6iBqbcbAkAmADoqV",
  "key3": "3bDRYzdH5SpMHEabbsTqBnqf2SHK1QCbvzJTGLFE6agW1ixhcHT12E1Jv9m6QYgjm8FMfrBHhDGhnLZ5jAn9giYa",
  "key4": "5aE6bBeppdqSsfVB5iXfU3wcdEtJdCHzkaw8ocrniDRxT3tm77YP4H78yg2jVbHEV5fJD5oStMR7Ay2kNj6VeWBo",
  "key5": "565QW1cyNhzHmhSSpjbhExuRpJcgZy22u9rXNwNeENcyXb511UcGRX4CUbWPY3Xfzqo3sHJYDweVdg1CVx7q5eav",
  "key6": "2irZV7KTAreBkqZLoRfXZMvXWbLZigzoBT6PmLxg7crgzd7oWt4oojagmuB2N3mV246gunKBEz8rJY14T4V2joeq",
  "key7": "2QY4VcUbpSKjyjrKjNsQonp2VsmaaDGDXUP2j5s43qSpZwnwjMMu9mTWAq6Bp1uJghxLihtxqGWERUSsyxUbBivm",
  "key8": "3nFAVFc4q1PuGxwwaAT7NUQSrg2HB8P56N6cRW66QyuqR8jHC1ca6cQJ6TRF7ekj996YSYeyMRqr94oEFnZsXAgx",
  "key9": "4sAhHPjyEJGxvjmoMznUbwN8PiAVRmrD43z9Eihp7wou7fkoQdNc18BCeSmguq7Pvj3y5gVopNWvq1H8hFqh6V2K",
  "key10": "2iP3k8F6ar3GhDvC4Z27cKhnudE1VRmjc1Q2m4kznk3se6MGuBuj1f3SbxhzbaFvyuydLVQuB698CzehAxYNbbqE",
  "key11": "5uMKo3V7pPX3vMuifahFa8Qw8QkDkCP5BE2AYzKha8DfKuz8LAcCCGuqDd237V4Nb55hZs4mqqi6XzKiEYw5vcev",
  "key12": "5XmXCR9wsKK4ySeXkjorXiFRndbKGkqtZdhiHhLmRjcyjRjMzyq7hFVWDYoDeiEyHiFVs2EnPQ8ioESaLxePUeKv",
  "key13": "5gGdrPSFzHfth9GFQimoarTtUuiRVWvN2frmv5dtAdLYLCXPPeMugLWJnDD2PbgbLBXGoqEsExTnTqTtEt3urGkP",
  "key14": "AaA9aMjSRsPtNh2YzpUZwysCYGWfWdTq1Nr2N3TEANBt7bHU2ka8EjTj89ukZzfNo3HymLRRiBDj7ZsBCeA8bms",
  "key15": "3L2eHzAs2zvFz5zXki5dgfHXcDSTbfTwnV2Yz9WfKiPTb3rGLys9TRpkzd1EzMeEcbq11T3MrV4A19WaDWPnunFR",
  "key16": "4q5oQtP9XRFJcGBVECAJR96hzBP6NvLFk736TnyBtzNv4jbfo62nzzUCUCft89NwKm5rPhBVrCaogDd9qH6jJThE",
  "key17": "Lap262w5pcZwbrpYaL96kuR66Jsnr4YZ7b8zFRd47Kc52TEX56oSYGU92mrYXxVH865ePoJ63TyuR6V1GfC6xTn",
  "key18": "P2n9MUDziDWZmoaaWbbuc8SynJqN4LTpMqpKQZtmjNCDGLHBWMk1LkWeT7r1BaLrAt3Zqg5jqn2JP2icZuChLHy",
  "key19": "5VGK3A9hTnb81qZ86QwsqRU7AduY3bEBdoCJGmc6oMS9LFdsuFAEmrDzcSbRCBDuQwdUVNrD1fj7VqZbKnJRqRGG",
  "key20": "4bogweBhNQHvk6RRVputiwykhHmAH2prUtanZSfhzakFNQhc7N3t7dxdZShmTFmy8FFjXgivYtgxhwrpTEqm4G8w",
  "key21": "2jciMs57m2yZnxMbvShKZMsdauuTDaTfFtea5kVVYo6yyHrk8j598H3WHawfndV13GXshdu8Qkc9Lyfq4d3zxLqN",
  "key22": "4GYQ4PZTzAtoKg1n5pttBUupTsb5eKiM3YTfJm9HaciwguoUWeUHSomuAJgH379XXPu2jBhjyG48JCAH9sFu25dC",
  "key23": "4KijQi2nSh5mCdh56tfqo8eqwgzqNvV25TbByi3kDB6633vakiFtC4p9pWgrVe3kaf5Fn5jsxg52YdgzAnYg6H1D",
  "key24": "45WfEqrgTbYogsAnr8U6F4sXzAkRjfE127AYHtfQEVFoRBbN4Ddp3q1zocdDDRYCq7fP2B4yNeEbCxJDbifr5aZ3",
  "key25": "ifgQPx3hchoB5z3THxRd9bDjCyDn2727AqsN2pfijzVkbBTA6gbjUVUNFffPptBG7929VeqKMkFELkvhkv47A5A",
  "key26": "P81PbBm4WZi4ngX77Gdcb5JkE7cLqLbWnZy11wwTSaXVLpV67gsfCjgD3R3n1peUocdR336gz1g9bfyTywqjTtT",
  "key27": "haqV1EJF6wBXvJmxxK7d6oVzSzoftf7wfea5CctkLz26dkJ95vRpF7C2nQPPbkCLaaNBikta7ujRP8RHGpahge8"
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

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
    "52XKQxqmLFu4vkqJ9FZVkcPCE41pDrRSksvKMB6pFZ5iFXRpbhkBHxd4g872UEjrjvyhcK1FoZiLiYieM82vPL7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXQTP1o7a1AswWFGvFrVNXDUys1kGwKx5mydCZBbh23Yeiz7z13GCo4Cx6YSAyUFPia8mbe72PvvNtGreNf1s5e",
  "key1": "3NDdVSdh557itEpXwKJg5HMXDVZtPc5hiPztQgRpkWA8UT4aKKAwASz9P3K9VhFU4H9xMxLWYj8zaQ5ri7dsGYKM",
  "key2": "2GXXzos3gmLkG3uHiG97H2aCa6Y7RxzebrQM3pBJCmsf9ndj3rqLQJLMZcDFDV4tRZEnTJYzNrSPMZgSESqLpXaP",
  "key3": "4xoEQ747tqzBsW2XCxhgCeRyKxt7zQHvGSKFxZCbuPw4Xc2N8NLaEJyqemckT9KaK3vv9L8NmDPYL3fWRLeftgjK",
  "key4": "5RoY1P21KqLQJmL7PaPaS73e2HEFFwGgYWNhY3wR7ByGbe3V4eg2fMMvAvTwTXFyw8vufiaM1ntZTbUjXE4WFpir",
  "key5": "45eLgmrUpAroUQBWmXT8uwpJUpf6Qfoi5dfMooUHurWox8v22apAbveZDRoZiYDjrLTVTfEkVcuwVfpkRo5ssw4y",
  "key6": "4K4KK5WBnkZhym71yCpvoMQes2nKdqtKoxiXABJDoWQKneZiY5A2ojdmD9LFBeNiHEz24nwEUJUB8JEMW6tggeED",
  "key7": "3ap56RVqfXvg7NSdtM4qUMv3tYPcs7C4GzDWbyePcYrEdoMM3Lr7jrSxGm1vkFiTVGp9QNq8h85u7MFN48KdLD7g",
  "key8": "3nuKgPriSFt8dzYUgVw6VSKYazQpJtjNSSJdN2YRU5L81TkvjzyiMeArKggnuaPjH17XZHAKYa4a5AJo1p5JdDy1",
  "key9": "44M4pUX6SbKgDR8LFxfEKXEkBdUMm4dL3gx5e15hBCMFrMm3j6h2XpyVreHYATMKoLTMtTSeanYtVtzBZ3V9AukC",
  "key10": "3tbtiktJ8de1wcwk4GZoruvHqV2poqWxuSS9WBZvpTUiXSz4UxrmS6XrPsyANy2fUSKgVSwvMSgaAMXpmibv6DMd",
  "key11": "2U9JQ8rvACfYQ1P8WSgoVN9zN3tJ5DHr5vDXF45dXiazBJqxiALCYsh1SzHwHrGyGrNGe3YQhM4zzw3kv9BESDjW",
  "key12": "5sLCFnT6LuVr54mKoijER7uANfdJx1g6gbXJGUTbZZbWV1utr6iC83gvsCeyxd8DAbMbHDcUyCVhjWAH1wnVBZjA",
  "key13": "5qtxyrk1992fDDoNqsT25wQh5FfiQJuC3cnWcRYtqY4CVnqrBgERMTqWs4vRREPjwPCARM23cbuaAmErQnXkVrx6",
  "key14": "367uUkoFE7q2ptguwEcBLckpv8VXqjFUCX3cqJBtGoEjoocwpZXmzZzwv4ykviFhW4uVVpJi6zN5dNAcxnnDNpR5",
  "key15": "4g6412rCruyZ3gx7XjG1PRMTzy2qhQ1kuPY4YZh2TxuUKahfpVutEHFiGTu7T3LKKWGwbqoqvXXF2qV5omMbjKLL",
  "key16": "37GapoPT8mALYEa3uyM7cahvi6bUscYRKsbT9TGqkCGMXz4daoz2HxJgSFQutRPTkEhGBDMnFyFsvn8Yy8fkay1A",
  "key17": "3h1yUgC6UhSUeTRxJQt6P2GFgZfCwgz7mUrXveA8cNczAwpid95xuJhrTTYG9NMrKgGuJjkYDYcRknTfH1DQzCVG",
  "key18": "426MB5EqkM45YRMio7tqo86WnuSp7zv56KhXbAbCP4jN5rGHvJLZpmgS4H7byVVMPSa7KdXwaiSZnaaGuBmPRVPF",
  "key19": "5nACaqtbQH7AVSp3iR2C527JaskMif9f9roGpchDMUhCqzhkD18BBgYPPo8B5SkAgCwqL7LTP8tHTEf4A9ifMz2D",
  "key20": "2e9zLqygfpGVmmkSAq5b7K36TiigM4bs5USQh4WWwffchCSNjM9NcG9vZtybosskou2o2sYFmk1mQngqNMFJqXtY",
  "key21": "25Dy4Zto48ayiGrrP3te4kiRed7UF82aRcSx2rdC3hdLYAF6PtgGSwxxX4wbePszSTUdJUtYnZTnRp8VNCvW7huy",
  "key22": "5wihMXX3Pc2fg4aFqmfUtniiD54m7v1Xe9bBS5c9Aop4scaAEVJQrxwXEYTSdimskh7ARjiNuHN6P5UYDB16xGNA",
  "key23": "N5j8F8jSBND435tUH7L1ez6w9AgwnDXUsMjCayvUAD7pjLy1Prg7yNZUnYd6m9j62tzx62eFbZXkNVosaYM4NYB",
  "key24": "xArXmNsfAk6DPnuR7eEriJT5u7cAgH7zQrFAhmcqKxpxWC1X8z5uPaAuZtHKGPr8dGeKjqS3eyRC4vxujf3Fhni",
  "key25": "5GXuqNzVxQbiNp4gwwdimjjt3FaV5ssH4qHkpFpm8cWRRtSgJvbafec7EpVXZYoL6QcdkGXe5dFZjQhWvagYhFVC",
  "key26": "5WHxLigNmNq3g4ST5A2tZWL7XS3Hov6V7PRHEPjoyRcQ1DWo7YDBz5Lk5vrd2XjSESRTxEwDd7HYhTpFBCctLCik",
  "key27": "k44EmhDDiHRTeLwfKGLpDCfBKjUQVzG8kZjT1VQBSm6YQHC9rt7A3WJqsyQKXWoxZtNTMv52kE7PLkmeKHBvZbS",
  "key28": "W1GQqieAzvzw7moaEb7BMwDkV3qsodaeY4HVNpsDnUVHf3rJc7WpbK3JpbR4Ve7aMHvdL5WtNSoEE8krGpNzzCX",
  "key29": "26vaKSvJoSHPE1ybP3jBHsqtzCJK9LBXNc6AWtLhyr7WazJt3YonMPFaio9YdmheqpDQ4oMvwhroZWovbnhwWRUd",
  "key30": "3W7opuGNXXvmZ1u3gBZQJbU2JQb2KxNT5CVmmt5MMyYSW5dWbKALo7t18xa4V7odMDALiUS2Zcos7cYkBNbaQJ2y",
  "key31": "5X8h2oG67EVx2nqUoeUWs64bczzy5HmKSD2KAKDU78MoUo9vz2UkTG5tTWhNqyJNDySPbDzfH9cnJG71uYEEoKzn"
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

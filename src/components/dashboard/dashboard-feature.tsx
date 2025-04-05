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
    "4qeYgtb561GZNfGcxvPwoHeHa7Lw3oCxpEdhY8kw8m74XcRTBy9nnXNdVtmKfH6Nim4BXyVEDok97o1HKubkDM3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ChKAX8T2AYFrRhzsjuWiydBwQRokkM3HgbAaF35HAEozZXaMhLhhs6oujGN4ajSejFC1q6NZknnM373vL9A8M13",
  "key1": "5CDNRHhje4cPpjbZJESkwf4QkXZvRJ3Z8vF19LmCwQtkotFFZXCqPFSr6Nnc35aga2daQHHdVRaD5f19MsswQkKT",
  "key2": "2Uh9chYd5bMqkdvR45C43Ye2FhM5ggzQKzu1rN3tqR2f9HUcrfM93zzkYTB2rceG9ymB4KLbenbTTa5ayFMzwfKt",
  "key3": "EapLpHcZyukgWRWD8ebKssmf7LQUPeAi7WMZi7phRnLqDy66JNGfvGy89hom3EoK1zCtWBtyhQCdr3fyFbErx1h",
  "key4": "3Gm1SyUAzF8uae15oJtuzCijdmyAYBMK4TVFYYLUrfon6BGxzebHpbvwSgYLW6Yi6SqgxWk95kmvZat7HZjwb8bu",
  "key5": "5NAbzaHMcx7NMGfQuJpswDdgGLvLuQdeJYPAi31DRn3oQNCyd2kyLtKfpP3QNb6vvjgRW7t2dFzFBcJKhiWf6Br3",
  "key6": "5PQdb9D9QajpPuEdAzwX3BAs8Vk4tSkgEpwAyqok8UQjqDJiFY8SMvDVAqfGNUtcHiP1XQNuGyz2n1sWnYNBiBdk",
  "key7": "5JqjW9QLsPRZ6bT3roPBmHejbZtfX8kRkty7Nq8upHXsrWTg7z9uL5gtMNZcHGWmZCtD38qMFkHRrX9Vr3uM7QfL",
  "key8": "4G6B66PmEh5S4tAwWxWDnQ9EqsWQpTXe29wfYnFmgPV9K81EcHJp127Wn9v1ChY558gbarQQXm9Bff6AbYBfTb41",
  "key9": "RN2Foi92qLHmStzz9KSgvZap9dZBqkEwVCCGz8VNomrqR9XvUAYj844FtQDHohqSnHamuTRGiuVN6ys54JmsC2X",
  "key10": "5BTebzYgYBnY7UWPfznNrNq2HNDowNVWT35YPx5R6zdnLC89AvXSNFNV3xPaZwdmDbMhgdSgAqLyvttZGeqXbxxR",
  "key11": "5TAaWJ4m5dzU8kpoFk9RZXQMY9uqsFBECfbnMmudZ4fnMWVL41E6roNJ8U6T1BJWJnPcmmS7seuPM7e6BaDw3QED",
  "key12": "5DW7uAFwuCjb9eVadwwkLbWb5RqxtaBpoV6Z1doiZQyGFkDBHiGBKLc7hkyZroZFWx69LTXdiRjDyvhyVRRUpn6f",
  "key13": "2BewrxRZXNPVoXTeCy9c6xfL6amVaa9tLQR9nWsbMgMvNGJMDXPqpwDoduGGFMp8TzDmd9yYQGxeKb6UoEqZRq9A",
  "key14": "4YycuGkzyf8i6FiER18kDtvQ38WdqRnDxLyZrzqhVQAC3s1zzeZcfXhwdqd52NR8q3spH5zv8jCYu7YpdfXSCMjn",
  "key15": "2311juZJGzGeMxvpMHckVP1Mj1xEocSNxYeueyz4mKw61Lgv67skb6Bsj637RK3hhRy61YbcvugGy5z5FKKM3wGo",
  "key16": "2XHTgBesPEjKTHRB6P8rtpoZf7qL6UmA5Dia3nUfZuUAuhTgApQUgBWn9b2rgKkX3xGcERFNMKwm5TtnQX2h49JE",
  "key17": "2QAQgMbocVwTJH6s7sXvJkZBxEAapMdeWK12SAFj2N4KakxuWrWv2w9JgYVDpgXRa1AiWXwkQas3Twk5qv3emxV8",
  "key18": "2ev68nsZHKgiia1MBjQKCjMgX975aTm4cVo1BMrPsDcp9u9SKJYvvg6tdH92sjwiZFo89asfLf2Lc4W18FGABv38",
  "key19": "3xCvVaDmiLF6LkRbACqMCWnU1QFZUjrZHzUsKrJoD6phhKM1vmASU63Z5kNGaXXAEhsaj4AewH6HExifpnhrLCXg",
  "key20": "3ZHKN2bfcYn4ohYz5QsmRY7ByDQWgyemC12ihhqxTZ786NWa6GfCyTNTMNMYsmhP9LPrsMMY7p7tVSHn46pDXusy",
  "key21": "4vD6jL1yiuPDdoZzmy5vsxiNukLazhb3VbFcRw523z3qt6j1fV6wNBP5nSsEFZFA8ur4SFVT8wzGTgcR4kiv9NkE",
  "key22": "3xGvVGdPhBJBWN934kAQcS3G4pC4PDgTVsGXmDtM9kXQg5z1D18pem4ec8YicWkM6VrmfDBh1So7f3AwBHn3cj9R",
  "key23": "4PQHPCwnnWspDk8t4vyDqGcQxezjtXW3y6syDgchMuRJf5YqzXSRBqFbCGnYoSCa87TJX7mzWBzSzwzpQoQcok6p",
  "key24": "3r45AxN537SpsLiBxE2618G1Krz1tYZGQHGdTink1KSbqgf9GgmdHx9AALhAdthAf4JU6k5meNzZ9xwAzJmJMLvN",
  "key25": "2PhGESJFV9dAHrPTuRyeUfZHzrZ2wZLYAr6mXdtBLGVmZ2VnQkXPzLmMu6sJMkrj7PBAJWUsHySfHTB5YSeAGHQ",
  "key26": "2wkWvFejnLKmmyAy7LfA2fp7c2ELjRGyNBPA3hajFrzH1oyBTDk61BfjHMXPNgjCYhbsAm4yA6pRFeDux7Puy93S",
  "key27": "SP1nT53AUMgSXF4CgtAhahqfe8Zu2wnU8op1QK2SoQBfSR327vaJSYCTHq8DHGA5xaLPp4rGgUEW6LxFMt2i2dq"
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

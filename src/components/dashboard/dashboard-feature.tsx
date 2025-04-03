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
    "3XQEyH1moYaGYj4seVRztSKJPqBa8CV1wFXwNqkmB4Qu8vAQsVrMr1nVEAEDginBboY8zuFqqKi31bBGZSgaoAR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36WbKeXEC9dGX95fFyDx33anpcG3Emvm89PoT7c2bZeySDLFCVAkWoAqaiLSz88YxWzjfEMpVsKNxoDWgopznFBb",
  "key1": "5svK82QbB16HFVvZAbcmGHWsAhiwtteVwU2BMT8odKSnTFXCstzwEfRrMqqHDAtEuiiz3KYKw8pBdV4yAaeAWu3T",
  "key2": "4XEt5HdBP8yndvpAx6rEpS4EDYMoBw9RQBwWXRsyuTDWGbupDNjV4vPiMeVF2WkeaPvPB67TFf7faeBbxjQtYn6r",
  "key3": "5j7Y5UGVkGkBoJNcKrjXHmdvDBoUKjHYfxYUNcShFPn6GgfYEgEKvmTDEhqcxoLKtL4RFKwXkq1CSxPVDu4eTGhs",
  "key4": "5hekNRocZRtnvvjmCNpDKZDkzHEZPMSZ7ebqAwZmaA15zstZykAhV91vDampnXnPeGr559DhDXT1QTgairaXZ8qp",
  "key5": "4hmfBmJQBJjwbi5jxhiLPFJvxhLfMFiHCVbiPwVefSVkS1KC2Kn845HhWZ14mP1vfxzV6s6QcyVcTXqojQrKNPYb",
  "key6": "hDHc69SijikJHqkj36zxsnRTWE3YHqVf539urVJ3jNBH9RBfUvqGHLCQdYeDip4zSGyZGhEvgwnsC12BsPfCo1o",
  "key7": "3ksVvtNUybpnNZxUL2du1ckdavoyduhpaufPP38yfbLS449z7C2XCxKfQDSn44WcZqPceWrwdAsw6zQHAnPh2jv8",
  "key8": "iVoGDDLsevW73ajTwmXgDWgic8QxykrKt6LjnXQ9UJCMBbyonaSdr73QWjpCX8LGjhcrahpxG94XtVC9CRuEiXV",
  "key9": "4uw2CaWnByP4kX1hEVprs2TJDszvBYaaFSuGqUfkuhtYfu9TAo3pgofmGxvJAJg4bohMzjz1GYoAkPHbSDwrAox9",
  "key10": "2GEM6mawPWo4T8oL4XRKvDgVGysQqZWfHy2KeAUMb1mxsvfTRAYGZWvG3kyuouCrMMMiWppMW6Y72xZ4sWhPB9QV",
  "key11": "VXnWzTqXJSPwjcZk1o9eP1zz3nyCXT9MYvntYYrTEstSEyLbVDZLsJRS9vg446waju5aShAEDjghksd9pH7jUiS",
  "key12": "VR8GVByxxhTEEtapZ1kDQs3pomNEto4mEKRfyTtNeLLYz59ArpEBbjjnAa9b2YDKkauEkpXrHYZqEvb9wodpXjj",
  "key13": "5xboqe95r3f72CaYo5JQR9GspruN3qSCBTNZMqtd3pRwM7BWPpxp1wQ4vFRLbELvDJk5g4XEqXwpGhskzDLxuvNu",
  "key14": "3DNaQSx4FQz4MTuYEyMXnALVRWMbqgTXp8JmmM1SJ5A6akHHFeDeTpnaFxdjFWFgofPm71qzuFWqPRoTBtcZq86e",
  "key15": "4oKaKTyFYDeN6NFAsWHwDtqiDs4sSV8zYPmdijv9MkjvAjChJHxw4rzT9ZnNYtHaNFaLdATB1ZWHofDyCtWKePcG",
  "key16": "5ACFTGcmuWmMMdYknJwEx81fnEV1ufCfhm6R7Pgy8fdyRWk8mmfKHxacAm9k8zeovEpN8u42m6CT7NN9WGsEixox",
  "key17": "2fpsZoPmz55nmSF4rK3AqacgkAQKjRcrwDAPT55T12qMfrrxborw86qan2rUvLWJBXoZcKGy1nYYkuNjUWRbzfPK",
  "key18": "4GwDxio1QJKLefMTfsy6nQ6P7xXSzeyYrTXJjMyqmAEA55uYUjRgsGNTpHhALo6fCqPpyfwTqSjoaaEoXRvSzMVA",
  "key19": "mXFsf8QixxLarhY9tDPpW7GpXzgJvqM4VQxpyL4z9tSerkN7mYuLZSxgYJauQoWoEuaHv7A9weVz3kG2khyTyCN",
  "key20": "5tsDhx9oWfjSRMhrQgDpfNsKBhXY7jKC6XrnFG2Nwaf2W1Mfte48VMBAFdEVf1PaMWYWD4bt8oLdmKqZVYGNFsAY",
  "key21": "3vqGEbHLqnF1rJ4Si3xeprpvnydAjxbs2hu9gGxZ8n6rb9uDeB6QHDo2qqD4pKY1XbbXEuBc4djwbU1TEUQD87Un",
  "key22": "2PzsQpKwHRtfYEYBpxikCevSfq4JLLuGcb6fTzdrCsTuKYYXrn1AXKz8K2ZcGdmTrmuiwoVjeCSqRrf5rPvZBbuu",
  "key23": "54HpioqLRg4aASPJEyMUo3m4TzpmZ5w9xrUNLXDadV1NgaEWz9ByCcdgCtysxxA9sJYFANbFTz2UxY3BsXBjtiPH",
  "key24": "4Nkq23qxDgtECao1DDyprdXGnTCDiPPagmfZrRFGXHvajaFEwyvmaNtLxUQQ48dP4GtY6iP3HgRPqFocQ8BRvfL3",
  "key25": "5SwpLtXQT2wNxR8aoY6qvscoXLNUpvwVWS8jm5UjAPifQsGMgmrVSnPCVXZMQvDvEzE6ryWtNLhKVSgzQcehLrcg",
  "key26": "7t2x4zgNQQGgLUTreVYh4MvqWkNTW9Y5HcrmTLTZZ7h4y9Mv3WGemwq6gPDBYXvY7mb7kAoiQ6dQHzG2B6ciP3f",
  "key27": "4pxgXFMYQvQWfpxtGspWZRi4tobcXJN53mpnQ4SfQLBxPwxUKB3ytZKgtunmFL3fUnTMB1L6AegXrLy7abgLtS2j",
  "key28": "4ahYUvUwbotg8wJhi3opma5pah48brgvS8QaCUe2KXC2YCirHtYRcAn9MJpFhAX4csjyTjgeDEq8CLmAkFRimnJt",
  "key29": "uJcRV6qVJn3SVb2uwUtPaqynvXmQD8q6yqjW5ELK2vSTjfxxw928HH8JfEzm5KWnGjBwQmeCht1cC5SQysfBgdX",
  "key30": "5YvjhfX1ki6BxQvBMPwnFuTVXATnuTMofBiJcGS7A8QFWS6f73eRikm176bWTT8cqkBqhPsyye6qV2XyRRZVm85u",
  "key31": "31GUoBXD4Wnh6KpVoSz6viE1X7iNUhEN5nvHD1R3chs6e9hyaM8xtbpan676K8F3X9wFvArjwSnqp1ABCcCsshke",
  "key32": "2nPURPWxB3y3KYK4FU6KVWdz2HdytwyEyQVZpF3ZqPZZUpV8rbimhEL1cdCSMAh6evVcZ6BDSdKw2DHXQ3KmzmBC"
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

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
    "VaKnTKWphdLkbaGNPbH4tvyLLZQz6i5pTzvqdexk36De66KdRwZb5kKi57L1dz25nnixHw3uqZ12N4Ck4vzZJg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cFmso8d3w497ms5Z6Gp74UMQgniG4d9rQhz7QZ7Lkx58pmpqCLXR8tcCvJr3GYJ48THtwZCN6bZsZLeEmqtyRXY",
  "key1": "47YmQDumes5JBRbQ1izAw8LbRhGDJwGmJF54mw65DRh2Bv4xyuF4mNSwcfKp1Y17TDjnkLqKb2rmjzzj6HYSE6UN",
  "key2": "4ZKXCkducJPbJhm7TfuF8knuqx6ZjJh5mFfR3iT684dZrfVzjbLXDSGXV5w1xWGRvzWDbnTqFJ9mqMxpZRW7PuXt",
  "key3": "f3iPY5k2dg9PrP58ko6PDc3be32mfwS85itxg4qaDgT58arMzQhhboersyWKYvFVC1hkddeyEeWpLNFu5b1N8yJ",
  "key4": "2fKFwH4yuMEwjUu2m7CQMWhmUtYS2ZD2RLMTJgbh2q9N22MbhXK1ufPnYzxS1wmsSu9oK83NGZQN7M1TuDnt7o3k",
  "key5": "2JAj2UobAR5RPgR7icFHUbjemaZRcVRrhzAMEAj4Uj4kFcdFHCxSPgj9x7UTDmniwJS45DNdWsZygZXGARr3Bdge",
  "key6": "dHA7VnqHoCHB8mB4dwuSmD5Lg478JfL724UdYncdL4yF6KjVvwkkEShmBb6eZUW9Kkvg6EJfNfqrxKmLVU3sr81",
  "key7": "32cNhoLZLvzjHTChVC6FbpdNCKtcC9cGkDjVj1mjat8esSq3AXRxcmZbognoEg62gUZUJsQbogwZcVa4LMdezWR2",
  "key8": "2EF4P2p67zgTCYAnpqjcJhwrgNuH8yyVgTtaapYRprj2KPPdVZyazSeXbLhmxrTTyW4aUCVb6XUCv4p2iCWA1rcR",
  "key9": "op1og98qh1ZTNDZiaJRzGpvJyx5zk7HUwXiRN5NqyH8AsjAEExiwmaHFpZfXJ2ji9mQfd6vEXZ7CJ2NoacYHx5a",
  "key10": "2WeL1FPm26VqmFjinZBDXQbzgmKY632RYevwrYE9HwXnLaV9er8rwWa8MJyW4Rsn5JMeV9VHejzXR6y4GjLjW8st",
  "key11": "4GbDw1RLPZ1CU9wUaHKbAhnPd1Uf5URmpcWeV89Z1WbwTjP4sxjYKKaEwMEYNMgHgutoLvcPmLz87CKTcUt7bTph",
  "key12": "4GtrCzykNShXRyJsCnBLPi2gxRZWVfUBmLHSHwDmTeKiYrAngPwDirYzFznKB8BhaSkjff4bkBGzLgL93c7gsgwi",
  "key13": "21QVzTogu8hN7jbEyMkoX9NGpr4ehEeSby4GKXZRXqUSwEFCN4qADM4AEkvfYMUEpD9xRfjh3uE3XWRdMuNvMEao",
  "key14": "3x7ZEg3DLpp3hc8PHvoRejVMchzdrmkUK9UVj8ohmFJ1AosLyYajhikyL5inq6woBAtn8P7fpu9FyrRYvNQHcjHs",
  "key15": "4buKW5aov2CLM9aP4bXdoPsk6MDLtofo8unfSvohci7ftrG17tj7VnyfBMENr89Sugx6DCGfCB3i4GKce14HYoYq",
  "key16": "38xmoXYf2wuP4ta2NTem4zjy1RuD6Q5Sw3tcrDNpUxWvzSrGXspbxRTDH92nJPawTtjxS8N45Hp3fejmivu33BX3",
  "key17": "2oHfYSpiBjonsKYnLgoP8xiuxH42MEtUbpGJz8bHi45VyN7cemin1hRgd2TMMvCmL9fH6NYNfU2XE3VHWgLuRjJX",
  "key18": "2MtnGWgbQXa8gXCyeax75Zb4y8yqCAuGdwG4CMZERBQXoKrYZ3gLsMWb6BXYtHMFrToNxFdi49MEpKTcz5croN1o",
  "key19": "5onS5etc4YnvoikMSPmZYZjwFXYG36JbVoF24YX827uxfWNrMYTuG4keypEsxv2zYLUQTsNeNhfTprAZwK22FpRv",
  "key20": "2ZetJT4DFEnAkbfUjCz8WWyuiVCpSLEf279zNfVtZgsiSos1CHs9ECGy21xSb5T687j1Mv2heBaNryML5qMBkM4R",
  "key21": "3JjdrF3dWj8dWQs2gBPVx2jPPo57Fh4trkudgNmptgcDnSNshDaXNouML854WRMd2ZgUTFTGH1xmQH8yiA6qcRAh",
  "key22": "ZssdKgjd6BdNW5ZeEj3Asca1sWTyQQZFHYai7BxrLixAPiFtoY89mBpW74R2rpfxVxW9Jz6gwq8z4wJCVT2Q5Dr",
  "key23": "3ap2QsJnLEHkHDCDimT1AtrM5PjbMdXRLZ5BoJ7oFWB3JcoFaRLkHihStf6k7jQV8oBpDFbuujNPMUBPVLhCv9YJ",
  "key24": "21HYRYNSHv6tgiaFQKS1BAdFsRp7wc7wkH21honXxF6hQ47aFw1eQDrjhB7by3e4Fxv8TxUky9vQsWmfTykBhYPK",
  "key25": "33YuNpfqbtXmpvSmBpenHFrqwBAXg8HBd1rAjMhimgnXv3uXrjx5VYfjx8STWwTE9qmnJEcRVcxGLSUpRcyveLgq",
  "key26": "f9puXNhn9AgQ2JcV1zNr6BNGQQzEzsrmES1rei6sMM5BjPmG1v9e6RTU1Y6V1SLraLWx7dpbACD7zG6uc3SWfJz",
  "key27": "3eSXSopm99tJwUD1ptc4rp7K2guNPDWB1zKYw7v8Ezzg4ZLQrbpthiGjvZR8rNSf3YjFYs4XQboEbufB9c37ZZsq",
  "key28": "wWox9UMmECkQoCpGJ83vhJjv6b6xA9eWLWXfbcasURJVhxQYMNkF1SKUKtmaajuCQcqzw2KGpfPVRCwXgkE3Aa1",
  "key29": "2UiRvMxcRKHxD754Cj8iZaXYcRnoWJ2dRAvqSKWy2t9QCH5UdgTdti1yipydPWoPYrDCiRVfq9xvvVg1nbw79Tkp"
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

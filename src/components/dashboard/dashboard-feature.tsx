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
    "3y4v2dZayMAyWCfDJiUCFfe9yo1i4DpU3NdRvnb4PFHwLaTEdbuorne13zKyx9SomPTtWr661532oNeMaf9ajkvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3bMny3mFEGSFc6neexhrd4Jjaoj48eTgCiPqRqwr78xy4E2F4JZh2TfYbYHaAGY6maB7pGwfco1MpMmUukJqHg",
  "key1": "3c4cwdMhrdC4yfprwYUiWyzEdd9Daf293MU1kBYSh1QA6YkiwMXbKknmfvESY9qaBSHwS2hHaaRrtea7sFSYxyxi",
  "key2": "5uTnXWC2E8G1SvaZhkG7hnjBvbNXQiTHskmzZaruWD6EfXrD4PLKNgr7VCUR9kNqGskb7oyCAWNRwHVcbrSjLVRk",
  "key3": "4GjeY4W6Cr6MThvrdspNubiYx1D3W84jTc6NXK1uqiVoYseZ8YyTJsA2K9x71H4DAwjF1uFvMpJJPM4udA1TqzAD",
  "key4": "46vgcWNxoJUHvNpsjunnDjZpnWakHGEUr8uvddYS8yEFcqRcEDNV9zZTUniYaRKdaWUByELAXsnE1wJT79AacmAg",
  "key5": "gAEGoHEMpMkMuV8EMrFiby1YY8Bx7C6mntiEYjgbmCEcXDv6DZ1VzPbAc6uvFdGiiqcLFVuTFEqETmd3k4cvLdY",
  "key6": "2W4zeUo5z9mqV1pBoQeeQKo4ETgHueMhHFXCBZ24b3rG9VX1ch19XNVKBoQMVEq95LEUxTEswkw6gr8ZKUEVgagv",
  "key7": "HNgLZ2pgn42z8eYEj1wTVkLov9zPMh4B71HvGsMZpCo2TWq2ayME82PhrdxKgKmuNcs7ezPTaKAUSDs97JCwX3D",
  "key8": "9BRruorYXMZTLaQSspadZz7wup3e7zTiVTCNcMsJPsvQkcRXbUozbjNaMoCjP9AU8YNM4AbWyghR1E1Y8KDPkES",
  "key9": "2XzuyH9ECnFFeNDfeQxUsRXffcxeWbpan2szf99YwMfWeNC5APfghveLUzscebQ1oSuhYaQiavV3fy8pRoRhk4Xv",
  "key10": "5HupsmhrjAFAPxQpQRrkKuqXEnjogBEfqsK5EnKaNxP9vDur5sLq56PaexJUkagKgSMepfxhMTbHfFrCvmQhyi71",
  "key11": "2JZKoY3F1nP1KBizPSiY6DAnvciQmTqSgVozvEPhMCwRctpx7qULFGE3LCksQaHjJjrdwr3CvE7iS6WnrSTmjUx",
  "key12": "5QFEHSi1CHoehnCSBZ7qBV21iRHF4P8BYxA3Qj8rY9gdVCsmzvPkrfkLGf4MuAT2QpifG1VinhfEjBtNjwdEPxVa",
  "key13": "3RPZAp1F5JYKHH1gsdvFMXMJWVNJsr8VVJzhwz6nhPheHW9ePwsriHspjxRUXJCHAW9goiPPv9cAEo6HKCFt8BjL",
  "key14": "5EYs4qnRp1rE7nLEeMNjGLQaTwqVshcDf8XtcbnCu61UfGFgKe1nQtEYqPXarTasbJms5YsyCA7fu2kJ1h1TMh6b",
  "key15": "4fiM5iEUQzFefXxLZYeopgBemoxeok8U5A5doevnu491F5ndCFWqufUDPiWqvEhhPWEU7DU2PU8MLGCC8Yr6ZNAD",
  "key16": "4BsskCVR139B32nWoiEo9NjKcd6KxbBEcTihk9h5QLHA2CN6LSkDohN6wxHoYidhhHwe8uDsYxHHtAGaJT6oNCF8",
  "key17": "64gSMPypCGZAQU4xj5JfLxQBC1mAnsWawQpJCj6iosJLycLKLy7YCGEo6NsQir2tRSVJjoqQhgia8ZGbNfjzjeru",
  "key18": "4xDoRebudmpdG2Dy1GiLq2F84Sg9oxQDuwsaTaK6J8GSTPcqgDFCEo5LfKCz2XpM4SyaEiV3N9SWqvCF4mCkqegv",
  "key19": "N49nRABDv3C5KqifiTCDrgQ4b8V4ASmzPqjeL8b8Qkj1gtJ5LjapTMcBjjYgme59WbCVY6ikSAvPv5NqvHRx8Wz",
  "key20": "4RCGpe8tdx97n7e9Sj66Wp2Dq1taTkmhANSUVv1gmHoCptZCHncsc4v6C9whGzvyJkqenLpwsBG3EWzRyxBGuprJ",
  "key21": "2M5caHz4z3hD78qL4ZQip4TZ56Vce323SHBxcY7gwK6kaFXkPHaBQcjqZFZXCPUHSxMrGssVDkYGzbiW6gxZmmG6",
  "key22": "BtwCtLjCYrmU3VgUviHkQeptMXvQvE5n7dH1BfgsgWcCcxegGAVWqEY7W1iq4jSD2NyQ7RdwXiC7Q2YGfDH1gkz",
  "key23": "2KkWUfM8Sy5LXqx1dv54Y32C3nMVvxuqgSEdwfDDUYhUJwE6hzNvBwZJrN1kdFfC4oATsTHdxiiHhFJpZZRkWvV7",
  "key24": "HfCJgtKxT4Wqan2ceuEvYSytur1DhRyhqN498gCiXsucFCQRTzXsYRxJ5fYyCx659ZNyqZUeCFtYqTgDR1q5f3T",
  "key25": "42Fg1mQRv5yoxkGSfxNFKn4pqvGi9j1pPcRrwjPK9EeWNrvAnLyZfzX2oMF98zNxPLqvnFvu9L9NVvX7HVuTXRAu",
  "key26": "5KrMUENZvdBoS2VogRuBjWiivWXAhFDx7GbzBc1psGyn3vHLSn4K2b2dSPMJyfHrNMWK8fxHXLQWAHbWwPhtLaVA",
  "key27": "26GtMFeRzNqtKSWBX16ftSjCaFs5B6mjbEwumkSRnsLQoLtbCKyeQYDFebryR3cRG6Hmm5U4PHdq5Dj6MppTyk5P",
  "key28": "4RdJfUnFAstaz5myGFVYodtohtQKgnix1g5AThFWdyJWGGCqcqfT1YXcAKjXJNrPX2rE1Tt7FBrCcfqMNt1VfjZL",
  "key29": "39pvZQPeghYAZg9qSoTNfJ2PUWt8xtYLo237huHwAK4z1pQFAnyQu1WBoCczjt5tn5LsyiNLFcPFfPvwknog9iug",
  "key30": "on9LTabGU4EmDbg1UnBWB4ahGSDyWDfPou2vaiMkLRZV9de4uic5XZMGbnLe6sHDBkLaFwJZzyBxTK3cioRyT1r",
  "key31": "53FJDgzLkGPR3zPG7cn6tLgkXXk8gusoBqBzKeocmc594FVwJVELHgbgg6dYB8CuvGHsucEEEDWUsaEzMr7dc6of",
  "key32": "67ay2QfKqwZza9yDTCXitj6q9WjyBirXVVfuY4BvwiYSXYR52rroBUtKGVr8T2AWZYNdNmpx49Qpgsa16Xt1HT73"
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

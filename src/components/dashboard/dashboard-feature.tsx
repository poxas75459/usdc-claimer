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
    "2kcf3DxFh4yhc62vUD13rd9PpikdjudswF5CNKfZRU3ezj3UCVsbW45jdLM1rgLM3ctAEsVNJh4QNu59HKc3dJjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tnKffLtKwqCaPNLRdS2DCgNxGMBGFhPFTtpBCLzBjYfynBus6eb7KQ7LpYpwkca7yg5Qq7xSEXkyuZCw2bYNq9f",
  "key1": "5asVoyg838gwt2fjPZUHvMbcSUgKAdNmfLHZVTcHbgiLyQUGW5oFcbiCN5aTe86s5B2kCJHq2rSgXrN3uWMaQr5S",
  "key2": "3HDGrgTwmoc8uikSKVs2nAwdXaRziTYMZYNZXZJvXr2JPAm7Bx3bk6h5jM5sZWerTYaNMeSawbAH55iY2PdT9BwZ",
  "key3": "6uic73azZDsraYi9mXeCbRpBSj3owCViBei9oqydQawTsnxrjNLvbKqw564UH82p17pEwQ848VtnMs9ux4zEp1Q",
  "key4": "4nGdqmnowepkUEcxHcMUsd7shcjkW7AHCEyjq6oMT3L8esLwEuCi9FxVptzF3n1RRczeDRiBh4EJays8mvZPa2Rv",
  "key5": "4tV1wURtPN6wJoBqXdiG4x7QhGdXi4DjB9GBJpt7hp7DfVdJuYF7MbjPegvdw9KwMCmrhboA78nH2729cRwVg8Sg",
  "key6": "2Q8QgPRbqB9JgwXaLkAQcoS9BPUF6BXaGJYhTfA7taxaHLfwbAohuGTpEx5gaTz5VTbj5geafN67GNNoBBNW4NFM",
  "key7": "4z2KKdJM7UCfZnU7etocK35C27bmJY1RNuUii3wLEbYzmZHEU8UAPE4coEyevqLHq9D3mH7gDBr5RAWH11khKWJx",
  "key8": "3tqLFE7pF4ezVsgsGvTHwDNPzA1jrCzoThwMBaiiQye9JDSUxzeTim8axYKxztmG9UZh6MUyWHG7RcuDa2t1xAur",
  "key9": "27BS4DCXS1uJfNj98XmukbBMRU5jD99JSCP1HTrEMteidVMXML96oDf8xrGgnGD3TcyoAVjNTAftia2znrTivvJX",
  "key10": "3bU8GeVmoNV314sztPLUkTnq4HPQDufcLkUkbSwWC4E2NWnXQRfyGWYnFzUMYmBHGHKxcqdq4bEcxc9Z1BTpddBj",
  "key11": "BGrNVDTay96Jx5pYJaSz88zi9oSJRdmYJ4tzg5eAcLcsfECPt6h8V34mYGjkw4jwZLvwf7ERtGLxQzLnV2tmJuC",
  "key12": "2ioMXirNqjjx9BnVdkBdBqaDp6F44MxrNdZeS6JbckVmruXRSGgXTMCFagNRsdWwaAnjUNZF111RWdbsANxdfc4n",
  "key13": "4g1pJKu7hfVH22FrkdGNdoYeSns9zH6Lzt9CASJEjMYHBHFt26rj7Ujj7M2S38zjrSxjsTes5CNKP73sWu3CKi1i",
  "key14": "MmpG668pQgdrXRx12c4uy2Hn1oEpfiaTKWaigSVcfEfaKEydr1XWiRzeTUhDqputdDkAHPbdgoZVasAjEFXbkt3",
  "key15": "4sewZy9g7eqrApnncwANDnMYvcscDJv9q95iDR5FC1pX31Kxamn4jXodEHcc2kfTVGfenFR3NVbxMjeQekLLmV94",
  "key16": "5DzbWJDqkpMMtUXdPZbY3aeqdxdahS6JBh5KYdzKjRnsiWyrRrAwspsA2moADd56m7ugCPGxXVpuTmbNCkZDXkjw",
  "key17": "63LbYMSWBRY5CX6w8pVF2Mrb18P9DtoYLWMyvhtfNMT8g2dpUkCBy2FwuALcF7f27T9QkEeqWbdczUPc5F9qDgXE",
  "key18": "5qEUSFq8P3fLphFftocYX8EiCsnUdrXhHkgydyrgk1y7Viyq4pSMLDBZnQRqPz6gApY2UqZGmu8km1cmTvfhEDxp",
  "key19": "2qDMMvTd9qq7cFBjUxLdPba5xqkCYk5NUvQZA7KhK8zMetPenRb5znSNcMyjWCMyC81NGEJQm7Pou2XMWtUy5m7g",
  "key20": "2wrVmiDwZraoqAhb8G2QEYjFZDFhfMTvTqAFfNKF41ZuGtzgWruUkdZF5rWQ1amziT9UiQdSRxGm9ZYu8fEiADi3",
  "key21": "5iathBcWknzkMqDrqHaGcmEFNMeTprZnFXT4jwvHPPQ4m9648tuzMfpEUgxSrn4WQpUJeNYmo13N9Uoy2aChBDmi",
  "key22": "3Rw3cv3RKLbN4y9Kp1AeaDaYDswFw6ysEwHKTSyWqanPRN5Q24HwRXovjrMvUDFZYpTgZH5ogNUzcvXEPWd6r1Q5",
  "key23": "4S3YdXhDzVzwXagGujuNY8d4aV2usb2a7tsFdb4Xj5gbawkA8PS5y3b7t2rvA1jUhPRGxCw2gNgfD5EzxGfqjSEH",
  "key24": "3JCQxYYmoiRhiip7Uz74kw7D85KSS534vUcZGV1Dcbx2AcNQMALuApvzPnQo2V8UvzSBFSswHFFdmun8CqP2j4fU",
  "key25": "5Rub8qwzST6iFGn7FXtYFvaxsL5Gto7j4Kyv1wNMh9pZSeEjkMsVHBDXBFYwB1VrD42f1nEvFo4HMfL881E92MEh",
  "key26": "3QJ5pccqtPqSgH8N5du1GjtCn1M6RQBsHKjQDPyUn6KrwWKYuaDnLL3H359L9H8DZM5yYui771qPvffzAcDJ1Vzg",
  "key27": "JWro7rgEhHsEcLfwq9NHYTXuiPVTJxcxss5aF6WgpG6AxAueANnrPdm6SmFEYYaYyz2Ftmtr1oZeAJRzMKQwQb9",
  "key28": "63ZquGFvxufRpNzXtj2nuPYU8CqV7DkihMASGkCiGYA7UrHAfGGJNbCfZyUrM3ACopMrLujRYoPf3W16QVYQeVPm",
  "key29": "w4dFPH2J2f2KBNZE78HTfRMPioVdWeEDQQMKkR2eNcQccYTFMDPcTrfSCGWtgAebqV8ADwNgt3Eg2qcBCdXAC5o",
  "key30": "3Tdj2ymVn87FGpJP9VHVVP7hfwnovsjJ6LH7dh6NNqewfQBQLmdhPc5J57WJZg1G7ER2L1Xbn77FfQZBqe5syiPK"
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

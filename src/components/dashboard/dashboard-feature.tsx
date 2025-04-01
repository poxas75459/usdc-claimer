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
    "4ySJF5b9XZ1GEwVgfYR6gTdj9vixYUcnHzMo3CZZS9SFYzQPk6KeBjcPa4e2TZWKxixQmcPiy6QvsYk1sbhfQnNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptecSArDQpxiZBJa4ezqghD8UGhYT2CvNcZueaC9M8Dt9uAmCoMJRFZ82nSJGLaiKTGN5nH1QNy9Rbmyqqo73Ri",
  "key1": "3WzM87xmur4epJeLojhSJmNWxLjkMR3ChMQ1CZhqVy5UpBAnQg7moxd5a6oGkj8ndVNWp6jm42xQeaxps8WKxVUA",
  "key2": "3bAT9FEGP1jxGgtYWpbftBhHjQZPtxMsw3BU69tutDBYL9UA7nYCMeckmMAih8e6sCagjy9yzHYftBXcjvgU2dPX",
  "key3": "32u9b8oK2YRxTx8XogVvmh8SYJWnUXWQwbMstXEUwazW6Qv4GQ25aQbDrC1zqPQMf8Uibi7CJ9UdXsMKCHcJqUKd",
  "key4": "4tC7EkVtban94nGvF9dKB3Q4Tj6VHJsWcFjnzBdUvheiVBNaFX29hprKWy4tKP5FNyHpxDUjKqxS5vsW2bDCNHyf",
  "key5": "5wYRmzqmysgwK4ShFYJkDb3q592iN1QwkhfsQptmQa4ripMvnzJFQ19JvhkGxxkpEr7w1A3nqLzbddsUe4kMHhNK",
  "key6": "42bc1WSocaFAdzGjMLZmR6CEeeQPKwSfZLcGYCk5SE1tzZtZe1KPbiVwYVQHcgpSRpcgFsCyhmt8Hnbo1YRmPuDm",
  "key7": "57wSRuqE15LwvKDqb5VFm8umhborrS71UCqCtjjxYz6ortuSEHEPwP6KcM2SMe1BZk8cXuA43K4GG5hSgiRnjhNF",
  "key8": "5uZyRbqbQmj352qw2TdRs3a1dA2CYiiHHowkeYPNiQ7PKeZoMfG38iuPWKHZYJRtGqYL87yfMT4brkiAAiMTTpyz",
  "key9": "xDxxftbQei7ETL8hCkjQAZrccZLRe5jBMLNmaaTFA4rvhpw7KjwmUSLniTDuqjFdfcYm4GKxZ1v9vNYifQYXkoC",
  "key10": "E4f5zpakKDQHK36GJJ84SnL9hP6MUSbkbFZboXRP7YcKaw9txhTcuDjY12GxXvcHUoGzf47F72uB8bSY7oukyWS",
  "key11": "2xMc557kPdkWmZpWNPhsWSTsqx7XBSXHM9Ee2gnHhetdxPJpNmNuV5z9kxSqrj98xSb5TboKRDhWVdY1J1FcYt4M",
  "key12": "5U1TuycWe4EsVUf8DPc8kikUZhDoiLqymRxUMdZMVgMDd7YCne8LwuPyccYkuNnPLLWo1W4FKKNc2wGjy1B6NgNk",
  "key13": "5QBdDZR7N5ozz8gw5zWhKBfbye3BBbG2SD9i9PFzUYpCMSP6AMRm2vMAThS4Zj7PLhXnZnUgviXKFF8TiSgYKJ6B",
  "key14": "2iVjFXLEa1mUDsuMQTRwVdWr8MLheReoJ6Adqt7FuMnEzHwxazLwCmTbWBbicqPTHiMFWi5P2ME9t7wGUArqtvKG",
  "key15": "5zJrqxw8frPzFUCRmUDEWwjyXC6nWZA3N3gbjAjKTzBVey4186P7jjvZReVdyxjG6K49esqAuPrR17PanyyjjEVp",
  "key16": "6jLWZgWkc4kCHJjQk6cHNnR3acUURRRrnrPYV7giDGGWh6XMCuwDmnL9kjytrfiS9rj3M3QXRpngf1mU2KFrCFL",
  "key17": "3pYF6rxSxx58ECKWASvNWdD5GaUfacVSaVQQTyQRyyE7uLEU69nFbNhBAUdtkrgBaP6EBFiHu5m8uSBGQ8APrhRb",
  "key18": "2882rHSRijdCQzdgftR9vJKhXPwNRVTnMM4VCN6T4nPZDhc6FeXExQvzaD6JhEhMGWU2QEDdBPtr6TfbWDpKNP5Q",
  "key19": "3ceD6FNNzQSYnvsXcQpaz3pKz9EPxKojP5ADf9rNqwT4z2QLCK8itr1aLJE9GqRjE5HWkuKtumkdKx4safm9SBfW",
  "key20": "2Xv86mcPLSTEy7jBUfNvY7x1pwfr6wpWyvgc4yTvWjFuq1uTfo9kDTWjd1xJ3CPV5ye4djkAKAprCB8Jzizw8Pjb",
  "key21": "5VdTx2peSHtGoMSzDogcA9PwKAKQe9sWq9FQGLYjibaruiaJ4EhJ71dF4C9NVEd1z8HosFC2jzzW9Ym61T1Tmd9e",
  "key22": "5QVZ9DkHTEoCq4LqDxVYzgE9iSNzMusr2k559sPQUvtBvHaYqWB9cnQdaVbq2xC4oLKPAdFW9QY7bAjypJw2mkNj",
  "key23": "3woW2iZRKwk2Kqjo2GnDu1AnmeiDKDoFeGkMb8f8kPXJKGyVsKJ1WBKw6UPqQGUyWtqiCdadmNMcJEpAnZsg9k87",
  "key24": "3oAKGB4gdcE72VwiJE5P9H7Zoui5MM6uvGPXwrtdrt3WSi3MNa7XmKMYYAapSrzN8DcJB8U9ShRtMPS1TJU3CFZG"
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

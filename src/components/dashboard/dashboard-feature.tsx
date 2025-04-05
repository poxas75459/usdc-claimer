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
    "36vsHh5KBSwFKStLmJfPuLK3iTSJQ1fmPCrpep2hQ6oKpVeuVCqrfxUgqHXD5Za5Tha2FVw3H3KGKbjnA88Sjoqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KfGxBRAUs5ySjXhzEg2psn6rxWMY53mu8vCtADADrVuj3HgS2KSfaMfA1GTootjBmweq4JDaAQG9e98FTUZUo2f",
  "key1": "2ksTK7CkBF4qEaDgw3jK84Famc6HUj8BBErF2dmiBzxPnfRCCZyMEp8DLpE85vTfCoqHCzRvR8VquFtZCVTmqzLD",
  "key2": "2434tcdBGsS386fp54uvvNTyv6fe7DLK2qSa6GcJkMH4jvZRFb3SeBPYiqrHDTeXaxGZ6oYTBWBoFV1vdnjXA2rH",
  "key3": "4gwJn4zwadZJhba78tGdJTiu8JPUh5a4Bvi3FBiqA1eQhQzQ5tQg61faMJNcVxjuU2zsHFNWbMhkknSJnEYcNRJo",
  "key4": "5HrKuNPr71jDM82EovokhjYpjvwK7dVAuzxYa6f9oeq3mF385QGuAFWhQfMqYudg6WDfaxTgpfQk5a1J5qRVPK5V",
  "key5": "kPV4WUBG5uNQQtJTiwPAMHRRdt4GHPziz6t7R1HyVEUysktnfJqFwzAmMcGNa2kvPGWSR5tUJJH5fr4Rr1Bvvea",
  "key6": "5E6wzh2JSRyqa6xL6xwnyyEPmoFhXENb2aEAd1odYtjyjUquHrKpTDXLqo4xotjL4DqnT2jEdqefbeBnUZEHZwRV",
  "key7": "55A5NfkvDXnUYjjGetx1X48BRFF3gSpSVZRJeNSohkf3Pzj1rcgDBcHGwXVbazKapD5mVDiKzs2kNb5zcTP8JZ6G",
  "key8": "4LNShuE4Lo5EBxTTtjc7C36LcJdDZ2fkYxo4zL8wdTmj3jBVJj8TE6fqtmjoYMCzzxeXZ6oDCpcMu4X5EFJMhXbz",
  "key9": "2DGuvJrpHriTfsBGN67EiH2YxALu1xFc84FvsCypDXai2DRv8hmS4dB6FrKDg9SR9BQv6b8L88aAvLxhdgqBrEwN",
  "key10": "5bUj6svNMhjU5WFuJUAiMjXyhX7sdx42i1XfcQVSAqV3JhJUm7eYk9c74h4PXAswPHouEgrGvte9ZETBkahog3Wo",
  "key11": "MKZRpNDdcNC8BWJ84yyh5PcaJVcSJP9pGxeo48FdcP95iERct7VmRrGKURt7db8dUwRtKyhKPrgvDhVoeW1gkhf",
  "key12": "Qem75MNbnGr899z9R5ycfDe4etbkPmLSGuoah4uuMHwtpzDUZWw9f8wcezkuPWqWmK2aVbinv5XgNJPosdt39dv",
  "key13": "2ZYL3yxTHtdhE7uh5FCrmC1EY9mT5XLRage4yqMMb9tbZsfcEXXaN9W96eZftkQCKsNjzpK5oaxBMm7RuBS9BrAH",
  "key14": "4B9aY1EwQfjnqEeiuDkKQBLByFop362YrWT9Fbu9u5AKy7hiRKLkxcPzeGa2HFE6A6s7U1trwFTD3mXK32Drcinh",
  "key15": "2vFf2NSgW2AKuGZXaybDAuCU6cxZxyV5NA73DgtKbRuKF5DT5f1jmyS8WchNSkKNu9nTWRFf5zWhFSSSAdTVyfFU",
  "key16": "5ztdF5MCSebSXvQjDMes8Nc4H1QxsQ7vhJPSWzFVw8Fzz2oSyHW3ME7NqGSQdRMV2vqdCxKAzQRdXG1ubX6foyhG",
  "key17": "4Qh2kRBkxEHw3ZZSD2DcMSZSJHae8RkF7uTMuPD8YHvQ2iiiU9cxjcauiEPJgA3U8WyNsEugd4gwkkyF7WNiuzjZ",
  "key18": "2xx2Xe77VWxacFw3j4zS4ER3CVN567e2jeVFdTLVcSnzD34Ddo2ukvVpbUptiqJhUFi6mFu4Bp4bUT9GyWz6q1fa",
  "key19": "2zcjLu9KJpiRd41VHyDRzUDEQENHd1Sy696YtNdcSSNaYxgAPXubW6KdZmRA3D57hZ9ehigEz7BMJLNFkuTCdTZL",
  "key20": "231crLpzpYevVNRju9LRJuqJC1G7BDqX9eVhxgLMq9x9HTn6xUQAcjSg1arhcYj2zo4crh4yrszTzYxEJxbNtEHp",
  "key21": "4nadMcpLeirW2kK57vYNCjpiQ55opGnuA23ryK5qHoZWkwSLgiZypUDp64QvbouCrYn33fnepZ6XGB2DnqkTLCXo",
  "key22": "Jka9X4QJGurcyByyxbrepbnvhap341QgE8oN7BhdNvRmFTDWsxxhLuPR1pWELVwdavsEazPE75c4sHj2HF1RACW",
  "key23": "5weYYT8DpbSYWSJHGhgheWbCDY9eZuD6zhYx7dzjhjonm32YnPU7hGNyZRhJ6z51JkJRNssqALXpFvkFwE1N1heb",
  "key24": "3zAkQrMgBJRatGq82Z3jsCth9ii3EjCGY2Fpr2caMd5HesBrHdwodteegvqKwpzH5gqzZwePsFyAv6g4VexLNrnn",
  "key25": "aUN8oRTLvTzQiodS9ms5yGjXjcWrTdswrWc7yvurx4ZintFtqqKG3rXhVy8vax2inyENxVQb6w9XbTk1Jf29SH8"
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

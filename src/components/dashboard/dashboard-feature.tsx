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
    "35pZRnZHMELbg7CCfxMNDjd5h1DsEXZk7cQ2j2kXzS8GE87qLpd1XVAvCNczGApqZjFyU3krm62mopTTHaruiJmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nRkLeSgTe8sNS15dJ3pMNo6thkoVKbEPk8d6EKEfxfQBZ2NFdP4QnMg7fJqHNUKrsGJZwrwjrneBqjEP3Eh7nPX",
  "key1": "3f4Tum41EaSm8gPoeVVpAQr3i3pw6tEcJUkADdUEnzaQWFn18D5o8657ZFs31VCPCgcsSP4HrLAYgVkUM1S2Y3KB",
  "key2": "2YZS2yd5vKhPdojnitX1CdJkrLCsrwhwgTsSBLU46gcnGuVKKNjs57Zd8n5C7REJx6Jq9ozx72mqSVKmyfQ5zpHZ",
  "key3": "4KdEmgWq2gS3LZm32gkAWdFgPcsqKUuTwQ1hCSJbiN8Kh1jAwQUBWHgj5dhNoEDqkAkuwoQ7dD8pRykmny7SUZVW",
  "key4": "3EXRE2tNeCWbiU35TqbPWLSe2a1WZXWEghTT4tVwaavBA38Rcs3wRDjdXw1CEujVmpisyPsRrJeVhAvruVCHbz6n",
  "key5": "WXJH2o8iKt1QHwFA3H6H1P2xoAaZNPbAZ8RePz1xYxFXm9bnG4AUVfThD7MqvUtGM6yBvoscQFVSmD1mwK9sgvG",
  "key6": "4KLVpdSppK2NNXyzv3rMXZzoSveVg1N7HWeUDG9yQhMjCUZ4V2Y75BUQDXqtze2CEtBt7XhXJJBtdbqJTnHkWvu1",
  "key7": "4a5DG7RPzbvZGBW7rrKFbPL4PJSpaHasBcVdcQzVt5QDWNbK2hd5YNaXBhvPhak1xvMVhPab7iNRbtRkC2ymCp3h",
  "key8": "4j3pRfE9UxtYiJ8qpQKfLrK5tu8U1zaCricXFx459uS4VE8qcsFKK9heckrX1mScxK1xjnB9c59ZNsmdDuzTPfMw",
  "key9": "45KxCxHoosbyRC8n63pd3LxfHtoAyEffUPQdaNi35QkYVKMznvDgcnKNvgZNcZuJNzYiThpbgWs12ufAkvBkXxD9",
  "key10": "2k68usb26sgkt8zxV5zyXCoPu5aNsJgqDCFuQR6ssr5AszdKN9sMsKsCqfCMijT543t6WrUCiGMe3mBEVxt97BnE",
  "key11": "4tWSCPSCaY279rrnLXo5qvKVndgnCumgXAEwHVss8XQsJWHSFmb5yT4btbTQ9TdDtVqRJJXB5AkxCNAiP32Wq3qU",
  "key12": "4wBL4MjoH7JcdJGFf3fszEVf1D7BRXv4PafJYBSnTsbVngftRn4nKCUNHNVJdoELkxcsHLFjkqpJHnZEB2BmTVD2",
  "key13": "5U79nkVPaWLDWzScBP87MinzvFPG1XbWTGJ3uf6bd4txF8QTu5X2sRHmyYQxJqYjMFGhdKR6kiWFkLxwxc8kdpm",
  "key14": "PPCgnTS6mLhHp88f8RdLqQ7S3Cju3iJkcpZW1JyZEJgMD1PE5dF7oJFtBgTxEX3Mhe6tzYcrsQnjJmswGj2zTtG",
  "key15": "Xgy8NKQSGMBY3CVzgFfq3cKnkPwRzkQUFJ32fmypqGzDx3qdLkhrjHTGPu7pghQAMiSZ7gf57SV9Wm2pNps5TUr",
  "key16": "31B8gkmhgZzPtKb1tURYJNSrYt7fXw4RLCvossgQ4yHUAG7SFsQ7m9JSrq8ZjCCN9TRZBkMysmALePFQfa5hHSUK",
  "key17": "4JdhMQPgAu8u8x3G73bW9PAVZUcDuisR23daqgNj6gzxMnFPzhrgyNKfBS9zAu8cPW3qdCTMgn8ZtDKg8RnecYZ3",
  "key18": "5UaRjDgPGc6cgZfKANXzXimtdQBb4NCJL7FbwU5cVxu7jvcDCPug23dkpZ3pLi4KjuciBcpGX3N7E1nH2Nssu8eX",
  "key19": "5g6cPtuNcYBpvNm1YrQRmD6juGzMdrU98rCUkDQcoDueKaGurPdibHzvf22YtL1vC4FHkXihKtkJPBL2misu7of2",
  "key20": "4VYENfh9ji3wjGRJnxGdtPEHxnYeCXXXDRN62YyBnnHZTgCedqBezNkCsecBGv15MbjY36KWJo7spiTM629aY33A",
  "key21": "zFDi7PeVcmZq7HRPSqkz3eeBamtEumbVdqPZeniNDesjGRhz5oq6WTf62UygyJGoxC9dNKwDRabF5gXW4rVnFAc",
  "key22": "2HbXREcTvax9UYG5q8QjvWAcvAeQUb6QhUtUbpG8CkDUDXRQjA1jZhzmnwKSWjYbMCjedDv8HUAHgUWSmSimf6T6",
  "key23": "3UWBYRpG3L1A5qA7hKFG1MQehs696vGTQKPNDupqNdwcLjJ4mjMGFuQgDCrmdpsqRFf7YXs2P3EGrWDEkEDHPsrn",
  "key24": "5d5xfbKezqvaP7N6oTTYozGggCGXFNimuqDKrLurbof48yV9XPkAfd9Pca5nPtiRmHZCKCyN6kFjLsJMuEjeBgyn",
  "key25": "5GiKr1XFx9AQBhCtaAR957rbQ9GDXCa4nB39mi7bYK2v2yFTu4vZJxdjjxywUYL5C579SJrN9sszhM565HAjXB4y",
  "key26": "5rBZF4eiDzcRg7a8x1aCuxd7okCQ5ERaFajTG3EjtijMwu6HkG6R9RjoZxCjRr9JAGtJQ2jSMCpBMRUEL6DxqcTL",
  "key27": "UB1RJ3MHEtbUpwrDaXk4a56hu4qmByqkTVzperg4pniofNbbdFTjk6eSJ8RvMLFxRmpAYfj4dxtyRgsq88iT2fn",
  "key28": "5kpB62AuFQX3Pmg166amkFzXRHYkuc2pdy7oFL462yZtUfXeidmjnU43RsAVgU7ooA8xioz9EXS3cYGYbK3Lddc9"
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

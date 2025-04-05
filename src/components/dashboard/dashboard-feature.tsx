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
    "2swxNxsPtbtBXyFbCgKvEp59Eb4gfwjMN6FsDXnMZB2tTad7qazRmCekqn8hYxXcYxQ89tbF8gR9kiuNxr3DY3PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apb4A81kJZFzge5gHwd7RQ4cFEnbK7BQtvZVedWGyjesFK3Tp5GdqUmwTJTKTDtDRdA2n4WVk8Mjkt4FUT6rMWy",
  "key1": "5FpJ5AEkSVykosojwgdggwZQSL7HVP97jEVBMMxjN6WDUqwcX3J8cbFC4E8NWr8pCpbsJ61mGYNptEJbJvKo3p4o",
  "key2": "5AjuajSj2YyDizJX6Hg2pw8RgoqyxPFrK4R2c7eieNfrRRU2EdVGL6btpUpXWx2gons7qzyrRNTqRq2Yjk69Ppez",
  "key3": "3AvZE9E2auNLyqMFt3b57ZoFyZfnsvZ3qQRhwyVnRtJaipdsjKXqqkKiZQ3BtT9kJZE597qgtfiSyR3eZQBbfyJy",
  "key4": "3yUaiPAnBxkL1FSLsoVNjVaPi4mkBAqkhpPdEqjkPdzk5WtcYxpm9JoyrGJ4aqMsqF7JWR9LJH6uckqA94PLtXk7",
  "key5": "3aWMsL6fVLTWyniYgysCeaeNyJpeZyKGHGrWZSx3TDzpS4FdcEYG97JQVnahQM4WFLLdEz33UqPQ5F5PbpPsNrEe",
  "key6": "4HtpXgxYu9pm8vaDE1WGRLryyxLUTo3nPw2sv9wyPV1eV41wUViV7svPXhwfuhkXFgV7vo7r6zShghJWyQrSSrCv",
  "key7": "2TTV7jDM73RVbBKSRvoYfPBKbynozvgJgtTfesh7sPqUJbxwqvuzQmtP6UqFGbphgDMke4BS1cDnZAotLj6mfFXP",
  "key8": "3VKkNKKCEhJGDVJx6C1Y6fQ9cjhpbc66CF2gnTjDrN9zzqKGMQfM6Jc9NWExnatgZogRkn9GyXag57JqTHp3Qyzk",
  "key9": "F254DLZVYdUpwjY4meH8kQEYcLsRNSBcuxH72CXpbk2Ya4QfPKGMmbAiGtfbjtsVVBtJBoGskKYNPpJNQXib5ua",
  "key10": "4XWNutvSAWtVgNDC3eAq5pdgppKgwu9Rrj8qyYzXZQnTcfEYuTX1NhJXB3rviMzozPifsityPLhNQUbsuhBP5Ai5",
  "key11": "j57tagRy3GfZw5Z4VuuFpqajgxnQzFJk9KFBmRGLdcm7hhrkSTi4j2aqXWQcubWekmhGw3knqTJHnYgLctj2vSK",
  "key12": "49hFEgSD7ozJnVCnnfCh1VTrYgy7urw8dgizF9hk6qAaD3Co98FXTGm77hdzBa7TAJPcLxf2ro7Asv1fot48cJou",
  "key13": "2UWXs6uvUJefzVs1SmRu44AGqQACfkGiZZdzXSrkKmJGQuJmnGBG5Ar4tuP7wgkd5utKrj9Xuvp7M3t7QHzCpYNM",
  "key14": "2r9MsrMriixhydGjh3oDhDj8g8pTwEnyYQqPpHKYUKi6Nr7FMhe9Bqg6Cjwi9BqZqf6Z9ZYu4TfzvtPNHVyu5YMM",
  "key15": "2hLGQKxxnZngw7vW5WESXjZAfThMRzxV6ByM3SavK6Pp8ry7SSPewL3hu3khgfrLHf38KPQzaaz6EZoG8dP5bot1",
  "key16": "5RUnmwoZKkNMVSBEUvpJ8gxtudpGW4RnRjniWZFapbRwmzGvC9M6o4MaXZTepoetWtndRUTnxpChF1J7Amww85f8",
  "key17": "4sGB2PBtui9b9CctdTugdPBD3CKBPakBhdw7LvF5uVYCzsQsWmiQ83UAeEse14VwFvLYYMGR7o9qXXnD1bSXuPdU",
  "key18": "45GbpKuguVLF5DxN6oB7VjS2LjrxdS6k1ALuNKEHrgTPPHVy9HVtR1GKz3fZARWndaHkTA42hLWtTvpvZViobbpA",
  "key19": "48vqc9qkc3ABjPQ58hWLGWtTSWp6EeEXQUf97VcrMkp4HpJnHmqocJ7VkZ8Lanqtx1cseEgGeXCVYVna5qPFPTLh",
  "key20": "63k9H3uvGYxyKYT9zbpXPfD1WkSZizkVM6KKoSRBzzAu551MPre7r85NA7Li5WHugA9Xm1ZNCzouniFhLSqNtiNj",
  "key21": "3MGaMFgiujesNRAsFPSYC63BtcCsJEpSG28yivt5Aa2SJnGXhRJJnvr9ep5dBtjQFFFtVVUkeAk1xYSyc4ea3MfM",
  "key22": "3j1mPGxJBXNnD9sbFAPFuBxHuggMwq7pbFxrxvNazpXB8jBvr6vy34oiXJTxhtMwpFpBnhjRY4Cd1AQXPEzSvNUN",
  "key23": "5bsYqAm9annqhyx6uRaqrf4wUYWDHprzMfZgwMcbhXkZYxfSvfnByA4yHK276yo9537gVwKzqxc3cuQ2zXUHVy19",
  "key24": "CbWN2UGvNfWnhWYWo9qkfxvWSjPZ7Et996zAy5xNFcRZtD69YuPU5BBMprt2nVFeeK2vkybfCLsUqMg8thRXMED",
  "key25": "5QVfgsZWQ3amGn6ApUvs4JwDTvXJfZnnV2ZoaPwmeiNFLpmStmxYmputb8Z3kqXzapb4Q5eYZ1F8hdBmZ6eeZuXT",
  "key26": "2HvDVoFqWTKnWCBPnqxm7KS3HQ44cyJHyBtfP86Sa6ryAYRSpwuoFtXur2UH7ReSEUtf7Ejx2XVfJMvnwX3VkUB2",
  "key27": "k9AchF4c6C1J9vWWHmcc2tn7fKQZBfwFNqrk7AS7Cb5sW61uw24eWgG7kKXt5hF5aeX26uXB8LCXxswXeSFd539",
  "key28": "4hRR2cE9BENZBDtzZU5Q13JEXLEeZJy3U2r7eXxwf3uLsRTGWQ1NLYmJ6eK27BhBL7mc14rWghoq3XhcrR1RKAfD",
  "key29": "2YjxBmg7ERSNNgJvyQYBNnJP1RgWkezkxQfsgiJBESTHjr6p3pRgs7JbaLvHoXtvyG3RQR8vDAuHytUvNp8m3pWU",
  "key30": "Xag769FYkayfQQ6XPh1vxCVK8JtZ8ahEBm4Vi5ZaKxPNZg1ZoSHcJR8d5oTKxtTmD9MwMq1qBxPnWVDCMjmCY6y",
  "key31": "74vdQt8xwg1acnExPViaL9iWocH39ubjHwWMJCHGabeTbsCSuk6MTw9zEkLCkFkyKdNKtCEWqj1asZAQf5yjKgz"
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

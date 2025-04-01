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
    "2LpxdMXUzB6MpCN8jzqdHvx2JTiubFAQm3LY5kD8pxmQnowUwvC9P8Zq5X4f2X2XJeaJUrpFJFJzKeRwYA5cnH52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yNzhjWczrEHLJ8FTcCzKbLXXxN9GS2RwduDZAJ99RSdjhSUpj1UUZre5rKHCAp6e5eRPSuqDYf4UzQp93z7ZADf",
  "key1": "569M4F9PDzqXNf9Gegv8EmawkiUm7882VAje7YHN8yN6n8ExgQnh9jSR47D6czBtFh5aUCEq3yTEdfx4qNRULA5y",
  "key2": "4ZbPwkt7LacdNZEPAf4dGSmz9aeVYmc75uV1Z7XP6XHDa6sQodnnE8FY8yJn3gNSoZhG4GAy8X5DLoFshgYboej2",
  "key3": "5VYCtqfyBxeBLDnieA33iYLC8cdHXGrBRUoFJdWue283vJuwqsAvjBqWM2ggdQocpqdP5oFTgGQTWkqPk96YY2bs",
  "key4": "4csFpBrhuGCn2BFauHR9Z82QxgtYX2op9WAmLCjM9Gv1V1R9sdsPK7JWUZD53P6aymrf7ctziBfMkHc7U4df8EDG",
  "key5": "4gAVv1VsfrFa5XufuW954GCHhFACL9ghsraADH7PvacRBRVU1nXU8AArExi8kvDKuAggvDAxfhLyucDJTkV69LKr",
  "key6": "3RfgD6QMyzMzrWrpsbo33RVQjXHs41Ej9F2KK7zRNPzbUohQaffmAUJ4QMJqGazcARgLHscFPdCLfC8fSiEB3wvB",
  "key7": "5jFTL41jZfjUbXh3dCdLqm6YwMwe6HyoSC3mZJkMdjZjRwTLSXLWuY1XHV3GQzjqN5zVR4hHL91UGhkZ1Nz1wiV6",
  "key8": "P1MsAVaS8BsVXVUfP8FxmFkcS9muLE7VpHGw3P4MrnTEzqe9p5dBMBVEFVNmvt39kYQ4JL85nUnVmexXtk2N1Y2",
  "key9": "3i7MWt3YkNdJSncwFiqEUKRdYreP5tM4NxvbMmZm7CU1wrUwpPkVrJNnZKPPwFPqavKvRDLd1pbbvdRnXRCrkxB8",
  "key10": "4wGrfy67QLDYvAF9FpUeh3zK399bjJfpgRdZrggqDTiDkcsgyvCtDPU342p5kzfVsxdGR7EDicZmjDMPq6f65k3G",
  "key11": "5CfeeCpPuoDojNvc1DyCac7n6KKPiSCHTjbUB1oHMgbvKSyamuLmr8gTRaa6xXNhM8rDkmTXi8fo5mwE84GarZzg",
  "key12": "3wM7ZDCM5LoHCe1UUhB6ZcgpNrK5FBZs67oepHg7oibwG3FmdZSxdf55fkMGZppuRoZpNPNd7ng8xbynjbLU8eSd",
  "key13": "3r6XrBveDdUUEhvCFut3YQb7DJa2Lh9HUgjxRXKGvGgyaJr5Hedi4HKdmtoupoPBdV7Qvjmsd4wJWXddqf6iMMEj",
  "key14": "34QFJcjE81s8sPmjwtn3asiKzcGwgjfiK4pqCzvUQnGpeYrMoYLHkZ4bRoZXzQ9S1aZQ6QeVhEQvnentoaN6zhzx",
  "key15": "2etacfgKtGhjbqN7JG6seK2FJDvR71M8WtmXmkYdRGkiyFppqgaj4yoJ6f7XrMZKdYHvybnGwit63LZMeASK9dHy",
  "key16": "xhKyHhK9R8CoMZKbrffFnzSWPZ9ZTht8FRD4e8bsZuTUZq4umzgupxAXpAgEV8sXHsGgtAhKPSebKSUBHv6Ym7G",
  "key17": "3F9uErxn8jiNHTXDRwryLfwRre9QAkVZnP3WGAWARHuQXK5nGbanrCeAp3iSWZXHDWFr4w5j3PnvGyLgdbs5JpjF",
  "key18": "4ZxaNpsWduNoxXCkHuMQEMHP29KXNNqtGAnYdtLU41EESRBt2QJk6uVPJ6BHr9J4PKff8BNDs44uSA3tjYwXEEng",
  "key19": "5xB6ah19Z8rrmkAYhL4U6d3cmPrGHYi1XmWuczp7NZNndmWxNUG7EKJ4C2PLD67MN47gsndatGhpdWu5GoLHbfxg",
  "key20": "2FG2pyFf9UBQvyFnY7G9FVSZuGLnebt3BsVoKii9fjBCC2gtTVSSp5XYp32L9mMgCscxDZSyVXUSjH88WZa33G2B",
  "key21": "2RtLz1WERmvWxaau2EBmnf9HQ8JCyv3RPixpvdVSULCJiqfYT3pnyUJn7Xz6FSuVTSSKJPkAsoVWPjHbbbR5wDDU",
  "key22": "2D4XXXkeg7SaQrpBDZrVUdirs9eA8BamkEvFVuvVCsYkup47wfwC2cXSH9wrpL41vw4S4piQQhdBZC8QgXJGdsBy",
  "key23": "6wPXrHZ6c37u7Gmj26KLPPWTXLbUBMRLm54ioLZAVF7BAhFhg2vVvGBTkSBXjv6XTc4rg1Z3wn5EmXAf4STXuPE",
  "key24": "31L6YS87romzRSGtZbZFsDAzxLhbEXdy86iGzy2DUBTSugSfX4spoAnCDyofzEnrRZP9YXj9XXZBAeiVtAZjQrTs",
  "key25": "4hAFShsWXdizAtfVgqebp3U4m5Yi5EZ7b7uRsrGt1vr5JebB5mZKCRNUKQBt4JXesWPmoJn6VXqjBHYizWCH6Xsz",
  "key26": "4NjKvvujobVdYT3hHjAJrV1gRF2owYhfWw3sg6eULD4NweEEJT1eDxswQhsQad7EVqFzK86aQoG9zDszogadqrpt",
  "key27": "5qioqzuq4KSzRSSiQyJzqaHa21E5WrE4zfd8ZnBntfBRdhtLzBgZEjNECfFvP1iLuLKNVdo2PHU4rXRm3aC2XtHo",
  "key28": "9hnSyK45ERtCS2DbFqdT9HHdr1QDoqeF99VdiBE6Qz5eXcFWhttiFxZWwDVJrqKy65VujUezC9JKsQXMtSRxonR",
  "key29": "ixCaextfpfw76pgmqEbpDj2yXeyxJ3iUWe2Aoj4dGHKf5yJ6Vy4Mzj6N7iVzqHbgNeVm4jV1sJL4p6aTrHFRAHB",
  "key30": "5h6MN3xYZSScUd2vncDmuQPYwSkm4EZ3rWoFPpLWc33vJC6L7zvCceEqcrCNzYywWTxqEFCmvXrff3soRNTBMzhR",
  "key31": "8S8KpFGq72oWaDBsFGY4BSdhkuH62fAVdVTVrmeFAYUL5dTFPDd1UN1jMdhU57daSQsm7SSLrBoUAnsgdyECj1T",
  "key32": "3GAQNebM91b6ikghSpJVKwM55KNrTCnrCZFUzqrDpLTDCmfcVUKjKTmGL1F4UnRT5KJ5qUxyY7fESDd1jdt2wzha",
  "key33": "4JKQrhQBZU7ZmEaFQu1LaKjBAdhsKZoWwknRviw2P2rhcLrGzromcccwSrCbHZSsmVeFuSGSVV2Z4Rrr7kc9U5tr",
  "key34": "4ReGDJeeif4SYbXwmdVeY3fuAGVbTNqciNsNqrtFCAdpW9ax4MBsknxBrQGWzTZV4HkubsFXaCoB92wHraiuJsf1",
  "key35": "4mkYM6JYni4YtjSQUvxjLxwWYidrVSGDHKBi5fNt3ae2mZp93noqBcNmEAdYUNLdyqwwgHDHC7ao2QFwd4WmSsjT",
  "key36": "5w5mLf1H7c8KctUTpVAtF7Pdw1uvjdn5SEKmv3bDrkruUVqCSDBbmpD4YdAYTTZSBUaRdvitcqkWzBpfrMxncvg5"
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

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
    "4BD68UsyCUwDacjTucxFpu5g9e5uJGnS398WD94Lm5DtQNCzYW7r3atrouKEbgbHQM6kjs42NfKH6y7mvvEhRVTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6769Phe5TeNzpfYoLmiitQkUDcYX7BVpH88sSVQGNcNbcpPMdWZzybhKPR6KmbG3ujkuTfC5k4b9tTkhifo4ZvZh",
  "key1": "TSgUeGzdXSvyrYod3ppDpNdNpnQQhMaNzB9w2ZybgK1UxXAVbzYhepytBgy72v2PyTRhGz2ijDTW2evCZitrndP",
  "key2": "4Tk2JsKQV5fLT33tmH3jpBZFELS67RojQztxSvcVoaBo4YXEmuUeZ3qE415LMNwV55V8xtVxLuomDtjGvLZbHcio",
  "key3": "2mHCNqsZtQkU55uF4NfJYGTheuLA3frwKX5gWwZ3iwjNhmYu3Y3tdkDRbKEXBAH2HJTKHMksrESwGvvzrZpVVFME",
  "key4": "2BSreL1yEuPwthRAm3pXpFAyxp6a384AxUvjgBdBU8J5VLo4s3PZCEuK8RqRnMwPU58uKtNNrXZ23m5rtyoCo4N3",
  "key5": "38tDZnXS4mANEnfPjm9s2X1fWUNYmqPbPKR3kAxxJjAa1dQNzpa4qSVhAefZiB1TG4vBpKmS3gpw9habSepB67aZ",
  "key6": "47oy2Dq6kfDD4EK7xox689ZajaLz2pdhzBrA7MWWmPqfRfFLZ2GRB6MGG79wKFEEpfQxfrKPsP3x2MxV31LnZ1T9",
  "key7": "2aCfTvQHbNPfMP1qCQxWoAVUcfNx3TEq2Q9szBNQeHN37R8XKRwoLSG7ow3GzzRGoVUDGQqEQsi34YbXdDEbARm2",
  "key8": "3sDJvQcB6E31ojiRarC7v4QxM8vZVWbR51mFKSKHwx1jRYDYn7B8inE3CxCdoKyniM5DqUooVBuoBkT7G8nWq3HN",
  "key9": "64LEqNNiEESj6zLKVn6XA3hThJSPLVSVEDGsMRNSezKJE5TB2Ab2LJBYNS225hd7jXtejRLLfbNkEvHuot1TWq7B",
  "key10": "2fooYYbxxdz6SFXDLUu4gSWYbXZLZYCVGNYrq6US3A1GwJKZbt9y7E63G4J6KQJaWgFbC44dCTqzqsVmBY2iN1aY",
  "key11": "3Y7yS9k5YXwr7rmhxEjWzSyNKGkufVVKfrretkN5BnGWRzJKCB6aRZepaDqsmqrAc1yTGCd1W5S7MrnTtVhs33Gf",
  "key12": "5JyRDWc4BwW86EmEPmBkaF9rWge7YrHx9G4UmugKGDVFWGceHz8CJSh1yuJbSa6bEJCdJ2SWrJWUTs1r5CEv6ssD",
  "key13": "4U7HiXr4oFjnbVCsbi3TGkM5b1rbhsqnSoGzwzUd7L4QyN43kVAW494wVgodgGBQo54aVSctQmXw5VhX8AY8anBX",
  "key14": "2xBXYN2sb4tMNYdi8qqCJPgwvMswe7xRPDi9ZF3ptrF62YvCzZ8pmnDXfaBNgSbUDsoPDhy3ZfpGBqA5k9qEd1Yw",
  "key15": "4WaxtApRaZjtmiLAZax5e5niGSfWGUZGNgNtb5hCakK8dumtx5qrA9tnvnPPeb2ym5oqccvfFGeYmqpHQXuNQr3y",
  "key16": "3g4JhP5eBfLtqfv9TCTYXrQfEFY9t6AYLGHKE4hHvA6rVjbrpkL53pd3o7C23oz5qbANg9Ysrbc3oxw5wLDXEhX1",
  "key17": "5BrQHoH84HPX1hHBa1CbQbsw9jFpSRjY6AHnkU7wKJYGXwYkKgVNkuYuRjkU1RVRqMoeAznUhLNT1VvA3Eq6iXaY",
  "key18": "3Zvt5dVDaGNrj7RL3DzSsLtWeorHv5SinKer9tjD9b7rySdV1JCZzhE6A4uTdPZuKWB1GDUTsnSVarXcpVnNRWWn",
  "key19": "4GuXpjR1PmzfmXb9aschnFFshr1sxdF7DMGY5aQQaNbUdu3RAnW2PFsC3i5u1r1f5s7NoERiwrz41nBQT8nWaXtJ",
  "key20": "2jE3Z2bHNtbmMaWhBBQErsk6wRrmPLtDoXQZm8Cq1NnDYUQx2J2gjFi912b5SGwc38wJni6PtDcsc1nTnqgH9UJq",
  "key21": "4UW8x63zVQN5wPJa89iXtSZhB2FHzYdCtzV1RqDovpnTMhzMe2eKz3rjuVBxssXitvVRaW1XnQfG5CEvRSk5dGwB",
  "key22": "5L5Vx2RjuYMTa4KDbCV5KYWn7iEJHET5WTT9d7AbCwUrJmPGvCkhsb3eB6EcnydDcTTjfMY13oNdd8vcQtxsAJtM",
  "key23": "47V1zzb1SVmpGXVyZMSfWfQZ4ya6J7i6LeH3QwaKdVx7Q4jS12AhFRxV7i99A4toAnVoKpokUwsyQx7rRJWAkj66",
  "key24": "2zLfzd3GyaLe3jfeVG2SV9bAsbGq4KurwcWryqBEh2VduHdtbCJHAAnjp7mMB5PCr2MqM5yMi9ivuPpvXRUMJuko",
  "key25": "4zFm1kh3HovnByK5nfa5b8XoqB2Wzg7iogq6P1Tg9b2YZKJUrTwnCNHpEktvaGM7AeUPVY8mLXukWxnBAW9Qfvxh",
  "key26": "EHsJUpgvVHUtXw4r3Ln34pvR4cADbxPhmG46P4q4LhuW1HgHGiKsejbPvXDUXmfQuSnwcnkvxTG18mW643v6h8X",
  "key27": "2gwgwyoLQ3ZB7kL9gcbi1cQr58ioTn12E4S3YZPjMmR7tT9ra5EZBVhJ56TUwVZNh2RzRjGdyNbUsfEZfNHT7bE"
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

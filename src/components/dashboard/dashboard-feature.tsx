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
    "4tjDnmfEh5viEWomgkRVENQyLo28dUJotRvBrBkxUudk1DjM4fNqrYksV4dRVbVvpmxhJcGepjTSbUZ2teU1fpuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GypdngUMpgeMG3hpkXz4tfpjVjRaNG9FZX4DVUVNQ5uec1sYFMzv9L6JCHb1J2nf5rhgnXNzDEWFXLYYghEPXkj",
  "key1": "4kJQ95UWxEiQk4YJU7cZRTCiWpHiPwk5wLRZeFWH8rDFrffif48iUeK9dAzAJwti16MFDtYZV23sHx68rvbKaCMC",
  "key2": "2mqU6Wu2sNFTiPJncFanNpQDTLukmqTGFHBRCEHGJKx2XjDfR5RBBKUSxkyrcpPatUV7xx8o8HgXvknvipAMdJUo",
  "key3": "498Rw3prVMok3DwZy1Q4yRRer3W9fc6dhfWVvhscAcN6KGDefBBzPmbiobWVCm8xTpC2EBJSnSeMU469Lmi52mir",
  "key4": "2CzwQUWksFf3FYCSJR3Uow8ExcyEzjLf8DcuVRFZwXBRaP6GN4b4vQyFEgZWtw1os1YBecpBx4Toa8MECB4r7LB4",
  "key5": "We2pY7btgT88d6WEmvEJ6cCvJL5DqDW2MWciyWKmayz52L9CdcMnbUdPtRbLheCWvqJHb56dB5yz7iRFM2zTy3M",
  "key6": "3kAtsSAPFmVSWDhy3gWwzzDpzTrqJpKv2sSXnAzM719rHVkRFtTHZbhQWKB3i9RyiRUjYWJvf6cteDjrkgycggu2",
  "key7": "5ScA2KJe9CsFev6CMhicHNrmLWw1skLR8dUxqcQznTX7gpjK1qdpQ1cN3QuDb5sq14LjWC7LDhPPrmvNB6s5xhq4",
  "key8": "4eJCdBVz6GFwUKaVzu7sNaasbg67nAv7ASHKQTTiniLQ73rDUCsinx1TfRPtohYKCERvvbWCpXpEa9omX7RJRcj8",
  "key9": "64KXJVeB27AQqqzCuPFh4WUtWavYkPh7PAiXXKph8R6xRYSqXTFVBUeyyW1ZiSNrHGk7pkpEGwQQSn3qYg928QnV",
  "key10": "5az38WRm4zeAxrydUBoY8ugQENJBn7U3DFsMeKvufVdNKTnmpPK266Y7y4PXM337egFP5f55BR3sk1QCHeUmppYP",
  "key11": "35CKEPvyeBUv8UFVUADCGT6qKnSPbpicHucyvKYwx6cXbZoa2ATbPargrR6KdW1wVSs2qPJDke5hKVNy4B4bGmB6",
  "key12": "5Jh1DkZTfZgYinZodHZUMJnW67DnoYoFGJVJbNfbrGUi9dAWTQ6cKzYKb8JxBAYithTxXTkLRJVbQKxGNPGVjsUu",
  "key13": "5LirRJPcFrW82jSpB37jyCeudeYsE5dqS6vug9bbVDTscdxT9P49WmFJWotSJeXh5KPqcTappBNduTQdYfCRY2qt",
  "key14": "hLwfKaZgmqaMuTJhocBiQcQjjh9gLAqbp6WfMCcEDmFXuCa3kJC4sPrvYFstmmjzq66fdQxhZGk6FF2LtrRZbPc",
  "key15": "5iFxHeY1bVcvBFsAbiP4bUAGznpgjavsqPxaaqvUcQeuDHNquP6BB6q6mTtTNQ6nbh4mCv1uxbJj1LQiwy9k6v4p",
  "key16": "476dQbETVrt41EWokBc7F6CNRzQXzKgoxCfqFBfHPchY8fc6BLkg9YCh227Vgd8ZMJvHP5aNZ2mf5qeFUssHvWLG",
  "key17": "4sQokQbReV9E6S6Ahdd1jz9q8so4gBZ7uPy4sYWh3pJ8P345QrUGS34iWKiyxdu3Tx8BhLQ6Ty5KhAxVFGwFsy8X",
  "key18": "6FbbzCnyw2mNYfDEBFpNmUHHp4i58HMwXzXmkxYBHbM3NgmqV6TCG6VPoLUXPQFpy1jDDgxF2efW5QkXGoMVgUF",
  "key19": "33NLM8tU2a1LVEJwRj4XdKN4J5k5jHhHG3ioJso5fG7PenK6HjDc4CEFbqsqNyGXmsJfERdWwQzRWn7SuKbsHHzf",
  "key20": "qTk6AktiZkZDn9VrESu5n7ZAszUHFwc8pkJm35iYJyLsbsnpjkNypttytauWvUbmmEncCeQfWNNEYd8aHDw5TUs",
  "key21": "2YKSqLFG1TsfiFF3kadgbWmvpmtGX8YwrDtrtX6YtnrmMjsPKoDXmNwRPMCEwyMVWhQ5mZskMneGWqxNKGp8ua91",
  "key22": "2Yjm1S19ZTrSZab6PJXkrmsYXSPHyCGWDJx2mhyGDdBSKj7Vhat9UqYoSX4w3Kp5LjpoAT8L4kHBhKDAmBUKH6kE",
  "key23": "5GVYd9sUvW93Yp3DcLXxKCJPuBxCkQ4Y6KH6L432apEh3uDd3yHa4gr4UXFDKLypeEMEEfR7bhL2TFiBkGBENHrz",
  "key24": "3qaQ3QdLepK6R461mvE6KzSppijJncA8H4kS1FCB4X3mSGxexSQQP5WEbwAuwbfnxRiZSQBbu4vQ4cUBKLepFzjh",
  "key25": "5x7wDKvvHJe2yKtZVRS64D9ozPW3yijJbMpRsTHsAffvkfUnErpCpBieLpSUAzgwogUHBw3Xs2KGZME7Sa19Bc1"
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

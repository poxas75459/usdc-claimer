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
    "x9MJc8KBHPDMW6o1EuCycwD8S9R4SQD84PQDiBQc6D3JNzq3UKnPcUUDzCci9CqnpMeNYo9vjV8gn1xSjs5LcnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xzjoiTVqReYAREbFUZc6SRDcgmWqnnLEPwNamgwgPo46an5fJjzP6sMuHGDt7thk7k9w5YEnxXejrnsEpsYRNx5",
  "key1": "5f9pmHbATRYdHpGxNEbVd668XwZb3edP1Hqwc9yk1kR29ZEGQuK3PYfrTaNEAww89ViHEim3uSFdkRB5KxqX9Ajw",
  "key2": "4EK2ECmwtoyTEPFZ9b1Su2w77ok5f85HZNhbULtwudZEqg9kZ8hb4kYFbkfKqFeHgDDV6Fs8NwbyN5pxNM7RzqtW",
  "key3": "48qbjiXnH2dVDj8N6r8rKiTwqa38MSCCoyqrhZmnooAAXgqYkHjTLeH2M3AvtcJDjuB14CmwdqipGy78eyxa6X8W",
  "key4": "4WBhBYVCPzT6VaotXUfgGJdzo8PT1U9E6uUy2CMK5GyAwhQVAEjZdxLnUWYqGNH8GhK2FjGCStv6KADwL4Rzfx3c",
  "key5": "JVmFVEqAKyCBBZzD7jFZHJGUWyGgofDQNAjkBpTvqWzmK6Hf4av4T5jmg4xibDDom9YCKbj2mfnts4uR4MDWjRk",
  "key6": "h5TDu55EkcdhtsMYDNgxc3TBL5fKFADWqJNtrAg2oH1VN7JwX9wL2Cb7CcmT3bJ9RAGqdMPy2hVZ915gaerVaCD",
  "key7": "33asxPJvzgaD85aaUnmDHbJX4RC4vEjXa2jDaw4sYx1QRagzU96jZuwtzPwMYhV2xovfBWJ8vNQeAZPrn5xHpmty",
  "key8": "2wqfCJG1JfAAaFZKHsitMgNsWnv1mZBxT4ZVLTxBNnoK6z65sy4rcyPP1pt6SUyySYLUx2ub5TEMTkmtEBVCgTQz",
  "key9": "3Mbg3Rk3nZAg1MXDDBcfjW3C1iZEJV5wNH5CpYRbtbX8iFHqxuaJB4FwsSPeykC3JPz1peYNYhdbByWzMnY4ENr5",
  "key10": "2A6dzn3z5imQ4fGbs6Nc5bgZ7bqNttMgMwFKSAcvG7FNSdA2CP4ibGdzgJY6n1J5bSJBJbXb3ceiKVueTYRGf9g8",
  "key11": "2a1gMFUm2VP2ZMyipTrK9vo7gXGTrBosXTvFoDAz72MY12D5erbxdQhf386TnAEcEDF1JKCbr4YZWdbzyRTEMRDY",
  "key12": "61sn2PdGimsCNDWhRcLQn9AkeNqDVePPDP384o68143WhzT73h9sQEedaswfrMmerYSFzGhZQpxS5UDminadQmTB",
  "key13": "5NBhD8QaXDjTmogUgrgnAqXttnBZU7pz6K3tosjKqLZqXxxFfvyWK6DuDtNvG18RjNrgthssj5NNd3s36fgc7ZzT",
  "key14": "3sSUNEFmg3QSiyKhPnJBFX6yMtJhnqxuK4zLE8HXtom9AoErGaynwTgzUEzUECQ2LKhtFeZ4giv1At44SHeZdoGH",
  "key15": "2kALBRHT3Kp3GS9DLFegmo4Lkg2dV4iKui6Yh7aCcGHVAR5GRR5KoKLcRFi9fKTz1Cbx2BT61tJKmmR3cKyWCihz",
  "key16": "5AzrLgtBJzCshV1wcmepjwWqFqGGhFRU8vEdEfc6Ea2uU8UTw865v7ZMtHwEdwYfeWy9aQp9m974Vd1oZsWvwv3V",
  "key17": "3jL8ZebMydcbPK8BVicyAdMXkSDmyR6bXbyiXFdo7Xh6DjHjTXQNSBobEddMLxhhKY1VUv2rvzMgyAzc6NrUn6gU",
  "key18": "2EUjZBbGy25fo9VdDrgzvr4AUMaj3w3B5NYT6Mw7wqnnp2z9nwsrhvjBZGzzSyjDEbsrbRhneb2wTcREHQs2scha",
  "key19": "4TeemN31AfWwRWTHJdAdjEgTvFagp3Rj9ZZLVHbTAZqL84JrTk83wYeP8TUuAtSqAYfjgSduMB6vmZjbdPCozq2U",
  "key20": "2DFaTvTpczQghCU1j8GPg14kRcJ3KzUGFuKXj7SfikqRZF6ViNkaLabuxv2Z2WYvhhahr9GRTzbVqeDLpBkRXddt",
  "key21": "4RVbH8ko4u3suq9EnEPhvk5MnEJuAVzFqfWd9UJ64oz9YqDN2XaEm9CLFTN8GttYPvgsb69kGQpYWd4zmLUMYstB",
  "key22": "3h22czhLE75J8kfCvVBtrz8gFdVuhSFt9Thrz7KkvyD3bombHEVxzcuLimW2yBHLXdGLH5Tv32YiJojzcPifTZba",
  "key23": "4JVBJzJa8UkPmzcZ6FTo23kmzEeayMetF5G6qCTBJWRUjKc3KsNZ2ojffzVXiifL5PN5KKmDoWr3B9Cp7BXJUmYE",
  "key24": "3WjyJvpUDMngUKegHSiQX1mpJ1uAnibL9y3sVHuyA7xT6vVhfkWg6fKDzcTT45gyuB2Ur2eV41icEeHYt94Cjc5V"
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

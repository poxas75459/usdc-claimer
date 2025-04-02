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
    "ppwCTUB2HLKDtBZZ5A3fR8BMCG2WbZ4KsqUNkHWcJBgAR9TAHUAoW1p7EPLcq5T5pwVY1XTjhhZiit91spytZ9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cuDNXrgc5SzhXVAS6NwRvnSKiSdzRFBZrLCa45Nnrrkf6EvHe6dHKnJSmLrsPBWbXRnXqaz8ygrhCXgagSDMDce",
  "key1": "33rKk5KXn5koVXyVgxCbTkcdhx7vrCaRq2Rd4QFZDgnqiNXF963nL94YXgQ7Uj66zggqKK56e36gCmMP7h9KKVvX",
  "key2": "2G2D34U7ktCskh3FXsj8RxWCCvTXCPu9me5SprdJUe4P4Yha9KcABPJrw9TGc1geYwb8UZC1f3Rdve77J5ZVVg5H",
  "key3": "2KTrGjCMhGA2kaJUttcy1cjLWgwa2sK7rB7JJdpie6Mtpx3irhrGjWTa7wMybQUWzJeTDDYmwLwhD6Yq5h5n9bmu",
  "key4": "3RV5gvrzN6undCvHiMvDt7pDjhC4oAQf7mMZjNbSUMNJmKWxbwbfKZWz8D1DsdFQM2LBUBZkUfEa9ReLbw1HrC1D",
  "key5": "H5somj6mxzpp4TdPn7wqZz7pzLBJSKWmXGpW3GMz3jHeDDwbVwuvRMGCwZVp24g3DTzgdWPCadxPDP73WfQ7j1K",
  "key6": "2ogaBRzZtGzxksnaeFUwme9iKPg6UHaDHgqMd9P2nV4D9uGRjQSDYnx4zdUvKmR2qVveMDyamDpouJVRkAfQxusX",
  "key7": "2c3xNQstcxtT2jgDQDA7QGPiTbrTmJ9m3iB8Pmao9vqNS3N6tbsDgTC3juQx2rq2UTXam91S6zVcQbcVpMCc9gPr",
  "key8": "4zyAZVMiwE1WujcrJQ9dw3ABrQJQN2m8wKkxtSxrqdQERMixLEeiqzgdro2dpUpzmTwm9bE3hk49yAZAd6DXZoQx",
  "key9": "4LaGngZBz5bQmuramRMiyi1FGNYaGzSmAwCb322R5Tvxks1eh1bhof9PfWrnYHsTg8zfD3fz26jyuBXkjoCriAmk",
  "key10": "JoSzuHEE7ejG6i5BEhcXXG9RZXNpPTkJZCpN6Uq9GXP9GE1PPWMpMRmZPZAwrRY4UMw1UVHb8QNYdEEWLArueHA",
  "key11": "581wfNKKxML1BVc9cci4D9zyvxwfzsAifE8ChMfyd7e27CSji45x9UHyQRBa9e7F6TMDFSJTNkzRqKH5iyqzPnPF",
  "key12": "iLzE48VjXs1MhhDs2g3DnVtu314xRxtm6gcd2T69bZkBFodDSCubN3wxy8mvxJQj2Mk3d85nyBB5CDj5EHU33cb",
  "key13": "2bQ5Nza8pneFXDgcPjsQCWaSqsD9rjBCNvYBQ28V1f4CTrWFi5ReqiPoJwQ7MQZWpSkKen2ZWaeR3qnq3gSDB9T8",
  "key14": "E82G4JJ4BxxEDJP97ECd8Hc3TToMinDLxhHxedGRWgVUh9MJJ7AeesYo8J8CZuQd2hzJJtypkB6QJtJH8mEjH3y",
  "key15": "5feiERCQtDsUJbRMLi7qVc7uz8xpLfB2evDJZyNc13bo3VnqBhvd1SKKJrv3ZbqgAoi2AUUHTzPfv92MJJgyhXsM",
  "key16": "3Y8JVnHiygEp11R4U1irrs6xxp7xZWcbZGLkTZhZvhQdFFn9dR5oTDZSWKyv7LgbhmqzZhJKTcF5ptbmXtG4XgsQ",
  "key17": "kwaCreS6Y1X6cfExwvJyxJxi9LKgbSy7BXuq54jYEYXBgDzN3E9NmqhBC2RELjcTt2ZM7xCMT5tSwgR7fJCH7Lr",
  "key18": "4ZCjo3WkHUnDgDGpJVZJVCcFMN644WFcEhuppo6f5vypyHHuXiMom2WoCpMQrbteR2kPXUVWg89uwjiXNxuRAMet",
  "key19": "2aMpGYAaH3r8iX3LCPX5feAKM6z4KRrWRALb8LVRm2kHwdokfG78Bwicpcwrxt72VVFfvM4eV4UGJfxCqovFREFA",
  "key20": "2MYNeK2Goo8aXgMRKr9Yf8MoY1KpjzyLvx6j358CTyApKygoLaCx7734XJMZ56dDC13fZWePfbYdCMZTyPRECecm",
  "key21": "3eBoq8FTqFsGKa5LZJutnYGtjSMQKKf82ZryZXz7GUAqXUBFwhgD6SDHkGuZGejRNmcGFLAEVBWDR6neEP8hbHmF",
  "key22": "zj7gSq4rr81vtSvaKf2ZT9xDKko1ougyTc6H8YeQqLp8HWUiZ8s6fw6V3jVWSeh92uNYeTiQzoZiciMZSt6kTHf",
  "key23": "3DzBYeWm2CdTUrMMncaFbjLLAzU6p8sx69uLWugXBrZSNnHzsmcdMHcNDXnN1sa6ayHQrAKDxmZmq46rDLeYK2SY",
  "key24": "3prDTnDJVv3G8zVtvRt8S9xUmS9KMBs1FAB4yASWtKn654bgrFevCktrkww21V9bVYVTew12QzBwgJRoD7yoV8Zn",
  "key25": "51bLiWypUwDMmy7qpZf3xNcUd1eT2RSmgLCPDnTDd8ASGeU93AwwX17r9ksmtcj5ubRUASuaSKq3hDtbFztMq9PX",
  "key26": "4HqJFCnWSRxvVVGEpLGginzHCPahL3DGKgbFyNszA4yZHvGdAMFmEn7gYHrogZaNX96HnEUP4vcAcrVPLxrRxnKe",
  "key27": "DAv2BwABHwiS9fVRB5hBhZ8AgCuGCdTjK62iidbcTKFhQEZyQte7KasGTLcYYDZpzAxDBVV9Vqgf6TVUrDBJXtL",
  "key28": "37Z4Z5cF9qgc2RxN9cEUHJitWscZ2EVpvFbBnbu3Xdbv3Yex6uCEUQPSXdHc4GaJmYkASUkxyFJSreLxkgu5sYQk",
  "key29": "5CdMQd2CTghqbLWi6cnr2S3XrQMu6szqtXuZBpdUMpHatdKR91C1fmfUULbDzRkQshk1w3sSS9WqJF4qhh1qHeq4",
  "key30": "5gWWwY8hsGUMvtq4uEg9ixSKU8AweysoCm4h57G4rdekz8NYKENMNzD6YvuDtYTB1LASz98hNjH2q7pbAq9gCccR",
  "key31": "4V4wJCKCrGdu4dJm3GHhZDHpJk2YuvcN1hWZTD2Pfqt7FVDKhPQiMMcnCto49YqNCJjDkFH72uVQZPGEhPY6d4hW"
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

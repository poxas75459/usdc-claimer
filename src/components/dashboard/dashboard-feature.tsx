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
    "64z8sfGcAixoakWxQLgES5gBnKXdT9GC4Racq19V81Hej55DmJYSLGLQUSBeLmjmeKMCdsWFWyef1RFJZBJBTGjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yCnzGS5R7nSskMS4n9kqF13VRAEtpogpibzeaFXPvRtKfB4WYmSda2Qxv6uCzP2rup5jMhgGzQdJdSaKH6u14rF",
  "key1": "RtfgcaaTyAj25qtL6HsppDNZ9hDZA2xedPYQDKdt4xaWoM7t9tMDyASeqddykAWGkerBQmbVE7cPn7VVqjyB3Td",
  "key2": "2ZMfYHbk7GA897SHTetnxweweUfy5xEweAxoMTAMPF32PDn8qNpdMvkQb94DFijFdpfQeDQ5qHZGdRy2WatbxgBc",
  "key3": "4pAFC6kF7KJNrzSu4caYjmYbvPkT5dtU8WmNsxKLTcwbhU5nkxhiEDjNbnsLqv3aVYToCYvcD9FhZn5ege62n4kT",
  "key4": "5YSXQNaYVmBeBRckJFKSLiU9bUhRchZLxWRH6FN36Qdm5vUFgwbXW1USCKhLT1tixWCPNov3MzLrwkrgqYyP4D6z",
  "key5": "492jBwiGhJM68qVCNuXCVRtL2D1gsVrvXva3wQgn5REK64x6hxMVuT2KVg6YG9mtXCUNidURwCdZwp41xDUnjk5f",
  "key6": "KPU99oYu3AYcc7BttzPBDhnkAPtUeUvXJ6yaH2dzW2k2Zfgn4kFNXDBC5diXJPD1J4dYXU3qPfHXZbysUyeEDe3",
  "key7": "3ZWp5VA2HzJfrsXF38nYXa3wiBj59b9GaZpkh1LpSJkT1jbUbDirqF7NiwzavUPCsiWxbm3b8zeZQJcFVMXr3t4d",
  "key8": "2C2X8h37bwztakzHRqw98UUqmAYcmt2Hp7hNHyD7XPv1NEjufqvGNP8xU9GhjXqL2c2M6u6EqqhhPxhwXmYLnhe4",
  "key9": "374o4EdnCnn9qcgJtzBJfKKpcSdZ2SjiMgdr41jH7NcXYFbF1VLg72gXT2Di41TX7zXUjcf7awT1n7REwq3wYCYn",
  "key10": "5E5CbK5eh4HuSo6yQ4LuLKiVKJjyt2PDt5sBnK1HyQbNFRCtkxkpbrPi68dhxM7JvxCGkg9oobpSY4bra6fs3oWo",
  "key11": "3Fr3idC4MRNfy9gjSqLobBvARF2NDanMFo9PCt4gvi1KgcVoZTxzUkMyUbJPLYgFCZCkuWP1tZgnyBBcHkt6a66A",
  "key12": "3qTLLiRhpgGuM6EfxFgMaCNW3aaCVqxe1Ppo91df4em3BayZ7vPVsYDFzRCnGN6CWQ6tS6WucfrEh8m2hWNn9sxD",
  "key13": "3bZoTS9ykAuPCqXQWP72FbBQ37GwKcGe5F6x9sJk14qYorBHr46hWXcKi8nbQvuhfritSjKUHZ13YXESxnmTvxtW",
  "key14": "4R6E7k1BPhuHKAwt6onjEJ9GNWPk9s7isHBV2nFQrwh3Mrrin9bmTM3wpzwKxU9QHbhLx7ABmw9eNS9bB2qnaTCt",
  "key15": "3UVhciTGKxFnpTMyjrqw44jA1gzNqLx3fH1SJ5D2rs6R5pkFVnVHt7p2AAeNvLVD9AGFoi4uTqK5mNzRHSDDRn4K",
  "key16": "5btd3qNn13Yg7PGC1jU9rqkZf4zcXwojvFA1BsaExFr5nX4KmpMgxvqkzx221E6LHoAJwo5biTPvzVSeUbMq96J3",
  "key17": "5sFMDdXbgCa9eaPFnbzNjN9j7YEb3H8qjiGZnhxo9mgj2PPnHUnctjZ8UznKTM5LBmcGNtsGLy2KJUmD4RxxazQN",
  "key18": "3xn9xep6AVsuDSowWftfQbuYQzMMph8SybqG74HgtgN6X7xHhnBJgyq4wYVRrGCrdSW89ccxbwzDF5TBhr7jA19m",
  "key19": "2QoTuADgaKZw4ynCRZHQKR1LAJ8MGkHQJWvw9nwxgEfRyfq8DV93tZJNDZL6cALCSTVNQkSaLQD29cW6MKtxUkZq",
  "key20": "5gGhYZEJwG3xqhcaHLh1SDx3eaokHkersXJx7eFuXHaNWsp9WABTYdBiNcw6HCys15WAofZEGtJpLiuuavH6iPLN",
  "key21": "e8vtxNZyqdLL3KDQM8MwZkZSXR9bSDn19hjdJbqDCwhjBStzo9nW8cJhNL4mYf6chzfNyWP85vZrRLL1EXEPyPT",
  "key22": "3Hz8i4Wv33B31eocfef36z56W88WwTML9zXKndJ7bBy2FnaZZcYCCsiudePT3z5vdvQXzRXGpiwZubFGLvhm6V4S",
  "key23": "2uB2oZJACw9VYgnYbR2gdbXwsrG47MEsEQX2ZN1Snpt3e7kDCvnmrMrhodrfKbugx7kmJkiFcfFNneDtRY4zsGK",
  "key24": "3FrSQdqZxkbkQAmyT7vrJ8kMmjGUpZZ1wqhDUtaQrHpd4rbYrbbP4tkFRwz7uH3JmpX25eTtNj3BsTQUVZxNFxKx",
  "key25": "2Ua2CY6YjWt8LLDp7SySYiPVk2AnaKcmZZqKSjJgKAxMspzUpBDEEf7bkx8pzT8tcDtnPSrcV6fYTxkgmAxivtJe",
  "key26": "2KvtmArY5vRadBsBNfRdsHUFa6TxFaQWxxm4WvhXXrioV5D6a6mpd7ubSR3aewjc1kAsKVvUhuDBNd3iedDXQjSN",
  "key27": "2YmUzhQXQYBfAdQQcT6xdK3eeZQSQg8jatHGNvwZ1vd2KcRH7cEMd916nm5nnMvKjdnCENe8Kb4R8b3zPsHhjVyv",
  "key28": "5Kf2WvGzLqiDUFDcUKAxagyXxLqncBrUfPTaYvDAC6SwU5DPw6Gdk88Jdv1WKzwNpUXLX8vnt7XkE6z3xD6iu1WP",
  "key29": "MVbYQksum1jVTCa85L5CHZEmSJ6BM5xr7SX3Afs3fD3BZApxdLVWWzP6rWfWQyrRnvZ24jVXew6MRGEdsJqb2QJ"
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

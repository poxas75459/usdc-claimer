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
    "4wU43Lq6QAqTXmienH9HMZBuNLfW72qgqpqELobJF7QMA3gN4aeCcQi2HEDYwDR2DmarxLtYRtEddnafwvBAd8Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HG2qb2UZaqjUbx1tAJybqBE5B2xBfjK6WLycbfVnRvHtHwBeKkVybRN3LD9HqUHwz5bbLBmehhAXRMv8mU8Wt2r",
  "key1": "Fd6v9zQjokhhqMxU3X2k4sw4VH39AXNZ1zYmxBnB45f3QQgnaVZ4X925gFcRaKgNWKFfcJmCAgFc7zQq1mZsMwc",
  "key2": "3nJd9dNNidHQnCoGe4Wf1uKUeJWidMdvdNawiKTLbnFxB4zLhJ6zy8tRC8beSSC4Qir6D2oyA1N7ycSP2TNxqchf",
  "key3": "5wRHuzwc7pJf1giHbxH533eJ4bZaDGJVmMvT5vRiM5yETQ8LmKvnRf8DNYrPKEcayikCKnARTirmzR1VbDeJVyCQ",
  "key4": "4L54AHFykYip24gyN4fCZWa8MBSyR9kaZG8a2Qz3HRyAK2ZignEYseTCHMrWU7Vfgo56rYvReyiwtCXy9sg5xE2g",
  "key5": "5itAHHtBo8JwoM6bNJa5igwPnGjLhckXR69uyu5XEJR7QeCWT3DjZmqn5fMdvhdsvzFYmPiYsFXx51PGKiJmsJDX",
  "key6": "3mf5wQVX5KX34r1bkDqyoaw5GVfvEXb1e8oVYmuoXy1xHCwdq5NTFXuDVikThBEd3bZ61mQNPgduJVRcCmFH9Nsu",
  "key7": "3nBreSpeGxXLQTNiGQ1RVKWLHJoMBJLFG5QhGin4XWiNNSSJEuzEH6C7HwaK893eT8aE8jzuEVs4iPuk1vPtC4t6",
  "key8": "2Mg4MZTEqwWpz5S33DvhkuynCZDEZwHchGxhPMAWyW1C18eJthnxtZbjwrK8tBU1r5e6uR2V7Hr2DsnSKEYEVx3p",
  "key9": "2ft3op6t2nB3gkwi3EBrJDqGVU4vUiQwcbXPF31ugXdRsKgSA6mixy8yRGhVHhx9vijPJpvAFFpUkn4TUMPHTLQ2",
  "key10": "49Qk7oW4YUcgTUqdqnVAtTscgJ2Pg1Pb4TorX8uEiLkkczQPcdGkmd7vw7XnkewUSh1fNJqTBJec5WNKCpZa4PT8",
  "key11": "3X9o6HbfvJ6fuhyEzdxcU2n8tQ1GC2Qweik9DjJUWDKyasvNJmA4Tih6Nq49qHojApanZMpY6qKJan9bwy7Edu54",
  "key12": "2awixkearzb92Xf7JxqCvP5NpiJnewfqKPMRzvbpGs7Hcz3wK1v2P7eWsqU1qJcSbcZbZBB4jyoYaqAkZeRtxhCt",
  "key13": "4YrtRnRUhpZegk8Kb8m3FyNLfq1M7e8KYwUPtZ2DYv2UbKkMuEJgbvEWPM3Su3wvoiG7f5NU3vcihgkzohZ7G3cc",
  "key14": "5LKwDqG6KGPihTBEtBZvNX8cQDtRcBynjxpLEZN9T4eSXP5hQonTTQGxzNuhG3b2NXHjrad4J1tCPs2mQoxpi35X",
  "key15": "3rmZB89U2pN4irP2Gv7k5eGsLWYjvvt4TKXV2CPkspFBZiFDqC1bo4uohqifNQZzrw23jDZyNzNgZ3vMbFmjSE9t",
  "key16": "4efpyNUsYBd6nfro6W4QW8caK2pcEUrfnCL2hMgbuEzfc6z6jBFLN563GxDSwbKYWTia8Rz7ypvVaniAu4fWcEpL",
  "key17": "Yj5h2RVeJvKTiqhVZphgYCZvCyQNsuQMVCXjKJyCbaaCrn2hoNf8yg3W6yvBKtdHeYhFY8qWdY74WRNMdTtSzEz",
  "key18": "RiZJTvUZiNrL3kfZ1ugapfA6ZkjHAMQNFHuhUAWcXGaCPT3YWLVxCHzoNSYzMabbbDfH293pb5hvwQ91odABrqo",
  "key19": "5EX7nqbRqg2QJHmPY7bbGpou6MtwsdRAk5u7BqhmhefAbsRaDNF7oBcnnTxjbR1jQ4DLgftpYwYpHbBNkftJoW82",
  "key20": "Sm4r6qj83wssSBSHn5u6ajYB88NWFBdmZubsNZ9xaRBzJ1GajzfrnVetq5RNgGzvFkF5D7LE1qZJTqwSbAYbpXy",
  "key21": "5Z8Tj1S2y9q8q7SDQVQCD2WhZ3vbYSn8grxy5HrwaQKUEUc1WEsHuiWpp1FSuN6gqNxM7bD3QASWStcnscDLyxRT",
  "key22": "5jeLx9XDtnsngvzGjkq4131vQizQ4tCVSWKGM8Uhy9X1BtmAmwCma25dy9csvAP8UTojmbHW4ok5LccMdtHtn4pm",
  "key23": "3Ek8P4PCKmQJ8voXAiVnammWyTNkHYprLqsCofWUCyYJdR6ka8fAWdy4HKZQ8w1vJsKSQG6XPDAcJQDf5CCQr4SW",
  "key24": "2JzTCxf9uaastZg9LHP1ENDaxZWjqV9iKCTUKUhXDR73d95xpFtctBNB6o3N3JgdXL8Ndwv4gdyxffpuBGS9FJri",
  "key25": "gjhZZjacrNFg72bXBXwCU5sEXhsLVucYM1Qt6WoyMCQ8UNx5ifSeiuGviR9q6LrNZQQqKKYGR1PMZSBE9BhPmHY",
  "key26": "5d8MNYM6WnrPZRqCxihm1ot3b7ht4bmieccYaEDm3UiiQPZWgNvbAuV9Say1ztky8xvxwVy9e4btCeoWF4ZTi62w",
  "key27": "5Wjoaxt1kBCUi1nXM86XX9azdm6ahpb7x2Tc2yQrZMRyyczAFMtSwX1rB6jeSQ85E6a1z91NvH8DZdubuJctdVCu",
  "key28": "3USvGsxZdLCVmm8oRk4TZfRq5QhKmjNbsNvt6N5z4TLnXfL6HJqaEjX9skcRV64K8vRcj7dPHPePA2X9EAryqiLF",
  "key29": "5v4C8SuLHWNfRe5BKC818NgB6Kjb3bG7bEY8ZYfDE9NhQ7DEKWCpdXUmUyff6faErT4r9p33tftCUENpuJpCQrvU",
  "key30": "Qt4rdrxAZtAQtamzwzAn2f3V65Q4XPGsHtXfhuVFmoma5XKwZTvWyu4mkpyCfXU5DvbXnB19e3W6BdNgMYB8u4n"
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

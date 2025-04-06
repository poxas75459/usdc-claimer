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
    "5ksNZYuRT4GEqPkHvSEmBGPS4UjWG7bNAM9mCaCatQkNYiLgqbyHr4xuR2gw6XMAMRY4TK25nsJd4ZuSUxpqwkAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XowgjkXgqYgnZEgfjoAoDbgHqv1AQUuLxXfEDg9RgHQX3KCeRYm9kSYLLXtzgFxadB8qWPLXCJ8dmMC5JMdmXdw",
  "key1": "PhqjB96MwdjGqsEGYcFytHGnoomG6tZDePMehTEDe5H7N7aNisqM2hZvUPGejivhRsknWhiZNhDHNMm5xgqzYJR",
  "key2": "5a3XGmrucBxuPrhYLKGtxMg6rrbXr866ksi2PFocyqLjaiW9dMdjs8Vu9Gt2bfAfpUxew8TUdkcq6nEMDCyxSpvU",
  "key3": "51NTxZe1M1dcmx5rB2UhPLW86FHuJZBrZpnLYaYscWUbj5wePqe3ei52fRnPANVMee8PhPKHryVPd9n7t8W9vYSG",
  "key4": "2mhb63SMdC3MQeMFovhg4jCQdM427sYfk2QnKmFo31ohCWU34cGYqbk2CbcUZrNxeNYuV6Zp4P6ouzexjo9yRtF2",
  "key5": "NUSp2wZ3zeLka9w5LJtrkczGk1oUvo1mnMJLVD1FTC2Gtxy6itrDQmFCNre5QyGwBUXsL5YfpKStmsKo1hqFmVQ",
  "key6": "edQUishqWQLUAGbcg1e6nBegca88QWiSK3zak38N5qrLTiNTL2U3WL5rjz3kMUBadBvFnZ5Zg4ZsHDY19f97hSc",
  "key7": "412FsyyzmjdtbZq2K7u1bDF8wW531VGtsxVzBaixg7dhFi5E7KQLnfsVhBcyAvt79vANCGhKR7kR24q9HUYHRAgr",
  "key8": "3sm24grbEoK74h6Bqq1rJNUHWptuJE9RhWcJ73ZwzTBaJc3J9sG7cZEa1yyDakHiheCVRKboiTykVK9kikG7vCbW",
  "key9": "3GzoSemCVwkiKcehrC8BNiu3DmqRtx7STJou2PRW9FbcXHjJnQNFLRFaCH5z2i4UwqGRxFUMUC3kPb12J8Jy7wUj",
  "key10": "2N1xb6Gb2r1QiPD4LGhpXR6gskRthh3GDiAYYwFKukrtZWpThF9J6miEaCbdcwJ7UVto2vzKjszfSHVFXLogJmvJ",
  "key11": "4KV1eVhpFaHPi5cM4Q9zYDTsSh6nqc2En3WcAZ5nCibzkSvUxJK37gqEc5uQHRvdqJmDmdBNoN18tnp6tLcQEgJD",
  "key12": "6qpY5KvPnDLw7as1R1HEhaWgkMN1z6eHoVcCDc97rU6QqRfju1kwZaDAaNkjCCYsG95PwVPGPVUxsnottAgvHFm",
  "key13": "3EeA1iisibnNodU1Tje9ESPyGJsBXtcAWECM6dAxNrnufjVJYhtKkYtCbBnvhYfnKeLvmJtcsVa7g9YjkLENX7yA",
  "key14": "uTv4ddTqci2KkB3HRuRdWJ4Tm6cpwzpa8KPbSNgkSotEJFd9WAroS2xeJXttf72eoy42qgq7YeLzZZw5KcP2X7T",
  "key15": "5r8pQ5DPEuxQh7VF6AeftF2Th9gZcdEhSpTCziY6iRygy22qJu1mHdKfY5TBftT7FNSWb46kdLhrSoxoFv9H3XFa",
  "key16": "ejvDoLtYS7CAVMdFvFMZRVerBL79n7AvL6kwtcUUFKrGmXZMnXVR8xQJpfC8PqL1jRUTHH59FzWaFc3R9o3aeDr",
  "key17": "5WFWwW7j2pTo5xSj9HeKzH23YpEnRDnFwC75woYkw3AQw3PwP6eaLVdTTNQeRyj5eK8qY2D99M9Mu8agWXpPfNQe",
  "key18": "4vvBymdhxkTdgr7iJCd5ZnZyWF9inf5HQZ8ejT5HxGMJJjb9K6RpeEPSaH5vw3NksRmiW78cphnGHLn4bGoR4pXT",
  "key19": "2Dp3RpxPZ775TE8smYih3VrbRT2AE1VmWQepaFZrzXjiQHBKLkHRc2rUpW6NTKYZwcfZNGiU1n7YCLoqbHxQEMjq",
  "key20": "2BAByLfeWaMGT7nSWTQhDVF8tN5z5gkyKrxycKsBz9r7vTpvyKBLEg25bGHhC7wz8Kbj1mJKSJ8y1qcHHfUqoemN",
  "key21": "3NySUGHZUBQ4aYSpihBqFNBBWakFP1kph4bwg4sah4oyip56BehnkB8XyBXK5cubyHCeHdDkEufN7QWE6ipHmqcV",
  "key22": "2EczsUR4JTcGGBmvAoqLgvfACs6A4z1tPzyVvuCtRQ2ir7EajHFZbTgeL8zba8L1GheYmHj7xphGehBjVdZVYnfa",
  "key23": "3NWoTaPTMuyhdMZVuCkPKQfkkkHtHQqEVJHRnVrnmStFibmapFP8uFYSimtvPZozTLmShST37dmjZqnW2kWSdjc",
  "key24": "3zMRVyeQcoxRvw24GnGNT8itDp79bV5y24uqWhGQood59QDZxNCLFpsn9aifgRDwG29cT3cLX51jJMJHCwKwxqKq",
  "key25": "2qhZLyVVa3CZwQ7c5f57cnfFScQQWhjqrVS4kJL2m6MmYqzKMEghPDSosd7asmkb6kwTJiZwmt4vpnEoQXvHRYBw",
  "key26": "3DThcZEYDSbbTyKDfXP7xTQ6wqVHhpRxPdoNnz3ToLU1d5vdpmbvxhJU7WRzdvGMGDqxqEhMPV1HiwdttZLr8ApC",
  "key27": "38WZoEtTNr1aCAEQQJEkNGAFQsgU3a9YDFDHRJmGp6B9557Z9wyr3Kk2eNsZCZ2okm1wUmfN8aEnfLiQ8SMthSk3",
  "key28": "67giT4PW7vfcJoeANoJTVNx9Znijv4HDdLkgfAfbF49KpQ9xjPhmqNtQgBwLyTqFbY1JqpedKtBggr2gudcW9CdX",
  "key29": "c6bRJYTDwSatMgLR6BfiQxE6ZJ1JN4h2QTDQqCisiGFa13PZAPEm9bJU9wSt6WksaDrAUFdLnfBEYpRSCEQMaMF",
  "key30": "rZamq2aux4WzxTm4yBZp4a4Y75mRDcnaQh2n54T1uBUwmM8PsLiDXnMc1SzehMuddQVdmC5xtZFwgEzMuuq8PyE",
  "key31": "2fJhJ8zMuoqcPmEKEdFnxfqyucwsMaSWDs5sLF6bNRbr69Miu1jreggRbk3fbovSkt1mkG9PYJZWqAov2dSbGK9N"
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

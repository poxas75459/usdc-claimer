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
    "4a5qkwHo8FEFbAEw6irqsG5sL6MUugyqsErAWLuGxXonnRsE7QadVDn6f4WVUKTzZxTNN7gStiYbPGdAVGe9wkPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66wvrNz4CQbHa1hM3JjVgQH4CAx8uPmnrRyDvRKZKPg3q3G8eJjdmMLez8fHM95GV2QTEJ438D7HtjdgAsKMxUUj",
  "key1": "iMX8vFRsuqiDEMMCiBSXYxdx7jxbuwKaHJmAAsfx52Ubo991eMbHpZRs4oXwJvXAZR5pm8d9NExbArMKMRdaFfM",
  "key2": "eWK12qv7ygzwR7J9pkNoF3sFiVU4rRVzejKLe5rpGonPerwTQBdwqR5R7shAvEMkPgbUCoP8BaJkB1gGYoNczC7",
  "key3": "4YzkUjeVTTPDmPJKwWbjGFZ2tzAYjSpqj1SN9Jmd87Tcy6ecBCg7HZvcakPYRv15nfQ6cScC1rAMh6Pk5hVfzXRF",
  "key4": "5qM7WquaXQW8Y3poqXjpSvhgJdh9xEzJNamaAt2MWx7r9ManoNX71EdauKdWD2eD1vUMEuBDRpUaSdg3D1zcL4MN",
  "key5": "4YgPhJUcQahJCvJSo4W8B1xLjbDFyU7fGHWd7gZrg4hqLgigbQarxhwL1n7kE9FTXSesyHQ57ViC1718zotLw9q",
  "key6": "55ZcR9bcLRFysUv3rAhN1urpKiw65ozeYmwec3R5pe2osNX47hvtfSyT2WRHg3tx6ni3USPB8dqVUQkuyS2Jxaht",
  "key7": "4ubH8Aqd4r2F7cjm9WwHhqmqZqBFcaKW41EC6tZLqb8VxeB5CiVSLs3BCTRvJ1P14tBsfGdLZ5QuzBZFZd1jHNE9",
  "key8": "3PjvZMPAcoT3MakXCi2mbfWjFZo3cM61sTDC2M6Z5UmqSe1u4noXLufvMkJzSqPVaWbVQZB6nNBPQNvLt9Y7y3MR",
  "key9": "2RLca3sbSKsL76Ef7zhRu7XXdux9RAR7y57WvkDfa4wUvFuQ1vwjPPoYvYCG8fhSDAHQbwWyaSA91TVYpm7Z6Cju",
  "key10": "5bzDaKNwNF4YMNk5Cs2Lf4K3HgykZG1tNscwQteBM2jUESnmy4WqfqZoX1uqPrjdZY1KDTHen5P6pXka2rZQKMUz",
  "key11": "RY2u9V5ateCtEDRrwNvRbEKNdqT6f7BTcfkxrwVGNe3ksBmUSKC8Gn7YwjRmhiP7fHrHLnYS3yGq6KoxMz3viud",
  "key12": "5ghTaieJ6gfSGjrFRqaeFtvCGXxRRU59LjGT4MAcbFA5jqmmgPwWAiuyMozYDtXLLWpZpvfrxbH6bRVuMUehWnYM",
  "key13": "3x43QMdSrDPGQFjaGhvxJJzW8386jMBwEXxj2Ep3T66MZn85mnR2vKKBQgJJgGaDp22bCvGTtGUC1hx5ASVPf6R1",
  "key14": "26n5jYqYsVevuydcVzjJmAeUAFAJQ7GACUbUiRNVcaZfzQVoz9twwKuWCBZytybe3ZxFy6fJpBpr6hVMybck5xZZ",
  "key15": "32E5qpxR61hBYiPvK1pNGNxMAzYeNB2vgFHc9kAmck6i663MAosqLPAkDnXpYKhz3bWikPqqyyjGYc5MLUH2mLzK",
  "key16": "E2mBVwuMwfzoStFjnogGT77snsNXq1nJT3zCCvBbw8xtZPS5MQRL2W2jkZBV3L19V4E7mtVjDxJCGfyHu1UpTbR",
  "key17": "5we6x24qUsy9HwuXHAC1c9DpcW2Y9pk4LCAz7CuoFGcwqWbvwnUxzUm5r569nG11ob5hov556NeDtxmRa7kxq1Zf",
  "key18": "4oppYmj284cqm9TZQ3fYsVUt8tjAWWq6NCcncKiYqPW5Rt5KtbWSVpsojReePeMFLiANqV3kkaqQBcSyxtNfLgR6",
  "key19": "2By1T262BqzZYBBzSNtLnkRyQbAa38C98cGsq1FctXHKtW5aEAbCCVGwoixYixjf5M2G5QaNaR1SPMHgMoyvs35z",
  "key20": "FHPkWXFX7hMhXWHvMYT1DVLSbvJ4WZGwNbjb8w3fzjKQpPLDxdeBnb1eDuEWLvRAheUgPDAWHXXSbkVduY466bh",
  "key21": "DqLoJ4gWcF7AGyQyxgyeiWe2qE5y41nQ3yJNZXTxTMDoLKdUiaYJFFWc7B1bwWrCbjUU6sH1QWcxhnZ6hLmRKJs",
  "key22": "47c1jBA5VQbngSA8ffuMmE5DDZnbWGcUQeyKX3zm2pWFSReRGLRwr3r1ta5ZPVjd21bhy9mmgs8TJQkZQVr64yW7",
  "key23": "3dStiTCyG68rbN9EVJxJoCkjqH7c62NuijmuHWAAycpThvY9XZ8csyNLQ7qoYsasKNuhT1Wrp7ekbapBcWaVDffW",
  "key24": "3VjaYoF5BwYR6M1154FQrTadPF1hJarN84gNBL2SCU8h6e6rGk37mGzUyMBbMNCWprwve2dkGnG8VXjKabpAakGH",
  "key25": "5WuobkHro4YVwtDbS6xtz8rRHhvtG2e8GiJnsZr7NpAPxhXgNAtmRYJ46C1UyxZUWNipPNzrSyQZuhSw71Tv2bPX",
  "key26": "EPoL9wN8AQGgrbaFT79DdSmuP7hgApVnjuUunpTGTE8fmFoiBYZzXD84ESEPrKYy3kuuA8oGkZawgXs98YGwAqM"
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

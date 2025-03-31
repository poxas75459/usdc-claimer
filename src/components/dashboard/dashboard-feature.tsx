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
    "3sENvSweaC3nEpeKtnkhtGmK8HpMeRC1a3ViWkN9gXmPfX8Pw8k8crH5CPN2u6WMaUPyLS1dTsUvQkji1FJH3QdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fLLJeKqo4WY5EmASFD1Kpsew7bUXSkQW3VRnQuRLBtMjfrV8Ht4LjyGkfW5dTFJvca8j5W51EKS8Xa52t8Zk5aH",
  "key1": "5BsnYP3s4f4tpav9zr8r9CRESkaZhEroSLh9TaRDZqEpziDuZYajWWDBFADLtBWznVhRibQAANLwf2FjtQug4NQV",
  "key2": "5qB9nwWbHsMj9FS6e3S1BtZEhY7beo2oBbbVNAotcuUfJjD8Pcp2paLqhWD5WA5YRpd69KbHmy79CeA4o5JjiHaN",
  "key3": "oGU9vW8fDj4DdRGuoA96LBBENu3RQcqAN4SGjhTXfPVnZDr5CUZeYszm2UFyvQCRdcM1ePLDjT91gviJoYECWjR",
  "key4": "5BQmT2L4tuisk9TTB7rXQDZfdThF2kp3s6Ho3yRiVK9afiNBgsJSEGGrPK9JT74H8QnX6JrVJAxCPjNxkAXuPfDY",
  "key5": "5YPE9KVukxrKWUB8w15zeUNUdaxxGtoLukpQdfVuxwAWG7A9ttxsa31Xh7Ps44PSf8bJeqJpxHa7UfrjGh2bPQMo",
  "key6": "4tT5QArJUW2eT7S74zR7HZawXmZvwNEBNTm4hYbUZvaD3ZCeAZszh5hesds4wMPJXBuD3KNMHGnyFA5cw45mQLRy",
  "key7": "2p88fFGAewondyPQsXXKEEpLFSLe2YyMCqW8ApF6tm69hc7TK6eimTm3sTrtVServVEp46SXVet3qEKRcWDP4shA",
  "key8": "386ymQYC3UpvnahkeAQkS89rUxMfRBZi5DWgGzMS6KZ5kMmwhA4T59rBZGaLu5hKZPsTAEFtwKUJGdgnfjra6kbL",
  "key9": "4EF4ULPLbeLTiG5AwTDiQMbqfrFT7LYDKaKuRQujLZReKeupcYH4WJxGAyqVS63CnnxoR2kYPduCefsd7YEFcNha",
  "key10": "3Y2AMxyfmnVPFtzBLshrnsz4SLc4et2eoBgjpRXDs9pSFZtdaTMJvAz9Hs5BuVb7wwGwy5eMRUNP2JBC5VYXSXQY",
  "key11": "4Gheod9acz12VgQUjEziFWwJj4n3H5GjjCJvSWLLYyPpDSJXq3Ez9cCgJVdjojNtsR2oxFRESgqhJHSqMNJryi6a",
  "key12": "D69pbt1EM4vALpJVg9iZ4NUa1FH8EjEKgWu1XZk2DyVrbwtPmTesnBhGGVYTBJrZ12BhxNMaJbgt2Z6MgChFozs",
  "key13": "4qmxZwmbqUbFEDFLTc2HCsHTeaMvb1YQ5UZ8sTdqNTtPrcPLSevjni4reWq8Bpx2z7ZUvSh1EL6yZF4gYFitjeUg",
  "key14": "2iLfj2JKEAWoNjSWH6zfzTXjrRKWnxabBLEUCirdP1nfQ5fyD72YGH9npPU28dirMnHz9329K3L9KNpHFAHcxPDJ",
  "key15": "21tC9cLkLNeFqTXkkjhb1Up6ZEsQSFR1r1u4swSHoEt6RstGtAvT5E8G1aqkNnNfnYvMJKYJ9nTQp93PQvp16aNN",
  "key16": "27sK9U44o9SLEggo8LGM7wtgHdUwEJYYggpKCkfK6DAiTNALoWSodWpnxcHo7JC7yxpuzLzgea148RGsWd6teiVg",
  "key17": "5VHjjv9hsGH64D8E97SC29K1q1s8MR6vBuyL8z9o9N4TRWkdnYfGYpJYXachFzWk2iav8MdooM2SAgh112YrVXMU",
  "key18": "3eKiTTLCTS99wpzXbgduKKdxbavF2WLgZj9pa3ikkwbgBiheYAWNu7TS4MEHP8zT1gXVLN2tQyKMckTAAJT77oVm",
  "key19": "5PxnMFqogFEV6D3EjJKmS3UNdQonJfSjHkTzBVgk2rAX2sEW4hPp44aEsiTt2BsBnm8Ljx4sDGMe3TF8Bfz4FKjw",
  "key20": "67r42QaeayntKTsNcoscxSX8seLRToTpEp124G1MrrjMHe9bk6W9LhL5BqFsLwpqY65tszQTCEefcADvoxGA3GEh",
  "key21": "23CX1GW4mnVE7EcjJsRagvGsEAZUZhVMh384nLx2TqZ1BRPhqsxWiJm1uwnKfVdC1FLVQGQPYqxMMJsD1GcqqTxV",
  "key22": "4ewYWofd9EcwZtZZKcUnvXVzim4c7QcXaohz5Z1ZigWR4XPECrajG17B3xAEZQ3FjTW6ASH9FKPrfoR8X1T5MsNo",
  "key23": "pee8W5ykdz9kHxzBGTuw1UoEPHz8cxPF7VQHyirRKNYifFq9d8EPyjTvEuYC13yFAtHNHQEp8YjRqQ7Cm6nhRf7",
  "key24": "5TRoqsUyaYz7sMAuLwxibgdH3rL3NMQA7BAzk3r7qqpjq1EUscfj2nSb6azdUR5nt1yANBb4WWQbADPXoTF6AA2X",
  "key25": "367qAn8pvLHGnZGH6yftTjitBVbiYpc8Lu3b1YvGbXv98P4J1835MjVTmPzcCQnphjJWRCfUyWKgzztXAN3Pk5CQ",
  "key26": "29hVXGUmDcwGvwr6ENMMgrtZzscFUoz6Dj2QCqxAzSKDg9Eyt7kBLLVF3C7YPniXLLexpw5k5UvPCb7X7NSw4cZc",
  "key27": "4PgurFoyLB4Cvb4Ak1L9VLYcU9TFBNBPeHBHjd5NLgF1H14Ss23DpLoGnFWGnRdMPBVhvxBJhraa3feHFmPwyeCd",
  "key28": "4XGNszLP8p1bwztCkUomQzt27MUpBBE57JR921PyNVonHnotfVfyswq7mvhfgwN7qAJPzZNuDNqUwesKJQzRfW25",
  "key29": "4DkcEXh9QiYNruAR1ffpYtt9rR1X6FZFh3keAHygcd9ne2aJtAwSgnkwPkxTgzjma7JoG1nh1ZNT8raPjUHg6zRt",
  "key30": "TG6NVU8kGFTmziQqCqRsULDrNKyoNqiKRiQZ2gif7qxu3eDZPiVUVqAoA68j3aj89mBEN5k7iDG9B6qQi9rL6KH",
  "key31": "5sh5XizapbP7t8RRWkvPcZrVjHPSh6nASHH9dWSoFdECC5kTSobyWzrPcS5BicEKNSrnuhJ2ycoRzWbRagFocfRp",
  "key32": "zBrCBB78Rqv3UpCwMvqw289YDij5NSr1ddH7xHdLVuDSvsNvXj3n4sLud22jRDMggndjvZ1tjM9nKHJ6h7z2gpw"
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

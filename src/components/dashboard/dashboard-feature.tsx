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
    "4KQyZbUv9hXaMtdiEacKEp3UKLTYSZCWs8sg1TgsaLFyDczZonhQRzbQH8QKU1nTcgirMfK2fTgA7P33FUZGJ7aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ox6atEvCkWfvTLcwgNCyGdxYnnpmuUHZPZpV6yEHxZQtxx1jCZdBfunsseZeawmiZ14g3Q7hQ2sQuxz1LmPKnLe",
  "key1": "5eCGZ2L7gAsnL3hrnWKszDA3yVFwJ1ydaEkQRoJ1Xd37Dt3nNe6E1C9kfCHD3uPRQwJWbBYNoJiiSrqaEWStAUG7",
  "key2": "2rKgYqD7cCKJrKdmQEMpXTb43vVPfdJfRtMvpXurkUeP4Yd4eMRnZ9WA9Fs2mT4DNq6Jf1VRzPuTvVxy26LCALir",
  "key3": "4q3DToWhBRkKqPGojGjvk9XrTxWaB29kRM5XeiHpG2FnEzZWMhPKg3UfBLKKKQaag573APxvpzxqcQJfZA7oaNGU",
  "key4": "2awYn3rsGY8qsNgfzwEAqSCtfcnRQHNhXBKY3RTUhZHhbRtruidJtSZ3rcqXYMMfHfN9oRXPm2cR45ihrN8F2uh9",
  "key5": "2ip8ErUSGmwZeLryiG4DfwfKSfgkiexGarxfKxgQZ9vqz32KSJdpYtTMY5zY9125SLCLqAEeS7wJrZEVTDgYRvxz",
  "key6": "2VmDtxTfFLDJqgQj62MSeSRpFws1Qc6HeRidDJfNSWnbUbH4DUKarxW3xcjmuCK1238FyDUcKf2CE4poE9SyuXp2",
  "key7": "5wQQRHViWqcXFeVBS7puJ1WNE2mh3xDMMx9wJmtCpECsKtG9oqZ4JTBvreonHuY1zX41K45UER2Xn9mxA2pdHu2E",
  "key8": "2fQcNmdkSfZQ1GmcRMhJq74uckwGVq4CauZngAKN9dNZHGrAkHVdXD4HQHDrTE6xMpdeTUTd31i3Ft5fJh8wTdpF",
  "key9": "4eVHyNpbXjkC9j4LJcswyS46KNF311xKggL2bVXAM1aGaDRCSRk9AaPdTgrEeNajB5qJFnRtdmN1utS9m5P2D34c",
  "key10": "2JACVqtHtj3dJe7dQUE8HukWf8CXj97wQ61ZxAPKXonDTfj1VcmBAF4ZkNBRvJPdMAaYw4k78w4NqeMCvZx4LvUb",
  "key11": "322Dm99HkgkvZx3NTjksucK9DUPufusjK1XYwg2wAVtHJkaPzHErtLDu5Avio9EMaD5PFbWgeRijuHWyJprToAR7",
  "key12": "jmvVNrURaERjj9zheZkAduQfVimudjhU7sVjgeto4U9pST9VrxWAgg3VQgUmP8r1HWuqaiYiJiUNZrrXB1nqB4y",
  "key13": "2aZap67tPvHJgFHB6NvVUpzAqWK4B2ZF4sYXbRbhRdcckNPrWBh4pc5FRLHXW8JGLMvXfPJZt41emFzHZJYwQgwD",
  "key14": "32Xu7k5VWRcvkzA8BrZsY6LsH4S7vPbHXCF9jBawTyRPxEgj1hNceHqwnaspqvosXrdGQqxRJxJ4DRN9dYSDphoA",
  "key15": "fFtNkMvuAAiLL62Ck2LhBEjuxqysHbR8a4uuDYESgbwCTd4yQMxTUGfDqnpVVa4JhoHfceob7ZRSxoQGtCqrYS4",
  "key16": "2tR11FrmS5UsJmv8sfpBpeJtDoNUrj8woEXRU8xBVeTnJosDehkTUCaF4Dh2swzS9Ygdenip8ED7xeuoDJM7KHyv",
  "key17": "2n8ZQ9MtYG5NHFuBQsj9itmotvdwJczoVahc6FgXEgrU8UVpv74TATsgy1hCBaaMQ8E4R16NtJc4qcF8X658vtwk",
  "key18": "4xQDf4FcBp4g7tQLwngXzZi7BkqP2psFy5T927YvKTn8fTxdEzWe4Gc43uDsr7qaPQRvz97vprNxbjKHx1q3mqax",
  "key19": "5BcLKseLowmBbDETMRj5LPS6wNyVtgH2pnbr2Zho2T93HJKvUakRKqoAdFb9UCrmmEUyo61HWEoL9w8dUsddeQof",
  "key20": "53bzsr3iB4tn6253tVALtwidAwDdjzCePJ4azjK1qZpcdarVywmyhs4y8ZijZifwWxpxSmBdCEhLWRikyP3vZK2Y",
  "key21": "32yHP9esUvsUQM15LKbMxnCy7UtmsAt7bFXzyGaoXY8zHjVaitmDR417HXE1RNvxmRTDdrCAomd3k3Vd1zz7xgoZ",
  "key22": "43bUXdZQKJZzPxdnYLXdbUMss4HgJAEQ1KbJDXyMSUbEY4XjNF1Z7nMXcQ3nEffMDgNhSLEKzvHNHY6yWb7zFsDx",
  "key23": "62jx85bCxErnK4gLAp97zPQbWpbbNhqEmcqezNEvfQRZVFJQCj52Ajuk8qbYQfE8inFWXztZ3mKRNZoWzh5NYy1H",
  "key24": "2ryzs7xc427W8utQHxZVveRPeaKin2ZpZCefafg4x5C3Khg8qBGXCZ94QrMkebePKvfhmGQVSK1WBku75KBbSty",
  "key25": "4WekZGcxYrxivn1fK398xUDWmfm6BGPwTBiGNtmqY5YtJkh8o41ofKn1xSnce5LEpZ9woMUYu22RjZciqhgg3Kd7",
  "key26": "5xEgbRr1HA22gXARVNdhgsCqzbhWhEuPTLJB81u5VUQcHvztpLsT8SzrfuKz5SzkvUs6S2f4mU3XqC4Fj7FBWHTZ",
  "key27": "2epZ7WYbSAqCvoPnS5VsLfkCqncZkKe2eP6jYigHGFpCn3rMJdgg2AEDomAkbTcY3ZtPyykVdZYQZuRr68g16Yta",
  "key28": "NQHVFwKfgJwHWVC2tiFcZabMhe9CaQJhqjdkVoxYnAZ7JDETCwtfsHSBW5J2JQaFN3X6jhU1z54N4jF2hNZeddx",
  "key29": "51NTQgPWi2TyU6KZmYbspB1Ew2r5ixBhXWAFuoyNqMGn8BewrVnb1NP4o1bCLdjs2YJsCsgtE5noUgpHXXnYPUwY",
  "key30": "4aeANhAzuYosaNdgaDdJb7dHRF9SDGbWbcWGZtZgdnBFAmwVkRmeBEBNQUh9cpANAtc5uLsps6p3Lv8KdR6DFoQq"
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

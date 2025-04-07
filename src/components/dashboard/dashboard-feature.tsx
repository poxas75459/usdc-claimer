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
    "3ix7jQ97Nsm4KFyW4QPDXLFqiKBsFkoJAAuNgo8FnVVYkmvU5oT3dv33SFH19izYgkYSK1sSPLTUPKZ6ABoKjZ3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pa2C9Q3cPuqpvxuS1fpkERpfhHiyn8zH6UHSPpMNbHVqb39gDCnY6Rp7gUwy3Q6peHWWr7AWc5yeq9dYAUcqM6F",
  "key1": "5Z25rvM8d4Dea4fbD4QxvM2yo5HESHfzbFqDYTQWe9czmSXRhrbjr44i2D584CqbYh9GJbsYPQp9KbBrEavbnQ5m",
  "key2": "29sGk3q7KFgEaziw6cKPpg7aHyBo7o5WmYGNSnxoCCG4YXmcbzyxRCZdbGXREbmqjUtjEScGrukChAnosoUVJLRD",
  "key3": "3e7FpQ8zENG67rSohjT7mwwJbpQwLRj6CEoAHGoJkEjyTTfzJVdnyJpFMSXZ5rEPXxS5N65eFTwnHbZbWgkM7Qop",
  "key4": "2136Gb2urWCcY9ZtaVr7Jx6Ph5kEcL4FqHqr3AEU7g9vYDYvkhhDj4NDFGydpd9wAge35o7MHLqtdDAp4N8ppEYC",
  "key5": "3qwFsn9mB116edGRxogFyfC1VCxdCwQQcRUSzYPcDBYa3DRtKYQQuvxoJqX7LxcmnviFAVSJmRQvErr3iH9q3ax7",
  "key6": "2gbmnvrEXQQoimxf3SufwBi9fAWHKwbhF6JqJ7k6Ym9CqvbrEjspVLQDdq2iriqJfdQBEXNdfNVXM5xZkaLHjtse",
  "key7": "3YgkwNS1pqFjRUdKf3G8ojVJEDRYw7H8Z5VuQYhS7sz7pnGUDjxo1vnw6ufQfZtJ3qthahH3x6myeMFKHGCg5qpb",
  "key8": "Zhtc5qGBHd2jLNYQMsXPGRFnjrVwUyWKgpGsPYuebJixMugUSadBRoJuD7ksFmVbvcrkiqQ4jmSz8fxYtKLtY5P",
  "key9": "4vhmBatiFMyhru1spQZrpwS5V21Kj29qY3Cc7C2VD3SEosxAezdJqx2TjDYH2c2DeBAj6EAexdbmu5S51LqDQKpk",
  "key10": "42YMuzUm31YUNLa6iwvCUPzwCp5cbuCJLhrFd9hRJEMKU3pr3rRK9kc69ss9nzVtpk86uMkp13ZkD87KkYZUu1aJ",
  "key11": "3HBA2vpAD4b6tTZfmX75jBbMUcU42qyAjBWHdHQQNmyrPuVTi9KGtKTRkkitt2eRtSCpkZP9VuXqMQjKGHNf3N6r",
  "key12": "53vB6nkDrm7G2FCTFPnhwqF7qvoVFFuGMfMRg5f2QfVqsXTziLZ1a6JiUZ77s2xXrLpZuSBQK4raH4Vj6r8hJeQY",
  "key13": "4gTU95AdUSsYbEW1GJ4hVinG193RPKxpAQHqoayh4RCtcGkZ3iASjMjbBcY6aTZridnARCJtbK9YYAMrFDrng21B",
  "key14": "4rF6c422csZ3ud7MqLB3runHrU2CeDofzba51JWzQTcFpdQWptd65ogKBMxvj2ijeggp6eczx69gwGnL9ihwhVH6",
  "key15": "KDJcXDzbFMTppRE4ruGQc7BjdWLpLzT2ceoS3UhCnGXwrJr9HveggawhjBNGcJJsrd1qQN75owUN62UG2fe9kiy",
  "key16": "4DBjCAVBe2sCVbQUvrhuQCCxkYdcJFBdg3mqwMd5sHoUcuWTVmmDFZeX8RZvVjt8A2tPbS3zNqAqfkFWtaaEH3ph",
  "key17": "8FzqV6m5BmYrVz3rrkBwx8rKZzLZSvkiZLCDcWZ1v5dYxW1sBeV8y846LBV1TechQu6YRqhN4ELWpFJMwpERnh9",
  "key18": "2x6543zvQHTQWqaTgE82vdSHqochHRowKpcdynoRpRcstMVoMsrhvpZbq8PswJyqdfdhEvpJ4TjnXCnsF5STRAY6",
  "key19": "3siPFbZqgdKjnByFAAGfkUAkMDhLfxZgPszrLFFhYyPa7Se36eBTLL7AvoAdN4ShbcK5JDPpmTHBz4hULmw7fjQZ",
  "key20": "2vqRvoBPYuRDR6Ui5Tf1G4V12tHCU6krrzZSRQVBpuwUD2J7MhaWRERV9UcqtNc58gfkZLeAdDsQjCE98PRStn1w",
  "key21": "3WEEsKWePSRz6APhWrugnJnAQJ3wm4YZ3uTAQkzjdPWpCsP6zJqv2vJ54bDehpXVaG5MJgqD6sgyCf9tzjUaB6Pn",
  "key22": "3oZYqLweb2M4JBLPYWj8si76GPouXCz1Mo8UkHDStY6XEnB16TTvnYJWjsbw3k16ULVPJy5Gf1a8aeJNGpg6yzeR",
  "key23": "3MQRqyjbW9FVe3YE8VUNuuiKiE1hCDCjB89M41cQfytX6wSHaGthe8pjoNfXd465E74gdNJjW5wmY5MYwgXe6UDk",
  "key24": "3Jku74FAW8yUKkAq9yhswcatrp2uXyfgEFkUpisWje3xvBnYJqn5iYGhayqxYgJTChYHeXKQx9tKQ1Kxq5tWieEg",
  "key25": "4dTjw1f5qNJhSpoiCSsbPoibqW4wL8PR34GLdK8XPcRSLWLd2KHq2V8jz1fD9QqWY28sfH3AzJ2KYFvvjgkVykKV",
  "key26": "3nAtPSEiUDBC9vyCzTAAKf4uV44rh1ipSo78xUvnyHDPc33YZzbt53vs3NsT6d6jcrZFsuUJLYv7YF6YCxSjDmSS",
  "key27": "4EqYAZELN152vG7fDuuemDtQ75RfqXyAuu6ECGd23mpiPmWdU6A6y3kxDuALUAQwkEsrFABMGd5G1WX9jkZsTaCe",
  "key28": "4uK6s2Jnhm6AMCdqgaHdMDJv3NBeZykgGwNpzgYpGuT2dCAnAmHAezPthyFZiqKizNmVdYRFSNCPAtTomehcYSzF",
  "key29": "544H7LdDzpEtKvVYzTGU1CU4HnUExZpepPt9mY5dVjWTQb2tottTAXnBxPDXUV5Gvm5dD5ftq8EJoYNzAkPPiL8Y",
  "key30": "5JnCzevp9NNyKGg64Ef7nQh5xMpPonHqAxGX7kd1WqFQkPDhXZKo94vbcVpXyit7u75WS45vjT6qmw2U5rPxs8PV",
  "key31": "QXZ5kc68zZrmkdhovAMN3Nh2nfkviLUSwBQ2zrfE6xqqL3TVDgmZRGYyEG8ZJzbqfF4JPQPEhsSNRGD44CSsf41",
  "key32": "5Bue9Zz6CuQDZ437arj7xHcaxi7A9K5FrxqLPqejNSirkedzZ4okvHfN45BuAMVNJ9Pqrewgx5CHcry1FVipiVBC",
  "key33": "QyZAie9pZp3jRpA8FtBVegeXcRZsH8wu4FsJ5QEh1gSNtYDRp2mJHBPCMcc7JoNfAQ8dFkwLiws8GyRJt4VZjDj",
  "key34": "4RHtDbjU4uc7WL4AJxUHJMpP9mjhTtdHy7by3a99jU11cjSowzGAFZTqAr6QMPhCUfHmnAPf93aynZ9TJbBAKc4n",
  "key35": "3E2mDAGxPtDaieQsxqoLr33xyT89p9NMU9kP2BUQPTJVdx8bAYDGbHiD7B6qtQW39ZPo7H5Pw7ictKb2BKhMPb6L",
  "key36": "5vmAzFEYe7Wm2X6cXojiwEZ11z2dpzypTXLob7vfEsDZekvXAZ3H7gn7bhfqEyL4qrLVnvkaUz9tSLurVpRDpMkT",
  "key37": "6se5ogC724763HzQQ4te4oTXmS6MLzJMpZ6H243CdyCKZNyJKFk6Ctz6Wwk72JhxEBAXyC33JFoVScNC9x2hnGk",
  "key38": "3jYXdwbpewPB9qikyvD5fvpSyE8k2wjnUX9fJgoqEbRJVGHqwUF1RsPPbWfwRjYwifakBWZcyB6f2F2btueZSaQ5",
  "key39": "3j6KJn8cPsH5fp3M4krGFEEQkJT6225WfkNS74aeJdPbcL5siRPfV22GuEuh4m4gm58D5m8GNd8FqQG4Cw88sfkg",
  "key40": "5wKczGqwg7jm7iYC8M8sHiWiUWcaCyoMaqfbd5Eyg1WDWysU5AFkc3FHxWLr4jrTMFrBnx2c17pwgemwHtBTg6Ux",
  "key41": "5ycXqyJBD16WTtFZJ2EHci6aS9uaExnrKRmiqgwQVY6DwMCsMyTFE79v25Em17g131qcBC2LCDSWzV3rUcQWy3Sm",
  "key42": "42W9mAJ5PVu7Qbuxc758TxxTNDKDr86Bedzam3VZrZWt3QPC7zQrerQ75VboZi3V8u67wgUNLoYK7jraGKKS2r94",
  "key43": "JUyaToy3jJsswAzae5pgdyu943vzs4LcR12Qne1YehDfBy4BKfpeeRRW7Z7UinUR6SWiryGd88unbZfbJcBupvf"
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

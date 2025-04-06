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
    "5UAUv7vQd4CkSz6VtnsYE27FRvq4HDav7a1s9vqCpMRK9SE58FaEkBABwLPPLVtuD7bXv6Fdtngpk2PjstLxkjqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f6zZRLXiwfbkjp1ZSMZrbu6qmuh7XJcAWf75fYkT41SjrRfEoxHJ4NiyJ7upqHzSxfsV4FEr2FsnHf67frFG6Cd",
  "key1": "3wqUnGALo81sJsVmhFkbUNeJgZyDQFwSfjePYSgQwcjyYdPbaunPpycxQZve94HV9Nek5eeTgfPNFAY9qcdNUrjh",
  "key2": "42NrzaH8qRta743nZsGymUFYKgKgwVgeMZcoi1xB5EmbSo8vDJAkh4BVyvGpzTEWm8pXfB3FPEQdW7NPRW4ND2od",
  "key3": "4qQHsvCbC1M9YBXvJu7SgXwtNHbxrTuLJGnXUZ66tDbpXNFsAqVQQkt6vf9TjtUoN3WoKdfP33hwChFYP23bGjWR",
  "key4": "4LrKVL5xuj8m1SZaxzhrDjZapdK8mycGpYkXH3Vk8ESczqcbUwpr2uFtqq6ADd6djQZWMELgQ6e4jhDGEgdQtiqP",
  "key5": "5F9CBAPUwFf5jEhes7kDquND22D2cseF9UQs3EVp95NAFDvANwVVAuT5DFuyp195rEoxd4nF5DYGQCCvFp4QZ2Ko",
  "key6": "4knAxmKKcKo2iC85pAvL45shyCybmuwsgTgQgaqBK4bDi728T6aEsRDZ1py3MpRin4TNuMiAWykcX5wqzL2qpL6t",
  "key7": "3ejsBApLW6vt3UEKHEjhpQq7dxbjLT7hbZwvkPovcnvLPFGLEKnbkWD9hTV6Am38gcfBBkgre95d5FQDMkqDxwfe",
  "key8": "3MG2GUgwjuW2MmbbRYs2cTPdozcdjmwsdUGrwXXjUVPjcZLXzSxtQZMLqPeQnLWtPT3H2DWzus2CKPyw6WyvGf1x",
  "key9": "2e65PUPtXEwUFNQRGjyjpfKdoM3ZFVYjBM4oqrwqVB8r6ScZa2VzZ7n3taaPfdEgxSDfz6nfxHpZzFbDtcxy2umM",
  "key10": "4FyVRqqWZWSRsEkXXLkSTUrHZ43hKXxh7RWmhZrD1CqVV7Kp9uk8SuuDnAxjDddv2jEdfoi29uq7EvN3EnjyUJLJ",
  "key11": "iyVSRzajSsS5zf1WnJFNRukFW2BwsAd8CSkeM1hE1uvc4yHrhD32eYsFWQpQG1JJw6TS4HZvnfrRLiwe7m8vkcW",
  "key12": "2uKLdgq1G8UKxUYRYH3yNKcnTKQdtCBodxLNjeLEr1CASiGx5xQHKLoKhXrBFe7z3egct9MFVFtaHSiqRnMuuSyw",
  "key13": "5wdwoWbP1XznPhpU6SJ8TsdCKP3GGVrF2i833jB4DkdNXThZJc9RE2itaMHkd4HKRwR52y2YL46z77uYCEkkL1X1",
  "key14": "23gbYYv9XFsMFx742HEV9AY5Bu3AjcGgBQ4DMh2ChM2iSNvsekk1AZVd7WYbLngVerzqKZy5GdLscGfPqwN7XCaT",
  "key15": "rh2r9esWrus5PA5Ma7Cacx3XEv86UKjPhpVoGc5b7wBM8sqqsp32L8oiuV94WRqt6L1M9kM4LD3ZixCqQ8b8X2c",
  "key16": "5T3FW91JamnGomQv8HyxcdY9oDw29t5QVGKqun8DMYzjAobfzTwdAdUQb7SgqWqCTyvb2amWtaSEsrGknowhiN6C",
  "key17": "5fo2Q8bL9NuvjRiBNipFS1ix8DwnhVtqUUEJfAgNxEdLskB11QQxkFMeP9VqvgtxsrroJWrpPWth38UMFuQJMeBM",
  "key18": "4rhDzyXMFPTHr8TtCUte7bJ2jZmQcmpU76xXiRk1YCEcHqw74o4mWwKJzF1WRwUHLunwTm2W8sb5FhZpC2ciJYsj",
  "key19": "dVHvsfkNdJBDEKk8ggHonGXR9Ft8AbDNkjEAvUD1iRfbTfHPW2vXw1mrfx8KRMcZYZ4ghmBqqKF1X7wzMpT8ZGJ",
  "key20": "xsfGKb17A1KVmpvPZTaDceCpUcNJ5mM1BYHSh46T9SQWAHyrDdcuaFGgMdJnCVQXooooKxege1Qd9wQFZWBwvGZ",
  "key21": "2MqSMg7FXLRJ3sfbnJAeZA97zKy8P5hTFNRMrPHuZwp6BAR53hGNwytVFQZ72YRgGXZ1EeEPtzs7PH5GdPX15HsL",
  "key22": "5X9WmPdYZeyYg2tgSxBi8rSjngxYaNh8zR87UXSRfsB6hxZJgjZfYJQVqpi3nDjspdhbC94VeU7jdpjUhA9YJYB5",
  "key23": "2f566AbgVKVoBtSW3trbA2eupKVBWrCH1szFefgp7nStTEHhKuXoiP1aqxWgVGoESDJNj37XQEnhNy9QPBmG9eCA",
  "key24": "4dU7baQ66PMVMJvbrW6rayKPbrC131VmmGnXGTaWyL8ASSRm2rxfApLT739uxXj7yh48dqLmNvkM69UoeLfFxByf",
  "key25": "VJqnbUzZAkgeWMdAhy2LUDp318eDTVHZLUkSzXyXGdVNRNVL9Bi8Tuas6JozHRYyJqjtvHMZ6vsyWANpCgPYZSX",
  "key26": "29opMdf8FFUdjF1gv4xiUJ6hkNo4HEoQ2y6PoGtX4rBiBwbDZ2tE8UjtC99rxu2xg2NqiwDfpaPeYZayJjBkBAab",
  "key27": "5fydPm43FVvX5zSdQKiLZHTn4c52Zzof85bbNDRhQsHX6R49qMn6LRqLLnyoziPLhihVxqb8oqUgYdW2RZw7uvPC",
  "key28": "cVUpQSoLAcqgmYBuPaMcDpY5RY7s6cnyC3fTfCUNVyegFsAxVtsw51Qbnrxr6gXZe8JrTwDqGGqSQs3VCkRAncW",
  "key29": "5PoFen98r2tHKMunaAfMba96nXdkuf4PhD7Pb88s9QEXeNP5GNSCaUr28re22nnQhTetNDni4YzVbyVKNKJYHfpf",
  "key30": "5A6U61sDgW4gtqwD1TPJvjU2d4G7Jn4fJuKtKCEhMQi6aaMgTYNjRLB9dLsBvbVB5YNE4mAV4qaAKbE974q2NTQk",
  "key31": "2MHegragMUhemsnsRJeRLRT6LBQCLKgoQe54jy7M7PrvvqPBtUP86Z14kS3egWq1TRt7XMYeYJHWfLYR7GFs9Qk2",
  "key32": "4TGGrK2Cr4t8nmvjgP6C6wyW32WGMxifKCz8AUxLQhTYSJw9Qb6wa2FkQxo3JvhvzHJz3NMcxvp5DBEafQyBtESq",
  "key33": "3kS2o3A3M7aoUudbvqEm9h9VsikuwLtoKhbWAp14yzHmzVFy2GKLpdmzKa483LnvSxpBnj8vbiBqfq9vZNTGTQ9f",
  "key34": "hYNEZ4UKEixfmuKdsE3xPFmUiuscy1oXDjrGUZ9teKm2Lnhihv5qYT8GdTGoeyWL6py2zo37X7XS84AQbJgXF7t",
  "key35": "4zhjwv6wXdGJK3eQfqLCmhAjt524JhcMkLAny6jURYoQ7AAEGpsyaYSJ6aFRBzQFQTK29oSzLBBwSPcN8RaU4uzX",
  "key36": "4YvfdAgLKa5ydQz2kfsuT3sNDe7n6J4NTMrazHkEcDa1miDXnJxXUSEWo1ddVTQ5qJmEWZj9w4PabmCVM6qEVVUK",
  "key37": "6162RK4fokQi4YhwpCKxinqNRCmjVPGqp4UfsFkcUcCXm131vAkqU7Bibqybdz7bQxYjiagNn23BiqD6ygjR2CfQ"
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

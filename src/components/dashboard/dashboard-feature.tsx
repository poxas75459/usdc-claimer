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
    "3o9LpMWPEr9e9xFsmgfJPV7iZzBDS1duDfXHeZ2X7tdagau7G9egNULCqNHXmxnopbU4vqRD1KdtvwWK5V4E2KGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ep2mzk9479VatiBpENSW2fE4K644Fh2FkgTQd8kFfTJSYTDM9zTeo94oMUFhrC5GaHRVYGWyLDU5zvm5wnaeFW",
  "key1": "47U5smxirKpuKPVnHENaJyqrq799oe7XF74wB5GauJu46gBE974yguAs8K5nHRo1gM7qRFitpfwnzDG6wwvbev7",
  "key2": "3uqnkDtRoT7jDirGraYopTFkfcRD32xc6jFcPs1aXc6ub4JcRjQzVsxVheqE2MchCDAdTeqfjseokEyn6yTuh4Bn",
  "key3": "62F83Usb2Umv4V9LohtAQNNMQSm1QVJxGY96bQYMHbuZWkZ4xN3g81LLUSZqSSKSMc7iuWpQzLS4FtaXjm8ivBVd",
  "key4": "2pPNRzd5L276VxP5CzT7SfQpuV5XEnxnbFH6AUmLBxh96cXs7YcboXUCY4784DQKgvpT1re1gXaNmMAF9L6cYMY8",
  "key5": "3kABkDTgRNQ9drcz1imVdZF2vhBBn3RiE6PaAoF48ZdY97pb2Tj787P7qSev6AohfJrGUs3JfVNyEUgHPRMeeoHs",
  "key6": "3ior77tYEvmJ6ECqphVHbjw3vNNP1muxQT4vAApXqkQgL7kGfq24QZmJsHJFgJx7VnD1YweGecwYNEyvbCeskGkL",
  "key7": "2QgqZz4YriKbBdmpdMbQikft1QVdkudo8SuMaEcQSsvBsJXpvWN53Y1tA1HxVMV6Jyw5hYyTeTEg2HQaJezw4rmv",
  "key8": "5GAwsHU6y6ZbidtfWQznnqPhzDYcsQmgMW4wxLW1NiZf6nnvqWMsqbiS9EoV8mhiBQhnNQoLu6ZR1Ya6HRWfuH7Y",
  "key9": "2rRy968r4sBFt5n7NJSczAUbn3mkgVCV11HCMfZxqKQpsQguYgckHamAK6uZZz6K9f2prqMLzCvrCXJuGYeguyQ1",
  "key10": "42a7cFsgMc9NoKxTVm9GJzcHBLMtwZijUeC9BJrn7mXRJwuxTwpgwS9vLnXXc92q5RNuZwcycSZsNP84gutZqTCf",
  "key11": "39hZBq2D54qjYmXGN3o9xzwfJV5db5AiU75pu3dXhRBxbKS89wi53bbnPnodDDdZfYL1x9cbc2CmBPhXYw1iRAJG",
  "key12": "3eU9HRt9B3sDyF3ERs7PbAHyGDC5Sv5HHFfcz6Kvx4E61bMcJZf49m3Pymq4emmFZRGwnD474dVSds2neTpz6uLh",
  "key13": "9wFpLpBzh5m7jP4bkKxKSVZ4eHmqW9gnDDDEL34G1ZLQQTqnTyhaMjGhVunKF3Lp5q2va4z5zEpP2S1M4SaiRVG",
  "key14": "2DodFnKF2U5HPxb3rjWPq4E4nVBdVkiqUCUZ2kULhph9ZUXBknqnRg6HuS4CmLij595LMMgkZ21BSfeZk4cs2spZ",
  "key15": "4kUCEHs9qRwLkcov2ikPxRUDse2C2D1Cx7tboNoiLQtJpBKxi3VdqCi8HeCjotvXBaE4TtiRJYokmhUnjKaF9eLb",
  "key16": "48K9ye9pJfP8ybwrC1VmrCbskvz6YuQiWdCMoamNhnH2Ngt7Xjxhc1EMS3v2XmXvwDiLZvJ9XDBX3nM5Uu5eqo4F",
  "key17": "42as1gDe6Rt6HDc2G4SheNn8NcbjP1peoAfoFcn6tKdsLWCm6Avqc6dqbxsMcKW9UnCiaBfd3KEuu8yApFAmvf8V",
  "key18": "3PP9H9G5moWeAFa2d6ujkEEeWFMvTxVAzVRD858apn2M6ebtpEV2eTVMo9FUrkGG3mEKJca5WHnaFiF1wwV8dyeq",
  "key19": "3sEzPFJfzh4wYBKBTgJcvmdQc4jt3yCvRQwrnw6cLj4Q7aWmbJP2HVogBPduEaBWXyh155ntPvRALkvjHZgQyowA",
  "key20": "4zBS9pHDmWTnmroc1vz5jvz9UgbE17C6oVWpQKG5Fy2kKEABsLSHjwypyBqLXFZ4FwWDztpnrqqLcLmZJS4oczE",
  "key21": "5NGh9RzHeCGknrKst9iSJtPVKGgbxHwvuXJYUHTj6LXt1VJUndLukcyApMVkzc2YuwZkai6WmKb2cRBvzgcrH9Xp",
  "key22": "2o9zRHgffSd89qpoDCMRfTikaHe7DikbF4j4kE2Puehr7Ny1muu4GdqNhZSbQ6DewexF6BfQ2ugbjwiS8LqhzzJV",
  "key23": "5bnEQkEmrbr9tPxib3dt5Ai3G8mRp5sZmKorhUvFSGvWJDkMiPptfVerKRfvPiwkqX2wjeCa5WbtiugBD8zKRaAf",
  "key24": "61xo6gnYSLJu5D3skiMaLyeuWhKJhsgoU7AFW7onsJ24HW77ohyu7G58EwzZUfq1amB8G85BLDEeVqWEwzTYgVoG",
  "key25": "ekGEVcq1hdch1JERWcXy1Qwb3mVNXxq2Q3rZnFE9pkMxmGwYbxUhk6Y7hKxxfz15b6QfhaRgGVWq1TrvyVffsvQ",
  "key26": "66WGLSWWpBGei2p9pekiJccV482HE8SbNaJLY45ubS22PHHDL2ifZt9NVXmGcG7f85ucm7Sk6bDiPJdz1x2BuU8T",
  "key27": "5SjvPNbpKkFRTcCaSDn8eGNsyhBjuJMuidQJZNzHDfXAFMtuP8AJiyZcqxuPE5jLcedrnLUmYH1d1dCNkEJLcTty",
  "key28": "2bVmoryP1w6bzxiHw9Ni2mEEFCWxuABnDa2cYCgwwQFPrkgn4KUBTZjVQczbeviikX5CxrU6JpigcWuY2viEn7m3",
  "key29": "2g1h9TVoGFrVsSDjxhbUN8EgPai5eexcPFqaGjcqkUaVi4dsGUcfJUkSZbJ3jDfKFT3tyq12ie8UNAUTKTRFJeFJ",
  "key30": "JYtRszByGJ7ZnLhYvYSmugonqh21C9DfVfKEqED9un9mujopiFasKCpeGLnpZWZ4ERA1D5sDcmQzxPCrLjcc7bk"
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

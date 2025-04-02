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
    "xwCFsm9XcXbeb5ngks4DVo23b85bLiiod2W5kk9z7DD5PpAYjsbRgie5u94giaKiCJdswU8CPniay2BpVbyHPcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hF6yTwKAb7ZtuRSM3TM9Ker2vziCTKY6a39ThuQ1jB5iWvGr9AHcxjgoeAHYEYwE382xiLbQE3TdhxJRb851Mk",
  "key1": "5i8HEG8TUqBhvCaZKwAaffM3HhQn3Fxpr6xSRYtkGaXuThQanL9UT4EyqGZL2ZkVx3xi1rY2yo1yXafFQZZ7CD4m",
  "key2": "2uTe1uJtRygPFDeb6ripNrqjujjAhqE9ENnzoUwH51hzLGD46qs9G5ToxPqdusA3seECL7QnaJmCFnmKjxfWcyyH",
  "key3": "4Cw7NoaLLQmFkyB8SSQ3sw4Zyuk6XRghSgwBeRc6XVjNB3SVeLzJNzoHwqqvT5Xh43iv31aEYavGSghSNueZmBo3",
  "key4": "5qBJWP3Af2y4J18Bg2obH4fJJzg9hxx4ya92KhDwGdPT9wCu4rGg3q5QwNHhBT1ehmgSxv9awSeNnim9JgdM7Vq8",
  "key5": "26XVxf6f6qZauJJHm4zutRDoi6gE48xXgmPsyU4SK5zEARbKYqEju5Yj1ruGKaN4KuwVRnAPnW376Z3i5vmYGLdo",
  "key6": "3fZnvqjVTqDY1VWxQrH8jQRF5Eey51estNCJoB4HQ8tiRT8iLijX1r2ryy6oS735LbwTpCLwbVSt64orcfAH76fB",
  "key7": "52D4DGB7DVfVw1nJBfqVuhFEKPDSLKYZK2rnmSf86TZf8ZYnuw5NvngoKMse5zfYMLDZL3sYmRhHPkte6s4sfGZh",
  "key8": "E15PY1kHc9Gt49BkXqS1pJ2mypyUcb68R5H34dUKryMJyUKbUuXb8PbaTNinty4ZwYxnQ9sjAVSX5LYqNfy5tgT",
  "key9": "2oPW665mbPDqMTmnxmadDrBP3kyYVTtFTfqUN8LoLaWVFmxYzT6E7fW6x7LfuSDgRwD31DPkvzt31Scf5DKFy3yc",
  "key10": "6dvDtorwYPkqVzr9aSVZa6KxWv3513FCVMw8HxbFQfWpZJh19FdpYRDncngwoWkmyfNG6hvq2dunCaPrLm2eH2V",
  "key11": "2LqLvSb5voq8FQoCsD8gbZECisFJnbY6z7HRbhU7HJtFsBsQx5F3DztCKch8mfScGEnZCTVuKzamwPAv3e9RALdi",
  "key12": "3coKfZVDFzyKTdjX9h6ma63reYvSLNuJY4jrM5RJmtrNFDHsT336CBhhHhxtxfJ3EvRFD7qE2Gtu3ahPwQxJYFig",
  "key13": "5LzZUqEe4wioMjdDwucPhGrkFJ9VKEevKNu17LPSk92Ch1y3uwY1gVrB1zR2wFK58qj9h9pPgTZfyiXWFUizNShe",
  "key14": "31b7N8TJsZVMucbcezNQAkviaZuHE2e6uYmLYrfQQmdSATnCXSPD8pZW2mFX6FFuT4hkMRpC2Vf33kxswKVxw1j9",
  "key15": "4N7C1enskXVLS3XCjByCB9yKViKUKWzJYapnmoziKGLigLH6pWfi42SCh4MuYwJqKdppf9ixWzKto4HbmEUYdcTv",
  "key16": "22cUgm4RXsjX4PqNuQBzWU54gqAQHZeg4DNzHQEygKcywRnJTXVWqRYqPftEQyEJzBXCpqcsnRJ2FSnNX55oSdmL",
  "key17": "3dnxeeXSXGbtWD4Z5jM66MU1L4xY4UC7f7RcKeYiLKWCPwGCvbX7yUTdZiHdgog5ZDiND67NZzNjDNGo1Uci7926",
  "key18": "5QHLrdP2TRYrDRSivYfPtUTi5wnJhedww4B7wfjfkhnBWaQbhZQGErFVm5aVxLHJBH3E5jSnHASeyH734f9TmDgx",
  "key19": "5phhBJTqcxS9FN5k3GaAmF2S7p8aAsQFikHEQkddQZbD7Wz8TSbPmgkEttkkcBqgvj28XvLZ9b3L1oMcPQKyLPhK",
  "key20": "43z527ass2h54hzhd6s7YGEyixyZ6GQVZ83fdi6PD6J4xb8zx6SRMvuyissBByCNrHDFCkjff7u91gesH2snJqA2",
  "key21": "56v4QfeXjypeWUtG81vts2wKJJ5E3qXeHL8j8UEDbmNM5TTeDCTzSWNniZDLfYExthVt1g5fPSXkfHuo9owhGk3P",
  "key22": "2cPEn32T59tu48JkEYKZZhU6rbH6NRmy8hSJ53h9ygAq3m8YmYdgBZJJRmPvErvt8EswLnnx41KFh57f4HCtGSMK",
  "key23": "3TEq1UUPKDFZBhk6cjeQCWkcXAg4HPQCCt6JQhV694TmZ2TQE5eY9PXGRWFNHtR94nCX7NdvR2pMAjfTHeNokkno",
  "key24": "3ZCocKeBEGrQMQ2Fud28nZfxMdbhCtDudShjm4ku14eDDC8mDfc496Eg1yDZ4Vnrp7bov8teGueZwfovNxbLtsep",
  "key25": "65MngaZLMqWRAG1PgXN2hx4ZpqpwjTxNWbUdkz2oE2AXmdJMSb355HUEfG2KTGc4sSZJeq7xenkZc5oTu668yRDB",
  "key26": "2rabS1qyG1BwW8JACmTaa1zDpt1hqCRuZ6LK4XZkecNbSiRmYJfMnkN3y269uRFt2daZcVW7MbosXh85tCyzLGc6",
  "key27": "dG3VLXy91YYML9GziSzQLoSPRrwBEBBaMvbaPp4jBZcbxC9FQ5Z7me78knDnJbQqjXPpxXg1KsiB8wfWAkwLrmV",
  "key28": "yqsqmkVt32QzmgJwFzrhzZASAehLeWXHwaYeKCeHptP7WwWBqxXB8vUzjHDHFPfV5tmpEgffUkLBQAABRUPYRSA",
  "key29": "3zGHsNFps9UQnXUxUxUmDPBroj661TaVQjUVnsspNkSM3CpU1M2ywezcK9XopDNixQ4oQVm8fz1afNdj3wf8h9QJ",
  "key30": "4fVCrb3QEF8APKc64R8FsdcGQFU8EdVRcFpUkJUUeyew5y3etaRZoMaopoFZSXpRo4fwqS2VqVBnAR4KU6DFvSBZ",
  "key31": "2rw9SN1wPYUmE8BxmyQCTBp6a4q6don5kwSzyazE6bqKVxDuCET2jiREEbYexHHG3k7ToJFVTb1BawFZdNaghEFV",
  "key32": "4Mj8nyQyStjqxXQuhCNzEcK37MoxnxrYEFU1TfuBCgtm4EhCx2meQqMpYJoAP3anTEdXgMrLGNrmNzdzzBgW6wrm",
  "key33": "2Gf79KJVmYduz8fY5JV2J5E3h52RASNB16FxVw5FTTQqP7uHRURyg14x9wrSoebSEWsJjJyA4XYZBAHCn1uaPsW",
  "key34": "3GfvB8GoaVQ1CafSeDR9Gtk4AEfEB7YdQhPbUCKYiPGRmommXcTdbn1YQDyPdqxh3rU6eRcAZykpMQ7aoojckkJD",
  "key35": "2F1tL4AAQPDtAJ9B1dYo22TMhEBKyq9rXF8GqSAFeheYMdrAnpKPwTSLncpF19sUQmGiKwqKsJicxkxEJ2dCq488",
  "key36": "HutcLESorbQge3URmM5bnfSNmpPpb4PipytxtPfhWLL7E9FFVXFfWpa3UZnSzYDWnKaNzzUyeEwZJkhctoKAs4e",
  "key37": "4VFToDRGhDT9hnYUZRYqXWszqgdrTUmkXoqLT3oc8iNz9ngjDe72nVcMAYaSFmL6qKBGC8K62dpxL1c8hEsQTnvv",
  "key38": "2xpHYpkwiRKYiTjLF3qu4hajwcCeLXrSsfBvqzywA553DJ2sKVCQzNgvuVzZPeLxJfuL6SRZhQfUav4BmUpnseqj",
  "key39": "3fSE8xk1XBniGgu1Ljs91uASDnXtqiWkRPFt9Kc77ZyvGZ7zmHhBQ6aMn2x2GpgWekQbWqVJ18B3WuwZRyfAZAYL",
  "key40": "Yb2DHHKu9cKK2dWTxd3gWkGmWE2JMBDkw7pskUiEv772ZmDUVJyDx4hLutaJ2i5SknHYvquobvCZ6TGrAivcGnp",
  "key41": "4PNVU6i7xbQYpzyn9jwye8HEchW3qah78Su3Md1xXL912NQjtoq8hUWGfeXQR8Vdr475vwExVFxQY6vNDHDmbsrs",
  "key42": "37H3sSn3peToTb1kCoc8b1pjppDh4ibpGAJuYSkrn3MtkFXz21RNHHu9tRqRkMuzpy8BJercPJhLUQ6BMf4HrjEc",
  "key43": "4RhFyZiH9JRkJsiyzLASnaZTuRjSfgD4iC4yqH56d6ArmShwWUWaingFJog7rdFMuUi8FVPg4ENaUx1PeGaLgFMr",
  "key44": "2nCGuHrzKEgJAfW8oY5xLNNsGiDw5cMwxyPBfkhtb92jnSJV4d2VbmCPjDxEq6Zq573pBV3tUMfgm5h9gSqhYsD7",
  "key45": "2kgcTzozfSSTM4NLRAzzqZK33T1CvrJyTpEZKZbWGL1r2MpS6wvJvL8UYmTa6YU82wHJ9okwMGeJyRnDX2TRxEdm",
  "key46": "4nqqpsFHXLxCcgAGDRWm1LHRcRRPxWR255UAL3e9NYJJeHhVeuMe13HwjL7UqzaqwownvXSL5WGVhN4vsK9F3TBH",
  "key47": "649y9swvt87g4ecieSnpipMz4RjndVyzKtskbgduPLNBFwJrYmPUSDNs7x4jBP59BVqohRi18hAQMp5g1PMKeYVr"
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

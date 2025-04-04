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
    "3FMBfyuHvANpJqPWxc2TCKMpe9cnsf9V67E5qdf1oTLeFwRbszVZjPfGpRcGf5yBrix5GHGEM5bsagGM2VRbFEiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iEccARYv9cUcNhXhdwDfyibGUHDK6pkjsjysB1wPzf23N7EwhDUY5ntUAXgCh8Dwx4w5iFqn6ExDTtRYdDYE4JH",
  "key1": "5r66W34b9MPCyTKVL1rT9YwUMc8ucLXomdyJnbtGdeYqWA4iZJ4DqMuTFwVv7yWSuviHncWCyhZpqpgZg13akByE",
  "key2": "5472yWAryo7bXv7inbahkvJQRDiHKP96njMofECTvAdYh5BrQgGac8uieaee9cpi6RNV9vyMZiN1B5bFh1Kazzss",
  "key3": "8TUuMhi6neKUCSxDxAesMCWkNdqFozjb5ZUACTuxUsbp7qZzqcAiYnPvDYCec2E3gjrwg8abeHM1fWb9V8KkL1A",
  "key4": "4iqtRPMfypat8bUyE85saABJDKJaMJmbzWmTc1s94EdWvKJVoeXHaUQ3Eqjm5B5Y3XYP6jxutDqpe4wkqNmsJtUb",
  "key5": "4db8wnPF1CmTRKj8JQktPwTCw4FqYH4sPTdXrzVSBu7iMAhU9Qv4J6iV8pkZ1UyUVoGLsFayuwzYtoE7q5B7esbp",
  "key6": "Eq5zfBB6t5h37LDfqCy1ny8irWqr9mXyDvq5gKm1BKPyaMZT4Xhq3AHwYw6vHTCzSpFAbwnyUcFRbboucr1VWX4",
  "key7": "3uk2yBkKmPyUAj8JGU8K7ysiXqVePw3RzUuxFyXE3tkmFpHEL2qLAZEE4oUF84YpjPBJyZTzH95XxTukrGYfDeYe",
  "key8": "4yn7iiAXJJwFeatM74FDtvSVqhzi6TgcKfLsTJBpAHpz1SAW5cWvPw8YGvfP3f5FvFE6KHtHsCcu276ufPdYLBKx",
  "key9": "4NyyFaMcRv6i76ZqvJMgbB6eg9pkzgJwS9vmmFeU1uh5UZvqSykJ5uEvMSsAJMsZ38cdqYwXZ1We9xhNQs5bAuuh",
  "key10": "vSF9thTfwaumSQr32AX8C1K7Ggrtz78ZcojmEubU7A41wkV1dAejKH2jvzk7veoxemoHtFqH8EL8EJVgANQ6xV5",
  "key11": "7MkT4kXNvWmu2Po9ghkx86eU25Xgs8yqMDDhJHSA1ZJvMviGiUaRSkkss96sUrLePFWEXK6nWGjB1PNGxhMqNnQ",
  "key12": "4c7u9RzcwjN8as4Jva532zX22zdfLxWzy63rk8B9PV4yTxvNSktXD2F5zqr7EacLwNumT5kyt8uo5HHzWFyqHPhs",
  "key13": "2AmTat4Z2jjV9mN8SGNbTsXgQgmpeEfi2zVL5h7xio8SBKa8ruZb4TjoKuPc4Kpy7UoGZpwAYDcxrFAJvTvn1UT4",
  "key14": "3MPg8bymRGKEQCH1AkPhp83QhNhCd3Vaot5N7aUU1supWZVZmBx8okQz1BfaYXiLRXTSmjwTPpc9j4MKQkJRozqg",
  "key15": "xEHz1vX1SKjYzW7nWVq1sm9F1LcRmzh36GXB7f2kULyhu1Bd2FpMPcLys25jvQ69jMCMkv69ok7H29nsD7367Vi",
  "key16": "4DTwqU5CerutbH9mgyDXk32bm8n4aNX7aozrmoS33wYA8n6gNECzEYweSRooABS8M6MHWXbZiikckDf583fDrKfh",
  "key17": "2s4qTzrmXv7fPUx87NchZdpctcirKfyjH1275EmNwuv1h3jDqj26uDuEMyYFNpaj8ugTPKHhkHqWKpXU1WvDH51L",
  "key18": "3tWE4Kad9H3UFNgWTMLZdNhvxKT3JoZTQShaRzzWYSDwtD4qG2zmXPpY8PUaoZZR63Dj6c48V23Tn2vL1gEpeEos",
  "key19": "2eeQnC2bCqJDxA5LJHhwkHsBzALP8GUmZeFQzU6mJtUCaCntdkAFg46e73ZZkREgjQ4eWz5sgMdF28Yc7NDQKHD5",
  "key20": "48mmoF2nNKjZpgiGupFDLsEu9vUVc2sZKhkEvVZ4uDifddXcTdYuCKxRXd5KNQQUCjXRxCperXWA2tfBxyQELdyq",
  "key21": "3zko61sKK88v4q3RMy4kUQMPJD3x2ebSGhGz9ykMgnmXSLH7W5u5ESBqaBfM2Fho8h6NR7hse9mBga1FenzWJujw",
  "key22": "PMbRmNGeGYPCcjcv8qkSj7SLDB7NWw6zR6VTyZnNyNbffaYAZsEirFZb3t4QjYZVMHwHVPnP8eZXwrp1BsmiRqE",
  "key23": "qdBxDVWtJ7BzK183EDcoDBjtuywm4TNt2WEb8dY1acXohFri7JjeTh6HswyGdMDSutpFUmUTV5C3KZs5c7EWmY2",
  "key24": "3TYVLfJmYZLY4cGKQR7qLoAhvY9BLUF2bVZgKSFSFbnKGXxRTbHwQe5D7diuYc1Q9UPRSc8tLnG8ZNQditnrsQYo",
  "key25": "2W5EVSUgZLgTCcLuaAjWWAKfRWBWwvW8KmbbgauybgKYVGY2CB1gbDwNzpzaZRr6abNpUqE11pcHqf5ZGjGh6GXV",
  "key26": "49FNBF25QWGDdtoyRwQvonwTC4XrXhVM1F8JQMBFdMYF4ixtrSa9p4HSCGUTVshZJXW3C5sf2pWdY1duDac8MnXH",
  "key27": "2oxCz5AoqMHJBJdyZDT4T3ajLQ3eDmByBnFHSdSwwkPQt8w47CXQBXGs4vgSJS3tuunNKtdgp54gaUq4NKyXMDhQ",
  "key28": "3gxvt9K85butBhyyx2aaaETqXzr4nBbyVrzi5GFmyNRnVNTsRiZ2daX4JHMA92rpxeENe9Qh9w5bV7Dk615YSyKV",
  "key29": "46f9VTXPWvK18gKHTRsYENWFQ6imGNyoHSx3fQcejJfNX2kt2q2TBy2tRwqz622doc6cCF8LmBiV7uzXNJHAqAdu",
  "key30": "5By4iwfTdgn9JVHYEWkDMShAxEvg2DHiDGThaRr519NmcAdzatjDVFMEDKbeoCCNWDXKTz7xCVkCEfQUDJdwYqtk",
  "key31": "3AMEcoSwZNiJjxy71rqTgFQcVdaRziQuJs3JV7pDa4wFmXsdqwqvp4tUS3f28smA8r1ShcqzYPd5pXRb1Gaqk4A",
  "key32": "5fBrSeaZNmxVHEYLGKUgDUKknkG5tZsBgFFJHhwom5QZBoxjnzNKHqtEgwBSeap7a2Wbyd5QnSYXcSjd49QNfnc4",
  "key33": "5nkxJ7suwwbT7UVUVrVFALJtzmvKHq2as6MSb5ZRh1Nz4ooAj1BUcH53nBs8HjKUEMJmsHdegAp4uedaXBCFgB7p",
  "key34": "4PHbUFkrubrsxdjfZ8SxArfSvPCVCNXY7uEjTcTuiX7XZ2mnz3i9ASModipAhGdFEp2WVegJxvrfaVzjhWigha9x",
  "key35": "ufTfp9c1K56gq8F53Ty3PJJrMxxbpUfe9kBfXwvx6QHMKLn2SDgRNV7WqT6v3VdKuQmDhUGfJP1e4Btqs3crdHp",
  "key36": "gwrw6mFLcjYc6U4TnJFB4zwXrxJQueyL4Ezrcpvq4cEdCHE3FPtyfGPYYiyPStQUwcjaicqqHn9ybMCwUC8Tpfo",
  "key37": "4RCYpsEmUXSVEGp673GBmTPjipPHaS9FPDmvHuAogHnRMNvZ7h2YeSShmtEkDy8NC7Q2rFP8CHc1EpXc96AmCpQ5",
  "key38": "56jcjYj8MZjvxKmL2h7igMy1pyomryPEWdMEdkk2EqKifxkXHVivb6c2158H6u8v9LnjRd1jbnZV7ii3N6z5zHnD",
  "key39": "2dDva21YnrXg9seN53Pgu7buQF1951Hxt79rgu9okwgxCPnFuzm97YFujfdAv2ZptGwb2j3JojkcvjtdoMiCZZpk",
  "key40": "2QF14JFUARgP8g7SGodKA6k2yssvJE28KC7kjJhHWtNrYahZwbpjykuxttyhHasAM316GzCGiA6k28PJd4rCzYNC",
  "key41": "dgH6vn36ptjYzF8gmg1XxiUACRTW8huEq9wVFrrNEf2AgVEHBLwAsq5uj5ebPrqmPPyS28m3MYkcPxurhKWHKcn"
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

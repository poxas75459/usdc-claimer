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
    "2rmR2CCGZJSJBbYavdyLByLUn8ATAujinjYHaGN6fnxfP1XYwj639M1bH3fp4T4MG8FqACnZvJoxWpDyBYjppgaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r2v59TFZ5mBNE4jmUni7N7HNaLvEyR4ZEYT4S1psFg18vHxfYvLN6fUnynvhQbSr23utBGSkGEgSdTDcy26Nzi9",
  "key1": "4GRZ75iWv6mtfBzZeBACZRhZJneqxhqMdkDz71WG4GepwVdnQ6Q4UUuaXryoXDrEwq2VrnKdaLJ5rrc7fojVnc7d",
  "key2": "4KWxs7QJNDkbQJvhRhkRXKaG2AqskJdM3QCGqDTGKgETq6cokeWSA5kcNYyVt1JcGWisT4jnpmRW9FxudmySohrR",
  "key3": "3ZhRS6jobozfzawYFZLcfTHwEhwbxp5r1VDvBHu9j7MHnt4fT2RBR1s3yabctymuZijV4huuvkQR9ourn4psah7i",
  "key4": "YX9fZKL6P5neSx3HYN8UG6Gru7Tf7ztGtd4kDUiu244Mg2WEyNXtoa8fg5H6vDaE48xprBjSQucqAPjCuPBaMjZ",
  "key5": "4idvWkdJD68ZK2bxvCU9BBiwKHCWuuqS1qF4uWAxZX5xrtdvkmEm5qwE84FbuzyUNe2TLRe3RkZyV89dj2TG1K2k",
  "key6": "2Q98x6YRC37Cuz5ApTbgdtSoF5NERZm1x134rPgQ7dBrMBaj5caidSQ6otVwkgwRUeBTxj92Eg24RkYQXxmxZnGt",
  "key7": "3jDMfKJJsCnCk6wUuPyDd6nxf3jvoDtHFNvBBDPXSkkNgUXuffsht6KaJWp8bfxcBp5u1u6cMjdCoMTH6YhbgeWG",
  "key8": "46f3x9Xj5z3o1G2SijJpikxmAPGcdwnKsXZ4bSPwmXMhGkP11Lnp8cmvjLsq1nM4VmtNqAjrEn3SZ35f9TqhJmos",
  "key9": "4xvfRHTkeQ9EwjqCQ2RXuvkaPRasPdMBbwz19EZpNi1FF5FVVexMcKTgXCbzTegBhDrU1dJhz8cWPjtCztrF3zYk",
  "key10": "2Q3dKNV5Zc8Yav8tLgPzs4Jh1o546Q9qmsAniRfcWKxgPJVBEan54Uu3uviU1cfJW4mDj6M5ow1Tt9xNYvcSNjGQ",
  "key11": "6Pp3QDbdtba4S5Cg3YiMwaYUrNYjgmkbXywMHg2HFyc1hxxQDeDhR1fempJTZE2KstXZjmFR4mbq5p3EJsfyPoY",
  "key12": "65JZ47DHsqvut1GU2HicqYBbWu8mdtpwiVCJtPcMbCFCtJ3u9nKRAx6yZZqANBr7Da28EWQ2x8Bw8mhF9CXTXpJT",
  "key13": "2LiYhjFYkvoF3bANfxrftx83LJ4u6rM274n8ehyA1KrZCXboogLLvH7D6nDME5t6izZjEiCJfSXP57SZVSeGrw9B",
  "key14": "jZS29m4KDQyzCsAPemA2skE39jckByEQ919JBYdBiRTzUeHn7RH9JXFyphNZXRBDvdfDUHwbdMDyHZZavw3gKzj",
  "key15": "4facf2aJarTrZcGX1xqDtGp39mBh8djtUPJES8m4WkKN46xsb8JzGjnB3UuxiW5rwvTd7KCc2kuarYdYx93g8vqb",
  "key16": "5np9vLujBaPJU1mjVME9WagJMvoQyggYZUj8icoev12dBdHe5T264tiSV8Ypbxg2oJ2D7WgV1so1y6iX4g9UtdR5",
  "key17": "5cdqgtAtWSAR47eqwmSUBFWuuxcdZXw3ZA2gqP17dZpq1obHRCqUfzzDUepeSLohDrGqE7U1zmw7ZzgadHxK5aqw",
  "key18": "HNnS2ZhdBEM2ECvqXrNosjavBbQHXn1uWrxbLGWARAz2VRFx8KXDkQXoMzY24LDwU2sYht9BvuJhYc7tHfoKTde",
  "key19": "28CCgdzo2ef4EbVre3mnNPNeFoDHGF3Zx9n7Mg1pCE6heBgC3seg3icZ1DkeC7Zn14gxgZQbcUWUD2s91GTPjDAV",
  "key20": "u4LhGZq6DBoxa1miBhdGC6jw7CKCLZfd4rvoDnbbtKTC33SnTEN8K6cwPGWpXXGt4ztE3Ztuj5zMNrdScdokGAH",
  "key21": "5Ehg5o5jh6QaBqeVaEkswCwWiUGLZrwCe8YKCaV4jEYWJJN4YRXkMGAxSJPeqyFvsrLzByFUU3LarpK1keUn5b15",
  "key22": "2wkpGHhdGDvT6ssp4TpaPsBtDTmfdA7ezr1g4rZw74YYhxesoKtMadT8ZnyVXyFPCZbbiCWqH19M58kuQBuRFk7d",
  "key23": "XUPpSzASHtiGFrdYeGgQhxrh86tcvYtVXpwdXxzxxZuya6RVRwudLbBhj7m3wb4NRcQyrGCDDP9CAumqPBpnQ42",
  "key24": "2DndfEhVMRsbuLVc2tL9uvaxDyP4hHcsJ22aMhUrmYzBDaRuSz9KHX5weakuyt3kLTMRUsxX3Rp5HTJYxw7TJ6qb",
  "key25": "49Y9eHFfh4fRqpzqE6pXj5toFZ4gA8NUcnXEBkkxXMZ7seTvKMNF7Xo6sDYbZNoDfy3HgcdykE3BKSGpCGbGi6vD"
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

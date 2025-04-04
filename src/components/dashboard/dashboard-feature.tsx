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
    "4C8bK9ECWCgFx2kcm8gVEQUbdsVRSJUYLCjXmkQ4CMugU9Xp2ptPdwAk67TFLRXZiygvVbCBPcSUJPBPz53U6Dw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUEWKKyMqNMuzVinhETBogmRWXKVp8JxnHah7bq6WVUZHoQqf5yKJ4FfzoHQJTcoxzCKK4TzpE2neq85wQPonnV",
  "key1": "3yvL7qiBx2AQ7syaLZuAwfnKRctSutRhvFS6Y3V8Gc5HDUFstzCyUEUAbDcpUYM12oGogcDjMMbiZjux3XrwyEDu",
  "key2": "2TTPDhuB5m8c8B8smE4yoTQ1BB3BjKmExYEhL6H7tGHnwj4pWfh7MESrG5HB3GpseffnvvSAJxmheJyJw5uEHNpB",
  "key3": "3ZRNvvTv8p2M7G15zYf8JcnLUhQar4ULTh4WkepQZesLP6JkYru8PsseciKSoANeLthboQxdyPc2p4P5ms8MAPpB",
  "key4": "5J5z1LnYTR8vHKZweERm54WzMMg3e6ErRS4eRtxHdMkwUCzTjj96vAMhv2vkmzHRzFT4CoeKMW5yUC6WPEt2EZq4",
  "key5": "2SsusHjUWHiHZmZPWbdihVMDA2qaRqiP71c6mue1PEB7wzAiaGLiUSX31G6g1rQpG2GjwMiLZ2ePKifUQXdY9WD3",
  "key6": "m1Tw18WAtLPDncp3j4kdDz2ifu37JaEPMhTEnvXDHQvsgvKZA7stXEMkCu6kt7qSZ9dyZtfbsu5wdodKkxRzqR1",
  "key7": "5Ex5eALRs6BehraYQytcBcLk1xe63NhoeAejZRjb75SQYujTz1q8wKY59oEfJatjxEuxjSRjUyRTi1uyrwfBA9st",
  "key8": "3vQxwpHUnuFA2t4ojfWGauWkPY9WAaa1w8uxyVfz3PPApJCuTVwnzEPHZ7T4t4ckAec2dAe48idiB8xJECRPLsx4",
  "key9": "2se5SZEuDDXTdYks8aC1ReGH16CLb6WMuEJibyR3g1KFZwS64FQ7kyHxNeCCaX9wTqKk3PgSut7MAVych5KEXg53",
  "key10": "e3Vq2c7yVXAkWMScsRiEKusTYuaEVHw7uhoWmjmstvXk1CW8MD59JJfo9xn1VTT8UxZ6WPD7rUzje5Wg18PRsva",
  "key11": "3RiyjhLKgrUmdtJ195TPfvCetHyiB6Zny9rGzmFmAASrjJzEGnK9Lg4FSprrFpKhLwgGxMgLV2985jLDcpDd7uKf",
  "key12": "4fW94TafeMiizab4zWKPjHnLT6KibTUicJeyTC28ugQSc1Uf2yonMfGxb59bYvpkzQvzYMXNpiQvD8y7WPPrFBqi",
  "key13": "4w6m75HCdSvSRHuRBonwRtxAVHqj9wmqqpsgyAoRb2msTniVFtqkfk2vcYn69GKSdhSurksyrrFZFoYKXrXSdTnD",
  "key14": "mFaJqFNwozqyLNdpNemsy4di8BxPcbZNMMtPiHcN3bJG2BdtPBxzWbU3BA4wBELW8K3nVyQu5BA2zLZfexcumNk",
  "key15": "4U5gtK7eSHQD3Ma8uXihDtLZii2NpjMWt8tvTmosnKkn8EbvsPohhrWF1mjx7pPTXisvKTddD4gfN4h7ZZFQQrmY",
  "key16": "3Pt9bwSBvuuDLBknMo7CPqZnswuXrbEHSQ6kaRXU99p5QQbnW5meqyc2pjUW8ZLgxDhFhceGSuRa6Kq4sxQbsnpM",
  "key17": "5WNFYhxvyga1nBAna547ruzvsHyUP2YayJu8KUtCtXSNqMUwX54RfqjkgWw5Q8aGUhqPYGoPdmi2L8gXPwEADYC",
  "key18": "2Xk4vBMLG1t4yr6j61CkevPjUvhpNkGRuiLrVxzTLv7gtjtSoVZuB18pwMgcLWz1AW1kN5M8FV8ghAqhuAmEFGNM",
  "key19": "4thGNm9uW9jAdDgK2SSxc5XSPJ8PFyKiHpqtbLDaybzgfLb8DThppkrTs4f5qfci3pr1rM3uJbsZ4uZU9YqCNL8X",
  "key20": "mgVsPjV2Jo8pxDSg9tftUAYfYS8JB8QiFXYqgQSLp5yV5Y8ishhyrUCRbEGCSV7yJmfMmdjpK8QkENPUN8achgj",
  "key21": "2MkpsjRcXAk8bXD834HEsJyTD6S7sqJsNtP9Ttw61oqR1Dq7CcN3mxyBYWsfUTPA5MZaiMRqAP6L4qvDfg2MKGmB",
  "key22": "4wBun127Q7QZhboSkH95hjgAeib5siafoBiFWEod7noL4v4UQ5dpnCda8wsWvKRSbgpqY3s5q3q4gVwdLhz1Dptv",
  "key23": "GphJiH8sZuDojzKoW4pV5jyA4NPZvARcp1dD4DAfmTsxjFUUcwG4f9U2oCJT72Cq7sSSPqCawkAtDnadkkrWzTt",
  "key24": "2WsjpEb7dsGzvc1THWLaKt442oNYb94W6fH8MxezokcHxQBL5Z2dwseWEBx1aNMrUSqkz9jaMHCCnKGuEky7bXFu"
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

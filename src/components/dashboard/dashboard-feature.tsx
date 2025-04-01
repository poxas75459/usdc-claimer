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
    "4uohwPmBNoTsrB7xqkaHXnK3w9WfKfQSJddb4N85cUV9G1gugFrfcHv42RN5aErcrS2b8K9XExSKhGNw4EGgxfkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sCmQRczP6iwH8oq5s6wDGHeJnhaTG8saXz2uiXfDcim9VnsR2Ln2EdEoeTrHgaZsdKFsuxiPPjh8B8toq1rX4KE",
  "key1": "3BetxmKVBnenSqDxKAVAGG8URoGsDM3Tw5moLQjAm68HkHQZaNrebxCLJ1q9j2XSR9Jivn48EGw3Bfm4fp6VGnVG",
  "key2": "589Vnv1g3DeCjhhc2f9vwMjFrumV2ADE2XgMq1Ubo6zLC7EfoyuHBM2EGrqUBD5VanFUM9fNedG2AFgTLPn2io5C",
  "key3": "wyNByR3xCPkugEk6wp88ftzNpKceC54gVqri3mYDgib36JCsmBXTqKz2MP4xRvMHQb4cHLBaaoxRPYuERyfBuvZ",
  "key4": "Lu2Te1YRUy5PVudVRDM8j8twrBaJ77PoiZpVHug58EYJ6XhgcmMPRak3JmhjFnqhuENta3zeMjHmN8RhZ1E1MCt",
  "key5": "3pbXBkSi2dTiNaU2R6JS55gAwTmDbFL4xgfqtny51KBNez2HetwKNxK5465uPxeHZb1LVhDQuKRXMKnWv8gRVgpC",
  "key6": "3NA27RaDPskoT44zFV5GgJCdk7MimQA8BXj8KshXVaZbkgKwy8sTAhu8VCwJQSSAQLFigxwFmjyV82gbPdetF85Y",
  "key7": "4jM4C6wLQhTn9fmM4YtQ2NNjAq6NR3EmywtvbsHLcJ2koEnLuJ3VsGDckRUmiJguJbUwPwKDT4CgLGoKmkqfP4W6",
  "key8": "vmu9TjvbkQYwKKTSoEABJy8hiyyVqmPWJKELY6eBzLD1ZXeEZJF8W5TaYvCvC8TFRaPcXLwrYbsHRMGvWKMAHhR",
  "key9": "RSs6i67ji7wbETUZVxyn5zrvuMPPmKnadT1eHjvmEbKKpGQoQWQGB2Bnj4xAbG66x1ZZ6p7LbuAdy5KDiwAP3uB",
  "key10": "5FA76EhqE1CheeuWxSGCjLGVPV6fLnR78odPdAVNMUewX1RA5HqFRTCviVRT2pRWHw28uR7Lx1Uo5VsNvfRzDeFj",
  "key11": "2CY9yNnmhqQ75QXGaP1bhGyHN8fmpYhxf4tR2QDo7AUmsv7bVGba2CjuTPFP6sNhpY47aJRYUQBVZcNeLDnQkZ2E",
  "key12": "2iUgHkMbpRBKQENtySx6JqLdn56CdLSE2cXtT2vEFPn3KdX8ktBpFfpga9vB6yYbhXY6y5mUH9RjPDYqYxdP7VeN",
  "key13": "b4AdAYdq5DJHFcV2A9qRH8iiDdfeWHtPFXj62bWz4Q8fRPYd9a2DJvzt6KQfUDsPDhVGBGPL6LNgV9DCKTCXmXM",
  "key14": "2ssrCBQkswp4aUFfudEdxAaM3QHFbNX5d4tgQ9Czw6eWZxwJio3aXvNy5pv5WjS1JuSWirZZMaKoea9RX4uN2NZm",
  "key15": "5CoNg61PjNkkxd9PdbzCPCqo1Bb8cedwNR6UxYh4u9UGXyTLFfN2jfi6VXrpj2WwDm9yaFyr89BL4ss2ECmV7Qmf",
  "key16": "2WMUMNF9gTQFW7ns9Tkg5CEGm4HaLYLvRGDUcdZT4J7DjUaJsoW34L37WtDDAm5nS5BkkhUh7okbXAMpPUQ7pvPw",
  "key17": "C7CrwhMguY1jKy3mxxb3UrCnzNoHSKUkUv487o7MYyJUamYFeCexkhP1FvFNXTYatdsncQDB1sFmgbNk6kwRx4o",
  "key18": "4wyQa7BzmAS5PJxRTSx9Y5DoNALWK7XvsqN8aaLw3eHEq4dbzV7oP9ZaG24DjJf1ULTQkzgupNx9XnFyr3RDoeUV",
  "key19": "5Lu9PVuH4dd8ggogrRSsc7MH4ANJSioXhiDt8FkEvGVMivetJCJb5HDutBto97jk3dV6YEQS2vSi7ZtjVCgdHwje",
  "key20": "K96ncCiGTj68EAKPix59J4RCUfsWLm3xuAa7sT6JaZCcbbersWbj4tKEeSqVYbBJYAFyLbFNnEQgR5DYZ9XZ5HG",
  "key21": "KcR5soz9GJtFMSaVsHLWBwG98qUm1ivyC5y6NvFCp8FYWACHfbbDMexShQ91C4jDMRcscJfEqHDjJwQFZkcC3PC",
  "key22": "4BKUfo5FWWEoJUMtsoEfpS1qqYhDfQk112agSm4UrVfPcfsG3kNci4oSubcyWG2JzKxSWHe42jQZCDwjrtXFaDgz",
  "key23": "4yVgRjaBMx9CdxjzxjhCwzhdRbLyov2QHJXaqYLGJx9efJPTL4H63LSchzpMFhBpz8h6FvMsSAwyWsXjA4vXZA9Z",
  "key24": "2R4HXfcfydQygYChRJzw9cJi1T7f7ASxUTm1DpXz58eLX4BH9LkWKWcLC2fqBsL3taPzvfiZoraFqP9dRETkLpDc",
  "key25": "38JkALcBRNijQdgWdmFETVR6xdxavAtrgeFGnAN2v7E7m9Te4xkVjcnaTyg3TCVHM1CvfkFZRMwYvAUD3rGmNAdp",
  "key26": "5bkGnjdt2bwoNe8kr3DsmpUpgsDK3Yt8kaWFoyTZe1tQU6ENrqLRngQKeXMgaC1wA7QTwSrKL3yKLNJe4mPi7jbh",
  "key27": "3TrdAT86JMLvN4h1Upu2p3LboZX7rpUGDqovzQr14ERT4GWXYbYNAojPMAkrHhAqoSeLke2Z77UXbpfBHPFZmSJw",
  "key28": "5F6vmjjTLJTzoPdzfbnPmyLsdxQWD51sGDZiF1Up9GTGX4nubP5MgjN7DqJB4RJu14pKj5rbZYamHpBBcnL5qfuv",
  "key29": "5DApcq9eoF1xAU5A9RH6FjPB5pS3FULB2kMNoJtJry22rDrtLtDhcf2c43F7NW6Kv8QAn3DxVysaZWXmX3ANkqD8",
  "key30": "4tB4VuKqJxm8T18MUhbohZ1ygFXSKmZWHE6Qci7mh4hMyKfT8gfxyQ8TJGgdnBdQ1oeGX9gQDkzCh84g2xBqgGXJ",
  "key31": "TdErLjfgUzgmYXQ2QdNdAz4vCwaX2Sg55gjEw1u32wmLpvUZgiqvqxxCk5FWznTotmp4QsLHETjzutE4Lf3nw3t"
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

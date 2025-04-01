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
    "2wQ8LPMW8HheVQb6Gsp1sdDHwfg8SuPaJis5enK37aK5rN8p74xGTvov9FrNDoUC3DqimnDqYrrM4gMBPYwjrJrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcuCjiEN6RTi44xyHdzghnDe5ePrLgCWZerfuj121Kmhe2TKdPT2GuWNVfQCjEyrkoB5cxrGL5BfyzXD3ptVvrh",
  "key1": "pVuWUeT2x8wV6LNvPvx8sFgW2C1bDi68eQqu1PCkrdrLL6vQaUvdwVXJKt6rpY5nwTij6NfQv2xcJvjsRDkhb9r",
  "key2": "4QEPq27QiQR6r7reQM583u8Z5uxJ1puHrrZXRBArNVGkaHJ24hMrQ2mBVr6iQ7FyJoW2La1aB2yS8xB4QoTgpo86",
  "key3": "2qXZmgG6nfXKZBg8nBxNwCdLGMtVAzHwKuCzW23itDLhaVvmrrrMRjrxFM6GeFnvoH1kqV9thjDrB3vHww6t8GCb",
  "key4": "2sJoJeuFakLiXFeY5Kjf9E82gFLiutETwL6NBaDoRwPKkMihUazfF5FmQC5fZPbZxmQm85ovZNFrTjBG2QDny5A",
  "key5": "fYpqNToLHjSnVjnyD7CNe59bwe4VFYyprTJEZJ2s8ytCPBaJeH9qxnyfsp5mz9s3Hu5ekyGqi2yTvU6AChTnScM",
  "key6": "JsFVeZs95Uun5ifYzgUFACpSk11tw6zdSPLL3hUf5wvjbcbZ6X4E2fa18SA8BNGtKPZJWrks9vEWb96hYej36KE",
  "key7": "431DyNujgvygpWYtzStzZbVHXiePc7B4Rak47p299jtdH5JdAR84NCAtLBupaZABzVePunEEuSFgE4tASBvitGSB",
  "key8": "2ibg8ZsH34C6gkYkvPSNry9uAdhxmKXNUuEggVVyg3iuP898JQKapq4itqjuw2xn2QcEhjx7r7vV3f5BSnPUQKy4",
  "key9": "9fWU1AcmrkUQrbQaBfkKGjsnmcRNdafiNXTFNGsTcUR98pvWh3tq32zZdtS1ZZquEHt4m4dWamf1Nvn4efg4rqy",
  "key10": "4vpfjm9sarfDQU5ozToRB7SgpiK8YM2ifw4PqFv9B3MBEnjrrwk1RG28uKXvaLYpDEtBo3TATAfmVLALmUftVoK1",
  "key11": "3MGqBby53122fAbWkwty6SVneEKANYaY43jQSV6f42VvpYzt8gbZjHAx7cbj2VvU7YoNxfUrD82QiUPhpkZahgzD",
  "key12": "5PiRN1ynEnibr8qZ4w5k1vF6F3VUFcKWMba63ywMLpFJRXBuJwvgf7c66etyyFtn2udNFKrQKsCSpmamanzznp6n",
  "key13": "4LHSCNpFhYV398NaqbnKDXNdTwEV9neS3yC8EBGZsrF2MQhDwRv6z3XGa63Y3kGghnL6HabRTNfr3yEzeh978hAd",
  "key14": "Pv6Td3oyicntTHNxzXYf5fiKAfTa9ypX5vPrqJczwzpbR7R826jxrwair91CNnjMAKij8TTc8D13HTNUSt5NXWr",
  "key15": "2LWTZaoskSLYJagujGt1Q53Vrna6tFvLpPUXJhDc8rwLKKnqtYMcPCZNY72zfbAC2F8GF3Jvb9PwJspCZV3wECk2",
  "key16": "5R2jwsdcUViFYGG8qPwkrJgNHzMBdgqyDxZhctaRCRKUCmtc5t4hPdQRQMrXoR8PSjoXQYvHJmUGuK6DfVdUGphL",
  "key17": "2rpGz5RfZA1PiHW83519m4ynJyrWc5CKEbJbjmVYLriv4sEoCGdfSNMuPeZDQ6bnPhYCPDWjZZtS4kicGDt6Zjsv",
  "key18": "2HTC1NC4siMETSJ1GhbVWeKhH7Zze6RPs86zGjEHCrM3vCyNFX7KT7172pCTDz3ArXQ6ss85qc2YsRTqCUPML8w9",
  "key19": "64NWLy7rp5iQk3xb97LrsJD8rowk1s5A8bES9coFTY2CCFUeuKLR2MmgVGHTqQycy96gKFGdQadyRFN2tH23VchG",
  "key20": "4WKbvrMBgVwk1GBbfHEvYqTw6TAH5ZDXMFozvfTXrM94Aswuh4DMxdBugjRyqVkcAFzptv7T23w1GGADPkZ664VT",
  "key21": "4PiPqDfAt4xfDvzxDVrjnMFbJB33duDStscGLcNn5Sp21q9ZoGJwWewCtc3HhB7AtbENArqcZW272srE8xN1kCBt",
  "key22": "2xG5U3uZfBAWx7roJJ98VQxEv3yR2V6ASkNADJbziLzpqNpDtYWuxrNPatzssgfatNWJqVodcTNKppV71zFFXWgM",
  "key23": "zcNJXtovpy16d6VeTZLuNAg9ugkzCHcKbtysmu4vGUkgYg59puwJf1VPtgZmEZkZMXS7QzzDMDuYFgjNR8tutiZ",
  "key24": "5v7RVB89zmVRK19vzxTBMN9xmFXJAPeFohGJ7u1EBTk6R7bJU3TnVXFGqUXrSyyESpLYb4LQCT22AFiXrcyF84H",
  "key25": "rpgqSPWG8wo7mq3RHoJoa6J4UEjtWzsrHYADiscWipfSK36ZztZLCGVvYdJCX5dRC8bqQP4C6eMxs3aiogr1Xdt",
  "key26": "5iKNmp7p7TFaKjvHixDo2qBYQizW624EbiRFMk64zzoUcS3kuqsi1cQAekF2gcyeH2yLscGJPY183zgQbqQ3zpGf",
  "key27": "5kjLN1TmiemPG6XRKdFcreXwbwWbF8n8m1Wfzwt2zXzj8ZKkjQpZ5viv3kkYH4v2QEwH3qeEehjCeyxeTJRUT5nW",
  "key28": "ucEQS4t47j8pPryDkzrrvgiFmDnJTxHjpJkJPYxw46nvBXZFcWWbbW2CS1CQUszDg2LymodNb3kxHDUaJBNmVTF",
  "key29": "5gj8eRMgVUyrrGDigdoFndxEZ8zou5hMpaqKKDSmvRsHGMChhwQ95QY2ZPP6KuzcEXJ1yP8Tg4oPT7MCmDztRLpu",
  "key30": "3EX4VVE3pV8fQ4zNCCyCATnmummeX3zCRuZnbrGxWNCZdTdj6Yokvn4xP8BbPbdLqXJDBJj5fi4f8opAfw32bC8f",
  "key31": "5a6Djxb2RcghvXfCMPs9Xo6RbUeUC2h3T7FZUWySP8Jk8WH4GLfPNgkbRfJZWCVVc8ukJKpfPJvYmu1dGRBf8y6h"
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

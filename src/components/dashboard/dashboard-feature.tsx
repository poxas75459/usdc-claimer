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
    "2C6RcEi59zTBQUJDZ9Wv4g1TSXATUvnFUstv7xmiR49RejHNv6eJBteYPNNUtVfihgtQ8anbkAZEoSd47xVYcGcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41UZYcbdzXgukTHzoVGjeHwNA9CTW4UphZDQBKcy4ym2wTe8xuyjTfkrFpG4D7Ag4ygDqT9Kb7Zt65CLyVDpCCJb",
  "key1": "4k3HJGU7rQ4BuNmf4AXgSX4KeZCMTFfaQszqpXzWmoP6MiHje4BwxMBFdyGZabFVotPiAFbcJwSqDyB2nadwhrF5",
  "key2": "2uJWWEZfPdCEFwMx1coa94bxhsqzRWcuAtezdBuz8zFU8PHS3FkUwCXXQ8Yv4oobp7eui8jSxG8sBXmUusTzDP3V",
  "key3": "3KQCcMxqEgb3C9XSMeevnPYE5NWqf9uENNhMqw5S52aC31tvBxaKb4wTGBvcvixgTsKKBEXr4oTrzX9o7iY4oaWN",
  "key4": "5tbu1qbvcP34B4L8eaHSSiR16XiGZx2p2oXJhRxgf6onKNak7inRYJdFsrbHqGNGM2DvMNX7RzXfxMLuouBtA5Pu",
  "key5": "2dXMA1Y7w8ar7quFAzPsnfK8nsst37DQHdBcvorD6bkAduZ2HXJcqrwV3sm4pxRfRqwqyPdi15LK3PWfPzQXaHiH",
  "key6": "4gCNfLYNAsb4kwxpgj5PKbsqCq23Jnymz2H38C3Sa6gK8i3L93xPRSwXH6vnB61DuAqFgcT3QzuwJsUtdvw2dKGF",
  "key7": "3GxAZNNZmxsFsP76K22LpmLnJECaTJ2P6MTs1sXGq37qtq5TsipwDRNLrfgCqwEnYZJs9h6nHr1xmzyvGAKgDdbm",
  "key8": "3BRMj7hmgRGJPDNhiHcKJj4oF5PVqX7DKs3qS2s4sX9yjjFCFoWyoMkBVMAduEYScJ6X379Prs3YBSsGMBMzPV2x",
  "key9": "62TZyQerzKK37T6xiRuRcn5tdoTHcFAbhZRq5tRVpPm5VtH4utRe5AKjPWW16RKsomw5v1nE48X3BtDv3K92E3jH",
  "key10": "2rmXK9DMcprFjsAv3VFeBjkdGAopA7vyyUagJRFjoJqJ3sinphrdQp1SQaaDGUZCH58duzY4hRPAXYafTLuuQB8F",
  "key11": "4GPkHi24XUs6b4SGZhrgh6812wCa1vGbbqnBrZ5SPq19YcWbvRrBBbCQNWx87dZegNnvp61nFAvvpRFrQ2oN7K5v",
  "key12": "3jxc3hjh3sEZZSPxsnDxidD9djEjmbPg52LPUitB38qRAHS5pLZe8VBHvTUu4EEmzQzFMv15nhLTAhgNHQ5vzB8h",
  "key13": "4ZJhHjJUrQx3BFiqcsuYP3rAAsVXWZ2rcsyQaCg27AjEhydonJuPXH7oWJgxr1oe3MivCipVd8jeR2nur6GdDjzM",
  "key14": "2ZnCZyrXcPCg6kkRGP1K44LA1HNfr9ibFa7Ek6a1ntzHENf9ELH4xieoJszWH2y4eHJ17y6UAVwMYHZ659gYdNqr",
  "key15": "22D6XMca78pqixW1Krsjr2qXXWh1X4nUvTB61be86KQnJP5cHpUH8HwUwix1jjSiXTtHdwtE5D4h9Smv6CRAnWd8",
  "key16": "V3H81e5Vu8P9LmgRj4hX7BDbNozPbdhr8ViUNh9t1Y9LF931jAaKNp4kGPZJmV5DmGUU247FrzuckxLfEXWSHcV",
  "key17": "3f1WuLeC1fHhFp7hFw3JBZPh6KFZ7wC7j7pGqf15rPZBuzjy1KB7iADC5RSzf6jckbLjyvf6ZeE9QzHwfZnw9gHd",
  "key18": "2ZBdkjjCufQc5mjufgjbC2HNDhW3voQknbBETLaphzsqJBYCLFjFMJdDiVaLS3FxsTbEnKpcoAZVoGNuDFtxhPs7",
  "key19": "4mxBP4bhBVu4jJDpFiD8QVQSrTMDAi2bgXo2uF14f4weAtGo5x5cBqJx67CxAePDTUH4E4kphDgTZLqrayV4sLAw",
  "key20": "4Y6kSC1fvNi7EazF5BYANRjJFukZHr849xGfBScZ9Qs7GjraX8SXaKKk7gCrYWoMwYtRz3DLQscJUXoSnuinNbrB",
  "key21": "62fXGeGhUZ2cxRJre4ZhNJ71fthZ32BMyDH4tQCdgSXs8wJWNj5yHJvaCXysvcpb5XqxnuWGnyYyXgPsVRWpQmcy",
  "key22": "5cxG11Rv9yqZtNM9dijLcuq68uNkEHihVxNXUrb511oSNDSqmrvpVxqTveueDTh4nrZvno4D1yiY579kgRLiJ8Cq",
  "key23": "57uSNzmcXffq3k6jxJoXcZTWDFQT17oi7HuudGaaEuxVRFur6MF2e1pkMUQwhAEwvKLjtEjffgFcAWKQbXPc7BKu",
  "key24": "3p446sEcWTCnzyVsZ42F2mg8MjB4ahfuL6BBCGBjBYwMETND8nxp8E7WoWhr6kojAcMyFpn57vGn9CRL7i1xq89N",
  "key25": "4LE2HdNPrFA7RQnBXSuztJGrGgWC7bkyQW3a2drLZ7BPScnQJJX7GG2EDWFzyxyHxriu3AcqnasrbZZhwEc42NzN",
  "key26": "58FpHxXSfFX7JrDvtGkRFMqTKzat42NQ5CLbnVPCH22Yu3yXN5FXwuWufHwaa2f7fhEf71e1D6hqx2NxmSL94tLT",
  "key27": "2rJaU4zBRRv3aAB5r9d22DZiP7p8bP5iRJSonNttDVS1f65ZaoYb8Bu3vNn6ZqH3svXPgKynKNCUZk3eELcJxnhX",
  "key28": "3qnXvKrnCHjCujveZJctWGqy14U5LRBPAwyeVo7mj7J4riQ7Qvfq1QNLhXqP5BDzt2S9jYAHX2xVEVNvBUgKgRCB",
  "key29": "rbcAzrWPWwfqfpurxhoDEYrqxMwvHK23fGs16vNpoAAafj2XqeLf7tvMC2tdtS414MqWa3fh9ok29DUw1ejzLhi",
  "key30": "2veFk5mZt2EZiTvm1ij2efByuQFEmiSxwgVgLM7j7BXijWiSdtwfyAUEH9QrPkGiu8efbTs8wq3nEgNgCCq9AjV4",
  "key31": "kE99GNneJg7o3HFXGPnGuCMN1vKbVaS5gWE4ge33ivXGdeoLNRfTDcEqRY35HRKCsfxQsNWaavvaVvYojNRe2tx",
  "key32": "VT3dE2JaRuRAgFrfHg4enLUHyWctWA5BDG1ieqsj5K81LUojU57V9NNPGGESZUrBpaDvJQAtG1vgUbCGWVZPEZx"
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

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
    "4UnmDiiBPZUJmGHtnMkFsFEUT5MwXmtCQuap2U4KaLXjck2H8VHz6Jd5nWjrLWxUSPXkvJmTF4tgQuttBLRiNLB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DqD5rDc6idf4C2x1xnHL3VuxNdTnSbjSmj5LdPQZp7o2PmEwivZNJBKt8XEEu1xctMzFXLQLKcLLpnZCecA3xEe",
  "key1": "3VU6FV34QJTHXRHsEJ5oSbXQsx9KasMB5qFfbi58sJg2peiemBS2HtcRJdMdZP2F9ykk7vEViHPSu1KYdFUtokAF",
  "key2": "3XRe6EPCX5cDaXyyRuiNkKkgcJTCDZcYJkK2odFL6KTTcpP4m1dV4PPB4NpEotng3G3wbcWWRqroPUcmxswsnRfx",
  "key3": "3cQU55st2YX8FWAMRFTRWDUq9pCX1zy1CeAKpANtCikYmePHd8WVfd8bsxdvsKa8dk8bx41o2asEc9ubvwqYY5so",
  "key4": "4za5AxYmvN1Z9juGpSinxTTFXFUpsQkvCLy8Tbr67UAUo3xMFpaT1oxQXiA5VhLZfxNqkm2VfbLTXK369hNXf7iw",
  "key5": "SETbsWKh5h7uTuHiWXAcEQ4668TECHv8WRJjUYuieUQpaEPPzLJs8XSTzqaJpNCDjE34Swm9VMaxckFLpAVzpyk",
  "key6": "3jfsZCur9h6ipCS5PnrpFxe4NDjSbzrhcPDvZEaW8BqeJsn5TkqgECErdyvX6XjNdWpWCTmfXRHELLjVB9gct2k8",
  "key7": "2pgBSppkex5ywXMTTmHY3pjgb8QWLSSnUwGVastCyXihEpTcFeZF1dYNAzweewVmT1u79zw4oRgvZXLygYA9NYEn",
  "key8": "kFTdLFtxKkoeg6L2pwuMsPNkDSZdt8HPXN5KYMpbKGohuVsTjyujQ7tXrJ7PAaGsC9XUyRVjkWN6Keqv1jGfVpH",
  "key9": "52Fj5xgMfxXDthx88cSkkyYkgJGD99L8nAgyvhVKucrFYArqAzzgExQP3QgcM3EWaWxiUtGQ2kCCxHXxCkEsMDnG",
  "key10": "4WdkMzBW7VMwESipkVwMrcQmCwyLe1CQwBMQM5k2YJ5ZJEJPd66TppuCYjpPhnU1UUdL5BqmFEGniZtVhwz9LREk",
  "key11": "3RGPYc2DQMdJYEniWkVGbSGJccW9uVGjoxCnP7D1wmU84z6jrPmQTQxbzpdMvvg5uMeeR2E9SuSSB4osNCq3oVYV",
  "key12": "LQiUPvWr9thwJW838n7FQH8s3zeWe7E3DHfPFrojjc4KWsecXSKdpPwe4xbq4UWq8Cvz8XPLYXUBmDNTyFJQwB9",
  "key13": "5yMTUrWstWWH19kGyJA9rqqAD38Zhic6UkNcVBQYuwkyg3JPiz2G1kwhRZgaDZCNc2BER69CW4qwoD6cSJi4cKc3",
  "key14": "3suooPJvxFhyrge2f2u32a2fCv6tAsYsMWL7GKbj2e5xCFQRy5Wyov6j2RnHsERdzQtKFxfTfSy2QdfY7EZiSnw9",
  "key15": "3qko9yv4CKZPUmTzzViHjbGwZz5dHe3tCaToUywQM9cjUNfABvWA4ywvw6CJeFgetcLnQ8t2EAfCEfpGNQEwfRE3",
  "key16": "5pkrT5CRiVNnuk9SfUH7KfPGL7YZBj89vEMLNvEeGtTezYxz3dRChPv5jNGZbrLtBF3zzci32HnfSQBHUa2Mp5WD",
  "key17": "HbtwGf3bH7pZHxbpWvttzKzX3jDYKYcRvnro1uCN4kdK3kCcoeNeTmXqFjMVxguxSjDDXCoSg4sHoEJVeM67osi",
  "key18": "5syDEiNZ8RjE49pZ3T34gWZpUcVVMXaLE1gJ1hPTuVGMeMXfNU8ysnnVFDxCZXyJ3pgL5FvTcBHNtHvzyupSueva",
  "key19": "5PJtTq7bDCgmDoU3QfyhSeL4LEkBxojB6DrEotdkSbyHZjbSKcGuLtAuPiRwpiouV21NEBjjSuoq4vhoyxLgehTi",
  "key20": "5qZAFmeYCADVsr8LnhRp1NxsRKebG3zBzyG9qGRdVHH7czVJi1NfzJEQEzG49APCbvJ9Dqzv7puxcaZjcnmACeMA",
  "key21": "3WZ4AmzT3SYuk9atP1NfayNSuvdZQX3Wrk1pS5pVAE8coiFwB4EBWgU6ff1TRG6FNv1hp7d7uCfPuoSrZG8unEdk",
  "key22": "3HJj7aneEsbiJBA6yZcTC7GGdezqLV6jkWDdXFiJGgZ2dKziETxqA54EbqcvjUUMDPJggWyfcEVb6uT7ZEXP2F51",
  "key23": "5QQRKS8xz5QdZMwNRh83RvBuadDrZRuoWfndRWTMXnpnFoaWBA6tWtMXD3QSsHVmP3k86gecZ2LvPHpoTJcnH4q7",
  "key24": "4exvecQQpaCMtacBHmxWkEqzmFeuqiip7sbVWUpupv45ewXYnsTjNNPR1RTcGZhGYrgb8V3Q4r1PUZCjKFVJ74mx",
  "key25": "27Ev4Zc4VTZtCBZgsSgbPD6pTbG1SkKcnNewys9ickhjA7cjxtebXWsAU8pDExaVLkkAsJyzJRPFfXYnrqHURB53",
  "key26": "5ymFKrAxquntPX7pGkUHQiL1ptbSDiSzJFueNybdfkf7pWKRR9BWsQKct6EANfwdHv8ANj2gAa6pXpEJYNjw9hpm",
  "key27": "4XwxLVRAPsDcJRFAeP6Pd8ciTpQYY4TwoWCxDfcXQCaHRFpck1mt9WLoiVZhqpV2inu116SkxrgTQPmDbtsEJoTz",
  "key28": "3wvZmGaHQUmfRVnkTAXhqDvBDqXXva7KytcJhfhEr54vgw8m3tDCeShzcL1Qm476sepFqquwRbQEHZnijHs8tip1",
  "key29": "4woBVsHPgkrJumj2PUovywyXFwSu6u5HKo3ehPHgAs1VSoT84eHzKjdSsZFcHU8nRe1DjspFnymeq6yf74Dubtku",
  "key30": "3K36RXWirF8Do34kepEq1i4gtUNUUcAp4HhEoULF4kHM5MRRmJreu5Gxjn1m6mdshHNLES2AhkDBDB1p5qufrM8K",
  "key31": "4Kb1iobbf2GYKALyH4JrMBRLScGHM7MGFG8eTt1t6LwafcZytCMKFE3aBeUhuD2k9tX8p6DUawVR5kJVCw6MKnpX",
  "key32": "43TL2DsZyBKHKxginBEphZmA66CxNmYLGebs6bpFk2wHJngCX4gsVHUCMicT69nYFe4GrWdDycq6K4jJ6N8QoFTY",
  "key33": "48ULnz8kzymrE55AJvWBqu5Xoc1xkrvA962FatECAtFGriKHAPCxv7ztiYj2UAQJsdboUynGsrdzN3RpbRkggqoA"
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

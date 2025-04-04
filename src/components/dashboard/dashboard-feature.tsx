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
    "421ABk32VJPt3Xyik8TQBMCRFSUiCJySXeaZeohKntRnMpfgsiTpn1Tf5wGw8BjuuTq64DpoEW6Vk21bKsRJuppJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtmWsBUC2d2uEtj6KgnwEHNwmDtRDVMubc4rbVdGE7VA31vnzESsLTuSA1Tq6AcvHqz37AUGQH3iS5NqMYLuHV2",
  "key1": "5dLBDSHrsfB1vU4DSLs4Peidqbe58Uy2Qc9pnGKGAiL96KvpLjP8QkcgXWvmjReL5S3aU9i5YHMCPbop5CQ8WZm7",
  "key2": "46QxRmf89AphEF9M5oRaMXxT9MrSwPjZYtdSnEcJhqJEo91yRoy2E4bQZjcqcoUnMcqPx7js9Sutmngwv5BJTdeo",
  "key3": "bkoq3eVLPiQ1Hbr24ozFBkk8ok6UKF2uw7aGuUyMCfZcCwzMiTwbwZNxPL82NVN1Du6jYG6dqQFqm15CnzXA952",
  "key4": "5ZN3a2sbGDidy4uHZaxLffDdS45M1M72R4nS3n3N5K4JfDiWLUfKVANrCAHQUWCWTPaTNN16q91UF1sHaRtx6h93",
  "key5": "4Zt4c11GV4pWVKkCWJMbFSGU5HTBHU6H2heWAVTvcpqPFJ7qESXAGNtk3DSgdYcRzaiEvdVfJWeMaqCaFa8Jbju6",
  "key6": "25VmuHkXuvFkGwQqzbaTjPp4HfegCB6zHgh6xp5q6Tbw2QPpGf9BLHuDX2wNHxDtWvxAWobEURepZQ1JaqJpaGbn",
  "key7": "4ozGKNpiqDUmNcX1AVxc1hbTYvFiBm5qxjdMVGk8aH64V1MxMtHvN8Dt1D9ePhkJnD9XCos2kJt4C4GYe36cy6R7",
  "key8": "3RQHWZxZ4VZan2DH8xVGCwHxMxBJe6riXLfy5RXpR39aWPx9vs6GZX93fqKgZY8C2Wztx4z8hhncxneKHwfMyb7N",
  "key9": "4gP7PLvhxiRHPDJrLyVegqyQAjDFoWNXTqYBnNoN6jFs8aVxf9pdA2b32cM6gQMb8RiBeywyo3iKdPQrb1vU96C3",
  "key10": "4FrVpyP33WSd1CK6yv7iY1aFZeVti7Cx6vyq6qepgvG5r61bLfLUZ94cCh475eFKLbWGtnyFq3p9yhDJcoVyz3Nf",
  "key11": "4urz4RPAhmsAAM1e3azMu3fqF23fNXsWSt2VfJshzRCfAC95ACEDHAHrM47H4LsWpNVhNpNc39EzyWDDMWKN8i1B",
  "key12": "4Cr88zCBrk6cXMxGUEMXmAiTiLTiN7mnzhKAnE9b2bRbiW8M4549KWCpLMBZNTcueBJR9LvqSXkLqoxst4L1Ze2K",
  "key13": "2Ccgixm2TuDMB3Ss2i5wB9A127911uP8XGveBKcDoXgaEwtkuNZNcBo6NTYrLTJ66JJ8MKGR5fipUKKjdKVEizDy",
  "key14": "44ZVww3aQzwv6vWsiTVUjQ4qLTNxQToYSQhqKf1f69FspiGECmsdUQAv9t9Mm387jXz2REq255TsdEinBnDVUvbd",
  "key15": "3sqjgMq968nEU9aBEPQq4UMVkYHrGdRZZZ559uoMoYoKDf77ZZF22b76ostdS5nV9hddmC1c6Zp7Zh2uudwfLb7B",
  "key16": "5K2dsJCfJ9rXApJPAcnBsGkcd3zYRSoqiuoqtyNmkpA2xp4MdtJaXwLBZHwABSEZ7vbrpUHZMVKmyYRzQco1SBqE",
  "key17": "48QTUgSFaBhbh3KRp1xqe6WJHKGe5vfUA1oLpGW86H9L5smPzpQuEFr9B1hpEeNF3spSgs3e679y2LBWNq25fqUp",
  "key18": "2upWffKSNDivcXr7mXRYjD5GdPjMwFk6A4Kmi893JFKWef4aiCTDdKQT35PZx1sR18Z49i4d7YZPuDZfcYpZzf5k",
  "key19": "54TCk6zUZY41As2xnQDYtxCiqhYvP2iyBLR8KpnCtaYHGeLpQTpuVDHhSmevrPS2Rzz9Dn1KNjFPJJ8wJLdpTSxK",
  "key20": "4gHYtgmQBx8f7u1yDinS5YyiUvrDFF53otTLMyMJv8wVXRZZNp7MNdPgiodDMeEUuHnX3yrgjxZjorxQf1xG9Hh",
  "key21": "4VGCGLB9SkdoYVB6PwPnRiGshMUZ9m5qR8z5dDFUq7Bgn9rQKux2ew3AyQNM6qzjsHiLfgDHSGFun9pd2atuVrnD",
  "key22": "39cyDJf4SS4tSAX6N45HpgJet4WzpAuDg2zBrSnzmkLbizztBr81TjThpArdRRhx8VrTAwtCR6CaoeZqAEvB7hPD",
  "key23": "3nMkS3r7CkrAx91zeKx45UaXTZ2xfT9BFvdiPsH5braGQLa9jwr5Qd1s3D4nP381CsZ55ccviVVcJYbRbFjMARtr",
  "key24": "5gMvMbRnnrNwmnsa9vZTVihjjLfKQBW6oE6xxNBFMkT3H96CqfXaLtT8ynbmnWCF38tmTkgoYXS9iTRWWWdCTVwc",
  "key25": "2g3Ty5qJQMsFt59EBTRuhHCPHtoVCWjrrcHHJ4y4d93DohTmGZL2t5GP4p5GYhjxAuLyNFjqTCnTk4gu3ZcH5SrS",
  "key26": "58xyTfWHvv5CqCxU4foWLsEQbA6UaRQXtwVJZmV59DUv6yVRmDXAAAjzN4dqMG95ZXgMqxD89Giioh3Vkq3Gngzd",
  "key27": "3Lh8APVnt2pMc1nEmT3PxJKn1C7AQV2oHdFGEWYWtHvjChupGttTriNQyDdLzkPg3UEGigaAQM7mdc1FXk6ofwHV",
  "key28": "fpJZCQkiwtrNvk5B6G9yFkEzB67dM6bdwqgnMNiY9XhNB3G3QaJC6uJ8gnWPos9XVLcB8PedirM8o6MEXveydR4",
  "key29": "jQcn1F9skCUbsY1HHk77YhxDq9Gq4Bxrp6EofbbiFkHomidPeUbw7Fr5hgmhG63SBmSAXdAm4UpUKfHG4Wq8Ls9",
  "key30": "4JZUkZdfqHUfGrspezsxQwvhj6uzPP5dNz4r9dHWMMC7YDKqt32GXLfXRcVuJjSmBZRWjsEUQ7kWAgE6ECQJZZ65"
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

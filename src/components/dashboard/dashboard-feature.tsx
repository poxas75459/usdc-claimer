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
    "4JiQLYLNBeDm5dLFSNw23Mqd3rQedrttWpaVPyoZvsQFCL5qE258GWw3Wq7GsT2M8vpmnUtbRKPVFwfg79LTUDYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ysJax43gyPRi2WGPxRPAaZsyGn2wLTM8iEetNmzuacS2Lh9jG2Uae9dgpSrG2Ae8k2U64jcCHSbj2kiJZ63MMFB",
  "key1": "NrZsiekrXKoG1vhBJCJazZk7nVqBNCyAtSeNcpCks74bDCozAvWvVG1vXSS3V2rgaf8m3Xh8tZdYRUDgBbXZ9Hu",
  "key2": "2P8GcWFQEivoRWmnToZgiat9x5eYXbXtam4cV6d6yMP9L6CJwaU15Xb2P9oVhxtYEnqt5SqPo5KJ3EoLKqYSUxyC",
  "key3": "4exAM2i52cxwHiyhFu8P9zcmz1vfaHDkxEawVfmRyg3RtD9dy9uh5UovJ57uGV6MTFWBu3dBgj7BYTFCwZ3t3c4Z",
  "key4": "4K8qnThELu8TdGwnbtDDeKbJE6477QvkZGmYcRAhxWcVHbwzzYaZTFj174sqXMmreZTJmuDDXFMHKZGYe63wqszU",
  "key5": "3BVZJM2jBBRTxykHRUjw6w5MsiL1vryBVyQzRzyd2ApUQJQQqKxCSUqKja6uRzpPs4P38SettmXBLNDczyC37NoJ",
  "key6": "ymR1YpeddxAjcHyBNJvQct1ED8CdFXAeANSbyH53E2xByNDczjrkhWGmmD6zRSWZ7QFE5eQFooWDXaLcseCpVsW",
  "key7": "5HpsbNaZ8p7UwYPJXBhtv9PvAA7WBRusq7ppyDZsZ8KaQLruzucBCREWepYaoDFetHFH37gPowvy9aquia8GHe2J",
  "key8": "5rSuGsHo4CiXU4xGu69BZaBUjZbECK87V8nfdHGkANDDuboprTABybnnokriptWaFHqxpATcjVYcZn4PJEv1ekLk",
  "key9": "3xzVjigBAKHeZrv43kCW7WEn3LmKgH2re76kpuYsAWVTar1RdvJLYu6j7dxih5fU1uvsGRCgH5PsZMDH9rVGVLWJ",
  "key10": "5xYMhnhJqs1NMN4cGH9Q5QhE6pncXjAJZ2XDPC4ccuRnXzC2LfLtdXVnUKS1ayGGvugh87Ax6zRS7bo4PyKMaajk",
  "key11": "pme6LWXzEmeKgMNxsKvvnWz6NTWQzWvb6M22FD8ZLEKNTxH1yB2i7uqDqfcct1Kg1s487nKNLPP7tSYaEvovkKG",
  "key12": "3AhCSMtZE4xo3eUWm6gzevhsffVT5uEFBLeZPBgpYXTh6meCtTJkDMUNt4ejB4gLS4DVF2n9yBbZw22CE9NtVWQS",
  "key13": "2vP6aduqEJvyWeB5d6JXs3Ugsx5Frk9uysk67JCEMKBuqdkX2qcQx1No1Aq4GR95omn3A9cgp63aDicpkZa5ZggV",
  "key14": "2yuaLchj1roPCceijsbk5CF8fT6NxTHrm1yH4nuNssFsgQLmRfrm7YiQqTcYKSkA6n2VedL1ea43JcXhfSdZs2P4",
  "key15": "5KvY89s9GmZG36hbm9VjLEkYtDvkTTxK58Nf2pXqfv7MTvj2VQhdGHNLRbQGL2vSwFGnBE165zN3b5V8X2b7EpY3",
  "key16": "4dq1purCASQVa1uB8DFCBynPAH3LJYJcmQ32c9Pk53nAMXbJd5uiNTgzUv1kJsiSLse5Ajq9mc1dm3aSWgoauMod",
  "key17": "5rQnGHkaEsnuYVHovX4cqKzHK3fSVnV8r3wdRbXsDvpD38iiXSY7vBiC2wXUFfPNaMegPWCUWctpT6FAhNxCDj78",
  "key18": "3X5sDjnkPsFZpMQwAS7XGjcwBj2rxyb16VLk13jiy6GVW4wyHZ95gm3eMCnd2k6AqXb9xgkPciJBsea5t8tGMyND",
  "key19": "3WPZ6AabA8nGjX5kPuZqAMzJ7DmVx1zKu6GtEapc1D6o9dco8A6NtJbdNn347mwMjr937vDKqUPeFMd7bzKQ3wxa",
  "key20": "4aqAsEdrsEHqbqbCx81hdWevBkmGrvMioE4qRvSKC8pMCDPVfjC1yT2opbHB66rqTL7HkM7AFSkhnLDcw3hs1Aoo",
  "key21": "q5bRn3rDYgjk3QD6XkvaLpWZa7DRZtK4ffBfX1XYb2PXsjd2KipN9Pa9tPhV1jPmURPC4V8NDeznELi24jgHUQk",
  "key22": "5xBEJbeEVP1DFj9MCkQEyVZw2jqAGWjXFsRfkR2UM54LfMy7qurSbRaH7r7YEeMg3uBKQ7f845Za6zgj7A5rE436",
  "key23": "3PKfrJYQFyJfRXyAQWpDG96RDKZHiwDAzutu1Qer4DcpWrXYdsWoEe4pBEDBUZPopohyQA8DrqwEQyQiwKyE4KL7",
  "key24": "2WgXNyM9VV4V9n9TFTjVTqZ1dJiKF6PNqo1AyuF6hj8ataXEteA7JMprabSrXb5gPkJcCg27unMoiE4eTavVajHr",
  "key25": "5F3A2aQj6QqFxxCpyJQpXBRT8Y5HothQ59VAbex8skC2QTfx3NQzAXDrotmWSdXVsSXUmbjUK1L9wqgxzdxCgaim",
  "key26": "eEhPSQbxyjypt5Sd9r7B8KP22gn6KZzLpLrAe3kv95sqsoJQJBFEBv9HXUwdTy2QtVwH1SjSsMF7k1V9kFa7zWv",
  "key27": "qiaoVvHS91xtFzaxQ8WLXcqc6yMiX5C7yM76sTNxmKmpgSGfKFKMAC7css4ZbJN841gH4WfmW5FjneWCdpXqZcx",
  "key28": "3gSFmTigFNhzWBJehCghTZVomotgkixbGDDttPAf6wLuwTFiLnWiwjrx1x7GZ6ZQMMSntkSx4MNMmgtn2RDQdj8X",
  "key29": "56yEDAimLyAbq6aEu3x37VpyxrHNdgXc5SE2gta79z4MLjh1aYnZes6YvXNbzPGBd1VqcTjvAmoTSuK3HVmmNQky",
  "key30": "PYUgbrWNiFsm9umMfW9CXjsHeK2QeCVjE65SFsPhqKS3h5TEavVaj492SDmkZaZGKH1auzRrgJD1DXfXBwQq4QG",
  "key31": "5FbR747njbZPcAAc9wjLnkepXoQww9NzN79XE6GgHnGyr7h45cemZhGFS86KCYYYUgMfWi9ZpbsZvbQ8g537Kv3U",
  "key32": "e4ixEbqCvQdbT9aAoxAhU6aFgbin6GrUJzpAEB2YGcLYDXAFNAXVB5Jf2MGoBWEcpKWPNrgjVK9jr7LqZzCwvhW",
  "key33": "46LBqscPRgNeoeCyocbHdg6pduvzyPBbKiuHADpZ9ZBD8CkkctzqU1Hr88NnqRb8EfnVufx3aD5AWWqQRxufd6V1",
  "key34": "63AwjcLVizZiDn8E4kBZAX4NUphdZr38mbTEZLTxAWcuiTT2wjCpFR7T5QRDRQLQTcKEQaCfowZbQdSUSe72D9hw",
  "key35": "2peHPn3yyMrmS6kUtLDj6Dkoe61UeYwUxeRipR2YqTnRYFReGRsPYJbMDfxH7ZK79bE29RY3uCGys92r5nEokJEN",
  "key36": "xeu1fyfT4ETEVB2z5zfXd3FH3Z7oY6KixADtYdxGKhar2NFpjt1ynxymP3PQqwqhqCpV1Cx1sbg4viiV27fdAWu",
  "key37": "5GKsdD4DV2LVbZd1tbqjBy3c9dyUt3RHg1R8jgNRXkVk3kgqTQNhewsmDvLFTMheMrA2ajpXU9rcJ5fjN8D8kBRd",
  "key38": "5eCqmpan6XoS9K9RLdzR6rsiZjkXJtD3GSzirz9xfHChsouNoNzwySbWXFinVYHaUQYMKWL76fSGYKDu4DwAYrFa",
  "key39": "5Fh1i5qixHtiMxVhe5QSujUFLWHgB5iYeWWmKJT7LXFNN817AkXrcWp6XS238XNnf1U9U9B81RWZDVV9paX6JFvF",
  "key40": "45sbRPB6HYkqUJQpA3uetbmMjXdH8Z7sQcYygERRfsugSo9jHNSt8nSk3NvLrNyREooW68imPgJj7EPsgMck7MPi",
  "key41": "22puryemkxestvuh1ezfevevZ1gRKw1CXXfpBSWUVLK56YLLA3WTQcDfGxKm1ZT48HN3rvWvHL1arwkzLDFswb28",
  "key42": "54JvcBta4eMiMofFHFt2G4hhbrcQyNKM9D7uCtzfkbx6ighBkKCk45f2sCv1Lhgmt5DvjHyxWEfyLwSUe8SP7QBJ",
  "key43": "5svj3Go6SpLEwYAQAFcZyLdvsMTmd8TxK5RnG3G2aodbGmoLonkLN76CmSAP5ZSmxgAdtW7F4M8fcKhvy7fQ4LnH",
  "key44": "wtaAsk2occY5GZZEgHVrwqt1cigYYj7d1k97zosHnJgT4vD8ZAMbVhDY4gqnj7zBggUZyTd9DNSzAQTgQjjxwp8"
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

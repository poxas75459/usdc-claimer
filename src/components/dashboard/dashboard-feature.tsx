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
    "muEE1u3uNxrW1AUjxrsEd2HeHAqJb7sBWVdYh6SfooyXU4JSLHeTC2GPDf6AS75RtGKNfqTs5uoeP5ffj2HVys4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wehoKXiVqawWU7YZABQuMihA1zbK9CGkRsEnNtqbYL9YamjT36k7RbQZ4uPfWZ3ApiUchPxxAt2mAtoGYJeJfLd",
  "key1": "5C5pTg2PVpDPXE5Y1u4E1uAeg2GMaJDsTU6Kz4s4d343C5qt8LWTszKkaLXQ2YVWX9RtzUKsywdociFBrW6ku8nf",
  "key2": "8cckuf43DkNtK4t5JZNom3wRsckwPWE5m8VYsavEaK4nfYdd24MwA1EGQWVKfqjKGqGXtD8rNT9kiu3VSFQqBxf",
  "key3": "5aiALqboBx357gcbMNVreuNz9BNJchBR9QqWzev4LRxeSWxZG4uFK9qkgu1C1ErugSxS9JuECrHNJ11ZWYkWSmuJ",
  "key4": "41eiZ87AguytHh1E4VzVvQSfenj58n8qQjVqmqLM5xaeuwgQGWZPV2L9CUpwP8b2persaqafLjNXbdNK7V5mhpGE",
  "key5": "3qAr7iLMG78i4WKvy3EzoYAnEmnypsgm2yatWejPAtAXeqYFH9iWCVLufLPVTBj38hR8WV4zCHN1dz1sZvXrNWgc",
  "key6": "3gecpXpDck2ev5iV7mnFRe5H5tygsKSseper8bXdu2X5LairmimeyW88qmaQcrpXEDrTDLdeH6LN54FerfFCtaKz",
  "key7": "4WDVzguYoPmbFZ1hrqvDmdS2zySZ4rvqWFWL2aWHgGudmLtxzTQR5Yao8tsekVg42AXYpJe7cXpamWB2QwFZ4RoD",
  "key8": "5dq4cfZciaz1hiSyKTPG5p1Uvdwo83P6wTR9btcjbzYoPoXWPAkeNJS7Vbba1UaYexhnmecC5heBKevGur5qfYwT",
  "key9": "rv3QbaCMXPMG15DSEs3jSKnxuJsHZTetu3uk4HnV6spxED3jFQZdKW2dHqJyRMPhqqtHcKrgWv4UtZdKKvnSSxS",
  "key10": "2ayFdezRg7xTatM4QVTSMPnyCKnqc5bs9Rqjt398V4Jfp2o5vXP6xZZctE9Z5NLLuzyd3R9H9ciBE1dcy1qg2Ycs",
  "key11": "3FjzDkM9JaVk3EAsqkWNRpse69JyaqKppf7tHuqgmk6isZzFdatdaVxMxQdWCbmDDQAuDPr3WkWZJQcHEepKe9pJ",
  "key12": "48tgSE6bywfboXUESnK4Vhxh54x7npYJTp8keivQqY5Nzi148Z9Q71Vah25wx9jxr7zH7JHHAMpUxTbFXMaw1z9f",
  "key13": "4JhBsYRuVqGoq14zJ5XQKdKsmpPJrSnucACx8QRHfcvupukbC9YaQ4REv7dQjRU4aRo1hVUd8c8hrqBi9h8vXQf4",
  "key14": "5wZLNQm3psnvjvxd8hjwEQqpNmdjYAvDeEt3JCbFcba38xLH7uSsDdC5hCfHUPbEdgdh26FFXykD1c8RHVU4U8oN",
  "key15": "2ih7ravifm1kD2AXvdbGxXZSwmwwqy7mdKX1Ek1FhWnSGDu9Aj1iAjSigA8i9sQWaTihiLXxtNEpJSLqdGasUNhy",
  "key16": "3GqVjU6CqV1Ep676AXTJnhdS9DRNsNGoop399VSrz7qysZcT34EGBnBUtFzAidPvPe2JyTjXLziuEZnsp6v6kGgn",
  "key17": "37sT3iW3CgGyfE7Rnh4J9XJqq463oK3ieAFejNzpLb5JisSVHBNSmHiKPVC3HAK6PwEht8mCTS4DMyUAVLDbSpnd",
  "key18": "2YWZobWrb7sPuPaeeUmiGC7mAJJBLvGPswjE4b4k4EgRxm78owcMrcrbwonfuB29fX99LzStqjdGHhKoWxs3Hrc6",
  "key19": "2Xd6wH5Z6i4iUa9Etn7Cd7fNWXr1Rs2auTLW4keEmdotzZiuMguE5shNAhxDT3Q3QR6Ft3YgRgNSPq7uWpKLKrGM",
  "key20": "4yY58sdvXmvx4KUstKrb8XUee4nzZfrurJW3gRTts5Z4NEM4jDSdjxSRXZMr52KaG8eStrVmKcvSb9aNF5C61VFy",
  "key21": "27Sj8fWuiH4RjHG9kVSqJTWXvHzkK73TUqw3HELTB8RpMiPoAB9h6aWa4LDWPsKX2DveNtaQUNChG1PUTAFB9dnG",
  "key22": "C7SSc34YKqGAhoG2jBNcJmQX1VmZM5XWPetvi4gFDx9SP9zYdbLT4bqjWGWknmEGhSVDzF7K2uEjraTKoKnd6MB",
  "key23": "4rmN2Q7pBYwpA3bP9GUXgbUYHxWcigTvuatSbJqdziGXJAMtx299aNbr6Ak6WdF2Tb4zXD4bkPe3sX4FZrLWvaTY",
  "key24": "5iMRCmviq9GsSrYAUWJWivPuthzJ411zUvFVDsNfCbzge4UhPJhGNnoHpJNHgcCa9owKedMCcGBu7vXB7snQoHky",
  "key25": "3LyCXfkvHhPKEwvzqqE32PGA8iqhqMn79vLTDZ6PXe11C9iBgxWj8AHAq7DMCjdUrfKY6853G9j91wuQBn2mzgXG",
  "key26": "PLEtQsu5Fj9CU47o83CBcZqNSW3fFhF9RGsMm73cSwkkb1bKkjewwhpLHYrMmMhpeppbRFK1s6Cf2q2GqTTBgaP",
  "key27": "3cKas4esckGrV8J2uiTTUeWXLGrSENJPShks8FFLBjVoPenzpdYHYwg42FkiztbX3hbJFKY1EkFn7sVDXZYA6vqC",
  "key28": "AsZ7vkZmgD81gxrimDEuLZB5R2yEf5MaAijjKLLWoMXn6FuozicJbAeMygvzemzozULLmSyzjLwzqybTjnpJQ8T",
  "key29": "3MSELCHpP9HeuoRp49YbR2m9dwjqmG3H6UBR49MaqxHXA9DfAnTTK1kAERdKevseWr8rAU6kgGseDaWncNNgNff7",
  "key30": "3dZTWKqAcrxzKLFtyUTPabs26FU5dXhbD7S8LW6aH1781iMfcPr51w1nWgSd5HvrQnT7kYpqDfpgdDFhSKJm9NU6",
  "key31": "5fB4dZFyLmXQJBuqy2VYnC97mNYzLa2mbUyot26YtMGJ6YXTv6ucHtYM4utbcHi9KUiZ89dSEM4484eZ2At8zeiz",
  "key32": "2iUyiyzG2p6avStdFmuRV7cRofS85aRLWZvtofuYSp4RjGaGstVbn2jmXWWCxsmSUEmSC5yNMHjJqF1KvM14mD8y",
  "key33": "KiG4S7p86aHDQYUi7QssxAYWcEGGZ5TwXGNejBPfBSrNT2FSfP79oiDqy52vGPrToBsr3w5GHgjXsra38FJ2umP",
  "key34": "3NR7vZoyhTnen9ivnUWgkpDjA6Mk9BMShfe5b1F95KCa59K2heHhCWeyn6tD2anwo69yZ3TCeGkT1C5URUS6hZ3m"
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

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
    "jP8weMBPE8LKe9Lkb2zs7FpaPRUtBS8RiERfoEizeyEEDK4t9wZ5xfkx5kru3Bwx5dja7t5Yfw4GhWghmhbSVG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NQqY6nnEhG8nCen1ZuQuc9XwjgMzzKo3FRSQstvxX1TiwtYUinphQRxwgyUbkGdh5UGf3XQMmfTo8eScCcmqGio",
  "key1": "2m4uvauAhN1F5cD2PEJJtrE9gHzVxegJicGCU9QgiJ5rFjLDZg1awdJe88Gr4Q9ZmtuvJE89DKu7Mj4hjFU1Z4ys",
  "key2": "41DRE9ioWeuCS6sg5qw2AygaBqLofgMLM9eyjKqARtkSKWLXns6faJfSwqyXAb9nHQqfvmMLHqGBB46k6YU4NAwV",
  "key3": "57c2Vp8Egah2C9jcbjWXMw3XxTz7PfvcZZDUkwNuozEvHQUDBJpaTADm2v2cubgYCyPqTe4XkYsy56r3MFJKVohq",
  "key4": "VtPyWC6Q72F19tPgMPHYCWMZ7m9MPeaXv7GUN5JyHF3HBjppM6uM6w4cvVqwcXiLw8kDVL9b9DUbXdo5ziAGg5p",
  "key5": "4ncrBM5ow1dgnBMUqB3NZhiChqJAHUJGikg6n2G2vq1hpDorVoLaqoZ8Bg9s1wzwtkAVxsdATCW3EgbQWkf6zoxz",
  "key6": "5KKdvKwYeHQ4zuUfumyMuhLRExFmry43HWdw71PkZVCXRrpwoVPcHoad4zcvbnwV3ySuQ7VtD7fzwu9wbxtdtoh",
  "key7": "4g8yPZDoKYFNy2gSK3by1ZCD4KwuYxcMyXwvzvcSMSVqeSpN9Z14aL7p1EqXY4aV1UMDUCLjZrvW4v6NfAM8m5zX",
  "key8": "2UHtiBiKCvxWjeLt3Z5Fx6coAXwNQn8fcC16driyEjoDthHeJxTZdWA9fngyWiua9u4o5P8PwgiBBJ4bHCPZbiyu",
  "key9": "5sEQSFnmrFtMoVbnHYBcd1euyMiL9tMpTbmAYUDv9jdddieTZyWQbfWwQaYaGyLnYzpJWoGmKdjCHrbCHQ98Gpa6",
  "key10": "48vX1wQn5ZV7M8qN5ZPNobAkL8vNhRsKCNdsrP9ENRBhQFfkqD37TN4fuYKhCekECusV6Qs3AUumJdG2pbNKmtpg",
  "key11": "3ejSa9BoRj3tZvfFmihqQfDhapBLJBCbbv4GLtV9BK71xGaUv49619DY9RQ2wnBZkmExuF8TCHPjJynDTwNvFCo2",
  "key12": "FAfMpeictMcgwCdTgnizszhyp5PWfpctNFtfA8Pug8Mvg3r3cQysUX4PjA6xXRFBhtpbodLnW16kkJjbtJWzmyn",
  "key13": "4a3p32W5Fm7MbQKcS7PRcitVbdd3Uqf44Gpom4zSFCiBz6idtQJk6V1XCToMGkjGk1mqmujArrXC1jeXyoGhYchx",
  "key14": "2JkDpsgi2UbHi9s4e1u4u841yahfxjSqN7pTvXhwHWaMWDLYd2uC77QreCNaFehvHgFYYw9C53EYAoe4vBt8ujWk",
  "key15": "35KNF1TC9fWWZYFQGcRjZzunJ32RT3otvKy1cs6Y5VRaYveTRLi2eNsJbra9UH6GPhozyMo5Dn1pLo7Kcj3hFWxE",
  "key16": "4UgHNUMntxXpz9bfXbLzqdvScokkbXi81QHCDhK7KXpoL7w66uwZNkbaHEX4o5S8T8utpPwmUBA74VrBMGyPwNRu",
  "key17": "27riheBPLXA3frvKQJBANRxAy4zooReGYru65TAWA3WdGeZeSjekchVyaHhgRqXb2FuJfZzrW1dnk3A8rrsr1yUa",
  "key18": "4KZJmdkx9nYBo7o1CDrWM1URRZeUMemQZmM7ZD7KGgFp1RJuXjLaWSJtzsezGMqzsr9vCRqwtCMMFNLvD4VN7ztE",
  "key19": "5UBgP4D9neYQ4T2NtBCgPsakg6k3uSK4BdzFsRnsNuCFssS6Ccx1LKcfZ2xQvLwnqsCdDvhgTndxjn5sXdhhFRqJ",
  "key20": "GcDmTCJhWAK8HYEgJJ5Au8iS4dvUMBDScBHqbvhYYwdumBgPMbdbBU6k4b7kcx5WvZQE1xsvSV4s7dz78iDZqNq",
  "key21": "4S5k1UDdZWRd5g5QKCm28kaNuiSh9bTMxDXJWJ8Nek73ftgTwqxEyJmxRXeRVFa2sMqBUttxQAkzaRciEX78DHg4",
  "key22": "5mT3mF6t5pDMeeA2gjW5waupRcaS6EJjoeVPQvwifmiijsPk9DTc4R4pgD81uir6Y5GjeTEnAUmVP8gY5og7XzbW",
  "key23": "2sytf1wgJ9pw5ETrrGr1x8Refutta9hNDofGrPMGX4rLgfQsH59eAN8RNZqsK7yRbYBVxSv9MnsP4cxFVqcXns8o",
  "key24": "5U7wE7v6NRBwdJDJaZdGq375d3rfvMqkdwmmD7S6UoHMw6CCVEfx3e8nRaFQ1x1HyCjMiiqiCV1Bm8fA4mT5s7bH",
  "key25": "3pFXajiLK1z8TBa5PLGKcf4bp32Pttwe6jSLfaD9SA9uobJoLFn3WMW8cgzbZtW94qnjz7E2BG2WNEWj4wZCgBZ6",
  "key26": "5hAKJSyLvciHsBPH1z7axaAsuM7iFanusegYRVwvbvMqfswqbGLeWSPjykpPzQRQJy9gGTCYUh879cbi1MzJCRo5",
  "key27": "CYmhg4FgczmfrDW2qC8NKZAx6TSiAPDBCFHWePSmkWmNczNgCh7J1kTc3gKUMLk4k3btofVNXXpeg1L6SLeKVqf",
  "key28": "3gD7KdxEirRaYKFXaqEGjJX8f6PB6ZymwKKvQcTpEvSzoD6gyevfw6vwR9UFR1xezJg1kgabazoWePePu5WuHno2",
  "key29": "4Yoesp99AvdsTLiMtWDtCzQdFn5WZHomxBwtQCvFEjxL9LpJV4t3pR9SV5mXEkhZ6rArXL43hBGKYLqArqMSMQCn",
  "key30": "4Xh8yHeCEXAXYZ6AsKU5UvWqxgmngAKoBujBCi1dVDW35Gopeih5fR9h53xiLwf9CVo8oRwXbgZS4pXQcguQsqD1",
  "key31": "EoiVSGDRVhVuoSrPaxRyzHkNqFAD6tYr1g5MpmvKSD9Wi42keBFrxcv1V6Li8jE9FdqHH3Sd2EBGKN3emZDYAf2",
  "key32": "3ZjuViLxLZesLs1ZRRs1HU4Ks51oLmZEij8oatZskNmBc88twJD6mPRQLPeX1mtTtHjDDZXF5Nc7UAZQ2MQeeYoW",
  "key33": "2jR2k8TdpE7J2VMJNqh5hJuVSPGc4EDiGmaLkGgperr2C8ZPPi2YF4nRJrU6MubGMmC6myNBXfqERqqKmkA9cZNe",
  "key34": "2THAtTAr2v8kirdR6gULU5mkjYYEPPmTR32L252uVqiSzHjkJKNg9YHo1eURwdGG8X7BmFBDH4paw8c5phd9Fe6R",
  "key35": "59wnomrb19Z6TvdWxYCXJZssJcjTdAJNJKcgzwCTWiTaNExVEiWWTFDvTsMco1LWkENXodyfBxAcPNQx68dqi4gn"
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

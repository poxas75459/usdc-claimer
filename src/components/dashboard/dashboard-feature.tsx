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
    "596gDhcnuXkHKCqNoc2RrYHdWowbKGBLkJfrBjwDxGa6LawqSPvGQzSpS8XFCBQsbKv3JCXmRvZnqg29QumMfw3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hm66kcQHNo3M6aRAMZ3LVJFPfuKMcYADvx533Fz2dv8F59K9SKrsYH9VFrHL5eNRz5mE4qU9rUyFiwKfNPYBNUV",
  "key1": "3tde82WhdrXP7mrUBfVh6bZoVn5rzkSpv87JBJLS3AeVpZ8CPk9izTgsh7bpowtGZgCjci9o2vtd8BBHwrEbAeTL",
  "key2": "4d7sELmZbbnvGpuhgCfTHYyha5dGRuoVik14DxBemsGsZs6PfuH7fzHXXniJMCDbZXQgx6Dv4LVeFL2Fq1ipY3jv",
  "key3": "3kWFXEyY4NQchmcNoBPAqt8xPE4pHRPJcZDzDY6K1qetMhyyNhKiSn4WwtawprLtG3MHAbea81LFAWfiHHXWFx86",
  "key4": "5nxrbbe8uPnXDmUyY46PEaaKpBiiui59PU2kA47finGvy64rYTxPyMLrR6swaos127ty3DVNFWv2ksC5Cpjy1Akr",
  "key5": "3bXRTzFiusgVhfMyVmNnnoDxw3bodBStroenSieDMgYCoxLfv5y3eZrfDQ5sMP718ENmoNZyh1Bz8NHjJuza2Vx5",
  "key6": "8g8QrTKixSChb6kiE96NX9gsDX8nQZiwnbLo8z6HmLSybK3PKF6bipAEu68qfmmRGfPDpVHoKLbZ3Y9vXLoDAco",
  "key7": "33LKqsqcTvzmX9AYfZ4kSPP2PTe7jsTsAY8th3FC1VAPYFhK2rmwbFEDy7TBk5vv3ucmYTtPQGNG5pF7XTNSuwoU",
  "key8": "41i3gVaETRpsk74Qweqxswyp9yGpe8Amamgej7BxgTvPRWbJGHjfeNAFLSjLVxwDc1x4YREG6Gq63my4yKXTqdVh",
  "key9": "NsKGrjTGR4gTdiE6VWb3YpWFZfz7CMZBWjY6FDJt5ePtmzX2zcV3HnQivKteiPzrUxzjs9pGpofCvtK5x226zXb",
  "key10": "3XaGgyXvZz29PfK1W6JE76QYC8dYYNkY4P5XKvrJrq5pmbTrm1YwwXXaE3bwBHCYqZmTJJ6r7RY9rHXp43sF9kRb",
  "key11": "5QjciAguzBHkHz5f64otL6VGMaGStu8Gi5bHmriLHNgsdSLHpfVi8kvCjACkWLYgUgUEjBtDbSE5e2KNsUdzrWET",
  "key12": "4w6Fuh6PSA3zHWctmaTLUxABsgmEzXeEjJWo6dJmfQKqfxNoyGsXcw8b1GFCZsiyqDbAdocWZfxA14HCthw9fx5K",
  "key13": "2JPgM9oADPiN7JybfBfnskHvK2xFF7pZMiYGABudyfN3u74vBe7PNQKjf6em3p8Gkmecmbnh6iky3C4273yGHTCL",
  "key14": "yEZvHQHpyA8n4gjxuafkGSnS8if8JmfLXcXixQffZwmzqFxHvyvuigSGPkyUuNBJKgfeYQWhCpwg6wLNYzyMje3",
  "key15": "zW52rZUtjv8jVLupQzPiVjcBRnmgZxGoYEkvwrvy3jkgbERCdCCWskCrWri6tX89Jwf8CvnqA23RgUrDvw3kMKQ",
  "key16": "4TxDvWBoBdEQ2MNATD3B6RhcPb3WnyW6sBDViduaXiVG2tyFs5cqvFZEj9XDLyc1r8yA1ovxfjk4v5sDgxAezE8x",
  "key17": "4DLsAjomV4zEBVi2gLP9jWZUuE1SSP7tJRedb4mj5PYs8WMr2vhifmCxBdSZns8p9FisZT9XHg8oYBmHXVUGUxwE",
  "key18": "3152oxTG8KvRZEhYouRpBQLbGpED2cDob6PyjnLsJvthxa9fDAgteS4ChGGng4USNrgu2Dpzr2rWZV9nE9RYNuuk",
  "key19": "zMwYwDTPdWeeC2qrjtXXVSXiYpHiyGX6sZm9vqjdSLwwgRi8K5M5Ui2CJn129LSxgM1gwLnJnGnntSj8fXjFYMi",
  "key20": "3A7VrPM8iDtvFpDCjYbnhxmKAJS8Vyv7dB6ERWQ3faiCraTqam9fhS9HHBG9QeAqN85pVMMYPBtv4ApdKjjBjf1m",
  "key21": "4d8KGa1a1KNV2YWUXBSZQQctg4yhTZH3pMwQ9t8HrMsPjEkWJsbWuEMnjp5nrtnwCvNJthkLB8PgjSGbFPLa4wVz",
  "key22": "22BHUGQEXnhMg48ZaMGEb1Ke5hGbvfgDaWZVT1gpBRTn5pf1daLF59gPfqYwTZ4jbhaci12Ktw36JxMYw82xzVVU",
  "key23": "bhmoXLf2kEDMCsgUiEcqV4JfyTfV8KozsdLtNeZ2LmRpJ7wCoG7nn71CfvJAPQPh6TuNygUQp3FCb84A2zU677X",
  "key24": "3VUvyFSPTMRqBehNCb8CmjygeBXceuNehG7UrJ1tWCfEdyegSv1H9PMuk8QSdk52mdKG7jMpyKHgUGHEMLVZ1tCV",
  "key25": "2KhgwdJikVYyvUiU1ozhhRMLS5B6kdyBLZwVDrp8U1BQ92A2rp2zJHHvYQaXz46BLCLpxoatCynWd5Nf1AGm4V8S",
  "key26": "2SN45bT6ANWJzdPcevuPe2aV6kVK33P7K4S4tRWX5JptQXSay2Qi7uzN24DEkzoVyZUUr146FfFfxcJm4x6LPqAF",
  "key27": "N1XyapDEdd65uJtbXHGvhiX3PtBfTAKAdWk9GNzDqDuv2E22cRYatWHnpK39sT9nz8BcnBfLjaHkt6nmNvAbfzn",
  "key28": "4rFXvNYh3wVceGyR61VijqFhbTrJPsd8sAz7fEUWRXUDKHrVGBPeBFmPcz6dbTZGTFhmQ12BUBwbm7fongSQ9NVW",
  "key29": "5rWtrK3EP4cDTAdUwbyhqndHUCEAiko6jH6rgz7y2ZPh4gLgitAFr96YHnXX5uKMV4mMKLiSNeHPXyBeQ8Cuhb3Z",
  "key30": "4iJc4kQTdkUmPbgNtm8TAapdqgdYPikUUGcuzHTjGPDtmVD5yr2NtxRjFScC85nLj1GduJdx3Rpu3PyU11csRPPA",
  "key31": "3P8Ys64QBQ8h4uTUJyKhsqiLJycosuJhEhUWEutNxZzxe49gAoFhJjydc6APeRLatKPG4FLaKzFAMjSE8nnHCfoF",
  "key32": "2fWHiFmsBqD9VUGQ2Gp6X8yeS7XQKA8Fq5JEgrQAbPbzMs2vgc8q1mpPqD5EwHL1TuuvAB6Eufn1z2iqMXHcjCRT",
  "key33": "4agHzgzEz15FPtb8gxefPtN9sohzrAz9nWrwCEiE2YyDtuEHikW927Rzfh4kQMZyaWHzhmoBb88SPJK1MDkkxAo",
  "key34": "3Lxof6UtEvUERw1FNF8GbAfLYRdYW3zcoEaPdESq9TRxAgJdZ4TirrntE9bR5jSotyESoP1Vu1FpGcsJ6DoFumGS",
  "key35": "64w8CYTZEgEm7mdMW1kvjR55f9wNAcG94YHN2rAeYTbzw9bksKTY4MNBVpXtC9ShPv6PoL2SMg8mSjNEdLFBbRx3",
  "key36": "4Qw4KfkGCJ2vZjmW6fS4HmZd1aLpxjvJPPdCXN8dpsEhLMefLB5sywEhdxGdE4mZbuELoEgjL8bKP2tTG2FUG6s7",
  "key37": "2nDnMVYEK7hFdbtkwDPwzgdRVsKPDE3Rg2hjgP93LLjaLmVXqXSp37pqrwu6J6wdwU574xnmMQpwkESLigAQ5C3c",
  "key38": "YL2EkbxVUoumoKK1Xc1YsoKUFJJPWFXR2ZC1zWXzdx386VrRRpHgNoMPV3Yarjzw3GhJoqQR6VM3BaXYZ9a4sPc",
  "key39": "3U5u24iWqpmXG7z1DH1ziXgc9fT6rMUxp3DrBbD2NtWE2zjEqp2KVVsKFukf1Kch3FJJUCde5BPVkTSfixGjAwmg"
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

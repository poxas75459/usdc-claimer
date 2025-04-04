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
    "5q9pSWMojv9tAKyqVMTD7rF5f71tQZGuF4p9LTfUddKDBXHGBjC1enTqJH2hpPuVocaAzuuwmm46E2M4rWkh8RzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lhc5moC3yciMZBytmczxYRyiEW7CLBCAyBnPQBijzvwkz6EpYWXEghzXVERGuuyjjkQYWT616GNeMy9ubNmMpJp",
  "key1": "2vbFPzhGgToDUWaaAVkpxXTZ4Dpj2P3YcVHo8prQjMEotneHWKoKg1Q2urBDV3xFtt82Lb9etvZmVkvi3ShBxN1U",
  "key2": "w6cz2s8BxRSuvWpNVvszeVkh6thnpTrUJE3KeNqLd2Yc6ieHcSMfwg17keoqCi5j2wdoGNxox8X615UKFX4aHBL",
  "key3": "4N9MBPBLy4n9imSrcgXBddJe4rKQgDzKFfU9RQpHpqREBP4fWZymcKUQGCvRG6fgWFmrg92KnojLYUqWp3tA1XKV",
  "key4": "2HCZoVV5mcVzXCTxnJFiPtsqLViWUtJP694eH2htQEk3cjrCyEun8mqiqxvQu18Zk7s2hgRB5LNjKZ2SJZHFTyw6",
  "key5": "vReysQPvYZ3DRL47Hatpd9UAEa8USb1XJohXsd1DghYf4UkgHAsbNoqocye61MhtTSxumi35Co44QR9MpeejauZ",
  "key6": "3ckjX227oeV5VQ2UZDqVS9sg2eKktdkTavk9ow8mGZB7w1H6AkgSwZvhF4tBcnPsbr73vV46REdMGe4RoRFFGfxG",
  "key7": "53S1Uc4RcGYQXQnUrStK7zaEf3GRSRYpwsHL4RHjL1JHT7Z1XLKr61HmXXGSdSPBARRdZnYXYtvA93GbtsAxdacV",
  "key8": "3Lgqg5GqAh37axLSXs469TAUVxgkQBpLg9HLiv6bimdcLoimTEHUokrxWR7YfkMDeYD8N8EVevHEkQDPRMdYK8wx",
  "key9": "aAoCRBDJufFXLsBnn6wf9b1UKK8FRqTp7g1bKXyTLVhyEogSXzaX4yNXTtmAhmGeA8jTvZiTzQ2Xb7EoMLvuPHT",
  "key10": "4c3XmUzBYmMXKTb3Cm9GCSCyg4hATqt4yezzyyhKMaeifEsZ3LDBp2fz9pkFtndqP1TzPaKf11pxUnEH3CyyrSsL",
  "key11": "3UaRYzeUuWmP9zrz626y3yj2vTrpsoFTYECPaamwkV5engkMG33HSQu6cyXtR13scXTTfkhKrczqSvqmbyXig2R9",
  "key12": "3BFfrrDk8WLsMXZiEepEF3ey6Fo8QCfvyDK6b2gAXUqBQrr8pX94WhsSMFqfps51ix2CbXcLRGwVu2gAg9fxooMt",
  "key13": "XyBwSCWyoEgyJ447Wf2fyuidXToZDRJHehCfBs2gbiUhaP27QiVgcuhiKqrHKR8TtmEJEV8NkHT7Hgyv8aaMY2T",
  "key14": "2Hd9eXPXwemjMLUKXSnvajPUV91Wqgn1ruUx53Fdp2taacQ2qk8yyjbmAanfUr8NpbPazavFH9WM1UrHHtpJBXJd",
  "key15": "3t1FKcDKebpm8oVmTzzMhEubYiHVEGhEgbGKmqj5Kj3Ed3Vo4chtQuDMbeQdLm7RaL2tpcSXmUq6HAdBY89kdSAf",
  "key16": "44jCDEyVVRiQvn1ZSLGqy8gz7RS1WwvT71EU9G9qa399wYApRvsL7hfy1juKs4gUXV4J5b6aMb7UPZjQkCGjdF9f",
  "key17": "4uQXrLRao6DGvucpq2p8MVEQyzxMxTk8fs7iVtybEwRKfQvqN9dQfTWM8nM3ND8dae3FfZVHUQc3jMzQSkbn8trD",
  "key18": "4e1vGA5ZT2sMBFN17d3fKKXogezASN9MNTkQhftYJRuGcYACoeRtWqdvRJCoAZVtNuHaZUaCLHNLXnMTb373RJWv",
  "key19": "5FEKD8XAPmnEFK2LawryskzbtJ7mDkQgCVU6TqZ5vpVWcocXD3REBeEsryhpdwPXVCQwCF6f1MefoFYqMfaJ5E1z",
  "key20": "5EVyPr5pAUT7nJEvpfDVptT2reWfzqQpa3gpLYoaxvnbmUMMCCb16oChkGCa35jHxmgUzaCDxzVmhGts4qMBxL2r",
  "key21": "4om6wuD8UvYLS5AFwXzZKJ4kwB69Vjxfb7Ueo8ZaF9YM991LmfyUZubxaKwjay6brNjmt6Ddz44dEcqok37NoCJL",
  "key22": "327SEjk7E6QZ18HVDZrX5QbNX6GHQh9d7aRnvitWHPCZ1QXKp6Gq4aGY747L1PXU5dyvi96y8nYzcf7j3AnpxYkq",
  "key23": "4VTLksLBb4oRah7uSHVrRefb4QjPVQUDSUqLEHm7TpqRR3858hHdWCRRKrvABZnF8x6xYVKmVNetNyY8W92hroF2",
  "key24": "3syESMLcuXP3Tbo1jyjzcdw7p46fmBUQpPkWV6MGR7Y9Zws6nPpDzpPgNX1QophSnquwgAhXjVTeCCM5xuHVowK9",
  "key25": "romBms6oZ2HmgiZ7z4pcoQ5TtrYDNvQ5HUGovvTn71huYuAhaQA14Ukuu6qXPQgVtNfG9R3SD4KoNCKZKNj1J7c",
  "key26": "5pX6WE8UfcYvATUrLC4mf2FnSM5CrBYVAJjV6Cn7c4yReNvdyqmLy16HBbvTtfqNv61oYKaogY6a9abdM4QvmZxm",
  "key27": "4sGP3vX3WEWhN4xY5dzdPWfKCL7CFQtf4WqhfymEX9GGmGqvqgNA5JQRKkK39MvGEiBymGN5EQZSkFraXwMfYf7c",
  "key28": "64CCzJY5uSRzWjpqeNCVgNWGqxrE2kFTb6tARjJ1dLJzd8Cnb5CZNxe5TCxo8xenXuJDYzodhEDfysyMfEjWhqbw",
  "key29": "5yTFnEX1imKTBP6FXqqCHuDoPH17TnLrX9SPzvjsXoNScAjft8TjrC95MgBftwZVGSoS8YGVQtCpv3QaUJB2Pbfz",
  "key30": "2MG1m6hNWHV5EkPLihmcV389K8SzPbeRsyj9jjStEz1DN38VevY4VLm9pKFdbmCZ9vot2K5ZBVfY28u2jDF4SNwV",
  "key31": "5CJvPYvhAidUMjragVezuisPhDGGLL54nTFPM2SNxgDo9mYrjtzvmCtAAa1RYHq3dqVkv3MMaX43gBSs2KJZak4m",
  "key32": "3feJZXmh1347xsJybEEwKMkAkNYguzeXfxnQP5ctFSvBSv5pb48kmdA1BTwA1E9KVfJrMtMXRWLDuNZotvWeiFcJ"
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

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
    "5w74gpWNF7GJUrchYF2H4N9k5K6rQPTuwedGH6nKPMaTtyTs9VmzEVmi3UymXvpkHTfj8farjes92U28mowyZ5ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VnpudXt4Wn8kaMJYCBzRW7NXqpkbuvkLvPa8YZcEnvWmHbgjDu4knB9DqvqUcuypUKXFZamxf1j3Fn67aK6ch1B",
  "key1": "2dWrXf3BSgqs8wtdi7NRmML6n2XNxdyHuTKLG7zRe5sDdqJ4MhgUuUip4ubHTdp1j2HmEKLNaw395mwtYd26JMtv",
  "key2": "5TgvHq35NrvECWu4PQiaDriWg7MuHfcpHyTMMQ74q2WHyk8Em1Hh38eqTnrNyuukK113qMJ8fDDWc5REL12KDUzA",
  "key3": "3XbUyk7HdBAw4uSZzyrZtKWVfHvnsvReSELqpwBY9pn4psggo5h79ij1kW5bDBNiLn4dbxv41naTFuuwEkkMK1tT",
  "key4": "3TNi2N5NbZps2aoyWZnji2a8VpRaR3fDLT4kTsUFhTmmyDBRAgUTwQpMrPSKGyNjp9WrFgjGzqfJZRDe1jmUvFuL",
  "key5": "2kz4rFohpiwHDU54os89Kn2YZ3kUyeqAmGrJsK9eLhcEAC3CGRCQXRxj69nowg7fRTcZsDncacxk3MfLHVxLvAV5",
  "key6": "25dVaTC6573BUwXGg1PF2Eh9MpqyCHfUmoGo4g9Hdz8prRHBJD3N8exYDwYReYs7yVtKZaNEAgrP4G7SoYeCGYHs",
  "key7": "CAXbpGK2nz8YJLPLq6zt79NTaEhFeJGyRcJGp6weboUb5dhn1RySNiWPYcdsGvR4GEHqhfPjTfSXfEwLYV75qWt",
  "key8": "pGRFSgumoArrUS2cs7vkKTdmqAXK7GqtsEq8MByQg8vNkeuPJFVe5JuUrCbtrwRZR8EMBiTya1wNWbpwoFDoxRr",
  "key9": "2xG1QzYievaPRCZ5QsoycYDAXCEsJwPTmKbD5dVECoDfzZCHLbZCMKcb87ASWCdatfg3vvH7KR4NDSZwjjoaL5Ko",
  "key10": "2gMaNyhLQX9BKfbn2Jf4gJrBiCq9RDNKgKWFT6kPJHq3Lc94T5wsPZpYDBBUt4Fx7aXRAtCXzK9JdvhN6TAuyqQc",
  "key11": "266BsKeCuoL3CBuCNYUQW4wmBnAdH9kbW8vDq2k7CVzYjXCEo6kie98WsewEmJ2imdbmgsZSr6C8PTaBJPexVkno",
  "key12": "5GuxrJKp6pWWYan5tsghS96Xh7yR7Kst6Lp7C9Yg721CXWjFDfyB9AGuCoeFpRcKgrxSWU54J6dYw2TjEgbVqgjD",
  "key13": "GUc8okE79qU3bAM74HYa6GUAT5uV2ostryWPDahU9nVYdMqD7W79mPxo4i4PNEi191kVfFXyWKwWnnx4sam7ouh",
  "key14": "59j8p1NctaSDvMYLe3tkAXCg6hqhovTEqfrgwJyEEdXxCLLoziHyQcJEbKg8EQkgmEkvWddJgrMq77fbjWmTQ6od",
  "key15": "wAxuNKNTCXMwRcVDadRcKJLDHKGfTb4UCkgBdm2SythByfoedAMRcGq1jPPvyRkASHFcUgtH5XkHNoAGRecXWMe",
  "key16": "4Uo7mUFX4bqBDC338ptELsHVwhi4rK4btrmrr11LgyZutCTRohSh1MA79s2pMusUcVttvmVSgsWK4ND5KcvdEbiE",
  "key17": "48awvfXGiZdVUTZvRBQh86mwUjvcy1KPCwgvbVyTBURiZYaE3AaexTywdQw5z35hSqJqYnrqTqguuHGihG73Aqr6",
  "key18": "QRmHXXa7XSpMJH5DLZFD6ZmrTbRr4HsVAqzg15w59f3z5BgLVTfhnYECvt59cUPc9ZSh9JUo8j7jdB216787X1N",
  "key19": "3AziasACqTR7xcTxh6szAVXqXDeoA7aZ1snMm78qBB2PuodLZDoxsw5FcdUB6C2uCNqtLn7DxsXY1JS33SiuJvnA",
  "key20": "V6n92j7egMry1VztsyDKBynj9UBf2SD5PXyMpuzuhhznWZvMMKF33CcZ4BcFR1HtLCauYiCaa9yS83GpGZGKvyK",
  "key21": "4BKa6PpsVZJ28V32uFw4Mhp5PKGpDauRkB9TPCFWfAQ5JfpKmbKFPzim1hhcmc6XR2T5ERPA1jdje3hnyVJWnrVF",
  "key22": "5RbXGTHQKiQk5rDZAvfN27My1apWuXHVB11CLNZWDaSkeSyfgvs1aHJikYA9XD8XgUE1di7m1uZbHwvD3eJyjvHv",
  "key23": "4DsL6gkVRQgiAUCq6kBVZ8FgUmjYRwUnUdg27itWzuEVDP2UwBwJEgXRH9XHePhpqhPGTmPWcNi1zM1TaWCmnAv9",
  "key24": "4GzPW9hGPPkTZ7Xa4fDJ2HT6cnYc7RwHtBk6skCSKgsRECbca79vB9ZfXUmjhYtAhWzMM7nD6k1VKXfWwVytajta",
  "key25": "4W4CF59nAkyYNVdnSduWxPrQFTZjsRvkjgeCGBbLWb8roSN1ZmJxwu55CMMPx2YcUHXKarNHAFq5xj8bnjFaoVN4",
  "key26": "3LFpfHqfNsBVhoSdxqktDhJowky6rHrpLnWftFQFCWb4sW7jvgqQUdGVkxpBBCtVCj1a6UYhPsUS74aTkPqHX9A8",
  "key27": "5qr5r5qR57QNCC5R7J6fuBVjq7TnNUNhjkF9RUurcA69dF2cSK8XPLYp3PezpyjgHWRewwY67ZBfaxXmuQJaCjGs",
  "key28": "5WhU6x5X25KaovcR4Y7MUgoCXvu4XgYJNWH4GozXVyGrbi4vFyosr6bx1CZ21DFxmNM2HisFhMiBNBeZwRyaUVsP",
  "key29": "64q7V2vNp6Ra6Et6FYaoxAvH82QMpBatMP5enHW1cm1yojBZHHmYcza63PPx9nTEader9gLYDnBFukse17mEyQaD",
  "key30": "5Qj7r4kPtN9q1Bm8FTuL2KKuaJ6448CBoJLqfSdusXaA6D9joFcJjDm1eVjxqRpVEztEe6RoZebze4K9uBGNDxZe",
  "key31": "5ipax9ivLoS26EbyXYWyhCemteMe7uPddRpUXb3JGQnNEWNA81axGGdpJ4BeYsd3DLKtUzX88yvpZYYTQfuSRRsY",
  "key32": "5sPAMZBWh8fb1kzsNGjNsYMYxqssfju9rm5Lkye2H8GG3x74M2Yx1NVTNCbBd6Z9a2xnqm1bcGMKC5Rif5yZ1pX3",
  "key33": "3whNMvzTWfAggL9ng7m58u4WhcmgCvqVPKvyDNgV9gyLQi29qviRB23iv7rc5Sfju1tZnBdyaz7A3PQ1eV7ZKGq2",
  "key34": "2UpLLRH7f4WE2v7P9YfCjC6LouFUx52cLMrF5Czoupp9LWQWxvunR9dZx2LgQuvCdhuMLFbE7CSDgVY26KBGpt22",
  "key35": "27v5KGabh2v6G2dML2BVhbAKYcEwZrHsku84RL1GHZ2Sb3L8xhFpEd4Z4FpHm2tDSzJdbAoUGh1M5QqQxtc9M5X9",
  "key36": "4LVmftzAMkPk6Lxy2Zsd9NrZyNhQD6n3eokofWED7ynEi1YzsbrpTHRLDeax9YmJiV3dsAQ3nD64UFSPzxJmvwop",
  "key37": "47J2ExPrRW2nRkGaBSu344GsVLdLRnS59yZ1rkJLjTrBJLwxp9pdD2qFpLXyZc6CFXRgjTWVeF4dnG9Q4XZBqwSh",
  "key38": "3EUib8yWojUXhDLXxmqmnBrJaFrSnhiQxBJYC8d4KSS9YQBBT9nFN3EZMFSzV23FigCwuRKQbCjRQmpjqctmD462",
  "key39": "5x8RZaa8N9ECRqToKUNWiiE1pKme3xBqES4BLVBqgC2rXf44iEGUthZQL7r5bRvtpaorpo6fb1BnftfaEveJ6M6A",
  "key40": "4zf9hFJaD4fnXBwrdusextEyvZ43UDTo3fMxVAnRm1emMJeibUai82GxsZXYifd8dasrzhWA49NsjkLpJWwaFFtY",
  "key41": "3vasuKedrp2dxr5UCQgbSD8G8vxL2xjxWLf438LS92yG4UVkyA5Mqj5otMwryw6dFjAR6uEWusDspXcGotnMBTRf",
  "key42": "4EVadFnjpUNVB4w6kw5E82bYJnf8uDazsN8p25NFMsTVUAJUfHDtGSjqq6HXtewHdhLsyLWNWqZZZW5s4EhwgJ2x",
  "key43": "Dq39j7PUfkVXpdQKBP7LJW1ASa1eV5mrdB8GGFhJvb8mnQjHiBDkbXiyv9cPe6KC5JDkWwEgFDGHarjs59Gt7AT",
  "key44": "5NGfLzH87buBH8JmDfe4FCqNpFWgEgj3DYei7x7E1KTXmkbXv49bkmacTtqZ7imSFjaYpbvNsFP2zF3JSM2sM2eb",
  "key45": "5cKFhhyNn2We6KDs3eTVBBgGJGAQafdMYh9iKQWwbakRzCtjgXKaVABgV6UVfYr5LfYxyBGHoiDXLRUt6vdRq7Fg"
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

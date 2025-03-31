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
    "2LUhwwhQCGZYo2cJXfxQVsDtkBeRkPESE3QetpbE9osuS2akWZwajXSaAkpCzaETJmWNPBvkBDqA5JqhuiqLGAoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47ACb6K5f7NVd9ddjU8ZS3Zf6AcpNA5C7rnbMZNJmE55hgLmCzJQQGCAUDnQLB7EhbGKBtB3mVBW8CXnw5nFQn6",
  "key1": "44o7VZQiJ9x21PX7adFodHcx2i2M47Q43f2TySCoofUUb74iUvPAPV7SLsiKQfUGjwp7m66XvbcwAMMVa55jYpsu",
  "key2": "2cwabDxRBA3kVA79yuvxtCCK5dCXUJG1tnZwsy3xHfTanGP44zBUtGEKiXknaD3DDQ8sHhD28duaoxDSCR4seoTG",
  "key3": "3zA81MFUujG6TVYq3dSnCJsF4uSTC3JHAeou1bqcQxtQSRLb1Vw3uuNbYyBXDW5D6wTptoVLfGZFaWxtbFWVuckG",
  "key4": "3iEPmZ3efrHdz9id83xHNWoBfsbTGi7MLHAwUuTyGr8aUxCD1M4WgFGRmkHB27vRQdPoEVmDCVCYAXYNrFjD3p9h",
  "key5": "5fKEcytbpaTXwTWrXXhPYeJqeypyS7dwRDhdQgWnY777kgJWqrGSR9NQqs3YZqcHDyZmVkGdUBGXfmLRqnTgpYJS",
  "key6": "3uMiSZUMGf9mKM6Tf7NXW7AvU9Bj8tW2dALW32X9xGZuQfTiUross2dKa1LyfiTAeunZxUmj6hrty5CERcE2pBN6",
  "key7": "2oKMMbPdUkJhh9ousHFYPpYV9hUt6q7874um84mXyuv1DKvDWCzntmKvwyVGMHcPs24yqooNh6E8e21K1MKKoS4t",
  "key8": "DGPQC35KAh9RCLsKvofqxUz4Sbqae7LfRoyFHr3ksapvm56MKV8aGPoBaEiNQH5QkhKNmanUS5KywsLLgYKE2Go",
  "key9": "3rz8AyE6Dek4uygZMGNbVm1AWR54C5TCbtLZn27DDEC1Wc3JgnTDDNnUD3374PMeLdxjYJszbBb3AjgAPkk88cB6",
  "key10": "3gXAGrGao2zLsyVv23ykeNKE1g1SoVnmAz45aTkhexLZrRxc2DMyALmDFwex3tdpJL8CAnxhCWcpdySizJEM1SKX",
  "key11": "5Wn2hXNeeEUfk1LJjfdJrm4L6GRXtKBMnbSFMqw7cx4k3ij4ND6hc1KrogvrXL7wVU5bT3pakRSc9LX9smxSKmqq",
  "key12": "2SL2Dhu6xkbr7MzjVKGe7BTLotj72BYzBAhyHZJZsDWx8Aiw2myxogpcKEYj2wuPSTBFPqi2aCGppJuZx4APC3nt",
  "key13": "exv4T3jrVCwjW8sLuyyB8D1Z8tLgMpCT7uq8mAb2PxtjKu1ouz8veYuAZDZ2dJCCvb3Cdaj9xyFew9iuuyWexQZ",
  "key14": "5MLzZqMZNeyxFNJ7yt5QpvhSNuiCCgxiHwUNErb8upJmQE8joGEfgEQxjTBayuwPB3MLzZnVJfysPNYgfpsNJZrM",
  "key15": "21aNj79eTRqo1XmytW5u1QgcmLJ84YjxgBUJfbyVo1Dmi1C4ENbj4CRkJAomNJJcD3i5aoKJzaq9F9PgimrDw4w9",
  "key16": "5EB2i3kZy4rmt4fpS6Nnh14vDdD988A6SEDyNnyqy15kaeSpBBsFJQPbxWNUJ64jFF9b3cjxj8e6DS62Bp1waAJG",
  "key17": "4PSwkg5k7Bm7R5kNscVVDEtoWCveGHNwFY7nN4eQRQFwFS7QbHXQ9xGamYkk4imcAMBriJebU37WZ1r5ybmKqnk8",
  "key18": "84PzTYrxvfHv1v3szBXiTht8GNev9fbB1ftc2wvfDEzY4z8ufHwN7XnQRFg12WS86y4Vi5Fc1jikceaybgfy2Kq",
  "key19": "5WF1sDtkapYZugJnb7Me6LKEjQVY89Eid4hLT714UFW3WJ2AwdKxpug2CRrZyhDYzjHQEvLVcb6oeS6KEoSgb6nu",
  "key20": "4UAdomCVHEo9u54wssaKV5iYiBquX4PPgw7j9yAAqHTS3opVNffKZxZtvXbPzv8T7TGM8krFvkcUGvus3z8CoVV3",
  "key21": "41eQXjSDvMhfqeZTe7vDogN3kmXsW6u8JRpvs7qNEPQVg6KStxaNHCX57CKBnP1fABjaH15WzFmKugkmtknaCF8",
  "key22": "2nuKKTaAhpxQM6r517amtaQEYaDNiYSYb9MRFfTPREpJatVwJvkR4gNKzwht7BGkoRjZYJ9KHST3MHZgfg6D6jHn",
  "key23": "2L9gMo7TCuQwbJyZrsFvHVpsvJw9ji2rYafcWMC1oQr1ot3gkGonwAetnXDzrXRhXySDMQ8Hgo7YssNiqwFboMyp",
  "key24": "4G73Cccu3PS2D3cYuwcNYKRoVxNbzjxAQeLEAydb527qFRK5f1qnhvWe4tsZFmUQ9R9k7kRTmY2aBmPpYck9YY2V",
  "key25": "3cAK8BSFnEu3wnn1Q8F3gbLbooL4cD737xdjDwyq7uueZYcQRp8L4RZWuvoNUqvHELaX4RmWjPfdpRWNpkDuxgkK",
  "key26": "4FSNAYHjh7AuJQn3vaYzztPYkxf9ubPeWZGCd6VwhqSFwE68vHrg1PMYVgTzGpQRurgPqxaGsMd6DHFtd4ofmg1c",
  "key27": "2Nf9me35zU48uZPKkei14MC7qJuFfMcZD4YPesd7YPTo7EenqrYtWX3qyKWhiXApY9Sh8HKvk3Sv8mXSXbWdwWZa",
  "key28": "2faBruTNav1UjXGzYDDu3eiMTX8Nv3KpyJKAnnJBTodisxaAobztCP74e7VCeWmv1y4c3kBspqaHdyDLywjCfRhy",
  "key29": "4yqVSYERrh4PWZ8yRwL6mZ23mKFkShwyoLcAaesYMamnC4puVpdpmBAfacZkasJaTS3h5dzkZcCf6GNKsVgCRbqb",
  "key30": "2Fe3HeBDVf7WvNB3ftVfWQ8MaAryEEtYBQcLzs5831QHav7TX7CYGKUkH4D1WV2ULRyACfC12WXxp3S3TuATNVSh",
  "key31": "4oMwFCvsDcnx3DnK1FyBz6jxH3arcaRPsAVrAjmH3sdxTMBW64GgHsvmRm6XkLQqS6kxSSt98cAQcoNGVdwrKXYj",
  "key32": "4c67rQsqX4oFJee7bs7UCnL35QPLAU8o7dUcaNHALEduhmLvNQw16AN2csax9ocjXet4WY5wksKNkT3z9QUWpGi2",
  "key33": "xRDqsMFzeye8M3cAQ4iroKqXoMh9EnAxbzxCjjy1DsNLQE15HqzXdaHiuoKnXrQenDkjJd8VCcTZJJ3HQfXJ1JU",
  "key34": "3xSAey8v9bDx3ajtrauCpW1947H1pbCnz1CmXCbTq5wA55sofMU7niwcFyAE86jXJpUEDNTZH9yAQ7EUPiXn4hmy",
  "key35": "4dJvcjPDzCWiz82KN3BKsJbiaC1WfTh8n98YgFjyCVNQCzjvftFYCVDqgDaUpGodsUXtp5gkHe4dAJiUeB9gm9kp",
  "key36": "2GWRMfkti5PrqWZ9UEpH4pQWo77oS7nemgedapHVQp5XaNkvMyPGJgoaZfNwacDZdUgzM45oqnpxnFvNrqm2kRQy"
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

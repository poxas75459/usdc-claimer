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
    "3GnbZroRCkEoM6AmzU3EX3NpCyMa677yt2hdfTc8ezEK8eLEZHuuXJ7zvcskLNm5zL5vgU1SsHh4QiUUx9DTXTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVbaxjnrAgivCcGGjaky2jEQ52jAhA6h1d7sKHNmQWAgZHYv3D5azMRyd6mfR2348e6MFm5x1YYjvJqstqkgHsk",
  "key1": "5AbHvhdgjFVBqmzwsvD8fJLXQr4s6EeefVnC7s49My6u7dem7TAADUr7sxe7yZ9SRhA1srb4M5bKeqAWqRR5ZNDE",
  "key2": "51UybPSFWCzcDgTFfSPG95xBxTLyrRn3pD24Ata6uLqhyZqPqv5mE3zStzwkC4Euj44hYVNWrtDshytYeMVDnCHK",
  "key3": "3w82MgXHASCcnQbUCbUunLu8Ut6xZz2US4McbQjnHpLVR2qMnZ7VqPQfZmRUPg68n4CGQvKSGMvwztRvXSn4HQR4",
  "key4": "4Zm7Adv4VzhvcaFbHY7fXLPk3Dprqpr5oj6RK3ffQWAEj5SkZP4KScvHsuR4cf8aCpotbm8ZRq63VHgZPohyE4TR",
  "key5": "2DbDSdf64f4kXfwJRT9zzsUvZ6tvHF8Kgpzo5AohPZQkXj1LpJpNuws2VzeXvBDWGGT3nokfafUzJ3eqzkhJNQWh",
  "key6": "3GnkQihCsQ1hw6emzrmWiD2rjtpHU6Z7ittAbtJbidM1GcA9HAwtEk89rjj6443D9BnqpqTdNWeepcCFVb1xWhzY",
  "key7": "9YTqHRpibseqAudah2zTb4nbomjKV8hYaDiYKv8taPo6vQ4D4aWd3EJrZUsGig1wYnpAj7ai9hRT2WarSk8V8oY",
  "key8": "nEbCwJ6mUp8HsCBC5P8SwegvQNJEJg5qaUZky4d3erWB2v4rAT4GnqxV9fnJGNuhFSJNBc3JxKo8tnZTAPombW6",
  "key9": "3nepRmpnmh5CDs3aoGmeqvNcmV7P9Puvt9GzDhYfAWRizAGYodkVVnb6UceKV1mB98VCJnZuEp23qibzKCFns7ur",
  "key10": "G7CD5gHuEDNbnJVp5XpCy7YgY7V2C9qXcJDi2i7vi8GTiybxU53pJbWY2sZYSbC11ktWNSMJm6ew9eK3ZFijF62",
  "key11": "2uXDfpiTHcXc9vgekHUwfpJsKvwTQHsZN1LiuCHipdv9qTM4c8idnCPkZqkVAkdJttQC6RfQ48MeM4LKTyeWoRSm",
  "key12": "4edo8twuref4xfKLKTX2otT4CJfxtwtWHm1Kg2w2K651MsYiwYyJDFHLqSwme1A9AFg3vLt4cpwkRL49VMqc11Bw",
  "key13": "5TXxtmpQkrceEH2DWo4wAV86UvMiezSnUr2skNCvwnnYekop3DdUrjtYCbdwAAota9GdALivCMc1n8DW3yF6PhWf",
  "key14": "3GmTMBKpZkJ9cH588jrfDkKz9sJ2xB1iNkZhuwGpbH4UFXFXhHd6srbYPtAnHhfPBGBdcWwCLnvi8o9UBa2hCgZt",
  "key15": "3pv8PRTMXXkYwMxupsZ1rYeSKS4KpDLDb3XxCTr9QukhSYUZkdCRXzBQHE6i8fUdTVdahGP8RCN491vH3K4C28oF",
  "key16": "Gr2oRBsDg8DfpyiRuJCatTRE8nvKzh1wYtuqCKPTgBfXhkFf4pSgSLxg2bs9U9ZQLgFKNrDVFZmhPd5KZQaGDDU",
  "key17": "358x7Bx9D65FiCQqd7RxcsH1QBw7eaVGx51DApojjgyEAnpJPVLnZb7gowSXaRfcSHXbLeWYFGRPKLFHuFUjHh1J",
  "key18": "5uRd73zzwWRzWqudkApvgVQXzvnvdvctoAKhAbjSaTk4vGoXuWBdjD24TxEKWAFkCzW2EdJ8baubtL2qVmdWe2xt",
  "key19": "58Rh1HRjnhgPuLSYnpb6Y9CHbaTU3AzgyPbo1hFfW9KU6uL7WCRFVdcPFEwVk2YP49bwAvFpAb7k2ALX5NYom1LU",
  "key20": "45kQ17Z9A2WwCs8HEWGXffLnyAdSZ4jQtNgJgXWVetFi6qBUzwJXTvYxGpQ14siupgp88Un3AeH5AtSKTtYgf6Ck",
  "key21": "2wrJn8BrtiVEMeNL27NwfTWsYLDD2oDcwtLQ5TjT6R3fhfKpkQi2jtKqvc8yL53z1oPjCVjQzdzywXJDRk7MxXpx",
  "key22": "5QJSRduyMEoYY7spU1UWgPZ3VsZbt645SxwGKB4ubajrEq1Zo8CW5FTaWegKKjzJ9DyrmTMUurEBWyeD1hL1oosj",
  "key23": "3vuG2fx5nfYyWqUMrgupsZpPF1ceq8UUrWF4Y6y4rGHgb4DXkaCzVJk2cHrWhH4nJHjfSGSbq4QUgZav6L1LWCsi",
  "key24": "25ESj147ryvgeN7YapdPm7sCdwozGiHV8RbexJTDAagSPbp2Coi7RZSm22GieydH6MxVkqWrTVxUfN9wDfDeRyT6",
  "key25": "5KTsVb1agB7GqG3bCsRChBhavebVbF1va6WmryvMwq99RUsQ7GjY1YxDZBbPrSDggBhtPz4Bes5kDDEAKgAVP1sV",
  "key26": "2RfTjZu38UMjTySDqvJ4neEXYgvv3af8F82C6cCyEbrA28kZDx1mT29Ag5F52ud55yiB1P5FgUGkb1bzVDrQdcBL",
  "key27": "4xQV3GoeYBnm9fBKE2VP8echjZhXtSRVMYBnuhj5or4XAXVppKU5LEDVkYoiYAbgUQFXAMt37zuj7YFjVUpG2fcM",
  "key28": "2wEkQEqt12YHmTv1V2TLGUTE9PE8Htg44G1baFYBYWpQRWFmEyEBApU9dGCXzFopw7JPTGpxp6sxN6igc4P2WKBN",
  "key29": "5TGLPnZDzeweJAyihU798RHwSeen4bMC6rdiMwQb3uMwAvydNNopEfsbFr753Q1P9jNwGMtKcepjyHHBvusC7k4U",
  "key30": "4n5iqSvmwWvTvLGhNopPTAqX2inc4q2Ro8EP6JTbKAu29c5ynCtwP9JnKqJRFBQ21rg1Bie1Ekvfv4LxBKzAaPFA",
  "key31": "Hpsq6K5JQT8k6hPPUhUbnGQapzAxTK3Qr4Xr6cY2M7Xsdn7nExAToLSoyxy3hzXXBJseKRUho9prtcRpNjB9u4W"
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

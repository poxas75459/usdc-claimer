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
    "3YmfmPHfjxHryQCiSPZ8MmbqeT6gwGgyMCvRLa1zXmQAdxcypg3L3gXmenogxr3wswBbXhDF3mJgEezgeHt7exEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QDGdYZ5x9aoVNvkLfa6PUSWPQgEgvFHy4ShGToxPciJxQHXdWuQhgeWFBMf4EEupY27khmXpDNMJsZw14kKk3F",
  "key1": "2AZuButKzgBocx5DQMoZAf111g19kwZ18QuHxpkbgQND6XKS7hVPmekgvdxn991xfJCGYR8iMDkDdtdtyDgjFTAE",
  "key2": "5fj5Vz7nVKM1bVkGUNBsXYR2K4MsvzwYmcLDShQ4bqqYyxdQ5oFZzDP8AniFv41aVF8P6RjHfGnSYVWKiYRWT5R8",
  "key3": "4RJDt522sLD1Yw8MSMTZBJP5zCagYHcFqoRUVNwjBbA1f9PpiUnA1DYQJzLT1L2tVyCG4TRnY5j6oAJGEfMvTPJP",
  "key4": "4D5qFKrw8LZeh92VAbzHrCXDPWUak9VxSZgMaV1zHNvtfX7UDzX5FUG9FGHoaxJNcEYWQj1CKPjoDAfJR2C2a1Em",
  "key5": "QQPubgLn764EFjQ4n6BWwcizvQAfd8cgzeEzm83SFhemmGWhmHVLBpBvbVoJYGDMMSBP1XRuR5qipyScF61Lm7n",
  "key6": "5JYcZvmWZdYAnA6PtqGwRLfn6wUvvZFDt2g22Uo2vixTXumtamUmg3VJFo3nHwGrsPwtUQiWaENhPckhbpUqZstQ",
  "key7": "4JS5B7ogifqKKF7aMKDAkWTCtz3FCnRSBD6KW86NixSB1LHyybRRWa2AhMJSo6eW4PcEwY3vhF63EFN9J2RR7rUA",
  "key8": "44XiUPgX4gPyGmNxzLBmTTDfYyPnxz7uEZSELtBFHTFyvXy3HiyYG8yrfYZbwEtQcKSiveGikAfrT1Vxb4F3WSX1",
  "key9": "5PXjKCmw53kQrPZbpCgvW7tcb7TPULqthrH6WFvmRLokf3ULDBJ8w6G6pk9eadP3tfaSrZSG21mtLwvKvcQitVjn",
  "key10": "33E52aFfxr5zjzad8MwWbQcvzFjn7NB6bUXTehYueKUeYszdH6qFnNpXAyTgfd8a9TschydrbaNnUn9eGQ59A784",
  "key11": "2ZejJrdjcPuE3roYzdheYcPNj9TURkefigcjBneNUaiPntDYbcxVMDNavzX1FZVCK2CsmBxnQc5cub5ZzPUhmfzt",
  "key12": "3NR6Agms55oM8dBaJz5qcgGucKPFwiAPYVTP78UbJYGeaAQtjw8d8Xo2ZGD58cbpYTTidnDQWGKbfkrCC8tDRom5",
  "key13": "2MiPfet3nmkKKN9HN5qxR9zpW1MX1CkGvjGmorP2UFrwz4TB7BzMHkCdvCxAuP4ZGXGd4LegnZtasvXWqeFQZFQg",
  "key14": "nPRx5JwDtcS3pNNpUWpAmv5aBMhnSy788qQ5EnZCk6Z1qAaGT34wwNoVXC7DLNNJ7vbkbn6FaXqN6BHzTcXfpTj",
  "key15": "5jrr1AzBZ5WSgJmdoUrX3Lx5HQQFEE2KhiaNrtJrkN7jPi7CMrPkEDSSVGKdKtk29uis7MsnygVwqRg4UiVXxHsm",
  "key16": "owwi7E87ke9oETrFktsbzbmdGqMmsyqM3aci1F3pYVVxAjJN12ramu6Gh9CnkcBvpGYwoU5L7nLbq8GiWt2UNtz",
  "key17": "3CwsgcwNEc8aJ8A8AGQtwNTkgb7TtgNGhFDRjmZiueiKhYfbCJtp1HnayCpfsb8bvUP4y9dhTmcLtATTerRDz3v8",
  "key18": "eckP8VRe9d276Ym5tJyUYxFFtxC9Sd8sDLToL9XNotiAWVpTJueJGxAzbzTizWxXBzNyCi2R7F714AGfiHydzqH",
  "key19": "DupEJvwiVVYjN8pwgzBffDXhAz5opBLouXxveUnDBhc658ZqamCT9LrMLRePTBjcqS1zmPMmzVMTmtBQjsqRD2n",
  "key20": "5iTpwCpmB7tWcdi665vmBbfYe8ASeQXVED5JpSs4H9xNbQJTdNThhXvJp38JUXvegFUMmo4aBeVaWCYLPPVEspDF",
  "key21": "2AK4GBZsTqaxLb5nDvzCYrVXw4nfwchZorPc5TXTZqMMEpmceYsNBmLxRoWzR6ZAdkgAAdaHhsd5MdRmRTktVmbY",
  "key22": "5JP3zP3YXkiP7AcDt7CgqXR9s43DgmbYDimp1fmzvRfptTTjNngHpRauXTqEFERaDNHpsd9JFqM9MGwqpYmBnKZu",
  "key23": "3GYw6ftt4QaEWQFNZ4g8GG1HTLgd9TyxPTUwqvqwZq3eUBiGeAufrv8CtBHYFTaLhYmwemdUwSSQDkt2pkGz58FW",
  "key24": "4vNi7U634VfTnnoUtJWA9cJhbaoJkRCcMwgoF12JDcmAZ9wG6b96J6FGMVgwUrAM9wABLRyE9gfcSLXEPDdQpSoT",
  "key25": "2vxgpb4x4freKB82a7YxCRBdzy3Nd4UQKByZxjVrDCKXBLS39TxGBWovCjsnmPbKA9gVHc2pdhJXs1tST4NFXGzP",
  "key26": "2M1nqNpdtDqeuAUrQeoY2W7esQCVi4cu4sjenjfbxmkV7NmuQetYfkTZWrDRMmeoZHnLrsNxgfCkVV4ydpyWWMVW",
  "key27": "339UbnyTvYpThpXjrgdRzcYwGPnaGyDBo9ctiS3CFfmwvFWdRrs9T6AsLti9aKF9Bh8isf6Sn1Cd5ACQbeejyza6",
  "key28": "2HnanAuhvZktqMY3hpF4vEyrNnd7MiB1y4uLGPSaqCjnTyPuZiy4SsdfAfKfryUoZ9GBvC2jaoU1FGibmFGehAN2",
  "key29": "H4DQDDjWpVNPZkPxfeXHtkKm2ovSSUHZZ3QzmCQmqj1c7ejSH4ACkb8NxYLKim5bc9tkn5Sv4soifsiUbVs6sqp",
  "key30": "2jpDssj4S8acS4fCyRL8NxrC5A5zY9qyBoDUg9n9Jxdrwn1EungnUcVoZKcPCmPWwqutx3DA8m3TJRA2ceyx3BeW",
  "key31": "2RSUfppK8swsKG1L2g5v3HCbeuJDuvHA6NqqAsyZ1V6wdLNmAg5ADNRaS469NtCZTKT7D7b8Qcbe4TFKEG4oovsV",
  "key32": "v7VgWnHiBquKxXg8zrwE1G2vqfUQ1moPuofJxYa81mdNPTj69fqF4kehaTGxv76RA91y95hV7Vwht3F6xTtkiCW",
  "key33": "5KXBxwbhhiPiPF1CoEsbYhGToaK9fTuE7QWaXFaV5Qi5H9RSQzWiWQkaRfEiro69jKKa44wwPK1wjHRycYWoqr9U",
  "key34": "2iLkdmA2X8bES43mmGfJtvjyZFkjLYR1hZcjYT3vwVYPhbMSDeMZ7f7einxj1f5GUnJGAzSiwAsGCGQ85Sh75naq",
  "key35": "Y7uvNsjzpVt7gUJXftdxQ863oUQpfaRSE1bp67vYk6Nj3WCDDwBuDnwf2PFqH9xRzHK5nG8BukFazXLt6uKHV8B",
  "key36": "39rSapTjwwh5PXkPg6Tt4QpWHdPsQWsraVLDJXF69tHUungczTuCUGuQJEc5NwJ2UgDGapfizTzPii16KvyhwiuB",
  "key37": "mVCMARkRikgeGQUeB1wSKffgtDpu4oPS8JX8veTQciRwbgWSKazJGp4izHxCfH3CQpN7hyFR1jicKJNYaXj8iH7",
  "key38": "2GqK6ztbvyn1RknMct9JdvVspZgcAyFqtCLtfCqFjwX6FYpP67SAPoNhGbCrPRpNeLrjD8b6ctAqc31g8BwRhRvA",
  "key39": "5Jucsjbqn2Fy9RtFJTMiAZDrYKSVsVKRN8TsbKtkcJ4uT1WvyoUTLCJhfE4MVg5kdvj3yD8NsavcDiMREm24oErS",
  "key40": "TNnT1SCskadP34zASibQGfMJKijegDB8HARqZCNnZqXtrc72qjqxbXf5ZLDrZvZdcqt4JGzYykTx1tL2YXRH4FG",
  "key41": "3dY3QRDQMioDJv85j4xJCsLeQLUbrs6TL95QbCYmXbwRLQhTd9Yyy5xFPsuaMh8jNeKABrGM1J4oHB57yEJGSHSG",
  "key42": "2e1jAm3fwteZS5KwmJh3etMmaZsZp881NWKQ7VFd6chC4EHHNX63MhekgJdEytg35PMGdVg9GLtGc9STsB9bidrw"
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

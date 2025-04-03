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
    "2f3b1hx8UezpJ3SrHpZWbxzF9Wvv124J53Q4VYXVwFwxZqsBZDBAuhxncJe24JbQMnPku53sT1RM76iPdrtEqrEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YP1x6HuWubXX6PnwRCg4mbNgk8GGdQvtJ4JnQVT1adTVvdsJBieeHGxRDFq2TyozYey2CmwW8Y6y55BDvDTjcUi",
  "key1": "4a3DeQJHVqVsH276VUoBcG6qrP8D6EBkGDabK6Z37JkAQnETNF3xaCLmTfJ5rG6iHRfBnB9hXPHgGYpgYcX3ChQA",
  "key2": "3iQMtrX1hC2mHP3464eCpspMQVdivmr554UTJnTrgkjXcfYw9CJHvFjPU2amLqj5tMeC3a6AxTFJzbfbeANrkDbX",
  "key3": "5CU66PT7U545VmNcaXwXbxr44sEcxVMotTsaWNJ3UURpD88FBJdqmyF3KLf7YFdpjiPaawgYmuW8GDRxLKnL4mDA",
  "key4": "2Qp79dkyLrMTQZCwECuj4wWfda3g2HPt4E9un5FwDtdwSw7Qo7WWmXds3WkzaibqkJkyWgdykDWtEDCfnEn5JrCt",
  "key5": "41fQGTrYaGR7zgqTQagXeqotZsffB7EyJxEX95Jj5WEwQpNhxhmXWKZArpaCBbr16VdSDHwUn7ziLf4R7sxSrmrs",
  "key6": "5gcb4Mg7GCM2t81KkpDnkC633LcrBS1suyKQa48Fs6ZmDT6jghcBcAQEfnzcQYwsLR1aZWwBHa9YMuxjFZ7npJ7s",
  "key7": "2fJAE16Xbw331xJaG7LT9CNeJWAduuHtWvHMcW2nQkQTDj5QjqKRqejRBpsnmmUmgVjhCxjnaW6V3X46o4G9yJdo",
  "key8": "4A3CZE5qmbiqJDgGqUctxbyCgA2SxMrZ1Hbf7gfD6fBFzDvWKPxXDkx3h5zoYcP5fynad1cBu3K61SDM9qEMVm6Q",
  "key9": "2c5EmiGtE4PYuAnLbgAPmkMrfcSwFakvdMagMYbygthZB5GavT6HA9qy11r4u3mY9HncWCxZyCYVADFXimjcHSiU",
  "key10": "5rtiCkTUF23apw9kmbx9U2XRNHdBZyVa1jVHhzPhWQygqasuAYMjFy1te18dyf4ZgrsBoUJduBxsjTkivMpR53ZL",
  "key11": "44FHDLxGUShXhvEVHgDAK3UZhFGcU6CrTnwMPdiRn3CeJbeNgBiJtDoPDFLMHBb77vxkZ5VWcJXbzsR7wb4DrHP3",
  "key12": "3vyvy28jxNWnD23uAasFBW9ZrRno1ed3pifSL7HSz6nm5XYE7Zs2tizPrVVTeQWQHiSttKZCdWayp2mAvs3bnyrb",
  "key13": "3ipJfyGQ9A2b48NWwcfqQuSGwaWE5493rkbrdTENyS9TKaV7WGJLp6MQmCqbPe1tnJHX2S2psjhz6aw463jBmgn7",
  "key14": "ifXmfZFYLtBmSJUc6nk2ydDF4jrxQPkU77f6Y97r4nimQpF8MgqiT5oewBvrBsxhELaHujNa27NgfzSsYQzhdQ3",
  "key15": "zPQNiCy76hXAkPZ1mG9ZzWpKrPJtvQDamqEcankxFPQafaiRx6wVwKN7mi1keukgwHRERbthivxVqdbEeMau2hX",
  "key16": "4UHgJdAueQzvjBum9mYVgGs3GdZn95L6yXaDcwATxjrKQBoHkSz3Spw6eF96yZb9s8dV1kdDDU82iHELin4AggaX",
  "key17": "tVY4yp7AxWt6rDtXzGCfg4dYRV6B9qt7PciZBaeUvVWXDosGRxHXSKNa5k6JgAtmjwK32XqVmULE83b3v2u2Xej",
  "key18": "2Sh746B15QEiiATN6ZRHtCadBtcCKUoUyLBXiU4VyFGZZ4G82Cw5bbDfsbJqDQu5FDwLeKehJaBaQggvRXErUPk7",
  "key19": "26wcoWfTgNLd2aGP4KSGz2cGK6oqDzWYFzkPqfnVB92cSBvGfMJXNZbDdr1WGQojhZ7sAiZgzFSdSgJAfKmJoueK",
  "key20": "ptBg98GJJUMgokiUWovq8cJ3fWPskMWWiQdXZ7YjLWJCioPwyVSeizosLTDsC3EzoXfKwyAJwAfLGcG1nJUvi4A",
  "key21": "xbfvETYUWbSitHvFsMriJnYGpSSMF5xrkq2F1gNt9TonSsRDZ9kHM8sVYb5VUDobg7QJpuakhSN818rymrQSZiF",
  "key22": "BaYEyN7BddHfnP9Bc6dWbQwUUQDhqUX5yhHhuYBMuJrs14AnXHZGwpndVJ24nsVv8g4WfD39c65bGVS1z6EC8NS",
  "key23": "5sKYhiAPCY9kp1SqLGvgewpQ44f9zNXmoeR4gifSyS8R9EbuAhxkp2Hsx5oKBb2QTNuMH4BQRDrZdZ2iTuVWfSzy",
  "key24": "4Jy3EU4xPZjyU3PkYoyhFS3MztmijZa27e1znpEE6SYpbEDRxwzLf8Ft69qrbyxfRcmejZWUvXaWnrrcGz4yz6kC",
  "key25": "4YqF9PMgaDqk59SNjmfnPKTERzb3M73kMtsSwppP91Dtvyza8vPJaVokit4PBJAecQwuyNjit5KrFYffDam6uXoA",
  "key26": "Lw8QmFDXhriJridR9enPCLNjZaWd7xzo1SwRkHPLv9ZhDpLJUwZXkfqGEQkx9XaKb2XRLsUC2YRqP2a28F1Nf93",
  "key27": "4dKV61NyUAypxtzL2uYxE1RJJBTAP9BDpb8wnYazrjvaSzEMfVJZSzfhqGPLqhkd6V2a8VTXrmG9PzD372fYPVsp",
  "key28": "51EqjvqWcaZ34hL4PF6wVQfer2EZu2Cp1CMyV2jDKKpAEcNFCPG4Ez6V282xxXTV83jTcMk2XVzx7Wm782mduLjm",
  "key29": "2zmc6HL5wA5bEa48XCiPMwPp7WK4XpX92iYY3MmQMDb1EFX5CBEAd1Y1vMevTD6K8bxEwfewKeXroQXRMw83QE1Y",
  "key30": "2dwrvdGiuKVxuaoVKhcZPPiQFBm9dNBh5EtNwkoFmP5ZpGaew8MTHSiku11bVPqPcxv6mL1uU1Sp19CEoiUuLaHR",
  "key31": "CjsFLFqMxkFgPkTSA1vt4GKoxawcBPx5DcypuQGFJVxgoZxRmEyBqTr33oi4qzJLsLBV7WUK3h2ZUgPXng1MVvY",
  "key32": "2jrA5WPaxwJiPwaRjpNrbfqj4fmcF5xZA2CR4sm5GtXYwxZKygqPfDPxzr2fVNSKx6ZRWf9Vn3SSwHt525aKDBdt"
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

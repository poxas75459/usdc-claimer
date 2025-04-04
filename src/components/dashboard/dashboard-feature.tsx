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
    "3jCWw8zDqS5gotAtiLm6vqy8hSjYRgQzPzT4VtxcAPRce7e8yvsmmCdMDqWgkapUQCLCsUyWKWnoYxdtaWRm1nQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328SzA8QjKvLs3Wk1DimJ61BCUKbbJLeSPfyFwxfivJaDiqvoNdiMNYBawPPPZ9JhXwsBBR36kiYHN7KoBECktW",
  "key1": "5tL8aMa12tX1zRofEo3H9y8YVXoufgmeAaUdUeKiPWUGZpHETxoeZ2Knhf1q3Lx9xBbgFEcsdudxNhvMZSHxwRB",
  "key2": "wDZbCNkUh7S7mSgDSXxo1WVQdVRYQeRdHbiry38my1moTJC3fXSopvC1B2gsEM55siCvxcGi6rBu1rAvzVnT799",
  "key3": "3jWpMTgrJ2dCAxRtSicxMFFvxqHZUuXd5PgxKvyhFbrCqSsCSyxsxunX6a6mVcnfido8pf5HULWEX9vJL4spjV1N",
  "key4": "2SiDfUS8JrDRj9YMoU6iwhjcDpAcE5hoksfawLZAt3NQEJttHAdoS41BUDGxiFhVWf2QfWR2XNeJN4Wu9p8fifwp",
  "key5": "2yZvqc7W3fj8wTQFXb8aKpiG7QbMAjaBUxyhEMUpEXex6N5G4tDc1sTtkG1FPEaDTMHmEMWRhFSDBasWzNcwoaPR",
  "key6": "3MoK4JrGf3MgY9UbST5H2SSNojEBM7GsBpfyVQA1DZqQyeaNiLMGKuDLcLfeeQMM42EoZ5jsNYqy6Cu3VCq415EC",
  "key7": "4BoKnXhnGhz39XHYFhePAtuX3sP68CtJPoWP1u2YVA7otaAX3ktT7Wdi7QcwLo9RyjyAX4hPnugfwet4keBMLknf",
  "key8": "3pof2cU3G7hgpQi3Hb5pipsZzrVum2sp2enca19QZ8NGYgKKCSoczRMQozVB7mHAi5afqD8o11FWHCpYKBjWcywF",
  "key9": "24w41KasCuwtDqThuTQuJs2jrmFTXJCcUmNmP7vYZLCocuh8wTeEVeYtd4NAeKNsJ1dqG6ixapX1YqWgkngYiS4E",
  "key10": "5zvuHM4WckebREDYCJhSonC3yAUbUk52yBqJmFT1HZPmiXMUap6qGdJEBR772wuwEhpMBiTbvybkP7v2wuXtfa4v",
  "key11": "5Rci3hTf1SPhdq8CAwKJuew2mdeJVm9tc6ngZwgkVcX8bVG2HgjsRe6C67EUX4kiUpZLnEgKutExCa1CxE74Fkjt",
  "key12": "iVAUQVmkNsw9mZnGTaRSKMGtm2hqVNFp91njPaAuCus8Jfm3MAZ3ghRQEysXbGKnp5LqtJ75dVfMpCV8yPFHZwg",
  "key13": "3ZM9ACeMPwTDapBT7Mu3dFQjGnuBD66ogPHpyypAGrZPZ6VHS1NqkaDUHUkE8pCB7AJJypHCEBKqgja6Yd4B3L44",
  "key14": "8GGDmL7hpBrHfPFEwGfpkEoVVVKMMECp46ZWHDrxfxYBZCdx3jmerwqNefZsiyyESaSqJyAFExpNproXSubujct",
  "key15": "2gvazzFoDJokmVQDZVDMfBLAbpDuP8JpdsQvKnoEVEtZU6Yrf76pdYS8aibqLDnHBqeaHnExQSyHHoK46THwGPvu",
  "key16": "4oUyRed6EGsCWAKVZcEki5vUwbjBTCqzKEJnr37JbQ1DXGrYcmztAETtv5Jj82fFBwdtQJLVRDbPbcMrSjKwQ6Gr",
  "key17": "3qGh7ByKjtttbAz35NEfPXcpMezuUxsurD1ZxMxhmZ6EvP2cu1EumVUTL5gZpfcfr1hRzW88Tro8LXN2xd7Zuc3A",
  "key18": "3jm1TNDfGvpD5QtAWurPURjGqKBLXzeQZWLsWq9BhoSy37nudDaDeGN3bfxTjzh2Qx4Nj4DWhAVrMNh29E1r8km8",
  "key19": "zuGrMeVYzjLJSadMYy3SofnAcpE5G9vBK6yAgEycgcDnh6TWm5KC9CAqzJs35S2edwXUExAbByvZHZ2EtfPXjLu",
  "key20": "zFrE81sNf5qCQtm38oya9if485NVNpwDVYjHJhumQsybZbQiF6p1aeDHUwH754iWujhh2owUmz9UTcorFXu1ff4",
  "key21": "3cNUtrGhr4hH7AQK1UBcr5FoFhLNXTkxnxU6d8RX99yM8BhVGnLV6b1b68kE8GNfy1aHSvzDQR4oqyHHYsfAkot1",
  "key22": "5rqTXdkgWF8fnT8Qk7DYtUUZBDoRWFp8ojevDKZw4C2JuuzfeY2VDJd9CFHrMqp4P8ocFoUmcmrfeesqaqgTSdwm",
  "key23": "3wS2yA95KxjnjNdd1egtanSDMrQCYRhhTmbwPLTwDGBXQgpcgwYueXTY6em7YP69gDuwjdzAw9aWiRjXNHGfzpAW",
  "key24": "5vyMhcHXhK93chXhSToCdZGMis6KKBPoBdymtvCuAdDcyiFt4f4GcsNzVL2jgPb35FFVNjKgEE4L1fZpeTK4x4Cm",
  "key25": "3txJYqm9eoaFo93UWRLp5ibwBAvTkNrgFc1BuWUcLmrr9YK8ThqNc4bmm5sAZkYHGFxMiYzG1356ixFcrhLwCaXJ"
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

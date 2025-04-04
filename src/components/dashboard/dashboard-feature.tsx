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
    "2HLvCYDNUh3jQtM5BgcDYuAbr5MPdGUdv22imVQDFwdi6p38BFXks9LaeegLbVBSLK7S9o19gLNZHE47t7hBaUNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lqxwgr1h2LXjDCRcTa51gUsycWnEKePBfZdAdBanUgZSrpQrqKc8ZiWGLGYTxf8PRyefWPgga8Bi499dKgyvA9q",
  "key1": "65bk3GzUZEPeSqBLdPxai8esqS5KoLS7HEsyYhtdLyqo35S7kBsDxN4RMcK1QvuPTrz4idSxBpNmjbFhnTDDRxpX",
  "key2": "3hSaWTo7CrCqzwk7AkQKbMA7ZLPP8AhT2e22WNTrHmVViiDtMiQrMF1Esb3Mh63SFwSZjjrbDqjUSzmL2imBd2ih",
  "key3": "3vaNg3HhvbsXcyn1rUsSNP2c6euLSzxvcoYBSJuUgy4kxDbqQzu84DCSWDvnp8FNHduL3WzyJhR7VwntrXDeTG8",
  "key4": "39N6BzaCQ3HuwmxbR2sMqb1QfbdVK2jJPyL9yCJEuDJXNc15AiTvJcQc5bYwStmHGMd4Xs1CxZH5JWLkcPMxG7p9",
  "key5": "51f6PScEBkMsX8BKaWgWqZS95rZXMHR3k9TUDp9dCkiP1uHRej7wQExwnHbaBRzR6h5Tc31o22z6ArDoyiyVd9uC",
  "key6": "32c5tKWss2fYN9kEdRhq6yj4phza4Ynp2Xr34SoFRghmkiUjghg53Dq9gLCzPneTuTSojUWGU7UAz2PHRXJACYrX",
  "key7": "42hjV9N2PbnicbyZUFKm1api2tscts6tr7WeeNR6GQNsRa3hzkmRYQXbb24KiJ8f28jZQ3kfxzHRJTqzxEuN7kp9",
  "key8": "3Eao5qxeZrxSVxvdwCYQHEkoeijXEdvt8taYPsTppGj3BjMXz9LFvHzqPx7ih1b7ae8P1uCMCbokiQknovjp2YMm",
  "key9": "3xsiHN6pdVFvbipKHWrqcgknW62Tx59qSm44Q3Ecgs8PM4k7CVjkDm4xmsauPvAB6GJXX2Dt3uqgC6YVSK8BvwMC",
  "key10": "4PJ1udPN9k8Fx9fEmM15kyng67YCt6j1cYfu8hLx9NRnntQg6Hb65RLPZqXyBh59xfqykHmKVzAqmx3SF4eyZJqN",
  "key11": "4n3ui2V8m1VTfhiXJDKdzdHwHZuHcWAWeYyhBHp848TvPXdQKrRQg66o1pCXeyXaBCfYhqxKRJHccVUkgWxyoza1",
  "key12": "38CNLfdKBa96qnVQAWbwniWj5fJL6DHYgdMSkT3RodRh9s4QMvR41nHXrrEgDdBGJexDzkr3s1aYNdus9qW1ftzg",
  "key13": "2pD4JWvbKdtdpwuLamE4uiFiZds4uCNDPLWfbFZtojGE8mWFBM7CnFeDBiavcZ5iiVAnGxWxWzX3Fk95dThiDmgB",
  "key14": "589JhzoeZWf8WQEJ6uxyvyCitpJrmQL7WiDAQD6j8RdoZ9jGz64qitaADPjhLvRb4xhugnaG1xvp6HbT9xuaXRkz",
  "key15": "5VDUNYj4CsodZAp6TjA2XwCejrBH9vWwyV6nbJCek4tM1Y1naevZ44fdWgxP29dTdtH3ehneSVXY9B39ydc3nYoa",
  "key16": "2AG4FSWsqEMcgca1A19pqwhNQEwt9t9J4noS23tWhkTq6k7qGbyWCJCYVKeMngXpimQCtiFptkBXv8WVkGnEKYGk",
  "key17": "3gHSprAsGooK7zmVqpW4WkkwSNAv3qe5nxQf6ihxrXrcfD2Nwk15pS7dx41vmU1kTsLx4XUhtpD3fTdyaQJYRUXz",
  "key18": "4yngAgy2koq3e6V7JBsmWwmAqPXopf3dp4NLcSqxdeRwdB5uVyqBH2vcR9NSa4EZyo7MdFs3fbtwvnhkTGdwh8dD",
  "key19": "n9FVeQh934dhXfFsEj8k5P8U8SgGwKUcbaD2w95stqbDFWDxTS2EiCXqNP4gmhtyq38uHo8yDyGpdxAjpKYnR2G",
  "key20": "wzKvL5PjP6uJrTSTMrsHnbNyAnJikoBBnZwyqkbeFxoZbYnnYRHYzcUW7x4KGpJTbkMEEhEGCyv9gBje3h9f2Mm",
  "key21": "2z48NbmFvNmrtCzSvTbsN3a7HPZb3VhU9qwnv1ZKwKqApVKm3gXu4qJJKBYj4qtUdRJ7cVSzQDxU6dXj2GjmhTqR",
  "key22": "2rdU8ssWBzdTdK9nCUMQnHGBrnkQo62VFMGFSmvdVP9WAqvXhXMRQRez69LdUi369w3dNypQvLa2nuoNUGSGBgiu",
  "key23": "GcigEQYyD3VpVEWQJUwmbLum4xG5x7RxFumxEEfrPZx4u4YHUfTSfghgVyYAmyn7RFrPKnR5QTTx4pMz3cTeQQq",
  "key24": "3LdErLoBrPX9Nk7aWzfDukdpxP9jmbxTJX1gbPjxCVm3tZViyPQDyAj7wfw4Bh5Cnt5ji3mLdKWoML2sjd8vtTbC"
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

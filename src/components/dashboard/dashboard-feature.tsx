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
    "2Ss2EBK57iPfBcVDiMWkkiHh8Pvq2EVBKtDi5RaEb6eCNAifHrvZhjksbAkiPq6BiPn7vdz1kjpRZJLeoQ7pwrnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vYq9wKjyxaCFBpoAgBXMGeJd216AQAFHpLmVuDrnjabErpX8ufFrTFLCqTFWovnkajCDE6ZCQGiLyqfZGJaGmtY",
  "key1": "2pEV5FpywxbrGSuDsU9SenvqccW8DfWeKd5qkJPGN7a3QRxdnMeKgGcSp76vc79SSGRtbVsgAYPcqAudhxjCcxbD",
  "key2": "3yKdbaRf5zLfYbVTWBG8uFEeLfLakMEPQ1VWrUyjifQ6Zcs12Qz3cvtvvdSnrRrFyiBQKgbNsgQ88c1MnvSdoKou",
  "key3": "5WFxceDMXWsdYk6u7XRDK46kvZwjtXsgdw3HndKFDVhwvr2mog3AkMVvF6PDBVDceMDEYBjGnE8hEHvZtxoToKRw",
  "key4": "RxsMY5um7zUdLNsZLUAa4JmL5YB819wCzNtQUK15pEx3bXy2bmkXMW1fMKiPJTroC2fSWt2L6LsbManDTr26VgL",
  "key5": "vTSVpCPDRMog67oDMnZwBh4mmoffzvsFw2VF1emk2NXpsHN4yjxsabMdLh9tQyLfd5r21E8tJTtcBGmfoYdi5mv",
  "key6": "3uZEVtBxZzMKbZfNWmaH1dBqj4Zw7JjULcpNCQEFnoG9K7cKgRv9uwDErktXwL45BpkquqHMx8TSHKLKcGhMJV37",
  "key7": "2KbyYuSirYJ99Q2JSzZbJ16aRH4r43y8z3VBVUZsVZEGnwHSEgabejob9SuczSpgQyfFqnXTHFeK9VJfe8U5rsht",
  "key8": "5cHgfLm6XT246i2HaXX9SX8k1DnbdEN1e6puBmMNimc3ahF2PuQmiPUcvxBpV1jYeXrcHd2mrKeZwMN69RCoSGL6",
  "key9": "4FcYmSNgKtrqXxCCzsXySmcYUUDhiVAJEBYnhTaGSkU29fBP2LcVg7WiLpQWbHUXX2vBR5rwWoT93Sri2derQ8hr",
  "key10": "5pSVB5u2x5pzDfen7JufdrTWPSqGqRFZokXFTXJ25TTU77BrPkdJHoyUa4VQpgctNsmeinrmJEGac7FgQmUwVt5N",
  "key11": "4b1RWyQq4vCTgyo7sm6wdKeFEeX6rxp7NKfPE4Hjp9nV5R7KPcH6UEKtVukGCnctWJC9TDHUELZC44nTZefvRZ7P",
  "key12": "2VfZc9xoJ6VkVuCPbXSEj22wHnH4x3otMCvrptgG9ocLtvbpLgLGDpQKTsBSZgGX8hQJfua1LUNHNwCUrGN7WJrh",
  "key13": "2WJ4iyu8357Wio8g8WCDxAwUi6pm4Jc6uNE4YENgH585NoFwFX9mRxB6BmYX6xCCSJDsPq5KeD4tF2rSWEMLBVnT",
  "key14": "2gDMJzYhSYUmxB9u4CkNDf3JU9yrcnpKbndG22PWgnFBVJiA4vxpBBC5fBLTRaDXfgbCGhFKDCviVfiZXJwdQMb5",
  "key15": "462nxVpySETxEy78q9Kidh5W8MvW3CPj86LDazhYRqTaHszjYUhHAkRKACij8Xky2FfABvMbDrz5sc9nphu8wwZo",
  "key16": "62Ptryoecp11juu696KaJJcQrrxzEJSzhQq4P4XtYRdQWzhrkXknrPfojzZEnu7xzBRJ6Px13fVCeDXk6njFFHu8",
  "key17": "32xVxM4YBMktT3dgpGexbyoVqyJFB6NPA3tDdTAGoZ65AhRaGr4se7ecEsDcvNGbSYdQESiw3qegcwvXrfMmXWdy",
  "key18": "QFXDDo86F4XVm58foF4H637y1ab7zUJpvpbuwCsdA6nthKZ9Yxo8F7Cj2ADT1zSPAATJqNJqwc33Jp7vgD1ZW6n",
  "key19": "5ovL5Q1UCFfmdud6T4iNScRzMA7bn14ESwJ87AVWPEYqJk5P1osu4jsQZ88AUHXCmeYeZR1ZSWQiH34VeX3beRoe",
  "key20": "4VFVPMxhUGWXJ9ZoH4vWnhTE12CHKQ8kxEwu4A5RZoSoYBJiDWZGmQiMSfuMvDBp3Y8q76hSWcqZaPvDGTbFHGYA",
  "key21": "4AXKJanZoGvJKwEBAoQP7Z1b5iSJnYULtbMnDQbM82sx8Uc7yhN3JxcjzF1nUdXZJqxcnyeTX5Ax9AsSqm5ifwRV",
  "key22": "5HoKr2dKJrRLmEueCdA117Rgfb4gXg2Vt5jcJzaz4U4viZUXu23xbgNAdm4ZmUey1NYHS8MYhH4ZjQ2YmXUs1WKg",
  "key23": "5mVwmy9bsEWtK4TkViCE9UQjNXKwSqMvnjK2m2yP4v5sqVe3ZesebP3k2VcQemxFepQ4WvAnG4CxnHjbMP88eBf7",
  "key24": "5dEPXLGSaDrHSrzkBTzk3GYdv2LpfEsUn28j51Ksxwc9zAqJJKwExxkcCKqKjHtvQosd5BXoJr3sNQRFLsYL56uU",
  "key25": "JRwc25ubnz8B5mnUGzUY2pK5EbUv5GNSvtdFy9XLVTNz3RtcgGB4ztL5tTC8EEJnq9vPrJhzGgdBk1fQ9G8UGL9",
  "key26": "HBNFBc5S1u4ukDoH6fS86duQg6y9XSSp6Frp82LTjR3mVmM9x1VxAWBW5QFKmNG4adYUZdxTUJpeFU4YxFKq2VQ",
  "key27": "3zdtf2QSQPaBEp4xmsJBw71anW8GL376HiXEo333oyUVnhj3SHuU7xtcrdUnRkeULrcmuseSNgt6Ygw89vAvRVzB"
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

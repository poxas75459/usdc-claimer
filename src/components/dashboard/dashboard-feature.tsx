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
    "5GF6LjdQCzU2KrfjQbBRzgBnAuUBk7xh1SftuahxYt5wdktrU1EE2JFcWJ1h9q1tsdUomQnEmYscSRT6qygkGR4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29KWkRHwyN4CZHgFEFNFExcvKuxSyrwDgKNxXQMHrKNw9rQdStmufaaj9pygENYuWAARCgBAx28MFqRJriy7McGh",
  "key1": "3UjzP7jSpco4VxgkgKfLN9i6QY1u2Bwseo9J2pi4KpUuPvh3NL5ijW3Yia7jHzKe9WA8U2GcGH8Rn6ketFdUWNQ7",
  "key2": "2LVtjGaSyqPcm3jejUoorvBgT1yezP5oURYAaGZSnouTMFaeuV49gGTe92hX4DX82BKWopJKYq2ehKgmW5crVGKN",
  "key3": "5Cyx3miSfzkfn6gFkBjZDTJouLaogU5kvp81R7Lv2nhKyiFwjeDRptMmbccQV7V351SXsXfVVen5TVgBfKRPJHVe",
  "key4": "5vgvrVguCCybxMtSKgb3PeWqzZLp73ooH2FuQ5jMZyLYJp8FtJf4rxUnNYpxNE1zH48YXU1Xky6zw33dKNzb3am6",
  "key5": "31ric4c4ozavok2NUodpg7zVgPGYpoAUDJGwqQkHaCwAdK533L9HwSUkjurXATaovcubSTrv892MX3HKRJn9yt4j",
  "key6": "53GPV2RbkHaBsN4H4h71fwerMXk89pdvBZWYxrBWRjy3ojgVzEvA9wAUmAWqjSQezqwYxFg7Y6M5hjJas1Zc3Uy",
  "key7": "2UgcXqPeCdmsGBb4iKhioWpS2DnDLoh2Ghi1TRo5HVWWySfeYujEtn3K3gyYzX9ysavHhcFcq6U3ewRJ9srPoaJy",
  "key8": "27w6cGEqXAaXSuzxpb4NYGzBdkV33QD7DMpPLWHCCRFkNQy5fB2MSg3WkdtayymQhrFvRsvj68Kyqv2x4sw5ELyr",
  "key9": "5sdAoP1sjhucdGFbrmdCoDzAPyJkP9UPPuU8HymhutL5KwxbkuiEN2PKf2VVcqgnCko8qz8XVfw5xVTaQ2us5Hdp",
  "key10": "4PCQEcZP5qtWFYcsMnUonidudmGeLzKWmBuE8Fh8etMqahJQgY9U7CVuajvBymRaCH4UFWwLVzy1654uM55bwHa",
  "key11": "3e8uVuQK5nBEje3SCMujvnCiQkUEyvfVkB5svbBBghXr8d2aZzLUiee8oret9f4L5rphkEHFULy429xfhMmozxs5",
  "key12": "3MyBw17yybtJKbmezEtSdeXRLZfwvyktDb8ip2VH6T1ke2vFcaPLip3D7wT3n8QUsBmrpUaQzPb1gsXZgpCNgcx4",
  "key13": "4WN9cFWUC1VdtHmtLiSnf3NjbCh5mHZ877t9VKvBPRV67ezuKEPZZCNx7xpJ3yyUUWVJrGgxkybnwYq28vXVXZ2j",
  "key14": "4T9izZGPSwhCdhyLQnqmTzCrMsiJi6ghHQWLsXN3wxwZtmtw1EytVgAS5w97a5P661xt6PGV6PdLeAmWxMf6Mz9J",
  "key15": "66XPPqVL4Ugg4fM2j3jhdB5tY89hZsi8HsKJSAfmbq42u1VsHS5cEg6M2c4Ckj4sFWGvQzsbMjuHyE4q7K1kt4x8",
  "key16": "4dRfbxiqajF7tK2nwPnzhPk7kUf5RXxtgwRiwBnkhcDpoQCSMZYNo4UmVGG2fbJBQbFFwhCHn7TBuTbNYYchQ1Wc",
  "key17": "5QBQmQbwrDs5v6x798fXLWRi4KxAXJ8t77RyHVuL1PCFVa5RQXYNyoX8zezipTpenUUiPE27E7XbioK23WnTuCCT",
  "key18": "3gRCLA9T1miKsjqj68jGvg81qcJd8bxQ9NGsU42B9iYdj45YNrki6JJM7G7wGD3XL1UeWPgZmjtPgpPTZRWUthuq",
  "key19": "4d6XSYFR7Pc28DNjx5CQ2BgC3hr1iRq1vxBdXDLTtgZKG8cHhRqLSG7KJUv4mPXVde4RZ6JBWQZjWnzJs51NBmda",
  "key20": "53Fvy1GZZJW3vwur2epqeDwmqAPw1fabiZ7QwUg5gwiVhJp8FQXRjwfYnRazJfunTH7ZGN7VWgQ3tnqpCo71bvnZ",
  "key21": "3txHUcXgfHkUtPEVRCAGNXsyTBAGFDxKTXxHpDmyBkSohxApWUH7f3GfBRxN9Qyc9GrjLAc2JUmfv9D8HtNjC2Ha",
  "key22": "45Fi9DxyWxn9oMNsqzvhGkgENvubs57y6LmZUuqDF98ZYG88dvNBRsciR27ed6Z5aSoMXQ9ks1u3RmwnAx3BLv1h",
  "key23": "gGHWUWpguWD1XmuBfxS8Hg1N1BjbCpt1GRYxf4UXFj2nP1crC955gL9YVig4GGtCs3mwjPB7ENH3BT4ukm1WYsZ",
  "key24": "4z8DZJUHH1eDkXkkqVKMkJRrKtJELWAnU5m1QMDvPerZQtHhdmhiBsSEw3uakK1TiZ4yLDpfaBhV7yGR2FyL1vVc"
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

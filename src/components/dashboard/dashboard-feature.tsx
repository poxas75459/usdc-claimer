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
    "2ybufdEa33U6JNNkiVgkzxUCVYLeF6nifa3panqTcEiPCdmcow6HsQv7mmVZtnuZ4zCVZdUuYBVXPH64PcwoBAzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Saq64iNpSagJy3HhpWVNyHKzVpDEh6yPRqzWfi8SNqZJwEjVzB4NAyMxZwCmXEBiUvN584eSyPuWjCaf2FG3wDd",
  "key1": "J3YAD7H16VYDXUBJDdVTVq1uCxmkxAhb8QocfKPjwf4VpqYFMBPvcRHQCZAaoead8MmrXCbQVcs9YQzikEScJzL",
  "key2": "5Q2QkCGwQTBWs7HcorwUewBJjtMCpXNzcsU4CkMtoThHmzkYoDNJyPMmtbGyJYeR6bxfuKvHYi3UPE6BKhNdvJ5m",
  "key3": "59VpSgLoTrwAdSiSpkG5Z1GGezJ52wC5pMGB2dLCUX6Td2HcnTV3ymrDdbMdkABLZqFwev87pPbP6YPhSjy53NuF",
  "key4": "2Qfs1apRcNdVV4ZUb81bya3877Ewch7cqnh8iZM1UggnfVb64kvovj4DGXb4yRY5eYHJ1XiQw5ASZPtJNGpqCqYf",
  "key5": "4ieSKv9WebGEJHPpKYpSQkR5wR3PaDbdJtBXiACnKiyHA5XMNomuAhfrAeVjnMfkgk7us64LvyPVpKC4FP5D8214",
  "key6": "4xFPZFUCvnSkn1CcjGJZnjaaETBPKedwN1ErqKqQ2R1T1TFi4f7b4X7mwmiYWhJ6bCcyruv4G1nVb3Cvshvv4ZHK",
  "key7": "61sNampqK2MeupTRj6NMebi5fwXK1fZ4WJGRLoHqvYMVMu3ydVLFgUspVvba4x29Zh8iJiNDpo4RUQPAuSYmnVm2",
  "key8": "4E369obEGjxQQs8GuwCxjj4eUfM12mcoVb6roqFB8tutvNM1kVBmqmdWxdvSKwTuhJz1gvRaWscnqUEwLtSdEjJp",
  "key9": "2ojrcbEaz3Mywc4Xneeg4aB18VPmfNiCfZs8u38tEcFFphQiZopHrpn61yj5baAGgfj8av6TEfP6M8kcG1mSsytc",
  "key10": "cQzHiagqJod6rLH2RvQpQgv9xEsJkSxdMeqXtY687jk378KGHbSTvGq3wRMU1iEw8n7PCDPSkv1fhrr7mtTai3Q",
  "key11": "BJSTeXMzN8KjfnhugDkWjSP3GRa4RiWhW2SwcjwQRKC7dqdpVdLjT6cBmrp3tAp1PLY66r7Vy4CDVZZ3CUtRAP5",
  "key12": "58vvimFXUKRsL2oRMNiVRzHgV4YCMPZzZUrAXtTL2LPo3ctpvRpFr9HkeNkkawZXtkzyEEKuuzgHi9MgUGbkxWvv",
  "key13": "2dZqsog5Hj4mb9sEPLVyff8ugrEv5Hyi1828a5YssQqSdi2inFnqSLwb4m9j2n4ETDsfTmhsq7DN6A4LWB5jSm5z",
  "key14": "4fByo2kZkFxWv1Y7CpkNepqsUBRLFB3P1ytofh73tPvXkWdkAgQb7HKqu4iWbekU3g8DwtUEXu6vLMCPiVzpWG8p",
  "key15": "22J6gooyh6kf1Doh4T6Doq8wbnLC9QEyNqEaYV6svxthzG5G3uhMWUqR2oqNjSpjihsJqG8bJTat4pkqQBbegLeQ",
  "key16": "ZjANdaGCeuH3SHKGe8BTxCc6kFXYA13h6T8Smnnw2nQ6f4WJ1yK1CUWG1ciBkHUKYqKm8REizZopcMrjkTa9CE9",
  "key17": "623zRDtxDGDtmRKgArwy2KjLvQK7inWNpd8eHdt8oAZtZnVDTxPd2iy43qTXLRrHtx5khdQVkhEkGAsK8TN4fX4e",
  "key18": "3dtJdueTaLa9pQ5gE4T84RDCHo4w6ECMHppx72NzskBavjFiTEbr99sbM7xNYDZkZT4TTaREwouu65j8KSx4mL8c",
  "key19": "kXmid5xvRztJ94dThAaAGwp2edmwo6RTktDBgbjg5bfKroRHZyZ931CmBzff9PP1TN4xHKZSzsHAR22iPTdYZjt",
  "key20": "4c5dkJDTB2HEeBP54GZTcZcJoWzYpCit2Ywezfwt2JAhUoniTcB1cpeNUk9JDfmaKtQoHUtRz9RwSwAHwXpsGi5b",
  "key21": "4KroCZadzhy5Zh9Lrbt6qLsu68SesiRTaHHC18WS1E5nxoaQQS3DX9nbjfKpmnKecBpEYLZa4JV4e7DnFPXDhdBh",
  "key22": "2RaDX2mmN4ovuLDmNKcyCHkX1N85VJUaG1wcKdzRV7XYMewvUJkU4YaZAoiaDtRjfZx97wYTCEbFYM2fY5SSvwNY",
  "key23": "6ET9QxTmVkwE6NstLhXstFnqaXDwUo1wNMN3wPuUjorSFTqsYEXvBzDyQkDNSiN9rQd7A79HviPSgMMGfYpUFDe",
  "key24": "2AAhFucVmePgM4ooSy13SnWZgnDjawHYtDNyVJbWunNjcdU2FVkWBikWwMBV7FfrvaGjigFUWMQj2g7FMPR5RAhN",
  "key25": "5y5xcHNPGukeoe5u4h9BqiAFhiiQbMnKaGNASxVynh5SLFHZTmsN5yXTWzZXqn9EkZzKJeiftN9UuEJP2uapZP9r",
  "key26": "mjoKXunvFMnwop1qFDo9nWhihbZj5mDS6hmzoAsb61G1NAJwPQSWJMsfqLz11wDHvis6CVZKRXCDxSeB5vxEovm"
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

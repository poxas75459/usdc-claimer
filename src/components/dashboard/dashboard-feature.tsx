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
    "2DPqCmwAAdL4EbUDyK1WN7jtPi6cRyZq5t8pawPeci4t1FQXXmkpsLCThxVftEgcJiRJ51DhYmxQRrByKsbtxgWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zLqDDMB7LZR7ccTf78mySDkErM6WrvxEBjyzAhoX8CRF4s11Lww6psnWVuiYMJK2o5RD9Mj4q7qFmC4jus1BmpP",
  "key1": "3ANo9CbAP71DtZGQEL2D2VHA4mGwkPSckZwd4DN4rrdmw1JofnfXYNXEN2z5mtmVkHN2BoN3bfN8iQaJMS3ybzBo",
  "key2": "5wfwCCkLGM82ujQxSp5TeEBKhCABaKgyoCSxVeov5UAYV53w48RhB2EwNAo6ccoEaZvRE8yL8zbQ9G8Co21zUPzY",
  "key3": "2eA1eDnbNh7xH7QNDTqxsiF2LCfmhTCPeKi1hFByhyoowuvBf7rNaQBthLAdh42TTNcG3RxjEB6mv5PTexMV5L74",
  "key4": "53FmBMTC4MJ8MAC1xWdyn5dDxPodqnMqbeKaGXi3XMRYWHTJF5R2XFX3MJXy1PUck1C1g8UhrC1yBYBEvUU4YdCm",
  "key5": "2SSg25rZXvrvcduFiBVDCeAAeupzJfswHuYGrwLHsY44RPFzVSPKQ9KBW3oWdpgZLxFi1LGpY1sJjCQ3cKFNhHjs",
  "key6": "3NiPTZxEsJJmbBHupf768fN3fvCZqHHaaeybFWGRTYkMW4iQ5shJHGQL92Kqky8oqLHt9SZeUd7j6vP2XHaAenUd",
  "key7": "4hhEvHhbcv5KPPjmC1cnLKd4nSAzSeCkNGG45Y1hHpgANZ6RiswrTgDq7iGSr3PzmKAm3gHu6qJX3ZH293cpxgQK",
  "key8": "5abvyB9HJzXesiH19L9tyeWxR5ULTVBWnJJKk4PbLPwECSk3UMmx1UKWXXMCpNBoCvjgPES2Z6pv5CEHYGwPTAMK",
  "key9": "4VkCTVj64Nzygxa5GNrrkEXkXpcuKiybJG7VaqJjXrx3hRVZDm5GeyufjCS8V4UpDUic35Jkt3HdUJTg1Az3aFpV",
  "key10": "2H2qnysrCBiJ97ZokVjaTFDQY8tpzPysvEF4shcw4gC9WPukxsTnBCkH3cKGb5VjT4SQ8Z7h8xfhSVkeQspgtbTp",
  "key11": "47sotjeGM6HL3BQuMWLxrd5tSyhdZH4nWnyVtKKrx47y1FBxxkSGNjAZnXtKGo8qW8CnmwKFr53tZHyJF4YfWJg8",
  "key12": "hAGL48BZbQCUBqZqd1YL4a3oauS4TxCFJgFM3Em7eA9eyeCoRbynU8ybFgQrzZyipvDWQQjq1pTD9NzZGQAwk1X",
  "key13": "2aY5CFEVbNhtn16qQC56ZQ5v48c3CbcJ5YdkYp8kj9uxbJ1S9GggsuRsUUzMHZ5JKQayai5AEYyUDuyqX5yNA2NT",
  "key14": "hoN1cs9GRfyQqLMihWiK6Dwte4nbqZAaMsn5ysPv5WTjGvuemC92J3Bk1J8JBiD5FXqgHKVMB185QCHcicC98BB",
  "key15": "4wQGz8KQcNnWiFu3GRzZfJqy1jQZQoHsLaVkPzB4VtG9T6NZevbjDxu4X4oiqFhka9VPK6VLzMCKb5YZY52CZWry",
  "key16": "29JDXm8ZjP5UQaVihrE6WQJ2AAv8zZEapVvFVHCYB3KpmUNKnftRcsdfFCKJ8JZocJ6X63eYJRN2aP8dHq14oSw7",
  "key17": "2UKTSDfp3LjHQ3mafwjiQtWHq17cQ9AXKHsiWfPb8nGszPoPoiB1bKFrEPpBPiTgJKFypG4h9ZKJAbgDXwjdGrrr",
  "key18": "3z4i9TKyEibhPqvd9WQwiTVMxV1FJzqPv1H3RRtryXZ698sJuaATMuu3BeAESzWFhqxV9UjuU2c61exPPkkzGxYS",
  "key19": "26DiRkGgG1EujnYQpd3jzH3KDbd1biRsCo1YKsGdFXgYdqvQTTNobuPo7yFPMFZCirozgm2QH3p5tMbYPCiRiNrS",
  "key20": "4D8Fu7cGFQtVPUT7T3fRiPH9ZZx4r1bTDNDo4e2Rjey1HnB2P5SvncPts5AQF82RME58QmYNJTHqQv1TNLSE9Ath",
  "key21": "5hGpuqrPLBwnHP8c8ai3rru6tMXzyHeJMJRUw4Zd9YvvT3uKnki8mDj1UwoS7ciRcc82VvnLocAgZPZdVk7XBpUW",
  "key22": "4JZufgzeHFSB7m33JGWDFQEcjmWUHEyNH868vcML5AsRviq41WAo8kWLYcPdXk7RDxwbWFh5iuayqXEtXav6TLcB",
  "key23": "41xDszWoM1NatGs2LJkox8nhJLyfvhiNYj5qhcingDWDNMNbf9TYJjCjsz7oVz7ycDVmTW4ue7jNNrYsVigweuyb",
  "key24": "4yBZfw4zGzrHdJ7mfssidoEVwygq1Vn5j9qfA8Mi4UAncZd3Ug1heuUtpAwX6SZyxXUnU5rKQ42ziVxoqCrGiEpj",
  "key25": "5wenaE9xRtPQ9WPVTSMna7zLw9u5mKBg2v4Bk9q3vxFLbTAAPKa3qU3iXqJ1vQcdYdynxfHVxYD5FyuBVRi3m8qG",
  "key26": "4yRBHyFTzwiNc2FMyZQRSTXBB95trExBiDkWie2KEYTAvthpVp8XzDTDS8PDx9obq5iifeYnNzKWueLfYsXxJ5VR",
  "key27": "4JCMYPgxqR2VRnUEnWKFAvqK6dPbjYSTXj6AhzHA4aAd6uWhZjEtTkx1e7dWiuwkZ7JV3JyVviWvdGXG1tqpNUgJ",
  "key28": "595e92SdVkBf56sMEnEQ2kb697jov1GXnu63vepNBTFWD68vWRkRMMZRYniSvoQkZZgqRo7avcYanGaUvdvgYDRK",
  "key29": "PBUNfX4FP4SXY5XHmXAShbhywuC5fHMNULqppavQiLGKfU1H5JwA36xsi3M4hBjQmEFFTdGMBN84XVCa6ZoMie5",
  "key30": "3TD2BomfhaLHYgDeRxfju9YEmKepVyoS7WPetxGPZo2QZuTED8pfPmriehj7u4ASYNZArJ32YNGxombZct3tqajp",
  "key31": "5paZtejjQ2L9r4bXfmmPcbU6ke2cZxxyME6VpEkFn6zzaPc9QtPk2aWcwJg4qR7DLawBYv823YzLs1CZ6xcL5v5t",
  "key32": "4LLev8WGVgjxmdXtw7yC4p5XXHDpFonNCcXgbfJRAaVFLhyLaGr8CZyA3BeC146B3W7N2kKocACpES1rkLeZxrAM",
  "key33": "3VykC7JH9Nfqqo4oAVDwHV4HHXEh926cpMas2s97ESepqn7Azf3ZnDJouKi99xUWjvQQFMzGyM24RjtTze5TK87u",
  "key34": "5x41oFBS7ByRiM9YPSgh8oBBSBNkaUwB34qzeZAi5eqsoMGEXPY2TK5CBfb3RzH5Rt6QmeoLxRrL3fXMNfQVDNuj",
  "key35": "i3qpNhKhjfUPk2QwHjsMJ4CQS27T7FY1wmgbU2vHM27eHN6MuNAie7TVVh528ZWAUHApDkoN9hV3dAjF9WLZZFD"
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

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
    "2QCrfbua82GVqDR8rBqjSBUZVYJaL82AXox3ni4HqxfzYnc22KRzTf67ft7RgXhr4pmHHse7qZiMccrKyaLwuHv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vrGTPj39JBMMtXBefnbWJAekYUcidndM4JaARuPFMETs8fZvpkkvVKuhAhnh2bes41MUe2GDLMiZH31YyC5pMF",
  "key1": "3yPYFSyjYwzE6qS8QE7evKaYVHc4LM9wLnevb2qKL7ixWoaq5uTzi5yJ7SrpsRLhrHq3JAcuY4AcEm9TcinnfG9u",
  "key2": "2Wzs7D4ZKmnz8HvGQtT8uSUtttPnwfyNGs5yKBM3hHBRzSMHxzNhDqa8S3o8JxBTJ3e8NNfDrhbBKQFR7aTuc3EB",
  "key3": "M6zP3BAfWDmewyFZCdHH1C9hJXSfZYFGEkX8DpbJUtxK73AHiTZf82hmJAckwDhtQ2J7dM1dV3RLvpiS8oKxHEE",
  "key4": "2BfrvzNHHVSuChzzk7Fz9ZBsUHT9CW8TrDND2EgAuRzGKH1YVUQfKoWMVw6A1fNGJFsrRZseuRBdU1kApDjxwrA1",
  "key5": "2orXG41xPzzHQ33QZFaBBx6UXwx1iAjSxC32x6Lt8NiwjUGP55NSyvLwXKbTRMxtMGtJcmvePE4fF6rg6HN7gydB",
  "key6": "99UWtVvXjeQmgxfZW796nivEoLrym4aRpqvbBvyRDBZ9tiJFNxLmVZXFSWfkutFmmbHdJ9y422LiUuTmrp8higB",
  "key7": "5xjPxLxQJ2e1UFbvno3vAd2eCDUNPHmTnMRXuuASpQhSuuTSMfRzQdE2kU5PsZcDC6PyvsLf4wogWn9UmZEnp6XL",
  "key8": "35sCn6zhZyKcvxZtNCnYLVJdEmGSVZfuK2gAqhvZF9nEw22WgxPtb3LNmvju9nVnLCLCmL51x99cfMVq7PSNoQeL",
  "key9": "2P48dm36Y7a4mboZ7MXQ8548srvhdm9u9LRXR7GXYDFLrJXWWzyueGgHipaLDCqPsBuY1GpesBcUMVc35aG4R7CF",
  "key10": "4f2sJiBTuLaSmYqvNsj8Fqq8GxoEV46yhLEK2Rp4DESAqbs7ysxraKRVcQipwrVtbGb1CdxGMFLPXTc9FH6k56yV",
  "key11": "3JJQprtGD3Ydpk2yYwbH4rE89NjfTXysFNQQYr3ETK4FMtjbgpbEAnvPgDfEDQWNVQWJvkVA6RMtVjhrScDizb4c",
  "key12": "HTsbCXy7MBCmfg2u6J5sG2fpEoHB2sab8a7VB13U4D8QZEVkWNG5iTYzhK92HsV9bY922nFAhpTKdUmvHuUM6Ca",
  "key13": "4XQE8RvU5rRf3gyaHoQr6okxzcnh4SMorZo3poThWe3Nw8jPvHfKqnrfYL8VPACBvzr3Am1ocDzk7X4J7ieHGEbU",
  "key14": "4B6gZfJbzbUAy2sqgdnJAawy5c4xZEcw6qqGEUtRxW3wSonqwLiJGyxfycudbNA1zSLzorfbL5XSHjgKjPU45dM6",
  "key15": "3usAJKqmeMwrgiTLLV9WfYfPve8U6DEKPfbY6FoimrCMEQdbm5HNDJG7UskdvyNgrYWhZxgcRENMwuj6GvRGBgko",
  "key16": "aKEwQ7g2Sth1Grn284HbipDTBSBCdBYgH3dwzt7CW5zhKRMxgYyZkBsRFoDSJu6A3CBN2S2nJ5wU82LYoJA9MWg",
  "key17": "5ith53VzK8iaUfaG2Xx4bGKvxHKfYiZGNMhTifXbsJT1j2tizho5a5NF9mLCfzes1dqKNECLuwr43cTopXeQ9Mrh",
  "key18": "3V6GtuWzHvdDDxA9Kiiza2XAXDonQDWCfkrCboo2WFjRxaXSyQ32Qg9rKV5xFCih5MxMAYdp5YjQx3D2R1bWgZVE",
  "key19": "Uqb6CZCKNBctYWv2wSa2CvsLfPYcixvBfvcp3e5gEHQb1J9pewbofK6VdN23swDUgMHG3YTN6NA9KY5Z6RD5rGu",
  "key20": "2ACJCyiHWEWn2tySTFdBo5rRo5uxgou7LTH9RKN6xxsELCabVEg7rE3nKT7NFZo2ReYgU4SrsBiSetSkvCpf2PN5",
  "key21": "PRe3gJXZuHKvaYfaeS4ScJuYv4NkqnAL8jwEhRBJprBp3gvycmSANirtVFEjSPmDr4h1G8UduEPK1UiELYCu1c3",
  "key22": "25FaKZ1sfPMWozi8UMJkxGUTvwa5q6dgNHzLwXBttuU8oZ9bYRJ9sCB2rGsUmv1CyQLWo7qv9NkGRauCF4t7zDyX",
  "key23": "2CeR425N6kzWEwGKKUXVBx2LMWfEyy1U6oYmYUhHX8BG5rYpGYdBun4T3WmvU6fSmKCAh5pX3mbndKyzdNjrYLgM",
  "key24": "afcg6x3EsPyX7emLZhoBCU9QcgTZy6ebUudHua68PnrxPprjrvDwXy9Z5zi7zdmbRtbmodeg8JoefFhYh49jqoi",
  "key25": "4x2JBi4euwwQYTXpjyKiCUWoMeHQCccL9M4iTm1VLnkunw4r6GMPV4PZ9XaXkZ2JXMLKdPZuch6v8hgxGakQh7VR",
  "key26": "4pjfmuyNe5iKZ9DoqKpYCyhvek97pse7SL6Cs1Vz8FZiuZkbxaYrAe2EypghYdV68T5iuP84aNizmEndpHJ7TBgi",
  "key27": "skDvwr6UfCvZ9ZujB6kHRaPBGDWnfkukSYNLFwSYUWeuPCcaKbSfYdtNLSWjkabgUYRctUa9NXFvQarVyyGSpyR",
  "key28": "71Kd9zxiPHcd2enXrrERfM82ky3Qe987QqParVCqc44sbCDzXKfNvULNdLBpWygz6xugXCkMn5oqs8mMpPERsQ4",
  "key29": "38GRq6NCYJNbCzhTkB8Pah1nuCRYmcfFVwMj6qTFxy3Ay1xhfDesALxVHRhxfJDdX164K6zTmWBeaB1q5WJrZhBs",
  "key30": "3BZt8J9DJp1PK1eNrfpSB9ViDrDQFTHLTcWFxk84kuSzTJRopz9HAhmRSiHj66738BZcf1SVjyBY13xjb53iV1aM",
  "key31": "2YyazwBDS5yN7Fzfb6UdYUqrdceEFoiUEqaJAuUoyd5ReEBNwwikcZByBM6nVaLP5GnGPSxqW3XhFiC175kisLB9",
  "key32": "4KM2wXiJPcQQnVpubBopGEZaCQFea3Hd12SeudsjUHQJwMJcj3H3dxFwEzEe17BTjgFKe6g3Y1hWjAwL62QjNWUN"
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

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
    "261mMFLqMnoYgwdC11JBmWNzqDUGm5egLLCX9HktQ1FRBFrQDtuyhVLfPpeMM7FxfYp9W9pWBiouXp3GABtZn2Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtFRC6MGxiVeayuZ3HGXpP7jNK2RW3NK9PLBdjPV18prfRNrgKzh7ZFxjeYybmNwi8nYHfnDm4Wszjr6nqG5Gdj",
  "key1": "29ZhVvkwnJ4fMJv8QG3KZDzjkeKsUoEWvatGsTppAHJiqxybgWJzxrz1CTJXS9Adn4YoGzHacJWn1aKBaMgHp2NR",
  "key2": "yBJtjuYF6PTaH5YwwN8mxouFVA5Yz1uP7B6ye2soXcMH2R4HqDFTMBeXmQ9ZAgMAmQhmhmWjcqzrveNJNj2NbdN",
  "key3": "2toFCLv7VUQ3tnK2X5F7b2toyyyP8fJMDjbTcg1LPfTRPH6mjgXnBUD5mHH4oFSfDpaQWbz9zuKDHw3kqU43XQFe",
  "key4": "2bsvRnaaq3GFHpH7RLVBj4H2RznH1MDYmWggzNo5kdvbu9CFG8kFAgP47CofB4fLgtUV5vcvABFrdBWegJmVPGqy",
  "key5": "252b1E3jzvuiw61ue5Ugb3ULqcsqJ8KMMYUJGKFDZoUYkFN96V1m7mjHjHLdvPbjGXAnihFy9H2huYmQrw5gaoEj",
  "key6": "39S9aGinsKS5vj6HKr5oPvzRheQ5Aw2whQkFvkWKbcpzumxW31MvkXzKsnqSMSzwc1r9chWZMBsCNVvxgB7gBKvk",
  "key7": "3q4NkdwbZgW2L2AKyoqBP11vDcnR4Vp4mh6gN5mHSxLA4JhdNyznGjsLfqNSqLFvF3Fb8YtEndbUgzsavtRzf6js",
  "key8": "53usg1rfjaQSm2T6drpaMG5fde8AEPKYdGRifyYrYDERaPMeLjw74XcEqyC6hE2oVgWCCaPMqDp7WZoh1kb8g1LK",
  "key9": "3yQ9CpLNM9YCuBc4mpjYrR3w93iSLUZcM9KJxKuMa5Dyig5hNV4Dr1LWMndF1R9qtHgsh87c7bTN4LQmoQg8L9pB",
  "key10": "3UcqMvhFApZU1eQe8DcCRvnMJGv2X3x8CuPnAeYt7Y1qn6M3TGtFvAWkVfpXjMSzEHVyPcE7MA1KxWPWZrzyY8G1",
  "key11": "3fFpwQo6eovn51c5WMKgcHxAv2gxEFMbrwgEob6bjREe3C7U1s6sdvYDXayCkdW5nWGyt3UVUoMSt8PoGxVY3e5U",
  "key12": "3qD6nPNvzb7VkcPvGAR2YmtHq2bPZXUBYTJUVR8JNtQAagenznG1Gw4Y2PtQR59Gy5iTfa7asJYwwUR9jyVbrYUE",
  "key13": "s5KbbHtVGxdwyDUHx7oisKgsdqZUqanfeWGLbJGvzCkWXd9VCwQ5bEu3dQHD2SRyJmUKVx1LPYJNUhVryr7Zerf",
  "key14": "35izXM6gZJc91fLZewvyLCRjEx71EJ6WurQQRwmF8MjJrEjiCTUQDCT5bGi1rsXyHxPGrW4h5c6dXLsmYFpH9AES",
  "key15": "37iDZT8mr8AVXqokViRkSMDwMZHNua6MaZuQWMZ6PnKTzSKHooN5W3WiVtWLK5rJWvkpawB7DSaMkFmxTYQpHkq7",
  "key16": "Z5ZXCyGztce9FVDLtzr7jVHz5W7cafW84JTQtgxNDDqZ3E52UUku54976PPXPx2oStWkvfjj82f6hMypY7sxu9G",
  "key17": "2RGPWFeXDsXsteiyzzYtvigwzBxnTdvAWgTSSsyGeCSGyuqYdZMthusqi9CpaWvjbLqNSdbTdYYaSKEgx2Cn5BRE",
  "key18": "wqNJ3D9Xuxsm86dmboBtx9jpuKYJCucKjmUuYBRrdHGoYPPaSMgt3ttSjdQ35dB412ahUi73oGTAeLu72VF5Uf1",
  "key19": "4Eas5rMHeET6KEv3d5jgfWrdiBgh6qckiamvVeCQbmrXbNhYjcxaiXTT43aLC95FAP7g6qBDrhE2DSLRWDSgFzjU",
  "key20": "3cmqwdzNUMsUJAFDyWr3xFfFuTVkbx2ZaqgX8frvwQHnWnE3pxYQJNZomm1N1PNim33FG8ovL7PDjHfF9HDL3Htk",
  "key21": "3Vq5Xmxgsr4kshmaYrVBHqzNNRXrjZrfdPsFGciHMpyy58QPiqDDUHtcAXtgdpCabzPB5Em2inMn8DsEX7KjoewJ",
  "key22": "2pPn8qptamVGyYHR2WfyGWuBjCoYr1c5WzAtfrk1gE6shTFpyrpqbrY36c4ya8gTr56aW7xKLdkvVKbLhK5xZ4yY",
  "key23": "668MkZJLT5WqDMmeeeJxpqCVSJo2E7EbjmQdyWAXznhwE1LE3SGZWppZbxEPKtX2ZavQcW4FAYCVTwvSyzJTwBLb",
  "key24": "4rtkXgST81gF44rVNr8XvXMi4fk3Jmub9sND2eJp3wje5RaDQt97kDWVFV1cQSNJShYpfXsLeLN2AyrDAtBZJYbQ",
  "key25": "DuzrXLbjQfcCo3gAuPV4ByBpnYg7nWrj8CddKtpcJ5FEVcP4tVMAnwrV84rxYSv676jTXKYQmA1dn5TE6kU74Gp",
  "key26": "42ZKgvLJZrpX8ew7abF2MxzhgwMAxqCZpf7Q86mMg7kZeHuxgUWcv4775FG8uTGGV6jq4pfnHWRqQHJmw4RPn4Ks",
  "key27": "3GhLuNXoEikeDXx4aWoCRNqRKeimjppNkUMpeyaaTZW2cGLXejP67wkEXambihemCHMSrCRZJnXU64gfYVjU1jbG",
  "key28": "t27pX4zL8Q2HK2evbe7gWMJWXXCks82ijnGUH4ZiH53Det31V5GbxyTMFMPpBp26szq5Ry3HNZT2xMFVZW4u3qH",
  "key29": "5YeyuJrsJaSUX5UPvaWsabShkyhpC21nUkXeNYFbxGHyWeP4JSZyiaHZ8aXK8UqdhgMiSyqR9PmWjRwAbDEryvxu",
  "key30": "3YqtQUgJuXuqc5r4fBjvXhiQ3E5utYLS4Wo91cWm7LZXZRxrsEdXR64jBqWR4PTCSw1uPBGZiNyBJ8J5Cj6Pe5V9",
  "key31": "tHLFJtQGzW1xAk8iaeS8b3wKG4a7KHbqrEx21h6rGWAgwbV7FqwSAmxseKb5ErEMYKF9NGE7fDk5qX773fkhT6N",
  "key32": "31ee8Uqhkpq7ufTzp7XagueZTvujdCC8dykfCueDN8Jpb13dR8t1eXJdTqeMvBrwYgqbez3vdCdFLpNjERLddeRE",
  "key33": "2QFFoi3jwQwaB6VmfZkHK4WHiCyWoDKinpd5wrh4MqQkPPYjGS9vcmkus8iSoTSFAaRdPVojmHPdMMia7CGg4yWY",
  "key34": "TEfENAiZbXkRQrvk72uhkpyCdmYQsqzCby62em7e1AKevukaGTc1nR14Drg9qDvcNELqcKb8L7vuvNCoXSeZkYY",
  "key35": "ZvetnSctwGNHu5VvFiAzvqShXHFg6EyUwq2NcFVQArehmD31vSMSGu14M59EMX1MwXYAcKCy1g7hY5x52K4qahz",
  "key36": "2CppcoBBNUijq3ZJZJ5U7vU6Ci8hgHRhFTHuMFDMpgCJT4YvXHw7e1msWyhWasZyTbEZ4m4YahZKCvnuRkCHC7ZD",
  "key37": "5sqQPqpB83N8nvhdn6xs7f8AzZsBL3KsdT5M9Cd6QH1uWmps9MJNa4Cb466Ag3PG4wfz8XhWuSsxN5P7BrLWJBYA",
  "key38": "9hnj3HWyNndBGt27pmFV5fckVdjuVvgRjFdtSqLjFsRAH2CsE9SCuDR9Gq1mtRriCbjAjRcs8YeSgdwNvBU2kQG",
  "key39": "54DMtiLp1FBPZXxJqVRieuU9vPyZaTeKnKyR7XpL3ZYGxkcrr4RdetJ56DQvjPXyxC3MHfo1qCUd3NhsjvxLGJFx",
  "key40": "2uZ49cx6hNRpaudCmXhBXDbACHpMD66URcbivUE7ufScZqTGRssmdum1Y1QDE4vxAtzJtpj1FMJ4A5BvQiv8sqfQ",
  "key41": "34d22cXTpTS1v61qdQCL2DnmFyw7C3hV8THWUrtYdAFY1oJDfnWpbL7tJZwgz6EgKzB17zHXda1KisAikEgFrCtH",
  "key42": "2S6ggBnW2uXQPuFKzc1JVKMAVM33GumhA8HpuGAbCjeYYyDs6LTqtMuXAFNXhbU5AdhKJ5rfPwLV77Wo4Luo9tmG",
  "key43": "5Ab2MSNiS8XvUTm118JdZa7wS3Zk5VcMdH83gE8EQp5Mg3GipZsWw958kM5bpp9fqnbEq3qVyCLPzNxgj8ExxQtu",
  "key44": "5ka6pV6Wor3DdyGjWLNvCNWuWwjRZS16pBzVEMHeCRxwTnsoMDD6BrGNP6CEtwG5wGrteRcgF23n46CMh2zW9Gx"
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

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
    "26uoEd2pc1xhyJ7d3KhEWUvBLPSLFxokeAaPvM4QjRJbTxAsRpNw2y9yeDxHZDT16HBnesnqD3qdYqcaYam95E7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D9jQ26zfEK1wGJ7Vsf7vTZZxY8M7Xrvyt3zgM3MpGJHVUYuoeM2AswhdKwksT2qXtfTYzR5bjmj9qn14w7Q6CiB",
  "key1": "42q6VJLDnYV7jLLZcbNH5qyqjbEF3oYVZu84kJzpRi8rUpnovkg3ZX3AdKNCJXnLZGZkko2Y9nk4C4nrGtJ17bLg",
  "key2": "3dtXqgzLGw7Fb1odWFHLKriRcpHjSUL1ut6Vb5wP2m3vy42Zp5kpcEHktUk7b1ZKsEQ8CKVGjVco4NrFb5JJeHRJ",
  "key3": "2TPgBJDswNHnY4T2j8D53xRND4TSYU3JBC2FbeMJ23WuuTn9MM93GLY7zgLSDrAMp8L3PeXJPeNUPo7pQgPp7S91",
  "key4": "FQJeLX66oYniTjbvuRBAuZQrsHR8HJDzHLrMJdscy4v6dp7WGAjgXRd6KBySARcZk3mMqV8L4jX6sbQUs4bLBeL",
  "key5": "PCcrY7ztiFDqa9DmJaCrDrJKxghGv2BQLZJq6BAfn3XGmnx84gDPyQAKpjSHWzAA8AkarNrq6rq4tQwyANtpw93",
  "key6": "4THqwQWrWQRheRY3ewajfRRKiGhafebDvf2VKFYaZPnarZT1dw4u9x8cao8WXKyUVEnFgp9s277kRHK7Aa4wdqAF",
  "key7": "zfdcqK74HqfCGPn1vufNrgtwpqJGRtG5oHJ5AFhmXZ5G2chz3cdyipGBt2Nc4bDk4wHDyuMzcN8iZDNvCaDpCZd",
  "key8": "3PRXjdrJYH2NkcW8JyEAV33tcRJ9VfmQp1Vwv5STrpHeSto3YqvDdGS4d5sx4SCQtQvfHfkKT52ERUVsM8xWSWMo",
  "key9": "2eK9LAetmvyZFkiwdaFR9yWMw3u4Va8ZxMnfyTZm5rvDqmkGcPkp48EViVRwj6XuxyzUaJMgxmX9wmLuXQNeSxez",
  "key10": "4QVjQvgd5ndLqabz1CWrBosw96tx1hftQBBp1f1BYKQ182ZyvEz4MmuDroCLZmLsTTXGyyX25rgZH47HRXX248mM",
  "key11": "4343ACbLYwdQDMembin9g2VghYxdRDjct1yHEmBCSyBWUtmdj5fLGtkpGTbLkXz17xoz3sn13mCgqnaAFY8CMsVD",
  "key12": "5zA1yjjbzAjtMAccCC9LmiG2utp2M9eDws67uMhN9QAjtHqTvXkpUSGLVpVmWJzaAq7yMP3fXVZGM6RHh59Tk1XN",
  "key13": "32fsYiDs6fNeYZVRVLzbLvcg7pRg2duy4rwSK7tZ1stsZuJA8Sb7hRsk6n1Gy2sFQAzrCoM7cRuGzPiwsdBETF3",
  "key14": "3SXpmLMX2SH8VvCpeVpNA1tPRufkeKSCCLqRS8rwNmGsRSSu23wSSyjs1L1SF7oQFyTZGnGppFSsWgpgo5iQCgBB",
  "key15": "2XFsAgYu4VMCMpngRE9q6LWbGe13T3oWX5hZ57iRGAspBqWBKwoLoLoVL4gqdEAZWNaR37Q7nwcqdccxeHag3FZK",
  "key16": "3Eod9d1n4uct3hH3ikM6qjiyhZVuYaaZjj7qcMrTfWkQAz6XcyUJDSqB29yNw7FHKTfjk5H78kCk48VGnuaAaBng",
  "key17": "3mC4hHtUubKCoQ9qvRfVAh8SvhPQfbMuG6xaAifmE5FCFPiBwhnSuybErzpPeGEeR5PEhNEJjwoKBeSR8n8iXnvJ",
  "key18": "5ms9ocbJWwcXnRjJpi9EUhjeQ2D3KHTiVgQnSSTdz9kqaTrhMzj66tSV6Z6Wgv6jDpwknWtdj7ajqqn3kcxUWFrL",
  "key19": "2wMLCT83Zf7qnew3o7VWT94pXJV6GNkqc15Xx5mTaDrV4VRkkaFEnsadP19aemamNcYoxVdaSNoVvSy9r5MrTEH5",
  "key20": "33GhikmhUHkyDB6R2AVnGUP4E7u8wfRFB7kF6yXBdoXgxU3NiiZCvzh5wqevSYLrGB8287is2uPGazi1wwAR2ZWL",
  "key21": "3hVkkBbgjmb3yKTpdgDzZu2zEStaaFSMtaof65cXj4RVspPQPisyipAf3L5PJnuP3WCzXNGvB3i7S9PXCxf622Pv",
  "key22": "3iee99253uKttYikx96q4Bu2RcnmJMRDvrdErMGE6FajUwe8wMBN42w28pE5sDruo2ztGXMP42eNAULtWLejgXNi",
  "key23": "39mpSVFPNHFFSPBftKwjZa6DRt5a7RVGyx2gqEtSdUmC5FZpvgfPEzG8GmAsZvBDbywMq9Kfq8p4N51eTRLB7rV3",
  "key24": "3Vkw4s7cQftuiHgtdFDHNQmKNus1PGJqE1z3UgPH3Mb6pKWb2ma5HubVDMjimVZKYdx8hUVKpLuC3akr86rmurR3",
  "key25": "2VbasbsmryEkJcJGGcHwkaDLMu9rvqZavWBYmd9PpvyXwd3SRjqBfKwY3QNy3YjfPr7PSYxQPCKZYSVqX8abKFeX",
  "key26": "3JAA81nEXQkYLgdyj9zij9ajhD7upxhS5jRfSej4MdbodFRuXfBT2HuAJXNCXXYsPZitqKiwxqtXxR8deqVu5MNo",
  "key27": "4tGVjgtGAawjoPdzY7LV1sZeXc1C5TGkbatYJYh3wpEaifeDWwUdfRN1v9HGgsMdj2WUYP7EqHE54YdSwVZxxcfE",
  "key28": "5XqAgd8pwCrW3T3z4RjdpMC78GzQguPEF3rbKFeWP43mA6Fxiz4Ng96oXXv8jfXLuApmy3bVenrPFBADGxGaeEYh",
  "key29": "beoshmhU28S9CWHfnEgsfuGreoHcTRA2MUGSw2ZMSkazA2Ly2wf3LamD7BygttioAGfrEVfwcBoM2oBrs9GDow4",
  "key30": "3fpEFgdJRD5xJE6X3fgb3RGCmonkbQh9PGL3nMYPR1bhCrbdbNv8UuWxp1UDhqrVMe8F7kiNsY28p8JevMUpPMG1",
  "key31": "t79R3fGbRStNMvxvfAnNBkhGXSLDCe36giPEZFHL8LR4zjqWe8oa7rTYe2QNwxf2wmjc4iHT5pArszV3j4KfZUY",
  "key32": "55jDdMftAQg89DuRZGe7cBRi7AbXkRLof9fU5i1TUYTtMsNZcaVkpH6uohixoU4LpH1T478kVy65ygezaiWNm4Sg",
  "key33": "37QnNFi4C5dPKwStnjJGqqXFxryReHRg4Mr6rbhDMqdKsyFEgetKqJFRBpyuos6qt1puGBUCuYowKgP5B2QXP5DL",
  "key34": "2B96SS17iMouVeXW6tkvBEq7TEYWMCgQiAEsbVUmsbcgWZicHoRw3uKinDJ9fvUFosaxbUemkRkH4EHpLFXwd4Mq",
  "key35": "24vd5qwBUKQTGuR8bSBL5gk6mEQfxNgbfvqpkiVLGs3UVLoVV7dRm3Pt18scvg6MPqqGUp18pAeSVaSAEWd6mGQ2",
  "key36": "2XKphCMMVzY7i3Wgg2EVFAs1LXH4iseZiWk9QJfieLmXsCts4E8S2ELB3dNPXx75C9A82kBvd6tELbjMV9PViY1V",
  "key37": "22ZnWmnNhYBPipYfoW2ZkdU6XGM1jiVFGYMeG3Q3RmDdvtyqQ6C7FysxFDhyRhEvcbgzUudv32A1JZFKuES9YpgF",
  "key38": "2jRnTaQJ4UQHxpVvgiBLkf2ggK4QdqBaYVfQsFbx2LHDmgsPXvCDKQoFdPC5MxLWpwzLjZ4WSXe5moY4z6d9ubhM",
  "key39": "4QMNNeMUCANwuuYQiL3jbd3nJipKPtWGhcgCiz651Sbq3xSnJxGAh84nXjpD6uqPVxzfUuTBQnCmigCYoou7TKpU",
  "key40": "5j9iZcbSpDoShNvR3943fg3Hsh4dPWU6CfY5y28TMF4riaaeZU7ZJGaFqryGpzKUAR2BTb9kkN8vwzykGXbgmXf",
  "key41": "2Bb1trNEhvzGGqhpAjU4ne9Ake9ijuCyEP1gbRfnjdqXbd5PamE2mzfD4cuXdG3EkR4GZ6kYQdzLxKdSQPr9nmkf"
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

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
    "vUTgqSd1USHKZuE3Tva5tz2Wtu6DFQ8iGs5xXWemrgD5NwhnYgE2FicPXvn5bCqda1PecUxgUAn6dJQ64jnQoZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QBw2GEcBxL8UMiW6JCYsm7848EDmdqm9eMunbRbAUUKr9mQdBcxk7AaZt17qfrseLLyybNe55dC4Bz6CMoAfUJb",
  "key1": "eAZbarYnjUPQFYvPkufVKJNUVyS3Q1v3sFZukJgt7Sbx4UZo7q6dwN2SnUqHQxWL4gHnX64tuW3SB8CZXysQ6wZ",
  "key2": "3vdZAHcLwPB9kZ2pDnc3kLo6Hxs6qySGrMVn6DqoaqjhwqtLHQNusRkh8wRoUcrRYaFsrG5WKtaLdvk8SvkwvWif",
  "key3": "5gcAVNSawVcFaFhsieFkhUZAWox5cheY3gQqzBFTkpSFkXUwPFWw3wF7tnEv85j2yFq2zf3f62LuCeTxuDxzFP24",
  "key4": "3a6E7h4DKt7jDTSddiFyqHvcB9LpLNGoi25GqE3tZamPWRebzHbou5Ey9XMVSTeFWkm8qaxea5VeXiJbFf4EaBNP",
  "key5": "42YCLnhaSe85VRvNGkR4E65fAwnRT9eSFxfjNi8oBHSEVmXMT3FNV24udyfUXDzaJa3pFeUBwz7y4bskmDYV7ozW",
  "key6": "6wB4XHWJr6t8CdaN7Q1Z5jdFF3ksZcM1vJ59B4kJWxuiJc7ob8tq1U6GihK5mVzuCBweQpZsANudpGuatmiJYTJ",
  "key7": "4Vp3Q8TqqR4W2uhndZqn7EZccUdZSotf5Utq4vmEM5yngdYcB5UM8C6xk34isPq5hHFY83589HrZLWTSkjNez6TZ",
  "key8": "aHWfApWc7dwsfHf4jC335dFJLW4YaDnFAzG21qNvvtoVaU7VT8nbb3Vo3jjYrFfFqixM7XBc8VJvbLAcBmmGeRk",
  "key9": "5ZM27ARxMB23XSS2WLv4rTdnvFFj4ucwnRTcp1o8UESq6QhRZFTPgTFNzdkdCn1rkELpz7bFWFx3qxLqQa5MjYjr",
  "key10": "3szgct6BkWofcoNNxh8oFAtmGd48F9BCnDoAFx5YPUY3EtHrhHnCHZyfY6wMNVTDmpBULJh8yw1Pe1vf84EtqgiU",
  "key11": "22znse5U9eNkMkGpAGFMkwiUcbErsPPNT3F3FaX3ntaC5831ZAWHoYjmeDW6VkLk4WzgjkxUCm3crzzhdrMyUhF4",
  "key12": "5gYFX7KLWVbGTFsY2VDhc3fPkx59biBL953Gyx7eEFTBfbe8tkZiKggeZ5ny38k8bbNasardwuKXByyxfU5s1Pmq",
  "key13": "4n5epeotpoEXrstSu1kN8KALFD8z5GpK8KMEe6HjSNGR75Ajm255RzbE5mBhTV9GFXRMhHaV5xJFRteXs2aVhu1X",
  "key14": "2HgeyjUBn96dzUAuUHFbhimYPrG2AiTx4M1V7yyYECp34xX8igG9NbPEGfo4TbAgSDhuujR6a1LYSVnfZrYxMmEB",
  "key15": "2G2uCVpVcUN1k8fLRxGf4JqsMKtVBwoVfRgb7eDsnFvd6ThhJHwPgRJakhwfx1QDYmAKPXLNDwKmtnRLZKS8tDoC",
  "key16": "4jw1yLhYR9Vvgk1eDBMKNRDdMZAoC5X1g2i5SZ8sfWkeFZoi5NfYfzpp1p1KuuaM4PmxTrADtfiMU7FiN2RadJqD",
  "key17": "4RenGhjTgUzCfAGWHW7s1bKAMVJovfR3qmWq3ikZRCjhGcGTLiPg87r3g7e9mmcFGTyDYEVE2pomUZDPKpB53j7",
  "key18": "36iMNpRqmC9qxaYASk9eUeweyQ6eJLZ2Fj7TGRxYYtYMPe8X3tBMPNxNEDNLXTJpPPWHwWEh6ZPLWsrUiEgZMYfd",
  "key19": "5d3XbzbTrrUmycTNGJNBBXuP67y27jBkmXHW3MHfETHgZ64nt7LcijmQatz1239zvkeVAFzJTKnhy5LnpeCAets2",
  "key20": "5YAXU7wux4pDC6jGSQQyJWqYpGnB3m5BnvKsGKcHBpizzuPa8DsLAZQcpUqsByGiibLNu797LTejTAuvvUrfC9DF",
  "key21": "aiJxU19bAmiieS5UzrWkfrbBTvsQ6vJZFZqsBiP3j5kdfHABhbKhyxCWFnkVaiLonX8iLhtfkp8KEmDsiih2z75",
  "key22": "5Buu9gVMX738Qfqe7hg6hu4wDGV6wBHZDMxWjG95EmxUWendMrjn1BzN9xrFvhKbSBXMLEgUbd756Y8VqDyzcvJd",
  "key23": "3JsmD3wRMLEsi4mWs1fzXT2PtrAXsUi6SQTbLw1FXJcKNS2sG5JqsdFzeBK1TZSfSu6VBUZwUnTj7zLgn1oZ1LB",
  "key24": "2Y735DyYeP9hQ2tZmN5cnT1C7Ntx5Ku1RXakSSCh2MQi4s2wDY7KQ5PcA6AQmCgXPAAK1SEa9uaF68Wr3DGAfRJS",
  "key25": "2DrNCAW5F5wUg42RxUEfB5saQA3yyhJCjyZPZK5iDtNDKtxL23eQS1VeHxaqMivLv5JjYJcJg9ZtCEWmmxXMB6zx",
  "key26": "dWCFPLAWyT327VkpxRnYSGB5xDMmV5QanWXtCrp4CGnv14ibqrd4vMBWmo4pTpUZZG9pQDwkk3VMZ5vZHxnma7Y",
  "key27": "3uutrpoPqYa7ngFVazUNbPp3J1s5CxSLgBhC5vESrzkT8n6dBk9Qf14aNXC6fGoVApbuTcFvtcHK89LbaEBuCybc",
  "key28": "f3tQU3kGwJXq2845QKaBw9Gheji84QKhRuf4rTBDPeQsouWNBzbVxMUwLKp3SenWkgxGzp1iveZsV4d39iC2dZL",
  "key29": "5eJX34dWCNCUzd3ytKwAaf1bWQ6mEWJtwF2wXYHHHBqyjboenTWfieatZmJHd9QMhf1s5B1cfrzZPw7ayuCfYwqA",
  "key30": "4d7wgu5rLeN64d2YcGtD4CX5ausoZBsrFdersrdQchApJZcRjNHG4FMDcTkaCJyoEsDB2zZJnSyvjK4dtjDqdKAK",
  "key31": "4i7EvLUqzRuaBbkLRf2aSxEZNYyUXbfHLwndZPBrvqdKVLbq1xL2AFRpR1NV4MxAUnXavwhc3NBC1QU5VDTpVx4f",
  "key32": "3Go3HsYYN4HaCyC5Poyp4MxqhwRNW8kp5xsCxRtRajN7UqXvKsSFGaaz7sMAvWxnzTMrisYhnuTQMqVAL1YfCMeU",
  "key33": "25LhVTkEr15JzNyaTzpeWVpJLxoSUWnKZStJcCBF62CiNEcuZJKiHkseaadW3pNhBe1Zmk37716gjmRL8pwqUWQp",
  "key34": "5RmyC1PvW31fyD2XgJKNGbffHhZ9vtAFGmvRHaGbcSJyiWSQ5pDqboRYihUxYmezAqsTCMFBKm91vVgjnNd5G2s6",
  "key35": "48xJUx9C59qio5N7oGd8vo7LX5mu2gW8PoyYGgHkjrEiVU7uVkQkZsRn6SA1xW1Rt9wFkzSXxpvfrBQaJf1CnJsP",
  "key36": "3ZwuSWj8PYtrEkqrHPUFoTu2CEkDJLQf2viwAX1i9rxQtxumByhDis31viWLeWpdsTNHsgYmHFrCk6PFRUVScems"
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

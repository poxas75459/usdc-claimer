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
    "2W2EpSKR59u4H4mx7yKsjxnvffw5ZPXTP8FJckLKSpV3MRpt72wnSv3CESWX6RfKJMvKSWQk4wXdFecRPwhEy2kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dnLRcRC4TCgF3ejmeNzdfwjmBSoMX5KxWrfiCBrGuVtx2F8TntXMdg2BrVjCwAmKZHDcD4zqJyXJzCzhPGjBS7c",
  "key1": "3ZSDxdPBnUTUHGiTXvZ5NQ4Mju666VwWAbSTmAopAbJYSKx5GwoeBbyXt81sKGSDPiLpmzu7BePxqVT6uEXasJBt",
  "key2": "3skiBD9DXsDkxwRXBKbpADcAtE9ZJZwYDB8eFAZVPyd39trNY4wfFu28qFV5aWJKiaDFksa7UaLrATpzQYBJxigf",
  "key3": "2J2CCfs11XuZ28VsXJBwbkoU8fLXDPNm4HiKejmG8L9GykArUxs7vbXVn1tafdrsgWKbbw5i6w76FUNudAnifKWo",
  "key4": "mcHovK8RTEBsx5uSnSumcyC5Bmfys9t2YiNyYfwuc4xammunhDprSejVgeUpSPoh8zgZLGXBfSokuTToVzhU684",
  "key5": "5p3rZW4EBsvjEkC9nLsnEQvTo1GpjhWtzSExvxRAudhUPEgbJzP53vgh1mHNvdrLaYqA81BBG4HBKrtYuh4GdToP",
  "key6": "5vZYNsy4DVkJFm83FqNb9fah1XvtVPmDV69NBgMpHhgHFPDYy3LSV2Y7inXdPN2yx848ibHwYQKHk91r1e2Ag6EQ",
  "key7": "29oSK4W9ZT7SEZSChbXxJZpK1ZUAQQ5YBSnRtdV7qkNVW9MXX8jKz3D58wmyeaCH2AhEub9HJFmKvYQASmdu7dca",
  "key8": "3ZMcwLFe7y3HbAtZ7LTciKJH2pMge25wPWLmq4jussxK5fkRagLp3xYsw1qVLaBbJoukiCfu4DsoFysr8vN9XSps",
  "key9": "4bdaTk1oZszEf2caCRfvSoUcRHXe2BcfbhjJd8rRES3Nft6WMpwMJgAEYQKcRFJrfFMxKrLFND3NVsTmcnCzsE5P",
  "key10": "5XPodWWdTj2QXx9Fi129CEE5tXiikmJVPmkR4GbH2vVb3hyFkf5ZwjfiRxKCXQH3Mvh5di4rP4eyFod5v5hz7JiV",
  "key11": "2N5zupzEEDVBLsv3BipUWWw4tJAGWeBHkPWLH8WV2BJ7NwziqUZeHVKD33AJeFMnS8hrP7YMPN74sKqag5twewmj",
  "key12": "2SPxQqryvXDhKH246QquxYDopeFbz4ig9nBkHGzScQaQdr79LcwGCpywwgrj7D1fMc8tdDdQFTLzyAyuGxRrurbh",
  "key13": "3qnfqkkCstuhd94SDsiYGUQ25CJEMaWrWEz1YivHZniYwnE3JirWKAFGKnUdGeWakX3tTcCRjCBkPrsPfnKRoMvR",
  "key14": "5WtpGmJ2VtV9mxj8m27daFUSE5ByMw9jx628GCtx4rmRiUxLgssKEqrApLhfrCrEwakqgAVYf2WEq8pFTHagcovH",
  "key15": "31DNs3STgNUE351bsajv2PwAjdKMcQfPyH1dwDZcu5B5GNdLmdT8e7Y9axp4ku8byyXtLbw9jx2V2aPrkg4tm94h",
  "key16": "5Go3euTktkZnbHgkACN7VyegFzL343Sa8ici8sunDaxFRfuerS73wSZb2Ps3PTTGfruUUUfGkLUaFdeorEFJ6RhY",
  "key17": "5SJe2Jvm6Ua4DBLH436jT5AdhkuLUAXSf9md87sMw7p4G7YKPWQVksXE694fbZEgMvkUiriJXxEy7YpfjEPXb3H7",
  "key18": "29HXUTmrQ4oNNX2cSMHUAmSkFGgfFXQ9Vq7wvwzsQMkvCnrjXu1vHBWYgryrdsUqPrh3c88gEAyGfFs2XWSwBs6p",
  "key19": "3chazt2icB1Am6Kxu6isRE4vP3qmfr145tmwJHzMpCoUTPFbu2hNWZrfL62FXWujJtG6XJyN3fZ5eXMpMie6HeCj",
  "key20": "45BXKd2KCVP89JqTXXiwKwoi3ZGB2EbVjqhaY7enSpizJsxDyQpbA2LNWhcMG88KD9mEiWQCBZMYNUeUT9bwH6Ks",
  "key21": "2943RigzyEAZyLjjZWVvEu2rEMaWuT6ELDdePbbSYJvY3dsoDABjTYw2Y9fXL2bC3MCR3HwAtGLMBL8yrqkFmEfy",
  "key22": "nHtmegDUoyoviXm1KK6LPZYQCenuNXr2FWb7WEexxcfUiwZcQSnVzpSCcNXB9BW6N4GKEARtmXYrpRjnueN2DvQ",
  "key23": "45g3VVkBSDmbNxdFiPpgHjCRsWMk1bFmvatuCANoFM812TLCDqFu8vzFzkVDLmGZGQJQUGXHq6jLSY7UBzQuEJDc",
  "key24": "4akF4Mj8UeWgMv8TeLNSkibLEmCX9UZWTqG3EXfFJdocC45Z7XLoEsCuBU37SGgxjEv63WLySgFPb7v45TiamkdC",
  "key25": "BCEmNQVFEdbLZYvrCquPFZozZCVrNVccTpSWxzoprLThDoGqvpSayBR3o4cuMjk4UmuAQQeUXtADxTG6cG9D6GU"
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

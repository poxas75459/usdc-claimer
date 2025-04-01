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
    "4QmLjLZzCMpJezYaPrKPdGCJnPnRoViPCJYYRL3zmzAJJDvQwGxUk68BtboMphU9a5XrPTapdqgq3ps8XNbVYTs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRbzEp1auoq75aCHpCQAXcVG7ditb3NgjJf5VSx3uohXkBMTHaS2VBRvipWefMW2bqGiu7CoAmGM12h14Z9wWeB",
  "key1": "wb4weBYeoZFPNgwDQU8xkQ1z2CTtq6RSuFGHG9bm7myoR1iKCrHxHDi9TiLBiuhXxkVopoCJ93gFLLgpGy9Wgxx",
  "key2": "4VZcWBbKE884KFBMGswGufKXsR9nwFPghiEB1McQ3k7xE96np8zc737SKHM58MWvDpoe9SFeyaTYNSk9ZYyd2HVc",
  "key3": "2PNZSPhexTXBGbq4ra7DdKNttnbijsKx28rvpLjBNUWQMuxXPAskwehoYxbDpjVYkbzFyVmm7qkDH4uW2HdBL5zG",
  "key4": "3igJQhPxT7ZR1cS8nw8m1X6QenkKvdFbN54Q4ZfhnE79WYwDTerPgB6cpZGq878mqVcsUaNvgCh6xCHh6hpJzU4",
  "key5": "YdGn1pzdYcacDsZejeFZscGo61Fan7nUgaDQ8dHSUyaTdfjWxStJJFbeKLGQMsygeZNPQMVi2sszmyVnFox53H1",
  "key6": "2MpR3i9Snd5cZuQRXjWZGrcQZkXHiTGBzvEtj155GXv95t92ZouKgGwKN4o8WBD6gV9EJKEMyNvtEKo6eJT4U7Te",
  "key7": "4nhQm2K5UNNf5w7toEjftrooxhtSSsjKJJc5SuXp67BwaBRBPGsDd7FDLypeMbhV22idVYodLiYnUqwyX1XTFfKd",
  "key8": "2EoFEmAr9DB1XBbQuMjVtBXMV1yeudsiLQg3RziWCjEbd4pRY6869hMfeo2QS5hWFZFpJ9FequCQ77C7VqGVC1Me",
  "key9": "5oaxUo41PEH8fsFQF4EHTEsZBzyGGbW9pLgq5tZVxTN1Tn9QoRFjzMh5g7ANufCHkbU5jgVhhuZSXy7647GBmZ5n",
  "key10": "5sUEAyTygQZBwMTq23Q2HK5upB55TxJNmt9r8bkAZZXnQyCsmdzuXoGEysPSmakQTHxDLnXx1CnQFdPuitsGpLLZ",
  "key11": "2hsFBXUXnz5sDQqTtNbo4tVG9J1qgeUjf3wk7CTMiyH8nGSWJHt9LfSNbbgGJa48EkJJamAMQm4xtkNL9qriwNMa",
  "key12": "JdLe4RgciiL66azbaZtzeMUaBX2AW83kdFGdg4erq5Kb8VF4otVFc2jEuXQvLjsZstwe42gXVXGR2Z7PqYj4GKC",
  "key13": "TbfFfnUpFdXfXWqWUvT214Vm9u9vYdRV55aSuo3dkZy7euXRWKktzqxP4xUH5RBNgoaGB94YkuEYbiBeABczyxg",
  "key14": "5aFrRQpVk2e4cTXZokyrAdxQe31hXWu1QDYkVgFfGqSfR4XBtkjUFkVK2KhArvwU7iEMmWXmLFXMVRtuNABsscfA",
  "key15": "4B3BND2Ycfu7jDGSk1p448qXAje3EHiiazSg8kDD6FGPzdiuxLqr8RXUXZ7iEXk1H9qRsBBXfeGdZvq9ZMfq8Pvf",
  "key16": "2UDmpz5K2VY9KhVz6gbGPwqGHPPticwxrJQWvc8qrZSPMRVrfM5osep63aTsqyVF8MScWsFLLwWfdoR9dc411UUc",
  "key17": "RdFZMfhm8QmMtq7y3iKi1jBddFMC5xjMm9kjU6RTnPjr7XuWpHHSZHyUsbXeeAjC1mnHWfJiMdSJKdqt8ZyXWcH",
  "key18": "5JhC34oMrCexQ54LHjGJwQtjTwkQWHiY3k6hxBjoXEjRvriK1MNHtUaHvsvp7kVE2vuUkhsBNsQJwhb7t6DP5Kqk",
  "key19": "4vmHSvgtPaD9jFWEsUaHEM4VSGwL5gCHTSWbtAmgDn8QhdexYMCXafJxxGV3JbG5oA8MDCCkj2t2zcKjhxyhTt5W",
  "key20": "5Pq2u8tbfQ9JoguRFPb9cZd5r9WxRMpMYJhQjAZb5noEuj2ssZneg9U4LTCaqByWjXeHseFVZFARkRpU96RgCtaM",
  "key21": "5EURZbYW2KBtMxo7XicVwsXHYMnZRXvAVwN5JwzzvnGryxfgp1rdP5oKACLuPffBnatpSpT25DWv2R2MFzsaxCTR",
  "key22": "4DU8DU1n61pdrCV1KFUXJ43kYv7aotvkUcgXCsMicAagApUiGGigXBfCQVPm9xshMwjpEd4rjmiFvawHUMwEPhb1",
  "key23": "2FfrBayepbGu968SQMYSEYtraZTE1EcabTrXepHPtp8mDoNEyJ9r12TWvW8vMjbSmQUM4rkmTQhhbyKgovhgDRDp",
  "key24": "3jUTCaGuKZoQMXiMgaH8p86Nq4xsZBftfFsCLhAWFgMYmFtdE7aSbqCTG4rE6dPU9vBwEgYigfNz2A3WudHkYokT",
  "key25": "3rVcD1u9i335PhxGArRT4BSGwUhoDoCzETvgpMraUSrNE6ysFxor7FeKR94WSdaaxHTJF4dysU59xoRRTGNFtrk3",
  "key26": "3EoygP1JPdgjcCgrb2rJFQTwFxbkDaFWS7GuLKGkpFAT4RSpHja6b56ssdTHRoHLDstuajzCDcoyjnctV3NiAtdD",
  "key27": "3nqHgSHTQAnjWBcqTEworDUXAPxQiLuooW29NNZ64Gy3zWtXqt89GTaABS7EMK5ZPMseX8AKzPFWxMvGkTzrRSHF",
  "key28": "3AXV2eHCmJhwALpFdP5m1oBRSVUDeoP2q17rmEneUUjmxpKStBo8fosUDqSi4ghRuccCUc9zSc6d8S3iXgDYZBj5",
  "key29": "63qW8cPkzeSWVrrsBTyBFUwc2Q9bQVR2QbTSDkMA6qgZgnVtztDUGdKvUK5ZGY2TzfGYimrjQadBz5oVBp6B1rGm",
  "key30": "4CLDPC1EvPXQyVLNLFair5GsxvDMJXjyfW4jduDHDZB2pxpKaJHkG5rfkyZFZ7bZ2E9eAm3bXtFeDLwJJ2dRgdyr",
  "key31": "3xEhbRydQzR8C9HEycpaiW17cqgzbv4AmRCyCTAj44z2qLiAunsp1FWwBHVhcSpMQA7Ehg9cnuHvSqYAxCi6g8ag",
  "key32": "59LMVkXtYXuqsRdTD7Gw7RoPY4CYdHZmVEgEyrGz7bGTTe3ts86Q6P61gzhGgXfdb8ZYUSCxEsYdzwFrUaDbZpTu",
  "key33": "2RtoNXmgspyRUkLckyaGp9VfvPE8ck3mqosUC1oLMBQNaGDUZa18SH9XoBra3pkNP7zYKVRb9ckWwAabfhLBcPNx"
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

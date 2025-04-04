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
    "5xeMY42m5rzX7G34VJ94hRTkoVEWYgMXesEjuMCPLQqMCrqaA5g6Hp6dLaYWPZRT24VchvnsBjdRZHFjLwUZowoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oYvDTRxVoY6UnYfnTSLB1uUw2Z2f9mS1hWwyiLeypVmwGY1xqLRBGHr6cLk9it5MVG2nf3AkXtXWzLrKgyr7rbo",
  "key1": "nc7Me1Kmd5rZsiGf4CaVYKF9zG9p4F96JnWCBSeHvfv9HXzpBs1QUp1oCnnSERGeFKFYGnkMUyMZjSLut3Gmgdz",
  "key2": "466z9FrvZJhiK3BVMvm1ggathrNAzVw761r1MexTk3gDbJEMow7Q4WWkLoNTVYUnnwU5chJACVtyBPuRB4NeXBje",
  "key3": "2jjh1BcXDP78CCxWf97t5trEuLXVmmv3crERivUTR63rMk7PuJjCJxVhn1UWMPS9biAmsiq8xreot5zYFYvouNhZ",
  "key4": "478e9BiQCTgeLpeYEiwAU7G4juTFWWAUhp5nGRE2A3RD3B7iTWFDY3NnCKSuNGxZDTexvBSF9kCZJW9kd8L1YWFJ",
  "key5": "5iauN87xhAmGyw3PoHm3gJMjcHWn2Aq1ZadyQrY9ZCLP4C9PSz35z4CRoV5ZuxZbRXn9vGKmmCfJM9q3nzd7QeQp",
  "key6": "2NUAPxAg9fNHKo2zptGXrhD9VvkQ14ijM37uTfQdtX4hXBJhjMQmo38pGT7WQ13eioBzu8i7knqYrna2thJNNraX",
  "key7": "5jMETVpNySxioRCDCgadXLYdVnTDic82KtbgrxUd6zE7dD6BSQBKKi5uYksEhmd3QBUvxh9LAthUE9NtQuxaqLf1",
  "key8": "4SvhQn2fum9ypqFrJ9oCi5PrGnHV5FRRGZkEimAFGV9GZ9ipvxjECyYsrVAbQeYwE7iGbSFrS3gyoeQFwQtwSE9h",
  "key9": "4th7Ef9mX7RBSopn9SzbLaYdXsz7XNjdox18BQ3U7kZ6bLDT1gQNYYWhWwcK9Rdy3NfaeaLTDWMXw1Ss9D2AThp5",
  "key10": "8kNZ8vsW22vTaipxZjVqy1hz7JMS4pgDVaTeD9uhv6fcpDjHeqrLvn28U2HAVvpjZXkiJGgktBKHi7EYMHAxJix",
  "key11": "3PUHBaY7AmMyJRkLayZgtvnafeyxdmcxQQdSzcYS7LYEuRPVGrfTo3H4oaywCXtFSTVzbXc4PNFhxQb1cHiDNQDp",
  "key12": "AhsnDEhKejHhFdKQ7FX63HFpUJ1a7FCqFYqTUmqPX6RqSnY64ALbGojhdtZ1hdyV87YeTCi1QyVKBrSa9pk7R7K",
  "key13": "3N71cQdd8c16LfTASxxYgn3sCvKg5qdyJMtymtEoSWXFmDqRmY35fkVXh3v1HJ2roa2Ey5JswbcXDQNQ7kjYR6zL",
  "key14": "4yY36351LF7rq6WAeYmvBYUyh8Xp3Ly6P7cxqLfzaky1QQs5zJbPqRjGDxbScCZS75AKQ7x55GBYCBD4Y6CfGbub",
  "key15": "KS8kZegSnZ6FT9azvT26zwyDK6k4WVy7ubBeMHutehW193bPbS38Vg3CGNvwz4VDPe7nRwthAQkeTfekXfHsfb7",
  "key16": "65q4MPnm5xD3JNcxqryZeMEGPdHtxpNEqfgyxP5RfbSvsWgckEAXpeekME6HqheRaq6hYmoHSFjiYRje57qdWgDm",
  "key17": "2s4YokiJyrkVz4EqxTgQuXCGqS7henWpkiqizCdoujrf7d6ingazr2V7NhHtizJLUdiX6hDuxahBgmXfJFN22Fpr",
  "key18": "2dCRu8EPDhXWJNfiJwzBaokt75XHANVQ5n2JdMT6QFcN1QwzpWgwXmkmiBMf8Db6ytXUvr5YSvK2NkyJzxm9KWvR",
  "key19": "2XtQcv4i2uBPSgHSiu7A8nD4bd7DRViirume4iZe8XQGrMHPnYxu6EkiiLKwaewsHASKLpaiAGyTt5k6R3cU9fTA",
  "key20": "3x21DWhokj6J8gA2zyEvYTC77A89bG4XAZRS8z7mcMfbuph1UxwaDwUNmWdHsm2qctJW2EEQpZMs1B9Z3gv3ya21",
  "key21": "Lh8MRxgVYyCoJUbBsLpGRMDC4SDWJDWtN8Pm8FGC1CPFkUZG6fnfooKG6cPnTzkKdAyU9GiY5oNDZP59Xjwvsrq",
  "key22": "4oc3ZQUYZsR3PeZUKummEswnhmC9iMpTSPPneLitbaHMmWNbXHzRvwVK1Xtb4gp4FjMByN9gofkr9sZGXRaaKLbB",
  "key23": "4QBiZ48itoxDWv2sx6ugrsSVw5SQE2cTmq2ATfG95VR91SLRKbME7sXer1D3PoB7mcctwyDUpmBQJi1BXqCSY1nr",
  "key24": "2VFMp5VgtT1gr4NehEeNRPntR7hr75486BTeFXugSpnW5Ngastdga5Nca5wcXSqa4jz7t7d8z7g9AAj6t3btxW7h"
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

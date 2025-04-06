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
    "4A9yKYfiaeu3nYCQs9SVLCzN4gpqmauBDtSJ83Q1uaeKz7jC5a4kdGEsXSJb4WCrnuTzFbocmEFk5HvKK8uZLchm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x6PrXr5LyvzqbE4zbi2PiS2nWGkHvgjsnzU6b6RLNxbPfZtNFa11FnQMsHhezQdaV6M3QEp7kZpeUufMhz7dNRS",
  "key1": "5RwJ24PpetiV93vyeRkWGPeWdVYSuJ5wgQU24GUkZGaFeA2DUNFBMJQNMw38SevspTHFXjfigCyDwCiUjEpuafQk",
  "key2": "51K9msrmtgLrC7a2tSEF7iXT3bWHnAQXR5e666xF9NDrGxGmQvrG7ikCsecaCqTVNsi7f9txGdTGATXwGbHmUEJi",
  "key3": "2WfVwaeAJd8ngti1NBTVxLnsncsm6h4DbhWiLw1BjmBwovWLga5kLN17QabMiXahi5kL98xMYSpkDgpkTW65ws7c",
  "key4": "37CaLSmHrBGxVTUySXfaetsRqsDbrtAwgTQNTbiM7LHBcBVYEdaKAWkUesFCTfZtXZGitUdqs7SLj17vdwDAxQnB",
  "key5": "5ZaZe618semu1ZV4yRcv2EnpfJSD7w8JYnCQYAiFr4vGoKkut6K331GsEY2TDA2b9EjHxVJVM6n6uA1ypaqEmF7s",
  "key6": "2AvwZH5Bb5aN6BgsLMytSFCJghuNAkBFGQqR2gRvx5KiDbeFGY1pv9gPcnR2a4LRtD6MCh9zsVJgDMwTzHPtZHbX",
  "key7": "58fTpiWMi4ZcW47WGoEvcsU2ccyAFRDPBBw7h6LGsNFkheDKHyLRWbcdZJW9fXU894YyWoRnRRLJ62QFKx1iP84M",
  "key8": "46tUngHeBz4a62hUfv2bne11aGz3TPFDcK92zBx4VBdqXLUaeiYCUBs2vGgiRqDwp3FoBZPSYwJsE8xt3nafvBZB",
  "key9": "4ELvZokiu3UU8FKCdZeZ9ZXTakpUWDcK1LLjkkDubnc2vs8dbSRH3yZxE9Q4Vr9cRQxqBa6LrxGLNr4fSTX88Jt1",
  "key10": "5Jis4ELQ5kg6ro2MzoWenntjJucyMVurvXkVnZwZVW7pgPeNtYpYcFf8dgCzos9DeqrMwoDNjWfstrtCjakwWtLv",
  "key11": "LvfbsvoucBwgLvDD8tjWWNGns8S46KxuGg92cZpFDEZGcb4kxBKbiV982jVbFc4dTVYJDuNBvuHdyRPPDga1fB4",
  "key12": "4ZNrYLGZBAPxQt4dZXv1ToSkTHoQ6ggvhGJkwjh3bijT2Fr833aR51YtmR8Mi5mmG3VZrk7BEom5LoaoNdN73vAY",
  "key13": "3mejDRBaJ5Kfpk53L1FojoZKsdK5aCR24VSd8amU4RZTz5r75Su4kYN7zAyyvY9LXqifFwYF9aieERFy8QQqKp3B",
  "key14": "wYwkfQh9WMvxVwvXRXj7eyCA9ZqEnxDEBcrxQ88V9ZnrKapzY9Nkc5283SBBvfpa8UQ8JmaUf2ii1jfx823LQZr",
  "key15": "2QfdCENbxdWpwyre8L7yyH38RyuSBkZ2v7qoH1yFheXR5K6adcp4fZLP43iJEK8BLHbCJSp1xHM1inDVe5YTFs45",
  "key16": "2C9XF8ZqeDEH5zgarvvVoaQtwvrEmbkoHKWCqAiXR4jKP76vPNCo53tCBQACr4NNx9yprQ6hN2zHE9cNBK49J6Hy",
  "key17": "5Hc3eXmpFvUnh4xKX29xLT8X9P3sXaq5KpEdsbWSfhzMrmkghtbVmNm8aAeA2MUrpdWUotsMmD7JssnbfinyoYW1",
  "key18": "4VG1YScT7E8xKjf7gG5MBdVcSKesBNiYjnYrBa9dN1cc4Ppj3YBxyn4BU8n45ZfL9vQw2SYPLAShvJNE318BBFX2",
  "key19": "3y72qeAHsCUmWxKYVuUf1TbB2WZXuCng8h58ZBs186PebipV6ChovSJE6tY43YKV8Xcqjixv7qkYzSSZZXuE3hKB",
  "key20": "5FRGKuSneh5mCHDf3755t5g49H6g3h13P7Rk2UnuKMzx8UyePd5yKW1rwsxLGbX7hMEDrQ3RqH43CfhfK6VhyLFX",
  "key21": "LXD1xRzsPvKgs1duV8HqVcD4TZK3sQYZxzNVMiooUSE1nSDLe8iPxuTUHccVGYULjJd1amjCjk5XQBRdz7fhSD3",
  "key22": "5AyugMgu31ueQWuXEvuRoJ9Pcqojztvi8KKEdMcMDnSAYSXA6AC1zjgdPnpzPx84mZN54YnV5hshNPzeWVLHhHA9",
  "key23": "38V2VRahw1kc4u6PAhGmtB25RHKnnZf1wJhDwbeVkwHCbRLJGLbQNJZZFhsKmsgvzskmGCPhpqY4tixvohMq3Gxj",
  "key24": "SQwVTaS34RqqXag1Sfy7ntNeHTj6pS8GHdQmGCGVykkYiQUjNm23Bk4qje889BRY52LB8wqi9b5t6UQVEnD1zqE",
  "key25": "2G39nG3kHDu6A1GDoBFzjvmW8DpPuTMpg1jKFR1vYcKVZePS2XykzdnbZwFrACFEsrvdecXoyEP8WLJxHqBbkPB3",
  "key26": "itcFZ6WGjQE16w1yXTFCz8t9Zu6c1rNLLSFJUd93KF747T5NWn4Y1p3VtqxPc6FSQbbQL44aL6QLcrr1zugXG1m"
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

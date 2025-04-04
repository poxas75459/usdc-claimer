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
    "ZDu1vDiLiMevjVMhE6VUmuP9DdzYLPzZPJhPUrNYFXg8yrBuGmZRz4xGfkbF8WLmfiD1DPeEq31dJBu6ed6BTvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mT8zbPaWGxUdN7URz4p9QV6WyxqfufB8NkBxXpW8P6J61sPTkU4sfNhuNrGdXx92QnEfGHjHwKaneteL9T7HfQ2",
  "key1": "3cX6DbXC9sPg7RptPfUqWRkRLh36BcZrAefNsFxpMBbQHGNfRDBHDy1QuwhZZLPqJRPsTtjDEFpejiZKyY1gYp4T",
  "key2": "AKyPXa5XHT65qpuFSKzTMV8hpYjxhLccBjftHtc6yeMLXt84NZDehXX6W9MJDsHhjUJnzXGPyvAzmTxK59DetJA",
  "key3": "27V6jE5pTiK1WkXsRfeLishdLw1rm8Y3PY8LmwXBo9MKqGNLPFcr8aH53sh4Gi7DKk9W3VbXLo3mpDy79ma1Jdga",
  "key4": "CnJtBEXvqqxNzFvPeWiP57mkerVSDseLMWkVahkfvVJmmxr97gJ7KqU16wjse5KhFmu6wzHVvpTsaMSVEfEnkzW",
  "key5": "42Zh1f58fU3gCa1XS7ec2Vpvxs58z9YjHS87wkVX6PzPmvpHfiqpZDjj3qVDJgLbvFTQseMwDUdfAiEt2F7BScjz",
  "key6": "5iayfN9ogQM4rrL4ywGQ2v8sp5KfSkvu5MCzpNfsEPuBPjq35uCz78xpJ33g3z4FMmkKXpR2g8RpKPnLy6jqJWPe",
  "key7": "2tbAMLzGyLmuV99oD6gwqaV949yZBTAKftBMkQbLPR6sm2gvgAZS8VGyBrjf746Cu5PHnqg119xeFCAaHZVNdZ9u",
  "key8": "PvF8BcGwS3NzfNJb7GuWC1H6XuVYSBEqcMbUGw5F7PpTh9eWRREqwgWh3qQckxeWNeQreqVagzR315t3b3pZb9S",
  "key9": "4gRwTeaywRRMa5Vvc4uJ9UZat5Jx4V4eWFD1ZkKN79inqworws6i9JrNpg77hkBBettqX8qgutBmBYgFon8K7BzL",
  "key10": "64w7pAGGiA2hnHBNCbXKjYHYdr9KeDHXqq8QyBSwoUfRK5wLTv7k34sJBz8uA6jwUk3aWC8aFHFvLNBQQM78dxg4",
  "key11": "mRvFe8Lb3XeBH3m1n6NSRTP59TfL1LTuT87GZ3YCxdWwyQx2YUFgTwqH1oDoUaC5w3tK8RDgoTNJTgVc5FFiJzt",
  "key12": "3guRpFvQbmUCFuLNh5HjZeKJGsok7uAqznLRHny5uo5harQ3LgyCPXc7Dmk3JfgMJ6ZnCBXV8nT75ibZHx684eue",
  "key13": "2Z3JZ1Ki2JtBdPkEyFzdTWVegT2nC7dNN6f8xxUUC139Hb9keHaeL7MUvTeSbDS8urAUrbqSCyNZ66b1R26RZHda",
  "key14": "2tGxevh29AcGhBNrZwoADTTd8t5cwUm7ueKXKpefqznsop9ksRr23yJgoRY2JR6SaPpib12T5QyU64dZGYkhoQ18",
  "key15": "4raqQxqtHXXdnStL3GxBbzir4NPkxHbho9LXBGE1XQojSv64fwo655cuRGAHG2Hodz1s31Vz7SFpFXSGxJvZ7Z5L",
  "key16": "EDcuZBTDxoD3rpG4p4tq969sZDrTs75P5rcVRoMC2f13FQE6TBAkX31Dyv4fZPTxNJ2fdYHbCC8xSX7hQaGSDfb",
  "key17": "3AA6mG3otCGZ6SwEsKaL9kkwprGBqCChRQtb42UzrUbm98zpfEVBQX2yzpXzTieRSEjRyLcBiDhE1aX2if2uAxf8",
  "key18": "5kWn1SUkUqHNJJVz49fQjpzofBfWLDQcBaiov4GpDQBPC4UKUfbLQCQvpvVG1GGmxoAzhsbKRpt6bkC1iAJ1QWQ4",
  "key19": "3FK6eRHpGfQzSLde3C6MW6bZ7hosPpwFw56HygmRwqZqgG2nWij3Jzze5oZL1PPSCzNSHEyW2ySLghFsWgcir8jh",
  "key20": "5vnoY8eUWe2LcPCKVovLusEq7mDRCuzoSBcmre4jkUwh6jQVwe3mDMY22QVXVXWpZATgxtWVtU9FFZNCu3aKnvy",
  "key21": "39n5nSYiPMKU3ar4PigJsgfHxAWKWBFURn8pnhA23mkepSXoF8KC4KrWr1tF7e2TAzVBHPLADbiQtDmPB8FUPqVT",
  "key22": "5A5VeSXVWTUnK6yNuKqfLDrBwrxfuDxqXcGHQZgy9ggABknYaZt47Ra3v3cSa2K3kysXqnknsQhLoxX5QR6Pu81n",
  "key23": "4XzjadHUEJX2UZ7NFAmEgWgmtgX3jNokTrMM5nG7BUoxzkYyQDdW6PSmWPJ1QMpoeHri52RBHgFR6mz8Gz5JBc4A",
  "key24": "42G82oCmcuiRiPQUEx5btefhqVkKkdDtAWSvH99mzaYLoQWaurbxhJ65hFDK9TuLV8jJvhBqSHyCD99os28JuDGz"
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

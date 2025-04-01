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
    "3uPDGzYn8msmnvXDc4xh8YRBQwendCmzReuJYKFs85BfibraT1eqrSjtN8LqgoBnTAV2zeZLLBctVdrVr4mUs3Ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zo5ejxfwsRxsi8cRftA2zw7myRgmKgxVa3GgZjpw5XTLs2MJWF6hg2QnzYcaWSQxmVTWrNWJ6ZNncsDHfTvAPrS",
  "key1": "3puCnWbTonkR9ooTDpTRyDLzCGWXrDF7YUGiq7o5XRQy8mTwh5KizpoyVG9qeg6YuVHWssuCQHHoxpFcoEqZL23o",
  "key2": "G92pPcvGymtuePVdyEznGe2S6JoWB7jtZHWQUpfRp3sHy3TccezFJLRP3KG7YL5knrCX7uVGt96rS21qt7hAFKi",
  "key3": "YuJHzJb1W7Q6iUVkqZMjJmwt8hJe284S5SPJ4dVpj4TTtTraH7vD6fRCabgDLyQHdvk3Zv5ZZjzKwpuQ8m3hC8X",
  "key4": "2sZW58XBYiYRGM969XsF7Hv2hMtjY3wLX6n1MCJGh3GMVnVS6NBsMXo67TuLUTzKufoNzvtCWVtfTwKVNqmLrLGa",
  "key5": "5M3cBKhoaEK2Wa7bAobbfAuVocSd9tPp5mqwZWAWN3utCsypysVmNxockfLiJ3LShcbefdTA2AEzQSWjrxsUxSmU",
  "key6": "2UWMJuVw9Y4zrZtUkwFmJxaXJtDwDd6575tUGUMF32caHJJFqShzoCyQU85NafcsjLdbbtY82mbDcDqD7HTZnZBf",
  "key7": "wykLUZ5u6feqZTZpraMvQLCSjh6bBAkTBojzNafing2fPd2g3W6nB5DyMJEsTjKj7SARWg5oyfqgjxeA5674JJQ",
  "key8": "383JdZmxTHbHbtZezNCBxi18LmMMS1gRF9P1x4rzonAii5PPbt5K2zhwSpdFTcLXhYW1JMbEaXZoPQrvpkQ8jQSq",
  "key9": "31LzNXp9EgJCKD3nhVx7kHHx3XxRsF7zGh9LkeTij9qC446vz4i5X14MBszjMQLapFkGd3UKveHGnvnooyJvrwtL",
  "key10": "4RJjhQj1FuksnxzjCu5pAg4Km9ziN5BmwA38FeRQPxvW2HqBf6nBqaSKHVxbvJEM3UzrKarmHGuUULeq5M35MP1W",
  "key11": "5WMkgaM5qbHUk5V1YZxjpAfcde8jyC7jN6EgNaUcoVQoE93hxSsLJCVTdYPcKhtNxieS5TZ6N1FXhXgC7CRKZhVo",
  "key12": "2M7Pf2jzwpM2pP3BGusLiyzzPHSkDmBYPmqu26FT7MDve1fbDw7SrGriYKxnX8cZbit9rPDMjhYgAsdFwTBMmbJH",
  "key13": "56khzW3wRZ4WiaqkRbcoq5VBLSqQEFngVnaRCd1Z6DvTRHjJUeyAXh8wMxtURZysftxeUtG6r9nw9QwgqntQV6BY",
  "key14": "55zBzbkCCwMrgcAC8zfex51uvgyDTMdz29PBS8BaGQXS1SZx8CXRJ9k8wdz3JR4dyTGVjNhZBbniZYgDKQxu7jaT",
  "key15": "5F3vKeH5Bo8cupZmXuwZZ2nacTgnqHUsMePjqk2YB2VLvMgcUgcafiC2bysbRt8wsF7xivwZ19vrZPCUx2BJTAeH",
  "key16": "3Vpx6fjuKVFKewRCUB8xxjCaimA9BAoJs6xGWGMEgEdCwCTY7VH3cavsYnK2pUdo18CcRwCeQhtkA4nTNZugBBXo",
  "key17": "47UskLNoLoHaSnNnjEqeb2f2QreSTgVDsP6t22pjUKgCTuCYh9uKM4E6fLAFbZwZANRoRgkbZodTc5LLDYYBEVdQ",
  "key18": "cvXwNEdbW8okEnuK7jeLcBsBF88yVs5jVH6dMAKgXKSLbaRprwyindkXrdm7EuDuMLQDUsv7ZEtNaUz77eMZM1J",
  "key19": "5vYGrXCDELDVvMu5Qc6wL4E1TpXuY85P9goRPqVeKp7YehNLBHPymt1WtmPAFCuL5V7Hd3JyLuiy3aE2iCj25phR",
  "key20": "2rVNzoUFPCaUda1wLvrWR3dS9APdumPGxqjWd85vn7UMoV7FN9TQxjVgHQB8fz8qn5aXXERzvcn7K55GSg4TAzFU",
  "key21": "2amGWhxxhmx7neaKAFSzQQXVLP6SewUY3TEeAdFD1U7iu3G1Qedj9XMmG1AZKVLQgZEYeiTVf5xjk3xVjoQDAngn",
  "key22": "4vtBkCkiXtKCCivudEs4hrKUwgWGcGVbo3Q2KV2gS6mkYTjLRNXU8HqgFEPBJjcdEnEgxeKwWHLTErAqDWZ7N2dr",
  "key23": "5S81y8LFKfJ4ehh1ZnbxQ3Lbxnt3LUvHyCKNfFoUtqZnyXLuLHxLjisTK5Nm2UetmaEtHrznhbavL4LKTYbtGQmK",
  "key24": "2d8dXY92kQMHmfoAoQzNvJxXpkkHnx2B9ThxoC1TJ7uBotdrnHhni5EfdkEyzdX9atuygXyQ4eCDqEoKoLCBTQim"
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

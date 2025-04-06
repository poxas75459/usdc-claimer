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
    "5Jgt4W1DRKZ46uBKUVRsFdwsLV3LHcgtq26kqoUvd4fi8yem29ncy296BLEVW9nAtvzMzvtKmYnc2p5YXeBoQ8Xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4feaGXuGG18RbjXAhrRyF4StGNEv8Eh6gK1q2Z185rporabWLkrVLhWFuas8jKQdUj9gabbaJvhC8HJyV2xTajGb",
  "key1": "2uQDPubYURAP7iCqa5stUhUrM8ki7vSFAjbrkrkXMfCwQkhRvkEoFVGWnx8hTVNJBYd3ZNbsPgxYuSn5169fvLzb",
  "key2": "CdtBymTf5TamPzjrvL1jybfNrt54XgJihyiTf3WiP7oAvS8mxzLCFKTSBeue2oES8sn8N9kx7NbMT88YsJsF2WL",
  "key3": "3QrRaPhbtbgS3HZSWM4ibYrLmaM59KBij1m6Qfks3nM8yd6j9DsWFNAwrhFHovhU3rvrxRCzRV8fvf2Gx6Z8WHv1",
  "key4": "zY8kWrLkjTusw4TvfeZz9qv6YHXz5DveSw1HbpMWp4qJpaxBVnDepmf4c7xoav3vxuA5ftQV3rP2zGFsSFZpY1t",
  "key5": "4Zba1b17q1CM4xR2V54yQJtv6RZPuw7EBGPaaJvkMyrHYxWbNoykP8vmz8SKqnV72jZRAYbZwnWzgmzBMSdakVCC",
  "key6": "4qEJUwpY5fGJd1L5aGdpNfPJkqtpaYoSQpbFMmQhUzapEqsqQT11yTMRffftnxQsA3vuvVcgTq3uNSzeU7EpHFir",
  "key7": "4cBm7Qh7CMZonJUPjtrRrdSM7zZP4upT8uHa3Xi57JrYMMiA3goocxfL9xmTnavvSRqaMzPsQjMbn2SF7FZgj9x2",
  "key8": "5pF4TYzTDghA3jSknXP4LWXncjFwBFu7uGNjv8qZj2bvx3HiqdK85GAXTsJQW4nXHR4XfbcpJKVkvp4MJzcCCvY5",
  "key9": "4uKSt4N3TyB46z6o5pzdJiwo2YrinD4zAp2uEPu6gue1ssfTtCM6DHnoh5DrCnHDgP9k8xn4gyvd7bZEqYLnWn1y",
  "key10": "4BtN2q3CcMHTn1Rrgrhj4TXEmcEQgg96fjwSafQgkYuDiht12VmN64oGh5x1zNVH5jursTawoBKJ8oLHzpoGNN1T",
  "key11": "72ZfzuWUw3EAcj8hhL7iv91C5m3APH6y2g8SkpCvd1aHJunbnE9Hd2caouuM8BBygewfb87pzqzUq4GtNuUf8JL",
  "key12": "3QvHXDngYE9m9T3zXnsy5SxoMjNdPcXHWBVn2vNfmZ1Y6K1zzCFRhdyV8honHiTnsWKPTbUybJwSci4pqPjXTBg7",
  "key13": "2aMR7geCrHAiUXqydxrrZUCwXJ49evCgYUwVMFrvMYBw5oEoAXVTATV5Jmcb7EtMU4RYyDKY9WkZGhyta8RdVcX5",
  "key14": "2X5fqUGgR48oX5pbcxVsAnLUbtJUGzqA9Ey8jNEyPrccvSom6iuBP9pzgnKcFs2MP89LEtJkaB35gfQGQ4j4TrMc",
  "key15": "227mpkFn8NG2HMfpPLTd8QzfcYsmz21UcSGEwTY1sjhhev5e4Bae3x2RJMyfjPp59CnBci6Q4ZkLb9VLAxfnRasX",
  "key16": "5gCmiWzWV3qsg6diM3tAQc54z2QCcUZuTcHvaA8irAfTJu8DZX3AmBsGgQ67H5QnW28chr1PxsijzoR7aCvWY48Z",
  "key17": "3KGMVAqkqLY552UCCZLsY9peFn5P1tD1iXHsRSzLM6PbuDuXoi83eKXWKnL7ep6oar2kkNvvMeiB3S1RA1s86Xy",
  "key18": "5eK7MXiV2FMzvBA9KnxaKCnAQcrTiLLfeXk5jQjjahnJFkSGv17gGgZiKojPwtSAsCHcymeDL4m92acYmBLgm9bw",
  "key19": "5yWeP4yoAvgW2EiTEdWDvCqM512WFoNJHjMgrFUkERCF8NMrXFBswU2CXaKotCsAXW6ZMtmdfKXpj53yA2FS87tV",
  "key20": "4GNLEUk3bYdVDYMQaXTWZPUP5q3ZuGsrhCax7Ng4ox3KVxouFhKWsRLDM8VXoueHufUjmgi2poM8GNyF5P46udiP",
  "key21": "3E9qe4gr4F3cpevum5HaUEvohYHVNmezuSwFdsuYhy3zPuzmVdm29stTk2ccpDJMX1R6btrhrhtRL1qXjdEoWcHG",
  "key22": "4VTtVbh4wrrG3DKjus5wzXiFGhbEjr3i8636aj5d7JshfW66duRWm4X2zqokZ2JgskSUn1TJJUMDjysai8qczgW9",
  "key23": "2zm5X8ZRoF57itNZNWaZFgtLLFiScyWdubPaRTRZB4kq7Cb8jpvLZ9x3T2jNuVVJRtnsFCrEAS2ZScqye5bRaPYH",
  "key24": "aoNCTEzYtUEvU1MFRPdzZDd8kP2vzTLknB1QX5ZTayFoT5aSpkSXeBQQfyDxrLwvrzx6juXzrekcycBB9j99C7t",
  "key25": "5nnmH2fAt54VpBAej8o29wbvqdwqMZSt44NyCh3odQq3DB6QBCGzXkKeg42bJjyE8zJekFkx3meCAGPmLusY8v1e",
  "key26": "5HcXS56TZ5ogs4aPwcmpHi4s29aMVWLtPAHFyR5qewhow393Subdsb17ryMZdvjnsMmyac9a53yshDRuYfZ7bEbk",
  "key27": "2BXwhQi7herGqciWn2mynJEewLJVzqnBYsygtVEH9EQhssfgL5e1rVPG4jLjrK7c8MA9zyWiFWDW6bL3k7QuG6we",
  "key28": "4SpaXDN3q366NM8Gt9S5v2c7qtsvYR3BEby7Uz4S4Nuf16hxQj6hFuBJETYdYfSNj4uK9HGTha5FcrdkByUJyXZX",
  "key29": "58dFJ9ncWLYJ6Q7XU42Q8GZ8a2ruSoU7TGTrPgi6wJbxPhHMueBqFNBQC7twBRk1qekLHyBnugzihEuAhacfSG8A",
  "key30": "4d4sKKTu6SFZtUoMUSRWiWXVDEJgaSRZ23yU5s1ciQ8ScrntvKni8kiq7uN4DbDGm95WJTpjAab96T1biistXb1s"
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

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
    "2pZ4VcQqdhcmoqsCtRSp8JUazNgZiGVtJtbqNeFRfaVaqmz1yoZSniJ66nEgZAjfNWFakG8ueatQZfQP2Dvpuv6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dCt3WWiBxhWRoSujCmQm1CkcL3NSUYXntf4Gx6sX2NghkM1DdrXjQdVYp5hB13QjmoM1Y82yQFawtoi7d726HVQ",
  "key1": "gAdZzKY9w8r9JnaGxvaE5HGirsCq3d8Y9caSEJRXhSfUmt6fWfiLhDoqYAzUWBz2YkGu3ds467zqdCJzbL7D8W3",
  "key2": "5ToGtVHHDNMmeSegKoHj66YMyhw1g4Mrhnjoo8VZnXZ1DHmj3FCNLFx2nYZRravVLo1psbRxzDsPUu3ovmenv3YQ",
  "key3": "oMwqe6F8LZ8g2ndUHRVcNj6Q1sMpQUUmCWfCUsNimnUNiEQdawgWcaqMQCazvG6mKMgmFusSV8YdEUZPGz1p6vd",
  "key4": "4GV9BM8KeaunXFXZpaBn1gdFfULCqrS2cZtwPXddSmsM64BqFGdfa6svzG8jj5sNNGt3C2eK9c6A4zFm5xPJJbeV",
  "key5": "2DejscuYNSRUMXrngGeJci8A9fFqfP47QDqU3iwsUuFVLVQZ28UYzYLPR61DrPLE894SM8pmEQUYMZ8onFxKY5js",
  "key6": "3BSUqYJznhi9LLDoiicH8SQXz1VXWQAcawZccbNBXiQGFZb79pmVwvRBBDksQ4U7mXtpMsDvUeomeAkYXncjWPcZ",
  "key7": "4SpxKpBWfVMadhzTC6hXauiqbQYLbgkttnstaiMQGKNZ8oXj4Jn4WKouqZ5LpFQAWXE7XU4curXHaYjNgKQyuf7y",
  "key8": "dH8yEvFCGTT2WJs8DBceEtWDfKT9nXn5QaLPku8dLwJaJpYR7JKNdHk16thR9uA5KzGDuuUXsmrBsqpuJyJVPSo",
  "key9": "5XQGbBzcuDLvCaWd8FXsrVoPKNGqRF8nUP69pDKuMdaYZUVsSNiUuDgzN39jFBwKZUX2RxRpqmvobfpxCs5pmdz9",
  "key10": "iWpKobNndorfCHnsQ8mo7QQ4jdzFtMba8QjtS3jUSNPGrNAaSoYBnc7a86Lba2wRhF57PhYgJ3mnESQCYcDHRzy",
  "key11": "5QJcDxRxcPJYg9quzyKSc7deQsXdiY1eEdRjRMqZE2UkKFio7gvsgbZqdqtHJ7fUZhbpXaaC2QWcSuF1KxpWojdL",
  "key12": "4rKP1Prwp1ZUVHxxTmHt6BbnrmHXDzS3gLrE7eGAx94qfLu745M6uUujHpa4pbtwP1eiE2yNFJ3ZBU8QchRVswAj",
  "key13": "2UgFRSPXyvF3z5AXtGicZiqqnPqwzAdhf2ok84aajqoJnieQrGgbZWWcbqFCmkdk81HDYeAEnBdBtB1TP7YqaRf8",
  "key14": "2fzLqmBrLjcFRoocWMg8MfhF6pHT8S9neQc2vQ9Hkx4juTW4KndydufrGcdhUEbtPGp68HqvKFiFXBirSE7HBuKx",
  "key15": "gxmVbC5iSyvJEbwcNeScnJrFXknMhMGEAK6gqiX4Q2rZbDzGbeWv8o3Sm5jCvUTPKV92QeHyRyJJTamEdKFiBUn",
  "key16": "5LH3fmbrewWeSJsc1whSbnwNkLWaGLh7ZGjGyevyGGrJ1HosjXFJ9SrvngPD587cYSwSuD5i54ziCRxxjF1Sqyhq",
  "key17": "3EY1pZdGMGYuQisJwdw3JNabonwKvxmeoaX15bg6b8VD4dzWP8TufiK2wkBKy9PTGYnV5D3rT4JghPUkKQN7KNZ7",
  "key18": "36PQ37KiKw25Xxpxi736AxsKsa94YLgHuGYtnPqEnzeBZDhTHfyjwutpbVvFNKPENYNnBuhw4ty8hzGXoPZCr2kD",
  "key19": "5ea8vRCXLZsMcEsYYfrS9CiU1WXGUzq7WG1xt6P4MoVLNR1e72wZ1XXNLAtBAowtRnT675KWpEFEi5hUR5FY5fc1",
  "key20": "3i4Yc6txVbzmkcRAGgPRY3AYKDHzZPY71GJATW9BW9HzovtNEREWuwaXQ4bmBWJvE2kfw28X7Gqi8RadCQjUMnX6",
  "key21": "w2Zqu9WbBrZXsMmu5rnyBStgbr13gMQkKwUo5E4QTAGpuW1ydmqBcso9HpJVBL85qx3QqpjzcQz2CyN2GUYuzjd",
  "key22": "3wdXffvjGWmnS72gm7cgzQQd4Yw8RoBFrEGz6mqkqRHZnAjTXcgNEsaxs2eCbHKmXtdWe2TpFwFkTjhSeDypU4G3",
  "key23": "4aQGeEPX9Dz1yK5WmQAFNVHEYFikRWebxFc9TDT5CKSaygERqMZrq65atz79vbWAaVK4GPKoQHmT9BLyzNiF4wWQ",
  "key24": "vm5wEzuF51TawsmGAEuGbQgMWUQ6sRC33t4LmU8eeask1SpmqLTZUk2ZANU8W4aQdrk8fBpPq4XwtodJJg4VQhz",
  "key25": "rNpMzTqjqeWY9HH9EKrkjr1CHbJTNgwfHCtM18enSAuQitae4KRXW4a7FTQBGFm4qALY6137JSRoQPPSfnhzxk2",
  "key26": "3Gv7NZ1xJcyACnD4SBbB4o5fxrndNcSrXYJXiZRTa35SovtHBPopX9EH49EUegnF8TL2HPR377mhKCx3HsUcZFqM",
  "key27": "2YPpKRB9W1KqS8PZTXa7ZGQzGR1aaUUCCWPJeb24nf7PDxqnnNdMQJDfrk7Ebu1mYFXqnVHsTBzJNT59vaj2Nvoj",
  "key28": "5bwuLT18EE2V5YJ4svTvaApvSbob9vucWiriXU2paCpLYmkfmz3bJGkGKC8gjgtv1WR3wFbTf4nmhvNy3KX5WX1z",
  "key29": "2MKqN5CCBhF1bLo7xLa3Gf8fLSkvYjDo6rWfVgkYc14Sqz9X9LHy1SQ17gAJjZN3iXZRRsCvJuJF9D3Z6NoNGSm3",
  "key30": "43BNMLtGYVfZ75nJv5TSzxpnwbDNEDecBtqvScy8jYgN7JVwFNXVirAfixAVkD46fe31z1Hxe2raB7fPALY2HW3P",
  "key31": "3Pxdm2wMHun5JtCKLNMeaWKtpUULnPJ1MffJndykWWmqjAV2Wqx4s2jTzcXp4FftL3bG2vATDswzjFhEU3EN3Nnd",
  "key32": "4cZeGibiRiF7paP4cqWRhd7iF6C9ZsFnVnR2wAPGMPDpD9qANRroSNeAJmfHQYxm8Qx77PnLPRt1m6iEpdN3nYj4",
  "key33": "4fCXoPJU4Z2rNcG55BhenqNrTTqGaVevikULFTTUsEa49RfqDL1dR2BkH5aV38uG69gSGaMWR1KFJjkA5Lzae2Uv",
  "key34": "5PHnFZ6VEym7jA4w55kkCxp428pLP4TKN7gACPRgaitNSEc2TcqVFh3aLB3Wmbh49hjryus95msn1CoNNVohiHGw",
  "key35": "7HEnBK5m87mmY4SnPJxHCGXSvT73e13MrhSafko69XMJB1yLnxAraun5fSsXz7atRqSRP4aBAcdV4TVRZE3tgZM",
  "key36": "7vUg7YanNXMsdXVoc7oYwYk3ED48rhrMjTm9SfD8NrdSnyRqMrXk7WG3pZuASpHZHeDELzBpCuihiJDPZA9oF6H",
  "key37": "61usq5851qD5XwgAanmXFfpRGaerXhiMKmfcNXtpAznSVt7CpV4qAM2wQthKgA6xwobHhXAbzSVhgStrXKAFBKBJ",
  "key38": "3sXfzWQucRqsmXyNAh6UeQWtdZVyn8arbhXc92RVHegG4AY4NFZWmyFKKuS2XSSxWSEQiTwujQQmrJecTYxgUgtD",
  "key39": "3kn36KxKWn7YK8U9J4HHE1bKkEtk8f8aUwxpp7iaUwCeqMnWBhAhwh7QSza1YThKehub4SZMJdKV5fFFAho4NUwY",
  "key40": "4p5J8gHKuoZdnk2s2FeDnDtp9RJKnpnzsgvAgLRchAeAzF4rYyunSUhJAnFZX7NsgGDa3LaXyqR9Zo4mqhDDqjDG",
  "key41": "3CTmAkxWUWF4m7VRNTMDLUU4hZTwT76MT5fAptUf5vPmnLq5rLgN6G9wMcmXETq9MCKRL92WMbyL8d59EduVu1fE",
  "key42": "2xvhQqGEg2ZNC8fWd5uWBE3jAkdc1vvzLyBTJD5XcYaSHUxLbaQ9zdNgTcxGNGVD2o8oKUTyRFGL8nMPQrwCjaW2",
  "key43": "3b8fjbdbMWj2zJoZYBW7vwjQT3WYmZh5NfAC6aVbGkfQKj5pSWR2o7sDaJfSj5JmGPyWZCY7EMiBhTxdcBYqH52f",
  "key44": "3Srw19B56hqMDGryQRKdjkVNsPE6iFCaMN2dN4m23Pvd5NJE2AnWzqdtBa8s8shg1DAwSki8NAGf8Mj9aZm9VCzQ",
  "key45": "2DhZk8eTZzac5REmDRPcHuoFLPAAnT3VzCffu1puLwrhQYiTZpatydwgypTCsu5iW2GjpWr7LWuDCqMQ6nnRSJS3",
  "key46": "C3nUPTNEwxHwfyHGkntSm35Kkb84w6YHNgkzKqMkjLVS4hvVUFvpv4jjYWVqTipNtGpYEJoKDo1CquTX2UQW8Jq",
  "key47": "3aSTuLBpeX6UUU9g22v1q74ds9tZmxWmNS3x3R2mFHqykecKQPnP9ocQNJqvjvEHoxd5NG9onpvuigHh5LEVk9Bc",
  "key48": "4C5kWdaB7k84gbYZF26jYvd7tfvPMdHY7uf1o3JirNAsfVK5RczEgJQiFjMMkYZjLoU1WQzW3sXkj2n2zHJS5sVn",
  "key49": "2UJfxp4V3N7iCRHBJcRebtgjaNU4w7DBcG7wdXsTDLuq1xj799dKFdMvyp1FS2NsrBJMYMCZtZYsmUaWJerpDBUb"
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

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
    "2KdqpHXmJfgWZHZ83UEzXpnLi8KXKZ9gYCLpcVZXSrTSBvnGSLPeiXGBZrs74RLUgEh8fiwborKBseG5HY9PnQxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TzbGjkST5ThoteuVDrHPWHB2ACcqx9ngdMEcT7B6tgyyS3YVG5vtwHiGgWcjH3XB6ZxM6RSwSe3MeJmnqSg4cXu",
  "key1": "4bSv8WQdsKuq2MnSzhZSP7DGBLnriZN3BvTop8VZJ7n3fFUogBg8UPKUvaP2RF4Sf1JivMt2okGD3F6GCVETk8aA",
  "key2": "5bTA8q4ELh6gXXuoQMsGSsDQtq4NqtPcMDkqVzPfapk26mfPcfm1PXwGRhV2kKqSavSnRybAsWRxuzYVBXTNFcmn",
  "key3": "2UZRrAjSA7xDcW1pwLXxsat4Z1BHHQr6Ndzm7SsPQFkSnKwDA6FZh5uv2GDvMMDM7R2y63pKMpr3d4exd3XoRD8b",
  "key4": "4QougcFFoLNbTThuKv7kiPME8FCVeV4ry5QuY3NbNqMjKvfCVBrhvVGvXWJsK4z7ZBqgjrq3z7BHCD6ar28Wm8fr",
  "key5": "56HPynHnoRgVLfc4AGNH4LBXz2qFsyZwjnY8p7EyyJnGQfVyFSN1RrHcXiuGYbnGKQamq2eqfBVzyTHSjTZqVpFy",
  "key6": "4Rp8cJyE4gWZXuSXhavgk12XvYHeQUK49aFYPAWWY7FFr6Zxt2fBncF21P7fdr7Z7JgaQ7T2gTPWEDBbKrHqbeyD",
  "key7": "5Td1Eemcpae8hJeBC5HrqYZzJPhtGv96gPSWVAGNZ1Ms3hyn6YocUqKmjGsc7qxbEW2AXjCtpN3mm5KApHdN2GP1",
  "key8": "5JShMrcFwzaRri2gRFeTfn5gYkJKjjo8gKGvGZ7x4BtxtQnyimujmC1gCrpRgxtSeZP9UsVGqBKnUAFtSxBYFipX",
  "key9": "5D2UMP5CTihuXbhiJte2jz38BRzEaWtxTC9QWH2NunbMx1eQLGgsJqiVvu5113o28VoxDTsQzJ7ZQUyAqjgr42NP",
  "key10": "S1692yx9E58ydQRJMbEQVpPPWiNA3gu21Gm2qQH7pwZGvaSdyXsSRkoKBPg4Jdsddzr8RHEww3C6GXPrzhbKX2w",
  "key11": "58kg9QvnydRkaeYBoXoZz2V5zTKfWj77dWxuBeHKHYn2Y8GkXMqBwajcMLUnD5PP5aVjePcK4kfjmgStiyjtcwzN",
  "key12": "2nbgh4jpvbTAHgsXg9sFCLUbvM4fuXvxWxNbrMHoBjhPMz8pMXXEFTymmCBDg2Tfy8ep5dDKH3ABpQjqzxRKoyFc",
  "key13": "jQuYKkbgEDu22mstRN3NwXwbVxHxhLmjimq68qTRC4eb6NSpH8hFkKKBTFms8Umi3V6yruJnCH4uM4RJBvP6j8x",
  "key14": "2iKQNFsNpmsU8GYEjHwqPK81dFTadD4JSr4TSH1fpV83wuAcN71Tfj3a5C3oBUhuRhqdqsSZxhbjfGvGFhbde42v",
  "key15": "3bVV5AWk4SjamWgWg5rDkebMXXzUJpK5WWqpC67M5gw27hHyyw4mNV4iQXBAhG6Bgrn85Eni6PaQmbo1nSyuACpR",
  "key16": "3n3tpzWutSJk9Vw9KdvGh6Gbv5XLASLKLyu2D1Py7w175EnLtsBY1o9ft7ewb3PeLjUmv27JXN67XSgWsVRp1uag",
  "key17": "3SZVqDgaFV6tG71tJQKZPGT1aKLjFoHQ5QBXJfU9c4CTCrWypr1ust4Nhnj1gkbC3TFbzF7AGhtZB4dCf3VGkRic",
  "key18": "21CXpWNihEtzATNsgsH3Dzo7k9eEkvegv2J2hR3Mmv9gE9pUZdMu4Qh1kZcAN5ZKGaBiRzEa2cQubCsVcJ6y5END",
  "key19": "57fRFoJ4WdN1uDkJqo2NHN8Ce27zzCKUFMSH2sj1tWG4Sfg1osFG3BXPXFs3UHG4SZqnty2CXfNuq9UvAhk8e89y",
  "key20": "2vx9G4ZxxjCG8GSg3LGwq5gDZCPmeo1vyheB2FE9mKZC6m64gHNAxf9jR9fUdj2xxRReTtNKBTWKQb3kDRJPsmpw",
  "key21": "24c6mHf9hDNbNn2hSd9p3j79ji3HbZbQ7R2kE1HZeVqHFmVoBcGXEWxHJaKNTMdbnLDEjYTiAEaWg8Ug3xTebJNy",
  "key22": "2syXddzXWafsdZGqSii42hvfVFeWGxJbLMRS6WnZh2Y9udbtfeJywKrwju16FgiYsS5sZhWM8PTM8AWNKMv7o3Jx",
  "key23": "612i3fBGdySSq63X8cKDxq7iMuKLhgJhWHqcr1Gmra2zNyrs7ChvavyXd2yveWt86mPckaY2V7nNUBFbtmeqKpb5",
  "key24": "7iPUps2fVyu8LhYHPb7f71wsyC5tYCC8FyyqPrD7fAG2JXQ1M7SCLD4GcxMWibdZwfzSMXkoxiRcP1oqa58DMdG",
  "key25": "5TMHQ8d9teDBsN7RKViTad5S4X3wNDMh7TScUPYNd5oqvizcN4VdJRmydpetTu7UYMiFNd1zWkAsLB1j5wMicKAk",
  "key26": "5NF4hxc4n2CYhNdo4dahSdCrdbxqvEruNVCbzxLYskAXXnNcvfqRusLsdc3BoMHZkzRpDvvjsEz7MTqTUoDPe7Bq",
  "key27": "5ispRbiMfatmFYeGPc59C389ByJN7xpwGNrMbCrpHXjAcR2mysst5mzEdRrtwCyP6Yy2Zjj6qrTDX7zxQWD7QqmC",
  "key28": "2DMJqs1M15HT2pPXpMhgZt96muNUDL4QF4Ld6dvnid2vsr3839HYQLpMmX9RmjAHDqpyfCFsL5dSVfP5uQrzBAni",
  "key29": "4penkuAogZppQT9mNbeCS1uKmvv3MrGKVTpuFV6tctyFnjRXrkrnJJEbLVAQ1aDitNmtjmvyTPd2v6G5o54yghi8",
  "key30": "25k6tkPHqiQzCLr3WLEvLrGzfDJ1FpFmg1j99JZShLertkEc9QbcFKpvaqdE6RipD9Nkcr8pGrKw9VXGriPDfY3F",
  "key31": "2D3WWFrAZHLDU5eYGm8qH9QNTJAnJBVxG95m3ZwoHLJvCECaq3tZDtBCMgpf6ZyvD7kU9ZGEzZtgAKmu626EzYm1",
  "key32": "3iCwqvhQw3n8Lpa5FNMB3UZG5YrvG4DTs2YucXCWqKWeBjVHjMRcuvzQiEx4zUokYnwYC21f7SzzLyy6YNLWW5D3"
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

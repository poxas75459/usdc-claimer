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
    "46BR8xD9PLBDWqimTYh17zmuZC2eDvszU2KAKMhfyQER3zHg5Zw8HpkzuZWhEzv6GUGGAQab9TaAXr5qeZMNo34o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QKyki4E6usQwaQFnBxLznvzVj3c4zNkNRfKz1BdubBK88BtswuTvHaGhHZKiY4AaheWAjnomCrVjKYdvkYK58MT",
  "key1": "37QDvwQorvWH5iZJikq54QZxnHEswNXD44CHU9j4de97YsLuSXhX1VgwC4CNwu9j37qWGqxRRF9nZZxmSQbQaBEQ",
  "key2": "58pgw2foKTeiMnyhizSeq5tqYJK3UaFb8FLAhrpvQ5P2KP9zCXbM1FySN83t8gEoKeBYctsJSfpgjoYZYR8m9qJo",
  "key3": "3TEzwEtKRaSt3Mf8uL67ZYmGxdjf1xYGck6JESvTd3myYx59NMAQ8N9Fts9X4xj8UpQqu2MCMFgeKgbhp4xuiJRL",
  "key4": "2sywjpauo7PoB2wrjyXs2bsULrmUsLmKWYSSMt9oMh8jCxxGfmtDoXKJDHcLNWGdwUe9WWpxy5ytztiR8EjPkqi",
  "key5": "SdYDZdHxv4tqZmdJeBXmDtDZrn1suk7JxQBr3XvENiWRV18owZdx62BkBb8kpqW8xc6q6KuY2zBtrGB7y9rc1Fn",
  "key6": "3VkX29LphUeJaAR38ER9dvMi8xjaY2e3QRVVeccMz5o8VhxapX1VLkSpfZCd3TJLTiHCk3N7LyZBhwRn1BEXxK3R",
  "key7": "5KNzezDcMgmQEDc63zJSVyhwuRB5cn9EvA3wxM4NDkXC7MJ8gJaqeEkuhRhEg5drShK49EspxbpNSQo6mfcitGEd",
  "key8": "ZxemuDLjDSFbdk5R3Km1sbncF5PVijiaZBeBKRhiBMLAqtE4xSwLv5kH9z59ifL5AttxVfURYVMmccuUyXWWHdU",
  "key9": "2aG6mzXZ1wBmhgu1YRHQagiRcxfumQ2sJ5bnGhWivFqsxriZSon1KA2eaf8y7vrAnRGjoPLk6K5n8nndDezkLHCB",
  "key10": "4e7CKjuNC8BmnVxKUVpcqVZKmso4YKQrDdbBDQ9iHJ6cyoNUnQAWMUuVmVPSpxdfnCesm6MY81sZyC7ZCY1rcgFm",
  "key11": "3PEiDLQDH8GYMbVW2SJoqdVp3F66Dg5VVWDzJM29CTxLjKnSp6fmSaHjzf3UfxvkCnXhXAgWDY2yTK3L4AmhpMFZ",
  "key12": "3pT1ypcYRwHNTdtVmtynJag4NxoPsXt4NovbHztiqSA9J2yt7dMj4SmiqR26qQefRXEcezB1AQh1mPYaLzuMz6uN",
  "key13": "4hWvfqFaBSq86Geq8sPGc7A3tg3mjLj2EvK6Ph7ThRVZNomH3AfVtDEjZe9MkBjMGd65F9S4BC8TWixBuxTLP3x",
  "key14": "wrJbob36fmbyHwofXdqnRPo5jddSp2cceyzHtjUwneaKz6H5XDmfBb356PoJ9LUXAh59JMrDz735zxawufh7hfn",
  "key15": "4igSvnJxmZBTCL4EXdKEPBaMwQiKiu44BmNajsPiWPhsKo6YydMNSTZp5jeZErN7fRayT8cGmq8fdaYsQqAmBGXS",
  "key16": "4PguAvxqsDPCt8KEd6LhPNYzQAQMWQyiaG6ay9y6MfkfbY8rexjgL24FptP6ChDB95nEHWsCmvTFekpzqWFsNjjA",
  "key17": "PxcSVpBbjdXPXHUUtPpQ2bEQuTr98HoNSsYjBrGv5jv7QibXJ8LcJEWute1tZxhzgBGhcevDmga9kF78GR2nENb",
  "key18": "2672nNaugHJ2BegMJ9B48JLo4AVvSokbYGgrDjjAp74DoBYsjBZg9UGn1883LHSFKCS1V2ftR6oAmg8Y86PSrM72",
  "key19": "3c5JZb5hymAaZrQgiq2mLs4NWA9d3b88edpqCAbDtLvq9uSLL6twmegpmVinnTacRDSRZoo2SzmKfL8KJ661cAcQ",
  "key20": "53F9x2G24tpxbPjBnJLEkpnW7zysXZvUqjaXE2dDpSZNTfPCXdnKpcuNrebN545PAyVqjyaHy2c8J1jyGMWCP48G",
  "key21": "4hq1YQgwWUw6UHrBamuEcAvK6WMCRcQSYbdFkLo4iZnSLeozXKiNqQ3e5zaW44xfgW6LPGQ1VHjkFMqbwGLi7CAn",
  "key22": "5DJFMwUteM773pN4Erhy4vemTXAVyHxEW5YVtcdAu6N1mDMc4dr7gZVa1U2gatM6CAg5h33K4ZFJoqcVGDdz9RfM",
  "key23": "zb8SAyKzizvT3UzndH6jPizpKRiyZtVeJ6gPVxJL6SARTGowmKBexUubs2NzAXdnHesZLcknNZMFtMKwLpUePgJ",
  "key24": "4SNGijoxR2WHBFFFVFfR6nxEw8pWoLVEGYiierxQmkD8td2jZ81DWqSFrJWzU9cykBnLcXZ9AxstGcs1dWDuJ8i9",
  "key25": "2dvp8PC4XGW5VwgB4F1BTuXq2zHNuzdCYJ2iXjeJPrj3ET5XHkZXnVNwJ1BKREGJB4aFhEHikmXubC6k1mkGszT9",
  "key26": "8sRaBPgyCJCpiHVVzBN1vVqj7Utt1aNyLG5awDyV6Bby7CjJqA1ryj3XGVrafkfRPoPLmtoADSiekM1vycsGhk7",
  "key27": "3Yfw5NGuvZhnMMx12R7GWQ5iBdRXdakJy3f7VgTfePwnF4hfFHZ1rLnmX9KMWS1oe7aJJAzK3kwVgeDe8vVHemME",
  "key28": "4YuWYzpPDxtxWUjdBS6P2PRofPa7fyedognCEiuUM6jcdUp9yuajBNhi2bZXT3XixJb9k6x26WLh7vnWuvoJPxKq"
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

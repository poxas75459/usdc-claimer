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
    "3wJYuSAwrUuT2ANkQCkSeqKU6s62p1izQxK1SyqMm7inPfpyAWZQKzhmgrFREpNiczN21w2fz5WmRXDDXnMwV9oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y7uWeYHqnR7AgWU48TV2oaX5fPhFh3Yw3Dkv33agTNWHpz6xDk6Kvn74uN6TdzhHgzng5dgbUwtgiEg4pyLourP",
  "key1": "2MmPsmLB8Do8Tto6bKGkdRTucW2y1G2XQaDkS3bVP7ArKAeUhHdHT7L1K7Qdsterx6CL7oUFZgVSR3o9TLvkch36",
  "key2": "33oz1e2uvTQjVceLJFHjgbutmT4o8w8WSuHgnHEZeBPpQTfNy9j19hqSSTmGZcuZeLNc5MrZJEbDNqVMWt5EkQge",
  "key3": "5qpJVDYAg8pSJ5EiYLEDn5QbvNjoaYhgfBWfSf7SyBP4DW9NQ7vNZzoemgYMYM3Q9mDTmwrtAdFQzAraU87e4Xax",
  "key4": "61MZWbFpSJNECe2gKMtLSh5WQwKg7ckRSjZihvgF9Q7vxjKinVog3nbMNj7hhnT9cTniVNsyXwfDkHoiL2gtVKeS",
  "key5": "53w2hHKjCS8dc5hc2qUDdWxpaW22hhWSMhWSy7RB76QwUNrTiQtxbUYh2umTuJQqkY87YhyiMPx1c6j7BQSScoRD",
  "key6": "2ijtQsRN2y9wMJCitEdeUACRciyVQayr9GDnWzD1FzTx4m65JRpo6AbRcgSWX3VoLsVsLUK53Pr1wmRi4h8gLFwM",
  "key7": "2eDA7EczkFMpsqjtyPCk2Vyd8WKb5ryZxsUWDVStjz9FR1LUKG6y6wVyW3fSeKFNDiZtYdQ7QFzXfvqRnxYtxX5p",
  "key8": "4GrdAF5f8p9xsxiwAM9AJL4gq7hrZGouFb2fTYhKKJYYtYJddgd7D9A2SB1CaHC1foz1mQnZKbkaLejpUTGSnhZ6",
  "key9": "42yqJ4qPxZFQTy6MKxLB3Za1bqyey3kFFsVNPVS4UY1ZVa3jpAEipwznibqpJZHrmtKwD4R2BUNYBL21GSJKFdWA",
  "key10": "4ssqWMUhkPE4iqxqG2XBuLcw1fjLvfRrGaoybdi7ebYfk7LYxtvUqKENCMAkbwChKwuwCazT6CVnRfDbefDErZrX",
  "key11": "2GRTE4TF3DxejHceiWfjXH7gqtaTZvmVAJiArUGWEofvtGKjCkY9vTeWNcPxntEoEDkyoapo9zQh4VJVEsBCL7qS",
  "key12": "5Yd4c7ComSgDHGkRpXG75SBUBKUtcvxVC3NdE5TUVbqRyZxefU14hWvqjEjFJDmcJmFUyreh2zyKkDdSFL6hD63F",
  "key13": "4MEzgKFEmh9TnGa4cSf59Astze3QxpAEfthbAEjxowqwZrQTd7wQ9agiyK3Dak2Zu9bkTEAerqUEG45RZpVKLDXP",
  "key14": "oDDn4RBzqHdhaAmt9pFTMA96YZ66Jn79g4zmanZn3NyNYFRmBzxxBkoYYB7ZqFYCDKiaDPfQLKJmkgmpdSwRUnR",
  "key15": "AZLnKRqyxoYG5qfEZmBSUPeFoA7pfyZDTkfnbQz6boEW8UCokvdCNqh9qyFnuf6c3hQU7sASoUAo8hhB7DzWmZu",
  "key16": "2Tzs3QroPxne9NuJJT4vdtQyf4B6TbBE6ss6qM9AXrJJitsSHktsfKdp34MYGTA6bDcUmmvWjpGX1xV9yC1ciDML",
  "key17": "tA6WNjECdGrvLLsPtmS3cHj5Vc3L9EA12kRYYmtUtxzN2KYmZq9fFz25CzgLWdgDMYZeZAWq6M9R8sMFcxtGQj1",
  "key18": "65uCsbXbip1Q4BsmnZfNFs5wNTZGuDv7ZqTTe32TryUaXxcfbbmEYW8wmTzgYDuJtEnXiNXSmkMDcihviw7kpc42",
  "key19": "4SZadvW9wQ2gvDtQaiyZTLthc1ao5mDwdTt2NeJVKm8W7KnNKakJsbumzTbEq9ZksTFAYVDZwr6Fp2vvf6o1Z7G9",
  "key20": "5Lr8RUwBtgBSekwbYg6qtpWRGhkFQconPWTmkTrG69wUvB2ZQqmukbVRjZLqpvMnW2pMBMhz9Yowo5tTAdLNePRp",
  "key21": "4pz7hMZxKoKLrxp7EQyn4HrZ41ak8CSiWj5CKENGKPp5GooHiTZ8nU89TAbkusU1pEsdht9ReqqWhcWJ7qjQhiv2",
  "key22": "54KPUGrtpSmKoSFjcKSvenWXqLYBQByMD8u9PGQew5o7g7vPCDfyubuFg5DboJLBwnG4cwK9uNVaqdLporozkGLp",
  "key23": "3zgZ2g3ZZnUSrQcAxUP4EzQx5qMQhnComfk21VDG4UvG2gdoCDsiuqrgxy8foys2ySm8wPeHTFnDxqwzZKXmB2e",
  "key24": "313BXN4CnNez1WayrLaL9mvWELbPzAMwxLqDjZZAFX4oSk3iiYmn7Sd7dRe6J1kn6M6Smtcoz1uoKAsMDuQjjW7a",
  "key25": "2gpKdM7ydkEnVTCxrJYtaAjuF2A2JWeCv6M5EvSmgiE1AM8cXBDQX5UQrRQKhphoM5LDWjBPEkUqsTmqh6ed8BXv",
  "key26": "5z7WWQYJdMyMQvsYtv91XXEyKXh1HxptHSx4jepZvGg3u6UYbYfSh8RqBNxeUt4eUT272hjQwrQ5dfiJzBjVDvbF",
  "key27": "65SpK8WVdSrLhphRfrfnzYeQ56gK3dU1NxzA3gJevpqikUkAA7xuBv3KSdPMucU2GXJChu82giXDBHVShMejNqGd",
  "key28": "22bGGrhKky3wRTNyhLAAmcLhHKDcX2mmNrwUnU281KRgE5gsQPAxEi8RzccJBeHDf4Z5Y2Ew3ZW1U92psaK63a48",
  "key29": "zau3m6VjsTQEDaXFzeG6ypZHaVicS93m34YTEXoXKFQAta99DAc1HbzkqJUx75eAuSXNST3auNekG6Bs8pWEeHS",
  "key30": "2T2DwQkeMxGvR5kdjRLSk1MH6trnQkHe18mcgMjujY1SHMX2HZJtcCY3mD5f39AVyBUtpybUqMZ5KaWFvJUK9vGf",
  "key31": "2s79pv43bMMFpKme8BPwmWcU8QmZAKsfuzYeQzLwg38TuGUomWbffFaMoBqQEgwjDU59dNXHHm9Mf5QzjW7GQHhe",
  "key32": "3v7BYnxjeogExz8SFhapvjJjNTMMqPfPLvknqeu9sgQhXN4zdHXhYgeCsNpgkNtaL9b7ZwA7T3gGGwrsdVbsFzHs",
  "key33": "2UWXf2m9DTTaD7zmQ9XmZMMZoCFyRb47BDAhMv24UUkP82rhcpLxvdcthMP4RwbXz3W8Xb4eLUBw56dLg5r55ZqK",
  "key34": "ZvNxaETjqYcN8FLaBcdpNaU4Pi2Xzze9kN2wfGahgsFtPvQEduE9aqmbU5gkvysSKGFAtawna72e7La2uKiUnHB",
  "key35": "577WGH231gqfvVpghpNcVdYhugJtKd4UoSNf8MsNwKbRT9BV2ELUj47454R3Umk2zTwNKNxjznSQB6aiv2v7BDy",
  "key36": "3AE3LpzVTNMZ3RcUmu9h8CsKV7VxxbyH457vqQgbqXtf1DnKgqZXPVyTjKSyU8mawJGeJxhtFgreXPphDy74kSaN",
  "key37": "5PFgJUss4mYPXEnnCXJgj4fnLHTKqpyzzSTgiKzwRZDCFYkdbZTi6YaXy9LadEntW3MeKfAcC6YUgNKxsM968GjA",
  "key38": "26CmrhHJq42trzmLJyZU8fnQFTg55ZU2EpoiRfnRkoL7iSva8GJ1X5qycmzZVHTrvcQQarY8TGX4WFFyKPytWqgf",
  "key39": "2yjZpvFfwGDA4xuirZGCJ82NHSGfo2Zbp8aGXsz3bKe7pSwjT6HKULc729xkj5T5j7bHGrQMGYgw4KR8EpdnTMME",
  "key40": "kSQbRX6RP8cXMcHP4W3E8RMjJRRKWZ6iH1WczM3gU3kXx1RRfcT1gsDRZCtbDvsEX3FRUo2PGnX8JCt2TPSKJ4H",
  "key41": "4zzZVk2PyVJ3gXFEdp3gkZfnZWapr3h9tVpix6SisApjriJc6a9ejskPxG5uKb27qaWaYZFqWWB9L5Z6aKRy19vk",
  "key42": "4MyRdp2585eMjK8p1ryPxjpwXet8BkUvkW3THe7drhsZfPq2kmSzFR3vb6tSX6CSeKpdB8srJxKUGijqKPkMhg9e"
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

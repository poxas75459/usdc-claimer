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
    "4W3pZVM2QPCL4zjBA7mFN45KhFxmTyqA5kJ5M6oMdozRTrgSuM325Q4spYemCnXKSVpo4GziC1tz3w5XxLKvmrDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52scoCKqhp3HPV3gxQ8Gz8VJcWpe4bDWrtj96SJrTWWsLtRUscHRdeXwstnfhjBR5tVA8MPxKDqiMabn83KFimbd",
  "key1": "2b4kfbSxsJLzvChGQEPJo4tXymiFZfEnoJNiwU7oUfEKuj8ncgPrzrcGuueU2Ev5ztJU9EnnZvZofsj5ACRzToVg",
  "key2": "2xpnaHP4HPAWHYEGGCdYV6ECVFNLdZVdb5e7nyCgjFSXcYpbTs7tCVT3eCbG5Cda1Tkmn5FvXeVZPNHSbjcGdrQy",
  "key3": "2nwiYMEA82PKCcJfsUKKaTvscePB8gyYukaodV6566dv3G6RNVD5Zwq1J1CkmrTBJeA631rHE2P6ywj9SYQJHspN",
  "key4": "59ffha8MSZcLq7jT8vqA52SghUZZ3PzfGzGrdgSn3mMqcY5AEEZDwPWewNEML8jb4SChkzZkPDA3HPPyQ8hp9vP9",
  "key5": "4hAxA3oeSpLAnForpGjyTsHsZ5yqmJvYnXNXLPtsw1TsWuqAY7fLikyHr2M8sf4st3X5rot9Josq6JhcJD1kVX62",
  "key6": "2tXeiwrA954SUMdoWmZHbuqFg3zXn4AtF93k6fsEE7EZy53o5f3oJAjy5b7tsqSDApLQJGsyBjaoVoYNkwfCJDVm",
  "key7": "22oFCGeKGJPg76GaLX7ez1k1sUKYHJReao2GLDmL6R3aK3Wq9mY5px69rRpAkRpSRwpzXcfrNXtB3kkLwYT5xSA4",
  "key8": "4D9KV6e6pk2N7hFAqQSNVD3G3P3Fu1qSLLSW8ktz8FXoYUoHQ5qAEoGQQwAtU2Yagc4UiQvsdksF4ScptoBs3xPY",
  "key9": "4NWLFehR1mtgkL3kjxH5tXqZDoXcubhUXhGyknHMkHNgrsGoqMihvNGfFmVFcLB9o6wLg96HD1tyyFXVacrz4QpA",
  "key10": "5GTrXoF7ejr3szqoYS9UPi2Vqeu5ReD3JfvRvCVNZDBUSLsqrhBXxBRMFkELrYCo2geUwr1p92TSLYxPmpqACu4V",
  "key11": "5aZL8EY11xwCnBPJ1A8DLhNdwYVKssdsywKW4JLk9i5fGgy9fwwATFjboU3ZKYB48eMNEBihMAYoXTB2VK62PoNT",
  "key12": "21nARhPJ3hEY5NvXCmc94MgiktaX3JQ4AhZ4qydozJRKSm5M7QJJZsVXzRcuCTzwRn9gz4uTN9Q1J3FV4GKJ8Grw",
  "key13": "rVHyuNndx6QaewbQKBwX1L9vk5PHQUVcGKstWKFd2qVnZaffd1aLuqLJ6W9SkD1NPk94XJzmYVX9E6oXtXK3thT",
  "key14": "5bvMopjahExbngAP3HVMSBCFcBPn7NfSLT8ZmQ2proJZD4RVACaW9bsUy1dR4XPRsUyAk6iz7cQRB1gpPnTZFy6o",
  "key15": "5xSofjpvWi2GyHrqd4iaPMbsdwQNraLFQpryFpuWbvuwpe51sx1km1KcQz3DbdHL6GTxuTFdoanoWaZ3e4n7gfJF",
  "key16": "5TQfdbsESpYZcwCdg97tUXVeSNtLQqs5dEWB5fBfyVPHJDeK6mBf4ZkomamcvZEXSCifc9RAk8SMYY2QdFqYWGJh",
  "key17": "5eTPs8PJ5i9t5NRkq1J9ET8fwsCmjAeEQVF6UMFP4tpSX7GEPdYphUWkeAedUqZCUxQMcJ9QWyY9nNnxPpiLFFfj",
  "key18": "2a5rD2WQxCG8LnW7c6w5EXtahozZ2WweFuZgHzsfxw6m3YgnrWrqwczoH8jYkDPxjszs4SGUgsaZBNmYwnTBsgq2",
  "key19": "5221gojdfPS1pNyGtcDHfoPjx9M69kQhF2JU3bLWWQL9ZALRraibWfqBuU9nY2XEitsMXV3HjPj96vSfhsYM12id",
  "key20": "3CzCVpLkzenKyjXCtfTXfRhsZEBxs8xMviD3u5h8xotrS3wHZAtkq3PZnQaWkEy5UHwgw67Rhac14pnrzYj72EWV",
  "key21": "4neo1R8CYf27khR8UHZgwhMVgypcJ4VbW3gX8oDvQ5Vama8W7r1ULs6zUespcziVXrLDDUX4oBM2e7ArAKkvkCkL",
  "key22": "QSu3kZq26tqR2XqYaLvNJ4rpMKNouciVCSPgXbdjCVwizCahe6h2RCeEsrMetxvmRe41q9ZsCwV5D1Gfn7FXTMM",
  "key23": "4csCpBKsxaNRacqGtEbWdPbWZ768dxv44jBxiN6rGwv9zYKPEBJnxoR2QJwNYYnn9EUJoGZuKWr5CMS29fGdsp85",
  "key24": "vpaPe2Zq2CDqpnYDmxgMbVqEoxsZQ4wUfZ8F2N2f8M8z6GJPGfK4ZNqKt5Y9LwT7NizZB8zpSXbBiGjCftoTJSp",
  "key25": "zZJUF9T5Zu6v7GjqmfdvfEdxdHwfAjkKac1Hbfj2sRGhqfDYsNVcHq7Mg4nLnP9hVHvVxnX6GPZ9SLAY9aZRchn",
  "key26": "3vzLWr4wK5tqMp278Zc243V56SE7SeZ3qfuSuUAg6f2A9b9LiU3J58pp6RtYeykzHnDv4iV1M8VBA5s5ykUveEL2",
  "key27": "34DMFPSH4MN24DNdTZWoFiZK8urLvrJP5KAkE6Z8GG6jD6EJtigZ1qh5ybUXr2JPoFRAE3TH7hjn8ruAAVBCwd8p",
  "key28": "5gzZtopcnx4riPUGuKayCogTbtg5gz6y1Gx2xPBQTXJ9p1vaTGf6DSpznHw3axsKu8SAagkTxKPHexynDzJXBBjm",
  "key29": "2L7Hp1EhgbbeCuEX9dBZzP6JLF4A5Ep3zpR6yiDhwUxRc4pdZGjEAVJcCDFndwsTve9MSzp3c58EiX1FzKpmsLrg",
  "key30": "3aRVadL28ZaJjbLtAUDqJYXQunQTcgf8HX3uPnB2p8F7Vrf9DiQS6wtgJvktPJ652c7vvpuZUqUstD4ysE4EikPq"
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

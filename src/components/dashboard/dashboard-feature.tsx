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
    "5dWFoWLQgtNCXLuR5zxfYDY3TWsz9GXMmwMVENyd5vkP2wpJM3DqYGK2xRVBu6fgoh3n4sKCBSyswYbzzLJ3yEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wyDmifYeiJbU2cgSezr3kT1bXdDEaSsKFjvH4xRgroDi6cKgbvwtH5xhMEsMJwWEbA8cznT74FFNyjZCT9ooz2j",
  "key1": "5yTaobqj2qdHxWu33wswm4PmmjPEBC3AVeXG3Ccw4BM8HpFdjhEPsQuf6BtmmTgXDnKvdU83rWHBnV8L4XhmrJNn",
  "key2": "5EWFXkpZgpQsmgFMQpzcGAxugJquVLqyR23fn67pGbXBfJxrq2k3xSbRzmqpCUvfjjzTDUZoFpaR1k7MjMAkckvw",
  "key3": "4f8KbxQBrEXsARXVU8VU6eTV1BdcinBewuTLttQfVPwP5ed7bhb8UEXCKjfaseRHNhqWHioDfsPDAiWQefjRWZmy",
  "key4": "3GPz9MQ7CEqAqfpPjPE9nH4h6Yry29i4U9kxd1aD1zFohDVhtpXVAhK8AvdQupaS9yn1dH4jUi3hPBs3dkpc7gUV",
  "key5": "41mRBqjYaJEemi9gUbtFXqA8rseP259GgZs2NcYyt6QMjhxCXy8UdZLq829neqdKRZ9p48tFDLpah5qXepvTxGg4",
  "key6": "4CzyrUcdCh2wWPRDWENbo7gpbnmf2kohRMDk9dtPZwugfJPJ7rWBDgDo7dRCfaAChpy7etNUKdztJxkNXMeY3Crv",
  "key7": "4nxqdzFHToVHdYejJqKvphkA5APogShpVw7nquwptpv8R1dZZ54vGpp4fQkkxVKU5mbbFKpMBopjmZyNedkFH1fb",
  "key8": "4uo4wW8baBo883HFPFrXXHPh6yWJxN5cUXffq4v1MmDgX8w2WqEprxT4jFgXmaSDtNAqB2oXkMeoXVJPHPnFguS1",
  "key9": "3mVpKu4H6EBZWQpfakBWPaxCF7L6VEdZY6awcKiK5iRHUzUHFsiAgc42tzbLANx97hjFr6tCY5ydSmtcEKHuGCkS",
  "key10": "3g3EFVR4tHBLQR67cioFSygvS7HPj1emM6s1Dyf1kYwub8QP3LGcrfhQD64UVaGmoc1aBaxceNP7Jd9PpEPR2DSS",
  "key11": "3SqX7JgWdAsLkc5baeLRGa6s892P1pyWWBfuS2wrdcqJRvLkpgZrSCm5CYTFemvB8qsG4kz3TZ2beBTxrHpxZWfu",
  "key12": "3h8yiwepR8GZTjBXzrftvoSE3vb8SjLeyoArH9dPHmjhnet65AEh2TidvGqosM2ghzCg4HuHRQjFQrUaboFjxd36",
  "key13": "5C6XivqRB6tJFckHMWkByhDh47112T1awG6u2hmwbmLzcXrH2CKLcDXCp5md7nfMT46tgzjdeo1A2Unw5uLKFVUo",
  "key14": "3Rjp8bzDBpBZzqYxX7ftuAcq1PYzaT8stjivK6B1KDxxT7rrLCg2JexqwmwbNN5wLAuU4r58TyAsaiDwLKU4hfqK",
  "key15": "31FfUf8yTVGS6WQaF2mtWxegzWEXGR9wnE1iydz6nuf9aerhAhTfyeKHXQALrderBBjapKRBRf99KaMRqouBv2Fc",
  "key16": "4fDaBRXFNeubtKa9ZsXH5krEpzAMsMBq3muvfsp4pCbSBsJDjTeDAUdbQwQHaCeKmgoPmT5UbReNoyE6TDMraH75",
  "key17": "4SiCFhsFvEHr7Qumh5cKHJkdfL4cpynPLByYwSv55ogBAZ6ot5AQtGxcgvdZbjTpyEs4yshvFMyfsFbqKbL6r83K",
  "key18": "65aFoTDuTYbgCtzk9Ewf7kkJFs7tzHzPUgpvtcgpQWgVoz68A7Wbt6TPi8TSJxJuN56X8kpSkG3g6FVecbDnPCXy",
  "key19": "e2JW5TUU3PsodopVGwiz6A2dJEHguUFBVuWhCgjW8CoG5wzTKaKXA7BUjGQYDkjwn61zzZfQLGN3bdhRB1d3Mp1",
  "key20": "3x55kbBQL9GCFnCms6xNn29XmqDdgg47ZMBLWytrR1B4tUunmtcJ7KgYYxho2mALAt9TqGcViu6cdc36RaKaeufv",
  "key21": "3LAawFpLn5mBTGidBXJ8JLCKE1PiWauPSShe3WEvRbSvN83amWusFSi8TRsvjugMnG4gmjsXdP8HwDHAYmAiRRHa",
  "key22": "4pucUGwMutDaJ2xNjqtH2eW3PXAg3bVfNLAYdNkvXQiyLVUu3PoVKf1ZPseZPkj2kGmYYSDcBP4LJprbgcVNi14J",
  "key23": "2xFk5zbXtS2juAUUWBpG1XnWKnoVMidohaj5viKFPRfdN8Qn7CSStd4JXgfpcm3pLJnERNFLGVBLG8j9Mou92CFk",
  "key24": "2rA9GBfyiPi1oDkvBnG6WwNbo1Sgm5ZM26jUWsr1FexHY1ZoHDFoQrZdNh9882NQcGpEJ93X2fdBVHTtn6476oNg",
  "key25": "2yrzYjobCsGaocV1FxHyTCA9jvtFL9uWMs76ceeeNLEAjNDZjdPjWDc6S6RmBHj7bDVQVskm7tMsng5jPiTwfnHT",
  "key26": "qbTNGdJdJypoJ63u99WNHAq8731ZCdBfnmyZxvyUTpd6uzqoF3e4NvUy88SFC83WUVmqYDXCHSDX8QiSJJJ3n2y",
  "key27": "2Hx1UoTNRxaXGyEx94eHpqT534QfubW8Saeqa4vDsdZ1v2bLa6Xmdbu9jWmcYpfQPfwgC6SYMXfFKD22V1Rfjwvo",
  "key28": "oGNwSAoGAgYAySR5qEvF4GtoJvM2qQhahVKumb1AJXQXtrmyiD6Ec5m2CwXUR7FxCeXWTB794ZvuMfF9ufc5Jwh",
  "key29": "Gz3ErY5QqeSQZJuxFa5js4ks75GvBcFn1VGN3jrowpDwLP146oV2M4FX7FecGDwBPmzwCNkTLZERJpimvpRGJJW",
  "key30": "3UNv7Hzef54BGyoHtEJeMJx3RJnGaR6JcgbwTSqyqRp6arrH6L1JLbzcTMYJZxeoixVa4CoXZYqTAhqXFxnYmWbE",
  "key31": "N67kwqrVfv1DGFMhxQgfDFfiQYFvwreJc6fXk3C9UHNhBxVj5HpEWSqg8pW7YYoSU1LoVqsAZAxFPcEzab6n5Zb",
  "key32": "2NXrsDhDKxnP31xLE9QzHjRYiSPTmCs3iD8vPHi1mHdnmC6um9VpxvyXEmV2m8WdhJy8ugGGyvLJAUYsjUBLAhnE",
  "key33": "28jDwQk9UxrwpeaSThkbEvqJy7K6VrbboEGTSmYePpLNtoKvovKwbNAoXzyKkc53gapszYBAhNi8T1qZhpPecw9F",
  "key34": "3dRnXWGcfGH4Z6FweFo3ty27WhENznVA5gvjU552vgPNXp9aTS3xgTX8yiumvTF9CMPDa4gXdq2asaCu7YAaiJ1Z",
  "key35": "4FXYgEpTuL7n1sV9Z7WYLKpLtCNZPG5gYkrJBuo3ixwkWtxcjKjQ52sadNEdzEzGZuBrJbQqmKEK6924zWeeiC9U",
  "key36": "5A12VAsXaGtwRWVPqtUVtqANf3Z5gCAAVvcnQTVFemYbzzmXNHoBXjS57QnWb7JJHNWiVhJqVxjyuUtET7qQXDRi",
  "key37": "5oCSpmQcS7RJKbUyfCuU7szCDH8nD6NgeE7nV3ju3xVPZZoeyZ23ABzeo71hhjA83f9GdhPWXFSZvAaocj65ZArY",
  "key38": "4gUTTUXVSJeMqu3THYovhpwpiFpGd9HqB2X4FBX8ZMQXDETMGeoa83LsQqV6wSh6PtonSVQ7PJKcFCY7zd2dfYQe",
  "key39": "31cGmJL5FPogXNHNJjMb5Tpbd42XDRVPa1kb43BoT9wUEWa9xrudtpn4wmZsXKqqAJ3wR2h1cBD5wU8bpZK63VX5",
  "key40": "4sKAHQEUi2DmJWryZ8WCi1rxBn8PZnGg4fg6FiAUsZHoRKTkqzJVGY5KXDcyfDiYsyTzzRNRhYchttgzN4Hx2we4",
  "key41": "5XYbySs5xf15F4zxBuwHqs6VXoKRpQRWSQADGb3zWVsJv1xKEaxgT1UVpDfpuFtmJuvqZ6tPssgD1inQSBnWmJN2",
  "key42": "2gax4BaDeST1NwGiAjfrdzyFeAoGFjS2XYkRuAJWgFM11hpL8MiH6cdMfwCqaM8oK6RyKhiW8JFcToEuby2Hzihp"
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

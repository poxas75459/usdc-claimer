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
    "3bDNPbtxavL8avwCVUkf283M3PunNPQhBWvhFKG96i5vnuCHDMtJG6vYDSLhbwKAoLQiakEbZS3VSXyv8mjJqLxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QtXyAoswdmTBSGvcfuA4tgEwTCngKrCzTowqY4nSYNXUurHamUqHrMZv6TjfPKZfxxNucwTLTCWgTmSVpjCqF5v",
  "key1": "4EWs53oTFdMZi1DtGpRpFqPWLGjdVLzKJZgdZuztzak5v7HzYonyYNCvPQBAd7ot8poYXeeXJgMLDQVFunLhX4X8",
  "key2": "2yym24P2LuGRe7AwVPFXHvUvoJzHpTcCM4Y8aUE49GGjNEYDvZyen83PegXe3xDJks5qFTeHYbLEkzHA3Hcix4Pf",
  "key3": "26cp4q4GNK3NkZC47rLiCA66E3EJHuDVP2L8C8ZXiRy5FcfyijCPyGZR8SHrgMvLALW7vqmjLsJ7ai2pWt2nZAmW",
  "key4": "5uMZs2hfKsKRXGet6JmEBnwC8oKZU2ptPHVUCVsfLh2bPP7ieq1tYKKRgGjXH2Q1sExSJpVcJXr9pwKtrrQMpJ2M",
  "key5": "4e4kqFKN3FxQedXpSkmRiv6FJotJ4D2PLiTz9UGxGBK25W9KiESKYmPbXdrvjNyRnkdZSg6pmWoDfALW2DceBehi",
  "key6": "5Lb3TtThdpV85ANuUj4UCdo3WS8HjA267Pn4aM5A25XEgUXUj82nzmZeMfSKVcT5NC2KFkMxmhMuzTdQ3z9548yB",
  "key7": "33mj62vJ6pofBrY42pyuzdXX7eoUdm65xke3JS2E753mU7DmrHAtnEvBmv89E7Umf1Sm33eeH6WGoDGL2crudiL5",
  "key8": "3Gf8DKt9KfWoSAtG8A9dzVSBqx7CVfgL1aNUKDS4cqspjk6RQDvGykdUJ6TbyYFmiFetcGyDnNLcmbJK6YmwBRJc",
  "key9": "3bCbSMew4wdnVgPwZr6NtxdNSn1c3Ta7zdeRnYb7z6uJHJqwUJ6HazAA8A1vC2qyRxCX8RsTsxNpK6rmSM7xXhNY",
  "key10": "613RY5Z2X4odRJLgUH5yTnRypMMTonvb6jX2zEWgroecfr5pz1WZG8US5rwa6hsro61VmW8abSNmS7AEqvHz2HWa",
  "key11": "3nqg1x4MYDn46WtqkHEsb9EorPg1BkZvxd9uM8jyqcQBAoUpmGbda9ALj8UbLfCNGvcwY45SJRhhZkqpQrKCrPCp",
  "key12": "L1138kmGXQSNwakLkrwAUejHBx66mapSn35WQsEu21UBQmUcVC8DQT4gMgwLQZispRQk45byNK1MAgmfWju6vdr",
  "key13": "qKdyKi8vM7TiCWncA8ppYggVCv4ALFgwCw8zNZCQ5UjBaTyqXzLfA672DvNcdJ2s3LCT6SFKPwL9NbY6gXhwsQw",
  "key14": "4XeaHyM3JWUhrPNyc2G13Ced4cGwXk7mpTL6BB1XEtJvkgAz2SZyhJeu2bvjGoNLL4Zp7mUpox5HHS7LLAf6u52z",
  "key15": "5h5hJZ6EpXP6kVcw82WEBMJe3e9Hw9Zy1wQCDsmMyBqFfSen978J4LV1oQB9QmfKdwuhWR8fmNemnvPGNRAoucxw",
  "key16": "3ianVHqAwAfse5eTzi5xNc8smdqpAqdwpSeURGxGNjzAKzstjAKVsoXc9mFj6Qbb255q8xina3v4cn7cP5xcmpbg",
  "key17": "3QNyzoiSKvynQPGSmYvjBEohsd9x6AW4tJ3pyJ4wn1WpQVBhWLDk2Tpc24Ar4knrkoJuNGYFk1Snfg931bmxjqKS",
  "key18": "25ToQmWR38FdL6SUrcNkPyM18B5r1iUfe4yNgpBKPfq8STTvqaebpkQs4Zk6Cwdkwo8JQprcGMAgVzqu3ux3jmFb",
  "key19": "5VUFQ5mTosPvArqeEP89strfpsJsS4ULnn4tVnC4XyQgpjdt3fEygc7WTNdeb6tPW9PqeAx3b9JkQV8YN6nCXJ4u",
  "key20": "32MjZDw8vq2iRGGCcj4AeHzsEc1NUWAiP8X4LXTws4yQU5uFstfMNVF9HF1biaon5XfgK2i2uMCk21N13gNRz9YR",
  "key21": "4UVyEiBhYEgbaBvZLMzTtPJwdutu4gJwiAR1qVmKNcHjesveLcBdZocVQto5DhWo6nBPhXuEyWWe8d89CsK6L9VM",
  "key22": "4P77EfM8c6hEH92SuXgQHQUDca6oFcis5kwbTVFcNmCgEWtjdaDhb4ZY7KRWsfgbwka9xYvYHLtWp64FeMQnVLWN",
  "key23": "3defPfkCCasY2wEZ38E1RQ534THuXY1ceZ4z9SW45hRZkHSe26Mebg9Y3auy97sCoydEsEvnrMg1EQowhqZpfrKP",
  "key24": "2CwVt8kUZw7teMtF4zBDYTuq3aMMTLKFSycYbcCFuiffoP2CQPKQbFfV3Kz4zmzBgvW6eBnJaztnF7wqq2DnePGo",
  "key25": "5kkmXAnsK17V95pKWnuLLbcUpX6PG4VTLVZh9KhZBXRVC1Mhvh8UZdpx8VcYJzLvE29GELfkuQHsAJZFd4cm9hhd",
  "key26": "2PBRuQgHJLUxYYAfn6hiXA3WM3wmebmBnASiYG6YbPheXGezo4JqjGXAc4KKrgRuDcZcTUQHzPukw5anaByS3hkY",
  "key27": "2mHvM9y9XLGtUGJwzfvvxxNFChiRCVK31Thn2beB8q8hd39wz2YHxGuKgCEXHsjxdZ3FCpqWZF8FdJ7FRnmU91X9",
  "key28": "275xUafy7w7oJcDY69bbRuEFRBY1BWmgtVTwvs3nquYDQzU6VVptKjHFDXxGnuCu5BY4Bjh3Td6CQwAwNbe58u4y"
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

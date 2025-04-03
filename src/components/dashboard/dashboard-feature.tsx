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
    "99XyHW94mhxrS4Pq3RwtWbDUjmbv5okZQZW2fCmKY4Qhgm57PPLk5ppLqJwFZEiN4is3KmVtrP6CQhSKpPt28Qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yJXr7Xd3e6uNeiZvVjTUccRNgDM27kSws3dxmu2c2Vn5XqGtJNrDuAMnU5CRvoCDirYLZ7zjPkc6btoTMT77jTK",
  "key1": "iuvPNUxyoBdvhMdhTFvZMEy1XM6JYLJKBdVvZhqTNt6WDBNWdaEDHb4yx2AKPN4N4ZF8AyQvEpTqZAVbLby6fAL",
  "key2": "5beaxXmqh62XMbGEtthKx9STUZhEHGm1ucAo7wc9EaLDvqWRkDr1VyKEetnhsDfgUpQMJsQSAFJXqA9WCakgNewA",
  "key3": "3iVPN2isvj2128DNRat1egNrDk3S5YVSngxzxRotJAeiJDict2eUhSoappphHR879FBkjcEBcgaeThCbniZkxckG",
  "key4": "2s2pRyLGMHp9CAsdUzxhpnuGXkRemdjfeayUk2bLxMu99pvNtze9yEiAu7W6udqRAkKyHiDN72aEFshPGsNjApTj",
  "key5": "5cJKzxyNRMrgYzP2Vmzd2FWasbR6dEzbYpmeA9NrxPbMKBFUZmeHpaSL7137a7zsg5edpQYafCzfb1FkDdomN5f5",
  "key6": "5JxLskSJA1TokqTQZGnKFaCUtJyJpw237AkJYT5CPGqhA9eUksDR8MFrEBXWcxV3oqtfyodY4Sbmq3qWeHKMMvS8",
  "key7": "5HyGbsRooLX7859NBkMHiDjj6tbABC5dVfMKUGjgrgYFMY2efMYpeUvFJ2ntwZ3nAPvxzuCC97vq7kmDQKStR4zu",
  "key8": "2WcejD7qqZjXGWvWq9fUtuhe5uXP6inMr9VuFbV3vmSU1MbBPgHrDyQFQP9fW88uc7QYSon9YcjA1sA7WuYZJwDr",
  "key9": "4tANaYbn6enKyhEswsCwnET2V4AzxypDvdyt5w2VYpJUyvxoeWjcq3mfcMBETt8ZNG5UBuuGgYXTZUfnEk7Hb4du",
  "key10": "5fxYzip1D7VM4z3AKLSpieb3DnshtSTLLod6CCn2UdvH2c1s2W1jL85reezpW2HkfADRwTUFzvWEVpbxThakXNEk",
  "key11": "7UWRTHKgJye6PsjqNTCeLiMdQNFa7ZrgKhTnHVX3zAxvPLiKt4VNU4MwzxrAM9AQhFaBZB3WTuEShHVvjVDWNQU",
  "key12": "WSfcAqGTce2YczCbQK5iwrTcpUQ8CX7hpm7RRVCayKcheRi64YQQSMBPrpfS4hzwuCeET8q2gSkE1x3iuoZzxKN",
  "key13": "AGDp119JpqGHyRpuDysNLPJCuxks5B2ZhAgNYqUnYQy8tTviS5wt8wDogzPJ1yv7NTuwt1ymgnrowHhTVBNpVCA",
  "key14": "3xjAPzH9djxSQtr8R5yM3Yh4wh6xxhUXaS99nnet3HSHMzGeaerPaXTyTKDfYihLx5Q7dRcQSfTaCqZAbBfgRmNQ",
  "key15": "1ogg2xWENqqhTZs4TgwsUgRViUET3AvdzorY3t9y1DvN5SJdnzauh5nGuNiH89r5U5q88VaSJmPzWPjyzWmMBGU",
  "key16": "4iDhWpGushQTttDviv6f8f21gZqmRwetkBZnd7q2EJB2JSCvVBhtGwN967Ahz5sa2o6wWf3vQf5qWNQcfMRNc5Mm",
  "key17": "5EPx96zpUs6Qep3AB4tWnm7oHjLUJb9KU3bFiUttUuqh6rJ2VriyYY2GZvvDqDZSRokTTKJmmutAugYQCQKzYho8",
  "key18": "3aRuJQdc7RZWz3Pg7f1uzB9YzJKEHuGpUv3Z5YnyMJwp2omQzyUzJ5A1RG3ovw6XSTeC8nbufktLjnSm86DuEHBX",
  "key19": "4bRSBz3XMKphJhpLDAm5opf8mSL4ex1qVVjXkLeJCmDGNgWwbechbKEvJ4VeiRL32Dpg2gZSaUeAyR2Ybj3eFKei",
  "key20": "44bcGgNBjux7G7FqA5NtMRok17EE5KVFPUJhcEdR5ME9md3tT5KWXSeoGRGPamv7xsWTim7Lz3B2GY3Lu6iDUnuA",
  "key21": "EjDQf7QzF2r1bLgbndSmT7nxHn8AyibqKVR9R5pD9um9ofGLvrJmf4uCp4gCfEFJPFR6aYL7kS1dWY1vC4kCWwj",
  "key22": "3jAUtWKtoTvhWUsSryFGizgY4ty4PpfRh6Z788bxuq7HG4u5Hjc4a4iWe3aDnUkoLrcy7jBQ2idg7YuoLK7PcjML",
  "key23": "pogiYjxYpKiWcWtykmPNDvgUz47mBfVP6LneYRuSX2EWnszboNPZcBDcFmyeuvKrPDdixHMcZunWpe71oJmcBuN",
  "key24": "TrWPWDanLdueMYWHuM5feJEqWNnjxNMXniJ2Y4auuPK8EHxuVMNHNmACn6U51XRCZVzwqmz1G3mdSGJZCoFL1bz",
  "key25": "5ACxkrSiUxt8Zmmh152E34abtcpqTdC7qdrRozhFUQEKkvQVw5UKvmKezFpjpmjmsFWeXzNdxd4ZqcqKu8Z3AFQD",
  "key26": "L7kryekg9mjtEGuSB7LqYT3SGvHgREKPj38sTXujoVCdvewx9gWcuA7XnkAy5zE7Kq36LjisQKJzUA7TuNtW6hc",
  "key27": "3xaqywha3nqNEHB3rwBVnaPe9KHwaAeGy1gJprdZfBCkafcJD2YVVfrh5PmUEcN9xuXbFz81c1o8N4VCZwn9HwtC",
  "key28": "27crhhLV4zus9qqSDdUUqigq8TUwbgA35yfLifHmpUkjAQWCbWTMNz6axnzwViJFPW9SJTSr4BEzwzZ5igNfAcPn",
  "key29": "28FXqjT3mYjSy37fhy8a9yH6JQJZW2hjcacRbRk7wWb21yKCVZJx67TvJny38Nk9bJCKup9uHy7QbPeyWqnSNMQp",
  "key30": "8uqmtTWb5BZyJQPTr41NjxeuHG1WojhbmCXrMwMyY41aXHFpiV9hQEp4nNxKNGKQjWmADyqq6veq18AfxYY2s9L",
  "key31": "5ouviqpSY1a7FVDd2Af5oB4bchbB3wTQVnfGAFENKNUciWXdV6M8iaLqZDngksxaf3nLH3d4Q1eXv1gWh7dzoXMD",
  "key32": "4Boxt2vpdhWwUbKAfdwt4ZHLkXggPehBshWtoEKp3VHsDSzc3ULB9WDNbavLvhFnodxE2B6DrVW1656PfGAgoWLK",
  "key33": "32LxicxMRmTmUQ3J6wzk6AMBZWicWwkFXbz4PBH1D2D1Kd8GGTRpdGZkLyqKQr4c9u4chATx4X4bRYTCB9Fgcmwe",
  "key34": "2aMwGFh7VthFk9fC8UPTKDrL4G65KPKpJWTMMThkQVDokwXxdW3uAKY9ByukvDja36jLyCTiLDBr5V7ynASrfWnG",
  "key35": "5poiqwynB6i6DNskwgLsZAR8uqub7L8pM1QRmfUaApaDHaQbfDoHD8xXxiJ8FUNmMLqDbejBtWRhNjx3D1qhonXd",
  "key36": "9Z6RUU667ZuZgSd4vkhdngZPXu3m2QdY4q2GXKhNmeZPF8rhUehjLEnVos436z9fdRm4SJ7E4CWP4NnCULFQGTD",
  "key37": "3bHRyCsVZ8HupNhWHv9yfbJhxrY1CdBGN3tJSwxCpM78EGbPYXTVPan1GTzNXmuhhvbcjAeHfPJzVhgnD4wW21s5",
  "key38": "5hZoumhj4KNLxYYVioF5Q1hRWfYaKMm9QbERbPtX11kxUdQxcwFi61B1PKzkJVJR16LVhuvHC1qH27w5CXmQJ4Ce",
  "key39": "QUvPdTw8qeNuVwSdLDG8c3pJkmiZH8J6MU7ELhncjYMESwCEzatoLnjk8HEYpFTctu46X77QhjMftxNYzYrazGh",
  "key40": "3GDwpaWoUz5jgF4TrpZnx6RwoU9UjBQbcx6GdfErhcKVPtRczB7JcfMParUsbn8gavjxP9cKmDXnPp6zKFv4emG3",
  "key41": "2nsakbw6zyDwAZ7pZTKrJWMwu1GXou2mmYwsidhC1HXb1N2xgXsK1WuWUQndf5kNVmVSX9kUiJB3pbp6hfDmZ5PD",
  "key42": "3Fb3Ny7u6gBGnCetfAU4CbQwqyREfRFmYG7HJKu2pK6Kh53antxpq3U2F3Zy9PXz1HDLfYobE36H1ChocPC5ZJPT",
  "key43": "2uP2qocyk2rZ3G3xAiSpwsqW21cyvyZbMtBt3GVGHK1HuByEmxX42gBgYNuT6Dp6NVkmZp4cjL6TCSvVdpt84HTK",
  "key44": "9WLNnZG2noXhCqJ8B7qgq8e5tPY3oYvr2qjzCnHmBBtvBgDavSvMizBQ2R1EvHZYtc9TG7JTQ8Rro5Dej1d4dWz"
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

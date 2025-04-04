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
    "5Rrfv6gf6DTENfmvzEkLNhvCm5KxKkhyTHhFGGQhcAW7SGsc6etjJ1XfRN3vfLcRgZ1jiHPDP33uctjxyb38tTgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5ctG2r3nmH42t15kn6A2yxn84r2EQNBR9aYj3mpmbewnZwLZTQSKtsrWbbRsyAR1k8jhcU1VCSPLpY6Pbue9MZ",
  "key1": "5gsPsoKiqVpuJfRm7HjibU1YSfwMi1BzUd1QRcbsgxXcGroxPyAp5EoDNhQbNVdDCgAor8dt8mmM9BZoWzw2HqCY",
  "key2": "4Tn11orth1TDfe75jscMvuAJKWeRsp4XHeJR9xbo31WxJ2KkQP6pj2PJr383krEKuguL47K1nA1MbZ8Yrbgo8hr4",
  "key3": "23iBjLKxBVRZDJxfw6nGGeoFt6MA9XYnEwVx5GaLvDdBbVUT9aFteStqDr73t1CPAD6tAZjzfKRGVa5HEhu7vbrE",
  "key4": "3LdeEbwQySysbg3TcaHQWwcU9Zih4MnUt3cKchW63tYSUthu7yuGsnDjFU3GQtpSfrddjPzLLuQTCyi7xAYvUr8U",
  "key5": "62ngvkZxm7bMqbFFTAkbuzJ3fG9XDVVhsGaVsypkeBTLty8WAjRFoSaNm5n2umtFTxrQnk23pFNrdF1Wyk14JvFp",
  "key6": "qwTqUSFzp8HVLqrCgP1bGvBGqZi8DVFM4b5diK4XPJ5kgAk7z7H6HN5oaxQScgNZCGSggNhPN61i7DbRsM74Zju",
  "key7": "5tuSdME5tYZ6pwFgHUUhsqhznPwbaurtuTn3c8L8c5KwHJzFJTn3PoRqUoAc7C9NAnCfgUadv9SXbWypqJyK7SAG",
  "key8": "4VnrR3pW6g6t9P4qYFoMjz7bMR3dUjCDMMMzy83azWumRUyEUXwyiSbG2gvtMZWjW2Dsdz3zJoPRTgaeKLpmP2pR",
  "key9": "4x6VRU95VTsVWzFisDjVFXZNHmHQTUCxZjSFY8CNPYZHJLRsKMDEz4KJaNDqmhxd3LWjacwwiq1TSnpRdEbJZVNB",
  "key10": "3RJJrNp3R3iCMxaoRLtGp8eQ41KzqVLtZ8DbxqCpyw6GaGykHmLZiPgkLuz59VAMy8YMWALhdJWtwTMCWasGt5Pe",
  "key11": "aA5Fc5qXmTGiVwY8Mm7Tn6EqL4ubCmPmzghAeZnqAihBtpBBjeDsUrsVhfQ5GYaoB2Tnz4vFCBDU9Th1GrprayL",
  "key12": "5XSAvhgobgJKgn4wZnPdHw6yMM5573whD2rpq3cx8zXvw4yvsh4KuHqw8RUEwKKYriTpH7MT1YJpxXUis6J7wYZa",
  "key13": "3bqy25iZ3qrR8RPUGAsNnP9BaPDcAK5krAwijTXhJpKfLB8mKbBqo6odrkwqiVpYG1nmw2fN7LgWFPdkmqPky4RT",
  "key14": "dkMEqa9njdMkt1WGzqAtaZmSZ1r5CwhheVGVYhSws4f4Cyy1h5VWAEaRiGd2rz9t7X7FdZKZFsyvbeKvksqdFzX",
  "key15": "419h8dj4cds1QLm1irxcmvc6W3YvtyDczF8JeVZLaW5Lm2rRbT3Yve6eC1pAK1puwxACagcipijSdxkyR24Mdchp",
  "key16": "4CE19HMXwK5sXKz5MrpSbkf8N3jKBS9rTgJ2BYUwRseJnAktojMFw2iTc1NwV6QpiQrJpqaGjQnxz3JDA6e4ksdK",
  "key17": "5FQqE9VMicaYwVqb96RHW8xgBbKcxK1RQ6h1feDBQaRryJGGDKidiKuLVcuydJVwd3cmHfJR9E4zGBeAUZ4Wv1ed",
  "key18": "euQ7H19BEjSi2wKkWzhDzdSJTmxMzBxq8K2rKx1Rm8b7ke2ZSqW2zJybJMEpwUGyGUjANA16sMv1Q2TBxQVwoNQ",
  "key19": "Bhx7EN8nPWVaJV8cyfMwzwetabpMAet54cKC3THTuwaXjH4wmsjDearTWoRVGZamVD3LPNy5apNV7MHFjVTi4wq",
  "key20": "2DzHCQpmufUcgYuVz9ZYaT9hRMT6Vg2qAYjnzvg2sCstzJhiPEWjtkB9R5JpGgWnGqbxDJ7D5mu1Z2XbA2weURcG",
  "key21": "grsWoFj55T7gaLPGHtN7rsK3V4BQ7votEqQ7KzSQzEBi9d63LwLTZzeHAkJtgzTcGqhTNEk6aKLwFPNkZ462VFv",
  "key22": "5pJD6orGoMXd8LjkEDhoa9BQ1mvjNWGnG1boPuXMSxmNn8mhnxJpaaXP3qxXFAwD2dDwRJN9KV3ki7miJHYuNey9",
  "key23": "5S9tRzXZYq8RTidgNjVXydnrfEGh8bWUg2JuXxJnVqAiMjHsrHCp7E9P7S5Nz8C4FBTZuq22ruqYp7vrMJcPAkxm",
  "key24": "d9ceARvYfDT486ABXoHNwhomVzJP3K3SHfCmFU3SbpHsjv5WKahinjFjAce8RAzkGeAeKVf7pezCofCdamnrzre",
  "key25": "4N4rnh44bAYya7qPHijLevYvRGsWe4hYNcMQsGwS3aEEAuvE5QhY5c4HsKV5m3WGvhBXaSkLWcHi9yeitfSzJhYj",
  "key26": "4zBd5FoGpQf2b2k7kjFDuPAYmukWEQjbNBE5XVeMvxZr8mbcrYrciMsAokwyo13hXHBetLxG8fQk1VdjPMnvyPQn",
  "key27": "33groFfEvXzj3C6ixh2QhnnR9XpNUUA2VpmuLNa4ktntiTmmwpjiu9vixeW7khX8naNTKpCyakvAjndoNFaNvsZ9",
  "key28": "cfJdsy9Z9Gyvz8E5Zv13wFyG4fNhwD5xtWuRP6dUXCkWhJ9e3xdbMsFEj5p2EkZaecGHcaXqkz1rWxnTGG1tqQA",
  "key29": "FnpkKBHG3XpUcBqg866oFKUcKuDpFGumw464UQo3i93BnJacdrYH5HmNHMrg8EpptdBHNidE6TpSdPUsSQiPLTx",
  "key30": "5zSPo6qiTbUCGxa7FZzvuGrNm9DSdGxkZ5rNU5b7yH7ZK1qfjZEsxBzLzfgjsMPdLxfVpm5efvqxz45zM2Pm7etE",
  "key31": "4M4XGuJt53ZevdUh52ZTyvh4NKqTuaVuCNS874nv8MiqF92ENf8ncxWDwWwJreAvDY1hwgkXt4eF6cVkrKe6C8C3",
  "key32": "4zc2FeV8gwFXPaAB5QiPFpG4kwbMcVCpiaKq1XeqxTMw2skSrMTskF6WYvk5MgVeAasQvYjtY7sj5tRrUVHSHgvc",
  "key33": "3wAL6msyiAf8m2FJZKXBHYck9YriVvfD5oCx6DkH1HcxC3LBsaE8c7WbgDWrb8CezZ9eVTE4Ytcip5QUnAJn79mP"
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

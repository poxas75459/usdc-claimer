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
    "5DYWy3roLRXJFRaVCdY6842sZBrwUEWaeb5zQ3d32SLP5at5h4XC9yXycEwhfD4Z3yP4yH7EgHQLJGx4AwCYuoE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idPyQuXpib5wW65cfCiR7H22SnPtj9xNniGL1ce7vStVgcNm1t4o9LUGB6z1xAY57yEhoHXjjPVwdrNdyU6hXxd",
  "key1": "32QyqEkzPT3hZ8HiEkN8L6QsRyQvZK9JeDnUuPJxwEJk74BBVqZZ86AR39M9HtLN27gEMJrUvhs6vyncQX3N2z1o",
  "key2": "K3UHaCGD6zJzueDGBHsy3FEazk2aiXhdzcyq6JS5Y62vYWK7UP1wiUJgnbgA3gXrmyFkat4doZWmJ7mngwAVTyC",
  "key3": "2mW5gkbuyQ89QhBoXsGB43BPXYegnmXkNyUD3PwiD9ooRNe9Knj3L5WtyvAgJ41HoktTESM3kNmu23wVRn3pFbr5",
  "key4": "4XPa5kKLHPemswYrzqvvrQ9uYQozBoNCSQVxKG8q9H6gJS6dxuFpGuKjEJhJmrtT43q4AvLkZr3xkJdGksJsLYXb",
  "key5": "4cQJHZqHYAEvR5dURFToTJ1qTsMujQG9KQSyBL7D123Rj9TwjEUSWHDbPv2fo1HGTGxU2dX1Jc48FseMmz7kqZT8",
  "key6": "2sgkyuCaVqMQNapKh2huqTtH9in65DSBu8shBZAm2ZoiwatwyiN1Y91juaHGqiN5r9P5aVXqJohyf5YUjSqz4j3P",
  "key7": "2VmdvXs2uuUgUrTsD3LYJebkaTK3q3nqJMx3M28y9FsDQkzDia5iS7876JSkukbucf69aaj8zWdjv5esURjaSxdH",
  "key8": "2ePq3AokbiRyxTdGXvSbmKAi8f5Z4wjPBwwY3knx8yz3J8Y3WFDVsTWAnMJnPnvmb6h6n3EHWd2Dc1hYwp5txD97",
  "key9": "5T2xsX96jAVVgyKiz17ixBaYzJNej3p3zjGV2WQNwTvq4YNx8Qu6W69r6GuNYBKmu87zztt6PEBeqpPmntFQh2pn",
  "key10": "5pgx7JfNg8hoZ2NnoWSFgzhSSvN4741KjUjG2enabsfELV87qLnXbNj6mbXpQZe5NjweVjecjLXg7wikAgYoS17Y",
  "key11": "46T87eazzpQCuSxy4PCZcibdPxFULaHR8RW9nCVvvn756pan4yFxm9BsBKRAMCNJ6hnPSUmaRmSfVJnCNvxyMQjU",
  "key12": "8Ns8BFUJ8942jfq3wNS51ybMJ91Jzva9XnSLcDHgLaaZdba5pvF2KspEphNJCLY4UMwdboHRaWmuGhdrMdMF4NR",
  "key13": "4MCeN4Jjr6swhDukf8v6ym77D7Qtwe73UDKQmS7Ux6Q1NM46xyw17fDs4EYGZyabiRNm8EzFrMdRHBnneP6U63Uw",
  "key14": "38d5Vho3earMDcj9AFW27MWgD4RwcdfvTxU51WSCMZUtb4uuF4vZPAVvc8xcBSMsoieRHZQQbQbkHatSeDASgLDx",
  "key15": "5ksW7Ai7PWcgWY2BbQmthpktCoLpQpUUFUoTm1Uw122hbbSi4CwL9KoyGAHTvQX39YBUsQPSBiCWcv2tfe9QQFfR",
  "key16": "2R6tif7fA3dTFq7Yehe8kf8bMnn1cGApnoFkCKwPKhAyK46p5LX4fyY7ziafF3r4q6FSk3epgzout9csWj4ZrBFx",
  "key17": "BbDBPqedDvTjkgat1FNzqiiS5QKdSmqAj8pn4F4EiJB5CB8ChhyxBwbmeLwgFTNjcWJAtgJRQeVxmzMiAuS3qmG",
  "key18": "57AmQX8ihGShZik2tLNQADKDac62kuMuKs8mTQhieYr7yVhkniaJY8UVmzb57G1P4wCwMHZvXSuuHKVwoLjs9xAd",
  "key19": "3NTArAsukxqkKD1g5FzsX8XChaoAMXsFXnGi4y4NAsmtMzHFqRgvsnirXKubnibyPiUos8zhiJbLjrj3jnRcjPNe",
  "key20": "3xkpurCgqeTiyAxN2hfHDztE4zgM8NfT7XYqem5CKm5FVJxEwb8ByCpk9RUr2istufVG9u9ZMQCFPQK3Dh7BKXQg",
  "key21": "4Xk7jSWyaR9gLkUdvGdjZXSBrxgRBV1gLHAaDK3PuPAej5W1d5VYxisxUCsMb8bNWimef4RkFu6jNPqmprexcpgz",
  "key22": "1kogoEawNb39YSei15qWhn2WyuRFUhYrgdCkBatEi8wBTuE7FuN4U93xfx6QxD68sr9DXuNkDvtQKUm2dyDVXf5",
  "key23": "3QPwXsmHHJ9JALXPzi2WMrv9zYiA1sVxjEjubCDjjJw8kbwbUF3HjnC8ZvBZ575Nu3Sbpb5wDyzizmDnXWoRuJqR",
  "key24": "SV3Ue7q8wZRcA4bD6EXG8s12CdW4K5SUaf9amnGbo2ygashE3aEVQKnwCDzgvbywWbcZN8cDkEd6gkpkqJWmXyM",
  "key25": "2FschqUKMruXNWffVGgah5sArj9UnR1Dao6HEyvCZX1rC8KyMSd5TgvHwv2ZAjo5qLQh8GhPMzzAnaL1RPB8hVfM",
  "key26": "EXpSjxdShYs7wxD3xE3GW1VSd9hexBoX2rbqyR4nyEWSYNmFJAfLj19gQHYXBbbS81k5WpQrX9DvXyCzGCtsV7D",
  "key27": "2brmKDaP6DsD8zzLRLHbgiUGbiUhi72R7HgoyQbqmCyr5UZkdiUW9q4JYnKMRK1ft53N9ueC8ttADQFgcm7e4ct2",
  "key28": "4Pae7wAMYz73kc231xasM1bBHbprbps9KhBwDkMWH9Ky9wc72WAQZc843NBv2nHaYJUu9XW3QKNXYkdxzNZ37pHZ",
  "key29": "2a1JMG1vdc2edqgChHuvSbR9KRiibMXC21Ax4pzsW4CtHdk2RbE5U5t4j9jcjaN76PnVTec6am5S9gHfQb6jaEbV",
  "key30": "3NKhzyRhcuPCZ7fVegUoZgiWmcsapkxqGBt4metMaxpfo6BkiZPjCrqo9MqT19iGB6B2SxAB8ZaFaAGbMVTfCema",
  "key31": "2NURctFrWUP3txbXkKBoKNj5S2aKBVSoGJFFrNeF2DKSfSnghLorvqYYGTd3vkJyqyMm1wCCHy2bPh6fzvMog91L",
  "key32": "2o6KEAN9EEkeDGRRZZ6M712sURGm8ir7bBqoXtBaxyK48Zsuj5xampVBtcm8NAPbo7gmCZRniE7wYVZ7eTjAsXKS",
  "key33": "63sMfUwFkfnZ5zq1zqzi9o7B2igQSBUbzGA2vsUaJdfFT66Cnxyt7EYnQKqs11MMGSJvJbw3oHLdukRNhS5i171n",
  "key34": "4ANVjMKTFmCmmr52uarojfT52EFkMmyRca7SajtHjEn1dgzGAHG2MRUB7PTxe2ndJrUZXpbAQdnvktJUpr3TfaXS",
  "key35": "63FCb3kAqArCtfcuX93ZmCgUo6Ezg51Rqs1Uz2H6PHfNRFhsuAqGvNJKjbNkenUHtG2uwjstkcQdz3LR7Js3N4eb",
  "key36": "BkLRnBjU9NfFRsRdF3npBDBrYbKnmi9LFG5LCVCHLZv4hSQZg9ykTcuPNxaG4kbt5Y9RTipRCeB51AA6mmzPmFP",
  "key37": "cSpLCmT4faP5tqFMzA7hcy4K5C6TkMFuFUcQfnKCCsmMA5svD4539ZudPJ9HuecvBxU9uNJUFzXHHFkiF1RrHd2",
  "key38": "5JPJEYbdFP7SBKkrE3SQ9Ei1p8FAnb6zXbBqyTFQc8xXEVCsuLMr1QGJcBUdaxAt9Vja3WWf1mgwjHtXtDcdyHsE",
  "key39": "3VCT9PiWAEGTdLsEYPyor8ceUgD4PbKUGErtSNG18LL7RSRPqndgkpTAWL1tXKbazQfHNyq3Hk5tRXhax28jeALv",
  "key40": "4cGkjqDpidWLgAus22tpaHGwUFSJ8UVQRtVoiahhnxDpxL44oagfP1oj6kPUPWWiUEQKUQCHc2xn7ZBqw3vUh9fd",
  "key41": "2xCyYnGfqGy9Xo6dSfdac2s93TgFPVZZALoBUQdQjbCgFoLMsvB6QXNkHurasAXVCRz37KjTvzePZsomskLkgjK7",
  "key42": "2jheUGCWY5BTJqSuVYdyK2NX6AWcFucsmKbQJsz2daxosp8Yx7QB4cxFhdv93Wpi1DSfpFvQZJiaPQZQV82RCwX4",
  "key43": "5CD4mHRB1RrgQowrj6gbtiVy3YPd9KouFrxjbZP7wsgx3bcoRPY3NYfbYAJiBzPWg59Kc2pxVSxR8LbKRy7QgWLA",
  "key44": "KrzGGvjkxiLqeKuBSEDf3bGr8Sdy1pRbYCJdNpeBYzdo2yi67BfgaBUwQifogNTGRnyDWKRBrwqWxW8ko1okr7X",
  "key45": "3TAY7kyrNmWiQq4PfMbtxcnyL7DD26B6pdwgahyUXXmMo9AjSngRsA8KwAjriGU23pVpbgKPjmkUYdftFctDrXxc"
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

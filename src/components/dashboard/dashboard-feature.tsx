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
    "2zW9hzw2gKTZz1VUEFdCwaDg5yTZxq9CRttAEPRCsz3JuJUbig45t4YGdpJHdnSbHNz1WuseUyxBBEKADidK2Sbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6sQyYHZUBwD3WTdSfYp61HZWcGqSs2374sU9wqR7ZPMTte6X293HFFB5wgZUEEPgfkM9xSxo83UbsAEeME9biR",
  "key1": "3m5JXyAcs1yjpg2njJqeoZ4S9eVMWxuhnznpcJtRa4TRDj1ZyRZKmDqzwxKi85Jzvzu7XBANXncurKEgjYGrLN6b",
  "key2": "p9oVoDaVwCTAtdzi6K1Q92tgu5acvdkmCJDrpMLQTV86PBWV2jJvq7no63mRYq3nfMLaG1uYeAuW39Ccba7NMSW",
  "key3": "PqU7GQqZfUvWGK7eHm1cVqEF5WhTzWnxBqVB7M4CKKR62QstYxQiwgPJbje2kXkmkJ2uuSgvkynr6BhxKbds53f",
  "key4": "52is5rRhLA86nRVpVmxJQ4JzQVAriz22WwmkyDSjsKA3ngv5uGJ3yuLnfMGw77e5G6Fefz8sanSupBiZSNzwwUER",
  "key5": "ouoUKGDVmEfZsQVPiUfzYzzrx8iS5k6gvzpUVwVysw5ENQKBRtUro9Xr5i6L3PPhtWJ3S9n7uStu8pi5NNFV9p1",
  "key6": "BYiBv2Gb4dtzmga7MNcaPsycV8RL7eoDZGVAgRiyfv4REuwm2Lx6GEMLqRycTZygXKtBY9dh3Lr3DAV9btsBddK",
  "key7": "HVQfm9xp1nqjXCWWHafWd2gRRvkHNxTLKSwsWZseGQBBEpnyzf2As3r8rYFUmdBzaPw6L6KYmfD3n9yay9dNtGH",
  "key8": "24JBasrjbBUvkwcrWaJ41jYiD6D8hMckEYbkWcS8D6J7L9ZShYBtxPE2qay1ohGCiXuithiZAU75tbokaJS36x9o",
  "key9": "4daQvGQ5Sp2iSRAeaXYS9fJsb8ppnrsAtkagZPjpv9d7PrrPQLLZy8sFXoLXQXBVASKgy3XaZcy2KzG5rg2xFvzL",
  "key10": "3iFaSMcGpuEaGZ5aqSgQSSUs82i4YpWNbFJHCsFEKR5NnDmo5yuXuhHkJPD9NQgKfBzky6pMFs7THS5PZvi4xvsp",
  "key11": "4QMnEKwLeV9hppkboZZb4vZiA8ngLL8kTLuutA7gk55QNt7E1JFkAADDa9DRGkUXEkE3trBQg9hv9HMcppzgfXCf",
  "key12": "rnBAK7VvkohYVMFSL68AveSbTdupwKWLj1aQNtwbeCA39aPfftwYGw2KiQ7a3oZekjXHAFELwzSyxrp93f9s9R6",
  "key13": "3tNg2xmQrpyBFrFD4sADjKhn6pdwWNVt74E9vhgT2k4BagsR7u5Vo316bQ9gNwRqJ2ZKdZJyQkVrhXcbYhshN7ML",
  "key14": "3gzjLdw83tWDoUrcSu3MF8R1sTbec8YkgxsHTUdYMX2SewWom4xKvr2vcAjEvLjhbAQke6fgUKTD5qzdxMT6GPdH",
  "key15": "ARAeDexaVxELHRpbKEhCgcWbFPTEXDn7BH6hz2atRzeXvBeZCEVusYaj85rtNzsZEJPCq7LkMvcGaev87e62J8K",
  "key16": "3JsN19oXAmyexkEk6jKHQ4UtwmXX6gzeGN5YPtKbtR2zfWpf2MnruKwuXQhCfLnkEJ65zf2bn94JicpSTsdnkSWD",
  "key17": "NaaiDVcAv1zeWw3G8CpQFG5jBoB7jBuxtK7ene3br49MBsf2g3CscRjBv92iDpdMeKmdBorGrENKBzZg2wpxzBZ",
  "key18": "2xmVi6fwoWgAqhXiRbDsJFnmmaNaHkQmfhqwYdCRcmvpvDbBya6W8MLqprcUrPcq3XHTZhFCCkQyXSiD3eqaC92q",
  "key19": "2c2qJc1LW9uXVikCYF74fBTA5JVAQ8uDy1bf57cLS39evRXH1wzRzDvw7ueBky5uYTHfxT2goyasZtmMDh8H38KG",
  "key20": "5R7c2WQA4mR79KFTApNKN4WeUcQ35MDgFXUvGLvfs3nMXDMrKwK9M3K2A7GD8LuwLADs3FCXtU7DarWaAVSDxwQ1",
  "key21": "3c6t2hnNormfM6byMP1fVfxgKzyvS1aKVf1vha7bYGF2Ea1nqKEvvYoq4joPFonMBh5kpfQPwat8u89pkypjXQWN",
  "key22": "qx8rsCYmMRnJ5xAMqwxfPUNJW2ecGAois1H26LkbttZqbYbx1qFgQqnrgfWwvQcUeC65y32A9nX6iEBskipT4zU",
  "key23": "63nrnSp9MUdhTWmV3mHvKNQ6e39Abg5tbCXGvpSLivGcS2AU8hcszG8XvTYqttgr7K29fYMU9SDQH5JZbTA86GgS",
  "key24": "5bCD9kpWugQMyyZ2xnpR8FugmyAWa8Vurfaf5WcEGNaUZXfnt7LBmS7en9GFKzFVUQwbJebNx1ALaNfk1m99gnSP",
  "key25": "4vMkCraWS8qGZkxZ45mYgrshGrdnHPeHHQTXh4XsN3ekf8zmqgsvLyNGZcSqeG4mGXqemnJjw7QmunNFaeHe5sR9",
  "key26": "4m8duXuRHeS78LgFeuF5zPFgxBgyxKAELcDWz8KrFkKfTqFSM8LzwsvZ7fpjW6mpvaZ9E793h6SysEmiATVatbaj",
  "key27": "4GDoTJ6yQcAq6AR6Pw4UzNGqNw2PtWyTRuPMH42VoxZgREnckoanFLgcKBnoS525cw5kj76bM84Gtu9jQuHVNeNe",
  "key28": "3RAYfT8QsyuR5gLewVXiuGcuocQ9iucDB2EdwYSTo4f7yUNmdTxXcsn5gQpgfJaqvin2ysnHijree4njmV7uKAhQ",
  "key29": "5xAEyLgUyybHNqZBWVugjp9SsobuSjPUg81TrL51e4Uwsg2PbdfG1U3VTiGWdfvjoskJ9itnEgundDHhqtHBkTdY",
  "key30": "yNA7RwoMC7VauytZ4iUwwxhPYBb49ZJeMLrE74EYMPKKpLbY2HPMSLQPwbm9teyTKAikq6gAm5uD786RBwtFtLH",
  "key31": "3ffuGgDWXUdzAJ6GyVcNRahiKvph2WA9y4asG8R7Koe9ycThXqRDtu6wP8qTeicUS9EzX4DczLzNV71cTiMSzqpY",
  "key32": "54dFtYo2bhKeFni8gsRYNAMkxTNHsEmZzwW4pbdSVpHpJGHDZRJTTJho72G1VEA7tyx3tUmh4EfTTgco7DsskLMS",
  "key33": "5Wwo5LSwyTztoohEoWkf287bKVdVTv2EgadEuY2Rj3kebsmzdUB3ZbfWLhcrrzTzBrxcEc5ftDsEMqf7dhyaoNmc",
  "key34": "wWnuptwySPywB5RzycQV4cti9GDbwNDoTXypiFD6epKybMftnCx1uwn7YywGyq3KCXTTJUREidvpLfcD3caAV1m",
  "key35": "5Xp53j1PEfUZpzoMB7Vye7VzPhQexVTn9FCjwijM7bvepvHymf5yQqQZ6eBJ4TScHxLX4UzPG7dq3fAL65P9musn"
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

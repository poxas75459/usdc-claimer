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
    "5kRqkvk5an4oViUNJe7ydr1XonMPL57uYbx7EP1Brf7yjytGYgTwESpzjaBVDcjNodNC96hAJBA7SCC576naB5PS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zqr9HgZZak2v2aeBiHjAy49wRxuvPUeQaBWpu5LqUG1bGY8yXQjw5nBRKfJ6cvC5j8JiTKWLBFGhwJVeJH4bgnJ",
  "key1": "3LjJp1CntHUmWd45N1cRvp7QhH6zdvMgx8v7UZHpdgXpn8pZdYEReG2ydUYLPytQNBmZ7WcVX9HWuNroh6Ntkpkj",
  "key2": "36dWzGRj1CeHjpDrfLyD4RT5j6PvyHE17dmKBVE4Ba9ga5kmpLUzFuHjq6cWFmWMPCcUeAa7ao7MnqJoAbNRoiQ",
  "key3": "3qeGwJU4geKPWHK6YAqHzioU8BpaFCVtBxLF3yQELdDJGak34oZa5GcWQxmGFtLpD9bf7jYcNpkuVvbbQTGBU6ca",
  "key4": "3o1iAMDbeJ35zuSpQLL5B7shcgCMVsJqbkpGYjafQKU419Fr9RkHVxTGawG4xQzKWe8BBSqhuxKNYn9MKTqeGuDT",
  "key5": "22ecoJPA5dMsxuXdjwcDWdV6cg63hcbDK3kGfLQyPoop1YDXVb326r6LyYwaf96tiALzY9PSodNouZ2vXgesg2B6",
  "key6": "4SUFTp4XD5MbTrNnmgwbQyxcr8qYV1QFQKBxpWEV8YbA2RsZvUW2RbtdubZRAHZebw4QYvDQMMcW7uDwFJEDJGYy",
  "key7": "3rK5PxxdR63FkrVsTGZg7JH38Y7gha7fjf8W2hV6xuEmFABGkKiggyqZnemRvNsP45GeVsiPB55nauJzfxSqgFi4",
  "key8": "48GVuHcmoi8MDDfMdBKNR77JAsSdBvro4KdYSETQDz2m9TcQs2Uw7pPcud7bBo3dCJgRXaa8u2MBVrqQZ1Cq4eGY",
  "key9": "2NgzjwvHwKtnXdg42MWWE2ZBAYd9WmGyjC394e1e7rreYrYsRYFB9Y9EZYTpb4dRdPEPcpgkQR1kkFGGKyLdprD1",
  "key10": "2GN92gicwTr9EUTjQSA71To2rUenYFYtUUa9VYme4whtdWD8FACvvLs5yRPK6Yy1an48osQKM8DWCadjs2jC5kpG",
  "key11": "bxMNQj9TyqB4mnodMXKrNvCcqZrc8m5KeftE1BStrMo47cWjV41ozG1BjsTqwUpTaoHmpNTvxwFUpSYmws1m3T2",
  "key12": "4fBe6ZghfDY8iaUBfP6hHZ63RNtoiYBA1B6EyHGEsr5Lsfju1qjXd4swfMvz46bkgpjqUUCta2wuHMiJ62cNuHwZ",
  "key13": "4P7RtM8zytv9VvrmYztSfBUj3y49zJQpnEDcBXpi8NVtZZwJ59xQnzvLWD4qjNTKaKh6JSBaihcSQkA8xhkcCtMj",
  "key14": "HVpPuhxiUeiGwVCBxNrpTbRjqPUsvNJtgE26SvUtvnLimE95EEuEP5itYWAkZb85h2ikr6TW4UKVao4rX6n6Uio",
  "key15": "59by83E2Gm7fAxxJifkYvpEX5tRHHkpkJkBvHp2UoXwVpgyBFVXxtCxgu9c3QEHFXTgtw42vPpB6kYgU1WFWHvWi",
  "key16": "4uuRpgXzxxZ5DY5fwdXymHaweH7cJ4Fm4S8CfrqsbqjtFAJTM4jzHFGc63GPywfX5G3puZnUacRJXQ7qeKGY3UDG",
  "key17": "5cVhcsiCKL78Gmi1HPdpmT6qMfusCp2S66DXSWg3TmedcNQNVdDtYnbmKjN1r2pxDqTAN8evDeaXBai9drDzLEME",
  "key18": "4JaaE1vXrQD4ntLsUkZ3Yy76Mrar7swQ9sLuPNTtW6N1q2eeQNy4QbdVHkVGchS5zbeENiSbfzDMKbqkkruS65q",
  "key19": "RqoHfm1RNGhSyRMdEaU9scVUjJ9tca3sPkehgyFBUtaPodvvJHbmKFe3mLcF7RRcB89BDjzhvKKtRPZQM8n66pA",
  "key20": "xkGHA2DtiWjfwqHTDoqVkS6qkcnAiMx3uLrxNcEJD6sFKaNB1WewSguDAiV69d35kZbVpK854iwpoPjSwNXgKSD",
  "key21": "3aXA3UBBDbgj5HBYiatY5hiAg3XmtrADWzQgwVinVtuLbFMpYZcBryKBMEX6ioZbc3npsGZRvAqSD5MzqSe5vQNa",
  "key22": "5MaefE5U3VAQ2emtJx1FE64tJwuGEYf5NdSPVvAWRWAj8dPU7HPi41GXKo3N27zbQbFEn5eVqk1SVdaWBH13Rpa9",
  "key23": "2Kjvbs2eKByv85aqkJxfV1PCXVBGvnQ2Lv4RzdMVRUK8ERTE8eEFQpwb2M88YPcd75DLJCqrodkD1VnmgtU44Z1Y",
  "key24": "2BTEDUmYjtCzf5YNMd3v7DVm7XT9HXevZi1sqfxk8FhQKaY5gsMY8V41BkUNux5xybLXnLLzdhjnZjfW11JTWZt9",
  "key25": "5vrwAdgdyLEd6d7wYfn5B78jecse1bYYb9BwcBwn8RrhxGMP7scPMG1qVi9RA9v8XidukbskQeAGoTVY7CS1hiXy",
  "key26": "2XAC9ipgyJnJydpV2MjvTh4dqq6qwLYZxmd6UB3oegcoMo5KFKueo4v9MQAFejW1Nf8jNmqcngkAvfrt5k5FYdab"
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

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
    "2WGJBBNLustJuwZaPjpwe8oyuDbSLb3d2xZq75ih54hddTCETKWvxpXfX8i12ka9t9uHVQ39bjWTjc2CbhMuKevP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SyErZ6DD44wD2pyTFGv9f74vchtcN5jjZD4rQUsp63Hi2cc61xKrwesUH43XQorXFRaJ2YDP9nKJeDRPriXYcRd",
  "key1": "3fQ6f1FaCpqnDjB3mQ5YXZYeCAZjmBhZ4G9FdvRbrPsGxS7kDYU8t6Mz1BJsY1wjsAJcSKsg9EgWYvreWNHEjvQN",
  "key2": "N4g7pwU8UNw4sFsavGsdi9rHpwKgYSRbpjrpbbJXTk5myUGn8rZrKDPwRW7zg4M6jhhRpUFSBXUa2SrBCZkx5aQ",
  "key3": "37iWF9nq8ApFG7mL1PnxikrtbzHmeTH7E7La9syE5yLAfcXzb4pQnvg6oHgD49AsGmmDQp6UbsaQD5DNy1W6Rqr8",
  "key4": "Ni7d9d6cQrhbmXxti8YiFdwKuoRjGXWq5Dsyu6DSpq6TdcXVKqZfrJpCtn3Nt7XzHJoog3hwaGMjcYacvV4ZAEU",
  "key5": "5gqZpDYZnrHoS5tfn5s1XXLkxQJYVwr44Uhmye9WGAWH2WVsXwedj87uX5qjHUmHmd6JrgHEWpPMbWW26QPD6k1y",
  "key6": "KFy3MNpSDjrWBLVkkH2cQZLMT4du2cDvbVM3b9mthZv7W3Ym4p58eu32ytoi2WRakAeY1Um8HA81jMWzQtHzEjC",
  "key7": "X5wEQpcByMyt6WqQnXyw47fGTKDCpbbFZiJf6XyumySM47KYqVyGHSDR3zMB4xT7c5L16DhV9L3aRd4HEDw1YBK",
  "key8": "2DjMNvh93GDG7HPSD5Y4y9CRcnYo98H7t6FqxMAznir1FHroZCvpoM6Rbn86zJiNa1ruWpVcWetDJ7UpMsgtZDSn",
  "key9": "3hcKD5ahNzZiwLx2keZrNa1hVaxeu38kAtkMsc3qzCmZBDeF5yN8ZmaLZvUW5TGF8zpyGDTuJ4xGeFPbWDWa5Wgz",
  "key10": "4CxfZDmFAwn6JSG1mzJwUPYRBDGyg3JEPbTDFk9UHsK1wwevUcFtsrZhe9YbXGDJ4BtK8dacHzYABRpvzaLvFdBe",
  "key11": "36RukRurrcgTgDesVTFa9J4N3yiA5L3seQeGQSn3vLePutAMFu5wYB5EVuyTXn2DHk5YQU1KWxD5DefUEpDX7ZuA",
  "key12": "3tVfMFTUUjpfgy17fHfzWSwiBPdonXCfTSeAAZKCGWthXVXNMackdc3MQnxZ97b1HVEHKidFWSykEMep2b4FULBo",
  "key13": "4ypH8RGf4e6JppafY2d7VHESzpe2FazsSdH75bEMvdb6tGnX1b2otG7QoVqZwxHPByi3wS8FWvDJpNRUbtFxuCuK",
  "key14": "bMvhSrZEzKuiMX5JNNuzmXsWrodAf4YHjexuUh7f5punhnpsH8dgX9cXPEw3N5Cm4bhrgxN4RY1h1LCph6z4fet",
  "key15": "63RUaLFnaTQofXJM2MbFKuDebgKuP4wRzgsK8TRqZok9qPGnLEbtcAajX4i9YYCyCG9yLu5dpLNZPJCG7C85B23V",
  "key16": "5T4Z3WNgi8pUipYuxVuFax3nXzxJMuUYHzN741wyXvCWYEyWFerPdhJH1acuhwbMuXKWrVNCiutPVxyBfeGxR5W3",
  "key17": "4vHpVeMrYr3RNJHY4N1EQUaxz1eNTk8JFFcsRe5bmeN5pw1Nuj2FJ36BsF3ADmftnohkEvaAuPPEAvzamxQncBXL",
  "key18": "3pkQZRZEdu7noW1UkKzE1LxK2GMk9qQKxm3hkUGUe5X1ECVuZe8NLmju9yFuhKPmKwqvL1o9dhZLtsg5XXaEAvXT",
  "key19": "5SryMpEzAaKTq29b1yXviCzVS7rmNnZnss4LNZHq9WKnDCi5ezbesWT46U9aygnCuUbeT1RE35bkwf51893BzQDn",
  "key20": "3Qma3ny5RgPyXkfcuDbxgNDN6Zrop8vquEzqXY2HCUzDU7gpRYTUHqETazQJFs8KQCRxqhSUbdfKkBuQs3EgheYE",
  "key21": "4CnV5i18gi9bRPjfTqS8qE916wuENNY7TYcvM51SCpj575PnZR835qdS22zZqg7G8m65wBrtEsWUgTozm78AKfds",
  "key22": "626cwJbxx9WcYMxAk6VEYYCcszUN2WGgQpNJEMX87qjrawAcDgMrPwmk9q6MZwbRm7yxJxJbFeKwfAKwYke48idN",
  "key23": "1btASnvoxvvnT4RQVPRSdAavb5ZJ6hGnpjRq9PtYwbM9KQcVJ4aCvnSH53a8usVi9EikTZ5iVw8kZeB1BA9yt24",
  "key24": "3MXqpbTu3hFr1B5LpzceQL932yhQJ9JZCCiNGRyESe8yeJXmxydSyk1JHamGPHXqaAbyvN9jT9hQ9Cwt1V9qWWPm",
  "key25": "1VfTQwHVfSzDpYoB9ujtiTujF3pfppUCqFPT9BZTJDzendyQUedFhMHDMpnzSnrvcHjaK5jqjSyaZG5S7VZS2mA",
  "key26": "46rzPRaUqhzTfLJeiNeboiK6Uyf5WJzXRSQteCvN5W3pehZytfuKd69jBV1oZiYmmQijSier2egVQUpq2xWRJuzC",
  "key27": "4kZTtvxgzsoNE5d8pwWhoioSasiSaqiqutbSViZHvaVCxgzF8dTCbYCQPk76UMBfG5fNB3ZxohZVJWjodi341S9k",
  "key28": "jhcHDYUbrjA8sMfzWjAmW4LHuHQQUh5nVcx3W6Uhx6WuRatP9Xns6x4vEcHxFuxiZ3GXhZ8pAQ45CFoLt5PZ1cJ",
  "key29": "5EuKHZT5JNt1dAm8gEZPETWFY6pfydLCi55YoqRKaospCJAx5Cs9oHURMosCBfH7qGDMcG5iM3ZVFqvMswSXRbdb",
  "key30": "mNDzL1CTrNWj1Vy4cvEB5BBphhED9BSNKuDtJ8MNLbsqSKHVsdnWoCeqWPqMcCGuSo1V2iGJppnNsCeTHSX5oNe"
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

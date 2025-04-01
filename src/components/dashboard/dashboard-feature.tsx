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
    "5P6K3PEF4vd4xwHcvTXzR2141XTD8Uq82PVCoGNy9nVZb1BXfHvQXd5zDfwL8rcwauL9AyXYDCQjUBqiNRqvuVPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ExQhH7KVMpVaoouC11ujegvTLDbioakftF6rzE8aXtfomJwJ44DH7mAjEMoNsDLGxCzoyaoRgRyFWF1r1G47k7",
  "key1": "3vs66xKxp1jVDNaVAHSbLCR8XMP2BfRRSQzpXBcXMRvPtdXX16VvfoG9amUjnmMxAVNvr3XJNZkTpHfkBJhe5oHj",
  "key2": "23kJiN56sAyoNvBE7tqtvLkriQ7Byc4LiboskTZhBadAqQRrXyz9bX9cVZxBzo3V7QHjQ4k1dv7iHZaVhcUzmGgz",
  "key3": "2GKgpnUKtPXHD6A34k93wHcw9bcdFZyXsQtmsQ1PxHwMvTW9kY4f3YAu2m8NffbJEd2TRP3m5keBqFtzMEVmiqYv",
  "key4": "4AgvsTbkJp61ytgjXyjYrrzG3FXPTd1HPaZZPGVmeWDMzBE3ETc5o2Pz8NmNnCz31Pqtn2EmEj4oAZLAmG6sLYNn",
  "key5": "5nE7KSfQZgR2kGzijAioJceT1J4kocjAosfCwGC5mkw9m3xWfryG8yYWnBW3oDarZ4C5o7XvkoNByr4uU6tycaGC",
  "key6": "7gFYYAQkRbPimD3FPtBZiJ7cj5LGZnqfzjHVPRGApK25JWpgm5X7sos5LkAKNaWtGnv6DCFV4A3mqPWYRkWXPiz",
  "key7": "4mDH7cQR12kPQZ8xAgULA1rfEiFiKZ2i27nVyvWChfNVqbCnwBuZB1oFDpGKcQvmu42o1TYMXRzGPzc6btNg4ugh",
  "key8": "2rF9JYV9rMJ8zcTxwMLNvQUghvRuZBV2xqWfxA4WPano1aac9DRegHzcZRJNtsN2CMQ6iiuJyJzbhuTyGunJEGHD",
  "key9": "43ZamCkK72SPNwUS4FTGWiKydVcbGYZGcwTHipHTFNm8CT1tThorneSaqZzDQ6o6wu2dYYHiNPN3heHuFFZT8pds",
  "key10": "2ZKmcarxaxXQYVTPvzxx3gFtZCNdHjHcYeXX7gv4i9q4PUkbdznzBwtg3gNwcZ4RWVDKPkhE8kLVdPq7W4wzpwAm",
  "key11": "3UCerNRNhgyZJK7P5fAEa2rZzWtDMBbiL79TsTWAT6fB8YqnYDhs5k4n87pPVyh9XX1hyNkQgN5DiiZQV6T8e5iH",
  "key12": "238YSdLX3nsb3mtesBFAjXyAZaeGrGARciydnyPAfr7a3Eeb6aExbxuR3pgxGrvdckkP2TngvzKj8yguXgmAoqwP",
  "key13": "4kLuZ8aX6BYddsv2KAQ36XPCkK3pttntujBqgD5dE1cfTJLKXSv9h66qMMwwnUwbMADEa98zHFXEnVMio1xW3jzT",
  "key14": "2336uAMKd7zXEmfmtxD3kWmAyWXFFqVbqgfhp5o28c6u7mp4iLxn2zWJ6QcxEHwQX42ZUjkDM5xX5AEGVe5i1xeF",
  "key15": "56yqszrepYJjynXTcm8pLTZUgY8EJsFefVqtN3Jksdcz1KZ6QwFvQuqALjC1YaudHf2g6CQ1vcpF76nfA25V1hu3",
  "key16": "4xWe3MsLe4Umnx7XEn1Qt7cp6M84DD3DsX9pLef4ayRRXu2gjZ7HoMDHR15uxDg62dQB8Y7qqPDGdiRr1ksTomkP",
  "key17": "tP8igdJJd5A9FMzvShXK6A8XiKXCCSaY3VKZQbDTvUMKGRijMViLrZh45VQZb8kossMZzLr8pDfVv7xpCLPehV9",
  "key18": "3Q1gTQeMjGf7YfiJZVFayQwHjjPkLNfcku42BeLT7PL4SdaGKz77gpTXKgVHPQEpcEXQYN6foJceC34d7jEbDr2P",
  "key19": "434Sy5bASPRE49hWEqkxv7nvuPXHSaYYnkHWoMRpRn2adoQewqdHqmnVXw7hBFLPVh86mehJdHv8FGcWxzZAYJM2",
  "key20": "57iLa9kSwZHhc4eV7nSoVy7GEPhjJGs9An5ra7AGJ2FviavW4UPK38Y6rTsj4MR3BiyAyArt2DrRkqfpG4JggZ4n",
  "key21": "56NZJhboUmZo8NuGqfCR7GcSdGVRxSwLtxCTWWenaJTSQQ8Drv6jWKyhCxatnP9v3ZnatpU7Xr6qw74BWBKjTQ47",
  "key22": "5EvyWjrS6arwCmWUndbS8NTEG13fpwgFkFWW2mxS7vxTkEw8qJ3KPbxyJS2sjyCPSQV7VUTvFFyhqYa23SCMYcSW",
  "key23": "5M99Yj8jExfmA4zCuyq4VzcuTF9zqFMkxomZknZpGdmiUrzV2zb1sAfGEfSgBF9BHxH1RFc41nC6yrVodVhDWVn3",
  "key24": "5yD9GJk7LzQdeSMJeufba5TAxVsqBAmdhbqwSDNpDYyRGUQ3hMyseM1oy6oiiRZYhjKboT8y2tZaFuhi7h86pZR8",
  "key25": "5ZqM5xHUS7U1NH5ZfhQKdp5xu81bYCZZWY5s51y8HXGFC6SKbhNCe69YDvgRh72EaQzBNeZNbra2LqHucruKaxWe",
  "key26": "4SGUVZ6CbkTnqbbXuPNCKUKA6KPRMXXrBKjS3aLmodTF6hvjvcs55mRboJ7xz9sNfrRgygaQzXoeCNTp9MTDhCN7",
  "key27": "JN8bgDL4SwYtjdeVf3H1DqZddxZ1sAAVA2qKnxZGP4RZpWhKSRmQSq32HTZJRSpTN67oepdgAm7fpFsZsFgKnKm",
  "key28": "4WmyZfYP3pDBks3U6wDZJdtvhLimzCm4knMHsnSUowKDz25Sz2yH7URbw5AJrjYiPbzbqWbXTnwp3j6tg5CauTPa",
  "key29": "QgNcoMifbiHbQ1kpP65Rc7e4NULToWg9v1cBpTpRez2sCQTxtGDQayLqfTVYsoZyTtzQKEz3hnKC3CwHj1Y8Cvh",
  "key30": "29QJqnR9yhqikgv5nojWeMcB8yQhfnMLN3tusY8WWF2rpa3UkzT6PTkmQ4DeGJ24YJ2mRiJWi614QxPztMs9AV7R",
  "key31": "3q5VXkrUbGeykrXfb9obWo1upoxPktxieo4Q1XKRMwmuZ9y1b1dt75CfUGCA6zbnC6S7ZZMWiRmeTV9SD28ZufNd",
  "key32": "5pJ4wfzwxAhRBc3SZZufP91hjRHweUrQjqy4iPussKoQmoFQAK4UiSDsZVHxnEbnpqP3KJKeKiCCieZjRVQCBnKD",
  "key33": "41SqdHsurBLvk9mShd3mCYJ8nuRqkwm1ZySdZL2TKSwDDt3BSZT6LCkDNYY3TFqWgNxQ2komKp22LdaErh3crWMq",
  "key34": "5F3ke7iQZmBdxaw6JthnSYkthugbYdQJ2jJGYiQAnSAwPMryUFgbN252sczunwMeakcRQc8oLEEHZuL5yN4Sjr1v",
  "key35": "5p9eLsqQxKdCCNY7d4VHYBsvMDrs8SSZur1y4eyMv4UqFgCbneBSNtqonGn8vmxa7M6J9AGuNHvBCMwj7xLYvJJP",
  "key36": "3xdEY7pjxGPNoe2PCusSCpsbS22bYEfh7NRWXsc36nAJraUQni9Zim7io18tdVCREerw93DfwcHzBKvt8QWtJAN9"
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

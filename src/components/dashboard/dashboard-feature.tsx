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
    "2UZdVdyY7ACmRzoNBJcjpp1mzJqiQA7pysWzmGw61t6j6noJC9h5PEidf4m7TVmf7GPYV6h4FDCEYAYg9ncX5SwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBqyPR85fw5LdvkQGtn3vMLC4TptFMyVtUPGJv9y5qXNpSvz7mS3i1raQyoYNZ5PNYU1iSZE8DR2n9oDSNeJB3P",
  "key1": "3zkMQrPCMxXiyzvg5CdGQRBG4MnBingn75QAAwRwV4TVUfVjNUFpSSZ3DUzrh5fipz3dBph9Yu4kuW5qSJpyafiy",
  "key2": "2MDxW8r5XfwUdugUB4oxFcyNPdp8qMcGab6JPP4scd5YiaifURy3pXEfKAh7AeNM2YgbGmJmW9m5CxNE94yyaYpo",
  "key3": "4BPaM3XFZSQBGqVwnqkz5E9yZfGBf8FwBVB3TiRTBLGWk4xCWu2H2p7awFXkkY4sXbQrWFLWPBJu3oWq4K2qd2G",
  "key4": "Wd4EGeswed9DzEEscK7QnQQw62tdajs7FfUiM3FekK2Mo7u67NErFaGcMg2dD8bD5ibsLRvkos8QdftQJWsJ5UF",
  "key5": "3jzWhXWu74cuxvuBS4YRKWJfJRnxrfsMgaAwPbRZLRFHkcS7etJR6ajgiqoTtBYpsZKZhgpuiXg1thFqA87CTkGv",
  "key6": "3sFb7grKAMQaCTgCM8LySzbcbGFkDuHBXTn5c5Le13ftPW2TsrVPDW7DfhUjeeEzY4afzqn4TgLXYrbQMGmNUedx",
  "key7": "3JA2Ts4zc48WgJoWuXZRZ7NmYf8vTsyFFXA4nZr6CEkAybF55Gkp9PaPZG1GWDpn9HfEJQym2zhptkLBoXLVykJq",
  "key8": "5q2rbbvp1kvyzxf83fJmeZfAMnhReEn2fF7P3hdjgxaf5d81DW7kcmkAKbqae6nryo8Wxzr3Rj8B2kGDoYRyiJb3",
  "key9": "26qMuKAn6pbUbajbvy5NcsGGtmQYx5FWj7NRZNDfngfvQcTPRa59LS35odvAct3CrjkXaDTeSH2Cc6x1zYjZ1Crt",
  "key10": "ug5QrhV3S1BuXpsTjRr7kh9ApGPLRXBkpxEUYHy9M9v4ehxXoLLDQ5R44gCwcL25RfHrFrUuoGpC4xmwYDVdASs",
  "key11": "5QZ5VMqyGSw2sBEAzHfmBnHUhoRwjHb661TYDbxD1JXcRxNrHNkPMqUv7zDGrgAfXqvpgJfeBZdd66NspeE6Qndj",
  "key12": "3EGM6YmYbFgVQVmy2eoP4VZNEJLFdJv1ehARgt1QeZ9VtV5ibjyL3Tz155w5epjF7hadHaRNbkF5dKYvwxhGSysf",
  "key13": "4yxNC4jrP3b2hQkEWzDoFLS4SWkybShzR7TFDff2ZTVoYTNu4zAM5yd1UMERdDSRDakWKK2h4exv2EBcniipLnUd",
  "key14": "34f7cmfZPvqJ34eYMmQvJCGp6Y4rYzs76ouvGfsJiL8t8j4GNSx5B6ZxqtkYknfRSN4dhSsEXbpmrpbnd8Xjj5vf",
  "key15": "CmSnkqsRysSUttp8fztYDcruJsV6re1RXwPM4inoQ3VLrjExm5k482cD8jNtPAeeaneo9Kq2xUQWf9hgAzmGmS9",
  "key16": "5CSuzwUXmJ5tGUsxBLEooVrYmYWdG4EcS757KSfAhMpLgWXwoLqcHMVvg82XQogwRQ5BM5JAVu1pH8e2tWQGiowZ",
  "key17": "4SmGgtmjodAbet21Bxk6N384Do4o4sJkoW7djtZmDo1w8PwixNibxAZXCB48UvUfH86g67Vsp3ugxjwMVrQMKhFw",
  "key18": "4XEegzxtH1Euqc4LiawsBKG68F5jvHm7TCMVhnoNKPxyWeUybcjKGDPsEgnntPCrgmo9gGAQhdaWzRwdAc2kPmXN",
  "key19": "3TJcbBKdRtyG1ww5GJXjPb1XzvUZBLeoryRuoX6GS9LTbr3KdBujnuc9jqy3BvgL1UJQHSakuibNb6xsA4B5oyYt",
  "key20": "4d4FyikNhTX8ZFtTuJ37pEnTWKj4mUAiLBLvxKsyTuTb8Kf1JYZKYd5dTJQGuztxsaRJB2FopAjNukD8bFxEkR6P",
  "key21": "3wFcCnD4GQ6EFmo6dRNHuPaRKwjX7fY1f6QxpKfAFEuzkWTKfj2BtNWbceSSQ6wPVhaX5mq3UrjNbLkwUMuiW7MS",
  "key22": "25p9PD81HnGizYMBC4bUTtznksMXD1sHRazfJmPo5FdKzUeYk1f3P8jbRoh23hDEG8Y1wRVggEKAt8LJfBMimmX4",
  "key23": "vNA68H2MCwdSmqGYktHqoTgMKM99XGr6RrW1o2PqjZJwUtQpMjxYR2zRwCEGExci6BqPy4wMnd4Z1f7TapcfXkk",
  "key24": "22qDu1WwArh1XNUvXUcwmKn5LuKuYfH6HGdHcwJgLpYf7RJDQ8Nrex8LqpXVbUYKEy98RKP9N1VLufTUZJQmkBew",
  "key25": "42qgyNTRBDawkocM5qbJEued1NjER7fgEsaxvkWLZeoBZJXSJSRzoP5hu5xQ3qMTGYNjnsbctEzFhWgcsGiNSFCq",
  "key26": "6436RNhBSZGWSR368JLnk7MavR82VvTHXxtpKFHBTFS3YzhbnFqKcH4aDKCvyU2QwJ7qixfYHbF2MSYG4RydSnRG",
  "key27": "iR8QPm1ZMb3EYA72s8Hk9i5oA5WFGJyFiqwuVySZ5WkQzCsZCUAna2sDoRpNXerX4o2jVmVABesRGKTpNX3hEdg",
  "key28": "31eapMKKG5dP6J7h2LJxEEAcVSewKDjVYYketseWgXJew9UQa2RMZikxXVAzqTqVcAHXTXb8jEiXYgaeh2JmpZYW",
  "key29": "2bNSfnza4kFqKTrdgA8aQTfa8DFumsw23niTPssaHZSnPPMF6iqyJ6hmeSCcPd3VWuG7ZbzwQMhbBzrZ4m84Gshn",
  "key30": "4QWZSAwDa65WbUFZSa66FAfLSzR5tdkfQ1PyBJDkkcUmfJwe66Wpoi4fW1PiuxtBVfgPmifHkXEkDQfct8CY3Jxh",
  "key31": "4sKaVEe4i9kARBDvJ3YBsUSH8cLhP9RTiJVMsx3MThLa9owRwahGL5yvEEDxQfcBaCXNvLR3ng75R3Yjz1VsoRMF",
  "key32": "47TX3Mj5veBqhFXi8JVBekKicnjW2rwB9jEumuNUWLoHpsQzx5qkcp8FggKLsPigYpmeuCHqfZ7vkb6Aj4TCBqNB",
  "key33": "3UTTRKscxwCQkPtC1UU9J2mvjFDubHPh8CZjzoS2YqwEXf5TsjTBqiN4qEPwMzucbv4pd2GXwExuhyh7QDadv941",
  "key34": "3W8dDzFFNJccVm27iEYhNqKJF2eb4GVjCe4LPV8TQo1xq6ewK37YAfdVEi4WA3Ue8cKhwZUpuq7BvbEiv5uBRiUz",
  "key35": "5WZHAZ6kVWB4STvKkwxShpfhCs67P8MX5DzaJ1DXRKja6HLNWpx6AkThhUrxpNskpv1cGuH1es6W4iXGtzcTAPqU",
  "key36": "KWmaEXUxtHXycafb4RXZZGSNN6WX2vpscidsY3yysG512Whorejb27PZKopr5VCfwGYAtF8Nn5FT8po7xNgAh2j",
  "key37": "49x4weWdxreFrZojwV7KxjDw8p1g5BceLgV3DVYi5ywgR8wyfGxqLumtLpgW1PDbuKfZJyLRzQ71dznGK3yfL3Eu"
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

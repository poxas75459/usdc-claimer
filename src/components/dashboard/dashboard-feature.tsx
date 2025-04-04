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
    "3LrQp1Jx7SbtNM5LdQHpCuYUnaKiBMSgBwcPRLGTgjHafcU8GVPTJKsztV4QENtqo7cPnogfNP9Gias1xnRhW9uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJF4Vdg3QksgqDmqACnaWiaS5fzSjPWFkSukfxWYXovfDG4ZAQbS5kyMQ9skX7Pg8vnaS3a9gs4PSVDT5HUbHNj",
  "key1": "DU4NQWwG9BsznoA8Cw8CFf5LhLmEWBnQwDnUeYhHprf8E7cYd724e8WrsFhSjScpK6Ycg2wzHtoSunAF8ZEL36c",
  "key2": "626DSKMGRzHMJAe5R9Vac5ro2E1h6U6tNghrmTnpFNTN6Xq934MEFA8NRWLAtzB6EWKWG7hxJNmpiHY8SV4nBGct",
  "key3": "45Rd7tkNPfyakhEyxoi4R3xxAsegsRyUPtW6zB57WqixfMmisn56MACe6Aa6wfUAV6KxJUFdpyENBzf37tYJJ2UV",
  "key4": "65hbhx4ESrHhJvTHjWne8P2ftyMsQ3yMBmdRRzGFmnWGFi6iu6nSBTp1v4VgpmFe8SM2en8SVeatNqqZPhXpWWBJ",
  "key5": "5vThuZJWzAcB811fNnoHcrkWAmzk1kb7SZTYYw4cgagYeDcTVu72NcMT9k2VZ7qDjGL3MaJEafMKop3djV5qKEf3",
  "key6": "5t42SZxnqbyx6RKjuJBnwiVjfdAggdBcsxtE13rie3xPKjMLsbPLDowyqaL17Qz4qo14hmpV5WzCSERoggcds2j8",
  "key7": "2XAEzVsJ4jL3NMP3SXy6fjk34Gig1FzB5cSCtUtoJnNMj7j8vKmmC1FZRQ7Nh3wsFGGk3rtpRmDwq77pw77o4bCg",
  "key8": "BP2iiuFmq77ZLtTHk9DPcZETcwwCXFkt5eLyNPDkEP9DzCEsHuZBuHSYEWY7vA6FMzFCGY1eghQEtRXYXjb1soA",
  "key9": "4BpMRfA6y8gqcsoQ7mfZZVbGgoAuGvKNZvMrys1r9aztGUvkBG61sBBrFP9Yo4MBBw1vr7rQV1QX1g2gwgKrjbSF",
  "key10": "2Yr982HBTQceis4stu7vWrCuwsX2Wd2iXGV3SKiC3qGqqve9TPVaon5UfZHES3mSJWrcUnuTPfD5tagSQBLFiymK",
  "key11": "kDpipfAcFe8qyJ2tT7sLHojV5AaXbaXsorEyoLnATTzE9yYnaaui81snTvpbhJVTFgXpNbbVA3b7qvKeJYW3phB",
  "key12": "2iwegA57fRffSbT5XFLDzB6DE7BUsUvSZgg8EjXtKdmXMdB4BUdt5BKywT4sNkcqTV9rTRrcZmoN36VXwQUubejj",
  "key13": "349Rq4dFQ8ZavP7cM2H5h6iGfENztLb4UStWawmkneJEn3bJdsHgQpkzrUYsgHu9gKHCaMWorwzjKbb8HSiDjCNW",
  "key14": "2xVjumnVYSusaTcDgsqtyGSDjfa8LV9t6rS6n2MZuEyJqSMyaG5rvegJySvLEA8DNWZohhQqTWyph14i5J8H3ZvX",
  "key15": "5TXGCc9nph6878aTspKiXowr5BYomyRfYgz9kPqGdFnSrYbz1Mc82GXhuN1NUD5pjVnYn3cuqU8pmUg96TiZwuNq",
  "key16": "5Ri6oMsn9oS6F6hZBxAyEf9SbUm6DqTs4cCzmDgqE6ba9bT3fbuC3VAdvf6t7m5KfncyduQys9e1FReyN3jaYZbZ",
  "key17": "3KMqSBRo84r69bcjBhoibwuwNcGLGdk8qu3bPcUAr8btcrNQsPZhzLV2isWXrVGsifjVd1P3hTL56e3UvAihUmqk",
  "key18": "4UwdpGzA9GpxEALXuv42AtPnQD7yNSwG5v3SeXEpV3TVgKErTBRoJBhLSMiqgk6eFzEizzJVknRSgb7Pn8fiwmYk",
  "key19": "2bBSvzpmSEn4YJTTye3NYyLsjZq4sFtpGpod9xi2UDQ2vyoU6xtw7gFR2mKKw42TmLJ5KtrjRTj1FJgREAwVWeXn",
  "key20": "2NAFwweDG1dMRQkWCCn8a7qy3QiQQwnUsVHBJXHmBqYUF9TQgf5PHvkD6yGfDpSYtAasdVaVbKPgr3XBW7md74hP",
  "key21": "233sHKZ7ZoK1fAuDuowxD796euLAQG8TZYFUFeifKHfCQiLtc4SchHXLRbKkRxraWmNQSX95wcuqnXpP3QvMYUW7",
  "key22": "NWefHcNpV8TtcAvYbJGqtmbBC1ZTtkbZ5AWHbxNS4ZDy97GMYmgu3bdqVj9Nhr5jmnR7nAhfsURTaHgHoZ54E9S",
  "key23": "2ko98J1Sjxe4RAV9hLYQjJnF7soPWpL3jrxVuGujAmwS9q2eFR2xtqPygwV8TqVPVftQ6QwU9R6yRBnxD1ifeoS1",
  "key24": "rSLVNwHx9hwDQiGQ2dsks2nE8JkN3QWsQzLUAKSnwK9qEidsEdNGGeK7ADBzgsqMXMmdws2Sciv3saw7iG24zdU",
  "key25": "4geNaxfqGYFwe4SWmjfyJLEHiWhcYB5TM9Un1GEabie8JwHn2NDmT9BX2E7L2BivcdREYuBKvkyiTD4Lzn3qjQTE",
  "key26": "26mgLCBse1Dny2p2mBLe7cKarDyhjzZSmgcJfSoSvA5ZocyuWBqQukoUL8g4sg2JSYC6fWpmkcmbEQypEKZw1vqy",
  "key27": "2AjJKxRxUA9t4Frs9CbHzL1DfRjtvAD4jbKnTfbQ3E5QiHwwaQXVHyukDCoJhZrqsuHwvfD4RGhNCVpZBBc5Ejwt",
  "key28": "5LX3vTVA3KoKM9D14zUEgmggdB7amqQZZDDz22dWYCBrLiaHzeTp2i3y5GwZx88L5ddWiT2mZR9Nr4ZWnPGWcvZD"
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

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
    "4hDa6gd5PagrnvwtxnY2Xm6KgRPVJrxQxLEgcoCnfzPkQFroo12YbMPx73J67tJMY2W1TgV2o3CRLwkzzrtU9aAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49MaoBo6tC6zz5KCEaimB3phQPwDEHquh8P71rCmQjuq28iZmjgsZejZgVFKhuQecd1pHdJVcfiebY4f1mxnVAco",
  "key1": "41dVJzaRYUZNb65d6rzEG4HtosD337ygXDoNnZSWNb1Qn3PTfQrWdk8cxC8jqNuM5PW3dFbRuvb5r3PRpBgSwXrL",
  "key2": "4XFxukRufvd6czjMhEHkHPmqDgy1vYRC2VZaHesq6etsPEdvVxMqCiVtFScjoi8SsHY7XLY9renW6grKJfdHQ5ym",
  "key3": "5UJ3CfUQi1Qsi2USd3DqBzjQwQwLh5wC93pBPb3HZ6RpYm7s8BMFktdb1VcLbmaY7RMJxLAziyrDEDhkvFBLY4DS",
  "key4": "5x938htKiSQS8uxPvNcqAjSSfpAqnoeFdJxJQqxqwPLjWiBG7YPMeVSvxYuzJqgXVxp3xNfqw55DUG8N9m9Bpyvx",
  "key5": "4HvVa6tj66xytWsTg9N7z9vJsjHtZeYvSWcgYwvVkKoouM3BHvJL8oKnL1XKEd9YX6bnzwh1XMtq8f4N1faBQJdk",
  "key6": "x53pNckSRetCM6cxNjpPuYaqzZe1NiifEoBneFGnXjDTcxXfwbGkZdeEPn1kjzKR6shp3JXhwDQH2NyosKfmK1X",
  "key7": "5T6fJqnv9YAMGxdEXnQ3vrvF85as714xKvdMDav5eACfX1bH6232GYLaWiHxf38cYSM4KjzGpPU9pXWmLxvFWJDh",
  "key8": "qpRFmrY6taNN5wv83HApb8NwQR1bKfVXCk6EfNovY8NqDFrD1btZFjHfhDT4hYswQhLd9bBmbkGWSiRJzuUTpmr",
  "key9": "3hGvJ1f5V81EEHSB1GqaX6579ErPnJfRWHjKAUxpm8MyvYQSwGcenmi5ezk4f4SBGxGoZBTQb932oxqr9poSgKc",
  "key10": "2NuqZ3DX7Ab1hgYEpXzJP1H2JmaHiaCYetJooXs9Zs2pQEm64SBdPmL2Jmt7TZ2Bw6rJSq5g1qH9jmAx4yqmfvjc",
  "key11": "3G2JzaKY96eR8UTUc369EMbKFttDcZEHRBoN8M9L7q6KKGYFkaDqiNm8J2Vy1aDT9gLET7fdW8MvruXBW9eB9mSj",
  "key12": "5xHuBQ38HAEEPw3SoESjEkQaxFM559uN8Z57yKvutSXGWuWydCq9HWR6pRnvXygxDxCxgna4gz9vDBaMDhd5NBJG",
  "key13": "BZKikJeynCQcQemsFH6JHUVRvPraT4GW7eCBKwPni7boWzcAaRjHnSsVqGZJvJ41SsSvtzmUSRgFW1rYWkED4ky",
  "key14": "2yQPa9SBiSXKWd2rGq6AneNq5TYEaADmSjiaPKr8UhHipdkg6G4KjUDjHSvaViMsYvrbTkgHwFXDeYCUSrjV4EPT",
  "key15": "54zwipR3Cb5au5FTtWchAnwic2G2fsNqSA2yKbvkhrNFvKQEhaDkp5Y9c1VeY5AnqokiJnhzFKeBZQBCrZJ8tEi1",
  "key16": "SFYuehZ7FYieaqu11TVXtqt2ZZybgGQ1KuZLp3ihLRNhQpoaHefiyKtEUmUTzdApmQLW5DkaHxtkoySrCACLFMX",
  "key17": "58nRfawBt4ABKhv7WXNaK6xAxfsoEZpnubA5qoVUvNGQpeC7EUsv5DsCG5Yxbi51PoaNsTGhkT7V7BZ7L4PcuRQy",
  "key18": "47FTJWbgAWJ5M2RaQ1k3B1V6swjW2QLdQX2seuVHasbyy66rj9TN23PvwtXtz617wYvzpFTwhd6UY4e7WSyTCDRE",
  "key19": "5KJZv6xRNH5Qvz69tmhQSKLDus3mgGEpKb4RP17oa2GfpRYmeTnFjtcg5Vf2kAKy7VErHBaXkeH5RHyb9xRscf2W",
  "key20": "2bZUpboiu8RXZLsPinNQ8MqCCxgLh2easv4iWMmjjsmc451tDydfT2NkHFysoQi79jbfV1Ui46wyvivdhRgSEvtr",
  "key21": "5Zn4CUoomNNS55P2r2wVBvEV7Din6gUP8AraPug9WihjuTXh8ChUPKetmzM2d6o7NaVxBhZXTSqfchpgacHzNJFg",
  "key22": "4XQzq5yjhgZSZ8GGb5DjiPsbvedrsPoTg81kutaEHDvBLLjr8cB3rDsA8H9BLNX4qWxM4DxxtXPopSqxQTvicVLa",
  "key23": "48tKnZbKhxwjcg569xcpEXHApcH4uWQeLhuumKhzJ3aQxu1aGPpU1ch6Hrt4KWmqiyctnQ6a7fzRkHApCKn2c2z",
  "key24": "38kbRbqELsf3uj56EP3obFqkqBmMnJEKj33ULMdwN5V7ZbwjoxpVbge7L3u28VtDqhCtSoDXgGUfayNPVEjiTd9P",
  "key25": "5kwux63zn8zoQHDsYfwv9LuN9yxM9ShvDFNCDKzN9JMfDuUS4AZsFSP9RAxnVtjED5LsHxXWDRtdkZqPKz7R48J6",
  "key26": "3FArVWja3BnHuLU26GnmvCpWrPAy6BmDQyGeySyFxzC6vAgDmgdiKXkdb4JK1vrPDqroYqyHG3Gi1RxVhw4ELZPR",
  "key27": "tEqHyq9VpQoPse2Yrw1r3Tz5L9dc7rrPQ3enRn1g55tpvQizU1nphifgVh2Gwe4KwEarEYZBM5qMYC51dvA7e3E",
  "key28": "4JBHJKXuc8XXUxcTzA9WhxN1GDCLiiMCEWfwmN4LEo9e3pBrMBawm4Et6E5ejH39JbcRFT4NkBzWHp16DFL5wmC2",
  "key29": "5YBnmLNJhBWyfjhbZK3do6oBTevk3NNkUpeFt8qq8Q1CtvD4NLZDEpfjzRR7jKHEku3f2X7h2P79Hye5umbXC9si",
  "key30": "35cLsLofPTVyS23uWDZ2BnF9RGhybX7vVsVn9R3voEwex735CbRnmiXZxyy8C8x92esQubGyzATtbZuYq67xccGp",
  "key31": "2ahSKLv4qVcGUeFLzMz6EfYDdzxwCxDboYaQnUDb3W8XaMAya2Ao3dUEreZqSd9vbok4F36Hr1A9QSictJ43JEDL"
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

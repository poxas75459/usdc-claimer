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
    "zp4GXTga4zhHBMfR7XnLRB5y4CJN429ioSgme9rdVrawA6eS2129nXJHCwHtuLHA86v6rqy3ccCuf6TzefVJcpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HVq4QeQLjCxvUtNZ3eYR2tZPSatHrMgx24KsdFYY7fqjbPxMrQVz1mNWxH4crZwS588CCoYDd9sULQybeYbXGWM",
  "key1": "4ppHKfGLJSe3hNrQPS7yLfo9yfeqhEHSMXYzR8SJ94URzAv3cZEfLAHjkFT41xbw7Rej8NC8bhJgEHHX7REA5ekk",
  "key2": "58z4Qzmq5u7Qx1yeqmDXwr6NX1b7JyWHxPMC5uRbu6zuUMubdRfuXY8omhVqhV2uqevcVyTMnK2y6wRsh8JAb31E",
  "key3": "39noUhE1o52fuqQpM2cTBghuXTcfNywrYAiMxcm8aMzgGeVnaCGHkxza46bYB3xvGPnKyC9SCzvRD143F8weYiBA",
  "key4": "PAiD3eY3PTwbFBBYZgZkr5kWVVosDtUi4bKKcK7Timhe5JyKs1mKy2Wm7vBcBCCovit7VCGN8HyNgi8xiDxzcsA",
  "key5": "291gYkp8935rAVCHXYZh1kU4zzzEBPoa96eDc1RqvMJBQL5qgYgptVt273VP7vihrocw8EALwyrmEGkLuKB8FrPY",
  "key6": "23oiDFRY2XWVu4RFacMee4BNpAAjpUuouLrNFaVbvvPkjDZbwz41bWmQuoRsTJiDB8y2mUjn7wsyJ6NWGUV4Phcg",
  "key7": "4FzeQSjj9McMdbFT4bVgfCkfr7iEBWoUNwbrPJgcoPewB87RA5oY4g6fV387B6HbbutxY4dZBSzRFV74Fe5rgjL2",
  "key8": "praraCBmcLoFpnmuVWoWZv721WNKVnznXezGtW3oKfmDALSqTNX2U8WQdS59rwKJQMmVxyg2qgJpHzzs3ALiRdM",
  "key9": "LAZDyh3KHpR2V1eNry1FWpuD2P4zhQLSD1JvGZRWXLLEG5yvTQpUXMiD8BGmByBBiV6Et4eFkX6JtzTzCXWUBTp",
  "key10": "3MsKkKWJVVq7LANUi8qcSp9La3Bv2Bp6rkZkpaMwbjDVMGCbrmb9yNZshL1jUhkqky8apfQb9ipMzwXBPYGWA6AQ",
  "key11": "3wTeimz5sC2ddtwx56DRfzyUa73z17p36MxwyoA7kXiVRZyocY8gWN5Knjy78qMHL5yyXMrxt8KWyWyhdfE6khFp",
  "key12": "5HBTBaD66vcLgUQBzKSXcer4k2g8DCaVait5LRqFUMgfKCoQuv98HRE17C4tNefwvZefxLaxUZudLKKaTNLCMkbp",
  "key13": "4XJ6ibHN9ESPwvuQWvvGx6qFYerKJjDLBcByawuX8nUU8tEFY7cBKiwRcNpzJXE1dHHbYibmAbugA16zsbtyUKjE",
  "key14": "3nds2R7P9gJ2MfU2u6FBWCDXveT2MRCMP6fqinHSGcsJ751GSTJbehQ6L6uxtvQRsUxDEbgFE8VBRGF5x1k4Qdas",
  "key15": "5N74KRNeo55i4HnhdwrZvv5SisuYcv9jTtLGTKzSPGNv5ULC6mwjFFeDsUEyWPE56bhDE6wQgakrPYR8CgEdec1D",
  "key16": "3DcBuCwt4dV1bX4FcWmmgTwqCb7aJUJUDeG9r11hxem4zbhMQAnUco4od4ig4NnEGKn96eZzokEs5mNXTqSsgSUq",
  "key17": "3mYW7rCpZWCFBuKkvdBBskwU19sdzFvcC8KYvSsoMcXjUQB3WHMay1ZPXAsRDEeZq8G5cSa8b3oDEaoM84DSw6JE",
  "key18": "3tgqEETBe8YbQssmHpscgSk7u2CN4htnwHdLkVuczU5P7MGp5zLYVfoz1DLMh9zzZUihoo7TthaLpyxmwycpuK4e",
  "key19": "58fBVCySnCLKy3xPNNBYFjeLLyxSYoWARaS5BfVN9anj9NLCXJ31ngmHPfHWXByGavwS6tKnDkXBX39G753k5sao",
  "key20": "5ew6UJnTeyRrLvcn9phKwjJxcPSXAcJ3W9mcM32MoD3deA3tduoRzfG1UunzauwjEPmdnJv99BXMXnihRm1Hqd4J",
  "key21": "54HfiTFxrWvm8qwWNXV2VCXm1V8r4HWGRxMajkjSW6h3s8Ypb42c8PFi5heH9H2kvXiEVdbTRQarMmMUZwkrmXjr",
  "key22": "4YFpGFjerNoimqbnz2e1yfov9dy4zYFeZmnNAFPRcGyjzHAQXz35YZSVhL3yDhYyCckdeTpemZtumz2Dq8Sduw7P",
  "key23": "4mbgafhuA5efXcXuA5SrEY1xZTeRdCfpg47yLm7T2CTddyidz7wY7BiamnTCiorA3gSEyxvzYfCWbrcCUkF6ebiC",
  "key24": "P4cciUd9LbLV4Uo3E7BkkvK9hjedNk4LVryLrX6Mec4LFh9L33BkWBEvN52yJEwjED12yHL6bjPPYGsaqr5EpgQ",
  "key25": "QW4ow6we6WzZD9nA8zvrq22RrprkfCuCvn7aWpVYVVWVaMZWMcMC47F3JsF1hBCTB8EV4JeMxRCSfUTV6GmUGAE",
  "key26": "3zoxgWhihN3GHbMRrgNtffbhzK8ekzvaqkff86LzPHyFYKXGWGxkoym5YLUQVttF6QPHe1wCp111XvXpTc6UXQor",
  "key27": "5A2eiErmsKjKkCV9MNwMxMKgp9DEin3fKoDaeQYmVym3DLkD33aWw9k6dBRvZJqCTSi1rm9GB1cT8YPgDsfNW9ms",
  "key28": "28CF78X6YGpV6S1mnSUpCg4HFs78w1D7KjJdcSYorwLAiyZMZKVnxN4MjzK1jeSm4vi6sSZHdDQd7oB7RZ2XGkXd",
  "key29": "5adBCuCaPKdMKCzwfdKuY11aJnZume6vq3gSfUztoQbP1o9CSVBTCv2FT9VcVqPDAmdtCuHpXnAyjsvJaA6T75rm",
  "key30": "37BKF9GJdQteE59v6ysJR3pwXi25EbTM8qWvMgJyPCRjLqdWEPBdAuPZAeKdbG539YtAQWEcC57WxWr1akLJUbp4",
  "key31": "5FhmZUrRhi8fHUfCnuPjheDL2bE1db7tDurtTSS1xDmkjkQww1nWkqRtuR4RdpoPG4gFwM2uLGttUK165UqvSGgp",
  "key32": "2PUSueq89mRhdWnffhKHJUvyb27sgq9YppVvqWncn4rhogj864ZznU9GajHZJmqJkga2YLUydgkyuZtBEh1gckdD",
  "key33": "4qsLffCiw3X6US2MFwJsdCH6XDSNk2ESyWqDHeADxiN9m64k8dtYuBctVaTmZAJiudmnZFBqgqmrHrw7DYSPLiVK",
  "key34": "4UNTcVfrPjwpwdgKu35cr9QHBxFyuZ9yDqnYgFvvrWudBZJnWCdGESswvTsAzAGs1ZJVfUVT2wDQAttSHMhcVxTA",
  "key35": "4GMUChTSqv45avT2fGkyADtyjixhifXr2V6MKyj57zKwn6mxNGp713YUjYfiMQEi4caJEwVpCEN5B1JYQqdNCtiZ",
  "key36": "4nRkHUEJRFCvr2UeH8Rt5b9oDMSRRN9MWqm35iyXYASvxes7x3ML7nLgHszk5PkQWvfdiYtHjzeXAz6WH72McHy5",
  "key37": "3c24jMFrAfwRALLYmqCBPkpZk8Gz4cC4jaHyrCqSfwxZtSSrmVGhzCPze1Sp8eZpmJ1hBV9i552nQ1J3epaFoJWj",
  "key38": "rAN3g18WpQunTfAcT2TaXdqBckMCKf9k1PpEiAUBNmSQP62tmeWESMefUSKXMc9Rn5NjQDqTwGWMwLvK2j5LcVo"
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

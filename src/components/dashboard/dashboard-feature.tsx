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
    "3dPLpX7ZK6nZ613ni3NwgSsettSD9deqUvo8qB8AWCXLehDSkvTf6Tgx2diYRWLV3K8HC5g4cexyP8HUsJu6HUtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTmyKfqZaAbxXi95be8rDv9r2QnuBZ2SjF2h6aQ46ow6pDjPySFNWs7xdoie9kv2HbuLtbdTfpoCYhJ3qcuB8Kj",
  "key1": "5NLhLhU4eUpnMtZWHEnqn6Fw33VoYFxH3RqnhYaUQCHnK8y1HzUTyhv8zNx9QBX8vCsBE1sT4JUHqDttK3BBbgmf",
  "key2": "2pfHWowXfM3Y2HCu7mCvAmhmBqdiYp1CPtHC5JmWvd1vNNUSZSGBfRiVqjaxJpvqy83vg7rFKCWcKwyFakW4ckNC",
  "key3": "25BWa84nENqo2PrBGvX2LPpu6iom76FGEh5JkQK1GqwLtThDrP9FNA3giUwxacYD9hEhhRdv3pNLTMFsQCeLMe18",
  "key4": "5wvQBeZhUDzs9johedxTd9STLzo7NsMF54NGqxw83462JJmixMAnUHbwu5gAEaotQVPS2CHutPX3QpeXA7QQEoDU",
  "key5": "44e28PNmoZhwQBzzUr8Kw3zFjYnDJvpapCPx533812zM9rJ6y5xkvNxVv64fTR7cDBxZoocG7UgFsMfdTQULzSkV",
  "key6": "67Aw6sRhHCy5J3iGmR7TMo47aSvge2LjjyxKT666VoMeNC32ZMxKhevnk5rEkhHJARwMpVV6h8rx7EQ1nYjaDPt2",
  "key7": "3Lve5JnnENxVSpYs2wLgEE8zmSCwh7ucKDBCZkxt1KUTGpndpz6kMqEE6Rq1dbcnc65XGr2VruiGJwqRH4CxmQTV",
  "key8": "UzFjd3pitTGvgH82aLq1Vz5BcNCjAwyCp17k8oTF9K7MEZhHWmhYD9FrPyue1iQQLNmn2QfdGwfUvd5pGgi8ERq",
  "key9": "5rLHGWLm5RyHnjkC1wNDaubNVPzYUYPjFzG9xUjeU6hZ9en1G9zmg1KTGUkxtuESpDNoDkUiDU6rUR6UpmXwU7HQ",
  "key10": "5ywZKg2hn462L23nAHgWVeGCV4VVEs6q4EQnK9GbPfhzpcHHcp6anpZDQvohCmaPzRJug4NFt47WxTqFqh3gSgCD",
  "key11": "3ERRk8w8EyG6sdsomb8VdKQyrNuprZp2LpWtmYx6tpAK3Dc4ygnAFDz3N4TuhfqpCyGKV2hbhHU6KU9zTp62arWp",
  "key12": "2ThAEQKYYCAj48Noa2Y6spYMqRTFVnTiTjjK5k9fm8tyY6jukDZNbg9GDBTN4USagXKd8s65yTgi9Z3pDabmS7qt",
  "key13": "5RcwFvAcFVPdEhT9upTrQkVNod8AbtKSVFU7MYcKkPa2XR7BrJ65WpctAWJkFxZPArXw5ztW4RwEhB8H8U8Kn1TK",
  "key14": "34pZSnQ2sr2kkFHPhRZYjMWx6pRfs9oARwP88XEyFVq38pSzKUSs23wnwxKNdhSr7FcKFTzcXPG29fVt4et6Jemi",
  "key15": "2BCG1DFnwnw5asu7oo7UABX3BPbNcBMFd4m2k6Rhwn5VmQEXhzJUMyQQWFh9sqD4uFU3nmX9db5mUeLLfJKTG8k4",
  "key16": "3FCtsZgxqWEgcYfvJSssUBqvZGMyx9kK6th7QPfmBuRN8MpDyppb8VB76gm8dvmnjo8NSsrwmWfmVn3t8xaVmYno",
  "key17": "4y7BHsQUHCuhhM9cQvBi7HUBmdx1he1jgiKZT3A8UiWT8BER4uLr4WTVQ4WFB3DuBvKQPSr1pX3CkQjPkMfndS2H",
  "key18": "2W5iamtfLzAaDZ4tp5xq2VJ2mgMK86iK7XFwneyGByG2cZawX5DDrcULW7jQPLSAFnz4QTjj9EXF1MnHhAdo7qUU",
  "key19": "5K84cj7H5CNMXCLrsxkA6LyvftvjSp8BgxezexGZAHuzfTrgEuMbEa2WBUK7VW5xWUYSNpwrnaLcNcJp11stuhTP",
  "key20": "4TrrEpFjZpzV38wy77WDN9ApU1VfPAsYgTZjkWUJSHdLCdvwff1JAQH3gaJ3zXvzkxJizsVkQeWBTTn3pshZ7456",
  "key21": "2H8pvdzwSd5SP6SQ76j7n7hZna5czgU1H8YLpjGucggrs22whNYA51EgthBzMjNhKVWoihEkbYqUi7SHEMw8dKLR",
  "key22": "7aVZLkd5xiLz3QjGEMetG52ss9eiUZ1Wr2Gmw9TnFioSJ5WHowBtB23TwCZBmj3NkXqis8vnBgZuzNXHm3rpAoc",
  "key23": "jXPiHoDBjVjRhJtStbtkh2gCrY5eFeUzKzXPNpvzB47ouumypKgQqfgT8SdUGEGnwFnUD8REQKTiWeewiQZSR5P",
  "key24": "5CeG7FTkmDM7Cx4jXg55ZqDpXTLNJgaQopQX1gRfKdcA55L95F3tPJu48BbeZFmT9ENsD7R9piEjS4dtWRFkG662",
  "key25": "25unSZrGnYUamb9sUt928dtZ9uCcYGTYAefazpPHjF7U2oKwMBZZJAjWGiLjuhsuKKT5jLVnfiTM86zBFjt7PaZV",
  "key26": "4KasWWNEJCNWMKZF6NHo2RdCPDxrQz9wchG68Nm7dHN19QojTKuL29gZVdp3uBjhFJ4HpJpzCnbKx7nm8Q4HCyPC",
  "key27": "smgYmyNVrg5kqY1K65rR5g3k7bHqQLLwffpjo1QBNdkNtydo7JQ567zZxZ38k4EEcmjnGqY8k2qg31TSw6Uro52",
  "key28": "5dsCTWiNcQoBX6owHhiVP6XPHKG9yCfGRcnr6TqtaAsq4GYqbsN3HTYkUtZtHPkieBmJJnbjnhhRFAxQyufwUyay",
  "key29": "5ezkymmfHcfXKMfSuZvdyRqH5CJkoq8pteRzEKc74RfU1XGTLMWBLxjeSh6s6CsVjgSkgDKdfAxdNiYYWhQYoegW",
  "key30": "5mGxpK4PCx7M8ikAidsqcsotyeJJsa9XrWr8o1Mk4xpnwYs3HGVX1pDE4xHjauiVc8wxnqGt6tYBxp2X6CM5Qnh1",
  "key31": "5dcZampjoHZZP9wQeFcsoq1AD49TQcB8LBFxzFNkZrKGGxV7L9KspjTGFzXA75LQicfiM4QMpa5AX3ZN2mDxtCKA",
  "key32": "2n6EoCAzRFAy88ohw8qSiZSFXqEs8FqVov5YCuLsqaqMqeaTHneSCM4oF9rwqcgdZkAWNeUFFfs4KaMTKbjMxiDJ",
  "key33": "3VLasj3N4KuQYY2ijfsouCS8FJyuAHhavVf5YdxbcxzZB5RQsT2XK3NeUSX2f4EnWt7pkKtb8CY4XgYzYWmqKzaz",
  "key34": "2hivaCzTznPEStXMqZdmH5VTHfKRwcTAxoGf4UBoAspAjH3ZodzPWi8ELN9Kezg479XXCtVZ6hDXuWXaquoRyKHk",
  "key35": "2u8EkN4T6GYpT2iJTQ5aSHjN3QJQY8nAdCHagwQ5ArtQhoudiRiQURQiXoRFardjbDytBTgDyFRNAtvLDDbpgg2a"
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

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
    "5dFmgVYcnja5hGBxoKVVkU6pzzyT1X7RibqA5Cv86uqD914yoJ2GcUg12GTyKnLGXwb3YS4yvYBwKPpsef1Krjd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5TQX6gC4bxS4wRACpPFkowPAe5RauBnAx4WNPG9fk3kGF9YD8vZkp338Cy9ebiGPdjWtmzfekgXms3CfWJfZRY",
  "key1": "3qrPnKCgjrgnK5qx2nsECmtp8kg14rK3hkbLgcdvQfSCvkSRrmVzk3aVosPPYStvNBv7wgLJatKUKDqhNhgnoe5x",
  "key2": "5UH3KLZST4BQewREUDFun4A7EeS2VUGJBueiVZHSoYRChBGd6kMX1Hp9fkGa1GB3KN7w5WoeucqFKotTnjJEp1YJ",
  "key3": "4xfkea5ZDh7radmABfhSoTTK7YYiXFgY4SAmJMWTQXDhQKwNe81rXtTte44sTLTGPhfB4Sg6ParHQrWGAAjRGn8s",
  "key4": "32F1xKqeqVzZ5qDvTUix1TYSn5fzCrQ1ctJqpZuc3u7rhYnhjW3PwLzetHwZ5J6ujrVS3mXsaVUQ9gJkQzRaiL9n",
  "key5": "5YbbhKpSCTL3USDrRto2i9bVYx1dbgSDQaMtBVpqUt3Rho3rMH87SwQzcuduc3ivhRQxhgsz2ktFqPchQwU1d7mt",
  "key6": "2MSsggfebYbXC43t6DGtLEMLiUMgyY1gJ6Y4AES2UHPs4aUWfQxrZnAXmiscAGdwpsrSzJLkrbSFAXfkQe5q98V3",
  "key7": "4NVFbzTDxvYyJ19hBsnTo2nwN5Q6cUFxJpkys9uYu2hPyqJckBzoZLcewHA6wt4BBq3zNf5qPTf2BtYKF7fYkUbE",
  "key8": "5Nvc33wKpsZE1MgbwiU6WtpyzJh3PWqdaU9PeRh2kuqNknMDfaiFsfMx4g3hy3v2WbYmAXY6EXPpKvg95Q9CNi3q",
  "key9": "4Ggj5DUCq3KUVEWQAQiihoHYTcP2vgUymhSi3ghpSsjd9b4nZTkoRhLbbULbzGbGoJNbnunsc9TVPHXABLDoZngE",
  "key10": "4LTSeppUEcJSymsR3B5HDLmbxcZGP4sCfprXqczFLtMzWWU3EVezfnXzyJ8ZQR5zTSKroX53UUWcqEVb7Bg4FsU5",
  "key11": "2Lz8uYGrusuZ1Y4gh4Nm2R7ymiWu8cjq8cArdYD23GoDYKo7XRW288pp4fLcNDWmSmHLc17Q1werDpa4TuHjRxe4",
  "key12": "5zxJHJ6EdHgAyA4AQntqtGkyiepzn9fTorYHkN65gg2J7cpU8wZoLKyWM6WhxkugLNHKGj3k4NQkNekDhnZu7B2k",
  "key13": "4A1ttWMwST4E9Fx7yxBNSt2JQjhP3FvsH3iudyXYHwBDh4Y1qpzZVj5hcUqvn1i9NrfDRQigkFnN1zAz56pNA69v",
  "key14": "L5doHyWdVotZDzYVdEuzjdXcxnSBuaC9Mr4urk1cFGsMNkfqcGxmrFmhYhpJbSc4SU5abNHa2SYDBxnY9a4PmQn",
  "key15": "3ddyEP9oaVaCjBhsSkmoiPZVt7mUoZ35ergKVtZMA8Ttd3nA4b3STaWLBa3eKGZvhpow9QgBKcbD4oSciBbpegRc",
  "key16": "3oqDNgX1YtrysbYhYuMWmWDZY7agMyiTZN9zi1X5NvXhRbCjSc96yYrC8vVDL81s6EUzS3dZCVRYrdsXEozBLDRL",
  "key17": "5ytGkc6wTDgDxx87HtbAD2o1boPt5kz75iDA2ANS9CxJn49q2tmWAZACehKPHaVuhJGfXjSYgERwFtvYVFMye4zK",
  "key18": "4ivnuD1GRrQ4AfCSWLdfDwZXyf6Mahbvt6rBxUP9nebceSnsZUETLEec8AGqiPPm1U7f8QxDWm6mefcFhDuiL47j",
  "key19": "KfYsvHt1ZjpVuspbXbPu7F5kPQuYeyp5ysJL1qE7xC2moUVEBbEC9xnquNKqC8UJqqytJVdXEU5R2NkFcuwULBv",
  "key20": "5hztCytSCt7d62z8SevcxLVQEpQ3kfCbK1ixUsqkARtZiyKudt1n8rtqdFMR6ta9qCojexpFSptH4wieNrR3EPCf",
  "key21": "47XS5VAULQhTRW3aqVDtoD4SVuew6F3LMcPMezye2xDkNLRxFDSHAvEtiWeQPwBUKNWfW4A8nXu97bMgNR5o7ZVS",
  "key22": "3M6PwHPSz73qqr9DydjBty2wocyhA6tJ8n7mce284t7bhTNVQwHC5hJDC7bJGWNsJrLpvd9C7DQPpr8K5d5UcUxR",
  "key23": "2YWux4zxamQoMyZWy4QSMc79cH4cZBHbAzVUuvdkjrHp4oBNzfCPKgzpUKo5uVEPq66iyQX57KjMhYC5irUb28xc",
  "key24": "2TuypqAJDrFkCLUfGhHkq5VGx8ssqyFDY7bueWgCSuk3Aw8tRLkAf9HkdZeGx8Gn9K8hRiidXQBt45HpMT9jhoAA",
  "key25": "2hEHeBioxWddxQr1J8caMFgUaEeWQdWXoXFa5FTfLzJ5QV7B95SGzjWP7xgJ4kJBt3z8KewKiHpb58r2z92jXVPC",
  "key26": "1CL7aqp2o4KMv18tw2x1RtEvcqyv8YgHErLNyKPNF6hqiBBmvHMPGqZ1TkMM8st5hbHD1maMymAgvfFnUTegi1o",
  "key27": "4jxvXbgJBYSPGcaRtKxPbtzvxy4fkmN8aYKoWePwhFUZKr4qLLMLhesh4UHKgP3eVAm78qCkNvRVypAaM83Xrdic",
  "key28": "5itfFVwv5cSu4gLENEtPanGBvDQVmy2jRACXuYqaxsRAQKDq1bkxUCC82PaK25VbXkZ9Dd1aaNkiraYCHNym9Kwu",
  "key29": "BkDCHSGT4FLbNn222zpprXjjmtKUMWpAYCjuGaV7soDt38xBpM3XFyKPdcP4DfEwmVxdrCiMWp9cJsVmKxbEepj",
  "key30": "2hsgNQivskp1J75UHS3zhDwpUbJvn8zRBquiJfZ1Jw8WosEtS3AJ83A6RpRRgpNE7yAMTSKSrp8vuA5RzbRC4ZBD",
  "key31": "Gc9mRpHwrwSzHUs7wuy8S5TmjM7NsiwcJBNR6GfgtDgFRU7eZeTkmBvXKXCPnd5DbuWSaWtGCDvDqaAVCkFBQv3",
  "key32": "2AbsSGQv3rRLz3FtLfhUy1g6wJktVSw7xR4EBWkKc2FrhNVj4uLux59vGrSMzNovC7HhSVh63Dxn3aUQPh8hxZzn"
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

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
    "3X34FmfidKCvj3P29saAXwRAwmRsMLFsLJDGzWp2Sic9MuHFQygyzbxJPmamUERBdskGQPYv5GvZtvidQJ7NkD6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cr3Vc1NPH8DzyjR5x841FmhFS1evzEjgmcrgFXJbpRgoqX5pw3ZKBHKYn7XtpcoauDXmpzz4FeGrcxEjLMPZzAq",
  "key1": "2ZZVyrZG5s8iWQTmXzXeiGzpNB3tjRiYRdg4KfdeDxSMmssPo9YPxvJ8x8tCpHkeeQrcekUna6DC3WkPhJ9A8Xds",
  "key2": "2Y4kCGdip1pkehCaaBGRojW85JGJriDqPsswswmAWXCnTBFD9eZRzJdXB8UPuQXeMxVRCNoH94QDp1FtCtQ7E5rA",
  "key3": "4BFhTL525nmGCg3zwBNTjNrYdhhTbGvL3jqDaqa1k27rcNSuj7Bh4zs2XdiWckLNmCv4VgzLFdQqZSNDaF2tSbLy",
  "key4": "5K9CxFYVnxtEmvPCwxC118SGdAn2Yhr1eY2AaTPCCeF8FqXZSM8umvtuCNpVigCpYhFFxTRhnTWXPwuLcEKKFhui",
  "key5": "2jQpGMcxajysY4KXSPnsSMtVhQ6nG31daKco5tngdwvs9rcjKZkvFGhs6KhTTfmaU5hjZrCL1B5QNXeLmD1tDyra",
  "key6": "3VQEgLYVDSZZ3gwSxMLCfzuAWYV9QtycuBaWgpfYgxxxAeW4DrPmeSwCZfrY71xn5EJ1nTSkkukaJ9HfJHkBejvc",
  "key7": "2rMS9vygtRChKohFxf1izkXJWTQBMKwD1NwdwBDLgjuXUPZ1XH7P5Ni2aYkzAD8kswtrfJk9iwxq8ibVBNoYjw2j",
  "key8": "3Jq8a1rL2AbHHHqxZAaTGwpHUZ6p9Kdr8e6VeHBBYJnHcDo7bYFYvgCEZiKKJ17jF21eftWXdRB582ALze39VgWu",
  "key9": "67ZRpNNjH4DuDNGjcfhof6axQgxPVbp283tUyCburdP6z7zY3pCHhGJU22R18tV7VnhvrtREP52i66eZSsJhckJd",
  "key10": "4gv7XepqL2oKrpxTbbrakPQivPCkebNZQim1Y5ysdiMMcSUaMUwfyZdALeub1i2aWeZkmNBURANuSvw1mrNaCGT6",
  "key11": "sFHQWjTXBptk9BkuSN93UEQzuRhm3mwwCcMQhH6VhBRcfWm6GgLVWhFhNSaMN1C5qp5waYECKgZvNgWGhVpCKEn",
  "key12": "5i1DEh9NDnSqSB7WhLDHiMEPacvCNBBfenDnEN5MERorGEbEN5VFNt8h2vNPqfYpVuMfhqcZSD3wCQu2oXgw2Pz4",
  "key13": "2YWRP8e5ErcUPivHxmXyf4Fba9gLTpKitzJCFpeBjqdefo94MrB1eAYcDyLhovEmoVVb8RPajsX91fN7wREaH15w",
  "key14": "3WkePVswcUVEGNBHamaFjAt4aSyFa1QdzFFm8vUvmsRZ71bu65CfVJevXcSXaEZqX6BtYRjkp7LzcD2SGzDzTvVs",
  "key15": "2fAdSunEjiJWPzjVxMVxe5qciA5bZHUB3gpMowhvUYZbDLokrjgX9Jh8pX5YCdCZyMe2jZEtb2pLni3C77J7nWvc",
  "key16": "bJE3oKNtkkhYUwNtpVqW61w4eRtanS8RZE3253ynYHcw7YMojzMCMc77dJT2VQXf8doap2qgL9GpYf3TMxsyPNt",
  "key17": "ofFtkri6N1ZyshrfhjLZUrRwe8n6re7GeHM851hfhJEFC3PQfLSLQmTx1Zyh7P45qNTGt3HR4ESFaDtBh7zfwd7",
  "key18": "2wWJEEuVJ2U47vdz3MRkq89GDCyjzbN2pHMR867oKzk88XYzuNBHrxRaifxdJ9kuTPZDsSxWKrsxWWxbXChSi3qx",
  "key19": "3DWf7mA6LKEb9EngtTPmonsjX2D8QCeBbMgrrCUH6rT7TcFoFUtLzBC5eatG553oPwXFaL44xrKRA4qipwYV8rua",
  "key20": "4kKevUsYrCvp5JwnfUgXTeMftkGeVjArQPzkZDAMBSWYsnaomwwcV7XVNmGgaXmYpfxzEc1VjLuLXqGAdpDbQ5wQ",
  "key21": "3GEsPb9AvBeo33mjYcJSvEVM1viMjo8BnZHxiVqmg72X11FxWh5feyK24vPmSV8WrFGVbUTgvxmdWmYupajVAPvd",
  "key22": "5h9U46pMqPV7DopGXFURQn3dm3QLsYVjB2uLaS7qa6ssEBfahbDX92w8szSw5XBymRMfjNYT1E4vHXYvfeKe16Xs",
  "key23": "QSQ13YfLJ1QMR6vtJFb4NgXmxFgqFtUh22VXRAcvnLUUysJ14b4KGLztkp2a9GsugCpeCoqxuUu6RQvnqsgMMZw",
  "key24": "38EMFA9j4ecNW159PEsjDynyd9U9wGBxCpdo3rmkTWVGuAFiuFjZmpK2gefjbwaZJQQhhdDKuj19D17hqiESQyQK",
  "key25": "39fVNuQ5dEAFxYB5ZpdUTWF7LH1hcyDceUEb8o6GvWFeiBR6NjJWnfUwpnh8XKy8BzArpJDxAt8cmYYBRE8LFbz7",
  "key26": "5RUdknPyogPPiFdLLHxCon8DfP2Gq37AgnQGrvyqZCRDNDH43zUfo2b3rq5yn4w1qqXt3AVJ8vzMcFsx9kttaqUp",
  "key27": "28EA9xeB59rXDqHB2Z5y4eLzyvDMeBFMuCYVQVUU4czjgK5eHoeqQfpvQ1LEsmbCMmq2h7RjQNqKtAbUVvjeyaYA",
  "key28": "2ffiNrv8k4bPxQsSg3CkxRLmUK2TME2EgNSk7aUKx7yNxNamrNjbvquALBT9WTDsQwB9QawbndusF4Bx7CgyxXb5",
  "key29": "2iPvCvgQQKvyPHNTa1CXQ88m3tL7reLTRumpaSZrtiYhnCDhvbSu8X9BXM7PvQ4br3yQ9aBb6cwFadvZtH6UW3iQ",
  "key30": "2DuUrM8KWDqtyjjGHhLZ5rCVRAKh1K8RkJeANabVGFC7Xd5Z6PgdmVgVL3kvtqUHN8RUuraGbEUm7WSZh3pTdjhs",
  "key31": "5aMhgQJXv2uh6qDfukJ1FREEaCj5ExkV2AmzFUPCtN2CMAtopiNJRjEs1aZHC4QsCS8YkfBmXmuDZ4BEsdGhxvVx"
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

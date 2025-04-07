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
    "3GbUngCqA6kZBBvEFbLg8Asb8kBJdugYKUGw6LbhXvRaFisUPtW3cq8BnazvtLmpKh2AxPmX7CuFZ8XhRhz8e6Yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HdztcMdrYmG2gWaLCfHMAHjmjAnzMphLxUpuvm7c2cby38Xv2TqVPnqL9fZ9zJjTTed9NNpo2RAwpFYpWCuCT3c",
  "key1": "2Y4jmeTThR7bGRSBiCXj8gcVnGNjPi31PeecUxab3FLhceekx2MzF6ZjM4BMrWT3UJRpTYwMCvQLH4866VMtmkNf",
  "key2": "gZuwTBriKJ3pzovxWvFHd24ErArkpvQaJBhgHAoAgzmWjiwk5zP25mz7aMynB4Gkkk5PeTnpnY6c63z1mdJzB73",
  "key3": "3iiWcdNoKjMgfbMPqX88Sd488Vf9zmzn5ZxxBLhXXfD1JgTHmrWd7kZZjMa9HKKYqgxhcUCDpZBJnQfuma6L9wPt",
  "key4": "4pxSvUKaF7STVnketBy1bn9rDewWSWNug3KM1oGtsDM2YxqbQosreErtBNJCopgDYPC8YiZgQJUNtVmeMVJJZxSb",
  "key5": "33ukGcrb7vFA4w7VkvPCGrnxQtzWSZTbocZhpDi1TC8FcFrksCjp7xtNLYuif8TE3otyfgoZJAP1Ku8jGA7iR5Li",
  "key6": "62CxgghqekmSnHz9Mpc2VHwJz2zRsga85mXkNxpNZbvbhDBheXRrwUyKVSwpUcy8131Kqt93xoUxpD1FgouoxBYW",
  "key7": "nqYZMpEhfhJG335QSKhZsZc5TXSkmYc9bDptt2vpQ47q7gsYNQcaGYJGatKGec5H22k2exFC8jFGKxZnciq8BqF",
  "key8": "5GHwTB3F6XCnwYJb2EMumdDjtU45JhNiBNqVWKrqnsXMp1BzP54K5Ydxokya6wn8a4GaprMn3ggGxWjfAXMKJyx7",
  "key9": "5FT5FjXwiMuGoywFxBkiRcnUNYZpVjv7buXtbBop31eUqp4Fj6N6tA8ZdV4YFYaRF1Legtfi1LGBYhUphtuLcrc9",
  "key10": "317yYZLDoRuMvMRB8FEQa5SUPFUWQ7JVa178U1HokaArWLRA5huz19GPo5esFqPkEcz76vyDLajnjCTjeJg7QeYn",
  "key11": "38DQs4tG1PBC5TveY9rs2pRfvUTnyHHuZ6XHe46xcCimr8iQV27N5KvQpbaZhNVpGQYnPzeqQFPmirUDWezLZ8Qz",
  "key12": "4vZKRL6r6NrkCKfZYcqCjbBkhzxbrCksckBaRve4XW8dkHtCbH1Ucr5RgdFydgAhTd6jXLWaFpzsvzEFjE5gffFP",
  "key13": "24P65mCvfuqJrr5WBi3gS2hAWB6F7EvFFWTBDgWASYNZxCv75GUG4W66ghPsqh4tEi8YWNv39RRDQHGSCka2QKY2",
  "key14": "2WBfX6curFiNWK4KWN7BUx7YvDdcZRrWGhPm54z2HXkbuCPwfAaE4p4k1A2V7dtgKGgC3xfjqkK742mik9ksc5q6",
  "key15": "5ZipnBcaWeL45TgNmfFjufYq1h1XF36Ekbb5DvXYAFDJZAd9phfkzYY5DYfzvHRLp8KtPhhHWS5iGJc33S5Tqw6f",
  "key16": "2G1B3GJvyCYqPgDdR7hMPuBna4ANreKacEgbpkACxR6xwfaNrVpP5oac37HMWmqtM1qedmbuTs1oKxuG3dHXiskB",
  "key17": "63Tx44r4tkNm9gjzJgEdV544vm2KZSWrJ1nmtZJc1NLvSyRcaWhFzB6RiJ3u557PasSLxTnZCF7xHgAJaRGk6tLz",
  "key18": "5qpS4zVucNzgZ5P5wjPhs2Rr5AhU9SjfsGSAwQaX3catXFZWCvPZRKHV4bppx4i9endjzj8f94LS2qKL4jRFAF2n",
  "key19": "3YfFNYRzCuYZgqn5JpYgoPLnUrr9db7pY29CNVmindTbszDYGZAKr2inkDiJyxHec9U9mWQ7amhDHZydcmrxTWeW",
  "key20": "ZmEs3FMMdWtCshyb61hZPBpFhtGrU5bAvGF6CHrYmaCVJHK48LqhFBL9y2C5DrFvcAnDNEoTTGZkiDGgrdPQYMK",
  "key21": "5fbNyNtqpRuZuqyBV3KorTguL1x6uLjSxfVGsdnBfG4nLaNb5666YsoLpF8s9MDtaeq5a6MZoigk3Aws6WtqW5hs",
  "key22": "4caAJWYsYAhHyEYc4nEn3if274dupr7LTi5aE2ADfytY9usiB8EnwxZxaT2gR1LA5XPtLsX1inRpuFVSWQduE6D2",
  "key23": "4nk8hpAxr1WxViN723ALL6jort65HnWGZ3ncWZzF3Qh2147zSNTDY27s6UeccFiRsdUCTfvbaE2WYwMdc7NCVeP4",
  "key24": "3e6E6g5ud3CfES8xFUZTCuKj7aC5ntEkQS5xq3zzoX7oZq84f7CL7pZmKmoGXqx41tZgFNvjKssfama7KZ3tVe79",
  "key25": "25dXhXUCnMmYdH1Q6SQA6AABDoonXs8D7BbcjipJAWZkczKCMeUQwfUEXBzvME6pAr5EqnUS7GxZ2dfjYnb8Stmv",
  "key26": "2n982K1bMrFHuZKEgaBjSr7TNb2b4kmcwpYgauM5iSf9by9DXcYMCsTCtF7yZs6o38tBBUMcAs26oAdikeQuWqs7",
  "key27": "2q6dcKtGWNotkRy9Rc4zxy7QyCYCbQvVmj3kJbrRZi5od2xptGQdXCTfrkftZah2GvpqB8ubYE1FhKWgvz5p8HaE",
  "key28": "Z4BY9PKTwRMfnTDAbRFqV4AX1AQ5UmC51QXuPjGBQHjeCZtSgHmVhTfMd8irH2WxBUSVHkhNYU3zAExV5SPcsjh",
  "key29": "5xxBppa4pKwa1WjGweFAKReyVzxWBbYoKRf8RocRf1BDsFqGU5omQiMuE2sd5HHbkgwYeBn8WSbfWyiypg7Bxhhk",
  "key30": "5ZQeBafeHiQeYhSY2zAogPZg22gCiCjao68jG8ZucuggVC9CnAhgVcgwnY54tQvMCcHdN2fhcagaPzw21jtuvhCb"
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

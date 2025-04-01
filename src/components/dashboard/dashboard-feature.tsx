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
    "4CUfkYGq3XY9iGs7PkzjGaHbyCTRQBbr4tCxPPodcyCjfLsjaeXb9oiG2SNPNcLznqcXxVDu4jQcyyjWWbJSsH6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4BUqYdoQVVyjCMmPk7X94F3NDvY9ZxrFKBnfSEwDZWyY11S3VxzHu5SpyzbSaTeidnYEGFYKc2o5bok4GfawBP",
  "key1": "DdC7FQuyRSGCV4gqXxL1b5TdZWqhwXWEadWsDwjEfQwXFsugGq5pzb3DQEj1UBARyaiCETU1FqmHjnNU7uRqjC3",
  "key2": "5g77Vt5zRD6a2xPqrMDMXbCcmWeCHuXqtGvgUrGbAoL4kXRuujrgB8DR2TsaQiSVdDHvVY7xZ5QhFBvCSacagnau",
  "key3": "2M5175NcwExMkdJHFjkgp3gf7HUWokCM9Bzcwfn1MCVa41z6rbjxRjjEr1M2G3THAkW2AqCcPaBqjzBz9qRNXeRZ",
  "key4": "2W8XzYYXnoX8d4iQmVPbe4xcJ5GsVSZjnkSrh4hyj5x593LZxae53NWvHKty2888wm8ntPQTvdadbM6RPqK2YeLF",
  "key5": "fKvdBVLrn3sCyCZboxiBfNnQeSd5Mr2vCMYtEx37DzVF3R1jkGZzbvZLhxoZ3TXsB53sXfckrgTkGvENS126QSk",
  "key6": "uBbdUM1E35ofHkuDkW77aLn8R3yyx274FCQSTfqueRK8MZLgnkgqUMf9oTR1ykou2dvdkDVraqwiJWZjXnoNFBp",
  "key7": "4kFo8mm9MWXoRvdPmph2sLbxCgZk84TBsieApoZ75DFPkqvxyghrHJsDdaKJthcUctDuEuSEaUe6QmSP18wzt3qm",
  "key8": "2zGwtwjJeqsYL6S8fvQjrJqfjwXaDuhQ3mMDRAgS3zaSzELjLq2BoRL3U2wy9pt4hQs5TKnq9XpQRw1NTA6TFBm3",
  "key9": "4ENy4iYLHMvS7jab8DQiEThc3A2Unv8ziHsAXhz5nwDvrrCvxKHRT8GQrC6HTRFC26xhMtae3XUQVdQ7PSSRbvCT",
  "key10": "4krNeKnBmW1d2m9Hdsgq1tbdhJ4xYhNEbR7R75T1zojfRMai3ZJQcuJ9xvWGaKknVcMAFVZrcnhFQEJT4uZRq5os",
  "key11": "NALu9zvZM6P73LTtmwLodFYFdDZfPj7WYu3CNCcfVFCfK7WE1W6ZRzhPTccWsK6BaYXd8x6MUkG2CTomoSZwkLH",
  "key12": "oyteYDTwJUdd84EquJU7J8FJbufQjXkVjH6k8WenMp24QJmhLJ22y7b8s3A7wKzDwcYNmofh1gYnKXag5YahJEk",
  "key13": "5weeLsdYVuN69pXTfxJPcbDHFpsNE2Q6kPZEaMXTiKnAgZLJF1w3cCxxY1LTWG2KoDEPLpEsooeTCPUihT4rDf7E",
  "key14": "9xMGTyX4QEU9ySy4s3zYjEhcMG5iW9zmTWiDpCkTgbptGTRr5kYDWMiCAH5NCYPrLPcNM3QfDTE55a3Dc55Ku4V",
  "key15": "5yqmVn61rqi7b2sevxr7Uqe9fcMP6D2KmAbRUUuZTS1qtvEfitbTwDfSYFv2R5eWV8KiaQCNxpc6t8xw1UvzNR3G",
  "key16": "3HAdLBFPEpzxW2qw2XjCdyNVj9bSr6jgUDRiyoLnqjTbjkMp9xRe8AggAgT6wmTgY2vzUK88PzhtNZ3rD8Y3BEK2",
  "key17": "3jVs9xtiBQWgAg47WDvThqTyU6BXL78co9PFkCXvAHUtTdzLC9CW9tXXpLgLH3R8KbpVC1GNPtA9pMPusj8maEAe",
  "key18": "5Kh4QDKvkb95vHGvsJU4hEYcnu2u7QE5LnHoxnuQN512vG3tEDFvv5A2B1sGDkwNs5K5Z8c5gmjtWo6LPAcZbziC",
  "key19": "5n2h6mYKbvsbDjurtcZaYn5hmAG18SQJ97PyKMXCMnp1GiPU8FfRCke4vdgww4wk2d6NU51dP7Ht4ucsz8TNn5ag",
  "key20": "SwehAiZpqU5o6qsnQyA7UEDzQV5P8UtrLKWtcnGYGbHotbVpkyPyzWs4uSJeU3Na9EfydjKaVvLapsDKmaRpysp",
  "key21": "3AMLqcsizavU8L7He2ZDCZ6hw5SvzhBPhPEPBrC9Fmvy1xr7z79q4Ds4G8cKN4neHcQZrR8EZuFM9feTYqHdXzT8",
  "key22": "4ZhaWxk3SntMNdKciEEE6qiZjFSNBka1RPvLe9QvMeK5eo4GBuKJXEdnCfPiThTvTN1TMsvRreKQr7GTrSNQwJRW",
  "key23": "4ZqQRWHCuV1nENWxjJ7tnkhzeGhJscTWXuNkxJQBtEkvUXYBTJkmwu4GXj5368bnjR8ib9RpfV3vXE8J13V8pkFX",
  "key24": "ygYbv2jH7jxiTkP65RBVkbnQcz1x3gocvKv7w1PZFroG271ZWRLTsrz9ibcoiMXKRRM71vRZzZbkc7m4yjUKwGH",
  "key25": "5qzdtX5tyXRgRMijMRDYDwCRqbVjGwCs8hRaGNRTmGsCy7Foxcy5c3Z1BWwcX33kmpt45wNLHUoPeRxQdMDDJREE",
  "key26": "4j8P8y1cuaoESxPsycW6a5yu7jsmw5L9QnPcE9c71LSvce6yE1qT2skTwBJUSx1F9vPu5ZVTL9PGbRYZsWYiDD8j",
  "key27": "WFGyZ81nTSPpjABDfvuNrcT9XSrEedWdioV6HinrBHGjbpV1kPh52o9QHWH8GtbAeZgmZz63kNb5jcj7HvbLAza",
  "key28": "3aCWJSdSHAgeeQEBN7FXxRroJJLtgtoBJBPAW75nNd1zz8J23yBhXMasCcMQtBFzShWQBNPTemT2ixcwFBowkCZZ",
  "key29": "2q6cvPeivHzzsbcSp81v8QBRme24Jx7BWRqB2Bt7Y5uvAw2Eethke7AzJWjnwuZ6pspKZhFFbHAwQN4mqfzAjCW7",
  "key30": "4JKDuroieAigJzujUSWCk9x7qVy2UydRn2vGX1DdzLDUysJB38RSEPr9bLKPU1YaFXBvjiT4vewB62QvsSjHN69i",
  "key31": "367E5SufaWoGhmUZ3vkB8VR5MTzHVxNw4vj4BgAbzKdZmyrmdg769D7iqpZk7oeYDPsg9csgyofoaRkeRbZAxfsT",
  "key32": "Lp2uQN6v93nbqS63VmsiHQhJtzLwT5LM4txSvvLwiNBgqmwtYHcS7yNuxVAzkTTunG6we78NwgYkB8g6gEFN2f5",
  "key33": "5xYW7ygXjdCR25SKSry1W3vSU9hBexeZhLNf9ETDdNXQd14AmWQu3ismhQGFSFf6G3CfripFo8cUwmvuRWrqrPKL"
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

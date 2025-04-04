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
    "4kbsT9yDq8gvnb2pebNdENEhzbZrdcgPACvnEjP1faekqoVygUp8YYpq5T77LKLJW1j9KcuHC2CfPkVFgrprDFv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uTdtwXsSxgg6VmeqrnXqHKUDMiz7oELjLN7yN2Uyysn4xcmCNECowhdT4THwDv2MwVVfW7UwxtEGJbidThZoTFY",
  "key1": "2fQsmU6cwDpX1UioCNZqQr6fTa5wPgncKYpyzXd5j3jtsAimBJYcTobiEDAgmLxuCvFh7jSrcd5Mt3znroPMDVPb",
  "key2": "MfdRtU8DhYGwtsEtE1FfWP2Nt6tSthMK1SP9SdD91Bvq3Lgp7LY9QvkinMg2KkY7ofWCxs4S4RvPnLf4QAJQeE3",
  "key3": "5xLT9KsGyj7cbvyUqPGNhCWfHrM897BDBgxogwCxHUYU9dCpXAGuXEmuyQWcakhtfTqxTyeys3KAQ4SYHDQS2yJu",
  "key4": "61vEjsnkmEaRZCdHR9mkXgHeQnLPRqVABaG4aBHNWE9245UNgSE9XtWrTUsKwkEP325CrnD4WoRoCSiKyj1yhae",
  "key5": "61w8P5qvHgynBvZUwGZDnjSYju27ufF5fNZqhZjvUhfCwigkBEFqWviA5zTFm6PNnVuCQkXYDxDcB1iJpSmSYAD",
  "key6": "2ydSQDGn5yaKAUsYETbJ2UAC8re5DRUkUkbqZggokNYkZavKELP5KpmtauYvEd1zxSNrNHgx3uSPLXpCcfMqme9a",
  "key7": "x4JVkJbbSXDyyksMc9beDBnpsw5HiRuo2EYam28vAgBWbujEBiTFnLe2vzHDBuznFaaHQ8pZKwUKfivP53ymSXL",
  "key8": "539Tgpchov97n9z74W2v5EjhVRsgAM3iuY8j3KJgSWtBJrXsXwQNH8YRGEufZff7cgsSPdTumkFES2qvUhBKPp81",
  "key9": "64dX9Zf5s5cuVZb6ZFtBV3HvZNJPMUzWCMvMvtdkyJoCexYtHAs24iChakYnoEWbeyMFdob4Qb7RLWZrcx5efA8E",
  "key10": "4DwqqezfEFGMK65oec1Q8Jr88Wf7p27fyCcpYBLaiK2g6qa7k56sH1yZLEYGgNH7rdyys4iyhrDzyYnGSzqMPniu",
  "key11": "qW8YCYLfhtW6yzQanQWz6UUcJHCP2NC8QpqNaKyUHXJDKWPPoErvDw1YahnCJn5tg3W5PHvZSveRAYLAguktdBK",
  "key12": "35wHtakuxyAxNZ4XUGSk5rh6ZkTegN2q6tsNrRxVk6U46BnEdRLB1GSgHGZarsEU8rLp39Y6ymG6DBSVqvDS9XQD",
  "key13": "2ekek6LLFhvP29Gk8VeT1HF9XDkosaRLfF9htRpJffvS4Ek69eCKnYEn1cCeQYeqULAs455dvNg6M6Auy4YTmCw8",
  "key14": "3ZFWB6vFpyRrDFFdDoe9ZxWqW4PZz3pYEgpYHhYVTZq5fKycViJhiicStFcpwjvUVo5ANNn9RiHY9pP1w4Qxyncw",
  "key15": "wDqipw3fqnkgoVxSKu1XNZpxE24kcu43CZoYYmwr1MwjZRpxbZFUWwEv1M8fatA17oebpZPBE29NtVYuamS7v6r",
  "key16": "4JTMvSV4HYvER6tD5PBsTX82km7eQWMf7QJM1RBvgoYq85nKkNrgZTiLEXQ3YMZhpsFwxgZGCZ9v2nL1nvAWppo7",
  "key17": "4ZVnuh5X1iifmGP7zfV6AmycVsraHhQgrumn9jw56SdHZRuiqypXZ8ndGWaoHfMgQcH3YmmnfSoFYosuhWS2Xvym",
  "key18": "5Czyc8v5ycEYpwbYXDjnDLsDLwY4G1KFqKYEQnoKKFpm5ompwCMBFKA67Mn55dpvaCkXwx2VuGPnW78ThXXms26u",
  "key19": "3EvvKPr4gAz14gTKvr7xPcRe6zaCA7bPTQzWngRifVBY7YTyhPTFYvfif1YnsrSj2pbG8qhGDt4NCxYWPdjTB4yo",
  "key20": "2zuNY2nRxYq3gRfqtCckMkPfs4oKnobdiY6gBwwYQZuQ66zLqEGF3UeWcuJMq8fJ15aNc7XgUxGQnWPX569FzZ9P",
  "key21": "PxhseFQmJM5L8Z7KUAnRi7gaqNJWssvg4P5FWSPx7uuK8VAgQFic4wU8LvWKyWfxHfBaVBN33BPLvSXre3FUKJb",
  "key22": "4HfSQXbRAQvWQTeC9cnM7SJCdDZ28NBonD7xdCAEqoL8pou4uApGhKabHd9X2i2GkMfCTuAiTRESMV3udb6dWLoK",
  "key23": "Ry4ZNDxMpxw6jP8mSK7PrPfYYjBBe2iZV3PENgdFFtWVBHnxh3bsUHMXfggHDRL1N8UuydmyHXssZfDQbRW3nL1",
  "key24": "aRKndvuMxetjSGEsxtcakASwshP43W7GuuVYBqgeoEpFo8542k7Jjk94HUP8nLL3aH2iQDfopHA2GtR7UvRFSuz",
  "key25": "5e1E85RUSaSUiis2dFsMwovJwi2ebJZKwieACJov5sijzqNAoNYEbi8VMPfEErMJA8ZfLM3DJr9X1SyryTCcGxCx",
  "key26": "LM3r33cGitXnsDdK13U4oZBP6Ekeyr4bGbtyVbAHJn1ov5wTyS9Rh64hkKZFyAegE8uv2E982aYHrQDPhoNg3Cp",
  "key27": "5ERbWPAcZ1AsnUKVGXTN7vmmaCKFbUxt9LZdAMS3kRE4beddHQtBcJTjiyfaLsDfuzS4C4Y76KgJ6FMUh87zTBby",
  "key28": "52s2uLh6c5aVz2dqX4SHz2oP9jG9b57wBrgWjADSx9YkbRtYCDMtUsD9xQ27tsxHW2dLxUEZPi1bQDVcrGYSyHHF",
  "key29": "3pR8jxGLdn6gyQPDm6y9B5hgsLHSVWNcJZ8Qo5kaUBS4AQdiSsiNyR96jhH1aXDeyXbx9Q2uqjj8AxPDw3wb16wb",
  "key30": "34KGSrki51ELWgQMeT9TLvtXQTz86Z6vm857Hv4Tcu7zsRAAFnkGvX5RReXqUEEjrCAepXZax9PTENeCeNJb1ZW7",
  "key31": "29kiCfDykNEdacPJjRmBjpz7xXZ87XBCkN75LX1FpKcB8seR8j4a5puRCod7ecbgFyCDt6VwwD9rqAztYmi8594J",
  "key32": "5aBNkst6oQdwSQm2pNEeEnDcCZQUvUhXSkooZUXjgKLiQMcYT8YYLBHbTwsPjaef9PqZQBte66DSYP6pgLvYP25n",
  "key33": "5rj2rYvyXw7iRJqtdtQR6kk3nVWtTgMwRjHrV9MTbadsT8fwJsg7MAp9G7f1YUpDWMwpsiYVAZpoQ1G1FVgYWMwQ",
  "key34": "4gNnAr5SViVtXbxEeZgVzUkxiA7y7Ja4po4eh4btXCRtgpATJXx36iwpXz8MWqFyhwMokBvJXd1bBqdFiCb2crG9",
  "key35": "2x8DL2DKfXhQbXph4iFinKGKzU8a9uvnuSgxac1tv3rBPFc3RGxGVJFeog5hqWvsVmku8FLx9er1UbW6wG3JHbLv",
  "key36": "PiTKUQKbgt6no8NYtmfqPY5vpuoWCcNXBTe4wSQdpGfRoWX44VnQUZoUpnW2r7DyWkLzAu1shqTJzLudaua12LE",
  "key37": "2zAr7nAQS9WfctQ9DmfNhATSVJCBtwEMJg8oVPRztPadcLNmDBQKzY9rXJEFeWf4QCNFgapGYHJsQ4baUPLMRoBj",
  "key38": "2FFUKiwzzQXafFL4ppXTXdXboZnqkjcBELp5fDnDrF45tsQe1vhz8YwpKEszqUdAXQpfMjied5DCq9AQZWPWe8Wr",
  "key39": "54xesmnxEdCw439AvGr9Vu84yaRhkkXVNY3MQSvgJDwvyAhDinRHkLjiMiu4R62bc9PXLfvAzsRKn7xtM67u1N7m",
  "key40": "2rWxEtrpWKpCAAjdDzV1Wobfgo9h7kCf6fynLVTgTXv7vksxcrwRhagimu6epvfQ8MoNx6hN3RYdmQ7XrtPDqouS",
  "key41": "3RHpp9tihkREPZjqFxcbuuYAGKctfjpoFb5p9k6Km8oCLxf92rkKid1KtKH9tk5RjBX7nwMwF3ndTD3TxgC1oKuE",
  "key42": "3abjbF69RT3viuoa9JKZ1ccFPMDRN9XvJMJBjzs8evBFfjMA67Wbkfp1XhuCh2JBdYJpTGs257Zwfff2SVzNNcqU",
  "key43": "2Py9brRh3DkS7KE2ZcSSUHdqdj8A5rSsEBDNbbbDMsN7JHsQHL8CVj2zKMFpBVHKaLpdjF1rYbneTkR4RttYp8EW",
  "key44": "4rdeP2FfmJMVWZ3NuWDLQxTo7SPtLgVD467rZGzHrSKrKLH4yLeF5ngu3kNwMRm9Zgt87y6wadGjX4okH21CTfCE",
  "key45": "5nBNc45JgvuwHVkLYpXLspVYaN7zfXhEytZWRNTStijw8qYjVsdE6Mzm4zM5htSYBrCeQSkxpMT3tP8iQJhm4hpu",
  "key46": "4gjHD22rELCf7T5mKD4K7T7sbc4gmDHTNyw4wKMRnX6UtjZtHv7PJe9CpmQ3d2Gr8zGpJ1YN8ZqBqxFdEUarurYe"
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

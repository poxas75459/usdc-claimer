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
    "4Raqs7NiXSCvYgwEYYknjaBkiPhXJKprprE6cDihKLiCwoQS4Uo13CjR9qnNcU7FoMYwo7TELscrioXdkiW4f8oT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDEQ774uPQfpW7Zr9epieFHLp8SJ8GtheMuvZj6JEZMv1hqGyALFmb9ejUVs3Y5tij3N3KyC5L3DepERkM5XeRm",
  "key1": "3rxB3gvYsXpqux7Yugi5seCUuH9fuqieMq4kAZKJ5CbuoqMfL9uWbT4Pe3ZHxyfGaTm8TNNpzcBRo4s6MZXQpNJK",
  "key2": "3az339imztgYjbKoXniZ5aziMjNwND2tpZYiYYvFGzim6YYj2NbJAanXRZWv4kqzbRAButMYhNGJF3w2oQF9n3w9",
  "key3": "5p6R6B96xeRi9Gmqhya6E46vjLMQfvBRpZUAz8yCa24onTaRXLdpAv7KaXt4GEwGmxSLApUzrGjn4AQg3qKemfJN",
  "key4": "21Aariksdgm7JWyz6bisBEe6Ld4hvaYVH7iVvnMFZ2n3C52JGiTHWsVe5NV3Z22Kh7urrK2cAXfS9VGTfRSG7YGx",
  "key5": "3ZknZePxnTTNLmsvQKuy6agwj54kAzfvJSbsgP9TH2dqNNVPW91498GGL7ksVjin3MjPqZbRbFaHsQ8YkgX2kBWp",
  "key6": "3KioTHRX8M9ij8BpcLyN571xP2UKyyEzT31Sco8DSwNdpeEUoVBYjEV8qqBxDGiMf4G4LxK7oYoMSTwqGQ653SXW",
  "key7": "2g3GG4zxenr9FYwCBAdKwx2onUCphm8aE1f8yEKSgkLFkn2ZdUM6Csu4soCpwKnVYU7V5yvfqrWGWWmiLevMb51y",
  "key8": "3eGfYp3tsPsWvMHNKLjogH8qqHezdD8bRhuL8kkZYYJ1dtciJiudw4cbfPmQhHByqoe9jUEpHWTuapHfhAtkitGt",
  "key9": "5EtTpoHDYmQvUvMxiJr3C2sitAU6yvwyRNoz7B8VtB31GQxLa3j7NT1BYCoLtASQvAriKL3ejLJYXrwSSYiQHKGZ",
  "key10": "2JsAfwnvYxkgfYJboSzA1z5boFumMdwCoxu6DiiMwLMxTm3z7X4DVedbqpHWcLkdipCMyLHntBDETaudC5jQHdFY",
  "key11": "2FMQLJwnk9g5fDTym2EBdiWXGnrRg1mWkgWfXWXm9qNryXneQkVCYtA66XAcW2T7p5zYvhtniwzxqs64UucMBDMz",
  "key12": "2Sm162uWMVB55TD5NeQCnGyofB4YYuiH3fTj6QdYHQxN8s3epCkR8zE4jwywu82oHpm4RJTpsodZTa5AoYdgyvgU",
  "key13": "2DTwhEK3ypyTm8xwNkeFFdAX55FGdkMsVQxYXjpkSXWV4iS5j3edj1Lg8ici9dJNctcLtANvQap3w6oF9JsjY4fD",
  "key14": "5oooau8BCa1n48a6mhxwuL5JECaqrNcWLYT99vzRaMCa6feCUWVLSG6xj6xWrT41zYUmT4cRMGEVzDcpUhrLqaLn",
  "key15": "3rDPjiSkjK8pKP4St1C5bpYetKLDiArtPAnvr9vzMYD1AejmxryQKv3tJYPrXXJEmiL1dtePhhuWthDXY4wHotx1",
  "key16": "5WZR3FE5vdRvMtxzuDXKbEi7zPp1Kb8t4fTYAMdVmbUs8sUxNipjwtjucNNzUyJJxhD7YaBJWVFg9ATZ5b5sxDq4",
  "key17": "CpQpbyL37idyMwZx4LE4N3THVu3eWAvSWSNPXsRpfgHNiQQPaautJAe3bPBe5f95wBbsTdh5qGcNPBtiMSbm8Uk",
  "key18": "4YkRLTC18wuwrFHMVBHSU8ZU1MDTFqYWRqUn5orGBZZ13UeQtTEhRNdAB4qR7KNRRqoDZBvWtdAkTYndQzyqbDcJ",
  "key19": "PRm47BgGoiy2YL5hZHJEdogrxQkbng66M7EdwtqjxCUoNEaq4Tz325Ws1SNXwwUJ3y566BYXSzP3zx3uDr1CjrD",
  "key20": "4afFjA5y5jr7cubeM7RVB1ubpuuyEaf3QWCZYzgnfFTe2gQpubUksSWKcPvVpYhieqd69ensu2vt2cSqTyGiGHa8",
  "key21": "34ZnpCYTEZtCvJi52hgTz94yHNqC8dYb4UoqfUqYnihrn7B6VqYZPHPCwn4ZAgtU8BuGEuSxDPJqYUT1VS8FV8JW",
  "key22": "2nhXJDmN36zqDc8m3Wx3TReY55ton792JoocpjKCE7bbXMneFj2jS1xvbbj2JLpio6HggednEx5LWWcEti3Uf1Dm",
  "key23": "5E9RHu73Yk81iHoX55n98ZoDavkYL9eiXS2CooLTvCLd5tTYpF83EtFcHhP73BR4rdq1jfnbMRggpauReVmetaww",
  "key24": "5gdKkP1aLMZQ2r3T33cLSKEt9KmsEvdk96Xx1zx9H2qNn9CGs3rMStuF8qYsBMe94cFqMVMm7mKxohdBmy5QBThd",
  "key25": "2BuB69udDJAoEzkDQe9kpYgzirsjfZshwqSv9pgAvHu3v37msXUvKTkLT6Q7gcGBCf2VVG3jfFdm4eDNVszmvVT8",
  "key26": "AfBdefLrBnMfNSaUsgRHCUnJnPBdo5Aw7GthiRSJ3TFoonqjQhfotf6JvzFPqbvjE9W28KBi94TjyRrHyiC9iUc",
  "key27": "5DweZXFTNfBhy1rRfLYGJdK1saTyGTwer7D4gRxptscKVH6E3n7Ed1nwFZ1Wd2CQfctwyxFWTnbMcfSLRfDYDybQ",
  "key28": "45GfezeaKxMqzfuhBBsdWtVYFV1qEnUdERizZdFPoZG4gY4tdG4nBcd6Zh8VcarzXA5VCktHkoKURGKLAnreFzjk",
  "key29": "3p5RZ2EUzkodf6LbYe8HHdW6BeE9Z78GHxquFack98U2Y1KqJx64nrAxaCb2aVBkhK6oEUjEFpSKE3q79nRLoW8L",
  "key30": "5nXFCKe68PKxFmx1qcE8uryfPsj9A8151ktwZCnjGeiYwYTfQoagpJdvVvBXHiaSqDh7cy2rX3gWKd9jfcaGD5K7",
  "key31": "w2hoL9ed9Pm4BmnSib9bQQn3ArH8AHbHP98RicwwyBVQVZhG1WAETfuvktSwtkyPCQ6KeqBytzFhTVGiAj4zdTy"
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

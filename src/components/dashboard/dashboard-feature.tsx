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
    "3a8KM7CRhd2pJthv2DdHsuETvAg9XLqxGHKcZN5Q92u8J4e7LJzdmbT1tZQ2pCqk4oGfw2yi8HHxWWcBKM6r7S5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56nhp616dEGXbZutRY72pZMcn52m9VBFL6CiZiBoR4Qg4bFYKngPCXzx3kdDR5KnjsRLmiA8imkWK2AJGiJo9GhN",
  "key1": "3CSFYi4PdriDGEXBAbHs3gNzp8QdF3tDrpuztVZbDq55QhuvDRtW7bUNRb6qBqj5Ayo4RZtYhHjrumkr5eUb4PDD",
  "key2": "63VqRVzVPt9yvzwtTM7k89S4yUF47RVocJQt8b66DPC5M2ECEF3qA2G5W2gguTiuUtjMxeXa4Qw4ppqZkfe4RhEf",
  "key3": "51tD8agP2q9BkrMr3bHJmRSmpeWFNy6oU2USsD8xqQavvBVSQNiDUtSxJqz3usywnrPG1PRVjVUfZuq8jbUD6LN6",
  "key4": "5JdoCJSwnJb1s8rg8Ym1za88bUcDmfUpabR5jvk7B6XHGtFB4Vi3E4Eu29vf7SF1aV2KwxmqENy3mBP5uqsQvgjW",
  "key5": "3qzsVhStw7brBLgqLy9dVWV39eqmCfSBr7Y2fMmPYwPWamUnPUPZ1e6ZgszUvh6KHUXz1HTBFZ1YbuAntQrkxcM2",
  "key6": "47g5E4D1frQ6sR4EuchdBGA227dwA3PvAHwZEPUNoaoLMKy2ViWB7wj5quBfjCvTj9TQL6Z2b4xktQo6oFjFLGfC",
  "key7": "3ZtsHidH3g7Vnt7r1Qmc7XCkwFr5BDtUGcU7oJWLamv1RYDNEGt177AgR4aczwmsnbMztk5yXSz7zqXbwZtnvi1d",
  "key8": "4UKDTLKG65chY7w1AxkUbVEzqcbuQswNkzFRmMuMkPiLkysBMyjdCJVypwFZCcLmGzQxYP7SZUQbefz6QoWaUqCx",
  "key9": "5RnxjNFunfD6ai3PWven1WmpRMrKUFt6UfEsuA6cM1oqNTSPzc9E5UbVknXszXDFkAjiDFnRTphbSCj4JZskfycj",
  "key10": "5Hg2ksERRxVmTQPZTqdANqvPLrM3Cppo2YhsTke3Yh1xg29gR6rn7zrYQ43F62UYDxmq6KvUDyUNTtNXLg218gS8",
  "key11": "KM11wQUS3JycvzRbNbuYpWoEUUhrEgXVdkRyYA2FxkmTsE8wNvsVHduxSckJLHyECXhiF99s3HdbKFHL4hHrHm5",
  "key12": "5Uv4Qe6EJpssSfvMrpCgJw7yNWKQWr16a2i8VTStfRPix4hU7YMbJtwWUVykqUu6dY1SH4x5K9Uhmki77BNwTvuL",
  "key13": "3FbNFma5h981yKTTU6q8aKQVihnNfBbSxe8crZrPpYTnfawTZ12rNK49wNaoGc8DsjfumaezooMZ8o9UqWz8Beva",
  "key14": "vWEjD4VmqWqxK3BZWiBVYm7c96UMrHxKX5Yw7XXdeECJYorwYA1ySsdr9fnVVHxapt3GLV95LGCNsdTwb7L6oki",
  "key15": "4xjcGyYgQCRk2tVAfzwqcDfWbPpaU4WEFWmPFRa8TAE47CaSDNrKtPPrMhjtvoYZanG3h7GMyrT43HKCFUDrLTjC",
  "key16": "5bB8kgzz1ernScEhETY5nviuimyaFn2VDshDwmaEkgPihDUDTZhUoX94nahhj8f7SVuD6net6UnXp6Eck3ezywiJ",
  "key17": "5ZqjugAyXxjp32ap38Ud4XXmtmmS8K9ygQwMPyVNWrNhfNcr2nMSxSP667nZK1r5MdfRzMGjyS4SSNTvsU4RXZU3",
  "key18": "5qUXimohVw4k2pgoyGss1VoCXvhAuQH6CwUBpPtsWweBS1GnznmhXrnpaHwW4VrL9AZnfDWTCQfSUSeNTHJrjWJs",
  "key19": "4RisDVs9WW6ghbMeCEHiS8oT5tV1omd4qdeq77Z7NaMzjHrHr3beTvWDrorXXpdfztoVu3zwSaZkNZnU28dZfM4c",
  "key20": "4RdtLmjk9j5NG8PRCNmafXSTmXV5sizRmA3uVZm86bf9kgENuqv1Whn4UHRMsGCLRUqdRPRA6H9XF1qA3N6F4U4X",
  "key21": "42KLtkHjLEu6s6bgvtFwG51CA5i6NinoVqNVAPLdMU8yy9HjZQBcSaAemerXwwnhaLyfwqi3zSQMYRARt3ME6UUa",
  "key22": "ynkyp9h6L6we4WbAtX1uKcUaYJTz5AVD59YRL7G6oSQ8LChspYGVsjh1BWTyzfaeGaN8g1Nm3cpbRy14PrSe1Gf",
  "key23": "3rBoyadmKYwvBTJ5945UQb1Dw3E64ix47rtBdZP6uknMose3apA1i8EmeDoUxXd4qv3Tkg8eewdDq6KYLDCL5w4v",
  "key24": "5EgE8p3VhupsUw76AYMnzFKVgg4yRWCLwxMsZSDwcK3AfbWFEWrPscj4nB5qnVQpEzARnN4S3zugzF7PJwghWyKx",
  "key25": "AmMYZmqkQ7qq6YGiqTZCiFHgXtp1xAdk9Z3w8trCvKiMFptX97BZP8mB78RA6Ujwqu5FJ2NUSYecVTF7Km6AU9o",
  "key26": "5hxHCHPZuqPCM1k5zXdhodd1d8X7EmZbcDjgYcdw92R3gE8zUKHip5t6Bk5Pus7JHVKTVdaH4n9jDJrtbZ4vwzof",
  "key27": "Lq4yNkWY7RaSonMvk2V6oJm3RpJZVhkZV7ZiW9G1kqxcdUuRQFhbtqffmSKdWsePj21oW7be5n3CveaeZb2AEF2",
  "key28": "2L1w54cmu9TPUg99pRKic6prs9nGpWWtAiJgUqSjNrNMEXfi55eK8tCB1ykReeasHUgz9pCysdzLhhsEKnUemtAS",
  "key29": "5Qi17vA6v6gY52puL8M9cm69n85rNR7Knxy3C9SM8zYAMs6bCqrtSUkr4z8k5x5GrKEhKK6bf3coBrCBogrXwC7S",
  "key30": "3vgn5yW1Ue2LeJPzyXsjucKCLRprphhrHPkRvgtXQGCfgy7o2xhgtMhff3P26Rd5vTf1ow5A33yGEdP2J2gVeiPi",
  "key31": "2B4jBm7wUrNYmMBRDv1MpSK7EeXD7Na1ARiwYJueaEdbh4uztc7R7KAGBN45gLx3ydMNuJtimTTz7ecaA42x7wEH",
  "key32": "66qqxeJgaUCPAPpWNEF8vutKTYYctCQuHGnmHjRsDcMKMyWweKWrXWgq9QM5RnbusRJfrGMuHjUzizDXBnitByFd",
  "key33": "3MUCD8Eu4YWvCjBWZtZvDCLCYc4k5Vab8xmqhBAe75dv8tJcqnZrVyPVkWmEDMxcMMMLoEiqKxo2V7tiiKeGaBye",
  "key34": "4VHyYVsyF4vUijn2dM3np2zFhCrXGUud3zR6ixnSXcTT1T2Rd5qs3r9BSN9gF6noSAhyCPN7p12YDxCNyZ9c2fCR",
  "key35": "26RLzuMXCJZcQ6z7unZxTFXUqemYAqV7CBULk2C4PqBCWgd1unviEEd6Qgc5JvkvRB65mgy2Zn58YVXpZwGSrv7w",
  "key36": "3VvtkrvUSukCd1cdJKM7UfvM7eqeNFjZ9eCv8Z9pdFcjEDSSNQK857iDFHJYCJUR7QmximqCYkczGBvRMq6RwaUP",
  "key37": "23aqxGN4bxBCCVDSZCQUbUooxzkEXgQb9X63d6vn6i2wA7EVKMQA5dWyiTpTPS8C4pyy5u8yNw5E8LSKjqmq1311",
  "key38": "3qYi3z7h3XbJ5GZHzcqJKoj3pANZifqbGDeiC6QD4UZHHNuZYSVxXJ3aZw3Tt4ysBrWXZ1caMB7m4yYoCWeSKb4j",
  "key39": "5vQRG1J3kTnULtm7EhngcfbrQVWEx69N31iAyRD7mj96ckKXf6xsf85bCQB4yScyGkS7npaeRSjuCSaEjdxQjjTr",
  "key40": "BKLxr583N7xCTM575qGYrBsdznwemjg7Um6YbcZQYJV835Pq2CQ2MbFEnbwhoViWvc2iWLVbyiyaX5WNzTpXyzW",
  "key41": "3LyYfKUb88zasBc1qEVRn6vuktD9FPwg6KDGnwgop21buEjFNNoAbx6MpUjoAMkRu7ghWbUQ6E1kW6VsezgkLP9J",
  "key42": "63Xw9LeU1rFDdpD6BumUMSVnwa8z3WYMJtW9Gj5HaG4jUrXJUz4UjNjK6HTgtj68aU3ej5RxkVdD6GucArMv5YSn"
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

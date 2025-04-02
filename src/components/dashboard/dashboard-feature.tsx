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
    "XA9Qhmh5czWnVa4JCb2Pw7f44oRwhJHDd5KYugj9LnfXjm7VCfWxT21oeSnUWJFdksqz9uFyQLWD3C1q924qobV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uRhFaE9ueXFCCoXcdFfffJqQdMNNRooiTYRm3mLjhr9YaMqRTM5v7y3VxKNVxeB5rinKR9TVhJNjDN2fqivdKaH",
  "key1": "2WrCmXq2JEqMFMPYveT1EEsMSMkixwzMiSeD8gwBwF114vszCXUZ61v59RDAHiw6Q2iKzAGWfLb6HbJbCTAfMRA1",
  "key2": "3SbqZn6SA9tugMa9vTAroZk6Fsyb9VDw8yETtEeutFr7xqqkudAsDaFdB4caddY2U7Am1fkbzWJ4qCGTrq7B3WCn",
  "key3": "5j7mNrQXQVFvRaNxeXactbWyZmJM2qcQVjky7dC98ZFtQbwkKvZn8DR6f5bXVP3uKDLBV7NdSaYMcEh1JVyDE9kD",
  "key4": "55ozGhdYCcyvDBGKQ9cFTxCLsRt8g2uaT3EgaoRfsRFB4zuczNMUQh8snTQDDtUa7c4vdcwHpT3nSk455NnxfnzR",
  "key5": "29M7sUJqfMBFzmsj5Q3kBDePTgQgdgfLWcejUeDVeFjYStR1oieFNaguCN7iMKGiQn2YBPDKbhVgmSSpMsXdhPuE",
  "key6": "3xcxx46K6Hu2cXDoDZyrNLvw57EuN7F4vRmsUXvUnWwPqqr1jBDCKKpvitx8uuZY3tJcTJfiBEzocgc8KykQY6Km",
  "key7": "237zhVHGALUWm7wDanoYfyeQpDcLUJnajQvw4MDeNNqHWpnyZm3TdeXBjCy7q6R1S8qrwHqZLDQJfGcGwXYL8hhW",
  "key8": "27JENedtjc6z791ZVVnNdSDrogkqpsLxZns8J242aSLyvTfkBFRHMTMYofx4KB5E9iDnBNsTSboowmMYkmammPqc",
  "key9": "UrxUfnuVJA2AwFhJ9TLCZGUQs81wsK8WSck1Gj3Fb4x2M7S9xa7zBmrnuVDpfnEeagDs3sBVAe1dM9PSWup4XTX",
  "key10": "4QytDbUAe9pVMH4NaD789BQ8JEVpTXK5AmrbXwNGxWJw4xim8UYveQiM8Vv72hK981948smvcEbGEs8zbMWHkhW3",
  "key11": "4mi8g2unN1zpXNGrou9a4S8dsXzYPJyU1Mv7Rvr9hqKuvpcF9R7v3W2UWXbhKTtVoATtDKDKrooYZMZdj9qBdSpz",
  "key12": "2crqQwqcbf9MEkzkENFFrLC1nuGjJVAzyB4KEWWyCyxwpFG58jydajnFjA6ZVt8jn3TdAFXBjFdmgaapiCzPX9JM",
  "key13": "3uDu1FLaXs6ntr2XCX3NyWQTu8C2orsZRcDNHiWpbxwfsxcFKQttCi59p7Jq6PnnmEngj5saJooWGnoceok7ca6y",
  "key14": "nmsAUh1xrkyzx2KUeSJ1MxMTEVMb7C2j1TUEsiyath6qppNdkoDuKCT6KSRiJGmM9SaHTVsp9kY3oiBkmbbsCAj",
  "key15": "61NHRJYsBVRSZXEdTxaZP66wBL5HPu3nVMupAEhzMm9NEVhvLZ5p1EPZh6KqfiMRr8JTvwFyYx8WUZQpd5LyhnFN",
  "key16": "2oonsu2qghDAukg1iXzqb2pqRSHAUJPBR1yAcddRsq7o92f6SfGJTJf2Q6RQFxegjg4Egy3KGQfnpYHfLij4VMHp",
  "key17": "4kRPrMLwvQZuqCAZrQN9ccSJ6UzXVHL9CkukSDRi6uNKxXLyd3Ltjb4cyWQyV9hZexciHXRummcFG2KkfLHxqyTM",
  "key18": "5D2Zd4kg8Zc7bjm2LG1vLVaxuNwAmxUg2K81HP1LpKss1qWZ9wXv9PmkQvnLje1hpRLAw6D4d97EfKDmXRZmiRPq",
  "key19": "3TzsW17JsMcTgzGdNNpaXN6zXTwZ8qdx2Zwns7up4WWWnBnbwRaYdsRTkQLUBtDYhSTihCD9zpi8CdZSXHxPopbR",
  "key20": "3oyWFgbhj7KQBucAL5cy8M1Ub1sod5ASrzPVoVRdjQU6HERfUzai9ghGk7Eq54bt7Y5K8EZpvn5zG4s2MBjY9FGH",
  "key21": "XyK8DfGsdv5SCYRKkTmiHYzRFcyVvtCJjzjCEfbE8uTEbdYwe8Q8kEMKXana7vQmxeCYazm52nkQMg4bWMeVJMA",
  "key22": "2JVgrSNWrjY7e2kir2p4qhzWfXjiRTrA9F6CNX5Mki6eyz8W3miWSqn4YW5kQRbcAnLjuPmtMTAAL13F5i7XF3z1",
  "key23": "3TdSSoBZAQB1q6PkyMmTPegB7MUrhNX3ZKTKVK9dTq7SLwvud36bg1ECne73NueXHNNMw4nhxP6U9X6dViCpFhSN",
  "key24": "WTcxP8x27kd5kqhVtya8i9ef1grXmPJenKncsMxEwbfX7AfAycZXT4WzRGgftknCS1ppYAkmUEeXvGgPYB4uV7D",
  "key25": "2NNZWeoC1Jmgcv5tiv8jLzLagzjLsynWEQ1MsessaaQ5iyKTJThetnidqJG81WR8NQ7Qzs6U63TwLko954JH6a92",
  "key26": "4hDUmaWBtPMVjUxdaekNpHe3ghjpSdPanpD2xTroYiTdTjoHHLt7tMzGyNQqEszbbATqNB44Fpsovfh7HZNZDtnr",
  "key27": "3wzwCcuS7b2d5EeyCbWzzRR31FJuRvCR2wyrvFZSnxLuQB4iepBeuwdrdF53fz683NxUBP5e41WYg38PKJwL9kZ1",
  "key28": "4dkTE642jJJgogVEvY4KVf7SXBLUYaaMPcBne6DC6ev3vmFm9SigFqVGbepVVjbx3MnbXovdsMfzhUwjC78Gyo12",
  "key29": "4z5YXBjRjqDVM3sWdtKdk9BhZvaEGdaJkHJGw26dGZqeq1ABk9hnPvLqGU69rrpzAiskRj3r3gNh41XJr7QNWYFr",
  "key30": "48a1KwZJLcfnzJ5xU4jjqivYryn8x1aK2RdjPtY6saepqBJrNRs2WC6qMmPADsiKigoeMS13G8V8QCvsYRDqisvL",
  "key31": "WLQfKSFDQ7nmusqnENQX5a7XkwPjzCkYZgJM58VDbeqCFsba9UxHrcuET1h2ougzYr3Wc71H6F51gv1RQr1eSKw",
  "key32": "3L5NLF7gwaZRoWL9EEC4rvbnAQMFtXKabQHoAGJ22twJPMc9kDdHssx6VKz4f71kHrv7YP5Zs7sb6KBSdSxyzpBA",
  "key33": "4kFYvHffryXKeiUC3SLAnnKH8UwYbKKJh9yKk3wXQ2SPy6ouECbJ4biBVKXNLQFCPwJdQS9NMdheSKMwn3CCc8Mg",
  "key34": "5MdfZEFWP8jBJkxED1wq45ViTNWCaZt8VYsjQSGGekzaLQeJLUvCFwKWHa6SELun9UDD5fi9MRCboj1UWXitiK4J",
  "key35": "5e4A87aMxWzoFXmaKVdkVGizEytbTuemYE4wvAtuMVrZGgPYyYAXZE1E1f2aeNjU7vCUoAgFJ9EswqpJ7xrSxB4",
  "key36": "8q83z3g7pNLCoGeyzxDSz5RyCjWcGFLrtdgx7EhJPWSd9Td4dLSMdkJsKvpMycbRK7vMPS3xSHdMzB8ncjNZnqB",
  "key37": "rSu2QHvonjsETHWNrHw26Az8YBejCJSHmoKSCMbZjVEfYD5pcg8UxeZvQPFpd5WyzAZhZKLwF895bdHzjSfSN6u",
  "key38": "61bsLSSFiJMmzoRAoE9crrbEBeVR3gc9NggrPj4U8rFKYZ1cm9sdP7bnucu44VizzK2DR2Xys6d6JJBcpAUiKswc",
  "key39": "38v64J1BXarTB2mkowRyhGCbuQBFNRqeCjJLaB5mJnzrgeiXuJCzuemmz1WnTzcFp5Z8EESpgNkeoL6tcicu79zY",
  "key40": "47pczeDFhZAjLpHJsvYMWT3G6RJQaS98Kvstfx1gYz3eGcoWXwEVAtVLHEYe3U3LZAgB7Mq63J6Qm8VRpy728R4b",
  "key41": "5Jt1dNyy6WPfZFae3d5dcSARh9TM7GtYbyeJ6Q9u9zdD5mTVyJeaJwnFmvuYJXMAgarN9HeySy4gkSvZxgUkkgpQ",
  "key42": "uRrcL29pv4FTvCpWLsDmCh4TqgNKVCQYvvxG6FbLg28dWNTgUcoQmK7eAXWZaLu4BWVvcVsvBp4DBTf9CLwXNKL",
  "key43": "5esGBoBunXQ5ueaDDFHFTiXXdw1UfDAzDDhtX4yAjqyCUsnE494YLTEbdUppbw2UxCyGXYD5SfAFroFWrq5eSujH",
  "key44": "3FaFPYgNPeXhLDM3Y1HgYiyAEkQQ9P827Vciixc1syUnxW6YaDNy492JARJnWwcEeCsWKJYtpNCGJnWN181fPi93",
  "key45": "Txug9MdSyuJLEb5cr5shjdB7o12wMxpEeMVwiH1Z29CHQH3VGKssUTKtRf1qwowq2yHeWMEnSVJEN4vdrNEbecu",
  "key46": "gnCxr1qhgkYgM6iJ6rxd2sf7dmJ1K1tB2xoXaFN69AMjH6tSonoKMcfitbPV7Ds2VMnATy9Qf8sHrgJ4AYCSjSU"
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

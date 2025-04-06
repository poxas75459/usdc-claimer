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
    "5JxksWPjpSJV6XvugWesuwCXi27F6DD8Uo9eYPnt8aK2mHCbeofnwhMTQQwuvahgTvGtqrUauMJfYJqdv4q7K6HY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nsddaEuYisdZo4sw3cheU2r7tHaHGpt67xsbeJgQLHmo6mgWpnFrCBn1VeEqZDWuxAe65kvXf3pJDN6ffd5rr7J",
  "key1": "4BST3udQdQmaXhWftAcJsw3b7mSb2qqGzYKDnTWtSkKcjX39riWwDn9SXQWGWyWTptGHTbt6rf3NQMfyXPsq88ZP",
  "key2": "4FygMCmH6JyiGaThvFS6PiKsSXvtYFXEKUXfiEasKwUsAV36vDfqGUxrt6T6EDBJuFHY8uohcbdprXxaMiv3EuGt",
  "key3": "4CbWysacDQaAhywwaFpNaofqrmc388ckJxdoVvecQ1N9wnuCYor1FUELCYz98FSVMsUw2NbrUChzhybMM9XXLWd6",
  "key4": "4as1H5GjwvnN2fFL19HHZBpjCod4FB7GCN43cPecLqezq8iFsEE3PwxVq3SgJVkbPhUsEUEnScmqUbYRUrXUhH14",
  "key5": "61KVQhDu6MZ8WSfLTyAvDeuvHxj7hKVEHVRe3ugco4McBaqjbSDdpKmdvkpM2FENmkQYchbYJrDnrJd2DABCLrdo",
  "key6": "23vnXyu9ncpN5ER7a1GqSYQ1T85zgbqBUumyaeetVf4sbaxm3icS8XkbB5jxXkuCKhFZzZpNZMpv7Lo4m125v7mL",
  "key7": "3JpvD6o26UoA5SoQFBXXAgSeQaXeiuu3VTYdy4fXSnVB8ebs3EDQ28XVpzfGbky845nwVr9MWtN41zKcsMXF8c3Q",
  "key8": "47Bfvj2VowQoKNWGfEKJ4vE4Ykpx6GsVF5QrUVmTmzs25RutpgyrV6dKGvThbWm4846axivja9zX9oY4Q28ukTJn",
  "key9": "2cZeQMdLFCekmKiVbHkAEdLouq1jXQv6WgRsd7DieDuWzi86xvTY17kGUBCM7BN31JkBHd3rDPpt7GzBBurMrmrf",
  "key10": "Dbrs7rN5pHvLrfWF3rRdF4JnRrnnXSejj43mBfSfFNCajvexLWekZZjkMUvkgStGvC1ASx36MWFV59tX2G7r99J",
  "key11": "4iQYvrBkLKSVQEQPYQuWG25HsPjfAxhPx1P6otALn84rbijvweACYRbVwSB6g74ZBgNPgnav8wwEkiKVxiEwePiK",
  "key12": "KzeGx1UfzoAawAn7hq2e5CyAeQ9CCjGGkmBvGMf28hby6fDXmgNis3XUpi7UArQCzPdJvWwS3CTUbzYuHBBH7fU",
  "key13": "PDMYjqEvrhtb7gjCNC1LmP5G8j7sm47QPhpv6eh5C2omcbZSFNvYbUXhya7Kb8enPEbBLifuygUj55sVg3LAr6j",
  "key14": "5zjDxXciZH4otic8yNeS2YohTbwbA4xHC7RJvADmQgLjBRpsfhw2XFtBokCxuGADQNCJf4TyFP2GwaoRmStSmwky",
  "key15": "47JtZXeh2HNq57pFwcDfN6AaTFU4AzCyvQtbE332yetdgF1HiwmR83oSGCs1fkTtRdgMEj6wFjb4mR5fAhpbShJt",
  "key16": "rRg8cWK3Rm8niCDJbxm984oEYcFFdNgKN5h7FuSXr2hew5DQmHEMzvo8jkrrTvWeM48ud5Vcin1wtjticahQK8D",
  "key17": "47LbcFbfCmcmTnboUMQKFZLtY9J7FFEHnm9BpGbZxywB2r1E28DFDaYYGjsigcWu6t551njH3ssaCToHLgy8MaRF",
  "key18": "676CwbVa1HZBzjnHRMNjBKAVEHU666JQNoEoazG47s4ZNepNmyfXkxRMh4HGS2xdyn5GJGhRAXDJo7SiRnrksCYg",
  "key19": "2ibXn6fg98rE6EizyFLQ8cP9CyR2CsEiRXLSPi9Uk3duVgHYjQXwNJEh7B3MyLJzqWqP8XYbNH76c93HEwx5MqkV",
  "key20": "5EzyqodrLk2m3azKvAUawydyZqQV9N4P5Zr2e5vT31Su9pX7HmYXjJX3fznhaC8QoNGdFnNbHmGAop9o6tAjjhRH",
  "key21": "3DLaeFQVyqjr1k75wVGzNdtFiVEkjqGD3gxgDd5Qr1jcuUZCcsMACqGJ1sMraUR8cKBiArYCy5guyuFjyW7q5vYi",
  "key22": "3Hd3o4qZYv5VEBPCFZjAuCmQ2kHNrgruEDe9Vr5v48gLNdT1ZQYC3A2i2aSgpc1pNSs3yotTyzDzAHNAzHVSBQ1L",
  "key23": "4ZMPL3qgEKAH7ywGjsJ3vgmuYo5gomWVkHpFjp2pa8msYViUnVDUgK5vWEvzFe75fprGnC4uS4uu5mYZicKMqgyX",
  "key24": "4MqwdHhRfHqJPPU55YTxLQZ1toY3QR1Y38zDJkp4s2bxCchvmMhMywWE3fAuj3erC5MVFN4tLdBRLLkfexHZ5GU",
  "key25": "hm3eNAYsGxJS5V4m856AohoKdnJqqjkkJ3WxwRCBAQmMTNfoXVPvtj4RAyQnc8XqFasHpGTEhoX79ggEqdvXy5M",
  "key26": "4nNgPqHFyQduxhmZKj9UoxFSqgrCfUhzJ4TLJNGEWQGreVsW2Pv9C3mVU4Zng9fcddbdvfhsGrDPche8GnGmXjL4",
  "key27": "5AH8Wa1TcUZJNr6b9ubhWbTKLxBFLjABrzGzM4Fk8g6buQAq4omp1Xw1vptFYhYZyY1NuGoS3CmhbeUJYiqw8k7Q",
  "key28": "5uZqhtvgqSMuZKrZdi5BJ9fxitHB4bwunrLKP7nJYrUVKdeLjreSzjNa85NTqQNgAV4soa7feRScraPvhs5CbwyA",
  "key29": "5fxH6XwojwsPX1sPmyejp9kBbHuUNbULqKtBj1Z6BSSkimwKd7XjTjQ5TWuckw95JTfy89zwGbH2nvFhsciaF7Kd",
  "key30": "4sNKi3ETtcar1dBsLnXnfXve5fTsA4E3RD8MJ1Ee4mZYK2fBBP8dRx4npdjzQJT58DryP9kDywik5er8ELhDxcSR",
  "key31": "4YNm6GrQyG1jFFA9TZ7oEeWHv9L8KKVZqi744pLvKkXSFWpXdwqCNv7TXUTebvjmi2kiXNvbjdRe6Zo4ayGetwUQ",
  "key32": "wqoC3NuU55cuQRsoc5iBgbpcUQnbq6ywS96AMkUYwhhyDoxYk92HftmfFPVCgtsQj2iZu6MCaoYsaLtPxauJ36N",
  "key33": "r5BTPSWTVQxtMgpGoudxdEccTbyUpnbhudgPiUqBw63Krt5WYJkVpbUJADkcgLxLgXQxV6Y2hCohziHZpMGiasX",
  "key34": "L4NY3zycf6wXifHd9niJHfe5g9ApZKR8snKB1gtodztn2JA39U4K3fgMDyr1ZwXaQ4appUaFUMK19AHu7sWk7Lh",
  "key35": "5mVy9i83Uz1hykzGyU47gZHsjvQKEGfdfkEW8kskimNsNcMuzr36ZdctvKRGjYXTD1FGbKxA7TRBc1eH7ubbk7Fu",
  "key36": "4E2CbcvA2KsqUJAU91dMBGpengxG8dtaVHWoqgUsKZv7xXRXMTPQFYxYjRSESe9dVdyNaS1mYhMC2DVrfNAhJswG",
  "key37": "miZaSPz295bD7ye6pH1jZvyYRknX9HtrMgeHMiAUTR2ryNUqRAZ4ymegWF7XCJvA9W2b1wYTVLoB4WJiZof44bB",
  "key38": "3Z2TVXAtacfkEntepzmA2DcZL6gVT2tM4gQa33wnfRA785X93ar6qd1QxiWHvXWhSCz4Dtv7bd5eRaqEsweGahL5",
  "key39": "5Go1MNtdAuzPvAkETMLKTyknSPiMvjn5zjAHPm886PD2qEDZXmdUbruEqXa8X2k3FpMPvfWTuMraRS5dEhHVC9DM",
  "key40": "5w7AFSpPsuzLCJkM8fdFFTxAnTGsMwwrA51bwR5drP5Xeqdpf1AkrCdSesJhbZwzEbpKTfDeCuoQUDNbKFfj9i9B",
  "key41": "54HK4gcfie3M5yNRVdLawSDrVBQXQN9DfC1T3KsCq8ZdqQbMhCqWpRpWQtYvJ84BqtuoEV8H2djZaySBA61H11j1",
  "key42": "3VGhRczdUynvxLrKLrQ5jXoHbpAYqrYTSUjC9afcpkFw8eKXWTmmrvU1zZN5NkjwkV7UcBChFzZW71HH79dqCoSz",
  "key43": "54d6jWJ5VBt3fStQfonVKiXRFHqf8qcDsMaG43dTR7VC2SGUooUwANEtHj4FJmNK7QReEKVbnGEJ96QZWLjHAwHH",
  "key44": "24iLbgLz7mUBLMW2BVNiyVZts2benmvJGc7bGsToGbAdeFGu5E8VXixJ1Dfri297hsQoiqTMQFm4BNqpLbS6DcE6",
  "key45": "kehcuJqaGZE3M7HrStDnNEeJLRsb8fQ4pGBBGsQ8M2ceDdvg5Fk8XEeyo6HKP3DPsG423ZN5Xmg5pDxUCy6pFZd",
  "key46": "5d7KtxFeZwEBDTN3w3yWGEY3E8em2QczHFKK5fhBD3C2wa3KTh9VqQV2jx9M4bGVDPyyJkaxozJjLLSXN1JW2MER",
  "key47": "59CnCLy5tgNnC7QNBt6PiHgxy6j4hk79Muhp9thk6MQXTmRVyxSG9BR2tfP9X7GG3gPFCZMU81K6AhAAhvUXBs5r"
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

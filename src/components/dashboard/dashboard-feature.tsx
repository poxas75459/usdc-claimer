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
    "2z6gnRFjfSj5uVmm26o1ZQTFTsz9e4UJ3BB2r6DeqYRtN6sYqs5EbrVVNVG3eKBmKzy4WCK1hwraEAVw5twB49pL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vTbYhZqiYemZZ6F9VvCK3AHsTB1JkZZoPNw4WiwceTRp8JmSE3yGqa3FWVR3YTtFBbbsnoVrxMnfqjTpP81c3zq",
  "key1": "62v1k9yF71Z1un316jeNyDrAnpvSL6zA2q2tck9qw1898XypwNEeV3PayQzx1c7rQt3sWqPmdNBJhwZsEvRHwPVX",
  "key2": "32BemVDFtx2kNRCH74CJvsuczXCEaxXnrpvh3JngdzxLSsZKvKsDrg7EpDJnXvN6x6MA3uqTZh3pRRQ6YWRnnAjf",
  "key3": "T4SBT8HfdiGTvWUoXg2XCNkuUnH4g4WirbamEmpC53djEoqR8KEK6mVxui15cm9krfmrja2pS35gJmn6EwsZSno",
  "key4": "2m51Mwz7DikjtuBseLvbjCsNbiCoCRYiSoarrGj6mAUBG5TSuzXVhb1YoUmfurRtbfAGedpk5tyESj4gF485VEA9",
  "key5": "2ro1aGA6fQtGaL1fH3XWctWD3SBRiiwCLUHEKKcGLc5edZb9u9TfyVqSJzBMr9LrraJdVJgjfYcNH5a3MzyfAjcN",
  "key6": "3CpxoJ15Z2r595qC1Si8H3Yivdtd5fYtDNnyGS9mPCPuykosKF9bWuVoUQUjaNYjTRaUh1TL1HhSQuLoqctNBZgn",
  "key7": "3aFWTSq3HPwaVNnAyWD3YshGLgmymZ86aDrLCAQuUqbD3HuMCJWrBNmXcmiLDAFZFNdY6CcjaexfosAXufq9PknF",
  "key8": "5FRbdcjKtGd5cxL4rvATt52zKFBnpRfQMvNzo5cshHACW9hT5QURtYUc7ZQXW89c3BQ3cTeUX3j6RugX8sdtwa2V",
  "key9": "5iAUC8Bfxi3Nmdkt78XcnvH8LbV39DQR1udczivNBZtvNBttEu9AbXDhqykk96V8GvPS3Z1arJxVfeYCfmR3LPd6",
  "key10": "2bJU8MFhXVLzMmWXm71NfZqb7i4Df4EKL8ZVA3nJT7jegK9PCormuAykseBC7kMrTWLXWVwtyM5Ek8tqQQM8zNL2",
  "key11": "8UxFQSSuYYh9hQCtXaquujBU5iLhXWuon7XxMED2hZKzjAdxtpLZN2sQJU6Tg4kwDtA5opuXXYaaRBtj1kCaCod",
  "key12": "5W3fqZuoVYFdyMNzp77aNfidDY9DFU4RSxMpqpxeMm7DRw6nsPRK1BT7dD5YkF9rDJA3K7X8gTPqbKrp2NmgADtU",
  "key13": "41oiked5stzZSUMAXmuhHwkJPM3h7sxMPhbbtdoBc1DzkwSHPA116zaYqLeYxjowYhEoQMW6jMH7YTzSrzyW1ouj",
  "key14": "5JEdrT1rxkafUk96ebaNm18YS6QvKLxudXpTbL8TvPQnQdgnhuyLs3Egu3q9Q57NgfiBUBs2GgeApE3mrAqZKHsk",
  "key15": "2o12KC39QVdK89gVz4634nzh1snFXTSZvqA6moYCmH4qDt8TP55BK4RFHexuQKCgtHRoG8bmGHfX8v336nQkWLyD",
  "key16": "5Ge273skfyKzBGwKBCEKoaPXCPQVAVtrf6unbjadGffV1M2yRziTPqm6pv3mTZLo5zHFNSDzpZkxeyHavU2HGVmJ",
  "key17": "66N267E2VdooqiR9fLtqXPmpXmM6GmKZvfVSK5yBH7LeVAgxbq5bct6YzfmygKfLGRtXowmahsdzGGUBKW2co9DM",
  "key18": "31om6F2MM6ftAHK9cUSj5C9Aw1mGxbp2RifKNNGzGYgZzsnWpmHJ3kYYzmpU4adiU6kUELhbZmb5mN2kuKNZNbvp",
  "key19": "3H8Wt5DHKi8wTcLqEh5rcEix6vdQLjCP71Es8hMb3y12dvd4zReKDGKRKYjMnFggujWLoTqBLgmAYFtTaYdFKwN4",
  "key20": "3UAipKkCriyDxHXjXmMJqPcSYZfm3BJZqPsEx7SBV96RLPo7LF8r4Sv4Derd44QMrkC1bFKLsWmC9ahQn5yj4dLz",
  "key21": "4U6R4pX5P8YyGD2rwMoMjn8urNjVQPpcmg2Qz99K3r8Yn6wvvfXAEjeSUAEjBkMkWS9Ur4Eca88xhxF5DwejjnNh",
  "key22": "2mMuWbgb1wb4tTCbvKJRMxUhGk128sbvNmtN3iVfSUDfWStrHCSmdGJX54tnnvrPUVwv6S6B5jCadi6M8S74Tpy2",
  "key23": "7w7fEWsA5Z3Z1EVcr2mjY7NgvBUziTqsuTjDNXPU9JDuCgAdnxncWSZVJVHwQQsbs4vnHZ9p7EYkeRdcuVCdmBr",
  "key24": "5VVWdwngikDtxsVMaYnf8HE5mTeE4dfKmTyyUM4bTFxf2yTVbFuif1E8LBsketTkDqsGEuXCx3NgTR2MDVSDQrPT",
  "key25": "4R6bTUuLdSZDpDjqNrtjjtw4dGTfouR3QQ7PYnBL7z3JaabSQpDkvB3oxV7n6hPKqfrzp3ppFQvd9sPSCPcQwvAD",
  "key26": "Az4fRkgagB4Qm7kkzA8MjQFUFo8xHYZ7GmBZJ5UEXewx5TMHSp4YY8coJ2h6UzxETPhixT8VMn35gEvLnxzxLdh",
  "key27": "3MwT5nqyRxABjA2cy7BJXr48PDdB5ZtXyGZDsMZ6mZvgxAr44ntryVsWbnco3DFT5BP6kUHR3qiLWHWKvMUGktE2",
  "key28": "5kCtU68tb1TkhNeHYCu5jUbBip8pGPq8rdMtScqTh2tpxLvL3g4ondbxPd6ceDgpt7v8EgFc1CGDgjaZ3VvoVYD4",
  "key29": "274tTB6bFsRtsTGNMxxBzH73cXnMVn9k6cZEE2bz1FaRD56GDV5AMYTRnuNu1AgRKEPCincbC9v32UfJNaLjradZ",
  "key30": "2VgnicDtt9hLXLXjpu5ruSREucxu4sbFSusXQGs6gZYmacTp36DtqK2bZSVrj5hPpbASbyTvxiLrHCS8D2rh4hzq",
  "key31": "333ndaHxcUhxmRQxTtDeZV4RbMdqCZjp1dDyPjhNkSxobf2PKbPfDoNFuejwcUoLjWm78wMr2ia2WZM8GNZHyR6t",
  "key32": "4LqnJy2erHwPRBkGfvSxBncL19xm7pRCXpKPjwxDgYzPakvFm11R9nbR5QGGJjVub5DGt1ACdvJAhzqNBnEVSZDq",
  "key33": "vWLxwbYVibo4eWQF3isYfDTfcn1BRRkuqUkAdEd1Qov73XiC2HgKXqTYoxQLhphtuh1ohCK6BeRBuG1p5PwpdzS",
  "key34": "4Zbgc8oTGnH2Tan98RGYzrJJXTs3YTFBakdvRoGndcx9uj21xFSFwuAg5F2nPL6p2J1aJJs7GrQpkLhLbroyDPHM",
  "key35": "JfcCpfY7gNYtCqm1nGLz7QZjhdWj87MW9JZ9hPrQJhJCefxkksAtadygh4Up8QXuHJCh8aYbABfvRfLgKLDgqyv",
  "key36": "4GkNhAgwVfUw3ohFuSyQWnnnPuVLPdfkN74Vk54UsgwZv2vDEwQbJeViXiBd2ZnkLhSHA5NdNTMsG9nQrR4kByqX",
  "key37": "d4w3f8842QA9nMUZTCayojpenNAQ7StXxaUejuRxgX7y95vNA9FmW24h2Lxe2MJ4LCEKSTiQXqsLah3L8v6jATb",
  "key38": "iExP2be4TFDuTgCc3kmDQ1Cn7yehgLSBsAoxE41RLtNPeJqodR1HedYKCwK1iWJV7ZjB7X1AkdYkMDMGf76E5Ge",
  "key39": "2kqLvCM1as4gwea9BGKot4hUdMKm8edSbe6HfYzvwp8CJ8iSMVYP39DSHee7AJhy9xJhKvXvqi8gzzBCNFcd7sCr",
  "key40": "3Y6fvi2KVEcNhHoVsW5X2S4xNY8kpVbRbiL4LneEp2gjrjatN9Yy4FDuDaRPfjPFX6Npp9MexmocRj8koYN3jSkY",
  "key41": "2RbRREFyKz61U7dbdbb9u7moUU8cY7jANJBnYfr6WKgpBtzvegbT6HDGjzb8uGq5NNnj3RQbpE1m2MXsTi3xtaMQ",
  "key42": "4kzXsy742knAXnT7zXHNw1jdPzPD8gkpftgbgo43fZSiojX3i2dfsGoUn7Goc3RsSuqKAC5PeqspEGoGJGFcTMEW",
  "key43": "326DnRYWW3iA98g8H6NPTSR1NuoPL25rSwH4BTJVPsK1gMSrMtGK4SJ4Bwr2XndZwEUfydQXgT24BMcLUr5TjGrD",
  "key44": "Gq86UTdCYrdrLdv4AcK7n6XPUYJ42xaiuTETFWvLz95Bovp3VvQNQZYGEaKswmqjWqMyxeNB9QyEQDQeXhbjVm5",
  "key45": "3uLznfsXu7G8sUaVzkfHM7ha6j1qrhZSp4AX7xSmAsAv9KThC6nMrm8nDEcowmwWWLZ34YLmyHfQvSdTkYj8gDqu",
  "key46": "62UkBEMcYHKMneSj2XWQMJnEGQje9tz4DkEXRUSW47yVrCY5iCvzo7ggLnhb8nw5nh1uyiZxkXSRWa6qWZ7neBxq",
  "key47": "2rigKYFnu9sfMCNQDZ74RdWt6Y1rZMS45Fh3jjKYb1rur44eRD9zyvdV3tm1aL4gimGT4AV6zNoZj2MDShm4hDoS",
  "key48": "3ugSQMh9W8rGoozreQq7LzzgGZht2hZt4oGSQ4Bs6AjZ6cmS2S9k6oVVhCJcHa8W9U4FofEJtAjrZKAhMvM9ErUb"
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

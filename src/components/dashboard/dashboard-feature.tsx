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
    "5Tg6ZuNFy9Ta8cRNF6VUyBcNVyEqGo9btBqTWPHRzeMjZvAYwJG6o7vWAGyJRqh2SWEuPjAb528NBdStySYbudk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kqdf8ih3HsTmhhu3YZQ8bk92PenVfbVcrid9Vtoe1m544KFP1ckp7gscE2V5tsDUwZHKuFcpSNooYPWjLhskusU",
  "key1": "2wezW519xp1S54QxLykFDNPRbSwhQwBN2JygtTbcnyFtnuJYd5iGJ9vFEwprp21R7ZmNi9zteMtRGgMjkFqm3a59",
  "key2": "4QQtYBCderWhNRofQjbVJk4NDuztUMXh8REGkdVN7MWfxJJ6rN6rfDKRap98oNCkG7hr1RCNKCdiME43mWk9AAo7",
  "key3": "2Uut8N3dYFx1jJDdv68DdRurEM68TdJJTZwMMS21JEittex4X95tUvbELvU3nPpBFFkjymhD6qX26frwt47M7xxE",
  "key4": "2UmQsDZX4xhAxSFFYHUhJwUxhe5KDrHoQVgbMt73pMg4MHvjrfeBeZQSUsZeB7N7oWC7gdiN3FuD8U7WfS6Casqs",
  "key5": "7v1Sz9HBMUPyN97d5ss1dg6reNwUPctmXThYCJADpWLwpvw17PdweFd1VAMQtY1pJ8KQBkaGms1h7gHRMi8zLDb",
  "key6": "4Djdgt6ujSsuoegthfBQ6iCBtYD6s5wxgo7RDR8hPwFcyN4k22FpmXsfgUTH5AhXJVsChrgXputTjFEGy9jgYUZV",
  "key7": "WfZxq4FKAFLAFS5FykmPrzg3SxqRZ9Cmsuhb58LzzG7sbW4tWLFMoYMpycz1Lfvg4V3MxBFBMZtrpvRLyYNywUh",
  "key8": "2xDBNzNC4X2jdNikX9UhzK6fCmARkEuBq38bXbxjBDVRMcENrgGwzm1SwQg9o2nxf1jfiBLPRpP5qfFTgcRqQQe1",
  "key9": "vJtEBC48ThsiZrWJwKkVRfqTCK2UHp2ofXJEqQMnntsmGrnfSQpe5uoTdYSsfqPMYbMxDzDWpiFSijBYmkfi5vk",
  "key10": "2FfwgCyFCFUU3fvL2kxYQDd85RKRQasfX6rsHgSkaD4DZ1BvgxaQiBHSZ67mYsELAHXHKos8E6EzXAXi23yKsMhL",
  "key11": "4JYN3WR1AeoBgPXMV4hrLs5XWnVTs41jmpqo4p1uC7rqEfPqLEA9kGNP3PWS6NJAFQ6hcD8NW6KM4aPitxCTYheR",
  "key12": "5Wi9EVbeLX38MGe2GJfGrwqdfVunGbGNhG9g8eM4jm6JYYEPaYZNzfsaDgWuRntEh4FmkXTrL6ZwPqP2mmEgb1YR",
  "key13": "3hk71v2LXwSzQVBHcusertUkTkY7zVhop2g7cE3spJZ3ceotBgcoujEufgmfEXrAN38T3aEyfu5ZnCWWa99ZEeCz",
  "key14": "h2AR1KjJUr8Ge7p1MqB1imfBtF42QcYA31totgByS8sQx16fxMndBzsr6tsCqcrXxDW2kdfhm9NiwGDeavLkoVu",
  "key15": "4BC6Ry6SBjUDkHKSho7r2az83HEAikJRkSkF8dNS97dHNHZ4z4grNWjEtBwi2vRw9ZxbDgwPJSh1jwmTocbBnthY",
  "key16": "64HcGTEe1YM8U9CXnw3axqATWJSLPdjwGn3Y9DcSGuZQmSW2aK5Vy6iBJZRv2cqQQatqNBiTHoPJJECpF4Bfg1MF",
  "key17": "4u176JKvuRj7gtDmuoS2SiuyqYEFKdQ89dgL4aTTmrz59NDT2rtZsT4kLQBtDY9FTcXRGb8hi2wj1vM2QUgqMD3W",
  "key18": "4kJGmzp3GvQTXrRwhJMbWiSswdDcBdhjJS6Ua4Kp7fpG2nH82tokZUAedVZfm7Fy5y4Ejm4Y2pNFpUTJ8qFQ3Hr2",
  "key19": "25ujDENTh8ankn7G3ZaFrNDGqSEviLJbN5o5SByyArg2MtfWbJJuxtABjhGt43PjjLSgM11zRYChL1rFxg97kswZ",
  "key20": "32uKcA88i6XdK5HXkqk2jPDfUfc31Veo9bJu3aihQyrH1BrKq7vSNuNzZ9fv7qGtBFtAMpvQtW8H3yaeBmHvtkg5",
  "key21": "2dbD1vhcRh6gD7t9aC8hsX4SZESPGo7DZG5b5B3YkT5X8ybkEPjtjqiZ27A8j8UYx8VR9u496TUpU636J6vcWHfv",
  "key22": "3yRzfNN1XKipXonMwupM8agqG4fxBXrLRmvhh2rBmQEsyQSwoWTB4TG6TbtstCwbF8WZgK1epz9xTfTXLon3eZiC",
  "key23": "5GTx52HbKPqkx2N3x4SwCDahkZmeMSGGYGWt3KbjsN7otzzMJBpa1VmsPGtiFwB1Lj9vpQa9p9WVkcn6N8VUKDKn",
  "key24": "3kJPKA6zQEnAPJmBe2JDTqQPUHLai8Ba6aETPKBu9XdCePN9A1Gsb8f2ojtpCeYM4JFGJn6fcGEu91iYsuSVdmvs",
  "key25": "5oDV1fCoT3BrfzzcuGqjTbmHGFpco3ewHcYRbKVL9oYspTkdRZGi4sZ2ZGAn4nmtNfaf7DGR79VNC4LmmoY5hrcY",
  "key26": "3wTmJArh5yHrAN9qNDNvEgM5kTxGxS3L8D8YiKBgSwGr6Sy3PxUAP5LUwbQRxDmFdLEPYVwjXvXaRKn6Pi7hZJMX",
  "key27": "4S4J6E36qv1ZXZdGJ1Su7qUnfrEXmomwDPDzfsEhDf6xwwF8mydZFRt2xQShz3g8W3PPH5mqzFDBV3DaXXWTBEZM",
  "key28": "334BNTK2wrWdJ2ioEyBZRvBop9ecu4VopvGHNGmZaY8iRYYsLZk3n7Dy9sG65apfzR21b5rJ34LirKiB1n5jWZHr",
  "key29": "2WS4AqkLwUABijXjPNefg8okEQ8DVADHD84QXj5V5afUpBj2CpD5qUnTQ4tpvXEcq2SBBesAiTTWHs434H2k8cSx",
  "key30": "5dAhBhZ6cTZ5p1YwtD1PrQ1kYXWWieNeUnz9FgPWJfvz2bVpbd8XgXTnk652Hw7onS64v2sNCYH5mJAte54Kzg6H",
  "key31": "5kc4nZppk6rMSH1egcFmh7DYVVAvfCW51s1Ks8ubYAxhm3EnjAFuoLvdAvEXFSFEfWn8xAu1oogZGccQEE9D43Ed",
  "key32": "28mYmEvmpGfPCpCFjutimJ3jrNxPNgfgEgnvURa6rsZ14TGMXkCHJ9fAYk9CuN7BxvnApkuabFHhKJpfLwaVmDZZ",
  "key33": "4N88FvStRVQJZRyw1237ySog6T9Uix1FDKnWZCKhBsScpx12gpboRMw1MziJhtNf86wmkYqBPYn9gKKTK56MzLHe",
  "key34": "Fb91yJx2HusRYKvhP8VKzU4xRT59hh6mNhpadmnNg9oDrCeHHwv7mu653dPHHPRUhoVeecxsEr6YcVQYePcf1LV",
  "key35": "4vMbrN13CQSCmDS2uYsk2Zz29kQiTE1ACYK31i5cvMx1iBdeLNRzQHcXgL3pjJmw99UNecQvtCYn2dKc98jbazXk",
  "key36": "28ae2RBnMnMNwpuC7J97vQeqGka5mcaa7mYBR7o3NKdDfbZSsaUz6Az1yWazV3b7g9Nn1mQQtfuZfThXJM2ALGor",
  "key37": "3HEbd5Z4on5cGe3LPvo7xByTxLSxiZskJhuc1ot9vvtTu5efYxHt6yJZfciSELKrF9ddcbT98W98DsqDhHASFqYA",
  "key38": "4sTi4KNVU815EBMWBD9GFhTGtrBNLYwHn53SgC3YBduqNuJVBVQFtM7x2Kse4Lz9VefeSEevVw9Bo896uJo36TX9",
  "key39": "WHY3WpitW2aquH3D1qcNRjge8DjdDurYyz5sQbtFBLU9H1fkdwkRVuBt6uU1iPBQZJ94nmcRgRiyxbVF3eefQhy",
  "key40": "5HtkU3ehMjhyVoVEyWVT5NxhcbaPBQEU5oZsJCSaKWjqHV2Ge4NaYULVUDv5pYDSRv7KtLr4XJnKNiQdEc1t1EAj",
  "key41": "2R8hgZ8DDD7KcZEgYtZ4NJSTdq4GTJukKJikSxLY23Ws6984ZP7iU6xz6VZEyCD8drigjxqfZ69LuXomLsgBWS2Z",
  "key42": "2R2CDv62UK3b3remkSvuUDjBCC6aWd2qrPSAwFo4Wa5nQC1pNGi9aEvdpdEy8dFUprNxPRu1Hhz5Z3PB8v62n1Qz",
  "key43": "r8oc2ig1z9aiQ9yCJ5XBNHv2TKRL9u4hiqiHjz1YBG2AQhbDpN8tkUdXfVzDHWjbWY2KB3qUy26KV3HTP3diczr",
  "key44": "2TfCA3Hc1dZhptABocPHNXxeK2rjGAJpEK4fifkEteb9uQps2cXQCmoeXH5QRBR7YW7tbQeNU79ThgJVdVJwDDcJ",
  "key45": "3EMrCHbm1itHzQw7wqvC7Xma8wE8QBVnA6yRE5KMHn8vkPidSaVtWdBVnGU3woTymtHhaMn15Um2gMoGumnDXMXa",
  "key46": "3fMnntkcNGgqEeuAxMvN9XQ8MZ1xTPVWcNzxEoKxcMFJ68a8MWPrWX6ADKTxeW6sdTkmSHJ4QfTa8EJXwG3m2cQZ",
  "key47": "3sLffKemnTntkorfLeGyfHvcV4urWMKWMexktrWD5boe5ewpakLNMEmaxVcSQK8dFhcmbzt8kadDtnnQmrfRLHVk",
  "key48": "59LW1oQCsaZuXtXo8WGszq7YTVmZrM7mgN2iWS3PkDWnobpm7bKmMV1UiaKUCwomAKjazPi7HqNrNX45nPbS4hpa"
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

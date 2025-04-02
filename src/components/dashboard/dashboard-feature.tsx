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
    "4tge6nyHt4xWMLEohAaR2jfCnPUZqBPoP2NgRq7Pypk8AXeQippvCx8e3AkB7ZiZfZ9fdTQ5MQk7HtEKxXs1xpLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63BnDCiYfzWuJc2prp51Kd6wmacFJmVPFVqSgHgv7MkS1pyWw4bE8T8FVRdumFB1rEJpX4NjwWiDqii6BTxaTqRG",
  "key1": "3cmTrAUEnWnooLu4UweDHkDGdFztHJwSxDCk8uzgtYk8NvJSsqMQYTFhuR8eHMXaERQte26sk2mxmVLpXkca26cG",
  "key2": "45FnRkojC9FBTJ43GwbbuWmdfcHTGxriujvghwW2p9CgnyeHaZYaUZN9wSMMM8MajtNQSnDXZJtqTAedSUYWYHBF",
  "key3": "47eBpp9WtcCmb1nftjf332FCPQzXTsmnWuw1NFhUW9XkUktbRCKd4u1zToJVjen8jbKz3mn1FsXPqp5dNicTF3Bn",
  "key4": "FyaDqKWryttZ2WPkbrNYZzK3EyHvzNgZuR2R7CSfuK8sVKz7NaDwnK3JokxjxBnPVmWvnynNCQAA51JnHWupLm4",
  "key5": "RNx2HvmFnVmGTvDrzYxELj1mUz26UJQotR4DQxE2RhRaMSmprrfYSCRoWMbbuFeqtJsKoNVmQ6XufpkgT9gwGfa",
  "key6": "2dwBJ7pMcPPgPenNAkogqEGhMZCVQYKoGoyyTrcj3opYSxZaJb5Vi7xGPH3djBxLbY3BfWykDMRjoYaAh9eWhKtX",
  "key7": "3jcHngYJoNZ7yGsCeL9mVeVDymR5G1kvoxNrxKwkay1pCTxLF9qzaAe2avDRdvia65SQT7Zw3KyMZUEgmT2aeZYT",
  "key8": "571wM42FizT66TQbqKebetbXjJSbpgxnHStJztgBfcCMSCSBp1FZbdURkRFWeyLXGRWRYJMR93PnvkFYpQEgYAm5",
  "key9": "7kTTieqwSdoPBWvP4ujknwUk8W8aiMu7bszrt92aVaU3GoNsPyN3CTm2G3RpoQhpFSmapZDvV7FmHY9CfJ5D5bc",
  "key10": "51o31qw7VxKURtiZCz2q3KWNtutHWjCZD6NyZgJydAmAqghSDXAg1M2TG5C6pkVgvbzoCvbBwMfsnGkvJNLyqoBx",
  "key11": "4w7S3JVzG2ZmC1Rujoo7f5f49BHxw6eKdr5zNKwrDjbp9GM3325u8ZwwVbuzQVYurQbSNbHX82TpV4Pca7iX39qZ",
  "key12": "fJ2gnApAZ84CWxHsTVB5onxK82Wyb2uQTmhKdcRbr5v1xQxPdSJRZckD8enRvJ4J6TjA1baQfnKB44kEnjBXmQ9",
  "key13": "44upHZpdnVVQqmnRTUrWdq8scKqthYwZshschqggijHUUQ1XPfjvfoXBcq6HyQ1a32x4nhcLyZVzpAYB5oNiNe5J",
  "key14": "48sZjcjccMgcDNcCPg1ZVReUDJvA8S7YsoAxQ3JTjVWPeK8ngzN5GZt9anjvy7UJzBZovdnzr96GZSCZdHgtXBLV",
  "key15": "3x8tEdzryHp23VwhKWCDXLShggaRyhrCA32H98JxVgBCYtdvdM6hRm5eQiSzMAGpB6Bv8eHrqTVvKMQtdiHgKSyK",
  "key16": "5qKAG6VqC8eibVa2avnnx5iwZ9ws9PeVkVzcqCyRDTz6cT7fjsdngbGkyj18pt1nng39JXUCeE9U346g5pWQxz3W",
  "key17": "66NZ86pQtiUesMykNmHNJuvxH2cVBVZ1xurcM5nQGu9Exf8y7g6HbJqUoL8ewFBFGWqj7S1cLaSHGRcnso5x8TUq",
  "key18": "3DzFux2mVuvyaKttkmzpEAauqfRAXGdFruz8rUpqguZvoQM5ytRmfyFRNoPcJwCAArY1WyMrDJErcTdp11VgoNZA",
  "key19": "2GCdUm7wt6eooAn2DarYa27kNb1ixmvnt7veF2htTop5kp6DtSQd2xcxejExLjvKTQMM19TBhfzGLL4FxV5WsBys",
  "key20": "2F5nmubZgRGFhGdYE2SK3MLGwNWEuRzRoqWfyHsb9WHBmZBA2ZvuEkCAw3NACrgrfW9doHxbFM4tzTqtocXYw7FT",
  "key21": "6vjdUkbN7wFcvXZ1vUtgPjwDGGQEsJo7hsv2DBiZXY21SifjDqQhGbuyFEXZBZ1NyRiqbjUX1QS9ZRSJQr6UEUK",
  "key22": "21mnwCtnrqpsWBKJuKj9Pj2FvCxRVeMcUh5X4pjMsvWwou7bRC8Kp8o16rzjXv8o5RqKLbNg3wMwjDbYcLDzTGss",
  "key23": "5CYUaB1B5Gy5YTcwRNNEqnsheJtZj9TXw8UmMd1BVHu9zi3kJKN4H2113Ar6VCLSEmiGbtsmbHSafPxByPt2bNv3",
  "key24": "3eTyMPcd1LxrD37GfgomZuS9quh2UrmHYgR1H36bNwmroj2AMkPM7kwVGmNnnHAKyoV79NfjDkNrUmk6DdHcASKQ",
  "key25": "63Exs6jypseXLzRBxNQhjv28jBZyBTUffQtJXSqnpbyvCU8XGSQHK1YNheDGMv8zV7WhZHdNNnEcsJXAYEgvW1Ap",
  "key26": "NjKsd8PJcDgPnX3DHyV6YHLNXvhPfDZGYH1DifmW8gv8zY6dHage5fwkXGjuUQU391AErYzHMm1oLwmLNCeHjtY",
  "key27": "2gBUHfYQKwTPSuaq1eLU6C26BPjRXJnyzbXbVKddf6LrZEBawquxSQfZoLRRQ7SCzsUwR1d6ZBNxuL6Zu2DrBL6X",
  "key28": "AzJogAEKXMB1JoPdXdKWkM9ZLDVvWo1CjeESGBg8vC6DJYCRioY7jiK9RU9xJKRCqyLAQikC4TLWtZmDhayVJuF",
  "key29": "2LrvK7Nu5wYGivVcVLxTttcC1KyDPBEYGKjUKobXghbigzReyAqByFxjweFCGj96zR51SLA4ow7xj6Qt1gLu6Wvd",
  "key30": "3eHuYo9rppHZvX5HD9KTxzAf7252uiLDZJFST8CgCpxqW7qAWvocEAGkP1FUYA9x66WV5duBAhckNr5S5fXydyyv",
  "key31": "kdEMwKu9opBVYYUB84GD3uUUqNg6mQt1dQbL1AL1X5W4pu4imA9BBXcXciBdq1KVzLgLjgASy77aD3cdaGyQodM",
  "key32": "rwe2tqr6wSSbAGZRhf8cMJEoAyYw1feeCDG7SddgBawDcHiCfY81i6sdceMbVTJN6DnynYBqeNqp1FMNvSRB7Xn",
  "key33": "2BFQGeLCZZUgfiN26BdUBDy5doEnKdbLisbujExpW7pMjTW6Rry8Ac2jgH9zj1k3TuSVs3KWS6FhiAKjD4QLFG4e",
  "key34": "5k7waAdAqVkPtwoACsKgmUkzZpDYtnd8JDMQN1LjbtNa4VG4vwbaUL1NJWoYGcaW3prUuB1XfBKP9L7KF2tdXEqc",
  "key35": "5V5PAv7Ljwc8qxFFP7PGP88FtqKvsgkBzVYS4sSG6jzRn7f1srDszfSxok6KzkBa6hEU9HXXpeKTRpoW6sZoPHcw",
  "key36": "2JivfJDaWgo7HxL7Jxyd6HyVS8aSXk17bkV39DkBToQVVCGULemRfyeUr9grtkouav9azbKSuLxnryZgK23mEsAW",
  "key37": "3ZunpBq2ePBonnhit56fnQSt5uQyggF7eY4uDp9uw2DrAyfcEPwEArPRRK2KrQNcANQcJx75t5dzdQUu8RVMubJm",
  "key38": "2jQbicVFAWaT4STZiQyrJUYFN3wvozMXHpLxKT8L5eTTP1mob5QDQJHSoEFpg9UxKYivQZHJaqKsA4DTFSN9TqGa",
  "key39": "3WLfGhJYQuH9GftPFQsKGPJVavQcQxAX1k2NbEvW9DMCbq5Zcagw5QwKxzaaAHEo6HcVmNxGbafRcxjDEyzDZKBc",
  "key40": "SJcXr2n2q3ZvqsngymSUgZxnsNV3xG53EC4ZR68DyZCoP9LisVXZWXmevf86FxRAKGwpUrHAqKUHPdGwAkMZkUe",
  "key41": "26EZE8Xo9fRtGDyN7G1YH1oPmx1C49byphUFXYNzaKNHkgYwhdzyvM3WmJcgx1vVUYrqK58JY3ptKvYnMeEEYoJ4",
  "key42": "2o3k9Cfp4SVmtcLuF4vZ9JoYvBrz9nZ92hfsJSd5xpLr1FJyb12bEU7TYUbtS5ZtKoJYg21tD3xrjarVTZsfufj",
  "key43": "22gsXnfdhJ735U4DTVeosBhZJUEa9JpqDiZACfmKDGFZbw74gt4nrXdZGVf6rrwKNUGyqGg1kzhh1ibZAezWKYbr",
  "key44": "4CQ1Jui6vSxSaayBN9z1GceHqk6u4axiLgPe7oPovK2zbUFozWjP6nf2jjbpvUs51X82Y4cffVbdNyU42n6zTRg7",
  "key45": "bFrsZ6zxNq47rST3uDJQkKPzn8LsQ5YxMYhmpqzxNfR8BaEZJZaaRxCSquGJbWBHwWyBZzanMKg8rrgakZsbFgf",
  "key46": "2wdioNZUHpg3GQFojB32amGe6ECtrs1FtRAZgpwbaAjCeSShDoBew7jJgA8QPYsgWh54wohjUFHNLyCgcC3qZFjz",
  "key47": "zCnULFWC7T9xG5cEDhheoQAx81BAqsnawjXrojerfqGykZYTLU74G1ZqLG5Rjh4L8jg33158Y72L7vM5rNvmg2A",
  "key48": "3ymLNkaATrnt6TaJYCvF22AvNpab1oAqdzDPpU9cGispifxUn4xToi2v89cSdJyn8XkyLn8yZUqTj89YWvfvYC9V"
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

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
    "49KWf9sWXmnavgPSTm6pwCgrbpnzd96JhJJDFzxSF4Y9tRgNkGEUM6KjhPp2wTqe3TZLKswLgyueFhEPLCCSKnjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q99PgcNnXRX6sY15en9TgZG7KeYQR7GsYZpuTMi6Vd9BeNgfsKkH78bgdqFMAVK4TVuFjaoY7pyocmHcmqJc9jy",
  "key1": "4moe6tiRcYd8Ldgj9rUjxdjesCP737bYbSTrN9pu2W8z7Hi9PZqRxRpKDpB3kcs8ZuLuvzofiArjDa89nYJNLqJ1",
  "key2": "39HQubjuhFfyVRbW2SanyoSHXfVBqefkqUcbSk5PPPhGhrpVazTzeyscAAVkZQgMMQ2dtVdVFvJrsEv1VKiQmDea",
  "key3": "JmMKmhqygStQ6KYd5Smg5JwL7x7i9pr3Ku1xzgDYcKjpqwofwnbcMFSU2gt2WNnauCzqx926LDM4z4PfWZMZCV6",
  "key4": "4oSJS6umMSRhaeLSYonsyFgYdqQBseDhNPX4bhQCsNt6mD6ZupJ4jXNxvVkGADNCPm18a34Xa4yeXZs5EV81qo6k",
  "key5": "3HUJzoH2d9FneNGom7VkQhKddgbNmpRPhrdKJqBnJS9D9GAyCXdmbN9DTmqJr1hq6zE9Sj3ahc4UgMBoWYgydz3A",
  "key6": "28V9QQvaBE4T5Q3FSTMdJqKv5Wco9rXZidV4YcCiumhtzDsucXpmL3BMGpK99JBYiedxXNDcvH3JwpdPt4Rtpf4Q",
  "key7": "pY8h8WLTW9vZQ7c22f4hH7FVCxm4u9BCG42vNr7QdvCFZre1NpERgpyE9jKcp1NKiJxn5sE4Q8ToV1WQAa5qHcb",
  "key8": "KisY56Drs9t2rtT2irRdtg9fvUqGHm2CD2JHmwQ3CdcPx28va8XpCUGaY6S5JXt3zeVSB7SfTeeQQ8u2ZGiDdc2",
  "key9": "VHM17mXTeoMmRWvJtYXmyNDc4qgVcDvtnNyxTDU2uU88VYgVyabstouWvT4hT3SyhYfWyc44zA4VJbQGPzDzoxj",
  "key10": "WDpy5qrbqiPdtEK9op9ZkkiLjrKPj3akScPq1WpRZ2j21MyXyhaexXdSPhFrWvUP98SCVtyYoURFy685AFhWLpd",
  "key11": "42UKBkPGXuMhZ4sETXW8dvnuxd6pd6vKsNE7JZDdu8TY7FT7QagVCUeZVhksqrUReqmirSAgbiVEYFLGBJq3XY6K",
  "key12": "AAa3p4mCQuocfFF6iLkN7ptfHMCG5Qtoqw5vfDAAQ2qEZY8jpLpkFoXyf1oLmBBu8MYkpKYgri6pymbbxNbZbwi",
  "key13": "dhz7QAxXitLc9CjChPfwsSWVRQWHo47iNgYEEKmRX9hBiSfGCFngXUuqTvESRkH8PxKjBjjayX8qWEWnhv5TNeY",
  "key14": "4z1jR6e2nRyohvaas3zqgt8EJYLqVtouQcgZBJdrL7QezfGxhhEdkps4UQFANM4cyGMiW6W9fZYAzQXTkeb1vkJz",
  "key15": "3w7vpPB1TXnMBP6WT4yJDCWJfrvnvRtPn434BedMH3ebr5TEa3ALYCq2N66CSXjnEQrofKuGnXhVVkoHgX2oAeKt",
  "key16": "3xormnUeFHqZRUWak1aPbPyB1N6f2WEsKay5tKS4J6aWuDzE6DrRmd8W6PymtQUDCuonCz2aW81ord5R9KesG3ZW",
  "key17": "dBjKsqk8HJR2iXyHSnjU8PtBscRif9jRbcnCYh285mqrYArWf8tsoKYT4CodRhmHrsAthS9F1BtXNYXf5KYkZd4",
  "key18": "5QagPc64QgX46eMzFds1qJXHYXPMEeEm1tg3FoKQfipbtAzS9AE6zCy6X22VqMdyyJjqmg9ECkfv15tyNEWbm9CN",
  "key19": "5T6GjD4HM6ZLfhkLkWD7Qsgn4njNdTznn91r3jgXZHmzywRGBe1hxzuT9ZdC9FZToUznBQTocA5oP23AfR7dS8u1",
  "key20": "3EoBgySprgTSbzenF19AwqLnoTZ1KUTh3Rfiak183yGSydryFMGj2gEtFFkTd8J438UjyKFXycofpuB5gpkp68gJ",
  "key21": "55Um47qNKmZxc4sHTdgRosZrqEgkaYw5iRBcFsuEyFFHEHsaWtD1zEyZk2YUifvLx2dcD9t1UsSQWQoRfPyGrW35",
  "key22": "W2LKP2BoPCspktPghtszKznMNFFD1iYy4ysLWF1YgRDxmdcs4a5ZijqrTU2JYn5t49WCZFQCAf71L9ysarXPG8g",
  "key23": "2bZSqKDktvcVY5puagf84Zjc1B5mu8D4J83h9Xw6dRn8ijcFdkBGGZSnq8CJnjHcQkXkxY6kyE9nD2ThUyYecVRR",
  "key24": "5wADYgcbYoBeNurAguEZcyiMduWpigJPaBdm9ovZHgeUXGug2qRYkGwQxVr3ikTcSGMumcFe5niPV6nHM4CF8wMA",
  "key25": "2d6NbtuRMPbZMmxctvnsE6PQuFTu1yqdUDZ7RAL7GGrBvqLoGkPxPoLrQXLs653SwJqxwyBq3FjdYhTEFMympt5H",
  "key26": "3z1mReK9R5Ch9u8SqrnVPKb4vGF4n6uHuaTbzmybXD183Y7i11Jhh9CEzjetkDDm6bQWk9t4vgc5Z6fLKmeideKu",
  "key27": "3YBPJJ553NXTSzhg1TQhL7YA5fEiDQMTWg88rKJbwitxP37gojAD1sAbkb4UdsrBNCMZ2DD2dvruZCvnQ6EnYv5z",
  "key28": "22Wq2GiUeQ61jPCTerdacPwabz3FRgVha2gCPX59BXia9GAY8X8y4QFcqDADBQ1qRaiLZJCTWSYkS92pWipBg8rm",
  "key29": "4oyjEhZAAvV4xBrnEFsQTx2yToxtQsaWD1qrUWrUjC7fHcrgumyQBP7YLcS2nysg38pxyvV1EktW7bbXy2RbRXzQ",
  "key30": "3BYZ1eCDno9xPjAXZvRbyAscoacLoxJvZqWR3hdDKGTmbCQCEkYnomkwg9hWX5EFTyYMP9nSsyHdRotsqpaYY6Sh",
  "key31": "27LwbE6muStpaCA7xffRezEbNPUpDCRL7aAgiDRjd1nt7dRpLo32yubJ88KnYVkgresECbNGWdZRbWQWg5SM4byk",
  "key32": "4VgTZKu8UN8kW3QQCetqRo6PEFSDkEqqeJiCzWxa13kwACWEdJn5WGKNHAwrdTGocxzpmYTLCyyQ3TzKtHLcuHmp"
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

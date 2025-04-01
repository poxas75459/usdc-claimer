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
    "X5dPgJavg86n7NgJGoAPUyrUwRavati8uXrsZicBTHt7awv8HKNcJmVAhdWwqQkQitUoNVDUauZgbjHmmo9ZRLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkYtWyLX2oxZAzCC9uzDVh4BqeCWZHRbFNFv8eWLm6xWfCAjYZpDJuwyBmAcA8fWtUiXaYZJuPiNntfzbtwMwtX",
  "key1": "4pE3mo2CM9oQxEsFQVhb9wj5ipAMKqNSFveW8a86bSjd46bfTdzU4ForsWe55e8q7y7DFPfgMVgctbinHWuPMvi",
  "key2": "5bgkJigGdW5ji9FgtD2xy7QHQFXh8ujye67KoEmNfiS8mXjU1DjsxsinUZSuyS7eJbg5AqBRUYpmznmmR4zgRrQf",
  "key3": "3hqbpQ7SEJpC7qSLPkabAbsuJwjfiQcHkJUi2DFr4558KzS4ATTG8CcDd1wCyRpQv8f7FzLQcbeh5WK3fMdttLsP",
  "key4": "48A4DfT2VAbrC6sPZM5VCpCbGmeQ3JYmwLAThRWufoT9VCFr1CvDQ6rz9k24nkQ2i6znghsNcLJsHw1w7VGkFydx",
  "key5": "64DN47k18vYnfCpGCbCKZpmDHoFAuTjcmxcVBzyLuZjwC5W6P5jptgXnPF4BBZqjXCC5wzdTESqtQZE7SAhPLHVX",
  "key6": "1RMBQpUZEVDqBiTmMeAuyEsUppe3TyVQkeN8XNCC2mcCCb7MjfZtiXqKSkkVeCvt2iYsrDp32P1briXYfzagTNG",
  "key7": "2aXf7w6xvM5zGatucV9VudweVxGCTFyEWAqKGb2Ka8rXnRFBpjrazaXp3tUJbBuH8X8jGUPDvsw8dZRfdhXr4hUx",
  "key8": "5gH8Xcd3ypcgtCdukqtWMAS4JaWMSQbXvVpKBLV3SchUFFdbcDgzXA7vog2HA9YWqgTJe6NCQrhTHJTxHGuoVPy3",
  "key9": "4AP45ThzdMBGbHc1eLd6cGtxfLMUDUo5pEcaT4neZETo4byGaw6vGqTeftb9MHJRdCrHRMVTJPvuJAAZoUx8uDcg",
  "key10": "6ZbiKL5m97ZekZB9ZyXfrNfr54RebR3BQaSLJeiJwyQpb9Vy3JSprepLEvKVnRnxW7tpqLeHPPrKFtTJ1kdcXyC",
  "key11": "5KB9kFE6rrwXVeWDz9XJRftf8ksL9aaThZ89TUeqE8kDPkGuoEpxUiFZFZNPnfRGhh7d7hMHqM464182tEaSt5cn",
  "key12": "2i9De5sq4JudZJ3gijSH1F5EqKzi9TYdM5M5XuXABw6r9X1Ne8NPcW6c8gbm7YrGQJMLDcgPfcf7Ge2vTgFfwav3",
  "key13": "2aHmdPCAmLK9HEtPUgjD2RMGmWKAv7vHpUMdjJMzzqZsawm3RqZSYvZX6JY65sJAv2YgqQfTyNRNadYytwyNp8N3",
  "key14": "4A1HUWo1UrdTsHvSRVxQUqHGANwDRDKALkpBZ5RqbgjQ9NHAiHDMSuLcRWGvubkcPQSEythNn8jXrgtf5ztrx1xd",
  "key15": "3tpwEogt9SryoubwdymDUeU8gnD2i8fmHvazw6m4hFeDM4o9okXGseFo3phupehGy9fez9uYKMgYvFHEoViitUba",
  "key16": "3FmXk3pypeU1Gs5D596DUNeptrMTCWsUrCN9Btw19pvTjtCoCvatfHR51Kd5ED2EF5Sjfv8J48wAZv7TsLtNd6Jy",
  "key17": "4uVTAoBZb1oMkfgrDqUHNhobamzsJnDT6wSwHk84x2ZAeEwF72x49HNbwMtqHBXkmzcy2bUg4Pgw9Dbkh55do9BD",
  "key18": "eWBNWB419gMSzgoB1TX2Gadpc7E7NMz7Lne7ndH6Vh95Y3WSbrZ9b5nDvKQKvtEgd2YgTpJS6Zve7MR2aDmyBgE",
  "key19": "5EUbdkzp5qcp6F4y4KaeTBhGyJ6MbH9ohwxHKAA4c5SBRVCwYmUoEhcCCbY6Nd28RnxS4Fb68wYqT9gTzgRH1bvC",
  "key20": "3P3FE8Ug2F6NFrRzgZZhNdasAGxWyAGVaGUB7iGcimvYE3dMk4Ehyh6aXkPfq6xZP1Z5mM2oZiv8JiHx6BnrQXwq",
  "key21": "5V8b3gzxJZSjYVoLZdQeZ62cR57uBMyEekguouHFBCcYk4rrDhGEHh6sy8KCLFgFcQxmaEtPa4BuewviQFFZHLjt",
  "key22": "zHyeZXU12y48gqVQz2ErWN8ytC7xpCgNz2cVgnmQ56yCHUZW5PevffVcyKd9QwhxNoSGHAGXDAosKjqJDzPBaVv",
  "key23": "SWmY5G71uUzEjXvnxZquYdxqZFE5GMKiQd6yPFTsSFQ2uLK2Wf5GZvR38NgmnAFPUSg39viGMrZpXMXWUTyykv3",
  "key24": "2pnJLcA68Cax9b2PqCFJ35ZZN9WNEJGi8qyzxRRtNYMvw35S63tEtSezvigqYXvpvNsZXihfZwbZ7cqmYaZNetXp",
  "key25": "m6feBUzrUSHkAnuTEH5q1UDDzi8QQPk4ETBo2diuDUNNWWM4XJYqESNB4zVCCipsD8u7VbkT9K4ho1gwo2UdMKk",
  "key26": "Jgr1ex7YLWMenYpQUEF3EFvR793QsJphrBEJ9EyiGWN3zGr2UtBmMUzR1bbabKhWN4L9HdYbaeM81gEBsFYHKDW",
  "key27": "36Fgocn7C4RKsiRP2fbRmHZpwW4MKJ9W6JxF3MzuLb5Mr1rG8MG2dJtWnP7Jo2ErmDANzWmJ9PzUo2RAXVK7h8GK",
  "key28": "2eSXmFnmTdYjAv3XtcyMQZgWDzeaguLfK4zhHV4nF2iMrH2TnbxrvNosTPafXR1QzsmuoLdEpJUt2e7sJiRuSBAT",
  "key29": "ZGsMhJoWzYMNcsnTdDzd17S94vEkufABA5iZ78MA37iMQPPnkDUxrz4R9w47iQqS1GkMi3Dc8LhfF6ZfR71D1u2",
  "key30": "4MsMv3vqxEM1GQ169Ae6NpXRoLkZEQ658LbN1AjcxuHxqHunPiP7ma7tTB3vHYijvCisB1qMkDP8dhJ2SnbvqHD4",
  "key31": "4vm6AfAm67J8g6bpm6WABYEPtrFpSi66NRfadZxVJXgZedwLR4XVvGbtFjq1U2PNhnhrWdqWEVqHFnZYBVSraLk8",
  "key32": "62gmAKfFUnk3gWjTHFdHqycLLCzRaFkw6H7xQAQ59hjrbdsHiWKDKFCWw988zhww7i81eRex37vLdLW1XtRCFEnC",
  "key33": "duENjMtS5YnzgB4BQ2sKAQzhgLqiBAshbCz4jjs1G4zPVtK9PKvwBbH13E62vYKztpW26id13HEVnUq93iDm8D9",
  "key34": "45ceAgDTRrLyih6Z84vyBGQEwKCrTnHJR5WvnM7f899MmHq86MqAKsRBeqX9V51KehGVfwz4Pyg9EY8byBzNRuMs",
  "key35": "5usSeNGjNWyApSmAhLBjoNERGZFw17nNydSpGhZHCnNmvRtFsKa12hH16RdcRfBFmXgoQr4pEdyYjZ6TUdNqgpFM",
  "key36": "t97uw59XSWPrACWRrQJRBAz1hExRjYsNu2F5Whg7ig1ttiSKBru4NXVqDbsbG4mKxEELnDTdWfZezCkMySkwBGP",
  "key37": "5GhUoWPdaW2vdC4BgCeVrhs5mnvvPttnc3mvMTtrZtSbxHrATLtjQ7aVgj8UX679wG1GrN6i4fzumKEZBr1jL23z",
  "key38": "9zkJguMmhztnpgk7BVdavqdwFJEA42FBAekBz8bRZRMrcUqWadQK1W6erTqLnJbDHKyBMwgECWjzDSZfyoBDEi3",
  "key39": "Py4yY33kiCh7B6x8uhMFU64cdGQXzcHUPZf7PD9C4f6kv752sV542haHfd8gPBCEtvzhxBHsH7o9ZWZ3RAreHqW",
  "key40": "4Lce5VJ4fhmoS5u3qsoAq3ccd9ceuDB4Ew3SWoX319R93v5BuJKUrxmqAkbNgs8BWx9fFTbRkNa7aVvydsbMTAkv",
  "key41": "4AbeApy3rMp4NtqWrrw5wgkS6ufSHPdDEVyPa8LVf9kEiX2fL1cxp4TwmJwq44w1nyJSVNTHBkfywUKrXQ1QipsJ",
  "key42": "2ZTzEU53HrrvMmwP3MLxyAGuYBaHNFqmSTB7VPeGHHp93o2S5gCqytv6SPVB99MR2jucsqrGQDeFSDUEtAwvLqxZ"
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

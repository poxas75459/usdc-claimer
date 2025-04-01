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
    "3ZnkLNnf6D1sZvRCRZz8AxhDTwr2GLkSgdhh8qrL1BDPPEZtTLk6372DJ5J2VgBVq8cN76tbN1VZAvKptKsarq48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dEDSow86woKJ52EPetESuQzU4ZnTR3mf3RuTGb4Y5MD2UEphmkzq8ZqVync29ouXgHyNs7xAGNtR3T4TrQqt7nT",
  "key1": "pYDXauhboJunUEPAEemPG7JM9Yw8ipnQVFB2c3BYpBnC7fcAwDMH76uqtP2JFxaNwy1XfJCup88zgCs19nAzTkx",
  "key2": "2Gaknwz4k1rGViCXFY5xn46gqSrNVokaXAPqRZaCUDbZfuG8y7WpJdL15r4EZGxBtHJ2U3pv4hXCQDpeEd7kYu3M",
  "key3": "XDEPPrXmT3tH8u2GiXQJ88pxjbBg6AzubSXNPeKgpwtt3goEtruZeHtNBo5htxsTL6ZC8Q8b73WbdxDaGQrrYpv",
  "key4": "65QzwToQvgswqEatNQkJQaVZ3y86wE24VRRAPNZHTS4tiAmx1Xg1hXGU1bkze6XzDdiEbpVsoaX5HLfFET1TrZzK",
  "key5": "4vtBVWmMKbhxea4D6KqVcLEiNfg4MtGtk6mYJeU1Um153knxzYURbmPqzRcUd9f5tRv8swFvmEdrAkB616FSVwC6",
  "key6": "5qSYoW5whRvJL2SwEaePxCjANQXdhd6QRv5sALbSeUJyFUDKXyXXKPqxcCCZeYCzdbMjqabuUUPMgyk9eW1ypFhG",
  "key7": "3ktFktwKetRqkEFg1U8Qi8Aw2ZhrkXnuZS2xKr1yTRZ9rrRBx8v9djJyWfUwgnSECu6iwqHPNdUBEGovuRYZTwwS",
  "key8": "4xnL4LFs1CpZbj6vafxZyfgnqEAD4hcpY3vQf3jpxqJkVPp7cUCDw5ZmQyxDhqaZ1MjtzLC9Cr7mZLYaSgk6E77c",
  "key9": "3TmYvWsoa15W9izWSNJhczZ99QL42F6Y1kjFf8qE2t2RjTfQnMrQ5uCyCEA37A3eeEUGwvDYmpoCuXpHy7sZtFMn",
  "key10": "2SqgbmessnDMSYS6YpEHKSojesQm34PnQpKMK34S4CjDdz4uhhgSJdR77tHMAN2mYD5UebeXgBSYQHEVUpj6pcon",
  "key11": "3ipmo7BKuQBBPtkkCHELHm9XFtpaAjC3JTWh6yizqcnotxtdJKURaujcP2VSvc9ikNXHCFKT56vAYet5MyT2SysB",
  "key12": "62oB48utwEGXbKSCQ9cGsPfRM2qonceN1jxsABCEWmvgi3Kg78gpLuamdbYakX6BkzTLSqBRwCqzkpP1i7bFUEQ2",
  "key13": "5ZYAgj1iSnpYf2AGnRRRcZtNjk6yvpdR9PEABouVdJmB9HpPZ2H6YLk68mbbr93VJwpeDmUoT1CwXsgdbQ12gmbi",
  "key14": "tae4FHnt9AhYqkLqF9wKqqCuo4DdCju5jCqffPRbfUUGwegHTaCjJfFSHq4fDh9fqQSaw1hkFku7dmmivqNdHpD",
  "key15": "4yLS3Wt4NDQyb8yMwEYNfhrXDamNNggqdNd5eFsGVJfkYKxazT4ad93Tn3bcSi7ugJrGqE3D1d2zKvHWUg7RYmyu",
  "key16": "jTRwWW51EmEgrjTGGZT36p3azS1pRtL2sq9WcvmnoSadiiaSAieAQsLeW2oKrN6Vv7h6MLYUBF7Yoe6KMGVVhpS",
  "key17": "4nM7UE6sr49RiPm7igxxnApgLjU9Loy4BZEHyx6huaj726a7cFo1VCp1GAysHhSUpEBpea8ZMAtRLjvSpaZhwiDG",
  "key18": "2przKVNx6TgVTXeghMhTcD2i583rN9jxrYEQvfDn2LoZ8iVev4WGPJtAGeZnbSxocrBcRMicNsxZKucupG7ruftU",
  "key19": "2xZrfwD2jSizE2v7sk6PE6oyVNFmJR4GtxKmnf9F8YMEy1MQZCrA3JZtdnGow3W8Nv2uxytbQWLcTAi8E5LdDArE",
  "key20": "3UNJWFsD8CukSoPbCw4tq9UmVYVDXrvT3eREuj4aPgqyNG72iiCzJRKThbvAF8gtDTSbwJstzpJHoUigyD2fzA6S",
  "key21": "3tTcAMQKbeX3rDRkyH3NFQpu2MEDJBPfuLFsASj5pLS5h5PkKhst8JSSi5ZWdfQSCwBGpWSFCA8F6iYXz5rxejLD",
  "key22": "2ZaMHEgJmuX2fpQJbWrCCXkLqXP2EZEpbHvAbHHj7usVDSLxNtkYDL8FUUQsRkymSTUPX6rnLyRV9nxcVD67o6kV",
  "key23": "o9vt1oHGjiC1JekaVZKmW96p3zcx9QcX9fxAaF44pfQpKTA7yF6FZY8TfBsvamg3NXux9ABv7trfbaEzHQq12fL",
  "key24": "ZTJLgqAzm5Gih7Bcabg1ybUGwvXDR8KbrWaE6wvhcbXkFr3Vh6FEQtrYpro1BNVaYSmUYuXcQgcBLB3KTf5uPo2",
  "key25": "5k2g6t5iEXAi5h3PACp9c6V5J9RNpCo15aPq5CzduM2KKdenuQpijofz7JFBMHJRTZ7S8sfVbNk7CQ4Rh89D8mME",
  "key26": "3J8UWeV28JnMqk9xHiqi8DmcmrZXMLmenNWB54fXYbawaLX2j2gA8esiKVdYxMwbLR9eN6YefdzSR6stwwe5x1GK",
  "key27": "5AHfW2ov87TA5eXMERUdocKYbLisk7EwkXHRYGrLyAeZTqf2mY1KGLZZNTwc3aXFqQcrrRD5usTK1dyzfhFxyU1q",
  "key28": "318aefNmGqBG9zf9T9u5Hf7K25ii8doMYDsiA7DdMB2LtGApUkFoar9eJfGBYXnrv87zj1hAMp2UxMmZr8fkJWVB",
  "key29": "3EskWJNuykY32uVSDD8wAKXfbEM2zJ344Dc9uzs2GVmmEuuj4M7SiZEJt1T6sPzCWvNrh9N7PQCdyLAAeVYekkM9",
  "key30": "5nLK5VFehVfKxa41QELStNM5UXUxc3w4qU9RNfEPGKiyvxZR9rrBBb3M7CY6f8L1M1hM5kgazLdNzdj6QPwZFYBA",
  "key31": "3XeyWCTGczjS2p9bKaGKxKua1F4sFEf9qyeRjNg2KDAawwwVPE8jz7bm7wGMr6dBEKzbeAiArWiCoGwowykZxryU",
  "key32": "57cmUzVjbz95w87t2fTtravqZUsy8Y3cKSJRvuiLvg3ezKac9H131J2u7Qj38PhwmoSHXg8joqpRJpmVMPJwq8Rj",
  "key33": "Pt5QwTVzb6JcYQ4kdcowM97rT6cTb43qocskUUx7hXSicAEFbiyB35tP1yUysEhEA1DqM8QYzSXb6KQedeXeiWR",
  "key34": "yJnC6Xbf5aV93VyhBuSYyFT3MGR3th2UJinALvvpquAEswtBCnLtmXYmhznduZrNNX4e1V1pkhkXJNpYQKd54Se",
  "key35": "3ttEaHn3fHLSK9bih9ZMuQBcuzt6eegPxSovfHSuUweqZj4xfhr1kMdwD5ny9xkeHMYcjFP9FXSPMW3f6ypiW4Fg",
  "key36": "4dukR5LvvH19ZYoQAZwrScACfdvhJQhRL2NmFdyAfQHgdZHPsLSZiuzqpceB7xxLM9F4cufS6N5AxR4eGKZnWY5w",
  "key37": "2AuQvemGxBvfSkv7A7xErpxKuWnf6SwJnZga1kQjC4N1k88avTQHcmZyGnkvtUm6zWVw5LQysd9XY14aRwascGXs",
  "key38": "2SeXfxhhiUXpPZXgtVEu9mQQPS4HSqUAT3r4tkLUyCSxVoDiWBHrZ2EsECch9TJuBBBroHKtw62CTkq12Nsv8c6s",
  "key39": "4ZxugNq3f7BXJxmnDi5YhghPi3UWpwRnuAYpZYDE9xmnPeL1zok22zJaVJ4tQ7khmqp2BhxeXEvwQA32TwFzkV7E",
  "key40": "2Vdg2dUEsxn4Zryi2Qk5df8qVaX2TCcfDkL7eKxeKV5fUtwmxFFRfZDC8wRuh1QM3BQ4ArZWyPVPagXCpRQHJDiU",
  "key41": "2DVnaiBsoZiQMqPyCG5B4V3RwphfaFH5ejugDr2CDz1RwfoqRrUt9dr2BNFbGYBbQgbbCc1ZzdHhmnesaaiFtep8",
  "key42": "4nt52Zy7BZGqt6e88QgtkrzaA5QeBbVNrDSHqCDdGGsEdTYXC4XAozhA1C4HD7xBxr8YRfzdhNrHPRTa9FdUS61C",
  "key43": "2xHfztPiSS5pPXXFLpq5oPGMq6K11TDbGBAmeT9ZJBQd8JK6nZ8phgCsPiTwi6hU2xNEp5bdzhM2SbTor3aqUcbc",
  "key44": "JXUQg88ZLaKKhwEbepaVXS8Mrjy99QHhVc2LYQNMJpHEoqB6ZdkQiG6zQGBb4PKXvrDEvGSsC4XjjhWo3V9EyT5",
  "key45": "6yiwsBVTY88SfPEaP998WJjhjx3jzN6QmzTrGKy8KXDGQTuRmf1EmwJrt6y7Fiu17J9yEsBAkR6Uu7onRRQEtuF",
  "key46": "y1EGg1ogAaL6YXuYwrSzgJGSeLXbnwj7uKEjFXXnEy3QvseCb7JKmuBm95gww8FCt3UVCpHocFJvriEK7S71iYp"
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

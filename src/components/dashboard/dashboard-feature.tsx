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
    "5LL8JMToQt4AybYwGotajYDy5MEmtvxZLWYbFU9uDxb59f66UGFxmRDKJLDfq5qhkw4UTYVHN22GpWYFmD1DRsJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KuVQK3zwuBaPPQVkTtj78EkdWTMJD7tVTAP5WvJahfLdLQikdT5MbdeRv8jcookfg9DsCDJLgx39hcEtTpWBuvV",
  "key1": "4Nwoz7CToj5Wp7iyunSPFKJeFHyFshBzaFBg8a6Dx5RAxE27XTYFGhMJLAYn5Pscq76KYnAmLFaJsxraDnQonS89",
  "key2": "4cWnY2TgnUEaMBTW49TamBbXXh5VKkudHNyvaoTP4NZMyGjYAFiu96hbpWS3aHDUUbb21qZKHG5kAevcSQEux6Xz",
  "key3": "2WmBov26HAitg6DLMLfVAei3NZVTRBU6x9aHbEa5crM28V3ai1y67383ZyX87NC6PVsmDR8AmcDTA6X7oJZPS1Hi",
  "key4": "4dVC5yybkdfjuBdmWbWfXEyqgtqukpnQ3xZ7Wdixc9hwLeKHYqEcRwcJ1L5t2NpvwrWL1YQavgxpbPt9nJbk2ayJ",
  "key5": "56sNQHDP4Koir7QMegAEC4UmSkcPscAkyJwP28fVSEM1FtJNSMsJTqAm5zuUZ7gS3GbJGYjfjSkKNEpaxGW36vWV",
  "key6": "3RAAYTyCkChESeA8nLQwpBq37SkfmF1EYDKGr9DUPwSGZXXo8D5qmX6FJMYSCWjj6emiS1SuBH8fQS8zZYUFCySk",
  "key7": "3Ztfcj8k1BL6c9N9WQzJxgX9KjwVhU7p6YQvGYc9mKcAtPXhietQM6EX41yq2yaGb7yBhseWe1fS2pvZpeD4vWzp",
  "key8": "5YkZUvJgzaQPeC7r36pttriUgZMLw2TymKoTxVdjePP2NKFyXyRMVYwAaW1X6ggd7e2cAH7espKNnSw7hFCemS8n",
  "key9": "2SW4GWKAoySWMXD9CYU9hCbew3cyWxDmfLqu3y2zdFiuxkMnDZJgjGm9V3EUzVXbGsNEgLDXuQFuqFArTPAZcAup",
  "key10": "67RyYj36ZUqKrQ7MkAymuXBWxHbRxMX3uitFcZX1SrfDXRX7fe4fhGjDxcg5UjKj1ouRniLhSFyStse35WTVqzSM",
  "key11": "49Q4Fp3T8AXHXwNqcEZxbGwmEaL5F5f16KDFxJEhqftay1d8wbJkB8z8gZKB1PQsBtXsRgs2NYXZg7Atcsrm4mhA",
  "key12": "53W25fNRx1xmji46u2B25bHLYubqrSkhfB4f5GTmXdXzCqUXoTZX45YfVULhZjARN9SFGawKM4mvXb9jeZz4kK94",
  "key13": "3HFKqVS8yWCJXByhJ6Ni1U9EPZxvT6a4hPTJYpAYthXh5Srg41xtB19k35mQqYUBxEJgE4aHxBZnaAxy5f2wLEVk",
  "key14": "67bbmAsMEjYVeFzJKCiTrZiQvB5JXavsYU3PGM6nwPDR9xu91JQy3TkVYwSiUp6rT3itbQPUZdnTW334LvRcr7HL",
  "key15": "RJ1q6xDAytyy6bP46bZ9GKPWBdYtY5yNUzsYZV3QmKT7mLEdwQkbhuBcyPy9zH2drNusog347MQPAVEgrUvsrLE",
  "key16": "3svho6zdSG8Ds9pDMz4nFSWmkWbACpt9B3wwK8dMmafr189HmkND7N4z2dkEEncqsSbbDg1erJZffS4Qj8F8o4du",
  "key17": "5nDN7vgjr1BtBNLQP5aEPFJhEyuLn31ZsmLrvNMp4L3ipBej3vgsrZ8iAYvUJcdNvMiQPYfFpEDNb6xnj9GbBzML",
  "key18": "3sq4rCznS4WWdYDQdXNejbBgVeyaniikqHj6MkV43e4oFQ4UZEnvNSDmVZRMd5LznVSmtkDohEgMmJyJYvSvMhgr",
  "key19": "kPgcGNV3YnddYFpQ473poSRTEPEqugNVhxvFjT2VTTPDxA1VwzDwqzKnZTuNat6haPvZbqgz7GuV96DnXN7V6TM",
  "key20": "5vM2LuUYoXaVv1qzcR1Xt8CH5FD8EpXQBfNVq1wQFti6NVtJRo7ZNJPs5rGGBbJXssMeYFVcZb7aDxwiPTqbUFrW",
  "key21": "2oTAFe6335TyJCCa4CDDuKWu8YF79tD4S5tD6x5PSAAZwAbFWdFwJ4qrL5w3oAdp2ZdStur8SV2PGoziDUbueaK2",
  "key22": "R5n1Th6RhPSUDWgRFHXinWbwSDbkSQnUKk1qEsuSmfDuoES4aKn7QQ73fFw1B1H4gVJAVb2NGu9Lbt95fkiJWH6",
  "key23": "mMzW1kBGp7H2FfSb2MnmKYU5LmRMpYy2vDYNohvEcRFCia6Eo1wFApAmxVuhVdftKpQWXQFfXjzMRqV1XtmZNNx",
  "key24": "5jr2prK7nhDxiYK7U8ZqM97peQ8HkrnK8uBQeV42quMnHN2tiynmKDnAtTdPLboZUrXfCQmysdVrZPoqjWFiZ7hC",
  "key25": "XQRhm56keqdq7sw5XyBprxH787UW3CYtPEreqBqkhEMvBUnvtyZNwVxYVdEgmMf5LvogvYrXB1HivYuysH24XNy",
  "key26": "4D6HDbzy1yeLvYi4376mTBCyfmfypE6Q78L4KgTpgYMSVu4DfDifzji4kzwKFFf251tu6GEZeEXLiAsWNyH7uQCh",
  "key27": "4n31yFL15Pohb4j4ib7DfZHA2jHwT3mXsD8jMJYBUL8bzDaH31W62UeLqhCGUgebiyZDF69BhUJcVYujZqvETb3A",
  "key28": "2jEzm4HJqteNt41cjbaQtDJwBoKL7hGVpDSsHSaeDsjbHuZPQu69RzvedmQHZ7kuPsWQuHEWF7rGfTHdQo8o5cny",
  "key29": "3B7wAY8aftfbP8xqLonDZor1nKsUsKu16ngD1hPvUAz4hieK9jzCXwaRdasnehVgbdWwpNnBRhTfh698LjJnZQhm",
  "key30": "3tujuSt2zKMiBAeRiZBbJKD77XHm6LQ4pdaire23MQAGb9PQx4JFGowVqLRnahrxyEr9eshugafUbKJHExwGBRa6",
  "key31": "5qss9GCsH9Y47xh4pK6TBySZiJPrZDr1grmPXc1wqvixJQcTBGTpSoMbJ1nFpnw1qxc3re7P55YhJSz2NDkXUKT1",
  "key32": "256pgRKeUqLPhW4EvPcCKRPxkXKB5bSxBpJ4NXZBMEqfAhhZjFhheYgZMHjPYSgahszUo6conyEUnrT2Qc4B3dvP",
  "key33": "Tk7LzDqycT9yT3UaBuUGUMTS1qB5k6UttD3BBFLZJ1CiQ2nWuaC9pmNQgAWPeXak8PUGr8qt9NvMCUYN2UmFSDf",
  "key34": "5rgSJ9mjuGUW46s6AN9VkpZAWwjKtAazvp5pu3puneBnGSLv7umZA1VeCsGMAbwPHGF7fmryngPMSZWtLHSrncns",
  "key35": "242LQi4S54pVkazpzV3WHMSbYmTqmpKKyxsmzF4V5Qsw9C5pib8HEFw9DiBXTsBTK38hBKuHVyZnZhLvPEXuFqaH",
  "key36": "65cVpkMyna87UZXKyQNc2rhXm25YRnfXS3na7NhinrbQuxcxE12tX4eE26AFYUNheXDVb6GkbPQkmQo5LCvQirmQ",
  "key37": "3J2kYhJSWWgpPVWoPVaMfJaPtchF9AGMkRKyaAWkBgDoiUitUvfiX8iXtExm8uRjDuJwpUWZMnhY5oV1YymJVbWM",
  "key38": "3hMwTZSUMJnYFR6TuQRwiF6Qhifevbk9gXMoKgfXvohQFhojNWRkYcQ6PgyN9bVGJbeNSqaxvqFog1wanZqf1GYz",
  "key39": "3VRYWnVKAwt9zi8zW36FeJenoZMkAd6gtrCHotQK7aZiXxc9f6mx4h2Tr81hR5nTiFm2CRDG2hpafvfB14m4Dns4",
  "key40": "3XfEKfbxsA4BC65cp9QsRHbryYvgcFojbRqQk5KB2ofguxfaA7QH3msSq1G2pNd3ReXxbWwxsx5gTaSpT1ufGG2j",
  "key41": "4zUiRPHoMekW4XkdV5yys1oh7UaLwrBbSKFohiQ3u98G4rvHNgRDvuWWzvVeJCmgnuhCUq26RaNkYUxSnLBUdiJT",
  "key42": "3cdnWhYhCyQX19hQuXHtrPR7uhHxHUqW4QcCVHUMN7MegM1bpnH3vNZvLgGj1JfAzWp1AU6x8T1cLdQh1HSdUkMP"
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

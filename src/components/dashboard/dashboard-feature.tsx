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
    "nmuZbRxBDT8xex3pa5irui8qRU86qNLfSzz81yoV3197vPMjiAqMxJ9x6EbqyW1ZyeFHhXHU4nK8zDYxjxWoKbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFLStnM89Y2AxBzrfbMciQW1MV4A3QbRNbunsoL1WkxbrPJV6JhrcAcSY8zD7Fnh78WRQBib3HpMX8Q1rUf8w2T",
  "key1": "5G4QbKqGhgaTVuNiM8BLhh3RZrUDEm9V4vTQ34R2LRs3r2mxc248y9GWUVbRERH2w8snb8xQ218Hw7417NREtm1X",
  "key2": "2ocGesktnxSVoN2qMZvU5phFithrvq3XcGw2yyxzwt6eVN5nSFHGdr4N5VzTWjydGM2VwwsUEH3KJSnM19eGcXWj",
  "key3": "4DdToSxX3GgrXd9Kg38Eu4oEFDNevgzZrxwnfQRXSTSy8WKGwK5NcaLUok1PPp2Z6RLAR8qiWy99tKketGLd2zmA",
  "key4": "4tUXdr8PMk17pHRRVrb1MKVmvTsAZgynkAkbDoUrpont4aErtHYToRdDirRADktHKJjDJ7TEUKppxr7dAhwzrpXg",
  "key5": "3bUbqXv3af3u8Z33Xo9m8kom5n7sWXWBdNfcKsxSzQBnEsKUXoUF4rrD1hS9BcZbXVaUqkTHzBJ67pRzL2d9xbWG",
  "key6": "5JsXHu3TXaj9pTPAe9JBp2zgk5Uaj68PyMdNwMdxpX2WCzkn5FmxgsNUKLDPaRajv1N8mMr6atoW7t5xJtm1b3GB",
  "key7": "2f3W777BeQFMbuwEGBquz6gJWiZoM1dzMD7nchqWthue4iq2SYmvoeRwoxnpzBsH7NnWXDPNP5TFvKPfQ9VoYAwn",
  "key8": "67bvVfFk3KVHznCwhNoJtufs5YJfCjrur7BJ1bNVQbiUasLd8QYtehpA2djHAfoYYctmzz6PruDWLzQKLZcDoWVd",
  "key9": "3drxE1ukspi5JtNQXFAiyA5ShD3Md4TNBnTDwZPpzj8u2UJz2Vi5GoF53QrWn4wQbELvfVvNjQohcWvZ1RWHqanR",
  "key10": "5fQVBLVVg9R8cDpm894tSjpfS3hjcKGiWBsSU5QUrYSYwTTw7kTe8bZgT95CWCwtEgSE9j17im3z5p5wFR4KCbKa",
  "key11": "4RfEw7feCXdZSxmFk9FChLsA8uBjRiotikGhYbJT4gLVqtpJpBiSXqH7AXwZx8oDrGyhQet2eRpqdix21ryjJfVx",
  "key12": "4YKqbZb38v5JnyDNDCHbCnSzk6FG3LpRwMEEUuS13xxr59hexRXug9ahWr7F3DBjU1FDAzYhP71vMS2uEYyDdnUW",
  "key13": "5mn5ZS5DENA3o6iJKbAuLshiFmWc2vvcZL4qpkHEgDXoAtj7oTrsSqodXuTV5Zqnwq6WMR3RfPXDTdejuhWuXAH6",
  "key14": "kLgvPHxpFcfsAfyPXZMiQRcnXwfckV1VL2dWsT5Evb4VXwPk1rye71QYPLfXw2ccU3oQy4SKzEqQiuofBcNTH3e",
  "key15": "2oftnoBJ2FAzyKLEXA66FSpahQJ6cgcVnmoSx5cUhy9EXPKj5jpB512sumYFqJg7GKtfiSFNipUSLRctyhMPx9hC",
  "key16": "3vk2hLVp56J2NYJqSyox3hB7bd8oaZLdcQ3V3CS3QncEuzWpeCyFJdQUVGAUE87NdRrVS5eGNbLP8vfJXvkEtYLi",
  "key17": "5RAoGzJgAHehC8sb3dAfad3jK5S7Th1xLgwS42MciGGYHhRMDXqsg3btkwLZV2ECZo5HCYhwuPrtKEhm6mAqywMa",
  "key18": "4GMMYqe1o5iNxCaEuiqvGMoJTmSrPnWPKKjiHJJ21cM4kcSxongV7wPUMAVGzGUUrTfQRyXB77H4rSC7s33qwJB4",
  "key19": "22nbfHw1kXfud6UwxdCQyaRpxkF4CGkD7ZteHjKTqxSPQ6N6kyKTCy6XD3cNnGou3W8e6xEV4VbcrpWZN1XZfuuD",
  "key20": "3fk4ESgTrJ8AJ1J8h7YzgzcQ3kJGaZCc9EEMM9qJCXgACNZWSb1epcEKh8ZDKZXJ9eyfH2aHcFehvynCqPxevCoB",
  "key21": "3fgvjMWfUs8ngxj41BsZFzXpLhX7ucfgNWwE8jW1XWXYLRJH6uvu4BRxQ1AH2HYUYtSo77gFyoa9ouVQgWbKrWHk",
  "key22": "35aNg4ndfLu6i9fAbnp8JTTs4otRPbyz3LM2AYSLHcp4xubHVsANEUuH1P7UkAyNoifqV2M37EzwJgBWJEvCHzJw",
  "key23": "4u1YCPQNRw3wu33XdP9ofoh8bfXNJRjMNsYbpDDD8FaZjwAumdUebkfEa9Xs8h3vckhVqwx6v8KUUNh5rpwcQQro",
  "key24": "3TBrj53iPQAh8fgVRndt7P4dxxrumxQ3V1cdHcBpcK35TQEC6PgjkXzY2tqGKFzLZub1FFdNEQAcSVtvJr1mcVRM",
  "key25": "4bqi3BnBVtcnhbL9JGPRB6KtSLje9rDzTH8CTjvinbMsWiLJjfDJNrmYt1wgtuNz8kc4CJQ8mskmnRL81tNSDMbC",
  "key26": "BmDxpTM7Vdx1R3dHfWbVUJfzSzi1jGbkmHsQYCUFD7a3rjMSSvMoNXSdmBa1JSzjja16utRtGBXj4JeR5sMSkpP",
  "key27": "SYkwaptTucEpxs3i2k33jdnzac26TTzZTdNaDAi4YFpADaQuupDFPABnEkA2dmmtkkyZeCA85uNSwxEXWUYpY3B",
  "key28": "5BgWMKWqUsHLfg1CBhwXnyjgjXesLFzqZXWprz4h4BP6aW5DLeSxpkmEnW1Rn2zYSrwhwCy5ngifjEFMS9KFrDhw",
  "key29": "5V1ccG2754sMuPV7JcMiN1vsGr1pih5anf36eafn3W3CK4dioGjz18dpdmVbxQRafMdxo2r8hBbFT53WAbgV46ZZ",
  "key30": "5QvwhWyLE83BioDU8tEwcu1SeQ8sc4GDF7xAZjL1ie9xfCsnFg9Uf328jNMn8hv1MDHXE3hRHY4EGYBbvEYmd1gL",
  "key31": "2W5KqPZigRWTMQCH6WctiuFmUF2BCcnSkDUrhvXinEcVBQyz4QAsnR1kFm9AUsjpktGaibq84JHSeuVQK5A65RAr",
  "key32": "32xT6SCSdySfvhyMyvJ1DV5kbMm9GyB2b1sgoNJibd4jQRtuQCUXLDmRVhUiwQmjUx1irM7Q76fvLBP5FFvftRmQ",
  "key33": "4Jk3PkSPSy9AkFJcWfkTwJapPkhzzr62reSj21dvMdUZVN1QfwSMdLibFFZCDxJpnAWyZ1T7BJUGYVerpW9Jm3CU",
  "key34": "5QsAr6XBJRg4mGqg3FFtFrDhvVNnZtzwd3Z1nChYVViepVRf21MMm3BvmCZR2583mMUpB5qLHvktZJ7Jv1MngMNE",
  "key35": "dJt9b8Xh6bDnrfyvpYK5NoaupaA1zV9gV9gL5e6VKQB6sRJLEfoeih6TDkWqJJF6fScP3zFL7y2cB6A1iAopyuG",
  "key36": "23VG5Z2kF6c4kQuuncs7khVwgWGhDXUqERbPh8bgH675Z1H5cSPfzs3HVVDeH8PxmR54HXKqmM27r596hpW8cjBn",
  "key37": "5CVBPN6W5qZ3aq1jamHEfBjm7YpqjgygmPZbkmg8hqJUiPNLYkr4aCiTjv32kM3efhwcFxD2GJw64bfGoPBUUGV2",
  "key38": "5LgzfqKP4xHGuaVdgucVKDh43jYKfhqhZJn1UjGvg1zxSMcSrQWdfEiEtUbbQNsCNe5gp3nurxjzxzG7MJe37CFC",
  "key39": "4GvWhSTomDkanfzEGsErVc2P79Qb79ojQYgRrpCmB4VSk3toop9FYrdnHXvRXnqxnchTV9XSLnitUXVEVWXW9GFA",
  "key40": "2L5riiJaLNRhnchPEHqhohyPYPCM9a1e3quPMiaqm4cbexjCCeuz5aM6jH6fsDwxZoKAeyX6pixEqbqHjCrniXKV",
  "key41": "3GkPRXGiWnPjMBXEmqG2Wst2KHpiaP3exCqJt4JdA3Eh9yfRo8hDxetaVZsA4MyvX4KfxofhnUFbAKiee6dH1t3w",
  "key42": "23VZJpNCpZDGqV45w8KbG7EoADep7kXg1BGJgirtYDBapYszXyqXafFTExAvACf9fyUhzvCY3gwwVCfLywq41wsZ",
  "key43": "3ejtKDDWNNCcPzPYX11Q7gzuBd5NzDmfnFfQnxrqC6SgvX6atrJWnTJMQD3wiWPcqKVpPVVZvC4vhuCny59iZupR",
  "key44": "3vHiU4qZTW4RofSdKaLTme1v9ExzvMoqh7HffWpjL4uBg41ca1iaAoFi85ZC5cLJLiFmLHWhPa5xaj8DAg9CHG8Z"
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

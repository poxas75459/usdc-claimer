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
    "2xn1AL14uJbNHdYK6kRWspn7SqpYSEnAA7vwNMc8aneF3PT5MQJmMnX7p1o82GaVRd6xf6wzUzimJaQ5UEHNgrib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jaTJczzbqP89xYJwB1aRKk9iWFPdkCUV8rYPac3zbWoYCFT5TptgLJC5x3oG4HmVV8UCLbjuboF4ALrtz1GuRwM",
  "key1": "4gAnBwmtuwfGDMWHp8WTZy1gPUKogznvf77L8PdCh9JUjcuhYnJs7iRy6c3s7yqMTv1ukwaQ5kLXSzr76VVhfi7A",
  "key2": "4GNds5Tu1gKUH1Dic6NXZboTKMR7KrNJCvJD6KMz1W6AadSE81BKrUZWx2ZZm4bL6vd9QqbtcESf3j3EtXhqrSHV",
  "key3": "3Ff5JJkPv1BN3ae8YeuF1sdX7KY3pVtV3zuetMqvwjTp11XH7ry2sJGPxKbSSYuhLpG2KPLgkBariz82Wv5eixdS",
  "key4": "4NQCVdsvpoxmCn6HXv3K21AYWmj2GjwaToZZ76AHjiCEn5uD1UM1ZHyRJzk2iD3JYuPJ3KUhnRhrfA912PgUZ31H",
  "key5": "9GbRKhtKDecKVy3keWEptaJdtCbfmEhAUwYpDCczWmUL52StZLsKzeV3hPeNMGMzUswKsXxGsk8cW7NPpMzVaUj",
  "key6": "2PeTftwBYjzs51q8VAB8Kbq87LBre16wSVmjWEdjULWCAhAaZc1WfJnnknQ5952eDY69mGpDexjDY9Lfvvhk2HRa",
  "key7": "2Wg6ekvhooZJhXc6pLfB8rAnwPJwfUCrZ5UcQEexeiGrPjeFJmfQG8GVJJ3SQXeqNLGtKJ9MNDfqfLZP72q9GbHq",
  "key8": "ax6kBWgd7KRxGcjpJZ9hBYk7cGHPKxPZPKpfrnkdDQbAyUkryPvATgEPZUuXgaptQnYfFaD6Q8MPR8wmts2Pv9u",
  "key9": "48BuRPhvRhhszUz5spexoihLFhBqSM6X3a8mitWJamTHQKVEMFEYdRHoptpzGp2pQQQjPnEHzyTsHtJJfGxY8AiD",
  "key10": "5tEBE5w5XxydGXmDrcj8YgMnFBEJNE5cNG1uUTLShPLXt24kA69bbu7SrUv1FCxLKCSbHUh1SJ4Y42eB2YACgiQz",
  "key11": "4HRzPFNiyGNYGrn3yKHxiCzD35CDu1xFMLYeNm2P5ZaxVN1p6LCEn4UrNdNWVEZGVLGvRhkc3EhcTUiY3Hp5Mv1E",
  "key12": "Bgz81UiYf41J4dJwXnsTehPJnkgH6FT42iEQDvwK87of621DU1DRcMRFfgVyBHw636q4PMjHRnyCqD7mkEuF3gj",
  "key13": "5Psu9CSdThaMpBrHRpwDtCYigwhGp4XucpVpfUm2hMP5D7RUvPoXF6cA1u4d1t3ji126X4zS4JQttKhLLhoohiQu",
  "key14": "2T8cS3AE6txrSBcSvAaHJgHajp4M5HWmemnChEqjg5QGbkpaLwcSNb3jYg44qTtbnVjNGwdmGqDyLd2TEJFQU5UG",
  "key15": "2khLdDpZ6CYeSCczvQRQvwgAUu1VL556puUQgBNoJfymVcdKJgVnmQDvR6YF7GecyevaoMyWFkPWHw6xDQHkvaNZ",
  "key16": "2JRifm8PpMExRbxN6nSLLaZ9oeW5kx863JVFGH4nWF7XtFdMXDDR2e3msW4uZps6Gp8jMqaNMH97b7Fdh6pXT5LL",
  "key17": "49AnnkqvsZtVhermgGeKit283cz3qDaC5pGpVea7ndTczYcTSYuvCxPFMv5qWSouPUmmy5LJAccusShe59nMuXGy",
  "key18": "3Mck4TXApScYqmXDfpWyCb3s99FgCbBpBciS6M9WTWoXzBV2EoXne66DJqrJx9RVDcfNMtR2fALB5Zqzi5rj88p7",
  "key19": "49hBdAsXodxB6cTudGQCp8Ya1LyPgDxyQjGK84WAW4rpX9s5VkYyLE563NdAovbbANHbDHarCArApdENDPsvS2Uy",
  "key20": "3Gw4wV3AA2jCUonCduhZopwNyGH4GmAQXqDjhHQaaLiHP3j4JzxNENzadh6BqLD2g8DjNLj3zRsSHrEWN2joq8eX",
  "key21": "NutwZeRGJrYLQsJY8VCqB6SFEuy7fa8ncDwuCTqtGVkySp7gsKDZLdohUEMUBUCu3E9CViNMVSrjFoTrjPHrsD5",
  "key22": "3uqPgdQCUFifi5dwxtTe47uyMZbhuUgXxRU8PbEmaEmvioGA41QTgRMgqJ9r79eyuA51xKgNdhTP1qqkwzMnics1",
  "key23": "4T62QpbVENRXuPZPKK5zjX43B11NZDjozfgs81RtRCoSr6VMb5w69symggThEwHkWshC6ti6bQFnff5pNASyzFrQ",
  "key24": "5XMAptm3qyH61f5KrBT7uGgQZaenh74YittzZZ2NSzPPYJiyKtqU9kmzzasS8j8VgSW1XsJhpkBcatvYN5DHdEU3",
  "key25": "5LGfXJp6f2ioDqGuopyxWDzWAr7LiR5F7nH9xEhzQTo9JkT8JKzJQVZ2zuv4QxLUHDAxKUUk5WKEFuAKJtMjsst8",
  "key26": "4Sa7K3Co5TFHrmd9GgVszyJd3p6wipyQrjERcU4bSZEwVz9EisSESgrNj6QEBZnqJxMvorNGFr4wQGKRkgbFZgek",
  "key27": "5Y23pLNq4WpmVvKRwv37kBiV1gjWBPVJfWrieGHjXnXmQ6yDEyaXV3DsJVyDoeLwgfC8KyDueYA27GPvueyeAsVy",
  "key28": "3zu1skV1F6nMdBrS8U2DUAX1EvEf2rhMnKZeuhgKtcParadsCe2KR3ozNCWjHFR9GRN3HVCpUg4Jx96bDdZkTafG",
  "key29": "4bAdAWJA88Pgjekv967eMsFk7ssYYSRswhBCTcBKJ7VR3NKmrUC3ViqhZp3qFMSMojtRhEXXz25HGsueYx5CwDYF",
  "key30": "5hcbL9UCt7YuJ1PxiFaUNgmn5wQZDwrfoJyYygGp1gsrXo5fFKSSCVdD5dkbrMY3aFFFdn9xHqbqomv8ehKscf9i",
  "key31": "625psWBW22Wh9rbjQEtxwGyQh2eMrFwb9mbfBKNunhkD3t4SZYj1oDaexPZN1SJcEqKzTSJ713un6A7WRJxigfjf",
  "key32": "42f4kWXBXFj6NiMDcZknTuKDmHqgXviJc9gu4sgJdPrA1EvXkqbRDi4sRtoRk9Sihj7cT1Ki4ef6nxzatXSXowvD",
  "key33": "2Cz6tTkbVDNv9eoXMxfQMjjHMPKZ7WiEJxhWML7JNLHNRrtVg9aktPHjeEWtDUDt913ZptskTAFKn347wUixtvAH",
  "key34": "ycn5uJCuJspQkWax4quqse3eo6g4wmzoFFwMXMDbwvMCLhLM3XKkPtPLPYXq8fKZVJPG4vGS2TyGT5cmgmyYRka",
  "key35": "32YFwWHdsvYBnJebYjWzv2fnsg8zjpLLUjJAk4cvTmADsnMkWu2sS8D87WKNKv2trCRnjsCrg3nJ3oDxQqJ7MNN3",
  "key36": "22g9oB13w7nLqPrMsfeLEy8hFLmXCraDespHMZMkbmg2LDVtjo9h1KMdbc1TTdvse4LwAodUqEXWQtyYfLq1qF6d",
  "key37": "4tDGVmKgUT4PkWTWW6bzPg1YxkFdMTP1L4jyL2hXGTxDqD7wtkPRm8bYXiXSWtgsr7VYADDqN9jWoirvi9soEXdh",
  "key38": "52wFY4LFnCaUu8jq6PxxcCwXf8cv5quVgEe77ZUttfuXdA4dax486sq4twPXthxoToMp6vVTwUNkqxSghwo28oKd",
  "key39": "4EGtNNERuxVSyYGffCJp4mE1utVbxyb54iAmhMfvDDxzD2oar6MyFEEfJGwoAhYV2fpoVj9z23B87rTvAmnz8uHs",
  "key40": "Kf7sSLtrFpD56rWRTgKMSbC3tuePPGYxvXRz4onvjZb1FNyaLXLP1pv3x39N9pTmHo63v37JTqFcXpwravjCTof",
  "key41": "2zk46HWzFfjADecMGSFfoLoh1zwXoz7Z5mjRujyQHh9PLExcZNnntTDRr2sMgvZUYqL7djkbxpaNqQWPvVPtep6p",
  "key42": "2hjeDZy9N2mCxpZKzG2dMNZi5B9N2hRdzWWtPbbmBQ35r6VN2PgwPyPRyCUJNStPmcyVN4nvm9aARVbViVushagk",
  "key43": "2dqVuL9sCersu5n9xPeYt3xkKLYoT36w26rupJAAXkpa5rxXZ3x2SEJtzF2BBDzYJefRuccEYb6D9GmGDfHnboVh"
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

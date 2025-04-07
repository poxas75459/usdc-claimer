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
    "5cBbqF7uuDF3frVDLdjE9NnLbrd7NKMQL9Jrdhf83ozq1iKvGihtVru3E7SA4GwTgv915aqbhGeMtG19H1Dsbfvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KrFcfS388YiCAgVn6f4gQz4yWwTJt3CWQxFqYhLPaXPfXg722FPc3dfGkFwcw5ffRPPMqSyC1wR18FK4MmgXAZv",
  "key1": "3uN5tNNpt8pZE2KjyqzZNSuomrrVLhvzm9VTcbNTYosBS86aMm1hoaPChJdSCkPBAY3JRAxUR3ixPYTCoa99Wkdh",
  "key2": "4J7LWzSmCKJ5nWkVXmrXrAKnbzXXMUvwvwxuDUaQ6K9swkZ5AgLZi6skoyad4cMJpdzHreS7aBmgrntqDV1fNkLt",
  "key3": "259eiobEa9qqjxn13ybkJQiay6ezPj9eKSL4hNMbJUo9YDQTjNFQBhGzVvefM2uUoa2S5FNpEwMCxWRQjqqwQ1CD",
  "key4": "63amWFhHEQXeciE9YcP3SPJKWujVVeewLw74kjUU8FdeVL3uzxL4tefiv1GULx48ptjDcGsJ28LQ2XZk7PnhL61P",
  "key5": "4UL7q6njdwHxt68j2NwMMzWiiZeqjasL3ecBti17RmbAjS14ubTfGxYgoBJtnZBWhAPNyZPxa58S8q8Yc6Mci9U6",
  "key6": "u1hRocT4LQrwXTPv85mbRnPrmCZ2w1F2BAgsNhHiWJUPWmBgV5uPCTjwyLS6NUdBen8VqJjHFzeiBL6p9wmQbm9",
  "key7": "4rsLmzivzt6XGwVetzTueQT1Hnq74kSQAqmxpCtGwdWaq4yt7Zkxboxzeu7LwVegYHM79bsjAZzRtVwrtzPt7Tkt",
  "key8": "F2uNC4MtECT7wbRhksWZQaxiLyeoHviBDprzYNQTrsHCMEDfu5ip9qAUG41oM3L5rbFKFmFXsH4sQ23y9Htcqvw",
  "key9": "3DkiEBe6fGKnHcz3hVTKhCDJQV91HQLjGrnquWj8ptRzyBFsPgszdq7XEFL2LtRrZRbAYbouXi8LaDJ7ERtrBuxo",
  "key10": "5eKv1DdF9SBXGvYtDnnQ1DUrifL4FVsaAfjoqH7pjNs1GULm8tqGEXQxnGaPwkPoKmTTSPjq2xmom37LNXhEJMqY",
  "key11": "5ywdv91c6hLFr4yEKHfS5tYArw9VSs8a72vWghaUnR2RphfA5kjEExUDVjdLaVTomBfmBig8zBp1Tv2CX6LBfxjH",
  "key12": "5ioSoMY4BXG32TST45Np9xisirWeatWtRzj7ZTEVAw5WHWQEGEAtzw2nLx2airqBGqMwB9UBLPamai8Myzu3ELTX",
  "key13": "3fub1sGzj13zJen6EMy1djr9EnLzS9yYVQPzuaWN2rCEwCFciopcNNCycTszqMwYvLTbqwePUpqxgmLPhvLeuwG8",
  "key14": "4Jk77MsH9xUsa2UgcxbT3KpC78NbhWoacMYPiosyrpdqB9ttMo5NdtWTcT5XytrjyY7cdVQviwXV8tmHg4TEWZNm",
  "key15": "5tjU13rErb7ywWJ7mcaS3xdiRrEHJ4iF52nBMF8eaMDTYoj6gLqki2jfLw1dxtDPnSU5dRWDwTMBp4ZBRnQGsByN",
  "key16": "4RJrSgRrgbKrG3oZ8yvodDM8KcfiE6wM2nfXUY84TuJLoawp9SnzR5n79rtKjQmQMMx6MJwk4CwC4W4VnerY5keo",
  "key17": "5WWdTFMNBQHn7yHPnZZk2JMqgSpiXtaZnu8Pu4CeLizpoDEYQ5GguhwyNZGu81AHjLqB768VkRk9GdrrXXXsUsD4",
  "key18": "2oMz14RucTTZQvS5dPJ5Q7Ajy19ZXPpomt7XgitoQKyBQ4Fqafnv7qd7iSRU3WRMHur9Z7uNiWNFNELpFioZ8UF",
  "key19": "4KT37GA7vroeeKCCwbrKCbgwwXEBm5kfEfMLgw9UKA5JSMohwWmQDJLYEdsQ7YpifZHFLjDv8PK7focHXbHjyW32",
  "key20": "62MsYQAtZfnYThzTgoon8N42c3bZiwNa4jEknbFZcyu4jZBT5gdrUFp5QWX64aL5aYppWTxnstHi6BXoSNUb4uhY",
  "key21": "5R8McB1Ry4RFFNQm6ojg3Ajr1dn6de1fPcsF1fnWgppCEGTQbCr38dpgaMz7E4b7UZsCX8MFRGWi9kXBV66J5din",
  "key22": "eXy62tMo535mQ1pcZ6M4LRwUktXbTJBGbCh1LZifFFnepPd3PVmTkAFyT58CuozbfzYnn5E8LePQQbX7sXXCmS9",
  "key23": "37LsQeGDshjnFpnwuXVDodwU8ttcx9VYGqKoKvb3JXHP4rwgh6LVirbhD918RqAs17SQw2wtHpaBFR9yK2g7uGbf",
  "key24": "qkLq5zVPrfuRyUv1FiS9kuULQXDHet33NuCVZz4vgNQKv992pS2c1YHgNTGWw1GUP6HyQdE53EQL2wgHMuUMZuA",
  "key25": "5xygj7W91Dd1WZENz1LwTxCadQHXmWAsSuUJphyidtFv7AUYJYTWMPVnRqi5y6aN5Suqo63SomXUAmNTG1atccq5",
  "key26": "3iGBfJeL5CWN7mCTmzMVrvfHH6dxQtiS4ykZHSzhpKYs3dJkBA2j7xqHKd26raRLPpcRsSqhz5y11ftszH4k4hc5",
  "key27": "2AdD9tdL1Bb61HNoyWc45uHPmwGpQ4MecQKrZcYsemrk3dkQXhZ8kM94mFLaJWE7zz8f3pqVenCa6oCj5o1pL3Ww",
  "key28": "2JK41hELdCDs97vSEMm9oa24pQ9EYyhLhVMXTzbhFc8YwKvXzi4sBcGC5TEBpiAk74N2JGFqBEVvf9ZreLQdHCWY",
  "key29": "5CAW9j5cxMHHxyUNGaNGXk1Mti4tK9X4JN2S61aqhpe6892tboPrNT1kT9cTybdDv797XTigZ8UFkzHYjjq5WZyY",
  "key30": "45dhuELDFYFpevdmGP7DDSGL1ZQLkga1jEq39n93NGUVvQeJ9HzDBBPUYbwvPGtZdr8DdFGDPwMJ1AHza9HPrQ8X",
  "key31": "T1kmsCVRCgVWi83MykearPdTNw2UiQ2P6HJZmY2ckQemqKoM8JdS8VPnA3oXyPBk2nCRnYeV3RvBrGNDZdkSi15",
  "key32": "41sUgtYfUBXoVQCGufUZRVDRqz5G8A1FVinRCpvTWaxk9DVeWFt4TmAbLkVHaHZXXXhNQz3GP32g1jYvQvibK4Bf",
  "key33": "4FMQhoyWdKfY9pXKPEkaXHxGeTgn3K5dsoKG9qqjKfTHqRQPkGKaipdYrt5G1pDD9ufz47jywUFedbuxWzgW5iN8",
  "key34": "7z1R3FkXfdyqG7eEqykNwC3pQJbWn3TgU3AUkJ4RVQH1LM6GLyAgBTnnWdS7kSN6bVbtckYCwUs8kH9oXQtbZEf"
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

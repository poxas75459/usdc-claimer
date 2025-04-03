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
    "4nXGGWUwZ2LUkU8ZZk4nuZjRpdCzTpJQwdPWfDC91feqE7gZ8AdCtECL4BrmRJPMyA4cfHNaUjGHDPJ3LseQsig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VaBHt6V7AAuFVyVmk41MrECZ4kFqmNHHcPwd1WfPNKjEYzJtNrySq7sW4ZVgNUXTCYbQJfmnsMb3GYc1SmzoBgJ",
  "key1": "3HyCzd1L3daxxmKrnC58Rvr6TLfNQYY66LBUN9F8Be7PPxnM6zxk3KVeCqYXqmwf9ZRKr8KG5uMXTEfuDvzucH4H",
  "key2": "54JWAmn4mzQfcsh7Q8oQf6Xj8dqr36fqNNuwFazmExbm3N9hvt5PGxFQtcM8Ui7sRfuSpX2mpcmAQ32g8UECAYve",
  "key3": "2tVQpBz1EGciPQR7aM1D6CtwgwneyE5sSfyUnCah7xbocwHv9eqm1ywvcRHWbLSRzw53mftqHLyYQhDWv5e1EE6v",
  "key4": "2CVr1xtRE6zb1jW3rgW2FPTmgve6n1KvT2AzygbuUsz1FsWa9s23LBRapjZR89RpS3kxDnhbj1qXdeoeYQhmE3Dk",
  "key5": "3ujrmQH7wEfHXLV5d1AgDxDvLQuAgYcuBgGU4HwDehtuLtGHb3GgEZLCE4VWXnQhVU7rmAJh9973caNku7z8BJN",
  "key6": "TswnBBKPztvbhjTa7keE7URizyAJb9XctGo9VKLo9MPaVurcy65d7YPuwB2Tg3WRtbf3STEP7LawWhYzCBKazUh",
  "key7": "3BFVQUu2DtdAWvzFxJyb8XHCFAhhHKTAsKYaJpCpy8GbcMBA6g2VvC7HYUMHp1pT6YPHFjRFhzAXbMhZawMuaVUr",
  "key8": "2YHBAJ8V8Wmy32DpxmS611VLs3oFMZ2teVuRKegVdUcTBTX9xEb7fHLPNXoqEWRbRwCG7VJFUTTV2bEcS95d9YdU",
  "key9": "5pvnN425t4GZrws3D9D8MK8GiAbP4qaK1FqES3C1JduJ7RgFpHmRRWqQn85AiAr2zXC3fpbcCjkFw7L7eqmPecbM",
  "key10": "3rKNmsZA9dGGf7xmKttUryqwzWLYp94xZ9r4RQo5qS2MayzK6MGc5aPMNGmFvafr95t7jX7393f5cdGsrH2ufy3Z",
  "key11": "49gSwJ3RCWbeUVHJBfNDHVh1TsB4ddU8BdNBnuuRaeEmWxSYyQ6EtuQNV8uNJzzfvCJXEfZgHjZwV9AG3XyrEVR6",
  "key12": "4fRMXDEDHekUiHNhgzVCvT3DakGzZjSgSbEv2QFXp4apX9vgnfWK87JFPNxeSypSbfGyGzZ8SWFMFLEjoSF8AXqL",
  "key13": "5QeMHqjXxwSAVdXMUG8mSZE5SKqkCLtaeDSxnXcubjL6d7pzWikQ62zRTaGkax8vKC61nJYhFcyHa6sR79k9i79P",
  "key14": "2CfDbehqFejWZmZffZnsMjrQyVnKUVyMdqpJwzq7dmxEmSDvtUWwARiX3XFq29xzeRLN2Ma3mEmo7PaVTLPKU2yL",
  "key15": "52X9K8sVBv8fFEYhbdDrX6udkvaGbXK6w52TH14ApbnaSXDHbJyA9pUgbhbcPtcCMqAjzonWJdtuwbBu53AdwB8C",
  "key16": "2Xwj5v39Fmx6ozTqdzUbhbL4S4vHEn64EieHxB56WBkn8rfKj3Voo8uwF56AbvXSAuMSvdU7jC3QLeUgbqSfraF7",
  "key17": "2EJWGe4ChQpkgmJREypq4v6ernQuvUpP13jSke5MStaoxhTsqXiFitJU39UJ8FbTV8KhP4aw8SrVjULJQA8RZTSK",
  "key18": "3bvfABfAjRfxiDnW4sfW8y3D3QvbfodzwN8trmGdaL4FsZbVuR1VGWvNJao92Rsb33s7U7SrUJ4pfPSJoBy2eKYi",
  "key19": "3nJY34TUaWipXEH7Kg7a6wxKfDPX6cLhpWiyRn6JK8Hm5w21o1aaDK6jB3rx9z9ZLb8Jf1YNitqaeAbh9hLd2KEb",
  "key20": "43w7pWcoS6fgA9T5unDTzkfmTfF8uCDzZeyw1Gsdtpra13Byxk4KvhvtZD1b3tYnpKvuTmaFm1xh6QuD7bz49XDA",
  "key21": "31e3aBBEHqdJCQ4ijWPEeZxjtVGwt772FEt4sUSgVZXmoDbMhAoXGE7HYYjyu3zyaR7hAGHKdw8zooB4ysSqQaHJ",
  "key22": "4E3DTsAWjRdpFJMfBmER77Wa4uKYY4u1aQjCgt18HDu228sdL9MtLJGJJKvNps3YykPAuZAJPo44QGviQyYAS543",
  "key23": "4AHA62HkwFJUD94ARz6nArwUdy3Vfe7Qr8PQytVCu9j4GjHhWEa2zBLnVcbasuYE1vf2FVLL9qYV5Ku9K8frTG2s",
  "key24": "Tesw1nj31L5dv3DTKToZggw25Z9jiXFskFa9ekYUzXRk2AVygCKMjiE17hCYoBBqP9FvoFofwJxnhzN8YNvGaFK",
  "key25": "3P12onq8D4dF8qLoawDHsUgmiJHe1KjfCR1mbsLo7aqMar2JWEjnGRBie3YcHMTpTxim9KxNTkyVVFd4x1PKQ1vy",
  "key26": "4b51jyY8QfhaAdLvHjQq51cxmNVdtvX29u1WuLcs11p4uYUZ4ww6TnQ27At6KvTutkgoS76ufomM5QSYPrbteZw2",
  "key27": "5w5saRWDwF8axc99yokQ6GvUGH4qHkZAZBnm1zyj1DTv2ALtsTXpj7syyAp7Ky2PVek6y5xKZP9y3rDnW4ERkkcC",
  "key28": "2vtiCTZjdVgNbWGaQD6UsxvvyL8haELgVTQvtubrWLAfmYadBeta2R34Cwc7dPmWrtgoR8j5GpAP4Hyo11a1UhT8",
  "key29": "33H7S2peoTLkP6Za5rMXfJ4bVGMse2jqDaSTq4tvCnovtA3KsDRLmjoGT2jY9XjS49e7ZmAWatsx8c4mNe4Hzkyk",
  "key30": "eTkpXMqGfXF46XNCXucSFcBZwmAggPTar76mtMiqct3ZfneBEFhaabepuPJN2XpEgEx4aLmnNpXcT3XXqk2E1Cz",
  "key31": "4WqS4q3wmvf8dBairZ7QWVbukVn11YtpEgzLRfFFKhkd7jf7wvbScmbJzi6NNXkXMcaYiRQmE6SNFBw1rZBQDBCB",
  "key32": "5DWfy86EqymvfPSmrbbp7t6u6pyN3kz8Q9bvSs8qPSgwCJTXMjwE9DWmR2DAejtzx8oEsiq9nSSxgDXngNf7ceP7",
  "key33": "4qQW6Fc8eW8hnqT69ufsNweHYdMaB9p4qKhs4HqgM6HaJvPKrCNJopctxtkzJsu2HJNDYfTj8c8Cz2RXq3D8FnMF",
  "key34": "3n1RUxF6nkyMEf9zVXNe35T3MXYfPJgE9JN5DazJ1YoYiGzzjhBMLt8MWR815k2PU1qufst6maxa1P9bPP9AdYYZ",
  "key35": "3LzXv7FU5VjA4abpZREdLTaFbh8raboyi764W9nm7DETkkGVsDKMhP56hZFVHwZRVbgjPUnvtP6nCiHWU4zuX1Tw",
  "key36": "4XUJFQPDr9wMXDuhBWreDzmqPavQWsRAFhWTgquWHvBfUoe8yzRqH7Ere4hLzkKLGt6WCFxc6qfTGq6R4DPyzmBs",
  "key37": "5ygrmLBLRC28SWwA2KrUGtQW44Hqc1d2HJQXoYEc7PBa95ocYXg9RXMVccz1SMLfPpTcCsP3FmXCSir4Z2AKa1v7",
  "key38": "3Z8JTsmozQatkXw7r11AJdak1KpLGHZqE8tbopFNMzbbJ29JjV23FQKduhCGt73ft9tCHtjcumqaTyY2YqHc774h",
  "key39": "63VzM8nGKxWfu5VS2rMTHnanHpGJFqVPyk7GTvNDDkeP4bBTS9GfBafkW7kYmPgQSLNoMVvTjQ5u8Sr59728rrLv",
  "key40": "2nYYE1ssFxLHevsWCHsvDULJxNgQ1S9fFiLjyUz2NZwiWETEVZuqXSS28VueMJwgW7Z3U2Qtkn3NwJVPxtVZ4cS7",
  "key41": "ZWeCBQdb8nvKeo9vzRHq7FW5WkMq9AdXc2hQpKnkAGa2CvQ3gA1i5YRHFAcnEm2Cc7J25U2jwm7z21pB2ACfEaA",
  "key42": "4YxbYVXFEgj8w8oBHdCTiZnQUTZxzhdDkcE76aiPFEyysfFpYxJsYC3AMZc3pfXjkU8VE4bc4BCkYu8KzdTYRhWW",
  "key43": "3wF1Za2k1eEhxpfxrWczzcQchpv9AXSFgQR5rMuvgGHw2BrFwCtT1VWRmT6131gSLfeUNLYdkmQhVGvcfVoG1Zxe",
  "key44": "2apzTWkcJ1D3zMJiZFEPkN4NhvtGzFRert5FhQSEmjSB3Dk8wdjCYXC8zSc89ABQAfxMB7vcfdu5mQLYGXKvpv5t",
  "key45": "6MPJFcWsVWP3BuLtN9n5MmzEwfzLB3HZqfCAxtKEjYAoqXwwKs6F68QM8SHVZUTtz2tHQqAjQ3S5B5dfsAhFDLW",
  "key46": "4KX56B3YmPx4mpen2vQDGtNDqtQDmfjEFQMGtLpPevrXbgqRkKM8maxQgD2hKK6ey1YXZaATTETWxRDcyUn1TJ3",
  "key47": "2rdf8skqXyDD6jUSniQ6xAhuK7pMTNPiuUUiM6WDBZyvZkjuf78kAyjrNAqJFP3gKvEAv5Rem7Bq3jTGvtbuQpvC"
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

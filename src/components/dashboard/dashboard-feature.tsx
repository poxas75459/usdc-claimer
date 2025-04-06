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
    "3cduduiSFAZUFFU5xzJqKKkBmtr5MHGQu2BpjZftdZbAotJhgRL5go3uUAecwY6vuJ3Hp2jHx779NE4oSUPYPyzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24aJ5qz93XexMzewmV9FziyfPKz8MFNQwobAh42jCbf9urFMcya1oZcpDyDgk9SxGrH5nL7FiSSpN8E5RtNx4rvP",
  "key1": "5nixr2haB7vaMRcPtj1nRcX4AT52XfxZUGNc64fLAHZGcHBUhgboFVPVNg3Aaq7ckrkWcD38yajx6nXTFi5dWWcG",
  "key2": "38f1nfEXFuWX2kEAncXh6kuvHJ6aB76yfJf2R9ssnb3b4SoNeS6CH9vAPrav1xUH2xbxvSFYCPdCsudi1ci44p5f",
  "key3": "3PmmJ1Lo4XFoswTi6KesPJwnN8TNXMx2E8ckp25pgXjR5kGHwjovmGMLzuvJN2ijpBsJGF3xoPbZq6nTRhbVhXPj",
  "key4": "5MVahTiwnMbAqX33dQzagtUuDK8pfgAgKZ3m6bP4dH6zRFs8zn9WbxQaZQmEu44rs4aedmKQBsztLDRwz3gwVvj3",
  "key5": "25f46x6aBvntte8DepVF3G1F1YTg879XvJRFHrZq1jBP4XSH9H6eQrtULGZELMnwXwztKWsCNsSsEAmmxyWpP8uR",
  "key6": "LCwd7Yz6efenFrStWjBQxFQaH2nSmVGYsgNgz47N4sZZrEPytffovMtnUP3UKMzwnuT6Jhtuq3aoWYZMp3b39rv",
  "key7": "Be8gHH4FfcTcHhzijEDpbJNcsfHcNTuppbbDVtG5KMVc8MU1kQpRENUNsj5RnKXg1KGGzrMSmfaULx5De5Du5Bu",
  "key8": "3ZBh4cyswGGkBJEYmYUKdhkYGP7XXKrPCdtRwCFJNhJFp3HHSf1SQmapBNGnAt1ii543YmgYtdXxv9JbjZTnxjCC",
  "key9": "4VS57m1fPMS78vcqxkSN3GwXoJsqrNbSozN2WSJ25Hzu3vLbahGvZxx5VTLEUTeK9CJfR61phHbAt626gcSjCfRq",
  "key10": "5KwLemGt3jwvv7PdxvrB8EQtSYJrGYQvqMt6ovWTrgYxZzhbVV6uaPzhj5xCJW6ZACLPjGiKQHFEN2AVK4wNSV9M",
  "key11": "MKpdNLedSpaSatXVYZXuBMCZJdvCWD8DxAwXhu8wSEGfLoETfccHjN9pZWgL7abuNzvbtrvzNJ4dkp2RCFNmdHz",
  "key12": "5M4iF8c4FU1RrNq7zRuQ7Eo834wQxx8ge6316N1xgi4BgrN89iDaKYmrxPjKoKXc5qyMbHtup5eJhVMaL2fW5C5s",
  "key13": "2XbBetMzNC22sCWqL9i2MxMDUiZZJtjQ2rtKoXEkn4N4rgFGUj15R6kdYX3vWXcZAQW4GxNNoiDdRnxDeiZfH6YA",
  "key14": "2p3Vr7BreSVkh6jo9wuteRNtyBPmnMjGbUzxVUNdD9GBrVTfxeorUjWGKv2umMkuUfBoNkkEmuUcJEtHRMHCiCd9",
  "key15": "nXuYcvu9pqoPrrJ5CbWsbDhSP5v25p2Wyr8fYKWcGy62zCVoePbZw32gpjuomJj3k6RPv4t4kQaN9xbVBQ4r5oL",
  "key16": "2udNXGFxBkkyLP15gvqR2SUuverv4gEJPPLAKxKeMLK2Xs1cBvqwZc5mkrf7irDBKDW8HLAghcMuK9fc9UyjQKb",
  "key17": "383g5q2ANbJj9gEw8wtcQhqk3N7Yuo95SYeDehpGYtpHisSib16sZN9WEqPAW3KxTXMFnus4d2gW8A3KcsX8xmLv",
  "key18": "3w4RSd8M82wKsULA97biUPKaCw1edRfdxu3LgS9ke3kvcVY69BiJCjG28LsbQD5y1rLkLFgSymzSSQyuKZwUF877",
  "key19": "2VuPitRLEfyAgxmNHzTYetAmCBviztdpn9gMgXB6UkwSkv8c2vj3d5LEG2ykEvkRrUa5J4enEXoouRaiSynhKx2c",
  "key20": "2zMMmiWqVwpFH4qLf3gEJBGBoTiLyftEPD6uTBvTjfYf4R4YzakeQTDN3xgbkEN5DXK7DhgAU27b3Dze5T3uH6oQ",
  "key21": "S37easYjDHas1go1faFJU8mMhDVosRGtkfkEJ9URZsxriBs5X4VWkqLTGLd5q1em3xYusT2GWG2hKMv4qyAPyme",
  "key22": "2fg3gspjsG5NyL6p4iJ1HUrdeUWmbu1q5e9bFTskamQxVc1KboAxLYNjkXJZzdgEb6DeGFLofRpxU1rGCQ3nr482",
  "key23": "2hH26k3ygsYyD6NtuA4AtzPo1sUSc6DyZdMrurW8pPwESa3yRvWzbHUrervuS8j6AR6o4LWufc98fJTe3Tegpakr",
  "key24": "2pp2FM8LzRpavbX9u9QLyfMBENjD31yWpEJjMPEqJxLZWuSJautUeF5J46wQ6N18U7nBRszHhXa7YX2yZbHWd3W3",
  "key25": "4wckP6k8pbYHP8V7Eg5pN6dborh79hTWAqDVEj4mp7PgmBYAxgMn22XjjB6bFPHMFTWsayPzQdJNy1Tuda2uvhoF",
  "key26": "44md3bjSaziVrt1LhA314MFbh1bv6Em1JkndzmjxFqFucZSJH1fxYxQiB3epfenaA98kxyGmLYMaDHQpkHRePt72",
  "key27": "42hjMV5QNNfjRStYknoHC8u55MR8TVifd4j55BSj2mr8kRTLmWGqBiMGcJjYEy9nj36VYVEFZrAwELBHRuL4vpen",
  "key28": "4dryqscpNv2yAqaar56Ax6EAKJagNqRmZTVYFwK85MsgYQPwBpQNCVYQHDkyFYpLN5wBkiJQqLS6RAsZGskujR5B",
  "key29": "5YkDH8gvActK41cDghYaRyW23eHyyR5xjT7NHTHkQJmkJo1XpTnxevzzyd6ikwyK3C1V3XYoTjBERpxg3tnDzYt",
  "key30": "2kFcouP47a2Du7gtGwpGJ3U2bo1uKPd48QJGFaYMSc3frZFr1YL5UXUgYRGDe7GzqbcTdJ5NdHcafsjuxwfmzp9K",
  "key31": "5E6uRjHTHqHo4rhqj6V9314VP9LtTZFrevxaaSuf5w1QhMfmJWm4iCWjD4h7QqiGfXmdgWU5ChB1AQH77sw6TiJt",
  "key32": "5QhcfDTL5Cn7vPEFcKdmVS9UUdGVaoPLGrv7ChtMoBzT8E2Eefey4PVWEtUEqiERtKpsmADzX1YJnzXMoQcpB9x2",
  "key33": "58ZMp627RkD1qyYvbcaoTAiGSdT2hTk8hdVJdNQUXuDNHVRU9jU4EANV56rq8DNb1Ag6Mp1Zp3ue37S2gzTE3WV9",
  "key34": "313gZfRySBcpNWN3hFpoEuHKvL5bgC3GVcUKpvP8bjTgJbznrWPGgxjBPj7htFNHh9soCt5YMNnTbubzLu4nJVB6",
  "key35": "4abUkddiKyDbUaK1mftP2hfrWaRYhrciTad6ULTDZRvvemJ3QbxSsLMSQxeyCieURUTTTnjAq5zHVfZcLvpVgTMN",
  "key36": "485DxowWZZjzWpwPcfipThfVhF8jAaX9kmdiycfmiHi5rmt4gCnYZU8PymEs2WkwRa7CjmbjRFcDWnWFF92whiN4",
  "key37": "5VJxQQERwEZJmXHAsfw5PRNbEtS7jrCWb6rR8jhSwWwuiuXZf9TeZjC477mge5imtUg12E97P5QeuVUfmAoM2kGt",
  "key38": "4MqzLZbD8mnVgmKoyvCNVACCEqLkok8mFd5geDr6c1RJ1oC15JXsXUk2zcrMrhTKH9guFesCjoMdxupSTmpfxtV1",
  "key39": "4YfBp9QES9pACMPT5pUemnanaiS6MVyw2vXdAmVqjq3PEBMHJXg3DjWu9z8Pnpjq4sFDdnn85MGuFVuLW9VVhyms",
  "key40": "2qQSLZU32dSstaoofk8zCCpjUBkxtBiLJKzmF6R9trtk2ZRxbYgYW83GBGbeoJ97k11oKL5m3zwRdJ1b88iDrUgN",
  "key41": "Z5i2J79ZWfg5CariobPPzcVqkBF195jJQAFfrZ8D8VujwzY6hdQCCEbHXbbdET5GLj9nw5mX8wGuQuhpPXE2dve",
  "key42": "3jZTUmB8Q6jMgTT9V7kSMJ22bi6UbcLhNrE8cK2nuCfPvzbk2nRXPeoouacq7ifH7M9Y21mV9zuxHGZjANnqXpmq",
  "key43": "2Lxd8qnavHY3EdL6n1Gs5GrkXiMEaNf49PSZ43P1Tp63wGzouyN66KxBwC1P4npLzXGzkUXBQaaoucLZFUa44fZV"
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

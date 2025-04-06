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
    "qqSDh3WdaPWesbSsF77z8abgvveWdRdJdtMCoUcrHy7ZLqGxngMRqBa7tk6b4Tg5A9ebfFW2JArLhU3oAv4VhYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ieePkmGF3JYmNpm1hW2vebbp6SS5qH8FPtFraEaMyTvC1wUArh6jZmcuB7SZGMKf1NcjbT1cExpFCgTYhJv5N4x",
  "key1": "27jPkHbRVhCtRbCjR2AtYMocN7ugh32RKESkjGzPXMNn54NfS3xyowme1ir3Q8yRFojpXYme7x8GcnpUadUUdjH2",
  "key2": "5sW4kqnh1s33YuSGGffCQaU13UPtkUPAGNSzBeNNy8tryK8FHs5fdTNPWGWLtgvBPdFtJGcgvfDQDPpzn63FuMBQ",
  "key3": "27UuBTXmVVmciASYZ6J6QN8m8f1h6sZm5m5NzGyETdZR5RDWRa5dhvTGCQg1fRgsziQ5Mj9gMdqK6EWC27juciQh",
  "key4": "5umYP9SsudshW98btsJhHmctRqdJcRenxPyXvgZbpfdbzuZGAc1UrCUndw4Y463oRhiwiq781CX5rf9b58x7hL2W",
  "key5": "4dXkf1RiXbBP2jtkfRwy2ufM9huNtZDkzbX36hnZuDTE6WaXjZzQTkG4Kta6ApTJQ4E24H3sNrvACyJ6wKBY15qd",
  "key6": "2nE111qGCF2dPRf5HCYeTyr9gnzjibEpExNQ9BvuxPgWpB3GTeZA1twSjgeAK7FJ3NGghCMcyAvtBEb2De6pmTXp",
  "key7": "2m7JcWaYcJiWB1NDvxTdhewAy8UnCEGGPGEMzWyYPKQ1raDQLG3JCKGmRgK7xSkUdrfgGXF2PPMR1r9BCsoEs5ts",
  "key8": "397sKQzVDgSir7XYQ93w5LFqGuR221PKibBYneuE5BhDk6WEaqU8vqQb2V63mJw32yvDu2JTdqK698s1cJrzqgE4",
  "key9": "2H3fKKfjethAGfiA5Nf9iecEj2rS51wMBEasDRn8GwKD7XtoEkL6kxWfVJXN6XXNceodQdKLsjXJ3WFfV7ULimRr",
  "key10": "GHzPpeNwijWFa8pckdVen9nxhtGpiGXyvhPXYX9gyKajh1PgmsX2M8aMbuHY8XJTwyoVeTrhW9q7GD4kPeY92Fv",
  "key11": "36Gia1umLKdSfPGsWWMVwWWo4SELfeEEf8eVPJxT9WhjYVUxKvq5a4uJWn9ec7uzBzfrU5V48WizoZdkJ4gyDjMp",
  "key12": "4tCtqCWoc9c3Tt725A9wEpunHPB5HRh64eozApbaMYMk3beem2fb7vHhpGGvSHQUEScH3YQLtL3oq77vwCNo2ngE",
  "key13": "2MyDWBPMmmmG5tCrqbm9wJ6fAhK4x5JVjR1Qc7SqKpf9CRFq7rnqJvnCcNAWP7TzBQkiPgr62P5Prb28jgWBbtoJ",
  "key14": "2Y2U15MnYSuqyHkQoVnsWh6CAbKBp8iTpe92CZqNZ1NHtwpmREzku1sCXSRj9Tx4ni1cAHfSCzY424cir79eMUhY",
  "key15": "phXPa7uKHEmh6HshbqHt1NXhXG1skLc88AjHZtfTHYDFhQTscn9cdVq73WdqNgpUkNSm2RY59oxBMRV3vbEfFKf",
  "key16": "7YgpM67rMYCces9fkpYrHJYr8E7UAwHzEmb3qLe74Xq4m7wqcv8x2gpcgpV3HnbMPhZ5FokPwdz3Wx2Na2rg99v",
  "key17": "4cMY1gnBFbnvUtRkekSUMAJYzLA2rEx9zo58N7zpicTEybrvyPj9oTwLTMSUHNiJ479as8CjoPhXCk1oT8PVb4jW",
  "key18": "YA7iRnBBmk41UhgNZPKfsgEbeYimgFdFUhxMsk1vnbfzZgZStE3FNMpnyjtMfaMyzLeumqPq8gcGrDv8iZuY5pn",
  "key19": "5ptXLLKVGXgvFHjd3yrL3oZh1xvLqd8uF6b8UcS5k2WV4V9AF1BtDeCdCMHAB95CzoQaiVKKbpp4bzTjDFqHy6rG",
  "key20": "3mYK8rY3qQKt5VHhkytNqLK28Jui3Yx5ycGuJoqPwd3G93uajonXSiDcX7adYHQ64rV4DxGGamZaPUmNUiYPndSa",
  "key21": "3dcLbYS6TzMbBEnEqJt4Y5XvEFNGWBLt9iQCHwiXwTsZQJgwNQZNMxUU6axcvAnKRrjvJW3Z9byeP4XGJi52Z6eS",
  "key22": "5ndnrPUSP7dmvVp9Dpc3Y9GBx3TmV7rivuG23wXSNXjV68sGwPMUxGJD8jZTpaXNkyvts6bV1paiF7hUWougab9g",
  "key23": "ioqDJY6WoXrEAQWGwaEufsmjRpHN724x8GaWu8ne88YeeLkPPik5S9Xxs2MynVbC465CvUcv9gahGdkquSqqx3L",
  "key24": "4S1Q2YTuoWyv6CsjtqC5b1M1BN4GYnUCLKESP9gAPE9N9XEDcEQZpLqi7TXxJvmjthvXJeT8wa5BEjmD9beCWnts",
  "key25": "5PqAz18tRBUUZ7hNFZogD85pFJhL9WKFwsojfENsjd88kPbYUWJjYGinToDEtavFDNYRKsWZCtJ7uJhPbU2eBQup",
  "key26": "2KZtKz241NSyCtUMbyxPWN1ZzMPT4WuEXPrDAqDJTTSRfVNURLaFhW3QGJnjY3NMHEERq8ZYbCZL7e37iKgZx2VW",
  "key27": "3f2FvWq4VDao51hRuKVz2EKEdHwPkfmjn1qw1erq73NPqVByULiwQgR39RgVqnob5rJxuhwK3RWek1STSzh7gow8",
  "key28": "3DVzWF589enh7foVvbETxrpLcPKDj3gdWbzzExwbtJS9aUgKYaS5Jm5qiv8Mbeb8GjqUTfdPTW1LWYasCfQRkDQp",
  "key29": "RCKQgr2DASvHPJ63vm74va6rg9mcGcsDbkoycsvyvjvVRrxVJRKDoysgRfAjQSpQJm4n9FbMiVE9ktmtC31KCxW",
  "key30": "2NFknZt4yYsWnHUrny2LvkqEcawFARnirgH8q3ygqAfN5o6ZZ6ZJetX99aahjBDX3csWfAsLwWRP6noqNymFaE12",
  "key31": "5jUj9EJVLbn8BnahVQytXQqdN9ZqJP4kC5LSkgFsityfEquBdFVKvyBciBf7ky297i4dp2kR2SoqesDfwSmtkFEc",
  "key32": "4DKiDYeAnuZUwz48XwSNiQzfsYwgCRefxomtvdDRQauM2hToucB6LcJoMiAow5ry4YEzoQHX1kCXT6SGpmzmgtys",
  "key33": "2MWcqeeGgCbvaA5MLN68chbw2m1f62MqwRw695whiH1Dc9Z4LA5DGmUe5g6HKeLxVHZoozMc6qpQz7ouzQbT1R9U",
  "key34": "26S4JqeXM9Tdp14WWovNxa2wCV7Jq3WyctjBmUVC6t7EG1MrrbZpA5YfTFRDMM9smtMb16UoH9goZPcxko6VRAH2",
  "key35": "5hYeiv56GQgZvXE8TUPns6shdDtbUYAeUnLv4V2pYiEgmhnAPY4W7KeeCXLRhEBUwp7zzNMuFaFvPadCZ9tFbpiH",
  "key36": "22zCL4oZ2qkcWjjbn6SF9Cn5spGWsFmZBYNcWQt7qQkNp6Hn2TXJhgcPN9rXvRj7zSLodsrKw4Xxk2cPv8UCYfma",
  "key37": "4CFymd2P5pzAJwCAe5oWVwLN2XiZm7UtCX5RxWKFaNS9XYzuv3jzchEyGCwbVvQa82wUmq8x6pjKRLMRVKjetdEP",
  "key38": "41Yw6cbgB4GDYwSxqnaiert7LNy9FTaqEXejWtDJpmBCRJQrqhWpNBMQujzowwtqy4XB19Dieq43AzwH4fwYVRb2",
  "key39": "3ZHeRQcyA5FxajyM6USkYU7CfidR78D8F6FidNUfMX7NMU4jgGGAEZ3pPxkBpmTwjShNrAaGi5K4JiStv5BKRkqp",
  "key40": "3SjpeFdotf3i34XiPVPQFjFsFDqFBW5wfLbxsyZTxCcR1oXVaiBSRFgaGAFXuCwEBNHEuAXELQg724iJisaD7D9F",
  "key41": "49dKxn3cQx2JBycuwxT6kEitgFa5FYpkvnCBmcTyzSAGFgF4bz3GrRDHr8bwH5N8vkGxaYUPaJcFNejB197cWyN2",
  "key42": "5qMdYennv9PpXKfCc24F4nZCML2t8Ad8hrECYbzzbJrkK7nsatfkzyUAT1EUJih9cJVwp2cvvWU2YMaCPURQxoxs",
  "key43": "5ZpYHbCoqegDet2J3BMqZSnhei6p7WUBqB93asNwAcLqBffyQkWQqmUuK8RA7jWUaFxBUVerYMZ3NG5QQrB8RXEK",
  "key44": "5ge5w5rpZqjgzq3vdbKAuGFX5MW4a2aqzdLSSpNSuojM6Q4dZTPqH78fazhnBcDU1xWefuSVP5JWEVifUPBj51xr",
  "key45": "26sP1j1R1kY3JQ7mUYrn7neCRSa9BwoBhaBLuhxsnEEFT49RF6Z5Kh2K2XN3KfKgETAasthRr57P5aEjQxgderhT",
  "key46": "3tgMyaSQaTDKVL4kXpoPQhaw1UM5GozypEcuMwgiHSyz2ckFeZB9zSEqo2uQn6WKqAA7s9BaJzRwQfJSQGsPfBbU",
  "key47": "2q2ucy6jSyiePsCxLpo8sNkGmemJThTzAMGtBDcHFc434yuXmuCjbgD89omaonFGzcM49D7Jj7Sc1zQ5oZrEHart"
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

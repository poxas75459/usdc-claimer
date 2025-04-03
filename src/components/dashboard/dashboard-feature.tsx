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
    "3j83kYeQqbmgooVxFAEyk2dDxAYDZisFCU8wTbzuDoujPrAyFpYB6VVvsvhTLhmaNN1wxvWTreQyZpeQL1SnCc4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bh7baeeNAHGSrHPeTCghf8orNu889ijBCHfAf9Yzh2WBSdX3rJxJpSob19u2yHpGtdZ8NSQRjDP9sUFWgL5v6p5",
  "key1": "3wD36vERWycptqN5iAYgm8W8WtEhJUp1XDYxWLdyKcT5tkNHbSwnjGGsTG4PpzU7zkGr7LYxPLnbLeJzsNL7Ax7U",
  "key2": "2NoYUtjnnQrcNv36g8ghGQ7BeBjd6WWdFRKWEE426N6VGUNo6FgSgu1hpAudwEfDsR4vLDKTNKXKhkjAayywMKvm",
  "key3": "3XmAzTmuEUfDVPaqJCTWyrhFMNmjcPFnyjvxVUgVZoquTiYJs4PH8ksjmFxBBfF6pGkP2HRZSxXaMZnUb8MPtVoL",
  "key4": "61X45AmNvBnx1EQXibvXWryRR1EZbMFh2LxWnzK5ocF9LdMfDifuJnH5b7Mciefjy6UCHUMo8WGMcJSnVvbhYUAV",
  "key5": "WEnVcW2Dip6LaWm98wxmtkeC6AEsRvTBXeca5jPyMh5r1ELFkf9Jop4MMg2atkWiHTS8QvEKFEaGdBHkKVcY9qP",
  "key6": "3dcNEceNQ2rWCAQmaKCx69Ja3aqzU8yNgxEmB6RVWFkM1XNSxfBqDXsRv3GMEwBAjHCuWXGLKhXTSFJvnMNsKpjN",
  "key7": "232tJSzGuRAY1tMnfQHb5M2hDeAmE8TrREuWWwNufQ4ChqcqkAce1Ti3GJSqpDASQG6U2Qy6raNGPmi4Qv5KMNzu",
  "key8": "2Dhc1eVVh8UTW5dDwL5wGiY4Ne5D31bKHwNxV73wpyqJGtkWfRFmiZzXmoh6rFinr7YcV8ZD9wUN1LUnEmWBjxpZ",
  "key9": "EUq458QdWDxRvgFFEif2vdbbjP1EziAAYSRkPojMzAtM9SQLs8MtqUxhvxVvBgVfsjGvzoPZLXwmA4XxJgnFdSP",
  "key10": "3sVREKxXARUHrssGnwFRq9TzsTvXkkUmKuw1ocrQV2pntGCwoEfJpwoo3ynzWU4JKpJdb9Yunamx9MF8k2rKySu8",
  "key11": "2Ngv1tPxxTUgE9x2oDpsGTE9Uatka87ytyk7bEwH5X3HN9tXV3HJMHVRxCmr8fyLXZita3Hja8bF5C6z9J32AZB9",
  "key12": "3AQhBPceN5ofFBrCnekMgS6oSFsG5VFvRvCgrf9o17wWPF7nJrLXon8ps1d16FiEJNFeBjucsVrHsmg9WoqPAMax",
  "key13": "3i56cwdMiZDRAST12SjgnNb3XoSuaQV3844oaEqohHFNq2V13eCqxnLgAzx6yHp3kEiBhZ4xHM2z4Xg5gGLWq5HV",
  "key14": "5FpD8vrWdjUmZteawawATcn7MfEcLFbd6gTdeoAcYhuueaiR8bvLTtWorwrGvQ97srS6X5jDDo6eA7U4FW11Lvdu",
  "key15": "4T8JzmRqWwwAziTrLuAMRZYbxUcXcub9NqdyX82ofMK2XZEhR2jvm2sM3BEDT8m3zYYvgtTvuB4mNvGDrq6M8zwn",
  "key16": "2KoBw33Y7KZaur2mjrnTzFjofakPwKQwUBa4tXVgdy7PRGwYeJpcCiJsrHucvkM4yo3tunY5eWb2Vg21rrc2DrVL",
  "key17": "22TX2HvhEW8x42y5G748hjGHnnDaJpa9RieSDCLBCjRZwT3UL1DwBZ3SzVrXgT99FiQfm1smdHRE9ZNJQX56jnky",
  "key18": "q3JznHg5xKTwkVUhZhUJKaXbVwKNKyuD5L2GbFS34sBX6FcqUX93Rn9STufvwhF6Wsg9z6KKkfezsAFLNKY1QaJ",
  "key19": "1PmVTDTbgpgNyZSGkbGWpNwcmRv9HydZHZJ1t84bkL6TUR9DTvV44azg8SLkn9fLrwjtcTf4y4WLbcXQERv2NBT",
  "key20": "5ANbQCJ9LT5iVsu8nHum27berfaAhEHNEeZ3PxTEUQ6mEsjaFtuaiNoCeMiSC8P5Qau3AuMkQBh9yK9wbZeY59gJ",
  "key21": "2pCtcj7Ee1nuNUytyi7ZAL3X1d2M2CQpChJvrhgaAciCWSwTHAVorWoEb2sfufsNW19PZHHWz4xjht9Aa7b8gzJA",
  "key22": "sMhBWjmGxbf8pBSoSzd4z2dXxKiJx6UcQDfodkqAdGKzXT5xhp6GrtLDGMMBTRUEmxz6JsTo5ktZCWNsUbBACvF",
  "key23": "Wvhk8K257DsrjtNnYW8W8VGyhbQroDHV1fqZVwC1ckvL99QRYTHpuTSzZCqwCfwEDU9foDQyCDywioWafDUckVF",
  "key24": "2cUMGKgmWZvc6HHJADa5hjC5du5SaLybTWxqwELpLu562MBUPm2x7oyus74fqGV7VCbnwM1CTvHSKhKpcjtYWezw",
  "key25": "35SYbwcEKaN9NzMSovKA9HaVCsk9NFRu8nT716PgzwK5VhsoVaV2LUBUFGdRECkRZXk9YbHUQ2Kjg2cqaPpYpEi8",
  "key26": "4tfbAac4npfD6LJk8UUBHhKnnoX6z4nRDEREEfnpzgok4vrzvuRqieJgR3DgEoQ5RKc4HQ5ZmNeyKUvHT2qfLue6",
  "key27": "droawTijWNvQ7zNsxGVWjPjBuDhruJqhWwSm3rDD1FTWDVSxh5hyCC9dKnUdbrSUSuK6kQU43pFPD8TayyPGqH6",
  "key28": "4NoMPbBGA7G7tX9Fq7w7ewy7sP7ULAUkjkCPHwnKJpR9RJqYVhDBxotDAH8DjXy5N5zJjUNKX7hE6CZxopeBWbE7",
  "key29": "4HNb5oBuBhKBQwgHC5eTp6ccYAoqjKysVawfvnFvEWJikF1mRfFosdravx9XPBujT3guvt5Kic8LzepoxtXWcnqu",
  "key30": "At9jvS2EC5JVhHBTNiTiko9Wc8e2Y9eXgrzA44HvNubtAv7XEtmFrfMeTEUnrmoWLBoApG7t99pYYUFW5q14omA",
  "key31": "3Qzc5BzEUkKLo76oeevcSF8f4aoUVp4We1h72Hr32VTG1hQtzyTHgMJv9wqGNRuGPXtbwW69knkJVFAMQtPEcX1e",
  "key32": "31sSaMSBzHkwKmhgJMwMv32Q4Nka1CUkt2g2hkh6WPfGoXS3WqiGjpk65SfwxUkgE3CGon8RvnQNp4fM357yH4PW",
  "key33": "3AXBjTHSXuuJKUwLTixDe48REgtrruVgQP8mFrwYidbUaBAD95HJ4PkCYjW5mtZyd9X1oag5mpjmTBrZRfr9S212",
  "key34": "4iKgzYzX2x32yEoiiTVT24iyq5v4K1CByCKS1QJFcQDkuUobfvi9weo6T8KaFVhudGsMJLovNjuMV8xHgS41Dhka",
  "key35": "R378kFY1i6kCERSqwcGeKtH5KKYn1LmKW6t1gHtCs9a2yGqGRozisChk18BwgBjqjX4cVHEJZ4LtasXhprvVfnX",
  "key36": "51AfydLdXfjNTo2wKnjYRJSyGawEiUn2hkGSc6hP1so5LAsoGTUDfCBHKgjNzbzBSY3oAYbpMCnv62NQc6mU2T6g",
  "key37": "2muFih1NBX7CPoSmeWvdbbMT6yf7iQoym8CSivgTqpp28wYipCJCwGachSXq91Hkt3pFvew7BnrpbQn1pJweMzch",
  "key38": "4e6AUXnaQKWr6zt9rqygrph2ZvJCe7XFb8Lt3WsEXHzTHHoCFrZWjK4jgJjJpN1mD2QFQFd5sVLadd6cY7feTgE3",
  "key39": "5oo9vvTxyyZ9GfezPFWpTaBPeRZDZdRysp6Fo84bbRxD5yJrgJ9q69UqyVWuPM8ZmdxbhdtVFmzz6K9TDxEuhH4J",
  "key40": "2zLKQs44LTp1R9WuHiw4UaZ8B9FKT84ts5Un8kCSLvxDbwJTYSmEhEjxwAJuBpp7jbFhzC6M8vMdSbQUkm5gVn3X",
  "key41": "JXdbSheSu5ZbQ7N88h1duceJcTHRUiJCcqLu6sNQvWHbU7QTDTEUUKF6rykzeoW9NvmSNBFa2TqBvRyfBJfinpm",
  "key42": "3oDHM2CqNwEiGmSQyh3s2ZgAAwqvh9y5h1ssBPRqvXekXKdfhMuyHU8kKXrz7MxSuEta5fwF8ygKN7xxuvxftR42",
  "key43": "4TpiC39WZfRQs2yjg69idT7icJcGyXn6wnCdQaiGvtNz2N9H7YmFuL47n6VYz4PpL8FRkTTx4aXBHuvmAaNrW9kx"
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

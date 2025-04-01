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
    "3iVNLo3ufr3WoaQLA3MC31Z1Ho6vaDjUG8VchTpHKNz661fb6CXnwC9we1Ds9FDHUXppFBAxSFT3SJgFB2MoQtGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZfGiobuJm9iaaifyM4c28Sr54oTAhjJxL2E2bGctENTAf3hVV6AeY2amBPG3yuP8qoGJxoFATWLdMANeguKo9q8",
  "key1": "483TrjWu2sxCNkjR7AxhAoYymVP6264RFTnCz5iwehxNJYs8qeVzBCyzqRYe5unFcXkJZqZePnjh13xv8fVzS6qm",
  "key2": "2Y3VL2LQXGwryYoPXHaUWGNpsh72R9QwGpbpdyFrvkTihbGF487Ke2jPdqkzgSTpajeLzkTPaqfHxENPhfs7rP9x",
  "key3": "67MzF4G5YjqR3DqbBZ6GVofATTDpATdMqwx99f4bVAN7XtsdV9LUsweznZJb3iDz5HGoA47wSM8gBsfCTguEYcba",
  "key4": "3t19SPGk2TqCSHiAreDT3ZxLBtUnfxrX8ttZSVyMnocaAy6hhXptfk4tDTdKDSEv7tWQgZhMUKcH2nMdiJ2mN2xe",
  "key5": "ERZPhAjt4yfNsY25yQkriRXG6kmAgsdX7SMcB26mWuy1YfC9tEDjhsSW7tz23XS868MaxGDyCR3gZDeEUw8NtrH",
  "key6": "4fe9YAnadwRkYbBBdseLqvpyJMpbT7JvGGYeNQfzfYuEhgr4Z6X8dDiwzwgcQ9UfZpcs3uQzfJgqbdxwuors8NDe",
  "key7": "3BpQaMhYRby6vUQUYzsYbSdTHoeXmh9TmBFnJQLWsYhMkpcXR6ZaVuWqM3PCnJpRFmEBEv89uiUGMHSuHphwgzyN",
  "key8": "5dVdhPdA739NzREaj69kvuJD2CGBUVyDcCr8QeYRKVqTnThE7NT64M9XJiLemE8AZ5TSLw695nqYFR3goiUwrNgK",
  "key9": "25gnBNfg3v9oHU5wSDA6GbdTrg445XM4bKqKn5nkAsnJ7ZT6HhBhnz71KKGYPDkdPR68ES3QLKmRKAyB1p7RnsV4",
  "key10": "3EFjj2ehtMS33eR3dgozQCcZhgYr13eeoFC6aRrxiiqpTKmxqDUtme4V1yZciVfiuVw6bkeKuYHyWsndkHXeNVFd",
  "key11": "4hLk4zhTy57NyPZJkF5xT265gqRYr8PbbhJXdTPFnWfJTtvk8gcRtjCohAFNjMob4HJNoC43Ewqxq81JW46NT1rF",
  "key12": "4BKLKiJfTGFxT4HY54jp77dvGSEn3Lk8Ypzxt6JBQAx8vvfRCWHfqSzDZ1qac8Yyv4bTYkLcizkYHNSEnBZSzEeT",
  "key13": "2iecDKQ34MqCrH1DiBz7VmgB7aPrL3KJpFKRBt7G4DYQF7xYAAZC2jtqytJZwPpyvgM1vfhNB5MLK4u7gV4hnWHt",
  "key14": "5C9S8SKy1cB5aen2YafdAiUpkdozKY5zWxYqKogcnhjWFnhm5DXDUBeLvTkG2jefedYLnsWnnoiC8XpgRFZ6Aw9n",
  "key15": "5wWE9nVnbjAAbuPHJEK66MBJkra9XWa7JgAW5zaxAbWayXSqNe6FpBiooyyYevDAgKoSzrHxAUcYnBuaPdkfTEQD",
  "key16": "5CPZGJpUTxq2dPg9UR3ZMnGBiD76TVniyb5JBYkAsBG6AsEwVeBeiyg3MnD79GETFJjrpijrZt26DxSqMuJr9nKL",
  "key17": "2ZdVrMuCmVe7Zv7zU52TtHNcpvmfXUvZaDfNQS6ncptTdbjq4MwiukoyJt9TmpXJqnGf6nbKzguFkeW9K6oDj2Hn",
  "key18": "2NkdMD5Bghw9mcJbmdBZD7wo7DvxkJEamzBxMe4phm4eTMGXsaQSEXjwXV2tmy7tTQuWMfJZdKzXLpRUjFydBY2E",
  "key19": "5Ru7BU9pxZohqf1Pgkt6PZ7qxCMZsYAn8pxnC31mzraDpsu4sD2CMchjUJkp1SiqaG2vSR2KLVRWrhTKQoedNk5G",
  "key20": "2UQD6FYPPRL1uVdiXYhJQuFxboyTSwk8xi158xWknZz2qJqzCVYNFn75jqt2fSfkevhu1qP5rWR9sB9tX7MHK8Rx",
  "key21": "5uuvV4VkFtBopgz75JV2zZRgx8Sv7dSwTMH9mvrzGuqFoNjJTwVX4P4aPWU4TA494qxuDm4zxhe3G1FBfnNxxrxN",
  "key22": "3r8DZ59askfC1bUajeGt2p1e5xv8YYYQu8zDLbam5xAeWDft8S33YBYqgQQMsuCaVF3fddPEPsFfj69zymqUKw98",
  "key23": "4MpeKkdXpypUei8Hx3U8fkzXD7JPWa886pFSiCRf9T4L6TvmwoD76J73PKyk6q5USjMzWyTNpCnsyB1VGiep3PRU",
  "key24": "3v3wkAKgHksAhaVSS1k1svYhLqwct64MnAN61XSufU3Lo57R8ec1aEAAH6Dr79ekJUrRcQW37YoDB2PHpA7bVNgW",
  "key25": "JmQghH8wBFCckugjSv9nwNVF4d5r1jXxGD3imv2a1J74ULPbiYhxhYPV8m2kUiAHdjpLazD9AMbZtrreMdkyzMH",
  "key26": "2UQNemAwKJEKJzaa3wmycpiGWM3cxfKBGUHA9XoZihxHNv3oSDN37U1CoKsdcHcYWZyfUBqhVMLQcyi4YAPjaX2J",
  "key27": "2YaDbV98XPEzcYH8hjqkbyzDynThL8aBp6EDa9m4FKhtBYrHJscx7Vkfq385LBQsKUvAYkM4SH2seFyUHbJSt7Bf",
  "key28": "646V1TQRyNYLgZH8KNM4oDXWxJ72C77Ua32GHJnjLYDAsxKz126nM9N3SnYqPsKiBAdB6HcmLieUTMkpFBunCum3",
  "key29": "ECdg1dDW2Sqd4su2psRDiH88kS98Mup9YY5id9sg2m8cC1VqoHXdjxmNS5MfPrE7MMa5s2DkdBCLBsuHVX325HN",
  "key30": "4AZ4pU18Zk6aDUUid5BakGxn21KUPCgGQifbmW1NgWFHSq88WDmpgVSbBdsxzPBKYvEAwiFeRRF1Vn5JDGPAcasK",
  "key31": "4d8jWmCaT1PXKotjkLvYpfx1ci7LQr15c4cEKfCKmp1mRrniDLkvRCTeGwzTUCe3nXJZuPSJrwFG7fihWDPHzXC8",
  "key32": "ZZwpjRxaCvyBxtwr5h4oQA1GDq8oYZ8x3yegFKhYsofqbZv2Xt4XkvHX9uBSKQjGNDbV9gJcACf77AnVybw3cPJ",
  "key33": "3mwhsXc3ethHbYCHFn1UE4AZgS3itv55Q8LCBZAWksB81CcQ5MN5u1Vu4BBj9xQRbvFM9BJ2D1Hv3BtZsw4imSzU",
  "key34": "2AhvDRQrwu1rkjkYwS6oDbsSLMDHpgcbH8K3gAJA3cx9oW8ai7sKXKFKsXEHJXji8Qmr4kXmtrqR2WvYpyRH6Cnn"
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

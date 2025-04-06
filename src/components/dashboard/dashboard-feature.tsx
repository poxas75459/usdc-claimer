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
    "2voxvjbTcydqPxdcpbw5Kf1eug1QaCPXEMdR4pFZbErbHxRmUKNcMUbrR6wLY9C7z668MjHZ3emZPtGRfADzwFuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxr9kjux6E1PDCX2wKH6fmvxAbVZWMEUKuZke3Yz7a7rrLPnpFtogWzsi8MC8XADhf8H15ortrLq6pSCfcxxmSC",
  "key1": "2cT9fasPLz3fqYWSXp7dPeT5UiREeh5qEAGdmBK6yPW1UDZseLRWTJS4YD5JyKEWpFpMPJwrn4BuwdTQqo37ziaj",
  "key2": "2X3hGKEjWJMXsiQrRdkqWLJNuhh6XhKXpkFJd9wTyMtA4WvEARkXCZ4XEDqgjqn7HF5Z2T2NbtsUjTz4MWyVg9zP",
  "key3": "3W5EMP5RCypsLw6GsgXsBubNLGb14k1Kcmiqzu6RnvbC1KMGDJNwz6C6Tm5waEzyE8ChwRBzJGgD4pxUrry4At8x",
  "key4": "5iQkWMtw1TA7nouxa61vbdP7AQKTkH1QQHtNdhPQbC5STt3wQgqRNtGWWkzANEMtp3QT4UbPUo5ZU7JPQy8dTD1o",
  "key5": "2CNqxDQWEavB4tTgW2XPwguPNRDD5pcd9iSFAy92p2uV9KrVWyqw1uZWHkKuFCQ59QMNSHPfJYfaYUo72piu2aXS",
  "key6": "EDcfUwFRjGUJgXkt6ihyEZMvVZ5N3CTJK81R8wsS88byWiZJWoRYS8umNkEYMk1v731nARNhxfFqQQrfZGSF73c",
  "key7": "5apkuF7NrLYF81mAtdzPL6j6YSCTBy6soDDDr9sAkRgommKHk1pAB1jtUsE5AgXU7Q8CxpTn1S2icKSyB7JQpPzM",
  "key8": "52uhFR8S3ciAQHKS3s9m1tTxHtom1D3P3hEgSu9JBGHfPjfHXNS1fFeMToopbSNDA4pvnrFeBWv5a2hsNRdiA9Vp",
  "key9": "35Dgew5UV6iR3Tuy7CUtPQkP3p668mLV2SwFyTqG5gf1ueysSkPTkESGesL6kCHX8PX4tqB5MwD4xRLPDsJWZ8ro",
  "key10": "5njuw2DAPeKiHpbCkGUD7AYTdV3oCsvZtbXiGvHMLZHK3toYW5bk5oWYfDYwUzS2WfGgxhNQrrWVmzfwLHVPBXC1",
  "key11": "5tfiJtsS7vnanJJTXzaxhmFjFBCTjE1RuRLt1drjsLf1YCQKoa2RmC7DAP6Jzb5ziWe7xBcXxNEtjRpJuVBnjHWR",
  "key12": "3383n2Pym1Fu1din3pfSaz3Gq1aU9NSvxq3usE6nprAkoCMAiV9tRnJ6qimBL5j3KrUopGa3UH8KAEGeRW3GNG9v",
  "key13": "oL3i5WTA731GANPuYQLYDCDpgXbC7968n31buYNa5v6qWfKS8KyuY6UFn6DqbrB9DKVJWNzqfmnPshLEKifcbRA",
  "key14": "k4swoa27knm4wyXkRQJ2KCcZDw4RyU9MSLJQWEhhP7tqbcfw9N7mhK1L4uYH8sruATN8HGoqmWwirVuVDALa7sb",
  "key15": "2Pw8ZaMgt51fjcGBw5ow3oybYPGFFFGNR9mvYB6nDWUxNCF8K6Gj6YZSLC9FRfaMzGmixWfXUYMLpkmGMbuKej5L",
  "key16": "n4KKmxRfr12sLV6Dbfsv6jWUmnovCcSoBA6sjJzN93nFb94EQHRbCx5cBzrPmXKYo7DwFdd23Su14xu3BXfYVTq",
  "key17": "5KaM8gdpZm7FJzUMsL94B6dL4UKANUXMJKqJjnmevfhrtWoG1gr2qJtMoxK4jodThThFxxtpxSsHeCqWVps5Pctp",
  "key18": "ApuHkicK2W2s4SCnjiVeu4SGc7mW193QuFb9FH2zJ7AicSaDDsaswSSoM33BViLpNZpDSdpQC93SrEqcaUVqmTD",
  "key19": "4SQne5eCNFLLVteEkG98SNwit9BcYpVGAbUnU6mXTY2CKwN6T68591YBenvgh76WepXzjbfJricPgXQUdHNfurox",
  "key20": "41qWoHRWDUfc89nkZqhvNcreroGPPB6WiAtZvpfYJV4VAc9Kbbin93NQ2UdtFcMVHSL3skhiBro6iyqeYzbkyVY4",
  "key21": "KwxFv183bpKRxNCgqZycADyxtxK8TPPz8dRjqzdcXBvDDV2QSqj7N73J2wYN7KzsXYzbDvbXURsbtuLTZrJ2Qtu",
  "key22": "z1vripQtZmLmQS2kEYmMmUTWXVRucRUK9eDWsPuzH4LtkKQHnZG7fEDVj3Uc16msP6UrbUoX89XkXnC4vu2bUkg",
  "key23": "5ugoMBqaeqD6wjRGtRv6gWuGZfSQcDdfZayNczNaWYMfk5aSBgNAw5S15QWwEfF83Z4GWGZwXoTrmkscuLk3oN4r",
  "key24": "3ruC2Ze5jUt7AzY3nCPNCn9S1HnSyat9swq8kMvUJJrAMBVjemZdmHj47vbqWEXXYJ8tMRT2Lm9Me9Zyimu33p6j",
  "key25": "66v1KH1ZXKzqB79odxqkshp5awpTYJ3gS2tMrbwsHGtboXi66p5zVS1zvDAqpd7U7Xkp55qVPTsBgfNyCsEUp1NJ",
  "key26": "5SY2YABKRtJLFMHJKYbpqFh1iP6VT9qreiSm79RtvMALykaudbSfSTqbQ3nSbbnTSF1GGkM1gAQ2SPqgPQt1Ta4E",
  "key27": "3DjbPkcCXNpwyUPD5iof4BtiGTKBWRjKB2WzE9nhqQeGbC3QwikG8TyDL4BSpKA4tBzPH52GsHcFHd1SFsbyAsBp",
  "key28": "5fRhhdfysmyoqoV53FZCKxqLTrCFFHfJv3uRNm9B73Lj6yijSbT21JtDGvQ94uwdjGeNAxYnZtzYuHzGo4Bo9sjb",
  "key29": "34ZBNF9RkyEBNGb7NqNnL7hUEox9BRmT6BrhoSRHceu91P88HtbyKbi4HvSCvyGHm2SXjFiN2iTvPRJGRtMkaxb9",
  "key30": "3RApzMbJV4xUNydXNrvC5vcNaJWZ67BJfGumyPGhB9NffM6fF1mMvhuLAjeEzomVLfaSJR16eiPuKwWgkdvE1BLy",
  "key31": "5ENJtfv2tALdZy5WCGVY7on6xXj8W4sssHQ2JP19r24kk8FHAjBFgAydeq5owSgxKJdRLurQDVvAZoKcjATZ4BQd",
  "key32": "2g58eHDtbmJrWsGX7wfVsYVLRe9hj3LwYAoVUQNKDbEUotoVtWU6mFVJfZqAhK3JnGwo2kmDWd3PhzGuqZiQKFry",
  "key33": "2wwuNunTGjbdDiNjGg2SraVeu6TVgr7ayN9qt13bPnJ3c4LYCxCduks1oV8UpF9oxidbADN5bpfmXYjbRE7jeEx8"
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

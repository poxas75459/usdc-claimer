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
    "3Kee6FK91omZzY6KVucsoGXUSD4cVyNKPZqUcfGCy6CzQmqreu8rXQxaNFQbxUxkUrbsFD6xE2PUdUVsdNdeWRRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32twPdcctZqdubzowyCqodBfGwaRhN7qw1urEWDsvbthU6nV1R1SByeo3yosMMHJnRksmaK53PtkDD2Kx7wN7ETK",
  "key1": "5UdpLQJJEinSMUKFUPq1An8u4GEPd5TMVkAxQLJMcpfdm5kvM3K4eUYKWFGTU3FWSKwtT9k4Y4ja5U8mw1Sq5UfN",
  "key2": "2t7hMadQNSQmrixnsX3E9M81Gy1URq3BerZS9vxuybQLSdgrcALR8uKexDzuAHfRoTRpNUeiUPvbGcMgCiQ4KrkR",
  "key3": "FU4Yp9bfYaXMzizaXPj82miS8qML13qVgWhtkHJjKdYzH3R2WUhXVBMxNcA3QJkbYhtdtFQRAkKY2Asrhj3swZn",
  "key4": "5qK73v5kjLqu2Ldmg87dvY4KBtRQijyF8RAcJDyjPzrLBKhXkgmbDL2265ZPXBjutPchg1imT6uPSsUsEVk4fPL5",
  "key5": "3dimow5AS4dJFeSbimUQ6YKqBKUoMAhrL14Zea5BYnJWKtdPBLLPNzALRY6oCBf1jE4ksHqdCSEECoPe4uSbdP7A",
  "key6": "3qUQgwUk1PZRVNjcTQGtsFSAd3VtsNmktEeZyuLZBB2pRhsoyVc4CnfDdNK6EwQqMUcHcNiYMdtiQQFRrggNTf7t",
  "key7": "5yLhNcF6LxbBWEU3uoe4MXemafSffxB5WMBhCN3fN7QZQj2RggF5yxvwwgqbDihLK2WnA8SzvXERRTQbBwC2eca7",
  "key8": "4MJ7TDNTad9tvpf3qwiL3iKCzqiQ2HgVo4izZRqvfShUacg4fB35TvdE5s6yTHVZ8Qvk6aa3SzTzjMf59TAn1TqZ",
  "key9": "42psPrKZ3naRqn3WcaRWar2u79QJywYZaeKJQGLrzRfMEN7LLXe2P3ypJRFTRVn3W9z7Ff3nni9DvUWv1qF13UmS",
  "key10": "62ShqtYjNGrccyWSGLC6tLVLu9DKLT95jvmzASFoMC8wcEjrSaoonVigUtBio2roHEd4S6G77JvpHGzADxLpkfRy",
  "key11": "3ZRgCzhjTtu9AwWXoTGM7np5oYvbefcRF63jXRHAJNfQy3uECH7Gtr8BqcCM6mSQNyqCRFgfYNWGp4MoejcYTsiY",
  "key12": "2VNVHEMNxuDKqMeAPmm1SxaoEDQ6ALzDTsGLyU9VuzED5h3RtG8wdu77nJ3nk5XL9b5bb5LDiBJMfsDZSbED7ryN",
  "key13": "4KWni4V7mXS1CRJhN9TpWxMUfMhukpyQTPo4m9XWajzPWJLqhR3oTPSM1WkhcFVnudNGpbcNeV194uTx759Y7YNj",
  "key14": "61YYf6BvynBxAwqyhV5rtowXbzipadv5GwK4kyg9TX3R4J35TfmVhA7DUxe9amyBayzfSpRtkx2E3biR2rVK6Uvd",
  "key15": "SrEWLLRzGcngyzsHTVWwCUQctpijdBhs9CaqZTkvjiNAp9YKKvgLGVezM668bBzyF9P41rGSXGGS8Pe5qJWGtDw",
  "key16": "2U85vshs7orYnWPbASEEhCekVEBGxJAgCHX8Qmha6mFHAEwEyNZ1RqmK79CrQgBX1scuYBTwHmzagGXLxgekH2g8",
  "key17": "5wDtfNoHDE8db2c4PWUXodXh9wvCFNFx29NYtNfy36mh8xnKYXm526fn3bFZNRzs8vXNu58nHFZf5DiJXEhaPhwE",
  "key18": "6xvS3mMoTMVxNNboao3DmChmLYsJbwttEzyZGGPP93Q333PfSk3b9kjdD4xP4qnm94SNs2VxbYqr9ntRXyFdcJY",
  "key19": "4g9WEKHVEUpNaJFiUdcNhd16vmyoR4tqPUHQLZHJfdUic6gfgFDpMkk7VtQgsGtXR3QfBtzm7c1rLn2nQXwZWzNW",
  "key20": "2jFnLZHt6zQS3Rp4vM4duVHjAeg3edVAt8hsxhuLLRxWnbejorcsWMhiW2S28xRmjvu6AdtVBYbHXSAng6Pfcfge",
  "key21": "2zJgSsQsdtE4m2JFT7E6RWCdHVgMzqV6s7HGm2HGwHxb5wQDcazajTUDMEHUpnDqgjhzrm9P8PTdN6EwXyywAyX6",
  "key22": "5qYwEhq42ZzVkDSamPrvjvf9xLUT4fHfbKG2JBWHwKMoKJyRk1sDjD9LCzmoEwoF6gXuFZKTfecftzc99srs4wbc",
  "key23": "4x6m1vS2YoJaoETt4vTb6PQdyciaYJNPPeFJLhoPNVSYACJ2mB2oZi3uFTrvZbkd2Rm3RzdveJ2qs1ksd45nUspG",
  "key24": "3LZaZLJGHAiF7LHB8p92MyAAXigACVTkw6iEipPPdknj3Jx9cZC1dqZix8YeXxTARzAHpxC8XtVWpCDkeYPEKTBD",
  "key25": "5ffZYwDi41NLcQ1HRegiQR3Nd9SCfNxCf49PWT3aHimnEn4PJVSG3fCpcZGUpgTpzvFANwL3gNvfHHayZEw8Us5o",
  "key26": "Ji2YDd87S9dK4ZKpnp1LRx8BEjTH8aTMiVJDBwcAFwWgKJSjbUiAjespWped7p6U6sibb49uEz3fuJmQbr1Zmoo",
  "key27": "4rVyt9LWCiuDbej8Y6Z9BrNnP25NGADTDAZ9Ye61iVhC9LYh9bpZSmLk89GLUp9kGX1GxWn9tnxK71nNKjWqbuLR",
  "key28": "4oZDR2oYciD5PyJ2eqTjzfSDNY2dpGnP2Bpwi84L6wna623dN2X1RWYzfmj6a3CX7RJSH8JXKBBmiriRuX73T42N",
  "key29": "4sdP8ANKkqkJ4VvTqww6LsUQbochZ3Hn9CjT8NHsp1F1d4fbteXNeFrfnL9KgbyY8PWvKgViXAE26zQXkBGd2pky",
  "key30": "L94qLoS4eHpR1xPupMdhfGrvYENdpTvyTkHgrY7qSzTJERQuJBtzBvJpZMVdGW2begoJvQmTWHobHG25MgEfpS5",
  "key31": "2ey2FvZ5exCatKEsEjTPES16QRNK7Yku1QiCwCUUykx51g5n79rh2Kmp3p9mPwjQZ4THg1wQrk3WV4j4ht8Mk4Ga",
  "key32": "3Cb6D2JtAmaouk8r5TzPLsDtJerQ5zzHAhF1VKMZy2sm4jyGG4dwXFvHS6hqBeTWBNmQHRF4Ay7bJeJXm6L2P3cK",
  "key33": "MAxCZsfncMVnMbZVmBjLnuogppZt9GbVoxDbQgeedaSwjUyC1gZj382SgnfeoH6Bz2motosKNeg2Nsk465TbgT5",
  "key34": "455oVsxPMo4DW8tkRiDc8fNK2ATwfBSRiaurqQzX8C1UePr5FarGiGYKwiG3iRmkpq3E6vj5W4aPSQfwpq8qY2sk",
  "key35": "2K4YEE3yAQt5c7Baqy9VAX7khmQzBtwrorcPHJ2NoZkvmup1D5eQ74iz9VUa4GVFvXbWqq7hmsmNB7tg1WuHQjCF",
  "key36": "3sacPWiyS2FWFitJ9JNwDAL7L14JVJsxYrNMhRqRhpAxeHF79F86dptXTzFc9Q6xuDKURCjJYDAdJ9uUiEGGuoMd",
  "key37": "3mKkCfKcUqS1C2qrjSNW5sLnZx7GwqEMQPzHVGtHcgCov97j1oERCiFEZEsp1qd4uexbAnUTPohDtHy9kfnBEHrS",
  "key38": "24za6Mm53UFV4Uc6DFi8YRRC9F7CwEjiPAXrb47RqZdTrs8MMZbTxHmLD7HeZmaFKdJFevbJBDkTQjeHDRbnqQzX",
  "key39": "2FjrpvcbiuXCSGf5c6YdYDFX1bBVcTza44vA3ue8QQr4hsLoSrAAKPYyF9WuRSWcnsaoG2oM1wtqSrxMwgPNm7QQ",
  "key40": "25q34U1tJK6AxVFyffW6gJkaMr9S4mi2ANHr6LppATzT7s3XfsNmSSEPEXKBck9NyzH6Uzkvd2YCZeXNJHtH1CHG",
  "key41": "44Ptr4DxKKk26wZUWX1SViDn3bKbs7eT5oYXYiJFxdnzYsqWkyC635QjJugGPm3BjpNZReYecKWxvymgE9CP8ZAc",
  "key42": "2g5ERo6V2q3WxjVKCC3vbsZp3ZmeNtf9L7km3yeNaM5R2Vh1JAJpzwoKq72GgZorCGRD5TEkNCknVJ3ALkL5JXRC",
  "key43": "3Td6Jiw22BsFE4yrd6cbkBnqehJt2Fsg7WFNMiFqfcQBD3mZK4mURHWsrHJwyG5Ej7udTVaCTEMBeYwbMWCEvi93"
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

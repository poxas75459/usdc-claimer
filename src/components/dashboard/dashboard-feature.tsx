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
    "589mnGvHsqbBUfn3iXTDaaw1xJNKeNknpq22pzuRuDtPjKcXVj63KgaGD1rTo6TQLyB7FhtbkWSDfw7jfEWhr7gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TXsEjwgzLHTKUHzrF8YaCXMR2nSYXrNFV52B8xdiXqw2S3KMjyydk7vR2nK8Kig1AwaxoGsB75wrBHKJCh9hVqG",
  "key1": "j1UCvgKSSiHVqHSn3dGNSmxi28hhdQQ11bKEH8BMAktusQKcng78V4RqVaEtHQ1ow4UTdxn2iMfUtqhENfkrYTG",
  "key2": "2hraEmCBdVxn8yFjW8qBda6WnQaKu3FmTKRBB8pxYcRj6j16sSk6FPfGa9e2rVcByT4BazHXtCxE6m8igJcgrKLw",
  "key3": "3MChSwG5uZD1xKhHKmykyb3TXLYsHNLhHYi3FeQTSDLrfw5ENrWFo3WKRFUFTNFU1FGhCuAvAFP3nT5vto1WcovF",
  "key4": "3WVj5xKhXm1kG6XLWLZ8mJowRVxoM2vwyy8ABoPhPK12ED6mtRqnbgGxrePiF2NdnrjHUvvsfPT8fz2v9YEeAfs1",
  "key5": "Rm7S7hj9h3JBa4kqLR3bBHz2HA9UMQWBX8YCq3uZev34C9Qu6aXsTvxeugMpXEoMNzGFpJ43sMivEJK2Xxucz1T",
  "key6": "5WaQnhiyQ5iaJG2vQbUXWmsLet2pLezzZowumfnMCeR8LSVXkonNkKsyJJnEreFwtmc8k6GxFzomygBn682CTRaC",
  "key7": "3kjdckrnyyxrWUhSERTkie7818c1Rv57W8BBsWQdadr7B1fQ5iQuReb4DNotpwitap4PLgXzkvn5JczSz6puan4L",
  "key8": "2sLVfWybutX92DnEwGkDBcNzMJdxrxJfmr1eoovM56zACe2kDTQ4ZKf3vvvSSsH4UPif6XNXManDb7yQFLG7tww2",
  "key9": "2fqQ2Sk6zvqRxD5yG8xv86WgGdUuqDMGyYH2GLnWYL6veAPqHv7atWPTicgXKJuzAbE4BsVsrXUSuVRVGKZChr9M",
  "key10": "64eVZZKNrZwCinFdEEJU49LqAhHzMwsEMKtCF6skXeNpVzZSBLTommMDKw942vmkn94HSxgXkWEgnQchTUyAGoqG",
  "key11": "3couJrkAYP72znAH39P3wx1vXePyh33veU35f5fbT4aLSJCWsRZ38PanVFK2xHCH3ztBRkWWJZRAY8dDyz9nCido",
  "key12": "4sYhPrXGwesVid5msWYkwaMid8tgbLEBzuRBV4ak13i6KhnWKpWix9NJ3qtM1BxJ1yX8Z8iJfjfcFRVWNA3ju8mk",
  "key13": "eqMC9ogUQD55JMz2nBjdUwzwYFuEGUqUvadtZep5j5sStCvdHtj6GGB4NRwxfSmGV2YWAVu6mWb4YPrqwwxQj12",
  "key14": "62ci2RNptbvYxQd9PbZEBG16iD7BMFXJWDhsosPaJPBdVaoE5p7verv1C6k2WXm68M9e4YCkdfhAJW1YBWmU2Q5S",
  "key15": "2jtjzxp6tNjyBJKEcSH2FMKwHV5CunAZDYeup3BaLPuaPjimPhPnNf1U2hJFh88bAHi26mUsMSCeoMFNmMfsBDBv",
  "key16": "2G7RNwNmgBh7hMtFrRDZ5NwykJuMUvwQzzfu95Db3QPxMAshh4F6AxY7ehZpMJ8ryt7CG8Hn39K92YowWhoMpHoj",
  "key17": "3DbBZJoird6wFe2ZpNAa4gDiHTsquNVX6U57FkzeKgx9nshfwfuNcCUSJej8qm1JKriSf5hCtph2yGYLNEiS3P4U",
  "key18": "516eatEktQzbxZi8QxvUW935ZFBmKSt5HA7UGfswWwsGMyVWz1rbD8QLxsVGKPE8TMFemSXzCuqqzMqK1nYiSgx3",
  "key19": "5AoQjJyoPayixk7eFFSkLsGmWnfDfLqmpw8TyhfAKwwb9FfsLSvti2hUucEWP791Lp7RQzYeyLxdWyRj7J5KJ5ZV",
  "key20": "3p5pNnS4GgkagGURFFpxnGVZWKoUPqcHeUsuSRxHvqWATnYQQcf373x1K1Y3eoA4rmJwg7foeyHNbgYHvZpsafMh",
  "key21": "476BULeW2Ud5yHJdoqgj7VcKFBDHSoXiqsu68wuBuMgS962uYtLza3YAQ86B821LvWZVeMGf6WtitH6QMjXwocNm",
  "key22": "4bAH533vd2o127gYksYQJRxx9pq8RdARCXKQH93UmguLophegTjgx4awcfjR93gXRfSkiymjxtcThxvWSURGk8kr",
  "key23": "4Gt1v5krf4SpkFswR8cszpWYAhFpUMM9EzgoQqwjNGxW5ds1qMYJADg5ReAbryLLnh3tHN4Er54WnGwpw8Mj2yCn",
  "key24": "5bYpCodn92mGTcHWiyfHrV1HprNjw5u9HG2d8KyE8QXEQpn9m8A6ALFao9hJvfbc85NDVjG2AtKrDX9ZrZ2gHxda",
  "key25": "3X6kedTsD5ZK6CJM5TsyoKkK2VbreY85EjLDNvmvfe9Ri8b48sMWB6xBGXtdE2jsUrj62d4EZvrCj1UEtgetmmvV",
  "key26": "25MZWJurgjJwqZ2xBJPzCiSHPHgjGHLo6cKQhpzNtZbjZpv74qLhN4i1AA4qMSQfKGBY1E1PVCRJKgbzRCKsmDEc",
  "key27": "51n86vwN2UfZegJGacYG2kRVHDUCrjp9QEsD7VTe9ftcmkDoU3wWTinSfuJSdSzapTLUY7Sru1ib5z6LjKY6QZGM",
  "key28": "5VoEQNRtFaZBVLudDwKCm6ufwCnexCHnUQAGkwCjPPZejVkcUFBkzQgiKN46bqp8bwvaJvL8MUBV77BCwprVAmCH",
  "key29": "2ZCWgmyNXnymCCpo5VLpYHFG7bJo1cEbwkYf9XaUDVhySgNCRBZQ9i88fNuy5235KdPX3ghXEUq1epomNLrAw7bw",
  "key30": "4S76BPNCYL48f89FJHJeNtzSBvtprxXqZ1PSVeDs8pCdxe9ZbdjdQn2z48zMU6MAUGnCCP3efYz1cnmxviyV915V",
  "key31": "44erVGQ44RqryRGhfWn4ZMNF5Pm383GkowDdTF9i8wrV17CNEq7CwPhohHUt1iiULdpB52gVME1BLBDtwtz1rggm",
  "key32": "3Jx4EYPj6F45XcdHK9zDnuJh47enD6Z2xsJGUAtcYex7RFtGGECxn53D9r2Rjsr3Gd2EX4ya76H1APMM23zZA7LV",
  "key33": "63WCH31B8E7ZaFboxS2nVBwZxCkaiGJKykxWHHzRZt9gSd3GppABQTNWSFzEs3radjbpJ5Gm8ns4SGHhGLCx1Zwk",
  "key34": "43jwF4Zrm1o4Hjgd7p88zn8RspKkNGwzHW5zkSGz7UDF3rZcTPPn8zmUPsYHX2oMbu4ZYzc77wqDgouUbA9emNor",
  "key35": "5JZmFvRV3gFFhWceQpsmx3mtDhxme6gdjAgtwzozu4ZUjJhormW4D46SiASFtHSDHktT8EubvFzGHMRCsekqp3ZN",
  "key36": "3tUub3YvNYrSgrS9m4eyY4rwnZKL3SVnPvvw2DrJTVxGbAuPx8H5uv66sybp5syzDge4rx3Z5rLqzD6aYkWencHi",
  "key37": "2X8gwQyPCDnpKJE9utP6jgHqsTW2UExJd5Ncpk4iD1XBgMqerNB9aaFjsXnAUxM6KhkqeShUfzXyh2DXGk7yXYUJ",
  "key38": "3vcVtNVMNWCMDF9ed3uo1xD4DiD7DVrj7qBa8yjtrB9rbB76cgZHYeERsLuzYhZPd55vJQgSZGqjRW94mAMAbeZf",
  "key39": "5Z3GTVrrfa8NBJZhTu84Znd7NsT4HYSLrbMbeBEcxz473hTj1D71bWerYkEJwaDzMp1YvN7e7ghPUwUmVt51iTgk",
  "key40": "4fLjwPxQW9wPoc5ML959UNzPTsy1zKMKd9W7bbjrtZkfDS4CU1Jh4XDa21S5dfJnRS5zjDzUqW6EiogzmAPVfDW2",
  "key41": "4398AooC2oyC9AHtd4yjd7jNzZnCiU8Eb2tFUyzHFocvJyR6GYqPFoZKGkHAe2MUeuBNywQecevDpiuUJtnK3krS",
  "key42": "2WccpnXVcb1xFGLY1wcMvMnjZTApmHbTGftffXMyVh7vKiPCi8bcdV39ZjFThmstKsDNCNSbhRj6vXske2A35YR1"
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

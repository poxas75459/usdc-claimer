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
    "2NWZcmWkqwufSqsot7L7LkrtLNMyYMezxg9hrKUqiiUdEkfQtwdsYUWAHenpXonoFJ84zuFTuf4Kfs36VSFyf6KR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sN5uyRcEtGSQywpVnCVsPks7km8gW3xdPD8iqbAFrPToLgQ6UjxpbyzLX3uNPPRRM6wTuCC5JMFBB7zu5dUvRC3",
  "key1": "3P8neoPyUy3s8Eq3jSRBdAmGzXVeqXiUHUusNL6SZLvUYiC8FVnaNtjw1mw2DttCdeMimfnirHc1Y2rVvPbj6XJd",
  "key2": "38t7uN1Fu3gZ3ZjTWZjZvu8T7zYS4VHNhZyrQnqdtF2HARE5CVfTT6kDvkCyqRVF5poQRUrnnCh9s5dyFwz8hn8s",
  "key3": "2tf4CSJ2WKda7ZKnAa7srrv4f5DxSxbncva2AY7tBy4DXMFpB1A1ZtUonbzYgNa2mg9nTVqVKVUfCMTtdDAzwX2S",
  "key4": "h9hp7JAnReigM37vrkg5GT7AQVBB49yV6JYQi8aDfNqamJnCDWonuKx2oG2fe5DAQ6td321G9AA7ihCzzcsML95",
  "key5": "4LijofcFtAGn9J5YiPk5Tbuq5hnXSdJrQvL3Agdbjvyc427be2BDN7X9jK2KQvxGQnwor1RsuFJKNQkvoJVfocnP",
  "key6": "2TPw2yjHfa1wTHcvr2oVeHs4M1yy4Gcsp5j5YLUkRecQ1EYc8KvZqRAqpmwhWPFj9jLKu8TiSfGK8WZnwhX1XB8C",
  "key7": "3966EuNVdYVL9n2d61ENbtxaXUqQatZ1tWjtykCA4xyKLLh8VUvgMcSqupmsnYNQh8ZaKrL1vU7DeU2YPRHnc9kh",
  "key8": "3L3w58QrAh5xeMhvT4Tk7BEb9rq2GkhPbSKDvjvtbk77WN4XSuA1htAe9u7Nm5B8d5QMwr3BR53p7xCWSF29XfyM",
  "key9": "4eK8MrEFFWvGnL4DVLhos5MxQ1qgYCx1xdcTdqmyJCMKLbAagJ9ogo8vpi1qyN4da3TwbyZ8V9wU5WR7wPrb8aS7",
  "key10": "2uVotnpQqoKSszAUGceY266ji3xJnyWr2XxhqBKU4uXNmsVmitBExRu6VqNE1qNmivMXcForhgz2GhFURCsVhH11",
  "key11": "SBMVUsVoMnbaSyPzkQ19c2Q2trViTX4BwVhYJJ4kubS3FyAJ5rTvSUShUXxhQMC6j5wkbUFgjXCQHqNcjuHKBPH",
  "key12": "4TxzqkEcXk5egLByMB91bhXbUWiwm3QSBptU6uYsnBSdrjxp2NgCSKh1PGUgYL37bTWcAWwJz3KxBjtH7TPSaJaB",
  "key13": "3DpFjAP4Reqtg5jw1MDYr2CaLrt7nxjFrn2TeYY42qPnLegMu6orpf3ffurDacLPRSvEqimT7o5ehF1ZCdFCxkvx",
  "key14": "4N4VrxdwQma15kB1YDv2SamJ5Tibqztp54FUhhjYNy7ibyokjF5XgdMqabSh8ztgY4vU1D4GVa2d6uSLiUXiJDuY",
  "key15": "2QxFrAAHtSbCaZDiX8bVvTkoa1UAkEHdt3KutaXij6sGn9ysp6B62x45kmfaHirMSxnD4MzhwThqMgf68YWPqinu",
  "key16": "VqqcFmfid2qSbYJT7AsHo3cYJHL2sK6vMymG28BKQG4TmVpBsdLP6J6pyBnDkWPZt66jajQid1eNsV6NmALPPuy",
  "key17": "4xdYP7F4afzYf1q6UEY8rLw99uBgBUnwjs5H9HVuqC59aqArBbA5ReWQvS6totoZZQhx9v1uThJQ3yYSJZBz3xRb",
  "key18": "2jh3oxkLZiY23MWJZs3jMWZAJ8ZkAn52iXgLs2owNVFKQpm9QasfdEALWLBBGiZKNahVWmDFYFDhMEycM1mCwwrh",
  "key19": "4ZitsupY7C6eu6ZQSDVQ5AANDgiBbxeCt8iLgiz7CjxeBZsnpn2gbdPgQrr8VFdJNzFLdbLtWW8YSFKZeLaQ3sdH",
  "key20": "iySg3RNwCgZCKW5SK3UEH5uD68GgewLzAq9S5rqXdSQtLxGzpqsHDAcojZEPJ9qFeDXvKhk4im9GGdcXhmBQdCd",
  "key21": "5y34UT7UfSsNRgQgquzDx7nYCGrTbcsT2PUg99Hwa7XoQjQAVLZiQe1wrGobQtdr6t3T7GWxm1ZQqGb9Surq3FzR",
  "key22": "5RXCqWkdsEKVEGCSS5Tb5uEUeypavmK9Ljqc43849cHRLJgDHAGSy9NoeabB9QSaZ5BgzFGyXarZCXxbNgTLfbcF",
  "key23": "ZztoJnTqRcfXEeQ59voKpEHpUhR5LLxCcd2fvHDJQuZLUsX4RCxuK3kwEMU6Kder2kSxmEUCn1ULAKxcnmTmygX",
  "key24": "2qwo4YYejHyNVoTjFF6Sw7DXmF781WKKR5vkvipcB5TgSYYKewkGdYsogHue9dL73F4vrH6JDcb88ukw46gGd2DF",
  "key25": "2HYheUmCEEDkeMgRJF2Zfgjv2aJ5zMEEBwGxhCdHARpyzcZK7zgSENZtjPj5o1za4vyNua1eLvwh4uxVwBGszetD",
  "key26": "4BadHzkEVfYMATkjNX9w6w4qXDmhGj87aHLATJcycXTj71n9yiADco71ttGUArkBcY7pe3JBfACctC6oYM474kHX",
  "key27": "2na1FyQPB1tD4Pz7ykktBTV6uxKfxXEx9wJjQrWVKmacgi5GgLmhLurFuMRsJnP15bXDNpquvkm6xBuxUADvKR6K",
  "key28": "618tZ2jFF5vU3Uqq4XyYg4N28BaTGgv9DaXjBrggyD8Z3GNMYcjGDt6u7J8LPesFWJh4BYJS3V7bNnQhTE5y6XXb",
  "key29": "5ERaoyySmmU1t4jvvudyXpBHj4Lrw9pHdYscF7h1ZGA9wcCDsPZ6JZ4XzpQuruNa67wnaxib4ye2FsieseJ8xfXp",
  "key30": "1Pquk8LbvRE5qCpjqRFa1pqqMmXC5YHXVPdPTeWLPoew68Cta58i2PHySffkwyc6RuUfAXLXGoajLs5M7UNPhkL"
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

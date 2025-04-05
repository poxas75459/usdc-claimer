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
    "4UjRJD8BLiqHf4uuVUqTsFdv6rrUFzCT5SsDN6kAbAoktwZmX1X45dkP9LgEdU3EcfmF9pZz6QyfXHZDfPXgmVog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chixxPs9BDvMhZk8XuLbCAVBpRu6D4PN9n7FL5o4UjS9xBCvSocdZZjrgkDKGjqq6HEq38t6HFXmyGSX8XzuUqb",
  "key1": "24WNdfqpvg2LAa9pzGve8mueQuJ1HgnjPjrfJiHosY7wNurbgzuCndTQgR1metnTLsjtdAgbgip8ao2ZBsnseb3z",
  "key2": "63ShgRbXiy3JvtgXDWY25J9pxJy7sjParHDUDn8exe7yaqT5mg7vohQdB1KQ2HXAQ4WVLTZ2fpBUekehVb4vgr59",
  "key3": "3QDbMQHHXCjyivMi4WwqDqND8XgMSxZmxdBn8QFpYR9E8Z3S7srMjM5cCySfEqfsXLZdR1dVyd3dgr8GGFvfcdcg",
  "key4": "2Snrv68byuvtgAfsMX4ZL5ZZwkSjrJLL7PXj3sJzJEHYsdp94DkqENggY3Y4URUTXNbegEnXvPmXiq9vyKtvQ88h",
  "key5": "5pixJgxironYyirat3Amm14tW9o7GyFN1EDBmpPQ6Wqpgrd3hX7GyG8dqF3AZKhV8UzF56GoZKha4buRB2sDxLt9",
  "key6": "3nHDZMJPWqA5ZexCe3dwzg3EjaRADNecHT8jAuNGZja8kTNTJTd1tp6UmVpyLz4dKDmRwTqH3A2ZzpPXvtAkskAj",
  "key7": "41tj3JXYYpn7dnewV5JUpCTWgZZx2U3t8CCFazFJabo8UtRBMe8r86NcVuMFFW1bQZP1GLTNvGVi8krZqyKsVbep",
  "key8": "5AUqTfnrLHotfPAit1CFWB8QSaZUPRSGM5VpqUFr6iakK3QTiJZqu3eYpSwmY2Mj2vQdTUE8NcSy4aQbyw7sopsF",
  "key9": "2Vc2PPaYxnNZoLpGjsQeebVGiRvKz6j1iCPr9A4KPL2cYiwnk9BjPo3Xpv7rT4LmFme4rUos7HkrjRsrLcjCd5JZ",
  "key10": "2vabqzYeHfAGG57u2DVjERgMp4Wo3yzCzSYLFy9NwMoZYdPLAN4x4wF5hZoTyzGDAsbCfS2zbuxcLMqig4YQqW86",
  "key11": "3wvjknPJCS3mTKefKTd5dSpMhyZ53GJiAtvTp8hq7D3k9ZeMijtT42RDj3UoWq5TSqywLurXTGgfTMpGicTvAjqE",
  "key12": "2FgcSBBab7DEoZNwcvrL5A5U8eyyeStUb8BbBFUT6fsNXiPwQJaHWtDDaYhu1qW3LHvGWP6bLq9aS5wgQY1CPqr4",
  "key13": "72DbgDP1VQdngAzBsqY4kvRVwG9XVMt2tkd6Y4E7xhuMN3s9xdqELpJ3sGW7Hh3cKTTa5g7Qez1bmZ6845ZeRoV",
  "key14": "4Jb3UZDiWo9WENYbztt1r5rwazBBQknu2bXX5SncQbNytEDiy5LQxRMPN21ndtqZmzWydp3kANj97hXkbFvzApKP",
  "key15": "5284AV2qJ4U9CkxBE8hf4aXQbfUkQ9Jj3jeHC3AtK7nLNm2BKdqJUKVYq3z3aaq6pS8nyrKGbstX9JnvWDtzWbUm",
  "key16": "4kUdLXtwWovSbDPPm4mgvB81avTcDZEN5bgWZSw2aYmEct4C4pGvM7j6kykLKJM9r2VkUgReHmPSHY4jGZsGKgGv",
  "key17": "3eyMw9hQHVps8Laan94WMuK8wRQnki7WiTN1ejC4bAX6Xawf8j1a632a4DBjdgLyPFK4HE8nw9wEHhieK7i3Mfzv",
  "key18": "sDJKPvuVaUEX7owVpeLjCDFge29G8sFxdHxV2zums1zNWvsFrXhqu96hVGRxThMpn5PfZiLbLgnQWu9iY6Kx1TK",
  "key19": "4j7CCSzPDtmAs8bRvdXMdKPmj2FNcUq24gnLvPTnM8jRew1JGWU3CCkUdnut33vQnVqurNWtY9eaJbWUkEAHRJTb",
  "key20": "4NYqCLnKGkC9TTrWZ3MkQsz9vA3fojVmmxgYEyuviEm4ARxFaFw5bio3s8zU9w1ZxDBVUrv7hcbG7dq3C9D2dpc",
  "key21": "JMfEqSdSG92yTJPqBYfNbjaHBJYTH3gqgzqsQSKmZfnjR4KmxqHhem4FuuVUtBhWYCxPA3U1Xt26RYTMwQbTsC5",
  "key22": "58BHiRK4U9Sr8FgbvwLZAExt6SeZTstmHyXvTPV4N6LUzUeTSbcw8EtHHi8w5H57cSvQXDHnwUL4xcxynPkFMHxi",
  "key23": "2q5dsDHkcGx7suzKFHozorsJsrXotqeBnfPQm22XCvs12p1tfKP5Z93xNHsCUeSG8mqAtCpWN6YXn89ckWhH14ia",
  "key24": "4t3DGtM26VnSTyi451y67GG8RnRr36fUw2SzE5MyUVGgeJreWR8K7d5nLRUxZYGiWQd5yFA68tZ4K5BmV5xy6voP",
  "key25": "3tpy8hpawg41o69GZS4xaw7MBRv4LG1gdjV9CWurH3qGGih5rSoVsguHA3p33ghD4ABFftdtFwgU4Rhyciiy989R",
  "key26": "5qsX6QL9xbvgQegm2asqcpGS7J8MiFs9Na2rfAVR7hckJdWgmsZ2gJHyBzrxRBDsVE5H5VmsySWSVKvLXoxPFvwZ",
  "key27": "c6FC5xXPX9dc3J2o2u1EHQS2qGt7ugA4WiEC4VVMxYSv4wZLWJXsBnMQgCjnKHMR6Uy43zm2YMAm8gp8XkGoYDM",
  "key28": "2CcFymKuXyTSiZ4qmB8TdcrpMkXFV3hpdN67aMJgdcnBndtpZdigc1zHm6icSbLWQrh5W4b1He2k4bRFg2sMZt1g",
  "key29": "3ss4suHr4sYLn7svX8QLq64WejAE1osFRUDmUkNdCSQSyF88KRnajtZcgFVXwa8KZtWFM412knmNMG57kVnaiAKa",
  "key30": "54NAT3ufAN2NN3Pvz8NvYnqPSR21db9QEWxBFizrkzgxQU4u9BdGBsiXe5VdtSRJogtG92GQbxJDHfYSpVDW7QAN",
  "key31": "DfSC7HvSzHkFGx1wqdMhWELWv1bbLAofXjRNN564Xe6bx1PATp8vJXZMRDg1aWiyuqeY2Zqbmq9imgbZGADEqCV",
  "key32": "f5pcUGzFPVBLgjPGHcgWAQ1EJdsr3SoUNpQetkTbvWghkc3LR5eUsThSASxbSXPLPZ6D3TUTCWk7NNWYR9RKMzG",
  "key33": "5HChDY4YiFbRRxL8eYWT5Ch9QAZiDwrL2m5JcXWaVtPhKqsgBjyYd9FWMt8PmToNWYwm8bBLAksZWLmsgZV7v9Qy",
  "key34": "2DYtYZvdLGCptDW2dQ2B4GzpopN3MCT9t11vPWmnFf3z8zvg125WrU2ZM9Y33rohtxTFfxKr3agursezxfGncuXm"
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

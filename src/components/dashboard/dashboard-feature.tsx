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
    "2BEKeNPAqGhcgfq4MdF7gpovq4rufEeodSGTKqHnX16qS6BYT9wAeznY34bV8b4t135Tfgk5yqHNi22JJrZ2Yp88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dm5NZppCgAcixp1iAQNBhdkSP6412df4NUq1hAKKGpkxS4en7cJsqprK4H5KHjPtieAnMaPg2a9UKvGbmvQgYm6",
  "key1": "3SoUduSFehrjmb34m9br7aqp8odq8EkKi5d3Su5JXGda8wYS2gznBduVAv67cjKy1TnTKCo33DZ5jQJruh95djP",
  "key2": "4H8KEfceTAAENM9R7Pfe6hLMz8QuDKz9i7ZBQqRPgsgK5AemV9JXrm9kCpAqU6ZjSWgdpiquZiE1ZqgmKn5TZYCu",
  "key3": "3p4mJwK5aYxc5yiQb98eNAFR3SNXmfLhkbFeNzQGHHfAGXcaCUZBRoY4WVkbqj3WyLDz9ivMeAaQAbfbuiPjeX4G",
  "key4": "iryq3EJYkuMyPvHDMGdaipNpu2sPSdCnsMcTogYU3b2DLguEcY9e4117GiCrNeV7oAUyfW9WZCBedfzpJ1hf1cv",
  "key5": "pUKPybm1NA14NbJEctZeV8Uq5c29uZUfwyRJMCA9ayJXhXZSALAC7FhgyK65PMwQhxZk5quvEZXWVe6v4ZBqA1G",
  "key6": "3kuuHaSqWG54sJQongkJNdgm9UWpnPKcvwyE1APhmEqtgYG4MNk9qarsmAhbdRMw6JanrN2C4GfkrPYkphft3Dtu",
  "key7": "t524uvp2FwHb977if6Tx7aFuJWyUjt3QBvopCoXLMkHgzNmf28AqPquaXUByjZshcokxiBnWkyAyw8e8GS95m9z",
  "key8": "ZRnovArXqsrwtpSdFMnxYnGPXqb3UvxbUFs2FoeDdaLucUYPuZ5XVoRSeau1N9i3J2dRqb9KAQ6BzTvJzoeXBrb",
  "key9": "3eUpsF8PP7rxRfvBM3VmzxtKhcNr4RQJQ13iG5URwx154e24ZAgot1RiqeruD689cfJ4s1Riv2MzcGx7MzbZaW5C",
  "key10": "5PPjK8P8sNPn1ij7P7hyVhEiY85XyA3wgnmSGiBUr5B5LAMDoC5YxNKPk89b4qg4fG1biaQJ9GmdNLYVboAzsaUk",
  "key11": "4yFeLYxJYnTTLnBw2hMVDQ15R4LoZAjdkqY8jdeRxoDjiVAJdEMNRdn9CbcJFvAtz992U3SA7xbwArZuT9F1Zpwk",
  "key12": "4ovAJTxp99Bj3FYvnDnQup8ZbgpQfiowSa7bYpGyE8C9DW8K2zHwi4fmWMu9cEsDf9otWD7Y4ij89QyAPLG488sj",
  "key13": "2kyXCjS7k6kz8g5wDMRLS3xLQ5tLapWemP2ecvuY33TfVVCJSzHiadQWUU27Lqopyu9ZdyP4ixGAmrV62YLF2wh2",
  "key14": "gKFpn91nThMLGRfD4SJpydnywsXEX9tm8wVrMCA9coiEv7TpgJ15D2z6KkrsgmG9s3wd9PkcCveA3XPGWfNTwDZ",
  "key15": "2z3thLC2pyAw6PXGRPRonsC25UbuiRTeHaWpvji2vGXUTmgBnZTaBc5dEjn9c7YSYKfCuaeBdEWQtXaxjE28tdz7",
  "key16": "5wMv5eSAzP29MpjcSaevhtmUBCiZM1Woc9kaPqmrHuJrx6k8PH3zYbDovKBq4ahpvF37qzD1rN7LzoiQGWfsLj1N",
  "key17": "3F3gyBtGz2iAeDtLsrCP4tSfYbPvAapsELxb2DEesRAptMSThftxsvXsYGozMrHJGwUeknpjJ6J19mhbzxMGoAH2",
  "key18": "3bFL1LAoYTZBcUqTCdaQ89PokhBPikDVaUgUG8TLJMugNaW422LvhiBvuoi4bU9ej1Z1MV4ktfNwYSuFASnFytAz",
  "key19": "5egjb5xZ7uar6NTzNZtgJkD5AtCaPLNPMbHHyJWn7jwanBvjUn5YMJfjvK1YuSS97qXhRL33YCsG8P9TGw88Nsoz",
  "key20": "56QuwskGndJDwUz84oqamgim8US2Z4dMWQuYo7eDVTRvVPa7xcD7KhQixrHWnpFRYLYdVMi5i9HnaELZcE9kAeoX",
  "key21": "5pH14R3gSsqa8518raApzTTeMVCNrqKbWvTKdc16u9zYsRMAbNgsNdcSs1T64uy4cww2arniymayTgCAkC3cDfwj",
  "key22": "GFFpVCvNfSvjRPPfgACJgQHcgMAciUPQeXBaxYGPwt4K5yviGn6oa7535PXzWqEtNoVQA458ckfU6G1y9EgJr7c",
  "key23": "5XaNKKAd2vT5wstAN87g2KRYhpF5xu1KWRVyMdibjLRXgrymmHmDYaguHbmzLzJHu8byx9AudxpjzLRuLaamCdyH",
  "key24": "8nsLy3RkKTVWkzbFWhnkZFHp7S1pe8Ks8x1VRoR1EndkNA17tte8CQQSYKJt2jqk4qmudmXocfmE9uFbcsiREsf",
  "key25": "3yct5x29KLo31haS2p6yjHtZRWjFKZh3tupL8grqXzTyEnBmm4JjN8ExYjXgbLW7TWFdBbSx9VYEUP4xNyEcMx8i",
  "key26": "3XEWQeBachSBjfYKv6H8AHvE4kWGq4ynAfiBHtkKAGCwTzT8mk6E5c5zhhtVRGda3FR3i81nxxoTFFAC31wqnusq",
  "key27": "4AGQaqx94c8qpNckVfmcSUeBzgNnYjJ7jvGv6CXyv8gZhq6iU5BywbyjznUoqfihC5FAJq3xjHd67WfrdCMP63N4",
  "key28": "3pffqP1nuZj8zPtTLctgHk2KRvMjX2HjidFdfSowvShb9Z4s8y45btwVvQiVmTC9fNNBM2KypNAak8eaHKtkS8P1",
  "key29": "3wgmqCdUn15gAMFcrAYSpNPTd88zur7u7gUfd56A3sFpPVW8Uqfr2GQXG2LBk1iGxhLqhUeZDmcMqrZsq1QQZJsp",
  "key30": "539HY4U2a1Y6GnFZvAb3AEiQt6B1ofKGaqAJu6vXBy8FDgNEmMuJ9bCsNS8Cins6udMc63HinmgCDGQ1eBPj4Mtk",
  "key31": "2tbTWKtE3x16KMQVEmrBRkTGgLekKY3EoQrC4JbHkaYBu94ivDMS3WcscYk5xKvNxPJbTZ2p4Th5Ve2y5YpGLBXH",
  "key32": "3RViJoBmkaRxz5t6g47Jt4sK1xh8mTB5Eeu2WAURBjEDJS1sB47veyy79Ui8JdpfZjKDBfb9D98TgNpL7qRVm8YH",
  "key33": "123aTcmDfyQ83EQuf6zpoiGuroZqi7cd1DLgVcBqqcSV7s5WoMiRCyrBVMtdP4A6keuV4W6F9rWJoQWYs3hPQ1CT",
  "key34": "2j87cfX8qN1FpDmZhPjeAP4saK3rghUcrLDBx8Cu1efvewS2AfdxrQwAdaRsTCD22t8M7oHQ8C8ZCyfsxmDTxcBW",
  "key35": "3iQHdGzQ2f6iREDpcEbopfGtpz8WgpS8rBkVa6YxWVRfoTiF46b3HY5P6QGrq2YRbkTdxFzg9YaXKMQoP9UhSPEQ",
  "key36": "UKjkrJLTG98eo3kbBCXxBKFHXsLGuvcJkrg8nQTcH1dhTZJXCwMqAha58xrm1Qnvoa8Bhc15n1WPiV6BwD52F44",
  "key37": "HK6tcT32J1Qmpky5ZRqycaAcP28XnzciPYtm5QrbZKhgSC4cd7HYe2vCECYBU7Vjw1KadMHrm3DawG89cKk4Jvj",
  "key38": "uyEegk3hVpin1CxdG9HPLof9d8gFYZ1VAjaQ6QU2NYMsJLkKWhoutiLwboaG7y3B84TApr4n3ABZg3jut1VumjX",
  "key39": "52Yazpbxgga4YRVRCgd6wc79eRpAzyjYU1kpUsKwcELD8SPhb2sEWFt7WYmBkVrsrgX6Q8CJtYEBzEhFqQSnXr2R",
  "key40": "2nUJeCs2sCJPcW4k8Gehhhu1QnWQmgmqWYTZKj2nrofj1CcBJxh7qo7inGNeKoLWCzwcviAWe6U723qyoCSkbJwu",
  "key41": "7C5gQwJKkUcC44GjwVVZDA8V4w2LnthH36TBLBigANz6pZSn6pb8d3XfhtPZUrQrpC6Qh9PuvDHQkt26yZWhYCP"
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

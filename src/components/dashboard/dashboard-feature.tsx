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
    "4CoE7CuyykCAJSUqBTKgs4UJz5s1xwHqUXZ2Ua4xzPa8mN4ewpW7xtz3xyWdV4oxPb1ydt8W82LnYiEaAHYRVdiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CrKCFbAQtmerUsC9gG6L2EDkUARA5HaCxcumYqkg2AQWgEAKBHLRbVZAHzWpymMpzPJZd16oLk2JKRQT61DeNcL",
  "key1": "3PGqeJ3cnczefZaSMBGuDbjUmraWaBTouXMcqfoZKDM49WcavLv8SQNNDV1G8wU4b2UH7ToEwaWAGDxV15H31nvT",
  "key2": "5DDYymdTxBmvdAJmSku1XFjogY8AyjqqjFmnNmWVkTa9SAkECsvKhFFgWCZMkK2bAjaJTMfcemY4nhXaovKsbAQL",
  "key3": "q38mtnzvn6YHGfozik3eKk3s6Rm7iYasax4ehdfSm8fLw5KEdJswpe8E5xkb7stHroCCKovRcTVAx3uGU4TxgHJ",
  "key4": "57MHaPxwAeNg8yxTrK2RbSaqC2Vxuz62MzSHV3DcjUSeJsfcDmHSG4GTb4mFTq8USHTXG2TCCWZ7QgHg1zpkwfq9",
  "key5": "5na41E9MuPzogKtVczfrjvNZkEmjcKBsXDYvzUkvgHYR25UK8rFJLKsCwoNEzh8ZwUmUgVYVBZVgMjyjYF8GmqMu",
  "key6": "5egZTxp7F7argJUNaxhM6MPYtp9rwk1zMnjCNjscV9vwkRrTNrHtYJHAo3aAxwiZLBwv3m71WBMVHceeF3ahujx4",
  "key7": "rJMmtfJ9ZS1CL6F1ToWcF7kVuk4GmnXtUoJg5bWyDk5gHtaeyHfBxCH92LyANXfHCwqQDLnhC1BBvvvBPx1qRfy",
  "key8": "4S3p7fcyvkNri3ZgPdskumDeg1feiuDFTbKQnHgr7EUeUjod9Tdgz93r8jfREjn2bAxvZFESCRZvFsijgcKjp897",
  "key9": "2VT7TvB7X5B5o4aPu4f5W2vq5QWYh9qiZ31Xq53xEUnS8L6hqM5hewkreyqGDkpksxRYecPUyWw4nGw7tkeSH8QC",
  "key10": "26bnQqzJVd8zvTCrvWDcqgE89yNGffLdTHVdzHwcmTox96kYrtvvfpytFW1fQGZi68LGETo1zWrZuNvQYEyqgZTL",
  "key11": "2Zp5hskHiUH9rhsrs6hdGQ9eCrCSPsWQg4rKEqbi2V2ov457fCyK3FnUte9HYRX5tQQrkRGXmEAhEDUkZBwXM3QT",
  "key12": "4hr8LvWDYCempwxpu1ahJSetayunrcX6xdCcoi8nFzXfbk22JdpCLcC8ZucnEakVuWPoHe2eM1ByQsyofKwV5Yjd",
  "key13": "5KopM7oMrZDfXRBufnVdvgJEN3wjoB95Jvy4jmUXH4fdYuSpGfpeKf7g71V7uohYYKufCDcQLt9LtH6QhMxsL1Nh",
  "key14": "5n7sEPEbDZxLq4frRsVfN9PR1R26mcjWEj1LvYim4c53Vy4BpK5basYrFnLND8A1q77FvGU3CTmzrrhYtBgbWhet",
  "key15": "S1AY8hyFEFMUo2VNikWJ57HeznSD5qxbmTUjqSbPLqC4iXD8LYttEPALEuWwbVf56x64tZ8w8fPbCjc32w6n9h1",
  "key16": "3WmrLtBh9quaysTcTAsi16WFdcm1Mfg2XhfGyt3jwCKwXibqvPTmXn8KsyPBN3MrTHpxP8M9S6Jt7HvXZV9Vevsz",
  "key17": "3H93s4z4Zs1MYUUnywvynWPac2xaPV3XzaNcEE5SqnX3pYYwtys1W9aFd17FfMLqDpvmWwFp4MNYjMw2ZbUUbQMz",
  "key18": "2YgvRa7tJNgexN6HPvSuiRXr6UwEhu2Pmy5CtEaXBKeY4cm5KKmRsDCp5T7Jchq6qFjxjyahYksvnAmwpUo6pCNE",
  "key19": "i918iz4LhJwc3FcprXhRMvyV4SLzkrH8fiMErcQajZNhEc5dcAWDuGt1fQ8ZbquCTe86wLzr9CxZT4VHoCsShww",
  "key20": "23rxUk7qSfrLxhxXD1LBLnsgqZSeXimoerVNzHyaPJiucc7LyPQ7PnrCeMZGNFeRNiJmetqyKJJr91iLw44mZeni",
  "key21": "4uNBXSBCAS36s5kKGjsF1mSStYwTDU8B77tMmpxaVUDeFp1Z6ZmRBmkvVu2bMoPZwYRmSEfjC2PqUBwbBBHoZPdx",
  "key22": "642Wk3FVJ9V5UUcN4ZjNpdoKyeruMrj66H6KjyzY6NpjyPbtUeLH1q5DuXkM662fpYJzPWkmkupMhioPaGQcfxn7",
  "key23": "2eMJzDEBMbHiUfzExs7DFpCNbHtJBRrQWNpodr2odVWger5VJwpoYynTbjEA8JDPusCgmbSEVcJt2wouQTTBX1XH",
  "key24": "5m1czebUBgc21VKaNAmVEK2zZCtd3DQJUX71FbdBgydwgQKaoBkfxjLjpRpnE2E3YbqcKT4kok2CTNQcDKAJ9zkj",
  "key25": "2w6v35yc8gmTgDfFK8brg6LoCKtEByjhLkdCyxwkpqn5UygZCSJ9fHCBiELaN843FtCMLNKKCndSquG13pbtrJJu",
  "key26": "59b3LQWRsZx24DpZK4DBXWn3UFPwzC7T2eryubGrSThYqeVAWZFR3YVsw5YUt1diZcsja1DRo42oedCzn3wqSdNJ",
  "key27": "5Kxe3ELpnvZfez4n7epxEnPpH2CwtU1awfu7rzZCnGndbCMTbB8jTEin5XZ8ZVbi4xGa3oA8Ey6HPFhx61A8uw7r",
  "key28": "4t4A2r9igEoyRMhoD3ww5ziV5EgsDC3pHfiSYkWmij4CXRuCuzgcYVabXFLEhxhUN64H4TDNUytbiiEQhXKU26NN",
  "key29": "3zMKgNF593QymVB5rYtHRKrCJJwH4FQyNAjhm14WraALrYkHPgRPycrCuDhMeYGwNLdesu6VxbRay4xkbyLwVusA",
  "key30": "9uN2SCsScwozMUbaTQ9hZRUgHepY3zHAH1XCqM4Wjt5UZc5kDKS5ZBCeKZ45T4dLw9GqtYswRWG2Vd2XUZkCxxK"
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

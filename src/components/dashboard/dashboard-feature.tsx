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
    "4rmhD8QrPKqSN4P6r4hLWboKtpn2zkpbreNaepSXmpZUJBXZ3CcnznGA4zcLoC2nPr5GgZP7zqxKjmj58kGpV4ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UTAKwzQDRnXCgYw3WWH5GU44nfUu9YBqWDpdtB6P8PwrZkYp58Csz77rpd5dGJnWFLbMMj2bRSHBtqWayfrJ4vE",
  "key1": "4pvPvGs1Xk8jHbihLWRTtjc2mDdcNAm1HeVGbzJpsJSdG1GNeQ9GBk7qFmUM4WA2uAFsj2MkyvUvZ6KpaPT2ReAT",
  "key2": "5ydu62NK8rnkNmxwCv4mZM9SvewtQAddGNMuKSAnMpFFE7xcs4BvgsAYRDbUzpG6PnrrvQoTBk4F5JPDHfPWDhQe",
  "key3": "5iccyMzX7kvBwW96nfCHYazuzAu2j4EqACcEJhoKqYGr5tFkg5NCRjNyiCanHnuGjb7zqUCfiuHqeXgcuvBttC5N",
  "key4": "3LTi5nY8Qby8cyswfTy8DfQQ5r8UT2ZuVgc3UzT931A4XTFF8NRmdcCiH9aGcQDmrU4HioXeewkoWSD3NUUKfJ8g",
  "key5": "tMvQEMb7wCgLqbfjZCH2nrsrwsZ2X8RotNjWTpJ9R78Cv4KHnzZogyyiBhp2KKNhXmD2jUAnbiLpeygfYWmWpx3",
  "key6": "25b6ucYb7xAFtt6vt4kPT1quM163zEYeRZxvME4QR5SQ8DkU4QDsqwuG4aL8Cj7cWtp8baMeY5TuZe3s3ovvsrb3",
  "key7": "5VS7skBunTwjU94F9op6QWoZ55URLNXtPMbbbASpDtb3kax81MShE3KrwvFGCRMwtcBEsZMpg2VgsykSgMgXrmvU",
  "key8": "5YfidmTtntxvYUfTiUAkSRuAsbcqmt2EXPQpRxbesZigJwoUJ37iYYLrqMAPf5S8qwktDchZZRqp5UT1Df8jr55E",
  "key9": "4hwVmYYDNLKkmL5JAJvJ8rMRYXjzFsMr29pyjXWcsSHx5NMwY86GUF2Zzi86RwCdfKbM3SaT4MjTunZzmN7AKYnN",
  "key10": "2NjvFqKcMMmeBobTpgD632cVYuhKwLY1ZfCiVQyNSxh9yAEdRBrwnDWHh7KE1oztusbfgdpdCcSmxMsARAJbJfsD",
  "key11": "2hoEFxwKVnpL6dJymEXmNJYGh3nsHgGtePn9nHoKDXu8J8XCawZbFELfyEgGW7RgBStguuf8ZMKrzGQtkYx4VVm3",
  "key12": "8YfzjbXNr1D6PG4yvtQWsyQ5yd4eLnGVYz6P3tySWC5GrGAkbao4nrNPihtxAJV1nTfGQZsERMZ3bmU1xzLwqKM",
  "key13": "2bCBsaVYCCrrq3oeJdhxr1caE8z9p87e2jz2uxb3DN7QHDKu3k5dpQbrLDTUsWAtGXoJRTLYvte6qmaLhih4TAr",
  "key14": "4WhcpJRAw628drPFJC1eHDu5yomJHHAtyXyUHQ3b1ZrHCsbEn5yoe14DQcx4j2n58HY1qAQ6tA79ZNA8SSv1iVib",
  "key15": "3KrfZxk97QMDKPqp1xT6bxK57LD8GGowe7qXjb1DSPQq7gBmBbzc2XbTtt8L2rnLEznEVtwuPbpV6yqbSgcowuvH",
  "key16": "5qiLVsDk1nuutDUD7yParjQ3epUgzpFR3YVVTyiwEhtxDmgALU1LPoNBytCfkEQp45STSu4tbmgyF5XXRAEQ4fHT",
  "key17": "4xgUUhe9n4HZRk3yNGKSZHFp8dKwD3W3qjVN678ewSmAZoi3cMpEz2gJn8KhM2crMyjgAhZe58WpfdzUaXneuXpp",
  "key18": "4dUCh5tDiGFgGmgJHFUrDuksmPCzAV3vMKEf4514JFFs5NafEACGmo1ai51cZQj3X7E9zsrzuCMPwZTf1xMosjY3",
  "key19": "2p4sak2qVA5KGm1APUm5TVo1FzJWzFcVz8fKzRvf9t3VWVdFz174rJCvreecdzcSuTvAht6CYhAYM5VaFzjkLNE",
  "key20": "oKiDVaGX3c6uJSqX4sUTLZSRv3nNs1Q7hH8FqAafSZbG9ZdZEUXscJdxkJsSo8T93XNqsCTGgG52gndZrW3s96r",
  "key21": "3xs3E9mLCSmZYhLdQSajAWdbNVenLZ743yMgumgY1DeZDGPRoekBbkt6tsFvKjpA3RXSrtCkw8WsKdWBq9MDj3Zy",
  "key22": "44r4xXs12RjvmmwFBJLyVkYUUmqikVN4cUNXq7bYp7JJdzCsc2qR6S8c84jMbi9pAs5hhAQkgZMxaNtwPjeZhLFb",
  "key23": "4Y9Y6z6Go3XpT2MPPLoJvZTrpPHffqLwkv4GUopAuT5ujvsngSccCZfpZW1g4BaKvEW1VCbNE9ov6xkmYgFnEBn9",
  "key24": "2TXHUhyEiXaw8jpxqdJ2LhH2yG29nndQBGn6DcmN6SQGjaWbX7iQhxQCZ3WVbNwmptdh2jFfPiLwA13FDzjPcVAv",
  "key25": "Wdu9WRhfPQMh3nyDUnwfwL9YTgdKtyaYt3AQFJK9Xko2nMe5k8ze1qi4b8DeP1gqWc1m7vBwJii1KVPDnDSkoqB"
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

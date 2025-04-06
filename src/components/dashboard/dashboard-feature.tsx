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
    "GBiK6Z8QPVCGCfNsm75H7C1z73R1EuTYG8qjiACMvDanL79ki2YCkidRBXA6YdJnWD5w7JFdcxiGTVuw2mNk4Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZvshUtbmsjXCEsJi7bbb2fkvZvyX23rgLVVgSHX99n5aSEX8Z8PSnD7ZHgAJCLoXjXk8gdYFxT7yjkEi46qAi2",
  "key1": "582drG2FGNbUexyxXDpBmvqExqxHpBLZsJqVdzoZVUbf416k6UFq8WcVACkSTpVVP6gmLSNcDNrEgjCd1UrvtaEg",
  "key2": "5TseXM8CXgcHGnzyqwMdZiKkz8mCxBPAt7dZqHR3VtjjzzJk1Tszfovatcu8UcvAfEqnVs5gCQVZzYPvMAAD36Gd",
  "key3": "5NwCnanCrvgy7eKSwqRKaWTr4BbnnQkRLjS6a2kgTAZVS893M59eFDChQ2c8ekVnZaQ7gupou5dRW2w4hW2qn3pz",
  "key4": "51YRZBg9xYkCrPX4xJBKyXP5BuuoN7tbXrNYmEbCZGe6fW3eeZnkZ1HmHL2eG1yJEznbXvFSycYcofL8ahSGwJBu",
  "key5": "k7tPRXyg4JaFPcZVkm2qY6KaYQCGMYHqCmPq1aT47SJsjtN9DrXTfD1e3gDGf7NzFGqj1EVeRxjGi9HGWrZKxf8",
  "key6": "26L4tsVVEf5UBXb1aQ42mpayBzfoGQfVyDCyHzVAezu5rE79swdkSxVk4hvy3epY82M55fyv3EDoS5J1a9gxm96n",
  "key7": "q5GUYynovEkc6Yf9Nd1jd6yRyuXJUz1QuZUXyGdTbWn6YhHYzMcUrcfnunZUCj3amDu6DEtZyj11LccEVHtEHLP",
  "key8": "45SrS64QVa52srLXAJs6nuZ6ynnXQAt5w13waTJhv1h8Yn6NPVQuwhbJJZfT16RDTHPa4tCWpheoZvBKYeU9AkTJ",
  "key9": "3KbmdKDqE7yAqZKiT42x9u6HZ9hkXWKEyEneiF3QCCDaFapq5BYiTQPJR2DAUtNC2vZGQ58whAJ73i14VjsmX1H3",
  "key10": "25SFKCHKRxrPeZtns8FbRK3Tbo9XWTafw9k1MXPiKD2YgSt4YGTVj5SLDrc9hX3hRSsEDautKbobhtaoukeApyso",
  "key11": "13zwH4pzFeC9xjR9VJxecf9ACwHXVaAT1dyXV47jCLXwUUdAX7ScwNwjPeFfboKtPTGkcFPADFjTAbNeEESFk6B",
  "key12": "fhNXW25xwLcHnP7H4A5iz63SGeDYVbHifod78czPznTkdoL4ZaxCCjNMptzxDuxHP2PhCsKjMtwcsrD3NoTpscj",
  "key13": "3w8StDfboQ1xm4btMNDCuHoqmzDoynHg2UWfaXQVERBmWyeBoRmiL8FJmmYMDzyodiJhKCaPk7QNfTtDoz4wQRTx",
  "key14": "bbHALE63q613ADnq9MXaLcVf7UJ2JVo5JKRF96GRQqN6ZTmWE5KA3Sojq1xioF2gbw4T8KfGxPiug7WWmSxfCBS",
  "key15": "51Hp4cCjuDJDc9bztKmEp5f8oGaNzNWqCcgRrVoC5GVP8sbuv57xxtzvEu3fBpwUbkJPfr7FD6cGAtZL8guQXwaR",
  "key16": "3jbtz1eCRhcX4fawtK4jhuPjYMca3sLgQ4GuknhdCymNPaZEsUPR1Hxr3B8wg172PCafXazyqdRKeGzBM2Y1H4mA",
  "key17": "Fk77UPd4n9gE5npUGVinSDG8muDdPe5iA13VUq93bbZwi9ZhrKug2mmEGJiwBeg2HqQTQoZciLYEBM5jvQq9yFh",
  "key18": "UsTe4FfRaLkyvdoSrSvad3HuZG9NcQuD2fmwpE3CyAx5XJ8f13vdQEXb6Y43oPVt913knHjFBVHsXPNMZ6W286n",
  "key19": "CasfV3xe2kUVyUEUeBwzHHwXLYpAjxuC1F6K43gXqS79Yw3Q16NM6gUdHqmHt6mmJkkXAJJkoP9KaGPMPsvf5Q7",
  "key20": "32nMFQ8Pncc6fxxbcGFVMRcLHgGpCkDYgLdsJoRCS3pbAUSeKvGSJ9cmHVnsUjSnmPWurpnWt7GJc1QzA2TKXC2i",
  "key21": "65ckw73kVfkHdEsBiFMM6bcXs2QYJmSpTugZ9JyVi5QkRKfkHDJsa74Ht6GStaZpfTNhWV1ZftkxCKbXmh2WBBg8",
  "key22": "bWmM75vAgNpWyCcqPs67r6nQNxQ1CJnzAQtuLuyk2V6QXiYQBH9ZYLnxSt4G3RwSkVNGdTg82RtQcUaxPEHQq11",
  "key23": "3RdmdkcZPRCQkqh8ZqeEMC4bEpEx5Eda8FdNn4GBDWmrcyYJJRKBF2Pg2LvJWX8wYhu3AyhKZzQxJJ4BMpoyueTJ",
  "key24": "5nb7VhYrEJYehm71AvLPqNvT67sBkPj9UZPbJ5GjpzKkqo8yhgbbkRypuZ2sF4DLc1GXA7nEaX3Hb1vEN4siwJme",
  "key25": "4zGgZnvbF81XKj7hzAgxyeXUJfZtMvjHBNvDo1fScPxA2Q7bgoEB46ZEExHHhbWK76Rvgn8AR3foiPz1WSduHtrf",
  "key26": "8NSGiF5A3zNLL7jHhiFHGwQJyfh1zUUMsuX245Jd1imuij85KEEqnsFywYcN4uBJ9kiSL2s7xi4gK9VfpnvnxJ8",
  "key27": "es6D9GVixJHqpniXyRSrNdDjqyf6hAiRrn1NYBjtQdkkGHmK6JEPfPsrJzFbge829z6aj8NjRhDMTBbkdocXqaA",
  "key28": "3kdVy2TxyDJBeXm5qnkX2ffHTLk4yoAz9WtUgm8TY6Hgn4vEqTU1cnYNm7MLDZrYGMgkixuBzfSqviZf89vY7znq",
  "key29": "61F6BuByFKbimFrb2jVpF2HKh9W3WAhqbhPzyvtesLPYanXMZhBmX9VqgYWoe6RQAC2yTh1JLbEqz5nKawDaWAgo",
  "key30": "5CJwUQGCcyHCwmLoiJXZmt7Rc16W5DoDewmPvsysWEq95GdXr1vRJEtKAdBFgh4k1ttcZyfwNYadnJrdkvB3d3jS",
  "key31": "4tuKsHh6ibYkqDEN9Mn75GGGeCN4pstiHmJGPSr7Ucg6UjwDbYEarJZVqtmahLoS2H9MJqbLVXCdyNHcmxGNdnDG"
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

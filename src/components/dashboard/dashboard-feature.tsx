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
    "5zCusGDk4sz4GXxxu33UddUjgYRKZ6F2Gv7TH13JGavd57iFN26MrzdWTrRFJU1Ltcbfgx73CbfyTaAQXXbo5xxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6frXZgWoEM41KxqmE7LTyN1WFj4uJmG3LrzZXQtZJ9f8GjNzQktBRWbxg5nn9QsRBNQrWRA5KqLnW7s9VpZX7a",
  "key1": "4UvXioEojvoddgrFwqkSJ8VjRfC1rBTCTFLDgRw6cqLiaT7UrdPRyn856V9L5BHoGgHiSUaxEwy5ccP4GH9reedH",
  "key2": "5M482bVtbDaimjcxXPogJoM7sxN4znKYuLboPNdtaHSMnQmWmsseaPsbbZkWUqVXUp27WM594bzLNp2AqA6DBywX",
  "key3": "ykDiCqnmtVF929sJd4tkFbU9Zt8yMsmCodVjwMCypP5apECPstdZEr9M2pyJaDQb1J8xJmNmggZzrAcrSMSteGV",
  "key4": "4MdJbTFVVuPski833pashgRiA9YJEU6oENGWAiBVcrWEU6vtjdR3QwXreJf2m4CvxMSGB4u12SWtMTvY6LnVC9iW",
  "key5": "7uYrG4TSWQnWAHyRPvSwFP9ZyqtK1mLvCqp9Wn63FEJ7NKQaaByjur94jGg4Nba93VoLqMUbSNWcjyGPAmvBjUT",
  "key6": "22kU1wLMFYXXNLT93QFfZxQEnQq7vpjmQ35ZXDkMvsdGTwMdLqoUJRuJHWdT1Vqe7BxQ22FSjb7ekQFbZcofpaGq",
  "key7": "4s2sc9tuHTqFz72iMSk3qracNH8iVAL21ez2pRmwnqEQGYCn4xWpnNjmWG9fwWGgF3uJhAK3iSHhfYpLaeLdQjQd",
  "key8": "3UbuzhktWeM6EXLwZzdSrDTBxnNL66HwZqHwjfNjTVoYpJRnjximgDT1UPLWLrhJQyJqLkyJdCRnNsyJGwEXb3a2",
  "key9": "3fbkYvVzSx915jaSfgnCd13wakteoWbJoc6WnxVhrf385coJ7aVsNevSkHueGggpH7557hNhnYewZscwAGV29LuH",
  "key10": "3yQ7iKUAY327YYmkqJUKmabBW8dyczTJNRgL5TiFjezC2HnSe3YBvsSkVaeAvk7SYBXoZvFm8pUZREMBdzfrJQpA",
  "key11": "4H41zkdSJ1cGSzLCTcv7c9ge2zQp9EeRETLE6fSPb1ZRbVgkCQeuGXiYi8sUccGY7FthffzXseV59otMEGibMBWk",
  "key12": "4GCpFYwhpp41Rb2m7qe8A5RgBfcoFVbM3YkHqLFmvZ6FNt9EN92Bs2yB5b9PnUh6Rw5RyBgcjTG48xCTqvReh28t",
  "key13": "3EgG7XZATcmwP9b5QNuoiFMmFDFE1Dbay3W92CxsEKSFpjg1aZYF3uR1KF268CmbadxogTUp8xCeYxbSWwnaV8Hh",
  "key14": "5wjqWkwTGAHaqbUW1qSstiq947uExRXH7Yhe4EL68ETuSzSNEo4x7eYz3N3WnxdVfwymtCdA9UdJ9eRKj9JrJJWY",
  "key15": "47s7kPucS39zZCfn5RNtHVTNDJgAsEXaNDjZ2GwjnLQfZ8pyYG2Ezbd6K6NvvuqVFFUXzM5uajgDk4kPy2p2cDNA",
  "key16": "bgfijtXS2FieqiGC3GfRxumtx6uCR5tbhQmLXH8eKG9AjnhKgBi9yAxqvVPZrpD5gMA9xvyU5DJ647yPf76h9dS",
  "key17": "2LjCwB45zxhXACZRiNJgiGe2AJvzyeziWxitPXKH65zMAKUoN93Dbi5sTtgYDTBuGczGAEuM1tkQRhA93vgw2vq4",
  "key18": "5k85oiyvK79LAdJif7tQUue25BbZCp5XypWpv6qCjKA4ujisJZp8y9kktBnw4S58eBK8WWCzAURRwChgLJ5JmXmv",
  "key19": "4HJkQsZTQ8AgvNz2r8A7HDM4BWA4u1Mwx4enq9nbzeXZYdPo8EF2Xr5AJbfK3uAPVJdpvKXAaRyTYk3y5sjs1fM6",
  "key20": "3SKUoCrMHtWB1FuZPdADHAFVb2EKAfmNKw5ENRy9dTZaxtffMwBx2CLq4S6dfquLJq1aWYpdhiT29XRj9w7oX7An",
  "key21": "pzq5Yu1SEAxPjtgTFi5eHsmwbhoyuR8e8xxi6NF6nzyDJEQ5QMvrZC8yMV441mfdvT7SEDcFcaMvDagGx8Ujqzi",
  "key22": "EmCig2E49ivbuW9wHaresH3KZyXDpy1sXtYZotjH3pd3YoAVNM53bYYPHhBpqHmh19qYJPgGq6vT5qUA2mu64eG",
  "key23": "5GHL8QGnMxQcARuVpYB9Mn3s6iSJEY7fv6LwDWYzmsiHUJaSUdskCNFJchrXeqcbmXQcJri7dVdRm7yEvvbkTzAZ",
  "key24": "5UcpYBV6RkB8P8F2zkryFqyFd46A7uiRZtK2AwydQwZ2q7o3wTyHSTmnPpYCdibym2TYX7FaEGZ4QfSiBUk5AQrF",
  "key25": "Npi5euckC4deZ22J1S2FSqQCjYKrQ2cvo151EKD8TJk5jtdp7pLS8bEjD1VtyDkUr2pgthYypQANyJFJueewR7q",
  "key26": "5uPJkTTQjCskyVqD34GQ8qAvFGuwYKdX3GtHSX4C1Nh7iVF8RxBvoWkUkFrmfXNzs7cGqaK6UrXgQt1KTu2VbGvf",
  "key27": "TXJdv41ye9pxD7ANiZrKeBsWqrRUvoNdaxkfiExp3KmdJziFoxqbin8zX8kqEzMmizLpFojXvfa3ZCCmgLYDRwQ",
  "key28": "63euJVY16RtjMcjD4micDz73Cood2wq5HPop4jBfkYJqZDvAm3pUUroT5mj8QUHmnYqE6ZgHWUXcxtL7wp3vpKDL",
  "key29": "5eJT2gdzT88uswdrtP9uQAiphgGAVY2oSysyPuvDVFYvt1FScd7fUjbMansgwSNmCboufvy377jWRpjz82XKDd3k",
  "key30": "3BGzSkKpWtx9PR7cQrD7rEcUxhSANGWo23dMC7zCayvmpXRaVWv3odMPYz7Y8EYkShRbs2sckRw5xLjd2rN5Dqgx",
  "key31": "FVo4jmgndb9HRkU91iDsfEFTusTQ2bQnLJSUfJgmqJwR1BvRDffUP949zXpiBD9gSNqdMt27enuDLJRV84rU2p9",
  "key32": "25ejbZMPx64gPSY8sBshW4dynTh8KTvPCKJwY8DCRqnYa5k98ivL4C7Hztn2rjtxf2vnAsiBTK6pBxMZV27GPcgr",
  "key33": "2aDZdEt8WoFMXj35Qndzh4SeLDuCpBHARDqRbn1apfeZvbYpcjoKD5V2sWS9GWepmqYxuAx5Fv6vaHZRo9ZN1BfV",
  "key34": "3LGsX3GmnPSD2JGgc3vw3PrTTKpF5hYG62JLAsyYnAT2AKKmNgbTjCNqTpMbw7XBVZ3q4uL6N4PcrTkk9ctE6je9",
  "key35": "54NRu4j8tRkiNwAggHbFmgC3fPsSiN7fno2KaL5RHMBo7BuS4dbEnJs4UtfiE5CYHDet1SqUCwQGw76huqU2L6Qz",
  "key36": "61esCfkjjHhvV4NSqg5yELasgWzPeyJ7i3251nk23yY4vgF5Pset44MkzjDaUgaGpMbxvGNpcEgiuac6pwVKWhsg",
  "key37": "65wKqmX7koJZDRWt5jc9KPUMwR8Pufe55AHnrzsCGzJF5aXEsmfAroSN3s78B7B6mBEooxMaFfjzx48xAMHQAgJq",
  "key38": "5cX4pnLBrKccznGS6pN7KodzyHtYKSCTTBSygPAKcruonrFhinjmq7kjGmavEMdaiKh56CPG1iJsKgUbnVe8USgG",
  "key39": "3NPFAhtBa2CSEWzDqWCqwXsJdhAsEkPWthgTqGTEppfcPbvH9kM8xT4MUsYS1TaUpYtacQ8EymVdUhYBBrC5764G",
  "key40": "2UuPtshp7jNhsSJCDMM3VnpxPLQ3Peabss3KatC5VHqaTW8FjnaUDeGdxRe5Rsdy38BjpnvbeNdoa24Mep9bUitQ",
  "key41": "b1jp8AHisJYXDKHkzAnrpPe3EzdU3uTppyrxabuC8WoXqrimNgrT7jRvoCdPXZSXjnuU1HhWs3jUthW9WCvLgAy",
  "key42": "2v2EqgyNFoxgjpb1N3kazmsyukaAgEg7E3JYZBfvwmLNjUXaEuCK6BAZ3oeUpqK2JPeHy6GxwvnoSZX32hW3MjUB"
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

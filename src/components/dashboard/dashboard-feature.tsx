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
    "3Uh7r2zKNVpzPXC6bEJAfVKRq7Au2DApRepGphetXTDScQqK4Fph7C7hs5YyHKx7k641ooPtFncXr3jRpi6DAMUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oLyiJVoAptEahRUKvbZ2kNhZrPpzFKQgBvoUD1BGkfm6mpsYeq9RK51Mv23GHHrXjcBVLMRK8LQT7EHGGJUB9pn",
  "key1": "4NpbgQYHq2vsSJ5Qg3LkyKW1iXPBxRxaMck8gdpjmi9WKx6eM6MfKr2rvSbLXxczf5Hc5HZkKwu2JMsYL9vV11cu",
  "key2": "3MV2C59Uf1KogjZHLoDpRa2iQcx1byy68hAoR3obfDk24GE5YJvGsvDMdvLsuronLEFCJos76t3mUCmePjn3UpSC",
  "key3": "49pjJArQUcYS97rgCUjU8jGcmGVvEgYdj4KSvh6cu85iGhEYifyzM2ghs2VbFNdRYLeEqBv3xta57P87wD5pXvcq",
  "key4": "2zn5Fi24UbkzCUB7u2The9zGFYjBTnk3qLZSmHrTw4FzdH9GehCDXEugiMfaZUTsgTxBBFUMqthWVsPL4Gnzj7sj",
  "key5": "6768J2S9amCHBB2NAQUAd2bermzcMDKjTdp92RhhVjPRGdqPDMyZdY3ZGqC15SjVGKRy6KQEaBQwVe4brsPqRGHo",
  "key6": "3qZa3CPiNje5kXiyuH18988XA4wybXuust5owE8MvpWNzuejYRp9yZdR8scT2L65MpKn3UmY1KNvQVPvxBctds9A",
  "key7": "3JowNLZVVZ3WAB8ZzD8K2NUP3SiuLsRiYF57cBWLvmQs7gsCqpvYbgHPi9T1E2S9SU6B8UNAXYUwCVjRajdHzMgL",
  "key8": "4M2g1AnPLkm54F1ftWt7AhVXb6JrJsFn3pBDdjzKy3RXX3asC3ENumD5LDNmSgakjmLA4ggDQbnswJjtYkLjr4iG",
  "key9": "43SX998fjV1Etun7pYY6QUNgNdHmqAuZ556BpeQykhY86HNbC3MWfz3hjd4pJhSGeT3R9enMRTY2dvet6bdZphJR",
  "key10": "2P11r5A4pVbUpyCvdh4JCnqSKXxf9bbjXzexqychv5SPhwV1Hn6ChGQ9diCJvuYGB4QPavusGpjdzQ1fbkK6scku",
  "key11": "2pmwJQFn55jpszAMz7wEhUYJX689KWKwfZfc83b8SSYQHnb2gVZ3WqDnKmZsagWquLZZAfHEurkQtHtXzN7i3NdP",
  "key12": "Wdz4yTgLK1mm16zHPsBjqjMhpMoFN27vxL1KTi4ABB4LbinKTNZeKqwuqemRoMwRNgzhANSC3Kxp3kkYXdCeMhj",
  "key13": "2YBwmkJQsfjXpqJRt42egcQdbTHoWfEukYSdtmXmVeieLkvB1oUUAU96SyWGvNFQg55YhbQUkM3NrYXb2njX6gGu",
  "key14": "xEhgFtWUqpoCqBpGafnhg11NB6fsBLk6fS9CJuQLdKf8tHT7iGRqtj9JLeXSBmd7BTtz2VPbtQU8qN9UVfsqywm",
  "key15": "2CsKRgF6rJtrheW5o1PZ38pbxyQiPD7PHxDmEGbhsw69GJ39RCxdRaZmhBV8WVEufXddHrqTa5UViGE6LsgTTt5m",
  "key16": "4vWGG421Guc61NcuTMKwVS5BSU1LGSwyNRCDiD5VvqvMoWibZcATvuoE58ZTJGyQ6d911sonLLTUsd9vTLveRMyD",
  "key17": "CtJ5CrtxkHWHz6MGPJp2B44aRRCL65qsowVhConDxa3THA7bC5VN7m3zpYoxW6HJSQiheX4S6sUnmKyetaDeYzS",
  "key18": "3U5VMVoEg9Gs9NLCqvZi1TnNbw7Mhu9CXKqcVtEtZFVcMxvjy1ygL7PstRuKWKNoULvU7d1AJoo4EFgY5tGuabxn",
  "key19": "35PamBpaqo1wrKYwEeMhQ8oEbgEBBFdRFZzwTN2pbzmgZ4MoJ9Xd597JWWEgigmuhHE87HGNuM13ZgsPuPPsJDVd",
  "key20": "4D1yAJX9ui6jeeEUtxBo4wJV6fFW7iQSPy5Ttfnuh7QYJbGxTnbrxUBqBgHdQAAonXxf4LXFcivqPb3CZT7jw25u",
  "key21": "4bWMMzXacrGmqeRXeKMiDAYbvgZywLdNhGC6YHP6hFBuvzyk1MH6QoX3FQXGMSLBnY4mkjHRmZ4SA2tMCdYhj3Mi",
  "key22": "QcVrxWLH5CLToLyFdiC6cc2gbvA1onzMQvBpLehR4K8jwnk4uVWsh79xow9GkHVJXqTJxcXw2YZng8b9QnQ2NTy",
  "key23": "3ruKtXej8upGE1bAZoZ5RLjp6W8NJtq7ThaDwrHpKM6Kamboc4EszJyXDU5KcXnscS2FCdn81VHAbw7Gop4fNcMe",
  "key24": "qxQHtBYUT9zbEs3KJt3yGCVk5orbQaYeJdijeDJAq5bikDrxyyfNrxZKqrNjf5WzVFAYNwNBAGWZp5c5vvZ97st",
  "key25": "5qQ86cKK5BEvg3QQj7LhCX9u1ZJfL2fWeZZFv6eTp4DTervbv9ieQgQq3RNRRDXFD1yQNh4YYB1NXm1P7GkCibQ3",
  "key26": "5PuLxrEKDCFSPj7gZ4yG9qNpRfrb3e93U4YnGPtkxBYDoAHmSuxASk8WhqFxuttHgoJZzyV1oLMHTKdiE5Y9xxdv",
  "key27": "yC16heEKhkBHejAvLNmytR4aCq9BFGDVCbNjfYdRgEdzWThTetRRkTW61KENLXw17qpHLL8PkTFNFF5xtcrECv1",
  "key28": "4rcfZbCiNfcbKncEmr9YgQiYj1CFjragfzrfudLAUkrbhimhQ4oTkHAh89RCcb5qHcxKieaMHdoBrxFGtueoxjDD",
  "key29": "3Xr3dFxM8cU4LhuXHESMoXTV3XechK5Pdm4PMteL6cCZNpBZG6PVi6uvSaegUsELbQUd69tLeJQxKMgPLNYrUxTi",
  "key30": "41a2K11MYKqBnyYsUJiJGPmRE4NvBAuDLjG6gDdgXxap7afSvX79SshmRg8J41DMRH8cYKtqgvssarDWw9kcK5uC",
  "key31": "49TWAUsLeL4bpXJd2PUpzgXBbRmGPonJiXLPnheDoceY3cBg55L9xdZSeD4YwTnbfVNr5DxNyfZsr83Su37TEDEU",
  "key32": "2B41mP49xrxuDEp2r1HqpwDRRaPBAMmyCqdotC63w4NVms7C5biQWT2xD6e8Gdeb2BJeqvMaWyaYRAT1g74MySef",
  "key33": "33rFBRcWuJanCr52YppRmNtTqkYVKT86dhqcBPWBViHRsDtPUhsWyrRdT6T4VXo2qSoKekaSUmGDSyw2ZpuF5wp7",
  "key34": "2DMFXTrmKsdELdfXPDapfoTPTWaEYgirnNheERh7vgcgvBp17UgZgtDShfe4cRuYfGnBNgzp4qoHTLaNnBh39WYy",
  "key35": "XPVJc4LxV9KH8hqxA6H5mpoChnok1oguiK7NrpeQWmdkxEC7S7wN36FvdPWGrtPwiF54hqj3KARCC7ECvzTy9GJ",
  "key36": "4x7nANRSWKxqspRt3HjkLgcqebqAomyYipcP2vKT6BwiWxHEAfjmvMJXEGsQmhfhehTLGNWJGFKZeJXcRzAe7rys",
  "key37": "2p3Bkn2abm5w3hyxkwUdoBCWTwTb3d2AGBRXx9ig1w48xRcXN9MQqoBR2yEvcCRn2nd9ryff1uvTtHqgtc68CRbQ"
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

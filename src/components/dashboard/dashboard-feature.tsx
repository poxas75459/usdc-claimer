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
    "4UB8DVKbZtjqAtpQAviWYLkA7oiHm47XxxQhMBomEJJCShHkApqzADdwrRkBub4TudKdQcRYM3V2icTYWNy5s93x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2LkGWrtQQwTCo1vqY3t2sq8Trz71DUnnL35wSYFWd72kPBcnqUTY65KsenyugppQRt9BD56usf5gHUu2ZBgntt",
  "key1": "4UNav8jQFWVC2oEsEbt4dN5Tm27SfcB7RfCRzXwZciUnhkopLEx3daMGfLz3oyoCG9Z8GAgUsJ7g4KRiMuTQdnpj",
  "key2": "4J3iczhgLDZipj4SPVCx8A5UUkqN25X9CRXTYepqFQBu5yKuRi7W8Nrmh8LiGnfiuSeysmPkW7M2XGGRNcBLUe5K",
  "key3": "ukoKFLae7617s88phcssUVN7fu6w1mdfBCd7WDrVU9hp8u4Ly9gMwqiWV4E9bg5JxJ97mXpKq3dfSjihosqg4Rd",
  "key4": "5wdAKNnwK749vvQjbMZdt9AbMc1bNDPQ8cqeAsLWYMZwc7cExwaRA5C9euPijGrokybYm3p7N5HPWny5ykSBWKGT",
  "key5": "NAgqJCLu9SKWNYkqJHjCk7PFnKKVFiFcJkH6WXq9ac7o9sNbcKfGRonr5uABZKS7nzt9bEX6B7F4baKhqsNmCLL",
  "key6": "ycTW2a9iMVFaCDH7PZEp4BveQPUcG4aVsBZwk67kyxMSUJAE4MwTh7LAYjCPxDihtenZGMwbw5XA1iN3nPebZCM",
  "key7": "426Z8eSZf9EedLBMVN9NfHBpFQJxEjn4oaJ3CYkj15GdAKgoo2h4ERJ9H5UEfsnDny6GJwHqizjgWVPEG3VuBPXh",
  "key8": "5EGYkeVqMuA6igxX1tcNoaFKgPg2v1RjRptTEndHYmMtwxukXjzDQwUVvas1RvGaErkDfAQMt4w6UhqCTnMMkHNd",
  "key9": "285eevGuvHxp2CfMbYvoAF5P22LtTj6FR5MUgoczgijPijkVsHZ7nQqaDzT275nJB8r8XBAQQ6KuVr5Qi1icTnkZ",
  "key10": "5w4vRv6pH1WxuvLB6ma67cuJtVU7sJJSjmr3TnkpUHKBLzzeCeH81BYyPAx7w4K2WojNbPXxBcHgGCDqVqJMnVhq",
  "key11": "2qbc4YDHUSSAjDWbn7wVscwitHRbGn83CfR1y6RWCdWHKT5qEmw9oyMyyQzqWgfuUvkj5zjEB6f6t6mvFPmMemvN",
  "key12": "36ohE6aaYbCf3aYbKhsCv3QPLNDo4gW8yx3uCvn411BKDFUap3UvnXGgNUztUmU6UNosyWPn5NzbFEsWu4VwPYX",
  "key13": "5xm8ijCJrW3bufmEPVyE6MtkyhowfM8dQjUitDH6Pv3a8DzxnsYjq5irvY1md7o6uvaSveymiPcvSMoMPH2FuXYC",
  "key14": "5fPT2j26pnNLufmWaF5VxyiJvtbseowhw1663j3CPySwj8xsXjgiERN8oo4EgDYo1x1XvaA1Ls6sFqSUFnTd3Ro9",
  "key15": "3bv4cuR6yJwkerTn25bkVHX68LPqprpGvydFuLcp9U3NzEApaSpo2caT75UWisBfJnd6dZmgFP73cAqwXhnCueoh",
  "key16": "35xZSF8fbrG8M7Y6ef2TdvArZqepof2SNhYuGo1aZqwLyai2gzK2Re6rLy2fsZPC1MERaYP8CoPsnffK4U2spAXA",
  "key17": "4PE5EoDtnpC21JubFqbgGDmk12kXAwjUEVsx7moKaNtjU4Qg7fbzoEPntEQYUqSbQUGuiVF9vpcoQczUaZeC1SdQ",
  "key18": "2ZtAoXrEFSoAnc3vgtDyFccihd6MaYKhYPGTE8ZPGhMGH96Y6ZNdxW2tpJwaRWnHMxUM6vP1rnURWR7WF1dun81m",
  "key19": "2hksJtLfe2P2iHmU1n1LucEFHVPy2NTaiZPLWtsoE5iXaRpY27A2RUjJCUvs22FpMFtYwy7cHgwE4njiydDYyMYe",
  "key20": "4vVo96DcXkrxVm8x9Zr9sWsGXB263uCsD2n1Vr7gYhJoa2ph3Tp3m7mCxosdQf4NRGhCSjn9aNzzFxJt9H1iNZNc",
  "key21": "4nSwpNGJvC6LshKYfLHbkZsLoJSL57T2XRji8uxDDtZqjvxhFkuhDYvyyQYY8Lgg24QDmeQEwcyNZWSNRCHaQnHT",
  "key22": "qBDPeyjU5WTZyA7iXLTdz7nEHFaeLLmUfTqit3oMfJAbQHRGRvRwSv7pT1SAVxthaVC7XKsm9nNKDNUwVsXpDCP",
  "key23": "bcpJdSFrK7ihGa7sZe3rAa1E49txhEtUDSAWrTqPqEk4uogTAW7s8AFg6phu7j28TjSyHRmGzGtdkK9CV1GX9gn",
  "key24": "545nw1szXNZbfUcA7DmtdZ42w5hieq5TT1vccss6VA6r6KMHGKBkffmevnoHBDfKtzpndXCPvuzoFq8vN3rGSa4c",
  "key25": "3hsXBwG2CcYHGGiwEh6U5Axi7jZCnkmHXPg71equxZL4HZVgU7whFCtKiT32HkdNoNZfe544Js1QwcuF7Pg38SCe",
  "key26": "62RAfhK65UnA8m9Nu2QK2FcG8eoaNsbka8FhXxFbQdG7bwmjNDNcLfSEQFW59B6rScDRyWKfCfMd7rEQaQoqz9f9",
  "key27": "4wwf3jKK6cW3o9BWQ7jDoUBzpPy87sSLMuox3dK3kp5U8RsdXkTGdGFwb6XvKygZbiBRiu2vuaSvPgBdqW9Pp8Ts",
  "key28": "5HSCdBZ6eZ3F6qEE5kjqZiyGByU4QUnUFymVrEm5BVWyx3gJwpXxKxXPRgdTjv4k4tKFoiJycJtheWkbcBiuuxgt",
  "key29": "NRc3rM8ub7sV4T4DYFZRifPaeLyWReaWB7zSoFUxyvDbPAjvxkNgZfinnwKVnbzWH2h7kX8grmAsghuTxGWyTE2",
  "key30": "w7ijcbSoqpBFjbaRKRzPuAWvDYK7tLQjqZfnmWzPSa7zYug9AQJsnZqDuF8LCXszu8nyKybEPFGh9dFwYzS3skX",
  "key31": "5MtoXBeYECHftuTUD7SNor2vYBmjmm3p1xhfTR9tbqPVkC9BhLY5cC4kWRDwQFR6FetBLepWBLTpX99SDzHgN1et",
  "key32": "3a4ZEu1oZSA5yY9JBozeYfd5PRve1CvR1WZgNYRJGeEoA8Q6pHNFUpNpgmH66MeU2qKtccVsYEvxGmHrPWmMe4L",
  "key33": "5BtSNx5aU1qZcta4jrARvgxE34KBy7MPqmju2gLWyh8q5CqTpgAMffdeeBd5YZyWgWKtKrCtQBnvJkUzHjGczcvP",
  "key34": "2TcD2RVc1gBDHoevhstv2XL5t25hpwJMmEXg5YLRY83tB47kKKpfrZD4GU6Ueo4yhdbHtYJmBiK9VwNysnRvxxVQ",
  "key35": "4Q1rU8SVrB7Qxj8EtTM2Wj5y5BnvmWyS8AwcQg8ybuMWJv3TMKn4pEg6G9pgP9Cn2hb1efL7TD3NwMbrUM5MRiSo",
  "key36": "421vpyxiBiWKMJoNbUbYYTpCBpRqBBnHz2cHK2HgGo2VL8q3QZdN29nJkFbnLXKzw1A4TZbzHuzzLXZpYJrqHTqH",
  "key37": "4yJ86FxxE4jQxFwQ2qjsK4xLS94oQrRoHtthwSHPKkugWmaMk9mHb6M1B8BND2gDmr9G3g2iNFnJwH42R46cUagy",
  "key38": "36oQgjmVncN3Rr3c5zCaSxFzY5CgTz3sjCXo7zbSCK8eezxJxb1YP2CzfcoZR3YpoUP2dG6aJErhVomFXEH8KWpD",
  "key39": "4wgvVyjUJEVPFeNRKGx4YjKankUEwF83EzjxWPLa5EKoJVRXbGNRLCczsKey68d42CWJC1BzYFsUGLGc34bqE45x",
  "key40": "LyTmqM2WpZE6ciYsbWj1KYiorsaonnKN6XUWRELgeDnyRoMYWRq9wb1CcYZgHVShJQy7npyjjFLvzLgbam8GGaH",
  "key41": "3qzC7mcXXkyovz3eiFmikD4yK7dUNguUafkcgkyinBd67WsoHxXdvpNHxmBWRXWsyc12kzXohn3fYCbZvsxdy8wC",
  "key42": "35qYnd7nFFmiSqRaUgrFWGELCbYCS5iiKJ1F8DUU7UDDWvxbaKvPbwKxjZRPgiLBaV11Q69b3SatmAAX9dpBzuLq",
  "key43": "Foh8mExwsVLDryqLYSaWCYSHUfj8JLpYWeZvX43UeBq9SUxk8nmeDcL6Qm3RxiT8eFXcZ4vTYb4b6hhDHGN8BfT",
  "key44": "2Rzy4Mx2PxvM1QLd7cKYPUuZBEq2EggfpJRjfBa68Y9KRQ4izCvEBzJzMmhnS4L5nCboVxryQQTZPoudY6GLAiHW",
  "key45": "3dCa2ifVAY4rSAwJzLuNkUdobm226QSFM9qsgAia18eTBQwEZ3KwvEcDHdgrv4HGyTuyoe8T2SjeP3W65hUuMUfD",
  "key46": "35QAcf41PVvEsGp5m7Lnqwi3L7ZLZ8JbDLjypCB34opiLG29gmBpvveG5oT6y2PtW6DvurWSVSfvCkW4AEhqskcz"
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

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
    "4u8XbSdyYxnDFsgLNLrh1uB8WUJhpPS5MWrEF5snBmCzRKga1AquQ77T81xcrDfjfxJ3ZLsREPN2GRxWC7uFEgyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZrNponWBKxgsd9pZgda51EHy79hvdd3zKjnTdqk1ZQCnPtygb9a79XjW6qZq5fieV8RevQAxacM7zQPUMgH8zAQ",
  "key1": "2eebnWnKNjGJYcBF4k26mP37RqX969ocFQgSGr9XRhDKCYpCYi9tRJ51zyKRDKAD62UGDZ3kq9CbV6Sr1Az6TiqR",
  "key2": "5yvXX2SwpvzwbSmtPBKgQc7pMPDvFc4k55YUJsioStWJC1J5HvJkqdniYPVpbUZcwfwahiTkUQDTKyncyCvSs9qk",
  "key3": "3aajDbuoDgqLoFUoRAjYH9UbWXtJE4hHbxD5sYXtEuxHNYNd3CE8MWbAEs6X9b8QeiaX7yaqhL84CsFcKFTCCfr9",
  "key4": "4mmqYQBfqa6AA3Lc9qco1ZxT8rWz3evx5pDcQ2wed2N7BXGboWVwjtoJ4rJmmnL8Ay8ANvj52fSEK9soQzjwdF3C",
  "key5": "5YD8CTfQCnNbDvXFZGgJC8owfDd2hn3w7ME2Hdx1dF323vQJJ4JWKj7QeCrMNDt81mgsMYTmUEc6x64d59otNjyn",
  "key6": "5RSwZUXEb47z4VzWk54jUp6bGGfjLrqhef73oUpffaELRJmaSgLtdrMtFS5BggZRRPHk9hA2Pxz7KM9ZXwdi3G5i",
  "key7": "2c9w53Y4kT924zBdQKHo1k8dewkrzvwFz7evsnvgBq5mpoqYNHfDgAHaVixTuVpa7H1u9fQGTYPeY9q3BT9x57yP",
  "key8": "TVLXK8MKy9nX59UfG7Rbg7T9oayQvAMgNA2YRXMQWzHFdZrB4opFwekmViBkWdMkAn1WcSYakyogzyRrqHAsP6P",
  "key9": "5WmjYSiCVi2eN5Y8KRfjyNdC9ZQWAUPQfX13vLWzDH7RcwkRDfTr5Ef6Uuh48i8HjAC4jhCRnhvtsnvYQsT2WVQp",
  "key10": "3CCWjHEQCgqbvBeKcUbesW4hFzuy87ZiWMo7VrRxneE3NWvDr6vb4MJkhy3Yxvb38aTUGTeiKXGKPJqMumdVEbVs",
  "key11": "FY992sCzG3hoHGugb294ej9B6sRPfsmwa1tQcGzpAu2JcJDvGRvxPnS5VpUXR4NddduHCJDnqRYpCb8mEKQWUH1",
  "key12": "5XA6VZmrCpkqN9hBkpQTUBhuVhfdzZqRTtkh4GgAXQK6vKNJKMD1xVWGrDoZnnPq5SmvJJNwyUWRnb2odUBAfMxS",
  "key13": "2s47XtPkrRLb1A12WYYXnDYdgAyvusoiX3BhdKEZ3zEHPpzUX9TFe4y1vYhHhoRBMJS6dUqVjiQfSkrkrzMifPwU",
  "key14": "4DdBhttW2d3VN32JGSE7M2asNRMC65wni3fHeSLmehinHr31wcUNbWCYM5otZArpZxavsfyiQyE7fTbRd9SZ8g1Y",
  "key15": "4m8NTX3jDvMcJ7LVy6ysDscCcLsPUngzCAZkbe7XfZpZ4RKzmzyqFM9U5uqamCaVGQevT1LwbwnWFDYqH4EbEFcB",
  "key16": "eqD4JNJdqyNrGm9u1Zn1QoTGUWiL9h1LmpWDwbJ1QH6o5sy4t7kBKaJsHNqnCwgs88EuL5J5BRzT1h7bgC1BxzY",
  "key17": "XS1prh6bsDSgh44oegrBGTA97xo7xXFRDBqniZjoFSzLyDgrnw9m8DcYmMh4NZUB7MTRF6AqvRipBjfCfofMp7D",
  "key18": "234ptcHusUDJx89gBcxZCStRvUhFNkX84CJ4nDCfyCMa34niz8pNA2J2DL3yUNsXJxTieXj6c3Thqf9rhnAVixsE",
  "key19": "4gja1oFFyivGBGTizMzsy3gFRi554jTJnUJi3T73o16LKnBiBbaWghve2gnRbWZ976uuEYUEER6TKdfsLV6iTbb6",
  "key20": "HdFM3ZYgzojq993Pwvua5dSQU2y8urmjYsRAWAZNVrKtXwqpENRFwCdvDw7TG1wsPxs9JBgQU6YkxfAspdAWT1A",
  "key21": "5rafe24Yr7ap9geGEWxt7k7bUgLsQm4R7BSj94A4kujxUgyTe5By2pKnpENh6DRLbvX12dPnjkdZuyGZwW6TPypk",
  "key22": "h6FpkCsRCJHsXqQXM9zLw6N5KE3zrcUAEdTjDnXPgVCJFSnwsb2ruYwWZXtRZNZJxgy9FhtrhqPMs2EkNh5Mqfv",
  "key23": "4o4ca7pJC9hSP1GTkSsVd5tpzMABDPtnVrowwTvZMKp8jPwrDxSqFvDHkdXjcyUnJqZ2zutsaVh5du77KKMCBH5A",
  "key24": "5XLfb2sFN9G2h11Pa3yPemEtv1Bz4m6azXaMGeNwe345nwfb1BBQAMLmACtGiWu7aLsrwUYESLRYzNV89ebGvRJj",
  "key25": "4Bd7HssHtxmhkvHMroWDwfKYn7MHxUUzfjxsYVBMAns1MzQQockDywwhc515e6q3BuZva8QuTazpsTh6hQXsvn3K",
  "key26": "4pmYqsJWZBdQYdJvtw7G4sQ6NYE5KbjvgERo8wp363AUrhfxTTnRgGMqndnduHKmW57ujFUdEQXPcgYWgKTeDg1T",
  "key27": "89FTahJTPihaUfTRJsbWwXE7pwfR7DFNzYsNavayrcnJWBezC8m4iSxcRHxY1vUmH6c2AkepuPs5Dsq5V77rDZb",
  "key28": "g6QsDh1Ur7WbWVfF8bY69GrTPH9D1dvQDqmyGn5QAfeadzULrhTqV1zc8mt24rViWSULcHdBimB9FbvrfsxkE97",
  "key29": "G6VTXCPFnstHSr9yetVaTjTxuPBSwadbewwwF7xPLWadAfeSzKa14UvQdhQJUCdznmsw6se1VzZ3ibSfqAv4njR",
  "key30": "4A7t97wYGT3iBa3TgJgnCHnHWNX5dVzUqnJAPkAG6bAfKvUQMHJCzi6HPkvnmzap18rkdATK8wH1xganK627jaXT",
  "key31": "fAAfdDKG2tBYRFSQV1Spsjin2FtSkV5iDKJqoKyYpceVESoPcmtf9DpTxn3eGdSnuWkibkNo5P8WFMiica1sVUz",
  "key32": "4Mf6Eas88hc78VQyhbEZw7zVvLoVRARJsJNHJTorxmUjBf3HBm9THyfcVHFrC7LvxW4as4ha9HeV6ci1k7pxhana",
  "key33": "tXZpa2vzKjD5uB6gevMRzsqpWZvQ6RjeZDtZAm49AKxgGaTuEiDayfUt8vHevFmGiA1DKrYtKkUaw6ttvsTLsxw",
  "key34": "4hijCBi1e1k1KDJmUvCp39wVeD4VoMja4SBDUCznoBi7nxomczZoUuDdpybgtF3ijqDgz7wLFRB6ACqyGE3NJ8fh",
  "key35": "3hPpj4tZjv6eug2ERRzoCkrX9P9Y8rV8F3cQW3DuxLPrEkPYtAvgoeE4zmcW3vq49iTpEKjSJyadFkBph1Hrsfvs",
  "key36": "4iqCihXPodvDbiX2TQW32e9pLn4B58LGxbvmq6keLXRCeKNrJDtfPRqokYTs7huayBhHPGn73X9HEm2iMuHF7VAZ",
  "key37": "W329xsWRKivW4rqHuZzJTzXSdi4Ji3yWkx8Bpns5AXTYH5YD4jd9gftMkyQ7dkbSMUpZRbNKeH1Bbcq9pH5BCT5",
  "key38": "3SKRe4gDbhcfS2HgEXxoxPjhLMHKwCVLGCHzCroB8Ajf7iCeJg27WfHFGjXP9h41qxt698SghfkPQwC8zh44jXyT"
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

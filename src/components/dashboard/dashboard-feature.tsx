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
    "2j9JSD2sB1MEtnK5GF3BXc3JyyMb8LCbuG8QjqMxCFHeVvsd725TxhtRqLAuiLUtmNyRokQJZEiZrnQnd42nqbdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rA7bJ2XYRGLujtssgu35gHjzy1BHPpkpfjPvfpBU5QHS8wEQ5cXySFxrEJtntm6zRHNQPyTooz5gPkGuxoNQPWh",
  "key1": "25oExWMjaUnMRb28it5vgzUdBWRRNgeghzf1NfvqMexWwpQYnYF8KRscB5pq2wgZ2CNX914TmCPeXPqWiiJ62n2Q",
  "key2": "3bSyizSHdYTbiLmSEBDxiTexCFqHJUmk2c4iT5PRBwoDDc3LpZQ2J4biDrk7cgsW6vc4iPsD9t59c4kcVaVGSkzP",
  "key3": "ASaiNKQj7up9Tgk6BiUhavFsiXfpmscijc3HfVEJys8zAYegeHBsncXvsQpfw64Bbnbb2Dp2D74t6P4qumw8B6v",
  "key4": "4bURPXhcNqqwyaA1QgKZnibDRrCd9wBJziXb8NFgA92Fcr5VRDZp3wQhQ1YrySjAKiXGmhCx7rZAKUcR5RgA8t9F",
  "key5": "JaEqydfha7JKEMxb7Q3Yu2rr7tPJGZ8SEQzMDFKDz9V6fc5KfE6UfGAUdmCn6DVATWsmZ7YPZ1qKBgtou4uVDMp",
  "key6": "u8bWjFhs3rJYqfsR8XZ5kJv2KVt3fiS1v6FjjrdkKY2P9MZSv7BKj2JqZ1WK7fjvw3Y2v8ohMB9zX1dhefzFzKV",
  "key7": "4gghhtcVtdf5HpvqWNBMTzPu58pesFAMa8XJhBdcn374unStmerKtfm82upzUqNdaRoaoMRHjUQo6thx7LomiB6f",
  "key8": "6Wufm7ApNBuTJrTZV3oyo2Wv8o3uVJUbEQxNAVXvLXH3Fztovj8kJVQUG87pG1VdAs4HxHQxkA8mW5P4ccXdt3p",
  "key9": "ua5AJhbGLFPUf9PNqJhL5CyXZhSh6HRnT7x643aNh928qVM3TbDaKdkknygFRa3SRheAiEW9WyJuvaUoLxQBK84",
  "key10": "3BvJP8SWBZ8kSzJzMjMMAS6q1X5aTVJjZQy7DjtdveQUFaZiTng2ELvt7o8zU5BZ8Fh1W7kZN5Gm42dDu92ZoBM8",
  "key11": "5WDGaPudE3PwsnAJZVp7TV1AsKkbkSKWyvChc2gwCKuwog34aRZVavAj3xjH3P8fryqWdUD5Y4wDDNCPW3eRxrLF",
  "key12": "ayzABQekf14rR1ArZLveqJsfB2qHFgWiK59cdGkXgy7nS8mZMgZ8ovE47DFVbmg1RfjqdE3LuDHFU3pYdN1NgPF",
  "key13": "4VRV6Bf1Sh1LM2RVBbRe77ZjDvhey3KeiVudXCLwYtoEKsrnFdaSBgHsoM8JmwK6uhoKwuTtTxHwDpso92UmoAYX",
  "key14": "5A7njkMawt8b8GLa1K9CVEEB1MYM9zz8WCXmgjaRvwiXWLC4HSndKoAPkP55Dv4koAMYau1s3hRYWCcQxAm8pLPC",
  "key15": "Jdw8zKALGLsTzuauMyiWn6kkaCP4ASXzgj6yjhKhZqgfkmoQhtsaRUL2hJ5tVf4nhVZ6C2a4eu38kXE2gkeCvds",
  "key16": "4k11j68dZc9xJiFQDaqng8gRAZaFHGiBvymP63MD2uaJW6MgEKELwhuSMPLfufK6t6Uj9gBBnDLDsed1A3sFwMve",
  "key17": "CjVuQmGmqjxJ5qfFMsdvo2Nm33GzCinyYrLnW86TFXsY4ShDHq8Rk3L5CsebkJkssPEnSGRBxyvAUPynBQwBoXQ",
  "key18": "4TGUJ3fDs1Sm6UQgZEPGj9oHX9ZLfZNgrwNc33C6Ra9WiagsQEGuy6JBZ3QVYZakw63BgXZnpPe4VA5J6GjQLXqu",
  "key19": "3tPDRECRbNmdtE6khP9Je7TeUG1K1Nsu7XYwk2WdrgBoqJksKsdfN35RL2VvCXVpcFKjy5nBDna2ti325ExXquh1",
  "key20": "2GGpeSqwjftvgCZEVYp8M1d8YRg9ZG4gu25QDnhZR29g38ToFqEE8BLhWXYkDR21uvagD7mmAoTXLJRCBSbBtD7P",
  "key21": "3LBgYtHyfpNadjb6NiKqGP7ZXpZ66FaBJW9tUduekUJo6NRaAp5rph8kj2v9v3FW4T2Km1MWpzmGzktpRfrGvrLq",
  "key22": "R1PHy1qSTjryYiwM2KSaR8fGD7VGW8QNrwJmiTT4Nkh3FTVFa4HD2gP39JMBDjsLxc3xovK5bfxDYGJZuxNgGHi",
  "key23": "5RU2a4AAt21yBCrQ39jz4ZfzzyK5pG6dPTfJxfbKj5nsieyGmwK5gncGVtz8uvPQK6jn6Zw41VzXujk3RBHmdcTV",
  "key24": "4V1e6atdWrfuRtpZERj73zwPJSSFSNCWqfnNeYH2d5UPYDYbJAUujunFR24rU3c9S7YfmdsK5FLaS86ZbjnrSkhs",
  "key25": "2zbj3Y8sEYY1S18GskWX4sVB7FKaFtPM8tH5CG8tPdKaWXMUtR4rZ1ZkDkbtjC7aujnsiSKMGZvNYSuFV4dqDxSZ",
  "key26": "hUiAW2GTWzSrTwe9i6fber45PNVEKNcD8TJGXZKGRRLrofMrTtaUtkt5afEyESbERyXcRBPFKT65dYrgmGudseR",
  "key27": "5dtCEER32kjZef1LhcxEzfHocWtAGpmULz5Bkk8c91CSgHH8TLS7HQsTpA9NJE3ZgTvXr8KgmcbNBR5acP7Fi9tb",
  "key28": "5s3K9PrTi4Wxq4caBVgECeh2F7725LdYCqTt9u6xiaxLujf6Zw2GVJjnvizHwUMvkENiRbD1EMTBJ3JMHt8Rgkwy",
  "key29": "3cgGvCNodi56xfmTjY7TC7RvVgLYfvg7TuJfEXqLRQVzqtPrHJm86doCiBw9ch8mZ6FSHu6AjHFssci6d7BxRJDz",
  "key30": "5r59CfUbZHeNHc5dAaaxDpzY3V6Yz5qKDh5ejBJpEnehYzarRoCqyWYTksjgbAnarUfWZuc8usv9Wvrsxe2BvD2A",
  "key31": "tyXyYP2vAEewfdZ7JxvfaKqmfycAzcxMRYyMNV7dJNSZ8mPwCY52oDy8gVMDhVVPf4dYxqJZzSa8JCD3n3tpwUo",
  "key32": "44EykvHRYo19GhowSUJhLGtYMs6wpgwyoQL8JSUDjis9jZCUrFKNdp7ybbTL18k5PQSxZJbhjtHfm7Mj2iMQw77P",
  "key33": "42vMVM1ZnRvojfPbdQPyrDeFuozSMKPgZrMsUd4JxYzFLfqhy1DWSYpKZtZpi2swkayRtv6rWKTL93TJxDsWavt6",
  "key34": "42KB46Ev5hDeBgv2BKbdwV8MXUUbQKGLFb7jGxbdUj13LypDD8DmY99jRFFWfrc8qL61xttbDU1MuqLsDHTNhPNW",
  "key35": "3KsSb1csgCVgqpDKgUywRcXGkicZ4mLAqiVeqStoXWet3x2NsfErJkyrai3wf9GQj8jRN4jSrCHeYhuv7c4LYsEq",
  "key36": "3zJ6MEWcDpguJiYh89vTmy5SQaRjso759odR5YYNNRBBMmcF7YtqEG7d6BLux1HPF77N9vxBBQwuXoh7Sqyzm4LZ",
  "key37": "LiHCwjES2wKbjZzBnyGnrjTzci4iKRFVu158XQDYYkFH6pikHK7oEs8eYkMY5Kt8iWXFh8adDPCSMfS6qhU1Abj",
  "key38": "4NhHh9w4YrK6c6tmDgBmBdHxw3atvL16P9gXPPuSZD7v91kpLiCup2DcQe44wboaitP7B7pWxSq58mMj8JJdweer",
  "key39": "5gffX9XMHwDe4uMUc4XMGGWBHSK7qEx2gPErwj1eAHxyYVvHSCVXKZswotATS5w4seZ5CUUYwcVbuYDMGp5YGqpz",
  "key40": "25AscepBDJgTthsVxbHKjyTk94GL2j2sZYniQyYzvatj2bZxXuiTCqWzHtKjEVYM8P35sxs64TpvMziHc6Hp9m2B",
  "key41": "2pZANnkzMzd9HzaDktwvRMeZdgv5Bg2RKT83mdCdRcnQ1i3QZTLgSEXHk9qz6SPWhXpHGSGp9LpNJ9N7uv9kYf9P",
  "key42": "5KCyavSjJWEUfY4q3BTfwjYVsjayKdZWoCMDZz1vmGsiR5ASkPENF4nHxq4i7gssuv6BXpLVCL8ND72Q1cJNLsNB",
  "key43": "343SxBYVbqDdiMbuqVVkkJAZGyMYPTyDqa3hBzmYBaXizkSBrtZemNEYyMkpSbUxdUjtGRHy9CS4CvnQhXsRSfhW",
  "key44": "3Q7C2ML12gLEacjWt6snLn25ssVPqkLfnYxP1a8XnP7LMffnZ7YW26wQVNPZtSGMn2MfgU1LLzZcsHWNX2XmqzGS",
  "key45": "TJkrpaus4ePSHGrvpT1AuBE86RKmBmFK4Gmb8DTNof8y7sYQwA174wevfvsUHR633iAi7APvxxw5erGky7TPrDx",
  "key46": "3DEiBsdibxfVz5gAQQcV6tonLnF6GqFUafTZpNiA6niQ45dPtfgaEq6xqCHLjAA8fXn5s5juKR6jtSFWZXeDposf"
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

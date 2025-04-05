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
    "4vaDp9bJLUB1N6K6dKqevxJUPAfstv1PKVVUzNELkXEBfJC78qMFcgqyVGTooB7YYisPV8EjHxKCZWowDkpnpBgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SrEvmAjquaxCgXGQLuPojpPoWCsRxQoNEipa4srK62WVe2M5GhJm66Dhbt9PJ5CpgUaRxwUoJazFQmx1aC82YfG",
  "key1": "2aBMsLbZEGJwhSs9aJytTz953b1ezjxAKKTZvbKQwHxgkiFmpfRmo7pxQqbhLeCZNXAFm93gMATM4NpH4k63WYK7",
  "key2": "5h1L7UmLxdctb6zguiX6pcA5X8KhuBNgGSyFd5GHdi711kQ2s9Y8kMEjzvtwApv7QzDQvMqYHoyN1ehhhTTqB7J7",
  "key3": "4zdrusDM4h3krypsQJbspGYBSa55fDu3mwsRYLDj21bB4zCPKU3oHEhSZqJRGJwyKTXYmjeg7Df9NAL8gqKrp2hJ",
  "key4": "WbALWEHwhSuyfhXCGstRUd2nPN2H2ji6VyB5djeipSJ7kTRPS8iMsUkWgPUzWcqRfceL7ieo6YUJietvuYhySbb",
  "key5": "2fVVSjn7ogvB5zzYKbrSF3LdpEBo9kEjQfUJzGR8kff6cExrCtGpXs9BzKsMBxMsXNQsjmxvi59FR2mj47AdkRHG",
  "key6": "4zaG9aJNVYudRhfuGJhKk5fkbdSnxKTApKkfbYeosiNxBcze95x2d89ChCNDjbtdDYYBu6XNwdVqwaUv2i36VgBb",
  "key7": "8FAVRVXJmTyR9U1WjdUpoz4LGEGji4w3h1s69Bk3T1EgN1a9NChdNBaRFueGH8EoR2y2N5zhWnLv2RbNBryAPfX",
  "key8": "51dmi3xPThYzr171Lu6FbRVm2YFiMQJwTkbWosvwTid54y99ept5XPtc4uJiA7PXRFoHf8sRNGve53Jiqx5epFU1",
  "key9": "44mrGY34BMEvnVX4W2gRZZ8167kbBJLtAhjsmNJbCAqWqcWof61HcEMofUCfCw7F59HaoUpMLercR8eK61kbZYoa",
  "key10": "3T9MM4TDBJTKwNxjgmrR5s4buHfs4d7ooTGpiV5ppenzScxTvhckCUs5QB82VEbbWxcsEA9ArguN9F8vcMDJxfWA",
  "key11": "3SHoguQACtsaqNM2Uhmc9cBidKdnkn2pkt9pebfkemCK6qffDkjZfW2TMEghKgKzTC3KZm9ymSzb3aTw71suv4GU",
  "key12": "2yjoF2uu9FCWCu6nxDyy35gyLerNzqUK21DmajMHai3N6hQAPzn82ohRK3Lh6RQk79t1QheC7fCZ45wjqr8EG7Js",
  "key13": "5DzPPqP7khKBJhbTPAo9QXEhPYJGrWujBiE6cHBhdh1BHmX9J2Q6TRXWn6u9tVjB4iCp12UCtYM3YBpY22G22grT",
  "key14": "5f1a8gKb8HPV6ecBsjMUSwNfh4vsdbKG4oPyMFAfACHk2V9URq1ngERt1BEq1DyjXp48Rt6ZsRVy5mFtD8y9Sh3L",
  "key15": "3HSPs885gpYR3VZezyA2uvsK1wUip4rspwXxmFuyVn9BRyycYv4nKjYUgeM4CSHwb9kDHjmREc4LPPkgEwyFcZAP",
  "key16": "2sc6k42fCqF883isdwvykcxLu2koWMXgGDsdZUAJDh9uw4Jn7Qox47PDCSPHuG2nnnqy4XXJvAG3kWWGbeRXv9No",
  "key17": "4vjeahVuAk6iozstXmMdjY8roXLpsEaPRpqtHUvWzdHP6C84zoA7yBw7XyBWrzzkiqiVJ6b6W4CFCKf5PeyTsrPz",
  "key18": "FPWQmcoWc3nov2HZfaLJ2mdHxHyjUt2amdewvRvva4YyAEC3tYuEzNSbVZvbKM9eoWyYrLF8h3woyieb12JQgyC",
  "key19": "2X4vL5nzFXRSC13b4V9xmZDHChNY7aKY9HEyBwyz7Z99wrrgHh1XNpuZRbsJacybUpKmn1w1r5XdPL9MAdZNqUmG",
  "key20": "5CWjBMbUijkdVQsSdZhDuMQJmELgam6KGcn4WQFixmEpFRpE37mcw4PS5oQKog13jHHKvhUtb57jQ81XyNs4E6Lk",
  "key21": "2bZry852G6Pifhr8hP8V6dazCH3yRUwiv8B8FBtjCb2KoinccQRmtDrErfdz4BwoaJxuz6ckbpj6dCCTvsvuSziF",
  "key22": "3m298WvQCo1ueiwD6SBULqfXCpYUbzjQjJZvnJrEZsbYYtAcQRia5uxkSX5sDSAdDy56zotrZP2LZgEw4cYU8Ec9",
  "key23": "cnWmP1dmpb4CC1uWGbaJCjMBHWJdjZ2dni6sUrzesHwr6Pk3bsPLytiPDpmhmYyh37CjXksPD9Np8a4xP6N54KA",
  "key24": "46Lszj6ikBtiTJ2N2LtjSaCqZSwVhwWKUHiw398bUCXzN8W4PRm6xvyfNV9wX6mN7H5RH14ZaT19ygB92Rp6UpiS",
  "key25": "1znVBXwgFPhFiaFLt4ze8hgDHtz2rbimvrSHF1cwUjHMcLMbicmat2PCxu55XLsoGuU9nWanSw5iB5rcqaR9jGZ",
  "key26": "5Jvwm7dQvReCWk3soZQ1UPAiHyqGnE93WGDf97ezqy9zifk4ZgQyDPHUgYUyuPek5JWTwHue8JNNmBStQb2EZHen",
  "key27": "2gnhDfh9PpmYLLdGSgj549M9Z6EeyMxv2u9NVwXHifyPnDPmW3Dkme2KghgQ2UTY4JbSj6TTWkctnR8pMkwV7Eaa",
  "key28": "54jpH6qwxw3Gb1jr1iHSoUtqtUzdUrf1RCg12eouR4G4uBZekVC5dhrH9bHrmiE4f9QN9bcEYbnu1hTE63SH8xPG",
  "key29": "3PtZEoScB4vgiyDUpBDX9hWjASe3Bwb3XwsAQYSrjcWpzefgn81FXJcZHuxDttyAji6bjAht7HFVmvg3QZy6qpBD",
  "key30": "3KTthnPzxS2B2mq94s2qucfY8YcA4eUxVFC7T5Lg3m2V2dXuKe2bFSMQk9N7WNBSjubbkhWxGB2YPYkNJMYvyVYi",
  "key31": "2rUqft4fJHrCEq5Gg9LhdYbPCt1YAdue3wZCrgo7UNE83aDnEXMRwbavA8pVKPSTycgeNwc1hU6PQvwfNCYF9CK7",
  "key32": "8BGSeuJrdjUDZdFSSgbNTnJYqBD5kpTYgxyG8Kj1qBuUXf1JtQwRowxJo1AwWi1qZTKpF69J8XsNNKK59Uxmg1v",
  "key33": "N2isZa6XnuXEHyUSWf1j2sZrUxgpEEMWLhbidx6kHcxuporSSKhyUW6BVS4QvLV8m62JszvH5hjCMmAwYfFbJtU",
  "key34": "555fSY1LFKoJieeaMyXoKMRXcPcMr5YXQxSEow9TfpHFiHKHmVUPQ6piy73ESVEbUe5DiQsUJPBWse1xrgmgLvL3",
  "key35": "2ZJPH4CnPBcEVJKYbamC5id9RZBCA2K7g5a6CGhWuc7nqiox7i1afv553Z3QDaD8mxpFuirKH9E4rYc3mK2KJHVP",
  "key36": "MApybdaniVuVRkF7e5CiqG7sGSe7Ha4c844AB195CaxfaqRpAGv55Ntb2Hz4ezBtvrdQEipQmGhgN6mhyETQ8pv",
  "key37": "4HLYC5DfgHGqPbXBbGE5fwax7KrhkRvbhtGyuaCQz81it7HujWLNeSA77y3r8qgjMzQHgPaayTAHUVk893TQXnA2",
  "key38": "53kPNnLhMTa4xx5nVMxjdCCkJHhcqGBhGLHargQVn2DTeYjHdWtsqUi1He2921wGEt8ucJCRMUFmSvExQ1xJGvHE",
  "key39": "99ETyXdvJgDVQDW9mgzDnBQ3b6tbi64npvYSX8oqx878jDp2FC4HPV3e4fQvhK2rNrf18A48LVckoMthitq4ewn",
  "key40": "3Tqn9tHcxwoPKGDyHPuU4Qztp2NNFzKywdin7AxqsH3vT8pUk289QGcVJJec5PNqrJkP3Ut2RnuVXciriN7syXBa"
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

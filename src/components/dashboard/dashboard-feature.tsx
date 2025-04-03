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
    "5LzmoyQoPcyWh4YKNLMJGrfWE2LyfgGv7hC8vbASmHwwkZYznDXmeAEYfjCjArB5d8GgmrEynKN5QNbQyFTAcfFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HK6cjgdTb1o2DxsWq6fhxTEYqVy1L28yMoaXmmQpVorAPM761hFAo4vBJqVuJ6ac6cibg6hr8SK6g15ebY1TN4t",
  "key1": "4d293NSKkpLXbAiytj9qWdWDmnYZqYRSE54F7tsCuVZ22mAXfdMhdhEDKN2cuSrjHrF6aFmh4wnCx9eKFChHzAuF",
  "key2": "3CnxvfsftCHhzJYZVhrYBcp3YuZHm5bawhDDD53W5uYPzVeMiUQeVzKi5bbn7d1bzzUCp8MAmH3qARKdsRBTx5Xj",
  "key3": "3rJ3mFr6MRxGUu9nYoEyVQKM2pMVoTuKSgrJ6raNNq3BB52ytKPGceEkWkTM4ushrNmttd6vfbzFrisMgRsc6ohR",
  "key4": "2ZAr2WbrkU9ovjYod3XbR8mHJ9HGSkCZE44RHajb5JYYCSEjbTVM4vqQHgRqHd3NCzbHdT4eL4jV5pWVHUxx52vA",
  "key5": "4CvNtT4Sg7onwH4wCYjqP8SisfYYEbVCaT373gALrChCB7upxiYpEcGfZgXnxqgDD2aoKVFwP9txWEA4hiAJdGRD",
  "key6": "3YVf8AWgL9s83WspXExGBgPdp4WMPzM3JecTXFaNZgdQNLYtFrySwhCgFYgWuPUA9tXtbEq2BZ7MPnhqx6uCLwkX",
  "key7": "3FAsvzbtztrfMGkHu85jnXu43gELfgNN9ksbJyDfV1xFZKWmMNn2mHYXjm7ha2zHQKvJEQvGVAqnrqewBSnbMRd1",
  "key8": "51zhwEMdxjYVP2hAatkrFZd4ChCNQLPegxYdXzoi82dB14GqknmHurbEXCPfRRyvpVG6n3C4ctpJjbFo3YJGeAVW",
  "key9": "354G4Eu7bazHeBq9EXZPoFk7dfZD2AizcYwxhE2NfQkPybL2WzUkXM8bfUKUhgEMtzKskuKJZqfgGLZ3zXUdqJY6",
  "key10": "3qvUcBmB24FrQzB4bd9vTEXQxujEZUaNMnxxs3Cf7MokU2jiW8nK9C84PVfLtT1dPnigbGoeiZxviPeHpagGH519",
  "key11": "5G8NjFgd26jS6d941qBtifQRxofkkq5t8RVVvoR5eXfZaKcuchZsoMs7VLBGsZBniLAjR9EX6Qo2tCjkRqqJN624",
  "key12": "2fozSjEuXVPGi5iHGywUDHZNT4313Q3ikptMoNR8hGt77fXzWCif92joBKePujiMNxRK9WhLaPoA4RUDidwC71eU",
  "key13": "3CVXqE7Tq8htPWaMKZgiiVKy84GMNAqXXFHZ6JRJVp9RCzZDBca3DWMGEv3FRmQ9RD45iDd7pfu1HWXrJrav9diB",
  "key14": "4SDSHgz7f18SvdEwhiDFP8hfH8gjpqMhWnrYTs1v5nTYN82fgvBHJgZ7rq7N4R5LQfo8jiDX8uDUnRkmp37cQcfG",
  "key15": "62JAMCrWJT5Kte2wbqcBLyKT1KYcKehkJvrTo364YRYUXnmFGzBuSRMvYRxcUk3oy6jeMxqZ11Y6qGmB6EV4jPMs",
  "key16": "28FvTit2b2EZgkGA6vxew4FtnLNkksrXsVHbBeWLZhmu3CMwzoWRJSNPd7RuQsFnbEEqPZjFNJ3VZ6WnY3dnkzfR",
  "key17": "3fVauHgA9vp9mKLdxpL2uUeVNvmZXiRQHBUECeEkpUFdNQXo6FLV7Ksjx4F4X1iSAHh2k5tRLShKffyNwQTy31nz",
  "key18": "AKvnm9wXy9DYrqxLCfvbswnjst8AkgQdJt8EroH7oXAb3Z77VzAkKJVkpnfjFSEYpBN9rJ9Jxt7qSRYqMSGFqC4",
  "key19": "4Efwz9mgNsEAgg6riy97BHNdmVzcwU1yd9MK8zUvQwNVckCaW4REFRtMXLoGQw4eAJSN5JVYid3VQBq4f7KsNbMY",
  "key20": "51FYuvDpMp8PkFxSctZN3ksjPs1m94cdKcJajV6vVKLngchyNs2BVJ9ayeE5GbA3H8GcZpX674ANQJbvXDruxXSX",
  "key21": "cXmv6H8BMLCKfSXWW7VwFT23pNr8bHTbfqxAYUhh2Rx83GF7t7rnM11SASSVzEod8NvuvqRJjW4Gii8D9CwawZA",
  "key22": "UhjbgZRB6hNjS6r9chsFxan7gvuvKWJ9KptkNVbLcSDwg5woEqyrnKRVf6WJZu5CABoKSa5XSXtEBkzJpbj2gwM",
  "key23": "5RrKXa6VY3AYy2esCZABbKAMPu6K1MVRMaH5HNx8mRc5fZCwh3P5UyVw2a5dRgZjyu5eKmSLdK46KEdiCv6sHWCg",
  "key24": "jRS9pUWAWwo1e8Kjy3MTsWnviwkV5k3fq3x2evquCSfkHs181Qaqs15oDc7NsXWZ2yRcL3WbY87KX5eNpq284HY",
  "key25": "318Uy8VjG8WqUUk11rDDuSWaNWCUyq3KYnxoBv494CmdcnUgj1cZkXKoPtMpvjiKkspJDvr9vKrEEzSDd169Qkx2",
  "key26": "2QiQM2HV29MzW7m5oRLkYQArfvvVpUKuwaj4L6ZUkghDD7k6j1ZqMPeLD82NyV7cyeS18XNc9yGRpYE7yiHXezUn",
  "key27": "p4MDxKz1ex5YjbwrNi8gpnDgKzBa1rpJokG385zMUGybd6afyWu6LGBYN34Bo2gtt6Evh6H5T7VhAx7mJBdcLER",
  "key28": "4KqwoHUmCvMYXSWJtvY7ty68WdafBfykcpP7dWpjYnLqHbM4PhKU3eReNwmStG1KeBqU8LXHENxNnoxNvQ85gFTN",
  "key29": "4EWhJPq3HpVz1j3JsapnmnQRKjxQNvYiVtwDSojMveG46sMtcLWQfqWycwiQuiF38oWhGkY9VccyQeuNViHAARWW",
  "key30": "4yncgDYkgCxu4HjBG9X1cQy5JBX3XpSSHqvaQwb8SDg3bmDMrjPaGVZ4zspzLe1jNgRJEyKhNZswhA3ZP1G62C6o",
  "key31": "2XDjneQUE9J5KHdRJGoDRaysGaTon9xRXTsmxDZJgwqh9RtSNLU16FeW8Y2CDN3RayqLMnmC7SfKFurb3hbwYFsh",
  "key32": "v89CDTNuSds4heNafjmtK1yGwdt3XqnsZRkgQXkqTcPKfKpnpepkCN5tq27ocrpRy34LHx4oiyUyARwtVwrqGkB",
  "key33": "4MtLgHNWtuHA2cq9fppSbkfQTZz9t3LRGAcQsH7NTZBAp6WA43ZgWNiBSAdX3ksX3Wsfc1Vzqp8nYycys4Zr4Svo",
  "key34": "jvqcGBBpNAdSgjNzC6mhUjHr1ooYprHhpPcbH9tnAoDkqBH5zyGQi8v96qKcDF67YEp3CkUUZwRfC224DpG3QZT",
  "key35": "5pXyfBtFYvAMyKZ8bTgF3Bx3dM2fXpp7eZyYeGZJL9Q32HCA9r8oGhfj5Y8bV8Cp6LC6whjSYvbQALrE6VLQt4DJ",
  "key36": "67rGYkM6W3MB99rHzToZyiRN5MmGJ6MjrLKb39rHDqoq6Nr2fjxmE37QhpiNPaQNtPpT1NSicRkauGH33TVvspQV",
  "key37": "3VQ8EwwpE6RQnJhGX5ADG2HRU8VHZF6RffrZBLNTAEvygSus2XkFu3kdKtGHEg7DcMKhJDsD1bzNb2aJbUH5RYux",
  "key38": "5MohTv92xbNEY67Cz2pPKcLyMDNtVqQ3uBaH5bxK8V68RpwLBB9QVJDK53spwYebRtewa9aMuxeaRF8JnVobPANL",
  "key39": "3HKSBPGFcvHtMd4Vg9NtsmnLR1ouP1ekqRFoqqB1us8fY5GAW5TMTci18cVzUrmMqSPMcQUc4SaNcBCh8TxMS9F2",
  "key40": "5wR1eHN5FmUNX1mayEfSqV1ydEojoE2EQpgm3R3dimeMRYadLHbGHHduzbvymJnkiSBfEFHKUCzJR3RXVjp5WJy3",
  "key41": "Yh9bRWnJ61uQrRfxBxrwF5MPtsG7WHygeYZA9juD4kgfiu4j4xvXDdGNEhksu9hEAr5BH32vJf4p2aekkFS1e7j",
  "key42": "5UepUAe9iSzJA8y2yG6cmqKbxusmM6BSWxFB8CotGVjTXE7A2VDiqdk6z4NzvUY9ymyKJVBU3ocGF23zbmwsQFS"
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

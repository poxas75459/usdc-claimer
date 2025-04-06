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
    "3YrFChDtzz9LA6kcHTSthQ6CVmeS8hYUteXJvwejHcEpLLiTuaFytokr9dMxU128iznvENLbPh3utcvCMUcAD4pY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SyY4rDY232rz7ZsyXjEhEUbwZar5mSdYREqU6YDNh6cKWsTcnLeKcgnrUCHjjM7PsGnGHn1LgSQ3kmoYAc96j3q",
  "key1": "5P1C17arVBRAM8fhiAesPuwcvnL2Mgu6peH2Z7owt2JX1Ja8dBH2ww9BxyKHbDa97NSUUEFDG5x8266G3R7jLRMK",
  "key2": "2aFVGDRPLWyXXDuTud67tzfPwxM6udsa6JmamuyBbCStTS9X84G6yCTK3b4uonXifeEQmbNERSutYvSxZWFqWctc",
  "key3": "F6PWmCQg3w4fGv7jcjP6zzWGxzTMHesgGj5JN82AnfhVim2dpa8dk8PRSF5bBWYhchwxnUF3A552hhbpFECfpcU",
  "key4": "3m3tH69HGYYUJWyhzyszbtqAD4oBnQj6GbE9EHEspd1e6Ds8b5gbgAwFjbqnnhdtG1Ss396EnNyc85wfzdyVYBNs",
  "key5": "3AHuKjeBWbUfP54ihJtdEprzWxrYBo2xPQ2ThW8eDw3xmhduK1MMJEJvh2XSVVj934Qmi14gr45J3mwgkV7Sxkdo",
  "key6": "3KbwFspe9pHNCgaBAbejn2sy8gVpGHfjpXpUB4aFjzBQZYPpaRRJ6SabzNU3gTbvjn8h5CKhZgcZ5XkbpUrWCApk",
  "key7": "66GhgetAi2tAuQvuxtKULye5ehtx6y32QJMHwBH9JHeD6gMtnW7CxA2exEEpyiBmTJ3QNxdvNZgJwrcvDzGDiTY4",
  "key8": "63oifM2dthqsoaB3bAufpqHB8Fdjaq9an5Kzf1p8iKScJ2pgkkCKoFH1So89zcA7GnfYFMYy1AM9JnAjbjSMHA87",
  "key9": "5s2VrXKa2X3xd52KMJhb9VmuYE6YgsisRgtYJm24zTyz3RGV2bHsjZZSWFMPN9DrN7k57aUqqiwVS8KyQ2b2uudJ",
  "key10": "2UUem3Y2k1ymw8xzCtFfN1Fj9N1aJUmpN3dBE95XELFdmS1mQVq4WeD3X1rjEYiGAPYoK6vSwoLa6iTEYqecZ6fe",
  "key11": "3FC2mhP6waty3MPPQjzCuFpfdzXW9Szk5dpmpVqzckooDB859foCD9oLFxJ1LB36jYVoy6By8aV8k2RZpdQKticZ",
  "key12": "3voQzayzsvmndSqSi52Da4xozkLSTWp4dXdP8xbcB3tuaJkva1QBudSdwQrj2qFGqQWQwQwhE8whLtzxYnu5mQUc",
  "key13": "2DnBQErYs4QfFxzMRZYyHNfPvK9pqS5q3bpYDL86yuN8vqiZK9aTezFjoxvBGU4M5Ev7Hdcr15iu9pfse84PC8SE",
  "key14": "4USg3sTUfjfGdfDqw2VexFQoFgf6emXLe9s9ti4xT7bZtDDpfVTj5jWJ8v8UHNQeYvNbmb59XQ21G3GPv2gT7i1Y",
  "key15": "63gNibV2Qy8XJxK4ins9ibfdminaJsuTdjEBHRAUUV2uJLKpzdke5KF4Qd8Wzyn5qjzqY2oVQvS4xJDfZftQLvim",
  "key16": "1TmVHXUcauKbojTW3srbvhpgdFaB5GEin1N1Nbcp3TfdAQ8dDP2DqpRDPdKSAJSZAaMPj3Qrdw7Fc35j6xUVyBJ",
  "key17": "5WAE7TB969zjFtg8u9N1tyJhGNNx8DNu1yNLxLYmix3vj97VA7379aN64wnwFJYskYAcVKfVCKQNXBEd5ELmkw9j",
  "key18": "25CKT2T7uW8UwLpiP1aF5Qs3FMpy91hpV2YgnrrtD9RkpLWSM3SqzwjM2Da5ifpvPgfFF7aRb2QA11oLv9c9BSKM",
  "key19": "T9FFF8w9oX4trdaafAhMsrdKpu8QyVKUFqGsgVeiVwTe4KG6HQSUC3Qs4nAj16en3jSPJYEvLmgr537JN5TEorV",
  "key20": "5EkaiBPBXMK6aLfhYhjhGng4yjgweSgz65UvE2SFUSvVsTSm8VBbcBhCKQX8Dc9PJjKCJzCwYi7YffDBSX6Lni4G",
  "key21": "3EAjpiRkWEP3kLqewcYvBbinbKQ3tXUythR1u1TR3mDLwNhQAXTThMqEaevk17dp2oK9NxwaYvjLQW133DtwA9jR",
  "key22": "5dmRLxsxArudqh14atKcCo7WKr57jtnnUmwPPjm3JGGgsUr7FFSB2GY1ydfpqwRDnTbiowDUN6xZu5xkmGWHc69R",
  "key23": "2fSHoX3vJCGLG9ChwrRAj32tXDE8zN6mYD2nNd7ayXxLnm89cpnGZ66LNquzAT3iMdfaVra8JsSWK6FbM2xKMrnE",
  "key24": "2KyMyNAcHuWJrj5tv3EGHwPBsg6jUUfzoAAzD4sNrqtwAVKt7c3ktgvKdsHbhD5XBkF6y6rQKQ4twaFiXYYcgxUs",
  "key25": "4faZm8KxgSYvcG8p78nuFpv4K5ph7bi27gDikKwnc81WCn7vJN9X1osg9vyXz52JQQpDg48YKdfkQzF3NyHNcTMn",
  "key26": "5usBfSfx1VQbcT6WjXLYPNuDSgVMvMkY6GN859LHdQSaEHBwjJpxnKWjxuTUrEFoxCYAQxaYP1HQFthQngHDQu9f",
  "key27": "5DX8YVCrdfmeizBsyi1ej7xAa93xDJ8mzmLydWfJsgqUZUDPenJZ11KF5FsgVuPpYWgWEceLRz4KLD6x9tMc7KMP",
  "key28": "2HgasnLhFkCzgJbcgpa23FfgZZMgA961kp3q8A8nmGrtSCkpMW8KPNFetbxkRDbrWtAXwFwqbaLJXy2srdDxUyiu",
  "key29": "289V53TUAsNwwBzdY76DrF9kyDg6PLzK4NgqJu7f5u1d7BGdXgW44yiFD4UmkqgH41hgiUxWfUsPuR73grUfHMxr",
  "key30": "4XDiN1MXeefdZMPknz2kmSb34Z3Hxm1TkxMQusc2Hh9R84rTSWCb9HrnCHZqLhu1ippUqH9FsRaUBkfCHmX5suXs",
  "key31": "427tNR4Ce1V15vNFGYiEjP9R7xnNa7M3dBhrv1ozv359JM6WtEDg9YWN8bpAC56T7vnBLsJNYMP9qEXJq1E1uUoC",
  "key32": "2u6mN6fzZZSe6QzBcbfHCXVpzABei83iihGdmgn8zPoxHjoojCHyuH1VUzZ1xbprC8bRWPQpuWHDnMznHcpns3vx",
  "key33": "4xpjDdQNXL7zhLDAxv74fNhJhB8U66MRBW11cMAHJMqECXwKmnGzYkkhoEutofpXAvmyqKh3JSDFmxkSgM4MkaQj",
  "key34": "32KpFRjyYVxMUeb95YA9eHti2vLKR8nojjD19HgExJZWutkSjfSs9P2DRd2M2yhnHuVMHKi7n8WJ9jmWQKwS6CbG",
  "key35": "2t7PHaWQacTpyrZXxLpdyKs31mKYgqEJ75cgAFNh6fL73rRPxrtSXDMy2piUjSoTXsFdxssLC31z96JmyguKc9c4",
  "key36": "2gmyuAiNv25kWf66heTvBjBKFzgCxXzEevRox9PEvJCDuKZpUQ91FtAAAqkuaCnu1T2B883VhkYjoMgv6n1jbQHe",
  "key37": "ANkNJ26iwy8ekrKKrdWeHPLbvVJaw3r23vTP9gWE2QxPcvcHexbeTfYE1BgDfK9PrVigFrSypsPYrsZcKpuUPTU"
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

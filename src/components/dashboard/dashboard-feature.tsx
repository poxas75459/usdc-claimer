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
    "34wxE67FyeqgDW64a733zbpNHiniZWBvUFexLuu3aKKfC2myn4PYHnZtq3nEmpHxXAEobkyQ2uq77fT8cke23wYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHJYBd6ptPDmniVYhm3cuGvwvDae38Y1gV2EqHmdnaKuaGarhymFjzNGfkJD5uNTJo7Qy4vQGv3ov4AZRQTcsQ",
  "key1": "4aqXu9Jv1MZmscY7gbZ7gcGX3QHsaM9ZomPZDrHxJrJD5PZbA7K8CfVatZVKouL5WtmwHWRY4TZTd6TYEUxBfiLj",
  "key2": "4PEPyHv87DbP9WLDFnmzSK3MGiMosaLvvWeWGHhHX8BQesFv8RyxgYBFY4fPqDz5ZaBR8fCQy9AFw77SAZ5oemGq",
  "key3": "YVGGEHXfv7sVtMXJhuyA3WKRQiUQvKwvKihvdzcYbZfWFAfoqBc9xvatTTwRuVi4U1jQjVX2oTnpDN1DmJwL4Sg",
  "key4": "56b8YmtkiwDUq5ezr2LUrGCLz2iDUqVk1NcHPsn4G35okJSYvm78UBCGRvEV1tcVLx2vVTCVCNKeBUXfCc4gMpXy",
  "key5": "5X1pJwQ5bSt2L9MnrZrSnaoG2M7zw17stpc71WoY6i2GJqx1VrHYk8Tkxzk7xQq19SpaY7QdNRF6q7MRDvH1Swmh",
  "key6": "42vNsccshPSLXHYD2pMuRW4Y9Skxyjfo7oonEd8Agg8AXReVT6V3rL2L28UFZnwwtoNWX3oCmfFCGX6iy8fpPpRu",
  "key7": "2Jtyjy7ykxBvZ719fUVzWb8j3wPwwa2z2pYFTrByZ3ki4kPcEqU9iN755kREqDkX5JbE6ppWFLzU6c71d2mcKpPo",
  "key8": "2prf3cA5eXPVCK8m9NrQcrRpxtw68Re9h9GnTA4NCxKRPveXbQVPhXdZUzo9YZLnkCUmuaxnLtANns3bzWFvs66R",
  "key9": "3b1K3LBdyLub986W8GqmdsdaDJMCyVWK9tbSAutgHPKftP3FKPQzQDr28xD36k7k3Q7suqEERLsw7vYMfpR5mUHx",
  "key10": "pcUBpcevTXVtHZkRkepQPqgHkz9hiL5TZLWd3ZD2Xd2XaCMLAcWTvTv7Qf1Ma4u7WWmvZumTxNo2P8Ank69ofth",
  "key11": "s7u5CC98BYeQAGoLT6ZpwiQuRJ1TgDFQmdEck3hoi42pKVnEfeoHfXy1kqDEJWSdeYfFMUU3xXQq4TrB5KTnQMA",
  "key12": "6UWMMfjuBrPLSQnkRoSVTzBGzDEQdr3rmKinGMBR3ZvB42DmxoKZA65Nzp1833aAXNBa1BUmYWHufB2N6tjCzAw",
  "key13": "2jB2Jc5TNouRVPZJ6zTeTrTPLeowo6mMuAcPaGSx2MkKoMW37JmMBZ4rXFtxTJaX7CzV1KfRdUANHcAnPzm4LCvw",
  "key14": "Hijek5r5DHE564uLMVgq6GiUK2bTjZNtzP9yMqj6zC4ha43mWXJDwiRttwGjgcNdE5vkYhLABzWzBbPbEKPABoU",
  "key15": "4NsCG2eNDjAKkMrYuQyp96brxRZDxqkZBvQDLE1149WpePgc1oVbjCrc4DZnq4HiJsUjkywr4gHqwKZQkpvEsWCB",
  "key16": "5UtRsTc1kgKRXkutYKLCpYsBUTJmXsSrs83YmSLrbDWLnqHorAGyJYbJsosCQYvXdN8FN33Vt7zVhSnLkTxk5RvG",
  "key17": "5KMTpukqyx1ofuvRQ5vhNPXSs7pfVJ54FpMxraZ6BELjyJm8CMpaN4D7vUgiMMVGkry49C3tQyvWtuiYct9Jfa2F",
  "key18": "eAA1ehChU1Ys58uMFUycUPLbpvZHYNWMHDJtKmpVmhC96Y7PAACeeC7hmpvpMyVjduteUHqJMz2Tg493SXMJpmx",
  "key19": "491dnRrxLvvXD5aUJ3psFWbFoHHtK1Gpwwu85VcyFT12ZRbWawJvm9c7khdeXhXL2Xvu7nkVsqPuRxm7f1g1w3Nh",
  "key20": "5zbPMyfVtdY5M3vafQrQtn8p9uqSsEdk5FPN8MSsLLdHYdJbbLkjjq3p7TkHPPB9kVnKyBdnLJEqHqgeUT1c9YYg",
  "key21": "qFjFGHYhHSbmeU1z1YusDD3tzp33JGEsBfqPQSzvk4izsraiPizmwtcbCQkCVELz58GNax5HbQVCWJtfppQnoBp",
  "key22": "5sFVQRqwprrDKyssdFozHFYNidHGY3acAMQ8ZR8hAoxurGb4suj9F2vsZqAqFeMwddHokAZCtzHkizdd3CBJHfrR",
  "key23": "5FnGozbfa38prto5RpmBt9pQP4vEneXE4qbTodSH5U9f54x7aV4Ey79dKPaZFoWSMSGfYHjMvCk6vkCr7S4yddK5",
  "key24": "xLa86KRdoQKmjPYLETgeQfkWJkP6SJGFYppLHPmneaPS8fQj5YXKFBdJQu2qYcNten4PwrGrXW3XrEYkpXXnnd6",
  "key25": "ApFzXzW2aENzovE2bRdaGMSzrzATnP1NcsH25TJ9Js4vMNgK59JSzVmF4nqHnJYd5e9MPL6FFQBq5BzbHRYkYSD",
  "key26": "3cQDNdv7EX7txzMQ4gXgZdaPiUkzkJXLK8hm9f9o4yn4iQvVZZcmfgUvxyuLG87D4pbrUHFVrx7nPuqdSw9ee6G2",
  "key27": "4VNisogcJBfXvu88GuSKDTNeYVcBKqQfoFuC3ph6Ykr7a3f9JkFeJKQrJtCc85CeDU2CGHqgjZ5C6G2wGqzvQnkT",
  "key28": "2xpBaHdoKX1j9kjDZFDAHam5XgRRfMLtZ4vbbifwA34cQMQdmG6WBLHGci1aXQ6HbH3qB7FeQG2ACBGmDLAPeYvU",
  "key29": "aEJMAqanNCsL82zoouShF4J3dVHtnETdyiW43Uqyhm62hPUTKXzVsJhDa6MU9Qmf8GyKrfMvunuqybiNBtga2wy",
  "key30": "4NhQvaxtrdMygnW9gHUQK599uLNpoQwg6JrVJJ2xM6WWkqBiHiJx4Zj5ichoxXSD83j4myokzLCEh3H4d1oqy3C5",
  "key31": "4tYvWnEYFTgRqSC1VbXvSvBkyVtH5nQ2Xmbat3axAMphDcbn2VhModFbQ6srFNhjXNTbjqnZNagFZvBSttBVv9sP",
  "key32": "3SwKVmr8WDZynTR5vWrmwqJ2577hcu1qqYgRFR7x62mqQdpn9ix7SL5wT3NtXeEoWGVkvVDazpQUsbXjbDiKR9PG",
  "key33": "4Z4UkMJ4nSr3SChHgH6A9vAfPYFzE4Ez1EejwXYrc3UYrpTJ9r1fM7rj2RPX4gSszvppWaDWdqQZg8V2qWHwNb2i",
  "key34": "61QnfQM35ifdgRjPSUExNiV379s5EFJcLARKMb2T7wssfQ4uc62tc3B6zszHiuvuwVp1LvZckqFwrP2gxaTnS5Cj",
  "key35": "uS5HSwFSffydEMLqoVzASn3XGoe8gjQtVJS19muYy2BkvMDVXBUm6Zwnw1xxUXsQj94AZZoUw5MRBgV7nmJ3jj3",
  "key36": "3Vp6QLwaeC3Lt8zub3c1yMoz37KNUwrYSeUesfymyJwgqjWHy8kyvofYb8gJRAyeJz9zhZXsmecLNpXeocL6923f",
  "key37": "3N9Nxn558pHeGLs8BKk7i6WRHXTPEA1sWdE4P9U15kYfr7Mek8V4Li6gPzM7qL2iUpxXeaQkciLHSzk3FrhgzQ75",
  "key38": "5w6wqDoUVLegaztgdpTmaPif3N6orn7QYqGUK3ZVM1iA9g6EA9vS9JRPMnX8wj6keHMXzoHnDHy4W6UHhE4tWDfH"
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

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
    "24Y9e6ZTse3HsYxZKqHkoYh5qf3HgiYgbsD4r8FcRBYDkRi5nrUwv3o88S8b2zopz4PNrBc1KDmc8rwzKe4sXBD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZBqjwXLNuSVs61gDxzmzXmmB9crmrxP3kXDe9yW6bufuZxefa2jCK3uVmvLjjAhb2GH3RfnMo9Dfg7s9S68MFMh",
  "key1": "4wQJMtqh6g4iYRDy9No8nZ6UQ1DZ2uXJRiRkMyBshwavJLVTm5hdZ6u21wE5KgyVWGoPRhygtSoNaUFQUhktSAPz",
  "key2": "3auEvezEWqii7MVTUxfJCQjaKQ8y9Cqz5VFH91Hod8t9yNKh8TbHLjk6jqgcPGS5So4xCJm81Rd3stHTSuxQPJgL",
  "key3": "38UPE6pRG3tqfkrRC2QtNxnPXG6MY9obzQwe7ySRmqnrXxygrqH12K46fyMSZhm66JWNxzw3GP7yfPX7FGQki8ZV",
  "key4": "4a59dFDDFoY2PECaaYhuYXc5RMwNMn1U6wzarCj3NrcxRxNGa6ro4u2h77zzUhC8cSmWJuP3wkRAhqSALXFJXFSa",
  "key5": "2hBNs1uQYJWycG4xekDpzdK1Fc6wnNRBKjMi5FgXeAJWs52EXSXVmBHCNZsJVt66VJm1tRgFFpaYG9biWzkDDrbT",
  "key6": "qT4gqBxFxhTtC8y5PGzrqjorR5xTwiTgDqrSv7XtoxwE85P2EBbBZYrCiPGuTKp7WSyGwFZ3SqEMYhLEecx2BrR",
  "key7": "3XVbBhagHAWeWAyEce57kHnjZZx8i1j9Jw3VHFV65Hb9iXRGjcmS7n644c7uYqemtdpuWpempN5ydwvEYtDce6Z3",
  "key8": "4NFdUnoEJ1L9AogX4VcqDQJcrJBBwrC2UDvHr4Rg91ei6oXKWkScNa7CZ1dGWPKo8r6u7TrvcykkGgskJe7jNvza",
  "key9": "hxHeNmQUUsJDu5eDb6XAe117s8LG5B2NXzFZmWrQdm7T6Pn8v9nqKkDWRib8vPrzRsW2FcgqkD6c3E8n2h6PhKp",
  "key10": "2eYFTwA7sTaLhfGjnJn79yJA8TNdjiYyLYAJDd7oSB37bVkpvP2JPCrJyUoXFviFj8r1patn2CCeqbadfpa35FkY",
  "key11": "1VFJY1LdNrp8iGBbpuHVTLXQ9mzV1bi7SjgXNX31VZGJUVfwg6qCJUHgNUkJLKZ3TYMbkVmVZEgY6pkQYLBs6E9",
  "key12": "rZFFaK5CcbSCe1QBcpepXLWPETmEcu53xF3UXx84XgWgXGswRHykiYQwwN448FYbpfLeodh4e9DRNWWWuVCUsC3",
  "key13": "5Dbu42eiP4DwZfndaPnsNtrjeDp4WzoCJeR4s1rBqqf5zqHG8Dw436UK4cfacMN44LLTJTk3rx5ANycajnbY7VEw",
  "key14": "4NUv1S2TMtbMEgMWyyHKMKYsThfCnTgWoPPgdckqxC5k4ySmKWZNmvWvP3xB8ZiRd7z4SSX9s1V9ATBd362LcW3Y",
  "key15": "25VxYNSnTVtFiJ5vytB8hMTsVAJWRwBUTJwbYxp2E1BXWHjM6mEFGnaNLrrqheh6PhKpi7YSemnLkJBzm1uurRGy",
  "key16": "cSpkZhvKsbMQWiLTsLjVgHHhh36sCHv4nvCfPr42yfUJkGyU5CNgxwJZHa1vmTjSxf4QQ9gawBEs1wsCAxzsse1",
  "key17": "7QDx8zPasGWx5MEQbq3gjAHQuiE6Yd5nAjiKkzDfVokptUes8W9xWpJBg11yXibutaoCqUGPkEnVr1k5YdAvJrk",
  "key18": "62NDDLPwnXM1FfgqffGvfydKwkHHrsHhGeFyaaszCiPUZ1xN5LnMvW4dnp8jyuGpVBa97BgiQhmnFxFBrLhDUbHD",
  "key19": "4mVRWks6eNofJuJpdXKtyknP5msiZhFxmeEUTvfM3pFRHHvubP1qxdduHN8Hkzff9qpETKMtaa96r6bmZ3d2PkjQ",
  "key20": "aRSm5pFtC34KxAZgPvUUdftFV7bQE4DFtp2dBfdaStcpoNKhjfhRNDVXrMD3i2nBZT7whYj61DQiUgNrb6uzjLs",
  "key21": "73pGKCbQJudue6zAMHwv9EsdVgSiGp6ReXJhfvZDaLfZwsospKGjbUkJzPYMKnXCmZGV52hs2VuGLQNB1RP5uWj",
  "key22": "56zbgHQkpc3FgJm7nvnfK66Bi6QERNovd7FHRyUEnB8RDwKJp4PRAz9ys24qPUB9dXXXmgm2HzsYCyacznwTAUr7",
  "key23": "3cGkWJ5ASzt5AfZvgVx9TA9CYXFc7riPxK1jwN2Xt9mXkpfwyo1ikqrLW6boqXRcKJmgn3HRiTahWxd4TnDDVUzU",
  "key24": "2SDrQJUSynJsAFpy8Hargwoap8gQmexK181aRBFbh9nZXiVb5aQ1L8cLdCpq7TnwYXWEj7HEiwUkcs7KCNDZtcbV",
  "key25": "hSPA2QqrmrPepd9sc3tZiHEuvUQ4wG94QFBoC6VwB3kpmnh49bDWhN9uV6gGyjcFAs1GjMsLhfJyvhEVkWTJB1u",
  "key26": "Pd5jvci8pd6yfDCBdHXpcf4MWbd1ikrr95Z81atZ29JgNDVtxcMu4HEv3k5d4YZVikJoTAhpwWcUyz2JsuwhdGi",
  "key27": "3JjnXDqu4nUoVLG4fy7iZNkDTUinHXuhjhkyA6jJHCRwthcT6DnXcsUFViJzEWGytTutGBm46PR4w1UhbRZoynC5",
  "key28": "CdKnS8zQ45ELGQde1shd2s9F1jXMYfhpEHXQmz6xWhFxqV22PeRJQ48KkVHxn5iPz8PCfgbojQ5juj6BNhCokFG",
  "key29": "3mHj4piCpDwMnnn8WHHvewbnoB7p6hc4nCXYFJKz7cdCnjVqKcZq42NWikekoWhSSVN7vHZHvZRBPPfP7nGshoHX",
  "key30": "2znc5SRvDF2J6cGrwzEHiB3etBqCK2kH8d6z9RssxJt6eKCTTquJkT7PrWqHdqZR3KBox8bynKt1YYSyS683Gb22",
  "key31": "4paTHy39ZuD7VvP8Jwqsq2XBteuYvRuU8pr2Cg4nxEZN3rFRRt7BPbdjJxTmokdrofyAXMpPWqsSSW4mXbTihNAu",
  "key32": "5fDK5Mkdw1mYH3XqQ91kJGGNNXCWHLCE3GBY9ZpSE8d4VNW8uYyp3ABohBrvdenbF2Ms3twS3sSAViozF4HRPcr1",
  "key33": "3stDDyYiLcb5jFMkJeTGu2ZS2zb4ejzQpQpfRBGyPysNT23SdfNGLD37M1cxvge4waPLKt1aXcSnzmwf2riaAC23",
  "key34": "4yDzehY1ATnWWSjZ1SCpPxdZwJGTAgWSaawrL4Y2d3XErZcq8bUFLQPudRMFvQDJzjhGhfTF5kwRyTk8sPeuWeJw",
  "key35": "58BeFxxuoPaDMFBxqgFCVSR6AZewHb1GdTdYfXwbxXKrvXhLbwkugEC2brHczsojHa7kLp9PnUnXaAaSX6dbD2bx",
  "key36": "3xzwwGv4wCywQHeYHhzavbXiVt9cCNYB38PD4PFhQLKLWhMqnr17P4naqc7xj9s7v3JVrYuLrd6nCddMJMDrYWMX",
  "key37": "3MVDjc9uyJQedNvoEHbsPDzDUFUJVBJjg56smCtAfMLtQntbMe9Y3PxxNWovJwUvQeBqbp3zVeRf3M9nsfr4oQTv",
  "key38": "4hkWskDeyXqDaw64M1cjTGs8L2r8Dcrhj9cSU3S4fGFPoKcaxU7GRq61aVhhFvJGPY7AZuULT7SPitmHvv5kE2jg",
  "key39": "5xBdgsfZNQvN9ybf22QQEAqxtmgCpy9BkATot4XESMBgUncfpksLm8BApZzNToLAg2ZUy6ssER77Gqgu3tgvtLUW",
  "key40": "4sbtTzvP2MgHx1ZqKEmSCQxFUbKUaJGqbB6cmJ94iDVPmpLtjE1wTFp1sZR5fq9WKvTNhez4DSK9AzoXSNJ9NfxS",
  "key41": "3T4F7fQMye2SnCT29kPW1sdGNZwoE714FAQUHgD5kWMcUpKVtdSPEY18r5QqwcKg37XoiwNPGSxF5jKBxyAbgdf9"
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

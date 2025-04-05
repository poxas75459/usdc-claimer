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
    "4j5KieAqzy4iv8H4pXCt6VH22HQKGDYAn2PGuHzWxpvaSqhUhXqFgm9T9r4fiSPXPiZaU4ccg64AjmK6m4CQDz9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62HVBGEMiHEfzYdAumRun9175EUZU7MMV7PjWV8Nv816SuZitRkZMNBj5Kbv1XaUDc9qsTxWih7nDhkims1t6iSg",
  "key1": "4KbSm35tRqPjgPo8dKSB6SNL9ZcQgCkE8maysodgcLNm9nnTjpA58dhg3SiiGBFDWgssFKBayPAtWE1A19ozStte",
  "key2": "As4dMRGvk1gYT8FkgwP5tz5xdba7uTbq9meVsxGf6BUv2yeaCx1XZgzx6XtAqVVwPuY1pJak61FGosKyjV4X43m",
  "key3": "555qxTfXDBp4hA8Y7B4Lfaxh4J6PDGq9teLGwoYPJiHfBQbGXmakCqcjSVBtW7ZaArpVw2dFxM5BL6PuMywCmQAK",
  "key4": "21yy8r5kjWFuX4pvgEX6B1BEEWKKXWBTkhZdaJ3QPjMzR86e9jnuy2hBAtXs2XzqEwhTR8MuiEFq6FNTmh42uycX",
  "key5": "3oiceJctC5A7mn7ZNuvaR1iiRLHTM1XtPZGF6ktc5bDeduAYAoRCBfEAmhxvWF8AjYT3RvxJHwQRojwiKK2FNFpM",
  "key6": "2izkddBqMnB4E5XzKJzahGgGN836vUH1JVY8c6WErU4UhBWrcxFLC8Qc7PkjK9t1miYfFKiZqKWyY5rSvJDEJQCg",
  "key7": "5jobKufKCyMaf2VaS9xm5HZ8XVwFzKAksNpgh4AWmK7jK4Ej5JYS7cuRiNKRiSFgcdYdbgpPWNsCZVh9KrR5cGCi",
  "key8": "32jezbCRRenNtrUjEisqZmtM6gopTx4aAUYbZ8Ph6AjDBrCTeaAoB8KuxG61x4ve5sE9t2rLFxsoy4RhJMJ9LErn",
  "key9": "2VsCPhgNC4L2NyxPTSATFzZ7YqmXLeqhxL5MEEZZE12rRoB1NncYZ9ScwiN5CACHYdAs3ziVF4pPjtqjatD6mSPw",
  "key10": "3rX7kwFPhnGW4cKDFnVGEYwzS5vJwdY51Z4k16bJgpWAGC12tER57TNxGwARLKR87eKGHieYBS8g2zoJHQ9AEUr6",
  "key11": "2ZexRr2xR8jEGU73wDSfMLZ8GhutFdTHgmcofp38pgnQVRzRXk46ktVJz5tsA5ngYSkcH763VdC8NTocdJtTLBYQ",
  "key12": "GFDdzXPBjE24TFtxi5DvcFDNcFhr1NVeFqDHaB4dZfPqWYH63emjeAfrYXMQbN946y976L28aQ8oBzFPwHowEtF",
  "key13": "3HFPjmbAcc37gzLLZpfbZqSKBcaYs9nYwLcfMucCoPNrXLmRaAkg6zYLtnPULvsnyWotVPz9AymtC2RxMVitTQ9b",
  "key14": "5Bh9hqiR2b7ZhpHsdyzhvyhvtw9juazSw6i9dAgx3xnvHWxazwkCwPLncNyGur2VUJYjAa7ydfxK9PPv4jEXS1U",
  "key15": "HSo2tCCc9ysZmLVqVVqLcaZvBY9tbLaZfUtaXYfXxz6S3GBHSo3btr9bkM861qVwxbUPFyXKcT5foy4kre9x471",
  "key16": "3pgcVc6dt8NvTUggCRwe6Cc1Qxh4t5ZGNswacCssheAT3r7ewj94JfcomZDxAXK7xYYtC6R7Gr3S2ZZFbQYMkgne",
  "key17": "4qD7nNUJ83LdEgs8WDMy2iXk6haxMcD4sJtdGS9bPNy889gzo4s6v7zfdNtPWbAQvM4AjKsat6aF12nKLKpeKyw8",
  "key18": "49u8xNFGDjBrQsPR345paNSrz4kPmKTmqotCHm3W8cgpH5uXgnKnyjxbqYhKLsmBrt8mtEAAbaNFs4nGFmubPkCp",
  "key19": "2s5zMgxqgLoGH6UES1AdAbbt22ingMVysHvGxaPMaTujqwspE1hT8W3eXTFrcurdJA6DRptKn7Z9bQdLN1GMTV8f",
  "key20": "4KJwyaKq5viXgZNy6FypJaz576xPSDFySC44NH6PT75osrJyKCxTtrYaWSZMUEPWXUiAf32NEgFiy7HwDw1drzFW",
  "key21": "cVK4L4tWS8gn9pymvbqUdXQx6sFqgF8ajC1WvXay9UrvYoyoB5XEQXHbBgXYaRy6X9u3vdGytARbAmpDJGuQgZp",
  "key22": "59H8eKPUj6SNYJg1pzWLo1GHcFJ8RnmTEy36rWZcAuNqbjDYaNXVHReSS3hALaYE82fZhFJdMVDvwKbYS2cjtqT7",
  "key23": "62B2o4HycazfTshoRBZR9YAzfgtAdUPm45Z93p825k3ixyu6JzNk7DhHVT2TcWFzCUJEi4WSkzppngecnJgMKJ1u",
  "key24": "3Z55Hdh92yFarxiqCs39VUHZyUWLBd6Vj263RF56X7NfhztZV9jgeKdSDzSotypyCT1bRFRtuvD72gRPqzspg7bb",
  "key25": "4z8oTEsc4EDnUAdRmP2AtwE6vwh1f4yJDna1Hpi4mah25GY2imoBvNgjTMNBowBDz7TaQ5cCErksgpXQX9ifEiWs",
  "key26": "dL4MwmwwVx3Pmn2ZogZ3UfwtCoPf6vLiAFoLRc38JpXeJTMtLLURkDN7dAjDSX6d7RFKrXTr9ex54SBwmKqQ3fL",
  "key27": "2GSdEFMEb2PcjGnjUb5PxXRWbK8Pt8hE6uidoYFxjiaH3SsyoU9odzH5HrT2U49Z2Am69yWbVdrmrs85V2jsnjqw",
  "key28": "4QPeArWdjqQX5XTDXo48vcRnQQwCGueWAYGdu72VNZafsjUvUD4m8pryMCMXhb27wVbv35rH5PLNkqvK2CqQcmgm",
  "key29": "eGTXrD6fxTn5wqVfLH7p94WzgPjkeuzp2LwTupewkDkYUDUKzjPnBkUrqQ4oTUCD6XiR48dEDEjs88kRgtcigeu",
  "key30": "4iYRUFjcP3aADSwyrvhT8LCN9iWqQbu5fP69R2SXL3DEjDp7m2zkCzE7Ruc6d6fgAVkdj4TpWBnwmeKmCsfuFUEA",
  "key31": "XpgHEn1aw1VmvfyQgYVNYRcZHt5bJh4FKw4MdDWmzeLariXZ3MLRsonxxdQNJqiEuYnmAbCPGZSsGiBt38CqLbd",
  "key32": "2frCFUgc3DAhGx7Bsg1sBsBn7iC5weQF3JtPKCGqKJonyAZYX2NvyYt97xmBUN2SbMvpUEDTM6HaqQqUATSKTMET",
  "key33": "c6Thtc8Gzq6Gb8Vr3Cz7UD5fboecyEmb4C8e4FH68n3TDSMBYSqcjckJycVgWKUkSf1raZzXr5t7q7FwnDh6TYY",
  "key34": "39oFRzrtCpt8eQUdWS6fR5cbZejxnbHUXTDhHMSqick1HQMpVPdknJSaYu7HCW9937asbapeyAR9g2iHsAPn8Etk",
  "key35": "5nkszH3MzGiCFdrz4q6ngcpCnyAtzqK7bLXcV1G2uLx9KgDX9VNTF3LEoRTkBAmSRMLktUsnGXsqvWtj9s2hxbqt",
  "key36": "44TCkca3qekXggXgz6Xt6XVjg69XWwez5beZ87bFp1z7TmRhZrWFpcZqQwmzKiRUxttzuC7tbZW7cRCb4fhU19jX",
  "key37": "jEyVzjDUi6CMHKhT1i7RMQstCKt1ca4B7d8UrpiWq3uo8LzqPy7fitydWxH3NYkYfjf8dhHhGyXD5JUGEgfH7a2",
  "key38": "2qwquuq59Xh114sGEB5tDxQnH6mGVmrPB2cCo4XmeiVRobz1xeEnFyq5NjQrefvRM7gnLwcX28A9eEqxyhWjW59E",
  "key39": "3JU1WJKFCVeGszMeqV8rse6LsCRS3nRX8WTkzL7b3o9RMFUJQrhqqrbrjxPBRpD5jRoXqK36oq128jf4aZ3oJorA",
  "key40": "5yXkAJqWShBV3GvZecajCaRxHoJhBNfdCAssQs8nKjZdQPiqaVSt7fiJgXbyyDKrW1UitbFbdq5C7D3UNCNuSiao",
  "key41": "2zpz1oJfZ674wgjKS5adbqU1fnTsRfwuAnEpUxyC8mnAQ7FYsL3mbPXZd54p4pLfiyQgeoPEGp6dmrsy9V9J5Ftc"
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

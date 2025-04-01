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
    "28uXKJbztxioaBiQQ8QSqa35beH4Vmf5g7VTBgryExSsva2devSbocEpk4trRTWVYKESupqa8goQdVSdh9EqUY53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46FmYzZugpu4bccaFeP4TmzVJCzwvjkUbZVxLmCaTwkB9A3Zqe9GFg3z8hVj8HX812KAdEw4CnKwa3RWqvHzwMzU",
  "key1": "4DW3J4qTHMy7S1VWpZeZELu9pxYcxeuyn6CVHrT4boRCU6i5o6Qs4oAxUQKoQ2pf4pieJdXUgYQT9N1XR8vJ9Xgy",
  "key2": "5cJBsnze257GYjhUNWxZvnhYJeod8h8EXiCXkneSkecFFbsypdhUjdfvndtuJgdxH5R8kEhMRFXxbpuzdFtjrJLA",
  "key3": "2uJgg59PBwmuxY8mgqYePhiDwj7ZqXMFgzxJV3GL3Rj6GsGmsUXD4Li9veLN9TWXmCe1awvqxGti1GF6FARqY1fK",
  "key4": "QrHrsE2pN6dEPxJPrUoFtmVh4L6pf2buwqaZKGANdgEgCFhUxamAby1BuvmsvhYHmiTJX7pDNnAYArE5ae5Jmjw",
  "key5": "4qmeZbCpQ1PNiRrBsGaE7mnMcQR3PvucWa82kGD9KkiZjdRP1Qcwgw8ePRVL5V4EhinQu2BbHUMbqjVa7aJYAHjL",
  "key6": "4YhtmjwVLuDqUaNkFGX44B5nQ4vcjGw2KZWsTgQMoATfWWAJCpLpfscaBJPHqPX1rHt3teMFtwtNkPVds1acpaDt",
  "key7": "4u6jFZVzoFJrspKqD84BYxKbSYgdNqKbcJMM2nXad35QwUjzkc4y2KT4ExS6GyaizJQ9vbZ5Ugo4DCDP4N6G6cxu",
  "key8": "5zL711LqDuiJUubeihAb1MY6MwJ8jdBKBwjAQcJGYRAa4HrpNDmLnKGb8zy7jogLRqQ2fhpxPNrZuwmr6HzMDxrW",
  "key9": "3prcAjuxDPqtHSHmFWQqK4hp64X2h8S9zpdZM7jMi9JkgGoBDPnz68Yrf3ag3Y3KBmsdENvEq21SJafo1FhiC2tN",
  "key10": "3CSWDr3N9tCNezuxAqqzFgGRGysPMzYUo5ygfTb5PTFH67uCNh4SpJBZ5Dtp7p1CsLgpa3Bf2nbwtCCfNUXqkWYk",
  "key11": "5swGcbbiWFJBJFGsu51AKaLwWjbusVphZytRyhjF4Ft3Dg4v7yXFZixfWj84981NPNRepNyYyqWsBLssHyZLdctF",
  "key12": "QyhALx1DBvmuR6Co9TRYRXdNExNG7vRmxGZpyAFyKbx7KVVVi2c1DjRV3ucKdveFPwc3Rrjfpescd6QJGjPomCF",
  "key13": "4sFSzGwGdU1mmQCisyHdbbYnmV58oevxNRDTj4j5iPAV4HVmvyCdT1xM9Syr94KuW5KMeuuRZDz7RWYBHLJb71ir",
  "key14": "4suDcPycKdtnsBBDoT3xbXZBPuFo49pjgBeN4sqXng2Gi5TmMRroPfDbT3VtsLsn4WDMgNR3Wx5srjwCrXx1gH8N",
  "key15": "3FyjaGZ4mgGuoujjgfsJrpSmK45QuKuSxeduNM8ph2mvufTs1rKKtAjT5ixdgAFSqKk1DZ6D8yAFDufmb8Jbiy2o",
  "key16": "3upZUbiZKqJ7ymCDNbjaat8DrLy8GVToYcgxZNeyaSLc7QNyCXQGSo1oCGsfizmCK8onjxjza9bnengwsSvHLNEd",
  "key17": "2f5b7FGLfjbg8TKio1X2rBujKo1LGWG4GKZpHTSp1mgtKf1KDqCZ1u4PNmrHr31MR9QxiBcycKRGdRRcEQ4xGVXS",
  "key18": "2pGvhMteiXrBq1Qz333gmhGhEVWzhZeAc6TsKrKqsZTUvLRcjUXwhJ85Yxs9Gk7HxbAu6wdATQ1C6T1eXD31uKVW",
  "key19": "2xyFfvTGmqmuqwPBfCsPTUBdicD4TBrxTy6pbNUuPdU1ND6h8MTc5WUgGGZ19VoXezJsfGxifQyMsmz2dtkQNV5s",
  "key20": "2k9TL5Dzg9w312N3Jaj6UrPwPjgJh3SY1PzkrQ31pn2qbTShkJUpxBisaDN9TuWEYfjiBSSaEP8Sc26H6AaBBD5v",
  "key21": "2fqqXjaiLG2YWFSCcGTM23mSGh1Bfjh3FMkncFY4vRM34DdFVaiA1fd26TrzoUJ6Koyv3UFdVuHX2VpBH44EuLmb",
  "key22": "cdcwSbECJrBWGmYUHcwBbVrWd1Ea3KaXH4yRpiT48uFJvNsP8d2vnLSMtFFjKS1JiyzEvEVorJT6adEC133mHN6",
  "key23": "5U4nrueKTsUve92HXycBvFdxJrkUyYBT3xaGPEoF2h5ZTjHZUE14jLEfUbX8Z7GbgbRydRdmJknrRhRG1qRfxUVB",
  "key24": "4gB5ujPQoCSnJpZ37QWa4VdrWDei6rT8RQwkF5vzaRvh26QcPiBHAhuVYGquY7htbWi6JYgNUBLdLjbpBXQnkFNU",
  "key25": "3K3NXs1zydMnjBiPn169wewxCtssn9NRj7dzkwxgHnZU6b19DECnTFDA1ZvfEnNfeu2U1QgPdrE89kUMFtV9obH4",
  "key26": "3LVJhgyQGapmJ5jPbVvPZpmFDLzbg8xGdZZGP9o3m65jzgfDkDTK6iZ31RQydUESC5wr829whBU4SH2PrM9f2aBu",
  "key27": "3Ak4SHTY6JBxF7Z6T37cZtfhLqmyheEiaVEt7s6qqvrecd1QMTR877pnmF7tyeBfJpMWS4XQEZmFnPMAmTVJEE78",
  "key28": "3y1Bi5x7WhDUUTWihCiSii1b7G9qvsKUqBQCCDHteA8PjdK5VVR3oj8sQvaEwt2QAdDWNrWGnBwgoqEZMr2ck9vV",
  "key29": "2NthV9jskp4wtUAVDbBEQrmCLApYcCvnBmbZwe4zRMnLShhYDwrQjTcGW5SfZNQYefk68agbVuXT689hTVtbT1zU",
  "key30": "4wc3jtqS1LhJZXQ8mdVqUMP8x9Uw3qCJSByJHrJJ5EKYHyZ8tXpjwp4AVgrXK552si8LQa1KAmVFQRTKUt35uDob",
  "key31": "2wFhqZmmYt1hicoGxvoPGKeDeMYQ7ScBWUrycKVjXxfjEdJp8wz3kiEZQ6mPcTyBrb8r4TWaUSk2RANRHEqVtrw5",
  "key32": "STUhV3YZEeKuEiYr41KcKJ1FJmGqyk2jdvjm1TYaXoQCU7vXbXZQfCy6th32qmgqVBU1vGnTkroRUdoC6AqE3X1",
  "key33": "57RBBfN6mYbbiuyCqwXSJY71yRuafTUx8AtaByeZW5UM2VXSJLheKtLLwhoxDCG4rpAaHypBsRW1AQY3itTQ9rBo",
  "key34": "4c9AQLVxakYydxgfu8s59hKXiRKATq5K4Xuf2VoJD71ExgXyhfzdkK19uoETrzRX1ZvYLECsmvLiSdnARFLQ6qT",
  "key35": "3TdTxmBa6ipqRbntij7nRY4xSzu9iQgFYZveEYV8ERhh5B68Ef4AqCoas8YbpgnQgsi5G4aCCa7WR2r1VQefr2MG",
  "key36": "47sob7W4cL5T91GBrrKGEJ6Mz3XqxZsBCt6u3vJPzvSPtDFfRgVKKBM2uYoryzvaBrf8gn9cCjgyrZ8Rh8Eu5xWE",
  "key37": "59ecNr7tNVp4zqoCYbyWZG1t9romEbkrEw5SsNzNGXrA17G3QYyUvz8XzBioEoDLosR7ofJWwZmkrQgpvXwQee9X",
  "key38": "3V6KJLxFp6Ca5yNBkaELpLTVdJkAp32c2r8GQkyn5h1BxtTMvKrMKKBCErdZK4FH61djEwEALB4n1aCgqzr899UX",
  "key39": "4afijisaBmYpPSXsZmGdBAZ7d69VmMBkj7WoAyVBhTh1mbvhBspDvzvPLJ3rwNALBnvHMsmi4WjkcWZWoUQyQeFn"
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

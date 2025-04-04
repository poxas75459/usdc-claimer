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
    "5VuKPSV29hEHsfsLxH8xiwqtiXUSprX5CWRaweZN34xjRpfxud4JiKup6E2vWVCZq7CK8iCXXQHLj4Ra9a4Wwu2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NzcFJzn1iYFzdFZkgfwE3Qwqm5dJvmrwPCENa5nhXoGBCysnHcCbnve4yJ5v6h6i9RfTrMMok48gFxrRG1AKYnJ",
  "key1": "4iSr62Mi4iNau94z6DhEfrFDdiiHeUu14eHWGswZoAyeiWMw9B7TU1AbHYrLZRX4XjFHtzPgpTwNfs4t38CddEKo",
  "key2": "5mfA6vgkGZuUE6PotUmr8j3H5U7xi3vT7B8iPTpfZ4W3Tgyhe3ZnBaSmn5H9EqeV5ST8bVTjN8JUNi2cPqXngad6",
  "key3": "4RxTjKUzWagrCRVid4jp6Ba2txGNM1sWQTk8ntAfN81DBYrYpbUDgtqSVtSuhgfwnDuA2XUFhmDcAMnD1QLfkpKz",
  "key4": "3XrMnL3R48Ay7wYrsmWJ7SgwaPueSDez7bTNXR8zk9R9DfLM2B3VJGCe7gduekXmakU4gMKmnrzvak9TPe89Hwp7",
  "key5": "2vTiCAkSjGg2JduM93c2y8UQtNwuzRvdMWkBQe1QRJBcak3puoqDPEp51H5CXTFEg9QvE2ihjhuJmwLG7nPQR9fj",
  "key6": "3yAj5wvNp7WTQohcKoNC3SvCFfjDn24DgtNhAG4EAnSW9jzfzehWvJ3uaDSAM4R7uKAeTPv9RiDH4hNWfKf1geb6",
  "key7": "4HDpF2ox1CjWY56pWLJGqoAZ8nZx2JjdATGMuijEbkVPtoUP9ChQPyMNUD3mo6SVenccRYwCCddM9DXyG6j6q8FU",
  "key8": "3AJgbkUNrxT1ZhVZLd3FKrBaTVKAhoUfC5bUHg38jqXr5q3ZGDr2BvL3Ruw24nUDU8GKoSSaF1CKnNp66MK3nfM6",
  "key9": "2eV8tDGHLGn5Hir5Re6KUKBqtmGSTQjJrMkwimAnxnEvqgKwe1SgjCXsSidWTtjKZpvQSU2sSkUSRTzxXAxDfGy9",
  "key10": "5bCTs2QudmyAgU7pZodgckbvR5JYDU86GTKZSemu62YgkQr2pCQUnLwrDbp2C8uAu4aAfpp1UTrS2iToVuPkjvvN",
  "key11": "5xnLfRRQqatW8ksZFAU6PagmVfJT8aNVpEbs8jPtaccDQuyfeYZjDkWU432Rhi8yWAzcH4CZvMX5nFohNkiJ9Xuj",
  "key12": "yTTdYyU8hUQLTfp5gUGc3xGLr7L2EJLH16E7DXkFthLWHaP9kkoymt3SW7zwePTVyyjj97pZQYPb7K2hjjhZvGv",
  "key13": "3bkCorN9s5Q6FykuRQDmwBRrVSLb1Ek4YAEyFqH1dbMfgG1wSNHRKJ9bU4b6z5BrjzQ4jGtagvNZXo14BwToDmmm",
  "key14": "3jj8ykigy3PSWMJdjjcSxCwcTZSPMJXH4A6Sm6Ge9KjoH4iffdyP91hyCvRCtMC4WtXReZHEkeQpqS8Hk9WRfH7t",
  "key15": "5Exrj3RdYzLz3MCWQCoZqQ2dr2Ke6sAjomLEuF6LBQBkKY6HZ5CkaZeABwwCX1Eja8s9uwUDaJzNLHjsheq9qmyB",
  "key16": "4AgtyuBEgY6yiHxCEj2dW3dTESTAhoWZU11cwBEUkJAEf1sernhigrhiJPyiSkcqfLhHxTvadg5wSPtyGrW3iMRJ",
  "key17": "5GYwKiV7oQhQVi26GWU2XK1JmjWZ3sf4ja6VdaM4xLdjzVd5un3XQyL78Muv2XE1Px6s6ovpm4JvgKGBnEC1FC2B",
  "key18": "3upjgz3kiM4tjuXsTFwDHWp3ZAKGmQuyTaWfH4ty7SeoMEk5TJp2ApmsxibyBCk1Mh5MtCEfcpeWKpZ5VnZD15ts",
  "key19": "3fUZqW3PezecXAroSKWG79kE6rms1nMXLe2aY9NHnWDftTbEKverxnf4q3BNSSa6hJeFdeaEKGLFHGpiqW4nkG3S",
  "key20": "cE7xigVxTvzHL7ztLpkifby5CDFVoTa4M4TGx2APgZYcgtrmtBQAeFZ8ZgmpxuRr5hnSYWt8b1pqU5nwekFVEMe",
  "key21": "6YhuLmHzP7yTaVySbxbkqswtgHPBJZcxnRW99aDJotTp7ySn3YFC6oearbTMEVKzjey6rN2DeC5DXSs7zCFb2AN",
  "key22": "3qnfAUuSfiEGEsFFpfqzbWGQhTvMzX48Vrbscewu7o4mpgqTBNMWVUFjpySfW1KJ7PsPkDoNrXECpjZyx6XzzAEe",
  "key23": "3DTcz6pH4t15uq4zgw9g1mSL4WYyx6YBDpPHAibyqE9MP6P5oZrQTTJfbJLvxe9SvFrtU4a21BCAm7UzXWEtBBZ6",
  "key24": "4HDgiKsk5CR1YYzdjZL8H53fKotHFjmuucF55YUppSEYpbRRkLWFUNqdDrCYFRqzUANFXFCsmiDYHi8vFjuFww5f",
  "key25": "4NTMX7vDB7pwMC6CH69qCN8aWBHBTPaDiog6PFVDwWceEgHYntUZiSBJsTQ835vHsniyoPVr8Gi7vuq82aDHZRkS",
  "key26": "MRQkcAWhx79kYYBR152edqRwn83L24MyGRtUbEF9iWenAYN9SreQbMK3NPn75pnnXhkNm5vzNXZJcBZuFcjruoV",
  "key27": "4s9dsvcVzNdEaMDspSBe59BFTuL6uxYYQQ1srzom5dpz6rDkg5YEkfde235VAuYSbcf2QzmLjg7c1pfGm75UcWrX",
  "key28": "kshwQ6fYw6NDjBuVu5Lmh6GNC5mVsTKhZYMtfgRc7MLzfp19sEyu7Wnwf1wnwirCiy97J27kPN8JHMfkkTMQguS",
  "key29": "5tpPBZ49gKiznAebmR1Fy73koHDy6N7JkEC3SHdN6MKWGACx7VWfmLmAJcvnadGTpbgHndfiahRkmjZjVoL3hqKY",
  "key30": "3eVT6RSEDwmbxPDFgicZtj2Uwkc8MRhwg3Cw6iUF1T8AqfCUXLXyPvderrGVtWfAgGHho46FRZJi5SUFc1wCVoxf",
  "key31": "31uZWr4VPFX7482sfX4GKLGbqkeTnS7LywgSqt9B9r8hdf8ddckpB3PS9zHtobSDKRnRka8qobVpqtJgNbiELUK7",
  "key32": "4sweBHZwZeSqPbFEAB6sqPGoH5Cy6HdyqHnrtqJubfPB91Asfx6aTc4ZmwRFDJjxafHofdFnqSTNgNo8Q6WqX11H",
  "key33": "4TghqRX96pVKwmndkxunrrbJFMrLNS72iJ1JjarTz5LftLanE232oSkrRNDf64iZe9JjLzFfhmTN7K92NkvkD9ns",
  "key34": "3wokSb3yb1diHUJw8mNPtwFwrGV1WSmUAwdwzdu8MZsXEmSBatcxUPJ9UCLFgozL2sesjq3UVctX9cohsBuRSX3o",
  "key35": "47MwTiCYboaxtpJdNd3cTWJfj5WAtduKNdgjrwdo2z72mzys8E8hdKgmZZUEbZiv94fXVa3reQYzjP5bpRw8aoj8",
  "key36": "3idmuGY5nzGncMEmtw8GKHMocZSfFWCHniJgXtqAkc4bwvVky7JxKVtvW8Lq4iGBQC1aEQuPZZ1urhPKbxJuUij2",
  "key37": "2YemdoYayeEwyDThsBykz5uBt9suG9oKFWDAQeb1a4qqHnbPmbGjsGQBVtEUamzJbD6uwLdPRRqkBvEo1wNMat6k",
  "key38": "3ChDUSHTJ4ANegv3em3VjX2yK233c5B8D9i2XhgdhPb4VcFnenaSJxvW3mFdqEuDt65JGJne5Rk3R3iYVpDPUG8G",
  "key39": "RecwNaLHHA3eaDzhACjURmhrEwuixtQ8rZrNJ6GHAyVchKDAD4otZMr14jA2dF18Zy6HrnMMCrvQnN8eR1YfRSn",
  "key40": "5ahCQetaUQr8RVYUSAkym4hPyguKnScZ7ATtpixy3eLfMTMz3twWLtVHtTnBPYTVSsy2p1XJ8bimYiczEe5zEVG4",
  "key41": "4NQFRdz4u13AXk855Ta1nrwCFspeVx2qx1YddzRpLod4xTg33UWLV4JgiCMTUmqnHjuWYRQR4MC6fo2ys1EJcdF7",
  "key42": "2w51KkGcuAeqwwdeWnB8MkiPxDDem8oD8z1CePWarcPgqGnLb6hDDJQWsJWzZtXVrtX7NKMcQAUGrHrkpoYJi3NJ",
  "key43": "596Y3DVydXpycTWWNP1FWxhfuTkwVtf9WKp7m8CwfKP31thfygWs76XjUziBtbdk1bJZzjRTmPxHLPc1G4gA2kpi",
  "key44": "31a9ccWmbvySufUBKU1BbUDUUWmNW2zKYnbbR12YidD3aRvY6GhiwgRAjy9N1Q64Lae3FwibGWUNBwgTs5PQq6tp",
  "key45": "sKAbxo6Yuhf2qzf3hfSN5kfAFqGZdWSqVWXvvYGQT8UH1KmHkQuD9WdoPX3KZX7kNVoxb37TesyUX2bDe12RxZ1",
  "key46": "26eSfcgmnWkyERcELNj6FcaJybCZG7pSpRR75SWoJNQDzeeThbsyjSaNvyLdurmwMujaTQguByWs3bMQob18UACt",
  "key47": "3zDZUsTHHpWKiS5ezfS5vPTmXgxPc5nepd1Wka2jwLRHGp6MBFAYjppEj56uJktEWp2Un9AKEWG6gMgz82KCdoFS",
  "key48": "4nfzcKztK3Zm83UDqPmZXjbdxTRYNaxF43SWXEXpx7X7bn4PtSW9fb256ENpgXPwKJZyGkL7mc7NJ21mBwgGe6rc"
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

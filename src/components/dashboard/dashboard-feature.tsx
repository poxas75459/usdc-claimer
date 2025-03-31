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
    "9q9hY4GQ3ErjwqYFuifGNG5VqQKPPpohEnL8yCkNRr4gSVzJPsR1TDRJsuuPujY3NatKC2s8UnzC5Bp3MdadiYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "236jBpeyVqv8BjXs83gTH9mP4E5e9iG48yuSP3njCnwHeSQGacVLpU48x5ooG5auXKtGpDTuVF6Uu9EyBRV2q8a3",
  "key1": "QJMyYoh4cwULHsJGrbSfUKrrHjYRignovMhdyZxvNWR4mXWsdFUV29yvn5RB5ZdKVLYWMMytHHF8Ea6Uji2Ao6v",
  "key2": "2xVsYwrmsowkD6jRwdS4nR8xJ7EExk9Xb4Ui5NvHuYUCeh4k3EafHm1aMj9YkTgyW1HhH9JngD5s9RnF2p9fMNJV",
  "key3": "5Pn26PDZjQJr1SXmRGivV2parDu6vzccC7DLm5s6SiXVJoj8M3rBoSFB43Szj2CuhwuL7sz6RDxrff24qJZPjeMx",
  "key4": "5xwxNWQky1tdcTVg7ZsiDsQZH7YRyTy7Br43ukVpzrm6FTU9chQxoHQbyLmutfssJNwoqANxofU5QGa1dHjXd4wP",
  "key5": "2rf26ZYZrMzQMYdXmfh9Es6SR12QgMajBA5yizYNWqFHtZvhyQzmdsCCvkuB2wt9MpSQ3PuviqXfEe3xjbZWNiU",
  "key6": "5Aczyq7Yz1efKieMyBVgt9pnxNZhWSGJquk5Y8KjQxug3fmZZbEt12L7VB4ZHeW3YsfV9j7VSnM9oNhhZmgCejMh",
  "key7": "2o9xgXAeXAqYqB5DeU3g3YHKGmW3CytqNk3ZbDqiLrL5qJyXFSkZrwrJVD6SAfZseE7FSx54Nqp71Ra3SdviJzni",
  "key8": "3XQdA4jmUCW4PomM4vw2J91jo8z72UbWtYa92deLscatk18r2pe45QSk4jPvTCFxgE9d3jwoX7pvsJh16LWhyb3e",
  "key9": "2xTFHAZm8HfhoFtTZPSdhoiVrviDgnLCSe7VMf4GNH8CPVy4WN68YfnQRdqmujXyvry69nkNki8Ao8r91hrgwrm7",
  "key10": "4Nmd8RegWUVSpM2sXYSsykTbwmmBusLVJwnZRHo8CDZd43uSBEX2RgGGj13yAVfG2ihgoTKvUM66ir5GKGiMTWQt",
  "key11": "61aYAJaX63cPTkyXtGuZKNroETmvh8ra6JQGpbbrjBBcGiSd1d8Afqof3E5QDotdjS97vLxeuMucdA9SDN1k8hAL",
  "key12": "2x8B1Q2roxXXCxeyvkyJ1zKQ858pJTMjHAk1Ni17sn4ccmn836Gzktjk3g88KkYi4dx251YqU6vStU33yzcwjK1W",
  "key13": "zJm41UKkgSUprKp5MPxzmYZM4PJEzeUmJBR5LTsr4iT9LXpJfzp94wPCbzbvtCjrkd3ysTmSwF41iDgnRPUJZFQ",
  "key14": "MZsDwSWWBBRVwWRd58ACcy6fa5FX8BBYobDLKnbbBp7xFgQJNvLfiF6vQtADAJVkVPGgV5KtZ2snSaxKii74par",
  "key15": "5B9qmyeCeGDw7osRATcphAEG9DTFgMSVxxbiZ8XN5jRHXasK92chsafqN48Yno68zJELv3e95qdryWgSrFPEzEXy",
  "key16": "34RZ5fi65CwGKrd11EtEMfjgfo88cU8nhJdYsXRpujpz4ojZZD6ButLxg3vERDjG3Yst7sMUaS4b9CQ3ST75zSdG",
  "key17": "3pZWMioCzg1xEwqe58PcnQH3hXgxaEKyPWxpuE3sxB2vMmtsqZrWUTQwGt3srwDLvz8CEWSxUxuJjDfMEMErnpe5",
  "key18": "3ePphYRw65MdmEdoqdxbotQPrSR8itFJXg3Gzrkgz3Ff1bCBNL8PSYDBwVn97pt8D6GBAEuRBRWYxnpTbtRusWju",
  "key19": "4jGde5Sz2LoZUeu92UchwjBRiURy3N5fK9tVxf38eXEbYkHKhUnJmpjJeu7VpnfmdTyUYAjyZM3dqKE9NAEn3uGM",
  "key20": "4FnNuvRY57nPNJqVxNtxaGj36SALTfqtccxDD4xGExE7owGRWp9coGmyt4xe1F4zKxq8fpSufEvZEGZwBq5LW68N",
  "key21": "4XHj8szXoY6uRFyEgY5DGBApMEc18dASRJmP7Ds7Ng92PPEJiBqVU8KdEC3kzCHLuoW6qpqZM4YMtruWbfkHwaPt",
  "key22": "5HqGWSkR1WxqjuP9bzQt1UJV4TvyEAZcZRijUb2qSo4vjaMNxXMLPA7FpoEBM7SBnBct1hp6yEdBWLM1n5ngtnS9",
  "key23": "4yHiZ5VtMM6X46xRm9kHhyEhF38Tk9ymKVteBdn4SV8LkDuu8m2tc8N7DmexkM68kVp9RxeZtSf2YwzE2KnXiGu4",
  "key24": "4Y7ocnBkHbWEMDuEY6NwaYvUr3LwGAG2uPNWkkQdB4Sz8oUUNQGsanvELNnCaBd6LZZeUXWC29qynRFTT7tK3Y8",
  "key25": "222hnDR4D23AZxgzPs5e5SjweD8XvZo2QV8h84HXyg3hG7FLoEy2xXbs2Z23DqgCSv12X2E2SvXwLkiZwtKaCrNo",
  "key26": "WK52ubJsZdSCXEkTshPyWKqiCAhcS4Lu38TzxywifPMWHzp72qbUjoccrjEhK9BAUz3fkN31r5JfVW3558xutSG",
  "key27": "wrrYBjhm3AzWxvRjRz5DdNhBLiEa31ixkEVZwqLxjYAt7h68Zo6xmPprC278TZED5LT8iGwS24o4s8P1RQx86uN",
  "key28": "2T7PBDPCRYj6zLC87XAvCGmLXKxMjiJZDFAVoxLVKe8vZw2AcoQZTe3b2y4kctfo1XPnHkoJeLKv8FWcopqPY7gS",
  "key29": "3azGbCAbY32W44wK1aZwSQsKqwXDLAwqrzGcMDYgbUCmbkxYJC3FsUKxnm7cxpg975uSg3U2Mq7aqU1mQLXyCahf",
  "key30": "3jeHuNXH9vNrw8HdJ2manUqVzQtgkKnW9fg158VG2Rxbn1KurP36mnyxuywfKP4eEMFhrLS6kpq9MTJUejWFLSbk",
  "key31": "sxrwGkY2kUzVzKsztbwP9z1mLBJZXCmPcoT2UyhpvCSf3viSce2qk1DubatAzZzKuFDtr9PgmzSddXgoAxkZvYf",
  "key32": "5S8fbBM9BB3azAmvHCib7kWLetQXSaqDSRTNfrFYJuDJRWj9wHKoSh7jz8j38LEc6XfPGaxjg9Zp2LqYmyQANVKW",
  "key33": "4JTiKeiCBrUyEJjjRWn7rviemYJ1u12DDHqnzpimhGcM1tiKCVz6N45Mji6z1UzQHHuq2oE1uVrxhgMcM9aYDGEf",
  "key34": "2mbNamGBqqChwUkvRJ4rbjGGYd8xoC8uX1eQMLb7o1ibdt28b5m215dQ7ir9wQTrg5nHnGqHVPPLe7gTEgE1ySgy",
  "key35": "2NevbvmFQcTTJWW6jdHLXFMhxta586Bbd1kyfGM6yzmWDfT39BmgLDXY6gTN59Msrw5PuxNB74jK7DFMw7TD2uHK",
  "key36": "3Dr9Va4WJ7kdi3CAGabuyfaZa8r2Hn4iRmLEegNfUhwPCC5piUa8N4Usuethstg5znE2Cq6v17VneGZuCJGVFnKg",
  "key37": "2Z86sAU5HfCHC6TkFg1kQcd5UEVeMFfjKy2eZYseNyjGz8gW7psQBdP7p6zBPhtiUPwrRuhx7hqNGBt9MWWAhVEN",
  "key38": "5EAabWj7ohzJCSzoscXQxiSu64BZCmfYQG4qsfezmhwvdxYNawMUUxrSmRgPdNUTAqCCw7mKCCRns2zq6qKGvfof",
  "key39": "2vgbeb9gR4fPRM58k74af2epmv2npJiAUBeVwPznrQKLRhCipWd62jkdyeCuHLW5Zr4kkjyDXdo9mCu5omP5QbTp",
  "key40": "2aswhi1akySEvheSsXWTdcAcJbrm2AXe7fSBd7kxWtGVjMBJLCE5a1SGwERbdNpnsBayjj7MKGr2NcG3FfsRLvju",
  "key41": "5YeG68KEMWBScaC8WyS1m54W1jPEYym2WH8P6LZXViCNxxAVCWNGGchEdQTc4pszZzFBXCh47XA5XNQ9yiapb8Yb",
  "key42": "5dbNxkyn1S3njF3Mj6Kguwb6m2siexdL1SsvufF4Qm4Rvj73QKFLrjR529zCYEwL4ipyFV8aHNsq9YEnUgcynvwp",
  "key43": "3sVQGmpKCQUAiAkoDPJx2veYVgToo17WDRRPRaamqxf5nszQQxZrBPfkmSq89eW1p74t1xATPKgRGygZ76qS531L",
  "key44": "4WSGTGRAHTKqT8wbnxremMFjXArZxTcAio1EMDMTxG99um7fG3zGdvEFKLGb1cEeUrZzaKdD3FufZH68yLFhaBuW",
  "key45": "4V5y96jV8N2w5zGd8o8GyCJdPX2ga7i2xKcNS5bgbQ6etcaV2ryg2ZCHmgCgPVGM16NqRQpfSxpTKd5KDnntmJgQ"
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

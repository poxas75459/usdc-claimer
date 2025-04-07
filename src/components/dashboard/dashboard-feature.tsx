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
    "5SsL4ZTLCo9hu5gtygufCKsrdqdwveBHC5iXR9NMZto8KkeyQbTxoJFkJPcM6s8JGbPtnKUr4X1fW1Z3gZw723WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idUGojPjLVGTLBAREdnh2F1FnqnfrQa44EaAjpcnseRsWYDRQq5CiYM4h5Huz6bNMWSzLcdkKoTLcescHoJrHJE",
  "key1": "5ZVdyfQ2Hz2JAGzVoAeNK8Z6Kme6Sgq5nMQLqMQYbnnWhnNTAnURWDjwSpELU7uynno5Pck7vMTVmhjr82zxiAZL",
  "key2": "47zwihuuQKW2RWUirYWbSqECaqNXiiWmj8SpfDhTv97MGnvEGytD1TnxnnGLwQXYCLsaAY8qJzS1ux6oLgQhK8jM",
  "key3": "EHYZne7gb42bcmDZ5SbXFXN5ayybBXNqWgeEhPZLhhYxVhn4SiCNxddhb8YKCdxaibMVD9x68Zx6rSZqbFF4gaZ",
  "key4": "2UgL4sv5kcroRpAtY5ebaFNFWnsARTQ1kQLjTfZPZynasisK1EgdYZDxemu2sHPxvM1Xg79WuSPfg7WXGf3cHvGF",
  "key5": "51AymTKw6tM1W57ZKGRk3BjJVX8Wve61MzgPmnicBemwyon8mUgVFAarjhfGyqmf4XewpNDEHEzpdEjGMZfio8ra",
  "key6": "cYjZQv7hJop88z8LhPE2Y5UkMeuWeXUpZ1wJKTCXxNEYubPAWzVz5zkhCjMK8vB2iU8nJxPUVYJFvX4yjBm7Vf2",
  "key7": "3MFVBF3VeShyuaPqEGitZUQzpnChhvnkiYVKopexZ6oHBDvntKfnc8Lq1VvugxUbrFmfanqrs7nvrMQ8kgH7ivmu",
  "key8": "5YVDjZjZSYs2HEZu1J3W84Mp27SfLnff4raqm1HGNnq55MDNaozkCAxAEUi2LY2hSCHrqmGGNC8PQfgaf6ddKzES",
  "key9": "4E2vbUVcsNRpgvfnzXDKMR8u2xcJv1iZ2qfR7MYmtRrByaJT9caeRmoerR7Lv2r1H6hBBbQhfYm7vJ3vxGim1Z29",
  "key10": "3UmL4QEDQEZRWKubCiRoLrW3NMzJPw3kXHuTuTorLbnox46WEBnQBtYQ9yNAc8Hhjt3wuQhDHqjKCDtLPLFWRBMz",
  "key11": "65vCMbVvN7HQq7g7CcMF9vkhz3GhZ6uuUe5iNACJGSnn6BRMFtnyuQgGYFTZpcXDwA6uRqm55oV8v9qwN9fWky1r",
  "key12": "bFXs2i1CV284VMcA5NBQn6ZPHhsebngKaFamp3t7ryeudZTXrTXh2tMcQA6GeZ5wAubw99ZD1hFh77D9Gqjh5Ze",
  "key13": "5i2KWG5fVVx4zytGn2rT3SZvjhKn9xnWFmRqEWPUMAXu8WMViQEKJpn3HDXGt7kA9oaNhfdqUwUGeDSLpkWs8gqB",
  "key14": "57fe9S3R5H2ZQgw4JPFt6CXqE84NaryDC1jXhBYHe1PV6S29MGvHM5fXd2foZVSFwmrMXN3G1LkgDhha1Xf6Utz1",
  "key15": "4qom2d4CJ5dY5dnLoU2QXXSpL5dMBuY9Gpo3oe1reZFDxQGCgCESBs9VB913PLsJXzQzrYJwL7uscatc12GnGRnz",
  "key16": "3B6Y2pzqDX5fTp9nHUVjTpYaADC6NPXqMi5PLtXjtpQUxMrWanx4UVzkQHPrqSzHasfUCb7Xdyn669eNHw3aNk7F",
  "key17": "5Z6Un5s5ZZeqoZo3jhs6gmciArXG3R87RfJQywN12U3YKRAK57FWijLCWAMjg1VeKYFh1sTzS5yuFNgUj4uJJf2S",
  "key18": "4SSvmoCScnga4tzyGDYaPQ8kqgWBuwWPS3YpkcRFKeqrQLYNsM6Jn4ZZjux6ejn8qqvjvxN3TBJpxSFs7kbqEAY8",
  "key19": "5siN9BZJaXCiZ7SuWgFxGAo2ftGq3GGGb1wc7GamNU954aBPfUdc1MfCSK7UXYxm168iDBbHjMc34TkZG6J6suVK",
  "key20": "5Ka7sWLZ5VWMdVxMgTrK5nrXriFBy2r7A6wn3AZrteTsD23N4RMtWtkGWUmc1SigeuUcXmDxoeA4kqMkN4GiDTj4",
  "key21": "3MKB9WvMyqnVDpBddnNUUXFHguihZnBycdjMVFCbarNdGvLPvCqQWFBVoWNXuU9oJDnTG1nKkMip1nE5w1kcXG9x",
  "key22": "4TPg8kAqku3vbEZybAuMFcBWuDWx6vQKXSMXBkxhgRcQ3k46e7JDfb5akvFwVPx2FoLexQzjECPHKDrEFRpcCgE3",
  "key23": "3UsAxQ78xHq749YZCJP57akr9LWoaEDKHJaU4wwhvtTbbcTNCGn1hRasFPWu4JftRdDsgCB31Hmon5puVkrtXX13",
  "key24": "5VcpKZNUqKdreqa9CPyWU84TFYLfcoUgZZ8wKxd4vsRnosPokbRrwYqGYHwj1MipcEdGJF48RM26E3DvZgV2RJHd",
  "key25": "2YdxRCPASyUcGTTQzkkjfZwBc2hJuDKwqRRfUL8v9wmsQQgXDER5EhDXcY6MeZ8U94TotEtuR2WtrZ4oL7n4apfW",
  "key26": "5kK5jwTMvXqiDXYyWw9bR1GnMPcw8sYJDJ9HuCJvd6TDQJBCtHNCx47XcdtC579JacPZTgyZg4SzhHwyd2Zv6cAr",
  "key27": "5Me8M7i8Rn4QSEifE66LxpniBZ571mEL2zxfx4UAPW9gik8hp123BxhKdeCMjpFaZS4zzg9X3TZX3a1r3pcv3tNw",
  "key28": "uNrc1gG1DkGUCgSBvwWff1pQpvoVqVxF1TasgFMBeCjCQcwmb9oYWQnKENCaeMQfrzHt1qHybomEV77UiK8xNsF",
  "key29": "4SnC2ZW6bDqCcWTGpYn3airtUpF3aGbLmrQPC5yizy1CtpKPuSKFtWwMNnFxoA4Kconje3bXfRkDw7mVoi3RaSWm",
  "key30": "4NG7AMGveL68FikrwrptLjCsMy8z23EgqJHhDEoPKUTxzfVGUQ18FFwAHz5XRTGf8aMxDjLGG6ENkqA3iTgdPA5o",
  "key31": "5GM31WoAe7YcupMqwGMtH9cbt3YFfm2MuAZnyoVYSpnNiGE52ohZ2aQcjnLa3RJmqEzvknTvzD8qU3CmiBg24bqT",
  "key32": "4P7ihG8gRpvo3YoPUZkqdeETHtW3wycoDdtLTjUYKsYLdzGoRjjYdmxHb2WGPBi3ZtZgHNHHN5B25EtpjQEuWfEZ",
  "key33": "ksoAMCQbpSxEtrgq7snNxCStXz3hS39tiQV6CMp1o7tXUHjdY3xbYm8hXQgQoQSrHXB8T6Cht5eZB48spxbATyU",
  "key34": "56YzJmpm7n8KrPBFKoLP6KU13VBd1reLSgkRA2TyMuHTVcJUNELseLcfRDyntySzRDEpuGwZB9ZsRQUisjnqCqyb",
  "key35": "4dV8k3ekxSYDLZBThKDa9bfEvm4vNGrqbEufB2zLWifnUuZxTX7SeKF2La6juqc4QtoMX9sBZvHWW7EyFL4graMC",
  "key36": "4FShwkaBLZxXkKBZius5fJ8z3KXt6TVpy158jfMgQLhFdHMnDZSi1W5APD998bhScbQBAb4pDAqipr9QeV9fKG4k",
  "key37": "2D4UYAxcsG8sTj8wQFLmteie5LbMpSdmKYFx4pSbPMzKVViu6fqU6ShK9t8XxZqcqfLMm9pJ9zkgLyPNdVJ4wH8f",
  "key38": "26ZSLYhWiWY3w3PFVuiXfbeXVPH8AT8P68Kysp5n99ehqMkgRJ9qAi7p2HrcYSz2jvcfEphhyKrGWNvjo2yFw8ZC"
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

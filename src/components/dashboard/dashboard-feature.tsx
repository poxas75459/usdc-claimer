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
    "38LtDZkfubwK11RW1t21UewYbLP2fnpYDTjWQNGoCN5bNooMNzJbfc25N2UmugN4GcfcatSM6BDf8nHhg9VNd9z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6F8ZrG9BNhzFqbg8WJQm44c7Vv6v2krEVYJBzaMxRSqZHLc7DwTK1VwkPEyVDFypgSnkuDsaimUrFzABLgacAm",
  "key1": "57RtQ55nR9pfs1XSGnDENG4b2B7WEZmMPkfcoA1GsLhzmvsu2nRLYSJXpzseJzq8yigsHq3jpxK5XixBbNXoMrUL",
  "key2": "4KXu9nzh2JadeUUh2Ns9g5cnqdoxaqPCELiWNsFafo4BLGLC1ZMZgSzH9YZajDu5DvtTSd6DZ7Gw1ciiSpcLr5S6",
  "key3": "5k3yidCLfqkaMBsoc1UhMxNve98CpQoxS6W9a4MATRTh7Wa4Vxu9inuknreucXxk4PcpXpTJG5QWrvnEe94uJXr5",
  "key4": "VtdxoFbDb9d2nbEKC6TSd9xWtNC2qcg5ThupWPcLWoQ2bSCx44AzKfkYrZp3Z2pppJRjuZhCBmQsWf9ieGbMSSx",
  "key5": "2eayjtXq68haDWwsACHABAD9QSeXQvPDys9bBFymCdWaLSNeoLcknG7K5J9V3SAtLXB6g1ZRSGF3cXLWkPH4Agtz",
  "key6": "3ZJCpqi4nd7FKrLWTkZoaSAZi8j9YG1xqDaf3JjMCyJYTMGkiBgwdtsJdc7AQH8T8DZ6f8yXzwgDh9CRXc5LZxiH",
  "key7": "JpGFMgXHNwnSdS5LtfYdJYbEi8Sy8WJvnJUZ7RWzSEd15U4eFrqa4KScwpyPM78eSMV4hDpkSesbVpyi7yEAq2H",
  "key8": "5drsJ9GpkEtAgj7inBrwqhg9iqgB4xJeb31LWxpZMXz9EWsNKnFyBwxbjZhJdZ516PAv7qi4WJoAsdBUnZyPRE8T",
  "key9": "65dcvsu2NicqoGhXLzyVkCoSLysjCWJuDCgxeiqhqaU9K9pCYwN1K7HwLJ2MtWWKJBxGB6ggaYJgMUUTYF9mqqrF",
  "key10": "66Hmyw6eouEgJFjFcJaKHNLBzWAb2qpnkjofTyWW6P4tjqXkkz8X9fXP58vXqwjqEXnNTwiFqxifmZaRJjAbCMrv",
  "key11": "hPtbV4vMUDkpa1aNbpZKqUKpVMEBqDKLhpZiD1f2ykyeWQP8oWi4RJtkzi5XyVmoHDqbaVFBvfeG8W5AuzSiwgQ",
  "key12": "5zC36gZ3a7kj9XRJG1HGuKjsePAvj8ttYukWKzrmtioUvVsChmr7dUfxh5qKxjVGMw51aWuqM7hGmBdU3RcvEo9W",
  "key13": "44FcPJ1YdLBDVH5vK3HXzqRatPDGDXAn6hGmdABNLFyexssM6r6xyVf93VDZAGjMD2V2sbD3ECQiZ8s8vem2pHMn",
  "key14": "41PAkTjLHCbBsS3TVg9CiL3AydPknvXVvi2JJiKF9Hr5u1Y2gn8rMSyWgfe6WFLn87YxZeQCvKvKtoMrWkJv7E9B",
  "key15": "4TSeAKzicQK6nQqRUJ7bTp4viqJv9g54HmKzE286CiAZWRHPUBPXRhv32Be8KMcjbFeAiaQqTNiZQHHyQJS5bXiz",
  "key16": "59e8GMbycPkU6skGhkfsPPcvi43N8SJKQXmbjq1u7hYTcE2nrohGMMw7z5WhiVJEVVt3sduMXHm8EuXTF3fb3iCm",
  "key17": "63BLYBu9HZ4ANFdryrB21W6pGD1inxw7c7wcy6MTxfYnJhKWGYetHRroyCCZdRphRoB5UAexHdQGNqYUTUvoww3J",
  "key18": "Sd62Sgp2YQrQ3zZ4BwgxDUP6FqKyMCp4JMRc5GUCYezJJVZXdJadCxXsiGgqktWAMZLyZZ7xTwjjyMU9CbTvU1F",
  "key19": "4zeRJdDeykq9mDRqUqachRc6Dq5SvUAzUZBShB7kopL9KtCyRxrsJ1xqYi2drQCc51FX6P2ZXPEd8vRRv4xguLfq",
  "key20": "4Mi57UgBBoZdwoGZNfA4hvSX7zYz8kTyjEtrCpi4eDtApYYiE2343pHHv4tfpX7HdEbiMvvdfNVeELsbBiY3zm4Y",
  "key21": "bHuDVyiG1b5A9D51EA6ezCzADxu9x7iTVG6k78MC8yaYNuYTKkRQoQuznM3GmCqgpYvAtUNzHR4Wsommf9yVfez",
  "key22": "3SgdnJAisrkrjq7HbGfQsRjGGBCmc4pMLTyyok3oCyzUAFhrPG4P58bmTe7rriftv7NHSznV8dGoLrnTuEHknnJz",
  "key23": "2hWsPzGcP4vr8vDJuKQq7fc2arP9SZ8LGVpLA9oXJP6jbEy71sxPNJrQp55Crt8XU5LNW1dRGFAW1VCkygJhKSXy",
  "key24": "2pmveHzkV3mQrsaEzVFmG7zBZMKuXRghKSshMADbt4PQKs4T5A4Dvo5yiboM1Rvr7RFcp74Hv9q8gFaycxzbRyB9",
  "key25": "PofyycN5AkSz2pATHAYPypdkD81feFWTEiEZDVYyrrrkk9pReEi5wykvby7NBsDFg3mqq3rB734oSXPqSF5vsBS",
  "key26": "LGLUduXHoywgkFZHfYTCRpQyB973kLQnVqCZdDejY6XFzbXsNAaCysHZeJCBbodaBDCRM6qNdZy9iU5WEn74Shp",
  "key27": "2fuRuuqQf6M7FsonQYCC98C6XnfGs7whWsZRYiaVg9Kcd1qJS8AaanfJreqFSfHJMjcdsfb1KzFRa9ywTmWya2ZA",
  "key28": "2UZ43WLanPMo1GtaM9S5rLrKAgyMs1qM4dsM7CWqEKg54UvTAGqBrE8DXicFU6TnCnZt9Bb1TUFq3HcFsUC6o8pt",
  "key29": "5r7SymFp1cAe4XRaoNP2Y51S11X7ekHdPcj2RfAkM87phcFdte9YWF6KqWkHZWjxiFUNg8V6SGYCj9nq6hWZuagK",
  "key30": "3a2Xw3NTfhgxBCfJMCrmgqy6N2sPeE1hA8ESKup2Q3gyhTJRpuR7gU9tfyqHtXB9fqAsEjGyHqXXRmSEBD5eb7oM",
  "key31": "5a8wbATXutw2xrCTyZkrmDZJC6aSaBRsKrkQ54BbgBhWJrBw3nodqJafALRY9goP2kansSviHDXgz1gipQzTa7oW",
  "key32": "3rj1723ncMC2yUjuhnvSMYBgjfzFpm1V47iKffqynyy4SWRdLmWCvztJ2MLLqSfTHg7ZVArwnkAEQnreurKTFqjx",
  "key33": "49xbf42rWw9HnCUHvM2yvgj8vghgEsPUVjeGwZrUGGvDKdNRwNE2p9iAGJZEp6rctrRRnmDL8K8NodoM4iitTrXF",
  "key34": "meryWYvgefFPMZwqs9atJ9rKTLEXESqT1wTRG2T1D3PdqutczEAfm1qJekzCivdYCNfSp5LHdsPA5CzUfENdnkf",
  "key35": "mf5C35oLv99ubvP3WD25ffrsPJdKc8idm2ZQGBmjBg3cosFJukVmwQpTx6B9AGUQ83vSGumqdtusP7GQfELRfsj",
  "key36": "5FTmtQqdEDRBNYjWFbWgQK87594sm6ktCJH6r4G1fK5JGCZYMjT3xxriTpaYg6DZH43LxLkgk6uJC9u6SjvPGTgW",
  "key37": "5bFWdBP2pRGKNcnHghawvMxSzERJK6mnwuEb27w23FXkeE5A8zoXV6aDLdCZrnJRMQHxoBQhgRs9nZiRPku8qyhV",
  "key38": "3VsWMmeDosGM4Jh61ZHH4SHXXKccUekvms19H2B4SGfp8kM4e399wLZwpzKMnn4jfqGQziYagyjxCydcrJ2V5Nig",
  "key39": "61ZvxqD9Eo2BFKHUgsu9xhnNqjCiLLfc1Q7vi3Vtq2ZZmWU1kfk3JEJpJpUfxCXtZ15Btgg6tY2czLMNbpvJaJjE",
  "key40": "z8zeeoCQEs3rLFkMuzQjM3QmqRKDGz9UjKn5Ph125tVjtWfwBfF7eztqjoi6nqC9J67SCgkw5Qk99q6vcFuGGhX",
  "key41": "4HdNF8NcTfvCg3koo8ziR7tRYUAGtwLnmLHGqvoD1kvBnU2BNVpEDa76keMMLKAU5Uvio1E1RjaSLYEUif4tzQMe",
  "key42": "5he5Dow5VQfPFdGH7TJYYJAbJ9rMhpvS4UaoVHtjNjt3wdk6pWxRac94fMw8YaPKHJNAZq13eWdi5QBRLAcotZwj",
  "key43": "9zovkvEZTEN93ZneXZmZ7sNtUYmrqBYHY7aWGNjgTMrqFLn9M2q7mgSPMDpK4XhQwQvusLESpdKX563HGSx2mgD",
  "key44": "5u9R2N8qEp64CDEV6ghbij4DAgjgndVN3y7WRjiyDwY9wELLbQngq2mkPTd1piA4bjzGscqPhefGNe88MAxQfzNs",
  "key45": "3ut3CgBSumfZtg1pbQZF5JYHnNjWEmMN44347Z7bwhycFCz3WqBDtttrmE4ZBfWKwHwAw9ZwFpE8nXKeob6Fv9Vz",
  "key46": "hYjecipSN92BoLTVzRM6TQ6yy2WvzJZesHCKSLACgp9AX3wgwTb6yhXFZ6LCgKxcEmbAD6vgLnxVmch4Yv5HWR9",
  "key47": "dDKCWLVvheZpzPwhVPwUkByGALnASQ4icNHjJPiS3E2k22fHniVxiHjTAPpwjW5GFoAnDefgrA18cQHK71NMtvC",
  "key48": "35Ecqew5UgUpyFSUSCLMbdX1dMDYdJWS2f8hL7qPEyw5FFJoymtVfVm7hQf1uvx4u6ZRhvLwKsVbCEzE8ugDi9BE"
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

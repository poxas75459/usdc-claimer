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
    "5HF8zAPzGXgQX34K7V4Wh4SHVWFTWm7vQuYvJgHjs3vx1qDwCe2BSUWurzRsjpNsNEqgJEYoJnpFuY7JshMcxdkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BJyoXWu2e2Y8MHidC2mPtb1EEapvrVqwAcDhyEzQaXrXeJW7KRjwUDLHZYRACH4VqcAX56CBKyxiEfi7dQu7Tnt",
  "key1": "317TJMwE4nh7fPZqp5w4rQEWP3GfD7eQmiDDdGkGp3vv8nUxkVquXLKQdA98vAn5Rj1cGaawUSmKBwo1f8BmY4Lz",
  "key2": "3bFk9CTLZdsQUybXWsbDGsaPB4UF3fqDwDfH4TVDwo71Zo481d6LgwX1AGT9yVowocec9AQc41CYHZQJQ6NJD7xF",
  "key3": "2zyiQV5rY1897F7UnugQEtdnhcZ7CL8Se49KTgxELjqVFbBUwG4KsHYDzJMfnsQthnqn8qfZ7Pvk1Fo5FWaZ7GXH",
  "key4": "5BG5AcbJCAC1RarDSvKJwuDZ4NZN5XkQmCuu5AaeZ5jVvpC1jmrSsimwCqRRxzmVzCz2q9wi6gSZqfddAD6h1FbX",
  "key5": "39MNcamhJ5utLDX2JCEaBiy9wDKfAUEGqvtctuCi4QLah5EaP2Jbsk8WtWKJtKj9qC8MorEbcYaz38vxujXSCR1u",
  "key6": "2vUeMUCqRe1ZnBbYsZrmLjNy69WKQHE4gApXFT4Lwoggr99L54tzyyQAWRmwMD7MPgY8sUsNqUrKCcgdNwqTrRG7",
  "key7": "1S6evSX8HfPBcnDduuieyJ3eZvwdLyD37Z69cnY1gpXD4GFJiTuuABgijoFrcrSXwNwRgo84bdq12BLpDu7eJpf",
  "key8": "WsAfvBs4NeP2sXXbZC5PnQnwQRerCpotF3rHewrTRAxEwpE3zVx53omc5VjRvxvTtMAwjurJP9bvCKpdg6NMk4j",
  "key9": "3f5UhvYo9RWH7kJvMxvvFeS1y2AzPebemCvB6Mz8SuKGd74D9zjAt5ZNUDJtsspHxy8Mj5BMgWBBiceaYt4azKGm",
  "key10": "3LwUrupSDrtenYt7v2DTGi254rRELRQXkaZXBmC69dSkADL4nw9vgnRZPSenkk92bdJQ7xN4u5hxPd2MUvGUNatz",
  "key11": "5Z12KQZ3uhiGoTD3gpQnr5U3At9Yj4sFTe1ynnHpbMHN7gE71DGzvF6y1uspgE4ddZFaFfDjnTUbt3ndMsJMuCr",
  "key12": "4q6AKSm2hFBkQwgsUsePnqr1EyU1C7cshxwyE5DMKVYaq4vhFAvUku4PXbuXFYyqh9bWc7dHfLea8CDpULyaYW4k",
  "key13": "3U34X684FhsXyShpVMptzkHn5vHA7jmyjWNPursneprMvg9EToNbFuuKu4XBRbSW6JdveuDPwrMaLG4PQianxAmc",
  "key14": "5D5GvNJhsKdw5MrbygUAn2dbnwUBJQCg14wfVHKg5DjQATzJdKiykxmBsm69iBWEWAUM99Xx9ipAvZnH7jWmuMUZ",
  "key15": "kAbR4aNJjPVQpYLGNRrfVpyX8PR8yXmpzxFYJiY8CGzbFs5D5RJaD36kJ2n4DyiDsGRZHbTQUX61vwhq3F6pswz",
  "key16": "3rGpR16PgznKJAR8sAFFmJn3Kg6LhyCt7s7ECZYKnfEeankgdRBqgJuzBDKPPWG1gkgpanjiaauLSw3yvPgVTHcG",
  "key17": "2QUwyjc2b7BcSHactxCxtubivq6MzLRFTe6pVVPqkRVoCRKWPzGQ4ktpz2u4wG8SGTbATNadPeVLPfStfnhdeKB7",
  "key18": "4JLneQcP8MmBHEc5ZVEWgyKxDDLZFNU76ovNhvfvGsRDcxSwNvciomkgoFijaHvKkKv7rFVsmzwpdobGHFVDfHw6",
  "key19": "3z2SjrAm1DMtV71Fpxs5b6RAZadT1dgrNGNKb8hJpDnokpV3AiPt8VyEUpFDQFsdpKFhP6agJ7c3it7S7QqCWKGf",
  "key20": "5cKRgEFrDYmT19giGjJ5Yue3h9UuMbNHAb7QBsD2Y6gnoZRBBfQvaeDYnH67kL381JnyBXBTvBwbUiifUgFLWbdD",
  "key21": "5u2H8bQxrZpkfWAF6oB9b1gX2w6Fkuucq2EX17ZVzpwMyG5vcEPZpxsVR2Ak5aE1XQNz6QTWYfJktWFDzy8Qqm3f",
  "key22": "3nKWoEyFHicWY5g3qg1dSNStFHuLt7LV8kGYpJomQs6bxBhzGQ4m2eRAPDRzsGY6b7vBcm1yfmcBaRjYjhWxx7nk",
  "key23": "5S475CqD69RmiXWERuYm6XQzhSdCJzCxgp6SXZ5Q9CzwxWXCNTjQqV5B69METYg88bZPmLrhjkVM4bdiVp1y5D7k",
  "key24": "3P8G9h9xFhkUsPg28ukU8iYSrr27QDzSssdtTyQFP9tSLmo6gxuLJjjuCvmj7ME74EqCiVotMEp8bbryRXwUGDpB",
  "key25": "4A9TgEMEvEziTJnWsDeBtzG99qQUZ3c3B94BsNioFxAkdCS7BvfQ5GozTUAVcRUfBhkPTeTJjgvTnay7qMDrKWHC",
  "key26": "47F3kSHdX1rRPmJE8Mkx5tFCdfwHSF542ESmRK5zjKdvbsr5GT2Fdmyq23Qs73LDqZKRs6LP2fPvnDKLSqi1fKs6",
  "key27": "4j2Wiej92jYCdgPyFSY5CfRnZEYgYQ2sYR9mmbYc3ZLyWNSDc7T9Phx6fKiwqqHw9yfqVvF51hVJLMz5fovmHXzJ",
  "key28": "3mb8spzrfvs8yVL7u4QrdJ6LQxfa53cvsd1DWXNEcNGo67FXzstGurkBfYkZHKkYXTmZ4VCfqjFX7Dp9aS2cw4z",
  "key29": "5Tk9G3GXS3oNgXJVJcNNmB4rtnJtF5V61cgjrZGC4BnhTPQAWXMmabZCLMEMC8PhjdWGgUQRtWuuYZcUudkNygCj",
  "key30": "24qZjCuJ7aeEVXhiA8eYzvhGR3DGekexN8naB1wDbo14ozqQnDwcykoUKknn9JLzyWJeCJjvMXaJxuhsC9JXWxVy",
  "key31": "3U99MH3CWw9UAQTxxLAPyzGibzyoLuzMy39iSJZry9uGhQ68wnJe6vy7zzVP2c5GD47bqc6jyvCATXLgCan46K1W",
  "key32": "3jK6kb6qnLaJ3a5wmRL3Xu7S5eCg27DTPQRvz5D6jDQy7FAgkSGkViSRSaAHnQLTRFDKdPGeMmTwFHsizXdfkREu",
  "key33": "3hWSVWJTP2FKF3z8xXTD69PSkzW5ELcEG23PAkWp2QjaZfo4jgGrWLaC88gh1pVS4g2dupUUo6JKwnFNDQf81fnA",
  "key34": "2EVQfvBXoD9fKGLHMM7wXC9m17TtjaweNuojka3TV2nXHJnHf7ZBRhtuKU1dEXUHrrZ3uBBpQu9vUdX2RdqLR4mS",
  "key35": "4baexvRxwPjzXSnZt9181Z9Hx244xzj8w78VX6Vv2yKaVS4tK5BNVcQwQFUkmT7ZshjSBTwUCoLe2WjiPVcvZHfU",
  "key36": "5BfcfrLaiFTKtWr89EyJ16if5ySydDLcUZ17oEqC4dn31CPzZZfgxGKJoqGLsVSAeDGHQTKwjTYiv82qbW1kaKr7",
  "key37": "3DvUxvecYZVK5h6634B17cTLrNZxVSufNHngL1mEu3yxdJ58VYdA4ZBKZ5xn5zQT3NEicSyHcHHXxUsjRREHLJUB",
  "key38": "4xm3MyFnFA9iHiEXK1oNF1y2p6ARpz9JtCoxgZkZ148fXvbAoAk4greRQPpkUvWSYEwqV5rCF2ENGDY8DvEP7CTf",
  "key39": "2bzbjk6qbHsgNLUPvjQ2yw4PB278yRmZTCK8zXWDaGDMNApfwyGPo17ABzKKjcsx3P1ucPaRetnzzYbabaP3ySwr",
  "key40": "2EzdwDN2Nz6qyxULFmfGEsW7XehianEcqzTC1ki7ejFCdwW5wrnYQXXXv1mc73mco62covZvhBLnzRVMgJC2awfT",
  "key41": "oaKUCLdEBtVXPCTEQDvdLqsVAXnhBiQtDLnsVHJwF4BWnbgbMBcxho14HSMoZiE2KevB4sSrdPqtSf65UriuKPk",
  "key42": "5kSRF6CkMqGpACWaDjSfmMmEG36UAyVkpNgn6J2YQG2WrWjai3K9bwRuLWgAv6XnSD7sRJdV3JwYnhw1X4VL5uU7",
  "key43": "4xtfeA4gKKz7So3cAnEyDdXM8VVrPEg6FjtesTxQNZh2E8Q8uyUzMNx8jgakrV6oQDzWfojmCiHD9oRLZRg77V77",
  "key44": "51BXhhwEQqZMy7J7HSKrvnCuXW8fmuxUWmTDgxQRefCcgmsF6NxiXmW81NWoXEcUVNS7yph3nXQx2CcopBxQQLEu",
  "key45": "2j7BJJy2Ge8gUL6oJkL8SavdM6YuRPJj1YmW2U493EysqFDVh4CPNDMoc6kDFUv8cRKv8LgpwXew2mazdHVFUcJr"
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

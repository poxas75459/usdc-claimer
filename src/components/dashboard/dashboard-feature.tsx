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
    "5BtiHdTNcZMjpEaCRPLApeVDrVFE2oZpgDmgpH5YAFqCmW5jE4fnrXCKcqGe5SNu8Rz9ohre3CqAqTB9XL6fDKgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k79UezGGNJGpi73B9WwzLG7TpCehaJewtpHCbXX5FpeP4TZ6X1wWK3BdKJ64tErRCdVLkGzSpLmtYSPoQ7jDPfC",
  "key1": "44Eay9w5Mm7Rn32pvsAJQvFmL1xvt15FkEA4Yp8dYFwZ1KX7zvdpgwaRk3iekdgrPC4afWZWC9GRiAQzssEKdFW1",
  "key2": "5b8b5RnDXSmuJaPUGgmmVZYHvF1EJviGvMeuKettUU4Qxjg6ZNWybKZkTE1yiNzj8yDq31zSHrSPYr14guPu2fFt",
  "key3": "5M2t3KgghgQJWhy9MF2CyWLBCByqFXCS3UhRC31YpWfPCfyD8j5FGPPJvLXjKf4Qbd1go41BCQqz4gGHEfxxswyJ",
  "key4": "2ogxS8SYchY3ELYzFEDtSaD3ouWGfLSEdciT5NoeMa63JgsT8UvewELVVU7EDriV5er6u7qVbkXWCFfHEfJQQXCx",
  "key5": "5zqqW9Hyj1hbvQYyHVnZuDX3GWz9u5FXmu3wnU9gh8LjmN8cg1j9etujbt5BxxSzBYvqneeFso3TDLsmvUVBEMhK",
  "key6": "64DKxEFArmug3u7CXgSHdWGHaMhzFtVmsAgfaLwacn5UaMmq7JxBDPMk39XoT8UFbmySFhb76U7AfiAtDNpAQ7H1",
  "key7": "a3ssZXAYizPYCctXEdSGdEkVh4uLvcPnEAGMpFxCqXFCmb3WYqvm8ZQEqVzfKcjAhqw7VDoNGyActNTzMr18g8L",
  "key8": "2irzx89H5koAMWbyqshrTvgmdZ2tHsNYpS7SLVWeEhhnRWydNE33SjHrhS2S2TS3EvPtsc167ZHxWMCa7iDcT9kb",
  "key9": "2iWRLX86LraPbtJmgmD9AL3z8nQxTiTgzpXTCbE4tyXgXaksrv7h1QDtKpd5Ws7pxyGXo1cWBnoEHiXsw8X1kkYZ",
  "key10": "3y384EsmMbYGezcuu7wmXK5mV76HdS7rCFYansXP2CSn3aWrYc7sfbFtUqM5xUWwMYzAaZfLbHPbjn3tBRLc6jGR",
  "key11": "3tCcuu1n59NPV4Ab4N4sbEKJ5uG8RVCMWnW1seqB3SE5sjqfi5akDVB8x4RifgdU43rnhjrzzXPDDfhkrkTqCrUP",
  "key12": "4ppwhsTmB821jAMNFLt1J5tBFMhdTaqy54w812q9A4y419ggFX1oMiH9v8pzz6cjjhoJEFdmhoyUq6LqPQpvpfhL",
  "key13": "27UMtd1rXPkpk7YwF5GgnbcqGUJJKLursDdUZK8w4WxPB1KiLvwpz6wzWSTFPcf4yJ89goqjVuCWDqjGetw1otyu",
  "key14": "51nKQQjANHSUhgVFo5JGZordXNVgQC3r8vGqm6Y5emYYsq7T6aqM7CBdpSuMec6w3sYJZuhXVKUjpYWhqyMZJ4MQ",
  "key15": "5byTDQ933eSc1aLs15PzuLEQGgtqoBNeCsrksvvXjDig21cRnRhwbkfVkzSqjdA787pUAaDbN5H3wUQqrp1GbYmW",
  "key16": "2s8NWVhen88yrfv2vNELBqRXZkL3hJMBX4Kb5Q2vkCfYqLSfAHMRbUexhJRHkoE2TByKao999o45K55ZVTgLAXCo",
  "key17": "569WkXT6szZrbHwMuUtKLtF2W2FGYuAw4FYYwW7xS6t5Qje6rTt4SRfkT77uqn6GuxshzYkZtkHeEhVz5xDijJsY",
  "key18": "2PxtcS6pEPpSFREN4QLqmajKXoHBQEjh3RsowBRSvnWKRXh5apvMCU9e75g4ky8TvDYgjUwGSgGn1x1h9pW1qeqJ",
  "key19": "3HVNbWWxp9zJmnvoxS7SaUaewXypudD4yhCbd15gehApNSgz4P8bLPqJoCDhtrz6cCfGmtzgcBopNNo6fABf13Dh",
  "key20": "5uYiYWAYHCmijoe62mp63rMJYkPSrw6sHggGEMewLztrAPJYkehVppu9gBhHo5HAeJp6Bs76pZuSNRc2fuRL7eYT",
  "key21": "4hKVkKM7jV2RV3UENG98JzwXyWanvbvrMi8Y918EWGUCg9Nbo43TPrKRcBv8sMhpM187KsXUNwwShkBdQNJrznzH",
  "key22": "5pYCBrH7hnhJg6SN2XsHNxaezaV9zbQv5SEb8YsKcWM4m7uSHeGuonSGWi7wERYQ7gvqcodzUNYoPH5Tpu23pt4J",
  "key23": "2VygwGGd2fzxJhJhL9kFRznc5xoJbago6yuwDNoqkrvriXqaVnAeDjUuWzfsrpaqNk9oZEC751RhTTmqkQG29dJE",
  "key24": "5v5cS5KeF4f8bcRX7kbFppioNr8KnFK4VB9GSfVVf2SYwSsbR6SqtyXDkYpZbzmv4RQzZxg9u9yepqXQMmM3SG3r",
  "key25": "4XtQpgWUEVUtYqKR2RiooNcxbC5Tkz15A2YYV8Hf65TtRFGXBfYKfH1byLXT6VzNJk8Kx5y7p2s6wrtQwxKB4EWi",
  "key26": "4PFdVn4i3C1Y6bCaS8EBtZ7MhkBrgkNczjahrqdW7S2K7ZjJSABWAwxW4EfR11bxJbNBzJuWVEb2NfFt55vJx4eK",
  "key27": "3YEUcWUNs2YpX2vnrGR35YwBkUwT9y6mZuBJkRLys67VErV6DM9pBvVxMpSViPR3gWif9t1Pgbjv6NmC5azkHDEA",
  "key28": "2gqCiiYm3h4y9hNVeMSkqMKZaDtZCwXJoe3TrNrzApH3rGxuuXtJoPbo4CMqga9x4rB9d2octkqZbeAPUJPNnPMg",
  "key29": "3rr78KHuiZWsxyHAwXm3PeKaEMMR2Z6WArXVhJbSuaKvPVg5NLdpCWDDite8fdLLStwi6h6myZSu8fqCXtBE47Hx",
  "key30": "35gpWPddBk8TTVeDa2DHuZeTKByC5VL3x7B8zpaiKi5uqS3FoYGVhFUhK9N4vNpFdewZsUeGcCLtc6G6GTGFtdd4",
  "key31": "hLHxfZjpnpKU5qaogDdWVYqsn6x6xQj229qkESy3GcWVNy9fqr743WrMbEuuY2Hp9LyXXEekDty7YNf5reh4VAV",
  "key32": "5fx54LaBQkPKoqN8EPnXsdSnfF3XuzfndUBzCbfrXfyPeM275wnvRM7SaTv4GGkzuSeBbdiSdTrs8pow2Q8nfURf",
  "key33": "4BAUGi5u7YQ4atxCcCk5NUtGzqGW28FGYztUAN6MDLnxFLsDhaarQ5UXBkPTwnChZEBDGwS7cMUbC8s8a8cRyunK",
  "key34": "3EvBwi47P8WFjz1jvXxQY8qh73fWHB6MMsESxwf5PoqS8ZwX45Xhki7ppL2zM7qvZHQwQPipwp2p1VMDeSx1hWDy",
  "key35": "4UbYPdU2NKy2LN5jbtcf2RNeAWsYB7TWDWH2C6g8Uf9e4JDd1iZwDKvEWkLoe7bQ9122UfVsjXAGpy8NiptVwr9",
  "key36": "3UovGgwJs8g9aSSLrxfj1N5SG5KAEiMZZATMZLfg6ojE8J8SwVjt5qimupwJ1Kyf9QeWwUGJAjbtfxDtZRrEANyw",
  "key37": "236akaJASjo1bjBnZPoFWhP3wDAoknRMZSxo4weupvdotxJroGWGj76Y7qPNZ4vkR27vWUb3C3PBv5VUtNszdiBZ",
  "key38": "5g5MTgfxw6n85XsqyiSXJKVBaZK6wF665sbM6mC6yXKZ1yK4tNb6KsY35WQavHxU6TBNZXAFaViE6w4qCvJeLPht",
  "key39": "3hzLv862P7EEzBBQz3YVbJhEEjuRMVa8vucNCxWsg4dT6mpARcEspVh7b7AgGMauTiCcmWT74PCKQ5YbwtQH14UB",
  "key40": "pdrFwBHHsCmhteRCfVKUsRs8AG9chbK8PzkULaC7n6mQjeefdVw2kV3wmaAMgvxNAfCw4yyBov46Hn4DmouoMri",
  "key41": "394ib3AxKgj3MYoqzU9xWBYaKDAhVMhgDwDWuANq5PVExuYoKMnHBuoe7wzd7JA4XkBfbB8XaP2ryVcfsrfZX9Rk",
  "key42": "2ACtU1bNNnsA7Hh2PmJ44xsUhhkipAz5Z4N8hBpPNpbXR9cPmc7MQHX4SER3RkSnqkz2bJS52Jqe27Htc8GXEE8p",
  "key43": "5fpoxCUFBkgnascxU3JWDv3j1Q8qjdxgM3eCLKBJ88hXsZxsbdMYJknU1mtppkxEMwHrmQ85hjD8VpQBtgLoRekD",
  "key44": "dpB3tY3nPeyUS3KGcwr2bsN3MNKVgo3hTxxSEnuv2Zmjdy5Esh96iY344mAqqVtcxNK9fJVUvEr2Hmjv55QWLXS",
  "key45": "2FzKDbyEuxvyEVszuuHD8uMUGxnZNey5vtouwk2Tu6Nx6qWUupuzCYtjJU8e3WFAY4QSnWEVhnCvy4TRd8L4gXCd",
  "key46": "2UgoNAU2qdPYCYSGW5awN566QwV1VLzo6KjFwCMWWyFnpWQHJDqkn9tXEMTRqty7p7u9StDrsoiaw5oiKKmEcDym"
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

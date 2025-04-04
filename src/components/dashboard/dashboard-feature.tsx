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
    "4rMKP6ZcWH6hRzgS7x3cQWEkTDZRbQgtx67EYUujQ9xBJzAzxJ1Kukdd37VcJXPEkGEHg65hndiaEBhqVbx8dghu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9hPjvzXmXozH4UmH1D28pp3PNSjAkkwaP9qZXvHESuYPHt9apPQ46imZhbKa9pXJxQUGji3vM6HAC7VdEjkShZf",
  "key1": "cbTL4MqAbSZkmFR31voHMb9mYYhT44JCX9BfwGjSJQ2VvJrijTquhTmZoJNTzEZyPZS6UwTmUX6hg7Kdm1a5M7y",
  "key2": "4rkBa3f4XMJB6bWFPQEuoKDYW83xgwZ9TCjbcSo9pNRBFFerTodNRMM1Zde8XA3QKf6brZUbpWFhpzp1w64wm1R9",
  "key3": "4bwSwxuBErs4TuJm49F6yPLr4ancUmvgUQ2D6RwA98mV4RyB7gh2ERu7Np1iD5K3ZAgSyynCgcSBoiUQGDMNZUzV",
  "key4": "54aB95XPAdogbdcDjhsLqNx3CiTiZg7YTbBBX4ZA9Tnnv7riXQrLtLtewNourj182yKmQuFe7e8uDR8EGstG9Lez",
  "key5": "2zzp1iL3Vxn67gW4X6CgQvGU745bFr16ZCgiD9NLWh8EDcqWZsuD5g3YonYNzfJW7aw3FDwp8bVSUs7bg6R6eqMo",
  "key6": "24K3CpDfg5g2JKV7eMmRbV6x56Z8JTXbQUmcSq9ZmV5KboJSjKDWUtvUxhJeNK2ddiEPQ2RaA6rVfwpexp18e7y3",
  "key7": "5V4Yf8sZhjncQNoPHvZSrYqyrdR2A97pEN4hf4iYsdNnMwZ6WuLa4LJhkDH9RmZZkoWXtPpTEvPsux3z3Ey6Ectq",
  "key8": "2YXSNJXFre2uaauUzJqE5NpWcyH8WdzkCebrD8MH67BtCzkbKh2LAW5a3EZqW73PPBFGFnfTHordMPPgZeKASwds",
  "key9": "3NySv2Ss5GUnazRj42xQ7pbnpNh1LEFQaXcuuNKmbUnazmHR9FjjCdqE17Azur3mWBb5GeYEh7MDkD2heNgka1wB",
  "key10": "FjCwPSyNHK4YfG56d1CN4TwBfyyBAGzFt32nYxm3jQ3Kucf5GLShfev5d8hgLkHq3FJL8uqMWaR2c9wbtx5Cvmg",
  "key11": "5iGBDUB4FNHZHCrmxV36BDFNs8ZrcrX2beyj5Hws8iNkjxpRYybrDuxx4jdES7xYeXzNqK5a5zsqb5wgo7SdQrpK",
  "key12": "3cnZiJn9dssi9fcsbF7Mu5mYCsgnzDNJWCSkdd8wQFBoCNwRRYwLXHAnrjArYycYTPQKsMVuEkSdAuQpdWKiVfrW",
  "key13": "4eJ2QkY24L1CpcJS1Hhj12DKUgMj5A2WMLJHRuZufgbgo5vxCtCzfkRGXUS8nRqZs4fDndvhA4vju1Xnvr1y1Kjo",
  "key14": "48uZY9BQv45bUJrD62zgh2L6JEcN5hiGXkbaFHzFHMGsinCm2sAQR5aTn2NJBM69kqo1B3tzr3eDmsJtvvHQ3Xhi",
  "key15": "3vv5i8tgsPsR8TQYZZjdrWXbZrCGEPTdnPLvYuhkkNiLdE9Ayo81snyNcEcNsccL6mp5mAZucqh2Xh6ZaY5zmwhR",
  "key16": "35xP9MbeHHj8omTiBWVwssPNCpQ2ZjcQacaNn4tV5xev5VVRwncDTa9PEatJgBWNScJ75cdMK7wah8fEbkLyPSgo",
  "key17": "5rYMGJrYeJE6q4CYvQRh5EUDBbXNUkHYRFjcZB6pckPkWEWRT1e2Ptk7awQ6WAhbx9acZ97rw1JaZ4cBuSKxo38P",
  "key18": "3BbFTigSKtzwUZHdVbT7wKvLcbhJiZEY7R6BdDg2uhEboJEqbKVbdqw9yHwHnvvk56oA5F8HJvQEfEKc4sMxQnc9",
  "key19": "2utwenjrNCXJUWwio6bEnUs7FDK7863VWKWnb8ANZ7M5qEhGCuk2N6HKSSMLVNfESx3Tv4ddEZ6iBm1SWkj9j4LH",
  "key20": "4TbmEWonwtodieUku2kw1V35gJyGyvx9g5VrYkcKjG6pFT7FXrgd4A6KeoqH68auzvcfoGvjozso6rxRUMm7NjKL",
  "key21": "2Dr863Q5NcrSmotXC4rwhzs1m2r5oXxqv1AjR15sHQe8rykBhAAyV7vdR7s2JLFHtSUghacHrM9rEk1X8SXWKndt",
  "key22": "2SbL9g9xRzFHfVhV29MSjroBA65Z6oqUQgcopHpgWup9z9Uw2noWmanUdQBBhkAePnwP95Fk8A2iydn4HTJXTbdt",
  "key23": "3Kt2fAPEe93K2GPC2KfkUtiGM4Eie475BCRQbiSaFMsPUeeFrjQyQvdmwU7KBZq542CMZxjuTuCXbmWXbWP4F51T",
  "key24": "46ZuZSCq7cxi719SyQ17YjmaxVT6KabSGWwgFsmjFmv5Cirq1SF2eykvtWju5PaPebxdrJLX6jKwcLR6eEArfnSR",
  "key25": "5bQogP6NBNt3J28c4ELTSU7qqbFxWqMTsVpk2GzcMYjgVX3vbfJP5w3qHKsNgewmfzewHcoknhFP1yc1czS68X2X",
  "key26": "41etFdMFokXY6Ngz58KWCBUS2qxgmkbn9wqfVb8Hk9yW9e536xZXyDubV6CkxrV1cptU4FCdcDUy3MZUkeNHEpuL",
  "key27": "3f2zmpnc1dBhVjm43fQr3pAETaXTZ9wP1gjSpBGyUiMaT5HUdodnz46J777y97RH7fVEMX3yvFaTa5TTrXfTKeJ",
  "key28": "3uYYyozAG8ovwY2f278oPRmGGReWf6pHbczKk7AZYjXpAVhUZ9j6g3FP9fNRTgTrW86Xy9PBzGA7zZineqhp29hY",
  "key29": "52YEHKyqG1Q6jqzXGNLmQy3PT3ygRmdjvjapbagUyiLsDNKdPLeT1SasSb6TtCoqBwsNz1ipoDNd9PcuNo4iVERk",
  "key30": "D9yZaS5YuFW48Gs1vZw7UatVp3SCnyn6nGCQLN1fzkNmZeeWrDPLMSYXRYbXqenGW1k2qRLJ5ce9LnirpbhyAGK",
  "key31": "YoaV3CgNcjH49oHMzfvNuGx7DybxxCZgY6CfBmQtxxBZvPKVAi91W2rYiKNWFNE9KHK1i9i9Vu7f9ZqSfyBrcK1",
  "key32": "4WN21frJEsErifnJmB78mxKjxJ5aBBmKrezEHBve7NcgXQcj3yQH3EdYwuH5T6bgSiudwsqjgCHupdGFyYQL1jEx",
  "key33": "5TnbtyzJaQZWC1P87cR1rj9XGoAanxGbUN9j1ubnGeyzA2kLN1SD91hfAnQnkwR8MyXgy7Gd3nkkwdK555nHpJ7E",
  "key34": "2ef31tLycMLCiwJRCffRHYr44y5CGGVuRKY139bXZpQPR7nKH2wWiyD6B6U3wxyr5qkDaVbiQgfSAz6YtsuEmaaV",
  "key35": "e2pEwxRwpp4rgVSqeLqtiH4sRPG5efHQrtyTSBbFQNQTJm3rpJcaoUGWXC2TMg4qs6NGbC8qrbvggk7XtmJq3AP",
  "key36": "39gokRaaVwXUMNoc8xZT1iTyBnLQfeeYGZ2EFyHhJStMyzBkhPKv4opvN1PnecSciarvEjVnhh6g1k5tYfdVLV7k",
  "key37": "2SjVxnS5Vd9oBemEXSARcZ35RdkGc6KgZuQYa3TZQD5nqSk5Ax6AjGFz8DwxNgWbSESRiuCojh4VjFBEsTi7cTxm",
  "key38": "5PrbLjBXg9rKjGbFaTLkfVCgzLqWozif1sndNAEiGpYo3cU3oaQE3QYviC9XgJci6YGfA7YcUkVQBT75rP5bqQya",
  "key39": "AF1nD9LnbRhtpeMdo6TU8Ggn6EFf4qvxeKbLQvBcQ1d7X77ccdy74ycgZwfqL7FNb7mZaGSEtcuNJYmUTgR8D7z",
  "key40": "45Ms8C2pt7Xcntj3gubPhcFeFvzsA4Kpi3g48yL9wN9KwotoKBbdjYQAHtFj6q7CK6qHappT7LWjcPK3GzGHPfeu",
  "key41": "2KStXP1vYSXwA7Tw8sFoSDpptL5yWWgw5J93aLfwTJGQL4zi9F6TxhzeLKZiRoPTiVGciZ51zQCYs2TQinf6udho",
  "key42": "2EMwnFzFm7BVs2RBA6JWwz3w1hukPddqRDZLNyp5xHeXpwz8r4RA8dbP62JW24sdoYSp39Eq3unAYhV8b4hs3W1v",
  "key43": "2XPLRgbmCyQMHMy1ipXHrWvGtibgPeE5qZL9PuH8m3e3PKxDgGLWXN7ZjoPtFE9oDCN5FHYnHhYrg3iYCuyojwVM",
  "key44": "4RMrWMfAoC5XpUMJuRfkfeieUHVDc91VYzaj1gWSRDEVAK1N3rW68uD1t9bFmDHXNDeqpN5FUd7VD22PYGcsGWUH",
  "key45": "5zY1JhK2j6eTZW7CQda1fMV6bkxiGdT8V9iFfcMePDPX6aUqkYAJ1APFfd5rKfZUsU4x4xXYL8nbxGdjFgKX9GWv"
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

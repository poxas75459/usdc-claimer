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
    "fMFfVMoQBmfRydRcbFCiTYgtUnnp89qEfxwbUPggjwBwQxNNsZsZWQjFd2jsLpHabBanQwsxrJUUXSs7oa74ynV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NkBKnKP1kcZqNS5ENMoYL4cM3TrghrFwbsQBrGCgY4Lu81yYzAtoVBrgqnDvKL87UCAM7Ef17q7WjRj4LZNWdyp",
  "key1": "2yosRyAZLK58HLamWx1UGWK7UPJRd3emGDB377fHKZf19U3QDNMork6EBzW76buN5PCdarRXU5HYrny3ykxha9hP",
  "key2": "4fhNCmq1VwHe1L7y2yEsbQWa8TtaR5HuQrRiSd1PWQRujq3rHRtNS1KeRYnCnfJneeJSSxmnvLts4YjC5yZ3GyuX",
  "key3": "5F4WsMdtJE7JVtg2MJtFxu3VQchz2VBEzfUEsddk4DmAEzh965WNPW64imHHRdUvcApjzLoXxp5zTgboVhr2Yr1p",
  "key4": "365WKuBuGzBcoHk4o4pmsa9FUQwtF4BaEbw6Zr7tM93PhmQuv3Fa8qapP3Tx51xJs9sS5RDDFMyfB79Uhkayjkwi",
  "key5": "426PHeQq2estrdinYYMg2nZnxPat5j9gY5A74JQzUfBC9TuDsSu6thhz2zNrut3j4HLEXE5RWbEsxiic6aYJ5u8B",
  "key6": "3EAd5MbveToRJFRPu9m1sf322hU5p7NhuXtmADJo3ZhBifEVb9ci8KJpiSoYP32bj4j6ojpsA8iwPik7DQHQdQre",
  "key7": "5oBqDG1cfd8cHFbSS3V2fvco6PnPKKLw5524ESgWc5FvWZV89rkJjdJB8RTEA8uLDQgtR5BLpS4tKEwY3srJ47d8",
  "key8": "29Gz3ifHyThGPs7kDY6xiF7HsQ3C2NYZumSQRQaXrHDh8E8b4kjNf4YgwRNrNd91pShmN6ZswxjiZEdHZiwfiPxp",
  "key9": "51P4dudPqGHNbBjc6r4Zz7jAskBmUs2dGQNNYSFHPKig6CntaeUGThWVPsFgn2R3WWQm7Fwd3Gxk16wzEtpAtZ35",
  "key10": "2f1wQEnMiqCeZuV3B4VkGt3mMA6t5Um3HMSRRpeVvesQ5YsBW6NHbCxHJ3gzXn8WoPqsxbBYH6yn4RAtHjPJ4J7R",
  "key11": "45rnU62SW2Rj6oqZ9GYguGHR88quenq9yerFX4BGoXcBHc2XjHQUQ3Vd5a76NUvnYzfGCGybDswiQobvNyk1cik7",
  "key12": "5oTvp9XTZDP7xA8eLPA1RccyK6pFtnQGFyXFgCQ2nXjqNpxEBcqgMbBcA7d9JfivbPyykmcjnSie8ppD2YWHMZEf",
  "key13": "stp28QsZwyKmKMvzoVojkuykqx6PXfWvWRAimCxjQPepqPZHizVDhvok4WdNaQfZxzWRLGhPvuFPzbRwGLYCcBr",
  "key14": "3gfQwvqW9cq4dsJGWSNvJYHaiqsLyWYJnHuJzb8WtTYzkggXXK81xa7BargHBoDu1m7CcPZBA4fYGyP7CE6kzzhy",
  "key15": "2V4ko74WmHcUmHtHoACqjALvSWrwtwxSVKffSWELHE8c3LeTBokC4U5wXBHkNq4K4kbZtyyiCjeFrkwjwHTzyfh8",
  "key16": "2NrgVp96z5udLL4Sc5g94aAsfrTHXFvnr3rQMU9Ehpew4tMhnWeqaLdi5yn2pGedm2pLaDPPqnX5okfH29tzp77q",
  "key17": "64fHjpMMvGZAjFA1MAauP3vTdRiGvyecZ71hASMLnXioSVY98JpKnWSxy3gWsMJcGM27rGqs7Gy5HRDHryFqqQd",
  "key18": "5modHAwjQwTdaHqFpfsRWiRWrdykk81S5YAZJQUsPJ2fh9RjC4JSxnrpSPpjL6XaJJVMyP8K5oB2r8536xgtPGHy",
  "key19": "c5px18HUeMB6EtNDvC8A8RoHsYc1dqPejPuBSUGCF7awbMx8KGBZdgukcgiVNWWDcdSuhDgfX8yXWUoWT37knGP",
  "key20": "2jjaJYxm9MWpNwNUYtzwNEtnJYU7oAuki4crvWnwkx7Bycbfv2mB45UZPoY3vxL98yYGp3SpwvFRDZWugMdp2uGT",
  "key21": "5DY2QCCg6chZK3hhyeQFQYrmECGebaDYB1Nu5Uj5h6cJ55oZFmWt6P6ZkPN6NMfXsyWg9CZ41eJo4MUB7GCph32s",
  "key22": "2Vgcc88gKV3q3wQCUktBVfUnYwAXP4WkJB1792LhoVEbghzDmpHLp58q9nYq6PGGdZQ7SimCQstcB2fqUUJLhrie",
  "key23": "4PLmYDTn9rQK2R3wcwytLZpzwrxcD7Qd1jB8XDgzvangJY5g49HHatTeuheQpStoZ6dYVMRRVGGufy5iFnEovWrE",
  "key24": "2BdCMYYjUan4LVtaMyBWjNnPhBwmsiV8K7XapYXdj5yuyY2D5Fv6oWCNbAiYwJq4ziQoCNe79XM93XUdFeLD9uXv",
  "key25": "5LHsPtv4VuNH7vDZFRszowNUoDzvSLPoydfo3REs8Bur6wdgSX6WuCRobNYk5uXDjua96cU5vgyh81kydheG6Pz4",
  "key26": "vQN71wBv3eA8BDen3jPhMrzKuCJbxEgNEwi1Rsqu6vnGguETmriQAzZg1EmWbQAscpwQ3D96twJBG9PvtzjMj97",
  "key27": "4pf7ePnTeXiiTdGbV4RpuneDvrE2B3YWLK1swxWtHftak8u2HC64U4ne44VzAWqqoNRxo94Yu87XHVTiemWsw2fU",
  "key28": "4FCBktsvKYZKKHisEQpYCFs6MSvMBayMi26HWrDirf7g8Z98sCCegr453JxF4yi3N42CYPSmwHbcJRnGaaqa4HFX",
  "key29": "4P8nozFRbg3Rwp9oHX5PQC97tm4y8PiVtcFd8nvdaFugTsH592XqZBfJudLqPgXWWrXQAaXXekTsscXiF8bVXm7r",
  "key30": "4e7Cp14Ya9XoCjeLizJahnQrWRREu25NyFAPKpJYiHkVyBSFmbkfkd2rvh5KvDzqa7StsEnKcjxdHCCTzMVEFMU7",
  "key31": "25RQcjgrgrKzFMy81DZPtdTTXovAJCykWCFHZ6TAiy1aZpeekWH4d8PYTmgYVC6tc9uF64Hwo3jmVfnLS7HXYZTQ",
  "key32": "29MpKqQTuDb13DwTos1gufrCTnbfJ9Zdx7zd3aPan6Mg6GPrRGePMhjRo7R7m1ZuKWrjX56n3rJwR1fsVmiU5jdC",
  "key33": "5xVAvzMfxpavi1DUXK4mH9NqxHsbkAxtQsJNd1LXk85vV51aANEK5D7smWWMFDueM8pmisev13yd2H9maSUW5E6H",
  "key34": "67Y4vQ3B5EP9h6gJSSVED12vtj7mzdQ4L3N1CBS1NYaiLdtshifRavvXsMRiA1Fkhdf77H1mf2kggKi7pJM6HNUp",
  "key35": "5fY3mgF6DyNqBAajx1otrATz4bvVAoXq3GHNNAnk5trMeBih1fm7teTrWdtRFhLNF3rhr3AMTAtzc5GuLvTanCQE",
  "key36": "2YtAHXe1sSugXmq1SVNUWLvExoqApiW6kx3gMZgqtUxsrdRdJjAhkj6ZaNn3PKXJBDcjPnWudY7cZPM1B1PpTbK7",
  "key37": "3nw6SWU7kYDgokHo4RwZbmXH8ARuE53fExC8WkWakUohBEAChp1FPxYL7pkHrHs7fgDc9Cs7PV9rxro2TfK48hm3",
  "key38": "2pCu8XJZibjQTfwJfdX7ji7hH5niaH7csin8sgXQGZJt4vLQsH3c5wm33EGHSFAxXPSH5VEjbvkgwJENs4TFAGA3",
  "key39": "53sLYcU2xX3RNxASqaBcuRWpraYs5mFfrVvrWiUCpdS42eC7XAH3Bi6nCMcxfxrw2p5R6agNsyvP5Km8kHWsE6u6",
  "key40": "5LrWiyB7N7AqyUApmXkE3RYHnbd41YGQemD92Q51G3mqVL98UyBAm23BzBCP3HxacsUhxF1biJPQwBDozHdqwCDM",
  "key41": "5dLaUaNXPKSgNKHCh2aMyXQYcWXpYtxC7efq5PdrXw2a1NJEcM56jRPt512Vh3hU7v12nUjPBysxtnqAsHnsPWyT",
  "key42": "5BpJxAMTEZc8mhCTG6ro77p5TskLrh2cADLsYQdjeqSf9BqfGvByr4VQ8Hs1iN1Aen3nhTSz2tiYWM47qfjGdKEg",
  "key43": "2qe1oeFUqcEA9RocYiHjquzXubamhKY9HnUdY7XMPfgvnSbWACCG5gUsEXZBYpiQkcu7kXDz74hRPxXGFJgpt12Q",
  "key44": "3tAbSHGko2WvhN8esBbsnW99kQRZ8J8L6SBtdybqq5bNc3KfJDGnxRbtPmb7GkQ8zqgeYfCTnKvNucdNWW6A4gDu",
  "key45": "3VSHZwZa4YnZMUAqR9vnhqreMHsoT2398Hotbce47W7AqGD1Z4kTXPtPF3hVmP5GxhM6jKSNTEXcKyLzmYR2AfPL"
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

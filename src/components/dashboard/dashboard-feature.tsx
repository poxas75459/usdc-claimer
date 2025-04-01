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
    "471KhyQNrPNBvECfUgZJV5CjM5BVvdasRfH2kJXAuKi5ywnxyNYNJMpFsmrprKiEmibdqFVQtitKwvcnPaFqdR6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kH31Rwg83AwbG11aFHBqxgi6TFrpZg5x6Ue5V4vCDJmVYMoN8eUTZj5PZxZborRn47Quyh2HfGsyRQrHFvX4xuV",
  "key1": "2vim2Vw9gdLJ4TEfKB4SMZG39bmNT7MJdxEMqSmym9RSP1H2tVyAD6tFFYqPHH4ZZMcqKXsjyVFubPZc4HAWTej",
  "key2": "5eCRFmFQ1n7o7Zn5f37pQ7nYSHHwob1GpzarvcVsGJGLHqgiEEmRawAc74cUfkxypW8Sjx1v2gQXgFycbLL1VyqG",
  "key3": "2CX9XDzhSP2V9ZxxQv1z6PbUCBoK3TsD9eXWN5T6QpaiBDwDaZwFmLjzB8FTwwKE9bAkJLrpkv4kwKXDUFHf3Swv",
  "key4": "5mnmXu1ZiJLNoZbZJEMLcfZHX9QUGLvrd865NxE5AbtuUmx2vMZTkXiC6EPAUfzCoqHW6nYRrMuvrcAcwxYAqDAK",
  "key5": "37sgfN5meB2CLw4s8TZFreci7zgW5wYPWTGjKHhUUs2AbSAcLnkf2a3uDzFEQXF9orToRA2PDuFoFUanrcVkeDj3",
  "key6": "5zdttkdGZxWR8qgXtDbKmofJ9oUKViLifTHU7gVCbZXNC8YgAcNdVEvCzgctinHQf7e1YtchFEA4ZggF1LaUiNbm",
  "key7": "2218S2vKGBoenAsphschEJx4HWE353BJiWgfDVGqr6dCChEvQV6SAtaiBoJJjJHbKKHCyibtXYh5oxmZqN75oHsE",
  "key8": "4m1ontQd6QoXDXxKzs1dk6faoKZ6tFk35vU1fHMXzgzTizZnENWN1G2c1jGb4JnnwtYTnCCivHydUB6q8J91hmUs",
  "key9": "XZVWpWFaKR5qTnrqmoybK78NhtQYusFwUWXarWhypjYGtNF1ygg51fERKNUb3ifNnZrZQDVp8ok3mnYWYi9hYnk",
  "key10": "3QKgV2DgqEuDdsUH7iNihFaMd1h6b7tKextu47iQYmKLUEPRNTPheo8AYfxMAVSe1VKV4tqN3PHqxhxRNdi5Ze1R",
  "key11": "4cr8D4FfqeCQzYhWcEwB1Qa3XoaFpezTqc45HEML7fhW3g3A7W6JgaV4EvtkWvjudMA13YxMXMZiCSvaeHdrehLx",
  "key12": "BRNmrSHq7KPk2fiN5tWWzwajsRrkZgCoCfKXNwMa9HiVMPyAHFsTx3KrYEXGFfd6LPFBjroRxG6BrCLH8o4gkNt",
  "key13": "5q11U1ETNHQa5epKt6giz9YqZkipd6K6Rc2L7dW2uSEeRFDzHQ7U82Veo8eomrHPjwF8LiC9KuFUfxiFbg7NwdV",
  "key14": "22ysPW1ciCwYqU3wmLwciQhCCeuayq1M3AoxLU1tPCoP8yPZmngwuCC7zzCxsEqSRSwFM8YCDF7cE5bq9oN2qApw",
  "key15": "4Qfxw5etZctKcDN3wYtuCpg4yGanbKFJLBr2CEabyDtULKzvpPZfJ5CtgRkasDRVJ1ajg2qzi68XpQteqi6aqRtD",
  "key16": "5K3zRmjWRD2TDb4AUK4VbcK5TQMa2XTUmHxyatWAss4Cd7n1hme37LGNT4do5pKiyp5kjSb1NwXizhvoNpCRnoxL",
  "key17": "Zx9T7gDGFVZb2a8sYi9dPUWaMLv5TJoATtu1yJZPeyzXm4DjHnuXZMt1wwhTXmcgF86gGi2AxffMme1XPzHXVJf",
  "key18": "dZMEbnkXQ3J7MdedLBziv1DYr7Qn2FoagFqFEHgm9zrY2GfnRvnb6vnGE7cnHNBBfSBfsR5EpdTeyjAcGGMUNcj",
  "key19": "4kpjnjeAJCTv7h7XGGQYnSbNuC2ykwyqGZe6Dg4yEoSua89J1D4DrWLwMPxUTA7enS6tcvGciYLNQjdYbrNouqWS",
  "key20": "55FGx776yxvBHvou2QXQoxzaMFRtSbYVAK4cqzL1BLnxeBcRwuQEirTSMdKUxEFAiyU7utmNwRYYHrK6U2QNrJZN",
  "key21": "3GDpQYNbUyLmZSAqKiSsWeyHcJcp7cJYkU4ndjntivo8cyZLcq1EuhsJ3H4zZSe2i4jEfiWGPKJZfhfFAv35Kd7C",
  "key22": "9ddzyJQqYbBNZQJTpxYWK5Uy1EbPqNfbmrjWJWWmtGasp54iekh1jV5gsVaBfx7Lz6GhzfEV2CXfrKhoBRRhcdD",
  "key23": "3aPrpCcorzYBLLE7dgdxnhsvj26qT4jwYZpiKHeZm3vE8kJrphAGPdmpmw98EbVPCMxCbwzg58pZLV16dEAHfg3w",
  "key24": "2NJSsQX6aYWDKUTxXqz16VTLPo8fnNBpoFbLFGBaECt6whMxTSxFv1QN9vAXk2afVZ9E1zTeFD7mjzC18zz3F67j",
  "key25": "3rZpmtbdyT9che5Z6MTEwrieUgkQ1QiQBrxKNrpHBTocBjLojkdD3cuLcYvxgdWMCuB5Lc5JsfXE9uG6jWkrioT7",
  "key26": "2mb7xfUzRofFZmBmWcVEXNJX1vGPCs4wv9brwSEWYtxykhSQCRtLtTqbykemujmtPBULK9bJMzCWYkakrGvPCPH4",
  "key27": "4oGx6MKS9u75Z6r3V7LtNhJHjkMEJBcEBNPSh8k3qu3xFd4KDTPLME7GXGfmBFxYMGWpfQwrCCXRg1nz5bxZY3DY",
  "key28": "2kivmSuaXP29E4ZwVXJxkr1B7NqPU4HZpbsYETxYaWvSLgj9k5KPAwSR7G6TvJv4KbNeVyWLMsUPqS5hGYwshhS6",
  "key29": "3KkuxWTkDMpKtRv5ZgBQUgnyAWkfTHfovfVPKPtskPuvRQFEEaiJLUbMCXSurA2W7c5NKpu1sg2vinTieBrGbZa5",
  "key30": "ZXM54AYchMTZ4yifRZgRx5EHZFPgRZCVqh67vdrCqKMVQgKhLSFH1dD9e8dHUZg1qaURFjQ4Ujj6ygA2DExib4F",
  "key31": "u1fTGRt5H4qg5d2EEwbVtnALKzrdzPhCCcdjQGgUAYnNYsKVFdThuPVJEUri5BqHZrX2SmxCoUHLVeRYP1ij4tY",
  "key32": "4YuAGhMhHuhcQM8qBFnXKdAqZNCKJJbTb4SRZHWPRxtjnTKoTjHr7rZENxUoi3umYzZwf6Vv4CtriuSerMMt28vx",
  "key33": "4WB33ibVtazXJ4C84EQBkMAAY9gHhHQZ7fRCousuUYfiLJEcpBucLedSAZ2PWGyXr49gtDdKXcNxV1XEdaozFhqF",
  "key34": "2NNkW6MYaLuRoZrodyJLU4N2roQAXigtWbG6aFro9HUykg22kyAeXb11zngzqRCKrmvK13sNwooSawb7sUMn4djs",
  "key35": "2z1rz9zCrN4mc5xcib37pugRBwq7AxLCDHPjiBp3yU1yhKozau31vcaLeywUpQdHjeL5byTDq8u9pLFUV165dJfz"
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

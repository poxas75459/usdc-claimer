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
    "3DoAcNRHPyx2FNoeFnKnvXAF9TWLMi9ykGi5E6BkPdkhA1VtAzHZDeuWvuor6WU2ipxLUZYSCbiS1z3DKUDpsjwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2JepWp3ERSXBbGpnAMSwzqyQ7CMLRFCPyBYkxj4HQNgkXFcTgH65fiqPiGtQrjKarnTsEK3PSdrL4VjTe8WpK2",
  "key1": "N5ji823vyRtntZT85ENa4VGKGqyzgsR1b86C64cXuEPNBFA5afUeTfLNrNZxMLjf3yWRWFbQ1mxxh8uQHPALPHY",
  "key2": "5Fr64iqu9NNxPFGnGAWoDwL7iBMAEQxWHA3bSj5MhowPevN53vGjoPKb6viyzeWpsjqhNiG3P7LbB3aUWNU8Wzyy",
  "key3": "NawkGfRJiQ72PBktcCu9A7CzmnH3Q2T4Jewx8oSXn5DJd4HHUZvnjBgAqnoVQBovZDmnZxZbP6UZKFZTX8EQUhy",
  "key4": "oSmiGkuueKY9JPdFonyVYVecNo1ipHUdvKSx1VMEcMrkEvrXWwyeeTy8g3HCyUNigwK6fsggnVuXzwbAhSE1Aq2",
  "key5": "3zzKqJVEhjrDsTAyiHnG14NMBsTs479EurDzAVKvwQj3K53CgcoBrpExdaNLYb337Uv6yEiZUkbE7c349qsuWKxo",
  "key6": "KFByUt7TcH9uJZMwQUZwb9HS7pmMgFGWsXSu1kiNjp9eDmmj44RZYdRnYDF6gsn5VvZBv3ap4SWjFYgGjcDihPx",
  "key7": "2bPe3xDbrKzubhZGoqW8M5gkR2cFtqRhtkk9KZPqiSiPMXsSuKRoXjYBwwLVaSUBGQsVCoiumGauFoew6qZ8FBEa",
  "key8": "21BBsymc1kWeTR36RAAMH5jsN5ooxVecnXZBW7rvozhFPSnVi1oenhe27sKMPUR1ZAVm6D91npgG6Az3bBtUQJRE",
  "key9": "2wA4H94gZj5YbjTnBpNk1NXB6qf4zpMfirVNSNowXNaeUMwtmLawNbpcDme3YtevecBzEYtEd82Mz8UFwnoMwape",
  "key10": "4hJ9wj8whSNTXisNyzb41PpjEYFrk8bJBzUWq7skFpbJfFbDSM2MSB7Eut58UgLhqxa3bEFSVMJasE8kc9fLjSce",
  "key11": "2io14oWZbP6wsWjXaxoBAHpcuVNY4fGNcR4uEvtGFWT3VVJWuy4UsimtSiTAzVUZYR56RQFeW4symTomXWm6Xnvf",
  "key12": "4Fbn7EgzyNXhDisq35XDbMava4AoAvSruegd6oGSjyDeEHysJXGgcDtAKzrhvzxVcEdDPhPYy7DjLzgvz9UXPkuQ",
  "key13": "5CXkwBtjsUocQ8rh5THpPiiapBYzYTm7B6ZG768mM97439Niot72JPJPBit6EFjDoJcqNJYwWEzWuuS5QYi6Sbqs",
  "key14": "2JGEaJUDYzAGaMybdEB6g8TcaivocU5SNc5CBwseX2ehNboa1ZwqjXsTXzxNaQ9ccvkjn86SvQ6uf9F942iiYxrK",
  "key15": "5EZfqJktTf9yqTPtjzAxTyyHw5hfbrW6cZJ2WuCrVxoLDokRTKQNVfAjKzcKx8APupDSTEhd8osSX6snsREZtseY",
  "key16": "2BK6AbePNE1WqYVwk7sXyb6hjoAVML3J29Nfuf18YhwXDsjmKGNREPrVbuFfagwcEGz13v35TfiMePK6iDGhcXCS",
  "key17": "D5RgBcwcHVifPEx1NzUV3nA3kft9s929YPX9k8aocdc1ZehmZXFYZUkZYJEBVJhw4Fismd3LoLUMh3BRAS777Kc",
  "key18": "4RmYESygGFfftGZo96uaTXA8oeYpPT5oExffJMRGfGj7QJafFHwtLFkRXM9A2Q9CGZzWQuFWb6rpmyVgJvVBzoxN",
  "key19": "57kUntZyhns7qxroUgJknrvBCBktugMuSAPZdFtL9hSmAbeX2ZsxZHWQ8LzPCEe5rdpHixXWK9ZBStqBEbrhacLS",
  "key20": "5EAz7di3n4pCz18pmxQZtzdAuFtbR3WiPmLEzQSerKr2N9ZgfMAjDrD7YDm6BpwQpvNSm213ityL9craB1hS5oNz",
  "key21": "S2xZhZcU9uc7mcuckaitgwToWy69EDWByXzbTshmJ2TRBCzt2JQDSaveHydCw92seXo2C6w1oDVsE5DNRHWVMMj",
  "key22": "2yaJjcWzP63BUjV417R6NyUErt4aX4z8YuaErRVDQqthub8LrfPWoL5c5uBy2mqAWk8XxdLEzEVz3qNx2GHW6mfY",
  "key23": "2QrvjjB3yJUKp9uXAkcxuKnYuDcqowbQNBGbimHRWHbPL7Wcx4vYp3GYtBQtfbmv3e2q1jjwT2B8n5pNszgeuoaw",
  "key24": "3cyAKmCqrBjXKkrkAR1CsguFnnee1FGFvSj6TGHWuaeVob4NcnhNSwh8po4qGx6tC2re7PTpcuie2Er8vkJmYmSh",
  "key25": "3cXCDCvfPEsLuL1xGqSExYCuVr2cBwSnw8xsk5Ju4o46nu2S5u3F7EDmTG6ByDt48fTpRjV7y6qdetgZ8k7PyXSJ",
  "key26": "5nCiGNncPpQJSrFJ4JXjsEDZVNbGTNeKcXjxU8NyHjUGKFBYyF5YBWcwrPJ3HdgfX4NSE76hS75iSSA8XcDZaN43",
  "key27": "3MuL7eRt5o8rNfRriMgLSteihFiqAGduueGsLxXaKjX3w8e6XveYW8m8jia7yxUSM2zDkYuQJMTiB2s56W5ChGfa",
  "key28": "5xAiFCpzWxc8UewFwCm1S2ASnzGNBG5qnmMWGmKcuPKEsmzNUm6T44Xnzj8xUFMn99xSpvD8sfRQL2HeW7G9htX4",
  "key29": "24kgzRgdzvKP9c2Uk3A8XrqduS62Xn7QYcH2jeDLaNddkwVP8QNavHZBurfKHRp5V4S7P4YCN2PBfJuLGFcQMJev",
  "key30": "45SdoYw1bpD2uH937JbucXTxXxSVWu7xp3BfjG9mCiPxhskChqB2eFMUtnQsjQDURopy6atSPhBVrnxusvEeXfdc",
  "key31": "5ymY299GNEtVUNV2RYpKBtwVLm6sYZTSt6LMA5uL5ChAcCNHhun27CQWUQfBjSfZRscyeHwRf3PMcFNZVhFmcx2k",
  "key32": "3zhkgB6wv8Ru4BZQSqGKifbY6AZDBqUWiPN6RMeYZWWooWzx2nHPsy6qK9LFwdxVk8K7UBFaB89m6fYY1ErSrSZM",
  "key33": "2xcb3c2DGKVrhMHDasyApLfaVmuekcN9Lr9hjZ1sgYSWhTEQskJKfU282utbBkj3d8dgJA4gGgnFWdP2m8CTPyQq",
  "key34": "44HSX5VmJHbvT2R7NFYuDe6LyXqpRoXNznJ4NCfkbBnemE4d7bqAt9weuXDDoxQkRSNGBZ8GcnBZAKwh2yLyEb5w",
  "key35": "4eQoehMiK1Eh57Q8hcYJDwt7wyzsjQmEmw4SoZucASDpigMEEbJ1dYcVWARsvG6VEcE4AAUp3sZ6dvjTzVEkE8Eg",
  "key36": "cW6oYAaTnzPRGGabDs7YYXCX9xG2jqpPFv1d8H47QM4CXKViDBGEPDV3jab49iWFy97rTwbpbCNpEFp9kf84UbJ",
  "key37": "2x1Q7PTJ9up7cpoZFbDntPQVanidv6gMUVUtxFxQSGk6ufCD7FGxGqGmtYQLiSvE28g5c5z5Nc2WiM2PnuSxR8Jx",
  "key38": "47oav76ergpNrvwQfizbK2qKEtk2YZoRycXAgmRtoPukNgjT7Te8LUPRSCNwtXAhQVKJEJcnEHZDUEqyvRLwax1i",
  "key39": "2BWFxL1nAJ3Hj6ykJS2gxdom8tkzULWAAwxARzh1fMa1anbQt3mUM5kdTWSeGUs5ZPtxaeUdiuyDeT2cmZW4XWSE",
  "key40": "XvWGwh6bjpJ2mSYaGT19rpn7wVVsF7r699ra1bqAAwu9Feaa7NN7YYQ1Ym5ptjS6jAWRzgsGAqebUwPxMCZ8L3m",
  "key41": "4shpq5TfrMEuudiRDnD2EaRzuA4pp5J6UQPE57CkanN8EMNaXVas457nJg8iWYZJVqse4ZsNdKdACst1nQyG2jDP",
  "key42": "5UxxaR7KJgSbMT4jeC2oUCupGyksjUmXkfkQitCpQY5r8mjRyyTG4TzLLB4GFNvTzr5biMJ2N3bVP5mUrKuhpQPD",
  "key43": "5NodePuNo4fLa3StuW2wAGLhN1dVSbfr7hh9NxK3RHFc9KoEtn56b7Wmxh4QxzmiyxrdKTMaKa1Zo8MWdwYuuzVU",
  "key44": "2ct88FxE6kJC9mvGyJn8KaERfNZ3qTBFvmMsz5srpoZ5knejdHxAkRorpfi9nQhxMWqj15PuYinBiQQVRTZjnj1M",
  "key45": "2LEYzuiWZN2TbTux2t99kqkpArShhEN4uQ3eFGnR4J6DWmmqdNonZa5TkpNXztr8judDnoge2jnYkafuwCjHH7AH",
  "key46": "2VCvqj8uJsMtW3cx7tx7fXzG96fwdtgcyrG1u7neVzB38ahmvEkCL8pgvByejw9uQdhPpy9TgzVpzHMhVCGgYDhL",
  "key47": "81kJXfi8ueWVkxFvpfA4vWE4NUA7sNvPrZXn2bkMzSF7BjprKUqR5qrmDbjRKjxnXSDsiMuJouL9d5a4QG1WWRJ",
  "key48": "riUhdRPBQCuKxbVwdgyeF7mvbMUgsV5AztJBXzsN5faFiQMwJaGtmTFfDFUB6nR9FUpCH99owJC6e6a7fJiuCnw",
  "key49": "4u8TYq3iQzrxg3QrCqgQtihrtWNwNoBseWmjG5u2sY7PBwAEqhZUi7tqFJGHgHA5C3XWXUWwDoe35NnqzWgj7VoF"
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

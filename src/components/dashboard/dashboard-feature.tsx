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
    "3FSfqbUJmYG4BeHoyT4C9jPinqp8aCWMn3FEXvDeb34zNQciQtV45fCPB9YRnae3CMw9sMr2F8MiKis79KBdqn5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZFoZ7xEGqe75Q6oNo8kNRA6hTdgq1xJAvyQJqAdR2t5QZwt9idJVNV2bJbMPqfMQV9ADaK2A6A1toZPGtCoMrE",
  "key1": "3FxWe9toAK2vtXkNNfyd3zhTSmqtojfAs3jVJM7nL3i22gZnGYMHkmWzpunrhQvp3DLaCvnBGT4wiYaa14LSQiiK",
  "key2": "5LTR5xJKMmtRa3ehJHGHQWUP3RwtfiT72m1Yru2sZayBybnZnGCtRJNYSdjBe3WvQ6sEeh48DbHTvL522gdEPy9K",
  "key3": "5sChyU8KKhgbszhi1b3gDUUfaV44fxWXKAdnDY3BHAbAj2DJChis4KZncs2yARUfA9fxcgdnP3eKWXtmygUmREZn",
  "key4": "4CatfCJEnLpPmDvxQVpzBYHHu2mjCvPfuAu8mm8qMXRMcDzzcRnwjTd7kLXfo7TM96sifdDvgGn3HthrSMGCw17r",
  "key5": "2LrQwsXL1kH2xBd4Dzz2zMKUjrnwEwiSkubyw3yVqk149XHK7trKVgRB2P3PQwiPfsJEV3EuhDu2HNn8b3U9o7Zz",
  "key6": "63akDBZmnG5YMH6u4nL6JidzGLVuzgm8v7ajtzSQkRKvZ7YRGpRVYtXkNcFNcwt9aNKZ9osYgaZs8UcPBXYJwtf9",
  "key7": "5YcvxLAupXjwQ7be5JEWzBDJDPu1x7TpGPoBwNFaHkfG5JSkkcZkU6FgufdK4feKXFAeFYedhGMsaTUjsnZVAcFm",
  "key8": "55Sa2rTmtQhxqAw7TRbdSf3qtAesoreHm6xMG6cbhN6cgYrEhf7dyDx35gYjq3dUEv9zp1DP7VbJES5VP4e4obpH",
  "key9": "3rXtPF13E6baPZsWEBwEGP6sURxDgGmKn8HbXmUA5CxyP5kGrNPuK4DcMwyLAS7sJNXz5K8A1bgyg5zWPYPPiPjn",
  "key10": "3gFkvpu4u9W6NHZe1Drn8BqW4ZqqieyZeuBbYGYpiVQZWDT2Cr7U8ACyapePSF2ZoBrc4QAcWTE61hiLnwkLFXCz",
  "key11": "2FJAtjEeSRTxnjNCRuBvJDeGYkfj3Fs1bG8a9afH2sXFXUA6Y4VD6CtPccZ8deMMXRnGbqarSEPg3eymX16eAvXG",
  "key12": "4GV36vEymuhZY6fiXnc8tHPfNkZ97jYabVya324BH689vgsweZ78cLeVRdxktQJpP31aZYHTmsM3VPwobrNjHnyg",
  "key13": "5hrogsotZHS4FM8UL5CNanMgU88BNomUC1guvdYwUiubMpP4t4rjWN9xsPGmHzxNQijG349UnMdvUhZbVGRA2mWs",
  "key14": "hbEhTQV47g11t1K35TJKoJB4gJGWeF5cBPUVFP6saWeqKRt6sejv9pX2RLQ6JB99DfBcK9osdGxw3aQRTfdXpvw",
  "key15": "3NRUJgmPDjM6qD7V971ca6EmZoyY3k55DEKsTyMWJua3zJFvgFeDdMUnAvA5gwpztCuXNwpUE8LSCm9ZEQa4DV2W",
  "key16": "2Ug751VNfPdzUMVYFurvbciaARGdvFGcAZn8brsKArVGqP8uJREHuXvvwdZbNqvb3C6Ur3G8cAyUpAG4WkE1wcKW",
  "key17": "3VtogdV3PJDTdJiKWoHGe3PBXMSSotdBdBK2LbA3oLW8gCsoGtc9cB8Avvq8W3pucyksBMaarXb19MQSgauAysar",
  "key18": "Ex1vFEDswm1hAfzbcLt5heAxLKAwL8u8RjWyDsZbfmgCtXRkbBG3cLZJohyJSqL3Yhi1SKTgDJE7kmAwKzDvQuK",
  "key19": "4W3tDfbWad5AHizZuPv15aYR7KSNPr2ucYDd6Zs7Uizt6iVrpVtX5wvUAPis9vmbM8MyMkQmz9GcsXFjqWvqCzEi",
  "key20": "2MLkn6xdHxjtWrk7MWHmHfEfRrKywR4aDHggrA1kB5AzLxaTtWEvs3CD1aRREpeBXEbJnirDa1pMAxvni432RbWn",
  "key21": "3kPbMPNkU2HTbaqdtHLkrYa7oziLacLqxudqDuuNBJ9Be3fD4gnvVf45Ve5aLUw2mekPwAET1XoV5F8Cm2x1hR8N",
  "key22": "4124EeJr9LM8u8Ga9BuJaMt2KdBxwyWMJTznkVJnU6gSbtquPPpPeq3vudCCXHVNCU4JVZGnuVErpxnikPSy6JCq",
  "key23": "5xy9syBBAzMmPWriBerY9sTBkZ22z5Jx8yB3LB3vMqSaUdh3yCq3sKPirEx13HECLS9xE1H3Mes6NTfs6x8z7PQE",
  "key24": "2xw9KxigwNzr38kru5bchm29Qsqn9JkVJxJJC5cPNU4trSotdjsDddejseachDVo8NsAmsABkrUDdibTFFkwaavB",
  "key25": "4TCHDAWShxUww2nNFWjfFoDj2JpeJVCEyLucTYuCFSzbYD8UoiWDhHwFnYyrF5dEh6pN5zhXA869WfdCzJCetKGs",
  "key26": "3SArR39MAhpwBauSGC1evTCtkDmCj4sHRqueyL774zcyqbYCsojcuyu7E16RmoqHFqoL7YcQFsXviA8Fsj5LngLM",
  "key27": "DXFftUy6FeFxxuTfq4ng1JVb37NjjEcnxCFGAjMWbtYqAepL1kCgP1xmEpqmFQNYHCXUGBF3oFzrShBAbkN1GJm",
  "key28": "4Xmynn9xKV6qEWQ7PpyJ2KRikPe85CBd2EBjW8aTM2VZpfEaWf9PnQHHwDERbgLdJr9moTaj54MGWdjTLtAkmTrb",
  "key29": "QN1xgL7tZSZhXngDRN7nqTS65V8Hp98RbApAFNSwYnG3LocsFeeJFGeH8G5fz3dGpWrAJGn5uxEAP753wtKSJKR",
  "key30": "emWcypv4VtfsAH1hPqnZNxKegKCX3WbckDNBdrTcdNkAa7pGESX9i23vyrqTUiWukYFbzwKS1RfJUmjdCddWBro",
  "key31": "5ErH5XFn3qdaHgreGTsDjD88JSRDyBoLeKXDvJxQE7tnbC44kHUjMpcgf8aZUy4Vxv1KbgR4sJQD93L8YwsmLxYZ",
  "key32": "KqC4BW7XSYL2GBo17kA2LWPyaxCwz1jGQYcNfNqCb1LvncsFq75hUJGgYRfJc14HLweM7CjQQ2RsfNjvbR6GqiX",
  "key33": "4oYAdvvFDr2W2MHUsE3X78AntWWMQNZz6z4jbdLisF6gWAU86PCBapkQvBpYeGzucyHapcZf6wTPp8p2AFruRJRd",
  "key34": "5Gr3KdF7NQdyCuLDTcPTGZ6GPS3AUSCUBLpXaAeRsjBMDgy9kyMDHqFc3UFA2XgC38d7JsvyRPusrDpbwEhCvhpr",
  "key35": "2HVqhxTZjx8Scav4zuFkDE77262uMomsxcASinYYDsFhEKt9VGnXxUkiXL8TQvunsEfnvic7hU3BUJRP1RXeCSyY",
  "key36": "2mDbdgWaoX4cWhHcTv3pMr6CotRJABS2nC2nPG9CnNNFEEDFkqrdbR3CpQXfVN2KyEvRmDxP36PfckPZdX1zuDed",
  "key37": "2Au88UUzs3H3Kz4pxBrT5YBXdZmXJTU3rKehWxTwE8tHKdyQsCb3t752SFMHiNiSeLGazTYKQrGYyTXfqQRTyaHB",
  "key38": "YeKtFrcztYDk26WW1Hrm3vQ5iQWTax1mPwfgPecLJw7aPgt7yR9ecnkpQouqnoAnKG3fJm2tGkZmcFx2G5f7Hv1",
  "key39": "gfN6c6NEpKH1b9kyAqQ1wmRm4G8fpQiB4x3M6PdhujtyBaxkB5fRC4b46kbQuqp7ZXuDF97wh9vQqyJyesM2rTN",
  "key40": "4eXXfNsJcLcBbwfk2d2zq2Wc3drA87Z1mCgKRbzkpabwaNaNiMx4onMwP6efWRDoRA46u61zDmwzyS7pyuXeeeJn",
  "key41": "4WgvCxRL3X6H8P1C3RPqZ3rnjcYvFmhVnBmYtMzqTfWtWX8L7K84K3rZUCDCo3vY79ottwjzmwJGN3VsBXxM8Wvi",
  "key42": "2upjU2knmmw51Fht7YpKSiiDRc3PueTXLyirJHtoYL9uesyVgKf3gWUFDuLHUUcCRaWdQEQLw9sWwFK9k652HASX",
  "key43": "3pVUzf6qpd1hQB1ELThdxbv7G32Dsp5UxTv73TsLazFHCzXJrUTxqDFL6N9m9MVqMMUW3z6mZ6fEi4TyxKAJgist",
  "key44": "uD2pxAbDve437S81eK3GX79ybivL8Dno4RdsfrdMxHhxudRBscMNFnJBE7fC9iHDeFNhfL4eXVc3xXHKKfJHZcF",
  "key45": "29wXg52yLRfgxRN4hLkHWrkJnEynRBV1xB7qKVQ4A1kojCwvDqHREqEcyNNytZrEevkFzMZKyurjXYMQhgYFsWm8"
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

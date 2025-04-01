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
    "3YEfHruHQZe5kxz5rs64dKrj5Hnt6BAT24J92X5yFSyD21BUAjKqjTxbXg1PoMcmT65nmSKTeaUAf9vE5Y7MgQsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "278yh2VsLyKpApXzXQ7WECG6qRS6JsLQwgSjbDEFefKdqceBCRZNJCDEEuqYvDjdigwcfpDpCk7ZTZrD6tqmWc5G",
  "key1": "4QEw7MaBUhuVf1NvemSJUS5MEz9BdxiiynNUNsSC2fxAWQqLeF9qEDyTPKksVvqcL69dFFVyNpiHVTsGj77gC6iA",
  "key2": "2iqZ1R4yjDWu7YAzGH4thrpCFdW3uCFasyCy8BA6YuRoLgSMCVDfmfMHifcr9bpRVDqHZjR7Re5TiZYBQbbabAXW",
  "key3": "4kFoQcMuJUuFbozNVT9Qpqb44Rgzo82svG5Y2ZDcWtC4cayYA7TMoeW17o6anZw33zc9o8aeoCfwp2CwsfTEXbPJ",
  "key4": "na4K7L8rLoT42qqLLVsCDGu7W8fdtzR7tws8GGQBCFs67nUXaQ16m765Arikr3rw5rg3whPqrMQT5FwyyX1Ciyf",
  "key5": "67D1fGZXxWw3afuWDMVimmjvNRC47hDTRAmwoKt9yghdsjPMvzgE6BNpvC5zBUk8ARXBK4ZuB5NWPoustiADaJv8",
  "key6": "4rZgy6WxwzSQ11vmbFUBhrVg2JXqckqKKAdhzF1kPRPR7pYhMRDMRXHrpiYnmQBY4YVD9nZjhdFBGxevciBXrAqo",
  "key7": "43Et8khNfGoLT9xoZsKtrJF87rtBcy6fQyoTyKfpE2b8GUbiArpLzwAR65kUUdU8eVHUe7aSXbjGwe14ZXQvK2R6",
  "key8": "4gqM1C7j2n7xk1wFHwedVYnw4mJpmQLVULyWFHPECZ9bxn1P8mcJDXYov4VytZxJHAgoeyH4EctzZGcf3WDVsAbd",
  "key9": "5DFkLpG7wREnUBMwpx8Aedt8kX7i65CtCXorPx27hJDpBRbxGDoLycpcKGrjChZzdu79abWAQ1Fvw4QLsJghRwBH",
  "key10": "4uuXRPntbJ5qsDZrH77ZvHRx1DaciC4k6NTYDkJtzPKMdK649gVfjk3Gc9qasaGU8JEtahzdogGvZ2RCHN3bavwc",
  "key11": "38AusLP2Vdvy6TFLwRHBzF6ke5NUFfYoBVCkZqPyar7Rhv3obn4HuyGnotKXdADDvUZyJwP2oCoNL6r6Y1uRnQSH",
  "key12": "Ndvfd2HTwFdCwYsUMJ5YPpiwRVbuWgCFs7nU5vgKwpK77URKMCC1BTD8QtiWD2D4ZeiNoXdGSnxjhZyRCYLy1LV",
  "key13": "3GwtFmcfUyi4xrrqkFrto6VhdLEPEvQvA2BQoPddjoKzTUtaz56j5ERszqVnVSSWhRjdkKYTBsMMGeeRygduPcJE",
  "key14": "2nHi9WHxuhEdCCihFKirm1ATQGfsZVpjWVgP1KKBYg4gJFpaBtPGsMbUELCwFbRR7hyZi2ob7oGhDZx4BEvrUCyi",
  "key15": "VttpswgPLByBvWUh4qmeAxza98qitoAcDMrhCuDcX859cQYXxWrcCy1J71nsZ81Qc58WrCwUfGRY5fcXdEDvddR",
  "key16": "YCXcJ7ESoQN2azgzuBToniTGatTu9RzYwdB8Ez6rNTdke34nBWE8DF1yTuGb64ikMQo4gqrDWWaJ7o6AADTm2VV",
  "key17": "665X2ToaJXWmvGaE44wkKsK7qpjdhmyqdkvhnzLvGzyUyjSViiAU5saJdVBZjstvs8yRHEne5VepM8mawDVrA3Ri",
  "key18": "2QMuf7cHcLPXi7CaSwWzx9YzMff16NeSNPof3tPAfetwhFfiBTcpJntwVXV7pCgfrWsYN1cenhv2TNVpAfhPjtKz",
  "key19": "6tut9szMAVntRErknQW1b6GPcy3dmcV2azqiVatLA2HRHUgpxYHQGec2ZDTeMGLnJQ8HVzXtpYECRqtxZ85RUo2",
  "key20": "jCKLmD3Hohe71GQ1CPJedPLrXhA9SqwuXesi2TxW1VuSEhs3yMASv9AShj3Tmr1gwMkc29wbKRqUvjKGxskjEPW",
  "key21": "284VVMjPeiX999pTFK1eE7XXiRwY7ejLYaweYP93omDho1zjX4b2khJBpzP3S4tKXRvGKh61narStPYFA6HMhSKt",
  "key22": "4L3kRPpPGCAe1Cb2ZpUKco7gW8arUiWQZy4oF7Z5eZBTuuBFmJQ2UnvcMSxwNARTqqynQkoe1MkzimPabhGXfnSN",
  "key23": "4wH8beqpiZfHSxRMz4czR8asEh3mftyp1XdtPWxwDxD5HrnZyUdjA9R26aLbrAcvwzMo4SVF9NSiNirD8avrHuot",
  "key24": "2chrod53uqjkPsaxMbjVU9CpmCJxHxgTsHyqm77NkNM9wAkt8HnAWYGXYVz6kgV7fXHsPfE7aR1LDxoWCiPPgjm2",
  "key25": "2Gdy29te2d87PfHvPDZ1PBcYyAvVn9VnEjGM716vYr5iKKgTmc8EQS5NtwR8ucQ1ndRqJNF2H34ZeCbg7a2An7rH",
  "key26": "5uLFMFT7PWqgzecw9TmGZKziQqS5rNizsEygVoMsAqYcNeKz1ADGZ9WZ7E47BABJZ9whanpzCL4gjWWvfvNd5gsw",
  "key27": "3t9voLedMxW1rhkB3JDoWoQrJXrKiS2LAbTA2UJYGEgrjEumdujbm7GvxzEGFRtE71PxvqLJSdhLCkVgL4hFyc9e",
  "key28": "2c6ymEcUhmhjmAy7LDTy4doZVrxp8YExkhQZRoiHDYe1138aT3dXbHF2JYwa4S9nhFC9dcLfHA1VisqPF7C2h7C5",
  "key29": "4W4mqTNSRV1oAPe4G1VRbdLvMgz1ptuP7m93YDVFU1o7z5jkKVRkkdjr212LetBcMjCmADGkjdNQX31T1vSVD6Un",
  "key30": "5GR9MaU87ngV8oQuGhnTvmXuQSSs14hPk1hRbYFx7x2drVCtKDa1SCtBi4qvMHCbqRWvmJ6TH5Za5mGEobFvtyt1",
  "key31": "vw7AqELDu6tLqdPA6L2M6KENPmFFpHVst9xTKCVvpUTb42waz66uJXP3ZSYBpDowEMqZMQdfAEJx12QfFVs3KTR",
  "key32": "4CRQqCBmEQDzV7t8tGMHRCLrRLk7vVe9a5HDeB1APQZLMBSAKCwg9UXLU8Kd36AjiNpH1xcs8jHqmZquavQau9Nh",
  "key33": "8Uqxy8hndToDPePJkYmR5bGuLdFYc64kHSeHTgEixQyJCq8g4dzH3db7GBmJNtGkiavgSeSowUDzXbcX7qaaDAk",
  "key34": "3vkAXVf4jCwpUZNVfA1tdF54MocCDDyfFRJ6QDsESfY4sPKBzbZCB88jGSMM86gGoMeqYhWHbNnV9dkmPBVoVN4f",
  "key35": "4CUSYBCf8xDY87YJ14DsvSxds2t7woNiaaGLNmgVJHFNvX9FeFoF4qXXRnhN4FvaQb64fQYqypTzmrNeJgHQeEqy",
  "key36": "48ZQb2vAeLfBqAFaHGkUYqqc3k8ruyuraepqbYd4GynXw2CLn98SZjQcRiLeEuNgmZHsfaxjjEpxQ3kudwRevhki",
  "key37": "BxkcyDMWmiJWJxzm1KDNfGHvHs6HEtY4CGSbk2PxfuYZXQ8cKcsQ7pLvgYyuDLwjH44fiYEz8BfEiF45nNpyfNE",
  "key38": "62SCRmKvX1fSpQcayKzynFpY6GH8EY4jpQTwcFeWqSwCZa8MwEgrwvpCrKXiuUhikyCPSePHpiqE3VCtRRt6JzwR",
  "key39": "37KXWa68r8nJwcrwRSu6c7nXGL8mhdAp1c8FMnLdpFpT12hzAjoWEaHJzLnLM7Rx6WUJU2kHKDHjrXqVgsA59DP5",
  "key40": "Re8mojESr4fmf3Hb5Tdh96MjADTnSqo1rnYrnyZxM5bawASWzMdBQz7HemmUutvag8MW14eP75rE6fAGq8H6pJE",
  "key41": "4ni28L5mk88Uns9z2ekD72LV2qpAGfGGUGp3HbW5Fr6iYWpnVrdeYN7bcRw56dEaqkTBk8FvyZ9go3B6Bvnq3Fzx",
  "key42": "4CJhAFu4zNb2LtN4SZWEjZip1NjtXLWbsFkJYB75Mw3zhrNxZLwdWisq9SHgwXgik6mfF1zWCYzPUH7iskfY3kyA",
  "key43": "47D8N2iwLqCaZPoGFKfx1ERncVGtHbVvrzd4CRFhD5bQVbHi166VeKR5bbuFRvv7EABHj2SB8CCjP3CE5tJPNb83",
  "key44": "piW5ycLE2hT1bGSB3ZH1LVXHHNHYwp3MwffjMA6TF9xc7ZkvaZmnztRLhLR9xS1FBqswng6yPJ2YMoLx1JebQgC",
  "key45": "5VbKhQ2AVWJkyaeLvouuuFYAJ22zCUsh4yoJuFx7GwZXmnvKASk7BDg2YGoYHNFpdEGbiDfBbz29oowYkHd2yxR6",
  "key46": "4xh2th8T9pNRv2oZ1kCL7jR9JNzaCk9ScETrXUcHVjb7tGoitPqu192PHm29cudypjvjf8X9gFemLrxzwhXqczEM",
  "key47": "S8hpGDmeDzUMd9KdrPU2iV7GGdXrzXQ9beACZzEyCoZjM57KJSLLLuFnHeuNEbsvaXRHAUtD3fcCY8JHGpWSzgY"
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

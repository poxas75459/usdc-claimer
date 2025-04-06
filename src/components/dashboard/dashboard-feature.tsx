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
    "3qzUTfM6J1peKERCcrZiyhPz9e2vdfQHXiFcJGJZM8WYwHT9CLvnrUpmCjfz1NwzvXW2ZPyPjComfJURaCM2CHCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vmk57nRum9mpLg6qeg5tShDwMmozAaiafEAHZAXoEgEuWzEMAbKaFsgfWe7WKmGUzs94kZZbaGfndknskysb1Se",
  "key1": "2P6d5pb4qwSpaBiENfzPgoK8znEox6x7eJEgwopJ5zuL6LJ4ZzybNTdzUSUjySii4NroU7SvJvsDxgyMHyz6uad5",
  "key2": "u5EC38nbGB9rKhe22ZTX59esA3UZQ3HHYooJPqytd15pThzKQEDQ1G3EWHMnsLDRUssJAZkvSmtmTJw9PpmzJcv",
  "key3": "3AK8Sk32Y4F491P8FKkt568528oZLJ1ey5kYFhPvfqWH13A89iixsQ8BWueKX6vX4LMeMae677eDSSyrCkN12n2H",
  "key4": "2D9GuNhjoxX3tFE2UArtMnor1okMcwNQKd8YyZiGV1BBQ74wEnJhNuhhXNeVHCvvk4sPp27VHHT1otYKaiip2Nn",
  "key5": "5zSSfMpCeCLE5BEbZo3NNz5tviUMKuRAfrizgFpz3X2AAG1L296mJQ8wmhjpom2GSvAQGPC4zdSJXzvjd6gCWNBK",
  "key6": "5CcmRFqrCpuGs9ReMF5wa4QwB2vtxDoAzNKdndECWX3N9hhadvtdAKdM78EaztWAHH3Ergq7g45jq5uztVbX5UiC",
  "key7": "3dHFbc33H31ksfVgqGiJJVfof8rARPhWDEpQjUCmnye3Hi6L7LHRzNbeEGLLq4PtuoJDk4GkWxsEE4TEb2YpFQEy",
  "key8": "4qhoDVqJNhU3ZeodBADB6z1yXtcySc6sgeUbD16vkcAnBGzS9rvvNDUBT9H28Eu6Ztjq8547EyRkyVrJxeAFnTe6",
  "key9": "5CTcwxNSp1gWx99wm75bNR1PrUAFXtbg2yKz3S7LhMdw9Kycyt2T66zAznXdmaXmpbfWgbu5Be8YjGmAYRab6bcL",
  "key10": "549qEdqc8jeWWUWMAeAVBX4hgEU8kVZLeVTTxYz8KnSUMLLDj2BxuDQiWf5u11FwwBrzZxFWVFLcGJSvko8r56k2",
  "key11": "MucNa5hD52riuyJL5i1mN4LyhtDJu2QaabEV4tb3d34zS5EfbacowSoDH3RS919erRui7gMgLxSDZh6dTzZ8J9r",
  "key12": "4X5xu1sXbjU2PB1poEqQ8ymcunpPkoorc3trYsX8GHDTuEaUu9mvPrVhEADZ1ioNG8cBaGCuW2d3ycx8szVy5Ja6",
  "key13": "nci75gavaDbzX9VbsW8StZaYq1uR8FGQPrkZG8irnALpUGmF3CCwMiDPSeKRJSByWRFw7D144hzSSh47uEm9z9W",
  "key14": "67JVMW9ViP9FzE3FTxDoBbyMhLSXcfRhYoBq1Q4ToUfG8neaTR8GTnNuhBsbME8uapZV41yyyiL9NCHGK66eHxMN",
  "key15": "3tbc9nhSX1DmGDN9Dym8YZUcVqJzwoSW3mtLtof6mRDvZ3y9azHSnAYAD6tV692KgJQGYriJ8AofPEmp65sw3jzs",
  "key16": "9xfMSMCh51FeCZqQAVUpBcPtqLCbRf85wW5EjFhBZRYx3Vi3UzdfPvUm9qH25Du5MLPVRKqap4AJTTcDhoXrxe4",
  "key17": "4XMLesCHxe3twqZMfEEtxmiiDA9cAcxdNPpGW7yZVwPiiNzFiJsTSdh7TNvmcab6CcdCCF7PmANoc7E9sMaHqXYD",
  "key18": "5S7HVamx2ToadLXMFGgXSdt5d8esq5Bz4QTSd7BiYDHrsqmxNML8GV6vUdb5vBDdUC1tZFNu9Bp5BYq95DESFn23",
  "key19": "5Z9vRRXnQPBYJTykZFQFkVCwJnHq7YgadFVSUsFQUHqQGHHwU9RVa81fXE6rtNRVxErPY5S4kucaKZM3nwC6W5AT",
  "key20": "44aFuuz6oYQZwzLe59MyJiZnVaXiHzSno2rFN3o2emRdYrB8fhU8g8a75r2W5mGQ6ZSgHLcy4KsmtyJq4QjDGsFw",
  "key21": "ra8k6D78Uin2wLqAHSvf44aYxDwz17R2Tm4NhgmjrAaKvq1vPm6BeG5S6fom6S5cfkqXmZLNynCi1iVw7Zp3eqG",
  "key22": "5zzz8iBVQdHPhuZuZ3GLNPPVuwcsnJ9xCoMsvevBY44zEvyc17gbtqP1He4EHgAy7uRqbnPQj1cYZyB3xfwaCJW4",
  "key23": "4BLsaTppcCG9Nupv9grPE2tXA9UCB4KhDRPeYtKRG8rEup6Y5JQjvQtCaUM8cRB7LdT7JGFAHDQU1uKPGZWSEpGo",
  "key24": "eySFbn8zBoePPY3fSDooAzx6A9bALfhjGYpQCcFznqAeqwnK6juXcp1zicQTixxD2X67fVUNnX3qj3aTqPdvdjS",
  "key25": "3K7UJvPjcvCKiGCgWbALmerrFTpgGiJYSQuPmkbfXqn3TZqhfJ1AKdcSbib4BobonekSKmtrxz6oSt5KswFNfiSX",
  "key26": "2g3bumqdgELuq9bEq6z6hLiVSEDjyrTzZ25BG4FRNvzKdRfTVG9S3hRRXW2RJ9rFMJ95wpFhPCiiMMV45xzkWM4N",
  "key27": "4jvgppPhZxvH1B4S2FNzpihSVLjJRtEQQocYwM2ovrna65GiL3ut52ZZ24Pk5RYc5FzxZDD8AmsaWWTQ85oL1VNT",
  "key28": "5ERqzwz8J2snYZT2oQAQZSN2JiHEKymPdwBpzi6GFYEvvSwYTXevEHFG4LmpdZyjUWgC1sV7Zr6TZhVYf7hbt2N8",
  "key29": "Lm4S8w1QFD2akzaa3HtZ6kzKRhqWAvtFf3162TTLx62NjVvWt8Wfm5jRsQ4fmMME2Z8CdfzMqA3mddDrN1uVc9i",
  "key30": "2aYeAMy1k49wub3oA29FhbqLqaCzHXTypaS27S5EEsfxTEhNyhGKWmJmLX8A4FL8b1QnxfwYPBXaQyyJxNetTygH",
  "key31": "2ZxzRLeNFqgJZ3JQMt7qZXsNSkphpoLer7hLB6gcacaGkLsESJC7G3D9ucyybeKqngPjWWKn9APQnqa3cXT8nPAB",
  "key32": "PD9bpXdcRVbdQs1r3Qg62LwNgJWccYjhpmmziRiAQmCUUkP1bhDsQNCoEAAR7FTjXtTgsARm24Nk2GgpLBpN44P",
  "key33": "41QXWe7bDmbk9ci6eHm5sv5PqkCFoZGPuG39yAEAFVAHphsQ3tGHy8Aq32jZ9ELFhNAFNnii32gra2FD2VXGUoG1",
  "key34": "2WohkGninAGFGxMhCfJZTJtLXEtVkiFjcRMebpW16nG5WrnikJVgFNaf5MLBiZiFkVW2hXSJRZFqRonswKvhxPEi",
  "key35": "pvNs3xmTbRpfHtFvHE7uaknzdpK6reuK8BPby8u5x6vFZWait63DCvtefwDNrhk7tJp5gVg77ZTodnDUxZDEC5X",
  "key36": "4Qd2KBoKcCUtHAS4V2V1LGLuThdKZvgfwXDNnPVGbvgXppDph2omW1w7qf63uoTtzAyCEqN5K9n6UGsJogPwejfG",
  "key37": "3DXQfzp7ek33fLksKXo3fGFBsJgzNVVN3R9D44zYQDwpoEFmvk1eSmGELF1WSsJeVL3gtnPMnRvrj9FcddHY6zuQ",
  "key38": "5pJKy7PmFS2sgQ65KPULGWf6ntAoksU7D4kFWvQM7qt2kXntqsWVfFjqpZzmBNW4uTeac7EcX8bodzFqPnvajrrd",
  "key39": "2cu5RL72Rmpcd2gYpPyeLYtLQeKc3RNSgUrhpraas55xkwfmqH5yaHxAwd24PUJ7B71ANe76rStyyAX8LpHygv3G",
  "key40": "5LL4Rz1tXrwp6WrTVG9eHpPrXTP2JSLhndGSSBBgEsgVzAEkEenhfs8NzNCPQ1izvdx2Cj6hcEbd7HBCgHc5PxvV",
  "key41": "3zgmW8hHHbwsXtQsCBYFYdDwcVbVg1DKznvKdkWMxqQorNg3PM3rdKUQ8jECVPzs6ZZtzXUaukF9zm5sWXe3eQLG",
  "key42": "5N5afX4UWwJhkvfwnkm7MHjGwAsBNK1BeYoazbCRUwMh4fBGZdYV51NZFnJA9PH6ZdHJJW9G3WDxFU4fQY12mzZa",
  "key43": "4HYB4C382GuuMpDEcdkCx14GtJNBuNzwe3LWTGCShXJkigsTcZvE2wEQmCo2pM7FP9MVg1BzGzeyy9shWdRhtiMq"
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

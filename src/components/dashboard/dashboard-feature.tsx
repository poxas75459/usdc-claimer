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
    "vTsayEEWTEz5B16VWTrPzuFrwwoBgt589xpcMUbUHfZYzR8ufn1JddCY22LB5ouBZ3m1cq6oLhAHwJVaxYxPKWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zGLsSB8XQ4usjEhsAHgMVpo2eFRNamsous8G7RL7f1myCcw5YQKnc8furKpyAZGmao5iHrcDTc33HSmtgUsi89h",
  "key1": "4n3xvjvUmwBh7dPyxgVYpXpFfQYNsxsLR7CABZNmgwRcgua3pAnGRrYuk3U5ezbk82inVAzQpMBzztihiYWai82G",
  "key2": "2SfzdXuHMiFBccbGQu3ii1Hjz835RdLKZD7otHfvjrWfEorHrxGWivvzNMmdUmf7thCEJgqDSCMuaM1KJdQSkCJq",
  "key3": "5vtDB7EwYcFsFupXCvXc2LFjYmroeaFXe8ecU7YzgWXCfNVMpKgYTFVmg85YVPdsefw968bSfSLfofbBG1TWjtVV",
  "key4": "bcECZLAysnqEWrEQsNgF28Af4nFN7UqoCXoRV54zfBu8hHnzibh1skbdDwUXSPu1z1iwFeeaBDwBBXtgEZjSJ7q",
  "key5": "xqgoJ4MXrAckcs9PnZC8MHiDqShgDpHRKQUY89BgVWefLJWJY9SjHwwqaP3DzSZL4nQJxNYvbhLqtrjpThaThyS",
  "key6": "3newAYRUmw9dpQxKZRj1X8jWnr7zETeZce6GuSBr2rkx2r23DKj7kQ4K9LWCMNpDGjCofBBa32L9u7swmgtsnWxc",
  "key7": "4CoCUkgjUBCFiYxa8TkDNPtybkQkmdnhLnRtGQHR7fMok73e3i4VQCAKRD7bZ2QoSD2G5UCZnK6ruS3V416FF136",
  "key8": "feiL68hHrChGeWqGbd8y9r5PK4W4KKSARAf7399nmKBxmX9sKCdhpGSv7TNT97Ua3j9FUJWYTBQTW2D3aQsEjuJ",
  "key9": "5sLc9De1RjqAQPpRtagNrc9rrbTVvfotk5uUdyTy3S5qMsRsawArog8Quk79s3gutqfSCqfXnY7AKTwVARg2Qs9N",
  "key10": "5ubmi7nrPvKQCbCiWgpe7zuNFAsPUEysf4bJ9F93v3F1XYDg38DmrsdMDtc2cvAHNgb3KEuecg4DbWazMiSzsyJ4",
  "key11": "5dEQKDBRqnFbFawoiNp3FPdtuzgA1gUUe11mhMpZnu5TS6MpKDhG2SxDvtREsq1aFKHbnesBLWMzbWJac263nRqd",
  "key12": "3GxtS3Pqn3uKNaSjVAAV355FJqV5r6KnJzukeD421R81LTMckbZkBNeuuHgoEi6E3T6PyDGpZTNP7E9LDVwSwXxb",
  "key13": "3QxcowNJkfGTJTuPgtZSyqnduTQMjLs7wrmbpJiuw5xoCqtSfThcKPqjQGqo9fydHFEVvrtqGWqN8tyD3yuwY6iF",
  "key14": "3T4YzsnXf9dVkWaLAs6vouBv3RW6dArL3RYnHfuKqiK7yD1wuLpuVWRcSy8VkgcuMMThYjR5ciCir8cv3R88WGZX",
  "key15": "2AMehp7oGsmCyFvfCyerSGzHCe51esCwutYrFxaKNofpopnZvnQqYtuLTng7h6LUmmUau2zS76zqqgSVFpQ4xLDj",
  "key16": "5SryxPQUourfspb9WLQK1SKQkxvtE9iQabhJxUSoqopSmr6HWLNevXgsZ5N9C3MGhFMAUAtpHueFRvmVmKZU1ibF",
  "key17": "jsfv3fJUCnaCPT22Y1hYHP8tjZAurQs7XqeoC5ELYv5tHDJKUTdxQbG21RnQHQTi92NKtqbVWHYZybH2EmEmW8x",
  "key18": "4MFFfYTfaT2kHx9VTjk4a3eY87GWE2wp6QJdFhLDs9ySAxsAr4v8u4rLtyimATbR1imRZdJmW72ZAvysiJ2NDm5w",
  "key19": "3m2nqvabRbqQbPPnxALHatQZSvTh3Rk8NNVS7UYKRTkQvXMWUsrXjyLzBE41GVQkHMQZkojoADrwRLTb7QA26KTC",
  "key20": "v6d83uisMe9d2M7YUygWe6wZnKUTeHoXGFqTTLvvn81HLFbUnqM3iU1LyXjC9rwFJWZ5pB1UrsZW16qzbKD7TVQ",
  "key21": "24xyEMKMxgxiKSnpAZ1Nwu6smvaXKrKp7rHuvne7ijxfBC6nL1pXQmtSi3EXsi5vw8MRjkpmdf5qw4N73qBG4Sdd",
  "key22": "3HsPvuMeTepMGvh6PC2wkiHqd6Pw6ovdrv3f3q54MoZ8tXBuFzn8Z9BVNsDfuw8cbLxNysjzxCtrv1zV7kHJZ8A6",
  "key23": "4kaLi5tTCvgzYuGeFygzSAKm3Tr9dvdt1wLzt89JfLHdPkUvRC2z1FQ5gWS1rLteHsTYNgEAHrYsHYSMNUP52hkE",
  "key24": "4f8QwMmDNLr5Qz19VWsVM3HaX3xS2oU1d3egSLrUVCyB832tHF9wZ5ffqPBWrFzqQSxUZHuBaAy73VY52uctefjx"
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

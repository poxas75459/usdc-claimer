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
    "w3iyZ959wtTywAzt76pMyGjBgJPB9rRRZ7YA6um4oucUpWzbdYsFZhXWfXeKd62duaKRqVneAbcWFRQwrxojcmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GFxMPhVNpkS8KK8EBFXzEwNz5Atq3Ry5QaaBCpEFjZey8GpPQtbKrUiQAGhRJJsxLYdtYKr7rtwTgqbWHAKvmq4",
  "key1": "44P4Xh59vDhotfm9wFni7wkLBUZsCFVeUaCcdr8sB6U4dMD6CKgcrUZAFcaKPEYtVuHMiemnNaL6kaeYrutqRkJR",
  "key2": "3aQPNaFKL14jXcbuDaxdfueqqugiKBFvdqBoeGR4ewLzK38ASspH5o3tSuy6VZBLLzJYL6coWDxoDARM8tAh88KX",
  "key3": "3uChsRva34DmZf5yLHQkhaPBEoKtjYMHHMhbKhtr2xoFDcJdixE4Roeg3YmvRZgiL7PJHm2FwEgpJDm4sgsFgT82",
  "key4": "5EdHnLX9hinw99BTjHm2X3tPXivUx4b9QxdqiEP51mA9FEsUqxzUQXfPe33C98SE46sTQwUg3y3wP7BRjvd5j2cc",
  "key5": "3stc5GrPMbPXhR6mRNo1AdUxhMNJHhM7aXP9G9rrk3PhMhZak6Ga2MiKiU8GE66i9X8jQ3Js4FmPdr93q8nQLdJF",
  "key6": "3Zmwa1Ng4zMCYvHLsseY4pPFgEjRGGnr3obM4QMuth5Fyek8QWVL1BbYFrHJoFNpXpi5BwMe2F1uq5y224RxiUdL",
  "key7": "V8w19hqK3pLLS3zFubDsHfKFinF5FawM9JzXVv5WS2hXCENMGUQk9svCUvDsSxa77NunCXDrxRHw5waVcrJcfxS",
  "key8": "k6mWwMFZoEtG3RjRuvbvGMe3rAc3hXDuAmaf71H5rsobZ4ytvNDGkNkD723Pi7DM8zv4SnsZ7PjaL5ym5WyXaYr",
  "key9": "3SyqpWSgrjMi9J51MeMvpRCYLh3YoNPg4hQWg47DwaB4459nAHUsmkBysYwSsPEa1YEMP68o57XrS86Kwq85JoKu",
  "key10": "55P35fnYebScYSdwrgbYe2KAYfBXThWdGzZS7zuVA7Z8CcZMJeQYD3BGxFDSw3xvWQ1KWjxoPQw8QHvRjE773yYY",
  "key11": "5HmEmXgPum9oUFJcetfvPM6cUKyDkSGdZMsQXY3eaaSX2T38XzicVuR3v3TyuWckxQUbPh9cRdfe1C698XzKF8MB",
  "key12": "mF2Kfm8m8Uph3fyJV2SgpnW2ehN8rqZC8pMqNEuM9kcnPzCndWjKkEUWke49U3Htjc6sgqze6U2FuZ3RT9cAT7q",
  "key13": "63aCStRMH5VNTiUPEiS5eBYzj6Kc4s3EfZqSSWpkgkVy8mp95qoXik7qBwBLC5io3DfUQYqyitN5wtVbtvrowYqk",
  "key14": "3MnYMKz4VWmmHWzEcuo81Aq5RA1DovEkmpU7mkFH9tQw95pjJ9wG9r34Ew776ryNbYmYnMCYhY6yuiRmRXHqLrfH",
  "key15": "4v46VrMSyZ69Z9szY6RKVFycPt6TG35vZoUNmbwPvYWzYdLQeetVDi2ssx9vkJqnTdXa3n5NpL1JGrSnj2RXb5X3",
  "key16": "5eE4uT3JdqiYMNqw9bPNef7pP2tLLtLMLj3ARYQqSQCg4XMFu7Qw1xJXAQxFJVSpjiKYfCQk66ZL3zmeRbbigHQK",
  "key17": "3mGBwtf2XXaWo7M317wv4qU5NL94eFrXjBQ7zTdki7hdLxp5nJbfVL2mvVDzMEMSxjha7GUfpgbuH4r8yfrn4vNA",
  "key18": "3hPuVszQC6RG7yWpXvG9rtPCt2XMGDytNAzu17voSqRYXSYS3UQT16FfVzFPdG1QCtrAFTEBJbM6c2b9YYAibL6n",
  "key19": "3unckuz2gagC3cFGhyLc9TKPLHUckknrRZUAHz6QidVgy8y9pZpBjzfirKk1cgK91Jz8jJTudLtfMAEza1Rn7Q6U",
  "key20": "2ocp3WfYw6TGNJ7kLi3MbL1YHmFA6H2zFFBpfyqWzC9iBJtt1dUVfpScbtyDiseQov2uzBiLGxLn47DqzhQmswvZ",
  "key21": "2HgLwm3rFHJVuA8H5QkJCoBAmRUiT3ahugc1sS29mcRxiaUH7Mnggw9uhPSKRkTxdGtosjw25uAWLHFTpCcsPJHp",
  "key22": "3n1DMBP7QTAD8pMJXeNcuFvPnufNXuLpNy3miuRiMDaZfEUqdQ8e7tLEdHyp2W6xxAwT7ybwu6ktwWrQWxkY4cRP",
  "key23": "5B8cURGFq92QXppxdqzutHpiZNYSYXJMjFEuephKpjZfu1qbj7HbLeb8T8Y8HABXPUGSW9E9jA3XJZgoZyx2Zqkd",
  "key24": "3PLFxbMMEzhMuWJYScysQmtCuMi35mnyvFkpuStnVXCaEwyeFBJQJtviGH4vSivmvqazZpsFmixZzeCC3KhxY8RR",
  "key25": "5Bx2kupsKRQMGVRCp1bwahCSZ2YrCNmau99XkxuWqXy6WyEx5EqkNs5rQ4kVnccqaaxm17iMvrYHBuLeXXS6VzzC",
  "key26": "LRmuc8M1Ddk8FcMGJLCbMhVRL6GNoNuTLjCMqa22WMefNouWpJgYu7R7wa6v1wfJk41Kuu42KN7BYXFSbtVZ1oG",
  "key27": "4L6oGWam8edvDfkpTNMW5skQPdCM9vpuimkMxqkc5HB1wD9exNQZUr7hwnKXtJoBiUvJNryGTqebkLzYwaJkjTva",
  "key28": "3JAxgKoBLkombeHjJNVKaB7s56J64M8YxFDrFDnS89rdwFpe7De67ngPN2uzUJTFKhBNqAywLUBuibAifkFGHN5v",
  "key29": "4z7Aj3R43QUKKGg2F5comzqDaaC1CfJojjok6K84KFSgjdPGBk7fTg2cXZZ9yZuF53YebpXrWyzr5UsNA5BUack1",
  "key30": "4uVoMjC6Hxsn4thUpigqRmaKAVQU74Zzbawo84WMaRVL8MvMnByL42Tjwq2JsdsQM4ctLfmjhCXzgdbm4jyjHvQZ",
  "key31": "2LyPyWFW7W71odRxjpPwna8sP4o5sQRHqZ7cDGsKhgkGXmHRU2m65E2yRVpoysMDjn6MpsiX9B2FuDTJea8KaM3A",
  "key32": "63eAAbGPj8QoRoHkAKZzyqZHDPH4smomNsG3KmQSpS8fX8YBegb9eqShPuS2rt7mU4xLKowKX9qpWiWpdirUjP9x",
  "key33": "5iT9zm1x5Tb8nsCPAdzkng2otnaYkoyLdkeMSq22w29wvpt2ANG7H4WfVN3EQnUNLALUE5nb4foV1fwJxXCPW8wa",
  "key34": "3gHHxpDgXVuSXH7tDoigePWgTbhB3iPaFcRj5RachQmE4ztTSyjRXDfVdxGQqqioJ9J3P8ZqWssH5Wx5wouKrc2E"
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

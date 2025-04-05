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
    "puGi8PonBWYEY62Yxa7JvVGKfAXkiPucRGZTahpsgRy2w7wAG6XQiwScrZW527JfbJBgeu1iLz17yK3SF7t4Y5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33vnNy7aTKwY2JnfntLPs5AkpvAiW5Fs48v5WX3Qh7pyTaFCzqx527hhLtEzGggbSZJZSVySAxqXLsSXy9EjzwgV",
  "key1": "4jCNXH4in6AbfMDV7zpHgkR15PbRCaPQPfKnRxXGZGFkw7NLQk7BjUz23Dn2CKzvvEaCyvWx93LiLGhFdeGRfMmH",
  "key2": "4bStjFqdVGr5N6bHz3YNh7QEKY4AyyjMtA3GpXPECyq2rKtBALTvYG42j3pL2vhS11JGAQgPj7PyyZtrgkEJ3ENu",
  "key3": "26cUrxLxUYyrofFVuhr59grrJFfQwu1nFTJL1rNrRLoi6GpwLeRTTzzKse6DvJk8HaS62ydxkKdrBrnMYsx9bcmX",
  "key4": "2Tm1FvjMcbNmQSf4ZzBdvmH213mDunmW1WYuseLVjHjCjEk6wxjsnHZiZ6awNRCU8Ev83A3yHhF4NmDL9M4qMheq",
  "key5": "68tGBEuAtMgvSz4FwCP8DxR4WGQz4qcGKUZepdkzQYeKsFavVapPFVn5DfxpcehJSfdVkjFqq3ZzD6zivyRQKGs",
  "key6": "4qo2iT41nzhxoxqnt7zXXL6AhPpzV5fL7Bh6p2zvjBouLFNACzhbh1vYb2brnSYp5snpKxLsXEuxiewUxyQKzSYg",
  "key7": "4dPiW8rh7d3wLXJUAAdZDAGUuRgvkF4BAvUW5gU5VtW2YtXpzdFAr2uSvTVosfRiqhi7bV2fusAxmEUTGPY6dtZ6",
  "key8": "4tL6P4v8FoL92yBU9D6661tNB7yGsZK79aQV4XTFvBievJ8YVYCPs9dvPwDTzi54EbvW55NnU76mmgGjq7BJGYAw",
  "key9": "3cdoG1XnxjYeQWHeiHmK1my9YGvxV7EJaUbYksLGw1twhBKrnd7ENkAWrNuTpUJexKX29FH2beojMQBt7bGXu6Cr",
  "key10": "52VwSkmF4YeVk1BpefncQrcQ6EJgp98a4YKAAGrSFfkCvCPNLWqSffV8qi6wkFbAo3ViiZ5Jsuhqz3TYqEg5Vyxf",
  "key11": "XYUJWxUYW3mJY5rBRtuvkqoGgZ2UFEUeMA1rYx8zQXQEP1Xx6tXcPvqcAzQaKcoQMoEU6MFKbwZyANjFyNLErhR",
  "key12": "57ptRShZM6rkqZx8kAixLS7P4Hs1DCNwviAyAgGhu6AbFy38Z9HpvhZ57BmPMNUweiQdzdyGb9vJqZoizcCCZ95M",
  "key13": "L9Ji1oxUBA3RcLq7KRWGTTpafmoPbw51A3Fus18XjQnGwuEcGvubAGPkErtQhUUjC7HjmFw32fmBgyNPjmjDx8z",
  "key14": "4PQYjUU628iaRH4CZZ4zAYxabshj511Etkx3S5apcBYBZN5QwUw6x29eUYnLEspzvEHFBawTxJaCgRhnw8BPZ9iX",
  "key15": "374xgu9uHsaWEY5zM14UQmzN8mEJDYsieSByuKL4GH7nAs8cLoFiwYuNKzFirGCmC4RRw9qZWnULDosYadTcJjLG",
  "key16": "54mrphe8qMqXdb4SgXQdJPbHVj9RrQKDCP1kT6kUyTCwTNqvKiHXqc7KmuFdYsztaBYBzTbJwzVgSFHwaa17rjCn",
  "key17": "35uHLD1m27RbMKK8AzdCJ1FSab7ESZeFV9AkhPd3zyx95QhQacXX6H8vnFJ2u2vs8qTpudwnAqvtDeCJwRGWnJJY",
  "key18": "3QNkaEVX32R6Y4TzKMDb55codYRD4tbdXp4sfPfvRzHBa67PBvJDq96DRBSKgAcrMNDdcqjXxh6T5WMUVrufoNcD",
  "key19": "2SjzWvPAmy6GLTCc9KsBTaUwgyvQ6NF2tf2WP14RL4GTZgDZPt7GFzZhyb6KotjDDbBojMZat79G2ft3gGir8VLq",
  "key20": "3YRSFsYAm1GEkfzV3NxTb4zXL2vMTV4Xr3ZoDTCaqCsSJsXvuPb7gSzTquPxjfY7pJAV47JjvZf9kmvyw6uUDXZf",
  "key21": "4YRiNVduXD2Xr5oagtvB7m12FAuJQUHJCiM4dmhNacQ4i1jBcfHrtat1YKUTBPXLQLSq46TfCNjCCvyTaBM24Ms6",
  "key22": "5Ja5F6VFjbLShCQ4MJusia9PQzRwcTvjCVRki6m1qfPW3wAVarnhQ7T96cGbjB8VJ4tdyGfpEPekPThuYke3egdp",
  "key23": "3CmrYexDbHQfNn9YTNkoFmnt72VG3Bvz6SoKxg2gbSF1j7P1NqQ5CTpAcZCwjDA6ahMP3A7JU36umDoYNL3h3SiS",
  "key24": "3vZ5mBuhDUguqBUw9aB1wNtwtuVKVqonFYJ1pPNeVnSdguoWV8ZPohZ1TPhGptugYSn3Z1ewnpSdNS15GUjaejYk",
  "key25": "2xc3VSttAaU3oURTDAMvZZ5nzoEVy6nbrnbLxiXFeb1FCqPV2eqryM7ouQyQ8XikWfV5jzVG4RkD4YVy2A5p6mWy",
  "key26": "5RqPqxztWoBr6BeewHx3ihpnKzGT9AbWUUNAdK7D68CTtF4yKPatsG797EJUt2HnxPp2JNdxJfwWbXUM3kX1Czgo",
  "key27": "5cTgPkYKyV7iCcDVB7DkPbShL6oWXxAyVVkbRkqXo8z31pHeC1B9jQt4n5C2PrmWPnZzAUKUZDr22Nk1arebqieN",
  "key28": "38Wn2ygLHQgVMVXU1JgEbZutWCFui1NbSkKDNKV2e4yc59DoMSvnQRqWXhKpcHPA8MbxhWgyWRc6AuPUqWtYMDa3",
  "key29": "3f9XvBnAmJnVWWyfH8zbkmhmW49q7TPDKP5oLaJZZLoKLQd5ihyYtdpBDyWqPTXE4s5hBypBhjx4QvYygBFJc51g",
  "key30": "yENfskhSnJ4ksK1vLEhnQ3U2RtZW4sg5Kjv9Mo7X2Y87FPuKBrrYj4bpbkKn5ttca7i69iR15vAHcFb3LQrrSLx",
  "key31": "2kVZ54NjR4DFLvhDNTDUE7t5LHp3egq3Y2idT8onFC7XMd5JCnZRSXzPGqJahej3AT7NkoAZM15VE3ZsQrHayt6r",
  "key32": "2PCfT75HcRcgKycD8FGSMfLizBDCFrBkYfNay28VjG7cs33ytBzwQEVR2Wnyu9CZXpsiGC8MjBMCZAPXQu3mw6wh"
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

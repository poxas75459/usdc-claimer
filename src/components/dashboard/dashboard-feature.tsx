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
    "4qnr13xL4unxwgeVQLRKJhFrTC4LAmwSSMnMPenJXX4umtf2tAqZSGNCTpi77u5uAYpaEnpQNSrD4SXjt58rkqFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vEAgs1G1qTm3dprgpKLfy8BPgkx2t9BfPa78V5Sef98UNrszFLzdpCoFQnMvK9ewRF2K1wESURdLSMiMjyx6DFJ",
  "key1": "2JBLB4vE2QLuozjCjmzNf1DydMGjDRBNLQHfbVEQCzq5zC8stPz6DVzvGjSJHFP7u9kbDLTQ9FgHm1VLNszQeZmV",
  "key2": "4XJuWXZteWkSJT5Ergfw8Eje9MqVB6msT3pzREw9jwhS87YMddEWYBEtvXibQGbCqKWcBA6otx8QY8UTHEVTYfzg",
  "key3": "5RtY6Nrr5ipYsCo5JwLW2W4AWfieX2z5mcetKXtKxKja8iNwJww941aJ7aJQySrYNFcnADoN6ddkgXRoNxVFwRX9",
  "key4": "3Tyu13AGdaieBQ34gaNfSN1uwxt8zunhkVit5NfDj96dmstdEBpcFfUUXjxiM1gk2c1bUMruwbCBUuXYQ4yCPVVc",
  "key5": "4DGMKV8GUPyiENqzqESKWNr1PTMC5eqWe3dcnVjxBUirMw3yGTVb7R357nL4Uxgx4bAjUVkyDrbowA7UhjTAXLQJ",
  "key6": "3CQxj6MRbYoDHQRUFC4fBqiEntvQfxaeYJyQkkJhUFA847UBGjpK2HpZ8Z3oke5MgMuDEpt9e4sL5JQFHEh7nwmV",
  "key7": "47FJCG5P98moF2xxHzU2QD9gwgrTKPwcdohBL9WvPMovJGb7G9S56G2A15yTyKMevn2LVtn3ZyD18ch59GLYuvgZ",
  "key8": "pH1dtSP3nqpP59Gkc2TUfgwr5r93WaL8K3fjvT5abtjBnUvanXoJzV8HEKHnB9C2CJ8q7rRmLLaLWmT1v2MAVww",
  "key9": "4KEq53G5aJGFU6QrA4Fo4CzVAJChmWrSa47dqj27mKV7SbjpuKs62QhagEdQjU7PY2f11t9qrEKJ7S9AhZA2XULS",
  "key10": "4e6aVhjkweSCPLJ5PT1QJKSy9wgweLBrGURRuSeEJhjK8FAg5Hjkq85XPMJEHFKb19JboZ8KN5GCyPE6iiLEHkTq",
  "key11": "2QnV5CRMmPTu5nWKW4y2dPnj98qwVoC8sRxJXKYMu3PGswEQtTJu9gop34eqpFWRVb5TESHxQdbFFj5gYsDvqoxK",
  "key12": "2FxuevuMQgmFR6536T4VMJyBupnaZKjr2JjErUgbsaFxEpVw6Jd3wd8pGyr49qBdaembTmJ7sDSyDzQHJMwSXyc9",
  "key13": "9xJ8HGVM1KVLcDRxWoFi9v6CRMg8tTHFLt2H6nYgq3tCHfRLkeUu6J68p8L5whePYeStCggf1RAydUWtNxgfZf3",
  "key14": "x1GhJkBhRxNTZ1YPbmmexEi3dDPvPgjeCQ847bGywPTKkqvHoVxnHrUMuFUvCHS6eo5zDMTcieHkBbAMDDn8A1K",
  "key15": "2hzQp48TWSVAmASZMgmrobStjDVMET51CkRjVukp2JaLVP3pHjTLxvKD5GbvhMMiZVBidDzLAfYEsNJrRNyfcNDX",
  "key16": "2HQFyxxh7WLWPfiJwSTtduF2h46Hu2StadW48i7nAZL634pFEouSekzCprB6XuLXA7pvwMhsbe67svB8cQ42HyCR",
  "key17": "rANKEU2qixpa4vL48cKPZfWKN1pfitjA2KH8yjDw4F9AB1ZxihnFp4Ux1CyMNzayPHGEEAuVhuSXAV9p3uw8pfR",
  "key18": "J1Fqd3Djmy3CsFhgQSiS34nUVYZrA4nt47KvUhDzQeEbPGPq7KEyqwJmp5MXTF7XvT7HMp3EPsrc1XJyf11iRMW",
  "key19": "4jjEVSUbLzPMozUin6GvGsCQmw9hFeqmGgzNj4Xb12yXf2VHFBi2nu73x7h1FWLY2icrhmX53TMXtWUPnfFjver7",
  "key20": "5gtcYi8keqytX2F2fYd3RyJfyq9wmge5vf9wtpLC4juZUaK1N3JzMz83KJ5fbgRtTgkPaN8nZaemCowXU992nrd4",
  "key21": "3AgkFRV1kqVweb4P75kRL8woXkLBTepNgbYCULhiHHBZuB7XdxrRQavGhs37J5cLdVbSNJMUTrLiCHxUmaSbF5qD",
  "key22": "Zs9oUvu2VBApWoAX9DAzK4GzrtFvE9qCTkCvWDQW5jwbARY3bMqxn8eqpsCFQcDkg4QWZU1RSMZVwge5P76HSq4",
  "key23": "3MsqvbVbo5VgmJYaAoqtUCYwYLXFnFBhMVHHkmheVtKZnBXVdQij8kWXGSmg4goJ46qEyVahUbvGJ2gtdhe86GE1",
  "key24": "486ff6qKYGnXPfDPJw4bESwPPUuZuuH6mY76ETHRYD1C3s7rqNDGry3SCqims3ouV9Ehi5oHXVPj7y9eAhTCVytX",
  "key25": "kwQ4z39SAphFvEGSxK85JFhC9g7x9zq8pVnghCHcXAYksY6MqnVBZGmZaUjwSa7PDBDYP9q1D54i63AYRDH378k",
  "key26": "5ofvebhPSiy7fNUAHvqf2xt7YkCXSGrf853BQUSj4WJzmKeHwVknnpEE1Tbtdsu9SD7Ach1TM9gVq4F5shNq7izA",
  "key27": "d4fy2zXH7yav9FLb5VmgBEjeBC8v4uxnpfAwiPuF8AJtX5Xd2b2veHN3ZG64pj5Uy3pbJkipeK4uHtgNQgf9aDS",
  "key28": "2b1zJxvxGx8pestQo8abRUACQEKxayJ9JBDkhisoAeH2zSxayozuTio7PMWKTHZ48SHV46rZmoeepR3DVRNcYiVa",
  "key29": "4KQbxM62S75dcNhaTwxw5iCJJx3aFLB1yXF89n7osBp3PztiEFz8K6WZ4i28i7EeX8x4p6gGixKDNFTe3MWWtGrc",
  "key30": "3KqKzKPhXFM4iqDCpE7v8fRtYg6eWMFcRZxdqggshe1AQ3WknDus9kEGzeHAAsJquofESJpbkK8sgsG8zjq2uEJz",
  "key31": "3nNHYH5xHqTfTfcvvXv4i58LCVbRLvRE9pstXV8cmEzhvJ8dnXNc1HAkFiybg1wH9yEHdn6UwZpycjRkGR18e78k",
  "key32": "66rUw7tVZBXeB3W7CDgJDRx8zi7banw2dKiH8pHZNrHJfHp7TZtf7mxA3c2qWFKgjXpZdSXW6UiwnEeCCVS1XJWa",
  "key33": "hFDDhJK3wTBPDiJ4Nk2wDmahtE2w4HHdrHRFT1fuA9vYx126Q7P8ZtcZawh4TQMd7RgfhKLPzCVvGuHycujUEQV",
  "key34": "24rShjLDPsLCUcTVn1FpU2yQizVka6R44diKdQjVLfSZBe5xEkrgKeUCx8b5TKCaJmCpvubQPrqvrknnvXm9vo4T",
  "key35": "4M9NH5U8NuyFSnHsCzBRjCficEhU8XW7hZfgnbNv6YSzhUXZYhaDCjjMMqqxq4ry9RjrvHv4sz8NPe9aka8YoPKA",
  "key36": "45sxAVyDML9hbXa4WFZojpovPHk7mGfKaMskyrjbjDaPetS4zzzcnXt3u2Nx4kFGc6EqxuphbMdJiMfng8GoYjV6",
  "key37": "5aiTUrzZnw38S73cYsum48r8gmggzoc5rbL1p9X5P5Tx2GA6Aagdm6v34BDbPLbeaorCsbcLfipD2vQZDdbUkKG2",
  "key38": "3Mm2fNRdUZKFw7iHVjRG5zrDUnnwmcfi2LoxF1gnqBxKsKmvKXhUj4Bmraeb7sP1HidAfDEaqP88v6cU2usHfyQY",
  "key39": "qfVM43pCwxJ3mg8nskPbbunsu7MpQAYpYpQwxGg4nxiK13DkcqQyfc1aYsiSKbRLkNVUNHd6e5DH5zaxJRKDkQW",
  "key40": "3Jnx7aKKaALtQKjkKFK864A4o7vKGBiTqYgf3TJ6PEhdFb5wCq42AHGHV3fHpmyQtGQLLi5vbQ4aXtQwFchedHbN",
  "key41": "mgs2Ck8jdSAeyvfNrxqsWUCLt5xVaheYTYaWvSMepAmWwfmkB9H2N7qoMdvAaRSBDicuBGBFwpi4JyQkzuArwga",
  "key42": "282vYExZi6poBFzRt5dS5DTJ4ATvzvzxHcV2HDuLPcZTjahCDJoHTKsDArMc6FPXqCjypPHLabC9zASxapYbzbrE",
  "key43": "48P7jiyLUeNaCPaaPTKu2LdpJmNpAXpugpKsGQ6orkdkizF78htHrDEvY8qyMDshfHQKnwszHcnVKBxPVgKFqaCd",
  "key44": "xy5p88RZoEJoYf3bT8p6rCPEFKUVzhEV4SzkKVkEddJGv7WZPg2G6JNYbkzLNCRNsvAdWLXZnUs5YDt87c67ZGk"
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

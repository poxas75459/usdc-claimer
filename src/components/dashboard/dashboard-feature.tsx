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
    "2fnnrLxQdUZPy37APthD5s2di8y2hET8uU6t6x23meQg6SvQ4qCQhTs365KgPaUj7Naw8cotTHSzFgE6g7WPkWkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWB6EiVxAVH9Ao6jKUzRgkSAVAqaW8v7GoqmDc2vVcCYDd7nQZQfPBVWCNeRfJGKbMBEPZAMiirhD3jdm17xbEq",
  "key1": "5cWJyEguEta1TKgTbsFUm7KFstWpw8vu2tSwKLQMLSWZmqx24b3jcoXF2Qm9Vg1yiaQxFXQ6NkFqFjHxor4upbZp",
  "key2": "HBnjA5eKetRLYYeznqGimugKZ2HaVYW5FKuiDpgWJYaSuQbySZadyuigrfbCEo7DsBrwaxbyfwZeskRa96DZdW3",
  "key3": "2ezH3UcdXXh17VE8y7mSRs15K4LpmpS9oawADkMsda3gd1zHGcujfALeyJfqC7pUiPxNb73TkXBcrdVDJRsyUNtq",
  "key4": "64g9pBVTxgkGwEg2cHzE2AzLQMqgJMXLacYGekG3QBRPMLvUEZnF5q68wuG8XtYYZWJJp8FnoSrWHee96Hj4xFL3",
  "key5": "3g1jDgTAZynRowt41Zu4GANH5MnRQ8jtJBVodjUakKEDCwQToQcwoCNTqL1agVKqSemp1ZofdWNx57GgARHm2i6i",
  "key6": "3dbeJrWPw4DmR8My3fHZBiZb7Ycw7GYKJiEbXyV8jeiWPA1xcBJqbBodwag3icCjGqXyZR5rRPu5xT1JifjmuN51",
  "key7": "Zu6RN677omAxShWq6GfEgCmvp9ePaCmCbN2M8Z7hDvdsXFid1H4s2LWsQNDgzAYEH4iRWVzfj4jLFPNdzJJFvrk",
  "key8": "3Uswutpz1vH5QikGMzYBZwZqC9hDWsVJRdwvf5XCxR3cuhkp3HvdUQHyy8UWjb2gocuTLSFaeEPwV7WyQrWQ12mY",
  "key9": "5BaVMGtNzVazjAcbkDZzxEZ19swzUU81d2tpipbGxn3FLTBNL24eHkzrPpqwnzyVqWtXdD8NEqAThBuftGpeqSpc",
  "key10": "29qwmDdW2uEvg7uinEZy2jB7qWvvBhJGK9JbrbQnPfi1zKzPrQjynqnDgy2CSPRVcMbziPpiLmb8SCpWfB4XkZPF",
  "key11": "249BjdeCxZg4n1zkR1Lqpk4ubCsqxXS6kCgY2LTSEXvZUPLouhsUCkVKm9DZLJ8S7fEgbSmyQYqq6YeZjwQDZZ6B",
  "key12": "4PY7Xa8JEPuWfnWkscWdc6sF31XNm1iwSEwQ8wnKJHKPkfA57jfPja4pSVZmMC7nW2VCM4ckJE6oMajX8BWqvas",
  "key13": "28W2qWYoNtDQzZLBRyfFBAr5ps97hkuNiXuCFx3GHeMQ2cnwMzFmFVJLknjqWo3sEKEgiG78fGisJF8LsVzrdxbb",
  "key14": "ZDK8gMta25SqTjEGxydpVPUGVA7RFWKDe5biVBVJ9sCPvtieEYTQCYLomDsgqhe4RYzPoXz5UAQBABitMjbqoF7",
  "key15": "TnoC3iRwC2K6QcyLBpP733cMNxuh2REmtP5oem7iPYbEacGa6HKJRrLXnRgpDCvoPqF9QE426ENpHMjXDqxt5bf",
  "key16": "F31XgGkXVQf7gVsyJP5BBx7xuHxiJDHGSJayqz5ivHz1yCbkXbETGojCuwfLERqqu6fYvZZYXsY52ue87BUXE96",
  "key17": "51DHe4wVSmo1L53bHP6hX8JGsVB1u3vjvPZ295faF7RdGfu54Bi59HvSdTC8qkokFPjfqWgNSVb1TaEwj6at2oVr",
  "key18": "3fCPP65RFDvfAkR7qe2e4Cpn8eB9xMbeRZ6pJVVDUP4XVzPfvRdMs2ne6zqMWQiphxiEWvxiAwz9Z9Ce98KjeDjG",
  "key19": "2GVE1WUL9bcRLHpWDhAcYsbuzAt8wEotwcZ5tvzzjT4ethJwmHKZjVy3aE26C2La7jJcUCsd5g4PSrHtFmfR3Z6b",
  "key20": "2i6Ycbd6mF4VewfUM4pjK86ww1ULrPfbwKoqB8yFKUfDG8Jnnb3e41oLhtuRZKnW29mX6v1VhzkZT63BmPK6ixW7",
  "key21": "3z3TQJyrvzgQE2k3zfJ6Y4VQSUEeajm85Q3ev8kVcnGef9GkS2eZeBJnqovQn2rF3PtAozEAsDCp1ch8LVw44cXM",
  "key22": "435bX42sHpXrmiGspgq1aaWadYpBUApYnr3FA8KjfNnB83JzXHqiZ1WzkgSc97NsefRsyfqRNS4PNtjEkBoRgCUe",
  "key23": "3aG3inhhQ5h2QdzMjXmzRmAEXWCr6WVttSMfv5Cwgh8iHqqHzt7CBZfPo5Evgbc33u5scZq7mSH9Y8nHKfXBaRvQ",
  "key24": "53DWSutQMyxS3VSiKkmCW5fnwAvrKspKNcFMrzDS6byWn7vYSLgaWDUjpFKuWoxYZtmrsuiqQzwty63p3M1jQhPs",
  "key25": "3eKmBqMjaxWb7NyeCrxSLKb6uEMgXMuJVqAXrs9asqEfAuaszs5Ai37w9MLpHcRZpULuSGaRoNACBZwascDa9enc",
  "key26": "45CziEAGnTYnXPVteMfjciJWCb3vRGnJMEz43EFrhWEX8mWVXudMDjkM74pffUiJNQKE9H9KmRB5gxU1NqxJAXti",
  "key27": "p21KHW9AP43M4pMQV32EsEQRb1YjAjFiTUquBkFb7cCa1MhZ8t6Yvo7dKDB5rmXwLjKiKqsoAiigYUm7MkSX21V",
  "key28": "3woEnqb5QvqPnBXwT2WoVeAsfV6f3i2qYR7DFqz2cPBkkkZDNVsF4uQbq8C4q3mmoBzCKKoao1DWc7hZuM7yT78s",
  "key29": "51YGBwquVF2qZixemtSpvkqV6bKfUshneiVVz6osd7qd7isqnxiHivJLegXpVz3t1HvEPTJFWfG1KpmYSEp8VgpC",
  "key30": "5JypuqVxhjDzQuy1fgz2wRPaMDTjt4jbiKwzDpxzjueF95oLPC2hq8y3nLTzGTFxersJecBT7m8xVGGteeBmZdq",
  "key31": "25KDwUGakzMBTg6nHZvupbnhEo7TpWFF43X1mUy4TJmkwDT431MwKPuNuZdofPaC1tyRvnormAm2XZwAJfng9WCv",
  "key32": "2RrovQ5WiXvac3QgkQmSJqAxPyW8K89hVDr3iQnaVteceueYM75knJp6zjQAH5dhJgn3RJUZMfeagAgD7dcxkjhm",
  "key33": "3sb8UbaRqezbUaBa4K85b5u4gd6hpnQ9hgcM7XKEL67Zcu9eV5cGajjGZZUQVygPpsbLZPFjW1RUxVLDJZptg2qv",
  "key34": "PyfDAoYJzdxy6hpMmgCxcp4ac3mtz6zpx889sUbB7TfCqepdNeuwYALMWUFzGnpKf6XXjK3fGFKVaXFa1kFjgqo",
  "key35": "3pEKicWPpzUoKvmiwCPDXuwqfktKK5dpGMLuFimXCn8aCLAF3a3EkrTcqcpzM6SSqCuDRr6L32ikYVNYNX2DzEnQ",
  "key36": "4KK7h7GiMZYBFZ99mggWwZMAaYF91LhvX3NZD9J3rgo8J3ZYr171JNz8mvSvwkYhvsTHxyW4K7Z1nqXPFfZHzuDF",
  "key37": "3vKk8dHDwessBg1WfHAjiuFaQN34X9fCJXSTexUs5TS6WGJ4aJq7PFtJyRYeV9UtkR4PXsvM2Wwbq3uunHESAqqR",
  "key38": "59Y495qkNxi1HbaBFsAEdHKjPDF56wxpUabj8ccHY7CPe1EFSEHryn6Q4YGaXFnmFinJPWhfoAKy8ZmmddWFNRzQ"
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

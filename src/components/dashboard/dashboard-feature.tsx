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
    "YLahsvFdYcVUUW5TfPsPMGj6VZMUafFAGdcJJLHVNW5RzP9AcBtNq9S82W5CskWHyPdWfvPeb2zrcijxDAiKWoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2moexCJtBncLrk7pWv787YeF7GgwsWh4h7zhDwFMw5gXppo75d5L5h6Jmhr1VVkam4m46xkJjbbwc4SR2K7sTj9t",
  "key1": "2Em7xB6sAKXpJ2RJ3pwS6AuQDhXMQYcqnUmgjaoTDo14oosPpS2tiB5mq8CdGnXczeFkg6gBjwTY9eQKamGKEeXG",
  "key2": "qHFLfKuw8Smbfm3hjTctLjkguNJmUn6Fj3ff8nYRbwPuCM13Qn3JfvoXnryzL3p6cfcuAry1Mc5z8gFSFfaVZeq",
  "key3": "4WvfKoGF3eBKURKSXAZXkcaMs2W3xYSEBuJvYYqkvbuyjZnrC11oJ5DSCp15yWaFCAAFcaUKQtN8Hebra2jxozM1",
  "key4": "5moMq8xgcupq4WhxPLDbxbEGAHeMrHQmkxvLZ6dGcezSX1GDm95KJvoKRogNqbXjd951g9BbgHq7kuUoREc1kYkj",
  "key5": "2ybuxghAV76cUFFY1QzwTzqQUi4dF5zgD7EjvnifjLgVAxqYNpe98FJAHYv38MrD2b5GFFmF3q65YRWpVx1YQMp6",
  "key6": "5SUMANrhkSNU58JbFVDxRoqqG1AZMDuafJC9rx1KTuRD4N2mq1CLUU7WHBCgZfYXdNqVD4UGVdkwf71YrYxXVeJT",
  "key7": "2AGjF5uT3HPDzSo2e5WyCFswgqUCtZTNbQEePVrG7pJE77j2t8pnAzZcVX4ZLm8UNq1WW4xy6xrdvjw2JPgqNwGz",
  "key8": "qBGSKTKZ3y3ds8dRDCJba99mMP5MjqcJhoX2yhbyqS7KFs5ofbZMUDT9X564LCoQtJ88uwa92k1gswE1gFjGsEa",
  "key9": "26WqEEdeYP4VwmSRLRD9ddo2KCDHSoMKZ95CWrPiGaVMe7npGPm4tegZWM8DuEksfmXXGePWAMSQdynSSL8eP2po",
  "key10": "3bfR1HPCMGqUWr3af1DhF5KDUXQdzV4Z1XDo7WiskmZeyh7cH1gDVr2rp1nV5mcFLNKbdMi8PU68e1nQppaUrubM",
  "key11": "3ozZ6bi2C2ZkEZ7tjLTmWoNmKzawzJaDtcBJXGcTBrkazrT5aKNXy3ztkU3MoEeAqQHb3SDLE7R99tRgPub9AgQg",
  "key12": "3yQxr8H9Wy4FRFf1BghVzLeocqowQ8wHqhxHiSL7V3c9EUhNzvVDzb2VD9R1hP4v48ncQWYb6U3XHB4M1R63LhdN",
  "key13": "2ie9G8n7P7Zr4CCbBx8uF3YPbPSzb9fwD5ks9VrCdhQAK1iBgscFNEV8FntKs2Q7WuZXEHoxtJu7YVkLHg2YoAQz",
  "key14": "4Jcrp18a6LLntx5vFFNfF6LAuunkBF111PSfKwhSRLGXyqcfJthGEMP3XSfE2u68A3QjUJ28cjeLjkRTeZeQ6QVb",
  "key15": "6bFH3e7ZQ4T9EtAxHZN3ZQBS2ZBrwDrGEf7aWU832q1NmEHUEZ2c5MGEk3XLibc4TgD36MzYGcmmvDd8PzHxGiV",
  "key16": "ksdR4mXn1fDFp649J9EPNUXu7TDVjAebUfh62UHyAX2McEevcsQAkHxNdPuNYHLHTGBRJyQrFpEQ2GzcvzrzP5R",
  "key17": "3M2H59woH7BVk5eho7pd91RLfqwdUaE5wUj3qLGyd7QcpmBfqxNz4FsjhNDVck3fa3bbgTxKnyU5PFrEkCzt2j8D",
  "key18": "4dLH5iPnkWPoLmwP7RB5s7LRmJvEmgpUjt8HCtydehmqvLDS1zBxkUVjfyRBShMVrYi3qvppzfZEwYwcksgHnzk6",
  "key19": "KssPGKrpVogyw5zTeaETY6PoGyskKtLS5fBKSjiP1FGYszVpryvQKBGwiHfykhBmS2rPHMJpxVpcE4zperghXZk",
  "key20": "5yJGkCGzcpJbC23XKDzJMhM3PK95dt2NUYhfx9Utb32fW2UAzzHsWargcDX26PH8ZGewarW4ub15mb3J7jzQSdYK",
  "key21": "398d227pYRXqXg22QFWo1Eujm6skzsJLH4Vak1A63dUYrRFPiaLf1sLupNosDiEcmNfvWVRH9dGm4rD4v73dsLyz",
  "key22": "4BBedt82fszsKqqpHqsGjd2F7yii3Hvaw5tYJWCf5jUFpmihZRqmLr8gqLDbLmrFWGjKKtepfFF8UDwgWS16Xuca",
  "key23": "47eUP5PwEPL7ja4dm37UiTdPA9iNn5aA1LJAsEHd4b1N8Z6uy2y6nzv4Bv1GWYKwSd96j7eZJhUUCJXoYVMiqdFh",
  "key24": "3ZdB4vU1L9Yrnv65WbA1NRAoJxw5iJnf6JuAvgu69CVJd9sHCFUtRRdi7fS2nja1qoWmSsNCtcuboFsVTYeNGE6v",
  "key25": "2g4x9E2nAyqBakrdF6rwcnPrraEsogdheE3CQUZZNWnp9HfF1c4NJPD4Kp3k1R9QcK5qDSpuZA7vHdVQLN8LnqWa",
  "key26": "3fTDBFSEDNKoFYyYXnjA3exRjaaPHCrzySn6MeH2JhgY5NXL6HVZwcCp7qYporkaUShBtT1h5WMH3pRELSTKLihF",
  "key27": "4UsMSmMbbTVuCkLS7oMgtRMzyp73RHGLW8tXFYVvk7ztGdb8sxqeMQcct1CzGHaWwGoaToQEGkn4ZwW616s5pnkh",
  "key28": "2z6R7Ei5xunyHebfxHHbEN21rrLtH5fcWScwfqjNJqGqw7Q6kzf4a3e1ZRXBxHqoMssGCHTcpybwWBBBB7xc2DuD",
  "key29": "3xNRpA5uXDBRLhpC8KnnjYeLqwYimPAdhBCiYnRyTpQzuUbZKj1U9459HLgv2XQhUKWC1o2A5z3bk9j3SzG12xH",
  "key30": "4FKh1WEdzgK4N7Z6oktyfTQKNk2yLAgTXKmPxRZmByjGczRYXxCnHxpWjdBXYznWMwHG6GnMtQy27PRVQ4qKVQ2P",
  "key31": "5sAAdG4AdmQrd4KXFQ9poNdQy3uPPkyKjTvDkrBoPd6h8RcWcD2HriWLkkyTiAYG9SKRj3Zisq8NL3LNZW9n19de",
  "key32": "EBi8KWihGQXQF8VTmEEZnbZXuKL2E3jFcKDEU5P8KN7Qsyeahwi6uJkB5yFCVRDhnKcHCbm8a2ofxCADacNARw8",
  "key33": "55pFjAjJRRKsWctVPXBfw99FrwXv8H7isonFeND8XBFKbHxXW2vDeAPVLmEK9RrjKcnmuaa1iriWd94aHt1nd6fj",
  "key34": "5agWE32279RDmRvok2sqS1BUuL9NUwkqk21ePU1oB4DTgacAWaG393W1ExbcfMfyVLvtM1ucEo8dPBNJFDLAdSab",
  "key35": "2g3pDvVD1dZXXD7VoCgyUzDvHsJ6SEDTDfqvRdNRkaiZUaQi4TnjoTpci7XvxmxbjcJQpFt4NHdUvdYJGQ586acP",
  "key36": "3cqdgoRj8DXmzvbBbK7wD51tcQ87nozUktUHxnpx3LqKrW3WAowr8Ef1oeQMNkqjWZTKAyhn9dAfcRyZ3PKobedx",
  "key37": "4yqiGyyjLwjamD5swjuSwDFeM21Mj4UJq6pP139xGFLUUvfNS3Nr1su4sk2wieyD3sL6hhkdjDbrMP2yq9XZSZZC",
  "key38": "2R1NFnzNKxpRMhWJHPv4idJ4GxpnexVhngT6bUVTYJmNxCE77bGm9SQa691uzDawueSQqs5yvKbUzrvpeyKY5XUo",
  "key39": "3DNcGu7PAhJHhDxrfHr4YiaXxFy7ooGsTd7ooRzE8cvpW2SbUxYTZv26egmUP9ws6pr1aX6H77hicYUy3A1s7SSr",
  "key40": "arqCyvT6GE2Q2qjTk1NCNTbJ7hppnW8GkHi8KxrTQ8DhasKUZPC5DHKJrUuBxNhaRF5xWnyKEsFTqzPwpJnFPHZ",
  "key41": "2pk5efegN3oQmEze7zSgVo4fBf5j83ZK4Kj4VuKpB9mAgGQ5XrCrDY51vH9HuSAUPZ53ecEMD5TYAEMZqxhSnQoM",
  "key42": "26wTgRKeECAy9VmBVUXBJVedQfsUz6Ztt2B1ivcvKj2XQET6JXiwsLsfP9B1oDxax91rU5SQkikYHc91nvfDidZF",
  "key43": "3Q5beaFKG5Euncy3E3pTngsDb21wMpZddDT9M5zgcBrtrznc3JHKS5tbbJQMo7DST8wgMHip7X2J72bSzqhpdYBa"
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

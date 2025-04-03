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
    "2dmRer3y9piRVpdVQCDfGsv5zCCGgBxfiT4KZgiHB7UaP7TUTJwQ7cj3jQQAddsxyJN26HFdqC1DGxR2BjPFLQHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xPmjcR6AoKW3dFy2hxhjFdmp48vjGbJkmcxcsgjmF4268CTfRtnHhbhLaH1dzNAKWPm6bpF5WrS1jJgQh4mxQ3b",
  "key1": "5UVgpPwkS88ft4WP7pSzuZ1bLCPxhKjxyc747HRQkamPA8AtZ78Grmy9yQHHgoHWAzMUiuwcwhA8vvS4rk3MjkJx",
  "key2": "3HZososXxhvFxC67aX3XpDW2qcy6DdDLQbyhqKh5fL4WUtYzurjrf4WFLy4MnfM2fMqiP3t23Guce7fLTLQaPhCQ",
  "key3": "faaCEUWZF1ooTsciwePzrSZ82BZEQawyxmwrvMutnvMf2xU8SAqcGfUYDPzRydLHdydkXysM56fgnPZGCdoeQi4",
  "key4": "2nFGqw5mStHHkyzRkx4s9Yk7QgETziH5cYfDwCu1sU16rPdAreXBEJjPueMk1LXgWg63PjiqvU8WuZikxxEniNmW",
  "key5": "5XZqxpeBX6qDNdhWmbteixA3gUAjHzmXEac9BA8nbKEfjfW4NChB3hNyLmbF9GNAP6RSx3omdwpWUsKivDYVZzQ9",
  "key6": "3tDrpoem9qwoLkrQRjUANR8uev9hbjVvG6jY1pATf6rue23SWz5b4K9jnxPhquHt56VgBdEEiiCxABVAbpaRqoN2",
  "key7": "2zRQpyVMBEVMvqXtq5PuG6NacYHAYYMwDLofYwqy2a6yoAfm6gUesDci55UdQ2PUXMPi7c1CayBUUJnrkFH7nath",
  "key8": "4mq6YDAHYELsyE1EWJPWDYcq1emtQtnJFwDQX7pT3xxjy3An7PL41orT1Hre3tmdJTeVkznHuk3zGhSn74uPecmT",
  "key9": "p3URrov1QnjwjYPZYLvNDm3DQviJcQrvKJvrvdSAAJKH2BKo7uUZ3JY3Myy5N8sDNeeWjwYq2mJWYRR3KAis1kW",
  "key10": "2RsJdfZ4gr7Jnf3LkL2XNEps7mBi8VM4TLsefeywL2b26Rkib69V1ceSwv5GGF7YD5EvuS1imbuZHPC5xY9tWfPV",
  "key11": "2Dxw9rq4hweMAZAK1CJ34qLKdPTWAfxsQVeKGwKA3YPgFG5SmwnuUEztYKU61H7LWLhMeZMpnfVkv3PRmqc6P34i",
  "key12": "5B2tGZTZSZHih8bfKqu2rfst1rTqa7SSSnhTNDWoEkKNraZqVwnZ89wj4f7dbF22sGoEz4638XhWyHCyY4cxBPg3",
  "key13": "LpwCQBrCAyMac34XGT8Jc8ZDUMspBXP5bjQkn5nmZqdmbDwWWwBZawA7amYhSiKpVB5Nhqe4KrEmEuAi2tvhUjW",
  "key14": "2nB3kUYmyjdhk6ddDCdkMxYS1BEnUmPv8uGURw3W7CrdP3Q4ssRdhxP9eRS7H16v2Sq4p2ouqPCzd6j4nD3YTrGV",
  "key15": "4hQpc7ZVMd1wBLFApFx1KnuM68iqQngL91fKjumuYng4Q6u55TZDPpg1bC43PQMYE5cyDVFrAksbGssPXgnTeWAL",
  "key16": "2iaLsPjWLbzFQ2NqZJ9fhZi5aCaHHZg67UAfrtEWK7YrAoU1b9JB8DpTyWusLdbb6jPZvFAXtVNqVt6KEHPnRY5h",
  "key17": "4mEhE8ZVENCSWHXMZMjBfwhVuwdHLprs5FmPyPDhfaC8n2Q6xQV56FLPMT996jsmBw5vFBY6DGCa7SFNiDiAG3yM",
  "key18": "gHSMK7LD4LyXedvEkox34WZamoSV4DBJiwvrYSb9rKPNi5UpLBofXTquX3j8KxvC1FQ3csCjKuWARgBZmTGB31F",
  "key19": "2aCsQeLgc5SoJPRrL38tUsxPueQCWLaAWwPP4PDd8sYaxnTdwvreSeG6Z9G2KeZdomqFzCHorPDEdptuU6nzk3Zn",
  "key20": "5xrzVUFUymJH1wwCisySfHWhSM6ZCTZJReybtwANHURBbEXYdeggr4xE9tmozpy8K6mxjWtKed8camXHYgxKMRti",
  "key21": "kVz1JDyC33zA4cyGNGuW4uKRvicj8e1aXXGdGa3qi7y8PNTzXMScDdLG2WMcPN8SopXG3eZmtQ6FHq8ZxnffWyj",
  "key22": "zN9svnWZHvq4jwmnnUuB7FQtzpnDwjZMxcJ2ekpuwnKQApWyUDdFBE6sYP27rxJE2HqzyGUMeqBYCAms9DBTGUk",
  "key23": "3jDHtWtw5o6QiL3vqMrp4qsB3LorS8pZtGzQ99jVMM3WpVKTHuKRCiBpTdZ6F8g79AQJYYYKBL7pswzBAkmPUsNd",
  "key24": "43uu4VHY9fA3BpLh59QmapLzWeCiLjTscADXbwVsMBQdmFGf15XR1Tu7YjcChnnffTjgyQqLogVHQv5jGZUbo9qU",
  "key25": "58B5qsYrRjGGxoTRYZsoRxa4pH1kmpBD2xFNHig1MZDvjW9GpbNTBWPAeUD6n837iXe6PRBcdjjTjZMJHD7LTdv4",
  "key26": "3wSvwbTuMoYB66nvfS5zH55Mt7ms6QakP8fEGrUHhe4CyimbLeEy5vb7CmyR5X29LNf5kzjEEnpyRFzN5m7tqotu",
  "key27": "26644cBMHbwhKv1FFTFG3Q1u39W5JyULA7wwVLCzR67zzhfDjptruxaULrE1c9c5WXZD1BcH2K1Tax8CMebewrrm",
  "key28": "2mwu5LJQ1t3YMGwE178wL8883yG1ACK6vt81avVUpEj8Rvz4ZDKpKp9FBGZ6wd5vdSdSVs7pQcsXcCg7PL18hRLT",
  "key29": "3CP4Apm5cHoSTus5To4Psaasw8LmSkpUYnuT1rAKE8RR25nqKRKx4D8YmqHkJQm3XNGJ8nEYjDvG6MRvbqs5ffUa",
  "key30": "Zspz5pzk6rUTRfCtK4aosK9s5R4gttpAQFHpCw6TY82Y15LDw2ZnsKLvpZgSQYi8EpwjAPwWgMXe5YVqHhKwpy4",
  "key31": "fNptsxV6odqfnAhZ57nw29rh1vjasAhWwrnxo5uNVYV477myZrtUv4fM3RApmBqd7U5MS1aHLjE4Em8Y7Gzir7Y",
  "key32": "59WPysyukiPocpSDAMS1u8QjV4YeeybzvhmP2e9LwrRc1vqydCgAnXkKXoyS8ekRustDyLyv9k7rW4eM6EHZyqry",
  "key33": "5HfPgFB14C2Hfm7D5jqf4dMZYeJ5V4XBfQndHWzkHRcfpEh1nq7d3rTbDSLTXLPJDcJX15ti94Zy8cSCXyFTKzpu",
  "key34": "2fh9osA9BoTQvXUXYQZZXCkXDanchWXzoyKnKhSeMn1Qyg7HE17hQrcDoW8C4ftVjNCByksrYG2BZm43WQLYJLyr",
  "key35": "4FBpzpjZq9Ss6KMoWnoCuyxNN7XYPcSWHN3JhGKu9A6tNk4HHZdiUDtB9zQvsVuTLQJUJVHTqt825YKfC5hbDj9e",
  "key36": "3m8uRJygybojykvF5iM4P6TRksV7edHw2RUJVHF8g9AzAFqrErsTKuPjjWoBh4DWd2N3E8LPXFXiccdcCg3Ak5JZ",
  "key37": "2xLM28utVnoTHePrsnDNsqegNgjCCJGvMzAVHZn9fQuoMX14Ac3nNG3cLWLUgwDvqj9ao7RBdrQA7GKyfyaVJqy2",
  "key38": "2XHFV6pVFW8Bb5hz1TmABHcWwkvajhdhcbTPc7ynxQvTx83b76eiTYSbVer1dPqdFRLYjN4Ubeh5GyoLy68xsU2o",
  "key39": "LfYuXynrUn4Quo1JugcuGefu39sZqcL45ytBMGeSDj8vkwmFxzQTe3uoF6bj9GqCzYdpE7WccXeyAwZSmtdAE21",
  "key40": "4FM2HRFV1MTNpQDTov4EYrCpX9BCNCejDuCooTvUJB8H4Tv3L2BDEfEVSiqugbTk43XqpFPZWxKANbL5yzzRLpNv",
  "key41": "2xnJsPEz7pURzEah4AYHfEZtDksSJUjhGcRKauxTfqzaFiSXsmUSogEfAHLmN1bZSjR1aA88Gz4cWdEAFaXGJTb1",
  "key42": "4WF6dSzKv13xvi75GwbX5Uuv8zz33modKxXzU5Uif5KZ5pdUsXu3k2d3QpzVJwW5xL6y4aoPu5prFFhEW7CBvgut"
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

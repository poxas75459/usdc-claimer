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
    "3CtjVFLuLdgB3iXjaTakcPk42eeiG2XmjpzpXpqzEghaKguiQMRNfXssUsvndKLYcmKnhaiYNHa2buZGWDYNiyU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHS1SZbz43bdRFgVfawcQJ2yxaexuYgcZp2DrUvBdFTyypfBqSwyW7zdr8iC6yMUyNdVcUnZVuU4gCTFVd6XVDF",
  "key1": "3JsDyDYaMwEpRanc3WqkUKN7LtMEw1S5gyzvQRpMGFrx6nAvJmfrYUjmSjyyEghyni1xKuPDS6zux1Fy8BEsumca",
  "key2": "9RQhxCtAzzwS8bTUfp7aRYedwX2J7sifGHrpWHgGKDXbUoBUdgEpp3UapiTBdRN1fkERbMuwyoyboVNvjmDz3rs",
  "key3": "2fhCZ4ebqwdyUw6BzHjzgJT1kp5tCmoJFhRGDs2juLPeV3bKBycgwcx3pJSU86guwHdHU8G3VJadhsY38nepLswW",
  "key4": "4YasSBn6sXD7hyEee5TBBWJ7MdTxjpTpJCTepJ5kdg7HUqTC3ydk1NdyMyuDsQ7jMuc3zwRnCqhinJ1FpoMjU83j",
  "key5": "4VUa6eg5bECpeysAPikh9r1DbnRdZgFtuA1Pktc9XmEJyWpEdrbY5YSQtgtstFEVv98MzcFCR6vXTrjcArZqv6o",
  "key6": "3yS4frxy3KNrVpA8JDtiJ7oeZ5ETPPYmi1hKaqsTSC62yeZCwRtsYvY4xaBJ2LD9QgXYoVFhfQtGWyqUDicihECC",
  "key7": "wHeRgyw31PZmrK4HgqDMDNnq9WsintVzCMCN7pUjdN2P63bf4j1Tyh7L3WRK5v4gFZHdpwzYzqfzCSWUJy8tznH",
  "key8": "FgyzzWAtcmFHVkBh9tNZ31y6uQFd3h6QVKf5g2NEdHyWpQWuLoWRkP3sdgb6h2DPPEMrTkg6auMo8LXzkDtogGh",
  "key9": "kcNQLHAH9iEncvcDv7GAp4m8xZ7rhNVfE7Pt96mXMwFSs7NAge19vUzUVLeHYSfDPpKJKvDFE2QErdLgT377eUE",
  "key10": "3KDnfLk2q55yTXkqqq8xeoFGQpz7bxnFwGit7WzjR7jJU5ECmekfZef181yFTLRMhHHyqQiUk5rxKK8Q4ffNRccS",
  "key11": "3Zpca95rLDeMwFeNs4BMQ85rmWmPYUj8gNaygBBzErFbie4fbcAhCxeYn7PdQp1oyUqxmHgJuK2KFkhU1jSKUrii",
  "key12": "3ggb91qbBEnPyn98VRfoUmSd1WyPevQxegicZdHU7XqEuRWULiJwTKeRBa34aUrbnFhEg7swAG1bsN4cmkDSxLZD",
  "key13": "59te5d7khYCG8wGqDF3yrgNA35un1TDLb3rQnRo8AwP1iLTJbmqMXNoMyootqacx6DXwNrcCJu4Fav2DzEJ3qAbB",
  "key14": "4Gw2WSYQzMJ1ES1VJkAs3ZBpFyUyLQVdYL2e4mGwC3Uu7RUgdHKjxsToNkVSPGDUbdwb1oeEcXBFJUMPKiJqsqcS",
  "key15": "53WE44P5V8WMc9SneQaZ9XAi3Ft3iFoiMJD4ug7TUiFNqh6WS1U31aorcPUfDnnj4WxNvtwJq8nqPBxqgJ5xjSX2",
  "key16": "4RCeCB2MdFi49vQf8tCXqcBqZXTkaZZPNwFNhcRrCs8dRR3dZcYCr73zNU7NeFFHBQ1suiL9yrAhXoWJ48APe2PX",
  "key17": "2hGz4TVShFrkzKSfWHKKc6xTgwXFLuUuxmHou9z5dsX47ccUFcJWMUPuf7nXREwPXgdr5MjRG4NbTKEMbGDBt65d",
  "key18": "2b49bKEDJiK4YPQhn97ayKyRn16U7yc7G598hb3zoC2USF3PdXArsDMMhJx1GEPuomyaArst4VQRDivTHNQXbuwT",
  "key19": "4Hagar2AYgkFCKDRNFkXCWP1YwBd41DVECmx3PZu67R2sSQx3Zdted7dL47jobKuZG9B1jKG2zb4rthuj7Cvnnid",
  "key20": "4fzcvzSQJk4ESEdgQeQve8YuMRPEL7zyjvo4B3kMkprS3yagHDex9Qomn5YbeU8dvMejdVVJknJiahZbygS7g6Dg",
  "key21": "5YPpyKEeVYA4hxvQpjs3r4u86CqueA1pS6v9vSSKdDwGYjX4838vXBjFTCxCo16VL44HBg5dUbtK6LL7nPu69ZHE",
  "key22": "3o7ZpxccUrPmz14GV1tSQbVYe2XjWZbfDvNTaGoffzLyhN2H9hqfwjtpu5bGthz9RixNB9S68bF7XhApzmtirvZo",
  "key23": "52jQzuY6aUt8M8ZuthWGvYSeGtrwZWkG4iA1ANGa3pZyGXvyLKWAuQRumGkrtidKsjcoR25exwJuiLi6ZbpuE2oG",
  "key24": "53neYvCFFEZmrV9PrkfapB349DEpkgY2xM98aW58iPEirJezh73KK5jp17EkHYDtXnQVR2mTTak8H42UB84wkNFJ",
  "key25": "uPg2M2aQCfEAXLXGXEjLurxhTpPmdSD2g58i3zE4i3TrGAa2fS2Di31wnyxicP453HSjxbqfS5j8Weq3DXX7weZ",
  "key26": "XfCX4dbkuFW9D8rmrj35B7U9GuuFSgwbK5nTemjFjuPTsunzRaFqRCeWgkQrxca4vpVwedBQQfvLhCz7qAULoi5",
  "key27": "4jPhurd4akdEx1ewAxgGLcm5ro6SzbzpDjYu7gkPHpN6z4nPEAtUEGrjM41i7TyBXW5pu7PueSti3Ng2vpdVnNTP",
  "key28": "DqMKSgmM1Ufp67ZFNJioLbK74d4Twvvn7eJL42dpCo2JjNWto29vn42bwLruJoagRruF9utCPJqrqG9nGcpffJx",
  "key29": "5SBSabes8jTqtsTXHZG5iSTWRPVuw4W2TedEm5CaaJUH4TCDYcC2T9T8M37iQ6VFzy4H9pt7BYgg2MDfWJh2sS1M",
  "key30": "63nRGSk7zATGRkpuYPXUuogeUdAeQXpmYW325cPVkpGQPCkqXnmqRXJgkrZahtJ5tkTMrea3Akst6x9Ndpo1CDjt",
  "key31": "d2bbtAXTvZAJK7ksFNsCbcRzA5BNeECBrNDyEihb7nTbFVtNq7xRS1Usa28dFs5MnJuP3Cj1GQStp1n1Fc5BTfE",
  "key32": "3JGFm4vEFDMnR5nL42LH35vcLzJsoJ1rQYybWkWJ2pE6W528ZobLZL9VFxCETRyGzyXNeCno9eGjzpYYY74RRH8v",
  "key33": "grELQUW6dhQkVE87abeCjH6L1etqsuZeVzisJoVhnZK7gDojCU8xWV4eCFx4iXV5pPoReLUftxhMf84amGFy6SN",
  "key34": "5sgy1YiPedg2ZrqaxThrs8AEAkjuHGbr33gDsM1xQvbG24B6ZUWeVKqM4i8CckSqhzeoyKm1QD6zGcVy4Pkumskb",
  "key35": "2fvqeK9i2UPGNQWYobpGouF6f1bhKw6mm7S6neTtJiPXyUJLVRxfkNNyKwB1eX8w4Fec5L9bEyp68qtPxFUfERuF",
  "key36": "4gRxn72sZzoct3ENvEfoW1VapmCgwUXTLdaBrWXfdn8DHFneemaMbWxVbEXQF9NRxjuS2RJC1DNQFjdLSGNwzGCB",
  "key37": "4dXvWJbmFdFtECAjUKXk5QippKx9HTEjqdet6pKCDDqzo2HYbpXCWLPKTbj84JEJWyBKfjkPYnvXQXWTi68ztjzY"
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

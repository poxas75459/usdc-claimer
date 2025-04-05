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
    "36M4gR8bUuocbaMTXJWRV2ToVvKCrQapyvr4LDSog7Nn9SDyWXQtpXYoWB3rZjtGkFo8UQSWFESf9hNcimnZKN7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9fh2ndRgcNA7xKRqPZ8MMdDgMewKEMjdBszSvUCv4KQfYrfSDWAC2AwhWA21BsYEpHQYpTNrsFz6VUrVvTjbY2",
  "key1": "3WvP54ZvSKoenRKAqHN8bwVHpu4Ryz7Z3ic3FSo5GefgNyB6rYdaukN5KU89vWB5g1cnNCESKcrhmkqt3tFR2xWU",
  "key2": "2CATEqobEcupT2yi2PY9c9pWBuMmE4AgpDRB6mGNjBsTzud3yGy69TyWSDUauq9BG4cXhtPAvENgLPjMPKXNpNcd",
  "key3": "3Qh7ifkXhwoh2d9sAxx5fkhHqMiRu3rsJSYLhPT829KdFTFLAd4kkHvr9gRsTr4AYPXmH7BDRAgXuF6wxuCq4rhm",
  "key4": "27qK1GCQqUniqL3bb3a4ZKQuFtGezg163AAK8P9sX5LLVQc2KxE5VEow28y7TufruM1Zjbb4N2mcKor6iU1ZAmGY",
  "key5": "3fuwK4VfUNLG4NZtjHSnZydgthd9uSK9nAXcztSrHQTko6XzMBgnD1Mozb8PsWmp7kYHKgwSDRtmcNXaTEiVmzET",
  "key6": "hsGAMyNBZBDZShcQtQMhES8KzoAoQ5kdLVxUusQ8xbrd5kcfQgLpJ3o92V4p6wKpoHqer3Av3FXcyoM4MJHT9nr",
  "key7": "3rjnYSN2J9qyPeSk7pXTsWnFu9Hpoc1doWcLETTPRY7w7iQZr1v35p2CME96rUuRRGhWfLbspNstrYL9UJamsbZK",
  "key8": "4qWLRQTZ9fYWpXTyx3szL4DvyVbyzZR6spkVjdY3a2BxotbTZ94HyxW4FTzoPaTZpw1D8iongHXKqrs8ZrhqViPx",
  "key9": "QjyyLTxPCf8Y45QFZtA5jNiakdUo7jVrPCwHTcot5YyTKpTXRWatttQBeikEFzMA8kHtRsCR6NfGJMLKuAfsw9Z",
  "key10": "2nv5BSRTP9GNrgn69keKVxcFPgL3KSpSGEbQcZpiJAuiVCAu7YmjRAGoE3Q7G5dqtvhPBCc2WMbMxs4RcWG8u1MK",
  "key11": "Tp9ZCsEeUJPJLSk1YXWavwF1FLFVXLQfYZYEoEWt2p5wZiyNQZ1YUqTaWG6aYFP73KLGQVERdLwhwZUpFYqiQG6",
  "key12": "54DEMuchpCwc28cuk35mkuJBaAwwdbirTCK73eApFag34Er3H6ToC8hvMJyWrd9vLjitReAiXxdbimdJEit7XBKN",
  "key13": "5CybS67C2BuN5waWLKFTEVU4hWL4WrVCKC79urCKQKjNpMFKo432XMUsh1DHJCzRGzKtbc5y1QjTzi3q48trUJ9k",
  "key14": "4HhJ9BYwFbwkfDp6qESWNqoZ13wEFgvVanZauSAqL2hFBXDoVpkquzQq86PRgSAZeVdjHbNQmxJ19x4yrCNCLx47",
  "key15": "4ZV2NJbA6RE82wev8jEQRKoFT2yaQAWiaWqRuBdShkhZkkXZHVjbRYj5YapoRqUntH4LNMwTDzSv3sHhBBbhcUpi",
  "key16": "3MmMRznpBJCxiAtEavLSJoaDvd9nqb7DYaN6RygcbpwMoNffMb1zfEEZqfjp1z8vEZ3X2KoisGYCH76qrJ7E1mX3",
  "key17": "4kHS3cYPQrKH9W38fWhU5YsTszkcU7JnKmEsDs9irHj6BYoKsPJ21coxGUiJ51Fj4Aoo4q1vapha4kktukUVeK4a",
  "key18": "RU7aNvBE6XvfYJHryC6cQGeLUUzzHrf832nqP1nwAR7zkxysJd6oPDTyRLYhMb7qLWNXDCUgaLgpDcy6XBxUytr",
  "key19": "5J9AGorGudXWxViyVw9t3a8Aq7YWQ225uaN6AjoAe9s1TdkVUewDdkgb6DqyH2C3JUmYyAPtvfT1Po4SKELxPKvg",
  "key20": "3DmNEgnvd89hwsZhsF3CY71tqyMcy9k6ZjydZcX64fJcjuBuCPapBfMrsZK4mTjo4KcMVbEStmRs5y9tjJbGATVq",
  "key21": "512LF2JwnpinvLuxTGzV7HjYhUkTKJf8FwKhv2fdyPfGZM7MmKwYGtbgXpdTYTR2ZTtRpfBJzagHo2hG5jLpfcwZ",
  "key22": "jT9b24thP2r9QAQRhzwQbq7m7uTpknxpkhYuUTB8xUT8GbLGN9fFdqsBGUjREeaHC94EV5CiMFR6CPX4ZbGnRaE",
  "key23": "4M4fRktYrcYaD6HN78VCqxDZ3MuA4jJVi6Avxx12a7ZxsEk52diRGWisnNQHmrB9ctSUb2HrEa3tnx6eCzzVYZ85",
  "key24": "2Dgf3qJ4QFBQs7BvGTNGAfnypyzLhRjGCBc4KymiEiFbhbpeH6iUxQusJkvWaTmEjxexn4zDnwNcHVesPz6KcpWU",
  "key25": "381ZgnU1CwL1p87Ae3G5e8JL8gjqkNnstzJtJDZjxcBNVPn3FPqBssmj262nyKdqpdT2RST5eEiojc92A4DEZKLw",
  "key26": "f2Pchzv1VXtKSLSnnJEawRQBeBvZe8gnQZ6ShnyZbr21Ndb42R8tGfiHutTmugzcfXG9kzRxHKGeQGBuNZNYC3h",
  "key27": "4oxGj2NHkz1uUJa33y9nCCyheYTJ6rz9MKkhqYrGaqhWZm7GGW8oZAwcF6suabatSaJXRH9yhooPRD3iWG5Ybv8F",
  "key28": "4hq8quwGXCQqrXzTSgc5PJek8ge7YdBmAtp9aCdk5oZaqM3e3AgtZjCTRscjwkSBDAxgrTARfgRNnZduRBeNLRsG",
  "key29": "KtazhZt9ScsEYmJ25EEqAjPnZyvdc22G73SbG5P7uTZjy1ubV9Spat9NGYrx5U2vW4Wuj1eR69oKCUnaXspJhti",
  "key30": "e1HAThwWaUYMHqp4hqRdrjwkVDMsdBNMbGSZbA8oKfT9Qx441RbEah1KK3hzt884nkyi33BGrh61vAFqKh5cWh3",
  "key31": "3U6WQHfGq6ZtqT94bfjzuuAwsxdqxsoW8XP7uKHK1SvqVXnCjWRFMeHwfB3zmcdZYkcMQMQzgmYZ5uQoQXF4hY66",
  "key32": "Ta6tm2oAy2qLVUVaZiNPTGyNYdiyAGSRZSaM2QEWGKKouDaLYp4MQqR6NhPULf537cXpziSYHwx7PpmHd13VCHZ",
  "key33": "5P12VbWoHxrzXpCGrV7NgJy2Gm49RAGoSr12DvX4TuATKDt7Ctk4CmT1QEsbw1HFBqYNdkrC96N4fPeJRDW3R736",
  "key34": "2A1UEBQLq6VmdWT7wwaaXWzqR2E4Azqr8q5p3REUinQRE8C53kWCxbyvJxjmtEuTpH6pLKnQEC9qNREL6y1NWp4h",
  "key35": "2zBNFyQF1YiWamMc5KQrz5PrigyBugsGXJcAJ5cFPXNfapyTqCtA1xu1ACFy5Kc6FCuey5jGUmN2fbMuX9gJBcvL",
  "key36": "3ncCGxzg9Df2D3XiycUu8hA8iHrm1hinNuzyaSanDVfiMV8ntgWdJ8EFu2ur2VqR9bwDyfiGLeXUSnhEkT2AFTAs",
  "key37": "3L4e3wBV2AWoPGLiKFaF7EnhkntKH1fznmJzjswcFEUNEKHoT4zZmVSGE56JR7LUbs8uVKrM23PCC8JVUmFhJFt8",
  "key38": "3d2GRuw5Nxi4u5UeQ7kkHCPiAqDRbC7xT51kU3tRBP2pJLC5gMk91kjFxyC9dbYgUERbxiEz1nxZrqCwiX2biox3",
  "key39": "3DyMiPQK8jFuqAFMeFmhiCa2AJA6fbfFWnUqqnHFskSsGHKGdQ84nsfD8jcpBC1e9vz7wckdRH24vACEpgHJ86Xd",
  "key40": "b3gntTfs3ZMH8gpj476tsNLYtrpVEuZNctFWeCCWNBQdKHsP2MVo4Z5vFf2qDeZJQ4Y7wmUE57hkDABVa7cuMuD",
  "key41": "66JoeWpnQAG6oWuPRqvoyaiELmkjFCwFtWMdz5xQTWeKACDveJ4n6B1LXnwCiSKa8yhhJg6id4fsRqFNUAtyw5si",
  "key42": "5kS2auXfLssFNRLAPHkHhcngHULE977rootTM3JSSuMbvce8uScDqUZfc4922ePXcU92KiSvoCRyh8wQ7HRsETu7",
  "key43": "3MYGpo1K8pYwqN8V7F6SRPL5ra4XCh4gWAP4scEk3V9BTF6Mi1y1vhC1bPDN1ajaGpWHZDcQwFsTy4uk3gxvbGc2"
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

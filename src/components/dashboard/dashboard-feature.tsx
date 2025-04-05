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
    "5AHUqYb1wRWJsZC7iJawVrTGVL7Jy47g5sKf6b3AZKTdrF984KC7N7y6FtghL48HAJfRpiQgUn1zbcLDkYSXtFTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKkgxxyt7SZH2fZunx3znYWbYUSVg7BL2CYQzeUYPfkisv7ER9nWjpHLczrzaVW8UCMSGPxzdHMDFfgVJCEnnPv",
  "key1": "4MRsJKKxqV2VXD3ZWtqcdaMewmtC2hdQ3V97PWJF57ojScVfLNpj1wMazLpTSmto1jSJmLzBRncoCgb1CFrgeyHv",
  "key2": "p7LVtCkK1HYZZY1ZvGYx6qfJtk9yQW7DKqWZ5ed1nrdat8AXjrDqsDf3XQXS5nFJfh6ez8vNhofhU2Cur1PjY5o",
  "key3": "4XD9MFvuT1wYydCtTGfrFtgMwZe2ctjAD2iGzwkEo5GiHpZvn9LUPEevCDnNeRkrYh3FUNiVgyBKgeoe73Ro7k9a",
  "key4": "4v6JBKLj758AeJyYGU3retqQn4cXVKc3mseDpxsLDZunk67ccB6b1MLqVJAjTxbVaG1gRQJKRs4HthvtgSDiLefa",
  "key5": "5oXmUEwDGvDubBfrygpySN5Seg6ZUXyAC7tS25nbeJfPfbKDTj6MWj1PPbXCPzSkPbohpVy9BzDSbGaNcJDoCDvv",
  "key6": "5o587WKCBTn7PmjJCwPdVPMSGDr8zAezkthh2FMhnJfeAGxCH3vmNdnpNnLjcVXQiAdpJ2fqTyrMKQH27kegPVLY",
  "key7": "5VfDgvWrRvz17SKjE4Wb1NBK7Pb3XcGvhynPPsKfAdLN5r8RKFrggtfKdFipBiLLtfC7skhr2dLgJJ4vfN4jDXBh",
  "key8": "58Y8N5t6hi53SHHUG8nUkid2VY3FtrqtzRGX36LCxQYefFzQCxZdTyyBmYbxguJku6iUxVUs8uzpG2D1gQRbec2x",
  "key9": "4VwcEo8otopgSxGGaTZidYd5Aw9gRG2LLY7HUc9j6BzjLUJwup8Vf592JwLQd3vjM5Sngao3iYsPqyC4v5Ggs5A4",
  "key10": "5r3cRWvXDkgrK2LxFStqsSFv4D2zMFtCvuyEXUkQxQRKHRJjqP4DQWCPfUz1QXq8VcaHMmVT7M2DWXDMgNdegk8s",
  "key11": "23ph3T1k229UnQW3KYpNKfxMeHSnpJX9GH4RXAHexUU5iwrFexoAD43KWVXqMqPMsNQa7R5P5cCor9qbMdAopYSj",
  "key12": "61DyoQFdLX2iXQ8Wj8reYooxJanWRnLSUqJMWbVqsqvmH6uRpZRrxBYbCAHBVrVPraUh2ubiYafvUiKoNbqYB1cV",
  "key13": "5ADAG3anQAc7BAjYwND9Uq8cRoC3zNZenrmQ264MH2TeP22oaiQmwWmTkAVBQde4YdpwVd5NC4Ro2Qi9P8yQyv7A",
  "key14": "2XygofkQSXoar63qGVV6rSJXsgNQZSS7YjCVUibjwDK25GshJc7E7Qii8ubXZjZgPwSCRAREAfDFPCM3rjAR1N8E",
  "key15": "j4cCXCAf6UTBNFEb5ftRoYgdR5MLoDd7o9uX1e4G9MuPJHq5bnJ5FCdg2HTTrWn71PTNgmKCrzTnfYSPuRwQHQH",
  "key16": "f8jcEMn1AUdgwwnimeCJywd3D3wy1BJLYdm3mgPNTkfvKAFVEcDsJM3Y4oxHswnEdt7SUHanuWgk7PGQ8PYzVZG",
  "key17": "2yxPdQC2iZXtyGYZCaRFtE5BpSbz8Xmp2AnaAVCuNRTRRMpd5xfJsYihAUEgNQh41zusnYb7vGtrZeLApQWzmhP3",
  "key18": "5eSjGr2vvsJRrtTpwvgWoVGjoc2AyuKfJBayzKoiEsaKnUvXGGfqT3kNHz9Sf74C73JbmVsXj6tGyFoBus675CBe",
  "key19": "4K5gx9p58uRySTWKArP6vDSU8TJCavdp7XwQAG6TT7n8NE4MZgK8hz6PzRUa7WpgYHrYUEup3BqxXSBDJsYziMsa",
  "key20": "3LXZ9HvwBTs25nw2V5q2DMqfT2kvkKUBct5KkgMt7iHnYRQH1XcQTCnKSgkbigFXBSLxZcsKGr5K6FwCHjnRsq6a",
  "key21": "53HyMZJnTSEiC3vrLC8rrHE38tphMs4rfwT5hnQs2KJriyfCoQoS4696TVgxPFF3YuyBDr7woMTCnxHccwo3fdrm",
  "key22": "kCaXbgakaTWisf34SKZy7QYtq4PBXBBCKU8uFSpFppPxvy8PB4MUNpDeUYbpoaTFiv7nzwYCZopV36Yn8bunLmh",
  "key23": "5mUDYjnWiiQvQhMU98cuKtPjtvkeQCr3pLy8hett2p76hLTLijNiFx96Z542AAPzcPXLmPxXSjzoBDv11kEVuV3N",
  "key24": "5nw4SuaoLeUpPumfX7KZsSRjRaxWhzeY154GMiTKMhomMM7PdLhtbMiV7xubcW81QfdsxkJredyKHJmsZEv314Kg",
  "key25": "Haq5XRZb2BPu98j1Duv8gNTrcXEZyoKS2jmL9SNKw8UkE3rncFf6e7E4bArNWUGHQmDiKEbxmL1nJRJkK2bKp9A",
  "key26": "2tg6xb1oY7Gq2Rt2adrJwNvuhWTo5wChmVEGDkHiyTsysSup4MLhQWv2WCC79fjZkBZTqSQkKtLJGoASrYZzrQ8g",
  "key27": "3JHjYhWg6MQHptdunb6nYAaTKdtGkMxCh3ni1Gm3txAEdkz3gKWBdTJVvxu53kyoosbqp6GcJhryjP7F1vWRronT",
  "key28": "dpYnKkekNdXSXAgaV3NraF5QeJuu7KS98PpZktJhvzBHCJQyCGzGxRCqjUgUPmiKF2BA2ZNHpKa5MXd5XKDa1Qn",
  "key29": "UsVD1vbyQ3aZxQZwbJWsNwEHek2nQWPJtBo66iyH7FuPj3X9xeUe8TWxwqnpkxYXvNJ4mMbezkqprAuK2wyNyrS",
  "key30": "2J7Y8p6CLhoJUfojNpY75sGtSigUN6ZH4tADqLgSHG72ghJpCqbaV4egPa6hyzRkEJUqDaobgG5tE6DN9R5EzyFe",
  "key31": "5mhjQ44LiKE1eYxc3y6xhbrxF59DYToBLbj2paEuKRBZqSSfj5SRUheKZ34nieb5URwcfWwFRrxWYEXwBXYyiDWu",
  "key32": "3BDjTz95JrEQWCCZFwTPP6P4Jqy4ji2pumnxpQbCeeE5KxaBFz81X2KxwPJkUhkRUhD3UDZTMcyhp9VLbJx2NhLG",
  "key33": "3mfqBUR48NUT3vQeGEc5AU59zscuJndyshszr1tFKLSrDaBLHffMqRCUVXPNV6dezxSRegJ87Aiz5CTXZGn8KcXB",
  "key34": "5iXHdqvHKh87t5SRHpFpeaUtJdgKj3F37Phe6Wv2PasKCoZeQ1rrsTqNtfZZyGCwFsVQ6z6F7JKRf4tVYggBpGgd",
  "key35": "5mL7auwGMJ7xpwc1yBJF8xC7Urg8ybfDKJhnzGkx99DBG9Ta9x4aS5nr3LWhL1NDXzDJTUYhLN6iVCTzspPV6wiY",
  "key36": "5fTbfoc2EpFs1zn4uQPpkjLQq2BqopgnMiizSuiFTGdgGQM1EYnNaxgyz4WrdJ61y5Hn58pznDGn1ZbfPcntyyiq",
  "key37": "PKHTYUMKABF8b7cHF6H8oj4v251eBWRq3Lqpem5KLYzgkxZrhjFWmPCLy4xhuV6H1eVQpAMSNY2F1QuUMAQ7awq",
  "key38": "3p7iGBwHbELcGrwV5K6vPFyoRfy9ixVtwEgXPCm8mUka3qpmNVji322kuKiHLCoGibR7oHZwLfepV9CuxjGkqaJT",
  "key39": "2HW4ckjiDfvbBv5VZfh4u6ZE5s9XzxZyuwaRMLKgnSP7TJZjtVT2v2wfiNNnizpRyLmCzSj4btvi3sMgDD9xXE7V",
  "key40": "5AP5gzDyRinkdprF5XvHpPjJoPJLtkS6GZUhYavE4EL4YdCp5npccW3KabfFE6h1t5GJ1H3dwAYyNmFsFVnZ4uhs"
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

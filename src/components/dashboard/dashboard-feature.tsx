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
    "53dgLYFk1rWcdEyaLtWMnRWpftifnbfLPFgdQXZbR34STtVcAv4SmwGd5F7skUBUbTyAC68WDaVu9n5rEUCxbaLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQAjdJw1LMvJU9J6CNg5CFvk4zohWfSnvLZ5p6vPSBwLXGxTUnHkFdoZPrEAaCf6ELAjV8VocrH16MejWVV8vtk",
  "key1": "5oUb4CiQWwqxeSEYfCNuaWXQ5D3sXkoDu295bRtQ1wTFEMw9QthiHzasf7cb56GxVPCoBSsq6EvwbPftaRV2mvKy",
  "key2": "51JbunSiFn6jUTApu4JNfFEHVzcZRPQGwHhEdUNJUezZFL2PKvw9PFYJuu9h1GiTaD9WkSAiPYfRNMUSJ7LaGLBY",
  "key3": "4rUXxxLZ8uHAsCYoUEBh6P1SXYNwQ6eHohwWJt6NhaNRqicyDqR9iNwHuwQEypieKmeRKHEHFQFZNUeonhffEX2h",
  "key4": "3dHaRhcqD81HoZMtMjKmJkFEgLofB14tev7VTVZzmuTSnZVj91c7phvWuBrb3FtgQnfM9SCrMPrabXhiX4X9Ckgi",
  "key5": "5DrFZ7QuCv68MHDzWwHNiJUSgNJERuk7b71JAXLmskfzPWRJLFbpLcDdxYqWr1b3yWwuiZNVZGL8NBUyBUDJKnzX",
  "key6": "CU7ZPsP2KhnQn9aM1e9qVFeUJ9wEUZUhyJUjcN4o6rVwWYYVWeBEvaHM5ya4RKeihSVcXD3oCxLbwbXkvH2iwro",
  "key7": "5EdApeJCpdFyV3Ytpzw56S3tog8XHJ2KUtmcSMSaL8nWHGafgGnkfvRBwtiFvLMMdhXRW9g36LGxB2NbpwfknUUG",
  "key8": "4CZvPb5mT6apkNchbfZhtQKwDnE3hxm3r532TQasrEujjdAUttBQPHQCCxt5XVvUwuxdrktTwnkkaJWuaEUKwqWx",
  "key9": "2DcoxLei3ZXRometNcPjHwyxCdUA1HZXKjmQCGX9FuxVgQJESZkZ8efVXK1uStZSRd2Ep95mYsAh6RV81E11QSB9",
  "key10": "3dMzNPnhfNysE4SQiR1Y4rVkCUHJXT8owdWLNjBEwqkysVPnFCH8F9BB7QCJhR4ZuYH2fqBYet9rkrLWAVZ4BCxw",
  "key11": "3k9dNRVVXMLQxv8gTKiyGmFyubwYKkxxvt5hHHbdC79Cdczk2XRVoLRQ4QESGx6LYYt9RGf2dpABuyGwTr78LexP",
  "key12": "2jpHj16ZfydGjHXUhTrQ3pvytuyK5CrR4NdtbnY2a98ca1LAMkgMmJsa3TULtQDeLQFUggc8fYDohwtjp5C6GA89",
  "key13": "3SQxrVudC84qBDNi9NSxqM9XCaZYSSchPQDePQAezV4CJWwRLzeFtmU4RgYZeGkg7h2V3hmQ5pYcBpHw7ehKsqwv",
  "key14": "2nzF1uqzmQkunk4z9XbRwmhrZPG6KvnZjxZGM4HcAKJe7HW8A62aBUSj5pCDQ6R5tc2TJkMMyMCPWJUvSL7FgT7t",
  "key15": "eC1ysz4nVsCNyYerUDrcPFXanJsnSkmYZLoR8wvE678K8FsZ7BxSD1SbYJbaGBGnPE3RrzHygJW1GkMXYL4hGAT",
  "key16": "5Pz7vchm7o7wNmhkVXh4tVa7dGscEa3au2fzRLe8xQd9WmoLbVjJYZUdid7zYZkAcDUN9eDsUYfRKoigjASNXh7s",
  "key17": "3vAFZJdgBZ4Jb9WvgAKSoELrq6fEMjFsiV6WWFCNZWR1n6SzLjVU4eb9yCe98ZXD8uX2BA2xrjuqCUW5KxMGLipT",
  "key18": "2yPTpJRuDZTiXWSr69WRnJupgxVuNXZdqtDxz6QGKgNxNn4F9GSSuacpK2fCkJdZgNTY2UMsPFfH2ucofh7C4Nim",
  "key19": "4fACgTtSKa1wFsqttwD1TJ1Ycank8oEtzHWMvCAA8QKBdHcpjSvE2HZfqCR9a8dkSTCnWXVHeZ3dSrDqn5bMte8Q",
  "key20": "5pmNfXzgVFAPmHTwJdSg3VTEfm4Qq7gxLsr1k8TNkjwWNkwu1B4qpRFxAhPehMRu5J9cnGVaVN6Adsefzm5gD8Zi",
  "key21": "2YVKHWmEdHDzfbzXgZBVj24iDNcTWpFKJ5HmReUbHD8PchFjoRaFK3wwR8qAcwEobn4qNgafZvvugeuWtAmmio9P",
  "key22": "4uvtQgAhg3fJybwqu5bgTL6VsmJc9U3xDkiB1hP1sQrHpyc3XKoXZBDm5QhWhmy9H1BvhEyjLrmdyzxwvhrzCpZo",
  "key23": "4jXPwqHGzdMGu8Qe7hCgUgJQyEFD7Vvbn6xcRbMXmvwzLhPNsXAr6sdwwo7vJN7MSY57Gte671hVx6WKqH37ufSS",
  "key24": "2BNcyQx4hTuPtzRw8wHKd45wKjbZVoQvpCJJ3qz7S4gurNyXdWJZZ9ZmhvEUtCPo8yJnJybE9BFg4sQsPSmXzsAe",
  "key25": "AEv7adLYziSiBHMGqCQH1WUCupDCift8e4Xiz4cvcn2gb5u2QZ1LhgBtYd1ovH4VE7bSNTFr7pZ3XyT5m4ZTpnZ",
  "key26": "4nbCHVrQ3Qod83Ddw5Pjp2rYEgAtLoeGNSC7ph3KW4vTHMp29avz6ZwcdragpHGDkgvSK3N58Z8G3fKUZSqxnkw4",
  "key27": "21J713ZNHQSzm3DUQdeXfdrnT9eypMRZVeAZj7QYQwikuVnUa9PT9mNfNh65K94HWbLbpAyKzf7ZPYccQmWTp5rb",
  "key28": "NAXyVyBa5KdBdGjUXVNE3n8m4eR8iWKhRfnL2FMJvHAyaQU3z72UNxKQ6sXxAU6KoLATiRJSEzRn5b56V1W651t",
  "key29": "23rEoKTzXK5qTSeErFvd3JRGes5uX4M3b9eG9oKQZKC68g5qLt9Lzze7h2Ek6d2rPj7kBPPftfDhxoxw3pHWx7ya"
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

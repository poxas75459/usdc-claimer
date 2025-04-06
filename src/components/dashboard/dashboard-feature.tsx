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
    "52tEU2XNT2RD74vRYtF7DXNpH8MfU26kPKCzr8nb2U2VUaYcJbL6tn5fjAu8PbsmkXEmCwRGuYAL2tcHrJYfDUEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZyDCCwFiRCawzZPQRWvUzHargFbcheFTYVRjHKT8Jxzx7kqRH3n4oEbBty7WCJu578WVnk1s768rRcm7BBQMGRT",
  "key1": "hAEAAav9kg47H9UP31ssQDSe7vQJHePn3TD1VkCwriqrbYt1EfiK75ZPvYGxoEWvaAxyAE3a9fhjGidg7D1d1Kr",
  "key2": "2XhmtueiLqb5mdtRKvKJUWz6rQeqiV61gPhV559mPhwND4m4JQTadDiHnxtXYH1EEkq2kAZ9LpqryS1j6y6bHt3W",
  "key3": "2iYfJ7Mzx1V65ABSjkchw2m7CNmLJDnxoH34MtMwBEV1qGKZ7dREbA2RUnAmfmNPPxcTFYGKaJQJmu9RGtR9V9a3",
  "key4": "3sDcbogNHNmuvt69MM3SASU3Y3pXYTHjiwGsYpwVWm4KbxQyZWuz3MhsbA16QW4NXg2drags2jbUpHwSDA6rTG4M",
  "key5": "2Wew2rGERuKvbT9TvNE6QUuFpu72nRWdPHzXStNAtfbUhjyVQEmmzjjJLRr6gQXaSR4WcTeiZKFbBYvdPhyvCKp3",
  "key6": "3SPTwqDtMJ7BSQKV2r8TyBgY1gAGNYZEhxHv66gkc1tWK8GQoivsW9k4ndE1PLxMaQZdzQ1pqXyZzAdzucLRf3Ls",
  "key7": "RempEoj6EXf3k5GMX9mKqUz1biyFobgD9gbBWnEMHrKdtDTxefcLKFCFjcPX74yUAQAx7fut6VgrbdcnUWZNjt3",
  "key8": "5xarbUn37t4txMsAJ5cJuZY9kpu4zmQL3fYnjcFD8R5jnoTg7Jn32su2YAZu2VccMN57ot3dJm5Gs34YD3w1MSiZ",
  "key9": "fuFw6BdfyitEDGWkC5w5MPheJcLUFrtrTwPZoeieW4UnUq6DfCN21mAfbr6QZErY9jksVnA9oKxs4iuutt69tUw",
  "key10": "3H89HDCSScGxZCpzg5pGvGHpm3zprHxr6FKYh24zNAkx2EzUr1TjqixqRiDDCzZNepK1rsSDXcRQBzSTSc9q3h67",
  "key11": "2yVeab5YH7G2vPSc4M4XtwGTq6boNP2DPjBWes789cARv6AP8vWu2Urt8rgF2nbnbqycXjJKc76FWzKnSEjGszkK",
  "key12": "cxgzPV9R2j8FpC7cvWL5bnkjjBt5koavHieZaf4k1c4pM5Rjjpa57R3UgH18zw6Ehx131qQtixGHxHnJ5qETTMf",
  "key13": "4GcUf9ETrBtUJjtuqysn6XjTHxSj4pQUfhakDtUv5KwwoZKRoejcDphQe56P1N5BEpzkNPGNdn2pFWgSAkNbRprm",
  "key14": "vFbQJ4qnygA59SC4nDHG2fcCuFLCWwcq32xmcLDV9obpJayvWj2gLWtoLzvy2fVtCAdVqxkpnWGLLPUoNE29ADC",
  "key15": "5FiUeSTTz6SyosJeD5CKX1FKwwnoSpxtUyHgk8VK2YkWwq4kJ3K3DyoqjtrrsXkzSQEJ4i11dzxoDr1F2BfSn7oj",
  "key16": "2GRvAMfGibdy35piPDtvK2k9WDwjBnL9fAnNAQvGSiwvURDDiAXv9uycLEfR2oB2PT2arbE4YwPBvCbnktigBja5",
  "key17": "TScBo5BUE4G7LNRhcXaBHn8SZi6X4ZKENebyChSsWhMVCkS4Y23Kz6hL5kDj2oRw3d24Ho68gbSbWfWj53J6CCq",
  "key18": "ntWFZfwwZ6K24RkUeQ7qcDJfhADJ6ThoUgVCaFc4VvRHuwrP1kUonrZj3CAsa8i7jivxWsxQzwLWKvqqvHnQuJD",
  "key19": "UNcb8RgQeo6TdA11FW1iKmzCRugiZaKyhL7c7J4U8TiLgZFwwnsSChnaCiSGv2XNxsFquxC2xqXwBRu1K5th83X",
  "key20": "5WBBjvd3eZHagMcsE93VhLbJoNfvoLkzCx96HzGYH5sjqT7rLM3GFuRNv6Zw9KuxRf2kn99jVjGTS8GRU3pPy8bX",
  "key21": "29L4yDw6YqLgXWb1AMe84ZHQzY5WFWFMADUaBn6jGynun4fhHk9cZwteHxC7kKWa13d1cMfVewHQJK3PpfNtKLj4",
  "key22": "3ibBoUfGzPbzXPAc5XaEzS1Pv5rom6Ri8fqfbfbomLQhnrEpTPS8AMCsLFNk3s9CaR2de6Jh8iVd8Px9iMkBt7mg",
  "key23": "5swyvGkcQXBqFHc5tqYLuVp8YNx7qs9qe1i8sjDpW2hscYb8CjNy6f2M1xydfeQTzZF8MTCPedaSBxDPrrWJfyw5",
  "key24": "Fcrp6BQtJA1tomZDybkhyLgXgXTFUExfUBZJnuJRZqrKMxkchUa68kyHYuSWQ16Cfyk7JZFfAk4qhkwTwS6Vhc1",
  "key25": "dcvvyhG8kjZ7GwSVYaQ4PLidhYgSf5d2DrEeNq7LVd2jjKAhC8PWrHtanGPnfyGN3gfBECsGVA7DtBWwiJLqVWk",
  "key26": "5AVtCGStGEzCM2mVuoCbTqdTfgm4on1WCcvuoYnDLfUtCj1GnVmUB2LwjpHnEfkANtsojcBwmY6QeC1rzrpekiKx",
  "key27": "S4Bgy5y8hCCGVkmQZHaAQLJgRxrR36NbbqgLv7aCp1Tn5iJhdCS28Gz8czmvFTCyL7giTkasV3RjgVzy6QTNXwQ",
  "key28": "vCKwA5HDEv8pqsKGjB5kCXkoTxFCgT9Z8GzsLSAftXEynR8RUXusHWtFdus7NGRfWujVdfaGYkYE2DVrcekeVmM",
  "key29": "2wpMfNKEfcsCiHS6XHrfMCXg8jVCwh6jZswrTd3a76cgRCq6e7ZZmBYhjSgfAnj9JmEVQAyySB6BcdTLWmopuh3Y",
  "key30": "29gEbMWpExcLEtsLsUZJyGxtfTo5bBME1mRBv6s9bxRMJ5YpkAok1hzRheQHV3hGGry6KntTpGSqJ3o7W1FStUz3",
  "key31": "248eaYDWA7QepNxUquKuig7kvE89JsPspQaXXvkzQKgX9v1iUUQQUhknLyknwFQcN9audfqacRdpHu6JmvrconyR",
  "key32": "5zY51vfHo5iWMLvWaRfUePJsaz45VazFfNyQkJFfM4DSjdiMrsKmppaAmK89pmVSEha1KzBh9dJGoyq1KqzNDMRG",
  "key33": "85A57hrWVrXTAJMwuVTPFCRkWsr13Ri4ia5UFkELL8VWTKXYjg89Dssc3JgT2sRJAga5GV2rLq1aTc7KEY8rNCd"
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

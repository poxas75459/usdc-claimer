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
    "4ZFSidsfkLaubRu3E8RBAAeFPisxABf3duW1ReGfwGisFLtVkwqfHjcZeugfH2Rt88p4B8RgfnKiuYKZrH8ZD3LZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42rokR57zb7FVQePnAe23cVpQZw6FsmFbKE5qVmGBy7CWT2fZQVSF6RRgbRLuq1hdVVg6KZJ3nzuHuE3CrNjWj29",
  "key1": "2HbawmDwpLvSmVaCwj2ND8SGRte5ibs4pDvvKw5qRrZjMfRMgWrL7hbeWgKW9v514hnK79Xrm948ppwp6Vifw5sF",
  "key2": "5maRzicM4UF1FNvGWszJpaZ7nrEGV5WvAjcbWUDoRKfHN8wLnEXBZwu9LbKeBi6SYuKF2zY8bAKTgQd7A8EW6AZj",
  "key3": "3EinBAY5MRiyaij8FrEsSXKtuNTHm3CkQBmLzZCTMF2bbEdfW2ZYf8vD1KraABh85Z84X9qM2qVYRW68k5g5ZUu1",
  "key4": "nLE1zK8Lpk5PHn7Rb8jbLMQeh9hp6QfmQN9y5PqJ1SsdEPkyRCpwpZB32ozDAaXhhmeGbDu7avoGJJmfpbLA5Me",
  "key5": "2uWhSmj9keFnbeiGbrNwXiy1AqKwE3HRUj455j2tdpp3jiEsufweA8k5tGbKJBC6ik7yRSYhne5Nc8erh2U8s9Ea",
  "key6": "5aWHpjrU1F8wt1jLM3gS7Tj1ZR82Wnxx5QAXn7Zm5DBZS973xnJxDFadG3UaQwurmgcCf2Th3MHMywbagcTVrXTa",
  "key7": "2jj8PpmDKPBkVh6FNT1XvbWLJYRHfSBBcWbcmEv8WJTwwgf1zrQTibXeeQje9vt5beTW8TxnictLbXWQnNGSpxY9",
  "key8": "4LyZwamRc6p4MNCEPNgs12MQZYLmcspv5eVERTnmWQyobfCU56RCuKPb55tnFiEUbKsJLfC5g4D65BpMPDgpxLBZ",
  "key9": "42Y9ttvS3kzj96BDA96iPAvCwDsMeLzDEpe8eiCapsx12D7ZE8hhN8xjHgu9ZzZTyJweUCuk1SZW1SwQEsHpin64",
  "key10": "45bqxuyEKdQRnoHVccqSRh7tFqvCm6yjxms6zVqHqh2PWsd3nTAM6ongwC5Je6MtjbRUN8s3zSLmyqQU76MktgoG",
  "key11": "nwHDwqhWxfuhWuKKVAeUZETtXQU1LKWTnnaDgwPaijNhVXyaMA5tRsEEeEbTXW25YqwHxNEpddM9KwGjmgWoXj3",
  "key12": "2rStFoJA41BC8NM34wAxHCRyy26i1gpPAEmX3xDuuBLmkbGph8iN1miGgonRGZSgQsnPMKTudKomR9TcqbWQU1pZ",
  "key13": "xRW6czk5kgSU2DUrM8kBEhWkZii9sCXGCNPFrJDPBMyyi2KR2a8TPBb7h6SFgDuARHkgpGWQwr6Zoi14e5WXVS6",
  "key14": "JPwG1or8dJfzukNdQviGehpGQ7ttASJiEpv2BgTYMKc1frf1x3XpRwuAvnH3FL6W279qBhru1YvdapwMoAdx4gg",
  "key15": "38TRr864LDJW3fDz3iZnai491jWqdrAZiEBCYPcaxdNyVu9Lip9soe935JzXJcRiwr6E89mSSWRtCdqD7TC5iFEU",
  "key16": "2JJZ32JnsfoG7SBqFNkmTqaSLSw87d8NjYxrzHNyi7oop46Nb5wRHuBojXoWVvMz6f2KZg9QaYFEgCP8Zqw8kVjg",
  "key17": "3GozzQcZkQLejBXpCyV7pjsGqRFNg9D8jdgiNw1dg2QzUjg48bJVwFtem7VyLzfhc3ZCPTzeyfSraJc15Vc8DccW",
  "key18": "48LCv9iovHzQ62gKvqkzkx2PrPn2oaThSeAk5jVNTd6ufXt1mXpaUvmEMqD6UaV1t9Snf8abfVzhTL9no31fzDjP",
  "key19": "49c1K7Havohk519WiQ5cpx8ZJGmimCRe7VCmuoeC1fycCt1bDDSuBiTAsWk6h6AEaJX7nb4jP87dwMpYQfXtS3T8",
  "key20": "oT6cvZg9z7cgpgemHKLuRiEjkXaS7eQKievtkhvofsMRLyf471Gy1oVULAaXLGeEPofNw4USBkxSepk3mevQ6Yt",
  "key21": "3N1RHHgosdjKwxbN15PAWSoJ3XQ7BpBd1vY3oxHjtwsTsqQVzr8Ph29RPSdUPJkY8qswuqvL9c2hnaqnfZ4aanNF",
  "key22": "2s1cZdC736pn6YE6mmGMf2mKPzN9Rbi2yB5xtuHDJ43KngexMdaxpNVd96w22CGMito9i6qJXBATYxwPNDicY81K",
  "key23": "KeH3VWiZrcMF7Wa98sm5afCDc1Yugk8yLWUMmmhCQN4qDvpETYvSpEcujqR69WpoXQ4Yf2v3jopnkxnTEfcGLNq",
  "key24": "smVaQeEjmVEJwWGYg63PuTc9J7y2iUgxsEioxRAcEpYt2TYpx2cDWasASW4C6jqAnYj31ETfgLqxzSeezefx5ip",
  "key25": "4TxoHWKq3N7uPXMGVenufLZ156yBQGERtaSYzcf1WKaeYjG1zna1Z218itwHxxoezfEgUKgFTx4LGJvKzBcpC9Z5"
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

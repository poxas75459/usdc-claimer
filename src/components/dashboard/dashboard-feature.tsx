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
    "66DdBZFBKwkVZwaVtQLuJYTYxRZKuVi8ByAqaCnb4FdZvWb4jwgbgPFEiATYdj3NRgWCCGuEj3AMyJ6BP7MjPUoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DiUKPEsXerDkoB5QRs6vRWv8S77Uw9rLjnGw3KNFqssRLtWxdpjfakZaXCqmxucsHxbLgHNCP7outWTt47UjMSC",
  "key1": "yogaGi1Vy7aRaB3v2zqu4d3k18VcSsnS6Ctz7njCSCHTuCMzg7es9ANV9zDe8tVa6Vn6ANAQ8BfdKQPQct2Q2NV",
  "key2": "5H1dyhPeYvpPbBXn3BEfHpH9HKu73JdSRVZaahLVMY6E62mKkc4EgwzfLaMHA3mGcFd1bHUXtQFZaYfejCWdjJE6",
  "key3": "5Nx43SJsqoNqRp1oc4owHGTsFFScxbJqAR38yGCe9YYwRPaNryXRhcSBk4vtywnLZ4DhC35P9FML5PUdoNijkyDP",
  "key4": "4hoqF2EuknLoY7HrG6ezCikEVLdi1b8CwTsreyLJgPQnWm6BpCedthuaf5P3eCKK6iYWg5SPKhb1cdxRYZkJA3vH",
  "key5": "ufvUjSQnDZeA9wx5oNF7jVdNKAfQrkCaUdekYyzhpDNqJgJeMgKp8az14Mcn33vUjKhbN4noNbR5sbZXRHgEahn",
  "key6": "4UgWRdNFbcx8TpPDGT3KPABABeie48PC8x3CYqX5QNCz4hYayVhaDPPNaDz6AELHJ7LqC7gVUTSHNixoVE6hhC6L",
  "key7": "43CW9ytZ4BSt6vvWXjZUvv2vgcXkuqtf7AoUaFk5TiCextGZmTyRxSKEWD5W8Ni4PYSNqrBfrJtAoFJH7NHRwiXH",
  "key8": "oBsBa2wb7zcgw62m5UgNC4cnaCZzn5YJSCweZFBj3PbFK6rniLKgsBHfwS5WCzoEyRQFamsPWVvKKnmxdBpUYRV",
  "key9": "3vLn6Hhhxwc5FM3Um5r9K8SRHoTodoDpQWHUSTkG2HAFjEbVCH4ZGmhd6Y6QD12K9y2MH73ZVusCCuNSnzxtA4hS",
  "key10": "4hNZ9g2BKr51G2JrtrCxotkGpEqtEPdseSBb9sXzWoWo4ktWHdUtFMzf57y3JebAWxxjvgdVPqChu5caTK9tDsah",
  "key11": "3PNtkq5Cu3KqeuZBKPwh2Kc9NV1Hfo6ZDNmyuEJPJCyqtwQdWQhotQW1aY6tBGeuzaSsXHHUeKqyTLrDd9uFwiwU",
  "key12": "TBAVNfYus2eBw5vSJqX43V5YaWZ52QZwRZK8T5ssfJoCnaRkFwT3TRUmR84AqAcGr23H72EVn3RdzobpAGesJgy",
  "key13": "xz7qC3NsJWDHJdSQ7nZhLzGjfv5Dw73gEwcHShLhKACqerZYLSiQSxoqYY52kB2sCU8ggM9hdTXxYULQ29oqZbE",
  "key14": "yGF6TLkKmaZ1xUnDbgZX83FpnyFmLiunxHH5fxDghRFmXUwzh8P1uQx6J2jUs1VpZJVkiFiyZrGfy4p5P4iVunX",
  "key15": "Xm1WiicXaq3hQZBTTNpXExFu7J6CG1GpL5djqgKFAQn7UZgjk8rgY4zNEPeCVpimjyoJaEdf27Uvm2TKni6qxx8",
  "key16": "4vkRbPs5MiP1BfWEDFuBjBj1f9kXqRXNU2V8CoHAhj28PDtAWgUGL2nbkxgJqbGatW6PzzfsduU8YzxRgKCTyEWW",
  "key17": "498RY2p4naeWgzqiGVa6kPSLBH2AQujm4yyBDCLjeAbQjMrfY8yvDoaPBjP7JYXdvzn8mYnm1kekbwk6WJ1ux2j2",
  "key18": "3cvb3QeB9nqK6Lxj3ScgmnwjAXqRTb6LQPPVk9swvavdTsrFndb2GVPoVEXrXu16GYYZjDxHnsHGMiEZBRRLSzzz",
  "key19": "61pbrGToPMrNq7D1C99RpWjn6xNqiQcyqMY37wPrcTPE4QdXyg2gjdewyLPZoGF6cyntj2Yqjf6garTYF2AhcvwN",
  "key20": "61GZN7JiStwrgFPd2UrHvZAmanJSCPKiLXFtdQwTSGK9E91EjYZ26kQPoehx6iodXsGvs1vfo7yn6ifTcESMnEji",
  "key21": "4w2VpuKUHSbdiMN2g4Y3ni5gVbFEQf4CTDuFxmgGDwAY5Hhbve3w3b5eVqn9XVrPdRKNEsVXpZk2CUMBwdvWrYZa",
  "key22": "2QYjrxVcx7CQc2LrpTRhiYiNDsbrHmNrDpxpdExADHmRfcCj93fGCni6nF8A6UrcnPfKLbbi59RhK1L8GLeRJ466",
  "key23": "4kHjWsS4nP6ZuhsfCN2JJjVBjJ8om5DTdY6DSF8BUZXkSYyBcbvES3whzoHLMiu42gqQ8dQGkjH1sXVATYeTW5Ui",
  "key24": "2GYTApMHqFa4KPm6LWqx9oZBQYf2fq48FJVU9MVUKTty8g8KBaEgzPgDXnAoRzfcBRLygHQYCMgiR43jaVPogYHy",
  "key25": "66w8u7F7rJ7bJ1Aa8Gfd4HnB1gd8YdeRHeicBeYvinXQjWd7XBd5REV47we2CfzNd3taecFNQjZDzV3JAQhzyeXA",
  "key26": "2oUgsuqg1RvLQjRZdB6FoGsMiBo3qgxddu9bBUmvYguy2wzo8CexBdBUSKhq5WwgJVHdCVWAZhALp3HeDNWvGzqP",
  "key27": "4ezbWkjtm5pNf8ihhuDbgUDZTYjZ2GorfGkBmmEjLh29G5qRcCkVEefzfGAh12HScv83wgKKLyfvHpG6umSf3HPR",
  "key28": "3ChPPEDusgG9F2vHfTSBfxaeu3LfJ1N1R557Z8Nv3WDGneqxJ5fFSoGWBFTW8umMcYSfwtxg63AzU6KKThrJXEu5",
  "key29": "34XUGusCMQYoRc9Vp72nkUXxUe3R1VkXRPH3GkFwEQQNMT1DtHC6NhepBYZ5yaErYw1QzKtuJK1eWktiTPXX6Swx",
  "key30": "63YEW25WEoG9f6qE91deWygjMcZbXqFUPbLcDVvronVzmPKCBEhYxHbbZD2cnTarpnbmh6d6KwJ1rXk1QJ41ckN3",
  "key31": "2MUxkofnaYk9hPkw26oUugUaemxAcB1QBtBw3sMH2JyGP81EccSGr68KUELDs6zRrJfzRmF7LfzzTFbURGhMJt1K",
  "key32": "3zJW5qg8FGmU3HEYT2gszV5ZtUD8BgECCeLahYthLXvGHSZoHxkHciZnGU679Mw7uMMjz7VFcwQvfvW1s7oERPaz",
  "key33": "62uGpRFFkz9nUBb1brhwiAwK746r3sRuNWU2dXHyb1qgfxvCGfUUS4cr6n7D9yTmp9jsqSbJkzyfL2etv2sdUR1Q",
  "key34": "4H4HGCfZSSS85YfhgVUpLPhYHhjPHjhxFesbb8ZDwwtqRw6q2cMkwqaXtncRoN8j9T9ife3SZKuBsCUU1Gv3mpin"
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

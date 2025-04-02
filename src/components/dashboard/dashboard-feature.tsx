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
    "2nC1rMcxkjhy8YAbAGmhMQViHDUQGht2LBWLsJ8WWwvTKubs1bz5cuK8xxxpm7k5uX6XKsRgVcsP3YaDKQwE6psc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zg4867gfAyg1rUX4kpLVkCfRghDxKc4ytQVUphC5gPqixG4pKV4A7yMMtJZK1Aiy2YJynHZomuHxMu9cX7p53LD",
  "key1": "4J4dq2RRDRUhsLpcWVWXoz6iVg46tdNRuzkB9mMqiv5HtuJTXrRG5fWLasicrdKQ67knbr4bfcGFk7KzG4vtLCyb",
  "key2": "5G317m2ysZc4fqjWtnjAJrYWx9XrVT3PPV5pZLRhoN5umag64wLavBpbJLj2Ujf5RPPW5dJWfMRQ9XjU25tBrBLb",
  "key3": "JPNSjiTGrvwFaoALb6JzBPZMC6PNefdfKxCsb9QUGmbZGfLSPYKfKuumaC24HddRTQpxitBZr4NbMFXx8VFY6xh",
  "key4": "4rS78BcQu77JCZgfNaeWVi9j1TpmTLvNfEFrBB13bvwvh5YLnTHCHob6B2QgmzivybWN2fkNtvbMjBQJxga8jPF8",
  "key5": "58wEVnMz619FwV4HVrAZaNX4NugRgT26c1HAsDhUwcGqe3JZX5J1UyP2r8eZZAw86pktRhFdFy8MfSs8DumWK3iG",
  "key6": "27f3fa8xAGS9yKE2oLNdUDSME86KYAaG3QugAuvBfSgtF2Yte6bcWzztuRKsdarRx4Kde3SFP7mMpvRZcKLiA5Tr",
  "key7": "5u7iYrEDa6fpzhZqjAGdZjwBx8K3o2sVvMxJcv2qLGFNRB64BVAGKP4ciRZN2ENATZKVhbNDQWenf69tXUo8hbWz",
  "key8": "Kqtsy2rQCsQHpWA19NGSkbdHKuyjkmgQ7DTRqhAZYkoiHcNAdyj5jzwMvUnEgwdL6yM2BLrSvMJaS29TKdscH3g",
  "key9": "LJ6R3gHzJkJPkbH1phYiz6fmMKHRVW9ssRznvLzUccR2E8KzffPGYmCrUxrWL9cxY4VXVosDXbtooCv6WcHe5b9",
  "key10": "5YQAGVYfYMScHcZkiW99kuwKR12cvqnWrpS7UwMSqkioHbK4eZD8SsrGP3DhNRZ8SZ4HXaNqxqgii5okRYy1oCTw",
  "key11": "3jjGXmNSoDvvMvRbPjjX6WsARHncHpZdeSbkDhpnek6emzBsCaQz8tQgbSHCuTfNFfxMuQD5NLGx742QENezyVjh",
  "key12": "4F2kYGK7UUeAXpUNmvUwfspd8T9b94CsPi8GPjh59ALsAVP5u8AScraWGBe9QWWAWzQkFhoEnJGXeLPF7RqL1hkm",
  "key13": "B1T9T9NXpchfQ5hSkYKWsMfXxwS4X9TLN9s2YVYHXixXKmTN5rBiuMckKUuBCtGsLxdpd5bbSpBznmZ8F7SLAkN",
  "key14": "63KG4GDtZFCDV7BFpiiKp7TwYwDzF7m8y47wNUoo6pGW49iawxBoNkad4Q5NaaUzFjLkEZWtKMbMDdxyDDyZLso9",
  "key15": "5Jpc4VRx5sWcEbfm6jviWvVuhJT3KkEoTPhMbFHy4dkZs1cX5PH95Q4qDcKph9cFjUfssozW2HZ3QXFatbAagWNq",
  "key16": "zAZw5y2eTNv7HzqfqDmZTgsuBVvAfqFgHJ3QtazD59mzBM2x2EHQYvG794shy5Dwkqg3QxfBqPLxEYbvgB8959Y",
  "key17": "2GAk5GBP7j3thLk1sA1rzLV1A6AcTo1oiZkRA9pFHij5xxuoo2YXwLvuYW47CHCasiTnNvMVYcRm3zNqvCfuGbFu",
  "key18": "2hwjkdhQNnmv2FehtovMTr93EziuE6LPbLQJ93riV4o5X5smtNeWVDCHVhvvPM8qKdqgWLbvZrCEjAsQZXJJJHkf",
  "key19": "2BNJuwjgGCLavsZUdqibGjMjanDA6sNE3T43ns7mvqPwardANhiMeYEVJtVasVmZnC2qAkGQJLNJztawkT1zYB3j",
  "key20": "RZ4ef8kgK8EJ7zN5qCLwaC8yoRa2T7gkbvDAC1dERCgtzgADcfMzg1XvWGjH4XuxbnNQCBa4AofHuXDByNhSKUv",
  "key21": "9BPkx9YhMGaqLozWqHdUCJsUQm2tBkrhpZKbFB8nwc9WUCdhyr7g1uw3KQLWFKmUvjEcMNkZHARA2LuXLiTnwYc",
  "key22": "SCpfFkwgxvcj3FWEuzMaH49FL6e7vayWXYD43nN8Q7vVmhvk3tV6kjD6aipnhJckUK3tiF89LXzSoCviLzMiPay",
  "key23": "4B86CtixLUMj6TfREawrpsmXnskBzbqqkh82P4DEpXj8PNDDyAmU3D9Z2vYGvdYtoNsB8Ya2Dzbi6FezDDehyRVq",
  "key24": "3yT62yFCDaRLXcURadJm4VLrGXKipEENrYgbU51vdwSRmM5DM9PMnCRkVW9w78tW9n2SyK2doTYSPXPGd3GAwbaz",
  "key25": "2fG3AM6GpeEBqxmitKsPho2hVafPCnBcztxTJZqxCbCvrJ5JSBDbhyDCinH3T4cPTYwnmSqd7ALQfRLLpvRtDWca",
  "key26": "4moavSkvBxgovrkCZYnuCYo8Dpzf9936RKhuZ54Li3AARM2zjqKUZxoNxte53dtKpgRBwBZ76amu1ncjm7YsbN9Y",
  "key27": "545T4AnsVh7P51k7ABzFVCyiADD29L9shogwGFZBAaUdKU4w9vzRSdzzSnpbezQ83WeN62WYLjxmScpJwR9TcD1v",
  "key28": "67Yjdb98hWa6sGKDErJBUt1TVjbKr4GP2kw74RqC7AWW6VXtasEnV4cTHHRNbndic3skb5PKvpwgiPFthHeZPghF",
  "key29": "3C6q9x8bqTtF6TBF7Q6kvWm4v3pdsZnkU5zda1Bu54Q8kfRzTY9A4uRVwcF5AVNCcJ8HYSrcwVDbqukqfVR1juKh",
  "key30": "4BgF9uorNai4ix6a8LcPbk5yMcwVcAbSdwQsW36UWrZKvFkpMxxpeUkoDuoyeiKQdw7aS4B8ND4XKv1dChZWagNL",
  "key31": "3hzMeiV8aoZ7FFnQRuYUZtBFC86FzJctVr3oFmtXdCWgad7jnVrbuf8gPFXJVPUeu4G98xNVhs9GN4h3TMLMujRc",
  "key32": "3Cf3Q3sfjLf9x9EcfGQHvNc2RDkvCkbYqAnewP95mt1c1qU8Pfxb8aZPDrHNDK2Lzc6ARBVRCjp3EsDknJffB2gh",
  "key33": "2abGbbGtzJuQ33BXAq9u8wfRr2eLDsWDfkPAvK5C4JygJNCcjqDajquMtkQ8ExUY11ij9uuoyZuLCQsZEMHP6ij9",
  "key34": "mtfTgNTPdoxMHr6AwjQk1X5H1YPZBrsGC1aUmQFXGGNQ4KkqhVEWDyR5kNHkCdjAppgPoQyrr63jjHLpQi1WqUe",
  "key35": "4qnYEVBVS6qHk7uJoCcg6y9JKhQPf8GUpfrzxSeFsgDVLh3WqgepYQ772sE1CgAr6DvuWH7yDPw66mV27VjZUqrX",
  "key36": "srnSmBmtzyVUEk7DqYbNsGxeWZz3YTmnsWrVVLaDno245whNLWsGem4Qmec7f1MPNeuwbKJ5cMmx1zdHnei8yrM",
  "key37": "2YFvUM1eT152Q8DQcWoYZ8RBzYf14yh5Q8DWZp3EkkUas8NFvZzgM4Xnp3ktHXfc3LG1vSbex1ZX98zHpyG1VQ3m",
  "key38": "4JcrH1yCWVBNdQpi9jVkQtsxY8kFJAwaSyHEZLzsHvNEzYEiHGZZBHgmBopidYX9qrMgJxDgcKUAGo15BzwLsQEy",
  "key39": "2Bc3w9FRAsr6L9QJpyKaVnrMM5eXkvmCfjVKszRGMjzEmS3iSYi6G6PU74F8hQyoTArTsBZEC5GENcZjzGGW5tA3",
  "key40": "2kyYyEaVcdYfjQUVxfMpQGeFVdd3KpKCDyenNCjbj27U47nr1k892S6L3WyR3o6KNm5wURTNakDbGHRujpM3ygpQ",
  "key41": "2GdZfjEJuUwQiTogLaLRwZyWJWPNfRwAiJsaEHzPo3uWWH6T9KsvMQeNKJA434esWN1ZMxNdEPgaCke4S3LXywpp",
  "key42": "VCDfTtwoRiuDmfZCgDSLhvZG2fezwi78r9HAayVZJncc1KzoZX7jQs4uv1bkseHunkCA8JQbtNJCpQP5WWBDKtk",
  "key43": "2fgtE2aJhQ2auUZcn74KADxYzMLVxD1nH5wXus9n9ieJatxeYTZdB2q2443J2rgKoE9RZ6jt39snuLs1i8bNHdo6",
  "key44": "2ojBGjewTzfpirb2QfU8VyWnnQCED2KnHkPgaL533fN9gU79KYrGQh1KpwHGR7MjGhY52H9mqfPJD9LDcVUTkWSf"
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

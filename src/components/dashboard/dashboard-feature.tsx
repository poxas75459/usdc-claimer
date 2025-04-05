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
    "5kXMaSu5WvNsYShHWDJ3aC2ABwSY8EuLMNi3PowdJBqvbU9Hi8KUFyGtg44ASDhbTY73D4VRzuzWCAuLns7iD7Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nCRUhnKhUv77h4uBwajHo5zvzWXWhBTxVZ2f8trdtLv8fKHuUp8mtCTK7t84nBynBARc41JuKtieL6obQpPoE6w",
  "key1": "5b3uokRbRaCr8PhLBgQ4zC8Fe5d6VhU9GJ8QMd3isXVDc1zAUTeenTZ5bPH8G1q1wzPPnCvsRh4Hbod5h7TjvMoq",
  "key2": "4J8B99894EDStqwjuejhnuPkjHJGdrK5BFPffmFy5pq25e2MtjAiW9K8tHCaFk7615N1ouoMPZnWXyVP8RTwcNyB",
  "key3": "3nXcqfpiTgeHMRc81SqUakcBws4bywManpnDsXXQ8C2SuSLfaezFwY4gSpPDedC3xcX8aZpxFHjwBdD1RV6JwtUT",
  "key4": "3AX9ZhbBEkgAbxafCpi2JXmK8Qvb8bXUgXpwo22jtqdeDd1qJWCgkP894mMRp9CiiDQ5d35HJLpN5kncgjK3bGua",
  "key5": "365yzJFs7Lq59V4u7pkPuKyw3nEFfvso36ZZ3qPgaUEcem49SXXktrYrHLgLTmyi1HFmNaFfkb5LAvy43Bg1NMq4",
  "key6": "4uShs6n9qaxzamfZ6x7LGPct6kHuPfBQ1JdSAWZWGVpi4nmctMRvFQQLn5tZn9DT6LcDpW36tMJEArZCkqMdVkNk",
  "key7": "aUPoomuXR59mDTjCcjjbM6cfo58nPvgKThXHwY7y8E1CaAPs5er9cG3rvmztGdZhE3gbrHGDYNPhjVHkYde8NS9",
  "key8": "2XTEoDGwmnzNzZWiXQnqSZF2i2GZRNsG987yAgk6RDPH2zyXBGywaHvB8yceWAH3z8NUL49AJbuzSSMKiks2UzQ7",
  "key9": "4zypDnRwswC6HWTBvJ5pSwM5HYe7oiFAyiSH67uZbbt9Vd7qPpPQVrm6WDeQE5UJCQWkEHy2EEbBKWGjh55Hbhpt",
  "key10": "4DkgdzjtgrGfwPpGYcFgmjHzpFQy77eTsfmsGxe2x7Be8TGw4i3brCVpLBznCHhmtC9SLbm3QpZWpgQmfFAhSEGN",
  "key11": "3krtiEprQ7nVJbxyrKj3f1PxxVot6QLNUJjfyGHKAviChHk951WLekeLRLtEvU1sHjwKjUdShUNRRGuxoWMmWU44",
  "key12": "3wFSZg3MiENfv9qeSCQstz2qzTRdPFJeecdriDZh89YBY8Us6BQe74CJKuJeu315JuVzP32sWFaeUG51cUeD2mn9",
  "key13": "5gJyVFdBmo56x4MYhayibseoTk18WE6ZpnMMy8jrEELqTE6UJh66qsz1jkoawnuc2fSZs9X1Z4dn711QArg6NbQ4",
  "key14": "5q6G7DmHFxE4B5JzujKU7XW9zsYf9Lf7QcA2jcvu3KyDRTB9fDg7EK8phrocw1QKnVtjoq93sWuvs5HtQ4m55Sym",
  "key15": "4TKvV3QbRRj95d1rvVu8gVo3X5wDcBQ9AVZS73rWQUmJALVDWGqk1EiEreEaHk6Soofda8dEfMnawntoR9VAjdt1",
  "key16": "5QB64rXbgDRQhxVLJbK4fJk4vTasLXFr661345a1memUrxbJcWuWE9u1de8sSEmrSdjyfmy98xrQ3hSVfCy9rFGT",
  "key17": "brFvLchoMQJ2wL85rAK66JtiEBMYbm1nAoCK9hrW1SwGsn49HEspPCuzevYqCrLVo9UedBckcvQ6r3BKoohZmnd",
  "key18": "4e7Qvaa2L3UC8YdHvxvPioBk86PzignYUKRRHpRCBoSFkH3EVVYRsuemzQDn3mpbA651EctLZqZx4UVbwayU1WGk",
  "key19": "CAzBSX4XDRTgtddjw56w3HZow2xKRhGkWaVM4Eqa1uFRpvCCmLcdu1JMAMfzWGur2B3W2ebJjrcNvHkZ6NJGg54",
  "key20": "3xxmSqdXppaEmYYrjJBf8fKGqmh99L74RAGpJ68aRfzLAj9P7DpAa9KHmfi7eW5FCsY89AsR875Bn5HJLh7JG3sA",
  "key21": "2DoUmLbX474gWdAW9VsbVPiZAx79SEddwgQ53EgydYbwpyNKznu4DJokhft2KbomjVV6u18hdWrwAjrfoA5xYprr",
  "key22": "49H4EkuMov5HLCKAZ2XDgENtKtXYoAuoJgfhjA7Lj4D4a5sSbe7hSSPzx6AqCJ51SpAS4jZ2FKZggABAmLVWqZDC",
  "key23": "22xA2YbCQcTiUQqvQhtag6KQYxfGHzNaDifnYTE1G5BvF2cDhvvavGYC6wc1z1ncvAHrwhX513XLX25zVAX3phjE",
  "key24": "mQpjPAuUQ32FunEsR8BZmV6kZ6aUs3XPs9kK1B4CtLLRxpP8xBoBfgtz2U2HK389pTMnCY1Y2xi58DBgbBLgF4Y",
  "key25": "4xvTUSoopyXYAuBQykyWv4rAJPqbuUmzXQY4sqifwh3bHDFgLH731S7k533qsKPE8NhZpYyWVn1fwhxX3dgPND4E",
  "key26": "36z7VDz2JXmg9tTcoRg7LYfbGqMqGypSHmxoFPugVjJdKHWcNnDbvQAwn97Ajte6H4YFGRjoSFjyShUbkfyZnPGm",
  "key27": "2iiE5LDPQ76fuZKAepyokkqAabqCW4dhCPmpe7bnwQVbv2vQFE7kkcP5B7rJNxA8PZqVKKBUUkS3P67asf8tozh1",
  "key28": "62mr93goziZg9rt5MmUjQ5biqiUsFK4reTCRYRVE2aSoA3REzdomNrvNn9aW7WcLeYa4HH7UbbPF9VpC8jEFdPCo",
  "key29": "1uc7f4jdxrKLh3LEcFv46EzFpd4SvBtsxns7VEfuQP8e7qjhD9bHyULZgpbqydh1oGJ2MwVVrrzg6NrnT1PmCnZ",
  "key30": "5gyyp1QpFaVKKkEdfRXyKfk4QEDQS9Vs8QzRvnXK4C3Dv5MnYKbArfxeK8kjWhq6nLxZeMkRck3Ygt4GD4DXN2DR",
  "key31": "3kXKLV2ZYFF5E15KzFpJzqNFyN3867mSTQZoxsfCpy6TRT5FpHjTEFsBqLcZMejoNojhRvAKbu7SDR9FwLWRfMnq",
  "key32": "aki9gmWcH58db62zTM1gJseJ3qRzXCx4KfY6Q7AN11hSVnoVV9PY8P1G1axJNrfBD6UgnkZSDVNitEry72nv8Au",
  "key33": "4RVpNZoZLoyDukm4XYX7euVU8VZrTb8jS5HLZ6ueq5DcskvZSRUAN7jJeGZqjq3BfALwTvi4ygTwrBoW86tW1tKL",
  "key34": "3paGW6amRF3ZpnQNKHHWBn1iwQG1CApK4oiKwLxLPEe86LY4ENLCsdVKwSiFtqxfbshnzpDSQE2GHjuxD97C2CJi",
  "key35": "5pLwrQQwH5jAgCTVHeyNMxRzjuXZT99AZJrRaUHPUnK8oo6FtwFTjzDeEMJs99t53qPzBTwiRGsNWKkr8jmXAC18",
  "key36": "5nKmirpFGWVcMxBNhu52nCQcPpDuhT2ifPHTLL1sR9rKCQ4SvXpsCEx4iGdc4B5BHxuSTQ1LTrCKPeaFWKdEJQjA",
  "key37": "2qKAwPRaNxrnx2pdxAHwsCjJMzgn78FRMaZHYFi9Ka5rPQapzu7uJG287DD3aramLczJEMb1GgywnhQwi8UzKegp",
  "key38": "2V7Z8WjVnK32Qx8TH7kwPzy2Hwww8Laoj9ZHpf3xV5ZedugXhqHbe4bMWACa6rd5vAUhu37qe9mMMBabwSbXaBYn",
  "key39": "2VLshCWoE7Xi7K9kEnTFeo47NzmqpB1oZitAg3wkxLL6tix18kZbMh43JKiGSfJ9Ei3H3YQRnV561913ciQeBLD8",
  "key40": "4UxXpTCJu2sTzQGCG5sCxk81qK4GkEEN7Eg4m52vecBJszEm4z8Q9Ybw7LcbeTDAijs7Zs9jXzpAaJCLc4xJtkqL",
  "key41": "5tPvD519GHmb1bCqbCUFbbaMLj5z8ECGNSYv62PYg2Ty7hxyrC7ZTdrBjV5FTwr6AVTbrhZ1aFpGaECSbetUC4RL",
  "key42": "2dCCBqFyxD3fFgfmhksZztXqnZ4hvEieW68RGsGVTMWP9PqPXPZkKzRRMDLQJR2br8NcKNRVEtvCzNCd7u598WeU",
  "key43": "2AVtz4qPkyTkeiyDWwafjyzqfCLrpGfSnXD3tvh3ULDm7iePVcZbn7n63hNxfXDJBMBFSciFjMTX3rSdBw5s8XJE",
  "key44": "Q9JrQTfm4DbpiQhMFpLhFFSReE2rHkB23kWZQBmuJFgg4erRGhmYDUveEM7CfZzorGkLHGrV5TX9gHdw9g8NciG",
  "key45": "3JoKXPD5gUSRUmpWwQRgtKjbg4nn97q9vU7Ha2CTmR7LC5o7hvRk6e5cFZtfrGBd2j3mf6N1GJrQ8h1LF9Jjq3CC",
  "key46": "3TnuY3GoP4WNinw3YZTZyXtTQ77LXbWmV5LAun6qyzubXhowKkMQRt8RfktBy3k73Pzcr3aB4p6VMWrz4ABqwDGP"
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

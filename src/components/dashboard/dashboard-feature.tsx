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
    "3piBkxvHJgGgw7EawFiaZKs99HwE7jVePguYv28ZKeXWycoadpkkwyHCmvnKpiGcokKfHPCUzRiakoVSMXRkL5Yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Hzfqrrk7msZjH15grNno7y8MFZ5w8dfPiUzwK8ZFWKpUwpEWTiDB6dV3yP5m6Zx7DfHWqH4pX9CSCrWyZggUYi",
  "key1": "5uLrTZo9X6pPcAK3ZdNXETCszgTAQ8sTPLbKcZaJY16nw5LujaB9BDGKRKgJS4ndLrtAfdXVJvFpnb4dGtST9Vh6",
  "key2": "ESCVBMBXJ3RKQcUFXezKwuYwZRNGAwCg3RabhGqmNz2NQZe7sXgaQHaLo7LJjhJxAZg1Vz6o2KfVXFnKEnL6tYj",
  "key3": "2nWPAWuWoozauaY97cYbWTdtwYZABSJowYA5DdE1YjA1drZizTEFuiWsNdjkPVQYLFLFxTN1cix37LzhpNNiLYNh",
  "key4": "ApF5qDe7CgvXsmBAX6HznGf6TiWYpvFmhwevLQt5CW6HLLCRaR5jjTwGWcVvnhpYt3FhZ2wEBLJo1gQR4HXSwGK",
  "key5": "5Z8xx3FsDHZx9RbnZyswEuaXZDdXx4SXpBAW4dmozQU5rxbBdV3ghDu61SK5hcgPme1Kq9HuekiNBiV9drnJ7PGC",
  "key6": "KkGPoFRnNwHV2aTToJ1w9ryy3Ns1LcWEGBBYv9GKbkYBJzk93DR83RdWeo4yqA4ewAV1uGRAhk6cHpVt3PF7uZD",
  "key7": "42kn4a1r4rnPosnUSbK3DzndxWdx3cukB3ZiuVTjxHVgQVhkLru9RcYkCr8TKr29pPuucDfmsRTs1EvjiuubURjo",
  "key8": "2n7uQcDD2nyUz1LaNz4c44usztp9RfafTGKk5stCCvVP3z5dc32yUbkn6MyPXVh6WwRy8xKvYctndQ61zvLZmQBe",
  "key9": "3FrQA3wADfR37u8aWG86FYuJWVYbpC9fc6chDAEipgwC1WHJiGnzAXrVmUUzZKXD6oQbu1AN6D884uCAFcARNg1Y",
  "key10": "4XckFA3PwU53GTYPrV397LzzYngBv1SZAifdmTAPLwS8rJiW5FQ6saFFv8mSb3aqb9CsxZdqvHWxBq13Fx31MLuk",
  "key11": "2N8hg5zm96TUKznkjsuVWj3GZicKPzDkeaqVm5u7jNYtYj3zknUPQ1FSkhEkfRpfZsRKnY3MDQR9n54HB44oyfCf",
  "key12": "JXhEY7MKuSactL1Vu9R4zrR8LRNtYqYjjBRii13KJZay3NaDw5qMGMjLHPuoKtjQtKdJQhx9GvwWGznz2iiJE1F",
  "key13": "4XgUjuMosQJZezWx2roxoMYBTnD55FzFwxd7inMRqLumWANziFWiJ3NdCb89Mp6AEJ7Bhu67LrQju9dKbqAiDmA2",
  "key14": "2g3Eew1BTTzkHpB19b2w6hSiwaW5vDDkEjreb44DWHFEGh2aTPCcwAqpBYA768ZjhegopaQaTRToxPxh4wJKQF78",
  "key15": "2VNgdf6W9aEdgg2Bs3DVtUvKyhMgeSpCABXZR9JbwvAm3WMaJbtTFDH3QbbKXBSCmPQJAzP1m2v9diyisgbyPXi3",
  "key16": "36dhcbb2WMi5ef8L1pBxSmyFhgnPTUdYCTKhcqSQVW1BH9W8RY1RRJdPt7LwUwUo6n4GV4c8HP1k9Q9ThNLTcM6z",
  "key17": "2SDhUHnjW8fRr45jqxwhm56SPM7hKh3x3UvJ9GkPgmmZJc9WeKzUhWEz4azayDBuTmPMw4P4AmVrViJDPNRCECGc",
  "key18": "5nQdo3PHDu7chp3Rt9aDmpnnmMJYTAFvy8zNpLMfWDbj4CEgDAb7ttS44sfamioPBrSAY3xkduA71No93Qw19bVF",
  "key19": "3zJBSa8c318u7khFemGybFEo6Qu758an6m2RYjHfjyDAc7XpYPmVYN3bRd2Xqbdfpo63d6S4HThyFEBmsSBoC2HE",
  "key20": "58Rt9Z9SXAdTtndVrY9XMD89YtUB93tTJJ3gbdFtfQ7Cytpjjoz6F4wycEvTkebB5Xf9WBmspPhmTEDVrw15p9sx",
  "key21": "4dSMiPdiETLkPmGGCpZFY8RCBTKnMXnPkK37ugRSEKZ7DNJctawD2M4gUqmDCnbXbACBZc9gHTQVPbTCUX1qRXEa",
  "key22": "NNCkeoePebwCfer4F5Wb3cjWqQX9UuQZQKp6w9f4GXeuwUNKCHfTufGLdyXvXPX2CEuSE36mGQk8FDtYMZarqXm",
  "key23": "4Jus5KeB3D664HJU1E4jyaJ99jLkUfj6p2cfEkLKd7fJv6nb9vUUGVJfwygm3XszFq1XEnMz51zMmmdV1ffvGx1P",
  "key24": "LiKnotdUDNpYu3CL2UfqA6YQAzFNspido1ByYZqYdwynY1dngz9iCxo4y43iqyz1toUfLDY6fKJjyQ1tKjy1nZW",
  "key25": "5uuB2Xg2swZsCz14xfPBuErNbfmJhoVdhm1fDJVRa3dk5txd341oyLhpXZt6QUTVBSerPRtv6p5wdRZ4FqCpKwNc",
  "key26": "2tDeNyqceJfQ4khskxqzBee5Y4q2kFAM9D31soQQLYc4ni48XrHjFpnp41veuMWoF7GYZSit16QAjW7CJX6jp3eN",
  "key27": "3rzRCpL8XYLWGvzr5suYfZ1SZAjjhaNYetpQuq9hwC3PykVV8Cm3iXD9oALLqcmxt3mkSQjrHN3HDxPEFqyDrqDg",
  "key28": "3HR5DV73EDoFeDNPEwqQnJ9ui88pES6BYdXFarPeYqZqE7o8oLUceYBgvyJC89L87anZhpAW43Q6CQu58GYhwPgq",
  "key29": "2Kx6VRRAhz3674VQWGRDt7odtqwwDeCLT6M67xGe1jpgooKfvCjAV5JwPmzhVh1aVWYfA2R2BgtAqbWLHj7BMEKq"
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

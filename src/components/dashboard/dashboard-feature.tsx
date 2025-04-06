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
    "3oUxMrpCuBjg6fjjARKXbgCG78uQBtFxRXxhms6CFHgF3y7DXBWojpmEWvwvQjkGEcvKppZBRD3cxjYyaTNdygT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tktwpcd4mgjDTTVyv7QMM993NBNdmA6AVecpDCfrtyePiVacQwBBCa2dK2JJTvy3Uoe3Mnhhk8TR41axTkTYQ4a",
  "key1": "3tRVDeDuxqV3GPpwHQ4xF84tpgH9bM5LziPSWFcg3c8rhUj6CjW3zaMKwCGDHMaSGdZQrafWrcDS7Zxcb1ybHw7z",
  "key2": "2tVAEx1PDhjYtthuovBZ9nuiBZPm8z1YA3vYDaHVZm5bQwXYU4LUnSWAtTFC4MFZTzvSv2nkzuAmj1daEfin4LNY",
  "key3": "2rijzCnTf5sTh97gz8NJrTDFFdMgLRXhy73FBRfTS5MjtyjMoHZF7uBUSsNxmtSN3mNujpBGg3y8G1qjohbqLgJf",
  "key4": "3F5NqBC75ki1VCj8tKxNPYhPE8X216iKgRyF1PYCogMtDeESLDqEEoDFEgogcpQV1G4vLJ1mfUBPaSSpXHvQUsjN",
  "key5": "3CmwicbFPTbDgs84FMtjvLvMUUv5RPLm4822AjVfeBLpjLbjB19oq5m4vK97YLhgrfYZ9Kmwm3vfenTX2yeqSjqW",
  "key6": "5dm24n5iSQqhGJ3Zbbu5Rbp2LmuduhzYyjdsVZ8aGBbAeeXNXVW4mXTAAL5hnHGgfNAfipjyaSsG3Hg7EZsCRbzF",
  "key7": "W4geDjUe62TmQh8mnfbrbfH6VYvXjN2T8LdbmALMWbQXfD5C95itXbt49socTELkkj2YLrrxyw1BnVZreXpb8m4",
  "key8": "3GrwSa3s3dWB8Pq9puKH6YVwCbgxihvdEp3UyXA2jvws6HgSLG81UeN1VLeMzDoJq4oNzYyiKFJhXyYjuJU5gitk",
  "key9": "yvRFRrDjazpC2azV13Bv6Dme7xCi7ig2MVmogDT9BAL6cawzjU5MvTokuwLhscFgDCL32uhttDmfrAZ1HoVT4a4",
  "key10": "rJL9PeLcD15P6RfVu3UNGueQ1K9Ng4h3AKa3pkjtgFybNUMixkurhmotKdYjXZFdHCiC92i7B1NGKSfbdBK6U3G",
  "key11": "zHCPxXKPqfC3K1qpPUE2APePr3uqBBRX4QkiNxHAZVb9m1WDnmN4XZ9xevnH6PFYaSfJXVtrhT6nr7bnKVCu8Rd",
  "key12": "62N9ZmJRYyxutrsD91YWzvdMifTrpPSzhxTXJYbaDHzHPi8kbYcr2kFnDXrEdRfKUcjxvhC5tGQjUg75jHsAKVSR",
  "key13": "3EBNS6oP8w3Y65LMmMUEvCHufirGRr6dB8kMHAqVcVD1FHGw8hQtaTFDuMAJPHfn8vq3WQtmqh3VoBdwGCRPz87h",
  "key14": "5y1yDAJCvWjktJrKNiwXQRR36HhaGHEE58C9xGXcmGzzA1v4RqtaAK7RNqZ8e6ZwJedUsBP9kUUVmx7tubGzpftM",
  "key15": "32ifBDErn1Q18FA5t1AweijA9zWAXgCY7NeoQEzYr5DPtndhYNYnGGwxzr7FZX8vzcHcUF2UKeFuHYZAWwvHxMis",
  "key16": "53uqXe6gyQ8X8Db1v6meHndj2GMAQWhav4vcc7fL7HxYFcEbd9YFDTkt1NZp9u1zUQ4vM1KesFNE1N5HaKTJtxqp",
  "key17": "2dDJF3YuNBWepJEnbtJVoftuEVCKyNE2fuBd6JSdbJwtfhB85doGHQETifVCdCRM7fxAy5A9kXJwtbaHb52gYiLE",
  "key18": "ZGfEbxbH5tfamyH8RCS4x21pp7ikdhw9hPPA27i8ueCFqo1q2DqhfaLU5BYTMkL9w4RuNZtQUWjp1jPpDPNFbGU",
  "key19": "47hGZR57EVhtRySK24nqdq5mjArCUKbAUyPBY8poqJVhjp7KLM2gtXGm4QbyKm3y2Jy6ZoZ35uVepJdCK9sedUxE",
  "key20": "3P1yNX1N5HuQQdZ3QDyLvV2cqYGtg2BrEuXMwyqwmsCtUND3gY4Xw6S8goskuBAjucTyKHt8nDwFz58zzhEoJfp2",
  "key21": "XVT7dEn2JLffG6maCzpAS6p5br7hGL99ucE9CQWUpFLkEPnFWB3daF5JVYgddTpUvy4VR5g7Hwr4DWQCK8Mozke",
  "key22": "H8AXduYUJqeWLa5DDCKGRM1SeDHaaU4RzTo4TykWy1tbtRffsqHR8SwkcP9E5GJCKcmtxiQTntNvsrxehBpUZ38",
  "key23": "2hKmZ2U2ryPw36zYEcto5avRTFqUM9CoBnkA1BzrMjmsR7tvhfNBKKgr9rhSyWtqPa5xcjdxcrCTVGPZvA457hUF",
  "key24": "28bAC2J7uqagshPtF6J8eQ9KD69saxTE3it9HUCM5de1qG5zy9zyS3wiWDKZ6torwkn6z5a2bBVKvvYxGHtsz8yA",
  "key25": "27KNWWkYatmzFR1Y5DTfpgXJHaFu3Zw1WUMMj7a7DofM7ZUjbipT25ZGLbPwPh2c3hGBH3PgYjBeSYN6T9b6qRcE",
  "key26": "58wE28RXeq35ct8Aujpd5KbZGhVXMH1dzJF9aVy2it1wa6xzrQHMiBXX4Pz5p278uoBWbtGBJGy4bnM5Lj91YE44",
  "key27": "3YULFzKbgvPamqHyUNNnwmZcWac76AkdPAvsmavya4eGvy1zzA2dGnVSXjvByiwoAFxdrV7tumbevoHQ19SXXCvK"
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

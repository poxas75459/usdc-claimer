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
    "4uP8VaD1zA9XdCwtDj26bvyeJRRq78F7y4CYrPKCGfoRS8WDCrvqxudV7kKz2a1CrFnXw4rucfNkjLp2XVRAk1vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zoersmsotaVy46LaAe5wJwhV1FBPGE5hEPDKhBezpWsvWHxqCXDRjWgYVCoaiAacEMSo42sKxAzLTFRgVEXg8j9",
  "key1": "42cVKpwfyVBHcAnnALmCBu76ZiVfcvq1yiXnrHtU9dMHhnMxFrd52mtxuc3ju7HheFgw1spdADazx8iQwvBUoRwF",
  "key2": "3mvMD2JCefFdvC2wTGFZjTVb4Vpr7vPcNZFfvdrGdGsKS3TXpNGbbvdvydtEaLBivvgj69ig6Ug6gh9TJQqVPvKV",
  "key3": "4YT4m1EMqjS7iu29bn2igkxoh64NuSrfmhK3LvgvPSfiE5kPDjw6iosnqq6sRqkqwFnwXohghiPnqVaw78FuA6qZ",
  "key4": "3CupktJhoHYGckD4BELEhNnCLHXiTj7TRPAVM6UbxzZyg6YEjSzjauhju6QmVwwUAqJQFxdAdfrvGPVSferF67Wt",
  "key5": "22RkoEgk8hrfHbvaagqkXzDLtLH3AcTP47uJJkRBPd2vR3cGEkXTNkFyHpmpa72LMUohpwFniEh1QdK9xJiZamzr",
  "key6": "2668UMMbQ6Wt29hgyprjLsuoP7nENpxok8CSG7HBpgZxu3oy9nRUvaVqd6JkqdvymNEmhKZFCC5uGJgp7FZ1rBvK",
  "key7": "4vURFLg4x7jpJewDrsP68GANGnTkjHP1T2fQ517iuaP9HtoHPE6E1wuAUDAnypmoSipxKGZAJmY37Beh9XLq812c",
  "key8": "56hwSZuhau8SfxbtCkw7DCpBWQvRYAbhBwV1YKNYixHveF19QybV28sBgLaQYJUgq49cFZUJncMavJWxG95UXnFE",
  "key9": "59DgxvLe3r5FkVzdxf3CipwokWErmSgkJRPeqvzQHhkXVt1rQr8tVvWCdXUmfK7mVJ1vxcoWWypQXNFNZECBLJfj",
  "key10": "3dA9eyTk9SnZs31j2ZU2gzSwJhzJrwLgQtvBT6dcCX94z62HwD64EHKaPz3WpKUvpVq8np16go8g5d6VeovWdZhp",
  "key11": "57g3mxM9SWg8pF4CrvAgKYf275K2z14ZrZmhc1AkKV5zs5uucYxVN6mWFrWCSEUdCvwamii9RRFFtLJ3Nsh6Zeof",
  "key12": "57ZWwCjHka5pyH7PVLGs1F4X6ECCE6FiYzwFS5bDpEBimL6dx2aWJyviu1zi9nDdADuV6NHHC1tjbUWsZZTiSjPV",
  "key13": "2ogKf72H7tTJooMiREvGquibioBEUVinW93sCd8XE5c1mLSWUirqnfCY9UzzPSAFcpMN6wYxo5i5xCbM3obkeUzn",
  "key14": "2Dze3r77oHooff1EZcVoBnHNayAVHvjk5oDTyU3CtpGPtdykeEMM8ZhSXFxZGPmwC34qyvtrNXpvW29pi2C8HcS1",
  "key15": "2zowkv6wU3zFpKc1suDta6UA4Z3wcPixAgrRMKa8Qopava8RqxbsrjZ1v4TKcfhEbodpywYFhVKYVe2sNPk4jafg",
  "key16": "3EQTwUXrZTc5c9KEpcUwE3U5YKwe7ESjFjxqy1wts9HNQWYDC8GudkywQbSTNs8MwTQLR3uPw3kaJzQpAovbRNSR",
  "key17": "3rW7gUQZ2WnJrszsA6ErmA4RDdeAwYacj9Ursyk3rC78etmJrypKN8aK4WeqJCuSMDHwS6zunw9fjXcQSWFkCxQQ",
  "key18": "5g1yMNKrdU2zQSXkh9x5ibjMk9xtMhzAnfaRdwU1rz1nZ5iQjxaqwrrevdwP5AuCW7k6rtqJoYpP4MeJk7xDjqPk",
  "key19": "cWz16UvgK4FjkP6bYsCUweyGdjUVYZpSMEWuVBrshx7eBFHxAJR8ZRTdgGUoRc4UqcXTVAF7BUaBhEkgpwNy4Up",
  "key20": "PxUcDHiDsjUgyr9ELNi2qM6LqnkadgqRXE8H6ReeFZY1WezxJjccPBXNnyPVPSwLDvWQV8ZwYCZJgdXDv4JVG6C",
  "key21": "3ZCMoxYhK6o6m1DqGe8zEqDwud45rbzG6BkfAscMjdsAsWX5J99WjGKxSVUnS2ffEbbhMfR1eVXX7poh3iTfFFn5",
  "key22": "2TiJn7Ag6kKqZozq5KTzSQqVDoRbdtRv6ghco39zEPED7wWpidZUgzt9ZR9T1MqXam6D8W1NmSukQrfZBKneimGA",
  "key23": "4fpYxKqkexraYZ68VhkQvV1m6V8vGquFdkjrt8MvpHgGGWoBLvK6SJxn8qYLNYSGBU5eBn8Qh3Dk3UqdSkLbEoXE",
  "key24": "m9XXeur3EqA3wke1YdvwQUCrf3pKXqiTWzAkYCvAActbMXPZHvk17rrN2sR764FxotxSz2v63R34yMeiybQbNTw",
  "key25": "2qD1UpvzvMEA2gsXv5VREDT6eKPEbuNUmeE2uJfcTpxfJKZG9pnHKRC3fuVcy8UAGhBbnLxxwbnemuFwfhZDhyRW"
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

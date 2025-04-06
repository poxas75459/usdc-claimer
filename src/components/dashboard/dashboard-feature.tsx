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
    "5G3jpd5RM496xYQDviQvTNrCzEUUeGpPc4dxbdLqk9DVYTT3D1y6nZat2K5GvFMRqbjw2XTzpX4ts5p5qPqUVarf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3midz6fbTtRyj6rsTs4ip7eVnT6UeJnoD3DAcQ2j3jQXcTXbcgMvpWS5Y46ckzQJbEWpbtWL5jH7W6eB4kcGRH6U",
  "key1": "3vLzcNocMztEFPu2T3YgArFUFmZwm9fCKznCo3DQQoM7uwcNjM22AfLLVyxvSdTDsvE28WPELevpuDdeZJYpHECw",
  "key2": "5henrFuqqNtE2X79z8RAm2VgkpKGB1aAaQeGnAXJxqkqFVbanoeyVdV9G1s5GbgyH6xcDuT5fWnooB3tJzkXJVTa",
  "key3": "qYDvnFzkPer9pnicRGFbrVBz9jz2Tg2sDs9N5EtrzBkXCHravXtruCb3PViSuTgRZBiM63NM2aJ6KcRbztZEzjZ",
  "key4": "2Nt5jauQZLN3aTgAToaB6W5QMHe6AHEnh8kjzegeR8dwrPcFUNxKPNBXWpDE23KJxeH3ykJNdZ7rBuFnhGoEmyCz",
  "key5": "4m966bUT1qvM7A7D8xoK8Bzc8q5cLQgcCoK4D9S4cdrtbRfb6xbwuKz9446p1T92Hpu4r11FUgZf9b6LZMrUmfNx",
  "key6": "TPXy3obyrc9JVksKA7G9osG9GhrYGCEvKV5JNTcQhMiB78f4pp5yjVNPgsMdQk2wbxHZFFYpXB9cA9f3uokrLMU",
  "key7": "AxikhRBmMkVCdedE12FmcoXB7uMT1sJwTwcYDg3kv9KhLFmS4HcNm2VeuW72TfpPVCBFTMLZ1bFaSBqB2Nf4PrP",
  "key8": "5TNYjWBemYLmXPcDQCz4ebEMhrW8VgVsrkYo67LtDG97ky1d4tjxmyB5V8pY2q4gverxBvtzM9PLfwB3dr3cJShD",
  "key9": "4aywLQimsoCRiKjAty2QWodGKv9w6cdMrxoZaxnAbCfFDy8sgvAjet8x6F7VKxj2ADZnoSAjxHSiu634SUmUSDGY",
  "key10": "5qeJ6Uen5qQgb38im9kj7nzyhze8muknmdxLCHi4Rjqp5aUA2k7CMdkVEScwfkKs8K5sA5CUYuCgZtbwvFAahEWZ",
  "key11": "A88NyWTa9GWooPUyULdW6SoHAm5FzttF3Qs8sCYCMa5a9cj4jeTuETDg6h6xTJddbAPg2239FY38ByZm63YpczM",
  "key12": "m9rxHW2SSV6e35GChWGusiAy3jexwQykxWeNMJUrNCPqrFbpubWtpbmkHfVN1U7STkj8ErQaFa1s9RP5JviCvmM",
  "key13": "3LxM3udWqt4CguFMWpEde7YMPXfi5Eh22FptWhhNEWxdFYfLTdC9Xg8yzfmVvS9jVUvbynw4nzbQvLNE8SAQcV5L",
  "key14": "2QVDvZpCYkWvW6QztSKPx2ThUaCJMfbcUX8WUJjknJi7xn7u7wnoA4q99Dmxht2PpnJvoksVmPM1zip1MrXuvp9j",
  "key15": "4Ptx1BPQFYNY3yzg5KaQfDWYTaAoLUz86hYvUGVGFSsfoy3vaeob1STgWnvjfMDpsRRy6hYz8ZwSTcyqb5CCdNSp",
  "key16": "XopCqiTV3Moz1oYmBFiQCfvwzQVwKEF6ebUA5L44eZSWLkhnzdppHc1Sq5CZJCmH6kWEgfH6h3GQ15qHboyKeMN",
  "key17": "4rukDXMt2xLczzSYMFKZAbyRqB8SkLVNDK2wGZBxoyKCW9mqADf4Ei7LMohCX714etLaYeBzJUHtEoemxs5GL8pY",
  "key18": "ywWvfoJtx23nPW8d3Ege2NkUadFV7Jxk2g1ffCKW5MHRhBz4x8Q934XMaJ52fpsQP3F696kykaF2hg3pTFiveFP",
  "key19": "4B27smjhKpCYpZHiPohsVXJXFP13aKSUnbXPq1pJwXyrPvv1udcW7P565oUPMaCHNui3oCYQCbPaHkaEuE4DSEkk",
  "key20": "5xubzmbNP6dD21Mc59D2thvRZFWtUcotDm79V8XmT5js24f9jwxNUox3RKFt75c3LD8j1ZrqNDmTUg1QBL3Q52dK",
  "key21": "2PhcnFS2QwgnJg7mPuhxkxvPMBwuAzKqiyBmvYknXp2KjcygYjuq6pZ54WsWDgMobKQgFgD4CxK3Y5EceBQwP1HE",
  "key22": "up8PpvF95fh5tQ5CrzEhiZiX4jwMyXAMFH62YhhgMpXKgfw3PtcPWTjSLD1EQJL1EsTcAEEJ2SBrUZ4XBE27s2k",
  "key23": "uEuXeDJq4gDaWGHvtjfMzawuzVK7d7sMidPy7MRBj61UxtNH8AyUPbCreyLjGzX9NKQ1eN34qWMXy59N84p2Emu",
  "key24": "2aW8uTdDjtcMwY6LVSoz5HKyWW5i1MesYWMG7vYw8T2xHwjLqkr34xY3T3nhUHrF8yBRNneKAbrD8CXn3JLUchbS",
  "key25": "2eKwCBxu3KGFHUEGYuTdabHzF3EF55uirDiFedXF2PWSUZgNFboCt7Duzu1AGWtFR7X2p37kLMV3ZFXXYzQ5RKrx",
  "key26": "4n6sJHywWMyK1a762VRdSdEug5dHnM6XZh26pU3m7fTjdmR57WGcpJWv1o3LT3ZfDrdVJPN1nZFNf47cpJorTAB6",
  "key27": "4gwt1XBfAX3frmn3w5TyqaMaoqaaqh4pKPG5ws8tGDbhtxXR2aUtHTzxUGUwuEFsT4SUzhMBhzNqxtbZnUbnruUo",
  "key28": "4LUYwyDth7NUUpKon9qwKbuABjEBChdU2qoVQi4wAsEkHQRA1o8rX3LgE4J2FCjRT7u7aZnysRZ8KHKGXufHEZwN",
  "key29": "3hfXfTxNNY3CZNZLp3pECrkGzaso6iY78KkTkPdogMxpnd1RwUhJEdQmi5fcgEbK4sjURNx5CdhjCTjFenT7r9TS"
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

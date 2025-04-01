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
    "4UwAaZPTZFQoJaWmStkV3p6ECVNYP4aLYu39Cxzm1x78fp43PVxWTLaaYyRH7nbibzXuN9Zy3DDRso8NnCW5LAov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zVZLvYRCSxCPxQCJPGKEiw1rfC7R9P5ntdK14qohhRhKMQe2pqrQs34Q38PpJey673W4J2ih2bAmd9U91sKPLFL",
  "key1": "4T5ifLQMzmz6kFPBgSGZENw9ahmXw5QHgbNsdehrQTRaocuvwkmY54x6ZsSTLwQ7fyKyKUpchkqEtWMthuysJoV5",
  "key2": "32TMQBtWFrUYD29UxhqAzBR6eXpsz8cVmcSD4dEgvs4kyqjH2YbUmm57TvnH8YgtcLZua2TD34NtJ8qEAHsJG1RY",
  "key3": "5g2bgJ7toQmNketrAtXwukXcCimxbLyE1wnP3uZDeDvjUu7b8YSHsUpgNSCRtZsn7TR7223LP6dJ7WzHcVht4ALu",
  "key4": "4vSE1RsyvN5c3JzoSA8AJjZnEPqRRwaDFRxa7NszCf79RJtxqzPvZbVQdPGt918LjfxWsDgnoxA1uGJrm9WdGRbP",
  "key5": "3oFFVk1cP1iqsZDxdcM4WyDTBkpfNhENnxK9jeU1SXZ2d49E67WdWSbDG9bVwewCfbVEJF4TUrmWtynMkQJCZLvB",
  "key6": "55LbYvPrhfGoam8JNzBP5e9hNuS13NAad9eeos7EjmvEdDAXk3HH6GmjAbYhnE5K8aKtrB6nuJHaUXzs3YwU2ZLA",
  "key7": "vmRwmvu1BgkiMa1HCWU3s8xMijYbpnSCXyEVNE6AY3VtDET1FRkgSnSMdFfjrUWLbjYgDtpgobd1Cv43uAF22K6",
  "key8": "4px3E6thaUxfrdVPTY4ksWBaPzWf7rm3ZdXA6QA85HpbCCzSx819pwWdTvtMLvYQ6DvFk8KZUEEZXFWcgB4KZj35",
  "key9": "2cTXX162YNnYsu1vSupScHVtmEPgN4joaiBScBz3xk8NsDTzZeaHAyJKomWdKLwwwJarvrVey6iU8XyA8DNvVVok",
  "key10": "3zNo8b4kzuJAz4n5jWXAJXqbpBTt1SFgXdTcmCk7QpSbbVqXDmED43tcSgGByxo2KUBgAz2Cb6kTYythdvZ4Pbby",
  "key11": "3UKmcrqRxM4LUppNwAmnoxiXsohzjESz8uBMbHzRtGyHoKVXgscGzNVBZ4d58fo6CAEupDVKWjiBbyPEaE82kPTp",
  "key12": "49N4qbCaLe8jfWiUZ4nZQ5f3tY3VzoL2eedWo2RCAwuBWWDx8A9FRCJMHdGkP9zhf8uji4bgzHdqdf6AJRchVVKF",
  "key13": "56NxFJokde2HTwVeJ8bu1V2fejhXgYgWtdWnB9iX6bV5aUgZui8eAwiTHpKU6E1S1BEbnxaMgZbnEv2WZ6Vx27Ku",
  "key14": "Gb1Xg8f8pZSx3E1ggCudAE4piZ13ujJWRFiz5TEWLCdHiXzVZuJoaLJQqb6rSWBHSv4wz9nHC4vyReVoA31Gjav",
  "key15": "2x6gRUTE2v9g5KndakC5wn6rMZQnfrsEqbsU8XJysYXF9fCb9qB3UtDCEnzEi2oU7bWJ1JBf86vz8Vhr3BBPBY8z",
  "key16": "h71DTGqqY9ZtqbFSSUGCwdJWVNVQjb82n7QwL2ZkyBTJjk47w2LHMVGe4KHkpn4X1kh47zxsZkmXtDPNkhDWQMe",
  "key17": "5mMZ7Dk4kMFTHAhaKuhjAMJRPLJVGKsz267zooLjKEBKsfZTTT924xzoPNuiUy1ijtBdQTGfUBrC3xt7YBDAvEzt",
  "key18": "2CpBgwonvtvBUC95Ba7wKuNxAHS6k7qq7jzuRwmH8NNQNVHspRJtZjESNCrLjh24ok3LikUxKmxnDG28gQFyAGvf",
  "key19": "2cxVutMTAbgwGGZXeBGjJ5gP1tfRLkRde5GnUWWN7hBrUYTGwavfo1XBFVfX3aAbL1JdhEtm4a9uLsM2VSvdM2ty",
  "key20": "22sUGviK8qNGdvCNjDwzLxox6roxB9ctiz4TsuAP5zDtSmfRkvsv8tCdX3dQ9XPjmfWm6P6yC3soJi4zNzLg5PUT",
  "key21": "mKSGtV1BvtJcd1ff3Qbw68DkHZnfMTJQHLyFtyz8HnQpvbZQRVKR68oEY4Z8edwy9kA8mQeh8eeHH8SBfo4gW1w",
  "key22": "3NMyZh935kM6rraX2s2u6NgQ7fpLQQbYBMRRqbaBTopoYfM9CTqM82zsP3xVdut4UqmSEXbm58ZNiJYBW3QF4E9e",
  "key23": "WNCpMEQ7R3XUjjaRyyXCqyeM2b5mMVTJCGoJZE28XLdro6bxhvcEZ3MrokKpGxwPHh3guMwRQH5gTVWcoikZWmM",
  "key24": "3LfgEgiYryycBjgmFPvuwpd9SZT1zjhXYrcTNksJk986jsbv4KhjkwFz5NKqX5yCJWADm3Vagq71PhEnRZ9SM9ci",
  "key25": "4U1NDXRyGAje8jLMEqe76Y2tXvmamXngA1rXbpeATDMzCEdkdyrLUU9CBp4qAmsCUVZtnJpYgCRW3hBwQbxzoFce",
  "key26": "46YtnxSw2mPPTQyChNyit4H6Y9knhEDRCJSsrehABLtShH4qqCgb4y3ing3uKnTwZaGByZpJh8VA7MLBFTeb8opW",
  "key27": "3w3uzqx1fsXchRf2evdFqzC3Hv7UFskZre4VTW9KULGzwFhpvH3D8binDBWTi8fufNi3TXQWfkVkatjPKXoDwcDv",
  "key28": "4A5Wr26vpFngDw532GCzX18QCMsnrRdHtkr25kdnvM9xDEB3iVJELSAxsNg6DyQ6cP6qrWNsjNVA64nuShLpKTaZ",
  "key29": "2M8ZJ6Byop8qv95srUUcBdGHKEQbaJWinLoCnCkD1mCxjwA62La3twYuFfRuhSWZ2DWVzWY2Gh9fRJW4mX6t2He7",
  "key30": "5QiJa3kUMj7KtDj21t2paSRai8vGGY8EwKLEcRsrBwpYjs36KAHYajDre56Jqp48PZLEBq2Aa9rkoafkbGSaKoaD",
  "key31": "TfmnRgBdqzHtsRVz9tjufyDUQVEZJ8ttanmzjARyAD7TGjKDnM5KCfretzsmxJZvhkvURLNNw2nLDUJouULSy2g",
  "key32": "QbZVV5FA77F8WLurwWURzrUAgp5fyesMAj46fhbQqfdExUmSvuMp9RipdWJpnGVqRGPJkL44pVa7X9Z1i6ufTWq",
  "key33": "KbbJaJDnKnuTHwnSZZfng7imLpYry3gSNEvxPYU7uHvnNe2h5NfQdL8eX9Hmk3A2of76kZ6wehbQGR4Zdkv6GrN",
  "key34": "4uQwaMxGWd5h7CNT798BvRwVBfZwGcQyrKNvgoeLSMGK16t4EsvgMfmNHy6xyEbRGxZzH7mxman3TQuoYEDvwBJz",
  "key35": "df5nQKSk3vh8XPUwTpLS6kPe5sQoMh6RgaUtQMqBzPvcgvcPcRD2WRgNtTv6n2aZYb2bjXAcU9LNCfRrYdDAiru"
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

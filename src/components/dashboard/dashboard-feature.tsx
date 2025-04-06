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
    "TvuLpQqUiH5RiaJnPbvDsrY1a5owPBWffkZ7auuYYQeVhw2tHqoEY5qAC5D2Sp5UmbJCp2EAQuRLpvMWJkCxgRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJz79AMXiePw2gpitdrNb6oRcLnBm7AJgjvB44yd2m4dLs4zJNnKUyvzJnVuqNfh7sxicVZ5nkQB6XrR8fibKUX",
  "key1": "5XTb8MNjbcw6fUFpDx1142NpTBXBFzWdSkR76c4xtxNZwujSX19nUoWPq47PnCtwttkkDGfQVbZBxMpU93qYi2Bm",
  "key2": "5HsFF1tvn9eZcdKYLSxs792VJog4iccL9xWVPtTcTmZn2nsaduW6W6U4NBrXFS8yG8ymH9HgfiREFiirhFaVr6Qx",
  "key3": "34PA4Me3VsckecAdXtwgLvmxa6DoKN6BRJGYN1YupDZqnfikRNaZTAN9Hr5vwm3qXQ1AzsaL82GP1ZDmeRX6KPgC",
  "key4": "3izcveM7TgnJDxj9WrS66sxC6fqu5p5jk9fhdAd6yhUVNn95Ddn9mUgjpJhMUe8kCxWy4aDLKsbj6eFGkzMTouvy",
  "key5": "4iLgSn1qVVB8zUQxmKiTza6DBmtKw6cVgB2vJnh72R26KSnUxXmt2xgjcdrd8c6W1XKSvJBBev1SSCcKhn1emqAm",
  "key6": "4hQaw5WGo8hCRUbdanbiUkLHXfKsLXCkSeBqGxLzdfcFw1LVrvfzmy2KWCmgREkD9xkRz9hnqbcktrrCN8XiDM5i",
  "key7": "2iqmBJ2wpXQrWKpjkC9rB4773q3VxXFTzoMYLR8oqdkVTEdQ7y3hYhLEtrDzyMnFFQcjy2kYXnUHs2zkwFu8bMCJ",
  "key8": "3jJfbKznLoubLbh6YDgUXT1bJbiWEqZ3P7CuLqHSmQfiZ7CkYfAD3LwYpgt6s7L7mUsnYhWyfm71LmQwvfrBEdvp",
  "key9": "2pMDCdUVu3j7MDmHyLtfUE5WXs6uz6Bg3xfvpjpeRQ8m1Te5V2CR1xMsRNogBx8LiKzGFZwVeSSp7ECJHngRfcJW",
  "key10": "wRbdf7RR9L8di4mNDvgDcmdsUiy9ZLst9EibwY8EZi6LTk6ecMWTbUZDJyofBctG6xfsXbGiLDveLxMNxTpPcAb",
  "key11": "2zDbm15VbcUcowmNZaWsUveVYWiMjXbLBdm289bJBaw2oTUw9ay3RHCXcMzkTyd5LXJYc8FJwqZywoz1biBWGUcn",
  "key12": "5nAaVmyWnisYdPtbGGxB2mCoQ5vMtAHD4neG35GFjC7nq6vJbhkyUdjbbp9aRQePp2oAXWeAQS4rhMitgeNc9MK7",
  "key13": "4DBMGAz7GUYqSUNFqiJbA1pcytTUEerDSifEuFPjj7tKFh477z3D4BpjQZqRyDTsAtFJnwPBkKfRJKoWtfBfDDsi",
  "key14": "3H9hmPQBc26r17LtTopcTdCdhMWDXpmRvny9gSxQaqCf7FjLfjxpYdQ3m9E3fbV1rYUFXT5WbwSaJNFHMutRDXYB",
  "key15": "4yfbiUFsHWyPr1uy49UPmxQfZ5zATCs36Lrc6Zai5UxkvE3y21hpWJ3qY8E7jKXV4s8A1nYsEmVuPwQvjSSJoEan",
  "key16": "57Gm12X2zzJwgKe3XsYascDKvVyJVvF4gZRQCW52nxRkBacafBS8RPq8EceDEAnuECZa2mQ3BrpHpiZMogjJ6eD6",
  "key17": "4DAq4E1mR8BWNVsbLHaJoQSMf44pbBM7rznA3stFAyQ3Z9VTfyjrysPHkoQX1yY8oyjGZF5meZypQ1jPZ5UfZP4c",
  "key18": "3DhvcqJxymqYBV8Txfbo3qwry9cpXX1QiGJ2Li3XnAGYRRydnaDkPS67p5Rfx3twa4Wre6fj5YVWNQdSDinsCx2f",
  "key19": "2G8xXR7tLDJpewWrbnXbjGmvQCUyomAkSMEmkLrpMUwjDb2BLcd9NLfcX4AfJ7mW5ED4T2pBxSi3usd3RXwLL8Zm",
  "key20": "5KnnuVtJN6uou3yRLh5xNb1puFz6LbaV7uUfvWcXjpsQzAWP9RAzQQ4bBZqqmFWBwdPECwVX7QuLmxzQoRUT5YAh",
  "key21": "5mqBA9HBEzTEEDeVduZ8fRxyPpanUybKeeyrGY6nYzczPa2gP4WNPVYSLUQhqM3VNXVVXzs8hxEC2MPsrAoWeevo",
  "key22": "56HyWkjMnaK5Vd1w2wyBd7MFQpCw8NieBaRjMGVxZinpcKiPSm2dYtNeYZh2Ex4BwxxKVX9zs6LzWcN6FXXVA9J9",
  "key23": "4B3gcEhrCVm5ChBwAbs3kn6zkBiXzoGRz9KKV6yxFu466BAPWvNQuCr74462qptP8xLJNrxJjmKEJmwngkvsGh8B",
  "key24": "2hMaL7smYPzqYpzZQnjDULVH6ZDREXx9Sbc3NMiuQ7o9kVUfEQMSVyhiAwCiSYWh6f8zj9ZsjYXQ6gjqe2E6XvgV",
  "key25": "3K7iPFFosBAZn1PxBz5VWzZp5mDfV6Ace1YpL72GNXwrHB5qN93dFXRUocMA3vyBYsNK4hBmth8p3BGMJ66FYpNf",
  "key26": "2ZgY4Pf2Ya3zHjFKMtofEd2SEu3C9KCeJEfJXQPxV8UWgPmieeUFVP55Y1TYc18FoDxMjsgQqsaVD2hsNdWdZbDc",
  "key27": "2YsZTLYMmC5kcCTixgpyEKg96CoXb1zAU8ax4L1KgsRwhVJyJUpHJojnR4rHjULJMpTmKrghVNdDA8EqwnwJDQm9",
  "key28": "5LW9B3PLn58Yf2krRPAeEkU9yBN9ATkQJ6qnACmnXHPzbceLcjQZwzarEfg8tTvEExNfrHhDr5apfXRJydfK1qkR",
  "key29": "2VFchyDyaSdCyCk2DWVa2TYVsHhKjcwAdwirWScUthydw2gwZq3wCNRoxJHUkozf294mGfXXiBfuMd57S3A7mdN5",
  "key30": "kAgK4CGfhykHmFdsjUZZ4KTRwPax6BXGNtvvwYXttzX81DjMUsQPh3quy3NDQMMUsoMeopF82ncnjgmKVENvBzq",
  "key31": "2XQ9fRkp41dayikcHc3qjFo5Dn7VgXY8kXbYWH6NYyi7eYx3GxrSCGrsNTVtVwCyvyJC9RGE9Bvvwcwe7BeMjn7K",
  "key32": "62nBUSf9ocAG8n3jYbA43Ybf3gDG1H7k5A5237CrCB388Mnc379M2jPqbonfpnqZrvjiKcwnFzJWaW4HZLSfZtBW",
  "key33": "4SwtgAyiGQEtqpmQi3ojLjcTb4YkQmrnN9RRRBnooWF9k2UVHgcVweRLqeyuk2vA7roh3ccNE3Uxfmjefuq77fBj",
  "key34": "4TmmkaLMUEsoU7YPb9zGMbudsAzrzgB4GUnqv1C3fdw288yoZRs1kHATPmdfG6E4ZFi1dxMJ8VcYHL65ALW4KDqs",
  "key35": "3cKVaDvFZithydaEu61PXqUVH1ndeDFWoFZjkJuzkHffRU6NFAgvZozpZDSMXP8kQK8nYVjWRWBH1XmNPJPzDtXL",
  "key36": "2kwBXGzThnFw2AxXYMnpWBDeqgkM8oC5G4uWxAt3LvKw9p6chtKjCpuAbJt3zdkxATnYaoXLdcNuC99ZK5h1uDAD",
  "key37": "jM75wLNoRJx47cdsauFgBH7SSsZcVXsnjpkZG7UU9AKa3KH8bBCabK4DyCTTZsKJmntNhx4ouBbCH9qYqBoKnzs",
  "key38": "5BvcS6i4ADUxykcko2357WzfC5NFbs9yrYT1R38myksmRE1Tiv1jYwsnqUwqGQhj7fLBjnt6RkRVvdgNKe8w9BNJ",
  "key39": "5h45HnjPniEzPnhm6tj4QAuVHuYaqgsDrtGVJqMp46LEH3FZXDM3UUJNGv6hoUz1eUkqNgDWm87gGiNeU5bf4tyB",
  "key40": "xbuFhmTLdGhXoupr2ZAGF2HV6etRqksrhAYLHkWHTJkRghAKCH6QNW4ZKpL5J2VMwKGg5QgHmyaDVdn5yk7vH3T",
  "key41": "3w8xjG1PgMvXdN3yaA1J3JjJQzTnvfCdRUt3324V8jdfwbckVZhLNkuPmSNgsqBEWrfkxkWZf9jhGseto3w83UMh",
  "key42": "3fz4xbzeLXrfkSYGkCKgSn8675vMaa19ViYHkEf4HiriWwjapUEcpzAuBVP97wSYV5jQUsxYdqG62VSoWLFSRktu",
  "key43": "4KdAYFryZd2iWCBW6YawPpYRGWMpAvLQC782EU6Df5nZQPMptrZJrG5FPo7aYPJk55LXJM7uHikNaiRpgtfy9nXB"
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

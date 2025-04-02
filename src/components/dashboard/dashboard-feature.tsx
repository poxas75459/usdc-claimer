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
    "2r3QeKZttygbzd4V3G8VsjVAMFZhhK7vZXyYCUpAXdg8Kz97usqtEXnTs5uvG4PhGw8xVv1V2pSwah4hCY2KYWYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NQxcDmmi6PXT3HGkAEhV82wSn4Vh7W7XrvzHUUmktVepN3yuxnwNdDnsAsn5eBZgzMiveNWHjpq3TqyLYsqhtxV",
  "key1": "4pHnyq7jSQKWVNrX8AnF7FeaEqjwqZ79Cf3p2jZHGUpu4SfqzMpmSRy2E8tUDuR86N6BSeTNjKZeQDQ6MnvUD7vZ",
  "key2": "5jtYT8AzLrqwtbDK9gbu7F2eAAwZwaKkRdUoJGfB52p1ASiTPcRPs9mGA9W9AnXPb6PCQhYWLNmXAzm6gMHfLdk4",
  "key3": "2GCxREBaFj3keSbTVEdShyMFq9QLfqePV82wgX1J8xahPSc4Qx82o1RDj3RRxvvo4peZhwcbNT19tDE6BYeV8ZH6",
  "key4": "2NzpRnXqujhNLiqoukjEF1xBrUQxqb9P4i4r9rkE7r4cHm15MTDBWANFsEcPboRjxWSyULwaycXU1PXuD1MLkPYZ",
  "key5": "5oYCYvwxJgh7HzVB19u7L1w61B4yVVa6h7mtiBZ7Vb66KACb3mFViTvWCk33fQVRtrRzZyzhTj4GQDvksSu1aomd",
  "key6": "2fL3nBBR1rRaX5uMjnJxbkHgv4jd7BQUw9DQK9wHaU9k2xKm8dBXGnpF4hbxPUCxcdqWZctJD3wnQNdne8jj6xSa",
  "key7": "2c9xZFNiZhJFH2iyP4cTpQxAqVnNkeuEy9JxDcYRepVbmz8CEB2HqfX2xc6fmRLLSoQ7G4P4exCudwPqpM8bHdTu",
  "key8": "9JzYe5BfzQrRXrcCXByz1dJDZtrQrttMdAr21tX4P2X9yQax1ZYrL6aQhkRt7ubSKFKSVWwZ4rNHa6nWSfvWXa1",
  "key9": "4ds29eKLoiCdhm9tXgfX5eVApHCCixs2W1iQu754Mp6q2Jr9ftMGWJGT43fMN886f7d1SLpKSy1HmRu1NbcnV6CW",
  "key10": "3A7E3HWUsVhxLL8nSL3zzoLWEjJVNcUkhk3c9rPa9tx2xrqukR5V8JMutwX7NHXHqrjGwqh3uXKu2FNgAYUmeuy8",
  "key11": "V7MeZdgoTAzQyVVAcbRLv4ZjB2LSPHc3xQgUaFgXe4ik3uc3HZ7QV8fKBi673gxVunUqE4iXEWf8CjctGLAm8JD",
  "key12": "5TeJb1hwvC3i5J4oF3u8zF1tpRMNL3zMFBcezsxBZ69yE95hBHQX7PwzMtwjFmZu9XYLpDBCRf7uJyuf4J4PJvkd",
  "key13": "3PD721NoF7PEkfgFHZpDwqqJo5dapZkLDe9LH2rnz4W16QWYpgp3t9EMMmb1FvNDpRRqgPcuGzrKXnrVDywFPHWd",
  "key14": "21SYqWXA25S7dkx6apHyadZW2CVEHcKbQcWrNVxdsFEFvwzkSBAPuN9LtiAuwntgPYw3aPHngWDGmhSqQbqykGcn",
  "key15": "2y3gHCNAdVYeNkvEL376EbLEt3RUffXeFehwJ31FYYyWcfrkAfWLb28JCujoMFEfEtsJLCAn5jS3wPSNNGSywS5i",
  "key16": "2N4fKXpz3HqKSBCUqZAFF6BHgQrsLauVxRrY7VSgHvXR5DSbxzsuLEebufJCpYjSo61pYGxPqD7MEsj6dbfXJvBf",
  "key17": "28XLfdCeSkASEem1Mupd54PvBoGN88BnNbVNJnQrMHpSs4SXQbjEP4GBmvVHuL6pLEUqaRrwXAH5M848E7cyEebE",
  "key18": "3LJriEvrnyKg422eaHsYo2cotstnGmDUXhMYFHVJqhoWBXJNearZL1dbcmj3u7Jt2oTz8xczDRyFNCrmajo1Fg4Z",
  "key19": "3Pvw5aCkGP6L9FmiLCyA958JvWbVWFaaE1FHiYUioXomYLP2uPHRn4xF37wo3PMMQxK2Ca5cnfESvdZdK3MzCECP",
  "key20": "2bjJfnE8r4tLHUERYH1d4GR5cJtEwgRkSqLAdNLt7cC2nXCSez2WGRZBo8uENL9ZTMBJzSCQ5oS6kxGUhSaruVes",
  "key21": "371Ehd62tx9U6wptkXPs1RyR8urJKiuXLbTztLKSLXToE897ygDBLqUkP6f7Tv8KWao6efAEDnWw8AGfy3Ci2d2H",
  "key22": "674KQvm4cjKa6zGMjuU3rvC53MpkKDwutTcwReTtSbsqHDKJf98pbGRet9TtejkR5g75uT39rXcmcpQgTfZX9i4h",
  "key23": "3NLw91zT4HEjRBaSUamow7o6oGvePhKvMRVX1S6HWxqMTgMoesfD6RkoaYSCjvisxeLpm3dM8xuLfLB8HiZXKB3C",
  "key24": "4tdGSA6BTdUY6gKegQxYZzwTB6tpa3Jbn2VVsdhdd1q5n7yfM7AsU3URDBw5uXbsqMY3oNNQpxao4hwd1yi6iN12",
  "key25": "3LkGC4JvnUwyt54L4aabedsGNMeS4sPnZ3zjhcfY1T1uQhQ6FSdAwQC6rWEUmJjgYTUAMFysXqbR1zo4DHD62hfu",
  "key26": "4Sf21wzM9uLuGwCp75UtGNmshgf8go2ESEmik6knbwVTFUfdFvofGjFAS6wVWsPpZ58RXvBdNwEVKL3zKc2J2yRy",
  "key27": "jNvHccyqTNwww66wXPRNpA5w3TfiMjrCCErnnJfbzJtuPY9QX4kMg6dM7URQq1uWrTQjLpZhx4cZAARqqf3Tvn2",
  "key28": "5XGpMXZ9hUEcarVMwmyFEdBosMcjevPgK2FtVfq6JWSkJbwP8GfwhgAcxckMRUZJX8kr4HedtW1WhNqipuKUheca",
  "key29": "2xmfyRh4UVh4G4J6gH6JHcwE3LuQbP3M9dyVcvoAkxeetd2qYhve1Ssz5Yh63dqYzWd6mWyk1gUNU7pDwuYWTun6",
  "key30": "5gJX1TE4AsnTX59oNV3CDamAPXZU6eEijJPMricEiXT5kAfxWPHorhfNG8FTNgtsTStKJmfjcZHuxBVU3owWFXhd",
  "key31": "2BCF36XZPCNnnV42sriLmnY59zWW2pfog35QhXBPZsaYAN2TVt7TpDnKv8duekakSKfeJt8rhEPA4MNwztejmJZ1",
  "key32": "2FYFF4J1Es7nzoyVzRjaGzKmyhfeZeVnLZNR1jkkKqd3mAwoGvzvTgfndtHj5VhzG6ziGYBP4JACmTHK6Tb7BKki",
  "key33": "3SdY65gTw4ukM34zy6z393XBuN5bVZppHJmTAT4B9ummC2299xgYv99be4Y7Nrqq2KyYaPnLUPYTr6Rjt6KYDLyD",
  "key34": "5yeK9GsWVks2iy8f54Ee4PFzEAfNU3C4DbK6iK1w15YhEEi5dR3gDCZ66mF9Ugpd6wVzTLjCfY3HNbjawgbfc649",
  "key35": "5skpKwgWUBdN5721s3F8RiKRfbA5ZkAL1V7ZTNwe9ShuhH4BVHv8S6JLAaVipvvt4rUK3tvrKxqy7xTYRP6whFeR",
  "key36": "58TH7Ng6mUDkWy2SwD2KA4swKGoc7GoDx589umEbffaRvtGoNFkcGcjRP8oZu3pGsxwzoeSCB7ZFBKeJbv8Kkroa",
  "key37": "5VJxnijqqucTXr4UvZuwBdHsWbeQgmZCbpdykoX2SARwaQDTyc5aMjVnWx7ys29zexQLM9pWPKNUUCVJ2D1agxmg",
  "key38": "Vq5P4VUJmrosmPN1y5j7MQW6UncBYvaT8d64MCw3qLLDKMkvjHVhTxi5JKdgaJPNNPpZWjJE686u9nWa982jSBn",
  "key39": "3SraryYwj8QiHvm7YYcapK8KJ1yykoBohQuNDeFCfjxds2Ls6rghuLGkuDinXh9ca9DwKvinsnCTcJt4E5FdSmdv",
  "key40": "3YYK1RV5TKnB41VyxDLnWhQGikJ2DpBLHhvm6nEnCnaDsm2tKGDPoMtTwT6NcQnVPDs9HynF2oQysMykbqpUuYS8",
  "key41": "5jvYMqp3UuUzU4b4m7vQkFzSWp3XmDfmYe4ryiCybACnkn7Zz6ivuKbWpJp4KMA6HqbZRN5q2fq35tNwQResZoGo",
  "key42": "4tmywnx3UmiZP1ySqtMNyyb7Cmk7oeuAc4mEBz9DNMvEjBSFxqH2ikDGAH2QBcZcFpFXJxEYxiBTbHU7xSw9qQ7Z",
  "key43": "SdYZWWApQgXhHYYv8fJvrjPw7UYLFNT6XXEvWHSKSy4oL716VLzpRTVH6MR2c1tqDaCDET8xJ3S2VCRQvtwrjGQ",
  "key44": "2NzBptPs93HpSD4Ln3pULyuUeuF34k6f9Zh5mkpCPfViwt8nbFZ4PaCJiZyg6H4vNq8pxd83isXfitWNMXE4NiB2"
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

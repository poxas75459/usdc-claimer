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
    "5NeUXvVNFM6NF2TgpsccizAijnUhgbLsF24RNoskZRtzq1KM9S6SpmNQWRH9Rb3Ckuz2P5hEyUms35TZC3aLEGzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XY3hMTZvNfseB6ut9RJsg1SgjR35Yn6CD14Qoq3fyjWh9UPcKrNaYMYEvdLjAXUxurhuceaFkftL6wfurQ6HiSB",
  "key1": "4sthekp4RnnFX2dBHxyHG9Gzxjm73LB2HadYuw1ABe94ahVBKvRwMwKgLrpBGCkKBcLcvssfL6fY4Lv7Dr8sB4kh",
  "key2": "5taov1UZYs7zftz3sKNcdACASTsg7p3gbfLBD7LyYcLcqnxccHkqUyXbtiPf2uCMgoNFLhmTWTCgeykf6xQ3dDat",
  "key3": "2uGXbMAFDnkLTEmVtfuJvTavJaHydjveFJ4vdiXtD85Y1gemC98pS4fGfKQ26Dk4Ug583RRAwL867xeM5qtaey7T",
  "key4": "2DC2DS8sAakcYpwmDei3VmsJnHBEhxQD7SvjN8x5BfE4DdMZg1jsZKxfk2s1bRcDNfR7UWEX4Awg1Wajw3PZ9Hyn",
  "key5": "5v3SiPMm9u1vcE1uVCUScNYPepio1T5KCR5427V6FCAtAZMD5cJemzUNeq6V6u3p9KSPYSavC8CA6A4a3QXWSZ2H",
  "key6": "q8mwXRgpQnnhRKswGEN4B3RmUiDpx4QsEZKesF8KUEt2gkfSN6o7pxCPSa62TPoZEbgEcsuncBhemCJZFzBp4Vp",
  "key7": "4fYwSe7B5N6TGRkZRejBPjRsD6d4X8k4yTbXf3yoUtphdeRsPTezULVr526NW3JQWBqHbNYgigZT71yP852ySWMd",
  "key8": "35wVPSUurUMqv3wf8Mcp9mawWBj9nDaZLgqtWmfmuSy5BEzyi2duXfmFGhnMDiUNg5NSDjRyfuEcBxdJxrPayUvz",
  "key9": "24CK3ZkJLJeTRQ14ds5sMWTfze9RSFZtmp9YCBCrkk5CYosNvE4sMNqMWVMjwGLdinA5EssRUaEvUgZH2MYsgodr",
  "key10": "VRhokLzZXkK9NjPQt1CLBmCwk8nz5SaNg26inmrfpAHpARM8BVAXUVP1TYQ7LhnCubPSR4imSm11EDj8SNrQFuJ",
  "key11": "FFP7C6qu3VK1aYT2dWpvRrhbdxudt7ik67hVUw9AaMZfuu1NXKrg4YUWXk6yhbQpjydqgeQxJhia1ujbV2Fhto5",
  "key12": "3yPNfzFdjQzKwEGRHVSsTwTYNAwDPZqckm5XwtNEswRU7oW6r1Hmyu4T6Ain32FST1n3hyFnNXWNsJpCADiqc3cM",
  "key13": "4XNNpE8pEXe4ZdVfPq2i5DzGWEzCFETsb7EKb7ejer1m1JKHMmvAKTbtQLEEabeXX3k6gpHZ76ApnXN1MAokiBSM",
  "key14": "512rWkGEyzDy2LBV6NnZeBvjmHKfu8KKVuoCgkVv4TCaRZ7PXH5RfHSv5yFh4E5WTSpzGQWv8DgMK8kRu73WKVtX",
  "key15": "LzjdDpbwdZvYqi1ZogGNYx7fbSps4ofnAEFFEgi6XRMg5uVwNuF7giuNotQUeQJZfcrbbSBUL7hh1F5Y4Cbp1Lr",
  "key16": "yoGS2sD75HiZDKH4SpajfcRHsiDMLys46Lbkqh4NSxCDQvP9oXFQ8GmcGpFDRQMMpWiuGjyYqtQzxchhr2GvpEd",
  "key17": "52gw54EWfoEVPnNeAUECasgTeSkFTvcyuXLMWGVq2YTHwSXgeY5XrhHjXW9f9kAddEYUvaysEBHBzdJW62pWM3Jp",
  "key18": "9zp3y5JKwwSdaaRJy3y6UYSn94zrGXjh8C3h1QSYbpTmsZq8NCTAziHDeTj95ukNLSMVeVecFV6B6yEjpZK3DC6",
  "key19": "37brDw1w8LVRu2PY3AEqMCA9GzLERZxmfgcNoi4Ps2Y1jq4Gowtwz6hCCoQG2Xx52aTEZDYqgEXG5XXo29spjF81",
  "key20": "4fPRCoK8fmiePyfd6dEeRE6p68LjK3WeS1CJz3qXuV3MYfYz6p8SyU2AY1jm9uJHzUEySGzZCvrGeEZztp8YK1M6",
  "key21": "28j8AgaKNp9gAXJmdYCxzZQeSNozEiAbweZrwzk7RoNth3dwXj5R5krJKBGHSGhTS5ZdeLGH8ShVk8DMtz1DmjHx",
  "key22": "EG71QgdcnNhHdDTS2xVUbzX5DvSQUJmJZWhdFakW5tFrV6zxbj3mU6EFwM5YHzFLjeBdvgkM7TMQyEt3H59St2N",
  "key23": "38WJMcEHRrvNUqCuMav5sYwVf2X62FDPjCpz7LCNoLN5ktZsFV9KsLrTwmqNTFeKWu84wsNv5EsZZg95sEh3Pqng",
  "key24": "4Ve6jPvFW1QL4fjhsSCJyBnYymbkeYieTEZLmh18Vq8gCCf5bGVwGJnG39WuxV1waEsqDdBgjzUe5e8RXaT7bGbW",
  "key25": "4ibovpK8yNKkxacYxZGy2kzJoNvpJBE36WLsWZDc7M3FsR5vyjXCU8mKw2zv9Wime5ncHfQ2ZQ38bwcAjVxazdhK",
  "key26": "5axoMTdLEQNogzKyAp252qCvBZq6puDkJdXR4eJtueuqqTqGpHFB9fRa2vL1UuT1agpAhN5uVeZUf1Hf1FFWdzQs",
  "key27": "2Pcrdcc42NZWxqUkQdmLvnJgH9D5gvCAuuj55kw5y2FsWVDxJoRmrx763eZCmGYVPyH9BQh87gsgBuZfmDsfG3WK",
  "key28": "tA91BgsHSTucY74SAyPzZ9BqTmXNmQwTGhMVgPTJSZEnneAxYhA94uqaEGCQvL5dN7e1uTk7N8Pfr1FXwqdyU7C",
  "key29": "3FCDhVPEPBbvtMHXwFtnXFyVH31XySgcCH8fduBJiRSrCmCkzuQp1hC4SNxseCP4Wkk5B97R9JdT89ocT7kzkkMD",
  "key30": "5xwS2D6ewJJWsTz5hyDF1anQRwrdqYHJgqLbEEyhek1VD7qbyh8eY8UmMpVSErUjEZ6uJbcZBQnG1VtvpNMXWQ4v",
  "key31": "2BhdYgL5N9SRt5qPRsWyuzETm8DegmaA9j6KB6FiBt1Bcxvi1pjffsHswyGq9sE84brAVgDJdCPmnyVvyBJRk9Kn",
  "key32": "4dPKD4gJLe5k4MPEyZm6wFFo3Czx4EaiikBuLRTqaYnJcRkWS9uJNtDusHXctHWogLeWtWM337CJoXiuYje6PtCw",
  "key33": "4DhPrS5RQjQV4Ts5FiX83M7j7exbvyGVGFhaiym1WaGUiUKzSK8zMzgksfWbovgFHRFY3fBQ2YJZrbEUJSUxoLb9",
  "key34": "54TtwajvV23Z2yDMpFFoAqhoppEtvfbZWDRYdFc8SWbEcmqZvjHVjQxhCGvczLpJbWPyqHUqC8z5uo7eBVY7jSyW",
  "key35": "fndP9tj8QkoYoZuLVHxtfg2L9N4GpG7EXt7mukDXB7Biz1pdJzc8Y622N3VkFAs7XDnTj4BB71rch5VsoGFPaDk",
  "key36": "3k41gensfCB8np1NJ7TJsgWXLMRWvDL8nRgFdzmQt7nERoaqc58zBbD2yhT6kGmyn3YuKk1BmjxqoLzCtP2RqHoN",
  "key37": "3d3qhqpCCENw74ufHwsMZGE7nazdaSze9df4nR9TNSmmZBVcsevtuY9sWbiqXp2hTggoaWYLGJkDjtn64Dd7hAgi",
  "key38": "2Hpcu5pEn7ayysJVBBHjzYht6Rv2myaaCXkq9Vc5Ncr2BV6LGnQiE198quRLqvRU1gKXKzZbdimSxX2JtsmcqVbz",
  "key39": "3oWqKAk39bLC7ci2N7y83DuqLddEDd4obKv41HjySPFrzra4YiawbLNRNpai8B5sf3uFv6paLKnjmpQPHxFxmfZ5",
  "key40": "5PAhJ1BWDLHpu4Dzcdz7Bmfcnk5WSMo7hXuw878QCkxoc4fYRZSMryngSrcPZhgrPSbetcysttLKwT4jC8TGiiwk",
  "key41": "31vCxzkQNdBvgCaYVoWNQ68HW6jfzmSGxTr26nrx1BSFAVY5dncrDuCphwLSKD6GFAgaAR9VbzkAoNqHg7Jz3p3w",
  "key42": "2XaZU5fSw7aa7FMWyhDnuPeYdtTjacUPjpd8QSewKB8RBfimBpUPK2EXwZH7V3XxMwU3ytMHwA8KQLgZpRfTjZkb"
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

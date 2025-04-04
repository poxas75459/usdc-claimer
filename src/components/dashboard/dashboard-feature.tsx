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
    "2aKu26xrGoxthQx34iwFnN3xaAtudbVWBwDayrup96yYtYK756WRiksBGuZ3j8gHQ71QotE4gdofbkEEjo51LV4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fpaaMqvUtSbQZuiLJ6N9F26x5SrLBci6fzYqviKamTct8hHVg7apxorke5sUK81ZJXrPtmYuoQAuB3wyy1itXeQ",
  "key1": "3eBCUaPV5H2WdGgPDASVKyKxtHjCSNW6CoJxdKwPtkKxFAZSF6tKyepmrenyUDK3YLTzDJTn7x8TPpN7qbtkPSdK",
  "key2": "HUwp3RTu3uQVK26a6sx1vTxHqVfAYDH6w3zFGChzRNczxUMDZBvj19UewqJTxjtp9ahmaz2f8cHBhvsJmi5uGTW",
  "key3": "3FKLZHk2KTELLSoygjAh9ehdWp6wtfG15HPr9qo6FhCM1CUJt3jy8bMZpmY5nj3pN2Sig7r63XpJCyaDCeSmAZS5",
  "key4": "58aP8R7gV9NCyGnUtsrEwxmgT3Nfv4hdrEe2xQfcmKJubzc9uKn6R8AB7YULACG3VB7L6sgKKWVYmSZYJdW5gQXY",
  "key5": "4j2E4G64XDqJSrF4C2gFrKfqiLELsiMUHBgbvPKxFF4JK4j6Kectxrjmtekp5g5EHEwhvpoUuB5ehe1ekZyAaevt",
  "key6": "2vF5yMwBBK5zKv6tUsz5HneS1znt6Ls5TcACTfdzuhRdvnpyUTh4Jw3ERQHNykmpYQXG3uY52SMH5AVDs3M4jiEq",
  "key7": "2EX6yKBLegqHbVafT85Toa5JGLdVy1WHr2DUntmeojFZcDpfhdLBtyArt4q5H2zjLwvpkoZ1y7Z4Db5MgiXaVQh5",
  "key8": "3qqQ83G8ZZx3JmUEwvZuc3JipbnBcdReRLf6Sa3uZ5t4Yy14vLSHxke7RFYVurSbqDqiARs8NNWzrA5cXCRhe7LM",
  "key9": "5xqeuk5iceDdCT64or6LFdqYUSHwMzaqWamAFA2p4ohYo8xp3yBEMdoLf7Vgk8aM4wqqpPnpsCvZTPP8M151dKSM",
  "key10": "4kuvqJH7ZdQRBBThEnENDJHJ6YtdW181BLXa3wipp8jCLaAcYLXVccf5UxoVho7YdNxrVWBhaQnJ6Eewy5HFwAe9",
  "key11": "2LuzsPb19aAwKhEV5h7S1yZfA5Bhk8tq2qHucX8UQu3QHeqp4mFnviEHr4caBPhzHqLDbBcTfDHn77e4TkSokQ1Y",
  "key12": "4PV5DuYFJ2WQp6uJMeMoyh1FRdDixrtag5Wr4EXuvuSDUqY2arTsoWkUhMKKj5FocHWTixMnwaWb45sKEmPgvDX",
  "key13": "44nQrUTYaofWxFceWGkqCuJcJjX1KS28Y9bVq8WLAd5snsdgxMYrhWDkG7Wu3tapXq4uorSh4EG5iXD9wLGf9nqY",
  "key14": "KR8ziHKivn5rZCRS8WVSyX11ZbtaCGDJpgjyXDfy1TnBaGmfV1HfV7knGa429YEoCW9U4kV3aeLc9AS2M5o9NkF",
  "key15": "5dHhZ8G1GJ4KMAY5PYQGeVHBQb2EusjyecqDCsZFrNtd89cWzES4CsMi82yizEHkMYh25S5jepiiVu9WZqVa4JEG",
  "key16": "62bAj7gs8Dwnv9WHV1EzH8Zv4qPDPLcZaRWvwyuxF5Wb9nAErL7UoGwfxWyiGPpmEo9s3tQCbRF874CSPRPDmVsS",
  "key17": "5jk3VBkBF1jxAWqtqiDMpHKuzLzGfmmpYMZ94SmZVnzZ6pAnNv5szVq5yP5AnmVkdJ4io3mypTCW4gtTK6b8rvmL",
  "key18": "2JVR7RVoTdGtjzp6kyeJK68yNAn9Pc43GjqkJhEzRMijEj8utPRrdWyqbzJ9u7Pf9gLC67p6ARHxz77ymSthedmH",
  "key19": "AQQsG8SrShiDXATuyZ5YP1xzDtqUV82hegkGGv3mTymcxa94a5EsjB24K9wkD6NnW7aB8f7qkvLJ8mky6FP7aX1",
  "key20": "4gsWwAyk9FgiYQoV5dgGT3un4CgGMWtx7EgAEPK6Qh7FC68apEdPk9TJm7vAs7nTzaZmZuAFRYwLinaNuEt99qfr",
  "key21": "2P4U2mHzLHk1NL4XGVkPq9xtT6Qhx9xevSt4XUUwC5J2URHwBT89Rp1TuXJZDjVvJmypdLxs3KHKF3DLma3DR2tX",
  "key22": "4yqpoVCNfnxFGSQ1ZDyPKA7db9uJ2CUPBVRocVRAArwA4VaQ17AXuQkZopjGXvaBc3AigzqqzL31VeNhevqFwbPT",
  "key23": "3PZgghfJJxKd5LgpXht1MFG4odb8xFFdxjxAYy1rKTyAsGQ3CeQToqazu9EcgB9zeai9JZBvuVFzJ67ZRKBzW5ZU",
  "key24": "5o1k2omKQWMCwY9uACcgpPiN5556WoSaCn1XjcaUH7a5TcMJ4dm4s1rE7mcH7HNkkgkJDza2BycJj1z4HVAF2PTt",
  "key25": "2RUF5AukJbgXBTc1yeMMF4DYaLahtLhL43Ukgh2RP9U4ixB8ShnuTNcMbJhtAMwmX5iyp7xAdheVB5AW1XeR5R4r",
  "key26": "2rTzaQtRuhPUZvgem8wsPd75iAgK16HWuneFgob1TwETC43fi3Ck3xZT24ykZY7Uk1GCAfCbbY4eDfcbeTssUU5v",
  "key27": "4n8JfagVmQxVVHziBA61o1AbD7CL9kqUzsu9Jcpy2vhDr3FRmkBLFEEtzmPNursfYPxzEh9T3on59DdYt1FuwUQh",
  "key28": "3C1poRocvr2ZGDjtgvxyKL2HcLT5uBzWSJZP9DUXoGDfXXBBaLBXPq7veWzYKQt7jsWBVX14MenDEoPjqAD3FoW4",
  "key29": "xZdgZDHmf1Tmpcopw5Jdv4ro3RAbjieMzrZJqnU3yz2Hh1oh7vBL6ioya7DnjgySSH8ZNP4XeWQADGhwMpC9eYY",
  "key30": "47iNBbfjjR8zN3oS2VHLyqBycBBUHL4vjeqhvbb9ca4VN86zjjkWdTtWoaYGNa9hBWYisb4sT3CzBBBXeGh5bkgL",
  "key31": "3MtW91QUL7pXXedniHKXPeng2mnvvrepJsBhXzqb5ZPELDFXdkzMun3yotLjfJN3Wm6QrB3SoLeizi3QwktbX4j",
  "key32": "4hVJe9TQyDP2wj2cU5aL5fpW4EUJwje6XpfgZE5HdY9MxcS4TJ9WxNhMyqcZiJkYExC7iSEi6dWxMwUb8fNG6LQu",
  "key33": "4ERLLGSDjTMpdugF194HsSpV2M9eE7SnzMGMWwy3A8ShgvDqPvJSyS4T66pvWHasGvAbyyrbdUswzGkS2wkJfvtB",
  "key34": "5A8RehrnFyjdQU1WC8jsRe2FS8FiGPBoTpu8w47xE6vdNqSJ7AG1ByQhLAB4WbpNEe1uSc8imyoXE8m6MRceeh3s",
  "key35": "679dryg2a2TwDv5e2C5dH9TZAkFPbEX1YkpkWNzivo8ZuTuLS4uWV4GGRGyKC8RYxXgpvnp76ySnxCY2sW2vqgf5",
  "key36": "4RZiKC4cijXRoQJhLHRiqosVjVu4phd8FQWnFfLZzdbKajBLPfDPs4vLa2VtbGnQffwS2jZeD5ueae9iw1U4W4zL",
  "key37": "51HhdCUDMfpJqAaw5iyRiztJMxNhWrca5s3UhmqzRpb6Yj95kdwWN5wZjrjuRqGMTja6NB41pSp9BLxycNToQvaY",
  "key38": "3dfmzsaKCafREBvFGEjNXkQu7QZNCsm1qRsYbwSkNppuUqdcMTvnaDXrXkZmmbJ3DT6zpuQadE2TXj4GoqaxE2De",
  "key39": "4uiyxJGkYKCeX6BxEMbcWq7HyhzQ7Terwp3U3ynmayLEJgUzo1pbrdrrZsrUKsKCS4yzVjBaBv46bCUjPx7T3Spa",
  "key40": "4qK7ZNK4owVwZJqn15n2RL8jj1HuLfYrJ7cK8kvQwH4LBDNTME9NhJKmHMyN1zHbn2sG1hmbmLyrpuMUyU8qq8CN",
  "key41": "4VAdqzQBUX6qVPbyb36Aa1rBSPyzvcC7a7TXaCsjHy4qstfXGeD99tSjG17zcE4Hs7UkygoSApQG1bEizD3qkkFJ",
  "key42": "5V1QfYkkvJkdwHubDHx2zi7PGhfh9HZddKN2K7qvLhHqfp3NFAPzZkapgBYjtDStshsjgq58q43SJcfR1DPkgbGr"
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

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
    "2ENGC6mr7RkbPvQ9hDud9SrqzLgmLwur4HDeXPFQEsvEyNPRBhERTZf7iNjVcXGQs21cv84yQrJ7o51itSPyUPJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gNbvCsvyyGLrjCF8A9VmQ8NUMh7TSXPRudrjjVKVA7ZLxNZrTBYRXDuf6hAuWB9BtFqcnPXuNzHUHTY2oPRuyR3",
  "key1": "5RF6jHsnzay5dBSqBQeCvXwXs7WDyKEMZfKDStZXKk4Yj8EAWYCeahemjz3nkS1fwXF9Bau4qTCvaz1vTaUgbb6Y",
  "key2": "449wYkUdxoQzqCN6CCdYHMGai9QjxV1gEQoA21Kpx4QshGwZsvxK3FjHHRrzQwQRvVfBDyB1R4uGxx2L8w7NKPYm",
  "key3": "38baJXyBjeqcutKbYww5QdoTdzEkBoXxrwj4eFeeVmU4wDHnEdntGYeaBgZX37qsanoXHz51MWwwnpQe2MRgNdcW",
  "key4": "4DRCkz1PFkeN85A9faYbTieCz3iHDyZqRDa4SbQVgaMUPiyb5sX344h2WTdvkfrU3j9r7bWYay8bHhHyv62LBPq3",
  "key5": "5YZoPXCiSFhu4Qcf9ZX7JLa4xwbpLeHekSFAraxuh3masCFq1GPsg6JpF3Qd4ps8ftB6Tp9ifsjRUFkexwFWeWbj",
  "key6": "4Z59cbDwQPRMyAk8aEiNc5x5CztbZJFhe315SR2do4NEfZQ1PBMD4NMF8SuhAidr5bTru85hbBKUAfkZLSZvqZYD",
  "key7": "4DfqGDDKgC5H7QqJiFN3J9Wq54LKQBsMrsrDkuyMkTg5GCqnBHmUZHcwu6jAXZohbGpdFBF8E8Gq1cYwQtEKd2p6",
  "key8": "5QyKHf4ojFtq3gexVMaXnRStnCUm43pr3h2ehthHkEi8PBdNeaiPPRRRSdUytnarNdRxMSEAtTvsimyp1endxDNk",
  "key9": "4yyzHbCsmrbSxNh8oyaE4XT63At45a8gA6aKzhmHWajNZo8VjC3MY4kss5yM29Y4o7AhLek9dWKSVHfxKRCXBGAQ",
  "key10": "2UUGeRZHNYPxACaqRQf1FXSgXUhKWL7UWLvvk3LJFHM9o5JrjeEwq1cfrP7ZJyTPskZhUedszxZy5CXXY7VgBKez",
  "key11": "2qWzw1AKPWmU8zS6B3F4Z16xxL9t5wXiyjCsaqPQzGctTqTkcLp6a6D8MrzjFTEZvsCUx522d47iLPewxDD2ftYd",
  "key12": "4aARFU9sbKvLEaPzp3R3gzL7hbHX9SMnK54De7CyKcjeFHb7MmG2WZDYKKACUFrSfYEGpLt9tJV5JgYmS7hf2MTL",
  "key13": "2N39C5ntLGE8NwVLzFxvgfGuqpkfDdPHBoeQdTwNLCPSZKQnZXHekXCkreGD7aPHeEwm5RB9rs1pdMDeAyHHjj7M",
  "key14": "5XY22XPQt1LmxVCqSEwkExRLabd3Tjx6SWAJ8HqkwfawjPSGgyAAHAKLmX2ZqLrMi8eVy2cck4gMzDdU6dLnEovM",
  "key15": "2whpG2knqncYn9QwMNwaZD41AcMkdwEUY6vTc9vH8233Yg9G9oNMDEkr9iuj9bRnLyTkfQznjgzmufUgCL7BZpci",
  "key16": "4bK7Br5SCvtFXVs81ZNcSCiMST9jPJrEZ43VTQtVnjnigXZBM5ahywD3ge2X1Bz28RJtJaXUps7HuHqkRjc1634j",
  "key17": "wY6FkTsgmgsrceS6GpBfQkBZ9SxZh52wwsjpPP3QzGxVLwyFZqH6uZyM1JEqoMEYFeJ72tjdwtr6BbVk5wd2kh4",
  "key18": "2cB828spHgL1xeLa5QG8mL8Gw586JtnNcL2Pa6znXeogr83jQVFoMDV6jZXNx6tjnSvWPUEXULqz26PmbMP3ZpCG",
  "key19": "jQ9EBA2ZXvSbTnhFnxM1cipTddCLfqN9m4zYsfRFYxLNwSK1kLXwYumh4Auv5uCgiRibcgtTLkaAJTmoDD9mtNf",
  "key20": "5ek1UWeDKY8i4x3s7x1pUgLF5SMqqXpKPKLNhaoR9RM4yjjz7DkiTN2pWheiruKTjhRf1bRBYE4Kn5NVbsGGDCPu",
  "key21": "4qAxsiXXoafd9FBJpexhEtq45AiUJghtGyCvWTkLj8u1UxMbQnfEjvWNi5LTHyZR2W1wdZcYmQFtD7LFtNGogmAe",
  "key22": "5AhFjmEDBhWWyoH3U1yajT2NH9sFTCHSd8ZGxKP8r9yJgQQJiUzTNZCmrCGWN1FxFBpzeiQfotMAya7auj4xxjrh",
  "key23": "45DfwM9fZ56P48XeTxDSdF8HfaQCe1abVs85M44bHJVAUzkeeqD3P4E6Z7oYrYbMmeBN4bhTZ8DZ7bAa4NHC8Rbc",
  "key24": "44voQNBtFgqB98EP4ADNZMxM7fz1xqpb4rU28jjEwFkT7Q7RmKBpD79ALxRH3Nsq8eS3bVVP7ATTZMFQz1drN7VA",
  "key25": "FnCMPjdombRxf1p6JGqEhBgarofjh6131LUgUpiu3bozNRqC1ppA4Sqh2nqq2UnZisbKdRsXP7TPWwW9gbne7Kj",
  "key26": "5JUkmqsseWqSKM4hN5251mfMtH8qyK1ge4wEwNm9MMUFR5wP1aWVg1XroR8cFTFH49TSR4rr6t4So77xU57eNnvj",
  "key27": "4x65CWxQCuxwF2rjAdNLDbgmSpuf85wiqfcH7wgqojT7He6dov2uCMWvzkN2fq95veqAKexaCe4duypuetoY1mnQ",
  "key28": "hgUGa55wTwTrUygzDtA6REGC2pzcrThHW7TituyaJvEaVzZEZ4eVtUKZvqug57oU4gWjFBjGk5VXpnhK5by4utW",
  "key29": "5oiwBpboM1tcv4pFphuNaku5MU5TZzqZVcZ5QRdwX6MmUrGnBopSHZVBcMxLM8uZdzuWEjzfd3u9bF5YvzuTmodD",
  "key30": "3MU2FZr5dpi2McbmUVk8Erfq2VMAXsVcej9AyBbYwRWNBtXVJSrgWLvShARwNF9ZSAChCUy3qmoBAJcQHoB5bS1q",
  "key31": "3rpwgYD1XVaCx9b7JTDoEt1wJv56B2qaXvhTVMfyKUfkW8wLGxyogNVSuNRheqm1CVubXHRfNuSfLZFRZJbs9gdL",
  "key32": "5iz2M8XcSJVh6Wx5pcoHqPZdFNQmC265XcaWcJ8DhdX23k5iexE9zQaFK1jpbRStCYJGoRFsqJkuudBKbihNSBkJ",
  "key33": "4jtzCzXVV2CgaNMzEAJZQpaNxLM28DAXpyNg38UsP4WbKYpEcTUc9UDk1Y7wCNs1MYjF8cHqxeykiwQGJV1nBxMY",
  "key34": "hZP4SwH2tDXjJdpW1j9cHsW88u42Wka82spduNzuZytSmUB1k9YzH1SMFmk7Weo7qcwX9Y7R94UFKoFPvq215SE",
  "key35": "4CWp4NME5LhK7CxriTqLyWUyNDbSRxdt1ur4DuVtKJHdsREeFAiBQGDYpBWwZZNxA9kJrX4UWvPhK9wiUg1rQMrK",
  "key36": "2Gwvt1kXw5gkmKBBdB7r5DmZd2cdXzUpZqJ1d995ron8BfWXUbJi3DfhM6idXooZ3S8BCpcApHjDrDoqPAKC5kSn",
  "key37": "4L3MagP5EaAxjhQo3u1we9qrT8LZCDauHymv7ZK2dqkgVnRzoz7G9B7xvaMghRE7THEsthgDqnLUzdNfrCU8fgbT",
  "key38": "4DgVrHpsAuo9dqdytKbPVWtTpHVq8e8o9h15zZwLdSAPTYrQ4EftxjMF1cj7Rf7oexuxTsMrcPgKBC3QExpA8UEG",
  "key39": "2Cy11Kd58Fj7gmUoVrFB97YjsPsWGcjGaPkxc8oMBFbeJXVAcxqxfqhtjgLJXQejiph65i6ySPqNkDhp8hvbfAuN",
  "key40": "3bdw4wzGfDnGpKFUPdmrVnNiFuuSvLjDcvMfq6sfjySw7DGVu4v8caLLYq71ZLSWsBTSCnBDJzs9znjb3Kkh485S",
  "key41": "5CovzTLLQNTs44Tjwg3cD8NijGcdgErR9h6RfYfy9YAmGWPHMpEsqesYCGSPDHpvSiATEXjGYaP9aTfny92JC7pt",
  "key42": "62WwBZhQu3neS1GdTyofZhy7gAww1cHVYcuaMpXBq1jWvzMbqPicLACwnZ45vCaHfMJi7QNtkcPBRaZN3LtG8rVe",
  "key43": "3QXnkARR857LNMP6gHvFDhiFkb7fgYRkEiA2xmqHYoVViA1zK6HxZGzV26shineMEG8ZmrYdNfzBt376SyLdbNWu",
  "key44": "5M4mDvnPKB36guLFyJtYpFQJ1iiyRLeTKkEbTD7sYnXT4Uk6tJKFw4RynvMd4msB2cpAa7WHn3Fm2AYAJaQubHu3",
  "key45": "5Pa4VsxfyT2aUKGuxfbUybEgDPqdXreii25d8uh6J1gQZuztnCV7Fe3iSTecgBwXiQrc55XK1xbNcm8DSyNVWpMx",
  "key46": "2vYgAUnVNQg65WcocKEMniLnMwLpHvmmirYWdusW91zeMfDGWwzNE1sC1g15F32KB3tzNcwCct8PsXZik84s5WkT",
  "key47": "evimUfouFpWLhSVfa7JURQBM5e9xN93wyGzpfVtVyYFapn2k6yFQ9s9i9VTJh1hz8ZETPZayuofJiP7zABpTdRe",
  "key48": "5BoBPJZ9LhbRSDoqCgiohsSg9xhCbMjGnzJuhp57mfrJPeMaTmKqorhiFe6FvxR7sW9PWLJDbxfXHuqM1DnpVVG4",
  "key49": "2psLxRKBkXDdE2itgF4oFoUX3JtVwVdLnQzKiqobLpXsYKcYsT4geaCmXt4KBSws4Y7ZeMVx2yx22guKTCUYFkT2"
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

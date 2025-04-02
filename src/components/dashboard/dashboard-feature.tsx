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
    "Uq3iQFvc8e6onJKZKBaQjmUm951AB2TMvc21JmV8ypfYcGqr6r9FAm8DVuoSHYDpAp3TnfxJCtP9MbUYmCKDYka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWvRjs9sbQnjUrzziYN1JcFANJfBDJuYkuFJH3H4jn4jEeZtdcFeP1bihLKLugBedfP9NDJ8RyADM21qwwFhwfw",
  "key1": "2q4HgXBHkAufghggTA232mMcniiCGnGYrAWHxkJhDjA7TxsPENQ9UtKWSpSU2Dg525GM3fH7Ymf81fwEzqmDUJxQ",
  "key2": "3EaN3E5xkfayhjYGhPQ1D1oKV19SvM1pyw6t24LZvwSEXvPF3ChjKceE7aTXRTxa22ns9NG2XhovBteYtfQnpVuG",
  "key3": "3QjctQ3QWGt4c4bJSEsoE4iFvUXZeoEBKgGZ2nCndFnZCQheadhQSeTj8fn4ekpQyLLWzh5yD3ugArFNT5WW1tsb",
  "key4": "2uw4zrpAkTvt1HqJgXVUXkueVQbdqHsPAuwKUDkwpCHcrhWVNKaw8LNs1X1poBCwo6Hdg1UxTvrW1sMyp4BFo1rj",
  "key5": "2LNJiz3RTRWkFGfzYaMaBp5UPj4UytgaGPB1gtzsFEfEcV17jqKG8babUQePA6v3wszVNa4p4bXtBTmxCVs2oz4P",
  "key6": "iKGqRRMUAWX34419uWqN36u3QNXvKVow1LCy5Grz6sME9xngtc4q9kwYXgTy8GdVFhKS7XjSkYi5KUz6ckR7qD8",
  "key7": "4mLZsgz769hpk8wh923kfsupN2fBZvRv7PECgHukvJxkVz4JdZ6zUaF8n2rPYE8p6E5maPe2MUoJAcQBVguyhqfQ",
  "key8": "4thj4Az1NRJbseEhGBZ7M8hymbXXaXuv5vYPBZh5pheYCsQrMvWSZWSS2tnuppJU6HbT2W4LpRe3dz4rBQ33f2kN",
  "key9": "4sqLLU681QgiG3HVkJJxbbmaZRo7ivxU8KRBkbWUJvuRVfEUcb2NQ7qS6fMo2Vn7syBf8MJFvh2oqKfdMPZapQQZ",
  "key10": "NtiiPHPqayJWpcYeBr42mmc8RN81bPqN9wyd7EmZ3ePueqpBuffwJS3VBmr9JtLiRVYkMqSFPgWud4wLTqG77Uc",
  "key11": "2ytYyNunfzvs7XPspP8ay7V5EjM1mqr5h4sxuYkTzR8ni3cUbEmfHJd12ULyMLDqrJr65q7QF71AXe2RdrvejZqu",
  "key12": "ysMkPmsbFugEch4bjMv993q4Xa2pET4tzt77RrHq6yXVimmotxLK7wVxUuSdW4yHwf7m6mrFCPrpB3TLrcq5hwd",
  "key13": "4ysbHXVdRxbi2BqTUAJAQjDjULggiwQ3T5PtwAKmiDxHS6ieVE1vn8cnhBrpQSLK6548xKgEMi6tzFq2cB3TbwQw",
  "key14": "4Ze4pFf4kVAXKP9R6FnEJ1uHXwKZVcwC3kBzda1KtTBcXWsXMjT1EUrqFLBCxhipFvtssQSt47DcRmwgKktvwaWz",
  "key15": "4eKHVDWg7A1FcyTntdFAUJGZhdvzNtU8tWoTozTqoWAJqmncib156wofjFhKHF7VHmBdz35wPX2zKhPNnHnoMNkB",
  "key16": "2TiNwiNkipzg49RPSdY5sGrq4SfeFyVctwQHZJLNNNvw95J4PtntUNZTkAoQPiJjFiMyodvibyG8jXj433ghyUnb",
  "key17": "5QaXVYzKoo8tyxu3EBQhNXUvmWY9iorVHu9FQ2DCV26mzbenbgUiP6w8Srb9GRE1WPZeiMRgu2VJfwVVSCBD1AtM",
  "key18": "4Jj61uQVs2pRRx4yeEVTcRRBi98RCR96qgCS2k4VgNb9YwiU7F6KJWkyT9DFpuvG5fX5DgXqtB6vN5nWRSvwswLz",
  "key19": "64aCqdirhQYfprnXREUPdxMwp8uN91yMbz93ueRUUxQFE3vPRPdE4KrBAw67RbnndAv3KZRbg7KqeA9KnPFW7epx",
  "key20": "2359G3giAJwoLUMy6zvNxKy7M9D3sMPyzeBBQTHZiGx8Hgj54WsSLPaHwAACY89gLazb5fUc3mjWttERuDnhzSn5",
  "key21": "3SaVLhTkNNTNYRzJtiB3Mbt1hLEmTziGnBwJ5LsNRNQ8LtsYFaRwaZmMw1jnZo1fhh6fbb3sZSLsXdLaR2t9gXmo",
  "key22": "3NYc3x15k8fJP8mC38vx2aoNjmtYz81fXkJVVP6g3Jm7SCymDUWcBYUcZ8LrHN4QavsEASWzGRpqh8kYbk9skpQD",
  "key23": "3U5kA36Ebgc9WtH2goPGbujnMf8VCadTaqBnxCSnAgLNiYud1uF43GQLgmRdQ657831dBauf9ZaKrQtii9wePCaq",
  "key24": "Q37GAoxjm8efdg2uxTRTwaZyr5U2MXxbA3b4ehqzgkkkN6P6tcgmVC1GttUb9cFmHzWrRLskLsgu9sR9SHUTrhq",
  "key25": "279vFChjbz6JvPS9WX9vJVyJTfrRtCpRQHQWsY1B14iTNYweV2RQ2z1fmZw1TACFkpb62qDjkC3j9mEHskQ5Ehx1",
  "key26": "3Sjs4RPNRaJSKfiC7j16ASunFTujpJbovXRAwFCDbRC63ZWMzucxJncomHejyabBHg5ELVWrWjn2pJqqzcYot7SE",
  "key27": "56gc6mqFdCrLMBR95WpUMvz8hwSRjwWUwvAMeb8uiiDLvPEWDQkb6MJXPJrBRK1trabCrogCR4sm8dv9vnpuH8xr",
  "key28": "4BFz2WyxmQpE55HQn1PdBjEctVoGRoU1DmDd7NBvxvy6ajTL77DGp2d91twzftbqT5JKypGLC4p2jvEZQVFsPMRA",
  "key29": "62YW85jjdk7DiJFXm85fZYfgd3Fb1YyppTCi6ubPhWt9NjndeKEzudR9nCuxA65qN1J6cQhCh9Gc2dXdr6vmwuo2",
  "key30": "2ah4K5JKJWmjTQA2mYwYCoeYrkCRWD4yQSMiQzmEfGM6kFLFzUN5gKGeTcFJzJV3Vxoe6c3LxktR2qmZQ5LAY73S",
  "key31": "66oVC5zkhtcBvZ1dfeS648FYdXDGsoT14LMfpAcUg5GgCo5ev5Chvns2hF1THMkEsV8G5hjg2soHthVEvnhVqNwJ",
  "key32": "4kdxjJVPKy1qjUjABSQatZEf6B3L2UZYFpnuzKySUsXu6wFLcmEfCRtNxw3do7ivin5dzDqQHafZGt9VvENkWBJZ",
  "key33": "3XKMQHkapcKP8QBa37AfSkPy4pzJ8phE81fger6icAwi6zPwxPEw5AzYTR4xwUkr2x2gSjgZndhHK7c9g3HwuUWo",
  "key34": "4De1ddPsYJ5X3kChtFwj2ZMJQGP2RQDakdkM2YxbQ2G2eAFmgpXnfhBotaaU4ECJhuAJhvgo6g3gXQ1WAAWiGUTs",
  "key35": "7sxmFh79JhzrLe5Eu4wpo4MztpGWFELnRGo97vuSb6W6UXWxCJj8LJpozKgdPqVB8WiQx1u4CzT9rC7W6L8kQ3g"
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

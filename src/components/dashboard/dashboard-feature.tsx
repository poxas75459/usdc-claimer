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
    "5vYqPt2gykxe6tzLxdwqA8ugAtxKKj8JjEbHunk6CHCZ4XwgDSjxo8qEYbHuZiAXqosyrLyZ7P7BHqsERszGTfYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hstgXwwTS6NhL8ibsKNcVBK3ktbNLVQ2AZV2NyQMLJCV2cFSjycSRDLWHYERb7URwS4TMsKE5HxcCKaH2qa1ydg",
  "key1": "dd4U4RboWtqWvACj9G4eGPJaBxEjQPu3E4uatPchHJvZUJ9sv2FLBUrqH2DDraZDCG1f3iJCVQQuuNLZwV8aP44",
  "key2": "62PUeaqmhwjAv6PwdosngxsUGoVmZqg4rdrAjqwk73LQjhoNUe6ycCNbzhaaDzbpB2MPXadbkwp948sQ41qWbYgg",
  "key3": "3xXNCkX8JUguj6MwtwNx5SEDwES9Txas9XsySQV8NGu3TewG5AMdqvT4fiyUXxwfbA9KdYWtvQjbhsNXjXfHWR8x",
  "key4": "4zE4HfW5MY2KWEovQA9mzdL3pyQ94uni7VUb1Vkm3rHENVZAk5UYdqDbyhQCoGwF9wZQagtQAZU87Jxg2pKkwjoK",
  "key5": "CJMNm9mJNiF5QTpSGf5x5kWmPv4GF7eTGVBf9tCPhgeDDvR5fiGuSG68zz84UqEY5gFrb9EaXYAqdK2QmuD8qrF",
  "key6": "4Ksym1fNaRp34Dafz8AACL7hEhcVBMfku3yexk4ohBp1sgvSr5cf65f4tRZDaChg7MqxSUnd6Kdncrb42QCAwwpE",
  "key7": "DTgT312ULTyhcAzMfVtxS9ZNzafU57pfbqWronJMAvzsBfrdxXZaGu7vcDWKsJ4SwGvreFzsujCGhNoKxK566aG",
  "key8": "2D95nVnYAQEbhh1nKefDKZCMFbxbSzWhQQ42KzBsXm7UXhhYQgfEPNm7A95ErHH1KbyHfinR3FrSc2RidJu2Qrjo",
  "key9": "2uVadbh7QN1TiyUMp9HgYLXascYdihhjsihqpCZ2Wmq2C2D5EFGP7D2W5SEGh22aAjsFAt77xQk27uJ6iZ7nQZcw",
  "key10": "5nJEFxNAn9DivPKSZ2LMStZxVZRs5PvuZYhCDF1Nevr5zidnojt8AYQLBp9J3Kreh8W6P1FBCX1ZSZNZrqBVFwXs",
  "key11": "3spYNDtrBEnnRETuMijnkRyLe4Xgy2V3LDTRHpRvcdmWQPjUbkUiNct5GAn4fF2BRfznczdT7EMyQVqX9rbrfiDC",
  "key12": "2bkh5mtpHiB3cpX5b76ggGdEUvVLGkM1td7GFAvn91ywzWqu9msun9V7xMmjQ9T1tGyFRRU2j73PTMcvaLbpcue5",
  "key13": "3yxat3EVVaiFKCNVnAQ8bqvXWJ9YfBjjZasBeeHUq2hKpbPyDnM95M5MXaxd8wjZdt7GRraNXEmDgC3MBvdUntgL",
  "key14": "43eRXGnERwxdTLYyj7hbaceUSHDEJq1moAGm9FAgfr3qX7sSxzADuC7F3kgFui1mMp5LVcSzMGfL3oc4i2cJsCLY",
  "key15": "4iW89QBnRtYpHEdEyLMDPDe8ckQF5oKd9UWUN65fJYzkPB1wSKeoamiKY5f6vWdpwwxV8rkA9cYLaj7Zd898r9D9",
  "key16": "41HcU3LBGzaaYWvrttwrUpxoEcwBZmTVyeYgRpe8oQtnseBKJ7ndUJmMiPKh55jmHtq5UbZ4M7oZnfKxnCGUf13t",
  "key17": "5NzFkXgCG6rfLfm3zn79cnUkCD8ZyUpYW9JR1iZASo6BkSd7weLSgznw3okpc6Q56n4jxxRCBgnei8Lq9qdqxx8K",
  "key18": "2qVWhDeya3oEiaDGDpqcoKCTziJXJqg2doUSNyNLXgTa2u9abadKdjdtpxjw9XsWMzAM3CjFtA2LTgpRyuD3JUFf",
  "key19": "ckDLVVQyVnNZ2h1y7my4f4ny12xLXhrQ84PsYipkCqEHiUXH4oCQ8DsVsj78dVGbB32yPnm6K3j1A593ynkRHXt",
  "key20": "5XmZVm2n6na327NNkGhHdG5VtU7RHWutFEiec6MoB9wFq2YVfzGGdqzyfSjS34q931hUF8KmnAF47RS5GpWnbYwt",
  "key21": "2XALFEHiCE8K5JPxwk8HJzTKCZRgMp89NVeiCHGDX9Cy8wNjEuyzuhXcfean96FArnB3PDQV4WeikFyLdwLQnnr7",
  "key22": "86VBafAcoaPkrqa7Twbda9fANrb9HoQn7NBRxLqARaZxCSxUUud4iAah5C9n1LD5pLaspfVQdJCZk1Fbq5hHHCY",
  "key23": "5zvwihgFhdWHeNXMA3DAViNfHzJWHMUFLhT9VFuiePyD1TLXA5BN9ne6wUMJB9BdYffHakfhPiZNeDY59JQxn2fC",
  "key24": "3j58RTtneFJVAJjqjAsxayu5BZwRQh6MH8ojZCdJAbJ735QCE7Yewam9xCDk7RE2Ho3dMXgAiFqmYQFwhu3mwpe",
  "key25": "67NHKPvEMMZ9Va3a57prEke7bxmTrMDkJzkbeXqSXBmyQUzA4X9ceZ1WYdkV2fsY6geLmvDbW1GqvVW17eMdCo69",
  "key26": "Cu3SHpo7YBnojp1KsQp7zmtRsSkGyt48nheytGUgJjARS1Ycu8ura7XLRY6VrJbqiYLYxrnoC8XbET8Jf25W5yE",
  "key27": "3NuxeYZ9RMaN3yZxgnhM82SjKSJdyvhVJNyAaWUKo6iDYayuumCcKnRSK59yT158m25CC7jLTJNxx5PHREM31enV",
  "key28": "57UVvPdccQxgcFa6srkZNfGv4je75GuRKbAQYi1phANAge9esXSuSMn1Y23EcsgWZX6vjTcWPzY2XE3SjvBUnXKt",
  "key29": "EdHKgKQJ8JxRBJgsfWfknFwJBdc1wmd8jFFKRhafcdM7PcLZxKuJeYycuUYHAaaR7CqBxS3uRNuwp9ZRuVEwMca",
  "key30": "2CidAiGWvsmcVHuFnJktc1Ep3aM1dWTLE8okU3AxLztfwhESApoLSGR8AqfMNXdgUfywk9DNvzzVP2343TTRmCyi",
  "key31": "mAmQm4BNySx3PoSbKSzYAT36JCfrYmcSGeGcivpPmFSx9FV9zepojc1NtPtfuZA9GAcE4Dby26vbkeuYeW4fhz7",
  "key32": "45PN3CKHyuJHBrcsgj14J4UtBLtbCZRdF48DHajhyDnmuDfiewAvShtozCvsCKt6pnkVzPtQKotE67HpgvHgTgxm",
  "key33": "4qAiKCeBKK8Ew6kvNfT67uaRmh5bg3TZqpswbRHLaSX5kW5AevSgDD4TPUgB1trNyjZcQCpVgq12WtnLSUqzETpt",
  "key34": "4Ww2zPDZKwbdeyWAa9n7GqzfK9xx41b3ar4xfuRTtoVNN3nAru41nXqrXzk9Hb6Ms8d62m5UttE9y1yHTEYgFw24",
  "key35": "9KtExRwsWSry1uY2RL5BJRLfXYr4B6LjTCzXKrb4G3H5Su9qQp5QQeWRLE2hmADhkKPGu8sPxHGZjFZzdcvqnAE",
  "key36": "2ThMudtdukG2bbjB9CVdoeZ3dnWVQD6sGyqsvAYXezewW7zxU6uiy8zxbD4kjc7rhptYJWbwRZxaDJUrCPp24sRa",
  "key37": "4Rms4HZDnaYWgPextPTgn8gjZv1WsKzjoMm19BzrXaXmtCHY1ANxBBM2z9NFLU5xdYFxvzqi5vmvTj44fK3TF6KG",
  "key38": "3C57iWTF7x3FHZYXubjfDjNNnff73iNpvRmsk2vXjgpSFXHRFCUgzaLYdqQuzjsWZe3tYTw7ffSgJLsaQwdTrZfW",
  "key39": "3k6tq5oSreGauNnWBH4U6JezyMENNWYJJKu1CKoaNpszDwR4vPggDoNuY25wzxHiaFh3V9P6yh1TcpyAAQ3JUecW",
  "key40": "ben93WS8AMbrUqoo3ydxdoKqDFdjNUVojNxUGUMJLtdhi3GiGxur38LHz79niCy1Ei3wU9BzFNBbV2TUjEt21Lg"
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

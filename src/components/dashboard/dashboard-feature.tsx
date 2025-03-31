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
    "ownzzKFHZnWpXAjQQ3Wc9sMtqGm14chmhiD3pensQDK2M4HSqvfQQMVRggYmprdsxFEpC8P9Q3PV6XLXojRUKNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RjNbaLAshoLZuSn9W3hB12Gx8qqmVUQJ77eTM4SpUKxhQLp2wSfE5yF2iPESvhPjjvsDSCX5TjFUNpL5nTnS7qw",
  "key1": "wvK3MwqKVVmof2dqrVqnDb7Yis5YqHHTzgTPqkZH6mZr6AoRfuWHS9QtgUUDchp7fE49SpCvdXwAbMBhbkfXakD",
  "key2": "2Ze9mpfYmFLBmTSChJRdCcEPwAy8nYoYi63kpR2GVuGqj4yeMs7i12Nus36aTUB6Fxb3Y2HpFGAgsXPUrDG4zji8",
  "key3": "23jQTaq5Shb78Xtbqywdu7XCD8EpoiJkxuj9fc95piEBKqoDNQjyUStztfotG95aWUP9XRsKEr79sQMCHae9mDWZ",
  "key4": "3JoSX18adkFGxAFnByrMQvzqEYzby85whCXiLR2LVdXBBnQWjs94JSKysqRMACSLNMw9Ya674niPD3g5Pv2ia6z9",
  "key5": "3NA9jVfJSdbZSbvc7Cp4iejE6J2azFnRsdxzyLKMyQgUxyqdsZD1kD18zKBFZ4KCCWJFp9jnvUdJyHeTKGGNM5CY",
  "key6": "23991Z7FY6yeuFTj6nHx5tHU6cFLw1Yai4Q9pwwSfdPiT6h6M2gCmhQ9YuXcRfz8U7hmqyaQYSgzFhd8CWt4wTQR",
  "key7": "pa9aEXmHxDLypY8D4qrVbDWM7jkEPhmcSS36DpHuXfrdnkcZt61weyWa79iWvWpkb9jQk3Tduix2VShMfubVveq",
  "key8": "3B9PCmJehwuJ4hDJYi8ULSjackHyZbe4gPbgsYtddgGNLbvbGuHkQxzzxn1SKSVd6o6CXQ869NFEqsSnvuk5WGCw",
  "key9": "37CKF3sgiHr41TyVPUjA2WupzVjhSE1NUmoXekLTk7enD3bBqUMajCnTrqKmzovGUfYD2dikoYrCVv3prKQdPU67",
  "key10": "2v5ntyT7HFJaH7UzzyHFUiyLzYqxj4bhpF8Vw1EmCqtB6sA8bQKKEmB3woJjpKFszjAkTNuc6RL5mjPz3g77bU7E",
  "key11": "52FMC2GvK6m7NEo7MJdbgrjS1YnS9gVnJVEXmbMri4C9nSSMD9qYK9EwvzFZkQDNtD9UyqUmFXruiNn3n2ccFZtF",
  "key12": "2yFBHu4Fbkicaxhsmox11BYyRkeV51RvxBshLbEkTt5m3KFbsy8xLrC6EXsQRxNmMDAycQvwNPRZ8FxnpDn5BQJK",
  "key13": "4VzyyFqwTGyYPxc8N1m76bEwED8FifWFRQ5V9DmHvMCEjEbrWLcZjkjESnR3weP5vpnLmx6Q55aby5irujYBtc5x",
  "key14": "3X9NJXKH5KWdszNijofDGwNZ3BqTTJvbyzWwNDFgJczpDTuzJjpU4gSmaEGRiyuzTZxh5Dqv4YxUwmpkHAyGjbjF",
  "key15": "4jm1dQXY5Cp3qB8WACCLefsG4gCEHBYmnu4w77fbLFpNdM8YRpvkZhGnc64oSbn6G98Qzb3DBs25ZTLz6NZqMbHe",
  "key16": "2mzd5w8fJPgprvnzPGbq7nFMM83WVH2T5sH6U673GKVUPNd4KQJ3iDcUucvQCkcxTERmk4JwveAEeEatUXjEYR53",
  "key17": "HpMVrdwuVLfQ3fCW9cazn9w1CD688N92Hu8i8x1eup7aXTRp9VLxgmtUsBXL5TQAJKGDnCp6U4Zm8ZD9BuNnxj1",
  "key18": "3YiGx8RqEZps8tHAXuBJeu9qCbeaHhDgVrBEnuuugMvEqXsXLXYwf1NJZFAZUTGW5pezBRM7GxuTajK8QyDeFSjF",
  "key19": "4FDthCB9iDL3ug7odxQmm1UpoEDW3jQkZzp22FGFvQ1LFWRXiPU2LVDrZxtSYoHBFjHLU8VYVXfMNbX59g4aQ6zD",
  "key20": "4MTCTP4e4jH5sr8nSj5vWg36KqH3qWBeRSkVmHRRi92CD7TZ4EyXB79EaZWghhqmDHCtBtK3BbYXL6xFFTzmt7rN",
  "key21": "4E7FNRT1DaBbe1G9Myf5E49jxvNx5bKn5fbhkHwTXs2Jev8sEWyEAjbjEby61trG9PNswqRggdnp7vJdzp8N5mY6",
  "key22": "5r8WjQWD8VYk2xvJnNts9JKygx1BcSiEM2571UN3PJYCPuhhSzYUpAyT2R2KRu1ENog3UZQnQgnDZ4nxdzvk3Q8J",
  "key23": "5SaTnXCg7iAox1dGb3bF5qF2cWfUvFqdCKntt6KtEfLFjeBTSoXbS5NUhQMZ1yJ2sdZX9vwwuLsspXatZP8JT5Xk",
  "key24": "3sNmG3pxZabD67Ff4bdA3JGmtN8akv5QUU44qrM18JgTWgRqdDiHRHCAdVdy9j327iY18JuSbZcwmUxumNbDTS1D",
  "key25": "4m5RRd74tfYq4wVhdRwgi8dSE1H4ZkLqEFWMUErKZGrbBZHez7oKLnfPdLnKg7AfNa5Lv9Td7AK2WcyBCgLs1RrR",
  "key26": "BdBZLiwGVLEN8FHC9bRnLiB8Lu92dMG7V7KTzyQT825t2THqMihyTbyFt4iX469PCjpuStV1DoYD96h3nU4yTrV",
  "key27": "3uPxBDZozLobxzLysKRJC4vLsjwcpaZ3JczTzsns9Cft91UxzP8TcEQYyeCj21iFqQdpEX6SSbC7gPnY1xVN9hYE",
  "key28": "2vPZnaCC6zNP1t1BLaCqMRsJA5p69w9jmrcxU9jB1CEBkg96UyK6pLnfRubWjYsVCgNixXiQ1arXfgfMVWcUp9Zx",
  "key29": "4VLb4mSuTENU5413Uobr682UusLuGyzSXCsCuKQ31ZTn6gHjqrpuvUmkaYHcH2wrcMLRZkM3VRAMNFr7WwF9cBC7",
  "key30": "3VGFgbB4iTj9oxdw1UqDC2Xf85SdxocFL7GXRWmH4dJFyA21QqSFeK73XSUiVabouNUhpyZZkxAiLVNLK1PEVdhd",
  "key31": "4KZcb935X4Rbw4XeXC5QbWvZUCiTvZtn2mZLwPhukPE4N6PWdwJGs4t8xkBd7hQBvpc5KUjfw7TthKErrnLjkrqU",
  "key32": "4gDMjKscWwZWThQ4J2shoacwdAeca6MKMY4dVTpf7cAoM1cbSjMHxJnzMZqaETPXx9yHpzSwbySuzVAS34Aggp7y",
  "key33": "4vUqxN6uwqGmTqDFoC5LpeY1hKFZdq6KzXa85nGhoKmnwgweTQ4iF1dJG3QHyyqUbbCT5VdegbyPyznKD2i2WSYn",
  "key34": "5b7gGnEjxNnT8cwe2WmLiGV2otmy8peRKSyhPXDqMhmpzXFNDRjCz7bearCjKqTrAY4AADh9FbZQwH1CS3bDKbpF",
  "key35": "KRtQAV1KHPu4uPz7o6u27PoTWqRUx1sK7PqzZCSWGBi87LcA5bniYkAAkoQTJQNjGBrYRwJtAwh9pMP8TkHJG92",
  "key36": "5HVuq24jGNtys5eDG6trjcdQFKogj43gp6bJfLG4AmhN8JbNv3dqGMyATDQVgkxEVE41DnBf3QM8G4XMxoZu7Spb",
  "key37": "MhhmXPDx7XjQThNG8aaYnVmXt2xkcJCz3qTuAuVsHs1r6vgmSPDnBpP8XhiTwWy7DNVSLDW8uf3RtxJoZdBtxyc"
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

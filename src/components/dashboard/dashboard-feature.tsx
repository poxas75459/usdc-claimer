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
    "5nNNf55sovZvyWoA8gkBRMNzEnT5BquTXaFtNRFyAhEXpbNmBYt9yqjfrka5s2pifc9Bx5rQtvRutQtd6Mt93oTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkPCi9CP8swWhWY21CwEj6xxeYr3BzcNHfcQzjCMbzgtWvhwsPsybHv8QEQQCUSVtzM1poSTEvGFn8FkeANYahP",
  "key1": "4irsmBUDY1PVVZqU9cDAcz9PcvTxUiNjRSFq2AYGZxDBe1pHGnqH1UL3tskantbRjcYnycL8Wgz3vxmcbGCkeKos",
  "key2": "3Xm2XzNh8MLhwqLYVCeWrH9AYVusPPrJJMxu8WnQgZafnNcS8qQzNy49T5mcD4uzkNMbrD6CrxiJFkb2BmVseXsF",
  "key3": "5zk835wFhgccLPqCiNNWoKPoc11yHxmMzirKQMqR8kS2dKsXftaNKHp1Xt4AHqTraj7ytJLUin9TE6AiEJDAn7i6",
  "key4": "2DkQnY3H91LofUqGwnG7vcXRs8QDcCN1JEVqrVhNSHqKLN8WJognDLWVCh2AMceD8KA75XjbEf5uTt6dJuGB6ySt",
  "key5": "4tYeqx2bR9TaVEUs2KnEHUe5reNtjoz13NMdWKEBbUEfgpHoXw6s7SVF9c6LrQBY6xDu88bBf3pJtfsX3A7Hhw2U",
  "key6": "apVtMNxqwDbKC4sRAPKqvNGAu4EebzXb4zqCxr1QH58ZwGqFKqxiUQkfcXskJMFjTAy7ubLvb9cU95zGsstryk9",
  "key7": "2ZrdbdoBvXqdUqzhDrBBjKnXk3RwHjqhVzfDfUtG2GcxT4eqXQzYiLJ4Mnh48PmsDcAGnZ2d9XCcnaLu9hRYxTwF",
  "key8": "4vczqUwsqmEgrixJtLnEtnEhASZf9rB6d74uJXU8pFMfyVJNPsx2ff4oyXzDTaXt3Fg2WSHoQsjfyGetM9zr5uLi",
  "key9": "466w8SvHnTwNo56zuD2nUzU7tVSUe7kBJmkjJPQX43EbCsJYFk6AGeCWCNRdu8DZaDAxxV7NB36WQGsZdLRJnKLn",
  "key10": "wMn7JzMgFJbzgz9ZhaTuyJFKVLgWXoWWjd1hk2QrFWqenPL9LMxwdin4D7J8paEv7pejWzyDXZRSxhcJZmWChxn",
  "key11": "4WrRYq5Zrh8ehUXRexY7iETW62J8HmeHgM5SZxm8BtzDvxmgB9uAL5E9os2NVTFTk8kP8jw6hBmAazYt25wDrerj",
  "key12": "4LvngqzsAWtrzXL8GqBRE1CE2hi9uweUyueoEjgYkWRgnNVTnXJiceGcv2iXHbRTxP1xY9WiYhjbyBQqCn7xiqFk",
  "key13": "31XytHnaBMUKAAMkPomFjtorvKaYPcw3j6NPSkTcQ44TAWEhgKtgdSHqTGN95srxan45S26uicG1rQfFrapPKhhQ",
  "key14": "S51UUGpQiaaWuxCWDjCGSCqRiyCF3rZPff1VmMePeG1gWQhW8NGQaF3KZGVrRyTM8qvoQxLeXKU7xYkrkzCxnrC",
  "key15": "485Nw6j5pYRp81ZXVDxHgcTwzVcbEfMMmJUTVup7Zdg1zLp4xi6At54orTrSaGH5WLxTZ6KcSL154dKtiDrM14Wj",
  "key16": "4eJEQs3euJMeYapsNnut8VCEbSg2oVcwgpsAMvN6qxf85kg2jeMVH3qhZTqmqkrdwfeeecNp1VPSP5XkYGJm3RpP",
  "key17": "62S5a2jpBYsvs6SMr3P9LdAHnAExDcxKoZSp16KnjiA7PuScB4ET4F7TECrWcVQkZDR1bsR3BJ4DX74q2P2nrgxx",
  "key18": "2dkLfA4gzUfNVyvFZzQFFHE3y9hpJSWpkyDbwRVUKxrn1ut7KYhpQfqmwHAsCjFsMpNbggx4deQDew8o7xYzoWQu",
  "key19": "4vEgPseyQUdpxLxh7u3fRAFHJ5Shf5aWQAgPrTbm6jvABJamz1r1KyacsB7GkfHuyrN4KpB9PodALBaG4zJFuBee",
  "key20": "YAHNGQ1ULrbV485MUFdb1a5UNbuHqbwVSpUJHwvSQbL1Vfz4H4rCQrioUb9XaNeBLiSHJifPsshWwqu7uWYSkwV",
  "key21": "urnaBULEmfuX1EVgdpfGf5Gwz91nA8ixJyvamrKxG6BKRgfngPi9yoqQ2hz5RawRbna8iwwjEh63uJSsFoX8g7j",
  "key22": "hYHeqbp51g7fsnUUPehPhgmKttPxbjbkEjNAFHf3v9rKhjbNX9Bm6VNhxECd1LWaz8NQZEMftngiE5hZaqx8w1q",
  "key23": "vAZ3bg1WtbiUjPXSaJMcPmPxwKmsL8G9ogvYDnrPiy3d79T9VQBb6JL212bU4JTWmxMopprb9xBzVCryeQyJ26t",
  "key24": "vkbmM6W4Q7uDgfKuG6uFuYVTU66YMp2jD8C6PCrZ237JPNyDn2LS8fdiEJu8xUNwG3vjdbm3w8majwHC8xCHut8",
  "key25": "2wnu4SzNt1LYtfQ9Wm32Ue3zj5pA6xHUt8dRTRftH9evxcgv9Cq3a4uRF2DZQruXezzaYsSFJtu8TsCTFL9kyWAU",
  "key26": "2EicYQueY1nzsiKipRnCh2rKngxt6PzzVKmMuyGLZsUx839C9BPVJUCpC1mrW6jDGHbXEBL9MP7csWNjXYUecHvD",
  "key27": "2pmWfxNjD8hqf1P9cFSaBUVvq26uevvyLRiEPLrPoxrUsioBWoAQsPWYJVxJLybH6Ndg5p4ZcGBXLnbxRjCJJAUv",
  "key28": "3TQWhYJK6prW7c21zd7jVgjCWhEiMjo3abQmcXZKh5ujuwwcPSifswyZBnSbkD6TuqUKb1c9f1rUi3irGYUDDM7H",
  "key29": "4yWmHLSKZQZj32DpGtXf2GWjqbysB2r1qZn4sViMaEiKL6FZEUM9zdLy7PqbynhYqh8YiwbdiU4d5eHdHBZVf7J4",
  "key30": "3ouc8nYTXhMRWcMghxgejFdwvyvxHZ9EiFgWkEADb3wgHHfjAtR9cV5F6qxv3LctDZYC8Bwu5xwgEU5epL7BamDj",
  "key31": "4k4y4LQpKYHcU5JyxRyXQ4xpsktHF3xhTy9d2qGvRo1RRetuQi25M99VT1rpuHsGeGxspzfXjqHwSGVsjPdMBfuJ",
  "key32": "2T38DuWFHMSwzSWunfqch9VMn3DmuPnR8yQa3CxpBSHcUPwD7A7sVtdUNN4VrCDWB9ZdH2jW86XbS1znLCTX8eML",
  "key33": "5yp42WHDZikxLiwHbQirthpcK3bkzkTBQoygT6HbpgrhNQ1GvLGxkbE5EoFCCQ5HJsZiWPXrmgxh7kRJ5MmxPEfL",
  "key34": "3Vn7oDToesSx5FaDriCh76uRPnmoniZ3hn1KAENR7a5osfQRTP2fLJ7AQEkvTj583PGFNoF8X2bXX7ApavpCv6Mo",
  "key35": "4m9LjWwocDuxmKynkvfLXcLRo9MKmJJWx7WmWyPfEdKnNSK9JXPnUSZLUCfm879P9bd2RfxEKPFC19mFDLnT8dLc"
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

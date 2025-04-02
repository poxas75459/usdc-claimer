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
    "5ZbiMmkLDKAHLzSMJLeS4LJ6WBvAxYim9W1XiZqmNNwj2Pp5yEx1bxBLUXwH6rpU8Ra5yn9hVniAF1dne2iyTwNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SQB9twZJHgpiTz6GoyqLxhTE9vjFSAUss4mK67E2XWj1RD2Cassb7B8zN8apD7nZkt7Ax4kKRH8phHURseyvc",
  "key1": "5F4w3AyGGTM4ENfNAaBUHg1BHAr9Su2ZbM9b4N4PMrFSKjeXLNXTGjhRG4UZreiNtJxaACEtNNDGPCqtneTMhBV7",
  "key2": "3sNe9Z42uyrDMBkcu4jzXVXfaPsf8CewCTpWQruExLEsrLHFtk8M23BTx7CmDKDCh2Y1FHdFHMYrUxP3kwtUfAQt",
  "key3": "sTLjqn5ZK1tsStX7NXPgxhNRJM1SvTcMBXpcMtVBvCFYN9VEqnawQLcTVPNWgGHtmQDET77Hg1Rsn6HA5vs6A57",
  "key4": "yTSSgahRe3H7Poya5Nk4TExcAkYTMPYg9C3FBDJ73dnsh6JrtUgSu11wSyuyoGevmctjJsU6Ce4pFRkcqDjWPrR",
  "key5": "5uQb3UcgXbm2DwjHGFKgruvdLfK3Kr5EsETcWyyDQLXSGQZ4ygCL26h7k6Hn8a1YgCwfRpTgAauxQewqebBRUGQw",
  "key6": "2gjNqs1dC5vtwCLCEUy6VmedXTYqBEA4GpbriS8mxs9MAJSJ6QmCxJmHMV763MkTXfo9vh6qzEJFTU5VitHPXczW",
  "key7": "4MtknuhnZkETXG4NMNtz331MPXPXuNkRZMh4SUweaULpNkw65x3P26gcUza7QwZKUGToWuYpw9sKfKDtv4i549jz",
  "key8": "xJJ7k1NbvK4hKmPGGNG3TRwtLHbk7CDgwMa425YQLxcizBisWHNkY9GZUNqHHJPrJisN1wk7WeYmPgRG1uprtM5",
  "key9": "q45wYKRTRjRTwSNc16vX7enhLdUdFWvMpnJxppJpVpNcprA7vDKaJdNzQxTbHYzeXWFG85grSwnBXPz8qj64Mhg",
  "key10": "4FQPSXujWBf8r2vawyCfPJuir9hWov4YWvW3CZDo6k1s9DBopqZLRAwWjfPv6KvaApBf6DnaFyGcrPTDo4YgXgY5",
  "key11": "64dJ6Pn7ATLexD3u4gtPTzX6Nxjez1ZXTEXdSgJBEbqkuFeCAweY3DcWdGkkPjzUENQK2MCaQnn6xfjJHdQrdGfc",
  "key12": "At7knabxNqDv2t388FbpZATd1XAbKisEqQVLCx6BYu3H7t6EF1zNQ9XN1Jvo9D3ghm9eFefbUxNPDTtddLjvKR9",
  "key13": "4cQEfSpuJ5DM1vD1kjibz8tZMz4raFf8uExMDYtvHbYgtd7UrkJAg6Jd3zgKftLgDvheiqAashsY9KREeygrA5yJ",
  "key14": "2LeWsYrCwPP3tS9ARMur9gHBMPkQT1iAkurLWdyiTcZvx46YHTx71mHiWud5udorUbwCQvxVctg6Rzm15LkfY2PN",
  "key15": "rcCbDoHFuYN1vkZrbyP8VgS1BjLiJKb9P9UhUsPt5unBwKSaHt9mmtTqU3ZvRAfAANxTJp8NUVGVsR6Ct55ZXPk",
  "key16": "yQZbAb9W7zGWdZgkkCDRgUq9tbD9cxLcF9SVPSAgReKEbMJ8aBL3ZuUS5sFdeFDaEFHioY1ybCE1gRpqr25SLZb",
  "key17": "2FNBHzmE1mrCQKud6tVDFEvqMhpSzAW7GnrQx9DRPa8UDWmxwnfcwmjQZebsaJJLnZNBuVsLBM1Y4LkmwVKf1UxV",
  "key18": "4hj74dn2sJe7MuWWn1FAUs5vnAPXBAHedZCSxZRUpLQ5zWg7CswZ4k64URMC6VTgEZuKxaDgPNMmmTYj46JKpLLG",
  "key19": "2hxXXimxjE2aL1Lk2vEkpPaHxprBYhPBEBkn6v3Ch9PHykK8efJsVvkDm4Gw5Ln5KiqgDGckwzhe8rM6wpGzA4AD",
  "key20": "2DZ1EJvo9nL2x2q4jB68y4ccq9231AoYvYiAyp8BDbEWcWJtWRHUXc8pSMcBTZgmtSUm11nMsx8EENnsqSzEXJaV",
  "key21": "28TVf8zQUWjEaY6W65Hi3EMc85CZc4wt2y8jXzmrZGrgos9oS2g5tDeM5QcZWhU7A9y9nDr2uSUTbUWMjmM7Dq9x",
  "key22": "2BPfbFCdboYS5LCyLiGxwKA85ijzovo7Rf7cWoYaGeCSdT4gM7ySqVRsYgz1AjgoP6zRXR5rqwEYxQbTSi9g6Xzc",
  "key23": "516i8grSdzitq6CH8K2CUMDp4uL6KHaxFAE32yYLUhP4gaxTgyudK33sd7dgTt1UBZrc3vcv5RCxgQGoy7UBKBct",
  "key24": "3pPACvrfNnLkubMWYPRkW6yRMAdUha8fWhuXZPFuDVK1iN4mF5PAphJ8StE2GsJFRTHCaaHAnTLGPgNZVsEViVWx",
  "key25": "2h1Kg9N5g47owKo1nsK8v9keA88vw5eVsETPBBDJmqCpWU66kHK7pu6Vf2xDMNkeL5Vbt15guEzLXuUXo8qtWGKE",
  "key26": "2WTSbF7EEAvXMGChTFH25JLgRPy6g4gQe8HnSTkZnLxNboEpVjfCzv374GvZm4hFnnmeWMsCP6GNzVaszhGARCuB",
  "key27": "36S79wr6FUVtXcnvQmspqPtNLpyB75VNazCk3TJWC8Jj9rW6bqgyAAFYu8m38gnKm8UNnUk75eeXQRDqetQFgSoX",
  "key28": "4PQLJ17cGUin4s6BEA44jnMfp4P7UhNE3NAKPW7tCvprgJs28D3cAFfaKuFph7inigv6F1wQF1CPFDtbMKHyRqeq",
  "key29": "52UgtqgJyJdUen3badhsfQApYUT7jJtt4AhX4KFx4Q7XX1m237pjWbjw2wD89jonrQ72cx7kAjr2xZ2hZi9gXfDh",
  "key30": "3Sb5rJ4ESBWEVUtKPCjN39FVeokoz2xiyyuMNZv4FD3YZBrPGhtU1uRai3nGeFByGqdv2kTkDvuyoSntiwBsmjAh",
  "key31": "95Qy4E8j5LASc5avh1ncLepJFnyE7kKCfuNHoEyAeTYvCgLAHvcAEGPWFdu3jpXphyg5AyMp2tghsa6KrddS5BX",
  "key32": "pqoSGKUUV15vb7MdWRbRsGy9fceiaGRvYQuPrx3ydmLqVroURfbTAN4MPPivYCnx7MjXH11BuMkdE78TWgQLbUE",
  "key33": "3L1SbbdM1W2M8ibFJJ6rAgHcQvYW1XFK4CXtQQRY5H2xwSz7Dhj5qQBt1zMS3hMN2ZL5HkNkonj7KXX7XnUWNaxN",
  "key34": "6zXVMGWZBroCp51xNKq8xz8aQNf9shCR4zH128REg4qAPPU2HozsG3CAZX72ucM1Dghzo4ybMpUHCYfeU5hJTco",
  "key35": "2SrSVRfpuuphCnxHAeMMgkcWm4yFTXBne2BDdfw6y5M2DnD4uzmtZBrCADL35PsTcVwp2KVKpk3kB8om4W7ALvFb",
  "key36": "2v68NtuwbfWk3b6n74JuKmxqXq35JgnNMkuHpsvj723nvyukFU9qLhKmfQZhQ5CMggyvVQccz7gGrfXRyQWvfgYo",
  "key37": "5uqwGN1hp81AhWzEFpj5mJCGecC7WL1eGAGdvpKoPaoBjBkF1uJ2pt9ufVPA497MAgpbfGnLuPWiR26im1HfSFXT",
  "key38": "3uLpyVpRMtMvWjpyvrfnfwuwKmw9J58joAJG6bE7Ztcr31KLU7RiNf14sE83j61GxYKHNghmEo4ozePtoV1XrSJm",
  "key39": "5APQcC6h2xjuctqPVLLnDC7XjG9vaT6zUKWsvGgtJu97jqJpp7vkBKU7SmYdwbCYJrkkvkoN4SoTzUamF1ujJwo5"
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

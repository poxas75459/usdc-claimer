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
    "V55W5vLAQFvDoJf3KjMGL3CMLV3dDjHWZHxZJkFd5rCzFRdNEezammvXa6zcRaeR9LBZ21VtzSvP4j9rmFy7DmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pz1fS9s8qomZaMDnTVUBqPCH65LfC1mVTgyqxoASBcqbnZwXnSitWi1Av2sU2koFarehzbFgJGK5kDx38aEsgZE",
  "key1": "549ioFPkF6H7T7ge7HJmoV6e9Euc3L48DvaFg2mfZWAxDyQQtfikFZzXFgZ7duZJebho26CiGdrdqmNeVnvQUArx",
  "key2": "4b9RYHxStqaqL8joneF91ty3svLx4BSTssQeCLRk4azLLTFJpPi3omjiUQcbemoLXjeD5HVyyEvvPSVyBzhYZbhr",
  "key3": "3e8a1qszxGMhsnwuyVZFtUPYfmAEBpi8A8VqVyJNmUwArfDGHeUEaohEs8AUhbK1FiY2rVYahqKRVamwfcRPd9gn",
  "key4": "B1BfTwRwps6vZzQcCMH6zvU4cKMxkMUrz1H7PgFvSdwzqgxmdZEsXZB5Vxc7WYFn1yDjgQuWVw6BJwmzasWYVje",
  "key5": "58PvsH2Dkv5rP1EGNLMbvRAdCwuxwFGqbffaj7KL68PFEk9fyei9MEXgtt29oKdJK6P9Ayu59sHgwbV4fncF6wAz",
  "key6": "4iWzcYh5M9Wc8PETZ2G6FMAMUo2XCzzrkYJaZE4t9P59wf8JQSpEYXfrsWGXBWJ2paz3Fphncqo1z81vRYJP39pa",
  "key7": "3kJFwmWyYEuatsuRZxbgBRD1a3TTGq9jo6wQVQ7JDbpYxdUZJUSVdKtpAJrN5PNzLKYXPCM32vP5acVTavmfAZ9M",
  "key8": "3Fz2yc71pPBDDJ7jyc5ApYVFNbeYeBSNiCjsGR7U1nmHbqE7nan4XQr84HH5gx5NDivoccyMQGZH2jR2nVowjprH",
  "key9": "4HnW7yPcYAjGzmkaeLeNvwTF4CQFSrgijR2FKJDk6EFyJ3kHaqPAXhQBTeDd3sDJuELw6ehLEjUUHLv6UBt7CrAS",
  "key10": "daQknWiHPtPVTjpXEggxEmBqUuHq8GvK3EsoqGFPaChoPyZduu9QnxdLcXkceBcfRX3mqifKovo2TUArYzNWiDs",
  "key11": "22g9uW49QkDupHxWYUF8FxB6AV7n8Sn16X7VdauMeHDJ34so7ziAdB24DwWdyTTmVbRqzG5fmkgHvedEYjrDVAwr",
  "key12": "4hWyWMRzXwkwJKcFDAfZ8qkgS1fbcDb3nCLAD7gTN1Nw3vPwbrL1tXLXBFRSNK6a1yxP27U4EoQaCPDiyRhHRtok",
  "key13": "2U1kwpRrQMJ1DWkCkkvrmrTo8s9fEVDiid6hezLep8vdBpxsMcZWKbt9TuE4R6Aq8TvZ6ZU7V9qMdV3AUgvrxUcE",
  "key14": "4dtfRKmPezRDd5ZCoZdjEtMKdSG8F6JQvYZRcFxFshgBzfsVAx7TYhiLQnWVtExd9YL7Ap9ua1c8qNGi5fj14DoK",
  "key15": "465LokGh57Cz1cKM7wT5YZHmJmqYEB7a9n1gnwNVyzmP46fsBNw2wKQFtgii9o1NBDvUAUq9Ep4B1YVnxcbkJhVy",
  "key16": "2AAZcZaWCd8yiZvcDYVR3QaYnttTqyCCBNQNTM75f426zo7DxyRw5QrAdUwYyuE9yXBUDPDYTvo85ahTKUWcvwsT",
  "key17": "oYnzaRYe5FcyTAPqNwxTiwufHLZyzepNo9z2nXRrkSwbgWdxgviKMo1wvQgmqgKu81RXewjytDrzasW7wkMp7AQ",
  "key18": "5AwE7gc9mSkojuTuewvL3n9A9m3NXadLBAJET2kBJ6CSGWqJGiFvgJE4pm7Rc9DJxXfw8uFkv3oYnQHRjzAEdoKz",
  "key19": "3TDxRiPrGAyNcZaCAfxkkvfkvx2wY9EsqbACYG9x162UjAutXThZNiS2Xq3Z85vq9g1cH7cLTMxd1YayiXKzVJoF",
  "key20": "2DbDmKDkFwoHzy8yfFCVpKA3GFYvtsvuWFUvi4XpeCTpUMxySeVzBG6dkTbp469hp99rmsFFFdNwMQAMczbDHB4J",
  "key21": "5fQjvq3HP2MvqCADGDWBSmd2WycwXV1YG8ybdW9xv97J9EewKC3QQ5xcPZPpgrDN19wpd1ZaM2oF1BUUT16AGdFd",
  "key22": "5oEuVE3eSqoQeutKnbJphJ728wBbpYxvjiJvMppkjHAKGuaqSUkMGNPUy3g3dhRh2xALLiXNDaXVXEpCewyWYuyC",
  "key23": "4MVEEZLFDN3EPhWb3acSFpbKtQztqyYcwHgVA1EMZp9EhcKU8JE25dKGBU8JTWn1TGdDWjNK4k5CmTbKPxAeJgao",
  "key24": "3piQkoMy2ZoBBFshJYvohY7hSrdCZooH5R6fs3eAWhkwq1cA9cM2B1iz5tZYAv3wkSvgao7X9jDFrRracA3eaWs7",
  "key25": "2LpSGsGNLveP1YXBh6dJtcCDgTEjRCrJjA6vuq7HteJWbGDJyWM3pbZxuswhB3XpUYrTBgGGAF9Vs6aTweJWioA3",
  "key26": "4txAqmCKbaYtpVoGyWxbXHKb1bwmPtqhFGFZ27uuDMV8WNrXkKT1bmxNc7EDzzhacoqUmCYdfxyusPRVs2N8QjwA",
  "key27": "4NvqC3Gs2gtmSo589uGWt31C2H93vZkN6454UjB48BZgfVgU8QLmYRDHVm92myW7u8ptZec5XmtQM1SsGidjgnQQ",
  "key28": "2Tkx6bP7J3DfQA4gnrdscgN3166RPdTkeiG3x1D7HG6TszomNQGiT9zxHQ9XN5nmK8cqyd3Xwkb9yi92SdLcQxxF",
  "key29": "4kaK2mBdUTakxXTCASHtahJJDp8cBec25Jr5JYrkQYSg4eYFtW3g3aUL5ejwPTXAAfg46EtJTvx3urrZbVPErrQr",
  "key30": "5ERmyekaykPfjoEy5NoxeTpLBsTLCPD4n5Cr4nP2uN3BXKkHQmQmaHam6WadXr1tXWhed3KyFQ1jKQwbNeqZtCfT",
  "key31": "DLJ8kn8ULgn8zenYbx2VZ6jbP91j4GRCDHoQfzGNo8qsWzA7muEpxouxntojZAdQKPhqqAfuGGDm9rCErJ295h6",
  "key32": "q6AhKCL88uXAtmo6xiwshLamZBpFZntTsiPg9SG3R7482uFSJQtQGj7ZYPHcjjucQdEkWS1uHKEDTS3QuU9WreX"
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

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
    "3RpgSrZYCrwZXnGeYjct4kvgHnuG3uxTSNYWgewomEydFQnVSpdtLSGTsyhDucmkf96CKrFZ6P8GmhFLRgNo9fea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xj1tHY6ZobR7xWuz52iWi7FeGrPP2XG3Rj2GApDiSX1g2ano6RRzAixwZ2EFkbWrtbubPoWV1sYH4ZTQn8vMEPR",
  "key1": "VD94WCYymu72mBxxzbeT1MRcCK7fexB2DmoLG3yDQP3DBwKX5CdEC1521tzdTspqFpm8Gz1SS71Ab4toLr87RJB",
  "key2": "37bpK5jemiHFSojgRtsf6SA6ZPVWRZ4gkDHAbYXhPDzFqucYEa3mjEEQCKurhrANqTmV41NVLxmDm1ro6CZ2KjKH",
  "key3": "23RWs9TEkH5HZCsAH1Q41SidPj8pEnMmyv3refJiXX7f8Vvspvt9ZieAEMNKwWv8NnJKuaqZg1MomjY9Wso6dHCG",
  "key4": "55iMNiujAcBaHfPvHtsWMTqQJNDTpLKs7pzuCqbpRhtyWfA6cAMNMLJbm5yWAbLka8n7WoZEH7eNtvxfu5TZ9WFZ",
  "key5": "4XJMB1nkBy6pXRKLSvKrygfYwJBrBmWU3YVCgFDottixoLxkGWKSVjEnbUNcbfG9BzAoyS15HhzY3QcmMRrEBKMt",
  "key6": "5LoXLurhew7e9CzhRUKJjdKMRyKdXPzxL5keATVH6Z8o8NUACaYPKTXFJEvy558sxB3r4LF3xJijbMUcxQBgA6KR",
  "key7": "65eJj6XF35jiToakpDsLvA9gSqtTEEsmdfghgfzm8uHFRD5uu4EQWnih53EPuUmMzP87B8qAKsRgaYhaVbhPJas9",
  "key8": "3nqRGfb7JTT6kuiZDnFM3cRMKzh1oTupUZmF5p9zhj4mTWATHt6pcSwcKCTGm7w5UhomjJ4ipwpUhGYJgowJfiTC",
  "key9": "3Kcvkvt5WS1JmiU3PLKnJTkiYkx43WKxAP5vT6jsRSEMGMteSkTT2KHMgByGiyr8UpZQcuydF5w3t53V9z6VqXHa",
  "key10": "4tQEK8ZiQkQYAkLEHdmh6sJxDhEoKXEz8V8pBBj4ArQN9Heisr6H8ZXnCczPcQjVnseCYHk3foM68gYXmE3Y4PGt",
  "key11": "2oNeBxACdJHhSfqkChqESa3wuKqEv5SbzY7YckG4bPZoFiiP6THCv4J1zKK3Zxq7CghpTztBpNiWEXs7nKhNYUeD",
  "key12": "4DJYkajPxtdpzkZnZ3xXfMNBkG8X9ZVUjfG5XECPLmBC66Wj7sjaLC5JZ8hbtjmUFJiHSgBtrcLn3VKZNu9CnGAk",
  "key13": "54CbYakJA55bc3sZPBHub9sDMZmyXPMKuBTUsAyeDZZ441iYQTkz7jiMcvLE4RTf622S8qirffL9CYjQmswepo9q",
  "key14": "28J3T4qu4mEasaVQYmFkoE82wrcrP24j9ds7zoXhKE5Wf7DAeEdLCzEozDXiWWimFGbbRBSeS3oYaoUYjYbNutCn",
  "key15": "4h9Av1AqZNtGYjD9UHr69TZ45TCATEsB3GisEW6nmJBH1MRqfJW5223m5jS5Hrm5DnhGWtsC75rpxmA5LVYtkWPg",
  "key16": "3Ye3zFm9Uw5gGrHwRwTRhM2LxLJ4srrgjdQ4Lqd8tk1KFdsUBGcC5KPE8Abi5euoWfywLtSnBFcTobtQp8eGHoGE",
  "key17": "38MFZxTGiQi3A9j5zDJL4jeMm87rpL9pwiGRA7sthU7o8KpPZb4dqaNq8UNBQZ3FyC3u1fFdoJzStmj9AsymUykz",
  "key18": "4vySjJAuhjhKdc5qGvgqXbAcUUewFu68MbdL7NxgKSooeK3QFHDMhuRwLi4sKc1GrCdapAE5K5zC4DKBPccFZ52A",
  "key19": "b2scMZKu7eXsVWSR8HGjobTjPRXLUeotrbo3LHmsFiETRkT6Ao12Nk3BiaYKLgKK3RE4TfnLz3VJzYoQ15c4ndk",
  "key20": "3Y7AmcRLvWnvMLcKsD4q1P6FvA6RGxQAceQqCh1R9CEYwwBEAojKYJQmJrQwCxfy6YA3epa1qHvH7kMnPmrPb9H5",
  "key21": "2cKKCAxD225he6X6dy7oqd7eNAuUtNLRfH5hwNrmyh7zZyntFfJ7gYPEkMLxcw3StmDieGdZueaGjb1otx3d6vaU",
  "key22": "sK1LhKkumZdAtNwAL5UaFoZGSvzWtVkNSymwAxs6wXJW3wCkBfFCBpAhtTGfWBz3ohBmTZftZmaVDUicV7TvknW",
  "key23": "5aBtPeJfhHv7ExLBPwPszUTxWsv48qoR4K5pUmmU6HJCX7y1csXA96crwYPjcR8PUML8U7DJETPiWkPYq7fJpiif",
  "key24": "3zyFQ9rqNcVihshTiMbACfQ8xjNMp66AZQprrf9nvXPMKbmLQqcBoQKoo2Kyyws7h16wgHtewAfYzBGgrBrfPCAJ",
  "key25": "3fh2W169S1Xxg5bZTvmHGdw9749XFBbwqWzJst8B96dm5ab6vcSomWMT9LexXJ2kAX7Uy8ChUt7prKeaNKqu4Mh6",
  "key26": "WR5TTQMcfRBAgz3n85WkiNPhUR9zSBkRyGKoz6FCjGx4AUN5drJaTy1GJzkQKnfXGRggy5AsKJ4Hek587ZLVneS",
  "key27": "218CrkA6JzJ9Hig2nh9kSgUK6jTGeXejNmARHYXKNgC1dvuykuNUj73uYPxdBBdApBCFgaKnp1uYuQXZ9HLqwjym",
  "key28": "3oLiQcitSWJkh6y6zVrzf51bbhkfatJRTvvnU3KzTiBHjfdEe8eoqQcBi2wSCwuEmUhwsf2XwGu47NA6xBBA1nNa",
  "key29": "4Z7KTSMHn2hwLdvL76gE44FxLJLbbq6orKkj8cVJ6AwAzHDPwwSaqyxyj18NqRfs7vy7jh5FyiBfMARHZ8it53px",
  "key30": "44WmL6hvLtJEE7SgTTftbV6uwvJSN5EktpFSPwSRuSfR5zS3aAixGCPZJuKG25VtLcA6vC7qiNCjHofkn1reyHjo",
  "key31": "4uvy1GreP7n6Rr8ybWNcPywgdYkxZjVBh5DJ4dHG6bBTgQbE77hcNBakcJouPr1dpwD8bcxN87pt96MiMEx9gAJD",
  "key32": "63EjcwuKim25MDwTvJvBxd894V1DzpH2bVb6BangCpfy1JPyXQicxrkuQmdqTFWpcipo1v86GxMFQXCoX8Ni7dj5",
  "key33": "uuVm7hExGjnwMCbLYSuu9kbRjapNg7KLpAN3aM1bde8mhYNozumTchsTc94dPbyZoG4MWDRczHvBwUw8ZrmTUeN",
  "key34": "3zEvS5hWhqorY7fNDZSFTNEURpYhRv4L1p1QuWJkJUmJztYDd7Qs5tSK9ub9QShxV3Q5G9YNPi7ScX5jPd3EFodZ",
  "key35": "5SoEJKnDx5i2EBkMhap4STY8qXYCxLM6DzG78iGseek4XmsCgtwwmKTyYfgBa1T5hhd1tn68JXrVy3KfaB7HPdby",
  "key36": "acfcSq8ZFNAhverYYoNbUMCyUr3b4SQxBamcj7kt6y8GgmpRzzkbQhyYKhToCBJEJbU5KpQsNANwy6jpJhx7mCr",
  "key37": "3SiuN7CXXu6TAHGszdmusK6zF6ezvLvoA4jX2U2WRRjvEu5ZSuVW7pYLnrnPwa63T9crkxS92Uyk9Td26YRBCKhu",
  "key38": "2cNQLxmCJkAYrZfT1VkC59Stjb7fEXJ4nZjVsNsQ3gvtjjkorDcdhQNazoN36c5VLnGcZxEnevMYuymY28z3tt6w",
  "key39": "5AuSuwwv7p8L61LBWkVFHYWvKm33tXygVDWYcQrufSuny6BtTSAvAhogD5HVdXxnrw1mMk7nkBWfnRWeZQHyofRP"
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

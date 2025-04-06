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
    "4zzXXrn7aaH5D2pdBAxoYNJQBUpNmJS2AAXTZ5y7dyT7guLGxqqbJuKUSedCbaXQzRsVKWMyMzuQaj9t3zBv3Jx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pBGuf9LP9Ha6K7xvZ2svKr14LLXhpydRFxY5itydnfotY4uVKQN6fCuiG6DFi2R62cFbXeLFDcYQuGZ1CcxC7VA",
  "key1": "3wVqQmPZ3Cwc9xB4HdRS2Yv1nzSpuVJ12LtphPNdpnzJ2nWQn8LmwtCLQkg2Lj3SpyB2Akr1fWZvfjoqxwLmG2Ys",
  "key2": "3X8EoEuTHwpyzs26TKDxTteNwDuVjHPXouhnG6kuorCKtmTUZvFcgHrp2cZw1YzBeWCmBpSx83AE7jtqFbtg5xu5",
  "key3": "4SYp877WwtDBbXiVN5WAcRnjHFobkQdKDojv8o6tPSswZmu1cBcDVe5PqPW8CAPuQ4ygHSPFXnt1aYr5zyNkq8A5",
  "key4": "4rf6gf4wZWwvgscT1FbTjsD6a1pxSbvQJwHD2NnknqXpJvsz5dyfTRsv7UV6mydiDrSKauCX1FQS9nbwZmcV1NbM",
  "key5": "4nfoUb1ewDYUiSXj1nZrB4VueFQTfn5vWsiDFiGhdGaweSFtnRsjPtTnuukga64t347isdkcYJqbny1keehJN16r",
  "key6": "2UFs9vZSHMCfrGNZ4nP838knuw6VC84F2YPHqsu9MuGvyjeWUPsWgBhcpVZfBTJMHJJSCtT8pamFUtUfokJBVBmr",
  "key7": "5uHLHuCH9BVsaY16DwJ5EkY8b7KRGbzRHvnXW5rh5ci7KuLhUDcMWY2FkihrEy2NecKkfLcTNHR1Fob2ZLUf5Ffa",
  "key8": "3TcMXPm86atcXHf6ZyFddFrHQ5oAuhEGxzvG3nXimE1trKeEEs9xyHLrbrGtRwBzKMdQhWD1DyygQxV2S7HUDynB",
  "key9": "3Qj3yjHs2dektC6ESJyxYoPHGc2Y2BGELPYhQbCtsLunJyqa6gXV25PhN9aomqXT3XHurAnJpU7qPssWNFQ5nuj1",
  "key10": "UkZ7bnDw41mYH5nzJALEZw6STxUqLR8VmscV2QCfLZhvrWxdDV7QgYq3aAqfW69ZxT3hBQMFAhaqqymh1yuKGzh",
  "key11": "5hjPjAYLF4gU3Gqa9v5P9uwwqnazhJijYGDmQJBzhvs8xFYG3xweVSU8Hp5gkfN1s9y32S7AgVnkVQTDjTQUN8X8",
  "key12": "66x6XNTvTBbnif14Xx5pA1hb2XnKwJEVqGKAEXt1VXgJzj1y4wVhCRpfVpsLRMB2ZiwDiAbWziyAHLZVnaBdceci",
  "key13": "3xTJDmyxDWeK2hz6ekRe5f7uEP9wJP7fYeoKTn36cHhxj3fJCihdfksZZztW5YzJwVHoZ2L4gA6MUHojeVZiPtGt",
  "key14": "5nMrfNTNAbASzbByEy5f2B9RNwzBXYvuKuLe9KNd79xGGXDtyD9apf6ic4eRYTkuuEeVCAfj5DCC1zaiJr8o7U8u",
  "key15": "3467ucEhY5iz1rrMBkXuX7Wbr9rGtKL2EVUdtKJPzBjgpMKgkKsip6iEUEXm1hpPsdn2rywwuk6hS4yZravyiWGj",
  "key16": "4eV8vdF18aG4sikYvTpCQhSLiy5eMgq47HWGjH38GPn4Zu5ZnjGjPsYuT9CRx2eSrFeKtfy9novVRNCX5SdaLKD8",
  "key17": "1EzZd3Gm8JSqQMC6ihQxVSczrb93SYmJhgqvjeg9nCmNfRw6KopmGqqvHkMQurQdSogLcfTBJDAdwZaEDWZ8S7p",
  "key18": "2QDVEEtfSJ4JwEABoYqqkXe6et3Uw7btPkabyox87NLNggFD9WksagbpEHWdGz8dRtnfRv633PG5eqT78xgyfcuy",
  "key19": "5PQUoJrKuzCccncHB1Mi8QrLuKt7rLLdRLUa4gxxGuKpsp6W83Ery9KYMCmnXt21uzWNtc6pcuY7QbEH5ajoEQZF",
  "key20": "45H8LBEb54VCiBXdkRySsRsMpRvrkNxaBy95YnUU8hD2uyQdw4ke3ZfiBnsTD4xg3kWN8kGqQAraJ2osjNGutf2U",
  "key21": "poGaMMeghn6JF3muispQFC9FEnURhW1v58vko8XKfmgNBd1NiMuMZ74z6V6QVJFuRzPv2KWL4ZtF2NXdPFKzBY3",
  "key22": "2AQ1YQRAGdXPAvrbw73GwNL4u6yz2vNFSHPGhrMksXr3Xqdp6zNHECwJE7442W28TJEEhFv9dLx9gXnAEEJa5kFi",
  "key23": "5zegnLWfwY7mL55fiYrYNmxf9kWZMZpLJaKZpcyT2dot8En6ZUNe2e4w2ghfuhBHjmc1Ku3uLyC3jaDEmRUuXUbL",
  "key24": "3qksMA8aY4pJXfHAgYWKHYu5u5oUDL7GdWwMYC39htbCjdUYhWJq3Z28SkKUowo5thARrwLxfYgkLqbLcLRR2Wfa",
  "key25": "2HPZTZo3SwJF9XhxStjbWxf1az5YgJf7XD8T6CZZmu1dYd6sy1pz5RRaRECNkW5uNgZJvnTL7Qjty8gYB8ZM73qE",
  "key26": "GfZDcq4iw5xJmFrBsQRVwMpiT7GMdLUAr1Y8tFz9MXWhow5DcrYYB3vjxNmk97G4tUrLqNfvz8p3ETwwJy9FkX9",
  "key27": "3hocY2rzryNB3vEvrDhARrcLNV5FQX5zAUhunBexDrKxrT2kTNEfjgAUvx91vKVdMmqXJBXEoCFhSzhP6tmSAdve",
  "key28": "31MU55g31GKzWp1QNojLRLAd6DsU1gMY2RxdNuvkWAvtmMCDh2aHSRa9BzHqjL55kfjrEtgebDwTza4E8Vd3ALhP",
  "key29": "55eUTR3hn6E6vKisuAj9wn475PpGPs15M9RaFkq1rperoVtq1hZ8PkFbBr39NB9NHqV5UkozPGJa6Q87YJjRSSmz",
  "key30": "5PyYPUFD1NheLCkJbSg3qx1caP2EvLZZsh1crbZTy2dAm8bFVX3tRz2EyYJmXMAZqdnq3L2SdhR56Fm6TJXCTZUw",
  "key31": "xQAQjydRTw9626QzTHMrGZSHoUmffoxPEFfxzBVxeZigQMTGuQSs3PqSgbjnyCfU86bxJkwgPxB6EmUGf6nVWDA",
  "key32": "35mfgEow4tLWJe4UV2s1h5zyAKidPxBn1S7pqJ4BLjjPoxuFpCZgjTW4eJTK3SB67CCVesa3dEtXcrW8jgr7GgkM",
  "key33": "5yWXSZsn7SimqdnPdk7fcknD98iPpqZqToH8TLK6uuopF44aAAqzermnpdexFJVsE77UqFfxs9WNdFtkLxUvQ1x5",
  "key34": "5S5JWZTRNb8sEKTSNpHDUydarN8w2ntbrXNvKNznGFmaoFyfczxYBTPP44EXxpiKfqRkYr1WwyA7qzir7WqvaQvu",
  "key35": "62rebSgp5LoJ5C5Fb1gjxL5MkLGFZmemELCfA864MJEh8whKkK48Qjdt5jyq2X1buy4eDyjqZZgHLrcng8dhE8MV",
  "key36": "5sKunMA5LaaXuxFj57gQWSYxMUnosWUZCqEnPXn72cVRJtnkXc5jRaUvm8hqFYfWBxZhyxxK2wap2HqE9z2MJgkc",
  "key37": "3Ku5XJBRxcS3t4afAN5gEWFsgJwuxFqEtnkZ4zKyfp9M6LJWUvrL7Tk9pP37BM2Ut4TSzNXD5mpERWvot581ebvc",
  "key38": "32b9iiWgCkn6oSu552YQHESR4dpX947hTpNWQeWQ2bfFUcsiTEMnLGr6xoCLpTyqBnFvTKkA6egWVNMYhc8hPPvP",
  "key39": "5Vgy7qQsm3xxVsnBNCLHwKRHdZG1xW5VQwxXJFsXqUtpzedk1uLjsQfaCkZYQpoqRFxEfEwJFyumwctwjvy185rr",
  "key40": "48ELeFxBt9n9kE3LhaWRChGdGjHF63Ayerw6zXTTCBTzBKWZ61VDZpDwLjR3BsP2r3zAB51k38nq8arYXWT4b2UL",
  "key41": "DqXrqAUKvn5TKEa2nEbM82Xn7pQsbUmF7QagF4CS3KdXtJwyVfB13tkGSL4ffmK6KEXuD1hjruidooDRFNo8zVL",
  "key42": "2q3wWR3YcXq3tTNdGVNrfJURFTVeRc2KauJaEGeErURaosHc6iKWk5SrU7nBZrYPhgN8gcuttbo4KXf4pVv3jgTv",
  "key43": "5vnUmvsdxvU2YvfKrSyai4jgedRkhXw3LzeBzLDE1YS1JHx3upqPdLyAXeYii1fNf156vhN49sp1z7EivjKkSLdH",
  "key44": "2Pb3BptePFqyPTcpGrzVJpj58xd1cHtL3SXtY9k5Gt6SP5dC4GkRSLN7EpTQjo6NHWquWD7N62qRYU7EaFymzrMN",
  "key45": "PRwWP6i6eVKanbhu1rKF1vUiXEjo7qu481pqnLY91TKQ4ZuRtiimPfX2q1gfJF24HJCobKZrcXoZTMmrFm44gm7",
  "key46": "3HcNoaakPKaJfgM7mbqBAHUXNXvQ7ERd9ED36UGmmh8MobRoo9iTgsvZHmxGdfQNN662yBDq1LU2uYmYNpDbrkSd",
  "key47": "2owhLjikexfcNVdQag2UKg2CH1bVVetjBhFeQwbYs9arYVZqHwpKYJeijfgPt7yAiXqkcp1mQeCrgu5p1NEpvQwL",
  "key48": "3uAFfdoGxEpP8gcX6EMxN5Y3TRu9Py1jkzyjeyyfY7x2HMQaRqC5mmvJKeWai1omWFNSuiF7cFSxGrVvFycfqJRK"
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

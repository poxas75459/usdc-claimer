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
    "4Q9QgDV7TSSRMFHfbHWzJZq7nsFkVnvHPXk62ACjBrtUF4rMr6WcQn5L73FkWQ6FrHaAkVM3R2RyVrPTuE2eJkgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9AjQT3Dx2fJRBCC41CzU6EL1PHWZdkhZe8xmQzhBP7caMENB7guWBcjLk7NoLXM9ni4CgpLq4tBTjFH7fg5FdX",
  "key1": "2CfLWr4fqr5oXSccRVfCDicya5GUJr3i2opbEnWfkNgTNFFZic6maBfmZRaqLb4eN4qUWMzn68sDDSmiugwdiQbz",
  "key2": "39JnFj5oebpbjkKBmQ7aRApyjBb668sNEUGJHSdRhC5Qm3bM5569hNV7Qf5Jr5y941h62tZRif8CxtgVNfqPnsFE",
  "key3": "BpvyrpFGVNhgUhvH89DcMNfdb8fWa1JQG8R1MZ8wt3cc2qeEhXAca7qewFswboycDMHMvK6yV6G6YHjrgpHPdRn",
  "key4": "2ftJ9h6HKMszxFcLArq3LxW1dtnsiYB6DpYN4mz9FHXFaHjoizgBrY6WW97ma5AT4Gd6tFk92upiJKWsF4N2JaCk",
  "key5": "2rbSfTvAGAwHL1tubQkZQDz928qpj8fNayqrup4Em9iW4jdrrsjVDhTn8SmvXFZp2TH1nfwRfc4W4GzYhTUBnZVx",
  "key6": "4c3F251Zj3MFHFxSbJq6v1X1Wjv4xM58ByTBA5Rm5VgkMHNUWWLvJNV4wmMYD4Skmef6afDoEjEo5QmbTfGBdTUN",
  "key7": "b5y7dwCj11rF2gwvK6nJycrR9BtN1G5ovtqbZMLVbqQH6EmebFGjFmFfxgT42GYUz8xh4Z8JpxgW1zQBQGKYh5A",
  "key8": "26vHQWHT8P7tYzsSGPzjZ2eidkBBYRkknjNGAsQhCmFbF5aEFi3wX9KFfWkEp46TUCZRbNkrUjSE5MohmWKtVSYz",
  "key9": "3j4VoktmyatWuENAMnMb6hUKba1MxZMhX1742Dsb2ctuCB2nzyLzAJwbhsn8KiTQDS3ao4hBRQhNEtBjBTgGVSUQ",
  "key10": "4wvrcQbf9Gpuf4in22Nn1uYw3fia3YbbnX1Gc23tRTSWpC9Uym7A5dAwRWwABdTJivuzLEM1BSV2U4q4oz2BK7mk",
  "key11": "5FgJKwzNJKbqPbRYQoimxWYF2dEQsoik7nuEWkNgsAo4ztYzk8RRCfeH4CdUCMC2YdtP2as4wcr1eSkJZxxnhYgQ",
  "key12": "5TGSQzWHQxF2sGBLC3tKyCWmt6eDZnXzsDQnBfCfpfP3QkU5y6A1Q7atfJWjMt2UVY47Qoe3e14F2rxWzUAfQG5V",
  "key13": "3WXnYv22sw4MX6Ffqqkx22yNEq9noxGA8BdYdQaWGSbNpmYzhUoaaWqd5zrsKxtJJfL4aZoSnBcULUEBAPnkXpVn",
  "key14": "5yDSfy8wVeDp6rrMbuTcNgqy1pZejktspPWuwkrsJ8jbWM3SQ7ACRWXq6bobgbVLPjNRQqfu5RwRH8RbxckXuKA9",
  "key15": "2mQk2uZpjvGXEck8dRAineMXTsHCupPtygPErABTUJJe9HmknMEMV6THvZUMwqNE879Qsimt5hFiPVDqXcCMxpgo",
  "key16": "3YVzzyE8MowgDXFM2jciwWtEv2ZRfY51YPLXTS4RRETr3WsQY4ZQUJoysiyMFCzKsGLa3rM82hWgL5UhUZC1Ub3p",
  "key17": "2ae2ga4ZQVu4RRfL9Sbz8b6Mjwv4eWq37gdftaNkWUj9ikMWv9sotMKyk7gqewqiNgV62K52fyNjZbxbFh8eF6Kc",
  "key18": "24fnekksaLXKRr3icBZei86fM3mW5GnxnmirqFy9K9996totyytwgHAaNi1JoUeM245vZUazy4rbFdLoAL6VzeHh",
  "key19": "ZiATT1G4TnGQGxaPQkmTKHUmhBLQL7ivfG4zGBLL77cEAUc8w7TMXDAC9uyXZrHsZdNeufSqu1nz4zFXKGfcFUb",
  "key20": "4FUWVA38mpEAMEBHtwh2ocRXMDZ8ByCEwi76BhihrXxUUT76SeFYiJcHAZ1cPeHGio54Pr3KQ32meB9Vwqiv8vHP",
  "key21": "5bnyEWhn7LXFjdCYvcNza1k3BQ5W7dEMM2KLnWCizChPTnREWd5RMT8Y9Gx9EFzcfNTLGwQxc44zm7otCKmmcDTW",
  "key22": "44TCVhwc8H8PsnZtnUB9GTGYGqETN2yRbUbdSxvYxddKrArwiU1QC65PonNT5nyVSVHp7efbPJ2uSA1YaQ214qyP",
  "key23": "5QCBrwUYaLhn29fLuzgwYCbfDLTMM5T5YKZpLmiUT4DHJo1taFtc4mQrVZ7PJmpNk3dEgtDwJSgWLu4oYgPST6QN",
  "key24": "5j511jwnADNAaAnmCxf95Ct1XzvYLM2P26af5VN4NnxjcTquJRBzRMcJaCBZX5nNSf53GjXR9PbfumVFHPEjZmit",
  "key25": "3QXSe3yvpB8MWkwqY7GRksHh9EGSpZDPiWsVXvBrh4j6gwkDmeBnHQqXewcWHSKAmGgeH9ntYtWHkTWHteRRzcXu",
  "key26": "ca1CMYFZ4tcCFTmDkH1t3XNZ4FSgd1Wu5G91YWv9d76q5kFXSSsxuhvAA5onkbm14VSPDLTm8R3qSsZjPwZ8hCA",
  "key27": "31y76pzrdsynveBeEpioPQXpoLVG5216nK3xy5mvyJAW9oYeKCYsdVDcQKN3qNcKHMLJDiKYpDJ41i1LKKPwjkfo",
  "key28": "5nPZdfmL6nMi6wGSsgwHyzdbdBmqELjkvTyoGLbuCv7E9jVMyeMRGxmag1gYBPbEczaRHss98ZQrVATu6aHJdGSx",
  "key29": "26haoVPt2jjrQ4gzwDup4vgBp3KJuXagj6a4qVdPHwrdDjhHfqU9qyRTkehr21xbyiMPzAJfTKCUwHdnhUQwpM2R",
  "key30": "2HUoUMKTK4Tq2J4oU5MafPXkCNHhGQPGMagT1TaUPdohxLTBRpp1HATa74Ba3Dkp7qxcgjg3fG769VYrpMvysTy7",
  "key31": "4aANFJst26jmd8JKQSwZBrajcsB7uRuNHkKRiGSKBgz3VhDnkeEct5XCNwUebu6Fh4YsVzN5y5wMTzjKaJd6QN5K",
  "key32": "2jTEh31ZXEGQMQbczRtJojvkvF3D84obRiu37qKtdBJwLNxPKH2M1VJQKSBcaAJnf6K64Z7CitDit52MGUG1TzHn",
  "key33": "hAuEDLJGP5kM3BrdN7eW9YxpN2dkNXFXVwLSe5SwnfN1M1VcauXUgKHtdxots7goeMYPDdesuEyLspJ3z2UZBKK",
  "key34": "42g76T34929BBogXmAPup7S9c9RcUgTpZgwKPeE4K67vsBuoz9KqzJC6QZ44MG7BAzXmCctQNETzyPkprzCjyRmk",
  "key35": "SURHypatcnkAvCidxQTKTcCmee4zJWw574ZYUKgRKHnpyB1Q3AyWrsTr9HMAdk9H6J8Gr7j94yw7hW3o38kzo8k",
  "key36": "PLS5F8tUBspXWgwr3qRLhQ1JFnKCugKV9d8AEvpMJNQbSUvf9qaSwLqjdSAZ7KEynFjpnnc9GdPYpLV7d6dTCmU",
  "key37": "4E3Qcwa8ezubfPwPJqJMvvmnYin9YjKWApWyXVSAE3rytrAmBA6rj8x1V4nze5swvVomZgN3BcuyvzWfpDTub3Bp",
  "key38": "A3zYaeC2mCtCDajUR69LB3eqb5ywL7yWgmyUXiQfKKZPQyb5xvHmX5gYSbwAtbrrWZzc9po9fy9nGvjB73v45d1",
  "key39": "5DmkcNS4iTVwfVfFuVseXgz8NGrg2zeLtq2DhWVgmSgCJjyP5tNHiKFVuqDPbwsXMt94MxAJKHTvm9N1mZ3UjnNT",
  "key40": "2EBJC4VQuXgxqA25m5j2Qwme2U1SzmQRi7Nd4pYnh4jXazaYv5Et9agTasta927UJLCA1ZUa4rVSai9fx7Yc2vKM",
  "key41": "2GR4xL7AU8AvHfmpD8CVpzEp8E9ZxzjERnx1pxLKyQZssv5x8FacXcn4VULrAZGpFn3kWXitX9HMdGd85bZRdCPY",
  "key42": "2sN6bm9FoN2PAYXCQsDFusi4wzqWrKz5pkoKztHWeHcmVb1J5q5k3BihVNKqHj6yMpKUWEdPPW19vVmUSWtVTXg4",
  "key43": "4x8jxUQYHY8dMaYy2Y3hxo6PH6a2JYp2gf7fNHnExqEPyFCkfiDoy17EbeCR7it4K6hXhosGaJyzP5iWWjQAc14y",
  "key44": "2ixJTyWoVL88xTwDg3koQV2ex1jX8uoNYshdFGVzV5eh8BaVVM5adKK7an3GjvRSJUNDwXfxQDeGfoHPDtsirAAF",
  "key45": "x1LESQQp7bm4sppHS2cgefT767HE3aSZZKcP6KD5GN9SZKB4usqFd1eDem75hCoaHjnWrgniRBjFWieaYJPQbK5",
  "key46": "67YWo4dTC1X6dtWx3FN5SEHcPAZJw5mwJqBa7e3oSV5YHkXLYpefRsmTkewEzVUmtdYqYVTeHprtiatdnckBrk8A",
  "key47": "4ceuhvahVivgnK7vMSC1VpVoXcmHg5CxrGazb7pgE6uPB8tcrcpm8vfYJ3CAZvT1SXtQQ6GJLZ4sGXszueczVrxg",
  "key48": "4kJwN6fDbbVRg2Y5iqFaxWyxYtafcPMY6fctZ2VH2pMEXxVusYG4DSE8w75VGcXQaVq5q9tiBn7WHhoSnNVuxpvi"
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

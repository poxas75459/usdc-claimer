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
    "6ia2Lsjt61jesYvWWd8Nb4YwUpYKR2eK3zYkU61wyKVPsfGqFyhoYUMetMmzynYokqh859MgJttFWD6VAhqVAZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jw1CbgwkYAVnsV6Ev5burhRGMtkiYYMk1k2c1JndQaEkdHD6j1yQxbBiN7ta2Sk4MekBHXK1YDsdLEiPaGu7TA5",
  "key1": "4RpsZzXTRkDwyntpMcMbBj6xRxYoRvUx4gTpKKcwTgnWMgdRSM7teFycuHH1Yz5xVWdxpcnQDXYMMNm89RsAzQrn",
  "key2": "4j61g3EbJgLcJQWnBqbFQAUYhEjPJ63xYAtaZE7k5wcX7ihDYji49HdgRkhKJRvXSCtKCncEs3yQK99wLxoHcApc",
  "key3": "2NFxSwDKLJ6Q849gupNqzK6i7iSVju1k2ZF3UyTkQ41AbzUCyMBGDkLpaTV3mVG6bFeNcPMbYovnAX8tTekbHnKU",
  "key4": "62V5qLkQVaumkpXUGMRYSykQCCpfocr8FYQUpcKyE8GbPvxvd9DbY7sqCGn9EzUy8KzQznB4JCmcHnxKuPWZRwp4",
  "key5": "3KyeSE4nPVAanDfZA2LBbuMaGv71JR4XY6FGMUWgWqzDDiahNybetPycY9zTZJqbrzAgi1J6zLmdHeyxcppvpgdQ",
  "key6": "2xceHb14XLBZVBo6EARpz9FyjyikZaAdDobbL8a6aDeCxuJLbZcDJ8i2i7dVxGqe6eqTEwmgSFCFC5weXk2dCLiq",
  "key7": "5WsZ7GV2uy3vjFNZsu3sEukWpde2U9SU2Q4PbKiQmwHCgN6LCbLfQLKaUAVGtBeQcZBuJ32tiKe5cCduifqACfyZ",
  "key8": "3PbUbMArbuHB8GrC4NiCx4gfPfUbdSuQNdvZjxgRK9FQcxcZZYtCYtqifZqpLmpGEthTubKHAUR4W6z3SbrL5Mzc",
  "key9": "T7Msgjeq5WYzxfHY9Vjs7ZkT6Heui3WmMMwAzmvwaKqoJZRifshjkaDj4JN4uUSYnfzCSTa6nF2pt4PSKbZrey4",
  "key10": "2jaNw9P9BFP3RzooYz48bws33ofjchT9A2vZt7Ropxka26pwobouDprPRD4p1QeQRUYYV2N4reqh4G4UwxmCUpiJ",
  "key11": "4V1y59HJQZzQUxd6Xs8mBoQfHVt1M5oAf76pP7ubmEALqBsyLFRBf9iQfRvmJc2jTdLernpbzP25smqwT49L25Cx",
  "key12": "3nDZXXYMZVBVn49LL3u6Jk75xr83JQWFJYALVR1HotvdK3oZa22cj1deUwEbfSLnovxraixeMqJqMUv3vEevWmHn",
  "key13": "5vmnHprHYk9NMXhX9sRT6dgkRXHodghbwVYEm3q488ymyK2dJWeozw3xyMJXxBmEGAQB8CPqP32r8k7xRNvjX5mh",
  "key14": "3eGQWZ9N4uDyEb43EykqwXfKoWau3x5sNHVzNNFXKyim5qNYZikssrh8gfrSJgqTXnB2W687anunsKpmGWcVFBZ4",
  "key15": "2SaxjzAMF5G1NZx281bBpamHS55T4oT2wuoEEhx3fwPs6S1xDsEbVocH2ULN2gWzG7jnS6ZpsG4xHv2sXTRFbcsk",
  "key16": "2SgVd5hwmQ1bKZizJ3ozLsy84Lb5Vn4D8GcNXjXhmj5XqrMeUBKEuZTXDg1MSbAq7Dh9p7DwwRciX5aGZBGoqn2n",
  "key17": "34DjSaTMVfxny565j2q1FfcdL3haa3zbLhycuzCWFejxa91j7Ff4ddeeeYDA9PU7rM8GxDNkP2aFL4SR2kVQ23hz",
  "key18": "4TgSpSr9KfyBbPJLB1cBTfiY7qUgjCgMvvFL424iMwqdRStP3LsAEEzBDCDJeGPDSVkaczqntDq2nD3UhYxLWVhz",
  "key19": "2XSBmEc36VePRmPTSto44kqoKa1syKnvgmfbFg8ZYHKzuME1qUEpmpmY5JhUkw6RMUwBW1wfg17P2iu3Ry6mPeqY",
  "key20": "2MbnhDZuGCmFtB1DSDZRTWQwWQmyiDdD6u8Nn8gjjHGppMHvybSoF3Y6zLaeZHyVf9M1B9jvqpSGyjqeZEm4Bkw4",
  "key21": "5HYQaDdrTXinBRH1ycJzpvhJ8gYFhzpDBtj59zvYJ2YrsqHsqBATdzy3Q7zCoRLEkxpYEv3oUq3Hfom5AumzR9Uu",
  "key22": "4RyHfYTxekyFe9Hgmxzwu1SgviEH18PyW7rADmFQAqVjvVS5G1ABvFgovPuJtdmuzwV1Yt6GXnTcntk5cXHyurEC",
  "key23": "VWo999svNzupqqSYDSR7ikJhVEyRgTNR8ExhvFtdqNDAcbmfeKGGamFTMHT7xwjZ3y37agFJQLZT2fX27SHFQg4",
  "key24": "3jTop8BJ3ZLAQFdH5SAX1ZmTaxQ64RJR8BhhHu3SnACrr4umbMvsX9aHUEzGs1XUnv2wDu76MXFRf33kwSF7ywLQ",
  "key25": "64WSBx968mbGyv7dPjyT8kPUKZFy4j9NnzxifTRLEJz4DQyBDAfBdeJ3CrwAoje3YUfuFKpJNXFyB2HgdviNn3Ps",
  "key26": "5dvfQbLuE3ZHL7g8yTjvFicDeG4nYLDJUngB5fwAXjF3BJGngc8FKR4W73XdPznqHpQX2U84eVcTHew2cYtJYcGr",
  "key27": "5qWeg7HjRNAHwZB8uo1sJno9nA7Zta4jT2PepJ49p2sJ4wATVrok3zzz4HfvZaqnGwcz3aAnFcd7pu4x8YarFbuC",
  "key28": "2MKpkT2ipmu8SVA6k3QQW5nTBKf4sbDq4XbSbRAQYFmhuoCSHU6mgDQP1N9vGUEp1frnGneJZCv3ER3k6iDbXC28",
  "key29": "4s1qEHjubSPCsHPbN7q8hQfgTVNQ4JSG743Vo6uya2yT34YA1ZRunMSGvKaAhiNefGR9NqgWADUVyFJiP5RoYB8B",
  "key30": "2MCnC1Un2vSR1Zq6LK9Ro9cyjnm2MP1JpaimG7Y4FsPMZT6vMYEzTernTvP2rGrjmNBDVJ3UAFUjh5zawo3vSvuw",
  "key31": "64KBzxaJpYEqmJzd9hfFvmTVBhEmcr2gYePBgrpggTa5QJb3ceFkZJHy99H3nCmiXoRHhTBRQn9jiT7r6oaWKx3Q",
  "key32": "N4KcofZf7p5FfNvorFKGtdfVDpYpWupcURQB5LzocsPvQD4CrTsaCTS7X3jhwFf4PnWk6yEJzqdaGdbGEnn4gEV",
  "key33": "5auiCvD7VLzYBxMPTCnjfcRFaw5ae7sBzpzcx5gSmoJRbAXHA45WCs6tgzH4cqaWVqUfxwBzRVnFAjQ7DdgqCn2W",
  "key34": "ktrkPbApyRsxSmHtcDtQo6bTU2UCZwQ1VrrYvdEidV9ZKU3wy3rLMK2BqjKe1SKuyFda2c3FvXQJrnqAtbvy1By",
  "key35": "3AB1VJvWv6JjuQmHdDYPV7sv46KqLYZfDQCCufegvP3u5uAPMhUwz3LfRbAyzEnXriP9pcCEcQW3Vpyo4s1XcvDD",
  "key36": "55DfzvXBtvg3vZaHNsGGaNYWeD3qnELcoDMCyipnwqGLA9XxvgEhcAfZunqxNiEbUuvdWk5EfoMR6w9Be1cTsNyK",
  "key37": "4n27Cs9eW9pkv1BJiUJtaJ7uzszeiesN6B5k6BHD9caAnW6D4sAsDJzpv4eevDjHhmH6pwQDERuv4XCsn57toAbu",
  "key38": "9RXY1KSrVnorx7iXkpqvVWR2MKsZ73Kqe3FbEZHryF1LzbBC9Nh4E4ND85GdP2utLg5HswE7GtdErXsZJkuxqCW",
  "key39": "3apMPh8PPfPUkpnXU6ey8arjaqCQJb7jrcRdPaZce8oqpaYQuSEMysatYD8GEBmVHm2pxpxrod3khPVcn1dxjVpa",
  "key40": "3JfF5Rybh1nCzXkhHNUFQMk3nKviM1WWHisg315zvfuiTDWHom7chMZb5AtRz1B3zXWwQnB5ZzT4ozXC7CFkDYfb",
  "key41": "51k1XMpsRUAevsdqou22s7zRb8yfS8PFxtY1NReaUhe4GnEoWWkWZyt6hn31Md9P9x5TWoPDtoAZ6uayz6XgyX2t"
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

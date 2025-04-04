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
    "5zTiMPMZ1h6cayrcNR1xzjVyhyP5Hp246RRwujgqzTmhsDM9SgNcmEb5xiM5mQGFncpizbhsj9qHWXwfS2ZgFXLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NbLGNKfzRAVGov1MzFBfEdPhxB8EAqmfzq96oBJALpSM2AZAdg3h3JG6iXw9z6rr8nVASwfnhmvKTbe2vgw3CBt",
  "key1": "37CoetsixjSFrB2RtVGRALY6K7fJXxmw7YXCQFVEJeHNhFqaqGjR7DtJVXtdC8Ub5hECLZY6hzfkesTjde2fyQxE",
  "key2": "3iytRasCNG5PVddN88rGXjfAWUGVXMZ1sJq3w9rXKS753PsDtFZy2pH5NYajaK4MhH3ZPH8diRkpwhowb1EB6wGf",
  "key3": "5XAWdHdS4A9tCmKPyx1iy5GEK4v4DieZpC8Sc862NUkwQ8mJJC81eoD37rMpu5yMFgFbXVNBynsq2WW2CtGuMRUJ",
  "key4": "zsvALk4bXKuxXxKhmJo2PMsBi98gc9BFX7t9EVBn2Ffjo2U5r6RjZV4Dqyur2TyNsCGPBTr8JfWPbDjftuSkeBz",
  "key5": "LWKdqJ3nMrtMTPjqb1dPnxokYZ4tsm1dh595q9zAyMC4Ea65LwRVQZCWz3ygGVwyNAYJYVqqZwHscgNUcBDyVxz",
  "key6": "VUfYxCdLkEZEomJ1Neeg4KgC9ND6wyn4egVidZfbiPzvRBmky6wkxzsRgPL4xdYCB8CgxaRs4yy4uaGzJPdK8tG",
  "key7": "4hZW44sivWmRHiE64kbkZZU9tQpD9Rrxub2gS2dVMydoCyHLeRWmX7nEa2VbuGFxyoh71kT7tNfpu8omPPQte57K",
  "key8": "3FdyMeCc3PPe2Nxhrd5LrZVo7wa5MufQa7FdTbaZrNvhwh1SPBtbjTPwhwgNLMzsarNN1Y5CQwsUuSvTfB244PJ9",
  "key9": "4pGP6Z8Ymj1WkD6D1wonuWJePPBQjAoxDftfrvNPsP6k51Y4TkWBMunGqmzGGR6d2E5z692RjFmcBNTX42ktFexX",
  "key10": "4XGGbupsTLxYui7f8J39mYeA7NhXbAxaoqKtJKHKeUu8kW4T59BFKe3qPECmZx6cM1XYZ7GrSEqgxAUubW2xRZxd",
  "key11": "2D9LJMoWP24882MZEVGMMwXjHzFE6csSBWAVow1qpwcVQJr5FVQa9Vn3R9K8ScJbqK16DzjoHjUyKU28U5q2Z5Cy",
  "key12": "5xduSzMvwZeBfSJ5Pce4Umck3XBb3GFFVxFCasUQdBbSWRVpqrrAS6hsZfbtQRx7yRjHJozX2cmvV6S1SnARRnfy",
  "key13": "2YbKtpQRAe8s2b4mV7NtrRJHtoa2KgUfkm3CevyhaEextQZSkQTKqaG4C2cHp2sDbDceTgArWP9RrmggPEdkw4s",
  "key14": "35RmvJV1APjt4SiFBX1tzwtCrPJbozwztctdtBuz7KwaCJ4DCneN2KcppQchAJsS5ehYffWWS4DDWbBvHB3BeStC",
  "key15": "3nvZnerw6h42QRuPbDLAU2S76YMRCyeHkqvksmPPCuBQdvnwhxjbe8UqjoZ2s529fk3WDukVkyDG4uFJCHocZY4C",
  "key16": "5LqDyLAkdSzjeHSbYar6ZLpvmVtgZMCDn1Z1EnMHhFXKYKGWnrCaPcVDstYzSijkEjpQL9L838jH2K8ETY4CwHfY",
  "key17": "5ud7kV4M6xxCHtpvasbda1AjfYJzMRbsVMLJtHhR8wHbhMXu9ufEALzbLD5CDG49kDHbWzUAPSwJnejjjh4suPMx",
  "key18": "3V4bYqfmJpNqGin7e2EgqCoq4pg6QscU42GdGDvqU5pi7jpPvLVSkzFVjcuuMi8gUKitCukShfvJjxhy7yRLQnBW",
  "key19": "5vHW1QCViHx8FRaW1rxTK1K7Gg6G4LbsXiuffJB8P7ThpkcYKMr9XWef5FDSHSLvDKM8Jk83oGMggK7HDPoa9bZB",
  "key20": "44gVozpKJof7opy9c8H2VzwraduqmG5wibb7oNGtoGfYMsqL82Q9y2a1ukmQdqZ3tzabbsxbsxtk4Yx9cZckgKyV",
  "key21": "5LbLncLNS4d5mLa7E5FYzbsZ3C7yHE49h35m4nviAqaTpizAyEX2ycTCXXS4bXgtBGsKG2bbyN9K4yFdo9LNokbw",
  "key22": "youkCAh3u5QTjMZunioFaRJKRAVagd3n63ZpqytHQ3NbEomoNjg8ruuBJA55mrcby5G9gDn8GS4iqzaDPNAWm2B",
  "key23": "4bAVVVdcnEXNDVaUpG1BLoU9jvzCZZQX8SzLfdA7GnznB2Y3XyoARY2QBsbqdYfJRYwkiZh5TLwvCR4zi2uBdfgg",
  "key24": "47kcQ59HH5qrKTJusvJRn8oVqTV6qjEXDurGGVFGtP9mcauZu5cGzKPPgy8QSncwLAtGugbrzNWxDwYzmmYaFzMS",
  "key25": "4BEyEVuzeUQwBmT4LhuKVyXrDoHV9VDJ3thRX1x1ENVVTjHxKY9CdWH8F3ioMaxUGKJXnLGjgvsMUt1wpvWcA3Sp",
  "key26": "GdNRoBA9inr4BdzpWdk2zMxxiSzaosYxLxEVQmXZsNn2KGmD6TKhu3akKSkrBkj2YFLCt7n4LsrgV86yn6KWDXJ",
  "key27": "3bm1fH68gLzT8BFZeoQRrXJfdpBWs7L3AKkXTV3w1EcAV6jhXwYEdSdziBr9sNKNJEKWuD61LmpcALC3LVMkKPR1",
  "key28": "3Db7LnpyEdXQb5k9JgXxMY5kD3EXnhX4YYJGA878WbdvsUZ2rvaVGmy5K21WXNFdqPvvxCBYK31XBxSM3ZCiNfke",
  "key29": "4PUSgr29kDmZUqEa2687M7UDD1LkbvVjBzeHfJfCoB57pR2ZZPP3xWaUnbR7fg8KeEz5rdBY2GaCT3zijumX63g2",
  "key30": "oUW3vpVeUzCC7om293NWwkjZzyEStXNrs8ysmbzTDZXGTGrkDnmE2g1qJmvP3nwD9WHD7Qw3ehv8zVuWYJEneAb",
  "key31": "AnxL3Qf6KmtBQuumtJSYWVp15y1VB5TcuLdC2JsmESoczKZm16okBv1QrmyZTw59L2zkVL3faN5dnZVqcZYE2mD",
  "key32": "n27zSHhRZF4x2Tp5iVc8kG4YXyC9XKaMgUzmq2LnHvBqaEXAfBiZrcg17RcvcH9EoMqMsCghi2LBVd7FYPktPBc",
  "key33": "3kDGaak3hVmEGpjSdNP1LGReZ5EAs2wSLTvu7HUX4HWzsT8tWsQ9vvdEchy69htxGZiVkRiEEvGHpfhEgM9qgyvm",
  "key34": "2NMRWKJYNadH9wWk9mSjTxbVmepN3aZyXq3PnTd6HS2XmSk5c4K8ZAqUWiwTgDyFsbp2C2SPGxFSYhHmhmukU8jy",
  "key35": "67ZmYsnWjGnmvupvUQcVEypib6zzLfRSLmYAbafqSPvcppYGwqCPENvkuM5jyAF9cHyoof6K4dpUg3i2ZgS5oPDd",
  "key36": "61ZDWWWwvcj1yMKdRFrYgkkWH1frT7rH8NkzqmdvsMbSksvZMGT84QnojHexpD9gQhKaVb2AKQksiyRMuBUfqdVW",
  "key37": "3KjWxUeZTJF8nBHTEAvYP42vxjSbUrXHCWRXpUWXHHqWnaWJ6aoktBcEWxdVeG4gGiknPSHgQHTrBVfyJkEFF9sU",
  "key38": "15scvwD2vHdqFrvzuQPyN7By3YESQhGS4YRF3eBU9JHrogmfHTww19HrzMk4B1rfnhQVrTb1kZZs7EJTFrSVUMj",
  "key39": "644QnDiRLQvDGSXwWAw6eeV6ovHcqBcFigZvNSL24nyJWXc66k6F1U43HFua1hpqURCbpwwTJHEtGR6tK8nq1EjR",
  "key40": "5HVMwMrQ7TUYSPPCuSwpX5EqW9N4fgEtFKJgXdf9M1ad9oE9wHhhxU7A22FFa88qRhAunUXn681Exqqc5WUZkZdP",
  "key41": "4UpE8Yog29i5sLrtDWGU5ELTCqaRBWo1m3QeFFgmuSjaQf1tXrbmjV3t2rqwmxi164LTDR959m7t1GdzSS7EPfjW",
  "key42": "4hbbXZNSb1ECGwNXY6DEEAgthDHDUhBA25PLk6SCDUCYftogAF5hjdZvF3GGPuw2GLWAhsVwdUv9sN3MUmFH96mo",
  "key43": "5TUkuijEKQveYJ6KWuHUcMvNKwdTbpSVa374VkWeVjE52DyfnYp1u3pdd8YVtJYfpqJ4o315VXH765QcrckKjPYT",
  "key44": "4E9Gnhk2ZS1jM4Ngzn2hnHHSngwD9REZiCYXeRG6eo9BbpNcj6VHJXwqrdWiVgNSUQyKkXUzqE4g6gxDukk2srHF"
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

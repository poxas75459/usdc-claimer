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
    "24gQEF2wNbq6zepTrTwoAkdnSHj6CGFftYz2yqeFo6JL6pGTuRwHPDGBU9Mh2Es97ebp7W6SPUn87qd5ajdF7xFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QfzVYUBFm67NY6XNWPK5TAFhiR5T2Nva3pQfX6KZjHyDDphSzALWqJZY5stV9aWto6KU3cwtL8egciC27Auj4HE",
  "key1": "47ckkxqSDNTpWMF2B17fZmNfNTvQ8UodL5WKPZDmb23KRgWAXkf8dnQ4s7GcyoBFfF6gBGRQR5Qm4ahgzhQQF4Fi",
  "key2": "5nuSo8hqdwDeyeFHQ4r756B7JbaiqetmtHR9kCKdRvG2rb84EQGGvFGcXjLrp3GCKpbwhQGNr7CtRGJ91yZsJwq6",
  "key3": "GifpayP16JrJCU7UeT46LWTC5TbDeVAFRrqEvJhZXyfnHkARUBniu1jixAny5AYiWut6PuYKeC88DsjJufTshoY",
  "key4": "2ZDQxUJfJjJRUxh4CvodrWzaJG4CpvfaVWaYvzSuerZ5euY7NNdkYau41qayquw9RkB6or4ujnhweA5HWPuGm3ef",
  "key5": "28deMqEsa6cbAAuYjLkXNeee4U1AReWG3n3Y4whXzrQfyvj5PcGRV8uWtcqGnv5ixH5wL6zMieRFPRJvpBkixKqr",
  "key6": "4JopHJbmpzLPhnPGzAZAXRBQD9PzrgXLzNXjuuFbZVoV8ijH2CFjG8pQ5QHZvHCjoEBXHg3cs3XjsaCux8aSKZkD",
  "key7": "5v8RfkahekunMiLtxA7BAgV6jxN6zNVqPtRSRiBarshyxpngfMY4jQQnyULqwZgyC1x46duFzf1XwxEoknNE7m9v",
  "key8": "58GmwBWYSLpMnjkTen5RPFSnCHrbgD17AEb4EmRdwgZWNc7KUUaCxVwxdFCzLVxKGwT5VqUgYCfKBoXCk3cf2BK9",
  "key9": "QFTLHg16ZNRczsFFdtSXNkj2g7HNm5REkRcMiESyJgc4qzqTfyzKSDeeD4gJfma2N3axWP4Yt9mereRFc6ojUzf",
  "key10": "5pcxU9KxMcpi878ycB6qN1BCgnsgnLnCBFm9ezJpJ4xFFdbokRWWHoWCFHdab2GbNt5V6fJi8z9LSovPUwgtgGx9",
  "key11": "38cv5RPG3yrqLruZHZfADH88yWgsxahVGzw3M1Vs777DbgKLk5k6fuvUbVDe2efTggKszoKCRv4vAZFHaxegVafr",
  "key12": "3Rek7QNfZg98kHehMy9QkM11ESt6uxupwnC14PmKFzh7nXSATscLUK92JeJTX3NdEYQpw4qpv9R82zCRhqoaMUd5",
  "key13": "21tfGrtbmjY1rsHeWPWgTvRCuXYmRx9YhQ2AHegKyvyMo6GAeU2Fr469fSxhxN2gq1T4jXgLPNVRa1GiE5rCZzbJ",
  "key14": "5QPRxZPqjuL9EmcP6bdjHAUy7eiK2tt1KTvY9RVrtp9nFopwNSsEAEYp4og7ZBLUA4roozL66KpdH9xPcbZLogd5",
  "key15": "4e6cTFewxJnudAxc2kYuwBJqHWSxcfLVYKvtWwSEz2vYdNnoN9DNmc1McKc8YQ65yZb8XoT2Lqc2u3acKacTHFj2",
  "key16": "58F2NvdTtfmr16hfBJmSDWT1mmfTWtimcQ6TwsDcRGJE1yX7sjGnvRyGBDNQXUAQyxAgZyP9HfsK6ZTMqfhLQWMe",
  "key17": "YRQzwXKsQ9yjSJkCmMguf1serxkage4dE9btfz81JU3RHyudkTjsbxzGvZBcwSgPePDUFkHe1sbRnMWySu8bBNT",
  "key18": "32bb3jhHFsXjJHM2EWUo7YnRjpKsv4Q9iqEFpNRbRspQMxkXb5KXagnZ658Ci6Tkbaqu1m8fg58rQ1SV9PL3j27A",
  "key19": "ijaTLVSQV98sudAHsdtGooSWoyJwn93vEewE7dzhXixYGFTLe7XfexyZ3N8v9rMJnZ3e3oiwLijEQJkezXwaUcd",
  "key20": "36FgyVkPm8MUzBPZV54uX46p4NRUEwDSLd894yas1JCMMh4eLRW52tJSvq9SoK1TETEJ8mEaBx6o7c9gBxpJHnvo",
  "key21": "uzKo1RYcP9iLhf2ZWq3p1RNRn75bJhadhNYC2tg9pKgL9jJBLe3eWh4tD6roLjfi9cYVQcgYpJAGumPdiDirZbU",
  "key22": "2bCSjuwjn8zzKFpuCnKpkZaTLYLFmTrZcdKMdJMx13L5bTAchxDao8LmCiDihvamDnqGqLHUwQVKrFP6Z9TTAVfc",
  "key23": "4pwwcxb5QiJTfpzgujUjpQMXndgMbnxoasjUJEfx5SgPGmzAmPuF9hGqbCWoisWFKuMdXh6QGeQX5T4vR8AMwJNo",
  "key24": "a4VWsFVvUfKn4vyzhJWmZL39ukepuXh96maL4dfcjeM7LnaRHx3x763A4reASZYZx63QVCJRP1rLvq4VfyKoufZ",
  "key25": "P5M8gptKsxtMpPNnSsBR6E2JA39sg3uaN8c3QTiJT5eQxVfLHnCfMfgqLEiPDwHfa5qB9zZahUUAa5kD2epMUSb",
  "key26": "5TNbwn3XLDKfqQPyjMrkRJNjnhtMEcsxE8hi3NWpYHigzcBEtccktGuwHB6QrKXhdQGCRfRzPNFE7rhqQZ8LTZPH",
  "key27": "fhHn5HUS45RssPAEtpxhFiaj1zrDJ7uZ3MfPiXMThwvrJ3aV97FUBw67diChVpQr2ny3y5GRUYTAtkDiwBox7yg",
  "key28": "4WPE6erS2nDg7NhhHJ2EC5jmizkeATBVhGGkgcctgyoEzWy1DLwhUYVdeJLyXSWThu6UQuro8HxEV28nWTcVF3W6",
  "key29": "5XpNYAagbRv1qi7pLzzH56wCzGTZzQ61YJdYCCnpeX5YU2Cvew9xNyzAAUVXnjrnqusJNW3sxafmvW9vht88iCWj",
  "key30": "3pUgn2BHFNFFQDpwGxus2wo8yNiCb7L9XhwsHbg8ZoogoyLNokwJdZRFPhizhVT4KXhPtCEyAPi8e3WFUwr4Jmur",
  "key31": "5AEFoMegAxLSdeZKuG3aGE4Gn3GRZbpb9vAumARh9PPzwazfxnXGng4GoNS52vHbiSsVRqPgrGPESsz5825NsQa2",
  "key32": "5EUBGkSz9PfkYUde4yPwshdn26XM9QBq2YAkiDbdvV1ZrD3yHCPdz8N5Jr9EbzJDse6oPBR6zB22RAHKyhcbdFg5",
  "key33": "2t9MGUf7hxPeqnqzRHpwdMybn2fKF8HALeD4t5uWkosHHALx2fWdLVvZhW6madRaFENpP6RaobRZaUiCG3HFBt4F",
  "key34": "3PqmhMQh6vdKUvLaq6Hi1MiSzN6AdaszMkV7DJ8Z1egHDHLrbNj3Xw3EoHfTFtCioch7DpB7YLjELAtfJekUDY1N",
  "key35": "4Cnm3JABGhMvCa8PNzi9eySVEfn2L4GBSPR9QiZdEE5HAqCYe9RtcNiuPMzkhxKtJmCyfeudVTSBxZMa4ojGWZVo",
  "key36": "2RXm7jyVBNoLNnXQ5B32EMHjpB9Scmxe3dvzoNBm4vq1uLibiZPUGNd8k1DU9aa2BQYWpFJffnJYT45qCDKFbShg",
  "key37": "5Dn2h5Qq6YezJSzP8A5DCdnRDruPSWCXkg9EqT6F4XrxopeQ3Dbt9syUmhSLckPpC9No9Ea4PBaS4x4GHMXynnhv",
  "key38": "8qqsgi6qiTscBaiNmzZwLdUvnMBauuZun6vYAJLTX46WCnUq7RKiMQoeFVFhbAX9AuqTd1vLu2XWQfi4mWpZvJ7",
  "key39": "xvATDYZwhcazEpDZpXpnYQnyAhH7HLAkuGpW5icyrJDoCfLqBw3NqfhxMmxj29KiWVw64jaSPCA5nA1br2TaVFh",
  "key40": "5kGNLPhcAYqndmAidE7yNhSnkFD3jz8xhEDgsZB6NrEqJiL3NEF2xMXaxN84yigBHxZpQybnRKg8yBcFwVjHU9nm",
  "key41": "4ddmidHzkmEAF2HaP2qP1end36BFaRs41VNKUbNzQdFBFVxoquL9j59LgZT2Wzv71N5N3jPmkJk1JhBNyBYUeG7r",
  "key42": "5rmGaCQ2fSposqcK8jvZoJ1VBGUPYN144w6BUpyvzSBUjqjZfTxSSviHkPp1XiL9PYdJugFnRf6vYBFWBkCWPwYq"
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

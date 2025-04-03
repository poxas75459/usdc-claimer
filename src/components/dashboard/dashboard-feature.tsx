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
    "ZsqR45oui3AN5tLdw9kJ2keiG5Hr4Nsc9ZCQtKAGTCUUMYhjaQLWwG7ikqzXBQEEto9S6XVUmh2KP8rX8McoaFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45mEogt9C6vescZ68krv4amEELaZeGU371K7LFx1XYL9QDXAjZV6rupNeb8ZQiVEVdJj2mT21w3sSFU4jmGCt94z",
  "key1": "5PNwdKpqtFTFu9HjabHJaXbZxRhamcALTfUBY2yV2fdSVFgiCgnJNVn6hcLUw64cRrakw8yc5au78BijcngPgDzu",
  "key2": "2CFViBH4yd72cZ1ScJ2vgRLcihsvGTDsAjULWUrjtw3ar2VWs7Zk7mZ5Ty8Rr6XDZTnnTbgYWDrN6tejP267RbK7",
  "key3": "2PqGeGad3iMqPT8PjwehW3BSq8yP5WhrvpwU5XQngKqA1v6mFXfUhWTnBzSJR1jMFe6XMxJoC3PM112uwkQueG5d",
  "key4": "2fXpn4mN1A3inRPWUJtsQeVxB81LtmdPRL2XnNuXPu9C1gFtWb1ku2YvSoEe9YxchvU2mEFcc1Abh2FyVmoMDKxf",
  "key5": "5KnEuKF2GZhiJPNEN7tA1sBwWrk5MnCXbpYdaBCBEvd5naAR7XUBD9gP3Dp9CnNBcDosHMuHrNnaa77nSGF2zXmC",
  "key6": "58RSq6zTcXqT7GQAvjv7yhENq2GDYaqwcQfJ6zyPwcLK3KJ3uX1E1YecGC7Yt9s8k2x1eKRqne3qyKUpRCGkyBC6",
  "key7": "2UTsEcHxGikBuPDrer9hgRW2XeJRe12x7cguF3xfJC6LYhLGrVH7wD3ziHTcvCKvfFZSFFsyhUzfT1bVgkmrHsNm",
  "key8": "5EyVV8k3KChfanFBiBtV3aom2QeMiqLh2qUPE9uPYJY9PodLVSF2kB9vdY3dEUCJYeNRbC4Y5FWqJHgVjq5hLmzu",
  "key9": "5NLnRDJmexpyqvNWTxAiMVeRV2XMceT4pErcrXNHLyXZ1tsXaKcrVX3kG4bnkFYwJrw9SW9G1tzdHxrZoiKDRmb5",
  "key10": "2oYaoKdPZkkMu5b1f2FGbv43igD2XiMceHXxCgTkviYKALTLJFcirTVB6hRLY2eCy6NeqmvfbuoRVpFLL3P3SX3f",
  "key11": "2GPkpZszQRQywb6QytN9mkPtCjnV9AjtWxWkfKt5j8S5bQMdQsuNq6iz411YP8SLQcGdKJ6vVmtYpE4ZZFHhgdTk",
  "key12": "5WXgSGNKdvsAeQgommujht8AFVSCPzj2VptVJXYMwQSCdpeFJbPoWXHfACNUoxitMMSAcDacAXByVKU6Q8jE7Wwt",
  "key13": "34PGjeJEp4HCVfttGxwijXxWAxtvbAdRGM8CyMocUyWqpCM3WzUmJjPvAibaT35K6x6LnRmnqymJNS8CPpBo4LDX",
  "key14": "39ZimdqzEztHKVLXjdrUmZtZdx9th8iYLDq7NShQaeFT3LBs65dgoiyn5qfyEm2gTJhTpemD7DiyZHDLCqfzei3G",
  "key15": "2sNEAhw39xwAQXEBykSPvCwop7Gws4GJssLJysoq9dLxAdaEZMPkDCLMt1TYXYdpgQjk2kMLw9FBYMSiFjjr9b11",
  "key16": "5XsCwpWtStKP2C7YbPF5aK9t5NnSB5D5hDwwY1RurVWbsfjSA9htwb5vSiykqtnhrxJHFmimtn17x32rq4anW7Gq",
  "key17": "4AZ7pD3B6SEevwmqDnPdKWFgQLCnPS5Zcfvbh7q5Z5NjtVzQMayBmczULKk4YRU6DtrtYATgLNEA8PGKMLiRNjTi",
  "key18": "M5VifxX7KEcEiF7c2m21oFQL4a6ATbrXFxfn2jXqoH8sZe6mDyRFkyRnM19S5JExTkRrBgt4pnjULw6wLpK1g5s",
  "key19": "3621LVGh2EeiCRkXbcPxgvX7WLYmBcBHUNEu2qB38trrcSYsCF4WX7FEQhzyKW9dJWZs2Y6UQHRnh6XxaMpFVosj",
  "key20": "54Mkx2eC9QwuABDiHRHbbKEMVVEkzYH9n9HdJP5nGbxitqSWfBjQ4pVSHoZaVLjinviiHuapSUKnsUKocbrzkd4",
  "key21": "5QESNRfd5ysy4CECuWeNW3yatnciDEfr1ofJpxwWzU9zuLW1Hy8MwodtEBk6wXPQbQrmWNRvzyc4BLghbcw4RwRq",
  "key22": "JbxvUgLzS48uaqq3gFAJ65mMvHwJhBkgFErRbaD73jNUQTKZasvWXGNPWMAKz2zRs7UHvS8KhGGq3eUwfPY8Jwx",
  "key23": "4qWn7ykxRDLbGSPADr1NFZJoG1hTM5J22MNENxkmoBUjGJVQnJfQoBpjVoEvDRiRH4cPu2HX2BaGt3VoZFNyBFuz",
  "key24": "5JWQKooYxyZdtyE2wrwKAfmfRLEgj5H8fZ6YdcydwQ8P2u15UnHcM6SJTnMoBEPH4LuykRHDsueXGay18RESu1KN",
  "key25": "2KS3cU5DqZL9QwBaaJA1jFdDUASoDLvPVB38cXgFtWu6A1k87ZrEzmHYySwQDGiXahRN4XEMXd2vNyBbuYeg1uYM",
  "key26": "5oCgy8ogPGxvp4kvJxpheiaQV3VUYYGU9BERVzp1pKkQxWQQJxiACgAkjtoCXNvyQGyiU8mrgccwAZXuuAEfbN8q",
  "key27": "3Kco3cKonsfCyTgLRzbpYTeyvxcR93Rr7dYVnbRGF5QxgVdepxUVjcbs3SJV5nvFaxxJUMsFSFm7aMiuhWiEewsA",
  "key28": "4hoxhxGzbataJ2zyMufFMPGcmCWjKYH4cCbhrpFugsEiwYTNE7npujqNUZXivwJPfzF4Z5GirxwRqReJUaNGV3aZ",
  "key29": "5zG28g9NkNeKZNJwxv5jmSNQqyFckcMQjxqwUYdnrX3MG1i6Hz1nyqZMcBkpVLYvn2FdkozieR3vawnKFVW9wkWr",
  "key30": "2XergBmdKwkqTpQCY4vfKd1K1CxHoFPvwomn3uGYUYCGWMDmCpxNmgo3TidkiLhj47NEksLqoTnUvefvNQw2eQXU",
  "key31": "3m6JertjogYgZk5LiJiy3AjmZeD1dq4hCbRHmuDCKNRRcLVYKh4XRTufeUk3TQKgkTvq2H9zx4qmyHnR5U2Q9JNw",
  "key32": "4Dyu1U7j68okTYYXFEyUwK3HPZrCVADHTPE2fCqpahzeowgDHPtVGrRVeTb2MRBXFRoN6vQWAqBRwp3tqVbh7RTy",
  "key33": "4v672VJuJ4GMF9SavAxijtj6Q8kNVz1VH2rLRtD838orA3MHbbHJcY3BNKDA41eZbFxyPpaJ9fgyufQybSpoyfwz",
  "key34": "3Lmy5b7usKGMCX34BmCakpp8r2SV2vQu9CzfEUXqtLC1VnTmVEfbskhorwdPJsz28aYBwkaoSBtK37XwtPL8sUK",
  "key35": "4jDtxgPtqxtQ2Z9HoQQEvh9a2K5xfq3YKb5cUgTenqT5NvnwEEQYujDNuU4eKJMR6icHKTmAoireMJaPajt5ui8u",
  "key36": "3Euhesz2bEdQLxTQUzvs7MJEGSVjZupm9hRxYcPAXF2ruHGjQ8Hym7wUUYS1vzCyNGabBLaXHoPPWminFAFHxNqP",
  "key37": "3Zs2NJRcPd3DJsy1H9RWqUf8Qur91SNshoBJMXjJi1uYLhoXUdM4hTGcQCmo8NVRsdG8JkSt4n6JFTdQDu3QKYyy",
  "key38": "3gd6PyaNCAmDSTcUvpCaD3AsoRpBEQDGxWwHqXtbJcsGJPbcMKocFnjHvucTFDqBMjVKpUPWyrKPoTfGHn8SE8jA",
  "key39": "28gmcGFTdn8FQxz7pW9Egk5EMJdsAGyztX8jNAMw3xbLaiK7s7LC4spP9jvXC47Xqpfm4CV5ztp63bosMk9GNNdf",
  "key40": "5y88qLi9G2ki2DE6WHPbjVTF22HVyohqDmkGD2bRA5T5Dv4G3uE4omXorVLNv5Cru5PWpB1sxzxswRhgJnGexat9",
  "key41": "5xUUFjuFVp4FJ4qvxKgrtBrTvbi8EBN4r8cVjgb9Kocfu1WUYAqhDK9fcZ6DjgiuqRhBa172mngafH5VuRGRrmbL",
  "key42": "3DwJG1UcKdep3pMxp4i2d3M838NJgfWzYqxpfpHtcqsG3jvrwC22Tn5NCmu9zMdXxGhKGKQi7hfFm7FCVcWtYWeX",
  "key43": "5Ggv4aH3a5H6uFZQNoLs5VzCkAKNvn2yXYou79v1vUGwyqE2m1tnf68S1MgCFsMzsLv1x3ZRjD12fXFgCMSzJaUB"
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

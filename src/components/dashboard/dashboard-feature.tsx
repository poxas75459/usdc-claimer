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
    "675N4JFBQVxK7FyYkn81t39fc93xJGVAtsnSJTmhL2FpuxZz4XJzgyWCHtHRsgKzi9uoED58n6FUfTe1oWoPsejo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616JfK7G4frKjbEzLfv5ydAhUrLBKHv2LJYNVETbeYVSunLdg5rcFuNpTuLdpZwXzuDoYKE9Mr47RNzMFriCn8gD",
  "key1": "L6K5twvSWQkupKQFFa6ch7EcFKPCBvdT24tcv4AWai5vEJSmhLPvYyqvvh4EQgcMXEMs4zATc1SZu7kjpUrGow6",
  "key2": "3WCozoKgnCrr4sBBX8rsm7DeJLEdcPGpSiYCNRanEK3HbYfDfQxTi9FaNXSZhdLZcPi8NQDVgoU4nHavCafT5WCE",
  "key3": "5B15V4MXPZ3YscPvHh8Qcmm6AJupWbJfAKSLaYMCR1as3fWYRPcQ5mLLQgLnaMipKQ3wp1G7CwoMCfMVLzQFfUfv",
  "key4": "4LLxmJ4f8PALx3oBQwyGYHtcBa3jnK2Yz2e83bkSveK7GnjHYFSm9FKmXwTDDaizUbZAwtaj43W7dgPE5g2bAFeT",
  "key5": "2kSSQ2WZsTkK9WNm2cMNr5Pod7h4bfi81YcJw5FzfAcCTDa57uZJGMnYNDjmkc4ymzDDKBBP1LJ5zPiPgst8czfW",
  "key6": "4e5cGSJD3fkYtfKsyFSTFynrXqY3L2zALyFZWYejGCF9j2FZKwuxaiLnKzyEX3JvaKMP2pZsZKReecZ7CReRNKJE",
  "key7": "3uT9AySZmb2gCKxxBLWEBXFyu3SVGzPqDL3RydEAQ8h7bbiVLaEU4TCu5TDL2bzKRxXhkVyHUA8RRTvVwBi9wPLc",
  "key8": "3zZbx3pmxNSPvG9nJCF7iNegoaJfdpxa2mFGDa5pfGcC5UXQNqqPPnF6z4oqyPmCP2TG2tfQASv69xV961J4Do6k",
  "key9": "58xo6uL8svXMrHcctY4wSwYQPv3SzaHgen2MFP8Y8VfTb7RsevxyFaRWU9aisz9ti7SwSGQZEVbmj81yAkKLPpJv",
  "key10": "5EoKhgyKQsiAqmaA4aYwZwVZw8gB25fAu62NwsdYP1zgCDWjN64w8BqZcL8UB1JZjoXLbkxqjiZv2oJeQ5e7sHA",
  "key11": "nnDd2HXWBRyVMPsYFRzwCoNNFDsosWVkXnVRvTU4p5sPt4qAgmc77FmFkaR82qDmTDdpXBYnP9AWrKryzQvC3ib",
  "key12": "2KZVYQrFR2i44Yi7mieGxLPFKKTgda1hcTvgDEC6styQFwHEKSbezE3jd2LsAGaXDK47sFSMcdjaM9mkhPLZqRab",
  "key13": "4dC7gNzg33oaoJs4ZNS61ZA7jTgjJWzbbo6qurvV3BHXWnjUm43oWGrjySGo8YkVaXnicUM7bJS7nFVX7V2a7zQN",
  "key14": "5nNR4tr2tv1tdDaKm1UyKoE2X7CVTZRKDV32qzPtR6W6nsNWL7S2pqPBGhvndoeEybf2mjdUenwXSyUmSJEGbJaU",
  "key15": "6zc8KRktAteeg9QQUNDPKaM4vJgWZ7sbpZKENk4qbkurB9nHLwEFhP1XTFZmyzYmW9ed4Ep2CQgsCNRSfdih6Z4",
  "key16": "2Cdo3BNXy4rZESNWfREEM6cLkU9auqMGaJfjeLSGFzoZYVRvJg6oRsjT21P8NJLTCAhXyCm8GbveeqDXZveMzF5B",
  "key17": "38zCpu91LB93hHbG2br5ZrWjtXjXhqMcpfHcw867KfsJ9j62eDy6sLRZLAR8mmB5xdDySDLpvtS66ZSF8bBCyFER",
  "key18": "grVMQzHpGPv6dY6KRSrmRS1ronj4u8GMyTa6RGqasMBNgs51hpL3Zumq4Btc1zazcrMr8HJxDWpbjJekwgWkrFv",
  "key19": "3ZSzSou1cyRT3TzymaYMi8rvhpNKLfHgNREvt93zpjCmTa71YZ1a3qmrojLqWMeoN8ZQGxsd7hRiE7a67NVPfLEV",
  "key20": "msEevSgJ45Y88xhNT7A7g8VJWscNXg792BeH1L43mqReNWuvawheC1chJZ2WzTiZ6GYykjPWf5WPEof3EFUGbht",
  "key21": "4qkPbh4KFpSpJrW7u3F1BxjUJWorgGUmq6xTMkgaMEwXgqsA4q3ogL79iosWp3wNJhXJvUoHbSVe6HqWFUs9iskw",
  "key22": "KN59vm2npwMg9yxozctEZ6fzPvcuM2sr6GqJRccSB85VYY5Q6xovALs1FHqC9BL4NQpyZ4diXFq1cH3wies4AaH",
  "key23": "2q8Rcr8qmHJnPwGkdSjLx9ESskVmtKXite8zmcfDAXfEZsuNo3CK6GJZAHGTyE4qWi1Fnzwc5SnkUT41wLEpgjxf",
  "key24": "33HgzTCKf3An3HbbSpt4j8ChhDAJcXWrQJL9LKZjdfW2e4UVJH2RC3umxRJoQj69N4jRiGtjTfdAoffRephHoJPM",
  "key25": "3ntCySCtr6tXuJYeVbFBe9K3ob9RPUL66Q3kS8inxDCqeHSA22xrAvbXGH9sP4ZTwtexDx3F21WBp48geTwJ5ia4",
  "key26": "34uNbZNUkZ1LDnWGWBKaz1iJaAtbdkumAfybNaHraHKAJBrtHYP64gSd7piqka1iNP26oHNo9qUH1EnwPdb3UqT4",
  "key27": "2XA2UhSf9gETN4MLihNcjtDe1f8pefmE9SeU4hxL5faVTNLunDz7ZYpHXmuXn4hoZWry2B57s6LGnpR6ftFu9JMM",
  "key28": "2LFbLcGpyEdTG49XP9wmxFqarbuxBnfsgAASjxeAx1MzvXsJStJtXcvRtyquJB3Tv8FNN9dorySRwQnrDnRadDBB",
  "key29": "3pkPHue3dR7ug6aYtkEY2fBN5PVPyh32J33opKuSCdg1qFRV4W56EBPsnKYbSDSZG8iw9zHYDGX7FqBN8gxRMzQi",
  "key30": "4MMEeiLuBkn3BWinngKLSMZ8dRWhpN1hRNWzbpf46DyqWGpYWhawHGvABeJHosDZd6kJ43KUXzSkX5tyjnTF2s9q",
  "key31": "2ZHVKYKhvQGgmuKre5KUG3qUzPBYJzcYYVkwSsntznL41Q9Xro1EDrixgCPZkdqzQxK8jRwwcKHmXGY1CBbzzbMk",
  "key32": "4LCnYgYa74cbKjQVw3z9TZDqUAdW5m4KQSsBf5jTzFay5A51313dGMivBEPAimnLiHG9uq66uWJjy3y7k9m9Bvn",
  "key33": "FLPn7vBGFtmKhMmCG5Efp3BYsGAGHVCPHWQvJaRMARBTwDinfXNBHf1iLHsU95hSkHgWeGawQGidhdPnXGRC5DY",
  "key34": "61DqyWor35gbzXKoWv4exiephEr2ySTS2xPctDJ4czCyKBNhgRhMkHbRBSpJpDcHpbMiRXV32caWdcTVUwzUwT3b",
  "key35": "5Gpq3tgJnXCjkS8Lf4jch44dsdL4kKPQbHwNMvvYbCC2WPNtyrhdLG9RoHnYaXH9FDtTnkYsmQKxr5Edy6J5XqBK",
  "key36": "311iCYYjGB3LTv4Aik65m4veFCey4op1KqECW3noxE4b93dP3WHDCy5BEubsiMGGBnrYKZucHLQCRmcCy4nRHcAr",
  "key37": "3JbuaR3rCUoc48uA6bxjddLBRmCqQ9RLgoASABF6kjpAiZrNHn6k3zQRwKyP4853KX6jDBcjWDCTQh7u9CYZGrW2",
  "key38": "53vfvLaVhHDnLcJJcP2A2TbVMUY65KWNobjefPMj5Y8S6icf3sbEeEaDNnw1CKB1MtH5gSDThS7voVh2BVhU4RA3",
  "key39": "2gSxDSezoFPBnAZuUpmJhYLwsnWkj5f9oPotxkeCaCeUzkgqqJtHeDUJo7BbMBb5Wee1KmJd25gyduDXEsFH3W2L",
  "key40": "oAGE7S2Ppkr7ZvAwqG7hsA2gMNewhGGKDKHf6apdnensJZgkNe54rScYSojppF6EQVJsHwkPak9yvETpwKtMC9u"
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

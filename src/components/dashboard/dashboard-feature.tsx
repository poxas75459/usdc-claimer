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
    "3mzicLE71hCTojhyJKoRzHXs84aUimPCtsNXVrYariJxDuc3aMnPLU2X1SNW1RUvTkHRGHaLYwHHELAPNb7MCE2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J9NEGFKocM4yAFE7aZ4SopR2qd1ScopU2bLCwBVeSFhPv8F5jiK2XrLKa7CPEgCvzEPErrPPpbWgtUyU7ZbAmWa",
  "key1": "2E1z9mZ76KSGQao5hQKaQGRMtuF39aaqpNWJ3B2ihVRfYbJb8Tfc65v7MeeYYLXcBu5wrHyWckuGJB6duFTKEFVB",
  "key2": "iyNYPZnWoouoUkMH9B5ycMjGUGGHwi7aocmUJtg5rJkWfM6yxmeuPkLbtZroveXKRAMnUB5TUpnMDUYrp3gaDkh",
  "key3": "2z5ghbz5NwfvnHcoPvmJJ3t4sKXrWPFJ9QTGmdLmZAuNtceNHZ35XwGbqVM6owzdNvAszPkU8rVcByPaQG1bUAAG",
  "key4": "4eR95NZgS5JqKk7jz5D6aceA2J8HWZkaYe4bJUCVnv4eFrf2xM5tUmp7LqCuZaRtDcUKPoKTZji5UMrp7UkYzcCo",
  "key5": "5ZjKFvtbhFTJ1dRsEU8jhSp77JNKQTk8GZAxvSBLMNA1Ks7sMQvUK3kJVzdXMijq5SAFEEUCoTMTVqjnDJg7KJe8",
  "key6": "CVRqjY5ucgd2reUptWyeHmY6BtbCSzyRjMj7omfxeJJTAfkqj4Lj23AB54YSZpYWs3kcKhZJmRCqTXNJQqDn4kz",
  "key7": "3QueSXUjMoextynmPPPpZRQeRYYh448cgScaHMDAWKYgKPmeXxPxbj3DhmZKF3Vrbe8MKeedTvjqkFHC5uPvPVhe",
  "key8": "F1Y7hQuoau6y8zT7YqxdeYi4mhu26gJeNSbUciDTfUa3gfApJojWpnTLV6YoLQXnPrQxUcMPTBBa1ES7XzLqHoA",
  "key9": "2LKDoX1dwHA6d5xXfh2uamdwU2CiXzUUUpQcLtuKL3yzX1KkC4QjibMQGBAW6Nvj376qFVtwELEk4gZcXwwcPhmN",
  "key10": "5kjwobPq1KcSK1f17bsrUDqo1oLGhdP8bVXnyk7SiPd9SimWYQRKbiydXuJiC6HG9fGG7qBEdqUVPTtNBWiKyPvS",
  "key11": "JSoTy6WWxPR7FCs87RFu7w662L58a6dKPzETprkHQstj1qVniNYvEmoceaTxjv9aUnMiZ7WdAQ1W7BftVY8DF4n",
  "key12": "4PtBhPrrHRfcrEVWXLaSyiSMtwXiYKfFYzMmSZWvJTMLaN9mnHdHUXYc4uJw9wjd8jK9kC5sBAe5xfkgUhGWMak6",
  "key13": "3JH7GQVkXDZv5enJhbaVdtacES9fwzpzym6ZQniCkhUYSb2XiLy7G3U4p6Fs3uiA8dvgV1BnPqGd6spB5mAhhmLC",
  "key14": "2qKx35DHWwreAdoBfpcNZuLafhzvnfzn7kMSPqE6epkuN32ThXoqrNvGcp2P6mzxiSH1whaPewDW9nrg1UKNokFo",
  "key15": "gmWKv3FtpCXKEqTdrun8KFkWXWM5tPQnqMbT6feMm2JadotsHSw2XqUb6ZaYXcLq524edaWXzLp9CeiFSh5NXCa",
  "key16": "3mNk6EseWv9RmMyMGhwBdg9EJEe5CfxspNYazTJDm4WbMsTJnfynVBqpM9wRKDZGiLSHYki3GjHisoFesENREpMF",
  "key17": "2JLSU1yCbSk2YZ7DzpK99AkNgrXD3FbzD1tsxkMrMADGdymXVeJa8pGomWT22St6ez8K6sjjYBDDZ48eQgvXMA5j",
  "key18": "24oqrd1ZaLHRLp5NM6jVFtFtMygQaeZTJRPBVpGF37ZDQY4RhdURHRXNoevFTUmbPM8xEePHMma13JBXnjvqNX89",
  "key19": "fPkstrTM2WYStyNCXNhjRiDPGrKVVsPfQrDAsfk965ttHnYSLgdemgaMEz2RG6P6H4HEkhAZw9Zwp7YN5M5hqYg",
  "key20": "3i37hGvYUShGjRMac47EXHfXw1wL44X53ZdknLLEgSuZFw5eeuEpbfaqMtHejedn36SPr17e5eKZXGkgyp4tB4DP",
  "key21": "r7g5KbzRP5jzqFtF1t2xnWhiRDW2aaMKP14zWyWeqSwM2JDxHtN8N2fiUmGic3U1esKRufRiBLWELUnJnUS3BxY",
  "key22": "21oRxEizNmNs6vmCm5yyUXMDE6QNfu8hxGeW127g3cFith3SY5FMXooDF2bPE8xC6ZZpuX9Udf6w4Ggjk3XVDEyr",
  "key23": "5vtDLviVcNbUBF48kfwcGX56VScM1tydYcXqHM2aEX1QbFBg9RKrteo52upfegPtdXZPocLaytqCaW77zp8PFS9X",
  "key24": "2kUknCNnShnaN4C9vpEh1Z6RhPQrLaVJ4DuXX656RQ7FxeWrnAPdatJYamTYGH3MHnRcQQpLmrYH7X3ydSfGe1Hv",
  "key25": "27EVDuoc6Rzn1aaq31DBrdTbpxAntfqPtX7rdpUK9CHQpFn7NoWoQ1YD365gXamBKqxyETKVe7G9rJou5iAS4s8R",
  "key26": "2NbRDmQLHaNTVPoLyxwZVGrjnoADfGGV6KTmpRj1gzfeZcVEdDVWDP8T6623AxtDwnuMmHXx4Jrifm9xs2QoAzqf",
  "key27": "4tzEL4wHbdfb4Ts7t8148Np3kZiS2LwnkvQQtqGzbMPitiKZXpxtd4whHWHMQLt1F7JVt3wYrdRtp6BoQxfxuTCD",
  "key28": "2iM1nVYERSWSZegBkkRdN1Hjyu7QX8rWa3Q3PMsBhn4aV78r2WP3AsNPAYud2DrU4h9kAYawJ1mzL7rqZHM3DR3J",
  "key29": "RAThYVPMNivd8v4PxZwYMH9CknWdnQL4twMegnDP818JoVZSxhPxME9niGqDS57r4pH3VaWeRHsWQDBxsms3ib6",
  "key30": "4KRbS2iPvLh8xXjnMQWxYmksETcRpRNzWqAD2Ba36C9HqwppR39e1CBGc36sRbS3X7mqVi1ZJ69VEJEYRrN69bY4",
  "key31": "3JG2gKy645KpNaB6PUxD5446hb8DmjWaBczF2xANWaEubFNG4uoPSarer5gAC1uRZ38wSbRVxVASLiExXiSEgjGL",
  "key32": "5vGeS7QPwsKa5G9MKpk4YTa4RSR19L1go3gCJLgcQJQL867bbVs6NFT6bBku2EiYmicZosPsLo8Gg74HUvdpU1xk",
  "key33": "LbyZfcaqvAfWS25wtAfkKwF3h1FqXZPJGPF6hgNiKMQ1gqdLkSnceCiYB57Vm5gEPVvEAZEtc5sXPE1Lt7mois9",
  "key34": "66RgAuomkeRotUGQkjkfuAhz8hdRo5QyCdDrthCFRhiuu1Axjf2pnqjBQFMnteD8Rr1EpyBQv4MfgtZTewwxesJJ",
  "key35": "3CPaZwLbEbiSswxwZX4HupJ84FiL6itqFvkY2BYoTxZAVHSZHhB9jZR2q51unuBngSLfxc2A2GZw5spUQ7Rdvy3y",
  "key36": "c6gis94c9Bwf6izoez5buKg3UJKtPy7xtqiqSqmFuLg23pJBvvposXcKGyy9quZS6JwAzzTy6Mw87hSZPSFvyQv",
  "key37": "wnjKbrBBWTnZ2JbpDFzzKUjXnySw1MoUt3365Euz2WrhmqdhcAyUmjudqLimTU5HUExCdmHG6xiS9qALQKBHizC",
  "key38": "MYFQgwsWiNTTVkkdxzoZz1NEqpmGdHKnnwXTbw3jEQkvJ43Yc9M73StyRbtxzDXs8YYP8w8H3FErThQsueTnpEF",
  "key39": "BEw4utM87CVpfv9UdXPGPe2jqbAhMEKvRp4Hka2encFV7q5HdP5g6MGiYHvzD32DAFdJPaa7aJksLfXNQkrHWvW"
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

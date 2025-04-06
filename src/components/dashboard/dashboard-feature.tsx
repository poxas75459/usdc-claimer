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
    "QDud6w8PtjX71Cq3ueVheq6ebH84KfoTkmz61cNftSgm2ubAXQ9RgQDP5eSChfqvFzqBLB2y9U6LVHUrkQJwPkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22EWyK4YK7Faz1nm1SjwbUGNAuMZrtZ3SuCzH6dMmkBrewiF57ZxzkYgQQZJqUtW9EmkC3qjBzwnDTMqYeLc73wx",
  "key1": "28jCFXTgfWqKw56aaMCFLaZMPVtYkUXHTmPZQjd5j49F2hQDGuKLxhbzeHAi6SuSB7UZN4ikHmPusQiaPFhwYNop",
  "key2": "2ia4Az42GGXFCb2EaaULTygtopceRB6dEqgDjUBzGnNvA7rB3UpU3fm1egM4W4f846vSmN17VTT286nwnP38EAP9",
  "key3": "2Du5HLDpjHuvN4M1SYUzxyYST4473M5z8wsU4SRQzcQwQa3cqr2PpEyPkvdzaB46j776wNMmD7sfJN8HQfVsh2of",
  "key4": "mbJx9MeFjGLAfF7TLGCv24SAbzuPkSUctToWz8KNduP7NS8ccGoNSkMDPbadPq1ZM3vaiVvLZeXS9ZPN9f43arT",
  "key5": "X3Sp3JFN4w5UvhJHsVjLJHoag4BabjegM99pz7orkUUv3jf4BxWRsEHGnBu4nAkQ9YCcicTfY1Pj34qmwDd2fGs",
  "key6": "Xws1iF6o8gXerUk5pEeqdztVrH2Fa2XJE1cLXWyieM5pmWVZoG8wdJmoRdjkXTJYXYGuM9Xp8SiyiJgTJBdRGAH",
  "key7": "3EYvdgTSsUSeW6YLG3NAQepovLJJrsoE1wdg41E8AhkE2jvRNgauwutqoFUidG1LzP7tnrRv3wBHmept5i3ehbPW",
  "key8": "2fvaR4B31SQw8opZenMjnwjWcLNxJ2QptKYpFTeEMsWrdAzBiJppL2B7DXHdptayfV1ZGKkEiiWWVijdsUPmeaqq",
  "key9": "3FQQNHgzd7Mozfopio1cWreQ5SHXCHqJTWsRuKBZWZcutBizEGeCZhs2YquAJntmXeGjYXPoe4CUEeTbhcnW3qTE",
  "key10": "4sy5JvEAwC6frBy1qBuDivQSUFZKJUEu5Si2arC7yMAu24TcVjfWv9opgUmi5jdErbHUnYEcAvM3gZm8jVmd76hf",
  "key11": "53rbayiBjKnGEu5gwWomcFnR9r22zto3ZBESNC1NHjffZnQcvxiT3KjTuzfsWqxHVz2PCx42BToA7DpHKEifeDi8",
  "key12": "4BYfjw3kr5pkrKgRvygJoNpHFfArCgeYmeqiXRfiggBByQ4pQLo2ECgTCMXN4ycwgkKXJsaZ77k5hXPj3ZEQfXUJ",
  "key13": "39aZYwjfh983hF8SQD1AmAGk6v6rmZUV4AtXfNqgfHSHntayvqEtHbHf1koTv6m3457Ac1NEAoZcDiVJMvR1eL13",
  "key14": "5MwuB67VevDhVuXyaN5J7qLW86kvfAwJWSSMbDyRZRvHkhbMMk6YAuuHqt5yJDEXhssK4PrHerr3LNycDaqdrGZM",
  "key15": "36bSQVzM5tfjuJRGSPvCpeTojLq2DjVsHkCEXwm2bLBhb7G294FH5Bc9UFezo7xfCpng4vcZTiUZYZwPKMm9jr7L",
  "key16": "2rqzymjf8dhh1Gg42pSse48BvKbzMkshmtEr8ECTGHCuXdSA8vYTGtc7iyHVNzd9pjNfGD6N2ttnREwKYGiVLA7W",
  "key17": "3oSFwzuDKQkkW8st2W47CddiTNxutQK8evdsmzUb5XDDpPZe89jKvFSSQv3FA41Uiq14frZFYvvpnLzXegH4VXaC",
  "key18": "59qnFppECRm25ZhBvEqKBtKWbRxvihnsKRpAvBCpQ743jTgdVp5eXSgLciJbdTJvVXnN5YkervxTji42xnvHpnNg",
  "key19": "4EspriKYnwD5oY4bQ2e9wKgLzWXsiZ7m82M79WVMCYreSzrqt4wXE1zMCuRFaZeUtPH3Sto6qyiQuRf8d4FTwiBf",
  "key20": "5XW29DYgakSsZzKVfLBWPQMdoCE87Ek2nxGbyvmQEKMn3W5NFdecr2HbuwAN7am4AzBvxZPfZVArtBgoL22dqfik",
  "key21": "2hq4yov6LGf1SaAMhE6mM8X4kFQHcbfWzbsVPXEbGQv8zzQkWPaJNQePcbLpdYTZAnPKxoGm4vFrvULoLiF5VW8u",
  "key22": "9v6DFiTzbpoEdtx6ojmXbscizci4ygTBNTuvyp1YAbh6DrbXxZoRssXYLyr931vV53VchvFQWBod186BTZnGc6E",
  "key23": "UNciU8pUdTZw8kqaHpFZW52P4Ayn5mjnB6mCLRVVA2LYCfQ6dS87aXGLbtUYz1m4W7UbyEvMy47wqsouD38WVrq",
  "key24": "2Gp6jcGU8DmfEXiUCVVk8C2mtDPERBqbBCtDCSw2PcuhUWvgzaWXwrD9P84WfdBUeYmmCyFHrg52CY4Ti2snRyv7",
  "key25": "2i53qKZn1Emw2dAS1Kte6tMLmCxLjQRZx46XhjythC7BbLcE5bbDjzk1iFnTTpWxLfssGaPPMNsUsGbzPVJBUBrg",
  "key26": "51YQeADkfRdTvCQo3wgstDfDfadUpC5udvoZBrwQJ5XEn8mYR2sZV4cxXrZF5zfvHnsynB6cVxUWHaXr8bBsPzLK",
  "key27": "5YpLxrUm5oz58dxVQdyou9wtQdgBwvcFG4aQc2mP3FcYgxULQcP85jf1TnWsc3tg3XTm1ZM2jkgGRzhJkGVhL9KN",
  "key28": "2TGYxPTZtKhHjQPK55tcUNJwDqL869AYjmK2MHkcmHopYsPxCtkgqzPLpZkSnzkHUw1FPNVd3881BG5TzrD5idcx",
  "key29": "44foFEosbubtZknEkLvkkBNtWwLZPUZw6hZPAJ7MYohvu2uL3NZM1DNPNfgMh2YSoesbbbYnGdUWSBuhPopNgyXw",
  "key30": "29rXji3hwVfN34ZymW7LyagSUhWWmWxXVtYHG68aGkPUre7ViVw5YTyniueK8xocy8HJX4dgGrfqxWw2jEupNcAd",
  "key31": "Czz2sjCToaYzLTMd2KmVjQ5CdToELimaNv59Sd8SdDeboZ8Z4Hr8tWPhCyy4PYy1cvRG4aQCcoqr8Nq2W5yze6b"
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

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
    "4ZBhsxtRM7mx48WtpBsaEh1gtp8C4p4YZfTeV2niczkmFHEkromzESunUtbEZsDrmKA1o8A2rdZkWmjV3MuVA1Yo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ghWH3m7WV3iwHRwHf4Av7xkDVoz5rdJM6P4fRVBcpj4kHq8snH8BG7SFyTopu7RCfncFYSstMikq1qtGANx5e8",
  "key1": "2TCkK4x5fa7Y5MXhmFVH38v6s4L7UujNpvhcEtKMorRtFsYtGFVstrN9516JJmrwHRufzxFVDM6umSgerBqWahxZ",
  "key2": "5TyEgLmgpzSkmXr5PyB3Do6ztaPZbSXzYb3FmFjywHBApy2QSu6xEEv7aLPpaPAajXEkQk4P4SETGpPJEXYq4xqx",
  "key3": "twFQvL1jgqCtfATFZwsMBF7AtgWxXskfXboibV9meJNDzvKppaRY4tTbbrsn2Ze77SB7gam1MuDnT29mi12qwim",
  "key4": "3crwxFzd96HtwE9SiFDAtATJgrtQpTEHq8JQhEhRUieWprqoLtvqJrJV1Yksdw4v9YWfFc3jc8dYMBMwdnC6VkRz",
  "key5": "2HmEsxt3xhF7A5QA51PQUz9C3tZ5myNvfNvat66GJQQ2TVvDrz2JJf8jpfHzpKbjNPjLmVxc9VBq9H3F1cvLoZSY",
  "key6": "aiy7Ye5SSk4VABAP9XMaXtaSTfzCD3wVzKtrUERDArg9jT9jy8vpPC8gQbYV3iJCvUCcBdgydSkXBsCYUJyhpda",
  "key7": "g3GDsageGAj9XVWHXb7gry4PSmfs3aa1Rtr541iBGaMGekeZZ3pXrMPRWQeyJkhzv6FqeffzAmFt7ZAaSuSSyWp",
  "key8": "3eRyz1cWYvaptqB4n9oYgnKvT73yioAyfiJHnLFyMxBwjaxzJgSZA2h5a9b7dp3cow9EetLCyKvEnt7qXrRhDxZj",
  "key9": "3f2PmUJn9hyngKyhN4naVmsxXwahxdu8mTULzi3ComGpnb3HbyM6SLnjSkBmpA5Z8FSXkUMCFwwBFwvqG2RAWJPw",
  "key10": "2cCyxVaREUbaAvorFmvCMjvjSGh9L5yrvSjg5sHFWuSohSuUycSziZGDqnG25az2z4AT9rAHZbD9eWzrvqJ7MqnL",
  "key11": "4AnfrhgHBwZU2PaU4PiC3PVqtvHCaoYb8GR5k3zv3qh5Qo4WrLuSQ44mRfPKaWfPD3yAPktZgi3J5fWS3wo9Bawk",
  "key12": "47LJ99dJtSd9juEpDeQnK15wxSixNhzP7VWc3ktHEy6Zhn1Wv34AoXVNZyEu5qBxjCvgTk9LEM1N5j3U1QtVgeaF",
  "key13": "4hLarivDPHrSoAnPM1AD6kmjEcgzvSECE76QASamC9vL6LDk9aR3TG88Qp37gSSBJuJ9DNrQLsLJbbjfrzrMr9KE",
  "key14": "5BWTqKuLvKyLsjtgcDwRiqtPzF1LnaBKkhTT5txueW8QYLJnAuW11Ys3vj4FApdKcYx4sCQUKDPg7iiEWAaSdUh8",
  "key15": "3JKN24SZ2DKQbonz9rTeeFdhUYmanRc6SFNxVFjZHkfzsJRqmiv2qpCgwA4Z8geTwSpSuCc8mEdUDyHRJf1DNe9N",
  "key16": "2Eohd9poJvTuu2AucT26egTvfWMvvxjgzoHPeX78jaaSd36sMznDZahCQqHzzSY6uXSERabdgQduqWvPTr4p8Yqz",
  "key17": "4tvHrUYRrzrvcDgSU4vCGh4GYc2AsMymYDvQ3K5QmEeCkXWNt9qn4E9sPAenGGJ45EtmWCnSeKrn72syPG63vAMj",
  "key18": "29QwoCVghpvWRHDHVP9JQTRqiKqSQbEt5Nonjuim17Ag3Qm1YxFSeMs9rEGf7LjJvoYMHdA2cQ5w57ZxTz6ARd4A",
  "key19": "31jWS6y1eJYZPeDFpqBkF1WtPcqhkVA19p4Y13yTjejTY2oRjS2j7gKTVfT693ueHWPp36dEpoVEHFJn5uvwfmLJ",
  "key20": "4XFmRCiaVCZeGoMxPePTyZfFK7F6FJEPQTvCgZ5RTWxhA2Bo1TvxvqoaeXGNmpZciX1DspGfkuS1wiBfMqMSuZqR",
  "key21": "3Z6vzqyad1Ae47MMcu7u747vnhuLyBt7BFduUoBHReHEuSqrb38ZS9593GZxQvUMG8QrfKkkaBYSnNVMnM5u4oty",
  "key22": "5ML5QoBZodntRKyDdmM9dfsKUMpcPGoQPXRkw3iFK4Gp298hYtibYctPZ23Fgu7RkDM9WtyRPu15njYJ9Rrr7dnf",
  "key23": "T5TT8N1qz1jvAtaksghnFRvig2W6RhDewiM9NNYPriu3LUfPa7H7m89CGCiBLG3L3yvhAwT5FVLsui8Q3iGS2mh",
  "key24": "64Taw9ht2zi7s2apSN1XryEpYfStbyRgL4qKDArpyNTptXDQ6V8PpLwRnb5P9NbegJ8t2FDYYdyQbYYs1fKjxdRa",
  "key25": "Kn9k8rFGJcR8URLAmTVfEx8hZW3djpaSpTFkFjUZ8dJ7FuD7qnqzrH3o9Es3YEGQ1h2BStSWJftXSP57orr19Hm",
  "key26": "CgAzQD8cWPn2YwoKHLEhnj5bhsuGwuJx96azbDBw7RXggEirWpnxbJTYBcxYcu7Ap9YksSyC8PhdGBHqYcCnky7",
  "key27": "5HXjLeYDMK3KzDhDoJtiQ9MnG5RaNyLdBwGdkULcJ9UdwuZycQUd3NBkmPofiVwkHMXfhC1xFzVkhRLqTyQQcSm4",
  "key28": "5z8XfdHzHQpH56Y3mEKonaUdf6gctjAMUYSNsiKzP5wkAizcpcTqrLcRH1Pgbm2AwHWLZTuFywgPuhWbdsHhutij"
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

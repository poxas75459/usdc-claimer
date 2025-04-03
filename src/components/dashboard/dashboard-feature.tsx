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
    "ksywMyqnfUDfa99HrZs1djYhvLsQr8y5LnXLjaWdf2HT7Zu6zFZszVZ8ReK2288FAV8BCFFbJXc2LV5Y8NXb7st"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rbTcNg6vkhKCSsNZ7rn5wQ8mYTWVtTU5AeEywJH4jLciJDtarWonZu1mBaj4fE8WxUf13rMam172drd7wAuWW4Z",
  "key1": "4wbWWmB7iBnKyyVoJXPXJpY1Nkn2eUZh4zAsXVki5HWDbkLF9tvYtS6Vy3bFcjipBZ3x2ptvMGSdzN2HBZDACwnd",
  "key2": "bQuZK6Ex831UCiiASZWTiybYqCQksdcgbiqFyR568SCDtwC5NudvqdQbPZTUpVEKg529PJUevpnmH9mgDWJFRDR",
  "key3": "3jvt6VLBQwfabSYjDWG8X2whNmEoLBPrKkRVBiaEbvSsmY2ZKVASV9x2fJvbfqXjVjdFyegKQmykVUZybbsT5222",
  "key4": "2omx6WqY3Xp8MhPj1eUF6NADPxhypfoASfUNTt7QaWYAzxXWinZsb1uww6NAEYTxmAvvZAV9L8XgPE8qtX6KDLSM",
  "key5": "5YTEPNqJNRYpEaurAvzMaYM8pQzqhzBWGaf5tiUD24cQy8NNmHb4vp9SH1pAtBQZau9LpjPcujS5H7oeV9gKQnGt",
  "key6": "3bRSPW3McgS3oMfHCM2zFcXuBfjgcmyDqRWRRcBeCNgymHY37fSFJXbokf1AASW8Jogicye8Jn4MGUhVp8Sq7pp7",
  "key7": "zyr7xc7xfiM7VtqLdackk4Ed4kTr8dhYPHbHJMGKwNywP4LMeEyGYzdoNoK7A3iBhudmpsYJCBBrzQmGjyYwNA9",
  "key8": "57CfzjrrSYAYpeRewaownnzK7W9uyZ2KUxD2oAGwxKz5JBzertZxwRc36p7FQo5frLajCWnvvYcGUQj7ZyrgJX9w",
  "key9": "2x4EvJn3b5ci9cJGx1uQLGeTzsSPXhBo6ymkyUBgNaF6BHXfFqcyYeyHmCMqCQB6oMd8gXpEwcX6PZUYFu84vnpU",
  "key10": "2T1aded8a5GbTXGVtoFRQoRrdVy8CuPA8gbUa1nCPXCa3J4wLzxCqkmobXXe8bRbVCRUtbyEnWw2nCQHA23AW24q",
  "key11": "3NqWC1jz32q6kT8sUDWXu96hf2wJCZRcWaSUxdc6J6T1Dxi1JVzWx69mHUdFcts4HK6uXESyhTbyYJo7sBECapLx",
  "key12": "63cf3rKNeEJR6N8urjGEaCUiEwWNU7rUcvTWdhmcpXzwXqr4xBHnw4bfH8MDEcPRpkvRBYmD1boL2xQ6y8dKV42r",
  "key13": "48vFEoD9VTwgeBEU3Nn2wJqUYRwVPHNj4mGJB9KnXBmYX1Bzjdd3fC1Y54hJBY2nWL8buvDQxCPxHKAYs4nxj73q",
  "key14": "5dWCKyJxxqjLQKc2qBcmaqwAJvMuqSxLbAt4d73tDm64sMAw2hTwv1LvTEDpVHUKWL2pqYN4Tmpvhua6tHSksNjb",
  "key15": "vMRxguEGrn4B2Fue4nxz6PAjiQuhigsnvfAPC11AiKgfeMsEM7RtshUKvUUHL9C9zY3HSww3SHCucT9z14uRs2B",
  "key16": "3cWKwQau4sJXCrktdf8N5q8wQWSdnRNihhDfT8qHvNAifNTjBtnzFri4Ja5b4UjEGcBUw4F48F5hs7dMzbpMXMbx",
  "key17": "5jazv7Ghrzn1BncD4ctv9DiA6hf83YJgG9BMiCDB7cSY7E1PsFo7CSbfM2mbTmMXJpxtDahB5fmLeozith4xjwR4",
  "key18": "2get2vEMi4r37fuPzfZJqdgdRtb1BUiNWGwbnU9kFqFmJ81GrSqZGk3PH8xtcYSa9dzYdf6HTVaKRcvxTptMd5FB",
  "key19": "2fSJAWNydEkJhNzPBsQoTA26FD7HmrFvhdEGnF7AY3FHKXhDWqcd8qngkt66Sxj9C9wxpUsGxYUgSHZr3MqRFmcJ",
  "key20": "2QEjFctKzZDW8eY9gsqFx3UQhXYcTtnSMMnAxsjiievWBrthodaw2twS1PoXD3cUj5JaKf6SErnVRvHYJu3XtuWV",
  "key21": "2rzZ6P3VBBjGdX6VnUq2ihFmgYk8txZf46z4mrYjEKRh6rCUgLmbBtnUmambq4NKQcEksmXDnWG3jedRVj9evgw3",
  "key22": "5gao3pQkjfpy1J8mb6TaRyrGKWpUDoY8CPpnZMZFLRnWgN2fPAfoMU89MrhjCcDi9Z118SKsQUDaxr7CAwshXMur",
  "key23": "39Yy9UqcLXCyXAnBxedm7r56bL1VPH3PHXgpscFsxX1mYzTNneCxwPGfNrofuWjFk79wmzUYUdGYeT3yB5Sj57Cs",
  "key24": "4T1xkTFfdCVQ3PLwYsxqKSCJEvUM89QSD32bY1kZfTd8dee85mysV4fbfiJDQ7jbC12eaiztU1YV2CLuXJGSAr2D",
  "key25": "65gqmausq9SeExkECZfaTodzU6tLA3g4dxzVWnbdSmsAf4W8ChMmK3XfwvF4h9gMh8WEieXotkoTuwTSSpx868ms",
  "key26": "2xdJzCkieDBQCAhaDsVX47qsaZG2SPuQGvGqKFN3TR9vzqrDv6dKeJVHLjtrpzPmdCUemQFEpVrxTWpW7TZW3db",
  "key27": "2VtVafnb6mfWFghRb1jBRo4yCc4M4ukNyQo9hUqiv9pWNdQLm4TcDb4Pp99376Xiws1joVmtEXokgs7R9sXryh9Y",
  "key28": "5daeBRE8RwjBPk5kMDSfrBK2GiWCNTKe2nSWjTyCpTEmRuPadVFR4SUyFHaSv22g8cQiS3vfTwH2KySB7Ru3qL2o",
  "key29": "3nbkcWS2UU6T5FkRzp17sM3GYJeeof3bHZH6i49X2AvTuV9X8n2yvaDxS6x2ZkJYaVK6BYFNrDFWFtWFnBBPrN5C",
  "key30": "51kifDEpZCoQAuMzpEFhcGqUr7P28YeZ87GuhjYZgFvP4j3vDVtDTwEnCFdfSxkWrShqBaaNqMKjd4nYN3D4zvuD",
  "key31": "2hwsbyUvu2KpH5aaR84xkJeSb6dDC5VFxYQgU56bP4NQbGSj5mprqeuAtxU5W5PtA71zMfqzZ8Mh3zAZoJch9BVu",
  "key32": "eeAtLH7X8gTvEFy3PfYT2rNyixpCtZLNcHB59s9iUpqrNk1tpEoPS4odaAdSmfi8NDYvf7FWa55oUTHx49Ft6Zx",
  "key33": "6BhJ8jn3iAzGqwJKtwQ76SfACmGjVU7ncL1n8wwZpAB42yHR1r12su97KGP4ndEpLT4x4AzFJs1UP9yvnsYLks8",
  "key34": "41Qc2KpicZSTH6C8HmTRJpNTp65RLuf3kn84CN5rEGtAVmKLmV2hLZfiQKrJNumJgJXcXC8k7griDathT3pXwHjR",
  "key35": "2sQjxP7aF6k7z6Umt1gz9JR8aNCwfiDs4sHPEAMiCGLBWcYmWJcKGxi6pwEZu6rNpvkHS1HyA2RwKiQd2Pt2GH1A",
  "key36": "3QszucyEsH2pCvThK2if5J3wM3TKr7Bsy3Y1CijFLSDXDeVj3M14XSgWujX3JJ54KvP5MrHnTwBJc5BjHG3qvfJA",
  "key37": "5xVyJyU6nRFgAuxqyBqfPGWKVMrifyz833ZeuWmaBuv5vteSoR3densnvbCKZ3xVCaPQbTVYS4TCzHohz31GnEGb",
  "key38": "5dae4L6FLFsX36y4EFBMoke88X97JE76QagJ3R9n42mGTzeXtbdPiA6tc4xRAmVWF4X1ztvyPjG3xp5buDXyM8Dj",
  "key39": "kAVggiToy4oVi9VXY2zaAUJ3Cam5otaP552CWbR2kxXHNhdTVHSPaChLN7sdG54TVdE8sTp4KmFzjiwaPMeEWSz",
  "key40": "4ufQmUno8iPbNfsPuYL4SY1hqfiRmhSgcdN54LLSaysBVoMaGki1mvduTmiDryGds1DHjdTpbrmzKipSjJEoNTsN",
  "key41": "2714YvGzcf1BcJJGJp9B4NG9D9FwGnHSL6asZTnny8vr4A5tL7fuqdnDq4KeWTpsi3yFjsi6najFZ1yBWaCuUdUx",
  "key42": "49qQJeDCzkyJ3ZPQrTTTNZrpPZQHMmjNcbveRJy27grQcqR3TNrCDPZF45mSySBxEzaTvXzjEveEWjKGnmtq6LCh",
  "key43": "2x9rrXnQwo84u9kjQF1nVdNsNz171q4zZAMoSZJWCHTo4QbJnVjts3vqGDBapHACg2u7ZE7wF1SFNFm8jypSb3uX",
  "key44": "5v8fMqXmMDnsD12x5qdD4kBNaPpcPyxa7x9owryAGGvaMLKExjfTd8Nfwkbjns6Ppdog4bvua3o8jyvNs2K2PR3m",
  "key45": "2WpxaeSEcWEjFBZyAinA4J6MNRrGrYUWXwMFLrWiwD9SmAWh2LChwpCYid4VozF5PN3F7nYPYkLwbWDV5EgNxNZa",
  "key46": "5tHPstzY2NciQcy4y27kKMQNzd7crPTLrVwkYjijDeJj9HyenyQru7aKNijVBaSaT95t2D4hrko4pmqWrrF1v7iQ",
  "key47": "3Rvi6MwxeBHUK1zZ4PSbGNW7AF3MPCLZ8aHBjpYBgtZNUUBSiWMSGmiFyycNdzV84DqnfYZEnZEwVTecYJic19Co",
  "key48": "2TXrmYpKhtU3eCrPQLtEqCF9CPHCqVDt8ZjP61vCTQQ2oGNmPq8xTLsMSifkPHtAjyJwt8jdJ4DFmBeyS64E7SVd",
  "key49": "2e2Ctph5WMbgpkk4GWeyDcrbGyGPtLAggMLz91TWeor4a8JgYfk2u2YqwPC5G692izh1jjUypQ8t4WaCRCL1aQEZ"
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

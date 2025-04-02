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
    "3pChrocbd1a7jjWnq9nfuL8CMmXpcjoJsPShfSZuFXB5AxPxv5qEJP2oknrRHGCcRVPEfsBpUrS5aogaCWwdhp1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tWa2AkD5PxoCp6zFfhWqq38DhVQUCUoyVZ3U1RKyTStLfXR5pvsRcTHaDvfChgAw3a2thxUEuhXAn1eeNfzpsgh",
  "key1": "56rJuNxyFYvE4i9ziaujpuCeczVqMf9cNAoUtSxWzcEZEKYjc8cLNgtCNLphj7j6sxQob4TiWwDsCfWCcfSmn3ob",
  "key2": "5stvTCmsNdG35EwgnhkmEqiZZj9uNHFc76A4RbaXHmcvhPvXKjrDNxYPnRoedURZq1uBwbAXF8h2nfJVv5oNafJL",
  "key3": "52XJVFfJC7X2EWcJqXNP2pqJriFYRqm1U9vVc25YdAmzpX3XdkfA5ULSf2VaoF1f3u4Kr8brM2uZor5GFKtDNjEP",
  "key4": "5Wtn5hSGyY9bw45zubkdE2HwYyQyJjh6Dwue8tMeurNfgvNj2H4f2GoHdqvJQBgs9PuBXXoWdjBXWHABbspT4WC4",
  "key5": "3JyyxAVcZce8jZas8PtQexMeaBUTskUyfg3pcr39pTtYmLmK4Yixo2uCuoNksk9gCbKnCVFiNg41bnrT3eQNp1u5",
  "key6": "GbBKn7HvJ2wXR8sP5jLEr6DyNyZhQuRZC1xXoCzZk8oGbX9qYNhoNLFUoAyqJLt6mq6rZztLzGvdDWfnYEey6VY",
  "key7": "2VxgiDTF3SBHYLLA8AnmZrB8NXEvEa1i1wgTCP59wnGGGkLo7Bmvo9oSMUn6sirZY5QWQxbeSYBVXZoyh4iwe8gb",
  "key8": "2PtkQYiEh4QdBKkNW2wJCfc4bfrFAiKW8kuUDkgGn9Fya6pBCD7BTJEqrRW8de1PqLpDqh3ofcxnUHKNCNP1vkYo",
  "key9": "2E2aWCXht1J4CHkwkLd9FtbZ3KFAc1SBU7LnzxinVPmpydzXtiGasuifyRUzx8BNUdqNnP7FTLmUA2vsjpieAUWV",
  "key10": "xZeqYSTRntoYanTqkZG5QHQLCuPupYYJgfdz43eYRqF4s5vVpev8Kxv2CVUn15RAKu4ec1zsCivjipDuxBgKLJu",
  "key11": "4yuj9JeHLKnEeFH61rRJ7e2uEDCFXPWimDzbp9qjtmzYyqmA1uhjpzkWZZKZvQrcfJxxeVywmb3zbE8Gj44xbgF2",
  "key12": "4Hugs7G68UZ1e7yh9Uyosd2tLy8xFubDVxkCGWuBymYYX5zBZPMvCVif9yJnUpgXiuDV5oN64i48nUC1i8XcNUrb",
  "key13": "4Gi6WWDJ62EG1s6cN8YY1ZbpVn2W2wNF8k2Fd7xtH6cWtkQr9CVkJgHPFVKW1fwAxgKJCAVNfWPVnVAfyxvpugca",
  "key14": "zorS7FDh8Jbu9qSbhdEkLM6y8idpgTKz7njrpo4ZgKSpcs2nxuhu8YuutGPh19ippyM5xmwgMhhPyg1WNTbAy79",
  "key15": "38v5W5e9vS9vbxTm1w7fxFj9MmmiZ4bDLyBpCd24ogDZbUfwX98jbY2TbDoYPsZ4P2CFmMBR1rDhPkkA51EjmbLv",
  "key16": "b5sk3uPoAP8W4y52ApTFLSZRBsLmaxFBXjHxp8UwLTzPNpMnrvJRhKVNf1jegkCscAgE9W5iuBXhdMh68pfo4o2",
  "key17": "3FeEWNek9awrertSRA36Jqyqffm5sqGzj5xzbtwjSDqbtiq8gg94yz1bSMBA6aht3UBdiFB9gJhv4eprCH3fczyZ",
  "key18": "31UgEAQ62Z6H7umpxYfFaZc9kMh5Mevs56mpRRsjAm7q7B8nb4hSFQtc9U16BHyt83LidAoe2A6RBiLsx8YYneC1",
  "key19": "3gJ5gnY1ERLjahDTkpctNw2giXpis4tANPCz1A7Hfh3KtdTus3ctiC1fB2abMZJbFgCSCyBa49jpU3pPZwMpgmYX",
  "key20": "2fnHmp78x36JGRAF9sGHQsewTGMpzo53CnWPRKhmPgATvxNzh9FGX7VPgy9ubWt5vZZVwuJzsWs5KnJf7h26tReA",
  "key21": "5btXEj8QgHyyXDgrsmsDVV8wQbKYu9MCfR3Q2eb1bU2GUii9SE3kVWjMGymwzq2qNrvWtXBKtizBLiaZFA9SV161",
  "key22": "3pN5K6PRAkAJARHTaV3MuDY3HYaA141ZYZxDrQn8AfCwkzEJkUf1VLefqZi4TR3iEnpireWQa58ChE7q1uX8MGKy",
  "key23": "5h3CE5zQBh68BybAnCp2kygpmyMGJrHLcTMQsV87mUAuXnNagpxvuzT52uF8kpqgn3yHRrLQgWakMkQP3XMcua8k",
  "key24": "4LHhsy7pQwifSQprAySagRAksVqXtWsYkHX7sz3HnKzaYVK3eE94JdyQb7Zckx8Mo7FMAmDLujv1ys6SNnQEb9Kd",
  "key25": "4fFhM7r33pAS9xazCbCMK6YmeNmw8RVJxrG8SfGFKHxsWbnY4ccY3Z1Z99VQHRmaUi8wmGFdvSpPPEEVbB21fy4k",
  "key26": "2bWGAmvQDYaGBwfkT5n5aKyNNha9jKWtZiH6fTtz3CPMArgcnPt23EF2i4SnxNuoWBrKgWnJDQmCHLYiQL1yNSaq",
  "key27": "32mnUWHnPBmCHpzEoi5XhAHmzvSBWkJmpYnvyiyfu8jdXEDYvqwaUaPQeCsBFTFfK2bMF9Gq5nsatjLzkbCNGi2o",
  "key28": "cSRVNUL13nLSvqt3yFG5Qbf25kzehDsZD1C6osQGZuSYwG1ZbpYEDF8SW8VCxK3M4iVD9aEvakhZgu5Hci3zKQm",
  "key29": "344j7vDuarkY396eHAUncUwMJ4QVkf1x4Fgn55K11KR5L7cPwmh2fXaZ8QGQcGJgT3tMQguVgDeTSJWzobxRgrxe",
  "key30": "5i2xR8XebfqMWredPBUERhBjbUvbi32iuTV958m2xBcZzEGTeULM9QExXnVr12N5i2bD9CN6jmGu2qsFUJ1yuDFA",
  "key31": "4NDZwdyrodkkrNRLkCxMgPr3epfpQp59q5aChXVjTbcr5svXCuX32rZE22rSowrsLKYydMiscZfbuPnRWYXPdQ9n",
  "key32": "2zPnrxHkQoVJKTcoEqkZk3qrKfaVTcPb7LrszRS4zDYxBX2gFYDtg7fP65iPMXyVA8xFgThiJoSKrG2yoaGWw8uP",
  "key33": "3Nktkx1TwasLAo4PYDdP3dyYq5vnMWop5No82sATmgX15m3i9axBNM6CaeXRMbbF5akaRaPq1PDQCoAAGwQmRvae",
  "key34": "UX6ANoBDWT88eBa2gCTwr86LrezScbCNFUcvHy3NbcsbsFaWvMq5FvJp1ZXQ8FmzdJ4ycVBLRwd6Let3BKb4dF4",
  "key35": "4RstzbUDyNfwfBL5ARVUjtqsRsv41e9Ym26h6tk5TXSLgtfQoq95KuMBaEsgMH1SkjY3qnnRiXrSMUQ7NESDjgxQ",
  "key36": "5VWGFU1n15Sp4hr5tmuncKno1F8VX2pk3XyDdzYNkLBtbrYrng2zwv4dGcUr9LLHZKVPp7sb7guyKZYmmbXFgTfX",
  "key37": "3D5ZoXZBo4t9HzWHcKW96aZbTrJNrJaWXN9TXoskNSkoCytshjNmgHT4BdaSQAeqQfgYZaWs8w8s3PbCELXzLYfd",
  "key38": "2ag1f9txXBcTEsc1efcVjZz8D1ma1b7Mx8hcy7hrDESpeFacTSBeKVC8qqVshiKnk3MXqiY1GfsmXTDbDY7oT7qs",
  "key39": "2mMcBaaYFEEutj9puxp9sXpsDaRvQkHYdhyQXve81UG4i6cVPicd8H35JUDQ6fB57zHW1PskaoyFeAEyVXgBcjSm",
  "key40": "5jXGpoDgMMNzpPtoNwiYRBxiiRcAhvf7fTHd89GazkU5GZbvsUX2FeiLCmdFjQCFdYwf7x41M7xTyVoZ1cy6Y8eT",
  "key41": "56MEj4v5dGD2uHCLTdygjUsecCpEJ2fY7QZvF1umA2umvpTxf8CPyhkP3yNChyVJGig5hFuokzFsSGo82aJFb63A",
  "key42": "5SAzJhJ99WM6neTWcLg72ZiNvHnP9xYcDKstmDWP2NaDGGjNyhNgMv8gJw3fdvHxFvpiRpLhkSBhTARJYTwDvMXg",
  "key43": "5FYLtZMvQDUnNRdjwvg8ByxpS5QXUZttUfnV9YfuxD3cV75nx6cR1tJb63eTopFmbFkdZnVsMoZtzyUr7PEkFB4W",
  "key44": "5yt4NAuFGEbEzkUnUGGeSQVrhyhP9GaUvCRqMNybB4nCwFZyJ68gzYNhiXJEd6UFnmKAs2csyu7fGFBZHLdiwgu7",
  "key45": "352QxcyBtBi2xB9J8zAYFvqRGJrZDvgwEynBztQEXXkkFpvVrxicEWE8GdGsvjY4XTVuroxMidh5ggnKmNSiNgR8",
  "key46": "NG1dK45RwhnsYWL7sfvubxJshD9WcrqJ7V7kfYq77xvLnsBCaLFVAgSoM4Fjcwqt5ZdX3JrrEhZMWQHktP4sx83"
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

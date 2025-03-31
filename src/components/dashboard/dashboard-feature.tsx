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
    "2WKXNiopmetCCLP3GP8yEFNA91XpvgxcNax5FM1Zy3QrswoMERtEhgt3DdAfcts9UX1GgWmmU16jZAUd68GL7nFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ki5PxetGHuhT4C58LXz96yLSof9i57JRmYAgHjkv91uNP5p4fz6zaaG6UMpN4zuzVT8hqKb91SkgLbzdUAwxas9",
  "key1": "5NrcYAg5dacUywBqDKkyX7cyiw6PS72pBoZanF8sGcrcTMJc528uRafvAMa6tzVQJZdAvxvP7sphXcPTfH5MfaTH",
  "key2": "4rT4uWGFSJ3yTgXCJVjeFQr34XJD1pXhQTGX9W9UTi2f5Y5A35GLNzanBueSZvoVGRiGvAyWFF7Vd3L8jokNL9QM",
  "key3": "5kBTeUeenKXtebgStvYMigyuxEFNHGV6dc31vTCGG8zuAtcQe7WKHHnKpSLHC4Yvy1GEPAQg7HgjG9KUd4Bek3ME",
  "key4": "2pwE9gpVNViUso4iDNBe2Cmka58mA8631my6ZhwvThreindWqF9VpzDhvkXLASYJ8iHQeSR4BuMXzcqbFai7BFtM",
  "key5": "2wpb7xri5Xwo3Y6HdHGXKoqWqL3ayEFERQwZNLQ7YFCqfkPfohDBFZQciZM6rZ3194USjW6FsbEQYmBB4DYPqJKc",
  "key6": "5Vsm7XZ6avUYiqBVM9cgEEZ1YjsZfQvA81YaiVX5KULBdauLAySdQZfHhLP6xRewFi9HNmeRVywWZwCSKyssX7B4",
  "key7": "5viQJhcghYLAw9C1sgVNFcJ92bs6j4HEsHbnDPMFE6SmCxXcWFG2d1P9pCyTbcpVgut6HrekPorPAa94JANEo5sY",
  "key8": "URdBUWnot28bt1i2LhMLpXykE1nVVshnRwr7sUtkMYxdAHCSniKuDkQYbStrXaLoXEP5EiVXneDU5otuaB63GrH",
  "key9": "3sPvq1S1nCh4vyw4T54Vr7ZXiEkK3vu559vw8M96FWQwuWRNMV21ZZQ23SNModg3xk1qeY9b8uVdtUfgjfACaGzn",
  "key10": "4RCRFnEp98XWQMs2sLdDeoCdQfwYsSMZgLBFd6DHWKf23UmGJuSZJcy9XRd72gFYDA93tCPrpwnZmGeTCyiZGFTd",
  "key11": "4yZKz7ay7dyTTQQn5dLVt7T6uyc4q5ztZzd6zvQcwcneAFPfzN3G8GyWTnsx9BKXpy5jCUSz6KuxxHqt9kvvCU9U",
  "key12": "27H95Pa4G2ju9DY8fbfSwJwHiSe325Ao2ua4e6ibDeCZGDuifMgtxzLsB9SacJZixbuiyQLf7Wj3w3L3wyYuCzou",
  "key13": "2SkDog83skKVs8vpbtmbt12fyPc76iKbqASkF4zTDmT3uVAoo5oZvFFFVnEXJCW8m1WswfDaR56Sa6HV9s6s7tDC",
  "key14": "hSeckdQsJtKaprZzBCJgCnBEmW35TjCLdNm9yfRPAJR3b9gFdNi3qZivEPMsVvZh5nAQbUADtkAU33LSg9dLg4p",
  "key15": "2mmx6gTocP7D9TxPe35RqvLpEgAxfa3ozVxWgeipJUiUsRFATaJeuSWgDrmKrSDiF9zagNUT3wjCxLTeb6GicSw5",
  "key16": "3s5pSkF5L5RJZbPWuCTP76YFiszkesvxoKX9U4TQJL8jETKCipfhPGR2pRvG17NgMEX4s8Y2NL1Qi5azhU95rNmS",
  "key17": "Nr7QU3n2vgSKXqUkZ82ae183WFTjgk4MHDibG5L2jaSDnJQWFNvKV3VJuU7VRoD1swkGStRzkfTXYB7sEsJbPk3",
  "key18": "4puhwCWXdkZDSqkqYiPo3rGwsREr8XqNGbPzTkhkh3Up9E9GazaFPogLy8QETsMBddDe3NYMuN9wHLefERyw8Jh",
  "key19": "54caUU7tyKQNojDnfCwhLcNsSGvccaBXNTaESv9Vdste3e2g2D9S4Q5sFWmnPA8yesWnteXbPYrdjaexRP2rQBX9",
  "key20": "3CaWhppS8zdvAKbzYJLJFuKT7vNnHm2657USZpugeouNMSfPk6HR4xyrD6jYCPThwJNV67a9dcCUf1HEPBvYLape",
  "key21": "2ETXoLccqW7M7SiQMeUjYgg3SAoww1unhAzSWMSpq8huRZ9jVWkJh4tPGPBRKfVv72eSX2N1e48Nss6yxT7wmy2V",
  "key22": "FfSvFiNssZDFTUq7Hyu4n1nbcUsjNKiVP3MaGUz9HNBFEZG9R9tNiFwRYEeBm33HkoUodYhHbWztLx6MSJsBb3a",
  "key23": "5CavNpqyc7PWZRLbL6mEzSTX6Qb1MqZsCmxw5ByZeirtNWVzkF9sdqDfKupXP1R689XgfhvQ9w2w4m7t8vZKrJH8",
  "key24": "abFmAbjwKoDurGiaZkoTULrVdf3P7LUCug8XKraiEQaWb52bgdHeQADsFNvjDcWiX5XukuPs2WyGG5XMxn5UtMh",
  "key25": "4fmZWtnErLPpogBB4mW1Qx7kJjYRmAQvNpoqV5CCPsiXypebfLHa9ao6aBAx5qAAnnzEQAi3QzcfNjGez5yZonQu",
  "key26": "4pREBLSMT5Ls9AriBMvNC7eMruCbHdzFdGB3pMkwmAusrqtiprqxFSvyiQA1xNwSGiwYQDWaCcUZNAh6bMG14nKV",
  "key27": "3193Fn2tHciL3pKxvQf4PRoYDZXPCa9majSPNK87mcqbQkCLZRKAAgLSAKMPZDEiSFSs1WZta4MbAG91MLqkRbL5",
  "key28": "38X9LKJCKV1hYfJGF3UeC3QfFznkk3puchCtTsVbSLnrhM28zDwqMy83bhShhM2Mi2qeki2uuhpL7HuKfXupvkMS",
  "key29": "Q7wWmdi4QCoxyhbYeNvC2qEFiLyNEQrz1KbzYj9iRhnozxoGVWiaSY9Z5h4NKQvF4fu9wMMrTbk43KLPAk7qcKt",
  "key30": "p3Gs89v5rTaMBDZh6pLPff7tG49KHyjpMwjWaHi5gcEKowE9hGrynsJ8YLMdrZYKhYaunKmHW3zQk7mPsZbKnK7",
  "key31": "dLAtD3gbvMBDteywe399WP5rnCHkkysQMT1i12rxGYAgRNPfrkesNiu6ngQrvBZo1A1LYfr7hf2NXXAT79bwED1",
  "key32": "8GUuUhc5BBoJb4mCCMPgktVQqMu5dqk8x4G4VrEZozqJyW1qf8aaRz1oQbKdLr7uJxHENycenGbBCF4SoSubijG",
  "key33": "5LN1eXa44UJXdgjFnXPvSMgBJBEQHdKz6uFwZi2TarvsGRdma5QYsYNYkVxh5C1scmehf2vJcsowTMx4iScZaocw",
  "key34": "2p9FRxRGVWChw9TXVtZhEHXnUjfa5iMC9fGSTtghKrvA7qjgcXXMZK4T3uvPW1eMtyMCWsxG1BmAsfrf2V5cuFmT",
  "key35": "2iq9Dq7mxUhKQmjNrBWpWKkt2f9knZKz1tdx9xxrCfgoxfmryq1GKUAkBikD94uTtVpYeXYy8oESZL2igtWZycsC"
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

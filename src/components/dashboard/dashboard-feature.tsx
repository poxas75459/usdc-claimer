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
    "2YPYYBj9xNUwUeDitQ4s8oax4NVR7xkvhAvmx8F1XsnKNwS6DGLBtD64TJqQFyFxGktjXsfrRvDAV8umssXJrefV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67bXigLJHF6nrR58Tp7WTewZ1J12FNdxqmccjTRqSZLzvy6AhZmbgiChFBW52V4Dr6tVwQYNwVPsvL9qaiy8MB3v",
  "key1": "3aGCg9YPuC1PV7Bcp9Cw9RVzH5tQvGYyP4suhiTYiZJU6trDhYU6sebg3pgKM5PYFPySzF7ikWMxYBN1k1C35No9",
  "key2": "MUQiD8FKFhNG5RU1iWeGeoQxML2N38Zanxgj6cGZzXAm7gSce42gPHPyqkzBc42BduESyyqNZqCdwb5ftZDHJH2",
  "key3": "5mMWDFZnpjFnrhFSZgMfSutxcnXpQnF4UmQsi86Vvf3SNm4nDAa77MDBf8mAzxue4D7Yz4f8rdjTHS2Uapj5SbY1",
  "key4": "9P9tahRjZwsaQoVJeq2N1fHhwVccEtQXCpukfBybdUgBVeBq3ojzJwh516V12BCSzH3WpvYCvaGGJ1EyAgtftJ4",
  "key5": "4SrdWor8JXVFxVKPMR3rJALiKvzrKYY1bTocx2aHR6aBWenXBSdDbQuzdh4zvWQTswUEV7SD67wGnxqFBiXhe2ez",
  "key6": "2gP7MMVempfK59xsqJm9GPVa5oM8cySmCaVr6o4xDRdj3QMbmc59QcNWQ9FqcfFKJE8wyxJ98ijUYZb8YP16uLSp",
  "key7": "2hLzenqZNLd8g4XsrPZnteuDFXw7qbjVQBeRapNcAshStjKWBYhSC6Urnf1TjUFY7AKkwC2ytjxvQLFTGVgFYnpe",
  "key8": "352ekmtTQiviZe2ZpC2TZ8b1cqbhDG88fzpiuukfziodifrmRuCaZ8ukeCx9yt2M7am2xbG6JL242NmZXzwZWg1x",
  "key9": "5QpaEJuEZnHqxDbW1cxQbexNr25ervKjm2fFE4b9cDWH6qVhLFxSGBABaMfTSG6rUvHr2UYxaettSLBo2XMUg8jN",
  "key10": "4ECxhsyDJ5FiVP6c2safeZ1vq9GHC4e3oDMUkx1ugdL6zx9VGtXHBgKg8fBL2gAXabTuHC51M6A8v2wPXeyWwnab",
  "key11": "3ryBH29wHbgfmKjPYJ66YrVCj9V66DF6UompWfnifNzHFATiRoBecUUkdpUChPw2cfoYHU6YK9BW1m2WTMTcd4Vc",
  "key12": "3msJqWUSGhWEcTYaZQ3Bu7BCkjio1P4ee4XbbRyRy5L4CGjxXXsqWZZLgCKUSwm5iTubqFTkc72BsYXuisNZwVJh",
  "key13": "3orG691TVdXj17wDZVkgfg5Mkb63pEiEUJ53na4uYxDBeziGJgSnPMkC1UaidzN42RNQM2CNXvuxsAX1q6wDqgbH",
  "key14": "3ASKa2i963RigufLfZry9NthvPFyoY2JJwtU1y4roBcK6yGQe4nYtxGed9HDm4dKT9JsTTsktE5cHaZvdMN18PTS",
  "key15": "5ko8SkhrdjsZ4ies9he51UPm3fFRoACBXDQft2pcFzpWc2ZMQStNufwaFxFhy2eBVTmY2PtSLLZkzPS5dtJFWbwW",
  "key16": "4eajvGG5g8CbpijSjkF7jjbVbysHb5cvurz5AN5V6P8Bd5HCUCNmmFYCD6vbdbsbx6H9GnbFM9GChpfVeERimtJN",
  "key17": "2aS8ZCrTkjD4rBDY1W6L9hfApSxDC8nvYDSyKSnZCeyqBJh9QZQVbVoHTyyTWGkQJmeMdh2vFidikqe94BZU6mUJ",
  "key18": "D1xhLWASAD2wCNq1XZVg3XhTbyzEe1vhi9zxnUkbHnsutYkxUfKNq7TkJbcYXRqhdf4HMr43PAsbxL5d5M9R6uP",
  "key19": "2QDyJuZmfqgdoLANQr7xhCBmg9JWtQ7RPFXFH6jpeQrcE2opPvS4Bpr2gxk3WwztZQMZDc8ovE4FKKGc4QjKuCH5",
  "key20": "a8y6TQY5QLxBrmkrbuPuXk6imeri5Xepw6TCDxQ8e7auAxQpp7SuHpxMYoAh4qpN74pKjrTZCyj68VKs4DEzWfQ",
  "key21": "LModEWZKZkxApinMmMv4QTXjAzhCpmYaKqgdijMSvwvYBv2cpGVtrFdmEb8BPjKkFzr5wE87Mrby7zkDZEKQnbC",
  "key22": "3wMq4hAVRwNcM9NcG56AbynEKfGdcYRkrYNiwj9xcJQzCuXwjUPJTR69CXZYZRn9tyVKaYHozQdh3zkbNZ1LAuse",
  "key23": "iwfLM9HG4R4UXoV6VNVAzzsRSzCioxAvZHZWt8EKhTc5AkgeChdSdki1gd8djmabWHCZCp2jpdjm3DqTYgTF3at",
  "key24": "5DLMjHpP9K5NUPy3ASBnEJLL4kSU7VHACEmgaesjqaXHgYMvc1E5p6urSHyPUQ8got6afcZUSfC9fnqRxgUS2Yh7",
  "key25": "32g1RXF8knrui3LzV5zhUhLtHjk2gGwoRBvojVpx8PrQ4iNhoETWv1hFYk7Ea9H5wsyQNRpSTtvi4me7QPUP4JCf",
  "key26": "4aiidU7ZevPNhYAbYycKrpGeJSZsUpHr3tK5q7akVrjwutvES8qEPCzGQtaQY1JNaKR7GLkgX5wg1gqUQaRHQ3fi",
  "key27": "3h3xzrtfbgpxjqzEis3nDutev1RjWQr1XXfaGgn9EHXvp1AHty29FaKTSxW7wVye8NLT7gjW8fQPaguT3k1z83Wr",
  "key28": "kh4sp1W9xUp5t3JHuSGew1Ru9VhLkmiZhs8ZVgn3FLq1L9MgS9m3aRtdjQUvqs48bAyFDXkt3sbnuK9LmjS49Yr",
  "key29": "4aJbd9iPc3asHF1mZSjkKAM1wjPjCNsKiip3VYqzqXoFyAZord7y9H2uLsLDhDDKcb3YzT38UuVAGnrcHt8FVgYX",
  "key30": "5Y7TQu8tNcpC9ytT1Rw4tw9vdkeGui9CdKRbZUu9mksRCZKDH67w7MnVtT6whDHVxHC1iKPhbThYrW2VAVW3EiBB",
  "key31": "NTyqMoYrbXJ4AemjfEXqA7wEwJovAJR7xz9JMDxFiSgkAHX7kX8cictHY3wWvjgVpqBML5v5UKDYtFRS52gweuJ",
  "key32": "2fKHPr99hCUD4ncsMBcBBxuZBZhzWa85jXVeDC7KUoukDddS852jAo9fxkNeWEXEfDMTYd2riP7QkfwaKtixdJdW",
  "key33": "3rh43312t8Aw5vkjmmoeHn72kf8N1rTX8Ad4kqGWW2Kvr5LuRNKtvPUdmn7z53s1Lne3E7t9NfF1oyBM8MrKkpfU",
  "key34": "3jNQhgjkbZAURmTf7vSmAGeUb9Wnw3rsndS4B8d2y7L1xiZKT7Y9UXVQTVQ4NijN79xLtkaV8ED9jBtYbEtYbidN",
  "key35": "4Mcz5gzZKgRKwGaZ7xrVPGFy2mBFDc1N8QhkzMnUiminMZR3XGeq6qw9byUwirxkFUQWHXmMF5KUX1tT8L1HBKX3",
  "key36": "5BYM7GPbUd66Tz1GfVXLM8HjDAaZcG1cHHY9daVvZhfufW5fVubRfWfkp5UpxjLdxo8cfWYjqNNxDFjLJQWsirWh",
  "key37": "237i2MPnTuUEDH3AeT7Bfi5cCyF8ETWzYYr6VA2xVrk86pyp7F2XnZj3ohjcM1GAiewzeas7pMUxMHvBPTwuBiaY",
  "key38": "3yK32JsiDKz1tMB4cdxPmuCCbBSLJxYupAroum3Pwmw5pph4AuBxATJFKJWib5286HV4qgFLW4iKaMLEcSz7YVGP",
  "key39": "6xkq5V7yubQb3GKizscDLDdzLZGen66uZ87dnpuPfzo3JoykBFANrqENnDhyFfbQs6g63rE6CkG2xah8aPPUhAW",
  "key40": "2fZG1GJBgULcoSxFVj88DYaF6ea4czP2fMSYvAFnadmjqkXbcCeBcDvPo27214fnMgp2y42Jd4R61gBe5cuQsWf5",
  "key41": "3X9DaXG4GSCfiBnqtGNxK8foEqmW1MJc9owj6DWLVaeZT42r49S8tx8xuAro2yg48uZqMdK88BoLEaAWaboycLiS",
  "key42": "yzdTC7k3n3i1SZfwYUAhwWSrZGKFKW6PgYcAwdaZrnXrSrL2EB4t6AZiWXLroVPAKR8FRcAYh7WAjjnw6gHxWTN",
  "key43": "3BPutgJbtUoBREoqhfj6nCTkmCw9feqoZVm49vVscyKoQfVxMXLkryW4QHm6TVuUm8fLLSx91sibSCv9Nbk5W2kR",
  "key44": "2ZxfLkwTCwgjNSrosq3di4672DLKftwPSoTNYtAx6J5vAdWaeJF6cCKTZLdxq2uZE3u6aWQ6iP1h6GqereEu46Vr",
  "key45": "5akCePq6DzHWQ3uPyRxcyRwWrb3GSUy9fkTHN2Jqpp4kbkZpRzG5TVuDAK6RqX716ubXs49mGGeHNcazxcsXBoBW",
  "key46": "4scFDCSxP28eEsZaZUj72guLeznRBVunfQUmE5VK2DLdMLzdQ9ZcxbzzFibAw5PqkvCkF2qAUfGGmE13BhQYSp9z",
  "key47": "iaiSqXKFCRFJSuFGGC7CcvM7JRckWecA7c3GGDPJZz7SKCbzEWPBxyrQmrk5CbKQcrzsGHMTs6hsXdgPn6V2EAp",
  "key48": "5ftnLBvMJEjV2EpN8MrhGnR1U5SpYnxHkkTLbCwweGXBBdCAPiVt6BiWi4gqHqNKnPb2skUo3mLjUQ9yYDooRE2g",
  "key49": "4zvgbw9p63VDGEMSYybfcBHMiawcV9CR8H8xRTvi8Lq9JoL5SsDhCSoLhqepQbUtpuEEkKCJRS9rtqajymcxmjUg"
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

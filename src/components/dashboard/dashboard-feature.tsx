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
    "R4TRSpQ9PLGTYQaGEt2SAYTJxNvtRNwQ9UAspWyEBT5nJiTJX3wnwfifudHvThJAc8n6mk1PYFUcUn8rKbtTyKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5saKCZSS1MtW9UjH39DYuZ2hQyN57Mj7P1S6FStdXqkewNBLctb8GynAaa567N25N95GeVsEbXDygdC2a24KV8Je",
  "key1": "YcWvupWMbniiyCMDNn7gWkZ1reJUrfpkVDfCdYRAhNJdZeJ8WXU7ML57jmCbwCcopyERapvj9LQ12MHBEogqHYn",
  "key2": "2qkjkmcLUT1PpVFGSZtH9DD2zpzDddPjgwvfzmDjB6EMGoJbjNbwPsCxdmBS3kqKM2vZp2eWDvhhVcRWPaXhPNSu",
  "key3": "JJnJgotZmNouhmJSZBe1qEUwm2hVHQGCCHxD8ikh4qWBQoQT3hyFuEikAVJDqF41LSSTwyATDQ4sdwvUSiyq4xv",
  "key4": "gMGeWYfK8iQkDAGo1bbkQSCYQnmTSHk4sEo3jBfuG8dhiu7b6Xax9J5zb1oFxLRAFhgkbbvzTbNNXXFTcbyEruF",
  "key5": "4F1EQXvqskTSp7a2pi7NtPqE61DnUoYsgEpC5DMn12ZZZmWmJrhSrUx7aScpryoaLgiyrSmiwfM9FCmRHEuMhcMZ",
  "key6": "55W5ji3pTN16QYZzSgtHBLeWNGNgrRhTdcrzP1ZL4joDsMmHGz4S29mNdYqGTMMtaVgSMa2WaQBY4hfMxE4z1MJH",
  "key7": "AUiW28CBVmfxoPdqMH98RKEKdPuzy1dYCQqP3ZtvKq1Ukj58UwGwbbiKLPToTJxeF2ZLRsuF9ptY8DkKZUv6Hqw",
  "key8": "5AtkCg2pLrf13AgvSG6hzyBTTomXWr4BRRwi9sRakmQ8qoVzygC23W9kxCsozyG4KdgQCX6uS6zRPA3NmevLcYoU",
  "key9": "4fzqkYyvfV8pgNfYcqCMBcuUVho2bUEwsuu4E1p1VgwdKQ53ocPD8RXsaowq2mM9WFz3Gz1CeB74bRSPa7N6uve5",
  "key10": "49wiidP2ApV59sbyxjbg7pRCyiJbttM6MVfV8KRwTehNZ8ZTiSDKseu2Jp9okQjykSNhnaEDGfZbxLV49BPKwi72",
  "key11": "62FKGu9Yq5pXUgfDUgwk6baKC1GZpm2ynKeuwFiifgHW3wh2WU9uUGmSv6o3Fe2URhUnNbitz4XxSSq3GxWiKMXe",
  "key12": "4QQg96VLvYBdHRH1fqnGtttLqq3oR3WXp2S78iFT8RvCki9DVBrQFmJFVVKk4apzQCsh1cPmoTkQ6ugP4nqRp2DB",
  "key13": "3Bddgdh9DjdhQc5SpoL8z4DDLMGfR3suFpV4VLEsm4xXVVMJfYMGVbont8JxNYrNf2ggzWJNCdCAY8ppNoTd3sG5",
  "key14": "4GHq4jnsJWa8EPgFvZHY4PErC9iUQbZfnakEXSefEymGic4Z4TvWFXs5hW1ACJfnCHGEVtRfe3PcnUfJ6F27M9e9",
  "key15": "NnG9iF7i7UgkYNeRPxDLWEC5bWfekZ7irFQ5NrWd8QGRS6vpP9UMkVr3tYDhbkdv9Ymyh2PhPLvNUsWCdApr4P4",
  "key16": "3seETrmrZaUPfX8EQHqbLzFqu82X5gzoq9AhmufuWGnoFrmg8KKXNKtHKNKiC7WFCuczPuZvJgWNx9iRxepW24a4",
  "key17": "4zXS95Vw5EpZhoLiCXwytdSfD42eeuWhud41xr5ZaQAUyXre9mMkvMcLyWuiy9EBtwLuva9CSoaVERA8jcseeypW",
  "key18": "39HbnEgN6bFyAAwxUCh546EBNZ9vsfgJbVr9yu4NNh8o7sj4LcUgDsJT94QHAaX49JFNXZxPTynjWNAKdsLGayxM",
  "key19": "2oCYcTryaDBWukh7jjZabXsVMQthJf4SF3kybWvPN7jKjDJ8rydExBsnk1N7PqeQNz3m7AtLSbCVJsvPCKJZG165",
  "key20": "4qGxa31Z4mZGeq3L6gt28PV2DPoTvvixxBGo4kkWZcqRpmttAbbcmNkLnwZgW1QsrE5nr8JYctiLD7VaQengF39e",
  "key21": "5wNketkpZuP2zWxYj4eV4RHgiUHyAra9A7uTCHYF8u3KfnYF8sCbucNGKgBDtBed6qFGiSYUjdgmMxKvXioGgjZE",
  "key22": "3iSGY5eDThS74bQZWZ8FSQNsaGRhZcqGi2hXy44ft1aowwC51rXtVJeaRrrFV5ypfT3ULTpTnQf3xJReQ1VTHMaN",
  "key23": "AUmodUh3gMfPXaVowEAqsuXgVu1b9i9NjoXsP1MUtivNwnyRSYV2Uca356Bc66qDcQkQSayvGpGTGrfaK7riWmG",
  "key24": "5ZbGWDhX7nb3LD6yrEcpLB61QUNbRYusoWkvkgx8vDEkmUHGNod5D2WYi8nTePyxSAqjXztCdLdGjB8ScuGMxEwn",
  "key25": "5C8BqS8VZkqZyHcsjDGqbxwjVpFyJLaU1yo8tqieeYT3fwYFrp3QhLCXgBTHm4kDfjt9bSM7Mduev3p3SUTqno4v",
  "key26": "TP7SRe6R25w83kVWGPAGUXgDnEB6V2D5CiKQicYjpjHRDcfK1kmTqQTXeuT4oLENSSfiGeGzUoW1L7Bp7pkWP6c",
  "key27": "4KMzXpZEpqPszReQHw4CUCu2rarwZkBAHMMQXuWtkn9jXZPgrCf6axNAfyXaswaqbRT7gnG4iuJsyW8QpRrodKWi",
  "key28": "5gqLqzADiMAGxH9igvkKod8gVpMDdY8Y3yzqdAMhbTLF5NbDF46ePWcsxgDYCq89kSkbmkyfx1VKoDL17Fp7NmqN",
  "key29": "ZvzGj4ya8yxQ4CkJTADJxE6iAf9XEjfQDhYeLYk7eew8vXquS3UcVFYncDkFGnxJMwUsiMYgJ28SMnh2a4LQzAR",
  "key30": "4j3EodASXbZ1pMnAWn5vFLqD8ZKeR4XibGzDhcNqrxmGt8M6XVDeZThPxcWh3ADakTNGoSGVsc3KRS38FUzLvK9H",
  "key31": "5qzSrx21qCHUjEeihZfFtJiS5ugcp7eqBe95ZRsEwZjASsQmmHVK3NSBbtX6iEYRUz8Y4Hb37mHkVoVTTRQKw74V",
  "key32": "2cyZBiL9iKU5sTgDg27PzoBXZQdUzRC2sSsA9vNFm4Vsd9AbZgGtt73Ka4VZTkRgqGntvW7F2B9MBHMWqJ24ZyfJ",
  "key33": "XmDGKeVYLZKGRHesjirFi38pzX829gYGCWVioXz1XGeCAuQyRyqR63Ly47ew7xbWaJbnysj2fhN64v78bsBAEhq",
  "key34": "3quXYBTdHqmAdT6E2GU8PpHA3b83jkrwwi1pAsHHSjQggBZoLU6wic6TuRwy4N4ap1qYkWRqcM83wBMykVNmeCuD",
  "key35": "ohqLaGKWvSwzL5pUxS7NatTtd5r5zgcQUnTuDKQoY72Hf4KLf8LDzdVpqDEDCP2S9zmHuR6sTUXePBbPBfgU6mg",
  "key36": "4RVZqr6rH2i39E6v1Fo8pbizrs4AcpAMEDpsWZw5gAPKzGgQRm5nB9AT5LQAu8xWWSW2h4PqxACRQEcsKdAAoqTR",
  "key37": "5PPEBUChzgUdwY18pXku2WqAPhfmaf4dLgxYhXZsLytokx2h2uxG5pcvW6Bxssn3BxNT2j6Togm5Y5uuHaj1SzN5",
  "key38": "39AUTaA2hVRqaDHPioos1BGBxpoyGXe7BoS2tqdAS1iy7XzTdb4Uchp4JrQbdwaRts3cTFnb3dDegqzxDetLjsue",
  "key39": "4sFeXx5kSoeEiKhpCA8XK9ChxYbEp4MHMt8Rs9bTp1SmyBUmyHRb11v1hhAS1k78wHxqjLaHevY95kYzfFk45zAJ"
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

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
    "43itHzYybiJa7LA7NMD9orJsxHF6zuXc1jmLwKa2CK2mGP962fgWDZrnbxP9PYkf1mT5UREdsxe4N4UmL8L5ohnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VDKZGWSopA1VWX7XKHd1hitimuKFD2XydWdqD9mjHNTed5Gk7nHmuja39orwbezzWrg4tjx7vbkMGuLf6fL2WiY",
  "key1": "4TZW1irz6hERuKbnZBqwWL2HHKWn9bXTy34EyYNf7gt1f7AD4JxaYFkZXBdaLEo4U383nDG6EpGs6ooQCtqZUruV",
  "key2": "55EpGNPfwcEL6hY4KoYFJLvyMnm8USqKouBUTEWQ3LZnfeaHsJCj5ZMzG5f7XN61jLTa5stHT45GMvJkemUA6tM6",
  "key3": "2pFcwVL23Dsb6TVjB9Z77bs54tc51L3heGQxqFyk1rEe8d1f8DJZ3FRDhZcRKNoW5goxqe9i4oCiYR7PoHh9L8Qu",
  "key4": "3JbZN3p7yr6V2pe35NhJYiEf4AmnqXiriiCyyHA84gvtpsJNrLp4HsM2wqkyGqJQgLEvabioX9jPzUJUX9sgg36k",
  "key5": "2FwytnZMSFbR1UUgokc2ak8WYoDvdtLaDBNfESg3EDysw2LGKakNbqVP7LfV1G7ofG8fWXSozKzmmVns4rVQxXxb",
  "key6": "46NuJyqFKfeSyCHgZxqU9uMKeX5hEQqGkTveFCWnGUDvvBoLEx2KRdc7WJZGQitJHZ4GWwpGGP1SWWsRoCkPihhi",
  "key7": "5ENEgsbhVCs3E2TwrEDMXXWHzY41JAKSavNFpuXtQ6bcJYQHr9PsHJyaZq9a5aZBd845crKSpqz6KRRhmdxCo79t",
  "key8": "56kqqZnguhcDnW2KnqnJLuCctxzBdyK57NoHNCnryofEP9WvuBwfGdbcVteasuv6TBABQH3K3R7iwkU23BpMWvNV",
  "key9": "2Suq16JToTQfCLHZVMRs4mnKHioL3VR5wAuAo1VV4z8b2easkg94dyj39ZaxKJTpEV8zabfy9nhFD1c1nHRS6QoJ",
  "key10": "5rFoEjnahCEbtmiLteJu86bcgpx51s2zCqdqhPA3cJaU3WGuBAD5qTxRyUKTdrU4pTMRLRvAU4hwXQ2ckK3tNKM1",
  "key11": "5PZDRjsL3Z58ufUH1Ux2XFir3pyTGVgRpWMekoyATE7CsnTKVhnn63EAWcLNZJ3uRFPZFt871yBh56iNwbkJnvq4",
  "key12": "2onJDT2eLGV46SLmZK5dCwnwPcCpXWG9kZZcDgThapgWGfymJ4qdDkETeDrJ4Veq8kfXJHN5274DYE2AN3kNfrT1",
  "key13": "2fzncL9qhuvKBBp31z5b5uXqtaP1DiS5BHDkJwxWRbY8JoxgWt4AcEcQqgaKhxYjoNN8Y1zJXkmv6t6RmVpyWjeo",
  "key14": "3TrunzTsUKPqVxRtKHZo9c2CoSkwBBmeuAMCifzvHgW4uiCxqE2rPSbVV2UB3qEeJNw94531xHNoJ7VrNpgm8cw4",
  "key15": "4doeyf5n5gZM4hMCPq7gZggBAnhBRCyXP1YTv9pjkvxzrFQcnEoTBsd1KCb4C7wj7oUSs2G557U7bdTsZR18Ma1z",
  "key16": "5onzAdeDGJLLkLK1gXcDxjzZjqcEsmygfphriwkHhDcnryU5oGbRsMguSinQWfNkDH3czhVNimpAJ2uN7zRKZ236",
  "key17": "5q2zxHdKLhGQqLxAtAmHaNi7E47JiPvqftA8KjsKDvd5iMdiDFAGNAtvGQ1gQj6ckkYM6s4Fxziax7UEPr7VDe1D",
  "key18": "5f1pepaywnbJVdAobxTy7j7mRz9aBpcXRgBoXQX6uZGipzTupvsQZaGtiMaGyTuRK5smqgkbzMVZdRSRaimJGf6z",
  "key19": "2i9JTmf4VNjkbLNc53M12sixhRWufmtwjv5ooYKEtX78rC5H3GH8rmANN4ikZQ3S8CihJj5PoxLaXzFGdXjvTr1H",
  "key20": "5VBmuihFEvgvm6SZgrW1pTWkBN1sa4pfHxS8UnRMRhR8SZgNj6Pr5whGDHyLCtPoM2BnpQTKrwHWA75J3TrF4pxo",
  "key21": "5L32S7uaJFQpGHSmMMsqZYBJLdXECWj2N14m5mSgivBVyKDcHYvWqnbdfsW2ksojpWcEfCkNcJkQKcB7Cve5E6T7",
  "key22": "4tejocLfDTNCYE5YX1RsBxnGXEogojDFqVKqUDATmtdTMJDoFQoNZ2xwtpjH8oNu5BWMVQuuyVvBwGiLTcgR9xSo",
  "key23": "3Hf2rTbyLFpQUERTJsWCyPi4L5r7qmzJHif5N2VJpBPd5CeCFSgU8zzbjrm2ZorrReSz8Nz4rR7Sd5W5veSahK21",
  "key24": "5cHTfzTj6SLWZ4UYMrmimbmzMfSvPAjHRHrLYnRn7ovqidguevvjweAsdDVA2H5wLJxFAAbApPy9oooaAtjFVrTA",
  "key25": "2qCP8BFfgDQFwbCJphZi27Pm9kMYsgDjQuoNZa5xYk3YbcSt9iwhWmrF6kYC3FWJRMHBoDASL8c4XKMLwAt2KUQu",
  "key26": "2DnXgwkho7c8Vetua1Fts77tQMaocNFpd8nv4yLmzC6nQaCquyksLaWwF5KNU9mWb2aazubqubK3DqDe9sqgkT3W",
  "key27": "5kY5hfQUbgyctcY2T9fAJLSSvX1o7VTX9YD5GhmEBormdVfRWgnbhFVB5pVqv23rrckdg6HphEtF8yBx4Facwz6x",
  "key28": "NpzWB1zcxARBkFQRTTPB3kLW4ZSKNRhtphNvkameyoJxbxSX1ignDRVUXk5yzZnwqM1xTLkSaVVKt38xiqxMtBU",
  "key29": "5hUYyqbDawQwqcu7vcNsgsCZAENst6kNrugCaEadrht1JdPjqjdFeAKA9gXh2C97bLQWqm7Air5tjmqAAnbiVWjC",
  "key30": "4yqLp6X3zi5GZd7ZRNMrVne8CwZ6jfft441EmDioieL6aV1zPnyW6JkCcFSr2Mv5xVnbUrzFspScBUE9yognKpZN",
  "key31": "27v1C3GwqffgnD6EhYR5W3Ea7vB2ZrCmtRoyFv7v17bVRQJ8aM6tyB2wFqzKfYtM8NT3zw85mdGh6aw4vBnKdyGC",
  "key32": "3CsyYUzSGWcHhBGFDApDuRHa6VSqc1SmJxUYuRUMWD1A85NZY9KPDb4V8LpiiMMPXHrfcns3BRzr4KwxwYzkCdDk",
  "key33": "5M2u4KP65UrVSWM1GQAgcLu2CunGNPjxJAeKDNqJkKftHjS757NMRsu41mDGy3YDCzAxTmHfHNweXNiogqnNzwjA",
  "key34": "4tg1PsRbueEudmMiBuib47H6XQLnv99yZnhCVCDyjDLfXoqJzbuGoyBcBFziA1GHvxt55iThiNMvEb7nkd1oBuvd",
  "key35": "42ZY6H3EGaACQwTxvdZe2mQUJsERLqdU655BRwM3cSsjvaYidu7ZwtqyQdhGpM1o2n1U4yx41AL3tQWA53AWsDUu",
  "key36": "YKpjQBdD1ZncJ4hSxRzznAh6KDxSvf6yTA9WPUzaETfM5sc7yuBfn9EYtR7UaV7ZswtoExRqNAZXbN49LTAzS7w",
  "key37": "3aVWypax3oTzpGPtq5occ8DbkeqDJyRQA78ojuD2SoQ9AcSNJRvDKnNQt5wGomhTHRyL8xhChm9Ebe7JDYcX5Jix",
  "key38": "5AaeLmu8YX3C9dMPSZMXiCNY364uLzX3fdFYSj4Trbp52yBiE1LEyjJHJ5sKMSLMmQ1WK6VYGcRHGeAi9ECkPfwz",
  "key39": "3rEH7a3gJVFRGA5dKEWG6kPbydp81npsF8XNqJmodNsSdh33xPiaU6Cyk1pwUiSnHkWMQqJT33ixAET5Grf9nhH",
  "key40": "2WTTgS6Pxzo8vLhun5WCssTnQWH3rTv5k8TCrHUdy7K5EVM8DQT5MRLWNMVrk7ihJFoR6bTXxsiXi2RvdCcA1jAB",
  "key41": "21atiicRYdxfh7PxEq5vKpQDr8nfv56JkDYZ4KJs3wgLyVjmGFx1YusuU8cudM7CNK7RdM8Uuub3xTvPvnZyHLfS",
  "key42": "45QcLH4MPxqB77oR59TBbm2PyrViFi3oLqK8A3GyN9394r8eMAAYX9kuaoBpCmdELyPvWXX6G81jXGNHxTYWRxnY",
  "key43": "3Nz4jSSx4VL8DCCoAZ5Bq2fx84FMA1osDeGmKTiec8ahxk2Rc353UHNYfhZj92QzLFwGfLjwzULYqGaDxGkdWYvL",
  "key44": "61vJ4j7vWthaRf1xx2jy8tz2VAqsCnW85P656qmsDLM3UJTCTC7KYRpMdUHvgffBHADVU1v5bhyLsFV6od6wabS8",
  "key45": "3tcPWMBsXEitGUXdHhVhuYTWwmRAehtu7SwCaPNCjFjY7UiYVKveQrgdYvmMUzgWi5dTfvfMcKgmbgSspbbwKTp",
  "key46": "3r6Y31cW3mB5uLJsMuQ3Dt6Zt1LTHN6cDSVWrcwm11jCSkb9GsPdSxG6oDbDzXjqxfAR11S6Fi2RV2xv9jKdQA9c",
  "key47": "49HpYY8Wzo8UNctG1c6ii9frzaLmpYAoy8MLYPuwEzYRe2n3WBHbTA37mXcqrW2J5x9ujbzSbGVZqswRMHmFgbmg",
  "key48": "37auG6cdjnEeV4iGQ8M8WRVLGsShQECDsSqnUiqpykBxR5sThqTkQ4nv8epvt78qkZEhgARv9NMRntn493exMBqd",
  "key49": "5cG8TCpXHHcKjBonTWJf8P6D2ZpoB2iMxknzC3Qory2qMhsjn8CLDhvAe1mp5McieGHakYdSFY3tefhkxHDKaQkL"
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

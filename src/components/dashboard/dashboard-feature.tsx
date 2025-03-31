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
    "2u2j3Ghmv7GPrnnG4oQFAyxSfT44Y18WuXX1pV1A9sj4X7f9NEZc7zZwRHHjdgtsJ9GmwNd38LqC4785pGPJGXYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QohVyQBZQk4RLxp1wKYSi1otCEpdsak9NugTmDAWJS86EdZdffcm3VwkNJomRvUKoHQCEeSRMcSci9sy8tAJgHY",
  "key1": "61qDZEwf4TneAm3TTvFVvAWEDvhGxYk6AfySKu5Cs5VZ86qYyh799TyC1mJbrofLNcBqbtabwHPiQzNTxXX7EHLF",
  "key2": "3UFP4maNkW7FSMnhDMNF15HFXv3FXe7RWkJpuomZm28v8BtUWFSfr2eApqVpfaZw46yYjKCSLxcMinN99dFQ5et5",
  "key3": "3z47tSftUSY33347LgbBDrax1rnQePt4qriS4Jw7higwNvWkH9JvNyPCGWx7aifeZ5aigGj3GDsxhdzhifrtoA1P",
  "key4": "3rx5hhDLqMmGuVtP2h2MipkrbYSFkoQYFF1DAswFecmEP28cK5QUKGMRuTgDTkNbAyYJqqhjb4UHqfkQosGDS7xx",
  "key5": "5xEuEE6Mk1vsmY85NJd19R5Dkvk8LwKpqNTTPyxQCvETQT3agTcuoeQ2bR159ybs8R4cDFZNFQ1LzWZNhUETyC7F",
  "key6": "4EcAKoGjRShXFVy98mdPpgsgoRv6pQzvxJJhPFbWDUAqZh5VxsRQm8BFANtfgeKfQnHejZA7KJzWzJYfFzp8Bwsx",
  "key7": "2mw1XYvkZbdPiZUgWaCWhYdoyQjrALsWuD6BGdBDhKfLcAxX6DDkkvQcGTjeVsgTLtyg2ZDPtprjsCVoLnTs9EgM",
  "key8": "38Q8suMpoveVFMvCJtEAA2d6YGnNfoGNriuFgNcVUcjH6UNtzAEehjGuFugm9KoWd5bucj4cDifbZzhccvxWvJqB",
  "key9": "MNhimJwik9xrjCCXDYCNo3f6ztjsFipd3nCsNNBHgiMyn1c3bHPSdj2Z1v1FLDMJcqEqYEukMeoQC2iWWqkoEUR",
  "key10": "44dmeyhRyGUu7wWnLNPACzk9gLPbCVYbDFdahAq9roCDfg1fNKhHhvRUvNfUupzQwMszM6BgVhQdK2z6WgAJZRq6",
  "key11": "2HnrHg5bWBs4SmL1R4GBYoE2dzG7KDV82ERmkY7w64SypVKKYbwY9V2RNAvXrhf6HfkkLkwX4wbs6EZ3c37MxWU6",
  "key12": "39UsQF2Z8A7YkJHi3dB673Vz72hKKejc1VDWjSLbumecixdyQ6ZFXZqefJZwhBhu1rdF4WMDkq6v8bz3mXARPovP",
  "key13": "q2rKChJWppVXTGpSHdiavYMN1veEAXHbeErf1bHw5HUzDaKAGoQ5baUyUagKowGUoiYsoYesgGNcRbCJQshWSgg",
  "key14": "3FtxDNf1JMmamoxXkoK2CDnpXUSSfXq7fhYKvxENP3SaEf1DHJJoEv3xmMy1Q6KGnXBx67aV4XFoCfqLZiZsHCmL",
  "key15": "3qaC5pH6de174oHiKgE56E8KnthzzmJnhSBKx7VVKqyiURz591KKVZB1PQ6HUrFKoRjgMR6w3A4XpNDxoRgXwMch",
  "key16": "TyG6U6PNbwwVJs2DcgCqQoKtSte4EP3D7ZgQ3D8oLPkK33x2U2QVULEoE9ivnuaa8m8Tv9ckP25CDEZh1Y4vZ2C",
  "key17": "5RFQoY9UHCDniJSShUiNtouDprWiamF2pYeD9CMymBTm4C1M7qXMvVcES4A4pCMKNXcJVyLWKPG6bmt9SmnKHYjc",
  "key18": "i3uqJaX42KNH5oKEdQwvdDwe8EtroyE9RvhUYhJ7EdFqTmyoN4PGksTisCRauB54NbnAnQxETMM8RS4bzpdD14W",
  "key19": "5v1YvvcgHMM2RdG2iqarpg2GyutRU1HCVC7cn5x57NaZZv4s5o4k979Yvvi4VAoaHsvpSuYUNHzyVppfvckEeTrp",
  "key20": "2JNvumEtFWrVmAynULEkK9yq2whEQfuc9fwH4BbYkgJDWg4mAfMn77TCzaJ97YaN9pu2RwD3oCKhVaDYcYTAd1V1",
  "key21": "3PZbTgECvt9KJ99Gex9nJuYunkHpq8WkFErgUQKHudQZMaGaHcuuMrw1Ss35fmgyNhNxRTvwpqu7g2cdrxj5ErgV",
  "key22": "2VCiaqJwBpoDLvCZoHnQGqjqiU14LcVrU3D1ySSi6ba2JzJwdYUdnru5MgFCaaVaHvWp146XyKWzhRtQjqBuyXRS",
  "key23": "DpC28X84dj8dvfKrrviStkRHsEXRLpC63j638BbUcbahKSMGiRAh2tgL3HFcLvVX7g5zR7AoJifgpcvA8nTYbnv",
  "key24": "5zeK86Ucae6D9nYC9FriB6y5iFrCWQT5yAhZYfncjNy3SXsDmqVFyHEUYTJKHGwRLtYcB1L22eiCxT3RTmowWwHN",
  "key25": "5h8aicZTHYmrJGNXA7j6dzj5oZfYJnzYVaFtjkvTHGwyiBhwBcioxJG2rSsTsh29XxTSWLZSpSRPMFLyZcWfBqeT",
  "key26": "28YhXEUNJ6HRnB5tdiKKvu82ApebuV1MNJe8Nmd6VdqYnSGcMfL5S1YyJoVUFo59veLeStqFqsr1NiFBV9Dd7qA4",
  "key27": "4GjvE8DAqhoLWSef2HxqgYTjqyeJv3cWszgn6ZUXE9Je32e1QHL87jJWLNUsc3gjhU1KTohRjEU83Re9j4EKB9Nu",
  "key28": "4abWDrhJLxrS3K7qNWedSa4gF2RotsWTRbbBkDJVhjoboLfUG2H6uKPs4rBkT22sVqYAh4KE6YPiopYWj2pxEsve",
  "key29": "5cRkycLvxWVZjf5gcRexFfDB33mgZSUrsHJ5zW5oCTvqtTCGgcovF9UPSmjThyEP7DisSFuJvhadx3e5yxzvV8gC",
  "key30": "3gySyK6aMCgBDqYjugTnuerkEKzsaArrRYu13TbHzkQoohVpYuYvJQ2jKbX6uZhE5HhgAXSk2yZF5XBob45mSkqY",
  "key31": "3Cod7ARxY8VYBZaUXf9pAVPsUpy62pvEfKxUYBJoyUNeYVs5ms4abZFWdLn9XG2xMVndbGkVooo5WXJcwivFzKj6",
  "key32": "3BB43bCuNBkGw9HQakJtkTLAafz99wUv2qs5xAzRpoL2UU6NcNLmEhTntvnZZ3bbj6RvhUjcjkCx2snQDwWSNCEQ",
  "key33": "62GTmFs6b6X6YZzJ3pzw16ygKpbmrxu875GpWtptg4P69YaPBiqDhy5TGHFUCpA4pbP2hjgM31QR8uB2ngDFe51E",
  "key34": "mUmmUuwwBNovoLMJc7xqAcn888pyF9Fvza68Xo5aSrR6pAcA7rRiFFJRAZ1tDTe7FDZxetXyt7NMaFRNwfUfNeW",
  "key35": "TsWYbnEjWHNfVsMMb8xfkqTNUCwcD7bMv7EPpZ4Xk2tdEwpb7DDLiEEZRYtFRH1FzrGGJj8qhrKHLhZEkB1dRPQ",
  "key36": "4CQNmhaiqKnJpzJyCYjk5SvgEX9dpEEqmb4hqgb7bLQvWK6DXzez7qa4e5YUwFgVxaeKjeLkkxFoizZTvL4LK89c",
  "key37": "24Jj1HuDxJwTn1yfZ8G8tqq1ZiB98d4GRHoNEpKVc8zeyV1mzCjkcNuFMG5s3ESJv7LrhZzNvKtHjRMryXQ1Suva"
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

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
    "9SeHbxc2L1DT8XCAsvUEi7z4N8fP29FKKoMDxExrkcdSprSnQ4k5dVuynFqn2KHcMV4CFVAdsxG2Jcq2MZ36yKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wEFY8scTzRAPaf8huB4nyYbJxe4o6jNfM7adLa25tiJPmPkUFqbiZqzuFbDmNBrZFmDjhVDpAewadDWfMb2ruuV",
  "key1": "2qAfwjxBPxPfuVK8EMh2TxSFr9vgmuVLxMxzJAKLdqBUWrmZby24WosdJfAZbHVfQwUg8AqDAnvTrwzdGmmPkE6h",
  "key2": "4E1uV55SpuPaNseWCd7GhCtDp9qEvDrYXPknaDgwS2pBHLcsagH9wASQqN6n7JHf3KYRVSWr9pbNbYWWdC7Cd7gx",
  "key3": "43V3Vmz7NDn7rgSGQFsb3UJcxn7DLxgGkBVWHb2bvYX4zSnFdxdBSpyXXwYguyTxh6JXmemPECQMTJTmBUa4Q2iT",
  "key4": "5mcRwRu6GezUFrk6okYEEatZSKSbvVyTyyZ3JED1kkshEgAFdiUGQX4o1uWWg2meD5KbddYC9y4c7iGfr4VcJiVj",
  "key5": "Roo7xocv5dc8dpjLiR6DLVS7EsjtUTAtzt8h57iJWzyvYYRaGKMR5jWMVcR9y3rVjvjN1LrxVStsY3Pq3bndcD2",
  "key6": "Jf1qGasYDtJQdN1xiuGfYE5XveMeCaoAJa4pDYrKkHzWSPwT8fBzRj8S6L5se3enC1UUregHWkZtJ16A1C64BXz",
  "key7": "2jw5wqFvpUmFg14XAarN7XTXNgBoQW7UEcxkmRb8WEDWoiGWxFKfcCTbU46yXcWJjXo9cBSjMG695qkT5JTjRcdN",
  "key8": "4314U19rSu5CQWFqWF6BaAYZe8UvVqQgZMuzdkXg87PQf6jnq4stbATnBdLJ27FwAmAFgUpNn2RHBLTya92aZy1S",
  "key9": "tvibpPXYPpvWNkEDyUHLaShWeGpbz59tchymPcGUERS1NGpkiKvdDKezHzKnDRfAnnKj2EdEC3DmQJ1sA6zb2KW",
  "key10": "4FvKfKfdwabvmcXS3SiqBf3tJucZCeL1P4LUxitmghDmbZmFAj3wao9fyinCYfuwHBsE2bDACGSz4ntZHv9Q5NrC",
  "key11": "4pMKHisCZFJvFNxN2uM1HN5u1wfwXPUGHHaieTs94tnrqKuMVfCce2huuBGxfuRq25kw5umJv7vo6oKzd1Mk3mMe",
  "key12": "5zh3eBR8xuKGTPbgpwKwWPFcy4wWTCsKuY65WWecur2qpNqXvt6Qh5x6AosjXZXFoC7We6XQnwTfyvjuRe1oQKYE",
  "key13": "4XDV5Mbwe9iMCFpJBGqAedpekAjHjextLX1QpiXhuY8FgZ6w1dQG9nRxGASeZ93UHTGmF2LzmWpmkVr7GQkLVsf5",
  "key14": "61MBpedt7Uk1Zuehq1mjKTn3162iWqm4ww3eGxb82CPBYf1Zgu9wJ6unGeC67eJjkCnr6zvRmCNGLNr7K8HbNFt7",
  "key15": "4AszxbExqPX4He8PF5cGkgxBrkjrMykPwXoUnL5jGEtJsGw3SWRKUnkfpFKhEK8xYUa6KehmeGQjr5nYsvtKdSQV",
  "key16": "26EBd9NFkXnncKZSGWTkPWyUdYgV8dJ4DWJqRmX3BwAz2NZ7Pak9bD5a1h4YXF2MFnN72P2kNLAenz5aRZS7TZyn",
  "key17": "gnttq9KbUa8cuVpJF9eYKb7JtkgKv2s77F1zGfdLwoLF6RRrNKcaViCaGRNiAvMGnV1GmdsyLPfTMVmu6tkNwZE",
  "key18": "o4874m4sHdMj5Yqr6afRVNqAdxCxd5eaEeefVD28Gcrvx23CN9F3MSyKYZZUHehG2KQBhq5NFxYa8DdTuUirxN3",
  "key19": "5qqPYXM8o1Qk21GKHB5uXhWsXhKFYMy7CAeJRLuk8v9FS6fxFSdCa35okeyGrxwk2tfiFaKLAKaBUfuHzBux4Eka",
  "key20": "w2TeBNQCSixctysyfpRJdDCLvuDf4SeXevvU3wfmtC7NguieFSUTGXysnzQaTyzURcok9NBSf5MMgnqu17wsLos",
  "key21": "35yzeFFiWEH3RqGaU6KVBcXe4P2amfAZYxmHRSYyKYH6hndwqv5NXmbwuGXrLzmXdmT2AAiqibr1orwknciCRqvG",
  "key22": "2f9b4FYEvF7BECk6wfsXCtsYzkxamAYu6xSvqe2zUnUwuA5okyxJLMctVCuvguzvczNiKwcXJv86AYrLxh7vNjVb",
  "key23": "25xL7jBLe1y2ze1sgchLuWhAhgr71StaFJXQZpLnohCLZQ6vpidSP6C8dZz6fWDyZ6cqPqETwdh98fgHjpbER1Ku",
  "key24": "sck7b5GtWJXVs1DcmZdK9damBV624xwmk9FWR8cFNXViKyxdKGsBKJs5S2cGS93xx5PvRdxzKd7eHkqeAhD9Qr9",
  "key25": "3TLSPHahxvuQU9t98hQ5D2YfjW15Zh7uyyziewLgdpjc5x63Azhk8TNDVpk6kFSGHcMwTCP7B6rHDM3P3UgHHYGN",
  "key26": "2pJYeddNCe1rb6hf5kyhuCsMNYiuofPVXFzzNBdVKTU7jnsWJ5Te8VXfkTe815Z6JjsSU9BzpdHzxdyU5XkU9Y3y",
  "key27": "3d45Mp1pVhXZi9wuznzxzQQMPoCFV7NrDarZ9ycHkjPThto5EvDw8Gc3KvNPNV1ZW3MLQkEpsuGqPTghtRDMWE4a",
  "key28": "3ahM6WbcFkgLZbqkxfnNRfvTVgHkyAFxeG4Pa9a7pYsperw8NDuo18ueh5DgkQojW8YNn9iACKHac8q5LpHHfz9N",
  "key29": "2UA4opSNnbDtPRvvSG6rw9rLCG8QPwegyKV7ZwRRPBFaT5cWD286cUr5KGWEGpMAgABX2soRcDiy5763kUcsvrQi",
  "key30": "64A2UED1szrAYzPGzau62xvRJgxCNDpjL6pvYHzyWmMth7rbutan8YTRWcoVnXhgkBncuuKEqjmeVrL8DxbG2Fmv",
  "key31": "4hG1tNKFshDathpPGi5qzxXgAmg71MVxWH4TjvgdefLepnMCkyzPrqPcn3JPjHrzES1aro9PkryPPu4dLqxSvHHV",
  "key32": "3sk6pxBNTFhi4B2DwZCgvkUmyfxWVgEodTUSGv9ZTAuueZarnSZgM1gX38vu7nR2p3589PcSFUZiLLcbBBx5urth",
  "key33": "2wic1rBKXwYt3kptHUazk3qZysDhMVUFccCFU7FFqvN77JEpVYJo6ftZzH1xgV97jQxcg2KPmvz2d5gRgjs2iSBP",
  "key34": "3vkD38o95AJ5A1yCMFYhxdgxV7q65DASqreRVifSBVbL1kwNwcvo33cjL93m8AMMwcLcWP82ERSrrHFZUZ2XAvUb",
  "key35": "5tKAdezn86BcGwdvBcxH2Sn8mx7ba4mLnveuCRpPHikYSuPsmZF8iNQb7r1Wh65Tw4XrtiA7yLzvGzWTzqqZ78Vs",
  "key36": "5imvNFasLeLkfstCN9DKiakkf5YHzmn52b5F4S9RcDWE1sY1xAKYrGhExxqsocmttBvib1QKYAoMaGbrTKsVSFLJ",
  "key37": "2AZ4cWzFpkx56bq5NRdDL7EwBkjy6TrjDuq9ZNwPE5gbRKP9cZSLq2BnQWH15FKizUc4D6cpej6KPvoXJ6xbvkMD",
  "key38": "5NCcmnaaQfVZ6YNEokfFRpk4GCwQXxnV5iXfyL6RTVYaXbWbghCK6zQPM4qU2XSUmX7LirfXcSkyaNhhWxUtYpRK",
  "key39": "3DWSwCRFkLJGB9bNADTQHCFZnbe15Ja4xEYDmML9PZveYWw6Bd72DYDBVC1ttcnfK9ADZVJ1yKfDLV6VYEy1sGNi",
  "key40": "5WueQbyPACML7sTbCVA8L4aHEsGy5BBmcfzNqStbYzU6BBpqwrWDtNqWqWeedWm356mcHSEqrteavakkG69hWooq",
  "key41": "2E9U7iZWrkNBiQru2bVonTbqNvUR3iardktht78m8YKhJnfL1NWm3pPMjVeUWyNbkmhvVdtqgVAVE2svfzHuTTCX",
  "key42": "sFB2xWSTZiu6y1nRKRSqEeE2vuDPWzgY89u3L8pW1mtPDgAMVzcvoDkY8BZS6m1ABD7n63TBJWxRh5XH2TPLf72",
  "key43": "3fdeQnkQeMoT1t6XVNY1ug229d5CFwPzduNBDpD6T9qqSQXRJ92a19ywnC5SEeDUuPhMiJEkmuyVPzNsUwuCiFWV",
  "key44": "5rQAqUjdTeLCrkHiqN9tyinkrFdniTeKTPYGqqg43BdZzdE3Sui4yAhf5AtEc55Np2TBfpBhtK9EuDrSkE1roqUG",
  "key45": "HXWovJybE8Uw5x36bwebRVjB2FHdCHzFKirAurgNJWqPbm6sGuVPYVrXAmfQKjvZHxCVoqnM4hKPA3DXmynJ1Tt",
  "key46": "aqAij2a4hfdErR1LzKuodLUjTDtdGuRLrpak86vth8K6RTozqFseKwXVAZ9vhCWcJC89YyZ7H1rSNhyQARewTR5",
  "key47": "3rt45YFgYeYvVn6mfhRwruksYNVKgZg6sPdo2AZnmW3JwQjqcsCnxH2kjdi5ZoWYfC7z1g82rsKHxLigF6gWsnk5",
  "key48": "3gzxvxod4k8ZB6yM41AhMHTNyHmdCLkpC2oe797QXFLLJ533Zf7LdaiG8cDvPaekycVK7jE6DKsY1ZVM914GDw5X"
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

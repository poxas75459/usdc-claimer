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
    "5tiyW5fTqrdfkkcdRBehb1XfGcP4K4c8jg165UvmDsTog2S6qWksNJ53CMf58GMSz9mVTp8jwxoTJyE3J9kKzPnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oEHu8NuyL9C11b5qwNTLUxZrfPooXy16urR7cqLba26xPhBafCd8q8Lq9rvfwrZ88oMutmzWmxSHAR2ePGS54XM",
  "key1": "2DT1S6SbTZXAbXCAPWMqEfmsFy1qQP3Phgg1VzM5AvKyJ3r3imj3oRMPkdQA3ksDzuSBxMq7ahCEtnbiUH4FfNzb",
  "key2": "DxmRekdE2Xv8XUJ9wHVNZntrSfq79CYewBswt7dVnpGF6nhJwystA4eDX9sdfo1Ld5KnsNuEYpPUaWy9WcwcbfG",
  "key3": "5PREaSdQrRBdsdhbBJqkDZ5EKjdFWDr5yiRDXg74dnwdqXDGzkS6FThe4FVichSA5RGHov7TK2QxEbNXz1pFswUv",
  "key4": "4fzrUQBr8Mbe1i9CkbQtXhyfy1Q7mwTZGusu8g2LJ1fipvFE9QZKZNrNV6nGX11TgRcXA2xqYvJEMUfCZuewUoeM",
  "key5": "5XHouqtCRxhbVXzf5JeVs7aso3e4sB4SJgDgNcg5AeUV7iDpzovnwyZz9xsjEnhg6oHWU4aLGBj9FwCu65u1nHrD",
  "key6": "53Zq9Kau4jQsvokKaEBjZZqCcTfntGPKHDdzACz6QU7fkZmm1MjKni3Yiir3BLEfrmgh84k1sWvtXQvz2bqLjsac",
  "key7": "2YrPhA8PF38xSJ646NsC1782cRUdWWKqqjxM8FdcQ45XUa68CbRVNWNDmimZNzRdEnuKE2twffEeqTZcEU4KfiMp",
  "key8": "54oFwwvgSTN6iuYR2ekaS9uVq2XYUKMHTSmWftqoa11sXmrjKy9279W88EeU9uEtGBAJXVupcXaG6UKV3hmoowpp",
  "key9": "2ZT1UTUxvqd9APsF8Yarm7nwvQxB49vSz7V1ScYfcS3FfDHvHdJEfnpQTgsFehfJqb3F31rLA75zzkXXHnqhTTug",
  "key10": "34AYRESu624vy2WhQJRw7wXq4UqajyuwLk9L2rNAfU8p7Mmy97zDP7FtioLf1q76HcRBv3zT5kyNg3SNN5hEDM2E",
  "key11": "3bGWRMw9gXBxikzAVQSgjPUjuSHLyaBLQCCbmBc6NsJTZu9QYAjDEWcFD79mqfhCtABg8Q4YJaciJo4Bxx75jQJR",
  "key12": "4anfWNdAZzWVoDMCgcwGnPeAAwkPCv58PcuS8Vz2G61WiWfedV7CALw8wYvUCArXegh6sMc7VyozBBZ65mFifk71",
  "key13": "5FTkdW17KeJX3CovoqMmGEaafLMJr1YMyiLLVdmFjLpxf6fnm5Z9cfR1uwVDfRqRPCwJX6bM78BxK9ViC6wCveex",
  "key14": "2yK4hbcxPAXj6aJkPpZaPxXeeb6ibKYHSvM9BTrkku8ceenVYaJyAqq3eibdmzzFxguoYEHzCRBNkFkwJ89BMfGa",
  "key15": "4XBVCH5dGs2gEENztHarDjdRmff5Sait49jLB1NAHQfS2XtVXq8RbhDpp6CqcyNr7bfDFPV2cpgqiwamSbfGq4fF",
  "key16": "AgPTptZb9pNKPgqUHNK6r5qD36UZt9RrzmZkEYuvHVcmKT7cUd95a5sio3EfGVd3svL9aP6v2BSabdm8K3UBC9y",
  "key17": "3wwGrQtuJNMjxucpxB1eemaKuykZM1bQkRf3xwYVTWwA1shAyjTHcTBXts9sZu79axkhbpSGSWN5nb6JmRRVVHHf",
  "key18": "3KJkCcZN1Gv9tDocbDTADFXSr4QrXuw6ADYacyHy1Ew76JBZTdFD8owTHdFmufJ5XPZHyd9foUN6wUPug3pHWsod",
  "key19": "4aLoKL86QtDjVTwwb2xSWMVNw1ihhsc8uezKAHmfa32fyF6ySEb3NJgTL5Ap2wXmmj14jKhWJ53YuSRBb2zdjSPL",
  "key20": "5t72DS8iXfGavvrKKYqFDiLQBSNK3TEGs8Ufpih4fEuCsLmyLgwQVRbc9uJdWJdVuHG5f4CkspVAxxWqDhiGPAKK",
  "key21": "4Wht5F2T5z2Hio6ypWhFrLFeLeykGMw7KmQhSAdujELeF5PakeNowLX8PE8QtGg95koQ42eMETseNgSGq7orgbQY",
  "key22": "8xSEkdH8AeCXq8fwTH3doqjJfShx3FMHTz1wTtH7db3ciTzWWGPMjKwbmcig4XU7s3FtzX6VJahQAFoevsdH4aw",
  "key23": "4JNDaTW95yxYg2r2dvhQTXLYsQmTU953uYQpwfuwSRTDgFGpp19zMXaF3Qp2vdpzyN48wkNziEAgExBReDMCXeZw",
  "key24": "2MuLEgGTsEYPgkp71mo8qQdeBz93RCc8HNA7TxtYYJbp1FtjEFBBhXbkxuLG2ao9fyKG2PZuAQcpJVLR3fwdrBwQ",
  "key25": "Xo6b9GShCfTNJoeuBPvvXr5RSCzUvySWzAPaTtzbcRDXXQ4Xan4G2p8txFR14WrJ6rrGE8t9AS7SMPTE1EvRrj3",
  "key26": "8ypcgAK7W6isgW1cacZzaxfobN3Csz7YmKTAoQmbXJnKt9Xk1vy1BwNYFBwP796aUML8aMTX6Qu8y3LtAnNaxCg",
  "key27": "5XsqCUJDQZQHWHWtcUWfGxJ4vmBgEwYoKPHQfx5ufsR8TujgLgy1ZeTrdds1iAk31ogzSzi7FSKozs2YNZqb5QCB",
  "key28": "af6XrgivFjRhMz82PKdy6gJCWMndyunmryrBrz646tjEuWHy56JnYVm3K8va1M4YPqzdT8segbSw9z6VA4DwyLv",
  "key29": "3cU6KVAYaEBY1CGywCoEgfkZo7ye5p8jq83VtDR4zeNyrTatgG8ksu8oRkSsd9wxHz8L9axGgbuacMVXK54iGjPc",
  "key30": "3mtJwjuSc4nFDpfGwNfv48G9EwJeBu8M2ADqzcTQfNf8eb8bQRdMeQFKdj1RUhXJeEjZffjBMJBszK162hY84kQB",
  "key31": "24KXQkcYsKGRDFN3VNmpG7RRMp716ms6jgVnZ5uQGVbdHe6wAHDmN5gxAGKQbwmSxCCmhZpch16ocL7qymppunCt",
  "key32": "iF9pS6jzmb2JU5XrTorKm85mxVuTTEH1HVkpUArVGg62pmVTM63v19QyTTqo3iqdQfPMwBNbZ2UFm2sGbimjTVa",
  "key33": "4rcUmKb8L3LSXF2fqjrbDPJsHNwrE7hYqG9cQzjup4RbGVFMZCHs9HQXSiB67po7pmZH9N2Pr3fNzCD7nY2xquwS",
  "key34": "5ozrTHnCqkHcNJRvLsuXaJPaoiGWNZSqSynkAtSjVFUcLh3x3MTa1KQHbxnPy5if1Y7mhgQx6fzXVxePeGrPoDz3",
  "key35": "3FLWARCkszXYPV3WQtdpQBpRUghCvwcYzgY1dbukHExxZG6EKbX2J7gn2SRk5cHUUhBWMzKLDaFi4ooTHCQKeknA",
  "key36": "5iFHsd672C54bK2siHtNDvBTrrLraEsUssHit2kU9qhDCV4eLYTgdWhopVFE8rqe5dDTU7r6TiPWcg8CzfXnNEwP",
  "key37": "2D5jBVhLL1JiuydDRGdgpkgsDetgELzJ6dvTXNPXbsDju1X51pbsfwdSLYozkA1UKH1oioSS1iB24JEo1auasLSa",
  "key38": "63pET2qe5UzzgX1NHrE5nV7PeNFyLRP1gNGDgvrfq5QNdUPhhG4qWouQLUA6rMFDFxkRHaLvZ6wg47zNGYp1gJvs",
  "key39": "2jGE7NVWVkEL9r9gJpZdA5HnYs6zpYTmUbETA2qvsewKdNCAnxv9p18tQHXkZ8ntt75GRaYpg5EVhgst2xcmkSVE",
  "key40": "5sWGievbttThBVgKx9iEQdUHG8TQ6VKQqzUCzGKu9hLqu3sh1jQWpeWNkzvSrN3ezFbwG5dXpbZQiUsQpdAoeLJx",
  "key41": "65VMi24oisnYjwqRLgmegkxQzac6JjDeuxcn9xk5yjSZUoCHc2inGdnH7bPKkCzX4pWjkJ7N77Yb4d5t6AEJFQrm",
  "key42": "3J6VqokP4wkysq2xKmGgv6zuZquGoUwbBADkxWLDGjEpxQ9PuWdJTAUXsLEAfEg2fF9yxQ96x9ZnezxES4WBPaRx",
  "key43": "4FKccU133FiiE6JDStamycTB79Fmx6LjZkn3EdPwsLoA2gjgXeWPMphjyq2HCFTWrLjeK8wyxwiRbFr2pwkqcZrr",
  "key44": "2aX4biJWr3zMUaAwfkyQ2m91k1AKuKHR9aJLb6VLo4x1i2yDrFTa5gXXkEG11KVm2C5VxPWPTLjRXdBVbJSwYKM4",
  "key45": "NnYN6UWrizqagju3jw8jBPtkccMKJCMu7NkwzfhaCXz2qLBd9WCTej1GFocv9Lp6upug56qgCWzNnzZKcuYtfZj",
  "key46": "4NeP3nFnVCNN3vpq9b3EQw3kfC7JNPurpMv5g6AwjCbXUKU2mmGicb8T5vwVww7eJhgfWCYYomTUy54vWaq8ASt3",
  "key47": "2SS6KeGUQJJcMyciTRtvJRCNPzG7aDiYUZSgHnbcQFnmm29Dofm2maPo8XdTyHuC9xeYu4ZiRE7LEcHo2ARJagDd"
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

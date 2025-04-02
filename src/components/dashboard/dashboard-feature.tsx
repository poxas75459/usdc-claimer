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
    "4fFuRKU1FcpQmHh1NUhtTFVVgrAR48faxGiR4m71yjJLqFEdrAFZoKsgweLSWQfGqgU7vF5BHVk1t4FUMLQpBYab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Shh9bDtjDMbuJfsRApNkE5DFjjioAe2JKFLQjdGcRWddh7yCAg78iSribdMUYxiBkHXoqAr6jLjp4Wqw8nZ563K",
  "key1": "GBKS1mJC3atpcy1gVqUFDtAscoVqsYynVrKHiAqTdRmUnkC9i8FzjdkcHFPFKiQi4Ep8Ar4hMh6dbxwigd5SL4B",
  "key2": "3xbkeREF3UNuHxPCdpPzcMHAnYDUCbpmpjqzvycykso4ovPMEruVH8gpvpRTYpZ1Sgq4TJbFzGpJUpHhc2igAfPD",
  "key3": "5mfqEdM2UUeCoo7TrNEh484KetnVkivjzy1KiRsT1GXoujGPh7jJisRa4nRDnYU99YsF35p3QmBZ6d2sb2A1AXSE",
  "key4": "5Bg8dtNPBtcqmwZkN25aB7EzfPQZaAkvUPxz8jhrThGSHYs59XqvvFfEm5iGuora7WZasuPCwQJ7hp4QyDKsv3uF",
  "key5": "4iPgjaMnxwkjWw4WGSN4pS9fLohLrtDkidWLaurmNxDacUZPFceyL2rqkkFSm7xCHsUG1YJWszsqhuXWds43geQP",
  "key6": "5L7YT83ka3sDJbjxE65JiDG8mCjnAzgSrSLcMWSAzXE8bhvdbsZKB9WYyUCgJy4DM2vigRKanHoucAsd8tF3dLZK",
  "key7": "38dwSmBHnrxraEqMRBTs4MkEwxT9g1xQZEX3PusMHaUaomGfKABHRj8phxPbfTuv65SQhxYd4Z7ifz3Ferp1dXwG",
  "key8": "513o8pVQx2MzQtXMMEEQGYoK7QCEJD5WQQQLRkRsYqnXGWRFsky5nJ1XFiv4Y2urThFGJgDTxtidbNVMi53Kyrge",
  "key9": "3NxEGnXxkLfwbnUGSJSxfFANiqjvVJVefdDv2U1ChAMpDBC6YQXjvNbEvxnG6UkYw9jySVYVPfuLETybtDVgPmpV",
  "key10": "2yzKVzxZCDg5FGPi9z7pcKoVkfXCBUkEHbrmG4GLQi8LChsDM6mhFij37uPGP8r2EU5r25mswLPP1SzGFdAe3JjM",
  "key11": "2SJTGfSrWB7Wej18tnjcHW9XxZXkahh1aQAdBgeh3ZRMp6hWqVbytH1Bqm8rbf1rmFhuTiRRw5EiQfmSojLtrFgC",
  "key12": "4exG5CQRhvFSwnPTL3gyTxXKHjfCCiLz2wuQxacLLhHs7YKc8xkTHTMJtpRbpCRyHVNeyjMcx2eQMWyeU6j86vTs",
  "key13": "3jnd6zcyfWKtJahjLr8fCa2Di39LSjK1UpncvSCqWAKp1cHpnsTNoKHWo2aeVujaiYUgmDGYbcLntFejxbYx2PJf",
  "key14": "5RhgeKHS1m2rxP6U6g8bC3ji2HoAXwhkxar1UAyUMUT7ajnqm9HFrniJPn6aXTH1zzQNoBgYFbXfXGHTozw2vS6G",
  "key15": "294T5DnySwKCyttAJTd5ujms7mbWnrYmbJzB5GdvKBkYrjqjhpHp9eaPbvw5ehqhEZWL2t7XhWvhjK2sbQyVHc9m",
  "key16": "569tDhebcpQZCuvKpMeGMncnEqHv136sfJHEEpuRGZx4VvYfakc5ytAhuuDDHRw24pNwynuH6swHVX5MY5axDs8q",
  "key17": "2PWmpKPnLYTks32f4G6GhQxoezsTf3hjXU19qpZTEN6Pi8zvHtyQxw9awJEmokwD6EdhvmepRTtbRUkCrdv1AnRg",
  "key18": "2sCPt1nCuHGcLK3rxwVSPgVPrqQ3dwGWESVCwkebELASB5wrFd34y4vCqkMUsyEdajxwaVFbmpHykV8NcCUvvaA",
  "key19": "4utqYbrRvj7UondX2N2DFDtAmqxfWgCcKgXTR828StCUG7YHHNZNcr41FKmSL51f6zX78vW63sFdyz5xyb9yjTL1",
  "key20": "3jWpGBmYR9D5CsB2zLnUiSbNLJqW7wpTYAEuz4TquZvz6GU4zuEgGfQTZ4CQQGGGUHasJ5GcZpmpETTsHuAS5nxK",
  "key21": "TohWnFFqavsH4rWVY5uChxUwRe2khWCNmZQv3FRNQemxQte3u5GdyD1WGMK3jg14YcGxcyeHtsjKweuKgb78qSz",
  "key22": "pvCzHaew2zMFWZYKYru4Qp71RmPSfyQUFGraotdo8TBDkiJ3ni9A22tYq8wDTn1bYhUZTXVrz5Y4yo19g6oPmt9",
  "key23": "5DLBjSeunGNqU3DDoDuKAHcz81mb2iq7SsqrNXZGxt4MesXaz6KNKZE3oyRMq1Uxxb7rA244RyibvPmpbh3S7n4j",
  "key24": "3eBAG8TBYxByLGLHFtJpsVMfMSnVarPhCVSRkeSc9Cqd18cqJg1N6KZ1MjZAfkyVneLHCRj5cyGiMrWoWEqq5dnt",
  "key25": "48WVARiXJMXy4fDA3mEoL4bxktFabpsF75ahucebiD9MM2eeSonxYnrF4R5ZZU5svUHnX49PGvWkD2cDKHkTEfcN",
  "key26": "42sGUKxuSHnkx7Mu6fzdsiizkgfuULxfSFcVDyw6Qs8nfQ1ea8QKMrSqU35bhy5AWgVpJzA9L5UfvAYvo619xREi",
  "key27": "4ujQvkL9oFPqLRVu4HMsFYMufBATxC32nuquVAqNmPHrRV8aTTNNYMR6fSjLhLjYpvCb1dDLrNM2YBUuCHkjm5B6",
  "key28": "VWzEG2xWEtDaXaQN8oUiZdwoQvsyFqUohNUazbWE1H2abCG46XYtaEYoSbBVzPCuvujT6XugXdbadffTBihnz1U",
  "key29": "5SduSYVTTLHS2C5fgfeUAhJDnym5N7TozqkK6WWktX9wPLQPC4avsCbGtEPrMBrnmTFfMqDUCeKjoCCn5YU9E5RV",
  "key30": "5JNdkBTaaS3kzR9AmnwL1E8rMVHYeq6Bh1hpQqc3wiwSefNTVfjNGEqEwQqFruAwK8E1UtBmVyZzCjtAtmNdGQiy",
  "key31": "7TH2pNizsguPQdxonsdLrsLeVX8LfMMMXHqs1qqw9SkYaTVwT7pLPZ3Hb3FZX3haiLSRWyEWAe3a96wX1ESP3d8",
  "key32": "3wwUpeojRJvjGgm7BRVowxP6P4aMsBomfSnAT2iphaUK3cLFRdgv8mqwaVVh8i8RyMYrbKUpAywvHYQNEkskPPpg",
  "key33": "kXBkuDLRMpDBCbsWtVLC4WkXtqoqYVqn6Sce9ypH98u1rKuH1ehu3KM2UCWCYrgH9SszxWjFoMpBMsj5yySeFH6",
  "key34": "4dGGkrt3esSH4tYATbnyjfKqaF5ugVanuHHc4PUQb3cbhvrbdgphLXqYF1pBfF4ag5vm3Qdr2cxrTdHtwcqMGMkq",
  "key35": "2HxruPwdMznh68AXj6TipHh7YFex3cE4n8b8qeAz498r5PyR5mxapTD7fLZJkx4RMkx8YvbdPKFUWYpMW7jrFpN4",
  "key36": "62cujMUGhFXV5tnaqWqwoFuzDdk31Wwu4v9znw85ZNo3vkjSXKWBcweKGPgbNpSNvFPpRB1ZTvqLshiyURdXXnFs",
  "key37": "R1NVp3TpY7SWSVr9oc9FhY3LkhRrAknREiv9okJeAAdbdLrQBQ2KVGQXugR4nDxWBSH3BPRj2dWNq29NDXzb7R5",
  "key38": "4ft78YJ4MTr8LGQkNaVbNBKTmrstnw4UyYdAfp6Roe8zxSZ8MCRVq2BGvVADhv8i8NWJDYepEbAdH27cw8HemWa5",
  "key39": "sfEC7nt5y2QSaZnkfDje4ThuyPU2omEj5GVfjfwqrzCctXB6yaMRVAjDhH3Rj8WcR5eMsnWaCUjmnyfuKxFbCTH",
  "key40": "4EMSzsm6is9uF9KBV24o4ZRLbgyR9dWAFnnz6LoRD9i3KDSDmkD8TwkagjRsayKWx8hyDUUdrnLo6y5KGUDTFii8",
  "key41": "2h5bL7zJykHdKaz3UVdNWScfctZiErHCAK7jo27W3qqQWxRTfDg4GFiL94RCJXgEPvN9vmgKSWqNtUUnFyerxSZn",
  "key42": "2XTw5dH8Q6iLJ8cDGTPQQDobXTZRkpMGsDoGi7MNGVgi5op5e1f2jmrXhUqfirp9Bxm4GeMpBjj2KrXTHfoDr6FX",
  "key43": "5DnQWvi8AZR6mVjFVQAnRsYvZ9wfD9i7hyMUBv9zjsWEwFgJajr5TJvRymBtD4a6mRbuzruNyC4f7G1SQ2rEBfZM",
  "key44": "Rhk8VVLTkMHRZiGqNgkK482D8UkUPDSuQRF7DZVKMoj3SDgR57ssojhjsssPEon5jtGtLe8mv543SdV3wp7ofXw",
  "key45": "5ETBAfMA8zM52br7msMkvLdH5q4RyQSU1KG8h2w8cnQWUhN71XwQYTxH4zXCvAybTJSVez3oNG7MUATjLUw21Ee7",
  "key46": "5LJjhtxH2xV7gMjNTmtrvWcUL2FuXvS6MWj5xqFRgautr8P1BLBPWoypZnSN4cyFCzFZkRPkwHjAJZx64ywviy2Z",
  "key47": "5o4Sx6M3YVCPBDoot8RzsuTP4WXehUDGGPvrWC1ecULmX1u2d5ek1uWEkKX4A3ANaKYdgJrH44CSCANRLbVpqRs",
  "key48": "5ZsScjmaZFujBkV2HumDQzdyyZYwfgqLTC3np83oeocCCYtvzG6oVqtoYyYsaWik1NU5qRYXHwPPZSqjZrmzt8jK"
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

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
    "4StrnHJYAdwH1P9eNa79f6UgkwhBWzPNwijMZgZ915E9hen7gy11GzMC5BBTR8cSZJWurUdXcd2Yt1euPAaFQTBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvssecrUYz59k3jVKZyY9KY7nWDXDKJa2cCHnCRUFpFncjQRXtKpknAwFH6mJ7fAX1NoCFajQ9GPCRRP8qpEtsC",
  "key1": "2PaPa6SATZSYF7pK65dt2DimWhrGBzYGr6Vzyg4CLmDvY5PmD3C5XurNWaAxbCR1hk1r9gmPoS9Q78WPWvJ6UqiA",
  "key2": "2xnjXRj8p7CHmry8Shwu18Z5WCap1rrqyfNvgU4Pf951iuLjSLFsvydwqADqoa1SM7GHF55qhwSdgtv2N5Xtb6et",
  "key3": "4z92AmFFbBLFMTucyWMHcmqaTcxBDSNW75yrAnDu9x2gVtGU96nB1d5y36z13Ec68Gom9TJKarhhJtsAfaS2sRW2",
  "key4": "buu4mYdn3GaiWgLF9aSzk6AzzbLB7qQnWKs1ctouQwKvG9m5QzCQdP7nWWescDULX3AWiDZw4BgJRPWRZZPFwUn",
  "key5": "623cSXrpopbDgoX7mrWfGTnSikek3KvPLjbrbpukfAw3fp8b1VfB4AF5R3FRzXdb1r4Pkr49hgPNbnLoxCQcTfGq",
  "key6": "2NcHxwWDEM9j6R9gkSYT57h5t2dgN2HZc6uBKznAzYHqAywpVkyBd27wDebJuYniCxEkrjwaLZCgjo8nQSpCukad",
  "key7": "5s22DTa3LM13f8Bg41n14wLF64PNGEXPmUNo6nQ491wEo3QcuZguo5rXEtNF4Jyhh4vJMqbh6XUqRCFDHGLTvVam",
  "key8": "2fdeDSZfZPu5mj8UtLpeBx7zXCNiHpjZCngi8H1fUFsarPoXfgqijTZ4dhwZhmbfmsPpHhM58tRWfEFKF9rLVS2k",
  "key9": "43bzwobtWNTaoCJGzS4ZBMbSunatAusKZFPfFvnXQQcGY9Fded7ixTxRU32SmLx7qhWcvPS1HdsCyF1H7JDMHxeL",
  "key10": "TKvUhr5C37iAHUcPaDPZRHJKJYHUTatH3yJTCt8VfQ8R2FTsMyMPEJzxTkgRRx8ziqEswjxrNYfhBqn1pfQgrCB",
  "key11": "2GfPe7uhRyKqEa3YUqX9c2GhqMeWUpqZjfDr8VqmTKnEQ9BwhiPLBjc14G7agjyXEnHcAMFsRLz6HoZ5PjaxNpSg",
  "key12": "3kuw6BbbitYSeuaWHL8ypT6yLH1h3zDyKMJQnjhZuhXcdhy5WNcLefDQB8pPx4zL4W36k53eNntzju4r5Wrt93Fo",
  "key13": "2kamaZc2iMJCvboEXdUKQ1Ld9ET4onQeJMfkRwaJTdh47ZkzQ6Hu2dvzdbPKR31i9jRo7UTTAbMSqhqP5DbaPswc",
  "key14": "WJxRUwRwTroiLzMsK7zw6sXbrP3LAzb9okZGfwJVR2mJacxXWFkx7gCiwniCpMBaD4xS7drNxg8f2WEGhfmt74p",
  "key15": "25hUsX3X6T2LmUcEVQKpTEimdeastuhDQGucBX1jJ7bbSTTAUsh93DAn6qjSi1EiS8gQS1V6jSpjGbXdPimXtv1o",
  "key16": "hQsUDe2KR9DFR2Kwv6MBrwKJqnAXuhBKDrvQz5u8qMNpUuAyfgkYcr2buCMvnkkKmbPnYigXZHEwbjCtRmsGXM4",
  "key17": "5uVr9PUAR2jZzGmb1bpsmbuUSyAa14LeuoyLz9qm6ojtw4yQ89xwUck2JdtCZ26b7CiptKKRfFELMqKPPdZo7m9D",
  "key18": "5jkbfTGrcVu4XjgfJrpAhXNsA8a99pU8KFwxzjnEQ64hGeHNDKpjYCq9A3mUuo4Zm2M9SaGDHbvkV7ovzKzZc4XK",
  "key19": "NdG5ENGVvkWZtVjW7vBU1LCUexDGDHSEbSWn7YcjfJhnmu32sqLgNpYjav6UEW9ZxBV6Zm6c9HBGDa6gmKS1BK7",
  "key20": "2qt3HtfynhHEZNfkYLeiWqKHkzD3FjFiFAnutspVBCNEKtVitXGdZhf2dwiEp7F8xafTp2WfPSW69j2M3Xp7eFe5",
  "key21": "2rcVi4eJDxb147iRFpJqy1Z74EYNBbp7PQf46fdMKdgsrBMcU8dR9G4mCNjvxJXcyVKagoxcnPe1t76ENbMHSWRz",
  "key22": "3i9WWuDY4WBMvD96EX61WKxxcoaqJEnqD3PNNcJ2WKEXuK2iHF82M6TbQ9rjkcgcQ1VgE51DafpfXP4z32DZk6cy",
  "key23": "5QnVajreeybGYeF8Uh4tgTgeg9tT1gm4fhTc2NMTTvKzh4Deqi9QCAzJYH3SLXJdj4PKrbSYmJLBuEWX2zoKRR6E",
  "key24": "5x1eDdQBvfrWT9oHuZdzndCsBoqo5zySY7HtFVFiZ9nq7jWftdRdmEfasNDq1CYmjTtpgHYMYSebwtMWZqjqyiRv",
  "key25": "H6LWcTMQXxUZ3bt7wF2fATqyki7iHaQcMGFQtkzzpQMHS176qkTNN6mtkrQhYRAboThM5XXNPXshPpKpNQviJL1",
  "key26": "3WUGu482cNpritxoJQFbjPZARsqB2vmcfAJRtxrYmNm8ggRXBGRnquWhtK8oNHXpbPMnLnqEc3Pmf4iFJLHFPNaD",
  "key27": "2PfNrpD87Q4BQoUaeCRoYThyZQkdCdKwzXmPZM7NN5StCwu5Th8i4g6E9i3r1tqLCimgvFTxdjD4N4LfaB5Jrw2j",
  "key28": "tE9ZQ5jktWHsfyPsnNgXojhemLYj4iSzs1CfCbGtCdZ9xHBM6DRs2YFfzpQmeF5V5LjZekATwvS5cApCMcwGBXu",
  "key29": "3TBVtMb3puRJf1D7CkkwYtnrAWDEvS5chZ2t3t2AsWpnfC255Svcb37kzJChiNdnYeuweoUg19iWnwqT2qnniGW9",
  "key30": "2M12q3wFx9vhu41LtvrsfGyKEjyK9KT1LCTNWWfokTc6RVC8W1JokCbAi49gARQKnMTpuEYz9brqD4x7GcNv9XTS",
  "key31": "31szmban2338e5HfveJSeqyry9zdQxFeCWQ9zZbwmzrfsxqKjYefVPtGTpDVwGJxWfH55pAQ3pgcLD9VscV4tsAn",
  "key32": "4Ywq5XsfS245hStH4zcYvNadLsZfF6m4Yb5TTsSvM6WRBX4FnxuHPdv9TgJ6cqHcVVrETM1XcSQ2K2obGS2jVBhH",
  "key33": "2TYKs4yi7wi2JnvRchd4R98vnvsECc4J6pegmS76Y1nnE6csaryPb4BciGATzPtXaSvb5SZsBwruAd5sjCXF8pXA",
  "key34": "4fNDPVYNBmaRfMWB1BL74xRgd2fDRoV44fLa34XArkLqLKyAujDQ2Jsf21kNTjCb4w9sVzzNwd8hMpF369DMQoxD",
  "key35": "3oX6thsWksvZwCb6vFWg3hEWJ787mEBgZfxivYpxY12KX7vYUwyEUghqvuCXYoHoLyB2kUC7ETngbvP6gP6TGZ6w",
  "key36": "5TncXowidLQLp1trqnm5jNJLYgwKD7LiGDnC9U41Ps4MhFJ4drNwDGh4HQkzLdKyGvGhM3zqbjyxSRhTb11e44ra",
  "key37": "tLmCKufWgLMHNf4FjpEpfZ7E1bWaiRHYXxZXb8GhA3ZP8Rskncs1LGFLn2Jphxni8ARiP7qYFfQn5EdPC1YKxw5",
  "key38": "4Ws9cHaMaHm81wxuK98Q7uxVRJShu9WSPz7z4QfM6zUbacSe9T7zqZGtA2Xpbaf3qssYVpQVjTX3e6pzdW6t79hR",
  "key39": "5CbxTQ1cB3foMJpTX4JCVLBRTQXwvo9sAzVww4e33ywCz6Juy56n2dpPumpGxeS5EhRmZeFAFUsicGCJJ7ujCH6S",
  "key40": "5n5Bh17jm6F1fx8YabBwbB71cAqsKpgdbRjvxKFFZESmCN4ohDUaAgh8pTSxXdPZZndPDPMjew4ozuN3WTvKsX9K",
  "key41": "59w8FZKjFybpeHYyPrbDZfJHPdsCXv227bu5BUq6D8ygru7F3FJtxLCJdHxtvuHNPnSLX1oaJwSqhw7fKSQvLVvW",
  "key42": "5zaZEpnjytfUtuGiFaBXk6Gi8jRSfmnmPu6hJyvEm2iMCqAJhKbkEBTJnEbSommnxNYvYAKp2JtLoZyK1nsej9b7",
  "key43": "5bNZjeuhKeVuoQRLPncM7N29nnvSdHescXqy2ZyyWNVRC1mzQNn2oCgthiUNdwPvWwef7GddhV44Y6cXEnb747gF",
  "key44": "3VJdh3UYpdwKoXeMpPscXbQ19AJcARw7WxkNuifpFA64W282tBFg8nY5LQMguuCjQuvEr44wytYVtx7czTLgPHzV",
  "key45": "4ypKUmjadaKrwKAz88XKKNf6WQguXZFut4Vi5Ct1jgFrv8ta2mJSn5gCxD8nReeN1aywahs96bk4HvFpbQfzhg4W",
  "key46": "6SnpWjzbJEHDS4mueQeuzQddUQnuC1vehknSKLtJ6d9sASUshdsn4FA2wg7VGXaktj3QkdDefcA8oPHTdU7sSqH",
  "key47": "44DSzCBXTruKL5c2tRaor6FPLo4ngiRzaxtCtALHFDNY2gEu7LgmYXi8LP3aKM89gXfYDmAqaBGB8r4QpxzapBRz"
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

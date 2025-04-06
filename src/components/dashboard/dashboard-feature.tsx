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
    "4P6dXaUPKiUE595n7x1Um6tdFAjArWhmLJwyx9o18G4rDQSnUxcnrUTAqiJXz1fyJg2nXpasmwEF8XCvpKMeVYmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21kSsJt1RzBP7LzXBZ7vh48L2fTNwZHPg6jVYS8tegbi7LmxueSev4FJ45wL3YUCb4wuEZPRdejWjca6cPa2Spdj",
  "key1": "4hTSJFR3Z92eHgWn8Q9LNdbyjBmsbVQE87xeBJkJWqgBTVQGqNNa9RfEgegr7YEgkxm3TdJHUE8NnALUpBkdWqs2",
  "key2": "5uvhjzBrwfvkW2sG8zGGrSajfA5HRsxJ76WHqF8HE1cUUbqQc1RtmZyMrNwhd6taL6S2zYJw4XiFHLzERWfse3aB",
  "key3": "5TcY62X9Cj27d6VKrAov3Rd8M5syB3ixQAnA3ZgrsRYvPF4B5fxtTEPmoqg4Gxo5ZjpdvRFpt9UU11rJTnnwG1qE",
  "key4": "yckc5Qu17HS8beRaYz3wicABiSQsC2mcht8iMkxw1whbcjSoiwB8B5J6ywF3khM3yNm2yWFechou2Ra6iQ5AGmQ",
  "key5": "2VjNV5zzvT92DtyjfGpcQbLdyFbiGYFqjkHDuR6CNhs6U673ggrQoJeYKeAavRQwvn6gomSxFyAqbJUKoU9z2uEM",
  "key6": "P1QYVbBsQoimpzH9xuNRxEdrctZbNu2VY5UCMTDko9fgbnCsa3UiRa9hqHWr2k9jhCkP58t2yYjtRZNFsSAF9EV",
  "key7": "3CQYGsa6V6tZN4rnbYbw1DM6yCoPXbu8ht63AjETu8Kvv2AUvkB2NKw3rCMaEn1PqVsmpWoVEd94g7X9XnKRYSzg",
  "key8": "3AsMeVzMMrzg5a99ozfPxxcpQbd2AtSNr1mTHWZNhSUJfShFFAv2bpdDMtk7ts3LPaqwYJEiVCJVb4gSLbNqXCUJ",
  "key9": "4KsGBMxe1o5TRn5jccUogkkLjMBLkqxJ5emp25WfZfx6W7y3dAg4iPtisdyqKcuCzdD8pBoHiBCp1kU9kK14Z1rE",
  "key10": "2j6M9DwvgKauCTumgt4m1WYuESEg4wJeiJEJgXyyXQ9huE7xCF4M7zYxeuJqUZ4kKLKQaPiSCQSo4BF2N1E2eAuM",
  "key11": "56Vwxs96JPSGyg821n3a3Kwnx28zUCfn4QUL1RUpht4wnmdLFNi28UouNxdrFFRTVW8Pzk3AaadeStpKnwhTLPdQ",
  "key12": "4LqjtX8EqeYkshXDDhHwZXyYzBN7KmSGxDMYSD3eqHSggUsc5h2VvHoo5jqnYUuMFfw5Fg46E1MJ3HgxpbhoJcMe",
  "key13": "46aAAzvQffNLk2b6QQXJyeUDd8bCZu46v67dHEWJowqM3jJFkikqEovMBB92CYvBgjLAvfA2zSvRkvU3UMtvWByw",
  "key14": "irj1xAEpEzyB8m9MKtmo8vTzRvSXTCeHmkUAAH5fKh3ZH4HUNgyHg1tmiEQX1A33btR5CQ5EJSW9z4DQckHQvPH",
  "key15": "2N1xF3xrLuqahicdQhz9YjR9nzzrHoENWLPsna6GhmbzcfpT8scB8BCwGZtqE1fJnzhCGXD3BGFC2ep1zdNJLw6Z",
  "key16": "2nSXjHn9uLdQfLCmbbJ6yNaaocWYiqBhUSNY969Gvum4DzpZ3QX2SRArHTSEiijFCrhQjGyMiG4ZVKrTyHtEjJ9j",
  "key17": "3H8AZY9eHiRvLunLSauD4b5B364aSyx2G37d1CRebg9dHatFNsfMdHNFExAvU5yUeFfepCzENrsC6e1EgTdGMsbJ",
  "key18": "VNSquwaWzVZcJAQypFauwRDfaANqmq268UPAq3i3CuwEVKw2S3y4swmJ88167UNQW8mj7wd8fn5vWbatvdxepzF",
  "key19": "b16x6z33g3yuSYzVSJGo1CWzWsJ9oyYKZj93ivmQwX4za9pVhuDTKYeuXm78qzCEwVqwje3MVt2uXPcn3XEcxuW",
  "key20": "5hjiP4KpFG7N8x3Yv5Qa1MrGN3iazQjHhYUVbE4zgz5MuXRr7UbcKGmTPxPoQi2jdWTAFHhQ7p4sz2zmThMMtN8b",
  "key21": "25beZgheoN3uqsASgCZEKS5jnV7BbbiCa7MCD5NhCsiqj3RMTZ3fYUb7dgsSHpDCaoeS7J5MmDeYrKZEY8d5ne45",
  "key22": "5NP3je7LTtqhqi4epFDJ7sjVdfrnEfBSCTCML9K4z9zbVR3pt34QwrbrTrxCVs9Tjrsg3bo6FtwnDNqKgLp1qsM9",
  "key23": "4TnMJviLLPjrasNpcnxCjTpRbCvwnoMVdTvBHfKeqVnDUXEcMHcGprasAXRBC5bC9PRxTYqAu5HUvm7ZTvYyY62R",
  "key24": "5okdqkKvK9VAj1EqnGTDU6HvQd4cbGW7aKwZr1Ezm7hbSX59CeqyMYtcQ5qjVs1BfYgR3LaBWCEHCrHU3CpnU7af",
  "key25": "2NzpofctqgbTvjBUAD2fSmkJHjo9uanRACPFMaqJQA2UtmWJ8Nm9DTKVv6AL3oaK51BHxxwJ3NS9Av1Y3wn1f1t6",
  "key26": "5uLXo6YFzxZsJ1vvbFXZhDekjrZU8PvU3DbAxvUxLMizEpzTZZ6r4qu93GrDJSwnrprRn4bPe2xkxFuQFHtZdXog",
  "key27": "3NnZEUbWYQZJT76hzgr3pn4A8qur6g7BrDhxZtdwEL8CFiGNa5pEGx1GjNLeXeCmXfVdMUNHC8k28NiUrcPq5E7n",
  "key28": "56QX6HfrnYQFaR9wU3fE3PLcwZda9LfrwXc6kXExy4WcEBm7TSinRdit8r8MLQ3cqwv5TNN9pKgMu4GuorKdBkPx",
  "key29": "gPqQDC5wTG64iTYD3N4v1FjynyUnRusn2qfFqiyiq3NpX8aHMoGrAbABxkQSLQL8y8Qu6y4S1fQpRDYm4ctAQpv",
  "key30": "2s5WYqjgW2oCDmYRcLfwcvg6YGaiCLhCAqJqRbEgoZMonAKE7a9hZ2sDiciDUy6HAXycBZfRB3xdaC3ZidFyAvu",
  "key31": "4ZKsRj9iNAN5bzGz8Gdx48xKQJJu8WmznowNeokiR7pR7kKDbgtEWNAVfv15JQHt8KTeupq2WMtMdWhD5otKxcBN",
  "key32": "3WQq512aLhBfaZ1xvcPgjXLek3XHiEmeYNMHWK4TyBaobVyYudwxr5AAPMUsGbjBDGn9Prs5XMt8RBJi8KRzAmk8",
  "key33": "5MDHcr5ven87FhdWNFBjDpdCj3UuSi78XKGtM99TFrESQtWnC8tdDdm54a6USunsF4xZ3XW64vW5k2W3qSAnZZkx",
  "key34": "2Wk8AeC8LfMpAhgmay7XVZjuBrCp5es5WAokMCSv6LNnC5ivzcLY8KqHBhWYgqXb3C6AHuJSoymHDfSmTx3e9wdu",
  "key35": "2fe7CqfkFpL4R3qZ1nS2ntqZLCV4aFj7DubDXtVB869D4aWFwv4Yn3GLocPu3x4KFCauvEDnSrXzgx8qoYW33rS8",
  "key36": "2HSmnQe5doEGbWwor1yCvkorBeUjrZ8wSViMu5WxFVkEatFuHEQ7aDD3eBMwfqG3PNDA9jArs8RmJ65s5So6JwnP",
  "key37": "4piswRhuTXACNib5hEDY6pJqS9jpxBshESFAAtLbjrkWK6nXoDt9uMJ8uCg5fGeScFVG3ozH9Zxxyx2kviz5SHif",
  "key38": "5GhNguxyskfoaqTbWyXVJsArUWtV6S3GGDGf9XPnxc66xLFtuqkKYrkZtRkU1tabY3pXENkq5DsKAGWnGGLj7ZTm",
  "key39": "GRunWfhBhjLf4Q8vkehVAaTVHA3TG8GTwccVbNxFD57xtCwrGhsC6QS2v1GaCL8pc5savajrWgFcR5qX2ozvq25",
  "key40": "3Tm9D6VbCXVfZGTGkReANPozjTTRzJZGPCw2TpPZvJxmB1MYBfPfxAT2uvExYiypA4CpevyD3eKWx6nPkwcnuCzQ",
  "key41": "omohekwZhs6GBv88udNFLjk98uZP8swrgPuJKZnLUZ25UGrwf4z5NukVCrtBBejMBF4EABnJuVZFTGmqJV9iT3V",
  "key42": "64gj4m48xqZLKN28aNfoATy7vMGWCiN7MgvzBroJhZgWDTuk67XSsRJiESdmWBXYHHYnL8XFmRNEaumpsUn4vepn",
  "key43": "61pBLZ7nzB4tCh7Swu5cwan5c7bGQK6BtGkuabyrtqqj7LetRyB6dW4drWx7sB9R667YENGeXeBgb2hm4BRTWdmt",
  "key44": "vweVz9XUAjMmaFezjwe2YRpK9T9GEcQhagACbH2gau6tSwggyrnJsuvjPRRxE1F7FXN4VUfWmUUg6Un8K3mHWAe",
  "key45": "upKa5WXYxWD7gPYNrg6TwB5ZR7DGc6ExFg6Dz5P3Q4eRhMiodCN7ZgwMSgiyxpARAQCCRMD26gVWTF3VvYVvnMe",
  "key46": "2dJpEM474GJsZqFLwVJvNsoCgfdEHETtmMaJ8gx93BFMCLEXUxcgD9nBxoJRUc4n2zqo2y8fUXGShUHL5pNyfLqH",
  "key47": "3Jg2n6MrnZbYKNhe5XduNaYk4TpgPwZiAhJDpgoHbf5UQeB9SknyZ3QD2BSJyPSX4WTXr5TjWXM97VQrYbjbgovJ"
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

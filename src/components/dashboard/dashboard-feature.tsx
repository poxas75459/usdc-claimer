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
    "46v1Rjte39yWxPnFdACrfyAi7jeeBaZQRsYTrDR4RXqzDY7LnxPK3uqkYqLLnWQB4pEvCd1Tgbj8Qh9XsT2kVz99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmzEHYAW55zEkfLL7X5iQiTq2MdseDNNh6RXxFCteFjeN9XtnBQckhNKdqhA6DU1u6vcAcw1kDgzq6dEEfea5EK",
  "key1": "2DGEGGzQcfPh29uCDhJP3AgSMsD8pCbfN5Wr3X4bggH52Nb2FEJstnttxBpA27tNvoFvtoLzQfzGvBWymvq3Lkjx",
  "key2": "2fSeEG5MyRvR2VZfnheARxAcFzeXmZqM2xihBMNgVpn4VMMfcUGjueEVeMurW35KJNZGJ5UxcW4zEL5cX66CtoHR",
  "key3": "4auQ6hPwiiVP6wPzYMfnwE8UAz5rbo72SqBc3M5NdtGLgTzqrcC26WiWE42HiTKSAA9sciZPJDXQhdvQic2TumMe",
  "key4": "K8tKhufPnJaejnoJiq4cHSZiyormHFou2vqLPH8btc9SmaNS3WSDS7KqE8FHLHh4UkWntZ2795pPnvVD8cF3BdX",
  "key5": "3rJgca6Fe6vMju1wuwjLGrVHPfjqABde2Hf3jxmDc6k43iAYh42ZAhEhDaRSLy6W3tGEyWhxyj7CBB82a853B89N",
  "key6": "4xv1fVMRxmhiwY5zpR1VFKfN9Np3p2X5zw7wedJCmg1ozaVjvqBimL9gs9Ycw9QrHXxZxBM95qqdtk9m5fgRtoRv",
  "key7": "2zGMfoPrEbERHFoAzL8TNgZX3CNss4n8L5fxKSe4pcraGhSduBaEZEmjWNmF8ybWPJphuWCwVe8ZK1wSSQ9o2baS",
  "key8": "3BcqvkJLxXoHJmnQ5sRpWDkmXMu3ZhrBvG74LDkCAyhRZzy7UV2aeW4AetAFnnGmSLk3i893R1svqYMKxjMtpwFr",
  "key9": "64JDrPHmzDrZ8n5nG7X97MyLwdbz9HJz3j8EWLTB6yPYtW5grXkKpxxXXvJuxJYwxh8MPg5ufpWpCttk6CKXKP9v",
  "key10": "63q15u9nmZAyCB5m7hYmVfX4Py1dELhTQ3RaQBCDe3AGmPCkH9zw4CYxVnREpiAWaoBQYLUWsNfg5pizM2zcBhZt",
  "key11": "3Rcaq4w9C7ARPM55ozNpqjmhD3kc9Ld71H7mtJH7CenCJDnkBdPSgHucjU6yWk6AzghYNBnsVgVhYJ6Svzr3J8zt",
  "key12": "3CueZMXFiNky5YMynfFcvKBZtkcGm53ro5VvsJ5vh8fZx1gfjdrWtp8EBvQFPDT8B7XGgDuEXhTMmMfyou5VC4z7",
  "key13": "UNFvLtTTvWXWrTTc7nPSr1MvBz1hdJA5UarmgU3M98KB1Vmv6XYf4DrBgp1Tw8mkcD26TzvLQAn8uAzvnMWVtyz",
  "key14": "5jrQsQmsqrM9AbL47EUtRWtWYn1LeQ1Tj7L4qbnhETA2kwr9v3kbpxzoNknDyo46mAVLrMM5MwtEgYiJfQkBnCpj",
  "key15": "2cZ2QChi4XkriPkL83uKYpdxSumRBHe1GniytjsVmpGo21Q68t1REW2dFzecfjtXbJSAEDz1fb2eYZMyphzu7E3s",
  "key16": "4dYqPPaX75JyEBnaM4k414gNgeegSKLaijwmEBjoyTpz6AdnWU65c8BwRVsFZL7n1AzQFTJtt9qJ3JQfRLjznTcZ",
  "key17": "2hwsn5nz8gehJU1sSuqZxdkm186yB82EcQyoiPgLb9qAobhbugrvus1rhyX8Lqp9TfpJQQguunF6F4RQ59rrvcLP",
  "key18": "5kwtYjdduKFEKK4VEouWvEnRDqwfYK39Zs5zha8u1p7NCFYyVtqgRk9ZEfXW2GHAQfabypEpAnS6FnE327iMLVM7",
  "key19": "4TsYDM8j5wbhsT457fN4dpuaqGoYbtHSXAXfh9gQJrh3Q56fHLzt6seyBQqtnSrW56CvAxjjESpZ5Y67KEuAiH6C",
  "key20": "4fFz8fGscoFWqmk7KQye4nhgL3LZfRBuiQiVhZZMaCrJR8waTnwUfXb1Ns83gMj1gP8EAGWcxCLb9p2d7RorhRgb",
  "key21": "2pqJ2mDh1nSNiUgBSm5PDxHdZCUr9kE2dqfPTLuaGoqjc9PDgC7BEzNrLQnPJkeRp2KJimXfMonhsEJcUJn4bwWz",
  "key22": "5nc1jYS3cpeDW1W3RvRK1fsh7Zfy5eU5qkL8ByK9rmABcmiXfhopMNc46hvPZWqdeEcAnrd4zcd3xmSVTNAYkqh3",
  "key23": "4nwMztoGBqKZm9SxRkqh9mZMVYN7x3RnWZ4hv5UBHGwMTRic1evgnVHfPeXjA4pJi6kHEMEpzW89GdZRZtqyH8x3",
  "key24": "3gMRZLBoxxYQWMoBxL2Ch1Qb55yWhBY33Y2L318WS3hpXkKRJqjBoVTxSnnNVMxy99xYQa2HcHPJMkjnnq2J3okZ",
  "key25": "5wtd57fxVoEZPaWB42WVLqzuby2FavL6tuXPTwh5u5uUCFifvgFFT8x4uKwaadZMbkhfXvDGXWj5gwuGmhmofPmR",
  "key26": "51PohJ1WaojK6VTMXZXhzAVmrhHxADpNsfRfGBydEW5TFqr5tXGfabXseNuzyA4ch9YbTAFrh9oyYEG5aiiVihXh",
  "key27": "wCp2C8Bke8xYBEzgZ4Bo6oAfrcJKT5zgdViP1hfAc5U22oehp818A7yGSBLA1xbu9wXCraucPLp1Ub6yo46GLU4",
  "key28": "3EvK2QPvhvXQDFUrTYnbCEtkKSrzf8XqMYBzfX54FcJUioqyCptysx2GVKoJ9x6AJn8kTDwF7PJJBd1Yhdhmmed6",
  "key29": "5EAHkNfd3fmkCAeKvXYyfJ6XKHFuoxfj8rJmuektQ492a6paUZ3nS95sE5WuQzUPTMjDygUhmYbRPKZrSPZ2U7Vk",
  "key30": "2P6u9CS8CTam9fHNz1GxL48LqJxkCb8D2JAQ6mqqPgTdQo3JWEGG987GLtdsK6CoXNcfdBQknmBtyQeFvdDqj65z",
  "key31": "56cQ9zJG4rEFBFzmesgkXujULASNZeHJGDmwmZxmQ6k5vCvvvb4KUEtDECu6sJJA4ng6w9XyKZ8TXTLdPpgnqkP2",
  "key32": "2vJNLTczWjiyQBDzbqxPkTb84U8uqd3gvYLwtAP3YtdoznegH2zECjWHttG678tag7HYNxYvTsioznmHDbQEMEQs",
  "key33": "5CU3nUevswKN7iFrhh3p4xq2NtmfPtaiUtYv7nWebi54ozXJ1gJCEH55E4dzWWy6JXpL8v1iQX6Ja9Rve86c9B9B",
  "key34": "433uTsg2rf1HPU3i3Lh5e344oTrwcMv7uJSgr7wFUiJGtRat5GH6vaiMaW7h5KK5JFLqK76gCt3u6P2fg5vXFyTL",
  "key35": "65MYDVpyp8U2adrpLDVKQgn2h6cDSxvP8mbN5jJMmCqARghLSJCjzwpYen17a4gRv6h3HVWGiDr3D5P7ACzbkz7y",
  "key36": "3Tdfhw8629m1bhQUxRiunA8v77ZbykB6ggQ3SASZzm7L2f54cQW41CDn9g3PKxETe6i8XUL5WB9NYEPgUCDfgAyF",
  "key37": "2nGnDSqzyY7ajxvR2Bo3GFvwY18q4vZAeqW4DyeivLPPuk9XD434jd7XJBcRaoNpMs1y3EE88pHVviGv3i7KbJFP",
  "key38": "4f8A6gNrwipzupHiQUXkqYGBf7gWM53t7iHZ6Po98u5tZQUMUBVcPqnWwRtrMXNZVjNBF755KXYBPHPoJH9xnoNw",
  "key39": "3nAqTDLGtBWEjhcjxekAYpWshMypZtPRZFNT17tghEFiTFy32q7R76JK7V2vqZvxLMWnygq2rkPWkTEjiZMiCiG1",
  "key40": "RsQ4vRg8kFd89TLqRoqQScTCqxAFGoAEV5jRVk9RXFu5DGi6jfyC9ivVWWFkHYQm6pgzaQoPGx7SMGhXVzAVCaF",
  "key41": "4uNJxbkwtbrje13KSVb5iy6U6RnqJrjbEn4A2kngacNethqrLs1UoZE5SosYqAw6q2o8rrKvF6y8dCKfJu7eAANU",
  "key42": "4khz3taqVgtYURoeiPPS14HrJuoL8srL3a4HehqG6CbbYqucB1Tadhzu6tJuapdB46padeLKTAvo4vJ9rJ4StR4m",
  "key43": "46EhDKTgE9niL1Ct6T3DtM8kWdJyXmuG39L5e7rBJuTiuVfPfKt41UNiXd3R8s5TYArj6YEgsyTw2NXg7zRfPmjd",
  "key44": "5T8mK9e2YfeZNFMgmmH31B6QbzJ4DyXfMAHupp8kpFZ8J3CyYXWt99AWUFEkYBH4EbGSj13aCM3DeT32vLkFW8Xp",
  "key45": "TpmSfKTB1fTQgJDbFpH724nx7FVv2g8FxsJh7Rj1GiUjNGicPC8VnVNaFu2c5MmuLJSghrhSwgoVDhahzLbghDC",
  "key46": "57SQ7rHJfHBf1mAQzedTn9jLzHWkZQ8XAVCd1jBPg5xEee6tVyzJVij14MZunDap9a2MpZyChcNvTEw1ubQmRqaY",
  "key47": "4YT4MvKro81qyVexh2EnH2hN1iCbikpvJJyyXpxm9Pts8FFqmeGRhvHGcfKjpZ3wsC4ie8GJt8kgWEZxd9wDwgsj"
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

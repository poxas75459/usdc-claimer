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
    "2YEibjLn69PMHE5BEJ5bXV8nR7yAzSx6wVQ3Z6UTZythUF8cwpxmyDSwPSTVfCjGkgoXB2CTipdeUYzYvZ3MiBLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bEtCp5dUzcNcHKN9udEefRY9FZcaZ6Fp9r1NFGxU48BgtWPbtTGNdtehbawYoY7vGXHcftgE8gTEB1nvKdxPQe",
  "key1": "4PKSBm1AKaKTcWaR3qpzkZu656mxPRcn5TbX3XjrGiZ8RcUEYEMtHHseyWYEpMxXFypmHJgPCtzWZSswkGNea2jL",
  "key2": "QgcwxHUKDR8WHKaR2thWBRdS9qPbmFNPW48hwwSv71AfgiVXSZ47u5WHNGgZgKfh9kX4Hmh6Pubvh3VhgkJcmAS",
  "key3": "3rkMmFG9kiQsdWGkj32q2mRNVFFLANSm9taaRP52nwavyZgxnRYzWGCUWsWJBUL42dJwi5DyXVYBbRfz32edYjwq",
  "key4": "mtTUhYBbszVzwz2s4fDG7edmaWyr8uGDhmCWG1uZdh6GihzEdMv7rbZc2FxRyQC771DXofVTNrS91hYUfxj93jA",
  "key5": "3VbvM6BgQkfPq6LJfsH4VpE52eURzaKPz5xRiSQ9ium6hn89cCfnVicbfpg67fDmYrHUaF7wtAod91GL61UPMGMb",
  "key6": "3yRuf4vH2Lezd9s4aqrbhuRan9BBmQrzvvWsdz2sudknegknwdsYRJJjPMMfSjR4pfmdaW7yBon5P7tJPJrAGLsy",
  "key7": "5bUdy3FMsDRNM99gtBPY74uV3zH3yjU7koTNooewdsJn91zouSH1i6BjSKu6HvBAkXXqTy6wA48xncQjwUEzVVtS",
  "key8": "f1Yeix1ZPPtSmfFcyV3jWnv7pdp2uKQKYoyNsyHyZy5FYQ3Mrr7xW4EULhHZB1VhWLh7GQv6TQVYetgX7pwvT7V",
  "key9": "4orsuoAfNCdLCVWiuuNfF5j7C12DFpfiG8dozzhRjHpi89pN5fLwMBZhBGTpoUWCaoc85fs5FTBztdWDwyzuH2Gv",
  "key10": "2MfvKn82QaJYyXewMacM7SMqD2fq9UW6CpcS9mGokicxbCfoUAGVADkbPV7pQEUJMP6eMJPuNjboNeiwV2ExdTQL",
  "key11": "2zSRENCmY44GRSwvXimVmJZr9rTNBi8PFsvPVvrQaU37qTj17kYVF3gAbYHGiYUQFY9BeZrmXhF19DbVFVtorVor",
  "key12": "65uUhdkViHjAuyCiALVS8wX2ze4FyYzjFG1H4gKgk7GqmVTbbHqMT5ykA1FcBGzEbaNusnZ4ucAhjo1fMSf2U6gu",
  "key13": "5AxdHGsmm1zymuwMhCpDYNHzPRQ6cW6xtfbDU7TUnUyjKvdPf83xTptSPJwSY3B7gjKAdPWvCoA7RFJoKXx7dUH8",
  "key14": "46S7e2nrBK8V7i5qerAyMJSYUc93kme9j3aLCR64amaEXUNiVWQBeis3V25fW4yeJjFNk84RpW9rEWfiqgWG1BY6",
  "key15": "3vy74K5rvSLFkGajYrWWZ9xZUu67KJycTnWXejrtJxapQR2kT1cHkWNSr9ovqn8ugLJqdHJKxxcrrsedAHTePNrK",
  "key16": "5vBcaREhXLT424BRgKNgGN3uCEko2bytWT4H43iDxdea8nBxfEAWySGF4eGyWcR8HPEWscBQ16YeC3ZQaghsLuPs",
  "key17": "4onE2os4UHCDnFxYxw6ufYRy4Ag1EwmjMRXuqmK2AQNq4FKpWPExfDibngmqdHqMFUU3uDJB4EKLcJWQwWZjvQGB",
  "key18": "2DmEpvXBp4vLdjTdHFTb4j582d9ihhfCWCHoKLw7WZPHmLuZskm3XqHXT2u9QYQdG6MGC1S4YHzRrGCL3qqdLUwU",
  "key19": "5FPUvoszJ2ZWg3woKqsPiK8d3uZysfjaMvhJbcXfubGHxN44mGEwRPiT7wvEdw6tS5vy4yz8WhQALGPt4RMBe7Z3",
  "key20": "64rG1M8xb3oYjFZPCwpMpcRwYhpBoLqNS3CE5SxpBKG2HttoTcuMz3znEEHqRKhTQEBunLNKz9Nc9GKvLriwTa3p",
  "key21": "8M7NJ8MZSNkCJ2qsRLpLVeAtufgTGmGV457yVp4uWtHRjzd8vRsHjZau5gzwmJw4HNFaVv8iEPHjDGerjgow3cw",
  "key22": "4wxHyxZ9gsGhioXNavnfdyH6BzsDjS6u3UAy589WpLuk4Fn54yZrTVvuMUGNEuXW66eDChLHynYR2aKqtUwZdWej",
  "key23": "K34xG7gDaAUNaw21Ka7NxaQ3oKed9LgsXL6AiLE7c3YdD8UfFcD5P2Mowp3yZP41HRqWvTwHFTybDGRfWYa7wLE",
  "key24": "4811Koggk2niWRvnX2hfYoCc2CjAHYfkm4vFcbgV7hfnE8UH9EakhdwRJB7iesX9dMcZvZAW2uVvgZPbuhExxneJ",
  "key25": "5smHLoc4jpmkSZt9noA4xG5wfQsGoFwcPo3K4db8rKQCQ3dtSXzmAaA4WbvKPsdbBoreKdvKYDXfPt2LBPYid8Lw",
  "key26": "62BawBQVa3ZDAsDd3FKjSayaFPKzbSL46KQPYBJZaRRpjJZGqiC8LCkgXGXzBZoRpv8ebgRXAG1xwLePuC9eXXsT",
  "key27": "4pe5CTAPa4Y6XptTQUd9Lrisdn4m2J5LYA5GqcU6KvT95NTzbRUFNj65W6ix47s8cDSoRxok4wQ81bQSBHhdcVLc",
  "key28": "3T8WrJvZQFu7sz1nqgwASDygiW6bjwfPX7Ak2MVoXkTG2TvaJCTGR7x2Q2Emf4fQwFakA2uZ1d2ndh7Ai4ijoAHe",
  "key29": "2qWpzat4N176P9D73SAK2h2VY8D92rN8aoMdeuSRpDsasuNUwNmjtvvkcVQdQGh9pc3Lp9eyoYUvY5Vm1LX2b1s7"
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

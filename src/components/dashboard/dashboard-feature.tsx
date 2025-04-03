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
    "2G5iX3L9NSbr7H1mpTdR25hPq7jtNHsFmDXG4oz8bwtwNncAq8JwzPqvSPkw4CaWCP8ggVKVZcMnvUVUzBNwm4rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NEEg4byKw6HM33p38VDkfeYbuQxmsmx34HrJAD8iwBj9hhH4aVJZMgHESWDEyqAcbkRtb2rrqevYrgiuv51Qz66",
  "key1": "SBGXpM6PZanhumGeQu9dZASBV8VvWKG7RPtbP2qHuRFQkuKs5imBJ71fEry6b91gNi8C5JVoyE1UZZvY49N5viN",
  "key2": "5n5vDCXesBVVq7kmtrnsEXLwctBRPTv1fGmXCpqFm7Ti8LEh9cNHEe5xrHJtJRZKp9p85azwcupjcH5XwPJLpdYY",
  "key3": "5ETJ9hMib8YvPzVygxettWCgmAv4QsiMo8JYEzXhfR5a6Aa57kowirFu58j96PhmQ1ABfCPtKbY2SBTq9yKUG3jL",
  "key4": "4dnS7PiogRmCUj9S6Q24Z7DBbEiVemhuBjqRS9p6szHRLPTZnT5PuYgBxbuxLk1AtRUBqsdpQ8rFeeJ6zvo4d3sb",
  "key5": "4me29i4id2Ri9WtsKwkqLpFozEBYUjdUAtHJDGgs7fFZfFgyvTQ3anF9oRB4a6nsmT8sK4D3AhYi3Cwyn8gtnjbj",
  "key6": "8F1kfBpXXmiSsnPWG1bcgxweNGQC3soXPqTEGaWYFiTCpPG7CyTohD89C1cbHBWnKR8h68MrYtA5QLcc8TJ1A8r",
  "key7": "2HJDvvmyU1qqopibeJ9VugYXF3UPy5adQi2bCcpNT6sAhc71NCkWc8x2m9AREzo1zYREouMs7xgTTXbtuofzo9Eg",
  "key8": "2TE2iznLdY9nxoJnW4pxpX4euwkd5apAt1YGFpp1QnzvJgErQCfFzj9VZYAMKdz34tZe1FMaZ9wBQpSz6x9Awywm",
  "key9": "2L5SQfbhVG2AWr1irgpG7v7kWCYXJ88uNLwYzgbLtcBeZ85kohjpyHoFZjkn9c8WJPpq2AJ6LdPhhoB542TKrGMk",
  "key10": "26wszrek5XMJvcYQRPAD4nSC4vdso6vQTZ3oRAL2Ru79xJLreGZQMjJaTaziD9K2HWrGKm7fqKn4ibh315bacYRw",
  "key11": "4vwHhRLuKaGTRwB3BrusFBf373tzhWYTtRoqd314yg81NJVXCDysKtPY3rWrDegYVXXmM5stu7uozNCED3SfRqeJ",
  "key12": "5p2RUiBntwyAbYxzXmvaiCmmWFgULBzyE7c7Vm2CWsJLeLpqbZMZ1G1YE2rLY3eV3zN9BzYBoM7pZctmbYBHtWsh",
  "key13": "2reF4X2zjrhDtitijHFPXMojJPRVKe9AJrcrJv6DAr6B4rmBLsnKt81wZzXH5nEZPwdgUbEp5bcPc8W451vC7M89",
  "key14": "2XUetqu1FrHPaD54wFHAf7xv7cdvLiBsvnouqbTQEeDfeZXwNLNtujFdqd3AFKhugYMGrbrLsVVH6iny4PkEG7wC",
  "key15": "3QEVtiDYF64NABdtoKMyiNoA96zTGu2KdSMxhhFfVmq8KEJ7xht1v26U5bP53Yy66naePkRPfNUmwDD4zR76ZWDq",
  "key16": "4PziZgMsZeQFZF3KRxhNgipg8U9zSRvd6uqjh66WpVL8i4Q6vUPLUdULHhKuAvHH3joMQdTVg3aFVKrmNeVh87Uk",
  "key17": "26F3R8i4ZwBMqTscAvWG2HHkaVAWAGsGAziqJ2D7amJmauvp5U4z7BmrgQd2UGEPEYNPYDAYP5eEh6n22jQ89Pmq",
  "key18": "3rm7rypD5fTcjQA7fUWJCRb88odUGKmXgFaFE3tNrr9SGat8cwubYprr7o3QmVyc5xh6f662153ASqVV8JLiT6Mt",
  "key19": "4CiRyMYrppRZd2AjmmNaKWTRE4pvJ8k5dWgC89b6UMKGjaDS5MRRoJk2fKZos9Qig4gyMTtryktgssHCtb7iWnKL",
  "key20": "2quWR68rTFPcgAzBWhppD4rHmngyBTq2X7bTsXJhYgBWWUB4pZVc594MA3wyrp3f16WhRTPMPn8619zJvqnY2aSF",
  "key21": "2RF7gSZtp49H2HiPUTNoh3U6wTuAo6EAnF3zQyD3tcMu7zb43zGFuhTL67DPvRKN4w8Ltg8UUKBMNTrqmqqcM8i8",
  "key22": "3wZkLiXfgbg9thcTsvoNaWedYeyMvJa6an6oEbgGYKiTDoRhDf6tpoHxsKq92XXCGgfqpoqBDTEchyWfiBRJ1Vko",
  "key23": "5XDV8QVUr4ark6wEu5jhxQ4sdWantRFMh4mqpo38gFcGM8nESpDY78oxWV9cEs2bxAAjPfrjbmsjRRiGgxufBoKW",
  "key24": "9ycn63MnC5mqbFb5sRQqeVA8xWyE4kbCoiHio2Pj7wnJ4b1GrDeXJnqtAiSKYmiVKZ64u5QBT6zQAVRHkp576js",
  "key25": "2njp26jarYf8x8jsn8UoKrtY3T2FS5Mm4bEiJHkJdCMWbPg6qbm2p3MEL6y7gZBMDuX5gZYghFHsXr49DrmhErJ1"
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

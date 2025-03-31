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
    "3TTWMF7vFXAQp8usWNySjJVKArwLYEkk491rWTHGYMkwtLWd6wtphC6BndpsvWaZFvq7ByakchqXD8ooqwJeydJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NuiDTkpr31TNGrH8onTgPFFiFo6ZZpfz4fgSSQxeYoMywSCRXW6q9VFYBBsQz5NL5cTn7Erme5bemgd68At3TqH",
  "key1": "33EXaESetUjM2G7hR9A7ZRUL4uKzty5sjVKhPRuFA4DH4HTJBWaNnUvZLJwA3uTZd826bNYkP9wdXnh4qUS2W7B9",
  "key2": "59xnAECxg5EJnr973sAMwHNM6gJzcnVWcgEAgyZ1RWT1nK5a1KLj41svmhYjPkbiFayALxPoKevy9NvoarYnsUWR",
  "key3": "5guNvaGk1QsV7s3Mirj4wnBynnARKHJPuJ3UQEbZFbFvTZyw7Uz1K8GM9C1PHgt5PZgRnao5U4JmXPBxCyrYaejv",
  "key4": "4JefzVFNtYkRGjxW6L786hPA33S61vXcWsLKee1YHfFiotx3cf6BRoAet52LVqGVLxnDvpZS7BkJKBNa3JTbsUqL",
  "key5": "3SktLghQ37KNAtJkEtUYzUMZyx5yWNe6gyHWSbzctCEvkEM4gwZD878qfTyHABPh2mzc5GC678rZjh8YTQy1V7nW",
  "key6": "3kad89ax2E2MMFshJwNsVv52CEA3o4n7KVVANRVgcJnoRYz8XP5jf88feauCvn1Q6wxGzcKJvw2fV9oo9wbzynZm",
  "key7": "1cUWWzbKbSgUxS25aGzrCmhjTaBV8ujcm57W1dP7oHQHMvsLMGkQn3DQEPaM1Qua2eSUSq7AwHLvtm4RB8491TK",
  "key8": "5MApCtQBxVUSBMVojnuGvgioGcMRVRTpySb6MbKKGNmyGrwVDheAQRj5W8kXN38c4axgmFUtcJxzQvvjWK3T32X4",
  "key9": "3vRPUY1QchoDjp6YgRqbvfjGHtSGDcZuUyeGWtSqnKtAmujSZgcycNKUgmCdhoUtG3scix4MgCYmQrDq4g8opvCg",
  "key10": "3J23EJaUEL3VjusR26ktzTLycKhbXBExJTPoBr4gadFakTugJZEpfTyuRcX4TubLEeGqvPb23cVVusqFH3isJhZe",
  "key11": "27Nr6V99c5kkoArR3EmVXJrCAs1zdNN82gVCP17R2VTWoPG1qUdqYDDTEx1XbdmCtze4ffecFV6wi8wMooMUBXMx",
  "key12": "36BnQ2UwuD1R6y6bohtZxFC3G33VwtJgoRLJUuvisp6uUX6LfH9cmoKkGrAMPT7d4cidLk6MNQMC4xDgnE4MK4Ei",
  "key13": "5wDVL3719ZDHZz5x2LtjSG3PVtfiC6U8yoyG7fRzAbTERHiFktE5N9mPFfeWvv4nbBRiWMLwErqNBEDVJuBCBVxC",
  "key14": "4d8P23y8tZak2g57LjZVykvG5xrecdaBiD5kskj3ZN4kv7gYurHAcxPB4HpAoEeTbTaiqNmZoovWbi8ndcLnY76g",
  "key15": "2upGe1k5PVbpVQEfQbPpyac4CY4dhdQdHDbJyisChbDdqEKdVAxBovW17vqukDAzpzsfbatriT8f5s4SYWZ1CXaS",
  "key16": "2Dw2PijBvzQfoTvGPLh96CfeZcT2SnLm9BiNBr5ZX2eg5YSyvL4ddRf68mJdyhpQqWDm5629hZPE7HAmUJLzoyjJ",
  "key17": "4S2RUPVTpJ4TCg5yDw2etqDSUQ27CAiwJ2gDCTJtXqAPWaJpVfmCaVS7jopLRLyJaJEewAuVDPKKLkAcYZtvNwn5",
  "key18": "4DowNqDSsf2C3rn1R3ihAhPZmHSiWt1iLjZAcYEdT7Qk9f1uZZAyfkiCRyVjuBVPZRT7gsMiwtpXch6YnqzS1Mvs",
  "key19": "3PeY2ktzSWaUNQ4GoTMVCXS2CWc8x23JQeEEjdPqEhwJycbKgy2U7ReEi15uTo4uZpiKUX4pJgJNTQhnnaixyV2M",
  "key20": "2wi1kiwVgQqPqpQ2MQvjW9HRM5bhUvjNabDgZtYSj4JiZm4mYohnQ7d2TPK4GaRQoCdAUjMA3awAJZ6Hvmnr4dfC",
  "key21": "2tdcbK8RsNdgjuPZEG7Vasbxb3szWKzayAMhRXU9R3FU8PajLX3J8A4d5TZqc5gPRBNLgc1J9hqLf89mYXPERX9p",
  "key22": "3fbZVF93NRNcK2YPnRi7wm8rPMJSH7ZBFk2WHX44XVXDD3csZzbeMBtRthmXz1eGViCphZnKQEtthSuEADqk4YJo",
  "key23": "2Ws4iV5deNQqbHyNZuNLJHZdhBDzebYWPUTYsZzvAZGURCQKxiHX8vxrtc75jABaMWDvTFcWtzin94RShurj8MYH",
  "key24": "64rEkWoxnA366DP6t1DWn8uYmkh7WpS4AGKD1bBcogoNqPxyvd4rubuw7JuXxWBwBogbHTjjVcjhLzk1r7rNUQRX",
  "key25": "2ZBueHZt8dLRag5kXccQYs13dCu3wrD6t42hzyfi8tyxzV43vWp95NLkAS4tyFxxTCFhdJYCwTynwAnz5wfJj16k",
  "key26": "4H4qUnidgCnQawfZsmMQ9uDLvK9VgR38JmLd2RJHbthoNnJsrhX31Z42vL43cs3FpaSuW1WGT2wGAXBrQ3832AqF",
  "key27": "3JrufGodwCXBQFCYBjE4G7PVmSnruSf2yD7KPofaQkfeC3QS96C6BpK48Wh2QNEkPUP8ZYjmcBfrQ4zWjNnFjokg",
  "key28": "3HQsaThFbBPGkVV3LtkRaxCroxTvrfKryqQShyvUqAzFE3tYDcW9rcAe6P6cnzDdn8dWvmLkdC64ByNEfPcdq3Jb",
  "key29": "3s2wy44wf29X9HHK3BMxZXB82E9pmz6RWgvZSmpZKEP6A4sLuWQMG9A97zMuhcJkM8piGiirZ6yua8oHGrzTTm1x"
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

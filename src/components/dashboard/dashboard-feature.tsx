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
    "5FeZPcL67NR82K2xpsDTzHp5zcwZAZYmDJ2TxUkU7BrBidCnjGpAayeDAxoi267J7u1X4cvtAgycMKpZzkh6dApy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jaHkEujzmy9x9bJDQg1q2ptVSBPkK1bAz6ocxAUMKw69yG3HUXpM4Gh6pkvJPJMjVn4WNJkQvxFYgJ6MwPMpLpg",
  "key1": "4ttF11aXNrNXt6ywuG31xRMT9X5obbkYbLNf9xvF7eLKqAjR2x7CcbFa36udqVC4e76awmNhxYi74wGVBTukpghi",
  "key2": "244dN7ZtCLUYWwDFgHiMCPFmWHAe1PcEPCQGnhP2ekbVUatQZ58QtYaUJMRSRpccA3S1cdLMhEzdgqH96hsgDtLF",
  "key3": "kRNf5mvAPrsS4zZoPRc3aCdrXwSny49gnGjSy2S1zLYjyTM4Auj2HHipn1qAydkJRx7NrLTTVGh9Jq1dHFxy1Bh",
  "key4": "56u9twNVC4YQHiRMQ6TuCcXJa7a8n3vRi8oAKjzaVxU7XnDZiSRt7P5q7miwZFvcfDA21Uhiw1rZtUeWpJqJFLjy",
  "key5": "3eQ4QuBWg2bF5rjZhYSUcNXowjbX5KFf6GvDjpygxBR9FQS1wTNuhUntBLKhmWwinu1aPHrN8Zym3UUHKpP4mutm",
  "key6": "2y3mpT4R4DGQV5wf447kjmEmJNWi6guviKvN1TR8BKunq5vRBqnPawcXHqdADSo4L8Fg4EVTidVXJsXbmCYsFpL1",
  "key7": "3a1tRMCE9VGcmyucT8FXuPDP7ikXZGwyaJJM8PAwGzvVLG4nbwmcWpK6bgQJsQ72dPtQvytkt9W1T5DYUWr4JgJu",
  "key8": "4VCyFTpHcUCvDYYWHmvhvV5Q4nSxC6D6ds9azUhXNrYaNMPDXHHnBpDGPRJeH6HLKaf5ona8Cbfcd2RyvJBf2APY",
  "key9": "3VcKEL9ivj43DSgeRtHX8iwXz9afxzz59deoM1S64j1Q2aBWfNXGWvBwVLofEKyQ8mkKhtYi7g463imLZg7y1tpU",
  "key10": "55hKWwN65KJK56qD9ac2JNfshBVvwxe6ztDcnFwAg6UbBGVGP2FFk3vrBiCCuDTbYdBsCMkaCk2mB2ABcQUzEbb",
  "key11": "36x78ZG6ChewwGJP4bwkBw21rfRdEbz3jFDr2mCdKhtVjTht7XKJSeQbzXjo8fpg4JzC3Qhiy5qf5buMCXRUw2TW",
  "key12": "W7GH5RRM7GCK2fSEyDVHxNyFc3Z636qmKM9vYPUGLtRzM6t4TwSBkitF87Vmz9enUWqDJtLAdZ6FUCsidXDcD5X",
  "key13": "4AnhJzSbM2JiStMfRRaQ53bFn2WqYVEYQfunfWjA1CdXRmqZ6rAmwuYxbQFKzMAQSvW6dBqUuPinRbfdSnUUutn2",
  "key14": "3U3dGRcCbr9z3RE62LXubgGPxoicdakhvAddi3EYmsQ3Kz2xH9GwmCoV7n1Gm5HNQgopqBhTQzWERvUfrkwe4auq",
  "key15": "YSYQ1bQzBVWsCHfQef4PV8HPrU4ZZyuiorqaD82fE4MKhs9UgoRK6Y43n8YmCD2Wk3tWaGXwqmuH9DvSMGA5RAd",
  "key16": "3vG2bJcHPXc1s6DfhWMWF6fUCkU2FtzQrzDDPnZwMt67UxQ1CbpabF5wzDEq1EVidLP1Lw6a9fExk7xB6QWpYT5e",
  "key17": "4U889tBN7PMKvpgoK9zguvgTVWZoPmGZjwAwqjJLdYNGxwC17N2Z5qC9Qjf8DzsFreeZvWLiaxpc32ryYbWGSHfp",
  "key18": "2FkxNPpeAiNVV4Deviskzptr1wbnksfcZe5yxSEkPwqu65oLCHuaw1WTiUAbV2bBT9iRSw5PJVN5sdZ8aPrMwkbM",
  "key19": "4gCPeLjF8Xx21j5ovP2FPkVuGrrM4ZDHtMze1TAFUfsmp5j9mUcVTEXkDZvQDUe98Xxk2nedqE32L5L9x8vUP23c",
  "key20": "5kPeZzW3eLvBWWNZVQDuySYUcauLznt24x8EfeRuKGDprxuSoU1BsoEkLP64zFtuXtWiKm8AKGbzcN4yghhT5ejU",
  "key21": "KzNzAkSnskG73tgPhRwXywci2tZVcyza2XNCG3zFwzipvtAS7mJZLMoQXH2sy6CiumJTd7JQUTurkRnQuSB3Edo",
  "key22": "5C9kVQmsxoT24ExKiKkK6BezyFCG3S6Q14KCBDF3MSq8Fbyvbj57KcsHSXe88B7QMmSKffm7XDXQD2rhgqCoYc1Z",
  "key23": "urfJJ5w5LGSSCdisBeVmeovTWpCounbJPxh9WVB9RRiQZYcAK94E2vboYmDMbRk96bsKKK6ei4n8Efe5JEuhobn",
  "key24": "5i6vWkBZ3ge2ZsHxixN86AGHHwTE89w4WF6hbsGdyJMotiDvY7ybQjYjMp8NbqAWp2FXEoGDHHx6q9U13pA1i3tV",
  "key25": "59upwjevmjf41dkhAv94aTTE6wBdvrHZEJckkux9Te36GeQ3DQ6vV7BFavwDes7EgyziicvL515SHN4vd5supVRW",
  "key26": "4zvWPaHRixbFAiqojTLwRkGjN7eubtkMojpQDSPn4VczJZBT3qHkptSuV1McBHd1V8Wkyurf7dXmahJm3AjqE7nJ",
  "key27": "2MgeC9EEp3dGeHRBUFCvtLoaAHLLJ3cT1jJTyPKuGc9Y42Gg68KJQDaathBk5CCgVNYY69NCywQxRPncPPxT2yFz",
  "key28": "48rZeeNYFH6qoqfJhxx94KksUK7BK4oW4JE8SDbGFxijCv51dSDwEmXouXVoHkreLEG7dVqpdDBeMioFHdruMGM6",
  "key29": "3xSU6dV7j4oyznRee2ocPjMN7EF9PkTaJXenYYVdE4mzMKcXFTdc9kB6qm3wzzRVGCrGi6fw175E5san8KNTLuhw",
  "key30": "5NeFYMEgAzyUs4hxpL4YKxS8HPWoVfNegLXo27Fmhz46Ek6ToRVcPdmFQ5tB9cq6kfQkwQD2SKoxbKvA6eoaQ18z",
  "key31": "5xgHyHfLDxMJ8DV8qkP8pZuTrptaf4mBS43bfviqu1refZX8BqEnwjAnqQN7rpJqtBUnWEd6SGhzN6KFkHjqq5Mn",
  "key32": "4YzYN7NTfWHGaBvtTGRbJ5qr5bxaGfUYMwJ3CeQ5zedogMDEuegYRjbdqqXXDWNaES9Vey5TQJiVH8rqkzEyyFe7",
  "key33": "3Ly5ScjsLXBZNkDLNAbUXsSBWKP3aH3Xn62CRzKLc6fbvWYPSfNwsLmc1gjQUfMTrTHFNwx1bypHFbnvA2mT2XwN",
  "key34": "3LenY8F1QKZH2rF37bFqMKbcdF9UFEc9FQvpD5JbX8fXStAaCNjPK1NyXTTAKe6bMmtyJuhdb2G8SjcW9a4cS7rj",
  "key35": "3dR21bGCufmepYiqiPEeNARFpeUMNAxssAD78UPWjSwf9jhwvQRiPFboL1NHp8oDXQE4WSu5XWvoGDhqQTeUXb6s",
  "key36": "3vqTMZQF3EPCekpJ8UTo2NCtACptmNPw1NDf6QoTDPZKKyXMWuKaGePWyZe3T5S6YDY1xRwhDR3Y2sZvUhKEExMF",
  "key37": "2jRpMHYTFCFWmrbDLuQvUxYCPrpvEUZP3KzZfQNBVAjvfsk19Bnj62XPnzYzdmwtmdtgNsQusCEDqAokyTAYRS9h",
  "key38": "onyHsVWhch2RoxdVYEiCyWn4FzdCoqEW2WS7HRXRtwpXnMFXmMc1HCHHiYd7HDncfAKSfAckPd1uSob3TZcqNyn",
  "key39": "2zezxYLLngRXNcs8ZZLNPjEd51mqekpwS83UNHf7q855JqSX7M33fzB4teFQXSxjzo5K7mQgNdnnDkMrbHtE1UYa",
  "key40": "2ymMiBBw2mWNESNZDiXGSoQhNJ6GYgashsj88HFnQgcqJnuqMQmYQF72L9Efv9jpKg25BTMs94WPGka71FN7Nmxu"
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

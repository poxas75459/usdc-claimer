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
    "ooE3tAWE3nUXcEcA73kqauBJw3hj5eLw1AbtpQ2ntMwkNQirLYx6CpoQpp3fXzgL16Sak9inJ5cW9cRf6Qa9FYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EBvt54aFJD6G5P1a6V7A4s2itrGeBPcrrNLpnHEvxjFUpa32kwVACBhoe7oz1GDcNHPfM4hd3RT9oiyPpbScv63",
  "key1": "3A33fV8tTfALXkHspLKKTbjPTD8DagKpgWh84FDaUEMWNzudL4MVAuc5oXZ9SYMrtucfrB8fyM1NFKuzcmSuiyBW",
  "key2": "37vNNz46cWGKARyvFjp6UJicfxeSw88Zynic49wLy61ktyxxEPc5ZYCYYJhHJVesjmHP2o2fEcGWU9CRv9V24XAY",
  "key3": "RXTLNyW8bQbF8zWsvtYg4gb6g4BLzwvQoqsxRDbM1BohHe26uUAmyGAGyQu7pJRELhYQ5VmFvA5oy2tDE644MnL",
  "key4": "2hHEtJCYZUYT7FzcBckuekPjtQsBmybh152hQhyK8dU99g2XKzWg73h2W5sCwfzNCagSZNefDg69ArbXwdNh1hYj",
  "key5": "YMCNZQyhHwNLdPQZzhzU56ikuFGGH7XoPgkA1f3AiP2isLDje2PFpR6Q8m1zKjNuxxSFNaVUKULjPehYXMW4bLe",
  "key6": "3ZoXYLEQapAHpQA12k23XT4Wjz6xFVC4AzqVsLTFBWGeBmpsWjUk6EtmB8oS72o2ziARMcYWtn1b2Y4XfUJR3hUE",
  "key7": "2AdT1HSraLzkmcaMoD5egQPNj9UBcVq32tYE32QgrscZJKL67gAaAn79sTstEfwtuF6YVCEMsGffeZxTQjNcnXad",
  "key8": "56adgLkLtCuwMDGd3SNUbQFz95t4UEiD8SiJKK9BMZzo7bp3TmMkAyHkhzG2W9sJFydwNfJVSifFLn7REJ8KrWyx",
  "key9": "59Nw9XuipG3mzfBzGgPAv7iArpTGtNbkBg45q45XhTqbSP4r79o6Z19NeY7vhmYA7QRcZDzYURQFb1PMuEVtjnSb",
  "key10": "52is4GhaRUNjjmzfE94DPcP1Ni3U389exm6cufuzChwv7oXGjS65bd6iQw5KtdsD1KpvbrRjxrJAQZkCqSyDFHG8",
  "key11": "EA3g4w5dLrQkD5C1aiYMqg2hAF47zsQ7uLoGKFMom88gFfM9F6Pebu8n8G19zWmLoy3A27CVgtBdHzTPE5nx9Q2",
  "key12": "J6n3bHMfjnrV3duyUUH2PwWGSb9VJuwUjMaHTx9N85rGYF8cUjuaPgxYUzbZSRAFG1z3qWgCxyG77fwYgrsNmX2",
  "key13": "5WhNqZAw4FxiypmWGzmPCV1uzzBvs6CEsMaaQwKNye5LXf2685u93hLQBn6dTLGYQwV8fv9AoEwYYDfe1wT2KH6U",
  "key14": "4s6RuDM2BVvjDKMtNmd3dm4S1BkUS91TtvwLwtwyLJ93Jss8zJ6LFU7zSVckPTM2gDSqivHFCzfhtRN24jZAEZe8",
  "key15": "4RhWQuFFi1eekCxnwPBkoX8UttuGt213u3JdWFJwn4D7wbmhiMLZ2EoRJ57k8zN32Xy9PKkiVLpgG9xRkVuNeRre",
  "key16": "2pg5tS1Z5jsbXPEDcVDBRcb7cZ9QtkBeGKeRT672Tt5p8gqqAY7CmjFAta4oboBi1DMGqEwQHi2UWWUaTG9GZacM",
  "key17": "3r9gFxempKkGb19y5hJVCqeWYPUZBe62xfdFdvQAnxk2SZj4sGcGSYKbGdrcfRdD9YzpL21gLMJtdKsQd25Yc9xm",
  "key18": "64WrK58b2e92bftT36YpmZ6grnCx3Baw2oZcvpjf8wiq8RmYhtSNEsvD9t7gMi8aWgtePLruoUAG42S6E4wShZJZ",
  "key19": "5pD5eVMqMNhYxer1GAeWajMMNAQrDRMw4h7X1sYBP9dHFaHtY67NgDQwaCAcH8obiKyNE3N25cyVhBYUcmXkvJzS",
  "key20": "5spPY9uy1mQab4X9PXpH7suHMUAiFHikakHeB9Wi25SYoT114jqSS9RcCKCU56otPGeU4esdcx9tuX2oJFfhC3Wt",
  "key21": "2UkyTDQuX821xwffEMYbFbPJX46xzjMEYonXcTAjKiQyGeEhPPNndAUbVHwG9sL8tpb9DRMLQi192iTiPbButG3s",
  "key22": "4XtL27JahJwo7qwGY2hCTWPmByVriXE9Udt6d9pVS6LNWdVRVxpTeHJucU5mBerFg5xgvSatfeQUsJo2S2DxN94A",
  "key23": "3T9qmgdqVVEg3RqU22a663iWQ7Pv8qaymTBg5STnJQptgFhTg9SRKoQRbwUtc6rZ1orRb1U5gfT1vbU6pdToXPVC",
  "key24": "4TrLQPoCqPG55pVZNhrc7Q99Lxa1z3bFZt1WhYshDMMx4cY8LB3aEmiU9N99JqsCr7bx6zW3XG2PGgjceGoXaheq",
  "key25": "8AMsFL3JLpH6Wwa76F7fHe6Q2fuK6Z215HjRq1HAhf8AKLiBRKnWLZdxc2Jei1ANaFNK6LGMdEqzy9ygVeZ9rzZ",
  "key26": "2hZrpqQtbNo4FLqxUWdHLxxWo3QhvAQ1dM2Hth83LJyzAvq2thYKHMAEWaATi1uAzue7JBV8J5NJugcMkz27ePf8",
  "key27": "2iuuhzrtr7B8rtdPgyp9U8nkX2QaswZu9MpCGvxHmRDabD2LMGpxTqsJLdcA1w8iDGX3zkxu1uNqwQCTYAtHJVoz",
  "key28": "54wZWHmrhYLize59LXkRW7vedsNWp6z9jjCMMZUo3snmj24Y3VsY44ZMf9oW48rbtctuDBczzQWb68v5viBorYJo",
  "key29": "3zePuiUgiLUvzZMZUd8MUczZN2TjqxHgJeRGuQcKL2ENpMe8cWFfshDGUhKEutJA8QmeyMbGScG2m77bRmaTctGy"
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

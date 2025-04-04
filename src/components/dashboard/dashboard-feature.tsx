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
    "3zuGNabzbhovW26nFWM1xxtLwC4nCfnM7svpUXT34tSfbtZ7uUUtmVndkhQE22jxLPq13rVp8D9CBkVtxx6kJRuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9iB8jjR4ZD76Wb3LLcb1Rh2wP5irMA1jVG1bAs6C2M1CkRRAFYrQovPjKfDjbZceeMv6vzGrcULMgkLTK6xw8xA",
  "key1": "57zeSXEWggdwWtYgc3VkAS1jxQ5YBZbTEhukXXdeJ4RFh78RdepDSPRxukyDbXw1hn33mrftGM5igPSU1qwn2uUa",
  "key2": "24suEz3FmRqjT3RrPt282wuANtGm3aXWpVJuUpZLV1CaJHrJYL1kXRDzZbo2F4uoZdnZFCWxeWSWt8JXF9aDMwwz",
  "key3": "3YRCAcTH4YSq67FHaY8ssZ3A7VXTaQJZdkykqKMS44NSNEWHJ1sqiWYgmNvMw6AxeSHoypPbEaxGr2Rgp5QZ2PFE",
  "key4": "4rc8F88XkzikS8SJinZpyCqEsYCB33QorZDQupndRYBTH3CMUtJY341TJYLRkTGtxNJmciRM4RrTTgBgTN9ASKSR",
  "key5": "2bUanEBuhjcqgrMUJrTwBVL4ihckeGVbqiEN5Pq3AsdFsHxr582LryT4fz3pTff28YRdUPYNK3eTB21NpLBeWsbT",
  "key6": "2hcHipTPkuDGs9dt3epFWjfRq8NfwRvzkW9vpkCwrdWNKh4zADwjF8WunGWbBXcahPhAaQwC28AyryEmKRw1xwTU",
  "key7": "5hXsntNsW1TXHxtBTLHq4ziTNb3h95NuiQ1JYHM4AbTck6z9MiTde5hTaDnPgHaPN9UGewzJehn1NehPUsjrCcUY",
  "key8": "4gG9txqR1YqpjBEUXeTdyR279mW4kYQCf4seUNqAAC9mnLzVBJvA3fowiUmDu72bqFCRxhmtaftWW3mmYk2HSh3c",
  "key9": "jXGxgbHjTJgh8MWLBnMyhVph2SJb3DSAzryGbhw3beswfvvXADGMZpWKHeuLBxSnbsJhYgq9XrRFr9xpiLWAtmk",
  "key10": "2H7W7h1ZjEnEiSBeDcV6KZ2LvyS6hupVuBeEogYYDtWf2mjat9ZKYsrvjovG2unfdu2VtcZxetNAu2xXUMAe1rCw",
  "key11": "4kZGKRUJmcBYvq82V34E26kpftfLyXUBA71H7jNGg8ZCnbfMAGRU9S1Ftx4N3EogaFVGmQHwm1V8sqdzf4m92waS",
  "key12": "5hPfYvuTE1mcLu9JV3V2SBUVyq4A8np3Y37VcNaStCG3bAnQBo9wznmDPMEd3N2pB1GjFpNZ7AGhAMBFBhVe2xzm",
  "key13": "63uiWrabgbmrEcL1Tco3gWSW3BkkiWmFqwyPYHR1Ck7tovwyfvSZvyEw7ksqpq9SUwqL1mDKU5Zic9Wi6MKTWyNv",
  "key14": "3NymCNSDLnvaJ4PYkKUooEEkRMxx9qsDrF1raHaB4LrUkLpN7iH83ZtnwuV2unv5qFgnmW7pMjZiREQKhq6AkLZf",
  "key15": "5UisyZk2ekZgmX7EjCQAiFz819WXGA5dgYN8kLXoiY8rNwyKbjNeCKmkSt5eTX6wBxtHLb4FXBahEKLFYpPpn24V",
  "key16": "3cjGhkjvjjwNhDAzMJTgzJkeqn2WW4L3q7QjsY9vnnADbLPmyqgpaiRXoMNCHJ5E8TBAoGGDQJFFvYmsB6uR5Uzk",
  "key17": "5QYC1usnumWPsbrGGhGZeVKnRLK5mJJ2H65u9JE9aCC5Mp7zn9CX5sfSMzu9ptPyFuB83j1UXHjD8wdUh4dsaZRy",
  "key18": "4mwwwsCHaSR9hwygFxvAbkFfTehHNC4nQxCmKMcGdEbUbtQhJF2zPFMvv8jPoYC2u3vnEcGs5LYxUGde4EtvLw4f",
  "key19": "3WdMgSR1wgY7Lhbxty63WvCW3k84HkwnXXrXv4BEq26dJXiHToAwDR3L1YSSRT62nbQDWDzewXDCyHdyYyXnYiKa",
  "key20": "3UzbuME2xHqRbonXrZqrdm28QQq4g7PEu9AXgjhdHfEahZXgZM2trkvhSudHbgVUgtkJG97tMERKZSdZ29FNkQ1E",
  "key21": "RzaazV92HVDnZZzhDE117sY1NLcFzxQ8vdW1gTTukd56RvymUbiRBBhaf2XHwcsgM2Jc62oqEkvphuwtzLUoc8Y",
  "key22": "fcnVfMTSwLanqWKWTZneir2vudpNcVkUmnk5SkRPBDcuzusmtyYwHTw4sW3t51wnNwymapjEpdyMqX6ZyWbevyC",
  "key23": "55NmSF37Fv4b4hMjNSFaw7nEniox6FcBvHZhUc6Gh4QCeTgtCMrHDYAXytTjHPsazJorb3A446ijw88mg2xZvs8C",
  "key24": "3Cqj82QfBLKNEwseofTAqEqTFVzt8XqzJrf5Vz2YE7WrRidkWNsvurApyfWvSwXS4bXvThokLK7LZKnxD1nz8dVd",
  "key25": "3ckhqmLHB2PT3DWS6rgeo8SdirnvYPaZzgFGFQpVWFxUFLKEmxvjiCkFCp4gn1MSs9KpDDkJ8UEMFbXy8dypagMZ",
  "key26": "y1vdiBqDiL92v4jCn4B3cK2iz2WQCxM8mHZPjze8M4NJ6RXvKGRWLjAn2oYVZqKSxTUpebkxMjuptGhUA5Kkgik",
  "key27": "hwPC57H63vzgp4UHujQq5fC77eN21HBEeaBb7rnZ75L69WpMwTx9E3F7rvqMiPvnB8v7hqzhgRrXhNHWEoaqwuy",
  "key28": "4gDQ6Dc1XDczQ6geZaKtxmeJx1LwjoBByPz2knSUgj7TR5mSwHbfAGFJM8uYavsBq83kDHeT7T7fuEe4Gskxr9QA"
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

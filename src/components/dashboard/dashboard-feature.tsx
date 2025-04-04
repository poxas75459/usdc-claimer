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
    "26MsYNtKeX4jtriHbPAgMvjnSciiqDtLuiVuz9JngoRDhCXPwRGBoH7nXcy2QF4nRaJaeQjoCYXtjNYeo9v1Rw3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e3MHqmEN1vHGohD1gaHbprmZxgXrjWfagsR5QEugCGtp8ivtw4MrwLwgGND9u9GjRdApDxhDdRkUaKwYPSeTu21",
  "key1": "4YhgF3XGgrxJVB8uL5ecQ4BdAYXYRRNo4dE5KnrT326AdiaTusriDJ45zzxaLVU4dHMmJFDmd1kiBE1kg8igiCgV",
  "key2": "3zVGb9LJg3Nki96ZJTCAzydTHe8gsvGhSfABqLnX2UEyTU6AcqRdTRBPQb9t71QR1xxwQLFfGqRch6pUeeBNw53D",
  "key3": "5Xjb2brBPTPXTwKYfjiDD8eSgcKUmfdeTLMxnmHkHP7hvsYEuyq2KTjKuB13zALu2u9jiWkcX4WVQP7a3GDARqme",
  "key4": "2juL7KaQVSTBcLis2GDW4Dzpit9s2aQKbF5fcRVwSuwAKhwCj4pmHYbzHx3fPxReQUhVLMNRdyxzQV42523oCPDU",
  "key5": "2xakq7mq2J7ZJ53povPf9UN2fx9pKRQvqfkAkguNAV5JVffRKJWePPrVHJvrKsLBsWKG6BZsQiEGuWBrNCBK5pYJ",
  "key6": "3d6gRqABZJ7nD8PFy1sDZ3v38taeWwxyAqGpCxCo9NR5mcXs7c7CyJqh7ctxX2E1ri2rs6Psj13jsfGkuSMX2KHB",
  "key7": "5Mp7HvfL7VGFX63GJmRoPnBG9WUNtd9DSUJCnwNw6GbywYRLNTdH4GECp79DGsfQ6MF4fBPU9u2Yy5UyvHv94dKU",
  "key8": "49Ku4Fb498DpsgmqLMc3k1XckusmzbdsYo43CP551N5NAsbkDdBzQEMFCTvC8z9rTbn1aPLEfbvBZZTkySC1UBBd",
  "key9": "3KE55jm2Lb6zhkJ38XHXPyzZW2s1n9f9c2VgnorCpaoCBtpJGcUuajv8S9MVBaHF66ZSzceXNNwRPnXjBgjFS2Ko",
  "key10": "2Kqgs88mvHjt1AGDgS9P8oTZvkV7nVZBAggd5dtKrdNJkqq8B4bqRcCgyUaERkqVZqE8wmZt5ryRCjbZBAxRxfS",
  "key11": "5UKfRUNQqEc9uRDBpMm68AVT1Een9fMs52H5a5wYrXt6iQNE2JLHWS5Q5Vw8Zb2xCf4MjuHak1Cpbt4XX3ViNsW2",
  "key12": "3QkYgkwZN3KTpwhaB2tX9VxqjGNiEYdAByNGNasMCKfMHzAYVsKKZY57ur6ouhGRrB7ApBMcGimn7QH4bjFts2s5",
  "key13": "5Vaw4FDAUvLXsCCWPbCJF1aca1yiwnYmSx9tBsU2Bbwkc9ZVGcxazhDUgpuUVLGFvkitwUkAvNgyrBq2au53PxUz",
  "key14": "3P7xzQAkfidDznyzMt8u51LCgmXDibWCS1JkXJt5uhEvR2GjK3Utts6oMC3fJeeFJX4owdL1YBLFFqkH2bRpVFCu",
  "key15": "FASvCmVVQZAHDAs3u2KaCCNNCQYq2tQwme4RmzydJRDX4NZMByh1L9hRkZi5XE6wPchT2mh1ojrffc35zNQ9Y1Q",
  "key16": "2rpu9dmyqRik9jSVguZgQ4BD4yf9WPVa26Bhp2G7SZ65gY6om55qTXuCigNTLC1MWpUiMRc9MS2cE82hkuCGBKKn",
  "key17": "2xaZsCLZ1UioWzdHJJUrkZSJG7a3BWdfYdsRV833YvmrKeenvKCvKaxLdKiw4esnjCm5cA8GLiiyNEdYHj6myrQ6",
  "key18": "4zcj1vin4RHNUcjTZ1dExaZdpoHje87nFdDt3ws6dgyZ8yYeaNBAYcXRgoGsu5ZAZotvGzcB6VseBHoW6mq6qhUe",
  "key19": "5vxTEAUUeseAAQzMVbuKWL2FM5R7bkcEquxCCnQWVfHN36KJdHBLHwoRKmPpTubMCQK7gnyB9npA5jXS3VfwfHkc",
  "key20": "58YKbcBybcu4EvZLN5NE5hcsx2sJo1cW3NC6ycAghDQ4FwcJn762MQyNAMMTN1BHe14RNjKXQbQusvYiwKMJZ7qs",
  "key21": "5J1QbinTAaLkY4AUQZRvu26G1QjfYdoAE9D2Wad9PzxFJQwcgjaEQrHvJ7tvoenzoAmnRnJhApVSu678fZb1aBws",
  "key22": "3Xdmnb9JnncpRQpA9ohGmh2TtfygYUA7axemMYeSNKvjKPY1LnQprEBkhuii4KZh7Fmgk3wsWSfY4gof1er4D4aQ",
  "key23": "nnCQLgkPdLY4DLsm7qwttsDUsdijFVboo8qbn5cMS7p4XgbcC2PanTy67KTZCTVi4JfDDVk2iW5wxzJvpShCi5H",
  "key24": "xsetgqZvaKQgjZtYeQPcSaZUCRf6CNscV2keGtAhBPnvUavLM9rDRN3YVaZigeXssNewwfEBckkuHHHn4Ej6zpZ",
  "key25": "3RuAi64nmRNbuX5SFQ682qU9LYsTo8ktNHzapntxr5PD48ub8eojNKnArBYP8gyaNMCph4ktprKLdqTzD7FFWioQ",
  "key26": "4o1krJS2zsNVioZY6FF3XyGYbfXrAPbRSeZ36oFz6XjieExaTn1cv4MKje2WfPz1SMipzUCsCXjyyXtE3aZNLvGj",
  "key27": "3rthURrgsmV9MYScTfEzkG7s6Cnasbes2rTzkQ7ZMRRd7RuVcLJcmJPDoFU36a66qFA4BPGJMn1AZ4xei4mpAfMa",
  "key28": "2V9is4odig2tPyuABVhHgEEsH2zP5Rz9yJko4xR5mZznJjdrw8JfpyYarXSeDFgoKpy6tPDTUzukTFg9BRwzvNFV",
  "key29": "3pCaL8bb1W6vn5ThWj5gCmDayELoJHQCNsege55EeUE6DhdFNAatsSDxYxz7kwumzdY4YkfxkAuRyFgKpzbTsDAf",
  "key30": "5v3yJ6hcPRyirjyeYqvSwCo9kX7pCJwAPbbsB49jHnmRNgkiAfbPNVywfJws5qVJHaQFHMTQtsRpHNHBSCSdGCiv",
  "key31": "34QfzymU32eDUTsoHETRPxFx5bzZ68ktDYjpeCtw1YHyzie1wjgxfyzEH2WmUpCtbWLRY3Y3TPJTRQ4thwhZ4S69",
  "key32": "3nzi2n8bBq9KNmvUGmGndzPZRShGC673wHULwCVFA1tv4aRGbMKQVDGbnpPeAkyDfMvBR7WudpR9spND4ZngmqXh"
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

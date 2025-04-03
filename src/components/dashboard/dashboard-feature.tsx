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
    "52bnGK3qJtyBM3TXFEG4BfeZErQqthNG94t33apKS8x8xcEoPma2H8YSD9rBG35bnuA696vKyKHbvy67gDUAvKSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2apPwrUFQHE7kFoDkYQN9866V4EoL1UE7aNhMF7hFxt6bSLwvM1ibWdWJLtMU6GzWEGogU1g2HkwXvQGEMNe6RDY",
  "key1": "4DG35fN4LWNNjdXca4wcxH2J5K38iYHXtCB1cWbiUGLY9QMNe6GG9YuZ84Cw7583hZjcyt25JxPCDGMqJeuh6mXB",
  "key2": "3aNMkYgRDi6BZmHttmTYnvwVLBJUT85YhfmNm5fdZNAjNRBpx2stJfnwyUgFLyutnnnVjZhuzFfAbTSCV3F7nRTA",
  "key3": "4XZRxMtWxsw7MKA12xSvyW1rjeRm9XTLFVxsDaKdsXNPz4GL3jDBL5yczXALUXhudHr6hc3kajPd93zU1jxtHo6u",
  "key4": "4QFhMxVytfQkr1Quhz2EvELu652dHVsKDyuJcCw3NmDSiGM4gvSyjYz1xAYdiH9kMK7cFr4pD2m3q8CvQxjTESL3",
  "key5": "2vnVpKMQBTT5SHjnJiEcET2QhnzMYxsK8KwK2fUz7HN2uTjzZan6QjeErnt9ze1pCU1JUKie5kSinoY1giez4Q9A",
  "key6": "2QeUPEXva62oZTENbn1dwca828cWRyXxeKojExU1ixn1PdGUcCTV46h5LA9YTteQfyMjpmEpQ7ebP4dnokmEjn5k",
  "key7": "51yRFVGS3DqnU1R6UkQmrWf6rjKxnhQt1ikknBVg7XuHMfMzezbMJ52jUenzTTU1mFxD956qg3ikvKAWkSt3coTe",
  "key8": "3BDwSJrS9vEwVbH13S8yU16jee4s6ogCSyfdZPNctC4yVmZG6aLTpWCvEf1NuJJBoJsf2x5oUait56LCcaM6g1NQ",
  "key9": "5KW16bPxsTRTMfiYQieb94JPJvUVXtmoEAvmEwCVSUuPmbeTYyuFGK9Y1tRKCjnyGHdQtXZLKuPFXvQQGWtyzQUF",
  "key10": "2e21o6XeyVoV3Jc1mHMtoNdhGDaHqv7D1iHoJfXgRSMKACPPWFREWgz2uShp6ygnx8CyfnN9BCKgm1a9pkVjYGZK",
  "key11": "34HqUTATeg3J9MND3k371VPba3Km8R71w4nogoWxu5w8Krjd5LTVw3C14aEMEbsB39YbQPhi3xvyZCXcczhJTygr",
  "key12": "22Nmz5bdQCqjyuRxVp3cssCYiYnesvJz8oCrvDRgxLD5r8r6LhJBhDnqfozBDAMfprEEmThrNwb3qqqhY6sWtXSY",
  "key13": "4YtBb2VyAyBZ7A9Z9U44Wa7KGA2cyU96uAzcty3Q3yXQyHj3i7QunKCmvUTRaoB3gAhh9zRvc82Bvg6caTYr4Pff",
  "key14": "5ntRNdnMk4sKbfqKgYUQtuUYBTnVgDgk9pLn1BjEoSN22mtuacJoEE9yxDUHr9axxtbSyiNHaKpnTae2cGvBtXZM",
  "key15": "i1ymibC34uGbtRr1EfVeNCSupvDHTmDeKYA6NrK2VHhEk2BJYMBwk3szhuyG6Q5ptW2rgsqESpSB54EvN2j5Exi",
  "key16": "2rT5zzhrStCCyg69L2k9NAQtR1y7C3vWfWaFRG4RaFK6L8oLrXit9zauqFNMKMfS51Spf53Gh6cJXz3KvvJhz74D",
  "key17": "5EpUUikLf6ukHqtbXMnRDQCk1kyDeiedanFz1e4SvH5exeyJV5GR1LYw1HWqEwXQSkT74CYf9AU8YurkqHJNMEFm",
  "key18": "3n2mN99MxQtTkfpFmgYZh7dZk8K6asWGzsaJUp8xsyind6aBxsirESDJn78BKXkkQbKGBXDYdbU6voXaF1ZKmFnD",
  "key19": "AKDLLJw4a6bc2B1GXxxuT7oB6cZG1wo8PSXzU4Zrbz1NgRgWRXMNVs3xiovqyFVoQjYEXMtHfECvL4daiKhyWri",
  "key20": "67AmyuGweF9hJ1edkV4Z8qrPCSnFpAnmW2KyKBCpqpgCWw1HJwCfYQfoMvfxzskEsQcyiSiWtthavN6tRXVqgRbY",
  "key21": "E6SBaf2tf9JkeKmR33DSGUA5GTByckU7nB4Hb9G6ESScLLRLwK8F79aryoqFhJjQM5oK9YtUcJVsKyxWtNEBof3",
  "key22": "pyH9husYhMQnu4wbR132HNzrKrqwM187Jhpeg4bEFRe2RBxfQ5y895iwBKmD46mt1chJ6ohwmPFTupJLrTQEycE",
  "key23": "4nNbJVTrVGdGCKB9FQQYAE6c4aQ5qXq3vrn5GwAsUyFzareZghpdRs7rMChwTumKPcNZ82WuH6SXVG2G4d8hzFHX",
  "key24": "5cAcysf68SQoFQrY6fciZiaijHrqgRdo8WxzzoXFiByQHqU76mApKmjmdtPLbcXrgQZuTGkbtZdwTefvLRhmn2ip"
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

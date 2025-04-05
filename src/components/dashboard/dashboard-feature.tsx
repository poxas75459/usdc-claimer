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
    "3o7qEN9DrSLuzwUoQ37SytxohX5n9Y8Pdsnzb7p5EgSG3VnncK9dksFhaiZ7jpJP1qQKJ8GZPXg3FaQLSALMR7Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ko1eqrYM59rX84UoeXTqw17BAg2XASj9weA25cCa7pT1YzrN3PSbxrkpEgfMuWUCpQH3LT6k7dbFWAeDwnoQdQC",
  "key1": "B4jbvEetivain8k6sSkPWrjZ2Xic5eVgAXBURFs9mky9xWsmQXMPqT7JLPKn9QBgUvD8TJHEcQknLyAEsKriqEr",
  "key2": "53ghAhWvExVmUDMfXTY6d1SoZQsWhXuPtaWsjY6heNKb2aV42TGxfFa4HrRssc5XHKhdcRxgm4V5w3ckhSmHTUc9",
  "key3": "3yKbdps5neNBQpMgBWZfDAhnvZ1zcwxPKqvxwzxRFPVZGbKcuBeURETBJJV6oSxrhV5EAYQ73HkSsvcD2sqrbT3M",
  "key4": "5PAoBfsCjSqMygicY3VVhaLPr1Kew96uu3Lun1bB2HgZFTsEmwQoDQfG7W9dMX3iS6sG9QueuXnTA2ArCU9ow644",
  "key5": "98GVgLXjf3MuHncq9QwMMaAoPmMn6EBBzZrYgsSRtKsaj4qmoiYY2cHN97mUnWYYYBv2TVXic7eHP1WW7rQxA1D",
  "key6": "437yFuCFcbZdFsdLLZkM6Ay8jDcY1N1wX8VWZuBRFtCemtUs2FQsPi5ZmZuRf5DoPefYnJtDBaKZZ12kSukQEMz",
  "key7": "2r59bybqDtnWRD7HZ1B6uhFzXrguZEQFH1aWi6oJTsZU2Vp5u1oc3sddnbYdydd2fvJrRp1gHwNGeS1iSrXQJtAa",
  "key8": "3UipX1aktCjHS9u4fMayTsU2fSPuqwZ4LsK6cz7aWS6oDMAit26DnkQd7tW7wpNPivEpYhHZJxJF721CDFPJPjvY",
  "key9": "32hqUKq9JoCE6nDsacTtVCeJ9zekX4yXssqjWPpQ72WGrdzwRtQjMcL5QAyC3gt6Wpf3ZvS3HdBhcS4tSc65CMYQ",
  "key10": "3FmUxrM1HrEL4Ec4kYJHgVekgh3prrCou1LBnxt2sJP9JV5WLkBJcp3AkZWbAAv5Kp65f264KgRtxC6fmGLDMns8",
  "key11": "zVBg1uhwBRdmPrXaVicNokzNBwjyvMKcUWtUGqiZcpVivuA8RVpReDi1eAkVuD6g2Q2i9SPk4VW2CS43fizP246",
  "key12": "5t5wxcuSeDmBRSNCLivRJ1g3sD6qQRicF7rk3XCN1bmCN2JkyVZewXhXPux2ZVU3ioSruotKM62p1GmZwU1RXDtg",
  "key13": "29sHCKNqEdeEbYik6adxCUN9mRnKumqaaETZx5VFfxv2gxVQfBm4cgZEuGpRxtDi61qREZDsaCiYihKcY7cbd7u9",
  "key14": "4agnPhHdH165DfmpEam8mMTLfiDLoc8zRf1pqxr2msp4P1dAP8WE8biB7JhmCAB6gVQW3LLcmrSvNhFonCs6MLTo",
  "key15": "LTqXtYQzR1cbpXH92Un7Unzy4KfaTiQSRtw1wAW9ZQzH3vWeMWp1AJBYomrMifXEr9uVpvYFECqukmyAp1MT3mz",
  "key16": "2aCzzTBhchhDUsYqC4WdmpAwZkoqefSegfZJcQm2oqxLDjQzqWAhnpyNERBZkXA3xLQ6XR4uHwPDuRLxBaBJFL9u",
  "key17": "4dcGTc9kPZPgiQfBXetAQKmHsiUzNtsAfiqtmUkBP5Qt43zqxnqYeQMwb5K92Z2hwqHtaS9eaBqkZ4QmauKFXEPN",
  "key18": "JiK59DHwA2D3KV8AeioSCknZJYpjyNNXTg6Ctv7W8DqNEGnmHHuuCbogxf1r6hK6jkhnmr8vow4pgGyrDLCZSA8",
  "key19": "3sH117mS5TNomfpronPdWpvdwugEmMuiWv5YvRQiDZjE7DLh1vkiPqBELgEeZPK7aeJr8tVwEVQBxHpGcuzW57DT",
  "key20": "2MLLr6ZFCYr5ZZmaZCvoX6zZYwDTj1pBcK9r2qCaimtBDenxrWmrV4fUjeSBbVBfiDFT1DmQNcb6FL8ReFSyLjJN",
  "key21": "GTqjBkFa8KyYrFkkQ3k2tu85mQvcpVAJtYKTVxD6wyfnQ7xPQDqGHkfEDASoAekdNtx92dK33sCWpfAeWsr1fyw",
  "key22": "4teW1mGoNEQmDUeh97bSjaAB1M5yFjYkYyoLNoN2SkW2cew78FChvtDjWYb4mFDTR3EgK827m6LXHcWvKeJU4mXh",
  "key23": "4iSwHpyJEjU8UoGj49WZzT6PSSGzbs4dv36BddAkLDJYYFqdWbMRhkx9cSz9H6TXfaaJn78Fvsz1cHXwSVnWYsRJ",
  "key24": "oheygYojmpxVLfwLHJvaid2DV6KbaGzQ8Rrt2hoqLD2yfyw15C6smqCSRm1nNBz5GhmAhTUsbqazk7wLeodjm1j",
  "key25": "3b5AB8s4gDzkv55TFQdoJudU66ePRmeHfYyqfNfTP6fYYNksQrJA8hb26B3qnougmzv5gQde3nrVxvLVjTBXav2X"
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

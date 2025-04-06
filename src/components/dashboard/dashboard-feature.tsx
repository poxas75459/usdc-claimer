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
    "SzLZC4i4hV1AxoZFhUW34JCY6jR4ViTzzMahX5xXhRh8JvtgWitntvWrnhw9y3TVzhAFUob3KbVT4RtT2XVQs8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tD3j3uLCf4uYAFGQJxjV4cvMnNHcgkHcbheeHWMwpYkFbs7gAsCav6Wd5UP9wDuCwPg8yQ4kCLVjD3NRBjTkdT5",
  "key1": "3JcQk4LwWxohDkYpPTKx3obrcY7mwSGwbkxiLEiGigJ79vZFtYR4CvsYdaBTtrnekxUtE1RcSgqn3xjCcqone6ZP",
  "key2": "5ZeGPPYCVZQ46ZZseU5Gq955tRTUnxx8dhVEsPvZ4PRNcP6ohZsV1xkXUGdaeqffTWZxdct3qmtDD4khD4RXV2jT",
  "key3": "3YMD2ZUsZ1BmiMqsPiwP25xDJMpR4bfxd25jcBgzjJyYHrQW7MAhtQuvMTxFuUqagHUq6ur6aLfCK6mjekF3Mnm3",
  "key4": "5wkwq9iaSJpycqBoG1BwzJoZn4g24DC6qToGQ18xmYjZETiXqY5tHkWP8Y6BKgEswpGT7Wh12Lp9Af32JLtLnWWb",
  "key5": "595p1xYGjjb6UCFexNGiZovU22hRp9q3sjmauzxTu5aJXsid72tmfWrgZSGvTnEQBpgoQpyAwwsHygj1GaFJV4Fi",
  "key6": "2a2uajNzhob9pwoq44o8geiTdbCvn7xevos5B7PJCevCkHnJXvQVGGrmirLSrg5LbARe97BoFvE1UsDNNFZf7dT7",
  "key7": "ooqTmLhv589ooNDdTPoHFjeuezCbNsHaccsk2VyM4fzQxsGQH2FY1jiDeAsdnGahoftrTzzUVq7JPXVPKuU8yrN",
  "key8": "4HGMPhNu3ArWsUtbkt8J7ZYfKDPuCtZwbZv939UFWAL1RVMpE8VDuRGLXdzAZeefBkRm6yFAfdEzHHRHV6Rvii76",
  "key9": "2aAP3PVTD4NNt9NgeDAEpqiUntbRKqtGE1GsMZ8wEdq3YcDRPkVGbSnmSAFXSykrKfxVks8Pdoy1ZWSkkkDPHnwr",
  "key10": "3LU3JTENcvytUgmLKZZwKwcbVQ2C5iJT8iipdw1MnahDyLoJUxNTaVhTHrEzdi8fhEQhDwEVt6S94bJnQoZkizew",
  "key11": "52ShzyM8DPcvZbQaHgcJKf9E3QscHGB5FwB1pQ3o9pgnEmr5arjuHfCM44rELUmFtuRHjw91pyj49atpzfFaNBG7",
  "key12": "3HN3BVEBZGuXyw8LG1yndaEtiexQJ3NXAUQjZecMfCDFxADQau6AtjPXHtVEjduSMCmyzDDJGht4fMCeUi8nhLqU",
  "key13": "2P7cugA1ZH4GAjRyEg4yZo94c9pPpXsUWk8QCeQn8FB6cZETcUSV7i6LWnthmNtsCFkMiS1bPS2XyEsyNJPnDDN9",
  "key14": "4gATc9bux1ExPFaf8oJDTnkEcYGfQABThrtgtxMehFTbjfEPuJ1YAyKepdcEjya2VCNWToyTFqDeEUkcJgs8MV3s",
  "key15": "2TRfuvotmrWeBoA9t668C9pDz7QiCShW1gKPuBwwThvri9UFgAizwNWoWWZhNSeHSAjdfxvTnjFkoZnWWg25EJWs",
  "key16": "Z4zF9sBmQ8HjvXNebVygRU2iJs1F5rE27eRkRbMZmjZ3rw3t9ZkrKEppfTa4x48ZQjEEqGVE14cpHppm5xn1YeN",
  "key17": "ZzXwKpnrHu39sthM52xMVGFkyCDP4QhpPMbhSZoSoWZjpsSZXx2Y9gbS3pWk5DK4KdUmDdttc9SVkLeCcZL2Xe1",
  "key18": "3bvVSNrqhd54R1YQkXLzg3HUvyxsMGf1UTweZvtwxApMMdi4x65KWfWzg6dwafvJhQwYDnW1JuzUhkkhCCQFMtM8",
  "key19": "5rDg4TH4SyLL6v8YMMQHzcTy4wuPgR8M2nDbcdAXikfXNBozcmUYb71JTssXrRx565YRnNtsBC8CSgpDAKghVJr2",
  "key20": "3wA1SLdo1wAM5rNakN8R33vqD5rrrhEsUWidiB7F7e2dG42gxKdhxYmzu4GxJEGpXMxU5AGqGuBgBzvShqpboYLw",
  "key21": "2PC6QdkvpEYERTbUAXk4Nxefv6Ri3rbxPS44a6EB4RfGnUESAVgsr6mdNzzxrP38TJGmSyRasTYGQxBGvaDpdmLT",
  "key22": "2Vvco5RmmG3BJeMTamUpgXqYgL5CNsqSSr8v6aFeWSMYLMMip3VhGvEK6DZtxmrjzAvrDpi41gdn8LKmxc7WXep8",
  "key23": "31kpEPVfb3VCv6p6nYuXHMHCedo4DWSXTWNBETEnuXQGzsTaDwWGAYb1AMJoNo6dezcXC2Ddt6vuiScfLPaut7Qk",
  "key24": "5b72jji9TzmfGCoWDA1tGgUcYEUZRnCX7rznYVBwUSnWYdS9cHef5va1Bv2PgFXhrYbLLh7vqXF24A1kHd8vZni3",
  "key25": "4pDtLRAeYte7DtgQKt9JbNwRTCjvtH8QNAs3kYQiEQZh8F1yhfeAfQAzMJGUVCFiZ3UGawURCp2do6yuz8StrDjf",
  "key26": "3Xb9j7UE4eVNMMYrMy2vmCfT364pK9vLBhSFcLL67AQzBqscW6MX1fyMG4NupDi3GJ22YR4gLQo8zchuU58VPybj",
  "key27": "SJuyFdSXHgeYNqpvQkHY2HmrzxxJy32zUrup1YFdZpNxiht6JkzpkPgSxU34cN4fYYjxdSGdFqQoZbCFrGLLoGz"
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

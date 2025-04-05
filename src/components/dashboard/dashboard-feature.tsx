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
    "wkrWf4GzzAo1xoAiYyc63AxYuKrcAtwoDyrKDg54ehYmc3iJZXBZwKQVUmg2c92StvcLdihfnhoScJCCSX5i2VF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ixbcPyt1broxx1dc9Fni4CjPz4SzALpVdHvjVr2ChpxYWFJseZ2zsjoBBhMKW8NN69ti2U6zBSoqRbAHtKiN3mb",
  "key1": "2hqMTdLWnYb1LxatUNZKGySxL9uBRAcuCdmhiw3KqVWaj9NKgCvgYgXxscsoeVdKAvWLab6pPTwWEeLzqMVFiXpQ",
  "key2": "3vgS9WMP3EPpobPo1PCGvmvL5vKr2tye5QLW8A1cos1TtWrsWuMqW1mYXs3FWhC7g2uoCdnbw5CBuXmvZgxt3rYU",
  "key3": "2znnAEyqG2DZLRtxLefsU9podSNwhpbohfEnNWGW9ggwPkwQMiYAptLLrfYSw8Mj2WpNM8zUUwhumW9gqAdncLkR",
  "key4": "5q6w21myAsC921t41rge7SMYam1LEUgH6hrbVEUs3vJ9gv3tAzxaA6XEp3d9jqa1dPLWzbNKPXMXCSaHW3bxiDq1",
  "key5": "4L3MEbzDUHnALqPGQtSvSYtquUbNZYR51c9snNY78RX3gCZhdUJQdw8ci5ehQtyK3NKDETTB2y65hEuMPvAAygX3",
  "key6": "GdjuBvaX1qBJrAkAcZ13tHpELVKWGpbJ5nnatCRThcxAp1wtWsGnGUvUcQXJgmHZ6NPdMAZeds7xQJqyZ8jqiBH",
  "key7": "2aeAV4S7EJeQ3U3uFBM2buoTrTrbsZARswtrLpyMBERiJMawLDueNRyEJArKSwCpptVA9ib3dkJSpkxA7kQGSqLm",
  "key8": "44dvoALGdwvdiJYe45MAECS9GFWCj7enq9fw88iPYeuTQ74RvhGEBYMkY24wskMSz85DjamozqMFkFQ2XqKe1S2g",
  "key9": "4BwZf8xpdpyiPmaE7idaUBpG3WKHQN7m74n9UtuK3xCdnHnWbaMRrgi3v9vNjG7s1nmoJxbizSZrcQ8Vj9NdTkKj",
  "key10": "5DwQbYxCKThKyZMJw2GykpiCvgkSfs7ieye7E2xVGJY1raApQ2vxQimkMAr8YJLkKjnYY7rpU3KeaWRu5UAfejMT",
  "key11": "33fVsJvg7WhpSPhU4PP8uRSGHGG4y2KmEy9BKdTSZqoJBr1JdDrTjQRm1VA1Q4Ne4yUBHLczZUbaChnHobfUWzNn",
  "key12": "4Q9B4WwHYSB4PcbjjAvVZ7MfxY8TeVxMePdtXN4qa7DxUfuufazDTB9N54DR6bjEA6bDXpSJLU2s9y7nvYfbHmQa",
  "key13": "4Uy19fzBR7cRi6p79SzxAAPPhwAQbCVurUDrrRjsNjsnbTtA9s4PUmT5e8mdLCiXaT4ZBvYHqPvB2mvaSHtkv7Mc",
  "key14": "3eBD4hGfZuFuTmmtzusSykLXNVNDbHS65PnzSwq8vpiDnHBzAmUU6ypvkVea2BfstMQnPKey4e3eE2VEUNyA6asg",
  "key15": "3daQhn2A7MTArEuFbuHaa14xPg6HTFhW8jimXpZpn8VbxvAnUXTJE3Zp1i9u5CGhrms1EBHka98yQ7Sd3Rhff9V",
  "key16": "gse9S4WyTCZvLLxudS134zRFkAYTeMnWkt3rZf2pAr6SYVaHhTdD5mPgdVPnXY2v4344pCrYQBns8KsYt1W5fhi",
  "key17": "SxQAUNhXwTvEJTNZozVGCicyFkSPUqJc3KheHBDYGWwS3d2wBWHNuiFecS5AxA4d2j3aZWWyVSsmGpg8uUtGuZd",
  "key18": "22kS5kYYcjqhuHta2eRndeYqBh6tHJSrpiCbhBEGsvVfvBAgxcTWHvjWLLeUVJUEN4k5TGFVPphgM65etVWqABnG",
  "key19": "3AJ5WW8X3CgtohMhjR5mPdFwEQHJ9GN2WLBRQ8ykEMVs4VbCCseAMgScnNL4qNmKsXs5xbbqRF98qdgUAoduQerR",
  "key20": "4haaypWh1xoSmiW5auNSBsaGJjKu54TDUS1WPmKvrdzgoZEV7H6fUFtHmCXtzWmp6krtsxxZTL8JrN7B57tjGzkd",
  "key21": "TXxsSUcwhHwFxjDEifp4CYjXRp9NG7withFkqxcRDbWtDWCY38sa28pgUA8MkUXTB7HnUTm8NfQvrGwMsmrxyk1",
  "key22": "2YfQnSHDAd8ZNnzhN4QH7SLp6q3r4ohcPoWbGRWUWR5GM14VNYXemxkTqA1cKXrpj2chuDokkjvp2mdNSdbJLwMi",
  "key23": "NWH8MpsHWM83g35Y4dCsmarqNvD5WYWQ86C4Y9kbXiBVudnqVUjjf5TMa7aYspDafREF4xMNajETXUPtjJRPMaz",
  "key24": "486y52oVyEa9pgpYvNhckidbWVE9fJ6Pq4sLXSxBxdTpPwArgdEJJWWjSSTG2Pk5FMfQj9aiV8k31Y4ZQeN8S2kd",
  "key25": "3JAwfWdELsoK677Rmquy8q3BN5g4RpAgbqV22XtJGDmfZSAMDFecUtjGyYJDQ5L3V1EimijdvKw1axAK75vYxh7x",
  "key26": "2motbcBy5oeEMS6bKYUx3iXmhnwY5FRb6DJK4UDj9Ux8uT3EXtEj4G6ARmhHp32Qsgwmc8R2QXtWi6RKPqU39sRc",
  "key27": "21osQPoyFGNxcTxUuV3qHyWgVMFSuCnGodYHX3Y9HTjTtofWnmkejn6b61SP9wo449FqcWvJugKDumfdfjNCMvBV",
  "key28": "2KEGLmYA4Gd3AcwTAoWCAztiHd7KagrTpR1eQX98BL3kq1qXsG9Z92bKDgx6aJjyJNjByszZHdm3Qvm9xVdDusfy",
  "key29": "51w9wskZ4dbgr47UAtWXdNi4ix8YKjmpkHivnPdYz6FVrv1QaKkGiwbWb3cpv7cdbHeVQbxMdpbs2BzUUmnfj6y4",
  "key30": "2HfgyvgfEELnkj9Zg6yFqYuaonomwZChRf882nGGhvBxmx2crpVpyVUchrnkPyD7xi82jvjhKiE61wBuQmcAu8Rv",
  "key31": "2i94ZSeouV8fhuWrMBUExSk8rjKUKAnnaMeYt7UTYgmAksh7RtEaByETebrUkGhwkzB3LLZHUsLwkDAdnRvr8xqV",
  "key32": "3QCzmFqYfBxJ3Bfe59uMFVppY8XCnfRD5Bmj9KMHDg1fwArEeEnejBqugbkYV1Y8HSZvE3ZGnjk5pCSDVsCS4RND",
  "key33": "4m3K8eefJo3HzaHLs25bvFGttJ6ztoWRcHLN1WNourEAykFmu2XhzadzUQBaPA4sucWoVNSQ9XuE6ykifCrrqpfS",
  "key34": "ddyMb8SEbBqKTkNofxobi1h85MW3xkHQfxYouvNh8uo5TKaJbQ7oUV1vDkiJY3cYcz5oXKrefzeFAEVzkt275XZ"
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

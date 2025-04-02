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
    "3FkXvWhr4tu9oQtH8KtLtyYyVhcTW8XfbHDu51Usn1Mffjn1z78VWS5mow6xuyV4x3GbVUjJtz3TSjLj2R78hD5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WAKwg7eaVJvZxJo3AWBDcxxoRG337Uv8QS1NABJ3488Wkx7TEVdSiHjGB3cM9e8RVacPoLFc5o1twjyvShRwmdJ",
  "key1": "3xfdqkhpQ2wQijUvaXbcbUq7mT6K6Fgid1yruGMR1cR2E2tmuLntpJxdYdYjfaQ4DGPYBTV6TNJmxX4fTcY13md5",
  "key2": "2M5iCsnJwWYoHFgeHKU9FJUaQYgYzDHqsAvLMAzx9JGWhcKpchrhkJ94KoX8tH7yqFwUAdi9AQJ8RGZCBM3Yfptx",
  "key3": "MTK6q6CZH3zzk7JMqQ8ygeT8efKdoe9ZeUFQFLabBE7Xv7QFzg9GfDYSiswSxqGDqAw34TBxQ6HFjP3nk2acnJD",
  "key4": "aosWW3fQKgDz4otgtRVygkeahiKc34ZzXZVxryMqX8diTyG1DLnaFGZNxQ8SsbpcdwyB3VNYC8wK67uHfabwFKn",
  "key5": "5QTzMnbGnyRXPXRsqMs3nCh2zjuoXJJpCKjDZfQHaJ5HPXMeCRF4WfqUUW395QTManxSNDgCYv4a3yoHM5oHzqCA",
  "key6": "5eWz1cRtmjJtAnUQnJEYTdtgdnaWDUs5RcaYmBR8yPGVzazFqor7RePVBqMVsVmYvAEQ9vxNuxJkJSMXDubfwfxm",
  "key7": "2c8LGBDnY2dECH49Gy5rZ6aw3qQfe5RkdEY7HE7WTVMQasPLmhBF5HFfU5PoU1hYDtvCzCu4wx6poEC52g8vnh4B",
  "key8": "PKJhxDTU8AWNJ54XEkHXmingFSHCY5b9faErzzzhfyy6K5T2KBorzAPYeBZAyKQgEAjHzJjEQgfGdxP83pLnkPT",
  "key9": "47w4FUyjGT5K2pZn8Y3qitW7FGMnG4ggqR2qWMxq8GmJ3VfTiLRGfj3t4Yr9E7wGLCJTMUpr4ogspiJtLLuRQZnK",
  "key10": "5tr8aiRXRWYnFHUUvpA5RfsRa67SNhKwgczSn6UwWypTdKiwDjfmEPD545Um1zjFaZ3gpugnUanoTekcEDaWQo86",
  "key11": "4nPbDg1aoC262MqPAn1zdDE72GCNm14hVtGEb6aG4R5JCKbTjFULrDrUNWLBdUcCrQ6btaXTnE8nfe7H3paqyLtP",
  "key12": "66oqV77JCBvz5vRBvgHvtCXqBtrGopioYBjCEkf4mAsHPU8ZykFqN37naDWn7EejWzR26tndbnGzErYZXHTNBkfA",
  "key13": "5jkfjCYTSQDdNW96YjmMJVnjze32tb9xvHqZv1u2wLPUPscvYhw6s1fo6GLKz1aWgGLnVA6oXiQ4iRGMuzYDrnEu",
  "key14": "4fKDfydQV3yaifCn12H7JVGactT3iuJKkFfWce8RzGg2zC19YPD2pyHH2oTAMLqfwzYVtV7AYEmDCsQNAGX6nQHS",
  "key15": "3RjB1jq6re2EVAGVebLzMU2k2XnnzTFDELAFj1EkvUeuQwvGt8ZVNCLFK8qzrd2VohtX1qPdkpmR8GVG1WJSYUAE",
  "key16": "4LkPeQ6PbNXu51Bds8NucEso1E6JDEs25SgFeHxktqi2RHiP1dDwt8RK7JLRihidDy1u42ezmPWwqW9VZcvbXAfR",
  "key17": "3SBz55nYFqdKpMWeeAfhd76vv8P3yX4Y87NR3XXASs1BRAoqvcFg1nV3abrgVcXrX8WZVt82yK1wZuBcGZsKAFa8",
  "key18": "kDRbWdwcZGbesnYDZCqXZTT4s8h64aBt55TjkUuGoZknb1aGdrHM5DSFsHHxH1pzp9aq2Kc5jmenvoiTDVaqwRj",
  "key19": "5hHCuqmfPKrDcuAj61BnkJK3vte9cPWE3YU3HaK9DzBHkxZFeeGjuvfnGXKRu9yzJ9Ef7JkhX5P3quWVfxpiKZcJ",
  "key20": "5WfH2Uvxtgdb1WhhtMnFJeW7iCEopSoP45poDuB9A3rTeSc6QSgW9YJxvKuYE2M5DGiyJuAJEbY51i4Qrfo2MGAC",
  "key21": "5B7tGn4EG2LEK8nbqC2kqNzMVWSoe89B3Nav89teruESv3y4zoCvqU7sQvJhuyFi8kfyJGuwW9U2JAmMQ1YcDTFM",
  "key22": "49iti6tXGG8hckRVvgyrXHKNKam4kxYzk8LbfhPdzKeBfbxiXaGX3QQQR8iCLDC83UfrCtWf2aANuhktiRLr49Wt",
  "key23": "2ru4os57iLbRsxK5PuWQCYfWY65TKTQwLsvRNZhEQ9s9MucWZQcxmftSTkbBsB8wf1XBVzb7tXBUMM6xRrUUABTN",
  "key24": "66DKYX7TDaqk2skJ8igNfmt87hyrTwo9xighibLpe2694d51AvPgn954JHjoM3yQD18n45mBH7fEXMWH2Gj256Mw",
  "key25": "2R7NNKoJZopWj68axNkaT6JDaE9E2uK2TmYeoK5QyoJ6sVw6K2DpLR6VY67ibdXtBgQf5DdUhWnALT64rvLSxzF1",
  "key26": "2UeY3pdFN7NtgKXscRczy7tecNM2WaYmav7EshauTTAKAPkFKwtYNeKfaRzToWrFMmhQp9RQmwXc7pSgUWaw5ZUw",
  "key27": "2ZZeiwRFQ2qHFe81rGEmLa5vdb9wNc8pYAZY97wtdZhm1yvWRg6mT9msbWcgpGZjqp7HVaLbhFfCC6rvAtBNHMAN",
  "key28": "23tFSQPRoAvkbZjbgMTZWpW45wAKezNrMtPni5xFoPDnUtyu47SXYVnbVDDYQu3FYCx4azU77gi7i3faPyLmiQgL",
  "key29": "3MjQGvY937L6FZmyfybpMPHF8gEsMGCfX4SqXfv7BmsmfWMUnm4MrvLDgFQTXZs8UgaYjpoK9edzCRTitaGKteCT"
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

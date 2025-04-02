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
    "3iRvtHeUdE1Bn22nE7VhToAWWJpTmKV7mZXRTtrPcRkR21jK3787VNbZZnRqvqA2wUFFqGkmWnrayh6HnhVNDYPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFU4Po8b8kA685FPD4vFDVGenXkEappW9Q3w1RZh2sEGhDz4Wj9T6jqGud9xis2WAZ3Qzet6mUvfcxZL61dMyY3",
  "key1": "3u4mnSX7gaE43UstpZZnZdHC97sRTVmqA3DfiRyDmRsoXnuKVt7yNUrRHedEipUoFoBG6qoqYfA8LQmZFvcScoin",
  "key2": "3VUYmRnpwBP61mdgJxGcfemWxghUEbwnq22heCe4zm6KePChs2TCcVs5Gbeb3g43AyxHejnmnuspkysgkFC2HKRv",
  "key3": "5DWa4z5wFh1am8ti4uBnhPGDZ6EGS97KYYJyBNPLc71AxBsZ3qGfort1VnQ63aET8c1KJC9LUf5GMmLNeQ6SqU9i",
  "key4": "23w4fvDeiHB9ncxQhQGyQpiPZwFvFzNPtrCb1YRKHcy6eTPCu4G3jZLRVGJqutxKHVqY3Gun4htggHMUe2LRCPtv",
  "key5": "dUxijr7pnxmRWpABfppWfRq7ETY15xgkrRvhPQaKvYN89EYDjaRiBKkU7LinQzFSXW4p3UbrNUiYNVYMd59f5HS",
  "key6": "51stFAd85LdUyciu9Xp6Cus32Wp4mCmnwYVGbKMaD2BQ5N5NknQD82Ej5QUgMn7pHNdud39ZYHE5cwhYQ21rjZEY",
  "key7": "4V82QK8KADEDVzGB1uoBa6Abv377qBv2eQP3g8VrViKgufDRYCpX3ghsfDkypVPAwJ3hGJunQ7hdGJvqpLgD41Mm",
  "key8": "5Hnnfg2uY7kQ9hLkkzwUmRRXJ6kyycYgTHzWA7EC6YFgGWDDQm5w5RExgXnYA6rGHNnvXJMygHuSJXT887TkryXX",
  "key9": "5JYKZNJTQtWxbnDg9dvUkxw3NQtSaUcGxbLf92LgTJbPvGSyQb3Bov6tqcGZ8ZYDMkSenmSZqnB5eCnH9dk55z1z",
  "key10": "33LYa5QsnBGzeFkCx1PmAiRxwJhpcQsn74GcKMy2ck8f8mCgE4W18UpLkP8xqSEquygurzMGHUccLXLDLrup7hd4",
  "key11": "3oxsvdQFHq3s5oK7ozGQkvE5rf4aSBDYFacfMP91kL4t9smbcNQCmoawKNPpL3fLM78aixk2qjEvRFp74hEg56KW",
  "key12": "5vsNP19m6JxQ8N212wDcAXNejKv7RvgoQZ1pCCkbBx4copyWub2bBc9EMLorGagosEcazRBkVccCbdnVjgDRgqv",
  "key13": "5ditMHdLtGX3or75CjDVrB8Yr1S6nfuFzoBA8W4CqkVsWM8xvh1JvBAq526HCG6YSPsmtMhB9yPygiovTJujiZTs",
  "key14": "4kk7AZym5uUmSt9n3Mspoj5befGjWEMLdgotaaNn4crGHGyVaaFxFzbGscA2McG2uWTZW7BxtWHbBZZ9dWuYPjeB",
  "key15": "3ANZiGTJpSw9fy4a1rGAAZVoZ5b3LoBuaNyA5TSWH6HCSxecKp2fGnA8CbePP8gUyATsr9Ch2FB7Nn3kXgmTqbNF",
  "key16": "9m35wgJxbp3ahyjM4U1ukDvSsNuRdJstUTfREwBa5M64cRQmaEumpe2npLMZFu2J9SaNRUAVtBA8J9YhuErvHcz",
  "key17": "3RC6FMdGSsGSBueRKvFQffEj2SXHj5wmgedpAAzgYvdMENpDnoi8k9PtGktiEX92cQ2DqrjUHe7EkpafCCDQeGBs",
  "key18": "3eJ1dz8GcBfhDK2KFv2hWofbSW6v9UPcFa27E9L6JXWZXVQRaSdsLkBpDnPYwmJwoH1RKN11mLxuHApDWn6qzSkR",
  "key19": "DeKuTWrcKd5iBS9UHVgP6FazBMbuLNodmBtLbV3dkDP5ijHbQf3QnZCNqTYTr7HnyXDZkdcsBbgbQr9kS2mSE45",
  "key20": "4gZRc1fXiP9rcgfChU5wSK7cCpf4v62Gbp1djNfw6KRKmVyhWJ2Y46njZ12xiLmi8C8Qj4dMTMnhT7t4PRFG5QEi",
  "key21": "2QxK7u83tNBg5T98LeJmF2U2mNJsBsEqDnz1VGXKajgTMQoesoC7J2PCq8ppib8AzUBApcTNf2C7fGyf3BWFmzsA",
  "key22": "3FNpdzxRJxFwDvyStZcjkjEHK1ZtoeVjH2FYs3VMdhg5vQmJdaw123Tv8ouB2UYbj4tWDZqf4YRSEgtdr697NBDU",
  "key23": "5R5QhdagtXtXpGrUJZGHm63y8a2PYFwXVMFzjydpWgveDzfb7rjZ7tuyb5adinegTATa21e6krAuBruFmd59DmMA",
  "key24": "YN4kJcrtJrwtYqJvYiKUgvLB2Y2xaqfMFRw2WyW6yDUa4Mu8Ud9rTrrBz5LqDeCUQJpGhVJQA88kdzU7SxPQ7xn",
  "key25": "64iYh2boukLmRuvQksSyU4nsQfbaXqu3hUkypWrwsKZn8MTW2jk2gWN7xwfBvndz46eLsyZQSWrrxTbN3uRu5Pyx"
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

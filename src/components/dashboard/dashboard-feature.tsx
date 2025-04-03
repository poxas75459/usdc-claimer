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
    "4h8V2E1Xj8wN2CLaoaK2vHdRHvj5V42XP3hVCufRr5N8KhhBvukYGVaJNRAX4FwF9Ebn522xPAdB9dqKKVExe3cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oqqmJ8vSj2UFF2jjF6fqGAdbZcbwjnLN6vmGUirwRZj5iN3V3NwNJETPgmcU3DZWPrMoB2zv9YtmSKBQwNZWFik",
  "key1": "j1cdxyQe2KfypYXzLRTdhytd7SQEzJnn3ge34JjJzcisTSRHJWicUhueQ7cdbAZremKzWLr1r6R3PPbq7ftTL7s",
  "key2": "5uyYXpex23BrCEgrvXR7To2MRRHidRrCcDTCFj3tGpGWEKXWFQm9s74zLVMmnQgV3WeZsxbW9ws9Rs87PRisAECr",
  "key3": "3XAyzmgbthTc2XR1S4iuVs2ZT1W68HQVvj7r64DoM5xyqdLVpRtCedPz7P9qCBxTqbyzqBKwFM7wzouVxU9aQsY7",
  "key4": "2EV6nuThrFspaq8fh4cdZS2k1m381fKEacuejP68fPy5XfWNMVbrrZDm8r94XEhhapFDiSaG65cSq4pe6pMx4LUK",
  "key5": "QsqCEf9hy89HRU9b9kZadsULdi4PPpjDRr8awo2eeT4YaTn21GrcaAroDSu5D12p4g6sx663bff5YLmkhTQQeRB",
  "key6": "2MucccJXyeKkMCmsCB7GB3kXto4jFN2UJzEQ98hn6KxwmjFoLLkMU1tqiKdhpBXkAqu5ZJso5vd6j7nESKKA9s8i",
  "key7": "3E25fU3nq97yEVsUvCxD1XKf8zEJ6gtcLbKH29Z1TPaAEU4K3bKm95KbENbn8ipWzEei5HAuGN7S2yCTZhBBqDgN",
  "key8": "5LUShoyhu7duvgaWbnNEkU83fQqxsLqM4f7D1RpU6btJ9GoHu9q3eDRhD4ZkUxCaWiMH8zmqSmjbwZfyqJrtC8p1",
  "key9": "5myG6NzjgojrEr9himnqZLWw9rDQLhTB4nnNJhrdfxMiiMc3cunR6Mx6EQRNRmGYYEwwocfBNDdMugkRJnAKXQcc",
  "key10": "3qR9esGBtaHaY8aBiE4fvAXbC9e6WExcjxahsQ7au3d2ovudsVJi85F2fTDrMkHR1fSUuWK5d5gNJqVq13mARs5X",
  "key11": "2Sr5ryHcLF6RLmk5QnkuPNie7FkFnqSkMEs2aZxPtbRQpm7pijWhRXyadbJ3j9eEGiJK393wwuq9Z5SYvn4452rj",
  "key12": "5onoaXFdShGKGVFvYTN3qpiz65w8uXXMYy6E2jKUBW2w7DodrUvm9ffN8TXMswiAy2j3LefaVdrixgByKs5hbNUK",
  "key13": "YnFut7U2KUqF9jEptPxPRbm8n5hDz8rMtSrpwkc2t63EeBjLqMXiwYFSM6AsFib6wfxYND7SsFFcZdPCV82svnp",
  "key14": "3FsSeqMp6JkHnCZtsvYojVcZ3e3VHcBMw7spAK3a8jvEdrrCvSsjUaEeKFhUJuzbcB5C5hB7CnPffZy4DXGzsoJt",
  "key15": "41tv5AsydnnkoVxsg1St3WdHMsGweD2wzSupNmY17muC4h5RysZt8YeA716aTNn7ozw8GxYThRjCftG9kgX2HuNm",
  "key16": "3xxtnegrsdf1bqBjf1Tq7mQn9o9V59gR1J3mMHWb8dG1U8uB3KdteEBaNGJtxfkaeg8USUhCSiPZQLk7pqUh6W45",
  "key17": "3M1sXURTNSHn3wzrjEQHmx3h44pnG3gpD5Kx2L28H9fBELiTta3EVGFKU9HSVsS2TwB55NeRTPCVr2AoyFFJ4bgY",
  "key18": "5UjMUQsztjds3vXoEr5K7RMosco1NeA7z7WZb4igVsj1ufHcZxUY4wAyjNpmia1DQiczdgPW6MRz13fYTuXNqvJ1",
  "key19": "4qSeRUe9qr55vxftUyAQQuxiV2ffC6TAgJdYtCo3jhfkjT3WNoiGDCQJrLvWqzLcX19Mr1JxJHaxAySJVfLfZsgf",
  "key20": "3o1PWDpir3AmLrFoG5MZH76aes5RiUk5uwZpJxRRKG29PBC6ZGza16eNjciE3kqc823i9Bw3cdQopmhvjgNqpafv",
  "key21": "26jLanLUn1NTSyMBgowmCkCAJiUAPaTtxnZbWG85vxmJ3YxjKmADRWAetsoqfYTDc2qtNNt3CuZJ4E9cZE5mEzWj",
  "key22": "3CAd1xByYZ6P6FJ3tQbvTxSdRc42XSuhSHCjgwzPbfYrZCDg4iiK2NhBAB7HVXo3psYi2me2KDPMHRQkXDFfhHSt",
  "key23": "59q7d8a5MXb47CiZwWhcCbJ2fwXvrjqEqaerSJ3Wexg4iDCqV3NyPj4WsBbSKPT199h6VgPnReEAEmp15371Cd82",
  "key24": "32RQs7XfJbwnwAtQTRoRgVNs3a2eUbBWXpU7pe2sFi2cZGQgCdHaxWzpeVdUg5RioTD5aZC6F2CGrsqRbDYmG4Yp",
  "key25": "cnwHWromjhfwqVqWTHQ1GyFDBE3N5vijdPBmiWAkAkBX8LFqNrW4MwfXhJGBjGVyh4dLxEFah91L7RDRTtRWmrH",
  "key26": "67W1WgqnVnrCDtpQokjN975pkah7L23qJdjLefzS1jwL6UrBLmoEhGV5T8MMouYroMPgqaxJJ8iVCw1teem6z4Nb",
  "key27": "4XY4T4hn4RRULULp2k69GJT6A1ZL7Y93JrzVdjbeN7BWB3eqRgZ7XGaXie2py5KhhYStBt2UvTimAE38qGYZFx37",
  "key28": "2mx7BzTbYdc94wxsoj2YDiTmxb9a5wxfFpw6RCF7Dmpw46uduwPAkUEZkYwTfCdavFddapjtGe6Larv2bgJQFACa",
  "key29": "4whXnpqtPh655EQSDZpFZvP68wCa3cHipgCkuutPADteMXxq9rm6Jskrbgv5jbyxhc2pYQtF3twQeTBBEKK3YQVU",
  "key30": "3PFBBiCNWBuwmjBSKnB4shWQgycDhV1RP8CbAGpVvhuusA1hba9mCvvN36Zt82zLmoNpg4E7qrW8vnXzKycWrTgF"
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

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
    "2uCnZxAtV1oedidtqFSyLMTstHGR3Ba3YNUZ4b4QFStDQdAHhGKa6E8M5RyDg286Tpx4cY7RUriUudjDVe1Bz5Mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sB7dYsTAjNGTLEkssAGuVefUxBAb2Zzb3HUxwmrvyCQHhXTkpQDdnpiwGM3ryqNtivWW5E5PDTGgtaFLrf3Kf6p",
  "key1": "5v2bSGzB9ckndsrphDpQYeP4JXrxGWREfTGvDamB16ThcJZbtcRkWHeJvNPajb6rw5MqowdBN943QF88MjXRMiwX",
  "key2": "4Yv3qXm6nm1QvD6XBfDhaXuWq4GdEcyCML2ZCExBPKqYx49zHjnKjoR6vvkt7i5ofuRD3oHybYKh1AcVcp7MjQNZ",
  "key3": "2J7fnGtkJvCNK7b12SBdjSSErjf2TFoKvnkephK54hsig6GbZQBKQfGaLcv48DS3q4j1vfQ3i7saQVN9avfLYUJ4",
  "key4": "5mDteJbJ44t3KQ1SGsmbE6RX7jT1oXAh7aixPNjLeus4447u7QCaA6gYSXRbRbRvJBwQLWp5PuDy577q7QBKFbSe",
  "key5": "5sT6mLBxt1oTYGmm26BVMsiRpJFo6vjHTBr5wVMBZDmxSYMnaHp2EcWpfX2qXvBAaPNZ6EKw8nD8wx5eCay21Bvm",
  "key6": "4N5WzoPhvP6cTEqLv5yMTAXbrd9iM76TQXfRYx4BhNEXL6Xjau7EPT5swPwC6jFjgn8HUVtww2pYaZpqAoFfMwCt",
  "key7": "2HGGS6gb1wxk5yBidj8VTT3xPY7VZcvbiovXKBtYMh5pBvhsXMVCoDwf1XUavv36nRy51Ke98W1DVBC9PiMcT5x5",
  "key8": "5x2PeywEiC8Zr3PZPmFRwaLir9QZrrGeci41mWMrfGLvnGv9w4aUpThigvWFVKn6VZUPYJqK6NncJuws2FjmAsis",
  "key9": "2c5rmsDy7ynRTcjortXyu2S1i1aCFZ8BTNE1HAianEhqhAS42ffYzbngBWRLiLVUjkRGFiz3pkzREPjPEcP3GhQb",
  "key10": "J1YSkcA6euqjk5JxxaBMr5nMzdnEuiqKvXFgCopn1P7GMJRM3qkpYkvCfw8wKNybpVFoG6pAgUcmPTGMCnh2Ek3",
  "key11": "3L3GMTF9eUh4S8xk4WJa3EUnZMR35v8xFDE4ab2yCRLnbfMcq9R3Ay2aZdPGekcQCLnxqMPJ6YYd4nTnXka7DY9t",
  "key12": "3oFfhvRa8ZzgC4atX9KxN9Km9HAfBhrnqy8fHWUofxCz84UrgSXZD1vtY4ymKRiVFbvvWqN2xYzbTgAcNrisuDkM",
  "key13": "4vB6wBQF5aBLBs8iwiprDmBQ1D97yEio3qGAFuF3MahnEKrXrGZNBW8dup1FKkFoBxAzQ96SzCQ2WN97HyxXczaH",
  "key14": "tnT1hEYfp2irSXvcGHSyLCoxyviwQP8wZBWcTAzNb8P1JAUFKcvT5R7FwRvhfGwc8eGahu1SXYZfu1JdzJ2Lytg",
  "key15": "3WAD8YrgSYJL6Ls6FbmvHLNBF3G4W9cuaC82tN7kBKLsNH6uS7ivSpaSTe3KzCTerKo6krVEnK8VcQrT8WYYgGzi",
  "key16": "Uzhxg1FpbLNbdfvZLdQ92Z6JzuKG4YwkZK3BuWY7raHCw41r3AvyS3usoWebeo4Wudg9uYhaQFjuc2wirznmeG1",
  "key17": "5g6K247QFtGswZxBZ4hDRQX5q1PtnAVtfh7ZjPV62fEXJ4pk8g2bDMUyELD8fG8YcjWRxn2Qv76L8J6hfjfe9qBj",
  "key18": "5sikGzqgsCweoB9xsk3mrMYjGWrj1xwg33q9zJwdfkHPCbT5BHbDpRHEdn9eroSHgJ33K31ed7mJwBwVsy4MLh83",
  "key19": "4KhV5iLSy7DsCQBkrBJiAyyx3L47nMExqymzLNQTXVDapCkAmUPqcyNQRZSRd9NUbNfWo599YFjxjZFnRGFKijsa",
  "key20": "4brXhUezTgkQPL1aFyPP3Xe3B5c4yQHs1SSXbhNxvasTsQc2CaunnZdvT3cimtQxYnnR7wfH5G66csswWxZRhq3m",
  "key21": "3x6vrs796sWfra6SGVQdLYqL52fmpme9A82vJaVyLJvAE6j53F6qVXp8bW2226Ai9udHkNx2DXAJRqqk64BSRQZL",
  "key22": "2tRWCZyBDk1jL5kNPELUZ5KQQ5c1q66TYw6phSR6dNt6rnqLcUkB4YPStwpmJfTmQvmR5FiqGqkJN4Z7B8N78CyX",
  "key23": "2pS3Jry4wGx3BJAu9HxLLxCN3yBPXA9McAueHPCFHt3isnbj4Q4cbCAMqA6aqMmPDiP1FJG1kHau7Ac5rCvdzMwz",
  "key24": "a8YBRdh411hnU2rk4cxQWqpqXDcYFQT2Ynd1degur15fo2AUxQbHZ4bYQPUmCsi9DAtcUd2dAhi1f12Kgmcueas",
  "key25": "44SsvGSdMfkcg2pwfHYNkKvQvPvU46UgetWTvCwS2dwLPog6G9yDU3KCshBjAnSuLL8j9N2uWjJZqGkLbq9YTPVo",
  "key26": "3qFthUB2qQpGw2SGQXKJu8KythSRnvFhThAPVpjaaU5iNZTuHRsvLioiJr4nS3KnRc65ZnSLsT6wEC5sUxJuvfNg",
  "key27": "4oPM7Fwj3NX6eSz2gjasD5p9c5FN8VKSvLJ2cTErCDfuW7fJeQNxx7ktPuDD83hef4tqDs4eqSex1GMnvuvxpgFD",
  "key28": "4J6k5316TACHQotrh7YC9p14NN3dnmKFwTUjxwThRn5cqyNW17WHGsJKWyQSKBK2ZFPzpGpK4eddGUrsWcmwG97T",
  "key29": "2RJkhiEwiy4rGQPUNrppP8VwmbJ25kZNWxzqw5Q7jkBnnRwxM6mbQMGFTQUBrqfbuLC3hcpJQvV7d1xumREPNWGc",
  "key30": "3orbqNDZ4LFRaA5BUG2REev6wDVR9Q3zr5HPdFaHa4xEGukdTH7xtiKUzvtxURfQhR65GM7wBDjXENYYUyTKeCD7",
  "key31": "3aNfBrQjp3RskbnnMzBt5ZwYXNPAGvJT4AqT3PYXDo49SoQCYP2BQQKWE3ti9mBT5tmtgKLvVYZnZ12gigXaxChh",
  "key32": "5T1KsbhdMfAGRpPrXa3iSAQTc8FDRAsHpk7eocZiYmkXhB4pdQsSUma5GSxGfALaLRFL3egwGQ3jYLWQMLBDhTMn",
  "key33": "36ueu8e7wGAgi19asMJUM3qMqUP47MjTS5ksSa7EGBJvbCqFce9ofavSZN99MkLmLWoAxzTHJ1pbpyj48qdmDyPK",
  "key34": "29rpYTdegbocjYhLn1dQg8q4AZY5T7cZHRVXnxauN6wfSoM2DWBwuLGXucxN7YhnsW8jrbWU4zwa3vfkCKbwAKWR",
  "key35": "3wnK9QQD3GSRU7tkWuYPvUR8H9hSUkHjXVzF8aK1Gbb2Qf4jurWyAUfbxFyFAtAerciPg3Ndz7DyvGmzNvE7BpJX",
  "key36": "3xYiaTALY2NvXZHbkdo9wiuhzWngfeN7RipMzqiqSy3xKGehKzT6xpHaX9UqoNmk7kShwhbc1EyKVnBmB1qEULEv",
  "key37": "5aH7Z4h1s8VqPjTGAxCGdjn4o43eh8pzncAXuohe9ygfGefaj4jZmbKWhUfiosjwz5BhUQScP9G2opkg3cVsFQ3Z",
  "key38": "26e29PeshFP3QVE9ViYD2rn3DR5fxvdUatisbEpQ4LpfsmQK8Fxx7Fq9DrcTAV4cY1D8GvsTdRe25niRxDN7ofSU",
  "key39": "5pAEm3ZirehbmB74UUCyFTRosoJTedwyRWvP7VRer3AgrzQoyn4Sxh2edkEhtsK7ttZpTV3U16N91Zz8PAnehVPg",
  "key40": "VxT9RpgC9yM8CZjPYUJpQaMNV2C231sHXafeNTPQssNmx6i9RqkXBG93SHw1uuXYpM3x2ktqjVkvFrMhdSt5rQ7"
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

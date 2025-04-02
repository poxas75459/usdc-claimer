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
    "89uTd6t9LCFgmsGAS4VbDtwVbEwiJpBrY7R5xPa3QGeNWiGGQ71sKrbsvCoEeicfBoXAEwKHovFsCbihmaatJH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JWWgoZqEDgGeczyyCBkCdaEh9NJMK6MKPJGJo47Gf4vXuDQnLFurdoqU3GTiF8Fk62TBVzezBWBdwmhmcwufCU6",
  "key1": "5hfRzNGFZ7T5orVwttJjdw3QLfNUCHag2BxH4GtGXCSHkwc7Dr27ChMm5jJpy6sZLkXN2kJeJZxVMhPGP7kPE74f",
  "key2": "5DsKEpV1eM1LaJonv43SCn36z8oozGyFcDFnd7nBmELsG6j4Jc5YHJQCbJRQWKhbn16EuK67qQC8QvyuX1HhQ7SC",
  "key3": "3jkKh9CeGVFETC1Fjb6Eigpyfezp6dK3Z3Uux5P2BGZLYvLKNppfWT9WERAbxoahc4UQCqzD8ERz6Uv2D4FMe852",
  "key4": "2PCQUWPB16JTRY37etwUhz8kLKj9CygEWLksPbVZeK8tizpLKegScERAVT6vUTihrEECtAq9s82tznGsCaB9ohDz",
  "key5": "2mahoAgtN9pNyRkfMZeWQvV4g5WNWFFeUNGZNqprtH8nsjcNkThJtsqiewLYZgTYtXisFZgBGkAN8tYmXAXc3sgt",
  "key6": "4PyczSTSNe3GyRbRRWrShJUWWdn9SnyCEJDAGYUNjVaJG2ni88RQJdkU24p4YqieQR5bN2nJXs3y1nQweoUEWYrU",
  "key7": "5QeHsttYAJsHgvzHFmapAodz2ah5SeTon8uqZ1JA8MrRn5VUyAmA4GTAEWPR2n7NwSg2uTwaivZzfX2pHomvM5cW",
  "key8": "4mR54q4uL6dtbFBru6Hpynbg9HaKzyEZCrPLP2X5WAev4r2yPDTuF3NCfuyCtXJG4GXpimRUCpCqwP9mFUvdVau2",
  "key9": "5BQVFYh3dWXzTK6gPd6qLABaVgktidf8w1Z9PTfFRHzfH9A711uoyKjK1PUPb7MpfDcFkDuxyQAnPkXM1PMUX4GS",
  "key10": "27VGyJuGihhEcGEeceXningFKiEAy6qTMDbyALHxz1pxnZykCjqEffGcqdJxunaxjspK2WLDxLHq8TCASuzzK3rS",
  "key11": "3QauSt9ifYKvq5kg8DqnLWBGttLFNTFNvoihQjrGRdRV62tGPbrmP8w7XCPBhY85dBQF4qBfHMYbbC2vPhJamHyu",
  "key12": "4PQfwQMZiCxWuddj9XVcTaCg6e4ejuekL4SXNy7GYEMwF6CGBQe2nVsJYAu7hTQeGZiECTGrTCRQoWW4E7JkXyGV",
  "key13": "37oabeyjKutwTg5pdGPmcWJmpiY7o8XscgLcVfit68MtKUHaxRkRYADtdzqoXzZf6Ka9JkTPWzkN5CSkEDP6GQFr",
  "key14": "2oCk6zxDnDsm7qp5Caq84isPRUqi4fMHT7pfThmpFpHUs5whSt2ctgs628znuUxkjETyecqMZhR27L4cBjEjoP15",
  "key15": "67XBYHsqi18UTYJNPEBC6K6M9p7dcmf3y1VRsuScthaneKogX6PHtxjPxpwzcAmy75EoER8d8yGgC8CFaUw9dCaJ",
  "key16": "3finpmQ7t9qrNpvxZWQQm8Wv3y1gnHc8wQ4THchFyxaBjPWrqP5KxsVSDNxr3T2uNP5bQG6kDtf6Nj2icqVLQw9L",
  "key17": "3EXYss7Xe3GNYQrtECJdPsykuEQhRjszsCYASir2GLwstckrhpUvPCe3ybtzGmB1UXUqLMXWEA8Tu8BNeopnGxqU",
  "key18": "VqCJEi3G4iNR9FxnLMY63W4BuBT7eCrARQWwkpj9vd5y999Niq6Jr9xXC36ZAn45VRFDH1oT3ShkfM52YWahd5m",
  "key19": "2yVDxy51bnf3q2Sk91K3jft3AGdB1xH6HpkQZXcArBnzJn7gnNEVgJ386vikrFkW4NyskzJHNDWbFeMxmm7uPge2",
  "key20": "3JEFZPB6T7yAKkmRw7ycCQWaFBBPzZJvbpNtEg5ovwCVLNopHaw2Py3Tk6bUorVyvB2pngoeP46fraCxfwdPsNRi",
  "key21": "57PXeHRb8e7YHSAnZCmYhyYDqUyQq7MSvsAy5vTyJ1WxTjjQatdAaTJDSgoFU31g4va9ZbRawGZ8WbzqaaN269Aj",
  "key22": "BFcqvzmfe82thrRKzoXhYtA9bjnCvB7E5WsPfHWpbghzmNVnpHrUtg1qfTzwUQjaKvi4Fcx3QouZ27SPyBF6ET1",
  "key23": "5shgJJmuT1UeKwzbMSBh8AacYfsgBBoZSt417EQTdb8o8toa49giv6j1u895sTpR5kZDuYHeRtViTPSkNBE8r6Qc",
  "key24": "42uxJRv867LJq2qwphNn1NsNZh36dCgKB2dDvdUrRMjcu83kGG3imHNTfX1KJhJF5ECGHBGQdHEQJMtD41buqPo2",
  "key25": "5Xi17LAZqCxEyX5WGG8tAimFDPpNUhDqFnMRBSxCTNFqEj2qEX9o62McMjXLxwEdPp8eqyVbEJATYLY1soB9g51Z",
  "key26": "2YqE6Vwi32KF6vXKe7WTs8Uqcc2J3RxjD6BvPL6VLUn4qKy7ggNh7pEMh9wFFWt8fT95psqHKdbQL1RMnsPNm9Qd",
  "key27": "5VzkPYX9awDfonu23r5tFSYCDZTNdUZXaYikFYneCMRBFrD3pFRoHi1QZLMRZyWPSgXTETCQw8XWEvJxzx2aupfE",
  "key28": "367BzXr7kWLjWznr31USaQRoyLdiymjyrdngrERJFk1Yhkn3bVyZukewJ9kJdQdu2FkciSFvk8fKQkYz6g2fwZWu",
  "key29": "AgLEhk262Lm5QAKvXzNrhGXaoqNXJxFNbAWzqfKCn4fukp4sX94795urvPA4eyrTQvSNGa9FhcmeT6N1XpD51Uw",
  "key30": "48SuQQhw3AJaqyeeLBiPEr7jdwxvzfqKbr4cDGwkhnGoWSQZ5X7e4MzcmXQZxoXzCWemdnqyG7NHmQMj6HAQmdmv",
  "key31": "YdXVEvriAgfJkzS3zxjK46Ljjza1EuNZqt7nW5dViFsXXKdRTjy1xqCTEQjATEVFtH4x3qv84hE7wAVT94PL7c2",
  "key32": "2fuPdQi3pe1trJkyjQdRLLW2THgg5Lo8pmPzyVD5cy17b3BVdT43kNP1BeemviWx8xJC9LTm6hGh4jEtU7pHpqn6",
  "key33": "2PdRGVHU5UFou4M5qG1u84Aiinh1no3PEpSR3DKihNSbGYk5jNvkCdWzL5m2SDHkHK87QyeDwDjj8SmV9PLvHgco",
  "key34": "3qNUxft8G8RiTqRWD3PnY7UH4bhyuvKMWLtyuFEpBAHEZcSF3aZ8DSQSwcvyvQG9xLRdwdGrPEiXUdR4amdxwGfp"
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

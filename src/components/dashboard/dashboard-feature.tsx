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
    "52ydevZ1xz443q8dTRpAZHsv2VonbvUMvxt7tkbUW1wY6NHpVSrEkpr6yoVwpuHk6CMKCHRCprB7BD8pBX1he4RN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hBmKAogPZ8k8EPKgfCUe4R2i55HWeBbt4GvoKRwaMqv28zMtw4eTHKUQRSrSDpRmNgdorVJS2zqg7QHDyxgX7G",
  "key1": "2cicuqcUKTaUkAf5ZdxMA2TcjeVjoUeiC5838wrKT39xTmYzkkkXuNZT41LyK6o5cS63PqVntjHN5iKRXpmvGuPK",
  "key2": "9Pee9tLw7PqRkQmytLjBXRDjcy8TSzHrnDpBz31RjScibx7xWckzVdhLR4fWCdPAUu4yQjxWRxikhPqcMwz8YRg",
  "key3": "43HyNSqFxZDNq95JdBGyW6thLsQsZY3ntZBqZKNzytBNJyrG6mCU6cySHn27V4QCyD6aUijgpuGMgzzQ9UyGM3UY",
  "key4": "5siq4ER8BuvEobiiYupw937pUNq88c5nAzno1Rc3dJTVy6XtnhZDuunGwppdPu6ziiaNvHgjiosTSJyN1FgRYo1v",
  "key5": "3B31tszjDpESviUoVSFmZ38EJGuC5WcBNKKjxLKxbbxWiRT2aJ9xK9fuiYVg8zXXxXhv7qVffdsBZbPC3zUUTySQ",
  "key6": "25FkKjxCwotCsCisjaM6Tz2HpZTrgpkq5xotajTEhLosWcSW73nakUEBNXyNF9yhyrCZ6PP2QzC5aeo1bsUrUoqQ",
  "key7": "4UsHJTm8xhc6u8TC4cgwFgbCXbzY5r5V6f6Y6XToKNytA9PxZLbyKUHzWSHxHgotxWjLHhE5qoUA3wGebatf6snk",
  "key8": "9xuEmvqvaQUg2kxHCFkGo4wBBne2u8SGw9figx3tHAxfk7yZ7d4saQTDR2vs41nSpL39ZWQgngowm9gteDdG8w2",
  "key9": "45negyk1bJGfRbXJ4v7M5dTaVHCMqhuD2z2EhGqT1gHVLNohRUao1L2CsWFzTPtGhCy1qnpn7wH7r1LXbjUB2Qk",
  "key10": "4YneDsMPVBfQhQBKWgZtNQmzYg8zVAEjBJ26MSER4iJm7KwP6mo2Tw59ZVNZUrFpdzKrfvNJExeQHps3yfsbazVp",
  "key11": "5PSg25WZTRshWPfDouF9ifzdsV21kXJwy6aaQ2FQ6YoxceFB4R2sFRKbrrnqDbQYxjsNrspu7oeMGHQv5xLHigek",
  "key12": "5JQiXBm1rExwVV5wDiHqJa4XemMRzRw8EZY6sTjKGwyTzLayyR5odhEzc32BseHrLvKUCyBM4YLiNkyxGVmT57Lm",
  "key13": "27PnHvGnYN4WnAcuPhCm9MLoDxi4KE1mkNpU7qbbJ5MW3qPhZTAcS3aDEXgLDA1Cmz1nxEbrAA14WbUBT8fuQuAE",
  "key14": "3iQYjUQtbqKa4KX87mUF8EW9QhQ6ERpziKbcwZ3xnAhuDYsnc6k6mbN2pByVRqm5xXRrkPMvNmEnV914qMDYZN2X",
  "key15": "kGHU2vQoPWPDsgsEMyCDvgD6sdoDhH8XwiJArHax8yvxLzUmoyCfPajCNRqN3Mc94MFK38mvgpnUFY1KPGvZQX8",
  "key16": "2FkZSRy98EhH512De2D1J3rZTZGVDBQSrk3W7LgRgUrpkF2SpNceex7yVuXukTcBELTUuWVjRjexM4Rc86zuU67e",
  "key17": "2vfS52LFWVhizvJs4gVgrzwGn5hhVYaFTULZAcYQnuJ1K8WNVisfmCH6tERupM9ryoz4mnMH24XGG2UxUnT7f8ik",
  "key18": "5B6kv2R637kyL5xbxfrutCLXDrphebzQeb4K6daCuxt4QUGoS2FVXVckZDsBUEKWXe9RzwULU2zHMXajn2QxiJ4p",
  "key19": "62pKPdwxxKD9H5yV6qGpoTz9B5eoWD3bXJGUaNiFtEUpvZPUbTGwwZMVd4UA7k4UVyjXUV9LyBbxkqq68VeG8N8Y",
  "key20": "4t5Ra5aLDCYVi1wVhd1z34SmgGkmhhxiPgv19ftmgx3ooCJzcnrnuhWT1B5pveRRtGX2yTQcRBtCMtQ1VVYbYLzD",
  "key21": "3yn8DZ48nycYri8mrwvsDyeaWqQrrMz5DJCrcUy3h3fF5H2bwpUfADBfTf3KVxVfDKpNbaEnjjhUXaLR7kXwBbe9",
  "key22": "5ZJh4N2BHuVen2qZgW3zfu4w2A6ztA1ybWsABEyMkV533URzMpCuzdLrFuz6wr7Ts18cPdh5ExdnmbCw9JxfQYY9",
  "key23": "4JBGHaZpu69jCPKVa3XugFJvUqfUerW9UpmuY8C862X37tF4MQPvao5Wox8Dk3YzsnNiyGnFsPUNpYFjWny96JHw",
  "key24": "595rJo4zX4U8VjNoWDHYZQf2Cm5rpH6p4CAb7vJXCL1MvbFqH2Ag8yGZM6n4q8fBqmFfPXSQcmL1arQdZQoU4wKm",
  "key25": "RYNey3hHxLBEnDf8XNKLL7hZgJakkfuNhmAuJa5H72QCHRnJuLDTb4HKZgXTWMmQ5Tym781AqqLUeXfxS8MJwUo",
  "key26": "2MdKxjXTgjfZimf7abvFq5ZgZ1qRe2QnHRL1DpkBX3BANq88LSxHeeCCzgPn9xQ8bEcVjMjdtmkhQG4SBThuBKAT",
  "key27": "uMGNr5e8xo2pJWZUu6ZxMCWi26hpopnwK5DWGPUpE3a3f65NkFjaNWABV51Ey1ic8HdxBDaJ6WVpk3KHQuzQ6vf",
  "key28": "4NwrVdNRTrYKdXGqaZU5tNKdsqvGovR68ESzZbT49Bb3iUuDNFiMo3W9DhyDRbDVvyJVpPeYMwoVdwHNB9fR78SB",
  "key29": "4w1mxhnuquu1ynxmkVj6Rv8RG6ZDbw1pMEZ7GXZECDkLUwvGp9kAL5EoGiot7bM1EDURkTwSMoBr2ZJZ2bXbxZDp",
  "key30": "UAuDCXYm52zRPm3KHhUFDZTjBaXAzeBA68bZUQqQYDgLRikac8MAxub7h96A4c7XLpcnoyKemkTFgvtJMGeXXDU",
  "key31": "nL2LnEc2acR2uadryNG9UjLreVcd4FdYV4UdkMYttaAAxgPuT7SHQ3G9bFTfz4HpxGQFmMibbd9iA2NQvgFdtR6",
  "key32": "569HTM1ytshfMVfGyiFpEc3vt6viSNk963EgdDK14HiKNcbvMY7ptG9eGTKZjcag85RmGLVzjxeKoKk9V54bjd3o",
  "key33": "2NxBYj6t2VfNnSVw7rqikEuNotLomjbuCM4HnzyrckuCsdbeyxLVnBJMFnubwfMko5yyuo6ornDKiasK56FaPdLZ",
  "key34": "2jiNnzdQ5CR9S5pUPFQT8X3mAL1BfsPG3xyPiwjiiEZ8w7k4qJDaQPyg2vkJortDJUcFqzhjeQBEakkiEMv9wAMs",
  "key35": "3p2o5jxgbDLRg4HiEAAoVuo6q5LiMHsfCETj51XfdiyUTNcP2yhkSczxVW3ufW4oJnXLrttKMHy1vDyCqot1iTCC",
  "key36": "284Zm6nc7f8PUY4ezmx3BRfLdyp1T4WB4vpkm65M2XmW6HJGAHrDK1CvT1cnSu2q1Wjzga5Nyf14gyiWfbEgumRC",
  "key37": "5ezM3Vp4U152sW2X6aqvGzHjwHUjukjnYG8ExZcnS4hweXwttgKDksFjjGPMweNxj8dJZzvppBBbVGrduQdDYd8Q",
  "key38": "51Ukq2DxKMF3ZP9PE6kPBm8fGemnCaXPzqe8b1JSXb3A8BWUeezu77EQxKNUTSwrhtprG4q7WBZvKznDt6s1wVqn",
  "key39": "joAQjPfV28eQKGf5XpzKFcVDJGx4HVH9XBMFjvAr1js3JSo4DpsLXRTtuZwLfbqHqnP9TaGdzevi2747X7vqn5m",
  "key40": "4fN5e6kWRasZEhygjmyhe1YY1SJJ8XLvAQ4jru7FSNVc5TqtqdT4Cg61RJjng8gcrPzW24KREiS4iuHpVSUUqdkt",
  "key41": "39zo8MmGnUADn9vodj6nuz1yqLnWuqZtjWDMCgPdkuXCqxbsNB6YqMim7ry5QQ9J7z1reBfmGB6AeRFR4HDdcvKj"
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

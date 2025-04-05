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
    "4LTmGbA8o4f5YV6jV9gd9MimNUpSGayf315cRhbLqgWjPyW8J938aCHuK4kG4YvKD8kgxafk6Ad7GQc8eL6o9HR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25mfmosXbMdpfyE2oP52hTzah3e2vyURrAnsmDL8txFkdazhKaQmUcmGLJbhUdUdMAfJuZeBS42NE2ESu3gtZvw5",
  "key1": "43eCv1hAPrn6rnni2FKRXKB9ktd9vXc65Nww7GXtYEur3MHJFZEnVfa7ZYGkTufCPuwGwDM5cHeaAp7WmyYFdyLN",
  "key2": "2K9xxh2WDjbazWLpAYjWgf6hmkJuaMiQLctLSZKvN3KvivAsUfQCVXnZumErNU2NL8n2hHH7gjCKUjv6iH85Jo6v",
  "key3": "5jPJSudNGDrXsRZGnxyFQYsbp461qorQrQe7ry92GnfZryAj4UXAzCUXR4c97Jnq8oxAcoi9QhmsdmDtDzXkzQn",
  "key4": "5WinG8ioMCn1VHkBohjyGhMtSA3fexkcv8xGZeb8xF6sX9CeexKHnBiX2AfEFU43qvC8XDNz6sfRJqEMRXtShuci",
  "key5": "4hnqkryWwFVMvUGguxrrHQmcD7B85fCMfqcos8vRcSGKrfwSXFJAE9K9wpvSwWsstBxWoBeUJfUrWddLgXDo9Fb9",
  "key6": "4LQyY4MYmiReYueDAAjwHxLk29YadJkMMccVejPRsUivf3tuYnvwvgoiXyo8HR64SXzGMVoUr2hGEf1rkww4g8Gf",
  "key7": "4d1u6EPm9q1JJQHqHY63NSMmG53kP8UBvgX7nQbt5mRRkg1TbreJMDGnCY8y5TyZ7g1ZT4uAGHbkQX27oTbynccA",
  "key8": "2diBW2owWyaM8M4D1hY4Enw4RpBqT1Fe89ZUaoMAsnh3dXuqt5yM65UMZN4JwYdnca1AMn8RCqdgbRnkE1vFKtrQ",
  "key9": "4xZvz5SNKFFeDgmUZ9DB7FbBPEmsfgdcpp1nA8RrhPdGWd6D8S6Gpygy7aXP85Yt2PJAL3yzBVnFEGYsuHWMfB8q",
  "key10": "25TLf5pV98AzSFqR6EhRbabNyxUMovhhMrg5KUCw16FUSTZbCCyCgcaGuEFUdJYzA9C8uzRks6w8Q2nXMxrUeHg9",
  "key11": "3BKVMbuYYpnGychX6v9ZT5ws3WLRzeKjXTmjMiNForVuqVSYuDCsLpqLVweUscrTyF23MJb9RjXHeWWW7d5WqkSy",
  "key12": "32BDm4nsPYHVcJUSecuaXrq4LxbsJMFzmCzZk59GqaXGqibkphXPrXuGdt2iiJtmQLU6TWinEc3hAy6ojD7tKr42",
  "key13": "3pm9k1BhovE4FEDhdaxhLfrdHmwH31Er36RPSPbj5y8ghUAXeaQcguYaTvmZRr1fNXSMTTYegStarKoeomAtYHLP",
  "key14": "4LggcVPVagpbPByvWQ883iiNiyLvFbBsfT16r3oYt2FbzAuxWYA7QHacp4j56LBkMmB3DXySpsR4MJNxpDrJ8ohg",
  "key15": "4PafgJQMzmgWBnh9KYjoW7ZUNLFkHZRZvPPDCkitMrrP87pav7oEftsFpNzKxpojBUKSvwNLKV6EtMc8fRiW7159",
  "key16": "v7oCaYP2bDDwXQncW3F31YZKYdoPvDdGiH93eE1ucCJ3RsSLuFD2iYAUZh6rmvPbdwx2xAnzYr8hJ87jufk6PM6",
  "key17": "x1h7SKsnAvs5nw6eZ9WB4trzaxBQfDXSLgxjnWgExWg2VD9qQwB8V6MShPZuyFKH5bNYuXtEqyX4DmU7HcwRteS",
  "key18": "2dgJzxG1VmBMbe6fLTqL4u8jLQ8spjkTC6MTrC7a5gamWZk8VUyxuNGKjV96GJpyedSPMrq1LygPSV7aVkPBNR1h",
  "key19": "21zVyZ5hxXSa7EZ2nkxDcJWaFaRTyMUh5CMTT9sLmpRAiUWANBeU4gBvwz3XpoZjvmKnTW92DayTRudALH1sQFWb",
  "key20": "u1co1kwfAj9NFuph97WR2SHngvrMSUNpYRu3HLb5LpnnGHQH3iiJxWfCjjqWG8LHk39ewTG6hnhuhFHthBzmKFM",
  "key21": "WnZcMZLy2Ne9FAzA9YDBvB68k1TEHqmSXWbzdiqv73qSPqPnWyYAt3GehzWZBVNE6pWJfZ1agxLa6VD8nnkJLvP",
  "key22": "289g5EzikdTB2EnavURVzxv36XdkKferrQpPThAaZs2dcKfNh6iJKE6x7ZLgWaHZ7tH1kyxydau47gWFPPop1sDF",
  "key23": "35yxuUCQyz5ENDuEgE6xfy1sfLDbaVuuiviFVJ4pEZUaxtk3NoTnLrZbNzRncDGhRYHoHNoQHKEHizgXV35pqPFw",
  "key24": "2V4LLSCKvqPbnvYCNsyyb8xDtVBwwg7VwwYVMj5JzktLRrS12XiVt4gv4KHoK8AQBVZvkeXgPAKpZGjSUZeikMDx",
  "key25": "392fEbK4EcsFTHgcrqR8qiT33M8YbktdNuTadTXjiR8UwSgCkyLBHnocqj31c1bkceT8vcfzootBdwH6ZNvEh2KY"
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

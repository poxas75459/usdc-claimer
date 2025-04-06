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
    "3RmN6Lpc4xyyooYveYVTLqybBRao8iJRsxGenJNMsKdczA1CJwvSd3wDUQG2R4ne6LKyqhix3smeQMWWzGGdFW3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z29KuGVrqYzv6Lr8acHCRepbNnz8DRJDTPYo7viZJ9HKoyQq4rfK28r8fyCHkN9v65zwPy9fyxqkYUkfKy8Ajs",
  "key1": "4XAH2R2pbDXNjs3653n3Ngdbf13BxwFW8ztrCxK7SR3BLQgdmD6V3EKj6Rc6jzoocwBMj5Wriqoosg2q1rm78EvE",
  "key2": "4sv9n5XPPKQp6E4vwcTnEbSjW9Ycy9gfTivm6Xzkf4Re9mQq5QHmNSTDitwQQVnBrnDrTNiCJUpLzQi9FCp9oSFU",
  "key3": "4v6vqiwBSMFvgExJLxqMExXpNc71aKmbmeWj4yP7uJY9Y3UhebCZZuVKn3GqpRGdNC8WveXzFxRAcPahCVbfhuzN",
  "key4": "4BhrxWYzdbJ2cBcz1ooKu9uAHXhQcxkUepgeMamoi8YGZ4YJgz6hhAq9UwGjvUYffnrUbyJQfk4x3oL8fNbwmTYu",
  "key5": "5TbgDnUY4fjULFVgWEDPUkfKp1qwyrrmJrajJnc2xHHBg6LnvLxT8PvccjxPh8oGCJkaV55FuMsrhA4ibhZ8zg3e",
  "key6": "2S8t2c5SajnkCJSZBiqhVMjUhzxEMDfwjWZncgWycm9SCLbGvFYVVuUBXmpr41wkHPw713mEij6vS1DmdcPPqeJi",
  "key7": "3PTN9aHrARq6sbSvZvDYeLasYECu2spmNsPpyRzaEqaDveA3RgbNCWBy1GEU5Fgrvt8cr3Dby6E5XTFdYiBZQf78",
  "key8": "57caNbSQkcPnkEJZP36zTorGENtXcKU7jrq7LHR7usCFJytz6XzJioNVkYgRMv7UXXvu9z4yzmZrkkxMdvkFy3Ep",
  "key9": "jkq9EtjYxJnqLmJrKgXPVDaVtsub7dwatxWghHNo87Xrg7e4xmzAf6fYQZek3EjnALfRpMokbFVhWME8rrUeZ7c",
  "key10": "4hnGLXGc5iHotvt9kVDTXdTEWPMaMyUgwSYFcoHqQTYtJuKvn39kHmwGcrM7XNa6dfZFrbJPrjXkZL4Yy25UBDVL",
  "key11": "4MejheFoQcoqkkY4p1eB9WL9eXXhQuFgJwsptqejdbLAJU1qh1nx4V9G8URpZVX4mmraQrSYxMugQ65Q6TsRgdMy",
  "key12": "2RANNvmczNWHrbq8WjrzywHJnq9cyjEZ3wvvnxJmCHExPozX9voq2UBNborXWUFuYuzc2tNyo1uursKWNkiyynqr",
  "key13": "42BmFPLHdtaWxfd4nhspptS3jEwGp1FN169NVgrN7ZUjXxdoNgA6JVR7ELtV13ygtqHLdaNzmMjiTKx1g66H3Vqk",
  "key14": "4SE9PxWKJjHnMMuG3yM67Z4Y3iBDwV83dp5PH5fyuoZSVQttzTJX8PPoXPQZRKHUxRhYbwAPr9C18tGXXGMgPkFg",
  "key15": "41FiRCBAEbbH3j34PCE3x5NU1h7NorhCaNSG5H4NDwD3N5d9ertt2tLXpvLdGBkaJytdBKMyMPVkaaThwMh7yKTX",
  "key16": "63TYpBRft42UxozxozZpU65FqVTqnsNSZVUDssqJM9DqzyCeqcXxrWfKEseR7fRPCcjv4qXk23Yxu8jyRzQXr6pm",
  "key17": "52PNLdEVRjiNzBkSf3soQv8yxb8nqfAS56toUBpWTv5avZ5mdaEPyGLF5qsfMLotEoRPsDyUzaBKQSFib1rtb6mg",
  "key18": "467zbUWYpUzpzoByTtBMFutUe1LsRpBmdsjC8urzb1j7aHdbCBSmdZArTCe8kFAVa5Xa1xHZyR6kQiRLdqQPy8mm",
  "key19": "4P72Qi5ouHnUFSjvU9wU4xFia576MxWJG7WiFx4modMtFfubmmS8Aw7pf96mFQTWqYYuHjMS1Nthfz2i4p7BSpKH",
  "key20": "3qYAvHM6CZ9fCKu2AAV5RKLx2ykyFY7o5sBZAx63KX9R2JhMnfhQzK52quWEJm4fGxBBauUnBbJ5hZcQnd5z3nyn",
  "key21": "dbMdY31NJFTEH4XkU4eCsFBQm4uDKqrAfcALafz7dQP9T97c6jF85kujqDCMqQenNXCnzW9jivscApJDPfSzs8n",
  "key22": "2w7MoCvZq8vk37UEFPgApxjpjyE4MA92W47QdEPgcd1qWN2sL1yJCLB6h3BtgrxRcw4jjtGdp2gTp9M8KNk7Rb2v",
  "key23": "2otWgS96ibzbLw1JPtyZPWQ7VWw9PFTpXXBdcZ9cQN8KwQ6fqeQPUqAAMEWsBo1S4P2q1eP2LkrtXprabY4hkPH7",
  "key24": "3g79q4sohM55H4eHV9UTNK7fyYJAmJdpcEUgZx8UMnFYh1SthGhszJYRMokD97kaA1fFyhUeiZVjJNR22oUwQRKE",
  "key25": "3CPRtnefyEW8dCSu6qcHvu3jEnL1P1sCAoJxRMrD2nYQB313MMmdoP1ru4EZ2hBpKoJLAG4MLHysmhYHX4Bo4QcS",
  "key26": "3PNnWYXfVqU5SEsU3hRQ5zrbb2mqarGCbtLBMRvZifnxjwbgPeFG2pj4oT4PWygWtbEhYFxyp7kaHoLEZNygLByu",
  "key27": "3vNe5TK4oKW3qzMSEvnQzBjiGwitimbp9PYE2vZWr2oRC15wYbmZQT8DwpTthSaWk4C1GzJqyGJuYP6cVN6NF1TF",
  "key28": "3FdBHXPbQH5eKr1VEdwCbZcWtwM8QLH27zrVyfzcKpcewjxfKwj37gqme9fHPPppowZ4HYHNz6vMeUut9nVzQ4PL",
  "key29": "657dcJ7zsEySbfqqEuytiS8GFuho6AtzAtLYCLq4c6MZMsKLSTFpaQvDBRYrbPzvr6To3vaAX145Tz5oLBTQfmNy",
  "key30": "5JHGdFKkQ2ZzRpHHGuzjkoS4yZsjH3Aq7kWLJf1JK7bMChhuGyDGDcPUWe1DxrsZAVUqhVwKSmVS19BPZcBPDrhK"
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

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
    "55ewudiW2ZFY8sMFk7KZCVHjHqqk4MTFnUTFgAM6TRAdA5vuK71yEFmetrNEj1mPbrSy7hHrnhy1tfWGuANdtcgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3Wk1J6nksumSeFLEkXWbzTkWMkU1ApRpninwHhHCBdmTsASLm154L9it7zziVtdbEjg4DiJUWBSea2JMk3hsp5",
  "key1": "3yiGh8xSscYX7iZPnxkpgtPsXam9CWEEMyDjDusikkoUhtzmQxu1iUVT9AAhsVhmYtPoQdRF7KjpxM2eXAH6uQuf",
  "key2": "5wndhiMPg435NhiNqU4T2UkY3MVHbRVipHF5PtKvv8jEfZHEpNTe2CN4mkgK9Xru9hFpJKthRSK7Xm7pQNN1yKAC",
  "key3": "3vcLvnb7rdynTz8u5jyaG3tueUtjnJ3fr6XoKD9dwxETuqzYZZcPnjjVfaNrFnuUGXZz2Eixm2hKFB1Np517VcHG",
  "key4": "5f2zgB4hjswhGhR1PXpnaAT4xNrSMXw4WJY1T4pLVfZWJn1acbWH8q7fspS5dW36jog6Z1X6LbM6i7WXaZG45Upa",
  "key5": "4yg162FGnhbe925vqaVuJBky7TiZ8Dxwt9FKHpnWeaJLRn8hy4fRSRYzCAVsL1Gxg7fQW6H6kCbiSJPSz9DaAZHj",
  "key6": "4kb5ECYL9sit8JNVzg8DqwGHHdWfByyXbfqn77V8n2HEVAFX6NMeXfTQdo6527eFpwYtDYFXf749AmVaAZJTDPc3",
  "key7": "27EEx5poBsjruh3tXnau262bywqHU9CsG4hGumgKLxuW5gTskBchDDGMuDFs7fUKyz2psXfHWSLZwn3rZwRFTd7T",
  "key8": "5pgnThKQYBa4wnh1gBjfjVPnwXnhQKWDj8oYVdDxWfXoafRXXHqGwSMeU2VgZ9EMfwmAYb4FZQhRs2sr6dgEev9W",
  "key9": "4Rp7Ui5s2xRBzD9N47Je6PQK5Mbv9sAqkRQsmvJha3LPA12Q2UZKDpeJCoMQshf9LiHKBMexvHgDRBuTM1yDzV18",
  "key10": "57LtVYimJDBJ7EyYYdKMzJiHwUqNUgXeBQdABAjpjVKXfWaDmbQrvUnpqar5DjZ8hKP2bPxtncrb8dABzeaoCv9V",
  "key11": "3pUVHgYGwu6VXDrUotcUMJaR7EQkZCgssyDqBUr7QvBmV3W7zE5dbPwvcz6LkcV36rHyAQYiW2CfSApeBZNAt37G",
  "key12": "M4ey7HGuRHG3RCaVaYmFJkt7adsUxrpvc9hJjoi6LLCSZqUVUVXe5aJFDy8Gu2prT7c8QTsDpf3GHAsZKrVAgdo",
  "key13": "5Rb98SdKzfV3YKz54fpy8Xo2qa3dLo2UL8nf8daGjs3xRkzhysCZgJssdUU879i5HDxKpXdEZDpuoh9NNPVxgPrT",
  "key14": "EPVxByWj9dCXKJj4UdWLxUSQqzLh82ahPDCVAnFfdKosJY4aNXwdfdWwSubvdRNeMfdkGMwg2n9ErUS6dcKZuQc",
  "key15": "64UMCK6sQqTjwSDqWPn7AXUP5sZZmr6wKTQYpPBBKk8boZHoQjNh4qHivuBTwnheRCP3QezdGtNcL9gYsCKEejsk",
  "key16": "5AjyzeT3YUFgbcCF75udq6memPZoyFtCqBLDMadUzKvtGDYF3HWEwvhMLVEUHeY4nB5U6yydxgwq68py5kTbCrmL",
  "key17": "5EEvCvmHiXk8eiYznvtPoGjvR1H7MhK6LSVHvE8Gve2GJarmy48Yfk8GKN4VLVkv9dDaMCjXABsZe3CyQwPyFjzq",
  "key18": "2vpEU3XpofYEfZgjSq8NxcKyEEG6qkJMMTzUNFTk6QVdxCySAMjr34jb2WjuKCJ4G4JRPaTARVQHMrcCyMC3YKqr",
  "key19": "5g8DcPsk51GgPoPZrQtXyv5mQ1QdsRi9uEZ6a6bzowvkaS6btaVFk3vL3cGWMJ5vGhjXPwZN5YEzfmvvugGmzBCu",
  "key20": "5vASiwU82P4GwcASp13H7m4gbpU2H2D1143xsHjjSdYhUuDr6WiwCr52CzEtr4Wihb32sGFAqG5HsuQ5VBuuDGTw",
  "key21": "5CpxKvgBhD9y1uDNsCEMWuBtVPaE1WGzPF4cqTq7Eq3oBH2JbjovhMmzkbX6YjNpHAs5yiW9JkrQt5eRGhoNKb9H",
  "key22": "61Na9ztAwzV7r7B6RFT3iKZZu7bVithbZNCqjKvUUQ2wCYjPV1FEMUisR8i35mvHD5WQdfzVc6SNYcXYMpp1K7fM",
  "key23": "gBsQHYz2t2zKuDFK653DRD2EJW7qnNwwGaGjZFjENXLrW5c6ZTDxs2aecNUs4E67YxCqpPMgceyRxEW81sorcFa",
  "key24": "RY8Z3Cuaiym5Tf1xauFayAgZtK8wfA9P4M7ypmvXPN8Pb5KWc8Vb8dV27mJKvT7HFNa1H9HkqQEzQ6Z7BqjRKNg"
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

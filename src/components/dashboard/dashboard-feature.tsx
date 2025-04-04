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
    "3Bo3Qgx9dmQupV5bFTYoDp2hbCbMNCX6RPwVrxXYcZJGzuoxioNFHzPuQ9JGoLPnDjviwdwYm16RwWMjbSSbPe81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dE7crz8xivdbYcsMX7L8sZHrpUJHW2m5PQCf3duaURDdBqzavTTm3g7ZuxhLrNc2CgYNguqY5MbbPn6dEzbw29N",
  "key1": "oKqEs7QY9NJ4PXerSginjCCjC2F3hKsmVDJCV3aDNvgPWVx9qfd9rADty92y895diJqcLDWCUXPp371VMHM5x4c",
  "key2": "36FT1BNmTxgP8J4x9ssonxnx5p5bv9A6vENqLe2nyhFWJA77ASjfXTPX3JCoRjsAP3LypLoojVHd9JMUqXRFfwA5",
  "key3": "5X1vZfHYXe6jp4SUs9Y3wKnqEKE6TrYN6VMvCg94vEkUNyCSAH5MGxFRpXsiKyCk8pSMzXVcXvVyWwFpdcA1iGHq",
  "key4": "52kicHwSVB5ZvoMXX3E33d3Htd6CqxA7vM9c3LoFFst8yNwjBwqe19HJaTjLSq5VZqtYosfqfGytxQjvFkjnvdnd",
  "key5": "cWVT9bV1VUwTGpawJX8U7L1TEMh2M3SCZKspDVLxzhYzkVpmGBrVa67opwEWZGyj7Yqze3R5sA9sE1tPVeVKHKo",
  "key6": "5EhQqFfjQkQxvRpEtJHe3aEAE5H98iom7B56yBoj4tbRjvo8QYDSkCBAoR42rFjEVshEBScF425M1Wb336eDqfit",
  "key7": "3HMqfGXwqSB5q7nNDm979k3y8HXgKwduQvrtDvnFYfqe4vbfLdJGQRvv7JkWX7K8RQRU6v69tv1kojSDr7QEvu1g",
  "key8": "4saBVTzQCNpeyB2NXV1QhhTLiCukjHCiquLmTdMWVHg5CRfzVB9QVUX3LAoQJiSStGxqdrkxPMRvmui42Qu36rVT",
  "key9": "4raEencR79zh9ULvyRysGfthUPBbruuNgYBSbcgN6vzqqUKg5CHDPEZgeNVhWrkpspMZfQFSXbBddj4suZu4SPSK",
  "key10": "2JTvzpVn2D6MztXjbqr5iNj7G4VvvrbNthNJM2UCFNBKaVMdynfvHmk7KzMYQrddWs8HKMCWUCEBYGC34z3KeTdz",
  "key11": "eVgrCN8dXqnsRr73kWB8uLRPaTftAB6tCrcTwVBsgukpQKfeekoLZ3fCNaHGaEEhjP7QmHsJKZGzRSWdWPuajNV",
  "key12": "3k3xJkYbG2khS4jJmterKmmdCbWZSi4zz6YHDhxcLQGjxcwz2ckY156s8B28vFQ9HMxTWvMPwcGNDn9CsacSj4Ps",
  "key13": "41XhzyzJgXzkjSLE8uiRcNg5Bvp47sCfgz4YjTawhJCih38us8A4HNH27rWysCCui6DmwE4q1QT2v6uyM3pCVNeD",
  "key14": "5TUwyxqg9Dfd2ZEkTxMrtQbTdYsaWfMDJDHyMNntwTBCk4YEgsJnWkHfU8KvFYFVZZUx4MMGmjsudr9QxEQyYXBY",
  "key15": "2f6qoiXiL3YfJnKewLfoq4QVxm2owppTovdjxwJEjx1rwfVhSvgomBC7BPE6JvtiCwQHAPnAaAMvnXnBM7zQRbvM",
  "key16": "3qkLzfmyX4FRumiCepohWxqSwecLKHcrD3TjrWmkEEuMeVYSgkCgAJbnsLdHAk3PdkYAes7c4LoRwqy3GRjSwNLU",
  "key17": "4xuFPi13rHwR1YREPatsUcXxX3XWTbUYpWvyiV9GB5p3EwrcNFiR6gw5pN626xRhWQbcvPaXf6JiigiReCYAySa5",
  "key18": "P4ZCPyUiBQtVwiA5YpeMBVrnUihhPXck2d15kTRrCJxsraY8rPm2KPGjTEYiCBBdKzRvPz6s31bbknoumAfR1FY",
  "key19": "46QjnrGt2xe8KPHWt76Yq9zsqzZp7vjRyTiQuFM4h1UGk3KtB1So42ZCGmpdndxNtncvfR7CtBTJJjJ3vvmXmVKD",
  "key20": "3GUUJKEWsr1tuMvm2gPo2MCHStQQHkSEaqRV3Sja9abZccD7fdNz4oWyS72TJjLnu9b4rkXfwQ4yuZdCsZY4TD8i",
  "key21": "4EA7WejEj6sXHAMAtDojZcsbqkkjEkrZPmeELf8d4qAKY8nZrNcyjQTt8KA1Q3tX3ETREpex92k5CPXebQpGWUgQ",
  "key22": "3ovnFZsosEoSv7TSyZ2cFdjbtaix1hoqy3RcM4P8odq9t9RHXfWYtixPXFcZ8JXZLnTPpJL6VBfZWghUaZyrV1Sz",
  "key23": "5A3AbSVF9yWyPtqB71bDd6pBFLEazAvEn1xQxdUWwPSLyAPhgpqbitN6FJvyCnJzwEAFH6xmy3SymHeAk7faJW5c",
  "key24": "2PMxPjiWJsEA6oz9oBQob1ryu5tcDpzCtZUp7pwFF61dHrvVzkAinTTH8PXvz483eUFkxBRA2Sf4vFycoiXEzWGo",
  "key25": "2SCczpCvznjJJBJguVy5zXa3g4t3mQVq7QxsPCNwMebXUUxR97hqjDiWhfxHsErJJoc1RsB4z8jL4PHGN72t3vmp",
  "key26": "J7gC5eYhy4TxubUZbYwiuycYmpT6ZiibGJ2dm9FSKKLWq4BmRZyVoprswWbfFLEHj6xbr2UWP7nNNX1uCSm9K1e",
  "key27": "3aeTkNBs31C1ZCjAb3f5vAEcPcvZ92QkXuoTvswJue1LSzg3vtGjRJmZ6ffHBDmeYMccwxSHymBNHekgRtEfz992",
  "key28": "2HZ4FCA72baknnvFo41oatASTtD6HLwUEgjt2jjeMa9mH5qu9hqCaj8T8tQ3Kk8BdyNJkHnTYZrw8Fxy9444Ln9T",
  "key29": "3xM1n8jUZCsVyb7RKA4sRYt2vt8mLLrYXAnHX9zJr55kZBBnQzeEVhpd5c19SvBfx9EdhrkawAkKd7ZDxWGZ6bat",
  "key30": "2xzXTrYDRN7DjoNRF8quCmQkRdcj37sWfn5SnMkojfhZazf8YJz4CWve1TgosLhmcvd3Nk2XquyenoRteoneRAzw",
  "key31": "5DZEUAnitabZKASCAWafDxuKxtfgThFzXmeXgAL9s8oBrAjbbLVtcj4o8b8KQ2JAi7xV2xoSgzigv3wA9rTiu9Hr",
  "key32": "2Ah33yKNwC4hGDd1GWx7Btm3eavgGe2DHV3K1NXDvWt51owb1YxKBsZLcm6juEs9A62E8iX7campbu2MVmpkvxum"
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

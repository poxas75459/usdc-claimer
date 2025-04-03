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
    "5TUBW7zqkpNKaXFBzMF1LqtqD6y3UW6X9Kjc6rSaYevJSwadM2wzwmBwg1FWjZebwiXxJp3qNnKpLri279EKxjjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59RETcKWS54E1ahrQanUW6WM8PoH1bVA8Lpi5zAtcHYrt5DtF3jVNMNybSWyCCkP583Hvr7SS3NBSAKKQ2ZSKYHG",
  "key1": "44atQe8nVEa57aodmFbt6d21juBA1gXauWJpdWiEMY9b6AnF9J7tsuWxHqidhZmdS3quqAYQQ2XJoXLN6pQKYEdY",
  "key2": "5NcEYQ5X71KVoLTas4T92cTKWQTBpThhoRwb9nzNudYxZmgMyxi1qwTWVvZHaVzULqnf6MHcDCybyJkJwmDKJu2K",
  "key3": "4kJ7TXe6EcHqrwCm9cYzuE6TcLsydBaDT5tu84UCSyFzfCDhmV8AYk6kfzrgsu4bKpcT2ReFjJuPp8KV4WuKypa4",
  "key4": "46EQLvWFSQCsByPkpPgyTP4j5dd7AE3C1Arx2g5wtzDUk3ydK4Ggu5CLAwzm51UQb16Lk8Yj7rqoN9JEK5eW2QLo",
  "key5": "4WCHgrYGxPQ43sQns2Vvi7LGFb81tf5bqfgmvmVdhNcKXGHCvHwFQqy5J6TiPaKGnneLALuc3caRUpZLECjmJk5k",
  "key6": "vhbdGTPsGFvkJpdwJoQ1y2hSKn7FEjumfD8LL8sfVJQQKkMENjNsyYXNFXHb5WrYjWvaCFnLk4GcEaGZScapAF6",
  "key7": "5MYNMJDmUs2sinqrcnyPHdphVjm8kRwgbdPuRM8nBXJamjUkq3poXUD3tfbriojf5fJRprq7LCgNGfYk7ssrdhae",
  "key8": "56hKcdWYt73bKdbPmjQQkbt1WEeS2ywtzfLxCFXB1Pz2igGsNyqsU873Y8yM4FLSGun6XQeriUdPztPmX5TznZMt",
  "key9": "5RAbuxwW1NgfQ2esfk6Du6vXVGt2Gf5KogNsrThotd4WVtb3meTxTcWgegAXYKFQDEoWWDfkmgogLDdS1FLUZ3eC",
  "key10": "5u71HPsPSA1ZDptktnQgZjZmxygNfRMSXJDXEMZZLjnmrirdSMhuZgPktjWss2Lcsy7QLWSr91n1o7t5A9oB8eZu",
  "key11": "vzQ8b9qE6XLtDMN8EVVu1mU7qdxWaP7mcWMeUSYMmmyvJu4NnGWrtskxdLHzQZhFs387dfZ3ZqwkSVqBscEHdmb",
  "key12": "65PkJ3GrwF6xv84XyZcBVFSahbkWHPGSaAY3VLcGEHSMEh9ubFzxf3A5MRNquMoe3FveEzRFZafQiM1eYonHLVYN",
  "key13": "4Kpy7gJF3kcnivDSjrgLzQHEghXhAoZmNCMkrqL8JrLHuTjSBjLGkF6JVUaXLq9hpbmSH3jf3zT8bGKfSa75snka",
  "key14": "4aD14zKQxhstMAL3EhZrpmWURZvWQNG1aCjd6hkvjb2TqR1iw934GeM3Zyz6F3bWJ9uc4R6y1JrmkEhqoPrEMpYa",
  "key15": "3184Fx9f57n8WKWsh5fAu8FLWdeoEtkSkQfuqUpXoiXJauFuUGyQenMWmDpLcqbS2wyPrTHz35HpiWz9spYheSks",
  "key16": "22R1JPTLZfKby8WM2D5c2WnG5puJB7zeMASrUJjQy6XVA4VqxNDrrf9Qs5hB8jRaRQExvmRuCuMzyi6P1smYFU3M",
  "key17": "aWK8qwKuSJi5GtGt7jdWBktRCvZryApAC1VNfLFaLmpRvuLmAL2eiG9S29GFBnBLNhtZ3CsfK3DoVM2GwMjdSZe",
  "key18": "3SYJntcP8dDuKxak9Ai3iLZkqG7GhCyCP5dcFXALme5FTtRNREk2oeiM1GNcsMPqxF33PVBbPeBSwfbFhtJCW2rv",
  "key19": "vdCHxUkLF1M6NaL62J5XYCJqhErxNCDh5Cw7DoDyVwW7gkeEU7K2nvmZM2VEMFAaNZfftRXioQHGrgRtFEWGtwB",
  "key20": "5nF8UHxFiZw2NDi5sWRJiFXftNg3tb2gPVpaXLJs8UN7Xnb3EpfkmzL5A2t17dtSGQ2Lxew3GVdoBv3TANQHwH1o",
  "key21": "4CGZcJxBnKQ5hK8gmNMNPEthmJ3RttevWgW9RrU8YKxpsjUfYZsFyHQAq6E3bnjy8SSKqWq8LLBSAZviV5XAknHn",
  "key22": "6gP64KQXErP393vtHXtSoMWktPmckYyScFnH5hQSB5kir1wuNLKXP44pyaa4hR2rdRHdVGuTs1EUDYv4TASBZT5",
  "key23": "5rZ5u92Qj6fdZpnsE1AakuQf4TL3NEpxTMwnE3koAZkE9A523Sq9RUTepYVCM7WX5QV5DHCbYLADXvHDQ6e7CkK1",
  "key24": "wz9KpTrjxpk2Req7zcphVS9yBPRom1qp13WcX6zhfCXnTwjH5Hmk3kRYepzziGJkipEKox45ZQ7QBbN6rrMSuUN",
  "key25": "2wQ7Ji5T8SLQKzsnpUhUU1N8vrgMWCHfBrwSpBQm4rk5kskFE5PiMUHrahXJZw2ixQpiP2hQnPd9EeWSdRm2d25o",
  "key26": "5v6Erit3bhirQ5cYfboePTzcSAme7Jd2vyx1hP1kmWRGCy6Bik85Cfs6op6kxb2pju7CvphCot4RzeZYM7b4NDU2",
  "key27": "3F3nnKYLCn4FTU9nvZQcbwZojhoa8SGUK6MGQHreKWKox3Ek5Yp68N8kphJSJsEJLunKj7jTnWAG2iUABAbPJ42V",
  "key28": "5NG7WJP2yC7njJu8BHVFxZefMfaGgYPmHYPdv83mkYtHkj7zRVFq1UdCHUzzRHgyu9hLcFEAZVFkLeWcoeoztub6",
  "key29": "3WfP5d9pmNg39GHa6g6SJnzUF6oS3nKvED8xsk2Bu3HNYWe2pqtYY1cvkQWvwiRLxns2ukWDcuw2ukiWAdYLiR99",
  "key30": "2p7xNgZKNHteuZwGVXVtFZSrdJYtqjtCRBfn3KJh7BiMXAXDFmT7dJosYcTy9rxhQ5anbpAfi5P4kwrXjvh5Kyk2",
  "key31": "8z6DNaNbRxqhUAawYuDYFRdMwYzNhNJZe5712CaxFtbtJscEi66AcXZNhEQ7L6RKCx7SALBLoQMBkvwhkH1zNfv",
  "key32": "5ZM8FszmWgZzUCSqzWgvLGv8C6gYaLPdMySYfTUdzVsBpXFxUtS7Gb6Fno4txYaLKJkiPsonsoCU3Zamoi8Pthhn"
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

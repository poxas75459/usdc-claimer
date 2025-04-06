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
    "2T2WtynbrjK6rVZdSAZ7LfPgfumTV5ZVC7iXn3ckLbamAyuTcu4CNxfEuEvFWCqcpXYtFsM84DPLMJ9VsJbazLEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GKNfCyCawN1vnfdj2jvtUkAbpWXKvHxcsKdrnwaAWDGA9z4FdxwK3AtpKbP1qPfggFdYdGy7C7jRZ9gA4S5rPAR",
  "key1": "5H3wwpvPzP5QW65jLMdTutFB2H226xVDwvH3mkH4y6YKn3cXwxKUcc1FvsWoUdgNyPugJBXtGdcZ4sn7oAfULk6k",
  "key2": "3z2GZaaAxNk62VXEtzodmBJAF6aBcH5VXZFc74eRRcixBCrEFLRz7Hfc5vMFjkqQG4QsUjW9YXDRaeHFpjHkEBau",
  "key3": "2tu9BaCdxYUB6KEbRa4Q2Bg1RwkYRuD8ErSezRPJGryybuMybrSW7wiJ9PtDM5HoS3nN9wBUkYMEcasSDLTaTUz7",
  "key4": "5usDF67Kb5Wm65bJxsi3yXJg1tbioU54cJi2aE1DXgYoCT8GdaXB5RjEnuRm36HxK23QD5k5oeQh1e7T48kY8KHu",
  "key5": "4Yq4pqWLfgZs5dxkjM8bHKhGR7aF3hv58e3a1pEahiyvzVniGLEJYFyz1tS6Hwvmr1qaK1wE8DNcrhKfN9vQw5YL",
  "key6": "2SQGMABzd5k93kWDfwPyZXrgPnCpA8Memf1Y9wYWNr1aeGvjHvtZSy9WAn23L5J5AiUqrVAZhoyQtLbkinvgjfxF",
  "key7": "3Sbqmz7kP7QpHgAm7A6bqjhCH6HbNgz7NsRkEAfVNNXnzmSaZp3vejWvNKnvZiGSQZpG4Y4g2zRA4wHQcHzpgKPj",
  "key8": "3KXW4jMCWdsog9xqAbQ3rhmpb6EGT5p5jLT695fsBJNG2ScN2iFoXAxYFjEhXks6VwR3TzApL6nFqWJVZbKnh2xg",
  "key9": "2LH59WbVEMGqK7B3aNZZxSEQhUNR2dFn9kGM7g9wqx86Eo6WHpQ3rxfQUNTAUSW2sd7CPmV5FE4rCK7ipByjSvtd",
  "key10": "dUmZddydChrZcboRLwLtVrbD2LWZK7v8Uz3bLx51KdbcDboYWFuNCVJRaPXMnd3en58MDGyFdPnnJN6A653EoXi",
  "key11": "2GXWo3zGhR16iggeasgmsjpwTTDkNkkJofDpg2wjWKf5rZAdSDjVc1gGZ5jfBeBg9vurvwAnaU9Ke6xGjn3gkKyi",
  "key12": "5kuLyeY6DH8e3U4HhonrViGaFrYyrdT5qaXNsNjSva2VrMggWAtcaTTmj5fsV7c7DLCQnZsM5j71FYzPPHg4KDy6",
  "key13": "2obqvKAGr5MZ8hwRbYtSgRAwF1cTQ1jLQa8nVmhCawmDE7piH4HtWxmxHNKRh9KZtmar6hjS5kXq7VSvak3jjvtv",
  "key14": "4p3JtupzgHUFpqFzCAviSrmUBFQTAWfACka58Dp1PNAREovfgD1EMa65Ko2bm4Kxqd3BHW9akv9mVK2u4cVB1Mwy",
  "key15": "4N32Zq887KuwRoUwa3sAamv5ERC5NE5zJ5QuLXQKiDkrEg8bLmbXJmKowsfa2pDy5DUtVePAecQzq5f3E38eWRnB",
  "key16": "yg2qehzXLk1cX9DMyVWAVVkQB7pAjBKqgXBxY3b2QQkdj48TmU8xRG8zStGZyfFyLtNZA2Vrg6pCSvNtJAGBnxQ",
  "key17": "5giqJU3N7fRzr9D3zmujL8fRLCnGfnZDaqG96Q9wPMSo74FhuHRKftwXcgEX7C7xA2DPk7vFLdFdgb3Q3Raa7DaH",
  "key18": "5AJL9jaHfihPCmPiWoGowu9zoXZgd11gFzRePq83s89bZZR9ju7sCiVEdGSpdBHUakYbSJuVtzEnyjRqUCEMZLYi",
  "key19": "3c62HFB1k4Rp77in1HE2R2cCrzZfuXR8kJqzwDra1dWNH5x4xMzW13dq8S6TnDwk6dBW4cEkur5sttet5Um7a2t2",
  "key20": "4hDrnrfpzgzCKn5JSrbUWPQX1HXM1dCvnmQC8V6hnE1ZcAtPJ6u8twvSWKaMaXrdt3T7XFrEVuvuZSHrQ1HJk6Y7",
  "key21": "5vWhPWyid4wDhKjWR7sQXngzkmiATUDagSnxM8QVKb8TavJaMDipu5VHDSLzjPBGVKikygqRKVvi6Up4GBDZPAMU",
  "key22": "m1bPzPCBzbZFtJ2N6PCHfuTyyQjTdXTh3NcuavuYDLWKoLGq5mq2reiUZCHFyyj9VuQ8AQ7vfRhC9tDer5ysdRK",
  "key23": "3PoNu1sjPNVWFtFMYuuyqThzodpHVTEybdHFSGHvyJ5Fg5GeXHnczhVS8rPH5AdZKdAx2d1eakBmAGrYa8dHLU9",
  "key24": "33fd78kSmpRcvBcVGhkoQDfMSSYKvz2j2Gpjfe1aUeu4rguqeR64h3CGskxwfTDxkrct5ncYB5Hsei1JRiTCE3V5",
  "key25": "614AW3Jfjra9QuUmmSQNxoufACwgBaQdXWpggicv2EtFhfvygnQPSsttGbn1ngeganC3wwLeE3XhbKeMvgYwT46Q",
  "key26": "5YZmJp2QzkPDNYksH3zML3w6VNjBZieZvSjPCHnjBbrzh3MAhrd9hJa63KP5xHTnkvnuVn2awUpZ2A5Y3XG8Ug6B",
  "key27": "xZaZ5sobKr8ezSMGT8TmMg1zt5VwF95eE6Jv9LXoZDriVUtkHFhpDBwRLDTUwFiTjAfjrFcrgUgJG7WBnnE1D63",
  "key28": "3GE98gtky3d3pzDbgCh8mNnABQJRjk6385kqFutLAYmREbUGm18kWASLyqt3B4HC1EPfKhxLKucZrfHutxgWTZJ2",
  "key29": "4CGj416cmff7PadH96hNjsS4kc6gZCDaCh3B6kSdA6Hr7Arr8h79h5VmyeKnxmBXEB7XuhtF1m8aWzbFFwioFyDL",
  "key30": "5dCpaz82wXHBKHctw6wb81vyBoySukhnQgtDuL6VgAsk1w1oson6ofHL1R4y33spH6S817ZwD9cmYMnKaFD8Nxrg",
  "key31": "3AYDXhArgSShSxAPmH5UjxSni3wX7UHcQzDZCSuKCps7WKPEtt2TSBdXfa3q5YzVKyvxBXAv6sA3sLikyPQo3Tkg"
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

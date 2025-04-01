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
    "4uXf5vwV6FqMYZ4SdWKoWxYryHbEb9P7V9hPu6dtyBFNHeH1wC8mgh7Jecp3R7MkU97whcqyL5XSPohGMavZodop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dQDuuNmxdpUsmLEQj3oCm4k6DEHeUAZbEo3uLthSXHwWj1tzLghzEFbanNaBEjXFu3wiNeH9pi234FLKjz47HuM",
  "key1": "5HCVxnwkRf45TBcirHzJjeVw9wkf4REep47bQCy5dfuCCKwxbQjXcLEByCL8pZNhEBhJr731XFBBSktVLEo9cNry",
  "key2": "5E9oUufWR4PUdyBRDbDh7NwgL2DDWAGjAbTNhCrNHi8stzMBnLvdPaMphWbfjC1iVwvPfYgdyT9AY8AbnbELCxtF",
  "key3": "2nPhfXBuiNMGE5XxPLKsWDDtdZdW3Ugzdb3WWNQDMDkW2Bv1Q3yRZETp9tVnn2qaZp6dGLbeki6YJzxHG3xMpDpB",
  "key4": "26SKM39bc6puYzFjgbCGL8fEMgtR1jzuUCAg9bjxME7Mko6sUQBikFYbdTPrW2zWxDZ6zNP4vF5Nr3vctiVVJAN1",
  "key5": "3SGBH28jCX4x7ZqSfU7gn4R47qZwWzLaPYvLue4SDo5W664wN8dW1dmJTXQrboWb1X6MEJ2AXXeZacy8Aw9Coy2T",
  "key6": "3xzY41h8Cwn1pykZNS8HAZS9ZD2y5pYgj3uhY6ZmkT8VvbYNW24fwqwxje9dw5C3di8hJpHDdd5DTZe3PtHQZexa",
  "key7": "2VWbKu7it87ysHBaYGAK17hjsw6PZRQzNscankxBYFRvJttHzSu1KYMYDqurpg12KQ5efb1mKsDQpEFmLu9kxwe4",
  "key8": "61tZHKQiiVjMNqJm8N7UdEzAzGL7ksedgw1PXDdAC546C8te8n9VrpcUJCTNmkf4nfjZYWumq8iPhtQGvsfRbsGW",
  "key9": "4Up8Ss3Dg4LGz965FmTAafcninhuPUZHBVdDFqQcJerx21HxjF5HEKmczhcqpPrQn6mrxntQoY9yMs21R75PsyVj",
  "key10": "XWLa3dbhkUoVR3NDjhnkDL1jGnX1D9hKdFiEbFUM2oDohEdQrqRLPKLznTU5XY26Jqst3QaTQV87sXa3qHqrJdb",
  "key11": "2ScNs4MV2zoRNTazAA2qRcNEtMgMt8naXcZqc8FQehuzY1L1vJdJqHfsRC8qorYRc97FwXusnBtcp3DvywZXkze2",
  "key12": "5Y1fYtKW7k5ipR4Qj3JYLJTrfngsbpceSk8Th9PorY5D311jjVhyiN2X8DBcRrao4im394N6TGTTHJb9opnWCL24",
  "key13": "3oNHCZ5vG6QXNcwACfWrisGnR6YsjZg5M65m8pec3w8tscbWbNKY36teUpNGJFWdHWM5vmpnLcwQewPwpqfc3MXB",
  "key14": "5exckWt1L1bSKV4PVD2amUdUktjN3pWyxH9ZauJ4SPqrLQzJcTAq1JAX73JwYYn6gnoHwycZmEvUX3XkPrbXBokM",
  "key15": "2tnFgechrwWG9Kz5TPVJQ6GEsTqx2f1SYvi6hQfB5WrRarv6bRKVrtWErAVbBVUFFYLfJiR1mAWmzf8DWLfugLAr",
  "key16": "2TEx5dvf9XvNfqTBTX1Yuyy2Rn74U7GHf62uQNmfQPmdXavkqpNhrmCm5sfejPZ5vdXWb8pYoJEE5zJnTFaqw3eX",
  "key17": "5EffBZemiQaVAi88ccgHSUx7KtLaBJdhkXRjzJfcaMvTUv1ikumocrtzdFm8NZzPUg3ygg2ZZc2Z3F638kNqWutC",
  "key18": "5ecpu1UjDMx3ecSJc25UoSQEcXQkdPEVUbdBETx9kic6vm9r8GBtQauwS26jd45zFbzQde1zwtLwm3mwoJ7DC6CU",
  "key19": "5kPqKe3SLLuqxgfd6xMLvRnMKLaZAW2pEqrtfcXBg5aKcPsD1vP1gsfDFhWscmEU4WpocBibA6XAyX71qTTSD61d",
  "key20": "3Yf4ApXKtU2cf7wvMj5inxMLUbXujUv3oyDDBNHzEL5UTKPpxB1UrSxNfXDVo9mGvp6wCd1wHKnah8eJP82bqEdi",
  "key21": "3Udf8xGnKtnTiJawXsnt9oHuZNtWW115zq5VDB1pbMraEkbLempKAULTKrfpszQ7pMCLHfuiHLCueWiBmYNqmFkS",
  "key22": "2rrM2T2Chi5XX3wyx4n4r8VVSiiNJgGnDgNxqYqdYsQTN3aZQhoM3V6zPgpNQ8xahrQWUDW5jzbJ9ztjCHZdw85B",
  "key23": "itfsME9QHY5wRDX1ML5bHiBePYsyA5HdXsSTwFQP1rpdwidnrdTFxva2LZS1BxYsUeYHmDLUdno35WuC6GmcFMh",
  "key24": "55wc5TKYaMUWCyNvN9bswjoz5hrmGvtL4mUavZ2qaQn3hS9dvYC4zM2sQNyiGRkKQuWnYsKLmrQo7hZ21pJy6K2w",
  "key25": "5tshi9mjXXYWPKd3yirKeqHYtUYfPrxa3E9ydy1KE6MLdYhHWC5hwA1BkFoQPP3SXVHksSF7CdXCZqY92Uq6coC5"
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

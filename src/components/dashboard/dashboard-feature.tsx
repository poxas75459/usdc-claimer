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
    "5LXxtE3AiDjnWCBUpHXCbeD1saRu4X5YVZK9tji5LnNhEQ9Saduc5pA6mabDEDESjmLt9pyyNhSZvDgXwXhv1hBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npjbBa4FmabNhh97L6MG5Ps1TqTdmacLD2icdg3rSfNdY2zLMHL3NmBLrsvc5vYbysnXsdrM3MBPbA2ShgJqJSp",
  "key1": "XHVkB8iYSqAfU2et7GT91h5VCxQTs9inMi8Cf7cCuiqHbxNFjYHkvCThwJDnLccC9XP2T82DWfZRBeCRE976x26",
  "key2": "3Z3aSrziCFo8LXW2j5TaQMVT7EFZKLsGhuDzB4h8J2aUWHmpsLF9jcRDh8zk2aetMZtymViiSyy6D1u3YrPDMK12",
  "key3": "5X2eDjfmNBrnPa6qgp9CBxgVSbuNz94TxzYcqHDNrPttTa4ajknpChkRNRhKTSCXYPaSUMb7fp91SQj1KH6CsYn2",
  "key4": "3zs8d9swYsXZS9KGncbb7SMvFTsDMyoAaPYWGENofRs1WkKS4euns6B5JwE3J9rrRvhBiVBeiiho4VZqA3PoKtWY",
  "key5": "t3tMAoZFFUPMxcDDXfoBxaQotiNXwuLnmaszTgsujrdhToCBVWRa1bHwjRaBhai7my9ikasxrJN2QgF2dHsWUsm",
  "key6": "4P6KfCpHVcLaqaPdRvDiDEY2UUVVUWcUsc9iYHSbA7547M8rfEo9R4vZc6chAj3puCeEseM1oiSo63Mso1frEcRX",
  "key7": "4aR4bMBq3Wd4871FXT8Ypgom16fM2RTCacYYifs8sNF3bqJR5Dt4q4TLBf3QhYjs6j2zRzUzRATFYMMNpKQKPgod",
  "key8": "23bM1xxVKchZXVBZ98eRHtoBVVfQLyWHL7RMMcTYKsMm9bhN1raBiSVF6hAbgLUheBWaSCQgyo86aQMxjVPJauQb",
  "key9": "y59DKEvC3BfnVqKnHDfnr2t7pkjKJ2kQHXTvjeUV5m8ENntmcxR3q15DPRLQj3FQgmLX1Wxya1y6TbrK3zv6ANx",
  "key10": "2T7sezGBs7QJThsGdcNonCJDJw8FTZxseeaM1pyKRHX76Fv1trrbzcTefpTXjDHHp2aaCoQnjunbU4buwn75ug5U",
  "key11": "4uQURYUMuH58RTUd8qSXX8ojiYCVDvRYuJ7etPUiZhoe9tD4QuDyU9YrArWt1gsZB3Ha79mFBHAejdxHU6at4QwS",
  "key12": "Bbm6hgWAhQ7ygEaYAgkKmRBwsrTjxQgMwG44izDgyz7L8BcAkEpCr36ZpL4TSYu7qJ2kHGdbAqbEn1PbrR3vGAW",
  "key13": "2E2JpkTiXGG188SC4EuAwpachZuaBjboNPUHW2qNhz6TkLa5LF1GYBdsFiNvKTQVNxp44dHreFoBN2zBEfNjxsuQ",
  "key14": "5x9xRdAjvgjdo5rGvijMzTRtUqNfke9sbqTuxSXrUPK4fqNySGJLdaZWmpuoyzE5Yv3W7suEmzPnbmLh6A2bKMWK",
  "key15": "2YnjcuPgBzpzWvHxVthBgjud8uXbumzoZ8pQV2nKcb3yZ4ZJXkSJ1Hn5Pyk1xmRaXp29bcLqx7L1NanSjS2aD1Zq",
  "key16": "fYG4X4tYiGzCmTnze14GG7ycwpgoCsYRhvwM8bJMUKtJQSp3iZAgr54DR5sLtoVrfmKYQ5Lbimvoi3T4qcLwhyB",
  "key17": "YCGKCb4Ckhtv3Q2Af7TCMdAuq7q53KDHDc322jrhNeWF8fswhcB2dSpNC7mbY68T3sUThUQDxiN424pBHirDrML",
  "key18": "3GtFUQP8F5LKHP4xS131TcRXpNfD6KwKAFXHr1UC2mmMe5SXdv9gDWi3tWfe9pw1vJkGgWcXD4c8bsTghoN94WqR",
  "key19": "j4qBUFJeBc4ihsKqc1hyYxMrQNebCBUFzu3eMacgYxVEs7x886DvDd46rJWc6YUWRGxBJXEzNgXFAqeS1qdUafZ",
  "key20": "3CTadCnMzZmKNM64AFVk5Hp8UfEMTE2HKvfs24muh3mV8kDN7utC7ji2upBbkZefEV81DEtYH2YyfYfFYQXprsRx",
  "key21": "5g9vKmVELEhUfHGWFmjoB6QqTSK79afZH7vZdRWEaPGdvYPX6fYiPiH7yJgz91ZDxRSdzgtwWg2AD4QntEUzYTui",
  "key22": "2UF6WXsuJPKTQK4Mgt5LcEY3NCrNRixJwzGmsfuUu2pRJgHoa52VEVC5eyAai5YiSJXA6iCaaxUEnZatsjUoHxzH",
  "key23": "5EpgDkUDdYQJnTMU9VqyT6w684eB4afDcy3e3hCqYMnr4Wxc3TX5PH2mvobXouwKadJT6bhQdx4QCPDwVjAiAFpH",
  "key24": "21BNW6GMa5hbWHaSkuFcmNnFzWcQzUtkxttjgjUfgL1LrhLhVNdG9bLPmUkaMmsT9zWAADFf6dsPyV4ENw6sS8xq",
  "key25": "4Mhmd1iLSAnnZBs577YqgmFsm75z8gWaYUqzg3NF8Eq2Lgmvbb88sWxSRcBrhuTZHPKC4J9eZP7Pb4rK32cL5L5W",
  "key26": "2UUqGGxUQTAASwBfc1eQJiew1z62R81xBoLYQZAcsAbyHLN9EGbGSmAY6wARWdCsRudyFze33DwCmY6TkCrcVJJh",
  "key27": "3nGgtHFgfvgrVuHzW8HLqzXHryFFbN8kVCMCV43KGAehDwivzi6KPUaqHaifvsaEr7AJc8D8QaPJmCb6oAdiStHm",
  "key28": "2AinhShcnnW2RQZf22QbtFMSrK9FpaBXKD7VZoFvkgyum3MpaQzXoko1FrCVrNy9Jy2ppfoufXPs5dcr1TX8m6v2"
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

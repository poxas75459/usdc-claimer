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
    "5cbfcsgSnBrDGpT8AN2ZJ7er3748mwx7BZ8h3zBWkFRxQbUKBWh8vtvfafVKMVjTcccCNyeXSEswmAGN4FUZuRxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U3PyobAE4uNseavj9t38gpCU3vMwuPA5DJYhSM6hjrayNtt7SiMeweeHkqWQQnRmDSCcS92RWXMzdPL7s13wRCE",
  "key1": "f3SWpJmr7SvZnLorDw3MCQDLEFw5ExoLUMX7vbUZjqprJmfzErcKAdPi4zhLRuon2AMSGu2ECk91sdZG6Fvrd8i",
  "key2": "63AqMkLMoDQJwrZ5kk2GXRxNsXdXsQEhZxUqVB8TknJ7Tv1R9aJ5HGvzQ7EwoxUGvQ9fSPkZFPWj3fuFd1ypBZVP",
  "key3": "jwiXF32F4FiCTmk6E9G83yjau8S4cy8dVf8YssMmtjESo8t1nX6aqhS48X5KixBLzhp4fpZSPDnyiTSfZfaMdnB",
  "key4": "5nNcVqmNVztVAcvV8ErNkg68uiB3ahcueWFP36EpnwpqfBp3NgLMfbm3DRkdJ5vbVHzGETsD4RBmcjFf2Stkv9wa",
  "key5": "2kMXyuue7FhAmRxoWsPzDRrUdQS8VQcoAckqsGqt6rAjYUTXswDRoPXSM6FDqMvsXTNK7Z3FkoYZhdjcHrzysA3X",
  "key6": "5YguAmABToXgkVui1RjexQA3AsoLy37MVRHeBEjQdQAHpKckXN94EjNYHgaGT264LwfLTVzt92pYguw7JmcqKVKc",
  "key7": "5yd6m5Agayz9Kt2VE5jwHT29saXF2MdW2vbssGGkqbr89AkkaNjL1299x6pEseS3f3JpmgN6xC2tyB6VPPubNUfV",
  "key8": "4kNaPvfybMFjSyXwbsduViKPqbfBYb2uoUhY55Nji2JgEGqeGASDcZCFREehkFR6oxKEATTg3Dy4j9kU34hE6qH4",
  "key9": "66iXXYXXZvGr888tprZwrKKuxBwaE8sWSoitpKBaAzmt4Eh4w8rcjhqEd2rXvHZVU1YzJ37oAS9cJzX8Ny1W6C6n",
  "key10": "miM3JThSmXHK3rHAMzipzmSBYZFa8yHhMBLDUZgbFzScnLuEzQ7Lmnv3BnGZxRpfft5NMGu3Anw9RdqBcy7yTjN",
  "key11": "3trisvqVgB8Qp4ixsXJ23tZzUcXqR4NMMDehonWwobj5DrUqSrEp1LgYWqiYeQK5YzTQRPDCgYyFrK8VXVcck19h",
  "key12": "54F9nQtQu5NXDQSfqUz2Xy1TD4EGtRUcFdAHCULN6TJzMpuD6zKRz32DmZtr7e5BwuzUiokx418qoAKQGuu2YPEY",
  "key13": "4n93npfiVvYEhv9tnhCm8ZwpAigbHVvFrdSStWGfA1e9k1PiVgEdBAH6uUurSsxnMsMTM7bzdrdFYvKYX4PZLfsC",
  "key14": "3yCKdb16jQuhNE9EAyGHFnv6acgV1MQKmsd17JWJHd3RtkasRw47Mzge2hkj7gy8wX9ZZ1Ta444F56HnRFoiSyfR",
  "key15": "4nfB8b9rEymW45Lrddb5JdHQbRSceknx5EcfnQXYwMQ2cnc48EPMqWCgEA3Bd1uiAedrziGkFPtAzDP2JTwHFeLr",
  "key16": "4LvP5G15bvA5JjjodtTk1hSuoHLA2qdoN4EqXhxeVYmwaA52q7EF9qxd6DvBXdod1PcNtFof54mdyaZawgxCmf2G",
  "key17": "2Si2ycUbK32XjEx4MKS6vJvW3mGK8gRSghuyzarPBuAt799f3TXByebboMkLytRHsLmQENj8CCkRsXFdjGzfthTF",
  "key18": "3rtkt6BMM5vrYHXGs4sMQmgUFurieZCgHBqhNGqUs6RmCaqZXY9EdgP8s48po3DKGGq4ZEBkGMdC9TFSqrQMZa3L",
  "key19": "2kAUHThZCALxApKbvUdMT23e7QNGmnbctoB9dsiytbqPmphX5LHfadBWRBWEsqbrLELVaXFQTbkg2shtsuwvJV55",
  "key20": "4ph8oqYWQ9Uj6SnbaLoMhzQhN3YKoQPnLrfJzmKT68tu47TPRka8z6Gcm1TMWzMib8RpkXPxGYJkcHWntuFif21W",
  "key21": "UqHNXQpjy1DSf36ZGWA8Lk7JmYjzGmpbEvvd29dnvn7mdXP6knnW7BB8Y4hBYiyyzSN9nzDvbWGJWQymd3bT52t",
  "key22": "2mkcR42brKB2hEzGmksVUDpc8VwXpoKBShtdVwkbJmYE5xPuy6iDqCWwwkPEVmeFXLgCDJCNSiaxtqzE98SvHSno",
  "key23": "W6TgPsKQ43Rk17At5W4wabWTpYCpRcTdNrtLzmzqSQYRyXTLZrtzBRWTs4VycU3E39SFKNfc9zb4WrwEPPRNsTx",
  "key24": "5MrUJBmPF7mkFP9bXHNsChYkhzZ18SWjUciakuYgwtXXZEknf1Zcf3HruddE1AMyk1baKCiNzanePHfrXYXDpirF",
  "key25": "2AtfuiK7HiPPi8FbxGGp4Nxj59VLLjGYj9NYn2NwKF88NGcm2qvYaCm9ipimPagAAiWXKSRT9JW4KqRbrPoGW5X2",
  "key26": "4KX9HGxV2bEgYZjQAoP6nYDGTgHh6nqM6mJfvfPkkXvoWDteDzxWpqX9kNw1AXCqRJbh8iePMkEVKgwps1s5vaVD"
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

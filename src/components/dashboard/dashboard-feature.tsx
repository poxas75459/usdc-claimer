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
    "4JxdreBq59YTBporkxGGVV8RwMEuG5pSuJeD4RKdSnJXUCSwMWarbY5Rgy8V916ZuScujbiSTdEgRmHwwEKEnai4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KA7A7VCbReoCNKvtT6giqrNrpmsVEzCYPgP1SbE788RZzuA5zpyAgKDUkvERoF64V5bnkQmfnZJTzzpyKhstjKr",
  "key1": "48KB79MyiuSqcM6nsgEUG6EotZko3hCK4C7BYfpeC4V8G62DF9avyBKiXd9wDrvTrW6t8tcszD3fkjSzrhYKvN2W",
  "key2": "5ZmHr43qKRtrxu7FhXWvQQA3QcXPm2oJjzW2D7Nv2g9AqxhQm4WLXzvHtfpYhp2C6UGV1xGBaaoc9VA8VxfYq6pa",
  "key3": "26XQFHmECjgDTe2XHHCjR1z4Nn6xtuPVoskshXQyaarRwohfhG4tikZhnaewGmrY2S9t6VHG8M6y979oYoJPbkVz",
  "key4": "3GmLNiTwQiPdvvQAMRT2R5PcnfmRfk42LcNLwm3NEq7TQvFZzTk3S3GXy1mzTFw8pGAoyYB22KTANKd8z7FjJA4A",
  "key5": "29tqiYbNhM2Ts6RL1SWxSVgGANAzFENvcjuucuwFmJjFaCqhoYwzK173LGt9kdEGwavjCJKESfvjSehm4Yjdk3ee",
  "key6": "3JeErxG4kHxBhb2biCU6FqETwNzd4H8uBvs2MwknwjfWvFfGuUacGTDm1UXJGvL2gdp4vZsE9rRWSLJh4DDfzPfX",
  "key7": "4iHhWUkPcQiMPsX2kV3JsVMvUHrJvi52irWE9dMvmNRD4uHYDon39jkHFpfaVgY2xAkbU8AHTDgiyhYSxDvtDs5L",
  "key8": "5XK5J14JhXiPbxgabQXncN4jaH5zMqsj7s8SFtGMERMiCSKbNZ6hTGTbjR3fyZ8yVRLHGPhDb1Kq1Eb2bSKX4RRP",
  "key9": "5WAWMbUg8N68f9c8bXVtL1yBQBhqqfa228iLWpmgkg5APvxnpMUT6Zn6cyt6ZkByFRSvHPNj44xzG5iNPAuLeEJn",
  "key10": "4vvUYaMTMDfmReHUdrF6dLrpcmYr5fXSthVsKiELgKuBx85z715P9n9Hazq3VpMzqfkQ1Xbdk5sF3v5MjhgeXFkA",
  "key11": "4QeG2o435hUd6PjYF9QprddqgRG6fdArXJ4hyW7quevhn7WNYnKAbxxUoeGwg921gQSTWjTeDv48ya5u1x3sTRkC",
  "key12": "5nNLWRTJbwDTgTyAe4iRmu4xDh44Xg5kejf8F1rboj4SYrYQ3jG6U9FZSc2LmeMVvQRFCCX49BfoUGUsfSJiSMUR",
  "key13": "2imbEw82SrW9WRT33T6kHDYjeVTg787UytBEyLch4SemDtHNumpHw1soHTSCFQzhqzL4Rsv33RMfvVefcJtK9fCj",
  "key14": "2MZhQ6kBL87Yo7wbTwXRYw18cYKWveW4cspQpoavmj9rcypFjUB9LkkfLn7gvVurS4uUYVUW24ErDzY9xjDXh1Bn",
  "key15": "2smU747JbRCZLVfY1atWZT1jgL4y3X9XcnAktQu96dDCwCLwFQYMzmYAwFVb9CyhqkmsACjtPJcKimwZWKTiUNhb",
  "key16": "2nxNCvyQ5oSw9uaZszPb3SD1uZsEFfKLCLnVDEZ9LJS8MGJHTgQ3uHF2EKA8xYYE1m1K1Ghx3ooZbLsvKJ6kGcUC",
  "key17": "5AwV7GJN3btZmiNGwpwq1qLjnHuyTa1EMqXLXUH5uA8GJBfv8k9oNhEj7TzGV1trxaEwmRrMX9prmKbVJhbJdkkp",
  "key18": "3nfCekDY1C94HECqtLZcvQxZ4G34sxD1ADyfrJWgDdrqer7HLxfcBfnPL7sc8TqzScceHtLmum7cAodeSxHeJFTy",
  "key19": "C34rJ1ExMZhKviZZ6XMGhH3wcNbZsRPT5W5h17RgfSqDZQALvu8acE7SZYucHXWejW45N4Ytevj4vFuya4CRwgR",
  "key20": "4u1RrcG31gAUfamaZDxM29ZW9BQ7P1jzTrJ2S1P3F2LRkJZangwpTu6xYX7ZFxmKKUnjj6H6458jXdUuLwuCXtXu",
  "key21": "5vb2ZQ9wzaydP8s4VVLXNJJs3gDpth2JBM6RWDkFpnNQuvWidzxtmQprwKVDxdNownnfpyuMrhcqJjw9Xhz8FQF5",
  "key22": "4zRZr3EM8zg9jyvSQTzE7fLm62o2oJDFjY85ZacWA9SCgTcaRGsMtB6mAGF77KKQKaUHsrFt2nNwXwuJBeuxTztn",
  "key23": "4zwLXCa8ajvbveh4XXfbwxtmrw2Em7cdJ9RFgC3emdqq1GojzkHD93KdndCb4CeL9zqqZKp47Z7qyHwxiocAkwyF",
  "key24": "65gyz55aFzoAjirBvyZukgMCi2FpSMEKxscmpDpuPX5FQMuUmE1i3NgysgrBuZNFQTDs2M7K63dVSMVQedm5oUr3",
  "key25": "3DSurmKT2nazp81uu8M8U1aqPJShSQxnknFCiWYdaKcEz6f79PRBSSEMWDJxmkoDaBZh9rFm8kxnQpi3WR6iH9iD",
  "key26": "4VH2ENwHVuH478xnHT2zkAHAmd5w6jCJYoQ2dCKWP2qQuanr68tZV68PeBikbjtbdMyLjjXcSuYgDnFR75wtKLtZ",
  "key27": "3DJaF2v2MWFQmXaWsM4adcRBN113eXnUuP9U7Gvb4mJooarFdDeEcFKHQ7BKguyCvd2s1jaoHJekgoW5jeesUMP7"
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

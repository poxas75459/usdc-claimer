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
    "5xqrixAizQSkPad78nXRUBXa2LVZietkHTkzDkuhRPbNAL9afUYoDcPAmywnYP2xLDLXowoC8pwKeQv6Yra9hnrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uo6GTeWCuTr8MZzD4vMcSNwxBPMy3UfiA3Udsm31oNMT1MAEP9PascEGstci74VerofkLvG6iNWfF5RL5FwR9c",
  "key1": "2ozwA8h7ijDXzqpTY9x5PYA7QQ3q85RBzBbEDiuuYHJ7gzugNuLRB5coVCRDiGnRG16Dk7MTV4oHjjnVdWPjhyqq",
  "key2": "3VAw6FC58FdLZm7LYmUPK1u4hNEusCvigvMfTuNzx5tfjPTJxiVCH3DUnT43wQDVhxS2T5TtqqmU5SRwznsA4Ejq",
  "key3": "5u7eAATyUyPce8S16hTv6ceyNsw3h86XtkooEFq6JCETFqFZ3vNZ3JAKUSL6w742r3ZjLnBsdWi2xg1vMfYAa69R",
  "key4": "HQ787jgb5hCWcLc8zpDgXuZNdDX5fkC93Z3JyfDmgpDt8uRp1X58irTSDMc4ecbsuc4iDcyqhG3n1j7QQGBrTQx",
  "key5": "ZXoCct138sGgnWedoxCbzTCwrHYfgPaornYCNoP8FY43eySKQZFLvg11v4ZR33JYJwRSKd3FLbSGq3mv8tK63pB",
  "key6": "3dLEzaS7YW2DUiwBXEgK6MrQSQiYRmRJPCLDhQ1ohM1spTpHdsqZ8ywMPcNMiPBaSYv7mDkKY2SYx6PEeiiswQ7a",
  "key7": "2rrshkuB31GPDGuRZast3vcpuEj9RngnLnnGEzEiChFRmCwbiUPAHsmfkBKiis6eawsfnukEwvC2kUeGNXeoLTHH",
  "key8": "5KPPanH4tDaC6rBDYX6wMj8mNWLpXFVmZ1sSj7J3KrCFkg3okNvDQwip1poj3hczAgLHV5dPungWKCL9uHyQT2aQ",
  "key9": "4mRAZRU8ERy1AdTEHWoAvjHygLgS49KFaaXkcDzBQVs8HoNK5N4SsyUHm8qo5uCVoJPdvrayyjv5VnSmxJhu93gn",
  "key10": "2NN8EAAJwvsib2r2UvxXJgUR77qekam4GVCxVYHC1WMuDrQEDh1niJt69owoiu488uHTSBbp9Y41KBSJrR1pizTR",
  "key11": "3GDNcKkctz7ETzYVbScj1jqpVxsUiZjYRAhDL9S6Hteo96SVB1qowHZYvoVcYQfqc8PQ4AQMHDSoH8xdMynMqFMg",
  "key12": "62GxXa63w3e9xHeUd32SpJchXMqyxP4DrVEj7VyMf4tCNHHv9qGByf3a2rCPXBwrVTGTU3Z7x6ftdhqNaHr8UhWA",
  "key13": "35WisT6f8CFd174MhRcsA6JvqYTExWZQwML9Y8ukQDFxyWaLVVrjfvt6LMuL8FGaJCENppuuEfMx5zgTGechGvNp",
  "key14": "4z6YKZJZ6A8HGvcmM2mE52zhJyh8EM8L4kDunFXcQRqt9BjWnoRJkXe8EP618Czk2to5fsAsGr1V9crgS7DVohys",
  "key15": "47RzCj2uMys4TpUBpHXVXrpCbahgq7hBZVTCqKj3zWnkDLgL3UwHXHGcjeN8RGvAvMC2A5ugycGTJXFuA5U4hqb2",
  "key16": "2fUvebzR5Mid3P3piYVW1MKL3KB9U9MbZLujGHdaRp9N2fwQEXdBksibvpqaHzBbUtn4zxcH7WfuSch4WDMEQSaY",
  "key17": "36xKJ3yU3rAk37x4mqwrf7YqK22VvzjphvoTKEXFLiiGweG9WSQCcFfvi7abFKHfBU1Mpx18Nz8rx5pXATDmanRV",
  "key18": "3dw6woN7gzzAWcek8aTTDVVAsiTPNHzDL6t1j6na3qtZ5vYKuJzAaSz66NZvnBZ2kavKm2CwATKPhxpgbNdh4QcB",
  "key19": "5Nmff87HuX65vomsFH6r42iR4oNyH9rbRm5UMdobkUEg1cGmMCDQVnQpL9XdKTCZW1hryEyrvFix8E7NFe9AyT5H",
  "key20": "5nc2avBhhUqE9JSRy7TC2Gn1HeXriVhenrHfQvcV5v76bALSkPhGNfgATxDmsK7JVQ2wtWm3hnXWoy2n7u3UsCEi",
  "key21": "5YrymmD5DcxQicCUSdkEpZFdW3Qf5MfTiY6SXchFLbV5qpqh8p79YrCxEMJUr66tZsWC2R34nN7CDRNMbF2goUxj",
  "key22": "3sefQAs46BQCaRU6fYZvt6Z74TKaV7x4uwy81MMevvMp5Ba3tsoRwfr7aNyYbVADvsETsVqhgPRHfUYGCubhDGXa",
  "key23": "4wGGSqBJ7Vf1NiANakXtmA3tLg3haexXNby16c4huDRkR73xcjX9xjBNpbf6ocrftCkAnekv1wBnXKAZchj6y8Ye",
  "key24": "9K6dy1zUWpWiJJST7sz95T4youTeXtw1MKt1N2E1wdzA7N8UduxYDK7BJUuy5Ff7coHc7eTe7ZcJ22H9qdYdroc",
  "key25": "bzncW6hWMXKGNGf8Hfi4szPUko3idQJDxqQv1LZejByE1xSfm7FWJXm3i8Njm6KSog3BErTFpEnUBBMMPxRcmFV",
  "key26": "2kUqdRkuLxVhw96mHNNxru9Z3hLwASKrSDhnH6hrW7Y9vag1fW2z5dgTxMgGcCekfdWztquBZ4aiayGwsE9BBh8A",
  "key27": "63489hCnj7DKKfiYmr12jFaAfDScdviqCEmwJ21JMZ4kp8TT3CLVpH75Rkk8Ycz6jrwmrdpgm9QBM7XxHraW8xX2",
  "key28": "2a8wXbp2wwjXy52WQLZvfUEKtWN4Wh3DfAU4batpSM4ZCpsjGDKhqjap8sczHf6zUp7ByB2cD9CiA4h5Hnap6GAJ",
  "key29": "4hXoT8bk6tBvfUZJs5CUepcxJXiA6LLAt8YFNiUgd1N5VNdaSuHYPYnsUVBfzSX3BiWJZDBKqP2W36AQGJa3UPCR",
  "key30": "2stGhR6Jf6M692EGKGBezYQVXcPX8BWJTn14zNmNfvXKKDXzzabaPkVoKRS1WiELg4UkLt7aGB9z8e7dRVgnAz53"
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

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
    "4QRicVNFzFsVqM4XomM4MaYt5T1Y5eRz2hDQKMSbkvDR8vAhPnMdfUtQyoUEuymCBk6M72d5r4UsRdqfBDiLwiqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qMgBEW7tF1wx7UZSMDxjL4bEJgMjmcwbu9BMKK5YDxcGJuNQALX5aBH1SeddwuHfGJNiebRHzeKoArieNHa2VTq",
  "key1": "2Rd3Ldip5Tn2eyT7gfKTWqCmd7rKQSHdvyEY88E2iQoX5x4HuRFG5aZN6o6DYs4q5bECLy729VzNUcCXV3sEe9wQ",
  "key2": "5n3FZFs13rSDmxrBmSUWD3fi7Fk7pefo3se2UKKNFyW2P8uNVT5VwH6kFMF9foQVs3bPCDuXSmjRMjTCNrnfMuXj",
  "key3": "sTL5MUn49PoPTqcgWsGQMTMu7VTtZfGcgNbX14cFoZkqCtFFJv2KjEKQ9o7CAEtSc8WhajPGYmSWqrMKXWkUcUU",
  "key4": "Adf7mcHksTiLqYpDrZ3SFSdeF1gzjvMUQ3y8SQpd333PhcdxRcec9xcd7ZnZB3xAizRNXnRGfrjTBkgVs4Whmz4",
  "key5": "4XQhBELPiVVYiyRzHYZWsRp5H7XNfav18WRV21zHpnShkpNnPDa5NwpXJDURDFrK4AM9shbW8Tnu1WAuhTLZhhTo",
  "key6": "8TXtGEYRvfymyWCwnVL6UYDNjvSoE8dXUCdCmdKXAJhEC2m7gYhj4q5Sc9JEaDbxFfSrmMvaeEVobKFEnesdUf4",
  "key7": "5oAHwpVDZrFGnDxQbn57cQP45a9dbnSvQ2kQZXRWFxmEt1AGPQx5dboiKTPokfC3eKZi7H3ZE4sZxkdL3waBRqBV",
  "key8": "4ksAnEC2Z9UvTaSwdwRbSbBBDk5uQhP8e2kqNzUf65Riz4TdHznYrBFGkGAAxk7xpiCSnu1p5gwksmhKG3zbQscj",
  "key9": "2zXojnx65xTYHqan2Rbdxa4Bpjoi6XWVi5Q9YeaDbx3F9xV96qoPqrRFjFiKPKB8Ke3BaFuPTUF2JxKZQD8qRjuY",
  "key10": "3cY3wYbdQ9cEcwpg1i9ycbDBGsKvoJ7Rk4bKxTjAa2uCNUQn28WSSLvg4eTBxKkpCbU1jsz6rPVJZtiNFxn5s7wV",
  "key11": "HvUHAmj8NpKJ5HdAKJerkHxxV4xVHfvwjZPrHRTmCy7nuFW6ipT5H5mHbniuhbQFtgawSryCzb37u49XZn57epy",
  "key12": "4kcLrCthJdXgyJFbUQqhVw2XdhGjSZrbTVCLMKoCDK4KDx6kjVH8pAAYmgKEgduEpks7JodSS6cDqACkKibDq5BW",
  "key13": "5Unhx5vQ7g2or1RHg4bRd2tUmvq6w8ex8JeRi9spDCwkNgNso5uEhQMQERZb2AV7rX2eXnFB6KfpMHTiKcCWC1Pc",
  "key14": "ztFd2AhDgbHZW2chm9JbfLs3tpqThYr3EpJXX2SYKKwaGdJgWtxDuBKQFuNw7D2NHCdz3ZrxkDLoiuACk2wpem8",
  "key15": "3nH6mdbttRSxWhYaUzESFuSzTsjBTNdH9JwCc929jAh9sGDzJPVGkHnqNCZpgajNfcxxioGcL7iVoFEqK2zEtEWT",
  "key16": "5FobSkK5ErwfN2zj3t3GTevBcjFC6GP4itQPH1pUgzM7Qq5gLdTZDrGaQeZC9xNXtYVkY1Zt9pnPYEgtvzaRdFe6",
  "key17": "5n6TBdG1yhpBEab9DLALvafuRtH7zxbAHrEQ8PMA2T79VQaCtCy14uptheWV6FAZDfztXkvrxc6K4DkXV9nvqfq3",
  "key18": "35qg2YyNQoTWZgso3NVNKey5B7tmjUN8XBHGvEcRc1oisQZwTwr8etqiek4N3CDqAPW2L27BQe4nmjTiBDZ1aJLU",
  "key19": "5iqFMGQir41dNS1CUaKPmo4HpVb2jwo8EwGhrztxPaNMrBPNd5bha2rhU3wA5jwwRAjFicLycWtsoabgqZZy9kjj",
  "key20": "5iKaFG76X6XENA2T97cf87xtxo27RiZ2yDHiV3utR76Yq5qfCwBpW1x6XL3y3ZYhUearpVoSWsieAYmQLq2oXNdN",
  "key21": "3PSAUnvfvj1uc12UCHHFWwVj7DxZCZZXk4LG6edM9ZAC3MqGvRjw85ACB916rF4kkAqdt1bu3Bn2fkfptrxbHqXi",
  "key22": "5jaEv1sG5dwvwNfKfX3UJegUULQ2cGx4CA1rSTGSA713RoBVwEfixooDwKEM8y6iU8LPLXSnoauMQtvQq1CxyfKc",
  "key23": "51uLzxUQxoERX3MJYSkDr2PMndNGLGi1pUHL5Vq1JtPY6z9nJF3bMx49hvHcsVLXqc4TwKdTroRirRsd4oQvmXux",
  "key24": "5YxCthAT7mMGweNjaUK1kkeVX5oe3rQnXpB6EhSFnxKXofxBRytR377U8fBgEj7pC3AQhf1Dqs77TrcbepDvSojA",
  "key25": "frak1nht6vPfpjMvGSgcTv4jWcWvAdiAPDbkkfAxqcirSLtY2ZcUW7i8qraVbwpt3hmLhML23NGg3deZTZgCfjT",
  "key26": "6M4AqTh1kCPLTeafG4uau7APZCmQL4hcQH4mrbYwAEhHNnGVKtLCNCHXcFQzfKegnbFemuMMi3zRDfxVR66XC2L",
  "key27": "5dXCgA2kfEGcB38GP7HcbCezrXWvjpmUpBrBimjdJ1abMfisbxUqMifRPtrtpcmYVicF9VNR3ULXjq8PZEk8LwoF"
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

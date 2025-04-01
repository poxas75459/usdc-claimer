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
    "3JYzj1jmiuCAyowP3iWyQqMLT34dnQhpoNX52wHUwNNLuhi2Pfk1yMT9tZfnN1xfewJ9jQricyREYmPwqZmGVqNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GUKa2x7Eh95U8E4NmxFZAyFpogyrfnd6xXjfXWGrJeKAUELEbDEAXvzHQCxe2wMmcPwMXXJV2HR5h1ZXcRNYiKp",
  "key1": "26t2fPBjkHpXr2df1wMyZkP8n9ASiSNhqqNmiRyxSMg79X9ifHtES7EwxU35F4VCPUDREtoPZQHrn1Z2BXEUo3yP",
  "key2": "25ZRoEU57j1qEiEHfeYPtsEumXZ6zNhfkcfTazgg5cgLdBqNkfHDVUz8bP9ueNYd1TGxuiZvdKQArpnTetcDyHvt",
  "key3": "4t7oAHbQ8vSwzDPU1L2iArVAcpRkr3Xn1SUPkV1dKtCxKM4vWedrjP6QxY6oYokw7XmGqnS7DZQ5pHwvEtunBTrb",
  "key4": "5UvH4tSYEw6gqejqHj8spcpnPsGFRsXNee2VRpwo1uzZdiQZvrJv5hTbha6H1CedhZxxULd1vG9cNDca8NMTEe9G",
  "key5": "4QnFkDFaSeyNZ7NdBTUDYppuibwT62FxWE95kax8RBdhQh1SeWKZwRDQ2nJYsUjY1tDM24gT9fUNKtGNuztUYQLG",
  "key6": "56pcubfAKauDvitzeACZ8qbW7ScHe21Gz1ouPDvjsDih1Sq2Jjq7aNY7dKCzfmddjQkpLD2L31UMWv1iM8Ggz9Sf",
  "key7": "ih8ZGdHodBNrCxVScPf9UJuXAfmfViB54UbHci9wbRnnwWhoQS96wHWZvqoWtN6nfxr2ePKuvyjJLNg3TqpfPRp",
  "key8": "2He4ipCCyBhPaffDL6U4cvPeUraACcQ1SJoVTXzYfHx7sMSXxRYWkbXzGfNwbcShRM3rpeu3JcLtvpFLegz1c6Hn",
  "key9": "5pdwMHCS5qhE8NVHqcfEAirXoqMNqMkUxYReKkN1QcNAcnKpYUjM57ZkMzC9nQxLUwoyvGAJnJsdKHA1nVCFkkVe",
  "key10": "2qwvQZuRyjLSntEEQeCKg6oLtQfCyY6kGhZ3Zk4MLBhokhbghzBsa9DQxLncKbPasvkPzQUPAmK8LjVawJ8TzkD8",
  "key11": "3qUiYkNcoKB9z5rtRfEVkGscn4ocL9H9TCYeAkbXyeyaiay95tcXZFi2Eh7FNdzcy2X7LFPaotb6RT3onokBJit7",
  "key12": "64dM6wbAweE9xEgDtQdNtHofzSXbo3VQy6mjFRqgmCWTNfQ8SiaSqYDg9EQSzX5xxzg8mx344wc7Ndt6E9i3NcFr",
  "key13": "En41p6PseQ4BTviFijsrGGF6tcHEDrCU93Swa7PGVjtoyx6oFtS2kSUfssemCPhL5oENLHq5b7zKj2UGnUKynue",
  "key14": "3nZLCtBqjQxnz8zCkJq8hQ7tzXJ9kgAs5ZUkiAsMNZF5vgKR1vDSFbAfAfgU9nDxiKDbMeMQWDTgzJVWHd9vr7W2",
  "key15": "47tY5HrEuFxL5pSRVTxRtJd4ByCg2btWqmaTp5V9uveNwgdn1RoTvMpYNf9eeTuA3cui1AhKmAYuUohAeWfVCqjx",
  "key16": "3LAA113exxj8cAuaHc3oAtmbcr9tzgTcsgZnULSZtrXede1en1ysmsVvyAU3vScyindXK1o55T5dTY5VfCxFUF7V",
  "key17": "4zGDw6yyGtPwnvpeM2EKxoJ7wCNWJbqrdrMU276gN5DLuytgzgv2GnvRaDoMAPHzZcmWGgkMJSRtrsGaS15wubi5",
  "key18": "3kG4vfjNXeTQv4Mc84joV8dSsehxbvg9Lyb6MADJKfyNry2HQrrcmEfJMpw26A6yT3aCiGWobmmBUNhkKZyxNScw",
  "key19": "2LEeKfKCjmGohV93vBu1U3Lk6vgTJ4sKrtb6hChstfS3qZYyBg8jLtyn6GeXsTkURYfKdE5nvt1MT5GZZWdxXbnJ",
  "key20": "59tHMt3C1rNFH3wSxVqNkJ6mkx8FC3FTv2X9mRwDgBwEsz1U9FdZWSvc43SZZvcf3zvnXM8qsDiSBcJo4UF8SUuk",
  "key21": "R4rpKGoF5RX7pkVGREH3uFssL7KtWni68wFVBZ7tGMAfqLBaYmL7SbooY3MDyGM64JqiwV9MUdTi15qAnTUtaFZ",
  "key22": "4qyARanV9xRU7xdjuAGeZXDqsWuYoSASAr7gFXTFF5XsNJkpnAVqtobMQYLZXLEqzNcLYGd4y9vrWSboZvwkiQsx",
  "key23": "NgTfgqmqZpKKPzAwX6Prm54CkXqAuqsMZmrKTmW1kL4ffbn1fKatyiiJmTmDirKLHbTjXsHcfC2yqnYafN92Uog",
  "key24": "5SxE9p8Gnxbs5bbR4NZPT3eP9JQAPcaFUap2LP1FtqW3MZ6HSvArnaztYiDFLy8NbvzBS8ZieQu9WciazpWe2vfC",
  "key25": "29ogVNtekF8Zh2azZpAkmzHchM1ZwEWwLC5G3qjv4JQgPtEX4iWnRsLThpYikfKFx6S3NsbG7beiULgKsDDaZDqk",
  "key26": "4vKTddhxFTjy8yYm9q8V2XgvvdFuZGp65dWsTwH3YhnnvG8xVHst6REPMJd47E8pnbsf4mLv34H9t6SfYD9g1Vns",
  "key27": "3P6Xsbohqbn9Kp56GWKefnokiv59n3nr7BCATq311zzQCGz1d1uQbeGdh1ygvw1dKENWnVmV4Y19mo7ihuacCuSo",
  "key28": "29YTrwedZjhQb7uay7LGoL4ycb7g5mpcUfQDemvRgdtq4Dx9E2qcqNTKxbx8m8yHkHPUPGrFHm2hGbsmQQSJBUnq",
  "key29": "2Cwc2mKR2t5eCzbYmsqu5AwGf6MF13cSvCxWiZStTwGLwiPVx2AUducgvhKNE4wc7WHSTatDVjics51Eu9aQhKYL",
  "key30": "2VAiZCbMm8a7nTMmVHhHKEKsrZ3EHv8hx9iCoyyebzzjKT6LoKvYb3SW3jumgx691CLzbzbohdFEfw5xtGiF1N2H"
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

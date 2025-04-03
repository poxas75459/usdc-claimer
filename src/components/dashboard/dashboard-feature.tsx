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
    "5TG3eWYcyGCaCH6dhbEeDZmZoESa64ngG6baYLVRZsPAcMr6WDerzZp8CgyyY1dk1CTDtyBfULmzGsSoeER5RAAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53CmuD597Fkrs9iYEZj9G6Lynj1iDzht36aZx5ZFSTLHkVFiqZhaBKqXhibv3TcwkffuzRsnpGwu22HsDHGw5aa2",
  "key1": "5VTEa2pXyrhQijGpi7GFBHPC8kqjykvkkwBcmYVxqqyVRQXqYFuCexhrDarWRo74RZ4bcqFDbBFK6AQCQeL9M2Dw",
  "key2": "38qVtWc7CekYuAShrL4NgncKKXhZk7ARnrhF2Bi4xjKD5FG5ix6aHucuqc4LPqA66fggo3ewgKrBamR3dCCai1YJ",
  "key3": "2SgA91R6WHcnR8jrS4E1mRHzgBi6wJSyQ2MEB7z35UFuWKU9ZbsdHFFFxMF2jTfstSHs6wQ7J3FMs4urECqqrEb5",
  "key4": "5DPXo92r9YFjQadRhs1sFvdtmfmByrsTnJBvTG475KTmSr3RTVSBU3CxrS652NTk2PE9GHVYVRxES3YLg1CbQr27",
  "key5": "2gxrZzPknDh3KCoErFMRxr4v6eTkKAZCcMTeQJnppCdMYofo7VZwedbuszTseGaLRA1wznSNUVxgrriLVEGcHxjv",
  "key6": "5knbyCHU4g2JaGAe6oTAuK7LRQLtHSyLZ4zgVn9zAQSu4k7o6iaFdt7fu3PKsdMcSEfeUQZd3JHWirqpKosLk8QX",
  "key7": "2Uxpc4TAvFhT2gPshn29tqUUmHkU9A4qeTTgAstGBWhpTGhEq9nNPcvCjsBFUzjJTLn92sdME4FDUrbwc7zpqUQ9",
  "key8": "4azZekWySwHeDsPgKHFuif3xSP1NXZNUJZHaHQwrDL2euYTnvHry4doG34FN2AvNXGd8KrhiLCiTCUK8EL9NVKQT",
  "key9": "5tYtoeFGYyUMeHQdQKZQMjdwQBHGzjs5Ej69t5N2asN6Hxax3SNJ75vQ1tUc4Y4qs6Egsn5m9MPRVTq6CPNgfHio",
  "key10": "23KoucLxmxZ3hs24JWBGhjJ7PbWV42NFFu63kZNyGc9UgsqAApYdRzwZ6BxsRBuXECupLGDftjfjqvS1qwLwQEU9",
  "key11": "2TfT7Fb1TaSSfFoq5jLq7PayTSJ5htUSiv381A8TjjgtG9gnCZS1bjwBRHYoQ7WM3rXxCKGiTM6SMSozmUU61iLv",
  "key12": "2Rb42aFJ9777UQTdFJCqwro1vt4NjVo2HnoFm9XWP9DPcT8qksVhkaeLTpZryL8FMtZtz23U4jfZK6iJv2dyL44a",
  "key13": "4QX3LDK35Jh8kN6QRmY2X2yQ1YB4DbQqtCEfVC4KfgMJpia9xybHA8zjeLjSNemXA4oaBtprxZcesyYMPn64s3Bu",
  "key14": "3vYzDsM4n8ZayMEqH9ZRdUoQCFF9z4yz8uUJ1uFoDgazQi4uuuVriZRdG4sXbY6rAH4p8o1rEd7Xcu1krXLBNX4p",
  "key15": "4Q8BKEFqGkhpZEYpg5uuwm6p7ooipDH9rRVMBMfGg7CRTuyRJeVdPwF5xvXdFouoghtcUy7ByJQbu2aRnAPDiLUX",
  "key16": "5Hhq4Rs7zAVyGcALMg7jjZphSrGfPsmd8mdPyVYvHYSonbUZ4E8rrMRvNEA8NWyYSeAmx9BBaAk9chyEYbtDCDSz",
  "key17": "3v4Y3gRjYz6wzwhQkDMJWTrewwLMkdDCBwMdVmJ5YF7qZGPvKDmaL3KU5FTNoSRajiXTjYciPBqK2wj3vCd1Np2x",
  "key18": "22zWNB2h945eZcWAcV5c7EVe566YcyZpuym3nDiSNGfBeMZAY9S4wLTwf77PY92rKE6H5pBQZvm6yVkLQoTZsg4A",
  "key19": "4jTGVrXKSSHifoveZQQB3YEHPK82sRyfVHFXfknVfZGgsW7Q8bGT4w4ydaPcTiwKi9y7Qt1xVHT45Fy8A7BWJSdn",
  "key20": "5tzgZR2muwWPHDctpxFyxWS9UiKNHzYd83rkJmWynuYyyP76hj7nEnPbdSHh7iJsVnPXwzgh2uWhuxAgYAc8sBeD",
  "key21": "4qjvhcSC5cjTAzv74PDr2NGhpZTXoZQBMu2yHScjgXVkQh8FpyL6jdZh8Xs7Lw7KuFW87WaUNWZGLp3ZA7qhkV6t",
  "key22": "3jSqwbGSBmC3Ua4LEsroGnmKKrLJ8C9D4dkBj7Tv48WoihitMnwbsYwMepfQRv142PHzZBBw1vLGgDN1YiAnVN8h",
  "key23": "3ipbGBQz6sG8EuYEtPMCZWQoqXZ6UF9EwN1rt3v7aJizQFbDyRiY6JFQgpxHFkRLKtgphQaAmKB94XtP92UCqDA",
  "key24": "22BUpoSN8oWcNqjE19TtYsQNDV2gkQbZcE7XPX16UCs5fUYqmtDstGAcikaBKhgsGkd8cqDiduyAEW489N7WYnip",
  "key25": "3HddmbTJFcDJgeJRbWSUXw6VkuAwG4Dx9avX9Xw786W3RWUAnaHxi5837qvv37A3RCC3obT8hkdRt83uKJNpYF9B",
  "key26": "2nwYJFvVbTVLpK9Mjadj3quVSnjBAg51nAm2fYoPAuJEeKRWZVCuiPyUbiLoPyftPXaEJUacQPJZZ5iRPkUmZk6Y",
  "key27": "5FsZyG8u8ortrcDenc9udXgVq27aL8R4wcbf2ej5FHa6nXTvcdD1L2vjYrUTQk6vALARGd4oyREtX6xRY7D5281y",
  "key28": "3wMNkk9z8tzN5oJqAWLyEQF3jaAXuqq2mB83zJwCGTxqiP8ZGixmpG9i9Ng73ZCvqxFuuEmthbkLtSBmgzpBH2AC",
  "key29": "2YQgqsAcFdd3HnmQH7zQD9dEnb5nCL5rrfRpoiWSBE1edKXxhYBiw19uZVGg4U3fAK1eu3uQHpiqGf2JLFfynizw",
  "key30": "5EPyMvHT2RkJ2pvCiYR1ySvL9rpaCakC3eaZYTozm1asxDMxy2A74dDcBQoPWUuoS1u1jGe83dBj7TBjqKnpc3jH",
  "key31": "3GAM8NTpRUjTehvv4RdeWWtVLcmXm3rFKdvovKaowzTzYRQFNvTgm8YqqampGjm9XEANwFp7TPHde5fLswLSEVRw"
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

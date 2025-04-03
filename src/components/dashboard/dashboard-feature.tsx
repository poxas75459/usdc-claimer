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
    "4syyG7RxAwtEGWNPop6jPvNwBbUsKEamTV5eh1f9D39aEueTez9SKPZ5uR1kLxh64u7y7j7hfMP5usVCGjPRbTHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YonoXD4myGxuaHiYDwHV7KVLwPb8k6h8AVKjPxr5jDcmuWrS18y8M21EfS4MKsEWVoK2Xuxu9Dp6i7fa3Bx68jE",
  "key1": "3gH9KmTkuv8kmEQE5VttKgmTiRF9LgeQaD1YC1UDu4xeu8JNtCLTDprHWzuYYYaWj3SgKoYMc4RTouSv4wW4TTi6",
  "key2": "49z6tCaVBb5QqX7W2nAhGj2kmL6PbdPqUVgpPqjaNsxpuwCHBWzGX3YXY8NFcquBmQUJhFRjhPpec1iWBLjH7ypD",
  "key3": "3TxLHTLS5ESwvXCpFaFvxEfAf5codCL4uaqXUN8JJsbDjN2fStDABw9n6fMpwMTgN3DiWaxzbjSLvKbJAc8qsAJ1",
  "key4": "4urrDeoUJtybRAXbq9Loc72aPQCo5g16GqQuyJQRvnFb5y8E6bHigUxkrt5668GNJsvqN1tuBSnhFxW7PoyH9TQk",
  "key5": "4TieKdzAcLUMUGPmoAeC7XdtyisAupnwce9GvpMNmPZ4eqpcbRvWUgyYGSjuwv1C5GFc2FNqUDvjrtGNTyLW5fW9",
  "key6": "3wemBM5c1tv6Kk5CauMaLb1k98YAXoa59D6ZuDWozWBvGuvC1JJUVuUKpkpFVeu7Dbn9MFEZiwivv77r41JZudtk",
  "key7": "3QdDauY8HbZRn2Y1viYAFceESoQF6aswc2cY2imy9oeMqy8Co5h8WGoQkN1LPkZB1U9HRhQiLshEH2vvuHRZe6S5",
  "key8": "dzVkHaaAsLDunAxGRLr1w7BHjJD4hEWAf2t32X6gzSvRdGUyBQTGZFpv7jEmFqnLcKu7NTmHZSBRoJPbYPXrx4B",
  "key9": "2jtxFkp7jyYzY2WvfkYoM97DGUSH3YPegc9dk4MNpGPRk9GX6PHiMMsQagguDoXXYfp1Kyjf2kZgDiMVV2XwL4sp",
  "key10": "4oMVSbHPLVqNNySCdLdb7qQeAycTppW89aTPjzrwV7jExaijVUn6po84Ymr2SRyCMNBB5RSsFgq9Ux8x5HoMqnpd",
  "key11": "3YyBsUwSvMeXJgn9GHe4hxZ1wMoQNmmHtBpYBqJesHyDtdP4hPbRJv7GUrf6s83AVbPoWEtYqCGsVNq69nwaPyud",
  "key12": "44bRCDGBdDAUbqA1e1Csv9mG5fvEAyWLZLuGk1KA1jfmbcDRRdBTPikoPjp5YZyEswPEoZfLezZCcVLgquVPdaTm",
  "key13": "5d4VF49TQJLaCFTefTgsCZRrSp1eyMw1ikYUs2M7pR2QYjQdrapi75Mz7R6v5V5rR3Fwf6yNU7KkaYxdTfbxXeit",
  "key14": "7aRq679HDonxUhj8QuktV24jRVScpajTLZCYbZzijjyEeSocpKKrmKphHvV6qS8ejEfWsyXjR7hvac8zttByfYh",
  "key15": "KhroJEo5Z3hBMaL8yWZ5ibRsgaBKkSJy4yEDh2ESstkC9FFDfRAVud3vjRJGCQ5tbyX5zq37VHpB8uDfWJpNbdM",
  "key16": "5pEuue4RenAndeyZetfAorVqyA4qxvZoRVtL2JtXdozodehWpPL6CUhZXhpndmkMXCZR7wLNb3ubv5pgyZkSQyDu",
  "key17": "4e57x5Vbys8UZ5tBcVbGGKoFLAv8NSFYR763AMrvyiGMpwhzyGyBbuC7d7yDLqqBK8169kpw8xuP8tAnUpEuJT8r",
  "key18": "2vFzznakeXjeHQmvBMpZCj8FhaNfeofDkGudPz7VK1ncnSBehmXwvJtx7m1NdQymNnDa955FAeaqMxg1Y8DFWjz7",
  "key19": "5ynD7TGmtcUGHzqp9AvsLYEY65EH6zskERX9NVjDVSTb4tJdgovQzRmtAfpvaXXCTZw3bf6Ufz2aWHuH9JM8LXrH",
  "key20": "HiqfY6TUwyXuzsgNdJGifG7Z757pR1ANE2Cn5cH6E9QE2mBBAX8a65AHcgvJXfqk2sFLPvfz7EMP85MvypGRFcS",
  "key21": "3TZUaeUecr1pqzjusi7ZnHKp4zMvMrNx4dQ4xnd2vdLrs2biEQQNAUGqNtUf6mGueoabvPCKi3RFyF96DKJ3AGK4",
  "key22": "2Bx87WHGnYKf9rowtD6Wknjt7HzzkigpCWaF5M61Ym2ZSMRUjZ3GzP9XZfq4nfncvrkATCQDRBxh6kiG3AFpn9of",
  "key23": "3T1Y5o6xcJHW4NmXxm6aPnCT6XUyaAnuLiPEw8pFhLKb21gtGisiGrKu5rweE4QXpeVGMmVyPqzq2DMgstFp8wRW",
  "key24": "Y1SwvuRePypKswV8xmfFVkFxfT735iBuoA4JJP8hjGUQoTP2CQLXSWq5fS6X1qrKiyNvCDrCADCCvyXx7Buqs6f",
  "key25": "3dSwZwGribSSNUernEV6vLfayFR4q2iz5ZiYRnbbpg36nyZMsx9hYYjbBWLGqVYAcmTzU5dHR9xk9BMmhrW3wKY1",
  "key26": "4Z2RH46DwzWTV5VxYpjtPPm7GoCSLD8aN7ModbygEbMxx7UKiUAwk9SkALjFzCdnTAAv6nGD1jeBZEVK1WJv8LqA",
  "key27": "2s7TLLRbAEHd7GFGdkuGZixws2EGHsjnEJziF6WvjeN1mzBxZ5GHMtCVF7ETTn92pd1DgRy6GDjSZZ2ivd71xHGp",
  "key28": "4xp6XtW9pew85BcWBojgwoKfoNmeHH2UUcS4htQ57xYXEVhjPkxWDAHAtENQzD6DiyrhYy2vxULg2e9zFjQU8ocS",
  "key29": "jHJyMT1VALj1sw4koPuCRvfN43YguEMmjjFEjeb6cQ1QXAQxbRXhvv3oJg5vPdqZB4X5hk9k9BqiVUJALaBQTdN",
  "key30": "2s92HVaB81LegCHGjY8eHG6v1h9JDG3CbrXfP3rD8EB8rj5CrSAiGwuCtoQ4dzEpA4ieh45hcgPNVgSamo99fJaK",
  "key31": "5SdJevkUyodewxkrN8j1vvpPVChRXCwswN7iw8Z4JxfUTJmuiKiZbYSMF8XxhryZwbYo7mgod76GtuUisrDmtBeg",
  "key32": "34XHPx5RpS88keU3FKAxFNgTcqFR7EnwmitMHDXe3nyhzZizeAit1hE5AZngViWDZKDscUjxXvJf8n1rikb6LLZs",
  "key33": "4qijiB6EKe7HqPyTpwcm7L2CM1baFJnvcNQKSUKyarY7BstdFZ5E9uixFSAWW8GExffBHVUCUCQ5RCp9aEGrGWj1",
  "key34": "5ZMENJ7vGuJPe2DDeySVch8SxiJZNL4RDNhsYn34HWfVUskK3BxXEGUVX1p1XQBKgNfuzAmBJcRai4Rr9quqFbSi"
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

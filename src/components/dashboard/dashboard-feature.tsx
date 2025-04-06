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
    "3LsdoK5tKzXmZ6Aqxampf9b7uWcH1hb66uhUj2qAQhs1HL2dbr8cvpf2vbQA436PG6H5j9igATRgRLHe9LeC1pKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64CVLdRKx1V35LUBqYrfHEYNHJrSMjabRBmeme4emSZDaQwN7HU4ktRvuRrob914UnD9Pu7tcfD55XRJamXC4BQ8",
  "key1": "4NwnKrupgAueYa8cEwcbaEgYzTinZLEnNWRoAfvH1nKW5Jub4WDLanEgfTYRyvg7yUt25uQU6ZLJrDQd5qMSpHXt",
  "key2": "5KzmNU8DYQNr48E2rzUiARw51kYWR1Cw2svhd8LtbfdfCapusFK4T7UYqYkCUtw2zs6ST1dTjzKbywWXUPw1dQ8R",
  "key3": "44FRHXbh5Xbf9F1gWu1JXq2ATiaizhZEVmxnQuPBT2nAjNJxDTWjVnzNYvnzuFXuMxniHYtDAEht6CepABry1bJZ",
  "key4": "3TzjL22RRhV9GUop2HsAxLC45coP5FxicuQPXHyTizaBXeZW4VidxpS3yGYfYt37iHUJaMzCkK3NpSKmhGT5R43v",
  "key5": "2TFMW9PMThLQC17Q6ESD7K9nTioQA4k7FnY5SxWvthjHSaA9EeNMZ4eBWiAGSV7ketkP82pcRJxnhBTB9FgSjGB8",
  "key6": "2zihudiGkKpHGLcUDk2EhodzdsZxU47LgUzaGYdE9hNuFCtFQywe42dnb3WAD51QyJJst9YYAHMQipg7sxkpfgX7",
  "key7": "y9wiURMcjsscgcvpKEdMZsPcuWWMrstUVGibEtsYAnuz6GeTgV55M6NdDGV6TPm4My23adSoEUpZxTjviiYbry7",
  "key8": "2zmdpFoj3GpLeKJ5FBCsnAnpNLsDzsJyEHdZ5d2yAB6YwjgqCRxGkbPiTqrbCiY4m47kvYThFr5ftB1jfcNrT12n",
  "key9": "59PzBHZjFkGk8Fhm8PmrpZN37rT7zXuyqKsV9FQiG2LwkjNdR7fe98qW8VWo7ZLPBWqZGwkChgmyJWfQpUUfw83j",
  "key10": "3EK2AiYzbBSn5Vx721NP9DkCzRSqUWvur66AzLPhW28NMAaoJpNNbL5iLP8vy5wpQNEdxRs5GgiCd5TYtgy3iTAj",
  "key11": "65RjE8uRkGFmxRpXeFdjpGSnHXkhBcJqVCc8HEfxRWJC23wACu5kvn4zCToMKkvM7WaEBkh3BBFdULC9hKCtfWdD",
  "key12": "2DJX4LbsyV41Ax3BbLfPKVUKW6KU1LUcLEKdLvn3TCH5jMQRbmjLN4aG5fYYaz6Ku7ahmLpgP9QfLmwodoxstmTo",
  "key13": "4xcBH11h7XuSw635jZUwebewXAW4QRBkPnD4BWSCSvP55CfpNMXLiJF1QAJpCxaAUTS7FdBP51ZGZfSwQAwPfk4f",
  "key14": "2cS1h27hT16Q2utfz6Y4eR2vZjAxfkUaX6E6EFhZqAYsrNpw9u7jx181jRH7mm4WSp7Sm1Xm4EQ6YwzfEX48zWHR",
  "key15": "JX5o3qN3vvPhsRoQrwb2S26CgwMCvhb1Ap9ZrxJFFDRwukiMcfAxAZrLMEq5k1piRVHwMnF3QBLXwoscFmTurEX",
  "key16": "2hA7BegGff2xD65EZB9qPBr4x2Q7taQJsSc5Rfx6wFuaYwnkXSooV2y73dANPuyL9FYmbrg5Vg1ZMNQqZaXmjHtz",
  "key17": "4RnBmsebNh1SuTcvQ9Jj53o7e2ecjLj8vDmea4HwhfqByRMq2dPZXPmoj41MHRou618LVe14KtYqMFSZCCPeFA3s",
  "key18": "ioMEWrfK72tKaiQZB82Lb5EpaZuMX7PgWkjYhPti7QiTJ3PV6XRHGcHnj4gqSBwNK7guMp1uspxjsfWyhL4LqtT",
  "key19": "3RxnBrR16ZFunjj4DqjBQwPt47sezL5rz54xjU2fpx4QjxmEPeRPqT5eqbQS1B2TvN1i7MdSFrM4KRPQcN9zD5uv",
  "key20": "2ZPyog44TSVy3zEBrcVg4VDKKicBX9y9UQHhorBJhnk6VNgKZXjEbw4eqwqy2h1a3RP3WwNAUJwwXWpDyh6Yy6xB",
  "key21": "28PykSxV6BjAUZ7szexq6tFP1TNLyMnHQiT7enSdjXvp7SqyJQ6aQzJPqhBWMhufo1YHVUDu59dEGfGzhNUWff1S",
  "key22": "42KPxFM7L55HY5Hs7Fyh9BHx4QD9iV8RkR9YkmDTFYZJekvcShH9j9iagyHmWiYhgChscmLkg3rW4bCcMJ6e2Gx8",
  "key23": "5ujsYBc4paK5iWa9u84uyzrA7fRwjBCEWiCZ2RjtfF9N4Zs7HiuJBmUYjiaqrjvck2LWaeMqEeam4kL8iJxNucn6",
  "key24": "t5GH6R89MHXwy9tL4eVvYA7mgveNbp5ZmTqPxFf1kW8hBqpM6HaL5CrRDmCqLcwyo4A6M3bdnBXjQavRvUkogWD",
  "key25": "3XFTWZGC8odizwhDVPcfkPxm5pmEJ2MPaGaK1vuoakMiXrjsCrmvnCBDNJ9nWcUZsb1PqyGGzMCFGuCCvhKZrKf4",
  "key26": "4gzAxZjz9zywAYK1yCo4d4uDfjz4VuZKLLGoDy3bQsEqv2Mq9phUgQ2trkMETXbQV7ksHke71tN7DGkdPb3aDy2J",
  "key27": "5X13cjQyrt3MLTuzcydK7nwVMHGzUMij2hnjn7o2ggKd6x1N8FHA6o8KUfth5Hn5BaNRfS2sYp7ATkwktvMiNdVg",
  "key28": "4omxuDzWkupyCNUtaJLnNhxXXYGTza2qrnnNEgZ2v4FZ4JKGCjwC4yzUKVndaY45iWQ6dXQ2auoY9CS7784P4NRG",
  "key29": "54SiXFafNGYzFZJjD6Pu3WfBdUH8zZDccxjt23PTVQeT8Uthg125fvZxBdXqMa1B9WChNxGEUTF94wX6rD6yo8tM",
  "key30": "3FEiBMfTybnC3fHvxLtrShDDdsmcptM4oCvT4y4JuKH21bU19BPanf9mvS3WgaGZZHwr6LkFvER5jJBDUrUb6HCu",
  "key31": "2jSbe8cSP56n5fQoW5dYvLqD86gEiXi1yTcYEMLGdiex6D5VHZXjrfn1gsewxPGAq9ierTypsdSL7ctFNauhcJWj"
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

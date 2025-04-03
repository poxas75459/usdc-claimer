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
    "EPUkk18vHqDJWt2PEp6WUF6ux1R4VNAWPSWv5zjtDfpNCv12TH1hho8qYYDsycXTm3RVhttZUvf3gdUFtHC2CV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9T7hhBT4zoufR3AVcp4eWwiZV7y74oXrEnHHUmLDutsULdvyE6htFmtgL8nHcw3MY8WpzGav6E7gRbdvrqZVQnn",
  "key1": "58TxbY5F3Yu4N9v49iRVTeEjVGCQchUBZivkhiXj15YN5D3TiHc5dx4KFoCTHzVQctRayWyXihvTaCzje53Tz7Tj",
  "key2": "3XmLXxSC25Xunbb7aj5eVUV9Fju8u1pY1QEKqGYbXpWDSt8QDwNtpSbNDcrdDEZoJecDZAp8Ha9W1BaNn3gWiwTz",
  "key3": "5XfiZaizFGVkQnbyfPfAS4F5dT4bak4EEw7yoVWz9YnMZmd17EkLjYs1DhCq5t8dxZe2SzGiUUDZhzXy29NvyhmL",
  "key4": "2aVJsRf3yS85CF2vgW4TwvZiXwyQjVdHj4bZuLHAEeeugK7S25AvRH1Hmd26hDXLZQhpaZtyaUdv4dWe9EA7EoPr",
  "key5": "3VSMS8eBghYTBBjq3izNaKw4onomMesPGo9mqYju1gYqZG6e53XtsbVT3TGspn8woSrva5ppPJKYQrjc4SkZpV7n",
  "key6": "2XQyP6YEV8zgmhMGunVnJTnHasGihT5eubzNhdCz9FB1oLrEvkKFX7NzqSneLUBDZvSdXtefPHtU7VNEQ4RJw2ND",
  "key7": "2KDAk4KqbZi2uyroChJDxY7wU6JDshfHDWbbLQH7SJ1zDK7tsomFQ7WbtANZURkXsHzxWWdRnrmrkTAQQPedxtx1",
  "key8": "4BrkWHEeN8PaGiURjDLPpuPZfPmyxyHuGQAo3PsTnGFj6hQXHqbQRmyvqKRMzWcTiDDdNtxpTDUZjAG646fPkDCb",
  "key9": "5wKruqebBcV1ATu5uxnyfGSQnyUai5BZtKCJS86nWvrQnje7KLBywoFdxb1NZFGz5uroiafzYs7mq1Q9HgTp5vdc",
  "key10": "32LsEFd6rHuNpuZ5dQEirm3z3TiVCb7GDZpGZUgozMHd11LJKpCZmqn1ehgMFCDQwPstKvyUvV4pmo64DXyKStEY",
  "key11": "2bnC2EGZoKXbDLmgSTGBFL85WbZ4tA8vehUSfXbNYUfoFzytBw6tjhXoJdyYdfSqpjPMoaZMyHxvoN66KRG1ZuxW",
  "key12": "seB4YZnmt8EJfFJ9Gkz2pgbZsraatGicZzeS9WLqAhWuVDvsBPkCiB3UwxeAQitPM1RAwwb54E87BsQgTwdJMNw",
  "key13": "2ziH4B5TGadMKRnrsVDp1THYanNm8B9T9Vqqkw1aT2wqsmRL4Q1d3fhdxZfxLEc26TozKbYtKNdR3RAXPsMVpqLR",
  "key14": "4qSEVDbLtq83ujazo7J7tUfebUNneNbRd8TbxD5o3PPPpy3UPWRGLpKNGWQo9cTKyQBFQWggFz9fBCbXwFwP6i7U",
  "key15": "L5z294JfHN4zBM4ktxpL6JpQ9sNmSBvAw8scmQggNgnZuWQ3Q35xVaJejnPidwcjwpDrWVrRjmn4bDwzGDZNjoy",
  "key16": "3Yqo8sMCaMt7grNmVZM7Mtz1DqDp611B2L653Yxobfx6ps34zJx6TR1r4mFrzfCbC41V9qdonsiabiUyqFfyF1eH",
  "key17": "51GJpzHKMUdnMiu8k3LAcT6fA2csVYSdrmwZUL59NHExPgFJDDxaevVZ3F9XS2TKZymwNiY8CHcRVFrbxEAv78Td",
  "key18": "3ZYwrEXydZm7VeiiKqFcKoj8x8kG29E5DnZw5RhMB2rvF7DuGW4J86gRVZTEwC4W3kmgw8cjAHZnjaTT8bnbBe7c",
  "key19": "2xWTrs5YjSJ3CakaENirJPsCu2fUV6oUQckXdPmGEGobLhjjvQPL9Etu9PsGdzBeT1qiMUfBB9XQZhChmmKirkCf",
  "key20": "3CVqbfS6jXoskChM5gEXzmfD3aEA1Qqx6SUpTXcSiNUnCbqXJV2cUw39uay6CaqnPgNQd56A1CmuXPM7kkbf9pnT",
  "key21": "3oR8rJBTkfYs3xNKi3nWdSKuRcoPtS4DHUbDg7wBrrUrjqtNzNZPojZPCZL1X6MVBaRA53rqaHkYgYdytE5gE3PL",
  "key22": "2hhLJvAPdYYCzr8f1UiLPpPRcsaGZbvwzdpCh7dGqYsfyBjY5bApfhQwxmFkMm8TWTVrjajB59248vgd2G8hKWsj",
  "key23": "3zNDYJ1pQgCzt4Zp8Gk7HLV8PCtMtcDDPtcgcu37pzLrVuqw6sGGQhNJoNp33iaCNUbrMdfjKGcAZo2sZeCVa3e5",
  "key24": "3pBKNfC9VFGASaU3HeSNvwe77Y5TbjhN4Dhrbb8XYg1iKuZAEH1dXpqJDHy7KdXnYAEqABUVd5gW5sQPF5tzuP9",
  "key25": "3xpmFVt8aHYDaCZW4qiAXKLdTQyvPm7xTsh61rmXnGFdVFVLY8pys3nLTh526NY3QM9mF8bQpwzZ7pzucWWgRLhq",
  "key26": "2AQETMWgL56x9gdzHWxU7ayyFX6mDke2sjCuYayc7iDhBq6wdKgEskPTmiBRWUNc2nAGwHVSbN1R8MXR9JNQttCw",
  "key27": "64pgDff7GhqAb6u55L2mPLn1V9xmwkbXf9Shefhadu473UEDi6HQKRUJQ8KKQafRVZKUnepr2HWPFCAFfk8SyQ7L",
  "key28": "3zSpd3bqg491beWcnQERFkfPVgPcT9en2CWvUbPxUKzuy39TAv5fHCo9BDPBDLN74FBoDdPVPC7tdyAnCL9srpJt",
  "key29": "3VGgn8BU3x616sUpqBYvV71ApA6RM5X1ziXRzudqT3RUKSRZqF1fpeMCnb4pfhLLCFPJ5KWjPyvuajZ4VneWEQXK",
  "key30": "4ZmPvjTpe6pczMYsWB9oZkRHKyEP31y5mxidRh6EjZd8X8e5djhBEi3K4gedjFRURdpnjcuoHDajqs8FYsz8DNcy",
  "key31": "3sDVw59LYZgKuijSXgFephaPbGVnXzJnhpcGRKvatExrdBjimNQ1gCYTzAZNi6yBtn6c95UYFeYuTwacBj9etAsJ",
  "key32": "5Kh1kvfrW2xJmFhbnqTqvUnifFXSHbH5yUEibeC1FDfCWK2M1N8wkVJ5eG9x6CsLVYANKcKPiLpi8QqDWU3yZ2ho",
  "key33": "2XiGPTKeazLN9y8JeDUmYzZvyuMveB6foab1576Q2yg2zGw1GqsinSJewTd5cT8XuaA9WngYkhHBHsBJLgvbvqBZ"
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

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
    "3Dxs3eQAN7nBZmZFkTuxi5kNauQG3tVbc3HxC2CPHKAjX3ZyEzdp9RwkShBGow4VJCqBhMZNJKvSvfScXyDvRmEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XT6oxADz1KYvCW16zmweDq3BPmEXg3MxqTRQpuYMfXf4uxcQwDUpjuDKgVPGa5zcgyu4tAUmWDy3L13dx3iYgfJ",
  "key1": "WwgAFfZ8rBdVs7ctCvGKj91kqE7MWy6XwmnkRJutmM8b45sxb6fcf6qTkXMn4ffyHcoRMVpZ9Qn5bdgmArfg1km",
  "key2": "5HyJP6f2Cg2qUHS1XPUV9Pdr4qXuT1cQFnTuGDGumDEWuYukZwr7t1B6T7hz6scDJJxA2y7SYmUjqGGf3SzkjLQL",
  "key3": "3JB21aXmYvgWtK1ppan7doPJqukSAkxomQUDMNQC3qnVyGjCG1U3oGTmJAEQ6CZfWWh9qjwMyASdoNA43wfSg3Xj",
  "key4": "2DtKZk12dNhxUTFwzKCJ3EYmyhmpag2wo8UoSSaGyDcYDuKbkCW1o5GsjvEeh9bwWEtpKsLvJu1h8ijVm7D1bq6h",
  "key5": "DbJXWpcgJ6q4PZhhpv2p3w9yRPzntoQHZPZ4MxbiDRzMV6pRxbmeRCCgo9YWr8xYeYP82S9bbzThfAc4CoeHPrG",
  "key6": "4sCqXxMnW728N56HrxekMh7VYvGWawPS5LAJtDX2EHLiw69D2zDQZEQyVMBAQFgNSU6ZHRjQo3cwYyUkYQoSqe3g",
  "key7": "76WU6LDDamQN3eiqYJe1q6GfKze2s5PiCo6gChm2q4Sz4xT4t2JSXWmzNH4MKDyfxZxVV9QE7LeqJnmfwWCp88k",
  "key8": "2jiEWG3CWcRTrGmKC4RUkKZrZYPQTuyDfuUr9fUwR23A93VFQgtRReoEfuc2evTHaYZfWYKjepon3nDptkNyaGxU",
  "key9": "bZPJu6iD5Ma9gpDoJL9k2kuEAfSCidZrSMuovvwDwJG4Z5ar4P6risu8rjvz7DjfGe9Asaj7TkRgLPun7KGYEja",
  "key10": "367g1oAd4SYmpBge36vkBkbVViF9efmxda7qFcmBc52TdnkRC9d5VT6r5uGitocZyh78h6CDqURru9N6YFjmTXNp",
  "key11": "3i2MFjysTzxEd5GPPoWwmf2wQNe73NKN9cnAgj8jPVXRZPg5M49tTJqQC2w7Z6Pis76fkCQCGyp8fqWFxtTDGtf8",
  "key12": "4wP3MEGKZmxtm8ULRQujbAtVXEd4wk9Fzhk4pqop1Mq9RRMXPWaFhXPaSSwqNb8ar9ahVc7568cq6ckg96ruuY1K",
  "key13": "4AmLchzsf1Bvzorjj1MyCfM6npguZvmHvBXogfvce7gdqReCW5AJCMbB3BsYUDz6teCkmkf5XouLkeD1dBXJr68x",
  "key14": "C6vZjFxdxypue3vMSMsE1RGVyjgvWrLpf7EE8FH3onfyb2Ky96bSbTsorNGBWgGzR6qGpEpHxi5oQ329vrvDwkR",
  "key15": "5LxZSL1AbohnwkPpcGCYVPw6VkxhdbnqnGRkkGwdsaDZWvnxe93vVqnxk8FtcDEBDAW8WgY9GfzuSPnsXywVxfQP",
  "key16": "4cRRQjLCw4jowWSs9oJ7xV9LuoN3HGedXg4RRekeRDQ7h8b95JjN5DjAf4hfi72DZvKGx8TsDuNBHiNPFXEUWBDK",
  "key17": "5sLuCJj3xiaGSynaXaZkQCGhQcxYid1ChGhPshij8cZieBz6PCJLsKMJwvpnhJmUSFCAZb4jWEAe7onoRi4nZcdC",
  "key18": "WwD45MZWKbS9GLYvJe7Z3tqfuEN8nV4XaUcTyiSRRrqgdkZqzkinCkb9Y4dTRgQnGdf715P1y6ytNvqyZMaaqjS",
  "key19": "24EbZAyq9SGkLoeoA1ED6zDysqAK2YauByz83kz5PguepVYLnidVS4Lk7D3nGQ1ixiw8AqkqWCXU71169nHmrKNb",
  "key20": "gtWrDtzGztUGtSpWjLEm8bu1C6V3PNgdYTVwjaaQUxqZyR6MAhXi3ehtXSS39rHMuHnoTpub6v6aiKZRmLEGWYc",
  "key21": "2GiN92P3YMBMAPoDviehbJVhriwtU8UfDdrmeKvLEnR5GEuEKquWAZadDqEaUJx7CMcomkTHdLenwzMdmWSA4ENR",
  "key22": "36nWcikNo9Q2fijjAyCjwQAQLULN3PdT8Me1JNRtwGshdcZzzEqCHXgjKGtKhFZu887cVZijmSCskXS6NWLBsvP8",
  "key23": "37zhjL9rxQSVbf6bxvHnbZnz6MYp4UTmZMmcsciBCzsD2n1R2bKTc4AX6oRKAMwpSX8tTgag594prRAyGFr5LRsS",
  "key24": "67GtpcdHDyxdbZVAFkidhXjbamcXnhSZHoNfSFeseo48CQdhj8CyL2CMcwmZnGcwBxHbBdvQoe4ejG4BRJogLn3D",
  "key25": "2yqSZFQc5x62dYU5yk2PvPQQRJ9QygP7JNM5cuVaWTcjk8hrUDhKrVX9dX4NqCeSuDHcMtHB1eoxK1EwWAcZchXD",
  "key26": "3DEZ8MUyQxGqAWjEKYmHU2SXdMqZXcBjyd4U8HGjNy4wzaT1aBhHHaKC68eAN8UPuspYrDY5mpEdgjxDeQrX515U",
  "key27": "MTmAq4DdjE9asPXkDttuzkCstq4eav1L6ahc2Lwo2ZrrCQfi3VGn12ka1M5CXyqDbNPV9YJ7BWT4hELimYGbTNn",
  "key28": "s1xbEdCd7TAVRfJSYJdvVr5RdiaBgLJWALJzdMxH6qgZzqJmqNdogNEHaDDKshvNFjCi4jMopfHdLUFpovzWYjJ",
  "key29": "4SFhLtJG8Fpp9SgKxw2Bg2fDc6BfbfH8eBQHakXyCnVmF1JoEtS3RaH1xg8KNeAYsh1mE3pcZpraWgz7BktNpUgh",
  "key30": "dKkDFHxA6FHBQvHsneX57EWEwL2KoXZptnJ7nmTGYnqi7CuHz2n1w4UUNjg5ersTykLwq1JGxo5UmaAkRBaBpik",
  "key31": "sXUcPQCeLpm84pPzy2fu3qY5GTtGMUbBr49L2DTf8KKgk2taA8k4YWRzwnmACAKNQqBqHctARG1MUkUioVBHcoD",
  "key32": "4KFEV5Cjd9xTNe3NKbkTyHZ6urMv87UuR1FtBwK3Nqr4it75zBSTc7VNGYhXTiEfdn7eA8JgQMQ1cTfjUbgjRcsW",
  "key33": "4fKNS6fZbDQyM3624uxRrPi8trG7ERv61eKfxV5pGf9jqY7xx75rp1oR97eENSADmSXa3n4wtvmy6NDRGEEYtuXt",
  "key34": "34UZnsn1nYBhUFzW6zdtzuimxgho4qiWRkz8bRatTtAQux1T81b3t3F98QdFKEnJVmyBrKW9uPVgG8FHh4m2G2pE",
  "key35": "423FGLq4UsSVr96imu8KTyLwWaK3n82JdnNZWEPdx1xUb5gY8YZq4eNWYynSQUePcZwNUGPSDWkA4zdSiRfd1vTy",
  "key36": "619FPpEabkcFK8cp41ew2hsVqLKk2DFuvGz82zsyKzoCHUywCvrMiCm23HbaL3UnBBocU6whcMDkn9cMRrZRmbYd"
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

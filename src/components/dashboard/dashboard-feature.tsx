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
    "2dfcf41VcHnqaufjYoyjRBYauYB6VxWFKx4sLU3rAJGR8L1cC9Ufzu1BRPAYjCohEdvRADPwDw4D2jP3DbPTFk6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zcqggk24Lz46uhvdkQysT4fyDNBmepE5QBGThHA7gjcnTVMtpGXY1Ju3y1D1NDQJKzGHqS8EcVoYfdDig1KgLsZ",
  "key1": "Z3GsYKzAy31AjKh5UghmkuQ5kNaAPnh91o2cjuqBT3pnpbjgX9iVb23wQSM2izvE5TgFWaqXjGwEeAg3JTq5rMX",
  "key2": "4T8VXwaHU67SXyUqcctG6cQaX9YXZW6pqMCNLNWJLX9aT45kzSatp1hczMEd2TryoQZXjHvDLoxD7wL4gSspdcru",
  "key3": "5szuUrDmcyBx8V1GbhzfDmYyghQkFV53DH7S1k9BN2TzDZv8ecFrsd1uiWGT5xcQPFw7g8ic8PNZkfRfkghMpA2m",
  "key4": "3kjfPXWe9LKSeaTHefUeA9curx2qERMeFdDe5xupt5PxA4ajjuLetX27r5ztjrtvCQhrYhicantNefghXkQrb5zV",
  "key5": "4nyVzsTA3KWVhNcs1GxUNMzcV9KtoYeBG7rHURx1QLdQ5R8iDuqDd7Nm7xiaM5hpvfnGDJC2D6WqrrgjZjQuYjHC",
  "key6": "2AzsXopv3quoK8hMeNDcZDaRkwQvh9D1dtYAPG8eXPNDbsqAiD5ZuNeu2h1RAcxzimDMSbUEYZbevWxhaDog8PYM",
  "key7": "ths9RfVWGefkQNCJxZdZ66hffeXuEEwaTkte3w4RRbG5yVFexSsY8moXg9BgNnmaoRxMwhjAqgsjSrbCiMFcHfw",
  "key8": "JETAerBDdJCjnXbkVNo3vywdYw6zMS516i8Mx8MQNszJdqEVNt35Yq7FAuqD2YoGVp4vMfVAGyZymkZ1ZiDtFGj",
  "key9": "5gtjmBK2dPbMarMM74CmjZZhfNTsGx8ztGJrACqqkR9eihUjeVdY9ZNtt8H8NWXyMPGicYpK13NP2mQRKC1ViBpp",
  "key10": "2SXWY3Pi2eQkogAxWhREm822EUrRS85bAaw2Vu6pXzQtG7emdGmK8yT3Eecv2vC6fNtnqmTV3BPY8bdVo4JTZmLh",
  "key11": "59nyLShdZw3hfvUCYgYjMTimnsvxoDvni5nJdVZuky17tx3t86uHVQqKC5QmcXqJM7gr2DSXEMVuQBWK8Q7qqa5Z",
  "key12": "Z4w3YfAfHRd5NuVMmumjCuiE6391sG8VTf1cjVv3p31Y3ywH4veEtetGAasMtZGyqXBUFbKm28wfTNA62QLno6K",
  "key13": "xFxT5hD9A6B6XfJnouqiib9UGSRS7vF5msP4W3ZzA282sMAkrCYBXMdY5EqEkBFbmojbrqScp1mpJAJTX5ejJ4x",
  "key14": "2DzNhjtzPobxNdDLHhhjJAziuoLeKYvGFBTRaxCarEV4yoYwTSA6MCTF4UYud1hs3ffYkm6pJYc5ePKN5kgBa9JR",
  "key15": "3PN5Jeck4M8J7bC6j2x7nyzxZhBYqCmjezQLUqJdtj2SGALarSwBGKY4WMEqJHKoHXvaYPZen37JBodpYLFtggV6",
  "key16": "41Byjh9K1vYxRPZaJDe9fvEANJzQg4hzfzJ5DaUZbyiHjoMF72nVrGVuHvmKJSiWoCNPGMbocbF599unSSrkQcig",
  "key17": "4JjEhdAwF4BExd2sMGfLRHbFNuzMcoN7toTU18kS8k64JjFu3sfupVV2tYe3uQxZkBmDBmXVWXeAfLhtL1ZdZQSK",
  "key18": "2rd6m6DTuEuikj18iGEBmUQECcwGo6aprKLKUSSatj59NFV23UdvcuRr15NeqS9QjqUKRV7t4x3minKZ8SUfxKXe",
  "key19": "2H4xZRM9KVxaavG7Tgoi8AfdJgwWCj4kV7yRmfG3NyvjdwPCxZqULheLp25BusnzR9ym7RCnt1uixJX87bK9YD9d",
  "key20": "5USLsW3oM52KxtAARRMTonK8cKSiCRxVz6GiW2bgCszHEr4H1bw4bhb8Kt5PtTNGFiK7yZCMHuZN6m2zK8qJndRe",
  "key21": "46kqUixHJDxEHuLmGmL6ehvVD5aUQSwMeQXHYYwMWY6UK9nzK8Nco7FJu2fBQTtZ6wi6vAUsotyqfWr2ZL9UGKix",
  "key22": "5y6QqyduH6Z8rtQQp7aDnrD5bFcGr3nnJy4uovr8RzhCRHG1Zkf3xhS3yon78Ef7fyKJnVW8EVjfZZaWpVsrhxdY",
  "key23": "2TknJ3v4fjVJC5Ue3Sp63Benp6A61bZ1LT7AyNL9xUNpYi7x5yiFkynkBkm99NNeE4cicEzidyGvxVKe6oNsV3pY",
  "key24": "2jv1zuNeGrEnfZWLPoNxskayToRHpWuBpewcfiQB97k9r8CJvL3NbQbBLbAfBhC3Gx1NtQFEYfos9H943cMPCxjL",
  "key25": "dxizgLJT8mm2NDs3JChnqMfhQayjaC4AxZ7ZbdWhewxjk98XJYRAocDuGw6jHWv1185wLQ2bqByBoFz128fkM3f",
  "key26": "3mQDKEhnyLPgYVpS17kKxyZ2Z2MpkCNM8kdR9UP2Q4MvHT7fyF7HUi5SgWk6vPa8DTUMWy8oDDyBTUGA5oGBMbok",
  "key27": "4YHTGN3qQnTgW2sdvCGniPbYjZyFB89LbiqFgYj4W55V5dzt9JsWigdCNgYJZTBt8mpEh6ekUShVxA4hRZypfpX1",
  "key28": "Pk7uL29VTGnuGk6myCbm6M9dMU4wDqkz79zRa41ihsLE9RYGC1P96PdgrYpAFU3jqoyeQQ1KabEFTYbdNwKy1ez"
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

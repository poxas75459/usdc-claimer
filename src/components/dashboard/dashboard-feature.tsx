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
    "HQxjjny71Xn3r6ZmiCvWab84BL4TYcdFvyEGcSNqcsiC1s3wtfmbR1xyoVx9rn5NNKftA69cuuSTtN8uJJEp7CK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hG5b6vC9gduoCsMYKEX9YogKJpfMepXPFvu517dj16bLf8yyPeFq9LvpSuqovRsCxHcwT2pVMbNiJyMiTDkhWiq",
  "key1": "2TN7dzHbouHd3VJCeeacbRwrRxPJ9PvtH9NiozDG6b6QNauX9kPkxJK3hU5MR3YC6eXLmRGviJ3diRA8NYK1zmUu",
  "key2": "3nwWrCeBYoX7mDssmJLjev45kLriCaEoRhZ4eT3mAd3aPUjuApfHrwu6LQpuEKeQhRuX9eQrarJyLc1rr48JQUcQ",
  "key3": "vAWe9j9KBEYqBV9hyJutUn4daADFCyFvaTpCXTNWppNKcjsQ6dQkRTfC3V1FadXKtzmeKzKzkCFRJnr6uPUjcnc",
  "key4": "5MRZPpjDm6Eb5GDMQLP3tetQjM5W2tDHsHEehYnxicnLqQGGfdNmYJp9CW9YLWbcsAi1zWCGqpeqTKqZGjUBxFyP",
  "key5": "SKzPsZ8rPJaeEWogEMgbez6Stn6WJyzPWMjkd9qQ1BiWLTY3dZ9JXvha55v8GxqDEVi76pWBVdaDnBYGABNtXMm",
  "key6": "4niqkS2uoFKPHgfXuN6Mqomx8egc7yVHdp8fEf26YHU89wCifutBTpXo7hoTLDYW3QZsMwDjGBmzqFtfCeoFXKvU",
  "key7": "26QAHHm8QBnAeebKCQFik12UotVxpBD1whQtLxthRApJ7vfsGnyZhYBAwGdSVqLn86Feyth7kpbZCAaJdVpsnXig",
  "key8": "xsAnaLqPsd27u2Qqhw6nS9714z2eNxEREWpcqDg9HGx7FTS5E9cNYYAcSreJK9PFTNpCik1jwwmtEE5NgHJp118",
  "key9": "3NKZZZHCsTQs3cwiPgPMLbFcpNKmwJeWBj9Wzf6xjP2x5kdGVBR1aWHn7GShQdo5X5MqResGazRPsjQfKHRrw1dn",
  "key10": "4eMqHyZPVMhZWmWoQdPeQo3kcrGsq4AqfBPfzp1GgzkV7QDidZuvhV33w87V5jBYkwcmTLZKxbNyF5MxbfMfxj3L",
  "key11": "3R3k9DMcuEUmEEP6saTH37p5F8Nz5gbEnjFRsV9GD1rFmTtQn97qEdkxS4rpZYA6Jdgd362rj5vRhQwNCxzdeGVc",
  "key12": "5Gp22s8iRpPMy4sWCLBJqkq2DzZHhfVy85uTPsLyL3vBniUenqt7cbXJwKKnyF6Ja4s56aKTqwH7Vi8SSZJRqEVc",
  "key13": "4U8ezY2ygPVheAhcErbrs7nKwEy8Z94W9DBKsbBEP8F8WRgmyevniFR6y6rVgR7EMj17ZFYnMTSRxZQPb9eggByn",
  "key14": "5c1mryMqJB5F46VZ1PUusWnWcNaGJFsKFenuFFdAfdEA7u3wSiEKcAEXaWaJ1AW7mcqprStFMxo7ConkfQX3yzUz",
  "key15": "3xDfauWRMDbpeSjz3TaX76nkMPAkn4gn68FEXG3bmski897XxFZ3HVQ8jufQ8U9q1j7GYXTW8WGLBVkqpM84jPSN",
  "key16": "5GYCLxc4nmuJX4Xk4BRMiX5JryJrVHBjpVjKWYbFnwhXYPy1qe5tcnUNNgXE24es2GHAodvQLeCpDpvSTGn1CiC3",
  "key17": "GNtxcNRhNb13P68321v2fEceEK5x5tNyJyiUFMVMfJV74FSVA3niSgJiodpAEBdUZFasczeUsPjBfhvXoe5Pieu",
  "key18": "3tTXuYp3thcmv417JKoA4oQS6f964ZvY3CeLYxFrSZ2sRDT43CxigiPaS6sJe2CfMwan5ccx6nmT7Kv2GXdgtFRe",
  "key19": "3oDZqNWiVa179pYpyqM99RVA7anqcNsNUQJWYxBSVa8k4E6dN91RAFwrEZAeF3D9Pw9RWciUi1MXNMftiA5wUnHk",
  "key20": "5vGvyDZAVWyQHS3nGoyxmoP2p8fNjrTy3obZ1zXoGDLzZuEeXZJ2vERZ6BKRUmmPjYyfx9ymH52u4JiD3ge5USzs",
  "key21": "27WTi2szT9vZFv1HM1bchFTQrPkpSoWYYTZDnr461Y8huz533BkW6d6q3tHNZhGTaBVVWNs8EoPcvhj47XZtSAyp",
  "key22": "56zCw4RvukN5oBSfdEKsJWzFmkDf3eiqJ7CGqpx8jMECrDBkcK1wiu3r6ZURYQvu71bKYAuu1JH5rEnQ41SeUsk3",
  "key23": "3WUGJbdc9n1fsMjGw6TWz4Yvkm7VUgTEF2PEvfPzkyzYS1AWXGDqcN3VtQ1yPZM1p7fhJpYZjmq4wwHsabZcrtDx",
  "key24": "3AJp88UbDTY9XHFni7AEFKnw5mUNdm3swLheJGwhPKTbJxXkfSVHL7qgJVfRR9oUXNMPFbmxpG6Mztge92R441nb",
  "key25": "3vSqYANMo57FW3J5JU6ntpK9w4W8WWFrpsqcse7Hk32wVYRoMTc9ysoDEj7E42kFWfDdvCPs3h5ojUWbRioif6PA",
  "key26": "9ga48cYNmB91epwRYKLbuYPSjcFJjZUXt5wMcZUJ34DNUSu2oYnEjU1MocvyKrd3UBkDsoCbTMHoSnK9RTw4GTn",
  "key27": "2TLwf1HtskNFBFMWNJ72SkgL5DS7JK2pfDtqm974AQCWQsc5BGRZLBSE6WLSJnLscvtU7DwTLAZrmTK7Kb5HcExn",
  "key28": "2RGYfjMj69kWq4Cg73N7iUNTXY7YbKoyAN3kErqcoB5kFKw5YCiPwehi1iS1cuTuZn5JbEaY7wTj7mmrWoYfPAt8",
  "key29": "3tUoUXEcNWPxyCLDE1WSJAWFFuCVjHoK3TBTt1kw4rymdkeSTdu6dqwyB39vNygZ5okFuUheMJG8RKAdsBScJ6HK",
  "key30": "5pDguFQJuLkbtGjD6oWouyAcyye2ie43Hf9G4AELQsdxizRbjQCSj8oyB6uYsiNqHSKmTQkoZt4aRHPjxDuDhKyh",
  "key31": "3WpxWXupE9yWjsfs8fm4jGjwUk2wYhQPmsRnEzLapGUkGsBiGBa5ZW5tDR2imJkax1Ga9x4eaTypdMRVAduvT79f",
  "key32": "HvkFyQUY6YmqNE4QLZVhThLBE5F3ft47MN8yoLpznKco7qqooao49otFhsuKsMKAgYf382ujFbGh96kMyM9b5hU",
  "key33": "4pxiZRQ45YdUnPWwn6EKBr7bDRFpQcVZakePNEtX6jkDEpav4Vv8j7MNUYUsYTKSQqABLHLnZMdTdK6Ma2Mh93L1",
  "key34": "2afkzXBpRGLoht2adaCYHz1CWynmgavfkL7ZavyPtk4N5eLAtdd4zNE9frULqEmzg8e2W5aypU6rouTWCdmoLrDC",
  "key35": "3vRZ6HpioX7jnryFsfxh78Pe4Utz6iaPfxNf3W4pUjcYHZYqmyWmaQSdNuo4Vaxer7gKAXjLVDAnnsThMJckRfKG",
  "key36": "4vS8RdRpwfZceFQKmVZLTTPxpeKy347aWAi29uDBNMTN4GyvdgxpfqTDSLj75uz1caZudkWoGfod3HucCUqBHsx1",
  "key37": "4Tmbd2nMAQGk1nodwjejQekERVKdhHSRzGmsMgZFTxnBRhPiuZb4ryNcbBeaKERYVRZjzaeWbnzE9vShY1WGXEB6",
  "key38": "3t2LSkMQPHNyTyLvz4bUAeqm2djeUkvqsZLTvcsexGX7BPs4Uyq9q47u7bS5rYbR8tDWXmyhvtqrzAZWZqRuLDm6",
  "key39": "3JF2k58fEt7gMrwEgUhDq2qCB5R2obUaRwdCEZV6aRxb8M55S8YEUT6atcj36DZZwn7BSDKMT1LZH26eVrLzsM3f",
  "key40": "54Tomj8EoLEwRCSSmHZZbTYmYKDgwQVor9puXH9g5Lb3CtGohkmSCHPeWsB6u5jAwLUE84F2e1DWNRePkMJQSpMu"
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

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
    "43W8obnucj9anDGwykcq5ypzZBMScFzM5D5fsdd1MGbidZ85SjzRduU4C9w4B4xCzuV9Zuf91MSBK3VaDZCmr6yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4idvB3VGfogDestt6XAhNiGaLmUuUx1W1FpqM39KXAXMmXtVvmDqGc9eQRuaX3dbwLFjWzpj2YL9r74RAc6RUxDx",
  "key1": "Hb7xXrCNqcsurSyhBdAxLwtssbqyrSrXfDfnbMwe2vZ72DBnuPyhWb54KUpr8LwAvkwNH2gXEUGsE4DrZ1AG5Vy",
  "key2": "3fgtkm3BpbK5SvtnzZ2e1GdJiT6QHi6V7bRJrKMNKHwaLPUbXP1rJRWDhJyKT6atNaEDWchjX4Z72TGbL1dBmTqK",
  "key3": "iRRsSQrsAcNTgVaq8EQoYP9zmvzjedgBB7YK4RLBaJhzYMLGbR4HhMfXv1K2o6oFKT7Zjkyu8TWS7xexoX3SKff",
  "key4": "uTJmyf8KazPyKEkRbT3zjVvzYTZLpxxak7RosiHoMA49ZWoxG3zPmWP5AnRLg3HKsbghqrDFthgPhSLDqmjbcV3",
  "key5": "2eVLCNQThEz75cnTtESPVmqz1zTSJHA1zJdYxuRJA1xsqP7SymMKmjHCmAHyqRV82qC34Fv21V9fyKa7VyuR6ZYc",
  "key6": "2RLPB9mgxLci5VA9PdME64BAnjJ3mvsq2sdsHpuAmJu29PYJCntx48izwr4C5vXksucPH4R15FTvnf9jXiLDijPw",
  "key7": "5r1YJp9V6fhqf4ReC31GkLD9xsCorDXNbcneAVxax6ESKPsAqmbD6EDfYJZAx3eoWnEKzsDAg2cdG7efv7GDoN5y",
  "key8": "62R7j45dpsSd1AAesBSgL5yrQFZpeHvKtCJ9ASMeCqgaeuFiEzWmjXxV84YmYEZq9Qz38yw5mLCsH94HYYvtopHy",
  "key9": "4BrcRq3p65YDv6o5VxYBB5YtQH4caTa8eTsksHGFhFqiTq5JtXfSy6RkgYF2u2rsfy81hMoPwBJujDcAsJ7d2sBf",
  "key10": "5GGMuvisJunKCn8gr1CTzT3CMrvPRrjEYU6SFyKuaCBpfpKLgoSrTJowChRq9zeeGA42Dxvm3Sh9SvVh6ULNMLp9",
  "key11": "3MU7HfzgB6ySC6ujmAt3mxy6gSRYVTkPC4SZusqVGmNNqZJfyTzfSeZeZD6dUwjjcBqjbnq4X61yRq6BBRjv8RFn",
  "key12": "2iJQXAyAKKvh8a2iFx9rbBVCddKmLhpVTeX8QUcA1dHkHFQR762kWTDbXo2PRdAEo4YZC6kz5VmnRt4yWepMB5aZ",
  "key13": "22jn5tjgqZYaEVMC5dAoMn8qYBc7TD1w2FkfC5n2MgfQa9RdKqu4Gk7DwD7bDkNofHwChZof9zzKvFMWjeyy6Di5",
  "key14": "5n4kDTvMhV3UFiH2RLr3FNWayRRCftTagRJXgh58ymotufT5JGHVu6H5XexXcqVib84cN1dE2oAvTT3K6ru37KqT",
  "key15": "2xJc9GwreEAdZYmVWSr8KrN3TWYju9y49FnUU2NnzZpj4WJmMG1s59PPgGkssvHLCw2NdQ7g5GUHPdcdF4uDENFe",
  "key16": "2PMd65zi7GKhwBuG5Wd1oeMS3tj6xddAZtdreeQJnFWsTyVBkm9NyhgcA3xkNjP4suJcS8BP1TCUnS3sZttjyF5K",
  "key17": "FgBkFXdT8J9kD4CST7pfj2XXH61EPKxUGiWDQPcPxcpSzsaWM8CnFsww9KFk3FTzRsg1YXLkpWhQvNdPCSTYexK",
  "key18": "2e1GiFe8tmRVT3dbYfefdmsLRGhVE2T9iCbqpXzCBFtFmW4CmQUmfxiNkUAuvRh8pzSMobQoxEx2b2ASAvcMd5Xj",
  "key19": "4dASiFpwXkKDjJHBbETbSiJZzrZQYuoNctEdvhcEMtnZLrmiGEWFGZkKQMNq8jUmi2JeZHbhwidH8B7qEday4de3",
  "key20": "5NLrReUuf9uC2Da8ihsLVMwXathHEqViPY53RLTkiapwgussHvzKNWMJawhZ4ppB3USX7pzsDcSqa3o6JucUdaMt",
  "key21": "44hq4e2JSAfUxr8tmZKv1hcPGjSANT9QRjPgG8wMVks7Ce8T1JBAyNVBJ5vKEH1M9YDgf9kyL18zCXUnkppqcsgP",
  "key22": "3DhVhjt8jzT6YHbvkwJU864d4owDX8WWbqffRSRZBGy6z9FWh95BwZE69radWLYyPAU6vF5aTJ1wy3iJeTXUmvLJ",
  "key23": "3tW5e28QNAvJmLBfCMBF5WnDdsxnTkqp4tMd1GdtmyAzvxzfJoQ7RBv6XKmYoseD5hj11i5GtSGjZy2YtCQ3bfLw",
  "key24": "77FbtrhMmQKQAkBfsQ8JpDGGPTvLbt2cvMhUzBXthBuK3J1cEGWPysn4jLJS878qZa86G3XS591shPg7sESFskh",
  "key25": "4jY64eJTxeCbNheCYkH53ha2oC5o2t5tS1DEqkVS99XKLqFBvKoLDQ4pNcjKxeuWsTZBuaMMwn2fHAqfiHRpnSdf",
  "key26": "5YyouXhGnSJAHvHscHj62AY3tJDrEjXo14D35fSRVhGzmGibmbDfQjXnv5KfZw4TEY8Gx9MmZCZiohzfLMGDfPzC",
  "key27": "DRT3SDGRGmARyJM4P59yUjPUrnVaXjGUwmHqN5FC8UenrbrTaFBUyR7ZWDJBidjS19ZSRpe8QtTQTPsdAzdZDZm",
  "key28": "5kn7DEvjTCAidHhzodUwMgCxDdEbPUd7GVUVjhCJ61ZDbQca2vD9vqfGLiyd2PMohPkKvxyMjsirvofgDyKWP3Yd",
  "key29": "9zQ4Rp5qHxYpEVgwdbrvS5QLDDS8xbPFeQpsWTgXKX1NkuPD9rHo77xpCFLnPSa8TavLNpGK6wu1vuSwLgZPyf7",
  "key30": "444si7oCVstZb9WvCENmDyYjeq9gBpUSYGCTXzhL6HnHSEHohKh2EmtKLWy2V4rbQLuSQ5MiwciV3qkBAGZjjdbs",
  "key31": "3ufpLDkdHrPjErPHfSmbgVbUuRsqYRud6q74sB5wuc89mpwSfpKruKHHv7Z68FuDbAEWEwiMGh2s31u8BLYzAfFe",
  "key32": "4dqH9nUHcnx1wbWMQsZfwU4GXdPbs2QGp9LPgPRMFpNuxcDkAdP7o2vJxC9L7qiQvu6dCcjvNgRz9w9geSo1A8v7",
  "key33": "2oRxZua4mi9suhtrTKDJ9fmwjGq5fmhkSWowAG3gS7TSLStRS8NtHgeZYfHhgXcZHF9HbpmSQU99eD9CgeqK3EYt",
  "key34": "byTojrEoL2VEv7MDgDwgKqDJ3JYstYJedavtW4snfR3smxPvDPLAn6DdrzxdMWKHt6tzysuF8R47EDwe6WhovTc",
  "key35": "4MBYkURYAWqACzz7FSEpx6hQyE1BGsRYCcRdrfksxa2c24nDRZMPEr3834j7KGFTpacfyVxGEejgrHidU2a9t99D",
  "key36": "3qKrwDozfTx5GaLCNC58DeHLFJtDbE3qVAgnXVCQt4NipqHKZhxV7qz3REycovw7xWkNnAMBofa26UFFoFfEdis7",
  "key37": "3EqvQFvqJaKWmF94jS3sHRy2C9o6nrsrhZ7LqAymxkzJgqDoQaWZXQJRYDb711tfKWkjkNPmDfvr8boPcigrH3sf",
  "key38": "4C9V8z7K9x9rDn7h3Wu6XSn9iw1rtdUiW39qBaS6xNEDhZipB7vAPvwnxGkJRHhNsqE71iv4sXJYj2y3EnUWW25o",
  "key39": "3sTHXQBo9MZzkZk6FfuJE4cGSrWRYx1V6sfDVb1Lr7BNTYVKn9j3Hjk5s3NBXDX8brUV5GuAFfWZd34UjBVTWmif",
  "key40": "4Sv9BpEPmuCM7TtnU6bCnMEqvLap3Uyk3oKkN5xL8hV27LJCwA3bqoM7bnpuZYGSUGyFzLSPsd2Pu2ikBuDFdxS1",
  "key41": "2pNTEYFnAa9zRV89WxoqTL3tbeDeuMhKRerRpFyPbHXUdBDCi5LNmb1x3yBcSfWABw67PjfrnHD3cEt9Tjxuvp5t"
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

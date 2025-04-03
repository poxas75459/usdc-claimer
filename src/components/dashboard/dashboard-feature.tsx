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
    "2HUKNwSSjppQnRoB3rHgpKynfJ3HQj4Bg7wZe7t2T8titCWuhwHHcSXprd6XZTWfyTGgK6p94SCUqv7dHXZaXSR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66trEhKu3ZgXQSfSxHn33iGquHyZ7mAA9XPWCZuoGBkAk6YwXzbqQdEeQFm6d8UmLfw2xhCYUoB2SSvQefAzjRka",
  "key1": "4dkcvzT1VvMo4D553MCUdmwQ81ErbD5WCpxeMGaActxkxKJULnMvCF2T128Qu6fTMCMMHch9RLrHbUxF7x3pUtus",
  "key2": "3cboL5EJZyhhrWCgkqiMQ8Q3HBGNtD4kpNMqhVUJWPq27MXYthW3nPFXqbWZqX1we6XvP18GVkiFcmY61MwGMEZE",
  "key3": "5WyrBMuCVhZUuGTtPaTnfEPy3NTw6UX3akzSfzpTyiteqLU7au9HYFLzDRt8eCG7xroSjDnxEYvx657BFWHzKfGx",
  "key4": "5xdhKMaXCcsGYicUS8s8fKa6imT817xomNYvajc6SaJT7P4xVxAUCApvJ28u6BCNawD7ZmK2Wm2e631kbGAc9UpK",
  "key5": "2KbDKr5ov55vqwmm6phWziYjgoxuDKycxmjNPiL3PxwK4ej2khAuGPusyUAFtBy82M1sJBtj53faQU2cFp546JgA",
  "key6": "5YNHmdqGEHKvJ5tX6xDy68ZgVATVxK6Yq4zNzUYBSKnHQeFGbywP5cXFYPz6z4ysi3mCzTmU743LBFB2Uh34Td1e",
  "key7": "21bKzYDDQ5vrAx57wwH9D6rLAdc3J95KubaPAx4X86q2dEyVN2EH8AbNSt77GFPLKCa35HAtoidxGTUgLVvCUmov",
  "key8": "UaNkrYLxxBJ9mDurdDhhmSjwMKyhGyvE7jVsTRBLUneeUuCGQKbQDZ8nTyT6DUZMrdiYZKSzSypxtwQ3vVWPXHs",
  "key9": "411X3LFAAxW4mwyFZgBmYvqh54Kr85eWRiPuiSvQuQgjJ5AQNHuZ9qL9aYerV6DuRN3eTkqUfa3PavHpT8if2vXR",
  "key10": "4Tx1rX8VHGgERmDP29aHdGRKiJb2MgVmbpCs9QFQD3BRrvSBR4cwPf6MdQPFCGmvUDJkPkK4nioRfM6d47KCn1zH",
  "key11": "3n9PG6LzgcETksepMjGhzBtC1ZYyArxqqznzHvWkXT7rPzDxzABa9BuwYCtgxpnP6Jz6xEY4urzcCB3DHU4f51sb",
  "key12": "48vspsEAAJVj2PjbuN7F2NCCd2Le1yR4hb1NxrAPGKoiqBWPtnBdbQdwNhN8jPVGdDs96f1VRhvEukrczG3aaZCZ",
  "key13": "44sa6CuHYgXgWhJ3kzomW9NqtNVN8U35QUQp8NWBRjKs83mEv3UD6o5u1dMtfLU8KngEhhny9fgeeyUDaRqhSMQp",
  "key14": "3QZLL4q1ftDc1nXuXUhDb5FBUxLAQqXCmVa3CQoxeE1zJXpnFY9m4uq9fYoFBETMWnh3pnyNWM1q7KyY7b4wxGDE",
  "key15": "5uHuVb9QCqLxKcNPWCLX4ywh6Ku8wQC77UHJ7aRAKdGivS5GpfZUNMirX4CCtJFWMKUkKT11SwGJycKJNHVmeFyE",
  "key16": "454MxGLDDKdfv9o2XS4nzwYgJNfzDonLawumsv9Fv9ciSXkxn9hqNUoLgcaiaUiyUAoJFYU1txzTrmMnTDJb3jKa",
  "key17": "4HcQEGCroihF6i2kBpQQfaXcdErZ2KARbDbD85m8u1WQhp5GF68iFrdYbKK9P89xXEwYebSBim3jBmmyiXHBpWyd",
  "key18": "2PMLvwEDTHEzZ7ABFaXWctr4KFZ1U3AkfLD8eGfHxVdrXotynipZCVABPdABDG3r3NH6c1TdQbUhUVqCkHXSt1ra",
  "key19": "4uRP2BxQEY2atZz9jYUa2R6R6grr9Vmme5c1tYgofsUTyoFxnYtQb8LYVxxkMKGuQ2ZXUfkgf7Y6n51ELcUMai1Z",
  "key20": "2aHFMKfhiNPTsCXKmtvUD2YjfN3WKt5VpRsuN8vMe2VvedWPGWPj9cKyUWawY79jNEq2iR8YAbGzSdBpGUuucfRD",
  "key21": "63obPGfJBLkGZpuZTLvAT8JTR21UkY4tDBsm6DhPHdzXuZPsotoEVuXsaPWvZcL2Ce8YAbH735Gpj1bf7sxQ7qg1",
  "key22": "4MuUmYrGysY6bPtt6mDq43wrN9HdJZ1YqoTMgC9ifPxpzYevMs7wJWVf1o7Z3PB2TxRDvkQtHnPMUk5Q6b98DcW7",
  "key23": "5V7XfwCcNgPfVcMwZbBKFLp8G2xQdGcXZWd7BENF3RYcdkYnskQezuW9PvYhP8xe7UqZg1Mv8uaDiN17vPaDQkzq",
  "key24": "5bSDSRoiinSy386aGT6eFNkbegv58XLeBdWWVNr6dQZHDCTDJFLceez4jMHgsHKJZcLjwbA9HrHw6Yn7RzeT274Q",
  "key25": "3EGtUDwj7uAXLcBsZgbNUkxuGybV3j5vzp4NhXv4UTYP2Ya7CgiG6fE1E4AGzzV7M21woUHG2yandfeuS4xCjb2f",
  "key26": "2u8EcnR7y3V5QYBBmUVYcfU6WSPdwLJsA7r8d3AeXdcwL1Txsvk4cMUJ32PyA6nkQz1FKfKPtVeAGZrSPhpQsxma",
  "key27": "4aFijG6TP3qS7GqdXQqtR4rUwNkEonLfQbmBYJ7wyvsgi6FMWETwmxmtE8d5YxpDD44MqHWLpC9N5WRNcpa7eG5K",
  "key28": "4qa8kiqt7Hek6jdWiGGXgQ3Rrn2nfmbALt6AMuo36EaY4WAKL7nKmbEwBFhBa32tNp9CnzEBWvJSGDKo13fnHgAg",
  "key29": "3z9ENdUAsZLB91WBovRniDYHEUQBtkLgCdEPioRXrZB33iVsev9AUU3QHBhXyBtfR3WYMhN4S4j7spCZmDznRzet",
  "key30": "2YAMhj2TVAJW2doW4zt221AcKR9eoTUrtMCJWJ81QAKnt3ZSdeWvRB8F7ZHvR77sv7XcSCNJxWpE46vX983K5rpG",
  "key31": "35ZRd11osQtjWym97FLMJKXBSJcZErkeXodb4gSPUyG7KoPK9fj2G48Uh93579VRZwZ17sSYgaTiMPZq2JtZtRR3",
  "key32": "Us3WJfcUNjEYPjJfn4J9nnWr8YS1RdK1mDAKWXSFqZkdpqYGTahQwbxFcurmv1ekPUMibqbzfgPo2PTyrifY4v8",
  "key33": "2mTjbUoGG5BZGHW7aucwQ1MrZRp6r8jrxJVJUVTjcP7ggh18PKptfWVCv1Bdi2jFYthJbqJBWEHc2W5hYVnXJg5n",
  "key34": "2iaf9gBbySfZLdxS1ng8kzT4r7uy55abFZcedXjvebwt3UfvmwXzcsQhQiu6oBaRhA525oLhbJbDLPB6eFvnidxW",
  "key35": "4ix2Uq9NyF2K789YAmLuwob8vYhjGntSuo3Zh6tbHWvBoVtFBH8TMnZhpAJtKqu2DGKPsqPTYL1SeHvp8mw5pJJj",
  "key36": "2MEwD25a6V6k2N5E3zZxNde8R1a448L8UkXrG5NfnJYRkVSpmt4eASpVJgmLSAXTDg3tqo7p2Y3K4FZPkvj68FZp",
  "key37": "5e9mBC2FbWgezrXqAZDuBzgxEU4BMeZL1FEeA51aDGK1WhU6U6ZXDUhY4BW2s5ASUV7kCX5SuiZkVYAWZDmXVGUr",
  "key38": "5pTFK2x7jn7QwSbM4D5Mf8YBzstZRZ8YZqYMLiZnAqijnnAzGb3WRuRJVQ7zsdGEUeohUddgysjLYaWXBTtSJZKg",
  "key39": "4FXa8AojHj8xabEmu2Jb4BhfuRe9jUuyeVMwRviskhs9ezTxAbRCFGoNeVpe7MoJyD9wD7P98rf5sPMjJfzepWQL",
  "key40": "2MPdAMbwfD2HcYkPYv4FpU5er9tack6zkTLyXhWqwK7N6BNez98YqpypssBm1MK58TzPzn6oio6UdgFufMAV5uH5",
  "key41": "23QqjL6g3aBDhvpXWrTbodxGzgU9DxhGBEbFwy9Yxn9f7DjprUjCokNek1TZ1u9FFWBxvoBDShpjCFo45yGzNYDX",
  "key42": "4DkQAxtrUtjFYfvM9RC8zWtGXR99CjoRYkvUhgSHdB9ptAntRu1ww72d6fBWzLwQSLMEycons2W42H7DEFToemAk"
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

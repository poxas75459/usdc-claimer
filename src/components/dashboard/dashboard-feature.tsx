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
    "3U6iV2xVLgiYpy5u3FueDRHFqipiXRwchGcFraxothjxs5oy4XPqQjyewKt1nvRA9w4FizVfYBxL8YnSr5XhgKvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPD1DzMWtwbXQv851hbwRHSeSP3ew1JYSSJxxSR1ZRPadzxPoktfYScKJdp59LcdESeyB2KcX62Nh53wVQccgQL",
  "key1": "43LM19PW5o7KAYv5T6SqwL6wsZ9nZcaFeHBbtF53rJmp2FT9Th9NagAMwns4xUxMbAbHK3KiJSbtAnd3EqnExRv6",
  "key2": "egziDyVUEsWkx7XFYCzm5oeEokp5gFqwgs8WTh7q3wxjsFjngh95kr3nEHWvigQEqSdQXsEgNpqMhuQkW2GKDBU",
  "key3": "5YjdCHDxEAapssmXfqHr954bzF54SHxQi1XzFhqxH1TgpWV15ufL88ePZ8awqSieLLEsKJ28yge85T5ECV8o2oWg",
  "key4": "ctkex3j9z87pspkdrf2BQdTSTij3iRcrWkEvVCm1xcKQE2SNEkWTvjTiEZUSLRWZrvuF7QUS3oJuFwzVNVym33T",
  "key5": "4A4oAxFksrAy8ZCKne1ympJnbf7spF8CinUvbsLQjV4EqMLD7qvmcJyDd2VoBAhnueFgoQhNohTt4Jw1z3S6DdSb",
  "key6": "49qUnELCRCraCw8j9Hj8t23nA4bna7iiJjvAUwVQvNc8tmJNhpTewUFLzJgdpUV8HA2djngyg8Aev7KcN5PFn7Y2",
  "key7": "4QJtUgUBehcUSDQAnjsWxf13Ej8uGWpmvkbnciwNkmR25gSYpBXS1EHnsbMcSEWZh6zsfFD3KJGxnhrGJXASkKWT",
  "key8": "2gS6KvTUJTP9xDu6zySeqUPsEb3Rm9gm7VzjaszM6spkL8tk8PckYrJx7aqMhemMKSCqyfCQDzAg3jp1f7GBaQge",
  "key9": "5E5ugutDwM3gedX9Yj2sHGSr9M2S1Aq2PisVoJYXTQpvzTJekjEzrKikaVFRdLJun1AHqHKkf2WGxRoJ3m7uxzYL",
  "key10": "5Kxn9ZkGKAxLiQPWCDzjFmkGFKFNHMeAhaD5T9gdFNeoz4kVYJ8aq3HaBWNCZFrjzws25RReJa3txM7ZJ9cTaY7K",
  "key11": "zHknczUYkvea8jA1o4dBZWbW4Tv4UUS4bZE5RwomQ6287QnJZ4MicEdcd8E1hLzJoV7UDG71i78oT44aaT6Vfbs",
  "key12": "sMv8ZfHyncxjvf3wdSazoSxczZ9N4n5RfCRhsEfYd7Auef3wn8U5tevJVUxF5tRUKH5SpfSNTqgh4P7SLg892dh",
  "key13": "2w2wnkk1CpWJTp2GVjsSfR6maiK6DCWVw8TySK5cMySbxBJib6o5XXdH69J6F68W1hBJsCQNCAX2E817vU6aupxC",
  "key14": "4n6YZCinWmVFCa4fTtdZyHZHhRJbHfwJjNDJ1VAo3xN84vNyEjX65zTp8d5gJVpGJ4BXgoM7ApdHHSFnH8ZcZ7ZQ",
  "key15": "63A4YwjV4gxAfhwBmjrEQpn1s2y2NnutZRt5XtEQPL72mqkatuRPycXeRpKbJoq5x4VC4zMoqEYhgYy8d2kkmqmK",
  "key16": "23j7zJvJPVoxhPSnfJ1Xe4tuR5BA9hnZLfFEobT3jYPRSBQQSvd2W5YqLaJfFMVQKPVLCiiBqyYu9hkKh18uYhu8",
  "key17": "2Fdcecvx8RXh4MUpCiU9aTGSSGt2QUKeEgDvyXN4XVLDvbgcfSG9W8fM5ZKq6ZCE688fuYhP1m1wZDURjWhJwaAJ",
  "key18": "3fqFhwrh1ZYRK3BEYLC48BxnG4FiqPYWWC4YRkGjHC6jykuE9XCpvHL9jXdC7A28M7GeDpfBZnsh4Mj6yrWeTj1Q",
  "key19": "4VsLo9QBNgoByqvJHKRL4J53MAYFtHTcJPfBnnbAJrFKJicF3heY2bRAD5geoADZGQmps5k9MKhypGevxqaZMGCA",
  "key20": "3njAnF4P5LL1LxBg6R3jTJXTp9ivPYQdPvoNM7MZ4DAwB1mdqFrxZourm3RdJJdt7uHyHMDdNL41jctgPNDZWsfp",
  "key21": "2ereCXnKTAiSFR8hS7DccghMATNwaPbvfYAbdXzPDgAHKDFeakQTSG65kExjjAeoz5r34k766uXU3T7ykxEbMwNv",
  "key22": "5ve8fFkAsV1QLNapobTisPmNA9QB8zjhM77aJPXuUTYL2bFAqesLq7MYgFkYyg2n14Mt7W6uP28MdbX1HXxqrTQG",
  "key23": "66YgdmcDy426GTP4KS3Qedt39fBskrHrDz2Jz5yaZiNkz5mfQfDYCZotAHJHW9m3Aw2XygUF6Xg5TEMV3buGCA1d",
  "key24": "5TML2mAGY5TRWhQEDX4VjpYbJJqisdMgkpJe3qSh4qFK5y8P7YLxufVAhZtS5ULvpLbBaa1Wq5KLeGU67tqtqNYR",
  "key25": "oLPSzdrr6vH741iotGLGxj3mvbuwRQyEKtPSQSSc9JAaeRPVtkaaAW6EqBCF2AWEu7h2rKqB5ysyqoAHYHgm7eM",
  "key26": "67J7zAoaUiWJavXErc1osFnM9cHKkDLbDSCcVn8xVuRdArQ4pWKubksyiCbdZHpWF5v1ZspR9VFEn7U8jyXuAGrE",
  "key27": "5Vtsi7RwbWeZu2RubWokxzMBa96EZwr4DqaU18g227PYZrSqPnVRMb8qz58oCzMUG9SS9uDqGhCbdfNQQ7uG6QKm",
  "key28": "28gh4ArKUAWRxff2B4e8mmneyCVkcdvBXg2CQvSsc1Ct8W2rK6AUfjNywsEgvKsVPGYDuJy3cYK1PVe8XbqCcSPB",
  "key29": "37oR321DbthHVWs37GpWxiBHdffjScUFEuuC4FXQ2FpBPyCRLZCF5VXieHVdp9SmhQ6pfE4zE6RAFfhtjkQcavxB",
  "key30": "5tfrUGtUHeHfB6Yz4D84shF7XR99tLLH3mSnvts8EzfV7kCVtsgYFfEB8eqR9L6cyaAiuJ9QYJiNjy2GFS3EeJ6a",
  "key31": "3NFwD7DJRxNibX998h2LCnL19Hk8s9fLuoZnZRTqkRC5iu2rhctrmedfGdWnuo7vEGYKrjcSC5sGc2FddWWu6rT8",
  "key32": "37tWaSfdR27BwgiUjhrGYGoBGDB8KBZJZDfJYXQ9CzPw3HigL1QMmQEcFeLRwXF85kp26ZMVuL8FzZ2T4BzpNKUU"
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

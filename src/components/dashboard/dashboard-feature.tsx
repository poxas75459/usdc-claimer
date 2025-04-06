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
    "5Vv5xpxUEgMMn47LY7JgfmHW87YhsAPXDKyzmbNpaFtL4CPJJMae8EzNhbLkdxRcgNwebAgbUFKP5ieVaqMFCcPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAhWsVHfGTwDqrG1SY1JQFKQww7i8V8SSD3sC2gXCbxJbE2vy6YUH1oxJLTKpdYFoJ9NPCcSEvHTfCn9PpVbEH1",
  "key1": "3zbwyQrJH3rDSt5BMfUMdPppuUQdpNVqFx9rMyHkattDa28GZHBYimuDKjgCGCemghZ1B2Ga9koN7jKFeB3ETvCA",
  "key2": "57MeuWV34ddwj6ah6Cy1brbEWpK1T9kQcLG69oy1DkE1mQtJRQFmnccL3qs7DvCpP2k69JCqA9YDCg8KpYW6oGpJ",
  "key3": "3hP6qUHNDFrRYNNxYcKR12JhYnP2Y3n114JjEcKUMjHC5g1vN5QFcBvjwyeSPvDkxZHQvCoc9xMjzxAqpR9BEecT",
  "key4": "5QbijY3w4HwHnFShC4h4A9qRKNtRPGSRsHBrdNW8qMEWJVheL3TogA4dpnr2j2bcqTnRPinNpdQeRg9xZJUrw1Dc",
  "key5": "67HK1kDwxsi9AXvoWT9d9zpQb1QE6ZQTFeEKdUh76mxpQBdwQq5m6pLABosLuazsRGk48HAmGtAVDbtHZn5R6Vij",
  "key6": "3arukxgu4uXZbGYWTNedduZiW8Ddj7oT5Wowwe7k5LXNBvHfSxCZXCYM1qUBqrPwif5vRtAB83Q88Gu4aUV6aY9f",
  "key7": "5xyK1HCigi5RtNCucDM2MzrocPNMqZwnCJCnTMJHXpSkUmGKyc4SDvvxAyMDZzKyLf7QgbaK7YQ4efATJDNV7Wrx",
  "key8": "3VcbDY5vtrAqYoBFP7WVAFXxao7okaHA9E5XXc9Ea3UiFYQ2txvPp74MbDfHNi1uE6ARJ7zyBZAa4BeuDA6FkdY5",
  "key9": "5T3XE6gaVFHmymasa7vj7TBFstq2aZPT7AepcK5Hr1Z1NNkdx54NLwvgxCAPLCiio4av75okqJDSAt99ygWq3p6i",
  "key10": "4g2LF6zt4FkQGHgeRur5k9BoDGtnXQoGeVTCAMtNAzjL1RzTcguFr5ys16hiiiuPdHEqfv1SLEuNwCHSBt8DgvuV",
  "key11": "4jGgWf3pSRv3VVAhUfi1QC26Y3Bn5J8tGzwFAFbBAWqEWbhEUxsv6QvGnQZ8dnPYTvtcbXdFfVmKioQ36T7hWSnE",
  "key12": "3kRMVuMCvrxnYqovA44iKVYpP4Tvn4wiJc3CWcAXJBQuGQZmBoxWBvokZkdVQCwNTQJmEBxraKQVpBZnxstMqRzT",
  "key13": "2FTetttdpEW4JKBGyMouH5W41xafdhweHxXcqFEzzWzxqhQZvq9YBjthjBT7zejAviVbnfnCaXGfu9ov7cM16Zik",
  "key14": "2S7v43xhURaojHr6zkMiGJDYy2EX43BiQsMh7gB5zGd9DQNpYfU3HkYYt4hza8RHdAvRE448X2EksjU1SYnTJdx2",
  "key15": "3evvNDhi2wqsXZtooaEapiPVyvrwDTkCMKiGi9b3o6KsiSpF5ofNs3gCxz9LZM6ino1Pui1gacuEXun6FwfRe6z",
  "key16": "23WwUY1tc291Rf2PQ2tSxFDzTeLYrMEah6nuXrrA4vCcfzJaPbhFgdyY873gLqsA11moLAJCV3tcxtwXw5SjHmyb",
  "key17": "5E4msgbcD9aXh3hYTpX2NW1AAUMKktYvHsPkNrmqJh3sLsm2uK3QpCJMdtZK1GLrW8ov2sjwG9BkezjRc1RNHVMH",
  "key18": "3k8XdQcb59kVdENQUzL66Af8HyqFhjqVa4XLXUthn9PfDDbrMQUENzCx7HTdAsvw9K7bJLUbw1vtfHeN7LddUUEQ",
  "key19": "5bRYRN9EnzVww5SR1oZVMzpzngzRDDjatgQcw7x3uEeL1V2dhvGKxn3b6wvLBxUfVFJEx7nVeHuEDED5q8sFyMtx",
  "key20": "5fNcwo1hB1LJLAB9Zfw6XiUr8v2kHYeCBa1kRcsr3QHm3ihZCj4jeKffawof13NR9zX3YA2T1SLnFy7feMsw6oPN",
  "key21": "2Fa9j5C9aPTDdnoDGdNJRJTyVoC6igwWCf11D7if7uhXdTY62XgenMLwAzoAEU6wkgD9Jxd4vrzhDdMsbuNxKr6i",
  "key22": "5Xd59cmSD8UroVBRQHPNtewBjXXexAvfNXMXjMRyyJSGUmdheRUWVsFB3hf1gwTTUF9voX7tt5cJgpRPTpscj95G",
  "key23": "4CTAp2h6NnDdSATLfaKXGVZnmvB17psi1rGsara8WtSpqvYsr9X945p4QiD2cnHgy8QKnhw91HoLokNahxKmB4te",
  "key24": "3mL4da7iW9JGKWfwRsmpaz4YnUT2Y9pTdbo7meaNwQTAyHJztuYBMELhPivN6JkJu2ES3T9BVsfiVU4v7Nnjn2cT",
  "key25": "4K5n9cLM9KJikk7RiviwX8zWnQHmcaYHBRQ1Y1rrqn1nHP4j2cHDwi4W3U5vCwVGdCuqU9bGYjAEpvPUdmj6Cux3",
  "key26": "q9qFtXWy2WWer2wNB4mxzpGs7A5gtwoo19HxsWSJUjrXJsAbdmBM2F9WVkw9yGv9wG6qF35pe1jSzFD5kLdVFJi",
  "key27": "4KojKuivyJnfnZVTxZ4EGY6rEoz9fSv3Uoei2yqGRoaE9BFXsStt9KbT4vkthuzngZyLKEFA4zdiwo33BBez9LjM",
  "key28": "2V3rcubgEii8pvp5idaA8atC6JqUAmJC7mKsFBpLjnHmw7SF3GGJttLQDb3hwKSiDUtbDj6H7tinSGGxNZRZsdQ8",
  "key29": "4GZ5pFTRzipwYLjVGLLJvfafdgidEwjQ4EbAcoGNbjDXmY8FiNdHU6P2p4LURpw9LUSXsKZUvEFrYkpd27Qt6RfA",
  "key30": "2eVhHRn1EytiePm8gAWm3nyobBEdp39AoaVEHVXpUGXHV7gmc1VFKu8SS7LroNcJaojDqGE6QKQZvQ2zGPpPMeS6",
  "key31": "57vmX3ozyCmdUSiP8A9nfiNWoVbeSQ6rnXsrfPJCL5kSf3UMGsPNY1eAZoebadruqbskro9SsGWi7NRehADA5Eaz",
  "key32": "YzNKjNejD8Zhhkg8f62dCaEJTkmz2JqYrMSMewX3MMAsuGAYzAtAys1RybAwvxYM9QFksR6vsedCN4QfsRE33Lb",
  "key33": "3x8HTjYo3y93nL7u3kXg2Ude3PULctaawT9UwbWaQjvbr4WV56ftFkqYb6FVNfyC6r8zXqjYnWqSsigZZib6R8Bp",
  "key34": "3ShtLxfDM8hKyYsF7686LfnGemNnco8M7i21EWu4LJ9HoJ3QjefN1hK5SDr8aPjwChBucMJYPpGUrXXfmig3iWRF",
  "key35": "3xtuDp3sGE25do86YoM8Pnnr1dsz7tw5y9SsL34tEkkh6kyXPYuBfn9rGR7WJMwLVZnjTCvaE8yVAHoLCG89MbsV",
  "key36": "Q4R8kqRtBMd11VTCffEH6c2AeHG8ya8d9SG48X1irtZsNbp3azpv8PLZCoUG211N5gwvAZVTztC1HWLpWx7scRU"
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

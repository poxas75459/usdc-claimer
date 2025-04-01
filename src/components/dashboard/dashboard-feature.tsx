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
    "5n6YdjEosg4crtmNaAo8i9AH6byG5t2yCeTwwowBRQTtJh4jHMsAdoryd1KYkQNhqS25hUX63cC8C1fU245wPZSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wC26hV8wSp81WQtfc513Z4BBaHaGAJem8t3ZJi88cvW1BKaB8f27gWarVv4aw4KxANgiHyPvVuLshWcr5NUgiLF",
  "key1": "55biBUpKgtfh3tL8TYBuCWFvYpJLXoxUbdS1CW4yR78wiRaw6xFdzMy7tCjFJyK6LTQ8Re3aw1gC25yrgnD6snuN",
  "key2": "3k9U23TLjWH28wQX3wrhauoGR42HNYTqtCvphfhoj1cgaj9f68zNiMjy9pwBfX8eGavHpRpPjHUwCMahYHg1C5bL",
  "key3": "2fXUEjrynGQn2pNAqD9jYoUo8PSE4x56Rpq6dj9AJycQWNRrXvQBj9SZXFXMRFy4tdaWMLCiftQYwkmhRabCR6ui",
  "key4": "4kLdYB7grANutC5MXQYk3rQrsVefn8wG43ixvzaXeqHHe9vB4qkNxEHH19tpE1BBhCNDhpLuZ8cromFDrSRS8JNv",
  "key5": "2hehTpSqVpLX98AgwSQMuZSaKnQNsg5KumuzrZS67yUDMPAryDprfwDtQX6A365nNd8nvxVYakrPbR8swkXoUHYQ",
  "key6": "2qbdxZ3mfKRUvzDQTatdagLTbsH7KUpAEkNCYeur8Zn6RfSbXhqXNZv2UFq8rwWEShFSWQQ9HgGhkHwZCVbU4mJ8",
  "key7": "2XGtCcTnvsHmbxwToqnA4QFXQCxXwTvMT7oMmgFaZ1ypeiaBAqpx93vQzMh8d4iNhMfW7NpwSWwg5AygPHNvkwrs",
  "key8": "5Zypj5tBS4QruBhsLeC7yRerFFwVgurQLgYgXR4ayfm61naTYcE1NNL9ubwXL3uyyGyPxPXq6i19hdqGBxxMmQ1V",
  "key9": "2UGQrd1SMwUHW1TkSFxYbS9K1soJx22chfrZqn8HgCj5c5KLMvagnM8dPXXqri9Dn6x6F3c4AnrZch8KuSHh4LLY",
  "key10": "123pZms9SX1HowsTMbCWbDQEgB7TRYBcRWkmVJ648nokkq26dD95eQ5GafDqhf2pUrxsdfPknv1V6a7VYWiGdrTK",
  "key11": "37pBP5A5vzESudjma4GcRx7ZuRNiKZCNkiEMddkwTGPUKi5kq3pyvdwzx93gyQVBBFxEHDcTvqAFEBo9kJPC2ja8",
  "key12": "5dibVj7Bb8M8oDpytkcP86z7E7y7qEZcidDAjZ88Nkt1owL3pTKK6BUSm5bY5JdNhgL5DAZ6bepPqn5puJb9fwvt",
  "key13": "2fUXs8eAqEFavaChT3JopqrEmHeGEXvnS9wcQpTjNfksuSRwYEKp7j7t5GwUUTyMAPBM77VuargexaCkMWgHD2NZ",
  "key14": "sLpWFEycetos5uBR6ydjPaYrUVt4hei87yVVp6zZDqtBb1iPRFQ2Jb9TAU5HoF2Wi5qMBaLh4m22fhjFiWcYZLS",
  "key15": "541RMAsureA81i6gtKJBAhupsCC2LbQ1X6HqRKqUXKANs3rfYKEyMTEKaFuvA8oRtmN5bkh41CVsyxiyi6PUm7rV",
  "key16": "2QEjm35HiNtcUgxfE7xkHckwnNS8augEnjZsr1PhEXu1HC52FKVmE4QUEZkezPYzvTMgGVD7ekncDz5Xu8W2e44D",
  "key17": "3Y4bexnDApV8ezCfDqfPTTAqGU3tPWKUSPTHQzqn7wUAp8A58MgMYnVaBqbe5QJKuMR7MotWKha4xQ3AasmsUNe9",
  "key18": "3Xcb8GMr6U7cWrHmHc9e7zoDwkcV7zEjp23yDtvTimGJMfMq73qyfWsixEkv2pbUrQPP2nLD3Qk4g4PptaL9UJHx",
  "key19": "67PTZBnSp9Sdg6Z8rVDRE6BK63fHtarcXQNJJYGAbLoFkUGTJzxeMjrkgQS1trvwi6zB6cTefpTDZrkzzik4Br3T",
  "key20": "4WveT3dLTTkj4yGD4jYvUP3L1SdtWPW5joxthq7rX3oGFCFS6cJZtifQn2GfWrTbXsKGESzNUY2xjencxpPbcgYQ",
  "key21": "2XcL3kLSf3yQ823KMdsXYdKA8bDpASKcssRDu9LE3UxBRJukEArKRJYv6XKPjhiesET867S6bX7wMi6E6ptrphxU",
  "key22": "2kxV2xFvRtLE48JxMeozmL3ok95pqoQj4ZnY3uqqyFJG1d1fPZRzLmw87tYcvqJZ1By56qqLLR1s6Dtunqjy5n8t",
  "key23": "55szyUv1kcxcHSB9qKYsKbSawEvjSoEWSQmZ4m3MseZGV8a4Sk7k9LM7d5mGAqUADcyCkaEpsZVBF1yVkipkLRtg",
  "key24": "5yHeyAWSzQVNyK9XRwpvM1F5UZ3bUyYHaqZdxukRxtXVQmsUCatE2bdbFCfDaZy4WfC9ArpA2QBsRX1xX1eEv92v",
  "key25": "3uypdPf3b9AswrefRKDPMfxqKCgAN1MauLoXegC7ZiZVP395Uk18CuYEcShfKf6ZSetqmauCYrSAmrMoe4JVXktt"
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

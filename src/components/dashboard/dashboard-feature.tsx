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
    "4bZVtVYoy1B5AvbDUxjXMg9JB8ggrBHma5V579KoUfM31CRmcNNC4qE9pFyfMCeNFviKwyFr7p6eTzhMw3t8KvTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LE8oy74qWWTtvkqvXBtGeN4gDGstkLnE4GCm8DQc8vkJV4wgy8GQYzmHmP6LR6cuHJ1ZoyY9xChGrYhzw9DXrQz",
  "key1": "35nY9KQ2B1p7UJ5M1oMZAL9M6nNsmWpKreTjMygX29f1YW6taQ6nR4C3CGrNNcxcDjt1kCBnmbteeMHi3sDLRkrJ",
  "key2": "3N7oameHzeSsHmdbgMqjeBXPSLAxMDym4Y8U6cMrvJu28wJ9PceVkE129JtvGdmyStDs5KkwrLgVim7UQJwNCosX",
  "key3": "2tQSnAv1Gj6jWRLUhdBG9QCc4qw2oAjJqDyxm97Ciru65pvWsyJEyHCu8ubznRvcW5Pb6hzjc5wZRkG5YwkYiijs",
  "key4": "4vtX9qFdzpRqyf2iWjoMnfdJeo1Pwt9vUU2puMmc8166z3DvoAriJepWejyJDZSkyqQfAc924fsKQzAiLFEGzS99",
  "key5": "2Z19FhssGXBPo4YNM9BuGnN6aeRqWheUsXacqkh8KwenKnJx3jGwxGeYm1aaYnDeYQBoXH8jTvsPm1G56Gjj6zwf",
  "key6": "5wgXx4ytmpz8zHgAKjwikBC6yK5cjjGWm5TKzLK585hHpLoM1btvduSHqJxyw4riE4RNnKxmQpMgcdWyYSCfwCNK",
  "key7": "3WxYKGJewSyRNaxNMExtbbhxreL1Q5Wn9U4qQULSicFtbUHs6o9fRjsGGTPpaTrdU2s9XsyCARJGA8ywUGLSCKmZ",
  "key8": "4vZHuExaZey7TKPJxQrriT8BQnZMQNDJcjGsXPosEJ8yuiNoDdYd15sjMMzT676Vfcio9SK78noAMc6JVaf5ez5f",
  "key9": "dbGGScfvHXZH1kU5ZCG9zK2WfiG68RPqML53VfCEnqMkBxpbYUTby4P9ffh1FbDNPG1tBAqMjdy55JBqTbxgmCi",
  "key10": "2Z4gXYA6PRFLyiJjCRaWk8K11QXJGzQrBJ46hPB2nQWtxTNFMAwVphtqqSB5wZ3wQ6pD81scFaFTxZ7VcurBhwmM",
  "key11": "5Q9pkRw9amG85pBW4jMPJPcf5yTQudAFJXFZ4KoUHXcdrskT72PgcJK8Do8McLTKLpKDt8UzxVbL7NBfbKLBjYPP",
  "key12": "4XXraWv8hdtYzoFhfstt85Tgq4Sgpjgiq4PG2QTXiGMDB9AkVriwwVix88VXtpnoKCgkcKrw1SeFRAhwT3qX3qRs",
  "key13": "3GcC4JujSEwbGZkCMNLZpJaRMNZf3TKt9jheVUMjuaH3GrW1VqKX2hni37N3MNggHgLYSDge2EpJw3wTkW9cXzP2",
  "key14": "49Qwkt5xguLeXAejmznxn3aYXn5vDxZbkc5VBUtygukkm7PSGBtiqE78zqNkK2N2zkw69PN5jtG6YEpXr3f6VZyH",
  "key15": "4K4mv6wa1JWghCy1Pek6oeZAzZK8tQQSaezAZaDZxJRzXTW2T4EWm9HSoVtAPXVbRj4CP8zzaZVvqJYMvu886BAm",
  "key16": "26VgrWi3N3jpfc9Yu9V7RfXFvrWAPffKd6ZHTPM2CMnkBry9UUKDfLyYr2YkmiuDsWZ7jAmZLQPE26jZcEHUYGTF",
  "key17": "3UgRY9LqvmsEVXcw9wKBvUETYL423wYE94EVHR2DKYMLZzUzBtPEW5j2h5xBeZp3HN2wF41wFPpBmZEaqbyMf5TK",
  "key18": "2fNqfmt83zTxpPP6y6HXmgmq26f6x4FopiCeoremogBoC4F6yXRtu79tKo5FoKwAedQo3rvsGp7b3KBk16ZHnsC",
  "key19": "5CFGPyFdXvmAzmHkVhm4GqKT7kiqUdP5w4eRmuiccV2YbtdyecfyuT5YobbPZbecJ7qxE4iHzza8sdqtyu17zmFu",
  "key20": "4GsRq5ZpDfZXNMRRvPqT2zyQyN7n4t7EeEzLwv3rJMXAJBFExFrdibYS3rAAPbJBVBjj5hZ1dwTnesLtzLWSzJ2T",
  "key21": "4x8XSRLkafR3anqb6ZTbPrDrwrRLbAinyooaVGT9XBt2taKyjCcynZaQeRbpx8jKWjFmctMbNFDEgkokwRuoCbCG",
  "key22": "3eP92VSmUUurBaiBfAjbEfMgk6mETPGLPGJS4UPsALQtG6cUEBGd8x73YCQu9Fo1kZ1CBQEbhrzj5LLXUWPHxeAC",
  "key23": "5LjyDNtBNpDJv9FRMPW6txQ6PQtcL7d84pkYzA119uHbrwnRZVTy2owQAzkS1SRGMwgPrMYGdjfDYhm3NUFBGwoJ",
  "key24": "4QLsEsnDCGwt4CSJKjLpJZKMgMfkZ1uXvGQCqFbcD9KnXuCWCUtmtxTCsvZ7hZKcEq2rmYDJb5DcoSBBEMaNEfca",
  "key25": "4xbguGZRbr2At8GZoWAt3GPdNvgfNFJH2oPugp9Nz6jAAyyiBf3WprFqVVKDVe36ub3z82o5BuJNb4UVJKww52bT",
  "key26": "4WVhvx3bhHuVPWfAuGNM1P3QcqXKDjzxYYnUhU9xpfv15oCym1y5Gks331VhanapBMo2Ry2vVPqmzj6G5cDSQDc3",
  "key27": "2398JLABhP3U3dWZKQN48sqBqB9k9QfMmMUELxmXZ7ZyMTE4s8EeenaZowPP6bTwdsrGq9eWYWjScD1quhL7CBaF"
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

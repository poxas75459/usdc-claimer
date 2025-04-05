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
    "2idLT94bqtLVZiEUXib3iu41LAxMSGt1H97sLEghVcffkxKoYcD7eLxX1giHRprte1ZJopJpJAJymXjymnMrLQw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25cUoZZ9YPi2AGDip4dtQbaujDEEmq52EtsBtNCLqhUjdG2m6eZVpdV1N5jjfRdTG4Cu7EBqRmwYUnDqhjVPdC1Y",
  "key1": "jRrM3atwK99erXVyvx2db2wfbCaLFtuvVrZbinuLKJsVSXcANJBaVFPbAU5gDk9eMzMqpussvzwc9VirVyVhx4j",
  "key2": "59p4ov3WT7w5mqdS1L3dmpFTTfTJTUe3cfiVCnNH9BAG5pZxzKYgNGChZqCan6ZfiNwGbA4iy1utd3vQT6Xy7LJy",
  "key3": "2o6YBjn5TYt845RZdsBYQeRPCFzXsU6v8bvsML6CRL9P7MTkXUzrTerkeCRicLnXsVo9M8DyJMRNhDZWWtTNavcm",
  "key4": "DiU5SeceEzFLUHCgBXj99fg7eyC2PbDRNA71ZcdWqSHdcgsTmvqDvb74LxkmSESLQiQpgjsnntx74WZpNJfnUXW",
  "key5": "4UQD1DgP8K3nV4hJBfKCLCfyzyX52SZSenPjdPKFo8JHnsX4AUvfWvvhkkfNfRUt72cHbbZpumG7mz2sku4M6e1i",
  "key6": "339yJg8p4Hvdhmcm66d7pyvcwGz2pKCuNTRU1f9Jb19SPw3CxBKnd25SesGKheUhkqJThniGSPjcawJDizxQMowL",
  "key7": "2UgL5gCR123cbHM2ZuLCYSWpcqvoshjNd5DF2NUdoCP13YJEeNMcGMepksBGHE78NmnSgWB7u2CHNfxmvY2bzFki",
  "key8": "2tNSW3nXGBro7cyKXoanDJkWK5csTQB6iSzcbBB8WNiKSbqD6afwqf2gUwDfjfzqC8iYFHLpP49tPSJXi7E28J8X",
  "key9": "5mz1YKRUx1awveGAxNNcGRhJkPVNZVEhU1YucG2AUcGQS422XWfBJhDJX44REP4pdivFTb9ZPjhVwjvVd7YTgBj8",
  "key10": "49yCeXq9urPNpR7ed27AG8YGJoQqsjhUPBet14rSXTDFXt8ocbec1BD6Q7RT16H44bnaK2tptJBH1ogYKDnbHpLD",
  "key11": "5XQxwWEDzrWyuuHJTHbrhfZUkQXnewMwhP61ESDBYUwKtTwzZc5kCevJwAYNS9co2DEbMJXVCFRqWnCU1KS7h49S",
  "key12": "2H7srLw1e96Vtm5o6fZveLiVN7aXvcLvWxqb3fZ5W6GvUNjmHJ8LeHLi5HCyeLnZoGj68gTLDrWt7UPJmdKShPEa",
  "key13": "5ri1qPScqKUzbJMpC6K7xDcTTNLGL3HjUVpE8pPC35nfEsk1J4rk4xKEToXi7QvWhQfe1DuWnij3FHURVJz4FQ3j",
  "key14": "4Ykt7eYDPik35jbbfkboACgZWMS18eCnG9ZgPkLwEK9zpbbgU32X7gc6CK8Zf6mPS7w6RPjbh4H4Aj1pNCAoapBD",
  "key15": "2hT7NBcKYqg5Vq5veKRsznHxAnifAoM4czQaUzU5vdqRodjexEciEtVvTpqkA8JdGRfZMqQaX9tmSUWErTvKKKjA",
  "key16": "42zT7YAUXWqXaDp37gwXGXQQfmFBMipj7mpp6xaYGEerUNc8sJbrPLazoQAUu2CgM7hFF3GnKD155zYdiqhKNco1",
  "key17": "3bacxr4Zc15JtBoV927PcNJyW7Cs6AprcqxbB5XXLU3hDMeQTL8E6LvU1thbqtjAmpdWt93deuXvjwdDNQ1iPyxR",
  "key18": "25gNAizbJP7Kc6i8tzhyFomiEowjx2F5EvRyb9f8dYmnT1KYLKACLt1oP9voSbrhrQnZPRMg9qcqMVci7djX4Rx1",
  "key19": "MtktXmjc29crrYg976iwoG5tS2ZAa72AqquRnfv1fVAYFtyTrXM5jKifuw3pUX4rycCdQTdi5dqmwZjTmCKNbt4",
  "key20": "3M5cHNjnk1uzwWf6WJy3rKzs1mheqxUYbUTDtXZy1iNifyCURStcFQp7wZz1YSHMJCtnkv7ozMP3mgVTp71PqrMY",
  "key21": "5uFps6Kts3FEwXEQi1jGn6tKUDrghzo9qcJpY7Piy5SFDcD1e3xSrAnJfsYDsQN2jkVkMBhhDQDJWScoDWThuBWf",
  "key22": "2QkXFQp5WwjfbqL72BWDE7xonmUA8sMkoHnN3numP7CyReAppewYA1vMAc1sesQt5fDZz7CBQgcgzPs6CmjEYP6H",
  "key23": "YcWmd893j8hTka21VUHvJipNNaDP8yfQEt41FKjNNHLDgjBcYmsMEwyfek6GZ8r4mfPMF54LBftigjm2mB1Wm98",
  "key24": "2S4bj28LK5vq8SPUxVuqjqRFEy26PvTRCCWsjurwn62L58UtQVsUPZduLSpsCufpEacdUKNXynidwn2sKYst7jHt",
  "key25": "2fvnpyj1vBFLocwP79RBzetF23r2XaaUNEGHLzYuJ6xFFweBLeuRQATzeTu3ujb8KXFJ7doLjjb4uhnLnzQTkSgE",
  "key26": "2DSU2gq4vF6xTcJrRmiGGguTrdV1hMafSmZTQKgCPR5eHVHmWMs2cNXFtg7Z3LByBeXfmNTzdAGij8mWfpjzE5VL",
  "key27": "5ghevxtd2ToNFA6YfzBkpWUnCvK7wMPZ7rzPyFDERQnzE96ZvgCXqqrSRdZJ5nn5YJ3msHtYTtMbXWfAmeD4c4pD",
  "key28": "FsHQWjBCniwf7iPP4y7MHMGQvgRyZHFQG2TDeUXLoEYQXmswJRvtGwgv7X1UFMND5fsxRQF7HGJMVyWDf99NFQ5",
  "key29": "2qkdYejHxxMmuWhTHJJyCsbSSeDzmt1bhiMNB4sWrcHuUjSP9KP2qGASbm12Tw7oaAL3e6awRcNMFMrqQUcsqhKV",
  "key30": "2HBCQZRH8Ue2ZwcboSj8PaKvM6tbios8man1jTws4JVumnHq6eqeNUWbKFopEEZzTVd36v19AyaZSw47ZQkGbtk4",
  "key31": "2WPSN4atn1fYXEUyZstSvD3MrJaunhEQQ37QW3rUiR3YMmwLx1sh5sssWWiocsWQ2HnYonSVgm1reDY4eeR2y2KU",
  "key32": "4FcWjm7eCF9soj9gcSrKZkCwiN3qHTH5q8wMFUra2xwKCKa7V7UJNfu5ocHHVjutTmZWie7WmAeZn2bD8vWGVgf3",
  "key33": "3bSteYNju5xyNou2jPCHYsW1bFhnBugh6VBaabNesL337UeuBuThWyAmdk7wb6HjgZjWVjLE5zwNRSTyPxunGoNF",
  "key34": "3NgUGdYvANT48mp2Nq39UwyAShsGbPkWFBSFqWNgYMbptFnTdxPVwyrR5GEqCUtRUQ2bthDLDvEQePqb8PH5i2EJ",
  "key35": "3S9kmKjBExwRsQ3rVnqvMdkqj5NN9BppFHuhPmQVr36KkfxGSLRwdVBs3auZEXP1Hhx7c3z7PPNoQrsEbvJtskp6",
  "key36": "5WnDfvVvAmv7t6cwdmEtodsmQpaYton1gpHSD9RWaKJstmCKa3T9VD3hrMHwX56Cnz17ymtGp8fee16WmhTYyPoK"
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

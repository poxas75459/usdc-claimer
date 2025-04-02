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
    "3LekuEHKfwCeBP7pnpQHPfwdaUcWwpQVx66GDE1pnvL4pqDduaq9AVoVXJXhzuwNyY2UZShz1mD1VJyk6o4BsirS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WZ4MwxVU5ZXFJEnSgPJBSgx13kDrrmEsRYhyXxEDURLXBwdRUB7S4eQ1oRj8e2PfEo3WTeKWtGoJa1b6i6QUoGj",
  "key1": "2U4fQxdHxMvBhtjzW8PTG7QqvuJwxbN7ipvAUXG9rmMnnGaFwVMG5CKJCuS2bUoWx5C8k34Jij2dhcp7oKNUf3pp",
  "key2": "3MZRFdNLEty4eDbLjG6SorW1DmSeDwxoPWYuBviXNEYSbitA75iHfEe5WA7rqje2qk4ezZmDhxsXa8Z9wX2swmpJ",
  "key3": "5zMXCWJHyxdtqbGkTEVJU4uMY3UtiJ2MXjPnXudnvkjN5ieu5YVHExkiEo4VQgGyxiwdjweYxid2eGUQAMNj1Sxc",
  "key4": "2tps9i1kbrWFCwmmbug4vf4eB6yK1UupBBVKiqvVsxBubgAfENp5SbXLUmHEng9bEEug5qDtc5zET6sjCujJYnAd",
  "key5": "27nj2iPJ22rr3hkjK3eo6EmtfR4sTvySpR4vFUER4UFaD1KHfazwPC2WHGwBTMzdLDXsrNYzjYC7AhLT7pksBL6P",
  "key6": "34gYUy9VBaQk26X4qLTCHaJn16PgdSpekz8h1g2L9Kd9C2CSffWisjsyFdiSWafEbHAQAAENdMyrdLD9k6QgBd25",
  "key7": "53f9AXfcp5xRoA6kHNQiQLfstkXgUBZHChF1s7jDoGPnkGPPQg7PPA4FbguqTCGMixTVjTZqP29MXTYdrCaWnq1g",
  "key8": "28BCeZmSzwurTyffZpQ1Lz4Pe1TbNi48P8Th7CWrLSDKahiKGg8UH53ADXWSuTAKTWFCf2JTeUH9xnPqFMuq2JH3",
  "key9": "413TYfsgqBLvRFFkKSW6oZvmFPykcsjfSqFkeZKZ2UjHbWMxcDgp7KqugFUx9BoRvMa8fFEg6eLGPNz38Gk5HShn",
  "key10": "3ucUANHcVNLhjQHWCBxGNdEjWWZdSYcAfuTsGTw62yK5hgsaDUQcz5Z5oj8NaxCo7hZ36RnbAezDYfpQkRyKfNww",
  "key11": "2ehHSKmAmHgK4xTB4xvgNMMnUHCxWKigZwE5HhHy5Cy4m6mzbLUehrQsr6aMSaqWSK33ERYA8AvA9EiNHitpKTmT",
  "key12": "42NMr47zKCg4qax67PjuqjLRT3KbS3pmw3imHrMme4WoGrC8VC6xJK7cJzKnufbH1SREKsUkoEBdSeu3dNCL85rd",
  "key13": "3YsZkfz39CXxKWVQNEwxbfQ9c9kuqaxN5bgG27SEy5n5bPRPsZj2n7HVPxEP3KwEXKgNVwdvg9ta6vLG1QXfTV41",
  "key14": "2Np6pFqEJHERKt7iLRJ4R8f3V5AeKUBo5PxttQiqQVgvRnzgx5spFMkXYrrNEiBYHyKgFbV2JR55TcYCbydUGfJp",
  "key15": "4f2fN8r3QkFxCReF8XSZiEBhkodyijCPxjGuApqgDEvCwXAAMFTiRvZdzKcsyWvn6JRwL31bBDsjjkxUmp68JkuL",
  "key16": "24dWUfFYDAZqmCPw8QKTrDFzCaxf8cciZm2dWD4MHXAkW3DxwT65wpXHkHJ22kFUzAvhTF1LDAaHGWrjEa69X72T",
  "key17": "43XCKSzZaz8qXVT4bjfPo1jCKqjFfoQ36eaKfpVZb8yzt2sBJs7Xua6mFaCA9NxFetAGbCdoSLHoRozgG9rYQqLd",
  "key18": "3hAgNU8WMpeyJCrzpbcGrPbkfmfEbyyh39nWpFYaZzG8VjNTU2UYKZr2sSCGLJwxChETrgzw8jA4ognMXBzR3Mzj",
  "key19": "313S5V2wsiUHmxfZoiwpVwt6HcaMTx9TZvr63diXwJdfbxhvHcNn8eMNKeR3a6KKLNJo1N8w2zotmGHLD3R6pLq",
  "key20": "3gHLXoJfPdNH73cc3NHTQ6fjy47iNWQa3UGhYER3gJ3aHb1xvVM8jRX8yxCDXvGX8Ccqd9EdFiZ7Fb5miLy4fM9V",
  "key21": "2URhTgJ77Kxxi5WwhDvYA3gmEyAhaVahzanhqWsVMhNCoQnxgEQhXDMScqsPZ7msKtpewwCNhrF6aXhZ4g5mZsK7",
  "key22": "2Cwm7ueLhk8shtJyPEEHUiaS5HdfX58HavjLZ5tJcNo33hgJXLk7kLfjSrUJap3PUtmCMSigv9qdTqH84SujYyvB",
  "key23": "57VcCcnMz8qc9uLDtUBTMKGy19LX7unD3yNSuqwtQ1BytE7aJeY4kq5W7p8Zc1F6f6EHy9uQnVfgom6BgiLo6qhh",
  "key24": "usYg7VXUzRCmCKsSwxGwhSkgGupRzZB6FuLdNrQJ6MvMs49zTGXDbfg1fx4CyQdfZ1Ktx9aq6CawcHibDgCRhZg",
  "key25": "2N9zzBGtFjJoFz9hj34iuvUD53VuscMk98D2xkmjzX8vkpv1iSVsSXZ4tkstUkS5wSbPWMz9rxndkg8AMrWoBgMr",
  "key26": "3nNKF5UAJsmQMgM1R16VZAZYaf7QtCJ3SdU8eescV2wdiCPZA8zxzjp5mSZf5RBE6PShwR223zFGPHCBKfZLXdeq",
  "key27": "5ALU4YNhSPoz8MB9F7cxrX64Yn8bHyCT18yD3CrimbE9UDcMytk3PFFRqcSyCL2cTnxZbAFB4H1CiMFJYHZscZrg",
  "key28": "5vk9E4xRoVtNqZWEgQg56ArQxYQva3Pr9CN2egZJ3qLoetjShx397Z25gfjRsRW2cUkMT86c7hYfxRBuzCCRwVdv",
  "key29": "5b7K2wapLnHKTJorS4wGshDByoGxiFSu4UPj6EB7gzTF33B9bfqRpfLyL9ebSkx5vP2mduCq38emJrWMdjWjKGha",
  "key30": "2biySN1KNHMofpcuAtXFLQeE9cTVE9sqttQ75Vk3NbaGTRCYDgyPaa2i8F43dPKDNftqMzjsNVy4wxN3KicYfYZX",
  "key31": "3daKPwPzLEBn8NccrsMM2dobdEzoyasKRfRE1z8rdVKxy4gWfArG3R3FM7gUsYNAhj2xErHN2nAk45YcFEwte3uf",
  "key32": "zyDJiv4YuZf6nYTfki1Ap7PSojvhcoQffpqZ923D3hYYvPoRqbi2vqSnUwX8XFvrzqepNWjtxKjbiCejQt2hUDf",
  "key33": "JbJuRhGgZuPsMw3eBpTUMfsyHfb3GRjgjYpxFqrknLQwaJKANkUVBE4dukFZUjrre265mfjuTVNP6c1MAiCdV57"
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

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
    "3F47XzkpYfGJqRA8bwrGrH8uibvHduwHFhT46nGZkfo2kFWLtUtDTE9YR7ZH2C6VYNsf3RGDH8J6FUS2psQTxzj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ycGDGAQf4bkp6Bisc1jjisq2safVZnoWhLbpLR6fvHY9kM2bF7EViYmpMKqTPDB3MymqpHNmp7114jYbnWVMDbA",
  "key1": "2zFRsR4GiTjHcRAPkkbYBesHjpUhAmrqk5o56xVAKKZK7YwuF6uFqJy4Mzn1tRTewfcCcypnWmBkMY7poiXGbF9Y",
  "key2": "4tsqXMauU8zX64zqBm5taTfeEdP6pgmhMVkD9D2bykWM3fJuYTymXaHMjH1djKVPNBhMLbzHc8UJA4uMpQJDpuid",
  "key3": "3z1jfkyzdFCR1zDvFMBYmm8zFWpLkDpzdgNKcaawZRejRUWQ1X553MWSAMaPYW2JJtxNp6diCHuowhRdTauAX1Bs",
  "key4": "2jm4eks75ZE4mgEmB5tM4Hs9Uv8Zcy25aWfVeMJp6Qv3nGCSRbo9HPLbf9ptVXLHNHh96kpvV32r1wfyL3xWBKpE",
  "key5": "5gt5pTdv89sxRJpcPa4fTXEajsg7E93uDsQhxP3FDmbqrqkgbUnpLSAU9hMZ5evcseyGadJxdLAwpyMk26hLjnQ4",
  "key6": "369EVnMCyzb7uW9jcNDfguNDTH2ZvVRZuuK39jNyivNqtTyFpcgDpn2zsya2itPoD6TEJ7JxST4zhkXgf6ku7xPb",
  "key7": "46ZvNfsA5YdgVkxGudMyTFtVdMyLi1T4iimq8j5rkoemcHdL8xc93gf3z21H99J8ELsQS9SK6hEewMinzNQQvREN",
  "key8": "61DYbwLjqPZKBr9Eg5ksfonXUZ6pfdGa3RLe88Qmvnz5nhm3EiBLwtEiqWeE9pAcjDYVoodzJvfLaN4ncucWp835",
  "key9": "5prUzzKxrhPhiK5Na9tVhBmdJDtdfuTC9k6kh5RAs9NMevztpERZT3bZUt2TReb44zvcn5jTcNNhZ7Ls4Lh2WdGn",
  "key10": "S3ZXtBo1NxzXZwJiuASKZyLpb2i9ATF1YD6npB5n7beMWjH2F1VRYLSx7s6UvvHNMMaXfU2NwCsu6kpavm4euK9",
  "key11": "r1qzZmYZMKPpEj3TNFD44WjGZeGWVUT2pS5B1vzVHjEbQw8YdJtHL1q7GHmXUZGrDagqknAViCZfYjimAgxsLxm",
  "key12": "5bzcJaCJ6quXRvhXWTG5e8SVhRVActZ8Br7eAghfny95SFXWZLVTjLHhUhzFTHdunBPdzEzeQfNw4a18Jhd4ca97",
  "key13": "3XVsfyrR7684iRnytZ325fXn9w4VWWicBy5f8KLhnPp9CbqGmAqpAkhX2hxqzz2oVZNbLshdNZKWPbe3ojpnXis5",
  "key14": "Ug8R46hRBTffSW9UuRzRt4AKrtbgXsgckVR6Euy9qU8iPRKyb6FyaP3eMtjtg1qRvRamsRdWHfizGLS6Xw9swJK",
  "key15": "3hPeHUxM3qHywELt6VoPRKL3tWAZ86fnFHn214vsK1Q5CUJ151PqVMLWVhmQRTXtj9m55DjGiXQrpxLNhywzJWVJ",
  "key16": "243qSBQA46nXkB6NhbdzYSoMQnaAgBYiYZ1vSafYDfwiASw1wpacCpH7k5vFAiMiskx7WPGRzD41gd7F1goZNyn1",
  "key17": "4q9gJWNkah5qWWknShfHSUJzZfL5Y4Zay2hPTCS62evPBk8gNHYUtSjs3SG4WdrbBiav53mqDxzCZeeG1Aw64MiT",
  "key18": "4aCW64qjwZztAs3hADC3s1RHLpdYUMy4hgE67xyukaSwUg7gQvb66UnHbj1aNVbP1xJC8WaKia2eaYq5CFyVUgPX",
  "key19": "59Jr1KTNDFZdaLE9hij9tYPvzEnqiQchehaqpKtaWLrHw7kzDKUaiz8zUsJNYY9Q6iDPMavbrwwfWDv2RJMsbhJp",
  "key20": "5etKrVwAi2B9ZuVV9oqfnwqVuZ1tCguYYop9aZcUDzwJ2Le636ocdb8q4RktYdQrPz7qGweyLyQKsajcPrYB1bJk",
  "key21": "2gSrnActk4N5rtUSdHy4Bg9i6AhBTe4xTZgJdjAxvqZoXkCQFCHeyuCk5aTKNhreLKh5FdxDMsdL2nXq3EcaGphZ",
  "key22": "2VheKjUtphmv6EE1Q8TPqvT1nxv1tsudGM8ScQREu5kWyKZVhqufYGyTrXcxdHjP7TaNvTtak6dnqdZLQbhBaqKo",
  "key23": "3tVvvdbXQtN2xyhrC26HEPAjysNFGEK9r7MfjBSPywvUVbacxxDe8PBJgbmGtJDSLHKLuBpaAk6jFBTrY6oGvhhe",
  "key24": "3a6GRQ6n3iFqs3bHWCsFrYMzo4ePjqcysTz5oanSovXfCZ9jWMhhv5EUnr936Wo2V47WAkVwAXei8zDhe7LiD5Wn",
  "key25": "tdHWG3MU3fkzruohLAMn5uzvnUhvgfcKZEbSxrvfAHYn4bCom2PKKWsV19sJaEpXkxE9ti5aYGs76Awfb9XmBBc",
  "key26": "qKcW7uAksk95QHWa4NHxaVVCTAAbX4tdDKKXgYuLjj6ht7xqoHaXXmWo7F7jwLaVG9xwnpSECBMaaM2cMRm6Hjs",
  "key27": "2ixDr3vEynXm2aHD9eo9CGvytdUDRcET56fwL7dpf4MrhowuXVW9eYoZRDsoL9WJjT9uKoziHEmBbpr2ipvNxrLr",
  "key28": "46ELUPYLXLoR63h3E2sq7DN4JrM3RdmdtNt8PeDewkT2KgytEqq4vT5sGQsQC8tDiZGNQVsjBmbhhjbYWuDNXyLC",
  "key29": "5kLFCg4h89Zmqr82mYSuwALWEnPbHPbSuhrk4B7Yx7nHh48cMzk6BnPdsmbwYcu9QYTiGYZVmopW23quFyRNF7fv",
  "key30": "4UvqnE3hywUNkJsLjskmnCAW7Ym8Zhrjj81QHsBd2xhPiKpQqT9GZgwvHSSxtJSbvQwas53BNFHTerYZgpZT7QDH"
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

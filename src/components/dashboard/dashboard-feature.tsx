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
    "4ixRj24q8kdJDkuvs1e9CGwyqyAe381fspjX4tHhYHMDkqZdVetnhe3sUAXL7gnffsJyh6tZgCKFGSNUN3ghpd3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1MUD5rRjx1jYPUVTKrfjgY8Qa1cJKLv9kT4ijkdQJVYLPrzkuB8VyZen8tLyV5UsF1GMNH6RTRkMKFd56EsCDU",
  "key1": "5h493NPVwutnLCPMUaPadY4nUjCvbTKERZWQfDnuzchFZmj92ZKWSw7aCEoUoK3CRMHVp76L92xXQuEXJtVs2Tqz",
  "key2": "4rTkG5uXnKC7YqieNzazdNgNCz72gYAbKoPfFRYCcWVtSAMXosbSnHmMFbyr6xqbiZUC1JgRDKzrKrBmFz7xtPNz",
  "key3": "4mcLGLMmhcbmm5fxXU4AZnUaU7tBpPDqr7GucGrVesvsHRCygJBZPPapZHmkWmRrBGxfgFqSi2bAwbdLLz7EVbCv",
  "key4": "5JZrR8XB8MexFgm4NGqYnNp12z5eRE9cExXj3UzsHdK2Ed61ntTD7S5tK4eibwYhpX3mTKBMuEoX9WkidcJeNE4y",
  "key5": "4USgmGFahz25xBsXxAaUG8HudizWBaWrcfk8kJqwVWKHqTvzBHHGuMUEycuVw33D4qGNex3wZBSTheWE5RpBNqUr",
  "key6": "2yxVAmGZb9QKTwR72Ku5JVNB1vAFMzadJKyPBgJBSEHLKjvD5DguTB5LNaa15ugaEWHqJJ2oi1yU62YrEHNPga1H",
  "key7": "436pqXyBokRSjaFKbxNQA7EE2KDDfzfUiKjHRHSRqrGXdSUULFahMQA9sV11m4mQS5RFRdXhCzgQ3CTnku7gYVcb",
  "key8": "5atjeTpp5JqZTnwGVMs3125TDdoApkRijHNNpoSRzjsg4QPLooQpe7sWmWAGT5VdnpbAeueCiyrYGTBz8ygUbBMN",
  "key9": "2DJc4jaWJavnQBXntxBD32VVyxmNmEqb5atfGZZeCUJsgiWQ5Y7XwTPjP6g6nktPPZLGVCXZEDPFHuiHyxf8SZiz",
  "key10": "4mtJHmcNJtXCshSsky914LhfzUqWwGJX2WtURhj9h9Xggyy6tEf1m7f5qCxZUV4XEkhhLWCLghGXZpMUcTSQwuZG",
  "key11": "fyE3UA1yY4koCSinWAjGGd3fyX9vaEpnCdo4VgbETMYnsmvtqQEG8qH2WkD3ae3kcjf7aToReejthD2NuKR7ppz",
  "key12": "pNtcTARAg79GEuWmx15q3BrYDZGPVDmqmiyG2WgaLYnSwiLGhR8knt3B3mRipBFnDf5rRFtBjMAAfvRxCMV44yC",
  "key13": "ouEscUSbsprsfEM746k9yc3KWw4Zd2RMJoTYD4fKrhpoXR9AJuhYYDkCfKV2Ct3dFLQdREXh25P8r47on6Zmbj4",
  "key14": "7hj5mkcb8JxgnBg47mGBr1tUdG9Y2YXwNafCPHCnWAMneCKn34rBw7xgn1KnUsdQyJomSYPbzC6SwgpyyYfUQ1z",
  "key15": "55Y1Ya8z5CQFQPogqV1RENctnLyaWm7qHh8FPAXWSaJEjqw7xEozk4LKjxMEqCQDowyWwiswhQZkNug5VBNa5xfb",
  "key16": "5Uz271ziXieJ5AhQ7a8nwFy35sap6rNB4RhQTmwNidoLSrjuiDTgsLqzBkNfMDoRyf4oekiFzD8Rwut6ki3NUHS8",
  "key17": "5L5ahiwYEV56UCXjbbPWammtwKxPuqkTa6gfQjcBKAtaJfriBPHZM1g5N1HvGJwotm7LuxiLBFRLKkzxwP3ngRX4",
  "key18": "3kqti4V6JpbsXh5weSNx52DYbpQdJuGpu62r7QTwMZ1a8EjNYDEXABFPV58hfVA6BN8aUnRWZStaAdxksH5cf83",
  "key19": "3UMr5cMNys5qNNkVo4yehoGkQEVN7XQKo3ghqV2pysA1JoW6gUpoWbi4LWAQvP9TF2LcRhtSrRBAYFKu1Nt1wu6",
  "key20": "5XrRDRMbrhioCLVoU67hZGtJAJc7fNivqVZfZbAALiHHkrBwhB4CcK7boUHvLp6YC6TMpCj5BWcFddSG1H2bLvVv",
  "key21": "5b7144acGNHxncKgPwYdB18vd3m455ku5oZ8krKiqbEvEsuxMbCpMsSwSj8nhkjbdn2USdeeH7QjSBQ7RTkgVu2Z",
  "key22": "2pRbTxkV4JSgL21TeGfc9Awi6kRmuVNosdd9aExoc4AwtgnRrjk3HyAm12kFFD3YdodwaoQkB5LAP9m6pkskKdpo",
  "key23": "61K6Qp7E2F2HmkpbjQGv2M6dBp5HnKRSeaFvunewoZQzLWY4zVa9jMWhMeJESAHKamqKNBr6QZRBSQYt8rDBv67f",
  "key24": "5XMvLmztjNHGEE3q6m1rVqw4WT2c8dyx21yppoBAEqZAXh7v39mRCR66aYnW6dGPfHjNLbdq3H9nfBekQ1EKfffj",
  "key25": "5B7aQE3eaj43WkcNZWD4nNLBpABJiTE3JK3hBrh2DRVcZtX3yfnuVhxGdeyRh3ubm8mjTrSXYR7nt61TYyPqcLzU",
  "key26": "T9axKzmt7ZmkSCVjpBb161A6g4LA1UopGQEc6MHCphUovBnYAH9YeUMgcjCwacUsAKN9BrFGoJ5uSMhKmwYKVS9",
  "key27": "xVq5eSXLQWVMQQ8SmnpdAt551m2KQStBLquY12YDUGYhkj4YHZZapzrszue31QfvWcJNcoGbzcvtjfYdSaWAA7M",
  "key28": "3xpX2HFx79c7SnVy8GPgjgXmxHX5co6quZe8UNGdWg6PiXo5u784K1hPt2bYgDiL15vTSNKeYkdZLWG7LkFWv2wS"
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

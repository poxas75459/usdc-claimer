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
    "2j3GoWTCDdmYnw6f33XsTGHvsNVYkzdwRWj1gDvEy9aEKFoMtc9xvV94eSbLJRze3Cu57iDXPZReubaC7QRpj95A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kpR3jJhSNbVWyKtM8YPRixmwc949Yod9VRNnm1A14ZLT1hzm2i5ibMrfj76hMeypYcu2vFTT3k8WXYr5fAzx8Ha",
  "key1": "29JJTwaTVQsUpYxzkXoU7ZKukXpUUiVW7eojqEXgtFLz6v6woqf9o6JzFKb3saUzju3duJHkiKbuwvuMDCQeMFMu",
  "key2": "5YRjjhAS1zrpmxDx5T21bdDPyNZTRKSYjPxeSPBJJnBmkBMExYNoYcbpQMvXy1RriqxUGTjYWCjf4TwR25ei3SES",
  "key3": "3ccyPTgvKDpUTwfUz5wSPWp5L9XGsEL7SsRaYmdZkzGYqz1EWLxf1VV2EmYbfFdguxKBBtXjzoDUoHeovgeAQ431",
  "key4": "4degEUiq4WEZi9bhkVJt7jUHwyY5V4jzAQ356iHoK8h2neGEpcuQGq91cSKAB7HW6xvbRWPAAF5ScjhDEfomRrjv",
  "key5": "48d9FKCcDdJaordqWixaTXrBavmswfJkLQWGy2dNfFi376DJAik9mT72smHZDUTt16Nc9PPjVNzTN5KQStY8VmNk",
  "key6": "5YMQf7HM1wAWz8kJgnTYbUxeHhKgJGWqW5itqZp264tyA9fWsAmKfjM15WfQdy735tZ7n7uuLntiGqusmf3kEFGF",
  "key7": "2WoBWeHwPwmuH14nSnNTiFC1jzGLrnZVpRLQLYtMQexUgqQhVgZ3ZCQfzwRFHVMPX5Xn8JvQWVcJtvNJiD8b3z12",
  "key8": "4eocrfaFeKjv25bR3VghDkTW6QTYjuT2RasBy7N3QpnYk4yJLNw2L6TDA7J1cwm1fk57KdAHRDyVYqJCPWKZHhry",
  "key9": "Jw49eeegpQfEU3KVu76reRRCjK3vD3AhVbEb8H4Kg6FHLjdTUx4jKcMRxQDZg79BzeqCSkgxYUVhANpWgAHVhGp",
  "key10": "52MeCkPBGpTvQGkuUAvnmtLkvRAyScAjCuyT8T3ZwAt45AvtXhDgGDSuPr2e9qtJVoyqj1WbQCbfaf7kHMyTnP3C",
  "key11": "554gUQDxv1Zyh4aRYKhc5uDXgU5e466Vg2yZp4QDAJ3srDQbWobEDJ89tZ2GSgAwPXRVqkh3VSP7JBewB9tNu8Hj",
  "key12": "4xJ7Rux8iMZMKLXVFoA1qVamyvtWSe3c6T7DgzZNR1Kxod16Mup1MGUixa4bRh79Tu1ZZxrFjAa4XhUUajmu7yX7",
  "key13": "2YSwRYcAcpm1vMPZQeenV78KhPY8mY2CtgUnWRe2AgDAV7iAScJq32Wsz3c8HabH4oUpxLCsoTtuXEta3y75D5J3",
  "key14": "3RBZ1EbCdntev38mLXahbgHFyBh6MMxUQGjevbibwNb2JGgn5SB864WR5ePcEMiKKScCDjTDhrwHm3AvQJyxqK7e",
  "key15": "2PWWxxNcwahrA71cnFogmMth2f7x3uSNoR9BnWYCTcLuWafHZpbggCP72NV4E3cUceGAmW94kkB15MvTcAncPdu7",
  "key16": "62RNzxVtKZKgjeKB6oXrUdJDsFV1QnawP7EJSu4EcNjDrJ6EMWL8FbpPs3wzy2ACCSNwcrkfZeNw768bAVzQExVc",
  "key17": "5nWLXQwmi2PJ9Q1zLyzf934TJpbdPNiV2ii9U9UXbmYWH3MW6UoFsKe6daTNE6L4ZFsdB1qS1d2nNATXyBAPNZBF",
  "key18": "3anZXMYjNLffiqnrWEWmFfuQbu3xNYzG6DM12sYKtHqFN6jY5WY4tRV94dY49b2jRA3pPZnP7rJh4jhnnAAQkzYj",
  "key19": "4rFmYXtyXj1D2FajyLeyz29gnjrgFRR5qVP3wVtY1VdmNcxW7Nf7DynAKKtHvPWdF5f48CHV3VbbZJp1wMAXuLsA",
  "key20": "5wNRv6dXxuQvvXMj2qKQbW3eJioQAB74WMMs5hmNeATUitRoqk6YFqAwj82CYStG1oiTCn2mnFWC4ByiprsehU1H",
  "key21": "2ov4hCs1yVhu3k1ttayf6wQeczTzkg47MeeMp7AN3iGeb1sp2HCV4dLpYBoy6ZjoFZwT53XK3oEVNVYVtWUPAj39",
  "key22": "4VMpt1sHT1AbrGDXUKSpK3vySEFTejmbqg2SDXggPHMmVkfnVekKe7LkfM1yRjMNdhTUa7bSmfx73xJSXkvkoVz4",
  "key23": "62EGLBUGAEMvS7jvyoF8Tsq3LDB1zYmFuAB6owqBrjdkYekncn83hx33YE77pNu4EmjoG3iN73Q28g9q4kXnCwSs",
  "key24": "5uZ1bVGnkb2YGGEasK352iyp4sZxtKuK1FfJaU2SY3FsrUBhRLm2mbDuLNTmyedeGPURA6ebu2g1PUvTiWw9rHHQ"
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

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
    "312mTSg6NHNxNhEmVF3nqGcjd3xRovvpD5SqQGeKYYbnPbKe78MGAV1ahiZMqYEpNDN24f8xwo3ecKB37aDq7G9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReHjBPow2kCgbya3cDXoNsK665yGy66woscFHgW78XEXaxmxjBfeXTgJ1TGWcHZjQeWSKDrZgmQmCCgVEFW7AyJ",
  "key1": "hyYzvDy79kbUrDHmM1RZDvZKk2XNkQJL3EypBwD25DfZYjM43TrzgA57TkRD7D92vopzZ5Jzu1tfFm5G8fs6Ydb",
  "key2": "2bpibHSX1w7MxCpRhATRjXyi4hrfH5vxF7VUq9N1TyZBkZXMCRfKbG56Kgkicvbo5KvsRcZp1SYrzZxaoFfyoAQN",
  "key3": "5UMQpxPooBHigrk3132Wa8kMy3of685R3aUCXtnyWgRkWcCZ6ot8wEkZ11sf5QaoGRffFXJfDodUybUVqWc4UNn3",
  "key4": "3jJ4YpB7Xgnmk8Qvv1P5NeGAWP1HnK1NqQ2y81krcStKxKymRyDBNC8pedkKeJGwEBhnEJRhk7EMAcDip1fgCQyd",
  "key5": "29SAnUTT8iSnBvYXNzSHWZbYENfUHzNtSLB1RzK7yCAjUk8X6sNV1kiFdbXp21kJ6XULE5bHWKvJK2D7fPBVNVnC",
  "key6": "7CjjJjaHz8vGR5F6V2BjydmJdRjGh33cAFnDZ6SUr8dqVEcb5f3YoZmqjBmx5Yt5JWsKtGvEexUKfrdr4K5Ddra",
  "key7": "2ij67Z2T3agY3RgfqeaYJJE5CgyETWhSQaHa9J52bdoyqdN1uE65wospJhzAendYzThdhY1fkEEhcDCNjyjEfAid",
  "key8": "WXYdneCiFEkK5YHMviTvFgnDwghAUmgQGTkaEBCysqV74AgxXKu6Um6fRXftqQjGYboamPLGNUQRVB3gkos1PCe",
  "key9": "4uawop82mRB1VQvbkT25UPyj4mzNHWxkA7rtBoSGkCxcFFhZjFaeQvSTsb12SnPijeqVHXP16Z7HRsY12wxxDU1C",
  "key10": "3b9x9VLHECtidezkd8nn4Vccr7p1CHRULieV7vRKnjfJ7xcaduXutS1MrJubbVpTtXko4RTYMJdo7e15fje7RNB",
  "key11": "54fxNV4aLpJtEugZJZ6XirqkNNSUEWHFMmaFsUh2mnGqbJ77fZ3tqGv4PRAtJQmLzjDBj92xQw4WpttCHXazLrmq",
  "key12": "4vzANHfkfb67bYMF1ZXa9qXC2bCeA1bD8smQqdA7FzqUUViZW6Agtrn3ntoqo8oc2eBcsUV8adsQfpY2LfQE7P2M",
  "key13": "4ooUUfu3kqdt4qZGBAFvCe6eoJgkrGxu23tzWf8eDpHC1fij8ABKL4nt8CEquFcDndXrENWHimaq8huP7253DUC6",
  "key14": "3wqNUQqMJ9nPpBdu7d2zRtqc3xDjD2zRxvAKk5Vz7VC7DU9C49jW7s5GfyJeRLZi7wiDZRgwbsfMZtnLgwkX72tr",
  "key15": "2LF8YaRosa8Shwu6anSM1p7D3BvXe2xWoUi2NSqtycAYF7y3VHbcVSNFsW43bMkwnkvssK1m2p8HkQGWEQwAx7C4",
  "key16": "2gT3eFsUgU2RuM9B9iVMy6ufenyo55LfLRzeYgwBpEBVVh9uhPBwJNG7BPWkqGp1XXgUPM5J1iM3uwqmFsKGapvF",
  "key17": "1qmrSAEBhBu3zKwwsS7uPNKUXkMHL7PnKrrFrvXUpaUxmPnX3snChbiPYdY1CXn1FdhvdEym9XeJCv8BKriK1Uy",
  "key18": "SBCFN218C9ESEixsjwVYEvp1WEZN3xAFey9ZEKq2cXtpQZwgrQv295V1mHLucWUs1PfAdM2rgfzvYKJzPAN6PuV",
  "key19": "4pP1BpPLFJtV8X6kDHZ3okhTyMnm8Wd3E72qHhKmks6dhTgFZ1Np3TBVqE3a7yB52BmCSXuTiZUpL11MNXNbNZQ5",
  "key20": "5FtrJFjNg8oMpBFLgoihJzuNGfcoEr17icqeFGTm6zetL2qL16mFdDThpEKvkXah93insgezvVzoNbiSiRe98qtn",
  "key21": "4cD6voUPPM2Df6jDFk92eiuhvrn9iTjSTvJD23oR75CpZBPnHJLuc6RpnMMEsonScpozgyJEbbABz2K7azS2KQQf",
  "key22": "3BTgTXPEjouVyjSgV2BHptLHQeQDJJYRpJpAhi1CyLtXdDwQuvp9GmXJQGyzWsix7pEZNHCxwqGPJm9kfC1rhYz7",
  "key23": "3A2GDHPCcJtzWg1MnTXma8tq2m4F3wKCu3u6VGGm96pDkrtTdD6anstPvYrGG21efFoKvXRRUvZY5rQJy7D9C5Qa",
  "key24": "3xE8duMAeGrUc2KXQBkZfJUFWGPicHBk6dbXMNFECVjSFBhDddMqwFaB31c9UTPFfhz3x9W48qg4XiYfh37ALYYc",
  "key25": "42xqSnKx1ScxvpyD8uBCHQnLJgnWfDzzwQLrX64oqzjjTkzyRUPkXMZthsBuSWcYYCVhDx3bM2tEMzftxohsodaK",
  "key26": "5CysNKTJwmg643bFJRTpvVMckw2toCvKWdtp2LdRcW5hqFwn2AHqwDzsGsZn69Y88PRvB1yTxw3Cik8VK2yAvCkn",
  "key27": "5J984o3FoLFyofJjXd8wNg9ySdDJsKvrCE8KFTtGatpQbKiSgN5gv7zeea8hUG3H64itEraSizwTqJUjxVN2Vam6",
  "key28": "5FyGrWfDyFxPt4dTxXqvd3QPkSvWFLeaHxubowsNk5qa1FCCHjCAX75NrSjDoBaXGYMR5Jzu6hCgqV5sUEbDYJAF",
  "key29": "NKrMEkciDSYUu5Vss69TWBrkGbHYJsNZxSxhQQWdUoyUvz3dCL8tf2kcu8hhqbVhkfX4GLSHj8AQJUTTvLBHLss",
  "key30": "2sthPVpp9GkmSevipwMwhHczKGtorZad266oYMinNWRFCKGMdctPBuLndjTWnecHKwteYjX8k1eGhL5YRoLpahMn",
  "key31": "rt4u87jAeN9exKTWPufa5UY9snJ9hhdAefJXNVGEPkaWCFZnsnnGuNj4xYqzvmSMhMrkWmB7CUYoXtGE8ShhZjw",
  "key32": "5PRsobBDSB5GDa3zRCsZTf1fiKcKE4negYvLLHvYbbj9iio8FQc41HuBN9nfFEvRbdZoUHCpeiXEyC86DQ9bK81w",
  "key33": "3gh9USACdbVC4FQNiQUS1utB8ZvUSwxNkwFN2R4ZWmpayPMrGXK6QRGoDFediQ5y8Bz8oDH6iB3HS4YqeXYcyZRp",
  "key34": "4xWXk89bvbyJbcFJSWaVLdyWy6JyfBzCxf9ixYK9RJ7EvVDMcmrgLJEFt5zm21JzunK2Da7G8jYFDKQyHrjQmUaq",
  "key35": "4vz3iLvPLtJTqDXYfCapdq2ktHC4YHanyrZFhQhwPRdJr7xo4dn1MABQNAPzic7zjsNKhSXbxvH3FkUo7YxGkqFi",
  "key36": "4eekxSJrEBK8MF6ZRvoJc6jaBU8cfz1F8tSBThFKASGjAWEhZddhbQCG1RUCYEzhZCCYKwAX4ZCcGzM2a6um6Lg1",
  "key37": "327YJucrKr4rQxovEdKAuV98SrmJ9fVdkMJsFEtbuPb3UrYL3nfeLhehRzhrDmKjzUR3cdZZCHMCZAmcVEgwd7r4",
  "key38": "3vxYffKaSPcnU71ajjRLCrScbefh8vk1DaiBBQrNhbgJ4icN74tgaWVgdatsGn4UGXuDYjLBY4fAPGsn62sNJyJX"
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

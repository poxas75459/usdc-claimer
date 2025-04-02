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
    "fKhMcE7B1d7Xb4NC3GKRYs7USsQxraaKUfKUTmGTQZ63yiDD5J5JuPjfRmk2Tjns5wLmjQprNqh6i8NaoWQQCmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v76kdEzsKtPdoneiavRWiTbetRzhFoXDYxRNqW37nF3HnWZNDLDJ4VRmMd6Hz7wTQw7c6a9HiQJWuGYkSVrwDRw",
  "key1": "4dn8mFj7aoHEAqaTi6URwrwWXHwM2y5FY1vRovDb5iFkR2iGENi8ZBXr4PBg4L8Gg6keAKJQtV4o6odvuw1qVm5d",
  "key2": "5jy36JWXTaNUJgTWN6TX5rT57HZmy2HsyTFhfNUwvqHkfRmHURmd3tCSWrzhgeB3sQbojudH7NbdBvZKWWj3XFP",
  "key3": "4PAN98gmmE2PW66abr8AnESM7viQCbJAtWkoc1GCZzatEAV7LMzXsNsQhAKPjXc74nCDP8fUZ3CQeaYuZtBcX8Dj",
  "key4": "wdNiT2fAp4SbrhHhvcgnFxaZe61xdwg15sHemEPhfkjne55ogxtZZaQKSUeKzZMEAgbie4Rswrii2TC5boFnXWe",
  "key5": "3ZkoAPPnNaG9UZCieYboHQtP5ToT1oywKiCTFQHK5qCkk2B5UwXk7H3LY4mzzqgo9CVW7DQPg6cgDzHGd5fpHFFd",
  "key6": "4G6gESqUpzrw7m69sgRYWAhxHkj5U6ky34aVe1jaKUX1Z6PcgXdH9NVNxEVU4stT3CFr4Pcf8q8GSNWx7MMw4yLL",
  "key7": "3kcrp7zcsn7i2hYMbF2q1FxBhZQ1swkvxo1mNweNpJeXZaAx33LF7EehJqLu7n5MbnVtssUZkHaU8CbR6MZT8rh9",
  "key8": "5p1FcFMU37gS9LyoQiSH3cS58vHqF5Gy49kskjMaj4f1DrnVcK4piRBYzSNv9DiiTZDkktbNwoapdGZjzYpvokPr",
  "key9": "tc7qH6QRzGHj5e85QZ3kRUCRS2FBetSNAbC1fxQY6qaHUDwUw2Tb3WaKV6hm3ch9qRHFdSP9c9sh38zmjgx1SgJ",
  "key10": "4aaKYCY54qbtNzy9sPK4gM6QGTFh9GtWTB1isrLBuiznKBjN4TCt4NvrB46UXrgE2EyiVFiHYPKHsawSDLR1XkU8",
  "key11": "4imQZUsAKfZQ4EZNjUnayzKRBWn1BGdho9EBDqDoQNBUPHWAQdS5thx3KmfBa6opE54bgmPgPRgSKZX11MG4tTws",
  "key12": "3dEWKdJLMvuu82yrgQDndX88x6H75HLoqiozFveKz4ZCwnkFiCczUS32p6bg1ywz8NaaVU1Ad7xK9gohSXeA4TGK",
  "key13": "3Bp2YX1XbX2V12SxUzfqaLyRSmW2PBR93Z8nvi1ZhbhABjaCrN2aNquomDpwiTkmnzdzyrqszEDv7P5JEapjtCAX",
  "key14": "5o9RRdFsbMSiEYf5VZEGBxH2LGmhTcvyYUuYUHP3UjGgrjhCXeE3FGaxZjDSRqfkrkH5xd5gE3KWZt4ejEpjZaoF",
  "key15": "2ha88KR89t7PjQ1NZZnZmqHKXAAtz79G3XJvRjLzHQDzy13RoqEeuZ5dK3NTfbUGYrWo9A8fb54Yi4kjrFNjZiHG",
  "key16": "46Awppo7xnSUtgyZkLJcamSMmhuvVGWzVQnRvgiMfBz1Z5Tf2mmQdrCsutCpMz7MbEhfyDvsjKw7kn3cHLvKzauK",
  "key17": "4v7KetBKYurRNTVdfcAvP8PvfMMvDJwdWZZygDFXEmVfTiN9BG4tcZAYzAWFZMyxa5aoS5mcjSW6dd6qD73pMBkn",
  "key18": "4KvBhqDJBhZKbgjk6JoVpWLTswmMnE7g4Sjbf7UGf5ZA3RjbWTkUKaVkBSBc5NC2DGit87CN3HqYgEyq8AN8D3iS",
  "key19": "4KnNYhLiVTDicbf7nnnVska9P3UQZNEk331Y1kLGppXzxttnSur3ovwjQQvnR716KxavvE7XGeTgeWwX1Jo5uKEz",
  "key20": "3KScyg2NfbTpUkRQavmRVfnsw1eKcEiEiCtZi2f9QNuwK4XwtaV2HnkadQwfbRoMAKcpemwCewGrAwPX15uSkTU9",
  "key21": "46YnPom3dhgVg7zx2qoLCt39qRy1rH5CWEE6YDzs7zdpT1ebrtF4F5R9f8YmVBphmej1uPhbW82ZufyRTHAxkEPJ",
  "key22": "2a8yJPYPVmRQwD1evJoWDs8qkfhRsBEdwRFrKZnXuG6brvpvfFvTKifyBHUgjiAaYp4MPLBKyyXRDYuppAAu3BTp",
  "key23": "3D8ieD7WbE8EGWVZKbNCyWKc4w8uV9T4rbuR1agwnxQmxpyt7HBJsNLvqNGi7QFnJhxz3uC2YKq7aACuuM9WyMkh",
  "key24": "3Uh7DYe2sYMKU3CSics3M5o6363xA3MZqUyNVAv3Wff79WuiDL2g6M2pPHjLThbpawY7sESHJ4PZuELfmgbe8iYs",
  "key25": "48n8FUko8ACWCMjzWuZonHAUYKPeMJ6C6Mta3s4ECTtgyuPrbj5ZLr6V6i2QbQToEPiMVk3EBxZDNQkgmCuczkbk",
  "key26": "4Cjav4t9SbrYBZHVqwkX7ndE2AkoT2Dh3DphCpyF6p9s3G4iXKKfR4J2BKiErbQxtfa7THHNMW562pXgnccoznk9",
  "key27": "wSn4j1Y3537Ma1VT9CUEDcQgW9B3sdbKAHGkVN4gYiUToENXrW1fbiJkUcyGEpiBomVb1fHay1xw8YCeULn8VZx"
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

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
    "4qmUktLFY5UfuVtaVjrtmB4Dwrz6wReXfa9qRpT1qBy7HeqDSBoCeSqgC2seegBFF2uypqss68kHGaL2mXxShXod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51xkZfZwZXaEGWS1PSYKRc2zjSDAFTDRv7NhEgRwAzSKeZBE1zjEhjAjJapX9fGEck5o4UKMLY1yQEMRzP2Lwubu",
  "key1": "37TzR6oHiMzxxksPGLLKTz6tXwgj6L8XkwtiiAFNz5ZMJnc2QrMbQkMVFdW3pre8tQRCVRWbT59JStBEqfeVq3qg",
  "key2": "3TtyqKYtztszCxtrFjWzeL99gEiivw617miYaPHfWYbF3DUtorGH6Eds7MCkTAChvpdSJn6HWNLGha65SbJYNZqY",
  "key3": "5MFNfdFnotwUVqkteXyfwb2cJvjaWpQXy2wvFvxqrSZa14MmRnSdEULMPjjuZvTRp8PiXMctc7oZKuSPbCQJ97CQ",
  "key4": "3sqSLuu3jUPimfrGuaUTYENwooo84hh2Mzhn91SnC4Bo4iBB1GJC2CwmhEhWU2CFExJKyUAR1anyW5knFQ7CnPcT",
  "key5": "32SK2hjdizYBNPxtGdCVkbYdD4GhV8hcsMP5LzMNr5XuCo4p5if9a2xfmSTSWAjoFfw1sLEZxVoVHpBJAtYT6LVi",
  "key6": "5RkMB7qPuG17yEy1jhTnJ2Yx6SLKkUfz8NkqfPH7VNbyPe1gR9VKUrvDgj9XTUi9Mkvwo4bbT3JLkYdAD1XisDip",
  "key7": "2vizkqtKvNFUwp2RTQLdMK3V67DzD3P2WS3Wu3goLndf6wJwy5sa4ip9FGsdBrcXtMZ4BrXoLQZNbvLHzvR4qsH7",
  "key8": "5AU83t9KnWdJjXP7HeNHBKQbSjcG1v5eHBw39Kk2EDN3tC6UvdjoMFiSCXaFR1TD69BugQEuUevbDVcAPE3MsjTT",
  "key9": "o7jkAcyGK9VqG7F4KPKPXx68a7fGohy3WFoE2GRw49z9u66PKcXjuJUezpuiV5i4QBwpuT4BXdnN7sN5ufEBEyz",
  "key10": "4x2yJVesvQb7UrcRtfHMZyaz9uY4gFVwNtihQh5cSadMe45rh46oTAQazuKubk1F5yZcPDaWNRBPxTvc5EcW4V7M",
  "key11": "42F6VuRANdWq99i29qN4pSxGM461nSE1nAkzcGXTNMxMVBrdu5HXQes1tpVEb5EFd6zwej248ADx1QeXesukncYs",
  "key12": "mBeAuydkReahrQ1RCZmA1Tki4arYvpHG5GnfnPRAqdNpBnoaVHCaqcvWx3yytowptiTNsPwnf1WCCi8JK6X7xj9",
  "key13": "4j9tVpU7Z1hJNa6srrJgfHSRLq9hCYXossskybV3y9cPAWYSHRsg3xt97kXBZxqj1hCcK5NLVMPzTzvJBJn7VCqr",
  "key14": "YeAThw1S6Px6tT5Bid14hxdhVEXvFC4kBSAEGPWVgPTDHkDgcXsF9ZN6XDY8C3cyf6k9CtUeXRDJRcZw1tuc58P",
  "key15": "Sk2RWwCKNqFU1c4eqyzotK5oVzCGXT6JaK9FTacfQQcUSft66D7BFMhJp32jWf5oEgVLeA2YtM3JkzJcTNCsCrA",
  "key16": "3YWuuarPircTRksy9hGMAfXUYQe3SHp1zJCAfxwtq8KSrG9J1oiRArLFBmbPWEuRXV5WHeB5GD6Apo7Utp9CUJko",
  "key17": "39yFNE85ouMZh1gvGrdj4tyzc29jzhuARChjNvMrCLNqJxYH9BtjiWQMKJ2QrxfpTRxR78GqAHbGQs7U5yyLm2BV",
  "key18": "X9c3NpfEpMQg9i56DR9mcdiN7xvTkYc8mzr2BanKZXDa88JPnGDvowjqTbt8Awc4aPMo4EAVvMb4kDWN7gmim4S",
  "key19": "2EURj7hH3gZG1L8ZozX4gscxpNNG86mt5RgrLc8WyirqqzrajHAW8z1JqT2HE7RSjetH5sfrFEt5H2apqWgB4dCG",
  "key20": "LiRj5pEzJgcUAjwpZft4QJtMVUfRKHeWAQHB4a588jRgbm4965UBsEv5tCAtpr1XL96c7EGhRGP7DjzCBx2sBMJ",
  "key21": "3jQ5NbEWbPUUN5NG6zTpyNiDdJqgFvb25fk56W1KgP8vUL5Cm93bihtj3u6BFgSwF8QNJDhmonJRji3saD8QiFKs",
  "key22": "26tKgF1PXqNde4P5mtsUYxUydH1JajQ6kMGXV5UyRUaW37ZAYHH88Qcn898UydGo5gvw24iWNJXQB6B2T3P6NhqH",
  "key23": "4i3BHvo3MTVBB1BgLQ6bGwubqbAcHRaegjhAEQjRLNB82cyC5QG4AfH4W4UGwTuFtVE9n7NNjq7nmdYS1NHw3P7Q",
  "key24": "xreR4kTu8176cAgFfhT6cgz4SZKAcJkaCmxSbhkR9UYoNc282TVT4XpjSCGfLF1XvqM57McvTjBSTMFqzNVziBb",
  "key25": "4W1RHJfxAV8zv3L3hsAGoiZdcXJwH6hh4N3GkF8X5HFnmG4Fy7thqiNu9jpgAtpJWzFrMdvxUsuFdMt52haenoKm",
  "key26": "2F73voNjgLyNzV1j39BfYZeY24LN4JCoar1huVCfrSi6Cx4UWj1s2A6HAMhUFavSTRj1ddcJe1AZZnYEo7n9Wd1n",
  "key27": "1jzbiW1yfECLwVUHSFAeMgGkei3LRbQ7n91ikpZmZQuBeBErSMNHLj7fNvsU43cPtJbPsWhgARrMX99HTh3EroL",
  "key28": "NLaitY7PyVwHvgTRDC4eGScB87NWNENGVqN8Zv5ErWqGVNDkJnuZDekfM5eEs2nJ2jg5REESpwJyMvxsuGKnKWC",
  "key29": "3sdgM96uCC83xQv4SXZVFdP9yVwTQGBR1YwdbPS61Xr5iroLG6kGKy9rF8KnMrRCkjgjZ4px7LjxeNoKPTCg9uZE",
  "key30": "5DF3CMc67m4dgMJReyW77M5ZdyDjuQxNPXdei7ibHT6Z71bTschc7gRSKx7kn667NqYE2FuGnYBptEtVPXiG7dTN",
  "key31": "AnzeWVSkMZUenpwpfVVXDsrLytJPrcQVAdrRaQXeyhwKwwxhZVMsLBzXUwbhkcTXZLuKHF7Y5Kbd9d99HmZHrAS",
  "key32": "4drSswaHdZSswRtyCgJdDydSgEL2z78ZtQco3ymMstCchEF2PiQF74Lr3WA3hcJenn9rADwZpczL75eajSBohkLo",
  "key33": "3sjk4Qt6m4V1Nqq3US8zzESN18xG8QjcvVWYjfADKJHgEc36Y5DnHQLTYnALHSyQhcW2X3pepwvBLNPAQgMMXk2X",
  "key34": "5mT23UeKGnmHcauHMSAmRcTtL39k1ExoD3qYeWHbfBMomHafXyyZVNcbtKxE9kQ1ee3UWd1EcaqjNwYtBndxPn54",
  "key35": "4m42RMjDhE4Ha6CLDMhjBqXCt5DhtpWyhuX3TUU5mWx4Fvehv8zED1sfWtD9CyU4R1k4AHm6wauiuyz1CREh2E5r",
  "key36": "2ZpYrhJZHpC5WPULbMhgtUYAZkEzXWdwzd8GWAaq1S5FNVZBVx1ECCNj2AhMUMpR5WY5SZezjG9nEYAa64L29kvJ",
  "key37": "54pL3CKqRj2fdYigZ3grt6v3gayKLWqxqjQUWVVhX9WXvVmMsyV56xyYbofaHt2GHzsKm2dp95i4j34D7rfp5ySp",
  "key38": "2WtPTBq8UYNMqVnVwjzhGE1K4NGukndCcH7mTMSp71dhMyVd4rWBVdoqVzyPCetUzDJhnuf49kMYAkgKiXzeuRh5",
  "key39": "4qB7p1Eau8r7kH4ncMWgGSGtkmV16NkgJzRP24hLeMCGBKcqLu6HLkdmhWtPHFE3BLC4UXD1Suj2rt2U5Rt3GPw1",
  "key40": "t2oi7YxejGUoYBttgismxruHk1TvFf7mXumsV9xAPdcpJaJeKr3QxBqX538VvtBnXF5jQ4gVjYBHasCmeecpg5D",
  "key41": "5Xo7dkx7f31vsFpwLfL6GvR1tDN7mBV5f8WhRLaPfsMqRJshdpiW1MywVzdo8nfsWtjBQKdQxT6PeigCUBHGgzxf"
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

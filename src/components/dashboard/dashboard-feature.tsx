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
    "4vdhWqRgg8bUCy9eqoE4eh2Z2TRSj1hVpxeNyWaifssvArt19Q3jkqCf2hG6SDZDxuQo4DgL52G8agKHn1b4hn1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YcaiAkJvb6MQYotAR5tX71cYMKh4Rmy2rxkrcGWRTg41AiJnRzCzuRD2FUDRhKof6zN1PeYDoKk9KDZyKHSVZZd",
  "key1": "3qZTEndyNxagsNNPk5YSZeSyLCqdnuSRL1Jq4eGuemTE9wb4SgkMHVPUFVEoZhNmzFHLXg36miFmWmUwuWhZi8kB",
  "key2": "44fDj6Vh46JFXpzYv7gBmax9EyNunX78cuQ7fExZdkSDHBiyXC1KMDrgnnypJRHpxKcmrLN4YYCiR8PZnZcM2gEb",
  "key3": "5dQwSnBKzvWToGGMfdtKHTVHPptHtA9Vbkn3AVddwMdBgAzJCq1Ri3ry6SBMCbGaHcS3Hg5eo3EBswgcT7F1WRBW",
  "key4": "UWXtfTsLmUFRatwrN88Vi9B4wEBh4C7ewK8fkdjhMMEBWn7ycoHfBQhfbcN1qP4h1jMc44MWoPQGUKucJT4rNpm",
  "key5": "2jKSgnD8CBiL6SJ93in2YMtaSbNQddaGWYoS1yrhUU2NvXPE6wGQjUwyadPhZUiabqxX7rQfgsDrxTQhLBnRf5he",
  "key6": "4XskHtzvWqguNgA2xm9ba4Mn9HA8f8FSD1KGjynuwRS3QHr8XUUnGgD2mSJbyspJ1X7SYBQugJp6vq3H9R62nAg6",
  "key7": "2vNW2p6g5ht9c3iKyb9hemZXjCUajbHi3Qjc3NMUz3e6PFq8ReBqkXyUXuHqDsTHgtehEVLvnArodKZhFBqfjMaS",
  "key8": "5cCXoGqCovi8AAh4RSqMw8hDyuN9Sn9dgMkFrt61GEPje13BfpmqC5ipgPyqC6bWsS6FjdkGyyEith3vzaV8kevW",
  "key9": "M9LjEEMNHzmu1efDYpAqUd43nJoE8KkfjP2AZHDJcJ9mVtSwueX8tVvhZnLWTc2FBDKJMNcseJBALFduzLiG5c4",
  "key10": "rqyzfWUStEi3vpWuC1qKRoqgLDEbjb9fHuBJrfyuvikNbZ8quWtvKEDaYrQbotjvhMLTtHpZprojers1f8QTwyz",
  "key11": "3jvBMRHqW9mrjmBdLpjRKGsahShkhvvWhSBHBFemn5FLpiK9DnUU82tSAqT7rMZvSJjY8p8ksCL941JvhrrJ5aEk",
  "key12": "3i1V4z18dzBHktn5N2VLhULca2P5vXGAHL3Kh6svxA4DDxnNXjUf5KpUH3Hgr2xk4Vmo2FfajaDnG6wW5nWXAW8e",
  "key13": "5KeYLZbM76Qf6VMj5HhTdW3P2kR2vgrdPsbPwDmhRrYrPgH4Rn63GKEEY2kXkj3NxrJVKHYSwuhCAsyZfR9vhyNR",
  "key14": "4muwLc7gNBtbDLGPHMnvuuLbSRHLTyDMoTD1pe33e4wEQwXdcpGqP95f3ZQyKUAfxKAxqPhYYqWffSeYGodUu4Nh",
  "key15": "QJ1azxeXnFTTmCVHrUMXV4aDpq57ZTDyGJza3RApsAwtTgucwWNDrtYTrpai2ARgZkXpnJ9ner371oiYqLcRhVn",
  "key16": "623ohkuPwFcMbhnMhrFowhFo7QTFTQqmYcfgNTn6pca9s4HkFdVnhLk9G9LFHrMrynxbHDeyH2ewDi44sk52gziR",
  "key17": "wRm9VXN9ThPbrTJJPC7xv2mnKwpReoHbpx2krak4G2tRAX2xvygdiLgLSXdbvifbUXYubVkSj4jn7fXSFqiAJ2Y",
  "key18": "5RZjJGbGr8mdVEQ1hoxjBDz1R7yNQn1T3RjnEasHtWoSXw3qV33R6rXJU9aWjqXHkNxuNUn5LFvGQZ2agGDz5cv6",
  "key19": "h9zCjwxhyrcJLkLdtTb1BTQe4JZnKENbdER6ucgYLeVx4x3BxNwQn8jyBWr1yKpwHqDRbp5LRohjDDTHMt1EKn3",
  "key20": "4anPunTG17jmZRst3LgY9hqgWcwsk1hSvewzR8xFQoqv7CG5f8UU9kommvrWWvpTwNebL7bpBtAhbPTAr3Hdd936",
  "key21": "485zDogLkwoZaf8KeRcfaqAJ8nvks1nzm5JR4hAtuh6R53f6TFSbhVggqxUFabYi1AcfpYVQQpWBDXeZcayq5TMV",
  "key22": "dbXV6jqrohKhc8pNUusxxHzjRt4HFVdq6TsAqSgTRcCTg3WZf4BiWYTfvPGsW84A4QVYyS6hgyvDXcYY5N3GSGw",
  "key23": "4jt13AaK3GZAkUjmj8xF6WZTtzGUp1Jauhe7gh6m2gfPAfNGRzqx3hYyxAX86JDsCA1yC27zH583ntkF6kQhyrTs",
  "key24": "3YpFcfZNimNjXeDJmp1LuRDW9gDrqEjTsp4srNBByw724NdnPoFFbhzvjZZahjb2QbiEmyTGKgLNMywaLMquEHZZ",
  "key25": "39iurrKzFj8YcKsrH3Toam4W6y45R9x2YEvGRDgqQFcabMGCtiiSUAoUeQLcP3PoetH532SSFSvrTwxT2UtTyXbq",
  "key26": "29BFJKbjnKqvG1A2qKoTUA3o72zs78YNo6a2PRqwj3obJsPqqtbsnx1VHUsz8yiQSg2eEvbVhbzS5K3MKzJmv6Pd",
  "key27": "2TiMgtwqxBJcApoxcJGZvFzKAj71GdSspB8mqNqwwyjuLDcXhMV7Ua6cwLooSF5YWsHypJC7ffjwgVQnLetqkVVy",
  "key28": "KdkGYFdFxaWriwCM6yBYic7FpV9vWuVnL2G38ktqkxmrJrtjNApTKSdkX1wT1fLRCjaM9SkEm2A2xVaEFsbqVex",
  "key29": "3nhc5gKM6PQHHn4F9SHJygUnewgxAiCA8yuxG4ebYGLre2SsZnNuZUkXRwi1yqqzUTMjCtqcmTg2yzD4bMBiGLBx",
  "key30": "diQDnLZ2adz8dQ1SWfQ4ng3zsUnSVQCLJRJqBccTQTSCSQmeigbxMob9L49rEUHYb7SM81SeK6bjYNvmanGEsUu",
  "key31": "4xJqx8knCHq2YQyWdtNX8ZXhb2Vot7ZMQoVycK9ka5sdWqkEHgSHW72EeQLBpaPkijKp9TEb6RCxtdPZbFDxkds9",
  "key32": "4bPNzhHfasJ8fVvewE3f5itsPf5bTjK1T2rYWxtF7tetYZLTq1uJthax2WKSnkefpavNsKHFtQuqmRRVaQZT6E7e",
  "key33": "buzGWXJ5MsDGDMnhiKNVHCfH5kyzYfbvcmDPyNTnJBuL57T1Kg8p5FAfPicsqM3KFnWN47TPLCzRNsdBmR9CrLh",
  "key34": "3oM4JVnzntd2JSY8BPFaCwf3zx4DSdFMN6CkFDSVFsrX2rHQ4ptYsbdFPiW5ARaEt2NvSV1YyfbavR3P5PRguhi3",
  "key35": "3bqabaxV4rwjAZRMp5HHVERbhmVnmsPJctEn9wksh7fTK3ExCSeTFXJZgHLewMkqPJv7sf69e9xQvmebh71uAQoS",
  "key36": "4DU3S8vHbV2Wzmvuy2stP63aDWvHK2mUHBni5udmkg5bGY63mFE1CioUKAn95oGt7QGfE29pimzWCSxMn1tntisU",
  "key37": "v6c5PqTCYoWxh7aZT6n4tV1o4BB1bodgfVqtVGqaf6UycoTNofmz3zfsmqv8QcnMm26VkEFrjAkewPGPo8LpVCH",
  "key38": "3eNdChtmCm8RcrmCVBuMh9SseSgE6oJbutfW6JLGhvkEk9QFeGnSnH2q9aq5WYRhtbpKpSPcyuX4m1spdVtBqXK3"
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

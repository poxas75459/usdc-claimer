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
    "2C6VbG6kHL8BgWShGTLcSjRs1h8xrsZhpZm1zeh52gnXNv82dBHobAoB6VMeuxffeGPi3DNoE1dreDdAnsvnYbzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uY7WABjkCwHm8ZvbVP1RExEy59Fg7oYm1xbgw2YLqaUNWgptNw1edSSUTGt2PTEwKujdw1ZyUBpuxjwCtwxDGwm",
  "key1": "5ndYnwKZP7HD31TiZHFDZBq6Drip9N9Mz5HPdHztwLEovPDBHVTLoBQHnQryGYEiyRWoukLvgaAd2VMye18qusVH",
  "key2": "3cn3QtzjzJz5RG2UY5sN1tCX4smsxC5KBfFKqtSndmigUnnBZA9K8LRZxL5gqLjBLFsgTpHSEEWB8MM8UmSbGtMa",
  "key3": "3N9eX2qizzXvBcKopjc4ZaiPx96zbu2vr3mXdyrYzEKmk21S4czM2MtrU17mVtZeVYKLHWY8Ctx3fs7fRY59b9ca",
  "key4": "5by4EqaZF3H8eQqSuG4PUokFjTFtz7sw2asSiN2qCmcKjQ5VPzAqC5bZf2V3hZtGmNwQ3D3fHghRVNi7xAwyN4Y",
  "key5": "44zx9Xb7zTQKg1QJFYkK2StWnTacAkZBy6xsD4oycg97gunDWSvYaM4B88pCgGuN5gmHhksuav4RaCnRYtamEFCK",
  "key6": "tJb5Hktrids2q6vohnpVgEJ3JKTn2cSCR8UPVcT2gnuU5QjsbnW7KEZpWEt49hV5rL5APYBpeMvY2p9egLCCx8j",
  "key7": "21cqu3iWjY7vJkfTSwP95uUq7Wz5d2nSBmYL3P2L6dPs5aFWt3mBvxnb5Ty9hK5JX7uXQZchSFbx5TQ45Rkm5BWB",
  "key8": "5yWoVxiDENyep6gyATM5eJPXKV9jZpdgjafEEEvNqNDQPxBShZWg3toe6NukbuHtdBhkrj5Te9fEzA9T7P2PxsoB",
  "key9": "4PgsHaJRrrvrkx8HgDZeTURLeAGNhU9E3rT9SaDPeVLvS6wAq6khDPSxdqReqnZox7hvU4UTzh8EQRDRDobcNnbb",
  "key10": "5ymxQ3yJb2WUpXd2ZngoVgVkQwdnUpvZViDd9tnba4zgexK5xnNU4PPDT5mMyrqkXSEcB4tp2rpD6VZxkooYimGb",
  "key11": "3mWu8KyPy7dxuuMnt8dai57ZKCdhPY6mXNS71iXt12suwzkTtdbgqRFQHEpLUJoVHujHC2kiJfpm31Mc825XjbQJ",
  "key12": "2utquyyzchcLVidLkwfXog5U4Kh3p8xEfkrZm8xAMB9UAKTfwbPSFYak1Mv4yiotLH2JLpWZVy1ScNWkx9trg9dh",
  "key13": "5XJGiHb6t4Kj4zg1T3BVRZ4DRvUdkuA7vYtnYEnzFPxbMNRAhoaB3CrU6Xz4e8oW8VinjnEiQsTk4rtDWLoxJ9Zt",
  "key14": "D51Wd6oiBssyg6MKXgonGQvLzJvqvvhYaNUuQCEW1Wdy9RGxSfLk9a5MAMiBCoaUbQBtm14i8pNrbp28XA214kE",
  "key15": "4B6m2UqT4E8FPiZSo5j4D9iFcpFnyefEExccz9gwVuppq7RKHcdU36K5w1VThpUc4Bn8WbyvCv1pMmdR4HU6t3ub",
  "key16": "iasfeZZzNcR54Y3tyvf9cr1suYCRnVt23WE235fDbBYQ9ZJDVAdrSVuyuTu7RzUoxcH9CmAqpbwzHJknJ44ESyG",
  "key17": "4fRcsL2W3CE4b1UYeDy6zip6rj5HUcuGAZD3xtnBzy6tzSbx5ihfD5ZTw14Ru7gGdyK3ad7HReDZBCXYKj2NLrDR",
  "key18": "23hUyH7oQoPZvCc5fipNu5e9GxAB7QrzjCz3c9Mp2VYr9PRJ3WUSgSmpUrzFWmz7TYnSyerBnJYACxkyh4YfqVQA",
  "key19": "WCEd1uoz8JZzi3Grfu88k5SwzY8F9kCXpNtctSDmosT8GMhrD71yhtUEsiXieFvLJPoDZVvfQVxvED9gvhKrcu2",
  "key20": "7T8bXsp7wuLFguW3nnJ1Tjr5heRaa8wFedJuVPSyDmXFja67MMwa9WCRUJfFUgRQwWWUMr6thQErEBrBSZa6V7j",
  "key21": "mp7Y9wJNjmNRmFdEGTRffwMDcrE3atzLedusac5rQXJjF4EwUWp97WXRQAjHbuQaVV3ySXwSCs5CN75etFn2sF9",
  "key22": "1yHitPWehGr3WvEbTyZwYzhwNdg8P1yKjWwwmzrkThnsffjqZK93BYPuQpzwKff1zsBQSmuAxxoQHDkQDUApGKL",
  "key23": "3ak7uCG56zFHPkgUv1NmsiHwB9tMCYp7MLLLNjCr2KR9XaTotpiUYLSLuqgd6gWXge94Maam6B21RZjwCY9YjxCT",
  "key24": "FZa3eHmzsGx53bWwYNKKCd5YHnpGTAsPHgQ3T48KxjZ6ymMkXdVAQ9FLgXo3eUpK6F9c7Ebch97sjd1a7GUfLkX",
  "key25": "5aKdUz8o3LG42ofSuV1XNK74tEFDZDWMRWHR6UmsmVm1Y6EZ7J9jFD6yvw8rH43PTAkD4H4znuuBCbAWJvu1X5Ev",
  "key26": "5NzJcDh49zHfLBmMtxygTb2f6jvtiUioqg4KG4EDLabB1NbLW2NBcVUiyMZkpuD3M6dNkt7SHExYGHpghHFNgseR",
  "key27": "3BxgApkCiPB7AUmZyiQ5TfBatmNFYynMZVdRzgTxaoykoA8syB4f71P2TcAY9RJsuBx9ANbeCfTydoS6iVcY41HA",
  "key28": "5bspnMd98m4FnFe24xK94sy4PgrFCG72ExMxK58mmXUkdCzTviDZHpBFSKeCj9cT1CMHKQNwu3of73FcT8VKa18g",
  "key29": "7sDaNUq2zXD4Q4cN97W8XjccMBVQTf5SN17DeiPunqZyj58YSiicgUPfZCY5LXZNyma1J22KWcQb9SnWpMGNgXF",
  "key30": "3LoZJsc8GcHr7LUyfETP4Axj1mgZEkpfV3dbdq9Jn2ZDKTXZWs6Ssh8ougafwAH4BqZZPsu83v6gxm1oatJtpBbS",
  "key31": "4sdCNBhoDesyMN4aXWEe4L1vhSx5w1mJoNgkujvR8HZoxSRHm7WseXUGLNmZi8STKnyscZWR3xBjuLcs2XJSFV8Q",
  "key32": "2uGJAend3CPz1jVGGxAYi1nbZkqaikWYafojKTwbGxTTWgEjkPQ1Ld84ijXYjHoxDC9GNxQsTPNdr3M2pVo6WgsA",
  "key33": "TEwSNFPNuVsQ4aTqngNe624pJ8QfEmuYP231zDk4Wv12kV5QhzboDnhHzf9WpF2d6EG641kMR9fUZ7jmzo2rjT5",
  "key34": "5u8Jf55qEbVZ2GaeUt61YGyL5k64eXeZroBPKgTTKmU4YcTuK4KFwNkr9TVxArezNkwNJDbBTramVFFzx7ZU38Vr",
  "key35": "waiGf2NKZaKLoDZJyhV3rKg7KtMeTB7DsHKFkuzQBsXvAAuv9GgbXixsAXvszcWunwqLKJEn1Lo6aufGA8Sax4C",
  "key36": "3S2dDANNpaHPv2RwUBq5vy7diQ7hzUXxFz7YfoVJhs8xKJEv6wd1kEmfbayB4jGvZdp7CPEDKG3exKaXV7EbdkiN",
  "key37": "wYbWzmTyWNPXYQJwK3eDaCjLjrecQsem4h8WeRpYiqpKW7aeswTGfBuUXq7USUQH1PSvU6HxYu2BqPEf2Kt5z7b",
  "key38": "4oEBWsmLt8W4ZxaWFMKL9qjk9p29vGgwPFxPx1aYn5kfumDK4BDgvwr1RntMWE8kKA4AkqprTDo5R3Z3XfDAAQ6H",
  "key39": "5Pe4KnYR7xmgQfgECzzbNxrgdTrzxRZg1NWarMd32xtVxvArdKDZee1BaPBQfqj8BGp5qaeEuC1MQtd856vLwoUJ"
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

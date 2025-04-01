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
    "RwSHuppxPLPQ3PDvw9aBucpr3KpZJ427bAyDtsmYcRNby4Sg26qWG5ayuiRTdv5VEqZbKzAbc1dMCt7W8K6vZbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XP2uvZZFnfaSSzn5iwug2GTFsZFK5X14CdEJZP4NoeejWNdcbGSC55ze9PgpTfTGERLYqDSSH2EN6xrZKYm18s3",
  "key1": "3MCYaJxjoaTv3EwfouEcotVH5MdWQtsgaC5bah4VuVrMynbP6w1avS8r53ZeEPPjiqiaToDmi5DqnGXyKeKupDLh",
  "key2": "3aHH6Tfu5LM5zNsu19J8JDTS85vxaaQyiDRuZ29fTFhfKHicSokmhCfYr6MzFQGkrccRLknu3bjzp2VbiXrPSx4r",
  "key3": "4Dg96pHi7GXuH33FrfQGS1kfuWrMXWZwj8qNqwBQAHDLisiUWgBhjHXRpoFnHsEwEyaD4G3M33DZCTGACkHDVkEn",
  "key4": "2e8THJ1yrxks9Uh7W12WDSV1f1kFSLDhKc9dX4U8VUcozDDCsSBtmfkEA5kiZ1ymhvHLLL7Pbx7Ubzh7YyJkLMKH",
  "key5": "hBaC3sgm9vQh8mJEQviwQ9XJPkLyGojNturM5WzjDKwHqvKZvQ9syoVMh9Wo6RdHYprU71oF6iFqwbonuqFGa7g",
  "key6": "298kiPxaQCPWHMkQuKbYdhGia8gqsTvBNZpjuRgH6wTHhkF6jFtguVhgoHfEoAnk7tR2AxgqQFMhqQ98APhswqrq",
  "key7": "3UA1PmRJ4LX1XfVKRVqantPMXAwkMv3iMc2aJcZPw34qa3AgeCi8ZD1RLxeXt23xhC4nsUtFRzGyjACiQSDk7QKu",
  "key8": "3zJCGXebrM1aeSV1do8th6Nkiu5hmhDY1E87bPBbJs3LXrM1TS2w9JHpokxTCbuJoVTcjiiZm8xyA5vZnt1tPcfS",
  "key9": "2HagAE1p2xurDqvAVjYWbStvwnBnYbTamdLnnP2cJ5AzxyiRAJx2Nn9MQQb7vxch4yG3UdEw44m7BN3fAYHFpGVx",
  "key10": "2HGXcRADtXwcH8VjzXbBjdCooQVkhkqSCDwvYcJaGqrMw6jvn3BZLx4NKr4C6pvqWE6vXUgDjoddufPurio8uTaD",
  "key11": "219JF2P4rSLy5wNXgy7GQSXZTeJB552KTFFmzANPCQ1M6sSHpwREGLCpYN2w7ywo9BUcavkbcx4UBYqQesgp9qPa",
  "key12": "2KeUvspuKKfmTsBWP54siuQ8Y13BhyKd6t1p2oMf4LuUQDy2fzsPb8vzQ8vR8UAbmuRvr9C5LWXKqxbWqDunsCYj",
  "key13": "4HTXhHZjwwRKDDGusnt3EzFjYLtqyH347o2mLgucacUnVTfDXkb8cvbymoUVRQDnEKMisx1dknY5qde3oxQR9unM",
  "key14": "8pgML2MKcFeBR7CdZ9wNiEXHPS9H3dHxtyBADz9Q2gV1GYFtKxUhGeHxrNM4Q8qgTZ1n1A2zaWjzVewwNe5tmSF",
  "key15": "37YkWHoL7Nkt1nuTnPbw5pf4xkASxA4a1M83oRKLzQi7EbUAznaRYmgrA5M4nkkCBfp91DJjaCsromG54V5qfLQ4",
  "key16": "2H2dNzao9Aw2f165m5VMZposVKXrbuJuszekT97rmGX7sKmDtELxCaCFtS2QjGEXfsFJ642EfhsDqoRKXpAEYUMJ",
  "key17": "3UHqkRpYmE9CDF3ua63vLNZGvvob4e2QRPMSeYps5S99NYnZAkNSJBz4BSv1DGxtWWQPdpcAZSTHJTdKqdnNY2Ns",
  "key18": "XLxKXCdoQyUcm2qv6s1dDJZbEJGGnTHb9GqHfqJVaetNVrvPgRHFmD167xfp1XDfdcoYsubugXkEoGXv2Gwyk22",
  "key19": "3uRTzgC2t3pLRHZQEyLeBsrgGk3iBbXM9t7NzpcCs9NjLU3aeTkXaQnQgk1zGoBqKvfvMB4RLqW2sLCJwLdGYG8c",
  "key20": "2KLPjrfdkouK72RJatpFKrZC9mfBYdfY4M2MavEusksha4r1Njc1UEgsbQD96NYfLpu1osdYsxrXtfMsDiRPm3bZ",
  "key21": "5Aw9QYrQHf8pFq2Rbq8sVrrqdSjW6d5srCdHt8vkR1X983PtHsbnYfsqpVs8Seka4V6JNiY6rQRZMoob7aVXkj86",
  "key22": "4TVhZPtyer52WUJZDqXSoDS42acCooPq1s9K6uQ2BxA3U4o3wTjjgTjSqA646KHQ7fT5ohUDyXcUiyLAw3U9LJDR",
  "key23": "2znzxdDfSCQHENgCdN9j5jeBHqznAXXpJcRVZB2rhGAUSFnhZvBNc85jnns4ygYZD99joXBkL3gtdsMTjvKqxZ6r",
  "key24": "yowTaEEJoppX2bDPbBLmueVtRodD6fDPeGN6eZacPTPCi6paZnu1SMjYPnmH2W6zLnAQ1gK57huxTBocnCDkLmF",
  "key25": "3WWdqyK1BFqS1rkLeSCXegdf1Dc3GBEoP1RVBzGW8DynqWnBm31ESpYrutz11GHQfExpCMvepXmQgicy43k67cYw",
  "key26": "3zByNyfVSamahx5QvG3KY8mRJgkeNxdWbemFrWfDBrEBQqNhPQjK6HGe1FjugQHeN57tLWz3dbky5YH3TpyJn3JH",
  "key27": "2WDWRqVz9Xxih2QXegz4aUX2uw16udasMLx5i4Twv1dMGw9s1MgmNSn4E6UzzDkZ44gnhgMhqnn8PeJ3y9ATBLiM",
  "key28": "4YQt7zb5wwTimCqfiuWUX2hJwNLpMuZe6gBmnmJjbTEGifNUYtu7VK9qgU89YpRXVUoVUyrWu11BxQYMB3sP8JH1",
  "key29": "38mY8HoA2Y1Nfmwxa3tZU6KaJDrZLnusuiArhcAzcfdKLL4XdnaQ1ufSxsiUxSqZC8Xw2zwcMh2pzs159JV7bbYv"
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

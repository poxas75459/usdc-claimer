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
    "5SAdF8zxoJmhjPNWSLBSUAxt2yDLz8k5K92DGsK9gQeLWxtjnKdFpEvv9hrJM6sqatJnfiyXR3Fdz2MqZZmgje7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GtnvD14xJxkxFvrTwMZ7pQK155ZQQ2mwZfrwbvDFDDvReFhgbYuodPDGvaeJiKps2LpRYwKADa4gP9seMJx7Mhu",
  "key1": "42ys6qJzSS74Py3qHqHQC2KD27sbjrbRLzzKbnhZWP5uiLatWMzKp6tMEFvinupXqC6qwfxCZqdC47xZhiGAj7bm",
  "key2": "61w5wzPtMuXz316qS6v2U1HacBYj5dTFMEvo7HtFqLxAohG9dvaAmc6scW26CEo9RUPrg6veB3jH7am921VuyYWg",
  "key3": "WtdbQDZdiVzqop62tmh1nDqQBhw7FdBVvRce7RXyyiCD1Yxq7g8WRgJ55znbe4iBdwPrcpxgCmhuNtH6jn3SVe9",
  "key4": "22ff75124Uziiv1A5mMRtXt3EeVnZQV65TuBtnpTuweoSieR8N6gicFoYQafg3cQj51mgU8VF5DjnDBsN8v5REpK",
  "key5": "PeGBWr6QVLtLccTVwh6cm3gp8Rs2MRY5ufMfjKkYSGrRjAb4SM414ovLR4rtURSM3Y2yZXwjXeUYuq518dJ2jsr",
  "key6": "367JgcNt5u8sm3LRcwjjvG2XXFacuWyELg36RztoGacE1id2UmNWXFRv4giLgZh6dSFcfbq3x9yyQC6w9B7uSASX",
  "key7": "2AS5WFwtrZnutG5ueortZB6iY4dUucowJu4ym2xRgsXTRH6FynQKL6VnqPn9cwrsjGa8GFuJCMp3tMNKqQHuc9fd",
  "key8": "3qmeRHENtMtbocqznjzEPxXJjDqHrrYH1KvdoGoVjVhUjQ4JTwpsqANkXFWM6UvoHJnPuSAks7q7hfwcgsF6UEmV",
  "key9": "qUiXpf3vkZQsKXk2evK48w7nT7G8djHUKr8TwmTmubYeyX38dEY3tfrifdRWPveiZbTs4DaoYBmi3GK68aNYYyZ",
  "key10": "5848gut4eK2N2CGCBWsRVrcgREnAVMv7sc8kpCMWRSDvEkEpgSwyToe87481CJMXfGo544bK5kZRhBqBZBf8uUeN",
  "key11": "5zwFL4kVettmqyiQaLEjzdGVFr3vnVtiBXiHhZopY94NXsKDeUZfAb3QHPnbhXDW933fqKd8dRUYR5c1VRzhbxdf",
  "key12": "3ufAvQZM3DjMwjYoh9CEMY26hKc7qEBWjoGL8jxa3kwW8FpuDseRuoXoPNrVoo9A84uLtWb247oVA2fpQCRog4E9",
  "key13": "2wWvg3Z8FHoy6KBDYFxpMFbZBQLsJ3KMYNtZZS7XbMRpdBZaASGqbifkESpmLAL9diGcDBtxUrzgGnnUoj1co1P8",
  "key14": "3sEipWU9AL4PVVHZnDhFQ4ErnQFhCh4s2YgaCxKNJZMSTE8wW34kwLaQF77nsYui9HfFCvyf16D1NCiy1acFwU8d",
  "key15": "2QFwLBSbjxquVeuN7ubqFogCrUVwgWMgPUbQYh4D7rcjEnFmrjxRp7w1QfXjDN6ySqEPGM1BM4CD9gjFiw1kbgAD",
  "key16": "5YDTtWsEYx5tffmX65855VHWKJbcYRAWqMUBFGSWzDWVxnp3Z2ZgiEWrChux9rxXEZi9cQKeCrE9JLDtstpf5hCX",
  "key17": "wWkCxobAFauWPgbqLk8rMFuFk8KmTfk8S1YbLg3Ea2qf4Ewus1h7yJGxTZf8CYbV8ZxY2pdMJEQWaDKhAnYpPf4",
  "key18": "567E6tL9XqVxwtvVEE4FPEkiNqNRLHsZWs8zFyTFHGtLbdYh12qxpxjtQYxApBbbPqmENzQi3ero9DTtPZr95Zy7",
  "key19": "3ab9ERrPvwXEs44kbM4yxkJA5A8Vht6RyC1UWiTC48j1Y75Vfi2pH3gcvjkMjGEfWAFwcSGF73jWeAEbjWNPvpMn",
  "key20": "tQSaYgRcp69N71efUcGqUs6UdiNMaYoBkKY8fVTFu2iFV7zwVRV4n84GHPwEALosAR9uibX8fSVwuxxZEkR3Cu1",
  "key21": "4CQ9eWvx1dWNE5zkKKgvS7Yr85u9K3zPGRbnjk9oqz28GKckZ9Hcjbbc9kmei1nKXYGBFXVrMcDHwTMVWy5ryAdr",
  "key22": "3FYkMHrBxGZ3Pck7GZPoyViqvwh231JuAwB9x8ACc9RM74HScCENCd5DkyUMwX3wySmwJh2bCe1xniWswq9LQhoX",
  "key23": "4HTNnxevMaCiVyDiiZCRFsgo5uHyddT1Ey9DMNii4GNrhW3LbJEgC27kkLZVaXowqVqFC6qn56ijuKUJSdL4Mxo8",
  "key24": "3c8osZvsmfS1ExVKLZbhh5QCnvpAruawKdhAv4efu1jbowUC28UYFb6SUBwNSXRvayAK2LyMheLusnDGevFvjtCN",
  "key25": "5cCEdf44mRFCaXNccCKLWwHGwX5fHyLB4x78pA5Gq3WgiDSvy2dDgwyj5Eupp5NmDcPhRKRHduADfoKCc7S13vth",
  "key26": "MFsMhaTwk4fCmqUyRMPr3zJ11PNJCtTMz3gGyF68UpEpHH9PS2tRMfTZYed9ogxXCXjHpQirMxkn2n5qkrQhqni",
  "key27": "3dcKyvg5pYZ8GBzDNiB91yVkHzcMYhnxxFTwuFJexfjS1Qozju9R9kAJMKyaJHZaViPEq42TisQnMB23xsWx79xV",
  "key28": "JtfEcmmXUf8Wu9S2sBrTEYGftU4oewuJyjpLGBEPNBu4nLgX4B9s7KJSiyah4iYvQhGpFZfhRbZVZ8EVH3ZagGx",
  "key29": "4PQHk2KYLQq8d5qcK6ZwEpEHE52cyWEQ2eL6ghWnjU3u6kctLpJLMUNLuq6RZFKyuDdW9myVMQGu7nPVikWt3SzN",
  "key30": "3QRag7EqrVUhvzN5U823ZcaGM63eETov7z9QwuXYaBCuvJiUMM8L4fjdNrJGix8QPy6p9NxdpFwJtsfoV6TF8h47",
  "key31": "4eub5kS451FVGrqeuAQqpq8z2CzuSatfsvtYi1VK5Q5eexLvU6uEHQ2vSU2T2qEUsdTd7jQ7BD6fDZFTHbqxk4rH"
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

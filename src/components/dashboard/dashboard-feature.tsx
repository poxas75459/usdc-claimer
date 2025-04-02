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
    "3yywz6qVGasWFoYWJvkAjw6M5yr4TffFmptmo9UFRLg7oARfyGDXMnjC4iUQC45qKVYBvNxraGgdxZXtoHyag3ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fKfbdcnjM7pj6RJQmY15gtcRmB7VfwH34QsaPM3vESL2C5HZRk4k6yQgNZTfREQMxQfuTBtmCVV8TMKMpbDVvKm",
  "key1": "2nqRGTCkUjXMyJEeFTKrzag88GdNZqgm92bWk5oBktTLis86u8ZXA5iKWPqYQkL5DkY9nzMDGDNSctdUFZMbiwc1",
  "key2": "5CjMkJxXqt6BkUGPS7akfnr3QE6A2L4MoMuMtvYkFjm8fKgtu9WWprD2jvfQAC6jwuL3naxde7rmcHWs4PFtatJ6",
  "key3": "3VfiXunJRoz3huQoVBY4neTrJFniEDkcQUviTPvYhwA1rTwVPCP5WWyquv3gJZvEYQMiJf2PuWmwmqemKKHH5hmR",
  "key4": "EkpwrHofeL9WH2VFEk1FqwMEX2JhN5ArTFqqkHYEW67CwZwkDpBM2qTbjPwVBkuHToJ6oaZ3KpkkpXw24K8v16U",
  "key5": "3gGqqFwXQsCi6nRenS5xAEcd58eJNUuMfd1F8tkkuWz8CD2oUojiuHay3GAUqawqgd1iTBcWSj5epj1QMdGdmgqJ",
  "key6": "2b4jbwGMYRAw24EjFd3fkcoitg37NiSaXjVbR6cGw4Hmgx8XH23kPVqgpyu2Xyc3x5HXbjBUHduBCFTmDe7F9rTa",
  "key7": "u8BGrcaRxMBABenkxJYVyfze1GoaAkMHEBMi5comkUoatvZykemeAia85mrwdGkqosn5BiRQddvD7dyEXFg26Cy",
  "key8": "5VDwZeCyEyVx9ts4kM8HMzZjEJjGwVysTveWsenJnuTqM2qqP8k2Pk5nJfJCpEtX19QTqF1WUsb2Z8hsQmhbyJxF",
  "key9": "5DsnT97jT6n4vZyUmEvYDgMwSAmzL2S6CTSQon7zuMsZcjzZK2WnnQeCBHZx7R4T7JCUwKcR3Y6wYhKcRReneCnk",
  "key10": "4cR6eMHVywCx4SErgnZVGzEvN8kh9C1UyomDQXgYs5qrgdxTGr41wLw5GadoXgQYwz5Q95hgEuPyMWbwYGwjMRGC",
  "key11": "2BbZDZCSA9jgyhytCCv8qRRSiRPSUB7cvhVRuvrEyV1KETQyiA5WZjH93hsWZPtRKUjZ1J2UPNsFCbqxAc2tjSA7",
  "key12": "ETUNzRCbFRgHemENpTcPzHR6a3HCHkLQGwohaCdstb62hjiprrVw9dkBZE5dT8acEFuKhqqW5Tm8af2ZoDWUYoD",
  "key13": "583EfAsJHeaoXkvuza6QrxQve7swqZxk38U9vg5Z9cG5PJYG3wi8VCsQ7FwzMRjLqNjG8YgPLPvzzP5QGKD8vCHo",
  "key14": "5VrZ8mKL9SwKbkRronZpAXrSCbFyc9Ey4zoobskU5XfchDnpKQD7zFKgyVWZG18zJ8ztgBakDRUcT67pLA4nEYyX",
  "key15": "478d9HNVQ49xLRfKDSVxnQCEF3e9gLZr1kg1NcFzd3vqspU2D3BX9oPEno7RpWDbdBjsrJt7RvQqSze46smXq8SL",
  "key16": "3Fk3w3iV5Ch7B8gfD4rjfQGPvoZwMDMTYwiLjYXP2aemmgMJD3JpRjxDD3sKtjrNWeTS37iDpBnh61173ZEzkk3s",
  "key17": "2fVsnaSeGqZisQtHKgamdNfyLaw7VVhWhiiQwEu4GtMtkPafDtVPqF2NXZrx9eEiaS4DANWLgtdpgDUiTiNNANaR",
  "key18": "W7ArUDZzWsoiEpUQdYXY4hapAb2M6AmnzM7yN9upKfbnrzo72tS7peJhJLAzXhymAY58J1FCPqa6upnD96zx2k7",
  "key19": "374enphZrPs97V1nfx2KMF7b2BFML1bthFk8pCi9CpmUmQ8D6gkAwgYtxQEmdyLdPtC7bzbpFzqTUiwV9gz7e15V",
  "key20": "5rfMadUYyG1ARt4CnrCzkj2SN82kWRWgryx3pXn2Lhp8dszEUwsRopruxie3zKWMRUKD2tK4DyNbNqzLhrdGpEs",
  "key21": "2uFdqp8cx5xbWZSSnvBGSjV4TkaVG89Nrhc59gnrH2yh8Zeywt7nrGc9CEMQZB5mKAC75GZCKNaTHHpq6NjSP8YS",
  "key22": "4LAxiETH8JjgFwywstGVNXGsuA6kZLxxi68BJuUUeaSqbtcv2e21QvJabTiBAag7mdGb2dTXC4kQVjLPb3y5ESTY",
  "key23": "4XPY6iNnBu7ZbnVpZdETmAbhQxYS54RYWkB7LTi85Nn4YwusCgNJErYb6k48dihnB6Kw27RoCwTQpavKNaqcaxgm",
  "key24": "4kM64ctNyxA6SoCgWTtWj7NCYfLyRcYwF6py9Zu3teRrvkkics1nbTYmbLG4JcWMVPAPEAtF8dkkhBNu2eMSuoQd",
  "key25": "5FwFusE5kTYvC7iBwSUBbdBsdHF5kJdCyWJPBPvoiiVjCic8cMntVA2vov633dpVsDpW9r9dciaeSeawBRAX3tcj",
  "key26": "3aFCTsCDgp3F3ZVARvJLV2JpCAyefnJ4QKMu8gf5qRHpAcYcQeEdajAGSCPezB8qyMKv3br2VkBJf7xHGWnBXP6E",
  "key27": "2kDsesNpbjSdTUTGZFWzHgP5pLoXnzmTFpJGMQn1aeEripu4tiu3Wc4sNTeoF8GukePupmu9Gk5QenReKd6viTpn",
  "key28": "4xcssbWBnrZMMPiA2qTx8oTVHsT5uX3bkE8P7uSdcxXUk2LmNJ5YGn51u5ksPNYkKgUBQgkKsmjnayML9WbAjVBN",
  "key29": "TQFSPHpeYLunUP5P3DBtMguNtdEueBNoEz5eN3ErJhV6HVtuKuoKQgwLZnGgKxscdp52t59qNCHHvkgZstFAGi6",
  "key30": "31FrxEj5emh7GJR9iWCmXKci21p5GdSEMotLRdXBeMRB4Be3HM1uqvCEUSwakVqjqv6bJBwXy26QBdDhzxKqmUNb",
  "key31": "2PJVAEwzv9ZAd8YZWLFdLaT2m9NPSao1nikavaWTRkXohVM9twd79CU3LxLpiQZzXu6mBx1tTHMsnDPumwcg8377",
  "key32": "KcthMEzNVsgnCc3AfXNgCkAa9VxiV5sHpBJCz6z19wSTy95htPBXpwp1Q12UWF9SRXB577QzmgQ76hTwg3tEZbb",
  "key33": "4NCEqh6LADCtWrquwqBQVfFUHdtsUydNTrGhihH5gRyWG7jjTZc3AJHC8EiLTRJKzx6ERygN9PTaEiZX3AJBgiXP",
  "key34": "3yBemEcPu3MY7p92aRghF6XEd77scVTXnmp4YGMs9LCxYD2k3sqbRi3tXH5WAsKg1c7c82v9FtouoXo9UeXTjyg5",
  "key35": "4jSJvpMDp3hA3uH9kQyygDs1keHXPzvDR4LwbfbrAMBZbwATgwXhAekY7KFuRDsXDiDkUpbU5CtzUU2fZ8uP8LC",
  "key36": "6JnnwT6VvpnsAhrPPUmdcoHW5MQq3BVpUveMCVbacQN8Terk1vPWW8ekEcFt1aVJZqqnE8aWzqvdxFHdgwse1Kp",
  "key37": "59gzFERMqBE7n3FTpg95RopSpWhiWZDXc4eEkzDynUF7cbsYicRAmJ99AnBSFvRfvrhSQefcW3AHH3Tkpd9JU4z5",
  "key38": "5Hqadbgmj98FspPuW24pBTX364SQzFQLxF1XMX9s5sBZ8DLascevzbzsbBSTBH2Ta7RdgTZtW4FFXFza3PFmUoGL",
  "key39": "2hd15RgFqUk3Uorbn6ohS9eD6z6PSMP9sxr57osNRKrG1DK1M2CLXC5zYG4MjMewCaMCzMvNPTg8SD9myLCdECNt",
  "key40": "5ZScFuDx23daASWFUXNPT252BL1RuNv5mr5GgYjiZiVvRfd6ZQb8xKYdN6FQbTeT5S3z9qu4cKYXpokfdSmAXU9p",
  "key41": "5A4ZQfdeGJjeErDy3ThKJ316su6qkiWzNRVUx9NmxbAwiicCrjjKckkZULsss4R7oVKdxm1hC3hP2uihLzz53MCY",
  "key42": "2g9vCZpPKM45vZ8RzBUY6gV4EfYUrYLy4oFU8b2EKgftnS8AU2gMbFKz2niQG8ZcqyXZYes28jYV97betDyAjrQM",
  "key43": "5LnZJNBHiZeupT6pjKFUJpCWf47jknVbpzkLHmtxwhdBhKbn5aa2Cp6rUM8cFGgPH4XnPomUT85qMezSzwxw6tjg",
  "key44": "2RPsMkzUZLpa6GNzyxDXPdWoQWQcaiWg4GGK1yLzajiyLrKpqR8PPWeWM7D3yRL6KDyStrsJN6Au8HuqWMLjbKN5"
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

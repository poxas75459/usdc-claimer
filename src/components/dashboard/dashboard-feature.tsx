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
    "4ZaiwceVfvcagSuZXrrdHF7SrcdYTEc14NSKJSwJu1PNV9hiYJB4XBg9Q6yxqRfmfHP87m7g61eoHzengdHyeCsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJAoaTfD9ZtMLgsd2gBofLhPKLeMf6nqh3Ujvk2Hts6xJknFJGoFHg6ubDySXXq4k2YvcbU1vZF7kLSUcRpPToB",
  "key1": "5oJDLqyHwQSuRqQTBFqhpb52nCz7nMMKCzo7KUoHVrxEiHDMy8bhRji24gr6uNzULJqJrZRnyoz1oLSu6ZtrekFN",
  "key2": "27Ws8jNtywLSK7bgP2c4EXeCNtZaVTHvXvGKxEZTshdpdJFyRBAXtwK7VhGpWwyhDnYUvuHZFsvGcjDyHsJ6rKuD",
  "key3": "2WxVgY1zi62GXFp4K6aR7pz6EiwwzDQSJh46U3iEyKtCFKk8MPbDBW17F1JfxBxZ8fQwkPVAixBVZpqJjEMiZaH2",
  "key4": "5qL8A7PoZcKQXDWd3bxHBrhvCxzdctimHpbM1rnh7aKFtB3RyzUbMURVgzkoBcAPsGi1g617pMC2K1gyN4fwXgBa",
  "key5": "4fS58UeVuqd8SEBGkyWK5sotu2ikpDy5STCX1JpctgVdzbupkv5SRXT1FZneLNqtuqmcBpPcCuhdEQyc7VTEnzRK",
  "key6": "64dzH7TGxCisFMopFDoFgi1XjPuNWNzy7LfTcyGwrYVPnuAvCXC3YznhbrpedtZu2vpL2LVjbHfctYa2NgrPcNof",
  "key7": "2uSkBjkmxA1MTUkXv7RxAjQWtoJEDogjRbAqNBTeVY9AVkQG7hYvZUXvFRZdtLaJY6pFpRPLqWdh7DpkReKho5Gy",
  "key8": "2yK7ZFEGo34t5TCqeXi5ksUSmMSZsZKWzBMQpEBuU4gj8jVzn7nWhFDweA25uTFVBhaQKkKKQgNpNYi8gwh5Rqpx",
  "key9": "2TKtTdBf9VUKnK7ftkNsh6RNML4nm5NsUhJHMDPgrJq8bKKaJnabPxCaDUPH7ajFNjNwrbCJn2mgr5CQJt7eEiGe",
  "key10": "36PFdXDoT43WDKHE6mnM5DoSJGVMRwaq36Udb7iJCT2c5bR83EqrC5FJ3oBcaTynWBXyowjm2ryJnntG9H6soANg",
  "key11": "3botXL1qPZZaJBLN5vqXX2HpaJVAB9HW3ZKafUaseVk1PWPUyXhxRBmMGBF9pXMmZc25yxDbUywY465iUQggkmph",
  "key12": "3FtBjPNGRoyGkKUMQyLFtSixysoyxGnpoZFN8SqYRojp4Bsu6dWbv88CQZPhRMDJ9YLB3ZpyCKFD7hrXBUE74f1N",
  "key13": "28967NCAVa9CsXqHT6PVmSuQrup1YMNKrCHxLJuUUTmgnz5e1zcwiMrR5ZEKPa1gkC5NcAEhcE4ynXLH221GjXH6",
  "key14": "5JsBWHEvnyq2zxJJTcoVdgv9mcfJRSVAs7kfJi9ucdbMDK9RBRePAjVtyqwNpBhW1AtMnvg4yQtpWSeDBdgpYpW6",
  "key15": "5MUwAPkNH827sJyMVRHF4BpxeUbUGjAFiruPsQ19CJWDq884KG7kfvNeBRFYa9s2f4RkoVScLr5xrVTJSExAoUvM",
  "key16": "653VafhHWnmpvhP4KcigyxyxjZYUTzozQyzmYpHgpQe6y1sYf1sKeJMKSAFfWejocWY9FFY44zTq4YWYeK3PqAy3",
  "key17": "24BEu2pMZy3EaW2DMo6EJxCQrzaKgPmS6RkH8d2S198iiFF6VuQj8Hg5XLmXBhxFnTHYChw6Y6TvLnD2yRT2ZnHn",
  "key18": "s9P8pNaBZ8HfQ2qmZoG8pRJ1XMQY2pa17MDoDiWN4Uie5qZoR5tksUuM6SEBE6vuAuETqoBJe8VHK9Ry3wzWpds",
  "key19": "5qTi4WnadU7Cd9iKvQ3jLL5XRkhdDudYjGAYQRvUq4i8SFrtArFjTuG4K2oHm27qCw1mrnoihGqZTZrwwHNvkX45",
  "key20": "3pU7Ew1dJNBeCHcvxmLwNWkTHpbcxwuM9P7xJMwCUqwD8q5o6ZqasTXYzcB1CnJzLF5XgAN4EshqoboMSS4ggaCx",
  "key21": "3RcrTZYEmzExZqeL3oLTB55qm3D8Hf2m7v1hYECpwdpDXjXz4AyQ31tx1VAup6uBpgWFEMbqu5Tat23qo37kHQQE",
  "key22": "28M8mknuUZvanRxchUno9RMUb7ENsRnjvoywD1GgSNCgxzcP9347PzkicYazFCsTKBvPfBb1u4aBEMJ9avRrpxWT",
  "key23": "3AE94A7FGnFTaojDebxigBRnGusizKG74tj72CxVa28V1jSoSG7u26wgxSKk7HMx2Uu1hpcKAcsdNVWpDBwPZ6Ej",
  "key24": "3MezTm85mEnWCAhC5X25YJDDo4yaqA3jNqCouv5LQiXDuUd24TW3An1VT1qH46EmG2DFiUA52cB98dtScsDisCtm",
  "key25": "2yi9FLLVLYcXYW8KAUDrfQs4hDUMHWfeYvWcmWGELMMwNr3b4ikgrajN9993vqCct39F37zqG3yyvRCBwVb6e6z3",
  "key26": "2MwWnNDuwbhcGC42WAYxVYAg46qpdqmk4Ur2KFVzoYu6drebnGrtqZXSkWon3CN1Zm2NwbkoPWioR31dttY2gy8p"
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

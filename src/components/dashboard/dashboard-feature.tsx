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
    "5SoG1KBJ1LCRM8QC6zXYssiT6PWYXgh8Z9QNuE8bmcHA7prgcvFqVRXvvGiTkzvxerhnkuuKakqXeit3pJyuSioD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VVcjDEf1JrToFEXcq6hhqDS3dpdg3PX6Dej68JDiXMpELbnzoRAmhCsYaC92MtmsoHyfhuU7bcuWrDuhdGTkpp9",
  "key1": "XK1Y2x1iysn7kmkKpp9YkDEPh49Gyr8nvoUabWp2Z5vfhJt6TKNLSCwLVHkzcyrR4yKjf9NbZNk4MhXfihNt6T4",
  "key2": "pRomVxymgNTbEUhDEPwdKT8QKfoedghw3po8NJcS2q7KmfM1QWYGT97LVGtm4v5q36pzFYGo8Hepgn5czGUfR4t",
  "key3": "66j9k2RyhP1BLCYV55nXrgBX4Md9njk8VTpBg5ZLe8AQbEKhh4JKLAUnmzFUeibgMsEEsXTp5TCuan19HeDmRX4b",
  "key4": "2kNZKbiBHq4YWwu7CmW4GbGu4guBh5o29d4UsoA6RFXcZ2mcq9Hym7jHpt4Vej8xV21UmxYhCdPYi485ZCC5qG7y",
  "key5": "5piT8oeCvfqcsRRh98MDyT1jkdqWmvLvGbnMpfkbGMu9TzfKz9ghE1A9djEPnueZgrgPaC1i9wL9hSwYAKpVUzEU",
  "key6": "51LcA4bvRHaav38MTta3jEttZpGh6Y7ee1P9Zc6E9ptmw5KXS4JWfpkcPurbQNxg7MYNVXQaQHyad3tdkYC3CEjR",
  "key7": "5xDuGFBfaqsxCx9YadyrQyfNwghBpAPE8knb1A6w9KxEEDa8SBQwTtDtnxK6JWDXD78aLAxQXtRCA3kXJRecWiQb",
  "key8": "5JbrvaPf58EMcXJpJhpRqfQnGzDxZDva8hf5gx1itPxCc67b2PrFG9wzXWiR2GDwYMZGDDerMEwWpSLH5NouC6Z6",
  "key9": "2cRG5wqhxovC2zn2e3yVZDyagfBt5Jy1y7Yzv9Ztj4VLFGaXz2LHdiU7gYx7xa3HjHebNjNgAeZGMaL1QoZA2Nmh",
  "key10": "3aJQMnYZkRZbiiMVLVcsfoFXyAE2ifWKaywYejKi2A1jt8TG2yrMZAy7PLyt5TDYPY5zTu2iGMuS4tmYdfi9RH1m",
  "key11": "48Ns65EzjUnQMKFsPQd1rkWBP3QUyL59U97Ur9yFg4oLJhV51ZYsT1qAZecruk8zsQMHthrpzK3duJAk8LUPCfEC",
  "key12": "xM8G6HqmGhBUU5qMixxGiWij1SUJDrYZNnMdd5rs4WZjjVnrjZeWMs6PjrZZr7Cpk48wkh1n6Ya2NkKSZ1k9tZo",
  "key13": "3SWXMadEwdjuasZuV9fHhAtST4bo1CKYvAuKShQ8wXv5Y4bF6rsPx3KsnKK5iut1APS9y76dX7fL6srbeoSJsiA8",
  "key14": "53uExJj9xD4MascuhAnk5i1K8EfgzaXaN6sPgefUZp1NJ2oKwJCaL529HDBCTheFZQnYgP2ww7ucW8eSppp4DqEP",
  "key15": "5gmzKtaQ63JPSqBcbgtUUcz4QCh4WXhiTR6P4gv7tvg64VhPki1znML3RodD4ECoayManUPjAmApftp2GpVen6ah",
  "key16": "RuYvh4eomVK28FCQsp1ekbpdqZxx99RGkTNokEFH277ESiJijrwhn6qLuiaBFWqP88EsY98kcjUQodrXew5Qg9A",
  "key17": "MFcPkCuHgR12yjtN3MoSTXxuKJTU64imRxNNGkJXcGuNqVcLHzNc1UqReQ2DTkDLRvgNQjBAFwykcfEcXrNwn4h",
  "key18": "2dZpWYwwmpmhYuT9QMKcUkrgwuhEw32xR6dtTcM9dy8hejy6ztX3aEMb2sUX8jUEWaHbC3H5VLXraZgtNeVVwhST",
  "key19": "4HoAHfYDuXyeeGHKMa831ze8owGw63EavduLxEgATEKGQKwYdvY9h3sKEwM49cGgjsSPuDdG3uB1swHtNXPo9Z9D",
  "key20": "2m5KikyvRcuDcaQiuKAzZoSacRWFr2Y2sJrAgvg5f8pVk4UPMGQeto3FpvL2jjsu5wGFkhXPUFZkgRGx3Rv6oCfn",
  "key21": "5vHf6tQNpyK19dfG4X21QrXuxRA7uZQkHcAbZkir5U3hDEwMbKgdH2Zgw7HqhFbQhoz6N1kWfCCDx5DbBgc8mSP4",
  "key22": "62ZefxfG2Nsii724iwsfXTWx545VWL2DWmemACaUp6f7oWG3e9BLVGyLZJ8CGbPnSxVmMe5BfXQEMhv6BeXw9yHn",
  "key23": "5VnhYtGKYpQinJoBbep83zwfo6xcMmbVpNn78sh6iwSfsTt81tTqsTD9o7CW8RiC2bjQWxpSjHtVMvaCCWEU5Fmq",
  "key24": "5WmjW82NYbVAoU9JM45sCNAaZ5cCHFk16pitbr468Rk43eydLa2MXZiVQnxQDuzhiCsBhhgyz994AGPprzk4Tuew",
  "key25": "Fouqa6GszuEAgNSUaXomemibP4XiSmU61ff9qkqw1M1i9ny8zN14Q1wrof4oD6WkbBB2X46vfyoJdSy2pnkuaJj",
  "key26": "3tCtdYpRrFMeZT4dJonvgkbv272nFyvmdhitJgmBmc1XCxrnQgmkD16nAUkwY2ZodKg89R7x2k1ga9m1XDSEY1wp"
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

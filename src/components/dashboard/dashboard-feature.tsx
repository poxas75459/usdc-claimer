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
    "Vn6KqF1sowZx7mPLtEFzEPZUwdfvuWHv2gNbT5ZG8gGytFzp4LkdUAiF8KsWJT86w8YnpNqVKSq8tnVD7SfQgvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCsBzniisPiYkTSoZ2Q6uwimaYW4ejbHLLvMqxS4hez38r5wJmRZFFsrvFKKptCjHDYWJfotoYoaPxFMn685q6f",
  "key1": "53c4ZdRTrtQsrzrB96tkCnH3QYWWZRNgUYANCkDebxdJkf6JYrqfJVjYCXFexBqaLfEZEHfZaZyJA4WdmuJq6YAn",
  "key2": "RRCF5vo5nHEttNuy7nAYP8vn9X77iTkzRKSRsWFufTnW8cekEpykWP31W8HH3C23BU3uEhuBNKsYE15dzbiGLw5",
  "key3": "3BtFvBf8r1cR89EJMMZPLkNYtrAEtLB1L2sRT99ajzRuoupAJjp93BgAN4kaWKswi6WiwgRa43gmb6De8wQNCprP",
  "key4": "3URU8nobDzjmXY3thdXMqg8zvinax8vpnYCe4Jm5LJrnUXdjLmK4hbcy8upDWcFCbnGsYaKDSNCzFSBCd762YACo",
  "key5": "5frv4zHv1gV2Wy2hsrtAQaGc6k3h1Xkh6tBFWyVBZLifeQkbpZQvneNJn3QJDvcvDZHpgxke65hEGyQit4CgDeQQ",
  "key6": "5RuSEKz4cmCWerWHsgCtMTxY3gV5vX7AePCvFSp4DgPVw8d9UVHV2uxhpfc8Md941WKbcoav2niVMBQzU38k56Dx",
  "key7": "3GhTxvPgqCrdEJuKSknjgVDZDBQxDa1vkobGULKfc66ktLRyXqRSLWMt9TPsNLnTn1FXihdRMKLKxSWtN4dXGAa4",
  "key8": "4j2ULotsrpMref8qdgyQE6dcYuKpv8CtJ9xU667vsH5qrGSEgFvdxVkWxsdm5Ptn3LQmUKqUAqTcnzjTkUEjaxfH",
  "key9": "2wRi96iZMaXgw4q2ZuFUPchskUaNXRLJEedThxZPHrKbhpFngH75vJakWPcyXFmcmWQp3oUscP8yKxDeW6ZsR58c",
  "key10": "67RZr6dzuPmfAbSGkMvy7D1Vbd3Z8EcDP7QVfCW9F7PZr8UcRCq51ixnSjzNpYr2NLC7BdgbS3x495aKsdAvTxhD",
  "key11": "Hs5BrHERjGFbh4bmqfjubefsmGGRgcBF4cMiwiKC2cmQqnzHvzvNo5wMHbS7PBi8wsm28we9Lotdhpvr89EocD5",
  "key12": "4L2fAVqXNfDYsnSHkfi1QgWR7NbSqoLfG8sD7hVKHG6XvV9xXXPXpGBu91hfwh6ateXXZJQUTDX9jGUXzqNXmrQE",
  "key13": "3eMWSomFzJ6U1P2HVPKCdGmjVHWnQKVMXVhxwZLNWJkC6SnDxwyoSiPuXLtyKiM7kteKinFG9niC2JJNzVq6EXws",
  "key14": "5ZZQxR4eM6SSwuMH5eTpRZqmX18vLLe9Dsc1CJgcfZh6RCSz6bv2uM9rkMDkESoxnGtLq2zM6Pp7hYGciShvLMJv",
  "key15": "3Eo4zzRHK3bfvYSmU6FmQdg2fBKSYdCaieoCsBUyAcfC6uoo2MpLzSLDQFJnT9vHsLWaTMqwF1xrgXHhh1qHyLja",
  "key16": "32HJhEYKXghZsUuD86yE9aTPRpfyGX2iz9ZgrNqZVq5V8W5hsimedyDSoB6bbtnhD4vAejbRg3HepaGtY2f9YamZ",
  "key17": "3dAbjVrrvKkLR7Fm6hFb8HTtsCFkPtQXE38692UKWe2suuYmZwvs8SfdFchZVn96HhFr1FMzLWmxrzgf8rqFfVdX",
  "key18": "2QDLCMbBAm1iEdTWgcfkqmeGnboc2Y7tBrWnmnyp5Z7EPsju63qNj9Xe7KAcR1n4NJpbtxZD1BWjc7y9sKVUYxSF",
  "key19": "3NoLmKQNMacTMcHSYeBU4EaLUQjYn83dJCYjGuwCofhgGkHdbsDhn3gTTyiQs16AGv6wkbCJ2CjWfoBmBYXaNevD",
  "key20": "GykwuNVtDzvpVL289MeMh5LS19uugL4hfinCLQa2uGjimaYzK5zjzEoBZQY6uDBJLxzxwj2gDe9zMh6nNEbkKSz",
  "key21": "4crB6yzHbiYpgHZBCYPXHi8qcSxtP3Wq8WJ62G1whpZVP6ZoRaDDt6oRQfRrmkLpSj7FjuvuALsdga4p1a7vTjQU",
  "key22": "5ei2psnQJwMivBiuKsEwDZMgJ6zyY8CcJwWytMwiNd3eBBgmvpucHe2LCkJSrqAFM3tmAE4ibW7BpovRGG8xuTiW",
  "key23": "47ieqh611RD84kvCjyNU9wVKbmHoNDddcMWxCtDGpEfySwkcE3wZCPXVt8AZRoN9TQgdqkLmhE6UTjbBeFbc9afg",
  "key24": "51LimdPqyaiZQDbsiprcgQb1fPqDSfdqbzMsFmmGuKakkT4cSBcdiiP1dh7ezgsxxokXazpL2QiEb13y2QWKqHpx",
  "key25": "2DARKhkRK3VsPU8xHDMu6ZJDfxCfm4DUEKLL9g2NxCnUfBthTRVHZSejrs3R3SwCz3RfPcGg9WNFP8S1NzXzLJTY",
  "key26": "3oFA4oGWo4RPNZ5ZgcvWD9a6WwEAiJY2NwAvDCnoTLUX24meaGsL1HGgHoTMcGWRUg2RAR3FkmvJN4jDtgo8isb6",
  "key27": "3WGGH1L1qRnafMmfXeYkeANxMrsM5CLoudLzzEd3xp4io81mkEXRq69GCtfjhscuHN4zYsnqzKkCa4dPktC9sV7B",
  "key28": "28vZ4WBNziCCtX4jziU8MZaiwzjwrhgNUbA5fPzJGeoQJz8W36s8fgL9w8jjic2NBze8Dcgs5mSaTzDZtWX1MNBv",
  "key29": "5PZGfe9rsbvJVd74ZWV2rfsadrGSnAtinEurAzcGrBEVo4FKjiYANYTg4vYyXa7WdLGv3yWf3pZXVvdidAMomRGc",
  "key30": "3qdnj2mDUda1kQ3en5Ju1JcyZ3NXRXr9Q5PiiAk8asRXrTrf5eZb42SzG2HvFRPaf41h7oM8tTwK9GCfecJpzNKy",
  "key31": "kPqym48noXjZoDZDZJKQHK58FdMay2jSVVwZqni9h7RJQiWyV9weSDypXCca5eNLoXw1YYDVrqHj6UJ6BvSE9dm",
  "key32": "5ccdpURrZvo8Egr3FD6uF8NHRYC9ucGAnLCQG6b4sg3yGr9cdMoF27zUXLRnZyk3554NCQtWidfBwbD6qSRxa52j",
  "key33": "zg6rtiTQ8TtT4PQkz7NtvHpzHNa4tBVDhJExknitW4zvCQhojS486pLqbceoKonBK87fLaRNMw42JLTzV41Esp9",
  "key34": "4k2Px6bVeHygkEEaxrid7kTzDHwKkDij53gXx9d4MNLFHB4BNM3y9xvtrj118haszM9qjnGZmvrzJaCqeXAU87r2",
  "key35": "2ScaHcpaaEYRSQMTvcE4pfWTYikagL4cxXQmNSSVDtGaRboGa1wYoh8T4YDnmA9KJHk8fJ1qqWhk8WRMsR4YoeyE",
  "key36": "RKoWdjSghGEzVCjRzwWhsw3kadvb4r6gwDA3BgGUfaBLwV9qdxoewwCV2kaVng5v8d3GsQw4CnLf2GZYh1CTHuL"
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

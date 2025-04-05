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
    "3CHxaLrVETDgbKCNG7hZPFmxNPieL2rguoR9nFBegwbzPYwHh5sWAmEj8vYtUM1hbcqoKpvcGZNaHWz52VVJU4jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EF936tB7NVx8cTtqeiuHXVA5saf7QHh84fXrrmaBtPhprrUCWTRw1wjwHco7FnN9Sg6EddQDrZctN4tiRynFEyT",
  "key1": "3ovoqYh2oZCZrAbvZksDqJBjy9otdrYxnw1dc5k4qyLHPors8BLsAWeZ6TU4ZUE3b3nKYdtgB8tYRB8yrsUs7mHz",
  "key2": "3aC5QQbxUeWLFLe7yA5AuWe4YHg3L99Kc244BxeEb53b7kT2wCz9G5RAzmGPKNSnAtvWfcKKb7oAUqqtvq3W7sSZ",
  "key3": "3zBznEjbYqzQutkb9xjG1WYYAk9TZef6RrpbqaScXJ9WgVyeQzqDTRZCa6d6xemAv8GgmedjyscBQBXjk23FTTXe",
  "key4": "gDHHXj6n9Y8etUaDtUWnRE2wDy51VeuaLmzFwcFXe5CpExdtM1SrxuA4xBprTzvAuD7BE4CtwcmK7Xd6Cwrwy45",
  "key5": "J7MZ3EiaRMSkPnSCMbKDcvhJEtGViaaTf2ikEkMcVXgYWmy9jpioRzFKjmCxjMUYL4Sc55n64CBP6ahk2oFxN2r",
  "key6": "tpR5VpNrTDUitEfuZKkgZorc1hXgHJAoVQuwukVm6i8Ae8Ea3dJ4GujTWncrhAt7snUb8PGK9Q3VcMkYQQWbtXr",
  "key7": "5bvssy9oAr7K5UHprJFRopbMkFaJxrpmQoRkzGLX1awpnuCWhGZG6hnJvKLSw5NYYegJWqxcpKnMDecFQ5ypY2GW",
  "key8": "4YWDt8mGL5Eq8ndqZqys1DZMfThRq4EcmDe52FukT1gpktbPT3QTgrL1RyuEv4beYBeLgFMkAu1i2pJw3qkoN9Qo",
  "key9": "4TFphaVmFv5Upjk9987F6p4UgdxeKFfxErTyPH9zVPLDpD9UDXmtVo8Q6on2v6w1xSYXRPK11BXydhm3mwLmuNmW",
  "key10": "pt7skAYFYPFJ2p1sMmrYe9UhGZ1iBZL2YQVr3imcXfLnr856egD36rtTjBBpnVVVj8vC2E6VdZuB3sfzS61HcLG",
  "key11": "TQCEBqEeJZ89ex2c4XiNsHHcf6myBTLBgKXNyEK42D4Lrhv1XnG33o8AcgoEnpnjTj5scvzCM946pEeXoWqy8ZV",
  "key12": "2ntjhfehpZ4hLmHkiP7fydMQyyYGEc1L4mM9Tiq8PnRn3U5Tg8u4v7KT7rT4YTi84PZps1SBRH9c1HXjuHAU2AVs",
  "key13": "2kogWRPEhExKSdeQ76nzdGNdZqRgGfkCzf8HkrG9CHukVxW2LXDYg7SEw44XxiFtWtFxE2CokDsuMgRTPP13DmZ4",
  "key14": "2pMLJwFGHPJhsFArYKZFqMovGVwT74nvjWB6LjanJgQGw8jdfoVKvzjDmNqvgZtcyGfPebprPKFiPh2V3TEAuPzM",
  "key15": "2S5oksj8iuGhvy4U6A1FZvkoDHTRQHT1UL3P8bBySiK2XeaHzDJm7uBwmb95dvM1uqTHP64ycudfBRvAc9JkQTR",
  "key16": "4AZ6EcYgkoV35cBtKZ61eccNqGRE7E7Wb5JuJckWeqgx71oxYPnKysT5V5tiKFUkXP7daFrjJK1Up2afQM1xiJrV",
  "key17": "4kCmDW24bLrNz3aBCziv6ENRyuzbrsuCNxijWNMzzdyw7EmzV8G5fV4FKtaJKyqxeyTk6ecUEt34UyG4AEmMHMpR",
  "key18": "2ZDm1iuPKbAgrQrfxLsrTdqrGMHzJ3wGLyPngBWu6wYXpQR4UK1wYZssjVHUXDD5FSKHmBiZvXfJrqTFpy3iQ8DP",
  "key19": "3gD2BENHhxnhpfuCMXXEEphyQPTfnmB5jWWYFSGgKZy1vvxTVxzygTQU9G91JUsjmpBTAgnchnFAy9xA6agxzKzq",
  "key20": "4tk1dkw5ZNPUjYvbc9JNcd9K2kSsQfZKC8J1zCPELejnPdf6zKrG9GkgGtx46KdfiLjFDKoH3H5DA2xzp7B1U3DV",
  "key21": "5BWuVvwusFNcynvi6qi5biGzppRzipmUzF3N93UxXjD7qutCqZRKSo6PWJNf11Y2SBg2fmjaRJcpr6t72D5Th9db",
  "key22": "5FAzzKYAZiaeCFj9eVxee7j6C6SxWHggzaiahrVjftd1FvxzLLn8WU7D6HS8VrNafxERJ3kv9bWEAbnWBAK5wJv4",
  "key23": "45CHdEZ55rLxjXWr9Y2VTDjG8sGWc5dyXiJoRzkhSP2se5msmJTz7CYQaXyuuy6QbmgyBjAx33jvPhkFJ1YvrX1",
  "key24": "3C83jekQY4ZsWa1tz6znQbsvqMihgmRGdHL92YFyHXk15CoExsCHNNgStMgKTFqiDYteh7PU4AjfQ6DoYJNNVQRy",
  "key25": "5MRD9yLMqSb6k5eLMELMspLy2GSGbVqUyiB1JfMTLLtLiySbR5ar5hvoT2MLB4VsSo84XnttP3C6tpXBSCqZVB2R",
  "key26": "5x1anPZJUHLUAmhTUUBhL4eYzeoWj9b3ix4JqZqiEyB7Tb4XVjXUqqzBeDUvC4Hn5p7Dy3ohsYN5bu5pkW6aECaz",
  "key27": "L83FMf4dsRqucAgn47Pb5BrCKqJwCBXnqA8Z6yCpwSNMHQ8ar2gMAmW3gm8LdYHKN5mpEtqMGhw9Wg1cVuLUwhS",
  "key28": "2rL897XmY6sBwtqhSFGo7neiuidzZ7MPCJCCGGjakHtxbKePVKtSGtH8884VjcN71HfFzJs4Q4EHo4K4U36JhHuK",
  "key29": "2dVnopx6Rog92a75xVd95z6A3SrUwAXtNnWBof7k7MNiY5W7C6wx7nwueH9rRpDz2bdN5r2qsmbWcGWpvGLNjbGM",
  "key30": "HLMi6XhVsfnQYEGZ9hkWqc7SG62YiceuMnJ1ruqjtEX34smF4SZZ8whdmxaLS81AhjgsGYf9hNhtcX1j3is3aRD",
  "key31": "2NbXt4nN3TTbwtQRN5bJGDvxzNhdV83zDzWe3oSvTMG6ZnhzPkcLdEpS4HSh66gyrFmEr7bjuANHRNfctSLu4GiA",
  "key32": "5HTwZqvtBEL7FkE36RXAPwJasy2cfnddNpcS9sX1gcYF8DhJkBwBMLyW8osxFXrWzBtGqF9QvyBVLv69MGtmHASB",
  "key33": "47FJu22BTqqUc4FBihyZC2EymaoR4JgFjxh8Cmfdgv1mQtiNDFkkU64QyrxxnUHyAmft4ikXmc4r91McwSn4xK7B",
  "key34": "63rC2nPVUDbwtEVF1mZjxxwDB3PZi2pD8QeXAAZvrw5ysT3fEtv7w7tRK8g3st1YE7RZsryVXtrUHiph5W8nbWtp",
  "key35": "txBTN8J1gAL68Wu3RGzpALyyvhRLRHc9ZCSfTkfLUmVtQP8bBokwkBYUhkFk2MWSqghPj8xyWe8T9HmpsWnX2EQ"
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

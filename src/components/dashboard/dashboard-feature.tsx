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
    "2r9DoxN1r53NNv7sPyhJgou4zHLiQTCcKhvWCXuk4ZsN1psUZALhWcraCtmFjL4cSW5PDEtZ8P8cwtNBnQmRjdWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EvxNHwWmUywqkGhhQPjbiFRaf8Tstx3m8yKfewHE8DtL47nbRhbZL4QW5QCSjsKERC6RmtFwxmE6kn6Ai4RfHpc",
  "key1": "3q6hzTJQhmBUhrXukMasgJE2ZLPar3eotR7kxm8FYqmsV2oHEAQK4R3bAgKu1Pywb8SGfkpFSr7jZ4oJAwNuVWzU",
  "key2": "3M834E5dvuVxjdo1vBPfCt83CF3k8E7YzxREMtukoEEhA6HMBJrL1xpAu2K9XAijs1agKLjfh1iWHJC6xKtbcVTZ",
  "key3": "2AcTdYpifXvPHwba4RBw71aiXR9m8TbTTZswA5p267RZow6zHa7zPbQLoKbPoQZR9En3tidXzabSVw8nDGCR1wYe",
  "key4": "2bcS26umYMzSyZ4aQRV93pNzPEgJuSP2AkeaAx8kcWRgcDT68nEcqNcbPWk5KWYnws5suzNGH65tJo2qft7NSX54",
  "key5": "3md2AP5pHEx1VWocEJczntKp4JJzhYkW3CCSMD1kmnzYdjnF43RqVKKscxhYkjm8jAp1rsNHnxWLWNuCUJVXA5jG",
  "key6": "hx6KeZRZPQYkd1bGEUCbhf6xPfXLBMG89C9CFycxdV3vdgYSjJ2ME2TRC2hDmwQmRQGGTH9Lx5LJMidaZV6Khjm",
  "key7": "21XsA2AotzhLWv6c8BdB9HjhGUWCNNL3QdCMovw88kkNy9PZRrfggD7ey3S9DYbG2XY3mMtpvSwAeyCndm7Qbafy",
  "key8": "nQSuYTCYouN64sCbt6s9ZmfzvLxqDpX43xdyUKnnLBYFtFoBHhVLtbFHp6y99TzSfc6e6YVHLtByaNvEECWccCj",
  "key9": "4RJyKFopAS93xr1fYzezmEMv5VMUkCJeKMGsy6fXxwAK8HrL5iYPAK7xh6WMZKGde2PNV4GqtMvSmKM5eM3QMZjY",
  "key10": "DpfwJqU7t9uxsftUHrrVPeRohtyxBxJFdFWKMN5arkoykxZwZ8APHffe9PAAvFnnN2D8hP8v1TxpZcpTRbz84Pn",
  "key11": "5TX1AaDMDqGNyRVjW774zrTCAyfexLafKeExgLXPjekUhGxpVGkzrvq2Gi57GYKauvkA7ZtEgR4ZEHysBG3miB2p",
  "key12": "5w4ru6BiRqLh6LSah6ozkZxoRy8S3pirkDVAF4U9zASn2DNJ9yoxKB7GHcCYyt11prDutSFeRW8hzgQ3JDNqKr1A",
  "key13": "2mp3Fv6AtAHDubcYzfYNjqGGED4ZJy3sfFAbf7QkENcYrpJ2SUGMs2ySQR5mrg7Q4gz5x7YXxTRnkbzwGQtrQX8s",
  "key14": "kF2kgbHUtG5q4EpC7o5xmSLbbvYZmKa3xwSYGuqzBDHAnXgW29c9CHD5QBFA5mshkrrH9pqrrurLECDw3tNPwMW",
  "key15": "G7BeUSJPu5UVtkMrJAUhprhXxUscSeEBrajed65hMhXtqLc6BoL294ViJXNwcMnoEm7zsZsWaz5qwo3seVQGoAF",
  "key16": "3XAbjXTF5cYPcDXyhKEMpRFhxdRWFocq2AGGg7LDu7PyEHx8i2vrMPgLWtBn5YYzXdSNgbcBRpRZpNKsRGHY648p",
  "key17": "3cFFUzKJTmBi9f2dNdkU8BFqKZz1tVu11n9nx8SYQm9yeopZQW2EETPi4BGsNu5DBZ41LDySFPjkBx2K37bH8YJu",
  "key18": "51iBC8TgZEqYQCPMUP5pJn6MbaTtCWffSSMLweYeXP9vCpb5hpwuPniQcCBCniamY6Q2mQesuebBPKrED1Rc5wYr",
  "key19": "5dn2KnUs5aCPmENvX4ArhgUXKyrJMHzhEuNr6e7gNDpuLwbWNp2f3HhAoiQrW3MqUnW7fyJczDdm96oeetUDmV6w",
  "key20": "5SzXdtySfx2DCdW3wWdBWViSA8xFbUF8vN5ajYQUkpQNkYggMLrhcZhJ6CUzNzFugdHaWJFbNfGK5LsrtQLGVird",
  "key21": "4Ny9FrUBXrwFJLuJ2DvVv9nUgUcLZZJEwYGpb9A7wR6VArYNWahvWeHBxKds7St9Qd26bPxes4Tc6UZMpjjkPVyu",
  "key22": "5kfPq1ksXc5kRnDwhNzWTphSweJPhVRCsPk9prhDg1Eo56MkAbRYwqu8VgdVE1oioC9rG1PEfbqSPv3qwggjmhRC",
  "key23": "3CmcgVYNukpE1GAzVxHXe1amuRGZiUPBbbVzdkatHUD6ya5XZCvPi2arcvTCWguza3MCFhZWKUX5sFZDyW5Qm31h",
  "key24": "4VZuGfnu1HEtVvymRBY4TyxiErVdSZUDb65QedW4zgqn3g1WHNWN3MEB2VvcPVmvijrny9J7M8aLWDiuzhU5Lhfx",
  "key25": "3cjbc2pG726ei8Fxrp9yAYMVHTnj8qciUnoDgd4XbmupmiQPzRxRA9ZCDNy5syzWtgwDgKwsCvUk45xx2zM7CP8T",
  "key26": "VJFFWrJyHEnLwdSCkjkXC9kPPRftb3rqQ4uuqqerSTgc9eqZheVeJzv8QS3qxdeYd6VvnbYnv5qiDwYmSeMG8D9",
  "key27": "3bMeN5zpHRR1ac8mvCbZ3PKXaPUTpC2emQAUdGbpcAteixe9JyzqfPxu49phoY7joWg2Etj4RcPAfU6mJrjhF4J5",
  "key28": "4KfdwrEmRZP2fjyuPeUMEuhFQ5bdiGeWZfgkVDU86cRJarEvf22LKYD1UJEtKkToi5EvNBEj7urSJqCsEHG59tiz",
  "key29": "2WiaLBBLFwE8LYVS9vp4A8cYmfFBiyopfR9MrstZ44PF4HeMSNFuwmHALkB5M34vDuxBxQSiEndGWUxDPeDYJDeu",
  "key30": "2bwubJjqzwdf6j93M668Z9HmvBiiqWYAsMu5F65nfLn5HFnyBsazcXC6sGBmLViSSrpKMq8eVqpcGy7wgVLRpDQi"
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

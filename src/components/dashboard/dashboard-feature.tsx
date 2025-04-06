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
    "wxsjX7hCRg8S76gUo6eQ5TULWhSVfNfq4fKfgf3zasvEhiLHkH7YyFRiFhc812tjHnByrvevU7e7S47VstX49iD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5daeDM7Dqc9MVCgGua9steNtrz3avKzevKmBxr5YdrapFksUZ6GzyWh9ujUoYJiRK6F4MXDXb8JqSxxsXGSdif5V",
  "key1": "5n3sYAtGSYfEw7QfSFCiumCfMJ4Bs8v2RdNRfDXYXZ2PKh9z3Gfaix3up1raVmjUcpJNyPmRUXMW99MtWeZa4EjP",
  "key2": "4sBHsNijW6sj7gR4ujhZHsP2HB73eMpJ9zpmtjqvV2Z7z4tp6iMoJNbrHsTJMWGCvfnvxEDZm6UZUyrMYa4wPXmD",
  "key3": "5H82ZH74Nb9Fnxq2GkmHzPEJJ1a52tn6Gy62izhQQrK7C35tx3WNzsmx7jPSvBi7HeE5bANSLdP3dUNu33KCn1cD",
  "key4": "4FBf8XtcWaZXuz8Mx2GREQxRoq8ECbNfDFce3eVKprhR5aqEL5oUZu49EVKPMGRPvLyvnsEwXAgyCiUiHGUkpBaM",
  "key5": "2P4zXsmK76TD4m1GjAQqouaQG36dVfXBSChg1QYvGKPezoZhhdPbKLxc5XZzuGR4MkncXo2tr4pa441XJF9tqjNN",
  "key6": "j3AjUBXnLpsPefi4R3zwzTNH8VAGTB3S6B1qPtwEreZb6GGqvZB1oGiewmCf3p5eekaZfbCdXJizWmM2v74Qzkc",
  "key7": "3dUqHKhzJynqvCz9FuVr7HwmHFAH4CpTAcFiskA2bUkrN4eEnUEeeGJUoV8VnZFWJSQ6jdeSAwdahsjMHkkvG4Bq",
  "key8": "5h7YCLu6eoFfB74h5NWPLuWYtRLHhCYbUGvbspuRnuUyyXmuxtzBcCrKAcaJMoBHb24Xper17399LQEU4LSTkCUk",
  "key9": "4pL8VLyMP17SMDiYrkAvcdRnX11afSu9Twi8QYuJZRQekxdytPKgtg7nXgh7UXHXu42MRKxEt3NSaNHytDbR4mEr",
  "key10": "5dKKkj4E17kK85nwxHRbp1f65xyuvV9gvEXuwHehCmSpaRBq16u5AMgKxBB1n6YB3JURwfyiheajTnASqxwQBM1c",
  "key11": "5XmSka7bgZdPNoHumZrojFkyY1GtU1dnSPdj48dptyd2Uk4A8mN6ZVzrKpAzD8cJLupooyZGNSd6LWwwqzw517FK",
  "key12": "2hgyckrn9bY1RzYtc1gsSywbrDvv4YhfKmU9crMrThNsEcE4tRJGz4SewxYwTJ8KGF2mWR7bkKeUaA1DSQHcKip8",
  "key13": "5T96zqUBASNK74N6jC4itSojTeDkJN8fyt6VhdLiLvcXX8sT36uQDSX2hWJt5G2CSesqGEHdJRkz6C2L11jYJozB",
  "key14": "3YYdVp6EguSGWaRvmrpUEoAud8eN4QB6YhJvB57drX86gGmJgoBB2jvWMXB6ej9SMx3jRx4D8KRd1vDHs2RxUssx",
  "key15": "4Xyw64vomeSFhdXwy76o8W3fCzupujyXn3XE9UmF1j82GnHbyb3fLv6aui9WJqyHScgxnVfA4WVZGzKbDhiarx5k",
  "key16": "2Eb4W7LST8iMZ4mjwkbUcq4PZ8c2Dvj12ZPJttECpZUnLJaSJMV5ob5E5MtEKWvpzNnpx6SLJoWLnfYsWBj283Vr",
  "key17": "4Qg72JAWBqRGNiQwFZGadBGL9biAn825fnDqThVMR2PymxFncorBixkDEWEPSo75ZnLKL8ix8yCkLa5YsTH4wrwg",
  "key18": "3LTB19RZbfr8t5oSTKgJmx1g1voKK5auVm5hJfYvT6sMWWhEBfqqMNiihxFZdqdfPPCzyZ6jyVuykHhowd4se11T",
  "key19": "4CBQJAqC3XuwC381vNBeLCy34VYWGz8QQ9pADpo2nP12VdTeta2u4om7nwfdZo8VPPZnAgLpHeHxEmMQRoYMqffi",
  "key20": "5UxBiMm7Uf7FK9NfnwC2tCqF8aM2nLE643EiKTNKzejLZbwnhuBURoJzJyY6vHRUkv2uUekTT2MfsAQGj29LWqB5",
  "key21": "2rkZPs8JaUBBimWzjKcVhvmuANcP4ZVAvpFaJoCiaAMqPXVSPPEV85MMeoWhDxoJZpZE3JCioiKj8PXzHjaEwhYL",
  "key22": "2MqUZPaFW3gV2T4mTfBtpNhE52xxortVoYRAQfd4r3RbUgba8QwJFF7Le77AXrBp5xcKQa2Kn8GZA5ykwSbjDsun",
  "key23": "5ZE8eGTiB3GBZCLBSZW4xAXPBAmEr1QnejFRXGMEFrRfsTqVxY592tW4wLB4nehJxW3UYb9JwW6UXsJfqCqswLmT",
  "key24": "aL5ygEAt6G5iy3ZJbHjAJ1xts8P6Tmz7tBFYrofszLzmfD9AsQwXp4Tb7ELJQGf2iGm8FhoSW5V89HYsFH7pskc",
  "key25": "3a1g7oAcBjvwn4zbeHEeRbMvXZkVFq327seAxqepopduikZhKUWKXb68uhABwkVJ1embM583y6mLKaiF6NRmNuqJ"
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

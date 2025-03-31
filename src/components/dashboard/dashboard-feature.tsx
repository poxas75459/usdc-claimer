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
    "cHBW3aHKJFszwpCVZUowj6HpEZoMBdQUs5tTjYKyKMAAr1skDpzNQcDg66eF8HpkDxhioH28L3LdNM7X4ed98LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tNq6qDoEReVjbYqEes2aH5Af659311ro97e7swxsomD7M6t9TpuUFR8LNfhjXEZk5kb8X7dZriWrPxpT1Co6LpR",
  "key1": "fzHeHGYXzq94H1qhvDHyJ4hGguwn7NWC5nHx86rcvsmkyhsq92HTX9aQtsHgGxdUsBWL9UQYU5VV6qgcbQ4o1MR",
  "key2": "4EAScU2TJdkR5kYZXjNjWx66n2VyQBJcyhSBPtGrKx7XDjxxpEWPaoPRDWs7m4DsgtM2Z55uhtwww7T5DkrGe4Hk",
  "key3": "tUcR4b9UXUopYN9Pu2fxxMfjMMsVjtqN11G9nBJhzMN7FsNJoLD5bohVtRUGjLvscK5VbXXzwWQ1nm6QWieLvf8",
  "key4": "VYKikvJdUKkKJd27nCcRqWEhRXE7EixEoM6bPkcX4eZ32cPPv3W7dPcYkChHHZaUrjGtHjWv8xWqG7jH8ksML7j",
  "key5": "5sSZ3GcB2ZGgSPGncL6BA8QDtMyMXxG7xhp83T6Ey1s713mNpHpaMroToCQx4iqzzahJyZv7Z1aaCkd2xRoH2bVk",
  "key6": "3Ewsd5kp5zVinTbbSZ17XpXQWqfpLWgJwfoGZt3qYLvr5VaEqvUAVQUtFSc9fkpkFP1BCGXMc2AACYH2bJHFnUVq",
  "key7": "4Z7yoN7ycGdgPzwDXHZ4pxBao6Z5ouGduV6NtuMycdZ4KMWRhJ3MrVNajWCjiniJb2maPN5LCt5DRWgSeJ8x74Pb",
  "key8": "62Q52fDnidivRtXoMcJZFefy4UkefRUBVuEz7iMhVukTYv34aZAAwTzTXp4Ho9QMmnZ1BEQrRpVawo3H67vwCa4q",
  "key9": "54aTnScT9Wp1CaJPWQNKfKxALH58scaYCQvSZL2FASJhfXBeJQDKVXP4jkdFtASrcbtM5fTLHVjYvsg3Be1fdfmh",
  "key10": "4bf4hxkncVEmPYWt2tL7A8CDAZ9rzYtKusYScHfu8v98i21rwnHom1aRDvUcoGuCnUgYbB8isULuBtHi6XTECZsd",
  "key11": "35QCwDePFiU8GVvkK2rpckHwpf7eyeTrKGvMENbcMDpD6TALLNsSdqVvgkNtG3TCzNH9vYEc141hsp4y8i4Tzrep",
  "key12": "dn66XcaqeqxyEfaZerdbtfuUPhJ1cx1qxpKR9wpkkhMbQAEkKARN5LxtLBu8emhAmoQc2RSrCafmw2aLrdPbkGk",
  "key13": "4rEYjxUEdF7y3MjxviPQ7E5zfZzjXuNHkXbUt8xkVdLVNfDrSLxt9ASCqvBYoCFwBjXKt4zggw8TDupAtDC4Lyu1",
  "key14": "58vFBC9FDxuMzMMczEjQvJpJd39WaGUuEK9qL9qaWpnzy2VxbrDZWPLCf7nCvpxMqib3KdtBhBP1ExAAof6K1kDU",
  "key15": "SurSioWJgvGyCgzDTLwXVzLRbwqMjAbeBJUwEhJDb4JUMWmKUcVPGMzh5nw5ZYMi9K6kyLWftvyzSCHc9kFoUyw",
  "key16": "5AXDSxpCLyq56cywQGsTEMLY5kpNpAGnKWXw4CXSEQ1uBeJUjQWYSvJgJ3WPA3syBFPCnc16VHmnAaHLEDYEr25H",
  "key17": "4J2BoqHu7GNdeJc9vEFa5NMLUUWcFuLARzoM3bZAX2NxcuAkbKgFFeUcuLRn1nFSDRbuuBtfHcSCpxrCxezGvS1d",
  "key18": "Nd8aNtYnaxj819TDcq7VikBEZ12Ce84g2XwcQCqavqBSNic9rUfCXETsqZUNjxNR34tJbKQoR9DRv3MrZjv3wS5",
  "key19": "5Tc9AwJfRi17dMnTfVdM5ayxhWT7f9usGow2gjJFiFow5AA8Awc7jy1VnCqffuTTGFD1ktQiU3QZTNR8WKxcuqWm",
  "key20": "3TEGC3KEuCLdUYjKfKLapLLxr91zF45DubUusTLAB7TWD2wY3WKeciYFevJFWiP8tPNPyAaKsSriyzEBmxiAeyzJ",
  "key21": "3WjUokff3bpj5kJxEVS6iEeJsFc5pDcoLMwsGXcurQrNFZQaCZx4aiZs3PwxNFaHq5jid598o6sj5f2aAfooYhrL",
  "key22": "5jj7uFyE1WyQCNEzKaLziGBVPJdcR1pJNJqXUNDWffwCh9pBhwXK4swUYRXjXmGBkQMPeuPCqzNK2XB6TZTuJSaw",
  "key23": "22hMgqeq84HZtSrL1yptsPHuXEsgYkbujnpD6YiEqoQhmTVryRXKZXqNQDhkL6jUz4bAcaT4fyzDrhrVbkBVBAXo",
  "key24": "3WLAsZ3pA5j4PgQC8JHkTiJc9yLhUccDGxkhLRNwSeLwHog4aox3jk2vUQSBNaNbr7bNBCsug4mo4a1uPVyvcyDL",
  "key25": "tuSRgsEAsq8x1Qyab7GPFgjYWuTb2aFUdQDaBcagJycNRz93ysSg1WFWmSnM4LyGxK6fJTvCXDMvRsh32zPzY3A",
  "key26": "5ohVmnunBcGV2S5UKJJ8yskz48kWDy1FqLTJBgRk589HMSip9qDFJAzXhLVnNyNKZCsG4WgR9nAep99gMfjGF8T1",
  "key27": "3PLMcykkw5Fu3VqLqAGN7qWcoQ3hQDNQ84p6MJ35fd7oCA5UnNSLapdyTJTza4nh7bfjz8YoME84ph7KHjhaWjwX",
  "key28": "36qxH5HY6nn7TQ31FLgBPnKx79pyfE4KBbzf8XqdC25eRwWrujPqxVFLZhUaXWicMtccnu2BXLhbi5UUX9okJf3c"
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

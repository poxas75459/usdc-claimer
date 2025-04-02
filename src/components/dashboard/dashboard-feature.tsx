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
    "4YK9rXov3uSHkzfTKhGjARt2Et6D8vfaw14WGVytwiVPJNB9MZCvCi8haKF38r5fXWaSaLyqzpbgL788QqPRJf35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L1gWfMZ18VDR9BKs56EwkKnJB7p6SRosBWf3igRmFFPJSiB5eei3AkTm5jYUqwnXkkmcQ7ZRtPwmCptgCu6pFNe",
  "key1": "wHF84W41ztTPk3k3aAdM8QhSBWK3GQVCdUn3XeDf2uaCt8QesvVLDEB7fQtJ8RbrWmaJhJLFvUuMySjStRnGp6N",
  "key2": "5V4R1TmvYTvoQT5Bp3iVDuVdJRmY1BMaJHTKFECjZkJ5QLNdqmDBCCTsnNJZvAUS9BxGgwQhC6wKL6u59crmvCgz",
  "key3": "57AaqoN82jZRxzc2BH6NS3oETdUKLZjDbesKMubqWoxQ36ywAKWw5PczDbcsZ15ovqfs1kFJohrX4hdwgR8AVvJo",
  "key4": "G7p38fDc8S6dU8SdN1LLC26qBQjiWpth5utphmZq92waTQ2QyfdqLrPbjYM5A9VVQvT7ixnbZ6cpfvauHkw23zh",
  "key5": "5gV4Xyeh6iz7mYRm3NzP6pT6KXUY17CKQGVcpn7WjNJvXzP9aWUTcqQKr9quEahGivrTyUwb9hcUsmYnaC4ZN3rj",
  "key6": "3kLXn2T9EPjHaHHN9dnQFEoZhn2dLi2NSz5bNEVPTPwcYWV3zo6aePC8Bf7v699dksAN3dVHUrMaRbcUUWCdGZNW",
  "key7": "663SYgj1y42Lsi4BiCGFbrKSbs1Rfsv49Eq1RSRYk3XpbUiQuwUUaNgHr3udYxVKjFcFqtCAg1ePmC3ZZiRg3Axd",
  "key8": "5eUzr45cHFx4hh5A2PCQdxTzJSLR7dZmmp5DF95gRkPHKCAeeqe5NLn72zPTZ7PXjTZT3uyJfTy6NRBXN4sR54DN",
  "key9": "KxFfVSccyHrSLBokSEHGwBSuaQv3BYKfQAyUPbcrZm5xiM5DrmJSWQW23Phv5NWBTJn9mazpoaDuCavFkxVMQ62",
  "key10": "4BfsYkurUvEvpuoTnp2sjFiBMUYPAFSuXJn5qoN2Z53hPeZJLRiJGRGGkicyqxnXvP2AwNjJS5ME7GQncnuoVofB",
  "key11": "5vqAdp53bYK9HuDamkSmwV5n9zCabi1Q9VYbTRa7N2wcCzzWmL3L9oRj2ZXSWgfaiB8B1NK9E1yZ64eb48gUbtSC",
  "key12": "4k8QL2qRuHKf7bXg7PBPrMPaZfEZEkX4vYc3PL6TmEAcjxv5mVigruEgc7VtAnkpkm2bVmuNeTSvqYXcuTXpek9f",
  "key13": "4knyvF2cNSNeWM5cN9YF11SGZRRuihD1S71j5M17C9X2WYoRAoSbqYwda2jrwxASLaK8Ex59JM7GjJEvv19qw3Wo",
  "key14": "58A1vQBLeZ5UbfLuWwRansdT9JCm2UPxUWRfbmRzEjvBuNoSHhin5wSb4QQJe24ntpWnAdnG7SzdGtCmZToEegQd",
  "key15": "Hm5FuJu3pmBGBHXvsWEfDhvdySYJE3enp2hW5i7QGdQYkzLuvsafRB1tcpggor4idDnwqsdcVZKRQMbzJbEPg1t",
  "key16": "397XCtHLYrmr5uiVVjgBAEgreP1h7QMaSFed7hJXWo1vTX7EUY6C4fkD92wt8E5pqFR6n4vLBL4vHxSQDR2Wrj6f",
  "key17": "3mmB5dwSZjYbJ4m7ZoRxqdnyqagV5gKNZyuEPTbhbXUZXADCQJcWxN7WMBXRZpQFXUmkGAPCvLuopzTArjb1x23E",
  "key18": "4u2WbgbsTR6eBjz8WKXRo6va4EpGBSr2gN97vDNZZPKNsfp27SDRxWqAac3Ao3ofcpvTUgijahTZsz7kpQEaCoH6",
  "key19": "4JUr7D3r6NNdnehUnfgAUuDVKwHqM23jqRA3tr3bERp2ND9aUVLtJVVaTtvQqvmTF62qEJYP5twtmusPjr6EX8dz",
  "key20": "5uwdbCy2Vcg9nHtrw4Za4J9mERH4Las4Vp82K4iMWBLcXJCJm1hjdGXCVteetSR7YWnxReA4TaJFUFPAH4YkntgK",
  "key21": "45TRn9QRawrEVYwQqFUKmbYEV9uf398nrWZww8sWoXb6CZZ4m8beLubV7kEEVTAhE4RCPPp9esSfEKtTzzMhfpCQ",
  "key22": "4gapHERMiecGuCaouFyrzBie86B19wd28y3WdxzpB3YDiqZeVymvVa3t8CevGpetF2LzdyKw9VG8oXrDezpEJiVw",
  "key23": "3L7sLt4Tp9hkx5V2i6zDVQAunnw3rDfnbhLjrGQc9z6bYjX6ryMAMhbnxx69vYPVpZzUwGzmBjiC5qWmeDgjWrPG",
  "key24": "2t5tVLDCUUurdTi8bjbwqKaTgi7w7Bg4GmQk33RkVB3aWVxpDUZhSj4m6EPSti9Ha44dY4g3ftDbjyBN8N3tf69f"
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

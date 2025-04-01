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
    "4kyKgzAeJhCcXh7onepHjoumofdJ4GgyNytekGvpmnUQjYykzn488bUhH53x18vdLRXnregKKcz5v5qxa9Hzd3B2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24SMUR6tptFaWizXu7MTnt5yvk95efafZSVgwgy2az2ie7PM1QveuDYyyU4ta14Jpe92MZqrmhH8QmPNEETFjiMt",
  "key1": "5ovPrXdPVtvBuphHqUhVi8cVLdMRy2JVRTDwfCrUDXhycahv4meg4r9DMRW4kBNpPGskH8fSzZscPLguLGBfdLGM",
  "key2": "4H5GKxHL8XoMyVHr7eFphs4ruabVChsCV7uhdYSTuLpbHEAqWeRGP4SxRWJ9d5c3EHD38Sz9eUm5UJp3exMEMbz5",
  "key3": "HuXTPR7SFdwfNCSH7yjuTwN5GmqKusgEgAmo49NKr5uT8jX2Xsvc5CEcSeNLmG9qDsRKLiqBwebXV17cyxByA3D",
  "key4": "3ceY8XNRX7RTzuUnArZtXMDF45WkZYyoy163LVhtZhnbzFQo473gJyWyPkwzqQpoC8G3RQvSRfkdq4NU85RKAoUW",
  "key5": "5Tj99HY9tGqtbEhLQG657bhRaf6ziMvv5sMoTyCafQNSdeyj3Tiiev4mAjEmgYkgvULRJQ8JUmvaLoTZMBFpXwhY",
  "key6": "33yEJXxfQZnyb2sz28KDPeHAkvwiYjfsF2S7cqWQ6J5P9fsdA2Cxy2G7doboMN4BT8S11MLdGUxeD6nSpku2WWQ9",
  "key7": "2FKXyzsj1dnMB4ubVd7ioeNsr8HjsSsow3YYeieqyXdadRvns2jQPkVY4eMhvgMEK4nvnDf5fqFFucPG9Uq2tz4L",
  "key8": "5ankeofFsCjjiVZBBA3hXdMf27Bv9rvUpwGqnh7V3ycpb96SkGGhCcAR1W5XVN6Rv5ctERKGaTUe1XtmQPckai4t",
  "key9": "2gDvZJzaDFcaHX8uEdZiJRWdtgiL6TELeHddL3hD1biWLm64aZ3ihEhX3AXPtheiN3PaCG2HrNuZEtvorhD1kEM3",
  "key10": "2wbnPWeKLyAWJVP17K2xhAHqpMDkweNjf7AuyYA4SCR1kmyaf6dmSYc3tCX8Q1A6qEBtpbjAUyB4EzgQp3wZN6Bf",
  "key11": "37f9doAm8wgXcf4wqMWVRn2aCNPUSdNogMF6tEW9c7UQFXHv5JFj6vENseGGwXBmGvi1PVaz26wiXv3ZkZUqtyy2",
  "key12": "2QkC9C7j24SJo772m3wAspq9Cu4gxBFmXH41kQJxoR8UQWTFePzxAfEhM72a9pYAUWezaYxFVw9qtwWGfWiUbTGi",
  "key13": "3i5pMmfsWyGh5kkDiSff2aNSqbSZAnW5fzRbUfVSw1dFJRd7EZhVGz5Ujgffj9H6abaGPLyHRmYx2us8Lz5s1q2Y",
  "key14": "43TNbH9YNxwmJy6io94gspfvRonoyowjongVDDFTeWR6ij23avZjeejUvN6BynyFaU2HYceDM7aJuqKYo12W8YJ7",
  "key15": "5EryyrQLRUr3bB3ULsigpX48yKA2KKRaKsKpPUm7xXx3r5Zphj6B2tDz3ZCus3SWcvjNYaYHW8sm6JEdFjWTxnBT",
  "key16": "xwkv3zXW3FkwiomSXb35CbpyaQ717qjjoaaSj64Dcp3Cd8j8mTLFWq88hHR4BHeyreoA8SuGT7Vc3N46phzsZCU",
  "key17": "3pMmiBpyS4sjY5S4TN1teTU2MP4XPY54zk6cd4EtqRjv6ZTqLs8se6DiFS15tf5wgpjhAryjydhKT7j3h745jXiY",
  "key18": "4aGbTRMXY6aNzeWyAM9Mk8frqM8bbwgayckDjX1EB1Mzg2HW7ZBPaTgM1FQkWuiQUyKdUFQzzAywQnEsj1bGhSyk",
  "key19": "3Z2BRxDiCyFLD4Euk4dJYgwT5v7m9eKRMvAWqounQL1HXmrKCiVVuRv4CW3iDWx6Dt8h8dvVV2EUgKbNVFsGuW5Q",
  "key20": "2ViwmGpC5wUNuN52cRfraHLUQwxBuzLovp63od259jMdzjUCnVy5x9JjMDN8csnuRpX63Wym5WUwLFcEezSJXrZz",
  "key21": "KLNpxnZddsvuGo1eTTRNJVBaAVZbPhsqmH7BAgkfyeHBYZdqPA1KCeVvkuMqbEx9sdQ3EkcqWpU2WMkPF6SG3FE",
  "key22": "5HxJscATusL2Y17F2WHqnP9rTpBoah5yU639K4WCee5TPUVSLAVVRvBgdeJWFtVpvUj3wmmCUfoyyGZGGWTixyai",
  "key23": "3KyuDgtPmtG2TjBebxh8DUyuLjgApiuFBLtjB7idpb6KwrsMoVrqmjKCu5kabe1trgjYUsGzGgw5p8e5HSWujDgT",
  "key24": "2htQKJyxef5r4xM1Q3qWJxaZGQBqkNhZFHmp7u1a2wYmZhHvL3qaGFjAzWZyRaQAxtfwjQ4J8Q37Saf44rZfoFB7"
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

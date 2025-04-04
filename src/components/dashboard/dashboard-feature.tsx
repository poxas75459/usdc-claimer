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
    "Cma3kLuUZT69dSmhfgLTBmSBjvWpUNwfwqWxqk4axTcpb749RTP4jYsxS9kK4RpmWgxEjjg1iA8Vydpjgxr7nUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsKqoz8jeh9MeMkAF4naYr3D9hqcAskNvmSnW9pR3iqGh86u32acihUon6NhRX1LBT8GzhuTcGER1xKEFLFkeZ2",
  "key1": "2v2kCydbrzRCoeFU9jjghfsuRpm8vemSCuo3rRj2MDTyjAi9zWqJG32VY1hqzEQFoYn1ZjEqZhLoxaTweytmaWfu",
  "key2": "4Q5xbTx5Dv7L5kKRdzmr5PPEDLh5ec7KLtzNK1vBeU2Ss77PhM4zq1CdTBTVpz11MsKyEqcAGdfqWooVFQobhD1b",
  "key3": "S1b7Bb51QKmT6rjV2MrpNZD4hQ9rYchZtXkgdAhXny7GPPBEj3ECbswav72Wh16mouXy7kq6JrTJEKy514Pt7d9",
  "key4": "55dN2yDJCZTSN5wt36Y6VYVhU4jtSZVYEhF4TsH5We37EK2dxxMgTWBLtMYKWajpjWnh7MQRvwAFeNnjC5N88c51",
  "key5": "G3EauhzFAZ7vAnxmEGjY91M3noDQXrA6xgmf274QLNxCfT9qrsqVZgPJRqbKhb8PJC8gotMC6QN3uDswsaWUwNK",
  "key6": "2XCHn7hNAV5tz1QqcQ8dNYX8VDLoPUrRdqTqVeHPQaSSbEKEyaQ8dpWPAqcmfoSju7y3PZj2Q7ExxoewuFykkz8f",
  "key7": "4R9CAkqVKkf1tQnJDCpq5X5Q149Rn3w276nxhJaxRUQoFWX6uc1arH4vJDGp5jJo4yMxbgx5xk9qiyqnd6x4J9jQ",
  "key8": "4WC34W1VMwAoYoh3gKicRQWv5p4P4fi83XqvRiUkLxHsxKEmrT8YeQb3SkxWtyvKJY7DL9ZSNEVnDoegtTQt5e6F",
  "key9": "25ZcjMQRjtsdVMUWcBTVY1ieaJDoEN2NvdrimtxGPmaTmyvzmBwpkZ8Dc8oJgTFHxDLVCRirgoe1zbTW335StP65",
  "key10": "2qw23ksTJuUMc8BJ3a23fW3pfeoKs2BUxysPRV5ZLwjU7yYHMa337oAtsxBuYa6nw2YF14C8ytYRpmYo1u2JY3H",
  "key11": "2ns9vHq4G2TFw3fFqoV8vWg84Rk6tg7dRjCtbkVebEtPijtjD2PUMJxUnw1PrNow25chXM7BKMb7XJ12oSfmA6AE",
  "key12": "4Fftzn43PE6sZfYDGgVaiQs6oMqAjvndVjau9gnRwf6rwkTA1e8vAtb2is9axcWa1cm5JgC9jaYqAABYdxoEtFzo",
  "key13": "29w3dDQbReqG766u5ycp6VZYaDvhmQG1BgCWxYH9yqwKGZQ9QdVYzrM9zttcnNejFEPSppQ6W1DvPryQEgNdxncu",
  "key14": "3DMBJvyC4SrSMVQHCAsiWSmjDpRLu5gWN1vKv8nbLXZbKX7M5kkAMxU6LqEwCfiBozLt1WtGWg9Giug3p7hxK7e3",
  "key15": "43PjwzyT3AR8Pu4RYgNbJYbxSoawkbzxLcJDJiLCg37WZCj3dtjvEqYbMjfbieZh1VVLnWaBk3a1oasx8x2pCEdL",
  "key16": "56yKtN6tja9iMHCXkfSLGSwAS7JVE6eDFPzdzCb7QGaGmifj2QWiKG5VbyhpnDAwaShv6Up9wZFijSUSYw5N3kJW",
  "key17": "39Wx6vy4DfvQPphCkcLQcYzvLJHpoqvsKoGU3FgY32ZoB8puwwUoKcuW2zdu1YW1t1y8zEUR6PeGLfjhSmz9kfFs",
  "key18": "3kth3Yiyiz53562TjZsKdFhpdkxPKapxoPAcNbm84sdkHzSH8A4D8Fo3fEFpSovnbVAfjSNDoM7F1quEnzrCVnD3",
  "key19": "57JCxwMuyk7Z8kbeJx4YtGwc8u2iMm22nY1XBgQqWThSMK4VBRGjDKNqNGdrxGMkwHBqSW2FZbDa1dg9LvDx9Xgc",
  "key20": "4H3GtzNEvYLF2Vu9peb8GmPcybSMwpv6x6QL37hccpiV7PC5QcJAtqUUCNYCuwAqfp4NT4M7pboE7iwBrNtRbCX5",
  "key21": "3uRR3vJZ1MxR7ChjS4HwuMDm5f38Gi49eA4gXUzYE3EoyYYMNf3zsDuAJuuMHcjPH8SFvbwd2WzDGv2uuZdoaA47",
  "key22": "67X2XA68d7QuSXseR2ZPr9zHyCu7GMFca2mULbJNsMzwi2x7H3Ywftro11PTahLVvKWaQkteRugmuC2TGxo71VpF",
  "key23": "7fpwr6smqzjeG8JSjLVikxX9122UewXcJhavzv3E5grzMyQCtPBS8gedaeS5J8qdXE6qqSkcSLmd1Ht5ykKJfut",
  "key24": "2AJ2Gsc7FrSPRS7MGKTrjUXSBTr6YfZytRFcJxjh2Av61LURm7Qz86Yh8dWuD6FWAgpnRPZtm2ywzR4Ms7LYQd8t",
  "key25": "2okMhCYyRztXEQ3LHidrQ1ZJuzKKGZrMkMf1hmZmAacqx3ebPWEDut5kWx7HnS19T9aYqmRhksgnFMNnArcK9qq2",
  "key26": "3QSmJWArqyRnV7DSPZymZA5HoTc4LtNCEn4XCRitsnxBFX5NrK4jEgxaT1tLbVJJN2VMtHMfefDBMiq8XW3c7KCo",
  "key27": "Wen26quL3qGhScQqzqrxKoNhjzGLv2HJLVJmdnFT2AwCmcHRCDnWWJh36UYxggK4derm1VE1P6rGoxasR7DQywf"
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

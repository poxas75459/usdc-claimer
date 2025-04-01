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
    "5e79PcmWRexUHX3Ap7uWFpzs1JKgda1Rp98doJLiPVboaArwRQXRVJRcjAvKK9ugvRsCaLJJdahLrpRrrBbsWXFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eRSCobBb5Y3KeUmneDjvjsex5Lk8y11qJgcvazc1qAJTs5rLvyLe3n2vKLK4indQFkCergBntVR4BQqw1v723ZS",
  "key1": "3afMykeu3ngvrVb3x9NKyePNePFR9MWQtkyiWteREnZ6BW9FTRmNMt8bkpyVkEh2o3qFc9pARSHqyLqzdWFFgmfi",
  "key2": "3LXJHA1XFNgybRUwWQNjtKmCFN1AWHWwAFx8DPugCqKnsAzDAvQyp7xsdQsdJ1T63HBSuTGk4Pap9WVnuT9eihYB",
  "key3": "KS1QvUEM3EwdLrAw8A9naWXvv6QRxqe9h76GiV3etFXbPbezpc3tjRbt3QeSgrtCFQG6RE9wSLwU5sXUMfNco2H",
  "key4": "587ggNeywgW2xK4EwJkAvUMcFLKkHQHGxvGEG4Nv5YJ17JDPL8bb4tacyp2HXSaRtLQ5qDjoxmgu3HjokMSJ9f5N",
  "key5": "2G6R3H2m16y5NvphBGKWiqeVv8pBePwZxKf2tHZihicQVMTq2hoD44qKJfoRtcDSR3vgquVbgRnykLQ9vt11qX5A",
  "key6": "28jqvmk2mwCj3wpKRYmuhTpBXYuBcJ48hQCPJDMphMFEunu9FxZ3nfUm6otQEb9KCCmugaVbbWaMnsgxvM1SykZb",
  "key7": "4GAJJWzoiNq6Wtr3B8JYokJCLQndkjZNK28cHLb4Ly6Diius9MZZRaLo6q3txri1mvaiJYsbY9oj891wLXcAVeiM",
  "key8": "3qNm57BKXiVvs2LaCeSf2jzFx3mZn7M8RtAWMaXcFtiZdybVf7vPD5VERQm6z85bYFfKrG2MS7svYhQzadxXBikU",
  "key9": "3Pa2Te4S2yE1pSyM5kJtZudWNowbJ7kCo5C4ejb1TxYmo6BeRHUHrhPx9ob38RVm4nBsHGb23rGMQ2955GDvbV3F",
  "key10": "59P8hBfVqF9wtSRmT9bzqLzfPdX4PPVnq7KdTJiXv7VCCjvcjkxSJNhpVLcmMRVr4yGaQqjLGYRYboQ4of4eR3EA",
  "key11": "BAhLbVH3ccvSKhGUpQ9EqixBY6xedjBihzZ9u3JurMhs74mubehaz3e3ARwsR5iNjt2gUvViD9TJcxQGuAdAYa6",
  "key12": "4tG3KrokWGS5T4S7cU5iDxXW6iVhRPE1xoYZeT9gctrezQGFhedLqVZi2A8HuSQpT2Lmq9tbAYGhPTo11jKcp9qd",
  "key13": "2iZ8chyRfsx1eFxj7FTpdACRXbjG1BmoqSxJ7BtEKiC3mj9XD6RVfTejdoVw6NcLxkRoyFN5Fbuc7xekG7F7Wa9C",
  "key14": "cWfHnhQNRfhPpSmfPoDe8JcXd7DcVFfsceGSuVRuViuUgs8BMRMvY4U1A7cuSU9rqUoHSiSNQmWPRUf4a2ehVSR",
  "key15": "2vAjdfYfJULp8M8sL7MkPCisBbYa9wLEFe6f57ckw7tBwPvkaWVnLgMDgL4t8bj6H3Q35D1WeKUKD3M1dtuZJq9m",
  "key16": "3qN2t1J716LqC4iRaCqGpx8X4ntZ6kr4qz4335d2eg1YvTsMZ2QVVGg5wg4y96FN4u4Qznb1GrUuy5j6pjwf9qBt",
  "key17": "mEAiXnB7TjcZijBzk5QmPsEEBz19GXAhR6tLBt2jCvLXeekfDDH8eoKZQVK9ir46opvq5yp2T5yz5SejxDWN9Fk",
  "key18": "MGsMKvSYvj9nqCCXk8ZGcPobqJ1ry9KTTVF8d1FFUtU5fUGYrYa9W1NKhajeuSBZ3cTtCUfGsC5X9QeYexFvYfs",
  "key19": "67pVS3tihxvyyZMB18wknym3QGgzzNEQwQNbLz4LZqVG5Xyqm4zxCFT56J93jqPhDheiJ1Uqp1CHsjvLvk6AsagA",
  "key20": "3KzEXVgd4x8Asgkxada24i6YhYPteG2VdQ1zU5o1XVt2TPxmss7FTGjuX9Ei9jPRRfPhEeaXTRoVPf8PMyoZzh3V",
  "key21": "23Pv2iCCQA2AdTah3oubevGpw4emjTgowvXkY5TJ1amkz9nkN8oJFyd8ZK9cc2ZvLFToCRppHQqHQVpWjsr3wvPt",
  "key22": "3r4JAPSEHzUMmciB3nPC3ALu2rNnL6Kn2ZiGaCMjryuzu8hqcGavGXUWzG6dKf1Dpvv3tpsnhJwdQRBZFy9KG8Be",
  "key23": "5Nd5qgpJYscD6Ja5zxmvhdQ99ehgdqwhPKPPiog8bGcoCL3rBwcGM3FSG1zh53JUXK2imGwXWkG19HpjniGt4Jdf",
  "key24": "5L78v7UrjyT2CgNttVQbG3E7MK9vh7YAosj1swANZsarzaareKr7aWTX51TrhydAHS1YbExXg7aKq22w2w1i8ZKQ",
  "key25": "JFhFBEJoygFbatXzqMZK4nLWYgBPdEgRVZ1pUoSXL4HhHPwyEqeuAnR8o69181rDsmeUsKHv4CGVPfktsHwrzLr",
  "key26": "cKGCrL9QgJ1vudNLZ5XkGvDR8pnmfsjhQqrNvn4G2dB7AvYH2jevRfNJByyezyViuc9k4RtxtYwzgYkEF3t1zvY",
  "key27": "3iyV28Y7znyt1HKArSc7NGrWHxS2LaZSRg8XQCnvTho5iHAJ2wQPN5vGcuk8tHYpdRzc4iZ6pZLxcLFzfGscyDYx",
  "key28": "3cm1UEoRCzda3iqbSMQmqdnxiCPTxV6LqT1jxAGdvdLPEnN8sgfFguR47DLy9kigWhUcUicvsdA17izsBzWaWFF4",
  "key29": "45eUNYwMaffYaM3vDUmsjLXtdkYmn7SptWqmCNngsA6Hay1RtwftMdKYSgZowYntzYoQzzJwyVU9o2qozffaCsHm"
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

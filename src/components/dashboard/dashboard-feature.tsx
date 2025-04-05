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
    "5MzvWnCz3SdbM8vN9zfUGp2AYUdR61FKVQuALtbvL9QdrijcdA7wFeoyv32bXdKsVvekQpDP3eodRtCPhimN1QMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UKtnwk5hPPqYSdrHq1Eim8c6dzcauVGDtt5SSWJPPSTwXy6fX5sujPSTD8cR5XRfCMhJoFapNV5XVgUrWWc1FUR",
  "key1": "3x4YJQZTLGMzF5dqAMdQJc45HYi5TPBojC3Cz7MVMs9M5oG42JvNXWNwnnbTEAN9gKz1JQYqY9DsfiddDmMH6Rdj",
  "key2": "5tQu6u3Q6DvMfNiTpGNQGXayMqoafVKnjNKxmALyCAijKjww54WxnKUoURuFevPNhvbHvsbP2Jkeqp6MTNTGt2Dd",
  "key3": "3gFfXBwipTbJhsVygV4P5QQaW2PRLdeV5tGT9rsnf9djj92fkM9xEwCWWxEdfsoxryT2dh3GXg1ccRrDWj4JDDmW",
  "key4": "4QvYHxc8jq6URMAjyMaAKiBXKmoEi7XJQjk1cRCaDd5qqX4pZGaoSRL3qRCD5WxY6YjcFooZz4oYTUi4bPFSfV6s",
  "key5": "46qcS4VEgUGaw7SUdVt9VWcShLSJ3hjVMp3x1qT8Q1ucVJJCCwUeR8UrZDA9NbDs5URkDZGHtRd1gJHYmRCgTM6r",
  "key6": "5cd8JKCFFQUxX6yr2NfLrUf5zx7FEcmTJhP3iGGZRNPtJWmb1AXfJ3cfLzVWoNUzwAirzPjRBG2HVjr2R1WXHjwu",
  "key7": "45eexUNbbBEmjzCF378fSJzKeUXnjBgzYQJ9C79AP77CzUEDKv26XSj42Nm62DLzvKsrHBXNu4GTXvwiHdAgEzG9",
  "key8": "3TqwNkfG9HX2R4oDbZSQdnFRFCMMoTMphJWAFyAYSnUMK7hVnJBfHKiQqSUfdUsesEMw3kDXoY5SV9coGFdp4oL",
  "key9": "2z7XevhVXsHeyuajQFjzaYeyEDnXHrYw4Zn4oJcEXtdoeojrWPitjnUoMPD42qqC6UhDEYdmpp8bEKJnzvfjxY8b",
  "key10": "2sb9XYCpHnxfS5D9sHdicUzRFdQriCLLPsxyjVqAhB9w5QPzh4EJzbRfCyxn2x9H4rFZgUCnCqKjhCS2uVkCmDbo",
  "key11": "4qmLNs1sfHs7yCuveFF3aZw8vsoxL2csacus9W2AFo8GW35MC4ksCF1wGmHfvXATn6Rdm34Mwinp9yt9Yag5r9yn",
  "key12": "62n61u3g6gXt2uJn6MZt5m3AthUKSS3d18TsMQd25g5tgwewgHL5J6vXE3nFSywnuSNABBqqDzSKkiasS8WjNWYs",
  "key13": "2dEVK29n4vgm9HCk3FAHX3bL2TDCqQyMu6UzQKqmwu96pXKYkkazpV1mhYVdjGyBd9DBmiWwvuzndxVzfwAeFh7W",
  "key14": "54h5GiW65Vbr9Z9dFezav5RSsa3fqd5fg8LdVPuffC77zGKoZcZFo1S6MxEQDRnJ6rvryXjL7m8SKAZNa1tKn7my",
  "key15": "45yEGkMfF7RxQuTmTZpE4oWomXZF3Z69VVWvE25BxdrLx5PUYQ5fcthw8tcCNdxD3E5Gn6mpkMAGp2nq8krRSDQr",
  "key16": "3JkjrGSThnTh2MysGdNvaKP8WcMYoX5E1nNQq1t8mtkHK2VXQa7sMCTD15fnWbxFz3Kmh3gYhTAh1VwCuPCbX6g9",
  "key17": "3fVd2FeVnLHHsd7Q9ziY5V1GH2GDTBg78bas1s7xduP4tTu8VbYuEB3MoHhd6DHGRrEVgnEHLJYiXkQy1hvsvsKg",
  "key18": "5wTiH46uBYSdcC4z8ijAeFA8ifUfzT75ZjWqM86nqj7z25QDzASFWAbp3gFK5gDBziJpfSuurzaWCmKaQuHnNyU",
  "key19": "5qx2C6DnnWDGFxbfHeTDETMTZqxUsuEzuuY2rZd1HZWVBCiA53QPER5z8L2frFkE5K94qqezgBpp2fX39HvZkdE1",
  "key20": "5hv2MEEkb7VDXUTddDknXujTPDMEdU5MWMK54SDqVf69m1KxgQXTKH5FiXUej8yd1SZo68wmdQcuYLUgFXYTVL5F",
  "key21": "3tjikJrNVoUNptdrUJFGaXUEkXTmTCr53n9UyWUF4GJSUpZRx3khZXc6XKj3AKGPdv4qLWSn4HN3cpat2yiPM19q",
  "key22": "2rcPQVdBE5PEHsqRzkdJccMdH2K3QDYyUiEQLhURdxHcrNaXT1MztDce6XFKvuMHTbdFcUdyi82zHzaByUUCeoge",
  "key23": "46szw16K3vy4gf1KviqiwEzSeStJa1BLtG9ny8irGb3qeTgPtzmLMdzhP7r33ZxX8H1f8r5BDFUr5imgwAQsjpTr",
  "key24": "2hcyhhppfodFNkDnKv13ay9GnZRYKpP4SrWfUW4cvdFEZ4VCmNTLSRppgbHZHCaBHTYS4H1uNmhszeXzYheW2Zwb",
  "key25": "2bmncwTkCvAMXdoSuwBob5VNC21Himimwj1fSeGDHnzrpeECUfzN5MsWkoNX4Q3yCp8UWZuqqawAXmTjM2xvRD7j",
  "key26": "5QcPXfd3UFnCj889wUDFPvpw1i1UGpB1m7446T2cSyvAjntSmL6q2FcACwvpt6rnaKTcMsZnAUSpVoApKrnDTU6L",
  "key27": "jwBJ9BCj5jrmmuD7doYKTUL4GbKucKqPHHKt1y4qiniG1PmkGVMTwUHGy7pXXoHuLab9fW1ppYcBLHLMHMQA3zy",
  "key28": "4GHkqH9UkpAdeaZPg1WNyVHN7HNNXGg69dz3WB7jUE3RPSJUJ6N2CmYHZKFDTmztWwxVSmz8G5J3gi9kctJewc6o",
  "key29": "3JxZMGQoCxj45FJNL9MHBRiGnShG6jCtwVnQSvqQa3z1JekJtQjvrkx2CPZV7Exc9eK9WLrQ4gdjsVQNYxdZjvdM",
  "key30": "5fkRJ1dBDNjtcCkXb68pTK4eWpp37nQsYVrKf94AVPd7NE7ZfUi5Gv7ZMWGkCmRERuwmjMQPWobu1jdKa9nCHaSQ",
  "key31": "2gHEhZUUcXZ6oZwkuNUZ4P8vUej7Gi2aji7SoGnRDVKxabugmSPCDVTn7e7o3SMVGe7rmZq1p7o8mRhzJGz4uYqN"
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

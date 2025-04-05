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
    "3vRFN2f4dri1f3rchmcgvtgvLKZqiaAN6ar93uvJvKobZabCgFCBzXeFG5W3kuX1cw7D9nqCkzLv3peDmmDgEY3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Na6DnHuWBdAG8hFFXixF4UPR5fWafpXeYkrxNhTZ6dL4jKPiNM3cXq9b16Avg8kMk4YRkV5LXKzkucv43ZxYmj",
  "key1": "4CRwWfCV6MK65WSana9jau5BiiPdMzXE2G8HXxdVqVH7FpHZcbJZ9SasS8GJsY2mCY3tkmzWGRQU8nRx6NMhUbwM",
  "key2": "2XN4ryabWkqQ2FjxyoTVayGcdUp7kp4m2DKV8gHnbGA2feFXAEKSAc35sCa6EqivmLpYpJFHh1YsWve6QFU459aY",
  "key3": "572ExYKQtcC16M6DtobbNt4uPDdFG83G1id7oJv7YaLc7DkRXFhBpwyxPgWtVQiWLWTaVLdSt8PVLuQ5xsyPXBqE",
  "key4": "2AQzeKTCjHWnFeSe4fUMWP65bBj9YH1ATrsJkMB8jGGdczudBwwTYg6oNtvByPaB41URefRVP6UZJajC4rgKfJft",
  "key5": "4W1L91TdjHMsMWxTCNvhCvWi5J84NQCG74ohrxsP1n2Ws59bvgJfpp1Yz98LC1RRpcjPmcyubRENMAPj1Kt98eD4",
  "key6": "42G5MdH83aV8Wb1ixnHZAangtCUVSuyyoohMEcCTSHzfYGh68rvNQK6ioTmSfAC7HnVWefwN5tzjbtHiHySnymU1",
  "key7": "j4RMK1SqARLVBut2cJtkwqmvK1ZoeibzHghnviwodAoVpB3mJVUTxMRnXPCu4TA2gS8hN2UrCzDzqwsqp27887Q",
  "key8": "1HDSYMnTz5qmAxLaRQK4ybRv8A9k598XtLXGzos6k7TZM1gPJsNhvYAbZCqgnbiHX1ExCTu2NrHCfQDozfbFaa9",
  "key9": "3ZK2D9kqHr1qw8gEQq6CMW6FBWjdGZdpoyDomCfzg5P3BRvtA4LCvYC9MeMQmVukiSzHjnHYWNaY7C7TBQ7UHWrp",
  "key10": "5tLB546B1FUeV1RcUibGs51VsPXyU8TiUQt7s6PM1rhrLv8umD38sdoSMPspGJJBHrqRqebVpSHkbFLvN2phDmwW",
  "key11": "5RW8DsActUaNFZytVDvQs7GPxNpPCzm1sqye6LhmCnaZb3UpsGArZb8n14phFGjcSKBngwakQahrmbVXtuFr6agL",
  "key12": "3EB95FZo7Do3NVugtR6hQg7dA3rw9QM3jmZan4vbmzNf6hrSLPftVhGPfq4ZaVqBLdMsg92ZBARnqu6zD5CB95oh",
  "key13": "5tKqC3i3qcbSXxp14QEtTCbbA52mqwfoPxozmZJwt68rNPNCvHcKZgYv26yZ5HgZebwm8Vp8CLLmwWCPHEqGKugq",
  "key14": "2Fjnxw653wZBpvGop1MtvHkCTtJFfxBDUMgt9WJsYUXSBRwFKYWKkhSQVfAK2bfe8cPpsTrTReGwrxXYRvX9Liey",
  "key15": "5swxsuw4inWFc9SNYiqcNXVcAb4heGqvhTPs2CxVGYVhbXgcCc4a3n8HCtWd216GDZy6ugLW12hyyz5G2es2V4qy",
  "key16": "2T5Ufqbj1gbdxwMu614rDXx15fQ6MVhiJRFjANs3SN4HBeXrzMshJ2yZC2tSxg353fofJ1mfH7e4HuBKDeELCZwP",
  "key17": "3t4AGd7NqxY4sLLxzQFvfj2jXJNdMZxPTFYkqXdLpK4dpArVGvrwn8yBN1pzoMgkTbHDJtW7ibLuZKjWNFta5g1e",
  "key18": "3omL1LG5W4Po6ZvR6S8xVxfYnz9Nawa2NaSv1kHFMhYW9ypXoXVMwpArPMWgCcwKUaKxL8U7NCSZ1ahwomXqgLWj",
  "key19": "5sAPCSBQT29PVDimE4zybrnKRD97Q11MdPeaXbEbViPk6gT2xEvE8PQUDHF11ZQQ4S4UbwuUCdmZDp9uAoHvkDqh",
  "key20": "52q47UPHKif1pt5Yu6jPM2HyaTj1aUkmoVmgQhLZ1q9WYLGVDJ5FJS1tapJoMppcBZg1naP7HT4XbwKAQyLGxkYH",
  "key21": "3CXb2MS8naPJaJbnHGEoEqRSgUHqCVNqxxnJsHoUyqDrQfQYLyGLFA2mJeZBUBMTAjGea1LTuBM3FPwgXaKRnqEL",
  "key22": "2AvjfA7mvpLo9JTeDUGvchoWcKubyQruXgzSvcLaRYT9zkJqP9ocCvALAQWAXPsQ9cWikoWTXDoZBvkdLnTqfVGg",
  "key23": "4n9UMkwWkZy3wquxumopzFdehb9tWgXDuifmCTwPdSA5o6AvwpNtJUaCtMWPUVtgw49WjGypt1MND1xF8xcFwToe",
  "key24": "S5YqYNJhqtgQn5ru78TLgy9ggJzk8bDATVSjE4Bj5CQskqp6CVpJDXQdNPhB7DW7hPKSHh5bP7WvDHkM1vVbcZg",
  "key25": "2UHX8eKqZefNt8VeeqA9LBCdeQhxCgG1jGc2fMKrFPbCFRSjdxJN9ikNuwD279Z4z2qqgFCedHitH4AD8AqkqDML",
  "key26": "62HZdQ8EZ3iCcJVXC6Vgbf4sRd32GxrALFAaGV5fLSn9n6T72LGT4AkeS9MEzfQjZNgH2tKUcCKJkHB58WZH5aA6",
  "key27": "67FEzt51kYqbsMwZfdmoTkS9fUJ25xHT9YcXhiNWGtaRsQmAygzc8H1DEKAioTukDzN4hGzAfRX5sscNsFUmHX45",
  "key28": "2sjSKGSMiimCfDv8vHgyb3XowPSf676CeVWo5pu4qy7nP2GU8gNZdWqUKDGuFCRqwiXzADTJJz3eqdGthiVzgf1T",
  "key29": "2vTEQvuxQp1QkQc3fY5yjR5xd1LTexRX183WiNuPLaX9rT8FpEsrjfd8gRNuNTrryvx8352UvSPiB5GjydkvVEbU",
  "key30": "583w6Er3Aw3ymZWDKYfMeYTrcegZtdRMrfELJ95SKAG8C49fgRDn9TohXYGXfF1Y5JTQHYSX7JiEdxszExfdCYB6",
  "key31": "4Q36jjXQagvFCo7G2cJ2B3vBWzphPQvPFk5mtT79NgTtsmP4xJnDsh9NGpvB7uPLJdQDPrWMPHFgtgTeSsCLT2Kx",
  "key32": "2oa5G7JSAUrJnmRFy12gLaHzBzN1wgPJ4jDZ4FnxCxYwXJVzahH1e4SdTMpL2ZCrKwvtMHyTWqjDJenqZ7v8vNZm"
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

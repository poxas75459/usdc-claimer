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
    "3BEHrnbDWMUAmCxXXbKxtLS1VNUVh7nrAjhJA6fh4LTi2XD9QSZFEaPs58TDxxrUghWAD3WtygDmPoVU3VgNiFqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pf3zNQuWDho84YGAVzJiQHGuLcD67wjNG7A4LvHgGB6KFZjXmHYN5HGVLcvpBC2AxtxuwzgfN1mzuXL5HEHUecQ",
  "key1": "289EA5oo7h4uBDbXZefFSw6RoTQ5WPeUgBcJLhNLavnUB6Y4C5pY8bKEYrYZwRu4oB7wWEQBN3aingvbyczfYwk1",
  "key2": "fJAuDrwSzWoKyrWAjmYMQMdMCsaMoghsGBif1eLPYcvzm3jFsYj2dLf2Yc7EtzYEnMZoZnTSiqrhBpWQi7oAMAT",
  "key3": "4tqEasdEJw1ugu6bze9dMbEe5kLW8Rr6SU7YoWxc4kPNys576Y4LUhrYR9hHGySZ8GyA88z3azcvBf89gRGc3YtS",
  "key4": "3dBAT4Qz3J2phZXgXfCzFEMzm3AymWM3EokhAyFZAADqnnc6JRHCyq8qBy9RUzSbLCphh7Q82o6zPgXqVbWFinLb",
  "key5": "2yYUSc7zeKh4XTdJxM2UVikB7D4FHhQtYNpKtrPZD8yV6Dp9R7VbXh1qGytKF6upXdu64qhMUekyyAKV4DjwicG4",
  "key6": "5cSNuDMJj2jLME7kppK6J72Mei5J2DXQy96nGvxizX4E8ShN49bAAjR2WBnV79QyJEr9wzvyJi8Ua9Zojzw3PGvX",
  "key7": "5gECkJTUVxuSKcocSkMdwUDZxyz5yWH3pqMnw8MuCsYNcTB1UpQ7JBiz3dqFoL36x5fkbfJ1rLwi2Smkj5VdjJQY",
  "key8": "5Q2T7uy43VGNEtVDUmMZN9PfRaNSNtnVDN7YexezAGviouXLjtW1DU3gRHykgJDase44a387Aec5bGp1NYqgeGdc",
  "key9": "4afBRNeFyEz9oeatQrzUTCwu4YRWp1687te491xLBN86vbjV5RejusUzXskyexSW5675jYHCpvqzKemG4ZweneqB",
  "key10": "3a5h5XxNssQb3xqhqSGqW2Ktcfep1ZPzHuHc7vvSCCJaN4n4M2iV4JpzHXHNsZjrsD7PpdYe99wLpaRRZ6TLppjV",
  "key11": "2u8wjpEjS7koZPRyxAzbfmK1x31WQnU4wM6zGgF26Nb9MeHZwSrdYopjmN4bv1HzknxYnVq6RLovCFRu7UAXrsmy",
  "key12": "52DeXmkEHMgf8bLMCfiyNjVceuAP2SQAiQXTLe1P4foEHJvT1jSGC6bCjoAwGPb8Wp5ifkLoLZA1K1djnAkELMnT",
  "key13": "66JC3BChNpwrNFohJrh2MQub9mFtXDzFaHeotjd7Jce4sxEFdPtboHtJ4J2QECzNnpqovweKrEAi27y5TjV5R2YK",
  "key14": "2AWX2swaqWswR9LveZB7Y3kn4aGoexwQFsgZPUAx6FW6kBXb4br7F5xRyqu2qSNiu9e9EZNiemKbAd98UA36QwnM",
  "key15": "4oi9opCMXJiGJc73SpjHqRt11B5iSv5deMsyadu7MHtbCRf3tJ5kT6BK7QQqg1Z78r4nPM42YcX9ckvZgxAAc6A1",
  "key16": "2CP63bBa6TomVCJhBRahekMXtpTqocGKhTGozEgBcp2oenQtwbTwR2fPGMXeYmaSGzYgcwSuzVxi13iVsZUJQQiL",
  "key17": "2unaX7ShcLZ3QrF2EmsgodXN2jfziTfoqUriwCx1AuhZ2EiXY5Hnt7mhC1Svs6QhqyUZKFSt8Tx6sij1gzvCwNQt",
  "key18": "3b4nE6zcMWRpFuNT1TvG8QvpCzdDvfDB5YJ9N3KoDsHdw4ZKer5otQCjcRhRzd6CUnU2X3P8LzL3rUeAmUcgse2p",
  "key19": "3axbtx7HBggRwHocFhYoeQ3nAQL8cPYUnwM3VYybQ8U19dDjS42QjMmHAAstsVtLCzSpT92NuRjDmZEL75vJbju4",
  "key20": "45HoqNTSrc3thSmF5qpaYSSkrikxmhG46GQXCsXurVkqau1evHpyjFzQUtoSqwfpVeetJxdukveMJrU6ZV33UUaY",
  "key21": "5uzcPuxeFG8ugqqacHR3FGsK9tppyjWM6d8aC4DJAFuFWfEuiDSHNtucT77G68CHGrmri35o7DXM6zNsWW3wKNz2",
  "key22": "2CkeMHKXrGqVvaqb4mkgN3gdP5MqpZq6dVZ8wxWeK18HPpGaxByf31VzMegtojvt6gAwNfK1QhvGrR5K5Dk1AYYU",
  "key23": "2NKCHnK65FbhMSn53Yj2xyQxoPhsFaeX5Y9SoDHWACBoEyGTYCH4dwwoPt8BehLP6FyekwQtNQtB7pev5NiJum4D",
  "key24": "5VFe8bnaqWukZG1xQQ9q4ZoxYNPevrrWWTjqWfK95VsJEejoRfLmtvoPoHTpWDBtnU6vwjJwCc2Tbbe9Uwk97n2",
  "key25": "4VkXEV91BY7tPvgYBNnVRCdATWWDRzdhUJtdbqC71aVQvMiWCvycJA5jm4ny7ToNpsajsLhEBjQt8cJcwub3Nr5E",
  "key26": "Wzc9bArwqw9E5WMJD2neJeUxys8gA7oGvnoKsSPVn4WYiSYjzNs97DnyuGFi1D8pd4z81AMJzy4ieeg6RrQ5CHw",
  "key27": "5VMW2ft1efR9qX4K4dYfbbtSo3McWM3nGC1KzT7xNY4Ft2hDaJk3C1BYoqdf2PmetzBHpCikMFDA148VUyMTw763",
  "key28": "3vPjbBwPUcxMJwtpaXcYmUdNaF5iD373bEq4nSAL8xV8J3sZZq78sChjm2R4Uf9Z52YZPhLsMbk6jKYMhzuqTWYc",
  "key29": "bvHkH7G5NDpvSCrzZ7t2fb7QV8Ty6Wi5GUGM5knSQYvgGNQBTfBd5nM3aLrYdSezpkGdRbxmeGRKac9YBEMbVLC",
  "key30": "2sgdX95grv69LrnpjmtEWPCnpvoKhG3GcpHHZjfgP1bhmQptUB8ptfZ446NUVvhVxd6hMgHDjFaWPUP8hZ7LgfNt",
  "key31": "sKrJnimYNnTk3MdGUCq2SLTnMLKiZym3LpccZSvQcotvzYAJFkGBPuDjpG9ujs3Uze2LWUzdKeso15N7fJgFqWS",
  "key32": "3AwFRkeWBxbUdVvGLAYDo7arK6idBdwC7sCcraXCRZHDt4UdnLE14Yz3Ucv2B4HWSvnUkB6ad6gLAfSsMZ1fjkLc",
  "key33": "4eRAzMLfMsyBfkYEHtGv3J94T74j5D8PxMrjkf4QefcweKzVsKhR33Hh1Wdj8bWVwRs1jEZgifRRBqsY2ThdToKM",
  "key34": "49exLpKRYGaXz2QdXHcKDRdrHRfimiMB6jra8cQerrNkSUYFQmN9tMugqPuMBkrRbYyQHfbzJZe42wzakhGFDmb4",
  "key35": "2SHPABdrBXCjcpX4jwWCeSuBiCpwFHGZyQfAnYDkUhcZLA1Lje23hbaiXQVKUHsQZ9VnGDB1iARzPb7jnT1E7Uwh",
  "key36": "U6cUDGd5zPSaKYx2R9YSjbq4VpGE7aGQv4eds47nS5swhoMWbb5zxwAw3QzbFQzJmYGvLEev5ZmFe6E8wmDENkw",
  "key37": "4H9g4u3TCQkU81DCnmYKnfacWfoU7WFp6DyQbct6kxrXCyZsB47qsnGwt1AWLETF6XDaE137XUv4shgFd7tXMw53",
  "key38": "4G8K6oJgxBJewwgWnyiKCFTN7RN9RMzSnTpqNauEvJrDQurVTU9j6KmHSTjNYCp2C1P9VCPw1tT7t9h6afjbp4r1"
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

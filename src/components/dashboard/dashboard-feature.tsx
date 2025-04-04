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
    "33RDcfhzfKdsGHZsFa1e81hanW79dJde1q5pS7Ge7wRdUVJpxoDgejSsoRF9sia1MwCAmbuu2cJB7o727jhb4Qxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41so1zRpo7H4oixmd8E8wUAFe3arLuTwbZvDp7FnQxrZVKEecJf6RUjH5ane6t3qTjSG8SZcspGoc6JU2ZTA85s5",
  "key1": "3XwVUnDUoMY1M3V29dPqgWLUfCaRii23qChdJhphKfN42AdgPd7JDz3A6RrmJEH6bHqSPRrU53dKufy3GRtqMPJe",
  "key2": "Tgaexyi33bgJEHTyoZW5NKkNzCiwsNxWhadSiGS3ir1Gdpeh24abqgEmVC1RFsFyHwvY1xoBz9KesJ5UWsV95CZ",
  "key3": "4gaxCLTtZzxE8Y35r9Na4R7vyidiCC2MvCgW3y954w5ijwR88fNtgj7Yq388q3wzMcx1qzNjLei1yNenNvVCLkTR",
  "key4": "H4vUZWygMhksLt3fis7PN1jqse2WXHHkujPLRBJ4NehiboZQwyEH2qgxujwYS9oUjBE6hcyjem6kBhRDxsTfwNa",
  "key5": "MBBXfkKwb3jrprEdfNEvFvcqSWtPkh14fYa2jYfQPrcsYH5gRoSTBUAcFmQeJY4QU1T9aTk9sM2pBQuknwSrn3i",
  "key6": "4omSz7tuQ1NHvnHCCyW7h3hmqvDPtMFwCHD4AF2MPkRZ6B1ijhMijrF2KUJKBqo5GrVp6xuiRExTTxF35vk23zyu",
  "key7": "4BciYj6yqc8buyA1jRDJKhQj8kry3KSyJmUaM3McUwiwJqKhSd2QKTeQyWZcK8gdhxv9JJ2dJbbAsV5aiHzFEzn3",
  "key8": "Kmec11Y3RRokRTXMGR6RuSFUWEjV3ypdZWmdZHkeiqUctBxmLyMuNtTdJFXxvxhbhRZg2zW4RfxehnyFa1TP36r",
  "key9": "959hGKywo5oNafesaD5AH4aughFSbsLWDGvPyxGyVnVkAXx6kZgkiRo89qqrttFibDXASRDvF1MhmeLZwygzZB4",
  "key10": "4eq7giiwVA45VxVVc8MRnir23tieNeNHzuwXA3BnsM6aZNa9okEiP7JNNWZAFp1qE6gxNNzvSYXhT1apkHudYuwS",
  "key11": "2RPec35pUppx8deY9wT285cJ2C8qxKYHPHp1VKN1DRyGwmRDXjDom3QmoKWHVQCgUhj2KU8Vd5jj1L2LxqEjLVRJ",
  "key12": "5VUUy3RqubEgvfhd6ZNbqsc6RAzjj2DirRG3riNB7GSoRRqtPFJHDi383fJ4KgCprvQhohSbh1pCYTTg4Viwa8Ch",
  "key13": "3xPkmE9GGnbwvv63gypBubSQ8tmp1Xz2Qxr39SdSvN5ofZNecyzSs1GV5nSDwZcwJBTGEt5uhpmPpDkLN12L8kNH",
  "key14": "2aVCM6jKXexaTde1bYHA4B9x33b7yFJvmYCwafJtuLsL6vMgL2eU6kZsmtZ4FPWtEvreHbntnihPd36HxarQT7ZV",
  "key15": "2MMt1KwQ6HQSHfLztLKJG8JxwUruUPiw5vAQsVJUY7LcDM5RGN3bbQrkk85i1ThGwFqPWizfo9cjdZMsCo6kCcC7",
  "key16": "5vUZDPtA2KtvTqqKSJfbz4wSoLADNz7FXtm1kBJm6oaW9zLLhgJgWQqMTETTC1Nw8PdzfPHy7FMhKCKPDQgTyhoU",
  "key17": "S9Cqw8aKW31dD9U4816VEbGKwUj7KHTuUrVSh2XP3kPDhBfZjWoLB5gKRdTr7JFXTJSpu4N4CMKT7cnMzKSSk7w",
  "key18": "2iMFNsRsi4usKkYv3DQ2QENaj8noNKsBBRs5VsJzU4GTLmHxVExx9c1s65fW8sbLUJyuLkuTzA98vE6j3q9pfaMF",
  "key19": "3aEhKjEFsqXMnfC217oqaki69DDvhV9vaE1v3WMMubapf7emEFHZjaefw55CFhs3NwUeDurfEigLj2Pm3JJxedJF",
  "key20": "55JJtR7tnVGe13GXzJJgMLfaq7RbMHU9CPtSEmzzygWisFU3ao1RvbfBvvyn73GXhi64DbiQD9mZGB1HAj471UmW",
  "key21": "bm5ZFApgYRAeZ7nU3ApvAdfYAZoYMFHxfp1JCymvBTBybk4FtUMm8XsoZwKgL9UcDwq268uWST9z2xYxVrunvEm",
  "key22": "66fRKfuwSjcyaLi9Tuie66x778nRjLitHY7eRUugMU8zwuWvZdz8TGzvBwKXkzJcz1uNVy3Tq32UV4cJ8Xw558oy",
  "key23": "x4mmiFtnVkgdy3SN43t6tPQRa3eke5dTzFAnR8FcrNKy6jZvJECTF1BXBmHXBq8SVErxZzgtNzq5eAXRQzkxEz9",
  "key24": "A73dxQcGy1YZwR4zfeijZjdHqpxSQiphrcpNW6NNiLr5Qa6Mr8t23gZ4EHPwPQMZHqLMW2h6biaKLhErK7JAcKt",
  "key25": "cNjk85SWXQpLPughdF5bnBkQ4DDYiKxLDmSx1ZpDCTTMAxogD8P93AccfXY661Nm7U2aJz77NB2r4zFUPg5nr1R",
  "key26": "CSexnCy16Rrt6R1FfpudnT2TQTjPVANQAedMuBM3YmvKwkZwbSTWa7k9Dxq2WjNVKdujRDDfSJweme5VR537vs6",
  "key27": "hvyLSjsmuV539BtfJZH2kwBpvvKwDD8V4DxVVRBZBMHEd4c3ZazKE7o9xhAhAzwC2iUHo9BgKBpxy8wb1Pv6de7",
  "key28": "5Gm3Q9LSv92iKdMhNPutG6jUPQsdpEMHo5o3xh4hpf7yrWdYx6nSMrLH3XAMg1o3Jb4YUTHsmPbhvPTWBnXwjRyk",
  "key29": "2zxRhx725ZfKeXDdz6LQca8c2ewnLLP97vv4Dv34FYnjRPBUak7zAXM8ivyhC5LU5VYHLoPMpQLDHJSd748bHfqz",
  "key30": "4UMgqGxqKuFcWPNNVdyYvESHcYoG7txkfQ2qHNmdi5RV1UfWaDi17f8S5pTDPd2A5PaBQgaC5dqcWAdy2uMGBEmn",
  "key31": "4kc6rKBjjXDegmer6koZb143GUjf5DQCsoC5SNoscL39omwdLNFi6Qf7A8udF25KLxjFkZsodvjgwdfaY9u4Ahdc",
  "key32": "5D3TgrPeGcNu9EYXX8sixcKzZX9N8gUP7hTgZfTUxcfuYyTUaPd4fF7mS9Eemfy6PEVqN9BoSL5urCxFq52Awb8Y",
  "key33": "2xuSTjRgTAMpSnk3crLpVKE91Zb4bcFzRdbu3mam4yDkhe5Z9KZThvFaRsupXBAhcvL2rKSxtaLXks1VYs7YTm4n",
  "key34": "5iPAquz7QPVne42theLF37PAG3Tu1oJEo9CgDgaW854jyMbfBkx3Ho4FdqXnx6isic55qFiZC5brRiUwxKWmpfvq",
  "key35": "haG2JAESNur3PMuakyyDsPWWkmKGpfhKdZ9TZDHRxBvfpby2nSYHEpqTFUhFuKFCprnECynnapMwT19BHyYnnuZ",
  "key36": "2NMnBxMsz41wDQpdnH7Wwgpnwcms1CrkRcH5PAR5K2fu4YRC8HmkpeU33p9sHECA7uY9qHEsNeWkhJrzTgNSP1X7",
  "key37": "5Svry2WhaAX2fEd6Mha1MoAbQNo6vFF4yg78Ar5fvKQKaFiLnFqfcPBxHrSgfKZjqHYyYhsf1Hc5FqrbbDQWH38B",
  "key38": "5ZJMns4sLETEgWKJWaTYR1uGbMhPThw7ATRpJcPjhM6qEm4taTbncU7T2sPZmSjA3emnyiqM9gZQXijsJNa4aEVg",
  "key39": "2rXi6DeM2CLYvJBNH36FpTp7RqWYPp9kuqHxubrUtPgUeXpmRPsuykvGLn11fsMjb8tZLcPSiQZheLQZbLRDojs3",
  "key40": "5Le3j2zz6HkPJhAxEoatadvPtbyYEkjEjuLamyGL79KU1PdVQpCuVW49deaHDkFXvA2US5sVT9Y4m18AetN9U6Gt"
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

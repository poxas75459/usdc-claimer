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
    "3TsgjXJpt29uewQCrFFKa3j1AoHcFe337pH8fq4phGaaBXayiGSkdTERJcTvrWrFoVkjduCeB4DsZjgAuSemEtWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5biTbFDWfBNtWSoiUYPxETkJmTS58D1U9PCfsnPTRXWFVMbsb8fndtRuQGGGbQdxEZRQNvj3Wv8GVqSixR7A8wJN",
  "key1": "4JogiyToy19RieitEX4hPw3duZtcY3v7WcvyNJBC6EaFo4tWQcWLFvYL4JvpvtzhVycn2GrBRXoM3EqGF94rdnnB",
  "key2": "F2UxDYUwAkfVctUn44u64sY1wqVyJtizyvbmXTS9vVv5kLqrqbgjRUvyPjeVwZy6MqhyMzdWqp9cMXu1aHrYBJ8",
  "key3": "4YkmXj5ys45iu1myaDvLh4JP2KD5URJgmUofHxtdLpQ3FXijkujj2j16Rq8FQajGg4oiiHtGrHth2xhAAvmcNehh",
  "key4": "35T1Gfn3m5RZXWMauuS8AEkX3pkinaPyX9hQumv6p7rRcEU7k8Uj4dTagVSeYWgCMibTa4hJS8zmZj7wNHm8TSoh",
  "key5": "4EnuMh2ma5SVwsJxWYTBsY8JKvbqaPhgQp2dW6zeWu1kex249bNNQbuynRYtEf1CUqAXY5hZKqQABVypuMD9qY6U",
  "key6": "1fPhmcfyLbUPTi5karastyq6Kj1Uz14cC3aam9zWBxgUjG5uWrRh24mBYdPjeJVGGM8BWdusdFFmU69XZnR3ZPV",
  "key7": "3Z9XBx4UhnnewGAHwfkQmKZBPkgKSQSzB78zEdd52Z3kmjBXzbjjDhFrJMpHuH5w7JEUnAZc1qNQ6rJ84k7z4Ze8",
  "key8": "3adxKHYgK1GjXScTsNV83axXcwm4tLFqJxoev777qdJ7ifP8TZK2eRniwn2sLsAXi8R2zsLeG97B4H4hhtrCkUnU",
  "key9": "5oTtG7sZHrsFKSASeLJ5TPxn23hMfbo6ZSvZ39QicNZ4jAKiGhdEQsWwggtJUwPNjUtnPi5WSBPbrTNXwPeBQXn7",
  "key10": "2akrNAfAhmuK8MZdytzSizogu5N4VNJoMH3VYj4x4Xn5ebd9T4jS1zfL426DhASruivQbrS7ifbwu2WZ9pUSjN82",
  "key11": "2LXdGwj4LTNFZM3L657ghwqDwJjpPtqGTQyd6tTjAzxgFuqsRWcmGKEYAqN7vWuxHdrDq82ojexdYMCzeMBDYJKY",
  "key12": "rxAEMphEtjhMEHsbMqLJ5A7VpFZ33yQuKwtmQ4e6TYGUu5MNx3RJygPovHbF2swST4UjoYZeqMnLL5vvSmP1L7K",
  "key13": "5dTKk3gwrZPraPMBdL5CefiWyB78Rr7eVQqETMDi4DftwDSrpyyvSFF8kWYdG4TRwsL1SD3DXuXubj5qew8ocu2A",
  "key14": "CXuodvxByHCpLNHTWgi8FCUWukD1u9ymYSnDWQ58jPu7a7eg5nnTqvypAJLu11x8mYvUQkgwYvKSkRsH5mCF8Yn",
  "key15": "5CH4nRpusakE9x7UQhuK7zY1DN73gPKtPNm7e8FYpeY66KnnqmvvLvPMSrtBxurqs15cwb7FMXKozFEzsvBi4jbX",
  "key16": "34t65BASxAs5YJ8LsG6ErJR9jXsA3EWqUVfprKX9269UVCrwzvEQqXhydmPrQioKjocZkM4vmjjgjTCRXgsbBbYH",
  "key17": "3nbv2u8pysbrTCWFJR5mt8AHRa8jLQHdMZVkVxtrL6zB5pJTjLkWspbZ5ruKgbNPK66x7gPTgsu1zAMcYwNgudyF",
  "key18": "4siVj69fkpKxky6Y2kLZVHdSxKGAWH31R6NfHktjxwkWsqzUqt5NVnS3toev9s3Va4sUEB8DA7ox31Qzx7kAPU6",
  "key19": "YFHC2UKJeVNzbU3XTRdkRUEirra7jRgEfVsxqmENv8eJ4PPTUGFFwr9RcaZuEc9JJAG5fsqP51CpkuZucJarUWW",
  "key20": "3Pimqsy7M94H9hAdM4cqN7p6cnn5tkB42uhyetCSEDsJK5XRoguJwPVNLQPT7adrCX2HthJoX87YqnUn8zYjHobV",
  "key21": "2PCsF4Li6mhuFHZn6V5tzP5XyczuEzZ5pfCvdG24kN1ACgymyKCds3HgTKLwnG27rvpiUrP84fbR1xCUGa18x61Z",
  "key22": "4WY8tsykMFKs14hddY51vz57qqGTujEq6hvbjoy8DnAMw6e3Yxp7MjzMrrtE9bB4XxqyTdmvpQxAeC7s3NaBnxnH",
  "key23": "5pk37okLh1kzaKVXnqqDDbg7cr2A8Y3nF1QY87CaNJPTJWZWXXEmfVcXLfL6dMWcCUonUktBt7t9q3x8S68t7FfS",
  "key24": "z2rDqJST94WG8bvrjpTFLRHRoQxsbo5DT9bKyQ84Cqu2ZpFcgnpGhpXbCGsT2Rx9h7X9YNk9yLFidEU8nKaMCHu",
  "key25": "5HHu2vXsGLXQS5PPWETKBm2K7YxjzLWbxzBBADMhifKJVL4nFK6BZDAEsVKAY8VpWWbZsHSSUUzuUxtUM3zrY73W",
  "key26": "25ZKid2UAgKbHpGC3zvPCxXJ8HMKqnnvtoaVWVXJak88PquWWLnVdmMa2p3aKoKQo7Jf49YJwpJ3ZeoS3tBzQW6q",
  "key27": "3DcUpzeUZvS9PZYem1qbBx91yKd3JgAkPnK8KYqoWN7eoBXJKC2qJt8dbz52hMEHWPnRAJ7Yf6axYsUo4PWwrMdz",
  "key28": "534CBGQfcPp3BDE7kaYw4B5iYHvpEwGkVUnuMnXY5fWU7tCoJmYtdaSCsoFSsqZ3b36uLy6hzfJT3ozrZ62ms1qK",
  "key29": "5P9sMNBnmfsWLzmNtJsHKetQdF4nc8wi2Q4GMaMXRrEELkXZshn5CzUkoXReu2GQNnR8vytekSZu2ijUXw4ezHoD",
  "key30": "5rzo1e1HWY2WWywW177fXdZXxbQYMYKbdpezADtd96iehJgz9cKtE1zkBhCFNCx5ST8Bzd8v4wtfH449k5xxu7HT",
  "key31": "4WLThmtwpBAqFs49pHJmgtKisKQLQ3dV8wx1peFEPtnSZZiHimEaoDBUjUZNywXauoEmZRsUCz8PqCxQ9oqVb4Dc",
  "key32": "2B7A7NFCjivyogUaZXdKV2jfjKP7MmGwjGFRYJdjtiEJSpXycdpNubMVLgck88QkLpdP1V5ZXE1DMpovgYthx1xf",
  "key33": "5tJSDoWgL3WeD1sPiPCVuGuMRNYmigebmsPL1LJvHEAjNVZ4nxiwnkYD5yDccD8KvVmQNwmMwGCwzKKrXJA7yER6",
  "key34": "3wZZsuxYRxjb3H4kUrZJzoCALByMx1LNWyP5ikY14e2E7cLTSK2nSTn5M3DeCm356mYqrEesSxrEsdym8oPByVaV",
  "key35": "3y8FmihP1nUe6ME2bK6x1YVCjK34RRP42nSHhSYLCcU92T47DhuHfJMrAmc87LkNoxeZE8QM3Tv7oFNfWpMg6Zmu",
  "key36": "4sWg2deQfHyFdVwmwrKRgsNpnjruhkBJG758WAtgFf6LBxxw2CXvQSqYP43iN9zQwTBtwXrc1gzdENnFfCFccFF",
  "key37": "5bs7vQ8fBtHpQYErHAXhdSSBnsHDzbT2ZBMPiaafzXLBGY6QvooVh762xCwHk3VDxRxCnVdPUWGA2wBa1yonWNgg",
  "key38": "4rYk6wZY3akx4hhXerbtZ4b9an1zuxnR4wffCzkW7r1dnWqTLKSxTEFMcHfhPXrX45xQdt2BF96zA1YHb2azfDDT",
  "key39": "3gba9EasGh6voR3HFHiLWxh56fYv6wNHipmn1SDhTVQ2S2SL2wxjVpFkBVPyUCBWS44JMUsdoDwudrFRa5PyUnYS"
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

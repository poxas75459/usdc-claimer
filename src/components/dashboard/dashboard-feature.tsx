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
    "4YBXCz5MSVr9S7cMkw548ymVKdxpNpsKoHmZZ5xRR9rsz5LrH2Gz4LqFRLrrcNqGER7SxGdBDQ8wjchZbo72pSKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hVyGwRYYDondBKopjZcXEh45aKFYKc3LtFkCFUDgQ2L8dP2xsPZezdVvopGsajCdxTjxnX7NZowSxzZ3wrfaNsi",
  "key1": "4i1YJtjepVaQx23GLLFpz1iEi6junCsJc8hGpGH6FPtE8X1BYq4WGDLunJkXtjuvXy9d25jYWUhTCdKGDwkuiumW",
  "key2": "2D6zvUqLHBjxqQ8baBmRfCyxVvmTut8Co8JzWxAzkzEpKhdaHMxdEoPyPxBKUynebZhE9WY92tx4fW3GrESmiZ3B",
  "key3": "4viJSX9ghdjMSkFJJE4hAAz2MSuXV1cVZpaEGMKbYo7RmNUghkYb54NgJWx48Jiqka1WbbmpDYtTiQs11w4AvP8c",
  "key4": "5CRbVFB7xz5RcVJoUWAPeh5z8Eg94ZgMpDatcZYkLuoNiagRETnqoMQDywmY4F3nVPvx6ekGxZu9GAzLejLvEn3Q",
  "key5": "66dodWoJK3dinVin7TW44Mv8p59otnnTd4Kwqu8X1qj6etyuKL3hQwuKmduQRpanTKx1Ry8GCAEdZPmXmJgRD9hd",
  "key6": "Xrgje1TK35bC4Z3b2Xyb8ZL1SmJa9tGTQQHh5EHiwtB5TZCL9H3LuQxyxsxUfkxPsSTY9942EuCXN7bvcG4f55G",
  "key7": "FQQVZ9nfrbY2dmxDqgSP3TNE9LGQesM6cmtu84YXcDRju2Xet9Z6LZubfqeh6NfkWPzSv2uDCPLkfsEFob2DaSE",
  "key8": "563RDbDVmmT5LJP52H4k95AnmAcVeXV4UUis9xAYR1RwHAv4tsFN44BrzNP9dgbdnNy4TMqMbKXNLXHANGuSB8YP",
  "key9": "3qcfSoJhdTyBfZw6rVDvjPNjcGYdpDpbvrV9fnXniv4tAWLUKQCeveHYoQwQpbH8EbARDgvzH24E1XvdYZMPq3qG",
  "key10": "41DcvwXdsG1pCnX4BzHMRT6sphEhnTj6xsK5mA4ebwhT96drTW8eQ1Gentj7V3dbu1UbqBifhQ4dP2K37ndbYNwZ",
  "key11": "2mzo4ucebQSbWvDLGxKLmN8t6anZ9zJ94Qhq7BvRWeNR1k4rje4WjiYetycmKdVbj7TALyxpBMqndkYt1AjJpzB1",
  "key12": "2LQhjqbV7LmDfQQTnJCkwC5vP85FUKTpi2R7sDhWx6H5mysXPjv7QXJ4n52oBgrMfjAFVc9Pztt6uffYfnqbPTJS",
  "key13": "3EWe6nhby5sdQBxKhtng9vXonYRNcy2hmBtatpk7mcZS5dLVRXcacvWe6BH54wmcd1ScYKJBUssjoMig6iFy1PWK",
  "key14": "5AmDWZdsFdgF3VY9CjbhL4cDpFGXokHRFAgr2trirFt54muZRQmWXfx1194VhoArcwSSF9zMET2vEA4vwojSEqYa",
  "key15": "67JPz8ByR275FQjQkGYMch5uPg2YwpXWMQ9j69oby4BEVFgfcYjsnuNdcLxi23vTinNdutd2miQTH9FGVp7AxQt3",
  "key16": "5F563MruKLWi1bhyuaK5wtogMbtXyj2AztuacjRQiqiCg84owLqpZSWczMMcKqxFMtAyjcgKJp4q6dWgq642Sgjp",
  "key17": "2KSvPNo3ivH1eJhAm5RJJxPuQ8snjFzrH7fN4DjswyUGdvLHRWcLZZQPgHm6DXNz3RnNGhCU22qtZGF6oJ3jgLdD",
  "key18": "3Gr8Fh8ncs3SZ5j2g8ZuiC8RDuqsZQmu2D1FSGH8HWs2mnUdS1EdX6Mp6sj2nQowc7kmZ6MtQN8tvGZuNoqbZSP3",
  "key19": "3Ha5rAUfCPXSzi3iSTW8E4Uj57KZTKYi1uMV1p29ZxkFdb7Vqb4QKspatH2TmNQtDbfC4gRtPj3fP6W7kiSuFPx4",
  "key20": "4fhZETgZoNFYcjXXVgzGcWmqJdL7w6tpdZqz9JX3zY3PjTG2GbVFv3xuD5CjLhdrE22pikx82W8LvDt8USuCMRxN",
  "key21": "3cdd2LMkXjk2GAi3dyNnD8y9m2anks4STFpyEfUYtLxqU5YVDA7H8pzLnvu9N7eZX6E4vKzZeNcvFwdjzj8ns4WJ",
  "key22": "4vWY2foQjafefqWFW3MaHWCQ1xTGEFQsN1LwwWWkFvKdAzzivZJxsorCoeTFiLXHhQGBSPBnG3tAhy4yx8XDW8ti",
  "key23": "2TZYJc4Mhaga52kbt7o4tqjnaTkYretLw8NTkwcfpyNKqZnJoDp8ReyWPjS4t2eoCESQoNtKJKsQbdhsM23mKQcJ",
  "key24": "4oR1Ch2CHFnioS7QB3B7zLGNaf8Y8fHkqNfz7nztieQScYCfrghc2ozFKukbRZTbJzHePmDkn2zUCLXBj4zSdJoA",
  "key25": "5GSkMqsr636hM7oZXJixXfgLV3B5QRLLCVPqCJPgCNKRM5DSDP8aKFv4apz6NZoUaPMrya7QLfgKNgkZruF62uuf",
  "key26": "3tYY4aE7mmYcndNnCE3N2RA1Ex8a8JmodM6UGFH9ZBUpTjEWS94XGvpFGp83GhTDDTTkj574jvHBd82N7ofDbbne",
  "key27": "627HbUGN5NxTGz39gjDohwCAPwjBiLMVyJuyyjkrNWrSrgm23yoShgh4wenXBactmNoJJVePLxeKdDpcSD2YctM9",
  "key28": "3ADMveKbZnabYjL8sviEkK23vc4Gd9a7rgPAksCDG7CuwdbonadmJFxuuFjHi3Fx5cRMneGvFTo91uwbaTjHsik3",
  "key29": "24XpbUskVoLAWFW6uFoT2ta3tHE7pa74rQabgybzWDszhhBmYpf9uHeEgHXhwbT92bjDFBaun7BdGUnNJFqRBCnz",
  "key30": "5uh2LqTJ66xUyi8SkkhTndPh9ydXWztwBWwv4oWWheBu2TiMR6BMvKNVewYcnxfT3pyjDwJwyNWviPwwexEeFt1p",
  "key31": "3ENqZkGiyPbFtwcfhnyF1k1K5RcqWafWPRkVkYF3RicWAP3aWqYzTrmrnHoQSn5N2SbtZ4tQ2zVP5qLBNAw41zov",
  "key32": "5KKccZCHoTJLP71a3u5QpjdHzTfNFmGV5x3bXFdUGiUFwGPcxfobJtNLzr5vkgrvdmKhZ3bEqD265NDLAYxyFhmP",
  "key33": "2Tz6pNvbwv7PLfcZiUmZkiQmLEY7NjvU6YXY6tkXkohBEqxZ7UP5uUWmezQJUUJ1iWCTN5zEUiXCNgxNcSGBS19j",
  "key34": "38rGYuTNuW4oMxi4WSYWng6eM3h6EuVzjX44zXnxKqCWWa71aVqt5MJpDvrzH5TfZrpuxiY38eCv2u8XUwRXjezJ",
  "key35": "2WNCR8mwHR6T4DSKVETGf7Uk6MQcSuHpmxvie7Cij33YqNfJFBN37Q6cPW1TfHF3UDTKMFzxE2RKfZz91KfAWRAG",
  "key36": "56tR494WE2Kv9zTYcsGaZc2FPtAphyV2XfFhEXahkUqUi4ES8eQS7aRmcTs1JziYiXtFAtghyxDndzr4HwTd7WHf",
  "key37": "32Z1Qu8PFKLdwUg4ELAvqsVQncidAXUvnYTuPqpRD6QbLSyixrWmBAJwYg58ivrHZbvuD9SBMLfhoabUKN9oFqGg",
  "key38": "21w9hnTyxAfdfnhZdqKRYVYJzLQPyJySySpco1XyTzNEn8mnyF457piLFN5sECti7RtTEMseUuiHTyRXkSpMbshz",
  "key39": "5J7Rmu51b1Cwiv5uhvQxYt5BeE8vxqWg6pK3i9zQ5wVrizvicwSAtXSi119hhG7J37iuub4HYWyFixLUXsTZnf52"
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

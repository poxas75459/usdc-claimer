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
    "58BpKNSa3eHbYKCmnWaER6pmNfFGB2kYo4fCp25hoxbkaRJhiPZBmxABMi34CJYh7JtiBVyDGkA2DLRaKrU4Hpdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ticJDaoHrspq9M2Rimmv9NLaNAxnykCMeoDmEcHayC9qbcL6kvnXbWY1TZcJjPiSwExQUDdSDx3QP5Er8uGpMfV",
  "key1": "3y5RmBjEmAy4CiheX1G6qFWR8Kh8YB7is9W8Fd9yaxzoGBaRecKkoNu5nHzodpkpSjZjiP13st2UZEEZALHZaQXq",
  "key2": "2ZnB7vZAwkUva7FXiAFs2myiN3wAf5gVWZWgLiQ2q9VyDXFjBA7sJZVDtLWubS9N25W2wu4VqSvHgXRfssw11Qv5",
  "key3": "2FKNnoBDaJqL43RvpkooQ84pwSZJQb5Di6XcpkfcL5g7Ctq97bjGzEQ2f8ekGNM13BxBXbBDzJBiiboVJCTJA4hY",
  "key4": "LuDHrzXoNJ657TWnzKsWrF8XWvLnZvnemL1MSRmSvsCUhEX5uiC6UnCPG6u2yQ7Cdf6crMj2psaeCAy2EK21NTR",
  "key5": "5wgdbjbLtqJ4j42b8Mtf5i3D2BD5FSYkjBgpBtxQ9fheZocDxGEeDJiq54Tu6PNrgtJcHa2ZUC95TTzMqTPM9Nmo",
  "key6": "5bjwfZZ7Gy8hwBy2BSiQ6pb7cMdMUtB171g88FJEQFEA7263gGaYCARfKa6je1zqKHyQWsEMFP3rqQ8yjuucmEEz",
  "key7": "5SaChPAChDSCwoNVbpCT1qZAVu3KHNGR2KHYvtfmUcBJbXUJKpxFbuPrTcYuh6TYdqc9omaR6LeF6EcSHp88r9Vk",
  "key8": "3ZaLLwVT5gNxY2gbPQrxxa78yf9tob4mKRfW5kueZREmDaGDMxcwf38jP6gC481MR3U3B3MKdxnzPkkFMPbJbAJ7",
  "key9": "4YXVy3xnhecftKG6SoP5DZAPeYRjdKA6PirorxsreXJJc3fBxYoGeBwWFM7R3GGA2p9eu2suGRFZz9Nhd4T3DvcP",
  "key10": "5jnxg3aJTstQMdNUmAhPodPuBtwzGod4PyEqWR9icuMZKMpNJbNav2BRhNS8hayw4aYWwZZHfS2mYiq8secN8Awg",
  "key11": "5xYvnSBDCxG5f85K7SoRjE51U9tCohtwJoQbMsS44X5odATsCpvrv99kT1iEVBX1hyxvPgTK8hj6zcpyLTHcZiBG",
  "key12": "2N5QBR5MEdnxLbgBMuR4SyqwbcVQqxVpxziGUDkQ2ioCBfmLoAsRGCAwYom2qz2nscyPjVP6nsGxwMtiCndM71Ff",
  "key13": "g8NNQjVuAsaXBrfVzCSAa3ySsf4NeSp8Hj6qhzfnFjNqLfkwER2WtncEXH2jJBLzshPAooZMLMqKWNtqY5cmGG2",
  "key14": "5UPvWQnWrKS6CmpicW7DSAUhpXFfg6yaF5dd26ocTEwi4vPykcmZRpgtwBK1mraP51m4N9Hd8aMbdbtukkWVE9Vx",
  "key15": "2UVxG25tKuRW5Sv6P5TbDjr8xjuFC8Npa7xPkUqs5WNx2ZEzqmR7mzDYh2coHuDjyQSe5fCoBiZv1WhkCuGe8yfX",
  "key16": "2oDJT6yBwjLAK3i3ukYpx1AkXrCUwzkibYttVieNmgu66MpDjzui3H4e7EpGRnz7PmX3ypWKpLGcLYVcW8ySKfq8",
  "key17": "2agN1HaFG6Xs7Hb39WdnBDwY8xGExdHWYjFizb8QMnbjqoGJVYrWpCn1WhiStVSC9WRFD7zp2qDMYSzD9EZ8Fw2L",
  "key18": "fNemTNbRx3ZdaYieG5JvAttzB2vyn2sxn178GB7wwAkWdUKKNK6rUmgMyow4edYYVdovfMZgC6amLQ5ujUkAJzm",
  "key19": "3d5xWtbw7wzGkZHc6FLeWT2nbAbM1dhyH3PEAKRKvtxvZw67tbevZBKSr2eQzQSDf7DVwn9PWymjCnctX2mRoCz9",
  "key20": "pR46y68dXT9eFknYv7PuiHvgDrF8RtFBfP53UoKzcuPhZXoKDKZh6qNnrRi4syM5esiZu4iRdDq4nhJzeDd54gU",
  "key21": "4SoPP2vSnuVj3K3rUvNRKhAHnA4yWGXS5aAZAbR35QB15ivVn9KDXHYEC4XjJSgF2vnBSA7TkPishgLZxESWCtNd",
  "key22": "3zgXoSkdCCoBJCMVs22PhukyEEGdYTq4sWv4WYPF4fJKxFxSXVL9MEUTgyagtoZ3BSQan9avFNmbsJcDQY9VdK94",
  "key23": "2wxQfvCMpYf1p73mtGPbYFwYdkGnbJKA9YAQ8CgTvSVZHPgSDh3DMNt8iJdRzjZbUDJTXBkw7nSDTYiCyYQjaQpb",
  "key24": "4BQq5BQ3JQ6qMG2Pg76Xdds6AxFSWtsqM3eUQvVPEAgAzQbNCnZeNCuSx8FJhTeY7XvHF8RETCG6xJoqUt7wGfaD",
  "key25": "MFkZ4ho4Vv6RtKDLRiKXRQ6W2im7RiRCckAnVbFPfTvjdDBuwAbm1xV3CeVf6bUcZctBnngPxRikbaDAE53qAHE",
  "key26": "3pqeT9ZfRuUMTW3S3Q4yzCnpdKsQQq2dBRs9Ht4VP26yDxZEGqtFJy6g7RNL7ubp9q9wjq58aKi8RDahieHeGkDb",
  "key27": "4PBLXyhDJN67kxmk1LfJUr9gcdPUPGthu5fpw1WauqE5N8DKxKA1mX4qsWuC29QqyA5x2qJjL5xoohi6DTyGp2vm",
  "key28": "54xjcNtRj5MrtBvxJvHCjGKAyGS45b7ZbXGsoLWiGLxrRWu9VUBQPnoGuB8PLbjRQaMxkYmaeEW9B6ATxubhjDgy",
  "key29": "48MUwJUpN9iTCru9j5nXXVMiqwxTX4rQzPb1JTrtURQUfWJkAsN84LEhPm52w7rFt5azzhR9TUUTmXTMnwUjNBjN",
  "key30": "56jnaDnnf6Y1SBFHsEZH3F2qRFEqm5iEtfkjtaBoE5uYqpoVfU8RGfYAdu6pc1q2RFPtKdRVdHYBuSM6nskwxPp8",
  "key31": "222g7ZmNXmsisGwUmFsNPVA8hY6Rh4dwgCHYjYBWe4syFq4ZjxYapFjjejciCfaAvAARnPF9J33hbVQJupQJvCSp",
  "key32": "3YW8TxMzunidTTcF9YFvdFK9qNTAoF8W2WJcFbGjzHkd7gAFLEbXtZU9kbCko36vfrG2oB3ES5tNqnkMa9n7F8e4",
  "key33": "5LkPzw2Ec86QyXqRT5tFTDpm9V8ZowQWSpp31W7PuwVrWF3JouT3UAJztFxMhVqS7Y3vgRc6XFK2bbfG4QAHX9nT"
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

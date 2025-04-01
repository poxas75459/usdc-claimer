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
    "5XzZc9TRdmLeyCMp7UH79frA6QGpJZqGK2GeLvpJMEdqXCrejkTHdDKxUVeT3UzTpxQ2Wb6W664F8TPD3jitVZ2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qh7FcfxXeu5BXqSkV1ThmKKPzFGu2NosDadTXoamo3qwviDpVkgZMsH9MiN7mLgXZ9c562qkGZZH8KPNFqPjUzH",
  "key1": "5GDGWpztwxVcZHV7ZhJLMBnrjuMtA5nuN89efuZTP1kLU3UY8F6CuZpQFDs21nNMMc3zzqGT3kiLW6LUm85a2mVg",
  "key2": "3McxrrAuGoDgJ18uwtaP5Ny8UBAnAHrxo2rfK6aSz11rWHm3fv7ATAUmvYsCQ4haPwnUzYGhmvN7FzJU8xw1Mxe7",
  "key3": "3UfwnUUVXxruf2m1LVkZoSAcKbJLTNjG7squE7djkqaz6MkP2W9qSTM98yT8tBJsF7oSXPMQ2jDRZqprTjCpGfTf",
  "key4": "23SodZdQSyqpmGYmiuRzSM2UDTgejrWB5h7zPF9h3GpCbxpooh65ktg58S8KxLqicfGY7hccNbxqvNHoFUisw97z",
  "key5": "373MkQTgpkSnocniwMfLBc8g3sGb9BC4G7hgn1dNAWv3MFqrsfiamZZ8b1JTPGCJMVfTsXDA3uDs1D4Zy1bJzvNx",
  "key6": "KrqcTTKPoAn8tg4TfNmr3FG2MksUA5d9qkZUZMZL96aDL4X5xEtKLEociuwkVpLgfHY4r1gmtQyDnJb7uyQEpTi",
  "key7": "3BBiQHgtvBJXEq5auz166Li597K4ikZgrpRKFm6T6FMiiS1aftrsCNz11mPLSkcEKGpaQZS5mhHfmptb48ybuALd",
  "key8": "5Hbqf3JFUASC3YL1KkNaHvLfzGL4Ezfha1hm9PtCbR1sHkiz7PcuZhnu2rXjz51HWcU5wpM7AwwqfgjuB4Ywh2Jw",
  "key9": "2xvn4wkQ32RtkLRdHNbWipkz4oiUM3te6BGgFRuTrX5nb76BYPKLCTq3enQj1icz8WFGkyjRqDihfBVKoHTC1XcF",
  "key10": "4SQNFReKgZjZPSKNZpMCLW8v8cNwqZLomkWTB2UmjJnRJ9H1EdSf4jWdaYdWq52Hu6wygFg8XEEYnzTTZ9WGEa5F",
  "key11": "3id5fYCJCn9FEzFiagVDHEdV7EnnrhxKPg89AmG2TDkdZWErc9D37j2M26JGxNXTv19JQz1KHioLGe9tqsVxR4fb",
  "key12": "2yYZLM8gbRMtEz7nGnpHQvtSY5KcBZ2HJHCVyRPBrx75XA14345YwjZXLCkcnpErW12M2b2Y2mME4E3Z5TyxDvxT",
  "key13": "AyyVTEBqnYqPxYjbnnCobhouAgh4NuGGS7ncTp6V25qJERabaGm8apHKAD23oR74Acr8Wjo56UFCjvh4WFfqkSH",
  "key14": "tYCG5ZsZBLsKjtaLQoWdJMQdkDuLaHC4n5xFdcEDMnaKhrAiGbX3CAqFyB2mxsi7M6njuhEE57nuiHUKdsPb9zK",
  "key15": "5mi88TiTG7xaAzaU5L5LjoDZsEPJp7FFCFjrQAVz1Kmj1Jm6tZW5kqZwAQaGHZgxiC2n5NSNk7Z75heRgYWpypo4",
  "key16": "2aKESDmiiTUuKzeTYyc1rrZmoF6AwbMLo6BCDcUasNtsPCzQu4n3t7CVBDZhbvGeYNwYvY1rRFNgyGYZFQuR6vcT",
  "key17": "4fksvgiahzT9r8NiuGL6Ph9wxeJZvgYbF3wWmDZq1ip25qsthtWxCT5Jz5TJEcPtP9dgnTYiPSZBcKxv97eKYzoL",
  "key18": "2iwXVEtCxbJLt8bvk1jovkM3g2ZK5yViUumnUUVhgaym3tVBnu4kCRMurV4LgQX5P33CQTrcMuNF1NCSYSCfRcgd",
  "key19": "2SQBzS2AxncGqrsSXxTSTXRGaFJtzNNiu3M61adokSntAKHzXTmJgiWA6igYTtcuFz8iacKBQerRphvmwVTnjj2M",
  "key20": "2qGP3ngYiaACbKa6AmG9AF8ahEjBGV3DwDsG3UqjPuz1XtFYGZc3eaDi4wfC3ve1NWeT3fpip9qWhrMD9xAKrRMf",
  "key21": "4gYTa9t3AEE8UdNEgiieoqUWtq3yPEME3fmmES9UsPJ7p1Yt8mhqYiGsDNxy4udpfj3K5H69eCnW3jKrv5G5gGWf",
  "key22": "5uixGdr67jDbmpLUruQJXhkggXZUBienwLS2eyj1jcHti22BN58nfZLWupwfcxeHMHGAnSTqU4LwURmpvTHZszrG",
  "key23": "4PoSYb19ApLqsH2xK85qZsf2gDSN4AatMmECHfRacVo44cdWRPhaAmHVe2m8BdnqKTnuQeQpjjA4DJwekeqPKvkJ",
  "key24": "3DGM2i1LHxQBN8EJPG6ds4SnUh6xPMLTAMYEMwVAGcZbfQSsqiTmqaqvv6M5k6qzrXQdhvTiMNvEaJjehubjVZ7S",
  "key25": "2dKXZkPFoNbHyB75tJECg53ifD9RVFYCGK8PGmAuBx65ff8PxGdZzswhppaZf5xtNzc3VXkT97obLtamydxXoaR8",
  "key26": "4d4HTQHF5WG7Cz8uN7oDG1PkHncqhBCDAKncdDShuXkPHcGHUky66WdqeStkVnk46ZdCCxcPRCmxmQ9bGkxXeK4F",
  "key27": "5Q2uAREBt4XBJKb2LcT3Xmsbsc9esnzWY4kZKihi4mUhMkV17DoDmxMMYFM1AirczJQnez3DKmmQ93RyXGeV9qpL",
  "key28": "3TXabfLBSwngZcfUxfYZEZz3wAibUhiDsoRcycKqbbiuAmD8f2ykgYhExBqYa1iJT2jRXMvBCJvsZsbQL5qSMmRA",
  "key29": "3EJM3xJaMozjNFHrSipqx51cGau3E8G9Wb2iEdBBmy2Rji4dz9XVrM3cnLxdaLnq4fZVtDVkBmXZdnS3XCKp4BsC",
  "key30": "3jD6vDHYSojQjGbQ18k3cmjE5YetYG8ucwL5kF6NujWTV4KPMv5xCRqkL3KjmPnMTtDupVrStm6urJfcRTkPZLK2",
  "key31": "57ixieyJa6SBDmgxWzWDJL7uwnpDoBAJbNecrFNk9AsCmSLj29q4XzVYBxbsXQsTdpvTh6zFkYxY4WozCSDGECdE",
  "key32": "4hgfyNUawoTPKLUsZ3VEsbnaaNRumLC8EZ5kXD2SGQK9ZrhtGA6fp6nQNddjyvCQG5oeE3A7aumnyx88y2zxjQc2"
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

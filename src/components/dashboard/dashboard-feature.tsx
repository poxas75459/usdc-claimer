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
    "3tAnKR7f6fyeHtvhVnpQLGxhRSFeHuCLXSbYtKVm7qJGPQhDdGbDcn91Tcg4moppcega8tANUoQ1ZJ2qWSaASgkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRYVAoUAiMc1e6RBySre4p5c7GZ3wcbMzDEeD6U8V58P9kKSeAeoT5Pb5K9465N2h9bygu5BRJuMMmVX7r2SFzA",
  "key1": "5HuJkAZvjL15TQLGWEJKCowGa2zBMPUjTGVfNMfFEmbpk75ogL9cnS7Bzzy5BXtVb85e9PwkL4i6fBKTfu1v9fFA",
  "key2": "4giXmJCqiENQ8ks4AUxTdsB1GtW8vy8wNkpX7CsJrUtZPJtM34RrkpahRfA8SbDpGH8cwH4sL9aHtscaySVDmfTZ",
  "key3": "pNKjhADDaNZzztLwgEiVpKVRu7w51eA5DtQZ4tAq1pffj1D9ZsUXW3PW6n5dmuFtHyidHW6uz3n5VMoHQsusrv2",
  "key4": "nn9EeGT3VGGL14xycgcT4PqrGKGVnRNerNinzmMqjDW8Zqhu7QvyhuGUXP7WhWGzDo2cWRApD8z2faEu6766rM1",
  "key5": "r5u5SX2GC34udmfmQMoH5YeQkFDu9WK96r1qL2Pe8RgShUNSbq4n6XMQEe3anA8mJkkuakWEooHkLpt5NbuuBqp",
  "key6": "25o6jBd6nNoj1VTNW5V2XSq3tMExyLmofWJjj1s7CaaMd4mN9zVQZgNx4QFdVa7NTow11bPgnnJptZrZpamDjE3n",
  "key7": "zdHbc4zhRdoKLvRZuxSDNtYUbrstNkm9Fmozf7KED9zXFFdpyEAkK4HJzZMoLcNuNvxhFFzQAWFTRSjw9QjB4Hh",
  "key8": "m23mLZn1EefDPMLaznYLpwGJ4J2zGaK1LbBVrhdJjZTpLv9nTNUqAPT1AUZtMjuueZZbKq5JyKabFgoPNG3rUJX",
  "key9": "bvFi88bBVysnQ3jhKp8uZDJbwGJ7BgqmtjfheWu4LhzmtPrHBeMD5saKVeZK4eKDJLLrQqnbKxoCug8fwNRuWi8",
  "key10": "3X1xTU65AbmdT4r2YeEMhc4jpXTsuwAqSWnfcztcF5wFJwTdDbh31NMBee6iGCZeqUecFGR2KzsqsGSZovvFz4Er",
  "key11": "2T9XjsVbh2fUFjYCxKmeA1FBGQke119asuDgT1Ng3r1E7nrwN7CCyDaVU8qagc1Z3QTtbLJs8DZDZxko8WF9LCKe",
  "key12": "2Vf3AsQky6F6HSNscwxwfwC5Fk3sqZ8hViXiJ3TnB4zTENRhYVJtJ4mqCnkeBgKKHcNpJ16hYrnPdmXYwySkJKb7",
  "key13": "24836FAad8C9ADdfSxe8WwdEXpHkv8XkcHm2HmpGChCNgyBJubd9ofgCzM9g3cEHAqn9PZbLnoCHxvdkVkNibJmn",
  "key14": "2PKQLmM4puGVMDZfyUMg29xbL74mvQm6Qwj9DtWtj4oK6SfUTBiPHyeSzB4psefvnDpp7uKBB2KDxZfad1Vt8ANt",
  "key15": "2F69mtR3Q9cahXRgPNUcbeyjQvwsVmjqrj342w3qxyjP3zT8dsHPBnEsahEgt6gpSVEyoD6hBTSNwyCsUhfRSUnH",
  "key16": "3XhoPa3tye39c5LftVy7rkhv7R8zFmYZ1n9q1oGXp577jXUHrLFcvpAqYhd9bi2oi6X9ZMKQUkfW38EYfjZ8vA2v",
  "key17": "64zKyFsf6pUfrdi6T1WmJViaqYAYYo8BwPC7iYrk5Fx8zpF4ZkPkz6SZtQmf9q4q1fxvaKft3zWz8JM9yi4ggAcK",
  "key18": "3XVpFo82E1eNhAMgeNtzejdWg1QZsNSkwPvPX3hFxAgjFZhHcb3byKW8yG1ATHSskmJf44kVwdXzVmLU6PJyRXmL",
  "key19": "5L5i1QJdxNp3H4241DXk9VYvnb1qSAZjA6kLnC9HNVsCH5WJXi7kjPzmz1433kSy42EJcp1voc3wX2vHiriNiKju",
  "key20": "2us5eDakoXzQ8LmYevjW3y7SJ9UeU9tV6A6vftTBLfeAj2a3QqAgwUeYcJi2huya42RqMfpGPWQwfz8Fowdt52gz",
  "key21": "3qEntd7hYoHJeU5bN1L4Ec4BRvWKcZ63ep8KiLC8SLjFHDqYRZuV2psnA1nExn1bps9SU78x4pjw7AJrzArMriBV",
  "key22": "2uasKqYYvR5wUUc7Mrcwys4GKXWV7oVgbSgwLtKSFBYcRPYHp55F1ugaFV7chSU8rw7mUxMXoxqEudtiwyaDuFzF",
  "key23": "rhHzbqtTXehBgUQkoNpXKK8rvHTjcdWAdVdfLMvFJk61HaVXUsdcEipWRRgnMmY8sUy3xPRZGiXkjzx9o7uQset",
  "key24": "2vMWFTC8WcHBMxmrAKqhdsga3JTYWwohy71iS13AuTvBEGMYdyx5FtVzGSmfksW11FvDtRaaAjJv7rUf2JVFy5Hs",
  "key25": "XNFuK39g7d7Udv1zeRZV1jfam9X9XzkX2242DH5DNM2pcjsJAe3JiFFg179k8pNawBf9Gj47zHPEGggFf9jLhvB",
  "key26": "4MxwmLK8bx2pSwNGXcE265Vhy6evZctF2SZtHCLzA3n5cnsw4pf8Sw44KVFUxgfd6eJfZeSB38nqQaQfNmJHcj4Q",
  "key27": "3MjyvwXiD428Rin9AtZMrR1ERRSFayspgu2Nn9QauSg1jx2sETJa7Sy8SUVxwWjZ3KYVZVp3fD8LFpcRPbk9Bwt6",
  "key28": "3tubrugCKUZzvjpYgbHykVM8CWU9V88A3ZGdkqXWxJk39JBFKgs4VVNdQ2AQ3qD4Lfyb4toFx9LAWBZrJjJgKVDk",
  "key29": "5BSUb2phBJBFHtAKGytmXqjXmFiyjjX3R4JCZ7Vo7XkN5YQ2koFkLDpWjFdvzkEq6vGu2QuR2ZC4vDoB4QNeUPSs",
  "key30": "MgpGRZK7igV2dV5cjYKpE4BsX2WKaLMLiEr3gyK32PJUpCdrM9aNbJeUVogXdBD4MKzHNWVm3JmTnbo2hsdkuh8",
  "key31": "2SsSupsuAcRsS1wSV1mZ7JMCo46x4CuVfufxrpQSHzivPbnUyrxDkdb8kCfG2A5LceQhSRhvgWJRAFwD5VDFHMuy"
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

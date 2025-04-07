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
    "3cV52PcBeWnWkkvbQydhz7w5NpF915By4HHAutHpKyHWsaLXkGZuGTjraNEFMqs5Sgsu4djCpbSyFNWRr9Rz1PU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DocqoGt71CTNvR85ZxW8TDTXpaEuwJ7MDpqjSfhZVqeRFPkArMZU9M3oBdsyobidUVkVutjPRAu5879xtWqv27Q",
  "key1": "3YC7UYgNEb1tqkrZ1fQVYUirKNHZJKr3qVciWryrizaYMa8SktrYRdBjtzuYBnhgpDjBahqqTe4D3ATLEdDpNctB",
  "key2": "bn9gX2Ec4kDq8GLcwduYnuSJK3WYPmz52DhREx81xWYKEEGNikiiTaVYBeXR82p9DbothjDckkDLDkJaKF4CXNa",
  "key3": "5sJ2rou2WCGsw4LV1btL6MX2422vz4uaWEHYQJgp6Ypz2kie3uMx6VRWNDyrryY2EbmFoQYb6HXhcFXmGANcgVyd",
  "key4": "3De6oeoFMW3uuv3vqJyPmcUp2Aza7YA4k4XAHkGqxvCGZzBvkkPWzRqjgCxdcHjo5ESGdZNhGzR4HWHgc6Fyuzy4",
  "key5": "5pBwnuKS8VkMTbGiRpAShidek5vS5XLZ4LQSixXGUru5pCCdCskxwv3GxBL6FD9EDe6WszHYvXzkrnRdNNUx9AX5",
  "key6": "4zqT7HQvcw9y8ieCp8omCpA6UwTLu1VHaEfUxxTp2WYK7wM4YfD7Qad4mRXfegQHkz86CYPKCPBuv8ZMe7uGkAY4",
  "key7": "9QvmDVuRr5zisWkibtVT2swr3X225KCGfqwpRD9hPXHQMFHrHLdEWN4BjDYyP8TQU5PnPWej3GZ1BnKs4WdMShm",
  "key8": "2QESRiRT6AfiA3og8TKnTSxb1dpd4DXWM6KuW9Pqpk5WWQUFmJnwZ6VaqoRfjP1udqfe7xjSdA894St9jhG9vJB5",
  "key9": "5oTbqLYiT2LoNF8nJCmApjFJQXGBnxLsokqMdfp4N63ratJMKFUTCVUJbFzrfeQNZJTGigtpk69Y3LFvoKKWZ7XY",
  "key10": "9b32dKa24MxWNJNVwCkfnR7HFZ2P8YzsnAGvaztpSB5XTETokV4QLBuyjTi9jzvcyj1KBaZafPQbHkajtcGkpVU",
  "key11": "56GhakAcjDrALjq25EAE257j13caQc6GNQDaVsHb77izuZf6S3inF7LpPFneZL7YjNF4b6FWT1TzXyYpP3DHtqUK",
  "key12": "48epMZTHN8brhELEvV9ezMBZRswgMGMJXiWKwSX1EVjFpJgdgzsgvgpRBdbS7S4i84RKbkheQqefqdPoyUmpmDcK",
  "key13": "3y2fcVNvwoTav1MkYNH9cLfbPzPDrnBkXtvj2sYDfsU7JgVH6Vz53DyNjSVe6eKkn84321gHizLJUW1gGqKT51tX",
  "key14": "2uE3P4uEKwJpu4LX88dEdGHFxSJr77nWgNwH5Nd3o33D8gUuthEvZB4Mv8BBFakH8Vek1UVgKDXikzPq7W6zMe1h",
  "key15": "5zn9DJwhnFUxS1P8FRikts9eXo79H5eEwT2GbEkGAojkjdNwvkn5NdgepQs9f2jrmFKdWVimMt1X5hqLuZarsxbr",
  "key16": "fdcEHXEnuD5TinMYHZB2TPERUpjXMoS2tDkAv3fJ9J2g2pMnUz2bTTJzE8bckdSVDvYSNSnm7R27nZFqAD94qW5",
  "key17": "4oBAF84horvTyz93M9SpeyDtZzyFRtsU7y57Znr9hzotbPuNuJc6Pcf93GwH164rzunHL4TPJCVBnpJUWZ4JWykW",
  "key18": "MiLidPuP9GEyPFq7TyHuoMXXmDNWUzpKZ1bBt4mcsjSW8VZLcTf36zpSgRfvQG3gNCVJuQFvEqCFLJbfp84R1BM",
  "key19": "2LKESGDuJqAQgWpmMXSpe6pakSmj5b4enonsdeUn4k2Ad27xJ1itDAZScHBUzkQB1iVp2FsANPcPY7BwNbZRxhqY",
  "key20": "2kkXebM3GrzwR5c4ZEcoHdwD6cXSfrQ9tXs7sVNwwSWtTFCRkFrRkj9enebVbHiKbHBwbw6dzfiBbCNjxm3A2GRk",
  "key21": "2qUCRMyMFfTEm3MSf8dcqxJJDbzrEoPXR1mKjXK3mJCBEXsJ9BdhJ13KWyvM823PYnXdukLMD6z61gauG37ATYGZ",
  "key22": "5qb5uMAhmb3SV6XznL6vM6NV9hVmg27BWGHWKnoNtiVVNZXdD6xfhF6V9eYDNBDTi4HNXuJC2GD7mbxK3TSjexnb",
  "key23": "zxGQyeomEuKCitb5P1uKduTZKwtiYDi1FnoTGQnvnVx5ZjuqcWe51C3P5yydRhn9knquqQ9RqWrYXmMyFryonSq",
  "key24": "SbSLgQ9coLMvtepWzf4bYYUH2D1uLwqV4iRfLqq1LQYibybo6jJYBTtXnKf5nbsoFVsAoAtzKkCahMba7r82LS7",
  "key25": "3ScxYW8iKzUgcGQSPTofT5vgxQbRxD4sGqd5gmjsveXEt8HHC9zRQpUeo29UcUQi3Jryyf45d3bTpN3yg4mAkKRE",
  "key26": "5THAjwDqVA5HsFtdSdGvuPk2MHPv7nqKfuyvjKfzTTc4sdecmenwf431HsAPpbyb5qKDhQzauEKxzikBj6w7dk4Q",
  "key27": "5RYhyjjyU6EmPbiZ5uEsDbma9pZhRuLqVQHs9B2ebAGMygWF9iFqfSPRJuaGR1isxJ9MKBx7opkC17pt987ysx8h",
  "key28": "314wZMoWRkpwDcBscPH2BpR4r6V3wZRgGjgJEzEVjsPx75i255p3S5TK3khWHBzbEFTYGDX3vAiiEHtJSNDgNWGn",
  "key29": "4oJRUYUZfpJ9M2yQwpMBRTMfHmG2TZwJmiBYERjVLNadPJz5tvo4bLXiktaTJSnVFMUF95RQGDjpHavK4VWHhgZP",
  "key30": "G88THb4qw495dHnMf16YJiTUyFE95gAWSRNFXJLgMDSi4wrBzQzSCaEoy2raqjV6JtkcouoxGVKAQ3XoM9rGPvC",
  "key31": "3N4JrTUaAK3AgaJBwtVG3NpepnNpqMvwj2BgsKyQuBxEJvjJvZPFzaReBMFtBypib4zc18ndn8kLZKXXE21225xX",
  "key32": "SApqyM3VJ9QjHeaHPhqbx6SKDoiLrTA2GWbDsAeAe7ykcaqeRNyFjA9JYMc2WSy3DzBVC61tLcAe9LMSepRnoyf",
  "key33": "5citxhL3kpkK3pqDnftGNu6jzhigmh4E7UEfGJWbQ35JQjTaxp8ijDCJCQw9Z19fEMrPekkBwjTKS7Wcnxkq81cU"
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

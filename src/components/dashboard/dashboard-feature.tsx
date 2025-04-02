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
    "42D6fFfodnwkh5WRbnt1GLBgodPX9pkeopiHMcECDJsyZgpKosR2FUz399SeeNkjaQEoLFvxaqhGeNx1UE5vtJNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4PbQzqF56c7x9388hJAAkiEjjdLqXdU6cdiBEXa5kx3wG2zpGkxVM19VVtUr184XRixv4tqE9DmcRo4B7PWSut",
  "key1": "5pjCFBEakBAQBpJ8cqgtykgzn8fpQikfPfJEqqVqfaYDfw27CcxkxUoXQ9FB8Mrnsr2TiyUrjWANGz3J2xLm9Wwu",
  "key2": "2T6sDqKCwXFHmFSZmt8eG33iPwoLxRuJrybpyHfk7PcudpnARbaXWv5s3966o8xa9ydRzdr6tKtznGyWS6eBnhNd",
  "key3": "4vpDdYeTM5hRT1zGU33jMDmvh8LbeFUZ2H1VV1w4YRrzpn11gzfbKjAbJSriiLqm5RTBPBaCoG5dSExHx6oWoEBk",
  "key4": "3RrGe2EyGVNkeLoEdNn3pe3fgS8GJZqB71KM8XbmMwfHEtw6KC8ELNAPKxdGuYGKsVQnzKnom6BnC82UJWrkyTxc",
  "key5": "3v6hpetXbqg2hX6eU9eWqZNCTLoHkX7Ut6ToUBnpvBqmQDqneS8uNrZyMJ4orLZ7vHHMyosaEqw8pwEJ9GtqcxAj",
  "key6": "4rytMKp1UyApmGv3TdLVnj3EK7FcBiEBQMck8mZ9Gvs4s58KYKF12vdgDN3rCa6Qgcfa8zA6z6CwThimgt6WZ3nu",
  "key7": "57SiUhwMwEzBVBkNff68CL2PsQr1ytUb2izBymfUSQn2Pd8rAN2B24jWNNXp5S9dPuWUKn592uE32kjk7dBxSzy4",
  "key8": "DH6z8gK6jJddGeXHz1p6Fq5MbtAdQ184UPEy57PpZTRppiGE3a9gjFCr8g1ZweEJYAEZKYexup682eLDqYFd7ss",
  "key9": "szqcgg8P2R8TV3gGyBZ5f2cXaena9eJo2u1QopYrM2qhogGBEidtYACWntyYk2U9LZ3nkN6teiwkMexFwFmdvDe",
  "key10": "4XvmYixP6qG9YZ7AdQEhxjepnhRh2t3dh3jLSmVZazaSjSPgvxbar6E3fYLdRVvRbbq264F6aFqD1WmFxttqZ2mT",
  "key11": "4z6pJhs64gWz7VC3Po6SReMQ3icWyvNUspQHjTNkboWmUCdK7KEiucbw7S4x7a6RufMWieHMHU3UCrwotzGJbjKw",
  "key12": "32yKJdnQMPnGKp4pPT32YfAdo5T9WUyvwWzQkkUhbbzQabtxCSU3v8NcY9u7PCv2HSFjMVfyQMHm3aJtxgXsYKv9",
  "key13": "2CiFq8P55eF3ebaaMYwiwGmZncByDq6YN7nHjuF1ZgMEctmJhA1QUWRZZqv546yuJ72PEKV6PQpgvrZXMwJg3cNK",
  "key14": "3uJfKLnp1aw3BSycAVX56MtFEnzjnraz8Z1Rayq1TaegyS7umQemVu5WKJiLZMbWmu2xPkdbdYcbiPb3cYK3i8pZ",
  "key15": "3H1ZCgTiscXys6XDS6hVxSFBiyRhngAYXxKxF7WdeTzsTcXQCRkFgU6GDzh8KwTkx5UsERvURN1QKPdfxt1uGAVn",
  "key16": "3bRwhnHYd5yLSdEitp6Urp9f4qK3S2Hka9zZ92ZGDYhfGZBet2NWymnQ9SQBF8Acj2qz9aoVrJjxMCXDefw2aqbw",
  "key17": "4sNzHyDBJDXHxRAwHN912yXiQfTKbbfuaVvJdAhhsuvcKY2sdWxy7uhXw3EkjrZaQMmRhZry1APS6G3Xyb2ETjwG",
  "key18": "2udXD2d8hd1mADqARYnyHWcY28Pc9BJXSXYbZGD1WJLtp7yhA1zjh4j2Ay84dyfMwmU7m1mNUNADtgdCfgAXRMnN",
  "key19": "3A9ZHmVo2DJpo5Nymc31c3kvb97qgbWWYFxaka6yFeDSmhm6uUP3R1ep727T6JCZitvh2WRd3YuaTYjXHBcUGzEh",
  "key20": "ygAAfHhoDydomozNbH1zC9KxUTGrnz6Kf5x718iUWAxeUTwDnvQHQtTvDDBokHhXR8fdsd7nh6ifd74df6mSBb3",
  "key21": "48XLzVrRgxJtyjUJWj8qK2GK5T5FogHaQdK7JSZ5ibkBk8wF59Ztfcg7Qt8evx62HqaqGNzDJWtVxnC53FPd3eXA",
  "key22": "AWGteT21bkAXRfxTu4uPFj3nUnrfGYqpae8U6xMeKBS3yMJ3PC94rJjyfGr5hcAQhw8DJwC5ZyeJb3NgQL8XZQp",
  "key23": "4kq7QxUfmnBqK5SiTbu551Vnenj9msEXWCgZJt48Qi8ALqfMf48vaTrQroYCBSu8EMAv5AkynFhZqJS64ztZf4tE",
  "key24": "65hsiBWNeMtDcEDJnZSdbENwm1jPgWxNikn2ka2gcvCLYMNANGabU8dBFw6LHwyLW1tQpDcYW2eZWhGFN8NJAQV8",
  "key25": "4cuZ3T7tNVpvn2jPt6hdt5DemYoxzsHbdwNaj1FTHJZ2pcTJuREHBEDUG74dUinhYTjXH4n2b314tkWCSvei8wBb",
  "key26": "5s1DYLB6UCvnZ8yT26vwn8kRjGU2zpudjTGwrBgLbQKtnWNpdqEibGwtvz6KMtfMGrGW5xcbFUuj79EnKQ6Nvo7b",
  "key27": "vcvJMmp84Rmzg1cJZh8binPJMXjjWSk1Sii4fs6i57GFBVgR3aYaDqsUGdu23RA58q1cdce5C6tq4Emo5AXb34r",
  "key28": "WWZ4BnCQPWMDHM2NR1Yj9WFKWMyz4rwRca5GuPSakyvAhGfp4rnWzVgUX9D7cpN8sjQgyGVPd8Ds81L7YRdx5Qg",
  "key29": "urYzTy4udyyUqDJ2LsYtUN1q6mMyrzc7S2yfwunt6uMzH8YWvwTcCPnMUUoQujBpziCDUQF2WW8bYmZ32UjaesU",
  "key30": "54v1nTVUvBnNGoEAH84p83PyGCL15msv9q3tz4ZPs9YgTuh9cbQcTPctRuaiVexD83VpwyFw5XuR6jH9ar1BkkJd",
  "key31": "3vYysDTiFw46ZmPHbCkhEUnNeeRez7AtSEGkLmhn1ma6vAgfgHSZRKD16JVUvAU3qzFR4Bchv5mCEZ9Zs914YpyK",
  "key32": "4D9bDgiaDk4TDU7cLqZchWqUiQbqyWWSECE9LhPCeWrtxsw6VpfRW62bRJjoWe5acjfk869XZpoQfD6nxe37hjZ1",
  "key33": "2qUT6Y3w2rU42HekE7avZUMsRtheC2m5X4fgASVtL78LiLpGtmWcFjCX7rMfMzqYVRsb94wS2bZNEwikRxHz8FXY",
  "key34": "77iCj8SXhdxk8qPbnVTepvJ4tRCJCJdM9gysdcJNDSXRkHgiNwZum3UNpLqaQpbXZ2DLtheqrRPge3eknMcnVJL",
  "key35": "5ppTcqbUktvZ5JUzquEt2UTFBY3Y4zKJyTpEsA7cdg5u8L4ovxnG7E5i9EJoXn3zMXsPCGFWeUKULkJHggqrvUo3",
  "key36": "5s6nN9fpf4ipFJmDE7cNk2TtNqNnG7jRftvjWZAVFswJCszBkbJjnLrNqbEHQ53YsTpkTqREvEZyaN4fG19ntJY6"
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

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
    "22n39A55B27RUQj8kH4oVJSyE5T4ZV4xoRQ6FKFsPANgsbpr28HKJ4f9zuiVXq4MmGLbZhHZMevRU7dG4UBvFZpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWztd74dnrZNVJQpuHWTUmxWnBfhjH81bemJ1WykHR3FWnnmqTv4aK1XYTNwg5v7RZttLeoNtKMQZhZBKmmjTrs",
  "key1": "3Nwa72qAnsfLwdiZyv4kgL7vzuUdqwWzNxEPUQWeeE4W2VgvoK8tSe8D5vXaNtxxuFkzQXjDNhqf29x3YqBuGd9D",
  "key2": "597f3UJ3YCtUkLaEWsyxD5wdL97hUrb7E9MuYc5FHfRt9DHY1A4z8M8Mf3WwLY7X9qkZEhkH5PxREF1eoyCY4GXF",
  "key3": "3nP38tf4wZwGZm5rqAxwasBzw5B9nq7tWmhxxbj4p6Bn3GDRbX9WtMYWZHmTKSAHpiQRsfMU66mMAH1S7z6uGUpL",
  "key4": "3MxB1T6CMEJWKbYBiWUwGYqfrWZqZi8deXebvRnfTDxi92oYhD496AwDCqwA2eqtrPizHkXTr7eHTTGGvfsxJXPj",
  "key5": "4Y6EixiExJ3edndtBKH7b7DTvHZvy2HNg9vkRmw4H2WSY56upyUV6Tpv5zunYq3ZWEcYcn9Z55gAtiteJw1aYiKU",
  "key6": "VcBYAtcjUpxa68gbpe4PgQ4513vsUPi3XwGrFm7fbV9eKSXNkveodb2fexFmL33xRvKodvK2A9oqsZPe8bPhMd9",
  "key7": "66P43jDXtZ9HmmXRHtnBrN83nprnUVnWXz3fQ8wdRkSZSrEGwG9UZjVgQH4rhbtxKrdaxFPoGEtXEA9TXQKuvKPG",
  "key8": "64xJV9fqQH1kQichEBsB2T2iF7JegVmhhXu37HRLTh9ZYvYCpdZ3EzMBZwiPob9Wvsp9owUfZFHnatYLrFFjnGQ",
  "key9": "2hYNYdHVrzRqUgK8BUJMKtanaavhNZ3LJkpEAaZfnf5gkhBCV5vBwDHM9wn4rZaYH3K8u7MDUvRKJWicy2cYbfjv",
  "key10": "5Ev9pUXn1uZtdw9DJknEvofdyd2UjxUGjKFhrmiiHr8xfmTKhkKzPDWystUBWZESYs9h8qrfDjCsKUg5Cwx9k5zs",
  "key11": "o7EvXUjFqv8vwJiuHd9k9gYQER6zmM2Lmx7ZEpvsajueAyLCCujr98BedWRKya7ti16oKCnoqNj2qpR4mNEhnA7",
  "key12": "4sGRUGjkb9jxjRaRrmdTyCAe2PamrTzWuxo48JTuGUUQtzywnGn1BoTCUJMNSCjUw5SGVcZtY9ZzrUiTTVnU8f4g",
  "key13": "4Lfm5G6azUEjZ5eQNtEtXaAYnBSkQV1wzVZ3sPLyfExmxQ4oFyBTSaVE2CF1aUbKXCbfKvPM7jxphzpM2351GQ5z",
  "key14": "4eyFT8QMNkKFaisGk7KRdNvJ4Ewy11hA6ygv1rvzWTCyNX3cSW21bk6N1u3Ds2JPRAwRG2dscAcgyb3Na3smQXJn",
  "key15": "21vXaJmbN1r7xQRLYxcszVCnb3V8b1bRpDAcmG7FzP4p4FzJW4Y4jkSQcQw8zEHbjzuMfrDGKk1XE4Wh13fDL8BW",
  "key16": "2tb3JJH21hhdzSBmkcLt3YRodDgwp4gs1mZrD9nfMR79pZymJFczYVTcRUh41UQN84dUfa8XvKommxTDsp4JU1eP",
  "key17": "3CBX6A2wY1zt63AQJGrdmo3JZuHRhnrDuNpLqb9FUBNdePi29SF7GJju2ETyy7uncRwGLqQWRzK4QkhRBScq5fTS",
  "key18": "mESsnH4iGrx2TZdL3usK3jGdNVCW8rHCA39ceTnynDXqDEufNg4kPmi1RiGeZBFbRBxiFeSq2tEza2Jai6wwH7f",
  "key19": "4QkMqm1aT4xQvaJr5jbRb8JcA9V1bEoD6ngMycZFeP7kX18rbLnWjL7cUu9b4Xh14pTL8zvUcvjkxidrhy2e5bj7",
  "key20": "2GDP3d1UwDHzHevwk3tZ1dpAa5ghphjgKcfnxHM2gujysP7XNkwDPyCofAFxokvzgSfQDkQjpgfqUH12NWpuzTLa",
  "key21": "UcaWzp3sZeTq1ntUNa2Z4uuCwhBr8ipW8b4c5fexfvj1rfgmWLTQhG6pKv1k7yzxWUNtsfuuxGdADWWGyWtmnpN",
  "key22": "3bV8bk2xpUe9TMrs858zqvkdpeFeykeDQZ6iim9mfaS3DMdQKB2dNgnuBUvDeEB7258duzWzAvQPn1Y7WDkvYfBo",
  "key23": "4p9Kgf2w6bZd68Y5uGbqRQrrhBSbJBE4MTwLK3ENYUipWZRniqmNgiPAgj46VLDtmKH5u7cdeMzbBqp7o3LLoMb7",
  "key24": "21yPWdawWdksewLSouEC6wNV9DGXozWTcDeLohtueQMKkZZbEwsvNBT8bgXPtqq2yJTit6BffHus6W2NMzAgw1wP",
  "key25": "3Zm4wiPgp29G98gbrCAcrtvTpbXcEkKupfv2nTZtQu49bomayZbaz52yrm1sttgGAhovi2iv9CMK6cJFhebVpiqh",
  "key26": "3R6RwU6R4KVXbiAjvkBV1J4E8zrSrhx96kA9495Bg74pnGeWFViR41BzuuEEvRhaBMxX5BNSevD4rjpnJevF8XZB",
  "key27": "4txbxUnn4xbjszmeb7xYRYUJHGyWGDTyeNjCnTBycEpKSruvLgrWZ9fmQfY4R59qtCzoU5TwXBAJMbFbCfPs9Ygw",
  "key28": "5bsb31Wo7nTnZTB6gnBFHYW8SAq4SGPvxdunHpX8kyCEFVJbG5sWmxchgcsx799JpdJj3U75vRemYempuaYRF6TE",
  "key29": "2vCa8cGckbN1SaB48gZb55tgK8uLJwrHQ1E1PK2b6M9FYpfXD7jk6GfyrbcyZcKfo26tycKYaRurcH6xmdw4NVba",
  "key30": "4PpV3NiNHadz4W7vs3CtTD1oYNGVDfZ4XuCmcZGJMi684cxvpRB3H4Pa4g1m8vyCLnXt5eF2eCwTgbiWSWcJg9hR",
  "key31": "3gBuJCdFDhsJrMrodf5u9mW55zg7oiLy8c82LN25HMMK4TQExAt6i5VhopiHbfXwTKLgHcYbFtfMvBGsx3kZ2591",
  "key32": "5JggreZm1zq3wMKTUev3QPC3FMtA3UubBF9X9CZy4MrmLgi1aurGNYM62Q9rP1LGs7CpM5u35sAdPvvViaMoEguT",
  "key33": "4mVPWbem6jLanRQUpyx6Lth11wTNTkw9aFvw7rWooau13F3KAEK23ymVNPX2Wd129JEgZQmMcA9bxwV3mExo4onK",
  "key34": "2SbGt9wxdBhP75qV3HPy5EVsuSTeqvL58XV157mhaQgA93oWsPiqXMh56jWJVBEY69MZ34cRXTRtq7kn48p4jjgo",
  "key35": "5w6ckzsgr9dVvzRHcvBSefSLWYqf9TRhq3vb7cxoT3p2QtYX3Ur94N17iLTL8v2Zijmv4oZC1YNuugvBr4cWcgQ9",
  "key36": "RGgd1ohaDTn28zcX1kXxC3QygZRje3Q5gxwLGjEyAtMsxie2FPPH797AAhav4M3Ht1diqMoWNonnhV5oEcEpa6j",
  "key37": "8upG1YhsdXrC8PB4D3t1j6vNDU8K7TWm97jNDh2xUQqhC1Q8NgwQgGNkhtzFscmFx8GggWyfpopEo2DaFvDLK64",
  "key38": "famaLhbpmk8bf4FKSRNHf63hYwiKmH2RL5SQkcYfgCtVKKNtAUx9VFSttbvyLXPZVDkWPaquDk22X2DFQs1icCi",
  "key39": "5B2HCs2MsKTpy9AZKo4QRbcfB8UXKUP2ryppBC5CQfvSeZchj3Hw3mJjdG8NWKabAvZTVzH11wNbVmaN1CS42fmL"
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

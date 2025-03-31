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
    "3hPBpKArevXQESjDuZTJ3THvcWmw94jvkkDLwYr6ZpCAz6uPtcpzbA51eeR12A3y3MM444iTaSeC2UBeFNSL5XtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nLY6zbNM7Xf3H7DVDoAuP5PteDMgMuufigTaVGjKh1dDPxbfn6Rs4iEMofJXtJ9WGAujPvUgYLot8NagCV1fT1G",
  "key1": "3TgPtamQAd1yZystkzd7ALZEWcZfEyw6q8Zg2kTJdCVH9wTLGm2XtmwbDN3iy3XtWdDnuu3UKdFtKgxvhDg7RXHQ",
  "key2": "y5gcfT9uhihW4rEEmJK71mbXxQNNTzsADrGHmNsQHYvR6METXAV2NrZiJDHyUtq6pPKV8CTmbnd2XBoUwKBLWGf",
  "key3": "3565imWu7L8axEoTLUqZ1zcnQU9iD7VRxxoh7KBhbR3MJoe1dBkfPCdogAAcRskMFjzeFU5pcCW3RWhR11kfccLb",
  "key4": "4WsrnK4r8GFy9H8tP5obnVQcpYLyw35zgF44BeCwwHquWAr4MoisLLWjh6YYA38ZtT3RtPEPvPTNJvKzzEbgyMiw",
  "key5": "5TFi9EWY38fQUC3sXTdQXe89ryHVZheeNjLc1T5RSTZnCEVw7Yo6P1DNdgbEmudfpPtkM7cM3FuToRLJGUwxVvkp",
  "key6": "9vRmTnjhUptnKp1zp7i7Bujc7bRsYpuMGbjLZojtB4zi1aUdwThcS6rog7zkHssAe9EhfgMe68JnWammx4Z86vk",
  "key7": "4arYBvKFG8Mc2zfRrpiWNZ98oXgF5f5Ma7V2doztHsKmSDeaJDwYDp1ekS8XAt5E1tPN2Raskk9ihKevZdyTCGhB",
  "key8": "QHDLfNitXN5DF7tcL6ycoriGsCpEE4QmieJLEQXzrSMyBCY7WvvfYaFstZxes6gAdMXavQzBzyz7SqS1nqThZzY",
  "key9": "PnjTAKxmW84nUvyVR1fYkPEC4BK32mxwvQzWXfNgVb2DgWMfWABtoDE45ZdpHRKamWCqAj3ebfeeUF6ctyUvRBA",
  "key10": "5AY3kxhwqkWpQ2Yemm5CMKbfgBzFWCMQ7r3pSZnD1kBBGU3VAsHQ1oKZ8osz9djMUNELUmb3u6UozgKnjgWTLwi7",
  "key11": "5Tk4CrRHxrsXC5oefbDZdPRPaBzJice538QWZu9wzY3MPk37NRwY34XGDnR9i9WNFpALxyEmd5eW1og9iTCLb9xt",
  "key12": "qEvw31J5Gevh4d2CroU3XdZxsUCKeZSmrfJXCLzxxFhDrU5Xk8YWUCiyWcBLhAubaGoNqn2pWvzHd5UAXDWqU1V",
  "key13": "5wfQYJb6USDuRysNUTiiQCH2w9xJiUf8wzdT7XamRcw1gunryXiQbc3qkQpVBDeHG4cnYpjGNBtoVhTDeqsS4ahJ",
  "key14": "Ru5mfgTvRoDmEvC4UwMqHsMC5BviFgQ2BZt2v1n5i9jsgCVy7JXRAKwA5r1x5t8ws4jqJqy9sEDk3vmTzzqqCEn",
  "key15": "ehrTbQifg1a48qecH98R72z3c8Ji4Siv5WJYz12aF9sKnFjNL7JR9vfWxTmEzpEeenxesgK2exEtRbEQsPJPPyW",
  "key16": "zjuAM91KCkk1Sjo6P1oMf3sETcm2mYQZe1XzUqxW8A1ETYtfxPdQUgLXs8Abkp2vYdDsMk5zK7wECzGaboPqoUd",
  "key17": "4aFyXPGtZKG181kT1ur2nKUC1vdQiNXFQdnKYxU8P5tgrAVT1pw3zGJrgMxQZJN6SeT5FL1imiFtq29EuYLT1zwm",
  "key18": "co6VoTQmXwTZiBvUs7Y5rzf8EFbtxUWY34qcGsV8Uo9ZCff8c8GarKEdHpKkxZkPLiLGbpnS4kv3Wf35MmDjDzk",
  "key19": "Pbx6PYunocoTCYNVqKKG5qM4zRW1htFNBJD8PSu3cmvm6yxEQS8VXm5fZ8V8NwufkpPwvkf66E4fX1Azz2Lfdaa",
  "key20": "4TBUjm29i8kVaMbPnxfv4QVXC3Zt1fEsNeQT4fE9eqVFQcPnceRjCPKxeKYFpZDKv5H5H1fq78gsmXfT9apJ4qAj",
  "key21": "66qywUBTpCtENzcJ6xDz45MCBtfxw2HwyuU2QRREEpgCLekjJSUvnVzcRQ7tkZj8YtrKFGKWchANqAJgbBqpK2jF",
  "key22": "2V4f9pi9VFAikZYS5tgXDcAM7HXt9mqnvPhoQj6Zwtz3XWz1MJxDESeiTr34EqH5AwJN9w3i83jBP2tAw44sri4Y",
  "key23": "3aEgZw9eveQFc365UETANi466zVaJy2yfrGESF56C9BaTqRccVjVgDDy4s4h1o4UuKgAc45ixRCwK8whTFw1rbus",
  "key24": "5pUpvUb8fmbdHCKffMcQw1kK2wSzzCGDatpLrjFSXvEhfRv8mESga8v2V7dNDZ96nLBsiGzf4hhhwFSYQxoHZ7p5",
  "key25": "4WYSqn7CEWPwZBnQJHfjGEcNwoej8GueTTa6S4VRmewcuBMAPaaS2cTqWEmYUL9YC3bdq6owocWN1J6Daj4kHcVG",
  "key26": "2DpEfqEa3kd8tgX7VZvEtndgidd7YK5BG3HP2dqJZCTRnRvPnR3anRdSUrkNdjzGiEcJTGtqruxHTwwFRzCh8Duj",
  "key27": "2kE8GprjqzwELybMz2j76LDoC8cy5pMo1Ue6f4BUNrDSLu3K8DW2E2oy3HnLyeyV9z18uZRmVBHdEhCfHnnvDqTt",
  "key28": "3Pes1SMavXdq11m4WcWTdjTFZX9yxJvJWTEzUyURDUJ6Yr9fxyexyyM4QrXqDEy5s3LJbX9NMCFQqff4wtVUrbYw",
  "key29": "SUxTrZKXeY1Zudom2gpD7BdUAanfRfb2roBKxtwGUjJXccm7em7coQQ38X7AyG6xRKpQmcqW4a2jfU56jn58egs",
  "key30": "3rDW9BAxMxSCMgAHyYwdraDU73ooVSpkwmC7v6CipspA2twJa5YFxD3kFvqMRTDs32G7abBzTzovBMa6r8b8zqqe",
  "key31": "5M5bbYW9oaQgoVDjWujpiD2WCDZvrjnPSgRsjaAXf5r63wMqN7TTuDkdPEAqBmoQ4BwMGdH3kHm1CF4BoBX1gF96",
  "key32": "QSeTL5yTELD6cYKwARGD2ah9XQRb6MEa3e2ex95vSWx8LXkPRHPtuLQZqYaLzSxWvBJdtBKcuS8gtHUdc7RnQ72",
  "key33": "37fLcqFo34pnZReSEkti3vYJeG2VM4e639Tt92ApLNxT4c5A92cTFqFVuYeQuVjyLdL33RCxiwVadqMXJcovrDps",
  "key34": "4LzVEnoUEU7n24ZYvuxgtp88bbrDXyBLP4MCDPFRf2gDB4wD7DruiY89SefSNud3qUHJLorxr5gyEpxurgyNP5ZZ",
  "key35": "39DRkQRwjPgouCLcoyVAXytZYngf2xRDBc5dxsZakRQ8X569TJN8xKfGUKm1maqHX9o24enUW8TJBCfpxLGS31K9",
  "key36": "2K6uoZ56KRKFhDGoAhGYMn6zVSH8dqVnLRpwct2RuRPhwraFGEZaDs2WY7xEnH2RvZxLehv5uZrRMAKLx7MLWumL"
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

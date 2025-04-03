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
    "211uzZChJdK4gn1B8CAocTfpCRtFXRpHrs95K1jEUWsmmgddvc3UM1c9ofqPv5WkptRfvivXaBu41y5G9ANpug3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PM4jKskQgXkcrqzJYuLxYSDQEwYgEdY7in61gMBsk3pKjHrciGk8GDJqKVVyVstCMw1rz48Zhci693jseeHQDYy",
  "key1": "4waCnjxNhqNqudL4reTXTpuPYZjP9fWhL8PLUKAnksBephcQfG3a7g8cLxWQSuJdzChCzGSFMWp7K4TSBaXdf7Xd",
  "key2": "3vFnv7zuwww2N2bY26xfS3nX83n9EeQD8b3RaUMLtdQzzbGMLxbTKTWNk5XYhehS5vgYnxdWxr5ALgcNUVn1AeZ2",
  "key3": "3ZdKYDqAREXn1Rtni4jbwpxXAqn5tEzgAMVY6qv6MdnwQ3NEREG2anbBnTo3CeHZZxnKB3iYtuLXUh5QN7Q22wX4",
  "key4": "2UmTV1Xe7sjpzCnbUNF51tYAfeqrJJRtCwykxLDRZ6s174hEudpUygTiRftSWYGr73mZKXxbAuJjfVhWBaSoZfwd",
  "key5": "65YGAMB5idbjRn4aV8zVt1AEY1W9xWbyZQhZdu8fEuHCM1Ft1ZhcAHvBcnN4xs3mUYEUDVXhyVz1Y9HwSW4fj4AE",
  "key6": "2TYP3H1JKBqaJAJp88enxeEb5gaa3sgNcQVejLQECLnZVbD8HEsDhtX34GqEXZ2XGH58YV6vzjZsTA4GrmAPs72T",
  "key7": "4UThydSNmJXNU8ZPzRrfafULSpcr9UHW2L993ScZP13xdFnVhWhfWiaDPCLbTKErJCrxMNRT4bTCmvdwzet5RvZT",
  "key8": "2NZ8fmeXVRFh6tbCqFoedWEu2Joga2JGMKigLqupgQ6PgzYxEuDaPQRTBYpHGigevPArHMnQWCxzUXvAYqufDrU4",
  "key9": "a6mttpYYHUTJuY9iBuXicinJBdpFrUSP5zkUvFtZjvWVWSgRBcoEFBJNPmxKu9Zjr2AYubgTPz88Z87XDHB1fsG",
  "key10": "4S1RoYLcXwhfKZYM2fjQEsag5uVi9bUtfQQsQXXRzEf6cMUdfxKrJ2au8MVNmD17LAG7A4KBBuKN8EhMkfqfveHq",
  "key11": "5m7X8S36SpKkewWsnJZx25Zjo2aX7mCf3DnfjYQF3nfwPFXNiBkwJJu2N5byb5cpaddM5gK9382cMw74VxvSazPo",
  "key12": "2W7VPHyUsu5ArH3jxhSbbFXndJxFurKNyD66ZeSRH8nwLsp7nCRDxtYgsxfVLNL8R9vYA2dkANuZBHbme2fyWMXu",
  "key13": "5CdbTyQN4NFCLF6XV9AosVeehaxAvAJZzt3GACBftPnGUWA6uVLveLsN33DqDxcU66aCmb6Y9JyLicB6dfSwnNPU",
  "key14": "4xPnh7cx97pUHgmmukZrTKG64FPMHXKX7aQMM9m4bvDcbcCCpaxUMGv85MXtznrzwMqMC2hKvmTXVmpu22qrzVig",
  "key15": "59TJv582CFFWh7haegLgJdeZUb5Sgu9JGtpxfuTH8gr6RQjqsFm3Mg35PEDrqF9hjkHfs2bV3iHP9FBuc9KQoTgR",
  "key16": "3r4RUECiA6NgSbxC7gZLSMZGqBD8sLUR9DE2LEXKvBsAEE4pHSru3dTAzFg82nVBxSZ2ryRvPJBXsr5jzW5EkQmb",
  "key17": "4EJVUe3JEqHdFMmy1Qx3Rk18u6LCVsGbh7TK4RKhTHsp6A97kNopK9EFouStjdwnoXmtDrTXs8hpvJYivzo1e4q6",
  "key18": "4nXP3Z83L6UNn4h4NtvAss7VmALWGa4TvF9fr2Rnoj1G6oJ8xDpw2jgBEpMwKTfr2h3aav25v8drFcNtoYiWsrfi",
  "key19": "4epfi4keqdh6xuTusX2Wt6CicUTw9WxB2cCHy7s6oEDZW2aWPA4NsPfUh5RKe5LugE1YXD4dX6FjrZkQLRPaJMyk",
  "key20": "3XRAjcMNNWfdajA2QA7QqCCBJDQ9VLmQ3wzAiKcTEETW2amGDhNrom4o1rpwDcKZ3i8rf5RRkpgqjKhe1AdKLjHm",
  "key21": "2F36tFzGACbyceRFJypR4K7MxVEjNH9rSRkfiMZj7nAtRkHLRmCJdQsa1ThLu4RSYJX8GMTEWanycsc3AB6LtHd3",
  "key22": "55iRKezgoA25Xdn6szPfXnjAxpijp8SFyYwzKuBPpLTYDcXyYgVuwyBYeWskpisPyVZJsc4GGLJZkBiQMww8KXrC",
  "key23": "67eGfsUtyGWWtmRFeD7RVqYE69Sc3GYyxRHmAkvk7BsbRmZaRFH7NAyYFoS6CmQm8ixUMaEg3PP2LUYJMVTDN1U1",
  "key24": "624dPoiVV2cdLxeaUNsXiTQn3rUjYnyk5PnQYNvz3S8Hy1JxYB8Yn2YyNL1cEQWyjSmtDfpsF7XgvB3K5y8UibXk",
  "key25": "3H96iYpdswb9q1i6J9ku1eFmbabsdzMJpGsuiTiXppcEPgyqKXms5vsfnCfdruK4UDB8ANHdyjupHBu6WBd2PNVw",
  "key26": "3iHav4n398C3DKyhJNzu1zy7ffppS2oqe3mFRY4t1nqVKiv8278HCiSrzdmgUEDCj5Bb7WEzxVEeVSYBAJfKRpwt",
  "key27": "2GkHHMECjxVAdttX736juHzuZvvmarzeWWH7pHU4vtXXDo9YYUBecbN5DxrQVFn3AaJ2RKiTZCossxB2rcFSXXdm",
  "key28": "5uUPGSRDme494p4Xu2G7bLcYdp84Wth6nTJz8gTK3rZbUg9nJQw2f6yVwZK1ah4rRdZmq5CYZysYmArdvFEjPDGu",
  "key29": "x8yM4jAEHFHD1i2iJMVTUMYtKjsVuLe8LKwFoFMy5ndCShP8TaDAHYPg8yyVqduVKDx76dWQSprUaPm2WYEjAF7",
  "key30": "4FpRyLQRriYt7BQx69zqT8DyQQUxX6kZkohb4Gyw26ofN7Ar5e33ZRriWyftmU7Jqj8UwGMkG9R4vSzuzzwEG6az",
  "key31": "ykpd31YESdeCmmHjVJT8LQppJ4F3zoSmTbHYh6BqXrxjcLNGuUn6FtHx2c4isxrpN6E9uqgXTLbiZuoGg6h3UC6",
  "key32": "2sRPvHUMxnawH6JxWpQzgWBRcUxqo9DChn8JPznftC78tU8JTpjBFC17mEoamxtV6Ea3Cpr6kXBSgUAJ4B5MC9WZ",
  "key33": "5Ar9h6ctTk3bnStXy6HdNG5VmcjwsQmHeHm2HDamqRE5fLGFqSbQufaaE6tj6gK9CcjpMYEMxZAwF1mKfR5i6UAU",
  "key34": "3pTF8jKEDHFyuKoC83PDFdEFQXQPM7ibWDMijaHGEh9zzdQbvgvphjBX3sitY9wMWM9k86evGfkJyrNAoh7csTBg"
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

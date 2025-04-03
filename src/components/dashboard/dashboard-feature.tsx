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
    "3rnP52DD3NbvtbDiLXmbdbuD4yhviVGg5XCQFVxiGgZf4HjQPLxmmrZmA1B2XLsfKkPMzeHJMpK8cyUy4ezJD8zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57W9NDzmcSZFbaWDoQTxNtpKTchcc7w4toKSHE8qZFjSJhnZfCnD4nwNxBNthSg4rv3r1LvJAK8oFEZ1MYL2qnob",
  "key1": "2Xp9HywrfjjrPm3H2mmxm8CzugnGj4T9W47BATHPNUjme6SCzbqZWj9XFGFJMwbyQW4jjbXebTB85irFRwvvvfKU",
  "key2": "2BQawzc6qwZ1ymtezbk6XenCzoMWBTFQscJ4BbSfpETRy1QhZg2i25Tq9JBhx9mmt1HurQNRnf6zvZQFzYEnrmeH",
  "key3": "PvS7yCm38koTVPsQsL3QdDb9bJHsxXBYTVyYpifKBsaXGp5cPd7Hu4P8zjzptm2LKRZi1kHAxYvgT22qjXaYbrR",
  "key4": "5kL4Ff4ZnpybavmBw8nGswxKBMh16UHrkUUKpPqHX4WrVqxywQK3MF7eBN2CZXtcc8j3iBiF5BXNJgqEmceMEWH8",
  "key5": "5qmPrbmzeomMHjZwxNzmFrnRgomffizpsUQYj3mQjKNpThgqpJXEdsiqJDHvcNna4hWTjKsoLUZRT2WjWHtEUCN",
  "key6": "6zaaQsiRnTdgxMmzn4abvM3UXD7dccjjPYMrHxdTVwjXfHx9BENt9wx8WXmvcdWqRAD9YpWrBx5oSkDbVvEvocT",
  "key7": "67UgKjA6AYnmRkxdEyPhzC8gmawZzxGXp7XFA2h7oquNrChCYWQ36e8iP4TW4KgYNGHjnfLP2AF4pxfihRcGY27g",
  "key8": "2CVFHACYNyVWUTapj3WCkUYUvsn7kAJaAWJq8v9cUkKmwa41nGc1Buo3sYK7dDQJ5EfoM7Hpg3PQGxLFZaWAEseS",
  "key9": "c6XZoV8J72Sz2rcqynTnNP4UYMiGPrrpXYrZRokWafzSm8Hzut4JKVdg9UVgcVfba6KVPniCtrZe8QwZJ6iS1CW",
  "key10": "3BZ2htwLKz4iMQyh3dnTx3rtDCtyJwuUZHUZn44hr4DucgFvLiqE1wZ8GLAoKcMzMx6js3nc5NTjPGr5XyRb2UzG",
  "key11": "3NPpyY79URo4WMUibfHjV61LAbPt7Bmoqgknp5W8pWbv8kj5k5wkepRY7fa5YJ5VdbDuG9BLmm45UwWt1VxQvAib",
  "key12": "5cjSQgxWwUJNng2Wym8ys6CpFDCwo7x5xBL9TpFEmyqVnFMrkeqkj2g75tii4z7JWEqXsWGxokWmV7AU8cz6H3Li",
  "key13": "3rLtX41eq4zrcYErUPPYSqKPYKXwiVuV4BCQjqmPs3hJ1j7oxz4DPUCD8fYDW3Kt3GTTLy2oJbrSkAztRC9cfgGZ",
  "key14": "53pws1jnpC588LycqYVE586TkNaFi5pqNuMaosVx6heCMrY2MnRq5EgV3Mcsgbhk9SXayGnKyZdef4DzywCNVhW7",
  "key15": "348rwquXUVBctxYPNfYqYnFRX6nAUbq3mFqNyw4zfhZcSQsVBMADUouaPnFVW4xMCKqYRi8xJ5c4AR6jnLoZL3Sb",
  "key16": "29gkPH7L2RbxRfpKJfjXHCagbtkt4akyJwnEXvyczhzVywwKhzXGXSZCg5EWdwaqeTktwNwRMaZCA7rsjgJNNSUr",
  "key17": "2DfCu6GRzyaRFEyuTkVZnb6LcX5Zofe8Ed6usE22z3ZX5WdsVSvdhL6uFPU65dTnzGRwbsfr1ho4mmexq3zCh98c",
  "key18": "5UXvPzqBpYGEJdFit4fZZSZmZSUbHscHLYTyCp1adKfVZuABz4Kj3UfWLNwTHaBsChwVu5ZKQpU7kDrTnaouBPt9",
  "key19": "5RbBDFSYG6pVSM62DfmiujgtqfK6Hg3F8y4pJekkZCpxrc5KaiujVmfjaQVmtGsGUEqup5HLfa9LCos5TtX3mP6p",
  "key20": "MZY5L7TLk1NgFtWjrddvL7JatT3kpXVzbjRTty7TfmATNVgr4G5qTP8ikwVxiqAgKcek2fawekNWzYXvxYZzZWk",
  "key21": "5XDtJgaCcTjNbEyixTXjdYWViaCorGxZzDZm36Dg2VdzpxY3LESmJaN6P6y9AmgqkMUy1YwuJTDi9SwoJH2mBt1x",
  "key22": "2aEJdHnFiX7mwrpzdD5PJw3pUnS2bzxRV2U3Y26M2UPFuSo1yjLfeUh1MSNpqkNPkaviQZabn9TryebmxxQMh81F",
  "key23": "esw6ubLG4Zn334QyrTiGovZAKfM5xaZsFcUaY16smGP4YCKWtp47XV1SGe19PLjmaTqU4YXvF4HscF9MPiRj24b",
  "key24": "3xMwLd4S3ipnRc6YNaa6AXCM8sw4A5K3ewZ416KACaVfygXNb4ariiRYzrMJChfCXYhx1BG6d9mkZ3B2Nz7C1sxn",
  "key25": "qSbRX6yH4q23Cs4s1HkYdWcGg8P44kdjNHmEvHjcSvsFgQj6WHUXbib33bZW5jZ8FNuQJR4FkAA7LgayLDrtkoq",
  "key26": "45bCHQZto7L6HX8poMZKEEZ4H1ZMrVKbNY5PHVSkae9DbhkKsLjfDC9jWciQ5LsLxQzcxWeYEo5mbC3FFkrscA8K",
  "key27": "2CUqBwk3LKQJE9amxG2iYb2ozMS7WBzPkkHRmYAzGnjx3oCFpieRDYW9dY5tPJ29zS9jWmC2jQAfmvWUuNF3TMjA",
  "key28": "aBPGZDMWJZuNKMzXnoeJeZKJpQK3pKMoudCff79sc6aC8RFscenoGf1K7qHhAibkVLCQFKnvrAFnoYzsHwMa2sY",
  "key29": "3iXfR1Uhn1m3jYJdBXUQbJ3FKARunLkJsq3GyS3LMUqN6xJ6qYk2WV4AN47umknV2ZYQX79HCjcEC87ATsURK633",
  "key30": "2BUxsb6Jk5RuDRav35HSej1Gjxsev5gvcUa3YQyXzqD6Gaad5K8jtUK5EWMHjJu91uDUnu1v6CgnpK9yWoEgZSJq",
  "key31": "hAnxUrQQcvLdru4DTkCnmFXmB1Bz61nakMd2eM5ic5GFQmaSSVegmZTBxnERZs6UoGVfzgaduL8XWSBJWhBUjzr",
  "key32": "ZoyKEznDhqR6Yj9vmHYgtumiGPmojeV6twqukcvLoed9t7a6aLkfvcjov42Sw526hxD3WidQrabRPDKDCvr4yN1",
  "key33": "4mQ79496LtC5SJwjf1VyuZ6D6yUUpShwJVjD7NHpDrrzpPB9Rct4B7x6pD995GyrZiubtFYj9LdCpXnKDb7RJ5m9",
  "key34": "4p3g9HksbRiCu4DzMjK9NfTXdVSh6DNdt2w6wRRNqMXMXv7G1Efz9hogHp3DSwb9xLM1GrWqy9XpnpaUPsYbD2G4",
  "key35": "3H8aM9ohFAD2S157hVWEjjvUjFrH3E6AhAUqV3k8XhWJ6ss9mNdzXNZ3SeWuvdxjb5ACbhrACFK5Lw1F9ropLes9",
  "key36": "5N23RQvwQCdkrrMZec8wk2eWBWANiGtQt2ydPyUrJ8Yn9ifRh2nUeD7YrRVZ6HhK7vsLPhgwatt5PzVAFLZFhzqd",
  "key37": "53vbgYU7VRTi9NFeR3JFjCAkjqWVnhospAehcmbnYfi9SAvKPaEk7NHwzyJQXYoYvjYcqGrPKwMn8w7HGJKsugan",
  "key38": "3PgP8M1otCCnXk4j4N8HQcsfHsPAia3ad4Y9PKvbxNUa13cRH52vMH42oExJhDcr5zNqk8dXwYApiqgKDtr2i5qk",
  "key39": "5ErGGjqLw25yiaTKp8oGYv1C9hvE34uvjRG6do8a1mV5Nw1APSttqEH9tdKHawcXmr6SGjmcviMWWiasFUq9MHbW",
  "key40": "4YB2ZSwjCJZEAyqqVAUEosNEPLQUybywJyGVXWHnNfhoEyAktC9jjbWb2SjN9PUGGbxz6TT62V8BQQnxURfivMUK",
  "key41": "2qs3RsFbiE8ZJz9KhngHsGehcKYtnej4Ehhe7iH7ZF4xF9z8BMJaWiPXJjoEPdpNsZLJdBest13LyWMKxnwQ4Gab"
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

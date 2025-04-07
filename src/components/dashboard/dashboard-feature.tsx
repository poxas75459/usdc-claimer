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
    "2W4LyzkDFUZF1Dd3LcAedza11A2gNWQbf3BS6ngXSkfAjg286B3kw9zRcZbLRq6xyBjvCHifhQeSXr2Mj6FP95Gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44MaaVXpfYRphTERFttTvoWznsnLdeoigibbz6VTxpYArsggGz1ogBVM4yND74LoYQaU8Jryq7UMGbepxqndh25h",
  "key1": "4Km1576KngWAr48WrAzNKeUFNF3CBoX5MAvGx4XoGG8miiUj9kdBZSn1x3SQ3x5hUqM3MEd8fSrLoHwNEQf2wyxK",
  "key2": "Z2LqgpoM4gyAA72Rs7byeWzXDBRH16jaSZsigbWWh5tpeXrKAJJkrZCAUxnje3RmoKCDfp2Pz3gt3519jrrYQRV",
  "key3": "5YStEVzKiG1N3tDE4M7q1cvLsj9gUVCnU4Ga84jFq4myFf1YjLCvUQqLKnDbiSpZgwsRte32qfVBeZ1jwDU6jn8t",
  "key4": "2dAoounrR78oJhwTxHBhU6gMKvd8ZNKN9mdVkait5K6mTBkThgF3vFnb5kyLtBNjAhuBkyBkttfPJbJZMH92gCPx",
  "key5": "3CbkG1GVdZphWL93FFrh1J7d4UbpCYDMCgBivj73XYYyGPW8iDQr6iuoK1JFuQtYXLLbhbKKSu3MbR9B71URAozq",
  "key6": "4PiDquvuTswfrW1suKDzdcsPZ7sexVBwnZiejgDW7asHNxZufZKRKtwNrPsEKkEqsXcFYQpC1uMkfKia6nA4aQke",
  "key7": "1AztHGdA6vPv5jixV8igYj2c7dsTUNxVxobKcPY6j8PnCM3wN8U9vgvrLyetx8aA3KRFgM1WaWFB5cHnUEutzgd",
  "key8": "5bYPWF2j9G994DcBAnAkqmwwVpRdFvDJtbaerkUJxHpUfUdedYPtsCHpUgMHGpv5GGH7BexURMhJU4xWtqkW82fX",
  "key9": "f76BHwvkpwQG8rcHp7oraeundAA7up3PWHLkoZ2QiiLPMT5QghJB5gVJRtNWXA1mnTPPK62pdHHHjxb4rPzFWDU",
  "key10": "3mZNFEwJJF93EUZ6sJwzWZVPrNiBNv1DrX6YqBsqUWyXaePq3fx3wP542f38syVffzojA6tyGUG1zDhGt9iGzUQ1",
  "key11": "5PnBEQb3Qxfm44svpwE7B18WKkCctb6aCFAjz7sxGK1GuVpa3NSQpyLDoGGuKwRU5fX7GYqHusQSWqb7X3VoEtoX",
  "key12": "okDvVLUEhQYaPJ1KNTH1poHJbS5a4gmz4j9ZpAJpc3Ra9yVWxvNSVJpP3B2o4HBRxUYRvHmYVd9Dm949GXWREu9",
  "key13": "2CyWit4VXcZwCkfZwik2shMTTb5ttGReFxe22CLLEobZFcNkRv8oVFXDsY8E8egb8AP8LdMpfChqB2SbgPUm6Z89",
  "key14": "2wqzbnpeqCsgEvBxhDHgsPLwqaQd8cd3DJohW6wKXap4cRy8H5uGzx5nzvupefF22LaNa51XPJgeq4ESdjgw5KGK",
  "key15": "LejwGQrkTZw5SVAaxpSsr6Q93XDBEGhBSFjwq3ws78Q9wQz88r2xC6QSmobL8ApmZs1yXfj81Yge8Pv5BjEQPz1",
  "key16": "wcJN9BooZit6LbagfAuiY95jzkZDw1tPrFb4ECJYtUTNg4g612GmtPiEhUwvKUBWcn5kg25oyiVkC7WWcprdmzc",
  "key17": "3osj6zkhw5gTcj2JoJuTMvjYzz67tDWEsqGXRSiVgGxmuUGSEbQb8zqAM973AEjsg7d3HSWPHeBpw6LVWMGy9yie",
  "key18": "4cUiUiuaqCwRo32w2ZMe8Awjvawcseh6LDn6GANzAGk9pbu6wEVwxuft2VG3T5KCbsBzUn6dVBct3VTfjsSToesA",
  "key19": "HRkN2Pb5uu7dQHWcmLVmC8CSsW7ahNN9UbRPukL9vgAomAw8aBnfbsATgNeQ8q712uXipbGdipFEoMa67MVq7F4",
  "key20": "2kF7MHJSdxj2rUwdFxgmq5xehpGEzSCDWKJ4kHX42PN3c2BYpofnjQMM5TqMYiJutzNjEpLRJZjdBhDTdQ6WhKSm",
  "key21": "5nsiDM254JVWEaA3CDYpRRU7NERzwusoaagbMWkiDbGVXbuVBDwzbzTykhb6XW3YemkefUSckmcgGNvaHSPcokM",
  "key22": "3dJmeig4wTzUK5pisoBPGavfqvUmD63J2TjgRcyGamz7QHaNGUugKqN9eDPstUKyY4wSkPgnEAu8HZiFvxeTcjCa",
  "key23": "D418u6HRuPeXTazuuqebgc5vnP7Wepvm78WLnug3UgzdQSzsHc2VqEe5mPCYEMPnxS5GtwHZ5wd32mXcoCFE8Ch",
  "key24": "b9GZXCw1V8brPG2UUKP7KLCfLJovAcMaEehuNriMHcnFyF9N16pDXViPGVm8so2CBHEUSWr3LQmiFCdwFoBF12j",
  "key25": "2SaaCeUWw2YKUNTFuTnJFgmwKyAgPBfG5yarh7Df8oHojDbDmpbSNQL8dfWaTCgnTjrBEbzcCAKejYKnkBF1rWA7",
  "key26": "3R6nHQiEu7vqnpjZyjEaoGiSyhkCtZCV8JjHWw3qrMBq9MWwtWGy2waW77mq2K4tUZ4NgdGa9zpi34ByNbwhvFWE",
  "key27": "PrK2CfBPoVg9UHA3ZN4Dsc8cM5wmN1G1uAoYhPRyKb6jzL1SLyDxkKWiYeEfGh3SSdyt7CnvhzUsL1JUTvkz6hG",
  "key28": "4416aTXwFGMenQnzPqtRis98gbZ8xgBKQWofgYgheVp7RZviS9KSamH8bLxD5gR8wevNDZouoB4vuneAPiExiAo2",
  "key29": "2J7RN8ivM76H3uDxkRDUKodEH2J99sDai8y4NT2x6jtapdX4TN77RJ4zJSrkSzC75EtTPz4EiMrVmAvVxkV7x7Bm",
  "key30": "2REzVecb3bkdrwpNYvUbuJMXu4fMvWscPuKTpPXBSywRfR7iWpz3pLoRLkdoKZ2NkTkdUERrdYyenkxm6djMHtuk",
  "key31": "3yGWEADnBwPBCt3hFLDGt2MWeFfQxRLxw6cYXRWHLHewhXVwu19pppQxzyKPTCgjhAaSVHU9BL3rft42ujor6WS1",
  "key32": "dofKHraFmMdRuSFRPaJuZTXRkSf4f76u2CxdgXzAu8QfXV3EEgyPscSJcyWXYrwaoiKmvt4pFRwb8XS4AfTojE1",
  "key33": "5of7MDhewXLzhTDetZCzhkSb3CMtJFepgXNvM1x3izEBVraES6xtzmZ73CCsVZiLfuh2dpUygFV7tNfD6QtsuhtH",
  "key34": "3pQMbzrXfjo61PMub4KRLe96zCyfPrG32kvgnLZYfsJPKXhB2v1grJZSAGsjv9FPnwinxzU8SEFWmiLEF7dB5pJV"
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

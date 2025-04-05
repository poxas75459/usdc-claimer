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
    "4AesPeY8yYr8uUCmUNoZ3R35eBtZ7rK8nLj1YueC7kCqRUjmwtb2c6eCERUpMYmsu1pFyo8M11NXjTU7eqP1M2ou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHb1KZ5ug4XyjEUdV5Sums3pP66257ro9PPinidhwVP5c6uTKP614YZ1598ukep73CcDYs25aTVGyAUr3w5xY5B",
  "key1": "2gmAS6hx5GHaaRyeUPqj8vVBg9mZdRtQEdDZM9R6XVG5bQ78eUuv9JAmpeBa4FAXXThaNK6PAcqRq8WzNQMHQkKh",
  "key2": "35cyEGEA9UxFDeSE9FCjYEZCgeeUBgEZds8RbsD824k9zj8juCjM2u4Zr8o35Hp24yRcQo7cwYHX6RPgD6tGMBD3",
  "key3": "4kBqnYwcbqpW1exFpEKMNrEtTzbzR9g8WqWMZWDywKmrJMcuKYSCPDrrwDUUu2fk7SKVAZ5F7AS2EriWjHugtjqi",
  "key4": "3j3p4ycWdVuqfyAawyQLm2NwTQJsgBu9hNWK8wwNBCbxu4i6qHHEKdxhWMhC5Xcz86Q4qYsAgmbzcZupSbwN7B53",
  "key5": "43sbjD6eYVdFN36QMQtS76G2evy3XMKDSZceULz9j3vECpe84x8kbhPXCaRMdnAv5GibLSTGr1x7PxfW4WCkWvze",
  "key6": "2eSkan11tZtby7v2A5jmCxUKmbKr4kHssPHpp5EjEdiwsJm6hdPorh7RoCLN9BA4Hbwq3RVWuJRGqPq56CRSJ8t7",
  "key7": "59Syq6t5xgNQaKMZXgaDjCEmrVvePzZ9xR5iqKd34wFe1mfv6XBNtmPVDyt7ZMGoSvCyaCCoEpxk7ukV7z6trzgK",
  "key8": "Eyp1csxyQ2J8jocqxp32Y5RgHpEcaCzQEzJLedL1bVSMHXxwFmG5jqde7cNiA2XvSbcNp25TZr3SCYpjLJZPJ8E",
  "key9": "4M9QhmVEhHKKZN71RryZkhcwr6F5wmAC1qoXNBv6rKuAoruiZSq4ZTWBKz963rsE6hsDu9psMM5DpUvB1ASd8pcs",
  "key10": "2VidP8Kn2K6yqfR8QRThL67QhxGuqeWDkFaxv4rMvhhPPGpMDFPGbYQGs5TxYsrWbWSWoTuT6H63yX2qudmL8QAG",
  "key11": "675Y9bKZdqqUN6vurBzWyr2pWMsooj87Vv2VssXNVFCD5724Vye5z34h1rMVSSe4CcdVVD3seUukzwK9WpL7MgX9",
  "key12": "hV4xxA7NwVVSb4c2AhyFSrHJM8d4AnGbiqJXCbFmhzc8f5zKF7CGUJEnwnS1yDZCHcu5X2247iu9v7WsG4nwS9A",
  "key13": "2E1xZ4t7iBeW42csQi8E8Yn9dc8ViqJAeDSdwqh3o9NT5ti2Js7e4ZYXwFXHrQwKbWG69yNgXmNcsp2shVpT8wcu",
  "key14": "24JEs2XLmGn1pWaTZrtGFCHXrDjWMHqwW2UVp3VVxaaDwJUjN8FWkKnSr1QYDiygMjoGJ26tcuhPgasZ2LuXKBe1",
  "key15": "33P6346Jm3Yn69HWGbP7S2eB1qdEGnXft7x592Y7MkdcjHnNApSK1bM294EEydr4qumeTqBZsHS5ZWYnLY3yxnPP",
  "key16": "5eUpi6qa79heVAPdEK8vJeWedo2vkE1SXa9tMxDQrkE5567eshVMeLwHAEEYaVDcwqLsJF5YgrKy9RxM2aEtb4zg",
  "key17": "28C43weNFRZchDNtPvLm2kbzMYKkBy6ZAE8CFZSWMV8aPnB1B4tvFf1WgCoRKF9V7kuTbDLfQnyjxFTUm63Cb5eA",
  "key18": "2PwL5sydpacraHShSbKY6MVpLn1pCffX2e1TrXqK9qJs9Es1ahCJrrTF12JKR3BgZ6WSRZWh2TcuhMzBEn8ft9iS",
  "key19": "YqdjiNqcd5YGjuMhax7KZdfeRRnKU35mMf89koJ9DUpMUbUjQCGAMFkwbgpKaEbjMa8nDZHCPNZfhHJyFat3p5H",
  "key20": "kci81J6eiAw34RwTe89UUqRCP4mfHFQaWVzh2NE9K9W97JRcQx2uEg652UtgHnn6vtdpYbyRVfBSvC6AeRhQgva",
  "key21": "4qoDZrryQ5qzE3FTY4wnpC5RMC1Bp8dxZ2TbtwbuW1aYLKxQ1Uo5Bg9inptSCUSb4myHv5teHUHifPoQBv2nuojE",
  "key22": "mXjEMVz92fSfK9GRtzL6ruuCFHSm4ULK3LMRPffviEi69EW9Kh6iAG3KvhkBUY5fCWW2Czhsf5a41sZe3Ukj8LM",
  "key23": "2DbjijfSYHRCmFC5CXo6Q4KLg8VjemGHuVLKDFjpzW3foATk3EU71V5x52wRZH5WxeJQLtvHEKZsHXgPj3CAFfmu",
  "key24": "4Buxz2HMgvGFjsVPJy1JH8xTJwUSvEckVQZqVt98q9U7oRTPmDfxYrW2nLvE1Me25bAEj1NTXq3ApVagttxBjsWu",
  "key25": "5EC8VZZ1sw6npjSv59ChhhEpWTM3P8jfk957Mpm26kHgcWLdVoVsjqzhZQHb8AshTGgRkJSaT1n4rhjAMvdSUdh",
  "key26": "AzNPasnmLKec8hm6dpSoia7Vv8JeA1GA5rwcTfAnmK4cCKRttQstNuuZZybi2ZF1Qm4SKztFJ8AWq9bApsK9f2s",
  "key27": "59Gqq1MDofp8nJVvJnbGwnyueoy9ALKWrfj35t9qzBTBfVqnYDSmn7rtyitAcJdi2inGMW552NLZNdohYqk1RUP8",
  "key28": "4nQdUu9ZTVS7AKUskGbqkrxC35oLMwg5eGNhqeFwER5kfPcjPzfSHPLf3QVhBrsibakV5PVPAvrDiCCCNfuefgVi",
  "key29": "4T5wSfdj4ELEqwZfvTkLHsimPRJryuH7xdtahGkxmGoXnZMr6D8n6Ced7xtHc3evWmJeCruNNgNVQrVCzXqzn7qo",
  "key30": "4YkGEodRhHdmd3K96onLJxSrva9zv6WH9nX61aRNWVABse7GBVy7zz9whnff6UfM1d89QHNt9ERxh2F1yH9yhwDH",
  "key31": "2fmKzKNWwKkvZBy53qYEr6fr6uNiuUjFEH5gCHafZZ6hE1qe2cRDw3gYVbwjAAbAYzvKTf3fZRZHVbWTVmxu2f3t",
  "key32": "4MebGmSLYzNzFnquobxZw2pgwmpBLBbHDdPFvvVZToY4HcP5ofS5QpJpCv43xk3JbBfM1dLdB6JJNVtGRs55SWmB",
  "key33": "3yNepyrK7KBpJrcVTZ4SXFMEAFsZZZ74x9s7TZ4T7p5rhhPDdyPkJKK4ru2hyq4N8ZeMiPDKSiqNskBLLYLDRoXf",
  "key34": "3CBqupTCxNaQVoYy7V9AjDfWWhxzcb96MZcfFDgtxgeXAadWizprNjxBR9Kp95pf1BEgiAF63PeXUEKM2j6Bw9n8",
  "key35": "36HPttG8Sq5EE8Ld82aRBrAFXmq95tB3t7mhXiFdJtJu8XKVd5cWT2kcuzJ2gEg2nXF9tr2yvLuGGA16sGsynTja",
  "key36": "5ma4ohi72hSXB1dCXStuoupB3uqPRYwkFRxCdaRe4oXp5YDY7ybAsmEMtmiUURJxWivaWBfsm6xuzuJPK1okLD7q"
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

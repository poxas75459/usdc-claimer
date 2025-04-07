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
    "5Kbeart5zn2C8ZBVQuN77SGJkMG18nQ7e5jMSrBjVbkkhWc4BNb6M6Liy8ZxffRtrLPzHkFoNUHgJKBPr75j3roY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBD2P3d8uay8g3fojGHbGou5K39usg7FjkzALGpPYdGrvXys6CFK4of77WfPirMNML9jHhzpmwARmv1Pn9GQkZS",
  "key1": "67hQHzp3SuJdoHQJpARSepqGWU1anYsAPY3Eu2hdYqa2c7hoo2GFhswipKUD1hjEVfDi2he2xgTbx3wsooRUNw6u",
  "key2": "3WdTQU74Br4mcLbCNicWFXbzFtU7Kc1dwYtMz8gcYnqmyQdEA59UfQmy8zNb1pVmwcxtVv8fTvjq1WJggqZn4nLD",
  "key3": "WabU47xCEUytfEePVoxreeovoTrn2B6Uypywx8hCj8FZk8SGikQCPUjzn6zUucDewg3ozH4K1AS4MW5E13HaUED",
  "key4": "4zE6zcYTe4dbArjzLWTpPKRDpiAPZwcC6PoainnPGmg2WH299Pkkfpg46oukhr743RS86aedcQUxqZwAnfCxmGTJ",
  "key5": "3BevnYvAViJoUJqFu1szG8shQCtzsSND41YSf4Zt9AbjBUVUqgNXgPTjReBJAwpJE6hDbBQruFxSvPj7aDzijw5R",
  "key6": "535V8k2UQViFPwcDea7mkittsoG4WjKpuq3bE4bCVE1JbjbyVPcj7YPEN8a1trNyjTqzLaSzMEhKsMzJnaGF2Whu",
  "key7": "4xc5ZAUzsjKodfeFu6topE3zxpuw7QPjW7ube6PKNvLvtSgMPxLd1rdoDevk1KBKsD8qPH8FeHYUztbAo6M7rz5q",
  "key8": "2QtYPqpviu9WrUybtjZV3keievbzMi7bcB7uWEBWLC1hFxEzZUvhrXFQZi8D2LiM1YiqAZs3RrTdRwfzZTdE84Wq",
  "key9": "5xBfDdwTVW4N6tUcHhp8itVQRtVT3hgZj4QkwoiWWr4LLxrdmW41TQXQxzYpf7U7evBowudRSwsujELwvQKWvr2w",
  "key10": "2nMAGJg9sMwATbosJaHKJ7uvhZN6XuSYvWyczrzpRGh9p2diz8tVJKSQFHL3KnLHZgdD6e5oRaiVGVT3ZkfnAead",
  "key11": "5nSkPK5QPJxB9yLrBJ13PSwo6SB5uRFRfTDe2pwizFj2rSeh1fXaXMJMPsMFWsehji11zQWK9ab4SxMt94LxTE53",
  "key12": "3j2SGpGbfswxS8vx5qnoVWAGsGcSa4aS729sKRKde5YpHiJ9qP5xFNiKtRdMRAhrmG7PBeJJDN8mLdMVddG1twg",
  "key13": "5LHitzu5GqnXTKV8aDk5tniqzq76aLMtaQ2TjcgrRBsCSA4oKvmPAsRZsV9AVxPXpQC6exAZNPXL5AzBYmeqrwoW",
  "key14": "4GdFxW4X4EdvyHW8S4fTQSjuxbNk3sSq5cuj1BdpT7fuFuMkoE3JEbFMxrCQwLpuruUPAuwYQ8HPRSpDej76epdh",
  "key15": "ZziB6g8R3riuwbQ8SaKrvUBKPTzYh1PEYSxE87mVwsbraAiHjiA77odYqiu5tS2qLBFU8UB5FKxsfSRvgCyKQnm",
  "key16": "NWXvM5j36QkF8ZLt91NWaaNFcJLfuUMNsiiJesmRTjtB3uP2ZktaAHprumHdxdgZ9kFicSGBULZHnrhjeVSjLHA",
  "key17": "4Dj41vSewFPXaDrtm7jEAjxjb8w8pEgi7zgm2uFF2vtXinxFW9AwRSAif7aXzAHhLuX2cor2rap4oo1XYTwghp8E",
  "key18": "psYd68Dr8W3tuXaPhqrmbeJgE3TsEH8zJAJKubphfseWBStq6egD62XKrSLTy1XrQxrrowK5pmY17M5LXJM6y9M",
  "key19": "2jLVM4MJL7vg9kyxfevo1CKH5o4hGTRmNcuXNb1zKGjskWgBr1enDYprUakBNWqUMSU8ZUdqXkpA2Dgy43iwzUmt",
  "key20": "2GyurxxxCj4ukr21Zge26h3GrMWqDtP8LtGLhGjnuETpcXSo7kcsDENKvGdvD6FQbrQPWfXe6pZw9sf89g4owojK",
  "key21": "5TP5q2WPvhJnYWrNK8jWtU8RMYSm5wLaarkF4ErfCFax2PksWrofgFRHJrzyaq1rupXmYCJ5QdPwoEKR4UT9xrDM",
  "key22": "5SPNRpUFzZ38ApyB9rfW35FatUQ92MEV3fvrWsyNr34mLbPP1XMQQtyNe3MwcC9X2rxJnD23KrBMoHu9kb7JUtwm",
  "key23": "2tBaojSTfXuZg8CGBiP5qNuTp86CSdC75HhAKNg5M1itZaD8Pt2F7Lh5s73WRDepvu7AkYxPVHJMkZKNuapwFJLc",
  "key24": "3cyMLgRhP8eBC8TTqGAEzaA1kEy4j25A5u4XWBi4a5qrhYHXqpEtB3TbFfmaWfkeTmkzwrsymez3PkcgHRGjTGU1",
  "key25": "54gEtZWEydeUzS4XQPj8HTxjgYgTQTStWN62Cj4v67VWmUanQWNnsaLZG6ubi7tYmQbnZHv9RgRCy4D2Wg6kEes8",
  "key26": "v19BjHmixf3gU3NL7A7LJNmZcwUn4HTvxHiKKxYbwJxPeCCA82zdfsmEuCfRMkfqA8XBgrYKW9rbTGVQKuNVGDb",
  "key27": "5QDUoHvxbZw7UoTAsuHz15QD9LEhP3eAqtoA2FgQjb8V86vm1RcDp32tbRQrT6YgLwx7iMTpN1bFckhTWaLVG4aF",
  "key28": "2oe4B1ucjN2bXkdnqJ8F2oTXKKUjZiuKuDCFKodjnAwc2BxJBdMU5gggjXxh5GxSUSjYaf8jFfDfiDNs5KwZmqvG",
  "key29": "2AY6WnGZ7R5K9MpHjpKppMwXG9TJyGS5zUqM3zysLnDpWfdtu1qZaze9WHRfMbneZSTKgPEjcCqXHXfgzL6qciLu",
  "key30": "vBsF9WVivSQYzE1gCyUa2EYbJbygxJYQwZtkbTM1W4dQFjsMKPNVwgTdY982uBhffKMLMAKM8diQVC2EBHgLbzx",
  "key31": "5ZApHmgBjiojBLUxiFkUYF6bknFV5kjvVrVodTUXpqitMk9uYG2Gr9UXJYUX66xQ2LSCoMkzVtQ1d3Lq6Dbz16We",
  "key32": "4rNtQ4yNeCJt4HTjNaz4WV2dcEc5GHneFCHbURaDpAY4D6VZQu8Vrpu3kxDr36xdybHjaBaUSvTLCXtkEaGqpqyD",
  "key33": "37TbAktwdRR2zrPAePB5JXSShNZvHNSGATCKs1pZbu2DrYzPm8s8vHgMSKe8WbURgTrp4JHyw1RjU9mjFJRex8ip",
  "key34": "5wVQjZxDoJSqpMXkTykjfbqcCfdVkSRbLd8VFGpUTe3VTvX553tbMMqTLrqpUnTU8gHjwxHRqe5gVrjbTetQjYbe",
  "key35": "3YjFLAxBa6goHU9uQS8jeBYtuFuDJfs5p2z5r1f29NSKM6Mr8BLfjh4Q2t2wTggAe7WiP2prc2M8nKZLEwv9sctW",
  "key36": "3Y6PWbjSpUEHBDsB8etebX1FEEsX4dhXS4nJbb6PMzJL8UKQMQ9jPyJCb5VwmL9hHSYVMzBrwvAxNcSThkvXpxYK",
  "key37": "4UanLWkvHdx1QiTdpDJ11FxZTVXHTTs2uWgHPdYf2tNLvM5MyS1PgKkhbDVyKyvx2iSGPwACaAwTBRf3rbTqVK4p",
  "key38": "3Qs5qasaR7SCPWi3b2T36cW9WcrSoRjYmwp4QtXE47ozGADY2aA9oR2PaPDcBDzM15XPneUvn7cMZyuv2AbHvtRf",
  "key39": "3enoyFU7PUBjBrqWKwco2Wm9wgXxfLfWoriap8ukAcWZfSfxKukV6KzXCAAF86Vv8dw3Nwqa8Xiye7X7YJSuCwBc",
  "key40": "4oT93j2NPAtbqgxwyJXRpAFQZ8iYdWDUr1azxxQR8kCnwCqMTbf4gRPDDQhG4FakVjUK8aNRqDdwbqRCo4QsDina",
  "key41": "3USgqRvbwtUomGiaFhAZFV9T3xGcqd3MCtQLzQszbJGrpJWTJu2wfuGqD3xRcsqhyj49r8ZRdioqfhLYhFG641C8",
  "key42": "2vUcqZHuf5QVDvvpAuVwxhNggQ1EEdia5koyKkfmxLuqbcXVRMWHuHRZABjNt3Ku1hdAbe9vabAuxz1ns8C4gsH7",
  "key43": "4ZeHr6M74b65Ata9Aay9ReU6CM4mVXFYaVofdJAv54FW5RuyiUgmkTfu3b5zzNsS8KvrpzLxdmVXDLuNDNBwbeEk",
  "key44": "1ji7g6gsPTL8yx7r5XyoEFFZ42oJYcMU1gbeH1TSwHv5EbsbKYgmoqmmFnMzZiin9rVK7dwrjdq1CE1Usm3K4RE",
  "key45": "5hMX79yhK2EyN4i8ENchWhfax9T1BaDtQTmy7D2JJSx8fJnsN6DrCHtJZ4wZoo3sccEFy1erySbiGZdCapNihyTk"
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

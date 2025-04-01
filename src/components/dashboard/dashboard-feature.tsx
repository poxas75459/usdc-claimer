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
    "2XGLPGeHNGiX43KzsJDgDQVmEjYj8sZM9fY1t34zjUSD5iiMcZzN1YSsa6Mmx28W7UvZeTQwGTcDda4V98SW9NHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ktDVkknC5MCYKEZx2wufNrfQSpbabx3XYWwA8hPSkwCEXi8ihEeCgxqWX8hWKMLjWgCKr3Y95APSGdP3uUbJ6M",
  "key1": "4f8JTgWQ6NcoA6Scr9D3vZ1auN1tz4P89DhB9Wn48gfnywimUoe83FXb46va6sR6CGyN1Kf4xt3um8VVh1rd3WSj",
  "key2": "5HczKLCyD65VyCqz9JrnoFCdZh68cSxS5ohSy4d512VF5eGRwacZr8gdLydLgKx1a5tZhEpM31HXBUXdj7hSsgQD",
  "key3": "3CEm5Mi8qAEhYKU6Ci8V3HMbwku6WgatKrdfZditHb1KC5z6sozCaBPCcYkZnnE7UctXtd5sSWGoDnFVnuuM5pK",
  "key4": "3sCSENY8osjEuwHzB5vyru4Rj9PTpYZSro9gwtR6j5jDnVakHiUpCCqRH3hLhAhU6entiY4Hm6jdcWe4juz8YKyg",
  "key5": "in21oikxeTHFL5MtR1dbkt2noLaji3wK1rKJMBMUPAukN83uBxdWKyYVSgJs4s8VzSqj6FxxKrBWcxhqzGHLp8v",
  "key6": "4NgyeFvoRRBc1P6eR4CcCep2iayUMfyCqmR1VE3SEpVpQbP2pSiFHDixQqeTDtK7Lzmn8iKHxL5D3d4SPAxnC6W1",
  "key7": "3CE3Hhr6K8AgFURbGVSFitU8buv13RFkTwLRdmgnXyWGEg9WTibAZ8aWhmfcerSq83RV8kRtre7V8gCK4Awcih7m",
  "key8": "63hzwJGZJsW6831CxMEf97SEKUhrtTPVqEm3Hb2z4kQTxqMji8ehMnFEV4c7zSLc28ssJFZ2U5ZgPrzVfK39ZcS2",
  "key9": "5kzBoG5y44FCwo7qwkZqpZAqrCXfcEaAEHSruumnf34H4VYNoDy92X7VUJYPnAU957zmWQU1bXhRf69mTazWJUBD",
  "key10": "4PUMB7r1YPG3srqX622GEWLGFJ1Jm4Yj59m4JZLGCzLK5q7dHziYoK74tcnrGEG3nbLKSf6bqT5h9xSXyLiBFkHu",
  "key11": "5oPyLQf1RvYU6MwkhHP7z4dMMRszaBrgtLvAAd1QcdUevzSrgGrhHVu1L2UUFsfuVYW4fG9y9SMzXkwrXUJp1NAT",
  "key12": "3AJRqSN6g7Adkt28HqUKEeP7PtxR1B2A4vKBsmtK8btgq62vVZNyePyq1swLAqC7kZvCT5xLTKg7M8WVBT7939Qc",
  "key13": "3sJS16VtHGdUaoQxHxf5m8UcdJ6qJm5WWUuUuCBwFxzyLSR7JuKmw9xMDbqwPDXq1XytkArF4hWzq8WETFL8Y5E1",
  "key14": "5PP2WD2sPMimtAjioBvCqtZhS3x5qozTVFPGLdQJdEPaGYwFxjZDNgjL9PEgrksjWj6ErhKeSSibSafXxsCHbb9G",
  "key15": "2XZVog2RUQXGwH3RiwSSU45Xxs8UVUq41zUuWczmYXRAbuG9agi2gYLNeUYgSgSRZzCmjMxzDuEKziSMW96Hb7Zm",
  "key16": "3LHpcT44TdZKgLvQsPJvpLE76zCGWUXcU8dvC5v4hNK1i2CopHJwETje8esZ3LQysNyiKw2Huje5mihdooAPpPut",
  "key17": "5A7KU2tvjJix7LHbsisCfSts74T6ScWsDRhoAn5Y9whrxcC9tt2cr9yfpaEL8sNYkkEExkwqTwkDw9pqg9MrmJQJ",
  "key18": "4TjJ2NhLGPdmwGEkhHpfoBrcey37n2uZrFre14LrfvgLuPwEZDWuTPFT2bm3Tgm39UCsJgkDmTZivMDfFnyTPDDG",
  "key19": "4m1qdVzVwQWSDuCzYLMD9HU2cqDTpCCN8z6hmbNjjgkVMqK9akHQ8bY33z2qEx8jW6yDjW2ALgsvsTg6Msq654Sw",
  "key20": "38Qho5XgsFgLCKqQuPHepmED3sb3TWKnyfNmGaiXVgKUv5XKKss9d2nmEVifp963PsdDXs6hKdREhfqr7LZ369t3",
  "key21": "4oerk7hxxtdrhj12EutfnPgWyJVY15BR7rm1VHoE5kVjvrojJdsmPst789qdvyUXYGQwjCA1uwJso9mUuNK42czp",
  "key22": "27R1EPis297vTKW2akEZ1RzshnGuRApXLhpAxTAq52omDj5sUr3KJiS7Q52Ehg4L67PUynDWeQvCq8MmgRFy9qJx",
  "key23": "4iadE3k6V2H31ncdWiFouWTpDsv2QM4wFRkfcQxEPK3XzqZ5dZ9VfZXQhZJEhQrYnMJnXCFjftfsSkPrfkJyDP25",
  "key24": "4YYUNGP4pLjvYpS3w7ewNJAp4J1ZBodJWAaT4ELKRFrTAWztP51JZTe8vK97y56PNrhV5XKgmjtvLfAGJX8CjRNc",
  "key25": "5518285wPdAokZs2Yi3ZJe7stCHLoDRBcfqWZCYDRsYBVqwwBw2FDNeqAZHPZ4JiQyTapEBELn2kwnN5Qe5Pfmnr",
  "key26": "3QtEAYSMSoJQ4jScT7LWYm5hHoEaJtUdyDox1wc7AP8wHecgy9HBUYXqod29H2Ng5SxFwSzG69K4AxkfHT52WGrJ",
  "key27": "35FozdJr8K7sEZt8TtKH4QsmBGnxwjnozdJW8x4nw3dMd8bvcAx9awkLQfkjgH1fNpAyPE4cvRdzzKd2eV4STgHy",
  "key28": "673e6dxvKuUFmkUb3NHcSysqB8XtoWSB8nKpTNrRrkmKa2kv7U1aKD6AVLNgoKvvKrnW7dThkqQYdq5sycsNcWnL",
  "key29": "4NWCbP7NZSvS8GoZZXoHvgezmpNe71nEnXiHyK1DXhy3rsWo4hzxbWHtpvsGDJpMN154Qyrdy4DYCPfJpDWS3BLz",
  "key30": "5ozg3YdY4Wh14zRWEaMTRP6hnhhDHCNSPNcJiCzJgYEyJHCe9mDrd7LkmtgebjTCNVq5PfGJAM1HCPQdd9jcHXSZ",
  "key31": "5vU3RtSjKzEVU4L2Y8Cx9F2VX24pQfQLPWapzw9GiNy3yGFWC8KWUwr94vr7njaB9nzidqd7fYEYdtY1Pa3gqiQc",
  "key32": "3hASgoGqA5qy1obDoRGSBHRzTnyLdJX7o6o8AveF84eGP9RHRv8HZ57uiTP952GvmPpkj8nFojRtz7bHguJEGwbJ",
  "key33": "WpvQmRNqoCGYDgH2UDRg4kkrfxaBRdXuAvgCx4WY7L73F4YuW6kne3rRU5mmSb1kVBQYN4pE6NyYXddMvP4Xw54",
  "key34": "39DKVfP5T5XWavfC6zSc25JhcE5uiRwaWKQWyDCbjf9fdRXeEUDokHxY2ic8XRmmsGwiERZXErG4xA5g6BgpcVa5",
  "key35": "5zPjLoNdhBimdQLSz5X9kqzSkaqQPrUnqopBTUhXNe8Ue8x1PwVeowNjzV44wGSUiHeGHzyS3wht5LHyAYWok2zE"
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

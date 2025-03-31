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
    "44frHKLUccbHRv6qB5rmmFUM7aZGQT4vMvVeF748ozGZ9535b2EYi4qwLzf8dh2xo3xxTJ3arQTw2Vhhvcxypjgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C33Uzw2kzsfezAt4fZVNNpBmjxR1jdnHNxqJc7eGAapvnLUcdPMcPg2NEr6bAJCWpceu3SGxcyBEptXFuCXcVnA",
  "key1": "4dr68VpAcNopX8dfqWh4XYZo9FBKAwHr2TjvJ4Aykb6MgCny2N7CvHeg4xVDFrQxsfJUjpaurUfAPpNX9M1nY5Rg",
  "key2": "2fmB5DJ53L6QAJyxC2eEPMbMvcH8xhjE2EXLP7PFxocwvkNh6AnCtjoxAM3MWCmY9ZKk5oDe4sBNSwXsBjC2LKSb",
  "key3": "3srVxxNb2CZUkJ53Zej9UfjfK9ptS6Tua2NYJCtMLnn6ih4NyWd7NJatdjwWg5BiKFyE1WeKbRm7i46Jre41kWzw",
  "key4": "4fuVDePzK5WkVYjY3U1foDhQAkHB2mXKP1qeAT9sXKVH59PvVpJy85nNPcxsBL6qWT3LJA7t4fiNfcjmEQbTomju",
  "key5": "5mTXb42YGg17t93zgwaVbatCs8BBDRmiDh9hRW26aHbRMaa5Ctaafp4NG3qZ39jtB6duQpRHnrHydxPUnE848Qsb",
  "key6": "5ofYetwBKDXB2jFzxPbSWJvNCUAxmsE15pg8jN1vEgBRQEnb9vBrkG7mbUiYTYMhQ2K1mYBgHisEDFbpcX53ZVBi",
  "key7": "5DRvy45cQkNDZUw8QWf3msvrHSQ4RFrJEkJ4zpaB2FmGt6dBTX383Rvh82ahk98DYGouyDHtxGDN61tHSMFZMGib",
  "key8": "3pWUUEKVNifUcP953wUbm4mFofFRM688QDePRsJLwwBr4UsVFCMPBHQ39WTmCdS3uHQrW2do117SJ83YvQCuH1YX",
  "key9": "45BCvs6bfu55JieoEPcvDYCGuH9wYRoj811jCMaDvfzyHZffngZY9XMXDuqs8Sgkf9kHBXsbF3wXySsRYpnmraru",
  "key10": "3xzAHzDo8qdVKdy4J5gq3LsvZfwUR7UvWgtDcSt1qMiVsPYLUphQz5xEZpQVVCbGzQGN12aZR5LcuWLJk15Y8aRn",
  "key11": "2iq2pqLqG3KQifmqn3gygD4QNEuCCGGXfrxccU15kJ1Ef699qQoHUv6Sm2fsUu7qQgVyivJEYkKNfUy861AXPghq",
  "key12": "3CiaDjnUsRgcWWsMxkZfznc9hAAL9H2rSeMbGxMsuEiQ64BcRiZoQxM4hCAWtTtSgoScVkQPtogxhWwesm1S8qjH",
  "key13": "xgeMtex1pfeRzH3SHxzDB6ifm59K6eMHCbvYyDJEqsLeH4e7ZevrpBw3AQYsGbvqxzqroZqoKC6CjDh9ZJBRS1E",
  "key14": "43mjRrDT8v4Y8yeBaD5FR7exopaDHu4D3QymeZXNEUR7M6mYtKWSr5YnWiFeDs9hwhS9xmCPMbCAC95hvbph3kpL",
  "key15": "NGqV8gvmr5nf7GSWwvfqp87hyZvDos3NodYd4See7Htxgsg8upAPab1T2K7hipZYCvPGAiGwEfoYzSTMPdGmciV",
  "key16": "5DnFR8XZStxf9eoggsiaE3xarsPvuauP5vu98RgX9QfoBVZpBNnUseqHpsUau9MrM2yGhdm7iSrTQik4N2zf8Dew",
  "key17": "4xyXJKknfWKe8Jy6eeFeyiFxjF94pvN9qNfK8BAYJo4pL2qMje5mUez7MMc1UJND88mnZxqHhXU5oJCaGHz4dCmo",
  "key18": "2okoDXZcWs4zf7fCVzFmMcPBEsdzGQQFpyu62raLpqygjXQC3LJ3DLsQYTXApb5HkkhcHpX7sTdiRMPbktKHnLgg",
  "key19": "54pXXyJfJ7HsAfArQV484vqmALvhWssCzaeGFSarpfvYnWgq2NrXApJm3nkr1bgbaLmHDNgKZ1btmBQgst2sQRqx",
  "key20": "2zEEAngYnKscVxzeNAFp2KFKPkvYaLVD2KeBbK4QSnr8HegSrc4gJTBy6fFqr2UggpC6Gv63bLCW67qV6WpetXjL",
  "key21": "3hhhJwX9s8V4gf5DAJMSMXDqq8v5yuU4uiyLD8yAEurkVu9DNR6yFGcuBybkKgGTRHB1xxuWsT5AUfHrRC1GX58J",
  "key22": "5U4RvNMmGswTMJg4RYxhsLnFrVmYCD6mSujabLNFbYEpFRaNMGhHCw2pt26A9Cjy57Zx7W4MTdPNkcEcJicV7CGx",
  "key23": "4ypFQ2LoEPzsWkjLbH6vsKKd74AHXZbivqS3FNpgzuyBReesBJDSaEo3UU96ytKckpSKGGcDdmiuMspmpe94r9G",
  "key24": "4q1QEJXYvJMFGL5zkmeKvcLutkmNtyidT1eLLbzPpXeYN4VQ8FpWoXpd7cHmD6J5a5JfN51redfAdZxqt6Qqi8T"
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

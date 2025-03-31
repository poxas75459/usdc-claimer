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
    "5vAUY46ECm1kzTv9uDyWUE3may1jfuzdz8PqDGDehaCCb5S7jaUvHmQmfbgkbS2cPqjgnUCW3rPfaiuSdUMprQ8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ccp65GRSBALVyCPCYhehh9qrXMzrntSoNquxiX67xXJMX5N2n7yeAaQH7tHMKvnYfd8rHPwhXdx6E2611JhuZox",
  "key1": "2aYF2AiU5dNVvUYm6WESB8Wg63jfhuRk1vGdRJruzH49pTmN6XqaujgsDBtd6xZL4WJRTZRhitBbeYKKixRgeSqK",
  "key2": "2aCke61eYjBnZpuy1HonbXLtENfNq9zdtdS9iEj4KfwTwprThWgxMPhseLqHhUxwdaG539EFrtrR1n3PEtyV22Lm",
  "key3": "5qg7eSwTNocqmWZmoKdXBxXFfrcfHuKBUMUUkNs3tbjhxaTVKGj3f5o3yVX5v8nxbaUNeqcYeNzg4oa3b6snnsJb",
  "key4": "4jsun2SzF1jRANWZwczZSoWrKCSkco6VdxYT5KY65r8JtA2StxERdYrhkK1kh2cSUiUJMQyLVTrz2dPKuHK5gK5h",
  "key5": "2E3gFFfsnSTr6CJYPhTzts4wArAtG8tGEMmtYhTS6WZZ5FPnqfkCh7FoNPTrsMR3RhuzPrCyo3qizUVy4K9vtHuv",
  "key6": "2K4eHFsfpLoLHhAxoJMh3DH3HH8MAjPzEr3Lh3G7RR7cv4Yh9WzhNYD9yzXJEiAmG4am9pzKA66k41LxCueCat5u",
  "key7": "qg9Rxh89AqnFTQBuSjHYEbg6P4egDZJaRcJSAZ7P5DtjuzAiN9uP2jhmgPAThQsUARwsJrsiW2JtgSLKXipuDi3",
  "key8": "RDxZQEMv5ejoo57RwVDH6VV1njNHgmaDMCAZDoditXHdooCpmGsN2Bi2wEpSTxxUgEmtWeGpzeNZKurNUaB1uSe",
  "key9": "5tZHYk9skB3AgRf3Fpd58dYtqoi8mct1ffxSxiFgJigFpPoJYtBkvbg6k1V5NfA4kxN9PReVGpMhVoSEsqKokzmk",
  "key10": "2QfaR6kgJwfy3igjqN6K4n6WujXZ3jH9DYXt2MxzQCneMTfkNRUpzUpigo3EXrFQTsJnxFvCCrvQU195x7SKxELi",
  "key11": "2hFeihbQ5DzoVGLvYS6wSH7gGzhSa9EkkF5Cn7P1PopT8L2i8UW5pBjxNwQZpa4JVzjraSKPrAcXqA8ytjb2f2BP",
  "key12": "3CjvfcvNgoPGs2qhzu7DuvC7SgedzpQG25dxZuqBx8iFU7H38RX741uTQjTDkC7Bas8pcPVbg9xZJdUbVcMhFBP6",
  "key13": "4jnM6oYF8gAU2USGtjLPvJqVaj7h1ZUBdUCvj8TvLZZ61Uyei9Pbx4KQ5pBXc7cStPFCTeT39YHERv18UY6xRZrE",
  "key14": "5QcaY6NxLPDKhuUGWxyqddsNua7Jhj4PbZcTv6T5MKS94YQw9d6h4wbbrZRHfhDdxebgrEPHNdawZobHzZwEneuJ",
  "key15": "5q7vfeao8R8AH3uKqRU8WMLf4PhxpTJpQAf1tZ81mohG9GJ1pnG1kpDEmsf3m1v42SpyPYijSQBgJY2cs9Z2Sfpm",
  "key16": "RC3Y8md6aTAJGtA7Mph3VzvJcebeeuN2f94qA9FoTn8hSBujJp4VESMehHYrGXUCHdSbsMLxTea4e89A9vJ55X2",
  "key17": "2MfCPQpiPWxqBoTTzZ8xyxhL9BapKZS4qrekpx3Ao5e7tdZbqUgeZQdLL8UMmkVqfG3ZEGfFpdcrJpyidnuguyjK",
  "key18": "2tRcndR64GHbUV4epiL21Ah98UHtEvc5t21S9SV6uvdLd78vVjuFBgebG91cDNJB7ZLtxBf7EyXo8neozHujnE7G",
  "key19": "4k42Wg6k1yb6vUiHQsxAxaBdJdVBpUkF8GwDwg96ryjKxr1rwdF64M6dKGXepoeyNP4byYi8PAdy3LYgQv7YftU2",
  "key20": "4KsGVSrLGtG83SgTzk8YnF4wTv9iScgSBtPmAioZqDKfbM26EtexHDFe3qzHVk6eqc4KBvJDBn43UivWCuZvbzz8",
  "key21": "29Dcrt3i6KLhxhYeWLkWtDyd3qc5J7SHkdNdwNUYjqAhwBnsKMAabwX5dmv6uPZof7zTe9CWaCv2z9u5JvvVfDZP",
  "key22": "VoaVGUTDiM5xLa5vZ1t38jAXXSEKw4Zo8d2obw7WrT8SSmPoPSNSS16GSwu1z8XaMK3qjVC4SBJ1J8pbzNhSduW",
  "key23": "4apk7wr67G94ZL5dQ6F58Zhf8CsRv4bjn1baAeFWxSbRiDFMwqayK29gUDGTnK38mgvbgrs6P3joAGWFZ8vz2vBA",
  "key24": "2qaMgHJpajVmHSg28oQfLUeXPD1rK6B1r8J6NvzBgxzQJR5pAHKwbofRnedz5ysFCrtWqoNFBjYjaLt2KQfWApyd"
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

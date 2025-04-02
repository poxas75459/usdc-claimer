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
    "2QWdeagqBryjy7YwTA2Jzi1ESpEjAwUyA3GVGDAbxQANtVnpVMvb4SUCPeaiJ3gHvZdGvM1tsNwEbenwiHMDdVdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FsRzcD4Q8a325Wi38PaLLGfre23dtqiS68DFei481UEjo6WSbibZz8N51VGBokR2VDsusaKeKoHH7CJz3r17t12",
  "key1": "4TRofLMM1kjKr2nR7auFvs5K2NFYYxyrdprozkG4hc16BhyYrexikdahW25am3JM8k5aLAsfwQYeFJ7tXxtTaMRe",
  "key2": "4sjxYhf55bunYbjXz3mquTyZA31JrhNgakZVfhA3jojFSXHAMuLitoyn6V3bN4dBaPJvVWvvhYZECDhTBpqjEt8K",
  "key3": "2ptzGmZEwkeXNwouQriUmZQrn8eEZCxgubxS5SETqCKbz4rxLmQ3U3qYCR6CcSVNCb5oQBzpSu4qdkp2kWspqFqW",
  "key4": "4RFaJCstiXyYjvTrjei6icpCXCN3HWyZtRVWeeV79AR5pD22JjEbMszwdsqnFjwdSEETHhNU93YDyAjq81be1Py3",
  "key5": "2t2HdWCKwaRoVDfzKtaqDHrPbmF1gpvuDBZiAyDyB4Jv4N9rWBhsNfbWcDccPzmW9SfaC4fnH9YSAx3BgB4v6tFJ",
  "key6": "3fwR5Xgfcf4ZEyj6i238gwFKSeWUAZELYBzAFR8KT2QFqGq68R6Hrh7cxZ5pJLSwYNv5zW2upgUMYvGucfZ5U9Kh",
  "key7": "58KNxgnax3zNTKTfz8tb4KKUhYzGNVYxMwLRDxdc9KNcDRc9QXfBfwXLUVV5ESkKKQSwGTf5pVWUFj8XcDsN8bpU",
  "key8": "5HyJMxPKGDEoGsnaQGLzzcYZ6y4xNqnVtmDPZWnxs9g8KYr3LaTyCAn1Tc1ipjzgHiTQXnkMs7mxDNSaQhtwcJLQ",
  "key9": "63AfRRhdNfX5NJuPzJ5b7PUWAknTXWHFXA2j4hHhVCdMM2hyAwyQgQeRtLk8SiDYPjaGmkTZyJwksjkSXDpj4t6U",
  "key10": "2ne6GfmKx7iEfb4MQEj6gc2aXMsgwzFJuz1eta8w67c7WYgzJ3ZVSmbmKt57ukXwKkSuwZ7J5ZWWTErmoBDYDXSp",
  "key11": "5tAnYBKCrXZEf9HUCi5oQVUxiaYBRHwKEjL3gduCVndsFEDBMTSzunBmeQht6X3grHDUqx7xhXsbLcwBXhRDwbBJ",
  "key12": "uTMPZghHTEZtG6cuH89RDG1R3poazXBqMhd9Hka4PXAvKKRPAvkwfpF6wDWJZaEoTeXEy29gfbiW4TA54vpBmrB",
  "key13": "5oRF6T14oNyzEkVxaz15aCbijdCD8BCSMto9thMBUp2xMzhvLqnLLCJmJqB4KDUBxPxpPFGN9k5xqnKqirVqNFaM",
  "key14": "3TT4VWNqBoWEmsexiMspKuciHTA1Dj53Po9TyyoEEXVTXWU1tpMsYiwGK4AJeFmTKdtULZV9g3qUxKX8ksfZSPyc",
  "key15": "2fTZux8po6ujC9WaJJzzgfRvD35xWFMGtyA42gXaKLV8Ce9bowgjhtH4DykfJvXPpWpmkAa22qsq48fz2igcZpW8",
  "key16": "37iH7fCtxVb2h6sFaTk83hryQUgcdzC3UfhhsNcbg8qvvtgrH2Mfud1PpXKbHeELumF275FfMefTNAVLYdn5jmFs",
  "key17": "25RGshTWkLYPg5cxnrHKkqW4Gt2FmPYDms8i3yBV7EqzmLz7uL9WSFFg3davX4CCCAvHV44ornXAXjd7hwvzuLah",
  "key18": "Nc8phv99ZWsPrCHC5WkqBgshVkYng8TYnaGJuo6JgJYe8CnMbb9JfU3jsjqUWG9o1CmSTS7YzJksVnbiDTW8kei",
  "key19": "4FDrbxjpM2BkHiRfb62ruaWp53g9exoFg8E32gt8nv1nWhEbLydSpLvmvGF3Wzk3dEq7fM6q4yb8YbKmnNFz4w4W",
  "key20": "2sebwEuq8snQtbzanREoExbfdDrtnofCJAmrbkaRyawqAqDN2gRr6poRFUUi1iE4CXVo31xTaxpVPdgWdQQKbuH3",
  "key21": "3wUjyWuUkG9tGnzuTT1brQjdcztAD2LvEcj6QiPkQZZetr5eepEbEECLMvD8y6zyzrpiAwDSdKjZ6BiKhGcjyo7d",
  "key22": "49qBU2s2zXfT4ibEwZnNaWFLvAsNBLbd3P2TPoH3ooaL7mQ9RyegzJHvveHbz81qZ4TfqVDamG2P4qfne2wNTyFr",
  "key23": "2qU4XYcDrUKoAc7oAgJMVzJ3oxmcH3idWDBGgGz4zB6hK5Fjxx1uaYqnVznwxqwbDgvUwCyeCaqDpyLEsxWx6qiy",
  "key24": "5Zpuge8Ag4tnHSDEwWGXofnqeJi5oeKvy3BEZ929q9WpE2z87Dj4HwwfoazKygip6pfaEodoT6ZporAQCvxRmCxV",
  "key25": "3zqEgQqXt9wrzKkTKhuxm2Eg4yA7bRB36LmsBNpborffSPLuMKyZmRBwp4Ne8bsrgwEGJczrM3MUgWpPkSv9oQRu",
  "key26": "3JrVaUtv75e4geLfqE8XfV7niJYVVzr6uG1Bs4SrqL9RStrwpH6q8uq8aMZW9BWcmKFipzsXE5ws1cCppT6H6hJE",
  "key27": "5vciJMQqJgJAj4t5MiC28QFarAypXQQSJd7xQKy21f4siAVxd6nwPFBPBTDivpC8pmGuTmAxYZaS1VnnfGz39S1q"
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

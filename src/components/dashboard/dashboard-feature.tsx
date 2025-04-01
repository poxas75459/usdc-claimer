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
    "HRYvaDTE9JJ3NKSjcvsFNQ1UWjiRFBmucS36NsDj2rCc7ieM6QrwtWX9VkEmEYBKfzFgmcVpYWU3FZuLYBKGaeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tA2wEPBi2jAGocbKAGivHoiCXm5PjNYt1mZqrrPbG1pFZuYsk9pxbYnNoooyA3C4fpBNdKxMFdhQ9aFPtELmSQP",
  "key1": "TtLhHcGcJ4kkpQVxpAGt1W5k7ti4y4Z2SLzEPCGRZGfi3xNcybb3WjkF2dgMnadC35XodczzPDb2DxqR7KApNRG",
  "key2": "HkDsyDUMpgjg8M9ThQtecXS1XEZaPaWrMgAnMA3Z2owr7SDBbvLeAGQfhyWGvxuuUoVutgfUP4Msdfda6xNE9Aw",
  "key3": "39HdporUFoMYch42wHF18Qo1Wr5sWMv1aer9puXzXErdoHz3T6YfKhZh2tLVEJ3gtiyaSLxPWdiHLPCukrfSxSAY",
  "key4": "8RE4woL9uWwnqrMW5hKBtN2RssHDrSF5VhXDeRXCGRsQNfwX5hf9zBxEEDBLCQ3Ec6938T42FafUe9ui8jhEYDs",
  "key5": "4Zs11u5GYXFRzfhWVHGem8T8GfxTqRbwSxobYQt2NKVaoMJSQDo3w371YMw2JasfrjTQeG2QCEDCX1VM2phFDaZi",
  "key6": "3eKTBYZ4D6Gs8gf6G9yHAH1h1Z3rtAdZZUAGpj74WJSLyVY8dcDMUVHV4P43774uRyLUKgnEq9v5czDUNXgsc4wB",
  "key7": "5gscpCuToRF5kAPX93BcYEHn52ZNbV41oxxPUYnkU9oVQKN6wfAykQUqY7kFCdfCEDCZtdP2T629MTgagdecucio",
  "key8": "4D7pgtTdeYz3mRHa4eu8qbFqLaRebTPgbvFhByiu2drUxSr29gdZvAT81jQXbyAcSTz8g4ZNzHb3crMxhvVoNsvP",
  "key9": "612jfpHek7yacRwbhjTLdGjxUBzWrDxC3j9FVdmi7XEBZbnLoqCKxcuD7SbWiVHHv5MG6RNiRAckod5VX4SUURLA",
  "key10": "3TKF97L97XEDcVLSCGeKcoMzgJvDk5o9kMczCEZTHSjjQpn7sWZ2GetXpWyXUENGNkaWxY8HerR8e14HcsCXTeVi",
  "key11": "doeENsTDGAzaQ2kjQwa6QoBe2mXPw4cRRx8yDB9y3w3dJYaNSALmADo9Fgu3ArEDumKRBYsjNAVR2fiXw655JbB",
  "key12": "BsfHcamvKXCWFKyG8pz2hvScCRsgn8TwJUSeZKgtGMqL6oXZnPsEJy2jx6o42FsZ5r4JJCPne4MRdPsK4uVY8W6",
  "key13": "5PnwvyqRFu3Xf2q8YUXVToh6aeDHbHaGLBoynsRGMQA54NVHFCV8CUs2wLoJKrcaKuhyTDPLA4AGt6N6h4p4JP8q",
  "key14": "zGmuF8TSABwpfbXk5DAB4DrZfCtCQyx1xjFo5aPuwYPnmCaHUUQGY3qFDPfFMcdbwygbSiUYVfupXQx14N1xssW",
  "key15": "5LEe8aV624Kqt4sQ8GFoP7Fy2Zj6j7fEzJ7dsJMUbnoqwHiZq5YcADQebmEt6X3Cx6ja14KJrSs6sRkoZQjL2VN6",
  "key16": "5avWXQ5yWuRMTfLbY7fM475tDD9Wa7L7zmmED76v9FMo7xi3sQKGM9TpZhasUY5UdTXDBxM3gQXgYppAvLSnDwGT",
  "key17": "389hPwMG8mSmBjcVPdsrYC6AYb6tDsaUgPFrakKJ5o9nUnASVVTRbt5cXsdBFuz7t7Ez62MVh4yCemdd6rLdDjUa",
  "key18": "632ie9m4G6V35cBzDMJPsKCXR82qG96F8x1zRTUqeaybZk7bhyjpj5ixJBk7rst8KmpdsBFTpKUNeMiRdESW9e4G",
  "key19": "3VWakZQD41GsksWH6FGkZzGfEDoKP7Ns7osM7YNyhYAwP3pLkE2scmR2rDPNxGJ7X4VVSBNRVvsHB5MwGXg8gFPr",
  "key20": "3YXNWANN7RDnLfR5Tkier5A9qULdErJvomDewn2w9mtkVERvso2ZF9MtnRafGsS2uk6yLbHDUkaF264AaZHVjn7Z",
  "key21": "3ChsZ9N83mZgwLEBjA6LZL8ku5qgRCpnvv4vPWyGJ3eDVuiqyokWpednTVkkxGAkMspZpFQ1WBvvReotho5fFZBf",
  "key22": "3iDvV1ikRX3nnYJgdww43dB5oTabFm8Xq7wrRGkGotpmDZREHGUTmptEysWAF6Ut2xW7bCdq5EGWxAmRhPtSyJpK",
  "key23": "4cB52SGfXY3hZRU1YsV4n6gjpZ2ZYcuYBT3DN11PLfAj95Ep975BHDLhVPo7qrm8u3MQNCxw6KruBsMdS9e8oMaS",
  "key24": "222rNArifPfuzLGsnKbxh9VCmZ5WPLc2Nb6ubDiNFJRhYX55j1MTXxP8dipwiuaanvLpoFTkTGAdZHHrXx1r9Ywp",
  "key25": "3UNQC5eAwwR5v9naPe5spqSYxUrCzFutbVxt3M5oWkdm3Tu4WPTH4vSBJ2T1DfixGGkqffuUoZxFb4atcc67UW6G",
  "key26": "5exeCfkT4PXkL89TVzbGZ4BYzKAmJbxJhEA1YLwdDdU1a5vUJXpQ3EXCCaQYgF2TYPejzcvG9k6nqgmMDLq2Xapz"
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

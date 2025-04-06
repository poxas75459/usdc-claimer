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
    "4vMk2kz3u3UdRNfcrPieCBLa18EWZ53UTaM7upSh1jpTyykP975T3MhTVwSzqjCTDnxHPg4Fph9cdCWFu3bGQZpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVb3DSPvhJrqMAu1E8xp4JNQ3wyKEZTzkjJk2pHxvrfRqDCcTGijK1cKeg5CfH1QphzpFyPFTb64gEneEvbPcdU",
  "key1": "3L5nHbQBXgyCmU1jhv8uLAgjGmtBWBh6aShKchXHxUKWtWSPBaRkhvt9dRGhTZ3zJ2pB32e9DniqszXtrV1cCEAW",
  "key2": "2BPnoCqjjzRqjp1cmBkwhVdC1Kzqpu6yBm6gjDcCJTtoUWZWY8juRKAzmp8Zws4SvKDhs6g64fiRQXn9QHADjwzQ",
  "key3": "3enenCzr5YGomG6r1xGby4NmXbZeXeTqfqG6xjTvhKae1S2xaYh4GSKnMQcDfYsDBMBYDXTSFY1G7PFG3WEeucEy",
  "key4": "5XSk8VioAMeoeJpLJTR1Rr7jKSDxh6ob4MtVN3n6Sj1d5uAZ83v4ZNqUWcS2VFxSksQyvVTMr4oFGLUqhn1gEEnv",
  "key5": "3DpbBdTB1UKQ4Xi2BfVXKGHYRapGpc5zeuaYFRy5fKWoDXo6qwr6Vs2QdrPvtQTU9w1kSVHpo1cPc4Xw65DbTMxT",
  "key6": "4NruUQquPrRuRCrkForQnnR93aJ8VzE2FxYT62ucQ3xmUAFESGAzmnfgmBQviRUF9gXMwpowBSMvoDDXrr7GmL1u",
  "key7": "3u4FRN18X8Snweft13YTBPLtXQprx9JuMDocQkgj7dTTLFAoJL2usN2bemNPzkCniYu7Fxuwrx87W3bKjWeEvZuo",
  "key8": "3QnDqdg7742sEMNY2NQn9ghLdhAycDpyjR7B4wSfLQqVgbCk5CVwGVdDRnANPYqGzxtJcjdibsPYmtog3LoYPFzL",
  "key9": "5x7KQ17P888L3UYxbnX1yWtiKgcemGfmQV8HP9zXqQbfEteBr1vJpetsxHms39br6Dv35XnnxiLiMyTWS1HnSMSc",
  "key10": "3huzPrTdBFSR4d2bHPPcL98eNLMcvmPuDHXWyE3A2JdLpjyQatoSVxkA2GEzgCSDcVFWucLtDGiUiGZxme8FimBK",
  "key11": "3vJLhcNgx5AGnmL4JrtbrzhWSgbw3riyW9KPnyM77BGTDGzqDsujLoSX3gZFX6uV4cchNf8ozVonUjTL7LdyoYAp",
  "key12": "556oy3hZVByKnqdGnVQyaPWGEb6FiLsZgn2qqMvPZDzcQBU9ZZ85MEGDNUazTXY4DXGhgXm86Eh114CnZRSsGawZ",
  "key13": "57EHk8qUUpb7piLdV61ddXPmqK9Z3mQCYuMJMqjBeCqXmjuhVUwVALhpMsSenLjtSWjV8RHVnCGCRSsdi1J5zrxj",
  "key14": "hvJRLe6TxjCDyfeAHga8gXoEBPF6rEo2fJSLj6fcfv1nK9NbbwsFW6Ver3zbxpM2zaESHfuPT1ESoHDjowVDEWM",
  "key15": "5RiMudL5oMGUDmM5C5hs75vFnLdYxqxncoV5o8ejX3NEaCNq8hsPoUkgNttM2edfmActyCvqCtEJxYoF8Xw3Rn1",
  "key16": "4YRu8HEjtncAfNh8LS7HohszXw7yTojtVDjtgs81uGb4AsrDdZ65nk9VCJ4ef979q4oEAYqUDXbmkjVDCu133ic5",
  "key17": "4LGNUj7tSSm751csJ9CCi8zNUfsEU9FqDn8x4iLUEUxQwet2qJf4Ji2kJGaPoZPbNWkiBms2uydG9MyDS3AZFRJY",
  "key18": "49uqC1oSRtdYd1yW245czdPqj7avqjtnpL3tZZ82CmPrhef5RVQ6ZHpFocdmBh8dtawWokwLGLszzwUgryg7eqNX",
  "key19": "5JyxiFeKiq8HYRemch8mTnLTjGpT12rmTXfKFGA8tB4ks7v5sV26MUMBkFyo8yk6pTbXTKHwmBLeBXcYvZTgofb5",
  "key20": "2kQ29KpqfvaXkL6oxgqW8zizNT6xjgezBSxZsC3HrdUjsLDwFgLFCsru1uEvpe848NcrFMGzYcNQTf6Du7ybe1aR",
  "key21": "5VTxuq5ryyUCaLSzajYan3QXvEZDrSG293UY9hjLnydeq8nQSSBgPxLuSHwVNTBdsaQDnyCsnhaBv4rGcWyU5Yu1",
  "key22": "3wsMx9aPeSuod7sdUX77cYZPp9RxD5hr3rz1d5tCqiyJ1AkRKYoJTAecxN215JwxWy3gjQEL8tTBnK3rEpHHguic",
  "key23": "2AWVDtwTuWdQQQQAeRAjnBMJZfdT94uCHF7d45gu7bK2mW5VPHDT2zBNnPYaA3coo22y3LJhB4R4BYzeSqggif36",
  "key24": "4BrUhbYFM2MqJ7hKf9WWHTKJYXPwXTJVenZ89FRUiNsNZ7fLj1ctq216fydPDpj1PR7wzTVoMfqUky5Cn9VJWEv",
  "key25": "3FYd6nxYi5BspsjEpq2phATRoDDqGp4AgdPWzZbzhs6ukDnzGhFpKR4JAqJoRXJ5ZJqCkweDuxB4MnxSyMjpzwvT",
  "key26": "4zvXYgfMZbQAJHrrQTL328FyWNcZ85KA6zfGHCTzmfbHs8pFoDR75LA1TQfsBJxGh5fsf4niqndC8J92CcSQ8xw",
  "key27": "35eugpafhE1HhRrYAEaKbYtXsxVvbH5pwZmedBUwbpUxmr6GQcqJoZWiPa4UCBx9ma23Xccq9n6xE8LzbBCgjM2G",
  "key28": "4oBbcB9YvWJMiTRafiuKAEbqA1w3gtCshoXzj8rao9DN72L8dWiRv2ioZrmEF8LzFDAh4PHctQPfaQQd3PcTSYzy",
  "key29": "2W27tzgwR2N8bu4Lki7FvFV3iHXT65doj53oGBFupLMJcwu9TNjZceKChSsz9MDJRHDVUNMTirdavpuasnWJbv7g"
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

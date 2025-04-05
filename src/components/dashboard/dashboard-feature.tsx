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
    "4cEFP13s5FsxqbzAFTtE2ozP4SQSGuxyGDufePyKE7bXx89NEMKW4gCk2kZUEugv1FbcUmZtE3rrQBjBB54mQx83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZAqvqvFemZ2xXBwWf4qNnSVNQiCtM4cQNFmQ4iyBMYtG8yfXnLkjtGuvtW8TVJmm348aLnNBsEVCqZVVKJerzv9",
  "key1": "3ZBAkahjDDuaUjmZHY8MfPE6m8ZE2sJpHByyoGRPYjXHjvyJC37yN9XGhrwyTapKM7DZU97kLvbW2PegGb4G88LE",
  "key2": "2ZUcPeRUjM3nG8YUw9fMEoufRZozdqYHap6qeM6MdRjqoGAFi5CqVBFVUbn62sb7EP5hJGTqpukpRdVmyVrFK4GH",
  "key3": "5h7ZHu88NKU6p7j6sDbUzh1ZjW4wtY7f5pvzcTxRhPU3sfGztYz5Niv2kEijp8s9TKUaZjgut4ke9nGyesQ3uzCZ",
  "key4": "2euAyk7zR8VTz3CTfbfiHYaGMLfDMJvdd5mJLBYWpy1i6iLubpcDR4MhsJXax2XuZqBzWcrd7JrJAnYbBMvV8tYt",
  "key5": "4KnJR1eHnbzyA1dj4ByzAzsR3aHZNNZsfyYipu446a7z6wRdazuR1sGXYzLUDxKNeYY2vWWisyprcM3StCVr15Ld",
  "key6": "2jKyRBDhFZGg3ihyBZFsEChSTGTQJFQK7pBZuWAtgTo1LcoAdQcYewi61Ua4RGkR97H2wGuDEEydQMtm6Fmq2b7p",
  "key7": "5Y7ayB2dwQPTrvkXLDqxiQhhLwfZPHKePicSZ9fsThQ8DukZM3KATGWFgU7uTxpYr6zJs4PNZLnEBgKaVBtjKWM2",
  "key8": "4Ze6CgfpVhDGuY66sj7iuNzuPiSMGJKtxNVNwyoffJnbTeKKs4YkTjVSLCKpsx5DwikjUj3cf9xRERRwiqdiioNu",
  "key9": "DgV8U2JxKDLLjhkM3oh7dmUun4xEAhBUSevrHiYqhzJWz3QfwRc5Bx495SgRd3AWZ7hGfEv2K1PPzKEJKFR1CZS",
  "key10": "5rLYNsvg53W2Ai2bP7G99v15TW6SxJsyCeHsDL8f9PKqEnxz7YqGRWPFmUPVYoCfYkFmgHQxmXT5VASPqDxTyHiv",
  "key11": "2CiwtdXjDdTMN4ATekqDva8pAFtwjHLbHeBRXiFKQ8KddcTspdYvdwAU1iJhHQYZuxXcDg3JwqJc4rfa23jp1spT",
  "key12": "5v4EufPd5jGaasJ5XZamJdrRQ9VBdZ29xeKGwweQX6qTmhGuxRdvge7HgbJgWeiyDxhuJgCrVWko9A5FC8sENMck",
  "key13": "4jK78uTzd38XNnNFS6KVrDDpGUTnktcdJwFqxuUC1LEbNQzSMrG4ZTipF1JHZX7yWHVBfQQLmDEk8t6Uftgbmmg2",
  "key14": "4avaXVeCPrBvPmWySXuoVwE1fSWw3gmoSHaDWwmvT4z9J2fUJ2hufFj1vePxA5KG3LWWgupKut7H3UNUDo2YDuTu",
  "key15": "4hrh4CTj4wLS2dHdUQMKU6h5JDtjmYqorMABqg5Jym8FxLqMYdiLHx3iNBq86RmFWA6TEQmeRysGQkom1tSbN9Gf",
  "key16": "4Bsvr2u3eehdMhqZT1AkDSPfSu1sWNMRsbY2dF8jeSiDq23iAqiwX2Pd4ZHeGsVqcdGykPEHSZMtH4cB8pXWet2Y",
  "key17": "EnBsV16H2PADtxqGGbaArsQAEn5qSboYbpqEzjWyEDh4dqdiRmjUf21PihqkT3tz5TYfvxy6Cp9nYpWHRyJCXtQ",
  "key18": "2kSgEYBofeDDZWt6vkhDLGZ16NrpFfTtSRMA3B6YZyouxV4bJ1mQ9JAasyQ9uXUVUvPRFwJemsZ6aTszvFFb8CVc",
  "key19": "TsZY2SRyexLZGX5Ww7Zyfb13aiWGso5ciRn9azJqVZz6Q71KBoekwLk19WFAQoZ5WgQT1ug9tBdSHkB7r4Nrssv",
  "key20": "3PSYqpU6FUFmnN8A78aiQitVt3HZCGfxBCkZBzn2YYzrPSBLdBurmqrHyNNeeiuoZYGH9iX7qxMcUdzYAEP5cH4P",
  "key21": "4sKs5EoSoxr13dbea63qJiSbJGZkiTLmkedGS9sRfth5zZzSGv1SA6ERMw3kczbexNLwqezwBZnALMUFb1t7sabD",
  "key22": "4ZMhvGa5bmCNhoAteYUywtbJLxT5p3fn3S9uEcPVJ4uZoWbKUsx9JHjx7oHmVpRiisCm5Xe25uUgWwG83nB8fFLM",
  "key23": "4iG6G3anJ8gpAtMxEFpMtP3BvrbN7gyExfsz3FFsZSHhdHzqgVMAZHpk76AEYxf3spF9Jc9zrV13nvAbmBmHErVe",
  "key24": "67W46sVS8pWLkPVPxMDZrFZaoLCwq8QaupVFx7C5PyafK6oa7itCkqqiHB5x3FnjQkccNf4xbkYecRu3duSAdgo3",
  "key25": "2LFWxZE1uwvqVDaqX6BqMmXNiYTPpAPw67s5ponRaWcY47LCoSg7j5nfwQa9xP7wohdzSVxWPMUYtZ6oK6LRiwK1",
  "key26": "29W9pahYVn1DVPgZ6BRc9gMZpphvdhEYzvGVKsZcCFFjhChbTNs8sTkPGeYv5n6nnc9EydSnCPMheCCZ1dSAm6ko",
  "key27": "4ShFVHJoLS8JQa1LzFufHpWvbvzCXmx8mBKkcbqUgYRXBG9TJsiS3yozENCiZzV2no5FJEPsJ3H1xUUKmHvVG9c4"
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

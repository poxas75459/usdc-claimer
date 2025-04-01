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
    "Nj2AzmfF1mCS8SgWV1zR2ZjaLEd2oVZhp67TLDW1CXeZtAcgKpGs1gaf9DpVpV91AU3kAjdiywnzfm9ynBXFrFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33UbkSoAnqgGFPqxbtKSSnURceAjLWa5CrNPeTYdM6icnqpALrypK33dEWpF6mHL93hzjiemLY3m4ApDm1PdVsHR",
  "key1": "2eVDupriMfVSUVQ51tcUsvsxhV9SLkZaMsELmSgKZvRQForqcd3r43XkBNKLLML9YX8F2P4f7hKBPYmRitiC7QGX",
  "key2": "3BrxWbgUdgVrPSTS3YW1jPdReWqvKHKYb2sgkNycN3Q2gUvTM1gzqsexW6oAyDXSbwCKZKiH8UzRQHBMEqcvn9gV",
  "key3": "3MKvrLYiQzpMJ7ht9chpTNrMsxqYArL3TSJBGXVk7zXLw1XWXooyLyUtUYhZFvUdocWVrsrK8yLrkY98MeFQo9Cm",
  "key4": "8RmFyTSfHxo542Y8GQBW7uWDdoWJ767XBdXEVSN29Ejw9R4z1msk3eFrZDHtUrNpbJoege6KRHirEwWUpDHeSHF",
  "key5": "5VDRrfWjzyKF1fDiXnPZb7CiaFZ71jzfam9xUARga1bqBT23G8QpsQguvzZup7yhzHKvipEEc1pMAoSa6VaYwfJW",
  "key6": "2c8pHG7WoMcsModyM2i7ZhN88KkM4Xn61KohHJyLZnGNNF1Gf7RmonpoYiBcjUuPKBf3fCYspF28Wki9SSrTVYqU",
  "key7": "2MhaBWH1mSYFA9Qct9WScmBuZxPQvJW7U1qCus3UF1Fxw7Ye4jZrw1KCPmTiEAKMd4YWz8sNxZRgtpsNVtrkBdsV",
  "key8": "2NdmGp4rWvtvXKWz9FBkgrYy3j1D8JD3nTMmtVhipskvchkkawoi8SBrcd2xFaaETPcB75ifJk1TQLLPhFG8pjbp",
  "key9": "5TGPJ1ere1wSjhzkQ58C46o4xTLJDUMJcwnmn9hns6q3EWDYPX9cGKLvY8TjMKaR7Kk346ooGo3YaX9HBamrkuFv",
  "key10": "5tzCu89xaJsWNvB7mWrDzwTnLGMhLV31PMxfudMdSpPTYNrfg7bt3RDfrG9vijCn2R7ftpFSo3jJmgDXuJVasXb2",
  "key11": "5tSokFzdnaMS18FBBcEPpJbYKnz44DhURgHqfsCg1XGesPgS1moo2iHC3dddRgPSxkjg44Z4i2ooUcWh5jF6fViT",
  "key12": "5aqkk9NiLknFySEE4MSVpm6Y1sFeFjZjvmh4KjbHr9hThQxACBM7xt23C2PoFdto1Z8QVpP1dP4tB38PVtCuvdfT",
  "key13": "ZwxdqizA5fNgKT1ihqwcN2wNajpW17MbCTPB9B7qVFEQ55JzcsNBhjkTfExt5xpzz79Lg33PfC9pqsbG4zdr3Ft",
  "key14": "5pgoy9QHA4KRgUbgxzKTJLZB7bNqKPLmVUMtSrTqtHqjVz97u16XTT88BBwmfXpDsZebHHRWqaNumhXWy15hDvHk",
  "key15": "61LHCiBxRZUhQ8UCp5ZbHEfPCMRekMSAyMLRzqrh5kMwGmvcQr5XBMNQQLxPHRsCp2ENxfL6zbJ1DLBVQK6b6T8L",
  "key16": "3tSANQJB9Cxf6W7HexoJsUWgyFAuKPVS4VMhi35Pm5w4VgQoVLUaBwPyoECxnyf3z9HJtEwBq6Ld5rGNgBxXJTmk",
  "key17": "26H52rkc8LLhaENZqYzxon1dPrFJkcLLupcFxNXDk7YFDb7sb2biJqoKMcKg7FaDar5YyNdfq9PwU7KGVxbCmT4v",
  "key18": "5dUXZ4u4UARfb2mZRUKnwWtgBB6nQha39Us4YUHmvxMB7EUDTWjwWv19FWzC8zeptanCqQUB2DtFZ8whuBAtjeQP",
  "key19": "2soDueGKADtvXeWWAPZvuZCafuae5BpAY8nDy9Unqo6eR92S6gigz1p5hk16o7XNvWjXbXseF1WGPTHLtXKviBht",
  "key20": "4A2YziqQJaVgEZmn524nPKDq4ETWjBRvaQNwQ887L7MzoCsxEvJbBZWiBcHzzqgz8Q2K8CZ5ZuAjk4RRTMdgBDBj",
  "key21": "4TLxFF8GMCAd5aUVpbqtvvo18sZXsTZ7a3CdBWtCnQGwXhaNqnLTwijk7U4PENnLw4g7FeaQpykPigCke3so1Q4",
  "key22": "2mTqTm8jmQKQGnPs6BLpyZN582CkkZVT4yiQGkz5XAwqbkokhZALskq9NTrrXaec5wsVB5BNYfazmm4zJR8sg7WS",
  "key23": "4Fjxa9eRuBBjM56PoVxcPu6e73HdE7LqYhuGi7tidge13FsjEHRxbBWeiHGbtHt5HheWGKuEk5Fa5ptD4acuDCEP",
  "key24": "3SBxSTtTn3t1hY9qF2UwJ9K32KxfMXhTioMwKk3ttrPXK4XyRjgNguyD7KXADQXVmgUozN7HArHFRUCCRTiRPJu",
  "key25": "5rV6pdPadimQ48jZkiqLVE7SRVmgoKqoKpBzDrmGbMPaRuqJKdLPU9YQgkcERjxgvXsUAaU4yQZFT7gChrehQhdr",
  "key26": "3ZGpdq828qR7Z6s4FESqfEE4ZsRpsgwegbWBPUv95ruwJkxAWWAGStUaYKBtzSKfSiNqBZJpa5JwKTeMu4mP8uMD",
  "key27": "5S38bFZVmy1wGTakPyNK3EQ8SJDxcXRnWeTh1BdmwHGRCwVfE7TG7ddb3M8ZYnDRZsvm3SLDJDkezC8pbmyLEXb9",
  "key28": "325ZcnJp3XJo4pac3TuPQ68RRR6WAMkcyPvCPsXeCZj3b3wghvL3Ycw4TFyptqwRXJtAP63s2kpCzgVqcptZCvaY",
  "key29": "4Jbrf8TwvrmPMDmxu1Wb3EVnm8npQNuhB1ZZxwJufe6EdNt9WrfqxW8q9Hhb1zArbqKATf6YtVPraTTd7RhBzawC",
  "key30": "4Dw9fzKWfPHgHyHgykKF7PD5oPN6XQQSigvgDZ857URZFgUvEShwCRhn4VAwTM7S7pUMWYqiBdZhwoE1bB5j1faZ",
  "key31": "58MbPN9RhmNXDVU5H9dwT4nwvfNi8KuHHkUPtJbTpXtsYM7piJanwnnkitDmcsHHB36b5EfD1inAVsZTVuWNuMN3",
  "key32": "5nPgUifRBVsWpajbR5TNKodZcfWsN9mCGJaovNiF1CwkBWrYpSCP5zSUXPN4Zzz8pcv4TFPC6TCP7kaMx3W1TUzh",
  "key33": "3gFpwLgNzLA6pDSjCJSZUGDA1W7rQQVhtVq5hctfxPY9NKis28CSR4iYgW1qusjbu46FX8Wt3eNuXtDeFTQcjKRH",
  "key34": "3GpfiXVTgUURg3eeFqvABU7V25D7S3h9wp3oLfV83o8iXwFTenzwtfySwQVZcRWnVrv7q775LVa1csVqMJBEpJMq",
  "key35": "5jbgWUDhWUEnbyqyCLc1imG2SnQoH6TYYu7PscCZmQDXtHJJeVQsBVMCNn1LzVFYYsaxGQyvPf7kmcofEzmigc7u",
  "key36": "27UFLgWZ5EA9VwmhjARMSjdCwVBS78JuTPmG674jFkdmtfzQnzdkTJ5Qcd21dwsC9y44qMnUAzHun2o2G9AFERsC",
  "key37": "37S3LqvadSXBnqJoQxYmUXEKZdBnv4mLrokbQv86ECtupNE12Q4PJ6ypzEcPtpoeGQkQrAQjff6fPegizKG1CzK8",
  "key38": "3Q48hfB8Jr6mKxpY11kMPjjtQCKniSQxS51PA92Kh4sFuAX2LaeReMw5BvsArNXTGoUbmYUtApS4zYL9gm1htFgT",
  "key39": "3H42kdYyPajyBDzsCdP5JWtCahZqs1PfJ2LTVNo7x6v4AkLw8cEWb9UfGQnJ61Ezu3h1VE4TgQJpkGPNTB1BxNwm",
  "key40": "1TysEHHrvt4ijgbEGQ6vELgmpc8sHqwTLPR7e92Qvx29DFa48GkLtcwBGddRYBzpN9ap7twSHfgbYxWGPVioEto",
  "key41": "jqhjNo7d5DEuvUHUNh3i3bJCKTwZWRBPtsHzoto2qbyDipAARXhLvBGswZGnLkH3qTwPk25qCcFih5UT9Wbp1hK",
  "key42": "4mTLwnPmAgci8rPWAHzZ44hQZGd4HZG3GGbCP8cVYbrpQdSL7tU3mCn9c24G3LU2Kiq7iSEkXcQbuLiB6J6jUtfr",
  "key43": "4HVHbKce7ZGgWtPneoNhMuoCsCGbPPkVYCs4Jyxvcfn7FsstdCwvb9MRkeHiBP2G1oMeZPiSqyetTdWBpZgUcmKf",
  "key44": "4G5J46oS4UULGdXLKAQmZBUqTyvnSGGaLbCo7RC7iP2CoexNk9XRRyNazw8HKMEZaQNG1SXFyiSQVj7ktEhMfhjG"
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

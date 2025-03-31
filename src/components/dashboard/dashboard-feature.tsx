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
    "27M2N5JZjaGnn6J9hjuvkT8x3bsRizim65d4mLzpNRbYovPLKTcLHsT2CRoVCA5inDgNStL33yrcGjcsAfPTTeyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29xb6avMrBTsnjxbuoPuP7sUKxE7hv2rQzV8ZSgaWWLEoCPsuomiBxY2gxAi259vsYrReoCoeeq8z4yFrh4SmEG3",
  "key1": "3j94cYytqKfYVSkjjz9jAWoSU3xsGAeUqM2ZekmSVwukwxgWKrMRDpaLhDtbuz6STSuLVhFgvLsSgHntFb9zSu7o",
  "key2": "4s6AVUgewLzPrd9MC7KaNqTn2TuzADMfW1nScxVkk7Sq9JqaRpUJdrbr2c5X2p46kX2nzMX48tTb4jnQjtLfHYYW",
  "key3": "63ykE9YJBP5ZbmLELeC12YTX6dmeGeLVkZo73vakfL5xxErRhG4AMHCgmVL9DBWzrkyx3t4ZWeV2M2MQ5rtsYEtV",
  "key4": "4QzRUPMEXeeqYPNZ3vNQ61CgZ58DR9TDofiaa4vGYxSrSpMQGbNQcA26Hvx1KofvUiEnzSjWDCUst2YZNexjj9gr",
  "key5": "4yX8mTKwUgp1zhQ2t2DYFzVcmiJTGJzdYZi7jCLPmzaPZJK7Gj8Z5QWM6sFPXHCPk31HxwcLzPcuLSuMcHXyRZ63",
  "key6": "5rT25bwHbFh8PmmixzQXbDB2szx3qG5cvBYn5Cfq4m1tTXTVBNwy2ocMNVaSbJwJdP2VgBiZzG5c9nFPMpRnZpZq",
  "key7": "22KVcUcFWFt29r7JVj3HWv3QKohHTgbo6z8VXy1E3TJsxcmjdWQifj3FKwSBNgvVDvD9jCTQysn6rDJ2EmKNZoK2",
  "key8": "4mQWeZ6p7STBAjH7CqMX4SaGBJwMSFfdnLNgeseoDTu6AGGcSwyEn6QivZnsStDq9RtMSgv3mzUYN4TA7AjGky2t",
  "key9": "4EhzFmzA1o2inCqkSVPeGX49bHzJockyUhRuDgSmkgJAt93kiQbZT9HCJ4pm659WZH2sRLcaFKzAA7TtXSsTVtUy",
  "key10": "3MXUyRBByrJE9qQDgRDLLLjdVFA8eAm8ECeK1GUXBf7anQnwirGA56nM8LNA5awUQPT25aK8JKnZjUM3TNkfLZGs",
  "key11": "54gxAEAE7Mi7XaNRdi7rz46R6DMF2z6dbP1dLuFE2rRWAn4F1GUsCMJ4eyQWaktokXsHdVi2efJErEHT8EvLHXQi",
  "key12": "3ichwJoPBS1knuEECqbyu6XgTLhzZuHJozedxhu9BEhhWhqcSd7b4ad2hb2RhLiNMoqPzKxZV3YSSubysGpUZbxN",
  "key13": "2uJeFNrBPaQMdcKtzKHMPsrXg9zQ2DaQFWvsnj1LbbtwEA7goXiFFBiS5RLH9k6Ssi27tCkSeXWCeQVDL3rFqNa1",
  "key14": "4HgfarnfmvvgoPho9X7vCdhHmuz5DBz3fEBrpg7EKZJANJYpQ9EVozYHGT2CWg6qqhmG9aPr97DPkJqz9W89RRdv",
  "key15": "4zdFu7hEcYXhdRY1nTYrU6ezRwtmkkNtvqybPaBiKMr9y34uoZtNdiunmpPhYARTyZ5QAMgG1KbkyYDPoxRYD3U9",
  "key16": "4KhnoBgodcghKeNkZCqadvuqKuz2vgDRSRehEf4kJLArKBSm4CxDQ5iassnTUCNEv8X7hM7DrdNohdx6gvPPjGt2",
  "key17": "45kwvZuCAxiXjY2MRmt3sffvdKHQeYWAPhYkUEeWiezGwduT2ezqPEbPQFQ2w8ZAJeivk2S3aR11cKfR2so9qMK3",
  "key18": "3D9GGfyK4SAG4HGGp8EeZkgu9NJNnWSrtyC2tQTEBpmnqQDNQJzEKwBvXR8icPMp2jDPeNniWLYPTyfBygU1Ka9F",
  "key19": "22evmvhoDoV8FWFYt9nNMyoWS9kC4kWL9grFwQftkLquUqW24jKKrxg6VWtGuJeNuyUst5Y6nrNCBYqfRYkFtN7z",
  "key20": "5dtwfJmSbo57dtWDKwSWdeU7FcZ6W4GP9qQGfBYq87UiAoMTcEG7W5UQEPy3oJfVW9mBqtJ4rAsKVk7EafhNKsjD",
  "key21": "2dtq4Ypewqqpimsz69MvTqMHrVCbYTQqPvyyxz1VhpynVP59qM4QHnW1CjT6HAdeDR9LMEHacZsL977XaneWrsnp",
  "key22": "24EW7ZZJGVDdmqzQryAN8Jt6HYQwzvjTfdfsCsCG3oeAtaNWGuZnt7V4mFfxXfu6Z7fD5v4ZYuyExqoYGUtgfDQp",
  "key23": "35MqaxzNLWWk8mf3Si7dQGSf5EoPRBmwD5Po5jF4snRbfpi6J1PS69S1otcS3nK1zu7TS83KWkNCbUfpe1pdPkr6",
  "key24": "4sAPuWWL73dCEETCfeK4BVCixq17QqABX8Zt23G3F18Xvpdv5Y4tV6mFkZ3q2fK2NY5PnLcixiJUHRsR9V4pBPqR",
  "key25": "2fYCYXWMpAnPKJmaLtsXDWTisyk3gxYQfZw4L4s7DBEzD4qsEHmtZ8adtPFCSVXju8TVPPeVoKTunCV6tnXSJ1HL",
  "key26": "3Lwww2FLtLpkFbzijh3oLVN7KiYBhr3sTERrk28hWm87y6bZfTeKUtSg67VkQZwg8NGdKxNez9KFhmAfi1fffoQo",
  "key27": "5iN1JMsiyVDCunytx7JjrsCRXgHhnMiGfrKe95QyoVgyCvfWrgKQJdyrai3ZXS36hMxx27YG81WQVYuyahj9rPRs",
  "key28": "5qMWfPCpb5PfAuBUz5SizvehJu9nUgo8rVEhTVVMe83GxSfArVPb7z18WEtmcwV7mFKzg5kr31ZLWxBpnauqrvFo",
  "key29": "rJ7qNvxwt8oixnbs9FArebkh8Lzjxf6tvEcBQqJBbsDNfHRZXAxnteUgGjyjo7PmV3Rsv9RnXy2TnuFjPdVSVzx",
  "key30": "5jcZCdqV754jYnsJuF3UthYWdJzUSZg7e1qKiJC3JBdAAuyYX2xxJi2eaFBRgKmyDTjLDk8Y1rBBLYdBJiXRxiVQ",
  "key31": "3aXpBMeRECm9PzzJb58Gbts8t9WShi25h9W266yPHWRu2ZbmaX6UqjPSUZzYXw2X9YzhkA9SmSp9z1DTZFKF69jo",
  "key32": "3VaA5vmQxvRV3rq8LXWiJcHHq3yu3VAvTZqgUL3wamEb7kr4XqTEdUv5WX7Jcm2YnFkm1pes8jKdQG1BdouWiRAq",
  "key33": "2YxTieWn34wwZUDXZaQSEyv8pSuFLTzrzZbefyNB7yKxXbL9635xDtnR9aStRRYGEJjPNwyj1w518Zgc85qUXgwV",
  "key34": "ZgwQkDomphVKjdkpSmSo166bF6eG58w7jvwUH8JQCXDueU1HGcLhEXgWCuTsDF9RPyq6wxoKLX2vEHNdoQJXsJu",
  "key35": "2KGWeT3vTKJaCfM3YdGg4DnsXMupVrkpMzD9VJGaxH1cqYNSYXq8bfGruW3R7Yd8VaWosKVm7ecGW3vHWUJaxz1Q",
  "key36": "5Aj8hgwU3pMJmNjuH7qpWjMUB6qn122PbTiLFi7uiHiiW6Qn3M5jBUkZuu8epeQjpLJBRpkoXER1DV7o2N79mYSR",
  "key37": "5LYbomfLBaBgDfTHTkXbkuBajpXjTsi4bRtxmX6DrSc3hu8TZY7qBh8DLYTHTRtK7fa3mV4Fqh3oBXCRviaAABxe",
  "key38": "3Ho7sYHn1F7Ys5j1Kw5DBvVzcQ4u7V2aaeqLUVr96yA6vmXebzZfRKskAfYVL1XL5QtJPFsiJBJ1TLY7Wt7PEGQR",
  "key39": "4oLvvNwrJaEnT5w2HcSEQ41Mk44jQFqbMAXauc9Ke1JR8uu2xW9G8w3nZUaXnGfJUcG18mgCQwLiJPsJ3F1BZ4RE",
  "key40": "4bKCFxoYkHsH2vpMDt99FVQRQpNqjjf8RjCadQh7hPmvYthfZ5ucCXVZ5jJ2RnmbH9D7D4FkFzW8WX5WdiDPhLNr",
  "key41": "4j1q82KLvi1MsmTbyTtoZAj5P8b8dmoGsatktN8dgtkvuBXEfaWgBLdyJtidKwQH1mJ8USenDGTXLRjNnc1xk89r",
  "key42": "16hUvSsj2SSaK4SE1TLggdhtAVmFrRS976qT7iPrgLakHxkDGWznkBT389CRmkwDfv2joE3P6YXeYB7TCK7NQPX"
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

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
    "31viqakSMHm4sbVtTFuA3rXX1RpM9voL16HPgn7WByVd2dxJUHgrMnFEA3ULsTRXxsC8qJVwAW2DaKY6bq28Xhnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXZtJBDxAK8ZkshqLMJqiefmkGTZozTDB56VNQHTmPrHU68TPVQxBViAoHirXFU4mqfn5X9PbWaXBYbZ6kAmMgu",
  "key1": "34qQYfVw8igieZHU4UdUWLS6hEqUn4oNgzbbgdLaDYJcRm7X2Y4V49MpM2gAq2Lr4N6mhTXQ8rRRy77NVqwMgZtH",
  "key2": "374TdaGZGqnNCegXYvotZwg7CHnDv3ErEAPBPYA5kTZ7tFKSetB5umzoxF4gZzfKtwaEzYTMzcscsQwgmehhj8nq",
  "key3": "3HbkbWpxBndQnggzrLqJnyQXeARNjUxQRdkWhtJTq7CHTffqymLzzHgz3VoYXpLCatSSKKKYyKYgsPV4egoJXcbS",
  "key4": "2VqGyFvUiQmCpoRnSsQsLSFUJ3QUXLuVy7NYrRyXCmrGSx61ySC93AxbRSy6yGt3dexagzPLBHkPt6SfyQeqzJck",
  "key5": "Tturnpp5g1chue1MNbQrQGZv1DVb2WCdHtBSwCSNmcRtrrG5gbC88Ezx1HdLiuUTaMHG2U4E26bjAX2qzR5Nah2",
  "key6": "2ryf7PdynX5CEGqSbSSdnA4SuE4vod823hqm1CDVsDPXPGvWHZTfZm546VNwt8mPNv5P51Mscg8DPLHyc8b4iNW8",
  "key7": "45E32qpCjxSqgyHJNYh36F8q2yKT9W3VZASEMGo69MweD5ryuSvWX5b1g1UEvCPqyfLL1uYvqJi8eCHhGAwjrYcc",
  "key8": "65Dg8a6w6vYjXQtdSoGDzanSiagsX6EfdsHMPB3gN4kt61iNoE3fwe9tof6jFPUC6xcojJBfw7QQ4TfQGDB35pn3",
  "key9": "amstrM46pZtXk7UDavQ7BTcvtVmf7UJtooJpPWFT6vzCSy5nW7bB3ciNFerPwf4DKYaBvUnXJ5qRF8QztPVmGEy",
  "key10": "51jfd3KVf8eLzyQGJNn4HpLzZEkbNw7hQMShEKYfUz81VbViofP9pHR8B58Er2Heqyd2YuKHuM3stJT7aAe6GeF4",
  "key11": "4MbPvqNk6msy6VMWPXUbUB8p7Hnvp3uKQXFANky5nfLyy9R5KSbxqDUeSLtiXVdPnad8FHnLj2E22gSgfVthVjCY",
  "key12": "LbLJEqNYptGMQxMhmzt2K4ZESZFCukrqNtGAPZUeAsdCar6gSyPuptf7zBc1ys6qKH9dZUyvAqiETgnEGhhiVrf",
  "key13": "3wp6Yzf8JjUCoEZsHLfjqCo5Hn63Gmq5W2EvinQaEwDKuW2ACNYVquQurAgeqGpoxf8kisL2tiGD7ij9yDF1HVA2",
  "key14": "3aymCnAj2NNryYZMGHpLFEXiHuzVTqV24tCPmC44PNiRCJ54nAUrLvNQwsBmq1dtFXdtmYLyG1xZVpwzS4ci1cbZ",
  "key15": "2Mtk8LTDLY8AM1vNemUQN6YAU7LpsfpAd7ETp8ymSRX6xmy3iof5YmjmUVck4kw86XP8jrsp324Wr6TYAX3TxWSQ",
  "key16": "4jP3f2LRM1rZXLBNLY3wntMXGw6EE1hHdH85LuXCByk7iEKrAqp5BP2MDNQSDGmED3LgC73invxFYHsDsvrNzHyU",
  "key17": "64b7rxycTy5F8omgZK5ZNvEKBbF5taJqkgWq4xMn9erxPcrjVq1GNDWmkLH2UG29dsQrjp2Mtx2pxzR3YMLA2Lv8",
  "key18": "3VjptjZb7PPChG1EQjpZQdPHZjMxHTGZHajQABmewXnvY1r5hg3RQBJWiHdk4bYWqdJujwxhi5AYBpr78hpbJf1X",
  "key19": "4HGkUj6LNhPFp1NTAKPQPTqEaFjpUa5EUkea2vifeBzNxe4UMxTnhobBZozWqne8rZ1eN8TV9SHZT9bMSQXbnMuK",
  "key20": "2dqBstdDf2NQVuofBDVNDctEMniQDBqypoSDTWEjppUekkzLbYFWTSTp2i5cL7LtNiYNqjrz4xTjETBHD4Vce9wN",
  "key21": "jKMRLskjbc6ccdMnd88zhQEhaDLkyhQ67LdatQBiCjoueTvRy9Sq5g6xsgrWmCYUyf8kMnnd43sC23cDgpAH1ty",
  "key22": "275M5acj1SYpRvmcxytk223dxnZrz4hdr7duUXk5ttRtXgdocwhSDzF1rCBCg21MUwZjAnh5Q7WKGNtjzHFXnWDP",
  "key23": "kSk7oqibBLndQLpS1stk6C5xuNinPv14wxvJX8YMziCzoy8rsLdLjyBCGeUuT8AFtS2wMjVvcaE1hKHYUw8Dq6A",
  "key24": "BsEsUFkiDwxieiCWadfnkuTo6dW6p7pk8apNGp39wsmudVoUqDJRpdNmVDsdoQkfQgsvCoH5dnWXoCJgea33Hgp",
  "key25": "VQ1axtRLpbADFHKYdnBm6AHqpbJNCPcaBNYAC1a4DwrjKmcZsx9ZbS75tdYuoyNC5rs2LXHUDtvvrj2HpTNE8qq",
  "key26": "b1EzQybuMzQZ6MYnmqjqJNAgC95FoqB3qyCKPCc8jXpeT3pDnthPucnVZtuyVjjT8shF6EZv95qLzUHxJLutqCk"
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

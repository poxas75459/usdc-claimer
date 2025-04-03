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
    "4njqYkpCFozCre4chv39vPfzKWhX4KYy7Lngpc9XtKoWuQa4e6sNkGTSUKxiDN9ow11g3TFBLerZpRw473vgzCbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B7YzKWafj6iDnYCwrSZkcn3YVC1xraBNDMZJqE4qugYRyrPNMoPAFMxW5VPrWezfRur5wSrrKrsxPRfgi9fsUhH",
  "key1": "3w1zRzUm3h2KZpZQj4uckXBjUYtmaFfS9hTgWY4pNu7qXdNB2ohabN85bKvyYhwccmXRpTbmAr5ryX63cnpWWDJA",
  "key2": "5q3SmNs9eS7qEobBMM2Hpi8S4gUX2B2dqXrCBCG4HCQpcJ2hTt5WynhkQwAEWyKMPfGnW1C5DograypYnaQJ1GW4",
  "key3": "5bAJETQFbu42auStNZ2SjspwC7xY3sZBvmYPbT3786PXYgD2EV2NMnP9QxkZHzPjrixLbqyneVCp89xbcqMDuBTd",
  "key4": "9iTaDiDyPE98JegiGR23zgpytfm5ZExv5KTAc1bUMTr55EsJwpTTHre8VgS95dWr7tfiMAFH281Rp7titjL1Yc3",
  "key5": "2zMqUwdS1YTGvrtY94pADJ5bozDMydqpFyZg2sb4yuzru5QeFMK8CKMBGcaaK5FSxYiBxk5Qy2TwGptM7ZpUCHZp",
  "key6": "FsteHvSAWATfL37eByNKjwF46n5Tfs3ww5sVYcUcUc9XL487oksdexqL2sV8P7Gr4GyvdtAdeDbcFAC1jbGxi5B",
  "key7": "26H4jM8iGnXsqLetWDKiQyvwNL5odCvL5Homr3PC2wy9gA8gC4xAwswwDfmZzjVh7cAA2tbUbFQjxRC2dZfi7enC",
  "key8": "4pGpfzfmGSasKkMWxQVmxqHtnDyzPFxe5sD4tNrmfvM8akXRF4DxZaJnNzpcaroqnrYdwDyKpDJYmaDWoN5VK282",
  "key9": "21wbvnxTjwVEp7xcQJoxi6srZSNPway6MYJfQ4wXgNoZ7KPTZsxdYgLE26bcd9Fj7pKLZF1yeSo7GMZEKPtRcish",
  "key10": "QTkYD7ZRSQryHuqwF9KT1gCrZSpyCVmwfWnzVdvhyEwGCEfwBf1ojdW6apyiu5XPUL6pDWgTpPAtE8yPXyLBPoV",
  "key11": "3YWRdhBP25NTsdhYTmsYoETh15uiEQ5LctaMRHViGiva8vSqgkoRBBXEy7AjZ48isBAHPDQx4mihEouUt6QQMr6v",
  "key12": "3zSywL6mnJYKkntNranHfVf7sRXanGDfPBnP3ydwUECpxhSTp6yYCoePV72gntALpnXcyeP7Hq2p3yyo2z6Lobx1",
  "key13": "33fiLM1AeWF8JkTXjN4Rvj5b93NYtbuRjEeBbZQJxeMXAxK7bPQS4tKEuFJHfB3sxtb17Tx2AhSNo56h9e8ST8DQ",
  "key14": "4KaNeExFp7bPYPYnmhKaDkhMUH2HosWeaa8HHUyg8n57mnHfhSYfKnT76wWyGj83UmY9ufuoxqkNp2tSsG2AC6Vr",
  "key15": "2g4uoKPJQjxghAFYbJkpGcdVtEXEyDine2u1HsYX4mu4WU2tR1M64oCDCM9nxe39MdRGkpQkKhEm7aoJX5okKdFL",
  "key16": "2fBPSEs3RCJLReJtiYQzW89s2sWqzTYJ2tdNqnPXPpFRmiFVk2zMRDcMwLaahgh94HXNnYPiConm7TLzHsK4WH99",
  "key17": "378ttnbFCY7iheaE1ffE1q5APJXYHhSXbn2FbrJhygjqydXQ718KyDTFPZZ8eKkEqf3RZdXctmxpjBydtFBeSMRt",
  "key18": "52V9Yo12iKTbx4zhjZosGPjbz9HcjoK2nJQKYsTEzLhxfYTuEcteMxW1AHdxZPFt2jEz5y69FuqiFx4ZDybJoicN",
  "key19": "3Tn4wgBt8EeFH7QWT4k5YY2yPeDghAY6VPz2zZwLonxHLhqK2m7z7fdgVcqB46P9GrdS6zaxL9SoREowR5YBMasG",
  "key20": "4r3eVFKtN1VV1EH1Z3p9xR1dRn6exKUSX4ngkGtskFbZ9hQXq758WhtACo7xV3DksU7FGUkryCwN8RFZECfNjU1W",
  "key21": "5xCaL5et72TTtjJabqp6vuGP7dZEwL6J4xDAGChUFUbqT5DhjsjUxcXFrYFCumtqa7z6T8hEZ3a7MCiQCPFCMLLx",
  "key22": "5x8aFCMpg58Q6ZxA7iSZHTvRXYctsjn6bMsENwdiMf94iTq9utgYFfdPhpW4DMySGN8YvaTSHCf4X6J5siDzQ9rS",
  "key23": "4bPPum8tboDGsVwL45NqVgnWWoe6sAMNGYXjtmXStUNsx26b6vHTA6JpfiVdpN6c1G4fyxKvMJxK2tvrSvQv5QRU",
  "key24": "5vybTWW8AwNjLAZWK2TYZqqJYo1trHT3WPRXtG4rtjHQWwyDETdAH6v6mvBxFWQutn6kwpHSMwZp8v4L9r7Bpf2i",
  "key25": "67YuParMpHzYkNxtCVTvywmLsDNYgFhgtkwfYJ3Bm5RaCBGusV17idnnVuYNZBS3qtyTgsabotEEEnscKRbLA8w3"
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

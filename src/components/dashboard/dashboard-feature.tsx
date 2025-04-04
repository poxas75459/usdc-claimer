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
    "3WK1StpnWhAspPfVfp3UrhuzZAc85ogGeMyLpFTLAiWRrwGsGjJGb45fjWQ3fDSQCudEH4ut9UtvTuqwTwF9pNZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xxy7Pr1h7nuZxCMyJAqduPoW1kXhWRRShvFnQ5iBENQA9bTFHjHPAbuhoB6R43AzEx71fEz1DAU5Q9B9m8WecTv",
  "key1": "EqzV47MZZHgUp6PoP37tYB618b2JzKEJALoXhVLkAKnqkcWL3LwWJ8vGugXK3Zk44mzr94BxkDjrQv6PZ3YuAVk",
  "key2": "3QZeY8F1FzwHNj9iLUNB2A7UY5hB8CceqjcGefReZdh7E1DqydGCyjEP5FvEypnMrEV1haDvDDYxJc5w8k3To2c8",
  "key3": "4KZCvLCkJyhSAK6Uzzq6fbfCRFgTGjdB3qPseDAJLRTeq7Xcjq4jLbGpfDs19E4iBmEjp4KpqZL4GzLAYMjBNs2i",
  "key4": "2wKzFkHrDSGi4QsBqCzz9rMKJkk86fYdbvfBNo5STV3jNGptWriWDWysBtuxMnbTMpuF6NcvkngPF9X4ef41xc4G",
  "key5": "463qg5KGrGdRWkjqGnLBebbSV5DY9aiitn4dFe9p7wxZ5mrxA881m3kwCjPXtve7THc5iFkx8ZA6f3qjLirjodHx",
  "key6": "2FbH4uF3c6BoPh1YPV4Dce3GUcvkacK7dUBVcYuwY7W9qekazLZ1YUnGj4oF5nzjQWoWGLufD5BE1nZhZRNaUuw4",
  "key7": "3Yr6SeEC3GUp9PSanfsVbhGUSKjPnQdyGCV1zJ6XZ9cVySGzM8GxEQfRox8J1foY8NvPTuW24WSotDQYKMLMBWCe",
  "key8": "4HEqUdQ58y3vP1tZb49NP2jdwe7Sd1V4UcTthbjLuBnbka47q99WJ3jnmc71LDQDMEzHandnfJcJZz3HFxkd8gnr",
  "key9": "365kFUAP1rfHwnjirEBL9EoLUQYrtMPPrHcPv6GWJRfeRwezTRKPMhnCfkVr34pMLYVvuZPEnnXSiPciEPVwvocK",
  "key10": "28QdCj1E2xct6kuj4U4kDJpZBJnzVd3fi1XxowWtQkQm7kgsG3faNiW6CAVaJySrh4CfWJStdBMptJTXi6vWr2Fh",
  "key11": "4NVUDSGBwx6nfnaSKQHj9SeHoVEkTmdo92aDHko84aCZsWfyrkRM2SaKqvymzSusDHJJkyxt8bXXsxLZMB4hixLq",
  "key12": "5H1ZGZFByEeXUoLaNbWxooUQopeNjWzHMUFRNfdGiqxxhQ1d3sEpQtTgrBGB2KauPRdRXQ517dxvmiJTWirkwQu",
  "key13": "2bBym1ktZL3MLDJCzb3nmiSNRwULu4CZ6PdHkLxGzDnauQUJqYWS3p3K8uojpLjaNQpFdjxKvHiDa2F6rFNXCigz",
  "key14": "2BnyKp1iBjwsLrLVMtmW3vMXpFg1C6pAm99WSeAZAHbufvG7GRw2R3qgKZcg6pCmmE3q4AJ4gBKY2ei17ETTP21n",
  "key15": "HBHfmFgMRRigZMYiXuZ2yBELoMEtUHhBn99SNeBX5TyFpZaBTgmTdb4WqMoRf1iz4RhcZPUpMnV7Y5fsAyJxhM5",
  "key16": "3Ed3oadZ6GtaWyYFhwQuRi78PvrUUDpXfcbh1kWFyEMtjF1mdawQVRXeffyBo1SuM85RbgLRTYUq7pxD67gh82mZ",
  "key17": "4NUtcqKUrJphTaMsSA9mgANZMXAcq5bgTGKjKgSePQprsqQaLq3Tq7zVd8unNVMCKGXTtXN7wYn2ddy56v2WRes9",
  "key18": "qitnP4UcGyvxJXrz7GfZibYqN3g2LJk4VBi8xcFrNjCFqX6uvB2vUFebobfvusMAkGaiPah9kbhSw4zpXGhsbsz",
  "key19": "WUfu6EMDV38tM2aBhpy8GiJUACzfnYx6vkySZrPKvcmT28sWKTSypUu3xA7xDEh8PykiUKPuyGy9UtC8d2pdPSE",
  "key20": "dqpefq8vEKoPQJBryEeAp8bLzNoenDTfcvGaUCbFx1qyKwaxL7g2bfpXH2MTYn7qvUfJpGSYQGBwjR9ss8y8Q3X",
  "key21": "3jVhXpRyysXKJgySoKNPQ9wxRbVTgU6gjXWstu1m9f1AHqSnLc8n2cVX6RBPMTn4xNcB3qFDAx1TG7SQz3KYfSnZ",
  "key22": "5bFrA2j4d52dLXbmrqAyVo5qB1aMWBof9EtrL2emKy59sYug5sMGfVh2AnUdkJcaLW7esvaF96cGbwpuaeuLzXG7",
  "key23": "QW3Cxpszt5YdiTB4KksK1nMejp7g8Gzt4SaqQnUFGh2doBBUrQnnkaRZAGYMH5BiRjcPWuLrp8aUkWsstGKMrpr",
  "key24": "2KFAgdVLVF6WeKoTREG2TrGseT3sY8rZgFnsZEMvbx7C4ggUFX1tkPvBmSwHwj9f3ghdAsNsdXbDBQuwD8f97i3y",
  "key25": "s7ATarsMgVnVdscHhEpAaC1GHrBtBNsHrkt9dai6cVj12o93TjJsdun8h3e1fiQd56rsp3ypqTNuEAT6ensGBc1",
  "key26": "vrm8zUFgL3VVFAqwdLsmjxhPiHt4LqiCS64r7p8KfRHtYUAWx8SXLYwCyp51KUkg18v9ANJhkzJMZacouzuyqYS",
  "key27": "4TyCWVj2z2T9xjsoci7Gg3nWWQhi3LP9FijjBsAo1ZgS7MvX1cLbmkpLT5AW5Doo5qvSXoD8NYf21NN2r8mjXmmN",
  "key28": "4Ev5fvktwNY9ZFEjevrpZG1hwkSmRYQwQH2xjt6A8NEi2ArkSDzyFSF8dAxAkFGoHJVNfKDH56uB1EMPVR8kB8WZ",
  "key29": "QceNoPgr3YXMLa3fAV8pxKatDxgLKHBzPJANY1tDkDxYDFJ1jeM4yEz26J8vfvK9mLBZBBxinwYb9VTavEbJovv",
  "key30": "W99g261XT3xmt5bm7TcFbhEcqpFnu2jsaBrZK2zJunjcxoWP4mbNAqJy4hbNkCXnxNEYQ6njFKkVsT6KYBNq9Dt",
  "key31": "4BR6SRXa7G5uF7CgcwsHFKb4yCK3ExHy8p36vQxW8L6zP3WWf7sooc3CVkqf4Br9eHZtEnFLCrkju5y1FZNsd9yi",
  "key32": "53TceR2iDufZVbsetuG3hBSpsFkTPkDq3epe8hGAD9gwSKPE88hG8ZjZEqh4UxStk3Bep6SuSknPvcso7K34g3Kh",
  "key33": "3j1KdHFJYaFkaEi45trm55n61yQu787yPFWPZV1nqx63BbXbP8ncasDxTtMXjCRzdYBs6hocE9cnQJ9LzafXBwaL",
  "key34": "5GzC42o315tCjTFduUn6vRSaAnR9HQudJ1uQ1e6W3YRSx6rM883YAX4PgrctFivTpaKYEeZjGbugGA8qYUCHSX6T",
  "key35": "5ku8hE6EJj1GBSmzDcUFcWafxpWKmSpvHHzAmoxFVtezDFsXKDWEctT6pQBfgDnw5fQuwpMjKJ8rFG2hM9ikAgz1",
  "key36": "2CRSmPV8yyveeYbmQQpKJ6Yt1Q3SDgDP9bFUMwGWzejzZeraMKR6u2pi7cxJXo2PqGJTmE73UxFgtkavHZ2yGaBH",
  "key37": "4hjdCHPEkr9W7B1WtefdG8623V8mRvL23J28aegGNUnpaLq5LwrvgzgYDCLdCxhUkA3QsPU4ZDaDe6dkUMHcvmgL",
  "key38": "3DBi1bbbbXB4VgYe43iADPGz4X4yGtHudCiErPkLxXe71aM2konAfcxq5nPM3EaaPCyb3MW6W5gVQ1R9VF3eFY3U",
  "key39": "2dgLdnn4E2gF66yJbZGJixvDSQis4GYYyXym9nuKXR4XWyt1sRzKnAYwzT6BjH9aHtjepcFVcYWKNB2q45D1zt4V",
  "key40": "xG6f6DTohE8g7ZEXGbb49ZXacjNHUw6a41N6xZ9QBVgDk68DfVQTon8BieGiNmisvBozR2AAYSHuGHuGfgiHKTd",
  "key41": "3jW2n8ajqAja9UkoQuwQSvUoskS7AUHfdr2aMW8fzrmu4mKCma9ek5riAcUrPUs16qX2uZ2ApdcDodaKBbDES3EW"
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

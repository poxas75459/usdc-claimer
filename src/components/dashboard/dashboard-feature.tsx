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
    "59ZEYegedW47JciysH7VJaaBWxgqCT6n9KhFG8LDkWqUc2LsQsVsgut1NNK8hJn24Hh8bacdy9Xqy3HxR6asuJFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LpEz1LDdYKMKc2m8d2KyTwgqsHUUc3r5k4wyaqwqMfKqayMbnArCyoWmeE1abXZHTCKX4X2P59w93xAwUBH7GdL",
  "key1": "45VD6guZ169s5bKuFeTH1EZvwWDTr75Wyq25tyyY849UGnEbzF4dgUuQiCjJZevLVkG1Nqy5vufZmF3WB62ZjDKq",
  "key2": "ztdXkdxF1BEefxZeW4jPpwyTKhCE2yPSHTVM9WwAZKS3EPLLRzQrww5M46pvNJseXxPPx4ndn3fAo5LRTEazd4D",
  "key3": "56gQF99XPA45oQi24G95APRPhQE3p4Vxne46onC3PgKaC9YbD8RatWhU386CfU3uUVg8c3hLP6UHjE6BoLvVtqBV",
  "key4": "9kbr88pVXLd3nV8L9HKKaqRBbQ8fHY5o2PPXefRwLs5pkaBcgLssHzYGorfaZU8tCHV7duhyB89i7BrEwyNGYFz",
  "key5": "3c6TUjaGpbf2C1moNvj6gLDiSajhJPgEf8pfcC3JB1Ch3qsRs29gfweRoLLZv7cnBp83jPSJUJaiPiJ2pnM3Lr1x",
  "key6": "JH8Y6PTYBz56CBDexg71tNg7XfHSeMCaLDmasy9s3aSkBX2DLjH9EXDKUkRyTDtMAD1C3ji9Vmxi2CSeo7tUewh",
  "key7": "3R6ea3dK4BqqZbgFiQyRA3utLdxgZ38P2HHWRwfNbdRrK42sjezogj36X6RbZAbS6J3abzsHapMzdz6fjvwy2Qr1",
  "key8": "4XdaRUYSBak78QrFkvVF3aF93QfQ3PCtx4uwTjxFsAU6Zd7sKP3mEEZGmmHPj3XHbSPG3vTnzrca15nBhwFcCeRr",
  "key9": "3KWDBisZsFMTokuEP1AVEbFymMXVPD24mX8LHUuxrfRXhMrnWkRfvjUosJgXoDxYTte8gTF83zChBTqhAk5eoPZj",
  "key10": "49FodVSS1LsefUA69QKQysW5Rzs2aPLm8VTC3rUjn6UsUYmueBCebwFzRBMrWSbUDYZBEh4oxHfsxRNeM8qxisM9",
  "key11": "5J7Aqbs8K3Qq46FJLRuPDQF9MTbd8MYwk8CyiQKkWjeMMp2An8qSJwKgS7LJZmwoboLn7ZGnoSveHW4mCaV6rFTN",
  "key12": "5oxyQrA7TvHQ3uXuXSWENwH9hj1bjbfhdgVBdNhnjHuZRDNamrFecvUwrkHg6VjhLNPL6QtDBAQXnq1J8GdXFj5U",
  "key13": "22YRvDVy3y7scn1AdbfEbcPJRMHozMMFdG1sTjBnWDMrNaQd2vwwSdYb8yAp2jZWXKaADuZhrxuUSaGsHgVTqzFW",
  "key14": "26AwKXyeqGPtK19dJqcDMy7zn3vtDLiEarWJ3XqyNiaUCQASg63SH5h746ekBSBLC3r8yfZvjQYZnMdokHB2kvBJ",
  "key15": "4eiB9G1BVomABgURoEK8BFa9ymu3964fW5N2wKdTZ9muwDKnCLFv48heNNgQHPJjwaBSpaCTKThfqEjXfx9ztftK",
  "key16": "oAsvSgBx9jNguogs4TZfnN1YYvMafHhVTcNuK2E8TPo1sJA4DL8trPBh8sK6o1Cijk5vEgLvYXHTyfZFMdLaFFc",
  "key17": "aU9oS2MRqEXeqWfaF44Ws1kFcQJx6gxX7zSDQp8NwAiJWyePVYUz8N1iQenhooqLU11UuKXDwQfmA66Dt6qjiKG",
  "key18": "hkKAULd9FHr2DqJ8Fmh6WjLbizDFwdwywq7MoFHDEZbKm58iZUEkbFyvroT5ieN45Eapy7jc6seNG5VsCTyYEdG",
  "key19": "2WQpbwqi23p6zEcsMPK5Dzt5zEwVrVii7ASRNKrSMWfYPKtpRo5JqhfyqTy7kRJdN7AhMQy8C7ktea3KxCDAwCH2",
  "key20": "3vmMDuQxcXA44sLcQGfG7RLefqH5tsG34mRtbwTg9KKJaMkkEoCkAtzAtr9hqgxJwES6AbLiQYR7DZz8PmANnUhM",
  "key21": "579Hdg3gFoFbcQNoArbWYmZPhtYFvtNUo2QC8VBV646p6izvCkTASGaR2BTG6ti272dj9EmTczJJsEA5WxSA1bvA",
  "key22": "5o2A7H2tZXU6KWq1K4T38jcV344AD2BHMMrwsDGivSZBgRt4EWFegLvTKFyXiCdckX6tHyuFRAAWghM8dA6fRsTT",
  "key23": "2KWMfS4oZG8z4KwcxzLR3JCYePGxnqX2sw546dC5FpKYMeECyYeiabGDXaSCSS4Z65CBgsLXskHRxvatX9qzaRZi",
  "key24": "25ED3vT1bU3cwHY5YDwHbnFyZrDq2ftJGpJEkNfBuvZqGoWhjv4nqjgmvcfCjAMKsPZZMddKz3Wzv7UT1ZdE28NE",
  "key25": "4E4HFBuRkwzXSXP72KA2b5o1U7WtQ9k1FLPjh2gnJJ7DdeHLJXRcSQU1qu22wiz1KXDvhMcupqyDzUDgWmENTcnS",
  "key26": "2eTiufKAW2WyUP7DJZWqjMTbzH5tkD3xevydf6PUZXEZr3hRPMF9nmV6ChFW7FJZqW5ikYmBvHEjukxrRiJqvLRf",
  "key27": "zEERSPrUa5Mq4Mdm4EnR9UdvsmdZucQpaQHkKqgUBoFHjwWSoAukif1t2vBtvPr9qm8ruWT94YtMYDTjdH9xtXh",
  "key28": "4ak9R9QQcQVbX6mzbsEpbRh2EkQdzZ1pYDLceSPy8VgW4hZasn3mtXStqi7aEDjouG7daYcN5UFACezoe8SJE5a3",
  "key29": "2cc6GCobttffhoGFdNtaGzKNjxRwB5bGE1LGXGsfCM6MZzmckDHenRNVb11M2Yr8vtx3qydasr9fvaLEUzTUGPBk",
  "key30": "53ANzocjSmyfPphh9fPF57rTNDTMrXt8RN34PZ4cDuyJ4fhYtKMXST77t6QdWLZNyx4ZPwRTJe9gtCt6EjGdm9aD",
  "key31": "5rF3AJ22Nu8ZnMWgexrQoLtBQbn7a1PpWG7LmctRceVXcSg2HnocvNxPNGfyyLv7t85fHZAq65k4iwVhiPgNutKt",
  "key32": "gP9Jf1oVid26E7tezxQA1TEmxBF7r5qpR3ZJavmB7dTFtS6C1xEMQcXXiMQtBWp5LnDVREraaEkDYx1gLV4uTAf",
  "key33": "2rPFAGcNVBNxYzkpgxPnip6nNWvoWt1PcYsUzu7JbdcgbfMAT8h8C3dHfVFLqG4Vaut9ae2FjNRs6aW9zstgGXb1",
  "key34": "3QYb2WQDGwfm96QzhWpJXVHUuUnHRyX8LUwtRdWwYiDhuA3mCux8mfEJKzGb4jEVudmrEBqnmDxGjS8wVGBEPtyb",
  "key35": "4QgPxKWmph5J39sfJCTHRQ95cN2mvPS4rwThx2tqoNgokvoBU91UJMXePAf2ovSGZzK6PbjEtMsqXJMzBBwjdh2F",
  "key36": "3YTXY61saJXVwirNwrqqB1KLLJRqVAN5mbNpQvBAuigJgkBzc5ddPo7F4wWByeiV78bzrANwU6kesg3zBz8K5Df5",
  "key37": "22BpZLsueLMdU7T2Cn8cRm4AYQHKe4Q1DehrBZYoYNLJG3eWs5XxiuSbejWQDGDir7ZEQLff2sNjAEycKwsNdg1R",
  "key38": "5drDo7xAVwkEEszRdyX8kgNEbTs6arMB1BfJX71hvxdLJR9PxKAjHo9fAmU8hKZgYRYUZ7VDaZzSjMga5DcxU5r7"
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

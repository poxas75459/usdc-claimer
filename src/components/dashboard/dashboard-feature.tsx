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
    "5KnHCAJp296YdaBYFLCs4wKVXicVNu6HxTngrYYVG583WJehJcZj9Jq2CkdspyF88deoPeQg3XzFpyCjMRPrTego"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfA9zKkqcU99hLipXUXqcseoxijGe67YZ13Xo8n4qUFPD6dAR7rQp3dTKxVEszGeMJES8zZAMDJBs82Wb6y78Nq",
  "key1": "M7QwTxAv2xp2ux6jd8R1AV6kfi8sU4p7YFYjL2zTbRqNTs2UeVFHh6e2kbKMNCk6Bj1vGaQ1A3hWiLWLQ932iWk",
  "key2": "5AiYAL4zrwgqByDZzWay86QCUeTAmojwiKtwmSy2zKvHyzxPV1v5atbkYCqMMWxs2qRAxjVbfHVJT49EiC7F64B7",
  "key3": "3sonGWRawk3aWuZhMaKSeF3WkTBDsxqxWvuyKqZWpLuJ4CTnuVie3mLQm6gTED6hXufUy6kHFM6GoJe2GPgqqwX9",
  "key4": "2puxxyHHKj6WZX9HtTkZbJ58YuWrLPHCKdPxGPJrA2zcJVeejEzZ4qWFN3CS7JFRLr1i3ZG9hf9Rx4EM716rkxVX",
  "key5": "4vmbST539JtRTdATniE7L2UK6LrhrddcX3z1Fcsa2SnvgGiZ3boP9q6Xs3ERaoSR8N9Mo8W9yyELHxyKHukKQPSA",
  "key6": "buD3Hxq1h5gKftYGJWHpye71EjHr9saHkNQBjH1C3axHfEFJTzahL51BBe2U6WwJCLN62wE9N6LwdrTRWEiwL6d",
  "key7": "3CuCMaH7zQK7xqje7movJuNCEbr9nYUCfJWDXppofWbswUrifjbE36fHaU4yPJfqbrp3dhHeyDRXyZ3BgPiQJrDy",
  "key8": "5n3Py8HUw2qtzadT2QDFt7NQAVAGzkkTbo9V4LUKYcwepvoeGsNxhGLLzoCAyoNuqzDGxQH2hTskJCNvUjUeChVq",
  "key9": "2RWJpj4MxkJbT6YgbhaC1T21ZiPDur6qwZ5T48VLWo2dsY948RyVFLPGX1M43GgsgLDnAujvkjampuwoAyXmTfAq",
  "key10": "4n55G67eUzvJHowNcvYVuyTaGkzbonNEpQmp8sZgtsjA1oFy4RsQs8dqMP8z551xfyeQyF2Kn3rqvZa9AqfDmFjV",
  "key11": "3fDLUzTmcPP4cR7togCT6ejzzkaBD32xTQT57W9cCrtAddsBTW51HuosshLaLkwrLzDDjucAJAU5z7TzVYdbs51F",
  "key12": "4DEDAWBM8gWQk2zoMhPCtSB7znDWofmt7rub4d3vdVswYxsToBpKjxGs7pvmdsrhoubRa9qDd1mQMJFYo7bQydhv",
  "key13": "4wrVAWY25eE5WZY43R2CGNc3aC4YDLU5TVyRCvobaSBh8vg3koRswVDhStdwMVnFERPhEBRMgDwM825zyZxgaD9C",
  "key14": "4fRKQUsqxArNq9kJyB3sEgMZuvbfB5epTVbMLvM3RYijYMVWU8FzsBSnuGuYAp1zdqK3GTYZVWjcKZFNZ1eQTSvQ",
  "key15": "38iAaNWTR8gvqG4e8RsUEHKvbSQgcrm7eVG31SSp9GxwMUD8CRjUVurt8AcF1Txth32YMLjcK85ZEMBstj6djoXt",
  "key16": "3P4XRNjabvV1ugnLjuqEjwLtdnN4Y6pdYauaDJbBeUAFDB49xfDREtmpeYQPA1SEdG9gCqV4KWCHMwZjnbyAQe1U",
  "key17": "4eArfva8d8NUMoce98nVDKgNExuCAHk4pCAAU7xAd7fgco8PxAfYjNC5gdNCUdD6yWzdYcGbUuJAaSWmwWNRkJp6",
  "key18": "2rQCVdKBSK73fvHCkN9NLuk2ocS6ccXhcnfJvcb2X2dU7R5uN2Hz9L5pHxyXFbGJQWeEbLXDgbrywaSQmLuaFb5b",
  "key19": "4eHfCPwvgbktSzqG1Bncfc5Z9aVrUVVgDotp2VtR3WN7MMAsXHB6wfuVG6vrkPuQd6Kk7SB4g1pzhZtf9CZPm1Ep",
  "key20": "4fdQF3fgw2J6ZDNRcPitEpu3qeczzBZEhYHMadJrT2hir6nBS8uNAAfVSP7Le5u77U2oZf5TYrFppJhWzcHRgTdA",
  "key21": "2QeGTnqs9qWuSWid2MDYB3fBuY98dLwHafd53QArmbLJCVY628P5baDm5ASGTTD9WFcsZTp8qvx2D44cJANAim2t",
  "key22": "45UdmZRbknoKhPAnYmwcUfhxmG68xZnGguPWddpFtWczi7udJ4W1n4PVX9amSrQZ2vmnpqJaGCFrscUQr2kGJjDg",
  "key23": "2BqiXHBuKy5MDLwbkjn8w23hLrG47m13QTvJDnLryT5Hc1BCTc4gCzwYf9ZKtyE3WgnEEXT8DUFDAdcMRHaSX6fU",
  "key24": "DgTKJvSdUgCQZ7MMUtbqmXySZEgA9DBtdKuQAmmDsoBX6WLwUG9aGtwGSG1jqExrFSPvQ8b8FAbbWzEwVeMzSx1",
  "key25": "2v7YWiWTk3MMyQc4aZ173uadUwHpQBy4qLGijCAoUFTY3G3dpe88sVrMmHcrmBCjy2cSYenH1czGFgtFRGASAqMo",
  "key26": "5NfxoqXF5752Cp7T2cf1PK5hm1UBVWSWWCLVv2L8LgKsbyRiN61MqxAKuyVGQW1YddbUwy94e4M3aHSegvPgDP7t",
  "key27": "33A13qKs2RUwYKiX2jkV155Npk3HaS1CvY1mDsW7ti4iPBEfSwbrwzbWHxmRMLMUx1JWSpuDVET3kHkfCPwELjUR",
  "key28": "3Qr2qLFpGF6hXTB5AR4KdqSKfTwTZdVDEnhiCWKLYDtbKj1vkYuzmwxgFKW7fWLTMgVhpQw9qSUYfVgjSa3yuSu7",
  "key29": "2iY4a8nZNYds8pqsJzx5wwpoLFkhWuKU8QE9HzpKP3B4wShegBen47ziwhgNBwrpDvGNeR8wE3WvsnJKnS7zP7N5",
  "key30": "2VZiQ91SSfsy3si3DwTUbCJpVZppwi6g7K6Yi9zeFCZzAEFHV4S1RQ2aJpiZdrQW8wuTH68FGwD8rQQpY64Evknq",
  "key31": "22392Ji5Y8nUjDLVqbCLgp41Y1immd2gCCZuhuj65WjXD76Phhj1qiWXwonDSCYBmxEpBa5VM7d6Ui5n6zCPEkTk",
  "key32": "4hUkFnZygdfsWi2jADTUwbhhNc9UXzP6xcGoJyrbmaExEfVpQwJumcqrWC9ZBysRUYxaQzyv19LPwP2pcTqmdbj6",
  "key33": "3DaL4oEPFyJmuiKqvSW87659FrFqdS2goe3g3ksBsbC7zWGgobnSYdCmxEYS98bKjhARiPub9HPequXDpVUpkBdq",
  "key34": "CpTXQRoPxvL37FRij1nD5GvYqv2kgBCfbnRAWyLWS3DPkKAa4EMjcDmzLwf5kSwkDJ7AjS66frGj5SKU5rwBmps"
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

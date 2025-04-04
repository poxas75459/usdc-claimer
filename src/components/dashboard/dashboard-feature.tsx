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
    "5NXQ5Reo2ijbGGiJCFU59Pe9WdjuWqJwh5Ynh5hwRw2RRiTHievmvuvwnqzx7PKiRP4mDJX7dKkVgoUxVQ3sZ6Yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Khtaxbe3zA9NQHDBBPUexHAuTzXSuzELpstzvmNhpaE6QFb5shqiTLcm71bweNtw5W1ZB2fZkYEgwStHKLTi572",
  "key1": "4FDxHDupbEk7VTyNsr1yvGLEnV4naW4xUr3M16fuT1KUH5zAK92uqnCy4y1g6k1W2MDdZsKG68jf8LgraHAYFK3A",
  "key2": "4h192ZzxYGn8j3skbFnnQCgv4EYdUJh3rqpNuJs9W1eMkSgpGxAJdoLxGQap71jSg5x2UVM6nnZEjmRPtNGAwVgS",
  "key3": "2jQzi17vg33VNHZXQcuSYD3Qu1BpbV2NeeBHPFnY4duiLFdhyrmgTSDMVQkH7EkU2XC46efNnB46J7hUVnPV5RJa",
  "key4": "51HizB61o57rfNSbMXxARc1ThauQt3RSrNJmJRY22w89Cw6qrTWEHHu1Spe1vRZBwzZXkeo7EzfUs3teQEJwQJTr",
  "key5": "5HtP6UCQTaxNQHp3jmcCsieZgBaKoqikkA13hX3GpkKAoN6CWnco9VGjuHNjNRn8iZmKGPqgJ8v6YCNp97dW4TGi",
  "key6": "2jV7GXeC3xFSMXp2ha7ZuwjfE7JbzQDouM7DnPUxTHQ9g3m4ZSkS9uZt1EHuAoyK5XQcaDaEsJcZW6N9DCLPzDkK",
  "key7": "xHuB3K5XxPmiyDEmhsx8ZBR7LDFJpKkmt3X3S4HXnJSQV3ZyUTKaoEn6AiLK1LjWPcjtZVqFyQSERr9uRsgSY56",
  "key8": "5XePtpzA3PKDE7A7tCST5jxRofLq4Fq3EJXX8oZssGoQcKG3kHfDC29kdTWKkefBgwqDe1kDXQJpbBkgyUJqQ88U",
  "key9": "LsKinGodt23B2BYntqU2Cvp8fo226imsManKAwpotXtDpZHAbkv4wKuxxZKMR8QdhTNAjXGEvvj5TNREzui2Aed",
  "key10": "5QwwVQuF99FJh9JHEMeNzPB72vDxZtQF5gcLQtv5tW24LgkK6uBfMkbMM3Qa8HR2Q59xV5X8QDjCeUdJmJbBqJYN",
  "key11": "4Dv2JJLpVUB315cR1P8Due2692zk9EUiqZYi5T8adVZ9u3fetjR1mE9nKEdLSMsmtrty21jQNx1fopHEzqnPMaxF",
  "key12": "5BSN49BwRxqjZGYdh21z4sWqbnGgHdGRB4rCv7wSzeMyR5DshoT7dwtHJA5joUJhPPwCDkG39EPEaBWwm9nDwxaD",
  "key13": "3NQHSAVRgtu9v166mu71bReb1CrPqYuEqq7W25KJjvNaDFEWnqZodKaKRLYFt8a3exinj3NusHm4gaq2Sr9vPULg",
  "key14": "59DiwzZFh7gWTftbu7vHU4ZBxoPMd46xVEe5iqEQdG3uUV4RB54mZ86vNz3s13iJvXWAKRE3QsbyLy6ptcA3g2cc",
  "key15": "4eNnAqcsYng6ZV9RnFphW6MuizbWpyHc9oENQShQFGKxNUFUJPQSRNzy6Ztd7nZGrgqfpKNWxouobDc6QzEE12S7",
  "key16": "2RXq3NKAXMi3RqD27RjerTWeQqLGAFQusNgjw9nVztRBn4aktDXXhggiLGJjDhguyk8ebMa8kPP3sk6Vr9UXenDf",
  "key17": "4WDJNR6E2ZhorSXJbAmEKcUR23Ex2n5Y9nhJSoRqkzowfzfbhzcpGCHRLCsLmXBrfiCVvytGcC4i9URaR9EcXZ6a",
  "key18": "BNaN69Em8wsaqLvRecSzwYgTLDqYAx7YLxVFnhzCdCCairjzofptXPdWhA6ekoiDvMtzbpRVtoTkJ5Jv89zyC23",
  "key19": "4M3rWgcXY9Sw9BZGfo9mYcSLvSVGsRnyYMpjLtedqjSiGq6SDegVGBUnwSYndhVtRUaGMwn52cujbVd3Xk2it8Tx",
  "key20": "4kkPRavxEnHX87sQ4PVsTvy7pBrXjgFLPSM1zmaJd7tV3pfN8hL6MpaateBxPpGt8a9qVAZomRtZiKoVqAPmNR2F",
  "key21": "5u945dXgZGNmpP7fzqMteNBR1QtxgH5QM9ddi8BNykxNzetR9BCNrDxsUpvJH11uuViewxWJvotUsEs6vSrWfFbG",
  "key22": "3hYxJh3qhocDwwL9B5oY569qKarTVS8YM9SWeX26nrFVCmqadSXRiZkY2FkTCqdMbrkBYxi2B22jfmFhP1dJifuJ",
  "key23": "33EBcdbjHaDm7uNPDybLu1GwPJzhzpSf48RqAbu4bQd3Kw58PfzvkviJoPe8JBHHA9oF8JESto966zS841Ju7owh",
  "key24": "3ApRvLNzhvtfGhK5o83vdTPXAEhPTHtcSpWUGZ5Wo96SEDcwHJ9QpgNdoU7UV5m2kSihhgv9XNwx9gmBDyKZ39pu",
  "key25": "35Zs6sEutafxvPfaBFLkTfkwVGRYvAfLiZSVzK7NHrL9dESad1XiotLobVBFyUeaBS1s4iGKGFM96cZHwBMNnuJg",
  "key26": "dtc64xsc3JrD8gHFYgxGB32zPYB6n4Uirgc2DVRRN669AFfyEV1EmPLkaG8mqsCNCyrDa5a2btvkARLKvxDEmKj",
  "key27": "2xq5YoiMm1VxnNXQjgbBU4ZPCAm8mCyFn83pGuCfS2x7wLLV5ZeGaqudwbCcYnt71aK7Ke28wc9EGdy1dPeb79E4",
  "key28": "2CRuhrZohZVd6Sourz8oYpsFPEdCaiGEd3SZuDwAE2c5ZQ7asG1eRfBUwjns7yA5bb7khSRNinZnUR5gBhNsFPXW",
  "key29": "9rcAMpCdTVqf2oJUsEg7JC1fXasyzH5QjuWExcAw3q6zDdPAs6juWru861RpDThJ3zs814g3o7po3kccBdKfbb9",
  "key30": "5tjVhvWAq4MmKaiq4oCAT2HVsYhErXeUKHMLi8yzaEQuv5RpVxGdMZkHQpqGYSxhb2YuHVg5NDoYVxrz1nG1MFEt",
  "key31": "rxw5JPFYhkgFTxncL6Bn6XMTykibGAkrDoEwUJznrFEyQY1xEgHWu5SkCPPT7X9MvrUpAtS86g8GAX12tvTxViw",
  "key32": "4Av4jkgx8XyadDyN6fEHbdm6HKtm1QhmAw37E7JTtr3jtLhzrHSiUjrff8juyqQkhZqoP5rYh9MUqvKbxDYnVQN2",
  "key33": "2a8QW2f3i8SVMtfoubDLwpe5VcKWxiVmFnb7hsYRTmxTUSa3zbEayiC1JwWPSqX8miZgdTshwd4RC3yQg2GFDosY"
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

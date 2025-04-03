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
    "5KFfcBgGZ4VBWLuz1trXDzj1VmxxErXrrqZkwJ74ttppgks85SqgZS6kVvrCuRnxPHCyeZXNYxoExh4c6mBkbJKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rVMTw3G3KKFJWqgt1u62498VXpFMcnMeB5f8sYr82SVT2KYueuspppk1x47aFGSNgUkQyWzFoJbvFWZEFs95bZH",
  "key1": "5XzWWYHKrxtHz44jSr7wbPx4jVYxNA55iPzaZiPoxzrswDxEsZcohhk2Nkg9f6BbofD1EaQxFRLApSQ8ctS2fzrS",
  "key2": "2UnSMCvcjA7y7Md8mq6sS9LZfCFkvu6BDDi7rQuQSofsq4kPWDFnd2XtCLcAiS7EoxRsNEhQTP7CDaosRv5MK2f7",
  "key3": "5yXnxTqKXLePixY9gjuPzB3hQ1zjHSWmFJnvkry6VR3v8wpvDo99wGr5qGAMBsJ537qwv12xADNv77M34ciuwBav",
  "key4": "vKTe5LBUMe5d3xEtAG6taeUUHe7FMnSZXKqPcXvDvK4zq2oSGzYXW6VBEyZ3BU4jsPXyD5DVvYFy2k1eUDfeNqx",
  "key5": "5MUYyeg93vNZ2eY48Wx2BoZoU42jUuh3oLDgHJ7JbxijAzWhzMQUn5PwKiiyLHF4UC7buKn6KTyWTSKn7gNc7tQu",
  "key6": "52QVYo4VQDs6o9dbwSD1LgmArfmQ1VFrSZwzFG4U34Tqjf7jMnc9pWhUVG6AWtjWKyjLRkLK2oBFp9aHus3tnHCJ",
  "key7": "367iirXYVkRRQreD2nCZvM6YNV6v8FGXebvjTiXAvcYsfp4tsgqPYgtxz2feQZHBkqcDuMWZSxRSD45813S4Vsrc",
  "key8": "2SusWiu1yqLZ5YgWDMhasqa5gfER6uFHpY51pC3SDXafUKc3y3CRzLyf5mREpCWous5DiqmtiBLoRyA7JPyETaXf",
  "key9": "5WKHouogtDntRkBpyZGhnBkgiLsjQSwNkGBYNpatjvnxjod1TH2Vj5dtcbLbeGdJvdaidvq7ev227tXA59Kqokjq",
  "key10": "2LpBJdYZK4qLZGz5BbZzFxB9tcE5cKJuqJie9pBK1aLj3G71U2oKBFdmbsQW8nwnYgcJfbKFKYWWALBs3Lwzzher",
  "key11": "4oeunA7vPTrWmYFtTvzvBfvVygZmFYbnNvk4R3B1xFp1Q36bJ6rnZdmHJmE2NGjv8h8kBzpZ4qVLYAQoqAEXeKUp",
  "key12": "535aAg6b2NrM4grK6r1wRxbhaTQ8JiSHJoakZwvzDtNumZPhwuLsTwT94dSGGyosWkUwmLWcraSnZvTyZenSBPXa",
  "key13": "5EeNDwpXSWc49dzHTKeZynVKQ3jEwHLdZqmeKLqCWd8tKvpNeArLPfFse4XmEmu2qYrPf9uTwNQvTzaQnt2qENvp",
  "key14": "2M7EjsYD5CjU75fRdqbv2vZvtGYNrcaxsJ1KVz5RbG9cSTTRJSpkhuhJGfoCahZ6KnJCgXqtYcuX8STrdDZpUmMn",
  "key15": "vTRxFuvaKxFgDYe2KUkh3tqWsTPKmvfavpxNvgwBoF6iYKvr7qrfgpsNNH246i4772bn6PuPiynA6jnpD3ydZdL",
  "key16": "4uzjoAWG4bk2fmZGS4RasKckgFff8pZkR6JYYg84J5G7a1UymBEpxKWaXoPFeaLN68VL65Hbtc4EzhcYSe1ekHym",
  "key17": "3VtE3Di3HvJZWm7EdsnrbtaY6u9xoqHpo54WTT1QzDEZVNFUY71f4DufuJzg64igBCKer2tRAEMshyc69uMsDZ7G",
  "key18": "3rVswi2ECvtLoZagaJFfDscWKtJjHUCpWD99izeFZ3iPLyJ4QidLwaaqnYQYBHtvzKQAAmEFM5nKDfAGErzrGoTn",
  "key19": "3sAgLuh8xotPUfADoFjzjaBsxsRt8oiBssm3FfuFbDhKKy4T6bF1XftQDgPSR8uoLwjYXWGoKxq3gi4VZ2AKM9hX",
  "key20": "6669yEUAY2y3SYEgx9EfYV6uiXKi1qax2WFqqZutMCoAUHFNR4tzsRRq5qaMSvSWNhkjQwTDnUFNEGkUAAph9Q4G",
  "key21": "Xh3eFPjRYNUXPcRrDAi4hFRVPxRPkYdHyvqFNrnYYE5DBUENevCFkfgpFtKn5z5fS5VswCjEGUxgLgwM2u2Xftf",
  "key22": "2jnQVTgkA7Cr68P7MdqzudH8h4mk3g8feBjHqG8qq7Jz9zBeQ15kPm6KLTQdzpfGP6fBC7HvwnXq5ojkgn1Dt3op",
  "key23": "4JuPR16omMhTYLzGhssEZy46dMvzohV1cc5i7sv993f8QT2xoQxb9Wbgbc5r3dYgezGbNdv9bUykBUNBHEbiiM8M",
  "key24": "2HZbQv7H6SD1ov9nc1CAM2SRSDEn1iV9QQxeNqwEBqvdHyfsCYhcPEhbiSnBq6hhwfpDTa3cqZC6tVj2sK7SNpza",
  "key25": "3xUzkYYtKbALTTRCX7ZaMD6KVWUAwtAFTSR1c5GaiDxnBEw37qSUEbWSjSxT2zxu5T7FLsKCtNHgy6ZHqvgcjRSy",
  "key26": "4jJn73CVbct8VdMVvfBdjMfMrWbvEnjhVdmufBz7hZ5BiJCXVr6XnfDp5GfmRaevD63qsub433yg4rM1XDJF989C",
  "key27": "2d6HDzeKifSymVxUSVJmwG1xMq1cJHfaKxpbi9AmxH7Tb9DYRyPeKuoyFFQivscxYiQ88GErz8KpXhnaYqhFMY5N",
  "key28": "3trcfsyTDKEUm5Aey1Zv9GzznBFuhgFQHjdLAQ5omLcywfgiC52HhBSxLW53WaoecYvdovgRFnHueQwZs2PLU7nH",
  "key29": "HVYoXEv4wNMuGpQ482eXqRQXX3jqgpD7JAkBDUynerH7gasw7P6i68b83UtJ8Jz5w66RsBDbig1RBsy7fVwXGmE",
  "key30": "HaqfRb6NA4rcgdDPSDMyUiyTYnoW1kcybKSGaBzLXoYLHWhXj5mGPtRJcS2spZxRujpMeoDvDGz4PH3WBpCWvGo",
  "key31": "4jwDZoiLwKCQEgGLBoqfr3XLFcb9JtrJ7jCydb4DM9LPnN2oC7211Vz86cbzcrkNQBN6veZpRfmK5dBG9VJs3NCU",
  "key32": "2uTNaKFxnMSzGJFTBaCAJwFgT6zjgGaet3zaFUDkQzSMWaMvWYdtMpcYDaFkXF1XZnxVYedgtnXVw4U7y4yB8ezm",
  "key33": "3dFoV4zNCCmXa6CYjq2fE3rowZuW7MDvPHjJWMYFt44FxAFfgpDvrBma1bmtg4CBygvWKKdMtvu6vJmAU6G3Z9Gt",
  "key34": "3FxcRbrpzpiBWeKh3FFe4WyRrGFEdE98HV1oyFbVVtxMUMpKvG5fiJiXBpR4uMwKchB27a9rV6t1MrQ9Vt4Bb677",
  "key35": "qrPsDENxoh9i8RUmCi964a2VxQNyhdZzNdNSN3Eq63ArvsiQ85vgqpiMDDr9Ugv2a1LXcQEqbJB9rmtyzimnMoD",
  "key36": "54FJynTFN1NjLg5f7n9BqjMfTJBrU8ufM3B79MsrZukRfcLSzwoWMg6GWkqCN6iVpkezfTqc8DVVSeYMUuSjCD52",
  "key37": "4SJmPZR7MbgDznemLiA2uJGmGrJzuCFp6sTeiVyPdjVHsifFiZ9NVyQEZezaUiVFnqp5U46wkQvJyAjd6HYfagMD",
  "key38": "62ueNgFGFjLFedmoHFf7epXcfJyLuq9CJqFdaxCih38EwVFEhVswyNJejrngRhxRK8Va9z11Zday7xHG1hbEz1ei",
  "key39": "vQt321G8J85WoVbLnSCDAGCcaGWA59BR5yYcoLC3ivr3apxAoQ4cLxY1A1d3Anagyw6hniHwcVGmnPPVXbtbKsG",
  "key40": "3viBo7f5ubBGd1zjrZnkfKcEFUAgWTehMxwTD3X2GY7Ri7XfSKJWE18e4a5gvPS5CcgH4JTesmrWPLtN7faMfMqR"
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

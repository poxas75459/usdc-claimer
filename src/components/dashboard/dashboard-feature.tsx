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
    "3hcqyAfnn29dWeRASaY8vaYCpmMu7ZTdC29PxTqDNj85vVLGeebnvLPM1sqaBg9djqutPhDXQfuzPZoBchemGr8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KhrBTkk8qvXa2tt6xqatahD65nLzq4cHhZqMLTLkH9p1pXDWeA3qhfGpp4oSVLwJSRKAoiCTNEM8CGSGRnsCw7W",
  "key1": "37YCvWsoH5FZjxQmmbbnnPhhmT3ibc4CDtaemYp8M8mxWuY4zSAmrk6Y4y8sUd7NPajN4G1AYxUmngmFPp2Wcs44",
  "key2": "5QcLG6N26Ffw3j8gdSqmDxck6Y8WJM21abVgX3Vd2vPdbfAJSZddh2GFWKQHa2i2AFJChapkmeE4DQz8FBsD7VNh",
  "key3": "5QbctqQ2uZkL9VnonXnUgrhSgzkMjGp6JijbEYgs87sg5WEgVhe9vdmysxPADFp7AZSN8KeRJAQ6fARsVFwjQEHJ",
  "key4": "5eeFD1zusohktLxWzCMnDYhF1XpYBEzejpmbs26EDcqVkqXXJptgfpUY1cAKdggnrrLpFKSKQ2VywJov47VYKbyd",
  "key5": "5yYEdKungJyhcTZwPKZ6NjdAxZnmcneZn3mMABKhgFAtDh3n6JnfWVSnGzG8byc1pKhATme86AicMYbaTPfi3nzK",
  "key6": "5ksMQ1xswLsMwsmn9UQDKx6HZos37j35AfrhyHv5eAXVnsNp3kVp2wBvSNu4bzgEcj5RrJe8zknD72xRrXbwmR24",
  "key7": "hs4bweXAmobVBeZUoFXm21mNjCVP8J3Nnh5KbSPeRjXSuwf73rEJtK7gAcdRhu9ZSyvAdMWeNjFXnda5knxSCHj",
  "key8": "5Vw3ptxk7t5acD5iGJmaL2yZyqHAX7FeBhiWg63TAFCry3sfi79wA3DvKyyep9gmRRT2KuYduNUR4zSdxTv56QDs",
  "key9": "3AD6hNRnucsVpVxTDRcGKmT2y8k8hLdtuL8BW4tKsYuf3r1RifVKmoTyxp4sRUPXh41juvRoBXoy67KnE7MDPjTd",
  "key10": "5z4Sir49TN4YdA7L7DWkAgmxUQ7kBE1Y2jbDjQkyGTY7T9M6Pn1HXii3h9huiTzxFEtzt29SrqXzxz8aiCekvLw2",
  "key11": "3D9hjgtY76vx8cYAyBC7vjneRYXmSkpDuchUSU2A3r1J63ycC53DMaPnoXcxwpXY854rP2YSfUVvmyFwSzh3Nk9D",
  "key12": "3iqp5QyBo8SFSY2osvMAdeFFz8vQ6tkX6GxjaHfhxayNXS8EvDdcYTC1Hrjb69Fezofp6Dt4PJu25ZrDpj8dfHLN",
  "key13": "54VGNFeAtwxismtH9zkWRxfVCtchqL77bcWpfGeft13cBeQcUdDvhShSSHpgc1pB4p13xs7k4Mqw7YQitWWZctrC",
  "key14": "3hyxX2pCc4be2cL4toTDLKaRoHABhTyRuN5UyGtx3xrYpHcb9KSn2j8cr214u21DyyYeW31556E2Nx7oU7oLdaco",
  "key15": "rxTmzathS75TijKGruXm3JHhzUZUCKARUYpAbK5KzYG8WPVZtG5LcmYYvrNHCfpYAiSFVwrEzBK6FQD6wtiZ6QD",
  "key16": "4dWRuigxmPwKh1PDUq9DzYuW93vCt47WaH6sTjKpx2fPRMWbevxxuz8te4J6g6554MG1zX6922QqrAZ388DRHFS2",
  "key17": "3AmiCHHumXhnxQZnTsFsF1v2BmU9TV3iHageiM5atMPo2ejLWeXv1Md4PU8q2zAf4Nb4CinGLvoxqGWeCxezCBmc",
  "key18": "3bzUEK1cCFRdQwE84Azw5SvBhJFSzrwGzNq9mSTQZ58dLkqYZXqWamur6cEa1cGcxoqbBsf44aVCkpAVs5Yd9fGo",
  "key19": "2NH2XMLgbaw36WiMZzjpMDUUawueUtdps4reBTjCVTzaPvynkfRkBRGHAKqCtPvLGQTMjqk7j3BapTH1KjiXvP4b",
  "key20": "3E6Q1k4QRhNhYyPxwkD4jwRHVuAiBx8ZDRurRPJdPC9BTDaN2J85ttdsTBARi7W3fi3GRAu9oWAea7c1EVCJyEwq",
  "key21": "5gsBC4iKeUZyN4gWnbA3tB6QXTPpCCSMBZubCSks9t6E1T5ZWtPigu7FDCnjLR3TpcoviHC41gEhXH4kj8a2C6rd",
  "key22": "4LDfheBDCAaRikyzTi4khZ18KycKgvgCcKxs9HJ1C7xuMZjSksWqVRcENwbmR73jTmPfWNJ3Btdb1PS3D8Y9tK1c",
  "key23": "26Rd9yseE2tgzbtiqF66qGvPvjSW3pBL6FLuJUFetc2aZ2Jz2V7KSpTU2GCRS5Af8qZTy5MjEZHCWfJkNGcx5nqZ",
  "key24": "2Njn4Y9Z4UznKgCb1MXsa5qBWUYjoYrrezj1h9DRgiz6Zumeb5qhy94BjE6XDLxeqnjmDQ5HyY6xCjkokSgzvaXQ",
  "key25": "5DTj4aeRxL845FXEafyFYGh2nhqKusB1Dv2vxju8r5q1Zixb3c1DoEdsr44V4X4Jaww93xAYJKmawWm95oXJrKPv",
  "key26": "2s2uKotkPAogqK8aRKgobCsdAMvc52JSxZBgfxCyy9yvnSswevKUWEQZzPuuWqCezHYYsiTryYBLGedg1XibYqh6",
  "key27": "44KA1CSyouQktNiL6aEQQngiGCDjpnkavPuQZoPTm18HnTvAh3YGoV5i6Wwo26wU7znorcHjEw2zEDpp4wnkHLhi",
  "key28": "5kiojvQKhFiJ4Wm8Zcid3wsFgce2devM21U7vAcCfwKtbk46p7VUG7ZoycwNxTJAXKHQnN34hUFyxhcd8goXFjjq",
  "key29": "h5G9PkWPZ34eX5yAgKoD4k9QZ1QreKDf6uiVUjynmWJnp1kxwUAra7MJMgKnEtM7G2e5hQcPuTLvjarGnVYxmY9",
  "key30": "4EYx2PBCCbWPgz4PvwVcUkJXmeb9s8A6M3BW4HazCaKq4tBpmTr6ppt8YVZasXYMxkJCuLfzVgoSHPu4Nvv97fdH",
  "key31": "pvEoHN7H9nK7hgKtoGU7UUSMbKCHefcMG25NmX8U8guoMRJSYeB4dimewUSRLyZ2RieNYN1UTQCQXd3PwkiN4Ei",
  "key32": "P8gWiBp4YNA86qgHfC9sP8uL8eaKEUQHrXvsoT19cPMoPQBKxE3C2qgYK34rBr44tyH5M6whnoAC9TnXsWxuF9D",
  "key33": "4awQoZaUzM4ucBZLDUDQhf34jgpf2HWe8qq2fQcBq5pfTdw3v1EohrqATdfZ73oJMoPE1U2vkr7igdpmBvNDU6o2",
  "key34": "2arM3TBpwWvpcvSEzL4nt5xVsQ9E2bRqEMvkRzPo6yY8KxgwwmcCcbrBrHLUJYkXxmAXYZhWszkJLLReUVnPYR2U",
  "key35": "5APLVvjRqsrz6nvk2UThsDDTvpJg4n7Y6kkYDcH69VDTP5rFmyYFdoz7LCE7vqEU3bb4h8X5mtpHNMptW7BLQ6aT",
  "key36": "3uHf8xZy9cVPGMCthZqBu7behii1cexG2nmv7SaUt45TxSskSun9KTQ9Qw1UBY25pmp1NVpk8N8yv8goGGfQ89C8",
  "key37": "2HtyhABSh1fvbPmKXXt3o3vcHEvtKmBzm6HVUpP23W2CfpABNB9cZLrTwo9zx5tkhYXvoQuGSbNBXxSjekZNwaRH"
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

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
    "2xxtTWPfoygyRH3o13ztDpuehkFK2ZzUgbLFrXz1iqQgSQmQnETEDXktmMwdvbFNifzuVi4sLecV8LpUsJsmbEeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gNWSTd8fgfxDeaFYRVetWHRXF5cJBWNbnvskZJfQWnEENUHLWfAequ8Bu5rU8NVrx7qopn2aZn4xWQLry1bPWMY",
  "key1": "5vUi5pXpWD2KxdBVpk3bPDVZTZ5AYEmhXoUU3KC3cScrcKgFbheJd6Dkc8BeuXqDa1YNpbcxkRVcEgbSs5ZbouTZ",
  "key2": "4HDMHdcXx2joLph4zEuijH3HfWXcRiKqsz25cnTjQXgBFsqVnKAvXWi742fCup9X4ew15tsZT7LEgNEBiW2wmHcr",
  "key3": "4raLGQfRnztxySZtpaKSSk2h4BPDGCtu9ArE73pLJ8EM5sH99VEPY7t19WKxD37Ukp7aQQeK1cfY4RfVBKBLod4z",
  "key4": "iDB7h43GTLV1C14MQpozfvS4rf8Njfvr2bMbm86dusZ4jYfoKboUjmDKAHaPMWCb8YE8sM573MUN1HYHMuiyFoa",
  "key5": "oJhoQzxq6pJj5z5Dd63FYJjtwZ2BebR3GfGAgUgXdCaKFX3346qATimVwLoaNNSxtRVNPPYVAQ7qgB8jkhQmKAg",
  "key6": "4EeK74Z3T3SVzJnftjQ13bVvcSxEgJA2obnC2xxL3kTbud1pP6HajYofa8t16yGdX5xYmajFx7ZVinNZbqcpELGw",
  "key7": "2Sf3CBNNa7ViGyGHchV8sbpV2SLST5L6HYBGXjZ9uQcfXKZoP958hSya5KtQEj4Y6kAJc7JWXDcAxZ9V1J8i3UjZ",
  "key8": "5SysaE3H4AqEu7vx8dsCuQ4AMYnKSqC1GWFaxfKdK4nUByu4cm2yEG2ZwxMKhwQHMgoUm1UGh5fo85RRj5tfoqwk",
  "key9": "qeLHY1HS36vkFSxzqFSBGjzxk2q3RjWx4rKutHkkyaPNTV6Em2tMM27os2Gi5iFXkxVp9dZFJaeYRPqZxhuXr8g",
  "key10": "5aj8H4KNZvbVDiK3jAoHZK3KrBY5RtmWCMaJ6Cwxzs5Je3DFHK9jkk4DwPwa5Q4KbKr22ME2QuTo12ynN8HKUgEK",
  "key11": "5gLDJUAxmSnyj4gujeQPo3UpLApsgwWyJKz7ydGAdVMq689DW8uW8oPBJCY4UtDmrZ1B6Xe1AYUdSFYV4VbC9CLz",
  "key12": "2kU5o4BgToo5BJ41D56tWByAypwgpSCFzPBxs9E1TDPkAY5UiHsiiUtEWHd1K3Rc2ohQRNggTPNHrDth449r1qeu",
  "key13": "4hEvwGpbnvixo6gnUPpt1e46dPgeLsday13rAT9NturMMkbgJJrzmktKrLRPsmT1zNxH7owktE5eQbFrkwoqmTFw",
  "key14": "8XSxMyLER2tcG62Vpoi7JfFku4HDKxfrXMgEqJvUuV1qCRoivkrXTvMUaRNxMvoC2bKEfA3Q7Th2G3nvGBo4JqC",
  "key15": "5EZqYY38Wb5KaVQfzK9nZVS55MfnV1kaHJGX1PJM2wDytH11XM2aVfeQ5VmyrTP3aQseEaCbdp3agbRYn9CoHWdZ",
  "key16": "3UazesUUGWa3hm5ug6a3ZpDdr933hqFrpGtmBZZsTFmv3pUQJT7ziyxPNS5zr4zTanwANh92s7mm9WGpgKYUcXnu",
  "key17": "3GtVsNiGZAdEi4qGh24s2hqbgDFVDa2LGSvYCE1cWs68sChBTKeAPvrbXXq5CZmJpvP3hSc5RfnAzJoFRnfQaBGv",
  "key18": "4Y6end4avH3FLU73snmdYLmEkbCUicduaY6NPBzT1u8nzNXaTCSomvL6FBgFX7nFACFFtA3ikHkKYdRUy8CkhDZH",
  "key19": "2g6NyD2Qo57j2agJkdabbYAthh1K6DmFw6qKd2uF7Y1P4rU7SGMftyMq3dkpt5YZDZL2aRYm5V3wQLhPkitxH2oa",
  "key20": "5CzkRAgNgYdy5RQ1RaQR1hUMkp89xRRrJ5KgXL2xkXtBQizb8H5THmEF3V2gAPSK1ZGDPoCQy5reZKrQVTxambJg",
  "key21": "bcJaoSMGHGrqMFmXAJPxWxrREkiUfhdM4hkCSVQpJB2KRQKrgjBbRrQYVRqbZyaWcujAtbTKwEwFiqq7Aph6qTQ",
  "key22": "4cGne2MeDMZAQB5SqY3X44Zyt2qQBmApLo4M6r8b67Fh3ynbjZX7D9PUuDiaMmErmBiPLseTyoTtv1y72JFuLdgt",
  "key23": "4QCgXDahrwBjpY82RCsTJhEFR8BYmK2xJXE1DUCJcaptekAFHUrUSTrRVaimW2Rr2qfzL3DsuacwMNB6JcYMCsvy",
  "key24": "3SrYApPQ3pX7mpNBnGkmJHtT7Le2w5SK9C2qizd4Jhw83LJQLMSrg7VqvKjLhew11SXh2YnRGE8AjdqeSi3vg7nB",
  "key25": "2kneQWFNUcaTPXWDKQ9ovsRFw31UcQia7Dbvs8ZYqXTNa6RvFTPkZ61Got1esTALV48KweQcyeeacJ2oUKMcKYRh",
  "key26": "X2HPTGHjhX2QtQvA6aQS3WkUFotGEVa6HXJcjJ92kyqf1yVoT8AZz1Cgwc3pVm1YF8GhU7V4DNQsNQjSVG5p3Tv",
  "key27": "6529iUHFGW9tg9ufw55HpJVXo5GnpmzDEztPFMQCxiwVksLcFxMEWyFQ95DBvT1v4vDmmLpDB5Z4VF9mqKL5VLdS",
  "key28": "4tXqJwydmWfXiZixYztL6JXjCFiC1sXfo5jEMHD4FqcsGTopKhk8D3Wx8igo9KMG4NPQMaBiTveXsGRr6KHzBwLU"
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

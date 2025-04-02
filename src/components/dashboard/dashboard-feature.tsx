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
    "2S34M4Lu4NC7GsvGRqQKxZMC1A8phgSdJ5naq2WgfvHD7duzMAnSRm6Vy1KSH3L6GVPKo7X5JSz3XsDBUJhbxyqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQvsV7RSMTZ959gSi11CGjmMDGrs4re9FqAmTht5aEExjhhMvsEezWdjNvQoSrBqRQSK7CF5PudLucW6Jk5Tf4W",
  "key1": "5QssgfrbdmLmzXGfExkR2Q3oMewT1CCfnN2V5Z5DEHVCvwrEDB4gv9bn6bKDgPNsSLX39NXwJ3U356aUfviSaGXu",
  "key2": "Dz2QRLaYPif5nfd7CUstybSE17sMzjUaiykbYkNPt5oGUXdqSaeAU7jX42Axwsjqp6qWJoNk1zvwge93gincpXz",
  "key3": "ibtwSi62TyMXDJJFyoptDZNXGGm3Z66csyg2CxqqdcmXQueSKsYqvGrhu1fsqEeZBWumiPVa9d4wx3GrZxfrEwo",
  "key4": "65YU3GzvXzLsZtMRzgcDXmCTT9yteC5Nu4GTWcSL66J88myhfMaDtCC6u71MzqHKn1jjxpcy4ytdQzVo5SASNFBD",
  "key5": "26qcwTnxwYKpS42Lijux1TgqZceuk1cF42o9sRj1txrWSL5GNGiCBSsxBowqQ1NbdU5kDYNmTgdy1JLCeH8SKTrn",
  "key6": "2sb7yQ8vCGqQjiduGkicFgbcLux7mRKwRFDFTbkxmxEeknvsupouNvZ9cvFuagBDGcoBxZAGK6RLrgQpGH6qayUM",
  "key7": "4NAHFdrWqmWoaRukSPetA8f8LDM2TP4B99jEPR6hDCdgGK58XBsZFb7VwtXhYcpvBzm9S5aKqgzBLLJLBVDBk1Lb",
  "key8": "267F7jtxVAwNpyK91bD4HQqAUrroRaMUwkuKdxUSxLAKuPqJMdMfvVobRAenaZFmSY1XZQ2KTF59X7CKszJZBd9Z",
  "key9": "5zfEJS3W3RWSdXeEJMN58RqqeSyPEwKmYgda2u4zaj5UBsSWNE6GXL42vnC8K5siT2iSWhvRQuUEbkARDK7SwxyN",
  "key10": "53C6myWJrCjK8BPJATdVke5TX6RVRr43hvKaKsSePrQyTWsNAtFreYUmwXmGPEpvyCNs89De3U1Rk39PqbtVibSE",
  "key11": "6AHhDwFXWfxDJfxD8ZcAEmMfYnW1kDi1weshswcBsX5n896wqSPt6iDKATmAo4BgnPBZEWTrdi36psLvAe7Q71g",
  "key12": "5fEKP2KZEB94L6Pe3VpZBWyme1pVF8x4sqKeDdGcCJ3SFU4pkPyFaCof7T5JQko2eqpFnJ8c3b1eTvxfE7Uqrttc",
  "key13": "5Pwo5Sp6Jx5au42T9qycGJ2aCLN4ZyWezNiiciCmsXDZRYdFkR9a4MepEAeyQBGNgXnaAQAshWJqCExr78jxgFx4",
  "key14": "3zdHNnQHQgn2Emi2Cc97DMWBNoxtuM3LYQg91qnxjBqG7za1vZzn5RUuqyH3qGbGxewXwrFurgKjWr3XmnQaVVdm",
  "key15": "nQZkSwHqAyp8qsXJohsa6KnZqL9cPMqQqf5CFrcN4TgJ8TfdpiDgwuoDGGPnY8Vpq7jvnqcm7rYr926t1oWYsRB",
  "key16": "5KcehYPFz1yKoHHLjBNTJ53TEE8zRpfSoSXuNsaCYFYwqAt3rzopQuCdTCuu9bYcGg8Ler49FZWCZ16ujKcw2vmX",
  "key17": "4DHvWm9QVUc6iE6oAHedUEYGE6UZDYKtESn5Zgaod22cXbKM84t8wn8TixunMHwW2MpFs6PH2fhfkeGgwx99e2nm",
  "key18": "33QMivpWDc6kzMV2oq8yjx9VHWZ6cFia4ae8FbLxjC8oQMP4yAdVgzHCKoU2Gnu4uKa4ucQHiVVkh7Y7HFiXKy2a",
  "key19": "22yPeLJpuPtJaLzTi5UiHzwo4VPhC8a49YM2NSRRpcDqQGTUjFLPdE48FHDisWeJAu43hKKrNg9m7JwbX4Bb6ywA",
  "key20": "5a2ta9Nj5RSB7ZCmujVuGWQRXPBvkbyKsdRS7RUtm1GCRsWS1UMo3VrEafgjrTLBt6FNpRHBBYNQ1DvqjfuGgeSj",
  "key21": "5KsJa1sFFc5hX3FgA9KCbj3AEuviyBxALVsMZKtmH2gk6GMLTP8Le1A9UrmGk8gnFeU8bfuabPNAJLWNgewrE9nU",
  "key22": "3NuRaWFn4xFUDmgPTspUTC1Nn8AG2HWe7hLKKtfzmhUqoQYa61MAUAe93JQ2KmGGnFHdCUAGi8dXTGiDhDBqkNng",
  "key23": "5huk2jzZ6ynhtHY1ojBsLkb9edm6d95RZDiqxcm5f6SGMGrJk7Piup4j7DGTiYaSb4vmuVrd5uuBbTsKycjBUvTU",
  "key24": "5PQaRzDZxNXdwnX6P7tWadaZQe37NsBFnoWxZHxcue5EVZzzErQktsvJWbNhh4QeLbzJxDBLHdr4oztM9bhxeymV",
  "key25": "3sUy3wpJbZMiiGCEtP4BHPGHxtgmtw9Bz72vL9kpPjqirzKG9cDbAqQ3SGH6KVg9wWR3AWtZ93wfgcfgBm9mpnEw",
  "key26": "vFyxZ6Fipc6pSVF5cjPovsToLG47YSnTsMFrpp71PPgKKKdcw1jBCoEFL9pkwtw3f3GGUMtxB7WhPuKFGN4WyJM",
  "key27": "3FXkyTd1dcg8zJTcKobzPnN6B7b74ceXvjCnBz1ATmBMgZX241ftZF92NWx7oJ6gjr7MDxWem1XVjWguuCKiXD5D",
  "key28": "2J4pWxKsEuZDWNBDPm8GeEr9rteoaTf2XCc49goTMorsx3X6RnJzLYHo4VGBrS7NhttLyPs6HY1FHVNGJ9o6kbdv",
  "key29": "fvZWXJcMfpPvCLTvaodL44nvnwe5fWfDodzp8aPbkxxP4BEbPFx7ZkbACpFRugJjkAJYfgNSmkXN136cnRwX68d",
  "key30": "dz6FknXimMAw7mwkYBkH1yAFqW3RN4DVm7g3n736EidsdfcEHQtagcvmRj8HbFLpnQahhHHBaauoCuDpBXKkydR",
  "key31": "2cCNTRcSNC6ovSbxXW86Mt3h2qPQa6n2TW3TCiLDokiP8MRhPAtM3noB7UNzKHrEps46t8SpW8hmm5PNc94hQM6n",
  "key32": "4FaTA7s6wcxKPCRR6ZiHuE4Q6fzRdLrnoZYMQWeuRiUyH3KNyQHDYKnZs3LJZ9vcs3GK3tBWVbkspbEXhmC1AdW1"
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

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
    "jLqfWV6LEsfXnWMVat3NZN7saSVSeLaPBsxvhJ6pLGTg2iaEAkGxs1cetMqRpkNiekwtTKz4cKfeN1FuFJJmB91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTQJvvjtasbGuov9utCnFF9wSAnTjQz4qNsFkQsu8Bpchpfv45cQWUVDn9hYdPmeBthtahqwTbf7zmdNz9Cruex",
  "key1": "5o9m5qsiv1XDRBg4gdrnB3ZWCdnYY8QPWVaudyYAUf5wKpNxM6bxYXVVAXxHTEngFq6d4wtRRBCmdNBCeHViW9N1",
  "key2": "5F5HbQLJm5tv4GzuezLVZCXuyBhvTc2Es47nXNs4u6dwXLpX2zbsvff1DCLySvM1xo78Avgp2uErD2YYLUddjKeo",
  "key3": "63eAPbgeesxiptJvbJdeZ3SAaAAyPnExR3HDpgExmLsH7ro6SXAFvXXBMV7ypg4RRHHbFFUrK2sPMB9eSjEQAaeQ",
  "key4": "2M9Q6eC6FH7MDUFKcM22TkVofsxQnc1Qb5njUD61bgBEF1FNPBKjpc9U2VVLRQwkoza1ky3oqyNz5DETYfdjgqa5",
  "key5": "4DQ5cizz9vEpPXMMtenfAQoKrbMxn33fkJRX168Z3Xxo4hbtijvyn8v4hiAJh9s8wwhoj8ujwjrhB8U8DDcsLsxh",
  "key6": "4eMKYSdhDe4GB1DPnwn3MJ22isJgureuz7L4MY6pNmWn5eUUVcntnruMm6vZbZ699PHjUtMqi6ybvLwz265Zr8mK",
  "key7": "5NPyYXsa5qieBerDrMAtjo9TSRzTt6wzmmLyskbZCtacvLoQZznfoD1SdkX1j5EjkBEgaTNMLQh2xR1iiFRTnFk6",
  "key8": "56EN4n7iy4LZcSapLwQV87ezg9ZSpEcqMcskpr9WctiwiKmoZdHRc6VPUXjS81Cud2n1XPGDkVU9qiaZVuR3UkhX",
  "key9": "2aCBZFZ9GEcADVukY6APS6rHysC3pceSobL6s9H5mKZirHhn721gxPWu1FWyQnJEvH8p8qC5bW4yvTrjT3xBicNj",
  "key10": "XzrciAEgBq5ZFt5WMuXsCsh6pGDh5VuVC8NuPpGcF5RQHkM5PBmo9NyiZVroHWuXSwp3wfnJzeaB3QVRmLaa2qV",
  "key11": "BZ6Z7C9xn9GN7isC6mnHxRCGxHvr1oH7wfEmdxFDVKVN16dHUBscf4TGqKJNbzc35bLE7fzySmXNySbyPiGfpXF",
  "key12": "3qpsmW4GaTj8F11Xo497XMyMwpBwZ4PucQEu8oqzbXXmc3GZup3k8CwsRnZetZLWeTkHD3QEBhry9t2C9DBbn89A",
  "key13": "4pDMh9X7hky6GK41jAyWQ6D5CCpo7uBpGAsrtM3YZtTtHJdsKgsPMVyqRJCvNpR7ZhkM1N7u8dvdFW69Q2K8P3Gy",
  "key14": "5qWDQTwrpzrg8sfUpgJ2xbb2zkuq5hN1JugNXFiBbCMhVbmg6DtWdmbuXg1itjBRq8DzvkGJ34NFQnckzXyDi5wn",
  "key15": "4TiJr9YLNSfixh9iJUL3CcgXFnynXKZrDM2tvA1yGE4mxB9FWDBf6Tyky62iLYUxyQE3ALF83qVkwMZ47a5RiReD",
  "key16": "jpdBma7WNBwQnwE12n4QqtFVCJZCewG3QLbaAm5foHg2xGbK8YBr5FpmKM7XWH1Pj9CpaaeM5Jm6uwsjbaFbjs6",
  "key17": "5osWGPyvp1HmcvjZPw7234TzUxh9KvwSbSdhWtVDDJrqgBp65E5YgZa65h8vWqaBc7scAgqWUWpUxz47zLL3uFri",
  "key18": "585ZfiEgp9u7Mrsg3pPnBq8mHCf59ymKzURey27c1yLgnYGvkaSov2HjvCTBtEz6gngHCnuiRQCcuTtdEVPf377e",
  "key19": "4gqNR9AoUaWF27vguj2Hj5e3QU57ZyBJYTrAAzmut8otZHGQgP32kTU3WgzbPuc7KMDsFKGXaMmhEZrsfUQbzkiF",
  "key20": "4TacE2WSurxuBFHZGE1BS5y3hjtyiq8aNvTbQg7u6KT7Nv5iqnPeMBUBQt1J4D7cp9qDiAoaHChSvJUEVvcNPNd1",
  "key21": "54FimSXAKSzuMg43j7tfCtZpTeSz4paEYvwQWvYmVuUvXZc6x4Dk5HjLkwgcZNo6SSVMLndMpv1VmBRbT3mQjars",
  "key22": "34uCwVsRqN6q648GzLGPX7Ut8YZUQRXSHGFo2KCEvW9mMwotXUxP2gkBSEpgEboTQEHZ53gPcfteEEFnkBkvKcev",
  "key23": "J2g1NzRGKkWSHSdXoTudzrDUQn2gpDiWqeREAWSwaqoUscbv9Ai46f98GdgMqRMVdRfUZQDyZiSt24uzNuo6KhC",
  "key24": "2EemSKGYH6hQAWKDkEZLTKPv4yghS9wXrs5jwiscR5aY9y8L37dBrqTUBYhXicZLpNkL37ojhnkEFy2m4kETUnMw",
  "key25": "5NxQNwmwYt4rBdZPqEe1PRFMtQjYTmRP1bwQW4eLLv8Vu8jyNgNSkdxeTp1kdsN1HJdeLz7JnWFuFfJZgQVEjWJn",
  "key26": "37T4cCF9tfL5NcBz4YMiAA1yXqqNMwByFhHpFAJHpjcZrWVeyoVDsK8TNaGYMPoynpDKreonLz1sTifcHNVtQJXc"
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

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
    "owuXMrFt8yp6DhKqx8dPTj6iG4YXrPF4jv71LiJYPbFpDS1LARAZyg3yQ2T58v11kAUsi2eAau5vgEonMH3Wfq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GEDc1YzJnSPZhFVdJxXneBYwj1Eg5SJmtkc4s9dPfCw2M3uSRRt1NKP1AahyWxniGw1JbzPqCLVRJPG7kKD95z8",
  "key1": "G7KWUZmeW4fRiyF8b4UcteUsxYotLbXk96W4dYEK3WYARdmfP5bu1xp39RZyXdJy2kUgA68D6UQgafVjHSkLWAL",
  "key2": "4rohmGemUe1LgGvUhZDQ2xapQsez6nkTLLGvQzuZcCHAN317LD7NBxR8bwqRd8XasmnK5Ru62vHzpf6dEsdSRvQx",
  "key3": "2hCgJksrhUuAgxVrRpMnBSHt79ePp1VmgkYLzAVbCZpwDHsHHG4QN1ZULgf8Ue7bGwUnixA1pmH4vqLaA9yY4xUw",
  "key4": "ALmw694G8spHiA8JUyneGWfzR7yagCppNke4AZYi9RjwJpLTbasvN1DX3nmtdYyugKZHGcSrRaAbeDrXgyBWtg4",
  "key5": "5vQ8fQBHncAdJkmKqGaL3M4Q2VrdWekDkVjc9G7mcCCRB1aiRED4MizhkReMVrvjF2mAK1wyvC8gcbJVbc8YuDwy",
  "key6": "gB8x53uiASZiqniJb8jT4HtEx5XwZboNKFa8hmBq81T2zrasaLQA414Gqm9ymfx3SmBCPfb5vweHMiZ8ChRvmYi",
  "key7": "47PuuZ6JqTF7fMKa4X5ojBXfAxmSNPbeFimq5My6HqBAHXiDgWsGG3FbfnbLuYdhbftUYLqKpkqHXswtF4xAnJo2",
  "key8": "2uitvCJmvfNBtzmW55zpLAUpuLkv2oJwCg9nBTbxZ5g2g2FFEcLL64fdSa36hoMGp6qpXwvqn9fTzdBNpqvkvDyZ",
  "key9": "2c574fdynY4t8B5bNSRPH1TfefQs5BTpxS9pQ6JYRedxWEZALeLXcJ5vxXK7SR6VphN1NQH3eUSDrDke2Tnzz81n",
  "key10": "4hGnZnuPFNDsGcJfjKEUQrbcj5HkxWGunQTh8XMRtuVK6vMfALVYu141M8gfJkS5CbZw5SPNK31xyWoNCWSs2NZM",
  "key11": "4duq1SK8VtKqpfu1mpnNK6a4uN3NeG3EfqePFiTwPgexNW8n9V4545xF8K8Roz4af8314vY8ipcfH13Fbphqj2ZB",
  "key12": "2k5TfFiC6yjL3UZjsWAiZF7A4PVh44XRRdqLuf61jonAFhFbQzTRSfTQLq75vuQwAakyE82SzdA6iewN8xYfPui4",
  "key13": "5jg4fxYNeMVzG3sQodEomLm3MTrEVhmnWUsWt6rbEnZ54CqHieKwQYHRAMBdqjwEY493ukANRHM7rjXby6nJX57A",
  "key14": "52GdwtkRYg6bPknB4qveiZ6dt9E772s6YeytYoymW3tyfDmx2sDqxsMJLSmSFCCNTxt1gkcT9DapWYfVQwyAYJYd",
  "key15": "o6Bb8oPqgeRb6AffBZPPKQo2x4caf7cb6xaH27r5sYCRqf6owK3pXD9ZWKMkgqGNhvaKrCm851K9MJMsLWcQXRz",
  "key16": "2RZrCZYM4WubtV5wJWdadDtMHUHi7jSLJbE27461QZ6CuHYD8o25pQ4oLs15DVUrPwHJJ6tcg3x8u4SZYURVAS9H",
  "key17": "4eAuMvP4w76JvFbNHqncQHTezMwKnxM4stGSKRRgNa6eUhCBYebTYWm9jdfBwD1vc37QosDUyJjNCViVgTFgd1Ar",
  "key18": "4HDWEQBMw4x4wWRzP3EetdqnmPAhYwDTvEfbYb9zCLvQWjnmRfug1DjYmWcPKgNTaLH7caa8xuajuWgSPpXCugy",
  "key19": "YEs6pZPWKY2eRjTTsp9k6JQXr6aPsP7P6UmdWFc3FGNDvzBd1MPGMWjHZVDb3voFCZaYgThQpLmu7JAYFMwqzm7",
  "key20": "4RuoW923SX5S2Agyesa4RzLj7pzt6wVAk7k8SyHCsXvtvZzYp87RzDx5dBtW2zefa6x3b73i6SLSeLMBmreYDudq",
  "key21": "2ayjjjdd4DWD2SDTwZehZCcru7NEPRDfSD4MfU1X2XRYsubggTQqFGE7VkmCnj5q2K1dk5QWyGNoeJUyBGt36Z1P",
  "key22": "3QYaSh2Gci2DG7hT68rt6pmCEfZv8k98eEFi46tZXgnvcGdMs5itudrQ7v3vM4Pmv1i5vwrfL2FMqucebtnPhdtF",
  "key23": "4enG7zSWUAZ1JhHbos68jN64sGe62KS5tsptZny6SxoRfJ421xZ6QZcQKB8PenM77iEt4RNyUgNPmCGud4FJPhZP",
  "key24": "2jaBbAXgmWAMQrZ4VQTZTPFeUeP6h8V5eMKp4o7rtNrs6vLTnP6EwDGpiconbPdXqE8nFraSDso3GmQWqc6qpcE4",
  "key25": "4Ct2ntyR3t38yXbKYVrQNKz7KrMp2Px1WtaX8hJFX5zpfN311P6VHw7shocpnBt5hYgGQp9vEJEdXosSBLfZq7xm",
  "key26": "3C87vdQHJXJ6jBBRhg28rjzEbUarfYvbJVvH9BWzQzzFzdTmqtsXXY91buFZQcuwUhht6dW4rzN9M3sL1k1fJeTi",
  "key27": "3DRUX1vTiVG62xTbnceqVF2z4uhi6w9TChqRnK5CjRjnxvBGKdTxrhP9iHsNUVmeZ6YJJQmRVPN2fBsX1cWNxk34",
  "key28": "2ATM7mNSXJ2CdpU38HxXVRZWuiwvHUwnpsx4PvjZZwxyojMP3dQAj8bDwtiCRNQ74j3bfNQdARuJp2iXfgEib4Kg",
  "key29": "5QhEFxF7bTmhWYNigFDzQKyBbrgP4BouHTZX4CEbYBJu5W8d1xX9mwpdWr8FQiRD3jbBQ1cifo5dNFLFc6SBBh1V",
  "key30": "655fHUm5ZVtNwPeMG9Kf7bWAd8223NekT1PgsRcuthzeXW58sUf3WV5X5CG3JFt8oX54VG3LKhRKEawyGQXmxhxQ",
  "key31": "348nEn7oLaALta7gZQnMYSUciwCxqs2miRarr4sduXYoXntqiWY14A32CRanE5j8oUYFALzg6HxWFfMUqU7hRrGC",
  "key32": "4Yuyp4CJw6HEPNYV2yA4qapFCp1R7UMmnGdekEVPzs3ya7v4PjFKN4toJHmdA9F6xmgMyM1Ubacgdi1GmhxXwVUN",
  "key33": "LqpbL6qyVfhzPHRu34s7Z3VmgsBGENUhKCUvkePLG9P2LxYCAQbXty8uTjsoh7txEAp7n6iEd1EeTRWnyomC2rd",
  "key34": "2zyRGzikCWptJ1JjwUXi2Dayp1NEqaUrAe2Bw74NsuS77GzJoCpt8V37VgDLMhJmYHfvE4fe72q1k7oXEDLsBFFM"
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

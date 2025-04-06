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
    "2k6CPCYzyvGGVPGWw8LAMwUuAUgNVkzYEc9nbbNeRPrLQrzgKRX6y4DHzj8iD4aauux86ac3P6RB4Zs9JK5W4MnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A65xe3M29NM6AsCBxLHXpwQTi1VngUE6GnbG7AXKXYoaADLbmjPY1uY27bLPxpvfrFtFQCXyY5M8YGRH1HsJ6NG",
  "key1": "3eMQFq3TJcYYwpTHEnpPzv87W1mVU6zAfBNoWntGv4XnAE56LzvCsGqs3E1D9sE2ERkab9na344pPgGWkhR6nUKm",
  "key2": "3NNp1qFg2qW5UHAjP9g7TkWzKiWXP7CRcLZkgLqY8pNKSDBumbbf7W1BeMMUVKmM3zj41NtMKv2cJrgLY6cF98MD",
  "key3": "4eCnHe4V1LyStTm2XyPahFngKkHiLPS6uf2PFTV1dT328SLci5uNUbL8wZQKg749KsrSSBR5UJabTRM346Lez8BR",
  "key4": "H72VheUseHdB228G7FMsxgCHkjpPiMb6FJtiUXoidxThN29kZUBQ7ZtrP615Ah66nizMX8hYLNrxD83Amof23JL",
  "key5": "5PX6XhrLULVfStrdsF9euVtqYVKivAuKXRwdKGQDSa7jP39wk14Jg9LztuJSmMp3LCnsUG1B3XdWETMRB7eqeVSC",
  "key6": "4fPD2vtWHrAf1cs5YhFoQAPZnvDNszZ1gf9dhJVUoXKyU1Lk73FW7Rk9anhUHazFWvD7j3Nq2ECTpmxcheqWNLUz",
  "key7": "35qn3B5tYipgGhYbfPgqzxvon2fbXMohzvE8SSi2iW44PK3tW3QEwtzh1jajzNeeTkq5Xyzb7Fi45anctARW7s4X",
  "key8": "5iqzbd1yGDz8htfuyTWVY4i72vrPWmexeDEaJ1j3LZhfNiuSmfLmvoxgcqBBRkCYZgY3eWgHgafWTZ5bxXAbKSFM",
  "key9": "2m981Uf3SDAWhZaghR9SbhNAa34wj3UFz5afqQmdVzT2vqadZhB71Gs4uq52YiJhwrebrSZAHME78DnjKwNYuqmb",
  "key10": "52LEPjeUvFVWyqzzdFt1PFvwwv4A6Yuf8nJtGU42Eu1yPNS1fGo2dQ7DjU7ejEby3FDGTePEL2U9fbhzqprzvLsE",
  "key11": "2x3FSXcvCsmTbAM2mWhSGxSevUMWnMQyPFNFpVFHx98FnuY5QPjd6jxybMGwotFJGWcvrD8TLzWxqySwLmKNBftu",
  "key12": "49s8z85D37egLosG4QxyowN63Bhcfak1VBVVgD5jw7K9aBfcJSJpTcczCAatzsy1gBD3df7LCQ2jNUYVtRP2stz9",
  "key13": "55R5YWFZC5qFkfHc1azythqP6mssa5FYXHDsDCWNH8WoykmUZcsMejopaBony1z6YoMS66oDa9JZAUYDqpvoUCPd",
  "key14": "CQWSsUH9aFpFXXfoZS46vScT52W5kxMw7NNxjvswTC6KNw1wuQLYycA61KGd5VQqjfJAPSvooNrQnvym6YAbeNo",
  "key15": "2RTu9ncbGu8L8zHQo8ZXPpVuX4DRci1dL2HAPVoyL1nFnpFLqoFVGQuG81eu5uuFMUp938gbiDP3RkNSeHp112zX",
  "key16": "3j1yRCygLUdS8mn4YMj7jNNLLx6o9499UG2HepcWGiGnfT8W5hdiSrbUN3255Z6M8VdPYpqWJgPCE8jbCcJ7iMk8",
  "key17": "2yS1KZobhG2fidKpZ47Tfg8i3WfjdvuZ1CFNFG4dPNiiLvgEY3sMQB89eB2oG4ndnoYeDjKS4RFzfEn4nDya683N",
  "key18": "9HSEJr1xX9YFrtAmUkRYVfAaexm9HAtDZRNKu2sS54SW9W1TJdU1Ju1LTVi9v94ZdLdmDbLJNeyaUHdEAtvn7zi",
  "key19": "5jt2AMLXknLXvAPcEAUq4x1ug5wDNcaZYuNMjCEF3zqJSXBySfQpsfm4fjdamDGEupe3Doefrbxz877Vk34KXF5Y",
  "key20": "2NGsSyF2Xc1pFR6iu9td9yjpWUwm25T6C5jo2auK2RwWYf6MpX6kxzVu4GKHDBu4oQzcEHJNben7ZtNyy16T9bsW",
  "key21": "3BGMSneCuEe8UnUHAgzyETcTpSMMZ51AuaTdLdpHCmzUvQW9q3pMTJz98R9ojbVmdfXbnAnrQNiDcZC1cTXZe6wC",
  "key22": "GGtMFiD7Xhv2xvajqDiZjHJDUESvyvxVvxkEo57J2c3jtLzU3CjUN285fR4TyJsnrB9uZPpaAKwBtBBS6K4NwSW",
  "key23": "3BZoti6mcY7WogJREKnTB5jQLbRk1xDb2R8fe1Tmv52vAjbt3UeoaXsw2CwQvSiz5EQ8XkLSd9bkxTyPiEGpa6uV",
  "key24": "31bzHp49JLmgMGNoDxd8orG9fBiZ7oVbigfNE6YsyDxwSPfMyawQj7qnhaR4sHuY4GpTQ9DLa4sLVEp8YwzczEyB",
  "key25": "xSwPonrsdmFrtBk9uVZQWW9qQWvZKgzPpDefVvvSF2Kqpaoq1GMuBNfg6DQRLWaT241ri7ySPpvJp9L1Mu2isb2"
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

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
    "4HQyrBxG7v13qrmxcRSKtaAh6cYc4A8phegmXdwPaErhke6VfAb4uU7khxNjTnks9GWS3Kfbn5BgBbrASViDa6u7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZDdVZh4fmuv9B2kSoXM3XS14w4XWtUn4ckxzycRyAuCQFABPHawvYvgJZrUzNRZ8sHubDjZ6ka5Jq8vQAPDXm1",
  "key1": "5jozXesV8aRrLrhCiRugRDX4JYLWf6c2cRj4S7TAXZ9y8BX945vdWcnP8H5p5z84gAaUL6L9PLYwFpnzkhYYaydY",
  "key2": "3oRkmNgW16vc9whaiNYUv2P4ZfYrWCVkXGfHXEtbKRh9KhSC4uYGBSf81XKVjZRNNmtjzA8ELA9MzYni5SGux1zi",
  "key3": "3YU71DMSaSdu9Hop1uj9sbMxmm4UMpLmu2dcNutexchRnA9v5obK8aeyYerDnVbCwETpLcYkddeeHLz8qF4vS7mr",
  "key4": "2KrG1sF5wnwdAV9NzmfCREussbZSkChbhXEotUHk9HJSSuuRZ5o33DJiHF8fNpbtp4SUX5aXzsfTTaCKc6UE9j3B",
  "key5": "3fUekbXqKDrNVTDguKQKXV2qtMJZdSsbfunaaN44axvS9J7rG1i2Uior3cHVFcrxunLQBqsUhiDUND9bSCsNVvoq",
  "key6": "5T6Atb6FQ2gb34XXg7d9NUM7seLtWybxbg7qbnVsfJhbeRiDEUiZmCJ8ZPQhvcUnrnYp643oi4iRtBDcT4684bEJ",
  "key7": "i9kYQCELHgy4r7qz4xv4P49UFKnfw5Gq5UiiBHPpYqvEkLreSRkphmbr8FTM9fC5Y2fKpGcruPWoQgLTCRG7gXt",
  "key8": "46Dp3SS7H1drhiWLc3y9H3eWBbic7k7QiruM54nKfkod1g1UjvW5rzWDCSpFbhpf5qUfdbXmKmUm1hWCt8jwaSyg",
  "key9": "2duupL4NE6jN4TarEr8inn2Dy6xFWM8ocq6z8Md8EiWt92VJW9No3tPcgXms2GC5wCDbVNJCkbC3X464Bz6u61w9",
  "key10": "2maw6Wj5ZjkJHWahAnzChd6xYEeVPdqXWvXRa9cte2jBVRPv5B6kykCb5zwDj76XyMiA4dZXux4tnJXL8FuKoJJq",
  "key11": "2ipriRrs6U7gz7uJ7sTyqV3TAiMrYgfLqhXHYo3ukiZFYf58GqeZ1ZSnKqrgmuDS2VbQWrUyJeAXceyiCPj7T5vC",
  "key12": "3H4yDhDyib5yh7VJkM3dTudoJAnPPfeK71atzbLqDTPx4L2RuV8i95JeD7JWsbBwWi4oRm7FJt9QCkJ2jXYmpdRb",
  "key13": "2NXcZb9GKqf1LCT55W8S4iLajmfqMPVUvp6mFoC6q25sbxC8SZafeGcYR1Yyi72BC8nYj74LiUGKLRBurqn5yHgK",
  "key14": "2yYsmpLh6rnRcQAWQ1ssmh6io5246qkQ3J3zi7MV4Ea2jmjvRrUdDHXNscdCase5Vesih6awkgEYXjyy2XKjihaK",
  "key15": "3eJjerX62FJhbjHot7VB4riE2HRVDj9zdARdzAmVchtR8Vy9ApwBFzphyHm49xTjMAqt5h2Jkm9Ec2D7cNbcH9qA",
  "key16": "2B8b1hw32R3GE3QSpCiavA321hGTz8SvDRiNCZUxZR1Bb3vKAJBsLbtsVb9B17AbxLicYhQ4AVQYdo6pRJQTmoUi",
  "key17": "jAux83agZkcSWmtkNU2CXDk51rzCNKVbyWuGZsUhzyFYyUfT9LNfQZLyAee6w7N52XK4GAg6tZWNVeCRCnS7W49",
  "key18": "5zwYXJeqEPVKYSjVFpZjmXpWdKeEaTnLKmdJ5hbdUQyq5VHfNRyFAHvUo2mJ7318aK3vXEUKmtznYBXGKPnntzzJ",
  "key19": "4ZnM9tqHyitF15hMUveho4FToP1ENtxGyYsmyCVAcPL4r5TmHf9ybFu7xCULZyRsxoUGwEwbizQDcYDzt6BocbTp",
  "key20": "2bccd29uNrsaMXH4mLtECaqVbmDjSHEtNmEQwHtM5omA5cBNMEKFc2taiZrGa72i7yGJKm7echr3MNFMgkmKNjjb",
  "key21": "4mP4NBN3BvrZbrvZwZkk3hga7nrCXDHUM5QeZNJ2V1CnrQk7aeRJYCjFoW89Pj5Z3hNmDhB3yenpmeKFnQH5397u",
  "key22": "4ydYiL4UjCfUvE1tBe8MWjaDqeo3MczPTk7CKhpzAjkrVAXZPhJiRnzTkrvFddtTsLSU8iGKW2j1qYv2srjcvzyo",
  "key23": "4fvUvK2CtrSaLQRwHQW1F6bY44bBuzRRPM7ue8cRhQqzLehFsoMHuDt4fJWsCDUTd4aRe68Xf8AWLn3zjbBcr3vK",
  "key24": "58TwftzSBLuUYaanrCRxPKXJgzkBphQzTMsn8SRRhtqtZppH529a57LEY8vCmjZf5C4mjM1M4bWRK4pKc5mnXRQ8",
  "key25": "3fxSqF5mwzoN49e1FRBTFJ6hhqii62Dwdav94mE7PVApL5whvHqqWLvRmG54kYL8voDoyVKeJn4VfZG2LUXsfjVT",
  "key26": "4kRvhCkJeHBJq98aTqzmLA37MfwxUVpefpPUg65pDYoV7qt2YH8nZJnEUcEkyjjtMHVxeEjdfWWxfPZas6fTQdze",
  "key27": "34iaByXe6MRUDrBn5nZyEfqUcGoWy9x4RKdn6Y1dGaWrUKTzARb3KDBizNmgSXKeoz1jDh2fGyNWok8Y1hWsMoAX",
  "key28": "KUZRTMrnL3vsDsamZGk4au9CBJVtGuyMHEvfJLfmdjQcYEezzBKtvwEsEPLtf7LqgqTMvc3TbRU3ZzCHBR2S1UJ"
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

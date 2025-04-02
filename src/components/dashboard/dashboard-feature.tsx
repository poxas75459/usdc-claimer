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
    "2cu2MAP3ebobDz9WjVm5QK1XJmQmNpmvRFfrjHg4Bd2SHUAukPtDodYYNvzsK8teByiPGEJoXNd7j1VVkHLgR2vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eknVaPQmZia3GmFKGjtDh4YuQdys4HoX3QUvdcKeG9EQ1vJrRYkpiHQx1UtmSMz6kKD3feLzFr18P7eKWhs8MRo",
  "key1": "M7vawt3LBx5BoVnFSahuEUPJAMZqYbrLZ1Vru3wga2CtjyPrfWSdvkPV1c2S2EA7uoQDfebtkfLratydDWEqgcr",
  "key2": "4M6VLku1cA4ZowCpBqXuhVcSYd5e8cPBSVLF6U4SnQ1JUejfjcxpRR35Mi4fiFnc334ReZYazFKFdT8hP7FVy1Dq",
  "key3": "3yfi6vXNHnaMCm2W7n9hSdXK4PsRe8wSpP85t11KwGcTLKKrGrWRbjdngb1xifa3CwqBLSbgSWcx4CS8WzEi2atu",
  "key4": "5aGrkg2xwBNu24s5uCnz6YsVWdjDCUzWtFGpHAvt4LzeRjX4RkbEfBrmAgxMfB4opt4b4wnAMNTMzFhuyLoctruR",
  "key5": "56zWNBzgmK44Wko9vPfWv6ank8ajs2HkKn2zbBjKz3To5VyKZ1ZkbWTAeTBbuVspB3XaPr3zMhNsYG9N4NoM1tFE",
  "key6": "2LaS9kLpuA3iHhxDrC348QnfWmuGahwPRYjwVMrpKBFmbDwHXSaNomwarQZhkzgMFGZVZij8RWymz9M4e83Ah3CY",
  "key7": "2Ae3y9QxWLxD7R71tZ6bAxjqD5EcSajdQLoyt3sZf7W1AFbgZETWDHAWUDSLnLuKXkAnDsFkRXzMgqLv5ijcV568",
  "key8": "5gQojrdgVYwH7U2M1qg1bZPB72BBn4tcAo9sedzkJMLdWowuZ2ySrJF93ZzAqpaCgDVpAi5STc29sVYeEmRa9kdK",
  "key9": "33JY2pUUhMYbjgP8kmd1HgQqaYc5gJmSdQEFKrT2748Yrsc8k9a2A29JfPfeGLNphiPMCY3Jozydp828CUdrfb9t",
  "key10": "bKeTWvA6G49GveH2e1jrunqdASHhHD2NwnYZqUiz2rvziHtajDSA4K9jKaoN1ULwZNMLtzM9U3i7sVnLfDJBAAT",
  "key11": "5rmNiu2HdSoWnVjRTua694P8TREWavM4HyPKPuMFw5Zt7vTJ9tnCVT2CD1Je7gngacn9a64FnexmFLLMMt7LL6ZN",
  "key12": "5do6rUV8WRu9Uug3rpjrQEkSCvbAPyvWyfLTF2BAF9QB6ZVDu38A5MsyudoaKjCkoozRJCrwmSxDyBNG8CQjz5EZ",
  "key13": "4jdy4S3498pBqs3dZebWXKc4n1rLLJWqCSiPgF2uKqgCn81NkzhBo3TnsTxqNsKJFBqD88kPTWkrqs7QuoeGBfhD",
  "key14": "3PuLziz4XQaR2x1yoQ9ZXKXiqEojebVojBJSdoH9nmVMRBFTuBvynPWmZEZanB8FjQuoJeAkLHzS2CgGxgnSxQYG",
  "key15": "2uRfFZahRKDeK2if54EvupfbgvZgPK4fd5Tf6D63Qf7SBKicsRCUbqKn7szAATZzsXh5FR8NT3tZ75jXUkxL7YJr",
  "key16": "2X2aJ1em1S8AfrTFGhp63egXb4nCmaQwq2yHhgd5CTrELTokvD8mVQ7psVBcTepTEPH2LgzbpfD4ayP6pJfrQRuV",
  "key17": "5ss2U234zbSzqZaWK6gi3A52EwFzxAkJkVsXiH8MG1BZ9E5UUXFHg3JXkC5Fs1WaPB4NG4vWSentn34g7Eof2nuf",
  "key18": "33XVsEQkjinS4Zathx1w6M5TRe1VKmhBfLPGNurWLcckra5CPmfYj99HSX2sSeLjPKLXTgQLtTBEqoSooCHgdjYm",
  "key19": "3vPupk8X6dHBb9VHiaujBF8EbpdntchbYarsDQx3qB1ncjoLsXqdNaqzDBCJtYiqzvYjFZmz61ejNEUA3Rzjjfy1",
  "key20": "3DKzwSH6Q2QhaKX3tsfBChrR2fEyGb8QLcccsatr52xrGRfJuBr9Uc4RDtacg3LfsSDpbokBp2s9GF9XymjLbkEb",
  "key21": "3phow1SjVUgkm3qKjrSfH8wqB6oMpHaki623YxXsNCG1PHctwGPB6JM4WruhLigHaU5X6codazd8WFPqaLtYkLtc",
  "key22": "Q1mDA8JjLWGuYnkXKWJ1izMi4ttBZLvEv5zUNPWTsfzBdLqY1jhJwSeyapEdp3mvYfGSB6Wwq353pj9a8id9m65",
  "key23": "22cPybXHgRoPJpFV1qQdY5KfnWjhdwoZ6quMKJUuBxETGaKq2KMKnBfdLC9or4VD9yWbH977UcAgFaC3r7U4tbwE",
  "key24": "2ZbxHFSo4rpFyygwnJjLynLQFrsFZkfze2AMVGGcPbJeg12kEd4NbLUtQNKwNNQtVFtqKRSrC6wLU69gQjfmrP6C",
  "key25": "3HmiiUX5uFoRPTUM7p4auR77vGx1ZsmdWyHz3F7gg1MF2fqw2i5LkaiZ5gc3ubpbDqVuGntN3KsM3mdyWrYRfDMc",
  "key26": "eFgdoV5h5QmxMhtXovAgwCUDg6pMhhL14TQjHwFxLsjepkXRwVBH6K31gjYzQGyKXNJi23LttZ7mqSskLPEPSve",
  "key27": "4ETY4MsWdyLDw2r2QSUpSgxemipimZv5V5yRSVVBD134iC6sfyH62jmdWVZ3ewjAfd1FoFuunPKK63WkY55fTZAy",
  "key28": "4LRkUkSU5NYKTfNBx5TYMru1Sm28XbsBN4Bnht1MgsCSo7ZeyuWyTm9FNRVHgpL2uKDfyQEXtfviXzzxuS2d82nj",
  "key29": "4ykAoB7DRPTydFmsTPk31RhGG9D8WJ4uYyVqEJ6345Vaw54GN6hh4ehykSHKX7fDuW62vpEr23mpuabMN891VgEE",
  "key30": "FNaTmeFMGfd3qYgp5aWWRie7JWMAQ612ezoEVpv4q2jbVx244gvUxQ81217xD6UEFXBeshP7fd5hMUUGCbV8iwo",
  "key31": "5KgTHdcgctiiLU3WPs8j3dMYpKxqX5wPyCDteRVsihFHYXZQyxHg6FWYJi7iafqqyQduPkPdoTdiHT7j1QFomN7J"
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

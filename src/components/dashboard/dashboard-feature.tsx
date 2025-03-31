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
    "2FHk9vWyACQVjsCHK123jnjj45cyB2wWnYvzJdWWCxE5an4HN1kQUmDQUGdFqYqZnPezoaXEHKYpccj6gaErJnGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aWp5RNY6Y5hqwrFXBmZJrgS8JhCHQLrCcSCNo2LY8K963VfbWdE8UJ7vUSpc2xF5fNjRWobviLftXidVF89YfYE",
  "key1": "2FUwA2tM2FVDM6wPh3mQ1vpP1W8s6vLF4rYRYPQ26gdCL4VtKndX1FJ48pqS5DiQfbV3nKJuRrjPb5NL5a1Fp8qQ",
  "key2": "4LMxenkrQ6peacwzfN9ssZpHwvy4nhh2Ap88Z7GroAUSJcLeWe99Q7pbZdXjomEBzhgsNpiVBZsaCJY827qVYDKj",
  "key3": "5csW8P5hJ85G7DeEuavLHxvxE9Y49MPHkNrukRroX1mdVcWfJxen7FMvPidkXmMrokrRnkbDkqXAz6stxqS4ruwM",
  "key4": "3iNFD5qMGjxC3pbMLYDCLqzbVa44UvSn433GWKEPQZQhQ3atbU4u4ibKF6HZraXMQyKVHcmAhVMUMxwedqi3GXRe",
  "key5": "5gAANXmisPvyPUhSkX7VzmG4TfJon1etJ3Hnsv7ChVj49jUkkdyqxhUtvjz2iU3cSkF4TcZBjWt5pDoQF15xm2Gw",
  "key6": "2ChKp4yKoBNZPdmseNWJqU5zr11Xa2BEXz7e9PkChTRgdB3nBNWMdfep1hPuhCjTHACxWXzCpwoLMCbtDWCPq8Zw",
  "key7": "5AxqwykLsQvrvhv13peKYTANgm5Hw1QCtLERxXVXhAoVsFALYZ7cKAuxWovGh5krQVuT2oGDxF6eKWW3ouu35agJ",
  "key8": "4NZJsYFt7AvpEgsZTyqvNvgzBw57KK3FgaLi1Px1xtCZHRafEvq9ebgX1t2YeWR5C3etuebDq4TcvGSY7smgANMV",
  "key9": "65MtC6gDtRgxzf9NLDxykSaj66FANhbTc5RgpSkLyWGJRyhcB1ErDZLKGrtmuo46oPVcSZkLci784YCKPCECe4qF",
  "key10": "ikSeWAJeT1AqippkhuE62qbJeafmuMsF3yNGhpxDRLjhRtNqDENx43TiXgwnM15qe7QY85MGM1zjYqjQHddogXf",
  "key11": "3SiAi3dcqKSJ1nwc1XsRZpaf8xana2L9wTEbNGWU9cPm6xB8ZjF36aCu3GCWBMuT78PAvQoQY47BHyyuy93fTVqc",
  "key12": "HVLTz2rDHGrekSLH1D96u54V6tbrThGJKTrrUKFVnANL8TNW5LvPHtg4F6DAfFPNnLKLKYNr9QQVagiXGmE6u9e",
  "key13": "3kRhkZbQWAn7djLqfVRPbkVw5xXUdmk4eJeHJvfVLisaU1V2h3LTTNZGRACPMbucuhsoPNmD8XcH19aXQkgb7KzE",
  "key14": "27XAkhmMKbo9jZGa5T4GZTWxiBdJNaW1WCSJbwbWEcr4iu4H6qZcE6Jb2mw1DFVBcYxxVqc82Ahf7LbUMBkW2437",
  "key15": "6xm8v3EmdmTVbUC3iY6t5CEYArmmTrLrZepDTbpyhuqNiQw2JBAmdons3LAhc7M3xpL3J5Ln4ueUGDoNPm5jUK8",
  "key16": "3EQ21Ww4m3JrsQv3QbHYgGRzo7acddPSwPjK4sTeMdCH1zNaxJ2HvrAyXEMDHNJQyFKc7kxwmmvBj78uNzPA2SeF",
  "key17": "3bc2V51FptLCmrYDsPjADiSUv4ndFkZ7CMPioGZ6ZgmxxGyGBFi74zaKidJ5qTrqo5DpuBxBCBVXQgiHBSeH4SEH",
  "key18": "5SrerLNiFY35tPXoJVbeSvXEd9vp4eE6Wm3UitDWaeLz9etAfvtjHa3TLcDKRYmapYLciRSFaqjGqmE8pjNEcYMD",
  "key19": "7zBpDzxh2p5DNtkGAb3TaWmhFnFmNSN2g2wEirs5WJsUiAHrGf7Hu7Y3LTYisUFY74PZcnEGjdEWQACPx6tTgmz",
  "key20": "3DMRhUEz1LFaqkdjL8w7Qmhm1pZSitbwV2nxxpuMcXYVoXZuijt3s6VfBKcm4QrqHaRcXFWf9jqq3enzyU2o1fzz",
  "key21": "289Z6fFT6k5AYxgKhKchiN9LkhvC94qh1xD1i1QdAJRhJRgdr41oBNwV2H5utghtYCKJn9t61TnbDVWPDntFV8YF",
  "key22": "5rBr9perNa4vVJmwNqwMeyHFHt5PddApUotUxraEiX4oMJtsfwyECVfWVhEkkSRnrpd9Qbo1gDfYYdux7BxWET46",
  "key23": "51wRqMiZoJXgztgrn9MwUnXkVwdE7sCsSAnr8k1yUZ3MaKSVkMANVFJc6YSEtYKBYqb4o3BtKuaWPDu82vY6J5Jo",
  "key24": "4QkCDmpsAC4527TXtC6wQHgXF3vgxfHC49WseSCaACpWJFw28phGzgxY8SBFJXwsLGh9Z7ncQLn8GgiRZzYjrDEx",
  "key25": "gKwT4EPPPbduc8eh2DQxJnMasUZhcXQtcbF9nPVfiJ5uyh1Ya2F4a15Kz7HDNra2N7PCRx3tWocrDE5sueAuVNE",
  "key26": "45RpLn1iwoqKNoCQcsL2JPNX8YqTRdRZ1V5PQNBLX3pm6GsgrLDJn9ycuHnR35r87AzWyEwToo2aBmPgS2n1j7xL",
  "key27": "GZseBmTkF6krNQjiPcMLCAz2482eiKn7yaF447hj7Wq26F7NBiAc37NMyKoGac74M6gDRB8epB2JjQbpYz93cQt",
  "key28": "4tEEuhP4H5DNFGLXTZMyMbWqXLmaxs8SrvoWZX3bzgrrh8S7LDEeE99XJAjdbGFeTv3iNCmfbiP5pgPVdG9fxUeu",
  "key29": "5LisZ8wwnKuhXH8weGGnmCX5bSbd4fprfrQ6yMbBdhhhXfYcjkdWb5jnej9PwFeSAY2e7pHQxRR43P4rdzhg3TyG"
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

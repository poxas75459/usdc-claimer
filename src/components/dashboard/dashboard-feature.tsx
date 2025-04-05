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
    "3QtwKa29T4T3DLNSJio4fRmd2asL8siqooGA9J1XfLMWwQMwScVL7FLqpMLK2GWXRhoeAwo1BYXCypuN2SDR96RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oD6Bqm4qQLpFjRcP9mW25hFjfhV2WB1MUr1AAXSE2pEEenp9WsZezQnNXVD2vSUjSs5whqK4ws3uWJuHBJxm1YK",
  "key1": "2xHRS8caz9wjzYJfxSzRaJqdbnf72x9JQwmfZdoG1aXrw9CUje6DXE28GN34H8mbvudTbCbJnwRmnv5xLmbX396Y",
  "key2": "2ikTJvgfpgJpJrCdxxYsPveCHQ98QQg3f4uWcJHHqdSiuhmxo7CVheHW45vibqWCqmXXx8ena3QL8TmcFmM7BG7D",
  "key3": "3PPaHhy8452LsmeE4wD4GWeiRKj3fuUMnTmt426w7AprumBwm4EXqUbz5GgBGdvnCwQWUb2DNE7MsVWkJonSqKQQ",
  "key4": "Zn8Waxvi9HLEM6gSYhLgETRVr3YEuyQeumBEdKSpRVRQfZMRBB8FSh6KAztMm6nyWnpgcxAvbXQULK9Y5VvtgBA",
  "key5": "5MrnpR145p1C7ftYGX1UtLHaPtycqc3ULNM1BAkyUXoem5NQtWYTzBQ3pyB3aosLu8vYr6YzPz1TuciWqQbuYS9J",
  "key6": "3qf7KbCiyN2CdSE8JZ4nNYs2dDipuZVeqauAkySKmrUusYemHB72gNoiM9CHCeJKN8knjda2qJP6iW5N6Wk19Ksq",
  "key7": "4dffdyE8mXjTnWp2vSjNhMNGXg2CtE3HAUBVSC8uJq4u8TkWrhX1KQzXAo1R5xQ57YCX8f6735FquHu7Lxm4wJR8",
  "key8": "rU8s2tqzuo4DoL3ES1i18ZD5PpULACSEELPRWLN5FUKvWT712kheKSyUCBv5QMmCyEzHq4XLuELBn3LtqgfFV8t",
  "key9": "FQaT3BG3hmSU6BTPcNiLtmmRGzR2WW3pqcGmNYkX9tCAXb7iGteFKcGekS4WKpAxT7icgj7YaCqb1s6KUggSokU",
  "key10": "zfREfFbvZqXohcUXh4gNp9JCSJAnaNYuyeASPUqugZKGGSnjCUzkKyprcr75jxNb5Ydg1i5eqVdsMtKRgkz4RNy",
  "key11": "3qNn4PPixGBz78ynrpDQFsC6SL5WUBP6ac7TH93TJsKCoQQt1g9aoje5p2mC993PeGHbqNqwUrRpHmt5gBrvMzit",
  "key12": "yVgnvNpcTesrbZU7e2rSQxCdQbovuHBshQGhPmeGSjj8VcSWxC4eYxd939dKymXQxdPtTffDZfPmYNLXbxER9Dp",
  "key13": "3J4brj933ETaz5XXpHFTuxbnfqojNCjV9S5pSMPqUGckUtG457dJP5dTj1KCRtmBUQCqz1J9YQmks7rsYomaLV39",
  "key14": "3P5ApZQwrvW8gJythriLp58Q3NKPBbSroFr6dp2YX7VZYZXoWMGP4qWgosMZBUxR5ySgjwqUBb5pmrbPGKoXVxkW",
  "key15": "4aXSfzc2Kw7r2tpvPDbj8VV3E1LFgenPoaTJqJtdZTnUkjwX24JnfcfQi7dN4km6g3Re3KTNQs6cstMZjFdNg83E",
  "key16": "42vQUF2Y3i9ot8t9QCC3kkGvZfH2waFCnUcbabW8Mzeum9mLfKZaGPi5qiSamA49WtQz7U5aaoy8LK9z8fdQRJcj",
  "key17": "48Uc9fbYLooHvUYR6D1wmDV2XdUqNMSUa6fVcx6R7RA5g4ueA3u65N2eVcsnY5qafkB3ok11Bs9Ks54B4ZjW1Wk8",
  "key18": "4mS7fWZnSpdjKjnUwZ9NYogC9eNFBg7qiAecLeX6tcoEXk3UXGdvfD1Szo1uMiMfBB3QrnrF1gz3waDqD45Z9aa1",
  "key19": "2ExNqrici6JDCS1z4Mtd1LcGLPJooqyPqcduGt9AqzTKZ7UQapCPZXKoQH41iXUtazSEmhQPaxqxFbxYbbv38wb1",
  "key20": "2XTdntAkvWJgNpEcQ7WkBxVGLr9fYY7iUeQgnpwCbFtJ1MpEhov3Tu8vu9Mt2gKLFrfCUyBqbWEzeRJ1DThcMsTg",
  "key21": "4B9Yw5rRm3JYv7w3K2xq8YaDMPp2wHbzRVJJ3K4jG9Vi6nQFfpaQLyiX5P4Wc6oewDrLa1ZVaVpUMffSTXUG9PYJ",
  "key22": "3v6XXKnd3DdUmJsriN9X6gsziXr5VMy2NWFsr7HqXcAuio2cuJZ188TVb1aTUB4Z9N6umVXoJTHHRgQ4ZNwV84e2",
  "key23": "vnKGigAfPiEAVa2doRc7WFF4sHydf7Rd8Pc7etTZJ4LuMYwy2HQEmzkDN4wZh4aLpG3fK7e1XGcDfLNngj43sqv",
  "key24": "4sa14zyHE5qjN49dXxzxJZBaDeNFTrBjoEZkHZqQqjzJADd7bqPfr6jjBtXNsmn9ovzAEPwzbZFcmYkqN9ScAC85",
  "key25": "aWh1KsgH48i6WEKGVDUbL6pC6WXRfMBUs4XwJZDWkS2cXz4XN9ahDKXVD9hB9dNHNDVFhKsESWVBmn8hi6NcqVc"
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

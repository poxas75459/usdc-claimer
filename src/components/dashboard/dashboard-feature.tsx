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
    "vfZmAsgUVYQNXVGASRxMYXPffbeNaAsEnx3W3ZG97vEGifXsYxH1LDReJtzGvgqNh3oFS7hLokfS5oU4q32j3Zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5reDoUMZs8juvqGwivCdQZ6wTRunCxJbWCA8WGuzkCwrZUPqfV2Ezm2Svg34dMGVGzCK4CQbYZ1h1UMWMwWc1NKV",
  "key1": "2BVUW6cio8QQb3NGAghfUWukZydSPtXvDduiFJEoTVSYHVdgnK7wEBieNEbETNsWuQP2yz1tgnGRnfNRpNEyWAt1",
  "key2": "UdzaYSgnci9UFhqzKXgJUgyfhxGpR8LEyEdgdQ4DQTU3gaqVsQigHAvH2xEQMFBMNojDmFrtZUQ9e4iofetjLCk",
  "key3": "j2ApBSP3Bi2txJjgkRxbDTPQiaFFmHQzs4ZZ3BjQiQUUftnXbXZ9JPjwExACNHX76jJmotPEHBtNGreEix9C7oL",
  "key4": "3fsySubmTnRBhbuqeguYVsdV2Pdye3Vd9pxjsihKXbLoFDjiAvWiUCbMZer1zVNf3UkRsK8rqCtEmWmCijEZAqcR",
  "key5": "4Yn19qFqSmuszZ8qjNWVchJJYUhR8sou5QxLqKxLGv572dESLnvQheuxx3CXfqenaZ9LwrKAD6tMUGrJP1X1Ad8m",
  "key6": "5vx7W8d7aSFX9cjNtEAjBQPDv4GCF45nc9V6ASVh8f4Tjfop3naDbuHYAUvrtrLJmkGGjV5keo6GJYodjJwuB7gV",
  "key7": "5C3RFhCPh2VCvvS8i3LPkqRs3PeEDU3JkTxun5rY9CyTB643TBWAvjBwKw18yz2mhkSZNNpwxc6wvFLGBrUWHGyk",
  "key8": "4iH6Q5uSvpGVohCtbEnbxdiZceU1JdhYMZwraSsyz2MWA2XHPZ493UH6KZSuisBMCX1f4LNXmXvqxBwHvLeEa3Va",
  "key9": "58oUjJiHXQ6ZyMjfZxCb8TPzYGbyuVFi2zeUVa7TxjEU7GEDxYxcGTNZd62jTQSzXMnYet577CupUWpUwW5sXEYp",
  "key10": "2NabdJUkrDA4AQe7QM46JZWu91Fgz5YL1zjRdpzGgRUgUGnipG5npNTo4HmuHH6PRG9y5BhLwyaEVHWSKuxN37zz",
  "key11": "33hAM8kzRpmpoLshnwdVCyFhGfpZ46313kmvw4RqcHhuFow4Av5WCSuo7AobRaRpxXzVjkAV4nmKyk5QTPXyALJK",
  "key12": "5AYDkos2mUwdGbD6wU3g5XNohv8MsP3CVYHXSaPXgSXsKwLfpFBrc4SNvn55Hic2sgPAZW2yK4S2ibCmk1etGdCv",
  "key13": "2NmXuoVciUZ46JMUMTk3mbyXectGhcZaFsLNujNFeawzBQ8bMKY2YVstHQqwSctJBPRqWmC2ZqoZN21vQoH57A6T",
  "key14": "2h6D5Z2UGPj4rih5t8fKUP9XCtz8LoaJ8opSbg4UwTMYqBiEjynnM6SpchPVFnGoN49FJbCMVKLn9BFEk4j1azdn",
  "key15": "ZeVAxBuhmn3FjEwjUzcABfJDf5oqGmhf2PJtKfasASZUveYA7cT3Xt7qAYd6aacQ4umjQ9ZKus6j4Hx2BkwQVHz",
  "key16": "3vHTWuu77YZJL3k8JBNX8NyZGRCxaWzbiAcSAVDFuD2Vr9MLbQFT7feaUNTeuUZfxNoJBP3seDpgmgFVXXWrxaeW",
  "key17": "2krCRK7U3ZAfaiFyEtWMgiofeUuNNmqWmwkidcfJqDXqVv2DGY89iq4cpNcWKGVp1ADptnySQ9dNbR1S771sMAeE",
  "key18": "3NbJ4ufDgqVHg1qXq9DNNktJh6erN7wASrGz4tdgzEmioPrGEvJya9j8Zmyny5fgyuc9NqNmDmAwFeEqNXY4Ddno",
  "key19": "4P9cwXb9P9P4XtjxQQMudSN2BAk3DTy44heKvTrg64qAtHauAfuNUbaQkgq99RBvkZpzwLrnj4DZr4J1fVjtiD9r",
  "key20": "4YD7znyFEUTVRuFegiDUEuTSmdKT5sqCXFAEiLuG7D8a1syXwWfr3zxLr1FurVHM9ZKmAGHeLYNaeR8Dh8FNysEy",
  "key21": "2jH5njN4XSDA9ZqojKXw5Fh8arrUKLtzuxuMdVQWH2ksPs1V8SN5YUa13DfhyG6oYqSAwgZvGsfg6FB4Q7cPuSdk",
  "key22": "36aj7S1x2SLpvBg7GGTwue1B9pXcSeMmdQ4rbuQLMFy93Hd5Vmm9KiZVqbwbue9McW4XdQstrV9154hA3m6zxdZJ",
  "key23": "nDa7JhmTZc3GCdBVzynQrcMt2LiPpYPaVRt3DBjigLTGdJrL2Coke1pKGp8iHHNZxSWHQwufWDKGBjaBb75rgD4",
  "key24": "2tDnLQd7fkwgE19UqoD212bE1ejo9Hu7J6GLvXjtfNa1ycP3F9iLGFkMpMmexoQtaD8VZaAMioYzra27X5oo2goe",
  "key25": "375ZX5A9uZGyqvsGEWSXXEUhzak7Dt9QS3rMo3EmuWP3rfMMoH4F353dvGaP5iL5yuWzreqPTTxg1u8WLsSw5hSn",
  "key26": "4ELUHkaHd6GWT9dnUWxiYt6ztUaNR1vVx3xMMBFGw11HXQrfQHwSmT3nW9Wt3eWXQ9Y2YYZoyuoTeb9u4AyzkyCp"
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

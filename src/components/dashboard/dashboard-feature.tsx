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
    "3zWqnd3wUWWey2JehizWGtYZTbQmR81Z1oPN9D9sjYqrVGAEQAfnivcUekhyBhG9AqUvZjvEFZkfU9kycU5Hw1VT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DQB8sMkyDNehw8s9xgDFSf4JWaZM2AAsKdRXP1Vchei1LgFppYBTuYbsq5a11vHfotjdcNqYzvkFARua4uw9JBB",
  "key1": "4wpipUQapi3KtPM34jwiXHusp15RdV2GvyLriedvAGKCdNULm2mDSSCbhd2jk6QnaeastadL2NNKVeXvU4wmoyNP",
  "key2": "4ZTXfLUe6KTujgscXnTsiq52G2FZqvrKoMuHYMwuWcfHrFLU6tPJrv3jicP6mxhXjs4o9gPdakjrodNaZeTeqbRH",
  "key3": "25mri2p3cfdhRseSGYw3dd2kG3L47RUQz8YkqewizrdH57tJ9sgaZTfYHbnwK6iuyZALX91qixjYn2FBo2NazPWt",
  "key4": "4h9QMeyJvCWjhbBKJRUi5fArHbnEksAxMKx7Ezvvot74YUyu78Us3DThkfjeUSA5Av981FbzSk5d8iFymdzjtJBi",
  "key5": "4WGtrdvoA4RuPUjLRQ6gJpiiDGhRh3H7AqEEBKGWFBzJXSyw8mKi1kufTBD5S348HwhzczL58mfaWhwQD6KRCVyF",
  "key6": "4omMjx23k719ALDmv8WNvHH1ZP426m7epdnoTG2pBJb8LBERKmoj4X5cWZZdCHHcGzEFXHo3YTAzBXH9o3PaURf",
  "key7": "4Pm1io1kRUbedFXujMnVTrDz2cUAphUUSMVJ3GBiM5deUckwkEmhQgrtWifVtaZqWX7Zx7Ee6ke8rtsmCD55KVAj",
  "key8": "3EpDgjYLdNx3dHyqzJFiGyYUN2gq5tbkbnEUcTgLno36w5g9kJso3cVhYKBvNrDNMeD24Y22SDcY3HRBHdQT3UBQ",
  "key9": "3ReCiom62NR5YzZG7XGhPx6kRsvhwSuXh89VHFARnT57CKKoi7U8FpE6qXMgZ4koxckyrcyQdKsCd7rEzrds3cNZ",
  "key10": "2hxwBZL6un7faJwwoCh5ja4WubJZaoipuCqCEDNzoSGmtHA95wi3patPTVa3mSbCnfj3c6WzKqsGFpGC6Rds5m31",
  "key11": "5LBxocAdJgmenp6B7jP7Gx2EYX4WybarSuxPppD7XcjEdXh8TmQUhGPnipUidRVyhKCHj92jD5UYnUi7NmnGrX2b",
  "key12": "3Zg79XZAbE4g13SWoppnXm8zT1fPdLDuhEDfdfStZ9Txq69yskKschBhHP49SmRxigY5cwnYdiRWATTYRZBCzhgK",
  "key13": "4dUqEFCYP2JV1hMoRJAo1nX9H9gUfbnLU758Wo7LTkirHULozda2g29jTFjdGJEhrBq5LeXtV4i3MZzqSKJ3WKiq",
  "key14": "3Vhcbf6QMp7xmgWA1yWFZAUr1BnUoDgZ7YNra9wE8Fbtay4EcinFGF7YFCCddjXRZLS88ahqWzTRY9Wygz1GEVZ2",
  "key15": "53XLMkfvAMLpPb7jfY1GtKRvU1L2DNKZDz9r96i5F9h5RaUHHx9aNSHxdTTiDEpuTxAwyqVM5wtvFxcFi7k7XfTJ",
  "key16": "3u6CVUuAPm988Zz4kWA416zzhuJbDZ8eCKyiS836MXyUK32qHPxPks9T6m11PrR5KkgS9QnEYaVxUBoWumznHEN5",
  "key17": "CXnE3ZQRtVGSUnYN1ivk3CvBCxeexcS34gsSHtx7AgBzUPPKLVHUuwM3BTcobeaduEnYEWBfd4JZTrzT3j6a7gz",
  "key18": "3YDBWENPKNyj2XYRUHGKc7Cs4uVhRyYm2yTpzjiwZvE5cmoZuZei9o3ossSY3PFe3xbrbDmU7weMuMekdVFBcc43",
  "key19": "3uHNucN2ZWLj49GHcaLnqC2stbC4sQiSJakZDR5YhRTTfPbFDmMMmQ8KZj1JKBtZGTp3WQVD2F4b9QD1ZFg3ykov",
  "key20": "2q59MGJoE6pyrUN4Ph3NNjS1ANa23Gp5FPChRUdiXxPB6oC3YBDmjdqB6MntdWb4Rmmsfvg5zQh45EQuLme65Tag",
  "key21": "5M7KwVFTuFacHxRSdFridcK5bR2MN19w5efSoJLQdfL59qeCGajnsJ8tuTfNXp6R3csF3bk8LQLabDtdWYpcV3K",
  "key22": "5KWNutrexQMcxcd9UpbF14Cynj7C3ViVBqbhW3tYNZvmZe2AGiHEpp165MAdc2agvfRFeGWs8fip2mNVi2xqqgEc",
  "key23": "51jQBvKvdK9szSvyfvxi3DwTnMQkCwWLnQ34a29Xf1QGtvF6BuM7rszsbCWfvHAQg9AJ6xR8L2LyzwmZeCZqJ7Tx",
  "key24": "3zAL6qNAHyPjo8HssUjkzC9bjGpumzjY4h8kErWZhE7egzTySpfLdtJberCB9zHAjtBTNny1EqABJDy4aZ3nu8Wj",
  "key25": "54keFpKP968PqY9pT5Gqyod9b4vHv8FCWZAbNonhk897yFLqiE47xXTrGnjnNJ77vRwVQkTqNJTMopgPRwssvctu"
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

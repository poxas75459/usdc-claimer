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
    "3jN4Qe64xnZdLCxTPkbtK5JgXFU2jqumJ2y5n3uReQatjDv5sDUa35DjsZ2fgdpCYuyVedR3vfEDR4cCErVacnWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b654Yf384S18mHyZxf1To2AkXSPFFqQfiEEAErYc6SbeLFNCVM84EcoYh3DS3X7aK2ZMoCrjFf2RfR39Np1UfM8",
  "key1": "aVR18L11sR9w3Be5NYwnwXt6GVZBNB2Q4Cxq9TqA9ob3S6UN5vuCdw87nGUP9rbZKJMCXd3Qrv6vWMdNfLiv32f",
  "key2": "aSS4uQ5Gzj3z5obajdKSeK6hec3iQRwPGfD3apKHPw1PdVZmXupMPdwXxk6DyDWrM7BgBHA72UWANMuDtE6XiJ5",
  "key3": "2dfCggvvzUEJmoBV3vmFr8mMiHMGUfrbnjZXN1qhbQDdhu8cVksX2eF8jie8VSWCuiVGFsft238KVojw2pCJHrvT",
  "key4": "2Po43xZs42AQkqEN8WRqm3LWeyhkRExC8LAAJN4tzyYYoiTDDS4qPFxediEQ8GU8TkuMArmkJr2P4EjEvoP9TYuw",
  "key5": "5GtKorYxNjtd9rSbWWrAk8gZGQ7W7jVtZumfttDi1HMCcr4LrphxDimUfCoVaw138uLte6EubKjGUVE7tYucRgnk",
  "key6": "cbNErEMPeNQd81m6d4zw9gBvEojJBpRvWfEWXe2jpc3v4LL2xUEVbEbhnWjGBMCEoq2FXHGz6HjxpgGTKRaRmqi",
  "key7": "3sznJXgUSdzvQ3nFMNBgLD4sS2bT6FPs3Dp5fUavarJUuL9RUW383Y8ze6eiWSRWPWuPRyR6tkVFPaqTzY9BXPiq",
  "key8": "3K3XUkWnCJGw1ycRk6SaFLAkGxr7U7pWMx1G8LjtFUcYqXyJ9qAJ87RTMNXYs1TgdYHTuDDJb4SedhJcqxhu1XqZ",
  "key9": "BP3MTFPUR5M4DpCFN35ENWgZXpjhaZkzCkA7ZHbLequHk9fmCZVhq53pxmWc84eQYbW7odVnpnQSiWzPAYK8gDf",
  "key10": "2r4y3aMh6Q11Hs2Ane53pzLcft73ZuawLovErRFrWuFiSLaWXLW9miQBM88ePZUS6ufV9dXP19dGSHenKuPGzNTS",
  "key11": "5HCSCKpg925VDDxTUHcuea7X5k2dE5isDaizgdoVBq1cmcA3pn4XswqhXFFoA7oULzXkRog8m4jr6tETdr7AF6T9",
  "key12": "3PNrmUJw2uJ6DTaE5tnKx3dvjB34sWHMmBAToWBbg39oFKVrWzPpxjMvxQecMhq7FBQPTuZXhuf6gv2rpUhJfs2q",
  "key13": "ywC1TtrxL7CbnxNrePqjdyvF7Bu8eH24hNyjceGjhb5qn8tucAxCnQK2RBKSTDyZcGHLyPnJ3XmgDojC69uSGLx",
  "key14": "4Vh9npdKi96n1GrEMb2VSabJizkxBCatwkWw4TcJHBDuyFeEeCPpftELrfdCJpY5WjuuXgnnmft8AJtbRafpcSNB",
  "key15": "4jxke6tkRW6KjyUbHy7RpEsqr64TWyenqNNLeRqJxQHbyKp6NmacnEobCpoB6xcCzPbYY2zUMKyACuQR3C2uaUBt",
  "key16": "akNHKcWetXncwYmAfL23SniKPrNzuBAgxn7LKPfqRRebLbGzA5y8RyyfVEosLC6b8cHx41PR3aqtvy3cGSVBBGS",
  "key17": "gNG8hr8Nu5FQFgz9UPTTTMAQoFTGYXe8hnXyfGcKTZK3BSmhJmd3QdN2Nx4ajJcjdPbNoe2nit433U5WVnUnd6N",
  "key18": "5WfqkreLFCYoGDasZyW8ptF3zfst1ycZQz8novAnGgPQ3vKVpxNR9m6PAYABW7X2H6BSwtRurUxJAeAm6cZfGhsS",
  "key19": "28hV8okrTgbxNqk9BHP6DRdxV19cC2TqAzPdVP16mTjGDn4Lxza32WTr9cDSCBbSGx546nuxEAYnaTVXYHSMb3ar",
  "key20": "5md4ZBt3FWRppKe9GZ6S7RgJDbCouQBQPCasN6muad7GcNCNnyLVNo5KX6cuXpQYsriNJ9EDZ1Kx1oAfGnDTP8YC",
  "key21": "5cj5Nq6hZZWrdaHazwe9gCNeB1TEV4CPJ5shKSQnAWZkr8sNFeCzxNkWvt37Av44R2K3vJa7BC2YowWguZU93T7b",
  "key22": "59FawfhWuLVaVTzMNyAmKdK6a88sTBo8tu5hadWw1LuPbWUU42Ms483TXnT9YqoHgiMCWDTi6cGrBjrWYFEr5bUG",
  "key23": "29Q1oKP9WhJEbhPR7LH88wtpbSWKbSyW8xbXb2TA2KAYzFrKzgGbS9mBwGd41khmNNrAue68YdFN48sm6mcRMooU",
  "key24": "jwFsNWdk63i7STPJTRZJYG7feaeCJ9aqC1UG1TBisd3ReBnLBsQtreUcPeCesgrm3XYnbQnGRTb5tgoZa2mKCdi",
  "key25": "KnvzDbjFqg7U6egojtT1qguRgJMApqrYQsKR61ctU4NZvThq4R4iFsNEoVL54orZQ2dkzpmfbPfnMuW1Zv67ZeK",
  "key26": "MGZvp1MAi9DnWZELSGCDYNfFJSU8nXfTa2q9TBAgWXBahzQhC8D63jQy69pehSqMHWSLQvMW8kAAkD4YjJ1rZpm",
  "key27": "5ZR4TAVT31RiN6eVPxWvTrfLRcrpvKBjgoU5bAbJvXW1NP2AW2bKFeKwQ5y1HitbjoG651G7qtADjScmEiPLuQx1"
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

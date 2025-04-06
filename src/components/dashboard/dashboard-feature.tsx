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
    "2ThQrtTG61LQHHNm5XFNKZS8anraLNg95YTBe9wRPQniakLVzDfiGBA9tSRPe4TBvkaTjAivcMPPHw4CnC9ufvwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xFhUx5CJqE1ukPCTYPKFwE61DPR7z15Zr5rdLn5Bem8ub7pfqjWsVXHKf2KLdYZFg6U5bNw7bN7F7ZdLNxp8UTv",
  "key1": "5fMhwcfekjqKxgoBGTb6JwnhrQVwyohXojBbRXSdj9eefqJ4kA2b32s2DGrotEcnDNBt6WZcTsnsSTHYG7GgAt54",
  "key2": "2LqGAwhjo2ZsoNmh816XVMaRYxCy445oK5zQmq5n89EZKf6UWL8qgV7VSPwmXxPGSEUhkBvKwCf3SGnhTdyaDtD8",
  "key3": "2EUL8uzrzmPdfZApwjpUgPfxTJBzNAbS9CZmnmNtLryExGuWr36aqBV154y8KCRfE2eTZ9sJLFJGMCpFfHqFrg2T",
  "key4": "4f5TDKMLNzoGePfCAsEpasfaGeZvdfDD5FErupwuF7mRuxjTrTV2tZnP1tcd8PvMACEzEtzHm9AG2eNudGSccgxa",
  "key5": "oQWVzBeXRFf3rFbR2Q9ygkWLyeSymoGFrL7VWt6prxmHgPnSZ3b67DUzKvuFhMjtUfKYH3xdPLpRRtToCZ24a9i",
  "key6": "62PaMKEFHU7TU62X6giLvZLE1Qift2qX5YbffbVYQWELmqJ4wzrLr7LMFFRisr7QqSHvmAQwURmyHk8oXHnDzzxe",
  "key7": "3JFU2MphNiwBNbV2Dvq5PZZyU65TcLW45XvTMmzEzAj37vaCbPT4wUXeH8mMB9qoeJdRHaziMbd2MwnNGXdwYrof",
  "key8": "4y7oueHBy73bArX3Gnhz138vEVCMtYebBqyTqM6z9wFZa7fxoqfi8La5L4XkEuyPySE9wBHAoBBaUGDK2Madxthx",
  "key9": "2oxAd4WxgMnhtteDBBmmJ4Cqy6cqaXkqHP4ECdvaMJU6WTYv1mQSxGbV9fbXQzd3por4kyrvRK5xECQpNJeG2DGt",
  "key10": "2odtJyPKTNWTU2646bYNJ7jyyFdDjJ2Z3L46f624FCCf3Gzbc3cMAedvp3zubKoWAvUgXphmYhfsmJFDBvPUNmHc",
  "key11": "2qYZx8jnfYnPszPPnmcUBezjcF56T33bJteBXmVW6cfhXcv9dT7CpbzicS7tCXQpjSszqVY1HkPDMiVd5Der9ABw",
  "key12": "3VWeyKBiahXJPpc4hSb2H9fwmMcUgsFXjXCKSxHGHfLYWaGo7P6HFkRk5ThjU5epNLBtXdtk5iq6dj5tk82UdBUz",
  "key13": "G56QyyQ1R6PasaHNinStV6NMDkwV8qbgtp8MhDg7FqrNEHx8xCy4stgvzrtde7eiCshzSjKPgm1JhLwNQ3qnaTi",
  "key14": "48ja87cxraBEfCpXEHNidHt1Cy14mVrvkWnRrfTKLQvnq7GqBW4qkC1ShprmvJbpoWnj8U7jYG393WANHCT4kXJj",
  "key15": "vMfcwNwUwFEQABnC7vKEuxssj5cgPE9UAfpp2QbLTtwgG1W4g12LjWTukqkaGaKd5gHTrSzSo19jn4fJbq27deZ",
  "key16": "2QPengnFsa9pRf1y5A3vFreTVYLyCp8ZWBnSXHEijv3i3DpXPFxWRa9HvMbuZiCL4s3Lsf7D3odkqvCLfnAbwMfQ",
  "key17": "665VKgK7CnYEUNM27L3Y1duR6mw4CYdfaWCfShwpHPpb4nbj6WTxe5Z1wcTmLNJ4EisWSoEjE2pSda5MocQgDkGd",
  "key18": "1QrqGyo51Ys3AzgKqzPWiPd9y5cq3onF6vp8yGzMFyNzbh8CD64gBLxbKQA35hDfXT5F4Wg6yxB37KkQQCn89sw",
  "key19": "RGXcF3cxhKyfFM9NnRNbhibPv3aaQGySvLuFLfz7Tb8jTHGbuDmnuPsuc62qsvMdV9SvouQs2Cry4YkbbRjztRJ",
  "key20": "on38f86u9k3LDSD3HjPJsNgfmdG6b7qKQ7Yxkh3Vo7cAtFY5jmwwA8TFwgA8ypz72nrtnw5vkw68HMstsSNunuA",
  "key21": "zq2EeJ4RJXEBbKPT7WzvanGJqJs9pFqsMzaDWe9ntGbAF19vhyG7GzGk4hSv34pCBqM42FwgW3xULrpoA2cHQBG",
  "key22": "3SLhjrDVenfWayDoHSAsBEtarqx1ZMTCNjsErPXXdPdqSy2uynbte5DH382KxG2HyFm6Ut6yqJuQfuRoVQGJe64o",
  "key23": "51tTZjpxDt3k9ibR1iRccPydKb7X2N9NsEnqfZ2asGuRAz3T8iBLYyv5uomBPnLuWL5pDTB5xdNm86Hja8tAvLgp",
  "key24": "2kMhvr5Z5BtSTnt8kNwhvAjXNyWDYZBDTrfDu5UwZDEBwx9CKHx55SKQzfbBDJQongVYFR6iWmq2tVZpVe95AGo",
  "key25": "4hY7Xh4UdzGixUjNHLfwNbLbHYSmfmZZKoBjkTyTroN6RQrKoEyXuK6XuYqY2Q5f3awp6cEKBF3mm3V6CMUwZuGc",
  "key26": "23aTQmVKxVPsGXDYJjy5s4iCiWMVNVN4XuNRfCv2fSyBf2raKdm9WsPwWUfCzXMM3Fkbk8enMWfMBynvykjhWvJc",
  "key27": "2Cv16aZMe72xnYmzn6q4R2aPszmCiqhSToZtxKFLLKkLEDf3CeB5mAEF3EYmDapusZAGpksbsWjSdg2MHngwvgzU",
  "key28": "326FabDchRrDPDi1JuuXV5d7yS3TaMuq1y6c6YNhSXZ2b8xzfycTLEwLYhRv6ZmgYiq76jBF6oq7SfzYuezvsnkf",
  "key29": "2G2UyB9P3JQC3M1KKPmKF3ZXNXdcTg2a3eP5kWkeG71AG6KT5tWZDMRuEFmkhV3ndpRyPX5kjfN2y1dRfXMq5mLL",
  "key30": "9P7uA1KhDN3p2WVF2GJNK6xpFD5uPSE8w3pjz6D4jTNvKJVCaX8bgo2TGFEbewp5ED7mdVxheAMfqn5KhzcAjd8",
  "key31": "SKAZsXwe6FfPRVtihn9S68SGq7oYzrUC2PBK8oxqMkMt24Xu8c3y3iW3XrZkoZQ641aBr2G7GB7DTcaqN5bbPp4",
  "key32": "Pj8zgv51YafuuQNgnvK5of6CyGS6hC8mjr67qxwKk7Fiqqd9bY79cDeH6FHS8WW2XS4RfYiuELagx2puT8cdaDX",
  "key33": "39j7ZbpoFBoTL8jGpFGBtACyBzDPfLXu4zETBPffYaRiUGTN6SnZBiRucRRPNqy7WtBZL1fTSupPvpvkLPpH7NL"
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

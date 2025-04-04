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
    "2fwhsjWAAUT9981NMSQT2s7PCSwog8LTu6vRc7nAopvP1VnEnj8tUQeMSxZBADCY8uEKJCjk3jjtq8Gs24gwwh7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6Sashk8zc73HgvdM2wKn44srUkW9KjZHeDedGe6DgDUZingSZW2H7dvXGfoDMJVfbtZNdBy1MdLQrwzDdDeRkJ",
  "key1": "3pHvfbCTLZ86QT2ZB9bGVv4m61LJZBXKWjBWf8cf66AcDj9TfLNhZt8rk3z7ngec4c8JdoCCP6oaBfXsxvZ1aay2",
  "key2": "3JbLevuioZBC1QtAnDYLeuKx628fwusMvCkC7P6BZZpJFTHFybLn9wF3rALHLa7uGoaBPZsbudqD8HGUPegBNEH2",
  "key3": "pFbEtU571CCVUriysMBbG1K4tUtAtsyLQCi72YX9bymMq7Jdq7oEpAK7rpfAFgBFpU2gQ1hv2MNjfawwp9yf6Kz",
  "key4": "5Ah6rUUPzbVMeAbA1VQNV3rtfhn3SxkoyHoEjw1Bg7dhzcdFfRwPncsSoaaPuPJTYuCxkVvpqAdorwGodsBcS3bC",
  "key5": "xHvLCfCnaHGzLfg4MLm85CpkAHkQfaSz5J3fThsqwujDRyukdRUty4XZWiPmcuxZwsoLv3h46tQrquF7E5PdE4d",
  "key6": "4VS76wYbnNsztqusjTYkXwL7iZiKdNM4Qi3kCZak38hkenvREbEcPFo3yVJWNH5zq2mmV2GcbiWSKYujutNnJxqx",
  "key7": "4ngfyv7YSy6pdSh2eedZet13qVesfsrp373FppbRA6DxxDEE7v25CopFSAkhQcxoX6GLoSUTQXsXQ9aquScLFZXY",
  "key8": "1fuFX2yStnyck9fbmiNSBuupxGznfhhiTRZfX27U8Siog7NV9dZdKUQ41JrKJCXkP2psuJ3tyGxUCfQJi3mx6qa",
  "key9": "5UrRb91RxLkuVVYnBJ31YLFxqabvdRz9LJsB767M1noVfqGmNCJAnini53pGi7dV84x1p1Cicrpr7z1JtJXJWqqw",
  "key10": "3Wnm4XisoUDgg1ZcnCceB23JWpM9FoKywoCDQnfCwsTmmA9pk3LBkE69zQme1ev1j2e9aHE6p7gvhtXnL8RdFmvU",
  "key11": "2JfUANR2gzmnRpSqEfajZpeVBofRBBSBoNYgzZmxFcnSQxc5zqR1P1wyDawXBcTXhyz3hFNgLuJhbCKtccv98oEg",
  "key12": "677U5jH1FPjiKX3bc5fNr1qvQBQGkaaYStPi71y4Q2DwWzeSqRsDdVLf7VX1kQAnPdcwHiXt1X9nCZhC5scvmi97",
  "key13": "3tpKaUzGEezFsEzvVa7NGRfcsXdMNNms8SiG2e6T9QmukkhnUnbo1teE5gkHfbCeG41sxGJ7feMdXxxGKdP737K1",
  "key14": "4veMw7KSWzxV7e69hUcU2pgm2C472rWee6SqEYSTfJfe3Ej75AmUCXRPViJLDCRvNxQFwNyp1ZgaLG9R22UJ3BaK",
  "key15": "oiSrJF1x2cPPzKKoUPVHVrZA41VvUfZdGAc4VxG84vGnUm3cWPdB5MenUxcZN3XsFdG2vhyygdL8e4deEsZdgGv",
  "key16": "4jRhoukGozV9TBf9mdBxdomrHN9S37R58gQM8uvcnRJZnxLho67CNNLYR9K5kxWbG3krsx7TLZpR1zCDTj5e7MmG",
  "key17": "hjwiXWTX2JWtWjkK1D8ypqaFoWSDmn9nj8tTazEdqqthqVeEgJxMPDYdPBR1CNpN9c2ub7uPfFkfpJNb4mvvft4",
  "key18": "5ESYakeLrP6CKWKE8LvZGkLK9bdbgbnvk4VYKy5ofikB3XfnU9Zf2m2wbWL8andf3kpAzesDsNcFkq1QZsau7UwS",
  "key19": "YDndvy7AXC7pFk7iUW66Gmr16SLDjUikmktJQSvKpU66YUsvS9JK7U216EdgDzRgR1WfWpWUW7LpxvFduY2Bqso",
  "key20": "5SEuJZgXQ5GuhXVMjDerwra1tCNiS9EnpfsQF42awfMCNByo8vEvL93rRL25WxbMbuToTjGBUXpUsMEBdDG6Cpd6",
  "key21": "4jAG1Em6T4eH3EhTc9ZPLsXTkYA7dt31fRXE712LLXkXHVem2XiQbCpcmayRWwLEGUFeYjqNXCswrDHXUBzNmBRi",
  "key22": "4V4NdhGGiNqtNE1P24U4tXqFLLsZLBxu8g5v1pDyDZc19hyLSbjG6NzQN5jNv28WqV9XWuh6CTpGwCdxXLpJEfTj",
  "key23": "2fDmtqEhzQZL5BzpPuv48igbw8RwMVb4mQR87rFfLvQbcb24QqX8Ti5rXggrnm4yG1KBP8rMLap5j9ixk22BDKt",
  "key24": "GguTYD6omDUsbsxv5FwL2Urh7KrLw4xqDQZD4A7t3P9ivGzdh2Jcrt3EmRH8sS1Y3ZBYXMfc2XteYnpvv3LyMQW",
  "key25": "3qYD8YU9SxCikJLoy13oCEh1Gw2DZ9KY9bFVBWQyd3we8r5o37n97whEioSEf5THvXeoPpxprdxo9aUvcuF2dfdY",
  "key26": "RmeKTT3yREg6fB7K3cRJXtAWbaUKyiX2rWmjgNdE8NZjhrBiqRyi1UJxBpkt9wStQAsiSrunQQenmysWTdyXbZH",
  "key27": "5GYUSYSVCaLna6LoT1TGGAr7ywmDFEAkbfKMEfYdwCyfZZESeDPknMZbW5GpnkkHmgM5X8CustujsmbZtwsyHPtz",
  "key28": "45nyzb7LbAyUmEiR53FmpErtmdaNGCMGj1TiAhov9xLhN2c6v2phMs14PwLTSbvnMfAzYuhiFasJkosY11YzqmQa",
  "key29": "4XMvdsEVGjbAfDerM7dze18ychiKfntLUGqXf1ZHttyEC7RzKQZ2uWFKnDziC6BWhAFT2KWqAH2niK7RaehGdFJF",
  "key30": "5BhL3LYMpWokiWL2phsKMXLr2yqG8p8EYn3ceu8bj5hF6EHrzZnAy11SQSkjfHkqabXWGF2PDt3oj7Vov37b2mXA",
  "key31": "2Dr4W5RGVhpa6G2fJFgUdTdtmGUS2YN3GR6gKzCMMX9mVCRZnJetxFoqpSDEFJKyXu34rpKMXqXHUhrpUGcuBvnA",
  "key32": "X38Rriv1Sw5sAy4BVf3N12xmTPPUmJMVNFYeuG82FoDB4Pu7K9c3ufBaXiuayhuqDnaXoRYv99jRHcdobsmE8bP",
  "key33": "2aWKduhrPSupU7PWFEz52WEoEZh6X5bbM3zngL9X6TSazqAoxRmhEfXTF4j1Yke49GaYy3sao48agYqr82fgCfm9",
  "key34": "5c2SAb4JzvUZ5yk3xa95jThE4E67pntCU1oyuVskexMpA4yN1X5iNxDQYQPbxvbHWmBn3qdzmfryxnVSeL15vBFN",
  "key35": "22zoGPZVb63eZxDSxkvnkqaHTgX9Rj8Ffx3QxU2ybz46UmowZWnTUs8PrVHxjmPbbdMdRE8FyLaoScfnfziABXcU",
  "key36": "55kQXp1nqGfTMFQAVuXuBUWdrU5JGj64Q99mcKFEQeDXUdVBqHdmhwveEE4nqwUUZvWnopocoL2KJ5Se8HLzT1rP"
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

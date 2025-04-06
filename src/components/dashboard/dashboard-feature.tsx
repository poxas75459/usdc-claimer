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
    "bsd5KgU2D72kendbY8oyZqRjG453EvyScex7WpwhX4QfPniFGG98NtpXGY22kKzyfpkWAg1QGPTmdvB2tHGFVeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pPUWYoTLc5V8swfy1Q4frL5Rkf3rFgYsaRAbDqPeUoUhd12LKx4qRGnZAV7GQrP9dF7koaecYfu8QaaWx9Y8viD",
  "key1": "2bKWL9xUeoXjy66DzKbUymBKz28ycRpyTK4YZFrd6Zv4dAcdFFZYJpzvHLam3ZLeQGh6s738ebnJxp59LW9KTyah",
  "key2": "2uWzPNH8BuqvRd6hwnWxC5SqSgCWEcPSMeVEP2s1u3jZRQdwtPhHgYyhTZcrhVtkzJdSkR2QQJumcjcdFw2ztFph",
  "key3": "5QhFw6RnyhRteRH6ACbm5Z4qjWRv6zUsDWDrDTpgHAmpSQYmgr7Mcj7umGXFaNvuhNmSsc6MVgUvmdHovybzSMsm",
  "key4": "2jTA4mY2YuSeWRQiov9pyQ17fxzUr3xrfdtSbqiWQsQbVqwCTaLGA5mFqBeTAjXzijiTA8FhD3EnpF7nikgmc83W",
  "key5": "NeRxXD2p3frFATVa3fX5SQCEzjNgT22iGhnevvwsGUJ8Zxm4KXUWRMHy82nAQ9NfpHNJX21mNZ6KDDkqyx9boJm",
  "key6": "24uC6cQbh8EXjY2ka2zvuvjeAFUSJ9LVPtUJDpjb9a9n1TaPSc9T85QpcXedKgYEUbsxyPMXBLuG1SXt2FJXJQve",
  "key7": "4bLFnKT57tjaXr7SHF11YYoW3CbBA4WLNZb9GuqvRpdfgdUMoF3YGtenTxpmCsCCXkYZDpgphVfv5Xf45XKfVeH7",
  "key8": "62cjzuq26MGVXbHU2Kp2KAeeQdMrnrBhZ9fsuSMYwMSuo1fBmAeiQzh1ptStximZmaWZ2oQgF8JjLnxeNgQjBuSo",
  "key9": "48K4Da6v3wibSXfRzxkgLGRfw2MVDQYvHDkrGCkduQLWrWGnaJJ4j4FqecNHYxdU6MjUNQNgVKRxzTPqFCtF7CYt",
  "key10": "2W8pZR6gbhwkbBKiWXyeShtYMPHt8pCb1tss56yyQtRkicKp4SgJNeuyCp39w9LEXkpGHMrKbLbZD9CnuSakMAAM",
  "key11": "5Eb649kRP6377x2KfSAeSxeC93PTkvY5qj48uBfoJba5ecddEyTNpzYX6MmeVcpLQu1CjVFM8HNp6cY7dwZSiZ46",
  "key12": "5BEHNgVXzPqcCjr8bZRLzzCMovYx4fjpdcJUTkzVChu2dBoqHnUVSt3pnAwDiq4GZ8ogswqaP7a4H5Tthof8FGbK",
  "key13": "4XSrofdhQ3J82QGNVqqm45fGCSbQJ7bUQFiBpbgL6YJrfQB2xBFVR2rYEzogDRzvGu7woXSYggeUmsDsZK7GaJ98",
  "key14": "4S1HoiAU3P83sjaBqvYScEPKMGzxAVmhHjBDQgRdfkUUnQH23Ub6DtWrKS4EkkfbHUUBNR7HB6aRz1JwtrWe1DjV",
  "key15": "67734LWThohc6zJJTN7NZuiDhtE4V7GuugmMex23dyjNHMvhgX7H7bM5V53wTe2qAoF8fNKmuod86qrz2TXdgEXA",
  "key16": "4uxegSnUq46UP6XmNqmo3VC83QcyEbV4ukxbRgcYD9tDyb4iKHH5fvqjaA5FpRKmTvdLENi7CYeCJLtzgKxWLp4b",
  "key17": "3uinmRiPmwLp3RcHLXsWdPydFR3kXC1RxzbXboPD8Txxn5J3yxAK1UhmjtuMKqiFDhFB4h2p5oBjN3hMcWFNjEZC",
  "key18": "3Zkzd9oLcM8XnbikPoxCtRxed6DoqvYRip3tRZLuh2yMVbcAqNa35NHts3uyaLAStNtFRBT1sZHusEj9qPf72M6j",
  "key19": "22HdGbg2F1fkjp1REsPhVbWUY3ZRwUSvpAotHkmbEqyZBAMXSwHWUtZaqd8q4X6bBRXTDv3mhoVYDWAzMd3Ru8Ta",
  "key20": "2cGLeZQtham8AcArj11REuHdL8Kuf6B9vwgSHa75qB2WTrXScSurZ4YN3WNVNq1vy43roRyM8akGxG43AAKEVXH2",
  "key21": "2N2Up6LhsWo838fGEEQJ8eCBMfHZ7ayhDYWqZcjkN7GvMm6HjYoiGnraR1hjx1QzsVVUbRajGX28Eqy75Wd2ydY9",
  "key22": "3AKzHoA2LHyVoc6ja5HPD3yyZW2eNMw6Sb8MioTryZWVN79bir9wrgr9ozrNjiJkqKnn2hZSEwSVVyHz7RgG3FL6",
  "key23": "3tnMLDEoRxSv9owqBDU4WrkUFZpQpzxnSLNZfxn3eNnfz9wRPVKZmgUE72YdJ9mAbZevhtk7wjHhsH4JjM5xnPQx",
  "key24": "2HURTcLsjF5YoXcCKokMWz2HM4BbeVEPxUjfiHgCGmNEcM7DePkJYvGSGGuE9NWWQrGUJCuFKN5YEmLjUNt9bNjM",
  "key25": "x7pHs2ny5Cpnh5UU2Vr6itRpKb1iWpV9gFQozHyTG9XNWxSQtRWqY8c2uAzHYm8uTQktotDmYjxJdVCNK8o1U76",
  "key26": "3gPoiK5UaWbTdEk5E4s1nRToTMJaKf3F1BGddjt9wyjaacpnRj9vSzRpULHGdCAq4Bg6MCnhfagxSvCe9PGUKQMC",
  "key27": "GtBBmnBFgzwF9vamcReLHwL6ihLrZuEfgBmKVJRFTsx7gAjp2bHunHZKR1QZyJno4cmVTWknNQ97qU7NNupu4KD",
  "key28": "3ddYTYpqYT61mwKpzkXYJvNMkg983FYgL29vz8N6RxHMB2jutZQz43pPfkPcaJdhg3MYqZeqfXkoqqAtpxqyZd2D",
  "key29": "2X95pk8Y2uw26EdCDZFx177ciV3buXf52MvBcHfAQikegZMXwNurZrHaapgMrJb9A9g8wBo3ujQ9kRKdA5oU94yi",
  "key30": "4H1pGRcB37zk23ywc12pXjenLb25m5HvFCbJfepDPg41iPJP3h6sUmowdYycUxiz3xrxjdrEahTPBGWhAv61eEZa",
  "key31": "5bDMuRYTpLYoSbMFiboW3pz3bRJrveAHv2ToZQyfvGfSFdmTH8XPYGkWUxixJytZmD55J7CVHjL7cHLu8hSXS9pX",
  "key32": "2LFvhYoSRy3b4ZgLpDcRKb73y57SdmoGmmcbGR8byrfpRpUxatDzh9kxwfwpEap8Tof2mpqZKGFb5Gsfkokfk4iL"
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

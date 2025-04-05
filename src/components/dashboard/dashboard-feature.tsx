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
    "2sA41iAp2NK4DXZQQsyKcYeg7fG1ZgUcD2GjZh5FsGMvBEChJG7wNQLe6eJGyvkwYAoTA3jksuJfxgQKLw671xas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gyH8zUw2Tup18woQtvwQWSCNdtPjEbmxe6tTVPpNFgYxxyGZBgA4KUByerN1dNY5KnTamKb4TWAu1CM2Z9eZwDt",
  "key1": "3JbvLeiEZ4Tc5oHnpiTfpc3RsLfEQKD1gADxb2ymFXtgcXHsVZHKoruSQS6kETAF9DyurDSwBv4b3amowPB2o3fJ",
  "key2": "3HSV9JdBoCmnp5k8SAQWpqUYzJ6x6U7UYSuJBu7E9FTpna2mMiCKXVQTQfBgSvLaoigWgJDk9r9oZgJAwVsP9gcJ",
  "key3": "4CGvbq6dMdm4RQPtk4eQJmob5JyYP7BdfYyjKrTVdYQemLd2ppzJzBrp8jZvYH8APL4DaapBPqKCH8Tn61hsa5ot",
  "key4": "4n5xn6HDP4tgmcb3FctxnvxmweWpJcES9jFPfxEbTzcbZgGyrzwiPggjSYKa6MXP2teV84G7zBCEDdF2xZbrXpNZ",
  "key5": "qH8eG16wn56tDKpQkFA6Be4Pf16SMWDNjAhGRR9bRWYznLfnu2YRXKAJWbxVznB7XS7vh2m3Xr3KaLnMfYhs7eq",
  "key6": "3SoBwrv9Xn3Rvyg7eoaaq5V9BcQd3zxUrKvfyfbVunVKxDaibQXJGWMgFNvGg5Zcg8vFFJHB7HsPt59VLAD97gMo",
  "key7": "4A2YkzK5QkQ65y1qAgvKRxDgB16m9Fh3rKpeP4Yh4DcB6rh5BXanmXVCJux9uavNQ4YiTxcPmSQpa6ocvtkHm3uf",
  "key8": "6464VMH813iu5bzrJrqrz1Ck5NnRrv2oLQUAfvxK9JyrqMx8ABo8qXV2FunVDWRA7i3jsMexAsrUrLCcJRFQ2apJ",
  "key9": "3oK6txPZbkt7mzHwrzuHbKnPGdfNkjbpigQAwGcGV9zKRpAGghmmYaF57yNnaZphtMSfS4JvB7Z7UzTyQE7WUXsm",
  "key10": "5kMZdp6kQGWmU8rGkymaYGGQ7rH6RiQWeXVmo7Sx99HsV2bgJ17LHiJxJKM6bYFt6XcVequ51GDMsWpHirNoZjzP",
  "key11": "454yPcukSXFfscvgbokfrE5fnyaogQ2GhszXLXw1yGbzLx1dFMgTUBesqwcSKKz8AutPHDwXuEYBSxwYtFBQ3M4R",
  "key12": "2qKwSrq9RmpEvTKJGDAhoMG4YfKSH7B42peuGMTxN1dSScDdXxG6iBXAAQzuSayKbgDbVpn6woPHd1mwSDRm9gzz",
  "key13": "3joyXzE6GCm1FPV4CPHpkyaJSw6k7GXgdenYTP759UQB3XifdoGNnRqZ1ZBeBw8BXSH8dKBM5uXJdCLdi2PZKFwo",
  "key14": "589x13o5rqY853rorVqaXMDJTPMVLp2Y4pTB1jqqD8cx2vH1hHfk3kkMxiiQQghGab4wiRDHgF22pnnUPGj44Qii",
  "key15": "5hNDRNMxtvcdhBhuTuUsoKqHTE42biSEecF7VZwsw7V2Mw6V8zSQg76uJWyppytsx2DPmirFkQnSCvMySNSGuibF",
  "key16": "5z7s4e7rKh7JY8R7F5jb4NUiLPVjo6ZKga5WXqMqZWptHP2KJeuaPVpckoABZQfwBtZ8ct5o4hJY9Gmp4u6Fh9pq",
  "key17": "2bJWZF3cCEg44PfuZhCPKYvgFvNsgmN28QNWrPebJD6LKqk4gq4GUckQAMuFHyaxo7sbZnqzJ4KeCmzpp5dUkxDc",
  "key18": "2eBZaf9WDAwTKTHdneJXWrGsw2MMUu513DZUeoxR6QePTsaVd5agoXMPDVC1DPTJEVuhZDyjE8BSF24NhaCitGwf",
  "key19": "2r4xyb8ybjXdWs5pU1mpxTpFdAN9AHnmJmVqZuGBUiYHwguq87HLDJmTErsdcB6jFM46QxGc9KzRfr2x5ozA1dFw",
  "key20": "4vGHmsCKiXkFEQwx9ousaDDcDxR8d5B8B4S4fRtsXkUb8FpwLwyu5Nz25WNGLBk4xnZBV3ERx2iAacmezrxi4ges",
  "key21": "2z2TgALdq3CAUiWDgsYHXpBcsQxxGrENHtKmeMT1v9rRJEbxuPFw2FxGJsPiaoXbfobcHg9Fp3yFrrWJjnPEUu2Q",
  "key22": "2CkXvEma9d1J7xp1dWDUtkKHDYi4KZz6H8oKjaA5WyeUZKK8ug3XvZSbyKm5ScbUzx2wWFrQzhWksj3F9DkMxCpk",
  "key23": "oMx69WBMYo1PdStm1XjMtB4u2vJqtUcaDzvqNJHA6ArkcXRDcTPyGsHF7Yz4X1KEAWmzTDda141xH8wPnhDzszu",
  "key24": "5iSgHxnHkcHfFTeMUJDijm9PhfP7vMjQEiWirjz5isDCyNH8ebkGMoFg13vduHtcgz5nyjC8b7aGtAya3aF68h9S",
  "key25": "4YEmenq2Wfp5cu6u8Qiqp5UzALCv3q6pAnPuFPad4xVPavkgLv4B2Q2Sp9xbbJXwFzoaWbSHDN9s5EQdoH8ZqXvN",
  "key26": "aY1NVjFDfKyyVExNdvrwjMe8qvfXWFkBrQ7FXdFY9ty2Zuopgn4iGTeWJRm3h5oqbt9GjCPDvj4zJk63ivDzHQp",
  "key27": "2Wdnq6jnzHKjCoeeNTzAthRwwuzqLX8acjY1pfwLvPQH84XZnWqXNgTqmacnFADQsSmMoAtawPhs26EYrfUSRh4q",
  "key28": "4Pz3jFhdnHT4CyBV7KPq8RYhknbZVpa2XwTvfw2ZJCMMeuKCWZ6YMEb98rhQuVADPxLzX4Q6uFBPBHksyk8vd1Ci",
  "key29": "3c8snqNdiDHnCmKCcMMV7jcYhPNtCW62nbW3oKhJ9PFe8Jmjp87jPxcFJCm9S3DLLCWmneSkvAR3VdXgkF5eMJro",
  "key30": "wZzDyMZ9AAJQA8SgyH1Ln8Kb9waHkVCydUw1QCB2NKK5vHnTNnjhgbnBF345YpwnGx9DhX3fVD6uNxKoW3JobkR",
  "key31": "29CKa2D7YyLuDdiNg1yuSVAaD6LArGr9jQX93bgPnn6uydbDJXUC8asj2xFou8XGtj5i2APEMZWp5EzwfyJC6SLk",
  "key32": "3WEA6J9XjypLChMjiTh9ZTNTmw4ps2E2pfY2qB6SexGyGRt4kxohMQ1PMRgYCLK9Swjwd5HCiLRGeNqM6rY7JcFG",
  "key33": "4o6n9oiQ1s3ovUHPh7oqVAr7UKz5cGAW9VWWEK32umzM4uJLT4cE2P673ybZEVGAFUTQcy9eMp2dZRsWNbAzv698",
  "key34": "2u69YALg5LJexSfggHzUhyxLd8NU4drGQhP5mRNYJahchdtpP76GVP2g7GydtH8Pvs8uvSJwywAUqkWyFhJbur1g",
  "key35": "3kuXD89hHKx1LPoqsfV8d2rVF8vN2zMKjYQdpqfaxx1HAkWP2eApbMTQYLDF2fTeQr7gNwYDtaBsSEkWP2EJdYuf",
  "key36": "24WyxzDDHWShAJDdiBxvTayNEbWyYihSUneyzY888Axc3yNzoJQ1dQ68GXP3aD8F4Nv27JdWGSJk7aWHYedPKLo7",
  "key37": "2YytEmstGM9WGk65TbvvW2vuhxmiEX8jfCxZcvN8Yq1ySVvpY3Y4RtsJed6v5LVwpRUQHkq9rCjVCjSbAx3wuaqP",
  "key38": "51JKXZK9JCA5gUK4brFWnKCFLEo33tbgirxe5VrwJAbiz199Xn1kAbWv1w3q8zopWihML1HkaTCiTqLLKsRXEDWR",
  "key39": "4DRrE5a5GpMHKzhv9WVx6zfCZjdNJmw3yuVXimMDWYXCR4wFWhDAeD2S3rURe7PxxcrexGJh5Digtn68aDr9FZp",
  "key40": "5vjCp2VEXbQEjkN5eEHUB4Zwnn6aFHSGkaRFQfJSoXKa5KFF7YsearmBEiTpnvx1a52xVR1zn55EsxjmGuQuzf8A",
  "key41": "23vXccZZ19tdGg1NK7jV7NFW5nwPN8xktmJodSUjNHFYLkH9YzTosjoAVCqoB9rXFYby9WSVLfsoWWZDgNVmjZrb",
  "key42": "4jAPtU5UFMYzF2SqBVin6pK2u9gB3RmCyMo33qVyMqjnnixxQittash2dCHd4kDJGmycfcyZkAj4JnakV7dKAc6v"
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

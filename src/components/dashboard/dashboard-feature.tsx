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
    "zLeGyK8FobWN2PqhsGKUwzyeB4J9hdouC9Np6obAfJi88nwpHzjsMwDjW4DsS9XNwZmKA8cped5ZfVtKeQdwpaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BwNGprbpxXvL4ZZJdmPe1q2mMNCVHMc8eo6VVcgkGY5xj9YvboVNf9Rhb8Lfa3s8eJjVEc7Qun9UP2UTquvPA8r",
  "key1": "5tDwcKL3YhKtsRrEd3RisnvB5jv7jqvYAYjNFUNSMisfDChdXS5BDsZgrz7PyMEWKMbtHeGvM5Xo3u4ANc4DvSJk",
  "key2": "9MZL8X4Pevb89cFzVbxCRxdeTng7A36gsr6HBEZP1y4K89xFEvFYUugCVAMpv9CAx3gbXWEBAUf5fUGMV4nEeeW",
  "key3": "4P854WeCPsE9BKXCVmsHQkSR9V5iZ7E5M4NxVKmBFcyvUKnakHPPfQNsqgRuVBQVmS4E44LZiW2vgfmTqE8DskbL",
  "key4": "3LqFK1mu3ybbDt4jTvVzqFZHrY2NXGzQh6Eo9VKsuPjmp4g8JNF3a7PWBCeyTMB2qZg2xVQVsQJe9QZM2XZaSM2D",
  "key5": "HbbskXYyxmKGeX9LG45dG1j2dgc8hLJDKGM4dt7aeZxe2i36minRXupS8pKZMtXYNNC4ThSTK6HaPSZbuwpRscP",
  "key6": "4kH8e6KxmYXL5hmDuWSaGnvCFW9ejHqiedpRiFt8HCNkZRqQKuMuRQxSzGWoivtfUPFvFR695jmJycwH1saVKxEf",
  "key7": "2T1KLyfpQR7Q1JVSMcXbdysZymey6uuBLPqon8ocgaof7kdEKMwJu4Vu5mmSGCVtBurofLpHFmQdYPBghovFDELb",
  "key8": "4cvf8nc1hTVAbFjpwm5M6PSv9uRv9D1Grh2y6hnPR4CaP8nwV5gHaKuqFJUDWLwXBcK4shaev43No1TX43uw8hjM",
  "key9": "5yCk9Pw3LXqTKHLgPbvoSi22StWBh2nHXDW5z4Qy9hyFrvimiQwQfMydx7dHJ4jshqKfuwYcd6jtT6akwMVKaCZg",
  "key10": "2i3wmktHnb8Xh2CboEuPDwZsE455PEF6x1kSdNZd9mHC8o6q21zdwm7cu84yDSjnQi2jh3ea6ZQv1r7z1hfvQDvJ",
  "key11": "gxznBP6bvZQs5dbceAtD1SZTCD89eQ3rkeiLjGFcMRAAb5gtTaoL7sbtDpjT5N7gSa76gFTy8ZnkdjTJbPe1L2e",
  "key12": "efjP7MWKNKrXLWXkuoTT89wHySokwD9pixVDnLA7UArj1MFXdU1qKrpuxVc7JF37wq2fmaLyK6PwdjVxgg3yEEd",
  "key13": "4xPatw2WtvaQ6VJ6Mo9oEDubksJD1Jvjg5rhPWwtWk6pCdvxXyYCRoZswCD5G3eoN1E1bbDSc1m1CvQ41CenK7Nv",
  "key14": "4e53HK2eMxrBbXAePb34u9AEDRzSLEJAaPApSbSqUEbh9aLnR3iixDVCNB98FbaQq1GdsvZnsCPZdUAXP6o9QqtS",
  "key15": "5neCJLW3eKMmqRpkPYBfuJtSfuSVqsqysJaT3i5kusKEYyqtkRbfMN3v8oTZmxb3M8gfcYuBoaViS6i1Rwrhgagi",
  "key16": "694SgYJtHihkXUJJbYnWgrb8LDAEq9GNzJM41x1phzqD2QmvZPbRTsxzzMYmbZaBtiKMkF5uPBiHgceG9gQysvN",
  "key17": "37hYe5hydGzrCybXWJExCX3CjKfUvjid3Qq7h7D8SntvCyfsUba3pYLGEXPpnm92ixPqLxe8nAjZNKt11zpanbAE",
  "key18": "2cWqsgFVtzautAEgqo6CHtrMs5i1zb9VmKSWqhaYYfSpiGvRpTGcYcmV2pvxDA3GbGW1UHNkbRstD4sCY7Bjv5m8",
  "key19": "2pPNMDbKSrkKk29qqbx4TCrLEKrs23ghagKhhzfUzjQH8iFtzuYWkPnLxnJxd3hch4cPGW6pdtajnLRCAN1FL7Fa",
  "key20": "1G94f3WF2TxhurjPV9Wv1QrvigMnjJytCSJCvy1GUrwFqqfqXQqxtZf9pAeK1vAXgNrYS9wY4igcj4bMGysViyH",
  "key21": "4XUxGwJydCDPuAUXvEXSiQ11brxCAgMX5gzgAtj8dDpQ9eKiLXCysubzoXUh6R8jBxUc1CQ1FMgCzF3Sew7jGKqg",
  "key22": "Eq8ivWJmDfaB6u22sgUrTMa7B2AKecqzzHRNLdttPZFX3oQtXpdfCzaJoHKebpKZ4TfsY9XNcNXzHp1ojpbbomo",
  "key23": "aKnSKhbZkQLbb41RvAC6uaqTnKPK8jpiGzzzKNSzZr13bRwTZZYdaxwDcyJkAmjW6WNLLUmM7vxVAyiWYtQb9k9",
  "key24": "45K2L5kFya7VDxzgwvNUiMw4nz9ydRvLAV52zTapx56Xb7PdWHGQcRho6f47NmmVURE6uB5bNkuG3rrRNkopBopJ",
  "key25": "6133Up3E5UVB7ADqy4pEy1fGWePUzH2TcTjfnbY5z9EaqLgzHrxMqu7goFWmadBLCcUCqfHfoP84QVNPvjKUMRPT",
  "key26": "66HzUdyUYK98uovc21ybkTvnhPgm7qQCpbTpabPqxd4i45w5M7355NzpCaqBm1u2PqyDYU1DevQUDzXDFLswNfMg",
  "key27": "4AZYemAJj9fDTeZvXkghRswY1fDs97LCExgSqSPP68RpdrakkjCW7M2XjVgde8JE6aCC7eyC7CRzV9V28DCv5dwZ",
  "key28": "5pHGG8sfCY8jYB2HbCxEuJwXYxDLQECjcYLbM7Z4M7XYBvv5kEYs6RtF21wuYaEP9FSx4E5YvYLq11CaHAaDmijh",
  "key29": "4sWT5wC9bfrSTk9dBXu3LNvMcKkM8f5ujykAJJtkppzB5LKDVp8GdMmPpPZ1535EpPnX29pi147JA6wiqiQMRAf4",
  "key30": "256PzokxZFD5MymG3sicLyZrS9Vkp239gksfr2mm6PgSGmiUBsJr14YLVC1fN24KAg8F877C8F4JX1GASjs7AGjR",
  "key31": "4i5JBHqyUst84BXGZ3LiQL6ZLX3yXHnjLbsG5ExQSJcKPgNXk9P9csQsXhrvgFHSunxci2dpMUBiwBRHCNw76Jjf",
  "key32": "5cvmeqGkwm5bN3LmuubJUTd8ZxXJETLTququtVAKbbiZ7w4SES7FFqnkehjLW4mLGexkFF45txkDd4dmJEaXLnev",
  "key33": "4r3gqVoZQLuv87REsjJa8hK9XaGVsTJZprReqNEfcyrbUYbufn1eSiK9bUoqmpKg77vAktxtpVf9HCUFKVRdMEkK",
  "key34": "4LqVLw26hywwgvH3riHt5CgwgX1jLKqDSNfNYHPrt9f4CUw6XiCsiveWeUZJi9E8xbsFZVQtYw3BWoAkMynCyoTy",
  "key35": "3dV3h7xdyisRGfDaRcnKznr2fXBtwBkkBtsQrzVftn9VbmUsZEzeYtwzd63RVuUr2xMPSSqRXQsDwBAJRhDNPSqJ",
  "key36": "3qkeBcM8Am2beMzoyxM1gHddFKXTiPRWroP9HNAX32yndjMRxM8ftiTUJdtZc4ePU4sNUWw1ZGbNE4dYsL4kU1E",
  "key37": "5GipVEV7y5AY2tmVcxUYzLrd6BZAHmXrjQLDgdNJCpCJNFWu6G1TioucNSPv6P318np21BpUFrAYj1QJgtHVcVfu",
  "key38": "3ZAr2DjKMtYiFxRQqf5MpvuDrSEfHfSi9S3zWCg5FAewTz64VsDi51xLEvpBhoQ6AATNKHqFtFPBPvr2NQdZAxhJ",
  "key39": "5Ap3TGVTZM1RCAH2UmHHV69kJXYNR1To5PJRpmHAsdU1tovhvmKT3ibJHdKPpx1Amcug34YS2im9AdcuEKgReFzL",
  "key40": "x7HghnFELy26ESoCefEvKAwAWtshLX8gD1PqAB3WJ67TE4SjV1HX9ra2CpbZH61Pw4dJNQMK7ASYzea5nicaRnz"
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

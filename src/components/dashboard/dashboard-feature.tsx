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
    "62omZp9JD38TuLgLPBCXs3ntjnqESv799JVNx14emQoFsTxdg3zqPphfjGK7WULwZtozWpdoUqtvoRECTxXcvKMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rhTDNk7x49gYd8bhMRLkaYWSawX1HFw5TfZLyrMHKfaNiMueSGUpdY3jpNYYT1HXzeysqdsY6XH8N3zL3J7kRhK",
  "key1": "2ark5Aho8mc1QiXmq2rbynWQVvFe3yNt1VSq6CVwddC23iaVEWVAVLjbaZv29HqNGwpUKkJGjLBJHD13T8dJo6Jw",
  "key2": "z6ABEcxpxWJ5Z71pompYXJzznQzaB49DZgiuMp7QkGNACNgo18bxWFeWiWQBuPvNGKMC96D2tEKhyBRfdSVUMak",
  "key3": "3a1m9vV5WuytoLd11SVeKmqtPD6Q3MC1c2a34oJLyeatSXHnYTTdzpynLVJnmHbhcmo9Wmrbo7TdXW2uJoj214qj",
  "key4": "2Efv6sX4TKKGc39HJMRwTftyzmmyVcbv2xuTaEvS9Vrp2TAeZP6TquogTgEoGmMS9FsJPGsDeRjkk1jVJ56NncXt",
  "key5": "2Xq9UjBdLqPLWamAiNJMThdwchrkmTK74LwBo7AbHJ53Dtz6YHYpxwPbEkZ2n4SjJ37c6PXiYQCVx4tLf58mr56A",
  "key6": "3GyLm6Rgc5U4FgFCiBPr3bSXptxLXt7qgEiMiKjXsp5ed4pja4msbNnpdH25dR2CxeX3yoV6JMBUuVgKCUnj4Nnu",
  "key7": "3R2uYexfXNtjTGfSAsxN51HipmGW99yuwD9YdrcKvkZJ9DxhtRm2cS58BTkdyYZMnarqgDejVnKh76Kma4N35xEC",
  "key8": "3o8eo3j4DSS5GS5bXtebwbhSB8KdqWXzr9sGPN7DWozEXtwXkfAvXbMoReDwTjh4rXYjct8ayT8zMGgtbmT3YahM",
  "key9": "4HPGQ9CoFxaXRBV9wPYQ2QKPAvtN36awZF6hk6SahZiEUySK2DkvGasuGBVU5x6j2nMHY3rMdUD4iCeed3PVPXd8",
  "key10": "3h6pmi33E9vs9n5ogHfeE8mSHL3yDLmH9B2XYANCQciVLkVFz36Q94aT7PGXGCJsnVn7iLh1TYbLgPxctTJpbw1P",
  "key11": "2xQdnwP3todLPdMe51GFYu1eB2paC3x2CYjeJhVaArnE4PQxSVxxHR982UzTAmzP3ehcAvoTCucuLvk43DCEPAPh",
  "key12": "3UBYcJt5Mg6U5KzUJiwqjT72bCHiDMyN7ApskBiQGV6V5NJcfFBE5DdmyXUAZeZftGsA84az12EwLwMTXBGJcs87",
  "key13": "3bvFXj5Z8pRb8uZp7SUqEhngJf24H1TmwfrwN6xHNU2qZrB8e3CMudFtkHLm3wwkyDYui4cGpG5pvSCXCzCXT37u",
  "key14": "49sgVcrFuNgYAHTjAJCFifUq38v4XdweKcsXAadBWijroS1VmCnSTLTwavPDFdaMuT4D7T93pD3JWdd2txa3z3fX",
  "key15": "589H7UsmRsZpfknNpmgBxs8yHLYxVp7cwUqD6uWuhLmFJjapTSz4cMkcTEDx3egap66GHMurHPLxVnk4LdwKGjF6",
  "key16": "4AMfMTktvaHsuRf32b4adku3PLJRm5M2f1ZwFveQ1uRUysQFXEV24yxnvTEqQNaeWj1AKrVBKzZRJh6njuSS8G4v",
  "key17": "67TCy9rwzCkT9Fx1pXEdVqnuTssnHzqokxvzCKf16TyzNuMqBm8zYJqqJCc52qUZagyvXFdinbnQfoZJNuh6EH1B",
  "key18": "4uTUoBVTKBx9HqXDmkbwbakucfZ7eHqeougcjC1gX5FDTLnnEo5Vk8CeLEKFbTueQhgaKqnXKtRaWt3t91KxPjvf",
  "key19": "KKxqqvsW41rcUWtmaDfTC9u6AtbR4kEvHHbayLnc9pqUiQnUrf6hwa8CeCP6MGSPPhXYaXPpmB3dSADtfvziopc",
  "key20": "43DeMnbwTnKvCaFHsi8ph3msFswQ5Pn3CGc5H4hqjabTYYybKKjveViHmRAZ4mQp5QkEXpTmF5UxRht2fQ7Kij6J",
  "key21": "3pyxDEkx7jsr6JEsy5XiP3uwgvso7UoTjW2JYJPECxWyhdN4JEUUbBTSVfJJBtL85oZUSjM1FF1fU3Ch5zW9rBH9",
  "key22": "N1C4gf6YgjsxhuJWkbdKK6ctm7k3E7dUyK9ymb67dQof7Nq6EFM5S3NrqmddfwhdzRxAokXTYFW8J4MvCLbnbMr",
  "key23": "2tECiSaf5t5GJqwCztHG9TYnHMeUzvbWEBECauYYoXkTCuEBVJYsMx49mD3wVaiuF3bfaBAvcDrh9YL6Y9tTNFgG",
  "key24": "4p1H5de5eYUwSGoP7hdRNnioLE1gP6hAimGeg8SHShe8cjQBr1SYrEMXfSZzvMCVgHv8wmmkgTPi16YASBCiHX5P",
  "key25": "4uw8iz77auDWptAoFeEhTgys9vcpiqWjg62161o5ygrQFM777P3iGhpmjZLHUNs9Rbbi7r5tFnEx2i7TVmeJXdDW",
  "key26": "3WZCdSUZrb2gtoeoDXRcHxJ5WYYkWUq6fHDAGXmeGJtTF1MXZSXCjgX27zTZs5AXNo8MnXJUftYW7kUvMFfWv4VN",
  "key27": "2nznFUprZBazWf2Np2vTF8hco6z3X3P9eYxtabi9iBvpsnRMRR5ev7zH4H6Fh41EhpxcFNDaH71EaXo828Q3Ufo3",
  "key28": "4vM1oSRLG5v8tvMYrdfYgdouhUK8jeGL3y8iH8p8wZtvn11RZAi9NkYQQcbaYnR8PCBT7Js9VidHc1XEb3CbBi7X",
  "key29": "2EQuzcG2e6oW4zUWBTm638KcUN2Tz8kG534TJPsCGQjbsxTpxNTFyAFcD61GdnVUPxZiphs9keh8mHwXTQ4usKhb",
  "key30": "2Pc9cZouhVaLeh94dnNALseCCK49jBuP892UFqtN44wo11xDjgZaHjt5x8W6fvZnnKoaDGBxd4UhUBtC1NNv52eU",
  "key31": "2oMHnaTH25WGiEdMYzVBwZYZcdbdQSZbA8eFRTGDZMkoGfvu4xjcPAVa9ei2fF2j2nNRcHEUFUMz1oo78TuRBFLt",
  "key32": "3zMZVQuCGhusDJbfjKYCWG78PAgJfKXmQaUc4osaYSKpukZNtXoGsq9EkRnVMYFuAH5R2bgw3kPKJk8UmywFBRWm",
  "key33": "iTVFEqv1JZiCp4MPNsQupdEf6NnxFYKuyRDtsq7QKEfNcHBfFaxcermZBdbacrS4ubjim4G8mXZKCuYFaPZDbof",
  "key34": "4DbtnAPoKMLn24zmRhweuKLsGhJaabuPTvoApbiafyqaUDCRMXgHZoDB1hpKRAKW9Kgtnyb8PccLqw725hDLGNhB"
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

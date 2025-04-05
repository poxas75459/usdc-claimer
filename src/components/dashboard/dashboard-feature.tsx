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
    "2CWVgtzq8Vyttp3GDtLxp5wQh92YWVif7zJcVvtLYqpK7nHzU8BZTQ4tKV3GWymjSmoihzxFvQFJtKL1ChyABV51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48khaFGAay78HxWD8zptSoi6gi2PfhEsvs83zsMmLeVbuifA4RmZc1nnUjjGXsUMdLsmMcv6Q2URKPbrqRMb376o",
  "key1": "U9mWwh19qpRaMJJbSeAiMFNSmkV7T5wgkXg6Adv2CshMKPe1U4QB5Hfgayp4y6SqraFpT5eUuvhisFKpb9n6GNw",
  "key2": "2VYNW1Mz9XTS9iPdiabogwhSoFsCBNqwMDNACw5peuvWV4DokHo5VffCHDNSbpBcgaopMHCDQjifpmegahaqjV87",
  "key3": "uCm1xnftwFUv7C1cxigrrPd2bNTxqaeVnm7bFVTvpjPCZf8sMqjmriJCUJGd94RJkGKBLpkSZg4wVn7ew8NWKKT",
  "key4": "VVTAAPPnWPy51RCQQ8XQa5ggHs3RQa6vBr6E2YCaayevy5j6fPKLGXJU9HkmNhQMKRVEB5PierSNqFGNr8wBvay",
  "key5": "2tofEsGmCtnMsCZKd8x8jPXbzTiesRkExpq1LBYjeRYuRKnqurYmZ9F5hQhzkTLgo9aqRgi7JjMnH1TrZb2bir5u",
  "key6": "gzFspUpRHJKALBafMpyt6ov8QhVUCtX2vHyoNH2btGa4hvFWjsjm6pdEzKcDgcVEjNr42P4pFoc6ESCp2nRjFsu",
  "key7": "2x1feSCTvLivKce18zWWCJ3vZwBmjgPmfm1wCjjbmrK8ofBYLjid8oD4uaNHwhn2wZPueR4W1woT4aPbKwTYYURc",
  "key8": "4fz3PvuqZm1Gv2frSpWVpLqDQPBMX7azMKZfy2NqjnzQ3g2f2LFaNFrH68sGT5wbgV6ZT1TJ359CfFhXCUq8qi7d",
  "key9": "dqem6Nf9WNEYCGRRFQaEAXxN2RUYLSX3XSwpyWUFNx85erBP34zaeWHEU7cdHnaZzpDhF5C4vfGhvaNQPNjAmSJ",
  "key10": "2s9e5RhcHfsDQZ6pjFhKqYj6sNddPyRKQRAQMmYXvc58nQZrg5QqhLVojmDNHnUcRbfKTS2s8iEpnszcgXNk2kWz",
  "key11": "4ZLZz7hTjjx3vMxkJvzpLW2LZXw9YDhZ8ztqbQaKeCUaznKh8BDHnGvgC25U6MnTRpfL4mSvQVNjBA4fqYFNShxo",
  "key12": "5ey1q8zLR9QTP3RMsFBf262iZTJ7UACmMjaN16cTLGkbiegmKDb9tzBsu44uGSLpK75bwo41h3rEzF92qdK2XNvc",
  "key13": "3vKcB6kCWbZ7UivbWgJr3pwaTqesJ6SYj9xBt4mDTiF7c5y3fX7tuSRpizEg6AnCj3KaYwEB2Ne4Dn1yF1wdyTzq",
  "key14": "2eNLcJbmEssYDCNNwZQsikUMzoyUQ8JJuiiquRhnuG95EZmMaMDM9Aacv1t1iYCjpkePs62g3CWW3i4itQsL1A2b",
  "key15": "2W1TXPn9a1N5J8qzaePqBsHFiWDHyHWnEBnNePD7GVagxsMjewsmJ8vGwex5iWhSxZfwJWNbE4Cxsa2aPsBctfkL",
  "key16": "2ed41XZ9hTns7g5X6ZsMobgdGJn5uwFg7vCFd2JLaxGe1MBTxgK2QiqJdP8QpELW1SphUANkEDddusQvhPgiEZGX",
  "key17": "5qzqs95h3BHzhDLgS9uwmCR8ULSW8mz6nCnYvh27b3KzMYf5MXZpHzmgT4rbP3PLCQf4zS7d3YqrmhkhowpGiUPX",
  "key18": "41ezvcbdrgtvEJFJrjUqUoJNvANM2497vULyvjGwQnwWJQgHKVhRoCNCRMPZPKM7HTZZ6E3Lzrkfc4PyQcSmjVaH",
  "key19": "7uJ7PmK8yTkLeap386b9CkKkivRpBcGSVBJZP9ZFWx7GHrSQvTUTV8VFDceLqPhuH1C1TUUpGu3rjbwfohD8cvT",
  "key20": "HaxaVg1jmzSqJCULAt6h56XMGWUFtmifgwUKNJ1k9T2K6uzuNgEdFVY8wA74ysx5KxcCaUmqiZiHBCoDhhzcFM5",
  "key21": "5dhnfukQCeGUvrX9mJUztgzW5NGEarJXvpJbsAisSeZ1AGQVgbdHWcgHvTbdzagxrYwWuR1DGchBnym4dMVmkghc",
  "key22": "44eaGHNTUea4obGzQ7J2vPJ71spbnfbir9EMKSTpbTGZQmN4R6e6B9zfcuVjUh4A2wcStJrtGn3RFNUkpqASRA7B",
  "key23": "3k9mmq674tQGxUJXCVr62Rwb1Qg7voSqVLZgb9KgGzZpbyhD27mrKRRtuRGA2seVGm5kH9RwqMYVc6GfXckNBrsG",
  "key24": "4boXCZz463W19QZSvhUNrqHNYqNmBaHrpreMPhJKhzsixszH9kYztrhXbK2bAMyyMGGVD3KzpMiatpdmw9Fmamd5",
  "key25": "3DSWp7Eczp1CNRJHbdMccCUT5CWoWn7PmoKpZcxLetFhGGL3VdabvpAeXysFw5JXcSizFVJXquy1rsoXgiLPYW22",
  "key26": "3Q7Aqfvgvr4F1iVFAHSeRS2Lpkxx1YfxAkHMwgo5kx8df3NFXjUsgFnFVnmjVpXkBxJJ7Rp1p749vTeVP49SoDxa",
  "key27": "2tibQw6psaKjgWR7YEd6UqmVKoimYECACSUScLwd9XVTkimkWwcfiQ8JY7wBH1BJumFkiKqWSLZBg5j2myCA39Tk",
  "key28": "Yt6mskuwQ1yXEmXjfmLuGnGETaW7rQK5ipR7mVaB9i3iBfE1BHBPZbAH9sXYgNFfhyNfrVChhVzPsp1iYU7tyVY",
  "key29": "2r8uFWZAm5AeEdam78vLc4f5nQiDsRvBzwNW94MVnkxBtstTU358vXQckzqWXu7uB5ERMi7jH4aWA2NuVDVF8fZJ",
  "key30": "4bdKVSKfKrURsJ6Dnp3nnbGhfWCVkJTkSgV3hwLo2j9CVeqofTV1CDWMobu9iVWc2ZLyK3dVvxUj9ScNCm6Qr86d",
  "key31": "3MEadfpRMY98ab3Li1DKcmp14tNRXQ3aBsTvaae8CRA5opAAZJ2WLycLMSPkwTLqMxZKYgcahgiG3G8fuWxLSFvV",
  "key32": "HHJFofizx85y7YHWGBQFumhTkBpsSPHJ5dhJTYqjbymatBCA9wrSX9VfqiqpA6HPwPRpisLNM6ZN36wTZ7F3Pjr",
  "key33": "2mbcAcbM7tpEjQz23JvpgUth4VsJubZY3oyRzaSxp9GcmYYsYCbq7jb6Y2DuwYYP3G3DesZRT1nFoenFp7KKNQPp",
  "key34": "arFb1ifZnDi6fcgj1zVSWsxyQwSnx7522o2tuf8LvZiho5dZNyeySDU6nkzpHcscVjVgv7QoNBD6f6udGNuJRXG"
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

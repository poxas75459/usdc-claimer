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
    "2wPRZX4UsgvfnYDX7pdhJ266mdPKyKQMQqHBvhTRDkZEh45m854oCTKDfRySVqbVhfR9ky9xpxsDL1pdWn8LqQ86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JXsfjiomxaixrHcZ5LrPGggfgj9v4magNtrXMcbg65aHEDxKNKCyaYNDTGG2evR7g96sYKLBasAzbrYyiU8Qua5",
  "key1": "445fwqrPm5BbX9LHB5xDtTumqhQd5rKUduyWMvWsnZrTnemWy6pFtgXQQqUjtvNgB9JwkXeCBqfWb8mNYLZP6VY2",
  "key2": "5DtYzV5MHC6vRf7eKBVQDXwWpUsVjMDWqiu1hViKVeAsT2JuYNZ4tHfgtTaPdD4tvRp23Fy7Y5HipBi19QLgo85H",
  "key3": "3MdeqQPiXGTkSmdi6qLdpmaoQMRWkmFsqQv69g9jXdZXadZpBpx1cqQmhKBZBdW7pJi8tExwDCwRAEDR4po5zMNu",
  "key4": "QqjktzdMTZhAKVpfNHW72MW3554wTeF1kWUwdsE1cixLKLdYhJ6pBcUmXrzh5nmH4jhZgsrisTLoJ9XQvfSui8M",
  "key5": "5MduLSHdPuEUyDP3HdYNWq84rPABsHzs37bJiggX2p2spLWmgQyH9CuhCm6ae9RVS3T2Xoe52pC3P9MLFNPb5NUx",
  "key6": "2Br8cuBNboLNAAJeGMpPA8yXddRNhtojvpGJsk4za5Wmq3PwYhCWCnzDTMnQnCcb9xgnXVa7cXmfm9hUqfPtkiv8",
  "key7": "2HKA1wCTTsfjuYjMZhSQpR4BsNX2gz9kULfqXsKiUkH2VCqRCzAKktas5kowdJ5tmmm9JBMCzp1HHL73y8VTT3HK",
  "key8": "2eEf9tqXuTng6zyf6v46EpTMDWh6X65kWucFDJEvaPHLTgdRWNnrZtRSWSEZT8QQo1ogjQFgzfQj59krR5bKxboj",
  "key9": "59TPpp5kcNXiUzpUC3V14g8yB9fny9xxsVhV3oPCqoxc2JyX9c2EbGhx2pUVaz1Znve6R1uYqKTFvxaYZVYfRLmX",
  "key10": "3YSgGCndcK1Qes6Y7KXFe3FnVTyTW1q6xK3XWm8JDCdHKayBRREd33Gnq1dnYsFXxvZd7rjNAWUCSRm4TZCBpHXZ",
  "key11": "4dyg5DS9MALg3pe8GuZvwYZRWkJqiU648LfVBn1ecxtJ4BdJFgMessiUPurf7bu2wxro12vMUGLTPAmQ94iAKaW4",
  "key12": "4gSqpE42EcLUqWVUzeB7fFY8ZkEWhU1zTStSbrkYtqciZhRCuyVNTqDR1VsUpzpsXJRh1pBL65goFSHGGcpFqjy4",
  "key13": "5bN7R9XRXaoRT7EkEHQTy782fsirMfrCcXz8W6MwJMQ4rwnpbRBqGiSaAM5GVTJHfeGoFpJWRroBWJfFHfwne3Xm",
  "key14": "3sbLX7YFcULsM5H1Avb27Eqfdhc4ztPqBrGzEBj85ZQK2hfj2cc2uVpgpBHVEwkYBb97V2uQsV81KtNQx2RBXVo8",
  "key15": "5iuHQZxCmJnYix3QGJRUrMM3f6A42jVqbXfAoyvvgByrgG2UaadzdafUtv6YsJYBHjtH9fXEs5RtysTEWFjZpcy1",
  "key16": "vxgyLBQ7i1NWzRAz7ydB41P14EKNRwK3uEfK2RMkAZcKeuwGdXnKyrVsDLWVbCbYZP1shy2ko7F1i1P27Cs3iBH",
  "key17": "tB27r9Yi3onNzraec8UE6iZ6Mgez1gw3dJFtYtVeLutEzC1QFcf9kiNT2A6ysWPTT76zUizmMERr9vp7aZqYNko",
  "key18": "2XpBizrw78aL4GSm8PDXixMfNPm1TDnYTxppdWjHBNEcJxGFg1Rd3vFmv2Rp1vbLJnBsawc9UmDJWse8NBv886ND",
  "key19": "2seR4ximbgC5b4kVqq8nTFxDZg4afgsJsYV4sCLnjfZDCrUEYv9n51cAmVdwTPqmw4vyiavCTEfszV2Bmb254eWe",
  "key20": "2SCjvmqggSgy2hMBQSBXmTDPhW47GC1XynJFeT1rNnEArZ2BBdJVQm81ut56zUfmHtiqnkcNeCmq9x2Sbc6PvgZk",
  "key21": "5cSZWokucR4UgNT29kRcBJ16dGgBhVpdAJNKcqqrXkPPHRgpMd3PyGpw1BTGpbbNteZTQoxn2BeQof2mku2emcze",
  "key22": "51qyzA6qeyPWtSNANUzAnAGRfQPZ7hNxiesE1usfmkDjpvBjuVFcRATweXMdkRgpGemSLgJcgWSEVZGSK2pmiW2G",
  "key23": "223Jk5ET2ZPMuSY9FQoKYwUutFgDXtd3jAfTyZehsWTSwAtfoKsSs3DqPAuWM643zpGQ5S1i51mCwj9ajHWmxS1j",
  "key24": "3JL5zQztzFwNBz43vYMNXoPHp1s4g7qxbhQrsWesPGRJrFPoW8pwMPKWMq4u5J6GD7w9dHAVrz9w8Ugg4SKHp3RE",
  "key25": "3ukUDDNvPkLLWezML9H5bL9X2RuoNDPB9NEFFov4HCbG3vZRzPBxt2V7j2pqxWFeGtsLywYSPU8VNXuA8gpYs1Aw",
  "key26": "9GFQ8L9vE1qE6vVeogRkQJ1AKLs28Xd9aE3q4iwQUmu41F78zrUxpcrLKSr7fVFSkvHNWG2vg9Mo6NZnBmAqHU6",
  "key27": "5YEsDCKM1SSeLsYhnRcVJKoAd4KUzgirLTexxZ4TLDpKrGi5XyCkzC1qV2y5YGQM1itpKvZz4mMhK4DwFREexdq1",
  "key28": "3BRLqJzJ8K7VpFyJM6gCNvp46nMT5QoHZeT1vAPGDPC8WFnu6MESEVhkY1jtrEjNGBRxcmCz86XSTgvUPKc3kwdT",
  "key29": "4m22qKhP4wqvhr5noNfCDQTtynXCmdXCjgwKwNtvdJtTq5kwjGdaamLyU3EWPe2q7sM9S94jtsWZj1ivjvWxwbXt",
  "key30": "3t9gcjHLfw1EKZyLBS7fWaUwFPyw7hY86y2KKx9nNpH68N3JqoR2zZrG9J8aVeXQdc9X3Vg2PrXqV8QD3yYCGr87",
  "key31": "5S56Gsbvf7oL8SPhaF6CVJTGVb4iKR5Xxh7sP2uwqnHXGCQqeUQ8mywtgMUMyRTqRVjRLiTeu56qc4gKpG1iyeJy",
  "key32": "2WsrSLi3MaWtFNSvwp8tLA7emRmsAEckpKek6Nxuj373HYAE6p7Esics5HbKjYL5nqESDdPJBTyAoWJVyCTSWp9j",
  "key33": "48fUuNvqLT354xZmfTkKYudNMv8vdod46J9zkPqXREvSVRVENGa8M7Xh9yBNFrm1T9uXNUHVuGH8KdNGtSVZrUDU",
  "key34": "4swRj3nAk2bvPGjNCr8K2Ad2bdVFdcAiHyHVRm7sakgcd4HZT3u4STi7WU3iKtcqBMbwZzSxqVHmwFM75WMzeHUL",
  "key35": "3jTYibSnKGfnb57y9gchx2ppEzZxUhaWwuowuvzRCZNhDm41sGDRxXwd4wMvBiwaWVudZjazhCGsRCmkCSknxgmA",
  "key36": "3t26HqGNKoW1Q96UvDrwBBEHmnH81EdWrCPWf5qHSdaHi47aWufW7nRQgWFQaoK6DxMQXi3CcZChvTzqCRgXibKB",
  "key37": "2HdDem3gTPkZJYQWyj9gVKq8D4ib79Ps3d4yZARDariSotEiobTHVqwxajZzTBpuvcm71ajrzvtrLT4tQuKHRceU",
  "key38": "8ETwvKB9KqkUp3LG4eeRekqxC4XnkVRQyCJpEwW7jofS9yeECUpbiNLkFW6MCyzU5WiKQLjeRp8AHtyM8RVNXFH"
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

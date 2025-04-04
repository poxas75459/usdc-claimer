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
    "EHbfcmToVeoodNCCK2FpZUgvygNYKdprJiHJN7WknySJpqgD4coY2UthLrAYd6eoYbvzWmxAJgAXsK6i2sYCA8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZiTiUSfdVSdub36heZNFyi8NUt264Y1q84mSiUBkF1WGXFdbKts94JqnF44CrLVjmHJVGZMgaShNQzKQqUW7iE",
  "key1": "4Xptr1uLtqQrXR17JbBQKa2Nk7DFSKFabt6dow6ncQ2GtZxKg525QjDKHiZvVrGdPo6W8h37TynRRp34dzmUXS3o",
  "key2": "3D6pHY7hjhN595FeVvYxTA4aKq4iKqUcuawmgCRNS9mn5NmnkEejAGN8ArGCx9H2JQpnuqwvnXTXpYH6u47hyztj",
  "key3": "pGUVxsQcgFAoqvKwT73XDw2ym5va8zPm557N81hruk1KHKNSzcXwbsuDZVuWPiYTiMXPA45E8dYGDRYbk7Tvk1X",
  "key4": "jDc1rsTrLtM5ULrJZeCEW6D7VWMLwH3Z25x6zGyqqQRSJ4bZjsPapkCAn2SVcP97mwB9r9g8B1x8E3BtQLKAkNY",
  "key5": "2nTn3MyEVCzMbdAFifno4vcC1ijUL66oytSFsWvbKPjvHwKNJmSaAsLaxgJ4iHaykc2o5Mw3M5XvbDnPB8qznFt",
  "key6": "4rgEJUhL5JMQj3PgNK1sJDqU95yr8Xofi4358vL38DsjQMpvTCx8mLJqkjDbhkqurd1puzGbfrrPH2xThjG9VEEM",
  "key7": "2cg3FwdH2WyowpVxfeKsmxpugHMn5gBbrc8ngEvodobzfeYbKKqxtNnV8nK8VAS6xrvycLPnL4LfCsJmnbDapm3X",
  "key8": "4F2fhwwF4ue5mahyYQDCHD4VMCQyxSRjoFSzMRxmnNWDfAE9UQE5wNJMUtr86coZRWDjcG5Z3M1yi3GJG2QBxtLm",
  "key9": "37LXpdterpdzhxBeJszD919KAvycmnBnTanzuirzY9DkjGLcySgkyV7xHdABHsPaHGpmfZhAN8k9NUt2ehE8Ddsm",
  "key10": "3Lh5rvh6TRwtHnsTyVuit9q49GDBMnxPg7fyXQGK2LwNLTDgh9ZucKT68Rj645YtodZFfMDv91K9KArgHoqy1hFw",
  "key11": "AHPxFV2DzruiqdasECGVijtDNKGoHuFjcq6d9qabApSnGHEmi4jff2rs5peqvmPHwwzLspoenXgZF9rHri5M3jx",
  "key12": "2gEz5mknESvj7wsdivozxAP8mxfB4QrxGvegKVGJj3i7qb2wjJwpBj61UCz13RuESfeBeXYx978gLzUzcEdkYjN2",
  "key13": "2EDRL9Q5QxuaxFiKnx8s459EkH5Qcd7CfuH7kfevvYLKPey3Y8jDzadN3SiSFrgaia7WE5Quuf1cVRFggpWsetqL",
  "key14": "3Lb4HEzJiEePp49oYebJ2XXa8spnBCvi7Zr1Mf2NvacHFfwzjTa3u9ZCED9x3zABcug37Py43rRtxYK8iKVDz8cd",
  "key15": "pLcqg4YSjGSqELUj3Wib6rkmo1p6XazkxyM2XecohqzxbPTXXyfbqyEhbvF9nyKQULSa2sPFhHaw5AmP4ZYzFWc",
  "key16": "39ExnahkvCmLPzkh2yyWZccA8PyFFsnpoKXPke3F4ZCCLHKn1SdB2Co36Efg2rVRC4gffQVx6sEcXc4yFJamN1dV",
  "key17": "Ej2DeT34oxwDsCVJKmYWguwbi4pHzpJJUuKDss7j4tkawW1Wqnxx3ZoLTPprpsjng8B8TgsioBnRpjBkM2fGr88",
  "key18": "2p4Du6JjfwDyS4kP52rgJD8Y8ANKWnbuV6oT8CZEU9cWPNourNDNnRzUES7ZWcWmGS8V5HQmdrN7YcKZKpsjBrxj",
  "key19": "4Ew3LYiMUipEBZEx8i3HKZgnJ6ZAmq4VMnVofa2sYoGK5oYsJSGmUVX8JKCJmbxGt4P5hMbfXLsQ8Pd3P7GoepG8",
  "key20": "4wFhopfzPvFvwz31HtsNRwegyxUmT4j6CKKAb1LM3b3jSLDPC8d3YtHfeo26XPbyT4CdTxqnao8XPgrgtzQdomW2",
  "key21": "4KNZRVgVWwjkeURcALQWwzgJfXSDPFikRqZEE68P3kHsqC7y9wh5xhrGsUCd6zR49Ncu8ui9cTh7ANcuaxrHA6K3",
  "key22": "5pRycemciiAXFYaiN7jSFVc5KxQK7vYX9cBFPycNnPv5PzfS25cDWESHP2oN9KADSzLkEoGZcHCR5C4PJMDRR4FN",
  "key23": "52MRQbgEXmGZ38RBcNUpRtu8rFywUGzGdxB8Uw3GQPAykWfkqdtpYeX4kRqVcJqddM9gCE4rWLDDP21kaPAxG6vT",
  "key24": "2YozQQm3VeaXdX1UkRVMYHUKuo29GY8JtMQaMfog5RUU8sRxcNPQbCy5vq5fXbByg784nBnBeRgJKDphGyWnrZrJ",
  "key25": "3zgBKEvh1j8GFc9d2YKue2tkBucEE2stfBdRatJQM7RrxVVgHdJuCRjyN4HMjpGCLswjCNLs5yLDH8ToaCprVBLL",
  "key26": "xYB49ib4jgr2j6NHhYroRmho2xA2gEkiNmvHtu8bAHsarEo8FyiyVpkQECncVtHwmZ2AcXSHnmvBr3qNDpEfbKh",
  "key27": "2DXo8o51v41F75Xb8eSUcG1GXtUekexX9cNEzKtNXqrjLGdg9m9MGhwqaMrf2qim2RWSHTbRyWWQ9UDxoQyoaqg6",
  "key28": "48V9fVXwRSSWuu6R3uYtMTmcRhGuFQYDVMSSjPQ2ykvxpQYTZ6KXbq7kmkULTdrWBFPwgrVDTuh9qyn6aaYKwjSK",
  "key29": "4EeLmsoFas5pixW3TtTX9VJFD8t8jx43DNQG9m5AKad6sSYuM5k3iDvZD6Z2uQb4br8V7XzBZkhg2JukazLEf8GA",
  "key30": "2PtvQHk5DaFAodU6EMAyi1CmM1HcRfhyDbdQboDcM8kk69kVkqjhqSEudrJcGYPiJrvvpcSNSq69nRkyGmAjLUCj",
  "key31": "4HEyqvh1V7vNQwEbVbUJDkUB3e6CVpBhQqWRwbEG66FoPmrZuexroLBs9g83Mu1hMTaiQBbkTF3Jpwsb4Ydk3rJb",
  "key32": "Z7Uztehv8z7QYe1ka6uc8pvoR4Sgm4A6H2JgkStjobh9xTkBySF44eLp83WQB4vpZXDTNChcwFjEjaofmAL49B2",
  "key33": "61zy5FZR8d1zuaVDVi51tRiNvrb4qzhmt8z1HGjvgSTVbaY5A6dV3D2K6ZXej5u9TTeYoEacqN8UzQxSdwvG3Aff",
  "key34": "2arysdgLzN1UdT2PNoo1bWdurTBeYxwu92EDcJJWGsw9zA9hxEqwTXsQDAdGA8nbmEsrU3vfvdLamjiq4Z3P4Z9D",
  "key35": "kaj8U7D9xHnxXsZE7k2XXR7YB3m9nTGApbVNPggAegMdADi1vVfRFxieygYg25K8egwyNXNb76UA19b2mcs4Kga",
  "key36": "5w4R46cF26oUgqUD7WRiZKxokN6ryKS3mBvjPXTLxFtXzKHjEygv3Hdjz2RWv9gxEBKyKsSXBdQiiVopF9Ff4T98",
  "key37": "3T6g1BBjfX3PuNmiRoUPwDknGSCY65EtgHKQpMgrpT3SRzz1yPAU4nzbuJDqbyKwnkGrpYoN6GZW3iW1BKsvBrPy"
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

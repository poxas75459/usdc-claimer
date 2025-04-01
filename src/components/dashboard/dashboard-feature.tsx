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
    "65JTqhgAEnCDbZJM5DMYM9Ea7GabKXAr4zqi2hKgUxAtYYCTZG8Unoe4JTZuLERxLKqvubyuEoTVM9q2DopoLmbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rb5mLikfKZFiJ1K9UnT6HamCDMNds9Mnk4tNzvAi13uKACWwqJ8gpqifkyD58bkmK7YFmUDW1FRbizWHPRxQUdd",
  "key1": "BU6zBbmHwzzUn19kp7aHP8qy4VT2Pe9sPSLSHurRgt9AAAEsYjrwZi5G1rXbGrbgEYZitWfqv75wLTTU4rh5mJS",
  "key2": "24SHjCFjNAVSdWEK8VWK8ZRuVwhZqUgVPT8oSM32bkzavFPq8KvsepZMAQY2h6tgr2QAqBqL3YSitKKhUSTRBWcr",
  "key3": "5CBhArRYU8mhbXGKY4xLs4k8XxXm1gsiF4Lxg2ZLu27FMsNovqTm4DVuy3Th1SsNYpj4zmoCQBD5hk5qkjmZmm8j",
  "key4": "kWgPTmr4fFWpqbjQqcP9bfj3WNX7TPPH1MN6CTmrvpKYTiGjNvkz5X4PxJrCgJ2Hg2PJzqMuBLbQBaqi53t9Ebi",
  "key5": "Z7Bz8cSHx3Cz6LXnauEF4LJrhKymqUJtQS8urPM14FdTb11mKjhjJzTGhBokupzGYDDWHwKiR2LgAGY7Y5R4dnA",
  "key6": "3FnNyCNshgM1tDpkQer2CCb2nhpP2h2oe3vTzqmmnowitY2fnx4GvSGVgY9QRCJnRUQojfRXFekLmJzB1dtUBYeL",
  "key7": "3WCyC1is1HQ4amUPtUXUkadM5Ru6Tbkq13sPc5JRmwkPNACwuPcdLH1CM2GwYBaVDbqSHMiH7rdGM2BzbGxcbxwd",
  "key8": "2BQdTXSe67x4UnPuF2xeXoXEA2JKfH1BVzoV3cuR9jpFtn6mEL1NVhxLfnKPkqRxK6e6YfvBToVEgg2ivrSqutcp",
  "key9": "5iuUTrHy6hMt2bQaS6QKMYW7iJHGLjAHba3FRDcVC1r9qxRDs2ejEow1XpRTMR5m4rJXtacrg8FzmwLRKtTKCoZP",
  "key10": "5svdARsDByD17X4QXYM92W8ZMBsvzsXTpR7gJ7H5cf6Ar9UomevEPufoxSN1WVP1UbLzUqG567W57FGdd84Z2WkU",
  "key11": "STY8BnG5zA2EBS129Pi5NiK8FhWshtRibMvhpUVVHobtazLYQ17wTSbsfmyMW3AU17aDSnSevbFD93roQcMUNEj",
  "key12": "4biUcuiyaZUqDjnyd2XMhXji2Vv1Z4cxyfmVw2BhhtXrHTqmUgQtKDcPVgAUVMSrVmR6bpa8JsyELdn1W3QYSAXw",
  "key13": "2XpC8H7wKdtE42A9C7dap21BGurUWPQCFYsnegzn8tBiNpc5aAGxokJpU2jx2iV8LxhmgtsixMDSehMRko8gGDkd",
  "key14": "5EViV4ox5XeSJVRrzm7LfeAfYJVqWfhRamybE9xg6f555EVqLb4JX8KfEFJn9fnzNo4cKCW81iSYPBfuX25xoFac",
  "key15": "4AAbRyec3ZB7K2Do8cjea41dPoZcqubEvZ5rkZP7vjn4oAqG22pZSHjraQKbzVTb7MN1SrPpkGmm9rwczeLBwNRr",
  "key16": "4tK9Yi5FFAhfbVSVEVioQc5ASCKAdiswde67RLVyq4Kfrp5mkX2H4kwPZx1yW8GFcLthrp5SJYmrmHw3zn9YZvwc",
  "key17": "zoZKWQ2P5aeJurPyaLUCgxh1r2nM5za7Em75ZKV6eJKKLmFC4n4r7hiGQtPjsmB5TeUwsDYpFcPhUr9CSJkFMmk",
  "key18": "3sekNeai9JALTq65nC8L9WvLcRqpDwtgoFpPU7gyd2rUu8MEKafLYHfAQjnB1jZAmp2QJnjxhmGJMXy3eqtDkqcF",
  "key19": "2r8WnE3szEUt4zZ2UizeewTUEy5vox52m7nRGXu97JfA1FhFXugBgMnZn67nwkDWesBZGDuZaE1w1GAZ8Tpj8sE8",
  "key20": "4cDj48ryTCDENicQ72g3CRqihGMNviG4Y64kAdCyAuLGmkAvYQcJCy2JB2YWMXdhXZSdBq5Act8AGUftgD5JcdnE",
  "key21": "4mSDjtkWmcTGagA2uHogsb18mjiU8e3NXtKad7ayJsD4CQ8GNm51HgBhcxzcWEgxi1jxtErAnHfwu7JXyXvvLnk9",
  "key22": "4oPMewmmRcqB9Sy2fFcEFGuVnVhuoW73JMNAvVAEGc25Fbu1UaGYkjdzQ6uxk5V1uiWqwuTnA9gDnJVuMNS4XaYZ",
  "key23": "4bMFLK21poUtLtYXGimsRSuFGUDBzHbeHj2trekpLgxL2NiLpfJrys4ZjbfKiSZy6AF9YQngQfUxrVvKdJ81mBWu",
  "key24": "4zbM8M2uixhcw8Uks4RSvNMj9i8L5DRVT8uWZdaHGR4XhLuhkswhpfws3aAGoFdZHxCYBNgCfG6vcMvjkeqAf6ZE",
  "key25": "5XnWtcVa8mvumhAj3YWs8PU97Utet2tfsSnA4ihFLM2LiAKXJN8wH7Eu3ceN29P5sE6Y8yshJxzR6s46NFWAK9mU",
  "key26": "3NKmxSNSrsNVh3gUyLTQPv8iYsGpeTdBExe3DzLTQnwFJrJjd53sJPqCkxdAa5cErch6Qeq7naZStqS6jixnW89L"
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

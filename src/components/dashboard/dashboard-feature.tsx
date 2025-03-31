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
    "3kZgEqJNi7FCC7suB3oDwD5NqgZJXKotrLQHzw2Z5cpWxY1rT9vbyAqiRuTWvycPpZ4Z629kPyazDUanVybrno3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQ2uvr955Xr7taow23UGr8Cct683SPGVoYZPG1auAdZJ15HZnVKMG9ko9BSgYCxfTdutJEjroGNmXacMXRUxHUm",
  "key1": "42t1Emxf6EofCR5C2y9mMU5cD4TuCMCmFaSaT1imtk3FCg8WygLFoJipRrBTjjB5YHFt13D463zKEp8KiLiEUTcV",
  "key2": "4EWE9DKoRvBdBRXU6pAFTsLCcKQ8SyurixXjV1fsD3t6YtoNCFWU7sVYSD9q8AnGeayU9p68FwYhuko5TbufAY3m",
  "key3": "6XqpWxf7eNi3nh1R3aqx6YyqTYdMD7EhQZY5xTkrk9cu6zsiRLpmvrzk2N1BzLjs3Ez4t9dXHE92ZDQ835tnher",
  "key4": "5Qz3e9mSzZvTDH8ouQGQSYyJDbt2TPemBrHu1WfE7PkAN3JnBP8EXJA7pwyCLfvT6y1Axjj2ho7iSzsqNoZ7veRq",
  "key5": "2ArAE1yuKRcVaQvG1LWtzu4dBnCycVneWkHr47q8XuxfH6WxzyRwSqcDyHiGv8puFrkLti3pomoMiTE8W4R1QMK1",
  "key6": "p751uRmYZH1zoMSEjkbyfBBskebP396fodGiDxQHiiverbYYhMXdrSLDna3CA13v5FJMbS8MqLqyJTyWdVJSvAH",
  "key7": "4jv2bzkGy1BaBt8Vri5EgHr59XVwZvaExsqpiYWFbUM7cZz8fEgdSeDJGA5TXyuaUeLNev1Tz1ZW8TauaMLgXjFU",
  "key8": "2L2kLBmSiJA8U47TFEgVyuD9gHfrLvhJZ8RwhkffMtfSi2pC96ERTsnDpcbU4QeeSgM1D3t7LvFk8mR7kRaf5nY3",
  "key9": "592xoHDehuCjUXGLqtt8pK3TkKEqjvCidNhrwsk1PwgyNJa8N9tZept9jnqL56cTkQeLtabMD3dxbBt9Qitd2uqn",
  "key10": "5qWyvCG5WeKPNA3idoav19QLxYMDf7vLwdBVXxDTa6VHH8SUyE27qcQHtEjrvABq6tCqBgb68tsSqXXCWdSzoSnj",
  "key11": "4aVs5L9wk15rzrxziq1wLuVpSYTFqzy9AETue2d5sn8t8zHtyyN9kfSGc3SVTZTMP4Y4rHhMqfm2e8q6UWz8CKGZ",
  "key12": "5BC4Fo5BMg8m1ny5uAQRL265dNDNntmk3Tup9X8JLfPCyYs7tDPc4K7ngwq4cTfyKGQJvvop3Mp52GcGxksZYKv5",
  "key13": "3skTyyHWNZJi5HQyWESHFvUgQJC5gPpmqETUetaf8o7GteewWQ7SWZSShvNEN4Wq4BURpkL2uV1DHZPiKZEvS7Mz",
  "key14": "5oJUfEBsWqZYC7CZqi7LKZKANhHNnG6yWRMRBPMksrz5NmvNyPBmBnhuRnLD9avmA39mdWWRQ78QPqoaPQwiz1jo",
  "key15": "3MaGiynLP44h2NUDEjA4ZEKETHCRRFJ58QVF84rpprTXtYvHAWo2QXsWe8VQyH1nvNfQTEys1x69ayDMTDtS5udv",
  "key16": "jdgLu9vaW21dfA1sQ75LJyTNsD4uLZ9ffdhPQFGoYBQV8VJd2AXKs2tLpv2YvmnXSpUSYXztKogLpSHJkvbWHao",
  "key17": "2Ge2TbXb37SSoVgtghfXaNZujtREg5YZwPhHEgKYHBsHq2nYLhjBQKhZprBtR5pwDWkskba9ogZyPEQz1Tfwitv",
  "key18": "R19Kz6gEHJKRSEKTdRCfLMVSYZb82pAH4x5nqX27oSaYR4WNwJ2H5vniT6KaLEBdeotLkediieREHtHUnHwh9kj",
  "key19": "2rzSTwuCXPMZNFjLAzo9zbfwFnzd91mnVvvEWAJS8YfCiG8axMaHoCFG6jWn2H4ska69e8DM1sGhYXHmcS6t4W9S",
  "key20": "3UEcahX85fM11mKV4HhXRZqjroxtwSTu3Q8QX2EG8qFYmX2KqcWG9phkk2Hnn88R8QeWNnH1Db7xQxixWJdPxWvb",
  "key21": "3iETd13EJazVB8nGb43wcfxUGzkryWmNw4UyYPPiY2PjErNUjYR3CrmNkWahkQMwZvCzyxSZq6Btj5VP8V87iRkc",
  "key22": "3EUyMjtFhbztf6pYmtA4552gKPr61pHzXyKM49N8RW99w4EWRHAmHcRfx7GRgKE3KXheQWFMGd39rexhUcF2Xhie",
  "key23": "XJpte6Wa37XuRsFVA6RmE4t6FyMkpDASC9bhDAzB4SKSXHQDvD4LpjkMYoY7aGyPpFL4j7NtdMHaXwBeUjbeJSL",
  "key24": "32e135Pusd2FQxttczGJ3voXsT7B3r4S1S76DVQxkAUjxmS1hR56EMAj3NFGuNTYuPXVjwVcVaUYiqJgwmgXnPAE",
  "key25": "CZaxLmkphuHJdGBGhsGS18ucAxfQfxas5ZsjmsGyrrXP22pYQ8rXybh1WFhEjvRJBPQmYJ5U8o725sGozvcq2J8",
  "key26": "4vX5XzUEmUCUwQs26cuR4RJKw4K9y7ozQTmy8oZGPHMvkZkYKWFgMnKZeQeNZh9DgQptN21jGpqLY9rx5qnC3fRy",
  "key27": "5ciSvZszaQtQu4yVXXyZNX54jJDe6XBGmbGzET4DYHopVpifxuBkhUEoYhy7cTRS226P225ekqFAFR6i4EZoefta",
  "key28": "2hwH9WpJGHvDorohuPm6UhLQNL8PabvqpJXMcZuJtg2DJwwWBQWzb5hNGkgP4JL7ieutmoADGRS5PWeXLpm6eUiE",
  "key29": "3j5JPCDMwxnb7MP6aMfH2mJVKpK26EjGkW1zQHH6AYoiE5GuEtwYKL2RAJHGbA5e5EsQuJgsJUUEt7jCbM5fAmwh",
  "key30": "2EGFQrBXrGLBzWChJMecCciJ1gPTHM8XYZY8cdr2mTkvjsMP7XzWYWzZFkzExEpvmnbjfq3gvdF8TvYGiKoWi6Fs",
  "key31": "3dSfut5HJBzigWqGj3fMSBtXBYTpmXmVeKwqFWW3ya9kRFzZrLNmZMHaWCHdQ4EbB72SB3WimKFx6HFukKhvedWo",
  "key32": "3T1pnUGQGzx5yK4ZgU2961z2t9iLHmwdUkgqdw5btUTmz1vJbVwUeT4im1WptB4c99r15hNemcefJKv2kcAxAmbf",
  "key33": "4vDYM4btajFPoBhbk7NofemW8NzHqN14xjEUcAzc3hsmqw5dvhMGQHkjjP5txmNE8RHne4r16WK32Ch1R5iYAYJc",
  "key34": "wLaZfXCYJq2wxNURmHPcpH1whmeBTzzWd6QfTnjsV3g468sQfS9CUczcMkxj4zr8nbjBTCRC1LsbnQXCz6Th6ft",
  "key35": "528vN7opkXxTseEbCxd96qjem6vWCQU78ErqKtmnhUWKs7DbWC7jSgRyuJdLWTQZVsZNmCDW6ZMhT7PAC5X672QT",
  "key36": "2zAN3oo9xna9eJxiegDqpk7si4G8uq5F7LK6s77iR21oiShT4ykmE798vMEM8o8DfAmzi1ab83BQvetLvoQUEikZ",
  "key37": "3H3nwzkHPDJXCvWz3M5WZ3KfL3Pukbkjq1YaVTsWQcQSERYVr4EmxYWjrmVvTGRA3EmdYi7oKrWE2FMwLVhJyyh4",
  "key38": "3jXnzuJhsKYEgm4CNNk4HSkFvtJyCmWNpHqMHEX43cxm3dU4kcJ7p6regrYw2gdRcHaREeAV8SvxgoUXNSN1a1Br",
  "key39": "51sZCPHzK7mFUeqKqAPDKFYyef6jVhnBt4JPWmKgCCpqgbVvannn6qZVzXWe8gkYVdkwST29qTyj4CoYAkYr7FDX",
  "key40": "3vzVRQCCoVxPd9eEM99419BnynzDs6XeTkPwu44ABGyL44kBMZ5e327dk8fJqjtbioxcShkYVD4PEQNr7qQ2GihK",
  "key41": "hVG9BfDHDoZvGTXdk9gMi8qWYNEp2HKJfeYwt4HYyZu1R6txqStiLm7ncCSbA8Sg55YW5j6dejv1PnZoAExLFDy"
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

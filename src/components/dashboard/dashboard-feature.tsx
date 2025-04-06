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
    "4fS1fG7PtEJ7ovhN4BXewBwwsa3pL1ejTp4PUTsmeTE8DJoF7jfDxiqP3ffKRahDfoEiurdDtwPhvh3SQNiihRsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQauX4Jh9A4FYRDx8ooQKMEoPmrohRaimibdDZWY3v5TRFmZxBA83VMZe7FqVGVwcxxsc5zUjVB36t5yL4R5HXB",
  "key1": "iNLYmVhZiHA4Szn1QqD7Va3iD9AJCHt18YiQd4Ui8n6X1izt1WYBJTS9xLEWpU5GKNsJU79HLXSWxHsp3B9BXNX",
  "key2": "4oUgFKmahYbFGp1H8K8Co2Xsy7vHKg7mX59FMSVpg5yQaeVRYdb7jxgEHByLdRtTnZTgd3xZGnC2wtsi2GLVzrVb",
  "key3": "3Drp1tXbCcz3Hb878gA6wYqrmi6Aqa8MqQ76Egmyqsrkngdad2sacZpJLzDkgrCa4eZtRrD4n8SBTg6Vnq3r47m7",
  "key4": "5XqqAekbaau7FqY2S6usZdZ9s92oEHM4AY2g6SdJRirskKn4zf4arofeNdCyEPZgetMymgVsKgWbSLxXQNrbyyhj",
  "key5": "4RYJXvUu7CLT53fbbkrAaEFB8BFMZWcKHP7qSB6k1pweFCMNF8MmCjtnkhhxXPXvwbe5HEgV6kirZ43b9ohPUPnv",
  "key6": "4CqkxcU8gb4mXhXZ6MdLxU8gvJagWfLS6ZB6J3hP1kD6HjBCdU1aEcZhcpYrH25kHxCUy12bapRQJpVbnL2EWiS",
  "key7": "5JKuWpz7iE2YjBtXkAXCZyMx1eZzWr4nbh1Js6QrKXDzEtRCa7Z4kMMYra9xEg6TDRVyAusdNsUSndw1CsJh7mNU",
  "key8": "2W6ZuJbaVAEHRZgPZVoN5Dr4KHArHsATeTVdXAU9kLgkZSESKYsXqEvaANaAeEqaUsY7ZdwVQo6xxX1yJR9fckjD",
  "key9": "5trS5pfZCLcZV7bSxXkXKNCpakPSbbvqPx2Ut7cnWQZ38hFqBmgcijkw1jN1wSPnsi2KvtgDMKagAriVpa2YHpNs",
  "key10": "5QQpxsHwcyWbTDDMMbotGJMdXis3oBRPDkD3NBaQZV52Vh86eDgiNAEm9Tg6NAyvp5o7sS8ZNUBup5PzWpYEziRR",
  "key11": "3yC2TM4sY2wLw4xHEwAE8CLHoqSC1oQqrYr76fieigL7oQe97aySbXBiE9d4CspNu2zoEA8bkWT2q2bYGnnikALm",
  "key12": "YvgLDtzb7ykuprKywChDc1R6qpPqCzoyVQFqo9vrDUABUYg8DuRxe4Jrk9s1cQq4kMVtahj2bJ35v7biN4dSK75",
  "key13": "4XWTKQx33GvDmryMnpL3CRuw81dThDPYF5Mu36wH6RaUqz2txnTqVWCXaAF3P7P9A4EFkXD38dwgptZULEkdTGUD",
  "key14": "33R8doTFnKDE9JWVDzdeAgqUukSHBum6JGLTBVpzhCUeA3T59tmSPhVAvpzDJwb8nkQbznadzM94vyjFYzRUc93o",
  "key15": "2asQhhnw1Kb7EyDLsNp2YhrzUACQ36bo4YcHtdLQQRWNjftaromje8Sud9T836NhYTwWweo1daSPfNtco41AG2Nt",
  "key16": "4Rj5hxfwuohWovxpiHi99TrJ4rspuYfCGxJqLQSi2aDCsdLCiJWV8mMaqEd14CmwVArvSpAzDFfo1Ux8WC1AZNnn",
  "key17": "5eLco2NDLBZ6Jsohhud9rsrf7BD1pNneFe9y6YAHQ5rmMU4LBvXzoEXK8oregNQLpE3M5vzNxJtkHcMtK2q96Ctb",
  "key18": "3L9zEXLGCPChwWsyVvZYHwkGRDxANhBdm8yaEavEguvsbBRSw95fweLUvL2t8dETUo2WqU6DMc7PZS49aPCKt1XL",
  "key19": "SQ9HwkrkoaQUK4xnBQxFCmp635LAHUuhuouyrcLy1pH7mqnE5Nj1WB5rPgNkCp3FQJvCCYebhLh9cN8FXCeiCxh",
  "key20": "5C1ido2xbobkvzQDLZRYP9MwzsYbR74Lnf8B6QH5juLnu37VyypSGWLh6ZPu6jP1vp2JjSsKSDW99PF9wieXU7Zx",
  "key21": "57fxywpgAWpuLqgqQXFudTDw1KN2kJ7dycsVFHdDwMkPfhPsP4pgwfNN4yVvgdxQR9fXBZ4g98NUyThyeiMEdeAW",
  "key22": "PxKHh4uEztbfyqEZGUvEfjjuFxfh78e6EkHUpCyKrxVXJp85C2XwEd9PRj1y7rcpJg8tiWUKnAs9tGAkqeJycw3",
  "key23": "4vt7f7P2xFkwTrdijBrsRGm88NGrsKvTqdYiKPkre2MKR4V644tW5uXhy5rziS12cKV83QeRyLbEeiiv9krrzyyd",
  "key24": "3AiLempKmY5igcorXoqwdgpnAxsekeUmFD635KTG54QRjcgwRzGtmhde4ZFtUHvuZjc4VbAnvEuMcws5eBzn7Qsx",
  "key25": "DkDmNe6mVc5on4S5G5Qu2cJuyVtcj9qwkdCnXP3cUg3S4VJVYe44Uam5RoNVDxEUHTJsp54hg9W68k2uCghixvH",
  "key26": "45ynCkTVKLWRqkshRuVuZ7R4oUcqeXLcqSueJ36yMXY549Y4unpYHwQRgKietKLRbkiVx479SRcuVMZtj8GGw8Af",
  "key27": "tKFNHJrhfhMQFS9aonogLgGH8n97t1d1RArDKaQSQs1GKjWdBAYBSmKXuf5xRXahjgesPmXE7KUye775aLA4M7o",
  "key28": "3XLpmxDovDLXvxteFchyRQLNn9rbjomZbDgkRujgs4fWejTrm3HoeNSVZaSTqoMDFWyDqVSU3QMC9fMP3PBR3rWu",
  "key29": "4NHNxx9fNrikg6hfzhmNPzLBbitigUC1s2JCwkGh6S1NDahpUSy5mRmWJzpAmUWvbui7SzAxpK6sXQDNsg3cw8dq",
  "key30": "2YdPmz8E9qYxfZHhqeiDBvcZ3Cnws3R7EBjVvCSa3pAL8a6XMs98UprsSVtdVfQ9xJKLtB2Xs4UYirQpebWsNkhi",
  "key31": "2SNWCTFmLtFC7RZRg9ZHMg5yiu7bSyUFUcDHA5F7kgZbcLgeH1pqBubEnEYwkMF7iTsNz34CfyLo41PnmWQVr4oA",
  "key32": "3YcNfC5DRfvw56UCiDULrN2HdA2BksBaoNBtMLVVAt31cuGV58hHiBs4hi6KTXzrmp7gbTW53XfzXrLdoKsdnVdF",
  "key33": "5tUPBqedFBxY9sMrpZ9ZjKwDoobfj3RMM94iw5QST9dDFzghJtgPJpFQZMVbrM6jrcmFTzFdSrCTVz5Eso7KCLM",
  "key34": "5GgMUcQjZJwN5BMi6vKDKXTGo1GRjJV1qT4nEAuPdfgyCQ7QAwupgaWABCjCJahjHwaWoF446Tjc9hHec4Jyp6Rg",
  "key35": "523M6x9S6omiHQETgVJvaYmDmgV2AjoeuSgDxbKnGEexLhm5JMrEbkB23frj7JSkeVWpvDFtZVPh93XFcbkxRZJC",
  "key36": "3MFF8yXbDT9iTMAV23GF8bNQ6HwAijg3L5xUBzQU9GqJRLZ7QWg7aHbYgvRsJrNyhf5YJb4MfjSpanyQWcwueiRy",
  "key37": "LryiwfNzJGEwhyxiGfXRW9uL3xWh5pWg6Tv8n7WUHSNPfhTzwsMfVuES86vcfG6kPh6RV6aVpGTJYF4uycT6yye",
  "key38": "4ihNGCpNjnYXE4SdnpWyLUe3Y33ZntX9mFLzLxkuY28pRVaAt2PGcRJKjgpGj1VvWLHUD6L5D8wtJEptnqLY8usb",
  "key39": "2U97Rg1QEAbaFwLdZiKZ5i4ALQo5reanQ8c7vbUHWF9699RKFFu4mBdaBGaR3vG3B6qTPQ79g5xVjDj4svbTFUx5",
  "key40": "Wm3zdHKSrKrCbv7WNcwWcV5s5tuUirX2bznCRdpzNBSc37n7QmfcdZRBhKQcuKy1EfWk14NWa26vwwWKLZ8MAn8",
  "key41": "NAGaCYDms86vKEEQ9Hxnrynz97s7hgpVxRGTNLHTjBH8DUuzfGjjm5TG28UAhGAZM1kcwEo8FHnVHpnTQ3wYnJZ",
  "key42": "35kopBwC7phTd3DotWJ2usqJY1zkQR6BEKjQm4PMLgsMGzurn2ZiYsAQ6CRm9bAsvESj43Jxy7Zs1U3yYnanajX2",
  "key43": "A1DbkyVyPKC37VGce1Pi3kcsipmmemkoqLqP5g862C2z89A3TYgDH2r2qxk6R1M6ReEoFC2Edk3xNSbLxNmDbA7",
  "key44": "5FuEa4xLQF3tMGBVzbC9ZvnTGEx8y1e6QdkuZbX1Yye4Wb4JcuCcTjPyx4DENe2A1CxYhSHtoadtYfVZ5EBK8sko",
  "key45": "2GqLCMNAke2zMonijSvaY2TwQkWe6nBqQSsk1GhXYEJwXpUZLJRLvo2UGBDzZVuDsDZ1uJUTbRz2khxmgWZABDcJ"
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

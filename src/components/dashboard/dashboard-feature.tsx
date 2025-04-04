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
    "3S6ZCciVkuGyzP6Fnqh3fahvHZTNECzhTK7bKBNZN7S2AEVVjSq61cTK7Sfaay2s7QCZcKUavbAZg6a2NTThVYHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JwmZEM9rfkoeexTfXbESAUGSE43UZcmxCDaeUka1TMUDwujn3gY8ZnD4ZcX2zEEGEcFNfmb7qHMHJDKK428Z6zW",
  "key1": "sTSLzAWbLb8ZyxUvphzx9Bw2FsuvoVFh1bLNPHh3F9SajY5gei5Ahe9vQGTpP1ZPFh91RaRZTuBo5mZ2G9sNenA",
  "key2": "2AubnxTnrQv5hkAxeUYuLvWNXdEWuwge4i68LCLtswwXwdpyJUvkMKGoRXsvxx4np1STXzercErGnvq68Y6y55bq",
  "key3": "25fAAZ4h72H37bdtRTfaWV9KYoVTAj6n8nqCXi54Gk9p6tcgaHGF7kMFTQyMSHHy65mXJEEsLaERbBhH2bY61juF",
  "key4": "4LaPQTc1ygbu89SYzX4STasZomZ3swjeUDDie5j1KDJaNMjuCBx98d3kJtsRptsAps3VP73bnC9rNRuQCMhWG9Qu",
  "key5": "5nxJsrKn7otnRvAdk3RKgdiJEsBAVvjQizSPrYsq4oWffggqTupWpmD5L8h1E3EoaCHjUTYpuDy8W7p2jquZJCnt",
  "key6": "7vViQDVuD3pD8d6aEXMxbHaskoiNQVvGaCVcSGB31rUSHj9Tsj3KAC9BqEhiA6CRkxqvXYXvnbTR18NiqHHRc5f",
  "key7": "JGUnwFKSYn898RCdBVnk1QV2pmip4Pj61f3hVqBd78SJ5px1hd8563Vww7f4j6ed84iGeddkSRMhRj2x7e5N5bV",
  "key8": "2JkMWYK6aAgqagtjyGRWowcWXeUpbUscXAfv4uLq9k7YDPQrZcF3Pd9fY3cSKVrKMfujygSVeQZtyxnLcP3XjMQq",
  "key9": "WkgzUKoDZakma3naPsfC5VxX2M1aSKhKQqUHhsaP1ueRqhoUbFfBgh7AGrFqhtBHBni5UPwdYqu1BemfMwgwKar",
  "key10": "3BEWrjeVZkXjteYGFXdhsrXy4Emx1bVKrTQyoukBzKvdb6YK2aXGahCbJDeFHohFmXWddYyuw5zjneFqZGhEGVcN",
  "key11": "2tQaknhfxvZTmuoX6zjRoQruFa9HvJLBUwznLqnkCX6R6kb3usXYr8cLmy7geMhCJqaRkw1x4Crbo2JN9oGkW3jP",
  "key12": "4udT3eMXn8rg1Ddct21rbcMbvCPDtd1Mzqg3LWTANiR4ENdp2f9K6HzZmqHxcoxLotMyh6pTiMvTyTUzaq4zofmC",
  "key13": "3YtUKWc2QQEqBgJhErPmwCwht5hVEFCjLGcDApjZXiExfxAZjrbymaoocq7mUaRPxZJG1VnMebANRtcLLbCTNCQp",
  "key14": "2wGrPyDGgNPzq6HQgMRxmcTAPHZgYhyEyWaS3UCLiYg89jPY3598XmA1VcYH2b3uhjt59ShH6Vw46KDX65CEdygv",
  "key15": "3tJFnAqSDWxeNkyy5cJVZkuW5yc446dLFaKy1KGGUM87yFToFW4byJrWomC7poa7xH5RBw1igmtdcbCMkocEgVV1",
  "key16": "2SMpeoDAqxkuxWdUnx6oRqLBhoCWjTpEUvgw4aCxn9aULLttiZXMTWkwvduukBbJczzSS374A741aYkFhNS96KoQ",
  "key17": "4oQxF31iPyHRoztGAysZ3yePBtc98uKqRoeNYNvSokLehu7R89VuQns9mRrQJqzNCWeCAXsmbUG8ynKSnQ7gqASB",
  "key18": "3jc4sU5KdWFxe1cc5mNHyX3GQuu8F8ExRicYRfoK4AgVn6Xmm8P4TQcoLWLn3XK8wP66VgZxE9puoHvL4i4ko9LA",
  "key19": "2X3x5RQEU8J6fxmFnLuX15jXWEto3ax9k2nGi1bZnq9vmWjRp17awya9Bh8v7jDWUnzQXBYffBGAUjc1NcDGCg8Z",
  "key20": "4iGQZwwPn2w2AKcpHz7f7bTcidwDsWDQXEs4xvPdN9thbu1QTnanzDRfwF3tRconY6L1t9r2TSECidShz5rNw4xR",
  "key21": "2zpQVZCRoSyAZEc1SjDJDnbUDBdviTmgoE15iNvt6jr8iaxm2SgTRScrJi8PK5ZSxNNzuxJLSkPnsuRovUmUAatg",
  "key22": "5zKk55YGfNv8Ct2xfE3yh8By8NbySVxo4DiQiNVDbuXWEJZbVgm42UkQWXS9c4DkxYoWZbTEDAk7r8Do4xxWgU7i",
  "key23": "JJ819sYyPdYbQjRqw4ivB7xUX1cXYpPpHeMsR2W8bEqN5jxwpi5uUtkqKyxJHhDScePq4F5WJLUHTh6gQ8JvzXX",
  "key24": "2MPbAPcXFpe6RYovqhAJvLYFx8QMAUUHdhjTdis83VekkDAYJaJjNnSvhxizFSzuHyYaqsAtYPudNquxPGHQ16oc",
  "key25": "7NQ9YCdaeoujwFPCrNCnyqU48LASfHXm9682oa2sz6gZsPSuqLaMKevK6rruBQ1ok1aTmm5cbZVSGCR2MPsL7xr",
  "key26": "xAUKeerUeTmw5E2xNCRH2RUjvHiqnvvwEajxWzKo3QE6Nuqeqqfr38GfTytgMc1MbBSbLW5SVaT31y14XjB8wqt"
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

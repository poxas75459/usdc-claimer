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
    "5vNwpUcTHYXVBQSiPtB3eX7xNRYVAFJGqeMVYnLttAujDKd8Lz2qQckmTKxvyvq6cqnbSLm2FUtvWWESFGdPjipD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HN9bE8jFUELo36BvCbdKg83eJARuotetgGDDMbQHxMvT5HyRKh1atFqEAzb1vTUnCYgDeQudDEzk4q7wum5UtQG",
  "key1": "5G2TRnr7gEuRSMm3RWcKY9XZdP7si4PdF7Lw5WdBq9jrGERKuqj57MekWF6VKD19qFhgh7LmF57aa96peWQCcmdJ",
  "key2": "JyoAVNUcVZsbyC9GgSpCAwZbaTepNbPaXHff1xR1nwcSQxtJwTXUcDijrxoUsaC8XzdXvFQtDY8d7YkCBLhMj4r",
  "key3": "3trm8zzxmyNwfNPhgdEEkgt2B9totRog5GP8ra7Uc8xRy4jiKWsQtnvWAVCXTxFcsefLShyT5bighbzBgZpF7n1P",
  "key4": "2pU1o6Y7GggMngYcQNBpPr8qK7qdcJvJV1X8cgsg6TyEZqrBoZxMgGZeY1Tadm1Hi4pHx1h1fhAzQcaUajsTNHo4",
  "key5": "5MU6ATG6VoYtYR3awdUVo6wsEapNqVX4x561AisypD2e7hwQZJFWgxoJnKeJhRFbYTasz8NpTP3sYdE8qHAg9xDy",
  "key6": "5GmR83ELhLy6SuwzvDZ9HEPtjA1Z62fSgx3Ytaa1KSrsurzBbvgfEVAmPpzy8FSsJc2MgB3cVvaqFrSiAkBQwASP",
  "key7": "4EGqZikrVxya7Jpb5p6F83Q9TbEVeL4rPBzWEuPiBYrSx4UjRrCB8eSMcu3NiAbwmavn3SamVQfMM5YtoGUaq9XF",
  "key8": "61iCKaA39vHMo3K4y1yVE9QnCiZSDbP8nouvUiUDrcEftXaRE9uCD4FWYXg81JnVdAsfyCtEE7MjhNxcHgqAQfDp",
  "key9": "2L5q8pW1rBam4chjV65jqEijkkpQfufUqkZHeKam4xXB3BxbTw2VEQtJhXCweUThK3L8K3FxmTznjSg5QPjKGUHe",
  "key10": "2sTF7vAAVvz4UUi8oBkrsQR1s11pxHFve7BnGwQbPbKiMiR71icnb7ZzBSwXunbSQ2cU5M38sQpZYXSBBFaKtK5D",
  "key11": "3z7SnwWMSgQ89rnBnLmgpAe5BDgdzAvwWXsqRQxi5gTZT5CHYiBp6W6skJDHJLf5acYFUJ9DGcWKpucqSvKRaWJV",
  "key12": "581WQn8MieT3KeZGnStbLi8ZhDb4vg9HsfsbuJk1R6Y5jZ1VzhJrjSdzigsP9wHL9JrLY4k7ECEGfXCJGapkDM6e",
  "key13": "5QKRszvSpNNmxtQG9CX3NPTt9HYhVt6nwwYBo5gMHZzqV2fFafSwD2gkuicjfPVzsaB972v4FuTCfyitJNyie56B",
  "key14": "4CBRprvhZ8M6gBojTZNuqhzKYE5hQ41G4TBjDkKhzQE7U9zGoGPaRKE9rjhaPbVQ8VFpw2DcNiu5fbM8zUBhAT1n",
  "key15": "y8RhRenLkG39986KXcdjrnDBQcaV5pr3cdUiPPYYvwYHrgZHVqcWNRmdvQiV1SCGgKDX8ZKBbfbbicSBcAk8Zu7",
  "key16": "3mCMAhegJyEHRXzeSBWe4xc1A8CDn7VLKyaiSE1XMTYgPxUNSsFc9SANca85qerL4AXqdMbTknGf4u6Ne1QK24gY",
  "key17": "5hpcCf7xCt77QVXfDzEjFag7bqKSsnfgp72VV9mK6HtLTJvXKPTFxFuxG6XPiqko9CfjSJU2xmxG4QbgYpyMjR4g",
  "key18": "3r2C3m6vsy8qyHStZdFkHL7wctSx1RBAZsT36Rsc4TzwvAEkLGeNUpg8GenqA77GkZCZweeTDRrR9akypWyuv2Hm",
  "key19": "pSXaqvmGQGYWSmrj2rKdMNXBZdavNAXiEHFETGSQ8SG6JxK9Qe6Dp9bbZ34YAUPNfev216sbe747CA4ub2DsxuX",
  "key20": "4hELkmDJZbMY9L9jSbCtfPc4R7NUvwaMa2Dqs3SG9C5owRRr4x7738GFGnLYVuLRe6X52jB2xXg7BRxquzWmc3jh",
  "key21": "ACAbz4zi19fi8pQbH6nq9pdrcYNZG9xmSfCGWj6RE3he7g9jG2U1TqD8sfpPbgMAkXoQafeLStXikZSMjXP94U9",
  "key22": "5XXHrP76gt282P37Ai13bPg7CpcB5E2jpmcZZpge3LNndrdQm3A4n7zbWxu5QWhTtMg3h3YFS1wdVS1BnEysHk2Z",
  "key23": "44vvLL9wng5KRQqsHJZGnFvH8AtyXPXg6JXLYcT9uYRi6ieie2WfWRRMdgi8E7MEwqjzv9GR1CokfAHkLzCckfxv",
  "key24": "nLDkWowtXpVqmcFfN45hVPpeutA2E5TM53QtdZVpJN44PCFL1DCekSRYoi7LttV8pYwVAYbRi4iZQw6s6DgPks6",
  "key25": "Dd6z2WpP3QNWinUm5zNGLN8t9u6QcjWXSFo6vz12ZDqnVgJUCFLsigcvhoQ45HkRjJVHiQsEA37rgN7ZhztMHGS",
  "key26": "38NzjLPQEtUwJityjD5XyM7fuH2YhfemjTgvSmJUVMdEn9MkZhsuqmHDyKj1YRY1gi8uWT2TfiR7kevrYvGfVc8z",
  "key27": "27xeBewaMMvkWo6KnhPHn6Sa2wCvaDz2yCQMj2Hb8qNhPd2mQvAYL52XCCYXn3ZVv4zEstJwcXtdUxpTjcZp4WLH",
  "key28": "22T9uZF9fmbUs9MKHYM97vKSyWMoZNzh2ghk1wqX4CBwAWQ9dwm4TjKRCdDsgMwJ2BHSxQPA5qf6fwXEDj8fSHR8",
  "key29": "2U6YZxRN8obhcH5UqukiJBBrbsfzYKuBvpfg1ccotsnj5HK13LD9D1KTB5SbHiTgfAitkypHuLhjg1nYpD1fU7hG",
  "key30": "5Uukemez7CqNRnb8PR5KaB2bDeGBXn2YQBd8dqTzsKEfSHkFhVPuToJ5mATjD1C6BDktcrEmxjKFJUMujL9t7wKC"
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

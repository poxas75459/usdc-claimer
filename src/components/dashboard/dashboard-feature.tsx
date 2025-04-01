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
    "kdN8ASe4WVQYcAotduqFWcrg1VK8tJKSyXoCpdvT9T7z6QpXtBgYvYCd9jeMdL2D7z4jLoMjSeYXKzpULs2Nwip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y4G9aJQkr2cPEgoXpsupNhAG2JMrPHyEhqW8nLjsTKKSPijggAMNDTg3UruvptdhJFMDsiSqkKetDg9Usu2ri6U",
  "key1": "2Z5MESzqzEn1eWoibiAz52t498efDnjYv1XcjRp9caELH7peYBXESoLoQC4obYBV9pVwvzfJRqdPKMgHRmST7LvQ",
  "key2": "52zcB6EHRs1YN85xZyJ3tuMPv9UvT2Mm3fzQVjxaGrb3tN7Su4PJztFqaL6ZSLYb9RWEVFa9xQKVY4TGgnennqA8",
  "key3": "46X7TYqDzCTpCf7mcVVRMfLUW82VqjnhaFu6NeuWaJzCCEkvmsRm5hVKfcEEqfg6yUXh3nepHFmtNs6waWixdnWh",
  "key4": "XGzHg9P73eQwSvR8fo99jgfSopQqF1QYhgsdf22isZUFBHQjDji6UJcc5pUBUxadFgDjRZaU1FpQxSLYsBkQkp4",
  "key5": "3d6bGnF8N57F2ekUij44RVrjbTo7bbcQiyHuLEsnSzi3Ya3B1JdXS9HR69PUh31tE5L5AH2gfYV8bkGefeeWypyR",
  "key6": "3GuMWL69X7CS1JTGnshRKpdrmENYVuNzg89yJBtf55eghLZnn62E5ZeEYJN4H3WEbwha1Hijm2YsbrGmjJsvNBuY",
  "key7": "KSKBfGpMRT24jwgKUdWa3djMjjUJADPuiXyZbqczTDVb8DAn2uXWZCh9W6SzXY9qR72dBJzwTxnAFG6cNUrFnwT",
  "key8": "2wdZNdADC6RgoqjXWYZAR5KaMzoDkHSY7QprrZM7uzTXASV2UMw4HSQeJwbBoqibHCdJR5E2WV2Ca2Q5Gz5o37dV",
  "key9": "3L5Ezg2B1kkL4aTyc89i171WHPk64q1ZriLPdzg2Ctu6asjA6P4uqoskwPUFiVRt4b9wRC6y9JdLmQZVfLWy9CCg",
  "key10": "3SsMLD13uzFYgj8wqkQCQxJq86YE9kBDufQyrJUWn2H237LprFHb65zD5jHko2BUCGGfuCRmgXA5gi5JSEoqpDa7",
  "key11": "419hRVL9faEBDTQ8wVWG64jqS5NsHwJKtSSY8BKN8CmV7WybN4ZaYyfe8AKacUCnHhKaQd6tcmgYggNxB8kERCtD",
  "key12": "3qMDZ35xTVBK4EiY3Rfggp5SbDCxDtSmpgpnpsQsZMPzt3RMWCs61octsh3RNdhJy3FpnMx3JCeXoQYwDmvA4ow6",
  "key13": "4ExhotozZ3ULsHTs2mHY6ccaLRDdPwHxYdP53fedQnwKAAE2cJpakeMxMSngKZbkp3JBkbGG7Yr6Rtij12HgR8aw",
  "key14": "2mqxg39PCuizNAJ2T5SH7Z2KsyW9aVh35anREJznJWrGH9dhM7Z97pu3YKQsEjiJcCdVV3itYZsZLj6XrpBPhMXp",
  "key15": "RDorfYLAd8vEP754B5Rnvv8DEpiEtDviDkbVT2Vs8kH6KhdtShKAgSZp9ucRLVm425DW9EhexDYouuc6vcwkCHm",
  "key16": "5tyJ2zdgdWkqmA9XmPaaKm4YDcTXAkKRnL6MhtMNPqd5BJjworXpfbXR6YXSXT4jh8fXG8A1ufGjN5VSERQ8qi2U",
  "key17": "LRsrNjjVMxczcXnVZ7QfctYat5ZgZMyxMY1Hi8oDGeTQ5Y1PEaDcStPzRhb9LsQuQrCGbmL1zdV4ZNSUx3bifE8",
  "key18": "5K2zXMW6sp3MW69zEyUmSmyV8Mg7YRWiDArh1R56BLriNDGZTfaUrWc9bqZ2hjyWV8iSpZH8yk297JegY1AvHH2K",
  "key19": "4fmQo2z9Eyweo3W28DMF5WZxc75ts1mJdikri49HtmihYHpAqNb7VcJU2i5rMNs7gdaodhthdMdxbizkWRADP8Qo",
  "key20": "4EeRQi3JUTdRTrmUei7CVWTxT5hmg63J8ka11TmovhdsRVsYYX5PWzY8NgdFUC63enD6xhJbDhfbbShSbvGNczXi",
  "key21": "61QAaWL8SPRsYxgThJexXuycCxYSbzxeacVtVvLswqdng1e2RuYjLfwkn1VEDTxx4JxGufEq3YDrY8F5aLphNff2",
  "key22": "3AkiESA4M2JgdhgwGJL2DNL3x7CozFzkHCH5gcpqQUZj16c1z8fW8Kr33MkWfEWR9ode7LG4CdW2UE6dHHSj8UL3",
  "key23": "3Nh6jnZW9FVuVFNjRsMJBcAwhM7GhnnAvGtSAPfNYJdcoNBKrfXfeziXjBQeaAPcuk7yzQQUgi6sszid3WMtE8pV",
  "key24": "JPudGQq5x724bWV9VvtEsAqDUaBPY6iReZNwrK6DaDeD2LiQ9tAATP1espVwDo3LkfdxGEFp43bHm4MG8hR7xAL",
  "key25": "1eefDzVqrxXusy2qwWssrNV8WcUcm25UqTUKzswZCaL6NysTVGpS5RM5RgPtPZMSLzeCdW8SQN8dgoVUy3XXqvt",
  "key26": "5M4r3Z3o8TvnQpurMbrMT2rfQpya5b3qz3AZWWjFysg5HokmffQcnVcov2jCp5nWXFyichgtRkkzzYPmLPv7rgWi",
  "key27": "ZuvUpcCGbWGPHUhznxhaNf1aJ7eJQAp7vjQ4oKPfULv2Ei3eTKgb9PsCUCovTjAMmE4mjcwjaNqLfiNVS7dHfpe",
  "key28": "46UwEBK7D4fLPZ7AzBJz1Au7hTJBE7auSTom5SREodmsDGNtkAdZwy5kGBDKoUS5Sn7tHNJDX5svBuaupjJvh46Y",
  "key29": "36wUJZu3dcv6PxkpxG3L1zxDWrJwevq7QfkrsK4QcVmCccpr66dtooMCSvybZYLEWegsYXZ1MbesFRZef1hUB4yu",
  "key30": "9JHBGRCYRqrXRsgD3zDu4aFEbwDj2eMJrbyGyX7NLpfPy48genU7UHchRvWZx6xU9jKRED31mks1U57cPyXpjs2"
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

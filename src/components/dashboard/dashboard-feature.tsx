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
    "4dkMzAMfnNiiiuZE8BwVx2AoGa8RLYwGSE4vp6kbCp8NtqAjSDi56tRFkTpy4c4hsbXuGhrct4ShG5XVqUd41GSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZoazfhpCzcqFVv7VEbhfKyoHrchXCTemAsGykd1uX3L4aSxnWoXsSNxPHzv9bgvsmTfxoBmtWoBdTVGu4Nf1S7A",
  "key1": "5ykmH69CVyJBs6BnjFgDspFPEZWf4z3Yt3ZEH7e4NNKjryZytJ7uVmzzGPAtFpgTjfcb3gbJ1tJn9J5SdbXAyxxV",
  "key2": "3mzbhgqC7Rcg4aadPm7j3ujrcmBMKbLB2q9uiUeeJujwgrTZZ6MEEwrmD65LQSCBtHe8KMJXdyqMWQPc8uu6FLht",
  "key3": "5nxFxTSS4sneBxrvSCJKdJMrXerrcXwzxTLRJYjQYTB9W4iPX4NFXNxMUVFBmYtrK25gH6j3PBrEYo3wmAU3QiZg",
  "key4": "29FUuB7aNJLDjok3H983muVdwQPFczqAW9nr7JwBd5FEurf3cDX5a3PEAfDwiyWbHaLFZWTCNk92PmjTWMcEn47H",
  "key5": "cLMPSKPJwqg8YJ9xSNRNFwj4p7o8wwxM3iyknbTARHnBBSNDPut4e2HVWifRmgUUKn8LYjtjZSxQ11vqUKigohm",
  "key6": "4avsyXb9b6gHYJ4Rvf1hN9xrD9rrZgVMWSTAQKNPW4fAcG6fRPZL6rfBiRqtnuwP7oTWC3pgQvKpT3o2WXxztJUD",
  "key7": "45Hhg637Ej6iGgBCS5kq8fYGdzvxEoLZ6RQz81v93SuabYsxrhkNNL4J8Ba83RyNWSxfgFWrxpFGdRsX9PceSrDs",
  "key8": "39nkG5fxH1q3Z7Uvk4L4KeUFuFZHzS4Nq25CBWQqe2YfSZgda54S66nXGT8eBPUN73kmn3oUYMnKVZYEq7wWvijJ",
  "key9": "eyK5vppXmMftqtekkAoKPjVEVNt53bZujPhLjvAyNEG5M6QnMbsNSHBq1JF5qESTPoK3jQDXB6FD7hG7YpZXKjL",
  "key10": "2MdhrnGFAJn57hPweLH32sYawQTXLbAgAMkbywyyUmstU616qm11p9REcUaHF1TJy7Yudsax2Akj6w9s67hH7DtM",
  "key11": "5XArstTkZMV2dnTMse4PAEmdNfkBUi6QnYmSfJbwxVTMHaWU57ckiSnFuNbGoctbzqy2JgqYh5dGPCZm9MghVBAM",
  "key12": "4F5HXDPkw54UAwynNv8UtQGU2CVgiQcrVAE1FUp7JDm95QubL2xspKFqWgjayY7wFDcum2JXtX1FRSuPvkp8eHsM",
  "key13": "DQszAYQxxjJ2kfHoN2zSfHxWfhnmMRn9amnXC3abSNPkL6uKc3DHdzrFz7Ato7bLuWWBX13nJQxM6qgnuER5zSE",
  "key14": "5LYe1XsBiV5mzoMu3HqWwZ2vHqg8TTqBZcHebpChX1yHvXNcrbKUB4isBF8T8AMPzHgbTPcMm1RsLEFHEGYa3dAY",
  "key15": "5bGne6ebP9sCfzgPd4wwViDNbsKC7RfbBqCdWYPyvn3YJNTb8ErNog2FgqW7aCXcbfjxH7ehdKcbRb1SJ3Bzf8ZX",
  "key16": "61aPX9JbtHXbAj1pVvZ5xRhaeoiE93bkoTfiX2o1v8jLsvcYzt6CoqzATp2jBUfzcUTfTJGkoC4qRVch9GF2mi8H",
  "key17": "3w6gizzeTRC5fkC75EmHDERCvZEL1VcXzANyQW8VASCCZkF5fuHth3UUJBRof4ckg8EHT1rRtPunuwHywTmrX37r",
  "key18": "2VarQijT4wZcuuv7iRMyiNrYtmVwSzpMjVzuiQZm4ABUCMzahpkpMsDMxC7iYwN5LSuRpF6d37teVoowJbcECKtr",
  "key19": "36V6A5ZMXCr8D6fxUZvxjZSgDkDUMN48CfGobas3ritr2vMsUWpvCh8fghcHrmvPGVmSSsdyeM5kDxtBkJh6oFwZ",
  "key20": "5nASqBHhwVDQYprQvn7ckNYy4vkMoaeznvEgE9s2XYaKEEcHTtEjyi8tuZF7vHojhpQZMxgdDGfARoQ43Hstb6gH",
  "key21": "4jbr4qvWRANpSkJsjKRPZHd26k6bjXchMigJ573zgBUy6wt7RVkf78U5twvGWvrdJsy2NQLh7LQucUJvUaT9mhcr",
  "key22": "3SePszyuBi9nCUE7y69Ni4GxDWNVoTjC2DPqFqDdRyC5KRkxxjJrLc6KNm9fMD49xArbNmTiyeZdt8Vz8uHzMkJs",
  "key23": "2Pc8yZrTxtG3dU82DEejMKP2du2Z69uTUPAK41ezrrQ6tgW1Sq3yf4tWqA7UPJKa1nVnJevMpo765fwmHTT1tiQ7",
  "key24": "Cxe8FUGV2wfGHVHA7PpZM1VkQjDCZizoYopXYMYjqsAkXdcaJK481NefmqxUL7YYWHXAr2JhBAqkNLSmynwwdPS",
  "key25": "4WzBNBwJ5hY4D2wowkxwv1MCG3UD7ZyFJBtvkRVBgNug9ppTo6pBvBLZweWux3sZTaGrsMjwwxVJftW13H1WRsDV",
  "key26": "5HPtyVf2m6efmHBBFGv7jyr22gmmVScHYg8CW6JXvizUQdT1umjTP6z9DbHen7Np97qAYoYER4TZRLVCjciJjRA2",
  "key27": "4B7hfCx2Z2wJg7WMrZWskiKfUcRWVqBD23r66eEddS9TdtaM5PkAAFrdiw4cWXZNMfPCoQDQCiiPHisTH3pUquiz",
  "key28": "4xSJxaNWsSa56eCDSUNRWuwzL7FakNdBq9LDxJcehzAo2zQn41pAHomQyKhU3jja174D5dJAUt1k85dBbGbG3Zvc",
  "key29": "5ngG5yHbTWHEpNbTcuVGSV3vWsLyEfwfMVrpF1DHNTDeQeMpo8HeVzXYKmCuk92GXgfZDaezo7Pcnjq7XEVYg1d4",
  "key30": "3Y1ZLFxibnDKXGsZU9UkwFWz4FFbmMgFE2erL2MMAL4xrvbwWKdw5a3D9c43R1VnAvXdCw9uZtyfwrbGVYEPrwZL",
  "key31": "3f9GMVDigQHrVjsbC8vZAiR6o5aBRqpCxFR3Cy3rYYpRsb9r6F8Cn33DdTZtKzFMTdgWGJvEzyevUVoxgsWA8W7Y",
  "key32": "2J4XxTkKYfDcEroCvCmP9bpHLsnaM78boJhVNUPHr1fP7XFuao56iyA7mzq4kVoNQCZpsSEJRkjCioQbTTvyqxF3",
  "key33": "55sDBgWoVdwgzLX2QSZcdvrKDAdK27HptApM7sL5uBrnUr7cdsRMML5rk9Ynkz2mykKqunPqP8MQ9F8nW6QWDuHb",
  "key34": "59gmJ61ARTwiihv4PEM6Nsn8EtvquCAzdPPB28CmHn2vog2zVBHaN3TJnLNJvnFAPdLFphNKw8eiWLUMrxhYfXkL",
  "key35": "45SvFvFqAQTRSu7CTZVJccaUJoSLWAptcRmoD8NkDthdbSSQ7puvtR3fL2EkcMhRUo4TWDncn2EuUCYdReiDhDYS",
  "key36": "y9QvSiW78efTz3NuBXXjg8SyYUdS3yEDF5xXaLoyQ3NkVXcACrw8ohNSLmL7QXs5UBBoc2WV5Gr8Rp5UDVyAmMj",
  "key37": "2xAkJG8MmgxzAUo9L4AYS9zQLFQ11o4ifmN81k7afQMFtpAkTnJUTxMYSRBxNHDEYRz5cSaPrzPRJPgVuEN1KsCU",
  "key38": "4xQrc6GcZTLLvDFh7eVGfJUzNwwxH3ZxphqkYoXcxruSd9P4a6JaQZ8p4zuiQ69c9hC4NTbyFXES4qmkMS2jQ2EM",
  "key39": "3YX5qU7MgJ1CVrMNt4bMPKzaLNmrNQesNpjJChDAfiWq3Boxxzeo4FAMiZ92D1NEj97nm2cijGRMDfKProRcehBv",
  "key40": "65kT3wavaT6wAbGuz7YfrACDSiH5MJWkyxFtydoUDPTH7zvRoVAYxjP91YTDo1qfNkiMmtw1VDdWUjG7H1YJJV95",
  "key41": "58D9i4Gkbdt48v6F3mvrQRmXHN8FTCyMNRrNEgGLA1cL4w8LDt87WmoKabzWgw5iYb71iqG2vszb4K6YX679Pitz",
  "key42": "v6rQW14ndx4rMt63hWSwS2PNZ8J2wTcBEJz7bXm1Ki3gBAdaxS7BErg5dBKBfs5u5Kc17HHfQkpcngqokQMfFHF",
  "key43": "4Cqi2DgSPrXwWDZ88cJFApMWhqGdz6Rr8eYJVfXgDd4cE3YGZ71hvAhr5fJBJEncGnP3a5GiKUXgVwQDgWidUKFA",
  "key44": "5qP3LmmQgzmGt5JToevyneH1Y1waRMYPvumXqhK8ZBBmf1b5d4GvZqZu3aASRuUNU7KWQgShvF2fN1BFNfRQTta7"
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

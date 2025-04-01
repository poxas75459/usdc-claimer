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
    "2pbcco4apnpBt52a63Dfmn9feGkoD5uGUidJbjzKzoEG9zAmAjTfynWhmdBd9Rz6R98Qv3FMLU9kwS9iMdz6HZab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yJFaRj2SAH2bETB4cDVbBZPAsW6CjJRLhDeEvMRpD8nMuEtRsL5bjeGhFJCfQDLEEaWatqrNx7UTAb1ff1yLCmx",
  "key1": "5dkfcr7WqjMyhfXvoeryofpoQJUZutfJyzZk1ZYHFY3j6h6tvsZsPPvBDS633feKMuMPJsbLryeFgyUYtE7Da9vC",
  "key2": "r7Q5fAVKYkTDCvkiwkxuzoBx9fxs94yvyV2rMN7GiwjMy2YffVGy9vHpMcoAhQLoiRhPgskm1XQMSTLKM9owhdT",
  "key3": "52TqSYwsKQHw14ApJjXNwDFfREvZqxmxTa4JvmYAq13iG8ME8BxqeNLHRaeXH2533Xs4LHReWBtia5pNTX6aij3M",
  "key4": "2sKXP3sSo7LGFfpc4vd55ii7Yde2ssZjXq7WYFipaJKpbBALpbT72sox4gBPrZC5nRvf3PRg56o1suoiAHoEeXqU",
  "key5": "4eycSZcjpFN7HcMptp2HmzvwWqEsWtQdDotyhf738NDoetYsYV4d284TsfayD3gQCmF1vdBofsP3zRMRZGjQXNz2",
  "key6": "3rCMghDuaP6i7VboqRqtMqQupxEcFzsytuEDF73zzG2BLzc6X41s3ado922gMA9d19drY95taKrwgt2SrhEhrRcQ",
  "key7": "2usgqaeVwNZoTmfytMmPLhjZWgrkmEdWNETXatNz1MR92pfbf7MEy3zyK63egHWR4SaKcrvAQHwBBbcf2Fgitvan",
  "key8": "3mdaiUbveywCupKCphjMLvpijcG1dZRnruc1cLo15agDbpKMvaVJzxWLZheEEzK9Xxd7xTG1gBtnBD8kTEaTmogp",
  "key9": "1wDbk1fdYKszWjJEt5tBaWJMw6tWXFKKyyBYCSNkwMa3EETzT3QiqRcdmK86kwgkpGfubxweden2uMzZGX516QR",
  "key10": "bfWMpw6uvD9eJwiyxsdrYDGpkrB95dZopFEHAkvw56nsnPeMPAnDXX2yYTqii5MVDox8nPis4N6FYDeQu3ohXmr",
  "key11": "38LA3APf3AnrLU3GpNRSmHc9BaFNES9JnPw2NbWmReYvaUxa9RDi2K1UzQFrUmYGRGATChtHBzvPnUMgcFPuVFEs",
  "key12": "2maUfvwkt4eEXH88nbTXmnFWkcrzXUXTb7EuupRKgJFJu8JcdX8Q58g3f1AG9s2HEDv5vxFxTeFNizYdJwpTxqaX",
  "key13": "5d9ayEdAN1BwkA977RXhKEoLo1BYFeXMR5bst2bCLCsesNBwhPBcBo6wxvi3YncJFa9PgNswqF7z4TWGYQFpSY66",
  "key14": "5tjmMaZKj5aXbfmR9mwBewSMVfjQiKXKk4jZ3FKjzNXswRUxBWh9B46uMZjmS9jh5Ws45NntWFFFGQQtdTqj5RM7",
  "key15": "4k996dtMwVt47cHxKh3fBLGh89PQVqyLbYidVAgnAhyjqVVB5w3kHYma9CHi4TTstR6kLoQKwAXMaTX5apTS9GMw",
  "key16": "3UXoxMAwGGVw5k6JdVcUfZyWHSNk5e6QhiVPRRaCEh1Mr2bDhL2p4oXqqyBTJw9uZLAHGXxRd3bp69fKySvEg5XM",
  "key17": "59VJHmMZYfrqb83KUpsq4J112nsr3mCBF9XoaC2NGaiDS96oM7Rkkg8LqZ3UUZBh2cAE2NSwomQcy5LWWbqBruZ9",
  "key18": "4FSK49ZFFXyNhSFNvKeDnSocSWJbSfxGjHBgzsTk5mXm4g3aWqcx8UtZZR26nPB4Z8ZkrRkykBq4osub84qi7HEG",
  "key19": "2g1ZB9DRcynbvguznm5sDUkciwEzsKuHQsCacRgNFWyacbLZsnHZqP5HpJf6metKkHqMB7Fz1qxvXyN8WT7DutwT",
  "key20": "3ewcGtQa5CkuDFp2ZZ4e5qj7WBzSGfjPbeYCidbQEF4DoZVhZM7hWRqxwaJgam5pApNB78shcYKC2mAbR1DftgHK",
  "key21": "2J8tsqp5nPtPVmS8eru5SFLQtacmGYGseG28SmgAYgo8cyPAiertcW7r8huWDjiu2iQwgEnMmYQRh8A2qZSE84qq",
  "key22": "htCnZ4x3BHCDH8YS3o6rMXyhMEtLSEHCKms3gu1QRvDMDJKiu5TpEDqJZhAkGcwUawAfTbdESpQAgFyWfHAh7YF",
  "key23": "4mrUYE6p3vQ9xYe2FgycohWHowwcneksCRvYP3bo1MmmMCVDtokkrRUQtPwiaypR8VKCBSKqiFouiYyMZ5hgq34K",
  "key24": "4KEv4S3GyxAzi1yP999jGDJkaF1WeEX9PZNX6QarL3JRZ5f3gERem1rhRCCRmRdcTyGp1ZA3dcRLkqTAc8DcyTtm",
  "key25": "AmeQTbSvUiaRww8EsyB8jBc4avvdZZCkSe6yRRrxYoCHrQLgX82DAaVPqAZRdBiYAWi8UTFRkV8q7hjfQHdTxWm",
  "key26": "2MeW9LCKZkQEPQt32iw9UfLX9gxRAu7zfSdru3gkxbxGsFfcnJTR6oWRVfJaUZpXMU6NR8TuhTkYEA8L3QiBrgFi",
  "key27": "3DEmYwzzd3k58SD6LdisnDMSKrvfnU9Auuaaa8WSDEMmhxHd7Ub5xQGZVAgEBNj7KVjPzzBUG5p4VK1mqnnXbT5e",
  "key28": "4LiogQYb35vYGd4EVBnNf5YxAqxcm6Laf69gDDf2ssuGbnRqchKi8nVjTKCLzvyNRs8MRBYKjQ6Kd5yrJuyvk4g3",
  "key29": "58opkD7VfUbpLB1VyNmkh3yrtPnSSKxZ5BKXdLngzhHTL9n2wiiEN5DQ25n7gYa2YgU5ZTGAEtd93FoRCtmTonSc",
  "key30": "HnqzxnWgd55NXwBfPA93XjEz3MPJHngeM6Njg4tkrYaDcRg4MSWxbbT8zyvQ11CBtFPYLhhb4J2d5TA6wZ2STLW",
  "key31": "5NJbn4SyU9qqBYhbQZaKGuuuYeF7HJdiqqQdqLKE7tmaXUpfCpqZVPLWfe6WhWSdYU6DYy6EnPA5vfu2DpUoQbrC",
  "key32": "3t1S3cfg84vxx7qkaXhBxVJtrWouowxavxVuonXDsEZ1tCpkJujaspmbWhKsymUkYz43oTdtwsYKhZ6tby8Fw5KS",
  "key33": "eMBsVocaiKVXZsNZuB1D5HqfJ17epR1jd9RNKepjqVBveLbXzxXfjjmjLY7YtEMerEtSyKFsHJGkuAqKUPAwgHX",
  "key34": "46pJbLYy2DdrcADRUNvqNvJ1dBsJEVEmxqXfCzf4nM4MuwRhopqqzb85WQBkwx6PsHWFHapBDVT8QMweeBmgsSrk",
  "key35": "4VhWqyUaGQzsTWB9Gy6MpWLnk23SWvajgkfdiw813UKXhzfS2nctXNn36VpYtod45R12A4sx9LHTSWC1c3Fuoyua"
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

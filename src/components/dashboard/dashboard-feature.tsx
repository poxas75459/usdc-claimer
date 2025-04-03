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
    "3JVNrWnnS7Hom8Nhuguqm2K5hYJpr9s5NRj1FUqYwS3vxdBfV4d9PejPhzgm8EeLmLNonM7Au6Kzk3rhMAaDgqoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AeT98uAWF4vMQRGWqebAiMiEHF2RYD19YbPPdLJghT8Z7MigRWYvoFa94NghyJq7LmrJ9wfLEVSVPA57JA77Uo7",
  "key1": "N9S6D83drCb5r2vezwY2MQLHBvjdZ5Y5zocYWb9gT2qhQj1KmbVt1P8gE9ZxRPFnwRy8d9ScvucC4P2BkaKwRNT",
  "key2": "2JomRoJEtGWvTXNFprRTMDX4MDQJU8xQdDJcvsr4Q7QkTHBpQxUZgnZ1fMdHcnh3wZ3jFsArhVqVPp4xshvQw2PZ",
  "key3": "2F3LypH5YsWoQ1vVmQQErZP7V6J4BAMhNXYVNtpEkp4nczM8QxzfmoLrfjnVUrv6FrGjUnYhGQ2ma2SsQPw5aSFs",
  "key4": "29XfizrsycgWcTxERjqXZWqKT6rrMfdLumK85tRcFtZCphtVMKytmcJnSsmYrRdAaQuuzDM1TgAxTa7Xvm1hXz88",
  "key5": "3veKGP6gPbwe3pwxrxixUZuZY372aspzNNG1XrEgWLiJUUAxsxQzq3U2tY2xeed8bNzihQCCeVDa2kMocr5xnLas",
  "key6": "43QSLNcYrhFTrVenoW7YucopHos1As1KqF8J92r1hLoGqDCdkP6cfVbZgLwDRw7KfKd9NRr9RPixPwR6kWh1jFv2",
  "key7": "4ZUq9KKXHoARYwrwnQhaMznbPmSUZL52t8NNXWCFPUuj7c58UFNR3sKwK8iH4buGZwtJLh8Hea9pNEkbj1fSo4XC",
  "key8": "2daUkXy6zxvPBuKM8a24r3cPYRfaMuF3TpxCNjd1mURjui5VGspwSZuDk9ZjFPusoz696BR726A8q22AVieoFrXH",
  "key9": "5FP2WWv8QXxnXp35AG5ywLDte7AScerxFa9t9nGTqTs3V2zn1H3TXeZWWBTYeXo7CPMcXWffaFC6iJjDi5Yuy66q",
  "key10": "24ohKM1u6VPn9GBJWoxqyaDQBaYxyjT67PwPF2ZReawpST2PGmVzdS2Nmv15jnZvR5LkpF6eayD4YTdEq7sjRe1y",
  "key11": "59BycXwMN5p2QADqySkpAMfRKCCstw4p1WhEi751mng5qkVV83LcQzv4j4uwDpMw5GFn7md9YaAXWPdvo4yQkWnT",
  "key12": "3xsDtAWNQJkzjhUNpPrymeSeQ6GqM2Xn8cBdFTpJZwsjm4Avm8J6tFrGzVuLeRxTTvcUSN8BUaqCnkN3Kd989REt",
  "key13": "3xLEbrxtg5AbBr8E31QfkbT3P5SvBFBwJh16V1LsS3rQrhbysYV84u1UuKzecQhedLtAcM4zJqK2QgueRDKp8tuH",
  "key14": "3Yghdf4n5GcLAXuMphZaotXALZYghv2FVMGuMxbmFE9i9zHF7MWrgMDgMuSb6zjoihukf6wqVUoRnnEtbxFwmXDo",
  "key15": "V5ZT92ZQLDKV65CZZK3x29LdvuGs4Ft3RLELJXe364A9uU5cytcq3JG1uFoBkWopSVu4xLrABWx1tKD96UwyW3v",
  "key16": "2UqDGvL433Bq2H4eFh569ptdSDDVGgADLjAv5JKseKHbEegBBW3voPqFBzt4HF5kUDW7Zox67cQrtiL3puVBQjS2",
  "key17": "AJbh5hvtsQ71jTZWhwu9SrkTjL2BctkmQCerUxXGE7aRAyEu3WmcNtLPHQsjr4mQ1vc2XzXi5m3d5zR7sT6M5Em",
  "key18": "28eGPwDNHinKZhB4LfwDgTnkxfazAVf5iYikhzapTeRCgmedGbwQ18VXx327N88sRdf9wqQB5J2h62f4fP9CFQEq",
  "key19": "5y3gMEhVQNXb4CrRnhgyLbpqUL2BW2kjTpE1xXDao8nHJgrV9jxjM3FDBCYgN6cjLLnWe3pmXu3MKqbgbkEdyiZh",
  "key20": "5ty7s5hCs15eEHTaUByyAUewE6S2PgKmLt8XLVubRhnceAZkYJu5zTmfDMpk6WQUxSSZj9T9hZBqCeapKT9ZHfzW",
  "key21": "97Y2wxZQsZkGXVzYQvtKH6cw3dpLX5QfDkRyZMwaJdtFf7TauAzXBXs25oF2Sgvb2ZDkmoS69qZEa5szZdHs67g",
  "key22": "5pDKmTL5GweEiUBCbfSGTSBcBQmKorpuUTJsLUzkfBCJVmFCWicy2HEZhVRrGywszdC1qWCkowMTVrgPnph22nEm",
  "key23": "5WVFQsop6c8UXMRfPMPbMPGpZssf28QZSR3GcFvoHCRMYBBoDaXK625u2pu4qp1PqKHHW3vPgQ3Bq3XvAcvvetLC",
  "key24": "3KcjcJ5VcL2GUJj2eEH93Y4ZJ2ona5kQXttTifeEWKg1nHkKqVM7UWSNVmfiRtVGmzP6ZQekKy9PGPaWSLtfMWTv",
  "key25": "65movD5dSCNFLCzn5eggoz7mR2NxDPxVkxCLdyQA4CqBH51pnTrVFFcBX3XNqv1p5Bu5HJ9kcd7VuBU3KVJG3bpc",
  "key26": "2eMwyP97XU9imHutAGqUs5MLH3JEZmHTuBt3UgqTqbuAkLDUtxoG9JqQ2pGUSiK6GKsU1cnBMXh6xN3k61kYNJcq",
  "key27": "NHaJdKqPBrL7rqg1UYsAxQkzXkvmm7QobNbq4VyMTphfyvCVjMi38T6oVnLsu15jQZx2WTGzeMopyEgbUGFsBJR",
  "key28": "nGgrVvvMcoxeWXS2Vhoff8D4aJZt1zHJDgrS3eMLU2AAqVeh2N2f6Wq7Fzz6mLK4kZa6n4eRTvZgHiwepZwrESm",
  "key29": "5bV3bdnJ6AjJH2QJcYUyJSnyxrTkXmani77z7HkgJArsdRG27jmzRtEybXguj2GaEUquJRgL4vY7CVcgLLddS7c2",
  "key30": "5cW6ErndnWXZsRH5MJGEvjr99eX883sWSc4pR4H4NJhxjexgoyACKutBztKLstPAPcLDZzwgd5t8PbNUPPNSuYXg",
  "key31": "5kiKRTChg1kHkLy9kPt9k6Tt34SLsfHaGikGxcfYaSxegGSHqvqwavPYTwexZ3f79LMiP3Zkx1FuJj4EfJKG8XAJ",
  "key32": "5RrfpmXo1AuuVriRnQXeEqgwBgL2dhPinb8w3Nd5RixhaALEcF4wK4WCAmojr86PcFQvfNL6i29yDoAhCuFE9kK8",
  "key33": "2aEKtj2bNkpLEWGQ9eUD57gEQ1VayKhmEB7VmUYUpaxbu6YHcmDHePinUWz2j3coSaErwsFSvJmKuR14SeBKqLwk",
  "key34": "Bmm8HmpxL1F9DDHSYNbyuxfYMdp3MA5TqTkHMw2SyE9QAH8uhVGBjV2mAt262H53Te9DzYs7uD3DYgsdURkTZB4",
  "key35": "4GNudC2s58yfZVT4din22JY1Ne6Bv3Hh72qUHNsKpwvDcr3LHB4UBdHAfYczdebVKHPaFrZmXdQcDDiHXfMWhHnv",
  "key36": "4v67Avvr2NiPrPHYRGZWje3dFxuDedho324VmkLJ62iRJyxjzcL2ZoHe2VqjCD5z6XVfkyKeGaKkz19J39L3WBhv",
  "key37": "VUnacXdPQpcRxZJgT8UEFSVcndcKF3G2bZy9DR64QqWbeQShH7JJGtczvRiq2iYf39EiUhjXPsEaUwdGzESLr5M",
  "key38": "2nibuyATMARMZvKAgXomrtiUWFfe5fDg17bhNRwFSe4GkY6QpwQS1Vv82tAq6awVES8ruZBA9ym4QNMV14Gzif2W",
  "key39": "DsEZeRAjgcmwEKStp1SeCkcEWGsAXYUNBY4iuhksXGQyVmJkuP9fdZNCZhXRE9EZeABfwf6d4uRv482wtS2zm3C",
  "key40": "3NSoWxSw8369qTqFyPJhGmR2V1ZX4KQTp8XvURs2fCdxM6kLncgVPm3diWhqAcXMdVUy64DY8Mwk96F4gug9dfV3",
  "key41": "55vt79mgJRNUmQCurAUye5XTKqSSHYkSgRA6pR1fqCH7F7JU9Ch58iitp12F8qbsAbummRvJhQ2b4b4UDPzjkrLa"
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

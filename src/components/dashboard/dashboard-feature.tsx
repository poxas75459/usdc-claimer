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
    "3PYyDZbcwhxSxN1GGHYhn8NDyWT3AkncjNNShdrvFaQRGjfaEabeLTS899Hfr3HfpxfWu17NbK9Ufvx72EfCpbnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJP7HJJaXUrgs9Qp4nGbfgD25hUiNVNUCKHMWpvNHf9nzwZx4XDi5YMmfNs9R3xNoeQCd1Rhz9YEgorgWeM3vsX",
  "key1": "5Gq2K3a623FV3E5VzUcuaXnc7N4gfCi5HNPnF18fRpazgM4bsvrqEnQkAPkUPYkH4WhqgA2a88yT1GspFAZdVUop",
  "key2": "CPYeM2gNG6L1PUtCvyrh4asGNMAZ45pQngB4bWZ5e7ft1xXZdoDkHUnabXg12tScx15JgmTzSJRkNbvjrwmTujn",
  "key3": "fndnxaThm6XXPAtocXU8ywTa4FiWNcZfKtunc5yrVdTPMCcu2ut6FAGGVimXySecrufJCUyLbzwNW1KyMNB7KnT",
  "key4": "5BPwvJuq58hPAtYzKyzwCoCr7YgyL9AZktoW56SXozXZUBHMPgLvVnU5rQ7vVBjzF8mrMs3AvfvxFWv8wQFfGRnr",
  "key5": "5JJBPQpRWTdVDBiQ7qLvBTiJ7Rta6eZ5FEbmsUWvC1FXSGHbjXvknp15w72YzsP2vBLGP4PpQNh6uayfGmWGPCZR",
  "key6": "5utJDEWGnC8DGrEn3YLU75uawvX8dsDYHitLBL9CYC5AZCr5ujw3cMW8wao94Dtt31dH68SPAo8M4uhXutDD9wqF",
  "key7": "3dtPAbqMYY86vu8T2fqLy15XxGg9sGkDghbzAiqqLfb5hmwPgQRopp3ZaPVU3sfBW52ZQwxp6E6PMgrwZwV6bv7u",
  "key8": "61Pn8g3LS4pANPEpnEvzpJKLd2ttWw9iqjiv562eCsPy6EtnbSXGWd3jTGsrAZwo3jhtbsUi5P4MewXCDzPYeCPB",
  "key9": "5ZTDRufFstweM4h85p1obBMd3DWGaBSejWTPaCsmacuf4fN3XpSgKnmWJpoVhjSAFkqiZdL71pHJizdEZsG1wnyU",
  "key10": "3kstr1xkLMgPiRGkdwCoUHVCmTgyMfToCMRkdeuMNLCR3vsqqnFHYdnx7i78yG3KphVs7GcapzecgVnY4XXiw7HZ",
  "key11": "5mxBTEWs6wynx2SwsoVhLiNFScB69UfNDQXXtc72CoJECrxDMedDu3iCVGG1rfaGYhKJbNU3CFX1oQj6Axi7Jg8X",
  "key12": "5PDzgaNFAzv8u7jdLNsdmST8qCj4rXGwVfcF5JGn4zws9GTBoH2fHzQAQKtZ4Y9AUcXecW94vzFK4CPQp2iTqVDv",
  "key13": "5djgHiamy6qLwVJ3JM1siwrtFv4VHA6TzrrvGgPiDFxfCyZAjZWs1ahtMVW1pT1g2rnk5SXvhNeRBmvtma1ynR6n",
  "key14": "4GQMZrBRCwcpVJf618HW536geZyNd84MJfsw4Bz6AtnALQDEyvTM7VgoTeFucbfZTjH3a9y8SYRdm4eHKDJvzuhP",
  "key15": "5VCfe6H82Q31FqhpS8fb7NbGzFyuHXP5QRE9Ak2WP6wmGMJBAHFfhbEKcJJeh1QFGM9k5DDZTcjaarxJhckEB5eq",
  "key16": "RBcMFFH6dzUeaq8h4L2fGrour4hoKuDegyaRg2Xfddi3ks3rfiQdt1YeCqsoQv1UMJk3GQLP5UaeXatMDfSbQRc",
  "key17": "L9sYPEVoZrZxwLqehmnoSEnbFutPswDRw1mpuhQ7jGc4AUaxFtKPFUSNRXZ4saP4jUBm2sXcL7J7Jqjg4e4GrSs",
  "key18": "5EyVEYXZgFnjnCm5kh192xY5wUhGZNVGzDBthrwGUT15F33nLNXXa7JEsoWPDQS2x2bLBKa8ZnC162st8UZ8vAX5",
  "key19": "4ac9HD3S9ShPxbhEQLoGMc7etCRsrhmj1PwkBvLrfgHkENXcsASA4H1LdPQ3SRnJ1DxoDrp2bBA6onhj8qA3S24d",
  "key20": "615wsteJfxaGaTWouLwMvypRFnNP74coccXvUP9q4GyLkb9Lyqn95TvPbbwmftYq9cJoszBeLRuvUkwC5vAFtgnU",
  "key21": "4FygAkAkAPcxer57PT9xYbjZq8JALwRhQ4sgaRDxFACtwdFwSizV56AHqEnPcyAGuddnt2oVZf67PU9cT1J6u3A5",
  "key22": "5B7zzT72BTkPtRmT64xkG9VxBShPrumxr3S5Y4PfWBimRsxeN57B9T56sKW7ZJesARv5uQ5dUyGGzn1Sn8qgQPLt",
  "key23": "4ibLsA6P8ErY5yT1t76Gu3gLFkyZKLYfMCTrtsswPT9Ffv4Fyom8YNNmYRhwsHoorE3g3Z63DvyB1yXwANoX8Vtd",
  "key24": "hgL9UxV13taVyeZSycJuCuF9Ax5jHRH5Z9guuUe4UheybrKLNrHySf1Zvc628W1JxNSCKtkCTKjAdGXCAw59q4r",
  "key25": "qJGWG9nfSPbDVUbBVhQvLz43GkyFS4SZUGAgSGC5YqP7VAuP9wrF3m2guDUS3r5Rk3ors7ZvLHePp3zaGnWb7r2",
  "key26": "5AHKdockdHSWtAU4hCwZUncdY2w6eZFGbXcVWC6rwShapev5cgqxT9zsPzBiukCMqhPrTeAZ7a5KLy5HQ5okncuQ",
  "key27": "5LCC65nEG6pUcJaEdXFQ8Uw1An3RGycgdaprMNy5kVsjxH2ixiSQgDSu6nXAiKfjVpddp8WPwTXzC3tND53CekUq",
  "key28": "5hwRFoVrFPEDif6BpEwuyFpykaBuiCdHhRP7offSCRC51AqZAkLBS1auLTetjUyFUeyjmdubu9oB2kAcahHsy1Sv",
  "key29": "4tHJHzC1ttD5MAcAARomW8RwrfNs68jRSYNncFCT5sjTzKCymJQvyawegtAAASnA9KdwQyPWT45mevYvKok1f7g5",
  "key30": "3VYzXnDieR6Frrb7o8zL8y8K1q3ZDhWsndLLd5LbKFhkT6otMs4vr6c1JT8XhzY3g7WifELnCDfcyGiXhNpuUnqc",
  "key31": "4QFVntt55oZBsX2Epyt7UJfjGKsPwq93jZ2Q2Sc7rRrUV7tb6mebuBYLNSFZGS8RCE58hvB8pfL359CmsnvZtcAt",
  "key32": "36Bry6HCsrM2eyALFiW3tkzfig7MytgRBnSzfvuMXZWLLv4XEgZhcxpgJ9nr6mB6jZVsnqKCbEVoydZwFRRE587t",
  "key33": "4omb88aJsNMKXyV4x3Zoxhsp2HD9ofbDHGgfPYox75EjjW7zbmVuzzQYqga73xM2Sy1H7z2hgSbSVu7LTMLjDk1K",
  "key34": "4vkcb3KLxhhyLVcWVQ1bqtnrkWkfbnpir46EYEMX21QXg45Hr31VynjPkNKhcvK1MFYcyTYB7GP2wBGuwMDqqpSP",
  "key35": "3mME1HCSS9K4s3K7EJ1g21nrp8ZjFvLpKQBP7LdbNqW654sNabU3jyZBNrGzJC45xT33U8jCBqWg235nBYW4zKVQ",
  "key36": "3ARZf7QfSsdrfm9JQFLqEo3FybqrmS4Ncqipv2cyo2ZwLa2NTxZ2iqrnsdBzYDFUCYEWonvCWrbQL76fF8g4cq1N",
  "key37": "5EQqzj8Co28iNcF6neFomVfwU2E2ro6kohnvYVeTot3ZW4fiB7zLo4mN85EfJgKqzwghkYtVicjPxwA4yKVXsWCV",
  "key38": "qpZayyXZZwK7mhMDMrg2X2FAxS7JMH1yJWXDVejvKwyu7F2mZAPHjtbPk613BLL3DA4sGxKwWoMp3sTM5ncBLFn",
  "key39": "43xfpMvM933LRs51WxmHDZGFjtxYyRvFaAz9gB8xr1pfLHZGL5yees8971F2WSBrR6892Ftw8wLNsY5vocyJjjM",
  "key40": "xPnPjGdvMbxQGZQfrQeHB56gfT6iKYvv7XUcv5AyUW96YJfM3YkMMzzeKsqAA3r8KVVyT72fJ3ndUpSa7Cdr2Bs",
  "key41": "2Mm96sABXvQyPtqBffU9VoZhx8MCyM5d3w11zE3fyuJ7LmbbhF7E2bc5hhhywxWJHFQhftqccqUpZJ9DzZ7Kqpex"
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

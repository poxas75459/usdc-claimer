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
    "63N3XrM9JZ5bz7nPvSwCxLz1MFVvwhoWy4EfLF8GFFXQ1ZtmaigMpisMHneVjTkbR8WMazdnsU3EmdS5QvWPbawB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CrubXSwbfxsm6hhgCRksf337LgDEkAzmBfTyCmi8cmECDToUhi9bCi9GrTua4vcPpqZFsQXZgsZAcvwem5oXAPB",
  "key1": "dUTMBvPgcS6dknMPasRLLqhkn8BkGXVrF6Sr8Audq2L8UXoGr4Dcx3MLxcAicm7e62E84M3mFvqiup3h5sM3wqX",
  "key2": "3dypFDwD9qdFUG8mkTMxhnq4FW3rZTRBAB6jPYT6FEaLMg2Mo2nPhk3LTSMCSbaQ3Gsrrvpiq6WWAYn6cCGBhrtm",
  "key3": "4LLCgRvXZ6TUh7SxjuTxUiRxJVz19nJEnsi2VJhivGuxE6DxtS82Y5RLMdU8MWe2zgvZJD55RRVYs3W3SuL9cg3M",
  "key4": "2RCZu7tZLU8Z2PVJHqjgWhg3FEDBEKuCrvx1YPNbA8sqqVmgtoPpK2GjPM9va56Rx9dd4uMywLKrnpfxXooLuN7P",
  "key5": "4f9RK9JjcQjM7VbSf5QQboSmNghmBSyiC9tknKxGixJCKN5gp5XvXXEgKf7yxeX3gcnyK6Hm1SpFCFQjRSRTAozK",
  "key6": "5V9K98wDJsMRPa9QVkfgS7zv2TFBC3g2eCjjb4y8SRgU5Xo3ub6aoV6y2LpJyMRKGspbGtwGrYJey5qFsCy6inTi",
  "key7": "2MxtfUaKgJRmpLSMCBzxSNMzBQns6Ss6xWkAkpNXU29vX8YFKNQi8zKy4hTsibfGiP3chDmtr2QJwpuzkk79mbYz",
  "key8": "4emri2XTfVauM3Q1amP8gqGLioTWfzCnupWqDLvAA62ZgmUo9BU1P2R7NxfDWkeNaChLx6v3sZjkrYBNSAKmvG27",
  "key9": "2RQocfGSBwqFeWZ2RYD1VzhLT7M1fQgU3F5gK6Vt8cC19BY1GHb3pE2dc4zvyfjz6QR1vnzhj5vBBXUKrLQmxW2F",
  "key10": "2RUgz8J5FTmMEYpGJgG8UhBcUuDy7DpVsVVSgB3WwLkbhqSykXLkSzzN4G5h6onUfDew7ZRB6LKygG4GQ1733JdR",
  "key11": "3BKMifffubnH4ZQXTLjJrCH6aQzqsS5psiod8FtmAC9H8Hfemjt7PHR9kDBNvzxxnco49pobnJN5wJdpxXYxYyb8",
  "key12": "5e7Q3Wgrrnx9qcMLeSx6m8dgDupvVPrgtqx8tdMHL35rh68xnuScdUfB7aFFSWTQeTcDPrPa4ReKyzNZjXbpLXa7",
  "key13": "48yXjyqFXvBoxFM6ruXPMGJZXMzjtt2mZnAvVNgLnYohcU4V55kZZga8UPiUheCecrVx5DgKgeCZzYecGEmfZ3hQ",
  "key14": "4W4VtH5Krv52G2Kfu69m4Gi2Cw9GFPRddCmK8spGkuMePSHKSB4JHHv6uumZYRCxbkcX6yB8dzpT9m8RptV7sRVB",
  "key15": "4StA6F4jKFFB3WwTiaCLYua1nN949FyPMXBZWvDdiq2ypuyGDuiz9e3pRsw4CkCz8xNGFHUh83Va6k8RPsTwDemd",
  "key16": "2Rx53gAieV1xZf2P6p4sackR1j2REGN72EfY8MozVWWeVGsV5waPfCcDM4SCDjh9atPSeFaEFdHxqceGkCQVwpuw",
  "key17": "XEPjnS779WRsEAQMpwNoz1QFRhQEGSTYYcUZNdHzC9V5Zir5WTYWDg7bJ2HrRHNPToXS8b65VceVTJnhqAW3i4R",
  "key18": "5sBHSK8iDpn1VfUW6rJDX39wPgm1rVU65oPSz8d8f4xDoafSgXqSbWrCwLjNrFcfLaGqEU1MTAh7hDGdzajYWiMQ",
  "key19": "26CnYPAhWiumGmj72zRFJDkBNhLQEB32FAKcKs9SnjvYicKtuipzyPkkowuKGjCq2Yc35eHq3bP3jzNex6PVpeHw",
  "key20": "45QALNAzULedtPD2PLsynFt8KY8nyYtTo7UpyVjqyXMtjnuUWKBsbrrDYvyDDihg8eS3rfJL19ZFavnqH4qoLT3E",
  "key21": "o2LHDnZvtqQHmPu4LT3FwmSxPrbFqgMD76iFQagsEdtseSRgwJTBvRFdfqicsxGBWz2PN1H3Z7hbaKpFkZUJZZs",
  "key22": "3XHVinoVsKRpARtnJzUCPzNdw8VoumnAp4iUjcKUkhQCMcFW7wMzR61RsZv1u2s6d87qKGEdc5oGVJzsfEsywjtD",
  "key23": "hPNGUzVn8Kc4CuNZSqYCasDM6ZSP4rHnHiHK5M7wPr6vKuc1SHo4UtScj2WJoQ7BbgYAkKRvPb3QWP7re1xn5vT",
  "key24": "NxyLbtyqzCekb2cm4qpsmY8axAgAmkx94qzucLGJdTcWD8RpEsAQ619jVcoe8jhFtiiUWwKP1yc2WQmtKf41moN",
  "key25": "3iMgAoVTwmSnpwNPxSnUesE5eYY9vvRzfdg5gGjmaPXjHv7yhe4sCghdQwxSStZnx5UwE9HFMx96NkBwG3oCeSy2",
  "key26": "3QzBMzzuNtWLQmi5PUHZZ3UpWic52ZeGs3ztRrt95BRrGzhhjGf7MYuqQ9xnEjiVKYoiq9nrchwGPMhoM5UzzJEh",
  "key27": "AdPPFJEAX2VTzLiGQ3eFnuBcujxgLCkENBX4pKWEjGViXUBUcbMPos9MwRc3TTs4N3aVpxkNEZNTZufzLUWQo2C",
  "key28": "2Q3s2pr24eCGoRccpRroLKrZW1rGaMhcQUuqmiwMWTJhTtqkak2665ZCeW9SzqP7PFQvtQfksWFfHnKJPiFnB3kM",
  "key29": "21i51bHRMFac9oGRKHGNfTo193H9ni6ta4ywSmGzXAA26v1M6dhSkApeSrRDu8MuEQ6i2hJq9eDGUogFf29nmmhk",
  "key30": "44stwTMEkmpJEo4eaXQBEWJzBTs4onjHUFWo7sUrpJXLK5zzmXPdEJBoNtGaisgov31EhNvrUXX7r21DUESHqZjr",
  "key31": "4RjNr3aiP8Swpm1QbBgVsXaU3Rc4MT1Nw4LBBHkkpW4ghqoRb21GUCX56JdULCkA4941EmSswcNfY5BN3Ue2AYTW",
  "key32": "2su8qusoWi2L8yqsEiA9g4NpN6bqLHMuUgruxWgau65M7zPjrt7SfMrXRBQRFjZqXggc3owFWR7dyfFHgSTZ3aNL",
  "key33": "5bEbiKCEKA3vvYpfXU8hX7snXP8QVSbnmm5RaseMNJ7SmZpkGsAcZNur3J87PzDLgr43givkCmFyg7BpSPnL6bhb",
  "key34": "2ERngkevHY1nvG3D8qD6ZnCb5RwTvCaLu4AtALWpBRgP4dPqwgvQvrXXGmmX8DRGvdc2s19VsCG5N6Ni3gZ8tEct",
  "key35": "3pZcPqC29t8RN9ihWsQR6LbsD7KfsVbFA5xEFpdNehAxGJMnr3un4yQyUFFC4TvHHdBPvgtjWuqJjAnLdZPvPu4Q",
  "key36": "3XsGpH7Tg5eJbShk4WhShucq6hoVpZbyLmGHP9pt6GubbMKB9FUF1Wc2eNBb4xfov2m5ioJYcWFUSMDJrj3Xaj3X"
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

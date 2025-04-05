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
    "3RU7eGVdWZLHucrU785NfWYym7utQZ2NuHEjEYTJXnDwt6DKyxBjjoAQ8gUonu2vUdfrEU7iNHthqGjZ2n2t5SBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SQpuvtVd5QmzNUjeEyCK9PpuWDsrPCzbMMMmSKmxdo2KdtpzH2ayXc23vbfJB4LkkK87M5wcKDzrjGoVquM36Bb",
  "key1": "58sJxWTD4Qe96maPHNkBLpAdsHnRi8gM52dBPgwSyxff7VtbMKEArmMESa2csavwehJMysCCQRHLJrgFA1pUdQdx",
  "key2": "4yjMuQuRfdvrwiAGEwMYp5gnCRZo1AhEMDy9cggB6YHW7JHnTzbPvKtZz6UfuN7iJSVrNsyV7mG6UU3AHSyhoZdj",
  "key3": "1Kv7zaG2ZSySvTZHhNePiW3LLxdunoYQMYGApvvfGmuo3SQ7TEEeQYHE3joLJ8B6DFoBUBKyTnRByR94xqgpc8V",
  "key4": "4JfzUcrjwy4N4D2G9pWXzFaBEATLg3oFyVLGoNwGvVvW1fKBkhHz68F4zt29gRjyxynyLxbSkoBmxpU9gE8QChYd",
  "key5": "3YPf8YCxLqb7EhFSC2kQKtQcWz7AQiQBMBUTfoSCMeHC6eJ5BTkHCELTjyCnTyLgDA2fjSDLWJcx6hjbLZQPz4ey",
  "key6": "PBGLVUrgT8r5HMaU1pqjx83LeD8x7f9i3RPkeEUzKVJdoXN8MtcJMsG9JGxzqzm6HNXb1c5fiqJcbk5w8jLK3x5",
  "key7": "3umvqyS5WCfBF16Fhb6b3ujAkDMa9mCFSCHgTHSrWGpZp9QaSPbg1XydPmSRTipcZyutVe2XhxXVBPqLTaZJNTPU",
  "key8": "4o4cKzwJ4kNqt7ZxWSwkMLJbSR2A1GeSKHaTWHuAGHNE8JHAERFvr7zc3LzHb2GsYd8nFmKWoasuRpChkYmuBKX2",
  "key9": "4eYJ3bXz3VGdFwiQg1scxRE8JGTuRp4gWWFYFvtWFEj64z4rviHFR4UQqnfUwwpSJVbuoPsbxX3XMdmNKdLgNwZ4",
  "key10": "FZ5ymDant1Miy4V2W3FBfAET4k54aFnT9REWvtfQLbT1rCtThAhTRiggXjQfNB2nsGzy2ZDxo7fJ3tL7NgE5h5w",
  "key11": "4kp3Uvd2ydK6S12fqgouwHcrX6fCixnokuP7GCiamzWfUamRYH9ijJud3QUV3ehkDZwVWSR1mp23S55Yvzpvy5bx",
  "key12": "LC6wy5Q8z8ZJ4GZESBP43MJ2fK9CDG2V5rDiCo9EdKizVD5cDejfwGujqkatCDNVjKVXDfaCJahoKjBcT7MB4py",
  "key13": "C9TzPgrNvDDy87TYPoNTF4DZEvCrwBL2NJocvyU7uozBiJ9onTiL4o4SyhWWDfsJWXoEcX6sune1j1r7LM9Nbf8",
  "key14": "5MmQdzsVztmNAwpibYr1yXFUU1CQ15PQwTqMMxQjFj5xkPgjf7TA5ZCuxhuuoSSMLGUKiaWgDv9XgoEgSARFtRRe",
  "key15": "21KcP6iyFbvRocYDQuPAXh2pdZbnF32gwCzCqVi4aKze8p5zEo1vQsuqCaxiKtraXmu8eSYriSBsZY9Y2SToo2aP",
  "key16": "34UtpihR3tGKbahiUjwPVvbM2BzYYFgHu1hLfDZjoGahEzGcsPyJViCJYpfqg6YD87JshS41SeAy1ViGNKMyjKA3",
  "key17": "52NozDUv9cszj4uAfzNSx4RX9zKFBTmnyFA2rFBL39cJM6yRamtAERMszXbjmZirR3jzk38LWRQztSMXSiyxDVdM",
  "key18": "3BJ78kkAzVQZty7wquDZkmBpcJnkWsqNh73uGWEs99TNKrna6UXWYtikKM7uX1h6CwGuTZihhkAD6X2BUfBSrAnt",
  "key19": "2XYJsSmfmPpV4H5Dbi8wbcRUWNq1oKBuu7rKnS5qocyPhuamxEbXdfkD1EKFPdjri5HbaQjXiDZYPaTmn8ANfaEj",
  "key20": "3LYZ66se6mJ9KueLAqsjYuYnNUnWXzVKAkfT8uqXQY5qu2HsNx8KhyEXAwPZCGzXc3jPNb7mPKeh4oPQ28NAeWkb",
  "key21": "tmc29PjvNuLgJAS2XY9vaAEsxG1GaMoQ9caCkaVosyUjJNW9juRjeG3GVKBUcbaaNf8EAZsf9mD62rYppiezh7P",
  "key22": "37RoYvb6MDSZrXqG4xzgmiu5kjag2STMYEUy7mwXuwXLDiPTpfudsetCd7ujMwerSS3aG3Qg6hSiR1H8JWBBqpwG",
  "key23": "4aVZF4VP4KVq2eBTjcueD72Evs9h7ySBkgNzFWF9gzY8RZPmadrckhRJ81BgS5s5AquCUWqP7bnEsx5zHfCHWBwR",
  "key24": "37jrhKy719fJiXGtrYgYEYL7V91nUGhRg4SgtWwK9rQdvm9hobjUDiaWBDPRBLqvu57pHeWuA5KrVaW35iqWVfaF",
  "key25": "4ZeRVfSiHSGjavb9tXaYQw2bgmfVWbmCLq4yHzTj2tWn2h9wCWyv4G2YTh3DFoy6da8tDczRBNLua2E528wYbWTJ",
  "key26": "2nbBExbJ45oni46yitKNw9GrPXYTHg96YqT8TbWKike444JKV7S2wN3u6fhQbDcQJ4e2BxXn3nTdA5essFT3e87R",
  "key27": "12AEhjo2KDMigxiiXYT4wiV41xNQEeX8Xz6jbuWrQdYKnmdYPbazqhZAnA9oFocGzJBtnokdNAWKsfckA7JYMho2",
  "key28": "48zgS2hDft7xEgwMeARbVNPHS8biYMHNZMofYkq9S46nDS3mN5eAhRfbrXA1Jq9gmjYEbaw5r1xp4iuyp6c87WWM",
  "key29": "3C4sXzaHCN9GLUQSQrBbgwe9DK5dvJPSSrzwJ4p3aZzME2XRz1zR1rrDpryRTLCaf1KqFjJ9Cf71qTm4ygDGQ37J",
  "key30": "FaQ9yaDySHWPuC1mFTqAHbjxwsAXdb2n5SpTWUUuYUuFnDK7GGrhyYiWFHFGvheWWm5ZQ7MCWPbCoZhr1p3Gq1Z",
  "key31": "4Q3gPfSJK5Uj8Wm17JruQt3eqekf9FCtHA7TNEd2tQHuEauuhbWNVcMTCWjghtkns8P336dAKwtForMDo2K7qgVb",
  "key32": "4sZ6oczYMhWmt7V4vuAbCXZ5Dr5TSq7Ditp4nTAcQq2Yyias2CsZiYSCHQxvHc3RmeFsTeMwrtQ2fhYbFHmNYpsD",
  "key33": "29ey1CCbKFXozBqAJmqQgjFSXUtKwrmfK3MEPEWrT2roEzSCKW5af3fX2LLY7dSB2yRnVfjcdbrxmTYuXZjq8UsA",
  "key34": "5FFifNqA2Ug3GoPFkNzNhVZx8PrknWTLMhdZaFohx3hTggzegFYkZY3CCgr3eGvDiaA6TEFwrCmVgG82N6JB6smz",
  "key35": "5QRxEc2J32X1vNqQ1CgnLNrYnEu1UyzoBgVTBR53mJ1V3v4Sfy9NrUwSwedKNfmtdMeSf9BNCj2g6uxHkmZJj5iX",
  "key36": "2znzSrdiPKxykrv8gfi547fLzjn9b3ccLv1ZcLS6FUXkETnbVWizd8pSbMioQJQcrUsKcaEPVWp1XMLpFihw7kYy"
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

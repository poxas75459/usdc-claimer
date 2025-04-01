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
    "4iLvx5mU6uRc1k6itpMccKZsZJge7CbfnTSFviPvZVArS5UkiashLo4o3HUukpKf7w18m32rLVHPmvwhyoL2Vpfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2cdN9vn1ZdnLFfmUDksw6RJr8cGi4pqaSeJveHs7cJY8R9n99eP4P2EbN1MpVVHaHT6X5hJHLPXKp3b339N1E4",
  "key1": "eSoRqgiYY5m8kJkM9yvrNCFAzeL8mzQV4NCvuegnPqxgCVqpZ3YNs7LQwsKhjkrtj79s6dGYAuoAFkXTqwtGcw8",
  "key2": "4EvwQVi7YSMSGyEVJVXadL9tgsa26GPTc25NesdMkXZSvE48NNHYycnCa7pfwCrDJbEwubWRqeg5gzWWjXNNiL3A",
  "key3": "FAR9qmx7m1VGJYqYoB3FH4B4LjUL3qY4pstgzbuQ8zHJy9XYL1cHSch8p3A2BK4Sqynvqecr6EmhLDhVPpKo9Gk",
  "key4": "3yeJWXCYYJqUGYjnfL49CasrhAirDgCd7Jn2NJLyY64EDFQZDG64nKdrTiuZ3H2mYrQnzT4b4bUvcGAb69X59WKk",
  "key5": "2xYSXjd7dKJxjWsLUg6sKBy6fPPo8ytZjAoyERPxzT58WFtoNEZSpd4obmKmZYHSsyJAcHDT2PBSgK6Y43DM5AAn",
  "key6": "49XzgQDFzqZCUmFqHJrYCRyu6aKem1Ki3rLUSxA2pRLsfsJuAvhoqTY4MqgPUPuRqqxbziNWuA13MrhA5wHEjMw3",
  "key7": "3KXXN7ksv88hPPZizUtp7aCvhFKCmD7VUT5iRDMKYLVoz9hTfwkJ6AxoqqQ8B6uZqpgDeNmMc2gWMmN57ub9mUyk",
  "key8": "5Gc39nFWdShKbrXSyqDC5Sc2EAiqAAu1JPLBmEh3uoZzofM6a6gK3LR3M58RiAYUd9bkrk7WYvvMXaFXcBA59P8o",
  "key9": "5aw1ceMZHcw1AR3HA7EiTp4oCRxpaBkmNdrtpTBo1GWLTxxDTsfH6a7qL1eUVTJBkZ8YoBCjuYzQePYKf7gwyseC",
  "key10": "2LtBRbnpYsUucAx8S8CdcKgFs12S4emXFqtg5YQ3HtXXG7KzRM3ByekiQPdT3F7uAaDdaQbzwi82Mpmu7ksJtNzq",
  "key11": "m2KzvE39kx646yH2QaX6apMhWLHhXbV73oyNin4Sy9aNZv8xbf8jKQSnoC3yfkeZonZyR7stkuFn369iYxgVdLZ",
  "key12": "4STZwqpJN4iNCF9paCe2KrvmPzFM6KxBuVYgdNSZt7MxM83mjmfy4Q2cLz7Grgywp4jMUzkTt5q6Yoi8BanZeVMj",
  "key13": "26QoKj52rvHZ4MPZxLfiLqtKkN3SR7ySh747LVCUwG4sTdQcceUz8Aph7vgSbBZZi6cyBnfTav3QJyL16TDkUFqf",
  "key14": "5XtpRMizWXsFFmZeVwRtJjXhvsipz8meS6ibML5JyDCG3ME85TMsQufke4q9bSU4NhnYKhkpZYnEh7UiZqhgi166",
  "key15": "2dnR2ygJDDrSsGP4yjWRx6J8YFqzspq4rM6BrCW8hPmPcpNjbiDdVt5cbqtan42JZxEkbDbjmba65Tcg9UvhNkvd",
  "key16": "4HX2M6MvQN664WkQFaRWepYLDnGRU6os6zP9PR6uhB7Y7VPnyVJ2GRLoaQLqpmxoPL3oFXwHPeEwfcxG9yD7qEc6",
  "key17": "5oWETsUu8vMbW7mD383C7DVU3pXk8h6Dr9CZkPB4p4ttJNDePhE79ZmKCDjKpPsbTe9JjKsVbW73q1a7scHAQbG1",
  "key18": "3uUgb7GXuEvp2ZT8w7CvHchBCnyFcxfPqgZoP5FEcvoTShn67E7Cc7b1ojY1Ww77Yoam89Mn5jb4tyJL5cihapJ2",
  "key19": "b6GUEkNb1LyecSSFxGAhVuyfM58nVpgSVWgue1bez8Uqed7jSqU9Eb1Qd3fyM6JcpbvuYHmtmZgMKx1K8dCbAgE",
  "key20": "2p6TjDn8dZZkq9gTuGu3sxemxPpxsEUXFynMtGEqPB29JxxtKQjdS6hrhbMBVqH9ctxkgxKG8uHbdfi4nK8u1mbd",
  "key21": "3iteiKUFGCq1xcqmHQRk4gqYekrMSJ6txtdWHLAG6RYbAnbktJ5ZAnG4xxqDiinuUrAEoMcMEgdSVP6QeHmiQKhA",
  "key22": "pzAg6MqYYLoNAuaFWuMREytfoGH2FvS9emtB5H4s37QMdWuqcaXaDSeJdhGrQk5YBkwAqELtPVLDQuhvYV2aSMm",
  "key23": "5QFFqZRjKL2XPEk32ZuXA1637SyBZtcGa547kz3M63WNBRFirqycupg1bziCY5U7eaPf88bnkMp1Sznwuyo1E5QV",
  "key24": "5FpsMu9msdt12dZSxCkTKpc8Y3wywEGMbv6vYaWQCsBDh2erxXbE3Bs31rN4hpgQSCZV6iagjkA4VMddhgiXXUj7",
  "key25": "m8He5ZNppP8NkjQgaSxEUfzW1pNEsdEgsPadgQ2RmJBL563fwax5cQrk2ENRKgJuDsaSih3XwCSN4sHvh7uq5BZ",
  "key26": "59CmrDVeVLbKxxZ6hnjjdwDW1ydjgvYeemhh2kqQUy325nxbsH1amkpFWmkBGyccw2PJGpuXka3hJD9ZVXdoXgoP",
  "key27": "3dtFuevP26pyq5ZfnQfZJXQGcz5HRhABxvth1hKXtc1w11FVBRScTpGo82WAz5QhchdmQoc7Hrz1Y8f57tF6Gxgc",
  "key28": "3FsTk1zNy2riN8KXbvWYnxzyfBrQdPHdn7PRpPyc4BXFiZYtBJLoC19n67R41W6fyhzd7PD9KjuzWSkJR7zvNNeK",
  "key29": "4X3bJ4mbmUV9jq34A6cPPx8nVffbGTsmkpmGqJ18MWfR5pnhdYzBH1FWS2uDTKXRy51os1Evt3TRiX9195GW1gF7"
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

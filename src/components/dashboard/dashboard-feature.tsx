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
    "3mTE7g9BEnZLrYGE2ALhHJZ4nk2C5jNBc4CgvtdTPwJcAE722vB6mB4VDp9hc12GtbxpPEx97dntN2RrNyL6o2sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Em4MqM4BcsHAVA4syte7wnYEeFek9HH5p3jAjYokk4GTEeGQ9DdtRyAAsVqpo98XKt1Bs9Y5Yekux3ie3D2DrjB",
  "key1": "5iLxfKYKnKndGQisCLwfMoB6pfDcHrdQttJdVEYUkfP1oPqasEZz6snu3fmjpahD8psu73C8a4dJsmwDA1qWPBwe",
  "key2": "23dvzprCedthYpXXft3kSYbvDXYR2TcxgcfV1vFvM4TyvZS8sKA5qFmhwpnJpQ2t2q93YURX7WAx5ZiG5DaWa7bQ",
  "key3": "45GmHFc9JZqsDgr3pYVtjCqoMh7DByuteawuKcFyJXjr47EsP79rtJRurmANcJrP4Bkv5HRdhQRHG81QeFM8PiT6",
  "key4": "52hvKcqScUpNimgNCevB7SBpAN3J6dwvyLCWQfwKAPTPDGsHP3RHmKLvQbLkut32yY2t1zDB3uyg88pC1QMPWf9Q",
  "key5": "2s8dptz1umzJpQQgoanar8snmiXALXySouqahr7xhyrivUBsiNDy1K1Utd2EnTtbF5DJVTCrbU4YQZvLqg2rd3hQ",
  "key6": "36YCY9P6ZkjHiY1gm4gjndCcYK2gENYd2kkeMKd4t5CNWfc2Nj9GGZVDrPTCxYpZoYuqXFFKEKdDRmowE6Lwuqny",
  "key7": "2DkGrXfX3fQx6xDMjMqnx4vxTjCLe76RfvBNNbpvsh8HWJXfWphDCvxGdWecRUue85zHwwanuR9NkSdguBiyXum2",
  "key8": "3K8Q9vzMobSaaSyZHFxeHLCUSCjPTjKEb7vDfjBAKmmRuBiGuqt7MacvbCBHam5BVdUNUmcnWQjbbzNs2dugTC47",
  "key9": "4c29wPB7qJHBZ36aYXgzwQGaotyKKYEE7jYGYWqEnjBFm5yBUMePH7QWJ4MAGvmr783S8SvdtJXjTNqWdt4UakDS",
  "key10": "5nzNWkJyAuGGzAGRhtN7XM6yTKAx8TzTnKiT3ws1gLdmMccCgkwc8tsDBBEENfhdKsZbK84HJDACob28VpxuB3U",
  "key11": "4LtDJ4i363FcJWwShCHyEwKxStAVU1GnghyP7MtMQ1Kpv6m7j1sPCpHeo6GxisMYJ7nrB1DVfGq5rBMdRUG9BfuU",
  "key12": "34RNMURdiw4zfiGv5pfynr2UbHiF1UipyVc6NiC1Phgb788HFnbPsxWyJcaBtaKjEh8GBshcBMaHhkdDZWF16y4F",
  "key13": "4mG6Uy4auT85vuEpfVqWxS3Xgc56YbMZV2J2f6GhQn4enNCXB5hxAcPX7jJsDtqKksDAf8ZieoMcV5sjECwZvjns",
  "key14": "48a73fMFFbTuY696n2vasoU8Yt2CAEgfvDph6ixRUq4JcQ5gj8eeJpcK9Zy75vKWaDKFq5RM2wEhNWrwc8mNJHCs",
  "key15": "3EMMPegipFxq64QSCdx1D2foQK2PXVH2NjFoGyjSSxF49dRot71hFVt88yPxqqh3JFP81sKRsnVa52G2DckScePv",
  "key16": "63Tcu7g7ELFoxRVgwu6H8JuTHVzrY8YqGQz98R8cu5yGZaLUARqsPuwFhbtycdDW8LmtbGZovB9rUkMPbWNhJHpg",
  "key17": "4FvvmEsA1yG8D1oS6hTN6Jjhdz2ZoMMAweytkrKv1mwyoNvAwP9Aytog99y5hzdW3vyGbU5kRBb1BjEzgYDCwiGP",
  "key18": "5pXJcE27WpwxJayG8u3motgW3Mp9ar8Gs6JsAUHmVga6nrnCjGQWbdakz1SDbW8LNYjFsL491Ci4yntBZHgHyD5v",
  "key19": "3D6NNWvsu6Nd2ADVTabJQPHYnSMJRtDnzRP3sDZ2hgA5dC4rQn7hMiX5hisfuE9ScyujigsCVmSXymGEotg5DYT4",
  "key20": "3XjSp7cL2U6ngPwFrXvdoCjW5Mn6wQFxtjnjtuSska1de2RYjF6iVhbHci8S5Ho8KuK82thaq3Qpa4AMVuH36t8G",
  "key21": "4EPLdqVszxD12G8H5M2Pq7p2H75foMzyFEPs9xRWGwVQxCrLDfSEphLyny6V6H67RWFQK8WeENE7T3Eg5QahTGB3",
  "key22": "4PF95buBtoLjSaxTbpq3pe62dVPFSQbSzFqJpHz9jSPBeWrgP7sTM6ds95e2hjeV1LBd6AFwQGyLxD4GSvPNxuM7",
  "key23": "2Ntz4zaSFFzdheczQpiGzee6QHSpoEDZsc8G5L82yAJSoe1iv1MHnwZzmEZetHdWEE3AMsEhHaGnTKiBZ9rtNFwJ",
  "key24": "c7exPU3w2x9kpdMmjzV6CKRTvRGULvntTM4PJPpiqPWbhMLHTpzSPciepbpf57g975YJwhdCmhqsRrW8fwxDm7Q",
  "key25": "3GNU3XJsvzEMyLiP4Ryz8UfJYK2M1tZAFrPU4Gg5gspnooS4uLpKvNhxCk9KgXTuFpodRuVs73qyt4vMaLimm57M",
  "key26": "64wU8DifuLF4NJHoRVKqgzBNGjDAQpb6zuSEM9UgiKNzf4hyWYuJCxPscwMY1MvZWjv1Az9FqCqmKvxKmNjBi5af",
  "key27": "4pWAhK6mAnjaXSjDRn2k9GeyES45X17mQhYuhbmZroJF8JhPbyWDgemNCfFn19n8Q5burskAwSuqK9fkCQEJPZxM",
  "key28": "3CthSiU5KJ3gMKRRmkrewKdzDHUXXdeg8o1KrxmhZHPCeLzrQv1td54kw4GqyVKfZDy1fYa345D47CYkhp7ivNJv",
  "key29": "35oAJ3R2AjE8ZKBRhLfpouvJY6cvNQQf9jqdBpnswgC1yUoBvNRqAg2UZBSeh5VUmhupwDNQSUAUhpPLBKc2nEJu",
  "key30": "48jbdAqasXc91tigF1WtLJydvDYLfwm24eErSwv9qymH6qQ6ZPMHiiAFm7QKWDLJFgBFQLwvsSth38YZaQxVK5NW",
  "key31": "2z5f4C6nWivKrQX56L1qNQtPib1vLkg11Ey6mqGN2FT4h2TLrXP9eQ7g2izuC5exEMpC3dDxGGZPsk2okMGQVqXL"
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

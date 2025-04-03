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
    "5cVk8QbEaqJAncVFfqXqLMGyR9B42Mji4gW7a7yD5iVV9gpN5PaykTaJyBFLaA5hBhhUo3H2wKsQYrbJSKTe8X5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WijdGWGshcM5pjUJAG2wN4wVeuBEbNXUCCAiR18eQjH6ciEQoZmapTgjAU25d6cJ2Hn5De9YfNvxv6qKygwUebo",
  "key1": "2dYA3gQUx8PinPPGBojxcw31KMCEm2UnKrRocyF6xokKgwe7BksEV2cBsEJuncAp33vp4LvB5FamJRxWsR63EuZG",
  "key2": "HGqE9bxM6mGzVPVrDwvchDa1ZqscN1Jmow1taRdpTpGPZCPV9x9Tf8TLahtULM1AX84Gzdfjkp5PiE5LP2oqHWS",
  "key3": "5Y4fRo297UwjA5zKFUuTHS1Z3SCdRAG7RrUwZNsMF8NMFoNWvt9UdWayjkrSeLXGoD6MusmaJwCtMXMnrb2iKcUp",
  "key4": "ymhyc9jkvHsBGWvEntCWMsuGpb9RzXHCBSJRPmmdLkDR7qKHTRk7jSXmoiJp5BcTW8KTBm37UG49gDkfwmyTTVQ",
  "key5": "4XeqscMTuu1yQDJYF998EXvwapnc2SyBZ5iK3GtadqFLENk89xzEfWebF8wUGr1KHvVju3A393eWmiDpTCCPzrKg",
  "key6": "4coJ6wP599U9dYHK3qAoprm34unWEP9uQgyLQCKxsPEfzC3XoV9Dnp29LSys7nwYnRPuTmoLnzXiKYWAZ7P97Dff",
  "key7": "5pRL17wNodjgwar6WDum9FWmVoLyNKVp3nB7arCUp8CnsBzj88JF7e3Yetcb4KcWibpYzfUny3gmSW5WcVvZDDEN",
  "key8": "3V3ExZ3qFsejP9ko5NhrvpAhFeDLChTMxpLpLcgLKdPz3Wt87d7Qhjg8tyCuXrTNgs4ptzBHNquNudBN46sHd7WT",
  "key9": "2euRyKxUfMQErzMbrK33d4svp6pyjbg4i8ye1iJpkmbg5bNZAxxQpXEi3XDmNc31SXznKzKgAgcreDJfWtzmDLub",
  "key10": "5MqHJE2qvfHc3yMaz5ZFkBLpD3YmUs7rG4uMSinc6bBfqpYakpo4uqpuZc54iqE73b5uM5QKegMJyhcxXhyEUycv",
  "key11": "4393kGzj9GTjn7kF6KqiTzGHTJVyiPxT7vNDQf8C8ufyjMkdpBuxpYxGFjvEH33q8qXyDkxwesRJavgJhMwWSpcP",
  "key12": "3Qed9jLBCPcg4t9kcPSQFYuVZj1bbp2pU2pqLSPGiEE6rZhjspVcMvTssGyKD5vxcx1v8ffsGP2gJoNdk9fEFdsv",
  "key13": "5kG5EsFSPriFVYPYBGqBi1gcMQpoT25vxNG7VZ4SNwX4UGKVrKa2afd78hyAF7RiHHC1cJgtB2WjLSvNQ1zZs6aL",
  "key14": "3BPcfk7PgHfSkaUNov1qwzhiC8RrdtufUtW9FoiKYTNTa6A41spqEsnFkrPGxbmoFVgqAjhrMj3PLpqktz9xkTkp",
  "key15": "4EwVNvZYSN2e5SrTvyMgPweTjJVCctx3XoebHoTcas8AecpJ1TMSmt3PLnxTqg6mNkKDu8Kk84Mb6dNwSoEWFoPd",
  "key16": "2BH4FNbGn61GxmxnzT9u4Gnst9L5S2AjqPxwdsn2unmQKHZFPdYDNfp4QBw7jAPdDRjCzfBfqziUey5WL3un37PK",
  "key17": "2CYgQQhrgLJs2siw2NPDMbUasf9vqrAJNAiGRGFE1prGgy3S9G9zASVYaMqobyAhVodSM56U8VyxJfHmeGcKKyMd",
  "key18": "rvAAa6eVd1Pdg9QF1XG14Rw7dZBYdb8MhkE6hKDcfiUsNUwEoziHTT5r8ZCvKgE1jaKXStj9XdX7PoRcFSAbc7y",
  "key19": "5F2bdieFuzhjnwDRQTP8akoDrEoKFRv3iRxdDDHUms6bigEDXb5a85aU48hTk6bMuew7vEwJZNjMgzU7htPb77XS",
  "key20": "26eWvUvtT1SmgDDkPwFW3XgLAF7GPVLSvCR6DL6o8xTEFfQVwuTtJhafgqkxY5Sf2Tx7ve2dzddwRuUx1Yg79zBg",
  "key21": "HknKucUWPeCtirgETAyCaEZ4TcRc1zRCJczJLqmUctfW6xMybJWfxSkrB7zqgJoriB99WTkVuiPFSi5NpEDWe1q",
  "key22": "4CpBgg4ZzGJEDHZLdi7ZaAJGv2naYZPrtBoB3xADDQnhVDraLZ3jv7A7Rtg6RWSnqUCTRg2Cnqwkr3BgnGNevcdW",
  "key23": "2XCMRzmMHXyCPK45DnMRuiyXvMqkxks8cS9NdiE7QHabuwjsM1BpdmecwRD9MEVdgomnHaZVNZGgVgbFJ53kG4aF",
  "key24": "3s5KS75djZxuDVzs6fVDxcSTXJqbnAQrktikHmTFAYWzkSxw2HBQqvofJoAxW1KdHUZRLU4UHjWapGm2oYJJE8QG",
  "key25": "4PLhUmdEMyHhMHFTUehibK4PMonjgGwWzuat1mZvhg2Mdnuz7oxLUPUrRLBrgC44UkcB4e3V6AS5ns8Th9XnLqbb",
  "key26": "3RKucXbKpTe2MxQksZn5HTTgWFJ3Wr5pxnLyTK5xZF7kbKBd3ao1awsEWPkPpRvm5HLVX4pKeWihLGbmTkCxJfwc",
  "key27": "essi2acynCmbAuLWNp2bv4aWg5HwwA3RYExHZqUm3imNguC7Gug1jeVvKQmM5Lgg7oKYAHR6XvQsCCA4y9bqf9A",
  "key28": "5kAExmdJdXEVKA7biaQTQqzbz6VmiUo6GzAhDuwhPHWmesJhJeQVp9XMe7AZSLXtztbnbn4vWdeVsKEfeJskG1yZ",
  "key29": "3Ro4JHwqvE2MkJgzJ7metwUqVcJaP2QgqqzzXgfzkiqvq6BF6Qcov3RdAT8aa3iXFSJjp8nDM8pRUhZidsZG41GQ",
  "key30": "3YBJiaf7TzXzVtTp1RUpkVcmuwR1VvmoeA6zLnpWX43n1D4M7o1HbJYHT3PFRm4esi3xM6dXetWxN57Cx4eR6UN2",
  "key31": "LR2GRt2SVLzwyY3o1BzEYFREkHeuGGmuNKWBxjQ9KiUCFFDL84ECPc1YfmucqVqBWvYXB6SLj3z2SrpQPdWEQ4u",
  "key32": "4zprtVgmZW2WFnS2KHhCMpY7PnSGkoWUg4BgDM4UyGb5RkLa7BqrmSpVCmo4uZiNM6dMQLKKFXEmheY4iKcY8fFU",
  "key33": "3cD3FWQmt98L1ARVMZ4RF2XyCF1MNY6g2ty7mXrLL3TAHXxPhG7sjFP8v8viLxQ6N6zor7t315Yhsq1QAS8UqMnr",
  "key34": "3qzUFVujGgJB3EzzGNKtHx7sDe7ZCcFcT8CRANr49iZo52ggwD83JDAWoxiuX5khPezwwABcwNnjB1R5EPfgZwWf",
  "key35": "4ouSsJN7ZRa5dFWySCBG9WwJkFvNApG2PFUoxn8CaoX33BE6hLcAfYkmKXRQDFbAT7jmWDRt1sdXdFSb1yFet173",
  "key36": "5twcxhGu76VaDewptoxxq4MifT5Qz4qSv4CFmtE6PbEXvKdLwjFbXmKCehVE4BUGiKNexEA3XNM3vFpCXN2jEBNB",
  "key37": "2CQ3opvJNW2WhHqxPaxywcD4DQ9WYjWnMvT74nsSZsYZzSWddDPdQ9pTH5WJMDpGmVv3TmwVrUnaxd2sS2FZwrGN",
  "key38": "myyGdgThTVSEb9buiS3Z5EZrLdNesfNKpWDMYf9J5QhRwGmkArcoXqN7pDmSe8YdF7CEUT8LKRxMUFib8NadDiT",
  "key39": "okWdMKDCaLRiGmvga3CFQEcvit8WGTWx9MkkubnPozoF95qctgamd9dFCyZgfiUV9KFDZcXK8ZRSUco1ktxMDgC",
  "key40": "4voCkE2CFzKNre9MbxrxQ59kLJAC6dgDHeR8e46gtijWn22ghSwz7jxuhmD9MgQh3z25xfcQUCNS8DiB3h5kE1d1",
  "key41": "2KsvFBM6S1rMfKT3XiA3Sa8B7bRSmAhqfQEWhEF64VYEJ97UT25Eu4rgbTmiWUxyGG1AkmBEGXqAMyueDTTFBPqT",
  "key42": "4iWXF8BdnCrbUM1xaWYXqAcFoSeXun19YtYgLPYkNgZGkYGstdyTXQ8f6dUpf2HN5tkXaE38LL8vfKnjdJ7ZD2Yb",
  "key43": "4aSbmPyszsrkgfcWidfaxyLM7khE3omAtSS1Xe8j2KCdD9qXbyiUcCpquLERZh2SeJk8g1Rram1tW6b1Py9TYpFu"
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

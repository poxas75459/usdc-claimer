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
    "2MefwGaz23CC1fU2dio68qWCktuyRjHjJ9hdGHroneSC2M5ALnVtFRYa2NCUe5bsvtUo9trb6vLJ7UpbJ31YUbMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXGTNLF53gM2hPEiidQJLJgDnGNgAg43CCXMCFECUSbKAz9tMNoMZBVsLSWvyxSR7F4AzUBg79V4E7HXNwo4MQu",
  "key1": "4skZCwhfsVRVQBRcWXcQQfhfTTetitXKxyDzNQHLjoTvBBEfWYZW1JHZMFTrPMBsw2cq5aSFsNkTmXQ4kfUYWMRd",
  "key2": "4Pzae5hNfhWMftddvUkW4AzEPnikgL1g3pijSBg5DpEpJxWrXMcm5vxkabJWBagn4qPCodTxBuRQLNekvt5iJUKJ",
  "key3": "3NUu7P8UEfyciAuH6QTYoVh5WL6fXsVC7a8q82WyBUh18fyNatYHGrwv6gCKxXeA7tDeRZXLk6Wf6oY321XcvUGN",
  "key4": "5au6mY9A3393CmkFqiNDVYd7pXoKKGFL6KfxUNSnRyuSgVPscPosPHyGhe3CNM7ntBW9pHirmHTfyUwrJLrXVMFX",
  "key5": "66rxSCHumVHaghpgDktKPnUXk71GieyVRwn5s8Gfdmtmm3nyu7Q5YTozAAP4C3eDF8fZpqVJusEw2TTpVTDAGyHy",
  "key6": "2btSmA1YV32mLH7kw7uLnPtcwxHVMtcaciczJoRwwugrxsGvtGtqNTiUXgqsqtK1wvErQ6zrhy2gprfGtRqhd35Z",
  "key7": "3vqmK4qoEZWygNduPaTA6N6jYT5P4eNj1hCdkpghffYha6wgwaaGQkBHLAqEFLdY8ZYhC445uB5mn2iACYf71Mcw",
  "key8": "5okMfz8XQGQuCNzuD3ivgMBfLToXMCSaJVdsdAySteknY2i8N24QNwy7ukJttLDkKFy69rwH8Bbw7vRBGDfeDTbL",
  "key9": "5tefuLddGcEg38cKAJLyBsV7j7742dijiFYcKEH66Gmyz3SvcMzhpjL1bgaBDymMBBmmgzP32Gwci6eW4XuZmig8",
  "key10": "3SQ3DzGRk65Ymxe49m6iue5wE7Mpqg5iQxfKvKvWrP94RdE1E3ieeb5rivQiGKSw9GDPeXbjRvvCdSWAqubcid9M",
  "key11": "4CgHKT2Jwmi6Wm441nF91mQ18e5CXBv6qahpMeECVwk844LWaZsK1UCzLrDDyfJhdYJVHFN1VG8bmAtaA2yvsmZD",
  "key12": "4dGsSYFfaxeXHGiY7afWycQJzukVKFHBHfKEvEi9Bu4WFYZXC1pwHvL4PQDHuRP6kQ94w4BkFRCGkgZeBt2rsu1u",
  "key13": "ysQXnTvgpcRESS4qDSPJoewLJGEbJgKg6mQyy7pNykLfdvyKFRX9WAZ6mR3GZt2oHMXqYRjr77PAEegXRspgUDs",
  "key14": "3EafP2EZRQo5NiZ77siohNjamkaQDUc91Zp8CH1WXojWdTqFhPn6f7f1tTqf2XS6Dpz7f1A4DdREqTLdUfHX89fT",
  "key15": "2iEN3C8qtQsdDPpuk4KEWtu1ansTLEcdu4GEzHQJ5nnkoDibjrMkt5aoqhVuovZ3dfHjZnEsRUiTi5VxbZGJhM66",
  "key16": "5MWpGuwbR69Kmvsiq8FQsVyqSK9zvGHaKJ2zMQWtxsPrpck3TcLkCbCNbRq5osRuMF9HE5Cxewzi9QYuSk2FUgex",
  "key17": "4nFVi1Ev12soiT6cbMMFSp6hQ2XfEZTmcnrCwyBaGJGwuGzN2N2wRN71U4x3inm3msEFiQKbwGSdSe4htZzsK6nz",
  "key18": "hs8wyYRmbuTNxjgxvDgtLj3En8ChdQFaEvGhRZb8Ts4EbHn6SyHtSoheVAxVQCpuWP7FCSB1b9AmwvMufPYisnw",
  "key19": "3UztHXqYUKu5zGSP1qdHYrSjbANbi5Vqw5CKPd5RtNGSAVfeiDDEmVWjsKJAZqfGgqEYEE4whunMrN8mxaVtqw8V",
  "key20": "c14NCCiP8FkPmtUpHurPLeM4sWsows7gReFuFSnYYmahWyRJVq9a5V2bKQo2F1ednBWoUQBLd8kahEt9TE4t6MS",
  "key21": "4TNJePJ8JoLiuJ3WGTS8uWjLqEAN5kd9zuE6xgHTuSaX7czGUZW5A1Hf8ZZwBGEBtWtLgnveMM8VEFVGZUAA8dz9",
  "key22": "5UEhJhQimXg6F8jUtjs8MF5rzpgLaSJkAg9QTLSj8AWT6XdJmQJtQLixJdQf7LkDLbcJJXC38o9yuUbbPKcdBVpz",
  "key23": "4CWkMWchN8pt35PYRQaqHPzn2an7wvGMXcxgrfKhDwVsmhjWhNDAqkxuxcePfoJb8yzwZ9bGqW1UK6iqa3dmFJ4Y",
  "key24": "2ZYLq6fdmc7s5pmYCwZ2oWR85Xse4W4fY4Lra6dc9umnxd6qrTEkADPv7LSmDcKBoRCcsorLa8ECdNYvdvMV7BJM",
  "key25": "2xZWQSwnhPeaRpixxiHo3YDj1EcuZTe6fWcaWK3Qm5dGjMpQNXeQuqf8aeNQ1s8r8yjxGcsGozSYDJqqSVatHhxn",
  "key26": "295AZhJSgL3BK3fHL3Ga6tyTCC3KYwYteufoDiTvLAGduApyXFLhPSh81wDxJrsfEtAZQvF1CkfZmoLD7xSb6Szn",
  "key27": "2eamhDVpcHopixYxBWNzN1vXmqvzPejV8epkKp3h7Bh6o9RdaPvPWftbQMtcKvgG7MSnkWPX99uQLsomRejJtn7D",
  "key28": "32bY3P8tkmgNSaL3hB1KXYCTNhfxGJQoMV4MpmUNGfVrJZdbZ15LiXA2bDbeucjcupkTdYjHUEXSniAK3qHGKx1o",
  "key29": "54VPAbE2tXxLRmqNYT77ErNnxmZVCQPE8RAWAdKD3at8DV6jEerXcFRj2HNG5nQVkNh2aaWygioARXWo5Qh1qxix",
  "key30": "3cNPcVTzKM7rmgFbecf3roRmK6J5epJF2TA8EpxhrmbxoS6iATmVq7sYCFXp54axDXMbjJQuXeCYrEzWgcCzRr1d"
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

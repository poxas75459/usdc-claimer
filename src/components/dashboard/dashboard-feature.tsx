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
    "3jkYjV54qzmYNzNYXLtdma7Ly1G4P4txGznmWebBenwj2icVwP7UUHEAHDfgJJEAik6tkTF3e1u9Kd5MJJz1bq26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61SqyVHnQ2mPi2yYPFe9ZEcKUURcACioUv9YRyXDBsMJwm5kPMw36kwMnxb7q61FWcBuKPXQu3fhuKXMDPZuju7j",
  "key1": "3vxMcBv92uGPq4RsAESdVuuhiwriUFytbP13Q2GqJRKn9ZeJheNStzZ5ixqg1PoGughEEUnvW87UdPmFXByLDB3d",
  "key2": "5PghRbVVV8XENzGtGqeCK7cPDV4bNgoxuLkMkevxPgWfHfU2HSjxh2Ffa9xhDnt3TD5ka3C2TeDSr1pgu5wHKb1K",
  "key3": "5xCby3SSBSPpVFXD9kFyuwbiWHtJ2ncddtNSjfeUJYwAXG2sH8j3Y5fuQR2zkuuzYxPepVZYAexBLqJQWUSgUgf4",
  "key4": "FgWcBibsafgxSMeUs6Phk6dfjBCuCWVEDmkDrU4dqzF4RuxzPqQBoYvyft3RUB3WWS1EUwEp1WwAcTHGxrcZR1w",
  "key5": "3x7bWrS3EXTboZuNtKKNzX6MpZb322Zojk273hVwcQCzdAs8954wJjNViej2qri7SweSnFsLxnaa7dC67gX5PqxQ",
  "key6": "62wbGLQyxkYexbcvfKEMEYLwFAgng3TUTMM8FsNG7fwngzPXbhecM5wc91qDtKo9cQCAjRLfbNNzUPjG4Pd9ueET",
  "key7": "57yqxikWQdXp9kqd8QY8DgJS2cRFbp3QNjM125CMnjPA6PJ9gn9Ep3dj2rhezpf88jJsbEfrCFRtsn2gBMWk8aUR",
  "key8": "Gqj6MZVJgkYxjYPf8BMZtyrn3v66hk2TRE6tNgSvFce9qhG1MjyLpxubPMxp7KFruLbpTPBk1xZkJbLGCXkDjaM",
  "key9": "2xZRqyk1mGfHmNxUz51DHKeGikR1YPUtvpK9gRHQsbrBVw3w4kXhXDUttNPbihihEPLcDBgaDj2kWSigu5pPZMsE",
  "key10": "3kybR1NRZYt1m567wWQV1uzqktCmRZgthRGGRQ6CBBf6RpnC573uTsc1we9GbHmbGtZ4ofs8eD2XSPGsdjMmMPhT",
  "key11": "3S341XtpCp3We58i8S4xqm38Yr8giaEGuCnZsu4LvKufB7ji7FL6RW8rQ24gw3F68RFU73xuBFPMbNBfT29446kK",
  "key12": "5v3dMfq65tDySZfS4Sw448knDmeD844Y79HTBn6igyoQ8Rfb1aAGdxmMyxFoWJgtYbxLAdSQHcorRGpEGs5hVM5c",
  "key13": "4vYvtrn8zT9cDickbQcJc854W4nkPeGbeUTtx42F5vfbVLktMbxSaUF4vPK9G6EB6LxRgVub9CZtLseLYhY7Jdcg",
  "key14": "3NNx6QWu9vGvsnNmm12DJNUdbr4ZN69bmB3YBzzjHhdzMSp2nmJuuKjFvYgZJodckjBemupVvVXHEs6BTXnH9C82",
  "key15": "3QwC7m4NVt11qdMwRYWsST6SXW45k3SApMhazq1gKgKea3ZdfaMvfDn2R5FbwgRSG31Tt7sJZkCDSFNTsa3nRxrV",
  "key16": "5f9L9XRzPpumEfVm8Bh7SmvKYoD7pEtWQZjcX2ZddFjG4QXquQRwB3jwZDYgMCsmq4XngbjycaZVGivPTSQxUcpv",
  "key17": "3oWyWb3DjjB96kGs7ShQtmprsiDJ3Kjknb9Bww3ZMN6nLEETWYUNYNhPswyg2tY98ixgAtwihcJXJ3igt3GPQdEH",
  "key18": "2j1Jb4wZNy9brqyuzFqttkjFs82WF1rwALfrXspXvtAwJYpqcX7jXWKThCzMqevBocaL8pu76jUwkjznXCNZTQng",
  "key19": "4saPxsSL3c8mW8aQ1px8otRZQr45Ay4f5T6NT2NUdH2DcYLwgGBwRKngvbCEN4FQb3QVBrkHizTqyfmhhBvBF83G",
  "key20": "4ErRg7R2BaoT39nLf4WXrrGTRmaDFUy6TMJtMtTePoMpFEnB5kjtnP4JDFH7iv4L6iVQeCzhcSMZZtX3nCaMfKvd",
  "key21": "vqrztFnu6RympBo3B59LnURPFPFLfgPjod8MmAuaKYFAYqVmKy6YePcG8Rb6hHYVg4ESoHvN6J1vuddTHpVMThP",
  "key22": "4cWJXm7au9oSLUTJT1LHzQsivFdCp27DBkFP6oU8SwF1cFo7EZ5adUHojZsCsYyabcoweTttWLgKzWMr1rNCcL9H",
  "key23": "3uERGFmjSfkS14N58PdNqeWU5uC7XsturWQM5QmLNwoCM58otDc2LwjZajDa2TdzDkRw6hrkjSNVfFutLrEPVkix",
  "key24": "w3RyewpamSWSXnPDcPskW1srsaGC3321ehCff4qCj1AoDqjebJP7c9GjwDaiFLCkTRUP6h8dYAkcmTU1fw9CxY3",
  "key25": "YwrscaEkDLNmQb1Xy1rQgsUR3V8pufYQYtFLo9oxpDzf5w8Jk3o3RdAPST5qZLmnZ9achNH8Sos8nfE8rCiPqvh",
  "key26": "5Cr4fYQZ6pocFZ86Xph7tYmqQVcUdrtB3dyasPx3aGWWGbuN4FSfcUSMATjqdJQEvjBXGKFT7wVtZ9qHfnBewCRg",
  "key27": "3rsr7bBE2Mr7Bp71sVtCDjSTPUDLfM9ZNunRvkQhmYAAJsVsQU9wk9rd9aQLT8wLNMx2jUwxXUdbmaGVpCAA4TXt",
  "key28": "5bSXyQU5QVQYo1PSv7v2sAu9fe9FXFhX2zfpk7Ke4KRezoixxgLSpMyVChHNuSGfjVyML7Lw7hbvihe6LASvh24f",
  "key29": "3zVQ1RN5DsHXBzC1hZhXGbmRxkjG7imUdto2B9uSZZQFzMszvWCrbGoaSQMt2AfunUJGBQE3XQ3zNePu987r5gSy",
  "key30": "CZbu5NsC6ouFHy4xmEnWxPHTRD1tm4WQLdrZ4q2LUBib6dPU3dDcd25BnVcrjswjJg57GS2TXH4nDfnhV3xweG7",
  "key31": "5DjjGK2PWKmsVhZ4WSbX4PkECDWp9B6rKMnKpYM7NuWYhGsCBdiAzLt1UXAtqMi2cgtMu7N43dxCvmDw4ft6gSpY",
  "key32": "4rWNPnTig2RF92CtS2S2NxDnsP5SCbYzAe3US6ULwAhX5J6SRAQYYRrktr6PVio6b4dDbk2RhG1xEfZwJkUBvaSQ"
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

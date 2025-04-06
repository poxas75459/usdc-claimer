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
    "3yutprpfJGdbQCvvj6gDGEJfPxAFHsfrzeeMxrCaXcLRXg4y7MFB4XzsWfuTRnsaEmNipsBJkDNg7ERy4rPrVhDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ka2zzf4qQvvuzyt7Cdth7JEgbMGDrxT5fG64RQyGZ8oxj3CtbGHSYq25ugoFH7cKURSMeDpygdzXHXTrsWJ9nDa",
  "key1": "2R9aCbzszN2BKZXE2FABuM5DwBnJVxkrbyY6seu2QsSSQqLGLXToxLm7gSyjVet4PcrqHs1Tn2XeMGXStReuX6Jc",
  "key2": "5zXMj7k6q3DS77HNWa2uvGeuoUW7rip7XQGNWok91aVuEQDvXgb9F16Q5U3puZXxUT8grEW3VFwv5FtHgPXgNE74",
  "key3": "5TwWKUhwGs582jG3sYRmyfbywFQxjtV7ZkM5Fzi4giNhBJZfM1YQJFr2btkYtLB2kfbh7tL4MtrUzTiFVTjzNS9a",
  "key4": "4wU2BuDftVofLaeg5NiAEfs5fuhpSGCPmD9dxT6Jbxq1HNacBdo58YauqQSwZsorH3tTGeCEJyPGGPwSYNVcuQSY",
  "key5": "CH7c3ESCefKXED2dopnBiMXCNJtL5L3e5EdRkpaNac9T3YvDyi7jKVLVdAHqHpjnosghDDAkp7VSe3C53ZGdTqU",
  "key6": "5CtzaEsQE53oz9uSPV25kNaU51pnXcTrvJgeFVmGKEdruwoRNURuKQG7ThwUpFMZzxjjbR1imK2Ds3KA7cZEcXR3",
  "key7": "2b2NP3877nbxhdk8DoLo2EnjUjDDmGp8VAN8snJuUChyQtCKwHX2koCkS1JWm4YQuTtbKSpyRKgxR7hwPYufMgyZ",
  "key8": "4nt2ibyZmcZbEoFU5njXUFMuXLdWKgvcxKwYfYZ6RYL2jjHYNDX5er7YjhbY2GAcAV8NYqJd8VTgmFfpNYbmRcZs",
  "key9": "261YZxCaWxDVyJpe2NZMd7mmMtTcCdE3X94ENcpS1ZUq7oWamTrzdHdQQMYEULepWnH4p5cMRTW1hizMK3BQJqzE",
  "key10": "3bfGNyviHPV4MwWs9NbspkUj3RVYNizZQq93wTTpgJZyqad2UghUVNLznHSz5njdRa8srjyHV3L34s4aBGjVCdho",
  "key11": "57MF1UWVzNWMCd7UagHN7L4HvpTddQhX7fbfLm2iWuYUGJvEgAuu5XUQdvDdxHvoeb1vQD9e4f5AcPkWEwQtXpy",
  "key12": "2CnYc3SZD4ZchVtfFHFss1LtHYiUt38ywqaNGfZ7EJzuE2eNprB3pm3xdw3iKFSRfnzk1mr1QSXTgXhvNEosjyTy",
  "key13": "yumoqpshqMF881AgeikY4NCHiB87SRqLD2VVfQkw9TrVCQGs25rydmTaBdeY85scBi8exUY58Ks4trJyTTabn81",
  "key14": "52d58ThmA8VoHiNw4KbgqFoBpArTHAFWv1VsrcXZ5WMGVfbFzK1Jj21RJ3NnKDs9b3gWNgEMVx4AD4A5BcELuk8Y",
  "key15": "2xM8H1MEvtzBug8CVtLDA9J9hJxaSJBQuQciuive5Lq29PixwBt4thHACGrBQBYexg6uKXfXfeMnM9459SxqNyoA",
  "key16": "384hXMVR9XQWjxZg8EH9QDKMJ4WmJ3mZYZc6H1HSH9poG4nEU8TNeNCAqANEdDxFtaJnaTLw2hU8GzxzQquuUNGG",
  "key17": "Wybftx3YRSwf524Amv6axYHyEsQqKRw6GhLXybNM61j1u8NsE9Q9eq6ENqT7xiLpvb8fcKg4AH86TcfpVuxWoCb",
  "key18": "3jK5VXnWy2syR5ZE8gq6HajXhVYmpP6Z677RdTCQ5DWzjij1vptLBJx8dJebnb1yM56379RnPUUDJjrAo72UhXZB",
  "key19": "2WWCDgdVz42YYo6zyBprjRHiksP6kHzsekWtUMYbzbr9isgdJCv48wThZwcZYzCsNPTkkpACqLCYP5E5wCPosJpM",
  "key20": "3nUzQpkoTsAXJoLoFCz2D9uy3xkVDNJUQzDhLkePhvDFHcj3QdxXkkRV1bGopqa13LW7JbCh9pwXdSpxzoTasYqu",
  "key21": "2JZE6vEoapJPYSeAcMmZNCewKyDEe4gTMVDixuT5xV5X5RpUre7tPC6xi3N55T6FVmL4tCjF5pHmvQ4NScRy4ACY",
  "key22": "3ZszGPwP419U4Wre1fb7QQKi4svRk17aDaiEcU2EKCD7PsxCuRk872qi9Dwfk9ecnD4cthYPfjeBV5gkfzMrpMMm",
  "key23": "5bArzfxz2TTrNWkmnp2Wjm5La8okodkst1JTL3n9vzDQxyxSe3kbF3NHpx6FbFx5XAiRVPmQo1q4wnC2zTUih4Uf",
  "key24": "5FodG85bRxTfPogh7SJQ6ACw3kBmaHLJPoiVVz1y6pK93jpLFaauZ9XVQUJ1GWmEchd8oFY94Zabnwt4qrY4hRgH",
  "key25": "5v4AeKWFWRtdtsCiv8sxCN1TBJ9HYjooNRddwtPJDJSmQ4YjxAD7dbf14PU6GPbrGQPRhuvKXxiTrXndvCfT5Fs8",
  "key26": "22rBLzD7dCR48AFZ1rW16eUVUQGW5K5mwEuBkEwhTaoDmgwVsgkNpZ7J8JW6bBLVDwp439zCDAJ2VkEPj59YWqmC",
  "key27": "z7X5gtsfJUZa74U9RdTH78F5GLKMHUWM5Dy81EHYHg48pwxUY5vsvPpcHUyQzeMoMK2NmRT1aWXwj9RSpUBxWBR",
  "key28": "4ycBMFVJZd3qUCTYLJBWmgBApzQ55sWYRD2z5Fcb3AQaMPLrbpU81cGeoMd5X33kgGE5o3eeUnkKAAXyXUk7sMqa",
  "key29": "2ZuaAyEG2FDywp2EjiCtT3uMXf334oW24PHKCu8fVyLqT944ub5SVEj75ozbENXKKLAJFXY5bkeYHuYp8nWv5qSk",
  "key30": "22UE37jDvhRS6FyXwshQA2betG8Ei2ToogWQei2YE3eZ1uyW4w2yVBLpiLeXK7WbktBU1J4vcNpyPbgjcopUBjP9"
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

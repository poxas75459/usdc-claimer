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
    "4NehMTWn91mA4n35vfMEgwunLrN9m5M6CbiDHggU2Ge8dhzQx7T9yq2hvMmZV7bGFmRPLidjAhVvDrdGxWLXb46h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUV2hfTLaJZfMgHi77j1617Vut9LYVsjTpznSBvsGgo48ZufRVCUYKDQ1J4XmYCSS5tAAuTKMY3bM9RfnS9ZSxM",
  "key1": "5PuQYNZSEmT3sfVH3HSzSfnyDySziD93nmUY3pzh6uD7vYRx5eCVivLX53hqYpLsCAQ5Q3FBJKS1Qi95en3T4L74",
  "key2": "5qfFjomTuCvdLzaWRQbrXY1mYSSn63uGephLJXnQsQMm1yonhk6Q5huGRkzwTwpaoY6hb9us5RH8FTuDpKVUrcCm",
  "key3": "2z3nH8oYM6Ugqg4q9MLHLqUmC2ExChatpbuszZ9aQWRTYSTnohsv9FV7icvD5rvXW9qGeSFqEyCmNZ87DcWWsw58",
  "key4": "2A4MCYvB8hV4uZp645svq3g5GT16kX5JSdziWVWEPAECbEEvhWgWoKd44YudP8aQJcyXNUmVzPcxey5rhnFQiwar",
  "key5": "usukKHnWdSQzN97v3cvpVXfDT98AXY7yZWStt4UA2Nsy3D6V2DJZf1BFcUaBk3neT4e3RjkReTsQtpZsYLRBVdF",
  "key6": "5URyF6cQzCRCa9ccMHWsSPXE2obdSvmMEcbFMscTGCRvDW5mkFSLgxawqy5xddGf74H8zpR6xw1BcXiKLHu1wtQw",
  "key7": "5cVXosVHroQ9nQ6hePdHsQPZQFuo7dQqMij2h2cTezVayQDA53AXsLbmJ52DYYLJzp4SWtVdh3eEPxa3usb9aJPn",
  "key8": "31faAsm5LDzRMXCzA7kSQ4cKZLLyoDmmT592B5WJ853P4dvez8FAyCbq2ZLwHPPJniWewAS6TXfFEo9FFaEQvsuy",
  "key9": "4QaoHnweqzEEqkqERgmBs6igvUENivJhoKCZhyaRqED5sNYvSSDXMoygSsepizCQxPLZ4vCJMyPTKKQTrvSkBAMc",
  "key10": "64spWPnGX6zeBnrcorPSHMdmbZp9kExVEgKe7WXBqiCLky8UpwBcFsiWFCN7fmHDTQLBxZeG8z1SkFCZnpSjtdx4",
  "key11": "3kUTVvxURw1KJJJydxyaRXhjbfxKWx7S4N4y7y8XVQNKRSALSbogM8f7mx89mnpbwyMSE2ifynZNqvPzbYVaWRR5",
  "key12": "26GnnTDkuB6FvyoeD9HDCkp3rmbnfPgfEhAKGedzAZZoTCCcxUXCtmoMx8rpwQ9yDzsYymvboz1GaK2ZubAbf5qG",
  "key13": "5VYci7pj3TT9DrAupvQeL1MDjMq3yxeNTrcpyJ53UrDmrZ8btCBAZ4utjwgGBJMqCKbQdNwUhwSW4ik4YGTaQSU1",
  "key14": "3q8GDjkwhqcQRXBpKoDoxF5bZ7jfp8Nhwtq5n2KsTQmG96G7QMnCKcHbBeJHCKhuk3KfA22JEUXMb6chox32AaHp",
  "key15": "2KtNBicpU42kWP15LELY6mZ37Aya64RTTRrArMiZscMdX7JJ1Ku9rGy1PtTHsDBrKkkiKVqbNbjzuCnBbgP6hWPz",
  "key16": "4JyxeRb3PYpshDgMBvFwGbVVSXmb5UD9LSDPWMVotCuVTVF5Wzs8mWVHHWTnKuScpFoYmmDmDZwZe63ead5kSyaP",
  "key17": "3VmeHFqTzLQNNJ4r7HRucJipUGv5kqtECkaANU1VwUfD8mANkpj3Zt9b9767Yd3KPu4M5cH9t4UTw1d2D3QyGwDe",
  "key18": "3PgU1R1fiogqhkeAYJ8tgcxHKEMKZareB4Xd62gSR6sr3m7W6RErf9UkgbF5U6NbEKDqad6M6AdLjwsxQsSajke",
  "key19": "41Py9LNdyaj4sxCyq6V8aYnPbUH36Kj8M6o2L5y8BLyiHPvYxqJQYQbWCryss5athcWwQaZ41BjTmxWKkbVbvvGU",
  "key20": "4eP3QH42GJrEXhMGy2Y7bvmrLyVaKsSckZ9j2MY8AmHWSCE2gC176g53ntVUjWhCPkVDRPpBWGqCQyyv7hLeKy1q",
  "key21": "59dWFzopMxVPtfNYDjebZLzBvgW9fi3pkifX2dwfkpDanS1USwKhtmvocnWhdxa8raCD9FuTq22PPRrppy613qYd",
  "key22": "KujpVWRS6hSvVwQpUeq335JtnMgGmkLTN9Ra7rFtRpwnkccRm7i5VEG1EB36DVHKWo9u7kLhC75JyzBTAXLkeao",
  "key23": "PDeHfwvSHyXXxUnZLtZSPEtFQR6p5pSpGtBYSpf8vBVDmJF1oCHAwgDPyBihczsr6TuFw3p2QskZS3PW7rhwF48",
  "key24": "4dRBVEAAojrwyRcXjAbeonmtHoGesryGqHy7iKwa1EjDaAcDmvTzHPccfv1kDxWVRtkSHYgaK1mwUaEmFvdujEJ8",
  "key25": "2iDKTCQuVVCedsnsGrMdhAjkVTxPiw11E4rDcPTF5r1uBc9UbLAPG9P8vPC8YfE1ZcKLUNYMfTHu8cfRhDvwytbh",
  "key26": "2yc6PtmDdd6NCi92xT3T327VTZqpURrc9tSrzNDpG1SLp3i7GoCZaTGHmbynLVbAYmhEe8wVifdTsPz42STPbcxs",
  "key27": "52HQe3YZZwdX5V2k3oQC9utdx4VuETRcZ6Kw2kpGazPdiPCoZkxZ4VpsxWhaCgHiWpmhd2zYpmpwGiVdMeFAkQRb",
  "key28": "467GZEzKuwEwmFDzRtHVFYcKGqAhWoSHjSGjrP1hamiNqVb1UgtZBowi6bkjiNEFqS9P55mGGD2v447VCaZWV8sR",
  "key29": "4pA1HvM7xVzQP1EFBQWbLgnxbUq2cf2TaDCCQiZetGszRQRZr7YK8JcsTMJVFR3epZT9GHLQKbsS5TtkYHEpeAjb",
  "key30": "2Z5GwZnzBXhCuBJi6Z8K4h654Btb3FQH8mciktWszLQk45ktQwG5GaWP3y8L6kg2bsU3BYinUV54u2JLuEDmCPER",
  "key31": "56YjDjVx1G4SNiaSRXxYWxZbZwrTmvitrLUpntyDxcKtmJbRp5yVFX73JZCDcjyQi7eZCPQt5C7mJhRmLKyhzJqr",
  "key32": "4FbvU2uELd3PiL6rsh6L9XxuHrK2gJuFTZjNx5YUQEjGcwPZbnjHt9cYEe6otEk6XuSvkaGjGbhpUqAyHEQABR6n",
  "key33": "5DEvnzVLd4Lj9LrxPizzNiPxejVhotJDF4nBkiJTUm1TYQptESsZeBfHZT1aVUhNLGG9tr9WF423X8n8YVH5UXUR",
  "key34": "5s4NzCJWwizPtLtXUGS2iVhenHKR2emszDZfhzNKb9SFhUZwkRPCEVWns2YUd5Mdg9NMmHzZd12uUCE58Q9XKLVt",
  "key35": "2nRzVUApWCvbSp8Qm2XKnKWkMLAjjEtbqhCXUf5QU6KzrrfosXSf4crSVk5jkNrZeFeJTPo7NQNjJSKYHxkYsbn8",
  "key36": "4SBn2Hi9Hf5U6MizFCpxfG8HX8EhHSxCYBRWyryHG9HabXHwcmNvVwxDbivgYNDnpkpHLMECRxm3147ow8GniXjK",
  "key37": "sd1N3TvxSYEPoxedSMRovA8E3ogn7GG8Jc51aJ8oWtWRjLUtb563YZ9NqZnh3HvubsLa4G787PwDC7WAPoHovKX",
  "key38": "28ySeVdtpmXBFS8Hhc69HJK3nTmtJQw1Q49xPfT5wsJdjVwbKYQhCS28HFgFyaj2vNhbHrQPekyzoWXEBY2vhka8",
  "key39": "2Wa2Kqayshsx4d7rMjiJ3xsEDKbHwXxv2xdPUpAjyTNUFdqUndwVyEPgNnjZddVLydwUMQWNMUUUpSZ7U7o6kdhr",
  "key40": "2MYtxtPp48ktUPZaURCnQvMMZevAZe9Q1QXe8Kk9wh3zxcxSHHuebyRsD1rBmFCSF5GAf74ThP4EfjqzvehDNLh2",
  "key41": "3h34k3HqYKLzpzoqUF9cxTx5VNRAUQGcyjTpJTxRPnaUQwei38KrKZ1tjfHWjVvDF8Tvc29VLnYioAyQUkbhboxE"
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

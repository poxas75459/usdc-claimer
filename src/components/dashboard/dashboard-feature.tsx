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
    "q29Kt1M8u9fowBzU5zBCzZcvoCGacumaRgn5HGqJsJdT5hBAyjR2F1JueWA8LAzshHdMTpopaDdrbsf5Waviboi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJe2FJhTLn9ieKS4m333Z1k5CnTBMDR75WuSHPWYkeSxLhSimRQmTAwtmxXK3hAaTL2XpNDPUiNMSxUcFhZwgv2",
  "key1": "43MWkQ9V91Q7y5Rn8t5iRAscfY1gUxyax9HB4hY7CB77x2UgMxowDTVtrMkXz3orwZVRyZALQi52B9CzumhFdJ6B",
  "key2": "65PdfpxATt7LAAajYQJ4JffPYM3ru7CxwJVddt5RMTsNF7HX6DR7YQE7bD5hNgMogh9uKH1opBPvskLYGvhzuAG3",
  "key3": "2Tt8SAivCwWeyyzE1RpLz2W5mvCyPTniDjSVxJ4tNLngWdYc38p8WLoi28dju4Nipuc8t6ZQzCcf2j2VT5xD2Yp1",
  "key4": "diqg219i2bsovR2DA8ovHa5cJiuMH7CfmziiVGAe2PwVmgfeXWkcbxTq4PFPZs82hrAeqK4pq2XguWU5igo7E9q",
  "key5": "MvKHWvwCMWrAv99oyX1NGE85b9241fFKqdhDRD6kvWYxHSTFue4gLW4BbV4eVVikRLenEg9U1Rb1B426ToyigAZ",
  "key6": "5CaWpFDXdk7QPitpwMMZnNTNX8MJpi5rGGJuvKJa1ZxUF2PQK7RSgGhznr2P7iTQ5sYznN9NRtAFF2QiYa6pehXp",
  "key7": "3Aaazury6sk9gnkmdDYZaoibetGzFnG5EyqAwiw2vHAKyZ9vSZwMqVk5FwqKsfMHiaJqBGakZj8WLLgZianmGYM8",
  "key8": "42238wcd26E5sEv8KYcT8oE735TAr7Tnp2s5LDvA7wPTFmpoG7wBVG56PqMP8bKcTNoHbmdqGYE7Gza5rrkrP3Sm",
  "key9": "39oZx4FidjTHesDPeUkyYcg9AVqH7YPYLp2RZWaMnwyG2omELrV6RRQW9fQcCthyEJPpWuVWdASGWwtBwSw2Mo4L",
  "key10": "3ikyTDAEGPWWjjZDLHorNwwPTTGV8Vq1iHeTbkvHZeYjdtPFhE21J8sxyrFZkPFSYFZPEt2n6y1zBCPPmvDqhwjt",
  "key11": "24v18x1nh65nG823yfUR2ZDEvcmKVUQWRsgFzsL6ce267qBMacMTPLVqFzUDsegiBwcb1MZexG9VRDWqUm8s8oMv",
  "key12": "64TioYh4JcuAN9fMshQpjQr5hEWNficSk7duoHWTCsAdSyMpG2Cmh8fQhoCK8XmxX5ECFYhaYKu9rBUWaFihnoji",
  "key13": "65n1ybU4SKRxcg6mFXiVyeA55RuwxhPpPAWmQEN7VfRw5Sz6eV8jd17F6iusSzNWynskVe3BQmDBZ2DttEQht41j",
  "key14": "2W5TUM8LXdyeoxUuCHriS3E5ASV2NJaEjzMYcZUpGrBgupTsPCENEMpXSfkfDd1KEVdcwoi5M8WZPbFyTn94g8xn",
  "key15": "48wX9SmEDKtBJaygCs2XxqnbvpRZSfmWdGtsutyFy9qcne3nSYG9tvNLUUDQkKWE9PvLqcM7rdQmwwm7k5GdxLHG",
  "key16": "2Wn4Y5RNCPQmwofKcJiLguqxAYJ2wFKdzGQ1dBu71BVYuA5qdakYjR5SFgaqN7byXu87vhtv2PGAWfQvRJDzDrri",
  "key17": "4j2EBNCoS23B2MJncx1z9njwxT3wqxupLnoBkU5FJdND9v514pvEG6MrB86NxgwHQxVPLcDRCLb6UKugAQashsp6",
  "key18": "PNpo7U54pv3tqPxnrnf4KJkpSd19jUyKvRtJ7VCs1oGmPCebbqH1rXPyuhGeqFz4QBrBn1P5roz2dHvtnWN46A9",
  "key19": "2f2sP33m3cKq5UPKtXfYvrvBxJe1Zwp539WLu9faua4Gw5FfxEpgMKbrM6ZPKvqmXjTigzrk2JgZpGC3PKvqQbuP",
  "key20": "2PKts5BwsU51xaHN1yAiU1joxPTB4VXPQhYAGtVT7kYvNdJVQPX8gvTKPf8dn1DqzxwAJxEvtPWgeqVRJQAhFSF4",
  "key21": "5H1GF9Tz12dbFNDDXc7rgwB4uRQMACkN1vgLHWsyNTs7sESjjBcA6tn4fNcE623LRCAuJBRBa5jciRfTa8kx7fFe",
  "key22": "gibpHWGMLKhceS8ohTwvhEBN2P5SWkCBVeDyLiW7p9uP2oUtKE5RJAj7cvEGdTAvWSiz7G2H3YiNcPF28z4nyP3",
  "key23": "3fnQSxjnivSrmomxkagQw49hEuSXBLTuF9TH9Cq68eRcWPG7YNzookhi9nqq32vaVjRgPEx7mfCsfRhzQbVTr18h",
  "key24": "2YBHKJqwGaRUmmWvDSBbYs9K64KTHdsnMw8xNVJy5gST8JKh236wj5Ym966GTYt6F9dZogPEwDXEgykuXKAGdk8g",
  "key25": "42LGaS9ZFwCYNp272sRVDmfK8QVVD23TbWpKTDRHChSRU8qoPHmR59WczQJ3wFNiEqAawESE8tmSZimAieYcawbo",
  "key26": "57mrW5vqxq42x9NUcNxQnt4os8yFVf3vGsPBNWaCmXp9Ra4ve5tAcjuFP67G1aJQ7cVv89ETq6embXxLAaQCofQa",
  "key27": "64UHgpZ1ZtXHQLZCqaLqUoHHFX3mvST1bVoGEkrEv8rFEPjtg4pad7d8wi3aLMLwC6QTCGW5rti9Vu8SsVmZ1Lrj",
  "key28": "3A3Fs6DyYH3NJP2UDunZnJQ3ksaYquWzduA1Tf2Ya55J7s41yUnoLgnbGtbYMJxypvoEG1xA3jS6qMCisWeEeU1s",
  "key29": "v5v3RCnbzeLAP5UAu8dj9PKXak6ie9VWjpeK4iCWqDtGFK8YGB9Toz8G8RvTSJvtXhY6gcn6vGXioHgj9EYNMHa",
  "key30": "3GDyiVFYdLiSA4TxXziuaFzrTQmwZqXE2vD2NLoQq2jJ8XzZb3snLFaYL8Vk8huv3ypwVG9E1iSkDgSjGfpzqQWC"
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

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
    "5gdNB89WabhDJcgnyD6wCzKhm3aoLBy2ErX3t7pbAwfY3BXRMm2D4b8eGcujbKaeMpswnmQ98t7vZcEwMTY36vnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WE7JYcyiaRuYDSgGRTGQCBqC7Vs8scN1McVrW4Cjm7u79CBn3NoxvwmVsPjmyBRYqeNbz9Z8BrdqYHtsghNCQdS",
  "key1": "3YKgdPwsTkArsubHuqWCP1C24en8gmvEfGDZbRhmvig6ySZpiChdzC2pj5kDWYLNzkmtaAfntPwji27qAPExUDQU",
  "key2": "2kk7gtEARghj3Gqo39KEw9uj65gtBFEgxDvLAjs6WHzRmFVDfpDE1gtLBxpMooxwJZ8xHuivVUeTzRmdvUTc9Ytz",
  "key3": "4Vmshtyn5wVuFf3R9K367kxHuYX354B3KBSoHVkR2idV9hhbyvxdwYsaSNtdxTspKGgxsLC1UUKLrcQ54rgTDBBz",
  "key4": "3UF8U5UTDeGMz3uwvEoNSrzSDLm6oixRMh2gA2rctEyCk1UZocc1JHRbbKNmgVfYii72tzxsjcaHRtmXm6495frk",
  "key5": "3XtFdhHxebFVUKp7zLKQ2btR53H4i2chDqbktcTL18muqB1tRc2Bi4JauFmTzov3JQDM77R6gFr933a7RRpkz9WE",
  "key6": "3djfjRxUfpa1L2wHbPqPYA1xF5YUYsDu45bfCE5DnoWWGoqAMHJNXXzympwNFLMhwrKuM37to5AzvTR94ztFdXc2",
  "key7": "59tL7AxyhpNWghteg77Kr3D47aGnMQ2WyV4YcbbLnHDVTjc1KS4odoorPBwpSQ1LDzmi8cJbrdhcENs2focSNtt8",
  "key8": "5fbqbk32YjdonrP9quPZ2QvpRjqbeyKRn3EzZ2FErEAzAtsyLkrvFgrMoqqjKDyUUeAosJHnm1toHXsiPU54j6Ua",
  "key9": "eXEhcW11pRdyGniG3kr8DZSoWrxgv9bK28S4ozoBdGsPu4zPqERC16F258JtE6Z3dWiHJY7zJh9KPGMfnajuX3w",
  "key10": "4r2DjF5dPDtfpJqGahx46vyhkTuJQ2DtNSFsPcZsZDoMBV1BcbH15JqxWCuWh8PbkDRdStZcZgnMghg3kdmFMVBb",
  "key11": "3FzD3SLPzx5AfFmn8qBBqNCsMtjzhMuQYH6t6xf1JWUs8e7nBGmWTsqGrASPWbiUhnFQ1s8pwFN26HPZkKxdVpBK",
  "key12": "3BwQRRRqUe68nKSJ4atptK2CNWrFBX4KMowVZrNrKufVrctADqdaKFLVdkz7eVxFJYqiRtiGiGEtbPYETSiV7G43",
  "key13": "5djxPiiLgXu1jBz55USwfbJhuybfcmd4EKEPsBrp33AarGgV68nDusreRTt6GwnZTSvp1e71yPBTHFYBRQHJkUA4",
  "key14": "2uFzU2v46kb3g4qFFouULoePc8mrYRVEQLrnJhhcwsryJNcmbvFZgJ44rUFmLCrB8XqtXWiALCHmmF8DafBtZsDh",
  "key15": "5Kf7amCxqMhtYdin5JcJs5HegziwQVoQiTe2aPxMmm9E1ovCsfYG59rz7uAYD82kfNnytweMaV6fV73VZ3TEc84v",
  "key16": "3PoWLtuUV3tsUT8ajB5tWYD25Jwz73mnk6cN47VJFFX9v9JexsNQ55mL8eLXg3ZDzP37r9xjiCtAc4DkgeqBRKBV",
  "key17": "2cAfeFFZ4iFVHSDz85MhoQuhSEy9rAZQjCGkrRt6vYFqVrMRK5Wqs9DCdpF1Wxzap62nBZppyUQ1qhx5q6HSQ8au",
  "key18": "4Gth3a1mxGyPfnxXX8zUBxy5L6M5gZ7rRw2icSfDuMe7ejqqeiWebLQZ7pn57h34GaCeuiqPm9Sd3jrt1a27kd2q",
  "key19": "3qxXr6qj33pwLJF2bGpwcN4xynizHfibyQQ7UFJjXsHfbFKvrMpaV2UUNhq7hgMQqhquZQCJYXuFqTStP3aGT7Dd",
  "key20": "4nZFwNf8j1XnpB3GYHCx8csGw9tnJqUp8ZHXcUE3jE8sD2cnz7r6AUweAngD4qjNTU12SvYwwWtG9hUaHJf1EbFb",
  "key21": "26mnayXvBqtcorFsuQ8jVuhsa4P8xjnHuUMmRKxw13XbPxEUa7iwnA4qHP7Vr89o7ycvH9xfup6ymho1xLK3RQUV",
  "key22": "Q4CmJaX7hQPpgpnYTiova3tHcnFqNHyw1omE4YGuaM2XcPwR9C5LD4TMXaWUhmUHNMxn8E2ho6kKWXcBbYthkoJ",
  "key23": "24V7x7ZFyRZ93K5g7EQLHKX4tmrqF8voEUTW7XenYAwSdTVRGXxfuyVfKzaofDxK7syzxuw27gkpYpDV6RWKdxf5",
  "key24": "4Yhrem3xxMRCN5AMFbsir7AdNcA86ocDDb9JhW8cLhPugoe3U8byzq6ia44umt9VdXS4X5gNf9rDbuuojvph6XET",
  "key25": "5mknPtJ9MGi19rayPmLkudH6B94YRpWjBqYQmapSfWywksHZ3xuKacRQWDPyH629jNhXUpmWnHbsKPTgynVBkU5q",
  "key26": "2z42eZy3LkfP6E4zekoo3iamUURsaXoBkcXjqXL42Rh6UbeXM4fYWAB1ehojAiMtVfpNVaiCHB3CDyEjn7xVD8TC",
  "key27": "2pj7WdQjuEyfpfLJawR5oxjn4TCAp1qF9Yqw9kFYAFNwLHQM5TveLJJsiFEKxtpGS6mjc1vUgZ2wXdeTGgMwhBtW",
  "key28": "N946zSYYf1L9ZXk9vLeYF3ubK5m4a2EHTdkxEGdkrMBPQZPCs3jpphw8Cdv3SmSUTsZawxc1XMYvSD2sV4znsng",
  "key29": "5VK6XqjeEL3eBVhZpkmMsZA8D32c1teUtGb3ZoDgcZmvmjyRWy9PHb58NMSvimXZNiumkc9opHGPNRRT9eFBiPDH",
  "key30": "2AUgWfUXhMyH5rzeYAeM7U6VEgk7vR94zzCtee8RSC5iXmjHFmrUxDDJez4wZcQDaicmdY2M4TZCk1Z4wBKMH8hX",
  "key31": "5RUArjBnkyxCGzXLuQNNTpGDonPQ9cgv6NXmx7JEyXjcsTk17GDmgpJRzGeTbEVABMEBMb4U46fiSUkvNBMZQszx",
  "key32": "54MSsmF6FoZp16P8F2JNdETa55ayXDx2GTSkF9arPQ3tag8f2Tz2C1MaFHug8LsN5ZoMnmPVMZLJo7fjogWbxHpg",
  "key33": "4gc6unMSY4dnn93BZyAbgsyAA71QaUQUhp2Lo5bnRQhudStNDM1Y3zPijwsDvFCjqd5N6evyH1UGfnUmVyBJ7MBU",
  "key34": "3QPTuYNh8X2Viv3Hgv8RDdFsbDUjao6AXpCYM4eRYjc5E6Nxtda72hYi5Fhfs8jKqmdperHxERR5LjzqErEQ5Wxy",
  "key35": "4gnRf4ZP4fYB4E3Rg5rtkNBTezsGjoeYe5Ru3Uc2ZFzfJWEz57KLq5QbkpfJujbs5uurD1NgeqiVirzjUkVXviwM",
  "key36": "5uHbVVXCce2n2wf9oRE4JX2j2iTKXhkpmsymZEqwpZ5qyN3S94M9zwS7F2sjp6gfVuRasrRp5RRagYiiAvYtuAB4",
  "key37": "63tQkuV6kMn8jjGRnHGFfM1KRErLv981wLe29j5mnzCQXrvQCHjn3UpEAMqanuDfidiWnLQSZNXzfWDDu5Y3vw84",
  "key38": "P3pphcNpu2Z1v4TovPQLegH2L3gTG8DfyNeUj4x5g9uzXXFQx1js9DhLBb2pgWNu7xfnPsmEkLTkMQqyRgEe2BZ",
  "key39": "d7JF2m2pe2rHvAk6QjSERxx43Q65E2PoLMwXjmizNQWhhiFvCcz4b8CXW5ERJWZdrMuACor4JLwZXddmvu1K4u5",
  "key40": "f2TMqVCyVrh8XVpe2ovC64yKEfePYTBJKzdFnh6tLwQhUXSqHpudRUoXnZz3RyvoU9genyWB8quWYyvWVHejK4e",
  "key41": "5hti3yEWDtbxJqhk8txQdCHQQmZtadFYBYD8pND3ULp6VEoTBJY5RCxLZnYR71a9R6Uv3sLKbgwoEeQpHXJK17wq",
  "key42": "GoeGA6fcbLPs8nc8iwCSz3VR8frWyi34Gp1dGnQpm5Hx83g6xed2Uudd3M2Ja76nyjTN1TyPE7Jjfq6as4EgTxo",
  "key43": "3d8QJX7nN8PtaDD4a5FAbNYjcve2YkXuuXGhbDaR1KkRJJemYuCmr2B3V4u3VcDb6VJRbUkS6zABQnx8gMkbcQw2",
  "key44": "5irXY2gAXJ4o3BQbgGnQPN48ono1i7xRyokXZLwPya2G9GnPML6swaKEuAh8qB5feawQ3bUtX347fe1fCoGU7YQr",
  "key45": "492TmUSvo4qkTztpgnGKFdpzpdwX7LsefPhmXKVksDiN9sLCb1AMvqSrhWaNUwwwuVrH9MhrufLi45SiQ649qHsL",
  "key46": "VBWp4yTEp8HUW81Yn6hEn921XSqxMrUsP4PfmLzS4yGerdc8eNDeKN9fqJGXLa9bnzoraDHbjqyQFDxw7zcTjBL",
  "key47": "46FgLctu13rYMtDUGSgvWfpfFFLyH9kqsANgSgMZ7rYBSU4VX31EkbrX4YLUD4cMDKNzwAV3dcpxWtGApEk9AQ18"
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

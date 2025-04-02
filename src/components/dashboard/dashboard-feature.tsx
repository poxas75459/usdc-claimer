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
    "pBwgEDXLS9mYbEg5ZpkXQ31er3A3mjn3J9Wb9zY58N8cimUWrMQfMPJb5zzF11aLh9Lg7nCsTtuiDmWCFYwEhXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G3vgzyocTBBmcatKhSWvtVQXJvxCkfRcFVJtSyCwTBXTzrvYf355SkRqDv6CkcPoEKUeZdEFpYN8XrDzyiEr88s",
  "key1": "kfuz8DayLzaGg9u35kSGf84Y3E8sNsATHUfvyj5zXk55WNUVHXzcXy5V6EaTjRhXATbtct6oPtgpdMkLhboxkEz",
  "key2": "RbMM4V1KxLP3Y2n2RfR6n3jeewZLfNd5bEZtHZ8tEmFK4nSf3nkhWuyGZ9jKZPSVFqNbq28y3y5cSf2qRAmurBB",
  "key3": "GKwd2CcMh3jiWFipbmy3AK7thGF8qQ3cKZhkvaWwFqJGWfybZKbXpXzNUeMpgqpwqAzmLSR95MB6dpJUVuLPVGB",
  "key4": "2Drv3eJh7EHLXv4RRbbhLAyBHWA7ob9niVQRSTr8cZjWzXWu3zZi1qWXwLMyAuXFqPUcwDuUzC214mL5y1cP9xYo",
  "key5": "kEvapADvwStphpNPCSR8J67LnkcrpYuA6kS7SqYzET72WvgthM7M5oDU98a1KbPNfZ3nNMEjAXXVAKKKtTwgMD7",
  "key6": "2Mu8dRHhi8fQZz2zY8arTBhbpEgCkqmz4uRYDg8DpWmRLkKjbYze33hEWuopGexW4W9tvxn1MChsFPPsgewEqkGn",
  "key7": "26iWJLijtcdyui2rn16gZ3BXzcisxGoUtewvsuWZAoqQk6PKCrAp84TrHW1ZokAnHaihs4txJmHhH99shYbL664w",
  "key8": "2Ljj1kqgSAH4uYqKznnPFXB1koa9WK6ofwp8vETPaKvr1iPxhRK3tjED4cTzazRPGNEzLcQR1Biqvj39AwvvcqZU",
  "key9": "4PbyvM7ceJ4egDnaFffW487SxUyUsN7grq3PNkDNpTUXwP5LYBj1zccC7KhAmbWwuoryNWr4ey9t17eTc6HqYsWi",
  "key10": "4Hh6ynJ4Mqg7tEq8kVLMhMaKoSes8oc9YthT3wt4FKCfQwREPJooA4bUgFKauH9azBuAU4rjiwFZQ2Vk9DznbxSZ",
  "key11": "5pvvEc1YyEZuX8gQepdHV2NqUetUgisk6nMWsNZ953AnGZLXaaeBFSeSBSCr3DdUrK2X7LbHVV2jAjY7YZZb5t6x",
  "key12": "vAB3TscXLaAdTXBHvDStzC1Hnd8zuVkbFz1MyPKmetveDqubw4nwEbNBKCnHig5b6PsmjZ7j2Agunpx4KUjC8SL",
  "key13": "3UGpUrMQrmhbPX1dTXAd7xEf47FH4tnV12yzi2zrHtNXb2QBj4vLaBrASqZnT2CCWSVihEkffotq5c3pq37s5QEQ",
  "key14": "2M65o1kHSh9XPsJf8GCMXSNBKsNkct89M4v7VLo5nwGSTJeYCkCJNbjAF3a2jxNUerjmmwutqQv2gv7jfyQLJWkQ",
  "key15": "5ejhPiy6wzTyExyHqousM2PMDMtd9bzgED3Ppmz5MUZBd4JuHYKydfksa4c3SK9e8rDsumJVeatYBRj6nTJDdEgP",
  "key16": "VEPpFPm7DhsmUjjaoUpp5UgZE7Si4Vu3g7U9AgLbTqMwxyamLQo7AidiJvimSd7CGDH2hWXS72jmaYbuXK2X97U",
  "key17": "5JtKSSi4Z3uJGyRtHwkKvR7C3vd7xuk3db8CqZK3jMkKfjNzCQFyq1GRMoXD4xb1Uvik15vz7916x9SPxCG6MDTo",
  "key18": "9zCcU572HFNnoQQYLzMgncXSVSyonP4kSXQV2CpSGwFE9UkmSawcS7GFnwrjhmiNjhiaMBrWbMP1ugrNvszWqpj",
  "key19": "4aXGso9fGYbGkKgQs3r6R9EtN95GiKBBwr8ia3igoTWn4nCE6QEcsXe6T4mHtoF7NoAattMrQ9HUATofuyMjSYnc",
  "key20": "3EC1hfrt2oQDMGQYarZw2fRSTH3AspGXRyq5wiPwtiAzBkcnzRPagbtG13kPYMjoHCwMTnB8foYs7SD7bbvnEgEj",
  "key21": "41UXDFmnnwMk11nMd2XxwQAESQo1ESirQqTahjKgjr3Te24eKBqSkTJBqobS5d9izbzcN1AY7RGb7yVw36LD999Z",
  "key22": "hmKG3cv2enxfA8MtpPG2jpeP5RB88qDxay3U2U9jBQtPmJbGvcjvkBWsEzJhDJReudMeox8cokAtkyNMPZE6hux",
  "key23": "2hFqqzcLG26kdqh1b52YiSpbaQs995U38My2btTcUqGnqswqWcr4QsDe2dosZZxe82GpuRy6ZajyvtyX6u2nvgtt",
  "key24": "2zm3W28iYEWpSf24VVr8nfjFeEB2DKwwiDHzvYM3bgPF9iaSm2GN57ZG8Bp9ECmo9srDi6dqD98aYQyHdRtamKDy",
  "key25": "2UWJMfg2ZWcp4BMtasiftfv5BbAbRfSHrHVuDvXV93c7ZoxbvXo5QXYDQpkQ7bHLFWoFz7JpnqB3TFWrFtXMdX3U",
  "key26": "4MkbQRq7UnExnhnGKhbEePHyYLULm8rNNYzCbSXWWo5cfL9SDFHnTz4Ryur8rFRgGPbf1DBjpkvX3vjXtDDtsqi1",
  "key27": "5S1P1v28X1TDBijS6MFBa9kKkdikqBPxz1nX29CoeF5hQnGuy2hPhBrAWgRX6oh3MPmLRCS3tXmVhpRCHcdxkfCK",
  "key28": "42tkhLC9drQie8kUpeEy1paMPpaeXJvx6vzQQoNT4xVA3Tn3dR4dkGZ2tAsLG5ZmqnEZbLiGmgCyNKAM6QcRdA4e",
  "key29": "VNhPu2a6J9Qvj8BcZsQ4AVmEpZZpqtNwa6j9WfgkZ4X7aabvaQBtp4LG5JFUzvf1c38bjeezJj12zrMToENtVhC",
  "key30": "2YhRqdCLKefoXKz4xkQfyr4dZmcBQpb4JvxhNdL2WUAvybYrfSTR1qDv6W9EL69hkvnoHz5HrzWNpsaVAhQtMCm",
  "key31": "C2pBkwy6xA4wko7RFYpD2Awn7gBxLkWADawHoSHgNixAqa2YkxzQGMPricRtKmVu8zuPs3xanahUm9cgGiFtd8A",
  "key32": "5AP2NVyoRqwL9WEAC1WAyzKgXn3TZ4xwWxLK7DpxJAPexbz4YXxqfFUtdk5cJGRbhCiLqJDqceoVbePHgqFPKaw9",
  "key33": "62wT7EwnC7KfS3fiJqittw6wcgjQJpKHV18iEh1odmyTYNApWmiX1Ab44HXFs5A1u28uq4uwZoUT4RyApy96hAXe",
  "key34": "5wBfstdJVPNe8hHjZVuiB2Xx6MYk2jeoYx7soDkqLnsSVuRx5dapxzKg2LQciy7rdX72n9zFQtKLDGX7sfzKa9CK",
  "key35": "2VDbX7af1ucvMBZ3tsTB9ZBur5BazFWSjpK3etQEq9XmKLAa99KNG6v8kYB2Psj5vDXCu4iUfheEHdtUELMMCNsp",
  "key36": "4iYrTU7AHUbaNMJtP3uuiJchXdGWD3LsJwDUqSK1QeJoYCbxhAqKTvFHZcnrgEgBwTTes4E48pwm5KKZKTbXLxCp",
  "key37": "4NkLcEPaU3nKc4j9BsRzxhLGs9yMBMHXHE8daXBbsm3WG3orU37Bf6ACbSSKpHddPBR6n3GdN8ii2MQQp5R5Jpfc",
  "key38": "UiZnMbERJ8sssdpLMoU8KUUkAz7FgRQHJftE8Yt15PpYpfNMA4nyuEFnJnyVd6BvGTYguft3dCRuaN14LzXeizo",
  "key39": "2ArxfgPp9eRDYPQovssFJJiv66v2gLRmWN4pS4osJe6pvMn51FBatTmBzpPMuEi5Pdvo66Hi3eDqCwt9AGL5c7BZ",
  "key40": "2fDWzbQuD32crpfRhPg5gYWxPM1RCwM2Y9cbtPXAp4mUoQCujqCERd1bsDKqecxau6G62aE5SSFRbjKPqTqgiApC"
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

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
    "3RdgGX5rVokJqD19QBu2JsFmChR3GM1AzqgLsHprUKUvpsPJzYDzX4pcyYwdf7JF97giVchQFmaQCRvdG5uo8xPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53zviMBMNskg1CTRhRJa6aeGiRCAQytfpm5HHL7746cfnJp87tEoQq3g1NSqHr4MrRhANdHg2fDxVZ2fY3QJWRhE",
  "key1": "GTgPdhCpotycJ1RD3MX9caNzkvJdjtGBLgnsH2sVrCgtMSyVoVywNjii8A1TREeLSV2W1f7SXStAfcch59y6rnw",
  "key2": "2shjz2eEfYZpegek2ADTB9JSuErdYMFYgUwB1KdGaprTgGNgWQDRv1cnpvPur4U5LpdrbGpew9ardd3gqKLiWUga",
  "key3": "5ivRU1ojGGFxMn41gJvcYnbkAeSFL4WWsu7hnMxfWhhJJMgyPDsCTEsXDht5TUHAs6oQkKeg2T3YH7EhAJUyr877",
  "key4": "1EnQMRLiqwCRBuRASSdpka2LVcbhDjWdYhNvfBbNQMFc71h2pnfArjX6tarpMcuez2c78KPpmNzzXHwmKsF39DN",
  "key5": "4jbmdHHYfEH1gshUdJg4jBcdNffoptMdsGp264jELAQfury7biPddVtzuTpxgAW42Ze6u5MDC8W2xWh8hTNeKmxp",
  "key6": "3QidgzXFU7ERx94N8rnRsycuBgG8Xec43oeDgwvpMM2hMP7jafJ18L19amafQWhdbcL7K2VePcjqip9WHzzLZUc8",
  "key7": "4UbLoAHnhHxDKyHqQGp6RYdCEy2srikWziY9frd8dw2eRdXJfxGk4zL2N2h6o3RtKcE8DJx2nM8aZwB56zCLEtuX",
  "key8": "3gTUmPaFw85Q4oLrAPF3XSmqJ9tGx2cLDJbhfGV9ihn1U4ZMkAVudd32ToWg4RU1dri1ARL8ZLEuw4k5VzUeELH9",
  "key9": "5oZzzDXN1uvsbdUvbi6KCE6k5Yv1iZTeiuA5zv4QHjprVkcoVF7Pqaat4MjrzgCJi16fhvRvncxLBMenYbdKEtT6",
  "key10": "2jdzzGFCz8fmEZSrp9QZToGyPy2eRJAWSmVdGMEvPcnmpH1YLP4xDzgNUuA8Amq72rugVRZXMbtbCCRvAvboBYLP",
  "key11": "5BjpNdHGpRFcHZB61zwzsa27sXS3JhtJyWDkT5xGHguxdpMVUbvnfQifKYqYqetmU2vdXCUgTcTrdiHNGP6swE1S",
  "key12": "4oghG9t3ZNV2m3ga4Gt7wkfVhNmJfz1W8xvQwumWeJAD7tYWZ461T8ZRinSSh1Wb7XcxvY4AXQRbgV6W6a67YUou",
  "key13": "7ZZ7shbbB4FVz67Rr3DhS4hgUVN7HdzEU5kXQT2LZVToa4yyYXgUERVzx4NacXKwi2yYnkPXoqKsjMEPtfM4YmU",
  "key14": "6535WYeRBinJCds1Lcsd2NuGgQFwzh3Erwkb9g6SVGnJLWmFHG9mwWYnmcENZe8dRzaTvY7sZKtTMBCqv2DBEwci",
  "key15": "3GXm5jgPX4g9HNUCf5TTQgRxUeSJB4fWsW8rz4cb5ZPEZ9SWJfHToPpc2LNrcVmzmhi5L7dXYmx83eVdZQLG3Tqi",
  "key16": "66rG9SabqbooWXyQiC14trfygcRUt2WAobECx5dPiG9h8dtVAVJacpZpzoHZv52Jdv97QsJrJQrXJVA6QuU4kBR1",
  "key17": "4fzYCuua2d5WBNsYxr2PTH7JdVPXJk6LTpTiLXvqcMDWJTmmVHG6FR8ihzHgoLGaSPEMsUccXf28dZgRqH8TKbmJ",
  "key18": "41yJpYtPcQGQMWe4t16c7A9FPRiqYMphtnbA3eZXHjPpanREXjsVkdXzKgCCoBfdTvwppW28uJfkEknSm3qepWLJ",
  "key19": "4jZys6cn4LroKjJX6J7y4pqqtbgRF3cYQUBK19ipEZ5PnovEYhKCz26dacRU5mwAWH4PYEitLiQ9fTZAWZ5nc7L1",
  "key20": "4FyydoVcpwWCLpTdTMXpHWiQmJZUkV5waiXJQZXvyEm9uR1ZAjoLXTjmdgxaVn2aMTnMU5JqjbakcdPFcWVKhVJy",
  "key21": "46xHuUg63cgrpjPr9V4Sw27A9hfhs8je52TMigJA2LUdpSP6JkGmjGMP4ihvTdPNbnpeaoggYhHxYgH5cMSoRD4z",
  "key22": "4psBMCjKBxQe6AEmziyZaFBzbuPxops7oobxfACyrtBzU1jb2rRft817ZHXQTgAwRMUC86gTCTqH6uNBiFo3aude",
  "key23": "3avBajf667PHqE3fk4QWKhiBYdyS6631Ss11qJfGfZVK96M6EWKpNCPhWRn5KTBhZPvieJ8SKrs2tYpgYyseG8fM",
  "key24": "4E5tzQm21sJ9gPvJnkecDaVVdW3QrLLmLAECVA7Sn8AYawNuRExCuE25moNZVd9JPNEVSvNPGi5k9XckzVAyuavA",
  "key25": "3DmBKLa9xYmsoAJbx5b3N4VfQEUwL82iio92cpiMCTCmJXfc45dSCcSLz8DhLQRbhVVjTtwDmYg3UyA2HyxEJeuP",
  "key26": "HigXuwjK4nz4EzFCxse61UaARUdJKtsiLptrfSRmFCKv9dk7jofnBQYBRQhspPtMP7aJPNaXSYKQPNGKW2EWPvK",
  "key27": "2ZZzBxLgdz32xDZNqj4WkTqCE7AZnzajs6QfYVA7xDvZAzvbuLaswoZEAYY8ifZyD96pASzT2fDwb7oYTQ4BtoqM",
  "key28": "4Z63hc4ViEMwJHLiNWD6pEc6dv8Zf6PL3Yhbpn1xbwGdu8Ldgzvtv6xZKCTjMCUkNWYpJBYbKZ5iBGzeAGyoaVGZ",
  "key29": "4Q86kXXm9rRzAvbNRkBFNZFvejpPaJfrgreH36YVTZrrzE9prix54PMAUXFiWviH5EWZqrGMnM3JC3UD9tNurM53",
  "key30": "3n5Z742iyhJJLhrFq3awMVzChXsWZpEb4cZ2X6LLpTax2wvgigMmWqYA6Ygd4bnYYxDcKzMcCrhk73MsizxQ8woM",
  "key31": "5z6GcTnJoQyhgdzwYvZZTuHqXtLNJnLP3p3AtBukp1iGXb6e2qDhgWb98Usu7KYRdueTuEJoq3CQxgvZSdWnmgSN",
  "key32": "67HiiB7XhPMN8YYyRQCKXm2SAq41m7iTp1NcWmnhuJjjcKg3zjCAtSeNwesvtXsVCWwB6m8WfUf46RtKKuc5Nop2",
  "key33": "xCJFkSeZQq3MmZqfXREyDjrfLXebGZdUkKBUPy86MAm4KmsBpDXpzJdVgqtn6zVM9VcrjAQh2ShcgBh4dYiDQ6b",
  "key34": "4uxFF79jjBAbqB3RfhB1e8bM1eNEoGSY8mAzoc6GCZzh4ewdpa2fZ7Qk7gUDyTZBoxupBuQTSo9Kw1VEpLR1Gaa9",
  "key35": "3giM9hHGCvv3hMbzTyfPZtKn2QMLYnLA6TouL4UgS1xSGKmEKe3JvtbqEpwn28QNcGijbMcE9ojcNCfKRKACcP9g"
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

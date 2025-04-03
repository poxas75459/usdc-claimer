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
    "5eUyXzwGexnPgw2sYU67a8ycPKAugpCrJdCVwKajqvAx1Xz16EFXhakqnkvJmrKSed6oEFKRKRUErVExg6L2iUns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CqTFwUKnLgbZ5jfSkHN9v3uM8NzaYxxTRsvs9K2aZ8JvgDQTP2tNzMz2u3rNky1kBZZoVKKwZDMHbWGc4r8QSzU",
  "key1": "5CXfKrYLt24q3M71A4XZpnw8Z6U3erYHjif77cULzXKQiCZHUj4Ytfx4k2ipLPmnNNAL4WFB2mmDMhfWL1zEErsg",
  "key2": "4qCoTH3hbWbAYRN1GjTDC1b2K7jET1eAnghAiGWaN9tav2sqHgnnTp8vMY6k2W3cVsiQdAVAumFnz4DE1bTUoqCB",
  "key3": "HvxBw5sz758FffBpkQWZnKdpi6X1dZJXw9TPmKiagfU7yYgk7VFNHMNH1csRcnUtqpN4KBsuUYtDuaRxjAAmMJF",
  "key4": "3wRVTeqQu4EX4TjSCsETS486WRRDXUWAEvx5i1kXqpHvqkF3mrFa1AH4jkgaKFFeRySGmKm5TLGQR6kQL2aZgsjN",
  "key5": "2FrZxmxqwpNFCip2SR5re5vjexUcNid8c1fiAe1aQh6UTNjyyXvoHqEaHDxCfxr6a1mCjKPTTs7cFQkEVJtFuqrj",
  "key6": "26WETBCC3psqT6SPMDewYLMdVTymmUEKoEe5cvuhCdbXfyuebfEttmRZqobs7P3VzTkT11EYcBJ6bCS1eWUvAArc",
  "key7": "rwzkjmcitH1oiGb1LEe8KYeVHm9uNJV3Esre7APc4atMJbpCCvBKcWgkcQCwvXmYXa5hZbHEGH3mYMKjuxPVsf4",
  "key8": "3MUSt4BgWz2xZkPzPjQMMe4uToFWeSqoWhSE6h17vk3pWJHvvAigb58KYVtABNi2pUYFUSwTNuXsAvwFFktLawWi",
  "key9": "3fXzCVeaidTBd6aZCfAhadNmRuG7KTbb4w33r5RManhbWWREqaexz6JsmtnwPrVsK8i5rzmwZfmzLm4muWPcMxfn",
  "key10": "35D74Gbf1wSu4r1bxnALd6jo8HgED2EytYJeRTZPeW2svyy4VGVKCpnQj9CNfsqkZdBTUjWfxLa9jtjvMhNHnjhL",
  "key11": "63e2UMXT8kzcgFAPw2AWYqnzFjTAMMHkc3zdYDqLjXX5esqwDTw6qtvV3rYx19vQTdnTyJ9ERjcVjqPfEwpbmZFn",
  "key12": "66uhgk4EvH4feth8srFsbRyz9qRdzsnxSbMpsvw5ZY6fBLcPTUTGNEhtkBHfwb58rXw5hj4bDSeQJNbo4Tm9KJkT",
  "key13": "4EAWuK4KLvAotZC96qa18BriZwXEsgNohdo4vS7o7HjjCib25UCupcMdRvfDdX5daUdemmLFp5DdVRzMEBqZMNH1",
  "key14": "33R2MbTzrNGurLsaYDpGxNG6g4FwttQHrGcjCLTqPb3Zombo272iCrK68SApB2XDxCabUJLttgVATrBaN8NkfnwV",
  "key15": "2t8cjWskFzNShMjrFgd4u8rG78R2HudQKwC2ioCBZr4HCQfTWurjLWrgS1nLqguUSsw4M8v8TjsiDoGBZ3RoUNjb",
  "key16": "2KStLugKyk9sHDd5AgCi8gcRfWK3NeHnt2KTzCCMgBSqNis18WbcFf1bFGZL5BQBiqNkqBRsXwQy7boPnZ9xx2dx",
  "key17": "2azDJPxGHnEHndJqkgZ9n6UvcYKovdtWb28SzPLYkSGGwhNrNE5BG4oc1HUfkNPoRjqL6Rg587T2sYcdxzKA1dHQ",
  "key18": "sjwQacN4R5jcCk6XgHkDrzW91235YH8QmdfeHX3qzJTZ1v6eQLdATgT5RSCp72VMorkbf9ykTccNWabMPNDRiXA",
  "key19": "41WPPbCZBhor4kkF2Qg3nGfu4RqQDd8LeSqQsrosC7Lssk9Pbna1yLx7y2FERBwbsvK3LLNzF53UqtH8u2hm1avh",
  "key20": "3EKAqJNgC8VGLLgurCJ7cPDRngpAexUyjHjK4cepnVkWvT3pwwYn6MhhuBa7Rdj6ZVMejufXopqiqmUEb5Gfo1Yp",
  "key21": "44bpZRatSfJ4Hi1878Ln5RJYmNG19ETXE4YKdtfSC1tKzodncqXYFATisw3uUxqL48WMwGtdv1uWoqSLjQWh9awm",
  "key22": "4Ase11X8UQWW2ES9zm3Qpcw5Twa6ewEzqKXXw79faESR6FGhZwQ6i3dmZ7uxZCBd6E2J7oFXPe6a55qmZvuYBjN6",
  "key23": "34u8nFrpekfJ7KS4rMaB5igixVnT27MDDVLP5vZx9BMBaff39VCNX79nHMy7rt3bSgVeuqkFLcEtStVP3gJCPYEX",
  "key24": "2VDPNesjYATFTdXTJDSJdd4Jz9mVYMc3pnkKsKhRBDcWYnNMi2AU8Ky7kzKStknFBMaHHKeLJxdZ6aaGQJzUhnFF",
  "key25": "4EzQLtvswNfsLRxUuTtFFNYugsSLEgpTMBicnzoVBdPe415FhS3o5QLizZzzeTcYfrtE7XkQtK8Tuk7o6jP6YZ6D",
  "key26": "pJFxT3oFzHrQqWoqdfQN9C5Dh2Mjkhx9xJsvWwH9Wuk1Qfqus3pQqM1CMFqeH4VanhqmSCMcCJ2HPfQ2zVjQRJj",
  "key27": "4Mmtmoh47att5TryevcMoWSnBEwPBrXPLMZhJ5L52nycMGnKq5FHxMHUk6VZHcVbUYzMsZLsRNLcJWBoM4MGCvH1",
  "key28": "51A5eQymrP7LCffrGXdsw3tfqWVv9Cr7rHqrXtn5ZTnirbwhxmVumbCq7GC5bWpdVtn31RW1M64izEHkvBG8ge9b",
  "key29": "474Qg3afpSBgNjVhHii4HBL8nJxTm3LJg8MpxYWeaQ1x3Ws3VXrJUqFyj7PmVy1Vk9rzJvLgDG4y29q6Ergc4q7G",
  "key30": "4PcqAagkn3EHRJJPiUwMXVaNQDnxVE7KtgsgKfAnXzLzH4b9oshXN3GnFnt8ryohMWFsoWoTe453sDqQC6Bq4i5n",
  "key31": "5Hn19wUxbjJEhG5AatAnjEzErCdGAXeidUywyhWRF2AM7p5ChvBZVHLsNV6FLb2Y689yyn3161pQcbnZRFRZHD6r",
  "key32": "LZ7iV66kvCTnveYfs2G21WntmdZrp2E84Hqsmpcmp1gaP4iG6o4Js8fLTGnYFYAzAzDo3SxzN6nyn66aFDBPL6x"
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

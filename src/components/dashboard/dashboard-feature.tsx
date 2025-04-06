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
    "2TjdpCHT7y16keC7QWnRYUgbsuKFrtDW2YEVJLgbKXsX3D3trWvbCNS51Az3Tj46R1r1Tdsux8keofH8qZ11tDrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYxPrszSecRFJLX8h8SrF6pHbe1a86owi2kVC9aUPe8ewfp3DfTZrW776vTs4YaR53rWhPuMcX7ykaekFN4K1ZG",
  "key1": "271BoEx2wEucSoESz6z6oVoNXHEYPabbUvaVZqgauyttYFbjEFRbRVQe3FDPAFwNChS14Pj27GfkW2i5eqTRDKAS",
  "key2": "eMbgRH94JNRot2uQ7MqiDx9UCZ7i6gJZ47fUtFGNzPy6DArDN5JEM6nyVbvjopSHBc4NA3mz3jSQ595RkA63Guj",
  "key3": "4Gsrt8qJyrWFw6V39WTaCeidiHDvXQZt1fvfpN6abj43FV9KLBKvBCoAwgMxqHWZ1U9BVREPbQzo8EM5e68C8EUu",
  "key4": "DudQsy5vXshJYAEFyhLsJEugc9M1R1zXgMc3za2tXbhryCRpXhgziheHKcfAye5kFEygGq6N4Vpu7H2ZV6p6NqU",
  "key5": "62PmCHg6YtX2Kg7EejmxgPSN1dPMb8t8xEXs8nZhuzD6W7B2ssanyVBdp4BFA7ViUHnq9Q6ek5LnUC4vUmvnSSPQ",
  "key6": "3r9ArRkTiD3MQMNnWtpz76rBA2A64rpKpf9XhiQZPFf4U3quBG2Qs5VtQwTtBjJvrB9avtbU2z7LEMWemzfXD49f",
  "key7": "5ezGzkiWsFpFYSFY7RbFhBa49QuhLbaw2BYZTVHqLSt4ybcuKnzgLF6JtxDDoajwwaohWeX814zTzJAAdJueVR33",
  "key8": "5EFvRH9PfEr3znmBCDvDKhqoStqd63JszwLXvWFspMUwyK7vnYMLfX2HzkUmgZMWZe2fZTRgFGAXCfgPS3ppTXap",
  "key9": "27ZLxE1mxxmrNkiTLfQJsSWCnUA9Gh9RhBs6Sz9tfBiUCPSXm4skGJJn5X4cC5j9ZVcBxfQfx644xzBrTLajL4rP",
  "key10": "5ux6SMF3fkaB9veo91p2WpuQGVd5n39mXCHqKWMvsS7obEPa4t8N4tTW8hcpbnTasywvhd2ofJ5jDLyvWSYJMPUf",
  "key11": "6krm7RdMoZh8XuvL7hzT89QE3LjuMUbaLMfeE6yKVYd33Rd4bQw6Srcqf9BsmvjzNj7yhefBiRm8yaQzseSkRve",
  "key12": "PzgDLCmSoLU4aH8pYUekvBG9VrurtTLVKngyRqiDWMz9khZPCScFDAHYCi3gYyUrPL7oCF6eWCrVxb3B3JbVdTv",
  "key13": "aAj9ppKNUiCaJruZCXZgPaLvvg9ek45KjomZcrnsQqgQ73qjLU8Xr77vi8uUP5bLkta47NYwfyXRQVD7uUfFGTS",
  "key14": "3k5gmu557d6db4sSdwg4EowRSRksAKixHmb7HZB4z8tfcRhxaryRGBtD4VnvFJqQrNAzJA5BhaqGXWUXxgMCiKAs",
  "key15": "4VnFy1DmMkYBaMMy8xRfPTXk4J86vPq6N3eQRZpVPgzpt7MzQEtG2DbpVs3WmnL6yLDWt8hgCy745QWkBwCWZ9pQ",
  "key16": "43aYVgYMCnaBhuWBWZv6TNpHJrbXmFu1wjDYh3jWCqYvGCWovyzENyC5uMNoQTGdho9G2DryDgZrkDfTNRx2Ky6A",
  "key17": "41wEDd9wTjMMZL2wRWsQdswwjoRanvePwQfPURj8GShJ7uFQRAqp2BzcqYkPWCgLXFLtiomGnx8q2BARKBV5evMD",
  "key18": "52bzmnQm5GFLcJRBNcmwwnB6TuvU7iihcSNVTnroQHTxnotgCjkZScnY2ixPcsd2iGxY8oAjbXQZDhXhbk4QXaC4",
  "key19": "532ahzfpqJ2fJJZ1pHPBgvAnpde7zswN1Ry9bjfJkaNANmfrqHhQyhW2M57eaD2yajYQeTe9Sc4RABKRvdK6LHqt",
  "key20": "2ivVg4aCZp8ZCezjzVgs1jEQ1aQVJmTsjzd9CWdHX5Lr9bEPS1A6Hydw3XePurX657sigFKc68jCZsuGYSxo5Yna",
  "key21": "2pqPD1hDNiTLmKxUbLwtf9LdgzC3xn36DERvPSz9A6czJv5dRcgD5RsnZxGHp1yxkLH4pXH45XufFp2GVqtvBrXJ",
  "key22": "5fPLNknnuMNoiUTxWXayM2k4vuNcE9dbFsy3oJkJPL1XXUPjgDroAoJ4F5wXrx8YPsmsctufF3Jz9mFyDX2AfiwE",
  "key23": "4gj1ihZTPp6QADw9XRmwBoQtEjJ3FshjZyek1QQxuZne6ihDvLSda2Nsr3Yw2bZ7c6bPQsysyTy5jGp41U4q2oZf",
  "key24": "V4SckF4jhouuEEQnPnmD8MYyompGvhVTgDs3dXeLBHV7Z8u9TNX33eMD4Cq9TR3joMTpFurUijBhvTYsZVbchP6",
  "key25": "3MwXEj6YFNPMYRdycxWWBSM37wbdhikNcMixpxdMsCbrNwved7bpWKd5XvNpCkCztg2CkXg9NYvwYhWBBsKEBDaz",
  "key26": "3iipmVGFeZkKetsnbGvk4addGqVYXCS94FBxtrnVghfdxZUC6PA5QDPfjPscVf2PLVx8CkxYQcnvaGPscNPiTkjh",
  "key27": "4f88XKKa2MuvRrWmQXY8hFTtdrpNpBi5Cdz1CQxtEPRFXXjAEBHrimZHDRFhd7bscxWrNhGXkKvFA9qfEDCLYzrW",
  "key28": "5Jv1J8w4vSrC4HBKjXDZa5BMYtUDGGtKtBq7L7pALCoKCaVeAc4DHSBdfBvk2t9KyFPzLJTsMRZkp51KjUutwK6t",
  "key29": "23SghRRpRDm93GJs8tdnSh5a4FPixpiqLQvJazzu78xWxnKo9ZgiDw4ieqbtf9fwHMbJCiGrNQzeMNrwFWtrrLbB",
  "key30": "5pa2GSAMsckBwxuS1WCM3jKDqg7dzsMPqSXo3yP89xqrLnukg9N3xRgYmEbyiAVoBH6Q8EYZ2uQCoZaoXsGR5AKz",
  "key31": "5jPXiKnzUmaBnMmYmmKc94fajNrWcJvjGZVe9WNjvmqpJuCcBcjGKVcXupgtXh661vHti9RMrVD9NV7C52XKx2dB",
  "key32": "3nAKUDedtx3RHZwbow5ToKBarjBgJ1xTcDfHrwMr2X3T3eFjpAmgjY63hAXmpi1TSw4BWAkRKPDorwKbLfywLQKS",
  "key33": "3FdKpBzf3sDpNoPFxnW41SqddC5RKNyPLWPGsFLC6MjDbYzm99oqmKaLMMiAnJqyVLbUcqfpQQWAHUMU7NMVZjVZ",
  "key34": "3fpA7Sq8XMaaUFzGUHV6VUavwhf2tFFU2ZJqEXtp6x3P5L1CrSJLqsnfz4sAVfY3Bezj6ZWrhv6UbQxCsQqMSHSS"
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

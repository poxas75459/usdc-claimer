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
    "2RUyX31y7X3Y8Y1PojC3rwxYmHSjhqhawb6zS9Zd7ow47ZD8xG6NWc2CVunT7P5GuSYPKKC87P5dyuL5pfWKYY6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32kmyECBZQpT9rTWwgdytLX2Q68exv2aa9uL49KDhjvCrDGk1voaNTZuHpEr6eUynLzbG51aywuWJvtTQyzwpSLM",
  "key1": "3qhyE2cUQ4KTaJbc3pkantfR3wK32N2zkW2u1zSnxTr5rEhgRdEH1pYAoHqiyGS1Vb7ecxhCHNdX66iiwsk8iZso",
  "key2": "4tgK2o8qxyT6tyrApAhsXBgf6iEfzkwshsQoedrqBS9KxTuyw3zAsCVk45XuYHHJJ9AnaGgRyHb7KFNN75J5228P",
  "key3": "3ooeCn1LDgLGDKh2AyRk6Ju93BiDTvMrEjsqAY6seZvfZfq6vCYrqtuQg1wK94QzbK89iDtFMoERhoeF5PgHgymA",
  "key4": "62XCwYWuHVw7JVi9LUgMarR5EHqZMnNFAqGDY5M6XLLbN6fQ6rHcAofGJgUAYYLN7JfKxBbEMdVPp1PATZsFyupm",
  "key5": "5t3RPHg2eoN5TS8F7KKCuZCkNj6BhQnSYf1EzFQd1NtGc1prRTdZRRhAy8ypCHXoDKHAmTqxjRgmzXsSudECmPQd",
  "key6": "43HkM2E8vYvQ56EKz4odzvUTUuk4v7MKNVf8D9M7QhkFmTE88wLRAmfc3JvyzStsWQka33do6snpKvkJJA3UWNs8",
  "key7": "54yejD2jRTnw1waDr8Lbv4Cosk5K6kDMiJUama8o3aqJEdK3Nsd8F4UXiHxgUffthwey2V12ARaeRNydsdW3waM6",
  "key8": "4Z2xh4m6mwHmP4dwZF6sTmePG7ChKuuHD9eNs79KvPWUpWvewN5XyWrTSvwLfAqYCjvoACKkbgJFSZheEAo5iGA5",
  "key9": "47MUziCXA5x5wibXPaGLLToH2hBXjjNfwueCR59pSAWphzK7Gx22sJqYu4WXKMbzjdTvsd7oDjDNZA47HGqL6nwG",
  "key10": "2bxzD55SMCgDki7FNyJmxFV9LNh6UYELtrPnsQ7DebKFKVuYnH6bu1Kdojt8EPL4vBZ3MpgfDSFYr9MWy2ePsDgk",
  "key11": "2yP1uU6PtzfbEDpPTStCrzNdy37rssFhgdaKdFbNZeuwvXRGj9CrC9wvB32TwD4PYQG5mmZMs5bMMLum5FSZEcQR",
  "key12": "4AmZJp5WqEPtoDW9rZiogcNk7Dt9S9ujHouyNRLENPeWofbn1SnTEtQkHG4prwpvsuagRjZPV7XMAXLkNFt2RGRp",
  "key13": "3uGWB4pDsbixNAUCvnzxVrzd2G2nPWoWEFNP7G7AcjxQMmCvUaSa5TStjRJcFp1xN2GDnGuL3cN6UbGEmRfcNrsY",
  "key14": "39AHRuHhpKh7i3hEmkbCdqRhj8JAWU6Xcc9VNosNngUq4Z8qNfnzpjuRSPyrMpFnCrxVyuyd4bNDj6QimvpBRR2R",
  "key15": "2HgbUC4gVpivxPCtx1KJWrESJkbxjRXVqYhigHQvNQwJSjAbPuabRNukZmBSr6wNGQvVJd3apUFHvYU9XsDCTxjn",
  "key16": "4pePEWF1cjyeVcZG9iwMmdDPXuzMEU6dou4vvAUjTgdxicqJvSRtDbAUWbQHAgYto3td4AsJnJV1Ni8abcbxUWDJ",
  "key17": "3f5nZwoLWCwgobgC49yHY7BsVXGDJLDj9R9DHbTAmCWKxU9brJzCvYranXhcYDtxefgdX8DxG51utNqLH59tdv3k",
  "key18": "5XQ3GjnnDC2bU9T7PJm9Lg7YQUXn26oJVaY7zuuAtbJ6TEcJtaRt4UrPF8nXfMC8WWEwekZZqkCEvRTcWPMwi5nC",
  "key19": "5r6vHaxcBXob4biTXZKzZrLmwZPsVQ4dphJhpjUzWCDzJu2TEaQh2hk8r7xHFwqcmpPNRebB2GNKsJ7SdL2x7mLE",
  "key20": "oLj2VQoGtfAekCkwWixh95rHC4QMwzxPVMkNTcFhbYor4DqM4SFXpHjzr4HQaBYEz2csi1AYBuT1U9yyss9wfcc",
  "key21": "5Tr64PzhjHAMu4pwtcKVR2Ug98rxhs7HKSNTx3eUXjTVGcbipWkuAJCZUMQvfhFDrFAdrvighmyLoZZHferZYaUf",
  "key22": "2PoL26NSjuCckHRb9j4jBmdZU1FoRstMnN1AGFtgVv7Vdi2QzHEWDKjf3uT5YEFZzVQXEcwnjsC6DGTYkpRKzAMT",
  "key23": "2DgS1WTDA9zcjxyZs1GWKdggPhqh8WUcfjwreyUGbWqXLdZ1dXJLzTqmDqmRRFhxh5k1d77K9v1aMHCccSBqVtK3",
  "key24": "42mXWzKao23uytySb4aotNnuzY8A1VkPjdH3JVpFVxRXHEqYssnc1ziUsYtarhTTJTJtcma1VQrqyWVHDyehupsK",
  "key25": "3fnJydtuKHuNX2VwoyxNi2ViipfGmwqWebPMYcySiYbT4bc3bQseeRFzT2kqpxRvGv2B2HxPQMNJKd54GtHunegs",
  "key26": "33ALuj6KQx1NqQdzJRPuKmhmnou4dwEuRk9LeMDfaNhrCarRXffHvyqNKcGEaTRZmNc1ZEdAjrAga37aXb56N68H",
  "key27": "2d1ZB57fZPY8hGdhYMRnPU6wRy7RppZ6DEG8xUMTZchh8Zt7iKpRn1M2LENpykbCSjqSwZqnJSohu4vaRZZsnDaN",
  "key28": "5GHSyDawzTdgdMjBtZc4Xpg4rczESdzPnfkBm5wjVYeYFQ8KhLHc4T4puGYbtPbG2Eyqh2yULofuFLrxoCuxMD5A",
  "key29": "23b5TnsMmZdugdSxiibETKAnuBo4rm3xbCHHfL2XSvxaJnXbUrQEHbTdvMcsCAV6hhmHQgBbQ3WsVHPntHEQ93Ew",
  "key30": "5ApY4Gv3RwLMjMtCzGnWprGdCB94ZP8wN3KxmJkJFfYVPf7msnEdZJM83t569VQhd7s5SKZs1ojsiErVUSaViN4r",
  "key31": "5GtHXMMaGUiEmxU8uYNEdSCrFhFR6HuSyawtqhSdtQwGAGmAjRnUFwkgf3BbiK7XxBHFPRuYDkeoBq9TR4frr2xB",
  "key32": "3P8Kf4PjcEADfN63XQnwBJ3wpWefjRQdKWnEN1ZpL84cTZBLUuKxPPRzkKE6PMieS9kzJM1jTrqeDQXRdW1LFu8X",
  "key33": "3zXjtCkC37rHtxuSQ7xsKRepAgrnNbDFcTjYqSBq7KsXLBfRZ6RG89hhqGks38D68rVMqxYFZHKd4YAVmLd1BMDp",
  "key34": "52MzHhnS3mnSxrsXmDkSMfTvx5KGzrzLfETCu7YdHmqCWhDDM4dja8HfWcR5PE2Wa4pSyrVzrvvNoEoHf1sYktrV",
  "key35": "5UKFo8wbX8KeoVSunrrQQHGFoj2CvNU5R4Hm5ovjWd4MmES7vxF3T1gAZv8hA6maFpuGkmfGDwvFFJsd7TbCWn9B",
  "key36": "5NzdKcHLPxdWDpmiwaHKkGE9xMJ5tPrFe6bV3SM74QqrjxpC7H7eaEFw9dBEPuti9i4N3oimL7FoFBnREWQzGwag",
  "key37": "4CsCaRELCKkVUE3CFRmSMyBEue6ruyYgFnbgEso5ecNGeJNBGEsf5926a6zdkx2hNq2P55kwcKtbYtNAqSzr5K3z"
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

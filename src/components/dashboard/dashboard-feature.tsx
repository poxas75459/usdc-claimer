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
    "61aSc5QQVCmKfgBkh1MdvXhxd5zNXzV3nwwRhBPmeyPZNWnrz4wwAPxmKZPnfofwJ26fpZtf5meYm48KLpNBetWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HV9Z1LRyvvTtYH4GKWPoEnLdG8yWv4rFU92x4UVnwmdTNYu1jhT9D7U33BRkfVkvGvWt3VitThi8fmF5eaqJJWE",
  "key1": "5LiEf6S2FRSsn5SnmCCGUW5LN3qQWzqhZeAd2dFjDd3V7xuZHdhaoKRBFFMSXZPGp9DvfJZWcsYSFgxs6QAkQayd",
  "key2": "4yLv1mrTAycvxWtzY6CBZJ9nrHnp9WU1k7H7jaEJHNVHjFQ6qRy1ZJ8pGxGDDb4G3qJLkatZYcDHz9z4J5dkaGsx",
  "key3": "pchEWND9uAcafhNL74k4o214CxBYNsLd3qNjGBjMw5JBa71ANmFpZ7bCUPJQEo2NrNKhnQ7kqMgeRvtytRu2W1n",
  "key4": "5BbPNpAuj5oeZjRZLfPRuodqPS78nqAXxpGtsPwFEiqMFnn5y2GQtmLiwqWSoeBTjxGyzHVnNGpmhLeB8G6s6HuZ",
  "key5": "57fTTJP1LPuoLJPdHsSsXpmb11jzPmbQ2wwTWCV6fyzRMHCCwxCvvJD7gef4jMyQ86LhADyyVmQGj51NpQBo3Zbx",
  "key6": "4XLeRbnJQ3S5QzBhjYNTRqg9K75WyTiaXyqTedFPgkYfvjUXfL8z6YfHWWwUwAmnpnFqMpRNQP5MYDGGcZvdS9r6",
  "key7": "4wrCvKPtSN3erBTjb9UPgNbkFeXTVCi8uDYAcuPTHXhM1JSfAHug754Jiw35SjkCHnuuN66Qbzw5Z5VZsey1rL9r",
  "key8": "3d1hmjzGezHG1zgp4yRxD46q4Zcv3e2seo3rYEt29UsiNVV3kqeVHUNV3tF88P8DTPG93CJQoZc3tmHjGBSzkeb6",
  "key9": "dkqHdiYisWBsaFknRqQWN7ZYo8LepR5ipFZVLmParXYxnv7v3WHkijLPodUim4MXyQQH88naa9wBpztfv25JBty",
  "key10": "5PU5YaUr4X5ZmSPPbXRCpViME8VAFvDHP8bPQKYeSdqtfBsyrYfncPrZ1SMQujd9uRvHhkKYXyiR1RYWsYHeCJAx",
  "key11": "4xa3om24Zd7LXT3gWLpfJjyTRCFfyHSqWzq1PTdQQDBizb58inqEGhRdcsHiybGRfiZknxnSCedeDoTrjSVeWn4L",
  "key12": "4NFh2LtaYbmL3BnLo66okbnm51ThuzBghGJNiVg7XEBBzHeQxBGZp9RAofGoDbSL1q6jrYiu5PkMTq2CXhm6WFqr",
  "key13": "3x2MfQVCaotoqhpiwb6Rpyk9mbswnBvKsY4hCBQPjKrWAnFH4uC7v3SBineVsGSEgwWJnnzkedL9fkf8Mk1qcAXu",
  "key14": "zKipSvXBX8apH2ktkGfAQRWzvxV56GYuNt1A8X6rHXJJKqKekVWpMLMmqoP8mkaAydjraCkSyveGrCPyWy5V1Z1",
  "key15": "iZvtFdSNLpWrGrV5G4TyX9DgSrGSBarpMQjZ9Js9k715rfChsv21m78qaTg7JQdpkupL1zJJ38D9fkgi3rAZoyQ",
  "key16": "3FrspzPzrRnRgFhNHrXe8LnuKo8jFdB37ZF4ca8Jk7basD3r6MH3oN5j1RRtPcW8cnM3vkvuQ2cKJ5yJP4tNRfyb",
  "key17": "3ahigauCj1Hx1pgWjCZDsHfNB1WZ9jCtbXW3D4AruirMMbdtqy2P5dB8asXoexoDPeEKysm4feu1R1KYA9qjx43R",
  "key18": "4tdf2qGGzxLXHgd5P7x3mVucZL8pMPLtW54ybh2awV9NPeokcLyXV4JypABHVKn3XW3goKCwhYgTAqPBDX2RknbQ",
  "key19": "5ns1bxdUW3NYpj1JiafbLKYJMpve3NjAvhvwoWwTeB8uNRbXWoEJ9ZHxbhkFgfwpdoFToZJBisJYanH2yq5aQNGm",
  "key20": "2WEuxxVGBymkgyETXJappDd3Ncows98WSaoYdu4SNFoZFz98XL2wtMBJEGvMNZYoachoop8Rp9xRqdTZSVNMWg1d",
  "key21": "31SmYzCQb3NJkc7ygaHgwtAV2F27vSuyK7keS5Ma3j4Ko5W2vMFyMTf9jTmei2gihJYFrqJVoa2ch4crgd8GVVoC",
  "key22": "2Yamdj6r7BbJWMTiAwrs8AfosZZ82qz7mdWJveGWFCTyG9wpEYLTQXijdBmvpxh3DQR6NSzMJcuQLPQPhyYmUHje",
  "key23": "yUBCfgPVZmppCx9k6FrWTaBQ8qp2eaA94JXnpztRapb9Tr3burwCpE6NKMMHQD4RoULKoTUGioZH14k5ZzVCSy5",
  "key24": "DhaB4MgVpWZqQGE3q76mxnxLv3mFstryQCnZ4f58a4A9iASkwK3SKH1uiMzpEwrCxdNQjhPK2Lv8AWspjfqnaDu",
  "key25": "iEmXS57PC52PuAR48YsWwzdjq35t7HgQ64m1rjGXFjeFS5Bt4f8VMCgbwcrr4yCfBKUhCJ5Lbms2XLnREpXE1oK",
  "key26": "4yJkuUYT8usjELFP2LSoPnNTzJ1sT1Br3eAiah1KXbFUjhRz8DWMRGjmzshqWU6xzsZiiHKsbVL8i24dMg6zBk5w",
  "key27": "2vS3sTp5KPoQva58sSk9U84BUfYBXYYGCTq9HrkSGmXoiyihWd7dsiXwUEku1quyscahUS7caiwJqset9q6onfzi",
  "key28": "3Wtq1QR8pbUqqScidjnosgaNPNLbWbz82q6PKwnLP36Zm6YYMWbGUtwzJ8VV9fC3vffquE1DB4drsucPuMHG1csr",
  "key29": "4Fsor2YxLPgngYFsrnmyLCMEVJoyT1Zi1Qmn7FnoYqLcrLAEPCuXKtibTejHEx2qN9kUPLSM7tycmZ43iuGrM9oy",
  "key30": "2zXeeotK64Z4xy6V9K79AXDdfxQZc7kZSzLsSTZFqm4AyPX9FFAmykYusVg9vJPiRT6rafe4hdaKgXnDUbmVxBSs",
  "key31": "2HcLVivBJ8iBaFTkdL2dKXKvCWAk8uL1kXoWHnPtPxUyaJ8eYFhBKoD4d7AWSCoiktutdkWW1CD4duQv7zHtpjZk",
  "key32": "4yoqDomEtCH8V1hJSmTw7FVKRCYZh424zNU5GnYNBQzzNjQVwr9trMQPic2u8T73SSVRQcT45NbEEHtoAWFWiipR",
  "key33": "h9YzP2AnrtFTnrE6qhTkcf3KXjb2Cmc21DHsEJxi1SpDPx5paigmuW4jv5G2b6Uwrz7L5wP9uQqUMPZZ8y2YuQf"
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

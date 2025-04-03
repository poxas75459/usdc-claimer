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
    "2PPfUizpd2QrqBL6ZJL7p73yUM64EAyh1q5QzLTkENeXKPx31ugGnZ92NzmHAsGtCBpQM6sWnkYHV6TBTrYqQGd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LwPdriLyMUUesTnZqLYjzUBv7xbmnFVGHpNQ5XQR6YkJuf8UjfEMpLTmNRgebphi3qS7FNQXJVG6RoCwdMXv8T5",
  "key1": "32Tdyx4VrNcZE3CLwo35PyWk1pkDGw8d2pDNmixj1piKAbPTPzZHzqFVfcofeEDNrzr2wC4ihwqnRu9iA66aQ6pj",
  "key2": "5mnn9NvtMmqn3gW4bvBDf8JVMobxrS6xPfmjkZFm9XqKwkPqxqvttRQpTF1nvjJh1TVof5XQubYvwSNH8u2hRfW3",
  "key3": "23RyzGjNhDLP1QmKjEP9PfVJta3r5aL9o9NWXmreEkWXQwBGNkqZByEcYaXmmjmfuyCbdEpuv1EguMGR2pGCazp6",
  "key4": "51yK49cqmFd7LKQm6EXs5YLnWp8xdpj7ddcJRhWs7gQVFSzYver2mE7SpDYULqpjS3E4BexnaJfNnCNBbEj7f2St",
  "key5": "ZnzSQ7TTpt1HK9AAcyqFSDq6vk2T2RpEr1jjBaVtf2iFS1zXDbiiZ67zDiAJZuaVRgLMq2cWaX69N9UAhmnvWPK",
  "key6": "iD94QVCo4y4MyEN2jp1ciKwSdvuyThsfMebG2UEEZDSeybxL8jrZ5LzCxV8Wd7UDdszKwxA4s7B7exWWMhJAd1G",
  "key7": "5XvA5kkntuKgQe7kYKpAHbD5Y8rxVGSnWBZAVSNVKGKUdQ3sM5r3ud5fuHyx9FXEc8q9aqZajszpzQ1bnXWcSRgg",
  "key8": "BdRKaPcbnVqncUh7sndn8eyU3KhZ2ZAZtMEtvcVg82re9Abp9cnTa8oGb5Nt4jfrH4tfyMzAfCEhphStjVcqtif",
  "key9": "zWSpchYSjRtjt1RrYWcfipqGcUW4TociP1KqjdMWd2HL6EiwXRNzXqb7czH1Tt3wNkSBaU556hwBvK8tsoLXrXJ",
  "key10": "2DvHp8crqdihkkVabGN6mMwFLr7MU72JsNFbKpdXQhKPNLwzhcynqSf5buU7YmhAzsYJQZnbBMRvBFXjioTdiet5",
  "key11": "422jaLeqqxZneUN84qjuyeTLfDyeyvW4rimuZxpHeG7nGUfhZ9SZmDurSDPXqYqaq3dxY7ctSJpJcVZPHWa9JSyp",
  "key12": "4yDf4pdfnHkw93PjPuJbp9LiA3psyS8EhcadovAiGeXy7rLVtE7jUncDxSjxKq3eDatYv5rU4nahii3DL4H8Pd1N",
  "key13": "2sAvJEzqEcArbkTUwTytBBrZWE2xnAfa6Z75SjeEYZW32LF4akAWvmprQ8XhUKCTutx4qomFu34fvPpdvA4QXrW1",
  "key14": "3WSFs83uhVsmMM6LwdJP26dF6AoSrBBHWsHJAoKrp7LSQ7yRWSeMRqdjMLz4r3XkkWZCxLNZLrUEpNTKPSL79x1q",
  "key15": "3GbrjvbcbbDUSxXKwCbSKjzBpft1KvSSqX3cpmFyTLd8UTdktnS5hHUCjjkaJHzmRbnnoVTSKzw7yW4JAAeDrGUQ",
  "key16": "2xXScanyydiKCNGtGxpHAwzXAe2grEFpVVij32m6Zrf8KvRAKLbRP4xyL2fyxruSxJE4jPwBSn5bKGE63ZkrHVw3",
  "key17": "5oah3qMBwbdG32PZRzg77vmRw6nZ3QzeE6VymHiYE6qoYweikKYDyjUoKjzLsZ7NMX9AzaDsurL6Dh35envFpM4E",
  "key18": "3BLKm2rXSDeuQ1oPzJVLoHyGuEaj5NQ7hyJffWa4YnRdbgWFwTL3VWFgayUpu4BU6B4ro2VojbiLUpKKGZDijYse",
  "key19": "35V3XmbwiPqkdeamXVW4jv8MCkZj7x1vwyqxVgV9kC7hxKYHhjweM18hMhxCc3HvA6taG9514p3CLjBdvyyFuUbD",
  "key20": "nfofp4xRF9Sf4vRadv4UQEPfYhsLKmctH6UqkF6SHPbFXkPtXojMU93rScdgsKjELQC6WpVfA92Xntthuep2HGT",
  "key21": "73e8tkw4hByg88Z779ZVKyWSVSfxrX5pCm99RdeY73zk4aj4dR91xBMPbNKxDebTKb2avsRDiunvKwsDt8Fp2E4",
  "key22": "4hCvu9L62FMdvUmxK5kSC3F6VuV3xnRX91WoFJx64B5yrTtwY1mZs2in3HhfoXW6Jr3JBwrSaE9Q1c9A5ykt2w1u",
  "key23": "DnqC4fj5c8pFwgBpVUvKpnh3mmUQwsr4DmVBoT3scGVkocaJWysxRRtKsyj5jJR6h1KG2fXJFuzasUg4REbwmpP",
  "key24": "5GevTqi2W8ZQRnd15tiBPyjE3sb2uAdm1eJNktEsy8zm2sm5q5KP1aBCUEMAfiFAijhixzVfzRStfNBJuuUWzP2k",
  "key25": "RiL5pHFjhyuB8JGaPVNbVBQLczQmMzZKWkQCTMSHUVR1PETQem1JhPgvrniSnAoSk1RfSyXgn1D5ccRhoV17DLg",
  "key26": "382uFFKHfLyvf536sapdhjdeptBnDdkiUQvdkf45EPoqDVxJDZNGEHbEuNRPKEBN4Aj2tC1X5sgsrustyqGzT6J7"
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

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
    "4628t39yaNV8EfeZ1enYu8XbWfGEkfnRFp8Z4xMFkK4PR3GbkpRgdqBK4DNXbUQRnMCNjrfnEEAQmRBXdSmhd6cS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28x4xcNLibGZWVcxqBpdKdXh5NCZvRF5z8q6YYAkMHEb7EKLvZu2vFD6Nv3ERHiqUDH8xynuhhgtRrwa6eDR9Xq8",
  "key1": "3PPRN7PgHjSgDyf15x1CTpqEohKKkEMir9gkXSBByiLNYKpf7Ek9vjwqq7AP4Yp1Xk8qELmae2NZ6mj7DsFAx9Kg",
  "key2": "qPBJbMPTPuci1RfDKECW7MVFSqoVvCFYs8DNjD9XvNuGFbW3WexJ7xqE874eqHqYNpxPdZyhh5c3dGzeU6vRGnF",
  "key3": "t3NGwK4TKYp1xN3M5p9toMCiRrmWFcyjaz6oKMZ7C7yLDnJQWtBfufGpQqdrxbVkRa6g5VgzFoXRLC6vfDRfYGf",
  "key4": "XpYWDJaRKa1atNHAzaEHDrVbYGzfw7NUVhZAqjRLAV85YgXWPrskCfrhei68sYTr8P8YzdBgWfRai3U5MLDcefL",
  "key5": "45iMDkwTJvYNnSsQaPgk1b3Vt6tw6KQUesLz2n7nrhkBgAuFW4chuyNU4zZkWFs74zfV7apijPuUS2vRFo8HvXVg",
  "key6": "5pd2wNHEWdapKP1jg24e97Zrphr32A88cdjXiwJzUvdiKtbpLvoBBvxBy5Dy1e3or5G3BmhMmPrP7tcDorXbttMZ",
  "key7": "2S7nrxNoWKHJM3LU1uxCwE3zybV21DZJyjcENSAgtj3BMjW6pen9j4pGg3kG3MCy9NzDSkmhXnskLFDvT44afyZx",
  "key8": "3KrSXJiUBQV6u5unZMgACC3mcpGVEMBEikjYN3gJV26das28V9vNpRj6d5TPh82ZTHXVm16o7TgUaLZzoJ2fME6D",
  "key9": "3t45e3K85Xrrvisv7i3yRJzgXNXCz5WDHVvBVgKMeoNSPZVGTNSv88TwtjXxtPMro6dydLwZu8vk3fozEAa29XoS",
  "key10": "3wctMyancVzHRLF5uRBHoC4MQ3XUytsrxWScqqjUJnT5GCUV2AMh76WAy5bTaSzNT5ctSsnocBWXeBh2PV6riNEk",
  "key11": "V7Vitxxv8rKqrevqoj5jLKQXFPNrv95iy8o4499eQVKSK6gd1qxEPT9dPEsKCU7CYCrvWa2P5ky9muPhvcF2qPn",
  "key12": "2CuXr3BV5utQyVhA3vBtf2TeFtaMA96F2fWrv2brrkwC1WReGJvwnwE8VaqkYhe2fX8pBzh8aV3AJonTNHnyNu2f",
  "key13": "2zS3Tny1sKecTXEgQKUuiKv9ySZHERz4ruFe13rHNtsene7x2XKpTLuR3tzGdjf9Tyg7kf3vVGj3dLpKpU1JkKv9",
  "key14": "21pkdFvHS9ntVibG24var1CkUQ6ENiaw9jdpAFstv7Hgvrof7znHgkAAfE9CfcQgzGaBWZVnRWvoYGNZMkCGuXaX",
  "key15": "4ki5giAnyXfjeH2ktVaNf5ke32ec3woSu6z7bVAhSaBwwosVCDCNf5juiheWNHbLTSmQRvpEcXaapBVxrNY9d9bK",
  "key16": "4jikHnUToSy2W4THJeERa9QZANEaJixKWqhmdn1TTotpa44QdZ2mm7S6kS8YZA5Jm8JC3b9TNhmtZpm8oq1HQwCE",
  "key17": "5C4vu6kHayNPyeupEJkyC3aCQhnsaSvbhHbxgmi7eSX43SHAybV7Zy8mVUNw4NfyaFLYCWfjEffzotc4Q6kfYfut",
  "key18": "hcB1SHTdKc41pWXuyEyiMqaDhCLsC95x88HWXt8yrvkGMgJxf1rcXmDgBkuabwcc7ZH9dgrs19yKWmSvx94taRP",
  "key19": "r1Ds42VUmtWrYMV1vxRin1id2rmBX4d7cGtE2BkeMUvyoCPwHmaLZZ9AAnpdbRPDHLk7L6n864gQisP32ZhbVis",
  "key20": "WaWmuCVnRUjQ8mpctfbNoVxVAE2mJiYn6oUi72gJRLQpJx35agHr3WKnvcjgNRmhJkLWPjK6r4vVXCstRDaAYyW",
  "key21": "VDYugkLQkBhDPfRwustX68C9fQxh9852DYKzfCb1DsZ6uky3y3PX6hMgYRPjU99Nbzwhfky77qt2HgwBmap7MQB",
  "key22": "XSgXagRt4p22Y6VijZKLpniChUKfx5nX5oK2TswEoAYiNEWWnmS6asjN2a2DLBC6oGoMwsLhwvxY3riK6i6b8GT",
  "key23": "35itAyU3eg2RftSFoo8xyPaJfQbSoMWgyVe9yHBN3sN4VugntyNXpdgY6kaXHnc5nS5f4bkh9gWsiUW1aRsGaFRs",
  "key24": "du4qAd4J8zejgfXbaKsS6mxctdecqBq7dfdms4mrWQrrVZppM6ULkvfKfuvUv2v1ufQXpr4gzttkHyFjEqj5k8N",
  "key25": "2tXRgZ6jFmzAXBZf6fQHjUsKfzgrHdTwiQSucfqrTCL4Txc99KpoiwJKmHfqG3HEYKDEtEXnVuvArYaAhvQy4nBQ",
  "key26": "kEc2PZUgDkD9PWGBb5ebgbmj5os8kksojsuKQCxAYHveiDjHcpGyrF9E25LTXsAWwweCUAtWx3NQuxz8BkSCG5U",
  "key27": "2YME2W4XSQHDGfmFm6PTB2Kkf4VCkvj5q8e2M4fSrr5RWWEQPP4SQm6H8eLEJmTYLgTuwaLPhfziDUBXxayZM4DD",
  "key28": "4SfeW9ZsGrfKArsifE2KSA1Dezy6fqwnezxeZhVdrSseuYYrBkvQ7ihpzvgzWvvS2U6UY8EqHWbNAx2wTEuYeYMR",
  "key29": "4MGcYHLuXcFq6p94MuiRzAEuH4Bune8CjbqUq2a7bhxrZgT9UungfaeFyYPxub9wyMxEZaEMgH3PucFB85bcATpt",
  "key30": "Uqu5JyZ2JovyY2Mi5o8TGqisT9mqKnFHL3xH7dYoTJq1Ekc9Z7yZRBV5QRDtLFxtDYghwqm8TrUFrSFc53YjjbJ",
  "key31": "2JqNFr5Fb4RNGQ45tGhWBsgJDFuqUD2BB4NvPeSVZYMeH1MKVYWpguzvMu6XntSsowbFsRL1eaDpuncz8EbaxsRL",
  "key32": "dgmw2cMPDWnteSajZrtbrvDzamqFShQ7zXfhfat8M8Xo5Pko7ZPjoJBrfiWhAdvJiYqDXRdRgRh4tyxdD1LM41P",
  "key33": "2sgvrpdVWNVUnsQXEsKjFYKBhrTryVWnHLekgH3nKmGEVkqgRWLv1tT3prxtoDQnkrsx9wFidb37wASnuxqVUiB4",
  "key34": "4Z6oh61wUmmxNMq1fRWDs6jevcWjBCcGtNgazy5x3P75Jpk7ybN7QvbyvTkt7Zkkyu6NHjZhMQCPEptnKqRmhCs2",
  "key35": "32QVHN87RyaozTMUzaajfwz1XjiuhrGefnL12HkYVmdcBnz1f3VwR2TKxPLBdRG9MF4AvsmdrtgF63aK3oPgkSPF",
  "key36": "oX1oBHxUE2CCmWp3qtQiR5M5k3aBfnFiE6k43LFL3znpi2txSdZHHMhsZWd7VtwErAzyqi5y8FfEHT5WPmwt16f",
  "key37": "3zcTcA9Smbv5NL2hrdB9ft7qWEcnJhpbWbVWBco5iyDXNfhwZs1VYpSSvQ7iJ6JxH32Aqf8PLqtM4wKcspZhPUnX",
  "key38": "5TFRPhActH6CMv6mBiWSuzK3V1Wmy7U67hPveZNsx34s8JXmKFczbb1CdJvhFMCA2DwzSRrxc2LQ3G1dnC3e9Vfo",
  "key39": "4GQxMWvxirT3DPrXoUmuVwe8jsYsCVa46BF3CyKuzwfVg8vVtm8ebUGjjUcmdEdZtdV2hEJbfARxhss8nywgAAMg",
  "key40": "4TArWmG9CFeFkLhotXgwEVKYLaL8TGeN7FZm8jUUtpA5iNkE5MJZchojuka1xDufuQti4LN18H78LXz4ym5MMw3u",
  "key41": "yJyRtECsZV3Mb7Qi1g41nfAUmVAkjf1yP7qmhabiRPV7PrwhP6HFzhzUpxMfpSeY243zLSFkWkdrAcQQMWuQkp5",
  "key42": "cUJCvf1gRfkkMw4yV9mYPqqYbEN2byaYrdb3kde4HJtq9P5dWyWvMxyxDrfSN8t5XTTWHHkFPDheAUxbgMB21bS",
  "key43": "37e7G4z3qFU2NegvERLnRYa8gNhorAzCDZ2znSpq4qU7GMCdGyuEffd7pmtAtvySKanGmdjkEfe49WSnc84CachP",
  "key44": "2cu92TDLhk5F4uScBhsa1Un5KFDsENjpqM4jJ32KhfmiCnX14iTAcKQ8Zm3qp8wHAdLyChhz8UszwJVP9j7HecWa",
  "key45": "4FZGDVp3XaWWrnqSaHth2xdXL75z8xQGfZGsveFq7Sq1J7etSXK58cuKaXPS3CvJDf3DnTKQXxasMBSBRyhV2Npu"
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

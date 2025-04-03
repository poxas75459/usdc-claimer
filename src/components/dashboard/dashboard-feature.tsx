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
    "2GbTfAxnKCtcHsw1bDDWepEVXQoaowv2vNUcLb1dkmN3c255hno8N6KQH3b2p4U5SqrYCeAdnbXt84YzxKWvvsgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ywtvj3F3YnqdkSZmkw63AT58P6ms5a9pxyTnBvpFqob3rYzDrMUgn451MwM1v6SsKv8MLfhiZAhZp8PqzMe34Zt",
  "key1": "8UpnMFbHSc5VjncpTfjcbc7QFa52AgAS3tUnxaPfSfnFQ3b5HRaCvaxUL6fripSrkPvbiEkqtevB3PZSJCjSkHo",
  "key2": "2wQ6Lnae5GqaB7x1YmfBQN7yuARbYH35tJcQE8TVmgUx22Lqmtu3XEfTfXaM6XG842MzxtoZX1CHRjP561cE8ZGh",
  "key3": "VRaY1woH7d5StZbPH17L95kSQsfUCX1KXmF6Jzyf4qkZuwu27U7a8GhpYHreJJ2223EunzSWNBA4qGyMGsWG1Q5",
  "key4": "2xgDdNqZ9B9Bo77hyhtodxUgxYrdNxxp1ZJij6Nhv5KyPweBCu2cQiUKhoZiV6NDiMHNNCcwF5UZ6X4eFSzck1wz",
  "key5": "55cYjmRPxZ83osiDfTe1HbPjNXfJpaFyrjFjv1mxZq3a2Vpoo5WWaGeEPA29uM3iV9ysNjq3e9kGfxDqrwVK26yq",
  "key6": "3fux3PoM8Jbn9qcRqvJceMfvY3pwmzngAPXFMezMtVrk9Gb5jAQpJJBxCxw7ADc6ZLTzjkmSGrotVw9UAE67WSCo",
  "key7": "29qMR4q5EGS4wDe1YWkgRvjau2XesZXJJqD19Fimn8Ucf7uvMCvt67YAvGuT2jfvqgYTD8pU84mJxmVCDAuMpToT",
  "key8": "5PPwyYV7f7pbPKRUaPPjGXJmSRrU7FLSqm9ZiKQDKZp8Qy8KhRn1wmHdtnCfRvdgfZVUH99W9tLM2yHrQ4JYL7rH",
  "key9": "393p6NDVomWkz5nRnFbq4ofAkxL5PH17KwEJ1JGsxQ6PTGikENReW51gddUA8eLkGUZKzWnxUaRmqRc98hx79tUw",
  "key10": "5tVGrGmfUonxmBZ1dmf3EzLWHyvL4muQMHpYk7bYDL8XUDwzBeMyhFKxEcFqqLyzuSMobipcir28Pi18Sempqy2p",
  "key11": "P2xPJo8ggjva3X7tXjyG3699MqJPy9fV4XgPRPrfohqXQjjELRXKSYQqZcMkbbQFBsjMRAP1hsz43zQVQri5pND",
  "key12": "ZSMviqLzmFBfEG8R1hjnyFSwRuFuZ6boVgu1LAhBoAZ7w6SzqXCCFqi4GbseWaXxifpipN28NBHqvsEFe67Y9K4",
  "key13": "P5d167SgFds45evXEPgF7T3LiZM3FXMVfdXsEFboNbJYxbaAsugFokHJB2g7k5wGAASkgVwHxCyLS3tiRxjs6zu",
  "key14": "2mqim5gwdN48PsUZFLedfd2sxVukKJGkFVWf8cRKEJcYt8YdKQw563RuxFfEbLqo3nxJXxPJ8d3zhNEtCHtoXpR2",
  "key15": "dfSDgtdGeLoFcUJYQHjZ3kRhAxtqncy24Sw8qV9cvLN6527DKZ8NbY5AjAfsYMbHYe6xxvNUybuwxnPKBZTq12G",
  "key16": "45trTShaQDVSCBPqRrBF8fBXD4tjnZHAzXUwEU8Ka3Fp5nnGyr94pCrJyLKW3EpmipETGginLehPvUg5L5dftEr",
  "key17": "5sHBFhKb8Uqsd5hm7ZrZCuX4uN6RZeziq3X1ELPegLwxij12tY1j4pXjs8PH1Fyj1Zd87c2193B6ZS613x8FRuYj",
  "key18": "2pJpKFV26NqaQ6ERxDKEVcqf8gXGJRYxaxbfaxz4dxMvThtQxM3tju7QJkrkXHfD6NcMkTLu3ejZKFwYmZLv9EWr",
  "key19": "4tBF6mbAkptu8pbNpuUfDLqJeZaEkYQuXiQmwmMKdNfxYHAf5zjxj418b4RcbKQoGWjQyKARD9StPHP6cyW9dLdP",
  "key20": "dyGk9hgxNuXbGQV72Y2RNXW9obxdT9xJKNHYfVPTNfpkRxQ7XkBiRVjAyZVeAr2iRP6fPCCJKMMVN6sSVQXJjBv",
  "key21": "4U4TtoXpUcSoMw7iCj2tXCqEuCBXkPgPe9N7b7DbFx2u9dXXMQKXy8k4kSXhcNbDxshysfSmfLsJx3go2beW3yv7",
  "key22": "4pJ5wEq7Pk21mzYhhoHDbYUxFwWVHyyVZGeWUvdkec6MpF1tpJibd3B7ohHrW8BR1bdQe2RWCycz4rezrnP88Kar",
  "key23": "27rzM7kgnBqUFuezm2tn5NdzcovoV7BrERejNcQjZLWsFPL4WjUn2ymVCxGinw63dokJKpzaEGZJ9GNm75g2TsoU",
  "key24": "3XfpzWF4gBxKAyYZ4xGpmtA4aGCeECH6gg4qCeJ92NuAp1ah8fCjWe54dvYad4RJ97wtRazsH76iSCWUkD3tFtHi",
  "key25": "Eko3jPmZigwkZLqiSQWCAUVUbcRwsy7Lt2EVJ1bApWhH33BPxs8wMr7YP7zD3Shy18ThEWyE8fML9Xntsnv2mbg",
  "key26": "3uT6JmAKseFdznTQ96AUeNYMboG5qtfMLL7GvxAe6FaawqJrqGDZ3ujtebu2mkeS8guutGGEijpDiQVXfPzs218a",
  "key27": "31C4PbJCuGu4aXQavBqbQhe7xu7iYyBpoYW22fRFVLQvJSWizsAbgG41pKSXGowo2A6XprHQfXwp4EErz7ZaCtNn",
  "key28": "yKay3EqQ25ZPqWQtBamYc98NMYsPAMH49i9yqFpVTW5ADYNfGBEZVkX5W1DJzmMv4C7j6s22RAuQANEoaKrgpMF",
  "key29": "2vZdmzTLihDmAvF6TZBansHFd6zWdv6qb45vwfZNj31PxqM8zw6bYTLSLHJ3LnwW5FFEJYTijNRhxm5QKUigk8MS",
  "key30": "51ViRwjshRaw768tevir5ynrMncBoU5RnHaoAXHAd8SBuS6iuxWFue8AV1Soe3sJTfzMcjySvPgcQTZqUMAUcFib",
  "key31": "5RKy7M4QR1uYRLbyUrMF52XcSoGuAFfRmGQPK27qMvz5JSn2he8DSVKf9EhCDhzeNbcWvsau9W34W6VSTEfFTQ2X",
  "key32": "NnzESw8zB6ovt9b19vgTjRgJCDv9DAPyjGDphYXZ8W9tkMdEx44A9GaDuEv6NhsKoFrXBy6wK4mLH2w9Y6gMhDf",
  "key33": "5YGZ3C6rEN7j2cTGPFGrYLrLUCRmcf3D4D9cGDjeib2CtN7rAat698qCsx1uby4v8bsAaMrDGzA1zVGjMyS3EPXN",
  "key34": "Wbc1yhMw5WoSAj1rdiPS6Uuhrpy5QpTJJya54gDtqPXestkuNJ2n1JDVDUih4EtXRXEdB6hLyCf71sC1e9bAdYE",
  "key35": "6awHPztxFWPQa18M7L4wrSgPKEAps2gKtB9rxca79YpfJBTNNoQ8xeUAf5hXSZum5PzUBNnytHYnWK8PcwByFnd",
  "key36": "4Wns8t22Htpx15hrD83tGK1nBXBgQHw6jR2DjUwnBv57asoqK9fUnxiVc3n1ty2VJRUcoq5juQbX6VsBzmSbJxUa",
  "key37": "39CMRtEi7GFJehKRHxt9xztzf8ktHZJFdNEgSnNMfXvauww9kvxMy4v3h5pPHCcEJTee5iHjCDAKYF5vr92DDzRm",
  "key38": "5tTFUWQ3AxKKWbijAn8LwuZr3ZqAYXyb2AYKES56ZfQRLygJRhRxQp8khFdaZJXuHACRLbp5qLjxhnP3Btneja97"
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

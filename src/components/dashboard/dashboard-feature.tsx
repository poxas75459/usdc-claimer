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
    "4uSM21EHFLZAfSsjDSjtsZ9gYeZVGrURwbGjDcckbGg2VHuFR7KV7Np52c2X1RTq2FKpdgm4b5vPEM9iqaXAFjR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XkDGDpsWWjxvwvJuH3uauRq66iYwHtnQV18KPCQkCUdJfad7D7XTcTj3anXU9yBs2NbUyksWMJT8UpVvq1wnQjw",
  "key1": "47naxSZb3Sj6fVydNhEjqkoU2UhuCkeyvB1Z5PwLMvwXx6jhQ487HCwmB5bF2joGkSxgXTZ6jLdKx5tkj35RpJ5w",
  "key2": "zzp35vd5DBrNNWB5oeNSF8JrLPT6EpVqFp5MLAozCW22YMHKswHCKTQwAvAJKrz7i8JxRLnqReEwerFUmzfDbU4",
  "key3": "4V32DG764v5cSz7inqTdUKRAUYzgwdhtQLFFbHigAP6g39jRaD8zP8f1yrePwYF4sxm7fKieNmRVBFAe4Vsj5u8w",
  "key4": "5zdgYi7pAGq9c6ABJ6UxrsGTGAovqdHTa2vzYdqdb93rjB34hUGqyDQq4a575WB3jsrDT2RgiTRbo7gnUxX4H2sq",
  "key5": "2RJaXLtky2wLUihY58zKesv9oDxWBq75ygAUAnc4pFnCNVJptFpZFvkeyLiPPJUBU3szAr15YMqZ9svKjJbNUtfh",
  "key6": "2TgQPVEUBhiefqBJ6gPsKTK9cBFHKBxg2vMs6w7kTFbfMuhE1EyN4W23iWbs29SNMYjw6m8JgsEQZZJcPpdpCKnu",
  "key7": "5Tasr7Mj3LZqJwMG57cdPgvYLVUA3w1FBcFmSKdXCNF7YDxafVq3GhqzWFcYfm7Sm3qrqPTD15ZukNHZNVBT5qgf",
  "key8": "4oEVdoUTbDHmH6diAEM3iWjk2LhaSDuD7yTHnuEnXMUNhuyxLAmFCdi76TqoXruVzWA45yuLhcxHhQZd1qbW58Lx",
  "key9": "41Q6H8Jak4BpueUtdJrx2RPCzkvoPVetFbymPdHTcPx6m4eA2LaEUMKtV7obQwER2UuXBBp1UR6JC5BMJDMSobzb",
  "key10": "2Ct9MyTWEtjJm2FMr1NHxi35yL2utFnVAQySX24jHpw2WTNN41n3mFzUsYtpn1FKXLEHRXZs8JXm1x7Xi69o9LTf",
  "key11": "5EpBEcGZAQQu7aywiCrGbQbrxk9AYCjdHABoWAU6vdUVSkr3VbDX2u5q9xNJiytRpj897ZkGAuEeKS9rcoJEthfh",
  "key12": "4r3bPGKYrke9YuGCmPQaoS4ZdUj2eVJWTMv6iWcKaEYMG5UCbvrWkxJiCRrSXD5QW4XUT8XKtwJKnG73e5ekA1rE",
  "key13": "4KMPtfFksSdRnMeUDicaSRnw6ZHCA8PLZmzp7oDonVNKm4gJ2S1E7i5Ro4kj6NrqqsJWeGEyJew6bZb2sDTAwsi6",
  "key14": "dQRjMUCCT2zJtdQyiSqNANwQKpmJShG9zT3tpmz7QXHzQyhDJmNECxq6xScEiK5bs58hdjpVbZKTpv3RDngJzfZ",
  "key15": "5b3UtzfSyvDiiYuEyabnKscwX3SjnGinJ31L6SPA6GYswPy1JaH1JEwVHX8E1C2PkhxWN4YhaUq2Lsj9wf7wyEX2",
  "key16": "3HqXqxUHEMXg3kmR6sCALmhLRs7hjgVqa6vuABTfgAcMCrZggqHpZi4sMiv8WGn7mi9SPkBSKPkiBVA4FjynEef4",
  "key17": "3EBaeafuCGZXtbzrz4NmLuuaU1sdoYW3kuyRezJnv5bWFZKXWzVsAHpTGVzbBy25D7jDnNxP9V2CV9aJBvj4eUWA",
  "key18": "PpVuxPENRdWdTw968RKPu3koMQkwxHbsoobCrDu5NTUwYQU5GA857aCzkN6xLf8ZVxJwpB4hUNYuY8ARVDXiC9k",
  "key19": "2nBYbt9THSy9r7NL7oUekER2TF469r1qJeEEWorEsVWtKghAfBTDamaHMfyk1Xgs1nECvNTpYqACQkW8LLEvTa2W",
  "key20": "5UkmLLPa1j8YDBc4ah8CaVE2rqGQxkagVnqzoR4UtHrMbPGeMWLVx8UA2mKaFMCMA4ZCUKfi3z54RNwk945TxE77",
  "key21": "5eACKj6yQwgeuVYoURmWQ6db2ZaFkLMk5d45VTBb13rWts8YhM4MMesxZGbcrEcV3N4mewo8rjYYGrDrEJ9oNTNW",
  "key22": "23QaUiFpv7q9fZw5mRKksRBjtn9oZrrqwhkLj6Knstz3jhMtnJHwS27JwRiskmPFxrjRzL7t2byySve9wpELjS4X",
  "key23": "5yk7ii4b7vrtzRDygYczyorEHebE2ZY9ky4eMygPR6ypSNnprQPSKYsBThtPB3E71ayUrbcikX1V3HBYQofNEZDo",
  "key24": "3wPKaYgrCfoNdL3Q5jSvRUbLpELkegXyxjGj2LJnMokV9q548yJgVYqT1VMhLVrF7AXEK6wfyoERB2NhUnhy6KZk",
  "key25": "59E2Kht44Vf28MtY7JcRdeZhAqA8CLoy3KQB26X6A3oYHRxMwFZeJ7ahyQqLySVtdA9Y4wiokk7DxNiux7axp53n",
  "key26": "4MRVp7x5ki2RHvS9pmqivuuGKRvmnKxh9UczQ3iacKkqokU9EnUkoqpB2daa2jbESs4W12toLo8v2C7J7hDF6p2c",
  "key27": "3xGdrrgJi7crnwnoTf3BGrCWYea7T65r87LBxt8jGq7idyDyyv6pCNrMt6hXMpYdUNJwKJTQEqo7e5xqxqJqDM4j",
  "key28": "2qRiUfieARegr9NxKR3jf6HLJBNHHSbUmREs6sgnWPYzVGHgwwTwE5Cvkyx49MuKqgBTCc4SkEY1LkBnTLg5BXra",
  "key29": "2GMT8jHjZ968uPhuK1t8P24ubEmGrUScMPZnXY7mVh3fWgwNmbQxMpxs2EMLGQVPgacyf2h94aPpJ4526CgVbLT3",
  "key30": "3FPBwpPt9bgZqaDPyEhDgrrz2GUPUqh6E1fCNAmAhBvrVyFnnGtLVdYHMJ8SfVqQM3MTXLKAgUx1bS7tPdWbwhEi",
  "key31": "4EYCTdRMoMGk6oVAwfSj2xX43bT8KRNaUmXzBkjwC3BNM7cFXiYiMLGfDGu8TKoazdYQpktdMRnViChoUgsJ5Dbp",
  "key32": "4yJgbDFqwXB995bXhkzE94hGUNqjV9kePftoUCLpdj9VH2TPXVq6UHmQBcwrcMkzG6Fc9MntEGaEhYvVFxsba49h",
  "key33": "STbwc27TiQuzcjYUdZbNeDsnuVcN3GSQso74oxjRBqha75S9GpzEZiMo6WtkyscNyTe59hCAgHSErcSFEgVWDfz",
  "key34": "5Sad9pWuuPGhSSepxqSdQBZcSa88aFubMZzSXSMHKXxGhDgdbcuN73oyYXd4i7EGPRoEHGfd38jRMTCB7pCwUYmf",
  "key35": "4pDPRTyGneLwgELgFLBF7En8gqmk5196x18hRWz2iNN5cnZd1q1d9nRVo8zr5aAoB9Fh7fMbeaK9PHk7qBdShuwX",
  "key36": "2sgvt6umMFKEDsWBLytVYk5xMyD753eZwfysZsqsiMYomGaxaNL33sj13D5XvwcwUHGawXfR9z1xcdTGmtteSpaf",
  "key37": "5TdiqFcXbfTFvzYbor9njdPKmEdZBvyHerSSkEx3gykf3WDNLFdrTvD625JyxAFLvasJHdvfEiyBDhTin4Dp3Sbe",
  "key38": "2fWQCMV1L1wpDGCGryMSS9d6uyR6TErrKC1N4HjzjKfo9RMtzYDYPTcJPWkyNYCncGDd6yNxUpS1bb8gamkCkw1R",
  "key39": "5nZSXurn2U7oFWT3E4fasy5Lq46V6nAb2P46pdneFpFC76pn8hS4oWf6rK9cCxoXyUPpKsu4Yb2BeHaio7YhTPck",
  "key40": "2v1xXDXq5924h3XJAzWYBSDqPWXR79ZaYLnr66mv2QGFcurkTeHBxZpbtNuRZdGLxKXXhsvNntbkKJbho3mudDvb",
  "key41": "5sPEsRnHwC74L7f6As8CZmszhQwCXG56mAZMzfDGrWVCGgKFBTDwmKM4NZPQCoLkek1BGkLE9ffee8SqwpSVyzua",
  "key42": "5x3hrWWAi16V1LBtwGAcFdSJqg727MB44X7xgehM5zrasZtY1LEK2LH2tCXfd1tLC946oq47kBCV2y3kSEEhMY9s"
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

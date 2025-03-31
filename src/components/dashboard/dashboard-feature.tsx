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
    "jSusk5ouP9ryJohoXEReLM6F9LnJsHXXvkHpas33y2PQdZ46BoxYr3kkFCs2H1y5oy2HQWYDNmZzhwtDVuJNCCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fMKxUyZsdNc2k75o1vFBHooi36AuEDWvRQP4ejiXLhz9AZLeQ7ff3ZLRJ24LaoBTcuDeQ4XSJcN9cTzs9Z9ErAm",
  "key1": "2i5FLqy4MyugkL8f67QqYGFz8uG2RxbtNMqpkrVU7sszaTAgeQbBiGQXXsbQbuLrZamCqGzytGDwA39XBUM2TND",
  "key2": "5Tau1fWHupx38afCQBkK5mUZsjkd1FKACcFR5CfsZ3Mn8KY4ns6rWHjNBAD1YmS1QwuWRcxGVFHs3H73up2ZyVmr",
  "key3": "34zeugzpbC9x8PZrPBuqmXBRpN6mGUjAiSukCLkz3NX1rxWvg89a8JzSEFsUoKHPNW2s4QQua5D7T5BGB8No4mk6",
  "key4": "4s83UbTFf9Uh7YAQyrAoGaXh44qArYEXarx9VHdDQfmtTSxQAi2t3ZoAQ5657HnUn1B1JCG6tsdYa6kqj6m3TAaL",
  "key5": "45GF1ALJBEV95AtuUPg4WkferbtcSsA5JMqDwaRhUdqvS4DkKebbyMCXBGTXCKRwPGZDrVKhXNpPNSbdah4BQ4tV",
  "key6": "5JUGGpBfHhc3etufgNwq6Ag6Cfp19su7BsJDCVQNzxvJsauuuSusnphdVjedthngkHpT9gCyeygBz4sAayr6KD9G",
  "key7": "q5XsPiPowvQTLBrJ6bvNdsebJ9WnKdot9f9zuji2PDEbModG7RN1PZb89G41BDQaL4ET7QsyjQtVjUHwHyMzUN6",
  "key8": "2ArupA3LRYPq5nLsKB5JSAv9F8HVaEno4hZrzKg2vxYnHgpsrqNpBUvpKCWw6bziSmYmTqbZYhFgH4iBJStqB24U",
  "key9": "4TvM3dwfca3TxBAgH4y85tpQwL3qfJYuakS3hrPSqoKf7nN4iX6QHWvYTRHg2gB4cNj4QfeYjXLgkdAMmDHRr4DM",
  "key10": "65JxAEko2jvwZHry8didfnNsr4m6eR4AhaXa4kxBCUYqa3WSkRZZgtG98kSY39W3RznPGj9Ws1Eqw69zZRL2djPG",
  "key11": "3juvmeNsk6hDFsaiXP4ZyRicmenqVFGpWTKdvH4VVNRy98XL7HyzMbRDBpcyKeLohJSAWAHRC3ZqprHMUBUFujdt",
  "key12": "2FqHMgsMs3JwtTK1qnRzrrdCMVUkiAW7ikTWnqLhuZE2Si4AZexrPaVCQRFiyAtA9ccRQQed5TWG9gfKKVfQ1GQq",
  "key13": "3ixRhmuXXEHaFTAwzwpQa1hoLU17JoBxm273MRGsLf77twuxZUxohyhehuCvB1RGT1QRC48bECUTNKwRsVJitr4T",
  "key14": "39B5UQv5t18HXLghHe1EEbnpxVuUeG4Y4sZL2TG44Qpxo5JYbhrbVBAvP7bRV8vkXaB2eVSeR78hVj5HfiuofCet",
  "key15": "3ZhLMpaDjJ1SHDbgaEcNJkHZ9MJCojS6m8cJsoUC9sCz3LMaoVmjAnSRAUZHp6qHuphEfh79SkXio9BkCRb9LTse",
  "key16": "2CikTFFW2m8tkRE4UriibJFvsMCSeMRePDPZ4HL1sJC2uKeWUpfSuopEzgdR9j2TDfqKBXJj8eHRdPnzuFBRDm9Q",
  "key17": "2Emd9jv2mP5XBftikeG3xEy95CRTR5QkKVCKAZL384odKzad9heAroAYw3mqSma6jZPXnUMXv2Q3hqgUcXxrFLeo",
  "key18": "5n1CS1eFvrPoviARK8NduYAWinCw4reM6pmySMFpkDPJPUuEcZWrghfd7H9o7mWcdjN5GHyeFqVsF9UYS4Yw5WuX",
  "key19": "38Hr2xx2KhdbpzN9WGhSMr4RGR8TVMpM8JpeR87X4qA5PKfvbqep4HQYNaLcmvWMuaMksLyzrbFmEy3zpggxZwu8",
  "key20": "4vwxrbMjJqALbJCKx2U8imRuxEFiuL2BD4ffLi7VekjtCT4NkkfxP8pFBny7ZETDk8juZJFPGuYiXkCNvWmBYqyU",
  "key21": "2nqws7C4cv2UG8tUPbN9winxwFzKGXBQpypgcRPPZnXQV5Qnh6t7oLRPbqtzwao7zCvLzix1ghByELdiBRSrHz7X",
  "key22": "41CG5vRa1BRcfA5KcZFhXQofWo1zbiUaADvCxSmJc1Fo2ypB5xczeHc9uxrkgKCj6oueE7urLthKQtQMMXeZZfVa",
  "key23": "2yTayE8XtGXtxr3K3ZKfZ8QeByvvjSR2jEb6N6nEhH5XxL7Sm1rj7QhNwnYF6QgemchD5UCQMQqrzWDCbkrhG8i4",
  "key24": "yyFGwfnDUL3cM2MnHgK9uxgSjbpCemUhY1BB5b3Ut12PthUjB2P2sFUH9BTrX2P1R3aHcpveBp46gweZDqXGJtD",
  "key25": "57HC2nrpUxz65owT9vHNUJKh6LDEHxw7VWoRozoLoMxBEQmqWLBvWajGmdaVoaohwd4ShnyDbTi3r6JLdWME6aLS",
  "key26": "5KGp6t1KQ9JxnqzNyN2ALAxB9PnkNoU9resowUkdsW5RYvQekREPL57bTwh8aPW8Uo7BSpWNE1rNPZB3QasYPsWC",
  "key27": "3CKWBmhUP81sMJdRtvUfgYTeRmyXDoTiuq4Let3jjoXfTpPy8rDwF4ifLkE2BXNxxgYAk3ZyyyfaKbLHmzTkMjXD",
  "key28": "5MemShewmmyeHLxdPSpRDuCDPsB44gr5nKXXCJHP9z9n3N9DmJGiSZfd7AGbPg8sWQ36zte7q4Diwv8sPkbXEpfK",
  "key29": "523EeLQrAw9yKGsaQ7NtM7ZYzNRFg3osbUaGxQe6nYM2r4VGJxqBTSPUkb4N2Y7rpgc41wvXCSWUKovCffbvrfbG",
  "key30": "3sWMnSgt24DD1Dh3cET3Ynh5poWo1vgWPSNvc1f2CdAwqJmf5bRdphQnKZWXcBkYXodqKFTENowWVpEEa3K6TaRq",
  "key31": "2ZE2K5ybmgnrNMigTy6wzJ4q6X5hBcqYYNVGP1qLFjnZVEEj5CKwYDrbEAZr2ksV5UWHKH7vbvg48fmrupyVMNP3",
  "key32": "47rgQTTDNBmJm2tmonxwKJNM1FZsPFRZ1RDyYiT72rqgE8i4toAKSjFoGUeTsyki89CsoYKSHUgeBaTfzBfCesKL",
  "key33": "4Q6EJiLVddoiF5oES9mgcfiEArCPqqeDzpjmpDP9eAhGXY41ZfLcesqJPy4kUT1RgH8jSprm45C1M3XqZqvrGA1D",
  "key34": "5UvmWRXcFbS6oyfQqr5Lkb7oWeXm6YcXo4MnDDRcK19oKnWTbySVqgQtBk5pJbZQY2pKt9NrjX2HiiKJREVA7KHv",
  "key35": "2sdwM7BrSAjxxj7JivsDbWpHXVHTnqckJ5Y51SFZfqxqw3DqLmjLkppr19AW7qHhqN7AaafajSEGpH4PUVrhHbDY",
  "key36": "2tKmnr3sCKVLUchG7pAAYQjbMtimXHov62WQtUyjDaQjZZrUCtAb3fpyuMvRt7YDn8PoSsvRQGXcJJrhZDwBdJCs",
  "key37": "6BDUf9ctWCyUFZGn58YzLkPnrk6o52FbF4KRdeAR5pRpyJin1G8HV1Sy1DhFLJGvczhc4HwExb5CQJNyZ7Ko92b",
  "key38": "592MZUXgiemegqRrGmFP67DCh1T34E2Sus9YMVgCUg8aaLGD8QmjFyCwpY2H8oTTRGmi9WrndMVCiqGuZz2qo15C",
  "key39": "yk3ubaiFn6ixg4kr8CQLT5HdSTW88S7rWm5eRDEewTV1kajt4zZozFdyp6a6vSdtRrraaxaiQfyjM2hPbUYnNzF",
  "key40": "3Ae5Nexe7wfov1AdqiPDAccuZT5sNyZwqmDnurkHkBPoEv1TKoWGYhvptgpnPA6iMWGWdDdGTgFuovGiJHx1HPPT",
  "key41": "4DDMqiZojNS7a787axhVUHdvsKeLeb9xZ2zja14JyzFLpAJv8mMfoWXRNBXqmjGmxTNbn7ketta1mcBKQuAGaS7N",
  "key42": "39zUBKsmSM8mkHWndn6Mbk42fyh85vSRUiL6PRvdZ1ugTjHgdcWtmwadY3vc4UwZuya7SofWYqq4BjBDHLfU4p8o",
  "key43": "5LmrSowREmUHEitFdoi5jnFM13NDDrjpmeV5L23ABmTMpNjfGNujpruiFo56v1t6nyv4qBwaVNPwjMXGrKkorcN8",
  "key44": "2aYh33nhUP2aHgs9D5VRsDq36nkp4DshSMqjMuq5ybkKeQEutTDE8ZMG7VoJGize2Stq28jFSJN69Dip1SxJGxH3",
  "key45": "5SQvXmeVmeNMKSiEYT8aAc8xbEBetHjhASFqowarYcbSBEaVcDFKAQEuZL5MhkSHHa5DoS94v3pN52HbAM9nQz9N"
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

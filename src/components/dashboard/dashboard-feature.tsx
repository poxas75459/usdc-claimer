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
    "233jy2jpgJXiphhhb1kNrHx6ebggzCXg9rwYAaEHVCuHfebbSp9FhyxumPTxnyRScPF7RA95pazFXGMEQq39w9YR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hbq8Sahj4xrfP8iwD3Nf6V4JrHr1r1P2t58i7MAzo7dThuSZHK776vwYAy1ncJvzJTVAPohzS7hnRcKP424Fufe",
  "key1": "5ribXFV8qTVJcFRWh5XjSE89GpDLqGefLerqjGXjFWXS167GELG6JsiXfVRrAKdkJjQbiR12KWDBHs35a1pK8smh",
  "key2": "5x54Q1XVhGyeEYrKwfnnwv6g5nNVmo3BHEwFBX8bGLCVB3puSBeJXqFbCYsMYeFRgJ96fGmhZjb8CKjt8TbLoa49",
  "key3": "49y2zRnqZ7cyRQd56CtVNqchjm9atfQA29eFakvDwLxryXLB37AhcZswDRnSYHqQ9Jv9gnSB4ogeGLwkZo2ss3nq",
  "key4": "46NibdBF8NNAXmFdnTAEb4msYdiBUA2FEvE2nuWkcLHojfmiDpWTXJyiqEXgopa2Sw5nW6RT536f4BaCi71YSYMp",
  "key5": "5enBYwioBYa4E6xv6TYsL1ebC5gKXoD5zAfibLPCTKF5FvFKkSgMHCZXEFwQWWJauM2gfaGfZ9jVy8MkHRoe1mka",
  "key6": "3Pw5EpvmbHHhBWfJgoQYJv2UNaXpBkpyPNSaXoBEMF6BEgzxw4K8iRtKCQFHtGgrk9zhGhhvwwK2XQnvPQn1FT8S",
  "key7": "3GUiHUJf6nCiT89XLdhARrRkKoTiuRA1gmv8mATVGTsG3tD7BWgc2bShhUfUz4Uy3QRqsEKQ5A2qXZbcpUY511cw",
  "key8": "2ZjuPig5zzNLH81zLVqhcwb5DgQ3EiFeT2aZna9rTLEBzg2w6ZP2UtLBosz2ExPzL4C1foygeYQu2UxUE4mK7tmb",
  "key9": "4j4BmnFgBAE4BMqWzrh9KvFF9fU2nuFXuEz2DnwksF1n72kzAUFhqcsY83MUBaaxWgCFv4ELYFmmNFTpHE5zzff",
  "key10": "5CgeguQkhDHNZa5GAEDwGeAquDiYiUw67BnVsmuBkRoAKG2k6xm1gwJAC4d9RR5PygETgnaRaNkvU3LDez6fFCvu",
  "key11": "5zUPzoo9nBb3s3LD6qVtcCvnYwXxLfRhEGobmjaw6La15PSCrgTyM2uBohGiPGQ58G8R2hHLsxBz4eW2KYwzfBtd",
  "key12": "2twcktt3b66fxKXCAVsxYjNghGrvTDt8GtzbjaSspzWc7vFnRxmdXcGrFr7pzZakNENND6ub2E1DkfKGKi1w5Dbs",
  "key13": "2LfoWGf9tnr1wu9V8cNbGrE6bQDdQYC3NnHHszSKor3jx1iB9V8vqSZunuroXXhn92n4HUu1cczYiZaxC9GeKe3X",
  "key14": "MiBZN3gGWaxp8w1ULszLeV3nvRLZyF2R3XoJtKVam6eCApai2YRMtdm9dLa4qCGYiXvzrQSHpo3Q3LfhabUefrW",
  "key15": "4Z5WSg8YNj6SXpHDz1jd7K8XyyLX5zNL41ithrNqKTkPJukXB1aUYETiQ3vCe1gaxWSQKDzickZUwEU5CMy7vsow",
  "key16": "44dQ9f3jzaT3TpQxNAx1PJsZXpN9pSCt1hYgdpT7oZ2WkcB65TVXfWfPWodioYPYFZWKGWdr1wasvATCSyaqG3Vr",
  "key17": "62UyVRCVVDNmpg8gFY3DENCLXVE4FgNfSBE7CXxYevxfKtBtekUvaX2vq4VHRzyUuwM3x49kPcoZYhSqREKuS4z7",
  "key18": "2Jz5Nju4HHpNaj4iAWq7Ha9JMhBkCQDojfmSwx8ZKikJ8KNC1nbzAToy2eaqqv5gTsAN5UtbXS3wHaW4tqxiGxU5",
  "key19": "4q11raAyo8HnnfTCHthwa97GgEBYKL2usBo2VpkKuxMswzMcmY6ZndQQeTU9haS576iD2AMUCwbAjh4aqYQ1LBTM",
  "key20": "4WC1tQve3UA31uL3TxSy38frSgDJCVCvxfhXbuoB8SD4oTyvWm5cfUhJjkeeSTuPsiTqc4xkZvwLbz71rDErPgWz",
  "key21": "3kFZc1yH2bZisFWoks1w49Hopj8niTkGzHgAHSovRHiyxn2xYCF1UKDuoaCDQDr1CUios8yvHy8vg6QUFEGGJ6TL",
  "key22": "4tq9phVrY8RxRPM7ykwo7y6gEfDSWygiHPjZd8XJoC8bF2eK6WgJNNRG5C5dVBdYbUNg7dCpwb7ih1A8C5bxFfhW",
  "key23": "H7A9qtwAXFJ1MMHgJwF8M2WZQbuwjwprL4SB4umW3mxeVhdNqnQ4PLYjx88EcPTJPgD96wyPRXSnwxvtE6Vu4i7",
  "key24": "6u5A8qXfeBLmE1nEHazZdGnHm8JpSfLwydh3eaJWnrTQqY2Fkh3J9fv15TSG25fPbDbAQ89i7aZXzGKPMLc2wkp",
  "key25": "5MrdsDJkh1B6Ja2XASKWSZCrj3st8ZCS4an2zdDD8r2WtSaDqg5L8bvjMym5vRbKbyyB6b1E4hpKfsrLbSK95TuK",
  "key26": "3oia892FguVfJVXbndwtj7ZEgzXV4ai4pwGWTW3JgfeoCaU78aCo7EZKxRT7SEZwkjqQbzCx9bRzAVQrcegT2aUJ",
  "key27": "2zSHnkwy1LVtPEQfo1L6kgWCofwe9kTZNJ5YuMPCzXEk6peQd5o1qwjP3eWnv9ApSYovtQQR6BgZrStJCxLmTN5M",
  "key28": "C2xMQU67obTE832bLSJByfBcWKRb5vN5ywf1cVCxr6jhqT4V5NRcW9LUKbkTq4zvJ8E8aiMD7QUuyA1syHbZbuy",
  "key29": "3K6xSbrhzXkQ4kppNZQ2Fv9JrWroxWJTJVdSpXjwNxg3meQvTLZLxTvaMqF9n8XFNnR4bqaoKCJC2fBxpTNwZ5SR",
  "key30": "5JZShjc24wvj12U77JLB9jfZmC8f4DhAEtb78tgkrRGnL7PZ2eRq7VSZzkxQNg4t3mPGj351D4ipRy7ud3PjxhTV",
  "key31": "4q6KpMNB5aDEfxYDvvQFEEdDdvHnsNdpJao5zitzWDyvMxmfEcbCQx2a1xEN3viEkY1t3kukb7aC2Z26E3sWWxFF",
  "key32": "4juFHJRkvNMWF8mt8foJFa1pvhcxEUbgER6mXTigRf4A4h186qR3cEhH5yvZd4EFRa1YatEf3bPgakf518FmEqbX",
  "key33": "4fgbY4q7KDmjviqcjzW5iTJDnxq52NCTLDCpHAY26HU78JybRDg1SjEBcfn6LhgyZ63MfXB7JQ5UF71N73YFRMzj",
  "key34": "uSYGAqmGAsibNPxNr8ZwqLm5tP7kNVzk2C2vQXJ9RaWnuyCVim112oRMvhtNFmdmgnQpHnHhECPsMZFTnqCcFEH",
  "key35": "JoXp2eGxW9gZMv85juvwxfqyNJ2Mfni8zdJND1cPcpmQbhXEcsMMVg6AYCwNF3AcPzDmPafUYGDbDyWSSerKZb2",
  "key36": "4GoHnopb7Y22GspH6dfb7y1Fqe2v6Djr9Bt1Zye1zCP6D6RuZFb4RJxBhQWfvU5PfC6w1iZePV51qMeyPSSc29YZ",
  "key37": "2kp9yzjdfSwHx5L3jZzErNp6aUw1yDmt2UFPAUkqyGPfe187c7z5pbpPjSe1ypDNVHzWD8PFVGLR4HSrN4CNQJZh",
  "key38": "3ckRDip8pj7xAab44Z2dWzYGRtjyygg4zkdB7nfs4b7bgSqUxw1nKcz8S6jW93RED1jLvBv914F3jkYuWWdXsCYe",
  "key39": "8TtbZnMh2cU1h2HvWG2vaRRLc7baxmidBg9XREhfZDRRZmGTXu8PDWk6HjPEd3B1rSn4GwuZudgtG9nQPKq79YG",
  "key40": "2eDXGk6yToxEQ6sgUqefKhCb3x8m6siaKBUF7T6rnsLxRU81HR8AxrZ2WHn317d17iTZfU5ZRoxJDSpHU9dWjaPH",
  "key41": "53BKDR31H39sup1cR9EGTXCMDWpRNEA7AjyrHLKU2G8zyqJ62Z2XLMWx36a7DTM7aGEHybxCvhfBjUfFRy7hDAnh",
  "key42": "237Sg1yYotY8dZKnYiYNtg4k9BxWhYT5su89CbdgK7ur92VkaRKAUbvYvz58rxKBLtMNdEev31ukRZ94wprKwtbU",
  "key43": "2kzpCanK17exoj5apxAFmrWbUGih7U4wpzUTwjAqRgQHxAWudYYD9qntyeMcFwgJtSGRyJAnB3hRrWQKetYJctTK",
  "key44": "2dmbjomv1BjEFWG76vMPH5h2r7UGk9Qzn7SiPgK8SFydvzXF442tvWuZ5N9m3fboSCLXmeMoCPdy7GeEnYNsgQHV",
  "key45": "5TnZeK48EZQwaPLWxuvTHYN2vsGfk7UzdMSVmWrxbQx5ZAFygdHScL5Kh1GE37J8d1tJCWgQF1x7R7dRWFKFgTR1"
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

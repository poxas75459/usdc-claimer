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
    "4B5fVP82bG7ozgRx45eX42pQQbWXmvPg2JmrBBG4FZMRftkyh4654HW3kT2tJ1YtT8ZQktpgyaTAMMS3c4s6q48w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDHHEjc338QrrJJ4ne8cddTygPyMGCwqDMB8E7rLha6rehXxzGGejnis7nA2JWRD7UWgpf69K9D74Kq1gA8oiR8",
  "key1": "55wAyv8L8waufaVKB4wsw7iNTizf5zK7Hj2ncxJJ9EFLxzboRFCpVzH4qjpNEL4KEmDsy9CryxafnkiyJX9TyT2N",
  "key2": "Bbg4i5qiazMYuhkiZR8GmfUDtty51jdynfjfRE37d6YP5Sjn1MxJ4AH1jezNQxUjqXBvS2hQZE3XeccV81k4p4n",
  "key3": "2k9CubHdZbLyCrP27ytD1dfsCtn9CLgDjU5h8syq7xqoS1oknSXyxBZniYL5oLyJJqavz5s12jjFRvmeWTuLZJhM",
  "key4": "WUapqtoUBKybnhB1m1jmEcCtng2wXm1jUZgjStr8FhuJWfVG5BEGbfHhTKxrj6V9qgCbqdXisP9s8D43AufZvyh",
  "key5": "2zfTh4iSvzpFymB4kKa8cDCnrLFyL32J6g1SLf4YzgZAxNRk6uvfh1qDBeesjEKWHfQ1CyDomXDRzZ8Uz4KkXgtf",
  "key6": "3Fw3MjjMEr6wmYP6HQqFyZtJhrj5tHZBJ8yaawrtrxQcE8uyNwivJdHVz6gcYWYsk8BiXioBzMFPbkrmHdBrhgDA",
  "key7": "3AuPwJPyfGUHNB7y6jTZ3g2LetQtkhbmW4ZKX8ocDMZmdNNxQ2iBq7MqfwWDANdJAYUrwxmQqmX5bvBSfd9T1YnR",
  "key8": "oPdgS5KAUFDSyt5VPkRjc3w1X3eNk7LkDWdCMDVLGQoLnDToWzEpFEc7AUkdzJdbzYiNH1VWtSBZAmqmFZejkr5",
  "key9": "3n52SAfXxnjBo3yugRsrDWzy4TkBV8EiN19XqJdbWnyfxUMfoLZW1hmuWgrAarwA6H4NNgCaiLSQnTxkXYA39rmW",
  "key10": "2cTZey2igg25wNSXBWZuEAcHUnfq6x2ScHjMrCf7AxtTsjjYzAHLMnadv7E9LzneEtSBDHyGbSV92n9SDDUDpoJn",
  "key11": "XVENcTAN7SWi4jgsw4Caw7fZ6gox96do5Lr3PNPk2rj9kTKP5FDtYUtJ5zu3CBcWEtrqJAeEUSk9FVbZpiCD8p8",
  "key12": "5bgJ2zDJz5iGsTzVVxvV8WyBefFgwSFFPweeMC7Ni47pvKqZqjzqFoAEz3czSjPFSmUvHs8y38PD7k6YSviN1yrP",
  "key13": "5xypy41pWjfaPYbjV1avLZLCBcox9zj9MEopQAwzu9fqZXVibLjGtaprxYVB5Nzi2ML4VjxgxCu1YMhdHkbWiNnE",
  "key14": "3vHmQaVscNfs9z13wmJK7pFTWW9YDiU1kjkJZ6bZ91ECKrRjPaEdhv5WDMW6W4Y8VjQty83LGgLhSFdq6ZsGhQCU",
  "key15": "5RU6v9TxUcgyK76GPf4hEpbCsFEyEbEUGqwzGnj15vX18SQxRaUp4CbNcATmKZfsG5upuvnzKqSQPNHtir93j4gf",
  "key16": "4UEbmdayHuhvVL2i8Ki4xW1h4JXu1jiKprreZRSRdRGfx3zsb9UvP2b2FFLX1WEL9SzjMJUkotMd9V4y62UmgssS",
  "key17": "4YyvaXwz1R1iStqCnr7byH4hrjT4P5uAtDDVQvqqpazuhjqZJNn7sYVQWsoSMujwoNkgLgS6w3CwYQbuVPTH2wZk",
  "key18": "3pHmzJgNhN2CvPc3F7QAJKAK4M2xi4GHE6U5o3gwsg17VjNgqMPmsGydUdNHdZk5TyiQMBTNNCMSgK2aE1KEVCgT",
  "key19": "3okYWcVNMYi7YS8uW7zAzjCK2h7VgKXrkt3BfPys1aFwo6yPLy1HRnfM4YFxsSi8xjUrMeBN2JQ1SeEEyHyzGDgF",
  "key20": "4w6gfShd6W7aqNybWXeDLTy8wpxY4fQhEC7sP6Y1VYxyy25sNJ5USHEB8ett3zLXn3rMrueKkoJVCH4u5Kuzcs2s",
  "key21": "4cUWc6kssozZwsmTd8mqtSRLjHVpCEZ59stvEo2DR8P43RVosZEHUR9TZYQjd48SJ8bJDkxCKj6tGT3skbkQypTC",
  "key22": "mtuqJkU3r3ZMzXT1rJVcRKiqeh6yVJ9u8qMSZ5UHciRGVc54E8F3GccVStuXDeqJiN3pQbJTZrewdUCXthDYTqV",
  "key23": "3jcFiGeEag47wYKXS1oD2TULW5UPrKYnX5VWN9DeEPeXHrHV8h5g7eBZke1xiPhPN6G82mebd2YhNtYuPTYpFStQ",
  "key24": "2eZ7hEUEkwD7QABGTdbrszdzfbL2PBPDdFQYiPDnR1V9ToLUdgetoQYUSZud6jigHrRBat7nTPh7qAYwH5frEYJQ",
  "key25": "4AbSrCG234dpoRgcJABPgyUjkwsQVG9xmDmF9caSCwJRpgUxnMXCrBfkw3tMH5jKEkEbuY7HddMGmceoqRzShU3T",
  "key26": "MgQhAYsr9Tkhk8bQhWVSU7LiNnL5AX1ngixfGm2QobJosmfi2ssF3Rbw7vtmBEnfKnj5H7tvnsVgYCxZKUn1vTX",
  "key27": "3x5yB8AsTvMQ5azLexK3vEhw64MH6MbK7EEgg3yzb5pokhJ9nF8QxXniJSaeUt2VGCptWPmm6cYbK2vCtHHYJxgb",
  "key28": "2TGpivT3oQwUiwCpFrSs9yZWV5i7nXKCF2GAcST79y6vZYHqwKis8G5kVYkwcCpNTQHvzrxhey8gtF2rGsejBixk",
  "key29": "Ps4qNfGMDoo3uMwBm3ToPQqeeDo8umywrk7AL6xroQYRhpcUrSXrsGCgHXtRExRhryeVvUq3ZqHT8eubVZSHJtH",
  "key30": "2i9eVsM2KxokyoofrddrEiD4TXaDQ1QwF8JJ1funrMFZFuNDGsm5FqoYk469Y9RvqZ9xqAVzmP7V2mhXiQ6J2wWz",
  "key31": "pxktNEARDMtTZRR8qcs834BS4nTyb7R6123EFSx21VTU1roWFRPDLdfAwHvTH43LZrWfnKbvXkADjME9W8koAUA",
  "key32": "3gx4naFZyjwVp7b83vpwhhDqvcpVUxUVkuUyhWUbne9pb7VZe6xTuCdzgVzqpVCPg6NL4K8UPr1KC3kpS6DZRNYp",
  "key33": "5TdTnDdBoncrY8HzZRULM17iYE35doDNe7AaM8Lzoy93gA4oYUuwqquBoQzi1UDa2vpgBh9MJnswWWeBTDJjQQNk",
  "key34": "2QKow3riK4huQDz3uBRagnqjCChbE2p7f6PBJaCCnjgmxAHyTudTMFkWgwkcGAz8fUSkoBXomJcvC9jNGDDTKBVx",
  "key35": "5PEU1qNewQqBb95Ft5MusvAK31aAXAnshoRwJnTAJFmSZYYGo4n33gmNb6qH1KaFHpUgPQvdrEgKMwP5qhf8w1hb",
  "key36": "5WyaMfCc9XD9qocfJCYdAkGHPBgKs4Qy9TH6K8ZswxhVzZx9jMNpNryQncsKjJkQWWYsFa8doErQDQ3J6VYWZNj",
  "key37": "4yYfH9RQrKEHFYMByyHCSptuXAzQkXgUxxeiYB7598XPy4vCuG9evHLgXL5mDs3QN8oW1n4wtdjLFoZXqUkiF29x",
  "key38": "4EUBA7P3gK7sdCjX7wokyPiLCVpSSkDefGHuva6d6KWpNZJZNsp5DD82i9FvqVZRwBnDGUc7uaCKsU9JsV3NveFo",
  "key39": "3JEUDhj7FLHF7bH9YY3KCFKEFQBdj8S7xSKNVJioWvz8tPkS292Q8CANLjesycLgE84raSGowUhMMcpeyxvFQv3Y",
  "key40": "2K8ARKCxCjbDFj3tfUZGdKu7TvwoqiFb415ACoVsCuXSkCn86U8ZjaNNkuC5VyR56dWd3ga9NKCy2gsqFjMjURNK"
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

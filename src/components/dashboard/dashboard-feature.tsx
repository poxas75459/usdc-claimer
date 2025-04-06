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
    "2NdysvfN3JJWXMkA5gHMz48P4HzZ41732ZCaJvNe2qbarT7wmf8LfANdkJ66yuxh5F1hLL4GjLVLnqUin2zqRhrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XoSeH9bAf4d7VoCBJpGwZbSudyFzGjrFdBmYvzDbAAU8WuytnWRRQCGZk5tS7sqEoHHp7zMb8M6UNN9mV3d44Es",
  "key1": "3pswkto3H4v5cnJgptdMx51hvLVRXgX8VCM3MCBomZXAdxRbVB17FuEMS1j9XXouNMksuQJmSKGgUBvVqMdf2TNT",
  "key2": "oDPdZ5PHSLFK2Y8TwG2K7zVwkYuAR5KkaE7pRCY2Td52WfnaqoPGbFHueZZct6uBKYRyZiLL2og4ZSCHs8VLuSi",
  "key3": "2yVC6pibBNLiykg1773ins8yfyrCLwBHo45f7pHP3nUvX3vuzsRuuVy7xijUiePmySfkjTSYFRwjFd844JVerjts",
  "key4": "4tghGKSYftun9jkiUoA7BZJaG1B5UQoAFfFfdupWxQAuR5jUWvHeUAs7sLcaggCyta9ibrM5A2unjM7UPknD67QA",
  "key5": "2zznHshhXXzVrKEK3XeQN1Ndh7cFqzHFahgdsrRSwwwUYh6dPKBdFemXKr5rnK1zQuodE1R2zFWxGnS66kbJZpof",
  "key6": "45aw15VmY9zua24vHPPu3uRMt6AWKYG7cnYb9sDNAGciuEFeQfkNaUdtErW6QuNyyq9hZFBu4wDDMGdwzaowQhkb",
  "key7": "3dgWQJd3bQpQPcuW5wDX9jjTAZyiXaN5E4pB1YQ8jkokVgyGGd2F2jWZwfMjYYE9FPTpgLDFjFULUYRo17qzTeyX",
  "key8": "HHeFwvGm99H6r2ehrPMfJjGZ63fQPNB86hWPXcChUEG8TErvELeW16wfCKERauZX19xBx2aDkDbLqCyDLkYNBTm",
  "key9": "25D1irvp2JPh6Q435WQmd4NE7ws8LumzfRqLkWxK3mLzj5NvLZAmHczpBUj1CVqvjdXANMgvHwGQmZm3VXttXtFZ",
  "key10": "3adUukzVkvbvn2X2GhfDHEkQoSpnNeVBbabEidKoEiCmkrZNtmiRJrFhSb5GNBEN6sLZyJoP978tQHGBASXe52X",
  "key11": "5bBeKjvWqrVKZELn5JJ3FU3wLc2b3DDWPuyoASGwGDigPLi1fYRDi43P8eoUrkNspMB8SEFE5DyPmgNSpXQAa6pT",
  "key12": "qDu4ASzwNHxrfghSmxWYeHgkEVLMHaE2tWAJ6dSRgkT68LF9Ff8HJTX8oeqog9e8gJGRFQLQQevZFEobMyqum4y",
  "key13": "3mCTZWXawpJqTvtXVgohkZZzoVnFbQhSonp8UwVnW2iGZ3GksgxXxsn2VHEwaCLuiiSTfKc86gxHVPaCEJdE6gDt",
  "key14": "2qU5ZXS6YWMt6BY6ZUmjgQtu4DtfjhNXJ5vXrNQqvrbP51hEAMFKdhCYn5bTnJjMUXaNQpthbvNHVwebSmLD6gHW",
  "key15": "5mbVuuQhijpFX8YxMckofp2vSW54aVHEV9Wi9F45Ymp22si6yV4mDhvkXzZxrifBoM92ypG8PYU6TEjD8m5fvzMS",
  "key16": "27DBiusFEcBfTuNL8gCUgjtDwtrS5JfVhHQG4vo1aBbi6v3uBaqmTNp952coJ13rdH4iwuPPGur9DESyCisGhQp4",
  "key17": "37FPznpJsdwyda3DM3uaJXPSHciB5cGYQrFxwcqTqRsKCdRDGvbnpdzeTfJedwsK4JqQ4UE5YhBMnqF2Ntm9UrgW",
  "key18": "571V6K2bDYfEtoGnac1RRWC6cXYzeDRtdRd7Ba2oqNXdCt1G4DYVAhVTYXWoeNUJCpPDvVQyKaXXFaZGdHZQASW4",
  "key19": "4yoAAtvj1aEX3Y4uTraP7p5mtvUEnCQpLCKi2DrxU2PRcVpcGTojcHjLdtoHKVpYaj9BTP8hEyv9EcY86rWkFAX5",
  "key20": "5Jpfd58Kw33R49BXrjVHee39CX8jFqnYKryKFBn6JDQKxvVEVcuxehPiEibShiaoY8r1t9SfqhATh6EDWA83jtLy",
  "key21": "9MMZ36bNdmYw8ZpUMqCzfNvYoHamZYPPk9DwkCMUmt6MGRAALe5hpfrVdTFshSw2m3eLagKucaC6kSXHtr22uvS",
  "key22": "3g7an3sNj6shxcoEdD4TGvyMpfR2C2GrkfixnnRKey2fHHkSJBbxkWLRCcd9D6zkQHoJuGddf16tFVDUKxgohhqL",
  "key23": "4aXw4Sg46HxnMC7j4DxqCKbXT3M4wEEWrxNEhCFbmYvQMV6A19ht9QfXaVYUHrMidGQss3dCQkjv7ARhdbVDb2ow",
  "key24": "cd6wJ6djyGJ4PAfDFxiSTGsVVJM3ZJ8hkxG4izoQ2YoZ9RLDpiaNMPiwUJL5J723XMsnRwiyu4G9JAREFHojTDt",
  "key25": "5kFT2bSG4kQ3yGNBLhmrn7rR7KKXSkBU4Ug7dsH2GPrasmKjAHBe11Gi1jQnQg76k4s9F3mhTi27gS34M8r7M6x2",
  "key26": "4n7WTDwRJCtx7Y6w7XjXcNwS72SUiZG9BCYS3DrKmEP4M668mqKZUpVnBDpsFq2Wb8XjGc7in67p46KYSYqhshw1",
  "key27": "9Q7r98iMtKF9BB5JH3bEHAaxX4mNvu8QY2WVSMGji2rrDJCArcLPmvSkpP4H5ChKxgdABhQKMpj9LbhNqVJyiXd",
  "key28": "4aK63SbZsGXD8jaiYtsnNHHEJjnyKrpN4bTdKJg43LejEovFfY3Knipk8PsPsrL9Shv76MtUyQtBsvALQVtXgWZ5",
  "key29": "3PbKwGZCNU3YNoL3CxfApnphXhq1UczQMzm7SvdigHNq5mjqD9Sq5tQSxbGVHnzd5GFVYvJNECxNcChk8X4JbJ6C",
  "key30": "4LNZ2WoMLrivPnDPBkX29yyQwyMet9pCdPw2NwxU81oKjweVooaMvqnyiicZ9MMA8eV9WmZ81edPf9S4zjzGLKx3",
  "key31": "2Smi8XMpZzDELNaPivLocB3y3r1KgtB9GvXdNG4FEufoZjD4MSXHUDKYLTRgHnGYNdy7sNrebbDrjxX6gu7VMuU",
  "key32": "4MrPXx75R6zb53Lth46R7THtTopZ9g3eum5S4oss72pznJ1kYb9EDEreF8GFTk47ZaojJFwZFndJbsFFuRE99EKs",
  "key33": "qYEvjmHLM8WAKS3iXbiZxqMjjiNnYf2xqztfGhFvuXd8EZjdroxPomjQAF5FXhLGZZXdxrbwy1RE4QxYsVPu6Nj",
  "key34": "25VjawHCjzYALFufkiVMayte3qUbtZECQ8CpSGqCC8yePwE97mNwK5yYRDgcsLZCskvkqQfKmMHGDC6fChgtibwr",
  "key35": "2winphhwAVn2TGw35CGJNVNXp3vKdk56QF8VUrR3Xz8esREZUkKJdBEZMgwTX5s9YKJzgftsQw5H9zSu3dgiZwaC",
  "key36": "4pJgtuCdgeomGZqEJPd8kpNYPPAvdGLvPBwnQTKCRJmQ4XihYkqjoH73yqifmWpxJE9u374c5d9Uyb8MrBTe3nQE",
  "key37": "5gxyqPoF4K8RBoPoMv5ojtKYf7E9FksZiUik2BCmAff4j6ZWECSbMh9d5ajtGvfXCSaJ7KXNZsmdb84phnPHTnVc",
  "key38": "5hW99koESgLZHm1uP9DHHH6V7z7iYtdGqkkDj9cJARL6naZULbakeM8LAoHr9wE8eZhFZXxVRDpsRSuq3gyqKHKY",
  "key39": "3ftiK3NSexRnYMFcGStegNWgQR2Hq4JBHz7CPRLoCyKZtHVdkyuo5dvcBV3BHaXaXsQgXtHPBBC7dgmpTc2i59jL",
  "key40": "2oaG2CLHHdGi2p5GF4FNrDt8Wafi2LKTQPvUjyAEMmw99Jv3FhQjJJ97eeeVtrWg7RLwuGkWwj6BMRbAn3VoHwjg",
  "key41": "3H3rYwPqWeVkCS63L8FdhLrTTqR7MzAacGFmeU73DLyCMQ5WufKGVW8BAsPPTX1kkXzm6ZJGKFK7rHiS4jrmTNGG",
  "key42": "4nr4jUTVPxLDUAhnTp925qDyYDUtnxmZRqjswbRtvNpejuoovTGQhryCCC3zESEJ2Z9fVXqkPUNsPTSgvY2jh2br",
  "key43": "34pNq981Zu2cRhaD8wNpjnKok5JuKt2A6dbLTUPGV93q8iJEC3NRAzMLepg8JGY8PjgXp4KYHwM3QQ5p5vR5Bn3y",
  "key44": "nmW32T61HktN4yrK8tmueoVh3ArGh3KfEhDLFF3Vs6TuidSgXxzMU7V5GaPu9P7ntnFychv5zQj4bX5VjY55iea",
  "key45": "oe4jaw7ynzm4LiM6jRJQtkLc3226WYRcutUS1mUiTDD4pfXd7q61pTfi5Ccte7PpE2HUF49SXeqZ5Sf16mqH7ZV",
  "key46": "5o25jsRYnAgnzjRwQzfGyg8W6KD1yRwbdFvwtj21ZoPgL9pdRQhhjkfNhWi4DbE3HR5k4qdm3sAtm5tFy36UJTL4",
  "key47": "KRQAzzbRt88pxCbneeAsDXB25gJvif3oLUz9k9Vz8Avxt7WFFJFynn7faexGXki2a6vYzXfUfveYq1xewW5GZWx"
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

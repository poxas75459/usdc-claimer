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
    "5WFxop5vjvDhdTbDt3qA3Ree83mDqiyobtCRWQMaEpGwGH8TVJq3S3GztDNvSZBjDuWhBxGN7toqicLTrwaqf1tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZtrQVGKmGT1xUx9128bWv42ZKfHt75iuDqgkEkUBXtUfkau3VY1oJgZYZWDcfkj79DBtMEdJ5py4otvsTTYCV9",
  "key1": "z3YVWrggi34YHR1F4XWSB3JoezpmEbUewUBYRSe7QTgPMoXVTLUsx17YyEFK2CYbibDUmCj5vBYow6GgMkz92Ui",
  "key2": "3eTeuxLfxbzYCZ2K9aHiyiSYtkh5eXP1XYyCP3ftU1QWvnLKr2iTVenPFUzuHKWoVnAncXQ8sKZHP2gCSTwzTLyZ",
  "key3": "3YoU2h1Gkaiu9iug3CtyFdh6HquosFqajMwQHDQcznxwbQngv8SfREiLHXuPGWfBV7zgKTRBFx3fGbEdL9NVVCq8",
  "key4": "5fnKAUMntuuS2iDvMYGMxfmejVLXwMzQa8YaBe5UVujsRTYWrj7Ki4xfagxkJ5niJpLA5sv9DN7yQkqa8d7GDDCD",
  "key5": "36m7KerkMG2UjvqiPrcXpQ1pfPURoWpRnfx9YZuXU8KamoFG351obTVmWqMCeafaCSRw3pAuNhsMEAvxT7TpLhcX",
  "key6": "49dwgr82yYL7TTERRNuZ82LmwQ2JmkgUPT1K2nY4cexaog34cCifin54giy3dY8b1Q6EpoJVS4B2mf6A6LEp8cFe",
  "key7": "4Wij5rBmRCeAWkQDAkLRc9jvNWyET88YgUYgmqdhL6YHB6vkGLmR65Mawa2rK9iANEyKEVdBMdiPqtqHz9sRHAY3",
  "key8": "2Q3q9ZzCaeSgmzr7zBTJJn7jmbAQ5ef2wzoWCpKhqzQ5KqHAcx1wvmbXoZXMhK2prGppCXrhCmKbFMkkAAXZ9xvA",
  "key9": "2b11sMNXghYTJZryEj9JkDk4HUt12AgjJ5QZFLkxxD5m4j33u92zgsYVPQeQgxnH6somziz56vK4vo81n6UT96mx",
  "key10": "2cHN9JaVKR2Mks2iaG3SZPpUPiq8dUKhz8D3bRYGMNN9K5oEkPFfMuXAT591bkZDrHG4TmRZxQGf6HDdqrihPkGV",
  "key11": "62Tk7mWDN6WJRFLgghpWRmJFZi1zkEUeUWpsoHrXd3DPJzsX7V61PmuXJZUpFabKB8GGRRSfuucMTACN35xgwEP2",
  "key12": "2aAK8MUZEHHXAryCcHpe8YN5MhuHiZJSJXPiMx96Gw3V6BVw3FbHzBJ6R6fN5okFj9u7NoNM3z1f23ktcSbDbPR6",
  "key13": "uQoHsDEpExGfTB99s3euCsg1K9xDZkbWiAwMD7UEccZX7qwtmVBZC4DxUeBZ4Qo13aSSfqdE4NvCAsnBNLrEww2",
  "key14": "2VGH7pitkVPdvzV1peDsDjCN181LdzZCsTVqBEbVNz26Lwa9dnJ1hs1LQA77p6qU1ckk8WnDn9CmKVb6phLjqh2E",
  "key15": "2zKv4jb5KaFWgqfVdaH2USDe6VyakFfhJiA1QMFmVebr8chiuGGgaXnFbCvpFQpDm81C2E3oNYS2FZ69sr3zTVwF",
  "key16": "4MDKGrNqt7ytzgBv8TPyHynq7UF1arzVAzxNYLAVTaR5M1uBzAe4gQFEyaKnHJQ8ghC7XZmLWjUkt8F74ddBb9T2",
  "key17": "qeGx6iCu2Nt2gKKPWLGFXYQ6sS9AU16Pc1ZFVMEMY98GUJjNANU13eZ9hdubG93YSqUxEH38XHatduPxw4n4Hxr",
  "key18": "2PGe9XTevP8Mi22ipcA5bPRrtHht49FMFC9PaDfXTjHvck33ma3DPu3FpVCttXDCxMrJuLUYAvTGvYLNiUk3jiFV",
  "key19": "3KTgTjPyw6N5fiXhg5o9YHRjvvFNGrgZ6rtKAJpycWm7vauhJ6PtyGvDNebm5ZPBw2NAJvN3au14R3u5Kc7YZQpy",
  "key20": "3AkTqnZThXXvwm7U6V911Awnm3mzCQdSCW5JKBRt9hUJ9oYM5ETF1jqF5uJwE3tHCk3fvug5XnZ1SyJh592Fw3wJ",
  "key21": "5ER95rG4mpCUntjasfNApnFksWxXGiTjbTAxxhATZAZwDAX3eYsMnQsHVeQckygxW4Q7rMJbMgnwtYiBctoRrfaD",
  "key22": "2QF95CiwENrmjnmmxTQH2E4hpXEK4o17Ln4HBYwrxbXyD8EVzzwM8b6U6ApDA6ad8JyhETCjmRNZtHUT9R1uhzV5",
  "key23": "3m9xzMeBqUYkHpECW2faHtrLE3K5f8qaKYPdXU4QeWmTXnSDMEr5YanMkVm9wko4hLdtEnX1dc7xDbvK7nqvYrXK",
  "key24": "5z6RRkGcKHqzhifSSJNyUaC8V6StCwEcqnbCnvbYAPF2UNFBTXzDJkHAPahWCahnmuK4QD9352qSt3g2qakairjC",
  "key25": "2LzLtDLH3XtL1RAuaNeEdZ6mmcMnPB3r29S55YshapVaSb4Pkn7T3EDgmKQ8ERENemYSA6XyW4tMZFP8PLbJCZaU",
  "key26": "5vrjUfptvppfSiwVLWTo3PbKGJZcED2nYi1xPkQQz3EfswGF4zmDK9GH1noTUfEddmyTeGq3CVugS8RqtKQ3hyZ5",
  "key27": "Kv1BNftyNuX2NKU2tATkP23ua84v1tGb7D1gsb6QkHPcP5fpn49VLZPdSXhSnSmPqreHCcR55Tg6AaVqMhoqwDX",
  "key28": "4xSjQaGKCstf4UHRU85qVFM6xBFo9NMGMrNH7giaxSh5F1y2T8ZdmpnLieAh2vLDwE85kCnwFy2WDkLJwNnGBF9s",
  "key29": "3MrfqoM1MZjgDugNaCirAKeoXMZN4UcERVo4gYMhvud6iU9Jkx7aSrgaZY6DHixzLsUGnbDh6kHq5qfmN2ibVTSS",
  "key30": "2jPeCdkM4kAaCVYLehmfPbrzQgFfQpZgtbpLt3QcD5sphhVcGwaXXb3xxuaMctoLstG7Cx6YAhB36bVCYQafV1ef",
  "key31": "kp1HQF9GQGh9rNnfT8rKG1iPBHXkUGHZ43daSfKigasA63g8kGSDng9BtTNu8DSFVKJZD6Tyysy4xNqJoUr2j39",
  "key32": "3iRQQLRLNaW1qcCDe3YnB3p1WYG6jRQBN6eV6p794BZqaX76uGZMbJu7FA9uasVtCqv7cmdF3A2LJFAA93qKHbvU",
  "key33": "2mEbEkij6itVtADtjC5X3w9gAvtXehhte2Db7aMu3PH5VZC6WNXDF4fuziyqbnt2nEVMjMPxhEwPNN8x2QLx6UmQ",
  "key34": "4EokYw1ih6rNfoy5NBy2CZcDQ5TspLwFH8UdcebA7FWEyvvz6LDpgPVXmakarJFuWiWnxUzArBBymKsgULrXyV4W",
  "key35": "4tx1GyNqJn91eK5ZrvJkg7rqD5xJKKXYSmxpa1ihtRyD7enMBnN3HxU8N6nwQNPwGA2gPrMAmp4obickUgx3YnxP",
  "key36": "3cUExBr9pnzkd2RRrWen9MMCfoyj4rixeaX2Fv4GS1JHVs5KL3BrQMRFTuzATu1ttkG2H7zjhMA7K18dcywLDtPv",
  "key37": "Y9BV8xPeURpepM3HbqQ3Nbtd1LyPh5DoGJy5gZ2RNSwN5BSK8FwDPCuYoZzBmn5tyzeoJ9GZd1nbMTPXWe5HaN8",
  "key38": "2exETzgzJPK4EYdEQY9kchwPLE8WY4UApZpitk3oG6krkLqjN9ENNKnLUPCPM8FHA73R1arPN1bVLMc4j5sFNCZf",
  "key39": "GhrDd6PUN6gdSQRCpdF4N4ACMjVY9Y89S3EpgcPsieAPRiywm5FNXjmypSz8RhShGecBgLEqugVRC6R7kNJ5dNJ"
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

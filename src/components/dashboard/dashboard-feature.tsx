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
    "dvEAiJD93pZer88ma5UAp8at99LwEXVKGaijMWBmQXECasaYnC34vqB9z233MpoJBZiMrGTcMNceVR4kZaWpRAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAejrm9GKvKDLbxcz5bBYNbuje5ovX9Nb6UgKHSGmCThQUbMwLVpWVXcKyqH3CDswuXWN3aAoMkao1nesacMybu",
  "key1": "A8dRKBkHyk5GsM2S6Lc9Guoukk4zw8hE8A9n1cCM6VQbtkLL8Bm5wiubVj3fTfupUsEEKmSKoG1RVpy9xaZHRPt",
  "key2": "2LTFFsyC8UVfDhFFjNV5tELp2Naugu57wUUYg9CAGr3MnfitsqEyFiyQF9r5dToRpWJ1BmgHbsKyekkXTpAyTQnX",
  "key3": "5CF75w3kvA2zPTtCSfxXNB8LgvvGjfseWLVGHC5onFW9T1BNL4B3Eaa9hUAJbo2mezuT7yxYi4iYesWS8XEnGngL",
  "key4": "3kibGBciXs3CQydqjsoYmEgZE4sat599Zvqx7jfHHZeaNkjcbQCAwdoEhjP13yBrnhqCwHf7nLJwHJzCFUaLvz5n",
  "key5": "3Ya1VyuDSESRXryvZHbnDV48EmN2LcvAdgvbvc5t9Ys5n8ZRjstGrPQDVX8igp1TJwvqewUrjNSx5i1uTPinhbr1",
  "key6": "2yU6i6v7ZdKWAT6YwMDbMVyk8A75pJbHHtgQWN6QdhqHphHonyjfKL8AnbiqFY5LXPJn1hvCGQDULfr6L3cGJ1BJ",
  "key7": "4E1SqPhbJ9iyY9b6jn5JdvW1yc3kg3oXwcBBeuFqjtRe4mG2X3ZGjV445CFq39svifLoTPT4X6sSgUUu9R7xdgFE",
  "key8": "2G7NDpm16D6n6Mf7QdDbPHBEmcyuWoTMcyBojUvcXaWHdzZk59n259m9vXDhpJXWg5Mn5RVtYL9SHuX65XNoVBFL",
  "key9": "5QDyXSR4MdtUA57gpiuaCjRyaawnGmHZXBYdRnsyjMmq3iJoWynFH5GLbt6P3yQWqYgXN9Ak47u4eGqGm3NxEGzV",
  "key10": "2xjzdHXUa31feu8QMzb78PuSnjzyisnwwXLnaECvffB196m1yq3yidz2LgABb7B2jJZuXq9gGY613qjZYZNLzAbi",
  "key11": "3qhdUaBnUXwvHJkwkFzzACrTcmS3WhPsTnzguSqQY8DNUaaHnK3e2djqnhdFz6GaF7M5gGLWffxDawHn6aSq7eEj",
  "key12": "3tZx48Qe5sw2899geuvfMe9cvMj4rk6sRpaoxQDzdCUTJMxwNSnEJ5pvE4ch7Pu8v9d6q2grmm4Tj55jmJAAxb8A",
  "key13": "62T3t8H9Ak2RoeKagJyMGSbUoq3XUzWZDE1HDUNmsYAtpVKqiwFZcovKUZhrzYSnmVd53U764sciWXFmu7EPan8e",
  "key14": "4mSSkMcxuXjYyA5piHEfHoZSocXTtvr31xi6EHFCBA2WJb2PWAcKk4asNub1paqMVA7LNHvotMGVd7ztf5JfCp9E",
  "key15": "4hpsuR4jyZgsinAHTATj86R4adgpXAPdx67swte27XDqN17LZgDRTW8AzcbPFVtsyAjdF1SaXWapPgKiL3WZ41Tr",
  "key16": "2hzZnoom8dxiidsuKWB38hFqVXQDBMUpm5ttU5dRTBxbGoYazkfwskwmseo3gdFikPb5LAf9qFxsfJGjW8nhojLn",
  "key17": "4eyRS1yKfszvmfxVBaME6dEyR3Wcyb1XBhicAAfYceLErMfT4gcw5P6vUXjU18oqCRm1ttMWwRv25eGFKaiCjYrP",
  "key18": "33bmfyim8uciaAxvCXbhAP1FgU4MvPgRtkTE2QAiqjx8D7eFXViY95sFTF8D6CcEUBaGdnyAzeSbfNttpxe1NfEz",
  "key19": "BxkhsdLoQYm5r65a3boTxFs3bEEaaMYyZay9RRBPjWMz19wVMCsPtEMsMDF3C4rhXETQmmmtdfRNmL8rCW2XuR6",
  "key20": "2APgWj5ucQTeNPoqUHETaf5FLtN3zfkQM7dyYJT8P3CqErDAaajphekqtkMswaMeTHztC39ddssksPfcwoHxSBnp",
  "key21": "2vugK7o6PkEpHhQsZovx4Vq6gdSKgnP63rsW8Ym712ZUyRMH6Vx3p9W3J8LvqYsgfu2WAxf9Zd7cSnMYA5L1ULxu",
  "key22": "2P6eToAbzBivxvtU3sYjuVMGZe159AZH5VDzi5NLwUk5mMtLb3Qe5NteZrpgK7HYjZ62dNcha6NZ47dAPSLW8TgR",
  "key23": "5zzZufZtNmWvgfufeVQgZgujyDH47MffC35apGbtPcqZBquD79PzVMBWrHwShSyt412Nzq6FZH7oT2fnSo4npcot",
  "key24": "57mqb5WHhPUHUahn3vwniNs9ZtBT5Fopgww5FixXUPqBvFEdwedSFE1JMJJZgKLxcozCWzcEsxQknguQp2q6tXtt",
  "key25": "32k698NrgLjBm9on9gaKs9TifHRhf6GPHJb9JYVJEFFf7pH3QergHKKJB1krkPdHAgsNDoxpTr9znvP1ERHEsRYc",
  "key26": "54hr1Mcfwo3rCQHEykqtgb5Gf1uWuCshDwbv8E9YmUHA7pHmWPDnUVKRfG1RJSgKe9Je3QBGy4QVVsJcwiCgVJZk",
  "key27": "a3D37ucWmZc7Rx7rLX46RpkdNv7K1KCsy76t8qNEG7tfR1Qk5dQxzmXXmExj2Nyyga3mqmYz2xreyUxyKWKhJrK",
  "key28": "3m6XmZJAkDzBpNSxWGkVdreQnEPWH9GVXd46b7w6iRhWChdRkoBbcgkAVngu91Y3qAECoeGNjkHK1KFuQuUhU7BU",
  "key29": "3L7YC9ccfAcohgHtHFHESejhJgJ7WDv4ascQ2JD5V2Zotnw9Ne4j5NAddsZYx3iP6yHRyDAxQbCnroV2pBYPLpoX",
  "key30": "3mge8nT6kPYSeRZesuYL2Uyh75XpCfjqMjS3eDgpHeAJkpn4HPeGNZVsyS54SJ7oXukRmNCbDRMUeBvsKwvP9FS4",
  "key31": "2vektK5Bvd18gyfMf3HAysF5GdkBheP5LC1LVLmCgsAknMrVS74z4cGhSGhGqfxFXyKqF1JPq7nJaJwWemZF72q5",
  "key32": "26rRngVKEW9FDBNgdb6x5X2UsNkRnzW7oGo4NW1AGSaWtXdTEun8834bjFiUBobfpcCCxEvu6nhSDdVFWAnZB65k",
  "key33": "5gyNkviYFcavKzwaP1t5QSeUA9Q9dHBjW17X5dv253QkuZHcbgitamY4QknXm5rTymLaz42f7LKvKyFMZM6xAk2X",
  "key34": "4FkSwUzvQJwdym39sXJLugFLVw2hkiznhkUmgJJQo3ZC8A2yUcXxoPEvuGWMJcesgKte958pQy3KgbkcjQQA9C1u",
  "key35": "5L8jhXorfFZpRsMddCK7xrGwCBekQewctoiebewcbLZQqV8XDvPrmT6TSa641Zgd71zjaqVwKGaGv4Ap5cuEWc27",
  "key36": "3gS3pwSAAqGso2cducuTQNkrTANexH8oVUEdjaSUMZqoQQvuiTtoyWpQnC4PSsJMwZDP5prFbPoAk19aopKjbdSQ",
  "key37": "z26fVKvssMeehMo8yWJZvjn7C2PDVNxPWMm3H6oZ7F4VnVCRSduykh3EiHL8dxakDrVY9fqK8b5QVqYfnbXKTys",
  "key38": "2aUieGkJWRY9NERHUmQeVPmX9qTbnAog3qwsRNyZmh4f8Uby47TA84GdmWDNyenwSeD4jVDbojQddNc8XpxTPM3A",
  "key39": "5hLprcN2xS5cqFuiYDR9f8wmgPRzL7fopHYUTsjeCVJJBPN9pdwhA3XGWExsz3RbuebdVqqqCUDmL4KZW9nTT5Mc"
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

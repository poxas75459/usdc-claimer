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
    "3nULG7Vr2gxYbd6ZLEdE5p6jBDfY6nXB4d5KF8GAPMt1iRhaqxF82ctmtbQc6rJBt3K92tzcCMiUQZM4ukPd7sTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PfyzVw6B2Swtp86QNsmFmpt39AG6sax4oD2TLt8rycooULkjxbj2bbFdkJkq8LcmYxmJDWN4WsJcoCCKXTcYAxn",
  "key1": "KMgdp4WRHfypwQhrwzkj9eXA7H4GnVa2gJ8GsrvBTLTXY3JZdKoiJNfLTX4WrD5FExpMTe7qxBX1EZv1t4Hv1ob",
  "key2": "4Pv4fDp5gRC9Rs9nG8eMr5zv1PkPPGkHmKUfgccWDdmM8zNekZyP8f9crCowyMZTBvgLx7VF2JW9LtEfigR6EBe5",
  "key3": "2SLmLVDaxdQNG4usANSBQrPXpgUbWGSBsDLGhtceufwwMm95sybuEtCPZLLLdiEqGH3DiyiUdewNMfCkH6davK3q",
  "key4": "4J9gc4YwcP55WfrgWWgid6k46d36AuaKFvBwttz9CzxvQFoDCgQzZ5VtgSqxTaoy25D4dj3CshDBAMxS8Ni444Gm",
  "key5": "2nyDLCprgnFs8qnaHSGAtEXKYu1RNjizq5qtU6ough52optKgELNtKXppwmGaEd9sLACWkqvYMvb5xM2BVLmhhdM",
  "key6": "2zQY779LF4fEvskfzSHnNmEr35BqjoQBvyP4WrnVBwNVRiVmWXw4tT68Hh4Gk4KzZECwk6MDKC9v2VYetAoGNANK",
  "key7": "4s4rBeMuc2kwUyEN6NbJbvMZx5sXb9pYaH6UzMAbZA3wdPRUoGq8A3d2By2ZiXrmBYPEVWeBGb9GrtyiUaymKXge",
  "key8": "3q1Ac2hd6e5JkW8tZLHU98c3pQE1SxRudRRBCLeGD7RdzRgAF9bhtvYymd6a7sGKvWyWkXPJoAfv5DQWkrjT6pEX",
  "key9": "2W9VPQoXC7tqTPBLUwrT2LTnHsyXGXoWjuMRL5AZV991fKEQiKn1s45X4DqAe9bXuoin1EiHdWThHQFn5Ea4GUVV",
  "key10": "2nA4MJLHfK4jSwe7fC4dkzmCmigpfobNW8yP9LWdHD8zKiCwPWqbSHXBiYuhkzaWC8tpJTeiqLf7rp59Lc3e7fPD",
  "key11": "3yt1o2sL4F67fwd884h6muKf7FBLBwE2e2arNoaRmrnXdrDH14E7E6vapussCQvL5fR2LWCSir1qRpxSDoqe6icD",
  "key12": "57oSkue95t4ED6p6b2xcKNeSVN15Jf731ZBb1iLTLZigCpgfaRMKfpvn8XJwwP7hWVwbWgEo2TdzjXhS6puETb7m",
  "key13": "2EhfqiyzRBzYznx1TfoGnHqj6YWDV8XRakxKtqgZz4ed3nG78PJ8e1ff4YwhEj7iMNESFhYn7i9uqzsaWT8TEprG",
  "key14": "394xRuFz7k7vY9hZ261TBa26gbXgjAhVtwGo1aM6D44qx7jSZkz8mDFKqeMwFC38Juqwyesbg2ndDE69w5QRSwev",
  "key15": "5Ybdqxn6o9s4pjos742ZxMFCuBUrHqFgxC2QmUarC5GbjdY4FCDxFrdPqkZoR8eh1mCroEd3E5TgTnRH5hkHhUEP",
  "key16": "4wL7GbYjCPGgJmzwmRBcsrU5QzkrARbbyxepzro9XVk65szsrKj8NJotAbRDn2f6tc3rW4L33uf2BbLCBgHKrTA2",
  "key17": "2ia6iHbWMhyRpa1pvQMKiHwsadEckcQKmyT31ZnBjQotfWQDt3CsE3S63nZGHSZX6RciCZwDQyyCAA2r1mdV87tk",
  "key18": "5YRNao6Lu6p4xwWZcQMTFdL77mcGDdKxNLQtii8TYkNACqUESeu6XVGqBAkCfXmimfoRBTW7kYFCV5YxHqdpjwcp",
  "key19": "5pyifDu8yQ8MxCgQhJ6ZVDFP33WTCaLPZ1mthWSsNtwuFRkdpk6d4V1TKumJhG2wXEydwjFhaVs4MDG2vmWjR3ad",
  "key20": "5aYeRoFkuxiMJbihmGSiSzb8rKvex8dUDX5EAufLztgL5Cn74DRWwmBpiYUASJfwUMjmSRu9JJbVkU3WUq81ARiT",
  "key21": "2EkN5P21VwLfM5hCzdtfm7PCA1BeTDszy79QnqgYsxS2o4GHvbC5dP574MbmJqwrwuTvghophxJj8cwQ1D6YmJj5",
  "key22": "5WeQChxDq54YyAuiGrWjy6ReRsotEEZ8r8Xecg3r3oVxV3CH23uLn8qMqid5ehQzmZw2pGNRgVihAKYPhhbHEHsw",
  "key23": "364d8jVahP7N24onwKUFNRYFrCd83Bk3XgTQ7tANj9zSm17dsLG5FHunPp5VYhQzUdU2CHeMPGNuHeFwK4bLnCRv",
  "key24": "2EbaD3c3CSyCNSFLG37NUgfgAZh6289o5SJ3wqjpFqHHvmJKtHSQ2Xwz7snfGMGKpNsnHiWiR7Zo1KWr65ENmw36",
  "key25": "5Ggysp4WvX8vuH5joeuEFc3DHmhmr316JDN7XNMBGYQE67axGbfV1p2UatViGtaKqpuipEJK83Fha51Tjr2Be4xK",
  "key26": "2DEAec2KTg2Ma73gwcws2PeCK6BcpZ5V8aou94sPTSoW4cFxrgZKydEJoFpF6QKQHFZ5hJxc88ucLiP2ddS9FDu9",
  "key27": "3vpCgwAWYLPdrMvNqeob2ZmxxgHGHFHeXmjpTNpNyyBGjnoNvRvgrBhJgUX2dKtL5gGgPuozScJTntxG5r3ajmAb",
  "key28": "2ssyLB3zKzKcNf6xXbZNUE9V78M66Q7jXmmGeEFa3QDQGup9MM7tw24h9YuBf4Td7oSM2yTRhCcCVyyLsP9MiTeu",
  "key29": "2SCtQV3i2xRAjDDWKKqcyyNnQXNengtvMLtW6gGXme6XhthhwGwR7d8TSwiF5R4rhi2TcKSw5hVqAv87NthsAQBx",
  "key30": "46k2XdmjVQWEexCffdQcS7J7E8UaSoNjHMV3skvnuTvtExFXi3oP5nkrGSVUScveAGdkUbto1J9tEF2An4cJYPtw",
  "key31": "XoX1THqLqcwNe5SSuWBMoBbUZfXARFXrW5DnMxEEJ46nmwQmDySyjvj1bAdiH4hM3H9TX9UV9BhvkjHZ3Fw81yF",
  "key32": "UiXGQvhU7y3tRHfm3dQn6KHdJktm9gjX8TiguuufRb8umWxkgVxZWzjGzfFfd5dsPxQ5L6C262qjNNo2WnvJw9c",
  "key33": "HrbbkC6CLHW3h55fuTWX28TVyiUVxdbZvMFag6rXgYHZo5Lxgynf49sBD8Wd7Yyrsj3zCUni7H1hRYYkKwipST1",
  "key34": "4wvtYxa2vEWYhwn23YVjELCJR2WENJie9C5QN5myQxCBBsFPi1xbzDZPGxkRFCXKDcFKWauZ81V1cCibxD4hFwNT",
  "key35": "4oTnkzLgqF3VdgLSRhbnvCkepL7pzbVNYVyZ8TCgqyJ1aozAgLaeAfUS5QHhj9PUL1yUvQkvVvrFXfsBWoHorm4y",
  "key36": "utLoNi94b1ZUCCwpsRexawqePmzpG9hVUrpBTf7BnYvmihYMTXb16Um3bGm5az2tuoZSDTfAkbjq8a3GogDu27H",
  "key37": "3Vgn5ZXiTPYvY678Bg5A4kSS1UPTipB7Q44J63XK6jpUBEgXEhvUwvV6Tj29JqDYy7oVDSnwWi2G2cyX6FPAVa1i",
  "key38": "4NR6njCbVk6As46k674xmm76kFhybWJp8AwvFR59Y6r6SS1JzWhpcmWrgGEPyhPTsNhShdoepASM2VhCatiLp2xu",
  "key39": "3iNUnfEXMqGF1tiQqpN3An8rroVeNp6FEawEGMnfC8zJooPgWKSwYe1yscXCTMrUMppEcfdhR6NWgZqvcfMSZQ3C",
  "key40": "5P8dDv8PTa13x2BBmZfWTU3FcjWVuxHRwgjs3UkxPY8KfRSbk54weAaonzzdRFcvqqLgQKzcXXArU4Enqt8CPYW6",
  "key41": "4MfmANmkXGnEoypY9jE8tSGJzoNvCkcaQKyFcC2eZkSCKWRhQNfJBcrzZynqXQNhLyA3Gex96iR1nxsbhS36jouw",
  "key42": "26S7h3STDPVMJiC4Z2SsJJi9RPLukWTrd3xDPR8npZXaNR9RQqSm9FRNGfvtUsHDkVfgV9RGFWfw33GodGX1vJeR",
  "key43": "2jG17B1MLep9ZHXEbBN57ZFsVHx3NkoG7vWDVFm7bVUxvjp89VjG6kC9t1cB1b6enJKAqdCkQG5ZqN3sHeLdhrhq",
  "key44": "2v71Eafd1UV8Z6pyaBFo6AUgrN7XnKbwKrhnd6HHfMqtK32iz1TPHw7wCjeCiBxQDuSBGVFjqmYQxQp5LRMSYpUY",
  "key45": "2VdmAdAgc3k98f2hXdpYJePSJhWZF3PiAmZCvLvDD7yJckWLbWoimKeBgku1rCMeyUU8YuG7twox9MghGDe5wMLv",
  "key46": "nJq3H8szTGKMp55cxsVoYqRfJ9HnvFQ8KLKVspNJQkDiUUbciVKR6GLWqQpg4sWpHEq6YsYKzN7A9GXwterW5FC",
  "key47": "z6Cx3vQFY29o5Fsjid2z64mEMuktPms1Pks45YNELm52VZ4BxC1MDoS8kweFojxVpZNCiuya1jH4zzo1e2SoD51",
  "key48": "3mNaCUbfCXUsRBx9cEbfKzj4HH3ve79bpy2xxNjivqA6aLYd8HHZXxw2BhDG9DXLCe7MS2yzttv6ovMAc3edxDco"
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

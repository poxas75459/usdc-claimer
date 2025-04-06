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
    "37x4gzbaDDny1UcRCLw1iLGrm2yLuygUHV8r6FRBszVSwsX4y9ZcjcFMr2bCp1n51vMJcRsqhPgsiWnUMAwtPLPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtMRcnciHerM2sbCK9KsbeSVCyagdDGD1jtsbfm1takfuUhsmUYpqmBAWt8751SQFBh2f8am8Zzar6Ency2n7b1",
  "key1": "2LM9GMzevfr7VdmSKe3tP4eRs1gXEVnFtbCeARz4Dkh1KFnfZwRjA57yEoAWpz8bsj7c3B7qtVRfNBGcsAZqendG",
  "key2": "XyvqLvFB1ABf7i5whiXrqpZR1v8cKkh61thL2QHQ27gGvrdJibyqBTL8uPchoM5mC7EodmaurWq9z1ANoi9DU9C",
  "key3": "2q1zqRDPJ8axThJzjzUrt4UQ1QdgkyeehG41P5FBPvjdKeAeLg3TRP4GJUZpUa7L7ZTjBqJB7E3qZo3Rb9oJVPs",
  "key4": "4JcEuvPYfyj1PsFCcJFrkrG9WQp1HNGC4S1C4etwQdNAYK78FBwcFxQuUa3tGyzKCRy6r3zL1kA1vRCXvNEgv8QP",
  "key5": "5FFbqLPNnhe9ZV7EJ6rN5y2qnyLLdeb2Tw6JZrcnombR6A3UNnPurottZZ83e4yeMawwKhL69V6KdTXmE8ve62DM",
  "key6": "X4zyEui3Aw5Phjm1JpLEKjtfzc8y21vSetxgVc2DgeP3Z6N7dq7oipAX2qUyUMj6ox7qsPqNKWdftYT5oWSZDUV",
  "key7": "5uY7eJ9mj8B1Vh2si1T9cwj9K3SkoFtBiw7Gy1qUcr1ygEMXRHkqByzUSkhzaSDPXamnZxWBeyccyzv6EZ9KYkJW",
  "key8": "39di3YZxBPNP728pN6JZREHQink8dQwenG8Kf8iFmUsJotgZiPwRUTFzwYTZQjdrHddCYuiefhgTi14e9Ut6K6z3",
  "key9": "MYAxsi9KZsjvhiFRLDXn5EEGzn5cjnzWzL3EYEGZo8ocdbsezoT4jucSoc79Zxjp4sSzuB4Axisj1MhgcAmN9Tf",
  "key10": "3QkJaK8bs13TJb4X9ZuEX7St2NAaFPEVu16bzP7UsGTkaBdbxRRKZGad7Am7HxRA4vSFztEhp3abur7nzfZ6RMdm",
  "key11": "3VKyb4xkpo9mJ9n5u7e9ZREPkzByBdXi4S2oTAUqXD3RYForyZQ4G2z69tvvgsu3i5y4GDRe1QfWLiAnFuWrgViC",
  "key12": "xioAfqcTZQZtjDbbciRfnq4Cyjn9aLRyMxwGj8boMxmSUG9UHHGaLVAj4qh1S8rhVGjAQKUxQtTqRv3ikpi8Wos",
  "key13": "2vY72iJDvsfUTDCpnoiGYKFrk8Qokbd4KKcNykBvmkLr4TkgCFi2ebSdh7CLtQpKqa36Xz21XzzXs6VVAkznA5uN",
  "key14": "2ePzDPWzvFfh2bAEg7vYuMtdJjQtJyCmo3o6sWaZqPneWjJMKq9NU4RfZNWiYy18oGBCSd5njcjhr5mxCARizJdV",
  "key15": "5QcDNVmvBhg5BpG4FvL5wedd75Ejo7o6tqyRkjdzqJEiiCR67N4bP9Dn4Buyo646GUejvpc5vmPtsY2JgBoPmwZ1",
  "key16": "2b63MkfGJBGr82i9Z426svJVzwGnXDsZtj7YYRtVkY9aQ731zHRRfza4CR58gZY612TRf1qjiUVLStDCnWqvvWzg",
  "key17": "4u4nxuoybiZ5nYViyMrgnaNoDfKVt9o212RQUWrTLKYLmnH6kuC9NphUgtGYeLVJCeBHbewaH8u3yfU9m9AA74kD",
  "key18": "4hZwv8QR7VZUz6LsSQVbsW9r7EVg32FKJdNE8iTYUEbfwyByqnXpFuvuuTvE8wqkH8u6xoPQkLrzoFRvp7LLqFqo",
  "key19": "5qJvRdp8sPobmkUxEGUQ1Cx7c7YByo6x79L6hgWefPDYs8nx1gNg4ecB8wmVfDtQbr8m6jcQh3e26b2QoLKqYTLs",
  "key20": "4Ed3zsN9oeJEdeUKWAFyH1WS4MwnyTYBFJLJpsBaA8qMMhsyCNhFCuswxPaJPcYsh3qz3rJnTN3cr2TUGqLuDESZ",
  "key21": "4pVoBby5bDkjp4NBjVUgL43JecfgyBJ9443NScuqHs8BbZc2rVHR5K1fJdEroLcTEgzHFvHTy5RYLrgLokvXQjYW",
  "key22": "5wcx66sUG2Zrxtnae5MFcziz2ooYgK5e4dR5guEzaQkLdwPMgt3YvqLLqNJTcrziZgzftHCNhkyZThZ8as3aQraY",
  "key23": "67Vy5Adx9oTHoj8YHuGk6XK4xCSpzWn7MJwXmZaEDQ5R2hHTAgj4G8XJaLKRNqfZhobJquedEhAVcZTtPHgmH7Fj",
  "key24": "5tvNQ7am6z4ymRhC4ezYWhVMTj3cvBj5W48tCQoWDZKqQfe7x6NuxuXGk329jXEQSfvuUi1Fkur9xguzT9m7YXwt",
  "key25": "54bAYsAdoPMuQ51XY77ow1wu8Bh9viDP2NiFEjg3BfVgGAPwzFpaQQxyD9Y3XCTvjWLZ2dMtzAdTP2CKy99wN7AK",
  "key26": "26yNzditTt4yyDeAcLV65x1o8fNFii6cUJ7Sy9Ymdsgpr322CNF2FPw2gooTv3AB1XP632aGxGNC4BvrXS7EeFnw",
  "key27": "ZQT5pLmHoTpex4EAQvXpNscW9wpx2TP5KrdcozguapjTfX7hgx8rzCvdwmKd8mEUyArkw5WnhHtYGQPQERwKRHY",
  "key28": "4D5G5ffzazeF8cCj3ZjryrawsjQ1a4ob3Bhiv6jwmikbyw1Y1kDTc5ausqmwV79emwGN2YFE1bpwiRhGxuxeRDm2",
  "key29": "JrgCEvDStfGaZmjVfpdTN98hq7agLikYP4eyNeGKFT65hKntbb2bACPAEW7hrYMVWZkVnBR6nkxXtGLyFn8nWfG",
  "key30": "36F1HG8uamPQB3ysmcvrhas5AimTGzKVvB9XbL858CNoMzsXJwh7d9YLRx829NTUNXWEvDdMUdAiLAQvDcCBXoES",
  "key31": "5cUmyvtakq48whAbLmVKRERzXWEsanAvnzgkXjTgVScm5R4u8x3ag9hdVdWGvcdxLUMDrQP7gE7TP2uNhvrqTKex",
  "key32": "3KPwERaMeR6robL1UcxCohsQ9z6nNbWgAJchtkGtrosRLEgsSzh4dkqUX7DbGBC6PRLrCYU4HN2uArKf1VoWSnTz",
  "key33": "23GsuxoZNg6w8zwN2DfoTfKBzkRo3W4APnPPkKQF58vuNgPAZteh88RQ574p7urAopUDU1oLWHJ4qA653vwVZxUg",
  "key34": "5SBFZfbM6fgnQpxSBQk9w1RVyxLBMiDBFMekDa6ENGh3Y1yJ3Yu7PAQVfJ2zWJS4wyAzMrdZByH7fho9xja3FsAC",
  "key35": "46XDRMtjy48kR4tc2BekDwHj4TBTu8iWo578ZnACJHWpyqN8a9uMNHqs1WXjhumkurjq81QgPAaDmyJqXaP86ZSG",
  "key36": "2vHjoRjhhUUbxMLp2xz5HX6J1zg9Zwh2Rpi75WNcc8VmgFuzRdzUSd5YryWcD2S18Lspa7JJZXbxAdznqAmD9Ysg",
  "key37": "2kMEE33CYWjWAY9pp7eZfqJpZLy6nEV6uhZcydHRcBHNNEBD6yGPJMNuWQjDYG1szLi6n2Et8zPF8ybeTCynTfBP",
  "key38": "2fdViVs8Mjhgump5VfxeMmQsHb5N3dMJYNn8SAUkGZfSARsUiG8iQSq3GPEnydJNYbPGequq4ppriPtWKr2JwGQM",
  "key39": "4pQ4mHfJKpanNwcF7bCL6WyES3bFQfwrRbLczG3Qg3c2aZo3Jn5zp7JakKcBHp8AeK5jVHfd29xa3K3ayyThxhb5",
  "key40": "5BfXYregwu4ZBzjCL5VY9dhNv7enGq7yDSdMnaPXXD7zKzQ4bPUrSaLM7fBb1sFkaDkKM5CrfZ74S2bpguWBst8h",
  "key41": "2uFPQUXnS4FCvCf1fqD89rncXrNLwULQqV5JEU7Q3rrwvNgss6dqZ5sZajSddq9RrmmZckWsCvJae5gCTWBBbaii",
  "key42": "4mqnUm1fqoJ7SRpAMTY9eHXCKmm4LJWaXRWtwad5TRuMh7B4nSNq4Kk3Bw8DxRadRSfd9GhVfMBV7f5khpP3uvti",
  "key43": "3Q7cdgXRCa8YczDsxZRCbY76Y1x5SgC5Dmctwa1t2TJkYXSYsoz7iqxHkjqo5BNhCr3osfFNpWjGKdcgpPdxxnyT"
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

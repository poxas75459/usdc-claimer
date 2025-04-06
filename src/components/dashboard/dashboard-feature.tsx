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
    "5CNwiQGMccYdzeQo4VKoNsKRgMyPgvHintiTkGGYrrfR2Jsz6U2fTBNBs9m38mVWJ16zLvbbFYjZ963YMPr2rjMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TqZXAaLMrE3XLxfjjNYGyLLSx6cHr8su3TQ6WfgEZNEjbj1imG4B4jRYbmUiqZe3U7kEUJPL3o2BwiFNdETHRn9",
  "key1": "61kSD6cVCZ2JhWnnLM8cNYGxLAoZX2RcgEQw7ZYuAsnYXxXJZbZ6JXQZog4mj6rNXsUPdhtcfgNSi64FYCL5x5pD",
  "key2": "3PgenKw2XTNuG1eT39LHuUHdYcaoca1k5qofdptqCdRVy5W4Vs868x9zpuzeFU7jVDZnXhoghzLPoZDQY9VHwmhL",
  "key3": "kNkRomxgCfaE9cQ1ofNQNqbS21ZWb4vezjXy7di7nXzLranookg1RYbMZxXh73hfHRhVPxkZF9UF9g5npWJocAi",
  "key4": "4YFfM9AV1F6s8CY1Vs773YuAEtV566sCMSfVvXKjt6D9ZCErrEFW2nch8b1szewW31X6ED9KcwPnMuVbY3r8kTXj",
  "key5": "2ank3CeAehA2x8STVukuBhtLx8tXxfAgb3CnVJesRdJia4feJ3zQLfbM6Y9LfGoHm58q6VAhDEE6FgMaYB6oN5dY",
  "key6": "2doDZF5UgTvcMDVdRLpCM5eEKPqMvTycqQXD2jTtTm86gHPzXX37DGyrWsoH987gumyRV6wPyLNFMVvaKVbd2X8E",
  "key7": "2uKEm7vTkMFTDZuF6KQu2m6VUdikNTPVwH44dDFZbPHC3mVcg1kC1PCkWFGTyeirotTCorXn11QQEqDvoesua3LA",
  "key8": "29s1Hu9PgT9wQZ17uTvJbCRFuLmWJFHmracPRwbRprZErMrdjPW85f4uHGt3AEgWBYccEcSwAXfHDx83Ckr62o73",
  "key9": "FNjUcpx6vVsMzaEPUjc48unYBAJEHEsbwtQGbGLyHy1dmq44sSjtQPmyHLCMmRir47rCqu3p97WHdPYVDH9GDeg",
  "key10": "4Mb9GHSxyBPVoR3gU2cXtngBneD9yij5Go51pfdn5e1t6heKHbsxNAE5YSsacVXFGKo7LJj4JY5bVsiNgFSRNtmP",
  "key11": "3cEFHb3CHoVa7xM1i5Z7AVVxhj9N8vVt9uaZoYSaZVGgR7aYopdTXACHTsxm6ZxxHmbvSqoVUMrTscc4Gn2yQLN3",
  "key12": "2pe9H7zDDQjCpYhbCvTxoDabHa4U29HL7UrL9LGWBvniTpvCEHJfi62Q6wd7nq9LuS95nqknt6p9ETMfQ9soQtYK",
  "key13": "5rkt9j996pUS2njDyZ8ar6dSJ9zy8eQXgYMc9LUvZ2AKsExyDyhhuhBQznccztCMkXqwKz71wgiRm3kPPV5Jazj4",
  "key14": "4eVHPDgaMonUEhEMFjvxCUH5Linwj1Tc3FS212oWXLxVv68wW7YQyETcn93PJY58JciZ2cc7cR78GrZ7sPZEUPrC",
  "key15": "dE1wCowNosrkNXcC5XhnzAfzTE5SpePb9obbnkUjUHEkdKG7ZcBmCa8KJVkhzVvXdEQ8F3CPwstTQWs8aFhiF1u",
  "key16": "4y6RMzJ4gDTdm6PgWynDHRuxVahQb4oC25aByim7PaUAfZ5kwmXN5w3j4jPxoi295ZXfRRpYeXRbs1uazTVZV6wm",
  "key17": "3D9wd6Ru8jg1wwwQ1hmrpQdFF4aGAnF8hbxJrf2ifixBdsLJbJ8Wxh8hK8BmLUm1ptZrznKZ6n1H8uque1hLLzUN",
  "key18": "2oBwmuNfeefnSPnTTQDgDGrV7PitrTJ6y9SPwmRoNoQ287x4gmXUZoDWbbFwDgBnDyUiv7PniNQwmutybHNCDFFh",
  "key19": "5ALVgDvEzBP9Wwq5mNjweEwSwdevEE7XGr6BNxvaZhdEaMMjX8FPD4PLf8zWUnvp2f2AM8wJgqos25GTQdAsFa8K",
  "key20": "3fJim2wTKKBhkmSpmL94gsNxdtwc3hGU2FUuGDVcyFyhxVmSEDrddoHx4N1JEcWWtT2DJjAW6WzeZkkKgRqePRJA",
  "key21": "5vjEfoDwabe1mdjR3mPknRq9zcuNbTGhTSGrdqhLexwTueEwoozGZWYENPE2QU7dB5PFLahpZLNUtcauzMPFnWV3",
  "key22": "5nmey27uefwBR3LAN4zTccFY1iQkvyAWESksmnk6LJqKH2fTabetWJKEo7Tii7cTfdBqhUan4M68iehyuKQuEyEH",
  "key23": "2teP72Pa6P8rbUdJM9KeTXguagodZuZX16AHSH66reWiYM1tK5C7KCwjQ96YbVZtzu6if5B7TAmKhbiQShrGdFs9",
  "key24": "2ZE8gFv384WHTGnufNtPFb8E4r8cXTXK73M82qBryidEYctc2Qe1RB9JEVB3fKa4gQuqESkeaCYSHpJWxhJhU1mS",
  "key25": "5CPUpgyocJyTUQ1qxFbSJwkCz6sWvNYYAC4i95aXQecfL9m2Km2bdEb2963W7ZnknkHSDpZfN2V37VyX9QKsr6M3",
  "key26": "2T6WZThwW7eVmdzjqe4F9UykYX695fxr5bv56Mm6rBo5nmtFZpH5TvBbSqeQAz9iTteGLS4P4aGcuxyRLRiGUi6",
  "key27": "2gQ4wJSeJrmK9nXVkJUFUsA36uxL2VJ86aWdpJsWX1KDzsC7ruta7D2AcufYB8RVabRYWPGe4oQ2i6yZ4zqHoJ6D",
  "key28": "3tuik2tJoRt2Hea11xPq1tcTZ5TrHpU9mpi2XG9RTmJWCmtwc263rCKdppLVm8yDs3Nw7nMnYQVKzSjkpQ7rCrrp",
  "key29": "f87jUKmwd4H7N2CxmARnDYKd8Dw7Q3UugTBQQLEXspD2AaCf75MXjZMAfajAqk14PSYNu2wfr8fGuXPCz3faUC9",
  "key30": "ZGFEvF5ipxfGtcRwHRoY4ZiPZzucWSUfKgoLTXRw4Fj6HiidQiLNKXNguDTM1HJcCgEW4rKpbViGmuBfsoXN8w8",
  "key31": "58yd4YW5UK7Cxd8nhUGR3GCHBHzVYANmztkBUmbUmZHCc8m2QrciRmD85DZL4c9BRNo6wdPgTWNoKhwYqrbkL4Uy",
  "key32": "5qPK61THCSn3H633U2PaEscioghbXTv254SLj57s1T2GbUhMt6C3syeovPcqrzHMM9epTDaVWaEDd5XJjYGoeNus",
  "key33": "5tuhMQ969jiGSW4yq9KRZgaCVj6UfWJjvY8CzMD9DMPxLQUzUWLzdg3n8NVzuwJRQB2XKHSuzD2uqTG2qrAcjX2e",
  "key34": "4rBAHHXEqeDpnuk8LoEE7dmmWzqTL57cPhxovYHHzyAux86SKp8Eh6ikkcZ1LXcjssZRCH81zwxgvRfvosve1eDw",
  "key35": "1pQNs9xBXbyzKXxGmC48AnSiWugSpwtoc59dW7AmTy3DAkxarPyo1g4ZjSLgyYEdiujBM4Vw7UrbDX4HMroTmX7",
  "key36": "wDkBKDAJYcBDqr36Lp97CxhiDEuV9hJadAGGd2tycUZ3p9f6McEWMJoyVTmhgcHHxFYE6aLMz3jE2XJeUPPTDKr",
  "key37": "3o7Sa8VorUKMqhszPyfmnVA6RCHBaxeCsekPhJZmLPPaz7RFAFbi4LAfwkw2yRUxkaZvzuNTyAD5MQhM57RA48tk",
  "key38": "566UdfiMFzQ3h5adVGDNQZzkSTvGwL6bELbpbZAwbxsimDpo7epVqSVSzNkUvE5wsSnhhkCq9tJzAg477pL392DV"
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

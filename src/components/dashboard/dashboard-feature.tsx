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
    "3d2skmnZQKNA6Mhd7TEMtz1ShUpiN5vmFiW8f21Hgm4kjNfgZUWns61D3x7SoKQN56TtEBjCKGbQdmhTTtX7cX9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eQ1Dssj57FLyVWAdfgh3QZKQ1NiAfYLaD2uwud71m7g7uBGducHsYPqKaSqyLHsWfGncmPghNeDRn4vjDgD1vmd",
  "key1": "Cu8bYVHAqsPcDPe66rrUux9egnxVA1QY8mTQt6sNwnP8XEpuk4NBAXdTmk6b9zPNXxfXxBFxWrHeoSxukTeXUsc",
  "key2": "2DAxEeJspTJYCczohwLPnphrFhgrMWsvMJanPP9Cwiu5HENb79ACEE48GMY3mZfJgR6JSv8RMZWsaQZMMJLE4qKV",
  "key3": "5RdBViZ2LVdKQbR8PREzbzvww55ankGvEq4efPf7kFtUw6uu4ecgjPZyTQ5zugXz2kxa2pxkwYo8ferSRqCusJUm",
  "key4": "37YZXGiVpkbeznmMacqmez2fszHqQzFThuYjVrZNrBLJyKM2CzKQKec4Dz1h4QKRC26gUQdjLfoHB78CQV5pZQuL",
  "key5": "3QVYFsHQVfryJxzNWVdzn52DUQ1he6kyJVuRT3UcsjZrD6PCtL2eNmaZWvehB7yheddhUXRaBrUaJMVbi6No58Pc",
  "key6": "5TkuvKrAjq7LYEnkNqVFhoVEuEihfgHRxTiDvTra6NKzyeCdDWQQM1n9e11rgg1iaNsFxQxk6a1p7quMZMJn1Gbe",
  "key7": "5SzvmYdhKfGPmsEV7b1MmrkfHM2puU48iXMGT5gK1AYLzVnBeBsMTN8XLNW8gbTufZrQh31G58Wu8LUdyRhik59F",
  "key8": "5xa3XCLN7DVondH42WtKJp3DmSgGy9mAGUxR9QRFWb2vwSJiauRqcaeTGcckkcJpUGzxLonDE2fsNjz3gbP4gMi",
  "key9": "37tSf3fvhwHMzyJ4DLZkssmauZtype55mf3WAigVeHf4V35bAJ8RpdFPC4Qcrus5ZD2da7AVC2ydTGG31AJ94CeB",
  "key10": "bLD2NjDUXMJYQWjqZZ87EfJd8Uwsgz4ZUzrdKxcnryNcdtQhHzhFdSEKMmb9EAiQZfQJ7bdsqAnV4wATA62p2FY",
  "key11": "4jiK6JZt9z3ph4hZ1qUJGyuUYyYND1m1C8cM8frLgo962wENRKoSfYJzdKUkfvFtu77Yyhz9qGorLPkKPaaZLt9X",
  "key12": "5gyM7RhCfmFBfCqNtJqFQmbYPLJ8TdagDenujP6zAHMupCfBpjaaZNwnjjvgeT4GTdgVgMEBGS4R63jyrzCdDedh",
  "key13": "2TNTVgJXxJyPwkWLGPbrU4LPJpS5yRrKM1VkKqULQB6XdbWLW8DdaSCkd3p1GzENoNYSZaW8TmJeKdbygBpxhtqk",
  "key14": "47FzHbVK4MAT9doPeb7PwMTycZrGMD33Wx6vZwKWtxUv2rWQiY8S9wDKD4rt6uumk92jJtwPjbav7gbrfZqvnvsy",
  "key15": "4kb651MSJwTnQfTcNLdBqTiaNSjP2yM3pyyorKFPjfkxEYccswUZ596a1BHmNyinCMhjYJqZAFHyLGsiV9pYG7fu",
  "key16": "43KaEYp1gMtQ8Kgmj5JSXjNRZigui6cSm7LuaaVuynzV8mC4jFAmVHbiFLt91LYyn4jubb9FLDn3qGz7CXW8mudX",
  "key17": "dSdX9krWiPSWUB1idp2d5CFKaU2SEhQCCaVgKSERZfM1ByS3CCY2Xgf1ki3Tn5zWWm9zR1rvHdTCxtje9rCYz9M",
  "key18": "647quhrT9UHtif2uFeipaKizNg4aeLrjKYhpQZQcrotmimkBuY3sxBzF9gqNX6ZogfiWWFzu3xaPZqZSy84hmomC",
  "key19": "516zTwEDRQUn4gQnYMkKu9dRpNnw9nURkNDnoCe5RooaVc1XAvUs3Pa7oXShp9zHLqiVBjZ7zyE9kBypdZtzynLd",
  "key20": "pkw2VcuWYtk2qhh7vQnEty3KJHVq8EtZ2sLPAxsz1ZGjP7WYWxgz2WGtq3y9gfgXjKzMJsD7CZ7fHxb9rnLumPj",
  "key21": "BtzKiwqCwTBGgxknatTnKut9AvmNqsNp9fwGzQgtwBpXkMZyDuuMkyUGGSdKZmpNuba6Ev5KMk8eE8aSCCivYky",
  "key22": "32z5xyfZwaABEDDSA5umVurqm5u4TRAjXdD19zwjJCC77HeQPmwbPzz1dQFB8HCDpyZ9344Wb7mYbFSA6bmwH3SM",
  "key23": "4TVg3YnaXSZsx1zvLTTYTPCQQsiSJ96Z6Syvsm9bJVgxqg1uCLRYweD5VP9w5sEkPj73JEHCidmTDeUfSNycG3PP",
  "key24": "27Pcvz6rBDqDUHjQiU5CRSurpid8ZgcSQZ7QR5YGQAbuSpUXssZmCkDpMv641tPDVxWjBJXw9FoNSbaKBdDkyphG",
  "key25": "4YuEQxCHrm5HwRabuMcM3cpzmw8udnHSk2XJRNiGhWaN5GLK1DwZkVQTHjYaHEktuheucq5APVC1TZ1nEGzS8r5D",
  "key26": "3hrfmFBe7NGDaDPH2CLcdY8s9orxv2tEqNcJZ6srtCK9sXMwR7mxbQNZmLEgB6fwJGK1nTBVvXAJPi6Nz663Ju7y",
  "key27": "4ZrJM324Tt3npxesewpMgHdr5W1nC3VFFosVeDX7McaGFVtqG9GXWi2MrS2GujMyjnU6sgtGonZRPFVa7YYbC3Ky",
  "key28": "3rSC7xL9MjwwFgPvHovq8n2PZ6QJH2dpYkrdbef4St61EwqCVFL44nqhjTSzD7ajdrRevkyf8JEDocYrEegibVhR",
  "key29": "5c8DMeCDneCL8SUnWzXBgQ13C1Ds9Xm4Dm3YTReudmbgtm22MUEngnTSGZbT2ti1yBWoCRAsUT2Zq4JZQNsVrJ9e",
  "key30": "5e7KtndkBeJ6tEiGGWb83t2onuXgHtrW4pQMbASYZSRzDj7CG14GA4zgLmWr1PAopx4MJ3TJhtkacoYsanHujJiH",
  "key31": "4vZMiR4sg7SkM1vj16GBYBo7iPjFGqQNqMZC7tiEm9twX3ZcwALzGHgrBbX1F43vwMn4vb3pKX8MG4AeueNiLEko",
  "key32": "2Jv7uUcdvjwKUrkEQY5p324rz9eEwS5rSAFBDFnaq3TwogiraQRdibsFAV822pm4Ve3kLcRemc2uNdp7ZHNXwyey",
  "key33": "2rAX8rXZAwa4kmSmxtg9Mz9btmBCD6EJR183t2iQmanwSZXBEaRS3hiWNKTuEJDPatfMo1QnRDZ9UVEsdFwgbeRe",
  "key34": "58b8fzb3HJTCfo63WV7NuzGdudfcPrbgSFxbdjUkzJYAeAzumFM7616pSxxNk7fh5DRPLpSKYaqUjcKjvCufN7SF",
  "key35": "2BkKYFNtmTvthgD7u2SmkncUm9QWHJgWFQnrJqFuJQP8jJRNfbZq2mn2KfjRFyaQ3Dowq8Cgq1PoNgbnxLE3K8Xq",
  "key36": "2tjdXuiSt1sUKipuh2gNzadqJTLvc3EW7fqjCtyHMQvtVtpFibXN2Aoz7bdhjUS2FLf6ssgcSTRfhByUoWT7fxEX",
  "key37": "4r1un3E2HGkWbfMitk8cb79azeBhb7uvxKWAcHW3GMiN2yKTA15SexY6MWAZxTGgU8mm4GJoVYsKgJHJ4ZiZDmCz",
  "key38": "xZaMpT2Jye3zfaHL5fKhXyBHS7EvVkn7WQDsDPiLi8WxfHXyusvhkvKy3VQSXJr74cFAepVUtB3ntpWPKmheLjP",
  "key39": "2MEAmxiLBVSbdK6y4mhCAoR9E5HkgxYQZFsP534N8BJQWEj1rctw2cbnYko4RCog2KtCGLq3hDGe3VMYHfCLs5AD",
  "key40": "4MEXpEeDWtr4WTXRx1bnmuRQjCJMMG6zjp6xKz3aviePjNumzjCWbX7yRTAVtHovT4y3ZszAjRBwdHGS3PmheF4a",
  "key41": "k1FivpqRGYodR9eDUMFomqLtbHtd3Rw68mUokZU14DiSp8J1KCd8ibzEYGayV5GxwStd5WMmDyLijycimHrPYEt"
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

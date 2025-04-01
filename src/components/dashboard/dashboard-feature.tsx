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
    "2cGit9UgawY8BLe31SgwUEsQSYRVe6JLRi1YSwFbFvSab1FUaDYZkTXZuRk9hX1UJ8JisFbeDp4qmio1WRntHwBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h2JCQBM2BbjvoZ22JBUEHWMjPCu2cj4ASuTapqfHAWxjm5nv1YQpea3GeqcvXmMpCS8Z7BsXRTos1uuPEF1W1Tr",
  "key1": "67qk4z8Z21k95vfaaBoaERwLJqgxkNzdBuWBdCBoVkvxz3x6ybQrwyfFjyJdiG3m53iACmdWgkHbArfkw2ntVdaj",
  "key2": "2j4Z7SDFEeufWaSVgGMUbsXLx2wKquEnqCFyHpBH1y3nqqKTLzofrL68pexUMvQ3MLhCPmoJTihd6tjEMQ8MgtKg",
  "key3": "2dJcpC2pGCiZ1iAdyTomNuPCK33h5qWWTHshvxwwfRhGVv87PFUuE7feCzeR4NPtcf3NBvDmbvGEH7AxvPYNB79e",
  "key4": "2G2uiBTqdJeQAes1624jkCEHDnw2mU8k79vPZ82QWTjq5TgkK5BErCUUGg9ZLQk8szGNnU4jiBXYZiUu7hpnY4XY",
  "key5": "xo5aaCiP8RS3oY3GLy2KE5vFqjxkYpD8c6r5qjr4CiFqEAy8vPi6janKh7enhVCsE1dfUeiMLYZ86ynbwUb9RHF",
  "key6": "53YVJrjSMgq1R7Wf5PeywZwzRKvUZqw4gqoQiC6QynPszLWAYW7mX95VzkmVTarBZgie9yHdjmtn8YjtvB9gR1Jr",
  "key7": "43CZmuJRfhf8q59ddfoYRJFy9HWp86sQoCk3f2FjW3DuN23LiucX95xZe7ZsNpN3CupkwGhv48YsVfwMnLRm6oxA",
  "key8": "33pb2pnYvnDk71MHfujjGkYWsEwWggMrMsBoF1Kw8iNW9gkVgX558umPcWUi6BB894QrzPB2im7EPi3geTb3M31",
  "key9": "5fNA5fdVL5U4KnvP5hPkTG4dwF5rmmi9PqKwjHD2NEZZRMZ6sa8BkPr7bwXb73NvDQaqw9itntsab1Runeoq4WoA",
  "key10": "sKCCtUeFJWg6bCCKD2ZbpFjV88Kgs7w6ha7QYjqq1c6YSYw1o3nfYou8F6suyPsKXBVYxq76k3DTn2QBpWKyH8e",
  "key11": "3JZXT1pQhdGBt51Vu7coB4b38q9Xji5hypMpKpduh6jna2N34ZrHpr7gUDSERcU3j1zT45YHMs48CgDXA7bssE7B",
  "key12": "5RwYeGCqsMd7VpFxaVv567cMjtTf2GXUNWvNm4aotkiwTR738fAZaKztGUp42tmJEmouqhUvZfg5n3Wmc5QEmE2z",
  "key13": "3WAN2d2oG3anL5r6eCDcuuXQC4oP2kdCFSxcmukN3RPHq1RoKigEMcabuhk7v4Xy5a6tjycwsqNSb1KWSQHCDqke",
  "key14": "4yjtFEzW8mVx7E9AJcLNzBEgMCP4ETcUQS9hsQ3R1rTchtepSBitcFjKerZBoH51etjDy3mmkg93xt3YCYT2Lq8c",
  "key15": "3MvaDQrUGN7WARdbSWk5L111iKyqt8wVMRvE7Eq1rC32ZV9UaX7cSf9eQ74afTPiFQXmGGdn8bfyyNRqi1a5D2Kc",
  "key16": "fBRv3uNKbTDAeLNBeLnP8iNpGjrNp1xru4AU6NGd5hdUSyp1DSxb8MF7dotsSsxb44Tk4xECjSiBCL3UPeKkBis",
  "key17": "3ZmDDNWE7o7CVsYq18UrC3QA2fCaSf9RrU3mZjyAjWmpAUCf6AejpkhRTqXB6haPCsFgWwBEtXVTyrJfRuW3SfHY",
  "key18": "2XN14D6sj1Yywq2woajK3FvwJTVuK3j9iw4zAGUsFA8oNPx3gp5q7r2pjTJ4V8xsQ8vDRSFhkEaNP7rrDTQwAFdz",
  "key19": "443hzDhgvNNknmBAr3cA7ucCarUhp5uDVu5LWokfmGJPaTuZyxtxQqMPEVnqzZFx3em82HHjbjq6SfYm6iMAYmve",
  "key20": "257JZrBgDWRvPodTkXKgzqc5ZgB7J94eu7Y5tyBL352dQsNjKxrkkyPVUL9o9B9upvvoZ4JAJcojNV6s48Uvozqn",
  "key21": "5GBMsFaoBDwMCcDmCpimxz3cioSNaf7WeKeQZxRcf4WwvPsBAjNfD9nNdNuEMehSFbuVsZieFC9MDjpMz3Ut8Vtb",
  "key22": "5tpAeTmfLnpk4MxYXLphSAqaN41opyT4HWGarexcs8F6JiLzBWWQDu2XuGTjFLgULp5iXMzTQzm67eeky7B3sr3W",
  "key23": "5u9GrCVywuKWkBKn8rSVQU9BNngo6aNyxZq6rkoVouT44Kd7ZS4RgQ2sFKSmwXsA8ZyVypueDVjprfLkbmvTteF4",
  "key24": "Dt8TEi5kSiPjvf9UtxGPzjimuF14rx8qNGFRwTUYXfFbon7VFXNVTFHDU3s55HeigAzQ4xq2nLs5cekSqAfDcUP",
  "key25": "2yp4AX3AisS3zcfpetr18JvWeDWehKMvaxXh5Z6juHTiD1eE7JaossXE4irzVi683Yp3cxp4NZCRZkbi7i9f3W56",
  "key26": "Hf1F48JCeZEQ4oLzB8pvfqWyWUboLtdtnmhndGEAGq3kyufW9gb4hbVpfkJKBg6srPsQZrBnv6ope6SRqtYuckV",
  "key27": "5DyTEWo3G5ApnDDg2aPSq5dwQWNLr1MQctQ1baTfs3QNcyCm3FQEVDPw8JH6kVBnvDZ27RphvQryL2VHRPKcHwvx",
  "key28": "4capEBoHYyQVvmd8DiWTY2TjNpiUC3Ehtv7oGwq9NhxBNChrChjfbrhaqmvuYop4BWG2NsWGdQZzPdd2TLrQMCek",
  "key29": "2dLLKmtnajPddi2pmj39BnzZT5eKevVvPmM8NjPTTkKsiErWa5BUS6NU4XkFgkVbyQV5ecmMaG7BzrsUcmfZ3gYn",
  "key30": "zNRxdqVoaYFXKvEzYaP9QS9p6yzKKbi8dYLBNwFsb19UpPeW53kYJCspgX9sXErP2h5Uz75bu6ioq4RYmh5ok4k",
  "key31": "3gNgfrfg9tVokwRS2iuX7FuCwiuM4jFotTwse3ggkmkCPRYQvKAZcdFy9yLTrGSUZJ7FbYmdn7g52KexUWyX6jzx",
  "key32": "4k7YZaTqyNZjg8nbPPLSWQkB3yKR7RarEqkzz4ycwgum9TXCqEJ8ZgVkCVHJzRrTTaAfYkCXxSs5CrB8h6NnCGaT",
  "key33": "bXthYjhPAF9GLaCJd5Y6RstNM9aL8NCz6K7Yot45UW6oH4E8i2NYvSYuTGoJiar1yiFA9cELKgBQ9PgxwiwkZMP",
  "key34": "2eUZAKE7HK3stpVRwkMpCqDYPvRmfh81ZfXTELpnhpcVLrudoz8ST5Tvhn5umdsWKikrbczVKBSgjxwbAo9Qqwk5",
  "key35": "5hFWubQavhLMJzvkUXKxKUcKoXhHb9MantPRSZjdrMuWrDmf3gzp6v18xqG5gmez8fXk2ZtYDNrgwRzoJ2D4d3py",
  "key36": "2cuwSJzaLrPTsZcup2UVKtNtWMHgD6xtrR3xCkVU7EDzfmT2kmXDjUJMrK4sYbpxenddDiicBaQMyiySSSqhYgzy",
  "key37": "59JRUVZ2WfK6TgwwNo4emXcds8vRwW5Nn955Z3dTcW5ozuAzPXMQpkBfiJmQ2yMZEKvq4t5PbboPKS8WZKQsRJG2",
  "key38": "x1HB74YVHq2tGdLKB7imAaAKZdzD8an6zZUXL7qq6CYiraYsefwnwCeZXjXBeehTXiXzs8WNmkuzHViS8736qn4",
  "key39": "5zTuEZFFfxGunba77xkLoMYBFPKsjo2ETJ5tV1bxiMGkKs6VYR3SEVJ7PkkzeREdG2BE85uhhmyLpeVA7RKMBWaZ",
  "key40": "XLYFZwTmT211edp3DjshQaeepAt47bWnR4fb3yKYub75KALPWsQkfNsnyFWm3gFNE8jYT5AsG45oF1uAgYa7LYs"
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

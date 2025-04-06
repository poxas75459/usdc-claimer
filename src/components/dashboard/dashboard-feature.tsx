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
    "5aLjBJ8y2QpkhtyM3159jDe8BZRYkid91Ssbj3wghCFvJ86qXQ678LH8MPsdkDhP6o6RabQNisS35ifM4cowKR6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TxzuB7uqG1oo3DSZE9rKBkXaCTzKNVEWaLZX5LmzPJm8W4CSdRtCjD2Kcjn3tMfqZyUCZ1DfugNFRQww6wQXoUU",
  "key1": "34MK7NpYnkbPQdPeSrg7XoiMnaUCoz1ciXwNYGBn1DGCSC5nsXYfmjmaM1vL5aCLTHS1tGvfyrC8VAmW7JeoJ8TG",
  "key2": "53VLFV67MRhz6kRWbngAcY4i3fsHmXGFkrrHN1bX1xrR3EEqyto6L8Xa3m1fk8kNEC7ZGBEzavS88FMEHv4ykZun",
  "key3": "3NPkL8HmRnzw8JZoBjbk4U9ao14zviuTE4J8fB3hkH29SBSR1ywQKYfzNRrgRrgcdVJRDtcxkWy7nHEqXQHWLNK5",
  "key4": "3USZVMs5we3zhK2E2M5yczfCjAs9fq23QHPDb48ZH3AYdBJxEBecjC8crwUC7bXzMUpoaoKYB7ZzeTuM4W9GUFia",
  "key5": "3hFi1FjeuXoJpzEdzdERvdH1c6SXbf73bTXHQG6CVD29aqxhxsgzb3oWu9rUXw6sXFQ1zywHGg6UozP92AbrKz27",
  "key6": "4rtxt5z2B36gVt186LbSAL7Kx2KrgyraaE7X1gSYxwbNM7kWWmXoVN3dgJv7QYYx2cQ7xDexfpmeuxUnVoDiN4aW",
  "key7": "AgDnp7inQtdhARwUb2gop74A1ZaTLVwBd8xy3aAkGMBZVjcCs6qK17qDm3uAR7DeMAiZzZrWK4hqbPHxneGvbCC",
  "key8": "2hymDXNohe1gwujzafpyqtH1dpJamAMeaA5Q4MZmVvMTNdz7RkinB3NwSzoATtrJJ9Ca4HwSM4TcjwD72PqP4Dm8",
  "key9": "2xCtwsha5fMHJ262Qg1suDATZyMLMM9kuCbuYdpyPhKEWRAZQ9vL2qwqtMGbgAt8oUeagtwQTEpDUCJA6PnNgsYW",
  "key10": "4mhrJaxmtjjhMTADPErbFf7eT2u18VBxrExg5c7X7bSaAri9EnNYvDKCkC8As76somG9PoZFX9wHhneDhK5s8R6s",
  "key11": "4AwAmnhLSztN4arPMzHy1iyguEgGw8ADvgMBmRx5AKNgPV9V6qQW76UKCgXN6Uoz7qbAFCjTh5nvjwfGANU43P2B",
  "key12": "2vDBTScQruGfrCVregGZ2EcvTSbG86Mw74zhsLC9oSa4RYBgEqJNftnxAtLR3x9myw2MmfDRNhjZFAYUbkfmFCEJ",
  "key13": "5Kzjf5KAYRBqanbvNWqovzQU7BGXMwxbJRouP6iekmnYCrKcBfSDrjykvJmfwqu1rPUuMaKPH5LLruFPaTEuatrT",
  "key14": "2rHzgtZLBD5ZBL5ER1Gy1R9rawag4rZrHVwk3ndd7KVgKRMgDfgjrXBfqUQwDgmi9GSo54puB7wNALfU322w7SHf",
  "key15": "Hr1U5GAD7EWZgbumKGgMGCsRtngm4QrtCQRvv5CBHZfvJwortozyQb7UEvUknUiuB4GCFkv9rPbz9ckWA4Weojx",
  "key16": "3EjTRqfdr1AUBJEqYtAXawRoDdWwi3zJN98VkXKFcSBNTNMKLa5BvXMgmcHtH43tABXvmaFCNxi4hk97HDsPDGM7",
  "key17": "3AnCiSD7UGohnspw41TwYFgFLxLkubEGehqwSJ7JTY95bheFf5pATvyQ9kB3tRvCChUo21JrzP6CAEASfYkiNAau",
  "key18": "5AQ6P524EEovp5QL3mBTHHRXMkv2aKq1Si5vYnGeeb4ajDstHGJkZP25M49nz5JWzcqdqouRRyLrGoEHh451WywU",
  "key19": "3mXvBF71P6ugh1giUL9VWzGUNou36z8JAd1Qkqt2edakvYbQbh6MYCR9wjufDPZ1LFDr5j5BVF9tjsadk58ge34m",
  "key20": "TDKbQgPJtEwcWN9GwmP3rzHUudBVioCM5QBqzCn6X9m2X8rgaBkT9A8aX2p68iqeRR8HNFRRPTBmmQRkmsMzX4K",
  "key21": "4W4zCv9W1r6B7nhZqazbpr9CZWYMQYtiyEgP1g6oQYFSSfwrbKCiJnLS9Za68uNcNdiErT4BrbSGbzr9XM2QhBPL",
  "key22": "5fk59fa9bNw7kmhkoM5U1FN8xS8uQg6a9FgJL3YJRkwCpqRpDCdqnox4Kb4ThGYD72vvyee6E5D89Rw27odZCWAY",
  "key23": "66SpXnbDz2DgEQqLcv5UznU1bRbqE7TVmjZSieEictyvpJ6dGqzemkXPyQyj1e86WKNzeTaWfvGvU5yTYdNG7A9N",
  "key24": "4kraMPVdq3HiooUt8VC3odr9TuBRSQS7ZCui49W3R4KLTDFWYwpfEdzDC1gky6d6A29ZgLTnkDL2PNQGx9mGMR5z",
  "key25": "2kQ28BshL7pozqj5asezxHtv4sauuVqJrA9KVKK5ybRxh1sR8Fr1NmiRBbakrHGm4CsoeoKWnxbkRrqeXqSG7zyW",
  "key26": "2ytTRQrHetULdv2y2DEPdNGK1cwihgURUGb3h13Fx2UzZpMAzFK853fGoMtPBujKYPrc9znQsimq88xK54D98CmL",
  "key27": "fgTAUQUKhdTeSvithYfaEznLUMuBmfbkzdnySFqtGbmNihaZTUHtUGJDQ649jZ6cDFeZBQNvD49dDGvNFtevXaZ",
  "key28": "4pPTBhhUXub5JsTY5z2DNY9xPffMvQjzCZ7xNHRtSfPqFHFEuczv8KjoZmYDgN8YEYt9KomF4BdeQJRPtuS7t5Yb",
  "key29": "cP2NcCtzhx445f9E3ugs89RePuuYRrvQNXiJqrRwPt27tFkwagZfZFeqwYCdw5BGCaKxxAGAqK7nUSNp86KW4U5",
  "key30": "2roAktQbpfD68PdLi2EaexSJRKQ7LvipsdvAD7gapC6gsjWWEP4fUTnX1Gmuzx2L7UNWhvxWMuRwHBXyypCP6cPp",
  "key31": "5DrN5BcneEMiuRDoTQkEFYatr8TUgpkCUvbasg9yyPrdqGL3SHQ4u1jQWCGa4MCSQzhwLrvxTU1YpBAXi2CXMFgu",
  "key32": "3gnHgbsY4NfXpJW69n6c8sVPRPd9EjG5VjJJBfXczv8SgQFwKp6Wy6dmjwb37nbZq9mNBebavzYM9oAqBmPbPeGR",
  "key33": "5ByrS8doYe2tf8Mtzbfqe7PibdrqHxxi2dk44xMBctuTVJJVU4J4xvw7VwwNpzMtL2koAuPkadHKtyk1duwwHRJD",
  "key34": "2KZT12FK83BPdFHYq1VHBn2CRGv6yMD6ADStkkekNxd2z8EGWiduYP8BqFovDZuEmdtaqRaTicLg9rQEiYjkDLYC",
  "key35": "4upkwsenU2uahQaoyCc2e8Bc17AwAp6V5xwrsUAuHFdDjMsNbeqQRfwapV8TkeF4eEZD4revqVPx6doioN24Mk8",
  "key36": "5yQuK3bDnWxmyzJZR1H7HfjmnL8Uhdvw8n49s6VobD4wRjCUc8xf6SwR9QpTxnEiFwUEqsGFBCmVZioD3WPG2X2E",
  "key37": "3VA2ZzTMD6diuRkBANHii6r7sezvZ4ZACiQ5ouKs8ABV6DfEJfFYmtEpBUaEqUQCCRCGRyAsD1RqjvPRBydrFbib",
  "key38": "tnF9Fd7fKCNMsNQRWQQpjiUFKLkTfSXgeBqufYiQX9shV6Re7saNat3D6bvvGgX8aJghzG7uEVqZ5vzmz1VTs3i",
  "key39": "2Cf338DCtvMQBXT2QEizxGbpcmuqaf5bKnBx7DmY1Vb8jfEopWCXpBiUKCvGQzuqZFXbN466pgRcvQb7AMFUsxBF",
  "key40": "5mgWtZSVGsQW8uqjJf3e5GtKaDsZzLkQeMEfe4XazKZWH6ccb91xvQN4bmDRy6VvKg4GegV7pJJmbG56TvXSqARh",
  "key41": "3WqT18foJYGCmkyvBvFjaavdbjxyKkt2qSastru3VrV8F4L2yn3c1vcXDcAxcGMKM3mKTFaWTb6dBbyKdJfa49m8",
  "key42": "2M1gwXTmExeEWskQ6WrRUM7srY6p7Cq76kUYJERxArtP7HEAmRhSi3RDWVzCDHBG2PFHa7c7VseSqH76rzeVD5ZS",
  "key43": "4aVvR3eQ3AV8Kd4Xz32SyFh8qc865hDo2HYTkB5GPGR7gUSn1q6GTu84UYFcz7BQ9crE5cAFh3CeLyvn4FNmkvKE",
  "key44": "3J2oZFzaKroiaCHSNSuheqKCBVfzwtuCMN8yCFCWnaMM48r7NqDLxxz3HHLFBiCRnEfLGULdjk4QzriiryoT18Yw",
  "key45": "4dLsM3qJBZw6UW5NCB5ji6WjnAjHSDLoJeBQDykUmSt6Y16V3mBrPqafudqjRd6bSGZy4auw7iSiMjHCF87ovuMd"
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

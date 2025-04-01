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
    "S4k3Fidfhpyccb6tMcXDnwLFieDRpVS5vfC5jizviaREjzpcKx3eWPsCS5tJ86kmbRwqViAGxR592wPhJeYrRfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52pP8FGJaCG7Xc6SxePm5J3PnQ7Hz3TpXQTUHQzkWZfUjpkks2oUaNi3ihCrSscQM7ffP7j61MU7SDtu796ekvok",
  "key1": "37bcrYa4qTGKtNkaBXYGEXcJeBDcWoGkKvgWBgmU7yD2wdNuikwVRw6e69qqGNWT4XcixhXKpKmNTUP1dWJJaPq",
  "key2": "5b9hcJQNXeYpNvtQgddGGvoJ78yH5kFuTsUX5ctZBe1kwnLhE6MKx5AsFBg3j726nFt53CuiHQ22KXK8hEVbsfLx",
  "key3": "2L2bNEJAMg6dfjw5iCNj9X4WmBFwrM8GkRS1W8wSjASEpbazaG7BCuqj5ySxD8jWn3sm5m6zzsUbrJJRof5d7rhL",
  "key4": "3KMT8mQ7QVXwaKtNS6g3pNrrhSQnke8bHLjfKD4R5rrPRFuL57zQKDbWVEdzxmsyyQybwENFCLmVvAGdcpnE3KCx",
  "key5": "2p4u5fi9usjmFkeahR61WH7cnurN53RtG47t3DFEv6e5UA4x2MHuoUZooh4UXXtv2GqvVfKo8YkRAuayDmBomodo",
  "key6": "3yNDLzPmA94k4c8w3M7fG9jtN19SpiV2ySqSYRoZ23pypxGvE8KWLNwZNZibnS7c8C3Cb7vaKxaUTbzcTxznMniU",
  "key7": "5cSD12pKQxibC3nefyjK6kvb5UVJF37zgH6KgkPvsYzZf6NLi8EsWhqVsUxURi4DjmoErDkZg6Marc55D1n4TUtP",
  "key8": "5nrpLZvT3CSRySvFY1BAKYPSZVBbVYqdvuUs8ERBwG7gZoDnyzTSFpBUvhSjSFfFcvMi9USw47yNcDG5h4m1MJUt",
  "key9": "5oRZ5NL2W9xMZ6aSiChzdwTTCFVgv3RRcYNGkKuUdTWhXeN8714y69S75s7J5pjhM5SVAL6DF8KQC5WQo41c2gnD",
  "key10": "4r8WkrdJDb5yA2ejF7ByUZmjyNf3BoGRpuUVDJPw4t6Y9ihEBM5dBoUAzs34EVazui5f6ACJ8WEkzf2hZKE6esMA",
  "key11": "6pueTAhiSq97BkNiYn4VP4siSW7xkeaAgnCFojQvejg7q9UhL9t5K64a4JDovf8RJKASd6gYnnVKYFRwQGTmHo8",
  "key12": "5fJG5Apkta2fivnpJf7mokC37woC1fn9dJH7oixWU2n9mmkD5ozywWpyFpKoYUzkUXBkyJPAD2CWuRynMfTc9DHj",
  "key13": "4R1p4k4dWpvVhWsB8X8ox9FHePzzHFgdWhXaYrChbxqExhpivbUVneUhh67Q42fKDyfnipP7Zt651NzopmUmizb9",
  "key14": "4SiMvaz1E5W4daFmsGzE64XP1nW6V2i8Vg3CoJf3jQeMD7FanGyGDTY7EMyKNDzwkuYXDtUZ7oY8FE6VABEQVM9a",
  "key15": "z9wMCS3dkLFHN2W4ngBgUzefyLAQAqVNSZMXytLzt2FHN9zrngySBrsXNYsNkWdshWhdKXazZxwPKhFyYMkkFa6",
  "key16": "4nqgPJeJkQkReynQmuYfcvzjQD21wqVb1wJeroF7XsU8VdCQGH7REVzDZ2icQDbsBcSp3wijMYNpmXuoQ5tXeKzQ",
  "key17": "32hKDkFdYE1TJaSK7aFi7CSJEaQUBetfP1AUN3taSXYEyt7pb2B1wYbuGcxfUtcxPxLwAPhBFxTHxRYWDsUQjSut",
  "key18": "2wpFHk9LtJMoYRtzE7nroJYeNdbjW5H7GK9G7XMpJniLSXTxGcoFAit3JXP4mLJanyiQ3uJJjyyTrEsp6temgVxw",
  "key19": "4GQBbWw4VR62z7sdxRp5vqghL7t1k8BX3EQHEedZvbEUx2G6HRvw5H6cyJcYqAGqJtKSWrrt9YgMNaM9R7e5ynkc",
  "key20": "28Vw677R6CxGCpcrEDVYAJ9MqYRVwtLRqSXQS4YwRyS2zEMuxZGTq6EMxzvifLVTPgYtVmjUMproRek1uU8mAd1D",
  "key21": "1UgMr3RQCtcydgMMc4FqgUjoqy6NyyXC2qt1hfaDFRbjShqiyEpRRUxHMLnWEEX8tHxGDCtgrzFqJFrER5JPMU8",
  "key22": "2HpvwtEYQvBP9J2xHUxMdkmvu94TZc8WXYq6N1X3Uoak6kwcSzM3GPTVe2swYNVdsqHT1qC8geHgZYyp4GJb64FM",
  "key23": "4zMHW9LgP5Dx3Xh1E5k9APszeWbc2DhwQyWZxazmYCJmGQDykdzKxv82sUm2vQRiBNtsCw8SaeV7JKERRsCihcyQ",
  "key24": "4s1jqQmVYeiHfoqskZ9Eq7Bo1iri6ZesrxtXxYHtr3UdM8n8NfQL9LVMaWo9mVccWYUGBzpYNKa9iNcaHmTzEdLA",
  "key25": "21UhiFagEPwkiiZPGmq5b2CinnBfGVgaAdnjncx85XSGt9RnuZaEw3fHenu7a4trVGbQ8LymHVBkRBXCScQFJsU4",
  "key26": "2GJKrpT39gRVdnbA3YJzkTrEkosKU7CGnbg3PQ1vnxkf84o8AR91NKzWHJ683AnF6GVLyHmLBggBqUidb5qg2cjP",
  "key27": "2wje1rDpMWtXq1jzyD8gbQzp4JibRhM93Nqtpfs4ZXHsMaBnfH9ZfCHmvbxLoEhFd3EE4jrFQN9bpgof4KXpCX9o",
  "key28": "36HcxMvCcWNacpTpji1Q8C3kUQ47ge6nZmbF1kQMpropSh3aGANXnLewR9rHP2rsBpYxMPNj5uryLMhSjFReGQw1",
  "key29": "4mpq9SWGeyafCVECn1kdgeV1jgwuMnxaaYxgagGabd2D9k8sV1Pn1sAzMQ88DTuRWpXuHRQEEAzESHMt1eCDxMiG",
  "key30": "yP97Xbqevu7Xiq9SVUpUnM92U6UMY9PAvwSA8FWhcuFSHpAZnpcKVYgGVuKCjEjthjJpkbrU5EBVpz6GAdtU9Gq",
  "key31": "5691oXW2fzRC3bHx19hkM7xLBa9QM5SpGttwKX2TgNxDLMBkuQSadMbNa84e2cKB1ugwCA56e7zyxm2RxUhZAGZE",
  "key32": "4FLXVGgeD4YUfuoERhLFqgNyZAwxMm6J98wvob7mbzQkFYBomiT6Sr98RrpZFKTLZCfwRRo1EcxJVFrC7w8HtADC",
  "key33": "3Yim91JPCVPN76ZdmDzb1jB4BDZTn2scR6U3ZAnTWidmL7uLqM4jz6eYnph3nkfLVFpapBn7DtVsn9BWpwPWQ5jX",
  "key34": "ut3Hv66ZEw3f8D7hFqXsQfQWyR38PMPwq3mdbpr2PK2ruNtXnH5EmNoe5xnT9Hh4tgbbEFo2JUANbCdBjTFSDTS",
  "key35": "2PR1UWGhLmmkFzh46azMKiMMy4wLrSLb9714CFkedE7de1N5v9LJyKqscfj6AXA1vAwCTkYzpFitrvuTA2mkfaeH",
  "key36": "29NuX2c97TL5VJD2JqKGDf8tREDu8at8nsefhK2ihjVKC4ezZMyqS3KbytEcUQUC1UTorVbH7cmCwkL2j4o4Wmot"
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

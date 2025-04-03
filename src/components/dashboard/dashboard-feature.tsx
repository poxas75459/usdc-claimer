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
    "3h5SF5V6S3Xej7ScbKM6FrGJVyKDs1euYsRVW3inbKfJ9oDkgLMZ5tcxHwexA8VBFhzmYBWaNwpmGqhxFDTzsrAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjkVuWsBaR3UNX2JpzrtQqMf2WnwN1QFc1y8k98tJ66Dkq8c5NtBhdBRTfFkeVByfum2scsU2kYMK1BUDrJhYwp",
  "key1": "5vbaxnDLTt37k65fJDL2AxkPe1tKoFDRv4139JoXtSCXUR1ZcoB5YkUqJJgvFPdSpCfK3e8YWsMgKKM3owTqYvSL",
  "key2": "5WSuLC1jUFu23my8mGg6LATkFcR2aqA5WFaYcgCn4kchAPec536XBCbcnzej8b3JVUX1qnPvjAtFeNAgvgkX2S3X",
  "key3": "5mWdMMHtt7YpJyGKcv3CQFjzN2JNLFJKJEDRgWs4CTzuaA57oTBJWVUEShL5af1EHwonskiEtqBJzJNjuksngRpP",
  "key4": "459AKTeyqG2WGpeZ6jp2r63MUHNv5kiv4iA8Z5GtsmESaeuC1yqSg9fddo6RX4SjGCAptrMwk3KinMRtZT5m2W5s",
  "key5": "5fa9UY6BxHVDiY9gZo8nucNBrn59uvqKPry6Xza2jL5hsf3BWYpVLVqKUdi1c2J7R6womwNEuTzexKDb41YAWvGa",
  "key6": "59RrJuoYgFusVmSg4EmFB4dA1LP8TQ5nJr57zCvYJRB8jGVmyojqQ3A3kyzbcDD2kicYEbGa6KKLDTF9ZwCQeyjD",
  "key7": "5JLUL2zrLt4GaGqbrWZnvEZPejq86ki2fXUpp5cJT21tg1e2scXYZm5RVAuERVhmjVnZCLbwpr19ghv8W96GPZ7y",
  "key8": "5bUcMstRfTL14HQhfoFsXjdrkSyybYAQ1UPqJHJAknExGR2VKX2h6EXetENBDvAoiL7qjy5mzKMMDUgavY9ZUtPs",
  "key9": "Nkt1JJ73kynhMonmopXRMFkduAgtBn4bZrHpNhMXARxFfeQPMTvSYZGop4NSq6kheUnh1TDLyAQLu7tSPUsroJz",
  "key10": "3ozLgrf4P7C19r5hAVN4qGqoT3h5KwChcd9r57g2daZcLU9bgENgKke9oqrsPMWRAwnHX192tSiLPj2Rrhnas1f2",
  "key11": "5QuY7P3u5bGfHzknGnx8mgiV461x1EsQxnnSmhr1Z9DEtJEK1Dho87Z5SEY7YB3fC9eTDNxcmiNvadDChf6QVGUa",
  "key12": "3sxXmp6fw1hZ5LzJaGUQmwPC1TiRfPraM4faphRha2FGCPXpH7b7S4kmSyNU6KUgbWKLGWUC4hKpCuVMnwXfAxPf",
  "key13": "63Ac1x3sHeNdn6bM2eLTw9xCRGznQYWqScGsy2UyyzmEJZMkQW82jcZTDHSCvMfjvkrdKVzBuEvgATzERq2s46xq",
  "key14": "C6dtxJ2XpVn8KF7SrdK4ZTBro4GJuvWqVqbrYcZsL6BjndNAXvvhXNNWEQVSam2TodVEgXt8wB2omdRfT9kNAKy",
  "key15": "4uuPNvypZwpR6wm5nctjPrNi75VMREeHtuMiKGGxBEtdxC4mAdpkrEDeTti41GAW3ZskRFErFUmsUeoDwi9FQwZB",
  "key16": "5JzjD7W6qQkQEpTzZ5sTUw8j2qhthfWYKnhcwd5TyjJN7LgcQdjswywz8WdRVWZLjW6jCoaZHrfwvAQ43L6uukmo",
  "key17": "5tBNdbounFkTWxXAAA1sdyUjFEdVSVriQFrGXDbPjurjKjAddJ8vnVz2icyi7tpYMNHGGprk3R6MqBR8Snop1MJw",
  "key18": "3xG2ExjaTe4b6yEzux8jtFB1MgbUfoJu2c7yotLkFvVatbmCrwG9w3UM2sxm31nerC31dySfUpaW1cShfbDb51cD",
  "key19": "4KmWV18uD3DAE6W4f9MaVuh1hBTx4FDvMbpTphfxR9PGp8ryr1UBucLt9RDJhhCYQg57iiAAhVcfZBKhHeDfJon",
  "key20": "3DTY3Sq6t8c1QChopa2uCLLoN78temUcpzBeCpvNntu2wtBRADTAPaVVNSbbXZFVd5iUDhyyiPVnKdjoZJXvjvRa",
  "key21": "5QTsnAoW9MLgDknENie4Cc8PuBSryThuhucyQxCT4CFWkCE778NH4SMkC43XFnX1pHzgdXW7SiwgMwYcxEpQyuw1",
  "key22": "4UC2o45gXYYWaGGy78T6LPntgC4goBGkX7ei5Z5WPc8RTna5gUvNAmGm83AjmnFp2awwydg9nYwf7aVXJFVJ59uA",
  "key23": "X2Ja4Auz6U5LALBEnd9CnYoySKsHDKeJHNZQN5x388bWe2wE3FjdW6qSzVm7HQNpMTHoA82VKKVn4ZsFniTrYFo",
  "key24": "5Q3QL4xh2ACH7g7hJ6QZ6zPQBbqVLrBs79J2oU1xAdXcB6SyKdpqALcHF8sSuP6UtX9kV7sp947T8T4isWovBpc3",
  "key25": "53C4zMuM5vz5aPHREjg4bEWUSmY58UQ8rsqQvDJiBr4xDbzNmZmS8a3gBgdcC9fssRiwbzmNupwsnppagoTxwUko",
  "key26": "2hbZuhxZj48EJaGmSd1bv4tebR1y2qX54eSp3po3H9vHCiBV465LxvdYLNjegTtjUinuHimxSaPrwGUCWxCUPbUJ",
  "key27": "5sbg362AtKsZtt4DzccVjHFtLJGsLapCA1AijnVYVZVPSizK6Tsh6bawLqpkc8nn7z3CYx6JVmSGGCfmeZeXdbtq",
  "key28": "ThvGdDTs5uj8hAcXJaFv6mE8ih8qHisLcCqusLurvu17YnUfae1wZvTBVP5zuFbM1LzXX8xtT3kKaa2twdXAJJt",
  "key29": "2g159QnVo6s4uzgLzxqmC382DmnzeRYHRe6EGEkmCCM85X9NXAkqP41GqCfaUVFb4QCW98z8dCPyPWP1yQ1GDBEK",
  "key30": "4yfSae6obwYtA4Y2ghqi2whz3R1jKBP9Q69T8hZuDzJjyLFjJUWhU78Yvj4Nn4uF3joACC49mP1zR9wCu5DJ4k5Z",
  "key31": "4eybbpncWfRnQtqdNEq3inSrsCmGGbJ4v5VtLGg54rvrENweiaxbr7VS3UBCjmCyarVMWBmXdNBtMii34zorU2xw",
  "key32": "23gF4Gb6rtvdpHY6Dc5W4fKdLAqX8evKiLabKU6dsnBmAyo4xkJk9KyqJ8EbQaqCVP8Hq3m1fihwQkCmytMXSMR9",
  "key33": "5jXrMYbKGwS8nWmv8HxNbmUyzNSdKPrcsjbyQh3wH7mRBAfHhmzRaBgn6BvsJPgjJeojU4saxCgPQiptQbZDJvFw"
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

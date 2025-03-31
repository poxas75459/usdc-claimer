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
    "52qjp5L2GQraGUS5e8ZU4k7Q7PcQnG2AQyGjpyfd7SWKnziLZ7q2Fj814fuzycCF855bKLWqWy6RMQ5UW8wLJXTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLg9UPUsJSN9PfqVdxwmZEMMWzZsko7XxgywTnSWjUdWrBp57sbrhSYa1SevyGsWjMDT48RvmJLbG5KN4eW7P2U",
  "key1": "2ZhUX9odhSb5smjLTwrG1xt8DAjvXFsA63ZRP9PfHwv398NsjJwttH6nZ6VshEhK3VbqT2JuMZGu9Gkfwh1HTHQ8",
  "key2": "3P5C69DdFtbZezB6XzfYQbqJJ168ytDMfDdV8zs2UqMJbubLQ9cR85wh2Tkx5RwjiB15AH2x3yJv73apbDfXbM9m",
  "key3": "4sk86xgXkW76FXkRcjDAtDMNDNx5UFCRZ1d3hyNk1cizr72bvbPKSkdQoo8iFW6PGzXVnzKRR8BGaChTgDVynkaq",
  "key4": "5czDqbdRWSEx6i9CmNDizMd3pWYzDXsGMsL7Ki8xPba9WrcfvxtW4yYBZSPefydU6DCiDtgERWxNNwHo2zNgCoYK",
  "key5": "6wvMaGdaHaxLBK6Px1tSvDqSXiaBo6wtZKbEFtxkdJyVckP5X6G6ncuBeRwHA6mtamgV4JDR7qdFothUmzLxnM1",
  "key6": "2nJaynsVQ4apRvpdt38z27Lnx63Fcar5JV2jeJK6dkWmZb3gCFHN1Ft1hPNR9d1H33JBSN39UwPVDHP9Fo4jqaCY",
  "key7": "4ZsaYh4kusK2DzLSargLkaMjK1NTxsGwJyd5Z59CAbgtJH1QS7szTSYTAbwhs1jPoPgvBTmAW1Tur3YSYsEoh9YG",
  "key8": "4JLEZuqF1EpMJBR8JwZibetq4qmYAQKVd82h2Gy3qm16HPrzPL1sdkBoPdessPnnnSJaHn1DNdYVt4JnU1FNk9b8",
  "key9": "ssRoEF2LVGvgXHuYTwrWmHrbjU3K9n4M5WSJW6D66FVrNu5f2LurhohQ2ALzJKwngiqcVkemG8DmUBvPgupUTQ6",
  "key10": "5HjfiCquKcVDCDPw9ZjbRvyzGvRiX8xG6QGJD7VQBsso2zgCykkEAj5ju7WMKUmWC9reQu91RpV7FN8dyQeWMtxz",
  "key11": "q7SymDmbVp5jwMygQPdLY8ssX2GvkarZq3LpB5vEUJX9hwX8MCEg8nhiXAVcHzwMvqxgmFyuH4ZBpwko1rXB9vG",
  "key12": "2ftpbWQ15Hgnv48artdQ2p7tiBJc6XsTiPV3CndTvZrrPoWdh7Now8h2wnJKahToeDUTrujXqGLHh4XnFp41XSav",
  "key13": "3sc8q7V3991Q2KYwAAdCrznStfJwS8oYKdLdt2gy81aRgmDU5VsJt2PBogf8ZZPNzi6FLzGh4MD7wSEhaofSobPx",
  "key14": "5jb8E63f5NVpdgTCJ46YatYspDHhQVqiF5mNEexTazt9agTJLLfp6KfXTmN1cDzUnmkzmhzJS3aEWeDAtoa7bzjf",
  "key15": "3ckjAQkNzFgoTCDCuG9NnPLwKVaG8iGNuFXWWR61WoyefGD42pJzRcicoryu1899rCZWfhG38hbaLrSKVC9uC7no",
  "key16": "4WLKvKQE8C2iosAWRK33UacV97Axqkrh9WaW4s4RTk6SwTVaA4bCCoc9XgSNRFf9uXAEmpBN7eQqetXx4jqa5XLT",
  "key17": "y5BLWXi7Yd8tqSZ9D4hafXxtbqL2jET9hdMeJU8jCNPb393XQnfukpaFt91WfvFtC6QusvZZxNDrR8xQhyz2YmQ",
  "key18": "41SpuqFLXRVqNuf4w6qdk3WPGnmEad4XDXgiueTtRsHsp9cSw6yu4TAfwxAnLr6AvxgeQxSCBxjgt9XhCkB1cNYN",
  "key19": "52whH1qxC2iDM7sxcQKZKJaZiywUwBEREDVj4qyEnNTG3Efz9rBS8ieMnhQm1RyNkx42eCDgPb7axJugmeXGCxQe",
  "key20": "4XApeqssZuYHQyVqrfzKHcaBtFVn16XJmjsAE2X6rRMGnui9PWJYiEgSifv6BpUB3NMYRRhmJwDRxoq5rtuqgam3",
  "key21": "4Ym8PuUb3Yw3QhoppzpM5AQ2FWEy1jEqocGFFodaKzCtNm4nMPwPLCKHPXBEv1stiTiDptwGGvEH18KwdZt3Mqer",
  "key22": "2DYi3j9MRdeiTtoEKq1vApnVRhDKpeozcsgwTvX4uonV9g5k1eWYAGW4cQy8L29XwJbJSj3X6ZL9c1CxfT8pxzFP",
  "key23": "5b5hMcCmWp6aAJGvrMKg8DtEQevLfKW9TZEpam5Ae7HEvAgaVVTsyCi4CRefgUmZRbE6MvFxVXywFAzSgpnbwX9d",
  "key24": "jwsV5sBejBpTtRyHuM4v8jw9EZZbqHt17kpoJd42M2rnqrNwMNyT6VCLL1nc8w5eBTt2bM3Q3UrqhLLgRGTFtQW",
  "key25": "5Nw3dyze1CdV6QKLqryJLwPopJpLU1Bf54vGWPXzrivxAmmB6wods3JpueiRTA1h3GY74BV6fm3tdx6EqDgCYZhw",
  "key26": "vwuz46RW8n9kMxa2PHZ8pEV9xgCfXSxnTtFSRs3nXULaZu2vyQWzv8WLWBQCayauDAHg2CgFNMEgBh64Ap3oPMd",
  "key27": "t95sSSE3UjYMThtcEtxewG9KNKaXD6BzFfuCQAUYuPkBZfHb5iwG6DUUgnV1SrszeCS3YrKr7aZza66n23Bstz3",
  "key28": "5fVdaAB4nK6mCfZNi5fZwoQ2GkHg5W6id9ymCBVLei5j5QgkL569g2GtP7FPfVxZwRfEyx3NFLQLw1YixRYMxhys",
  "key29": "4UE1WEaxCxPV9qGvCXpY5na16rSTsC9UppVi31foBjhproNt7C9iXea8prkDedHNkba7DV4EPZ83GZVtAeshceFm",
  "key30": "4hpSaFFgHMrPR6yfiqsATBDRfK6iPKcz6LLLnCexgTTfi7ETigvKoGyRjuGFSizgfdDaPHMjzFqrAvPP5eyq82K2",
  "key31": "4PaNmii4PMSxN7jy571g3qEqnTot5iaQjUpd9vGvWUCepYWJfoQ8Qb5BWf2swPacFQYqHxcuABx6MQaSaAi1JtFw"
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

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
    "2CRiMXahkzUvdubjLcdmjAyWcrjhHtQtSZNdT1TdgEfSKHEkoCzD3GQVaA4BSjwWAYSvu1i9QdugtnKZjG1dmRGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctsWL5yu4T74UJu8GZ1Q9YDMx7da6RGEcUHsmustbYw7S17cmm5uSCSggq9d36a685LLhpDQNcC1dWMEEQdZprh",
  "key1": "3WVdxMAovjN6nbd74fVGQfE1NJyEXBtVx1zB6fCURAHYXwQktJYeFBGrJ9Hc6PMY8tJ6GwrQsKA5vjb8DdM1m3om",
  "key2": "BCPhtYdSr9ow5z9yrbnMzwG2PaSh78Q4YqnZKgWDZunH1MZmj3n8vkvFbrug5fn1xV8XG8qPKEDcFKYY9PJPLfM",
  "key3": "2sAe6tmCnscCdqKGMqxMPUkq785eSgEMETPSTdxyNiCEQHmjJSVrej7tSVUJZNUhjv1NCb5Z1WLgfeuEVr54aUAB",
  "key4": "5mNs4QPfapC3gHgbBntdkGF4XeZqVTiLUdaZMWdotmbvzrUKUH6srtM8TPdj5q3UDG6tS4Y1UK5Nj8nYEfmjeBXq",
  "key5": "3Bo21PkuJxbFRPVFa4dGdQhgxJQQy7CqogQguCmU29Gzj9WbH8WRoWY215MPL1p8ECF2uu6m26KQCDj7ek4fFbcg",
  "key6": "3HALYdo1sGq1Cf22Eh8mZiwz8AxiBXfs5aMch2NtTHNLwHN8L6CLK1wLi2qhSWMKn9o4f3Q6q4siCDTatrNVUwoz",
  "key7": "5k3m3qWpqckfiPcRK6GjE2uTPJouDpcgkk9hbFeUqyUCQnVUa2fLDHr5eockMvE1nP4NTqiTxZ4PKJYuZJTWCMP7",
  "key8": "AZLjeT3VEy4swanNAN1uwmsAn5LDQe5a11n441KA5s48QQ3BGfgGTMByWFhrwzeQS9sPocvJ3cvYVPFaSt4cq8V",
  "key9": "5rbC7makkhMnKTyHsfw14sgWyoKgrQ4auJFGU64Do3xm3yTw2Bt7Kg2PdByKsCfuZkLaYEV3k37GNNyWrYnFqM1a",
  "key10": "3RtMwpqhkgqog2ennYTXcKrJRmrguUSo4BifqJhD7L71RdqgSAYe9hgWyPBtcSfpc8wQYFUPE3LMGNXD8HTcXz2f",
  "key11": "5s4PaGeTS8qdy8Ya2GHTqZXL7dXRSg5dGGFffhZLPML7Ujj77VzXfG2bXo6CAhB2guxVFJ6W8n4fqs8u1xh7NpfP",
  "key12": "29fExNdwxVWxgbE3gH3e237iqEhoGK1vsEYAWeXU7D3b5C8E8A1b5TAZe4NeyWpsg6RG2CCGaim991uy1S2k1Tq8",
  "key13": "4uJyze1CqoM7pywBK9MunHvCTCo6ui8fW5SzpeA9cPd2YHUioiLcDbiHzmYm1moJcp4R4wKhLWJbfC9WnGrBstuX",
  "key14": "622kcXz1ThQcSJxcNAQqavRq3MfRzttQ4qHfyEnceqf7CgcFrwbDeJBCTpDKE2cEzUzJXG3eP96Y4XiBH3wHbcv",
  "key15": "4N9HqUc7Yz3wDM1JSxN7hGtNMzebLfXBYW2fLWR3cvubYXGmh7Jc5nMrXSSCpNzGDXv2ZyvmXQPJmoEsfSmAeomJ",
  "key16": "2jesPJRyJyDoGhEZLrmPoeLrfbfMaoSfSUWK8hk5qoqavWqPMybk8qEepEFyRKoV6R7oHJ5SXPxaFxjVfpUvQufZ",
  "key17": "4weQSK3cjryT7DGAmmeHi9D3x1boSQgFNzdJnk5xtTFGspw7ZBRbQZUU9zSGoKX57pE7aQ6oKyTR8ivi3T8uKBJh",
  "key18": "5ZMCDTHP5wbPYczwJtFEp1S11rBvJAmPNKV7DmJBgetX7pmV1u2FJftgKNDGbfUTKqAJcsDgN3kbfVVhRpgQVARf",
  "key19": "21s3VLcVz9VrfyYRX2nZrQQbmHZDSStP1z8uGABQH3ZXi3GLDcmkBPT5nTv3AFmi8BKR8J1kTfn6MFHRw9DmwQcS",
  "key20": "4LSsr8wCuR8eSGTf3Kr2rqzXHhSyNv4YQjg9D1DzwyKdhoHZcQwqdKr61WVcZcSbcQ5z9iZpJqzJTqGnTW3ryWTG",
  "key21": "21e3rxFPJPmLJ3QogGP5o1474aBESifeywdzor4NNEQKKSybQhVGbm6MKBJYEjRZdwWymGpL7FWY2X2py1VMHc4R",
  "key22": "2BdM4nJJSP13GasKksQAT1YFjWzmRSV6MPq6AFnahoaaGJ8ZajkQUER5d8dPbjypNTpjnLJi4PMzYSFuFaJgg5TV",
  "key23": "3qqCZYQnCjjy84SnsQAgWWU7kdB2vQt83L3jFPRTZdZaKwwWyY8X47WaXLeHnvv8STnEnUVAfdBDAAzdoisn3B63",
  "key24": "355MzUABmdEDWnUHbG1BLJFQesCnapeEgjamQP1eG6zfng6oCxbmMEiW11CrmNpmeGBcJHD98fk42JMPS7vExqfN",
  "key25": "hEprXqo9Di8Yjgij5he7roKZ1m47C65xLD5NcEuMqp3steYcoivGz5eMpuxo1sU2omreGx685HCqE5YuwirKNsh",
  "key26": "5Xukkx1f9vzEVMu2AyJn2EBH4BLyhsCkFL75bMR34Pf1cvDx78YF3y3AwViNSWjV8Qzy77wYS4Vg5djRYyCBpgZw",
  "key27": "63JdSSm5e2PULhE1NwDQ4UqcR4s1soti7MPEHYLtWxUaKdaTwYGpAuandeMMw7J1Bbg9MvqBwje2Zw783wjgtFME",
  "key28": "e19kb77153SCgJ5spQb6RDN3fG9DrTQrVw3aip3WCCsmhPzFdao5PQ8ku92BC6Y19cpRutYF7KJu2638NdBxoPR",
  "key29": "2Qz4JwxJFCJEejE9KVTvAjpd6MzN2skv5me6xukzrwvXcUDg8xhoVKjDZ2p8udWV9XNX6Umn27wSEbnSrFb7Ktgi",
  "key30": "4t1VubqFt1BU8kYtvzbatSzezSfoGeyDDSd51Pn8bxyBhUuhvBhzN37pwrfgqXPxY4yDbX2Q9KHSsWF6mAhhvrK5",
  "key31": "2DcQg6iGULt1oXTEsjtgqLFDYyHzW6fPErg4kyBELFRtGJrDDmYS92zeZhxD4ig265P4wP5PXvsHqagqPLyUqW4A",
  "key32": "3VhpAiShjmbLU2wGZwW55rDxC6ZqfXGaoLdNR9r1XYn42PBeskzDGsqsUKDxFJVZn9d2H1WSz1QHmeuXY18TGkqZ",
  "key33": "59rAfzSzQhdRrY1qx6Be54CSXeSpc2jFumCJXZHL9ZjoGwtWLUvDQjarq9hz8CdaC5q1Yid4qUYKHod6CxYM1nf",
  "key34": "2CrY9BhGc7RVhiaDNJgLZu24U5FCfKvFHpvbzXHA7woFyUjaZfr5qs5ZPavXPeJWgLEbpniK4tCJQJB836yBTJaM",
  "key35": "46B7U47KjL4codPQKCsFbFRyADrdRHjRDJQJWSMaU8bW5k8v3M8iCXKt1ja8xZuVEEqqFKXMbyxsfeqZAMB88VZF",
  "key36": "1qUuxFtbEHFShEkyPfrdTWtSRT5fH4EPrttzJZPhyqrz6QhcTs5rZWsh2NKNe1AS75mjTh6VsyMkgJNT7in53Cj",
  "key37": "4AGc4NkmruqK8LWSbEy3psgRmmP2PrU3o2MLpjkpvHXyo81Xp2s6ykVtsK4r83iVyA1gdy2viEvUJeUHd2PMsaNk",
  "key38": "p7mpAgB4YtqEvdAGmg1zb5HSYzK3334FHsNDBoQ68oveFYhQzmrj7Ah2cTKJ5Dg9AficiNTxuMsDdXNGdokc6yx",
  "key39": "MPmGZRa1xCVB2kR2nyk1FVzsDgFvF91J63mQ6pMdzJmsGsgK5QztCuhkVm6jpMDxDLiMYsjQHU6q2RtNU4nJUDh",
  "key40": "4VehCXGn8BHiREjgT6R9yf9WUzec5VQWrZVV1mLoi2F2ct9uuu2q4bfzGdub3ZP1djko6yaZtDjKyKFRK2wN26q9",
  "key41": "4Pqb1u1qRtsq8sx4JjeaYe9pfZ8VyN6ryaCbfqnufJGZWzhr5ACySUoEJvppWXieGoUvhfSCGGdvy2Fb5tFZnFtY",
  "key42": "2tupcSrvnHFSjqujov28CxGT4rdFh6ijfzcV26SyiuzrXB4UxYwaPrKDitmw31CTMPJfEwe4CyUeHV2AMiyebd7g",
  "key43": "FpFpYQ51m4fWBDdXPWUWXtPsfyoaArrfQRJqD9noQ2paB7TUaH7Zc46WgWkrPvVcofeJCA7544z6GNereqprTCP",
  "key44": "WH73TjXM5UbXptCmrwBpoHHTAUrsEyG1Z6XCcnSsy4Aa195V4wX7frvbkV4XpFaw24h1asr3RF9zegs8Wi7LZ5w",
  "key45": "2vjYAaE7CV2tFshqYiWmPQxcmUirztzby5isfa7cWHEPgkn94agH7iKpcuwwZMG2WSB17k7LNyZFudAYSiino6EP",
  "key46": "2hkd1pKf11XPucid1Q524HLu1WDV7sdbf89p9n62cpUm2WhBFD3FvMt9a3xGx1tKtKNd2JGr9LeeXiWr6bUNzuGN",
  "key47": "3r8VQ2enzNGh9eZ7J35FBh5Qi55fB8NLvFwRmdhWMjMomKMwbuyVPQdfxcV8Jb8furjUvfGT3dh4zqFeAki6gbAz"
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

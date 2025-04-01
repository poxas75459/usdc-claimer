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
    "rbcRNq51eYyZ4zvkwSthKeNZ2TjVkRvA7ScPEqPHXrGSiBPp3GbJfK3BrbWwja8eCczryiTrVgmHMVDxM5NJrmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QAHMkPgpJMnTQUMX6v4iPDc175DCLPsstdnSDSsUxDzGYUnE33GThL36xaS8dXAPtmE8Kx5BKbNmf166WJ3j2Q",
  "key1": "3QuRzU1KdndzgFznW6Xiq9RPWk9sB5rpr5igywUfZekb49yGfW9USLqFWXHbCw4AgibYG4TTiRTRTeRtQAJxFKZB",
  "key2": "25YZVpyfV8VZxxdwVeHjcE7ehH8GitzwPrqAFp8JCSdCQxJucZo1gYxCbVPWH5dVS9EdHrUMih4g3DQTf7ia5khx",
  "key3": "3w8EBiGz5BPsxfTkuq1c86zcKzPoi6o3oAS9ZQBEUNEDhB9XgCUPjGfGwoapsZnAY7ptwaoasjZXk8Ji6Eh3LsX2",
  "key4": "2VWyXQPB2Rdp4LsjnERinH6SUqy5bNkh1CY6hhHLdbJa2UR3PnRHbgr9XEA5fxA1VPg2QZx5rpxbuEArGqwXwipB",
  "key5": "2HKJW8Fq54Hk3vMnFPU4BKWXJcusPg7sy9WzotQ1wxzeJKkwbJCr7n99sJh6unYxDEigEaNTjNAtyJjRjM257hkp",
  "key6": "X9mzAqnyLEMRbE2sj3GHi8RrcpMJJYEsUKiH82coWD7tX7fs7vsHuiRJ2Vh9EVqoeqZLEoziQWz6H3nkcg8f2ra",
  "key7": "Bv5XLkH2gy2A2XuGVW1UA1NSezBuPk9htQUuKfLCqgdC7HwiBQz5uXoi6KYsf3pAS4RoBXYxZHKW8aS7Bz4HSR4",
  "key8": "4Tv96H5vw4UYWbZm3augSZqgzbp8yU5uCqkgJNrfXScD4Cdd1yCBt8aHVbwYSrnpYSYHRBodAfsoEuiRqJduW64q",
  "key9": "572qyaV3zxkVKBytjXoQiMvrN6gQ71NhtEGn5gVGpZomKt4AyDzKjUoFh1X4FmgJn1VgVpzQk9A1LhV5tCixx2HF",
  "key10": "4V2AqcjyMoAD9NsYN1ZPZzgJRzXsUte3G9Qu3BAZWyrELcyDo9SEHdgGveKzktp5xVfTZwa5XGjvvM9h8yh1gex9",
  "key11": "AdbNhdC2yazStFzV2pLwQDMLZkbfz7WKQh67g8MYtnroP9Wq9aYzhaJk5RWwGFxrYzorqm5UhVvPFRaToUjy3ji",
  "key12": "Gi8gsPWT9tFJ6zA1HYcmyj9ao5GUDoT2K1AdNq6zSvMT5W1hMa5NVpjkVs6BLG6EA9dgPdpnKBecMin4Q6KpKVQ",
  "key13": "GxzT6YUpnnvycwh6UFYcSh6hUFSQzggTsbuHKzbr6m5qXcCK3FE4VhRyBnfSYjRvU7zoSs3aGNkUtUYEiEtKaDZ",
  "key14": "2dvLGx7D4464jqHMizt5SEcp1yw19rzXNVkYi4zYiYn1VNrRCsQDQpbmhzck3jev6z6Bu4digJZXZUknYbFNwucG",
  "key15": "5jmfwB5nYHwmoiN8Nm2b3KRpvrdUWQwPZCT9EmdswXvzd2kSREQ7EGGyV3jodTjizT6FkXzvR5aDnJqBmDwMfwie",
  "key16": "5q1fK4Bnh7mSFv87wERGueKNJ9JEa5cBk6YwpzLLhddqRwbJFG2hxVceo732JbBx6snXwsm4BsmavRdwjx2JiN9k",
  "key17": "2T2RELp66dmTejC4tNMfDmCzaUnxiD9k5EzDygQoZ2awcHKH57S1cmDQ2NUfeKxzpN48tGBSgkjytWUQLwykwFM1",
  "key18": "cywKmwfEBQjZaW1P7pnY6boAGabihg8ee94eLR8RfHRvZawnj3FgJafFBfk62jgjLsjJpdHzZxUyRDtBaNZvtGf",
  "key19": "3zDPMV79hk84fiRWiRS4uVJWx1rgnEtuhPajYsnr8754ytwm94j6npR9o25RcmiZtpSmEJgUmre7KPLmQEqEEgD9",
  "key20": "4BKdWsAo1L8FW1FBQUzmrzsuYa8fYk3AsuiuMMRZYyyhys3s49Y5qEfc9X6uo8vQG8Tdymbn1p3yxncZ58D3b1H4",
  "key21": "4v6wzqQ8oB6Lo1WpMtRb3CnVtMFjn5M9aAzN1dP3ChAEZs5QQBJWckb1bDpURsimNjovKmoqcrkPx1C4kHcFCHfp",
  "key22": "5A7EzX3CKMZMbrGHfVDr8oM6WzxDyNCBZ5dbbXsAb3XpJpLkGXfhqyrgLDXq1TpHcSh33UpuoxQ3LCDr39eePKqY",
  "key23": "3NBqbwuohZRK9pxZDLtt9qj2AVpABRD2WSYeykPhJC4o7nDF2yrj5a9b5aUUGMDg9DnC9vxJeXka8Kp2zroiyAAG",
  "key24": "w9Fiwmcer9BeRueaSwWQgeNT5cZ3hueSwYVYnw2diMjPCtpHuLPCriivDUhCuGWRfm5nLatreZTFH2JD99Lgrch",
  "key25": "5FBC4cKAJ9vRrcw6p61du5d41wh9y3qztcAumNz53SQZC8DkSNybPB9yKacBDqK971ndSz5pE2jL32piaBxaNHYN",
  "key26": "5nNyDceQoFtXAYqyJqampgbVfo1i4K7mtxu92ZFiBLnG4WQ669qKD6Dooh4QJLi6BhmJ5Gm8UG3gGVyn1Co32Eyn",
  "key27": "5gMezyuHFkvaDGwA7HAywpccP2xLPtmn9b5HoR5meUA3NukeWhfMojMgUBDdfzNm76kDjG4o9KRqWzdbegAjLCXu",
  "key28": "53hCH5z8QwDYNvERTYANwHau96mP2dxx82HxfeYmU7HwAjbxE34vHfLMjZfkTAGrPdZqiup9PYitdnoik4JDwZbD",
  "key29": "cN6mARKumGb7hvxjenPPMvMqh8cR36rhdA5X5QbFyp9Gt7rZP8jZcSJT94vp7FwByDGG2HxBFbYw1ezdWmVBV81",
  "key30": "3NzdQ4hLTD5kA29rYVJzZMCqrkEA8hJ8aj51KVWhw5M18Tu3v712gYgnnrS7idtCcUuEaapoqNSKgR599Rk71CMZ",
  "key31": "3tjBQBhozBfzB4Nike4XD24sj3SvmDf5hNxXktb6cKUDpqU1gcNqRbDRMzktTzv2TDU3PqjECbZDXZg2jWbhU4PN",
  "key32": "3Surv6hfKRTcbyXYyPwSCmU3zPDpG1E3VaZJZCXKk1kKKvAyqX9QMLKZ5etcsHJMvm69EQUH6RG7FNucznihSpXm",
  "key33": "4hWJe9HonzH9mEWZuL81Fmc4RVSUq1hfVNjThezozyDcaK9zxEjomuuMsbJpm9wTrXLC6dbx8sG6dKu3PTgbEbAq",
  "key34": "2LiBXWsgRF6CEH6GRGB5STJJq3yXwiy6CJSqccwy5HPYVMmz68Aa1vZn1Zw6mtGPaLnifG795KMcN7oFYB27W59q",
  "key35": "4xRKFzpeojAVSV4W7LaRciiLqFWu518Qp7WST3xzvjvS3ECuaX3oVik2QksCPsybnxL6RcYYzaNmjKbWXDoX5nXN",
  "key36": "49oW7WujUyqMMPUAue5K3yuMci4jKJrQfC3dmDHBhNy1G28CySEny2Ep1qXkPpy9kychtRjmZq9D4euKrhfQJNCp",
  "key37": "51j4y5e8kxnmZvFAxAtne8eVqKMnYF7nC1ykndvk7BAMhMaUdj9awx7DyfhwKwkxUaxLFngt6ZwDHhxjXEggBcxv",
  "key38": "2PPcn7fCz4ZdcgK6LD45RHaBdUBJaznmXsFuAYiRugng1hjzeUcPLT1EopxsDzXyi6rkuuWJoqry1Kgifc8c9xqe",
  "key39": "5VR5Nof3VJ539BYzdrRgRhNVbs1RGq59bKJdByzUrkeVqKrVtvLuxdjvK5WoXKFgCxfAwVCCHgJuMuddzCttUJD1",
  "key40": "5RxypQgXyzBzvdRknEKEcRU5unZwpHHSSQUqqBwWNcdNr6RSQRRj1AHR7yVg1XSaS1v3PBxMq5zmqbWFnyaTYSvt",
  "key41": "5oDNN2QUfowqtMTq7VhCfR8Wv5t7MSEpn1cNxyTwFt4e7qTSw6Jo3gGFxCUpC9y4mbvR1B7Cn8a8dNZEJayRLJKn",
  "key42": "3aNjfFTyK96ibzSWW8dnY3GuqND72aLu7yauLxNPbjj2QSBbxEoqF7JGbVXuL3aq6tHowBphhXzULtz7AYwH5XZ8",
  "key43": "4cF5FnTVftoG2nW6cdj8vjaP9MmbRawvwppo4Xc41Ks9PF5ChjcMB6Pu6FY7PRdu7UQXHGGUfbm5ij4vNcMJjuxv",
  "key44": "UcCQiZY57d9JChKpc8on31xb9TeU3S2ajxvV1xrY5YeNyXJWJS9Vx8jd2qc238emB7DdtA1i334P9gFfGeuHvwG",
  "key45": "4PJsxiQvzP6CjzXB6f5vTQeegDNHXKbS4MSRuHC2KapNAi7gyWdYVHYRztJKqbrVYg1yTTK4biqM3skF1NCs3zEX",
  "key46": "3FxRTYfezWb4AMTb8oR29PCnHDG1MeDjdxqadWep3KVDF3WihU7bxmZqKg3HbuVv1zsSSy9S6dbrXcP8Vz8mMTq9",
  "key47": "2unhkMQ6E5c4TkThBRpCNG3ApVBVYXSkKpwV8HGUJ3BYhGYhK2bjXRA9ygcBxwxMzqGi6LMeCQeEyJi2xrdXk4R6",
  "key48": "mu7uv3HJ2nHRUPnigH6Ntxweaux3cHKH6afyCLxEbyXtptwsL4gYZ4cGqZGSDZjyaXnBjmNYroXy6b5RKQa5sxA"
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

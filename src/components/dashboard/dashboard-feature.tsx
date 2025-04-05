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
    "3U46jteksdJF4LZx2ME93etjoWoMatoM4Py89DufPFxxT7hkvyczeJFX8RCAEsxpS3vpcEcPwYLHF71AKqULXVym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JigWAz1N4zzNfTSJSyemw9skPqb4YzfBmQVPYqwP8KryMuALwTLkbB7zQqY7dCL8e3UGiPyTupPddA6CviA9ELj",
  "key1": "5z3wpi2wMKTZ9FvKfj5PWKaMbue8hdPpGw3ZdoGtPy4xjTdPGVeyazThAxGCFQV85emNQ5qGQcA5RihK3x8RfXRv",
  "key2": "3oizSbRMmXRV34TYD99AwoC4ioXJ6JMDjcMT29qHiSoW48Gj12XQ5XQ3eXrWdk4A85fyFXpga1V34Z1rbFoFGffh",
  "key3": "2wA5w3MDvEtddkqu1iyzUfNEipJeJSa1C3LJiXHE25k9bFaPFDBRuiTrVaR5LLwkrGugVZJMSe8rpe7xgUpmGwWb",
  "key4": "55e6Xr7ae1AoTh19faPJpmAznTRb1mW8YUsZRrhje8XQRJJSgQkXWxiznnAHSbruF724kPnBsdUzQ5cssuVr6zAP",
  "key5": "4SGM3N1TXmRgfnijE9AdpKwRrX34JyeaefWyAeN3qaxquVa3ZiDsDXNgjfuY4EWHchWUZUrbKeBkVGCq8C642EWp",
  "key6": "3uWuqGbFUFwNW4koy9u1SGccbZJuTsq78mn6pHKZpw8QySwxvAPHi1x6iEvZgwL5PkTTCdEJUxD41nMC3au83DaJ",
  "key7": "5fMwAGq8SBDR4ox76nE1Hvp941JzRwicrR9gKb891wZ6zUHNRkU5sMppuxx4vt7obc8rz2j47szfpamMEDGhrfGN",
  "key8": "rovaBXyDDxD2sMtEPm5BUXj1cDSCXZFKHm5GqCrqbq58EeFajJgCiGnpim5iv3SxZiPbLZoY6d5gWSkWPqRh1XS",
  "key9": "4s7ooti6TsR6u4Eeudd3aAUUicGD3jRfdZa2iqvUn2XukwGbH8PJpwZ8uLhnJ7BBSBotNC6hvQoQnHTfGjwT5Hno",
  "key10": "2bryRYBju2s6bcEonkYWAzLhbUUkNXWadBPDg5Qps14aEzGbMPDDCExWuD7Yd95S7NPG2Xc3zWne7xyWVGTe7YNM",
  "key11": "5CWsK1MW1rzNrEwGJwHUVA9R2KaEGo8H1u7ZsehAF84bPeq2oMNzG5t2LcPpFQRJRCxQMBx1C9mNBduVi55r9TUW",
  "key12": "iuSB7Nq5nU6ahyRQdcW9964bHUrSQ39z4TtNMwRtNHuGmCxVg8CDeseuBtqgsaitrs1Rcnj2hmhRHZBcuJuR4Ku",
  "key13": "5F5tePwvGf3PaocXBcEnAq1S6urs4oVZN9jnYJx3v6sr3MmrcUXvF7Y3WDRaQshj3pJ9RqxmngadtGkSGDbRdSa8",
  "key14": "3B382eWQ9wZHqAHf5AhUUZkob9hb5cyiu1bk8fyQMaF2jETRzdsm5PLUtPQVKewvy1NECvYdCFSRoTWDtVXb1jpp",
  "key15": "5EvAhaxtCDvuteSHxbPoCTBMVReUEyq6my42iZajH3ygtP2fgtMoTgXNTMCwy8veQpfgMiaqu8pmx7nzsk43aFnZ",
  "key16": "2mP5STYF9RDdtaidTygA8B3wxAPG1je8SBgiFKETKuWzhudCiJSkjN8idsWnN2f2UsbFi4Mg7CT7aXbsTBhJjzro",
  "key17": "3VqDmyDdJZYvAbw9bHYh7rpqhDhSwrY4oXZGevYjWE79uAZKmMxVG3FNazujHDyLCs46Ycu91zcTk56Kee13A4xR",
  "key18": "3nksMeTMfifASsj2rrvpzQWL2aLhLNsn7kbQAB3FMurjafpEyeRqEe3jABChPYfMY3qdErDqnU17MZaU9VPAxRp8",
  "key19": "2eeQjvyUN7Jbgdw6MQhkpze99ih9XynCB9rmLzo8qnLUbrTQFdPVFAdLXhsbdB27y766D3cucAFbntTqjCeU4fnq",
  "key20": "3oHv8G8Lr3GhhLMQnqLZ9CTqarBNgKFQypia6uMtEMYzM55rfRsgYf8g1uvKeVztLEsLbkYmA6veWqDFzThTE7EM",
  "key21": "4RVP8a9svDZKEvHBMTHqTGLibZE8d2QCYP2Zuzki1gjFNEGctgdGHPtMMAT2LDSFo2AZX1ZDLDuXCMmwi9JV4xyY",
  "key22": "4muA1yVshqjC68QgBSRubrHzzo2Vue9g35zEDvDZFnZHkEon9Mbp8DyBJkw33UZk915TQBsVpeLY4bkDtyvqNePa",
  "key23": "2paTr55aCrxj35pLLCYVapysuBM7XnjkvdkC5h9DvaYktKMkXNXFh94MXhmADs9yDStD2QZuj4RV7NP6HeZatn3G",
  "key24": "2EDnywAmKkH1roU2R2p7DbbT85BXQ24VPH27kCMo13P8rCqrJJcZqBsPC28S9RYj4ipTPrnyrdXc1AFU3kcJTtrJ",
  "key25": "2iPGQrrnNVxmvPcz1ib4pHhSc2CCczDtNF1rUhuUJB22JgXCvyH2yHMS1iaYf4nX1qmHMpCAU5eMpqz5QgYaKZhS",
  "key26": "F3xzvqQY84d14hobekDt9g1REMQaeTfiKfFPcrYufHhP2AuLu38VHNvqs4WaRajwCahJJzsdBexmuvn5s3yxnxs",
  "key27": "2npXdZgKnC3mQbfx3JfaHQSoLaqBDs2HqnQR824NVV8vzQoi6LoCibe6fLSjQi4uL2sobenb44UxVFEoztsJCpeH",
  "key28": "5VDN3j5m4u7WYYrfhL7UgQiXSgcUruZUxjdaY1Sp79Q3i2UwsWDgBNhNcJ874FhX1cApbXsxGddSsrRm8HabXwGq",
  "key29": "65yvVHfmnFHWkk5QzXHE8K5KRfqbCA73NvRQQvqL8aqk2q1zczstzZrfLj1hjnycxPT92R89KbZyj2cmY9xBXb6P",
  "key30": "22CJ9G494CWAqpDGNoq6wKHcNwwWMAmxMSB9NYMocmmrhBh1pec8PwrkW8ihcFcmBWGwmNekoxmmLmYBuJaEE5QD",
  "key31": "dMc7fuTEVzmpSe9bwC9Pk4sxvMApq72nas6duRAFYMvHu5x11cA8o9nxE1CFWBZySP3TFwHeVBaVNujwueHpWkT",
  "key32": "VyaiJTHp4h7hSQd1TCy6kh5ZzY6QHzpDrH5j7BzEN5o5pTzhe5f9RPNFE7WrTH363ta3zUQHcJmib66hwM2QdBy",
  "key33": "3nR3i8gnWJPgR6EZjnE5DPaBtshDLTbYkgyN7tXwYirsTAFczc7Y2xpAPocort8srvBmANr186ccxGzu7ky4CBVq"
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

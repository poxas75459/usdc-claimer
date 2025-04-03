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
    "YPcqqDgxnFmkbeZBUNxrk3FLVGnQ5cdAkFUQXpdaqkYwbRePjbQHESo2FtLqEcYBPoqXNzAP8hqiLYbbd1Efw6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGdbitdrHR15YgLxhoSFszHNRV5XSFi8bEakt1u14TTaXJt82E3V5dMEnkfW5cvqZQk48bjgGX34k331br3GwvE",
  "key1": "64dfMENaGAKA2N4BTB7ywrzRBdagAsEyh9q65VwQ437E5YxLfMVS5AVPfjdwPtgRRbbafAf9Nh8mqZRpP8TFR2vy",
  "key2": "J2n4LvPeiGuTZWAiMCdCn9zcyxfHgis7oszab3YQu6w23uBTv1gPqW9EsmcWDD4F2z6xaRJyrhwNu29tVGmbxES",
  "key3": "57XfePi9HDT2CpWsKR3F72DKkwyQfJGJnwDohTp9x3zDK7QuN3pGm1GyaeFEQZQ8CU3eUgyTE2XCtf8xpt5W8Zjg",
  "key4": "2BmW2YR6pyTzWxVEPq7MLqvrP5UEvFDkQgJatDEKJxp1HW72p6MEomMLmnMQYYcY2Ujxkn8CkVkkC8zaNGZ539E9",
  "key5": "4XMaiSkWS1XAUnCaV93qoPDHS6PFNZ8UXH4eeugDBKntLb7vHF7VN75i8Xy69bFrQmjFZ36zrgJK7eMz1z8EJgM2",
  "key6": "6ioe7zm7JxQ6CwQfHpZeyuTp2jAPdAb8Nb8ST516s7RXMECFGbtkYYD3gz2BGbXy2JtZvFELfHU8bUyWMPjLez2",
  "key7": "3YugnSKKHgT3Teo4exJT62wKCS8Rtf7ijAhUVDktCXxeyL2GSWk981vHAwgxizzCap9jx5U6EdWnVYP4UQJodRj",
  "key8": "wGgWSsb436UiZmpamSvZZFesq2pygtEuEpNi3NJCNbMG1SC9U8g4QCuG736UbM1uTZ36zQxsMn9yo18FGcuua9N",
  "key9": "gPKx2Luh9tBtCfLcS6rL8xEv4oczaNCt3EMu4CL3wemhKVx32SVpgoBTVCrTZvasTD7umemK6kZ3uASnCgACSSd",
  "key10": "5DvG3LjVf9L7BBqyUvorKSuNnuR5JAbVtsn8UyrmK3SSi7hyyvxtoGxgNp7Kh7ohJ41A7FhhciZK5MhadLqMfQ4Q",
  "key11": "3VzALoC9Nr2EafP87dELT3sd3QhLw2sEeHB1NeAJkEyovR61zkMGhgf7Ra5ZkquMokSBPDKJVXbaFCoShtMZiaUE",
  "key12": "TXbswAWrvjDgVkXxAfRh8nR1w67bQTKniFdobJhn3QH4xpEuD4wt9eQxYCpiVQmGQcEkqoD9mLCxnrx7T5Cv7CR",
  "key13": "3EeRErt4JqLSkN1w1jXrEN5x4tT8jPB1LPegAf4YZHEju6kcQB7GXaGzLNYepULu9dNzMhsES9CRSCeDR2Aw2ZsD",
  "key14": "5JC3bUjDQ4yzzaxZ1qArFs6iWYVBo5P2KUWxvKru2Rtui6Z7AgtXaDJ45SMpH3QhfjDoxoPXxUPrqkqVv7rcGTF2",
  "key15": "kQyfNQZ4HsZaRBonSpK9ERVx8CHKyniiJdv21w7nVbyUWtuhmkv3ru67dNdXmwYGbtcb3teKo68tYkeDe9LUszu",
  "key16": "SYZbz7NQSAocV2jFKfnrWGJvpEv8FGzogrf7rnAE1DuRjwcMLsUvBGS5KCB63ennbSwMecYH2mgD4WrMVVRXisZ",
  "key17": "2Qdn85SjsoqNfAXiufsdd51QTBcSA5K5zzq8HZMz2Q9piG17t2THr6SuRCqToEFZxrNGRyB5vDuwy7dbNHwCe4D7",
  "key18": "3FrufhdisrRsiMfJjoMgJxip4uAnGKF6hXMXWqQBWPPFogqXYc4HYPCvuaVVUELHu5a3PkqyB87mWvDak8Fw3r3r",
  "key19": "2haYoHZfJFFaq7gLSLC9CK8EXHkX1zZFA4gjYXtZUHG6Q6UxfZSHT1roVsSV5f9u1qTocXdsXB4NjAxE6Mt1cuHv",
  "key20": "4n46n6U5ZA5QGPat4rNVm7m9DmoQxzEuCDB11eq17SHfy8MtodPSgcthFR9zju1HgLn4abpi55rHJsUPyaVNQTGZ",
  "key21": "5pdMGNga5rVPdXgXXPG5adtYjnpoajBMQAgNmcipzCiBsPUFkyYhtagHyDDnK5AwiXWc7rZ7n7cTDr73NFVBvsct",
  "key22": "27bXZYwvTKiu4x9ygC7aoRL2eXKKA93TG3DVr8dGLKpzToFr9tH6XmNdQREuVV79mZEst14vy76uUw9vz1oMX6Kx",
  "key23": "5JMhUXkkJZZyqjbKnjkbSKE2Hu5W2aJATg3JkvPruwBJbH8LfcNneUv4bJo4xb3k69DAXM5RGFrz7boi57HeAyLW",
  "key24": "2Gi4TYpae5jTYGAXUophXbGmmNdEVo3oVxtuJu2DE5ipkBXezz3Bv9Ea31R2wQytcpqVVUkQVNpP6Ec5yBT87F3K",
  "key25": "4JoLb4uCzngYbiM1acXQ1zkmkBj9Dybo6tRSe9dPTLyZj9i6EMy589CgGi2tywGnUvipm8e6tvaRZAUe6Vybwvt",
  "key26": "25j8ChoUVhVw4s7CcamhhwLgxbAcPZbFX6LtPwG7rKykVfZJABqXrfc568Zz7RsomuC9E2Q9hGQEN3oAw72TDdnT",
  "key27": "pBQMZrEvvWaRARGtw4VEmppg5kfjf13RpR9Q9er8K4HzzUAumcCVJ82QTCN8n7FAj82LiwewwYNnyCbitLZttue",
  "key28": "5SsGowRDaEMZLrsEq2V61FvncCTB1RhEJDYwPsvPfV7ZnfZb6nvNGr2CbTsdTMqqB5YLxpgmRtpNPVcMkEGH89cG",
  "key29": "21ULjDezYsSiNLypFrbuUz7tRzYmuNXtmm8N1XrSCpJQsSUx7mhDkonwLKWWnQ5tWEExhPDWuMTTNDE94aJyUCfK",
  "key30": "3mkTi8rG96iFnBPrV6P9gSDXRcX1cZoQNnNn2bfBiicvBg16FVbaE9tmwg9kBxxsfiZVfwZfJic3DcK3pcdPUyV1",
  "key31": "s2BgLAf5EDF3TDtzdMaof5nXuE6ybciYwiHR9BXUFiokU8hBQL3FAQy2T7VsyxHXwL6652JcuiaG6dzeGuZRNki",
  "key32": "4rrCYDUSahHshhJy1cJQCzEEttE5kayK2uTBAzf6tiyWYpoW432fjxUywoj8LnCsdifYdjfZr77xCDCpq92aJLBY",
  "key33": "X276Z3WaajyQZs9kPuH6xPzedRffzj4JHDf1KRMG4rNq88cmRRBivo4tv81vnz1kHi4BLiCdU82BmPArXLqSW67"
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

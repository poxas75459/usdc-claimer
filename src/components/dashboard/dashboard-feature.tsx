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
    "552HYXzT5Kx3cb1Z3VWXhVpVvSbz14Wm1jLvELwzzwNbApTACcUZgutgxLeq2UupPzpTusvvs1dfMjbDtz2atF2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4ViMZuNvKWtJyi2gEwx6uazw99zUgtveKhc8L3r9WsniaKzj3esy9gkXpBnW8gRsmmrNSsiAsNgK8JrujXFGoC",
  "key1": "3k4aNdtALmYooj86wqnsj8ApQcNFEPtKELn2gMD6r9jDYJ11GUMAimsjJDicdSe8tbUxXdwzU88aRZN9Vf7fwUfF",
  "key2": "249wcV5t21uz1ZH1PAQBdaTNFX5qBsHiJzHJzZrLoqxMY8Lrwxq4rTcY8QpJKyvHowYQdXnpLdDRs7h5up6QNdPd",
  "key3": "4mC6XCRMuc6KDUTLQC7dqMf8ZJZmEY8yktcqx4anQvKkugRfCkopda9Qm3x8wCkPb8Nhp3Gw9mAMzT3rEAYYyLfu",
  "key4": "3JpnhAN5evJZZ27jdqRtGojE4W9p5H1pS3pT5iKNKERohTLipFEZbjLT31DhPPHVm3fnhPAr9srqxW8TZN7VDze8",
  "key5": "4WX2TiaC5tGDu5Xwej32z315phYGEectKAkNLUkkzucnbearpSPUMsKtvrzBzWNgybc1ZHsw4teTMYaWGKsmTWyG",
  "key6": "7S1x29YiscUCxswya9QorFM39GQsG2RNnSpZ1JoKBxaESu5qqqRQ3zv2RyY28usRCKh8gjFevqzHbgTTdXSh7dt",
  "key7": "5hzD3cidGrnuLjwfVVueqDpNi79hPstox8vFRK3wTAkTQwYVB2z292fiSHufYHBTcvugfbgNWybybtFJtauVXBc8",
  "key8": "21iCnUwAEP47sENjNcAhvqC6pv5zL9y4dPD7SZFzW3nNjzD3FgwRUe87nG798wZeT39YZPcQLmBioswFZPVfMCqh",
  "key9": "3n68WtP9H2AEWZ9shCfxzkts6tswE3XDZEnz4jeaL4D69kZCpNc6J818HZkodMMzeRnBVMfMs4Lh9VtF6T2nLXTF",
  "key10": "2He9TyhcmJi3uDAfwfy5B7M7oJ5tot1VgkmtEqUsjVkSvQtm3ZGL3G8SvoJoa8urSHhi9BYxLGkzsMrBwP5fSQNU",
  "key11": "4LUvdVYJqGh28hQiweNHJwKurwpoDr7RFKHwHxWSxtgJWDrYT346bBAhzVRgJ3RbXpHyWUh3bJjc98CNKmgWCJyw",
  "key12": "5aCzRRZwwMiAy3CLYZnjjC8cgYDP4r4YzLUjaEA1XFNYX9sCjDqcEtyjtRp31yus1dXVxVXX96mXU8F9vRyKn3TS",
  "key13": "5UuQvJeeG6GfvrHYjF8STUeCahgbtNEQR9xzSmUnvu62fjPnfUY5WoGzmPBU5PXMypuECxCyCxupEozt8hYs4YA4",
  "key14": "5JDm6ZCwDqVKdw4kJPPhsRdswQREGxe4nb8Qqs8GDrdd6W62CrDnzPHUS5Rp58XSQswPtLn1ZTxxbwHCpXTc8yeN",
  "key15": "28kKYRiNf7otwuxLdNJV4sfi9znJcsEU85BYZMrYDf4jDRHTF7M5Q7ME6HkgLsoJCeoMyCXHQDNqqGPfXBosuBJs",
  "key16": "Yy96J9FNX7PRCeNGcQhdpyT7o7MDF6mG3thHx5kuBgiYhVocY2qUn2ZUUbQ7vSe1G74TmLGjN1CLydnsnfxHatK",
  "key17": "4PsaFmZgD554JYz886ugThANLBrQbhgosH4M1AMLoTjCf4GHqgn6ZHgwJaYGM7NMLxRUQgqUU5AYwMuaZes5X6ED",
  "key18": "48Ezowq8P5KVGfH6EBcTCtm7iXQ2JPXR4EyR6LcGjqjnqmwJc9AvSB7VvK4wdAVrueGim4MuP29XNYD4jCCyQjPH",
  "key19": "4HDPBF1aeRY7ByTMAeinWus2G184kn2HQcm3AdfJGKotcMxGAFqfZaHj3VryJJgnKcS8wh96AY78An7wFxyeUbgQ",
  "key20": "5xk8eCCrBzvwztZaPaWr84MLuyTq8GencAnLPA1Nj4S3cGJor5Rjfh3TUWBqAdVxWMGeuKQD9BWAKghQvEL2KM9C",
  "key21": "4uFbAHexDCBwp5HVPdpScTp1bt7UZkJA3ijtDPekrnpcV4vRZq9GiUowEXycU1HrsFhSgHbYCoDUkgtQ9ERrc19i",
  "key22": "5j2CaHcDCsTmH1Mf2HruwyQEnpZwKntig76XjvYjuvyR1aKXBBvfi6TLkCKMpJTKG2jEBxcddvLbU9zSjSEh5S69",
  "key23": "4rMhoPJAw8YTWNas3er6VpB9q4CnPKCymigzsST9DNNvcFUsrCJpsPdVsCrtoDZAMaMGYUb5krAGuxKYR6ZzfvzF",
  "key24": "42xMUVvMFMqX3a13hqvtRYuWeKJpSsmMduup93G1y6CXMNusvb94f7xVcj71ZsnMJjUhgggrSpVT44QwE6paT1EH",
  "key25": "2mwkmaBueB6759ux4YZzdYgDzn7DJ8YxXFG9HHLrymB4M511X7zcJ27HswiPQv5HmuRmuimEsFrCgCTm2FqUoQ2x",
  "key26": "gFs757f6BQPQ8AtpyozHLtaQrj6sHzcqZXttJad5f2BmFKpT5GUZUp7EAFtgznwdwvcsxWiFzjBMVPinSHsk77T",
  "key27": "5UnQbUFdDVwVbDia6haGLpTo7vyBUDCKnHayYyMGE8JdBA2pMgLbQetaV3J3QAH4jiQPUspMhfkkRYfj8smG51mK",
  "key28": "234z8rvUYcVdZALjctKELGcqyh958Z5jWuZSBew2s9HjGEwBUGR4XQLzoJ7KsX3mgQoa89KxQ6WLfkq6pQZH2phw",
  "key29": "49SAmAN5jckyLH41pNKNefBc26WUgvftqeQVR8nKZs4ZLnTz1bbxtJokfSAbVTcH5HDwbkQuhTqQ3mUXvHYkMnc1",
  "key30": "67TZS9KQ2GrEK1TsVKU95cUNiMW5VQVFV2TdiiYAos5HknEfk576BJ8ZaN14ZBdKe7qstuwkCm4uuUkSoPNuiioS",
  "key31": "4rxLik5GKCmExBJPXzdCvUr1cFEMUnCZ15sY3i1DgBEkBh8EDfVYmRtdFtXPeBvPZqUg7VtANDEgxtwQ85Vzvtve",
  "key32": "5BJ56AWBL1o22YEzxPJFXzMk8PaVFsyZkEFdrVcZogfeyCaaxGd8StfdypXSWi9FqEwaDhNnsU18Uj4u8xr59qjy",
  "key33": "5h3QwJvkgKCcnVLwCWgBfZbuGc1FW2e56ACSUhn3UVUXadxRHGfQfwuGGvxT6ui4ZpVaGpgvpVg82HR75uonLX8q",
  "key34": "2SKrNmESNzn4KdABm23pp8Ltwnd6yJGPffYsMTLyi9PjigfMmYYFkEKrQVsssA8CVauospHcobbnHviHdAuYJ5yF",
  "key35": "3yykJ1XxMsQmjyrBvPyhQfEUvaeWswS1Rg6db6nEFyzK6BcannUvjyZbajQGmS95zJNzfHioEDH4dM7F4JfZeS7C",
  "key36": "gBqE5kv9oEA3zNdDXQ2FbQ81qiwaKJ2DwgFaz4L6GzZHwsW9muq9arNpdmJzunw8WcJMmYfB7Smt76BH3JBRqGJ",
  "key37": "4awc7j3Gge5dSbz2hGgfNWB2kzs65bVEz7voCNMjQ8txToMubLrg8Hr3v3gKpSQ5FjkCDeNpd2UBaHcCQTpnCkqC",
  "key38": "5Hr6fR6X6LhXUmXxZ8MZuxbQyDDYVEt8UWiooFXmJ3wNKXMbjo6CB4pvGWsG2ZZapS2f7yZjTQq69AQt5WvHuvZt",
  "key39": "3oeRkvW2sQbQCM3WpCpe1BTAnoVh4HWGx4osD2fgV5ks8abqKMiQH8v3UPmvoJ2hc9nTatFsJpxfUCmqNbBpAFet",
  "key40": "2yzhQ7Ck3kVsPgq9yEYPDhxE3N5be24K3p9cWNPKix33hZx2kyDH3sHN3ZCQrQKpph69gGH6hbuhJuLTrEsHzhiJ",
  "key41": "5XgZHJ1oyjq7HwLgBnL48AMbAvLQ9Gz9G73ydhDijmqnBh8xTag2AXfHjMuRQwBrpExj26pJkwKUbNebawGVi5Mt",
  "key42": "5MhVQqKkNRmQMMUTsXu8nG1ZnLrXt6PVTmSoe5Pmnrp33QP5NXS7LG2pKzuBQeFjxQTiu7tehEW3VqDLwRG8Bapr",
  "key43": "2rCNrcNtEDbLFAZJS5bJ6WUjDqPVCuWUqgj5EMJuJaFTyManacbbHyNNEUfBzaB5kBzebDRRqKauQHiGvU5CjgnS",
  "key44": "t5tp1fa6ng2NLCSuorYGY9Q5WFjzR5WCiYSuq5DQnuX3pLXADVwHpBD1eVycLL2EcjwZ6oFCE5hsFcv2ER659xD",
  "key45": "3GZDRBmkt6Vhx5mJcu1Jg4wtBALN4rb3UJ2p2rZsS92bKxeGtzaaHWSGKwKA6Aayznf8E3X4D3TcGR7GwyNdczo",
  "key46": "tLZMZ9z9jQuTYJw9nNbprUcTHAj9AAm9Wzv2yH248PsxKfMve5SYxAG1XBkLcwDiuf83rxo82nM8Gp7bz2eX7ME",
  "key47": "5o29ZgJuA8v1wmZZxuFMtyvdrsPYKydiUveaJ4Y65jkyxKcq5kejASkg2jKz5eegWPZTwUs1K6Vcz8ggQZPkVJAF"
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

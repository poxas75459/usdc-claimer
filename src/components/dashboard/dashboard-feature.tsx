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
    "4gmi6rGiZQ4VqoWfvGM985Hc6cxMzz7ZnrnhBCJtDSpwbdJoY1uECk323CzsM5KWszxm3wpM2UYunmGAVnrP69Yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yYk6Cf6kN2G24qPZ6Bwwiboow4XmMeow65R9YCzPRge2hPTZaPWinCcByp6a7comc4CZj3xC1gN6zaGVCHY4KJV",
  "key1": "BZ6Qu6wQM8PpQDiPX57efVgN4RHZ1WcwQd46H7VvWqMT1ger7q1sURVQ7ZtSkEWe5SdgvNyRR8Wgh6XgRdEPquu",
  "key2": "2HbXoAvduBSLKNDrtHHYPrXFCVB6h3pFPMBekksKR5A2i9mAoxwtFXAS55G2sBxBw4xBTPYV2EJv4sEs2ENAe3pV",
  "key3": "4j8D7kjehJmDEZjobtsMsh5xJGXNFktECtAGhSj9WvBcbCohpRV3LJakEvBxPmKxx8WzjbafYZBkaJrGoYUVhf3n",
  "key4": "2CzasmuVPpQ2MCpg1eTgq73tqAZbfSZ5v2pKhhd54Ms5pYzRHgAQqTN9nCb9HFpmfQtJ62Fbjbqr8XaJd6v8DBpj",
  "key5": "3q5ZAveZSr5nvjqVc7j52A2xouPdRnARhkg4pbwf7MmktxU2ZFvGZq6F8Yhh4Q3e7aZixRVkJ4GsT1DhgyJ5o5NG",
  "key6": "23pmYLfNiJFqYjhSKL98JPdMHv12GgP93cp3YKWrWb8qZo3zGZMAFrYDAd7xhyfngzZFUAXWYLbQimCczffh9Vcv",
  "key7": "YsAnAEwaGCSKJN3bQGNvCcRyxHL9rgwx1PW2BzPzWxtjDBULRJCV6DgRZuBjU9xxVtG1vaEV3WUqecBAEmHwav7",
  "key8": "4jkSMogG7d49y7yRyW7DSZ9UwehmGbCwoWV6atVLVWdzPkVyucVZCJhnntX9ZBZRB4G67ZtYbKwunnPEHYgVufN3",
  "key9": "2H9QBkVWy4C7735T3upaGjFSE1QzNR5ev5oPVwbC3yt2QxmsvXEgu7wvNjMGUSEL6huknnJyJh2h1VU2NeSV92rt",
  "key10": "2YdiAzJT5gcMJTdHFjDYjuVd4EzYQvxGBg9BP5o9NGp552ZWZxzH2n57CqWeB3My5UtkuLhvnjHZy3YhCHoEkWeP",
  "key11": "2gk68KREuoK1doi49rQgPfneor5MFButvagzJT3QAQqsog89zGsTTVWXV5KcjWMSMpjMvscbVAqSodvv1A4xiabN",
  "key12": "3SUtgTArU6Etjr8BL321etnC7BbdEbzmkYVnYkyeQLJE26wdpz2ChjoCHjbrFizWhxCCWrXfcTGZLF7LmJDsqxg",
  "key13": "61QwAw6Vat3UqWtFfGtKDBCEeTSx6dTgpptfZhmkExRyFvBc6UGBwjoD6CyyHBpKqPqqG4czdCXJvcU3xNg6Hch",
  "key14": "3v4k61amGKZVVpLEkopWim9LbRhXMuzVLxEaodnznt2uHZJkhtXvniHAMmmRpDjmZiKkCryDB9KMFjXE4nW64D8K",
  "key15": "4RXRsqhRvG9eoJx4F9gjGgCqirUbQ4qvQtk9ReaRj9R9vu2h5MAFYkYseUfRS4WiTapbRwpiNAn1ncYP9Qb7FNPe",
  "key16": "3bGrW8XQfeNgLCyUsoGZ9ukcM9UMGzhcEg1AZvXUpP6GbZU4riso4qADtYK5GJZ1rYk199rDjrKYF5WLmqWRQH3o",
  "key17": "3xikwrdCHjFdwqMmGDpGUpt577LWt28N62LFko6tebNeBf2ie7aG6HFCkmBbbTex6xf4Fx5NwkY7YUkRnDLuBy5F",
  "key18": "2YSWGhcpULmj5mBWqHGKsEcZrRP1Bw5nBc5DpsY9RXeNoRyG9Psq37enT8xNoR86LHVo5R1wua43FuWxLs1cbdhH",
  "key19": "gLHs3ANxLKkoux9n32egcJj17rT39ad9YjU1gnmXuEHpcDxC4Dbm6v25tsYTPENnpJhMbyjeypCUrBuKrQqpvkx",
  "key20": "5G7HFwDCEjm8BZSERBd7w8a3mAH7kJccHpiy7nsxBYtniwmE11u9ax4mW9o6Lm72JAReSE9jkUdMd2c1DMpWvfLP",
  "key21": "ggauafiWhqKcV4JjeXpcoAWpxy25Cww9PykVX78uWdpXKjCA3aX6iAGig7XddfGvyU5GzE29Yq9hbfi3c7e6unV",
  "key22": "3LUe6UvG3N24aqtyiHoJxszzvxSbuN7J97U7oXv4hS3TCaVGRDAAgtRrBeSQixVbYPpboffxdr6AB2Vg1Vjhe3UZ",
  "key23": "3TsTRSfYCY9LsJ2NMTYDm8LzRFiFAfKFM4vaKwhbBsBAWXb1dHFVGpQTS6umM8Swq5sgdRRTSkhG3o5ikMRviTin",
  "key24": "42oggheEDMwyYAiudwzB5Tf6UPDt2mszC8MR9JcUAgMSTXBiWUtH2qmzEpECcvFjY6QqzK1DuiW94oYFvDW8gsUA",
  "key25": "3Q1mVeHMHKSVziZPDVa162A62yscxec9L6SFt8cHoC6ari7bFwDRdSUdnmv31zmNXAT67cCv5eMt8X938kP7xWhW",
  "key26": "5M2uiDoYnPsXzEdAAvX2G6YGBSVFLNTyiCt8k8vbX5uaPmY9QXiDFYp43XmcMQBAQDjHvECp1xsrKXDxLVBiXpyP",
  "key27": "3beqHkMfRwUemHAENqPBynn2So4wgdmL8DxLjqt6FJcqTXrqUAHLV9Xi2vDcZUNKjZ32PuWM1yRDx7b8CwjguuKU",
  "key28": "52195j4c1d6krzLF4NsqkD4skwJprciyYwSrEqa6ZbkLpKQQBFkfuKkgxp2WV9iSoVYnyqzAXMMTZfBRDrfypkDN",
  "key29": "3ux7GAM7k6eDg7mzLMJxbZww26HXW2k4kW32Wx6v5ZqVPDse9bQoGQrAGiVQHRzKCqCXZNVMazZdmevPK82taFPT",
  "key30": "2ZrRDmkDjXyQDngCgR98P7xCd1diVaPuoYi6q2VwwizF8sXUuSdyUib7gaKotSKTJUcacY75z9M66UF11a3eRzoU",
  "key31": "4oxdqTyudUo11pSGcbiePtkfW3LNPEseEdxL3rgnYCK48yDAkGjFJGH32L5z5HXBc9CTU7owL5w2Mim9DKTLz5N4",
  "key32": "3L8A3MMCPZAWwSbsV8B52DwWwGVHoRQGG4FknbNA5DhnaoatM4dzRvofggAyTPq7Nc9mf85Baa5ufei5dwEcA2Jq",
  "key33": "36So6JqfFmvS5VZ9NVqXapaeyJutcjFzjAG7YgnkJpsdatnQHTpSts8tWsRPkDRfqn8hoex88QXgFJdojfAxjCeA",
  "key34": "2GotD8s4SUAQXNvxuYKMnZimSGAJGxM5KxAcCViqvfcccQRrqH7EPTPc5rrqLvhZbYGxjYFRTWgDUkWRKvZfDViQ",
  "key35": "9nBrRV95DQacahdunKSTRBpvaGspPYrXtJTmTy6oPfYdKPyCKjZp631gduN9DGzLi2ABBaMCzmHU5TYFJCpFRuk",
  "key36": "3JfQZRhVePaFK6LMbwXvAcMHUaTwks11Tb1dfrzHnJCQUCev4FoNNJUoiXeynzrSVQRPCD8fq4sPXRJztmXDh9tf",
  "key37": "2ttGN1pU9tVGCqQ9HC9Nq8jdexPSNfvrybcJxjYcLM4HsNZvhN2RSZjdxHJggBCGgBFXKkpkubyq5EFHZhHfmSL7",
  "key38": "2X4hZUbcqovpb8jia7ZFgegSGYntSvgViGaRG6ZyLUvCe3awrAKTGzCEg6VDEna7VzY76pTY7WmtQETQdth3DP7g",
  "key39": "5MC8aHH83pcHWN7zwiiFAQYUB3S8q2UjMmW1VeQhYDkHkEoHJvr65gXERQm6syuwSCr3647NZWfEQ4JyjnueFdvd",
  "key40": "5PtV7bic8vfhLTUoLGHJwgfdJSE28c7FxmwBwk1rLeGnhgkLCvhDZvLBVrdrKm94yEYKDT9oyq3gNagDdghLfkRA",
  "key41": "4wF3TEJ51uoEBH1svZAnxq1vTfebhD8vEVPm6PqQmzv3JjjLYq4vZsnQ9jdpHRjxBUQhWvB9jjvtoQodbUG2q9Vm",
  "key42": "bM4MiVm8NaxXXTAk48XGfy5S2vaQAnL7ci7tqEaPqmpKhiahHW3E7LjwScRQLB7bVcrJAEPcFeKQsS4CGKYpkPg",
  "key43": "5fNSMALCRVs2eEH37yGVRmAD75vSTGW2NFrmeU1qQoPLmBk9xpzaHki9ZfDNYRJaN7f65GXdRzsG2BgcPYgV6Voi",
  "key44": "2UY4pBweZL9wGFZMU4oRrVaMwFfwzq9tC4YDYfJdHE92MY6PNzZxSUmR9kebYTRMqo5szaYSFwNjKorUVU231GdV",
  "key45": "ZLRQHxUD7qux9BhCLSEmqEXEJxrpFbti4DkAknNAzg8rkHGYZaGMrm4QwAzYMpjHhRBjj2bXZZuKbqBtf4HSPtJ"
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

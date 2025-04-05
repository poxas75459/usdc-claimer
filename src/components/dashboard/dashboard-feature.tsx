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
    "2XLFUN7LsSqfYNkmMZho51HzAAfeZuDtHS2bGxJRSpSRX8cm7e2eJSu1dBd4ETQ2z4S8MB5eF7UWMR7Vr9A86Hso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7vUKtMbL55kvombHCHGZekGN3anGL8u68YQx1p2VbVXvuL17Gw7PVpV6Qic6xVmMK77QuJMYwHjtxFS5ggdutN",
  "key1": "sdDK4jpRBTY5AZDpXrujrFzxVJaQst5sCuNNPJ8szAsrZX79WCAtoffG6QVLQjBGGQA5vRifGGuAT9LXJ1rLXCw",
  "key2": "2ZazWd1UawvUTSvJrnmahvGLRAcWtZKbAiMom2m9UTJJx4Xnq5W57mK727KYE5yLpPJSmYxaVpQ9YwMuywRT1QNr",
  "key3": "zJGooo56Zvrjb6Lk1UfkvG7NV2gH5Dnk7ecWAgkyYmXtuTn72NBiKDDwijYrw3JNDZrWtYSSqvFoa8Y8DGmnzeb",
  "key4": "5oG6UFpuEZAnc9x6q1FYx3Y8WZthMe3YK9PutF84hGPacmqYMyM9b6LDAAHNZjGjL4igQjhXwZRh5WyoEAeLNxMc",
  "key5": "3F6fei74yaET4MPKJbkSC6KqAASJKJ2VL6cUXDcysrmrkop6HhgXBvR7htwfm2BJodifRhNyheFdWfi5Dp5PeBBj",
  "key6": "5y67Srjd3CKNT9vj9QucCFcWArvt5KAdf2vCYP6fMV3krxt24Y4ZNemvHpjYafQin5RjXxpa44EPr2KJffkATdUR",
  "key7": "5MAkgkVZoX5AAH4x1Yov1CGq4bc9XYZgRK7keztnrGXX1bd7jW52QKqUvTJmgQH9gSuwPxxrxUUrCu9SjLRKcBSx",
  "key8": "5hnJpGwZSCgzrzBToyy4xSFxSp4UQZv4nv27obZeWNj5eG8Z8kwc8bywDDAUQRBgn58mH14ou9YPCVMMKi43xLVi",
  "key9": "5jxVy8fBjvMt32WS2Kd2i8YPQx44jqAPs2qejMjuHcRE7z1PorvSG4jnh3UHKH3uwhgezYisASYCMGPRqbo9Da9X",
  "key10": "5JwuwYXYc1gJAK8HT9FGtDSjfsjs5W8Aju56PxqicEshzKRwy6DEaawZGoC7yMNAa2k7bJsdMENX1DRKibLxkE4M",
  "key11": "31dawUpy2uaXzpvxhNnR8r5v3ib8VNojYwzKPRGbNNasGA6nxxE17oqxTN3kxB9U7ZrfhTSSAqr737rS3X7biqfB",
  "key12": "4Kn6XrPpK7sR768eCH9Zjxk7kG1TsBpPmg8Wr2wZpYojg4gFMSQgh1ShK5w4NGUJh9mUCEmAPLsaeep72b6NivSX",
  "key13": "4LrDXjnN5pG6kHys1diKiQXafwrjHydgU88LbEUL9XCAH4XGquKPpYJi2K8PEx7BCwKtZnyVooJwaDo9QXQt2jwz",
  "key14": "5XyQMyaePf2e7mU2fWx4kpNf41cC45NgvriHq6u6ERiwB6sPFgmDpLdMkVSPrvoScP7BYY63Mv9v3nE9vG9m8ZCJ",
  "key15": "4dCF9AgQ66YWWceGCzLgXRwVT8GxBNrRU1aJRHVqZXLCJcVbFhYjvm1keRyJsC3e5zNiTH1kPaVqJU7T9in9ujBR",
  "key16": "4jKiiDneKPGymUjfhz3NVbT2xFTDQNepSYTMt1S2evfAeid6TYSZhe5MwwLcbqqZh7ER9NiaQRA6AvcanKA4HZk9",
  "key17": "3CEAtjxWiW6GCjKa96pb9qfKwvKoXYwyVfgRWB6pYEFK8kA6SXW1EN77YBNNdr6QXgdpaUmeSZCo3wmF7MNE1uFa",
  "key18": "5V9tEbKQPPKz9j6L4BhSjhiEK748Jp7eMnpTqQn1bWbTdad7EEYG4QL3hTTVojpjZBhyJ3R2EJcTDkU8LD8Gu6fL",
  "key19": "4n9ssnd46EuEZCeLmGMN8LwK2J1LzkqvMXnGej1He5RZquz1gsRGsmZ4zu4Jh89DQv9jDk69ubRyem1fKxzhwu2w",
  "key20": "5gFkQruTeZXdXkwXv6WwuNtza98epyiiL66RAykpvo2VE2SnWruTheEz8kTAD7cAGsKQsiL5eckRegyZypaw969F",
  "key21": "3EDfKfLryM5gHRjnn6RB7F2J89mcABzPJa5ezkYan72Cx7Mg4Q5taxwDvwnmAGWN1i7FrvNnFStotnnqPHYGAPfT",
  "key22": "3LKphUw9zFbe41qVQRA9vLy3y3b5r23BrSXWru3whsBiibHdfo32NWZpfs4859KWW9jSV5EbgBkgsVjxM3kzJqJB",
  "key23": "4v8RwGZ5pKj23QGnWnRRsh33LLMsTfWKAodF9Hg5weVEghDZ2n3oxH4KG8Rd8XYAj4nm3D67igex3zJyA564jTDk",
  "key24": "35rBUzWdssWAg6vULhywfH7vgz7YnmHbgZtq9MtwtPQ4LiUEXiLdUKyABZNi7bgQAun1QY5gkA8gvMKNKBaPCkBv",
  "key25": "48sJwLYBEUiuXtgzDNgxRDxZdaXTbQ9i4tap6DmpvtpbKmFPaEZeqn3Td2vVo9KXopnvfTct47ZFTJR9mgVrxSaC",
  "key26": "4TtkvydDugaetAVXAC8Umc5NvXpSPqrVNdssqd6Ae7q1z2tHycL3NWhrpPFy2HAaS5qq2xNmt5Ei12GfHsx67HWN",
  "key27": "4NvNFgqyddKi25uZWBjCTyuxcuxHxz1UVyxze81x9Yokso2aq3eLfxAVEcHUVJPg4uZH3n5zVQLq9UcPoxg8K3c5",
  "key28": "2DrPD5RSh9qFb1uxsB66yYikR9SQdpyWBsevZU8SifHiVkSUZRPB4kxPMAfSwPeQLJU7qGpj3eQoT3KweYHeHy2q",
  "key29": "2LXYPyo6ZTvzunCWZBmhGotASuQouLugPaA1N9dwy7LS4LX38ihwyz2Fh78DaP4pjX6gcgPWoW5xTGo5p2d9hXFs",
  "key30": "Ese8F5yEZ7yQapUF5dHjKzURTuxRi6gKR6VRoW7M3T3ShnxHi5qGDokSUaPj8wEgjwtpR8ihc8yys6q7arVYuUi",
  "key31": "3Cowa87rfvQBzo3E4waT2JT8CNXVzDy6EQoWiDTL7yXXeo1zGBRk8qb4uDWZE7N7SVtDW2mq7HR49EDJQT1Lw1Fd",
  "key32": "3ZcwcDiWDfc2xxxbXHvRrWutvDfATeLpYU8e3BDPGWaR5tSMQpshzwEDMCpYQj1nKyNJKk2pmbHCyCrejd51fTmx",
  "key33": "4qFJvhyvPHVMFV7PNxatGZV8iqM2D9dauqDsaJmmaFK2fWHvsaX8UxAPR9yaKhw9uJ4CgN8QEPE7D4Uo2G3i8XBX",
  "key34": "3FjNZ8tvVXX2r1dLsBx6utNjsyxe2h3SgQnRt1iZ8Yur1Lb9BZCDDfkWxd5qHsH1TQeDr2XkUS482dCKViDwZ6Vb",
  "key35": "2UPDdk2ZZVB97kTsTGutmcmu2HFriiNcwTLDiiBYi4danP3NsDtNZgpFQK76cGypQKa9B2UGd5db5zPKFjYkWAiu",
  "key36": "5Q2sMHsxAoK8kAzQhFQmzgYotwQSHge3Yj1vzdauiQKHZ7crh5zxcj1eyTrBPBeX1pWzBcYypNhAQ1Q7FdKojxqK",
  "key37": "3Vp5HekkVaP8KoDkfrUSaAu8khbTpMj6o8ou3oGApmmMAxqLztBcYzouxKWhw6VbE5YrTSUHdThVpfHdoYZzPN9X",
  "key38": "5DNrkrbiTgkiW4mJ1zm7JvPo2B1GEfXoDLJ852YuXTRjdeP2mJzqqgMCTkX6uHn4SHjfbJfAUsqApyp7crkhNSS2",
  "key39": "2D2mJ4mePfnkoN2XdZknwyhjkvrPR1s67XPT9jogyzE1NQGsLktJg98fztv9nA942K4zXR8ygm9QCdRAAod46vN5",
  "key40": "3wt9rYYRtdEv9FFiU1C2PfJ3HxvkRxmcARayqbMgVywFG4bPBETuxauihyRHAKMYy1tHdujUx5KTh9yMX3XyEF5u"
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

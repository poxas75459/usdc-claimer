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
    "3NBiJahgETAeNPw1daTf1WuygBmmfe9cLR3FCb8LJEGNXJg8LJ3U8A4yJYiSfBL4EUHjcTjBDfVVKHH2SaaPkPVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G1Bsd8erucSVReePWLmbU2ZP5wELVyd8hVVBvUvwH37Lus5dwTJV2UuU75Tnqgrt1zK4UFgTRfDRKhRXY9FRYCd",
  "key1": "3ZQGa4DSMhWc5irSgKTTWiD9mefdYQ5yL7oUTf7txJMwTK6PgTagJehMqjE973Szoy6uZizRKbzZBkXNtaFvfaxw",
  "key2": "2t6Mk6MQqSNMmQDzpK3DLjEPsN21ZqRmA88VHVVR1eTKaygX9U7wQsrAxxUATkevCPEYfU6mRQorDDUL1kJSpKme",
  "key3": "5eSjvqAjB34ji9ybToXnm2pJStAieNzyzVUbPnEghvyFPgFJFHd8CNxCVTZXk7ctoJEN2YZ8C6PDsmmAQn3TXeZc",
  "key4": "4AoF3DtNUTagobaLT9FHHfnZmc36jDaZda6fj2tufv8cjffkqXyrAMAVcDzjVQxkL9idCjDBTqqZ2g7cANqCztX2",
  "key5": "3R7C7FUPeZev9wPsz2M5hp7zUxfZ5Zvu49rmAXW3Nz7semV6LG4Wdnbg8E1dT5FuSoyczDVe7vtcLpRsDsmmWkF3",
  "key6": "54zpyHZDPGppVtMJdmKZwmGJUrfFQGjSYp4tn8KA1k98RWiBVsjNw3eyC6KXLsjnMu48gJn89JsUWkCFzf8ohyfP",
  "key7": "6mRuFNjxeSQzQRPuocL6jnATwAUuHd1hX4z2bd3KbYKwmqt4XY65YhsZjhfgcRP57hbFDx112Va4KmvWCGPpfU4",
  "key8": "5gouskwCVeY73kGrKT1eCRgHrg8LtF9WNNihHPLKQRAnqFr9Do7NRwoChBBFwtoJUPzksvXsBZTTuZfWw12PHJCP",
  "key9": "2TzSvjXXBBAVouons2cAgWcsYtN2KS1EGg9jAs3a9Zop5mS6zL72A18bR9V3Wn94xAF5kxSpHgSr9vHzpFmjkBoF",
  "key10": "2na2BKsiGXJNp5HXcoVzHrtD7Sd2GobmViDKQw77JJygu2rByUrnZzz9mNFp4o2RYg7qTbhbMH1JCUy5UyqqkdVP",
  "key11": "2y1X825HTHdXktFNsSitS33hryh4EgY44yWN5MYkvtTLS2cy3WtPSuPN9sXZ1kkxC9hruQwgQXpGdNCnCtuhk48o",
  "key12": "2qmLZKRZL8Gh8kP3WFChnVrBGRD6HUSRmTUJtDWg9jBA9H4mVYYwVcgXDmHSHsPxLrc9MtLU58Mwcprc4s4WayPn",
  "key13": "RbhGc9N6gEdFw9dZevXVm2wMo7cMfhDGqbhwG9iaUGZCkrZDQEoUsnAYXV5ztnbUDPuSEuisU8owwp5uTAmPAyK",
  "key14": "2peDo55YNHpAfAJ7n486h6wc4PAz4ejFGEhyrSaCTHHwPngMMHCmv1WzRv8LWF4kAgyZX5CtyBpSMx2mpjUCLmQW",
  "key15": "4Zv2Z2rF2J6uUdU9EF41z1fQjBpq1XF3mGFMZv7ddJGqScbZ3dD7zAiEVkQuCaVJ7jKpmWGDyGf7ZwJ3okxJLsK",
  "key16": "4wEF7fS9viK3yYXiJRap27YMDmzji7eqzFsW8LwJbqt4NTjc3gHs9UpJSrULHfEFQF4UGkJq1xaG9NsfrufwPoDH",
  "key17": "f6SpdqjSkbC99ALFjpLJdCNPrS4EmEz8YnYRyojjwiA48rsh9NbY6VGF3C92PC49c8nKNXQSxiCt6yiWjwxrBLz",
  "key18": "5zBVSywtS1Rs9UqQNSonzY4uSDywx7Wvv18zyoPJpLyy5jdpztXed9k8k7QRRHkqZr99GiLE3UMMYbhVubodHaEU",
  "key19": "3tETPxTF3nR8rCjpN9BbUYtwZ8g6K5T71Ac2wvyZDFqqMcgh4DUrQgEwuh7c792tw65RtSCQhz9vC49WyQWuGD9g",
  "key20": "5DcmH4pRpHrpdHZkv7YgN7P583SyV664mxAEH2yvY7Vque8dfxhvLoUPYtS8onRBhibHcNM2GCsKuuG6mxzfyKDL",
  "key21": "29Pk9xGuJ1xZHKeT3YncKZU3qxGBMzSiWuWZc828Fug4M3DXgfSKJZkZTxL8SrRndNpGG3PbTQQVeeThAKSnAjiP",
  "key22": "uVzLZEoF65tND7haQLHaMXx4rrdeibq57TUFis16MW1B1RGUedNFvk5b49L6obAU8fW6bgU7VThXDPinJ4WQvXN",
  "key23": "4KLKYtwfN2Y2mfoFVYzWCMErNHF2qrnusswgkPxN4r8tU2PyQUysnJra3uZDh1s4YPWUqJs4XfZFMAKHpjFYotUK",
  "key24": "56FzMuXyHqBPG7X69ALzA8tGtyCWU76GUvJoJxFoHeVAUxaNM5vviuJLvJqh2CDUqJXkHjno24cEtDFoJNGKLyYz",
  "key25": "qDSHtw2WX37To76GK4VdNCQ3hAY7Le2vjxuiQw8pTXoYPVm7Nbsw1rXraGZvhfU52Em2RwYnbAH7nLFWTSpAheo",
  "key26": "5ZACivo192eFgtwUmy8WWhohC9KzsVTgvcJsKJa2jRhuGLj1YmyCfLqLTtwFxymjYqZLJaB6gmBCBGJHqHiFWwoH",
  "key27": "2TYsLUn43ujEztCjJTY1imticYYbZ1nB2KCWX1emFw2UJnyWT6e2DCTaHoiP9Pqp7JPDxFSov87DRHfHaPKpijya",
  "key28": "21S8dHoMkYkvuYjQS5Jm3SoQRUc9nCrcYdo7NYwt6Tq687HU7mLAHkz8Emtaq6rFrmun5Nn3Vwo8yh5qHnFccBsM",
  "key29": "67qKnLGW2u6yH7Tn4BaDo9CjAaqvG8TDeP2X8PYoEYajcFJD2yeSBJ1QFsc5p2z6xp9bNTW5Jfa75nFWA3jsxxDc",
  "key30": "3jjKWMMcFGmWZVcN7SwwBc5qxuzJyC649aUik3HdJs3sUPHFvbDNAtGFQMYKHR3ANyqyLBxrUSTCrHHk41imkSzG",
  "key31": "4mpdCEeA3rj4QDKyhtDhnbJG3n5f939yzLUetRZvap8Apn6WSNjjthuh2RYVPFTMDsoWZ2N849wwQYDxTJg8Yxik",
  "key32": "9Bx2F3Hja6oHwHwdtgrcWrwfvqr5xky5LyKG1uG9SwamPL1zVpAtRxAZBP1o5DYk9a3JSWoqwbQyyTXVAF1yueM",
  "key33": "5GQVQ1YihP7Hts8twGArEHo8GkGg7nFNyPAyvWVKuqSCoRD3hokwZG6Vq6CjGUaNbYaFGXFAaRducc4oHxB8LLmU",
  "key34": "5HhHWKy34kB7eWgq26epbG693xaLErmeECLXn43PQJLAZ73vGBxBP89vDNTr53AA7meWFr6BoBHtwCPGFRjbLZQn",
  "key35": "HDQi7b6nfszKTZGad6qEVLphUsf6hyJK2C3rW4guHrf6dD4u2veFdvDu1m5LK3QGKjzq4K8pb966aExyJt8D9HQ",
  "key36": "3uAWPHTc5rF3ryjVRkp4ADqoSBwMbb3kvLQBh3BQKRM4Gzi7oLL6pecZVgeULpArMSW5oGV9LvkJkkFLyUDL2eZ",
  "key37": "3EccGgS97zAkaf6NysrGzfCxXzYy18pYAudzaDqEh9xkR7WJgtQiSduftHSmpx7McRDdMjd2xTDvkQKVRHr9KM3X",
  "key38": "2TXXcc7w61ofQ7jdwnoysepwR7wK1WpTF2EXsirk6PYz7oTktdv6XYK86wGHU51J4Yj3VYfNDo6Afu6J2f8Zxh7M",
  "key39": "4zgQbwuL9nCTkP9vbpQzMVR4NfUA3kLQGGYFM5StUTUJ9RBLi4wCZdn8B2AEkNCSf2eAmTgEkHB3ADMAAX21ATxg",
  "key40": "KqH8XJgwHsvdK2z6ZostP9d34TpVmms8MHjn77KqoxttDY7kX3BrmzxGMhoooMSZGh1iFW4FxsVRNM8QPritUKi",
  "key41": "28WsFDuvk7TAhdmshpSZo7R9uBUtduqradsukELpRasomPbeDu27uJtb7VrPxbSfEdN3MV7dZkAeaAYsRZ9Ro88S",
  "key42": "3DBXC3dT1wAZuPwVSeDtpcaQfoB6J2KHuAeRB15jVuQ1N62SEZDpRekWwnjoSS3bC3VJ1NRauN4Y66eZBMwUTLLY",
  "key43": "3wJaASRvBZcMzJBgbXU6SrTzbyDs9QrXkR5db4ZkcF3PgFYDyo9Sbmyn21vXXHpM5tdJ1jjYjDuWtdJ8VE6t4jeQ",
  "key44": "4mQwbQxfgS8ZCUuQQTGocSj1ghqD3zghzmCRtxmuYwWYVTiPFiCbctDFdEWRRdYGUdR9tGkUm8KqBJdmL5DU4bFL",
  "key45": "FrNLtvHqaed6L2Q3JeRijFa2CKpifnk9AgAqbSMWMQCCuCaRN8JbZBePW91xtTvHSriLT41KZTKnmFBpmeqSgSb",
  "key46": "3gya6YxHfv6cNA7W19agLE7DUm69XFePiiw4dcVfQS4fCZ3D52sefegB1dWE6bxqbcXN4AcjPHXhJ9AN1DMiWrDB",
  "key47": "3Sk6d5oLFaTN9XdywYvqdw7HSedCqqSQztm3W2WkLSUeR3kRcS8bkb2MsiJ4QdTJiDLktwpCT94fQJdTtd1g8qHL",
  "key48": "63PgnYcy3GjrCVKv5KQiVaCUQ6iHiwWtVkHijXNCcxfPpCruAK8NWK4LnwrWeL4BQRYCtY9ZbPgBRHVZZ8byW7uK",
  "key49": "66bNqmh144e9W9t26kME7sQMkfW968WaiV1nWPZPxiqQsvwkq2hkVc39qE5fFjrNQjWTZHA4do34DiMd2WVA8cpU"
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

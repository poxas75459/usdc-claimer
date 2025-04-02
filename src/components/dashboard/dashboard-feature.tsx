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
    "3fZxoXt6XsawthSW5t4GVBdhxTDkEMfVXit5wM32dtLikxSQ4AiHNBJxu9G1Hn4t2XCwi4D9wc8jGL6RawfFugCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cN5J5LxcPY79bW6Js8to8NK9cyyTwncASEvEm7jfa2fRwGz9RoxyRDEmKo62RCvW6oGZzGcaGbebmc3434iqqcY",
  "key1": "2CAQVzm2rXaPQeXZXzmRM6q8TX8Zxr23vaY1JFehm6qbrr8bhdAQeXk9Z3wHXif2FNCs9uBYpG79qLRWytFRJtE7",
  "key2": "5n6caa4otEbFfZKdxeBHQib2L7JsizDHHtNPcL3hKss1d4BDnVexfnCaGfRvuMQjvRVt5d1tVkYKUzxrR5wnmpsB",
  "key3": "547ey36AmQgC3xhB9me3k7wWaJJ1WssaGDxJmJGNpkJzkASK94afNknS4fTjCreCzJ18px6rDCkRevj9uoJLw8rJ",
  "key4": "5xSR6w2j3yVTnhQBRVFCmCSYAfVoLM2MPRYF9dViy4VBZvb8Ks7rUgQNkYn8yJwiwysLXcnDyUFBCWtaTvrjDhe2",
  "key5": "2B7TiC97rtMbgRN8Wg9Va7W7r8YwDiXfjpcjr5o3dxD8SY7UQvA1FiyTKhn9CPbgNGyREjgoTQ7M27JJUkFbjVLP",
  "key6": "2xkNFqTjCdRvdShgRgCM8QYGzNqNGEuopnzuLv49dstQVYeoRB3BywR4mG2rAhqs4ELA1GiBsWrQGRdGNAvQicgT",
  "key7": "5iBqU6XeXMhUt162n1UQefn3pSVfgEdqnWrnGMLdR3ZoNqYQnYznVeTkoVergaYnizPQXQtpmWCjmk3zwjZr7yKA",
  "key8": "61H44aP6w7Kb8rancutX3oG6pmvaMmKXjwxr2htJYatNqJBUe6sMjMtEzjDb69PeC1u14Xu1vf9VpsXBrKZ6Sg7e",
  "key9": "2pKUD9G8nweFGNPyKdxcvACATN8o92GHSRoDewLQqA6NP4582PEVaPwnsgyRrBNRLzbiiRJwNd3ZHvRMyxHYJeM5",
  "key10": "4CzebNMR1yC3VTQyyXZuJxJuQEC7Qg3PyNi1x5GrAejojVDCwxAogwuKrctoTejg2sBE4Aubk4r3WnRFKqH6C3ct",
  "key11": "4aTbN8Y53jj5kQx8cVsEbFNDRTNAVce6ipnkZxAtxhHoDRGXRQcBAXfWRRbvRF6Cgyqrfc25Q9aTUiC3qmXJk2og",
  "key12": "4Z45Zq5Bi1hdDSZxZ1HTSkkf1GPAVZkCwhxb61P9cJ1ba9j9UN7aafbLTkdEbjnH3BDFsXT6TR5wDnNjWGiWC9yZ",
  "key13": "4USgpLrr43QDWTjow11KYJ1dUXRHtkS6m95Y1LfMaQwcewhxoeGSY1HoMacpLCQCvncEqbBDKto5ajcvarQ1BtSk",
  "key14": "5WsWGtFJFqrWHN33w6vWa1o4WvhJaBSrp8dFwDfB3kBqdTDsCdcyBxgY1LWJLvyrSzoVwLSaanTF2u2T28etEmjE",
  "key15": "3xDAzSAjdzSjzTAsLri18EG5UGYeB2HsckqkyKZvhefBvhCKf8VtDTo7Q89SKFyyrSdvisrJrHFAT18kAgPsh6Vg",
  "key16": "5wD5X7iqDF5RT1A1GLQ4efWezFYoKKUruvGWazbwMJHYHoPi2fgGFrgg1A18CwrVHBB1ruELhLPXfVdesNdpajwe",
  "key17": "2KgU2cGqB5TwW4NmSbivYcAFjuFVbDBEkXseHBsi2shKBAjXiy7W4hxP6Y7yHVXU6D8aqYJAVwZ9yP9idLcbsJw2",
  "key18": "3vpHJPGxzNXDiUqM8sNVztt3DHd5truuaEg23agxCJaT3M9xMghAJZ9oPMX7AAVv35wDkjCCu4fgYSC2tpD5pBBF",
  "key19": "3rFEdRDDmu2oKyrnEwPBKD2qrNGQW6cQtmF938oJhK32WDGpnD1HgAeaeEn9pU1m1Rkin7GmJznkGVJgRJ7U1xaK",
  "key20": "4TCoHhhbR9NbpnZzwTxYdg6Zd5wMugi62E2XRPNJDkS6kpFeJfPdhVZTV6a4iQ5G6efPu2WWKBDgScwckJpbDUEN",
  "key21": "1YQor9gp3RmfvhtMZb1R75FXYNxSbZuLuJs5n199cX4fPt6xuGCJ38UsPUxisbDK2KRG7ZGKkM6kH321wNJGBra",
  "key22": "2ckVwmcY2vVbN7xL1BpsK3tPkWegmHYg21i6G1sai8ckmzT2a7kCCgzPKL2wVhAV6mLB5FoZv5kjuyadyQEUyNrN",
  "key23": "3HQzigHXTzvBiJLtnPtxGfD51nguLZD72KBCizLU7MZMsgQb2GPrSyMfSAXeQNM77Mxv2nrWBFvvSbyN9XUc7px9",
  "key24": "26FDTcVzEKonm7sLL8PmUrc3wybcpM5rfbXKJUDbq5jg9qzP5EKkuJoqGJ82r61qfc5idbYzWbSMzarAXFVBw8Wu",
  "key25": "2Y35QCcTZGcsvLSA9ijCGc6G7oc2QcCH55iS9asFXWKTutCbZAXjBCQoLDEGzeee83dojYHDhozYRXn2GtPboXX3",
  "key26": "31DWwHnxES5M4voKtYzaAtxnS197VMb2c1joh9NNTqKAHLH2rQ7E93Y6zqzaUN1MzaqcbJsMiakkztqqNR1q8HaF",
  "key27": "4BbwXNuk82umA5dSp35XbJziMtisHGN7s2bGyCAhApJCTYijkaFZR9JbPr3AzqYS7G4tCygmnXQyumM8JxmZeoxY",
  "key28": "3S6AuJaNQgzxnwh5cK1XsiVvKoHtEW3hkWQ6xERhcQ7DjEB4RpJcieFRtJT34jv9ceLKfGDQYnY46y8hhfP6nHgM",
  "key29": "CEYjVtcJv7wnZN2ZK18nSy6wmon3JdVHNDvhUQJ75cpzbhESx9LycC4kVo8MVpzJn3G7FHNzwtch4QAzMm7j8xD",
  "key30": "4KUXJGvYoNEHgq7N8J8Q7MsfrRCPgmMLnQmVVvE7BaEp51ACmQfoJn8AgLkrzCRnjdmvG1UoMWnjh44DJvuBYXSG",
  "key31": "eUUuHAXFKboVRbBZrP8tpptX4YxhCwf4ZhktMzSztsdbG3zLmQbMyqkfcR2GyBUvPEcT9eaj5WNdqgVmzTBNHeg",
  "key32": "3LRMtLZ6yyXdNQ7S1Li2T311F7tsYhFEFCrx8eeMHrJPfjSSREnfQUDv3ySSJJnZoBvfqUhXwuCWvsPkU9rsu1oC",
  "key33": "5uf9Xbx6RJfuDns7UzthTQ72xk1SMhTHNkd8nEHvd8XPvzJHSmetaqcgs4MtKPXtyfR2J5gpbFWHAEChMjEXN2fN",
  "key34": "3UUgmKzmkZL46nPpbMRmBi5W4YhWdQQF4NLz3s1JNj959nfHHoQPwcLuxkiPBcbjfosvwMNCto5fVnWYi8aczafX",
  "key35": "671GX2Z5BgCCVxipDTqMx6GGGeWrkSZxB5mbR33CYgNwfUJavjvmkvkopREbnwGy8sz9zy9C8LhSJ1YwDVQ5wpne",
  "key36": "1DJH3kmDKZR5tshhak3S1yNvhpKCzHWMVtJExFCN2asyHR7AzRgbf5Mm9Cj3fcXsDoBd4eFDdZVbxqAv1iMUjtT",
  "key37": "2esT3WwiffHTHDMcX3Qo5TfqxXELsU26wFJDNcfTah5eTpy2Z3DhzeX6ZVupmN952shFbtmALo1yzno4wJAY7fQM",
  "key38": "5qPzK38Sqxa2qoGyuD3zL9KbfbmzvPWcEnXAvuMJ2zNhB7esjrPbiSzZAHk5tQqRSv2MDPMUHAxNsKM5C1eJDwuF",
  "key39": "3Z2aMTmJu6RLnTAHDjMC7R9N7v3C59zuS1CCy7DhxGAkoP3cQkdeTd9uKEN416sppvHQYPgmwsbHfELXgBJzJTWi",
  "key40": "4VRcSCYCF2KxP87pqbt6qyAjdAgw4aAjAqpVHepn3K9Et5hnMKHD7mphhEBqB1panVDHMQd4BttwmxmYGgx9RLeN",
  "key41": "3MgATCFkPK78kzRUWGYmgABRjQDgpPXt3ykdx1VVvgPwMQ2gQ4Y2msFLad7D2to3bSZSbtGAgLvPn56KNAXkqnGF",
  "key42": "2JH6hAGiFdNVwupjzrjjW9n5LfTAjkt9qyGav8TAoa4tLiBxUusfpVNDTFikwjhoNUh73BHcQdGesMXpTj1rgAu8",
  "key43": "UdF5HwzWQ3Km5ATVubG6TviWxywyWwXdPjiC8kFmo4rtjQFcChzYds2DguTHtbs5azhxhS2YKgh4QpxMmYLz1hu"
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

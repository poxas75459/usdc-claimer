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
    "JxAjwzgNhP5CrF6Mh77oLWSs9TSjdPuYBz1FtiEh4ktNiBhrk2nzfDNsqLu7S7LpZnB2NEcy7wg8Vnmms4VhCV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jd21YJHDZ5nWLNUGVBDMKk3PVUaGpfhtTrAeJhSvqrAwdwqRNN2mjkcYBL3i2a1R8uCR5USYszHZNsGVSa8KPow",
  "key1": "5eJZmjKuE6AyngcAqNn7KtzLKFaNpnntL7Sngzf9KWx6TNTVUmtJNxA588y3xHFejBSL7S3hahfdtdVSMfTPv6oy",
  "key2": "4BKWPQ2U1rLLfP3GJ3Jvz6iaoLVMTfPFPqsxv9gWLaqwZxeANMfwaTijojvjHikUFjjyU4zET1smRfMFg5mMwPtr",
  "key3": "Bz2KRLfQsHSUZxMKMjwUbg7s51dT9SsyjyH6woojqNkxCoufD9gXLifTqBWrSmHACbYkVenr3Ds8LccKCFkwkuf",
  "key4": "TR5cxRGfm6CMoFhkjt57axmosX8vaLhWfBW6N8LB5wzx3rPBMi2XCzqcoKq75wpT9KvdejFfdMUctEVBXBFjTH5",
  "key5": "4xqnFX4CHnKbb377s3H5TitNnfJi2QGPSyJqNHZ6ekvY9RDupMT6HNYtRPmz3CzDYNgVLaQqn1BuA4WBph38Tb8t",
  "key6": "zGcsTFGBggeF7iAaLr6iEAwEWvKj2Dzj8jsFdK8s2RAU8RQNo929x9U8Lnoko6sm22atj2R4Szp4D7tJT6NdnFh",
  "key7": "28NXTxjh56KFM43MezVRU3R91eF7tcSUH9geBsN57HywDedpuoemG898uBB1ioGkPzsZczCNgWgz5rUxMRew2ix3",
  "key8": "49XnncZA7hj6KwpSgULgYb3KxGVs92xQfomvbo5kGp2cdb8Jv1R5UM5HQRm9UWinvsN5TPk9JrEKMqiH23VF5eM9",
  "key9": "61BzPSc562LMcJwek4XCzc6CKakjCeVKCJhE3u4DNhF7KER18ayfZ9RhUvpJhrYfXRd6cRjWQqYUFzUtieLESHhh",
  "key10": "3ryGRy58Kugpbo4iK3mmYy8cvozMSphSUyMM9LZfkcvxWb3iyzugeKgrvQdTVnpiR92k2akRSkAsMyyZifm6BrEt",
  "key11": "RgpMss4ihsDmHhnnfiMjR1S2EKCB3aoGmRxoX6z9h6J9ovShQrj4WnPPLaYkBLVpSZeM2NJt1KJR1firTW82ate",
  "key12": "2inDM3e3ooMk9g7AeLqznuusZbxrHnW3ok5SP6uZxnQ7CuxYSZy6BjkBGWYG9TPJNfTAmsLKxadzRWRMVrRGZrJc",
  "key13": "2v1mkeRFvQpCrQEPibUKe65xp3C92Ep3VAnTKqWe3tmka5fvW8Jzy9UM2y2nLoiKppXH6GpkpF2U3qwJ7qKDuvAg",
  "key14": "5LxeTpMwU7BDGfYYDdc6Ku6wt918DV3GtpjPsG3S9fU3zC7Gs1YEYYM5TZV5n6JAyE4h49HkMN5GsNq4U1Xpg4UH",
  "key15": "pfQu9uubCABvoXm7WfS5EyZuTNvenDnh5MrrT6qH1C3aiLCEFgjPcHvwjqt85FnLJnjcYA8kSUYmewhJarDDyM1",
  "key16": "4rFqVBboKdGXC9dpCvmVgj3oW34Da7BKgwbKDCA6bh679G1GB6t2rsAvfuSDrZYTa63ZGk7DwWnA8ARSPzupgRRW",
  "key17": "4gZrpgrFaVBbSYMTxW5F1ma4cPddwnpLv5dUE2a66RhHKabjVk4Eb77ve5yje3rKe4qE4VQWUsMus53Tig8H6aXt",
  "key18": "5nbo7am7oTM42CSnWTiR6SiZAdcTKVfxmgEG1Dywn2n9yZu3QguMMVwXZ7PjpHuswXdryqg197rortpSZhLTXipw",
  "key19": "2UFt4KiJetqTjzWLzM8ZzqnJsHasUeYNM7tgbKnbQKsuPAAbkSpsJbdW7MzgLZHGtQR691NYXBRaAbKfLd4m9cp5",
  "key20": "3b4USe2oj8dSivK9xVpMgnfx7vRRLg5pNdz8ZQVZqBVSe5Ba3VvxU91ceJeiE1HebKEGGGTBY7CN19rGMyDHadQH",
  "key21": "DHdZSV89BdTjqwiBDKBo4Zv8DqcUGoV6V2jcqW5p3MFiMjRP1uAsJz3sxUjDLQsqwj77uzwgAFWwJioMVt49jah",
  "key22": "4nNzLj4FQ6k3otTsaoDjbV7SwJpz4D6SZA43ScCP2Hv74oJKgLgHjokgab7m3UiopYmMwiSi2FnGB7h4qFBpXDqC",
  "key23": "5Y7j9VZVuKnQmysgsB7Hyr7FLNomzU46uL2hvpf6y8wPZnCpensUjdHRXfGJDs959mqcsVLsJ14hu4jmNL5FAisH",
  "key24": "JVK27m1kDe8zihAcc6xDPrV5Um43xDG3fqEXAteSSBaW4wrxyeiSzMuKNVgQ1BVPZ6LPKyWsno24MgQACQwxEPu",
  "key25": "5ssphNPuE3M5cLscXc1Squ8mZGgCdmSPBcMvV7a6bx5y2BhpgFHecXdbeZenF3QEhbe6xLS18eFsdjjUnoLduP1S",
  "key26": "3wXmmPBBHUTfhPXHnkdHk1noBEJaPpTAjsA4T6kmchsQUP3GN6MSNssPXj6j5N5TaUfWXvZizA3RY1VehKLd32JD",
  "key27": "4PcjXNpEpJzioMyE6QC7Mkmj2RBcdob7DXEdvrjcgo3iHca55LT4jPhR9S6jzcL4qzSFYH2GVZtTjbRRW9Bm5MpE",
  "key28": "3DmyTTg2xMSFPQnAdREFt2q6tMNAmsBJuLSAe3tjdrSE47fayuiGgo6YypA4R2VfPoRLdhiktonwhZpTwhCYWwJs",
  "key29": "DatNbwhhfbZc2sweUicDE4U3Fu1Bnqt3wrXy7XneRGvesX8cE4bTX1k24UYw15XcX6sUkCHmJjkjSCQ7d6zTJiH",
  "key30": "5uJqRaDcUZpZZJxD2HSARcd7e7AJFV2PJ1u9UuzhJ9pzYkLwH1rwAb3WGEDjRRx8xYgaPjs2zXmQsfXpRRvG5pWq",
  "key31": "D1rs4CFNq1bfK1XsopYcZUGuSkjEu81QnuCpHLRKBiCcGU4jYDa3Ut4GHi86DqmJPd84BkqcUTHaqK1NkikUxve",
  "key32": "3u1feKnCdXE5gNMW73kgEdGK5V9Fwx7W5w98p5GjGRUuUtycaLZ8wMcCsghkimFVBkm3DcMbAdGhQNSa5hrEdKDY",
  "key33": "2ZmY4UKrQTQxsi1PAbSiHjE7ko1JzaiFB3uMg25tw1wUNosTXhTQDPWdHzQqBe6kcrxxagko1ivcoX9AK9XHLRaB",
  "key34": "2r66SpR8XZYRDiBw4rz4NTRgzkFK2s89Dnz3jiFmhvRAt2v8GzWBtQvTXT4mE7LgSiPeq323XJhsax343xrzm24W",
  "key35": "5uoSdHHSc5rzZ3VuAGSa4iaMuaJBaPk7Dv4xog6vhkq97ZD3q7n1ZUHTEjGV7JVsJ2TszfpwpseWwNqHJqQ33qUP",
  "key36": "CsqkPS5DvPzzqwcrub6UhZNfo3yAMUMBRskiJnnGepXs1d48sSSQ5yhGpKQrv2Ccjwt8m5uwWbQBkSdxXyyVNS9",
  "key37": "3Rr14TnGKw1ZBtVQs3JBtBSBQWm7MoLoMs6W7dRYgqWHRGqmmcWF6eyeKQxg7sgVeBuXWztQHSUuqMHdfZy4CJYW",
  "key38": "2PNdsNsWHtVvBrymRta7J7jcLFYHD2Da7kp2SUem614FAbqgoBFaWZctMyD1o5zz8RtmdKTB3a69R1diVFhjz7BL",
  "key39": "3iBew7hae35oJqT3oc4E2hnkAXm9XMRknyhdCjAfVTnPxdz7HbgmUaATjBkzjkSMjJVg5VSXqR46yZf6uyeNyJQx",
  "key40": "eXZWfBj9iTTxu2HboHBGqtqXaMc2JgtbFSRWJPRazUpY5JyqgwvcA36KPGYJVYhzHUC8GsYFz9cWEyHqaLqszoN",
  "key41": "4tgei18S2JMvvMxd5y1KfqeHKJyv2P48DvWSNWyhMmKDtm62dbnvz8KKSKJgeYQRgdbWZAyREAX1ahTXS8FJ6UGc",
  "key42": "4V5JDPVhCTf8C6kAby9MDAPUMdrUYQLCv6CmBmmCDA5hrZmkNGL8ZEKU5dhXUn8qYDintRhRtHbxBCTaUCUHuT94",
  "key43": "2q6nHYxvCrv4LcnZpK6yWXfq3jJ83hfeW75eSszxFziNwUqGUKsQhWVDbuSY9bkzXZ8bxT45wHQ4qrwuw88z2p3B",
  "key44": "2wBMeFUWRdcBoV7HdYAQFF7r1zEVcf22Mi1uvV1yQCpYPZAymiPeVjrhiHPNQpuYw3TnMBMzRKJZ7TqzKpHZ8hC4",
  "key45": "2qYkKeyooeyry2ddwUfzPaMaaHGnTCoLzdFtBNTFc195qnYGssKZKS4iR9hMbxEEDx3NJgNy23u4EsHP3eRYMkPq",
  "key46": "DiBshtVfNFXGojmJjz1GoU6TWkA4uAeT8iC1cRPj5WP4YFMhq1JttT4ETnoy3dmxVyAy6fc34QUMMJCsAMF4JTx",
  "key47": "26Ca3Nvm1VXRs9TmRF5kPgRumyC1neX5WHGs5qkVhEbtd4JeEtC27cXBo85B7DHzhrLzUxqBCxBaiWASHZ9Vqok8",
  "key48": "34AX1aYhgxs9766RytT8DymwQarkBtJHJNNYEJiij63TyeVbnrDD4y6AuQ6FDU4Cs5Qs6dmGiEonjM4NNqF1pC1L"
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

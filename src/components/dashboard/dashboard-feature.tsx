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
    "4gmZAh7MmWme7tsE5WBthNqvjmDAKChaTedpwaM73S9ALBFDGBucMkm8t92vwCdd3G4Pf5ErDyrx1DDgexk2qEcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5afPsLqMj3PVhceSdwEwfdup4cpFdFn6oNGbLqjCxC2VUqx2hMrdZuAPrgm64eCcwps6CmJmgwKa11cLKn3Gx4sq",
  "key1": "3YpiBS53ejYoLed8ANM3JR2x1AZhGvEbkf6xg3GETkFhDihBqkQxJd9MPhWb99t63FZ1XKVHDPgtMucaC6AyyRXX",
  "key2": "2Za7h7UEwjXN3Etcgz86N7aAzCtPxApakxAyFky2Unh8HDEgjBwMRYXnAZJAN1QhpyUitgYBCVArVhrW2k43aYs9",
  "key3": "vZHJ1s5ECqxbrYsVyquGtm7rBx3YLVA4QHPKcbFTQZcLPJYPs1xiXLmQDdUbUhWCZnhRtbG4U1RC7NTDrpwX6SE",
  "key4": "35BS2DoKLrwRpXierMiC1ZCqRWKnjcMhemjUzApQgtXhVCUV6z4TCFyzw5af9VzytejmfevmAgAzpXDFowJyy3wv",
  "key5": "5E3ydEU9nHSZCzV8ALRuxnpKhQMgCvDb3YgQNddHoi8WDEXPcLCq6FmuN2EKnpAyQVyrkehron4vFhKzEdeHuNu2",
  "key6": "4fLZ4QN5ukMbgYpHHR31Z3rBAbXy7vhDWrYRo7vJXAtZ76jU6reWfEm59kMFiUAXUqizykDSyJtaFdz5Sv8VVXyw",
  "key7": "2trChSLn7mi7pKgWptEJuKwdvFPrGwWpM9SZfWZoJz173zJc6zpv7kYLMqC5rHRh6qD9FwK6x25pY2hPtE7SDAxA",
  "key8": "fhNTyPNTLMvVAh4RmR8ThiKf3HqfrnoPcgaCX266wPUZhFhCWERHn9v56sZ9V8eVRYnqE7k9WTYMzjytCn3qBXx",
  "key9": "3G4yWsQuMgZLfi4k2paK1uKgvQA3sXPMr88VapKKAuJo53MZAGbC5qYFxVTYaJbef6bY4n4aEu4fDPLrZ1UCzdG4",
  "key10": "38wDo4yKQNnQT2sFDQM1FhhJnEY4TZ16r5GshrEWqb1pYPV1e9626Es6o23Lx5cnGtkEzNtAmzAfGzxr1UTUNSGW",
  "key11": "yjyMTeY2X8yP8VTwuZSdDyvM7s6nUMm9on1go4qtsyA6fzRdyGXydPQHK7Hi87E8xsDnD7xcENSLSbkBgfeC9f5",
  "key12": "3uWmZT1tJgRCdYRx8SJXeRHUSZ142eYgpZmxN9J5FAfftQYHGhBSEwNTpAaksESRMqEddfVTeMaR2JpErEy7xeor",
  "key13": "643btEwPrxbyc9UPGK7iDrFDYksrT1Wyx6ikWobx8qntoqgTCCC39MdWMdQfwSeqMwNcVV8eQj4Noo5XKK8KA8s",
  "key14": "J6zfxVrTc8Mr93BJd8adoMZanw4w1zzReMjXeVRX5J3oeYCBfjQzHCA1wjxtGpPc2cRiULJLesD9k8i38kdJS2A",
  "key15": "5gr3CGPYx7YFD7QaMiq4K2LyR3DerebSDAZUJuKv987ZgdgXXue5L3Kf9BkiCLikRFe3PKYNeW2PCQSGjXMgB8za",
  "key16": "4bkNhXntgAgWVQmmFdDxHV1VzTwx8Fo6GMsKpNuF2jhiHmdHycJ6Sd6cDFKHMLmKQwT1NwzQfYMDCXfjevFdVMhq",
  "key17": "LoBRQ6fzfyMTGHvXnwddeh3KCGaH88boGmzPiXjGcUQ4VN5UEpjVcN3rGUoLB237UKn9D3fqFkuRjsQpAawT3pJ",
  "key18": "uHPMFgG5LJrsHKN5odYJkpBQzvh1eYfwhQVFaAoQFBokbxs1g66rzV6pQU897cYULK2q2CEvKjxzPzmYeQbRMWd",
  "key19": "5AAQoMRnKXrG8xrtoshB3i1mqQDBpCG4QSDRx3F2p8YqBtfF8gik4VtDURnpxDQJMMWTBsDAcWgP2f2DExqi8BQx",
  "key20": "5FNJmRR1bPCLJFdqXYoXUdtzTZsVb3Vj5iw9s34N6eYmjNYL3DgAvckVkNsPxwFhCxWfJp28brPsiRErJVL2ipom",
  "key21": "2gDRUfhBDFTRWeo21RC3aA9TzzKfLDDcw4tiwXUWpj4J61rgUEYTfAoWQv4nmQQxfwzb19LDsK6EbCCq5DAbUyvJ",
  "key22": "6EtUu7w8dGvLKChA1GtetW4VehLYfYNWnS3sWZsMujVHmwpg8T8wjdPmhXX9ujCqCjeNp3tg1sKBz9odgsKRrwb",
  "key23": "2zeKS1mHtXhtkuP3JeBPaqaGSeE1yjEheDrSm8g9Ns6PwJyyAtGVHXmQLcr4JtcMagK5uUHiQLgDEiFr3LgUHBLK",
  "key24": "5Fz8GSRzZJAzJeAV4XtGycbziwBebfcgjonTiCMci6qo68XgXQ5dY8uMmHyCAhTZNFECu95xKkbef2gvM453tVBE",
  "key25": "2Nxscg7f5SE42BswZHf5fnG8G2PxHHV7R99i8LsQBKSaDPUz9ZT2kJ4c8qS8sWR5tuHsEEHMtLLEbLDBxq2EJHN2",
  "key26": "64C7VtNkS9tWkzRrroXDc7VShPyrmQbKCfHWsrY3WWZGchsmLWXx3gwzatkRTDp1ZvKqXzWLfk3KQ94oZrFTSSbW",
  "key27": "bnWXxXtwSibmUkk6HxLzHHyubpSqbSaWfZ7tHj9GavnPT7gVzyLKVjT4hUzWk4Gf3i6c31Qr7386VGhBPSYsvPA",
  "key28": "2Doy3Azv3sFCkVwyPaBjwKCKpyvBSjsnke5g8V1dSPJM5Jb7kiiLvHp74TYaLGhJLhoQaAwShUAhTBHDVA5WLJcT",
  "key29": "4AB3zFpqQiwMBzACZDv4wzP1daxvE2XBw9hBPV5EEwAYX61sAvgSsSfi5SALYZs7vrQMuRGnmAc23qcGBA5n6SCm",
  "key30": "2Q1z1suQ2gRieKqjctQYU8M4czGrH6d145aAEzERspGiC5mQi4ZA8wJjuiGqTo7YWbVvdXZ8YgWrSnZx9D1WraHF",
  "key31": "4HPo7iTbj5i1WscZQ7E273MF7ktnTzmArso7r9hDasypA4hMzgNUegrxx5JLYbdxeU6dGyYzgJPLphjNsr25JamY",
  "key32": "5D8m25qeALo9NX5B4mxuYRv5XieD3UjfdNLrcGe4VK4wPexPgQvb4Jzg6J9GSamUGyWTa3iLiVUmUDrXAsuk7q5W",
  "key33": "33grnZtGPFJhiVio8BfLgCgadioU1ysCG1khmHsH3yGtgL5gFkt3smYhjCeZGdTZcd5CtL9N6ToS6SWe1CWcUUfr",
  "key34": "2EiRoRmdTBhbmbq5fikpNfuPT8GDc3eEA71BpPXy5wKcRvugjsvqQDXxhPju81xRwLB2uJY3x4VMvbaoZjHCKqJA",
  "key35": "38rVXtn5bZuU92c9H1RNmQ3257uTmxHejQXLFQanyLUorwWHVerMYPnokR54JM86tRosK5i6xCyAdnMfBGTYwFkr",
  "key36": "4YfkK6DbgD2kKvE2ztA7hk8dpZ7Ar4crUjSS8qNRYCy6DLYf7iooTHfckgQ9k8oKTtjVv3RbB2Ekf3cUk4BC3VuY",
  "key37": "61XeTpmcTniiH8FsyK6Mj1CFw8Le88VdWU5eZM698Pk4B1ZtwgMKVdYH4FufBYA6bjmZDcsTPgB9jMqrcWrZetiS",
  "key38": "4R33R59xXuyStvLxxKew5ifsfJPRAv3kDNuxwsABfxDdQoY625EvE6gHSEaDfkGkJ2iBTNFNV4EU1uk2sEkibS2e",
  "key39": "4DH9iYuB4GXR1qQVwnxFAPiEHEQ3JUTfFzoF28chdiUEKbyDjjBMo368hFYraUALmqW8qz5DGNWZCqrXhTKHPYCC",
  "key40": "ZNgVJYEBu71KmJJcwga28UnUdNuafzN2BP41X9mQVZnzq5h1bxriQTZapnnsKqcRrtS28wkNGHGdSgw3MQG3uGC",
  "key41": "5JSzwBqJTesoFrQSvWCtqnpvNeAwxg5KhgtZzN7cidfoVPjQ7Vstw4sNhabh6jhGME6J95eni1tPRrkLQxwsR2Q3",
  "key42": "3rV6ajxNgakHLgTTqVW7B9r1VgT4UmUdYekWsPUSKV2afrWVh9EcAo5fjTe2h9WZPXRx6j7krEHxhCfs3NNm1mo5",
  "key43": "4CPuU8DEbxdfuANXCVYfqSgorWxGTns9nVjVvMGYZPMCdW2CGkmncXxDdV1waxKPztUfcPStf6nHqoipQsqYVF8x",
  "key44": "3GseynfbwaMHaJM9x1h3n7CmcZ1u5icPekgebvfVU8vC9JRc4Mx58u4BP5sf3dVGfRbyuVfqAdCvVsbRku6pKsh3",
  "key45": "BvCfPW3StvgRdp68BvKaCjoFFptKGfSRcKpoDt8J2N6u1fxjGkCtCBbRVcisK2beTBUYBSk4efhB34T9U7mNMxX",
  "key46": "3uCn6qQo31yqaTgyZG9EWtpow25UESxeY8MRf85jJGMPsUPY9aMdYGB19yCPzAfV9SKBS3BbZMhT1gefUtm5oKHE",
  "key47": "4TMCPcGfjDrbZDzHuNrSTFXNovB2c6p6nA1VVCHpQogfF2q881jehv65zRP2JLoPzKDPLDWbvmVWMCGatsipF7AM",
  "key48": "31rUKy4swAmJtJDNiVzr6KiHgJTobZe38tboN6D51GL5hAZE7AS1btQ4EyJcSpREqkQ9VpovhH2Sb1FBrKVxZpAS",
  "key49": "2z5dExubj7Kt4ESiUaj2FqMqMqwtTPe5JVcTeCBeJzzmxxGwRsAhZ21qxzjQ6om4TuEVGgEVKivKTQLecQjNay9g"
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

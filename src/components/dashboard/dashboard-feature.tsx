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
    "4fwTs86TzYLREzs4uERg9zdcA9ccbS5poDxZoSUxfoWa3zT57fqRUU7vNQoBGwcRUhPoiKmHW2EyCrS4jmBkGhdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "625Trv67mrQBwh4hLGnswQEhA9a6BUd57RXqDncLouPgN5QMxnDfvY37VgABERAMh11CF13tJAEUSAnZUmVgbFGE",
  "key1": "2BsxPyofK8DWyQTbBMkcTMeK9zsNWNPREggx39bVCeseUyNxYdALEJ5PHTnXbUHbLpdpqjk2sKavUzqpMU8cKKR",
  "key2": "3TSUadCgn1GUJDiAtMUTHsSKcbCDtvzw5cTZNSfj71H7tUC5gx677zTdrSgCVM3XwJTFLzp2tqubDk17QmcwrTKU",
  "key3": "31KkiSXauNpq63prsXCLG1otfebCkzSP4M2Pz11xHMeQeXmjmJiWAyGwQb4qij45YmeSaDhGTfGjSGj6xprYGovK",
  "key4": "2GDwcVQg3sQoQBQhmdkPzFZ1ELvM8FDqBQEzcWSDeXF6VHWWy1CypnUHVUnLuMrVdaQeRmxtB5qhUPDWcT64CMLb",
  "key5": "5hkH9Vcc1zdUVZz8pUo6b78g4LyJRNcFXLgNgzQJkfAXgCvkj7BupYyR1gAvwVsyKumsmvHZ9pA5cdHVr7KcMBFC",
  "key6": "4ZvaTH1Fw25dravAUffXWk7Lahj4RNKbJW2YKzSkwC2Tmuqh2vDpGHzAH3epRaqeJS6QSokch9CbPcBWWWFvpgVN",
  "key7": "NUbCFL7VvrXXxatKrrhrXmRoQbR4J7bDgYG2BNt5YcY2n5Ubft841hJXNpgon2u5pE8mKc6wNZUNWxMaSVeacP1",
  "key8": "2uuPtPCG6o9KXWtGaKc5hTfo1yWLfCb7QpXaCPjMpv6G6KzFEQ8sRueTUUkWWz5HPJnbsiFS53ZnYLxwwUWwUfDT",
  "key9": "2paUB7o17zw9hDHLVnn8kaUEKMdRrinxDyDdLaczWKY8Lmkhzdf2BgAsW4nrNg6n67SXCjV4pHFmMojN9jC7To4Z",
  "key10": "5hbzzMQqfKyyvVNbhnn3mQHqWhgj4YEt6U8Go3JT9vH4Ti1DZPiU9f7XRyJPN3v9mYjpkMb4tDHbCywWYNA3jgaN",
  "key11": "2SWTVd687TsGJtCY6zUQhwypcRBTXX56RztrXNZrRk1YwyLzcKvYD9vydazbThvCuymt7SoKLf2T9VgJXWCS96Fi",
  "key12": "3yzHtHobmG57RZVJagTC4kG9rcRsWBUVCEoyiaVCSvzxjYFurzcrZinbsKpvbb2ML7u76UF7ryLCaUjNdhgCwS3",
  "key13": "3YbXvKmQxrKgwhwnaVycsHA4SPyyRa4s1khS31oq1fEVz3UdLgnRchmNFJXcLXV2urhtLeFhsgJy876Ac2HC6szS",
  "key14": "3y7X3CY4FFAhJJbg92yAKcxZekLMYyeqMsHrH1tfcEbZNtH3KKL8ijnBX8nztyTv5JJZ4KqMVJWoX2AxSKVan3LB",
  "key15": "34QgFJgmt9c6EeZQkgcRoYxTPssBE7SxsztBRESDv2JZmcWhVBWyGqXjpf7Z2pSv1rFgWTeweWPAbA9LXiojTwTM",
  "key16": "3rAtchbGz18qVTwZxHcLa8fswkmUXg6bGZ6qU4cAY82A4skkHZocYct9uTbjWmMd4rGeR17AuNMfdVvoqaDe23Jz",
  "key17": "3erTe2jprcj7XgJCBebyDbMvv9kGRBRECxy16vs9m3GKvixEGubYoL2gZYiXR5U9GUgoJmWiHQXbRWyvsBvekH7z",
  "key18": "48ZMEnXNv6mHhCM71GQeGR8YD1XbnrHwcM3SVETWU26U6B5ikrbnidm4vD73dNE4yD1zy4kKdLyc4fjnmvK9vNe",
  "key19": "kJ6SvrtmhEj5J3smH5ZQY2xGzXbLAtGPEYvQZMRTLwNoofmxbe77ki5vzKjkAjojV348nv9cHp29Miktpjitdi2",
  "key20": "2StePE5W7TWkJRsi4gJbVNaGkcEsGLXHCVevZetsxC5Q3o3PKShfe4ctgM6o2BAnGARFUqK49BMyVev31x6KB46H",
  "key21": "3dKvnsfDbHX44Lx8TuwdF4QtbB71aUYv2JvFVT66zT5DMHGSUiaHa77vUt5Cabjb9a1xRdZinDPgaz4LG9cM5NEx",
  "key22": "3gVQpPa1akCLPPLvPWzce3S7JnS3hbr4jcCNNACgw1ySXJ56cjigFatf8zj5ASTRdupNnWuvNJ79JfGveNcsmfrw",
  "key23": "5BLvQmvZ6JZd2krhbJYeJV6sStFt4sKV2iKZxPv2vr95fHDhjWZhAqw59AWhrp2DCZXUzJwCEUEtyHUingdaDscD",
  "key24": "5WTTsxk4yWpifynzKLr4vmYQUgLXxNkao2F7AAcxwCrah4PqRHvB7Fn5dcK776UVrXrCNELsLyZJTj15yv7ZNhdA",
  "key25": "596K85QbyWWxsiAKzS7RHtA2fVncRmfNaK48tksYXJ6Nq5gANR5oAAoyFZZ2zizZGGt2YYAJ2iTVBtWmgEEwa8jB",
  "key26": "4thgg6gapDHrxeXFGA3P4K8u1xWzMg1pyaMo6qSwKXijnKYp1yq4Jhofcna5xX26xK9smKTiXWEeWbsXSdAYTmrW",
  "key27": "2Nyt6CM5LxrmLT1KPitKu6z93oPaoN9WiXagmtpRJ1GRLpnuGa8nUKsZWrBLoqm1RX1QdqkJ6KP9kKyPS3kMQ57U",
  "key28": "A4oxBsoLABWMLbzrFnvFYfbmR8KfWzD5TQ6dn11EyAYzvr8VutiZRcF31M8BpTZfMayFPbi5zDYmqVHcmHartJn",
  "key29": "MG9y6SYL7tJWqdq77qXP9MWpZp4SsN3YtsMiuT5mtUhGnYSNWq18NtoH4FzeQWSoAUK1WhviXEKqRcvNoK89y6P",
  "key30": "2nRTxnK7cCkQVgbj2tVmR7qVFjFTh7q6yjXidAJ6b2RbQ9y7zHeBo4JQWXjjEFs8TsvNAeLVsR76BNDk5UAqvCki",
  "key31": "4MMqJ1SKjuJZnY9vkjBF5g557fjUscUsRENhiM1k7Th7iuzJFcDwmxEknQ2bEihWT4Rim2xPDNev16tctNfuALwp",
  "key32": "prRFEmAK4PWCx8hroEXU8sqQL46CyjJcmDaiHGKcbUdTrKHAai6Zs8GthhYkDPnj6jyKVFNZcWvhaiMiWjbks9V"
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

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
    "3DmnyntVkJT8dsuQGerwKbLoWgTpN2pWjyYzdd6XjEeWv3HEznxpTMuCiYbP6HKgJ5hQCnJUfWQ7cKAxtgSmxXVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NgCNSQFo4uzSfVuF3VTyupnVYN2Mmb6VCmMTAuBCjBL6R327QF7KkCWbv4B3wSRtMYxyxwKg9S2y6QLy58eN2yB",
  "key1": "4zhb1mdFuFCGyUxBUdDK8UPPWJZU1NECcQW6Zvm4MDhSaebyx6gzgadboVj9o6hmS23Fp5ZmT574BMGzccsp1szb",
  "key2": "3F32tXjaTvFEBaoF2eeknA2u1Fwrs2boi3DCz93jYSQ5KQkPgomzXXg9TAH7uDDhAiBQKUPCF9mrXrk19mcx8jwW",
  "key3": "5XiQGptRDdUDbBgtCXrNHMi7rNDfjjLf1xoD7krvNxwxpKbpV5RJ9aTj3P1EFkeC5Beqam42AeLvR29j6wLkAc5G",
  "key4": "4gZxRMkGb5K62NZbBB1PHjFS8Lqsj799qBQgvPBgMoa9Yc1v8uQFquuJ3ZUu83dS8riU7SqziahE95nqpx1GTqQz",
  "key5": "2bSeHHRyqYtQCSAAYbzzr95jGqDYKr7hq37PLvwAoNMy77fMgV4hryniWN8MqzfjgaTwQ9i9quoAh8UvwpTN8drM",
  "key6": "yW5rNL9aDoYR5LmiKHgyLYUGEz2witfwD1w5RbJhsaQ4AkFgKBWgBJEMSsLyCkM3SbxaDP5ptBn2dCBanhrS9xi",
  "key7": "36MPw1ECDysBwchfBgZJU9U3D7Lkf7PhFpaFXu1AxkSutL4MDNhn4X8bgb1SRtyMkU1PAvSLRnJ8f1V6Xd9saA9o",
  "key8": "NtbWcWEsraAPb9ETksmnRiQMzQ8j1oTx51KYYV3Wf7g9beyshbWFbnJ1WByCt354fS4ATa6k4J8TAGfUwt5PJ4N",
  "key9": "PbfbWV5bmzi2HJPLQpwzefzKX4iPUJaEWra8xe9QDXFGZTAsTreSkcGPmdmjMAbFrCtjQabPQ5ybLecYrG3KQBt",
  "key10": "2WY726aC13c2bNRcQsK4QV1X1mVkMZwRCWazw2afJPE4ZYweqh7tvytCtEU3oY7FmZCCgP5jgD3dg2Vmzg1Km6fr",
  "key11": "5s8gAj3Zez76bNT1aDDRaxEHYQNGRTAinwFPhhUNN63wzQZhfTtP14ZRJ4Gtfkcc4gCfxUKj18xZKWz9zJaeArAM",
  "key12": "4N4Xa6eSPiDDkgktAGF7ghpcRpPpafPhLpA6tjsNxQtCUKQYDPbYiXGH6soQKja5pDEhPBSkE3tzBW1Bt1NU2KE8",
  "key13": "4wPuPyaknKqKrikA1KgTncw2zhAXkqcZmZCigjLYjS6rsyzvPn8HvPwN1nQobvuz3DdeU2jkaXDV3qgPnXYCbAdg",
  "key14": "3Txh2m4au2HJCrXN2wKMdUyBzSQwHdXyp3dZhpBTKMH1DZCj954xenepehkt91uLFPWWDHLLG75qJBtVo8JWcgLi",
  "key15": "2jWVrsjkytDc2psBCeFV6wkdm6ZYBvWiBsAbkkqWzW7pW46YGMAeH5hNoVvpv2aTz6wkYtFR3FzWoQ3fRfCAa4sz",
  "key16": "8uzUbyMqSrjYdd7rfAVzKzV8eQaCFJsVpZBAzN8zjRKSg9CfuVtBVrGTfNg9uB5sz65NRSB4r48W8Rtu4Gdegxe",
  "key17": "5P7QmPqbPjFnddBzS9sSrmcmoaVrZJHa4DwXUkcCaf5gTjsRK8z2Ry2V5ptAZvYTKic3uUaC2zAcbi7TvvQE3dsR",
  "key18": "2g3BTvjGXZbdmm6Syqj46gHTdcyjXpBMdXE8yH6QoGeP1JGjgXHFxz1KmGRAVyi1YNHviDcccR8rTxcL1DNH2V6L",
  "key19": "4U68xnTTX5BxKw6dPFG8YnRcxT1qajtLz62PuAq11HkHCQf8rXwoPzZBdhGM587k99rKucSYDMdzpownXNYNx6Dv",
  "key20": "qCX38S6fmdv57FxAtvU1VPU6GtatM6kXUTY8SgRHUoPHHhfjvA2TSA5Y7petwpixQKCSqwUFxB6tX8XHH7ERvcS",
  "key21": "5h1t53dgRnCAcC6DjpmGy2DVkrDSScvHSuabrLXtksTYBshvSWKJJR3Nn2Udb3YaRtPEFoANh2TwvqtzPMvuLJ3n",
  "key22": "63VgpPDA9jfAqh2za7s2jtrkZnMgp4otWymzbqyXmYm1At4aCTCnTfnUhnJuUaEsHGGjxAK63m1E9aD39EoahnLn",
  "key23": "63gThnm3rD38jxwYVHzhSGn7DByqNNqXtzb3nqKuPuxb47SxVMpZoWcfcGHUERPKXAs6BsxhtE9VQcX82U18QFuU",
  "key24": "5GYNQzUNanCwX2Z8mpJbFNsohy51nwsCb9Xfzi9oP12G86phrnUFYA69KsAMKtiqXnoSNbELFMm8i67YgvicoPU9",
  "key25": "5nMWtwKzishNnkJBUDSir71mjBTPUoMEKBmGDmswbXjKMzvqg54gdmyU3TFh81wQRgaRcpY8oXryi5EYKSpEZtag",
  "key26": "4jtjSerZ5Dt2vtniQqons3eAJSTZgGA5eNfkVQJQvKDGYUoEEe7ypgDAeu7VemXD7cxhKqeo4tKp2aDCe5tTVt3W",
  "key27": "iUxXfrXGTtuhRfrQLi4sM22NKXPttBEDqLQ8FRbCsvW7rk5nnu2fj8Mpeh5cLbc5UCL46W96y1FwuFxztbSYG8k",
  "key28": "65SvWaQVrjaShTbZywWuupyXQRSg5JNhejTCHudVzrFEjPmeM8bGZRp85tUVdS1NX13f4R9oxPXMAxeYD8RaLWse",
  "key29": "8r6JH7QFUnH3Sg6CzGVF9eVBLTQo8p4qWpd1Muyy1HSurNjEe1WjpuEN1bfprG936FT4PrnvQLjBwYfk96dM64a",
  "key30": "4uDrPr2k9GcHqpfaeWG7TSfCGVVecVsm8wC7G4obKVXwCiG92ZuHzK3Xcby3T4tTvfcU2zfdWWiwKm82mX6DUsAe",
  "key31": "2z5GB3r95GwYqt3kSMhKpBsBGbUQMn4z3LXHhkMqvkJGMGa1mxqGNpxBw2nuJGEc6X5tfjoBWq3kD8YejfYryq4a",
  "key32": "5W3qpPSjPjQkT1W4nFr9xTfTw7gDZWVr11qzAxX1tiwpPBePvSQo9XiMWB4CHcTxbWsWJtNSE7GETdtgVb2y7qJW",
  "key33": "32ommEVQqjKwHH6A7NrDJgeKFKZJ3teYhQhWp1dk37weYokxPA3KvnHvUZqCd4m8adFFdMSWq7Wff4SBEEQEgmk9",
  "key34": "3B4jHRXd6qTmZzQYPtG3SXj3UEhyRtHcC8sb9VF2YWBoxH3mBYiX6qyn6Z73cwdir2BPtLWZXgDF2HH4yYwwtRtL",
  "key35": "35PBPFUdPUUc7bLbZ1cr3fknBfyj2VMfZSP7dd59FEgrqC95agKWAU79CGioD4wrUGKAtjmKw64id4CR5tTMTDMR"
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

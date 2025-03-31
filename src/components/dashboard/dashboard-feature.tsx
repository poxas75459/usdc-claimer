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
    "3uozpdDWWfW1VRb13Nr5xJdFuyyai5NdrGLEc8i6Qukv88mYMHLs8cbUmQv7HX7oUTiUjHb3bssZbwvEDxnL5ech"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wuTvwwTwsry7Tt9P1ZKj7FaH7bBEndx5rZ6zHUSo86A3a4VRoE45LF94BPgwBEEhU6x9yrEcgZf3sPTN7P5cf24",
  "key1": "4twjB6SdLTWzwb6P66Tw7QWHUWHUjN4xSD5iYUCkLVkV2gpRmPpSbuBWiN8K39NXvvpnuNfFrK868mh6mGaWGU5F",
  "key2": "e9gs3czb9Ye6W9cdNXZbR3BgGGQdVyyoSALyFzFJgjpqTLvyMQyQe6mQdQC3o4cxBWqhh51DCmVDsugt5eG4NDJ",
  "key3": "41twHQnQqpKwq77sYyhqkbCmirq5G5rc7YGmwdeFh6PoT5Q4pkz3iHT3ZWHDzTwXMAHuoRhGW64Gv8dqxSmEZmCF",
  "key4": "3Ypte6LRMzYaz9Tgracy8sQhPGEWrKJLtryjyseZG5PuVdUPM6ySHPia6PKFuYPPmVN47fVyDekE66rck1JDJ13h",
  "key5": "6436uTnRjSm55nq38d1gda6vfZFJcsngmrrfBiTe56JdaqWWgZTqzQwfSMhG9BANS6tica6j9z2qRfVRxY3AiwpG",
  "key6": "5S16H52PpFemhKRSD3vwdEiKTh6XybyQJ8GmM3x6iLzNmDZpszEb5zJkHMG7ELkCfu8DaGbQytUn4ugE3Qv77p8H",
  "key7": "5gF2pP3Uo3PmjWLGYN6WmGrcdmmfZhLru3LmfaV3zyEkvr8MUPx3FWj2mzX11GVpGwD4ph5HnH32TTUp9xEuDYJ9",
  "key8": "4MFoS3qo5HGsUSKjhR3vXpaM4j92HoM1FRMTbjaf1ppJPJsyYZoKGduBaFq51unSGAj2qKr7tW1o1e8HyD8nZTs6",
  "key9": "SNGtKcptJHTqaaZgimEyudLU4xsPyFtyuiWRfWoNRMscLnWQFhyP4WvQGsxe7MP7y6SwCXtdMNgr2xFv5vhyzqb",
  "key10": "3a3wy3FySsgYZWHVMPiD1PWFrzMWP11HnG7enEpDzBzcdM6RMFqcWTG55my45esuWpiyTCcjpQDngB8nMq7u5Ap4",
  "key11": "5tXTqBkQ8yDTXxSpKVn9s2R9HLsJ3a2mAaQ5w2FonCEPoZAuP1vi65jPWg8YcYhfMfKTzCr7YzpjJmxg3PDkn2XK",
  "key12": "5V65bQwKr9qJCLkmpfPPsQ7An6WMGESGTw4xExzARQK5PPXsfhbFJ48dikn63x5W4M4c9E2SS4Qje25qNfFgXUsw",
  "key13": "2cMPwfm8AXQbgBbjcqzwcrLXNuHTpXnvJ17V16TZbcTXwXAaBaQKA7khe1MbZjx6g9Gp3qSJAmRiAab4JSbzxnL1",
  "key14": "4pnYM9u3bvu6w2x586wqVKRKFVPGzW4E5ArmNGPLqcX9RQUfDf2pBX9hYrg9m5M3Py6YAaM4m1PUBoFzRscGE8cN",
  "key15": "tpw27VYKrH9r2mgcE4n7KAHHsf6rpndmgJMVgKoce9uCxgzYAkPm168LdRcTPzQj8xjHgioCaNaM4DzsueuFUXz",
  "key16": "66uANzUJT16MwqpH4u67fhm6i2eGt9TksFJcd5ufnc1FfcJbRhDFS2GgVUMjWCp6Z1NNXcU9K3Y5a9VrEYTwAgh4",
  "key17": "3WYtqXtvrg85XCfEt5XjFj9LnsS8jpXcKixfWARXC5bgAnkuCPZAQZdyPbxaxCD3RbeMGASmZ9HHiG3PU7SzejVc",
  "key18": "3epWZCBhgJ9zwPcgtxSNRdrNX2kuz2hBiR7AXocssoHV2VebBUj7EDP6PomStaUhXRgeA2WtUxbPaayEk8b9wczk",
  "key19": "4CpERtwnNS8TZ8UUcb1Q3CZMUCGV9LX1aV5phtG6r361vPvAoCUeis2p8LHYLDLYkxS2jq5NWaEDRUgcmidsXesN",
  "key20": "38jxALYkkRq1yFPYYqor4uycmYY6A9bcqpu3JH3H4DpLXJVWg28VfDg9PmKxhacRwougSBdCgSUiNWNvz18qWRAs",
  "key21": "zYWWMJhUzRWhU2QoVLBHs82CaEni2VEFHwCRkfXv6vZrZgyMukyFzi7hzPzZQ5FDrvqnhTQV41T8JQDSwUdM7k8",
  "key22": "341zgEJWjJ576AdvWCVbSUrm8N3DCLqBavLETk7EHA4fRfKhsLaHGdgTKprB2fgnRZTb3RMqwacQembYFwrJdV1p",
  "key23": "4QPj6ytobN4RgbB8qJLcAB7CxvH3kjFLdSCDBpdddx5ZHCfCFMAirXbWKKSxVHghYV8eN6TceumWYHycqhGwtbAc",
  "key24": "43sPh6FMCnFjQXNFQX5o9ZN3eXEwjNCCe4oz2bxBc5bVGXFMshSChZqX8zj8E3B6QX7T2xGM6j2wxfmEAuwpBmwg",
  "key25": "3kjvnMXkxUBt9Asjup3jz9n9wqVYKdf2UWr7pztgwwgTNmnmGZSPBgiwNcsrXQqycmNNT3rsV1LJ5ne1rXbE1ayi",
  "key26": "2YGqcvikDre12qHZFHmuMEoUbE9TUA8yaAuY2YLDBMqE7AhC7MpmrnPbkndQoELjT5EdHEV1RTyjqvBzFoXsvKzp",
  "key27": "bJUBMr1eSQN18jsQNinnetbMGJDwosQunFmNMa2ewgLQxmrj6eAsm5w9TDHgN5NdAKZMCrNu48rgQHBU67AD4YP",
  "key28": "28G9E7nNeWmKUy7UXukGmWojGwGfKnkuH81pBW1LJLGFiToLjn2ZrppgVfyT8eDq8jAj8UPy1h5Mts4YBDwnsYWm",
  "key29": "GWtGMU7iLRiLnjfPY8omZEAxVMSpc4nib8DbxZdQBqykwqXaLQA2aiKg6XwzvJdsonRkiAguySdjYE9pXWMrAp4",
  "key30": "2Vu4UPGB2HE4spkc4NksXGt1wniFYPzqaXaxCZRVnyCbh7qDHCGXmVnwgtjwkEaPLeKWzEDaDjYEER7h7466kTY4",
  "key31": "1VeJkqkXUmkJujD9z2RMX73drDXep56tMxNVS3fC86dZEo48vL2Sic2Hobm1aTZy4ak1YEAYLaBDjnyJvBYfPCv",
  "key32": "3iqexnvjX5LK7V7FQMCYfYaRuiV4Bc3NUsADCiF3VgmBc8MJDa4mAUdstaA73RyRCVcViWezs3JuNpiyqZD63Uyi",
  "key33": "5m9MdPyA2zVW2rVi9UtWvMexc7voZbkXMmJaJ11Mi8SDwZLKM4TkeMXFL1otBfJuQqmGWzbWUJGpKjgyRaZXQv71",
  "key34": "4URtM7PQLJ5awfn29Sju9pSEfdMEcub3qQwpGqcMrN29ARfa71r4nd8GeyZDZoTPisnVtA3iXRWGQXQpPTzhvGU3",
  "key35": "5J8PkwMC7BwgJrDTcjZmUnp6WAkHGVvX4c1bi7tSaGH7mxjhJy8HRdMkeVzWWKCV2SYyED9C2o2S3rwC5JYjG3Cu",
  "key36": "3Yz73Er1pJxjbQsLLnrjEyDoUYY1iNFWRA7XmVuHNVeYCKUpJb4n2U3nDi55qftSsyfVguMLbRz81XpM7QDYFH9t",
  "key37": "2uQLJrE2uFRMrWWswjJUcSHSj4fFWWofA4GHsUDTkpLJGp3GPZkG4XRmV6GNcWsf1UPQCZFr6hW3DKJuqV8K3UbE",
  "key38": "2MRiP7KHBU6bzr9v3S9SxdzeYa4SaU7Jqji8KBVfNpFzscXzHREwm1Qv92ihhKCuoRoQCXG4Rb7e837S6wCBrLQu",
  "key39": "3M5UzQxrRJXgdCbVUHzEyQ5SY1iuybBxtRG8bSZu4qi8LkbpCSSjz22jyyrPYMWQdgM3Nep1jooDYSTHCtCT6uuY",
  "key40": "2aGBpspfuMzSk9fS6xigfdWwWh71DWdfAnkwu33rhQBt6LqBMb6nkjoqG8McCgjed3TXTry3sajHtgYcMRYJybWF",
  "key41": "MYej6TV9zrWFuqNeRCD3z1mbKMpa3aYds84JnpTCaDfJjyzrYxWKVL3JnXuW1Hpqp27PgmMZGTLxqo1TbCWhMgR",
  "key42": "5f6sEqMrL9HwVxVeCdmp5VsZnMWXEY9CkCULb5jsBZbY1RRzHtMWPFxVyDQ2nqkagn54Htwqjfw4GMvqt46yrYy5",
  "key43": "5wMenExuyxdjHeqaVDRzo8tSrXPNtSJemQsAKaBn6MQSQW9H1XyvGZYQyb4kzGE5T7F81g5oAvYjR2DeL9SpkbZp",
  "key44": "5oxNF9eM2NyR3YyMMZYDovft6YTFKp7BpQ4GGZPnnPnWQvdpNREvpPcunKByERsgms1qPoaXi2DDDK8T13X2nESB",
  "key45": "22Hmrx3mAmpM4B3MTXjXq1FmaqdGEACof83Z6dkQLGAz65XpP8ShssdtnbDayBQYr73apNMogbm8UjEKQwRvtUT2",
  "key46": "3K7UAu6m29hb4qKnGzeJyAJg75RcV5wYuzvqL4xXLS1Sy29syUFDRE57MVvLaRTcHaCqNQpXV4oSX3BxowNKYMHv",
  "key47": "5NtiN3C3UxjocN7gQ38rSFYCxeDgkxqZeUr7mwS3NgkUh5RK6vo7LmJiqtx2m6NbL7PsowHaorS1vxLGv4kti8uJ",
  "key48": "2ruHtjtnFwM8doFe9UttvoTK8WxbvQXkSBEjrTEqdjcpGjFqcnLUVwNsgXSUg5ooLZZdF9jv4MqbXPLhK7xXXvC4"
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

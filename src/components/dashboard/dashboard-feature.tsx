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
    "4UgUs24azKzZ4Uf23v3okWhK53yoTsx4wea4evBnGqojNm6iE568NLuCRcNvhjioXKLsvufeWi21M2kPDkD8gktz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f8REbu1BeE7bPPZGCzJgWtcjuK3MZnkKAqdPvim6Xbir8BLgM1gQiYqjYShPkLjWqabbCF4y9PxBWvNNMtqtJtD",
  "key1": "25A7EUn1vdnoNQ6u5ALpyoQazn7yPHfuzVYkMG62n344DinkKjjpBoQPVZzPyPRfU9MLSoeUbGT5XQKP1x9xqg9G",
  "key2": "5RnPdSS3VxB9xTWKpR5qq6Sh8wUe9bqX2FE9wr8hgTYiP88Cr8yf2G8WS2Qoh4Da1p62iV5b3xoZBs22wBXdCUPF",
  "key3": "24EasVRMGiSBRGZGvRetZ91NrzA6qNs73DufXWhTRwgW7zYDDCVH2363ceetmL17khUfMMwtR3t7R2Di4At46AXd",
  "key4": "2pupi5he2Ye9t2uvrGfWKpJePjLnXZ1sqmLkJS2fSL66tjFppaLkd26VhrPMmesGaQ25k4B3KeZAz3Uof1PhLKph",
  "key5": "GVynRZeyLf5Vu1e3QTV7XTAAn98TDXXBTWtDEH75EMj1L4QzssqnvCnPUe7T2JGd933CMDXE1gr8eNncTbxq9M7",
  "key6": "T14r7m6f7WM47zTfmk6Rog7bxRcGGryJbkdE9hcmMw6ihvigYfPB6wGzroWSinwVLSeggddYCxBDirZKeuTvRN3",
  "key7": "3TbmL9V3iE9rXVQvGHgc27WrNq4xAwGJoiv2DkN6MrEkZLFsCUtiVFEn9oWpivM6HGgc96eQJAqmZPG7xmynrgCj",
  "key8": "4Twuc3RS6wr8mMHyoKkiwE3rVDmQD3NP5pz1AkLD7bttcjLkSBSXn9jMLVJjgQWhZSqptNCkhHjbskzBHf9b6ayb",
  "key9": "ByC7DMopKHRfjNtNupc3Lt497L7uravfJhCjNmUwr4xmcePYZ5Va8cbE3YtBs6yomTVbgTRkvmCByP5rDNsLqid",
  "key10": "2kTANgayXUBce7JKhRW3jCSVeNVQS3GW2iq78s9jXY8ndKYr6qVd7syG3YHCS25gm4DyxWERCshQDXSnBtW9uUsM",
  "key11": "35PAqBNKTMgXTZE1THHNwe7RrjCkt3UXSVquxJHbeaAEMygFgUZMKugh1F2VYfHuvVmU1PBC4fVXFgS9ET18wq9q",
  "key12": "2YUxKrMn7Qz9wvwDS1FqSAL7WL9Ar8jEbUHk43b46skV6bLM3sa9pbyJZ2KdqWrQYVsjUjJGXyQ8Rcuphe38iZWp",
  "key13": "87sbYz477hzkFEuhpgUQsb56CxmzZz9ZkPEZDWfVXgSgHeMVTjuwXsh5mf6q32Df5ZEUYWAMmwtMvnfA9mx1auR",
  "key14": "3167PzpxJ64vaLkKE95GqgL5fVXcmp53dgYvvL2eWXba2foAYXL28VBEa12gVsg6PR93D62FEbCSe34id78Umjye",
  "key15": "44LrrUV8apX3HBVo65oP3qqo8dyajoWX8HiNQkyC9yvwcaZiCEGH7G7fdQrSYiVNs1aBifHW384aAnJBtGTDos2j",
  "key16": "3PYJ3bbV3beWdyQwnCDbBWAmuyDxbjWHy4WJ5WcTBZ5b5gr36VXKBNckxBdMS2zqxapHtueGXoqqoUk7JPjFEA9U",
  "key17": "2V1gK5BVDoz7KgztXpYUrxYgRDU2MN77NPmbiJctpm9nWnvFrSjZGqDWZS818Y1kqN2a9mPxJMUFPFq4ytUqaUeA",
  "key18": "3Wxt5JSaXaGTefHGUex4abiVYfeGgRD2ATkQ4LmLJFusi3915KeFoXbAc65BRvGdvVpkg92mZVqj23ZX1wCHK6No",
  "key19": "3MWmiEtRWfSj5XDMSjTrgQCMSvD8X82T9Xc7zF5zityBykyoMdEDfRGeNGHnehJGp1PV7Ca92XbWXfJAzNqX9o5u",
  "key20": "5Tn7A2sjw8cgBTP6ZAz8GSnHnzDs2ZKN4NEyYTiZwCx2CTQstTBxkPzWK78Q7gj3Gw43rAaApkkTZgEPKUPAmj44",
  "key21": "3fiKdF3CDNHDmzW8D8DG2gkiGkR8xYmio5iN82PqbppXpvJP1REzuER2shxgy65P1cpCziXfzRu6sM94hA7saen4",
  "key22": "35wgFzWi7We9UxPhLHPXLz7y7woRX9p9ESMR3GYs4ySXtkcnu4NH33rERtEwvtnXjiuB2B7G1koTjmXWgGQ6ktU1",
  "key23": "TGHW41AEotNQo4QhLXC3RmmkHiQUL8vYrS3THp7x4wEHd9XWhcju3rQALbxqf1RGMX7NLry9wDkQYBMKFsCokA9",
  "key24": "F49VmwAzP6YNC5PqyjGGWr3tbsxqTWrsLvEczeKdfirt5WW9uihRRGAEhFvPGzW7BuvGT6SDBjncscwuH7ttb7v",
  "key25": "5iJUAYkxKyfqoLkPcv7Ykni7Yi2ZnnzGQbTWyrgBK7pzhaJWsj92GFKugP1jemWH4haPenjUdjvHncmZWr5ZsX5A",
  "key26": "4dxUjtH2ps7Li7Lz6e3FhACQTtz8eEHeD6KVdb576coaXR6PTQhLq4vCL2SJ2CDXF4cRpvbN9PgtQj2SNPS51tRK",
  "key27": "2kdXfKjtfviaHPbvGYNJB8sWSCCepxq5Ubha1M36fMFXHLRy3gssd2TM4EoJQ6YUtaZ4LgZxCHypMKSZU9Y8q1Td",
  "key28": "wv5c86LGmd3DHy4iKcYNzUSznFBzkpxxJF1kpDB7qpovsp6TZJjuGGE1WQZEBS2Df21Uf3E3v6N7cWPVuaJLrNh",
  "key29": "2tgrwi58J149zdVX3ou7tREN3g8YezDDAgSSfWrekaEaL3vETpwtShPnzQuDgGLu2Yzri88zdDn23EtXcZRvPSSy",
  "key30": "3DdhxzeCVdLApqATZz6tkDmFVgF2G4TpbXKLrrSx1T4LoBjgTUHN5KWjUPHwnjfWanTdVfaapwtWTDp77QH7fRTB",
  "key31": "4DaVRsyYRDfhsweokJwUB9UT9fz77CWaJdXbM86ihHdeWHC7c19ENaQiEj8eiArDurhj4xxfjKFhyWp8iC6dvwXh",
  "key32": "sxhM6MeHpmmMGxUeXg9c1ChCUaWUgHQK5Q9tk4ER1ASsh93ghZQqMsqVK2xEUgL6SAfwUKjhaaw8kUBH9WpsFE6",
  "key33": "2st6pMGS4T9GuaWj4TQwcvEkTt3DVxqBd7MfW3eDDqiS1bpRTKmg1oUiwqgBa7TiXBh1QRQAwA84vbo63S3AAF1m",
  "key34": "4g7vEfrR2yqSa4JgZLPzxE8uNMCwDFsk4jzccrNxi5SkKVTSJUgMMPcE2J1nSzFobqwBeqcZH6zrYfRsUd1DGsb6",
  "key35": "5bSHzMGn1sUYP74AJDLLD53sSzbi9vGWEpTMynVWGfA8ZSeDPkN1ziaiGfH7oVQ4aZU8mf52dW4pYdz15FBxCVo8",
  "key36": "5evbWyCC58atPdxAQuVcmhqUWK5zZ6V1CtA2384BeCzUj5txxKE64fkMebLPyPxH8DttErEiqcHquUaCdmcZhjsv",
  "key37": "5ygaxT9LhjSJPzFmZR5wtNBbxQ3ryFoVTTkAK9PdndefKUDXEdJf3SqrrDwrRR421vckS5y8dCD3ekTDXyLjjxS1",
  "key38": "3hYDohCPAGRjYcnTsFbAmZMqkVgiA6dYjWEEgXg6hDiuNkbZasUthZ87covpWy1FC8ZGfZJ4mA4LnfieGqEbQcXi",
  "key39": "J9v8akoboYceGJBfXcBgSsPUfP1FExpperButepbzBhvu628GZwoPcBs5UW84BrMrPqxHTfcmerGRAD8EN6Fcf8",
  "key40": "3A2bHHdnviWYaA14WEhiVC88UocH1jKEzuZMZoWeXH9MQKd9bdKsSb1XHrFrAnVRQLSArkn9hb8uzT15vtNk1q2v"
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

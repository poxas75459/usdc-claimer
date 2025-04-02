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
    "63FDipvQoTwp776fpNGx5hqsLjK3hd16FTNzBVuQAqo8HDEi8Be6XpRqxxAnPPoc86uCJHZNgwWEVxx9a9rxuhCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xR2CfzxjU3wtMs5P8S9DsdZsLkZLUVQxr8gxcfmwkR61N2U6nbCq5XiProHnfysSbHvjP32vo73oZaopePktE66",
  "key1": "5QkX55mLeJUfm2CKDwnJVRvjV6nND8o6aa99UDGPFmC3y6YchZPNwYzuen4b3Cg3VjLhVwnr8iXaZobCBJpKqkGH",
  "key2": "2dxfw5ikZB5tFBcRAfLqAAbzxRdoiPTcxykuY39TEjrwuBz6oAA9bEHq3g2vZutA7dLCtR8DA4PJwRHzq9MH4iLe",
  "key3": "63CYUyXDi7xBNmL1ab2E2nkxkpTtpvPj8soYD1diFKXai2LDeTxD2fz63XwTwoDfg9iZRfVw7BZj6NtH83h1Niy4",
  "key4": "5QCN2Tr8xZjPqYZQsaEAjMwbRaovZpv6K9K9q7qMqJrcFHDCTvsfDL1Yw7KwfyD3eRackKGznK7j8V4V3bhk9cZM",
  "key5": "589LJUvKLoasY5XZ64LYXFH5N3k2NWjJHoF3D6Sb1N8riotT2257wCYef8Kb9YuJpdwtvT5ovXqrX4oozymvGX95",
  "key6": "4suhovLPuKXJiSUFStGotdrb8waNe1Ln2rNuEaJ486kNiiBvKLaM24Ch6PGjEGfcncQqN53bSdnVTcLUXZ4nc1hD",
  "key7": "3ncZ9NQ2cvrp82VrA8eEcUV9LjtzjykHdFTEvANcdNPDj29M5xtVVpHmuDtJYbfWgxeo8rbYCenZ7igadGsrEFim",
  "key8": "2zzh81R8yQAkUkc3mjVbvH2ZAtuqvm3ot1WtkJimDfJzGedkpTbyDvcrQ8yUBy46SZtNBbVV5AL2vg4nrd98G1u2",
  "key9": "3CTtmv9mfWYkssWDGa9A4AgzCtR2C4TLHg4og9kJG9tKUntyia36LDVtd3v1GGdQ1idNfBsAzWDRApJPac9N9XKf",
  "key10": "2VAv9NUnpQXhyNu135Ti3SsLhKqDrQLUBAmW4YBaX7YUaUWa2TJ252N3MEfHMRcr3NJgriS3sYkjLQUSuZDq8EFt",
  "key11": "348GQvqb31YTo78C3KM61iRLbQACZaEXd8gJzBXCX4GzxpmstZVp3Kii6sK9CbHKVbbsHcUyPPwEAgkn2ZAaspXN",
  "key12": "37s5YLZxAC7Eb7J7khAedMLxMknRYaJLJJBmfBehyzjuZBeUFLV9znVFk9wxqc6kbSqnAdZcWFZkHXSt9ojPz6PU",
  "key13": "4YYHNqWfxkWW9r5WjDdsAjcu9zvi5EFj2Wroomc8xHe9bT7TPv1o56vL5b7zoaRajeEoVuKBV5z3W7F39TYpcFCu",
  "key14": "2ijj86oWH5oFPXVbLNDVYdY8n2KH8aADe3f6RUK6NpvDbiMbeydBSyN9AH4bEVXDcSQFnPPzpFnXmZtKSDwwjNLf",
  "key15": "5dATgvkAukRizN2mHT6BBV6cUDX5GJMtBbPyX6XwNVxj17X6jk99PxspQXeKMncv9eytGqV8UzbcTwrpShQouiWB",
  "key16": "3LSbnPtmmvT7GkHDv2XbEZfrgvMhjSGwLjPijZwEYQahDNQyw9sCRzHFFiE46nwgbvCUR9vreLroh9ALPSGsUffa",
  "key17": "41wJEp5TcXjXQdzZBQL1UM6A7uzJSWvzrGswxbMLMxhkoLih48wpqEhMyQwTGb8qGJVziyGz2zcP2xK2RC74qXwp",
  "key18": "5opXxo9mzqBdoDHU712nRgW4ZPmWeBPmojeyqT639EQx6DAcGej33H7DokBNJPhEDbeA5wJwRKitd87AnrLDZ2ZG",
  "key19": "561LaU7YhjDmseFTiAbvSL9542TTJL94tGPLsGoQVmcNpMFcNC1UBGzDvNmBkBsYsWRVw4YDpA92mcZy2JJC9Rsv",
  "key20": "65KoxgqYGAuh6ZWCfCNxBbdG2QnefEwkMKAE5az8GUx6YdWZAxEb1vmfzw3JauN2jnBeT1GbrJm5Sw8iCLSy1aHR",
  "key21": "UVQfwAHqdKfsHs3bbBuEV9Y1u4nW1Zg2QhBvvAPUqCKQFhu8Z22Az76MEdP89FyAyTAgbuPno5UT11MHNpRyVwP",
  "key22": "3Tstr4kwievZNaCJiihGwXfevePHQVXQtKs2PiujCeyMksozLiX1LewCgXRXqoshXD92mT8SKf7rWRi9NHnX7Nmm",
  "key23": "3kg1haTFKk13cWZxwK5vC6UmniSGFjJdzVPgfAPv2YbLd5qFtn8brKz8ceoRWi2pKJP694MSaS62bFWtQ7x8Fuis",
  "key24": "Wgtx4vrZeQVu1ySj2Yfq8rbUiikFxTagZx4mvCYQc2MxtEWvkdhYxgJq1q5JiKJZSz87m2TeLgEv6UqA7rQezk9",
  "key25": "34vb9JuAsMK2VXhmimJ1w8uvvxR4Ye5mEPtBgCpjkB46FoCU6gUwr3dPwcpQnmoUp3rU71VAnUdVSWha1pMzyHHG",
  "key26": "2fkrb6v6fpCtFQB8ptenixGub1E1mXaZM3YqwzoStaixVp2ThReG3gkWLoH6BtmCuw6YEWro3CKvftpLQvBGHrNE",
  "key27": "2NR77dBs9Bpzpr1qLNx7156TP4ueGX96yqwNdDVicEkUbmDBpqm2R8zSbHfPMhgpMj1pkNLNTZxyvVm5cfh6VtUJ",
  "key28": "MhVFv4N23gzGGL6m84SsJT8sx6yazjjRDWpJNj6QYSztNLU7EHjzBDTXptHGaRCjmkCjJqBRLA2BiuSHXYHUMNV",
  "key29": "5BGk9Hf9B41c2QWk5AmPuqZtTCAbhwuW8fQX27bW63j8j6LtuYJ5CQaqa49XmRcWJEPtFSFom9tjaEJD5tHy6XJJ",
  "key30": "4dyX5CWiHPiHG6w1ARC2mGJnoBupoLMqsb8xZMypMPXqtptjQFQ8WVHCic4Qtx7Scim86wSBEARVySXFi29HXCDy",
  "key31": "57ujdqkxGy7EcrJqhpJzrYpvMQW89Ex7DV3RWYVcG7Sq9zapizmn9NttHnE8WVFKd8gGwL61i74tMwNA3jh6iadc",
  "key32": "619BZGtXB6dTv9DApL8xbSRUbG8zeMXTSDxGGjqkQksMchkFEQCNmxrZHAALSioZF3SXWNKwKqsQ7gkkUqVHnDtK",
  "key33": "64p4D85xt8en73dL5mkGNY3BV7ZZPC7fsvczZDMqcWBnz1hNrSdjtZcREUJEhCn7PMw87qHBR9ANPQVMKY9iwgin",
  "key34": "26mUfVcFLiq2BnudYyAJjWJaTSM524DKZZhatkHF6rBHrSWYKC1sGmHdwsF1MFaMfcbK8y2DxmAz1CM1n5A3y7EC",
  "key35": "3kmGuy4Rz4MRp6PqSPofzQ5mghYndbD8MM1fuGaiPCNkutCU1ahrzGX5Zm7zoEs5Shm2HeCDUiGFRDtQPM2ENFxL",
  "key36": "631pwd6UWrZajFAzx2HHkK7MEHRXt3zcippuoVdqdyv42rtKJrVFPkbBb9cdqsmKZ1TmLWwKLi11G91fj7kPj2Jx",
  "key37": "4W5Mxx6PGhuzGVdmZ9gGJXx5SRCcAPz6kVYhGsVGg4k8LrLsGDcLG3nfBkfzSVVnovp34eGuJTpyLqh61CAzH6qx",
  "key38": "563wN8LMWbeZBaVTMLQiXAfnjKDknz3KHxZsKG6sSJcdaEdJcuLK2szW5Xb281ZHETwsvCpL5iTo3A9AgfHAA9Tc",
  "key39": "3jdhKso1vjro1VJX5JXkJvRThWq71WvMXDmaW8N95fGuLdhLarLaHqeJSNzH5wPDwZ96WznWMMv5iQgS32U1xFH2",
  "key40": "3JJi1Wc6hzFJD49FQDDWb1uq31JaToLNBfzmoqDWe7vkdHnqqgkZfJbUBVMazWRngc35xwZcqVCy8bFA1fWLPCNq",
  "key41": "9c5Ut6iXyNa6o4dm49LEo5aNhLvjEgNbiChazXX5nnYiAHFNXsTdMYc1HNuU7abneoVtfQhXBTWzFv4RPKVSknE",
  "key42": "5fhbBW9s6F21UTdgaZcWivJAYhoeAc8THAjvMKJx5JhnXF3h1EddFeCu9UY33L7ECYomsUg5mzrfJF2KQUUpXLKi",
  "key43": "4LskKbyqHCfMEaVAhbRsLEUfvbHue5NsQxsgRULCQ5rr9NZYHGveL4xueqcwC7jhEwPJz79ynTkwuH2DE9r9A5Du",
  "key44": "596qbb97qrhGU5bCt9GVDM4b9VGCWdwHmCQygQiw214oNwosQqx1F4y2UjtQsskLZMxLf8uCL6W96zWDjpeAurc6",
  "key45": "2gnSswgT5oao49mTUfvUCpMDsGKRZdQpjHHR3x7sjKPr2yDSwXaEEnQK3eURQTfDw64sUjYNLe1SrDbbke7RGhTf",
  "key46": "4NCRFPtFBSMZ8U5jZThYc8U2ARpyai88oRG5ZQXffTwmVUkgtpCJeoTvmNedUjaf7EB7Z7VSJjcnySS3zYypjt1s"
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

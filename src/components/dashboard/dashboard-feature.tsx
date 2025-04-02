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
    "39E9Tb2oajAp6sSMVEcCtxYDNz5Lt4N6nYMTvvnrhTmQyoPuCfNha7PDn6pD2Uw3bMnVXM1vdMjjX6rB8LcjYaJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hCkBQSEuXL6ixsB7htAJjerV4Hvh9MNTgPwn5FjNSvhwPcgcZasCEvFYBq669CbGQxGYZRUb8o1beSxhshEfZka",
  "key1": "3HshnduF93jtjFqEG1uqdcASksdWaj4NxuAdUgvcqA6kfj5roAN5mDyHeZsw4MrJm2rDsvMUkvTg3jKC3iW9QtLS",
  "key2": "4EsLKsZCoaRcRm9Xmwr3mLjdtvSUJTzEM4RgA3RFoks9ST68NBb959WhfDkBBsYMmkM8tP291mY67SinFFMRpivp",
  "key3": "VMLpTEAsJnLCn6nNPYs3dK3WEGXGpnrx2eniPWXd5n1M3fXfKUcXskzoPZ9GwXAxRmdn2WFXyzV4ccAaX2a756c",
  "key4": "5Sz6BPJsKeTU9gWJvNUrMFcJ8QucE7wV811tMjPmaCdcB69Pu4MHPf4WRwXnML5mFwJu4ZiSnqSCdonb9nKNx8u7",
  "key5": "3uZ22eYwUwukbWWPmN99R4QHaaPkaifCuFFcdUY3K91gJ9soj9wrXdAwH6ACW2iUqyonG96zpyRKXqZpohWyZdst",
  "key6": "57H5GWg5tWecF965ETG7htuSht9YXHZm48yWfdtT5XPNoztTVCuyph8bt6oiHW3Qzt8KHFq9JG9acxv5TYQTp4Aq",
  "key7": "4G1KjpCS9s299Za6EcA38aigc4D2iidoq4SXCeTUGTaTxFCdPCcp62J6f3SvGkxUwXtAg8iczjVaqw1kYrCvjSn6",
  "key8": "giV82qooUmhDLP4C9Nf78EDgJ17ibNLyv5dnkM5Chkwjej8Mx6i6pDdyjdn2aGDn8CrJJDT9DUhotu2Y9xoT5gm",
  "key9": "3E2gJFwJdLwyFFMr6NuRg1th58R5VMi7J9fv6d5YsKKxtC7RVi1kGQokLEENEZ35jmg2xpY8CxJLY5kmDGbSAY2h",
  "key10": "2kW9xwYCa9K791my8BM6AAVqZXCEy1VMLqewnKLiRFzz5iawPFzYh9HrzjeFFCdDqUkCC3t69jYVnH25XGtRSwYT",
  "key11": "45dcxhzrzWK6fQMbkvPKk4jE1kkhyXJPTkbV9HNafScFAYcDPCnQctkJmiKEkfvBGFkssCFCoXR4u25GN8XfckCu",
  "key12": "HHL8r8QpXpoRUptRbKhV48QKgpCvoEPSiy2egQZ85vdMtRV5gppvXyz6DY9hpcbJWFKRSFKbA1dR1Bu6E4px6qw",
  "key13": "53QJrvBCoy1XFxzJPxYNBcsVrwZTZxboTPH6iewR1b9T4ejyRdrQinax89mRSHXQJ8JExiT4bAHe7pVvqgrF23ym",
  "key14": "4szb34RbPBtLhbDXH4i5vhNLuAHAnRN7DWdDQzADjqJ41xMY8ggV3bGwCREfopRiPUmGiqcvDyZhoR1uCktFHzwH",
  "key15": "5hMRUbiuogRcbpgsn8YY3zrFwsGjafdFeHaayv4N6RWmfwQfi7e2RtwJkkMzpn6vSPfVdrV4jj9y8aoiQ1ScF7o5",
  "key16": "2uUeFB4JxHGCy4KNmjwnu4Q6LTS7yFq1Wzg8aXLgWbk6673uMMvYr9VocPZPQBvWS3u4SpBai14XQKXCuiTy5bkQ",
  "key17": "3o23nuhB8pfJgea3cuTAGuwx95KsBTgfmX1VNs8He4cTGG5oiy4fhuET3QVwT6p7Y8d75ZggRqADyzsFbEXsd9R2",
  "key18": "Pbz4qBM9MXzNEgkpdKhRH2oAh2GvJYPftsuejVffjV4TCUpLCNZEPib9cK5bWJd65ATtQRvADu1792wNYKUFJka",
  "key19": "4npfHJKJkMQXzxjjxVVk1pBdybPg3frfzV4TqUbgycz4vK6ynCr8BNcsXDprKob9REqLDEcK74reKzHn2u32maoh",
  "key20": "47nH2rk46DHacQxnKy8V87qS7to34SL8BUAt9KSumN3LuEddLhbgT4cW2oNPQQ5U7UY83XQLWAwin9eyu6uu9qB8",
  "key21": "2MTkH31nm9JLun85jFW9pRk1wZVuDvLegAngaPb92gFji63v7FrMjv72kz84zS1idA5kghor5pjqwv4Rh5Kkr4yE",
  "key22": "2F1Mny8MRvHidfJ3G3TxxueD63KFKMG6N89qFSWJRXyMUwBr1LRh89oSBkdUJrrFS5bboptGUVchkkRRkYUUcWCz",
  "key23": "2Eh9Wg8bsJ4ZQUwCvB8pHY2yMqiTJe61oG2ie25VL5yiPZDGBhPFr4rDSMrWyZXTA2koWeAmdtQB7UCo7o4Pw9r4",
  "key24": "4gz8gdN7Eed63cGonDssZibE7KqS4eDBeS4dEbqv8NXoP4WoedRjCd1NFaxYrF3ELKU7eAg12X2UDV1nngbeA5ET",
  "key25": "656PTMs9Hvy6tfyuPeWjGeMHMsRktFoKFLrcJGjSdUqBjGcbwSB9ujJBGD3q9TG5wK5YArrkroqk9y4Wmceh9WGg",
  "key26": "5Mz12sWnKTfQYP4ucgpNy7gzkBWTb9uvmkPvbaQbjjWQzhPKwj15fEwgArJnKzhvv6dtwNupTtRbY99Jb7vrXvKx",
  "key27": "2dnKZzK74rytJnpcVQWxorahAcaihJXCcLmYu8i4KeHsLpMui8XGfhFkHvbnQECZVi3CuY3i7gRRoLaJqji42xe8",
  "key28": "33Kj9JAhf3gj6Cv4cuNveFkE16JXek5Zs3n4RmRKaAQVLK2vxyzLjJwwmEMGfjphgprLMHhZXyV8LwnFwHP3Pek1",
  "key29": "C9tNaWY4ioWBwKcBFS3hg32VjWT6sfdbLd1D5zdsZDRsv6gM3wKrHz51KoCeKKnGxgTG2D9j3Wja9KXMSgHBjrL",
  "key30": "2t72196Dq9pUfnhQtfQXEvAJW7imHS6ohhxYRaQVaTRmM9Vqxf8v14oc8eFLkL8n74ccCgXnfptXqatkEwjwf9Zk",
  "key31": "uFiKNz4EAqHbxfhux5izeb51WMMzHCkQhh8qTwvPmFLH1MisPs3hnjxt75JTUfN4mr98s7qNkknhftKEtFqLdmx",
  "key32": "65Ej8DFtdXX8t8id2aHhdiVo2zbGGanzgiR6MbLjQ1uJS2NVbRaqdJqhXwrrZ3E5u9Y9XrwvH29dL8vbeHg4KoAB",
  "key33": "4ibAYUv3Udju6qMq22CSj4F9ndzuT8SBPu2BVS4Mr9XQL1hyVfgmKR65rDZtv5BatC6xKrGErYS214b8rNaiKx4n",
  "key34": "2t6VAGzjRgkrCtRC8gXGmawE9CnCRduLUopQ99KfRFV8e1iLqV1cgSVG27fJjD2xRLznAnYY23Ngf5PCnyBmJwtz",
  "key35": "z1EeTsm9LN9ipfxNmiaw5fVkDY6vXpzEa5PaPW9niFHLk4cgwDrqH2Hre1xebct1aMJtXG7JvbhRyLxz57nSR7g",
  "key36": "3b5nqYyUGoHRURHXdTEkhTpaigrkEbjVVoQs3zsonAFmg8LGqACCJi4PAs4mft6q3SzztJNdqy5ZxaAwfMU25NVE",
  "key37": "kBri9pEjFLtBwYAbrfdf2yPMsvxagAap7cwgnnnmes7RUwyHqhKsdXicwnE5NApY4VrSULdJbEooXbM4wD1HP77",
  "key38": "5gxrnEJ3Kr6dYHANEw47qq6YbLeZzJQx2KEm7bPweR2cgg1n4MGxDaCuewW5Cm2RvidTmkMpmyDPEDL2eNPceKvf",
  "key39": "3oVV4bmuvnnmX7VF8gjpnct8FcgonABGeqSdNaU4ybBKTsmdYaaJLinECAYSkheiDbGUGkKbKW5Dy9av4F7ZLftn",
  "key40": "4VMiyv9rtp47wbcLfdfv5UoSp2Km2qLxxeWKR19smfrMCTk9gVjmY41vzAs3TQgETB4N8Ae7RQaYUNfpTJHjLX86",
  "key41": "5PJzrqudVHVbNbZW4bnJLgiZiTBVWtxSfcWMh3u2m8SWcERh2oSURHwpCnSNmDwwMDns143dzgndb6NgydUBJiWp",
  "key42": "GaupwkGn23ecrM92Uo5miCeU6fjG4NfZYHZNyrEv7kraSuDXJpHxZQVxY8vU3wYSFe2nZ9asio9HA4S1y1zh3U1",
  "key43": "4qtRmoHd6pRky34VJaYr7MiCDS2AWpmzvqcCeXoEFTXnaopCmfoEwfJ1mN8N6VN9AFyZkJsYMKS9EaD1zFZQDLqv",
  "key44": "2FirDQTsxE6pN7Z2C5ryaC7RnXr4WqVW6DPayCSzLm5TBfRkGP4PhA6MqDMA6mLa5zLCeV1YiRBThVaTovr2rKRH",
  "key45": "3GAwuqGGi1uSVKXmVxVuVCYPgBZP5jFsC1vq7CpZRxZzQvui5K7g1mFuYUY49f3pox6B86HZ833GyFSBTNJ5hpuJ",
  "key46": "36cf5y8jKMUUuPfZJwvkWaBC5i1Lsq3rHBUbB2gdF9wexwpSqY31bJHLzHe51PBEve6NFiVHPcBTMQaX9zjQ8HZM"
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

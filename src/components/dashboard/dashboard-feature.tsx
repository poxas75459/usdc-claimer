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
    "2fMwUSf8ysud36XcYytuaf8xKGjmdKem3Wgvvr9p6VaGjdb28Ax8cbcL5ct4SHDTkoFBWv7BNXh4vwfWWou8fTdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37pJchQ8hG5o3MnG5T3hT6Zoh6yqajLcLgZhEXgGazZqRAXKDaHkb6nLSbTkUKfF716Cpamfi5KsCDkMJGwQtvjU",
  "key1": "dHLxkAZcE8GoMCzWNZ1wqEpPmbfqiEVriU8waMfyjaiScK6mbjRCsv1jhdD45eZmY7JEMtM74hSCNymLYR6TiD9",
  "key2": "4ugszBwW5iGdxp1hAD1475hzfmMQhAY6PbUn6bcxjLwctgJy3h9QXDmZcMzYREW22ofX8aJzJDhB5iEHEp1Wbu9o",
  "key3": "3pjUqetSuwjqWLQtRZZZrFj5K2PnhWcpdQXVwYGFNdETwpyXVgL2stUB55GAAzoJpBrVEyCt3csPsjNk3bkmR8Ww",
  "key4": "4Ef7Jnk34cQQ2bc5pTS1hbq3vf6mFMDAromVakMsv817tVbAHbHHcEW4pHDz6PkvrSVK1jZD2STEoRrGb7mGxSsX",
  "key5": "2NaM88VYyf3DoRfCmdR2Nmytq4LrUU4LNuNQ6tm2tfrDa5cKmxohgtM6vsuytQ3TGx1N9GwB2Uzm4hvxQDca4bhP",
  "key6": "4m8sXrToRAP3WBdgEQBamerGFu2rbuY6Jpyun1FkFyxTunzMYEPsVW9tcmq5zELRGS7yFb6KgfTLbThubfoKpbVh",
  "key7": "B2mbkDNfrpNhUmESQFqHKr462HzeLNL87swYeo5Wiy9PiDfiypgcudECBxgQTATKvqYGaBQTqdyxUy5bLkvpB6K",
  "key8": "QQL9C3zEtkBcbYPanw6bSXxEoN5hNvbvfzFBB8tj9e618M3XqwBxudzHJvU6i65wxy1ttxSsVjWJTbDH4ACsPf4",
  "key9": "eJKtUmoRdQaERPjH2NrBug8FcM6DyVMYjRxLYCxArLjVbGUKLV2GnUhCSbKts3iWu11BuN5eNBQuh37DjXYbfFi",
  "key10": "2ATqWTQfRA79znCSrUxER5PK28aan9RB3zfMuLajKMhnhH852S8f6WFqebhwSooF6bunnXLAXyXLbWgMHjTyHTab",
  "key11": "38bRdTdkeUey8ogLWXbsLJuReAVknnoxDsAwaoHq8Agd3vEsob5zhqnT81Q5LGT7JZnogtd3F55VsqdKdFbEVcHY",
  "key12": "3X9mg8LBFwD65jhVRvAWfTSNLCRbQzgT8wLVT9YZzdqasu7h1DZokQttHU5p298kyzPpHDn27HEkVYBqUD8cxozH",
  "key13": "3Q9Kqphr3YxTneMV3p5QKpX4otvpNP8oUCoisRGyG4byFKwEhxJ5bN4cjbB1quHnzZWdp1en778AfzzN5mdakJDj",
  "key14": "jJcaKLcyLB7Y1wyMfmumFs5zjdEiBj1QMUU1syyrbxPpY9EJZQFCdojtro7uM4qCcEMZ6b53ZYcF1Fsc64SYVYT",
  "key15": "4FpVuVuwPS4UqhAME9g7oBPYAjfPq9Lkmft2qcgNTHebRWsuc9ZUfsWWLXk8aXXURwGA2GanxNS5xVKx1w4CLtiu",
  "key16": "3G5bTeGHSuw4B3kHWxe9borA29RGUnhBPi4ANFLaTrwSYsUqpfF7AAdHvwGD4x4ibFZ4CtqKapEBXXsi2mFpEVr8",
  "key17": "2VVhvQt3PS4Lwchy4xmkFenj4nTcY7kpnaNSBdFXGKtnwSqTGsYqLPRhdqUQGpZSxabwqCvQYTcvTcPPBWhgX8J3",
  "key18": "c1HcB2f9w4Q41eecM4YDBYUEYyBsSULY6AFpHmwudsDvuu6bzxjZshFGtLP7xe7Mtm8zHNGfSzzuNezg9B36LwR",
  "key19": "2Xj6WFsnLG947nQxFbiDPiQ3SneXAXP9SWA7HsPZkFnVF4K38rssuLJuTJAtcCgjjTSnzgVTnFrbTPKnimMDDcQ9",
  "key20": "4cyJzvSv2eaGKdfs6ee7U1YbfSSfiTHmFQeAzArqUgQSmJF7fdoHAYxYuUm1yxAPv887kY339n4nt1ApaW7KwwvT",
  "key21": "5LWDedYzGd1zJREkzSumLLNSiBshVrXJer8j5CwGckqcfGoEvwXLugmDxA7cMGDL136b7GpZMrvpxB5LJqHqqv5F",
  "key22": "nYz1Fp39QiSdWNsuYF9bfusrXdnp9fCF5JsYEu4HVDZzGniSvvSbD2cQoJ17FPxTx6qxEt6aPA2RpcbVZR9FhUv",
  "key23": "55UKaoKzvLFsfLGQPs8Sj4i6SraMf4UAxbuEkMdAJA3DccTECWA5TkSuimoEMEK4KG2roVMM7eaGyzBPiJTQ2Gkb",
  "key24": "2QFDST2f6SYXpeMfAe7PwSsvGMDDwcK7pbiKe3BhGXwUtA7MvisehvgqD3V3DzRFEgPL9tbzmdrvDamHbQZv2NTf",
  "key25": "4JvR4zjVHpWcg5UeuBBHXCqvfRHZ2V8fp5AQ9WHpKfD3z4t4YEBfTGhgqeb4J8zkoyGFsHuyof2uKsCEDHjA2D3U",
  "key26": "4g6DGv1sg9Pjqvbsip8x9gSvQaJki3MabMubbhjkGCCskSttywm4iRJTWt645eFppGjNxd5NGhaKbwNW7cXZDVLV",
  "key27": "5cpzsNvoGgvZtguVXqQVJruzaHTRKZofGfWMR8zi3kdBGV7t7Adu9fzmJNK3Ubv8FeaLzVtHGJxXzWsmfmBR51oc",
  "key28": "4UfFoRHAdazDcM2RgAWNdfyxAV4WmkjrwuhWfcPqMMrvzD8KedjNL6bLja2y3fLyevDtavGxgDAfjDdVcJ5zhCyB",
  "key29": "4jhUe6Sb5PoEGf1SNJiquPG8vbtHoT5D2ekkqp9wTfwG25FMTiigX6XhQuvrtypewJBELH8vEDFZpGnrfxVZ3ApB",
  "key30": "5b8pKtEvV5mk4WE5W3uv8Bg2rJzx6UUpdeTMetP28QzsZCriVT5baCCqULdEpPbGcbqmKufFtKBCdC1Z8Yczjpwz",
  "key31": "d2NY336uhAAnfciYvLo8s9XRbDAwWZNovLJt4bgmP7wRC7gsQ1wVzqPqLaQakzjADxk9YR3GPDW8fdiTMy96rtj",
  "key32": "3phosgVTuArn7EKr4gYqEbkdHSrqoMa8iNoMDnWzeVqa7z8uycLkhQLxw11LT9nFPmEgH9a2YWVFQFvcUAyBKJ24",
  "key33": "5TddZa6MyxfgXSBrB5SR2ZWprEJEEFPso8DTShjTW65TGDsoyD1vDfuwAmwUizSqNS9s7BEj2R4Hrb4oZYMBFCNW",
  "key34": "nJea1NvJsQyY9r9b1QbioiR4wPYEe3dBq6zewLP2aPWVTMj6pBoKxCMfFtejx5Rf9LyVZV26wjGurCdoeYrzoMF",
  "key35": "5vcRfSLhDmMCSRw2pAimN4Uir1HwFTdFacJueR6Ce8CCRqkGnE4kjBLdQPbJyGbQS8KZBh61MChvLtKBiHJ9ZUXo",
  "key36": "5KYKmcwELe6FyhR8AMXTPz2BUf3YW7P66dC4iBzABqsE86mfjT3hwe3XSErnYEwt1mXmrgxxqSjkA1mNYWkpPrku",
  "key37": "5EkL6iwLt1T2nx4dK6Nggc62BJRwYT4sCHayF5AwEWzpF8j7xetz8nqh887ghc5FMVae3rsqZhPt7AnyrPj7bbbL",
  "key38": "2fJ9vxLvKYVmyp2PCGiYKoXg4QFL65UH7sALUJ2AU4i1WyacyxuHxLAunZ2FRfw6i9VUbQBCecd94rYQhHFcrw2C",
  "key39": "5RcBFLE1LgmsMFNQqH5Ss6J11BYpS9tkrvn3CpvJuewDdQgT4LMVub4sYZMPePaPC9L5Gwvbo9VbQ2TJwxZjeEho",
  "key40": "beWTCYpH7zhk29AAqmgZmzZwMZbfHPi34dSKL6RiQYk7viHi2c1Cek3JbRj8aAQuHE3FHw8PrwLN7VnsFC89MFm",
  "key41": "UJm9NcyMuFxsvmjGoLWaSfv3N4shPezY8PEJwaGtwKFgisJFm65GLdmKrVymFDBL8qfhStDWBcxq7YujfCFLJyV",
  "key42": "3SqPktAmgWst5MgpxTYZeUWquP9MZvZzLSkciGKxA87nyFCT49hKhJiH9P2HHb2xnKGqxkeBa5pGYLB5rNYswVLh"
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

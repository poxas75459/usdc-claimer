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
    "3dFAwd3haoSyePvQF4vYyCvwPP8QQ4Qk5B9PjCGjfGwF1RZEHARe4G9zz4akHJFEmCbZh81pycTbjYk9TTpL1P2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fNFYQVhYkktXrxGYwb4CWxKo32j6z4xDA7YHFPD3Vts6KCp4JQPpbJAzdyqcVEk1dfMjzt5b9JF53LWBjVbRx4",
  "key1": "JeEwpyTGnGz3gBF2Vxn8ABAtoDEsgviRnF7FQwZSQjEbxXzWQuMhHS99Zp4cmVG3FbEPgwYaCeS34HSK41baDAu",
  "key2": "55TWrCJEN1GFwWhVnU6qBwccSwuenz7UYSxgKdw1EoPxhXK3WMfNR95Dfett3wyo2XGKc1Lxtb6sMo2CWme2dvsh",
  "key3": "5JrBLTDw9hX5mTQCigHXq3rBLSBr2wDEGBuJKodZ4neUoNhmuBfMMdbktZGtUCh4yc84ozx8EsVxX6wWDjQgqF2i",
  "key4": "4Piiha6Cs1hENipNuSEu4Cpq2xqrRNvZLMHpfWUnc5vRh2VDHNJ6UKBYMPJhcASaYukQaHsobi9qiE41zMPz4FGL",
  "key5": "3qUmf4UPJ418rpEDNV31MBDAiNaTaZxgVdPtczhuUKiTRbHQUW5AtsrxWiGb23XrPsodRBBnbcXA9KU8GFhT5Jvd",
  "key6": "3hRAtNZLX9P6kexUAzqVrTHDeUG5MsELqDhPaHMtQXbmMzD3LtMmYGq3otBpgMLMMgY7t1P2wiaXmEgyf4FWRuRL",
  "key7": "4grV1Sw3C7w12VgSrpiErPyareRFpz8hqpWUD9YR4oiKs6RH9XmyMJ12YDAKSA2EJXhBZWRKxQCTcEguF9Vjg64j",
  "key8": "5vn5sYpsM3z6xYP4nyoJXyq9x44k9LdvEw7rooJopVoKBTrhLuftLRtVi2Cpzmq6HX3A3vEraLwbAqHrKr9HajHS",
  "key9": "4QddEbczkt2t6KwnZoVBxaKpPPWWv2zAzgbhREL8yYzksYpaRArUDirXTZjRSzefNw7Hij5nvF5GerNBSNq228tZ",
  "key10": "5t38Wxg8W4hjtfM6w2ny1QKjSn3fKLm85z7y6Rn2NmKnZBWPSKeNPNzJnsWFn6AK8mBdXLdEKH96iWcoUQfbe5a8",
  "key11": "2CwqnwSAxq71NuX36hubHn8xsjeo7VBgScgf39RFpjM3pkRstmaJrVAUbVvULHjPzP9UaKfjUAiLSUBJvVLmBo6q",
  "key12": "3p2B8VpzKEHFAr3hNsENor8DUVDsJaA6foox1hpi71hecCet9gx9smVbwQ4NXbwqJnBz77RikTg9Uck7zReYiTSm",
  "key13": "4CYEhYsnRLUGjGyDYtWUL6VvfovL9vwffcLGoPdLiNBGxXaRmTn4bnJTk4MTrTYdXpV4UyWNTJVK3ndypRE4kkEr",
  "key14": "bzPZTLNYrRfxNGUAHMoxNWXdv78aFDLuzJ1zr3XngFkuzCEkMS3BFhgkyhKyMXvgtj17DWpepghtcFA519DXH3g",
  "key15": "3EbFfafcF5tgYrBjRnf5CMvwA6X4uShNwt1fTZ9PFtw1fPm6UP3zWroDGWdF435aZ4RZKjihBVS9D3ZVXCzK3Has",
  "key16": "4WGKqaQoU1xG8wgRfqgFAmN8DixTatDTHvF95amk5dPndMWEWKehWkaVvjNGJUFzfRD6S4sJ9XZ8rZ7FbAqYWdR5",
  "key17": "XLfVXXVU2vza8sPmNtpYQf4uyDYywsdGjDhVRfvmy2emCbavSc2sXRSFHD9CMkreevy3d3pAEwttbLKFqMu76mi",
  "key18": "62KwkwfiHE7WUPLmRXuSkQ6ASAUWfp711fTVJKD75LwMcR9ScQgGzou9t7MvLkjCeWvd2iaghdCSvBekNgtueUQM",
  "key19": "csARhKRXUtnUFEyY9GvjA26kCzES9Ju9Zk8ytBA1Gtm5yHpHCywRZ7mWGCx5XTbadGPGYCgFUitUD3CqSe5uPNJ",
  "key20": "46rsCca7CX4j2HXtkrxqBSsmRYiBwjXA3ZST3pGyTVNmr9RbAEoKqqfkgJZo9VGfXWheTkvGevVJK8BJVxTwgnC",
  "key21": "3XK9VQRPnxMULFue7HyqbDCfxWqcJd4QPDH6wvs9CVE4UfDX97WKAnQQXdEm1uWg3BQFHdT618bkCpR9kPpNxPRr",
  "key22": "5c56WDtWRQoX77PZ17ngNYQrF2SAKRMGNo6kZg72jfLc4EyuivVbNezDcJ7jGNRZeqMMDp3XkbPj8YbyrqH7fjhB",
  "key23": "3gXvmWxi99wQW5ck8sDptNAvPpHfH41S6wcgdqJdSju441fwPNxK713zUTnjSt9SAJ3Et77rNa6BTi4YXSoPiM1T",
  "key24": "knrpLiFP8Qa6G9X5ehjakUACxBo95PDvKNybJTLPwUhFLgdGvvV3YjtyamoFhLk57LCNw8r6SzRVFKhAh3215nS",
  "key25": "5DNduwt7mBzVWBTvKEcDXR1uXW2WCBU5nnL6xtpcHq91cAoRJc1Uu8Xku8TSiZqQzULbkQxtBsaYWie2cVsW57Hk",
  "key26": "51zdHfdyQ2KsMhyxLv4RyFB8GQqXvRogjKEwgDiQVGECE3UDjExzKEGb19FCh8DHZYxeso9VEhSQ1Bth8MyMsWf3",
  "key27": "2F8KziiU9XRK6eRNndqYFixPF8WJDb9fJABEtbaZjy6nkufGqpKy9K3ECiKPBbkCJKt7s4sLWULMDnj1ULsUsp6J",
  "key28": "5kWQUUWnempu9tdCoWFxFzHccAVjKTioPQVz3N9d51QCLz3N1pm2pBghQtTDuBWCm5kMAcnxzJrwLVKvbqFQ5Gxi",
  "key29": "49fDUAkmxD3YMkxH8E4p337kXevhPxLskq5StCCK9TnYmphxi41P5vHkFuG4R8gUsXQDFKi5WnNY2tY6BLFcsxGv",
  "key30": "549YV58SdQhtKV7QwPhjHVxRcVs33Pozajmd2uxuoAJHiDRKUVmmQ195i7VZZW1mWjwV4Un6XnEksdqJuB246ACk",
  "key31": "2Fou8rms7t3vZuq8uroTS1GrPQgJz2tWdMAjoQ3V3X1ec7tvdzpzKUV1y6CPPijsXP1sG7YtFTzkjGcAF16CJT51",
  "key32": "4Eh3658y87pAs2j71Jj7mq3e9SzzuwQ9WM9h8382bXb5a9xTF7haFGArwMrarcju7LV28iitTePvurbri4P53nBF",
  "key33": "2d58H8NHiSMorKF166KoQTcMJVZWs27N4ci5RJr6Yse3VpLfqEDpkoBm7N5m436Y45Hb9SPjab3Yiqp7UiRTULT1",
  "key34": "zWj7YDxmbxzDbYcKyVH2ttPXXSLnymdFpzMTNW1pzbSzMdkC6ERcJvuoEvgHvWEPjCjcQzqvQwagW84j1m43Kae",
  "key35": "DTF9z8J1kSWQTbgbsmhkeAHSM6VSNVLDZcXSCs6Zx9hDtutpWQNQbabtbbkTqHdu68PPWCjv7VFEQmEKtRCyrVX",
  "key36": "3NTrY4i4C98cDeTHu728n3qYsE2RzhMCTD6R8cfRzH3RKoChyMNKJSXH3wWPKaSsuoupPmKKiMtVUaCieJuTVJnd",
  "key37": "348KqSZ9DNCfo7WdAGiwfnjArZcAiJn4Ff3qstBkenYMQAgNfPKBCrWMZgE2u9bEBSJfEc3SfUAPkPSCdCmPRDGV",
  "key38": "2HymydwG49YDNNkkp33VWuBGLeSx4fdR48DFTuqhMEdFifJVg6KoAfEY2avzKaByZ795khVueCb6jpYqAvJjFAc",
  "key39": "33GkoYud7JseBcS7eUUdymJqKtJz3PTbFFApdx8kTxgnvniRybXXKpcLAFW5AvFcqvQ65WY5mtvuMypjomHpYRR8",
  "key40": "3BZ4wqm1qLFbKqTBNKU33muu1F4Dr3AmMVpU2QYeiPzP3d3NU6ef4U6AWaXSdCQDeKE7eC5Ld3SaANdeJ63N3Ret",
  "key41": "4rnuyfg1ZScinAeV4wdvTHUe3FWV59wknXFPutzq5XcHrAbDS8ZWeuQd46NVhTnWZQeWu4NF9Zkf5ssMAX74E1ch",
  "key42": "3whn7RXNRgfFsd3Vqc2gYYXm7LMUXguderZNGKh3o1BtTiBqN2Uar4F9vhApqtxqytHqTNoVc4ebs83jshmR7F74",
  "key43": "2sppYw6HKMncgHJEoa3CmDW6XDB9SVWXNKKJX681uHK7asn6kSdTKc3SHEDrMpLaoRWu1V1325Cf5AciMdbjANRv",
  "key44": "NyNdJRKajGsfxo2DVVTFBAGVJp5rbEiRrdsEK4GdA2T5wibiJReGj71tyfW84k1xs9cUgpxD51q9Ws4zY3rn9h6",
  "key45": "2CguKxtMB7S6xvkRY8N2YfWZa22Yq8sNCHLWUG272P1CSSRWvMrAEKpuzqDxGvSqF2tqXyME6VJ4b1UtyWR59qdq",
  "key46": "2oh8Rc2BmtcpT8FomdpVN22paq9mFStRvy6XL8SnD8t7YabqLdCQWgsh2Wv27BZz3x8PJz4QRBEDJ2TKdZHYjKZZ",
  "key47": "4atrC8oxw4E9nTZ8BzeD1ctQCzG2bsLLE9SdVtytJiemdikeukpN212XtYcfdtu6C75ddMdzCKZowqbYiKzMaap",
  "key48": "4AF5JWjAHCEy1NcGRW47sTTR1W7F2psRMmmbzaNcJpez47kaXTBQxrgkhTX8A86KHgLpUvvhWbtMvtAWZhFjrSmL",
  "key49": "AvCpPcvBZFfgv6YJUKnNn2pWFPbwQLtK79NCa7eBAZ5ur3Rnhjdef1Zw2cYozSvMvWstLxoUHdGS5y2F67HDxqx"
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

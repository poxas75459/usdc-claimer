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
    "56e5yY7MauPL9Nmt3QDxsrjusYPPMhChMoS6jw4SMp1KoatvFqbDaMAouNNvoVH7dDB7ha1qSfZQGsiAmjHZcoHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s2xVPrapiy2eNTzjbYQ3bwj8YBFAbgzQ47BBs6MuxBEu7TktbmUyjgVdYEnvhSE6EWJgezjsQiTzcgyrPf3NwSZ",
  "key1": "31zem37s5sebMGpktiA2J1wY8atx24o26m1D7umnoLJViG73ptShCFVph9k62WgVyWXQdrpLhi31Qt2sHZMan4nw",
  "key2": "2XMot187MowhTyX55ydMwLE64AvLrpty4uNi1TDVDXsQvoMWQNFrrzSncsCpX3erQGthSDxNQouaBZ7JnFh73gNA",
  "key3": "3QoqbikGp79j1zo2hYB6TPDnZaBZG3pkK8yFePp75UUYWY5fWkrNFm4MSpZpxVQ7wEDuYwDVCAC2Nrzi26J8wjJD",
  "key4": "5EHjgbfr81ZSvnM6qkmXhEkY62qkcQrSLsUe8FN5xEUTzMmsgWvwkCd813FDbQXF4LqsorkPaRtQjhafitWAWPRA",
  "key5": "3dN7ouQMU5GSYLQVcQxGFLaShxZAy8eoBBmPPBDYVMb5QkszSiiteP6kcmNDZdDbi3ssQxrS5L5SzcDvQAY74RAW",
  "key6": "4tSaK76dZ73qVSPEHVFXGLHfsvuXJL6wEpyL6petmBCAkGymsEFx8gB1KAetZTw4uchzw6D6bPqLZhtUSvSoNVRw",
  "key7": "27HYkao4DoDuAAJq3RLuRA9RZfyvZdn2grw2R172vqV4aW8yD6qUkx7qCK98iDQ9cQ1PAovAupNcQXKYvBXsogRu",
  "key8": "2B18MahHiQ2T2B5nh3S4p2Lw2zQaahdZ92neg8V8t8H1bA7iu5B42tsqb6AfBsSVZFqQgUspG4iP3NbKCZu41rCb",
  "key9": "2Gi1VunXYRpGTVNeCjDXst9TtrhcdsgwqeWDAQxKgtCzXQsNqNEvexChCKdVsKz8bHGfu6ZGHCgKxTcGYDW4MdxC",
  "key10": "423yLofGLfRZD1hAp6b9EMsH422t44vU5kPN7yHVe9bT5cmsPbi9rfYaLXb1nvaAp7D26AcqqFaoWRHV5Q5QBN4u",
  "key11": "2KC1Tg3YqG5pWFkvaPkcehBqvh2YTk9tV1xXYJgUxx3e13W5bsNo4SgM7gk4akh793o9hCQKLmABBHQTZ2WC8x9i",
  "key12": "5qxVtST6dZwCygKkZwzh2J5RUtgKnVApEcnjWM9QfzquyW57mYE1XKy6KBdCH76eRXS5QTdkKDrfN3TnCUAniSBq",
  "key13": "2hSjRwt77L4tSduqqwNRUdL79QzFz2QgRZUinsExKaGuzD4sce1tztYMdkASj4m4xJiMnb23WukLarAxkKUtqDHL",
  "key14": "SAvHAZji2Um8uaGVvyAeoa2movKbSPH48ez2AXQuunAMRWWdw2vkmzMQG6doyVE5BTToFp3kEBsUnGqseNKE8AF",
  "key15": "2z9jdQv7Lkq2w8AGCfHe4kR2qVM3a9dHZGHJLUudnu6iLvdVUfhukaU5HmoQuDBR8BRnrCq2ZkkQswxqA975S8K4",
  "key16": "v9Cts3dfPYiTGAchkJDacZ4bWxfAtC6JquX3S8AwJ3D53JcLebu5PCqzQCRHbc2AA4acAHbe9zSdEJQYzUayTDw",
  "key17": "mdWiaW25guDbeWvhUBDoGMKQ55HL5iJ4MHtHbneXW5yWPeUwXA2NFWxSuuDGepSmAvABVjcbh7WC4wdzWxtb9Sd",
  "key18": "1PLUUQyjaYAaHjkwkonPnz1nxYLkfz721eZRT98cQ49djDocdQDyK39F4WypJtwMN8j6mwoaoudp11Ge3H1zZ8T",
  "key19": "5Xtun7cJ4C4UCpiXLvtwaH3cMZZpd17LNWPFpow3PA4wLZX1WFQga9K6LYyTVvxeZd7ovkF5VPdhEyrRanYpdSMk",
  "key20": "2yNgTVAZfLVgjrdzyMYsRgR1P3gTp9Vp6oFAM1ycYKVgadCE7FK7RSqoctRBn7hWymn9Vwfs8C8JsHfrQhEGVr1E",
  "key21": "5WYZ9chuSZDvR9vihGL82CiqMv1yvDo4bmtxAH7B3o1RKMPPWZYKC7f4MuPXKAg4VnoCnwzfrVaskNDPBfBD1CQB",
  "key22": "93jJ4bRsquUafQd9GuanjRE3cR9jHdTEbXziFKuEB9tEFoMGEpXg4NX8g6mNKrgthiU4GY2UdsX1qNhBjZPN2EK",
  "key23": "4BT9o9rTYWZ5HJLMBgVoJ1rqQ5AgAbi8HTDErK6ZN9Le3QMF8WdGLi6VaQdEURpfepU1XueeRKUTaFU12Ae1Mpjw",
  "key24": "3monjLSk144JTKBopetKnjrmLeWBA1DBND9kdUGW6GewJEczHPbxmRGn8Pn5SmGoFLW5Whkk7uRSLwB9zTy2uBgd",
  "key25": "4dBGLK5wKr85Q7s1yJJKoo4GyzGsCzMrsGJtiq8TtMmTRnQe7LJwZoxZuEfiaS4KUyfGNF6ZpgCERqm6pPiS11wL",
  "key26": "4Z5KVfy765X9M3yRZjtqyeLnCTxsC9ziRpAUFm4n2qPV9PmLT9R6bmiwAJcJ4VTJsLRyTTkAeNS5Kmia7L6XbC7X",
  "key27": "2PsnVMbCRwZGvR3nipha7kSAdFdFcsyT1hhULYtkYL2ogu56eG8PTWDn88J52wo56AurjyoTkwQynQkFkmhNMbxE",
  "key28": "5EkwdFq1EYPaeJqu1jTmbahNc4qsGYvRoh2ChcpcugNTptHiTXGVvasvmEFfYGrk62ytticEwfaLfTvDybdENme5",
  "key29": "qJRdKJuNuHsdVs5jPj5vUEVG7RrYckh6hTJwCAwjS5iUiQo9ecSoFCAaTgCcFPqXZ9R2ftVTd8Hu9CNzCJdCbe2",
  "key30": "3qVJjqg3VtjcNhPpfT4xjrRDiqzfbPzbPYxAZXuRrt3bLtxVNPLk7xhCpXRFSh3LqYzTkFrovZt7X9mbRxVukCUS",
  "key31": "59oC3eYG9G1PmQ1NbGEWNDzLBERjneajQLbhVJJPzg18mPSuw53ZRbvgfSBSQqhJnoVAXuviGAxwGRB7hQkxPZfU",
  "key32": "2WCvMkJ8H2CVguDJ96uVPZ1LW5wD3gCA7b76TmiC3hCTcon1TsKDKMpSaa21h2biuYNFWRpveWxSimVe9pCfM1Az",
  "key33": "5cU78Lp89bj7mgrzbKckPTCjCVsVXdbfjhJbPvezoX2cYmod441w6junELrcKu5gcdse1vFPVAh6hNR8NuZipMgV",
  "key34": "2mCRo8Ght5JJQ4Mvsx93ddzSbHVUpHaijYpkmrYTXyvcuNavSfb37yw8oTGm3vEVx2yoCDmwEfETFAy2aYKtuZxu",
  "key35": "5byX4KcmRZFjLpw5GDHTF7WKLUvdyq92cfbffXhn1VpSmaibcXysPsxhrpbTS6iyzrrbHwuULhKf7ezVqFC7uJJ1",
  "key36": "gvCsZmUQ1izuZVsmBCmzNEfbZ3viQtiwicntFKDHByczsKwgB9U7pqLhgBBsaYgYJanU8F23mz1Xd3dPZAVF63g",
  "key37": "5GdHj2dN2voiaSaaXfyDPUV6Pdzvyr7ntjkgaJ7ibnsAAvarS4r2QUeKWzeyNfkEYw3Y6G8HVCgU6GYrAGqqKhc8",
  "key38": "5dGevphZJRg62rGeSQ8H9d1vUXncuurJubVbizdNFgc2CBNAcBgQyCdYfP6z4Tt4mVpjeriiwhTLENS4qijEt852",
  "key39": "KpujDCHtdDccmYcrxbaDTmX3g4gqWSNdZqXcaxijtUoxzmhcrYe6Gtf34CYzW8GDLocCvkAYJSp6zRUB6YjgBX1",
  "key40": "4PPR4yeTnsbLUkznmjF2EsVxXCs6Ux7dDQwyQ7az1zrKbMv93WsLKVfwwbRCbgMrBi33dASZVwds2n7tjrEQcCxZ",
  "key41": "5WLtCngFdZc9UWATRswevpGQ3AeoKyFWQu6aA75nBXZh8hdLsHZNwbKMzh2qc4t2oKerP34tr3vSVwFUiEvrEwWU",
  "key42": "53SmhrHkiPXuKY22QLyiqoi1JHYeqg8JUXVgDSESxYUxMJiT88FWHu4mea5L3aVxp7QbuEv4earxqzhBPZt1uRT7",
  "key43": "2RHMGfjrSyCNc83Q1pDiqi6Eoe3U4Mrzy45QtghdZ6N2yNbbaj7dQJeXHCsCc2MnA7ad5y4jKB4A1efaaPNkKeZC",
  "key44": "3zjnDBnUtjJWgRNYme5Y8h7PEhYj12yBBSw54ppBcFCusw3yy52H369e3mwCbTtAbN8Jx6TS5xPiGxZTkgF1fGS9",
  "key45": "3Ze2zVqmuyvQx6E575jLiWhjshRMAbHiipnsnneenCmhQzxh2hZ96sPQBccm43iXtVJ3JLnwdoaJmWdRQ1d9kZzn",
  "key46": "v4GwcBWzQB1dk9guLBckNAT7giBWZEBj1dhYZQ5MWbBBaods2EtGWTGocvHFHrUMaUAcLbaVSUwP4qpgiyBMoFv",
  "key47": "5nPyZ1tVs3Qs1pzqvsNsSqU8egYEZXLWMrxSjJSCaJWk7CRVEWZUZpTDf5FTwPhkvAk8apJ9CKUiXYbLhCy5EVfn",
  "key48": "KRHe91DZdZuhwXSN8S3H7qSe7NEDR6turUvxW1ZrjcsP4aMmnRZv9cZ5sFwfMEZeMDckMBTXKjYZ1fh8AGyeaHr",
  "key49": "Em7oJvc6oLZqycxrsH6tr9MLjLAW9kEcAg8DMztyRdZFSP3t9dbefqHjxeKWXcGRgPn9b1hgw1WsVSGVFNwJHEc"
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

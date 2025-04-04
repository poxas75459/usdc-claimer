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
    "2wzaHT7ekiKWxyaGt2PWDUTfdWMUmnFmfHiFqXq7wyMze3VuHGJKXwCtzK9HMGiC7M1kNrwpTECPTDozp2aDdrQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRGVBaYv6D7gFEcryUhpypxKRz5p3sdCHDdFRK2RJwenvA5G3DFVSoQQMVA9p4mtqSpJwKjWQMoyg52GSyy9gFq",
  "key1": "3Rv9E7GqnwsheBAkAWXJr6cLFZWHNPB5x5asEgVdtRnrdrSXimPuP7UFJav7VcWCfniTB9tGvKi9qPRSoDNeTDco",
  "key2": "665YD4hcdQKhVqSdq3AkW9aJ94mWB4bpNiLRuoScwTNnk7a62LhLLMsY1oMPrBJEFdZLES1J94fTpEvGAFZQEuRe",
  "key3": "46KgG9QbgQ6ohyQ54BEp8uA5QBvXohKBm7fnKbccAJuHYzMeFNc3CvAvQyH5yeFXiGzG6JPa2MQtBb4bwoJLnPY8",
  "key4": "5uDgZJ3cZ6eRYKPGiCwS4Abd7U2fdZdTgDevrmjWbWKo2jHLBwmuuHPBpEgpLmaCifc8NarxawgCuWBnR3FEC9Fo",
  "key5": "sCwP6MHmwZJPwC13vqTa8umaGxZNxKyU5TiM1MwC5i753VqbvELPv7gzSWaSoQSgM8GEqSUPXCHqYNK1WRNv5TS",
  "key6": "N7JX4vZkwbaizSAW4Y5mxedm8MyLAvVnotu3n9gYJCLEvgHvdwTtsEPrhqd9VUXBJGK9G2aiRyxBPv32JB8Di7v",
  "key7": "391AMhSK1fES2FcxERYex99oNVm6u8fj7CAzTbJvGb3gpr9bbFxXGVoTiRtbArAwADMv9Z9CyJUTar7UJ83GweaC",
  "key8": "2QQdstEwYqFPGoBcQTuJkNPdoLCME2QvGzXHxeBQrtttMUie18QAjgWxZJqhxaU7WWzeoiKdMPMr7tY1c1VP4RN5",
  "key9": "28R7UXZ7qqLXyWjmXyj4iihrZ7E1PgBRp7YAeKopQtUseGnLhVcMzgAiACE9J9vxGyMo1Z3vL21BHP91ytxCQSCN",
  "key10": "2nkJKc5fB176AnhEJerNkNXDTAaWJ9wPagM4hipko6CQ4DzudzLBP3VmuL9R5Zb32xCUkt1KEuVC2pB46d8N4ELs",
  "key11": "4CKgixNNmMh1H3LPcC4LZ1B7473nRNdmCLqAUCraMbniKv1xMWezmEYDpXHxZ3kek8zUrUhvck6ar7a6ERRkBkW2",
  "key12": "5F499bhpcA2Cwu2yLdREuACF1TgQqjoft2kDFTxvMqJzqzhTzMTkwpW7EX5wTh7XMeSXA8XUDvcAXDQutZza2ciy",
  "key13": "t6NgjAP2VGLmUtxbVpnDLkQjRBeinCDWLLmZc6eMSYZGYXQ1UxQACgqaDuy3VebTS7SnsqwfyX7JZYijLS7Sts4",
  "key14": "58GypsgKh6pzhByy41ihvnLWF2BahkEHZ1HixyNNix83MRLENhumtyrSUErrJV6VFHKYe1ENCUMy9htbLEw2Uc6b",
  "key15": "3hHJwYVKhvuVUEuvpKtKdTijiNPcmjHAU1rW4PAB2yguKYvd5R9EACjatAYoiUpVqDpHsffNMsrUVMqRuPunVtbk",
  "key16": "4s43HGiYguuWfYfGWotzhHNVZQaiTyAEEJ7bqghbLAWHzH2YQNWFGdKUjTuFaAbFKEf7Fq6pcnRSzzpzUwdPzLPk",
  "key17": "g3KtKidDZByijAMGVnMk4cFyhWTCchBDU3DFUfJvo9ND4G5h355MyXwV9r58tzSn7SANysQoFapAEpZi4uoXVC1",
  "key18": "5rXp5uov24TMqEwUYGh1vpXLbV9bG7MbxM4xY5eFBrZ2SApCkWNvAjABU9hsmF4r9Zh5NzgAPJMiKet16wvEJ8jS",
  "key19": "5WS5MKtxEgeFimnbCgrnfo1oqr2eYws93WczoiBkmrjW2M8v2UxnrDx8rcAZQaR8BiHDnAaE8xtNMXHuGV13a2m3",
  "key20": "5tRhyTLRQzKns9jtYTqFjwxqEvdcfouSzemdVcEqeaQzz5iHxZWCyjTDDYXLxSbJYMbFgsR4KFkZSkeECn4DZKmQ",
  "key21": "3SiEe8K8KATwJemrWPC3gpK1g2CazenKLLsMp3AcprtcHCNXPBYevsgzo2pEnji2bwF3bJCb7VUMfhKLjMzNe4Q8",
  "key22": "5vG37soLQrZiVmRtvkApynC7NFmEuUApdT4kj1XNvCgFQ4rvgpjnifcztHN1Q5vmFHAsfse7M1rqJxmapeFnLmEk",
  "key23": "61kpPwaPo2HErS6hb2Ua8jUaTe75SYPN3kcUrcpviZkYqSYSLqhhNrp1dxPPdMoh7FmbZjaC418rJRh1HXazf14Y",
  "key24": "tngjio5LqSCeo3VBdB7ktFpRXVXPnuzn9iuHQGGoHg23WXQ45MBQSX7zh2bXX3d8zXCGv6JaApgDZEsyTKxT7w8",
  "key25": "4VX9HLpAYJTp2YkWHrAQ5uvug1GUrjMMhH5BboSVXNG14voPh7MTDnUvRrELrY6vnrfCtwyWVvfkvT8pndELnk2q",
  "key26": "2DJRPiNpFXUGthMwAS1B2L8Xh2vXJmnLXYUWVGXHn3UujE7VgmwcuHZb27AqFXoYH3n1Qwy7zA7vQR5n47f582PY",
  "key27": "2dXYhVLqsatrUqJCBTfhKSTTRZC53qAS4bHcyVZoJiT7YqyfzHu3vVTsVxkybNeyjtDfmvrw6MauK7Xbv2EtxEva",
  "key28": "5pw1nAXfUBtoU6YAhve6eN2yZWxpjiAgHcJfZ28znRupLYyzpZq3FuATRTC3JUpRQcusJvPhUs3GKLxAJTE1LRws",
  "key29": "3BZc27rYw6P4Zwms2JM8bhdfk46U45DXctJKnZEvCca64VStW75EgmYFycqaRXv2GEW5hUQwjZnxVnn7r1eNrueP",
  "key30": "5XmcWgDDhQ3YuefHnWWjex1qZG1eXuc3pUnXdPW5paTxasgTMUjSwFvB8EfPFhMsjV2effG5AH1cJoW3AjvC11Qe",
  "key31": "5cmbGucsjVQynuQhEseKvN3aom1jCy1tzLwhuRLDQdmMsRthnvPUozQMs22nE2E892YoZ1bvpNAcVA9qL7qT64CC",
  "key32": "4yY2mQmchdFLWtmsuHsGpUp5ueqx9dsqUBMBWPqwyEMPHJMPnJVpiUqeFeobFAY8YqgWffSkX92Zep2PvAKxeR38",
  "key33": "24gKkNEZhvcs1nSeEWXpRLiSH8SYgJ2bx4VphmuQH4zw7NUd5M78yyk2ZRux9GwinXFuESosgPnohSWMshSzQdoC",
  "key34": "HaUZ4yEtNrEH42xrA4k6SSd785naHHpVJZnqUddCutsymHktAMSnJcQVKCHZL9w7yjJF98NKP7baqQGEm2mGipK",
  "key35": "uBCrNa4MX8nq1ckbwmyFMYwVoEU8xRAfKWF1yhD2Tj8WE1fgs5wTyGA8KAP3At4tTdQgqzPTzXQGHxjtTmrx4cH",
  "key36": "3wpuyoSoWRD8k3fsxLyhuU1DLohzvCuShSuLRrQrrSnVKhU6t4CdgGiNrgkd73ABGLkrhF4QwszFmNATXBvgjnpm",
  "key37": "4bKZeF4TMozCqyCsYZnDTUCx7KywmWGCqY2ZMxJMvB7HLMdT3P2b55arS4aAurYaNsZn72ZqL8j3pCYcgzAf4qYm",
  "key38": "57nQNyzeVfor7rVsCfr7eS1C6Vv6E1ztLfbPqmm8zFAUd7SitUijW5gG8YC3RSZ1VmySoFX9gjPyEfRg3wDnMHx1",
  "key39": "AvioF2GvarTFfUyhcgUXEXWL9rgeRqP2Vu4KgyuQ4rWTZziK4PD1a6u5amugHJv9ogZSvciq5UrY5Ygn7TNtop5",
  "key40": "5JMfBSg9E942TBTCepyVA7C5ic4p1XGuKWyX7ahHXPLN1BFpPisTfLzSK1GJmchK82b2vPxh3e2PQdpSJmoB54D1",
  "key41": "28Xe8Bqe4qJT5hpZ7SUmh3qrGr1ydrPfQFxjhmPQ3MDPxaPyAV5pgDVRYQcDn9HfkdBBnUT3yfLBcgTBPFhaWxbE",
  "key42": "47LvGiHzf6Y13AvwwR5Mm6RfvrAfmusFWahToSdP2yG2gq6uXbvS13q78RRGCtU9LDnq1HPLV7VMu3mMQb9vY3hq",
  "key43": "3jyEojS9FFRdU7MCxMfZyjP8YVZLy9dzykuWKfoKPFJzoTPeNujupXQKK5LJbYBnfKqCX6uPkJ2w7pPC6WAtMRTx",
  "key44": "5nzBvGQrkRm3SouEEzckAv2JeiaTDSxuyrbSb8mHMJDUt68XxyCsz8pFU2tGN4GPxqd2KCLgQhb13DUEte8CTiTd",
  "key45": "4D93TQVRQyph5ck1JfHzs7t25V9VHPFA196j79MkhTSQpMbpviwJGnbQ5QhBrCGRAYmuwZBkjxS5RSV5a9a2mWgW",
  "key46": "5Dnd5iL3i3buPj5aYQqDxYm9W25W1Sb544ks2DBNwqUqxeiTnUhUDT6DSW77GrM9NRwu7GUVZw2mYrarQURoeeyK",
  "key47": "5i7s9zZurks2GCtAHjCj9na46AjZJDUuq45dG3S6KEPzZBTD5qdsSEfLHngnD2MP3aNGiJ91XvYhQD3GTccqQadE"
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

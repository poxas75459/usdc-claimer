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
    "3v45nFibxpZkVQjgyi37oAEcc3KRRi3k9v5Jkk16b1xpfAiURQex6PbPAP5dPuHYVCntBgvX3Apeod3ZYdsVTSyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fq6MbWLjCBiBnrWkgY5eYZZXxhJAGGdXQ5sbedps2ZP7oYh3YpSEhzcRcZvtBt2pyyucBrYjREY53mShpdANrwe",
  "key1": "34EbQR7i9GETq7uDTJkjQ7LbqWS5sCxL2DR8VirUn2yet61ED2CvRktp1Vx4NHC83Uqj2jBd2DfAjPvL29KgVfug",
  "key2": "3QeDVcWFLZEdGUjgFCJQyv3ki2yojfm7hBGcWrqeqNaoYMAYQ6b4wLbPppa9FKjrS5XbiatWuFXKH5L2zzNc4rev",
  "key3": "3qB8WazappBUMMgbfEjWvnReZM7yLZ8V1WS1psqsfugHP3nfg88PEmirZhQpKLb4t7YXZvhFz6KUiaxiE5KQRhrb",
  "key4": "2GR4BA4otdFqnYwZL1Yj2EFPNsL723HScFChbmZ4UHGBFijzCzkZqLjvaerFrXWRUpWGhEtYt6a6a4k7fNZTGW8B",
  "key5": "5wVF1gMiUPEUEpumeDx5Mz3LD5k7fcEYUCNphdtz1padr65ijftapND1BRWnwdMXg9qZDGjH4LA7idnH8Z73DAUo",
  "key6": "3GQseqPUetQ9SwqhoQHPTJZTN91BoFv2iDb4CPGu8Y6yaDzCvyRyKdGCfgebnBqKhC8r932ySQsCzSLLxvahX1Tg",
  "key7": "54Jgy1ZkcUJVxxjdmaz4XVPbf8uPPGzHQVuhef3bzcytdWy45vjqETJLeHasBNKSP5vBju2aeKwnSKLJTKWv6YGj",
  "key8": "3JZL7kTFuENBEiSgyCiJeadbenheuFAaX4dTbgK3pWJb1vSbc53qexAzuEKPYYrmsY7jWpogvLA3RYxaUP7WBX6A",
  "key9": "4GbxHrV1gv9pCVtLinLurq2ZXXfaJaKZ7cJzbsScNnTasEt6r4FyugFxvuHeXURJPuu83Nm63KTat74dhM4CjMha",
  "key10": "5r7BWMU19XKNAHVNf8uvKMdakEhmjnPz9DWXpTDcWp2TbPyReR7364kKC7NUugu7ykDXARrYkJkvbFM26HuAqVS9",
  "key11": "mecgeGdUPzAqYjoARebA4Dg4AqMbEVGdiS1LF3nzmUJm18ZNsPDd7RhUE9Szuf9HVMuezEfQkFidzt5TUXW1ZWj",
  "key12": "TLZDWoZiuum2aFJMQRAoeW5o6abGXeXBkTFdpYsmEQqwnui9aULHLcyq76MtWKiuWh4Av7648YcNEGMEWLuTf6e",
  "key13": "5eji6pEDDXSTdx4nT8BqqsLyNtiumJmfMEw9N6gSAv4rddZpWw7jjVVKXsSLhomArsSWysTBfKdNjhr71ErKZt3Z",
  "key14": "24Nvf14miDZmsT46JLqHsm5pXPj5XXwKoYijvDXoq8SuvkQwZ7AJcdwBhFzwRfxbtaYRukydSCexutKJHF72Axhk",
  "key15": "64tG32Mb7GZ3eKb19Y3MYgS846aAJgHN7gAhXygRkpgj3qcKMtsVt2igvCtN1UAVDKmPutXTT3dK7FokQGban56y",
  "key16": "WDteiUMkgBkUXqggaBNwaRiETSWSVzfHSjYdaK8C1PjozsCfbFBzX4jTQwgxpDTwB5TZgDBrEZn5YJVXbnwfM7F",
  "key17": "5JtZgupXM8vEhESXfZncCHk7Jbo2YWG12VZqumkap77xUz3q4ZD2getzN4sDK7xfru9oK2x5xB1pxP8CmVgiufsR",
  "key18": "2L5KfajxdBzYYqTqP7nS9j31XVeTcLTADDzrVi9Y2KiGBvxbRY7fvBR9n6Jt9mCz6KqVYH7h6heGE5tAE7tVdo98",
  "key19": "5tKxjeeCxmq4Ywedp3EDx3XUDUouWt2zwLsyPqUH6ikHHjt85kPNvCcYY82NDqYy1NmoSfBe53QT7wAkEgzLGWtk",
  "key20": "2QeVHdUZw8MpCdA5g5nWzhB3sZU91DPYoyriwjjJk1FK8NsoCZXvZfTipPFEEkavPy8TbM69ZAHRxG33zjxZubr5",
  "key21": "pQb9KXJCGdcd7Xx31NN2PbNT6Nh97HuqJESSser9kHH92Y8fZiR4AJXdPsPQ3mxDVVCHGFBTwYGwfsb7awYA5dF",
  "key22": "2wzW5YdTwnCTN4WUPVWc4Sh7R9SgPRsqFYJuPodtZHJUHFsJZhTc7EqXT6yhfzbZNYHS7yn1FYbXSKQjo7hGQ7JM",
  "key23": "4EJabjkyoB7tarY17mvQymovUjzhzczf6zuoQDzefhAv5Y5Qc4N7hYLSjC3HwEiL8TgjvobRgyBbs6HSZzDRbYSs",
  "key24": "5Xm7z2KA9J7Kw2qzMYcxfyysupAP81tgAZ8CfkKHWiaVu47ABzrvgkxhVymkLYDLfR9b9jF1Sk2sUHfEHZb5dAiv",
  "key25": "5fXpCRRvoVnFKbPjp4CpcEFe4xjprYn2atRmvnN6Znyxx7XUjcppxTzWQpi55A5KDrx4MnWokMw9AWS2fS4vzDoe",
  "key26": "HTwax2H6Zh2DBj93QGnriDKpf9MaWkpwQr8an1rH2XGGVjgMTmc6kypgEsLfeoZ6uMcXBn6ikMfwhN8SudoFZif",
  "key27": "2ELatVD5Ap77YYYVJy8xcvrXpCv1MetBwLaAwSEctaSMdWrKWPavTfHSo8qzLb8rJkFz9spBbD9DRHX1NXeXmy6X",
  "key28": "2bCHi26cQcycYpBA37WDric11zduRCFSnvKyToJaAhDUugT8VAtQzfeizN4Zx1wx1a74WPovWuFhAkRuRCNq38Z5",
  "key29": "36y5qWSLbeHCR251AkCwpEZidTRzAcGYHqujxDzrGhBgqpejKRyjYU9iW7bqoqB4h71s98hCjAkQ9KDpquQ9GuwK",
  "key30": "jUz9QuRpbnP8fqbfB4oznTLovEYUfMXnpg3mYxhk4C2qdbHNkGn2mbz1f5f4a9gMxKautcHDnBLF33PoNMM7ByH",
  "key31": "617JLEgKnxDzvzTdzQH7iJkiTWELTc42DoXa6yGW7FP6i8HbqRYqT8DhEhwtRvpkedHeLYT4LPRAtGFt8CcbcrUD",
  "key32": "5NLZBEiNWy1W2jom2QgZMoRGeQEM6aWc78ucoexPMcNhfpoG24aNCdvqpy5hyJF3AAK9yFHnhAysRVMP23aqgMYx",
  "key33": "2n5n1wEXYsit21rpgEEPFCeQmjyLzfP2cVtJjhzQbC4eEhy8VB6BCtRyNP5r6j8F9q55tVHAcHNjxmVmGtvzXkaG",
  "key34": "4WDnouseubH9Q6Rr81mgZNANiPiiVUZi9Z2DfwwzZ9WUbEgdZdEZiZtrCwLVsFfSVPTexZh5yv6r7iNz4pf6nsMu",
  "key35": "62ViJJaQB5rsNk5Q8znr3QcVos9dCBP5Xmo8oSo3JNZ44qTc8CdbkRL7bWbpeVDbSFWhrefFPVZadVeGorKS8FvU",
  "key36": "TMhV2237aRHGU1JTsubzgss2uXg62kxynz1fTkGct1ZCYun9U2a54aC9nXNHabKEQYFZ6uhb4V4TdMWYuPNHAez",
  "key37": "5u5x4phM7YLdfGAvYNVLB2zowdFSr9NZXynDeac9V6qAKkdGoxsAQ2x9b4ktvvj2oZ1R9fQB9gsvnQtZo5VJEXDK",
  "key38": "4SAEib1GUuCVKkwNsyxDUKFcSPYTjr3HxWVUDqBgPqJsvRFGcvaArj56Zq4zJpMUAmrdd7cKP8USTq2pjDAZjUY6",
  "key39": "4rUHAfDR7wtXPUyCYqgQGd7YsQHpFF1hbycEQ9YrZsxh4HEgcsAW3HgTw4kkyhNcDoe8WjAHB3wwn5JtQaN2h2XZ",
  "key40": "4Wh7J75b15XzotgZF5Q6KUKTBvgwUHYqQdCMcvgcCJPJzJoeGAkZnxcxCGJEP4MyZjoQsUxKUYAWw5LnjcGPYU6Q",
  "key41": "25NowiYbhhek22wEJe97Qvu1fjmNrvk7F512eX27UZ4y2xfkrUdVY2tmtX8Py969kHt1dcEqbCXWnW2KXVc3kGpZ",
  "key42": "2GBSU4F9JFYsAKL988AMB1PZpt1TQC6CQYj7X2GoMxuzCLD8j6tsX2D23mXNz6vmYejXKTKLrfGmerACpZVGAqsk",
  "key43": "62EuKPozT6Dqmkib63rZtDHjkmk6QR7DD8XZ3pHwt2mAEaLtiKQBVJrVeK3rKgvRLCvQcqT1hGLKmmEattUX9orA",
  "key44": "4UPZtARJTEfxvkMqm482yqJEy7nTVazdFqvdLUvdFMRgAkARC2RRhEYdoZxXu98SjQnFvEdAhiVoDYRNft6Z3qYM",
  "key45": "3goJG6vYQcZZTstKgNFvoP6XQJReMSWQjt71PKBmqjWwdd4UCTCYKcBEYkYraFamRobPNtkxUcErRQswDP8H5oDf",
  "key46": "hyd6cjAxdw8cjb4PFg2NpEE1Bfej7GvWSxxz37NKfhoQSovRsBQU1M9dMgnbjNrEeZURanYsNBzmd3wRakisQJD",
  "key47": "4nAFZVcYDPeNxMe8nu5EgvrcYtVhr6Wh1JahwE9GDMvgfVoBxPegZaBExmwBWmf6n61MyqnT7m2nxmJT9nonAf5S",
  "key48": "5rPBaU9XzwvhcMTXQHbHdyEDhTNH1vRZbt3YhJHhDq54PARh8LS5yLxEz1TtdSXoNouJXwyJ7CSTGxkV82RANaqs"
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

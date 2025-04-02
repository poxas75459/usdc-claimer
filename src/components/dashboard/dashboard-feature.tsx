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
    "2ykqyA3PZnuxX9NRdCNTMZBd8MPfSKi4wbEQtbZUcmEnmkbHTaG4feYfEmXfwwk41n2BGxHUJHmwG6ZgMx16TK2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qQKrHfCb98B4TUST4757dGoJHv3XkqoCabN4xND8gJTNZKWVxzzjFcDgAcbvisRSMNgYDHUGTrSBxNdYQjcs8NL",
  "key1": "vkpdReNVFYzYbvuDV7U7f2N1mirK1CZQfcgVq52LgHoPEJjYBxWbhAfbpmDA7yzdCLzEjjf1Xo4wCjMugSuxRVs",
  "key2": "2XG3FZ5bxxJcfVsyFcusoSekZ9t7QNQdwTfsdQuDwBFcfXAFy3bRHots3Mff4E79C6sFUZFXXXsBNihKhZkxzgMq",
  "key3": "3CjqTtc4Fuopb7xexq8ZrdynpuCxwDDRLLhthNUuHU3xKXLFtRDtfJFm9cSx778D24U6w3dRidbrpv5dwhWLTCwg",
  "key4": "51E8SG3zAD8cJfoyB9w2BdHcWrfEqbZXxMJc1rXgksiRbV2KFpj9CbkFDy9Ca9HV5Sc2NuTM74hm6v21gpSaiaEL",
  "key5": "4qRUq496WXd11V5YQb5dMhp1fM3ZNyaUgVVA1bPy6eJxU5oJMetPV8fASzhy3zadREHXPZNnwdpnpG2hvY8sshx9",
  "key6": "5Rq2ypF17TVDxrGyJ3baw7tmgjtKS3ZGGuZkB86ZwWLjMsnEvr2RZqZHykhi1xjasp1ZaJMMjNLgBXZ2XzcSHava",
  "key7": "dSWGnUHm2uF6FNQYRnuZZtMyg5jbjBdD9BdegUd5Denpkaxc7b1HqMWPkksy9Y8PSh2KD3md31s9pqVoSWAbuNg",
  "key8": "49KfyHKTcpDDt9pgEx9Csd4Baxt8zcXP2oqfmTTcGfRi9FZfi7TYcatzEXoYwbHPy9MjLTkHfDDsfGaUnGoLeKYj",
  "key9": "2k89vfFW17xdsw5Ym5ZTbj5pVFV2GQ5qXR6dHV9Ecg6oi191Fhsa9Jwnpgbzv5reKLhUDzwt6wy7WNEHwpEM34CX",
  "key10": "vyboJmRqxMThs8roXvP9i3CeE7FRMiAyRDLvjW3bVq74zqvmKaUYM5WGdSzHHB3DrQqGnX9vr932FHzcuCqCcDG",
  "key11": "3Lwv4EseySTDdtwXKfjX4du3h9GdX8FtjCif9HbsaEe7nqH9faykLYtvN8Ma3wnkGXxXY516eyrGncBik2Ev6bDY",
  "key12": "63zdHhXcSH5XE44yJoh8ZHcEiaYgW9zHReoS7p9neWku1eMwsTiDceWCwNiaPCsCtfZnspC2dJgSGeeePzCNokoN",
  "key13": "2brWDooyhDwE7espgLHKPiATKoWXqEFKuGHLVtTkYLUh1SjtunwBgoihAxAmjCjDdDVU4k8gHtGzKekBNRAGjLgB",
  "key14": "2i6NnU7wPkye3urua1GWdBDHM8nMfxan2Tge7doYDJfatsD3NfGEcrVA879vEYqChXWfwdceZKXvq5ZQfV52sSVx",
  "key15": "jmGe62JU2XdVZRYLsB2yCHQM3S3eViwoSrGAHq4YLKMwoKWpsHW6vCr5tBFFNaT8BXALQV8mnedVvZ39XadB1to",
  "key16": "3oG2JcuihUpY1VMYgoybHsr751Qdc9jZJJbZ7kf7CwERfW7mcDoMh8Df41EHHdMBTqSvE5hFXYLDMhb1rKUf68CN",
  "key17": "2V911b8Ub7CnmNTe2kpTfMCajQRWiUazM8mcXZzxCXhcAQ2AK8cPimae4dRPyrcPUtMGEEBhYGBY25fou1AzU4ZM",
  "key18": "2YUBPoDZhJ5Ksaify6oxHshrfCrwHGw5VEqQHCehqgK3SeLMY1Q2byuWY4iyvCBUhyPN4zK8ky3kQtavGnJyRHtE",
  "key19": "2L2i3u6jdf7NjAgjWAz2uCiq3o8tWZKZptGg5ciRrWMpQQcyfi6jSXhdR6amwPiDRU1BCPGMHqMPhFoAQCCgtnhU",
  "key20": "42z2yD1PyTxh1PJ8DcSVNZG3gwvbbA9mMw2Feyx5Y8QsSwrxC2EojUzoxZcNYYsSNg2oAcmFuRVYyBHcGgB5f7QM",
  "key21": "3gKkV314XTyYPtbE4oJMebs95eHnYLyguGVB7GAFDqMoS5qZXqczPgAiV5Tc7XtqFdkZkYG49k1ZxX1CZMNTn7x6",
  "key22": "4BAxsRYYxCr1PZrdSjTqNTxZq69yUik6FG4cZv5vmN97XtcBz6xvT2JVF66XSD9o8qMK3YCDSdUDDsENnYdDNQiC",
  "key23": "5y3WPD3DfFgtUnnckJBLcnfSUx3nt78vh9Ae5a97QrJWDAdCLjPg3SGtQ5iaNHDCcxjTMJxvWx89dbYDTLcLf7UA",
  "key24": "2YnskCxPgtMA612QXsLixTBf83zo7ydg7uoKv6oCLXfCkmhtJFVvShzXcw1t84EYMYiSBGfbRiG2YFtSUJ9a7JyW",
  "key25": "3xkAp1SaHrVejHLtSZVCmCQT6C9c9YXejraPMKeBzqnaiVVkqDwc8q4NrjUUScHxrYk3nPJK7DwunfmZzUWPZKE2",
  "key26": "415CHohZt4TNvRBv1mVBJscxcjWRb82eG73bpo1Fy1rSC3Qo3dv3w1PxFbE1FV3N2z9NimXmrN8TLe9revyR3HLi",
  "key27": "59G1jmeALUCWPnvEJeWbtshxuaAF8enPbDDwf1YuwSipAy32xL4wAw3grmc6wBs67rQcRA65sChybXtid2KVTB5Y",
  "key28": "4XE9zNShc6319tPcyTZXJie6v2nhKXKYQjoWQwT6ERiky5WHvbGffrenbBDaRZUKAE6HkBC377K48AiYDS76yYd6",
  "key29": "bSKoAUGyp7UkGyJFEQ7bARxKu3pQy5gvkhCXPF4AjDuhnRb9BCAYuDrABaRRu4F66NogzBfJMQGvGor9U8vJEDm",
  "key30": "3Ki2UVeVCeaaq79rtWsc9iq6EPdvYVe9XNkiqgt4Bn1kGbWqSjYtVNbJn4ADEZcAyVX6LD3s4t49mhcT5GRoScUz",
  "key31": "c73jAmHPuYncGV4SaUPaqPACyTUYMgFB2SxReZRioe4CCqhU5UPbobbJYTq2zmCfJESmFCHvWr5FoLPpnHxPRU8",
  "key32": "tkJec2NnCLDGRbRSo4N3G6Nj7spwCcBy3r5EK2J1zm8ebaShyMV4QQwVMqm8vfo5bqwrreRnDNdA5hBiPZv4ddM",
  "key33": "skD2qLFd2y73LXWc1Fc21SRyzs4Q2gHMBpf55sPkUjqtKEzp4AncfUW4CDM39NFkzkMyVwK1WR7BTcDqnxcvGWz",
  "key34": "3vaDbopkGBLSrj76VDmcpGpNhb5PSvWGRYNdkkXTfyohHiFZAp88sgwrxJqTuM9QwHmQrBaHvDvUjXnLaa4s5HjQ",
  "key35": "4dDjoUN6b8hXRrdMeDMShKrNheT9gZyCQ8PQC5g2RqeFGih2Jrgvf7yYiGSx93CZ2yqBScUYFGiXcApRqEPhtNkR",
  "key36": "4B1PUu1XGYm2RnNn3i41jEgqwMsjt7SEY6DHHR2o81Tga86HMf6PzGX7EHyWprsgNdZPRPvsndpack36qDvKbuDr",
  "key37": "3XpWHdG3WqdXX29GJA6b9bFQGY4DA1sFxuc6QHftxEF1gfuh58acpq6REZnwvkEi4ALUrbdKSU7XMhKbC6nrBvaH",
  "key38": "3CT5AZCsDrYAEYeHs8rwKXuVWqs4YDqCMcH1YWmaf78xWmiQCi9ejAftTkdoQbBPfAWqac7ivoNNjKwPjGKxoHmq",
  "key39": "2U3mD6s3NSswiueQB9k5zXATvSYxa3BEbVXsjWWBHRp1h38SjDRo4PjVNtcEgrtReokKv3DfsgUqoi1SC2H62TLb",
  "key40": "5ft1RpCePgshRdzp4VjhSQakVDcEcBTytuMmXawzPCPGBjEYc21gz7nokHxQ9idkg9j7y8peMMiVwjt8uq6Q8wZY",
  "key41": "51PogJExfzjCeVXNqa5r17LgdpWBwkH385Vq88xDTNU2pUbHP68MQLsZonTAWgWQCbxsRPNXWqgQRWnzPo2SGXPo",
  "key42": "2V7Q3HC55f6w5FEDp1ibD5eZCitL3k3dogPWaKVr8S92L4qCyEB8LWD7a7yCDUNw2a2q7seGaCo2S4DmTY9iodpx",
  "key43": "2stVMZCLyMnTNkRJsVMEMpj4djugjahbQe8dmnjCfDRBAcKRjxuNBziw48VETXbmcxLUHUfbmEWVkW6VhYxAL1q6",
  "key44": "28qoajRqsgz8aXty8EU4fL2qGDTxkpyFqdHGx5d3UM79xrQvoccSxxxMoLdjANz9X6PZMy66skdSc4aicHCUF9Jb",
  "key45": "5y4aGywDY6fWTVMJnDGgjABxHx3kj91sHk5tV2S7gg9CHbx726Zdd2xEtPhv9Ek3brbYdtJdUDpUQMUcXV2onL6P",
  "key46": "8vPGhG9xEXFQNbEPdPQ8HV4qLHUWAXCsXL18UtyMvxGsXo8jEmEXDQJvY9eVNGsEXBuq7RKdnwWKuEUt5fFRk5u",
  "key47": "2RQAckD5f3nPsin3wbXG66yz4YK5ewpYHWQYuG9zJA1zmEmsXnGcKHpk5ZcccVPKsPEUjq9Dt4yq72Rm54LvNeRR"
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

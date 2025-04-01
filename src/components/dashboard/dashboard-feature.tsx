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
    "2cpSidM1fDAMQDAWw8Ew4dXrRorafdkSPLemg5odRH5n7wR7SF2XPX4Yc9QDUtdc2Hte5tFERMifSictUbZYaqUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5onJHxmJoTuhgyk8z5Te4j6K5C5StJ54dGVu2BjqdcxQLYsbKbx8wZtXoGBbEuHquq79xbLDJrBbghVck1d1s7mB",
  "key1": "PWEHgWn1yUYkrbMVjWzuzkZHtL3o1qWbbBNpFqvJuJD6zaLwCYCyYUUDxXdRzQNvhfX3NVrKKXUMPrFrrZvnJCW",
  "key2": "5CDNkJ62PE72XNHRrohECWJZ171MWYugE4UuetWXXZGAJk9mGsYUNVTtva5gH2pzJPvJZ7x93uvD755Ds3TxgofM",
  "key3": "5LFQ2k4zhX43dtTpaK49pUdnffJ4RUaLrzcTd4jA35sMf9dQWLscUFZCCDf9K68LCP2vNLRGbnJiqNwxyP2SuHPt",
  "key4": "3K1kwzgQTpw8TP2CZsupaEM5jXC38MdqaG9cW9CMddLttgTFy4Q8nA4axTphJgXEXFSfLm9Vkxa5eWunzpodPEbe",
  "key5": "2YthqJuKuohJ9HrSp7Hd2ioWdzP5ugi4TEQDtJcXh7z7qcB7eJUgtNXPaEW5NMrHuVwTssoAYCwTRsrc7wX6UJGg",
  "key6": "emEd6xhZ5jQ71ZDSxo8UcCmA2YM9ro6fSZrd5gkQAoViSH8qF5Wh3KdpNRJ2NNq2kDCRRLg8AE4LrxeUp3XmuEU",
  "key7": "3nsVkdvdp9UJMZXZGRH7p4UKmyXQC4CKkyZbkErgaZNghVoiR5VgkF5qqsxR6vn9ko3iz7KGkTvPkSR7eu5GJB4j",
  "key8": "bgDzNSUjA1qEo99gtKdizVsqXx9CWoi1tSrMCLjV5Xtj85xa9zJH52JUdsCzfFAAcFYxQMYhatw95sPMMBYR1Zr",
  "key9": "4XDi6fDuA5VBGKikm46EMPxf5fp9gDVDSqJYW31dHqp7VC225yvHLwRAFtUmUrqGD9WYt8CRg9bTu4sgLHhpApiV",
  "key10": "3MFWaowBfKaTXxynE1nNgDE1VnQrsern9GwpbjXzeYEEk6U8LwUBfbVjqsvkoen3JaEPjdkTmeCQtYpJJwcXFFay",
  "key11": "4RuCXJwcJt7SdMRno99Bx4AC7iANjHpfo9DxMWpHdbUwSgmp265f1pVUQyyB9KUQabpuvxuUanXagXcWem8fSjuz",
  "key12": "2FmfRz4XJpjz1bQQvqWPCg2ifuX3SPdeDh66fZYtpLCAD3eUprr4QYujGRJH4SBjiJt69Cgyg2CEd9Y9DDsWA4NS",
  "key13": "QRoH33dY1vqQPCh8dC9KiQZcsy7a8xcWxuXqxNSnQP36uhrupqqibk4Ku7CXAYSp1HdkqeWVeDWQS7emgBQxrA8",
  "key14": "4A4nnouvqVkBjnP1whpXyPfky4xDHKm7iqQQnj55TEHxkb3GZLJqNzzY91AEY1NcapViRNs4DiVWMQyWwUmTAKy",
  "key15": "5VTLekh4P9PnyVmfgEJyYUVcPnVMBnp71fNYrHJH2nRdVPL2NochFgFAtvewNgBhEUQ9coowwBjJ2G98WmvFFvuy",
  "key16": "5VdSrrBVX8uXagCs5RQcuAdVS97sekCfwHp9Fpsn1S2BNEKxJCWQpY4WrGyczkzvFxbeyD7dCKchJwyBfMTNq1wi",
  "key17": "h4cxc8ZboHzZXyDvFBhzCUPk6hH2J9XcewNeLgFhitkCSvMeJ3RqK8g2eHx2svk5pbrURKnhDMZi47T2ACCmUqu",
  "key18": "65mnWTUfvEt7ZJbqtikRFHWMaRpPNNWeW5LUm4Xvx6AQRHvw8kVhzrs6KBBCEBijWKkhB2H7DEjfXqJh8NUAYaGN",
  "key19": "2rEHjjrTfR6XEqCoGfvgnxTNaULRBgG6nExzPxySMUDH6KVXXzMGaoCbQeTGTPg3Yobn88snwdCg2wswgaGi1n5Z",
  "key20": "4JoR38K6RJXcU764qxHTtAQVdtuyaZAzZLsv7nAkCMqaoM4xDKWwhU3zBwSSe9d3adBzKiiZZCZEgTYN7BXLsTMt",
  "key21": "387vRcb1tNDzPMAL31Fd74LUZoDLSkPRKhgxo4Yud7qse86Fhz9WUVga6gXeUPog7FuVBrNkwQz8oButRCAx1w4w",
  "key22": "5kAy4DEDMC6SHVHcsRxd2JjEp2DEBmwUs6jtsW1nxqspWN4XUtC5a5M35fDvixtgHtWvLXmBmo7Q3QUrSpHRtoJo",
  "key23": "5egzuKmunEMYJmXS3CA8DTkiFaac3UyQ8LfVDymivRkVcwzBvYXK5uE23n4j8yWy5miSbi5m3wdCByCy849wRVwf",
  "key24": "dxG49MRKuRMzrDjgofCwLxtLaHQPEtQD4Nq9XC3yB5hHpDpDWVCr6TK5urfB2WxRFtHPt4X9jWgx2TLNWZXqEB2",
  "key25": "5VeApa1sH7VGxYi3NNwCew3GUbvAxWnohCALsNcbebj8bJcxu85t2XEjtMKMMiDqvKNyLUv2xqmxdiHJMkZSQwS7",
  "key26": "9dK6RQL5yZBT4XRgwFnLYULE41kizfER9WanVfjTXANczbyJHhcRtxfNgswTiA2taxVRs1cyVatQqqsnLSh3Ppv",
  "key27": "2uF8NvBGhmg7hPHnDwFupg71ezHp3nup6skrHwxBsBCimNoDQgo8JzVzLd8hDJfp4b6HxACzn2J59cpNpsfXGRXb",
  "key28": "3LRVGGU7BK1oLB9kPKzYbdcwFjS2DZp6mzkjhY1grvVs4frMqj6GWLMQzt5ZNnQgb5oe1kqacbhPMwY1sHdUHMQE",
  "key29": "33NednrdqjDEHtVgzw7XvcJvnzdmpvE23fs2oVSpFwaiagtasaWNqYsQAuFvK54m7dymwskdAFLhqmUm2cPwgYtt",
  "key30": "2rT5bAWopDBbXJkLrXsMNDrnx3NqTPHP9Zf78ULpds27bXbumZZyQQcXkXAVXGBqvjLSGkKgPsqqf6dgQh2qMWme",
  "key31": "3tzDGTS3VAixgcJHfWZgf3iigdoZSYyx8ur5x8KuREqmhB7kEtFcAjmVtkJnQZm49ey6ChbccVVGw2J8VtJd7kaK",
  "key32": "pARt29ir6YfsHwgVA25feac9VyXbSg1ZNS44EHLq53LApPFfh42tCoqUnuyohBZAnpoz6Hqjmb83YqsmUFamPfm",
  "key33": "4rSvUyBqcMYMiZE1F92DgBfFKcTd6mo8YecEKZqpGiHmptiSSNc67Qxw7pkrPtjgwFendrQ5RnsEdM4oc5Nr3wo7",
  "key34": "5sRazDxo4rq4KNbEeWi9A1PmjwSdW2Txmo4khvEGwGrhEdR6Mjz6Aa7QFPUFeiz6xWXRnv6oGLthMFxknDCSxWBC",
  "key35": "DaK6yNsEqpg2DBn9yXjCXADYNxMJLyPokvsiSQxe2hZyJfaqhsgfzfrB6d96mkgxXoAA48cqAiFXP8a2LJWsquz",
  "key36": "ed1f5L3ZrGqMm3zjTRSe1XHuWdofTsLthnStoR98a12xxqMK8K5gcYQ4HQnnYAb2TJF1V126yi1PBcYZPrkAFVj"
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

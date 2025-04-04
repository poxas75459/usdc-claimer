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
    "557VELVqd6R2rADYm15qK41vFgUeygr7puQe5kqo64hhGDhG6bn2jmwq8FRmngu6bxDxMit9EVNKnx6V3sLsUAiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFcFjXJJqAuZXQnMK7bZfrYaPLX6WQVti6JCjdEqm178SjvyyLoy7b4Bjz2k9tdydWKyXjvRKurmJBVX3s4bkLC",
  "key1": "2nVFhTWFBDfLhepSFyGpq9J4uLsQvASmTbzzyt3eKayLZFJv2g8Pxk96jhtHgvy2FU9qfPo3HdupGY45Rzem9Cmc",
  "key2": "4WfJMqBtyuiZUzk1xmpLLbXkfnfS6vwKELVjJCdbqiZnraGayXe22Cf5goFx6kov8ShQFHvPyi7qqSAxdywfd23q",
  "key3": "4c4NbyD6mGgGa4tAVraUCDHzs2dNva4iWPMqCcEv7Yu5MEVsviuuybFRHoqP6xAmMb7BXWQdXC5qhvC1gBwV52rT",
  "key4": "5hCALBbMaCRpzx4SFaWSYx3mXjNze8Z2aKwzBKTtoXdQbo2cECNvVCffuZP7V1W1xStuw6Degto6FFMyFkxdcFs7",
  "key5": "47zra3yuQnZ4aSJaLf6Hr6pfjEYKQ4PMGnUefiEqpVjatCQv9EJSEL2UWFwjw5WyK7kFotAR8q993sbGZje6JYXq",
  "key6": "u9YZDTBqE8pZJ2QosbAdNUsiaVuTMBLbm5RJEPEH8UZVP6AiZdTBghcnKJNkppLQj1ghRbUYGJTPhXmvczoCHUB",
  "key7": "4qQCog46j9wu9WzHVzdwY52A3PzapPES18fQC8wkCs4RENjCfGKcEwrit4NQMBcA31hGgrxyWTA7QCbTxPUpBQFa",
  "key8": "47zEWqdbWP92JkojfxDxrw4eKE8CMnNh2Cx8YtuKrMq62aPFpNRToCQBA2mpxobptMzt4rf3tyJEvUppTtdEmPeY",
  "key9": "5PPS63dQRikiwTNz7rcF6ijVVPxrZdVnbxJEvhMUJrQt7GRaaMR2kaD9KRneZeG2xPB3mzqWk8Q2GT5pUNw3a4Ud",
  "key10": "2yWTKmsEVZVSmzaNGyM7sipo2LT8RPNAZkKigdn5QbPPMArbrpqMs73DbnRL6sc6uhbquUcGVv6MtexsfSs2nzwd",
  "key11": "55sUz9UA4Dfq5jg5DukLPv7qpEgMVWetGuKxVXw2A5AkotXWKwGoXhRzg92CmNCJCyrE2eJ93Yd7YuBazyP9gDFJ",
  "key12": "43hzYFdQym22UXsw3M5YaDJMkUVM1FTAfqpqK1ALsdeDWUW6Ks2etr8vNewnpfACVnBVqvkyQ6MtMZuDMQKHUQPR",
  "key13": "3b4as9KGfskotHLCYshGmqx3j8DAiDvvcYduQvijFjavtnh8xVQkXdFfmSwWTxHoZkfpzb9RQGjLiTRRqQfbVNzP",
  "key14": "5yPw4UPfN6C1VH6S539JfnrbbnFukDHPvwC9ru8yHYun9YaG6sYWUuvZYjkCW12ccYCrHUtx8RjxQiHXpiVzYd43",
  "key15": "4a7k65vwQUMYadPv6jG7PL2enQ3HVR8S1ZE2KdpCARWMe5zdxTbcw1sU9e8CDQ9H9cb6ShgXG8TZNM9Swb5qWNs",
  "key16": "5bgwHBeD4Zqu3XbpxFmVCBLfvwRXzuGFX9B2uvkVZbbY8uqwVBPDFR4YYhCZWSHGQ9kTneKM3oTMYrk5ZPGcuGhh",
  "key17": "3cQm65ZUP9U6QKkxfP46Hoch8PZN3SWn6yJPSvf63ziyZ5vjMZC6YrrrR9wFizsj1HUyADaNQUoh4qvfhHJwf7Tf",
  "key18": "257Fnw8zLDAtCuGekRT9xuMNDkLo4vJVMcos26WTeKYon3t2YSSGGoaTANZVKnEzxV3bB1nBoMBnGzQZrxwJTp6y",
  "key19": "4PcLAuqL7o8isYSbagUsMpSry8s2byyJq2UL5hmsxdwXHW5BYTu5iyW3KX6CdNTF3n4EMYjsjShZG7XJtGyKqpJg",
  "key20": "2izmtXXpC4RsLh39qERhUMgGhM1Uvxk14gCSZcEKvbRscp7PQGEmo1e2UEwMbMj1trdHo88TuWZczxmXsqmUVUUZ",
  "key21": "5WpgaqKkQ49amU8ig7ENgJ5GbVTKgarHbVPFXwbEhwGjNwokknPmg8vqZXoBt8TBM2N8vLpjojFYqHb51VPxke7j",
  "key22": "3aQZ4azAffp2tXYLQbJPwwjBksh4UttYbsp67XWJcYDWRaHiLYD8uKUdNzHLHGStzdtqzgd9VtsCasE3cN2pzdCH",
  "key23": "5vLM2S4vCY2CzsYaJz6r6AZZ2L6satudEqT1P9ft4wUr72kDxj5UU4tq3Z3Br2YPx3MzZwJ9U9DBWwqJMSpCK7vD",
  "key24": "3Gq1wsu3f4an2yNNekVto59cqvdGqQLfkMTNVenG8NT2msKZRtLbDDmzkTKeAiodtBW5maGPx7ESBZy9BH6fsJ3D",
  "key25": "3KoCX562e4rp15yzSxgiZDmz2TfdWnDTda1xVgkYF6vxSwxk2ucwrZ3M15NSdTKpxy8eqVmyyGiSd2ZyYmt4DMAY",
  "key26": "67TWRP8zpH96G9BNC6ztaf2zw7oYttqKsdBD8Z2sjQHR5yU5S8kvbY1nitjNrfcMVV3KUPRLHPBov4fzxEZH6UVh",
  "key27": "2EdhGm3V32UUfFiaTggWLiW4aiKLvwTP3fYh1v7tnyXRibrQFCd8mAVFpDtqiUoPkxgqWkPffke3tWNnVc2vFYDe",
  "key28": "5UUhmnz2bQV1USk85XASyiL6XbKe8Eo4qbnqTQ4RWmdMuDKTdozYZaVtV81D9bvLBT22oLD6xUCxeAGfVyhJo4qC",
  "key29": "4GyJoLmn678scNPrmjMwSLb2yR4aHMarEQPeHsmfthvZ6dbH5fVmS1eGh8RzdPRsEiPbwaRyovMBj9i5U2M29zQZ",
  "key30": "ZVA5H5LRWhA3JUfciksZoTEkTYvDrXnDiFXFx8U8LzQMfMLgC5Kg1W1qo385LiQtUFvDJCRhifNMa1FFHDzDqna",
  "key31": "5Cp4NKKS63nw2XfpCBWGbu35Kggxxx1TdRQXqD6sBTsCJUUTuJ3eShbcevogSX47PSXULwQaH5SvyLbchgYF2zpq",
  "key32": "3wAL8sbEGwUBu1PwZ8aEpvVhxBjyieTRp8vuGMmLXAk6E4K22xv1D69g3kjcFsmzXamFz7RbixBria2k1rvAvu4o",
  "key33": "3knCg77wjmMgKAWqYSrS1MWxR1w7PD6R6qFhnHTBGSm8XESEjk85xwvRHWXesBaN6pFvDTB7fZcgGneP1XfTRNec",
  "key34": "caudHdDXwdG7tC2AeRWjHYvip8R4e7KjDLVV1mYbrRaZEJQy35kBTHyuMhcqFZvPCxb5tfxde82LKxPxw82nLB6",
  "key35": "5TzMVWw6aRFwo6nq87KJ3xwxyTMX3XBCUMTiBPz26GbapUSZozecZY6NXpo7V3Ti2LwUptxGR6QfAPG8F8XPnzKV",
  "key36": "2vhsCd5o3iUkRyTp8uHy4n3D5drU9R2kpkhpaFa4vJQX2mx1XDDkw3ga9KfnYr3tdW4Y2VwHmvVYtTXFLszX5wcr",
  "key37": "4n5AHsAq4fDEvxQokuwB8fQJifWwLAFmcNuViCkm97Y1MrhVEBTo5KLsbHaB3v9XshoTyrwC9KW2daoZx9S9GSy5",
  "key38": "2dUae67Ue8GzqKEwz9Uz1X3z8sVeftax4ak59Fn21ZU7egjcYjy4R3hXXcYpXttasAgs2ESVH5pv9VLtaD8Ecfyx",
  "key39": "3zzY5ugdJZRFF3fvTdh6MuusJzbvmJgCAAee9Pp5c9NzzsZQPFravB733n7vG2W3kB4Pt7GEgYecguV5VuBTbsVJ",
  "key40": "5ocNB838uchfKqS6sfhvGVrpACXZ4eDwPvH4HBvs5fTa6cQ8eJd7qKjQA3HQbFN8zXJ1QQih9uuEXKMppXUdk3cC",
  "key41": "55fKW3K58jnTNbNwucutpfupkbwceA9w9AuWAbRyvxxwC1emeepn5BRn5rtz7B4wdZAQPuwLh2LvtmsebyCSdv5R",
  "key42": "2Ng4bXQoSidiBXkRoQPidSK8HxGmV3VaKndftMpEoVJWrTzF3yhCHUdni1tjAfjeayBNGMT8FHJY6z8cTeXjsWie",
  "key43": "DUnzgXyEXcfff7MkRMjkqTXHD4Ac9W7uY1tq69NcF2RLycetcGvU2NacGLdCaHdEKVPQ4Q9Eeq9y1QmhiQdiZCq",
  "key44": "qQRaftyrrcjWnpeeQGZdihyhdd5zu5ZFu6d9YdrCjZp4u5431Ri7wFLeNxAEuLztNna3pQBY6gPEonrrYJpwJo7",
  "key45": "9wWaVaazK9Xp7A25nAvYoFLYBWTMqePURBEWUuSTgRPkaCWjkQsNLCEr4WD4UBDCPiTcJXjX2L8bMAij9xJjibY",
  "key46": "3eBqR9pXCi4xofgZUri2Z1sTJtJUXDAkNSnvAncPt4ze2JMab4gX4sBHR8fuCkqisdFjgeUnBpGMB1RbE4y3M5fJ",
  "key47": "5bi62y6X5JQvocdGhGiAJsv3cRFmvqdoWLF9i9qtAuFDXMVRvLGPXJGmhVqXPkg2sdu8fGGjRdX2SfrCp3Rtu7iT",
  "key48": "49pWyWZaZFXgC4QRXC5rdnwvmemdJRbwfVBxHrtButHJvM5vZ1WBPxz2x2yi3BjUUys4ZDy9w7r2akprh5QcShvE"
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

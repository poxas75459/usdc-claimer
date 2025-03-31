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
    "51Ux1bM2S9NbkktE7Ss1M9qRwxYFdAaqwETpVhmjXkythG9bpKNGUhHZkTa2JLK5pWBsGShvTiSttYdhXezvEbDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aE7kPFUezCVryges5j3PP7gAMcqaiFAMuLv9RaGTLNQqcHTPgiFsQc7KABza7uvo8FVpHZsynpSyfuUUr2sPJXo",
  "key1": "2dSp8npDg4pHaM3KSyny9RGerXLLf24PxZU2kYp3hJBALue9h5WCQPaYz8PbnsJoKbsVq4m1k9MhycpfSucP3G8D",
  "key2": "33cr73nYjTeWWdB2bAj4uVhiJVXLqSWkEuiv9tZpwSHfs3DCdMALb6EugLbFSRnv39TDHVNt3FXnDgWZm6dYhmqd",
  "key3": "3VWmFMdqgBTWWmGnVCSorXD1gqr2H6UKJbEDo5paNEQLEYyUUGHtGGY431XMc9QZ4Ern9n8FUCtkbCmxH2oewwwg",
  "key4": "Wc7q4HS86WsHr1LFudvZYwSZzMQddrJrc3E46dV3GfD4kw1AymNuzRYCfBPiATdbvVu9mtueLdw3zVpX4KdW6to",
  "key5": "DaiES82wpVwvtWY1zN6vsbX9AU39PG4P7jZQ9E1Kthq3drEeAaKLZtdPMZJeHeRnV3VCMZyYpcrMihjvpnc2SFe",
  "key6": "3vZj4AfZYPayjXcS5zTtGp5y781XdjA869k1ayUisSsq7Fr7kZrn7F28aJBPcnZSgWrkJUNGiuc1GaZG4iSvEbfa",
  "key7": "3nV3uEJw5p5XAVxTu6UAr1eHqUwWqL6UTh7w93wbnLv13Y2s8Wiir8HUj45XB1po2MxBjGzT8udnTj36toKW6JkF",
  "key8": "2azPp7hmqM2xnhezAGtKnTiSLRbFQQbq7yN4sDHU7yfLa57QoVht6iUcKgda9EkhfkA2y2aCQVM1t3jonfyDVh7x",
  "key9": "2h78TpEQEyuyagDisKbynRBGU3DR7GNNbMYZErUGsf8c7hHSqEnVS8QyFb5rpeQd4Msn9jJ9bePXFgrP4VWBtnem",
  "key10": "515tKV9B72uabQN1mRSFkdQB9TFRWdHwqwjTd8QUDa1fcvfDPiVRSaCcCpcxx8J2dqRRa7ZLYWepDoRgc1jKVyZL",
  "key11": "39PUWE3b1CDUseMuWzL3FrAMDvgCb5r4W8nhKK8WNeNz9FZs5PpFxqVNqcihkKYBmwkVQV4HNjaFqgB3y5mVpPkJ",
  "key12": "5TZ2aZVJ6Lw53GFtCz2M6tWuqxtXji6YVKo4UdtAa8eVsuVpsfQqRESiU51HVwofwdgNVTSGXWhAUdvueizERFa8",
  "key13": "27t1kYVK3pYC7ToGmsFBoLMnn12zKmK8Vu6fuv22hkv8W1KeS46mWCFTBwHomgEGKyBixYx2dRingtymG639pJ6b",
  "key14": "2uVBSVmkybAmhbqVrfqZGWkWjwgeqkEZwRm26NELiaSyxCcsRvqCiEiDhPHXwyx5ttxnoqYZCWsyKLk53dZwoUtA",
  "key15": "5WtXuCSKZyn1GYU4iLh5n5Sk21JNjeLnDaUjw3JQDX5bJ4efHfvJou8mrSXTGU5WLcVbTLpqRphgTxygzwPJZbDd",
  "key16": "4u4PbEQzhmuU8Fna9y8aidgR4yxxQEwoo224kSStWv9wxHiipYqqiD8Vs3n6QSQhHSHPhrDsACUqovhur9ZhVCoq",
  "key17": "zbJQTYGVqcJ7gDuCzTkQ4GDxbhUKwPQdLgSWmgMa45kD7XNcK7L2a11SaH4kVttnQgYb53yZCyVK9c8SsK39Wk1",
  "key18": "SHvtJTq2YWsdQSYAy6UpWMVEihdMPLYoxC2dgPP67tBEMWMrrx3brGJtx1ZwPcwU7AU6L1biQt8q1yhXZvNtBPe",
  "key19": "4HRQskbry6dL5yRitHfw2wEsa7FVThY1iaCyeGpjPKpG5KVMb1kw6UCep1fjvhVyGgZE7xr3ycZsqNNc7ZWJ1njx",
  "key20": "PfSURH7NrCDm3sXY9ifRJAqwLXNo9nyzDsqKTyL5yGQUTWPwrXdLtTtx7Rwhycjagvo4EPLqmB38fRHvHpv2i5d",
  "key21": "4gTS1zKoqUJjsfn7ksmGaefQiRnnSmouHz81Bbh2HWQ1eCQFiN3E5ECCSLvHzAY2SjQMY5CQAtvPag2RR3MEPahH",
  "key22": "2p7UpGXoszYm9oG8ZP1vpqwNZ29tfwHpeULmfsYumqfUZF5fA9dSHyaJJ2QERCyXkj8pu8ipDL3Cm97ZyaxGs6Lw",
  "key23": "5t6yVfubPMH1bVmYaHW2SrLPtmfi4sYGNFyeLFiWquoT9xHFeuMXX7qc7XX57U7isYsQrbczXaCXmafeDoppmmsf",
  "key24": "4hv628L6EFE3U8eCWNYP3mqLL6MvPe6K8i9eiRwJRk6eRd4KscrutsxrtZZEu9VswRn7bsRR6zgyyhgZe9jmYCXe",
  "key25": "2tB67H9FHfBex5mZqmqwSqpehGGsfU6Ctd167vBusbGVrTsAGETfsZ2BxUUtEsDoDW2deogkH6eBcqvuarmGpzFC",
  "key26": "QSzRH6V1oqUctTKCwQw8HthF2Q5XQSsHtV9VmRgoPEYGHzdTCoTdQFMeKYtj3Lmi3H81jBLjodRmR8LMNrpso2q",
  "key27": "2jbkRADiX68mftaciAa6XgE3LyWZGzxRGDqFD3Nc6BCShXKLqLuCzrpTrLfRpsHvyHby6AQQQKomqeWLJ1RmNTLP",
  "key28": "2MBqzEEx3Eweu4oDVxsPFXnjdS27i85DcRcQj26LYTNSurU6LBiGnoT2zK8pD6JHZtzQpqcHwfJDrDcMRBYSsi7e",
  "key29": "3W5VwVYybKaAp7UAQPcdfYRaB3dXfbGrMu8cjCJkY8hF91ah45HKVpmYU3uoyr66pkPszAYtSZYfcRE5ahwAeFHd",
  "key30": "37fvMJuT3sJdSDKcQb7wiDsi3PZrEDGru5FJfXcVUFRbLjAWqqwv1AG21ivvg2geHY7i4APzFctqAWjSBwMk1o6v",
  "key31": "4Tbot3Ab4RD5Rqp5i3tiLUtnJe9CNxC4ibA64iNdgK5MNiZTx4ptYLGJtVXHaH71SPFjYa2RiHrvmJr8718J5a4F",
  "key32": "2bVAjKoVggJjQQXEFPvvNKu4VMxaRgvmRoXzMLbJ3776gYVMfs9PFom9zgUsj2kDXsxLHQiyFJHhJ89vSX1tfPr6",
  "key33": "XEhgjoSU5Vi9nVx1iut8svCeixphVeJyywCWboifHe77xVLgqWwgWZZtchfAoLUtSPbDTawqxLY2sVFHgcXoPTT",
  "key34": "118UcPqG1Ze5CpWubTvnGp6kRgwhLmdWkfWykBqX1JivSFJFNReHSE6gnWHHNWTjQGahEMiNH3BC9iqtsTyj9Uu",
  "key35": "2oJySw3j56ALQSgqy4Ti29N1nq92sC4tsrrSQm8GGPLNMTGC8g8PYdysGVkTCPvmJeprGXbv4Rei38v82uGpZ46x",
  "key36": "oqNcLd8ejnRVWSBzJjuFzd1KVJzwb1fCtaeBCFACGo1P1Z194epm9SsCSUBRxKbZ5R2hdSSdJvHLom3Bre8sdfU",
  "key37": "2XwpQahExmJSERGdjqYyjhyCu9f6tCyrjHLAFKNbK84m1eUrT3KgqYETbA4mRQ47squCRWomTjwiNvTzrzSNmMrD",
  "key38": "4n5dCDqHA97dtUVt5q92WiEPZj3MGxZ9dQzd9UgmUt1ucEFRwtcSJVDDwPjn1jKA4WjCxdRaycUacwBFX2fxyhZT",
  "key39": "WmaVdSgjCau9Y5kjvVNMGT5Gw84GEm5B5gYJ3m6EPQpemcgriP1q1kkunTtwtsi5otj9piGWoF8P8ZJ3nqcSJXh",
  "key40": "2unjNjS3KBBDTmyWrSGsSRws4zNj4bXtN4EvCXwmEmiR9r4w2hJbqACP2MwPe2WTZTNnitWSPXoxysJcXtGDALaF",
  "key41": "RXUYJhVTwpWC7dh3FmrBjL9sEisQXRq85oJEZmCGTi1ig7HLv5wvUoGdyWv2CCBgDLdbr6hqcMyGBgYMtwYZNk3",
  "key42": "3KTkDwCHTuGkMMz2JqYh9nHzvA3TqmhiGFmeDmWoLDkAEBdpvfeKaypyP3fDJ8pdLBxq6Wm48C5RRdXbaL55waKC",
  "key43": "5eaRoAdaKfaRXodnJFkyS1qCNeiCkbmXUDYMCkjoCXt6uwER3BFZZ2ZPD8NqXuXE6TcVrPGo86YXnX2vkQHdoFcT",
  "key44": "2YhK43q23n2bU74n8PxiyG9hDnR1TNBqg4o5fG3iktVzQJ1rkhJqWoKvULnPVxDBpS7hYkAXT4PY2XBCqLn2mqRA",
  "key45": "3AcRoMwo9cGTBbtYURNLPbWbFFxBpjBUd1obZ1oMqJCURzVmbKKxeY69VhuTzwjov85pqGfFPtqCuCt4yBWCPfAv",
  "key46": "3a6eZn7crkm9czp4DDtVMrZdqTys7Msub8d4KoFxfTUXmxrpJByoCZyprbHxsrMA9mDocq2SV5w4xUzmJBkFJGzw"
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

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
    "534xieGtXv56ZR1ucvXhUxWYDa4BYLuxEEWDL1ksRU6T21XyArcb2ZB3APHoEoghtxLapn1sVgnAxH5J461xQpWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1VGqgHJvp5NJ9uXD9RMFmc8urnACi1KNkVE56A9Uw34f2UuJUAKZfgUWw5GsD8GkiSRQo4Dcavttn8wBoTXebv",
  "key1": "3jEpZ2BjGzwpa6rZVoHhgrG5d3AcvM7i1MATAzApSvtEKkHkpULcRfTmZWKcTtXEJ1Seh7U88g5HH4hBmVH7qKHh",
  "key2": "2sH6fgCoRqpciwFmkj41hYX1fvKgCecPiQhFty4uSfrL85NGnCVuwY13nRU1nNbVTrEeUYiHrY3yHdkJAzJXGcRV",
  "key3": "5sZSGWyi16egDYtqJqjb5bkG75rc7fJnctcgxcpn1iNvVyQY1sgASpfwrMMWgyDXqv4safc99RekUVPNE4HzDAn6",
  "key4": "5MrmUUX17xmP8ch92TJHdpSekaTJpByGPayRCJcVhYENUybAYrzqPKzLh9hmJ9wiXghS4P6Fn4ze9AY9BceFxEfU",
  "key5": "2gAUf5j19ZaC25Wnm836iGu478Z6rP7TkxzfQ7vxHzmFnqZFj1kq5CSkSitFmRvLU98YNY2rvs2xZMg5KSKjwmSb",
  "key6": "46XjLGd4Z6PFvH2MH2Rd73M7xi8a3mLkmYeCp3D8V7TudeGiYKTDxBL4q428dVLeRbHXTUosPa8bocucxyvotGe6",
  "key7": "5ycthJgLJrEXL13Ledzhni39cXXczeJSvPQPnHcXZkM8AgpBNLrPfuPtQRoWuHMgba8G2DBTzqPoE6hYzTSVvYRD",
  "key8": "BnNryQqhAzELa3v4cxty3XSXJ5asXRYYQZVRvZCD4BDDVEqx3b8fuUDVn4vRRWkySLQMiNGgR83YgDLBm22bosF",
  "key9": "24RSN3p2p26hkEjbwYBd37BnyM2PTqGPVk3cn12GeuYcvDgZZ82EBiQ7zmuQ8CCvEnNZBy5JipJUvKyLXUBoBcgY",
  "key10": "cqYwe8sCA2dbVEWE1Km1wJxMH9PvnN2TfRfdk1nih9DbJFZdALXwU4Cb3DQNDVsRknUHPBSAE4Cr2wrwSY9ah2q",
  "key11": "5ZADUqjA57pyMggHKgayBmbzPeoVUhCzQzY7egiHVXHTtt5jQYLYu6K7ENUETg44EMYQjj1aSLuWCbSM6fLRqg5m",
  "key12": "3fKLoMqnVkwekfEeGhQc3tYwMTEmoGcvDq2JY4kpCXAMdtdtnYjfGyRasGdqPGLpeeSmdLWUeaJHdgZRfTi1Lp4r",
  "key13": "4TG9sFhYq4kscUePxyFi9txvJeaJ9TNL4hzQMh8LHnQenZJeCzj86tfA4eRAWcU6ZvrURP991Zsf6T7qDj7EbGJM",
  "key14": "3qUup7E523t6N5G7inookWTaUurJ7zHNDZMjECVQindQcnnBjAVbpG7YyaNvwr6EriQA1SCmHRmUXrhY9Df7YRxS",
  "key15": "27eJ8XyYAwudskxqQ5fpkHvshDdY63sndTaUfbHzcmJYjLGfn5gPXkys4crEYgr7hzk91zrRUANrfRmVnt22B7kN",
  "key16": "25rN4wNTk1NW22xukkgzm1JgnwhVwLoKJehqtC96quxkQgWN9FmfQc5QtCCjjNUr8arB1vMFi8gPRjM7rY41fobf",
  "key17": "5J1gYDGz9xnabPx1azh6RP9mr8dreKLNZRdpzSoKdan3R49zGvNDrTVYnzFL6dBfcYcmYDZu29CAWhb3iuug1tAh",
  "key18": "4fvYy7QHtLV4vaVye1j594KH5s7PCJLRbb2juBf2nv8WeosWdaNzdKhB3i212QGL4ejPfcgHKxnbhri6Ew78kk7V",
  "key19": "2MBnkSx82SnP2RgjuJzSqe6jMvVvFTxF7pxWoUxVek4b9MWRUbfHZfpz2bjM2QotFSXgdeAKEqFzzx4eA7cvd8Cz",
  "key20": "3LuXpfc6fC3MsgZ7jAzxB1hgxbcsLdbZkDPGDHnrb6s8ZkjrHvs8a34s8AQQEpUynTnUWDdnQVdUKykxPsc3L6JM",
  "key21": "wQCebGGCH3E4XNNhTaMe25ShskiPbuByiJHpDnueAwXex2gb3GUP7SJpn5vY3E6q93zDYLFLrvCWCDg4sHJ8RZn",
  "key22": "4aBhRAXW4zRw41yJeqaqfqJxU8mDghGMAG3yijBPpMVoJouzy15B6coPr4LmyCfQNAN8hV9u2StFx7VYQtAo5ZBE",
  "key23": "2NzYvfEx4YfZRPowBVq6w7G9T9n9ytfgJWwkGYpsK1momYJ47zNwtShKevB8WT2FZ9THAc5P5U1oxLHyfvCQCaZP",
  "key24": "65b3sTXCw81CWgemZHPHrXWF5TdvqUQEcZQDYmyrGQqWzhdZDZkpFPYi53dHojdaj9Fw3fbkS9MqkHaNw24gpRhc",
  "key25": "5ap9HSZLKJMDjTbrRZvHMeH8nfLYc9XNpJo79VDZz8Vi2NmyNiPreBFySPJTwvKqRDrZQuVi8ndtRX8cxaaQEt3f",
  "key26": "3FHxwo4X8ZxDtDgLV1FNDiRTGv13xZjD5aoAcbz2c4eJbXLgTMMYD1wV4TPM8SF6Nucng3TpyE4pWHWLpP4vp6nY",
  "key27": "5JZZsxBCoqNdq8fiiHjm1swbbeetnA9hRHupho5846cXsC548xhagVo5mnmTvJtW8B4fCyVNRpLqb4TeVaVhdcgX",
  "key28": "5A7RkEJHNusfEgb2HmsbGpVhnQ9Egwykvsa24QoD29ZChHoUUHKxNXuGUKbNf2jt3H1KXk5MBGC2XsrFxRMS7Ys9",
  "key29": "5fB4aPAygccGrh5pNG1B9fWzaHK3wuzDTv7bdyHSQTjqopN52FLv7doS8aRNpyqgZyFvfDzfWGg5svGj9Zk5dqAq",
  "key30": "zGz9etDweNU6bbuSjLotHL8yh4ef5MbFNA9eH9L9371bbYj3Gxk5Mgfpajomxb5oa77geywZATHgn61J7sSL5oB",
  "key31": "4bajQamEhW4mseZtyaMQZRakLJTV4PQxdZyhDug7CmLJaMhS8DsDG55rSVFiKGTV2un6XFG5JmmkEBPagBqMimHu",
  "key32": "5YohWsxiV7pB13YbJ2rPVwWUXc5Jh6BAu6pBBzLE4wVKRnrL1ABa4vpD4KN9h7krStgYzw6rQYYh5mBsyXsYYijD",
  "key33": "3yz1AEkmdLgrgwypZQpzefbwRueGRoPWhdoTPd29Y58uta4KkbxWKtTjTJ6Fj9q5kevMqeZp2mr3GADv2NumnBPq",
  "key34": "3UHk35cv7dNbAhJmg1fzuPCxbfcGkBixznBpgxLpeJHPvo4huUYqQCx9sWfS3Uw64JwRcJR5WgaA3FgauHnrrkMG",
  "key35": "2iTtdbL5vKkFrXu46U3VA85fgGMb27DuADBiji33dSBHLqKKMhoQwkUKZCQWKg2pKLdKt1Swd2DbhwWxMipCk9fS",
  "key36": "2pjgtxKHnaVgSL2vDBEdqXtqNfjsmGFR6U8kHnGLiy6kXBisB3g84pH83dwCz456VwfBxugyVqHWonHxFFcw13ca",
  "key37": "2gAe5qBmuCPs3iAbJ9BTbpJm4RcXt94RMw316vVWZLpLGmzcWVvvGgVDZsxv6ZqhhdLdNbXm4F6bkh9Nc4RjobqM"
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

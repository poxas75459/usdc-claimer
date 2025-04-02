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
    "5gcuozBBfvxB2VVBqLFmyAfgsEXfGWyjnd8WPKeETJcxnBFSG8PjbLTnxopMFw1Qs6kLAxU5f7ToVaKvy3mZnS3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sEobDDQzXBcXp7EBaHcwG25faaxCBftKwfSTwdCzZhsm5R2gc9tUCFpmMzk3YxbTy39csFie9x3AwanBgbYDXNS",
  "key1": "2u3p1wYzCMU6z16BfCPE81zBDWy9f7kiw9xcuBJARCKbzMt17qWWzhYo1hmtWv8GyWL9qkaawcCHPRpNoo5b589h",
  "key2": "xRZ1SdUcKTdK7xoz51Tq3DdwxxDHRh1DcwyLoXabhSaWyWGs74RU3pZG93KAf9SKNvCubHyuPKT8m5MN5tQwJUh",
  "key3": "yDLwvqmAUS79q8AbYFz8wu9Q8TmZx3vA9DUurVoTYezwHLpQyrAUXo9HPjdaVRXuDqppM8tdnvFymcWKjExrogH",
  "key4": "RiDsETnbTcLPQQGjrNT4JcM37QnWTt4hJjTdgpHGgE1efZ7bCn2YPREEBcF8w8fG8ggB4zt4C61XYsMKcXHRaoD",
  "key5": "32LtQ2mBkrTJPBKd4YrcLFTF6kTa9wMLQQqf388e83nQymQwjdtd67ohzXZB9hkbWQpe73yKUyLoLXwC9eGw8gih",
  "key6": "2WcTfciyt5UtYknZR7rNeBhBYjZavNLn4628R5eyn3vqzcEE5xsATYDRnv3v1b5tCV7aKqVwNx9EWvEJFgPUHyuo",
  "key7": "5hFANcDZRXqtEQ3AdVj9Z1ymfEXWZTiFe2JbDBs4DuA93xTKo6QqophJpvD9eeC4D23qru5zWyBpQuFwfKzZhj2e",
  "key8": "h6Lk1qUoBBznYJWhXhJjsCDkGW91YysJhDavwsv2crBjCJbCFixEqAWn2wbggTHfFFhJd5SUMcxYdxEfFc955Yj",
  "key9": "52C5uZb9qs5dZB532WhoN83JyQya68FEH4EFAn7uhzfEcUhoU3wCKitryytYoPLGgTquWFf7ivjG4pbfFWtab6PN",
  "key10": "67ha3k1WTX4ohuvwDnWtWwMP6wKLNCEzx7g2qrRW4VEqX8EVAdrdehkQTPNkXW44uy4t48xhwmw8rJS9NwSYQ9dK",
  "key11": "5DUaByd7Eaw48wrtnkZRmgfKf5t7Bs8tdEoHt42z2a4st1siMbTWFQZ1yih6cieH2NnrbuQdYRjQa6MjMZ6ZqB51",
  "key12": "4tP5KT6gTwYFMtZWRFd2kbRDBxbbwxWSMgNneQZxyVg7sWqutBx76JqHxT99WneTtGViwpBkm5PPNTbxd232rqeg",
  "key13": "5WXD8mQ1J5xqvaHwrLKCqViuAayTaREbinqwsbZNnJzFwE3guRnVzpkrUNtEjXzgfRMskJ9WPFWz9N65tecM1L7V",
  "key14": "2EBfHWVQeCC3HjH3x1436gY4o2qXNZmLimdRtVHrx9NWmSXPRmrE5cVUTJVsZHmvKkELzu7xjt74nWp4ktexmvro",
  "key15": "VknizQQAYFyJjbGtz1aZ51UK88qeSQ4WDr8P71aqtpRc7hg2bbw9HAyXFxB8As9JdQNqLgTpASzkguBPTpgdjr3",
  "key16": "4usNEbh7ZaZHyozteJ6579ydTH8bEzPhCqCQsnNjpNQqqB6VzzQ2U95kP1iLaf6cMGHwZ2p55FznZCeArbVt3Nag",
  "key17": "2RbeYCHnvhnML1KTW3TiP1QbX1DtmtnXPejuKRET4mzVYFVvweo7sPU63sajhYZ8NAvPz3StDGTSbPz3isCAc9cC",
  "key18": "brAriJr3XGCRuhuQ8dxuZeaoV8fNtmR9xLfS5t3k7Pra4PaJvxC4Z7vWA7H7t1tXZ8vmTEgNCYJ34ALyPxAPiMS",
  "key19": "2VSohhFf4AXnA5X7s1xz2D2AgqSpL7VY3EKdT42f9uxxQCdCZ27wj1X8pfJrUavD9LHxcDdvr651JwPEZRQLBgJe",
  "key20": "CJHF3XeUAZ8memwy9aYSDkgHLN8Mck5YZU5pQZPNNuft5nGn2XYb91mbm3RKxtPVXcWVJHpJPdCWfzYqvf35w4r",
  "key21": "2VhZYg5RDwz2txCTZiuZCjPnpSSZRV8x4Tio3NoCbKhfN9GJwvpNEW9n5ia7RKyGE9bP2N7RujcHFuuoDgEL3uhe",
  "key22": "67DpaPD4m9An7Moho64Y7gp7r5u4jxD5QPX861HBv7xon6F2CHWnEYk2Wxs1WM9m6hyXBqPQJri1c5fmUhom4jFQ",
  "key23": "5Y1HC3UnEQww3eUcASELPj1zwPEr4yP7raakqUk1ZHsWmuMjFfVk3DE5oWHKcAjaXS5AKQ6krAKDmZ3G5iy5jXMK",
  "key24": "7ufpi5VtLepDAmno8EQHcKqf9DYJZhLUoAo6tN3LQPWbxdmriKnxrZo1RYx4ofKw7Cb2DnspV5yrd56jKZpMVP2",
  "key25": "5VxK2GLJWkum8qQTR7voBGnk1HcauwkougWMhiQAUn2LGxjRVHN1VqjPMGU3Re1bqZU4LE6wye2UtYFCj87AuEDf",
  "key26": "3z9w8LeFNCi9kVXuUDsPVNMowzB1RDSQoAyLP4gLLzzGLy5whgYTwzGKiw3gbvapy4ppAwHmGjWuJGjJhuKyAsmC",
  "key27": "3od5X3tGHiQfCoSi3C89RAf9Q6sSgSk8VanpmAjsmfHWvuG2qLP9c7AoN2af4J7rkH4hzcy3fkUAHRpoAe87swDP",
  "key28": "4mBJduV16aw1yRVye3T6nVn1we3eV6uJccoH4WT1e5ex6N9QzbB62rrNJBH8rwjqhfPCJwo4E3oEQZev4dhvFk1k",
  "key29": "kL4twYez6L2nM1zLvEgLWi9s5yGv8y1d4BfgG4EXr2ysf1dHBNp2Jc8VUYce9dshAant7WLUn8zezTkCuShM3Ni",
  "key30": "48D9idGuhwJ3NMhW76QZuRoHZrBo4hUfj8dvpySDMjGruPpPhTt2Tj31LvNRjUDCXs21M2oauTivfNJCoTMRouNS",
  "key31": "5vf5kxvVixMfxcZgmEvbnxEK8ktcy4Hvthn5iZxk8MbbDUwLseNK7VEMD7TqkZ2umq1qJ2qPT82uVpg27eCAEE7x",
  "key32": "55cDT1GRw6qpCq4uXsQ7PMFBzACLqCQiUTV9kFHazpf7yniwdfTx6bqGGasKo2JDbXQTWfRJhsasWA6RhGRvdFc5",
  "key33": "2EJ5qAP3HM7xkit6BgjTTfKo5qcjnCXHEExPCaDQg1J89vv8KkDct6Ybz8PAQJVkCoVGUwFyeN5eKgzg6CCoXn1Q",
  "key34": "5ihM2JiTKcdiigeUh6ibuGwkrcvK4avHjagk3cLE8w3mxfHjESFi3JHJtYjbCekaqzmSUNaNc1guLYG6JZysxYiD",
  "key35": "4DbLb43zQxStLTqektbJrQaY4V2Dq8XKBZsrjLJ5tTsG8nrAxjfJ8JzZ1F4BFB7BHVcS9EzfcTVVRBhJ36E6qbYr",
  "key36": "5irVkBnJ34KTYz6ZJzciT2E8V2pweVcA1dxvjpoVNugKbuzdE4pWPyrCXfcZQcvAWd7PpYdcEJRd2QU7NnWi16af",
  "key37": "2dKD9cBV9r2eiR9Bwwf72gyy5KEuABQ2zCRXfPUPAQa7GqMRP2TtvZ25jbjkBNMjgNhqjcznEvvJWkGLV6LeF5WX",
  "key38": "2FZwZcL4jMvWfM34Lh8F6oeKVbvwa1CP5qPoi4RJeoBhkJvzChoJhGyS899eaBLpDdvCieQ1f21j3NiBwiPgPmtc",
  "key39": "pxkvX2uxZfXvUg3LFZCsSuSjx8qABn7nfgoiZxn4KPXgdifxDADNEk56AZ11RC3tXufLK2z4hTSenxQzkZJ1RsF",
  "key40": "66sSRy3m44WeZbVgYbb66T3AvJHMZN119KDmaqiaKCisZwdXWqFi9GpEGnTjpnZQrWZZv1Nik31oWmThWBvN3VVG",
  "key41": "4Su7EcBJJVpsJSuJz6sfoTCxPW1vYTD31oQqEVuzXZZsPWzkpnHxLczovJCckCtwcLEnqeM3gY7McXCpB3JRtUbM",
  "key42": "eTEiCqxdCMK3Gt7ZScnicbDggnRHEmmLnGokrqcpUH9djEHygcdTAizE1PD3yjdBJYVNFikuJ2o6HfFXWmSbXFJ",
  "key43": "4BLueNeisJ6K9m47758wxZf1vKWaCCjuChbmEWhnhXUWSLCrg6d5kUogmHbSNbyDs4bn8S1W6q13onJ3s6Zj4bsH",
  "key44": "5oYpxX3VSSWyjSsEM7RwJ2g6fJAbPP5Urd4nhL1cDvP6UHWfarhVfUQS6FFhak8eUorQ89r1PpkJzaL4KtV2QsrV",
  "key45": "pijchYPJtvEJp1G7134hmzdELpRBaNa1NTVrjXr5RhYP2oNLWRWPs7ALiKZeWfEL3Y7oLQSrH6Jg8Kvp6yXKNP7",
  "key46": "21G5BzDjLa44v1A5USvi8c4dsYNYF3oN6D3UuwyyQRpoJCfrPeuRqPp4j45cJcqCSNxfVCH9mvn3YZz81Mq8iTDT"
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

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
    "2BYTHubGxyvfWCorQMzv4rXom4i5YS4nhMxgYraTgZL5Wuo8PoVuoehAfBej3rnw8VqNfiDdSgmvr6gx5ykVxsYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofxBr7w5SdRXi1MrASBMQpaacLrdmBvAtB4gbPeis6zUEgXv1KtWJ7QLyb9DBiJNt6quEP3d81cLQQXwK7xZdMN",
  "key1": "5kDUAdyRjeNuMQvUmEuS4BT6SAvLJQBDAGFXuHFkHQ6eH8EteQswjt38ZAqUSjvuzmp8xrGSBqPcKDbsR4NyLdVa",
  "key2": "5eiXzUiYuLcNEn3tfxZBRaRoNcGHLtV3nSvLuGrj9DTKVuBKs8nG1AnYz5CQtEEWM6twZ7ZJm97u9xbytJV9RjJ6",
  "key3": "4UwG9JVuE8LL1QDBc6gBgTVXCM7wbZ15sR9dG62nPSUsZcx8YFfDKTGc3VDvz5psLV1VbeT4DRFDWgfoJoWqkb6z",
  "key4": "1bG9vr6U54DGNEkwUTGVuSLx1U4v5GtKL3S3AeCVYsc6LcdTL36A3er1pz17RTtY9PJjb1kthdEmQRB92xvFtVA",
  "key5": "5M2SYNM7ZMNTn3KagGKV2DgNkW9j9b6vbv5RMtrFRq2USCWgXCiX8uHkKai4GHM2QCgJ1cGrteZyxUVwakw38wUp",
  "key6": "UmM3YHZJW9zB9ASqfaaz42odGWrvgS8EhQAYUwUZHzYjA3VTYGtZLRZjF5SxC7VXj221wzbPWLmpmD2tV84QFi7",
  "key7": "5AjEexyb55eNR5iYwJ52ZXhqf7mgWUU2zJtyLaSLovpUGeZ2eBn8bXFZt2uJJuAdug9voJ4Eak4Xf6Ni9NVgeZwu",
  "key8": "4joGSQh88Z74JzhwPzcCS3RkpxthdF19EHJS9jGtzYSSUWdPN9wYjwt53RU15HQJArJsYMaYPdSvVdV2q3DgTjo5",
  "key9": "2J7Yd88QXMCus28i2fXWPVvY6mDGXsSqhbReAmCVyYFnBtDiisSfCyGFdUoHajabwaTPUKfmFbFJFAtKUUU1UK2x",
  "key10": "Mu9e7zvWUs8ofa1QqeWbthQxmLQi7BXjdsyKmvTiaFWwXNkXAjfe6EPfPfvzGTi71wG3VDHdSdzmxLHbafYbouL",
  "key11": "42AmKUPfAHzhZ4nNXKgTYE3zW3evuYABZz7XG5Ejr8ZqbbjjM9uFNCPesWNFvWASPy1pSNeomVHyZW6cfC7bex3m",
  "key12": "5ozdG1pNg17dSEHQwo36YTG8557yjzWXgA9GGbGYD1D87aKbgbsnSSoC15Hfh6zYfRwWLgc8KwJNTcUj5sM5Dxk3",
  "key13": "3DgL1BdHjzonHLJT1ezUvZeUYSHFCH1UxymYAifpaZ2ziqybKz63oEgVqGKTbYQai3VFXxxqtUmHVrERkDK3ayEY",
  "key14": "3B2vLg2wqCYXdFd7D8XvyLeGHJ45kxYFhRfWEj3yKdsZ8zdDR5JrrJzsjZwjfoEXQkUXU7iR9qoDrNXVSKZM13Lo",
  "key15": "2zc6JnY3muEQBgB7C23m58eUwqcz6a5Q7YtjBwJUEtY69vWk7ng2nuLCe7Jt4KpkrmdK2HmcWdZM5ESRxySWBHrL",
  "key16": "3nGxD3HtB4cgt7mPRAKATJVSH7CbAYqXY9v6LgX1GtTNdTLCYBZ6JRdAtaa5e9WQhLEhoe9qRAfAAt92WzpMPi5h",
  "key17": "54Y9JSYrZVSKLmhW3bTixDyXgLpzqsPQVQzERzv7pQEHGb1JVuC69Gp54SAw5hHuRCR1mie9CZddk792zWVouR3e",
  "key18": "Ae5pJQ5367AZMmrF4THCqqkSHoKSBCwGWB1SsPzFDUABg9d3C5yrQceicPaqzSLi9ywpm2AzkJWDh7ATirkrVLA",
  "key19": "BcuupZqiqnPTnFp6BNFYD6Ekt3Dom3j6aYLhUxBTLw2ceiPKC8rq48dVWsUZaVxtuXTeGTKLyyGo7Rg2DhjFXgY",
  "key20": "38P4SCce323S3HEcXtPMhbA4MPeL6Mi3BPMHG2zqi1GgDyzGGqH3pNKtjPwFbm3qUE7xwEthiamMGSAZvNMCvrV5",
  "key21": "4tCwusUwMqAUW1dWW2d1ycuZ3FhdubmacEv1gTtfsyTF2yYPnyUu8tCEkCNNXJHxZmK5FfnZGqEnhkhj1qPW6rcP",
  "key22": "21hw1rg812gapuRJwJW9Nhen8di2X1EFjYZehrjhMieF2HeiLbuYrQtudJrQd7f47RsdiEX8ec9vLSfbtSDsgVhL",
  "key23": "4kyzRzv4bgLP3rsoJT5xv24mvr3dJesivVgpgLkWrcK8rXzPueQkezDaq9p2ug1wRNsKo9cUuioFUxPbpxio3biQ",
  "key24": "4tDCFY9snkrMFMUWX1vNXSBvor3PCtV18w1djcRa2kWDBvkwdGPfYNsL8pZtdwnpHHVc9xuyBEiTk72tWkaVwvjF",
  "key25": "2Jyrt9NJFfNyr3acoWCW4mnF7eo85bCsGU6oTW5KKBZGQD6PjhyR9ECgvDjW5kpB9ubKWeTC6s7kxp8SvscY5jqs",
  "key26": "3huJxSr6TjbZcs8jgXJKjRDfHtFx4giAkrR2MEUw6zWfqnXcRGoGeRwrp7zRsHWdy7DqWb2utVnSep2Vjz7DzcwB",
  "key27": "3meACv1NbiXt3rrqBgt7kMuAQzTW1DCaPYiMSmjuasC6ZRLgehRccM1AghHLFP2vx1HrMjVKUiffwQEP4vJKUGaW",
  "key28": "5phFnC9ZQz88XNDtvHfgVfDDNzwhRrXHnebP7zRxPQ4EZruy88urAvSVZwnxiJR7BvQg5ZvW8HkhwLvLdNvkrmds",
  "key29": "4KuTEbTWy3Ur1N45YJUiQ8Rufs14bL8ZT3i8oTPbyGYNWVMCWapqvABXmSYJtLmcv3WB5k7Cg9ZMSMUPfMFfq1Zj",
  "key30": "3rw91nkbvzjStFFzcaj3oitdza3rKgM2C7ngy2Ve3PwNazXoZeAzDud3U3v6KdeJEj7mwApstx2CF8UDstqy7rzM",
  "key31": "3SRKEjC1qNcd4jEfknkyRJ8U7dmSSDTvmoXj2XT8EEAN1i4jMB4gEA41aTS5PKVzErcU77LZLmo5oTNuU5h7BD9p",
  "key32": "5wPwiBPRy4Znnh7P2v3N55oz8iaGGhc98dwNToECH8s6h3PRiKmwNvUgfN2RR7jLkr79yg9k6ZuPNVUCDBxVEQAU",
  "key33": "4C5PSoxYCu3N2Ux2puMcDHpG2R7Mb7BHpwAsA4SVQw5iyKSnuy6zPZPch9K1YBj8Hei6vKhP7FX6AnuCxspnN6oA",
  "key34": "59FEwuDXrD3o3V6Vr9TY2VKgMsDDSbsj9FEPJ62YcNeAt91jw7Jf1LGNbdS8E4ntJdnq14n7qndACN41gqaeGvKQ",
  "key35": "4C12SY19txYN5gnz2AGTQQSuQjsZjfqLJYyDPxysZRpMiyudS4hiBahpcJXyMAwYX6U7miKMaFY1WEnSr2cK7JSX",
  "key36": "4DKJAU7tMQc4Bee1ZdLtpGWNDnRX27eTQsheve811BcuW4d7h6jxqvd1Y8ci16XQFJAagcefZnRMmD96HAXKKAkb",
  "key37": "2F35dZo2HYXC3f4bj7WRr9o2ZUR7yMBhWe89c93FnFpV1Ezgdmn8nXwhqtsT4hwqRQFTtvB2twDHzx8qEkSrdS1r",
  "key38": "26REghPzuFRUVUFpzicJtuFe7udUAMQvtwHBDSrvewa7rrn2Aymn5oPcKe31QLCmxNX9MJ4Cq8vfCE8ATZ6onF9w",
  "key39": "537ic9uiVpCZJ8sFUKqGUsUiRfHc3Gc9Rfi7KWFVyBFqXfwdfdJbgQY2JeCPY3og3K2Vq7frfmo3UkdDwEqaM7Yz",
  "key40": "3nc1SB3BAyvgSrs3Aka2MFd14afamRnf6dv3mATmwY96KsGQX8gatdmw9Eg9FEEzxGJnX87HzcHHCGc6P4ZxinF7",
  "key41": "4sEjxnpMLtbdTyaNK8i2bG7hEnEvGC9v1VsYDX6KwPjxuQyX1MRTbR2zzBJ7tDshZrBYHhw79Y4D1kutCuJJK1Wf",
  "key42": "b5f81CkWMewKVDo1izPTwtfia3a1RNK5qKnzW1vwRMik5RQjkirHVZXyWRFRFBXoRmKsonDR2o7hiKQheVZ3jRF",
  "key43": "3phMzG6SgoieYE1MsvpCGhRP4tygEBjwzH3pfBX5rbaBZ1yhxdeD63hADpvTiArnzcy6qh1kbmGS65DKR4xpDQkJ"
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

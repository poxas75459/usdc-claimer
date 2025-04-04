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
    "2c2E91EPR5d5WoLUC9u9hDKUUt2ePM87pe6DwtCntCahECKuwpkYW8M8X8SrFjuS2M9p66A8EwikhFLBSLw9DSJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63CmPid6Lzu6kza8v2ySzk2icKkgnHYputWH5RdsUyRA9WoGkj9GPuKhjgE7WGEjAWvEoq95oBSqXzTmeMMzpqpw",
  "key1": "4fJYCXZyCRp5Q5dZCVxhw39gQ6QPHPXCwMSZDL8EnbkxfirLBt46SjUPRLXBVGckbaqZCQyBe5KsFK7j6VVyVF71",
  "key2": "SCJKQGnQWTf2QKMywgAekJV1rVr3C8jwBguNvSqDwJggj8DJiYtcmyPbusZiXvZnRxJMUuRxabRpknh4QsjywJD",
  "key3": "3oV8pioxTFATBfPTfXNkH2zcSpRancr9JoN2xSwCWgnX9VUNqgg99n5GGREU488n9TFZCj52JGriCjdjKn7cRyNt",
  "key4": "3gNKwCLsukpLf3BM2qFHUdBWnhZpCBFxj7bSPZstiqjzkXHDEjH9ADT7ERR6MrMWRGQVr3AmTeonu2N7JDQdF5s9",
  "key5": "66rhQe25rv1mkPDwf44viWuTgZPWWPSZXQznL7yNWvM1CgVYvgdHj3Tb12vV2TKnuwa5zQsEEvjAgkjVFxT8Nr16",
  "key6": "3q2hs4gj3JigqpJPyMYFCjsChtwxAqWwGn94BndQPuD4xAppYHbgvdg5CMnvJjK2AZQrhL4UXQFSDYTd65Xmxedk",
  "key7": "4viYMqSgcDAbj5pSNUGbMcaBtjLQrnpQNMaWMpnNSsjwjzWFw6QUpcNWiTqUua9FPm1yQrAYs51H4oEkC2EWgwix",
  "key8": "3TKc4Rmis87pxRc6b3V1NkjGAfr2Ag8ZxYVxSwT1U31Qd4Kttb7nwiSDaSC88K3n1MeJpfwgamenkwMBVoLDtwaV",
  "key9": "vZ2waobUdrjRzZEtYTyPKx1163TTd6iU4HVS12ttQq74vck7tW9Qm6VD7EsD72BDmVqrpMfHhqkujgF3msurEhE",
  "key10": "3FrkYfZVWRMWNN7xw1jjyFGQfZLBBNgQWKgznPeM2gVuDBnE6xTFMBdURZQTdiz89JTPbWvnHEvbUVUzYBmxmzgK",
  "key11": "4nHKq3Uygc8C8iMvA6evYDicW2hRS2K6vELUR52rFSjvQ6WLKUnitpZccJH8YUy93ETwmz8YjL6ASN3Bgc4GA1qW",
  "key12": "5tx92bQPYP77qPqaGiJfgw9TEaS64Kxux3gg633RQSxBgZqGskv8s2dexNbPZmx7Bg5CTzNg7zR8jSX7bykQDDTh",
  "key13": "45tHWtSQgZFU9weDox2cNwjc7e3RvT8PYPQStQeNawTpdhaabfzoqWSPApL4HyFsQFrKvVWyJ36jvt48q1TdzF91",
  "key14": "22UfWHkMEA6qdaZMuVTgiRGEC5cu1mTJTSFskkfqFSXoHYz1GwTyWq3pwWhczkNgTFuiC1aDz1P1x2md1frvdrwi",
  "key15": "UmkMeLtb7vYzkKoXDzHqd6A9JaxNSsxgpvLB4EDyR8pF6wQzQLdcC4kPhNWYUnFS9NYEmAFo3pVWiRQpPygkaYR",
  "key16": "4c2zaNLfUEWaczh81PgARFmmk5HEP7jeVpwmUmaiJRV7dQcfxXrVjPgdiJbFPHZB2ysziJMY2HNNvwhnPGmMibCk",
  "key17": "4JNZmorSbHhhZS1cCNB62WuHeHnM96Er9kgwm8c86XbYDGcSQSsjg1NCkgncY6ibxW6dTGoWkovrNGZnpxR7tgTm",
  "key18": "zbyEQMLCsPRZQXPi7tKPqTdeKNPpkTm2g9a4LTMW7rrr7pg9SAi3uvJMx4ygkLhuMaWUcuG7AXKd5zzzukVjSiF",
  "key19": "gsjthUAU6fGZkMPac81jEAumsaqdb27xuGPzTZiPx1dHMrJwUZrrigXFfPjoc35rJzEihDB4HjqkLs1PZPuJcDZ",
  "key20": "3iikVoGfqe9CE4KiAdE8MELcwyEdiBtwe2RXEe3WTieihjPzLxckpKoTLboJMKcWaLqxWWbSt1E9xzYbexE2HfUk",
  "key21": "56Bd3141QLASBmWWtZKGizeRAf2rxyeLePSJ7GYLUtWEx9HUSZomQPoMCNhG5PUi9qKp2kjMaW2kxwN7eJm5iiro",
  "key22": "5SZkrXTRjWXEoz5oDRmNTMKe2mqGjbSUxZsgcgEPkCu1XCEREsWwWTCrPuFT6iJN9jHxFmQcdbHNLSVGQkHBheyn",
  "key23": "65o5H6yKPmhc8JeyrGmnrVw1NkDCEFZumnK5sFraJjBc82Jwqg74TAjBNw9vohaLTVtv8WAf9SADhb88scE8NLh4",
  "key24": "2BfGhYNok9UAy7hmmNRvktE8VmPdZdNCnvJuGcraDsFv8y6nPZBojNRpXb9QjAEtLYdph9w6GHXgB2NTJEVDoQGc",
  "key25": "kq5p7h8Awuy6fM2ynchUWsXrWdUjuDsoohUgqj2ENYyuzmE1L77evNnVrZikvT7QDU9htApYyAWctSLjjStiVZK",
  "key26": "BHzHiroJpWgrv58M4BGY4j2eK8x3sdTev81rf2bVKmLdHisYtGRkJan5kQt8xdqCMViCxRqn4SFtd1GFjMxuKcA",
  "key27": "3csNi7WJwob9zYzNSB3uNUz13czVqcMFEJ38qR1HKgMacw22L1FCUqkQWEVLY2RCKLFrJ4UKC2GNswhKjUpG2c3z",
  "key28": "4C9NzEPY9vHbzHvbEpQdm9kjKhtNanwzwVMrvWZsXmtucfKqXSP8SugymDCRpTo6Rgd2QqDrVmyphQVFyftrdGqi",
  "key29": "4JHpm2mQjkDfJmruTXKZgjKR5TbnqMJVAHpgofhVWFLK1GVxcikuZrrkUD1r75WoL2noCLhu3LzjjbFkcrhmcsJ1",
  "key30": "2pxpiQnNQ2ApxDucq1Xf2H2vgvcUTNCtYuRFb9kW5H91vkjgzGm1m7J3jeSA5od8oKoHpm5YKVzhJS5bhJFWdMLX",
  "key31": "uLxRiPLYNEfMs5oib7jdcMPW2GB56Rr7FZtDBoGJ4MTauutVkx2HYRTCTEJBRndDrpPbhYU3VA5FC95Q5a89Uqv",
  "key32": "29xSs3PiLbAy3THVGz3i4w6u8E4FpbdUZAYvDCdSLxfMa9KF2Ny7mc5X8YUtjSb7g1qbecwYEEVDcuuUUiezKNZw",
  "key33": "UaArWBwfUmvs3fzPEXSzFz7RhDUEqRTnVH3wgJBzAdynVzSwNFvLNmWfAU3jCvwR6ZQ8wE5XHsQPsirPR4NEDJg",
  "key34": "5Ft7KdZtn2P8QmqQJ7oQgcfjiHPyaYGu4TZVDMFRqcs6PoiuLPvvDdoAoXBTPp77tVy3b5GfEMqSKm3TnpKQTbf3",
  "key35": "3b7N8wNHoeWpkx8CVUVkqePmEcUPAYXTjDEqKmruZPM1Er8JR9KDbbgBt1KVPhYhCDa2BPQS248p8tkxy5SwtSwB",
  "key36": "2ZAnA6gF1Cr4kwKgvwcP9c1TbUjU1kvNzBUqLQqy6V5pbHwrXjzRhf67kgJS7KWg7x3jVgcritUMGaKeXuJiNa4S",
  "key37": "5CThzno5vW3GnLWH9QQ4AVMTeaS5YAjAHhtnsDfPTKhDXWyTzvJLjviqQ5pRUd85o3wEPhbaYeshD1PxmvW4uM7S",
  "key38": "DpYjyfUHpZRUFX8kTE5w5AM44VipCK9Kykhogti8Ao2eDm2jDXmikBosx3jNhnovqhtjoxDu64BCuq8MTuUaSUW",
  "key39": "RnRf3UhEkbu3vRLFpQ6z4oAFqczdQgaD7vRNtEvzuaXMsi3Y7gF7xVEHgu79C8Mfcr1VdvxsTJQVMFGSQffJzad",
  "key40": "56JuRykMkHTu8rV5rRoGCsx7pLZoggidXejbCtiRsuaf46xxkkDBcHyTG4zVRsJ8i9Cbj7kGfA3PX4cFrXXrFMKp",
  "key41": "x4vNCeWxXLZGnydtLWtJJvVr7ASjQU81wqcLiAG6pr5kqipWysu4WQKsSMZuEqeLyrd8x1FTLb3YGyZAbEgmUMS",
  "key42": "2YhqKVtRw1x1MQGMAxBsmbQiXEXbPJDBUYg56Z4Q9apMuDMztTAnVcrDQmxRRj2SyKJbpwJxFVMZS5puqegEWyrh",
  "key43": "2XGVps8fBze2CyrNK3ueAmpixWRLurShN2LRNcjM33z3eXxTHn2qPwNxNRwaPhw6CopHx1GoWC9ZhCDfuw4dFvZV",
  "key44": "5jx4xY5LB65LRhPZEJp6SJTiizV3fZyzH9J2Nm5LR6WX6sC4LjhpbCAEurcBesJHtAKwR5kjnt8Xh1pJuNkXzR22",
  "key45": "3bgBM2VT7tVvxuCn1dNdoxFbsAfzhpxYKk7zLdxVezwdiPMswrBvnCLH9w5Y6wdLhkojDKen3Qpm7ouiZngoSTBu",
  "key46": "23eLxL4SEzyUt8C53KVqd4wTFvQNLKGNuFQQHFdb6jjJ1VZN2o1NBDHcy4jKSS9qKkKpbVANrDEPmgdEUKuaze1d",
  "key47": "2iBsdSPXzfqL8GzBKUBzJpbPzkgSoDKsaa63o4e85sixj8fc5p2jK5Pzdgh6BQ94wo91Fp21U2EnqTPgxzr2Ngpm",
  "key48": "5XUhRFq1jXkZcP7ZNKLzZ1ntPrBgzW9nt6MdWTF9kZKCafDDCvPg4CVAk7RVgXPXPLo8JMtfowPGCzHF4p4ZmMbu"
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

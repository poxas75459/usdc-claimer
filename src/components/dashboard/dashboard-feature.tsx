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
    "4rSi5JxkpMEfZRyBL52Yzu6AAAFjJ1qKBuX1zBYjYeQAYGuuLpk1ohsSLNKPUxNQ7Zyqf11pDF15Mkmd4eothWuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EuW1g2Adn856S4KaMVVC3xRxJ8hYoUdPp4sjwEsqJrBejCNp3d2xoj4iXpSqeiRUYVgyBmbXmQ5yBR9L6Ev5RKa",
  "key1": "7BrvKiqYaL63NiNPa1Xq4nRJfmDG8C6ZvXrYdNwzWdKDrLHVPEs2Jpm4gzTmaxM5Gu3Si64vxqsgNiney5v8c6f",
  "key2": "5mWwpAkBu6onB2wLAwJ74GwDTxAhAQkbjNYPLK8MRWAN14Yre6i2paRzJuXTo983NCv4A6w6DcYfn8sjvaU3jtbX",
  "key3": "23gMA3ijbrJHPz3wUY8xCTuL6X9rRDp4V7AK1reoVDgezfHRpEGC24JjEvzeTsxxdQfZxdMQ3LkFQjTMxqVFHdjm",
  "key4": "3BHPSA7D1ncxWHR23xHzPpGYJc4DM4QqjJFGqw1cbuEJwjXGZsZ2UEB3J4TLFn6YBpPPyZCExGxCfAYa46DUwqN8",
  "key5": "4yyCKeV9vVhLmYn2mdccPavLAGfU4P9gbKbLErDxNa3bwgPkeoTFGAgcqWUHF3caTNSoMokscSzLSjD4ep64sqy5",
  "key6": "rxZk2w4STicgZZWmHZ6sUQV51rscZ1z23sY9QrDehaqyccWpSy4zPVSzn8BrgxWTL7zg35a2PrMrV9SUqknkZki",
  "key7": "4di2a2RKit3kYmDcrTSZrCVEc7Zkb9Nnt4fYEkaNuHf2NEaUMWgRiypWar1Ly7iYa1LFdpXrL51LqmsiSDV6QYub",
  "key8": "28qccaYVvDzKqWegsBgtr7ejCu4C8Vt2pTWcmb9UcbUUvAkC9J8cE6Hz4CVaTfxHFSSGk7ovVDjJgL5gyzCtz9fB",
  "key9": "3TBRPwZoRk4keuwUCKzbpsrcdmarjq52vfSmMTzkvTmVLFb1ZwkeCqR2Hp2ktWTKwBWRfzr9aj1X8ikSA2cCmTRD",
  "key10": "3ZVCa8GELRyafzb9nZRJh2oR5NJbwPD4NVkEQC1CjkmLQTzcUfSV4SeNV8i91V3z96GNg5RJXSJ9yTyMx4fhDyFW",
  "key11": "5snjUAvFET8pFfE7yGuw76NJrSLa8yk1tmBiGBiippgwseCtZEservRD3nAWfX3wMjHC9p9L4xKDW2ujmwoqVuzZ",
  "key12": "afmYiD5TdAvsFvyhyQsA2eHU1oLkMCctmoEfSGQEinV3qzZHJGZbLfub1Hjkx3QokCB4Eh38WjYVy3UFBDq9t9w",
  "key13": "2fgk5i7Wpj2fhLSdrsabi7ioacvDRsJQ97P8ETRqfhprFmsFaVAVxA6Jc957irK9qYMWtRNDAJYUvuMo6bh5iLoQ",
  "key14": "5ZNegmXniCUNh1ueNyg1ZkgdE41tcGBYgoXzy5d8HsRvxHQcXmrHzNR9d9JRyNNsvLdkEbGw6HxEa53YjD9KewK2",
  "key15": "3NG4XtgzxPq5YzsxubdtwZTN8L4YTamxa19b6jHon2Tp8XxzFFTA1YCG2Q2f81a6kr9h1xZVk4XCxmBpim47EYrF",
  "key16": "4mPeN4WmGCDivfFxeppkuUBZkLKxZTd3Uw7uQTeTptV651cbQfbhdRW2Sdc8CqsPuAEBV32WUGW8jRuEEj2S6SSZ",
  "key17": "4U8JWKohq3UPsULw9gYBRLT2W5vMw14KWw6c8o95iVL8soe8UDrhoh51bC9bTSzzNosw9LRp2E9Q6nZPLDZYcPsY",
  "key18": "2sMEVFuTTDiCtas3rMCU91PM6i35hpedNqHfj57WQnTJLtKhZgpK95xR73oQnfhYquveueRuqPUA3PxHPR67UL3v",
  "key19": "4X1RLCjPVe5vKdP7pQEHtW4j8xTmrFvroiZyTb8RT94fr9QAUoq3HiLFBe3cFeHn5muUKPDrTG2bmEU658tK9mqd",
  "key20": "3JcrnznmBVE5nD1hoe2DHkDj9DkBtBYnTmu94zDVeDCWUi6pcinxgcvXHYBa84noCJMvLc4ykwzR41Hq9VZPS2q",
  "key21": "567pc8TVZDTFN35UawCNBbD7fBP2W72GDSa1QCPYMDMMwUVnDtiyFW3PSCM7LhwsS91T3wrexcobhgSZt8iQf9dy",
  "key22": "2jqoRfjM7ogtSwaow91Zx4XedqcfJtSrKMoA8aB8mG9xdJe1Q4SKfu5Y1nNH1PwKv2khUo23eMBwXWrqqayZfFMj",
  "key23": "2gaPnAExvuMBx1ehhUWgxMvs62cba8tJBr529wqJ1gwVVKb3ayo5oXnmSmaXjYf99QFZtfBaFVNQeVjZFF4P9b7Z",
  "key24": "3QJqKRNhFPvAEkFmZikxCgCPgZdS6obxixXPUpuKssDnq6mbPbNPSepRPx8p9YW3csWpXWpsaRd2csm2iqDbQEEZ",
  "key25": "znaLbMdWXUMkDd3pNtQJgH4iRV7U8mS75y6wkVSBEadwFQYWekceJRrNRZHs4RqS2rvbVAiUsYZa5GnrJfppZAm",
  "key26": "45kWcLSThUJuUsLFsUtfRfMmzx54wqffBXFXhi1B1ig8pi6qN3DG6yPuzZ4hJV97JSTA8o711sq8DvTet781hQD9",
  "key27": "2P89uHfj9GSESTcmCtjjePK1eR5b5Xpj3AxiNGnfkAnsLcKAQErkbypcsJANczycaiS1WsgmhUsnwK3BGy9WQ8E",
  "key28": "5GGyBbWEyyKcQqN7YJn3Buecnwh7s15edEUeiqp2YqFYS6TECwemv4jBDiojWweWKYGQWCjiJnASxeYDpTo5zyVt",
  "key29": "2mm5P1kekLLiaGgbDrZuWzKePeFcRjFWT9CdPn7533dHtyGwh1Sfk3q4Cz8Jsrei7vmbRcEGUSBinQ7KRS9xqVvF",
  "key30": "5e7Ld87Hdai4MXxCAFJshXM2nbkdNBD76rc7V85UEveC4fwxzuyryZjFxqyWBYbgraZ2ZA7d5Xikxnyzfuab2yuj",
  "key31": "65ACpv9UHRNx5D4MsiLezxfnTxed8DJyz2ifoy6pff987V7Lp8v1C84ykaxJTfDFHLAicEMH2SDSuBjoVkJ3yoZ6",
  "key32": "g31i68LyNeNuFgeMu42N7pxAatH9vSTbu8sAiQpjJb4s4MTAaNsosgFBn48RehfaqmY6rMjCUJWZfVHvfjK874Q",
  "key33": "4fs7yPMk5LFBq3qUtwegfZKVMx7FiCQVRUuD47gQVo7Cr9Px14wpJpGJtgWkV6NPu26CLycyrWnixEZN6M5CQjdW",
  "key34": "38p6SpGsovSqfmKSN2iPUmUcmvYtdpdDv9DWP5MXGeiQXz7iSymeM81vKBdBGoThqjAGQgMSR1dRCfv7aJb8VZjq",
  "key35": "25wLzSiep6zv7JHUaX2tCQ6YPhaDQsBAgZNeP4qD3u6e5u8kTei1hbiuddyvo9UdoS4CVrQUU9CmvJNWMksWzjM3",
  "key36": "4UnJEnQ9P1FKizKTfkBp8hnUTjJ4AQLCDVRw8STBFLRJNGQykcj61G36DhcTv11V14wwFBXjK4XmsXBjvLHM9VsS",
  "key37": "2X7pgGxFKb4qKmPyRxNstaBmaVBvT62R4FeGs55qyTU1V5Ky5PsqXLY2TYZ3ymNbn6Rzae5DHDY9ujDo7s7tH2rr",
  "key38": "588Rx4DYsjTKWVC9ekKfQfgSjDZZcoD9xE5RrG2YBhexsd2yezGygqrqvA4u7J1Z7Dg3pj8mzx4LsWqn8hrG3szH",
  "key39": "4DTF9SMukfAVBR3CVE6qhJEj1rM4YGj96rj6EbvZ52rHMxRqBAsDXyfkJp44V4sqS2GkeydQSk6mhk3VrcFFEzRu",
  "key40": "2hkaFRpES4iAT3tBiZXzWpFVE5kmSP436NsdiUqPXysVKct9DBuTYLi3MFEhJF7FvKPmBgPfX7ivaKZhSxqdBiGH",
  "key41": "3X8pxYqd5Y5o4zQ1jdt92iGMJpEpn36vkbyNR6KtbgH3Vyz5V6d7y8VXKWnVaFqjretgkC7PoUAwYHCLSYWFNsrv",
  "key42": "3qfncx2srZvKuBfWwMG1m2rAZ49RTXkk12gGm4AhjAYeXb4z6qLaYnvuuRuSDnK1qcnWQ5uTizMsFM9WUmaJWrGC",
  "key43": "4Lf2ApKmxUY35qy84gz5zpwg4r1CwP2JYsFgsMgsPJhnC5kCKAPcVr1RFyFgFqjM5cgcvSUo7JjEtUR1PAsP4gFS",
  "key44": "5MvpQae7w6c6k9mQwrqedswUXUZCJoXZBWfYPZ7tcWf3i96rmSwyxrNFcdKXoSU4YUa7591gMwPNkNA8PMs1tvwo",
  "key45": "5c1Ce7CZb4tkdjRxNPzRT5ALem176C5bYL2rTnGFKEhjCsERTwG6qNxDWiTQX3jrXjWRjPcGnJ1VNvEFqxmy1ad5",
  "key46": "5mPqYEfBLW9UWJiUtFYqHqkSM4tQSbwcJG5NgL7sFDQDjJH5QFg32wCwgrYnpMsRxwwYxALGTjXrybi82tfvCTwe",
  "key47": "3eDnW3KLXEX83fp36GNkcqcbYQ5ifQo7meKUPk3Tru8w6NgYJkmah2Xf4AwSTXywh5MU68ib2nVFFjDe6R4JZW6k"
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

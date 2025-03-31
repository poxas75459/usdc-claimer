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
    "5zuh6iKvef9acvsRDsbgqAuiTv8tnugLDas67sRooGp5GQUPaCisKyjBy1DErrUh7Xq7GS1kQnhfWgnQLmfntcsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XH5d4xV4TYPnuWPZEoCSHQDAhho5LNkP3NSmNrGTZWrHcHW2NHTLmbS7vWSreTdxhRBsMAii8XHN9EDwCemP4kE",
  "key1": "5X2inxpicWa2o6N9AkzLNfn7CtAxFxKxCzY2obXtNd288z4jt5vzKkGdkTbXLNQABy5pyZudDqGL5A7XGB9Kf88t",
  "key2": "4wjeBa6nZn58yqEpLzqeW5CoCL9433zVhpwuPf9qQRejf5SCdSSJqX5N96FHJug1NEhw9NKSjHRhm4hCH7c6zw9e",
  "key3": "jwfFdVWL6p9xRw45N3ac8bmJp62BbArGmGvPPdEFRurT8m1paUGQCgqdcwFYQGmiQy1Mk537UF3KyTx1hJ5SoHo",
  "key4": "5NBg4e4N4QkN8Uyp96YUK32if7xPNX2tYfMVQESeC9BvskG6U2YqEBzvNk8cB6p34Q1zUq5FDReR4Ct6onn9QNJn",
  "key5": "2UdwGu5j3nosrDsGEnMBLU6HJgxacUhBa48FEdssegqkcxRCGppFQyJbN3NRf3woifwmZQBbrkgsS75meMboPVmr",
  "key6": "4mqgopWCvyVQ683QTohxfmPv4E1zDQ8RSZT65jmSxRkkmdi71hgatiZPxEuJUPFPSsH7zFzCePqe5wu3HHLjrrM",
  "key7": "4sxytmjrdZznSmJGezarVTUQYadmistkewz7BhsvZx1h4BFRuAzkeaD9PQHYTzwMUgumCjGo4zMayuWWKmeRsrZo",
  "key8": "5ZSg9MQArCQTCscjCu6CgLdeKtvtFPwD3JYKRLsQkh7Ti5s52q7hq3soRd2zuKAgkVfWPRyfWaj1ogqxZCZNjkYU",
  "key9": "2he3Mb3jBwwDZPGfGdp9sFvdeo6fj1QC5VxyNCUx1dV2BoxEcHnAp4AnVJJVXusmzM3UBVDgv9cWYNYDok9oXtPD",
  "key10": "3WRpxghR6f7QjXaZEvfz2821p4yMZ1TK6JtL7DVPN1VfmztqgN4jbkC4HnqY4QoJFoWSCX2WYHqnpcR1F99E5mRd",
  "key11": "3PpH3hyT1Fuy3vEUgiXaHYpHWWQxpwEHqiZaMtG3AV1m1MQiEgXrP2W4aG76Yf154armadcWKmpivX5kh5YB3bND",
  "key12": "jc7eAPq5t7mW6WVLBt8vuerZzyTEz3BavPi18CtR4Jw1z8sjtawn9jr2P3ii3BmkyY44VRkR5Ufq8YhgHrYKUH1",
  "key13": "36S6CBKgwyN86DytEUPrXh5ZcZT8aB7uhzbRT9sv4Sp22nYaxwhVNCeVDa4K26h4JV4wLJqpdcg8ZmftWrPPKr4p",
  "key14": "qsEoLguismXTzhjSiEAPnCXLgjMxfmWQ5qAq8HVnA5coY5xzS51aDSFFJ4xZhWBZGaazbEahUcUADuenjoHddBt",
  "key15": "2Gr5AstoEfQLUB8YS3vLoXKRXtrgUbBmmF6hxC52xtnLgZ98tYVFFefU62TaHGMxPXB5ZxMncHL9N6gGFFBMJoaT",
  "key16": "3X5ZEd4kdaumJDYgynRAcLXdZuCocHYRRYYZ6XNuN1oqhcfig3EzUcLtCWsuwTN9rf6KHQrNriwJihW2DdB91bVW",
  "key17": "3s89qDUmWigJdz3jPUeuFWATx9Gw32hTPgrug2kDQuc66S86rjKK9WuyJL2oVGd4yL8k284htinbN9SZSKtbezND",
  "key18": "2WSVFjxBaGvtuLJg9ZQ2NHGGiEemr3NvMVhgZTsbHmhrSa5wYktuJprG6xad1fnfsMmYyRKuVgMg6xsbEQtZ9oX3",
  "key19": "3Pb4e3W9VSDUupjWGSWahFYGhGcNU4KSq7mTZz5GAB4m5NvU75bCJQyBX1tUMAWu34xuWqRF4VGU5pHGoDHUwVkD",
  "key20": "5863ivesJZZosHkKNzXnBzTVGzw892kjQnnuT3DnH6m9DScdKCJNo4qz8SfYp7MHTLkddeJ7vswgrChTgxk6Mqnq",
  "key21": "2Yc52Pvk7yd1U469ZeXwWDCXV43vtmVWGX9tTJzpMA7NT883VDVdykPqZziJddj7iDjJvbzA6zXjKi61fN7L4EpT",
  "key22": "3d2wm1ysJPbZDA4ERUhv4JjTBSAER9P3catsNRbSxsG3rh6eZYBy1okNZpAojTgkjPUDZXY3xcYfzpL51mzpuPDt",
  "key23": "3fGfqM7DmgFV8baWJ6EzBrxSz6ZWaebpdpBUFsyf377EdYZjCssesRkiDqAA1usVz3KUC5AqbRivLHZtUaC3tuBx",
  "key24": "3rnQeb489VzxbEc7eSYsFP8r3KqJ4PPMKawL9T6QEQWxyxicnG8Qhq6akEPsMFo31KBwGjqttC1NA6zWN6Wtx7So",
  "key25": "4Sv1owx66n7c6ddmfiZPMs1SdbxwdDNRho8iiSV8uUmq4H5GGy6HsgMAciej6CfG28aKCqB2XiusJTyc2su9dArq",
  "key26": "3r9iKpSVG4dNjzzuqAtCVBkudQ4UNw17TBJHgEEwedxKK35rUEGE7meBQ6PpQVB9vwwRgZidtCw14twRHvuq2dfk",
  "key27": "4YGrwRKjddWCEJ9c4fUPvZwA2btnmN9gKKrYWcy4ihAk1cDFF1aoG1eBwsdgQxBcN88PyvL77bnS6a9crukssKAz",
  "key28": "2Z13HWk8YeDa6YJP97MjqsMBPXBsaT2stw9eWMfySNssiV1meJcujukkwFjbHyN2esjNTTG2regxwVZ5WdbGnxe1",
  "key29": "3ueMpM1vnx2zf3k2jBbe2YuoxVtnvUuRbetVHAv91qgcjvhAA5oYR5iToDXT6gQw58hDWjqWNPMKe5Ejv65Zne9C",
  "key30": "5E6XrjC3WytMVo1STgPtusA2poCuYqacBK42aRsyStnrwDaMYESwwEitpUhckyCeDDVHMBa62Bdmj3gvMAfwG9EN",
  "key31": "43Havr6Yo3Ro6FXP4gvJDCVTzsa7LdNPARM1KLpzyFcm1uWacY6hKmiVvtirnrh9eHWTLR185s4sKnjYjL4Yv6qX",
  "key32": "3nhjcfisLjQJDsLZkjw8PkVLErUauxUBTHdEMdobDe1qTnBogGs3ZXNUPFx3TDan2QhcumA8a43VwXDntcgv1hc1",
  "key33": "2X7WczGs5Z66Em7XZ7xDcAXzBpUasPNCuU5A7sLCwSurC4VjLP2wbZdRtAvqUBge95iT3gBxLhT26tuN2z8UuCFR",
  "key34": "2kn5oW9Z3AAk5jiQRB2vtorVhJ44Nq7ARvu1vY8ndKk1VrBv23SCvwFkh2tssYneZAP47J6rpNfVhDhJFo247JU2",
  "key35": "xMDebgX1i6FoNXXor3ussCtdGPjA5uDt5cbVCQkUJWaNnc1758Vk45VwTcmGs6qFJ4bnLqyAUVnfRf9VtTxxRSS",
  "key36": "3zjrBz11pGyUhrDwnUdFw6aBtxybRpGAEqqXxryk6gWXFEb4mEeE513xpZ64yhwC1Em1wdNB3hDCRqWzQdHnPizY",
  "key37": "543BHPeczzjNX4qHRAyQshoVg5xangpfvpsgXRk2F648k3jhWLUAP2jT2EqK85gZPAKGLqyDsLJJiXXqkiNtPrhg",
  "key38": "3VACkovQWgHgPu5aHju22pRWTE33qLUxoDtJBkgyNzAAb6SWKzJhUpCvdQrJ6kBUiBd5LVsb293foXSpcTueo6SA",
  "key39": "5Us1ektCu8mhTom9AvuW1MTCagZAsoeuiZqAeCs3YvGXhZYZYDuf74UDR2MyrR8TTrXGbLA8zK1qqbYdhFL6oDTN",
  "key40": "2ocGURrcm9GipmE12qHYzu9wVfUhbqJZgB6dK3xVWLnQAXEmVKHHmfvy11oner3FeFNUzZzNz3D8cL3vftq3XkZb",
  "key41": "3u2UzmW1fZT5kG5roRXBCZTxddohLK6vFNqNzzzdw3rTKtvwPn5uP4PVzavsayv8BeTeYMeXK1nMhUGjNpa3RgcF",
  "key42": "3b77Ek6JkYqDZKwvii46jmQoMRQoXxPggqMTPBJJ22gnBvM9xQWaEciccRuEr2vtG9xnj8GNbAKazdCa4uocPxFg",
  "key43": "386kzBQjsxFos3Z8mzejreXBERcWFV4tcTnUfk3tR2PDmf5ZVMDNLXNCrDREiKDYbozDVqrVAnDNNwiZEYBGzhxV",
  "key44": "3Ms5XUSQkpbVB6cb4LLRGgMPhuXinyF7hibkGk2gYapAnRxwMPeivaa9KnsS4WSPvDyyHvd97fRy8R53BrKtmHss",
  "key45": "5wq7XKnwHbxXLXMEibEDq372f1qHjnoYYy5rgWf23yevKo6rLpE5GnvSnENFUJYvNbPsnYFyaxPZEF6Uh6WL7VLq",
  "key46": "3gTPQu5KMFcQ5KQ8hYDvPZeWuBNfUGSVcS81xqPEV5nPbjxLS7v9oxp1aaD9p97gAdu1w4xQ4Zu51YkJ4epHxn4N",
  "key47": "3a6CjY3W7nLi7FV5q9y7XxwfmsjLZSc1ff3ohRSJSSn7KqbKKTG6Vx2hpLDksuqpXbQFFsc752fNg2C9qHpjjdHH"
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

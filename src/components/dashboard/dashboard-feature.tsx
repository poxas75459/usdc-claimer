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
    "49pX2eip3Tu1YYdU1TuTunncrvzHwHbHBL3rHKqpEBGUfJprjqc4Mx7739QMqoWt5JthshXTS1Zb8XbsvX4GBCkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p6xh1SGFwBEgwCAEwXZrdURi46huJ9aEP8k6TMnxxsyh3P39zJFz7mj3eB4r71W8XnNoQ34WksDwpCFhXTkd5uJ",
  "key1": "52cRUcK2GGmJ6XrimQGcJHXDriQm1huk3KNRTDe3jwWzU9xJLqFKTtouU6WPXy4USfRBgcEyYZzQJAEfZQANYR72",
  "key2": "4BcoSvkCG9oPHJ4b5DT2NToFkSsfwodKsQbmePaYM6nj3iRUHa3RiYQZxPVR6mXWcTDsjxgagSLiVWaNigjzFiXo",
  "key3": "4BwB5z4nqCPmsDmTXp6SrLgEbTrumUGVYKaBxQSCnTm2tjXBTgHfd4vJodTrR6ZC6cW3PD8RoVWMLoSdeMCjaa8g",
  "key4": "31upzSsbLxyrGA45NsMoadyey1pggpTcD5ASZ7Kn3Kp2iwynMVyeHNZU7hqaZiRnF9fSBA2vwPWr4RbJLZoK1R5E",
  "key5": "66btmTfXrXeQ8wgqYWXMCrQ38Gs9WtQzN2pSUYayE5Q5shoPt5hqyfzuqFp4PuKmK1sC42kLDc95YDPEkwfiMTuo",
  "key6": "4u2wxdU41bLubkpQ5BYYzZPeuy8g8d39HtZxeh8bdNQ9GtY7vDX6nN1bH4jC3qxG4rQpz36Y47kWv8itZiyXhFJz",
  "key7": "5qdVWvtnTVWjLW7ig51uZD1GyXr52cEJaUW2qrwSFQsKVkFmFP4kt25zryHjd9ZpDn97DoB6L4uqAMUoB1cVygU1",
  "key8": "3oTKh1SrofS5bZjfJHu3TiRAqyUzehUWjFAWKje8tfBGPvcCV1F6FnGvUqwBDJe1qLoDvhUkoFXeQKX9YNPDbCL9",
  "key9": "pBUHrxSPMV9LK1djF6XDcYWpje6x2HZMjtDzTM1bLTUq3XXjQQ9nKYMi7bAqaRBcHk3spRcr9K1YCCJyny6TXfX",
  "key10": "WXZ153oU1pwk5YUeAZXV5HuEL6wVqc2UP3bGzQ4TDnmtvGYxv8hkxx3WhSyjfrAjncecRnv3daJmdkBqf7sYebs",
  "key11": "66BiAoV2tmxDHpCiGAKCpkqdLzwf51BDEnibqvmieaVTAtngscTsRKkiTRHJZjrEeyKpFkHMrDMN5qJ1tJVGTV88",
  "key12": "2zzZUE1ae2XKX3ZErDdRRyStBUZNHQ3zf9jAUKphVDZ426Pn55yPZf7Sqg4cRHjh1MtWic33VbRwKcVMQwSRjaRe",
  "key13": "5r45P9HVwtujhnsxqVyfHDWwDydNxsX6inEVDERRj6qu3JqgiU9hWF86y4zcvWSTm23CRbJwiguHDPSmYnk31jkY",
  "key14": "4xDxbHj7n7V1W5uRpUTgc1uPWTrmr7fmGU81fStTym9MzVPjwmdx4z8tjQ76s7HdFU6ozspVTZ21ejPnNZCxRoWR",
  "key15": "4Ef5P4gxz64W34QSSzXcxFq4u5mse1fiiBQzGroo8hWcWqLLZtsadiZy4J4aE3ujHitwTnzFfJVMURuLR1tVckcW",
  "key16": "2AtCkptEVkQV3qN8Fhess8qcjqaPwcVjGerd3fYcrWxVqYRcRLZQTw787RT6fdyPn6vDeWtQ19GyzL3ZATAgSoev",
  "key17": "3Q2Ms9rMeFBiTT3Dc1qeDgiCTDqZ2eEtwKTergAQ8imaq7eVzZFCvdgCvhKb2stBfcuhAP3fcp6kotXv1sq2wroJ",
  "key18": "zU1kh2TXGjARG9S25fZMcqTvZXYadCxmwuFHzEBHe1LHkkKRbxrgBQe6yFS9BkiqUrgBarYmLpnoVNY6FLzSC5E",
  "key19": "yUN5zbUTjy1SrgK1iuvcrytYiVsVsxhyM3zvaVeSNoDC9SKRkXkwKqRrvFBmds7A8aeKjoAePkKpN3KUFuVXmG3",
  "key20": "jYBSnwHPQYGLUjCt59sXLyp6KTefva1LnWApPTHaW2kFDBBkwNovKvsx7Nzfi2S29wHLawfjBY8GX9pBYFRr8zR",
  "key21": "3ZKR5G5M6SxBuKibSkQrRCgs6tDNRQVT5rMX9KznxqECKazgKbgWzqe6GeweuUY3UVdmH7pexD7g2KnqbvUQF4xN",
  "key22": "4NDVDquNd3U4yMkciG7rq4rq958exPFeR65ARbUZRpzYgdMB3xHhprrjhZo3giXrExuRfq8Bp7wgTSBexFJa1zMW",
  "key23": "rn8tm3hxed99KDN7L2X9sTL4TqktRUUpxwLJ459a5YgPGxdBUB1gTpLKYmek9PE6rzw8VvdXNDpZMiiFB16TRLn",
  "key24": "BmDr8f7fH95hiNGEezHZNHH8d6wC1sFL5bHnwn5Kpuj6hNdZsqh1UvjXcoGbZcq5BvDrXf5vsvK56JJ18aeCdyi",
  "key25": "4zPdM7s9Akmm9VahNurTnAC86s9gU4CzYLeUd9R35pVGuxpSRy3J4CE6q5qoSzqEybaydFHYSD1TruHbC8BAHKVM",
  "key26": "2nXZ3K2CLcajG88mb5ndhQ7RxYMmbAjW29uDWdzspvfC1g4LAN29Xu7gizFu71YiAiUFYVjDL9uJEvPm775vy4ai",
  "key27": "2hwwYJ3y7vtFeZ1EGUceBu69nVXPaR6Nwy3vx54RQQzzeff7Ld1H1xonkTHSzK3VQLNSh6hZS3HBQHKP9yEKCTS1",
  "key28": "nJ57LXje2adzroqyXDzSrwh9LggdiY7fNYrpVyTTkw8UQKJ4TPCXrRLwmDRMrdcUAL2dyqB5dkjoXiUvnSswSJk",
  "key29": "46S2JAVXGhGSGLLKXpKSQ4jmxxGf4X5FK2e6UuUu6VvaciQ2dXEHbTC7D6pPcPhLVxeaV2D8wXogB9DMZQkheqrM",
  "key30": "DQrrB7hwSdDQmXuXshzLFHBbEj8BNK7qsNJvWPKJqeTmri6RYGsMT9Zt9kXdMwXCz1GSD8juyptfU2YLiBr5yTS",
  "key31": "56Qi64JD1dNYsFbNYDP6tQqxQwuA1e42K94XcyrPRezkRYWNbDbsHv4otzfChn1UEU1dY4x3Zgh3Weum7NN1n44g",
  "key32": "3RNwz9WCb88uVMHs4YMpADvZwt9CQM1EA6xoEfVrN2AeeLt9szrWbY5qoy3HScqBb6WkMh7XRzwFL9tPbZ8oHtFd",
  "key33": "47XU8VdqDTBi6mSaWa7UjtwCwoobUYwBwLvr19nbYL7ibX9VQopr9uPKermpW4ESyCy3muLCRysYjJXDoNyGmVYV",
  "key34": "3pLz6SKijn4Nt2t1LfYJ3M5xdqv8cd4aHsdUydYT3phsdjCEoZRmnVdLJMJorrMebefYMVzRauq1ctwpRK9ejDzk",
  "key35": "2kZ4ySEfTrWyp9QWkPP25P4Eiz7NahefaKxkcMvEJuGUHkaZNR3sn7dhxsBBQ5sc2jPsUu9eJvvyuTpSPj6gp5eK",
  "key36": "5NP4AQbdGMyiwu9MfpfMzM2a4VDbXDqQi4tgQyXrFzezDjbEAcHya3RTTC1hK6m82coDc7h3SizgcbZq1QaYaRwB",
  "key37": "5J51kowvBmLWh8bdK1sSxbznZDvXHuLBqtF5P8zEGH1nq69b98DZVaSPvKKN9bx54SKH4iouCFXEvfPsjnxa1Lv2",
  "key38": "2YmeaB9ginyT5zpwr44TZx83txqXxuWEweQ2zJFAuycPMEeAFMiueAcm9KXMThvDYhiQG31gu8njhFJ9fXpiEndU",
  "key39": "2cCWM9RJyYYhrBTeWCHsEdV6a1Y9PTAvQdttyKMjzFZ2sgzTMipSj5DE27NukB7oR8Zn2Ncgfob3aRCioqeLyF3X",
  "key40": "2t1JDb8aLGgH54ykrzhgECbGaccvWhAPn7vWoT4FaGa2aoRcNQmZhjfJE1PLgdt6kHPgTMNiiQYE8vQfqk1sEDZm",
  "key41": "2HeoXu8KLXaaR4AYVQu1y2E9yaKwoHSP1Y7fRoKc3Ro4NyvyKi2bAbZHUKRm2yQLsmJxp9D1Xnf3a9P4LM9FPMro",
  "key42": "3a1mqxmrdAAQVEtSgnyRdGQjKMWDEXMLrXP5mn9sWp2tprt2MoQ2kUq2DiMKqXLE7d6Uy6raxbS6RQ3XfddB5TwE",
  "key43": "5qsMpTD9Fi59tm1Hk6DhPK9dQ2b7zN3rhZ3ATBXFGmgpQpS6ZU8RvM71zCbtepMsdYLzLGUitqvRGrmJexrS1qRJ",
  "key44": "A6TSpPFx5fQzxfjMkDWPXq4ctY8qZp78m2k92cZfCSXKFxYXx32ozfq1gsy7ax5ZRCM2C9wrBAxd4bxXhdygEcS",
  "key45": "5rAvweyjBVkCQkCtPziASGPwoffCB2mvjhXvPcZkkmkjmqDrFqyoxgJN3wNwVKA3xReguAZiRhg1V7M9ouhXxfa1",
  "key46": "4fRuCwRTc5etCmgEUBq7akpQkX5HfM9Tt7m55qFJqa5GDrGFpHuS9kjpgPuv49ZH4Rvtj8Y3XANkmNfVmkjkDLeR",
  "key47": "55iavnX2RkwNv5dgAuL8Wv9KnQ3Cmx149bve6r4dXwTkuJXAhfBXGYqpeEAXPwJc6pJz9zSNE8brDPzmMeL4vg41",
  "key48": "2ygRN8JBbVtpdcriAjHM5G7VYwoFE3eyFnZmBedSPxEa1atWjGfh1hFS5EjoxmxFdhiYrEAR42cnEBLG8cWdz2jX",
  "key49": "pDGCkdnrk9ahYkNvGsyCW4oS4PksZ6BcGFNEeC6FcQDbFxaug8Wi2wmg2ioLnH2QRVZ3JB3oLPKLNrqpC5noJeD"
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

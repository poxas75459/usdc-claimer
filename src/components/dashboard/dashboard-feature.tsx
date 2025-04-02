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
    "5EFDbLaupxewREYxyL3L5LBuDUTEtgtx82j1RfRdSKP79snfT2ZJEvjqyiN4wfaXc2EBonJG4YwHf2wQ4DhVVUxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ftv2fPXCqatAMHD1HqBf84Mff5Kx59xpoJZeh9wKFAwoViKXxwPYA6V13DeZbnaVYnzWnFh3aDZ2pACqF24Vm1R",
  "key1": "2JVxjiW5iikxbumWTmbEn66r6vAp5W6w4Yih9VhBfYUxkZQYc4SmyWwtYvgUPsJQz2rwef2JDE2DfrMrGQ6YAhJ3",
  "key2": "58vQeVhzXn1XwNDo4aSmzXrFvVFiAbeVEUwdyvHhK1Saos2vc3DJ58UDaKqkQDPmAentLzpZn8ikVUcghmoCYEag",
  "key3": "2CVeLf5FZ8C59mMR8aRqXTzpkHT1TiJwKwu2fBw6HE1SnmUyRMhJpVCTSBeXzc7YWRPFcauJ3fUKPDgH5yCrQXVX",
  "key4": "2bJAA93Btx7vCCRNVYFNLyyhDPMrg1tuceWvmz4aCbnykgRgbrQ3ZUJPFuP7FTK7JVWxbq4eGRM6rGtgF2uZxU7S",
  "key5": "5o1N9uqwUCFLszsR8j91mpLraY4XC1tZCUvp2h8dt3qWpBx1JSHGusXUVTCfGHgiH3YDNcFwmNh82V6iJNNDRDzo",
  "key6": "2W8btegi8FhtmognMDZvutGzMCns4CFTFrDwXfn79369fDq28pC5Vyio2NoBJh2w2j3xsQSBsbbYWLLm3ia7DJSj",
  "key7": "2GQfc9SVTRMkZ2sGbu2gse7eDgQqsEPF7fX9ezXvJp8SHGcjSJbkPwyomqzoZ1EnWbx7LgWhw431FVrA3Gki5nEp",
  "key8": "v7JyKCnPbdxwp96eaWrvdz6z682Ecfb6A148RmWSGLUTLfhmtg6sGfEEq1q2SQi72eSKNPCrcAhoy35oAZbj22y",
  "key9": "39xtvFwxs1Nw3RiXZsS1Co8sEf8S2gW3Qk5E5Hh9WMBj8sYjxJzpNhChJe112SvzQxgQs8d5uiZeA34315o14fH8",
  "key10": "5eqWgyxm4LjzUiZuCMpKFYtJkqyjQSGFt3BAAszfXGTWADrVP3kKnTXKva8EKnwmNYLeXvauMCgWLu4XJqbLTfcG",
  "key11": "22xX4CZ5Gs1G82P9FUfoRj3DRp3MT3TRAoexLXnJouhxCWuM68eLiA9zdxy2Pskfdz1h1BDDX89aHgHEQdkyB62r",
  "key12": "2RopWivtnr38mqJ4N1csTJSc3SiPYwXV6VFr9uuFrUMuz5uJNcT9dYWqgY1Z1nHoLWZ357ACuCsEZtnm6yWbtWQi",
  "key13": "24awP5rwivzsBWbLE3XVb8gf91TsBttQkMq19BDqFXKHFZzzD33EWqYSf1aRRiRiiAfgSy5iMX7hq32KLnosvhLM",
  "key14": "5bSQ9EuCFDPKbCak52mZVxfSKdnq7kUzAAAJPTR8MKdsiF7sPGDKKSo5DvnJPhYCifRzUxYEWNQD1j3nTrLDEHBb",
  "key15": "4vkgePwRD47mXXK2H1EKsSDFGGhdt5mpSweKyHeC6TAaxsPVymipgRFXnE7QhgsjHbFj9Epf5qUrYQWRa9UyRi5Z",
  "key16": "5Dq21fTuLYHjHNxQwAZ49wHKMXX2Qvy2Gc9RZymbyL4BTpz37YP8uFjc7rTazsCSeA9P14vZfDqYYwdahGyPXJLB",
  "key17": "3eicPbBJpp6Vm7GehcJ3WWjFXjSjmk1dM5guHjYFQMP3rBSksKNF1uspVfboQSRPaXPmgMtMMqWiCizM9mbzRfqd",
  "key18": "4zgVG4fjCVFoM2pyTfGGhBkiDwsomng5iuDo64gkCVTtvbng1TVxMWBNPdFq9HpXSWE2tb1bm6CkBLF119m6DwDs",
  "key19": "2QVK145vZ4f3Zamqg56Doi4XNxPWGcBfMiUZtu6yjxqAQD5Lxo5Z2pL2Now5etz7KH4oRBpCj5kwrX8h877v6B9u",
  "key20": "3MDEbrcvRoS8eQGaiVtgVNr8uXN2ZkzDSjzwJtxbZaGmzDZJu72NDR4NGeHTLhWDgoEwDqg9HNhxnQxAeX1BJ5Y3",
  "key21": "2e27wfScA75eyx2ZBtCRiPgUWqJwR8VCbjgwJPoNBf5xLbWdvcxjafw4wEwmCSTcKmPxvQcaQ5JRkrUhDNf3z8Kn",
  "key22": "3JvNfk3iZE7w892M81DdBeLU6TM9Qbd53v9nv2nnk7a5BNDRHuKZtJw5gPrnwk9jhQ66dLhWBz8LG4oB58h74rDp",
  "key23": "2NYYzSgUPbBAPZxCBMSLkWitK99NwPdDSkxu9e5sfrET3YRajXTc7UWXbQxyJm3QF1McvYEyquhdqCCiis5iBLD6",
  "key24": "5S1SX2JEC11acjsnGtrktXNLBhLLR7eVN4SZFLcU8eYoNVG5B9E41s2FKQZRhrENQTSgv9aPMvfV8zbUyvcvAvXe",
  "key25": "4txt2dMauJXBHi2apoWhPQ3ALCTFEHzMJqXi21BCRaQK2PkeFBMX73LiDnXuzk421F5TcphrG6qbtZL46jkWe6xR",
  "key26": "4peu4kG2qomz1zuSc1ryi2JQR1RPsxDHvLEGQnJPHwpuAzCeq4whPfxkJLxNmy1MqxTs3dhkoX9K7LaVuXgfKGs1",
  "key27": "5oGYitLtcJKe5qfpMDi4yLToRMaVi4rDhcD8FjLv551BLzY6kaX6jSh9hn2FhVoQZ8F56V5hHKNDCMAnXPJXufmW",
  "key28": "3VdKb8voxMxgZQJNyuR3eerLBtLiyCX7r8wTx2GtbkN5NPXSkvNZVim3SCHhcC7TJAdPhcfnmEK5pyp34Wdbb3ex",
  "key29": "3wsaLyLYdTckj4ir7D5quA45A92VicJRngefLKcL1C4QEsfkTRyUf1fcJGQd7ifD2zbWbERCih5EUXj4FQUYbCiz",
  "key30": "37HEMGFXuwjnUCv9GanRe8BQLYkdtRGVEwiTGNpmo6x2tEUyND1sP69xpThoKMgKRBrfNTKU2PT6ZrjEqfFDYN1C",
  "key31": "3acn3R3kVbD4TYPaVtXv6296Z2C1bML9viDRby3M1eyibFEJQUJVV8zzabm6YpUjBb5GxrqAQuAaPbDrfMC7Ndqn",
  "key32": "2EHwVqaoRUmPgmW6c2Rs91VVXrwpL4uZC7fT7ktjcVgLvEkNQCtBUTaCYDzdM5MsSSaCDSjjiDk71uvthbQ5P36T",
  "key33": "5TPu7YzM99nK2Lq521SSHR3sdbbHKh4M55ekyEZvHYVkvWe6H8Xeo4bQc6C9GnXZQjhSkuSL3wgDP3e4679KNxNL",
  "key34": "5sRhK9GLV2QhVos33xu66ycuCipqZd6VbPwokqZQK13Bwa51s751w7NjJT4oEUyaAbmPhCh62r7vvV76WWZZELcq",
  "key35": "3e2Giesfns3nbGko4deUniQNoZzRke7U9wRczpUe5CF8FUhXorsRXDGGnVCU3a3B8EZaaz4vXvzpcpAt9pYVwVjm",
  "key36": "5o82pSiWcN4QjhMTFxuJ9HJFhiNLSEX4B7jmwNqq4H4qW8D2Kxq6EdP2N3YbciyM7Nm7wkYm3t3WFMd6rEwgTL2d",
  "key37": "2UbTSS2ZqRjGEtUQA6qhTf4faZKJcMaVRpdTWgfoz4iTFFaCc5QbqGRnCWVmHPjbXzvBBjQc8C9zAecXqKeyjZgf",
  "key38": "2tfvodYiH7RT3ecUTVsjSnED6xcoAT7H6ekf6rULLxbx9QwUyDpGr5vW4HLWBfF19cnCv2tTeXd3V5gVwAtcCweM",
  "key39": "2dM7DwnsA3RHpFy8xGwgL9yenu5b5rNLN6Yt1dJqNrTDFfoAbzhoa9J1SotpvBxDmjr1TK281suEUggKH9Qw6kfY",
  "key40": "3HUvBbSPtSn4ys8GQJNJqk5v5FqFzoLCNpLcArxPi1ussRqwYT4nMpnux6qC9BXf6XSTzuEucp972qxB8Md1u1Zr",
  "key41": "cqoK3gmyGyGb4K2pomynVBYwPLcj2f8Z6a4Dj9H98dTWZWrzKLzazSGhzEBNojgKUgRWmTKcETsp6C2XD4Pnyhx",
  "key42": "5VBLZNWe8f6FGo3ddcChSqUBed66qYNsucPdyWtyFJGTMWnoyiApqtAb78ZzkvVHGFmtdtuPzZEYiWfggx1XXEbQ",
  "key43": "2LpK1FvuozM7yncGetQkqLVR9MCnjv8LyfQGkkP4qAXvDtsM1uKm2SmTWRoRRDvjTwK8RNehuNECxcZwyWJPi1jo",
  "key44": "4Aic4vnPiQ4GLpLjiJ9Egkf6YsgNFnHjuqnqAYBjNTioVQXQ1kVNN2RYEjBNa3cE1uh1Qy5kNegca6Vm6AVrXgv4",
  "key45": "GhUWzRNkFavS4Y7oD7sz6Bjy2yGk3SF3PTFfUi2EvDhPGWwQNkykbWKh5d7EgYXqoCXVCWqVKGz6iB1GntgqvvU"
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

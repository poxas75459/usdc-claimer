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
    "1VYNSsnSJPQwXLiCwzr4dCkrHhJ5Xj9WjNVUHnj67jYyab6t5eCjdtbWsnrrYd9HAZMVzNNTGbxv5KgzB3BYi2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdC3J48kkTgXcozkVZNRUYugbvcNXT3fUv9ri2axcewrdHh8XeWc7WN2b8bTq3AzK4jXjfBAimgY8eKbDh5uF7Q",
  "key1": "3yb2fw7gdRX1NMje4KowQ77hT4HctwrUTpM4K5Y4hpGF5mfzXyUXUnwdgxj9Mx5R7SPxaWRx7wnZhP4sxt7AASXc",
  "key2": "R8k93DANr47dkoCgeGnjEYpRkg7u82ke4hNyNfTL9XVzbqPPCmKSAqvvnED1C5pKUGZM6Qjgqd2384memLNje9a",
  "key3": "5addzBxGmbRJgkjxxPaKHxjS1WSoA9sfzWN1HU7ehoWoGMXGo9R5biJjtX15T5v7UWAy4rYu1RAjaAAPGRLLFsaF",
  "key4": "58pchHB7ekmgvR35G1ZVBfChZqXG8iiuY9gSR9NyxYEGvhx624yecG1uxFM9Q5e51YzcXRWh4Z35a9opSLpxC1mn",
  "key5": "56qMeUC5xQqJkfosWf3geLYJwFdjsejH4kEBPntEFbthgMmhcSTesDh2GZb86mHrUWQGSxW9pzb78oB9NZbjargr",
  "key6": "45hGJZEZQhzJhepfRHEsQenmoTBamAREfDUagCXYHQi3QxgXZaA7G9j6nnCqrYNiZRoMmeJKckHYantH619Tex3D",
  "key7": "LQzjTsbGTYzacr9p5snh6waZcbv4v5sakWG6dvTMFXY3vLjSizbCqaSyqb5RtTaEizsGYHNhVzbUkRHTEygaZUX",
  "key8": "6YuFcpku7oFa3wsAvV2WSFJnrTZgXCFoV6kfrp5p6ztYB2PqLJZ2pYTLzXxtZWw8pxzissMRDnNoqMKykMwvWm6",
  "key9": "5E7c2p5nfFcua8mF9gapZHKJfSR2z2GHcXFTedjySb9XwEKWeip4qzk5KcYiPM4P1CnVA5jWB7EgvwGg3ob5fair",
  "key10": "5iiMyM3twF6FvtqhB1zriy5sEkZKrRGAb6Hv39Nka7yvivekA9EqNbdx2urFs4aWVqn7Fk3SPfXYJcW5cVKQApYa",
  "key11": "5fA5fYKkpQPufdMRKWyYkwfGZPHKjGZGsde6rSuFBzJYq6gmzLKsQfAY7NRVVeeVTdykcvKbpywuVCVmAUWHYyn5",
  "key12": "5jzNdzev2rcMyRZRrpNdNjMutmKHubBm7T9QNw4CuD8mUHTS4SHSySzS1DzRCnGC1uYskFGbPRhLcUDmhdBP7FBu",
  "key13": "5pcnbkVqpCho16G5iKysZydN9d6Z3a2eoUHFjpjdKqjEj36CAErgP5dzese7xbe52atgCPSYXbqvT7XSTkh62hqw",
  "key14": "2QqurZZ1Fobwt3i3K442YhZCf9ijdwDTf8GkYhTLrmUfvYTZPxqsvWLvkQTa2BCQGiPX7uhopwfR6v4joVrL33V7",
  "key15": "whKZWzFttfsTvxegc9RoGe6T18XQjLbwm5uz5i2CWKfTrt95fqyUfnFRvUVQg6MonhYEtJD9ZXsVngqpaJnDLUg",
  "key16": "3cWkxr3kV4Jt38FdY1ByJFshq595YFCEmUDRuD8ayBvj9P8RP1u9992Ym3XY2nYp5nXJnTZDkgDxLUJrYC5uJwyb",
  "key17": "3hj5mbsSiDne5jD6joTau227fn86h6AzK9esGQFDv6U1bz9Rxx5CxLSNq7dYK97WKKUd23AJHFeb11yfShuBKoTR",
  "key18": "nt7KeFFk9ajQq5bfQ8KWRyhXAxA9JehXmSU59kcYEGtUpwEKU5kxPwL81httyPC4CXTkWVqnyTtFZ1mJU2NBKgn",
  "key19": "4iw3cQ8iNATWGqy8zhL3acdCTHtx2i9UUxjV6fxnwvSySDBV8X2jMRXD5zPdcNXK57NpVsGdPb9XNGnhuW7hJJC3",
  "key20": "DcYN25jGcb8gbYFxX11au4VQv1Q71M2quuDJJEFKn88mA2Y4fpgADth7aJJNy2T8Uj2f7RMppM31MhSqdx5isLk",
  "key21": "H8EAASDxqUJNHSzveRn9ZLUY2QCrpMiaEpqs92yXwsNp5pZqevZ8WfQmkuM5AKrrj7iPVrzyHgVDFJR7HhYAjs9",
  "key22": "66EbzpMnt6Xvgp6y4Jh5M5eCmFQhbrEcsb7AvsbbDkATZbJA9cvZzfnQ9GU1e9Vv7V2LPZgm43BRLPNHpy7m55cK",
  "key23": "34t5S8kW8WB3unFDV1nugsjZMbwvk38hE6v8St1mM7Wg3mJKfUwNuxKbVXw4m88J4uYxkGL374df8XWDKpaguW5c",
  "key24": "JeemzXMXXmf6376Lwjyp6jwMVSarctcAUPeFsieKhJQvKNre6q2tDdCPXyHhuKBmoyTV15ogdzN1Bm3YkczdR4L",
  "key25": "2pAW7p6gXUF9UtV5NsGwVTn9b4Hd1gwyjFDTXddX6Rp8LL8dBJtwcg1ewsHbk1GEDyLWNnzLYgvaZUdWkHtuE76t",
  "key26": "2ZMnoJNW7Jt2oJVCjrzGRhAavKiP9uTpWA3VxHB32k1K6V77reyJkGDKvtqVMer4qg24y4i8rYqEtQTcKRhzSY1d",
  "key27": "61fUyjzxfbpFSprnXmkLfdk9rcqzQjD4mmRNYx4FHBMydsQeHjD9DmeD87zqQZhHVqU4U2GBpsiQiWi6WupUNtQz",
  "key28": "sxpPSQHKN4w1V38YKqzdJpm6PBy7FNdXtJeVtExq6GWyEEMYKDuyjH8Tr2WGGJvbQorNQR4dP4jvGtG6qkUCJzC",
  "key29": "4Q22JzztKhPBwbDDZGBUooy6L5AwLiZUG4ZtLAoeKgoQ5xrFgSAjz9VB6KkdMnr6siZdU3zC32Sn21xFTFsQ1Fbv",
  "key30": "4VPLv2EQiArmY1KjPX1u18LgLaQHPoMDc7AkCFSdWoBhf2AXpf4VM23663WeCuvBGp9sx9kAQ2hFgaMFMYaQ2TVJ",
  "key31": "51PVrFh6UHttEYEnPiXHjf3rQ3iQ9wPa9pT6KgtSN6NAHjeZ8gG9qx23U3ov7FbcPSdTVs28wdDqaaujw1PfD1yn",
  "key32": "5xDcAmNEiuggHf6Lva9j9LWQM1rkrCUcJwcoxy1Pf3nykQDj1VBe8o1Ce8M1Cq72mMcy8embctsRceQCjfqcwsLi",
  "key33": "4kexcg1oajm4Ua9jpwVuK4xKEGdNyG5zMsLCVJe2Z1ZDUZt2ieNtPn4SgRZTcLrFxpNvYcNPpgGrr79ufsaVNXex",
  "key34": "4P4RDRWtyWWhtUrktiFYYtHQCuKtiuoqKHUq2p69SfRKNSH8wGHPPv6GofvhJUJMK2LGoZ3NqE5C1vzhHg3duS15",
  "key35": "4w33NZyQSS5TqENmkt1jd4SgE53B735aFS8iCKKrV3B67YpW1d8bhhnNous6JPSvFaarR7cQoXWxQqBPmxDXpXFX",
  "key36": "3ogSbkQHwk59CnkvrgUFK3w21bMDqaPGoAQhjhzjnySbDBSMVBSBXYmpT2wVhHyapPnWSsgCjxDSPFhw8mNSUMje",
  "key37": "4AyMvkDP54rWfT39PSoNSRVXXbixS3nJwtRYeZhVhXRH6rDbXVPSMwsADYJZQhXebaiajDQZ9fnuu8o1tgVKPSYq",
  "key38": "2WNapxjquoUhPMZ8vsR8oYayCMeJe2VCWVVS6xnvVpiaN6cKxpsDj1xrtpFUQcTd2gwxJxPG6BbXfaCmJPksJV2L",
  "key39": "5kj2W5wCJVx6BsJ2iUoZmceEYJo3askNM1927A36F2FwNrHMuDcNbMic6mNQg98neXccPjeDbjagPf1SJhCyYLJ",
  "key40": "5NeaLxxvtr9sHPzrxHuajirrtUCNxGJBLY8pewyeHjUzFdoDfsQWxYBnkpZWX6FkC1XJFX4Cw99dBNzEa4zoSNo9",
  "key41": "xiejaN2xDbWSqfKPdtzasAAdm28bR7XYF2ubLi4DynXENXsNkzo9yBWU2Hi9eUFq5wze3MDX7o5nYGoKZrh1BtQ"
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

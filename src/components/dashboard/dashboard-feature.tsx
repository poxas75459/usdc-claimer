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
    "2i3s8nT2i4AdFN8sRBAR9mWHc37Q7qb2cmPdP2XHamNqvGMmuPLqbCBqdxER3QmQGee1A8YFEYkyyZ2WCMmsfrtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1RGDartiMMxLRUL8szBN3ojNQgzrqfodt9dSxDLoMzMqvf4rrFKas9jfV23xUa7LWsCp98KH3Gb46dqYXZ7dN2",
  "key1": "2jJnAraTNL4AopzUCcJTT5Xf2pJoU5hmRsskqmL7GMmm3W86Wg6c92DoB2K7WYaUxtGZyJJbVZKzocy62bsduLEq",
  "key2": "2dgTJBZ6iZtwYw3dsqkDTUj7iLWgYJP6rzjPMT3ZXWsoSGYUYWGzm6CRUM4LxeEKFbhXKpCLxZKoGqhauhWdhYim",
  "key3": "61u8bLtpfGSCVnmHAaNZd1EqeDVREXXZPb1XJuqaQxnEENm9CuJXaqqwmfb57xA5y1cWdLducr5E17LRws3BkktF",
  "key4": "5oHT6D98Y2nqVmkAme3UDo6YLzim6N37wAAuQfwVXgc6CDqwVJqgrCwrQswZXVHCr461DdFysS92bAmWzgV8Fr9y",
  "key5": "29iAMehDWwuwSgyNHP83oNzQVYXZu6tNN3GFtYFbnDur3UMVSDQMaUyseFBmq4zxDUx7az4ppyegegAUk83pYsqf",
  "key6": "2SuoKD1PktkHRg9RnSFpJRfvo2KifTFTrqhJWEvZnYuyTRPpNWcJFxpF1PvpE3jX9PyuJioUMRmBJehGwVuvWvGp",
  "key7": "5QWbC3N78sTnL1mFgsCaxCEka86U4eMBCAwmNvzT7Zfq1UEufy13im8dMT8MRRhhRsAoP5LPq7zjB89eWiRZe86z",
  "key8": "2za5DtAvjnJx2ekvNftLyK3mZV5cp6ENRH4GUPm6CWoKdWYJSFYhnLD1o82H4G3zByR4SNGK7y9psSoot2sSvhi4",
  "key9": "3H67FHUAXrTeEgWXKz6Q1HvqNC3QqehW2Z3kvaN4dGXQD5FKCA98pU9aUxMit3734nodACz8fpNxtwChJV7615Mo",
  "key10": "2dCsSNHdYVrkmrSY1gY7L9Q9AvRioeJBtmk49HVkRaBKH5R3n1uJpTkzEygsczTzKuRaaeKGk4YurPuzA8Yvt4NC",
  "key11": "vx84VwjvNeNr7xyHVZ8VmU4GF7TtqpctowWr4RTD3e5AxV7CiTohvVhq1QeLmkpvSW1kiqdzJJJ6pD1eR6BpeTp",
  "key12": "RydCDG63tiFzXNdstRyXi6ujg6DezqW55RT75R3q1sqUn8cPybiGJvGgviCuErnht7QA3L429iS36UR58o7AAnc",
  "key13": "3iKn6dpduBhcg4pC54phewYUJc2FJySgxbYy8ywqSy2zqoxHsGV14vCXUs7W6Do5GSWn9DnQmUFMbbM9ccQ3aYnN",
  "key14": "H8kN6fXqVccJgU3bBwWfm1uCynbRQhdst4LThGUaXW55ag8s5bbAF7qRuWUcGv5R9VrGK4Bu5vqwNjGfqtmBfsz",
  "key15": "pR7Bo7zULH3NJzKmE71DBahTYx11Ayu9kH2Uneb19yi8Zq5jp9cgqmCLhRe4aEeveTndb6vgk8XRiW1DTk6y3Ay",
  "key16": "38xEK1cYuvYRZjug8aLamZQry27sgNBex8UYogXjBa4catUuvn3Fq1uMUqUDV8Sgn79UihRqnPDu9MaM11ikZt76",
  "key17": "34L8XS5dDSLmY3uUsX22vVcYwUGgsS9fKviAwq5Lv7UQK42Ahra5wNKzaPkn1XAF1zvog3gw9AsUQxGFEX7TgSSL",
  "key18": "SdhZXmy76qXD9Cer71CH3jS5V3YKkYgn5ijT2TrXaD37BDASdtnMTk9CvqaHAVw4BSJBEen3Q1k76a7K5U2k52u",
  "key19": "4oPjTxkDo1rDD53UbffJN8WvdUGcJaRLiExkHPrxxVUCQP3yCW6FPtiTHwvMbizi48tWgGc9QxxPBo8xUx8YsPaD",
  "key20": "3NXhnSRZ4NEqGhZTQVsHEzYd1DwbBEkJiDB5hLNr993cb7SMZPZo9PfaLent5wUCHkgmtoBwUaAZozgxusxwFZKR",
  "key21": "avWproihgHrnUSePXksQwR6zZT3EvEnWFVaNcn3N7FubUWQmvJYY7kLSWZpWYUsSdGBV6S2fPx4a1HsUjmh6kmk",
  "key22": "5d5aeV8AEMshXKXgrYFZp7pMHGUiLn3q9XRKSrJ3tH3p1Mydy7PyPnDW91iSbjNpnHV1VicK9bpS9sEma3MJE8QQ",
  "key23": "4Ss4kXug1QvqndGmU59eQDkUZESJgrGsJi8xEACHkh11iChhzTTc9nMSosbF2ByFDeHCpKy2h9BZfLeKSPKKu7Eq",
  "key24": "4P6SGMXTyqc4m99YJXjyfYEC3NZBddYZZHKZJ9q2CD3CbvFznrxeMYsR7nLs7eSXnd88oaqMcRK3iyavdrWzVJBx",
  "key25": "3mQyg7sF9exnVuXEdZPpbPhKDGidCF1qwgTC5zEHTjWbT48iEWBBekZmznexr7BxbjLSKZg8sdex736csdPMh4BS",
  "key26": "36Q2jdXgiXU22wjChDUfPFTDcf1UxHnJWwFtYvC5xaBJq5ahysFrteYyFFa745vVJDTe9gHSVax4kudHtNjKMY1Q",
  "key27": "5hujZ5y1XbsxT3YYZjLpDBAaBaHxyVxJfc9kKhGjAfT41GG4yFSQDpfrLTFU9Kk1t4vejwVh2ZVfJmcmBt675viB",
  "key28": "sueqJKA5nSWdq8bP7fYsonLKoFSNhXCycH717W1SALNYiYf36LjbH6ECK1JVQ5RbLquEd4Yp97z25RtHKXBwevX",
  "key29": "qyEPhSrCEUUyPrx3d5KDPgPjeBh6bgEZc53r3VhwFUZNedYdrd7MR5Pz7sYhkfoMnaYTF6545pkcB1mjiqMZco1",
  "key30": "2o8beGq3YbZwsabU2UAzFtrg7JZ1yhjMj7Bm4iSsZgEyfXvdJJnN5goCsd7Qb9R8s5EehzikGde1fZogMYDk9NDt",
  "key31": "4yNiA5R7189XdESoNEkGC3k2orG3czZhwA7MxLbstqFe9edPFY9JDMseDsbMhYuJx3QvKKqvi3ng9vuhacShx3AU",
  "key32": "4p8nfVZkuMgXeKS4wYyAWh1QPJFroWR8A9huLZtQJCiGobJZCCbbKQTcv1Pr74m1odUpeM7Pc61kPYf7ANYepAf4",
  "key33": "3NfRTkpaWUXsSrNPV8MMcDHdQk6f6JBqjcyDtTFGETJodoSJGcFNzho4tqhUvFve8Rsy66VTDQs4AxbL6aSsntHf",
  "key34": "3Vx61mMA8WQniVwkU758EmSQPADR3YHNDvyREREMPysgqqTsCSPy1gNZgFfzsM3Rd2GLzATmxMSwgyW6EPKsC3yP",
  "key35": "4edFwFCoJGDmYbg5jV1QKCTfHAurxLPjHCYe63Wu15XrQLnbmDSPGqw7YtSD6btkyyLGkyuqEiQj8SjEbs2swk1",
  "key36": "3Ry3XLdg5bNMfGAn5KcfaHtRJWUH2ttbMgtKVunYoPLbyPS7rZw3Aob2FPsX5TT7dvwDhNsSBeUr3m1JquivrkAy",
  "key37": "Z47oLe9U9qFm9sUXM1Ng68X5fUpGKj59w2NLh3tBmDiTFeoWDXzoQM979eAparrUWdgf92bubWxzz9T23nD6Auz",
  "key38": "2F4KWHBDhQCh1u3gYbNJ8w5Fdu8MwfLTLDdHxAtLuFsqZb8iTUmQrKf2j2KBgEiRRMJHn9UXkHBcxmPwPuCkg4nN",
  "key39": "2K8fbfCkenQ81xzL6QkDxEEzjjqCQa6eBRA7N8d4ELzS7mqgv2TnZjH7vooY4SDZz9NAwK3CHsxW26Z7ngVovfd1",
  "key40": "c2S1EGCsjozdDhgmmpV23dp8y7teMecEAG2BPRyHdZN1yee1qLXfC7J1bso5C1Ssz7tUT9CRqdVbB6ibpNZVzH9",
  "key41": "BSvgQkPzP6wJzmmzJedeq1xBC3Cdnp6VFHxSJaHeqYMP5XpPvEkbX1qbynw3y8eq7pYZwybNMSsLJpKUYA2xajq",
  "key42": "3bdfub6f4aujwoZ7dt2yEEXSfFNvTS2q2EyCTvEtQmjPRAug1PkBSCHagXSdPSDcf6m7hbKX4epHYXc2mMcRM2tJ",
  "key43": "3TvdcMQa8eUwMtmHWLr1ARu6GEXtRjr6fYi6SkwVdydtbvXE9eEm9p6svEreGvfQtns4JYJP2TALu6Mv861zWs4e",
  "key44": "4DB33W3Ek9XbYTw5WQATpswUrPB3UQ7WfQAQeY9GDUZ6QLQQcVvYLG2awGGdabJgJSPvvdmunyuLcwXFmeeEus7K",
  "key45": "3QoxsTiCgaJsT3H4RJQVBHLNvyeEySJQptHvQxgz1msQKQTHWS7iX51VuW2oS6S9zfn4cL4st6Y7FAxAtiN54zpZ"
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

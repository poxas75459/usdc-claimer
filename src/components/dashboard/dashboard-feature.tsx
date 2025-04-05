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
    "61AfmNav2s6KRRD6HWZ8iHxhgADY1e1iTXFh2EumDpMwxKsiXKJZjrJnVbxrmWrUYf7FXCgUyXDeF1YbHjHWTiSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fecNujiJB97RBDK6zpaQc9e3SfJvZbxJ2E9JuptA1QKa9UKUGGgFGzt4uKhL6BMdGNjsrXkkxacMGVNHcw6fB15",
  "key1": "4jqon9vdwrRV3fa1U36J4QUWe9jAukGGgeKtR33Nid7q2i5So3HCrGkL9Q9LLiNP3TweGN1yhrEDfC3adbqQYPq7",
  "key2": "3mnRgRVkze2DaV3oZhvFhniEL7KGnKLVeh6iPcQWFhF8Ub8RzqnK1NDK9KpH4apzsyVHvQG3WSHexMnNDehDuJnr",
  "key3": "3aUWLgA4FdjSWgsw7wyexAAm4sx4KaVtEWXvXNCHhtpqLPhEsgp5hs3kSe3ZqmDCkvpwL4rqL66WTg8TtbdPb8ZD",
  "key4": "4jYy232x8jmWgk7qF7FfLsK6UCmHxYHLHEhKCcRM2u1ER9fHiATbGdNHTEfdz9yEKSZFkiHSUjMz2CooNf5b2SxP",
  "key5": "mtr2NsAoC17nWXB7AyFKftKS2uV42fWRh2XHuhidRNAgDyRwRjWD32zyKdruUxMpYxUjLPUwDs2tV1T4i6zPw5N",
  "key6": "2SdW8LRap1wygQcvWmodtqFadZptPbQMDex2GvqcKqfD6nWk2T51L3xqcX1ChgYPHDe6KUXbFcTkfaCTuHjNNTZk",
  "key7": "4Mwiax5nvExYok8VN227zrXjuSGF9w4ZtMtUpNHgLouwQVCrY5M9kF2sEMPwajNDJ48PCi7jrmQynSSeB4nHJJ8d",
  "key8": "32RFTv45FDTn8y1f4DwSBZsaPrQSdPXH4VH2z1hQ4LZD8HFA2DsNJzZrAu8BVPjb7N1Ta3qkmoSMkpYVLWXgCoQR",
  "key9": "3LAuiQb1VKpNdCFj5g7r9Nu1XvyJwJRKz2WdgmwQJt6YnLqXCJm47Qu1rXs2sADwAbEzjB62Wuu4rhQKT8BRcpkR",
  "key10": "Y7uax1wSJkhhrrVu7sx6a9a3VDWkGnhVqEuE9dQyg8KUkunFXJZnUuwy2AeBsNwYdEq62UEvsRzLUW1reV1aCvs",
  "key11": "3jFxwoBeDAtQfs2YBV8cZTJcTKfQ7FwmbpwYJD7DhmNF3F4F5H3EB659uhEoJVjrW4YHKQKdGbBFpAxqHfUs4GAA",
  "key12": "2js7ZjkWzWeG4uyv4uSA13Amjefb9mJMieskeVFDB9oo4QgnDLqmxW9Tb2gRPd7zKaSB2zdACcJgQ5qF37iDjf35",
  "key13": "4eLPyeaPcdm4iH7fp58MvBjTkwvmJHHyYESJrFwaJ7br7wwiCvpZwXBLCcmW3JT49rp7HkJr8wgrpnLoznGyPTxv",
  "key14": "3HHmqkYsozKZXSTqKdc6ANTyhHm8TAvCqbRcj2VLNwuaDAQjpwXULGKsvaqCiQD65GWVo9dPCXhPt4tqWHAqmVZq",
  "key15": "388tcduQBgq88FnBBDZ452t1ufcyYrUNnVN1wUynohwmVG8zV9cfWoBFB93wRVAhUmgYRksgTKgYAvhuvTdpT2PL",
  "key16": "2tVW9FwG3yMjmbq7gJEeBwHWptvfuYyWgWDaHYKxvBnqs94G3YtyrR4bumLSME2E7hbtb7tjUpgyhW9NwmygBvb",
  "key17": "VB2swEM7D861TwFwWwv6dTB74Sr22QijkckoYqoaRRpBUSW8oJeXpn4s5S4GZfk2D2GUYqMDjq6YSzf4S3L1xuc",
  "key18": "WhB23wdrAJ6xWAWSMLiC6ez8nmeXhexj9kHqZatjipHyELEqXxSteHgHJuALKiMw4ZDWKE2xYqau21ax177RJjm",
  "key19": "22jPKEfhDBbAcPpYP5uURZxMQenaSLZaPrChXqAYoYBNtg1u4J8m8Wcunnb1PVYrGof3VBMsnKhLBGHXD1RnqSat",
  "key20": "2rgAtBb9XkrqypSmKFW8b88iE1woCySVnPcfBuLLaaCdHquYzzSNfKQJhePHTrBrDjgv8jSgo6VfenYg589ydsjt",
  "key21": "4YREoWitZiA3gqft4hbv3uepF36igk1GsxdWh78oHkNkgeU28hGge5c36YQFJxWDS99GqAcNywfMneiKJcyUTkuG",
  "key22": "4LuGBxtNojGJWYMKtFhkwTYV8awjDSKJ6sC9HifvJMh1srqJHfsAUdZEk3hp3LfQCyGjE3nvtw3SpM8waJPDiie7",
  "key23": "5ZJdiT4VX2mFhWQNAEvzjUu4oP6Z1PzfjyKfDwM111ZFdzKfNseq7jktpKtYDPG7KR9TcnQKMY6BaHQt1dmcZSjz",
  "key24": "2W4ZYy6TxuoGZCXiBk4bpXm2f9QzSGA598RGFXJ5HYqRSVPythBK4Bx4BNQPDrzADHGvQK3LmNuW7mrLDNPUGVj9",
  "key25": "47b4rLsap1pJuLLSirK7pPRbnbetXVgizjwbKpKd6fFYcq5oYy9Da7UPSeNgqvn1g2orZQsBstGwyHE81nDoY8L4",
  "key26": "GCe8D7suLesSXQpn9cMM54SQezuZfH6zK6ExqHMYMEt1HT7R1c2FJExgnsTBf5si2G4dcEbKYmd1xc49EwvHTPn",
  "key27": "4SMb1QJDJuyTsneKwusJjQxswJKF5zEbJ3CW98jGqh2xyTcq5yFRXXw4YehipaAX4cWSrZEog9A2prHdNjQ1WE9A",
  "key28": "561MpeAQYKNB4ifbNCBrzrsd7zbBPQy8ZFGfmCKaFBFdtUXNGDYTPZkYPkvMgQZYDxENwzbX1jnsZjaWgLBxxbrc",
  "key29": "qdzLYgtHkko6sXgDJUX1LuMbYNc4CxGzrYaGU684xuceMm3fZq1v2aQ4fGfPA9mBAaRZEMiLABVV5cGGNQQN8jG",
  "key30": "5n4KivWUm1B16Hd3juNKsfQedMyG1pnAmFSsR615KVB4JtG96QLKVKocMaUaaKtzzzrhmjSvn86t7CA7HuiJbWsV",
  "key31": "Ghvh66WWB3jkWLGeW4TC2U5MKu2zwkSBE2wqZ8UEQSBdksbG6qJ4tzewr6xbyDuqFTUb5sGtkqBEoz3iLafraNh"
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

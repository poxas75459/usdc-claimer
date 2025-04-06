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
    "VJHEGiYt4sBkXc2Tw3Uz9mthvFFYTP2fic3ivinLbjA4qnDFdpMDPwsX9warhGP4HqhFKKLWDmBmJ5TYfftPu9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qz9GV6LctQfpzpB7vj1qBVHJrkM7UQaRi2AtPzEtXpBXJFGiNMsMukFjL3txcSgzp5avcam2MiPY7ZtXvwYpgsB",
  "key1": "Sexbh8jwxT1uUbJafVyvWNaVYM4YZT9opPMTPaoHMMQHZVxuffzhUyB5QvmNCaCTpVkLD4dpAb9TkkTWqyRJjh5",
  "key2": "5CWGYAQwSnTTXiSNMp2BKmog579EnGyPTArChmyNHGNtPnisVy88ueKeuxV1BUzT6RNM11rFqYbBNFxCQVJrSy8k",
  "key3": "4xsC8C2Hu6rS1zwgxEtUtgRAXKCCAXrodvBiEttgatcjw8s9EqhF7VM5q8VaPNjYxwoTFp1Wt8X6oJkDPsoqPQBu",
  "key4": "21KGiHGEhZJmyznTY2nFxoAQc9XjvDNxmeHo4Bd6VuYqvBozhCBd2VaZ9NH8qh6zCTBQPb7UNoxsmfJ7MkFY9T5Z",
  "key5": "4zqr28agqJ7i8JMZaK2VNhmgzFXdoWZSEwVNvkNTjZ9JDiFqecjHMUjLXMX85QVTphLBGM4Fq8Hq1saQqbA48PkB",
  "key6": "5j2HvPAwQ3PV7f4xRs5G4Vt5gJJUhqEy557Qti3gX2ei9tiFqSg8UkkYkNoNobCJ4gmwK7CwZdP6Kpa7SvSL3gSc",
  "key7": "49UegLioTBuToYjhW9QAmxEsqKce3vPiDvaNzenEU4QcJZA6FiHX2gfWq9ajanJtJHbMJitwScfsQSFTjanuygXG",
  "key8": "Cko7AuUkxZ66wotGfSyR9a2PioiBQT9dJTQcQ9xfUSQJDZM9cKFDPg8Nq7YrCRP7rZoApjcy4f1uLQ3eBpfkkGB",
  "key9": "4Ub5TLut9xHoZjiDt4P7aAS8LoFFA1dxxkTxgtmLR9HccA9orXe1txM4YnDhDjvwaXmpJFJio4u9ZckpVfHXwh5f",
  "key10": "3gfTi4ALn74B3zzKanjV6jknfGjxq7eGWPi4Qz1APmuonjo3b56Y3TJvwNHp613tSLb2W6V9tGdS4aqLvE3MGsqs",
  "key11": "2ha6R3rhrEg47yyHsNZeBvVW8wUSzkPLQEARQschzsRhvfkuFweFBnqBRA6by64ck7yjRChb5Q8yrSi9pqJ9MAW7",
  "key12": "5YzHteKQWETD5EJhviZBTjLmTFWzJXESmWw1YoEkFucKZA3FFeY7E8iVC3sHKvfJVUUx6rCvzy9HBf4GALoeuh9T",
  "key13": "2o9eQzv5WpGfDjn2n1ukrGHH8zoEVUrvrFYjEHq2ccgakzESJ8mivUWTTvouhAyTTV7H5FkBrujsLoFhsAUhCFSz",
  "key14": "4QgXduVwjRjPrj8jJ4tW6ZKfEBsgAQrfBeqb9xMm138hCXJXzpF75CrZateRwML73vt2wmSEhVeNfY74BfVPZGaq",
  "key15": "5MUyfpv1VSaPEhnqR5tykjXeps9Pmuk67z4p464M4ycx1y8tByiMpjoaEgA8cYJ9R1zJSq9bFbwjY2iResA1nTL9",
  "key16": "3AQj8Bprzi2S4VaZvgZw3imEnKjaWyadnxFZpXRWkRqPWyGM9G5QmDPmZMSbRk88JewgVL3UVdyeQkat7HU7KSUQ",
  "key17": "36hc9iDNVHpAvifZWN6kLXg4oEjW1R41WAAvM5XxwuCMSsrGeKYkhhwDuuMGBSyUfPFEJbW7tFQc5j2xjsK2jWzo",
  "key18": "3kznPhYMrHBBQpNp5rutcuNbdzRdWVWpRweJp2TJcVuSKKANrtgzz32WcWorTACva2wFNDDZbtQ2h5bW6fMYAxc3",
  "key19": "4SKEaUhnG8J7HSJkbrHoSiZ3hAhkCkEC9a1ZshSXuCaZkQqqTETucZ43CGF3gTEhX7V4JRzewgkAD7MhhGfQaqBr",
  "key20": "3toA33CtSu2F2vvMBipTBPbxRyiqyz3L1xwEkYCPNH7nD2Lu8fuxShvNX2k9hDhRL3rCrik3cnwWqAhxGwTsV8a9",
  "key21": "xWaP2kBouTg2DFWKt2Kb5nJ5GcJtBvZeVqtB2tRR5QoU1hjXcMkJtM4XHtfdxxMSeFNWACThtoGksbPcjiWse6k",
  "key22": "4ptmkvNDviK4wVmcuNeHbjmwtMkZjSvztTnCxL5aU7bvBVuMApgjVXvPYkBCcbUxHCrJ43vCVciV31qWqGBJET99",
  "key23": "3BL388eKqfs31o4FcoRL8CqQcpvoWvWS4hxxYa7Ko946t7QyGg8KW9YuK2PHSwGaps5gxC6fLdgjjeyFEikZhe9u",
  "key24": "63aiNG8do3qtakcrEbf65cqSV9dWemJy5n8NLbWJ1zBpxmyh7xpahs86oxaUCNuErQqKe1Mr9kqQJevtTr3oQpNH",
  "key25": "5p1yVAmkjHgaWiCmXjXHjcZuXJySFxXH6jLd5RzvwPSFrKuCbpV7VW8fVhAxtNPPKuoZZoi7EqS8FC6wBVZgdD6v",
  "key26": "Cpfc6tGrHnXicTJKJWJquRDEKwiVHuqiXqnot6bjE9L3ypeVmyGWnUdrfmdMvCb4keLRTB2P7UcW5WPP2BCNRK7"
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

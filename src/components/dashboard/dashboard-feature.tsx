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
    "2KZB5tUoTQVJBNA6GBGCijbw2PX6A5VJewzWWNW4Y2Mh62tH9Ht2CjA7d5KR5qkscsoooDdTKsjoV8KcNZsup98j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LMADAW4R2oUXQTDoJ2afgBfXFBXqgk1WyFPgJD78RybXZjvEXZWLAFN7PygjTm4c7QP8YgMo54be8bJ7WqrXdJd",
  "key1": "36ZPy1Z9FQ8mGjJw5oCpNwf2B1gG53VDTpyPhu9umH2ozCveV5qycjNwqBAuwuuNvNCFS8s3K8BTvJjpi8FY873L",
  "key2": "QjgVR2jDKUncXrdtX2km7UgbYZkStFxMRwtjPrNbTaGw5ctttvC7X8xeVnmQNEJ361LNeJrtfPNcB6iiyDicyLn",
  "key3": "a5GdyhYczv6aJa3Lf7UEZnFpbQM9QAxopMbFTbBiWZNQw5AHVM5t8968imwdR5McQqq629WJyJZtTYRt3JWkmvy",
  "key4": "4Wy2fcXD5i2HGEHm8MH3XNGibALwtPHUAyb5L7EdxJ4djHEpeavqZVqKozVSsmZcx21ZA1g1ThBv4KwDTF3ZeSRc",
  "key5": "2D2snD58hsreYz7YryVLEzGWtezwjEXFcHoNKfm3MxgU3yhXjnXoBKQz8wRZNriDNRyfJus8fSP3KD3E5cQUUzjA",
  "key6": "oNyGMJLFioPZFygtS9RsiGPE7CuoAx2jtAERR54TLWCcnyypQ1243XDLRbGDQzhte5YXJhhduLV3KvwpZihig93",
  "key7": "4NL5THGzE48oyuSqhnR2vyi9qX44abfzJ9vVemfHZEVEeTNuuhibrs3La6Fvi9JkhqCmnAK5LrLtHSy7zPPhT37P",
  "key8": "4CVSzaQkXGGFakaV13xgRgeu67qDeAv6yPkov9SZR3wMJVWkhcvWK9uSyCnZSVu26vFhadFPKf7ymNKJBGYE3vhp",
  "key9": "3kPY8CVfBXHYDx6uhFASBanFwpRf4FDecbi5Mhj9mqS55RRVt89RbMLjbCrm1EkgRF5SFL19GAPyqEszf5bmTJa3",
  "key10": "4iTRMTgheHbXpvwBi88QbnNGycEgJnq5zhJA1wJkPtY3pTzVTmJnwEoeorypGUWhqb4mSNX6z39KEUa6Tw9x73W4",
  "key11": "2HErPkWW5UN78j7UFezSPnW9jCAdfzCfW7u7Nm2AjEjjJcFaiNJWyQxbF7tWK3qxkR1XZqrijt8amnH2uAAJTzUa",
  "key12": "2gM66HBPx1t72Fp49Y5gAkBeZJr44XjqDHsQ9H4iRCey6jyxaepxsxueEJdzCdQcZBKeYT8prm7UXpU9WaGCS1Mv",
  "key13": "5YubJBHeXykZUV5omegjvpPKKDsDPZFE22oShzLgBkBjhBkZJgjCS84yBK9GkMMq8zxim9a5unTFTBCtvia9zW4H",
  "key14": "NMaqgDwgyrPpepiFSnWGmhZ8nAyCoksWEa7Hyq4ZVcL2hoAnSPCpiWBrBW2QXnSk81uPo7iEjHsDyovM6fR2MN4",
  "key15": "4w1FJ8LngJFnf8zGP3obKC2wtzT11WH94KDBTZmr2wcqYchqQykoTuxffGuTX9LJtiD1jjaQ5XwZRHuFsWLjyXSB",
  "key16": "2dtkrZqTg1HC9gR6An1eUitigAPJ6JSSHAFFmqqsZ4JMPYLpF1JunqhTA7v54akqavRV9fuX8AJP9NjytTcKraCY",
  "key17": "4e3dzUiVnHkS2FXZdo98PmWmfvXDBY72fDE1kP8vgKo2bKNU6YnxyawbwzdtdgtZEfrR8T3rszKB3oTFWxfswM1X",
  "key18": "ezYB1JDQkgoAYEBmsujeNzX1kXsrvpvu1JR3cyEaksg88G37EnVjJqjgXW6PkQq8kjo7roy7cV8ngH1JGLiShSt",
  "key19": "5xRoPtJbVPwzhDsH7KzoZUgebo6WakSsLeXXsZbBsydfGzWvE2zf5sKRDEZfNEv2VoT4bBLqrBv6j7iVzVM25pFF",
  "key20": "281z8jHcUpkzgp5PuetwvU5q49dWSeRkCmX2LHDscBGW3mCRTqrQsdm3qEguyAe2GjERFV8KAqsDffbk9jpQqSqz",
  "key21": "3FCHdVxx1myvC8aLbqwXTPJ2KjPUThdm8heJRYQvbDXjW2QLknvC1e5AjyJSKkisHsTnVrrUQxRvGAoqp6Z1cfNP",
  "key22": "4xD32FqeJJ5BTc4K5ZrpvtJZrimmfspgLZnjokStVYWRgLsQHnbPfycoWjiSwpqPWFrS9SYNEikoTw9CfkuSRpTQ",
  "key23": "21CaFiLNZycHiZr6N8kfcqo1zvg5VsbTGyrMxwNJoUDBp76Qjoe8x9tXteE26dPq5JTRYNZTxRaUmtCE6nQYKncF",
  "key24": "5PCZPCeHk9n9ynVdXSDRMvu4u9jnDVKxiNagj1Ed553sajGr78GixTvuAjUPUzM331z3n1F1eCRDCemVjMGVKdCn",
  "key25": "3ZfR9JzNxhwfa76qKr9ZmJR6zVnZyHDLKaY1sjRByrEnJXkZaHN1ebmkJCii1QnUa8r84uYrZD1WsjJZGjEP5N6r",
  "key26": "5BFzP28YD3R1NroYXC3XYS4pppLdJJtrbyAreYazWJZhaMqxjbRBvqeqxX9QoxGdQrUfJkW1XiQj4oZw3C3oQ5Nt",
  "key27": "MjNXta2oqydm3FPUxNqEZbUDPGEzfqUBggrsumbmihg3MoEHHJS1iCADyzjFb8kNTdF9f87ucSvWJoGzLpZaQtt",
  "key28": "3GwwVmJoxzLri1rs8BZsnajccK6W1L2ZkEEc1PaiSeUwyzgYCmBZZdFSR8gCG9XA1jAEKSKwSSotCRyH4dewLVjt",
  "key29": "yDebGrwYVbeboeR1rCQfmiXMwTezAnE4CN71UBPFJypeLfF62JpRPmiNN26qbRZREgNrX6e27jNTTkaAch4xPo8",
  "key30": "5WNV9AudECEwS8S4Yk1218BbiVjxRpKzvwFdjMhMx57rUeuSZAjoQxPQzHMwQFhLxXPshEkufcNBWJ6ixQmuS5Nz",
  "key31": "uXsuM4Fb9M9tunnX6Tvg7pDHDUSZRNCA5tzLiHTYjWdqJ5ABSxmMmv2W2dEfuzkFwbrkcjRJZm3VuS9QfbFLRwG",
  "key32": "QPu4Wefa3CGqfY3bdban1vb85wBA4Yj8j3a4MshdbciRHoDwFomLiFaLJjKV1fFSqifnbpg2cmPe6CNLWECLvhg",
  "key33": "2XnrmZz9UR1nWzc4yEVRfgTXD3hMKo4t7CME7FE2uXYcXeDkUVRWfMBJV64eUMvybS5cpFHp2C9PH92eFxQQHHjc",
  "key34": "5XXCk4PXsaLhECri5khWCBfpacxx4rKiSkt2qGu6ASVBT644GXDVR1Gx5gdMd8oDfjYYAnNSyKAFuuGVM31D5ZGp"
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

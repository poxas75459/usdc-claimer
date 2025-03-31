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
    "5opmnz8bt34ijevBci4WJVBn2UHNsnZtLKowrDaXnCNzU5cZ4npu2LManHs8seS4i3DXFG2Naa38tfZkrzUpKa8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gctg8w36bV8ZRDM9X7pb9sHLfem7r4jDfAG8btDnufBFtX3RJWCyVvgDxB8UqrJHLVx9xKg8antBkeQqMZLR5TV",
  "key1": "u6jW2W1siCiYKwTTBCHzRRz1k1oJ9ULiJEoGmfCZ4UG4kHeF15LjZxy2c5g67A5MjRLGU4bMDjnN5FKUX7EhMJo",
  "key2": "2mYs9EUboxMQdLMwDcgtpAvMZWHcHsCWxXQLJNssE9cWTf1BVULdacW44TQmJe9VqbdNGeMsfmx1PBbzM5DiF2ZE",
  "key3": "VzKvYZCD5hEBRihcj2iZX8BDEGZMJoLcdJeiREa5CvShbQ9dTGVBF7qwJLQSYjte3eJaRwbp3Qfpo5YggiEH2Zu",
  "key4": "54owa23QyxMCTv5v9KgUuMs54mbQVAAkLXNXXGE4VaGJf3D2uFfcx8dSH21SFLdKVPvKGWb2wGnHna9Tpo3HvMKj",
  "key5": "38GzTnhdBnYJLoZ6sx1ob1dc4fMxTfxZPQbPeVFCSigKqKKFm7StYq8nL9wohXG3b8iqHFtxoNTfVPNNC1xcGWZn",
  "key6": "246BkQDsyT4NJjPRuVad1DFxGJkh9kN7YAAAVFTuBhXCNmf3B34dAAvEZdnMiXBME8vFq5AdvCB6P4kuGqigf5ga",
  "key7": "3b4nLcA9tazTX5HhyuE2ZPjYSRyzU75EtWayvuSNdSE3Wxk5mkg6vb5FPEU7fKdP6ZnZJoGUZq4ByiTLv1rDoLqS",
  "key8": "3uuCJ148poE3pjuFTPCAw619eiokq3g1xyaFxLCb6i7DVVtBByPDVer7PRBbPuhykZijM7jvgvzY28fXe1o6S9Pn",
  "key9": "4fh88opQVm2Dv1zHGxMTTNskQK4ma1syxfEvMNrMSxBmEfCnFuNsTmDpMuzebuydrEvAJnAdEgPZbM2kCBSnwyoo",
  "key10": "291WuAjeD4n5V6hjxkSnDNPxqhsW2ix4KZCvCvz6nWNaHQ6JKdJbqXB5er4D9P2boFfHPSnW12sLs2ByJobRcEAx",
  "key11": "5FWmaLgqDfNgzrietZ9iPtKYHBdQQ9rCpz8Rg3xMcC9ykEfiXc3WwemHgqComp3qApHCmZfEqFM4g6QxHA1n5vjt",
  "key12": "D3M31EV4u5Dgg5SVRoxFYTA2sG4Wo5dUKTU4fcnR83mnzFnFqUBvkx1pmkoKE7Uj7CmGYABCg4EoVuhY884MRLt",
  "key13": "53oYzK4nLkJdkkTJEPVQRcaUj9MUoAh9pT5HxyVCcLoJiN4gqsVPvJBYNHkCJEmjFZ8cz9eX2Uv6dZ7rGfKaQjsf",
  "key14": "5AAJVddAUtvB9AUA6dzsd5p7usNWYyBYaGVAWYC2pFYHsotZgeJMJVt8RC3fszJ7uRhWNiGRLt18cK44w7wR216R",
  "key15": "2gwupuNEHuWZWYcJXh4xXwaMUanMGD3Qf5sQyVuJe9YySoDrJgNWssypCdWjjR5qmLE1h7hu5sqQzLiRyTDsWEy3",
  "key16": "4nANkTYuyGrwq4sjXhjyonY9SJsBWs6oYonRbhoDFHpNvx9BPJjxrezrzGp6bRP4e32QeSNN8yMoiPBiRQyMYM27",
  "key17": "3iuL9nHTTNt5Cw5A9upyZ1RWzXQxZ7dNhcBfC1KnmDN6tWh9btZUu3gJqeS4gJBsDqyKuAAgMfZfYTUh6MVMcvDd",
  "key18": "4eAChK1vBnpoSCcQFyHYdY7aFiwHBJZTQ4aM27zpWz32CKeaucf3bdF7tPKfPAdCUXvjfQx5NWvizJZUT2tKZHTX",
  "key19": "25Gdp5vzhwButnv9ihXwQMTnbN9tLph2HXnzofoxfaZ7a8BBFTHpxBa5Ho2enFgb3NbHb3GQdvcg3F76SuZtCobr",
  "key20": "xkw9m57GgGKmEKmDw1qXCs3nb7AhqXCWB5HPzXFEZn85CQXqv2pT4iPVLJ7hG2tCwR8VVhLfqdNpGjsNSZ8GDgj",
  "key21": "45dfRccejWgvn7cnrWMAs6jFSRKLg4JXq3m9GaX7n8Ehyffx7Zw2L62AjsYdefoF9X32UYi7gciE5Go4kzdXonAX",
  "key22": "m4cepQtkCTW4q7u8VsTyqtn19c9P1rvEUMKqZXkqzEEX7YctqR4kvXsihbhDf9S9d2EUPf9v2n9JxxsyefTZ2K2",
  "key23": "4JhouTSakY9mAkYNu8MYnZ522D23ivurxn87eiXPJKpPwuBNscMHw6m9KS8m3VHExJvF3JgbiNLUKkXdkvWbXijd",
  "key24": "g2ErE2bjeKqZ1D7gAVJnMpcKQNZo24h2G5YKeuouUbFrYDdH7uwC9Tyc2Z96rRoV4yJJeMF7dN1bsZcF7ghrHto",
  "key25": "2jPJ7sPYuUoVZ4NWTRryxz7vnTm9bWTeyrnxsRCD7wJGT2wg3vMVtbniNLCV7tMha5oyDwgS1e5BvUQfFkRrocfd",
  "key26": "3hYoVdwX6mksv4VM9GJHpgdZZkKB5q5mZbrQ2uZLWrvabY3GY24xLnwhYanoLKDnpJrMugREgSx1t6p5pRTkoHzt",
  "key27": "P89X2C6k1PC9wfrYSiPdGswEEc5VkYPZP1V7vRJyz7VNFBJfLXLTAMLdoyrGztnMhAj1ikDurnk8Jk7XDedQiap",
  "key28": "25pxSzrCJEumkZeyz3ouy1Aj3cmJaUPKqnpJxf72r3qNZGe3nQMPj5dJVjkr2sbGRJimMVnraZzr6iGFJDsC59t3",
  "key29": "3QJgxiNsrsR5EGywoGXYBvp4hxiBDFuqDq3H9KbnsNGUQdjWQkShwUV151GJ5iXHyGBAweLZppgc9Dvu4yPpYTYA",
  "key30": "5fAuFxUreBzvyw53T59HiXYJnTUD6AYC8uMuGd6AqHQm6zCUX3FvrpbuSVCiCZzoFrvHA8ccQxE5YreYWneSzLCT",
  "key31": "4UH5xBNBXLSqGr9SQsTQQ1ewVhGZyfdtctPvan7iMABnpEorXtKzwdL3L45wucMV9xcmegdtUaph41sM6jLDgSJ4",
  "key32": "4mGTiZRfxDZnU156iSHzFoMex3nngCMpEx2rWZkoiH1xKXMnSfdFazUTSUwpkZXj3V5VETPTFnzhg2Xrq2RMMhyY",
  "key33": "3TKfXfLsjAFUefmeywpy8uJHV8d1cyRqqNYM4fYrKGUAn6m6Zteak9bAAKkyD3mPz6mQKVjUzT1sbaTvNGtHEgBW",
  "key34": "5KXpTbjQuTCF7KBrMnXZkcLvmtazoYwGD3aefaNv1ioPYpYcg7VRZHVncifh689rfJx8ywXU7wtpkLNZLDqvmfWN",
  "key35": "3SUJGS8FQjdCsqd8nXgMN3YsJHvfYhKCh6eY1pnLWW46Ae7MYcY4Yazjt7633iriPauVsLbHfEL17J7dcpCGTtrC",
  "key36": "2r1QoamqoRsmiFno5eCwAK3ZzZ6N23CYrDhzG5jZkxkFpnVkP8V3S25ZQzrDuYz9JhuJF67QbVs8fi9suFvPLymj",
  "key37": "3FBsGd8Bu7W4eX6k1KEyA7K8pvqMroi8nFDuVRg5Jco22i3uQpXC76StkKvUq26WZF7wyKW9issCAVX5azWiWUXS",
  "key38": "5v4NHfvdAcrHpeumXHmQFy3QDy5KhTGysNBJiqA5YDeDCuZe1ntuoYF8QK7oLSdjN9n8cnN3cZj8nWdZRp6Pph3u",
  "key39": "Zc55RUmZBY3sM8ybfBnzuyREAAefkMNwtva8evc5EMijfxEzWbQfAXgesWEa6bRxkmYHS5RvvcLQsR2YrLHnR1d"
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

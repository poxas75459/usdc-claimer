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
    "nC598tUyBXHqJX4zTHAKxNNUw7Dea7dpSExAps8zWMgGpW33j2zAv3X5zbjW3Nzv13m76b89H4HDXcfUFv2iXXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4pJRHypRCfpCHR9T7gwc2jrTDtVddXrytQwoNB9SgXRLrv7UsiFcuXA2zkXk4rfA5D3dYbAPULBWS6s19q9wo7",
  "key1": "4gqKP1qVMwGFB96y7pa4tHmMjstc8C53m4F5Rq1LpKxtMbHzocTa1KGPBrshrZMfz1GwNMdrHp7zSQAtD4LZFXT5",
  "key2": "xCPzMUq5aQohazXtdnnQvPMPhbRE2C3vXvxCjp3TsGcXo76xpDokFbSA4LMp6eDamxaTipBCUb5xuNxiKzATV2D",
  "key3": "3VZLZv2MD6TeZWWFYocTqbSic58vZ5VnC91bsWEsAb3hrYrvFtBm6k9VmcqHJY1W86PCjFDRzLk4vNniMPGGDR2G",
  "key4": "4eWrxQbicmCaauWNoXczq1mh3fH154CrWaXRspz2KM29VZFFWUDdJKqc3VyTGeyog6P4fdSqCHpjbpoAQRZGbhkn",
  "key5": "3B3tye655UUFBQ9BQDk8WZt8FVpwQUZEi8YDkx277Nrj48M92XcZugnARKdrj8oyRJCWJ8vq7MqwAp3F4xSDeQ4M",
  "key6": "5v9WdVPuTyKx6nv6iaZdeeA2QZYAGgCKS2j6w3iHLbX9YqZ3tFgTgkURZibwSC1MLnwyLAHJNUHt5Axh9uYBkMGs",
  "key7": "3K3x9vFWM4dNvjPCRpPdPeFtUYrtmgrmoBLmjw5LCRVWmreQmf8mkMDazMAKBcfThiXyPdU3Xom3dFNeXs9CoKkn",
  "key8": "22wQnC3k4tDYAQDo4gEsDgYo8iSAy8RmyvXfbtnMfquHPqjJC55pXaXURxUvUTnhV92ZX95AqF7axKVWMZm2jpKP",
  "key9": "2a7Zg73LGdeLyBxZFqU7p9LHBtWD5vwapHDzQ5jQPNs3T34vUuii55MXMBVP36c3GMfMVceCDRdi9v1se86MuVPg",
  "key10": "pZ9hqtZLr9upVKbya35duQNdqti1tK65jDvPGc5N3ypHN9Bh2uogGhgPX95D6wbRau8oZgJFL2HTd6nTypaQE4z",
  "key11": "5GfHHb8rGn5oJj7HVZgij9CjcfM7te8SbzPjUS7Tj5YRzytTg2Z6Ct5KTsR4xpWWMgXU1R7LXNgLZFUw2UcxL4dM",
  "key12": "33kaBHroaBjQgHcUsmUw66Pzf8Rh4k1AyRv6THFBJZbfREPwKxsWMCS342MYmx2ZA1f8CTFgkNfjjr5FwjTXK5Gb",
  "key13": "4xRyZHKzFvHas88NcJrorEBakfEhReXXU62Vf5bShHK6cX8QyfYFHJwHyFAFSVcJbnoMZZ62hTPCEcnXj12W8bAY",
  "key14": "3mgJJF2tjsUHkSsePpSgMmhWwHkeDg4iCc3JDTmr6sGJdij7Cori6xYV4h4RykpoTAW9aa7xE2jzRSh86fTTYmQC",
  "key15": "629URe786S5CMeDXwoGbusrnMPSRXYYr1j3f6tKodfk5ULvnJTgp73HeBvuyPVbiwaEyuAQLsskkdqnP3VCUW373",
  "key16": "34gbydMAF495TkbAHPaZ49PbY4Cz6fDbttaVbMkXKZAiLtZ6VKFk9xoPRez9EAee6Kb9M7DhaURLGXWuJNyucNED",
  "key17": "4i4Bhi2Z42w27PxENA7feeQezqQgGtxCtHtBtEAScjPtsWcfQGGEJvFF2zA1hfGVaU8i9QbWugKY47EoxFtG3vGG",
  "key18": "5cQq5bbGisy2Bb6KUsA3cVQmfFedXdcr2HuG7QKKpmCA8mufmkYGxdWYDQZ7PeyGtjdocAtXSh61yGySTewNaXW1",
  "key19": "33t7gP9BYWLoxs67eRp6pyRAv1p523QD5WUmzf2j8WFBvEwTBXpckcMwXqu79Fqe2GNXiWVENW9YXBWcQWV1Vr6C",
  "key20": "4j4VGt6hpKfkWakSBBBQZFH27agXn1bRPcTSkgMh3Yh9cKhQJGZJAhY1Zf1SogTZRXHugkruVfsjCHZBQSVoGdaz",
  "key21": "586TPy4bQ52ojaZr8rWiqKCp7nVUz4fc1PdcrXKq6oLi4josnpKVZaTS1qQ4M56rcHAgb1HR5ktJRAFmgNgKuV86",
  "key22": "5wP16nLKc76dTvsaM5sepkrfTBVVga3dgpeqn9RAC3VH2yx9C2mBPEY621E5upDmKimCBR1zLHXW2ELQ2hJhiq4W",
  "key23": "4ykDWW3zHC1HzgEHGMXhu6ToSf9Px2bXRTm6VFqPAPnU16Fe9HocgTywDk5judXpkVmdMedwTBBojKmiryZFPfQo",
  "key24": "5JibN3kpHUgkoN1oM3wDgGVoywTGuu9MvBRjihRS2ZFEGrbiS8uDug79S6PA2rtgY3G7PiGA21NCMvSZwQ8E53sx",
  "key25": "uprB1nVKQ35xVA5wug2xgbHgaaKhQ5hn1mSjHyZY1q3563rzaYhsu2QoahADNNYyRJ5KBm4y5VsB6GCRWTcC5zu",
  "key26": "BhrZARZjfqkNaxbVn9weMGKG6JMttFJztAauZbvyLwAmiSdZBKtQYZpQme8U7VrgLYJamPDp3HtEUWakGW46jgB",
  "key27": "2nnP3n6Jh6qkPiPZfLZRim5mRzzoaVTC9dfg67Wz56bUcDCcWVCs5JpkKu67VCxYqDNo3FFJdtAY9rsgdBTJYnth",
  "key28": "5KVdEVovL2mmucZCaqXQ9RU1x54fNsJ7hH65ePTRFoq8cyJntoVc8nxTFzGF2PqqpLPBkhNhwh6GskvAvVqXqo9r",
  "key29": "3W8diLUfQZNxJ6qJ73HeoDfUaEpqWYZUJoRz2VoPUrjRpbBYr6vCt81mqgCWqxrxFs5vQcEJg7yymL3aqBZW2gfR",
  "key30": "61ZT5w1vzD69BuUiaKkJaeZFQT8N4ijpz6DRyaQZp5uRmF8ozRkdb62by1yNrEyxwgJ2qNYnyPWbybJVZi6i2dL7",
  "key31": "2TH6NCp918Kbd2HT2JLikTv8ZVvER9N4Y2qtVLbtcbXkzj79zy46yRKRrd7SGiQsDcXVN4kH6WHnQtcXz1pzha3Q",
  "key32": "2D7ZdFWbwzMJptTuNhKYXy42NbGa8qxkb13mbcG84XfytfAcgVRGg2dySTTsp9dA8YuWHLXLFdbndubjz5Av2E5V",
  "key33": "3NaEvBhCppxJwj3XoznTtWQBbjAv8yBQT2AbtT1q27eNxGcrFM2bXxKq1hU14qY4J5ZZWqjti4RnNfRRFoJv14pM",
  "key34": "5y4YzFtozqBCWsL1rS4VkjTvfV3qnMDhtFbrLBtEJmpcRUgrCmkrwfNMPR2X6MRyKvLHDhvGgvyDeoXvNwdj2fkH",
  "key35": "4u1seCbVA6NKDqe2sVxewamVzt6Bxpd44GaAxRoQVpeKz14zx4ecKR7Bui4hDDrcDi6SNtTjnQ5dWvzMwXpDzgi",
  "key36": "4gie41B9s7NeDKtQCcCPPGtt9YJstLfLTbzVnbbwSvVwRTSNGemPXPZPzv7qmiPdXeGueJc2jBnUHnTjWNHhTddF",
  "key37": "5XFMLA4SM4tp5gYbNSomRXgfkBqJV3tj8uQ71dF6gTn4Q5ZD8mWPASf8xcbEBqfQ7DTSitkTj1AUc7vE6D7d58zn",
  "key38": "yQJzDqfnY6afNYy8ziaf4pFcnUFMcRtA2vvvNibAA6QZmh4uRsToktPHCifj1aePDnQZX1zGU7r3Aghd7DpXUpx",
  "key39": "5C4A7FdXB3qNA34uSN2pmGV78ZHociD6yFG9g1HGZCcHtCXvFFjcZkKNKKvqDsaXU1zx1JHQ28Btv34aogVRScKo",
  "key40": "4NSoexnXBC187uZS2aNWC14GsefV9kb4Yuxk7XkayGqvcnef4ik3MEm4YqMTzWTHeCyiqqHY6BW5123e2vcncfyz"
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

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
    "nikZ65h9WrXJHchfwTVxtuvPVdXdRteazhFzYtnUAPjcpZuhjKDukXLQpfVtsQAoy6nobqhgWExDf1Fcwv2tcgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2arYSGd68xVBYMBdHsye3iNFLC6P6urYxgxD86Lh8yfQGYwyDTCi1FjSYtAASF69HE4Ncm5TXDzPKV2dpVBx1o8e",
  "key1": "4akmXVcNQjw23cfjdaTXkU3kY3ZWotbNHyFSaZ9yUPsXhthniaxSZxLDS2mGADzkwzXcwA2nU1HWWW8HrpbmCny5",
  "key2": "2y7MZFXiGUsUGygQB5oQyRPYTGdvQfKf9EhgMiX9QzPVHgN5c34eAJnxfT7zQKMuZM2vhDh5mabZoMTP6PBxvkyV",
  "key3": "2RmAzQouM9xL8Woqov4FfVxddRx8GvCHkELK1C9jviE6Wzo6PDYMQNr4kqZEbBN7dfcp7EATqxYvfdhk2Y7NHSFK",
  "key4": "2LchxCmzL14dmUHJpybviFsvNtB4XrnhrePa11SR4RsJ7ajMSaLN8knE7LYMAnqWuNtfY1vvNmtpQRn5e22gZWia",
  "key5": "32rHQ1H1E4fuosf9qYu6Jpp519QDd5t54JxjN7nFmoBX239pTnVoc8o2krLAvHorBKH9kQJk74k31KMesoiGEL8L",
  "key6": "3EYN3YypTTGCfFhGiBxpsy9949n5nbL8Z15HM7EEECqPKWuC4vTCi2SLH5Rk4tvdLktgJH2KyKeLdJBBFQfJLFiV",
  "key7": "2uEMys1B1GxUaz2jUm3NeNSnvehHe8NCR9geDXh2Sf3acuNyQ5oEpHaAG315MjhyRAFhW3e7s6EgE34WPwgbcMWV",
  "key8": "4Fe48XTMMqoh1wQGCzWNWg5HPx6xg2BGfkPkeAEjydhQbitiir4EgFgtLZujzbtV7YCiphbQvV8xpvMk3jtB9p4J",
  "key9": "8M7ybaBHhKZsNVkSok59vFgG2VboxKtRY2gSmiVkzJVodvesfTGRfeEyLYbd9cM8rYAZo3sbG4cvwPhUQpooof7",
  "key10": "2HB1RmBnh4bZjVP8vyFFJCWduvcv6kSGy6AFymtQVgC5z2AUu23RgwErgrx5XomzEKw87wYh8FARhrXEHWZJyM2",
  "key11": "4Q6aZKE5ABNxKQMRdHa7tefaATh9v8mBQ4XVojxQE1xDqF2mfh44z7P9WhfHfw9CBmrBk8qAxKF9167ek7oLacxF",
  "key12": "65NEj1R89QeJYyStcpcjY6RKmoKiXAdSqEG5HYvsW6nhtmsFYhmbAko6ozsgF1dK8Shd7hCf1n4bA1RpwjD6jZg",
  "key13": "58koxa67PZfrXQpKNdrU8btta7F92Pakf6kQqCes3QS27ZzpwAMVHzdoRaUFCdFj8VGagcoFGtHWyryvk3adisET",
  "key14": "2q1BybMTVv1qnhVf3tMHdJQYsNAgBwd2mwb79VZYZQktTJGGXERFK31J8sbx3fiUuwzZBhfwSvgJBrtk8iQrbfrr",
  "key15": "2nBnCtgWty2iZ9thmS6VYAkNcv77X1ujp1LhxMHpxW8qSSeP8uiUpYSoWk8g98Hk5PE8ZKibF28qd99cA9MqGipD",
  "key16": "2ynosJwvs3yYZDt3Jcry2hr9u27H1TcVH1NDZCwNDc3PAQqvHTE11k54khWELRzqmAhHSVtgXvrdYTaVmUrbpn86",
  "key17": "YVkHc3JkRcjbBNayS9eiCPm3n317WaRK5Qr4288qDq3Sm4TCCWbjKqa76j9MXNFN8xkQcC8vg6BXPijMu89rKSy",
  "key18": "2jawAZBUir896tAAYFyzFHYnhWsk7kPF5Cid168yofxkFQzFU8spomTSfpuWF3kV2zobFTJbxmvFgSybrgLqQhcH",
  "key19": "3mnRw1VwN22xaY97zR2fWoY3eyhFu2J69gArGiAiKfXLMZ1dNJdkTtNb6a9xNhYHGDzsRP9b4y7c9pTqCkrN6TLD",
  "key20": "43uDKSKWNRd6JVbqhovNpeLDEM3ZyxCwptECSQz1cebS8pvX54RYAYcGCgRWeTLeYrQVC2X3obQiHMhL6DRqCqKV",
  "key21": "4p9PZ1DpSrGfyG7nqGsEgj7qqaUdzZqBzwVCPXmDgu1MYcsBAyeqLhjwtJ7rMHyQGvxdCaKoj88HN8EvyJwsU2em",
  "key22": "2YsTJi2UfGTE8UKDv54awziRdzueLXh8HhyrQ7wymcgEifEWPcNYcyu2Yzw1TGW3dBzZLGztWS36md5owmDN4Mh1",
  "key23": "K9C1UPfnTEyts1Nh7EsubCtNWJ4wb6eeCLyHBv49bxFYa7oqNYJWYBn2KQCD1SPwDB1Ef7X16ZHX1Kxa4p2dSz8",
  "key24": "4LaiZ186FJ6pnGuCkR1pRz4VHdXJ8jaaTBHeEXgsvWuPLUgLZzBsLrsyik1CrmTSB1U4KJYjGC7opK8KRJEJfZC3",
  "key25": "46hjdXPjJuJoc1rwqyuLTskqjT3QKH9JWhczyW4re195eM49xyUjHM1AdGATQjLvB4zSZ5WzNZ6MUHW95C5uAYdf",
  "key26": "Pzzok7mAdC9diHvJ17v3ERtnVyVw17wXdB8TLhJGfU8jFbL2c4b1VE7twdX7ih3bjCT8hu6bxZo7DbeU4mED6by",
  "key27": "5BDHUcgjHEpQhvk7aTiFGXmbCZffKXqSFMo2WFz92BHg1bpv3EZEtbodLDD5S2DDgtEzB6QtcoGoVox6wyhmvRHw",
  "key28": "55xGC3PJq3SjLHAVG1D2rWa3y3EfndyQacNRymi8sAUkh9o9xYkXjhfuVT5VE9u9sMoSaG8nYKXDTTjTvmd2fbMk",
  "key29": "qkrQXvaHmrRzp4wAFqL3FAdXLQqwxqKB8tXZoUzUeX6ziMn7xbXgBP4KPW8W8qaUR3xvqRVryV7gZAJokDV9W4N",
  "key30": "dNbUev8RV1Wqo1wRdjRvS9m5mNUkQ11MSycLBmZfGSEGtrxpJojpGx8GBZcmYv7rZ35VQcwffiMzyLmcZDaU9xZ",
  "key31": "3koqoN1JMYv7x5P9sTUytyQMB4i3LmQrrZDXoAm1nNPHx4Ke2HCYm3NbDgRPF3x4SRNU25WFB6Qt62dHkKdqUuqr",
  "key32": "2V7J8hDZU31RxcrfCNYq7EEdR9odsYbPx2mbyktzwcTYt3XFxFwqn1w4FCkDMmbrH18fhcjybyVUjs8tHQAUiw7u",
  "key33": "K9tpNvKkZemsFwcihYgsXP9kPN7p68adDHfTCJPciSunoJCSZwndDyTaT1dmmGDNFyLdB4j2r9FpkskZz6nqchR",
  "key34": "4ffPU8eQwynRX59VCdND6ouMsiX3nEBd3TDrqi4mYNVjdz6yo5zb9Ey8un6eCpKiXbR95nePqE7fxeN9jL7Kf4Ya",
  "key35": "5a7PvZSLbYxNyajEXrCB7bHezPTTKpFahJTnBJY9q9zA8XLsVKjHsywRZaKGks46fJmJ2APVRmuQEXBXsXiL8S8t",
  "key36": "2ALQiWonVrV2KTwXLocyYJWqNCvJhEzXDBmoPAKRqbS5oTMAf4TVjbsoc7UKD9BeFj2dUt8MqsiwkZojVem5T7fi",
  "key37": "21jB1ZZrgEPngxget5hykJP69HkZSjk4i6ivwd9cL5Sgda5f7uUP2y7Kd59FkrkRR933DW5vpDsjEZ9goUjxdXxk",
  "key38": "4CSGMjo1gCU7nwDT1zejikqS2s8zkdjoG7L85eAwfiVadsZhEFvLePeqNsCpiReTsE6kY3mnaA1qgKsrrDgmEC5N",
  "key39": "4KRrhw79w5PN2X6oojxZzaEEyCm7fD6WWDVHFpGzxK8SCYxFvDjcgQqt6w4CEnufBgeUfKZt4JY8YDvb23DJnRL7"
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

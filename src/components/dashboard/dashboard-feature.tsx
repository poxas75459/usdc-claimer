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
    "xiA36yZZv9jqhoUhLYVcjJcrvY5a65UjKf7bdsR9gjAgqtUupQUgqtuN284p45PsSU5TvSbXzM2m8qYgmPBYkuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T2NUSZpVnY12AcotA719qBg2c4SqFvgN26ckVbB63Bqq7DSVMe82UngY4NkNRtbkzmTW19yFKR6zAu2drmshiKz",
  "key1": "52otC517kRoXWZXXn6FLyasC6HcqzX2jfTmpACpxhhRnMYsA4AeVibUbQe5w8SAsg48gq72Js8d8LuMo4jVhTppX",
  "key2": "2WxAL5hQCjDSRwxyQG169ig1yEedH61fbYv93fb8iCruZ7KikZefXQVt8u6CRc6WEgR6JYnXvuz1QrFzHs88WiG2",
  "key3": "55hMrjXTpMCbUKLQNMDvCF4cwuYUKhqXbAKxywE4DS7aG7E8kCLQ7sVWBG6sSFVhzAZfGjkH2fWBNm62xeVtRzTn",
  "key4": "5pBs6tMNkbAZp7c8NM9ewaz9reGUkYttguLzTkHN3JrPd3w8K3wPMoV6ibZVPWgeHcDtPsAZmiE2PUmZZJPVGEuH",
  "key5": "4MYvpkhn4ncGqq5DmUJBjMw7HU5dvCdrNuK7okfzm73UWw3rGwp94LE8KL2CZY3kHhLeEgTEc8mMyKwkdozC72qk",
  "key6": "4u23bQCpMF1zQz7yUwyfeh5wVXq29gMK1U6zwpt7zgQUjcg8TC6L1tG6rebhNyCtoQqK4pkLP9toVwypx6syhtV1",
  "key7": "irqpRdW7KxbiUKt2MsTgtxcUjgMVHGjy831Pzp7KqwcgybqB6orzofPY3nvpJ2iGzz5KM4xFLqWT3rpjdAXAVWe",
  "key8": "3aP2BHYRDKKMt8S4wEsrbLC9yTrrLG4Mt1m3mQbjffYyro9tYaYXrThNn55Hkb2gFHDWWBwwTwZmUGuLvbT9npuu",
  "key9": "4qmndV6aDPi4XTnVMUJ1ZD39dSfWyVFwGg6XZ98z9o9ypY5eQTeCpada3HqLbvjWjywvCsJNDAakrX4cHUCaghSh",
  "key10": "2vFx1v3AzLWhiMumNKkc4BLKwe25fzp3BA24EDkpm8M5HwvVAKmKyxJ1g3f8CVL5kyre6RXMst67jkeczW1ZyWzt",
  "key11": "64DYmLHv7iidrkb4wRwyNf9XL5FMrp7bMNQCpw2KYhDPG2Q19gnSKjgHZTgCuijDEfSad1BmUnZSqaGUtZBekCEo",
  "key12": "ejbgL3e6TnY87orD2cx8srba2Znh2ieA16mdxb5V5jna8WvNiK5vqeBUoQ28fwaKr1k1dr1kRzSSyajxw7MTDch",
  "key13": "4TXrb3fXTDqfNKJZPPCTWUG6td5SQB3QyxdqbBcugJu9s3HGYc3eoHG2GSCwSo3tigrsuFdSQWNuWjb7J7GaRRU9",
  "key14": "5c4jQy7TB2vbdFDGyGtnbKLPdgeb3xJ6X34HaGHwoNcAjB72T4weXxrjQRxFHVxqifFoE4Z2ZjfryAiiffybHDhm",
  "key15": "5DTvxWUQGddPgLJdFd7RRLC4ZnZNdqSuNSogcQVtpfmyEZ6sg9oTAjrgQnALtJXXrGk6Ec9VrVsXik9gL9k1Tnzx",
  "key16": "fumfG7qDHJoqN4BhDnk5qnLv2qaLPogwd8yLb9b8X3DxzZznEpbqT4tui89JaAL9a6U4KTCLNDjahB6gyQHh1tA",
  "key17": "2bJpdiQVGXRKWSjjTtswfbx4rvRs6tnse5uDmXTDk6aqVdMqfQNgMqgcT5BWZtUn8WCCoCPSxhAgmqG9Y3vJpWes",
  "key18": "9GKsmLn3TYJsBJLbPGnzu2s6E8hDmEZqxWhceE62XF9UDQSYzH1u3jEUjrte7Q7kGxXAFymSFK3EgL814osW98D",
  "key19": "5LxBEAbtdBLsDKtFu2duSX12XL5yyaA1yN1j39FHzZASPZCR8LhPPF475Nkre4Dj1i9Q9v1v7zgVcy3PXCYVjYnS",
  "key20": "4zDy7jRwKM2Hk9q5k6WGkpaLVVkEx6DTaD3S5c57bu5Qw81z6mkaiTwpwbNzJLhtC5YTFFBpVzVxK4C4KeVchQk7",
  "key21": "5fTR9bqF42GchjJDBRopfycVSayJNh9fPrQgS6GAtmNKU53TkSpWSE7UB4CT5tAQxvEC2Zwd5jpyv1PsgEdF4Kaa",
  "key22": "DQcNchg5DX3Kx5u3DUkfD3aLW3Z35UQNoXvs8b7otH4MJcsAzC1xLYB1RgFiQzDpWGNd9s9Ue3GyFzLM8Uykxad",
  "key23": "5Y3zRse8uCS7SZYxe4J2moQasGZeUZZZGospFXaZDf31rH8da1DFvoDfVigw1Jbw9StzUSfjzbLQvVrSL8xwQZWF",
  "key24": "2XB5p4hMhvApPiT54Zg4kfnVrW5p2WrSCXSc1BBXLwx5y5J2h9Mrzhf3ttPhAQL11jg3GJbg4pry3fNUKUvCeBvW",
  "key25": "3cDMt1KJ1UpyA4TtNK69V4ww6mLTNKhGJq2r2uWiuY5tM3TWffPYG4T43i22VqboQ5orBMKNAX1fVsYan2ACNMVA",
  "key26": "3dRxhcgq9Arn7pixc3NcNT85Fk2j8XFR2S9rDQbPJEvFKThwfZ2geiQFWcTit3zYiLYMUQyBCZzAyxgnFLntc1Fr",
  "key27": "naQTX36DWV8Rh3rniEh34Lx63pE3XwUogSuiz7FxSuSVuuSvvqJFqJJWEcL3kA8xq2yg2HKeAxznzBqoJN5WkDg",
  "key28": "441dpKeMdAwGxAbGzd9M7DwsuN19TNpS8APP3xfVquyJmmXUA8NarMZC6TV7H5HqvZ8Zi1zcKEW4R5PKaVohH128",
  "key29": "32cr8VmBRNZ8Y5C8oQH87KxinpumoUiSKL3ZoVdahBCzDTDaouxz3efrHTFEA4s5giae9w1egUCDYuqi6sAvvQzD",
  "key30": "5wD6zCTjRw47L5tk9qARWTCFwjfCPEbkHm3Vq3tiCWT3Uu7Qr1fSHZ5SANqGTUSuhit9NRqFDwtxin2r3cKLDWx8",
  "key31": "1wcTvL4HoWbqBdrs1nz2E27GLbVKPFywgcvXGRmzk7mAzjLr2ugaDqdK2Lk427TNnMpxXfFTEwphhQWsGdHMkNR",
  "key32": "5zJwAHdWHpf4MAoVDwhQgFP5HpXuTfTNXPuBSYpk3Vm5PMDY6EtvNNdu3DxwQEZeMrfU5WFDvL7QDdfUsXVCx7qz",
  "key33": "by6zFPaWgCUjiZkE2yiDS3Mxt9KJ6V1Eq2wiZn6XdMLuWPbksuzG7aRQ3Ub8PjtfsnUBKqEE3jZwW5DCyBM74U4",
  "key34": "uKgpR2qnpUUsfmRZF69Vq5LsPEe6bixryD7yRh8ignf31Z9S9MbAisNpWKyktn4i1UB82MNTmXSn9vEYEYT5LgK",
  "key35": "5kZWycotyPeZANcJTRyYvGkou3bSguvZneNd87JkmE3nTBZ5cHW4mWoqVNmwiQ8LcFfy748MdEJbd53fASVV7mUA",
  "key36": "5q51aYg1Qjk6RGMtujmWqU3XM8GdSUDL8UmJQu4cSDGDiH9JqWbLRouo4uJTrF4fLhigiZcVR6SfAbdDnrow9Mob",
  "key37": "537LBFWTT9gT8LT3Aas233e2NCLUzrWe19gzh17EHFBMuygNi6gWtHiFUvyCnAvxAfWJRq8gYdLfH5rJLgA9TiYF",
  "key38": "PZ2WQqKst7Q5hg7qVuvGqy35onKdJ7qN3gca73GpgkRLHVnUAVSNsakxVefT1y4EwiDFrzDa3pfvubc3FPW2EpB",
  "key39": "5BesdParKSoTW2HeV78BjRiV48oMvvstuEJ19cmRfynG1Dbd6eP2Mcsi2BujiayG1uPGwQryZCPRC71zetddx7Wx",
  "key40": "2wJJmvr7gQdzUu4iUkNzBUfXwRMfjwxezPzGtcJ9SuwnAAAoYK9nejpgpcgyyuC8pgHEiAipHnDwYsbu3m6xM8Kx",
  "key41": "Z3a1tcRhGaiCavyuan4S2ytAtYF4CN3MRHdmjqq7ymWkp8MjRpY9AhrLuzGi9s93URPpf75DNRwaJC3cSuttZre"
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

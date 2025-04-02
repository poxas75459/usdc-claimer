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
    "3GkEC96rJUxxdgVcfwUme9gr8jaNYYveqc9uS9LUb1G7PFJ6RAYkKmJQJGN2iuoN42x1qMtckyTWQkZR7Kcp5j8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bFMkq2EG9sNY1tB7k1dXJd22VUrBs88uCWzdY7BzcaHaoHhASBEokogJw2sm392vuC29VmNhd3VNabdcD6FKzL",
  "key1": "Rtg9gUL2AcZ6XL5Qkvcq5vkZmctw3BaMq3Ukko3A6wFEUYJNjXTphN38ma8WLsTRGioSLHByhPowUUAG1vamPDY",
  "key2": "3cUeWCFhA8zd1tY9abnVuhkwzPh3tkc3oxRuc9XaitZ5Y9tHxUfULkmURvtiJGuijauKd6cf4aSQNLerdwJbQmqz",
  "key3": "2E2JfxdwZJb8WQZfMnkVqEv6Srk4NUoFQzdRih3HvfFZkzau7VYhxLXM8X2fc7srnshei1tW95zwVzpprqYduboq",
  "key4": "4oDdcE8J9QyM9KqZs51ispxscpoGT3RaUk5aQ8cJghezna77SASScku6bHNMXNwyNryRKkf89hdCfmNZNGEcU4rp",
  "key5": "4HRXyTZzvfDocPYEM4Hfuv9SnERj21fYqNq3EWw4EqxUHq8vodpW5v2V5q2VvrHD3XoTKcoAD9q3VnwWzpCuiQ1q",
  "key6": "23BZtGqJ1cTZ1HyqoFs46uWnGfK4kAh2HMSsthQNLT41RbBToRggHYEQCcRGS2NfSoRh6j7tXJhC8qUMELTkas4q",
  "key7": "31R7TZiH1YRreT9suXCsmEYYvNxFRtcYgs4mvzbZN3Y6METR1cE47pnN8LVinZ5paijLUQuRevwhYiTHFZg4PiTc",
  "key8": "vtmDuyToLH4GoXAvmeCpG6LDaUPwhALFx1cdVFCpEJEFJzJPYfXtTxmShZYKDXZD7ssnyDCPEXFMK12VUycvsYs",
  "key9": "rLUFSbAXApSXiwATMytA3kmZrJvE4G9wi8oDsaBX2aKdDNceJdTPrx67ToMGFzexGSAs2GxHXoCTEpQdCzuTk1w",
  "key10": "5MSmfSQTL9r8m1nBwLYzeiE1r6yRWctSQ4Hj1jTpbsZYtoZdM7bRsZCiGjhxJivWJ6zEXwRqEESpGeTgwZiATb1Y",
  "key11": "4N6Mfdt5vA7tgw34EMC2hSUjEnqYDooQDHoWAuuPygmHVQ6HvN1gA39mQgqrvLNx6YMbtZeRYT8qGgeBSyMb9ANL",
  "key12": "5JvJn9mSiPkDtg7azTCE78H1geB9ALVDz5f2986tJ8X9h8te7wambekojAoEo1dEWTJTfV4bF5fhiZrQMwbWcWWY",
  "key13": "54PbpuneKPtry7zsMSkjKsv5dDqajb6cChuor6DsfvPNGv1tC1jK8Wrr7cy49QdVLfYjF8ri7aLYt3b6K21pz7J7",
  "key14": "3kNiRs5rBsuHaR11oBgyByYjXMmhFTUJUVFcAnc68pHuNXfiyLb4xQdbDhzF4B6DFnqq4yhDyxzHh2dikRLu5wVD",
  "key15": "5txXcGdPR22AGr25AZB1932jq1c4pBKCaP6G334DmbUdxvpN4TtJFYwEavWcTk3zE9hizD91VAgpVUEFgBjvTF1v",
  "key16": "3Qv1F8KWhkp41zcssyNgjCqkLo5YjcTm12Nnof7PtKPrZ9xUfEcBvhbeZcJCNJzUbvzXvLjGWrrZXMf9kr6D5pEA",
  "key17": "2Pzj1SYyX5Md5jYZeGW9AW288ue5cGeVshfhCaGgFEFQXoQCea15EVPAMmg8P8NHeZNtfkGgpE5tx6KeKPVBM6X1",
  "key18": "4wPMQB2ay5VRKAjVntyeRoY4zhBpr77s9fEUaKwCudDESV9CiH2faQhs4xsA5j8XKRktG9s6w7jJHZJZpdi1aXUU",
  "key19": "521wSzQxKgmUs8vYs4fWC3MYNj3Ksgo44azgijcd3GF66kdMLn9oemPsv6HtWGKnVy6SMF28D6S5tahtYtHYMcvn",
  "key20": "22X6W8RV469vjosxrx1oksAuSrTe5PRVaHGcNRpvJoEZ5LwZeiWjLwdymCTeMDBKUtKppGPtAbsLNDSMCBE4s5mv",
  "key21": "3iLgpmU9oerRqwnewaRrV4TAZCkTa2tQ58a7Y6rSFL9T7Hw7MbBmRzqi6niTFRFYgZmCxYrRDUznKSMLg27AU3DS",
  "key22": "3UYoAsJs6NMhqtSksQqWSgX8TgBpQ3TqJycYGgHCRwnGHzgHmptbztH1nUb84d57feFdAvqekkngSuXcMHpnFhH4",
  "key23": "2itgug7UQDPprYNJeKbAK9ri6HgGhccqU9NYWigcS2kFx2xHLwm6dkLAXKyPeADrdn27sfbCdBWTHSq8vrerivmg",
  "key24": "2CLTPqMc3Ea3YKMTs5q1peQvEwvwMpQC9YjSRV68vMpC6h4yU5JzE2963C2LbwTuRq4mHhKiertEjBxo6iihJEn9",
  "key25": "3P8fBXnTyPyBGma61dyM7KB9cgxz4FFoHujaP1fbGReyH34FS7VfmrVW6F4a7QhyLsDneLHoaRobw6yxogoNERQN",
  "key26": "5m9BHzbm2eDGQvuD61daLHKTEnJUWNbtJvfardwMUbxmyqAeSFed3QZxrRhaXBSdoCqwhppnYAMYfQgYi6v19RE9",
  "key27": "23MHJdMpxUoE9gNmPgkb7kjHAcfLzEUW3N79oaVeSfn2YQ7SmiyrtG8X7kPKdeang4jbjjKAwfdpoReXfwZChTTv",
  "key28": "48tdGpWUsSuCpWoYtE91dpmN9xmXY1LhLZJTi9bHoz32pUQk5K4h2JmFpqSt8yAg1geVZ1ZvkwF5rCGUzGfpz9RQ",
  "key29": "3cvUTkjPdxXgFJUQ7KAHDT59ifGZWC4oftjbufsHR9x9LeRF7ZQ3cPHZ5iy72BQQJYmKPWEsqNtsBw5pYbNSiQe7",
  "key30": "4bFYbFHoqpcyVZic39BpPhrHKkoqMfRMfr8oKoW8qiU2T4CLBvW2Sg76JiuNVkGKz1r7g3VYXLHqNNwn5aK1Vqm5"
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

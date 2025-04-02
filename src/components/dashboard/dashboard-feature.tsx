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
    "4JjKzzsVopYh5vSNitQ8pCFEdNTB22YQWrWP7GjHFnKKawfmeBvELzUVSNNQwinR7oJVf2UdsPYKTWrr9Sf5Wpxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZV9pYX9eMwT8ypRzxrPkah9jabSyfHKJegpUKofiuPN2uSLAGKNb5cBeWTM9NrTiZ5Lom3yJGK2xVsaTHQdL7MB",
  "key1": "bpdiDkB41EAsUu4SdXqkBj9nAQBuAbE7SEdkBhrRZfZCYex8kvLRJ44nPAx2kBiYWkvbGotuXNstfMeCZTNii9A",
  "key2": "3D8kVFNkq6F9V4iMxju2W6aiy85QpkevMeCjGWELHkDZeUDHfyMwt2gjiLec3Ni2tj6r3LSFrv9mVo6EWyJ28sbr",
  "key3": "5mCrHF8BGNAzvTvvxbWWJnwkusbYHGVZLMZyxzS85cDknt1VN1xd1CM4fx8Wc69mgQkoDXFhzUQAepkcJv1nv1YG",
  "key4": "551216hrpPa6MBkLJQRTLwS2uHwzpGdYUzEkJ9xdAPAqFzH9VQYwdmZdD9s9XrjzMKez3xSPNn7fHRnJkKDo6bD3",
  "key5": "21HLqeDgeQ8cCoexmzcTJQaoTJ5XGMgKUyptLRuRTTjqDhQEabDg7hcVeeZS4rpFukxwe4XoKsnFKKnKQkvyXyEU",
  "key6": "33uqc8Rk9HX5wPjUvELY7iFvSYQ7KvXPhX8CGuMTcEjrRUXzJt5Gjv8pHi6xxvuxmK9WwzowtdDLkskRmR3s31A5",
  "key7": "9rnuKjuFVmcomVkJdbveCDPoKYHX7fhBgg44i1c5FWSUxeURhMjZv2Li7zXCCaWtWFBUNPWiJy8oB7YuDvNZYmF",
  "key8": "2v2EfHgJiaGggYHZ1tRYyddrjeJE4eVnE9yqcR2TRuwFdERo4hak9PF4hyjJpRg4PC4TjcUUMLK72R7VoM1GbbMN",
  "key9": "215JsLekBWhv92JWhBn88YYp3NP1DuZptbwHuPwhdoVu73ZFKAd3nLhyhT5QZ5VbaGf4RFFyTQ1xtiGGKr6qhLca",
  "key10": "3V6k5m231bzGaZ1ftAmHyHLfsrZpb11woaCnoospnoYy3kY9hyZ2xvXKNdAZVh3gbek52SrgTymFZhY7F23viB8u",
  "key11": "5TbibpqVL3rQiChkqdGixN6XeQB3iScdedsPoVsxtXcriezcPDSK1nHoqQ3KZbYKtUh3Ese3d9HsjruPapQD5EKx",
  "key12": "5j8pR4roFTfv53M959GbSC9YW64KgxPXaKwZDDegha71kijNiW7nC2YuouoSDT2b7uQMfMPbCeYQVmDs5hzmHohK",
  "key13": "2giEGqFe33ATcFtx5xBdykSgpdNEc5nm9f9F1McQxp4Tr4dh9HSgaM9yeZZxEvaAH2aLTM9HEmqrSHJXsK5Ltfmv",
  "key14": "5Hi2rQ233gBpa4rDVTveRNQzGDjYKzyYN2x4wLbXnDn3SbDMGz4RtZYQY13tiyjxDQF7gYGTeMipXeVd94ine1QA",
  "key15": "4CwwbBaD4N4vegycA5ZVypatXJk76NhoTEmWtFLueqRG7Au9aU4bLHeJY5xbP7w7RrDVGAcmruuT6zmicbpN1DoW",
  "key16": "4d55HJLGBajHH3xc2wMUepMfaaanrBD86zsoCJfHti4h2hQHEqpCYyNbVLwP4JX5oJryRmuo2G1csmdDej5sN4jf",
  "key17": "2ZJnj5tUmjcveDYaT4YR5CbU2J3Ap6E7Lj6FH5ZtGZhaEA4vyE9ZRJoUK7zbw3syLnxjGsPJL5uLf8tA3FeQWwEZ",
  "key18": "cZSuAUKVdtmQmeWcUviQ6DmGTLuAAiHJ3VnVdbGJvgvBwNSDyVHTE77GzZjqaeQcBRxFA2Z9HtGwiCoeDA6FE6p",
  "key19": "2m8426Zg3pezBUgf53PCosZ37HwADVW94T85kptpmMoWJYLXh9oMCSwQVdsFps7VPo9u1NGcfvRqrpFsmrGiTXvv",
  "key20": "3dUqM1AfSQgN3Lo3HkScYtznxxEh6PaUF4dma1Huo72pipP2Nc4oTQnJVgdsU7yFEuyt3K2FGhrG6zAFZJ3QB1du",
  "key21": "21pbnynKLt3XfitDaA61jKpex7rfgZ8tBQHUGFGpuwe5GXGCTp7xFtXroMd9JQXcA3BpYbyBdEhDPAb6ujwegkQm",
  "key22": "2jWLqFNJvMbuCBTn1w8zmdbjP5EUJSkFc7deydew1b4drLxCy7AZxv6URuvQaTEPA9ay1eHSYTVDY1nHVS1dsh4D",
  "key23": "2MacakPU7f3rVymUx2vWoUwU4Ww26WrkB5Nn4UwPzH3qiMg29t5iPrAi8JKE6JAVrsaFZPUFGLRpzsMMC6pEnE7J",
  "key24": "4iK8CanHsk7ngR7CULQymLTPCmYPCaMAVerXKPYzjASx1GvNKqaXf3YuFVeFQnwnFB8T7N8AbyePNvT19wWAcm7h",
  "key25": "5jvjwbmFmfbh3rL4E35uUHo2BqTHqbKi9pJLgzFefYCo3KnkaeUmswuHmT9DF4a31t7vgTHgHCpizriBtFyHzShq",
  "key26": "4Y9SFPLjvmjwDdsWq8AicVMWmt1Gf7rj58kBKBBfPX8NQrm7vER14LYENmMCQLTrWVCoz5j9axypQ1dHVXQU1Jvm",
  "key27": "3q114eyn9azdNxiKfshthQ7qy8Sip3GqeMBp1mq9ETe9HKRBYf18kykajQtKYrsTVmmSA6Z38ydwiCdhiYUJ5AHu",
  "key28": "59iopGcahpq7py86zE81UhZpwXhvknK79cJy4GkV7W61yH8cns7bn2DVrHMYvLndJPdXfV6t2B83TviciZ4Y9uj",
  "key29": "841f2UbSdNtHDaFy65yBzUon7iCwq3Yypxe56DafNHbw8Fiao3hQpyFKF3KcJZcpuc59B15KssPxUCecWcbMroP"
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

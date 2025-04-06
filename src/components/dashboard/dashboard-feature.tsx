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
    "2uUwktDAYeZ6bVUYwHrrApLDr2n8ezi5wM5WBozV1Nqs9c2vftigspnWyLREwAMt7jSPLMHBCFvMheATz4q7u7Fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QadvcHbnvPbgSQTLombL1Xm3suAEmAqpyDEdQZdWVLRvW86dXjX2oveKSqWmAtPtUeyQUZMAJ5Z4MihQew5vGk6",
  "key1": "4a6SQrRvmg9WmthZecegPCzcx1n1xEsPppjvtZwjRaCkyah3ivJjdv6ycr7qYdVKTC9kS4D1fHGxFDwUSv2YgU3E",
  "key2": "5LDjx25NbfYPT79PRKLz36UmRkN2K2vzWy9RGddwASGo8BZBCVV4VxS7MvNi9XJahddDdK8DPKZ2nM54pEVSN83j",
  "key3": "2rtXKw3Mzrz8iD7X4MnboHuHpqLQKSLZPez3ytzbbUiKm341Gcp5UkDPS3Tt8vz8n3BUfHKUwHz8oK7FXCL1wS3h",
  "key4": "3z2FiKB6U2xNac8T6t4gpv6uT6JkFGKTuPootUDJ8ktz29aB7bHdt5826o7oW4np718XUZB8v8xohFAjzvGktmwU",
  "key5": "3oVK9M3yjRNrjDqK8JmYjRB75szcHWyueHia22NZhMTx41P8rvfqRM2Bx9f68rTu4j1b3w9w6vdzvvvnRrb7Q7He",
  "key6": "XfBqMe6hurMxtwFo53q3PkrJrL6nHATWHybYKtJzRF1TZ7EzfKAAEjnKxHKQYWY6Tp9XZAKfGh4CL1uVEzUR3Br",
  "key7": "4Zmks2tZ72sk2SrT7tdi9VkKyYDpKNdX6NSar99bWE4WJbkPjDykVDyFCnnPfKmJcCgShYi63Q3xoGz6cSbL8Aud",
  "key8": "PM1Xa4vab4Jpoqg1MRyQy4JKV5F8FpTi832u3kMs31g6m1zwFtLmEXb4GUdSkwvD2PDMdGXr53AGUPaUzsxj3t5",
  "key9": "4Sh6XG9XcD1tyHZwBpMWLrCNtxSxHRFQYrXBYsaBjg9vNLKZcRdCR5FsRi7D6dxmrs3sNWa7wJuGYtWKJoGqneNL",
  "key10": "4aLdciLNaJrEEkTm5VdYpvbEGQCdm5aVFRDrLBrj9yX9ghHsiAkhPa6eTXi6YaxSZPKAEoRwvmMekeneN46eXi8q",
  "key11": "43jyJCW4XQbF2P8iqCexXhvDad5WUHGWMsykUg5NLZf6A96X8RThTkEaf2bfxdViN2iQwQpBM9L6Dh6XzUeuzNxe",
  "key12": "3qDy5PVCTMSXBFFGofMdqmh8Xs2MrjFrJ5JWhQ5jGCEfoD2AtcPtiQ2rMuSs1r1pb3ktBPkRFDxkZQWHYvMViytq",
  "key13": "5f3Ew35MvtWPYha1FAeN38L1TT9KiCMH6eErFaizHWQv2vgfM8vdn6svdXoeztgNhqzgPUHvoQ916S33CrnNt5Ha",
  "key14": "4rX4pcZdyGKyqFz2p174i9gTHuSba9GMdXu8fZaynLWGHNZuH1s4rxL8izHDUkt8uhJ5EwNUSadWrQL6fNqb1dw9",
  "key15": "4kkvjdFoZNBXnC8Wdb8KVv2gSy9wZrPVF5XnE4x8ENhMou2PhR9TUHpCvtSaZFvsdhawz7c9WXB46rcnKRbc6Qyg",
  "key16": "3mEYK68Y7pHY648E6dkowvjDTM8vBnTJf9W7xVmEHfvQadfXbHM9ZfArrfNi6pYnkhhoKyGv8ZecKrV1jEirFzJm",
  "key17": "3SWAXDaxHfsdtVJqKBPeJk9hu7EHwsYb5LZtY2HLiVgMya59dJj1fiyW8uYazTDMrXV3dcb2bYbvcBSZNfcViHFK",
  "key18": "4scXF2cTgNuozebpha93RZXFzfm7A9rHVUHsCwZXwwV52HFCPS41jHMtTphA7ZmZ8nhkZv967oQc9WguJYQPc5mx",
  "key19": "4iqvQjhMpqQU4gpqQdr1rChV8jWYutrqFbT1C4suLvPTQCz2Yx6m4tZq5PS9G8z85YdSoJEKrAfDrWebYu83euoP",
  "key20": "2eurbEKawMVda66BwQ9trD3qJkXJaJXmiFF57LVWtwTgipFfmJNfdbKzGJhJ4Bq4Dvtz795JyTiQ6zpFvQ79i6iW",
  "key21": "xmk2uyBisdxXj4YAwENoKru75KgNECozjtEdoLLnc7M14sNYvCcedMHqobSveY73jjwV4LWGGxcGpHBWdy8mgFP",
  "key22": "4gM9UTKdACV3Phk2B1eufS8rHaq7ozQF1HQX8zL3suHy5PTy3KyW4gizA4Wk9gE5CzHpoDWfD7HB9uMw6x6JULSH",
  "key23": "5gYr3iyb8b2sYW1WpXC3XCw5M99kwBEwxikAfiEXpLPUfMxWyDATSp1NKqzbk3UgMdMA7CfWcBnWah9VzxCCRQ1H",
  "key24": "4v9XGNDgcDKXQk5qu62GAJ7UUnTQyncc4Sp3eyCkY49kzkSdmNwJaqtjNJwJVahARhJnBXkUQaEMu25h51RoQUzr",
  "key25": "5g9hEEafWRQQyQsXStQN1AoNs8bRGV2vRZ8EZjUqFN8wW9sa475yD1Xms9XgiFawvpGspVTRipcQExdtEd1AQ8Rw",
  "key26": "5gn2VmYXK5dF7AtBKo3r6EzEXaxqKoAtAZp4y6VtjtU61HZhGjpBStMUuJ59jUm8g148gHUTfb5p5uPTaEDN7zoU",
  "key27": "5jTkmVytvUzf6x71PiKTaa1aQStRntarugJNuWdfz7Z9WNfPDoQrY1jwZVu5BnssKhqfqF4EC1Yws99V7EYumBxU",
  "key28": "5LHa7N4owM2gZr3s8neHaMf2SqfUS61pL9oKGmeJFhcoxY2ayY8aZpmUaQope3RrKrSWwsZsueFF9EjJvV4fNsh4",
  "key29": "5TMJtv6myGxQs1CgUWHVk49RUbdvBDcrCC636WYqQMwzrXB6Rxhsyoeyn4TPJD74r8fjYP6EKNHBn1R2Htab5kQE",
  "key30": "HxALvVdD31VnFYRTZ4sXx8UuArmHMxHGemr5bNU7SUeXqwxsvAZLFBqLh9Es5iYaCxPLHwdG5avGmbAryED417P",
  "key31": "5cQNpWdKdCfcMTkB7fG5pjAF5DtCtzgVdoq8cej2apptyq3sTEziBQDQQRoERXWA3WfyFBbKPmvLZRPTUNWtFgC",
  "key32": "3jqgNHDBz9MBG51LE8AVdAHQ887PN4SLbc3WoKjVVeEEmusoK1hTRFSrGQErDDWtF58cqcD85E2zzE61M1FYvW1y",
  "key33": "jW27GwgxREPZoF939MbwWYF9Nf2Y6gECx9yaeGuS2ujyTqvMWB5vhUX6tG2VaXkBQsARMNaE4d4nZg9cWhzJ6vE",
  "key34": "4MZaDVpQ1RbjVu11S4exC5SLzJXtsR86sMQVoevNy7cBGaJgaJchsqSLeGL5GmvHhXJ2Y3aAvKVyY3XjQCDnjm6G"
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

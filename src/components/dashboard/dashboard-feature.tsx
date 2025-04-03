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
    "4LXsq7ENSLew9HJvRuehgUiVyE7LQYHZezBs7whWKbtpgMsVTpA6m8vJD2rySFUk8i5LqtZweyFsrtPzjUxqauuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hW4Ubm2iMtqzhmY6ejwrqcHECKi2wRc4aoa5Y8wcjkDfb2V3xLwFpkvjUoiYwjKvFKKaKBokwm8fwXGMVgcWqsx",
  "key1": "4y5eGYJzZE57qgUq2XdRheFjXTYqmXxmYdgR95gyyU6e8KZZmKqcRmF9B692yDCgU2NdfSfTwP5gq4Nkr5uJ28tR",
  "key2": "C5utGGEjViBb7vX8DEb4wHdTvJgQtcNPZueQPq8i4rtCHur2WZSkXY9xDWqVQNUNpjrKHVHCiDDxPY6Nhu7p7Ch",
  "key3": "bcqQTJNL24A45KgBHT5obTK1N45vACgvW6NcTRMMeEneRJvX1SYvhiJvmuHhJdM2jS458SBKVtAGYy1xmDo8Xq4",
  "key4": "23it9AEuPXadyw4GYCcwH25i3sVmWAaqxCASsrZFV95DYrgGo65L5szfPUQxc6Ltmx51JH2SbDmtzs2wpgkAyhfL",
  "key5": "2gkL3Nop5hgjJEGHY8sqvdWSG4Qr8oGoCjjc1boFmEU7oic8U1rCKNDQLNGA4n2r7rXfF2bnZE2kqqNxfNPbped6",
  "key6": "4qDwp9VuAVZjgsz4ZjMg67MQVdHnXvVDEn4wJWpq29A28zBXB863b1co1hVaUb2sFbos6ob7NtPKet7bA1YoRirC",
  "key7": "5SkqVsECk4MLti8pcKxBJxR7GZf6E9siwC2su11MzVuGm6UUKEDcyqcEvDpKy2j9ShfMiDsZEvdR5zHV8Pk7eJbJ",
  "key8": "TxdaABHw9B7ij4YGhPEtZFcvDyJ5j1YURnKyw4ZzP3U7PkVKxuF345zgr54VNSjvViEYqYCD21ACiAAUKyt8oRo",
  "key9": "4um95jxi968jCC6mFM4JVbCctCNZb2tNGbvWMQp6XGHP9zYxvHKD1FRSeZ3hVpAK7zDxw81HYLsUWDZSHtNh4BdD",
  "key10": "XuCQmvqApEr5pG24hcREMgkBvvu5e6DoriYVNm1nHbXk6NmdM1WBZcEPYDUDeRppof5rJCCaGjuqqPumEyUXktE",
  "key11": "Y4gaHCQit4mBaPERcMJsCdSKmWo88VrFsd9S43VUVjNbY3VhuHdTKWYRNJmfKcF2RDYjAfeHh2zZ7c5QSs3oBWK",
  "key12": "4VRSt7nLgiJ2v7zu6XYPKsHm54XcgCwnLiHL7aCBj5JwbVqxcTGHekrCEFCFeazX9k6MCqoqQaj7srrn6Ys6GNLq",
  "key13": "voFzBHVatmv2BHVoDtDuSMXXGYeXKQS5xSaFRdZUT2QgqYS2fTZqJgvDsBm7TNrN2Ybh5do5Dayrq8EmSHZu7Yx",
  "key14": "5pqJ39uyXwXAfBMgCprxoAU1A6mMkE6kN6oQquBvQyQspUk23f1gUg4huhNR8gMiKEqCtQmzqa5EDF88LdinAu8U",
  "key15": "5gkaFoMVC3cmsNzMxhokWRo1TwveBZM8KAKJHzNbvZqY54e3UHyikW84GUoiaqTf9pSC1yuHv5vMUuYBdNh1Nw1K",
  "key16": "53K6aVyF7s9shSDkNcWb28iJJwTnvdQrpYKi7Zembv6ZbgGYA3kyHXDpPyh3SeKpE29SKH2JdohNXkiqey1oa8yp",
  "key17": "4HUiWLaTdbXiW981r1KPXSx6Effnqq1qsidkAp6FqiCpydRMCXD7gKykeVuxXNyuJLmUx43WUJjdpL8bDEhBp4gf",
  "key18": "bQxtag6if91omJmiM5fJyuKgy3EW3yuem8H5YRhtHX3heM6xE6aFbWdoPrDVjM8S6XV8wJGcq9M1J5AWudkx9Rs",
  "key19": "kDChFG55BuA8KYW8fjPYabFSABm22RynA1EmeD9sWAN48XuUeDxnBqXF1sZX7fyjhtKpaKeUDbwX8DSgeCC1j8c",
  "key20": "Uvg5qUNGNtPWm48YACR4ZCsnpYEZUQC7juCBuiQvoYy7psFFsA135yrxwE35peXh1AnsV4ZCEDi7orbPdHZzd8S",
  "key21": "4pq4PJLEu7VktFmoxXcnuVDnsBJjPmE3D34toufZCNDSBX3qCYMaoDHBFmVY6MiBYVLpjTBsu6Fft5S7jTb85iCT",
  "key22": "3RL3svzXQwe1vNab7TdpBMnbwdw24GneWnyg455do2wpWukbBJgJPmWchw12Un8Q9S1aQsPsGDY4bbZY4xfkniKE",
  "key23": "2S8nBuo5LiMFwimansgKTFfvoh9t7MCyWFQpaNpf1fA3xiUBgpDmhvyfY83XqBizGsXgcmTZJV8V9fBWYnRJKZyS",
  "key24": "rHMZQDtPN2eS2U31MB1DrPsdG6kg3zTnBTW5MarvCBEWzcvHkK1LDGmG9b9ZbUPj9nB33jbZc7HC4Z4uv247uUg",
  "key25": "2mRRENUF7pf5ofchDTmyao7TtE6etjSm4VoS7kSbXQ5tVuTi9acP9QzMKXx6NBvk4QDMoqtJCxp1AGobg32BEsva",
  "key26": "4nW2213NyepbvUTfVAfPZYsPeULmPq4v1C9aNQ8h9hfudzizwyKeMwy9V1TKiobuM9eFStYTMdo64NvxP8THzH5P",
  "key27": "5W4JZ671LZtAUJL2FsQZqERPteReQjtGUMyzQoT6qwpMwAafFfVYcady6QH7kBC5KyZuBY5EoqSvscpJX54ZzqSg",
  "key28": "3X2ckXo2j9N9ToWCWJk1483irkn8ABUkZcqrEkoPuh8jC7V7gYZC52mFthjP7BvNwR5BDsLaGNJ9eTVmKM4b5bBw",
  "key29": "H88xrz5TDe9JAzXV6dBsF31jU8gcRaeJGRkCqMxpDxXzcRGHv4fpVWhngNapcTQBxG1MYWHeD8oXDSeYPrWsX3A",
  "key30": "5u9VDCqaSoiDfhthKf6mhRvGJxvmfvk5DBw2qhK72VAiBnaKGZTiUCuWKe6eDcyttDSqtzXNc9ziXvUUjb4otZc1",
  "key31": "2upqigkvpPytwh2z7REbufh1BDw76ahEeco24FXwyP5fhyKAjyYJevNENer9PBpd8om9PnRrLkKbHZdQvDEUtWHf",
  "key32": "3G1gNnAo8ysVVcAhBJZhGqbDhgNy4Px563u3QoGvvCc3FBKy2iZfmrk3SKTUZG52uEjGT29b96KVN8xob9Fzqwvi",
  "key33": "4X9h2t2vXDsi51eHXTJ6bJ1qsdw4nzvKySscVh94CZbv6Qmpgf6XKP7Z4SrzFpiUjTVgGd6hw6NgspRDseAiGwp3",
  "key34": "2B3mp2WEpbhJU95W3stPgtVbTGinCeWxDzukqRMnQLA5i7tNdKZpq2HCfwMxay11zNKE5Zn6jKHnNgTbFAoGHQE4",
  "key35": "2dfYMSHxrgwAWwhrso3u5TuFn6qJ65wavQgCpfbsfMsTBsX59DtKUnAJu7Nw3P1mG92kyQ3oDCXDoBqReJE9rain",
  "key36": "4cMY81PbRbWzUgc2qqNUJB7eG9rvRHH5FyuF5jo6bEjPZZuF9fXF4yop4ze2XjAY1De4LL2JbCSAgrQhoiTy9ZRX",
  "key37": "5uMcnjNC4PYuCMshDgaVfd3upBjkvHCP4oEMFdj1QXxvFB2aggxBXXPaQp3pPojMmMVVZN1dPyMLkq9Ku6muFpVp"
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

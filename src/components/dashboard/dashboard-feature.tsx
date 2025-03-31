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
    "4LAppc4vw6UWTMv53LUSTYN6gicRuuSpXKPjDxrrqPDARGUCVmp6qX8uuhqqFNATp1fLo9B3H8G4LGT9s2VrTQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4Dto2hsFNDebeamfhdALeVa81deUCV3XEDhYTaeEnHsAiq87cawpoBPLWZL7hdmqyvdSMtJEcMU2eHx2LSA5Pm",
  "key1": "4mXXujPn1faMDMMvKzT36ZTS4zmHQXZwp1y8zdhezdwp4SQT4esJneAdLzi239V2wmsubNGhRkmhNXUDdHLLBqg",
  "key2": "5ij2iSaoRhy28GKotUzvMkqCycRA2sTwFsyx2zu2rvs3feSDbYLSivDyaSJgzRSRh65e4UBiQp21h1z9HownGNGv",
  "key3": "3t67zJaR1nmXJ2NenPqtZDWrr9EgxHHxEZ87oSHnn1BWxDaHJxQs9xFADLKd93osMH3wNLKuXsKHZsTaUoa4b5Zo",
  "key4": "hGGXVZGrzJAK7oDpUcRfkkFJEeDCaB9RbYwDwj6BxiJ8EUp7ywKCVMMH66tkQxzRX2uCnEh7jaCvy2EjGAeLA1S",
  "key5": "2AtLszXdkEoL4DS7ZESXKTTQmJ575yd2pjq22qzSXi66J2cVBnhjNFE9nH7CCprhMcFY5fRPcmB69Xyusx3waxEU",
  "key6": "e16SX1vcV741uaiKjAqbrgorCKvxj6FMbB26v4XgUfRhVZLwC2875SgVtpswcaiLwUYfjTsQd496TgvNnPXimdr",
  "key7": "48RBMi1uGZGg8T5GDxGkxBDTqgGKKA22VYJxksJXrQbAX3kT5kP49bCZBzeVkuwDD2eZWB9Yzmc8jrCaGz9W2Zho",
  "key8": "3GmtV3jsFyU29tiJekHrsiV81upTb9cJCfE689ZJE36xPAZHNrHzQbaPWNKfnNz5tj8upqc1UTGGLD8XMNTQTexx",
  "key9": "3NkxJ9iF1ivncLUuULVgpk56c6nnHxyd7xtCUWHoi33ePFVaTqggDsvTji4MTDDA2K3aRLfS6JynH6gN9vKbvZcG",
  "key10": "5erWDi37P4vF7ZcFs7y15pBf3zVs3juR26RGGMX7VnNgpxyJkRzmyJ8K6jcGjx88Yf3FUvod9u2Uj1ED4qhbJJam",
  "key11": "4Aw7P3Vq3KCyMmenj92pUMRLnSPEaL1Gwe7wdDUyfn4r2ZuJ2c7vuUU7zcLQPMwyqrDV469UtLucFXra1t3ck2yj",
  "key12": "2WcCV7JAFYjvQcg7RpDvRUCiP7eNBqgZ6rjF6e8vSxGoTotJWSH5XXHkZZZ2LhqfgE39P1Uk6nqdzQuAJjDxWp4i",
  "key13": "4bJgyydpTNQdKqETsF46qzCde48976RL7GKfjS5LZd4pZ4rs8uxjpFdYv8tBcTZFdvtamoumAaiSc5agybfHesck",
  "key14": "41sRx678usBB5Fd3WwxEk9eaWZcnbq5GwUuBfyWSZHkhNgAhrRvv1f95R7PbCGrT3d5xv3TTzhnQtTB7eGdgKtJp",
  "key15": "4EK1mh23Q2ouUsimRgP5w9b4B26uA1Yuef4JKBeKYkWphituQ8sjAgQPmbhbHuSHWQVjtN7SCegwFTrTWXUqQPBL",
  "key16": "2NxMQ1ZaqEwNw7TGeCffLd6Xt2rLrGh5mhij9F1FAmw29BsvFXvevVeY2wkBBBGHxfP9XfDBncS9xNxQmVZiZGcH",
  "key17": "NcPvmnA2piDRh9SDXKQ2Dso6efgpZ82cJbtSvZdA8ZyGJ2Er7okrmZpkN4WMyJtDB8yanaDmmNeSrnr6yTduP1u",
  "key18": "3V5A7rh9XUKgHqo1aoPsR4QkZGBaanfH7gKCkaMKMTGviPnQpZVGxJ4ANqr4KS775dXE5FEhcA1RULeS4XHDcvJD",
  "key19": "4kVNiaR1DoRzaiPHp5JB9QfkTthA9dRqJfhd2YziwhC6tFdmpJ7C8Q9qd6fYLXGTz4EXuXEhUZutQWrBuvAquFAG",
  "key20": "3Tya46KAoHTNER8FvkRSmVAZ128ecpoVBNzCX77XSnhV3BYcRXkbxoUsBCaVywj11dMzKMNA6dB9f1tzQN4SmtA4",
  "key21": "3LtyWGxy6SAchwbTaMqavY8GhQPm7CkvcNcKtVM8BM7DqH9ywNpLomc42gBiyGadpRZcCzceRKAwDQSvPDnR2MXu",
  "key22": "5utDwqojphhXFmfD4ebDznsUv4i55EeTHdnT8MfDD6U3nbo8eERTeeunY3pNxDqVphD4KS9jXSCkBwwWDQfQLFhK",
  "key23": "ZYJtxCAKg3Z6CzbdPUn1q8ZntKCwmgdqVyAS11SDmdNWsctbpiRcKfZMvrcwiFDQZsMiuPPnMqjBGPz3beyexp2",
  "key24": "ha7vZReoZzmnuQwnhRzvUWgVXcwBwFw44Ucxv2ViJqs48fvqSiZT7V88CrGxXqSGSgrN9fC5hucNNvRtVK2w6hw",
  "key25": "63k7UyRWiShsobAsJoyEeXibqj6zSSsaJcvBX9TNYicR2cxtMech5xchRV5pJ2YpHP2Cb5XvgkGvT9AX4UvpUcR4",
  "key26": "vB8bkrANsA8SsRkxSyNaSQ3fMgBD9Z7fV5MZKdka3hs5UeVpbCo9vpJYJKvs3VKFbgeoCFBUePakPr7bTbCeJWU",
  "key27": "zKhTHp3nVqMJVWmys5Hxy2enJgszNSk9y9r8QqeEEzJSaAKo426uHXFu9SaYvEiyenvS1YJstCqB278ceVryBHP",
  "key28": "hjX4BQC1gipp1dmFfEJmMq4fFQjoc2L3BdRT6pToPTTCuZeFnNQon2oJZ8RR1Eq6E489sMQQcj2dK7wS3FG9QX6",
  "key29": "ZM4wj4VEKbX1VfBFdPd1HT11hdLgCQMcPQCpbJzsxcDv9QaAXa4T4PhCEUuvkTt1QiM91PyFdpchWjcSA1QQdVT",
  "key30": "4TBC5t6RJwC84DXjTvLBqr8KAjjwcU7nCqU27xJQpKMFJGTZJSKf4HKa3Qjdq8gqJpyw5Vv2y289hFdA5vi6jDdh",
  "key31": "4BeV9XoDTSoDsu5oAtQpwCanYgG8VmJL9igf2kiuY6cQ64wbHUoXSPr66mE7SYt6vrk7QeAHLs44BAxwZUbrT1SM",
  "key32": "27UsqnBW2DZ9xTvyZLb3kFLzFTCYTwjFTCtsURacm4yAVN2j46Y7vLNTG5xRJ566kiWtVp4b9mhwPDyiwcmDgm8k",
  "key33": "sS8ihiVSqXnJqpRaRZzcHyos7UmxreyV9sWxkDVV5U1nQmHvNZP44eeg8FCnKZV3jQwbVSzGpqNmK7c2Qmzcvyg"
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

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
    "5GjhhnebBUG4ZQbLK9FVCAQwuxSzxCuWnRcchLM2Bjmo5BYMgkqtygTv7LEo7bqnkyy4U2v7npZsrVf258kaGdQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evvkbc7pRWGCYJQttN4dBsDSrY5QNp1VK8vVuLjwSDKcxs4kHcq8mXeQ7RpZuriuVmUcDob5wf64jvyizKbud7C",
  "key1": "511MLPauEgojkFmTYhuwR64nMRyF9Bnuet85qcB895kVRvos23QNtrc9wfvF8RhGNAYxmMy2YYJaEfY2YzG4zWcM",
  "key2": "5RzAbH93Yfhv9hp8NNAhn3Kib5oT3JtXSSfToASFjp3QxtMPo7utE9dq4NZGcnBgvvoCEFn828PZGCXXAHxnYDmg",
  "key3": "2kgibQVnXBq6SNSGbRzXLFF6V664hCXU95DLJBs36mB5aMx9M8jvm2b88GxDJuR8QHbfUJYHUbybd2XawfQb1Ewb",
  "key4": "4CDf9M2kz6BLjCanMUjQHQHPmi9FCbxjYWaNtEaMWX228ufg8hmkeJoPjcmVGTtZTgZmvEKadGpM8tv5GTb2avhF",
  "key5": "soJ7hsUmhhCSAnNJACDWvY6CX3rFWWUoBvHesmN2PKLtdby5esi6rTgSi21rxbBjhDgCaHQK1XA91mrBaK8qJgb",
  "key6": "4hdkR8QP2iHVegAFpxEB177wgA9FRvicpqNULyb9jAczSu4yA9HfdzLchfXtpXELUvU1hViN5Vu3DZm7sHyNTo9z",
  "key7": "4hTryLrqZ7WRV9FZEkHUjtRkUxKLD5rfcSgKJrsgRd8SwJ6kYJss9k1htwMR4QEewNCgg2wEnpL6PetexQPLS5PM",
  "key8": "5DFBCH4CDz7kFFEDYcYm67vpDCfbvCyxU89ivcZWxbAQegT5UzVbUy3wvsswSanjF6GT67EpLabubMMQgk4qRuxS",
  "key9": "dt2UcTm2oDzH2keiC2isXJxSwWDDLFppLvpShmoxJ2tmx1kEA8SkathrxXy6rzGC45FgUHbmk6bs4pnUpmPWTt4",
  "key10": "4p1kpbNj25DMwuRzZUzNtmYjhuYfShqTQXBy61GQgzMryZmZjT6BJwW55LTVnt1j9p9PXa717iyzUXZcnERUsmax",
  "key11": "49ADSMUGkaenWhQmf1kCN49emPynek5RXgd52PbbRijDdEcGhuW5FzK2a7uPRFe6LPsBDVhg4vT9Hz2izZr9AnyC",
  "key12": "2fK9MG3tpSwRuaNUMEaae1ry8mMPYWtVN3RgRDcxVCiWLcssvQRwa3R8McYmVKCnAyCuv8DtGYAD6oCZ1by4WULi",
  "key13": "d5kHPkFfB5ULx7SUPQEgK7FAyxvmB2uLQNY8jCrFudXPYuMea8AXdJT1z7LmieEfGpm6ARpRfopEvuyQY1FvELn",
  "key14": "5GpmCsg5Sv3MGdasWYD9ubFA5GgWMi2UxytxtNi6LGhMcWn9nuLE6DmGAAcyxk43jgWtM2rdS7mBfP49cHnfN153",
  "key15": "2348wL45aEDkEUK1EKHhCCyPn8qK3AR7MBdop4XbFDqdsejDuzSXMNjWm4Wu1CoGYMGtzaYJqkA3sAns4vCsp8hc",
  "key16": "5kreYJsnVebA3nEbSHJ3N6sRUzurntspowzng8RsoQspsouoB6xsxkNoA6r4QPhXKeTJneawfuKKTyyuTi8V8A7B",
  "key17": "4acG4sThuzfpRdHrSAGUfcDe3wY8A2wxQ9a9xQ32mXYBTELVMFrrkD39n77HHx7h8BWQWNhgenD9wysF993qpX6X",
  "key18": "aQy12VH9D2AY11n3Zhcv2YYPkMYGMkSeLGwPRQxBWJFiKCEhvFZgfUCJZh1Ro2shcLdcLEZumyFr3XEMq4gEqov",
  "key19": "489gaSMAxZEMMARcqPsyqfamn2hynbrx5t7zctCKAVvkK3bs7pJfT9iHbTi5FKruxEFJTEHexaDwPWvXEnnMSk8c",
  "key20": "3VvD9sEgNuc3WMg3SUnK4fLTte6EWFCgoV1bi2LJbiRWXEhX8T98LLSgHVcbCsSEoGh75if2wEsbuEu7CB35yjDE",
  "key21": "4WqMBiFSvgUmSsMNEdsiQh7AdLFAY4yz7urMuejnEBYc1cttB1Z8fcN3E1Zv4cb34yaN3Z4g1ERqa7KvDTAyEzXe",
  "key22": "27CsMcVjZqvdidwBPFunKx31zNvAET452xsQrchFtVwREu3AEEaMXdQRDmv5qhqLjc94v4NS15mGpRHwJ9ShghUS",
  "key23": "66LxqzXHJmrjASqv17JC4rPTJQrxvQqHoKqCbbSLsWCPbhsgGmSzE4i8Q4vNXjfxoq11QE7wGcjWeGkRPghu8QMy",
  "key24": "48gpxdVVKnNuEtG5Y1mEs74fNUNG4jfPWsxV56vg4J16gRtH1iAThRLcTi216QETfSPdS49Nuy366VAaNabzDM5j",
  "key25": "5qCv5nqG9NMHWFoEkNhvpnULQER55GBVLtP3Ri3zFms8PZMczrcJQs8RsheH96Zkp4MoRnppWAcPemJPhhw4w7f4",
  "key26": "3k1z3eBKTcRGiz4a5kDCCZmTm4CGczDGwb5JuBm31T9HyouvPW89Rf4PvaBzv98zLrbaziCJ6NwFUYDXxprDiZsg",
  "key27": "5ZLNNT8XrS8bA1GsupfEjx1CFhHXsvuZ2Q8mkqS9RTGw4TbHnv1mMN6pCkf7hZBBvM9cJxyzMZC8f9e6rrb56hfo",
  "key28": "9e1NmV6kPZKWTKRKLH5WNMDxatx91zA8JcNHtGebu1LSWAmWWU3L1PizTmmS3DVm1ib9FEijbVA6tTucvp8eJpK",
  "key29": "3onZaLv47X8N1EnkNgPGSpd2K1G5aup457BV91hXQjvuGzgnsMUHRXUr9ped2NPQDKfMAkDRz2qRfiVL1q2X5tSY",
  "key30": "63cxG7U1LYWxWjoenchmm4rJzNg5ajMoi24GHLvkERakthUve2FyRiRZ9d3Zc2DKNvX6musCNyo33NH6J84Pcnpc"
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

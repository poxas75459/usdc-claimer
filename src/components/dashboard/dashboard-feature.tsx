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
    "FF3bP34jZZLwEhiM3GK1YUVGYTVzykoqCKPxZUXy3muDKqcdgHhDqBHhmDJnDd5Sw8DEfkrY41U7FVA3jp333Yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2beN9MHaQj2ZTLzDP7Dyz3tR5XPrEgWpsctKsbCRZHgP7sBdUJ2tMR1pH2yWEZ8B3rsdmGF21iV17g8tpC2Erkdw",
  "key1": "4BKqBqtoWeaNnQE8fbDj9XaaoKAjVUL3WSJDLxrg4mSWmN2EKeU6qLiiypL3AbVQYfS72TR8vwSnLVzUGDugX8oJ",
  "key2": "nXWTstkg3V5DNUCRfdtKRx8t6o8nYvQV6DnjoqtoBEarPEZ8LeXZ4vYiFphCxrmXABbcduhREW6Fo5soLwThzcC",
  "key3": "2Y3mwuggSpxpgNyCLVpXgeXQBndQUhnpMARmRVJdkwoeNC1xxBHfMTmv4hgPgVjrxCUDVfy7jG1LmQ97de3SZuqa",
  "key4": "2SDZUzTmhPFreERmCjd4fzBgfTztG8VweiSJ39bu9KSHKS48PeGWRaMr2bi48WVeFVts5JUCdVjDjqARJysCEiFT",
  "key5": "3wF6kdQtMVdaCtW1Xp8cZPPHJG9ujCPBUMVMHNAvH15vDVxj5AVd27WuPJEAzRfsyyff21WwMi5dBe1Wi6FzNViz",
  "key6": "5xLmrrWE4Z1VP7xpMqRkfpDHaMMRms7rVZxnaHQDmM2JTuBY4rMNxuS22HbvazrUncxygx4iZssDujug1SBLkjtQ",
  "key7": "5v3BmcBggPWgM8NbhFGFpWwXKUWnWJz2WDUticX9EngB3SDttCRLPPa74iwHch1eYmfaGfin194TV5GXtGsfr8YC",
  "key8": "34oKj7RTXhN2THToUowj2KsPD2QVZSpBDRDD4kbjbeiSYGA3MJEiezHBimCoeVfHMr4tb7uFYk365vzaRoFb3e42",
  "key9": "2WmzzijsLDRP3za4re8KVpEQKnSx84G4AhwAG1ugP3LEY3bRi7HJVZEZvxuzkHWrMedxPy1ehWkW8YceNHMoWNeK",
  "key10": "2hsjMVwyvL4oX4CGPKxGCubqapgVSBb61KxatLx969o9uYDgBzknYQiGivvS6BX4ACvdimFhsDDTP651L4gRc37X",
  "key11": "2susuKyeHGCbjakBbanoVnZJkrzDpnirtEhBpnKQxQJeKsAAoCDt2A6tAEVUYWud66jgrx5Yuu35ByWLRUH1hZde",
  "key12": "2hC7AG3SWdXTwNywf71TNypj3dHVnxegrhHf1BKgMCH7oB4TqBKWbk11Yvs4fV3J61DqwLxvMGsDUBMJUuxgbXHA",
  "key13": "5PDtkx5AVx5KqbqHkmpoU9omZoLM6ERPRb2595KtkGLV26aevxjx1QJSkgJSKvutmcJPUzcPbVhZuaMiZfmU9PxT",
  "key14": "35FSqsku3GvwYZ7rYZnNm8m4GTMHABznracprqaVMqyykinYCyCLZ3FWCofiE7onss7XU4uz5VMq2ZxSYEMz91ep",
  "key15": "PLkUed31qYMXpj4qdQk2YRz1oRwNHDcGAFWDqJaaufRarBqaX75SBxug6CGtqEUBdo5XCyRrvTu2gQhuH8Z8hE2",
  "key16": "WJv6o3BsQtwBSuU6U51AjNGG6X2BsQrn7Ka4KjRoY7p7mApVuNEwQMBiSoqQFYQNNTkjdvahpckByfxFWRoqqRp",
  "key17": "3QqwErXrN9YcFtyFZomRHv4iB7qzVqFQF6LmuvxXR4gYF47xGv2ymm59gKDknLdvse7ysXeUscrK2Xy5jLLWdeui",
  "key18": "44CWYkVkWu1SXoLfQPy2AMb8CAoVYhk7tMj59x35PHptsLh2AfTF7ogWoA82Z7s8wsK5UsNVJAs8nuoeTtcP1cvW",
  "key19": "UXq6sedc6TthhJA3X3BafyZNiN47aKDTuLiZ1FhLpbUxFYGF72YKhYBxRZRXt8UxiJhmmdGM1XrGqAYSH42gTtn",
  "key20": "5Jfr56wKRgr76bTxAk9VNgziyv9nnScmbVGUAXiitDYeX3bQiWfgMmGx4Dia2CwQ13ihjyW71G4nwxKVMixYw71f",
  "key21": "4FcWnhDMiX5BBdhkfsCccuifctGcr94ZgPe1Mwrcmi1biBeh9RvpXi6BgWqLUSaCKWeCecJogWkawToPgPbGHSRt",
  "key22": "65ZMH5e6yJ18UwHQXRkvCVkB4yHznsSyFrw29BGKHx4rqVq7KtcaLhH3cxY6hXdNQzrHL6PSpcVwsdqPg3byYvzN",
  "key23": "46PvBb9XH26XJ7ujjQnDjhZLzZTFWV53WEKrK3LPkZHeaz99UiwS65tJv6bzirbS8A5rhhFMbFwD6AvCHpq36NAt",
  "key24": "3dyiANujX6xThrezWkCJa7Kmy8AZ8zhwpbMWVCdvX4F6J5mLAaAXC1kQwqeQFQr9SdCuDGwYKmHRntkd5BFrqtdi",
  "key25": "2hhbUutijYYq3NoZ9UgQvLUYsKupagCvkzYCiZh9oHGJ3ryQtEEjTNtULsTGow2hC6WEcuLtxLLmkcieK5vMtx7B",
  "key26": "3xPxBRj8uqFtNLsGNSZM7UpVp4qiLygcz1gF1zRJ27vWSXJmq73wsv7KsgDnw27t9Ux9Dxm66Cawx4AAyvwQ7rwB",
  "key27": "4NtQQEdbbQ6jqf46iAWxaS3pcZvKDAukUQTtw52iD4RXgiQKtvEesMrPW1zhfvagcFUNa3J7MGmdfgsj5iuDgUWA",
  "key28": "2MzPad4g3oELAgg2scjws4Hbj1TbRxfX22Rs1L6Rk4T1xJ5mbGztbzhBmQt3KTSg4ZRZ3n1JgCMyEWSs28Tcpda5",
  "key29": "2SFHdgepef1oUomF7nxsxnfreqjM5q8UhQJ1JmkAX3Usc1fZoKiPKpa76wY94Rc96quJsnDsoZVQgPnvAYhFe7WV"
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

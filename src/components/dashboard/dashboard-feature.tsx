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
    "4QEiCLAwFD5z8jWe7QnKX66y1drTcNkRS7uduUakuGggFaZkBwBo8vedGhvEaep6AKtbzWGEetcQ5xFnQM4UPbPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39JPsDWNBERsNdkDZ1oywW2AFQgjwynVtobecQDyesatJfMfVeeTkfVHUQ9NKnJRcoBQwA8y8tdZt8Wfs8TbHjdF",
  "key1": "2qzk55dZK1xRuaz7P66Vg83T4PTScEFqdUyngiiMkG7voSHRRSGA6YmeB5egNTfEQcZqMQQ15QAp2zR2j8FdWBzH",
  "key2": "7GBXeE7M7DxgWrZfHawdSfQe8ype4yiadGPLA31snMuCqtctLC8Q6reXAbpuijvqQYuaBepYMTnhbumsvfsJ5R4",
  "key3": "4arv3eaVtuVpxLDSmjNyRpQyotR8roD5pNmBHjHZj5CKwY2MSC9qwjEodNQvrVC1N8eGJLQBjsSz4GvbfgPXPNwF",
  "key4": "3FMC7wGrcZn6qW8ahuLNqzj5Mupzvze1dazzpcj36xmodm23q5YYDDWn2H2SdVqn7J1ZmH3wDi81ZCY1uiLhjBeC",
  "key5": "5rU19kGtNkx6vgFc9hnZWZ2NSFHmfZBmnz7JvT27V9xmkXPYqysVm9ivavxYMUq1ZANhCdEqDjfUM9Gyxr3X3LhC",
  "key6": "3w4CjrMHxaSsbixvWHMpyzGeg5zos9Zz16MZJvuqrcVp65TAQY3nJpyEVvEVevVvbd6Qev1j2TV2ZfNB6vZfW8Ar",
  "key7": "3zhPqo8rzpajVVRKvV3P2G2DT1bcLehMALp2E2kZ2zq67c4m97xT9vhURpkGtzMWzmo8fwTat6mJar89amAr8Xzx",
  "key8": "4yiDDuKFeCKWZujjCeZqBfP7bneoXCJgBEXRa1yeHzc89CCRW4KycgYXNcNgQwmrKz6rBXaQiXx8Ve8ZNwWGFKcm",
  "key9": "3Y1dZwwPHD7AbrqZYemFQHDzqKAXudt5S16UFVHXpAMq6cDtGRHZByDBG2AkvbLzc1Voo68jfEEbgxWsGQhD6idR",
  "key10": "4TAGzsB4eFNc5mxzwRSZwH7LMEYPKMCjTjaPM3RNtsW3QQxD4U8t8nwiLqLpuduG3JuAwfWLXQr3rZSjjXF1wYnV",
  "key11": "4qsWF3Ps97gTFyM4LnXVXL6DpChjh8TjZPk8CKRS7Zg3ddy191mpv1aaX69nRvdqxJ4gtSEWeuhDWrYqPApSEAYm",
  "key12": "5t5V3ThfzkARWSjCz6yuJd1LHo5eofkfkPGFJEiKBVALK4SCXhsVKJ9zQPTiJjFutZS5kpTU6ZeJLHGCXx5n8TZn",
  "key13": "4mH9kdnqtgJb3ebj7PwK2dsq4KCkeVStNwrF5oXh2o9yWq5zFm7kBqjHASyy8sYBaQJnP3JwvQbEPSFL8CdnRwW4",
  "key14": "4SKMaH1EMexsSiDmBNu9Gmgz3tXjwV3m2mTXP3BuDt7GNJJ8KdRC9jdnqv44dsDsDqHSZBZJHni2PbhMBVCG2qzV",
  "key15": "3c5ZNRujoZ3LAZKqtLSTEuFbCgFZV5rPjzwaqGD5c2mS1TAihEVW7NLefEx8qny7Tq7iCu4faMBkid9PJMaPmmkb",
  "key16": "43545bnbtZG4QC1yYzCbDBS1XBYQ7rvehmUDW8pFzkYpFx6EnoTRw1rhjkif4Yan36SjhxQoCDvxboMWSKioAmrT",
  "key17": "2umHW3RuvNDpjFUBfSxFpNcMjnTJjQyQxQXC38UJkGpuNJahb2HQ7zEwkwphiZ5ZE7AhCisya832RFdT3ZUAZSLp",
  "key18": "mZA4M8z3XLyc3rUTF4MEnxAoheU6xiu3admEjB3SEWh7SE7z381jxbXo3QkXekbaFMY4LyMAWZGXG6Xh8N7f3oT",
  "key19": "4DJ8BkZesMHMA1rX6oey5RR4aYWnfsDaS9D52S5A7X4kZXGfLLRTwxkQ5WeDmDfKtgJ3Vvxh6U3aCCZ1y9P2WRg2",
  "key20": "2Dr32Wc3ambP8cargyk8ysy3e8b12jjpHKLTybWPEAwJiCrEKmA7Fz2BjRkDqrRCXoarv3ho6UVck82XbRewR1N8",
  "key21": "5E3XcymfdPMewr1Zs6VEYrKfqS8vNRS9vHhiFbbY9bnuv3Qx11GZqeFEChRmFfANFfS8dy9zhsWs9KDM3aKxjvRs",
  "key22": "5pB7JLS3BxMErYZwQF5Xf8P8b7jHvnk8PXwk5A9112KhY45HmEpUJjJambc14auCd7246nUXkWyn6HAsMxsdgbY2",
  "key23": "5pvtmgd5si9jjQ9ufxix9J5nDWZeTiAmkUFE26HJHBwuSpyKjjbWLGAsqUHVkz9SzziCdK3pC6pMCccaW6UfAckj",
  "key24": "KezVUrGQ7mAjSR8bGPVaMYunBPG2L4nDB5Rmqbns5Xcts6nXAbiqScHgZ8KFPFL6v15pX1SDn9t1J1ChBcmrXsJ",
  "key25": "2zq9hPrpgu2qqCbunYvD81NJGwxjMS2WXyy7RQP6aKKFRm57gTVjKMdVNcxjnT58RGEcqirD8Xwv7YF3qgYVKxt7",
  "key26": "5Ur6kJ6xHfVTfa3uN7TCxZawaZM9K9Z2XmijWwKGnLsWkGwZoePgGgP7xaVkEN6CaYpS6QFcrfP9oCgAaCoKLxhu",
  "key27": "3NXx5BPjY3R5rQms15wdGY7uqNtMmuu41kXCRSjS9tvtq38MU9Dz5cBgNdpijH67VgcYdSwvytBJcwDsRofmpE25",
  "key28": "mbFfsR4jkj1grXXummVqstg1ojJD9WbGqwbfU2wdpnjqke2Xru8XuQpaGnrXbZkDbPQBxRvsDrRCEGkZzVc5WiJ",
  "key29": "5zs45Kxm1yTC2wdfMS5oZDzjFCEaYUTnBSr5ztJzRwvi4wRjajGSN58jgxgAXmS7B4DKxjz3YCeS8NyT6EyyGLsd",
  "key30": "55Di2sgDbdyWXxhnzQZCmMynBEPWr17qY77eFDjTibby3jB2994dQ9VDTToixv3UP3qS99UpnnJncPcysf8FsKRT",
  "key31": "4zt3ZpyPrBAkgMZ2AQDkTa9iGJVebeQvTA71hUCYun6CZpMLmnpAHGbrB6oujNunFr2sthMXsNQz3hsEm4KhJiWv",
  "key32": "4V9MfUKxk2bUyjiphSaFvMUdkhzVnfY6NoF72SWtgZcMXN59TkFRHE847GSeWuPq37J7TpDtxRzrdbuU1K8cwKEK",
  "key33": "2ZbdiiHhsf2y5CqPPF5MwEj3fZ8ub7swYwwg76qUobCeXnMQuX7gWtwV6hqQJQVu62isAzLBHL7Kj2g7Cdc3W2ji",
  "key34": "4ho8yD7B7Xe2oz8RqJxefh8PH48dPrgHnRhxEGVyQ89dntAbwk5jaawU2Gq2PRvMHjxRaurZbA6Gsy5mLwBENgmS",
  "key35": "61Jug46VThX33YtH48zFT1mZmvsrD61vZwkZq92JA74ghcutQdpzpwyQh1RAnMfBfdLUiZsMQMmRwaGuXuLP1DET",
  "key36": "2d24PPRvVkW1qQx69zLLpQtYMetsWZTCmkW9qCD1HPpoWJvEy3HAS1dVj9CdsRnHsuBHPosGytyFsz3nSK8z6Rzk"
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

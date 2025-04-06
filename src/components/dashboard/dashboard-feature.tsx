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
    "4sBdC4rXG7NoPmqrcpuTbDe1bc5GDJ1w47bHm3HmcvLcma16SdQeibkuWFhz6UxaQnuJ2LKQ8pGznCfdVs9trRWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rGYQstYxAFxhnR799RNtsP2agMefeH2aFNSXvYUK6zo8JJ9N8Rar4Jsxh5q3qzYFmisuGD4bZinnVtkBFJZSXwN",
  "key1": "PXRdZ7MA7Encn1ghRGeNRcjSd2Qqu2U2iUr24Pw8StefU5seVwpH47boyunTXS2yapBsamr5R3WQGe5EZoLXJT4",
  "key2": "4QzzMbZNqxh4kEwLYbH2kbRcaHCSRFHKA9Tx6KRspaXLaavR2Jvt7vF5Pyqhh2J1p8RYjn8mNaZQGVT7RxtgvMWU",
  "key3": "5AWRTh7nUZMDEXUsC2JhuktV1zGqT8MuJaqyz5U6xQKdVVhxRp32rwztPSDqP84shEJm5XkHrmKDQUorY9iydGnC",
  "key4": "5e6mSkqnpwcqcUptZ6To9tuzo7oNbcM2GoqvjHxxKUdTqcCJdfMRyA1xLYYwhA9n3bkVJSbs7qWM8Vwo53dA5FBf",
  "key5": "58Gz3LXNBCq2Sx1aXd2YdRQnQfkNF2UVWQhZgiV83gbNQ3Fmd7xq3onU9E2VZq7fctWQALWTkogzkb5g5Qjw5Uex",
  "key6": "629EbbTVGrd9Q3BKNcfWtqyEmmCi3eDPuwexWKr18DSjh95BNqgm8RtVRZn8hcqS263kKK7JNRVVKYbVSVy7P3A5",
  "key7": "9USmvhag1uoYf2hvu72VUrG35snme3Fmo43bWHuFsDjGEb7QiP6eMZxxcXxUVjwF8dpEzXCQ6en2ugD5XZmxm63",
  "key8": "2eoXSwG2oTTdEH3BLnZLNrkRz9gun1QePqkiZykGyCanFmfC4N6bcMNGkW4dNKicQ5JoS4n3QypAq3ZTrkUnn3U3",
  "key9": "3DgswJQmPj8sz64pxdnWdx3EHySfxqqgSq8Awr9yvVNRKy944JmjXE22PGnSCUKNRzacxig2yzgXtQKNw49LPWrJ",
  "key10": "3xK2DXHiWNk967KzEBXq8kGBULXdR9GZNsAsSRhnLDDFN4wqmuqnotCiaDKoRLJmepehSa5uvBYBTVwFNp3847Mf",
  "key11": "67hbiWYrtkM24SnGzdFuP8rQtZGwcM5ftWZFWz8h32aWSt32s1VUSCsJCLPYATXGfES1cpL8ebEMjmTkYb5GgPMv",
  "key12": "2jRkcqEy8JC4SPjSzKN1m3wGEbGVu71LrpLtLVjMNvpmr4gH8yRs8F2LvJSZ1XkQGRqGbiq1vPvNak2R9v6LvZFn",
  "key13": "4Fk9FpUwDftsTdDPKDXWnRCUfyU8Ee44bGx7fCtadgaryjqRNNRNw7DqAiyueh2TTHdxo3TXvbXRLfyFtRrVpBpb",
  "key14": "3AVQp6tx7niMCXzobE635nJ8J5a6nvfPSM8MYaSjpcGBPtmBvgbDG2Uv7axcQYLkvPzoPDLCBbLqYsMzM3zYA7wE",
  "key15": "BjSV43qPhKa9LrSRNaakR19Hqj6mvdGVcEQpsJXeDSAdSRnZEDYrrhXNoJkg1bVA8wre7sq75jm4qqLmU1TtGuY",
  "key16": "4mDJrYJQVHWB5dAZ1Zno8U4mPaMb1CKXbXLaLsWHdq4JBYiabKF84uhFqagBphNnUkX54dgSFgBcrPGsQQDbkdzE",
  "key17": "TcK6zNp1JKPdfrhdVuuoVMr4CVZdQNzfG9JvFhZw7W13FaNa7DMWYxdnYpneWab3CyZruioYnrrF9mbhczXTSAi",
  "key18": "1fAW2ZTSfd2kD4nWDzz7mPxWeMaa3qeFfHvBcqmYPDRUjnXfLPDgpE2CbXxAdKBXntq5Y3FRHKxov6ZPbcRCc3U",
  "key19": "fVuEBtgChjCu9BjkzzD6UPapEao9MUBbm9XrvY8fuGN7cUa6zum8ckUnwUZqxP6CoqYd2TbyEwk2wAYP2FYD3ME",
  "key20": "2G3u9HSaCyQcSkHqHCkxujjURgjE5SQLiuP3HXcT7GM8j3jonPsqXhV48nhS5Eh1BLem3h5HeLch8K5YiCFuP2Ey",
  "key21": "5GuSvwEAZbu8fNECnDWfK7p1TfZXhLSgYMf7Runjhj42crjLGfs3Lx2zgnzfJ5AcnzYqxWM4LvB9FXUsjn6ynA4S",
  "key22": "4XwneVyCmrnF6AsUPu2mmVANgfzVKSJ2pSdEP7tpU8ucD8L6TUU7pbDbFFuNeB2bckF3KRM6C7n9PDE84Uu2XAAb",
  "key23": "4fvYbb34AFwZ9oW3AbRsKjV8wMtpgjVgYxdu4qSd3Hc8t8HuokcJzq8UxuznTMUafqjxgmo8P3KAUsVs1X6FJ9Ui",
  "key24": "63xESXpm1Ab88WBvvLJ1NB3CUMXXYNXywTL7vGknKAHvSF7vydSjNs6Uq3JqzhEMqfcpowcTCKk4DhajnhHZ7Tj7",
  "key25": "2aDCSmyNMAEtjJ8rFNT91b4yJ6GxRLWNr67SywiUhYycsoHHiBrqkyMaB6iYGefJBAGZv7onQFqVyBn84eQabKSc",
  "key26": "5bvnS7EMsTcsENtBxcYzUtezBcbKCAhFp8fS3LC99WVazQKHv5xK3HZUJY5MBJdZSdoWg6NWHVjr8AyhwUA7CWK2",
  "key27": "5QK6EJxqZjmKuXwyzB99TN9HURtD3QtGZ9ZBFErP1ny3TiAmDUcSeNMtgBcRD3bKt1DC4tC7MYoD57v3vsLy98Zc",
  "key28": "4qSymraLMWQ9niyYcA6gNLQCUhSS7jVA7EwjtAjc2aSP69GoKmH61vrxvN8SyXuLfzMFjVdC1xaDo7hq5HrgC87a",
  "key29": "2MBYvNLWenExBWMtqiYvQLaXJzjw2wbTAovhzjg3Y14Rf32zykMKVLcyCkvLdB9144VveaufVU2XDPqNX5dMKnNZ",
  "key30": "2vt9hBiFJ8U78vQNSZFnh52zzrG4Sv1C8p1Pmxa1EXUTdwPNjdv3ZbY7FFG1VRmTjby1Q6ueepgzwoBZeWyVtBxA",
  "key31": "2ziKBsCB6KxLUGk8mjX4zww88XeDt1GTGxBKRQHa9EjF4zvDN7rptmkURB8p6DgMKkvJVie5APAyE7aW1WDGbLEK",
  "key32": "hxMoy7sp7TYNjTNuG184iwVMokRFt6znEPTSPVGubM9vAz7JBcNNCp8SpCf69WfBJNZEDQQAAro17bs5Z4qCXg1",
  "key33": "Ru9XEdp1bjmYTF6GVEHRXET4iXJyKS5XNM4coWP9J7kMmuF1cnSEHQeh1x3dNdbxCWBnsLCZtLsha6X4tuJgxNR",
  "key34": "2B4WcCck5Ka8Yir6tYp4491ad3m9cHLMAuDBBFdnHC1sEW2fP6tgWZ3qb6KUq8Tn6YGnC7UWhfjo4ACmMfATW2vs",
  "key35": "5vhxhe94nt2vW2Ebwq7MNRmUT2BrYgrb48HpfaeCodi7j8fnAUGvNkoLkPuNzfox6fzbHVFjFKBBEdJmZrjMSUvy",
  "key36": "5Z5kSoUJgnbhwhr4H2WDagqFxoCiLXUFQmkoKJF79K7NVo82XoZAGNZrFz67sLv1ikab3S3TZEUMu3NAwUrzV45j",
  "key37": "ng3gjvJbroF8w1hTZmKGDawn9CrZssrW4kWYZPk19ev1kVouY79c9pvPNVJD7W9R6KGoTSCtCDqXmMmtzoLHqsc",
  "key38": "5rQGAxFynAJoUHZKSuaADVoLpF3k7YXPhF4JA9ct5uaACWNraa2fRMFESCmuSajUhnDLigG92CBHWrtZfgLoXngL"
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

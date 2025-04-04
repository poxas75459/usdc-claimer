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
    "4kdVgBh6NJTbMTmayVdkyBLMUYjCnd4wSAUamSXFjVL9E939osRMhYvzAc11gWcANRn2HjhTjBcsJPx2rNydvnHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UAk9bE9SVJEL7Ab9hRgsUXcd5jnNVi6AG4E7i8SdogKt3QpxnAST2KBQuhGZd6AGV7vFjdE6hoUATHtpjy3ZJHL",
  "key1": "5hrVXkqsvRwREAT6KdxHECJMSeqNfsW4kBzFp9V3Qk5v1QQVvyVsHzd6EmH1e75zbEbrTNHbg5hWguucnCBfw1a9",
  "key2": "5nyX7Z1eJD2QUBrTVu1Kh73B7BVVPrGQzBkUATz3dF9ArjrHfAuzZjYxdKPPfFZSk2fmjTZadRwYNMjdTmKsf7Fp",
  "key3": "4r2d38hYecXDDoUD1mFRnQHjJwWikgx9pb1BFP3Cd4VZVPVupeuUSum9TiXjG24kBqE4dSZPuVdBscBc2AsxqMAk",
  "key4": "4TmeBE2kLQRzCkAj2ujHZyLXmYsUmkgWFHTAtVkjbQ1MBYN4meUHVDrsFknaHDJe3G7w5xfACqQ4FoWTjeCNTMgV",
  "key5": "5Ag1VRG1HUHS2cdwfDANLshxWdjTMiW2DWmCjpH4vSgQThD1p1ZyfdiTD2Fqod8Ecxs3J5NoC2zdTbA9eAowgnpo",
  "key6": "656aeGZe9Stot7TYt2fMVnt8t7JLcQHKNQJDGcNVe7eeEoeeujYMoAXK4K4FqMKobiW3X6qBjQgMBBPurrxPGs1L",
  "key7": "3M8GFt35rUpbUKac4YtzLKgFcjEk8aDCuuigURi9ST5xomoS4x66yUhvXrc1VRVB7vKM8dCmim8HjhCXWYhhkDzG",
  "key8": "4mm2HdD8GYa9BUiPEe25WiUekAenv9djdqh6icQXEfkHhDFhUKxFvB3iecGYYjmpsSV8ZqD5GsS1yJwCDVtsQJt",
  "key9": "2124yXkfnHRevAkfYcZF3rrrZjj7whe8NfbCm3uLsX1ZA9n4GBYgno4ZQRR3HXBsGYCDwpaxHGb7A4pVYJjAAB9U",
  "key10": "2Rn36eoqmYcEt65jgbAZygNnLPfioct4DJQfsBRuBiwQ8ZctJ6C2NipbKP4hGgHrgVBmQtZiFCM7iCXeCCCXMJBr",
  "key11": "51F5hBJpodA9pyG6ATfs7UU9FMQgvAP2iXpQWBmJMFMiUimprwVFwMJPATh4K2Uukw515MeCWcoMSAhtDG1LDpw1",
  "key12": "2QdzYq92txajTQUagxwRV3MB72hzDFQqCkmf5iNzYcTb42MhFeQ9M1fCapaZmYQm63RYw5eVx8BPzdhEtYagpSwK",
  "key13": "5P5aeQmXsFaaeQHzQfXUu25mf5yHVGWAUdhpngvBoEtyLFnMQL1Q3vpiomSoU1juTM147V8UWXTuT51ebwt86GwR",
  "key14": "MKkfjKz1S1DnyUbSF2SbQZDvFaCpTZuF5oPCb9iStN92Phg2rtRoFryPjiv42EXpGjwajX2i7saBo5BmxeLCiCa",
  "key15": "3WGtwfVAquboB7mSVQ2YReXSjyVyS953YGrCtQCqhffZeL33LqUReWKBvDGg5hSMsq1N6kdX3JRsVi9GKK4Q8akY",
  "key16": "2KbTKLa9DBCbgS6c2zmpDLCPzQC1vmr4sBDE9SZVt5VkijewwpHa9MqHxJnxBWSXyVep33sVeB38VveTcYUmLUnS",
  "key17": "4ZLmY2s4u9FTHEJ3gWH6kT1cf5wReSPe21gfpAn3qaNRKFHio8kaHb1Z2ccBgU12mhTWsbf3h1678Ru8HCzbTnpZ",
  "key18": "SY1JxXWgVeCCWX2HwqtMe5uecFifp8wrxGm8KFMp5fcqvWCAgxx9HAjWMCFVFufb9NURkwpEttoJ839BFJ3iHnq",
  "key19": "5iixAZzH5DCupRauQPJxxdmogamSv65AY9uvU3X9cZkiaCW3TYGjDSoFSMwXN1F2PHKtMzLWFtk1QCJho2Kgd12H",
  "key20": "4EQE9QuFFGJ56iTSiKntTo32LWpzS4FHmToUjC6rCGGv3ffJkohJ6u62KejQi7U5ifrVjrYYNf8xr8J9TkFnG6v2",
  "key21": "4sP8JQ661ovWV2MAcG5iXCZnaGYR1CFNvo71EDASFe8mhjV6vL35jbUkNbNvVcXSiDzW2qZNXHvFHaq58bdvb94k",
  "key22": "5QAZ14yYovbEQozoLq4KAXYt49v48cF8z9HxcZyTuUCJowcRYNxeQU7Y3SAVimU8daoyBF1xTnvv7jQngJt27Fsy",
  "key23": "39yG13JnGaxn5pLFMnGKF1zAhuZLAFT2F7sSZiiWcrZNhHBkoidhFYZ8CCJ18TLDtTocodzdsKqfVMkYsfVruBzX",
  "key24": "4kGyCWHMbvQKcmesvRt2HyT6dHawLcs3MYYzkKM91jEaoUoTqGfHs7UiQmFBdRbsirsyRVoGGQPiaZNw2bQoMQQD",
  "key25": "51kSyhBZYnGucmHYd8nqW4HXHghaGwzicQJV2yzMYEhBFnMNztKYmonaLN5tdcMkLcXghzNKPdtj1W3kJrG6A1q6",
  "key26": "2jJsWFrwufNzZLEt89YsabefGtuPmkvNfkRKL31wrWEPHukMRpxrRqb4PzNFfNQ5qjcmXi7EZhsdYKLybb5v3Dgn",
  "key27": "2t6JcDP5aKGB47dJw4XsHGccDRYPVBBp31DGskpMazGfiriyJcEmhejZTpTqJuhbtJdhoDvFxLMyUVpy9EtqZDb1",
  "key28": "2JkL2bvj7MGXhmTHHGNNgqh9h8xyiCaKE4Nge2BJH3k5seZNiXeDbfwNWxStV1sqhNfQojndmtpx5Pzfs6LSXknC",
  "key29": "SNyoqTMhjSa2VSUdmVSNGHyJnEK99DFkArU2SKeSQhgjydZShhkDNbSpD6igjrQKzqnn8XBSkmpQJHxFNnX2kT7",
  "key30": "33QZq4P4SttpxtvbDf6GjrDsLcnVFScY9G3fBuE3rUvr8aDQ6vzRyzAJuabpYm3V2NrZyUYDGNWLTr4SLHUboD2B",
  "key31": "ibu34qwDJsPb1QWUWg7zDzidFREXg8sffZnVpnXJ3bXKp3iTzjGWaiEdsvvH5qfY4vQrEsr655bi9oygP177jvS",
  "key32": "3MwbU5m3L5fi3zu1T4ddrC7xyFFnKUaS4wPdcJwSm6pHHn6AZS1ACmWHDjHwK8H7WLk8MLwLaaJkvjhhncbMtMGg",
  "key33": "5qX4TiuARxKL3pSn1Sakn8Twg3KNK8eDS5FjNLzjqrdDTtXYA4Qz3jP15LecMW6uznBnouGe3kfDgJPwL3p3hsnW",
  "key34": "5aAhCjAUQeQZVQVhdtT76WdkwxBcaS1S9ivfFP5wkyhJuzRrQRcZaAVhgx8HfES26EhbU6ANbKX7nA5pEbvPbSHx",
  "key35": "3HXy99xt2WJShayhr1Kt4sGFJ1pwta8eA9QnnVABTc95djvzaGXPyv3ojoSB1GDPU7F1XdkHBdwpCcbdfnWoc65K",
  "key36": "2niZk8ec4QrHfvun44qSNnXDNV4g5WyCmzXJm1rmZMVp3KUj2J2udMUdrTChCRWGEFiDS9n8ZLUVmJ4dW9co58G2",
  "key37": "5pWovvhepEqJLmZYkXXvaKKxfsrrcX9jjbSw6issmWTqWwJgCT3BWPa847fYekwCEvPKwgcrazroAHKLv2FKednf"
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

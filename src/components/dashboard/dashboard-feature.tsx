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
    "2BTY2eQ8R8jrcSAT923umH1baAAQW4avwgbBnfw86xzdBuyYTTFXu8nYyBzQokoJwWRWRv1RFo3EciV7p7J3DaE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ry4id1fbuKCTB4NRG2KwJ8Z3eCvKX1ieXYRGJ7GyPhfD7Kw4DtYzjqFQsTVSdXBwJ25Wj2TZnkJu7DGgWm5hf6Q",
  "key1": "3W6tEHKYo6VVm3Gw3k1HQ7fTeNdRbpX4hpxoBLg7sSLvc93HrYgf3qYvbefBn7TonidzuJtdcye8B4pLSwA2uDRg",
  "key2": "53WTqx24wkE1rUvLBcigx1S4AHHpbdWkyccgmoaP8REEtuQwvnUNsbMuHSZnsGxMaUXPZdqhPf49XG9H977fo3D3",
  "key3": "2pWr9MtuJatgEwacrBUUEQJR5HE1PrgRS54yDLHDU5Bwuq9x1Nwb91kkDfnkKKRDSm5KXv53iTGvLFiCADeh2nGm",
  "key4": "4LBFyqFdEAUn28pPeVBW4bsYJcDssNfNuw7ZxS92ZWLxzXgkDH8rc87PpV4jHj8Efrs1CaHZaNbJb75t4E1zeoku",
  "key5": "2msU6dkN2UEFzop8v4VK7WuCYLFoKpD4gKQNxkb6qFJzbruShM88w6eKLmsijfNtvyMPA7dazvoaFpVuAiScmE9X",
  "key6": "372jwgE385fPb6TnEyrNkDVoEZg8CrHV9qpTNTMpXDBcSz5y4MGK82eTQyfkc2evNmtj45mcT9yq9Gf8FEeASr5V",
  "key7": "5nLSkVDAM3APwBq7o23sZo2svqzwFUvcnV6p8NCtT58a3fFZFjnvVBwdgrV5NmMZPPg6xryKEE6dDbwTCCfvTfP2",
  "key8": "4ii6t5CtmA9wsEQoWUGPRa62m7otmhCRF79DAhZjQdQW8YNVmcchaXWtczYi3Gd2A9eMAcLs3UjNazVqa5QANgfx",
  "key9": "Vo7uyR43pYQ41GfcYpdAtB3JD5LEWzCyXH93o7v6dS1dJ8wnZQD5WifSBYn7ZEA7BPEDqXy8Vbnmb4ZijNSoYAS",
  "key10": "4NWKWxGA43S4eXVQgZ5XY2QqLSVYB6vJMKfpYwkRw374uQYT9hqJaoY2hPQsPt3PkUVkWDNpZjAcv6i8rMgQ1EYX",
  "key11": "kqg5HWXeaTdguUJip9uQ1mZ8DnSL1JGWAREAca5rUmPBm17NRy8WZ9ExfbTE1ZHLuvYKcXpmxC5GQNp4GcQ6sW9",
  "key12": "6w91CeVjECrLoukMhwTk7JdFAoy7AJAKAVHbcoQvduGvP13i6szPFK26SjQuuXxym7A9d5jSqABgd7HaoiUFiNZ",
  "key13": "4aZPFVjoPhY7zR2TzdXaFL57WAa4btUQMBbRhYQATzqrrPPFASevwoKduf9RAYK532TpGkfWcewKARD5AyYYhmKL",
  "key14": "46Y99Q5hEPMBkDmm75Wd3yRYwYK22a1sBmjCYRPTSTEcvSD83oYevsiwLdwEdA4VUVcFhYfMqg96qCGz68huLX5r",
  "key15": "368fJAMgQTGFmRmjWkR4TJjVt3WnQZcJzYQb6sKZANxaMQqdHRDcpL44eX1Y1JvsGtb225gcCYxkDzuo69tKzhx1",
  "key16": "2detqiT9d3mN8HCG5cLGnLvX7gMvKjSRjLJsZsUuS3WC64ZYFUefbBP7ny7nJKyHpV2MCceGr24ZZh5UMY9KZQ4h",
  "key17": "axyAH3g1DNd8EK4ekpQYgAkxZVn4XMSBXfBdrH2ETwQDmQQNGUtgtpuKqN3DLKSC666mpCYZsfA3PEmL8MVjiTW",
  "key18": "5A2gNsqm66Y4uFijXkhkEPeaRCqwbUcovyzt8FT91MWLFuWoaJXePdemhBoLr3bZKAZUzxsYtXL1UCCg3nZQgmVN",
  "key19": "LyaDnC4vxzBe3SqhZQwuFSfC34fZWcyPbXQdPm6FGcNbNykpA1hRxWCKfyBfbyzvzYDVypt8wNkjH16xVCovbkX",
  "key20": "w1XXJf126sm4jcXS21gaQ3fdJfT6w4scgMuuCjC2zQ8CGsjB9eBWTbjhai87TuqPWUus7oLbrH6NRE7niuQHLNX",
  "key21": "JaThR7iTZp1v5KBM2kWU2uVW32e5T72vksixYbo8B8ejYVJjReZ8oXyioSDDvg6hTgUZmKvodRqqC7tXVWuDoTm",
  "key22": "2Gw2F1ZPiXq3oVBvzJHMrodAWijUGVqU5gxNYgREJjXDXsnc4k5Dy1Xd26CuYj7SGn4qVGqhsa87ybAzYJ4ZK9fn",
  "key23": "PwXSsgeAH2aDTbNuinX6azyFVongCWfwKiDMxrMw92zPJVaz1ePGZUf7XrHkrRHuwyJfjazSy2Secw3dZYn9d7b",
  "key24": "5s3YJVTcbjNaaGzvzUqyHcq673FcEMD6iKNXMjb4PS82VJG44AKESuFxxa9zfYsD9VenxxVGV51xb4r9beLorCL9",
  "key25": "5L1f7MMjLvAHwELxxxT1C1A2JHh5udFkzoSqrHceiHy6jvkd6a6jtQjwaHE4b6fJsiCdjAa36okeBKWT4gyhASgd",
  "key26": "4iLiRrysgA9pu1mwMjuXe5p68kzLaFcPBrivriYArPjbNzwUNqRw8tnkwXVCNFsbQRyMKcfJPgD1tfK5HQd1KTx",
  "key27": "4yF81HQu6nT16e1mdhcc6FzykMxWrGQQCatetaFFJDY1UDzLe5f98Kty7aVuwgiWWa2xk7cdrXyLQMMKPGxNiWzD",
  "key28": "2XChV88jwEuNqVr5gaYKPJCYc9cT6hjWcXCjTRJfpqL8m2JkYth2dAow4cYCKPkRMBdTZYZfBKqf5vfpKgYFW7YQ",
  "key29": "2RtzCrDWibJwtN8De4VvqA3cvBqdhDTFEbijs4Efopwj9GHQAmnxJgPNPACSrx1hszbi6wPamHtXBShwkbaFb1bv",
  "key30": "2ym2mmEU1xpaJoPXQ3DGBdroRBq2oC4jzKvYWUtRuUBMum184AAfCsgCCSxiQEZLomh5dkfS4ptmakXErNs5HH63",
  "key31": "5Mxzmigq2sj7rEBrDuwvDxYwzp6WHuwgLgH1ZqBsEo74rC3ehu624YC4X4gbhcbXUzmMp9jKPkkj8NwtWssUdiGn",
  "key32": "3aaFhaAet2FV6baHWhub4QhWzVrjWvrxqAREePqbo3WFwDetnRUWGFxjqLqRTRLqXbSHqN7gvbi1UMYRbrGt3ovX",
  "key33": "YUaM387WZ1NWMoC5SigzK91kmnigWudhPtr1dPbpuPhPHcdzquLieM7p5Pv3VMb1vB75iSUEou3HMo2wby33AfJ",
  "key34": "hKG46S7iA2T5t68NfrJzTaPfRRYesJ74v6e1ib71zx3cavghktqLkrQgwtsiQqQ96tJSpRR6yDXTiSovycqFYeA",
  "key35": "4xTU5WiF5E2MiC2Bx8SQxpDSHejDWvNpjar8k3TX7LDFrr3C9rjiwvfXoTuUXShBYJM1sGAToGFuhogNikJGfw4f",
  "key36": "SfTF2uzofqTYQgRPw5inGoqfjqNZH5JRxWbEmkjN4rWfG3kHJ9ZQRMn6MXNXomuztDMSEqYuTvnSqc3HACwJY9J",
  "key37": "5jQ8ZYjnfHzVZXKsrCtUYsBpmychgnp29ziyxt1UvRcGQYxtdENf7zCwgZBX5XmspZkFnMqgjWgt2maKNZqe3Z1C",
  "key38": "62Ryu8NfCPXtx7MJRC7gkbKdjrcVXJyrPyradsPefpuqquSaBMd6fS9uGcaSuUi8zU4mPNbskgTWDbUFbK6u8XVX",
  "key39": "4WRX9D5Br5zAgiTHbfkXuvcH8qvzBRa85hmmWA4VuzTFnemxzR6AtDwShybyHBR1TevK8b7et8Hggke2hoxwgjsG",
  "key40": "4duvUhHNQQy6u3h51Axkemmke41mwQdX1HghTiS1ZpT2KRVgxCWdDSYXawnsP81Gz7RefykLXeRfy85qMoC1xAjs",
  "key41": "3yU3mWvo4MK7aW93y6XFXw3hhS46P4K5xMV4FHkVCtkQb9CFDBk6cjXiL9yjaAEG83JeiTV8PkGG8VH4JAE4JFjK",
  "key42": "3CR1SPqiaB6wzxbwxBvuqxwHnwwzVdrVt7HaiE691KU4FnkNkSvu26skE7kEBhHCm4zvViyMTMbMXTzpSYGEyr5v",
  "key43": "62ktijJjCiG4Vy9LCqjsqwJ27bYk2KMyqLxqBqbsxgvr1cUrtYtTCujzyR6JJ5PNs5qXnXPvYFAUNKeST2aib529",
  "key44": "2ebz9yCBYbtocxCTVRZrKBkpFrkYPtLMXBbR7NkjBsTtfCov4bY8ufhfHVKZXd7zpJTMM2VwJABeDGF1DUqQCYeJ"
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

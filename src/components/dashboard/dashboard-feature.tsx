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
    "4iJ4HUcdGZfNaTG4qDs2aNYWqynLckDB4VmUv4jXM33Tn2n618TCdLQg7YpsitAK727ogoiQndsVHt2AsYU4hxPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355b8qwJCKGqmxTN4TpjPjYqR3D9XWDWDs9C6ACUNZjRaVGyu5Zf3eusKUoubFUVitBic5S26rWVtomtYMKMpvH3",
  "key1": "vv4xTXdA7vWYEqjwsfQd4Jj75ivPcAfxDk9szxiTvU6KcyHCHFhFA6gbNVsn7VUrhVmAG9XBCR7vFK3iLyeaua1",
  "key2": "2EaoyfZJ9JVLkLwKKcX5d6jtwLdf6ZQegEE4snr6r8eEx5FqJgovUw2vXzAV18X5UE4bSGkkohQWNvCzpfEMQyYG",
  "key3": "21aLVqhCfuVVYKdVkDHNKVzUL8M1Dbjc1PPutxwfRG98DVeHjmmhKSV9PVUaLjJe1vUDE9oNgzP1FQuTyVh8Ud73",
  "key4": "3tUDGheDfNSRarby389ZrtCE28Z2nMvHxuRExrtZb5wsk2DizRNVUq35VizoWGP9PZUrBUkGZpJavLkuTKhdj6Yf",
  "key5": "BXVDDreavuL4JGSetsECUC4RpnqfFGQj8iA6AhHia7Y3866VvPi3hoSBVVewLBCkns36LQ9LkvzxJRMPVkhZ3VZ",
  "key6": "4ViM2wBg1y5Pfybqhz8nSmksfM6Wbt9gDbDWm7kDrHU5vJVvS3sC6Rn3WzFqjQRmYNTt3K9NKQnqhJa5qS6kn33K",
  "key7": "66h7LrgyDJRuho5zE4JkLq1dMcuYguXyvhDUSCMnNQmcaGhkfSsW7Zg9v3gGiTqzoYmAsAJLnfGSgeAmYcaqiyD1",
  "key8": "5fKb45UkrhdDaPzg9XGKHHvvYDdBJUQySVR4wooUENXgZ1tZBVHx1qbAubbcqFfHob1GcXgCmwaKMUfAC12EGc5o",
  "key9": "2qvYWHM81JAJKzjHumUrZGXveBTeouQAEqc5wxSovvE6Rb53vQmeGbmuFnP1BQLKMpwGg9e7SCDXkgN2i782gHdh",
  "key10": "2a3v2nRDPz934rpSmxgaYBEbiSJyd5Geyrn5eeU276tXMUbdsT7wmtRyeTQwVKsA4o9UgZ1j1VyZhtCpfmTNvBrv",
  "key11": "4hg5MsTohTe6vS4UyLSQAFKty8JqfqGt3LSvSWwF7eqUNxbFrdNVfbyhjjB4JhJ7CWL6CvWfQuTgY4cfLtDwByFc",
  "key12": "KHNgG1G97i52F6uVe9LBUv7xo1Mbyac3fVwJyqsaAUB8PWg3MEEiVBqomyT2Ben6SM25VXYDtiKut2GfcSVDKMT",
  "key13": "4MYHvV4q8UdiM59fCGHG9Ypgis68rhbp6xjKoRn9Gw4wfu8cstsWB6LDpRjJjdqQusFCifpcbwJ6oRFtrwmjoGq",
  "key14": "3mtMmezthmDuM3mNXXvQhNbVB43HyMkrxJPgPFermphmiZbbea5qt4SP6toDZs4J6WKKbTL4RAcbKWRVoEajYxwB",
  "key15": "5Lx4RjVf3XTTWvBjHYmJFfRM7RNYZhSX6G9BptuQDSC2BW97tK7yF9VX6b5acfS39N7furyFEYc8HRrsHY57r6uy",
  "key16": "2MApyZmahZV6JVDUaqW2CbSM6domiS7xDc4TdKxetsXzjoH1D4PFaf6Kj3j5fiSL74uxqwoXeirnzz8tCTvhdQbX",
  "key17": "3DvTG1WdhiGEM4xciJMkZF9SBrbTxdUNr4kwDT8x1RSiaf8GeuXU4vrXyaanZfco7uy9jSt3JaVJ3hZmeJhPfmzZ",
  "key18": "4ugR3mNzuHqrVh5gfvcArt1pWq5B164LqvQH2PJ81L5z6mHu4exiZiwEXfXTTFXxcxiBKkfiKAYA5jf6PwzfBW4x",
  "key19": "67aNeq3MYJ3zCGmnjoFi94PvjMwDYXW7CoysNmKwiSxG8hPsDft4sEE53DU79i7UbUkhiJYj5WQUXcjSu5Z7cjRz",
  "key20": "TnVhQisT5BuuY1shNrV5cgPzswq1Vmuv6k8iGvMCCKfTW5HY4WDMXHVcwhaEQ6WLHnNxFsJ6yGowpfRMLH4nwNA",
  "key21": "5cnArNMQr4LDYxLakVvqPSBb4uJM71HjJ3aR9iztX7FFcBCNNF6BeFBSbCxWuGFz34ME8J15sdZxsh8kkSbif1Pb",
  "key22": "5tCV3wNixhpuFwULLhythAGVJST5jeMyPfnq1xKeKehqCM5UodXLbcnYwEm8BQj61WsytzBR9PzB3bdrc1vy3YVw",
  "key23": "2joKg3W9itFZ3MbCTX56SipC4f9kU2P4odbhikMPmsb4iYjUF8sFPLwu8uwTPbxRBVGFGtUi1p58pE27GHdcVy1j",
  "key24": "5WFeLrgk9z86VzRck6M1kgyR9qcApuQbasKFfB92ZXgv66H6S11aa3NZmZhpXsfmK49oroLWrJG7bBoDbKmMvdB2",
  "key25": "5dWL4i3WohYrqxCEgobftBEGc3w7w7BVq23Nvq4Y6oDLTkq6dr9rkLjeuPXLvfpGnmiZFQ6eJ86ZcxHb9v3xy2pw",
  "key26": "2FQXAYFofhQarUCvdR7aubUe2NNbK9kyb6RooPpQd5GunjZtK3f5QQQYTFXvvXcBfDhU2vhN3Sgn7b9ftM5GWwe",
  "key27": "mRomsVYLYmYw63UehhYrAFLCJNwJLr5RoFa2DGG3n8tekZ7YqRpNaxvzbtcHS6zFsbp2RuaMrc2vvidAmqA5JRk",
  "key28": "592wpRwXvW1UakKimESoQjSRDGpsqVGh3txq39mMM9vuwNo7pxcHwemTJoaF5avxLJ6288JEN9DVpYSFaqm2TqEx"
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

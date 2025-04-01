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
    "2JXSTgFyyZFRHXwogo7FVfHNyT6pEorpuG68FcXr3oRjs4rejz5cdTfuTBe81Jks2QuzbFJWwqSxAfVwhb62NR26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ozAiH1QWjFxV3Ar2odGoZz3K5uLWKzndnbL3xU1xod5EAsnnz8hb9aSpooFgSGNjfbe6tjbfhSQSdcG91RezUmz",
  "key1": "4ScQ7jj5tJYfyh5ezgoKDtpt4pLtJnkXUzBVYu1axU7w4poFZjdsRiHuMNqBYfFMU5BAaRVXpxRr7XfhoUawdewD",
  "key2": "gAfvgb1G5zCsYEecM5yQ5YD7WDmah3rs3hp6T8HGuBbYU2YMyrZRCPfodvhCVUEwXdaB9rha6CipqpAUeq7DK9S",
  "key3": "3pE4xJW96B69GnbiZpZhQXk7acPL2YBArsnmXS7vvVms3jEc29auGE8zMEMiobQQqkVejjvN2efG96AeWEy9b9T1",
  "key4": "3MCnM7kDbEcnt9ibLgPTacF6vvwxdZY8cBkC7XowtVRHX4uZbxA1Gbvn5CUmJwurRRT1XFThMB6cBopZPGxougMv",
  "key5": "2moDBN32kboyhEGzuSH7UBiwGdQzdGfzpqBfGfKLZ1cYR6oNxRHTwqzy8AQrpGdMEnjTxKZVxv5ex3NzePqvtrMQ",
  "key6": "3Laaa9Ykz7R9ccQLjpCuamT2DQw8Doqo6UpeXT4es5R64bm3bKRyxdSQgF4CVkFLRAkovcU8kkAGyBuSm581zNML",
  "key7": "3aT7NHPLB7wdJ5ydHDiwkXgXJLpspBFUJANqs7EJ7bzC6tbGsRfifhCzUV8TUN4KoXMurkVrfqJdAK5dnxTFLLZr",
  "key8": "67MexZmxNxUhiAJJgsfWH64qkX3v3rTNCLkiEuJZD1fT2ehVoU4ZPWtKyrjzGcr8adGByzr4kJ2Mtj3tbfSUDLFN",
  "key9": "5sdveuDAq217CRbVJdb4KgdJ5ER6tw6WqqCi7XqE8eCD3bwCuVY2f8NrbYf7nmaH2P71qgyQ7LAPBR1GcjdehVW7",
  "key10": "gmnWDkEwvwB7dHVU4jP9a8AZKsxHGFEouCvWKZQhP8wwCBQatnWxWBEtdhFA8C2TePDkvvY1wipm57GxMu6zna4",
  "key11": "4UNPcb1qTBswAG74gNau8ovFDAp6UTELZiDNfNSjaYoEuhJYbqNhjDTQ6kisjUgwW6WqTGFsiW3naqArVpuyfmYY",
  "key12": "3oPRkj3amTuCRmL6MvpZ4sBVaPT4bZx89r5vxYRecFWzm4jPaWbPkihw4ZzhQCJ6WaBBUVijGUULX6RxUNxF7hWb",
  "key13": "4m5zDVC2GzxDsuW49X33hafMBB2GpVF6RV1zcGfJC1tWR3QGzm5DDtsqgP4P2FnNqgSgm5Zg5ANHUQTkqzHJij8Q",
  "key14": "52oPQskLsN2vQTwFRrfgwfEPso62onFmGDgiECzF4QZF2ygHVtFCn2gQuncryQkKu8uyJrAHuBVxVgDTsJGM7VsR",
  "key15": "4XGDcFXdakAnR12dkL4qMxFS2k8D2bXexKnfXKooGPL3RdQRVtSUaPQWKNZHabzho2pLix4Y5X14TszTpoEVYLtT",
  "key16": "qZhFdqVH5e3r89aWLNEBwgaAVqkqRngNG1yZUviYZn6St6JBzeYwX4avDJt8Y8T2SJKZqQuPvnFRmMNkzGxBWCp",
  "key17": "2Mt4tumGGh3SUGzc8AWQXddg4UnenofpXqgcbb4j5fUWqpSdy1v4R9nQugvrkdrhnnNC6B5GY1TV9z52RT3JB1rW",
  "key18": "5paBgGg2PdTXMEJHNiJMXA173QFzZ9JwfA87XGDVLxAzeoMxW4PPL3S186Wt2JN3rS16nKf4Jpt18AzaaYNzTku",
  "key19": "3Qn9EzGt4sbdSmraoNWy9ACZuJsQVbdm5S7SfjtPfYtN4kiNknXipiVSerpE7Ph6sB7Zb1UJhk5c8q2w7oGY8rA3",
  "key20": "2gFTL2bK41FRdXrJeqiDoBkMkwxF7BvGMV6n2XS2SzWahmCirVu8qZBePxJt7hhikDnkeGx5Wvnf6WSYfMqS9ygM",
  "key21": "2a4zRB854vBDPE46mRUPdNz6UEfLsGaFhUpkUamEp1an7C99yr8MsWWWKMv4XXML4bT5DLi637pZDF8tKmuECKEb",
  "key22": "4kXEN3sDPGyGCjo41fPUDT19DnkqS9KbE6s7963uGYKea1F5g632tv6yCxExZoXvW5Dt3RjrSxCPdWpp6UtP3Pp2",
  "key23": "5jbQsXWdD664YUAoBtucV5A6nNUG1rfwNL1RaSgqGvisJgjY52WPdPKBEUc4D7SBkFRgNgVjNNRuwMZYNwzEVWEz",
  "key24": "2hqYoJBKWHqDE2mUDsJdusGBYaMVmW7xMKYekrovrXChEdkW8JYwc9zAwdHiJJFcM54Fx5tGewpyhzdd5s8yaFaw",
  "key25": "5FqVBFBm35mkfAXN9QmB7xfSp2CGgZ4jnK6Ddk6NT18C1EzuHkz6hyaDDaVsYPbzLDVET63ofCMd82tzzXwLFCQw",
  "key26": "2TaRuqWaSKcAsfrW6e4e6xmbPWae6LBzg9gqMBN9qbce1ksJLtBB93rhA3ui96wnrg2Geizeifq2qZNPYdivzW9r",
  "key27": "4RNRiDh1ojMXDD3ndNgL2zzZ1cb63RZMitPm3sDy5zBH5jEhHvLkozW2haHK3WTF63TRLm8pdTQLLmAV5Ebz1hBR"
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

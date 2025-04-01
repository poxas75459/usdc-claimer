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
    "3oR1M2iExzbTEqW66vGAeDWvks2VXiRC7AwFFRL2trMid1z8Ficquxx1Y2CnKDQdCCdKVx1JjZVH9yLChsSSs42G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irSSBaRvB8k93ws2moqQXVWPoumWj1tSpLEXqDPMYwSjkyJA6VST9HU4UDCoxKtCLXP7krYBYbR9Pt59seZFmLe",
  "key1": "7H4GKYgHuNfdWUXXbcdGcq9THbAv4xmBccexVBsYhfP4dwxf5bDzE1fnwibvid7rvpF2br3UcfapJxEfGRS9qJ4",
  "key2": "5htEXNEop4Hr87oYu4LvaGBS5UJV8p7RHkjVEkBtkex46Y7x1TLy69SRKvuYvgF8eiUWBJ73VG93QWWksJZRnes2",
  "key3": "3vayRLoJJyjNRSpdnhQTJs4aCGvdgQkkcZ5ug7TUzGzei6vN22DAinZKRFySGaZAciZRQmetw3Zqs2c1BNPZggcS",
  "key4": "2w5548TUjXzkAqahBspdT8RDUNxzgbD357AG8zMW4gGpdHaFxd7wV7CnswP1d1GterAYd8PUos8yzuozKRAWfkUd",
  "key5": "VqPwKaQMYWE8SzmfizW6yEDLC7Kp3Rv2TPbPquftBHRV2Jt4p6gL9dHRP9nKdonG4MnTuJswPMpjcaKGWqd8k9w",
  "key6": "341gZfczXeVmuxNj8JWWFhmFXEtgTDgNAeaUFwwbZvkLQt7KqHFLgxNVHHRuwN3EW1zeiMcBtmTaZa29Dkea4f62",
  "key7": "5ttNn2RUPgfcnf8efGSfyNTcnYJi7pJYbzesuD6KiawPbdKQP8eW576Uufj2mDhgumCMghbDfw8WAoTz31FUHYPJ",
  "key8": "3Zos1WLTQW9hEmanxvC7QtUt8pUGW1EJvEkfVHaHnJRMYwrkt9vzpxbWb6MwBc8XgepwjVW69SnvbrQabZ4RCjGQ",
  "key9": "3EGBzxsVPcS3BWYXp1G3MN42x4t4JXqTMuupoF9QcSmC2Nqtq453nkWke5uvs8EXUXuBBBBBHJqyFXKZHD86cTz7",
  "key10": "idARLVqvGwBdZ2RHcwLfBX2hTDWzywPU9P26Z9R2frxcBHUF4LvQtPJBtFJgfMU68yM5ySVgCcR6qmfh3mBCp4p",
  "key11": "5kepVs8RKYBu9QtRdVEFJXELCYXxWXqJwQkZbuXxJ23znSbM9nxnbNdD73nYape1rSiVu6v8V7YKehz1w1RxoGfC",
  "key12": "5mTJwDbSMNj3bXEsd8S2M4zfxUWwReHMZKZPJ2c3ANzRQMm7iTjJQAe9D4ceUc7Q1vxLiKDAJxCxg32F7WLGsgSs",
  "key13": "2GRrqqhqnm7KqJ9LJzsrBXGvc95vmtBjLjUPHMUHn56ry68YmEPjzsmo7t5fAdE1J3Ux8eeCVvF42qwZw7FxvAWh",
  "key14": "64FFG3xdxWiR7TDMbzHQcbtQ6qHmxVyFqeivYDfyCyP1PxQGCpps3ouf7GPn9Uo8F1m8277mJBuCLzCgwRsEruBx",
  "key15": "2d7XXQ1UE3YLdi9JfWnBt92N98pdi74VvqkMcyWge5aj29AE1LWRHJup87mv6CVzDCiDpRm5oq9dK33gokyigaET",
  "key16": "3DGxXtZEYqY2hr7GA9e1TLHsKbGczuFjGCAnyAeevxvKk93R847ygpz6CsSjWfnJkpeD2eYQneGRUE4nsbJQFbx6",
  "key17": "1Mg6SwNez734j5ssBqBHexxMJdBeVysSaXVM4JeW1m56WrnRE7e3y23eFqwXvZhr26jptqYDhLzjamYaYPfcpf5",
  "key18": "n9hYxVxBN3o8hcJZN9sghh6QzKJYGDQbMi5hsDFi67LrGqefBQKtwF8whedMKLvPbnPRX4arJ8u52wtQeTbdYgp",
  "key19": "29U7WQRspV698LrQ8mB757rCAcGM8sDtYY5FUKNF8mNN9jL4gPtQXPwgG3BvJLNcs9dvpZdQahJ8WLE1YQEmbrTd",
  "key20": "3gQkiegNSu424iMBRtUwESaKvm1ZHi4swgpKetTPyK1WELyDixkWC6cvA27FgNVswjHYpq5TyaDXJpMSJ1mnj7Kq",
  "key21": "3wM2vs3S886gTK9htAxP2aj2eoTAQyxpFFUcaVvuSkxBNAwCLUUbwNjdoMAKrDagYHaq28w7t56yetmj5mtXXDnz",
  "key22": "p43CGpSkL6aafbhcWQ9HASmoZy1yWRjVTS7RMrDVafkiM5LidNUxSTfi55qVH8FKWrRpggc4ZVS3pJzwPYMz8x8",
  "key23": "5KkdKKFfJ5u6tDcYXm7miDk92E1KSErhsE5xpcrhh86TmnUZEHw2kM4tmywZvxDfo8M2Hb4wg3M766zD2hh5rQnh",
  "key24": "3A9Dp2dMo7FaHPsCf12wjHST4DSMoHmBkF4V84zjiZVUueCFA816GAojvdcS8k75cLGAoKkAYqbSZFoaqB4DdCuC",
  "key25": "4cbTT15X5ykdC1dTa1mqNoaAjZ1fm32ufB43VVPBN9BrPLQ9JqdrRF8iRi6CV56TwAxMFx7w2cW724iWCp6o5B7G"
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

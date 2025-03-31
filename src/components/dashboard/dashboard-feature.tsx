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
    "5gtdAFqt7Si6Gpm4ZwM9uqRDujZrmgnFSkhbVgCdmbca7J2amrh4UPJTbHNLxqd9X1LoTPdi5AcBgeJUTM8avHx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPHDzHK8V72wcpDnXNBntPHDJ6pPciGD7pSt9xyZpDTiH4kj7zkVnVj1mW1TNdzJFaKWQeeXMEQ4WCXBK51xC6t",
  "key1": "2J7zh3k1ohyryHSGQGheJActZCCQ1Q4dxDEPELR2zp41yNsXLis7qdExr9LjDek8TUKSJ6aL26EfhQPKgC72iczb",
  "key2": "4Yfe5K3GX2WcfR7aLLbr4iUZd9U37fbAUT7v6N9afvHDioAt2ak2Zh5bVwAKmaZqdZ7bpyDYK5ec4DLp9GVjHgz6",
  "key3": "3Uc5trEx3dPDUPFUpVy7im94NvjWhg8oPyt7mzHPGPZtntWvxkCjBbTfuAb2wWkhCVYiW9ErnELcTZreUoDEgSKA",
  "key4": "4hcYaEnB66bkJmQCivNSwbCkwJdBP7Pfyjh7PPzYXtj66SVrbqywpPXXNbPc8Vt5Hw8jHcfqJ4iCpitVPAjuC32t",
  "key5": "67GpyNsJZEEF68Tp6AAc2uij24UQqsotBdC2jddafQ4ti5LaTgv3RdmeUSN4ZAT5bLugVMqC17oZWKUeXJCk6K5h",
  "key6": "45yadPvdwEn9GPaV8qZ33tn8RZtTceWrjushJv4cwHkDJzj7dodTD9esFMfUiCNcKMZszvgJPFL7kZN7U5RmAtot",
  "key7": "5t6xTASu3JfGrov5174tDmPXJZpCTJ1iHfufqHB6SguNJXSjAQkHYuePGWeMP9GbNdgpv4XpsqBDT7FYvpxxJCdJ",
  "key8": "5Kz9F2489bNfmvrUbaCQ1byyrjQ745xWxYfdov1pf1NFaYqNdgo4M5fU94ALcZU9qTW9q8vGdEvhUBpgC8knaZFr",
  "key9": "2BJD2JXPTbhCTTMm8X5DAH6VuakFRTfuvHwB1tDnthjX28u36bbVxNrsuuoBasFaNmyeCSQL9myij4iSBKahzPT7",
  "key10": "hPxsz4EEXwgNqiTsyVstVvk3svWGyXYi9X8UM8ogjcwvrfouohkrMpc3qCgnrTz8pfWzhVmcKJ943uWMkqzHxJa",
  "key11": "4YifmSb2iA9SxRks5eeeq1x6C9uJTuo4A1rzkKYoF5UGPcjJABcYuniK2VUs3SuC8nj4kNjmY1Qp6RgwcCyJbm2b",
  "key12": "3rQGhJJYe1LXjZnDmoxQUzXWKKXbXg2JV8eqUaXx1MffQoMa2HNrnXvtnPs6ZuBBo4EYg7yFRhFLLAKwF2cZug1f",
  "key13": "2Hihw1iEsaHvcjqrevnBkQjhohp3i6n1keYZL1AApRBBQGSCWZBQDTy8S3oMeMBjxJUYkb5cQcQYPqzhmKQN5Kc9",
  "key14": "4JXqyqu6M7AaYyM8nNz5FtqPSjYbLkFou1z4vS7Af4nxigFXyXAS1hLKyKGBqP33btNuxTraxK4P66eeMke18Nea",
  "key15": "nSTJJ8gv2SQ17wLf8CuShN4sDMNA82gsxKoYXrKneuVuaH6K6tSpfDixYYm5hpQhSwjwqBdU27row5MEL5D3dr6",
  "key16": "w59yapaAif4kX3UNnAmHddxvhP5gX8ShMdoeAdMiHLuf1bQ43gpguPTQxHkMziqKYVNtNRVqzFF5W5qEkuCBqBR",
  "key17": "65VJqvAhRcpsgy5vVDzCkZ6sCK8FQvtkUEJvFxyLGAygHGMN4wGijNZh69BNr6bNnX4dzZgUskeoLuZfAPdHTqCb",
  "key18": "4KmichFjX28EqafEv8uqMRtdZpHQxXYMsFPqc71HWyZai5b2M1ETHQMZCmr2BTQxaXvm5eJTiG6MZJ5KM4qmYuGn",
  "key19": "4TZb6tFEBhtc28uvL8WzXKXdFLfGM27RdhdsG3Xp3sN17Vp3tbqTZ63ayRejxkNnFFghXuNyBWEjd69vnKMnhumZ",
  "key20": "2VkvQ7U4jrEzABNe2E1GqbLxd4GQ9JwcygxWdLUSSc54cLKTdP1j72WrgwbBDgz9MybqEa1DwBRF8drUPsxaWcz8",
  "key21": "48mt7eGFm16NDDq939RogPfqHAdHY6dMPb5FLYbahxp612TmMuw5gZ94mi2g3PEnjBiyTnTTbbvnPt4ST1vykFXA",
  "key22": "3WRCVxzHN1HGRsUQovkRf7US9DXVWHuGPApw59Zy38cfBdxwgXeSmgFj4uSVqvejXJxRhrNAUp7kU4AEshczbhwW",
  "key23": "BLuXAvSpf3ZcJxNnoxb5A13D3gKhCJY3dJGffvyRhNUJ2VTHHbZ3Wd4dEoUBjpW9D6jiLmef9zoUDrPF1daRcDC",
  "key24": "4PuK3Np8te6TtjoRgQ83v9VihbYgJpEkxBJDrUy5Eq9wxSq9HVfNvN9wd2HWV5gFiwRiPpKP5dHai1qAaJiXJm9j",
  "key25": "4iwJQmFwLkiCnw2JLXh5YPNsSYgYN9d5DNsykmp1HwktQoYHH5Sj4PDAKSrjCXPRxUYLKrz1jEJxNgMwuUBdd9Ut",
  "key26": "2JQZ43PLcR6Ntdg1imU663KDvXtumesjxrLCQdMpTrMP57mcu9XwGmXoWV2zuyqTxchmFXPqz3ruBkYe5xu9gx3b"
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

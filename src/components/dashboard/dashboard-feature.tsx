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
    "5wMFgmUPNdrxydHgStASg37NEx989q4m7Gq7aGsQYg4E77gD9VjGntPJG9oRyo8Jc8raAQMBHXphxjMMEQfxYNHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UNcT3i2hAEnXiDTA7MuPCE7vyM7RfHCsYHH3dRyzB1vSMAjHBpiE5ZVRpbuz3SLhNZ9y7TwbBpgcteDTWp8TfqT",
  "key1": "4EgC7eBL6EeG6UV7dhV9eCNE114pyksQPiExjxbeTjXYrf3HvdP2vrdtyjewPpYeLQkbsPNsk93xzjixsLdkPUjq",
  "key2": "52mJTUrNMeLLkGYigT648MjSe6mgRooJzaT5ABwtrue1oqRYRApxDGFSMckntTnLYq6hpp5o3mQ7sCjQ4qjKxhgD",
  "key3": "FpMuDra2T19j1vrVT9LcoHCkEdQfnep2uk7G3txqbuwQ8yK6HqiiJGGXEuidPnhL5wPNYtWCXnWdxtLJerCsHj5",
  "key4": "41fubd71PrNCcre5Gs8fb3cDuM3Sgdq21zQ5thFdg45FPBfM4JjNTRVN2PptDHSzRwYpMjqfQC5p9NVo4gAEX4BZ",
  "key5": "44J94b5xKsTHjR6fYp4Ldv43ApCBnuX24qmgACKXejnTe8YhGb4EqBHqQQVG9H4jwUXxiRoadRpkrQjUbRU6fndB",
  "key6": "5toaikTStnVmuuR7yr7f9M24uqviQ45chdXuGk9HKz5xKDuzhtWKh8NnXhRsyswBryY9vTEhzuFey6415Aj2qyxo",
  "key7": "5D3Upht7x8UCogdLAQnKY7tyrYRHV9br5AV8iJxSTTpUA3H25obfSkYUsZQ6gx3Fn42z9wiMpUDGVskPgbspUbK5",
  "key8": "5PCTpeKrQxgkn3qReciMvpRiZvoFKjRxvirF8Lowvd93LMuo5z3FEqVNMyH6QuRNaT4wDLz6kL1LwiRi3BNXEHwR",
  "key9": "5epPKVA3BrdUZVmyjKT15ZHGkKVsmurueQtBK6cgz14o9CVBbJ6ruLtDV8H8nYE8AqmL2G5ymwzPAyW5eSFFvNot",
  "key10": "62vD645cfu3fnFZmXf6zkZePBVkgXx2HNCZw4kVhjTuiNjBCSdatrNhdTSnYpTXVu2w3WpHadQcFpLav9p1Rwj5d",
  "key11": "5L47TUEmw1KJrPvRXrt5GLPU48z2EzN92ovZbUnCGppbW5n5X2YKXPMRbfNxEt9FHhcuafMERBgeW31AhABPfLzk",
  "key12": "486TMDXHVTJZuBgzyXuMAZVTGT2VMkFXG4gP83bVJftdGLTJWzvWJLdxD9ddBc93265fosJyDbxycJ81jNfQNK2",
  "key13": "wY3vATCwTAhpsageZgERRheJz32xjfmQ5cM7ExYCrRnvrRG1Y524d3PRa9RpnprhWtLEYJFEL9Pz5hGCqejVygz",
  "key14": "2kkMAeWBjjQFAJmitFTaxgwmCUXps6ZhwhAZV7bbCmz4iUcCD9zdoeeVeH3g9FPoGHgndLFKLacs9eA1G54bB75M",
  "key15": "5EKePZazrZX8YjFRruhxRxmHFVCy41pdHPJodjDujvCp6BakpJS6aVXd6De5di4fJySzgZR4we9Yuv1FsubXhQDh",
  "key16": "3gP2BpWxYL4t9ycgvy8RMfx5JitrkDKkV3BLkk1JTaiXKiWugC6djgaDKFmwiRC67ciJxddweTURb2SdVsm24atE",
  "key17": "2u8qxV1ds4ZUKt3me4PaZ34FWjBwGmvmCNv3f3KZ85hFefwR2jXBDWGfYcFPYe3wRrcqR9cHCoz6hVV3RcwMzhe7",
  "key18": "2iD877dgznD5FQDrQB3zjAnViuS1zm8bpnSnetBmihdT1gfiCNp27VNYtwPfh5GHVbm9cvkJYPgYqSsFKYbE8b3L",
  "key19": "5ANQuYPTivnjEmbJGYMegM9b1mLEj2JmGFRvnrKVMA8oD9UttTTqupeC5mFRxz27hbvax6u5JP86gi3fEHz77wDu",
  "key20": "VNsvkPtGiTczhn8ZhPEokfpiPNxFcxHVCQ2PnpdN54JkuSFv9oixnMK7wxwHM1AKBPtiwyMRbSb714Ej6vGXAQ8",
  "key21": "5BuRqrqedkayDUZzgVj8DJNEM5GcaVkVz52NJ2pt3BRbuaaDfb2YENBMKwTrZGk7P1YVvxDxMgd4LDxU8xiqs8wA",
  "key22": "2XfL1BvnPUeUJ4d41BJsstMHKrfTgnuLhz7NNmQ6MtGeL9FAVHbQk6pvUr5SnAkaHGqMCBJGAxT98zpxXS8JEwoR",
  "key23": "jUaCFX82d9anS1VrQ7QnNKsvfMidQTuhrWS3sm8Xte3gy6VWyitA9i7irr1k7kh1wKLDCjSeZ4RU8vWXUYbR1Yy",
  "key24": "3BkvcY6KwBB5wCnN2r2je7ErxJpypoTzpfWkiAYGCMYXZQxwzKtc8sRUwmLJUNMaVuSMXk9deo42iu2Af18YWQM9",
  "key25": "3FHJK3z5a7rG2Nh7nerHHmRU5skNheNu7zGaG1EMDDSD4ffXzU1XXL8jUYjVr39kgBBEfuyT4mWHcP7Kz1kewzbX",
  "key26": "45qU49oCDh7MXLonHDwqrT1e9vt9ev4f3A1uViGXRhWeHFNpyR17y7Z8PYukrU7YEXkQcwQCio42up3nrAYzzyQb",
  "key27": "2zazT5mwh9ahgPR1iDEuizcWzXwSqj9vaT9jsH8qHfvtbcxpmCJbsd193DEBvzaeZ3LEGru2asthZvy7bcwHnveu",
  "key28": "5wRAHeedHqPV6eob4iYx4yYhVts9rn6WQCMtPYiBMsDyK72kvtY14imRnmBhqjAhizZ8P7G9FSvdngzzbxdnsBsa",
  "key29": "5CjoEYU1fbdvgJmS4CAzASfKacVDtNfgdHDSrJLakZ3unCDtmWhCRjDJsZjT51dTAh7W2Ti6TZ4RbuFiWh5QdezX",
  "key30": "5dHL6FEiCzE5bYnF9fnqthJJ5JktD13tHMaYNsQiz1M4xc9qxYGuoEz6q9gcYCFaXFuEMFvfcHpFtBN6qeYeMbHc",
  "key31": "5rKgkFZ864afdqUDStAAsSmQwJiL5xqutDvAmxGcTQuLQ2a6GszJVqHZiUwwUt5DCk44BUjrsVCBaK3wAQgtL1ms"
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

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
    "2vDqzNwpxFdRE5WBwRZzuQeezYHt5y5pWEwHHHrqLvbbMBkGzx7X9nP6ZUGcDTHZ3aV2hwuUkiNQyu2B5vNpbZCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sE1b3DJzjnPGTce4vK9uMNsLmAwYJQR8u3QHfQbNy8M2v7q6xWXoGNaSPQf9i7X85jE8cRXf6tN3YnWVhb9rQUo",
  "key1": "2rQ8XR89Hpsg6n1HjU6eycE3nrpNpGHMMe9t2g1Ec5yhhJNpWu52aUaE7vWfdQ8ygGDw1sDJ3zyrzhsPGfGUugA7",
  "key2": "M2vrJMPDkLx2BW8yGgDsCA4sWb6hBeSneFXFE5sNmMfLKo2ivr2VBW5QibHwNJfi6XiKhuRmQLwmh2i3EzT5w2J",
  "key3": "24zATzPiQ7DhuLXi1ScqWTmo2vTFemHKNzsW6HvzKAyHzMNos35Eh2P1mti8bxiQHiYyar4HpbiNN6HNBuQXiKTD",
  "key4": "51aHJS16LBAPx5NRQXXHsmb9FEnKupsrHJcUeAeKZ36kNmm3T85F78HiRkGokAoi1YzXUT9d3gxepXerCbx2JCVt",
  "key5": "3DEoU2WaN6bGr9wTyG6wsC9fzT7PLNFQpVWUKjWGY85z46KwETLV62HXpX1Timy3AYPw3b64uPBLKmFcTWCs8NVU",
  "key6": "5FuHuQcZLtjv6PQjPhB1oiZBdeKWiRc3EeKW4KNJsPuxFohzN19FJyLJik6gg9n9yFKHVwWL9E5JDibGqnKApPAw",
  "key7": "SiymHT28UA3GQZNFL6KSM8NjsehKJFfTndPAeH8jYoH5FFpRX9TRo7jfjmkfjgQZs7YJSwcRmEZMR7VYGwmH2fa",
  "key8": "3KnuAxsjNPQzfJHgnRLBfxd5rRvoD1fMidhcn8vzfEtqm8GLNnw7so6wBUfMMoo8j7ZUKthXW9GjZ76tYuYaH57D",
  "key9": "jD1nMAAzKZWqDLRJL4ZwSnskoMC8qvcpFQaSTMPdfx3anZDsBe74Rc8JqHG673cz23gDfBvcBwU5HgL3EgAShfU",
  "key10": "3nPjxyztoezaNZYEsuGZ863okYy9az6hLLN1s1dW2CnmhQt63SHK2zWg6ytaa8Wzm5DMNVmj3DpWsjZHuwyHAFj5",
  "key11": "5n3q4UT7QrNaJFVEb11qEzNrHspgP28f64znYupJXL69kHZZtJvQp5trTYzdkyHYCVMoBcwCpZbqYZ6NZZz3zWLa",
  "key12": "2otAa7ZBCWFQ2ks7548RsEEGNvHnYW2W6jJBiLZPxfNMywQakFkeQPiWiSpo9AC6Guzi6PXPmAuZM4epVednbEJf",
  "key13": "5fEEqC4b1R8NG6fqTBii6crSuxmBX2ZdcYkedohzTCnFdzELGD6piPHJptP8kLoT2vCjwrqdY8mbwuLW18CGRGV9",
  "key14": "5cA3cfvaUdQ85aVzXoJKbbCeebiY2kg11GuUk6FDEKr5C29rXifeSyY8uweM2dwv7HNdhPadGg3PTx2r4VL9RSNy",
  "key15": "CsvLnkCw6e67VQ1qb7WubL47FCPTjGy5ZBfCS83chp8CJQyKTkBc1MmMYM11Znrs6wTrkoqFi2dooiPmz4yuN2x",
  "key16": "5QgVnwYSwK1fddFa1zz5ULUYhpAerzMKGukUGxHrjM6cnweYkNyAxCfCppdJJjx7GSpZhNKe6EG8tNHgxwVS51w6",
  "key17": "roWzoXq2iVctJ1x4ezWJft4AkkTDVWSSmmVfeFBM6dtZc4VzpCs4DG3R136knKchhZqB1due4Ao6sKRzuUKvdzN",
  "key18": "3G7Bauh842KRk44j3RajpD82quYX59ox8kNg7QjM2HwPMM8FKhFjxf3hcfqEY4cczy8Bx4yH3ZFWGd6FgjcFyLMs",
  "key19": "5RcMpw5xBMTB5EgKGAxRFTyzScHbggTLuNHEW54mdrhtbPezSifokS9UP7CMZb2uprSCq1gU5C97PLW6kmUPzRNQ",
  "key20": "4NihmuJEabfFW8NWamuNRbshm51xbnfDcxhjkSqG5jqWA5wT2J4tuoEGSj3esbjas3gn4cgjidKjKvgvwrpE7iJn",
  "key21": "2H8whLADvsrvfufZhrTfXhGa6uDYshA8nrhcUEiqT6VHeaVshJQawaYcdPAng688U5D1Xsh6S87uMxiT3eWfWZnA",
  "key22": "i1YuUQ4t9mefbB2URAmjxumXtHZyPQamA5j2YFjE15GyEidGARPgYrDzN6FWDUDRXoFuUaRPzsLSyf7pzv4QD7S",
  "key23": "66PBF1FS4tu4Zzp9kVqwv44AQGg981m5ap4mQeZKww8x698sanuKFAfbYp1jHx2ojAqu7BR7Asfp6sgCApMTdENx",
  "key24": "35mSfgHtLjXuoY2EQZ3B84c9sPCKWcdQR7USHVQk9Zt4dM8tD1MGJxcLo4VMCpL8R4pjUc4YWLmEHzijJ6JKaoKL",
  "key25": "kPF5VFKZAuYGic2kEGTvw5y3HFhqP2dHJqCSW9JVSNowES2cfTktG44MYWcUhra24dNMqR1gNm8UPPq9JnKw9Po",
  "key26": "3p4N8ykJwbBWJAepWHe9g729cKuH9C6gjTcTLasDUp8tBdrG7P8uuqdCq244TvwCrtzCBqyxSUajt6EJi99BCivq",
  "key27": "3zuUPcDWTpT6bTitQrA7N7Kifm2My9qR5SfFqqZktpjLzkK9LLLLyo6SwZucjEy4DnqQM1KF9UJVxvoHnvxtCFES",
  "key28": "5Kha4v2jkhyutrwmaDzpm29cVVbncPKNnzqGKvtekdEKiEEAzatnz9H1cMNQoWyh1tDEfCb6SjiXsGC2UGx14kXP"
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

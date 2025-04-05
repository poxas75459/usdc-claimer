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
    "3rq58hfm2UX4bD5LTEfTpxdmif2Z93rSG7S3n7nTxuNKg2xLawRLG43hqhyLawBLH79rpfGoKRFd7YwoPeJJy1rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37krxVZaFeXYtwJcb4BGTLWvH1dx8TtX3kFodLWNCC2GZsuPaaBwbe8Rgbd8xyE9cibRDSTfGDCR6TakdzdtCnFH",
  "key1": "HFSDFAHpqmDdzv2samTZD1paXKQAsgumZutaXLUKYRqQ6WENW7e9MJcu2cMfMQjK9SMYZDA5xkvupTLiem6sJpb",
  "key2": "4Kn7qY5reeYKxHDMEgoWUqvEmLQKyJVj2b4dGuJZ7zN1749eUXHMR7Ai9fAE3SitcZWdrYLUCa2TNSCEF9m3mhm8",
  "key3": "5KVBYma4vxwcTAZ14ccaNqDsjzg8tHnwmRkUozAed7rntaBgTE3rNAndjmXaqZU5C4Xg4uYQZjeshRUH59wUty3N",
  "key4": "46mCKX1vMxvtUBv3zedNZUSn1BwdWvypyHfhkqhaKyBifFz9DA9Kcr2ZxxVNTGDT31D1Nxi4KebzB6bGGW7Fn4n1",
  "key5": "32TRNPF4VhGj3qRyExCKHS5gb4Qhng1h6Ga8FUsrc1U13XEEUncU8asTKyK34qws5aw1sXN3Yk2gHLVshWXo87HC",
  "key6": "2ao15U1Ethks4KggZuwiFGQizEi8U5fhRVPHT7DXtL45NmWzpBs3tPt74BfSQtj2NquMAoSNBHvfcoFnvLFDUpwc",
  "key7": "4fRZYR1APD2jxXvpjxdz5TYgvC8L5bnWaM3iZqXe2XWhgy3R8qd7A15GWkGGtYEcMHfcqxGQVWJFTSwHKA5uYZLf",
  "key8": "4oh5kAsFtQUBdKvHRtvDCeD1XUwdX422QxrTpc5hn4u3iSHKDz3faMnUJWtAJDucBN3tJjJ8kNH7AwpW87fX7bC4",
  "key9": "3sd2BfTnrSWTykbLgkgGR4hweRnTRY3vAaayTzs3cJrymyxSwP3anjaWLBzVME7Qoc6WJJU1FyTdYSZAwN3xSmXA",
  "key10": "3DJhqyrzvL3TsD9HCjwYzLjrUUpyJgJYyqhsAHGhqiZtpjUDG72BJdJewe2VNVfErqSAcR6ugJMwGwfM3tcfS1M",
  "key11": "4cRGEEUap1CP2w27EhfAa7fLej2EeV2FoNoyyHE2YJaoVCqiJj8MAhEPw4s4CMPJQKHEu2bzpwFmJnLE48ZwU15o",
  "key12": "5swp4ZsFSTVEng3APjaQnEZSL1Q31hQ2GGBYUd852PEwsBG5tehAYpKAJbzwzEBujGwVLh2D3LmQ2oVvy1x9ZmUd",
  "key13": "2CGHZ78RRjA8MfdGE3A3yHkmH9u8PmvwpikNJQVbvK4ovewa9LyjmzHiU7TD4a4JrVSxZfQyZHxWUC281qK3gxH4",
  "key14": "2rGDCWVLSrqqMvjxQ6Db8Gc1nVVku2cEZcmy7AmUGWGErsdnbT4kMS86mgWJ7DCcfu1mASjctyYebWg9r36SQtia",
  "key15": "3fgcambs54iRuy4FGJ54v8EbaXzJ3YCiTFG7awbLYwaGTiBmJ5GardU7pEQHt1nJK7Wjk9TkfFHgvgX57SMLxctQ",
  "key16": "2vWmxGZtji4FXvmv84zqRkryiwmyqhAB133EF2wyiYy9zyvibm4kPzptdzmmF3qsJ28CzwvxigjBFKwrg8VurvGm",
  "key17": "5cx7fcwT4W7fThpq5YAMtSDo7eqAtw2MLCjdzgbczX49vBeTxhDnmCM9tXWEXdgVEAr6tfWXSLK7Q835y7PknUXi",
  "key18": "5gWFsKwkfFJWaaagSTsj6RUBPStBkabn1cWCH6FJaemhBAv9eE2xGbBtt9ozMiwrUTLrFuj1WwHt93dUzcwKDnGL",
  "key19": "5nXD7RniH2BimQsUmjwA5QARcjdYqka3MzmKU5QdKnk5vpC5Lb6Scm94pKZvRVAZzHJ2iyX8s9PjEK4zkyByzUHf",
  "key20": "5TenvRG8UTGYJD3FE1CDx84yNLtErSUZUUFomL4xbyW32CqssGGPesMzh1NnRswZUpikZQveUddfXKq1T6CzqAdj",
  "key21": "2jWh87PhijxyCLjSygB92cUaC9Zaz4ZR83oH5AyMSv9fUakrYMXYEVXbdG69YGL1uftM4rsYUCwonQLGUUZ3813a",
  "key22": "C4pdA1Yn3DNcKuZcfW9scNnBxS9PWTkFgstFuW7SGtoGFXzESYfTAAeKpZBNAe2FXju3Qr4BYEkzLi2AWMgj65G",
  "key23": "5zV3kWq4CcauxDhCNdeczAiV4oXrmSZWgmFJSzknaBmCpu2szS2gjC8frBtD7YC8whvFSgsa88LKsj74hp2Ug7VL",
  "key24": "3zQQdCRLfyiGoFmgMH3vMZwkesazdyFGfAzTLAhTPF6f5LNQZXiQMWmFhgEKkCvTCBUsZ5KpJK9x1hJGn6sX7BFw",
  "key25": "216AvpEgTcycnuZWpPosiA2QYygPS4JPQZg43MnDBGDsSU3hmxbJ7BzYn2Az9BXET34dPcfaiqsiUK7xsxY1rD7r",
  "key26": "6129bXTahZ9YN5Bk99vAvXKEexe7ugoSJzDwJQRiTUhr22kUYHbRMqxbnheLnPrPcz3jjx9etfB9W3gxdvPQUnvy",
  "key27": "64JyBigwn9gbeiveawnevU3d9TqyVxTPQpadPqhNDeXGMPZPFkKYBHM18x7rRCCBvFFQj3pgBdURftGPWuQZQTui",
  "key28": "3RTyYR1PcgD2tSmEW2jFSoNxkpap2mwY5SUM1p1rTBG853EMXvryQCuSo3VuNns8hC2cUYvkZQDVqozvAQjnDKML",
  "key29": "2XXkvZ7Tu1HFdtpuqTFuvaP2jkVyxsmzBioZVviPp8zy7rYDvTxAnzeK4wSoWXUucu6uB8ptSs234yXu3LijgAsX"
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

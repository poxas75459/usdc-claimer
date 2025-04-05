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
    "3PHgC4uBtJGDCVwgoF23AFveH6mCsED7hBYzfmNx3zeeXoL95fHBwK5y1LUDSswew1WYvUeBYkz4i4bWp2WZjNiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3auFdmcsFGLaRx1cYpxtA5uJMGzDgyqPCmi1gFTzLy5P64fZRLB1anJLyc9G8wj4KVVrDoJDZnHuE7GsXfyrrNcx",
  "key1": "3bF36ZqkfRz7AghgCU6sfwhep658dxLBPz9s5oNbCFWLNeAih8SLjQgVYTjX3BBjRok3wKyAz3SWQ7tMZ8g8nHe5",
  "key2": "WZcnVcdHKk2TJGFxGnBSeqPFpVf9W56PmXftwY3KWKf11rSBXFnXJS6W12PXSd5J3dDHLSFZ1RNyb8saWgZvc8h",
  "key3": "5TMTLKGzZrWhQHh5Kiv4SXUH8uP5qDccyKaaCmuh9vBpJk43y2DPf8NSJKE8USiXRC2iJZXBoCd5dn65qpzNJDdx",
  "key4": "4SaRG4weds4QMNH1UHbUtrqhy5Ag3f3m8NHcuU22BsbcmTUpTzy64TNgzCuqxihaGEH8yfnZ4rLDeaif1ha4Y4c9",
  "key5": "2J3mMyTKWR5UMi5HakWaUB4QYdYSi9DqWJDaTLTqpNM7S5Lg6qfYgpm7ndDXqBnsSvhT75WCn9HJPUoGuYNXx2W4",
  "key6": "2wtVm6b2G4SEWnaHGJHGy4Mm3JPsTaqMCCPXFMZHpjRnvZQxaiKqFapttFaGvRnELSjUAJ8ZWT17wT5t43u4Sufu",
  "key7": "2SKTXNpfPGHCUrnvpDvgcbAS1JZuVUEhitszygDmAzEXj7j6SQ5P2A1ec2hwTDKDitvpRgravR4vZ24kVeHJyWUr",
  "key8": "4akuiXEfypmFGEFfGE2AnVD5SsdLajhHGwjpDR3BZmvj2RyQ4o8UeYHn1912z8m4ebRSmRGotavbAtit1S4pyRZt",
  "key9": "5QCFuvxv55qywvp8n5QivQ8L84G7vqCfpWC8sRgcsiS9yAHALvd1Tr6wBcWQndZHJNUyqBJPq7ipurEf6aSiqKz",
  "key10": "5MyfsbyPZjZpz6DJetZfM4Kjmk7tddGiiDrM6dYgqGgVGN3tUkqnNGhMWGAxRxeEUjZsgC8jkLtuYPQzK9VEvLWL",
  "key11": "5NN9Y3WpUjGBTS1SFHbtVuKCc6Mb8wFc7ALWDXBVAAquaiZ81wFYnn3HvRM9N5qKwrTY7vCc5qBgqunQ6gwjAcMT",
  "key12": "5XAM7tEroi5QYRZYfi53q3AuqdgPDwHs6T4FFnZ72aqkVzMV46jRvTkhzgMVhLCPeNZZxJEW5etorsFzq1EVzngq",
  "key13": "4MbQbJGnD7HF38HpQWk45G9WnJWNvo7vvabcp1PTdZkiPC2L8GUAD6UHGR7FhPqy5nsq8AjDS6okkRP48Ukb5Z56",
  "key14": "2LYUiM2cpvKxikPnB8hkmqDY279KbffVL55drRj2qRK9xd2dr6erUaC9NGzsjSjVWQeZpz3WAcD6gnk8TPttJzJc",
  "key15": "2qbD6Web8wPoRVkamaiHwznuonzcqskJZhxTQpfqdSw2zt3nxRUnwvBkrppBmFfxpveCKLaJ111j8Pk8wxfymDys",
  "key16": "4GWpfXrH8XUnBBZpmHiytkXGuRCHZybFZ8g1GjLKwdscDmJ9i2W3HHzej26BcgiG8RwbYRrwTmt4hbmvyrRspEhm",
  "key17": "2qPnQYLX2JBskhQgzCpAsNhm7saTTNRhoo4qHoAYbAJFa57zf9sQFGzLvbdBrca2XK84pfu9NxEcRsUaaECcanDD",
  "key18": "3Y8ivZJ78NAMpv9nGehzBDoijaBNJfFSQCYBd3JJMg5zM7mGx75ykXbRpmMgLVFU2gF1gCED7je6etPsgdADs2RW",
  "key19": "4cq86FYSYeHr4UyaUDcSzL6AgnvWQRtn2GvmRDokSogwRQbWTyXE1rvHjDac2xLpShkLpd8UDyDBQWQXHMRmwhZF",
  "key20": "3b8bnqfoE8k7qGuUaVrtqkLEeMMz1oVZccsJAJVmb5Cmav9PZDE3Yjs772L1i7wiDSZoukMwfaYxzrhWwDu5f67o",
  "key21": "4i9xTgw8VtGzYgoGyf75M7bdao8Dofxz5jed1PMtrCCEbkB7Ki3fY8Vh9TV5wQW1SN38X3J2vzN1d7439WmZUBb4",
  "key22": "5EgwGk6B6PkDgM4hcyXTP3PRScXTwr7nT8CC5ApgjKiVpAQTic8HisjZ42EjMyhzh1tm3f6L26pP2prXnXj9ZeuU",
  "key23": "32CL9a2cgjPy8tYfDcaebVy62Liv3doVJPVUirvHGqUg23endtxk8SQ3eno131yiEAu8E6TsUkGaDeWwjhkvQ9TE",
  "key24": "2XqiunhbouXi5mwujYrcp7xtzrqgyv76FpWxjskhWCkPTJzwFmiaPwPDddMeLBUfkBsqmXnyKtzWMNRPMYNzLjr9",
  "key25": "58bp8niUQTby58RdNjUMWExBYb24zLDBzxdk1BKWDatL252iSKHf7Kvbz7EwCQeaXJFviEgue2WdvPa47is2KcwY",
  "key26": "4NGGHRFWsratDAe4ZfQQhoBhRHEj3HH9k93krU33zws7qiWW498ZX22kywXaQgJ99joF2h8S3rhraeDTbtmwF4Bx",
  "key27": "3w77DRHcUGrvNj9iFRvvHcXWpi4s2jK22mzuQB2Ptai6ENuQeGbwRGEa4z1bsTTo5UUCtGupDrncvnJAJhwuwEiy",
  "key28": "2LjanD4Ww5PmtQxT2LB5RERg43yQbq5XThrBRUedAcVT2iYfLaA1kpR6wP5UZtQtqVhGeuNwHxDrbqNKYRLubmBT",
  "key29": "qguDEcih4CMCXUEXoSWhUPHTx6saoHAJaiwzXx97qpjg2htaKJNpwZnX3BVc2Xcgu5s5XhbkiMhgW8HCwUhrz6U"
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

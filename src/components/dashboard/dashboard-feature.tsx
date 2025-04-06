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
    "2K1Lu33bLYnDAjuEzWEsa98vBkDFx2NK3MahMMgpbwQH8CWPQP6gVpLVGfSSS6pfPukdJ2ZBV5HKpFZWBwgupvef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w9FVpfVNfwcGMK9CfNZyypP4x2shbKcSB1KpBnKCS43gRstcu7gJAYE7CUXiw4rkZDJ2GZ8PirRtq6kf6CeSgNE",
  "key1": "5GbUkr791CtSEJb4c6T7f8LYHdxPWHXJPrboc76mBsa62eiuCrdSktpuKVaJfmQ9E4sryYirWJnDJBZZ92C3ZmA7",
  "key2": "4T12QWtZEkK8ivrsfiaTxojucTrMbf7XUqa7Uv4BRCSZxACXFB62zymoHTCCxq7U4XMvDeyCQBPgn4tjJ4nSsw6f",
  "key3": "3TLfNZDGWCwyyRrZsrxmkvWx1Cr76k6KvKE1cP454VUx6nKwdN7qhY3ap6VRKhyxDwPh3VdekHCBkH1AZPrrM9ic",
  "key4": "5xQhAsiYjHGvZ281ZrQRoH1NWRzN1JUf7By9hemFRUURAhAhUeJcVwr6CpycXPYxMcKNnwPis7bDNp8edtYba2qG",
  "key5": "4y7uBdZK5Tf7voYCKzcARmWey5BkBxA3dgWKKafng1kHMsUNU3VErm9MN2Sv78S9YUmQDe1dZoxw9hJA4ciAxXM",
  "key6": "5ZkpxHX5PcL9NoYNPYXCYhzBX8PKXjRR2G2ZHAj8bRjUCRKgqfdaTKDft45uoTbywfA4ayxJeLEgfSPfaZgzo2uF",
  "key7": "4HDBaVd52VAzKG7DdZErb5k6EGvGD1cBAozHz6UhZgYZUvMme11tDM4e5r1XMcPCmRuvnrnA63pUxuLQ7WJpCD7K",
  "key8": "4kNnjgJTxB1xmNrB8fdfFwCiusJeBsdnEbgU66A6mPBwJBe2uhJgysMEGvLRUMRxDRDGmxSa2Zv5Hs5rPdMu2Xdd",
  "key9": "xkKbLV1TVC2Vp7U5iRjG9pEiM8UYcyQzBPch2E6aYMSoGjg3JLum6D43cAxMMB79tWuhPgiiZdNDipgCNtzgcRi",
  "key10": "2MZ5pSM7BHUK8G6cfLc7QAJ1BP3vJQcXXuMJ8XdHzWMqd9oUB4bFGYsUPk9G7UQMEgZWtq9d49zAAvVppSNpQ5H1",
  "key11": "65nRqPq3kWXtCAyZaKVVx1vX6XiPnBNcEafs7boLWe7RRAxcT1x4Pwq66iyt5PRroFeGsX3pme1r3epTmHvPsL2k",
  "key12": "LDYX27ci1QVVzKzq7pTKfBQwvfD95UjNfvZn1u6TkCs5mRs1LFrEDneeG38dc6LobH8v3CszmDsx6M99ZqGJcrb",
  "key13": "TUFBXVyffByHBMV8dWJb8pMjBsJsp2DyvvYWULJY76D7izXATXbumETRPWXrnipfd6wdsA55MijS4HYTujJUs4R",
  "key14": "3kKLFVfzztUgpGNh5W5mHV2PefhdjJxwHiDEKDZ5vrvHZAdK3qozCcAC4A78KoJ6TAjQrVTtVkAiiLAWzGWVHBtU",
  "key15": "26R1mXv3m1Meh2A2PUVaXLfx7AtabJrxfaW4jXpMbw8NPBG2bMGCLk3tbBvnVvFq14wUuCJThznsW6SPNqfhmt6u",
  "key16": "52MRPq1KsZq7MRgvDX8eNi8RVigz8x8PGzhfx9UN7NbXqWHx9XeRfBQMU65fnWR41SnREmVoxr4qR2hH7xo7CsWv",
  "key17": "5vMoWe1Rs5BD2SQvLr9Vbf13SQ1nUCRTMb3JuxfDuWTKTjm9R4KcaGzAZWTb5Fcr7wH63Lfjpix3aYBBNkZTFSKc",
  "key18": "2TBSJpN69vi5fRD6CcWbBsuHLeP1hM3kcMeW3X8R7HwBfPaYXmRXwqG2pR3VGS2nCXeCbnTextjm7XEomwVWcUe3",
  "key19": "2t3VrJnbXEnFkbMcPnijtA2muqtZcebV7fYXWGqkCajAQqe4g6UVX4z8YfU5eXHechRQsoM4U8pkVtPCotWF1NSd",
  "key20": "2yz8thFoYB5b5pSjCdzoTxNVh99p1nRZ6GdRhGZ3YCKmD94otB5U98XxtqihXCC2MUUR8q2oCAL184tKGMuMKgAr",
  "key21": "39qtUewmD1X3ai8DbQ1ubvzscWgi4FbRVpSituWzhjcjZ99V59zUHcotVkFKNeMjjHXv9CtFTARjBP2Jkm69Ym6q",
  "key22": "4eNiKNFi2hS9nficp3ioAQSkZpcoALzYDLDW5JsDX4RE23PTrWSLig4xPVTBLjxge6njQAu7BbkhzKKXjTTsLHZ8",
  "key23": "3eeTwboyPBKUCHoGGxYtXetycvMrkTEfzqD3R9y2VRh1YbNma6AQnuVFHJhu3rvHXTyYTB1pGfucYpA7UR7Ec36A",
  "key24": "4K3tADChdkNWL2zxANVEfkv5weaWZcnhaKbKWe6ojdiifVagE8TrojZ1RXMUgX9UqtpNH6aiC15a1MJfyyJywzbP",
  "key25": "3L4HzorgChZWHS95THwHxgaW6DNVyumEYKsn45AUg3uwnmdXAaV1tyRC6r72gTLJ9q6efvjVyLMoiBWjtJ3UQCFX",
  "key26": "3p79KrdEwdwux5dphJ3pM2rFYfGjnQUEd55UkkrkH5qEMvRMFWfVHmRa3Hee1w2TMEGNyj19jWJbrwz8afZ7svnE",
  "key27": "3hg7o1KVWv2o8VujymE5QdK9SvKMHd6EjHPWPBXX5ja8NbenTgEeG4ZnPErbv3Tqzdp41RxwhEMWU5ALzjxBfj8N",
  "key28": "24aMCNedgveCTNe7JGV2hMFY5LkUsinjAmsu699j2HskagTu4Qqxy7emKpjE97KA9rKSJ87nND3A1oPRFQg1BtvQ"
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

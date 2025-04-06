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
    "4A1YCEw1gte5Nm2cB3P2LbEgVKopksn3cosV8JfvjyFVPqR5mNrn7tnZCiDB4VN8PteHX3SmmNBptn8aceye1HJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dBJDSWNM2FMvonk5hWNGAyNeVpkuY4NRDP2kM9T1pp4ssSrkciaUQ3ihrzhm9kBah88BH9trgjsMiJrfhky2cBj",
  "key1": "4otZJ5gFvFA2UmGM7dTSpXwZSoMU21GM38UV2oxUsesZQEsSDaBwifHjm4h3mzRjDihpzQmLCdkJpYKN3A2bUPdj",
  "key2": "cvubTAXWAYtcmbAVqDD5uLKc7RiCZxeyFhWew9MZY5pJPbjoy9Pc5CeVqyKfgZQQ3qXVNZRA2Uvw2RN76GKXPXe",
  "key3": "2VNUutDbwjMzXh7pNx5MTLka48Eeb337sjjJxXLtEa737hhFNPf5oNpo7hmPmc6VZKpwF4SZp21ZU6HdJkoK38dq",
  "key4": "qYYZJ8pNyLFKzbyiBEdhkQHvi3KDVpr9DkhSR9AEkLKgqDbVyzoW67By9ovvbutNruTLXWDrY6p8M1ckzQa73uq",
  "key5": "2fJif3ARx8Ttb9iv1LdpcitbnZz8Nbi95beEDXxpHUJKLAPwLHbizfqQEmzEj2f9DGzsNSPu29kX9rRL52P9k5b1",
  "key6": "2htrEPo9nQZqnAroSpkwpu9UDSp1D4UxhEcLKiNBa1qAxake2Hs7vJnP7rGKd7pTFABNZn4grJkiKVoJbAvi1Gjb",
  "key7": "5YRKos5zUx9A2dCTbQ2i1DS7qvA5djMD4G43GmrwAm69tyNbVPduros5yAs4hpQ4nQpdWb3RYgK5oaFb1A8WkaqM",
  "key8": "35H5vW1FYfUZ7qoSVbygcW7JGVtfavvcXtv2GVri7Awn4bqjkb1UCbp5ytrt81v71YX7mUHgf9J9FUgKNVq1zf8L",
  "key9": "5189HnGM5tMwDoPQYGYNPVFGrWm9r296N8KrxUkQSyyYb9ystCtDRYR53TYBJbm3t3EGFse3oVKydQKZ6xYUeXRP",
  "key10": "5QFLDDi7Woeyh2yy2EFRR3WPw6ev3iVx9jkwKDUakr1MFbuyBfMYp3kNeQ2ZsioTzD9xxSH9CzDmAoVWfYfPfzrR",
  "key11": "3CRgz2ysbLr3JsRerPramXuRjAndJijp6Dw9Ttrx3SNjeDDWFMwmWoaChW5Uvri7RZzNjn7oQkGRN6GL2UJbnb17",
  "key12": "3acggQq3zhM4FggY5AoczFHGpKXgV3nnndbfd6xEa1KDzwFHK5DmTKEh3JeHKfkD4ZXXc6KqTqKa4ozaraGebC9L",
  "key13": "xWBMDaMyApVTCSFRxrY84k2vn78aWPjpipJ8aHedAuJz5u5nCzhHeR6VcqFKnTL5rZoooPrUEMiu1pQLVRej5ww",
  "key14": "pcZDUCe3mEm9ue9d5pr1T83Rxrj1F5i2xh5XNfr8Zi59StVs6fVPSEuGuAXoiZqCLS6A4MSgrWJMN7pwR6wkV8f",
  "key15": "5joCNZ9qbqLwKqxsScbxzXj9Rz7VTxCziSMVgnE8Gv9hXtDnxz1pXQ5y2N5KWT3XnSRAdwCw6bZDYScmRPMwkyzA",
  "key16": "3HpLAzRHCWg6CksXnTkdRcq4mFiTqpj6YmXkUagHy78gv8teVc8xJioJeNSkWqN9YP1eHEEkWohod5tE9kp6wSRq",
  "key17": "3viqPCmgnaVwGjfvBpSRVNycSLvey7LfyWWKCjjVpVhnwxcxvSgqAxAV3HgfNMHd9dbeb6voe1eWfwbnjeHaa4yi",
  "key18": "4yudtsiEwqusaa399oT7i9zCkqv6DDtuqjUFebfJTq6qUNQdBw1MLu1bWawTmgKEQTHdTVWf7Z8jDqhwCUZPDfeQ",
  "key19": "5x35KApnfLpGMfkYSNT9T1p4zWPmTBaVr1ENRoKt1KApTNTWoqKDde9xjt95ndAAVcpHMxquZtobJD4Xg9XMJ659",
  "key20": "5RtCeHPsLrfhukNPU3kB9Ktfs5Fqskqp9FV9V6HFoh8G19oFR6eAEMY1AuGPu7AUuMEw1zSb58gcrVLncqftwMsD",
  "key21": "4NzAroETFtfpa3t5pDuyismdJ98UywWndH89paj8SeYYUnD8duTbB2yxoTsy8GRzc94L1M3A7kMGQkNdcrxigRC",
  "key22": "3P61ZvkYoZEMueeRSiqbzRjdVSMk8CQR1PdcNVFdFXoaVofNspZaVHy6toJgto2qsHMY8Mf2ffyf9umpevDwqsaP",
  "key23": "2ZvMD1mgn45fGYrjpMCjXdFsB4eHcpVfGar8rBKk661ZYsbYtXqzFyZKsBh8WksR4HL68QBDyPocFfeDrh2rAxjJ",
  "key24": "5h8nrRDkvYW222AC8SFSgaQj6rvTzexe72uvqqPRBV4ujjjYfYqu1hCTVYJDaLL67XUu1pPfWG3Nazov3u8M3Skc",
  "key25": "24hmNYSQpELCEKziGCEvgVuWiDXTriTa1bHTPQ4P44x5mD1Kfxxdr6oVnkYxamHdiSiV7LxVQrNZK1ZStk9c1kwk",
  "key26": "4UAz5xXm1ivy76kjbgAY3go8xtdnidGTwR2LjUDJLHEpBKKbKZJgudq5Z2gRdYgbhKZpnGDbC6nx7vFoCJDzwd6v",
  "key27": "33EvipfNioJyMLRSovAd5dV3dN9ZvMXSJdckqYmLBifdsuWWKN3KoNTrYZCqWATJpxZm9KN4APK5yct9Z5CAsyTS"
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

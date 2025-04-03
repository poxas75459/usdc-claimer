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
    "5UrymCVQSRp34mHsvF4gdsu23ZKGfnhmKSzBTEaoXnMuqpFvRUXZTqLGRgDwn5wN7RdHSQDCg4XK9mRTu63Smsvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VgV3Vk2DiABNTw9kyaerQNAKiccJ5xDuK75yYLUWf4DuVtr6subfzzfxpDCnLTFFENE5jDgvvUgGFRtMZV8ERqt",
  "key1": "29kzo1jckkewSpzCYEFHoo9cM3RHtBhmJUUVAzrBd7Dhg459kaYALoqyC6tP6WDiSdmUuYpPJ5aoLgAWR5C2EQEd",
  "key2": "2gMdzMyaZXnrC6uPrwmNBiuHnp19gre1DKEgzKBsojqdoXa9GfXTqYTeGstUWCWYE7EbVBt5HSSL7oANk69YAsp",
  "key3": "2H4Phfisy7c3e396Ytj6R8Bm1AAYEhJP8uQbkENKWhJVJSC3qDybJHo9KZMWF5R4A4EtQc1CFEAfdFRSX2fKABM8",
  "key4": "4z1GUfM9QJbiyTQvat39mP5bU6sBXshY1HJt49jYNa4NpAMovbCHmnMB6RkJKQMBj18LipYVWFY8aNtn68qVAqqT",
  "key5": "4BbfYj222mkCvVYxnWPb878h88pzfbAj4xiy7XDXFjD2h26pZ6CtJoEvBYNY2E1ekG3iYstAWsNwmSk7T6vaCEcj",
  "key6": "3weNgAMhBF7fLtoFJgCKh5KYrzJHnHGc1qdkiydhdnB3DeCuhvx1AzZxA9sk5DbUoJMBbfKTYnfRrv41RKQkU6Mk",
  "key7": "2GHKWV1KW9gqPhVBexwHMCjACR4cbtdqFtEJ513qDdJ6j9Qc8o2F7QVfarjiGvPEH4m7bTSKhwLBLVKPJ1KyZRug",
  "key8": "3C4qf3FbKvcWgfL4S6zWZkDRpag7QBUH7ibuSRr72XRRo2GKbnmqQ9nLkSjrsNCwsBgZf445ngR3ApFJ3XGyYU2p",
  "key9": "4oybBTcuVhBkzeSbS3N7aUJrfGkPd7WBpd6AHNSXcQk6kBi4TUxyH2exd1o4vMneFBXVzpcVwFUGpypLocTuM5yt",
  "key10": "2LNJj2tsEGP31t7mjtw2EAFWwrg6JzChPSgAUGJ1jAcpdNXVCCrrGr2oTJHHZDPYrciMmL3nVK9R2ihSwYA1Lzmb",
  "key11": "4a6okTZXCQ91toF8yX7XezGUizL46LrTKTVVGJJGaiJsKe5GE3x3zN6JnwBWQ2UdFZ1sRn5wNhXYktwzMJ1SrHEA",
  "key12": "67WJSDFwaqVF4fAhDTKBdvKGrnGTH9rBRyoqE2BSteTcW1sgQQTcTWyE5ELQSrGi8gSFcYL9zW8wk95gHjRRehm",
  "key13": "2cVeVeCyDVTgXFNWmkw6GT9dTvg7VyobB9kSSoDtugTHvRgaM266yCbw9FZMuuvUrNHMiUdgG6LK1x1pXsgVEJXN",
  "key14": "98ut16QZap2xGPDKN4dUJZ1oxNDYBTLTuvZFdhH5Fj1YXuoowvw1mQHcpfXe98LMUx6NxJrTSuLGoGFcp4wQ4ab",
  "key15": "5he1cRpVEqrfonMWEN9py562qc73qM9Q1tQjbziEuMG5FGWjJoYWjZEw2mdokemohF7kzHecvYa2nKGSgCsSS7wf",
  "key16": "3GqnLg3VZGvRCwqWfyX6TdztGyuftf5m173Fiktpo4MkzfFydpWG5UBjZrs4ZwTmvJn1Jvp5tejssSmihnz2N8AK",
  "key17": "2XMKtdYBqXa3mWY4cusyzfTH13HGKjFMFamSZGmxMLRjN9NC3S6dcjNNhAexe5HdpD9gbgKnC3DTHCEPauKkAEu5",
  "key18": "3SDtL6zg73chg1YuTsKzN29kSgb8R2LUGzHd4MjifHSjBdL1Pz9sFHwQ6yBmu5b9qMapqZL8ycewSKo1ERXTKyFh",
  "key19": "4TXQ4F3hd3VK4SMbsMK2zyiYmAVMiU7W6bXqGC9J1Lq2dxwSmyiP69XJhYbuBYHfAdpup8gZgGRsm96BNjuxYMKV",
  "key20": "2q9TNX2EhFdoxoui2gCHK14Z2vpr66mrRRfnP9nD7C4ZCosHkPLvU3TjV8KDsTM1AfDyVLoJxfAbsdSuatcaZe9v",
  "key21": "32rNaFMZe23nHafwZXzyfZLKfTmpqa3Cwbcpq3jDe18NrAjHuAy4irqYhQeWJHHUbMydcJb2bEf1teNWpVaMhhRU",
  "key22": "BQTaKKATLLCMRhDUYMntuBdPY2wuvg7TanGfKr9Ty2szMzVobpechwCghQ66UfPeWigQ1k47dtCzervSokBVh5h",
  "key23": "2TYeZPAjeVgSgZbHkNFbgg8TKyFM2xLKQ7xaAqNrQW3nkNSN2trz2WyBQEJUXu1s4uXXADwELKoBN8pCtHnxbu46",
  "key24": "57oXqkodcmeKJym4bnFKggrtzRCKqAq8oCoj4pKAsopzKQPPq3iMpbpLvL2UaJ4kh4bQyoGhQHqyujca4d7edDTc",
  "key25": "x2qXP5evxmPpeudXkPHLHVvoYTPSfAxAbF5NsbASzynmkkFbn2maogv3DYMHE7JBaDJHdKo9eG57Mirj7mgVYWk",
  "key26": "TiVCERR19qiqocn2RE4bXx8osiwUDo6thT6EXCvD1jgNaTtaKY5mdKDWZdDZufh2C4jfW7bLBtNyohM68zkwbCL",
  "key27": "3bWP4ahorAMtgizobSdoypFEeZpo7YoVy6Go7M1SF3BYXifzMoMkQoiFH15ijiHwnoGB5EG7yTKXEuHWnH8fzCS8",
  "key28": "56fMXvK4PcHBLZEwBUVdWsCQ5PntZLKLY2PxkBchQRzDz2HzFzu3RjBtrezpVqWCJPdUciGAhn6veZAzRymYQhmZ",
  "key29": "4ZgjMdvkMZXqwk3SqFLgMtEJnRdjWkoe7aBS9bvz3srK2jjafDkcf7XD7eTAWqGRXKgVCFxVyGmWbqXYFc2MavkS",
  "key30": "35e8TfKRubJ5k7WFXnjdD8A9oCN3VzZN3UX56byG1PUHExZ6SkYAgphHmcU14DutfsbXHxFrGbKbAZKwWjfS7kmx",
  "key31": "YRh7X1LsXaNSBN4RHnkjZwaedP84WCSJUNiTuak4stLVQCXsCacoTUCkU5QW2Z57gjMSykF47eAAu5WPZiC842M",
  "key32": "2Gf8wfCKjcJcRD3GtzK6aHgKXBqfYRSj6nVy3RXsC3wiFAnXiGqYVcFRiDVyDESQdaAnpqzqJCaHojEXvQ28NTTK",
  "key33": "2StedpQub9rurszfBVHRFAcvrEkgDtqmrxr6ijzuM1Zfyg369aB4Szy22iczaNjKC5BSD3AXdirLqPCNaMxtJBby",
  "key34": "4motUp9nxCJMbiHLtbFJ4WP7EpnrLdt9WrtAApb8R25bySvaY1qWZv1pMbS8xSF4PttCCpA3TWK27cQHq6V2xTS7",
  "key35": "4M4Gfs2TFBGH1Wic9GECvDtCkg5AF6s913xoUigxxyBPLZYi8EqUrPqd4MpX2ZkFmjaf4VJhRibWB4B6VAv43Z5e"
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

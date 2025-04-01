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
    "2kg4DR7QyQeyAEq7tg4tfYbzdYPELpwdJE1Fm568CoLe662fgC58WtXrBq88R94fXqahptS8cziNsaq7Zyjghb8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hxKzMtxSw6CmaAPyQ3P9zRvdntPv6LuSDMocbYvt7MhZaECoBRRfR8iWrpX92s7XjeddBfNLwa9Uz172NcMwgah",
  "key1": "5hrDN9hVmpv6KeS2PcqyChPJAD3pR6YA713ewQqgg1TSmCWWFYnPWBmLijYzPGgaFHD8v7WHvH1z2HoXDnfuSkLp",
  "key2": "2i5JYBJRhMWGytq7WDSEr85UsvCPDvqmWtvRGPedesyQ7dAJHDcg5sET8eGAiqbeyBsCSpj7rc5u9PH5NH3q5FJB",
  "key3": "5mNHFvx4s3gtzUpqaraKpgbW8cPj7znQ5iVo9iVx2jme4JYv9t7xerjdLCMMa211JtWmQLBb5gzqDsHCkJ1RznqS",
  "key4": "4FidcP2wCL2U9njW3sZm5rPtvMMcB3jeVJzdKFjf9PQTK7oG62xvreeGAzmynMHghrZtiWbkXWxFMzxU4Q67JGUZ",
  "key5": "fU67KEsHpeZPS8EyZ4tN1GTAYZYbDspuUkvEFEaSrM1BB54mHnC8fmW7mE6za3umRhPwK7JSmtSMYrDdSbqPcHr",
  "key6": "3TWwa7dDz64At1FdVsupkN4ELncXS2s2QkDo8a1NJtDqnv8XnRFeMYXWyuS23E22n3otHGF1sCTrV5jYg6XvNLXX",
  "key7": "3qWz849GuvoFPrpR4DkUabu7Mxwy9TgwwNNoYU8w6PAniQ1gZH616GzYNptKaqbbDG6MGCyFKFYSFa2V6HXKKAZo",
  "key8": "4yDPyKgU44vjZD59MbTJkYoZK57WRg4UcBWpzemk4WpnrjNMryyAt4rzL9TdFGs5KiQYAELdLiCaNdUUajHVSqeF",
  "key9": "qYro6m1bEzkDxBq36GhjdizY5aZ2wrSFwrNQmDAkiS92HaTy1PcV6eWwAh59p55ZTmS6DgggPXbjvG3zN6DW8d2",
  "key10": "4gsa5WgZ1JMaXDsRTrLjkggTytgEMiqvHTnL9crJfkm1WYGTQJTfDsSqRVTqaCWDfZ1cfy4gMrZDkLPNY4J8bsPS",
  "key11": "2fEXhydQoFoDahDizo1LHLbm8i5CDYdbMGfT2L9ha26Q4ywkb2bjVrN9uNVDoAJGLftk1Jt8Do1Ak6aje3sL3UCj",
  "key12": "3G8TTD74ECBuB8hXQ6dsaXyyyD1w7tdLqUTt7L8p1BEmjk9FrsSY7XqghrRseduh1b9cwkNusR1YARXzEU3YsrpY",
  "key13": "E8VpEKHE2eTWMtf6WvA3KewsdUGj4Jy51bbjXe2PDckZ7EVgbrQcTfv9xYrtqQv4hfL25SaL9Fuag7sFmkCkZSt",
  "key14": "ggWgK2Q2nCep8Ur93Y2uuhV3kAfnkSuM623AKUgwmwP7hi4GFm1keYGcNf4ZbnV7qCDkQjVZTaj19Ee9xsAMW96",
  "key15": "4wnKt78VyfADg95DPRvafctVCGC8ac6Ab3Fwgb3waUiJqbXZJtpqwKThMqE6mXqng3d8GTHcaoCHBTByzPtVZ4Vh",
  "key16": "4MiMBEfhqaxKRXd3MpAezsprAmJ56XPP5XqRxkgjPG4t5NuHfMM2WwQSDGUKNqc1sJjyVxtj8BjNDVi1yRMj1jWX",
  "key17": "2s9uq6HUHUxqjmTRncMKm5jsMYnJTvJDymN7W5wLAnDPNgQ2BeNcQ1CEFKhR82CDaTPezARFFqZ99hwetWW7zKwq",
  "key18": "3ZUhUEQLJGvXtu4hK9X2Kzg7Kc8nEmTBP1dU69kDdyJPgHstM8iDBm2xrjcivfibKmz6bbdSpYfJTDjDVYNBfjdy",
  "key19": "5FkdJXfESdPka5ZvUm4jyF6G1qNSfnQukBCAXn36ByPtvDSvsUH1QX1nchAzNU3bha3hYxqYW1ekjuX87tPBG5nn",
  "key20": "qC71UoYERPooXuuMSr8xmUTxpDWM89cCz2d3oCCSHdofJj1iFepYDZ7LK2dMULd51H71VfBFfEUccBQjhqhPzs3",
  "key21": "2qCaf1uYtmr3LLyhgSMv5SpfCQXJ9pD46Stvpu3E13RvvFnXY7d426PD4AZHoc1PnMmLLCyzukquvQbiRHBDCNRj",
  "key22": "JQWn6qTBXTM1NAgvhXQCDrTu5uc1mXpjwUNU46hxVVQ5NFvHk5xfPUKauA581KSGfPB1T49ZqmabudhTnXgL8K5",
  "key23": "3p7xg1A5YS9mn96SmAEjRBnMQJDWH1mQQuPeNfp2UGPV2qj1ZTHJemQJ23yDqEJ9kcS89oei8mTXX8zoQfPXuGng",
  "key24": "3PoYG5wmveaXgRBMBPhkT9DMNcryicTG7aEBjtMR88TxG9SEu2sXs8oi2noqDyHJaBTxUu7xFUnoK4CH5sLUJ3gS",
  "key25": "5HQtDYq4S1XWHdTJFRvERCV9QpukfANHq4k6MKWxnX9hhfxrQ4pKSivd8xhFxUFk4xYcTHGrDb4Yqi44jhfpzoC6",
  "key26": "4uS5hcqGQru2jF1HqMZZ6zntGLcFJ5B19p4YCW1oG2T1QLXBdFQPajVzoyYjz2UvP6FVSEPvjWMxxR72CNfsbHY4",
  "key27": "3VLRJ3Dxu7uRYDfZXcZHV8GRFXaRPsyZYrtrG3BcxA2ndmUXsba9BZnNXGg3iJRy2bxKWk8KmQ6qWU8G3SEhuHrP",
  "key28": "39sA2zf7Ufxc3hvuyfcf2idkWd8Gt9bunPm1yxVQifZ97nKMvq2mwHUwVDjJHFy4ddxGQy29U1xTBF494YRRN5Hp"
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

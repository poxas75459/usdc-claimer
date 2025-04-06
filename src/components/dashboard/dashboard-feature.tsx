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
    "5dca4yRPg523oFt22ku8ybfqhiJV8CTkYg3cXhDbYsdv21ujZ2mbvUx3uHcUSHz7fq7VrzLQ2x55As2S67qHdqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JEgRGyeXMAvUxEpPnS7KjaQ86srxY5at3yppc4k1HNn5NMvGjRHfmCuZzqnt4ouc8PnFFrytThCCQt56EfvAhS",
  "key1": "4VqVpZxpjXY9H7DxT35pGRom89DiYgJcHnyLc3Cpk5WSQfsPE53pKt698jhGDr1YwpQvxmT1dZUzuYuHzFvRMpU5",
  "key2": "2cBn6WfUm9QPXVZyLcSB8hvyUwnkitnipBv9aYgXwFVfHWrxiHBcgFnG8AnqQsBXqN7sL4acrG3DL3LzZmv6kwmd",
  "key3": "5FXCPVWKzpDqC3qch4JJHVe5wfisA1ruZ17nALswEBWzwMhtZRotB6SzhZ8soA7njhcWPNSi7i3dyPzHsqZJpjrR",
  "key4": "3bcGBtxKThqFdS3riuqWi6eXe3HNekNTUzorZKPSRRrQza51KQPZniL7Wmsk7sEEDEMMyzKN6m299Pacy9C2BBkU",
  "key5": "SMv3GUirsGL3erBpk2Sv5kMcRwWqTth1sKU2RK85MbgvNwz8vvGAHe6H3eJ14x4ZihsGGoudVoXBqQiJEgVQQmQ",
  "key6": "4xDeWHSxpFeg6ManxgifMPQo7yLd277aRrSycyX7CQQCwqFfuhf5oeniCdagTnVGnpZC9XZqt4c115fj6e2Chf4k",
  "key7": "5uCM81jtVjPr5tyvHCc6Neiuibi3JJDkjQ2zGcPuFM61thf3dihL46JoEdmDV9DfBn6tdEYQPjT6iZGWSm51EMLA",
  "key8": "3S6sH5cyBsx5mCdthRnHYATJeqot4VSNcUSSdvtMpEMLet6BqkjANBW7J3h1KZghUJ3EiLEqKnp8ddvGPXEF7US4",
  "key9": "4aBb2zpgGTjeCBzA2NigRuWg4E4ASVywdXkrgZ3AukRsfEsCe71vKaaVqQqdqb7mvCcRt56yEnxXkRpBGh1TNpQT",
  "key10": "5h7tjjU8wCF94nxxZvxpC3N4BKpAQaXJJWVpqiAUi3ByGNdXQAr4afzPBc2jnkSesEPvp2Au67u3mB3Hj5unVQ5o",
  "key11": "2YrdwFgiFVLFTpcMcJXrBnYUnDnVKHhm49grDoa1bBAXzmvWnkYpK5WjijVx8dNkBshNaWdeL8ZsfurLsesz5ng",
  "key12": "34qrSJKM7uNyokp2qqw7HDnZ29rUqtr1YHzsfbTjQs7m2FLBewmuqf6a4REwSUFFeAUQaPTsSuSa2K9bW88Fq5Uw",
  "key13": "2WFsD36J38wH6BMPfZKHScycbjpu7CBKrVWhGJc3SLVtqpaxXuBGCL1y5LWTz2vqLuYuHHuxB8mqV1WTLN9yRsJD",
  "key14": "Wnsh2iNTgfwTUEcS6Ue1PPE96uooFxcXccxbx16VQqhweDvgTefbrKACVRTW42ZCneddwCDHuPLAYQ7AmUiTDri",
  "key15": "3jrxC7fcdUcWvSaUXbi2eu8mgPFiicbvxkzXvDdXxGWVdqDCSay3RkqtA76UFzjtwGDT4t7tLn23nnVYDMMpieb7",
  "key16": "5Mh49cexbyNfebwLhTYWpAqHqZ38bHLJ2yF1uuGtxshVt7kEG4iQ4faa95wnqp7GLAtSWdUQhjqtAL1tZVLWGdF3",
  "key17": "Qz26DaErGgbGPWPM1kzqbfUPeLdvGTt9dHgttfT2DbhrtrMtbFYcx6pYL2DSeiQ6KjrUwryettCsZypSDnKHNEh",
  "key18": "2dTSiWTrakePYmV3jMBdhrgBALKMaqRzboPfhEZnMfKUkN4NhptB3dXTtCcvwgY9vekfVSHYCXFAmBP3yB4dYMDT",
  "key19": "5ER4gwDW8AtmrQoJh3q7iZkocT5Guui6gMUHqwSpyBfRYY15XbzjtyJjT7catmvn1RQAL8cRVFrxabG4ZKXM9ACQ",
  "key20": "4wRhevFHggiRjonjGqbwBJJyMixbp44AD4n8HySgnbBPAMnFErMudB6XPU7rwCqWmPp23qejQK999jDptJeYR5S4",
  "key21": "5wMWTiUhP4NWk9ZzG8ufdfRj8rFXdcbYKUJHFQWPzwfAR9xpSSxoJXABP6NhrpHnUdX6rDvQkHbpXaJpRx6HBz69",
  "key22": "SiCjeDqufiwQGHhv2zYVUGjVVkCPqKJSorY28taJX8JkZGBc35xhtq69V84v9DTjELL8FnrrXt9CjMi9M8b4UV4",
  "key23": "W1Y4ZTFXnyDQ4ZmVehptazGdjYagZfDFcKHtdpiVWqt2tcjExt44gEiJEox8XaqK6yxdn7wMCgGtGiLssyNve9M",
  "key24": "3BRcaz6YLRALcjdtq8XXMSExcCXtNgxhuz59L7J1J3K6zaSnWk6tEaLRNmcBfFi76hpcqNC7tk6pEhW5BqRnQXsF"
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

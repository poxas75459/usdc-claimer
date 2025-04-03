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
    "4e4i3UKggVvxN6k8a9WUt5HA4J4oLThuHGsGM2XQm6gKzkiTMX3fRjcjCEBNufhrq3deG9w7Gt9u1aVsEZ35UBvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36d5fxZ2BZnr6AqtaLv5PqaoutV6Xfm5zD26rajV7d4i4GRC5XWHTn148R96SBC7BaPoe1G8DqoXrH53SUfNC6Mo",
  "key1": "33jugPnAwx5hMb3NzWXAtro1YFymmYE928deJoMmSamSzu5sv4z76oBRgzdEnxz3WPrySqyRqG6CbsDseHpB1pWf",
  "key2": "T43TAxRYqMRCNKtZrqdMDR5PCMV18AFmXQdbT1npRhe7D3c8bYMZDuqfMMsNpjV5aPyabRSRCP7miMZw9QqxP62",
  "key3": "r9ofUCoLrZqpn2khwtjh3T7Fy2L1WABkFBFMrx5oj87GH37KY6RyTjdZ7YjeexhyHUKeVJQ2kkw8THTQxvR5d7h",
  "key4": "4eycaGh9BFLQR5jWaMqaK2xpSFdxZXXCGezKqFRy7WCWXYs776NBR74PvFLwrL1x8Zs7bfKopg9MPwzTDkEMhPrS",
  "key5": "5ApsiEgSCwLGG31KqQqWJUdSb79dCEHpcLnk93ZSG2kcu26u5WMaNKveHrcnbnxEjLUxYzaGLhikLm3CPnXSXV8v",
  "key6": "4tWG4FnUGMySecS2KMpAgYDHyamA48Mag6TXgYUHia2ruByJGju1eQ5DCJeZ2SW1NVm735JetvSJ7SaxYLFF6Zf7",
  "key7": "3WwxCCAgaEK3q3djPeU9p8czHtq1s1EqXAjT4qmXs3TU5joHDpjBYSxkchsLf6sjX7gKVbkDZmx6Ufx3nhEHoAVT",
  "key8": "471isHKT2VwDHLk3152krNG74ddnZJhotCn86MvfW59sfbZMeLjVVkjkEPpM9JFKUkj9GxqxBcdTYz2V3ai4twD8",
  "key9": "B8sTnEqJbGd3oD5UEpwBFaT31wcRYybg7yZqZAG8G9sqz2Az9SLuAydJFAz6HjNikT84ak8dD2EypL5RZYTELeW",
  "key10": "3dEVqTZuWnD5fxfn5UeUe1PxrwLwb9RSbdjSgdVUsiGuX9pyv9ve5kMRKZzLieEykBwn9JGzHj7aYne1i2CGBorQ",
  "key11": "4BEUt4XaWh47kCu9f8Ue9oYJN5EywYfiUwFVUc73nCyYrSfFUWKpt75zaMtuGzABb7v43MLzvxNkY8azAuEQB5FC",
  "key12": "56P3KKKUfJNcGB81Hcx86PD4M2PEjfTaYyAafCwNAAk4fa8pde31MyU6aF6ExQYJLCsBT2u2oPmyDiXc4bAGmTyT",
  "key13": "2Nz9zkp3dmnaknSTCJLm8xERE8826dcHpJsTmHENyPUNrn6gji6hC4h1AEe8FUPcvDhR6VxamjM6t8bvSn8jNtVP",
  "key14": "4dfZDy6sb5jzMx8Sut1j5p7yhQVG7hRAjNFongj2xdaZtWeK2DfUitvEYorFnf6k5y6NreP3PpgwpEJgM3B9CjrE",
  "key15": "3KTQmwVup8mDbdra1X1fvcF21fXL22osTbVvJdbQGvwmKgoECXXUBhvGHunAPwTEqfSAUKF2mbr9fJmksGc1Fuwc",
  "key16": "6pfe7BwZPYtLxfgtLqM1LmYoN29LHwdYDL2fN1ZwNB4LpGzi2L9bx7hBz6y8w4jMsnSKG2c6RDm4SEkKs2HcLhi",
  "key17": "2zGRuBrXaX1phjyQvWWLP1TcLS4Zzp523yBXNXoNyjWLhYUuZFS9VbSw8BWK2eQG4p6bifWgbQ3rDBemdoFESwrq",
  "key18": "5EriMzAjSpMZKDJYeuSz7dAsp7KGySkVAzQBZx3RaekYF72rKNHLdkYNBT5XRfq2Ayzx5iqtKz9hkgGk69fHTeWV",
  "key19": "urQ4rEaDUuXpoNeG8wuHzrWr9V2FUmE5ty51NKcsALsf1JH6gMB3zXX3RqA8mUCBrZ2JX7NowthKQCGuAs6FKS9",
  "key20": "39pkEJpAF2x3b2wbM4ineu8N4HjqZCKoKR7bCLWKcGVpYgFKd7NS12odHF3dsDpxVNQrGX9WTGud1msXsfc1J125",
  "key21": "2npbLSJ1uHSDVbrRY5MvRa1TQQ3rEXwo7PkaZb5dHz7fo2LCpXyTnssU6NhH2CX6NVkqgTaAqfRQLMatmZfRGE69",
  "key22": "5GvXKSSHx3kzK9bvy9Wn3afykaFG5RkSeGN7ccgUze4m7DLQpr9WejPHiadquWwq69MoQCXNM8gmYya7mRVqmKot",
  "key23": "3nJ8FgmiehmTeEV6Wvg95Co8L3B6wt7EnzUMgdzP4aK53Zww3f5FeBuhrdncKMYjNmVNWsrb2NwMSkJC4YbGvvzi",
  "key24": "3kehXCiGqcvUydBcixh3WpKT6hcc6D4P8YBwBq5hntZYwNXPM8DFbtT9QeUYwuhjd3q6AzQReFmaTJUEnJSp4SX1",
  "key25": "42kdJ6ZAojqbt4LgeYVX1UYWWrByd422vSoZpYqxDv6QYRVA2aswwuWfMFrTKvRJ7NJS7PzTGLWEnCVufscAVqV3",
  "key26": "3EbnzPWC1TfxrQGtP8wvFqTSTFbAjtSE4VxmSXNuUseB3PCndaJF8KCvRp2ygUZFcwWx51PV4N9X6k1yuiQGsmcP",
  "key27": "su9pLhfqoFMZV39dtEor74aD7yFnqHdXEw3B5mh3WJ4qCkyGEXZtj9B3Jwyzm7snjxZjKUosMBcS5sfhsK511QB",
  "key28": "3PEbouuC76JJBbrR4mJLue5EhQHsVeFE2ZVZax1hGQdohktbMZBTbXeQFN5s1L6pw3cg4yHm6wNswfDuzRyRMYqh",
  "key29": "4fTeLfHSJxRPZ8XBSWrVQkJu1X2uSx4CdAHWD1kM2VdUnmCZ6Cy2138P6czvhecqcjDbDdEvuAk1w4FZKRALnfCX",
  "key30": "5xR2J4FqTSDHSLpvonUpfzABNh9vSx6SWnVoMCjgae5wz2PdSJkf7GqtswPEr8rij6B6yVkM4bWQ2r4kiTn2sKmg",
  "key31": "3xP4PsdYHpimnRGuuuSw3JRjwrxMSQvVvxz6XX4A456dEVkhZBbfkVHQRXUUh5AiGMbZF7oGYFggtw8nPEXbZHWW",
  "key32": "5JEFwtWD5y5UfazJVnh5xypqqSX2uVtQdQt4powUFqMySh1hdUXXStPDiXs2CHx55jgQVNXkqap9EV9obwz5iX6w",
  "key33": "32a4bSiatCjKRZ35eo2YbtVCRnrD4bnC6SJaWk95nSLDZZsrPoNrB53VkSeMf2dErfa1yCrToHpC91Tip7RKwEu6",
  "key34": "5zPw6KDdYCTnNVCs866CMvAHJeMBxgj8W5FdcvrPfB37sU2cSERm6UcXumLm3boV1BSewnsybaYdmf5a16nmHBsR",
  "key35": "41C7tcVUMZzBwE1ehxvAaj6ZTZ9MDAEFtdCL1h4csbZ4Vepi9SENE3rq27QF7h3ernS2G8LAq8HZKPHJBy8hA1hp",
  "key36": "PWf4CT6NR1cHvxdwyNKrQFUaveABRdrC9akLGjQWunSXWhCeKioUhzzPyxWd7hPwTZtuF9pTELJXhCh7nFUosUk",
  "key37": "3pK8EnhoHsrpMbJ1vPVyM1HyrVyfmACu67i1U4FZqyftGL5NQ3G7AFUVaqTA8fN5ysASNnPNnyNGkFEqXeMsKtwz",
  "key38": "3PMis7vY9ugHBaB1REfgu6kWbmGez7i9ovA32qHW6foBRFDajainnFEaqoZKgFW6NwbKAWmfpENxyWf9CR8WpVbv",
  "key39": "4H5dzP1k6fd8RcEhqhmrdFNdbkMZXtffz8Mvj9Zg2uggV23P2HxUQmRusdVRLn14T6NCNeMoG1JXeQaV2rsvyZyk",
  "key40": "imGKvd2EdVdtMPhBcRbtFuNkt7uZfLLACQvszAzYcAZ8XXfBxf5UhXc1e4pkeir3opnQNvFjL1dGxXTKAvZdAfb",
  "key41": "37E8Ppio9NVEDr5ukhS2WyqcRZBsdeGMW98WDHbzcSwMvEHCHAgxwfTDKHb1rhdXZ2hWrWCmX2GvVHWhaf6Zdz2Q"
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

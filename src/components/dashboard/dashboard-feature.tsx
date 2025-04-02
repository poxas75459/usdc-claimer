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
    "3DXdebPV8G3W1sn6MWNG46EFb3RfPPrZgn3Xoako2sZAABuTgQ1L8AuSpTnTDcpSZUFSumyywj2Ykj2KUUbVQ8AG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jxnVRbp49BDdUeY4AwbZm6Z1ygV34rzGCMxw89MYXpJ7Tr1EDV9dUSQ6D9kqCXWzMWUxu9c36CSC98t5BjzWwWs",
  "key1": "5V21EvMMoAXEHvzw8RNvo3TfnTgtcLzreb8jHN2NVkeacG2wiEAv6wRAfq4yxFLdteegDinodSY5AAUnWVpk3qK7",
  "key2": "2VDG5rdTSuEL85UCAEPKtRDEJKxdVoCWoXULWwpakNZaJLVrJ8qyZtVktzUcsBBtyQ7xKGEoEd8knQyufi9bVosA",
  "key3": "4tWhRPPtGNnBqA47R6zryXBr7ZYB22JXYmZt3DgFuZjy1TsqdmPara3cnbo7HqszvktMzNYZMgKZDTLLEwiuNQ7e",
  "key4": "3Zd6D5JoBMgypPtwhPEWVaqaFMgJ6s9u36Bz7UzzxEyT81NTMQqnLV2u2yQYpbH7b8YHJnZFFXJFvoZTfGTkniut",
  "key5": "2MxKH9uHeZD5DsvUxHgzGVToxfMAqurL9P7QbxBgmCC1t4Tgmogdq5izSBRCaTzgpsRxaeJbNbfYufxUNpaemZyj",
  "key6": "3EfNYE1TQz7QGVgH5Aivf9GZXm57yUVbHE3qpediYuM1kVxYL4jTvrA6UGyMFH9f2z4J4uY4PCJjpxZ2Wx8b8eR4",
  "key7": "5fP2tSnhYEaxh9sWTS9ss1EhKnBeTjzcsUDPuugYMXh3yznkdazTynnFEMQoPH1u6dFqPNjjjAQskRrtgVChgqRJ",
  "key8": "5BgsNzLfm1NTi1oqHS6w1mHmiZQz4V1P5AVnER1XyPsAqBcA9sSGMn7JwiZothGPWgaZMxUTyuGdZZioSeB1WKut",
  "key9": "3ChUW5f9LiZ8CbHdhokEHdvGRJppxdbna4SFvX5DRdrp1iYYF4ftA5EreP9uqPLyzaSyb4Lud6KmPd3ujyvyCraB",
  "key10": "5q5xV4ucKQVvis44TRT9vFPwDcZty5eKtrZuosU54JPEExBRvqSQNq9fJzM6XrANy94vJDEgbdMqTuSRFRtjFK2",
  "key11": "3DbxBHVR9M5ffzHfHMwB9AxsTY5nHKK3D5evxWgT6Dfwu4g9YHeiw5CmkzxuUDK8zf1232xnH88wfNQAzLx5wBCC",
  "key12": "HY7wK1wLMysT86XivddY8YC9qYW2x6n4qxcuJ8T9FubMd2Dzhv1CyQevrdm3Ba26383e9XPsTyrzMMU7RzTAn7y",
  "key13": "394Ts6C2a8NiCtun1P9Jm9pbpauqWcfiiEPSqtizjjRQCQhnKDgfEPPACN4vnaAPVdDujtcLitCav9wHahaG61Sh",
  "key14": "4pCFhPSiof7YuWbTYu5UgU2caGozEsVsLDZjXSsUzjveoGecgsjJNMX8mLSE6EuJT5NhFxDADk97BsTrURkWJL7q",
  "key15": "5ZcG4mBta8jqUrznBRNHS5DJSZAx4hxLCykXctRjHmpRcVznLFsis1RDD4onxvSWBzb3DsAhb1Ai3RDUz1HrwSdb",
  "key16": "MKK4Gv3VVr7LkQ2DZtyQHree2sBc1JKiamFDFDKHqHkCovoiipavngURAFh8ajeasWUT88SJrLfV3QqPMmQPDFY",
  "key17": "35ViMjqtZp4WpJNYHG2JwLDXG7H5fCdY4xdfAhtDCuvagAtJuBJLJgjs1LCsQdZ9pumtPR5yAKhSX8ByaiWV9NLd",
  "key18": "BGeEvFAhSS8cKwCFSjLHpM2j2J1hbbLYUzdxwLPVCjgPr64uVFMU3L7h5NEYvLo9hbNVHN3KvNjsexmW3XJUgNy",
  "key19": "eae7w6eYMjTSF4EAp2MW4GMFW8tnws7Ecoiw2k7TDe18G9NwhfoH631pvA4BXnnoJ6PqPQvATYyvk2vLrGGFv9q",
  "key20": "NL1wurSVgCzzA2a8fSYa6LTNDnfU7tyNF66ggYddASufTbqG52sexVoUa4spDLTXALXvoUe44NP1WH36Cimt1xU",
  "key21": "2UzW1328rXcTEC3MWHjF7mGoGcDT91ZN6ieT4m7rPcCzRBYrA3HvXvdLG9rcGF89WQqxichZ2nKuR1c39wW1MaYo",
  "key22": "3ePHdn1e1TMrsUuQkszKEmy5mfQQhM23PcuQz2w5aJLfiaEU6CBZws2nx38nZMj85T9o6TW3FRAmAz7hDnpcZxwV",
  "key23": "7AD5aoVWKSiLyFxGBGN88ocEMXXRSLwwiqhDMVZghENyXBuikumsf7jzhHVPz25ctttB2zXoKRsgzge7prUmeZT",
  "key24": "Sgva27MJS8jD7M6qFkreuutcnYpa8bcbEsZe7sgmJxv8EtYRbNoSnhJhTFY5iTPe6JaTm6YuDrbxj1gxn8ci5LY",
  "key25": "jjqwYZDn15ByzVMCtp1p7eqDv7PRM3PkF1P1RxPihZDXam344p63KLHqRqt5FPGfDDPocQpUb9Cq7sJkctyv5tF",
  "key26": "26rhqsYUDrZGs1Q36xWUWLsJD7T1JRteBFPHkk6gNk8yR87QAjNoRmn7q5Dp4emAxKCvrqdx1ggaXfc54Fro9BkU",
  "key27": "iEZp36j8eFWLweRtNpfPiPsFY6xaN1e4d6mbfqqW9YcocukvcoPq3tHV5boephyVuegrKfFg4iVp4MZdTGqnQvZ",
  "key28": "5HV1VSipPmfXeF9zMGfc93tPfKXyhiqtrv7RGVUxiyBXV3Hr2RuiymwTNGFQsaFYRxn7iashhyvwsEaXRmScA8ML",
  "key29": "7TqFB1zwpJT8mYS9xBMcuCcUdCpTk67NNbFRXjRqrwrfqJUGPzfcrpCM59xc4x1xJV6QQNYL8WidzsrEYy94cT6",
  "key30": "2gL9YYtYL2mJZX2FaHHeBECq5Jue2ZFmn5KdVozGxjmMUXbSQTqQ3Xv1TWxfuryapqGdnTvx8Loo25JGW73bZSec",
  "key31": "2WNfNR1eWPnn612oM6AX8JrwtKBW9tRRBaHon27QMFPaj9ZzBCfWpS4q9FW6mVNdZqjuWH8Z1QMnUvT2Tm447g4i",
  "key32": "qFrPP6tYRH5Ad1FeBs3bpbdVD28nxS2LXdmLPH1JgWXmRENSdTjw7smp2gM7G4SLeBXNBnKECDtJTtpuFqXVUyc",
  "key33": "311FGEnspB2RYuHGPgZ5CBpea7Snf6RSrP5fmusDgtGSLZwfX3PQwZxcGC8QMMoPAGWC6fP4jC6hcm2ovbzqXFbH",
  "key34": "5xLmXmX2REYGKqmKuADKzVjjHtSHMFozjXXCrrrD6UQZEeBtjMziZ7Ab2L4vGVPvd1J11EwZqs9TnD86K5zLYUXu",
  "key35": "2svMKS7pdgXbFREeUZ7YqwwDkjVhUyNvtU5hB3RkReXRKgPxKg1hUutZeFqRQxXcfqfTky7vbAGruY4GDfPmUzPR",
  "key36": "3ycXutmLjfvAW1wofuQviF1zFC38CeeWEofDV6JZoeff8yopXbhFzZ97GaRL3TuAj7tzp9R1vn45zfUWuKGMqUKX",
  "key37": "4RrRUZzvb56GAYeGuB31mpa7SC36BrubMxKQW73BJNg4cngDDkh9crH6qqvnpRFZ8azE6YNh6TsxY1TGKKvxYyxW",
  "key38": "GX6fEczGP2TyQHzgQ4czc14XCseHoeKN7mVSuxvyj1hnS9KFdajAzgemMBxmFexq64b2FixJZ5KeEsd6e6Smafo",
  "key39": "2XefX76mcpKf8idTHYoYaKcruvejaxp19vTsJRLKXq2amyhS1MXCjeSYBPr8ywzkUYMU5MS3GSwai91QkomUEgQD"
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

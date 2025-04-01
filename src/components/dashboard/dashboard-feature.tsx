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
    "5NzEMuDnmpGNadNS3J6ddydFXF2u9WKBHj3STnRdvqJPHhmYusbFqeXSm9kXSzGRjBkNytSDoER3SZVTHBTxYcs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTnXrwtNXKL7Y56Kaqvbr6tqKthMnMi2UHg6BLjRfFGg6Fgui6b2cfHv2vynYHd3pPCciURqREL3t9hpg4qZ3iB",
  "key1": "PtMyySesXL8keg61YYTkXko4WTHe1qR1ca3FeS8Eo5ogEM389E6E14VbTpTLU8P9NbJdbydqFkoRYn8AGCxV6rB",
  "key2": "3T5eRErBzZ7BARtkYmVtaByTXeWy6v4F17bohqw2uDovhUQWfuS5qs5hjHX5exwUD8PbumYHw5s1Gs4PRF9hqvYy",
  "key3": "4vrWMZthRXq9Ry9TaixUAQdtjU1E6NdpxNYHx2WMcDBhhjNzrGFUu4uXJB3nA3VAKDCASYVNVrt3tYgpj4M2yGHv",
  "key4": "521DyPa33qjSnAL6zb27uJQMQwtrLs9jBkDcpjJub2Zaa1hEdCHxrQBiAjcfdXEZHYf8t8CnzdAfJpDpAwTvVtBm",
  "key5": "4dXenFnu61DJZqrVnoDw9bKsYLPcBC3ttbhGeXh7hQK8MbkiCwTFN5MvSBZBJkBMtsvTzahEBGuG8hkFDkgBgNci",
  "key6": "2GAJbuMmrkUTvKt4PoMjyHcFRrs6CNdaP4ePCH66XZ3iMztcbrJ3vfwyA3sWnE39FJZPV2U23UGTSVL2hpY9YuzX",
  "key7": "2rYRvXg5v6wZ44ac83zJj6bCkkRH9xfPtGFcAUUb7pcneVnsamsqxMM6Fkp1pijukRroUEeATJqKsRSyfxtAK4M9",
  "key8": "5EEpYSBLmorsp2y3oD4KvCUqxQ3K7L8G2ejggAnqKFW476Kbwt8BGVR2WQFyppmLvu2ca7Xm9ENsbQNRKC8oSKoT",
  "key9": "3fPnNrbjR8DjBFQQF1GYChos13GLf3EpSwvD11DcZWHX7rocjYuvqRYQxuZ7qWPCNBqAaK4h7YGynqfgzjfVG7rC",
  "key10": "5kgvRxFc62TQ1YM3ZMdqwA2t11u5GwurMAq8YBVBudRTA6J1dQk5G7a9gn9JoSWJUD2tk3FxsaWgB8bVrCyddSnJ",
  "key11": "2zJijAAvnUrXbSnq8XHxFxa1eRkWxmCQJKVvSGaze3s17MdNSoYaEsD7G1KbFSfhpi2onyBJajtUocnNys2FfCTP",
  "key12": "3S4rjBQgWPtarxSayeGFFRxn7ShWHmx35MYnRj88CmpZUuwHBbBRY46CCM4TvNK7neYETeoMTAVmfyJMbP7PNsqR",
  "key13": "3N1awC27xh9ckkeTJ4WvnvBEh5zKs4UNSbXbAvQDN1aeHmtPbq9fduRLryY83s5C4ty5ZwGnUUxtiCm9bmUkC8fb",
  "key14": "tt2cRFGYaSE2EeYfk8tfxEC4vmxoXryQPKv22EFbDF4qioFUUCnJX5kQEzgAnuTFpzSGkmyKc41gavqvCGbmCnu",
  "key15": "5UQhmtNztkCgrFvyfnFBqXRrqjUQyFyNn7WJ4wDKFfoWiwcPkvr6DmB2LptQaZ649yrQ3t475uNCkSXHnmRJTdCt",
  "key16": "4HZtUX2mcEJ7zjDn6LChBbNSKYaQ4jF6QpBQJhyXYFgAcy3ncK6gehqK6aNxSdvSfWqCwNioxWeeBonsTf8XnVSR",
  "key17": "5E7ST84Mmaw1u29X3aS7MDnvwvPVwXqe3Kvwx2DPeWdUa8XPa6QnFJpawJ9Tj2rGskYktsc4jth4d8QqAc3YGzWU",
  "key18": "inH5RiKXiLXpXugJUGYaRBmnY9as3C3gT7zS6wdaA4GX2XMD733de2Y6ssgs7uY5kMGRcjmWqgwvtoEDWeASa95",
  "key19": "53wZ6zLB8uRUJFraSvv8J3B84yH7diRJPYH5nywWs8U7pKJjMvxUUjVcgB1AMJdFJMh8qDKTimkMucv9S3eh89dC",
  "key20": "51f5fuy4tRv9jw2sYvaLPGGmbW2VrmpzkAjkNfdgXtD3JKaAgPDQDSsNbjDEMCpVpwRoueu74ThLp5sFpbKx4pRM",
  "key21": "3uvBXSBuewPGeuWNKrRb3jhBPFk7M67eS29MLutpF4usfVgs7HXmsZYYwEkok67HuJEHe44XzeX9XB3dYEc4Axr",
  "key22": "38hQ7mygVySuYjRqTqJoAZYS1LY5Uw3ipX4T6xWZRVgx3g9M3WTZy9Lk4sSQi1REDbkpqDkeVeSCb8K5fTz2Rzia",
  "key23": "37ASASPfcELyxNjjTCQHtkZ8NqsK7tWtEKFrQRD4uDsPowyzD8EVrMyk3jGNGTSSMUywHLwP86RucvvziLZntBub",
  "key24": "NvhmL5eu11ecHy6nVyCqcDZizwNEF9tyVLmccyhwsstTmecCKhuocByVr1EMbe9EeAsqSpyx6r9mzrhCPW4S2U4",
  "key25": "44zA7d5gWXJhE5R3d7ymFAsqKDgf5ChLViiYnHrmk8bSrVZCyvNUwJtBHKw35VM9KYVaz6ibi8vsMTnHKzfQrevs",
  "key26": "66JehM1vs6jvWLjTt7y8zjE9upiqrEnQxjcnhifgJW8ZX7AJUipZ8Wghutt5Qnhvy4uz1VLM2JQF6sDp5KXB5vrf",
  "key27": "3XWSiN4sVpJCfBg9if3uc3pFoTvJk5qQKoyhsQLbrPeGo7n2ZJ1yyYhsZGRjWvucxNzv4c5kTq7QeFkeMER2q5r7",
  "key28": "3WXWw8rZ8s5tjcXNB6vZtymZcS69zbwFG48NhiLpVEAnUTc6Tgd93RbkUxGtVjergryaEtHkN7MuZpwEbaotyjwQ",
  "key29": "5SCPyxNLp4AQCA7o6rUCv1xGL4wMt5ZB92pBbCbu6ax8FFEAqRstEEzrrFBt5j91n2Gf22duhPsKkMhzhNUcK7Jd",
  "key30": "5xoUqkmtgXSd3ZWjQ3t2zeFzCURdw1gkoAqnuxktnc7kSJuoYXrHE66dcaU61mepRxLwF5RRQGvcuCKjhW7pah7w"
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

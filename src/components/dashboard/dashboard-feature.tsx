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
    "52CfQpZJxL8zTs4AzDbZb2sAKtkK3WagrZrs8vWu17W9ABsYwZrb1nwFrL8hSv13xbpsaBpqvJJf9C2QR8ZB6oYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jWqJGV9wTS1sUCDhBk33nfGbRdjiQ58Qpkx7ywrVSHhaNhn6Fbr4BJpxzUyZspm51vNyE3hkEAWozZGo3rGRnWb",
  "key1": "5LQDYZkbcxYdeEBc1TX3VmaGqswncdJxVFHVANY5nk8cLbnykjYEXzDnN2gXpniusco8dRnvtvXrdj5YkecRtLEX",
  "key2": "5xxV4njsn4NZ2ThoSs6EoENkMgBTADCr1U2tXau6WxExX9M3tPQHJY9Fjwgzp8tnqM441nMSuEJUHjN52cGa1rm3",
  "key3": "M1gww1bddBmnwo1WNjEKjY2GvLT3fBmsS2NvUyUzvV4oxg17SaaeT7LQSVSYpomApPrMQjPtGvPagsph9aQbsfL",
  "key4": "43wxikAfp7wJmBsW5Tqfse4X9XdYafYLCT7vPLhwjEPQbXNghgt9FMDQHH8mF7svKmxv2Jk7fdq11nm7kBUJMJqs",
  "key5": "4DMv7getD5p5MCGPX3EyvRuqeqZjmsKkoBED5tyBa93qaW1zsm1tNuVRzHeffnK9KMZja1YK4YX4gBY2ZFeEvnGX",
  "key6": "2CyYbcTM2TadMwQp9thns4CgRXRdC3bCEaJJxaDC7dLauTHzoAjMfjoLMR8mPiqzzKDzgtkW6CtASR4a9vyEQKkg",
  "key7": "5sphKJwJVFXFTEnLDyWqDtgTwYwkvWGFirusLWj3ebdme5JyqJE7z1oVYLZZkUpPix7Z1psWeRVN6AKX89gMyjTY",
  "key8": "5uzZVWTpXgq7SHAHyo2wLdmYp8xvQQ8PWTSt6ucJDNMSXTcbxBk5f75fjsdZv7B9tj2JV5mCeBV2U7E6nNy6U6sR",
  "key9": "353ePr2W3vRE2rHsRdYPDVrq4k5uVdMumaNChmNbq3c2z2rBhXoneNZQEbogrbtGZfCAxVXHkPvPZuyFFmi85xBy",
  "key10": "37v7dfZ7Sa3BU1KSGcobvACANn2uxrby2vbxtVUFAV6Zris8jkfd92snuhb6yj9t2gCEkhTcV5QMLot9XBpBREKP",
  "key11": "58qwrL7BDWLoYWAbEemP9EHdv5iGS5RWPfmEoaLTgrEKznjRkQRbXmUEWJoRvcZDSuuWXkyNqDivUPpA95HZXHCS",
  "key12": "mftcSYo54RLhkZsdz9VNRCEbTn77QJTVkUTYLZakFXxMNgrJwBG22fmPPoBr9vyFvdZAetHjp9h3p1xWKGY7zxS",
  "key13": "478FTiUc5zaeKpVuqTX1XfA9tJ2YDZnXFjKVKyWgLpMsXfLw6N7AmLRMZrCV5xtuY75Zy2ejcFN93VVPmvxMK1rd",
  "key14": "4McNoMwYnnDufUDSGTVw6AciRWMpgXrQkcxXj5bhgWxNSHCMyCt9c7WczXUSakS9WfGZkxk2PNMKwSR5o8baRFe",
  "key15": "4ohAwB3X2ge8xwucTpjFKJCgaPAoBBZviSbeeoowZBMGiZj3MQmRFmaUyxXGPCxWYU4Wkcx6tAeATVvZQkusLmbH",
  "key16": "65xjxnrwGJ23fZ557AqpCgGro3gC8t7rSKjRznRKSYXiHBRm5dw5gptbxj5QGtfr5rJraMVubvuU2J3b9obXYcSs",
  "key17": "3kKkfhZuNqA2VxmjhLU6SjqzK5USktspUcLsahNJVZZVtdSf3FVandmFpUkbxz4sqj54dUTPomSQvoyn4Xi99TQx",
  "key18": "2yCCWQHXhGC5pUgaKsrnMeatGtnoSbNc7EfT1FaVbeyPPBnew7LBJyHjWtLTkCfZKgAuxMCaHesW1jqT62zU9CTg",
  "key19": "2cEn1dxZ4AkmLMjAKM77hkfWyza4mHVWAbveH3VkEcHVANmv6HbGLuCshg6L2F7Q76EBCbyGoPvbNwUQe5vNRPn9",
  "key20": "3AmRmLk8zPNCU8wHYfrLZcAx7qKYS2p52NS46mBVADvSS6kfFx4X5BHrnafcNX2N1FBn1DsqUsYmoTXP9Z8pwCAH",
  "key21": "5AvstF4St4UhBKVWQvmLnVURXrdZoxGq3Nu4gSb9B82bvReRMmvg5XCzVYkBz94ShBZqYr3PnEgVbDTd8fTRNzYf",
  "key22": "fVJhB3xD5J9taBQJ56TojVW4wC3137Y2p1vsm91BQSbFrfh6PmhPqoGnKqmPHoMvzLWUR5eqQixATc5s8v8N9sn",
  "key23": "3A6iQwD6qEMoFM2WEsxd3kxcDY64gqBWh4YSNexnJZsCLxiKB672RnD9LEYPHp65uTYaphyEk5AM6BAQ4jgjEhHq",
  "key24": "5FEuJeTYMeeT25SNL7kpzjtmK6kNcQMct2VKsxDUsaPPGdgAyGXF9UKik8uxxPojwzNR41vgRjLBuSnjPMx7tzUY",
  "key25": "3AXxbTx9pUKVZBDrbpj4bS13GoyM4JD3Wd9k4MEFUBuVtCcNFetccjhv4zDxxdwYY6G9SgR3da8CVs1a1WHBaR1g",
  "key26": "51uw6UU6JHwxnDwyAFQR7X7MPNy9VtkgCDwYHUFsTC8We319hBdP4XQnkSf67PEQ7NSPVptwWHbv39YMy9dKTQ5L",
  "key27": "3pxmgAoZzhdPwzfeNb5KkVg7dDWN7kp3goUmmhKkE9ikq5A2LYZS66gLSALq8Ny2uasBh24iuhhdbW98VJXKxrqM"
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

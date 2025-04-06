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
    "3Yprbtc63Sc7Bmj8Jj5F8mQGrHWNs9WwjCf9sYrk6swGkf9cahLen1LNfr5xfPo46Uxeh8PM5Mqe8t5qQ19HcriY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bhZZaKsKvX3ZXtvARDLe8vpvZW9BsuVKpjRFqfZ1HpCYLHFiBrExnirANLt5uuC9tn9gEKAB6yxQpPdDGopsta",
  "key1": "5YSXSAtVhYGu9q9nvz5Zfsdeaz7TTfoKwmsMfGSqjptYKruARSsjBkWHiLajnnmb45jSWrNhjkqX6Zc91Fbn9Vop",
  "key2": "4j1jfk2qufd8kDMTQj1WkpTu6JFFCAU8SqRB4DyaacCcsiDZgGB2E1CELK9DhaWAAcoT5CuTCT1VHy4S6cLeyAXA",
  "key3": "5tiTZMRGFrCVYyvq2c8ve4f1G29gXZUdV4nxUssPzozucoqVp49PC1qiPCoyb6zAodpQyJYufzugCQjQC2xNZD3i",
  "key4": "4W6tjt9ibg4d14ifofzu79Z4ixVPxNKJsd53rDpXQCToNyV1V4fyQGthcj1YBL2559vy9Cwg52NBmLdnhEE4Y23J",
  "key5": "2UWbaA3v963RKiVXfwRUNQSbYNXuS8epR5Zoym1dm933DVkmVTykkM8B8hShYxR33yFQoHAPZ987VnKdTimmCK15",
  "key6": "2M827yCYGNXUyN9UfCWFy5hbtHnkwFQNzjj9tWXL3gosaB3mxPd59RnZ2fiin1RX9JwF3Riiau5zHuBkx4vTZ2tZ",
  "key7": "4sB1PXFGZ8qqQ26uoMeY6dK2v7vr6byh2G5oRsXYjvJArq1biXRk5cjTv4KTN6gmDV12U55rpWbSLLUHMZX59Bfi",
  "key8": "58cmcqYmaDYqvyv9uT9FceFYxqwvSNpzrZ28zv5hEUjf86tcomkBRFHncP4A9ZfDfngQDwyinaUxcd7g8A4JnhT2",
  "key9": "3Cif469e5SjhGthCoDZCiJ3wWKm72RFj8NZDgUiCsFhfDdNXnB72is9bTqYHEVzqUVs61Z8maFKYSrmHxL3LxEvq",
  "key10": "5PFWsQU2WasusPn97mwrajiiA3xPFWSkg5bD2oiS9HU7SXWTB2MrwbsGnW85MTpg2aansawJAXUGppydzLpDUERY",
  "key11": "5bioeE9hSYGAszRopWBEFRvZbFXAFweRDKZgDgH3U7Cui199fedTLD6K1ADFQBssHQpVgTAXgu1xeei12Jjx7UWc",
  "key12": "2UcpoKokpamSLahCf9danhLEXMC3P3uDR9QbXrrmm5pgLMQt9yFHDxDt64HYLejbTrnLS9nakHZ9J6UHZVfpnZWP",
  "key13": "3oyvzWyEKkxweb6c8ascNz5HvpwTMQHCv9FtTVvHxNkPQQtZwskcS6h2tQ6D5DQZCsBkKaZe16Ms4Wbf321KvwA6",
  "key14": "4aaVgq53ubNAz9MMBckQMFNdub9d5t1eyLh7VyK1995jtU9NcJDHVLiqJFNxVntZBK6gYCR5GnJArYGMn58oE2Y9",
  "key15": "2LZ7UVrVsFuZTpKahizjBDHTMcGwn5m3aLCFMjzYgy7FkfwxFeEhDoHN2ivbjGvq53kuQMDWfouNU2AKsRpNqZVN",
  "key16": "4atmMEbyJUnezrKpaeE5H4KF2QP37jK38etd5fZAVP5D4SDuKUe7WXLjMmf4HPEbpAyGFMLoa1h74mEscZ9BcEin",
  "key17": "5L7a4hCUgPLk7qjGwBb9WKBoH32779WUtzTpoYY77ivvxLQhrXHgtV7F3Hw42KzwL1gdLVoLywLwv33o1w7G7aqi",
  "key18": "2QL4ngmRYJsvAkE2g2hpAQPdALLZ9sWinWsRNRmCzmMT2TeG4ye9XwcJYjqQ9Gxygx3phfZXf2mzpDhywmWkjWBC",
  "key19": "5VtrQLxfTdz6JU78rqApNq9Up7tXZ3XX3MgSKhSsWSmc2Nw4uqzBDDxct4hpxUfsbmjPDXaTYxi3z552QVujr4YQ",
  "key20": "aMBnrHPFDYHkWoMbv6jHG16T3yDodYdzT1KYppKn9DK2A6vRCBp9S5yQg2bTYcaZ5Ufm5K12z1gJXVXAgkFnK4k",
  "key21": "MXBRPioEeJBz5Q1tuAqveKrUu7KEpim286VfFaQCeTBXqBjtuU88rSpVhcnp64vVkbT4jrbKFDt9gpir4bZ8cya",
  "key22": "51EmvT72vdfupHxsqtVeyyFuKFvhYp3MbCoqAuXaLSgCXnsrD9R9YpDAtP5ioax3k67SekqSKSZs8HcihhnjRhFV",
  "key23": "343dG9Pu77yTXwoa8P8WB7ZnRZJGKbBazVEh5f6UiGoJRjp9vp9u3SxnV92S1oQJKs2y6q1ABqzCHfCenWhbuHe4",
  "key24": "4wKomkGfkQdcf6RuYLytz18Lc3BqTqMerWoH8LqMq2D5cu5WAUUDiPHN1GChfPPy9j33qfFXcc7x2sPhLEtH2VrA",
  "key25": "UCSGjdjptyX3CUPnuBvr6LPcJ7oCpnoQqkzEpVrUvQG4XYehJthCZbLU894xWFgtaARmcfK9cpsmCskQRJn6a2v",
  "key26": "5c43iiXTF747Va7nLzaWNGmTPEEKmURD6b8JUnp6ZXr838VK7EfRy1utRr3K6Ghpe6296osoiL2BDNaNCRTyhRhv",
  "key27": "5ZyjPg9Tx3QmcSJeJsZ7WRwAqw3uENLN3qdUXoMjAgmLoyGzdD7hzkyu8dtLrWqGvLtUeDi3nfZvwRYQxswaQkvW",
  "key28": "2s1zJxmZmUkVdCN7QZ5K99HUhpkqibW4UcSQ9f4vLga3VKk9fcEaRWMV7TVD2U6ejW5d3JNBPNE9srfCYP4BejqQ",
  "key29": "3eE9v5PEuhNejzKUvmrbdujBFLh85TTJXGZwRw6h2K1VxLs2wGbNzUCE8UJc6uR6HYzKpuWrWYNXbHcRSxTym7EE",
  "key30": "23YoFRRU6Gd1L6AVvDv9oB4HQqfjk29F66qPtQ7NUBus72dXt53nperxSVfSpVzvtYQQ6VKKDLyXKHHze2z4PYkv",
  "key31": "5ms6qDeokgrnE9tdzbjLiZtXbDgkRLoLkM1sB7zzXGC7KKi9YMKRdxqLDDMP5sdhDopF4JLs6z5YZnXS3u41F7Ab",
  "key32": "5AsWjBraD8X39URTbC2ef3TgS2kAY2jDPwPm8SRineqf1JqjK2aoJHG9wukeSr1m6Bvi4QMHzR8pmkomWuqpar4Q",
  "key33": "u3RpNrznfwqFzddhCoj8EyCUxb3JSjXCNHJeoJmcQvRUg2BuWAuADz5vPUitDhddAbYEmFCgox6cAhmicEsV8Tn",
  "key34": "5dGEZQQPtXs2RY2Rhior9DbTXYvADeDm9sNLtEGuqcMPzXjqBeLypUmKiBXzNvf53qupoZ6M6W9xZqViRJZAJMAn"
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
